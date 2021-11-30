import * as fs from "fs";
import * as vscode from "vscode";

const models: any = {
  index: 'models/index.js',
  state: 'models/state.js',
  mutations: 'models/mutations.js',
  getters: 'models/getters.js',
  actions: 'models/actions.js',
};

export const handleCreateStore = async (e: any) => {
  const storeName = await vscode.window.showInputBox({
    title: "Store Name",
  });
  if (!!e.path && !!storeName) {
    return await createStore(e.path, storeName);
  }
  return;
};

const createStore = async (path: string, storeName: string) => {
  try {
    const storePath = path + "/" + storeName;
    await createStoreDirectory(path, storeName);
    await generateFiles(storePath);
  } catch(error: any) {
    vscode.window.showInformationMessage(error.message);
  }
};

const createStoreDirectory = async (path: string, storeName: string) => {
  await vscode.workspace.fs.createDirectory(vscode.Uri.file(`${path}/${storeName}`));
};

const generateFiles = async(storePath: string) => {
  try {
  Object.keys(models).forEach(async (file: string) => {
    const output = `${storePath}/${file}.js`;
    const input = models[file];
    await generateFile(input, output);
  });
  } catch(error: any) {
    vscode.window.showInformationMessage(error.message);
  }
};

const generateFile = async (inputFile: string, outputFile:string ) =>{
  const content = Buffer.from(getTextModel(inputFile), 'utf8');
  await vscode.workspace.fs.writeFile(
    vscode.Uri.file(outputFile),
    content
  );
};

const getTextModel = (file: string) => {
  const data = fs.readFileSync(`${__dirname}/${file}`, 'utf8');
  return data.toString();
};