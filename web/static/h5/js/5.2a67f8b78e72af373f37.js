webpackJsonp([5],{"322t":function(t,a){},"5NO3":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("5/aF"),e=s.n(i),n=s("Z34F"),c=s.n(n),r={components:{Imgs:s("vD5o").a},data:function(){return{data:{d_money:0,d_month:0,d_pay:0,d_left:0,imgs:[]}}},created:function(){var t=this;return c()(e.a.mark(function a(){var s,i;return e.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.$http.post("/mobile/user/loan",{p:1});case 3:s=a.sent,i=s.data,t.data=i,a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}},a,t,[[0,8]])}))()}},l={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page"},[s("my-nav-bar",{attrs:{title:"我的贷款"}}),s("div",{staticClass:"row1"},[s("div",{staticClass:"title"},[t._v("当月应还款(元)")]),s("div",{staticClass:"val"},[t._v(t._s(t.data.d_pay))])]),s("div",{staticClass:"row2"},[s("div",{staticClass:"cell"},[s("i",{staticClass:"iconfont"},[t._v("")]),s("div",{staticClass:"info"},[s("div",{staticClass:"title"},[t._v("贷款总额")]),s("div",{staticClass:"val"},[t._v(t._s(t.data.d_money))])])]),s("div",{staticClass:"cell"},[s("i",{staticClass:"iconfont"},[t._v("")]),s("div",{staticClass:"info"},[s("div",{staticClass:"title"},[t._v("剩余期数(月)")]),s("div",{staticClass:"val"},[t._v(t._s(t.data.d_month))])])])]),s("imgs",{attrs:{list:t.data.imgs}})],1)},staticRenderFns:[]};var o=s("7jd7")(r,l,!1,function(t){s("322t")},"data-v-c311c06e",null);a.default=o.exports},"F1+w":function(t,a){},vD5o:function(t,a,s){"use strict";var i={props:{list:{type:Array,default:function(){return[]}}},methods:{preview:function(t){this.ImagePreview({images:this.list,startPosition:t})}}},e={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"comp"},[s("div",{staticClass:"title"},[t._v("我的资料")]),s("div",{staticClass:"list"},t._l(t.list,function(a,i){return s("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:a,expression:"item",arg:"background-image"}],staticClass:"img bg",on:{click:function(a){t.preview(i)}}})}))])},staticRenderFns:[]};var n=s("7jd7")(i,e,!1,function(t){s("F1+w")},"data-v-8332e48e",null);a.a=n.exports}});
//# sourceMappingURL=5.2a67f8b78e72af373f37.js.map