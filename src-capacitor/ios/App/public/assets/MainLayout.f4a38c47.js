import{Q as i,a as p}from"./QLayout.5b19ffc4.js";import{Q as c}from"./QSeparator.cfcd0350.js";import{c as m,u as f,a as v,d as _,w as d,e as b,r as h,f as Q,g as l,h as k,o as x,i as e}from"./index.ac4a4f21.js";import{u as T,a as g,b as w,Q as R}from"./QTabs.0b0cbed3.js";import{Q as L}from"./QFooter.d963448a.js";import"./scroll.5bce9adf.js";import"./QResizeObserver.3a4f10fc.js";import"./use-dark.9cda36eb.js";import"./uid.42677368.js";import"./use-timeout.fe1320fc.js";var n=m({name:"QRouteTab",props:{...f,...T},emits:g,setup(t,{slots:a,emit:u}){const o=v({useDisableForRouterLinkProps:!1}),{renderTab:s,$tabs:r}=w(t,a,u,{exact:_(()=>t.exact),...o});return d(()=>`${t.name} | ${t.exact} | ${(o.resolvedLink.value||{}).href}`,()=>{r.verifyRouteModel()}),()=>s(o.linkTag.value,o.linkAttrs.value)}});const j=b({__name:"MainLayout",setup(t){const a=h("home");return(u,o)=>{const s=k("router-view");return x(),Q(i,{view:"hHh lpR fFf"},{default:l(()=>[e(p,null,{default:l(()=>[e(s)]),_:1}),e(L,{class:"bg-white fixed"},{default:l(()=>[e(c),e(R,{dense:"",align:"justify",modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=r=>a.value=r),"active-class":"text-teal",class:"text-black"},{default:l(()=>[e(n,{ripple:!1,"no-caps":"",name:"home",to:"/",icon:a.value=="home"?"home":"o_home",label:"\u9996\u9875"},null,8,["icon"]),e(n,{ripple:!1,"no-caps":"",name:"environment",to:"/environment",icon:a.value=="environment"?"campaign":"o_campaign",label:"\u73AF\u5883"},null,8,["icon"]),e(n,{ripple:!1,"no-caps":"",name:"shop",to:"/shop",icon:a.value=="shop"?"people":"o_people",label:"\u7535\u5546"},null,8,["icon"]),e(n,{ripple:!1,"no-caps":"",name:"profile",to:"/profile",icon:a.value=="profile"?"account_circle":"o_account_circle",label:"\u6211\u7684"},null,8,["icon"])]),_:1},8,["modelValue"])]),_:1})]),_:1})}}});export{j as default};
