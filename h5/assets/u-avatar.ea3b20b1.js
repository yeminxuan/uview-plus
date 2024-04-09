import{_ as A}from"./u-icon.de6f3277.js";import{m as a,f as t,d as e,o as r,c as o,w as l,h as i,b as c,F as n,p as s,n as u,e as d,i as m}from"./index-d9b53327.js";import{r as p}from"./uni-app.es.256c20de.js";import{_ as f}from"./u-text.06f64d56.js";import{_ as v}from"./_plugin-vue_export-helper.1b428a4d.js";const g={props:{src:{type:String,default:()=>uni.$u.props.avatar.src},shape:{type:String,default:()=>uni.$u.props.avatar.shape},size:{type:[String,Number],default:()=>uni.$u.props.avatar.size},mode:{type:String,default:()=>uni.$u.props.avatar.mode},text:{type:String,default:()=>uni.$u.props.avatar.text},bgColor:{type:String,default:()=>uni.$u.props.avatar.bgColor},color:{type:String,default:()=>uni.$u.props.avatar.color},fontSize:{type:[String,Number],default:()=>uni.$u.props.avatar.fontSize},icon:{type:String,default:()=>uni.$u.props.avatar.icon},mpAvatar:{type:Boolean,default:()=>uni.$u.props.avatar.mpAvatar},randomBgColor:{type:Boolean,default:()=>uni.$u.props.avatar.randomBgColor},defaultUrl:{type:String,default:()=>uni.$u.props.avatar.defaultUrl},colorIndex:{type:[String,Number],validator:A=>uni.$u.test.range(A,[0,19])||""===A,default:()=>uni.$u.props.avatar.colorIndex},name:{type:String,default:()=>uni.$u.props.avatar.name}}};const b=v({name:"u-avatar",mixins:[a,t,g],data(){return{colors:["#ffb34b","#f2bba9","#f7a196","#f18080","#88a867","#bfbf39","#89c152","#94d554","#f19ec2","#afaae4","#e1b0df","#c38cc1","#72dcdc","#9acdcb","#77b1cc","#448aca","#86cefa","#98d1ee","#73d1f1","#80a7dc"],avatarUrl:this.src,allowMp:!1}},watch:{src:{immediate:!0,handler(A){this.avatarUrl=A,A||this.errorHandler()}}},computed:{imageStyle:()=>({})},created(){this.init()},emits:["click"],methods:{init(){},isImg(){return-1!==this.src.indexOf("/")},errorHandler(){this.avatarUrl=this.defaultUrl||"data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjREMEQwRkY0RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjREMEQwRkY1RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEQwRDBGRjJGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEQwRDBGRjNGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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"},clickHandler(){this.$emit("click",this.name)}}},[["render",function(a,t,v,g,b,x){const R=p(e("u-icon"),A),y=p(e("up-text"),f),B=d,D=m;return r(),o(D,{class:s(["u-avatar",[`u-avatar--${a.shape}`]]),style:u([{backgroundColor:a.text||a.icon?a.randomBgColor?b.colors[""!==a.colorIndex?a.colorIndex:a.$u.random(0,19)]:a.bgColor:"transparent",width:a.$u.addUnit(a.size),height:a.$u.addUnit(a.size)},a.$u.addStyle(a.customStyle)]),onClick:x.clickHandler},{default:l((()=>[i(a.$slots,"default",{},(()=>[a.mpAvatar&&b.allowMp?(r(),c(n,{key:0},[],64)):a.icon?(r(),o(R,{key:1,name:a.icon,size:a.fontSize,color:a.color},null,8,["name","size","color"])):a.text?(r(),o(y,{key:2,text:a.text,size:a.fontSize,color:a.color,align:"center",customStyle:"justify-content: center"},null,8,["text","size","color"])):(r(),o(B,{key:3,class:s(["u-avatar__image",[`u-avatar__image--${a.shape}`]]),src:b.avatarUrl||a.defaultUrl,mode:a.mode,onError:x.errorHandler,style:u([{width:a.$u.addUnit(a.size),height:a.$u.addUnit(a.size)}])},null,8,["class","src","mode","onError","style"]))]),!0)])),_:3},8,["class","style","onClick"])}],["__scopeId","data-v-2ea0033c"]]);export{b as _};
