import{o as s,c as l,w as t,i as e,a,f as o,n as u,I as i,C as c,d as r,g as d}from"./index-7259cb7d.js";import{_ as n}from"./u-icon.807c0673.js";import{r as f}from"./uni-app.es.58690612.js";import{_ as p}from"./_plugin-vue_export-helper.1b428a4d.js";const m=p({data:()=>({tel:""}),computed:{inputStyle(){let s={};return this.tel&&(s.color="#fff",s.backgroundColor=this.$u.color.warning),s}},methods:{submit(){this.$u.test.mobile(this.tel)&&this.$u.route({url:"pages/template/login/code"})}}},[["render",function(p,m,_,b,h,g){const w=e,y=i,x=c,C=f(r("u-icon"),n),j=d;return s(),l(w,{class:"wrap"},{default:t((()=>[a(w,{class:"top"}),a(w,{class:"content"},{default:t((()=>[a(w,{class:"title"},{default:t((()=>[o("欢迎登录")])),_:1}),a(y,{class:"u-border-bottom",type:"number",modelValue:h.tel,"onUpdate:modelValue":m[0]||(m[0]=s=>h.tel=s),placeholder:"请输入手机号"},null,8,["modelValue"]),a(w,{class:"tips"},{default:t((()=>[o("未注册的手机号验证后自动创建账号")])),_:1}),a(x,{onClick:g.submit,style:u([g.inputStyle]),class:"getCaptcha"},{default:t((()=>[o("获取短信验证码")])),_:1},8,["onClick","style"]),a(w,{class:"alternative"},{default:t((()=>[a(w,{class:"password"},{default:t((()=>[o("密码登录")])),_:1}),a(w,{class:"issue"},{default:t((()=>[o("遇到问题")])),_:1})])),_:1})])),_:1}),a(w,{class:"buttom"},{default:t((()=>[a(w,{class:"loginType"},{default:t((()=>[a(w,{class:"wechat item"},{default:t((()=>[a(w,{class:"icon"},{default:t((()=>[a(C,{size:"40",name:"weixin-fill",color:"rgb(83,194,64)"})])),_:1}),o(" 微信 ")])),_:1}),a(w,{class:"QQ item"},{default:t((()=>[a(w,{class:"icon"},{default:t((()=>[a(C,{size:"40",name:"qq-fill",color:"rgb(17,183,233)"})])),_:1}),o(" QQ ")])),_:1})])),_:1}),a(w,{class:"hint"},{default:t((()=>[o(" 登录代表同意 "),a(j,{class:"link"},{default:t((()=>[o("用户协议、隐私政策，")])),_:1}),o(" 并授权使用您的账号信息（如昵称、头像、收获地址）以便您统一管理 ")])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-d297040b"]]);export{m as default};