(function(e){function t(t){for(var n,c,s=t[0],o=t[1],u=t[2],p=0,v=[];p<s.length;p++)c=s[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&v.push(a[c][0]),a[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);l&&l(t);while(v.length)v.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,s=1;s<r.length;s++){var o=r[s];0!==a[o]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},i=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=o;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},2395:function(e,t,r){},"346d":function(e,t,r){"use strict";r("3ed9")},"3e8b":function(e,t,r){},"3ed9":function(e,t,r){},"7c55":function(e,t,r){"use strict";r("2395")},"88cb":function(e,t,r){"use strict";r("3e8b")},a113:function(e,t,r){},bc82:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ul",[r("li",[e._v(e._s(e.recipes.Material.Name))]),e._l(e.recipes.SubRecipes,(function(t,n){return r("ul",{key:e.recipes.Material.Name+"_subrecipe_"+n},[r("subrecipe",{attrs:{recipes:t}})],1)}))],2)])},a=[],i=r("d4ec"),c=r("262e"),s=r("2caf"),o=(r("d3b7"),r("3ca3"),r("ddb0"),r("9ab4")),u=r("1b40"),l=function(e){Object(c["a"])(r,e);var t=Object(s["a"])(r);function r(){return Object(i["a"])(this,r),t.apply(this,arguments)}return r}(u["c"]);Object(o["a"])([Object(u["b"])()],l.prototype,"recipes",void 0),l=Object(o["a"])([Object(u["a"])({name:"subrecipe",components:{subrecipe:function(){return Promise.resolve().then(r.bind(null,"bc82"))}}})],l);var p=l,v=p,f=(r("346d"),r("2877")),d=Object(f["a"])(v,n,a,!1,null,"bd6e42b0",null);t["default"]=d.exports},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("MaterialList",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}})],1)},i=[],c=r("d4ec"),s=r("262e"),o=r("2caf"),u=r("9ab4"),l=r("1b40"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},v=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[e._v("typescript")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],f=function(e){Object(s["a"])(r,e);var t=Object(o["a"])(r);function r(){return Object(c["a"])(this,r),t.apply(this,arguments)}return r}(l["c"]);Object(u["a"])([Object(l["b"])()],f.prototype,"msg",void 0),f=Object(u["a"])([l["a"]],f);var d=f,b=d,h=(r("88cb"),r("2877")),_=Object(h["a"])(b,p,v,!1,null,"40244cba",null),g=_.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm"},[r("label",[e._v("Search for Names")]),e._v(" "),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.textFilter,expression:"textFilter"}],attrs:{type:"text"},domProps:{value:e.textFilter},on:{input:function(t){t.target.composing||(e.textFilter=t.target.value)}}})]),r("div",{staticClass:"col-sm"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"form-control",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"none",selected:""}},[e._v(" Select a category ")]),e._l(e.categories,(function(t){return r("option",{key:t},[e._v(e._s(t))])}))],2)])])]),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm"},[r("table",{staticClass:"table"},[e._m(0),r("tbody",[e._l(e.filteredItems,(function(t){return[r("recipe",{key:"recipe_"+t.Name,attrs:{recipes:e.getRecipe(t.Name),reagentFor:e.reagentFor(t)}})]}))],2)])])])])])},j=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th",[e._v("Name")]),r("th",[e._v("Category")]),r("th",[e._v("Weight")]),r("th",[e._v("Notes")])])])}],y=r("2909"),O=r("bee2"),k=(r("6062"),r("d3b7"),r("3ca3"),r("ddb0"),r("4de4"),r("d81d"),r("99af"),r("a15b"),r("7db0"),r("13d5"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tr"},[r("tr",{staticClass:"clickable",attrs:{"data-toggle":"collapse","data-target":"#"+e.recipes.Material.Name.replace(" ","")+"_recipe_card"}},[r("td",[e._v(e._s(e.recipes.Material.Name))]),r("td",[e._v(e._s(e.recipes.Material.Category))]),r("td",[e._v(e._s(e.recipes.Material.Weight)+"lbs.")]),r("td",[e._v(e._s(e.recipes.Material.Notes))])]),Object.keys(e.recipes.Recipes).length>0||e.reagentFor&&e.reagentFor.length>0||e.recipes.SubRecipes.length>0?r("tr",[r("td",{attrs:{colspan:"4"}},[r("div",{staticClass:"collapse",attrs:{id:e.recipes.Material.Name.replace(" ","")+"_recipe_card"}},[e._l(e.recipes.Recipes,(function(t,n){return r("div",{key:"inner_recipe_"+n},[e._v(" Craft "+e._s(n)+": "),r("ul",e._l(t,(function(t,n){return r("li",{key:"inner_recipe_ingredients_"+n},[e._v(" "+e._s(t.Ingredient)+" x "+e._s(t["Ingredient Quantity"])+" ")])})),0)])})),e.recipes.SubRecipes.length>0?r("div",[e._v(" Raw Materials "),e._l(e.recipes.SubRecipes,(function(e,t){return r("SubRecipe",{key:e.Material.Name+"_subrecipe_"+t,attrs:{recipes:e}})}))],2):e._e(),e.reagentFor&&e.reagentFor.length>0?r("div",[e._v(" Used in the following recipes: "),r("ul",e._l(e.reagentFor,(function(t){return r("li",{key:e.recipes.Material.Name+"_reagent_"+t+"_"+e.recipes.Quantity},[e._v(" "+e._s(t)+" ")])})),0)]):e._e()],2)])]):e._e()])}),x=[],w=r("bc82"),C=function(e){Object(s["a"])(r,e);var t=Object(o["a"])(r);function r(){return Object(c["a"])(this,r),t.apply(this,arguments)}return r}(l["c"]);Object(u["a"])([Object(l["b"])()],C.prototype,"recipes",void 0),Object(u["a"])([Object(l["b"])()],C.prototype,"reagentFor",void 0),C=Object(u["a"])([Object(l["a"])({name:"recipe",components:{SubRecipe:w["default"]}})],C);var F=C,R=F,M=(r("fed8"),Object(h["a"])(R,k,x,!1,null,"64566b09",null)),S=M.exports,N=function(e){Object(s["a"])(r,e);var t=Object(o["a"])(r);function r(){var e;return Object(c["a"])(this,r),e=t.apply(this,arguments),e.items=[],e.recipes=[],e.selected="none",e.textFilter="",e}return Object(O["a"])(r,[{key:"created",value:function(){var e=this;this.$papa=this.$papa||{},this.$papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSLPueia8-lx3pOhD4C26iOvFmRxtUApEB9R2WFSx6uk4kEIaiZA2sMPhoXymO7EFTx5kqKzp2ONMBM/pub?gid=0&single=true&output=csv",{download:!0,header:!0,complete:function(t){return e.items=t.data}}),this.$papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSLPueia8-lx3pOhD4C26iOvFmRxtUApEB9R2WFSx6uk4kEIaiZA2sMPhoXymO7EFTx5kqKzp2ONMBM/pub?gid=190469337&single=true&output=csv",{download:!0,header:!0,complete:function(t){return e.recipes=t.data}})}},{key:"categories",get:function(){return Object(y["a"])(new Set(this.items.map((function(e){return e.Category})).filter((function(e){return e}))))}},{key:"filteredItems",get:function(){var e=this,t=this.items;if(""!==this.textFilter){t=t.filter((function(t){return t.Name.toLowerCase().indexOf(e.textFilter)>=0}));var r=this.reagentFor;t=t.concat(this.items.filter((function(t){return r(t).join("").toLowerCase().indexOf(e.textFilter)>=0})));var n,a=this.filterSubRecipes(this.textFilter).map((function(t){return e.items.find((function(e){return e.Name===t.Result}))})).filter((function(e){return void 0!==e}));if(void 0!==a)t=(n=t).concat.apply(n,Object(y["a"])(a))}return""!==this.selected&&"none"!==this.selected&&(t=t.filter((function(t){return t.Category===e.selected}))),Object(y["a"])(new Set(t))}},{key:"filterSubRecipes",value:function(e){var t,r=this;if(null==e)return[];var n=this.recipes.filter((function(t){return t.Ingredient.toLowerCase().indexOf(e.toLowerCase())>=0}));return n=(t=n).concat.apply(t,Object(y["a"])(n.map((function(e){return r.filterSubRecipes(e.Result)})))),n}},{key:"groupBy",value:function(e,t){return e.reduce((function(e,r){return(e[r[t]]=e[r[t]]||[]).push(r),e}),{})}},{key:"getRecipe",value:function(e){var t=this;if(null==e)return null;var r=this.recipes.filter((function(t){return t.Result===e})),n=[];0!==r.length&&(n=r.map((function(e){return t.getRecipe(e.Ingredient)})));var a={Material:this.items.find((function(t){return t.Name===e})),Recipes:this.groupBy(r,"Quantity"),SubRecipes:this.custom.uniqBy(n.filter((function(e){return null!==e})),(function(e){return e.Material.Name}))};return a}},{key:"reagentFor",value:function(e){return this.recipes.filter((function(t){return t.Ingredient===e.Name})).map((function(e){return e.Result+" x "+e.Quantity}))}}]),r}(l["c"]);Object(u["a"])([Object(l["b"])()],N.prototype,"msg",void 0),N=Object(u["a"])([Object(l["a"])({components:{Recipe:S}})],N);var E=N,P=E,$=Object(h["a"])(P,m,j,!1,null,"0a835b14",null),I=$.exports,L=r("9955"),A=r.n(L),B=r("a8fc"),T=r.n(B),W=r("63ea"),q=r.n(W),Q=r("8a30"),X=r.n(Q);l["c"].use(A.a,{name:"custom",lodash:{uniqBy:T.a,isEqual:q.a,includes:X.a}});var z=function(e){Object(s["a"])(r,e);var t=Object(o["a"])(r);function r(){return Object(c["a"])(this,r),t.apply(this,arguments)}return r}(l["c"]);z=Object(u["a"])([Object(l["a"])({components:{HelloWorld:g,MaterialList:I,Recipe:S}})],z);var D=z,U=D,J=(r("7c55"),Object(h["a"])(U,a,i,!1,null,null,null)),K=J.exports,Z=r("2f62"),H=r("f751");n["a"].use(H["a"]),n["a"].use(Z["a"]);var V=new Z["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({store:V,render:function(e){return e(K)}}).$mount("#app")},fed8:function(e,t,r){"use strict";r("a113")}});
//# sourceMappingURL=app.930b0c5b.js.map