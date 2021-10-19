import { navigations } from "@/config/routeControl";
if (process.env.NODE_ENV === 'development') {
  console.log('== Navigations', navigations);
}

export default {
  namespaced: false,

  state: () => ({
    navigations
  }),

  getters: {
    getNavMenuArr(state) {
      return state.navigations
    }
  },

  mutations: {

  },

  actions: {

  }
}