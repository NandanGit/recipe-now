(this["webpackJsonprecipe-now"]=this["webpackJsonprecipe-now"]||[]).push([[0],{21:function(e,a,t){},23:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var c=t(5),n=t.n(c),i=t(2),r=(t(21),t(0)),s=t(4),o=t.n(s),d=t(6),l={API_KEY:"f538ef86a5af1ee5712af9cfeaf4df92",APP_ID:"542eed36",API_PROVIDER:"api.edamam.com",URL:void 0};l.URL="https://".concat(l.API_PROVIDER,"/api/recipes/v2?type=public&app_key=").concat(l.API_KEY,"&app_id=").concat(l.APP_ID);var m=l,u=t(3),p=Object(u.b)({name:"recipes",initialState:{currentPage:0,totalPages:0,rawData:[],formattedRecipesList:[{id:0,name:"Tomato Salad Grilled Pizza",imgUrl:"https://www.edamam.com/web-img/28a/28ac183a985155b5593483a198acf16f.png",foodType:"veg",labels:["Indian","10 min","Balanced","Protein Rich"]},{id:1,name:"Tomato Salad Grilled Pizza",imgUrl:"https://www.edamam.com/web-img/80a/80a19d1ad6a0c42e0422e380ef9e194c.jpg",foodType:"non-veg",labels:["Italian","60 min","High Carbs"]},{id:2,name:"Tomato Salad Grilled Pizza",imgUrl:"https://www.edamam.com/web-img/855/85556f2d7a304d97c6767e4600c588d4.jpg",foodType:"non-veg",labels:["Gluten free","Sodium","Iron"]},{id:3,name:"Tomato Salad Grilled Pizza",imgUrl:"https://www.edamam.com/web-img/52e/52ebe8eb9f3fb204c6fd12403d3ed09e.jpg",foodType:"egg",labels:["Spicy","10 min","Balanced","Protein Rich"]},{id:4,name:"Tomato Salad Grilled Pizza",imgUrl:"https://www.edamam.com/web-img/b7e/b7ef79d492fd308c920a9f5b2f4ab064.jpg",foodType:"egg",labels:["Organic","10 min","No preservatives","Protein Rich"]},{id:5,name:"Tomato Salad Grilled Pizza",imgUrl:"https://www.edamam.com/web-img/36c/36cb2c544928c75d950c08d62e9f7e56.jpg",foodType:"veg",labels:["Indian","10 min","Balanced","Protein Rich"]}]},reducers:{addRawData:function(e,a){var t=a.payload.data;e.rawData.push(t),e.totalPages+=1},updateCurrentPage:function(e,a){var t=a.payload.newPage;e.currentPage=t},updateFormattedRecipesList:function(e){var a=e.rawData[e.currentPage-1].hits.map((function(e,a){var t=e.recipe,c=t.label,n=t.image,i=t.healthLabels,r=t.totalTime,s=t.dietLabels,o=t.cuisineType,d=t.dishType,l=t.mealType,m=t.calories,u="loading";i.includes("Vegetarian")?u="veg":i.includes("Egg-Free")&&!i.includes("Vegetarian")?u="non-veg":i.includes("Egg-Free")||(u="egg");var p=[];return r&&p.push("".concat(r," mins")),p=p.concat(o||[]).concat(d||[]).concat(l||[]).concat(s||[]),m&&p.push("".concat(m.toFixed(0)," cal")),{id:"".concat(a),name:c,imgUrl:n,labels:p,foodType:u}}));e.formattedRecipesList=a},clearRawData:function(e){e.rawData=[]}}}),g=p.actions,f=p,b=Object(u.b)({name:"UI",initialState:{isBeginning:!0,isRecipesLoading:!1},reducers:{setRecipeLoadingState:function(e,a){var t=a.payload.isLoading;e.isRecipesLoading=t},setErrorMessage:function(e,a){var t=a.payload.errorMessage,c=t.errorMessage,n=t.duration;e.errorMessage=c,setTimeout((function(){e.errorMessage=""}),n)},updateBeginningState:function(e){e.isBeginning=!1}}}),j=b.actions,h=b,v=function(e){return function(){var a=Object(d.a)(o.a.mark((function a(t){var c,n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t(j.setRecipeLoadingState({isLoading:!0})),a.prev=1,a.next=4,fetch(e);case 4:if((c=a.sent).ok){a.next=7;break}throw new Error("Something went wrong");case 7:return a.next=9,c.json();case 9:n=a.sent,t(j.setRecipeLoadingState({isLoading:!1})),t(g.addRawData({data:n})),a.next=17;break;case 14:a.prev=14,a.t0=a.catch(1),t(j.setErrorMessage(a.t0.message));case 17:case"end":return a.stop()}}),a,null,[[1,14]])})));return function(e){return a.apply(this,arguments)}}()},w=(t(23),t(1));var O=function(e){var a=Object(i.b)(),t=Object(r.useRef)(),c=function(){var e=Object(d.a)(o.a.mark((function e(c){var n,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),a(g.updateCurrentPage(0)),a(g.clearRawData()),n=m.URL,i=t.current.value.trim(),a(j.updateBeginningState()),a(g.updateCurrentPage({newPage:1})),e.next=9,a(v("".concat(n,"&q=").concat(i)));case 9:a(g.updateFormattedRecipesList());case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(w.jsxs)("form",{onSubmit:c,children:[Object(w.jsx)("input",{ref:t,type:"text",className:"search-input",placeholder:"Search..."}),Object(w.jsx)("button",{className:"search-input-btn",type:"submit",children:Object(w.jsx)("i",{className:"fa fa-search"})})]})};t(25);var x=function(e){return Object(w.jsxs)("header",{className:"header",children:[Object(w.jsx)("h1",{className:"title",children:"Recipe Now"}),Object(w.jsx)(O,{})]})},P=t(10);t(26);var R=function(e){var a=e.padding;return Object(w.jsx)("div",{className:"card ".concat(e.className," ").concat(a&&"with-padding"),children:e.children})};t(27);var y=function(e){return Object(w.jsx)("div",{className:"badge ".concat(e.className),children:e.children})};t(28);var N=function(e){return Object(w.jsx)("div",{className:"food-type-mark ".concat(e.foodType),children:Object(w.jsx)("div",{className:"inner-circle"})})};t(29);var L=function(e){var a=e.imgUrl,t=e.foodType,c=e.labels,n=e.isLoading,i=e.name,s=[];return c&&(s=c.map((function(e){return Object(w.jsx)(y,{className:"recipe-tag",children:e},e+Math.random())}))),Object(w.jsxs)(R,{className:"recipe-list-item",children:[Object(w.jsx)("div",{className:"loader ".concat(n?"img_loader":"recipe-list-item__img"),style:n?{}:{backgroundImage:"url(".concat(a,")")}}),Object(w.jsx)("div",{className:"recipe-list-item-details",children:n?Object(w.jsxs)(r.Fragment,{children:[Object(w.jsx)("div",{className:"loader recipe-name-loader"}),Object(w.jsxs)("div",{className:"recipe-list-item__tags-container",children:[Object(w.jsx)("div",{className:"loader recipe-tag-loader tag-1"}),Object(w.jsx)("div",{className:"loader recipe-tag-loader tag-2"}),Object(w.jsx)("div",{className:"loader recipe-tag-loader tag-3"})]})]}):Object(w.jsxs)(r.Fragment,{children:[Object(w.jsx)("p",{className:"recipe-list-item__title",children:i}),0!==s.length&&Object(w.jsx)("div",{className:"recipe-list-item__tags-container",children:s})]})}),Object(w.jsx)(N,{className:"loader",foodType:n?"loading":t})]})};t(30);var T=function(e){var a,t=Object(i.c)((function(e){return e.recipes.formattedRecipesList})),c=Object(i.c)((function(e){return e.UI.isBeginning})),n=Object(i.c)((function(e){return e.UI.isRecipesLoading}));if(n){a=[];for(var r=0;r<8;r++)a.push(Object(w.jsx)(L,{isLoading:!0},r))}else a=t.map((function(e){return Object(w.jsx)(L,Object(P.a)({isLoading:!1},e),e.id)}));return Object(w.jsx)("div",{className:"recipes-list ".concat(n&&"loading"),children:!c&&a})};var I=function(){return Object(w.jsxs)(r.Fragment,{children:[Object(w.jsx)(x,{}),Object(w.jsx)(T,{})]})},S=Object(u.a)({reducer:{recipes:f.reducer,UI:h.reducer}});n.a.render(Object(w.jsx)(i.a,{store:S,children:Object(w.jsx)(I,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.f6f83999.chunk.js.map