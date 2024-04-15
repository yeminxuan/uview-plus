import{l as e,m as i,f as t,d as s,o as a,c as l,w as o,a as n,n as c,q as u,i as d}from"./index-5f0950f1.js";import{_ as r}from"./u-loading-icon.666fa9db.js";import{r as h}from"./uni-app.es.5e4d89a0.js";import{_ as m}from"./_plugin-vue_export-helper.1b428a4d.js";const f=m({name:"u-switch",mixins:[i,t,{props:{loading:{type:Boolean,default:()=>e.switch.loading},disabled:{type:Boolean,default:()=>e.switch.disabled},size:{type:[String,Number],default:()=>e.switch.size},activeColor:{type:String,default:()=>e.switch.activeColor},inactiveColor:{type:String,default:()=>e.switch.inactiveColor},modelValue:{type:[Boolean,String,Number],default:()=>e.switch.value},activeValue:{type:[String,Number,Boolean],default:()=>e.switch.activeValue},inactiveValue:{type:[String,Number,Boolean],default:()=>e.switch.inactiveValue},asyncChange:{type:Boolean,default:()=>e.switch.asyncChange},space:{type:[String,Number],default:()=>e.switch.space}}}],watch:{modelValue:{immediate:!0,handler(e){e!==this.inactiveValue&&e!==this.activeValue&&uni.$u.error("v-model绑定的值必须为inactiveValue、activeValue二者之一")}}},data:()=>({bgColor:"#ffffff"}),computed:{isActive(){return this.modelValue===this.activeValue},switchStyle(){let e={};return e.width=uni.$u.addUnit(2*this.size+2),e.height=uni.$u.addUnit(Number(this.size)+2),this.customInactiveColor&&(e.borderColor="rgba(0, 0, 0, 0)"),e.backgroundColor=this.isActive?this.activeColor:this.inactiveColor,e},nodeStyle(){let e={};e.width=uni.$u.addUnit(this.size-this.space),e.height=uni.$u.addUnit(this.size-this.space);const i=this.isActive?uni.$u.addUnit(this.space):uni.$u.addUnit(this.size);return e.transform=`translateX(-${i})`,e},bgStyle(){let e={};return e.width=uni.$u.addUnit(2*Number(this.size)-this.size/2),e.height=uni.$u.addUnit(this.size),e.backgroundColor=this.inactiveColor,e.transform=`scale(${this.isActive?0:1})`,e},customInactiveColor(){return"#fff"!==this.inactiveColor&&"#ffffff"!==this.inactiveColor}},emits:["update:modelValue","change"],methods:{clickHandler(){if(!this.disabled&&!this.loading){const e=this.isActive?this.inactiveValue:this.activeValue;this.asyncChange||this.$emit("update:modelValue",e),this.$nextTick((()=>{this.$emit("change",e)}))}}}},[["render",function(e,i,t,m,f,p){const v=d,g=h(s("u-loading-icon"),r);return a(),l(v,{class:u(["u-switch cursor-pointer",[e.disabled&&"u-switch--disabled"]]),style:c([p.switchStyle,e.$u.addStyle(e.customStyle)]),onClick:p.clickHandler},{default:o((()=>[n(v,{class:"u-switch__bg",style:c([p.bgStyle])},null,8,["style"]),n(v,{class:u(["u-switch__node",[e.modelValue&&"u-switch__node--on"]]),style:c([p.nodeStyle]),ref:"u-switch__node"},{default:o((()=>[n(g,{show:e.loading,mode:"circle",timingFunction:"linear",color:e.modelValue?e.activeColor:"#AAABAD",size:.6*e.size},null,8,["show","color","size"])])),_:1},8,["class","style"])])),_:1},8,["class","style","onClick"])}],["__scopeId","data-v-dd6d2b00"]]);export{f as _};