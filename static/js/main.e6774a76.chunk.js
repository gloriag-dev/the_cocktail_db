(this.webpackJsonpthe_cocktail_db=this.webpackJsonpthe_cocktail_db||[]).push([[0],{119:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),i=n(13),s=n.n(i),a=(n(95),n(7)),l=n(10),d=(n(96),n(8)),o=n.n(d),j=n(16),u=n(11),b=(n(98),n(2));function h(){return Object(b.jsxs)("div",{className:"logo-container",children:[Object(b.jsx)("img",{className:"logo-img",alt:"the_cocktail_db Logo",src:"/the_cocktail_db/sunny.png"}),Object(b.jsx)("span",{className:"title",children:" The Cocktail DB"})]})}var g=n(32),p=n.n(g);function v(){var e=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()({url:"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=",method:"GET"});case 2:return t=e.sent,console.log(t),e.abrupt("return",t.data.drinks);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{searchCocktails:function(){var e=Object(j.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p()({url:"https://www.thecocktaildb.com/api/json/v1/1/search.php",method:"GET",params:{s:t}});case 3:return n=e.sent,console.log(n.data.drinks),e.abrupt("return",n.data.drinks);case 8:throw e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),searchByFirstLetter:function(){var e=Object(j.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p()({url:"https://www.thecocktaildb.com/api/json/v1/1/search.php",method:"GET",params:{f:t}});case 3:return n=e.sent,e.abrupt("return",n.data.drinks);case 7:throw e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),getAll:e,getRandomCocktail:function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p()({url:"https://www.thecocktaildb.com/api/json/v1/1/random.php",method:"GET"});case 3:return t=e.sent,console.log(t,"random"),e.abrupt("return",t.data.drinks[0]);case 8:throw e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),getCocktailDetails:function(){var e=Object(j.a)(o.a.mark((function e(t){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p()({url:"https://www.thecocktaildb.com/api/json/v1/1/lookup.php",method:"GET",params:{i:t}});case 3:return c=e.sent,console.log(c,"details"),e.abrupt("return",null===(n=c.data)||void 0===n||null===(r=n.drinks)||void 0===r?void 0:r[0]);case 8:throw e.prev=8,e.t0=e.catch(0),console.error(e.t0,{id:t}),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),searchIngredientByName:function(){var e=Object(j.a)(o.a.mark((function e(t){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p()({url:"https://www.thecocktaildb.com/api/json/v1/1/search.php",method:"GET",params:{i:t}});case 3:return c=e.sent,console.log(c.data.ingredients,"ingredient details res"),e.abrupt("return",null===(n=c.data)||void 0===n||null===(r=n.ingredients)||void 0===r?void 0:r[0]);case 8:throw e.prev=8,e.t0=e.catch(0),console.error(e.t0,{name:t}),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}}n(119);function x(){var e=Object(l.f)();Object(r.useEffect)((function(){d(e.id)}),[e.id]);var t=Object(r.useState)(),n=Object(u.a)(t,2),c=n[0],i=n[1],s=v(),d=function(){var e=Object(j.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.getCocktailDetails(t);case 3:n=e.sent,i(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error();case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"details-page",children:[Object(b.jsx)(h,{}),!c&&Object(b.jsx)("p",{children:"Sorry, there are no details"}),Object(b.jsxs)("div",{className:"card-container",children:[Object(b.jsx)("h2",{children:null===c||void 0===c?void 0:c.strDrink}),Object(b.jsx)("h4",{children:null===c||void 0===c?void 0:c.strAlcoholic}),Object(b.jsx)("div",{className:"img-wrapper",children:Object(b.jsx)("img",{src:null===c||void 0===c?void 0:c.strDrinkThumb,alt:"Cocktail"})}),Object(b.jsxs)("div",{className:"question",children:[Object(b.jsx)("button",{className:"alphabet-btn",children:"?"}),Object(b.jsxs)("span",{children:["Which glass should I use to serve it in? ",null===c||void 0===c?void 0:c.strGlass]})]}),Object(b.jsx)("p",{children:"Ingredients:"}),Object(b.jsxs)("ul",{children:[(null===c||void 0===c?void 0:c.strIngredient1)&&Object(b.jsx)(a.b,{to:"/ingredient/".concat(c.strIngredient1.replace(" ","_")),children:Object(b.jsx)("li",{className:"ingredient",children:c.strIngredient1})}),(null===c||void 0===c?void 0:c.strIngredient2)&&Object(b.jsx)(a.b,{to:"/ingredient/".concat(c.strIngredient2.replace(" ","_")),children:Object(b.jsx)("li",{className:"ingredient",children:c.strIngredient2})}),(null===c||void 0===c?void 0:c.strIngredient3)&&Object(b.jsx)(a.b,{to:"/ingredient/".concat(c.strIngredient3.replace(" ","_")),children:Object(b.jsx)("li",{className:"ingredient",children:c.strIngredient3})}),(null===c||void 0===c?void 0:c.strIngredient4)&&Object(b.jsx)(a.b,{to:"/ingredient/".concat(c.strIngredient4.replace(" ","_")),children:Object(b.jsx)("li",{className:"ingredient",children:c.strIngredient4})}),(null===c||void 0===c?void 0:c.strIngredient5)&&Object(b.jsx)(a.b,{to:"/ingredient/".concat(c.strIngredient5.replace(" ","_")),children:Object(b.jsx)("li",{className:"ingredient",children:c.strIngredient5})}),(null===c||void 0===c?void 0:c.strIngredient6)&&Object(b.jsx)(a.b,{to:"/ingredient/".concat(c.strIngredient6.replace(" ","_")),children:Object(b.jsx)("li",{className:"ingredient",children:c.strIngredient6})}),(null===c||void 0===c?void 0:c.strIngredient7)&&Object(b.jsx)(a.b,{to:"/ingredient/".concat(c.strIngredient7.replace(" ","_")),children:Object(b.jsx)("li",{className:"ingredient",children:c.strIngredient7})}),(null===c||void 0===c?void 0:c.strIngredient8)&&Object(b.jsx)(a.b,{to:"/ingredient/".concat(c.strIngredient8.replace(" ","_")),children:Object(b.jsx)("li",{className:"ingredient",children:c.strIngredient8})}),(null===c||void 0===c?void 0:c.strIngredient9)&&Object(b.jsx)(a.b,{to:"/ingredient/".concat(c.strIngredient9.replace(" ","_")),children:Object(b.jsx)("li",{className:"ingredient",children:c.strIngredient9})}),(null===c||void 0===c?void 0:c.strIngredient10)&&Object(b.jsxs)(a.b,{to:"/ingredient/".concat(c.strIngredient10.replace(" ","_")),children:[" ",Object(b.jsx)("li",{className:"ingredient",children:c.strIngredient10})]}),(null===c||void 0===c?void 0:c.strIngredient11)&&Object(b.jsx)(a.b,{to:"/ingredient/".concat(c.strIngredient11.replace(" ","_")),children:Object(b.jsx)("li",{className:"ingredient",children:c.strIngredient11})}),(null===c||void 0===c?void 0:c.strIngredient12)&&Object(b.jsx)(a.b,{to:"/ingredient/".concat(c.strIngredient12.replace(" ","_")),children:Object(b.jsx)("li",{className:"ingredient",children:c.strIngredient12})}),(null===c||void 0===c?void 0:c.strIngredient13)&&Object(b.jsx)(a.b,{to:"/ingredient/".concat(c.strIngredient13.replace(" ","_")),children:Object(b.jsx)("li",{className:"ingredient",children:c.strIngredient13})}),(null===c||void 0===c?void 0:c.strIngredient14)&&Object(b.jsx)(a.b,{to:"/ingredient/".concat(c.strIngredient14.replace(" ","_")),children:Object(b.jsx)("li",{className:"ingredient",children:c.strIngredient14})}),(null===c||void 0===c?void 0:c.strIngredient15)&&Object(b.jsx)(a.b,{to:"/ingredient/".concat(c.strIngredient15.replace(" ","_")),children:Object(b.jsx)("li",{className:"ingredient",children:c.strIngredient15})})]}),Object(b.jsx)("span",{children:"Recipe:"}),Object(b.jsx)("span",{className:"recipe-text",children:null===c||void 0===c?void 0:c.strInstructions})]}),Object(b.jsx)("div",{className:"btn-wrapper",children:Object(b.jsxs)(a.b,{to:"/",children:[" ",Object(b.jsx)("button",{children:"Go Home, you're drunk!"})]})})]})}var O=n(189),m=n(187),f=n(186),I=(n(128),{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"black",border:"4px solid orangered",boxShadow:24,p:4});function k(){Object(r.useEffect)((function(){l()}),[]);var e=v(),t=Object(r.useState)(),n=Object(u.a)(t,2),i=n[0],s=n[1],l=function(){var t=Object(j.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.getRandomCocktail();case 3:n=t.sent,s(n),console.log(n,"randooom cocktaiiiils"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),d=c.a.useState(!1),h=Object(u.a)(d,2),g=h[0],p=h[1];return Object(b.jsxs)("div",{className:"random-ck-modal",children:[Object(b.jsx)(m.a,{onClick:function(){return p(!0)},children:"Show Random Cocktail!"}),Object(b.jsx)(f.a,{open:g,onClose:function(){return p(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(b.jsxs)(O.a,{sx:I,children:[Object(b.jsx)("h2",{id:"modal-modal-title",children:null===i||void 0===i?void 0:i.strDrink}),Object(b.jsx)("div",{className:"img-wrapper",children:Object(b.jsx)("img",{alt:"cocktail",src:null===i||void 0===i?void 0:i.strDrinkThumb})}),Object(b.jsxs)("div",{className:"question",children:[Object(b.jsx)("button",{className:"alphabet-btn",children:"?"}),Object(b.jsxs)("span",{children:["Which glass should I use to serve it in? ",null===i||void 0===i?void 0:i.strGlass]})]}),Object(b.jsx)("p",{children:"Ingredients:"}),Object(b.jsxs)("ul",{children:[(null===i||void 0===i?void 0:i.strIngredient1)&&Object(b.jsx)(a.b,{to:"/ingredient/".concat(i.strIngredient1.replace(" ","_")),children:Object(b.jsx)("li",{className:"ingredient",children:i.strIngredient1})}),(null===i||void 0===i?void 0:i.strIngredient2)&&Object(b.jsxs)(a.b,{to:"/ingredient/".concat(i.strIngredient2.replace(" ","_")),children:[" ",Object(b.jsx)("li",{className:"ingredient",children:i.strIngredient2})]}),(null===i||void 0===i?void 0:i.strIngredient3)&&Object(b.jsxs)(a.b,{to:"/ingredient/".concat(i.strIngredient3.replace(" ","_")),children:[" ",Object(b.jsx)("li",{className:"ingredient",children:i.strIngredient3})]}),(null===i||void 0===i?void 0:i.strIngredient4)&&Object(b.jsxs)(a.b,{to:"/ingredient/".concat(i.strIngredient4.replace(" ","_")),children:[" ",Object(b.jsx)("li",{className:"ingredient",children:i.strIngredient4})]}),(null===i||void 0===i?void 0:i.strIngredient5)&&Object(b.jsx)(a.b,{to:"/ingredient/".concat(i.strIngredient5.replace(" ","_")),children:Object(b.jsx)("li",{className:"ingredient",children:i.strIngredient5})}),(null===i||void 0===i?void 0:i.strIngredient6)&&Object(b.jsx)(a.b,{to:"/ingredient/".concat(i.strIngredient6.replace(" ","_")),children:Object(b.jsx)("li",{className:"ingredient",children:i.strIngredient6})}),(null===i||void 0===i?void 0:i.strIngredient7)&&Object(b.jsx)(a.b,{to:"/ingredient/".concat(i.strIngredient7.replace(" ","_")),children:Object(b.jsx)("li",{className:"ingredient",children:i.strIngredient7})}),(null===i||void 0===i?void 0:i.strIngredient8)&&Object(b.jsx)(a.b,{to:"/ingredient/".concat(i.strIngredient8.replace(" ","_")),children:Object(b.jsx)("li",{className:"ingredient",children:i.strIngredient8})}),(null===i||void 0===i?void 0:i.strIngredient9)&&Object(b.jsx)(a.b,{to:"/ingredient/".concat(i.strIngredient9.replace(" ","_")),children:Object(b.jsx)("li",{className:"ingredient",children:i.strIngredient9})}),(null===i||void 0===i?void 0:i.strIngredient10)&&Object(b.jsx)(a.b,{to:"/ingredient/".concat(i.strIngredient10.replace(" ","_")),children:Object(b.jsx)("li",{className:"ingredient",children:i.strIngredient10})}),(null===i||void 0===i?void 0:i.strIngredient11)&&Object(b.jsx)(a.b,{to:"/ingredient/".concat(i.strIngredient11.replace(" ","_")),children:Object(b.jsx)("li",{className:"ingredient",children:i.strIngredient11})}),(null===i||void 0===i?void 0:i.strIngredient12)&&Object(b.jsx)(a.b,{to:"/ingredient/".concat(i.strIngredient12.replace(" ","_")),children:Object(b.jsx)("li",{className:"ingredient",children:i.strIngredient12})}),(null===i||void 0===i?void 0:i.strIngredient13)&&Object(b.jsx)(a.b,{to:"/ingredient/".concat(i.strIngredient13.replace(" ","_")),children:Object(b.jsx)("li",{className:"ingredient",children:i.strIngredient13})}),(null===i||void 0===i?void 0:i.strIngredient14)&&Object(b.jsx)(a.b,{to:"/ingredient/".concat(i.strIngredient14.replace(" ","_")),children:Object(b.jsx)("li",{className:"ingredient",children:i.strIngredient14})}),(null===i||void 0===i?void 0:i.strIngredient15)&&Object(b.jsx)(a.b,{to:"/ingredient/".concat(i.strIngredient15.replace(" ","_")),children:Object(b.jsx)("li",{className:"ingredient",children:i.strIngredient15})})]}),Object(b.jsx)("span",{children:"Recipe:"}),Object(b.jsx)("span",{className:"recipe-text",children:null===i||void 0===i?void 0:i.strInstructions})]})})]})}n(129);function N(){return Object(b.jsx)("div",{className:"btn-container",children:Object(b.jsx)(k,{})})}n(130);var w=n(185);function _(e){return Object(b.jsxs)("div",{className:"searchBar",children:[Object(b.jsx)("h2",{children:"Hey, I'm here for a specific cocktail!"}),Object(b.jsx)(w.a,{id:"search-cocktail",label:"Search Cocktails",variant:"filled",className:"searchMe",onChange:function(t){t.stopPropagation(),t.preventDefault();var n=t.target.value;console.log(n,"SEARCH!!!"),e.onChange(n)},placeholder:"Search...",color:"primary"})]})}n(132);function y(e){return console.log("cocktailList",e),Object(b.jsxs)("div",{className:"cocktails-list",children:[Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Cocktails List"})}),Object(b.jsx)("ul",{children:e.list&&e.list.map((function(e,t){return Object(b.jsx)(a.b,{to:"/".concat(e.idDrink),children:Object(b.jsxs)("li",{className:"single-cocktail",children:[" ",e.strDrink," "]},t)})}))})]})}n(133);function C(e){var t=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];return Object(b.jsxs)("div",{className:"letterWidget",children:[Object(b.jsx)("h3",{children:"Browse by letter"}),Object(b.jsx)("div",{className:"letters-container",children:t&&t.map((function(t,n){return Object(b.jsx)("button",{className:"alphabet-btn",onClick:function(n){return function(t){e.onChange(t)}(t)},children:t},n)}))})]})}n(134);function S(){return Object(b.jsx)("div",{className:"footer",children:Object(b.jsx)("p",{children:"Made with sobriety by gloriag-dev"})})}function D(){var e=v(),t=Object(r.useState)(),n=Object(u.a)(t,2),c=n[0],i=n[1];Object(r.useEffect)((function(){s()}),[]);var s=function(){var t=Object(j.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.getAll();case 3:n=t.sent,i(n),console.log(n,"GET all"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),a=function(){var t=Object(j.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.searchCocktails(n);case 3:r=t.sent,i(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(j.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.searchByFirstLetter(n);case 3:r=t.sent,i(r),console.log(r,"fetch by letter"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"home",children:[Object(b.jsx)(h,{}),Object(b.jsx)(N,{}),Object(b.jsx)(_,{e:void 0,onChange:function(e){a(e)}}),c&&Object(b.jsx)(y,{list:c}),!c&&Object(b.jsx)("h3",{className:"no-list-placeholder",children:"Sorry, there are no matching cocktails, try again!"}),Object(b.jsx)(C,{onChange:function(e){l(e)},letter:""}),Object(b.jsx)(S,{})]})}n(135);function E(){var e=Object(l.f)();Object(r.useEffect)((function(){d(e.name)}),[e.name]);var t=v(),n=Object(r.useState)(),c=Object(u.a)(n,2),i=c[0],s=c[1],d=function(){var e=Object(j.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.searchIngredientByName(n);case 3:r=e.sent,console.log(r,"search by nameeeeeeeeee"),s(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"ingredient-page",children:[Object(b.jsx)(h,{}),!i&&Object(b.jsx)("p",{children:"Sorry, there are no details"}),Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("h2",{children:null===i||void 0===i?void 0:i.strIngredient}),Object(b.jsx)("h3",{children:null===i||void 0===i?void 0:i.strABV}),Object(b.jsx)("img",{src:"https://www.thecocktaildb.com/images/ingredients/"+e.name.replace("_","%20")+".png",alt:"ingredient"}),!(null===i||void 0===i?void 0:i.strDescription)&&Object(b.jsx)("span",{children:"Sorry, no description available for this item"}),Object(b.jsx)("span",{children:null===i||void 0===i?void 0:i.strDescription})]}),Object(b.jsx)("div",{className:"btn-wrapper",children:Object(b.jsxs)(a.b,{to:"/",children:[" ",Object(b.jsx)("button",{children:"Go Home, you're drunk!"})]})})]})}var T=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(a.a,{basename:"/the_cocktail_db",children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{exact:!0,path:"/",children:Object(b.jsx)(D,{})}),Object(b.jsx)(l.a,{path:"/ingredient/:name",children:Object(b.jsx)(E,{})}),Object(b.jsx)(l.a,{path:"/:id",children:Object(b.jsx)(x,{})})]})})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,191)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),i(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(T,{})}),document.getElementById("root")),G()},95:function(e,t,n){},96:function(e,t,n){},98:function(e,t,n){}},[[136,1,2]]]);
//# sourceMappingURL=main.e6774a76.chunk.js.map