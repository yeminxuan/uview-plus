import{o as e,c as t,w as o,g as u,t as a,l as s,n as r,f as i,h as l}from"./index-4f0c5e1d.js";import{m as n,a as p}from"./mixin.d0c91ebc.js";import{_ as d}from"./_plugin-vue_export-helper.1b428a4d.js";const b=d({name:"u-badge",mixins:[n,{props:{isDot:{type:Boolean,default:()=>uni.$u.props.badge.isDot},value:{type:[Number,String],default:()=>uni.$u.props.badge.value},modelValue:{type:[Number,String],default:()=>uni.$u.props.badge.modelValue},show:{type:Boolean,default:()=>uni.$u.props.badge.show},max:{type:[Number,String],default:()=>uni.$u.props.badge.max},type:{type:String,default:()=>uni.$u.props.badge.type},showZero:{type:Boolean,default:()=>uni.$u.props.badge.showZero},bgColor:{type:[String,null],default:()=>uni.$u.props.badge.bgColor},color:{type:[String,null],default:()=>uni.$u.props.badge.color},shape:{type:String,default:()=>uni.$u.props.badge.shape},numberType:{type:String,default:()=>uni.$u.props.badge.numberType},offset:{type:Array,default:()=>uni.$u.props.badge.offset},inverted:{type:Boolean,default:()=>uni.$u.props.badge.inverted},absolute:{type:Boolean,default:()=>uni.$u.props.badge.absolute}}},p],computed:{boxStyle:()=>({}),badgeStyle(){const e={};if(this.color&&(e.color=this.color),this.bgColor&&!this.inverted&&(e.backgroundColor=this.bgColor),this.absolute&&(e.position="absolute",this.offset.length)){const t=this.offset[0],o=this.offset[1]||t;e.top=uni.$u.addUnit(t),e.right=uni.$u.addUnit(o)}return e},showValue(){switch(this.numberType){case"overflow":return Number(this.value)>Number(this.max)?this.max+"+":this.value;case"ellipsis":return Number(this.value)>Number(this.max)?"...":this.value;case"limit":return Number(this.value)>999?Number(this.value)>=9999?Math.floor(this.value/1e4*100)/100+"w":Math.floor(this.value/1e3*100)/100+"k":this.value;default:return Number(this.value)}}}},[["render",function(n,p,d,b,h,g){const f=l;return n.show&&(0!==Number(n.value)||n.showZero||n.isDot)?(e(),t(f,{key:0,class:s([[n.isDot?"u-badge--dot":"u-badge--not-dot",n.inverted&&"u-badge--inverted","horn"===n.shape&&"u-badge--horn",`u-badge--${n.type}${n.inverted?"--inverted":""}`],"u-badge"]),style:r([n.$u.addStyle(n.customStyle),g.badgeStyle])},{default:o((()=>[u(a(n.isDot?"":g.showValue),1)])),_:1},8,["class","style"])):i("v-if",!0)}],["__scopeId","data-v-c89051f5"]]);export{b as _};