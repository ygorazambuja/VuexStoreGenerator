import { window } from "vscode";

import { createStoreDirectory } from "./createStoreDirectory";
import { CreatorFileByTemplate } from "./CreatorFileByTemplate";
import { TEMPLATES, TEMPLATES_MUATION_TYPES } from "./templates";

export async function createStore(path: string, storeName: string) {
  createStoreDirectory(path, storeName);

  const STORE_PATH = `${path}/${storeName}`;
  const creatorFileByTemplate = new CreatorFileByTemplate(TEMPLATES, STORE_PATH);
  creatorFileByTemplate.generateAllTemplateFiles();
  
  window.showInformationMessage(
    `Store ${storeName} has been created in ${path}`
  );
}

export async function createStoreWithMutationTypes(path: string, storeName: string) {
  createStoreDirectory(path, storeName);

  const STORE_PATH = `${path}/${storeName}`;
  const creatorFileByTemplate = new CreatorFileByTemplate(TEMPLATES_MUATION_TYPES, STORE_PATH);
  creatorFileByTemplate.generateAllTemplateFiles();
  
  window.showInformationMessage(
    `Store ${storeName} has been created in ${path}`
  );
}
