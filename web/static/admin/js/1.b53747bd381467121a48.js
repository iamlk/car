webpackJsonp([1],{"2wwb":function(e,t){},"GgZ/":function(e,t){},OsJf:function(e,t){},UnOe:function(e,t){},l3C1:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("1p1D"),o=r.n(a),s=r("5/aF"),n=r.n(s),i=r("Z34F"),l=r.n(i),c={data:function(){return{form:{business:"",examiner:"",owner:""}}},methods:{getInfo:function(){var e=this;return l()(n.a.mark(function t(){var r,a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.post("/admin/product/info",{id:e.$route.query.id});case 3:r=t.sent,a=r.data,e.form=a.data,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}},t,e,[[0,8]])}))()},save:function(){var e=this;return l()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.post("/admin/product/infosave",o()({id:e.$route.query.id},e.form));case 3:e.success("保存成功"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}},t,e,[[0,6]])}))()}},mounted:function(){this.getInfo()}},m={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"comp-car-desc"},[r("el-form",{attrs:{"label-width":"80px","label-position":"left"}},[r("el-form-item",{attrs:{label:"检测师说"}},[r("el-input",{attrs:{type:"textarea",rows:"5"},model:{value:e.form.examiner,callback:function(t){e.$set(e.form,"examiner",t)},expression:"form.examiner"}})],1),r("el-form-item",{attrs:{label:"车商说"}},[r("el-input",{attrs:{type:"textarea",rows:"5"},model:{value:e.form.business,callback:function(t){e.$set(e.form,"business",t)},expression:"form.business"}})],1),r("el-form-item",{attrs:{label:"车主说"}},[r("el-input",{attrs:{type:"textarea",rows:"5"},model:{value:e.form.owner,callback:function(t){e.$set(e.form,"owner",t)},expression:"form.owner"}})],1),r("el-form-item",{attrs:{label:""}},[r("my-button",{attrs:{type:"primary",click:e.save}},[e._v("保存")])],1)],1)],1)},staticRenderFns:[]},u=["国一","国二","国三","国四","国五"],f=["两厢轿车","三厢轿车","跑车","SUV","MPV","面包车","皮卡"],p=["白色","深灰色","橙色","蓝色","紫色","多彩色","黑色","银灰色","红色","绿色","咖啡色","香槟色","黄色"],d=["手动","自动"],b=["铸铁","铝合金"],v=["普通","涡轮增压"],h=["汽油","柴油","电动","油电混合","其他"],y=["92号","95号"],_=["通风盘式","鼓式"],g=["前驱","后驱","四驱"],x=["机械式液压动力","电子液压助力","电动助力"],k=["非独立悬挂","横臂式独立悬挂","多连杆式独立悬挂","纵臂式独立悬挂","烛式独立悬挂","麦弗逊式独立悬挂","主动悬挂"],$={data:function(){return{gas:u,carModelData:[],cityData:[],form:{id:1,itype:"",business:"",user:"",title:"",price:"",price_new:"",tax:"",reg_date:"",km:"",city_id:100,city:[],emission_std:"",car_id:1}}},methods:{save:function(){var e=this;return l()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.post("/admin/product/productsave",{id:e.form.id,business_id:e.form.business_id,car_id:e.form.car.length?e.form.car[e.form.car.length-1]:"",city_id:e.form.city.length?e.form.city[e.form.city.length-1]:"",emission_std:e.form.emission_std,itype:e.form.itype,km:e.form.km+"",price:e.form.price,price_new:e.form.price_new,reg_date:e.form.reg_date,tax:e.form.tax,user_id:e.form.user_id});case 3:e.success("保存成功"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}},t,e,[[0,6]])}))()},getInfo:function(){var e=this;return l()(n.a.mark(function t(){var r,a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.post("/admin/product/product",{id:e.$route.query.id});case 3:r=t.sent,a=r.data,e.form=a.data,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}},t,e,[[0,8]])}))()},getCarModel:function(){var e=this;return l()(n.a.mark(function t(){var r,a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.post("/admin/car/cars",{p:1});case 3:r=t.sent,a=r.data,console.log(a),e.carModelData=a.data,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}},t,e,[[0,9]])}))()},getCitys:function(){var e=this;return l()(n.a.mark(function t(){var r,a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.post("/mobile/city/cities",{p:1});case 3:r=t.sent,a=r.data,e.cityData=a.data,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}},t,e,[[0,8]])}))()}},mounted:function(){this.getCarModel(),this.getCitys(),this.getInfo()}},w={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"comp-car-base-info"},[r("el-form",{staticClass:"form",attrs:{"label-width":"100px","label-position":"left"}},[r("el-form-item",{attrs:{label:"车商"}},[r("el-input",{attrs:{disabled:"disabled"},model:{value:e.form.business,callback:function(t){e.$set(e.form,"business",t)},expression:"form.business"}})],1),r("el-form-item",{attrs:{label:"销售员"}},[r("el-input",{attrs:{disabled:"disabled"},model:{value:e.form.user,callback:function(t){e.$set(e.form,"user",t)},expression:"form.user"}})],1),r("el-form-item",{attrs:{label:"I品车"}},[r("el-input",{attrs:{disabled:"disabled"},model:{value:e.form.itype,callback:function(t){e.$set(e.form,"itype",t)},expression:"form.itype"}})],1),r("el-form-item",{attrs:{label:"标题"}},[r("el-input",{model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),r("el-form-item",{attrs:{label:"车型"}},[r("el-cascader",{attrs:{options:e.carModelData},model:{value:e.form.car,callback:function(t){e.$set(e.form,"car",t)},expression:"form.car"}})],1),r("el-form-item",{attrs:{label:"卖价"}},[r("el-input-number",{attrs:{"controls-position":"right",min:0,precision:2},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}}),r("span",{staticClass:"unit"},[e._v("万元")])],1),r("el-form-item",{attrs:{label:"新车价"}},[r("el-input-number",{attrs:{"controls-position":"right",min:0,precision:2},model:{value:e.form.price_new,callback:function(t){e.$set(e.form,"price_new",t)},expression:"form.price_new"}}),r("span",{staticClass:"unit"},[e._v("万元")])],1),r("el-form-item",{attrs:{label:"新车购置税"}},[r("el-input-number",{attrs:{"controls-position":"right",min:0,precision:2},model:{value:e.form.tax,callback:function(t){e.$set(e.form,"tax",t)},expression:"form.tax"}}),r("span",{staticClass:"unit"},[e._v("万元")])],1),r("el-form-item",{attrs:{label:"上牌时间"}},[r("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd"},model:{value:e.form.reg_date,callback:function(t){e.$set(e.form,"reg_date",t)},expression:"form.reg_date"}})],1),r("el-form-item",{attrs:{label:"行驶里程"}},[r("el-input-number",{attrs:{"controls-position":"right",min:0,precision:2},model:{value:e.form.km,callback:function(t){e.$set(e.form,"km",t)},expression:"form.km"}}),r("span",{staticClass:"unit"},[e._v("万公里")])],1),r("el-form-item",{attrs:{label:"归属地"}},[r("el-cascader",{attrs:{options:e.cityData},model:{value:e.form.city,callback:function(t){e.$set(e.form,"city",t)},expression:"form.city"}})],1),r("el-form-item",{attrs:{label:"排放标准"}},[r("el-select",{model:{value:e.form.emission_std,callback:function(t){e.$set(e.form,"emission_std",t)},expression:"form.emission_std"}},e._l(e.gas,function(e,t){return r("el-option",{key:t,attrs:{label:e,value:e}})}))],1)],1),r("div",{staticClass:"submit"},[r("my-button",{attrs:{type:"primary",click:e.save}},[e._v("保存")])],1)],1)},staticRenderFns:[]};var C={data:function(){return{test:"",model:f,color:p,gearBox:d,hubMaterial:b,form:{model:"",capacity:500,chairs:4,color:"红色",doors:4,gear_box:"变速箱",gear_model:"变速箱型号X-10",hight:300,length:100,pid:1,weight:600,wheel:"不锈钢",wheelbase:400,width:200}}},methods:{getInfo:function(){var e=this;return l()(n.a.mark(function t(){var r,a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.post("/admin/product/base",{id:e.$route.query.id});case 3:r=t.sent,a=r.data,console.log(a),e.form=a.data,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}},t,e,[[0,9]])}))()},save:function(){var e=this;return l()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.post("/admin/product/basesave",o()({id:e.$route.query.id},e.form));case 3:e.success("保存成功"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}},t,e,[[0,6]])}))()}},mounted:function(){this.getInfo()}},M={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"comp-car-base-params"},[r("div",{staticClass:"forms"},[r("el-form",{attrs:{"label-width":"100px","label-position":"left"}},[r("el-form-item",{attrs:{label:"车型"}},[r("el-select",{model:{value:e.form.model,callback:function(t){e.$set(e.form,"model",t)},expression:"form.model"}},e._l(e.model,function(e,t){return r("el-option",{key:t,attrs:{label:e,value:e}})}))],1),r("el-form-item",{attrs:{label:"车辆颜色"}},[r("el-select",{model:{value:e.form.color,callback:function(t){e.$set(e.form,"color",t)},expression:"form.color"}},e._l(e.color,function(e,t){return r("el-option",{key:t,attrs:{label:e,value:e}})}))],1),r("el-form-item",{attrs:{label:"变速箱"}},[r("el-select",{model:{value:e.form.gear_box,callback:function(t){e.$set(e.form,"gear_box",t)},expression:"form.gear_box"}},e._l(e.gearBox,function(e,t){return r("el-option",{key:t,attrs:{label:e,value:e}})}))],1),r("el-form-item",{attrs:{label:"变速箱型号"}},[r("el-input",{model:{value:e.form.gear_model,callback:function(t){e.$set(e.form,"gear_model",t)},expression:"form.gear_model"}})],1),r("el-form-item",{attrs:{label:"车门数"}},[r("el-input-number",{attrs:{"controls-position":"right",min:0,precision:0},model:{value:e.form.doors,callback:function(t){e.$set(e.form,"doors",t)},expression:"form.doors"}})],1),r("el-form-item",{attrs:{label:"座位数"}},[r("el-input-number",{attrs:{"controls-position":"right",min:0,precision:0},model:{value:e.form.chairs,callback:function(t){e.$set(e.form,"chairs",t)},expression:"form.chairs"}})],1),r("el-form-item",{attrs:{label:"轮毂材料"}},[r("el-select",{model:{value:e.form.wheel,callback:function(t){e.$set(e.form,"wheel",t)},expression:"form.wheel"}},e._l(e.hubMaterial,function(e,t){return r("el-option",{key:t,attrs:{label:e,value:e}})}))],1),r("el-form-item",{attrs:{label:""}},[r("my-button",{attrs:{type:"primary",click:e.save}},[e._v("保存")])],1)],1),r("el-form",{attrs:{"label-width":"100px","label-position":"left"}},[r("el-form-item",{attrs:{label:"长(mm)"}},[r("el-input-number",{attrs:{"controls-position":"right",min:0,precision:0},model:{value:e.form.length,callback:function(t){e.$set(e.form,"length",t)},expression:"form.length"}})],1),r("el-form-item",{attrs:{label:"宽(mm)"}},[r("el-input-number",{attrs:{"controls-position":"right",min:0,precision:0},model:{value:e.form.width,callback:function(t){e.$set(e.form,"width",t)},expression:"form.width"}})],1),r("el-form-item",{attrs:{label:"高(mm)"}},[r("el-input-number",{attrs:{"controls-position":"right",min:0,precision:0},model:{value:e.form.height,callback:function(t){e.$set(e.form,"height",t)},expression:"form.height"}})],1),r("el-form-item",{attrs:{label:"轴距(mm)"}},[r("el-input-number",{attrs:{"controls-position":"right",min:0,precision:0},model:{value:e.form.wheelbase,callback:function(t){e.$set(e.form,"wheelbase",t)},expression:"form.wheelbase"}})],1),r("el-form-item",{attrs:{label:"行李箱容积(L)"}},[r("el-input-number",{attrs:{"controls-position":"right",min:0,precision:0},model:{value:e.form.capacity,callback:function(t){e.$set(e.form,"capacity",t)},expression:"form.capacity"}})],1),r("el-form-item",{attrs:{label:"整备质量(kg)"}},[r("el-input-number",{attrs:{"controls-position":"right",min:0,precision:0},model:{value:e.form.weight,callback:function(t){e.$set(e.form,"weight",t)},expression:"form.weight"}})],1)],1)],1)])},staticRenderFns:[]};var I={data:function(){return{inlet:v,fuel:h,fuelLabel:y,form:{air_in:"进气方式",displacement:400,nm:200,oil:"200",oil_capacity:200,oil_no:"#95",oil_wear:200,pid:1,power:0,speed:180,speed_up:100}}},methods:{getInfo:function(){var e=this;return l()(n.a.mark(function t(){var r,a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.post("/admin/product/engine",{id:e.$route.query.id});case 3:r=t.sent,a=r.data,console.log(a),e.form=a.data,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}},t,e,[[0,9]])}))()},save:function(){var e=this;return l()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.post("/admin/product/enginesave",o()({id:e.$route.query.id},e.form));case 3:e.success("保存成功"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}},t,e,[[0,6]])}))()}},mounted:function(){this.getInfo()}},q={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"comp-car-engine-params"},[r("div",{staticClass:"forms"},[r("el-form",{attrs:{"label-width":"120px","label-position":"left"}},[r("el-form-item",{attrs:{label:"百公里油耗(L)"}},[r("el-input-number",{attrs:{"controls-position":"right",min:0,precision:0},model:{value:e.form.oil_wear,callback:function(t){e.$set(e.form,"oil_wear",t)},expression:"form.oil_wear"}})],1),r("el-form-item",{attrs:{label:"排量(L)"}},[r("el-input-number",{attrs:{"controls-position":"right",min:0,precision:0},model:{value:e.form.displacement,callback:function(t){e.$set(e.form,"displacement",t)},expression:"form.displacement"}})],1),r("el-form-item",{attrs:{label:"邮箱容积(L)"}},[r("el-input-number",{attrs:{"controls-position":"right",min:0,precision:0},model:{value:e.form.oil_capacity,callback:function(t){e.$set(e.form,"oil_capacity",t)},expression:"form.oil_capacity"}})],1),r("el-form-item",{attrs:{label:"进气形式"}},[r("el-select",{model:{value:e.form.air_in,callback:function(t){e.$set(e.form,"air_in",t)},expression:"form.air_in"}},e._l(e.inlet,function(e,t){return r("el-option",{key:t,attrs:{label:e,value:e}})}))],1),r("el-form-item",{attrs:{label:"最大扭矩(N.m)"}},[r("el-input-number",{attrs:{"controls-position":"right",min:0,precision:0},model:{value:e.form.nm,callback:function(t){e.$set(e.form,"nm",t)},expression:"form.nm"}})],1),r("el-form-item",{attrs:{label:""}},[r("my-button",{attrs:{type:"primary",click:e.save}},[e._v("保存")])],1)],1),r("el-form",{attrs:{"label-width":"120px","label-position":"left"}},[r("el-form-item",{attrs:{label:"燃油"}},[r("el-select",{model:{value:e.form.oil,callback:function(t){e.$set(e.form,"oil",t)},expression:"form.oil"}},e._l(e.fuel,function(e,t){return r("el-option",{key:t,attrs:{label:e,value:e}})}))],1),r("el-form-item",{attrs:{label:"燃油标号"}},[r("el-select",{model:{value:e.form.oil_no,callback:function(t){e.$set(e.form,"oil_no",t)},expression:"form.oil_no"}},e._l(e.fuelLabel,function(e,t){return r("el-option",{key:t,attrs:{label:e,value:e}})}))],1),r("el-form-item",{attrs:{label:"功率(kw)"}},[r("el-input-number",{attrs:{"controls-position":"right",min:0,precision:0},model:{value:e.form.power,callback:function(t){e.$set(e.form,"power",t)},expression:"form.power"}})],1),r("el-form-item",{attrs:{label:"最高车速(km/h)"}},[r("el-input-number",{attrs:{"controls-position":"right",min:0,precision:0},model:{value:e.form.speed,callback:function(t){e.$set(e.form,"speed",t)},expression:"form.speed"}})],1),r("el-form-item",{attrs:{label:"官方0-100加速(s)"}},[r("el-input-number",{attrs:{"controls-position":"right",min:0,precision:0},model:{value:e.form.speed_up,callback:function(t){e.$set(e.form,"speed_up",t)},expression:"form.speed_up"}})],1)],1)],1)])},staticRenderFns:[]};var j={data:function(){return{test:"",drivingModel:g,steeringSystem:x,suspensionSystem:k,form:{dirve_type:"",turn_sys:"",head_sys:"",back_sys:""}}},methods:{getInfo:function(){var e=this;return l()(n.a.mark(function t(){var r,a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.post("/admin/product/under",{id:e.$route.query.id});case 3:r=t.sent,a=r.data,console.log(a),e.form=a.data,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}},t,e,[[0,9]])}))()},save:function(){var e=this;return l()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.post("/admin/product/undersave",o()({id:e.$route.query.id},e.form));case 3:e.success("保存成功"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}},t,e,[[0,6]])}))()}},mounted:function(){this.getInfo()}},R={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"comp-car-desc"},[r("el-form",{attrs:{"label-width":"120px","label-position":"left"}},[r("el-form-item",{attrs:{label:"驱动方式"}},[r("el-select",{model:{value:e.form.dirve_type,callback:function(t){e.$set(e.form,"dirve_type",t)},expression:"form.dirve_type"}},e._l(e.drivingModel,function(e,t){return r("el-option",{key:t,attrs:{label:e,value:e}})}))],1),r("el-form-item",{attrs:{label:"转向系统"}},[r("el-select",{model:{value:e.form.turn_sys,callback:function(t){e.$set(e.form,"turn_sys",t)},expression:"form.turn_sys"}},e._l(e.steeringSystem,function(e,t){return r("el-option",{key:t,attrs:{label:e,value:e}})}))],1),r("el-form-item",{attrs:{label:"前悬挂"}},[r("el-select",{model:{value:e.form.head_sys,callback:function(t){e.$set(e.form,"head_sys",t)},expression:"form.head_sys"}},e._l(e.suspensionSystem,function(e,t){return r("el-option",{key:t,attrs:{label:e,value:e}})}))],1),r("el-form-item",{attrs:{label:"后悬挂"}},[r("el-select",{model:{value:e.form.back_sys,callback:function(t){e.$set(e.form,"back_sys",t)},expression:"form.back_sys"}},e._l(e.suspensionSystem,function(e,t){return r("el-option",{key:t,attrs:{label:e,value:e}})}))],1),r("el-form-item",{attrs:{label:""}},[r("my-button",{attrs:{type:"primary",click:e.save}},[e._v("保存")])],1)],1)],1)},staticRenderFns:[]},E={data:function(){return{test:"",brake:_,form:{head_drive:"",back_drive:"",head_std:"",back_std:""}}},methods:{getInfo:function(){var e=this;return l()(n.a.mark(function t(){var r,a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.post("/admin/product/drive",{id:e.$route.query.id});case 3:r=t.sent,a=r.data,console.log(a),e.form=a.data,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}},t,e,[[0,9]])}))()},save:function(){var e=this;return l()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.post("/admin/product/drivesave",o()({id:e.$route.query.id},e.form));case 3:e.success("保存成功"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}},t,e,[[0,6]])}))()}},mounted:function(){this.getInfo()}},F={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"comp-car-brake-params"},[r("el-form",{attrs:{"label-width":"120px","label-position":"left"}},[r("el-form-item",{attrs:{label:"前制动"}},[r("el-select",{model:{value:e.form.head_drive,callback:function(t){e.$set(e.form,"head_drive",t)},expression:"form.head_drive"}},e._l(e.brake,function(e,t){return r("el-option",{key:t,attrs:{label:e,value:e}})}))],1),r("el-form-item",{attrs:{label:"后制动"}},[r("el-select",{model:{value:e.form.back_drive,callback:function(t){e.$set(e.form,"back_drive",t)},expression:"form.back_drive"}},e._l(e.brake,function(e,t){return r("el-option",{key:t,attrs:{label:e,value:e}})}))],1),r("el-form-item",{staticClass:"tyre",attrs:{label:"前轮胎规格(mm)"}},[r("el-input",{directives:[{name:"mdeol",rawName:"v-mdeol",value:e.form.head_std,expression:"form.head_std"}],attrs:{placeholder:"195/65R15"}})],1),r("el-form-item",{staticClass:"tyre",attrs:{label:"后轮胎规格(mm)"}},[r("el-input",{directives:[{name:"mdeol",rawName:"v-mdeol",value:e.form.back_std,expression:"form.back_std"}],attrs:{placeholder:"195/65R15"}})],1),r("el-form-item",{attrs:{label:""}},[r("my-button",{attrs:{type:"primary"}},[e._v("保存")])],1)],1)],1)},staticRenderFns:[]};var D={data:function(){return{form:{nian_date:"",jiao_date:"",shang_date:"",zhi_date:"",shoufu:"",yuegong:""}}},methods:{getInfo:function(){var e=this;return l()(n.a.mark(function t(){var r,a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.post("/admin/product/tax",{id:e.$route.query.id});case 3:r=t.sent,a=r.data,console.log(a),e.form=a.data,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}},t,e,[[0,9]])}))()},save:function(){var e=this;return l()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.post("/admin/product/taxsave",o()({id:e.$route.query.id},e.form));case 3:e.success("保存成功"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}},t,e,[[0,6]])}))()}},mounted:function(){this.getInfo()}},z={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"comp-car-other-params"},[r("el-form",{attrs:{"label-width":"120px","label-position":"left"}},[r("el-form-item",{staticClass:"tyre",attrs:{label:"首付"}},[r("el-input-number",{attrs:{"controls-position":"right",min:0,precision:2},model:{value:e.form.shoufu,callback:function(t){e.$set(e.form,"shoufu",t)},expression:"form.shoufu"}}),r("span",{staticClass:"unit"},[e._v("元")])],1),r("el-form-item",{staticClass:"tyre",attrs:{label:"月供"}},[r("el-input-number",{attrs:{"controls-position":"right",min:0,precision:2},model:{value:e.form.yuegong,callback:function(t){e.$set(e.form,"yuegong",t)},expression:"form.yuegong"}}),r("span",{staticClass:"unit"},[e._v("元")])],1),r("el-form-item",{attrs:{label:"年检到期"}},[r("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd"},model:{value:e.form.nian_date,callback:function(t){e.$set(e.form,"nian_date",t)},expression:"form.nian_date"}})],1),r("el-form-item",{attrs:{label:"交强险到期"}},[r("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd"},model:{value:e.form.jiao_date,callback:function(t){e.$set(e.form,"jiao_date",t)},expression:"form.jiao_date"}})],1),r("el-form-item",{staticClass:"tyre",attrs:{label:"商业险到期"}},[r("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd"},model:{value:e.form.shang_date,callback:function(t){e.$set(e.form,"shang_date",t)},expression:"form.shang_date"}})],1),r("el-form-item",{staticClass:"tyre",attrs:{label:"新车质保到期"}},[r("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd"},model:{value:e.form.zhi_date,callback:function(t){e.$set(e.form,"zhi_date",t)},expression:"form.zhi_date"}})],1),r("el-form-item",{attrs:{label:""}},[r("my-button",{attrs:{type:"primary",click:e.save}},[e._v("保存")])],1)],1)],1)},staticRenderFns:[]};var S={data:function(){return{list:[]}},computed:{uploadData:function(){return{id:this.$route.query.id}}},methods:{onUploadSuccess:function(e,t){"succ"===e.type?(this.$emit("get-size",{width:e.msg[0].original.width,height:e.msg[0].original.height}),this.$emit("input",e.msg[0].original.file)):this.error(e.msg)},beforeAvatarUpload:function(e){},getInfo:function(){var e=this;return l()(n.a.mark(function t(){var r,a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.post("/admin/product/img",{id:e.$route.query.id});case 3:r=t.sent,a=r.data,e.list=a.data.list,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}},t,e,[[0,8]])}))()}},mounted:function(){this.getInfo()}},U={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"comp-images"},[this._l(this.list,function(e){return t("div",{staticClass:"item bg-image"},[t("img",{attrs:{src:e.img}}),t("el-button",{staticClass:"close",attrs:{type:"text",icon:"el-icon-close",size:"mini"}})],1)}),t("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/admin/site/productimg",name:"images[]",accept:"image/*",data:this.uploadData,multiple:!1,"show-file-list":!1,"on-success":this.onUploadSuccess,"before-upload":this.beforeAvatarUpload}},[t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],2)},staticRenderFns:[]};var L={data:function(){return{active:"7",carId:""}},components:{"my-car-desc":r("7jd7")(c,m,!1,null,null,null).exports,"my-car-base-info":r("7jd7")($,w,!1,function(e){r("OsJf")},"data-v-e5b2e53e",null).exports,"my-car-base-params":r("7jd7")(C,M,!1,function(e){r("yTzr")},"data-v-066fae99",null).exports,"my-car-engine-params":r("7jd7")(I,q,!1,function(e){r("oR6e")},"data-v-5b145dc9",null).exports,"my-car-chassis-params":r("7jd7")(j,R,!1,null,null,null).exports,"my-car-brake-params":r("7jd7")(E,F,!1,function(e){r("2wwb")},"data-v-3cf60a34",null).exports,"my-car-other-params":r("7jd7")(D,z,!1,function(e){r("UnOe")},"data-v-5c92ccee",null).exports,"my-images":r("7jd7")(S,U,!1,function(e){r("GgZ/")},"data-v-41b1c738",null).exports},methods:{startEdit:function(){}},computed:{type:function(){return-1!==this.$route.path.indexOf("add")?"add":"edit"}}},O={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-second-hand-car-editor"},[r("my-page-title",{attrs:{title:"新增二手车"}}),r("el-tabs",{model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[r("el-tab-pane",{attrs:{label:"基本信息",name:"0"}},[r("my-car-base-info",{on:{"start-edit":e.startEdit}})],1),"edit"===e.type?r("el-tab-pane",{attrs:{label:"车辆描述",name:"1"}},[r("my-car-desc")],1):e._e(),"edit"===e.type?r("el-tab-pane",{attrs:{label:"基本参数",name:"2"}},[r("my-car-base-params")],1):e._e(),"edit"===e.type?r("el-tab-pane",{attrs:{label:"发动机参数",name:"3"}},[r("my-car-engine-params")],1):e._e(),"edit"===e.type?r("el-tab-pane",{attrs:{label:"底盘参数",name:"4"}},[r("my-car-chassis-params")],1):e._e(),"edit"===e.type?r("el-tab-pane",{attrs:{label:"车轮制动",name:"5"}}):e._e(),"edit"===e.type?r("el-tab-pane",{attrs:{label:"手续信息",name:"6"}},[r("my-car-other-params")],1):e._e(),"edit"===e.type?r("el-tab-pane",{attrs:{label:"车辆图片",name:"7"}},[r("my-images")],1):e._e()],1)],1)},staticRenderFns:[]},J=r("7jd7")(L,O,!1,null,null,null);t.default=J.exports},oR6e:function(e,t){},yTzr:function(e,t){}});
//# sourceMappingURL=1.b53747bd381467121a48.js.map