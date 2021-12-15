export const TEMPLATES= [
  {
    name: 'state',
    filename: 'state.js',
    template: `export default {
      example: {}		
    }`,
  },
  {
    name: 'actions',
    filename: 'actions.js',
    template: `export default {
      cleanExample: ({ commit }) => commit("updateExample", {})		
    }`,
  },
  {
    name: 'mutations',
    filename: 'mutations.js',
    template: `export default {
      updateExample: (state, data) => state.example = data
    }`,
  },
  {
    name: 'getters',
    filename: 'getters.js',
    template: `export default {
      payload(state, getters) {
        return state.example;
      }
    }`,
  },
  {
    name: 'index',
    filename: 'index.js',
    template: `import actions from "./actions";
    import mutations from "./mutations";
    import getters from "./getters";
    import state from "./state";
        
    export default {
      namespaced: true,
      state,
      mutations,
      actions,
      getters,
    };`,
  }
];