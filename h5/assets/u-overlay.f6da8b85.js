import{_ as o}from"./u-transition.589ae8d1.js";import{d as t,o as e,c as r,w as i,k as s}from"./index-4f0c5e1d.js";import{r as a}from"./uni-app.es.fcad82c0.js";import{m as n,a as u}from"./mixin.d0c91ebc.js";import{_ as l}from"./_plugin-vue_export-helper.1b428a4d.js";const p=l({name:"u-overlay",mixins:[n,u,{props:{show:{type:Boolean,default:()=>uni.$u.props.overlay.show},zIndex:{type:[String,Number],default:()=>uni.$u.props.overlay.zIndex},duration:{type:[String,Number],default:()=>uni.$u.props.overlay.duration},opacity:{type:[String,Number],default:()=>uni.$u.props.overlay.opacity}}}],computed:{overlayStyle(){const o={position:"fixed",top:0,left:0,right:0,zIndex:this.zIndex,bottom:0,"background-color":`rgba(0, 0, 0, ${this.opacity})`};return uni.$u.deepMerge(o,uni.$u.addStyle(this.customStyle))}},emits:["click"],methods:{clickHandler(){this.$emit("click")}}},[["render",function(n,u,l,p,d,c){const m=a(t("u-transition"),o);return e(),r(m,{show:n.show,"custom-class":"u-overlay",duration:n.duration,"custom-style":c.overlayStyle,onClick:c.clickHandler},{default:i((()=>[s(n.$slots,"default",{},void 0,!0)])),_:3},8,["show","duration","custom-style","onClick"])}],["__scopeId","data-v-157b6490"]]);export{p as _};