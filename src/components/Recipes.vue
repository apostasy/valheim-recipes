<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <table>
      <tr>
        <th>Name</th>
        <th>Category</th>
        <th>Weight</th>
        <th>Notes</th>
      </tr>
      <tr v-for="item in items" :key="item.Name">
        <td>{{item.Name}}</td>
        <td>{{item.Category}}</td>
        <td>{{item.Weight}}lbs.</td>
        <td>{{item.Notes}}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Recipes extends Vue {
  @Prop() private msg!: string;
  private dataLocation = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSLPueia8-lx3pOhD4C26iOvFmRxtUApEB9R2WFSx6uk4kEIaiZA2sMPhoXymO7EFTx5kqKzp2ONMBM/pub?output=csv';
  private items: any[] = [];

  created(){    
    console.log(this);
    this.$papa.parse(this.dataLocation, {
      download: true,
      header: true,
      complete: this.showInfo
    });
  }

  showInfo(results: any) {
    this.items = results.data
    console.log(results);
  }
  
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
</style>
