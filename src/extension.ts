import { commands, ExtensionContext, window } from "vscode";
import { createStore } from "./builders";

const EXTENSION_NAME = "vuex-store-generator";

export function activate({ subscriptions }: ExtensionContext) {
  const generate = commands.registerCommand(
    `${EXTENSION_NAME}.generate`,
    handleCreateStore
  );

  subscriptions.push(generate);
}

export function deactivate() {}

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
