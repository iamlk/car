webpackJsonp([5],{s2Zo:function(t,e){},sCYH:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("5/aF"),i=s.n(a),r=s("Z34F"),n=s.n(r),c=s("13Ec"),o={data:function(){return{id:"",product:{},base:{},evaluate:{},star:"",koubei:{},imgs:[],business:{},isCollected:0}},computed:{baseParams:function(){return[{label:"车门数",text:this.base.doors},{label:"座位数",text:this.base.chairs},{label:"长宽高(mm)",text:this.base.length+"/"+this.base.width+"/"+this.base.height},{label:"轴距(mm)",text:this.base.wheelbase},{label:"行李箱容积(L)",text:this.base.capacity},{label:"整备质量(KG)",text:this.base.weight},{label:"颜色",text:this.base.color},{label:"变速箱",text:this.base.gear_box},{label:"变速箱型号",text:this.base.gear_model},{label:"车型",text:this.base.model},{label:"轮毂",text:this.base.wheel}]}},methods:{showMoreParams:function(){this.$router.push({path:"/car/param",query:{id:this.id}})},jumpToFrom:function(){this.$router.push({path:"/car/form",query:{id:this.id}})},previewImg:function(t){Object(c.a)({images:this.imgs.map(function(t){return t.img}),startPosition:t})},collect:function(){var t=this;return n()(i.a.mark(function e(){var s,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.post("/mobile/product/store",{pid:t.id,store:1===t.isCollected?0:1});case 3:s=e.sent,a=s.data,t.$dialog.alert({message:"操作成功"}),t.isCollected=a.store,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}},e,t,[[0,9]])}))()},getImgs:function(){var t=this;return n()(i.a.mark(function e(){var s,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.post("/mobile/product/img",{id:t.id,p:1});case 3:s=e.sent,a=s.data,t.imgs=a.list,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,t,[[0,8]])}))()},getEvaluate:function(){var t=this;return n()(i.a.mark(function e(){var s,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.post("/mobile/product/info",{id:t.id});case 3:s=e.sent,a=s.data,t.evaluate=a,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,t,[[0,8]])}))()},getBase:function(){var t=this;return n()(i.a.mark(function e(){var s,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.post("/mobile/product/base",{id:t.id});case 3:s=e.sent,a=s.data,t.base=a,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,t,[[0,8]])}))()},getProduct:function(){var t=this;return n()(i.a.mark(function e(){var s,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.post("/mobile/product/product",{id:t.id});case 3:s=e.sent,a=s.data,t.product=a,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,t,[[0,8]])}))()},getKoubei:function(){var t=this;return n()(i.a.mark(function e(){var s,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.post("/mobile/product/koubei",{id:t.id});case 3:s=e.sent,a=s.data,t.koubei=a.keywords,t.star=a.star,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}},e,t,[[0,9]])}))()},getBusiness:function(){var t=this;return n()(i.a.mark(function e(){var s,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.post("/mobile/product/business",{id:t.id});case 3:s=e.sent,a=s.data,t.business=a,console.log(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}},e,t,[[0,9]])}))()},getCollectStatus:function(){var t=this;return n()(i.a.mark(function e(){var s,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.post("/mobile/product/store",{pid:t.id,store:2});case 3:s=e.sent,a=s.data,t.isCollected=a.store,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,t,[[0,8]])}))()}},created:function(){this.id=this.$route.query.id,this.getImgs(),this.getEvaluate(),this.getBase(),this.getProduct(),this.getKoubei(),this.getBusiness(),this.getCollectStatus()}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-car-detail"},[s("my-nav-bar",{attrs:{title:"车辆详情"}}),s("my-banner",{attrs:{list:t.imgs}}),s("div",{staticClass:"base-info"},[s("div",{staticClass:"title"},[t._v(t._s(t.product.title))]),s("div",{staticClass:"info"},[t._v("成都 "+t._s(t.product.reg_date)+"上牌 "+t._s(t.product.km)+"公里 "+t._s(t.product.emission_std))]),s("div",{staticClass:"cur-price"},[t._v(t._s(t.product.price)+"万元")]),s("div",{staticClass:"origin-price"},[t._v("官方指导价："+t._s(t.product.price_new)+"万+"+t._s(t.product.tax)+"万（购置税）")])]),s("my-box",[s("div",{staticClass:"dealer"},[s("div",{staticClass:"name"},[t._v(t._s(t.business.name))]),s("div",{staticClass:"number"},[t._v("共有好车139辆")]),s("div",{staticClass:"phone"},[s("div",{staticClass:"text onerow"},[t._v(t._s(t.business.phone))]),s("van-icon",{staticClass:"icon",attrs:{name:"phone"}})],1),s("div",{staticClass:"location"},[s("div",{staticClass:"text onerow"},[t._v(t._s(t.business.address))]),s("van-icon",{staticClass:"icon",attrs:{name:"location"}})],1),s("div",{staticClass:"audio"},[s("div",{staticClass:"text"},[t._v("车商有话说:")]),s("div",{staticClass:"voice"},[s("i",{staticClass:"iconfont"},[t._v("")]),s("span",[t._v("1:12")])])])])]),s("my-box",[s("my-title",{attrs:{title:"车辆信息",showRight:!0,rightText:"更多参数配置"},on:{"right-click":t.showMoreParams}}),s("my-key-value",{attrs:{list:t.baseParams}}),s("div",{staticClass:"tips"},[t._v("参数配置仅供参考，下单前请与销售确认")])],1),s("my-box",[s("my-title",{attrs:{title:"车辆描述"}}),s("div",{staticClass:"desc"},[s("div",{staticClass:"title"},[t._v("[检测师说]")]),s("div",{staticClass:"content"},[t._v(t._s(t.evaluate.examiner))]),s("div",{staticClass:"title"},[t._v("[车主说]")]),s("div",{staticClass:"content"},[t._v(t._s(t.evaluate.owner))]),s("div",{staticClass:"title"},[t._v("[车商说]")]),s("div",{staticClass:"content"},[t._v(t._s(t.evaluate.business))])])],1),s("my-box",[s("my-title",{attrs:{title:"车辆网络口碑",showRight:!0}}),s("div",{staticClass:"prize"},[s("div",{staticClass:"score"},[t._v("综合评分："+t._s(t.star)+"分")]),s("div",{staticClass:"tags"},t._l(t.koubei,function(e){return s("div",{staticClass:"item"},[t._v(t._s(e))])}))])],1),s("my-box",[s("my-title",{attrs:{title:"车辆实拍"}}),s("div",{staticClass:"imgs"},t._l(t.imgs,function(e,a){return s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img,expression:"item.img"}],on:{click:function(e){t.previewImg(a)}}})}))],1),s("my-bottom-bar",{staticClass:"bottom"},[s("div",{staticClass:"item phone"},[s("van-icon",{staticClass:"icon",attrs:{name:"phone"}}),s("div",{staticClass:"right"},[s("div",{staticClass:"text"},[t._v("电话咨询")]),s("div",{staticClass:"time"},[t._v("9:00-21:00")])])],1),s("div",{staticClass:"item collect",class:{done:1===t.isCollected},on:{click:t.collect}},[s("van-icon",{staticClass:"icon",attrs:{name:"like"}}),s("div",{staticClass:"right"},[t._v(t._s(1===t.isCollected?"已收藏":"收藏"))])],1),s("div",{staticClass:"item form",on:{click:t.jumpToFrom}},[t._v("询最低价")])])],1)},staticRenderFns:[]};var u=s("7jd7")(o,l,!1,function(t){s("s2Zo")},"data-v-a871517a",null);e.default=u.exports}});
//# sourceMappingURL=5.0b39a29766e44596ef68.js.map