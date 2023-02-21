<template>
  <div v-show="show">
    <router-view/>
  </div>
</template>

<script>
  export default {
    computed: {
      show() {
        return this.$store.getters["Router/GetShowState"]
      }
    }
  }
</script>