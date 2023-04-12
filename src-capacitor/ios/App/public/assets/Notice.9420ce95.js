import{c as f,d as P,l as x,m as T,U as w,q as $,_ as V,e as D,X as S,Y as B,r as F,f as N,g as t,o as i,i as e,aD as j,Q as z,al as c,an as b,Z as m,ao as d,a0 as p,am as g}from"./index.ac4a4f21.js";import{u as A,a as I,b as E,Q as U}from"./QTabs.0b0cbed3.js";import{Q as L}from"./QSeparator.cfcd0350.js";import{Q as h}from"./QImg.a2f1601a.js";import{Q as y}from"./QCard.cc47cd1c.js";import{u as R,a as M,b as X,c as Y}from"./use-panel.e60acaa7.js";import{u as Z,a as G}from"./use-dark.9cda36eb.js";import{Q as H}from"./QPage.f4b22777.js";import{n as J,a as K,c as O}from"./db.9816f83f.js";import"./uid.42677368.js";import"./QResizeObserver.3a4f10fc.js";import"./use-timeout.fe1320fc.js";var _=f({name:"QTab",props:A,emits:I,setup(o,{slots:s,emit:r}){const{renderTab:l}=E(o,s,r);return()=>l("div")}}),Q=f({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(o,{slots:s}){const r=P(()=>`q-card__section q-card__section--${o.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>x(o.tag,{class:r.value},T(s.default))}}),C=f({name:"QTabPanel",props:R,setup(o,{slots:s}){return()=>x("div",{class:"q-tab-panel",role:"tabpanel"},T(s.default))}}),W=f({name:"QTabPanels",props:{...M,...Z},emits:X,setup(o,{slots:s}){const r=$(),l=G(o,r.proxy.$q),{updatePanelsList:v,getPanelContent:k,panelDirectives:n}=Y(),a=P(()=>"q-tab-panels q-panel-parent"+(l.value===!0?" q-tab-panels--dark q-dark":""));return()=>(v(s),w("div",{class:a.value},k(),"pan",o.swipeable,()=>n.value))}});const ee={class:"text-grey"},ae={class:"text-h6"},te={class:"text-grey"},se={class:"text-h6"},oe={class:"text-grey"},re={class:"text-h6"},le=D({__name:"Notice",setup(o){const s=S(),r=B(),l=F(r.params.tab);console.log(r.params.tab);const v=()=>{s.push("/")};return(k,n)=>(i(),N(H,{class:"column"},{default:t(()=>[e(U,{modelValue:l.value,"onUpdate:modelValue":n[1]||(n[1]=a=>l.value=a),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:t(()=>[e(_,{onClick:n[0]||(n[0]=j(a=>v(),["prevent"]))},{default:t(()=>[e(z,{name:"chevron_left",size:"30px"})]),_:1}),e(_,{name:"notification",label:"\u515A\u52A1\u516C\u5F00"}),e(_,{name:"news",label:"\u653F\u52A1\u516C\u5F00"}),e(_,{name:"country",label:"\u6751\u52A1\u516C\u5F00"})]),_:1},8,["modelValue"]),e(L),e(W,{modelValue:l.value,"onUpdate:modelValue":n[2]||(n[2]=a=>l.value=a),animated:""},{default:t(()=>[e(C,{name:"notification"},{default:t(()=>[(i(!0),c(g,null,b(p(J).list,(a,u)=>(i(),c("div",{key:u,class:"column flex-center"},[m("span",ee,d(a.time),1),e(y,{class:"q-my-md",onClick:q=>p(s).push(`/detail/nots/${u}`)},{default:t(()=>[e(h,{src:"/img/bg/1.jpg"}),e(Q,{class:"q-ma-sm"},{default:t(()=>[m("div",ae,d(a.title),1)]),_:2},1024)]),_:2},1032,["onClick"])]))),128))]),_:1}),e(C,{name:"news"},{default:t(()=>[(i(!0),c(g,null,b(p(K).list,(a,u)=>(i(),c("div",{key:u,class:"column flex-center"},[m("span",te,d(a.time),1),e(y,{class:"q-my-md",onClick:q=>p(s).push(`/detail/news/${u}`)},{default:t(()=>[e(h,{src:"/img/bg/2.jpg"}),e(Q,{class:"q-ma-sm"},{default:t(()=>[m("div",se,d(a.title),1)]),_:2},1024)]),_:2},1032,["onClick"])]))),128))]),_:1}),e(C,{name:"country"},{default:t(()=>[(i(!0),c(g,null,b(p(O).list,(a,u)=>(i(),c("div",{key:u,class:"column flex-center"},[m("span",oe,d(a.time),1),e(y,{class:"q-my-md",style:{width:"100%"},onClick:q=>p(s).push(`/detail/countries/${u}`)},{default:t(()=>[e(h,{src:"/img/bg/3.jpg"}),e(Q,{class:"q-ma-sm"},{default:t(()=>[m("div",re,d(a.title),1)]),_:2},1024)]),_:2},1032,["onClick"])]))),128))]),_:1})]),_:1},8,["modelValue"])]),_:1}))}});var he=V(le,[["__scopeId","data-v-a6a2da5e"]]);export{he as default};
