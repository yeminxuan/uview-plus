import{_ as s}from"./u-button.Cmu7ch_v.js";import{r as t,o as a,b as e,a as i,w as l,F as u,j as o,c as r,d as n,v as m,k as _,i as p,t as d,e as c}from"./index-D1u6JFLh.js";import{r as f}from"./uni-app.es.Js9JroAF.js";import{_ as h}from"./u-avatar.CqRBG55u.js";import{_ as j}from"./u-line.D6iPGJNR.js";import{_ as g,a as w,b as x}from"./u-index-list.BgWXZ5JH.js";import{_ as b}from"./u-popup.CiOsHG-6.js";import{_ as v}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./u-loading-icon.DZFt1eGe.js";import"./u-icon.CZORB-Ps.js";import"./u-text.C8aLBnvT.js";import"./u-link.BC84a_rd.js";import"./u-transition.Cd29-R-6.js";import"./u-overlay.BVXY_T4p.js";import"./u-status-bar.C8MRZHcn.js";import"./u-safe-bottom.KfzOWezk.js";const z=()=>{const s=[],t="A".charCodeAt(0);s.push("↑"),s.push("☆");for(let a=0;a<10;a++)s.push(String.fromCharCode(t+a));return s.push("#"),s};const y=v({data:()=>({show:!1,indexList:z(),urls:["./static/uview/album/1.jpg","./static/uview/album/2.jpg","./static/uview/album/3.jpg","./static/uview/album/4.jpg","./static/uview/album/5.jpg","./static/uview/album/6.jpg","./static/uview/album/7.jpg","./static/uview/album/8.jpg","./static/uview/album/9.jpg","./static/uview/album/10.jpg"],names:["勇往无敌","疯狂的迪飙","磊爱可","梦幻梦幻梦","枫中飘瓢","飞翔天使","曾经第一","追风幻影族长","麦小姐","胡格罗雅","Red磊磊","乐乐立立","青龙爆风","跑跑卡叮车","山里狼","supersonic超"]}),computed:{itemArr(){return this.indexList.map((s=>{const t=[];for(let a=0;a<10;a++)t.push({name:this.names[uni.$u.random(0,this.names.length-1)],url:this.urls[uni.$u.random(0,this.urls.length-1)]});return t}))}}},[["render",function(v,z,y,C,k,q){const B=f(t("up-button"),s),L=f(t("up-avatar"),h),A=_,S=p,I=f(t("up-line"),j),Q=f(t("up-index-anchor"),g),F=c,$=f(t("up-index-item"),w),D=f(t("up-index-list"),x),E=f(t("up-popup"),b);return a(),e(u,null,[i(B,{type:"primary",size:"small",style:{width:"120px"},onClick:z[0]||(z[0]=s=>k.show=!0)},{default:l((()=>[o("打开弹窗")])),_:1}),i(E,{show:k.show,"onUpdate:show":z[1]||(z[1]=s=>k.show=s),safeAreaInsetBottom:!1},{default:l((()=>[k.show?(a(),r(S,{key:0},{default:l((()=>[i(D,{style:{height:"600px"},indexList:k.indexList},{header:l((()=>[i(S,{class:"list"},{default:l((()=>[i(S,{class:"list__item"},{default:l((()=>[i(L,{shape:"square",size:"35",icon:"man-add-fill",fontSize:"26",randomBgColor:""}),i(A,{class:"list__item__user-name"},{default:l((()=>[o("新的朋友")])),_:1})])),_:1}),i(I),i(S,{class:"list__item"},{default:l((()=>[i(L,{shape:"square",size:"35",icon:"tags-fill",fontSize:"26",randomBgColor:""}),i(A,{class:"list__item__user-name"},{default:l((()=>[o("标签")])),_:1})])),_:1}),i(I),i(S,{class:"list__item"},{default:l((()=>[i(L,{shape:"square",size:"35",icon:"chrome-circle-fill",fontSize:"26",randomBgColor:""}),i(A,{class:"list__item__user-name"},{default:l((()=>[o("朋友圈")])),_:1})])),_:1}),i(I),i(S,{class:"list__item"},{default:l((()=>[i(L,{shape:"square",size:"35",icon:"qq-fill",fontSize:"26",randomBgColor:""}),i(A,{class:"list__item__user-name"},{default:l((()=>[o("QQ")])),_:1})])),_:1}),i(I)])),_:1})])),footer:l((()=>[i(S,{class:"u-safe-area-inset--bottom"},{default:l((()=>[i(A,{class:"list__footer"},{default:l((()=>[o("共305位好友")])),_:1})])),_:1})])),default:l((()=>[(a(!0),e(u,null,n(q.itemArr,((s,t)=>(a(),r($,{key:t},{default:l((()=>[i(Q,{text:k.indexList[t]},null,8,["text"]),(a(!0),e(u,null,n(s,((s,t)=>(a(),r(S,{class:"list",key:t},{default:l((()=>[i(S,{class:"list__item"},{default:l((()=>[i(F,{class:"list__item__avatar",src:s.url},null,8,["src"]),i(A,{class:"list__item__user-name"},{default:l((()=>[o(d(s.name),1)])),_:2},1024)])),_:2},1024),i(I)])),_:2},1024)))),128))])),_:2},1024)))),128))])),_:1},8,["indexList"])])),_:1})):m("",!0)])),_:1},8,["show"])],64)}],["__scopeId","data-v-e74c1146"]]);export{y as default};