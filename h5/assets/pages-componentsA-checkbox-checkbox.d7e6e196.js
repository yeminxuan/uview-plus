import{o as e,c as a,w as l,i as c,a as o,g as t,b as u,r as d,F as n,h as s,d as m}from"./index-4f0c5e1d.js";import{_ as b,a as _}from"./u-checkbox-group.fd9d36a8.js";import{r as i}from"./uni-app.es.fcad82c0.js";import{_ as k}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.e9ca9d71.js";import"./mixin.d0c91ebc.js";const h=k({data:()=>({checkboxList1:[{name:"苹果",disabled:!1},{name:"香蕉",disabled:!1},{name:"橙子",disabled:!1}],checkboxValue1:["苹果","橙子"],checkboxList2:[{name:"西游记",disabled:!1},{name:"红楼梦",disabled:!1},{name:"三国演义",disabled:!1},{name:"水浒传",disabled:!1}],checkboxValue2:["西游记","红楼梦","三国演义","水浒传"],checkboxList3:[{name:"冬瓜",disabled:!1},{name:"西瓜",disabled:!1},{name:"黄瓜",disabled:!1},{name:"傻瓜",disabled:!1}],checkboxValue3:["傻瓜"],checkboxList4:[{name:"黄庭坚",disabled:!1},{name:"欧阳修",disabled:!1},{name:"苏小宝",disabled:!1},{name:"王安石",disabled:!1}],checkboxValue4:["黄庭坚","欧阳修","王安石"],checkboxList5:[{name:"红色",disabled:!1},{name:"黄色",disabled:!1},{name:"绿色",disabled:!1},{name:"蓝色",disabled:!1}],checkboxValue5:["绿色"],checkboxList6:[{name:"小鸟",disabled:!1},{name:"游艇",disabled:!1},{name:"轮船",disabled:!1},{name:"飞机",disabled:!1}],checkboxValue6:["游艇","轮船"],checkboxList7:[{name:"汽车",disabled:!1},{name:"蒸汽机",disabled:!1},{name:"猪肉",disabled:!1},{name:"抄手",disabled:!1}],checkboxValue7:["汽车","蒸汽机"]}),watch:{checkboxValue1(e,a){}},methods:{checkboxChange(e){}}},[["render",function(k,h,x,f,p,g){const V=s,r=i(m("u-checkbox"),b),C=i(m("u-checkbox-group"),_),y=c;return e(),a(y,{class:"u-page"},{default:l((()=>[o(y,{class:"u-demo-block"},{default:l((()=>[o(V,{class:"u-demo-block__title"},{default:l((()=>[t("基本案例")])),_:1}),o(V,{class:"u-block__title"},{default:l((()=>[t("苹果、香蕉和橙子哪个最甜？")])),_:1}),o(y,{class:"u-demo-block__content"},{default:l((()=>[o(y,{class:"u-page__checkbox-item"},{default:l((()=>[o(C,{modelValue:p.checkboxValue1,"onUpdate:modelValue":h[0]||(h[0]=e=>p.checkboxValue1=e),placement:"column",onChange:g.checkboxChange},{default:l((()=>[(e(!0),u(n,null,d(p.checkboxList1,((l,c)=>(e(),a(r,{customStyle:{marginBottom:"8px"},key:c,label:l.name,name:l.name},null,8,["label","name"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1})])),_:1}),o(y,{class:"u-demo-block"},{default:l((()=>[o(V,{class:"u-demo-block__title"},{default:l((()=>[t("自定义形状")])),_:1}),o(V,{class:"u-block__title"},{default:l((()=>[t("中国四大名著是？")])),_:1}),o(y,{class:"u-demo-block__content"},{default:l((()=>[o(y,{class:"u-page__checkbox-item"},{default:l((()=>[o(C,{modelValue:p.checkboxValue2,"onUpdate:modelValue":h[1]||(h[1]=e=>p.checkboxValue2=e),placement:"column",onChange:g.checkboxChange,shape:"square"},{default:l((()=>[(e(!0),u(n,null,d(p.checkboxList2,((l,c)=>(e(),a(r,{customStyle:{marginBottom:"8px"},key:c,label:l.name,name:l.name},null,8,["label","name"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1})])),_:1}),o(y,{class:"u-demo-block"},{default:l((()=>[o(V,{class:"u-demo-block__title"},{default:l((()=>[t("是否禁用")])),_:1}),o(V,{class:"u-block__title"},{default:l((()=>[t("下面什么东西不能吃？")])),_:1}),o(y,{class:"u-demo-block__content"},{default:l((()=>[o(y,{class:"u-page__checkbox-item"},{default:l((()=>[o(C,{modelValue:p.checkboxValue3,"onUpdate:modelValue":h[2]||(h[2]=e=>p.checkboxValue3=e),placement:"column",onChange:g.checkboxChange},{default:l((()=>[(e(!0),u(n,null,d(p.checkboxList3,((l,c)=>(e(),a(r,{customStyle:{marginBottom:"8px"},key:c,label:l.name,name:l.name,disabled:0===c},null,8,["label","name","disabled"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1})])),_:1}),o(y,{class:"u-demo-block"},{default:l((()=>[o(V,{class:"u-demo-block__title"},{default:l((()=>[t("是否禁止点击提示语选中复选框")])),_:1}),o(V,{class:"u-block__title"},{default:l((()=>[t("北宋四大家是谁？")])),_:1}),o(y,{class:"u-demo-block__content"},{default:l((()=>[o(y,{class:"u-page__checkbox-item"},{default:l((()=>[o(C,{modelValue:p.checkboxValue4,"onUpdate:modelValue":h[3]||(h[3]=e=>p.checkboxValue4=e),placement:"column",onChange:g.checkboxChange,labelDisabled:!0},{default:l((()=>[(e(!0),u(n,null,d(p.checkboxList4,((l,c)=>(e(),a(r,{customStyle:{marginBottom:"8px"},key:c,label:l.name,name:l.name},null,8,["label","name"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1})])),_:1}),o(y,{class:"u-demo-block"},{default:l((()=>[o(V,{class:"u-demo-block__title"},{default:l((()=>[t("自定义颜色")])),_:1}),o(V,{class:"u-block__title"},{default:l((()=>[t("哪个颜色最好看？")])),_:1}),o(y,{class:"u-demo-block__content"},{default:l((()=>[o(y,{class:"u-page__checkbox-item"},{default:l((()=>[o(C,{modelValue:p.checkboxValue5,"onUpdate:modelValue":h[4]||(h[4]=e=>p.checkboxValue5=e),placement:"column",onChange:g.checkboxChange,activeColor:"#19be6b"},{default:l((()=>[(e(!0),u(n,null,d(p.checkboxList5,((l,c)=>(e(),a(r,{customStyle:{marginBottom:"8px"},key:c,label:l.name,name:l.name},null,8,["label","name"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1})])),_:1}),o(y,{class:"u-demo-block"},{default:l((()=>[o(V,{class:"u-demo-block__title"},{default:l((()=>[t("横向排列形式")])),_:1}),o(V,{class:"u-block__title"},{default:l((()=>[t("什么东西不能飞？")])),_:1}),o(y,{class:"u-demo-block__content"},{default:l((()=>[o(y,{class:"u-page__checkbox-item"},{default:l((()=>[o(C,{modelValue:p.checkboxValue6,"onUpdate:modelValue":h[5]||(h[5]=e=>p.checkboxValue6=e),onChange:g.checkboxChange},{default:l((()=>[(e(!0),u(n,null,d(p.checkboxList6,((l,c)=>(e(),a(r,{customStyle:{marginRight:"16px"},key:c,label:l.name,name:l.name},null,8,["label","name"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1})])),_:1}),o(y,{class:"u-demo-block"},{default:l((()=>[o(V,{class:"u-demo-block__title"},{default:l((()=>[t("横向两端排列形式")])),_:1}),o(V,{class:"u-block__title"},{default:l((()=>[t("什么东西不能吃？")])),_:1}),o(y,null,{default:l((()=>[o(y,{class:"u-page__checkbox-item"},{default:l((()=>[o(C,{modelValue:p.checkboxValue7,"onUpdate:modelValue":h[6]||(h[6]=e=>p.checkboxValue7=e),onChange:g.checkboxChange,borderBottom:!0,placement:"column",iconPlacement:"right"},{default:l((()=>[(e(!0),u(n,null,d(p.checkboxList7,((l,c)=>(e(),a(r,{customStyle:{marginBottom:"16px"},key:c,label:l.name,name:l.name},null,8,["label","name"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-9a03e715"]]);export{h as default};