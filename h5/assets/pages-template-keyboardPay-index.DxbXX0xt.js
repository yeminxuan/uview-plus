import{_ as s,r as a,u as e,a as o,A as t,aZ as n,a8 as d,o as l,f as i,w as u,i as p,g as h,m as c,n as r}from"./index-C1jc28HG.js";const f=s({data:()=>({show:!1,password:""}),onLoad(){},methods:{onChange(s){this.password.length<6&&(this.password+=s),this.password.length>=6&&this.pay()},onBackspace(s){this.password.length>0&&(this.password=this.password.substring(0,this.password.length-1))},pay(){uni.showLoading({title:"支付中"}),setTimeout((()=>{uni.hideLoading(),this.show=!1,uni.showToast({icon:"success",title:"支付成功"})}),2e3)},showPop(s=!0){this.password="",this.show=s},finish(){console.log(11111)}}},[["render",function(s,f,w,g,m,_){const b=a(o("up-icon"),e),k=r,x=a(o("up-button"),t),y=p,C=a(o("up-message-input"),n),B=a(o("up-keyboard"),d);return l(),i(y,null,{default:u((()=>[h(y,{class:"u-padding-40"},{default:u((()=>[h(x,{type:"success",onClick:f[0]||(f[0]=s=>_.showPop(!0))},{default:u((()=>[h(b,{name:"red-packet"}),h(k,{class:"u-padding-left-10"},{default:u((()=>[c("发送1.00元红包")])),_:1})])),_:1})])),_:1}),h(B,{default:"",ref:"uKeyboard",mode:"number",mask:!0,"mask-close-able":!1,"dot-enabled":!1,show:m.show,"safe-area-inset-bottom":!0,tooltip:!1,onChange:_.onChange,onBackspace:_.onBackspace},{default:u((()=>[h(y,null,{default:u((()=>[h(y,{class:"u-text-center u-padding-20 money"},{default:u((()=>[h(k,null,{default:u((()=>[c("1.00")])),_:1}),h(k,{class:"u-font-20 u-padding-left-10"},{default:u((()=>[c("元")])),_:1}),h(y,{class:"u-padding-10 close","data-flag":"false",onClick:f[1]||(f[1]=s=>_.showPop(!1))},{default:u((()=>[h(b,{name:"close",color:"#333333",size:"28"})])),_:1})])),_:1}),h(y,{class:"u-flex u-row-center"},{default:u((()=>[h(C,{mode:"box",maxlength:6,"dot-fill":!0,modelValue:m.password,"onUpdate:modelValue":f[2]||(f[2]=s=>m.password=s),"disabled-keyboard":!0,onFinish:_.finish},null,8,["modelValue","onFinish"])])),_:1}),h(y,{class:"u-text-center u-padding-top-10 u-padding-bottom-20 tips"},{default:u((()=>[c("支付键盘")])),_:1})])),_:1})])),_:1},8,["show","onChange","onBackspace"])])),_:1})}],["__scopeId","data-v-68890856"]]);export{f as default};