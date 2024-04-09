import{o as e,c as o,w as l,i as t,a,j as s,t as u,q as c,k as d,d as r}from"./index-d9b53327.js";import{_ as n}from"./u-input.22a12879.js";import{r as _}from"./uni-app.es.256c20de.js";import{_ as i}from"./u-text.06f64d56.js";import{_ as m}from"./u-code.d69c6bc8.js";import{_ as p}from"./u-button.71f07f74.js";import{_ as f}from"./u-gap.e8c66e57.js";import{_ as b}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.de6f3277.js";import"./u-link.ee67af5f.js";import"./u-loading-icon.4e929111.js";const h=b({data:()=>({tips:"",value:""}),watch:{value(e,o){}},methods:{codeChange(e){this.tips=e},getCode(){this.$refs.uCode.canGetCode?(uni.showLoading({title:"正在获取验证码"}),setTimeout((()=>{uni.hideLoading(),uni.$u.toast("验证码已发送"),this.$refs.uCode.start()}),2e3)):uni.$u.toast("倒计时结束后再发送")},change(e){console.log("change",e)}}},[["render",function(b,h,k,g,x,C){const j=d,y=_(r("up-input"),n),v=t,w=_(r("up-text"),i),I=_(r("up-code"),m),$=_(r("up-button"),p),L=_(r("up-gap"),f);return e(),o(v,{class:"u-page"},{default:l((()=>[a(v,{class:"u-demo-block"},{default:l((()=>[a(j,{class:"u-demo-block__title"},{default:l((()=>[s("基础使用")])),_:1}),a(v,{class:"u-demo-block__content"},{default:l((()=>[a(y,{placeholder:"请输入内容",border:"surround",modelValue:x.value,"onUpdate:modelValue":h[0]||(h[0]=e=>x.value=e),onChange:C.change},null,8,["modelValue","onChange"]),s(" "+u(x.value),1)])),_:1})])),_:1}),a(v,{class:"u-demo-block"},{default:l((()=>[a(j,{class:"u-demo-block__title"},{default:l((()=>[s("可清空内容")])),_:1}),a(v,{class:"u-demo-block__content"},{default:l((()=>[a(y,{placeholder:"请输入内容",border:"surround",clearable:""})])),_:1})])),_:1}),a(v,{class:"u-demo-block"},{default:l((()=>[a(j,{class:"u-demo-block__title"},{default:l((()=>[s("数字键盘")])),_:1}),a(v,{class:"u-demo-block__content"},{default:l((()=>[a(y,{placeholder:"请输入内容",border:"surround",type:"number",clearable:""})])),_:1})])),_:1}),a(v,{class:"u-demo-block"},{default:l((()=>[a(j,{class:"u-demo-block__title"},{default:l((()=>[s("密码类型")])),_:1}),a(v,{class:"u-demo-block__content"},{default:l((()=>[a(y,{placeholder:"请输入内容",border:"surround",password:"",clearable:""})])),_:1})])),_:1}),a(v,{class:"u-demo-block"},{default:l((()=>[a(j,{class:"u-demo-block__title"},{default:l((()=>[s("显示下划线")])),_:1}),a(v,{class:"u-demo-block__content"},{default:l((()=>[a(y,{placeholder:"请输入内容",border:"bottom",clearable:""})])),_:1})])),_:1}),a(v,{class:"u-demo-block"},{default:l((()=>[a(j,{class:"u-demo-block__title"},{default:l((()=>[s("禁用状态")])),_:1}),a(v,{class:"u-demo-block__content"},{default:l((()=>[a(y,{placeholder:"禁用状态",border:"surround",disabled:""})])),_:1})])),_:1}),a(v,{class:"u-demo-block"},{default:l((()=>[a(j,{class:"u-demo-block__title"},{default:l((()=>[s("圆形")])),_:1}),a(v,{class:"u-demo-block__content"},{default:l((()=>[a(y,{placeholder:"请输入内容",border:"surround",shape:"circle"})])),_:1})])),_:1}),a(v,{class:"u-demo-block"},{default:l((()=>[a(j,{class:"u-demo-block__title"},{default:l((()=>[s("前后图标")])),_:1}),a(v,{class:"u-demo-block__content"},{default:l((()=>[a(y,{placeholder:"前置图标",prefixIcon:"search",prefixIconStyle:"font-size: 22px;color: #909399"})])),_:1}),a(v,{class:"u-demo-block__content",style:{"margin-top":"15px"}},{default:l((()=>[a(y,{placeholder:"后置图标",suffixIcon:"map-fill",suffixIconStyle:"color: #909399"})])),_:1})])),_:1}),a(v,{class:"u-demo-block"},{default:l((()=>[a(j,{class:"u-demo-block__title"},{default:l((()=>[s("前后插槽")])),_:1}),a(v,{class:"u-demo-block__content"},{default:l((()=>[a(y,{placeholder:"前置插槽"},{default:l((()=>[a(w,{text:"http://",slot:"prefix",margin:"0 3px 0 0",type:"tips"})])),_:1})])),_:1}),a(v,{class:"u-demo-block__content",style:{"margin-top":"15px"}},{default:l((()=>[a(y,{placeholder:"后置插槽"},{default:l((()=>[c("template",{slot:"suffix"},[a(I,{ref:"uCode",onChange:C.codeChange,seconds:"20",changeText:"X秒重新获取哈哈哈"},null,8,["onChange"]),a($,{onClick:C.getCode,text:x.tips,type:"success",size:"mini"},null,8,["onClick","text"])])])),_:1})])),_:1})])),_:1}),a(L,{bgColor:"#fff",height:"50"})])),_:1})}]]);export{h as default};
