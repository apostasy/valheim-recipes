<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <label>Search for Names</label> <br />
          <input type="text" v-model="textFilter" />
        </div>
        <div class="col-sm">
          <select class="form-control" v-model="selected">
            <option value="none" selected>
              Select a category
            </option>
            <option v-for="category in categories" :key="category">{{
              category
            }}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm">
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
                <recipe
                  :recipes="getRecipe(item.Name)"
                  :reagentFor="reagentFor(item)"
                  :key="'recipe_' + item.Name"
                />
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
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
  private recipes: RecipeDefinition[] = [];
  private selected = "none";
  private textFilter = "";
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
    let filteredItems = this.items as Material[];

    if (this.textFilter !== "") {
      filteredItems = filteredItems.filter(
        (i) => i.Name.toLowerCase().indexOf(this.textFilter) >= 0
      );
      const reagentFor = this.reagentFor;
      filteredItems = filteredItems.concat(
        this.items.filter(
          (i) =>
            reagentFor(i)
              .join("")
              .toLowerCase()
              .indexOf(this.textFilter) >= 0
        )
      );
      const matchingSubRecipes = this.filterSubRecipes(this.textFilter).map(i=>this.items.find(j=>j.Name===i.Result)).filter(i=>i !== undefined) as Material[];
      if(matchingSubRecipes !== undefined){
        filteredItems = filteredItems.concat(...matchingSubRecipes);
      }
    }

    if (this.selected !== "" && this.selected !== "none") {
      filteredItems = filteredItems.filter((i) => i.Category === this.selected);
    }
    return [...new Set(filteredItems)];
  }

  filterSubRecipes(item: string): RecipeDefinition[]{
    if(item == null){
      return [];
    }
    let items = this.recipes.filter(i=>i.Ingredient.toLowerCase().indexOf(item.toLowerCase()) >= 0);
    items = items.concat(...items.map(i=>this.filterSubRecipes(i.Result)));
    return items
  }

  groupBy(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

  getRecipe(item: string): RecipeSet | null {
    // const ingredients = this.recipes.filter((i) => i.Result === item.Name);
    // const subRecipes = ingredients.map(i=>this.getRecipe(this.items.find(j=>j.Name===i.Ingredient)));
    // const recipeSet = {
    //   Material: item,
    //   Recipes: this.groupBy(ingredients, "Quantity"),
    //   SubRecipes: subRecipes
    // } as RecipeSet;
    // return recipeSet;

    if (item == null) {
      return null;
    }
    const r = this.recipes.filter((i) => i.Result === item);
    let s = [] as (RecipeSet | null)[];
    if (r.length !== 0) {
      s = r.map((i) => this.getRecipe(i.Ingredient));
    }
    const recipe = {
      Material: this.items.find((i) => i.Name === item),
      Recipes: this.groupBy(r, "Quantity"),
      SubRecipes: (this as any).custom.uniqBy(
        s.filter((i) => i !== null),
        (i) => i.Material.Name
      ),
    } as RecipeSet;

    return recipe;
  }

  reagentFor(item: Material): string[] {
    return this.recipes
      .filter((i) => i.Ingredient === item.Name)
      .map((i) => i.Result + " x " + i.Quantity);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
