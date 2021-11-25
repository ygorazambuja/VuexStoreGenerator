import * as vscode from "vscode";

export async function createStateFile(storePath: string) {
  vscode.workspace.fs.writeFile(
    vscode.Uri.file(`${storePath}/state.js`),
    Buffer.from(`export default {
    example: {}		
  }`)
  );
}

export async function createStoreIndexFile(storePath: string) {
  vscode.workspace.fs.writeFile(
    vscode.Uri.file(`${storePath}/index.js`),
    Buffer.from(`import actions from "./actions";
    import mutations from "./mutations";
    import getters from "./getters";
    import state from "./state";
    
    export default {
      namespaced: true,
      state,
      mutations,
      actions,
      getters,
    };
    `)
  );
}

export async function createStoreMutationFile(storePath: string) {
  vscode.workspace.fs.writeFile(
    vscode.Uri.file(`${storePath}/mutations.js`),
    Buffer.from(`export default {
    updateExample: (state, data) => state.example = data		
  }`)
  );
}

export async function createStoreActionFile(storePath: string) {
  vscode.workspace.fs.writeFile(
    vscode.Uri.file(`${storePath}/actions.js`),
    Buffer.from(`export default {
    cleanExample: ({ commit }) => commit("updateExample", {})		
  }`)
  );
}

export async function createStoreGetterFile(storePath: string) {
  vscode.workspace.fs.writeFile(
    vscode.Uri.file(`${storePath}/getters.js`),
    Buffer.from(`export default {
    payload(state, getters) {
        return state.example;
    }
  }`)
  );
}
