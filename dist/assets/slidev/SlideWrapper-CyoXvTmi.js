import{d as p,z as r,ai as t,t as c,ac as f,o as l,b as v,l as d,B as s,c as C,ar as _,i as b,h as x}from"../modules/vue-BbXOJBVU.js";import{a7 as S,a8 as j,a9 as y,aa as z,ab as B,z as g,ac as h,B as k,_ as G}from"../index-BC6X3DO4.js";const W={render:()=>[]},D={render:()=>[]},O={render:()=>[]},R={render:()=>[]},$=["data-slidev-no"],q=p({__name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"slide"},route:{type:Object,required:!0}},setup(i){const e=i,o=r(()=>{var a,n;return((n=(a=e.route.meta)==null?void 0:a.slide)==null?void 0:n.frontmatter.zoom)??1});t(S,e.route),t(j,e.route.meta.slide.frontmatter),t(y,c(e.route.no)),t(z,c(e.renderContext)),t(B,f(e,"clicksContext")),t(h,o);const u=r(()=>o.value===1?void 0:{width:`${100/o.value}%`,height:`${100/o.value}%`,transformOrigin:"top left",transform:`scale(${o.value})`}),m=r(()=>({...u.value,"user-select":g.selectable?void 0:"none"}));return(a,n)=>(l(),v("div",{"data-slidev-no":e.route.no,class:b(s(k)(i.route,["slide","presenter"].includes(e.renderContext)?"":"disable-view-transition")),style:x(m.value)},[d(s(R)),(l(),C(_(e.route.component))),d(s(O))],14,$))}}),E=G(q,[["__scopeId","data-v-02abb127"]]);export{D as G,E as S,W as a};
