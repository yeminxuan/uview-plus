import{_ as t}from"./u-gap.7c7ec09c.js";import{d as o,o as e,c as i,w as n,a as s,l as r,n as f,f as a,k as p,g as u,t as l,h as c,i as m,b as y,r as g,F as d,e as h}from"./index-4f0c5e1d.js";import{r as C}from"./uni-app.es.fcad82c0.js";import{_ as S}from"./u-cell.a5a44b23.js";import{_ as w}from"./u-cell-group.ec832c31.js";import{_}from"./u-status-bar.669c7699.js";import{_ as b}from"./u-icon.e9ca9d71.js";import{_ as $}from"./u-transition.589ae8d1.js";import{m as v,a as z}from"./mixin.d0c91ebc.js";import{_ as T}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-line.0a9c4e0a.js";const I=T({name:"u-notify",mixins:[v,z,{props:{top:{type:[String,Number],default:()=>uni.$u.props.notify.top},type:{type:String,default:()=>uni.$u.props.notify.type},color:{type:String,default:()=>uni.$u.props.notify.color},bgColor:{type:String,default:()=>uni.$u.props.notify.bgColor},message:{type:String,default:()=>uni.$u.props.notify.message},duration:{type:[String,Number],default:()=>uni.$u.props.notify.duration},fontSize:{type:[String,Number],default:()=>uni.$u.props.notify.fontSize},safeAreaInsetTop:{type:Boolean,default:()=>uni.$u.props.notify.safeAreaInsetTop}}}],data:()=>({open:!1,timer:null,config:{top:uni.$u.props.notify.top,type:uni.$u.props.notify.type,color:uni.$u.props.notify.color,bgColor:uni.$u.props.notify.bgColor,message:uni.$u.props.notify.message,duration:uni.$u.props.notify.duration,fontSize:uni.$u.props.notify.fontSize,safeAreaInsetTop:uni.$u.props.notify.safeAreaInsetTop},tmpConfig:{}}),computed:{containerStyle(){let t=0;0===this.tmpConfig.top&&(t=44);return{top:uni.$u.addUnit(0===this.tmpConfig.top?t:this.tmpConfig.top),position:"fixed",left:0,right:0,zIndex:10076}},backgroundColor(){const t={};return this.tmpConfig.bgColor&&(t.backgroundColor=this.tmpConfig.bgColor),t},icon(){let t;return"success"===this.tmpConfig.type?t="checkmark-circle":"error"===this.tmpConfig.type?t="close-circle":"warning"===this.tmpConfig.type&&(t="error-circle"),t}},created(){["primary","success","error","warning"].map((t=>{this[t]=o=>this.show({type:t,message:o})}))},methods:{show(t){this.tmpConfig=uni.$u.deepMerge(this.config,t),this.clearTimer(),this.open=!0,this.tmpConfig.duration>0&&(this.timer=setTimeout((()=>{this.open=!1,this.clearTimer(),"function"==typeof this.tmpConfig.complete&&this.tmpConfig.complete()}),this.tmpConfig.duration))},close(){this.clearTimer()},clearTimer(){this.open=!1,clearTimeout(this.timer),this.timer=null}},beforeUnmount(){this.clearTimer()}},[["render",function(t,y,g,d,h,S){const w=C(o("u-status-bar"),_),v=C(o("u-icon"),b),z=c,T=m,I=C(o("u-transition"),$);return e(),i(I,{mode:"slide-down",customStyle:S.containerStyle,show:h.open},{default:n((()=>[s(T,{class:r(["u-notify",[`u-notify--${h.tmpConfig.type}`]]),style:f([S.backgroundColor,t.$u.addStyle(t.customStyle)])},{default:n((()=>[h.tmpConfig.safeAreaInsetTop?(e(),i(w,{key:0})):a("v-if",!0),s(T,{class:"u-notify__warpper"},{default:n((()=>[p(t.$slots,"icon",{},(()=>[["success","warning","error"].includes(h.tmpConfig.type)?(e(),i(v,{key:0,name:h.tmpConfig.icon,color:h.tmpConfig.color,size:1.3*h.tmpConfig.fontSize,customStyle:{marginRight:"4px"}},null,8,["name","color","size"])):a("v-if",!0)]),!0),s(z,{class:"u-notify__warpper__text",style:f({fontSize:t.$u.addUnit(h.tmpConfig.fontSize),color:h.tmpConfig.color})},{default:n((()=>[u(l(h.tmpConfig.message),1)])),_:1},8,["style"])])),_:3})])),_:3},8,["class","style"])])),_:3},8,["customStyle","show"])}],["__scopeId","data-v-a2dda96c"]]);const k=T({data:()=>({show:!1,notifyData:{message:"notify顶部提示",type:"primary",color:"#ffffff",bgColor:"",fontSize:15,duration:3e3},list:[{notifyData:{message:"notify顶部提示",type:"primary",color:"#ffffff",bgColor:"",fontSize:15,duration:3e3},title:"主要通知",iconUrl:"https://cdn.uviewui.com/uview/demo/notify/main.png"},{notifyData:{message:"notify顶部提示",type:"success",color:"#ffffff",bgColor:"",fontSize:15,duration:3e3,safeAreaInsetTop:!1},title:"成功通知",iconUrl:"https://cdn.uviewui.com/uview/demo/notify/success.png"},{notifyData:{message:"notify顶部提示",type:"error",color:"#ffffff",bgColor:"",fontSize:14,duration:3e3,safeAreaInsetTop:!1},title:"危险通知",iconUrl:"https://cdn.uviewui.com/uview/demo/notify/error.png"},{notifyData:{message:"notify顶部提示",type:"warning",color:"#ffffff",bgColor:"",fontSize:15,duration:3e3,safeAreaInsetTop:!1},title:"警告通知",iconUrl:"https://cdn.uviewui.com/uview/demo/notify/warning.png"},{notifyData:{message:"notify顶部提示",color:"#fff",bgColor:"#000",fontSize:15,duration:3e3,safeAreaInsetTop:!1},title:"自定义样式",iconUrl:"https://cdn.uviewui.com/uview/demo/notify/customStyle.png"},{notifyData:{message:"notify顶部提示",type:"primary",color:"#ffffff",bgColor:"",fontSize:15,duration:6e3,safeAreaInsetTop:!1},title:"自定义时间",iconUrl:"https://cdn.uviewui.com/uview/demo/notify/customTime.png"},{notifyData:{message:"notify顶部提示",color:"#fff",bgColor:"",fontSize:15,duration:3e3,safeAreaInsetTop:!0},title:"插入状态栏高度",iconUrl:"https://cdn.uviewui.com/uview/demo/notify/height.png"}]}),onLoad(){},methods:{openNotify(t){this.$refs.uNotify.show({...t})}}},[["render",function(r,f,a,p,u,l){const c=C(o("u-gap"),t),_=h,b=C(o("u-cell"),S),$=C(o("u-cell-group"),w),v=C(o("u-notify"),I),z=m;return e(),i(z,{class:"u-page"},{default:n((()=>[s(c,{height:"30",bgColor:"#fff"}),s($,null,{default:n((()=>[(e(!0),y(d,null,g(u.list,((t,o)=>(e(),i(b,{titleStyle:{fontWeight:500},onClick:o=>l.openNotify(t.notifyData),title:t.title,key:o,isLink:""},{default:n((()=>[s(_,{slot:"icon",class:"u-cell-icon",src:t.iconUrl,mode:"widthFix"},null,8,["src"])])),_:2},1032,["onClick","title"])))),128))])),_:1}),s(v,{ref:"uNotify"},null,512)])),_:1})}],["__scopeId","data-v-6ef26ee7"]]);export{k as default};