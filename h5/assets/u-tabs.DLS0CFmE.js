import{l as e,n as t,m as s,f as i,s as a,q as r,p as l,x as n,y as o,J as d,r as c,o as h,c as p,w as u,a as _,h as b,b as g,d as m,F as f,u as y,z as w,i as v,I as S,j as x,t as k,k as $}from"./index-6TchRGyW.js";import{_ as C}from"./u-badge.C170sqWm.js";import{r as B}from"./uni-app.es.2TqfYVdb.js";import{_ as L}from"./_plugin-vue_export-helper.BCo6x5W8.js";const R=L({name:"u-tabs",mixins:[s,i,e({props:{duration:{type:Number,default:()=>t.tabs.duration},list:{type:Array,default:()=>t.tabs.list},lineColor:{type:String,default:()=>t.tabs.lineColor},activeStyle:{type:[String,Object],default:()=>t.tabs.activeStyle},inactiveStyle:{type:[String,Object],default:()=>t.tabs.inactiveStyle},lineWidth:{type:[String,Number],default:()=>t.tabs.lineWidth},lineHeight:{type:[String,Number],default:()=>t.tabs.lineHeight},lineBgSize:{type:String,default:()=>t.tabs.lineBgSize},itemStyle:{type:[String,Object],default:()=>t.tabs.itemStyle},scrollable:{type:Boolean,default:()=>t.tabs.scrollable},current:{type:[Number,String],default:()=>t.tabs.current},keyName:{type:String,default:()=>t.tabs.keyName}}})],data:()=>({firstTime:!0,scrollLeft:0,scrollViewWidth:0,lineOffsetLeft:0,tabsRect:{left:0},innerCurrent:0,moving:!1}),watch:{current:{immediate:!0,handler(e,t){e!==this.innerCurrent&&(this.innerCurrent=e,this.$nextTick((()=>{this.resize()})))}},list(){this.$nextTick((()=>{this.resize()}))}},computed:{textStyle(){return e=>{const t={},s=e===this.innerCurrent?a(this.activeStyle):a(this.inactiveStyle);return this.list[e].disabled&&(t.color="#c8c9cc"),r(s,t)}},propsBadge:()=>t.badge},async mounted(){this.init()},emits:["click","longPress","change","update:current"],methods:{addStyle:a,addUnit:l,setLineLeft(){const e=this.list[this.innerCurrent];if(!e)return;let t=this.list.slice(0,this.innerCurrent).reduce(((e,t)=>e+t.rect.width),0);const s=n(this.lineWidth);this.lineOffsetLeft=t+(e.rect.width-s)/2,console.log(t),this.firstTime&&setTimeout((()=>{this.firstTime=!1}),10)},animation(e,t=0){},clickHandler(e,t){this.$emit("click",{...e,index:t},t),e.disabled||(this.innerCurrent=t,this.resize(),this.$emit("update:current",t),this.$emit("change",{...e,index:t},t))},longPressHandler(e,t){this.$emit("longPress",{...e,index:t})},init(){o().then((()=>{this.resize()}))},setScrollLeft(){const e=this.list[this.innerCurrent],t=this.list.slice(0,this.innerCurrent).reduce(((e,t)=>e+t.rect.width),0),s=d().windowWidth;let i=t-(this.tabsRect.width-e.rect.width)/2-(s-this.tabsRect.right)/2+this.tabsRect.left/2;i=Math.min(i,this.scrollViewWidth-this.tabsRect.width),this.scrollLeft=Math.max(0,i)},resize(){0!==this.list.length&&Promise.all([this.getTabsRect(),this.getAllItemRect()]).then((([e,t=[]])=>{e.left>e.width&&(e.right=e.right-Math.floor(e.left/e.width)*e.width,e.left=e.left%e.width),this.tabsRect=e,this.scrollViewWidth=0,t.map(((e,t)=>{this.scrollViewWidth+=e.width,this.list[t].rect=e})),this.setLineLeft(),this.setScrollLeft()}))},getTabsRect(){return new Promise((e=>{this.queryRect("u-tabs__wrapper__scroll-view").then((t=>e(t)))}))},getAllItemRect(){return new Promise((e=>{const t=this.list.map(((e,t)=>this.queryRect(`u-tabs__wrapper__nav__item-${t}`,!0)));Promise.all(t).then((t=>e(t)))}))},queryRect(e,t){return new Promise((t=>{this.$uGetRect(`.${e}`).then((e=>{t(e)}))}))}}},[["render",function(e,t,s,i,a,r){const l=$,n=B(c("u-badge"),C),o=v,d=S;return h(),p(o,{class:w(["u-tabs",[e.customClass]])},{default:u((()=>[_(o,{class:"u-tabs__wrapper"},{default:u((()=>[b(e.$slots,"left",{},void 0,!0),_(o,{class:"u-tabs__wrapper__scroll-view-wrapper"},{default:u((()=>[_(d,{"scroll-x":e.scrollable,"scroll-left":a.scrollLeft,"scroll-with-animation":"",class:"u-tabs__wrapper__scroll-view","show-scrollbar":!1,ref:"u-tabs__wrapper__scroll-view"},{default:u((()=>[_(o,{class:"u-tabs__wrapper__nav",ref:"u-tabs__wrapper__nav"},{default:u((()=>[(h(!0),g(f,null,m(e.list,((t,s)=>(h(),p(o,{class:w(["u-tabs__wrapper__nav__item",[`u-tabs__wrapper__nav__item-${s}`,t.disabled&&"u-tabs__wrapper__nav__item--disabled"]]),key:s,onClick:e=>r.clickHandler(t,s),onLongpress:e=>r.longPressHandler(t,s),ref_for:!0,ref:`u-tabs__wrapper__nav__item-${s}`,style:y([r.addStyle(e.itemStyle),{flex:e.scrollable?"":1}])},{default:u((()=>[e.$slots.content?b(e.$slots,"content",{key:0,item:t,keyName:e.keyName,index:s},void 0,!0):e.$slots.content||!e.$slots.default&&!e.$slots.$default?(h(),p(l,{key:2,class:w([[t.disabled&&"u-tabs__wrapper__nav__item__text--disabled"],"u-tabs__wrapper__nav__item__text"]),style:y([r.textStyle(s)])},{default:u((()=>[x(k(t[e.keyName]),1)])),_:2},1032,["class","style"])):b(e.$slots,"default",{key:1,item:t,keyName:e.keyName,index:s},void 0,!0),_(n,{show:!(!t.badge||!(t.badge.show||t.badge.isDot||t.badge.value)),isDot:t.badge&&t.badge.isDot||r.propsBadge.isDot,value:t.badge&&t.badge.value||r.propsBadge.value,max:t.badge&&t.badge.max||r.propsBadge.max,type:t.badge&&t.badge.type||r.propsBadge.type,showZero:t.badge&&t.badge.showZero||r.propsBadge.showZero,bgColor:t.badge&&t.badge.bgColor||r.propsBadge.bgColor,color:t.badge&&t.badge.color||r.propsBadge.color,shape:t.badge&&t.badge.shape||r.propsBadge.shape,numberType:t.badge&&t.badge.numberType||r.propsBadge.numberType,inverted:t.badge&&t.badge.inverted||r.propsBadge.inverted,customStyle:"margin-left: 4px;"},null,8,["show","isDot","value","max","type","showZero","bgColor","color","shape","numberType","inverted"])])),_:2},1032,["onClick","onLongpress","style","class"])))),128)),_(o,{class:"u-tabs__wrapper__nav__line",ref:"u-tabs__wrapper__nav__line",style:y([{width:r.addUnit(e.lineWidth),transform:`translate(${a.lineOffsetLeft}px)`,transitionDuration:`${a.firstTime?0:e.duration}ms`,height:r.addUnit(e.lineHeight),background:e.lineColor,backgroundSize:e.lineBgSize}])},null,8,["style"])])),_:3},512)])),_:3},8,["scroll-x","scroll-left"])])),_:3}),b(e.$slots,"right",{},void 0,!0)])),_:3})])),_:3},8,["class"])}],["__scopeId","data-v-9174911f"]]);export{R as _};