import{c as z,at as E,au as F,d as n,U as L,l as r,Q as f,av as N,R as A,q as P,F as j,_ as T,e as K,X as O,r as U,f as p,g as m,o,Z as s,i as h,al as k,an as B,a0 as Q,ao as v,ar as q,am as w,a1 as M,a2 as X}from"./index.ac4a4f21.js";import{Q as Z}from"./QInput.f2ae9715.js";import{Q as G}from"./QToolbar.35fb0df2.js";import{Q as H}from"./QImg.a2f1601a.js";import{u as J,a as W}from"./use-dark.9cda36eb.js";import{Q as Y}from"./QSeparator.cfcd0350.js";import{Q as ee}from"./QPage.f4b22777.js";import{g as I}from"./db.9816f83f.js";import"./uid.42677368.js";import"./focus-manager.387b0375.js";const te={xs:8,sm:10,md:14,lg:20,xl:24};var V=z({name:"QChip",props:{...J,...E,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:b,emit:a}){const{proxy:{$q:i}}=P(),_=W(e,i),c=F(e,te),l=n(()=>e.selected===!0||e.icon!==void 0),u=n(()=>e.selected===!0?e.iconSelected||i.iconSet.chip.selected:e.icon),d=n(()=>e.iconRemove||i.iconSet.chip.remove),g=n(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),R=n(()=>{const t=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(t?` text-${t} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(g.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(_.value===!0?" q-chip--dark q-dark":"")}),y=n(()=>{const t=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},x={...t,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||i.lang.label.remove};return{chip:t,remove:x}});function D(t){t.keyCode===13&&S(t)}function S(t){e.disable||(a("update:selected",!e.selected),a("click",t))}function C(t){(t.keyCode===void 0||t.keyCode===13)&&(j(t),e.disable===!1&&(a("update:modelValue",!1),a("remove")))}function $(){const t=[];g.value===!0&&t.push(r("div",{class:"q-focus-helper"})),l.value===!0&&t.push(r(f,{class:"q-chip__icon q-chip__icon--left",name:u.value}));const x=e.label!==void 0?[r("div",{class:"ellipsis"},[e.label])]:void 0;return t.push(r("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},N(b.default,x))),e.iconRight&&t.push(r(f,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&t.push(r(f,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:d.value,...y.value.remove,onClick:C,onKeyup:C})),t}return()=>{if(e.modelValue===!1)return;const t={class:R.value,style:c.value};return g.value===!0&&Object.assign(t,y.value.chip,{onClick:S,onKeyup:D}),L("div",t,$(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[A,e.ripple]])}}});const ae=e=>(M("data-v-11056fc9"),e=e(),X(),e),le={class:"fixed",style:{"z-index":"99"}},se={class:"column no-padding",style:{"margin-top":"60px"}},oe=["onClick"],ne={class:"column q-pa-sm"},ie={class:"text-h6"},ce={class:"text-red text-h5",style:{"font-weight":"500"}},re=ae(()=>s("span",{style:{"font-size":"17px"}},"\uFFE5",-1)),ue={class:"text-grey q-ml-sm"},de=K({__name:"Shop",setup(e){const b=O(),a=U(""),i=n(()=>a.value?I.list.filter(_=>_.name.includes(a.value)):I.list);return(_,c)=>(o(),p(ee,{class:"column"},{default:m(()=>[s("header",le,[h(G,{class:"text-white rounded-borders",style:{background:"#ccc"}},{default:m(()=>[h(Z,{class:"search",dark:"","hide-bottom-space":"",borderless:"",dense:"",modelValue:a.value,"onUpdate:modelValue":c[1]||(c[1]=l=>a.value=l),"input-class":"text-left text-black",style:{background:"#fff","border-radius":"400px"}},{append:m(()=>[a.value===""?(o(),p(f,{key:0,class:"q-pr-md text-grey",name:"search"})):(o(),p(f,{key:1,name:"clear",class:"cursor-pointer q-pr-md text-grey",onClick:c[0]||(c[0]=l=>a.value="")}))]),_:1},8,["modelValue"])]),_:1})]),s("ul",se,[(o(!0),k(w,null,B(Q(i),(l,u)=>(o(),k("li",{class:"row no-wrap",key:u,onClick:d=>Q(b).push(`/product/${u+1}`)},[h(H,{style:{"min-width":"50px","max-width":"120px","border-radius":"10px"},height:"120px",class:"q-my-md q-mx-sm",src:`/img/goods/${u+1}.jpg`},null,8,["src"]),s("div",ne,[s("span",ie,v(l.name),1),s("div",null,[s("span",ce,[re,q(v(l.price),1)]),s("span",ue,v(l.sales)+"\u4EBA\u4ED8\u6B3E",1)]),s("div",null,[(o(!0),k(w,null,B(l.tags,d=>(o(),p(V,{dense:"",key:d},{default:m(()=>[q(v(d),1)]),_:2},1024))),128))]),s("div",null,[h(V,{dense:"",class:""},{default:m(()=>[q(v(l.shop)+" \u8FDB\u5E97 >",1)]),_:2},1024)])])],8,oe))),128)),h(Y)])]),_:1}))}});var qe=T(de,[["__scopeId","data-v-11056fc9"]]);export{qe as default};
