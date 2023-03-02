const Config = {
  namespaced: true,
  state: () => ({
    configs: {}
  }),
  getters: {
    Get(path) {
      if (!path) {
        return this.$store.state.configs
      }

      path = path.split(".")
      const pathLength = path.length - 1

      let results = { ...this.$store.state.configs }

      Object.entries(path).forEach(entry => {
        const [ key, value ] = entry

        if (key !== pathLength) {
          results = results[value]
        }
      })

      return results
    }
  },
  actions: {},
  mutations: {
    SET_CONFIGS(state, payload) {
      state.configs = payload.configs
    }
  }
}