import{r as e,o as l,c as a,w as c,i as o,a as t,j as u,b as d,d as n,F as s,k as m}from"./index-4Swgwnyy.js";import{_ as b,a as _}from"./u-checkbox-group.Dl4WeoHr.js";import{r as k}from"./uni-app.es.DgvI-5iw.js";import{_ as i}from"./u-button.-fkDVEoV.js";import{_ as h}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./u-icon.CuuEOv11.js";import"./u-loading-icon.DR5gnhDQ.js";const x=h({data:()=>({checkboxList1:[{name:"苹果",disabled:!1},{name:"香蕉",disabled:!1},{name:"橙子",disabled:!1}],aloneChecked:!1,checkboxValue1:["苹果","橙子"],checkboxList2:[{name:"西游记",disabled:!1},{name:"红楼梦",disabled:!1},{name:"三国演义",disabled:!1},{name:"水浒传",disabled:!1}],checkboxValue2:["西游记","红楼梦","三国演义","水浒传"],checkboxList3:[{name:"冬瓜",disabled:!1},{name:"西瓜",disabled:!1},{name:"黄瓜",disabled:!1},{name:"傻瓜",disabled:!1}],checkboxValue3:["傻瓜"],checkboxList4:[{name:"黄庭坚",disabled:!1},{name:"欧阳修",disabled:!1},{name:"苏小宝",disabled:!1},{name:"王安石",disabled:!1}],checkboxValue4:["黄庭坚","欧阳修","王安石"],checkboxList5:[{name:"红色",disabled:!1},{name:"黄色",disabled:!1},{name:"绿色",disabled:!1},{name:"蓝色",disabled:!1}],checkboxValue5:["绿色"],checkboxList6:[{name:"小鸟",disabled:!1},{name:"游艇",disabled:!1},{name:"轮船",disabled:!1},{name:"飞机",disabled:!1}],checkboxValue6:["游艇","轮船"],checkboxList7:[{name:"汽车",disabled:!1},{name:"蒸汽机",disabled:!1},{name:"猪肉",disabled:!1},{name:"抄手",disabled:!1}],checkboxValue7:["汽车","蒸汽机"]}),watch:{checkboxValue1(e,l){}},methods:{checkboxChange(e){},changeAloneChecked(){this.aloneChecked=!this.aloneChecked}}},[["render",function(h,x,f,p,g,V){const r=m,C=k(e("up-checkbox"),b),y=k(e("up-checkbox-group"),_),L=o,B=k(e("up-button"),i);return l(),a(L,{class:"u-page"},{default:c((()=>[t(L,{class:"u-demo-block"},{default:c((()=>[t(r,{class:"u-demo-block__title"},{default:c((()=>[u("基本案例")])),_:1}),t(r,{class:"u-block__title"},{default:c((()=>[u("苹果、香蕉和橙子哪个最甜？")])),_:1}),t(L,{class:"u-demo-block__content"},{default:c((()=>[t(L,{class:"u-page__checkbox-item"},{default:c((()=>[t(y,{modelValue:g.checkboxValue1,"onUpdate:modelValue":x[0]||(x[0]=e=>g.checkboxValue1=e),placement:"column",onChange:V.checkboxChange},{default:c((()=>[(l(!0),d(s,null,n(g.checkboxList1,((e,c)=>(l(),a(C,{customStyle:{marginBottom:"8px"},key:c,label:e.name,name:e.name},null,8,["label","name"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1})])),_:1}),t(L,{class:"u-demo-block"},{default:c((()=>[t(r,{class:"u-demo-block__title"},{default:c((()=>[u("单独使用checkbox")])),_:1}),t(r,{class:"u-block__title"},{default:c((()=>[u("是否同意用户协议？")])),_:1}),t(L,{class:"u-demo-block__content"},{default:c((()=>[t(L,{class:"u-page__checkbox-item"},{default:c((()=>[t(C,{customStyle:{marginBottom:"8px"},label:"同意用户协议与隐私条款",name:"agree",checked:g.aloneChecked},null,8,["checked"]),t(B,{type:"primary",size:"small",style:{width:"120px"},onClick:V.changeAloneChecked},{default:c((()=>[u("切换")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1}),t(L,{class:"u-demo-block"},{default:c((()=>[t(r,{class:"u-demo-block__title"},{default:c((()=>[u("自定义形状")])),_:1}),t(r,{class:"u-block__title"},{default:c((()=>[u("中国四大名著是？")])),_:1}),t(L,{class:"u-demo-block__content"},{default:c((()=>[t(L,{class:"u-page__checkbox-item"},{default:c((()=>[t(y,{modelValue:g.checkboxValue2,"onUpdate:modelValue":x[1]||(x[1]=e=>g.checkboxValue2=e),placement:"column",onChange:V.checkboxChange,shape:"square"},{default:c((()=>[(l(!0),d(s,null,n(g.checkboxList2,((e,c)=>(l(),a(C,{customStyle:{marginBottom:"8px"},key:c,label:e.name,name:e.name},null,8,["label","name"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1})])),_:1}),t(L,{class:"u-demo-block"},{default:c((()=>[t(r,{class:"u-demo-block__title"},{default:c((()=>[u("是否禁用")])),_:1}),t(r,{class:"u-block__title"},{default:c((()=>[u("下面什么东西不能吃？")])),_:1}),t(L,{class:"u-demo-block__content"},{default:c((()=>[t(L,{class:"u-page__checkbox-item"},{default:c((()=>[t(y,{modelValue:g.checkboxValue3,"onUpdate:modelValue":x[2]||(x[2]=e=>g.checkboxValue3=e),placement:"column",onChange:V.checkboxChange},{default:c((()=>[(l(!0),d(s,null,n(g.checkboxList3,((e,c)=>(l(),a(C,{customStyle:{marginBottom:"8px"},key:c,label:e.name,name:e.name,disabled:0===c},null,8,["label","name","disabled"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1})])),_:1}),t(L,{class:"u-demo-block"},{default:c((()=>[t(r,{class:"u-demo-block__title"},{default:c((()=>[u("是否禁止点击提示语选中复选框")])),_:1}),t(r,{class:"u-block__title"},{default:c((()=>[u("北宋四大家是谁？")])),_:1}),t(L,{class:"u-demo-block__content"},{default:c((()=>[t(L,{class:"u-page__checkbox-item"},{default:c((()=>[t(y,{modelValue:g.checkboxValue4,"onUpdate:modelValue":x[3]||(x[3]=e=>g.checkboxValue4=e),placement:"column",onChange:V.checkboxChange,labelDisabled:!0},{default:c((()=>[(l(!0),d(s,null,n(g.checkboxList4,((e,c)=>(l(),a(C,{customStyle:{marginBottom:"8px"},key:c,label:e.name,name:e.name},null,8,["label","name"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1})])),_:1}),t(L,{class:"u-demo-block"},{default:c((()=>[t(r,{class:"u-demo-block__title"},{default:c((()=>[u("自定义颜色")])),_:1}),t(r,{class:"u-block__title"},{default:c((()=>[u("哪个颜色最好看？")])),_:1}),t(L,{class:"u-demo-block__content"},{default:c((()=>[t(L,{class:"u-page__checkbox-item"},{default:c((()=>[t(y,{modelValue:g.checkboxValue5,"onUpdate:modelValue":x[4]||(x[4]=e=>g.checkboxValue5=e),placement:"column",onChange:V.checkboxChange,activeColor:"#19be6b"},{default:c((()=>[(l(!0),d(s,null,n(g.checkboxList5,((e,c)=>(l(),a(C,{customStyle:{marginBottom:"8px"},key:c,label:e.name,name:e.name},null,8,["label","name"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1})])),_:1}),t(L,{class:"u-demo-block"},{default:c((()=>[t(r,{class:"u-demo-block__title"},{default:c((()=>[u("横向排列形式")])),_:1}),t(r,{class:"u-block__title"},{default:c((()=>[u("什么东西不能飞？")])),_:1}),t(L,{class:"u-demo-block__content"},{default:c((()=>[t(L,{class:"u-page__checkbox-item"},{default:c((()=>[t(y,{modelValue:g.checkboxValue6,"onUpdate:modelValue":x[5]||(x[5]=e=>g.checkboxValue6=e),onChange:V.checkboxChange},{default:c((()=>[(l(!0),d(s,null,n(g.checkboxList6,((e,c)=>(l(),a(C,{customStyle:{marginRight:"16px"},key:c,label:e.name,name:e.name},null,8,["label","name"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1})])),_:1}),t(L,{class:"u-demo-block"},{default:c((()=>[t(r,{class:"u-demo-block__title"},{default:c((()=>[u("横向两端排列形式")])),_:1}),t(r,{class:"u-block__title"},{default:c((()=>[u("什么东西不能吃？")])),_:1}),t(L,null,{default:c((()=>[t(L,{class:"u-page__checkbox-item"},{default:c((()=>[t(y,{modelValue:g.checkboxValue7,"onUpdate:modelValue":x[6]||(x[6]=e=>g.checkboxValue7=e),onChange:V.checkboxChange,borderBottom:!0,placement:"column",iconPlacement:"right"},{default:c((()=>[(l(!0),d(s,null,n(g.checkboxList7,((e,c)=>(l(),a(C,{customStyle:{marginBottom:"16px"},key:c,label:e.name,name:e.name},null,8,["label","name"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-119472b8"]]);export{x as default};