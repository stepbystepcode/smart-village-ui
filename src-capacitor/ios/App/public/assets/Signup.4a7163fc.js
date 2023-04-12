import{u as j,a as R,Q as k}from"./QInput.f2ae9715.js";import{r as c,d as s,l as m,au as M,C as H,m as K,at as L,q as W,aF as V,F as A,c as Z,Q as G,e as J,f as X,g as F,h as Y,o as ee,i as d,Z as q,W as E,ar as y,ao as ue}from"./index.ac4a4f21.js";import{a as le,u as te}from"./use-dark.9cda36eb.js";import{Q as ae}from"./QForm.202a86f2.js";import{Q as oe}from"./QPage.f4b22777.js";import{u as ne}from"./use-quasar.4e8a04f3.js";import"./uid.42677368.js";import"./focus-manager.387b0375.js";function se(t,v){const e=c(null),r=s(()=>t.disable===!0?null:m("span",{ref:e,class:"no-outline",tabindex:-1}));function f(i){const n=v.value;i!==void 0&&i.type.indexOf("key")===0?n!==null&&document.activeElement!==n&&n.contains(document.activeElement)===!0&&n.focus():e.value!==null&&(i===void 0||n!==null&&n.contains(i.target)===!0)&&e.value.focus()}return{refocusTargetEl:r,refocusTarget:f}}var re={xs:30,sm:35,md:40,lg:50,xl:60};const ie={...te,...L,...j,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:t=>t==="tf"||t==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},de=["update:modelValue"];function ce(t,v){const{props:e,slots:r,emit:f,proxy:i}=W(),{$q:n}=i,b=le(e,n),x=c(null),{refocusTargetEl:p,refocusTarget:g}=se(e,x),I=M(e,re),C=s(()=>e.val!==void 0&&Array.isArray(e.modelValue)),h=s(()=>{const u=V(e.val);return C.value===!0?e.modelValue.findIndex(B=>V(B)===u):-1}),o=s(()=>C.value===!0?h.value>-1:V(e.modelValue)===V(e.trueValue)),a=s(()=>C.value===!0?h.value===-1:V(e.modelValue)===V(e.falseValue)),_=s(()=>o.value===!1&&a.value===!1),l=s(()=>e.disable===!0?-1:e.tabindex||0),S=s(()=>`q-${t} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(b.value===!0?` q-${t}--dark`:"")+(e.dense===!0?` q-${t}--dense`:"")+(e.leftLabel===!0?" reverse":"")),$=s(()=>{const u=o.value===!0?"truthy":a.value===!0?"falsy":"indet",B=e.color!==void 0&&(e.keepColor===!0||(t==="toggle"?o.value===!0:a.value!==!0))?` text-${e.color}`:"";return`q-${t}__inner relative-position non-selectable q-${t}__inner--${u}${B}`}),Q=s(()=>{const u={type:"checkbox"};return e.name!==void 0&&Object.assign(u,{".checked":o.value,"^checked":o.value===!0?"checked":void 0,name:e.name,value:C.value===!0?e.val:e.trueValue}),u}),z=R(Q),N=s(()=>{const u={tabindex:l.value,role:t==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":_.value===!0?"mixed":o.value===!0?"true":"false"};return e.disable===!0&&(u["aria-disabled"]="true"),u});function w(u){u!==void 0&&(A(u),g(u)),e.disable!==!0&&f("update:modelValue",P(),u)}function P(){if(C.value===!0){if(o.value===!0){const u=e.modelValue.slice();return u.splice(h.value,1),u}return e.modelValue.concat([e.val])}if(o.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(a.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function T(u){(u.keyCode===13||u.keyCode===32)&&A(u)}function O(u){(u.keyCode===13||u.keyCode===32)&&w(u)}const U=v(o,_);return Object.assign(i,{toggle:w}),()=>{const u=U();e.disable!==!0&&z(u,"unshift",` q-${t}__native absolute q-ma-none q-pa-none`);const B=[m("div",{class:$.value,style:I.value,"aria-hidden":"true"},u)];p.value!==null&&B.push(p.value);const D=e.label!==void 0?H(r.default,[e.label]):K(r.default);return D!==void 0&&B.push(m("div",{class:`q-${t}__label q-anchor--skip`},D)),m("div",{ref:x,class:S.value,...N.value,onClick:w,onKeydown:T,onKeyup:O},B)}}const me=m("div",{key:"svg",class:"q-checkbox__bg absolute"},[m("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[m("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),m("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var fe=Z({name:"QCheckbox",props:ie,emits:de,setup(t){function v(e,r){const f=s(()=>(e.value===!0?t.checkedIcon:r.value===!0?t.indeterminateIcon:t.uncheckedIcon)||null);return()=>f.value!==null?[m("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[m(G,{class:"q-checkbox__icon",name:f.value})])]:[me]}return ce("checkbox",v)}});const ve={class:"row q-mb-md"},be={class:"row items-center q-mb-sm"},pe={class:"row reverse"},ye=J({__name:"Signup",setup(t){const v=c(""),e=c(""),r=c(""),f=c(),i=c(),n=c(!1),b=ne(),x=c(!1),p=c("\u53D1\u9001\u9A8C\u8BC1\u7801");let g=0;const I=()=>{b.notify({color:"green-4",textColor:"white",icon:"done",message:"\u5DF2\u53D1\u9001\u9A8C\u8BC1\u7801"}),x.value=!0,g=60,p.value=`\u91CD\u65B0\u53D1\u9001 (${g})`;const o=setInterval(()=>{g--,g>0?p.value=`\u91CD\u65B0\u53D1\u9001 (${g})`:(clearInterval(o),p.value="\u91CD\u65B0\u53D1\u9001",b.notify({message:"\u5982\u672A\u6536\u5230\u9A8C\u8BC1\u7801\uFF0C\u8BF7\u91CD\u65B0\u83B7\u53D6"}),x.value=!1)},1e3)},C=o=>/^\d{11}$/.test(o)||"\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E",h=()=>{n.value!==!0?b.notify({color:"red-5",textColor:"white",icon:"warning",message:"\u4F60\u9700\u8981\u5148\u63A5\u53D7\u534F\u8BAE\u548C\u6761\u6B3E"}):e.value!=r.value?b.notify({color:"red-5",textColor:"white",icon:"warning",message:"\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4"}):b.notify({color:"green-4",textColor:"white",icon:"done",message:"\u6CE8\u518C\u6210\u529F"})};return(o,a)=>{const _=Y("router-link");return ee(),X(oe,{padding:"",class:"bg-white q-pa-lg",style:{"border-top-left-radius":"20px","border-top-right-radius":"20px"}},{default:F(()=>[d(ae,{class:"column q-pb-md",onSubmit:h},{default:F(()=>[d(k,{"lazy-rules":"ondemand",outlined:"",modelValue:v.value,"onUpdate:modelValue":a[0]||(a[0]=l=>v.value=l),label:"\u7528\u6237\u540D",dense:!1,color:"teal",class:"q-pb-lg",rules:[l=>!!l||"\u8BF7\u8F93\u5165\u5FC5\u586B\u9879"]},null,8,["modelValue","rules"]),d(k,{"lazy-rules":"ondemand",outlined:"",modelValue:f.value,"onUpdate:modelValue":a[1]||(a[1]=l=>f.value=l),label:"\u624B\u673A\u53F7",dense:!1,color:"teal",class:"q-pb-lg",rules:[C]},null,8,["modelValue","rules"]),q("div",ve,[d(k,{"lazy-rules":"ondemand",outlined:"",modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=l=>i.value=l),label:"\u9A8C\u8BC1\u7801",dense:!1,color:"teal",class:"q-mr-lg",style:{flex:"1"},rules:[l=>!!l||"\u8BF7\u8F93\u5165\u5FC5\u586B\u9879"]},null,8,["modelValue","rules"]),d(E,{color:"secondary",style:{height:"55px"},disable:x.value,onClick:I},{default:F(()=>[y(ue(p.value),1)]),_:1},8,["disable"])]),d(k,{"lazy-rules":"ondemand",outlined:"",modelValue:e.value,"onUpdate:modelValue":a[3]||(a[3]=l=>e.value=l),label:"\u5BC6\u7801",type:"password",color:"teal",dense:!1,class:"q-pb-lg",rules:[l=>!!l||"\u8BF7\u8F93\u5165\u5FC5\u586B\u9879"]},null,8,["modelValue","rules"]),d(k,{"lazy-rules":"ondemand",outlined:"",modelValue:r.value,"onUpdate:modelValue":a[4]||(a[4]=l=>r.value=l),label:"\u786E\u8BA4\u5BC6\u7801",type:"password",color:"teal",dense:!1,class:"q-pb-lg",rules:[l=>!!l||"\u8BF7\u8F93\u5165\u5FC5\u586B\u9879"]},null,8,["modelValue","rules"]),q("div",be,[d(fe,{modelValue:n.value,"onUpdate:modelValue":a[5]||(a[5]=l=>n.value=l)},null,8,["modelValue"]),y("\u6211\u540C\u610F\u300A\u9690\u79C1\u653F\u7B56\u300B\u548C\u300A\u7528\u6237\u534F\u8BAE\u300B")]),d(E,{color:"secondary",size:"md",type:"submit"},{default:F(()=>[y("\u6CE8\u518C")]),_:1})]),_:1}),q("div",pe,[q("div",null,[y(" \u5DF2\u7ECF\u6CE8\u518C\uFF1F"),d(_,{to:"/user/login"},{default:F(()=>[y("\u53BB\u767B\u5F55")]),_:1})])])]),_:1})}}});export{ye as default};