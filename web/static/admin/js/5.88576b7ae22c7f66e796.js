webpackJsonp([5],{Ayk8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("5/aF"),s=n.n(r),a=n("Z34F"),i=n.n(a),o=n("gC1q"),c=n("T7Ta"),l=n.n(c),u={mixins:[n("Quz9").a],data:function(){return{id:"",letter:"",brand:"",model:"",star:0,keywords:[],inputValue:"",inputVisible:!1}},computed:{title:function(){return""===this.id?"新增车型":"修改车型"}},methods:{clear:function(){l()(this,{id:"",letter:"",brand:"",model:"",star:0,keywords:[],inputVisible:!1})},setLetter:function(t){this.letter=t},setBrand:function(t){this.brand=t},setEditData:function(t){t.keywords=t.keywords||[],l()(this,t)},handleClose:function(t){this.keywords.splice(this.keywords.indexOf(t),1)},showInput:function(){var t=this;this.inputVisible=!0,this.$nextTick(function(e){t.$refs.saveTagInput.$refs.input.focus()})},handleInputConfirm:function(){var t=this.inputValue;t&&this.keywords.push(t),this.inputVisible=!1,this.inputValue=""},saveNewType:function(){var t=this;return i()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.post("/admin/car/add",{letter:t.letter,brand:t.brand,model:t.model,star:t.star,keywords:t.keywords});case 3:t.success("保存成功"),t.close(),t.$emit("save-success"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,t,[[0,8]])}))()},saveEditType:function(){var t=this;return i()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.post("/admin/car/edit",{id:t.id,letter:t.letter,brand:t.brand,model:t.model,star:t.star,keywords:t.keywords.join("|")});case 3:t.success("保存成功"),t.close(),t.$emit("save-success"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,t,[[0,8]])}))()},save:function(){return""===this.id?this.saveNewType():this.saveEditType()}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{title:t.title,visible:t.visible,width:"600px"},on:{"update:visible":function(e){t.visible=e}}},[n("div",{staticClass:"comp-car-type-editor"},[n("el-form",{attrs:{"label-width":"80px","label-position":"left"}},[n("el-form-item",{attrs:{label:"品牌"}},[t._v(t._s(t.letter))]),n("el-form-item",{attrs:{label:"品牌"}},[t._v(t._s(t.brand))]),n("el-form-item",{attrs:{label:"车型名称"}},[n("el-input",{model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],1),n("el-form-item",{attrs:{label:"评分"}},[n("el-input-number",{attrs:{max:5,min:0,step:.01,precision:2},model:{value:t.star,callback:function(e){t.star=e},expression:"star"}})],1),n("el-form-item",{attrs:{label:"关键字"}},[t._l(t.keywords,function(e,r){return n("el-tag",{key:r,staticClass:"tag",attrs:{closable:"closable"},on:{close:function(n){t.handleClose(e)}}},[t._v(t._s(e))])}),t.inputVisible?n("el-input",{ref:"saveTagInput",staticClass:"tag input input-new-tag",attrs:{size:"small"},on:{blur:t.handleInputConfirm},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleInputConfirm(e):null}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}):n("el-button",{staticClass:"tag input button-new-tag",attrs:{size:"small"},on:{click:t.showInput}},[t._v("新增关键字")])],2),n("el-form-item",{attrs:{label:""}},[n("my-button",{attrs:{type:"primary",click:t.save}},[t._v("保存")])],1)],1)],1)])},staticRenderFns:[]};var p=n("7jd7")(u,d,!1,function(t){n("GvNW")},"data-v-402da023",null).exports,f={components:{"my-car-filter":o.a,"my-car-type-editor":p},data:function(){return{choosedLetter:"",letterList:[],choosedBrand:"",brandList:[],typeList:[]}},methods:{getLetterList:function(){var t=this;return i()(s.a.mark(function e(){var n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.post("/admin/car/letterlist",{p:1});case 3:n=e.sent,r=n.data,t.letterList=r.data.list,t.chooseLetter("A"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}},e,t,[[0,9]])}))()},chooseLetter:function(t){this.choosedLetter=t,this.getBrandList()},getBrandList:function(){var t=this;return i()(s.a.mark(function e(){var n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.post("/admin/car/brandlist",{letter:t.choosedLetter,p:1});case 3:n=e.sent,r=n.data,t.brandList=r.data.list,t.chooseBrand(r.data.list[0].brand),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}},e,t,[[0,9]])}))()},chooseBrand:function(t){this.choosedBrand=t,this.getTypeList()},getTypeList:function(){var t=this;return i()(s.a.mark(function e(){var n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.post("/admin/car/modellist",{brand:t.choosedBrand});case 3:n=e.sent,r=n.data,t.typeList=r.data.list,console.log(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}},e,t,[[0,9]])}))()},addType:function(){var t=this;return i()(s.a.mark(function e(){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{(n=t.$refs["my-car-type-editor"]).setLetter(t.choosedLetter),n.setBrand(t.choosedBrand),n.open()}catch(t){console.log(t)}case 1:case"end":return e.stop()}},e,t)}))()},editType:function(t){var e=this;return i()(s.a.mark(function n(){var r;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:try{(r=e.$refs["my-car-type-editor"]).setEditData(e._.cloneDeep(t)),r.open()}catch(t){console.log(t)}case 1:case"end":return n.stop()}},n,e)}))()},delType:function(t){var e=this;return i()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$confirm("确认删除该车型吗？");case 3:return n.next=5,e.$http.post("/admin/car/delete",{id:t.id});case 5:e.success("删除成功"),e.getTypeList(),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}},n,e,[[0,9]])}))()}},created:function(){this.getLetterList()}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-car-types"},[n("my-page-title",{attrs:{title:"车型管理",btnVisible:!1}}),n("div",{staticClass:"car-filter"},[n("div",{staticClass:"item"},[n("label",[t._v("首字母")]),n("div",{staticClass:"right"},t._l(t.letterList,function(e){return n("div",{staticClass:"choose-item",class:{choosed:e==t.choosedLetter},on:{click:function(n){t.chooseLetter(e)}}},[t._v(t._s(e))])}))]),n("div",{staticClass:"item"},[n("label",[t._v("品牌")]),n("div",{staticClass:"right"},t._l(t.brandList,function(e){return n("div",{staticClass:"choose-item",class:{choosed:e.brand==t.choosedBrand},on:{click:function(n){t.chooseBrand(e.brand)}}},[t._v(t._s(e.brand))])}))])]),n("el-button",{staticClass:"mb-20",attrs:{type:"primary"},on:{click:t.addType}},[t._v("新增车型")]),n("div",{staticClass:"types"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.typeList,border:"border"}},[n("el-table-column",{attrs:{align:"center",type:"index"}}),n("el-table-column",{attrs:{align:"center",label:"车型名称",prop:"model"}}),n("el-table-column",{attrs:{align:"center",label:"关键字",prop:"keywords"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.keywords,function(e,r){return n("el-tag",{key:r},[t._v(t._s(e))])})}}])}),n("el-table-column",{attrs:{align:"center",label:"评分",prop:"star"}}),n("el-table-column",{attrs:{align:"center",label:"操作",prop:""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){t.editType(e.row)}}},[t._v("修改")]),n("el-button",{attrs:{type:"text"},on:{click:function(n){t.delType(e.row)}}},[t._v("删除")])]}}])})],1)],1),n("my-car-type-editor",{ref:"my-car-type-editor",on:{"save-success":t.getTypeList}})],1)},staticRenderFns:[]};var v=n("7jd7")(f,h,!1,function(t){n("LcNz")},"data-v-7bf25d37",null);e.default=v.exports},GvNW:function(t,e){},LcNz:function(t,e){}});
//# sourceMappingURL=5.88576b7ae22c7f66e796.js.map