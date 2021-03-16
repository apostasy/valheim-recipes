<template>
  <div id="app">
    <MaterialList msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import MaterialList from './components/MaterialList.vue';
import Recipe from './components/Recipe.vue';
import VueLodash from 'vue-lodash'
import uniqBy from 'lodash/uniqBy'
import isEqual from 'lodash/isEqual'
import includes from 'lodash/includes'

Vue.use(VueLodash, { name: 'custom', lodash: { uniqBy, isEqual, includes } })

@Component({
  components: {
    HelloWorld,
    MaterialList,
    Recipe
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
