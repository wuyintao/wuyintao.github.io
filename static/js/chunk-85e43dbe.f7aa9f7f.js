(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-85e43dbe"],{2017:function(e,r,s){"use strict";s("b5b3")},5744:function(e,r,s){},"9ed6":function(e,r,s){"use strict";s.r(r);var t=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"login-container"},[s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[e._v("用户登录")])]),s("el-form-item",{attrs:{prop:"username"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),s("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(r){e.$set(e.loginForm,"username",r)},expression:"loginForm.username"}})],1),s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),s("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.handleLogin(r)}},model:{value:e.loginForm.password,callback:function(r){e.$set(e.loginForm,"password",r)},expression:"loginForm.password"}}),s("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[s("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(r){return r.preventDefault(),e.handleLogin(r)}}},[e._v("登录")])],1)],1)},o=[],n=(s("195b"),s("61f7")),a=s("b775");function i(e){return Object(a["a"])({url:"/lejuAdmin/index/login",method:"post",data:e})}var c=s("2f4d"),l={name:"Login",data:function(){var e=function(e,r,s){Object(n["b"])(r)?s():s(new Error("Please enter the correct user name"))},r=function(e,r,s){r.length<6?s(new Error("The password can not be less than 6 digits")):s()};return{loginForm:{username:"admin",password:"123456"},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:r}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(r){if(!r)return console.log("error submit!!"),!1;e.loading=!0,i(e.loginForm).then((function(r){console.log(r),r.success?(Object(c["c"])(r.data.token),Object(c["d"])(r.data.userInfo),e.$router.push("/dashboard")):(console.log(r.success),console.error("登录失败,密码或者账号错误")),e.loading=!1}))}))}}},u=l,d=(s("2017"),s("fc6b"),s("cba8")),p=Object(d["a"])(u,t,o,!1,null,"04720c6c",null);r["default"]=p.exports},b5b3:function(e,r,s){},b775:function(e,r,s){"use strict";s("3900"),s("195b");var t=s("f753"),o=s.n(t),n=s("b705"),a=s("2f4d"),i=s("a18c"),c=o.a.create({baseURL:"https://leju.bufan.cloud",timeout:5e3});c.interceptors.request.use((function(e){return e.headers["token"]=Object(a["a"])(),e}),(function(e){return console.log(e),Promise.reject(e)})),c.interceptors.response.use((function(e){var r=e.data;return 2e4!==r.code?(Object(n["Message"])({message:r.message||"Error",type:"error",duration:3e3}),20002===r.code&&(Object(n["Message"])({message:"token过期,请重新登录!",type:"error",duration:3e3}),localStorage.clear(),i["a"].push("/")),Promise.reject(new Error(r.message||"Error"))):r}),(function(e){return console.log("err"+e),Object(n["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)})),r["a"]=c},fc6b:function(e,r,s){"use strict";s("5744")}}]);