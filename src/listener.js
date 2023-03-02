import axios from "axios"
import { useRouterStore } from "@/stores/framework/router"
import { useConfigStore } from "@/stores/framework/config"
import { useLocaleStore } from "@/stores/framework/locale"

// NEW SYSTEM
const EVENTS = [];

document.onreadystatechange = () => {
  if (!document.readyState === "complete") {
    return;
  }

  window.addEventListener("message", (event) => {
    const name = event.data.name;
    const data = event.data.data;

    EVENTS.forEach(e => {
      if (e.name == name) {
        e.callback(data);
      }
    })
  })

  const routerStore = useRouterStore();
  const localeStore = useLocaleStore();
  const configStore = useConfigStore();

  RegisterEvent("Router_HideUI", () => {
    routerStore.HideUI();
  })
  RegisterEvent("Router_ShowUI", () => {
    routerStore.ShowUI();
  })
  RegisterEvent("Router_ChangeRoute", (data) => {
    routerStore.ChangeRoute(data.route);
  })

  RegisterEvent("Locale_SetLocales", (data) => {
    localeStore.SetLocales(data.locales)
  })

  RegisterEvent("Config_SetConfigs", (data) => {
    configStore.SetConfigs(data.configs)
  })

  // axios.post(`http://${GetParentResourceName()}/ready`);
}

function RegisterEvent(name, callback) {
  EVENTS.push({ name, callback });
}

export { RegisterEvent }