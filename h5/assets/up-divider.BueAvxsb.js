import{_ as e}from"./up-line.BBfW2jaO.js";import{h as t,j as i,m as l,k as o,l as s,p as d,r,o as a,c as n,w as u,a as c,f as p,q as h,t as y,s as x,g as f,i as m}from"./index-C3UXxwfW.js";import{r as S}from"./uni-app.es.CqYlZVXb.js";import{_ as v}from"./_plugin-vue_export-helper.BCo6x5W8.js";const _=v({name:"up-divider",mixins:[l,o,t({props:{dashed:{type:Boolean,default:()=>i.divider.dashed},hairline:{type:Boolean,default:()=>i.divider.hairline},dot:{type:Boolean,default:()=>i.divider.dot},textPosition:{type:String,default:()=>i.divider.textPosition},text:{type:[String,Number],default:()=>i.divider.text},textSize:{type:[String,Number],default:()=>i.divider.textSize},textColor:{type:String,default:()=>i.divider.textColor},lineColor:{type:String,default:()=>i.divider.lineColor}}})],computed:{textStyle(){const e={};return e.fontSize=s(this.textSize),e.color=this.textColor,e},leftLineStyle(){const e={};return"left"===this.textPosition?e.width="80rpx":e.flex=1,e},rightLineStyle(){const e={};return"right"===this.textPosition?e.width="80rpx":e.flex=1,e}},emits:["click"],methods:{addStyle:d,click(){this.$emit("click")}}},[["render",function(t,i,l,o,s,d){const v=S(r("up-line"),e),_=f,g=m;return a(),n(g,{class:"up-divider",style:h([d.addStyle(t.customStyle)]),onClick:d.click},{default:u((()=>[c(v,{color:t.lineColor,customStyle:d.leftLineStyle,hairline:t.hairline,dashed:t.dashed},null,8,["color","customStyle","hairline","dashed"]),t.dot?(a(),n(_,{key:0,class:"up-divider__dot"},{default:u((()=>[p("●")])),_:1})):t.text?(a(),n(_,{key:1,class:"up-divider__text",style:h([d.textStyle])},{default:u((()=>[p(y(t.text),1)])),_:1},8,["style"])):x("",!0),c(v,{color:t.lineColor,customStyle:d.rightLineStyle,hairline:t.hairline,dashed:t.dashed},null,8,["color","customStyle","hairline","dashed"])])),_:1},8,["style","onClick"])}],["__scopeId","data-v-d405bc6b"]]);export{_};