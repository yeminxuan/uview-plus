import{p as o,_ as s}from"./u-image.2565ee34.js";import{m as a,f as e,g as r,o as n,c as i,w as t,h as d,d as l,a as c,j as u,t as g,k as m,i as p}from"./index-d9b53327.js";import{_ as h}from"./_plugin-vue_export-helper.1b428a4d.js";import{r as w}from"./uni-app.es.256c20de.js";const f=h({name:"u--image",mixins:[a,o,e],components:{uvImage:s},emits:["click","error","load"]},[["render",function(o,s,a,e,l,c){const u=r("uvImage");return n(),i(u,{src:o.src,mode:o.mode,width:o.width,height:o.height,shape:o.shape,radius:o.radius,lazyLoad:o.lazyLoad,showMenuByLongpress:o.showMenuByLongpress,loadingIcon:o.loadingIcon,errorIcon:o.errorIcon,showLoading:o.showLoading,showError:o.showError,fade:o.fade,webp:o.webp,duration:o.duration,bgColor:o.bgColor,customStyle:o.customStyle,onClick:s[0]||(s[0]=s=>o.$emit("click")),onError:s[1]||(s[1]=s=>o.$emit("error")),onLoad:s[2]||(s[2]=s=>o.$emit("load"))},{loading:t((()=>[d(o.$slots,"loading")])),error:t((()=>[d(o.$slots,"error")])),_:3},8,["src","mode","width","height","shape","radius","lazyLoad","showMenuByLongpress","loadingIcon","errorIcon","showLoading","showError","fade","webp","duration","bgColor","customStyle"])}]]);const _=h({props:{desc:String,title:String},data:()=>({version:uni.$u.config.v}),methods:{jumpToWx(){}}},[["render",function(o,s,a,e,r,d){const h=w(l("u--image"),f),_=m,v=p;return n(),i(v,{class:"nav-wrap"},{default:t((()=>[c(v,{class:"nav-title"},{default:t((()=>[c(h,{showLoading:!0,src:"https://uview-plus.jiangruyi.com/h5/static/uview/common/logo.png",width:"70px",height:"70px"}),c(v,{class:"nav-info"},{default:t((()=>[c(v,{class:"nav-info__title",onClick:d.jumpToWx},{default:t((()=>[c(_,{class:"nav-info__title__text"},{default:t((()=>[u("uview-plus3")])),_:1})])),_:1},8,["onClick"]),c(_,{class:"nav-slogan"},{default:t((()=>[u("多平台快速开发的UI框架")])),_:1})])),_:1})])),_:1}),c(_,{class:"nav-desc"},{default:t((()=>[u(g(a.desc),1)])),_:1})])),_:1})}],["__scopeId","data-v-9e90761d"]]);export{_};
