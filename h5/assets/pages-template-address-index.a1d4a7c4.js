import{o as a,c as t,w as s,i as e,b as i,r as o,F as d,a as l,j as n,d as u,t as c,p as f,k as p}from"./index-d9b53327.js";import{_ as r}from"./u-icon.de6f3277.js";import{r as m}from"./uni-app.es.256c20de.js";import{_}from"./_plugin-vue_export-helper.1b428a4d.js";const g=_({data:()=>({siteList:[]}),onLoad(){this.getData()},methods:{getData(){this.siteList=[{id:1,name:"游X",phone:"183****5523",tag:[{tagText:"默认"},{tagText:"家"}],site:"广东省深圳市宝安区 自由路66号"},{id:2,name:"李XX",phone:"183****5555",tag:[{tagText:"公司"}],site:"广东省深圳市宝安区 翻身路xx号"},{id:3,name:"王YY",phone:"153****5555",tag:[],site:"广东省深圳市宝安区 平安路13号"}]},toAddSite(){uni.navigateTo({url:"/pages/template/address/addSite"})}}},[["render",function(_,g,x,h,T,j){const k=e,L=p,S=m(u("up-icon"),r);return a(),t(k,null,{default:s((()=>[(a(!0),i(d,null,o(T.siteList,((e,u)=>(a(),t(k,{class:"item",key:e.id},{default:s((()=>[l(k,{class:"top"},{default:s((()=>[l(k,{class:"name"},{default:s((()=>[n(c(e.name),1)])),_:2},1024),l(k,{class:"phone"},{default:s((()=>[n(c(e.phone),1)])),_:2},1024),l(k,{class:"tag"},{default:s((()=>[(a(!0),i(d,null,o(e.tag,((e,i)=>(a(),t(L,{key:i,class:f({red:"默认"==e.tagText})},{default:s((()=>[n(c(e.tagText),1)])),_:2},1032,["class"])))),128))])),_:2},1024)])),_:2},1024),l(k,{class:"bottom"},{default:s((()=>[n(" 广东省深圳市宝安区 自由路66号 "),l(S,{name:"edit-pen",size:40,color:"#999999"})])),_:1})])),_:2},1024)))),128)),l(k,{class:"addSite",onClick:j.toAddSite},{default:s((()=>[l(k,{class:"add"},{default:s((()=>[l(S,{name:"plus",color:"#ffffff",class:"icon",size:30}),n("新建收货地址 ")])),_:1})])),_:1},8,["onClick"])])),_:1})}],["__scopeId","data-v-11fa4637"]]);export{g as default};
