import{_ as s}from"./up-avatar.pEjD_Aze.js";import{r as u,o as t,c as i,w as l,i as p,a,b as o,d as r,F as e}from"./index-C3UXxwfW.js";import{r as m}from"./uni-app.es.CqYlZVXb.js";import{_ as n}from"./up-cell.D3gLs5ov.js";import{_ as j,a as c}from"./up-list.F5ZygocM.js";import{_ as g}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./up-icon.BrIVCe5a.js";import"./up-text.DxFQuVW8.js";import"./up-link.MfNNE1vA.js";import"./up-line.BBfW2jaO.js";const d=g({data:()=>({indexList:[],urls:["https://uview-plus.jiangruyi.com/album/1.jpg","https://uview-plus.jiangruyi.com/album/2.jpg","https://uview-plus.jiangruyi.com/album/3.jpg","https://uview-plus.jiangruyi.com/album/4.jpg","https://uview-plus.jiangruyi.com/album/5.jpg","https://uview-plus.jiangruyi.com/album/6.jpg","https://uview-plus.jiangruyi.com/album/7.jpg","https://uview-plus.jiangruyi.com/album/8.jpg","https://uview-plus.jiangruyi.com/album/9.jpg","https://uview-plus.jiangruyi.com/album/10.jpg"]}),onLoad(){this.loadmore()},methods:{scrolltolower(){this.loadmore()},loadmore(){for(let s=0;s<30;s++)this.indexList.push({url:this.urls[uni.$u.random(0,this.urls.length-1)]})}}},[["render",function(g,d,h,w,v,f){const y=m(u("up-avatar"),s),_=m(u("up-cell"),n),b=m(u("up-list-item"),j),x=m(u("up-list"),c),L=p;return t(),i(L,{class:"u-page"},{default:l((()=>[a(x,{onScrolltolower:f.scrolltolower},{default:l((()=>[(t(!0),o(e,null,r(v.indexList,((s,u)=>(t(),i(b,{key:u},{default:l((()=>[a(_,{title:`列表长度-${u+1}`},{icon:l((()=>[a(y,{shape:"square",size:"35",src:s.url,customStyle:"margin: -3px 5px -3px 0"},null,8,["src"])])),_:2},1032,["title"])])),_:2},1024)))),128))])),_:1},8,["onScrolltolower"])])),_:1})}],["__scopeId","data-v-f1e20d1c"]]);export{d as default};