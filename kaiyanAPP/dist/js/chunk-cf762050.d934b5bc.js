(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cf762050"],{"02f4":function(t,e,n){var i=n("4588"),r=n("be13");t.exports=function(t){return function(e,n){var a,c,o=String(r(e)),s=i(n),u=o.length;return s<0||s>=u?t?"":void 0:(a=o.charCodeAt(s),a<55296||a>56319||s+1===u||(c=o.charCodeAt(s+1))<56320||c>57343?t?o.charAt(s):a:t?o.slice(s,s+2):c-56320+(a-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var i=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},"0bfb":function(t,e,n){"use strict";var i=n("cb7c");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"0f19":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.toLoad?n("div",{staticClass:"video-category-details"},[n("div",{staticClass:"banner"},[n("div",{staticClass:"text"},[n("div",{staticClass:"button"},[n("button",{staticClass:"goback",on:{click:function(e){return t.goback()}}},[n("i",{staticClass:"iconfont icon-icon-test7"})]),t._m(0)]),n("div",{staticClass:"content"},[n("div",{staticClass:"title"},[n("h2",[t._v(t._s(t.titleData[1]))])]),n("div",{staticClass:"introduce"},[n("span",[t._v(t._s(t.classifyData.data.description))])]),t._m(1)])])]),n("div",{staticClass:"skip"},[n("router-link",{attrs:{to:"/video-category-details/"+this.$route.params.id+"/details-recommend"}},[t._v("推荐")]),n("router-link",{attrs:{to:"/video-category-details/"+this.$route.params.id+"/details-square"}},[t._v("广场")])],1),n("router-view")],1):t._e()},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"share"},[n("i",{staticClass:"iconfont icon-icon-test2"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"attention"},[n("button",[t._v("+关注")])])}],a=(n("28a5"),{name:"video-category-details",data:function(){return{classifyData:null,titleData:null,toLoad:!1}},created:function(){var t=this;axios.get("https://api.apiopen.top/videoCategory").then(function(e){for(var n=0;n<e.data.result.itemList.length;n++)t.$route.params.id==e.data.result.itemList[n].data.id&&(t.classifyData=e.data.result.itemList[n],t.titleData=t.classifyData.data.title.split("#"));t.toLoad=!0}).catch(function(t){console.error(t)})},methods:{goback:function(){this.$router.push({path:"/home-discover"})}}}),c=a,o=(n("a8aa"),n("2877")),s=Object(o["a"])(c,i,r,!1,null,null,null);e["default"]=s.exports},"214f":function(t,e,n){"use strict";n("b0c5");var i=n("2aba"),r=n("32e9"),a=n("79e5"),c=n("be13"),o=n("2b4c"),s=n("520a"),u=o("species"),l=!a(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var d=o(t),v=!a(function(){var e={};return e[d]=function(){return 7},7!=""[t](e)}),p=v?!a(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[d](""),!e}):void 0;if(!v||!p||"replace"===t&&!l||"split"===t&&!f){var h=/./[d],g=n(c,d,""[t],function(t,e,n,i,r){return e.exec===s?v&&!r?{done:!0,value:h.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),b=g[0],x=g[1];i(String.prototype,t,b),r(RegExp.prototype,d,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}}},"28a5":function(t,e,n){"use strict";var i=n("aae3"),r=n("cb7c"),a=n("ebd6"),c=n("0390"),o=n("9def"),s=n("5f1b"),u=n("520a"),l=n("79e5"),f=Math.min,d=[].push,v="split",p="length",h="lastIndex",g=4294967295,b=!l(function(){RegExp(g,"y")});n("214f")("split",2,function(t,e,n,l){var x;return x="c"=="abbc"[v](/(b)*/)[1]||4!="test"[v](/(?:)/,-1)[p]||2!="ab"[v](/(?:ab)*/)[p]||4!="."[v](/(.?)(.?)/)[p]||"."[v](/()()/)[p]>1||""[v](/.?/)[p]?function(t,e){var r=String(this);if(void 0===t&&0===e)return[];if(!i(t))return n.call(r,t,e);var a,c,o,s=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,v=void 0===e?g:e>>>0,b=new RegExp(t.source,l+"g");while(a=u.call(b,r)){if(c=b[h],c>f&&(s.push(r.slice(f,a.index)),a[p]>1&&a.index<r[p]&&d.apply(s,a.slice(1)),o=a[0][p],f=c,s[p]>=v))break;b[h]===a.index&&b[h]++}return f===r[p]?!o&&b.test("")||s.push(""):s.push(r.slice(f)),s[p]>v?s.slice(0,v):s}:"0"[v](void 0,0)[p]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,i){var r=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,r,i):x.call(String(r),n,i)},function(t,e){var i=l(x,t,this,e,x!==n);if(i.done)return i.value;var u=r(t),d=String(this),v=a(u,RegExp),p=u.unicode,h=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(b?"y":"g"),m=new v(b?u:"^(?:"+u.source+")",h),y=void 0===e?g:e>>>0;if(0===y)return[];if(0===d.length)return null===s(m,d)?[d]:[];var C=0,E=0,w=[];while(E<d.length){m.lastIndex=b?E:0;var _,k=s(m,b?d:d.slice(E));if(null===k||(_=f(o(m.lastIndex+(b?0:E)),d.length))===C)E=c(d,E,p);else{if(w.push(d.slice(C,E)),w.length===y)return w;for(var R=1;R<=k.length-1;R++)if(w.push(k[R]),w.length===y)return w;E=C=_}}return w.push(d.slice(C)),w}]})},"520a":function(t,e,n){"use strict";var i=n("0bfb"),r=RegExp.prototype.exec,a=String.prototype.replace,c=r,o="lastIndex",s=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t[o]||0!==e[o]}(),u=void 0!==/()??/.exec("")[1],l=s||u;l&&(c=function(t){var e,n,c,l,f=this;return u&&(n=new RegExp("^"+f.source+"$(?!\\s)",i.call(f))),s&&(e=f[o]),c=r.call(f,t),s&&c&&(f[o]=f.global?c.index+c[0].length:e),u&&c&&c.length>1&&a.call(c[0],n,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(c[l]=void 0)}),c}),t.exports=c},"5f1b":function(t,e,n){"use strict";var i=n("23c6"),r=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},a8aa:function(t,e,n){"use strict";var i=n("b3be"),r=n.n(i);r.a},aae3:function(t,e,n){var i=n("d3f4"),r=n("2d95"),a=n("2b4c")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==r(t))}},b0c5:function(t,e,n){"use strict";var i=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},b3be:function(t,e,n){}}]);
//# sourceMappingURL=chunk-cf762050.d934b5bc.js.map