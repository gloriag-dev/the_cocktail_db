(this.webpackJsonpthe_cocktail_db=this.webpackJsonpthe_cocktail_db||[]).push([[7],{148:function(e,r,t){},191:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return d}));var n=t(44),a=t.n(n),c=t(45),s=t(43),u=t(0),i=t(47),o=t(2),p=t(9),l=(t(148),t(1));function d(){var e=Object(o.f)();Object(u.useEffect)((function(){v(e.name)}),[e.name]);var r=Object(i.a)(),t=Object(u.useState)(),n=Object(s.a)(t,2),d=n[0],h=n[1],v=function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getIngredientByName(t);case 3:n=e.sent,console.log(n,"search by nameeeeeeeeee"),h(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"ingredient-page",children:[!d&&Object(l.jsx)("p",{children:"Sorry, there are no details"}),Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("h2",{children:null===d||void 0===d?void 0:d.strIngredient}),(null===d||void 0===d?void 0:d.strABV)&&Object(l.jsxs)("h3",{children:["ABV: ",null===d||void 0===d?void 0:d.strABV]}),Object(l.jsx)("img",{src:"https://www.thecocktaildb.com/images/ingredients/"+e.name.replace("_","%20")+".png",alt:"ingredient"}),!(null===d||void 0===d?void 0:d.strDescription)&&Object(l.jsx)("span",{children:"Sorry, no description available for this item"}),Object(l.jsx)("span",{children:null===d||void 0===d?void 0:d.strDescription})]}),Object(l.jsx)("div",{className:"btn-wrapper",children:Object(l.jsxs)(p.b,{to:"/",children:[" ",Object(l.jsx)("button",{children:"Go Home, you're drunk!"})]})})]})}},47:function(e,r,t){"use strict";t.d(r,"a",(function(){return i}));var n=t(44),a=t.n(n),c=t(45),s=t(65),u=t.n(s);function i(){var e=function(){return u.a.create({baseURL:"https://www.thecocktaildb.com/api/json/v1/1"})},r=function(){var r=Object(c.a)(a.a.mark((function r(){var t;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e()({url:"search.php?s=",method:"GET"});case 2:return t=r.sent,r.abrupt("return",t.data.drinks);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return{getByName:function(){var r=Object(c.a)(a.a.mark((function r(t){var n;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e()({url:"search.php",params:{s:t}});case 3:return n=r.sent,r.abrupt("return",n.data.drinks);case 7:throw r.prev=7,r.t0=r.catch(0),console.error(r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),getByFirstLetter:function(){var r=Object(c.a)(a.a.mark((function r(t){var n;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e()({url:"search.php",params:{f:t}});case 3:return n=r.sent,r.abrupt("return",n.data.drinks);case 7:throw r.prev=7,r.t0=r.catch(0),console.error(r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),getAll:r,getRandomCocktail:function(){var r=Object(c.a)(a.a.mark((function r(){var t;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e()({url:"random.php"});case 3:return t=r.sent,r.abrupt("return",t.data.drinks[0]);case 7:throw r.prev=7,r.t0=r.catch(0),console.error(r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),getCocktailDetails:function(){var r=Object(c.a)(a.a.mark((function r(t){var n,c,s;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e()({url:"lookup.php",params:{i:t}});case 3:return s=r.sent,r.abrupt("return",null===(n=s.data)||void 0===n||null===(c=n.drinks)||void 0===c?void 0:c[0]);case 7:throw r.prev=7,r.t0=r.catch(0),console.error(r.t0,{id:t}),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),getIngredientByName:function(){var r=Object(c.a)(a.a.mark((function r(t){var n,c,s;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e()({url:"search.php",params:{i:t}});case 3:return s=r.sent,r.abrupt("return",null===(n=s.data)||void 0===n||null===(c=n.ingredients)||void 0===c?void 0:c[0]);case 7:throw r.prev=7,r.t0=r.catch(0),console.error(r.t0,{name:t}),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()}}}}]);
//# sourceMappingURL=7.9840618c.chunk.js.map