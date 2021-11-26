import { workspace, Uri } from "vscode";
import { TEMPLATES } from "./templates";

export function createStateFile(storePath: string) {
  workspace.fs.writeFile(
    Uri.file(`${storePath}/state.js`),
    Buffer.from(TEMPLATES.state)
  );
}

export function createStoreIndexFile(storePath: string) {
  workspace.fs.writeFile(
    Uri.file(`${storePath}/index.js`),
    Buffer.from(TEMPLATES.index)
  );
}

export function createStoreMutationFile(storePath: string) {
  workspace.fs.writeFile(
    Uri.file(`${storePath}/mutations.js`),
    Buffer.from(TEMPLATES.mutations)
  );
}

export function createStoreActionFile(storePath: string) {
  workspace.fs.writeFile(
    Uri.file(`${storePath}/actions.js`),
    Buffer.from(TEMPLATES.actions)
  );
}

export function createStoreGetterFile(storePath: string) {
  workspace.fs.writeFile(
    Uri.file(`${storePath}/getters.js`),
    Buffer.from(TEMPLATES.getters)
  );
}
