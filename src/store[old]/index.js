import { createStore } from 'vuex'

// Modules
import Router from "./modules/framework/Router"
import Config from "./modules/framework/Config"
import Locale from "./modules/framework/Locale"

export default createStore({
  modules: {
    Router,
    Config,
    Locale
  }
})