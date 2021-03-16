<template>
  <div class="tr">
    <tr
      data-toggle="collapse"
      :data-target="`#${recipes.Material.Name.replace(' ', '')}_recipe_card`"
      class="clickable"
    >
      <td>{{ recipes.Material.Name }}</td>
      <td>{{ recipes.Material.Category }}</td>
      <td>{{ recipes.Material.Weight }}lbs.</td>
      <td>{{ recipes.Material.Notes }}</td>
    </tr>
    <tr
      v-if="
        Object.keys(recipes.Recipes).length > 0 ||
          (reagentFor && reagentFor.length > 0) ||
          recipes.SubRecipes.length > 0
      "
    >
      <td colspan="4">
        <div
          :id="`${recipes.Material.Name.replace(' ', '')}_recipe_card`"
          class="collapse"
        >
          <div
            v-for="(recipe, i) in recipes.Recipes"
            :key="`inner_recipe_${i}`"
          >
            Craft {{ i }}:
            <ul>
              <li
                v-for="(ingredient, j) in recipe"
                :key="`inner_recipe_ingredients_${j}`"
              >
                {{ ingredient.Ingredient }} x
                {{ ingredient["Ingredient Quantity"] }}
              </li>
            </ul>
          </div>
          <div v-if="recipes.SubRecipes.length > 0">
              Raw Materials
              <SubRecipe v-for="(subrecipe, index) in recipes.SubRecipes"
                :recipes="subrecipe"
                :key="`${subrecipe.Material.Name}_subrecipe_${index}`"
              />
          </div>
          <div v-if="(reagentFor && reagentFor.length > 0)">
            Used in the following recipes:
            <ul>
              <li
                v-for="recipe in reagentFor"
                :key="
                  recipes.Material.Name +
                    '_reagent_' +
                    recipe +
                    '_' +
                    recipes.Quantity
                "
              >
                {{ recipe }}
              </li>
            </ul>
          </div>
        </div>
      </td>
    </tr>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SubRecipe from './SubRecipe.vue'

@Component({
  name: "recipe",
  components: {
    SubRecipe,
  },
})
export default class Recipe extends Vue {
  @Prop() private recipes!: RecipeSet;
  @Prop() private reagentFor!: string[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.tr {
  display: contents;
}
</style>
