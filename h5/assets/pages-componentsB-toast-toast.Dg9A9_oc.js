import{_ as t}from"./u-gap.C_qsiq-d.js";import{r as e,o,c as i,w as s,i as u,a,b as l,d as n,F as p}from"./index-66rGf9ia.js";import{r as c}from"./uni-app.es.Ba1vQ4ED.js";import{_ as r}from"./u-toast._f12lcE8.js";import{_ as m}from"./u-cell.D7MRGFyO.js";import{_ as d}from"./u-cell-group.C_gtFZ4p.js";import{_ as g}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./u-loading-icon.B822imgQ.js";import"./u-icon.BUvds5AX.js";import"./u-overlay.-A9Sefw1.js";import"./u-transition.ByMQ17mA.js";import"./u-line.ClOvNTvx.js";const w=g({data:()=>({show:!1,list:[{type:"default",title:"默认主题",message:"锦瑟无端五十弦",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/default.png"},{type:"error",icon:!1,title:"失败主题(不带图标)",message:"一弦一柱思华年",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/error.png"},{type:"success",title:"成功主题(带图标)",message:"庄生晓梦迷蝴蝶",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/success.png"},{type:"warning",position:"top",title:"位置偏移上方",message:"望帝春心托杜鹃",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/top.png"},{type:"loading",title:"正在加载",message:"正在加载",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/loading.png"},{type:"default",title:"结束后跳转标签页",message:"此情可待成追忆",url:"/pages/componentsB/tag/tag",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/jump.png"},{type:"default",title:"其它icon图标",icon:"photo",message:"只是当时已惘然",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/default.png"},{type:"default",title:"自定义图片图标",icon:"https://cdn.uviewui.com/uview/demo/toast/jump.png",message:"只是当时已惘然",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/default.png"}]}),computed:{getIcon:()=>t=>"https://cdn.uviewui.com/uview/example/"+t+".png"},methods:{showToast(t){this.$refs.uToastRef.show({...t,overlay:!0,complete(){t.url&&uni.navigateTo({url:t.url})}})}}},[["render",function(g,w,f,v,h,j){const y=c(e("up-gap"),t),_=c(e("up-toast"),r),U=c(e("up-cell"),m),x=c(e("up-cell-group"),d),T=u;return o(),i(T,{class:"u-page"},{default:s((()=>[a(y,{height:"30",bgColor:"#fff"}),a(_,{ref:"uToastRef"},null,512),a(x,{"title-bg-color":"rgb(243, 244, 246)"},{default:s((()=>[(o(!0),l(p,null,n(h.list,((t,e)=>(o(),i(U,{titleStyle:{fontWeight:500},title:t.title,key:e,isLink:"",icon:t.iconUrl,onClick:e=>j.showToast(t)},null,8,["title","icon","onClick"])))),128))])),_:1})])),_:1})}],["__scopeId","data-v-6045a199"]]);export{w as default};