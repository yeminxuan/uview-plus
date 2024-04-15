import{l as t,m as o,f as e,d as i,o as l,c as s,w as a,a as n,u as p,n as u,j as r,t as d,p as c,b as _,F as h,r as f,k as b,i as x}from"./index-5f0950f1.js";import{_ as y}from"./u-overlay.1334963e.js";import{r as m}from"./uni-app.es.5e4d89a0.js";import{_ as w}from"./u-line.f7878e1e.js";import{_ as g}from"./u-transition.0fba8c47.js";import{_ as k}from"./_plugin-vue_export-helper.1b428a4d.js";const I=k({name:"u-tooltip",mixins:[o,e,{props:{text:{type:[String,Number],default:()=>t.tooltip.text},copyText:{type:[String,Number],default:()=>t.tooltip.copyText},size:{type:[String,Number],default:()=>t.tooltip.size},color:{type:String,default:()=>t.tooltip.color},bgColor:{type:String,default:()=>t.tooltip.bgColor},direction:{type:String,default:()=>t.tooltip.direction},zIndex:{type:[String,Number],default:()=>t.tooltip.zIndex},showCopy:{type:Boolean,default:()=>t.tooltip.showCopy},buttons:{type:Array,default:()=>t.tooltip.buttons},overlay:{type:Boolean,default:()=>t.tooltip.overlay},showToast:{type:Boolean,default:()=>t.tooltip.showToast}}}],data:()=>({showTooltip:!0,textId:uni.$u.guid(),tooltipId:uni.$u.guid(),tooltipTop:-1e4,tooltipInfo:{width:0,left:0},textInfo:{width:0,left:0},indicatorStyle:{},screenGap:12,indicatorWidth:14}),watch:{propsChange(){this.getElRect()}},computed:{propsChange(){return[this.text,this.buttons]},tooltipStyle(){const t={transform:`translateY(${"top"===this.direction?"-100%":"100%"})`},o=uni.$u.sys(),e=uni.$u.getPx,i=uni.$u.addUnit;if(this.tooltipInfo.width/2>this.textInfo.left+this.textInfo.width/2-this.screenGap)this.indicatorStyle={},t.left=`-${i(this.textInfo.left-this.screenGap)}`,this.indicatorStyle.left=i(this.textInfo.width/2-e(t.left)-this.indicatorWidth/2);else if(this.tooltipInfo.width/2>o.windowWidth-this.textInfo.right+this.textInfo.width/2-this.screenGap)this.indicatorStyle={},t.right=`-${i(o.windowWidth-this.textInfo.right-this.screenGap)}`,this.indicatorStyle.right=i(this.textInfo.width/2-e(t.right)-this.indicatorWidth/2);else{const o=Math.abs(this.textInfo.width/2-this.tooltipInfo.width/2);t.left=this.textInfo.width>this.tooltipInfo.width?i(o):-i(o),this.indicatorStyle={}}return"top"===this.direction?(t.marginTop="-10px",this.indicatorStyle.bottom="-4px"):(t.marginBottom="-10px",this.indicatorStyle.top="-4px"),t}},mounted(){this.init()},emits:["click"],methods:{init(){this.getElRect()},async longpressHandler(){this.tooltipTop=0,this.showTooltip=!0},overlayClickHandler(){this.showTooltip=!1},btnClickHandler(t){this.showTooltip=!1,this.$emit("click",this.showCopy?t+1:t)},queryRect(t){return new Promise((o=>{this.$uGetRect(`#${t}`).then((t=>{o(t)}))}))},getElRect(){this.showTooltip=!0,this.tooltipTop=-1e4,uni.$u.sleep(500).then((()=>{this.queryRect(this.tooltipId).then((t=>{this.tooltipInfo=t,this.showTooltip=!1})),this.queryRect(this.textId).then((t=>{this.textInfo=t}))}))},setClipboardData(){this.showTooltip=!1,this.$emit("click",0),uni.setClipboardData({data:this.copyText||this.text,success:()=>{this.showToast&&uni.$u.toast("复制成功")},fail:()=>{this.showToast&&uni.$u.toast("复制失败")},complete:()=>{this.showTooltip=!1}})}}},[["render",function(t,o,e,k,I,C){const T=m(i("u-overlay"),y),S=b,$=x,v=m(i("u-line"),w),j=m(i("u-transition"),g);return l(),s($,{class:"u-tooltip",style:u([t.$u.addStyle(t.customStyle)])},{default:a((()=>[n(T,{show:I.showTooltip&&-1e4!==I.tooltipTop&&t.overlay,customStyle:"backgroundColor: rgba(0, 0, 0, 0)",onClick:C.overlayClickHandler},null,8,["show","onClick"]),n($,{class:"u-tooltip__wrapper"},{default:a((()=>[n(S,{class:"u-tooltip__wrapper__text",id:I.textId,ref:I.textId,userSelect:!1,selectable:!1,onLongpress:p(C.longpressHandler,["stop"]),style:u({color:t.color,backgroundColor:t.bgColor&&I.showTooltip&&-1e4!==I.tooltipTop?t.bgColor:"transparent"})},{default:a((()=>[r(d(t.text),1)])),_:1},8,["id","onLongpress","style"]),n(j,{mode:"fade",show:I.showTooltip,duration:"300",customStyle:{position:"absolute",top:t.$u.addUnit(I.tooltipTop),zIndex:t.zIndex,...C.tooltipStyle}},{default:a((()=>[n($,{class:"u-tooltip__wrapper__popup",id:I.tooltipId,ref:I.tooltipId},{default:a((()=>[t.showCopy||t.buttons.length?(l(),s($,{key:0,class:"u-tooltip__wrapper__popup__indicator","hover-class":"u-tooltip__wrapper__popup__indicator--hover",style:u([I.indicatorStyle,{width:t.$u.addUnit(I.indicatorWidth),height:t.$u.addUnit(I.indicatorWidth)}])},null,8,["style"])):c("",!0),n($,{class:"u-tooltip__wrapper__popup__list"},{default:a((()=>[t.showCopy?(l(),s($,{key:0,class:"u-tooltip__wrapper__popup__list__btn","hover-class":"u-tooltip__wrapper__popup__list__btn--hover",onClick:C.setClipboardData},{default:a((()=>[n(S,{class:"u-tooltip__wrapper__popup__list__btn__text"},{default:a((()=>[r("复制")])),_:1})])),_:1},8,["onClick"])):c("",!0),t.showCopy&&t.buttons.length>0?(l(),s(v,{key:1,direction:"column",color:"#8d8e90",length:"18"})):c("",!0),(l(!0),_(h,null,f(t.buttons,((o,e)=>(l(),_(h,{key:e},[n($,{class:"u-tooltip__wrapper__popup__list__btn","hover-class":"u-tooltip__wrapper__popup__list__btn--hover"},{default:a((()=>[n(S,{class:"u-tooltip__wrapper__popup__list__btn__text",onClick:t=>C.btnClickHandler(e)},{default:a((()=>[r(d(o),1)])),_:2},1032,["onClick"])])),_:2},1024),e<t.buttons.length-1?(l(),s(v,{key:0,direction:"column",color:"#8d8e90",length:"18"})):c("",!0)],64)))),128))])),_:1})])),_:1},8,["id"])])),_:1},8,["show","customStyle"])])),_:1})])),_:1},8,["style"])}],["__scopeId","data-v-a2d0a050"]]);const C=k({data:()=>({text1:"长按文本，上方提示",text2:"长按文本，下方提示",text3:"显示多个扩展按钮",text4:"自动调整气泡位置",text5:"长按文本，显示背景色",buttons1:["扩展"],buttons2:["扩展","搜索","翻译"],buttons3:["扩展","搜索","翻译"]}),onLoad(){},methods:{click(t){console.log("index",t)}}},[["render",function(t,o,e,p,u,d){const c=b,_=m(i("up-tooltip"),I),h=x;return l(),s(h,{class:"u-page"},{default:a((()=>[n(h,{class:"u-demo-block"},{default:a((()=>[n(c,{class:"u-demo-block__title"},{default:a((()=>[r("基础使用")])),_:1}),n(h,{class:"u-demo-block__content"},{default:a((()=>[n(_,{text:u.text1,overlay:""},null,8,["text"])])),_:1})])),_:1}),n(h,{class:"u-demo-block"},{default:a((()=>[n(c,{class:"u-demo-block__title"},{default:a((()=>[r("下方显示")])),_:1}),n(h,{class:"u-demo-block__content",style:{"padding-bottom":"30px"}},{default:a((()=>[n(_,{text:u.text2,direction:"bottom"},null,8,["text"])])),_:1})])),_:1}),n(h,{class:"u-demo-block"},{default:a((()=>[n(c,{class:"u-demo-block__title"},{default:a((()=>[r("扩展按钮")])),_:1}),n(h,{class:"u-demo-block__content"},{default:a((()=>[n(_,{text:u.text3,buttons:u.buttons1,onClick:d.click},null,8,["text","buttons","onClick"])])),_:1})])),_:1}),n(h,{class:"u-demo-block"},{default:a((()=>[n(c,{class:"u-demo-block__title"},{default:a((()=>[r("自动调整位置")])),_:1}),n(h,{class:"u-demo-block__content"},{default:a((()=>[n(_,{text:u.text4,buttons:u.buttons2},null,8,["text","buttons"])])),_:1})])),_:1}),n(h,{class:"u-demo-block"},{default:a((()=>[n(c,{class:"u-demo-block__title"},{default:a((()=>[r("高亮选中文本背景色")])),_:1}),n(h,{class:"u-demo-block__content"},{default:a((()=>[n(_,{text:u.text5,buttons:u.buttons3,bgColor:"#e3e4e6"},null,8,["text","buttons"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-0b7ee874"]]);export{C as default};