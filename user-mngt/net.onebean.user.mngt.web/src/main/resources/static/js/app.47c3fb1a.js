(function(t){function e(e){for(var r,o,i=e[0],u=e[1],c=e[2],l=0,d=[];l<i.length;l++)o=i[l],n[o]&&d.push(n[o][0]),n[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,i=1;i<a.length;i++){var u=a[i];0!==n[u]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},s=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var p=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("ac6a"),a("456d"),a("cadf"),a("551c"),a("f751"),a("097d");var r,n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout"},[a("Layout",[a("NavBar"),a("Content",{style:{margin:"20px 20px 0",background:"#fff",minHeight:"720px"}},[a("router-view")],1)],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isShowBar?a("Menu",{attrs:{mode:"horizontal",theme:"light","active-name":this.utils.routerUtil.initRouterNavBarActiveStatus(this.$route.path)}},[a("router-link",{attrs:{to:"/uag-userinfo-list",replace:""}},[a("MenuItem",{attrs:{name:"/uag-userinfo-list"}},[a("Icon",{attrs:{type:"md-contacts"}}),t._v("\n    用户管理\n    ")],1)],1),a("router-link",{attrs:{to:"/uag-log-list",replace:""}},[a("MenuItem",{attrs:{name:"/uag-log-list"}},[a("Icon",{attrs:{type:"md-list"}}),t._v("\n    操作日志\n    ")],1)],1)],1):t._e()},u=[],c={computed:{isShowBar:function(){return"/err"!=this.$route.path}},data:function(){return{}}},p=c,l=a("2877"),d=Object(l["a"])(p,i,u,!1,null,null,null),f=d.exports,m={components:{NavBar:f},mounted:function(){this.utils.frameUtil.getCurrentLoginUserInfo(this.$store),this.utils.frameUtil.sendAutoParentFrameSizeMsg()}},g=m,h=(a("f036"),Object(l["a"])(g,s,o,!1,null,"58908e96",null)),I=h.exports,b=a("e069"),v=a.n(b),U=(a("dcad"),a("8b5e"),a("96cf"),a("3b8d")),y=a("bc3a"),w=a.n(y),k={},F=w.a.CancelToken;w.a.interceptors.request.use(function(t){return k[t.url]?(k[t.url]("操作取消"),k[t.url]=r):k[t.url]=r,t},function(t){return Promise.reject(t)}),w.a.interceptors.response.use(function(t){return t},function(t){if(t&&t.response)switch(t.response.status){case 400:t.message="错误请求";break;case 401:t.message="未授权，请重新登录";break;case 403:t.message="拒绝访问";break;case 404:t.message="请求错误,未找到该资源";break;case 405:t.message="请求方法未允许";break;case 408:t.message="请求超时";break;case 500:t.message="服务器端出错";break;case 501:t.message="网络未实现";break;case 502:t.message="网络错误";break;case 503:t.message="服务不可用";break;case 504:t.message="网络超时";break;case 505:t.message="http版本不支持该请求";break;default:t.message="连接错误".concat(t.response.status)}else t.message="连接到服务器失败";return b["Message"].error(t.message),Promise.resolve(t.response)}),w.a.defaults.baseURL="",w.a.defaults.headers={"Content-Type":"application/json",Accept:"application/json"},w.a.defaults.timeout=1e4;var P={postAsync:function(){var t=Object(U["a"])(regeneratorRuntime.mark(function t(e,a,r){var n,s,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state.uagCurrentLoginUserInfo,s={"Content-Type":"application/json",Accept:"application/json",uagHeaderUserInfo:encodeURI(JSON.stringify(n))},t.next=4,w()({headers:s,method:"post",url:a,data:r});case 4:return o=t.sent,t.abrupt("return",o.data.datas);case 6:case"end":return t.stop()}},t)}));function e(e,a,r){return t.apply(this,arguments)}return e}(),post:function(t,e,a,n,s){var o=t.state.uagCurrentLoginUserInfo,i={"Content-Type":"application/json",Accept:"application/json",uagHeaderUserInfo:encodeURI(JSON.stringify(o))};w()({headers:i,method:"post",url:e,data:a,cancelToken:new F(function(t){r=t})}).then(function(t){"0"===t.data.errCode?n(t):(b["Message"].error("请求失败 错误码 ".concat(t.data.errCode," 错误信息: ").concat(t.data.errMsg)),"undefined"!=typeof s&&s(t))})}},A=a("7618"),_={copyObj:function(t){var e,a={};for(e in t)a[e]=t[e];return a},uniqueArray:function(t){for(var e=[t[0]],a=1;a<t.length;a++){for(var r=t[a],n=!1,s=0;s<e.length;s++)if(r===e[s]){n=!0;break}n||e.push(r)}return e},removeEmptyValueInArray:function(t){for(var e=0;e<t.length;e++)""!=t[e]&&null!=t[e]&&void 0!=Object(A["a"])(t[e])||(t.splice(e,1),e-=1);return this.uniqueArray(t)}};Array.prototype.indexOf=function(t){for(var e=0;e<this.length;e++)if(this[e]==t)return e;return-1},Array.prototype.remove=function(t){var e=this.indexOf(t);e>-1&&this.splice(e,1)};var L=_,$=(a("28a5"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",[a("i-col",{staticClass:"bread-crumb",attrs:{span:"24"}},[a("Breadcrumb",t._l(t.breadcrumbList,function(e,r){return a("BreadcrumbItem",{key:r,attrs:{to:e.path}},[a("Icon",{attrs:{type:e.icon}}),t._v(" "+t._s(e.name)+"\n        ")],1)}),1)],1)],1),a("Divider"),a("router-view"),a("Form",{ref:"queryParamFrom",staticClass:"query-pram-from",attrs:{model:t.paramData.data}},[a("Row",[a("i-col",{staticClass:"page-col",attrs:{span:"4",offset:"1"}},[a("FormItem",{attrs:{prop:"username"}},[a("i-input",{attrs:{type:"text",placeholder:"用户名"},model:{value:t.paramData.data.username,callback:function(e){t.$set(t.paramData.data,"username",e)},expression:"paramData.data.username"}})],1)],1),a("i-col",{staticClass:"page-col",attrs:{span:"4",offset:"1"}},[a("FormItem",{attrs:{prop:"appCategory"}},[a("Select",{staticStyle:{width:"200px"},attrs:{clearable:""},on:{"on-change":t.selectedAppInfo},model:{value:t.paramData.data.appId,callback:function(e){t.$set(t.paramData.data,"appId",e)},expression:"paramData.data.appId"}},t._l(t.uagUserinfoAppArr,function(e){return a("Option",{key:e.appId,attrs:{value:e.appId}},[t._v(t._s(e.appName))])}),1)],1)],1),a("i-col",{staticClass:"button-group",attrs:{span:"3",offset:"17"}},[a("Button",{attrs:{type:"info"},on:{click:function(e){return t.pushAdd()}}},[t._v("新增")]),a("Button",{attrs:{type:"success"},on:{click:function(e){return t.getdata()}}},[t._v("查询")]),a("Button",{attrs:{type:"warning"},on:{click:function(e){return t.handleReset()}}},[t._v("重置")])],1)],1)],1),a("br"),a("Table",{staticClass:"list-button-group",attrs:{border:"",columns:t.columns,data:t.tableData},scopedSlots:t._u([{key:"action",fn:function(e){var r=e.row;return[a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",size:"small"},on:{click:function(e){return t.goEditor(r)}}},[t._v("编辑")]),a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"warning",size:"small"},on:{click:function(e){return t.resetPassword(r)}}},[t._v("重置密码")]),a("Button",{directives:[{name:"show",rawName:"v-show",value:t.showOnLock(r),expression:"showOnLock(row)"}],staticStyle:{"margin-right":"5px"},attrs:{type:"warning",size:"small"},on:{click:function(e){return t.toggleIsLockStatus(r)}}},[t._v("解锁")]),a("Button",{directives:[{name:"show",rawName:"v-show",value:t.showOnUnLock(r),expression:"showOnUnLock(row)"}],attrs:{type:"error",size:"small"},on:{click:function(e){return t.toggleIsLockStatus(r)}}},[t._v("锁定")])]}}])}),a("Row",[a("i-col",{staticClass:"page-col",attrs:{span:"6",offset:"17"}},[a("Page",{staticClass:"pagination",attrs:{total:t.paramData.data.totalCount,current:t.paramData.data.currentPage,"page-size":t.paramData.data.pageSize,"show-sizer":""},on:{"on-change":t.handlePage,"on-page-size-change":t.handlePageSize}})],1)],1)],1)}),D=[],S={components:{},data:function(){return{tableData:[],routerPath:this.$route.path,uagUserinfoAppArr:[],paramData:{data:{id:"",username:"",password:"",appId:this.$store.state.userInfoListAppId},page:{currentPage:1,pageSize:10},sort:{orderBy:"id",sort:"desc"}},columns:[{title:"UAG-USER-ID",key:"id"},{title:"用户名",key:"username"},{title:"创建时间",key:"createTime"},{title:"修改时间",key:"updateTime"},{title:"操作人",key:"operatorName"},{title:"操作",slot:"action",width:250,align:"center"}]}},computed:{breadcrumbList:function(){return this.utils.routerUtil.initRouterTreeNameArr(this.routerPath)}},mounted:function(){this.getdata()},methods:{handlePage:function(t){this.paramData.page.currentPage=t,this.getdata()},handlePageSize:function(t){this.paramData.page.pageSize=t,this.getdata()},getdata:function(){var t=Object(U["a"])(regeneratorRuntime.mark(function t(){var e,a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.utils.netUtil.postAsync(this.$store,this.API_PTAH.uagUserInfoFindUagUserAppList,{});case 2:e=t.sent,this.uagUserinfoAppArr=e.datas,"0"===this.paramData.data.appId&&(this.paramData.data.appId=this.uagUserinfoAppArr[0].appId),this.utils.netUtil.post(this.$store,this.API_PTAH.uagUserInfoFind,this.paramData,function(t){a.tableData=t.data.datas,a.paramData.page.totalCount=t.data.page.totalCount,a.paramData.page.pageSize=t.data.page.pageSize,a.paramData.page.currentPage=t.data.page.currentPage});case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),toggleIsLockStatus:function(t){var e=this;this.utils.netUtil.post(this.$store,this.API_PTAH.uagUserInfoToggleIsLockStatus,{appId:this.paramData.data.appId,userId:t.id},function(t){t.data.datas&&(e.$Message.success("提交成功!"),e.getdata())})},resetPassword:function(t){var e=this;this.utils.netUtil.post(this.$store,this.API_PTAH.uagUserInfoRestPassword,{appId:this.paramData.data.appId,userId:t.id},function(t){t.data.datas&&(e.$Message.success("密码已重置为123456"),e.getdata())})},goEditor:function(t){this.$router.push({path:"/uag-userinfo-list/uag-userinfo-editor/".concat(this.paramData.data.appId,"/").concat(t.id)})},handleReset:function(){this.$refs.queryParamFrom.resetFields(),this.getdata()},pushAdd:function(){""!==this.paramData.data.appId?this.$router.push({path:"/uag-userinfo-list/uag-userinfo-add/".concat(this.paramData.data.appId)}):this.$Message.warning("请选择应用")},selectedAppInfo:function(t){""!=t&&"undefined"!=typeof t&&this.getdata()},showOnLock:function(t){return"1"===t.isLock},showOnUnLock:function(t){return"0"===t.isLock}}},C=S,x=Object(l["a"])(C,$,D,!1,null,null,null),R=x.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",[a("i-col",{staticClass:"bread-crumb",attrs:{span:"24"}},[a("Breadcrumb",t._l(t.breadcrumbList,function(e,r){return a("BreadcrumbItem",{key:r,attrs:{to:e.path}},[a("Icon",{attrs:{type:e.icon}}),t._v(" "+t._s(e.name)+"\n        ")],1)}),1)],1)],1),a("Divider"),a("Row",[a("i-col",{attrs:{span:"12",offset:"6"}},[a("Form",{ref:"uagUserInfoFrom",attrs:{model:t.uagUserInfoFrom,rules:t.uagUserInfoFromValidate,"label-width":110}},[a("FormItem",{attrs:{label:"账号用户名",prop:"username"}},[a("i-input",{attrs:{placeholder:"请输入账号用户名"},model:{value:t.uagUserInfoFrom.username,callback:function(e){t.$set(t.uagUserInfoFrom,"username",e)},expression:"uagUserInfoFrom.username"}})],1),a("FormItem",{attrs:{label:"账号名称",prop:"nickName"}},[a("i-input",{attrs:{placeholder:"请输入账号名称"},model:{value:t.uagUserInfoFrom.nickName,callback:function(e){t.$set(t.uagUserInfoFrom,"nickName",e)},expression:"uagUserInfoFrom.nickName"}})],1),a("FormItem",{attrs:{label:"账号密码",prop:"password"}},[a("i-input",{attrs:{placeholder:"请输入账号密码"},model:{value:t.uagUserInfoFrom.password,callback:function(e){t.$set(t.uagUserInfoFrom,"password",e)},expression:"uagUserInfoFrom.password"}})],1),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("uagUserInfoFrom")}}},[t._v("提交")]),a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){return t.handleReset("uagUserInfoFrom")}}},[t._v("重置")])],1)],1)],1)],1)],1)},N=[],B=(a("7f7f"),{data:function(){return{routerPath:this.$route.path,uagUserInfoFrom:{username:"",nickName:"",password:"",appId:this.$route.params.appId},uagUserInfoFromValidate:{username:[{required:!0,message:"应用名只能为有效的手机号码",pattern:/^[0-9]{11}$/,trigger:"blur"}],nickName:[{required:!0,type:"string",min:1,max:10,message:"账号名称为长度为1-10之间的字符",trigger:"blur"}],password:[{required:!0,type:"string",min:5,max:30,message:"密码为长度为5-30之间的字符",trigger:"blur"}]}}},computed:{breadcrumbList:function(){return this.utils.routerUtil.initRouterTreeNameArr(this.routerPath)}},methods:{handleSubmit:function(t){var e=this;this.$refs[t].validate(function(t){t?e.commitData():e.$Message.error("请完善表单信息!")})},handleReset:function(t){this.$refs[t].resetFields()},commitData:function(){var t=this;this.utils.netUtil.post(this.$store,this.API_PTAH.uagUserInfoAddAccount,this.uagUserInfoFrom,function(){t.$Message.success("提交成功!"),t.$store.commit("setUserInfoListAppId",t.uagUserInfoFrom.appId),t.$router.push("/uag-userinfo-list/")})}}}),j=B,z=Object(l["a"])(j,O,N,!1,null,null,null),T=z.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",[a("i-col",{staticClass:"bread-crumb",attrs:{span:"24"}},[a("Breadcrumb",t._l(t.breadcrumbList,function(e,r){return a("BreadcrumbItem",{key:r,attrs:{to:e.path}},[a("Icon",{attrs:{type:e.icon}}),t._v(" "+t._s(e.name)+"\n        ")],1)}),1)],1)],1),a("Divider"),a("Row",[a("i-col",{attrs:{span:"12",offset:"6"}},[a("Form",{ref:"uagUserInfoFrom",attrs:{model:t.uagUserInfoFrom,rules:t.uagUserInfoFromValidate,"label-width":110}},[a("FormItem",{attrs:{label:"账号用户名",prop:"username"}},[a("i-input",{attrs:{disabled:"",placeholder:"请输入账号用户名"},model:{value:t.uagUserInfoFrom.username,callback:function(e){t.$set(t.uagUserInfoFrom,"username",e)},expression:"uagUserInfoFrom.username"}})],1),a("FormItem",{attrs:{label:"账号名称",prop:"nickName"}},[a("i-input",{attrs:{placeholder:"请输入账号名称"},model:{value:t.uagUserInfoFrom.nickName,callback:function(e){t.$set(t.uagUserInfoFrom,"nickName",e)},expression:"uagUserInfoFrom.nickName"}})],1),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("uagUserInfoFrom")}}},[t._v("提交")]),a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){return t.handleReset("uagUserInfoFrom")}}},[t._v("重置")])],1)],1)],1)],1)],1)},E=[],H={data:function(){return{routerPath:this.$route.path,uagUserInfoFrom:{username:"",nickName:"",id:this.$route.params.userId,appId:this.$route.params.appId},uagUserInfoFromValidate:{username:[{required:!0,message:"应用名只能为有效的手机号码",pattern:/^[0-9]{11}$/,trigger:"blur"}],nickName:[{required:!0,type:"string",min:1,max:10,message:"账号名称为长度为1-10之间的字符",trigger:"blur"}],password:[{required:!0,type:"string",min:5,max:30,message:"账号名称为长度为5-30之间的字符",trigger:"blur"}]}}},mounted:function(){this.loadData()},computed:{breadcrumbList:function(){return this.utils.routerUtil.initRouterTreeNameArr(this.routerPath)}},methods:{handleSubmit:function(t){var e=this;this.$refs[t].validate(function(t){t?e.commitData():e.$Message.error("请完善表单信息!")})},loadData:function(){var t=this;this.utils.netUtil.post(this.$store,this.API_PTAH.uagUserInfoFindById,{data:this.uagUserInfoFrom},function(e){t.uagUserInfoFrom=e.data.datas})},commitData:function(){var t=this;this.uagUserInfoFrom.appId=this.$route.params.appId,this.utils.netUtil.post(this.$store,this.API_PTAH.uagUserInfoModify,this.uagUserInfoFrom,function(){t.$Message.success("提交成功!"),t.$store.commit("setUserInfoListAppId",t.uagUserInfoFrom.appId),t.$router.push("/uag-userinfo-list/")})}}},q=H,J=Object(l["a"])(q,M,E,!1,null,null,null),V=J.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",[a("i-col",{staticClass:"bread-crumb",attrs:{span:"24"}},[a("Breadcrumb",t._l(t.breadcrumbList,function(e,r){return a("BreadcrumbItem",{key:r,attrs:{to:e.path}},[a("Icon",{attrs:{type:e.icon}}),t._v(" "+t._s(e.name)+"\n        ")],1)}),1)],1)],1),a("Divider"),a("router-view"),a("Form",{ref:"queryParamFrom",staticClass:"query-pram-from",attrs:{model:t.paramData.data}},[a("Row",[a("i-col",{staticClass:"page-col",attrs:{span:"4",offset:"1"}},[a("FormItem",{attrs:{prop:"operatorName"}},[a("i-input",{attrs:{type:"text",placeholder:"操作人姓名"},model:{value:t.paramData.data.operatorName,callback:function(e){t.$set(t.paramData.data,"operatorName",e)},expression:"paramData.data.operatorName"}})],1)],1),a("i-col",{staticClass:"button-group",attrs:{span:"3",offset:"17"}},[a("Button",{attrs:{type:"success"},on:{click:function(e){return t.getdata()}}},[t._v("查询")]),a("Button",{attrs:{type:"warning"},on:{click:function(e){return t.handleReset()}}},[t._v("重置")])],1)],1)],1),a("br"),a("Table",{staticClass:"list-button-group",attrs:{border:"",columns:t.columns,data:t.tableData}}),a("Row",[a("i-col",{staticClass:"page-col",attrs:{span:"6",offset:"17"}},[a("Page",{staticClass:"pagination",attrs:{total:t.paramData.data.totalCount,current:t.paramData.data.currentPage,"page-size":t.paramData.data.pageSize,"show-sizer":""},on:{"on-change":t.handlePage,"on-page-size-change":t.handlePageSize}})],1)],1)],1)},W=[],K={components:{},data:function(){return{tableData:[],routerPath:this.$route.path,uagUserinfoAppArr:[],paramData:{data:{operatorName:""},page:{currentPage:1,pageSize:10},sort:{orderBy:"id",sort:"desc"}},columns:[{title:"应用名称",key:"appName"},{title:"操作项",key:"operatorDescription"},{title:"操作时间",key:"createTime"},{title:"操作人",key:"operatorName"}]}},computed:{breadcrumbList:function(){return this.utils.routerUtil.initRouterTreeNameArr(this.routerPath)}},mounted:function(){this.getdata()},methods:{handlePage:function(t){this.paramData.page.currentPage=t,this.getdata()},handlePageSize:function(t){this.paramData.page.pageSize=t,this.getdata()},getdata:function(){var t=Object(U["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.utils.netUtil.post(this.$store,this.API_PTAH.uagLogFind,this.paramData,function(t){e.tableData=t.data.datas,e.paramData.page.totalCount=t.data.page.totalCount,e.paramData.page.pageSize=t.data.page.pageSize,e.paramData.page.currentPage=t.data.page.currentPage});case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),handleReset:function(){this.$refs.queryParamFrom.resetFields(),this.getdata()}}},Q=K,X=Object(l["a"])(Q,G,W,!1,null,null,null),Y=X.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Row",[a("i-col",{attrs:{span:"2",offset:"10"}},[a("div",{staticClass:"err-info-box"},[a("P",{staticClass:"err-msg"},[t._v("访问权限检测中")]),a("img",{staticClass:"err-img",attrs:{src:t.errImg401}})],1)])],1)},tt=[],et=a("fece"),at=a.n(et),rt={data:function(){return{errImg401:at.a}},computed:{isLogin:function(){return Object.keys(this.$store.state.uagCurrentLoginUserInfo).length>0}},mounted:function(){var t=this,e=setInterval(function(){t.isLogin&&(clearInterval(e),t.$router.push("/"))},1500)},methods:{}},nt=rt,st=(a("f302"),Object(l["a"])(nt,Z,tt,!1,null,"32caa334",null)),ot=st.exports,it=a("8c4f");n["default"].use(it["a"]);var ut={};ut.routerPath=[{path:"/uag-log-list",component:Y,icon:"md-list-box",name:"操作日志"},{path:"/uag-userinfo-list",component:R,icon:"md-contact",name:"用户管理"},{path:"/uag-userinfo-list/uag-userinfo-add/:appId",component:T,icon:"md-add-circle",name:"添加用户"},{path:"/uag-userinfo-list/uag-userinfo-editor/:appId/:userId",component:V,icon:"ios-brush",name:"编辑用户"},{path:"/err",component:ot},{path:"",redirect:"/uag-userinfo-list"}],ut.initRouterGenerate=new it["a"]({routes:ut.routerPath});var ct=ut,pt={initRouterTreeNameArr:function(t){var e=[],a=[];t.split("/").forEach(function(t){""!=t&&e.push("/"+t)}),e.pop(),e.push(t);var r=t;while(r.split("/").length-1>1)r=r.slice(0,r.lastIndexOf("/")),e.push(r);return e=L.removeEmptyValueInArray(e),ct.routerPath.forEach(function(t){e.forEach(function(e){var r=!1;t.path.indexOf(":")>0&&t.path.slice(0,t.path.indexOf(":"))===e.slice(0,e.lastIndexOf("/")+1)&&(r=!0),t.path===e&&(r=!0),r&&a.push(t)})}),a},getPcUrlByRouterPath:function(t){var e="",a=JSON.parse(localStorage.menuArr);return a.map(function(a){a.path===t&&(e=a.pcUrl)}),e},getMenuListFromLocalRouterConfig:function(){var t=JSON.parse(localStorage.menuArr);return t.splice(0,1),t},initRouterNavBarActiveStatus:function(t){var e=[];return t.split("/").forEach(function(t){""!=t&&e.push("/"+t)}),e[0]}},lt=pt,dt={uagUserInfoFind:"/uagUserInfo/find",uagUserInfoFindUagUserAppList:"/uagUserInfo/findUagUserAppList",uagUserInfoAddAccount:"/uagUserInfo/addAccount",uagUserInfoToggleIsLockStatus:"/uagUserInfo/toggleIsLockStatus",uagUserInfoRestPassword:"/uagUserInfo/restPassword",uagUserInfoFindById:"/uagUserInfo/findById",uagUserInfoModify:"/uagUserInfo/modify",uagLogFind:"/uagLog/find"},ft=dt,mt={sendAutoParentFrameSizeMsg:function(){setInterval(function(){var t=window.document.body.offsetHeight,e=window.location.host,a={subFrameHeight:t,subFrameHost:e};window.parent.postMessage(a,"*")},500)},getCurrentLoginUserInfo:function(t){window.addEventListener("message",function(e){"undefined"!=typeof e.data.loadCurrentLoginUserInfo&&t.commit("loadCurrentLoginUserInfo",e.data.loadCurrentLoginUserInfo)},!1)},reSizeParentFrameSize:function(t){window.addEventListener("message",function(e){var a=e.data.subFrameHeight;"undefined"!=typeof a&&(a="".concat(a,"px"),t.commit("reSizeFrameHeight",a));var r=e.data.subFrameHost;if("undefined"!=typeof r){var n=document.getElementsByTagName("iframe")[0],s=t.state.uagCurrentLoginUserInfo;0==Object.keys(s).length?It.netUtil.post(ft.getCurrentUagLoginInfo,{},function(e){t.commit("loadCurrentLoginUserInfo",e.data.datas),n.contentWindow.postMessage({loadCurrentLoginUserInfo:t.state.uagCurrentLoginUserInfo},"*")}):n.contentWindow.postMessage({loadCurrentLoginUserInfo:t.state.uagCurrentLoginUserInfo},"*")}},!1)}},gt=mt,ht={netUtil:P,objectUtil:L,frameUtil:gt,routerUtil:lt},It=ht,bt=a("2f62"),vt={userInfoListAppId:"0",uagCurrentLoginUserInfo:{}},Ut=vt,yt={setUserInfoListAppId:function(t,e){t.userInfoListAppId=e},loadCurrentLoginUserInfo:function(){var t=Object(U["a"])(regeneratorRuntime.mark(function t(e,a){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e.uagCurrentLoginUserInfo=a;case 1:case"end":return t.stop()}},t)}));function e(e,a){return t.apply(this,arguments)}return e}()},wt=yt;n["default"].use(bt["a"]);var kt={};kt.initsStoreInstance=new bt["a"].Store({state:Ut,mutations:wt});var Ft=kt;n["default"].use(v.a),n["default"].config.productionTip=!1,It.vue=void 0,n["default"].prototype.utils=It,n["default"].prototype.API_PTAH=ft;var Pt=ct.initRouterGenerate,At=Ft.initsStoreInstance;Pt.beforeEach(function(t,e,a){"/err"!=t.path&&Object.keys(At.state.uagCurrentLoginUserInfo).length<=0&&a("/err"),a()}),new n["default"]({router:Pt,store:At,render:function(t){return t(I)}}).$mount("#app")},5891:function(t,e,a){},"74b5":function(t,e,a){},"8b5e":function(t,e,a){},f036:function(t,e,a){"use strict";var r=a("5891"),n=a.n(r);n.a},f302:function(t,e,a){"use strict";var r=a("74b5"),n=a.n(r);n.a},fece:function(t,e,a){t.exports=a.p+"img/401.294359d7.png"}});
//# sourceMappingURL=app.47c3fb1a.js.map