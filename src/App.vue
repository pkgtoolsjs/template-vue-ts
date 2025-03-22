<script setup lang="ts">
/**
 * When using the `unplugin-auto-import` and `unplugin-vue-components` packages,  
 * they will automatically import components and Vue API functions for your project.  
 * Just enjoy your time! :)
 *
 * @see [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import)
 * @see [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components)
 */

// import { ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue + TS" />
</template>

<style scoped lang="less">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  &.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
}
</style>
