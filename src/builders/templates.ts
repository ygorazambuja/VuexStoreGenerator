export const TEMPLATES = {
  state: `export default {
  example: {}		
}`,
  actions: `export default {
  cleanExample: ({ commit }) => commit("updateExample", {})		
}`,
  mutations: `export default {
  updateExample: (state, data) => state.example = data
}`,
  getters: `export default {
  payload(state, getters) {
    return state.example;
  }
}`,
  index: `import actions from "./actions";
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
};
