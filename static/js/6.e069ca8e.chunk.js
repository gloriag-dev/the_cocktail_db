(this.webpackJsonpthe_cocktail_db=this.webpackJsonpthe_cocktail_db||[]).push([[6],{149:function(e,t,n){},192:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n(44),c=n.n(r),i=n(45),a=n(43),s=n(0),d=n(47),o=(n(149),n(2)),l=n(9),u=n(70),j=n(1);function b(){var e=Object(o.f)();Object(s.useEffect)((function(){h(e.id)}),[e.id]);var t=Object(s.useState)(),n=Object(a.a)(t,2),r=n[0],b=n[1],p=Object(d.a)(),h=function(){var e=Object(i.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.getCocktailDetails(t);case 3:n=e.sent,b(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error();case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"details-page",children:[r?Object(j.jsx)(u.a,{data:r}):Object(j.jsx)("p",{children:"Sorry, there are no details"}),Object(j.jsx)("div",{className:"btn-wrapper",children:Object(j.jsxs)(l.b,{to:"/",children:[" ",Object(j.jsx)("button",{children:"Go Home, you're drunk!"})]})})]})}},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(44),c=n.n(r),i=n(45),a=n(65),s=n.n(a);function d(){var e=function(){return s.a.create({baseURL:"https://www.thecocktaildb.com/api/json/v1/1"})},t=function(){var t=Object(i.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e()({url:"search.php?s=",method:"GET"});case 2:return n=t.sent,t.abrupt("return",n.data.drinks);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{getByName:function(){var t=Object(i.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e()({url:"search.php",params:{s:n}});case 3:return r=t.sent,t.abrupt("return",r.data.drinks);case 7:throw t.prev=7,t.t0=t.catch(0),console.error(t.t0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),getByFirstLetter:function(){var t=Object(i.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e()({url:"search.php",params:{f:n}});case 3:return r=t.sent,t.abrupt("return",r.data.drinks);case 7:throw t.prev=7,t.t0=t.catch(0),console.error(t.t0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),getAll:t,getRandomCocktail:function(){var t=Object(i.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e()({url:"random.php"});case 3:return n=t.sent,t.abrupt("return",n.data.drinks[0]);case 7:throw t.prev=7,t.t0=t.catch(0),console.error(t.t0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),getCocktailDetails:function(){var t=Object(i.a)(c.a.mark((function t(n){var r,i,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e()({url:"lookup.php",params:{i:n}});case 3:return a=t.sent,t.abrupt("return",null===(r=a.data)||void 0===r||null===(i=r.drinks)||void 0===i?void 0:i[0]);case 7:throw t.prev=7,t.t0=t.catch(0),console.error(t.t0,{id:n}),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),getIngredientByName:function(){var t=Object(i.a)(c.a.mark((function t(n){var r,i,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e()({url:"search.php",params:{i:n}});case 3:return a=t.sent,t.abrupt("return",null===(r=a.data)||void 0===r||null===(i=r.ingredients)||void 0===i?void 0:i[0]);case 7:throw t.prev=7,t.t0=t.catch(0),console.error(t.t0,{name:n}),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}}},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return O}));var r=n(44),c=n.n(r),i=n(45),a=n(43),s=n(200),d=n(199),o=n(194),l=n(0),u=n.n(l),j=n(9),b=n(47),p=(n(71),n(1)),h={width:400,bgcolor:"black",border:"4px solid orangered",boxShadow:24,p:4},v=function(e){var t=e.data;return Object(p.jsxs)(d.a,{sx:h,children:[Object(p.jsx)("h2",{id:"modal-modal-title",children:null===t||void 0===t?void 0:t.strDrink}),Object(p.jsx)("div",{className:"img-wrapper",children:Object(p.jsx)("img",{alt:"cocktail",src:null===t||void 0===t?void 0:t.strDrinkThumb})}),Object(p.jsxs)("div",{className:"question",children:[Object(p.jsx)("button",{className:"alphabet-btn",children:"?"}),Object(p.jsxs)("span",{children:["Which glass should I use to serve it in? ",null===t||void 0===t?void 0:t.strGlass]})]}),Object(p.jsx)("p",{children:"Ingredients:"}),Object(p.jsxs)("ul",{children:[(null===t||void 0===t?void 0:t.strIngredient1)&&Object(p.jsx)(j.b,{to:"/ingredient/".concat(t.strIngredient1.replace(" ","_")),children:Object(p.jsx)("li",{className:"ingredient",children:t.strIngredient1})}),(null===t||void 0===t?void 0:t.strIngredient2)&&Object(p.jsxs)(j.b,{to:"/ingredient/".concat(t.strIngredient2.replace(" ","_")),children:[" ",Object(p.jsx)("li",{className:"ingredient",children:t.strIngredient2})]}),(null===t||void 0===t?void 0:t.strIngredient3)&&Object(p.jsxs)(j.b,{to:"/ingredient/".concat(t.strIngredient3.replace(" ","_")),children:[" ",Object(p.jsx)("li",{className:"ingredient",children:t.strIngredient3})]}),(null===t||void 0===t?void 0:t.strIngredient4)&&Object(p.jsxs)(j.b,{to:"/ingredient/".concat(t.strIngredient4.replace(" ","_")),children:[" ",Object(p.jsx)("li",{className:"ingredient",children:t.strIngredient4})]}),(null===t||void 0===t?void 0:t.strIngredient5)&&Object(p.jsx)(j.b,{to:"/ingredient/".concat(t.strIngredient5.replace(" ","_")),children:Object(p.jsx)("li",{className:"ingredient",children:t.strIngredient5})}),(null===t||void 0===t?void 0:t.strIngredient6)&&Object(p.jsx)(j.b,{to:"/ingredient/".concat(t.strIngredient6.replace(" ","_")),children:Object(p.jsx)("li",{className:"ingredient",children:t.strIngredient6})}),(null===t||void 0===t?void 0:t.strIngredient7)&&Object(p.jsx)(j.b,{to:"/ingredient/".concat(t.strIngredient7.replace(" ","_")),children:Object(p.jsx)("li",{className:"ingredient",children:t.strIngredient7})}),(null===t||void 0===t?void 0:t.strIngredient8)&&Object(p.jsx)(j.b,{to:"/ingredient/".concat(t.strIngredient8.replace(" ","_")),children:Object(p.jsx)("li",{className:"ingredient",children:t.strIngredient8})}),(null===t||void 0===t?void 0:t.strIngredient9)&&Object(p.jsx)(j.b,{to:"/ingredient/".concat(t.strIngredient9.replace(" ","_")),children:Object(p.jsx)("li",{className:"ingredient",children:t.strIngredient9})}),(null===t||void 0===t?void 0:t.strIngredient10)&&Object(p.jsx)(j.b,{to:"/ingredient/".concat(t.strIngredient10.replace(" ","_")),children:Object(p.jsx)("li",{className:"ingredient",children:t.strIngredient10})}),(null===t||void 0===t?void 0:t.strIngredient11)&&Object(p.jsx)(j.b,{to:"/ingredient/".concat(t.strIngredient11.replace(" ","_")),children:Object(p.jsx)("li",{className:"ingredient",children:t.strIngredient11})}),(null===t||void 0===t?void 0:t.strIngredient12)&&Object(p.jsx)(j.b,{to:"/ingredient/".concat(t.strIngredient12.replace(" ","_")),children:Object(p.jsx)("li",{className:"ingredient",children:t.strIngredient12})}),(null===t||void 0===t?void 0:t.strIngredient13)&&Object(p.jsx)(j.b,{to:"/ingredient/".concat(t.strIngredient13.replace(" ","_")),children:Object(p.jsx)("li",{className:"ingredient",children:t.strIngredient13})}),(null===t||void 0===t?void 0:t.strIngredient14)&&Object(p.jsx)(j.b,{to:"/ingredient/".concat(t.strIngredient14.replace(" ","_")),children:Object(p.jsx)("li",{className:"ingredient",children:t.strIngredient14})}),(null===t||void 0===t?void 0:t.strIngredient15)&&Object(p.jsx)(j.b,{to:"/ingredient/".concat(t.strIngredient15.replace(" ","_")),children:Object(p.jsx)("li",{className:"ingredient",children:t.strIngredient15})})]}),Object(p.jsx)("span",{children:"Recipe:"}),Object(p.jsx)("span",{className:"recipe-text",children:null===t||void 0===t?void 0:t.strInstructions})]})},g=function(e){var t=Object(b.a)(),n=Object(l.useState)(),r=Object(a.a)(n,2),s=r[0],d=r[1],o=Object(l.useState)(!0),u=Object(a.a)(o,2),j=u[0],h=u[1],g=function(){var e=Object(i.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),e.next=4,t.getRandomCocktail();case 4:n=e.sent,d(n),h(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){g()}),[]),j?Object(p.jsx)("div",{children:"Loading"}):s?Object(p.jsx)(v,{data:s}):Object(p.jsx)(p.Fragment,{})},x=function(e){var t=e.open,n=e.onClose;return Object(p.jsx)(s.a,{open:t,scroll:"body",onClose:n,children:Object(p.jsx)(g,{})})};function O(){var e=u.a.useState(!1),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"show-random-cocktail-button-wrapper",children:Object(p.jsx)(o.a,{onClick:function(){return r(!0)},className:"show-random-cocktail-button",children:"Show Random Cocktail!"})}),Object(p.jsx)(x,{open:n,onClose:function(){return r(!1)}})]})}},71:function(e,t,n){}}]);
//# sourceMappingURL=6.e069ca8e.chunk.js.map