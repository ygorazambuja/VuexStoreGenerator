// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import path = require("path");
import * as vscode from "vscode";

const EXTENSION_NAME = "vuex-store-generator";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "vuex-store-generator" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json

  let generate = vscode.commands.registerCommand(
    `${EXTENSION_NAME}.generate`,
    handleCreateStore
  );

  context.subscriptions.push(generate);
}

// this method is called when your extension is deactivated
export function deactivate() {}

async function handleCreateStore(e: any) {
  const storeName = await vscode.window.showInputBox({
    title: "Store Name",
  });
  if (!!e?.path && !!storeName) {
    return await createStore(e.path, storeName);
  }
  return;
}

async function createStore(path: string, storeName: string) {
  createStoreDirectory(path, storeName);

  const storePath = path + "/" + storeName;
  createStoreIndexFile(storePath);
  createStoreMutationFile(storePath);
  createStoreActionFile(storePath);
  createStoreGetterFile(storePath);
  createStateFile(storePath);

  vscode.window.showInformationMessage(
    `Store ${storeName} has been created in ${path}`
  );
}

async function createStoreDirectory(path: string, storeName: string) {
  vscode.workspace.fs.createDirectory(vscode.Uri.file(`${path}/${storeName}`));
}

async function createStoreIndexFile(storePath: string) {
  vscode.workspace.fs.writeFile(
    vscode.Uri.file(`${storePath}/index.js`),
    Buffer.from(`import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import state from "./state";

export default {
  namespace: true,
  state,
  mutations,
  actions,
  getters,
};
`)
  );
}

async function createStoreMutationFile(storePath: string) {
  vscode.workspace.fs.writeFile(
    vscode.Uri.file(`${storePath}/mutations.js`),
    Buffer.from(`export default {
  updateExample: (state, data) => state.example = data		
}`)
  );
}

async function createStoreActionFile(storePath: string) {
  vscode.workspace.fs.writeFile(
    vscode.Uri.file(`${storePath}/actions.js`),
    Buffer.from(`export default {
  cleanExample: ({ commit }) => commit("updateExample", {})		
}`)
  );
}

async function createStoreGetterFile(storePath: string) {
  vscode.workspace.fs.writeFile(
    vscode.Uri.file(`${storePath}/getters.js`),
    Buffer.from(`export default {
  payload(state, getters) {
	  return state.example;
  }
}`)
  );
}

async function createStateFile(storePath: string) {
  vscode.workspace.fs.writeFile(
    vscode.Uri.file(`${storePath}/state.js`),
    Buffer.from(`export default {
  example: {}		
}`)
  );
}
