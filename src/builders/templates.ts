export const TEMPLATES = [
  {
    name: "state",
    filename: "state.js",
    template: `export default {
      example: {}		
    }`,
  },
  {
    name: "actions",
    filename: "actions.js",
    template: `export default {
      cleanExample: ({ commit }) => commit("updateExample", {})		
    }`,
  },
  {
    name: "mutations",
    filename: "mutations.js",
    template: `export default {
      updateExample: (state, data) => state.example = data
    }`,
  },
  {
    name: "getters",
    filename: "getters.js",
    template: `export default {
      payload(state, getters) {
        return state.example;
      }
    }`,
  },
  {
    name: "index",
    filename: "index.js",
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
  },
];

export const TEMPLATES_MUTATION_TYPES = [
  {
    name: "state",
    filename: "state.js",
    template: `export default {
  example: [],
}
`,
  },
  {
    name: "actions",
    filename: "actions.js",
    template: `import mutationTypes from './mutation-types';
export default {
  async fetchExamples({ commit }) {
    const data = await fetch('/examples');
    commit(mutationTypes.SET_EXAMPLES, data);
  },  	
}
    `,
  },
  {
    name: "mutations",
    filename: "mutations.js",
    template: `import mutationTypes from './mutation-types';
export default {
  [mutationTypes.SET_EXAMPLES](state, data) {
    state.examples = data;
  },
}
`,
  },
  {
    name: "mutations-types",
    filename: "mutations-types.js",
    template: `export default {
  SET_EXAMPLES: 'SET_EXAMPLES'
}`,
  },
  {
    name: "getters",
    filename: "getters.js",
    template: `export default {
  examplesChecked(state) {
    return state.examples.filter(example => example.checked);
  }
}
`,
  },
  {
    name: "index",
    filename: "index.js",
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
  },
];
