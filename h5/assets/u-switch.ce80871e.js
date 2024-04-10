import{m as i,f as e,d as t,o as s,c as a,w as o,a as l,n,p as u,i as c}from"./index-d6cdb2d3.js";import{_ as r}from"./u-loading-icon.a2d98a3f.js";import{r as d}from"./uni-app.es.9ca93cb4.js";import{_ as h}from"./_plugin-vue_export-helper.1b428a4d.js";const p=h({name:"u-switch",mixins:[i,e,{props:{loading:{type:Boolean,default:()=>uni.$u.props.switch.loading},disabled:{type:Boolean,default:()=>uni.$u.props.switch.disabled},size:{type:[String,Number],default:()=>uni.$u.props.switch.size},activeColor:{type:String,default:()=>uni.$u.props.switch.activeColor},inactiveColor:{type:String,default:()=>uni.$u.props.switch.inactiveColor},modelValue:{type:[Boolean,String,Number],default:()=>uni.$u.props.switch.value},activeValue:{type:[String,Number,Boolean],default:()=>uni.$u.props.switch.activeValue},inactiveValue:{type:[String,Number,Boolean],default:()=>uni.$u.props.switch.inactiveValue},asyncChange:{type:Boolean,default:()=>uni.$u.props.switch.asyncChange},space:{type:[String,Number],default:()=>uni.$u.props.switch.space}}}],watch:{modelValue:{immediate:!0,handler(i){i!==this.inactiveValue&&i!==this.activeValue&&uni.$u.error("v-model绑定的值必须为inactiveValue、activeValue二者之一")}}},data:()=>({bgColor:"#ffffff"}),computed:{isActive(){return this.modelValue===this.activeValue},switchStyle(){let i={};return i.width=uni.$u.addUnit(2*this.size+2),i.height=uni.$u.addUnit(Number(this.size)+2),this.customInactiveColor&&(i.borderColor="rgba(0, 0, 0, 0)"),i.backgroundColor=this.isActive?this.activeColor:this.inactiveColor,i},nodeStyle(){let i={};i.width=uni.$u.addUnit(this.size-this.space),i.height=uni.$u.addUnit(this.size-this.space);const e=this.isActive?uni.$u.addUnit(this.space):uni.$u.addUnit(this.size);return i.transform=`translateX(-${e})`,i},bgStyle(){let i={};return i.width=uni.$u.addUnit(2*Number(this.size)-this.size/2),i.height=uni.$u.addUnit(this.size),i.backgroundColor=this.inactiveColor,i.transform=`scale(${this.isActive?0:1})`,i},customInactiveColor(){return"#fff"!==this.inactiveColor&&"#ffffff"!==this.inactiveColor}},emits:["update:modelValue","change"],methods:{clickHandler(){if(!this.disabled&&!this.loading){const i=this.isActive?this.inactiveValue:this.activeValue;this.asyncChange||this.$emit("update:modelValue",i),this.$nextTick((()=>{this.$emit("change",i)}))}}}},[["render",function(i,e,h,p,m,f){const v=c,g=d(t("u-loading-icon"),r);return s(),a(v,{class:u(["u-switch",[i.disabled&&"u-switch--disabled"]]),style:n([f.switchStyle,i.$u.addStyle(i.customStyle)]),onClick:f.clickHandler},{default:o((()=>[l(v,{class:"u-switch__bg",style:n([f.bgStyle])},null,8,["style"]),l(v,{class:u(["u-switch__node",[i.modelValue&&"u-switch__node--on"]]),style:n([f.nodeStyle]),ref:"u-switch__node"},{default:o((()=>[l(g,{show:i.loading,mode:"circle",timingFunction:"linear",color:i.modelValue?i.activeColor:"#AAABAD",size:.6*i.size},null,8,["show","color","size"])])),_:1},8,["class","style"])])),_:1},8,["class","style","onClick"])}],["__scopeId","data-v-fc89fd7a"]]);export{p as _};