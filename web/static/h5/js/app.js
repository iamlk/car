webpackJsonp([23],{"3yOa":function(e,t){},"6VpE":function(e,t){},F3Dd:function(e,t){},IGws:function(e,t){},J1DO:function(e,t){},MwFm:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("8eaC"),r=n("uduo"),i=n.n(r),o=n("8kJB"),l=n.n(o),c=n("l7Nj"),s=n.n(c).a.create({timeout:15e3,headers:{"X-Requested-With":"XMLHttpRequest"}});s.interceptors.request.use(function(e){return e}),s.interceptors.response.use(function(e){if(e.data)return 200===e.data.code?e.data:(a.a.prototype.$dialog.alert({message:e.data.message}),l.a.reject(e.data))},function(e){return a.a.prototype.$dialog.alert({message:"网络错误"}),l.a.reject(e)}),s.openWindow=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[];i()(t).forEach(function(e){n.push(e+"="+t[e])}),n=n.join("&"),e=-1===e.indexOf("?")?e+"?"+n:e+"&"+n;var a=document.createElement("a");a.target="_blank",a.href=e,a.click(),a.remove()};var u={install:function(e){e.prototype.$http=s}},d={name:"background-image",config:{update:function(e,t){t.value!==t.oldValue&&""!==t.value&&(e.style.backgroundImage="url("+t.value+")")},bind:function(e,t){t.value!==t.oldValue&&""!==t.value&&(e.style.backgroundImage="url("+t.value+")")}}},p={install:function(e){[d].forEach(function(t){e.directive(t.name,t.config)})}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"comp-header"},[t("div",{staticClass:"wrap flex"},[t("div",{staticClass:"location flex"},[this._v("成都")]),t("van-field",{staticClass:"search",attrs:{clearable:"clearable","left-icon":"search",placeholder:"搜索您要搜索的车"}}),t("div",{staticClass:"call flex"},[t("van-icon",{attrs:{name:"phone"}})],1)],1)])},staticRenderFns:[]};var f=n("7jd7")(null,h,!1,function(e){n("IGws")},"data-v-6a0e89cc",null).exports,m={props:{list:{type:Array,default:function(){return[]}}},data:function(){return{curIndex:0}},methods:{handleItemClick:function(){this.$emit("item-click",this.curIndex)},handleChange:function(e){this.curIndex=e}}},v={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"comp-banner",on:{click:this.handleItemClick}},[t("van-swipe",{attrs:{autoplay:3e3},on:{change:this.handleChange}},this._l(this.list,function(e,n){return t("van-swipe-item",{key:e.id},[t("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.img,expression:"item.img",arg:"background-image"}],staticClass:"bg img"})])}))],1)},staticRenderFns:[]};var y=n("7jd7")(m,v,!1,function(e){n("r+O4")},"data-v-9856ef44",null).exports,b={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"comp-box"},[this._t("default")],2)},staticRenderFns:[]};var g=n("7jd7")(null,b,!1,function(e){n("F3Dd")},"data-v-4a614ee2",null).exports,x={props:{title:{type:String,default:""},showRight:{type:Boolean,default:!1},rightText:{type:String,default:""}},methods:{handleRightClick:function(){this.$emit("right-click")}}},k={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"comp-title"},[n("div",{staticClass:"title"},[e._v(e._s(e.title))]),e.showRight?n("div",{staticClass:"right",on:{click:e.handleRightClick}},[n("span",[e._v(e._s(e.rightText))]),n("van-icon",{staticClass:"icon",attrs:{name:"arrow"}})],1):e._e()])},staticRenderFns:[]};var w=n("7jd7")(x,k,!1,function(e){n("MwFm")},"data-v-705dccc4",null).exports,C=n("5/aF"),_=n.n(C),V=n("Z34F"),$=n.n(V),E={props:{click:{type:Function,default:function(){}}},data:function(){return{loading:!1}},methods:{handleClick:function(){var e=this;return $()(_.a.mark(function t(){return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.loading){t.next=10;break}return t.prev=1,e.loading=!0,t.next=5,e.click();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0);case 10:e.loading=!1;case 11:case"end":return t.stop()}},t,e,[[1,7]])}))()}}},R={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"comp-bottom-bar"},[t("div",{staticClass:"wrap flex",on:{click:this.handleClick}},[this._t("default")],2)])},staticRenderFns:[]};var F=n("7jd7")(E,R,!1,function(e){n("J1DO")},null,null).exports,S={props:{title:{type:String,default:""}},methods:{handleLeftClick:function(){history.back()}}},j={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"comp-my-nav-bar"},[t("van-nav-bar",{attrs:{fixed:!0,title:this.title,"left-text":"返回","left-arrow":"left-arrow"},on:{"click-left":this.handleLeftClick}})],1)},staticRenderFns:[]};var I=n("7jd7")(S,j,!1,function(e){n("WyNV")},"data-v-5e48a6a3",null).exports,T={props:{list:{type:Array,default:function(){return[]}}}},M={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"van-cell comp-key-value"},e._l(e.list,function(t){return n("div",{staticClass:"item"},[n("div",{staticClass:"key"},[e._v(e._s(t.key))]),n("div",{staticClass:"value"},[e._v(e._s(t.val))])])}))},staticRenderFns:[]};var N=n("7jd7")(T,M,!1,function(e){n("3yOa")},"data-v-45353506",null).exports,W={props:{src:{type:String,default:""}}},O={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"comp-avatar"},[t("van-icon",{staticClass:"icon",attrs:{name:"contact"}})],1)},staticRenderFns:[]};var P=n("7jd7")(W,O,!1,function(e){n("sveY")},"data-v-096af324",null).exports,D={props:{label:{type:String,default:""},actions:{type:Array,default:function(){return[{name:"1"}]}},placeholder:{type:String,default:""},value:{type:String,default:""}},watch:{value:function(e){var t=this.actions.find(function(t){return t.value===e});this.myValue=t.value,this.valueText=t.name}},computed:{displayValue:function(){return this.valueText||this.placeholder}},data:function(){return{myValue:"",valueText:"",show:!1}},methods:{onSelect:function(e){this.myValue=e.value,this.valueText=e.name,this.show=!1,this.$emit("input",this.myValue)}}},Y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"comp-form-select"},[n("van-cell",{class:{noval:""===e.myValue},attrs:{title:e.label,value:e.displayValue,"is-link":"is-link"},on:{click:function(t){e.show=!0}}}),n("van-actionsheet",{attrs:{actions:e.actions},on:{select:e.onSelect},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}})],1)},staticRenderFns:[]};var Z=n("7jd7")(D,Y,!1,function(e){n("rZZC")},null,null).exports,A=n("58XF"),B=n.n(A),H={},L={},q={props:{label:{type:String,default:""},data:{type:Array,default:function(){return[]}},placeholder:{type:String,default:""},value:{type:Number,default:1}},watch:{value:{handler:function(e){this.countValue()},immediate:!0},data:function(){this.countValue()}},computed:{displayValue:function(){return this.valueText||this.placeholder},columns:function(){var e,t,n={};e={className:"c1",defaultIndex:this.index0,values:this.data.map(function(e,t){return H[e.label]=t,e.label})};var a=this.data[this.index0];if(t={className:"c2",defaultIndex:this.index1,values:a?a.children.map(function(e,t){return L[e.label]=t,e.label}):[]},a){var r=a.children[this.index1];n={className:"c3",defaultIndex:this.index2,values:r?r.children.map(function(e){return{text:e.label,value:e.value}}):[]}}return[e,t,n]}},data:function(){return{myValue:"",valueText:"",show:!1,index0:0,index1:0,index2:0}},methods:{handleConfirm:function(e){var t=B()(e,3)[2];this.myValue=t.value,this.valueText=t.text,this.show=!1,this.$emit("input",this.myValue)},handleCancel:function(){this.show=!1},handleChange:function(e,t){var n=B()(t,3),a=n[0],r=n[1];n[2];this.index0=H[a],this.index1=L[r]},countValue:function(){var e=this;this.data.length&&this.data.forEach(function(t,n){t.children.forEach(function(t,a){t.children.forEach(function(t,r){t.value===e.value&&(e.index0=n,e.index1=a,e.index2=r,e.valueText=t.label)})})})}}},z={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"comp-form-select"},[n("van-cell",{class:{noval:""===e.myValue},attrs:{title:e.label,value:e.displayValue,"is-link":"is-link"},on:{click:function(t){e.show=!0}}}),n("van-popup",{attrs:{position:"bottom"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[n("van-picker",{attrs:{columns:e.columns,"show-toolbar":!0},on:{change:e.handleChange,confirm:e.handleConfirm,cancel:e.handleCancel}})],1)],1)},staticRenderFns:[]};var G=n("7jd7")(q,z,!1,function(e){n("bhUm")},null,null).exports,X={props:{label:{type:String,default:""},placeholder:{type:String,default:""},value:{type:String,default:""}},watch:{value:function(e){this.myValue=e}},computed:{displayValue:function(){return this.myValue||this.placeholder}},data:function(){return{myValue:"",show:!1}},methods:{onRead:function(e){var t=this;return $()(_.a.mark(function n(){var a,r,i,o;return _.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,(a=new FormData).append("UploadModel[image]",e.file),r={headers:{"Content-Type":"multipart/form-data"}},n.next=6,t.$http.post("/mobile/site/safeimg",a,r);case 6:i=n.sent,o=i.data,t.myValue=o[0],n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}},n,t,[[0,11]])}))()}}},J={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"van-cell comp-form-select",class:{noval:""===e.myValue},on:{click:function(t){e.show=!0}}},[n("div",{staticClass:"van-cell__title"},[n("span",[e._v(e._s(e.label))])]),n("div",{staticClass:"van-cell__value"},[n("van-uploader",{attrs:{"after-read":e.onRead,accept:"image/*"}},[n("span",[e._v(e._s(e.displayValue))])])],1)])},staticRenderFns:[]};var U=n("7jd7")(X,J,!1,function(e){n("mDGa")},null,null).exports,K={props:{phone:{type:String,default:""},value:{type:String,default:""}},watch:{value:{handler:function(e){this.myValue=e},immediate:!0},myValue:function(){this.$emit("input",this.myValue)}},data:function(){return{myValue:"",count:60,doing:!1}},methods:{sendCode:function(){var e=this;return $()(_.a.mark(function t(){return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,""!==e.phone){t.next=4;break}return e.fail("电话号码不能为空"),t.abrupt("return");case 4:return e.doing=!0,t.next=7,e.$http.post("/mobile/user/sendcode",{phone:e.phone});case 7:return t.next=9,e.startCount();case 9:t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),e.doing=!1,console.log(t.t0);case 15:e.doing=!1;case 16:case"end":return t.stop()}},t,e,[[0,11]])}))()},startCount:function(){var e=this;return new l.a(function(t){var n=setInterval(function(){e.count-=1,0===e.count&&(e.count=60,clearInterval(n),t(!0),e.doing=!1)},1e3)})}}},Q={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-field",{attrs:{label:"验证码",placeholder:"请输入验证码"},model:{value:e.myValue,callback:function(t){e.myValue=t},expression:"myValue"}},[n("van-button",{attrs:{slot:"button",size:"small",type:"primary",disabled:e.doing},on:{click:e.sendCode},slot:"button"},[e._v(e._s(e.doing?e.count+"s":"发送验证码"))])],1)},staticRenderFns:[]},ee=n("7jd7")(K,Q,!1,null,null,null).exports;n("6VpE"),n("WWTk");a.a.use(u),a.a.use(p),document.querySelector("html").style.fontSize=document.documentElement.offsetWidth/25+"px",a.a.config.productionTip=!1,a.a.component("my-header",f),a.a.component("my-banner",y),a.a.component("my-box",g),a.a.component("my-title",w),a.a.component("my-bottom-bar",F),a.a.component("my-nav-bar",I),a.a.component("my-key-value",N),a.a.component("my-avatar",P),a.a.component("my-form-select",Z),a.a.component("my-form-uploader",U),a.a.component("my-form-car-model-picker",G),a.a.component("my-form-valid-code",ee);var te=n("13Ec"),ne=n("YTv0");a.a.use(ne.a);var ae=a.a.component("routerview",{template:"<div class=fullheight><router-view></router-view></div>"}),re=new ne.a({routes:[{path:"",redirect:"/main"},{path:"/main",component:function(){return n.e(15).then(n.bind(null,"3QXn"))},children:[{path:"",redirect:"home"},{path:"home",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"Hc+b"))}},{path:"car",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"ppkr"))}},{path:"life",component:function(){return n.e(5).then(n.bind(null,"f+MZ"))}},{path:"profile",component:function(){return n.e(6).then(n.bind(null,"Wp6a"))}}]},{path:"/car",component:ae,children:[{path:"detail",component:function(){return n.e(10).then(n.bind(null,"sCYH"))}},{path:"form",component:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"RfwK"))}},{path:"param",component:function(){return n.e(12).then(n.bind(null,"/MC1"))}}]},{path:"/my",component:ae,children:[{path:"qr",component:function(){return n.e(11).then(n.bind(null,"XS3x"))}},{path:"ioan",component:function(){return n.e(3).then(n.bind(null,"5NO3"))}},{path:"car-insurance",component:function(){return n.e(4).then(n.bind(null,"c9yx"))}},{path:"invite",component:function(){return n.e(18).then(n.bind(null,"4hSK"))}},{path:"mycar",component:function(){return Promise.all([n.e(0),n.e(19)]).then(n.bind(null,"1zo2"))}},{path:"join",component:function(){return n.e(20).then(n.bind(null,"acEt"))}},{path:"bind",component:function(){return n.e(21).then(n.bind(null,"GlhC"))}},{path:"collect",component:function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"w9CM"))}}]},{path:"/loan",component:ae,children:[{path:"",component:function(){return n.e(16).then(n.bind(null,"YPid"))}},{path:"form",component:function(){return n.e(13).then(n.bind(null,"QLAm"))}}]},{path:"/safe",component:ae,children:[{path:"",component:function(){return n.e(8).then(n.bind(null,"N06H"))}},{path:"form",component:function(){return n.e(17).then(n.bind(null,"ys8N"))}}]},{path:"/business",component:ae,children:[{path:"",component:function(){return n.e(7).then(n.bind(null,"+RZA"))}}]}]}),ie=n("xag5");a.a.use(ie.a);var oe=new ie.a.Store({state:{brands:[],carModels:[]},mutations:{setBrands:function(e,t){e.brands=t},setCarModels:function(e,t){e.carModels=t}},actions:{getBrands:function(e){var t=this,n=e.commit;return $()(_.a.mark(function e(){var r,i;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.a.prototype.$http.post("/mobile/car/brands",{p:1});case 3:r=e.sent,i=r.data,n("setBrands",i),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,t,[[0,8]])}))()},getCarModels:function(e){var t=this,n=e.commit;return $()(_.a.mark(function e(){var r,i;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.a.prototype.$http.post("/admin/car/cars",{p:1});case 3:r=e.sent,i=r.data,n("setCarModels",i),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,t,[[0,8]])}))()}}});oe.dispatch("getBrands"),oe.dispatch("getCarModels");var le=oe;n("hvYL");a.a.use(te.e),a.a.use(te.c),console.log(te.e),a.a.prototype.success=te.d.success,a.a.prototype.fail=te.d.fail,a.a.prototype.alert=function(e){return te.a.alert({message:e})},a.a.prototype.confirm=function(e){return te.a.confirm({message:e})},a.a.prototype.ImagePreview=te.b,a.a.config.productionTip=!1;var ce=a.a.component("Index",{template:"<div class=frame><router-view></router-view></div>"});new a.a({el:"#app",router:re,store:le,components:{Index:ce},template:"<Index />"})},WWTk:function(e,t){},WyNV:function(e,t){},bhUm:function(e,t){},hvYL:function(e,t){},mDGa:function(e,t){},"r+O4":function(e,t){},rZZC:function(e,t){},sveY:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.js.map