webpackJsonp([13],{ys8N:function(e,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=o("5/aF"),n=o.n(r),t=o("Z34F"),l=o.n(t),s={data:function(){return{optionActions:[{name:"车损险",value:"车损险"},{name:"三者险",value:"三者险"},{name:"盗抢险",value:"盗抢险"},{name:"座位险",value:"座位险"},{name:"自燃险",value:"自燃险"},{name:"涉水险",value:"涉水险"},{name:"玻璃险",value:"玻璃险"},{name:"划痕险",value:"划痕险"},{name:"随车行李险",value:"随车行李险"},{name:"新增设备险",value:"新增设备险"}],form:{name:"",phone:"",car_no:"",driver_card:"",option:""}}},methods:{save:function(){var e=this;return l()(n.a.mark(function a(){return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$http.post("/mobile/finance/safeadd",e.form);case 3:e.$dialog.alert({message:"保存成功"}),history.back(),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(a.t0);case 10:case"end":return a.stop()}},a,e,[[0,7]])}))()}}},c={render:function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"page-safe-form"},[o("my-nav-bar",{attrs:{title:"I品车险"}}),o("van-cell-group",[o("van-field",{attrs:{label:"姓名",placeholder:"请输入姓名"},model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}}),o("van-field",{attrs:{label:"电话",placeholder:"请输入电话"},model:{value:e.form.phone,callback:function(a){e.$set(e.form,"phone",a)},expression:"form.phone"}}),o("van-field",{attrs:{label:"车牌号",placeholder:"请输入车牌号"},model:{value:e.form.car_no,callback:function(a){e.$set(e.form,"car_no",a)},expression:"form.car_no"}}),o("my-form-uploader",{attrs:{label:"行驶证",placeholder:"请选择"},model:{value:e.form.driver_card,callback:function(a){e.$set(e.form,"driver_card",a)},expression:"form.driver_card"}}),o("my-form-select",{attrs:{label:"车辆险种",placeholder:"请选择",actions:e.optionActions},model:{value:e.form.option,callback:function(a){e.$set(e.form,"option",a)},expression:"form.option"}})],1),o("my-bottom-bar",{staticClass:"bottom",attrs:{click:e.save}},[o("div",{staticClass:"g-bottom-btn"},[e._v("提交")])])],1)},staticRenderFns:[]},m=o("7jd7")(s,c,!1,null,null,null);a.default=m.exports}});
//# sourceMappingURL=13.b9a09c5b2bbec1dbb531.js.map