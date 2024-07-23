import{_ as o}from"./u-line._-NNd25V.js";import{l as e,n as t,m as a,f as l,p as r,s as i,r as d,o as n,c as s,w as m,v as u,a as c,z as g,u as p,j as h,t as f,i as y,k as S}from"./index-BCeWmwUU.js";import{r as _}from"./uni-app.es.CQsAFo03.js";import{_ as x}from"./u-loading-icon.WIMiaK81.js";import{_ as T}from"./_plugin-vue_export-helper.BCo6x5W8.js";const C=T({name:"u-loadmore",mixins:[a,l,e({props:{status:{type:String,default:()=>t.loadmore.status},bgColor:{type:String,default:()=>t.loadmore.bgColor},icon:{type:Boolean,default:()=>t.loadmore.icon},fontSize:{type:[String,Number],default:()=>t.loadmore.fontSize},iconSize:{type:[String,Number],default:()=>t.loadmore.iconSize},color:{type:String,default:()=>t.loadmore.color},loadingIcon:{type:String,default:()=>t.loadmore.loadingIcon},loadmoreText:{type:String,default:()=>t.loadmore.loadmoreText},loadingText:{type:String,default:()=>t.loadmore.loadingText},nomoreText:{type:String,default:()=>t.loadmore.nomoreText},isDot:{type:Boolean,default:()=>t.loadmore.isDot},iconColor:{type:String,default:()=>t.loadmore.iconColor},marginTop:{type:[String,Number],default:()=>t.loadmore.marginTop},marginBottom:{type:[String,Number],default:()=>t.loadmore.marginBottom},height:{type:[String,Number],default:()=>t.loadmore.height},line:{type:Boolean,default:()=>t.loadmore.line},lineColor:{type:String,default:()=>t.loadmore.lineColor},dashed:{type:Boolean,default:()=>t.loadmore.dashed}}})],data:()=>({dotText:"●"}),computed:{loadTextStyle(){return{color:this.color,fontSize:r(this.fontSize),lineHeight:r(this.fontSize),backgroundColor:this.bgColor}},showText(){let o="";return o="loadmore"==this.status?this.loadmoreText:"loading"==this.status?this.loadingText:"nomore"==this.status&&this.isDot?this.dotText:this.nomoreText,o}},emits:["loadmore"],methods:{addStyle:i,addUnit:r,loadMore(){"loadmore"==this.status&&this.$emit("loadmore")}}},[["render",function(e,t,a,l,r,i){const T=_(d("u-line"),o),C=_(d("u-loading-icon"),x),z=y,b=S;return n(),s(z,{class:"u-loadmore",style:p([i.addStyle(e.customStyle),{backgroundColor:e.bgColor,marginBottom:i.addUnit(e.marginBottom),marginTop:i.addUnit(e.marginTop),height:i.addUnit(e.height)}])},{default:m((()=>[e.line?(n(),s(T,{key:0,length:"140rpx",color:e.lineColor,hairline:!1,dashed:e.dashed},null,8,["color","dashed"])):u("",!0),c(z,{class:g(["loadmore"==e.status||"nomore"==e.status?"u-more":"","u-loadmore__content"])},{default:m((()=>["loading"===e.status&&e.icon?(n(),s(z,{key:0,class:"u-loadmore__content__icon-wrap"},{default:m((()=>[c(C,{color:e.iconColor,size:e.iconSize,mode:e.loadingIcon},null,8,["color","size","mode"])])),_:1})):u("",!0),c(b,{class:g(["u-line-1",["nomore"==e.status&&1==e.isDot?"u-loadmore__content__dot-text":"u-loadmore__content__text"]]),style:p([i.loadTextStyle]),onClick:i.loadMore},{default:m((()=>[h(f(i.showText),1)])),_:1},8,["style","class","onClick"])])),_:1},8,["class"]),e.line?(n(),s(T,{key:1,length:"140rpx",color:e.lineColor,hairline:!1,dashed:e.dashed},null,8,["color","dashed"])):u("",!0)])),_:1},8,["style"])}],["__scopeId","data-v-a7d400a6"]]);export{C as _};