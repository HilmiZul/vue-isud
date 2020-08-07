(function(t){function e(e){for(var r,u,i=e[0],c=e[1],s=e[2],l=0,f=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&f.push(a[u][0]),a[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function u(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a8e4d609","chunk-741f5406":"8f49ce40","chunk-2d0c0ea4":"e19b5ba0","chunk-2d0c76d5":"70fc2532","chunk-2d20f385":"409c2521"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(t);var s=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-demo/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-full"},[n("div",{attrs:{id:"nav"}},[n("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"navbar-brand"},[n("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),n("router-link",{staticClass:"navbar-item",attrs:{to:{name:"About"}}},[t._v("About")]),n("router-link",{staticClass:"navbar-item",attrs:{to:{name:"student"}}},[t._v("Student")])],1)])])])])]),n("router-view")],1)},o=[],u=(n("5c0b"),n("2877")),i={},c=Object(u["a"])(i,a,o,!1,null,null,null),s=c.exports,l=(n("d3b7"),n("8c4f")),d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("h1",{staticClass:"title"},[t._v(" Home... ")])])])])])}],p={},v=Object(u["a"])(p,d,f,!1,null,null,null),m=v.exports;r["a"].use(l["a"]);var h=[{path:"/",name:"Home",component:m},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/student",name:"student",component:function(){return Promise.all([n.e("chunk-741f5406"),n.e("chunk-2d0c0ea4")]).then(n.bind(null,"448f"))}},{path:"/student/add",name:"add-student",component:function(){return Promise.all([n.e("chunk-741f5406"),n.e("chunk-2d20f385")]).then(n.bind(null,"b364"))}},{path:"/student/edit/:id",name:"edit-student",component:function(){return Promise.all([n.e("chunk-741f5406"),n.e("chunk-2d0c76d5")]).then(n.bind(null,"5125"))}}],b=new l["a"]({mode:"history",base:"/vue-demo/",routes:h}),y=b;r["a"].config.productionTip=!1,new r["a"]({router:y,render:function(t){return t(s)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.cc0c4a69.js.map