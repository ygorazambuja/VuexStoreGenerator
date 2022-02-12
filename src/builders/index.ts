import { window } from "vscode";

import { createStoreDirectory, createTestDirectory } from "./utils/";
import { CreatorFileByTemplate } from "./CreatorFileByTemplate";
import {
  TEMPLATES,
  TEMPLATES_MUTATION_TYPES,
  TEMPLATES_TEST,
} from "./templates";

export async function createStore(path: string, storeName: string) {
  createStoreDirectory(path, storeName);

  const STORE_PATH = `${path}/${storeName}`;
  const creatorFileByTemplate = new CreatorFileByTemplate(
    TEMPLATES,
    STORE_PATH
  );
  creatorFileByTemplate.generateAllTemplateFiles();

  window.showInformationMessage(
    `Store ${storeName} has been created in ${path}`
  );
}

export async function createStoreWithMutationTypes(
  path: string,
  storeName: string
) {
  createStoreDirectory(path, storeName);

  const STORE_PATH = `${path}/${storeName}`;
  const creatorFileByTemplate = new CreatorFileByTemplate(
    TEMPLATES_MUTATION_TYPES,
    STORE_PATH
  );
  creatorFileByTemplate.generateAllTemplateFiles();

  window.showInformationMessage(
    `Store ${storeName} has been created in ${path}`
  );
}

export async function createStoreTest(path: string) {
  createTestDirectory(path);

  const creatorFileByTemplate = new CreatorFileByTemplate(
    TEMPLATES_TEST,
    `${path}/__tests__`
  );
  creatorFileByTemplate.generateAllTemplateFiles();

  window.showInformationMessage("Test directory has been created");
}
