import{o as t,c as i,n as o,i as r}from"./index-4f0c5e1d.js";import{m as n,a}from"./mixin.d0c91ebc.js";import{_ as e}from"./_plugin-vue_export-helper.1b428a4d.js";const p=e({name:"u-gap",mixins:[n,a,{props:{bgColor:{type:String,default:()=>uni.$u.props.gap.bgColor},height:{type:[String,Number],default:()=>uni.$u.props.gap.height},marginTop:{type:[String,Number],default:()=>uni.$u.props.gap.marginTop},marginBottom:{type:[String,Number],default:()=>uni.$u.props.gap.marginBottom}}}],computed:{gapStyle(){const t={backgroundColor:this.bgColor,height:uni.$u.addUnit(this.height),marginTop:uni.$u.addUnit(this.marginTop),marginBottom:uni.$u.addUnit(this.marginBottom)};return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}}},[["render",function(n,a,e,p,u,s){const g=r;return t(),i(g,{class:"u-gap",style:o([s.gapStyle])},null,8,["style"])}],["__scopeId","data-v-6a1e74c4"]]);export{p as _};