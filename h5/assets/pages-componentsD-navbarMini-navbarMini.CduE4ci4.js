import{l as e,m as a,f as t,s as l,p as o,J as s,x as i,r as n,o as r,c,w as u,u as f,v as d,a as p,z as _,h as m,i as g,j as h,k}from"./index-CfV5z4cq.js";import{_ as C}from"./u-status-bar.V9PDCtLU.js";import{r as b}from"./uni-app.es.Df-IRQIq.js";import{_ as x}from"./u-icon.CeZP3l6S.js";import{_ as v}from"./u-line.uoRA1CiN.js";import{_ as y}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as B}from"./u-gap.DsUwAYDW.js";const S=e({props:{safeAreaInsetTop:{type:Boolean,default:()=>!0},fixed:{type:Boolean,default:()=>!0},leftIcon:{type:String,default:"arrow-leftward"},bgColor:{type:String,default:()=>"rgba(0,0,0,.15)"},height:{type:[String,Number],default:()=>"32px"},iconSize:{type:[String,Number],default:"20px"},iconColor:{type:String,default:"#fff"},autoBack:{type:Boolean,default:()=>!0},homeUrl:{type:[String],default:""}}});console.log(S);const z=y({name:"u-navbar-mini",mixins:[a,t,S],data:()=>({}),emits:["leftClick","homeClick"],created(){},methods:{addStyle:l,addUnit:o,sys:s,getPx:i,leftClick(){this.$emit("leftClick"),this.autoBack&&uni.navigateBack()},homeClick(){this.homeUrl&&uni.reLaunch({url:this.homeUrl})}}},[["render",function(e,a,t,l,o,s){const i=g,h=b(n("u-status-bar"),C),k=b(n("up-icon"),x),y=b(n("up-line"),v);return r(),c(i,{class:_(["u-navbar-mini",[e.customClass]])},{default:u((()=>[e.fixed?(r(),c(i,{key:0,class:"u-navbar-mini__placeholder",style:f({height:s.addUnit(s.getPx(e.height)+s.sys().statusBarHeight,"px")})},null,8,["style"])):d("",!0),p(i,{class:_(["u-navbar-mini__inner",[e.fixed&&"u-navbar-mini--fixed"]])},{default:u((()=>[e.safeAreaInsetTop?(r(),c(h,{key:0,bgColor:e.bgColor},null,8,["bgColor"])):d("",!0),p(i,{class:_(["u-navbar-mini__content",[e.border&&"u-border-bottom"]]),style:f({height:s.addUnit(e.height),backgroundColor:e.bgColor})},{default:u((()=>[p(i,{class:"u-navbar-mini__content__left","hover-class":"u-navbar-mini__content__left--hover","hover-start-time":"150",onClick:s.leftClick},{default:u((()=>[m(e.$slots,"left",{},(()=>[p(k,{name:e.leftIcon,size:e.iconSize,color:e.iconColor},null,8,["name","size","color"])]),!0)])),_:3},8,["onClick"]),p(i,{style:{padding:"10px 10px"}},{default:u((()=>[p(y,{direction:"col",color:"#fff",length:"16px"})])),_:1}),p(i,{class:"u-navbar-mini__content__center",onClick:s.homeClick},{default:u((()=>[m(e.$slots,"center",{},(()=>[p(k,{name:"home",size:e.iconSize,color:e.iconColor},null,8,["size","color"])]),!0)])),_:3},8,["onClick"])])),_:3},8,["class","style"])])),_:3},8,["class"])])),_:3},8,["class"])}],["__scopeId","data-v-5fc42c24"]]);const I=y({data:()=>({}),methods:{navigateBack(){uni.navigateBack({delta:1})},leftClick(){console.log("leftClick")}}},[["render",function(e,a,t,l,o,s){const i=b(n("up-navbar-mini"),z),f=k,d=g,_=b(n("up-icon"),x),m=b(n("up-gap"),B);return r(),c(d,{class:"u-page"},{default:u((()=>[p(i,{safeAreaInsetTop:"",fixed:"",autoBack:!0}),p(d,{class:"u-page__item"},{default:u((()=>[p(f,{class:"u-page__item__title"},{default:u((()=>[h("基础功能")])),_:1}),p(i,{homeUrl:"/pages/index/index",safeAreaInsetTop:!0,fixed:!0,onLeftClick:s.leftClick},null,8,["onLeftClick"])])),_:1}),p(d,{class:"u-page__item"},{default:u((()=>[p(f,{class:"u-page__item__title"},{default:u((()=>[h("自定义插槽")])),_:1}),p(i,{fixed:!1,safeAreaInsetTop:!1},{left:u((()=>[p(_,{name:"arrow-left",size:"19"})])),_:1})])),_:1}),p(m,{height:"50"})])),_:1})}],["__scopeId","data-v-44a57e82"]]);export{I as default};