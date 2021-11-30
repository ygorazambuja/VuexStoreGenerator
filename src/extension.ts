import path = require("path");
import * as vscode from "vscode";
import { handleCreateStore } from "./vuex-module";

const EXTENSION_NAME = "vuex-store-generator";

export function activate(context: vscode.ExtensionContext) {
  const generate = vscode.commands.registerCommand(
    `${EXTENSION_NAME}.generate`,
    handleCreateStore
  );

  context.subscriptions.push(generate);
}

export function deactivate() {}
