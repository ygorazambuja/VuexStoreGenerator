import { window } from "vscode";

import { createStoreDirectory } from "./createStoreDirectory";
import { CreatorFileByTemplate } from "./CreatorFileByTemplate";
import { TEMPLATES } from "./templates";

export async function createStore(path: string, storeName: string) {
  createStoreDirectory(path, storeName);

  const STORE_PATH = `${path}/${storeName}`;
  const creatorFileByTemplate = new CreatorFileByTemplate(TEMPLATES, STORE_PATH);
  creatorFileByTemplate.generateAllTemplateFiles();
  
  window.showInformationMessage(
    `Store ${storeName} has been created in ${path}`
  );
}
