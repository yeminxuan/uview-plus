import{_ as s}from"./up-icon.BrIVCe5a.js";import{r as o,o as a,c as e,w as t,i as n,a as p,f as i,g as d}from"./index-C3UXxwfW.js";import{r as u}from"./uni-app.es.CqYlZVXb.js";import{_ as l}from"./up-button.DtY6i3cW.js";import{_ as r}from"./up-message-input.B41_pVLe.js";import{_ as c}from"./up-keyboard.ByVqQKXE.js";import{_ as m}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./up-loading-icon.DXCjh8Fn.js";import"./up-popup.wdWgQwv2.js";import"./up-overlay.CoCKb7JO.js";import"./up-transition.CkVV8kmf.js";import"./up-status-bar.VZkP8NkI.js";import"./up-safe-bottom.DPzYJrA4.js";const h=m({data:()=>({show:!1,password:""}),onLoad(){},methods:{onChange(s){this.password.length<6&&(this.password+=s),this.password.length>=6&&this.pay()},onBackspace(s){this.password.length>0&&(this.password=this.password.substring(0,this.password.length-1))},pay(){uni.showLoading({title:"支付中"}),setTimeout((()=>{uni.hideLoading(),this.show=!1,uni.showToast({icon:"success",title:"支付成功"})}),2e3)},showPop(s=!0){this.password="",this.show=s},finish(){console.log(11111)}}},[["render",function(m,h,f,g,w,_){const b=u(o("up-icon"),s),j=d,k=u(o("up-button"),l),y=n,x=u(o("up-message-input"),r),C=u(o("up-keyboard"),c);return a(),e(y,null,{default:t((()=>[p(y,{class:"u-padding-40"},{default:t((()=>[p(k,{type:"success",onClick:h[0]||(h[0]=s=>_.showPop(!0))},{default:t((()=>[p(b,{name:"red-packet"}),p(j,{class:"u-padding-left-10"},{default:t((()=>[i("发送1.00元红包")])),_:1})])),_:1})])),_:1}),p(C,{default:"",ref:"uKeyboard",mode:"number",mask:!0,"mask-close-able":!1,"dot-enabled":!1,show:w.show,"safe-area-inset-bottom":!0,tooltip:!1,onChange:_.onChange,onBackspace:_.onBackspace},{default:t((()=>[p(y,null,{default:t((()=>[p(y,{class:"u-text-center u-padding-20 money"},{default:t((()=>[p(j,null,{default:t((()=>[i("1.00")])),_:1}),p(j,{class:"u-font-20 u-padding-left-10"},{default:t((()=>[i("元")])),_:1}),p(y,{class:"u-padding-10 close","data-flag":"false",onClick:h[1]||(h[1]=s=>_.showPop(!1))},{default:t((()=>[p(b,{name:"close",color:"#333333",size:"28"})])),_:1})])),_:1}),p(y,{class:"u-flex u-row-center"},{default:t((()=>[p(x,{mode:"box",maxlength:6,"dot-fill":!0,modelValue:w.password,"onUpdate:modelValue":h[2]||(h[2]=s=>w.password=s),"disabled-keyboard":!0,onFinish:_.finish},null,8,["modelValue","onFinish"])])),_:1}),p(y,{class:"u-text-center u-padding-top-10 u-padding-bottom-20 tips"},{default:t((()=>[i("支付键盘")])),_:1})])),_:1})])),_:1},8,["show","onChange","onBackspace"])])),_:1})}],["__scopeId","data-v-68890856"]]);export{h as default};