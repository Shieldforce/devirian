(function(){var t={9929:function(t,e,a){"use strict";var o={};a.r(o),a.d(o,{ActionDoLogin:function(){return Nt},ActionLogout:function(){return Gt},ActionResetPassword:function(){return Vt},ActionSetToken:function(){return qt},ActionSetUser:function(){return jt}});var r={};a.r(r),a.d(r,{ActionGetMetas:function(){return ye},ActionGetTarefas:function(){return Te},ActionSetDataFormSubmit:function(){return $e},ActionSetModalConfirm:function(){return we},ActionSetModalConfirmAccept:function(){return Ze},ActionSetModalCreateUpdate:function(){return Se},ActionSetModalDataForm:function(){return _e},ActionSetSnackbar:function(){return Ae}});var n=a(144),l=a(1096),s=a(3551),i=function(){var t=this,e=t._self._c;return e("div",[t.accessRoute?e("div",[e(l.Z,{attrs:{id:"inspire"}},[e("router-view",{key:t.$router.fullPath})],1)],1):e("div",[e(l.Z,{attrs:{id:"inspire"}},[e("NavegationDrawerComponent",{attrs:{actionDrawer:t.drawer}}),e("AppBarComponent",{on:{changeDrawer:t.changeDrawer}}),e(s.Z,[e("router-view",{key:t.$router.fullPath})],1)],1)],1),e("SnackBarComponent"),e("ModalConfirm"),e("CreateUpdateModal",{attrs:{form:t.form},scopedSlots:t._u([{key:"form",fn:function({selectionTemplate:t}){return[e("FormCreateUpdate",{attrs:{selectionTemplate:t}})]}}])})],1)},c=[],d=a(7179),u=a(1692),m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center ma-2"},[e(u.Z,{attrs:{color:t.color,top:"",right:"",app:""},scopedSlots:t._u([{key:"action",fn:function({attrs:a}){return[e(d.Z,t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",a,!1),[t._v(" Fechar ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.text)+" ")])],1)},f=[],g={name:"SnackBarComponent",data(){return{snackbar:!1,color:"rgba(0,0,0,0.5)",text:"Not Text"}},created(){this.$store.subscribe(((t,e)=>{"global/GLOBAL/SET_SNACKBAR"===t.type&&(this.snackbar=e.global.snackBarConfig.show,this.color=e.global.snackBarConfig.color,this.text=e.global.snackBarConfig.text)}))}},p=g,b=a(1001),h=(0,b.Z)(p,m,f,!1,null,null,null),v=h.exports,C=a(3058),k=a(5223),F=a(9789),A=a(5294),w=a(5234),Z=function(){var t=this,e=t._self._c;return e(A.Z,{attrs:{justify:"center"}},[e(F.Z,{attrs:{persistent:"","max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(C.Z,[e(k.EB,{staticClass:"text-h5"},[t._v(" "+t._s(t.title)+" ")]),e(k.ZB,[t._v(t._s(t.message))]),e(k.h7,[e(w.Z),e(d.Z,{attrs:{color:"red darken-1",text:""},on:{click:function(e){return t.actionAccept(!1)}}},[t._v(" Não ")]),e(d.Z,{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.actionAccept(!0)}}},[t._v(" Sim ")])],1)],1)],1)],1)},S=[],_=a(629),$={name:"ModalConfirmVue",data(){return{dialog:!1,accept:!1,title:"Confirm!",message:"Text modal confirmation!"}},created(){this.$store.subscribe(((t,e)=>{"global/GLOBAL/SET_MODAL_CONFIRM"===t.type&&(this.dialog=e.global.modalConfirmConfig.dialog,this.title=e.global.modalConfirmConfig.title,this.message=e.global.modalConfirmConfig.message)}))},methods:{...(0,_.nv)("global",["ActionSetModalConfirmAccept"]),actionAccept(t){this.ActionSetModalConfirmAccept(t),this.dialog=!1}}},y=$,T=(0,b.Z)(y,Z,S,!1,null,null,null),x=T.exports,O=a(4192),D=a(5057),E=a(248),M=a(1908),P=a(1769),L=a(8228),B=a(1969),I=function(){var t=this,e=t._self._c;return e(B.Z,{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(M.Z,[e(P.km,[e(P.V9,{staticClass:"text-h6"},[t._v(" Devirian ")]),e(P.oZ,[t._v(" O mundo dos Dev's ")])],1)],1),e(O.Z),e(E.Z,{attrs:{dense:"",nav:""}},t._l(t.items,(function(a){return e(M.Z,{key:a.title,attrs:{link:"",to:a.to}},[e(L.Z,[e(D.Z,[t._v(t._s(a.icon))])],1),e(P.km,[e(P.V9,[t._v(t._s(a.title))])],1)],1)})),1)],1)},U=[],N={props:{actionDrawer:{required:!0,default:!0}},data:()=>({drawer:!0,items:[{title:"Dashboard/Metas",icon:"mdi-view-dashboard",to:"/dashboard"},{title:"Lista de Tarefas",icon:"mdi-list-status",to:"/tasks"},{title:"Sobre",icon:"mdi-information-outline",to:"/about"}],right:null}),watch:{actionDrawer(t){this.drawer=t}}},V=N,G=(0,b.Z)(V,I,U,!1,null,null,null),j=G.exports,q=a(677),z=a(8983),R=a(6629),H=a(2469),K=function(){var t=this,e=t._self._c;return e(q.Z,{attrs:{app:"",color:"#fcb69f",dark:"","shrink-on-scroll":"",src:"/img/slider.jpg"},scopedSlots:t._u([{key:"img",fn:function({props:a}){return[e(H.Z,t._b({attrs:{gradient:"to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"}},"v-img",a,!1))]}}])},[e(z.Z,{on:{click:t.changeDrawer}}),e(R.Z,[t._v("Devirian")]),e(w.Z),e(d.Z,{attrs:{icon:""}},[e(D.Z,{attrs:{color:"red"},on:{click:t.logout}},[t._v("mdi-power")])],1),e(d.Z,{attrs:{icon:""}},[e(D.Z,[t._v("mdi-heart")])],1),e(d.Z,{attrs:{icon:""}},[e(D.Z,[t._v("mdi-dots-vertical")])],1)],1)},J=[],Q=a(6550),W={data:()=>({right:null}),methods:{changeDrawer(){this.$emit("changeDrawer")},logout(){Q.Z.post("auth/logout",{}).then((t=>{localStorage.removeItem("token"),console.log(t),window.location.href="/access"})).catch((t=>{localStorage.removeItem("token"),console.log(t),window.location.href="/access"}))}}},X=W,Y=(0,b.Z)(X,K,J,!1,null,null,null),tt=Y.exports,et=a(6904),at=function(){var t=this,e=t._self._c;return e(A.Z,{attrs:{justify:"center"}},[e(F.Z,{attrs:{persistent:"","max-width":"700px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(C.Z,[e(et.Z,{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.submitForm()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(k.EB,{staticStyle:{background:"#cecece"}},[e("span",{staticClass:"text-h5",staticStyle:{width:"100%","text-align":"center"}},[t._v(t._s(t.title))])]),t._t("form",null,{selectionTemplate:t.selectionTemplate}),e(k.h7,[e(w.Z),e(d.Z,{attrs:{color:"red darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Fechar ")]),e(d.Z,{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.submitForm()}}},[t._v(" Salvar ")])],1)],2)],1)],1)],1)},ot=[],rt={name:"CreateUpdateModal",data:()=>({dialog:!1,title:"",selectionTemplate:"",dataForm:{},valid:!0}),created(){this.$store.subscribe(((t,e)=>{"global/GLOBAL/SET_MODAL_CREATE_UPDATE"===t.type&&(this.dialog=e.global.modalCreateUpdateConfig.dialog,this.title=e.global.modalCreateUpdateConfig.title,this.selectionTemplate=e.global.modalCreateUpdateConfig.selectionTemplate)}))},methods:{...(0,_.nv)("global",["ActionSetModalDataForm","ActionSetSnackbar","ActionSetDataFormSubmit","ActionGetMetas","ActionGetTarefas"]),submitForm(){this.ActionSetDataFormSubmit(this.$store.state.global.dataForm).then((()=>{this.ActionGetMetas(),this.ActionGetTarefas(),this.dialog=!1})).catch((t=>{422===t.response.status&&(this.setValidaton(t.response.data.errors),this.$refs.form.validate(),this.errosValidations(t.response.data.message))}))},errosValidations(t=null){var e="Atenção aos erros do formulário!";t&&(e=t),this.ActionSetSnackbar({reset:!1,show:!0,color:"rgba(255,0,0,0.5)",text:e})},setValidaton(t=null){if(t){var e=this.$store.state.global.dataForm;e.validation=t,this.ActionSetModalDataForm(e)}}},watch:{dialog(){var t=this.$store.state.global.dataForm;!1===this.dialog&&"post"===t.method&&this.$refs.form.reset(),!1===this.dialog&&(this.$refs.form.resetValidation(),this.ActionSetSnackbar({reset:!1,show:!1,color:"rgba(255,0,0,0.5)",text:""}))}}},nt=rt,lt=(0,b.Z)(nt,at,ot,!1,null,null,null),st=lt.exports,it=function(){var t=this,e=t._self._c;return e("div",[e(t.selectedComponent,{tag:"component"})],1)},ct=[],dt=a(4437),ut=a(7668),mt=a(2059),ft=a(5251),gt=function(){var t=this,e=t._self._c;return e(k.ZB,[e("div",{staticStyle:{padding:"5%"}},[e(A.Z,[e(dt.Z,{attrs:{cols:"12",sm:"12",md:"12"}},[e(ft.Z,{attrs:{label:"Título*",rules:[...t.$store.state.global.dataForm.validation.titulo??[]],required:""},on:{keydown:function(e){return e.stopPropagation(),t.resetValidation("titulo")}},model:{value:t.$store.state.global.dataForm.form.titulo,callback:function(e){t.$set(t.$store.state.global.dataForm.form,"titulo",e)},expression:"$store.state.global.dataForm.form.titulo"}})],1),e(dt.Z,{attrs:{cols:"12",sm:"12",md:"12"}},[e(ft.Z,{attrs:{label:"Descrição*",rules:[...t.$store.state.global.dataForm.validation.descricao??[]],required:""},on:{keydown:function(e){return e.stopPropagation(),t.resetValidation("descricao")}},model:{value:t.$store.state.global.dataForm.form.descricao,callback:function(e){t.$set(t.$store.state.global.dataForm.form,"descricao",e)},expression:"$store.state.global.dataForm.form.descricao"}})],1),e(dt.Z,{attrs:{cols:"12",sm:"6"}},[e(ut.Z,{attrs:{items:["curto","médio","longo"],label:"Prazo*",rules:[...t.$store.state.global.dataForm.validation.prazo??[]],required:""},on:{change:function(e){return t.resetValidation("prazo")}},model:{value:t.$store.state.global.dataForm.form.prazo,callback:function(e){t.$set(t.$store.state.global.dataForm.form,"prazo",e)},expression:"$store.state.global.dataForm.form.prazo"}})],1),e(dt.Z,{attrs:{cols:"12",sm:"6"}},[e(ut.Z,{attrs:{items:["profissional","pessoal"],label:"Aplicação*",rules:[...t.$store.state.global.dataForm.validation.aplicacao??[]],required:""},on:{change:function(e){return t.resetValidation("aplicacao")}},model:{value:t.$store.state.global.dataForm.form.aplicacao,callback:function(e){t.$set(t.$store.state.global.dataForm.form,"aplicacao",e)},expression:"$store.state.global.dataForm.form.aplicacao"}})],1),e(dt.Z,{staticClass:"mt-5",attrs:{cols:"12",sm:"12",md:"6"}},[e(mt.Z,{staticStyle:{padding:"0 0 0 0",margin:"0 0 0 0"},attrs:{label:t.rangerImpacto.label,"thumb-color":t.rangerImpacto.color,"thumb-label":"always",rules:[...t.$store.state.global.dataForm.validation.impacto??[]],required:""},on:{change:function(e){return t.resetValidation("impacto")}},model:{value:t.$store.state.global.dataForm.form.impacto,callback:function(e){t.$set(t.$store.state.global.dataForm.form,"impacto",e)},expression:"$store.state.global.dataForm.form.impacto"}})],1),e(dt.Z,{staticClass:"mt-5",attrs:{cols:"12",sm:"12",md:"6"}},[e(mt.Z,{staticStyle:{padding:"0 0 0 0",margin:"0 0 0 0"},attrs:{label:t.rangerConcluida.label,"thumb-color":t.rangerConcluida.color,"thumb-label":"always",rules:[...t.$store.state.global.dataForm.validation.concluida??[]],required:""},on:{change:function(e){return t.resetValidation("concluida")}},model:{value:t.$store.state.global.dataForm.form.concluida,callback:function(e){t.$set(t.$store.state.global.dataForm.form,"concluida",e)},expression:"$store.state.global.dataForm.form.concluida"}})],1)],1)],1),e("small",[t._v("Campos com * são obrigatórios!")])])},pt=[],bt={name:"FormCreateUpdateMetas",data:()=>({rangerImpacto:{label:"Impacto: ",val:50,color:"red"},rangerConcluida:{label:"Concluída: ",val:0,color:"green"},endpoint:"/meta",method:"post",form:{concluida:0,titulo:"",descricao:"",aplicacao:[],prazo:[],impacto:0}}),created(){this.mountDataForm()},methods:{...(0,_.nv)("global",["ActionSetModalDataForm"]),mountDataForm(){var t={endpoint:this.endpoint,method:this.method,form:this.form,validation:{}};this.$store.state.global.dataForm.endpoint&&(t=this.$store.state.global.dataForm),this.ActionSetModalDataForm(t),this.resetValidation()},resetValidation(t=null){var e={endpoint:this.$store.state.global.dataForm.endpoint,method:this.$store.state.global.dataForm.method,form:this.$store.state.global.dataForm.form,validation:this.$store.state.global.dataForm.validation};t&&(e.validation[t]=[]),this.ActionSetModalDataForm(e)}},watch:{"$store.state.global.modalCreateUpdateConfig":{immediate:!0,handler(){}}}},ht=bt,vt=(0,b.Z)(ht,gt,pt,!1,null,null,null),Ct=vt.exports,kt=function(){var t=this,e=t._self._c;return e(k.ZB,[e("div",{staticStyle:{padding:"5%"}},[e(A.Z,[e(dt.Z,{attrs:{cols:"12",sm:"12",md:"12"}},[e(ft.Z,{attrs:{label:"Título*",rules:[...t.$store.state.global.dataForm.validation.titulo??[]],required:""},on:{keydown:function(e){return e.stopPropagation(),t.resetValidation("titulo")}},model:{value:t.$store.state.global.dataForm.form.titulo,callback:function(e){t.$set(t.$store.state.global.dataForm.form,"titulo",e)},expression:"$store.state.global.dataForm.form.titulo"}})],1),e(dt.Z,{attrs:{cols:"12",sm:"12",md:"12"}},[e(ft.Z,{attrs:{label:"Descrição*",rules:[...t.$store.state.global.dataForm.validation.descricao??[]],required:""},on:{keydown:function(e){return e.stopPropagation(),t.resetValidation("descricao")}},model:{value:t.$store.state.global.dataForm.form.descricao,callback:function(e){t.$set(t.$store.state.global.dataForm.form,"descricao",e)},expression:"$store.state.global.dataForm.form.descricao"}})],1),e(dt.Z,{attrs:{cols:"12",sm:"6"}},[e(ut.Z,{attrs:{items:["curto","médio","longo"],label:"Prazo*",rules:[...t.$store.state.global.dataForm.validation.prazo??[]],required:""},on:{change:function(e){return t.resetValidation("prazo")}},model:{value:t.$store.state.global.dataForm.form.prazo,callback:function(e){t.$set(t.$store.state.global.dataForm.form,"prazo",e)},expression:"$store.state.global.dataForm.form.prazo"}})],1),e(dt.Z,{attrs:{cols:"12",sm:"6"}},[e(ut.Z,{attrs:{items:["profissional","pessoal"],label:"Aplicação*",rules:[...t.$store.state.global.dataForm.validation.aplicacao??[]],required:""},on:{change:function(e){return t.resetValidation("aplicacao")}},model:{value:t.$store.state.global.dataForm.form.aplicacao,callback:function(e){t.$set(t.$store.state.global.dataForm.form,"aplicacao",e)},expression:"$store.state.global.dataForm.form.aplicacao"}})],1),e(dt.Z,{staticClass:"mt-5",attrs:{cols:"12",sm:"12",md:"6"}},[e(mt.Z,{staticStyle:{padding:"0 0 0 0",margin:"0 0 0 0"},attrs:{label:t.rangerImpacto.label,"thumb-color":t.rangerImpacto.color,"thumb-label":"always",rules:[...t.$store.state.global.dataForm.validation.impacto??[]],required:""},on:{change:function(e){return t.resetValidation("impacto")}},model:{value:t.$store.state.global.dataForm.form.impacto,callback:function(e){t.$set(t.$store.state.global.dataForm.form,"impacto",e)},expression:"$store.state.global.dataForm.form.impacto"}})],1),e(dt.Z,{staticClass:"mt-5",attrs:{cols:"12",sm:"12",md:"6"}},[e(mt.Z,{staticStyle:{padding:"0 0 0 0",margin:"0 0 0 0"},attrs:{label:t.rangerConcluida.label,"thumb-color":t.rangerConcluida.color,"thumb-label":"always",rules:[...t.$store.state.global.dataForm.validation.concluida??[]],required:""},on:{change:function(e){return t.resetValidation("concluida")}},model:{value:t.$store.state.global.dataForm.form.concluida,callback:function(e){t.$set(t.$store.state.global.dataForm.form,"concluida",e)},expression:"$store.state.global.dataForm.form.concluida"}})],1)],1)],1),e("small",[t._v("Campos com * são obrigatórios!")])])},Ft=[],At={name:"FormCreateUpdateTarefas",data:()=>({rangerImpacto:{label:"Impacto: ",val:50,color:"red"},rangerConcluida:{label:"Concluída: ",val:0,color:"green"},endpoint:"/tarefa",method:"post",form:{concluida:0,titulo:"",descricao:"",aplicacao:[],prazo:[],impacto:0}}),created(){this.mountDataForm()},methods:{...(0,_.nv)("global",["ActionSetModalDataForm"]),mountDataForm(){var t={endpoint:this.endpoint,method:this.method,form:this.form,validation:{}};this.$store.state.global.dataForm.endpoint&&(t=this.$store.state.global.dataForm),this.ActionSetModalDataForm(t),this.resetValidation()},resetValidation(t=null){var e={endpoint:this.$store.state.global.dataForm.endpoint,method:this.$store.state.global.dataForm.method,form:this.$store.state.global.dataForm.form,validation:this.$store.state.global.dataForm.validation};t&&(e.validation[t]=[]),this.ActionSetModalDataForm(e)}},watch:{"$store.state.global.modalCreateUpdateConfig":{immediate:!0,handler(){}}}},wt=At,Zt=(0,b.Z)(wt,kt,Ft,!1,null,null,null),St=Zt.exports,_t={props:{selectionTemplate:{type:String,default:"",required:!0}},name:"FormCreateUpdate",components:{FormCreateUpdateMetas:Ct,FormCreateUpdateTarefas:St},data:()=>({}),created(){this.selectedComponent=this.selectionTemplate},methods:{}},$t=_t,yt=(0,b.Z)($t,it,ct,!1,null,null,null),Tt=yt.exports,xt={components:{SnackBarComponent:v,ModalConfirm:x,NavegationDrawerComponent:j,AppBarComponent:tt,CreateUpdateModal:st,FormCreateUpdate:Tt},data:()=>({drawer:!0,accessRoute:!1,form:{}}),created(){let t=window.location.pathname;(t.includes("resetPassword")||"/access"===t)&&(this.accessRoute=!0)},methods:{changeDrawer(){this.drawer=!this.drawer}}},Ot=xt,Dt=(0,b.Z)(Ot,i,c,!1,null,null,null),Et=Dt.exports,Mt=a(5205);(0,Mt.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var Pt=a(8345),Lt={user:{},token:localStorage.getItem("token")};const Bt="AUTH/SET_USER",It="AUTH/SET_TOKEN";var Ut={[Bt](t,e){t.user=e},[It](t,e){t.token=e}};const Nt=(t,e)=>Q.Z.post(e.action,e),Vt=(t,e)=>Q.Z.post("resetPassword",e),Gt=(t,e)=>Q.Z.post("auth/logout",e),jt=({commit:t},e)=>{t(Bt,e)},qt=({commit:t},e)=>{t(It,e)};var zt={state:Lt,actions:o,mutations:Ut,namespaced:!0};const Rt=[{path:"/access",name:"access",meta:{scope:"public",reload:!0},component:()=>a.e(235).then(a.bind(a,7064))},{path:"/resetPassword/:token",name:"resetPassword",meta:{scope:"public",reload:!0},component:()=>a.e(58).then(a.bind(a,6838))}];var Ht=Rt,Kt={},Jt={},Qt=a(3780),Wt={state:Kt,actions:Qt,mutations:Jt,namespaced:!0};const Xt=[{path:"/",name:"externalIndex",meta:{scope:"private",reload:!0},component:()=>a.e(610).then(a.bind(a,5998))}];var Yt=Xt,te={},ee={},ae=a(9180),oe={state:te,actions:ae,mutations:ee,namespaced:!0};const re=[{path:"/dashboard",name:"dashboard",meta:{scope:"private",reload:!0},component:()=>Promise.all([a.e(559),a.e(530),a.e(241),a.e(966)]).then(a.bind(a,4314))},{path:"/tasks",name:"tasks",meta:{scope:"private",reload:!0},component:()=>Promise.all([a.e(559),a.e(306),a.e(530),a.e(716)]).then(a.bind(a,5169))},{path:"/about",name:"about",meta:{scope:"private",reload:!0},component:()=>Promise.all([a.e(559),a.e(306),a.e(241),a.e(443)]).then(a.bind(a,9171))}];var ne=re,le=[...Ht,...Yt,...ne];n.ZP.use(Pt.ZP);const se=new Pt.ZP({mode:"history",base:"/",routes:le});var ie=se,ce={snackBarConfig:{show:!1,color:"rgba(0,0,0,0.5)",text:"Not Text"},modalConfirmConfig:{dialog:!1,title:"",message:""},modalCreateUpdateConfig:{dialog:!1,title:"",selectionTemplate:""},dataForm:{},metas:{},metasConcluidas:{},tarefas:{},tarefasConcluidas:{}};const de={getMetas(t){return t.metas},getMetasConcluidas(t){return t.metasConcluidas},getTarefas(t){return t.tarefas},getTarefasConcluidas(t){return t.tarefasConcluidas}};var ue=de;const me="GLOBAL/SET_SNACKBAR",fe="GLOBAL/SET_MODAL_CONFIRM",ge="GLOBAL/SET_MODAL_CONFIRM_ACCEPTED",pe="GLOBAL/SET_MODAL_CREATE_UPDATE",be="GLOBAL/SET_MODAL_DATA_FORM",he="GLOBAL/GET_METAS",ve="GLOBAL/GET_METAS_CONCLUIDAS",Ce="GLOBAL/GET_TAREFAS",ke="GLOBAL/GET_TAREFAS_CONCLUIDAS";var Fe={[me](t,e){t.snackBarConfig=e},[fe](t,e){t.modalConfirmConfig=e},[ge](t,e){t.modalConfirmConfig.accept=e},[pe](t,e){t.modalCreateUpdateConfig=e},[be](t,e){t.dataForm=e},[he](t,e){t.metas=e},[ve](t,e){t.metasConcluidas=e},[Ce](t,e){t.tarefas=e},[ke](t,e){t.tarefasConcluidas=e}};const Ae=({commit:t},e)=>{t(me,e)},we=({commit:t},e)=>t(fe,e),Ze=({commit:t},e)=>t(ge,e),Se=({commit:t},e)=>t(pe,e),_e=({commit:t},e)=>{t(be,e)},$e=(t,e)=>Q.Z[e.method](e.endpoint,e.form),ye=({commit:t},e)=>{var a=Q.Z.get("/meta",e);return a.then((e=>{var a=e.data.data,o=0;a.forEach((t=>{o=parseInt(o+t.concluida)}));var r=o/parseInt(a.length),n="rgba(0,0,0, 0.3)",l=1;r<10&&(l=11,n="rgba(255,0,0, 0.3)"),r>=10&&r<20&&(l=10,n="rgba(255,0,0, 0.3)"),r>=20&&r<30&&(l=9,n="rgba(255,0,0, 0.3)"),r>=30&&r<40&&(l=8,n="rgba(255,117,24, 0.3)"),r>=40&&r<50&&(l=7,n="rgba(255,117,24, 0.3)"),r>=40&&r<50&&(l=6,n="rgba(255,117,24, 0.3)"),r>=50&&r<60&&(l=5,n="rgba(255,255,0, 0.3)"),r>=60&&r<70&&(l=4,n="rgba(255,255,0, 0.3)"),r>=70&&r<80&&(l=3,n="rgba(255,255,0, 0.3)"),r>=80&&r<90&&(l=2,n="rgba(50,205,50, 0.3)"),r>=90&&r<=100&&(l=1,n="rgba(50,205,50, 0.3)");var s=10*l-10;t(he,e.data.data),t(ve,{speed:l,progressValue:s,progressColor:n})})).catch((t=>{console.log(t)})),a},Te=({commit:t},e)=>{var a=Q.Z.get("/tarefa",e);return a.then((e=>{var a=e.data.data,o=0;a.forEach((t=>{o=parseInt(o+t.concluida)}));var r=o/parseInt(a.length);0===a.length&&(r=100);var n="rgba(0,0,0, 0.3)",l=0;r<10&&(l=10,n="rgba(255,0,0, 0.3)"),r>=10&&r<20&&(l=9,n="rgba(255,0,0, 0.3)"),r>=20&&r<30&&(l=8,n="rgba(255,0,0, 0.3)"),r>=30&&r<40&&(l=7,n="rgba(255,117,24, 0.3)"),r>=40&&r<50&&(l=6,n="rgba(255,117,24, 0.3)"),r>=40&&r<50&&(l=5,n="rgba(255,117,24, 0.3)"),r>=50&&r<60&&(l=4,n="rgba(255,255,0, 0.3)"),r>=60&&r<70&&(l=3,n="rgba(255,255,0, 0.3)"),r>=70&&r<80&&(l=2,n="rgba(255,255,0, 0.3)"),r>=80&&r<90&&(l=1,n="rgba(50,205,50, 0.3)"),r>=90&&r<=100&&(l=1,n="rgba(50,205,50, 0.3)"),100==r&&(l=0,n="rgba(50,205,50, 0.3)");var s=10*l;t(Ce,e.data.data),100===r&&(l=1),t(ke,{speed:l,progressValue:s,progressColor:n})})).catch((t=>{console.log(t)})),a};var xe={state:ce,getters:ue,actions:r,mutations:Fe,namespaced:!0},Oe={global:xe,auth:zt,external:Wt,panel:oe};n.ZP.use(_.ZP);var De=new _.ZP.Store({modules:Oe}),Ee=a(2250);n.ZP.use(Ee.Z);var Me=new Ee.Z({});n.ZP.config.productionTip=!1,ie.beforeEach(((t,e,a)=>{localStorage.getItem("token")&&"undefined"!==localStorage.getItem("token")&&"private"===t.meta.scope&&Q.Z.get("/auth/verifyToken").then((()=>{a()})).catch((()=>{localStorage.removeItem("token"),window.location.href="/access"})),window.location.href.includes("resetPassword")||("/"===t.path&&(window.location.href="/dashboard"),localStorage.getItem("token")&&"undefined"!==localStorage.getItem("token")&&"public"===t.meta.scope&&(window.location.href="/dashboard",console.log(e,a)),("private"===t.meta.scope&&!localStorage.getItem("token")||"undefined"===localStorage.getItem("token"))&&(localStorage.removeItem("token"),window.location.href="/access",console.log(e,a))),a()})),new n.ZP({router:ie,store:De,vuetify:Me,render:t=>t(Et)}).$mount("#app")},6550:function(t,e,a){"use strict";var o=a(8433);let r=null;localStorage.getItem("token")&&(r=localStorage.getItem("token"));const n=o.Z.create({baseURL:"http://localhost:82/api/",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Headers":"*",Authorization:`Bearer ${r}`}});e["Z"]=n},3780:function(){},9180:function(){}},e={};function a(o){var r=e[o];if(void 0!==r)return r.exports;var n=e[o]={exports:{}};return t[o].call(n.exports,n,n.exports,a),n.exports}a.m=t,function(){a.amdO={}}(),function(){var t=[];a.O=function(e,o,r,n){if(!o){var l=1/0;for(d=0;d<t.length;d++){o=t[d][0],r=t[d][1],n=t[d][2];for(var s=!0,i=0;i<o.length;i++)(!1&n||l>=n)&&Object.keys(a.O).every((function(t){return a.O[t](o[i])}))?o.splice(i--,1):(s=!1,n<l&&(l=n));if(s){t.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[o,r,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};a.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"===typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"===typeof o.then)return o}var n=Object.create(null);a.r(n);var l={};t=t||[null,e({}),e([]),e(e)];for(var s=2&r&&o;"object"==typeof s&&!~t.indexOf(s);s=e(s))Object.getOwnPropertyNames(s).forEach((function(t){l[t]=function(){return o[t]}}));return l["default"]=function(){return o},a.d(n,l),n}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,o){return a.f[o](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+({58:"resetPassword",235:"access",443:"about",610:"externalIndex",716:"tasks",966:"dashboard"}[t]||t)+"."+{58:"6e228fe7",235:"7c41a9c8",241:"84f1fafe",306:"651ec67e",443:"d458443a",530:"09cb85ee",559:"21cdc1f9",610:"04409b7f",716:"a3055282",966:"645a08a1"}[t]+".js"}}(),function(){a.miniCssF=function(t){return"css/"+{235:"access",443:"about",716:"tasks",966:"dashboard"}[t]+"."+{235:"f4cae7c3",443:"b500a086",716:"8ca2e68f",966:"8ca2e68f"}[t]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="devirian:";a.l=function(o,r,n,l){if(t[o])t[o].push(r);else{var s,i;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==e+n){s=u;break}}s||(i=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",e+n),s.src=o),t[o]=[r];var m=function(e,a){s.onerror=s.onload=null,clearTimeout(f);var r=t[o];if(delete t[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(t){return t(a)})),e)return e(a)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),i&&document.head.appendChild(s)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,a,o,r){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var l=function(a){if(n.onerror=n.onload=null,"load"===a.type)o();else{var l=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||e,i=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=l,i.request=s,n.parentNode.removeChild(n),r(i)}};return n.onerror=n.onload=l,n.href=e,a?a.parentNode.insertBefore(n,a.nextSibling):document.head.appendChild(n),n},e=function(t,e){for(var a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var r=a[o],n=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(n===t||n===e))return r}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){r=l[o],n=r.getAttribute("data-href");if(n===t||n===e)return r}},o=function(o){return new Promise((function(r,n){var l=a.miniCssF(o),s=a.p+l;if(e(l,s))return r();t(o,s,null,r,n)}))},r={143:0};a.f.miniCss=function(t,e){var a={235:1,443:1,716:1,966:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=o(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}}(),function(){var t={143:0};a.f.j=function(e,o){var r=a.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var n=new Promise((function(a,o){r=t[e]=[a,o]}));o.push(r[2]=n);var l=a.p+a.u(e),s=new Error,i=function(o){if(a.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var n=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+l+")",s.name="ChunkLoadError",s.type=n,s.request=l,r[1](s)}};a.l(l,i,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,n,l=o[0],s=o[1],i=o[2],c=0;if(l.some((function(e){return 0!==t[e]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(i)var d=i(a)}for(e&&e(o);c<l.length;c++)n=l[c],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(d)},o=self["webpackChunkdevirian"]=self["webpackChunkdevirian"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(9929)}));o=a.O(o)})();
//# sourceMappingURL=app.39cc745c.js.map