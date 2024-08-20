import{h as e,j as t,m as i,k as o,l as s,n as m,p as n,r as p,o as a,c,w as r,q as l,a as u,f as d,t as g,u as y,s as h,e as w,g as f,i as v,z as _,b as S,d as x,F as N}from"./index-C3UXxwfW.js";import{_ as U}from"./up-button.DtY6i3cW.js";import{r as z}from"./uni-app.es.CqYlZVXb.js";import{_ as b}from"./up-icon.BrIVCe5a.js";import{_ as k}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as j}from"./up-cell.D3gLs5ov.js";import"./up-loading-icon.DXCjh8Fn.js";import"./up-line.BBfW2jaO.js";const C=k({name:"up-empty",mixins:[i,o,e({props:{icon:{type:String,default:()=>t.empty.icon},text:{type:String,default:()=>t.empty.text},textColor:{type:String,default:()=>t.empty.textColor},textSize:{type:[String,Number],default:()=>t.empty.textSize},iconColor:{type:String,default:()=>t.empty.iconColor},iconSize:{type:[String,Number],default:()=>t.empty.iconSize},mode:{type:String,default:()=>t.empty.mode},width:{type:[String,Number],default:()=>t.empty.width},height:{type:[String,Number],default:()=>t.empty.height},show:{type:Boolean,default:()=>t.empty.show},marginTop:{type:[String,Number],default:()=>t.empty.marginTop}}})],data:()=>({icons:{car:"购物车为空",page:"页面不存在",search:"没有搜索结果",address:"没有收货地址",wifi:"没有WiFi",order:"订单为空",coupon:"没有优惠券",favor:"暂无收藏",permission:"无权限",history:"无历史记录",news:"无新闻列表",message:"消息列表为空",list:"列表为空",data:"数据为空",comment:"暂无评论"}}),computed:{emptyStyle(){const e={};return e.marginTop=s(this.marginTop),m(n(this.customStyle),e)},textStyle(){const e={};return e.color=this.textColor,e.fontSize=s(this.textSize),e},isSrc(){return this.icon.indexOf("/")>=0}},methods:{addUnit:s}},[["render",function(e,t,i,o,s,m){const n=z(p("up-icon"),b),_=w,S=f,x=v;return e.show?(a(),c(x,{key:0,class:"up-empty",style:l([m.emptyStyle])},{default:r((()=>[m.isSrc?(a(),c(_,{key:1,style:l({width:m.addUnit(e.width),height:m.addUnit(e.height)}),src:e.icon,mode:"widthFix"},null,8,["style","src"])):(a(),c(n,{key:0,name:"message"===e.mode?"chat":`empty-${e.mode}`,size:e.iconSize,color:e.iconColor,"margin-top":"14"},null,8,["name","size","color"])),u(S,{class:"up-empty__text",style:l([m.textStyle])},{default:r((()=>[d(g(e.text?e.text:s.icons[e.mode]),1)])),_:1},8,["style"]),e.$slots.default||e.$slots.$default?(a(),c(x,{key:2,class:"up-empty__wrap"},{default:r((()=>[y(e.$slots,"default",{},void 0,!0)])),_:3})):h("",!0)])),_:3},8,["style"])):h("",!0)}],["__scopeId","data-v-b370acc9"]]);const F=k({data(){const e="http://cdn.uviewui.com/uview/empty/";return{mode:"car",imgList:{car:e+"car.png",address:e+"address.png",comment:e+"comment.png",coupon:e+"coupon.png",data:e+"data.png",history:e+"history.png",list:e+"list.png",message:e+"message.png",news:e+"news.png",order:e+"order.png",page:e+"page.png",permission:e+"permission.png",search:e+"search.png",wifi:e+"wifi.png"},list:[{imgName:"car",title:"购物车为空(同时传入slot)",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/car.png"},{imgName:"data",title:"数据为空",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/data.png"},{imgName:"comment",title:"评论为空",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/comment.png"},{imgName:"coupon",title:"没有优惠券",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/coupon.png"},{imgName:"history",title:"无历史记录",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/history.png"},{imgName:"list",title:"列表为空",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/list.png"},{imgName:"message",title:"消息列表为空",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/message.png"},{imgName:"news",title:"无新闻列表",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/news.png"},{imgName:"order",title:"订单为空",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/order.png"},{imgName:"page",title:"页面不存在",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/page.png"},{imgName:"permission",title:"无权限",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/permission.png"},{imgName:"search",title:"没有搜索结果",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/search.png"},{imgName:"wifi",title:"没有WiFi",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/wifi.png"}]}},methods:{openImg(e){this.mode=e}}},[["render",function(e,t,i,o,s,m){const n=f,l=v,g=z(p("up-button"),U),y=z(p("up-empty"),C),b=w,k=z(p("up-cell"),j);return a(),c(l,{class:"u-page"},{default:r((()=>[u(l,{class:"u-page__top-box"},{default:r((()=>[u(n,{class:"u-demo-block__title"},{default:r((()=>[d("演示效果")])),_:1})])),_:1}),u(y,{mode:s.mode,icon:s.imgList[s.mode]},{default:r((()=>["car"==s.mode?(a(),c(g,{key:0,size:"small",type:"primary",style:{marginTop:"10px"},text:"查看更多商品"})):h("",!0)])),_:1},8,["mode","icon"]),_("div",{class:"empty-select"},[(a(!0),S(N,null,x(s.list,((e,t)=>(a(),c(k,{titleStyle:{fontWeight:500},onClick:t=>m.openImg(e.imgName),title:e.title,key:t,isLink:""},{icon:r((()=>[u(b,{class:"u-cell-icon",src:e.iconUrl,mode:"widthFix"},null,8,["src"])])),_:2},1032,["onClick","title"])))),128))])])),_:1})}],["__scopeId","data-v-c4e0c153"]]);export{F as default};