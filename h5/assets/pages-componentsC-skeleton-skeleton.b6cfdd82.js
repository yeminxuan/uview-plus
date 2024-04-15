import{l as t,m as e,f as a,o as s,c as l,w as i,q as o,n,p as u,a as d,b as r,F as _,r as c,h,i as p,j as m,k as f,d as w,e as g}from"./index-5f0950f1.js";import{_ as k}from"./_plugin-vue_export-helper.1b428a4d.js";import{r as y}from"./uni-app.es.5e4d89a0.js";import{_ as b}from"./u-switch.61cd8893.js";import{_ as v}from"./u-gap.ee0e4c29.js";import{_ as x}from"./u-text.7f78111a.js";import{_ as $}from"./logo.e6a56f74.js";import"./u-loading-icon.666fa9db.js";import"./u-icon.a35f76a2.js";import"./u-link.5ed13e39.js";const W=k({name:"u-skeleton",mixins:[e,a,{props:{loading:{type:Boolean,default:()=>t.skeleton.loading},animate:{type:Boolean,default:()=>t.skeleton.animate},rows:{type:[String,Number],default:()=>t.skeleton.rows},rowsWidth:{type:[String,Number,Array],default:()=>t.skeleton.rowsWidth},rowsHeight:{type:[String,Number,Array],default:()=>t.skeleton.rowsHeight},title:{type:Boolean,default:()=>t.skeleton.title},titleWidth:{type:[String,Number],default:()=>t.skeleton.titleWidth},titleHeight:{type:[String,Number],default:()=>t.skeleton.titleHeight},avatar:{type:Boolean,default:()=>t.skeleton.avatar},avatarSize:{type:[String,Number],default:()=>t.skeleton.avatarSize},avatarShape:{type:String,default:()=>t.skeleton.avatarShape}}}],data:()=>({width:0}),watch:{loading(){this.getComponentWidth()}},computed:{rowsArray(){/%$/.test(this.rowsHeight)&&uni.$u.error("rowsHeight参数不支持百分比单位");const t=[];for(let e=0;e<this.rows;e++){let a={},s=uni.$u.test.array(this.rowsWidth)?this.rowsWidth[e]||(e===this.rows-1?"70%":"100%"):e===this.rows-1?"70%":this.rowsWidth,l=uni.$u.test.array(this.rowsHeight)?this.rowsHeight[e]||"18px":this.rowsHeight;a.marginTop=this.title||0!==e?this.title&&0===e?"20px":"12px":0,/%$/.test(s)?a.width=uni.$u.addUnit(this.width*parseInt(s)/100):a.width=uni.$u.addUnit(s),a.height=uni.$u.addUnit(l),t.push(a)}return t},uTitleWidth(){let t=0;return t=/%$/.test(this.titleWidth)?uni.$u.addUnit(this.width*parseInt(this.titleWidth)/100):uni.$u.addUnit(this.titleWidth),uni.$u.addUnit(t)}},mounted(){this.init()},methods:{init(){this.getComponentWidth()},async setNvueAnimation(){},async getComponentWidth(){await uni.$u.sleep(20),this.$uGetRect(".u-skeleton__wrapper__content").then((t=>{this.width=t.width}))}}},[["render",function(t,e,a,m,f,w){const g=p;return s(),l(g,{class:"u-skeleton"},{default:i((()=>[t.loading?(s(),l(g,{key:0,class:"u-skeleton__wrapper",ref:"u-skeleton__wrapper",style:{display:"flex","flex-direction":"row"}},{default:i((()=>[t.avatar?(s(),l(g,{key:0,class:o(["u-skeleton__wrapper__avatar",[`u-skeleton__wrapper__avatar--${t.avatarShape}`,t.animate&&"animate"]]),style:n({height:t.$u.addUnit(t.avatarSize),width:t.$u.addUnit(t.avatarSize)})},null,8,["class","style"])):u("",!0),d(g,{class:"u-skeleton__wrapper__content",ref:"u-skeleton__wrapper__content",style:{flex:"1"}},{default:i((()=>[t.title?(s(),l(g,{key:0,class:o(["u-skeleton__wrapper__content__title",[t.animate&&"animate"]]),style:n({width:w.uTitleWidth,height:t.$u.addUnit(t.titleHeight)})},null,8,["style","class"])):u("",!0),(s(!0),r(_,null,c(w.rowsArray,((e,a)=>(s(),l(g,{class:o(["u-skeleton__wrapper__content__rows",[t.animate&&"animate"]]),key:a,style:n({width:e.width,height:e.height,marginTop:e.marginTop})},null,8,["class","style"])))),128))])),_:1},512)])),_:1},512)):h(t.$slots,"default",{key:1},void 0,!0)])),_:3})}],["__scopeId","data-v-ce0e186f"]]);const S=k({data:()=>({switch1:!0,switch2:!1})},[["render",function(t,e,a,o,n,u){const r=f,_=y(w("up-skeleton"),W),c=p,h=y(w("up-switch"),b),k=y(w("up-gap"),v),S=g,H=y(w("up-text"),x);return s(),l(c,{class:"u-page"},{default:i((()=>[d(c,{class:"u-demo-block"},{default:i((()=>[d(r,{class:"u-demo-block__title"},{default:i((()=>[m("基础使用")])),_:1}),d(c,{class:"u-demo-block__content"},{default:i((()=>[d(_,{rows:"3",title:"",loading:""})])),_:1})])),_:1}),d(c,{class:"u-demo-block"},{default:i((()=>[d(r,{class:"u-demo-block__title"},{default:i((()=>[m("自定义段落行数")])),_:1}),d(c,{class:"u-demo-block__content"},{default:i((()=>[d(_,{rows:"2",title:"",loading:""})])),_:1})])),_:1}),d(c,{class:"u-demo-block"},{default:i((()=>[d(r,{class:"u-demo-block__title"},{default:i((()=>[m("设置段落宽度")])),_:1}),d(c,{class:"u-demo-block__content"},{default:i((()=>[d(_,{rows:"2",title:"",rowsWidth:["100%","35%"],loading:""})])),_:1})])),_:1}),d(c,{class:"u-demo-block"},{default:i((()=>[d(r,{class:"u-demo-block__title"},{default:i((()=>[m("设置段落高度")])),_:1}),d(c,{class:"u-demo-block__content"},{default:i((()=>[d(_,{rows:"3",title:"",rowsWidth:["100%","100%","100%"],rowsHeight:["18px","18px","80px"],loading:""})])),_:1})])),_:1}),d(c,{class:"u-demo-block"},{default:i((()=>[d(r,{class:"u-demo-block__title"},{default:i((()=>[m("是否开启动画")])),_:1}),d(h,{modelValue:n.switch1,"onUpdate:modelValue":e[0]||(e[0]=t=>n.switch1=t),space:"2",inactiveColor:"#e6e6e6"},null,8,["modelValue"]),d(k,{height:"15",bgColor:"#fff"}),d(c,{class:"u-demo-block__content"},{default:i((()=>[d(_,{animate:n.switch1,rows:"3",title:"",loading:""},null,8,["animate"])])),_:1})])),_:1}),d(c,{class:"u-demo-block"},{default:i((()=>[d(r,{class:"u-demo-block__title"},{default:i((()=>[m("展示头像")])),_:1}),d(k,{height:"15",bgColor:"#fff"}),d(c,{class:"u-demo-block__content"},{default:i((()=>[d(_,{animate:n.switch1,rows:"3",title:"",loading:"",avatar:""},null,8,["animate"])])),_:1})])),_:1}),d(c,{class:"u-demo-block"},{default:i((()=>[d(r,{class:"u-demo-block__title"},{default:i((()=>[m("切换状态")])),_:1}),d(h,{modelValue:n.switch2,"onUpdate:modelValue":e[1]||(e[1]=t=>n.switch2=t),space:"2",inactiveColor:"#e6e6e6"},null,8,["modelValue"]),d(k,{height:"15",bgColor:"#fff"}),d(c,{class:"u-demo-block__content"},{default:i((()=>[d(_,{rows:"2",title:"",loading:n.switch2,avatar:"",rowsHeight:"14"},{default:i((()=>[d(c,null,{default:i((()=>[d(c,{class:"u-skeleton-slot"},{default:i((()=>[d(S,{src:$,class:"u-skeleton-slot__image"}),d(c,{class:"u-skeleton-slot__content"},{default:i((()=>[d(H,{text:"利剑出鞘,一统江湖",type:"main",size:"16"}),d(H,{type:"tips",size:"14",customStyle:"margin-top: 5px",text:"众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用"})])),_:1})])),_:1})])),_:1})])),_:1},8,["loading"])])),_:1}),d(k,{height:"50",bgColor:"transparent"})])),_:1})])),_:1})}],["__scopeId","data-v-979cdce2"]]);export{S as default};