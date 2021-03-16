<template>
  <div>
    <ul>
      <li>{{ recipes.Material.Name }}</li>
      <ul
        v-for="(subrecipe, index) in recipes.SubRecipes"
        :key="`${recipes.Material.Name}_subrecipe_${index}`"
      >
        <subrecipe :recipes="subrecipe"/>
      </ul>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "subrecipe",
  components: {
    subrecipe: () => import("./SubRecipe.vue"),
  },
})
export default class Recipe extends Vue {
  @Prop() private recipes!: RecipeSet;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
li {
  text-align: left;
}
</style>
