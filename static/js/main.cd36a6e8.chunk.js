(this["webpackJsonpreact-redux-todos"]=this["webpackJsonpreact-redux-todos"]||[]).push([[0],{125:function(t,e,n){},126:function(t,e,n){},135:function(t,e){},137:function(t,e){},147:function(t,e){},149:function(t,e){},176:function(t,e){},178:function(t,e){},179:function(t,e){},184:function(t,e){},186:function(t,e){},192:function(t,e){},194:function(t,e){},213:function(t,e){},225:function(t,e){},228:function(t,e){},243:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),r=n(34),o=n.n(r),u=(n(125),n(126),n(13)),l=n(118),f=n(3),s=function(t){var e=t.active,n=t.children,c=t.onClick;return e?Object(f.jsx)("span",{children:n}):Object(f.jsx)("a",{href:"#",onClick:function(t){t.preventDefault(),c()},children:n})},O=Object(u.b)((function(t,e){return{active:e.filter===t.visibilityFilter}}),(function(t,e){return{onClick:function(){t({type:"SET_VISIBILITY_FILTER",filter:e.filter})}}}))(s),d=function(){return Object(f.jsxs)("p",{children:["Show:"," ",Object(f.jsx)(O,{filter:"SHOW_ALL",children:"All"}),", ",Object(f.jsx)(O,{filter:"SHOW_ACTIVE",children:"Active"}),", ",Object(f.jsx)(O,{filter:"SHOW_COMPLETED",children:"Completed"})]})},a=Object(u.b)()((function(t){var e,n=t.dispatch;return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{onSubmit:function(t){var c;(t.preventDefault(),e.value.trim())&&(n((c=e.value,{type:"ADD_TODO",id:Object(l.v4)(),text:c})),e.value="")},children:[Object(f.jsx)("input",{ref:function(t){e=t}}),Object(f.jsx)("button",{type:"submit",children:"Add Todo"})]})})})),j=n(11),b=function(t){var e=t.onClick,n=t.completed,c=t.text;return Object(f.jsx)("li",{onClick:e,style:{textDecoration:n?"line-through":"none"},children:c})},h=function(t){var e=t.todos,n=t.onTodoClick;return Object(f.jsx)("ul",{children:e.map((function(t){return Object(f.jsx)(b,Object(j.a)(Object(j.a)({},t),{},{onClick:function(){return n(t.id)}}),t.id)}))})},v=function(t,e){switch(e){case"SHOW_ALL":return t;case"SHOW_COMPLETED":return t.filter((function(t){return t.completed}));case"SHOW_ACTIVE":return t.filter((function(t){return!t.completed}));default:throw new Error("Unknown filter: ".concat(e,"."))}},_=Object(u.b)((function(t){return{todos:v(t.todos,t.visibilityFilter)}}),(function(t){return{onTodoClick:function(e){t(function(t){return{type:"TOGGLE_TODO",id:t}}(e))}}}))(h);var p=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(a,{}),Object(f.jsx)(_,{}),Object(f.jsx)(d,{})]})},x=n(35),T=n(119),E=n.n(T),S=n(120),D=function(t,e){switch(e.type){case"ADD_TODO":return{id:e.id,text:e.text,completed:!1};case"TOGGLE_TODO":return t.id!==e.id?t:Object(j.a)(Object(j.a)({},t),{},{completed:!t.completed});default:return t}},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TODO":return[].concat(Object(S.a)(t),[D(void 0,e)]);case"TOGGLE_TODO":return t.map((function(t){return D(t,e)}));default:return t}},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SHOW_ALL",e=arguments.length>1?arguments[1]:void 0;return"SET_VISIBILITY_FILTER"===e.type?e.filter:t},L=Object(x.a)({todos:m,visibilityFilter:I}),y=function(){try{var t=localStorage.getItem("state");if(t)return JSON.parse(t)}catch(e){}finally{return}}(),w=Object(x.b)(L,y,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());w.subscribe(E()((function(){!function(t){try{var e=JSON.stringify(t);localStorage.setItem("state",e)}catch(n){}}({todos:w.getState().todos})}),1e3)),o.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(u.a,{store:w,children:Object(f.jsx)(p,{})})}),document.getElementById("root"))}},[[243,1,2]]]);
//# sourceMappingURL=main.cd36a6e8.chunk.js.map