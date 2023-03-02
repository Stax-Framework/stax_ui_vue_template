import { defineStore } from "pinia"

export const useConfigStore = defineStore("config", {
  state: () => ({
    configs: {}
  }),
  getters: {
    Get: (state) => (path) => {
      if (!path) {
        return state.configs;
      }

      path = path.split(".");
      const pathLength = path.length - 1;
      let results = { ...state.configs };

      Object.entries(path).forEach(entry => {
        const [ key, value ] = entry;

        if (key !== pathLength) {
          results = results[value];
        }
      })

      return results
    }
  },
  actions: {
    SetConfigs(configs) {
      this.configs = configs;
    }
  }
})