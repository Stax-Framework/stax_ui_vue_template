import { defineStore } from "pinia"
import router from "@/router/index";

export const useRouterStore = defineStore("router", {
  state: () => ({
    show: true,
    route: "/"
  }),
  getters: {
    GetShowState: (state) => {
      return state.show;
    },
    GetRoute: (state) => {
      return state.route;
    }
  },
  actions: {
    HideUI() {
      this.show = false;
    },
    ShowUI() {
      this.show = true;
    },
    ChangeRoute(route) {
      const hasRoute = router.hasRoute(route);

      if (!hasRoute) {
        return;
      }

      router.push(route);
      this.route = route;
    }
  }
})