import { commands, ExtensionContext, window } from "vscode";
import { createStore, createStoreWithMutationTypes } from "./builders";

const EXTENSION_NAME = "vuex-store-generator";

export function activate({ subscriptions }: ExtensionContext) {
  const generate = commands.registerCommand(
    `${EXTENSION_NAME}.generate`,
    handleCreateStore
  );

  const generateWithMutationTypes = commands.registerCommand(
    `${EXTENSION_NAME}.generateWithMutationTypes`,
    handleCreateStoreWithMutationTypes
  );

  subscriptions.push(generate);
  subscriptions.push(generateWithMutationTypes);
}

async function handleCreateStore({ path }: { path: string }) {
  const storeName = await window.showInputBox({
    title: "Enter the name of the Store",
    placeHolder: "Example",
  });
  if (path && storeName) {
    return await createStore(path, storeName);
  }

  return window.showErrorMessage("Something went wrong!");
}

async function handleCreateStoreWithMutationTypes({ path }: { path: string }) {
  const storeName = await window.showInputBox({
    title: "Enter the name of the Store",
    placeHolder: "Example",
  });
  if (path && storeName) {
    return await createStoreWithMutationTypes(path, storeName);
  }

  return window.showErrorMessage("Something went wrong!");
}

export function deactivate() {}