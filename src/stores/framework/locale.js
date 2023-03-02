import { defineStore } from "pinia"

export const useLocaleStore = defineStore("locale", {
  state: () => ({
    locales: {}
  }),
  getters: {
    Get: (state) => (path) => {
      if (!path) {
        return state.locales;
      }

      path = path.split(".");
      const pathLength = path.length - 1;
      let results = { ...state.locales };

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
    SetLocales(locales) {
      this.locales = locales;
    }
  }
})