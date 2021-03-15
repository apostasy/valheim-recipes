<template>
  <div>
    <select class="form-control" v-model="selected">
      <option>Category</option>
      <option v-for="category in categories" :key='category'>{{category}}</option>
    </select>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Weight</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in filteredItems">
          <recipe :recipes="getRecipe(item)" :key="'recipe_' + item.Name" />
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Recipe from "./Recipe.vue";

@Component({
  components: {
    Recipe,
  },
})
export default class MaterialList extends Vue {
  @Prop() private msg!: string;
  private items: Material[] = [] as Material[];
  private recipes: any[] = [];
  private selected = "";
  private $papa;

  created() {
    this.$papa = this.$papa || {};

    this.$papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSLPueia8-lx3pOhD4C26iOvFmRxtUApEB9R2WFSx6uk4kEIaiZA2sMPhoXymO7EFTx5kqKzp2ONMBM/pub?gid=0&single=true&output=csv",
      {
        download: true,
        header: true,
        complete: (result) => (this.items = result.data),
      }
    );
    this.$papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSLPueia8-lx3pOhD4C26iOvFmRxtUApEB9R2WFSx6uk4kEIaiZA2sMPhoXymO7EFTx5kqKzp2ONMBM/pub?gid=190469337&single=true&output=csv",
      {
        download: true,
        header: true,
        complete: (result) => (this.recipes = result.data),
      }
    );
  }

  get categories() {
    return [...new Set(this.items.map((i) => i.Category).filter((i) => i))];
  }

  get filteredItems(): Material[] {
    if (this.selected !== "" && this.selected !== "Category") {
      return this.items.filter((i) => i.Category === this.selected);
    }
    return this.items;
  }

  groupBy(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

  getRecipe(item: Material): RecipeSet {
    const ingredients = this.recipes.filter((i) => i.Result === item.Name);
    const recipeSet = {
      Material: item,
      Recipes: this.groupBy(ingredients, "Quantity"),
    } as RecipeSet;
    return recipeSet;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
