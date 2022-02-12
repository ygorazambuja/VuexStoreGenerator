import { commands, ExtensionContext, window } from "vscode";
import {
  createStore,
  createStoreTest,
  createStoreWithMutationTypes,
} from "./builders";

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

  const generateTestDirectory = commands.registerCommand(
    `${EXTENSION_NAME}.generateTests`,
    handleCreateTestDirectory
  );

  subscriptions.push(generate);
  subscriptions.push(generateWithMutationTypes);
  subscriptions.push(generateTestDirectory);
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

async function handleCreateTestDirectory({ path }: { path: string }) {
  if (path) {
    createStoreTest(path);
  }

  return window.showErrorMessage("Something went wrong!");
}

export function deactivate() {}
