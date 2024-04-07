import{d as t,o as e,c as o,w as s,a as l,l as i,p as a,n as r,k as n,f as p,g as u,t as c,e as g,i as d,h as f}from"./index-4f0c5e1d.js";import{_ as m}from"./u-icon.e9ca9d71.js";import{r as y}from"./uni-app.es.fcad82c0.js";import{_ as h}from"./u-transition.589ae8d1.js";import{m as $,a as _}from"./mixin.d0c91ebc.js";import{_ as C}from"./_plugin-vue_export-helper.1b428a4d.js";const b=C({name:"u-tag",mixins:[$,_,{props:{type:{type:String,default:()=>uni.$u.props.tag.type},disabled:{type:[Boolean,String],default:()=>uni.$u.props.tag.disabled},size:{type:String,default:()=>uni.$u.props.tag.size},shape:{type:String,default:()=>uni.$u.props.tag.shape},text:{type:[String,Number],default:()=>uni.$u.props.tag.text},bgColor:{type:String,default:()=>uni.$u.props.tag.bgColor},color:{type:String,default:()=>uni.$u.props.tag.color},borderColor:{type:String,default:()=>uni.$u.props.tag.borderColor},closeColor:{type:String,default:()=>uni.$u.props.tag.closeColor},name:{type:[String,Number],default:()=>uni.$u.props.tag.name},plainFill:{type:Boolean,default:()=>uni.$u.props.tag.plainFill},plain:{type:Boolean,default:()=>uni.$u.props.tag.plain},closable:{type:Boolean,default:()=>uni.$u.props.tag.closable},show:{type:Boolean,default:()=>uni.$u.props.tag.show},icon:{type:String,default:()=>uni.$u.props.tag.icon}}}],data:()=>({}),computed:{style(){const t={};return this.bgColor&&(t.backgroundColor=this.bgColor),this.color&&(t.color=this.color),this.borderColor&&(t.borderColor=this.borderColor),t},textColor(){const t={};return this.color&&(t.color=this.color),t},imgStyle(){const t="large"===this.size?"17px":"medium"===this.size?"15px":"13px";return{width:t,height:t}},closeSize(){return"large"===this.size?15:"medium"===this.size?13:12},iconSize(){return"large"===this.size?21:"medium"===this.size?19:16},elIconColor(){return this.iconColor?this.iconColor:this.plain?this.type:"#ffffff"}},emits:["click","close"],methods:{closeHandler(){this.$emit("close",this.name)},clickHandler(){this.$emit("click",this.name)}}},[["render",function($,_,C,b,x,z){const S=g,k=y(t("u-icon"),m),w=d,j=f,v=y(t("u-transition"),h);return e(),o(v,{mode:"fade",show:$.show,style:{display:"inline-flex"}},{default:s((()=>[l(w,{class:"u-tag-wrapper"},{default:s((()=>[l(w,{class:i(["u-tag",[`u-tag--${$.shape}`,!$.plain&&`u-tag--${$.type}`,$.plain&&`u-tag--${$.type}--plain`,`u-tag--${$.size}`,$.plain&&$.plainFill&&`u-tag--${$.type}--plain--fill`]]),onClick:a(z.clickHandler,["stop"]),style:r([{marginRight:$.closable?"10px":0,marginTop:$.closable?"10px":0},z.style])},{default:s((()=>[n($.$slots,"icon",{},(()=>[$.icon?(e(),o(w,{key:0,class:"u-tag__icon"},{default:s((()=>[$.$u.test.image($.icon)?(e(),o(S,{key:0,src:$.icon,style:r([z.imgStyle])},null,8,["src","style"])):(e(),o(k,{key:1,color:z.elIconColor,name:$.icon,size:z.iconSize},null,8,["color","name","size"]))])),_:1})):p("v-if",!0)]),!0),l(j,{class:i(["u-tag__text",[`u-tag__text--${$.type}`,$.plain&&`u-tag__text--${$.type}--plain`,`u-tag__text--${$.size}`]]),style:r([z.textColor])},{default:s((()=>[u(c($.text),1)])),_:1},8,["style","class"])])),_:3},8,["class","onClick","style"]),$.closable?(e(),o(w,{key:0,class:i(["u-tag__close",[`u-tag__close--${$.size}`]]),onClick:a(z.closeHandler,["stop"]),style:r({backgroundColor:$.closeColor})},{default:s((()=>[l(k,{name:"close",size:z.closeSize,color:"#ffffff"},null,8,["size"])])),_:1},8,["class","onClick","style"])):p("v-if",!0)])),_:3})])),_:3},8,["show"])}],["__scopeId","data-v-52d71565"]]);export{b as _};