import path = require("path");
import * as vscode from "vscode";

const EXTENSION_NAME = "vuex-store-generator";

export function activate(context: vscode.ExtensionContext) {
  const generate = vscode.commands.registerCommand(
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
  namespaced: true,
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
