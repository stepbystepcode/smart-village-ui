import{_ as E,e as b,X as A,r as h,A as F,al as m,Z as o,i as n,g as l,am as g,an as Q,a0 as t,ao as u,ap as q,f as p,o as a,$,Q as f,aq as V,W as z,ar as x}from"./index.ac4a4f21.js";import{Q as I}from"./QInput.f2ae9715.js";import{Q as N}from"./QToolbar.35fb0df2.js";import{Q as _}from"./QCard.cc47cd1c.js";import{a as C}from"./axios.f1f32898.js";import{u as T}from"./use-quasar.4e8a04f3.js";import"./use-dark.9cda36eb.js";import"./uid.42677368.js";import"./focus-manager.387b0375.js";const L={class:"column bg"},P={class:"grid text-white"},S={class:"text-center flex-center column q-pa-sm"},j={key:0,class:"bg-white q-py-sm q-pl-sm",style:{display:"block","border-left":"6px solid var(--q-primary)"}},R={class:"row"},U={class:"text-h4"},W={class:"text-h6"},X=b({__name:"Environment",setup(Z){const D=A(),d=h(""),w=T(),B=h([{name:"\u571F\u58E4\u68C0\u6D4B",icon:"sensors",color:"#5C8BD9",to:"/test"},{name:"\u4F5C\u7269\u63A8\u8350",icon:"eco",color:"#F2C037",to:"/test"},{name:"\u79CD\u5B50\u8D2D\u4E70",icon:"shopping_cart",color:"#9C4DCC",to:"/test"},{name:"\u80A5\u529B\u6C34\u5E73",icon:"compost",color:"#E57373",to:"/test"},{name:"\u79CD\u690D\u6280\u672F",icon:"webhook",color:"#66BB6A",to:"/test"},{name:"\u673A\u68B0\u62DB\u52DF",icon:"settings_suggest",color:"#616161",to:"/test"}]);let s=F({adcode:0,province:"",city:"",district:"",township:""}),i=F({});const y=async()=>{try{const c=await new Promise((v,k)=>{navigator.geolocation.getCurrentPosition(v,k)});s=(await C.get(`https://restapi.amap.com/v3/geocode/regeo?key=4cbce89fa07f40991f33f45f0c70f25a&location=${c.coords.longitude.toFixed(6)},${c.coords.latitude.toFixed(6)}&poitype=&radius=&extensions=all&batch=false&roadlevel=0`)).data.regeocode.addressComponent;const e=await C.get(`https://restapi.amap.com/v3/weather/weatherInfo?city=${s.adcode}&key=4cbce89fa07f40991f33f45f0c70f25a`);i.value=e.data.lives[0]}catch(c){w.notify({color:"red-5",textColor:"white",icon:"warning",message:"\u83B7\u53D6\u4F4D\u7F6E\u5931\u8D25\uFF0C\u8BF7\u540C\u610F\u4F4D\u7F6E\u6743\u9650\u5E76\u91CD\u8BD5\uFF0C\u9519\u8BEF\u4FE1\u606F\uFF1A"+c}),setTimeout(()=>{y()},5e3)}};return y(),(c,r)=>(a(),m(g,null,[o("header",null,[n(N,{class:"bg-secondary text-white rounded-borders"},{default:l(()=>[n($,{class:"q-ma-sm",size:"40px",color:"teal","text-color":"white",icon:"person",onClick:r[0]||(r[0]=e=>t(D).push("/profile"))}),n(I,{dark:"",dense:"",standout:"",modelValue:d.value,"onUpdate:modelValue":r[2]||(r[2]=e=>d.value=e),"input-class":"text-left"},{append:l(()=>[d.value===""?(a(),p(f,{key:0,name:"search"})):(a(),p(f,{key:1,name:"clear",class:"cursor-pointer",onClick:r[1]||(r[1]=e=>d.value="")}))]),_:1},8,["modelValue"])]),_:1})]),o("div",L,[o("div",P,[(a(!0),m(g,null,Q(B.value,(e,v)=>(a(),m("div",{key:v,class:"q-ma-sm"},[n(z,{flat:"",style:V(`background:${e.color}`),to:e.to},{default:l(()=>[o("div",S,[n(f,{name:e.icon,size:"40px"},null,8,["name"]),o("span",null,u(e.name),1)])]),_:2},1032,["style","to"])]))),128))]),t(s)?(a(),m("span",j," \u5F53\u524D\u5B9A\u4F4D\uFF1A "+u(t(s).province)+u(t(s).city)+u(t(s).district)+u(t(s).township),1)):q("",!0),o("div",R,[t(i).value?(a(),p(_,{key:0,flat:"",class:"q-ma-sm card row justify-between",style:{flex:"1"}},{default:l(()=>[o("div",null,[o("div",U,u(t(i).value.temperature)+"\u2103",1),o("div",W,u(t(i).value.weather),1)]),n(f,{size:"xl",name:`img:/svg/weather/${t(i).value.weather}.svg`},null,8,["name"])]),_:1})):(a(),p(_,{key:1,style:{flex:"1"},class:"card"},{default:l(()=>[x("\u52A0\u8F7D\u4E2D......")]),_:1})),n(_,{flat:"",class:"card text-h6",style:{flex:"1"}},{default:l(()=>[x("\u4ECA\u65E5\u79CD\u690D\u5C0F\u5999\u62DB")]),_:1})])])],64))}});var oe=E(X,[["__scopeId","data-v-23d695de"]]);export{oe as default};