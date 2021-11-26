import { window } from "vscode";

import { createStoreDirectory } from "./createStoreDirectory";
import {
  createStateFile,
  createStoreActionFile,
  createStoreGetterFile,
  createStoreIndexFile,
  createStoreMutationFile,
} from "./createStoreFiles";

export async function createStore(path: string, storeName: string) {
  createStoreDirectory(path, storeName);

  const STORE_PATH = `${path}/${storeName}`;

  createStoreIndexFile(STORE_PATH);
  createStoreMutationFile(STORE_PATH);
  createStoreActionFile(STORE_PATH);
  createStoreGetterFile(STORE_PATH);
  createStateFile(STORE_PATH);

  window.showInformationMessage(
    `Store ${storeName} has been created in ${path}`
  );
}
