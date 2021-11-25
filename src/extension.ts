import path = require("path");
import * as vscode from "vscode";
import {
  createStateFile,
  createStoreActionFile,
  createStoreGetterFile,
  createStoreIndexFile,
  createStoreMutationFile,
} from "./utils/createStoreFiles";

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
