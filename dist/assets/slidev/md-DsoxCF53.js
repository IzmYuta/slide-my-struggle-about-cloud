import{d as p,z as m,o as i,b as f,e as n,f as _,h as v,c as $,k as h,q as k,s as g,B as l}from"../modules/vue-CHHLRvXz.js";import{u,f as x}from"./context-DdPWbd0R.js";import"../index-OWI0fMku.js";import"../modules/shiki-CHb-23XF.js";function c(e){return e.startsWith("/")?"/"+e.slice(1):e}function y(e,s=!1){const o=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),t={background:o?e:void 0,color:e&&!o?"white":void 0,backgroundImage:o?void 0:e?s?`linear-gradient(#0005, #0008), url(${c(e)})`:`url("${c(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const B={class:"my-auto w-full"},C=p({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){u();const s=e,o=m(()=>y(s.background,!0));return(t,r)=>(i(),f("div",{class:"slidev-layout cover text-center",style:v(o.value)},[n("div",B,[_(t.$slots,"default")])],4))}}),A={__name:"slides.md__slidev_1",setup(e){const{$slidev:s,$nav:o,$clicksContext:t,$clicks:r,$page:b,$renderContext:z,$frontmatter:d}=u();return t.setup(),(P,a)=>(i(),$(C,k(g(l(x)(l(d),0))),{default:h(()=>a[0]||(a[0]=[n("h1",null,"自宅クラウドを作ってみて",-1),n("p",null,"泉 祐汰",-1)])),_:1},16))}};export{A as default};
