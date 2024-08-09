import{l as e,n as l,m as a,f as t,s as o,p as u,r as c,o as s,c as n,w as d,a as i,h as r,j as _,t as h,v as m,u as p,z as f,E as g,k as b,i as k,a5 as y}from"./index-crKsWwdf.js";import{_ as v}from"./u-icon.QHk4GEmW.js";import{r as V}from"./uni-app.es.Bm-G7cST.js";import{_ as w}from"./_plugin-vue_export-helper.BCo6x5W8.js";const C=w({name:"u-search",mixins:[a,t,e({props:{shape:{type:String,default:()=>l.search.shape},bgColor:{type:String,default:()=>l.search.bgColor},placeholder:{type:String,default:()=>l.search.placeholder},clearabled:{type:Boolean,default:()=>l.search.clearabled},focus:{type:Boolean,default:()=>l.search.focus},showAction:{type:Boolean,default:()=>l.search.showAction},actionStyle:{type:Object,default:()=>l.search.actionStyle},actionText:{type:String,default:()=>l.search.actionText},inputAlign:{type:String,default:()=>l.search.inputAlign},inputStyle:{type:Object,default:()=>l.search.inputStyle},disabled:{type:Boolean,default:()=>l.search.disabled},borderColor:{type:String,default:()=>l.search.borderColor},searchIconColor:{type:String,default:()=>l.search.searchIconColor},color:{type:String,default:()=>l.search.color},placeholderColor:{type:String,default:()=>l.search.placeholderColor},searchIcon:{type:String,default:()=>l.search.searchIcon},searchIconSize:{type:[Number,String],default:()=>l.search.searchIconSize},margin:{type:String,default:()=>l.search.margin},animation:{type:Boolean,default:()=>l.search.animation},modelValue:{type:String,default:()=>l.search.value},value:{type:String,default:()=>l.search.value},maxlength:{type:[String,Number],default:()=>l.search.maxlength},height:{type:[String,Number],default:()=>l.search.height},label:{type:[String,Number,null],default:()=>l.search.label},adjustPosition:{type:Boolean,default:()=>!0},autoBlur:{type:Boolean,default:()=>!1}}})],data(){return{keyword:"",showClear:!1,show:!1,focused:this.focus}},watch:{keyword(e){this.$emit("update:modelValue",e),this.$emit("change",e)},modelValue:{immediate:!0,handler(e){this.keyword=e}}},computed:{showActionBtn(){return!this.animation&&this.showAction}},emits:["clear","search","custom","focus","blur","click","clickIcon","update:modelValue","change"],methods:{addStyle:o,addUnit:u,inputChange(e){this.keyword=e.detail.value},clear(){this.keyword="",this.$nextTick((()=>{this.$emit("clear")}))},search(e){this.$emit("search",e.detail.value);try{uni.hideKeyboard()}catch(l){}},custom(){this.$emit("custom",this.keyword);try{uni.hideKeyboard()}catch(e){}},getFocus(){this.focused=!0,this.animation&&this.showAction&&(this.show=!0),this.$emit("focus",this.keyword)},blur(){setTimeout((()=>{this.focused=!1}),100),this.show=!1,this.$emit("blur",this.keyword)},clickHandler(){this.disabled&&this.$emit("click")},clickIcon(e){this.$emit("clickIcon",this.keyword);try{uni.hideKeyboard()}catch(l){}}}},[["render",function(e,l,a,t,o,u){const w=b,C=V(c("u-icon"),v),S=k,I=y;return s(),n(S,{class:"u-search",onClick:u.clickHandler,style:p([{margin:e.margin},u.addStyle(e.customStyle)])},{default:d((()=>[i(S,{class:"u-search__content",style:p({backgroundColor:e.bgColor,borderRadius:"round"==e.shape?"100px":"4px",borderColor:e.borderColor})},{default:d((()=>[e.$slots.label||null!==e.label?r(e.$slots,"label",{key:0},(()=>[i(w,{class:"u-search__content__label"},{default:d((()=>[_(h(e.label),1)])),_:1})]),!0):m("",!0),i(S,{class:"u-search__content__icon"},{default:d((()=>[i(C,{onClick:u.clickIcon,size:e.searchIconSize,name:e.searchIcon,color:e.searchIconColor?e.searchIconColor:e.color},null,8,["onClick","size","name","color"])])),_:1}),i(I,{"confirm-type":"search",onBlur:u.blur,value:o.keyword,onConfirm:u.search,onInput:u.inputChange,disabled:e.disabled,onFocus:u.getFocus,focus:e.focus,maxlength:e.maxlength,"adjust-position":e.adjustPosition,"auto-blur":e.autoBlur,"placeholder-class":"u-search__content__input--placeholder",placeholder:e.placeholder,"placeholder-style":`color: ${e.placeholderColor}`,class:"u-search__content__input",type:"text",style:p([{textAlign:e.inputAlign,color:e.color,backgroundColor:e.bgColor,height:u.addUnit(e.height)},e.inputStyle])},null,8,["onBlur","value","onConfirm","onInput","disabled","onFocus","focus","maxlength","adjust-position","auto-blur","placeholder","placeholder-style","style"]),o.keyword&&e.clearabled&&o.focused?(s(),n(S,{key:1,class:"u-search__content__icon u-search__content__close",onClick:u.clear},{default:d((()=>[i(C,{name:"close",size:"11",color:"#ffffff",customStyle:"line-height: 12px"})])),_:1},8,["onClick"])):m("",!0)])),_:3},8,["style"]),i(w,{style:p([e.actionStyle]),class:f(["u-search__action",[(u.showActionBtn||o.show)&&"u-search__action--active"]]),onClick:g(u.custom,["stop","prevent"])},{default:d((()=>[_(h(e.actionText),1)])),_:1},8,["style","class","onClick"])])),_:3},8,["onClick","style"])}],["__scopeId","data-v-cc4e0b5a"]]);const S=w({data:()=>({value1:"",value2:"天山雪莲",value3:"",value4:"",value5:"",value6:"",value7:"",value8:"",value9:"",value10:"",value11:"",value12:"",value13:"",value14:"",value15:""}),watch:{value1(e,l){}},methods:{change(e){console.log(e)},clickIcon(){uni.$u.toast("点击了左侧图标")}}},[["render",function(e,l,a,t,o,u){const r=b,m=V(c("up-search"),C),p=k;return s(),n(p,{class:"u-page"},{default:d((()=>[i(p,{class:"u-demo-block"},{default:d((()=>[i(r,{class:"u-demo-block__title"},{default:d((()=>[_("基础功能")])),_:1}),i(p,{class:"u-demo-block__content"},{default:d((()=>[i(p,{class:"u-page__tag-item"},{default:d((()=>[i(m,{modelValue:o.value1,"onUpdate:modelValue":l[0]||(l[0]=e=>o.value1=e),"show-action":!1,onChange:u.change},null,8,["modelValue","onChange"])])),_:1})])),_:1})])),_:1}),i(p,{class:"u-demo-block"},{default:d((()=>[i(r,{class:"u-demo-block__title"},{default:d((()=>[_("设置初始值")])),_:1}),i(p,{class:"u-demo-block__content"},{default:d((()=>[i(p,{class:"u-page__tag-item"},{default:d((()=>[i(m,{modelValue:o.value2,"onUpdate:modelValue":l[1]||(l[1]=e=>o.value2=e),"show-action":!1},null,8,["modelValue"]),_(" "+h(o.value2),1)])),_:1})])),_:1})])),_:1}),i(p,{class:"u-demo-block"},{default:d((()=>[i(r,{class:"u-demo-block__title"},{default:d((()=>[_("搜索框形状")])),_:1}),i(p,{class:"u-demo-block__content"},{default:d((()=>[i(p,{class:"u-page__tag-item"},{default:d((()=>[i(m,{modelValue:o.value3,"onUpdate:modelValue":l[2]||(l[2]=e=>o.value3=e),"show-action":!1,shape:"round"},null,8,["modelValue"])])),_:1})])),_:1}),i(p,{class:"u-demo-block__content m-t-10"},{default:d((()=>[i(p,{class:"u-page__tag-item"},{default:d((()=>[i(m,{modelValue:o.value4,"onUpdate:modelValue":l[3]||(l[3]=e=>o.value4=e),"show-action":!1,shape:"square"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),i(p,{class:"u-demo-block"},{default:d((()=>[i(r,{class:"u-demo-block__title"},{default:d((()=>[_("右侧控件")])),_:1}),i(p,{class:"u-demo-block__content"},{default:d((()=>[i(p,{class:"u-page__tag-item"},{default:d((()=>[i(m,{modelValue:o.value5,"onUpdate:modelValue":l[4]||(l[4]=e=>o.value5=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),i(p,{class:"u-demo-block"},{default:d((()=>[i(r,{class:"u-demo-block__title"},{default:d((()=>[_("禁用输入框")])),_:1}),i(p,{class:"u-demo-block__content"},{default:d((()=>[i(p,{class:"u-page__tag-item"},{default:d((()=>[i(m,{placeholder:"输入框被禁用,可以监听点击事件进行跳转",disabled:"","show-action":!1})])),_:1})])),_:1})])),_:1}),i(p,{class:"u-demo-block"},{default:d((()=>[i(r,{class:"u-demo-block__title"},{default:d((()=>[_("点击左侧图标")])),_:1}),i(p,{class:"u-demo-block__content"},{default:d((()=>[i(p,{class:"u-page__tag-item"},{default:d((()=>[i(m,{modelValue:o.value6,"onUpdate:modelValue":l[5]||(l[5]=e=>o.value6=e),"show-action":!1,onClickIcon:u.clickIcon},null,8,["modelValue","onClickIcon"])])),_:1})])),_:1})])),_:1}),i(p,{class:"u-demo-block"},{default:d((()=>[i(r,{class:"u-demo-block__title"},{default:d((()=>[_("搜索框内容水平对齐")])),_:1}),i(p,{class:"u-demo-block__content"},{default:d((()=>[i(p,{class:"u-page__tag-item"},{default:d((()=>[i(m,{modelValue:o.value7,"onUpdate:modelValue":l[6]||(l[6]=e=>o.value7=e),"show-action":!1,"input-align":"left"},null,8,["modelValue"])])),_:1})])),_:1}),i(p,{class:"u-demo-block__content m-t-10"},{default:d((()=>[i(p,{class:"u-page__tag-item"},{default:d((()=>[i(m,{modelValue:o.value8,"onUpdate:modelValue":l[7]||(l[7]=e=>o.value8=e),"show-action":!1,"input-align":"center"},null,8,["modelValue"])])),_:1})])),_:1}),i(p,{class:"u-demo-block__content m-t-10"},{default:d((()=>[i(p,{class:"u-page__tag-item"},{default:d((()=>[i(m,{modelValue:o.value9,"onUpdate:modelValue":l[8]||(l[8]=e=>o.value9=e),"show-action":!1,"input-align":"right"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),i(p,{class:"u-demo-block"},{default:d((()=>[i(r,{class:"u-demo-block__title"},{default:d((()=>[_("自定义")])),_:1}),i(p,{class:"u-demo-block__content"},{default:d((()=>[i(p,{class:"u-page__tag-item"},{default:d((()=>[i(m,{modelValue:o.value10,"onUpdate:modelValue":l[9]||(l[9]=e=>o.value10=e),"show-action":!1,borderColor:"rgb(230, 230, 230)",bgColor:"#fff"},null,8,["modelValue"])])),_:1})])),_:1}),i(p,{class:"u-demo-block__content m-t-10"},{default:d((()=>[i(p,{class:"u-page__tag-item"},{default:d((()=>[i(m,{modelValue:o.value11,"onUpdate:modelValue":l[10]||(l[10]=e=>o.value11=e),"show-action":!1,"search-icon-color":"#FF0000"},null,8,["modelValue"])])),_:1})])),_:1}),i(p,{class:"u-demo-block__content m-t-10"},{default:d((()=>[i(p,{class:"u-page__tag-item"},{default:d((()=>[i(m,{modelValue:o.value12,"onUpdate:modelValue":l[11]||(l[11]=e=>o.value12=e),"show-action":!1,"placeholder-color":"#FF0000"},null,8,["modelValue"])])),_:1})])),_:1}),i(p,{class:"u-demo-block__content m-t-10"},{default:d((()=>[i(p,{class:"u-page__tag-item"},{default:d((()=>[i(m,{modelValue:o.value13,"onUpdate:modelValue":l[12]||(l[12]=e=>o.value13=e),"show-action":!1,color:"#FF0000"},null,8,["modelValue"])])),_:1})])),_:1}),i(p,{class:"u-demo-block__content m-t-10"},{default:d((()=>[i(p,{class:"u-page__tag-item"},{default:d((()=>[i(m,{modelValue:o.value14,"onUpdate:modelValue":l[13]||(l[13]=e=>o.value14=e),label:"手机","show-action":!1},null,8,["modelValue"])])),_:1})])),_:1}),i(p,{class:"u-demo-block__content m-t-10"},{default:d((()=>[i(p,{class:"u-page__tag-item"},{default:d((()=>[i(m,{modelValue:o.value15,"onUpdate:modelValue":l[14]||(l[14]=e=>o.value15=e),"search-icon":"scan","show-action":!1},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-39c71f3f"]]);export{S as default};