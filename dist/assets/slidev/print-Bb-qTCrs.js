import{d as _,aj as u,z as h,o as n,b as l,e as t,x as s,B as c,F as f,af as g,a9 as v,l as x,g as b}from"../modules/vue-CrE8HWQE.js";import{a as y,u as N,y as m}from"../index-DjL3fltt.js";import{_ as k}from"./NoteDisplay.vue_vue_type_style_index_0_lang-C7xUXcNk.js";import"../modules/shiki-BGWGwG7D.js";const w={id:"page-root"},B={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},V={class:"opacity-50"},H={class:"text-lg"},S={class:"font-bold flex gap-2"},j={class:"opacity-50"},z={key:0,class:"border-main mb-8"},A=_({__name:"print",setup(C){const{slides:d,total:p}=y();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),N({title:`Notes - ${m.title}`});const i=h(()=>d.value.map(o=>{var a;return(a=o.meta)==null?void 0:a.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,a)=>(n(),l("div",w,[t("div",B,[t("div",L,[t("h1",T,s(c(m).title),1),t("div",V,s(new Date().toLocaleString()),1)]),(n(!0),l(f,null,g(i.value,(e,r)=>(n(),l("div",{key:r,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",H,[t("div",S,[t("div",j,s(e==null?void 0:e.no)+"/"+s(c(p)),1),v(" "+s(e==null?void 0:e.title)+" ",1),a[0]||(a[0]=t("div",{class:"flex-auto"},null,-1))])]),x(k,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),r<i.value.length-1?(n(),l("hr",z)):b("v-if",!0)]))),128))])]))}});export{A as default};
