const store = new Vuex.Store({
  state: {
    isNavActive: false
  },
  mutations: {
    setNavActive: (state, boolean) => {
      state.isNavActive = boolean;
    }
  },
  getters: {}
});
