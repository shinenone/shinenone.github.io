(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5063db38"],{"020a":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"details-recommend"},[e("div",{staticClass:"update"},[e("h3",[t._v("最近更新")]),t._l(t.DetailsData,function(t,a){return e("DetailsCard",{key:a,attrs:{item:t}})})],2)])},n=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"details-card"},[e("div",{staticClass:"author"},[e("div",{staticClass:"author-portrait"},[e("img",{attrs:{src:t.item.data.content.data.author.icon}})]),e("div",{staticClass:"author-message"},[e("div",{staticClass:"author-name"},[e("p",[t._v(t._s(t.item.data.content.data.author.name))])]),e("div",{staticClass:"author-title"},[e("p",[t._v("发布:")]),e("p",[t._v(t._s(t.item.data.content.data.title))])])])]),e("div",{staticClass:"video-label"},[e("div",{staticClass:"video-comment"},[e("p",[t._v(t._s(t.item.data.content.data.description))])]),e("div",{staticClass:"label"},t._l(t.item.data.content.data.tags,function(a,s){return e("span",{key:s},[t._v(t._s(a.name))])}),0)]),e("div",{staticClass:"video"},[e("video",{attrs:{controls:"",preload:"none",poster:t.item.data.content.data.cover.feed}},[e("source",{attrs:{src:t.item.data.content.data.playUrl}})])]),e("div",{staticClass:"interact"},[e("div",{staticClass:"like"},[e("span",[t._v(t._s(t.item.data.content.data.consumption.shareCount))])]),e("div",{staticClass:"comment"},[e("span",[t._v(t._s(t.item.data.content.data.consumption.replyCount))])]),t._m(0),t._m(1)])])},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"time"},[e("span",[t._v("00:00")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"share"},[e("span",[e("i",{staticClass:"iconfont icon-icon-test2"})])])}],o={name:"details-card",props:["item"],data:function(){return{}}},r=o,d=(e("508d"),e("2877")),l=Object(d["a"])(r,i,c,!1,null,null,null),u=l.exports,v={name:"details-recommend",components:{DetailsCard:u},data:function(){return{DetailsData:null}},created:function(){var t=this;axios.get("https://api.apiopen.top/videoCategoryDetails?id="+this.$route.params.id).then(function(a){t.DetailsData=a.data.result}).catch(function(t){console.error(t)})}},m=v,p=(e("d190"),Object(d["a"])(m,s,n,!1,null,null,null));a["default"]=p.exports},"508d":function(t,a,e){"use strict";var s=e("d826"),n=e.n(s);n.a},"722e":function(t,a,e){},d190:function(t,a,e){"use strict";var s=e("722e"),n=e.n(s);n.a},d826:function(t,a,e){}}]);
//# sourceMappingURL=chunk-5063db38.8c750d26.js.map