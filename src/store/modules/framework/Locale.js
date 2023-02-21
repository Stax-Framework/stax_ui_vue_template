const Locale = {
  namespaced: true,
  state: () => ({
    locales: {}
  }),
  getters: {
    Get(path) {
      if (!path) {
        return this.$store.state.locales
      }

      path = path.split(".")
      const pathLength = path.length - 1

      let results = { ...this.$store.state.locales }

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
    SET_LOCALES(state, payload) {
      state.locales = payload.locales
    }
  }
}