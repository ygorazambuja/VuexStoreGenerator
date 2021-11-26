import { workspace, Uri } from "vscode";

export function createStoreDirectory(path: string, storeName: string) {
  workspace.fs.createDirectory(Uri.file(`${path}/${storeName}`));
}
