import { workspace, Uri } from "vscode";

export function createTestDirectory(path: string) {
  const testDirectory = Uri.file(`${path}/__tests__`);
  workspace.fs.createDirectory(testDirectory);
}
