<template>
  <div v-show="show">
    <router-view/>
  </div>
</template>

<script>
  import { useRouterStore } from "@/stores/framework/router"

  export default {
    computed: {
      show() {
        return this.routerStore.GetShowState
      }
    },
    setup() {
      const routerStore = useRouterStore();

      return { routerStore }
    }
  }
</script>