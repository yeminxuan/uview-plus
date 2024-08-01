import{l as e,n as t,m as i,f as o,p as s,q as m,s as n,r as a,o as p,c as r,w as c,u as l,a as d,j as u,t as g,h as y,v as h,e as w,k as f,i as v,A as _,b as S,d as x,F as N}from"./index-CSX-ZIXS.js";import{_ as U}from"./u-button.BjZecIf-.js";import{r as k}from"./uni-app.es.BVMHcY7S.js";import{_ as b}from"./u-icon.48ou0Qff.js";import{_ as z}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as j}from"./u-cell.BUcJcxuF.js";import"./u-loading-icon.DaNpjiV5.js";import"./u-line.BwmXjwN4.js";const C=z({name:"u-empty",mixins:[i,o,e({props:{icon:{type:String,default:()=>t.empty.icon},text:{type:String,default:()=>t.empty.text},textColor:{type:String,default:()=>t.empty.textColor},textSize:{type:[String,Number],default:()=>t.empty.textSize},iconColor:{type:String,default:()=>t.empty.iconColor},iconSize:{type:[String,Number],default:()=>t.empty.iconSize},mode:{type:String,default:()=>t.empty.mode},width:{type:[String,Number],default:()=>t.empty.width},height:{type:[String,Number],default:()=>t.empty.height},show:{type:Boolean,default:()=>t.empty.show},marginTop:{type:[String,Number],default:()=>t.empty.marginTop}}})],data:()=>({icons:{car:"购物车为空",page:"页面不存在",search:"没有搜索结果",address:"没有收货地址",wifi:"没有WiFi",order:"订单为空",coupon:"没有优惠券",favor:"暂无收藏",permission:"无权限",history:"无历史记录",news:"无新闻列表",message:"消息列表为空",list:"列表为空",data:"数据为空",comment:"暂无评论"}}),computed:{emptyStyle(){const e={};return e.marginTop=s(this.marginTop),m(n(this.customStyle),e)},textStyle(){const e={};return e.color=this.textColor,e.fontSize=s(this.textSize),e},isSrc(){return this.icon.indexOf("/")>=0}},methods:{addUnit:s}},[["render",function(e,t,i,o,s,m){const n=k(a("u-icon"),b),_=w,S=f,x=v;return e.show?(p(),r(x,{key:0,class:"u-empty",style:l([m.emptyStyle])},{default:c((()=>[m.isSrc?(p(),r(_,{key:1,style:l({width:m.addUnit(e.width),height:m.addUnit(e.height)}),src:e.icon,mode:"widthFix"},null,8,["style","src"])):(p(),r(n,{key:0,name:"message"===e.mode?"chat":`empty-${e.mode}`,size:e.iconSize,color:e.iconColor,"margin-top":"14"},null,8,["name","size","color"])),d(S,{class:"u-empty__text",style:l([m.textStyle])},{default:c((()=>[u(g(e.text?e.text:s.icons[e.mode]),1)])),_:1},8,["style"]),e.$slots.default||e.$slots.$default?(p(),r(x,{key:2,class:"u-empty__wrap"},{default:c((()=>[y(e.$slots,"default",{},void 0,!0)])),_:3})):h("",!0)])),_:3},8,["style"])):h("",!0)}],["__scopeId","data-v-f652d357"]]);const F=z({data(){const e="http://cdn.uviewui.com/uview/empty/";return{mode:"car",imgList:{car:e+"car.png",address:e+"address.png",comment:e+"comment.png",coupon:e+"coupon.png",data:e+"data.png",history:e+"history.png",list:e+"list.png",message:e+"message.png",news:e+"news.png",order:e+"order.png",page:e+"page.png",permission:e+"permission.png",search:e+"search.png",wifi:e+"wifi.png"},list:[{imgName:"car",title:"购物车为空(同时传入slot)",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/car.png"},{imgName:"data",title:"数据为空",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/data.png"},{imgName:"comment",title:"评论为空",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/comment.png"},{imgName:"coupon",title:"没有优惠券",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/coupon.png"},{imgName:"history",title:"无历史记录",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/history.png"},{imgName:"list",title:"列表为空",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/list.png"},{imgName:"message",title:"消息列表为空",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/message.png"},{imgName:"news",title:"无新闻列表",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/news.png"},{imgName:"order",title:"订单为空",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/order.png"},{imgName:"page",title:"页面不存在",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/page.png"},{imgName:"permission",title:"无权限",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/permission.png"},{imgName:"search",title:"没有搜索结果",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/search.png"},{imgName:"wifi",title:"没有WiFi",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/wifi.png"}]}},methods:{openImg(e){this.mode=e}}},[["render",function(e,t,i,o,s,m){const n=f,l=v,g=k(a("up-button"),U),y=k(a("up-empty"),C),b=w,z=k(a("up-cell"),j);return p(),r(l,{class:"u-page"},{default:c((()=>[d(l,{class:"u-page__top-box"},{default:c((()=>[d(n,{class:"u-demo-block__title"},{default:c((()=>[u("演示效果")])),_:1})])),_:1}),d(y,{mode:s.mode,icon:s.imgList[s.mode]},{default:c((()=>["car"==s.mode?(p(),r(g,{key:0,size:"small",type:"primary",style:{marginTop:"10px"},text:"查看更多商品"})):h("",!0)])),_:1},8,["mode","icon"]),_("div",{class:"empty-select"},[(p(!0),S(N,null,x(s.list,((e,t)=>(p(),r(z,{titleStyle:{fontWeight:500},onClick:t=>m.openImg(e.imgName),title:e.title,key:t,isLink:""},{default:c((()=>[d(b,{slot:"icon",class:"u-cell-icon",src:e.iconUrl,mode:"widthFix"},null,8,["src"])])),_:2},1032,["onClick","title"])))),128))])])),_:1})}],["__scopeId","data-v-9c1967d0"]]);export{F as default};