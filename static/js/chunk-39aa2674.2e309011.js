(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39aa2674"],{"1b62":function(e,t,r){"use strict";var o=r("2f4d");t["a"]={data:function(){return{page:{currentPage:1,size:10,total:0,pageSizes:[10,15,20,25,30,35,40]},loadingOption:{background:"rgba(255,255,255,.9)",text:"loading.....",spinner:"el-icon-loading"},uploadUrl:"https://leju.bufan.cloud/lejuAdmin/material/uploadFileOss"}},computed:{headers:function(){var e=Object(o["a"])(),t={token:e};return t}},methods:{centre:function(){return"text-align:center"}}}},"4c2f":function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a}));var o=r("b775");function n(){return Object(o["a"])({url:"/admin/sysAuth/permission/findAllPermissions",method:"get"})}function a(e){return Object(o["a"])({url:"/admin/sysAuth/permission/saveInitMenus",method:"post"})}},a342:function(e,t,r){"use strict";r("b20d")},b20d:function(e,t,r){},b775:function(e,t,r){"use strict";r("3900"),r("195b");var o=r("f753"),n=r.n(o),a=r("b705"),i=r("2f4d"),s=r("a18c"),l=n.a.create({baseURL:"https://leju.bufan.cloud",timeout:5e3});l.interceptors.request.use((function(e){return e.headers["token"]=Object(i["a"])(),e}),(function(e){return console.log(e),Promise.reject(e)})),l.interceptors.response.use((function(e){var t=e.data;return 2e4!==t.code?(Object(a["Message"])({message:t.message||"Error",type:"error",duration:3e3}),20002===t.code&&(Object(a["Message"])({message:"token过期,请重新登录!",type:"error",duration:3e3}),localStorage.clear(),s["a"].push("/")),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){return console.log("err"+e),Object(a["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=l},d18c:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"account"},[r("div",{staticClass:"margin_30 main"},[r("el-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.addUser}},[e._v("新 增")])],1),r("el-table",{staticStyle:{width:"100%"},attrs:{"header-cell-style":e.centre,"cell-style":e.centre,data:e.list,border:""}},[r("el-table-column",{attrs:{fixed:"",type:"index",label:"#",width:"50"}}),r("el-table-column",{attrs:{fixed:"",prop:"roleName",label:"角色名称",width:"180"}}),r("el-table-column",{attrs:{prop:"roleCode",label:"角色编码",width:"180"}}),r("el-table-column",{attrs:{prop:"remark",label:"备注",width:"180"}}),r("el-table-column",{attrs:{prop:"createTime",label:"添加时间",width:"180"}}),r("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(r){return e.editUser(t.row.id)}}},[e._v("编 辑")]),r("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(r){return e.delUser(t.row.id)}}},[e._v("删 除")])]}}])})],1),r("el-pagination",{staticStyle:{float:"right"},attrs:{background:"","current-page":e.page.currentPage,"page-sizes":e.page.sizes,"page-size":e.page.size,layout:"total, sizes, prev, pager, next, jumper",total:e.page.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1),r("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"roleForm",staticClass:"demo-form-inline",attrs:{model:e.roleForm,rules:e.rules,size:"normal",inline:!0}},[r("el-form-item",{attrs:{prop:"roleName",label:"角色名称"}},[r("el-input",{attrs:{placeholder:"角色名称"},model:{value:e.roleForm.roleName,callback:function(t){e.$set(e.roleForm,"roleName",t)},expression:"roleForm.roleName"}})],1),r("el-form-item",{attrs:{prop:"roleCode",label:"角色编码"}},[r("el-input",{attrs:{placeholder:"角色编码"},model:{value:e.roleForm.roleCode,callback:function(t){e.$set(e.roleForm,"roleCode",t)},expression:"roleForm.roleCode"}})],1),r("el-form-item",{attrs:{prop:"remark",label:"角色描述"}},[r("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"角色描述"},model:{value:e.roleForm.remark,callback:function(t){e.$set(e.roleForm,"remark",t)},expression:"roleForm.remark"}})],1),r("el-form-item",{attrs:{label:"选择菜单"}},[r("el-tree",{ref:"tree",attrs:{"node-key":"id",data:e.treeData,"show-checkbox":"",props:e.defaultProps}})],1),r("div",{staticStyle:{display:"flex","justify-content":"center"}},[r("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.sureSubmit}},[e._v("确 定")])],1)],1)],1)],1)},n=[],a=r("1b62"),i=r("f345"),s=r("4c2f"),l={mixins:[a["a"]],data:function(){return{list:[],roleList:[],treeData:[],roleForm:{},dialogVisible:!1,dialogTitle:"",defaultProps:{label:"title",children:"children"},rules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"}]}}},components:{},methods:{treeCheck:function(e){console.log(e)},handleSizeChange:function(e){this.page.size=e},handleCurrentChange:function(e){this.page.currentPage=e},sureSubmit:function(){var e=this;this.$refs.roleForm.validate((function(t){if(!t)return console.log("error submit!!"),e.$message.error("请填写完整!"),!1;e.roleForm.id?Object(i["f"])(e.roleForm).then((function(t){console.log(t),t.success&&(e.$message.success("修改成功!"),e.dialogVisible=!1,e.init())})):Object(i["e"])(e.roleForm).then((function(t){console.log(t),t.success&&(e.$message.success("添加用户成功!"),e.dialogVisible=!1,e.init())}))}))},handleAvatarSuccess:function(e){this.roleForm.salt=e.data.fileUrl},addUser:function(){this.dialogVisible=!0,this.dialogTitle="添加角色",this.roleForm={createTime:"",id:"",isDeleted:!1,modifyTime:"",permissionIds:[],remark:"",roleCode:"",roleName:""}},editUser:function(e){var t=this;this.dialogTitle="修改角色",Object(i["b"])(e).then((function(e){console.log(e),e.success&&(t.dialogVisible=!0,t.roleForm=e.data.role)}))},delUser:function(e){var t=this;this.$confirm("删除用户不可恢复,继续吗?","警告!",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["d"])(e).then((function(e){console.log(e),e.success&&(t.$message.success("已删除~"),t.init())}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},centre:function(){return"text-align:center"},init:function(){var e=this;Object(i["c"])(this.page.currentPage,this.page.size).then((function(t){console.log("分页查询角色====",t),e.list=t.data.rows,e.page.total=t.data.total})),Object(i["a"])().then((function(t){console.log("所有角色====",t),e.roleList=t.data.items})),Object(s["a"])().then((function(t){console.log("所有资源菜单=====",t),e.treeData=t.data.menus}))}},created:function(){this.init()},mounted:function(){}},c=l,u=(r("a342"),r("cba8")),d=Object(u["a"])(c,o,n,!1,null,"1c882d96",null);t["default"]=d.exports},f345:function(e,t,r){"use strict";r.d(t,"c",(function(){return a})),r.d(t,"b",(function(){return i})),r.d(t,"d",(function(){return s})),r.d(t,"e",(function(){return l})),r.d(t,"f",(function(){return c})),r.d(t,"a",(function(){return n}));r("1ad7");var o=r("b775");function n(){return Object(o["a"])({url:"/admin/sysAuth/role/findAllRoles",method:"get"})}function a(e,t){return Object(o["a"])({url:"/admin/sysAuth/role/findRolesByPage/".concat(e,"/").concat(t),method:"get"})}function i(e){return Object(o["a"])({url:"/admin/sysAuth/role/findRolePermissions/".concat(e),method:"get"})}function s(e){return Object(o["a"])({url:"/admin/sysAuth/role/removeRole/".concat(e),method:"delete"})}function l(e){return Object(o["a"])({url:"/admin/sysAuth/role/saveRolePermissions",method:"post",data:e})}function c(e){return Object(o["a"])({url:"/admin/sysAuth/role/updateRolePermissions",method:"put",data:e})}}}]);