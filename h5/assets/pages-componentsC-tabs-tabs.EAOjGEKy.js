import{r as l,o as t,c as e,w as a,i as s,a as o,j as i,t as n,k as m}from"./index-L64C8Gta.js";import{_ as c}from"./u-tabs.CGWXOqkP.js";import{r as u}from"./uni-app.es.C9KVShwr.js";import{_ as d}from"./u-sticky.Buz0VImt.js";import{_ as r}from"./u-gap.Bl85Rgke.js";import{_}from"./u-icon.BFqq2a2K.js";import{_ as f}from"./u-button.BQXEmjaP.js";import{_ as p}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./u-badge.DM8P5eZm.js";import"./u-loading-icon.C_tBzECV.js";const A=p({mixins:[uni.$u.mixin],data:()=>({lineBg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAYAAABdC15GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFxSURBVHgBzZNRTsJAEIb/WTW+lpiY+FZPIDew3ABP4GJ8hxsI9zBpOYHeQDwBPQI+mRiRvpLojtPdYhCorQqF/6GdbGd2vvwzBXZcNAt4oj1ANeUoAT5iqkUjbEFLHNmhD1YPEvpZ3ghkGlVDCkc94/BmHMq998I5ONiY1ZBfpKAyuOtgAc5yOEDmYEWNh32BHF91sGHZHmwW4azciN9aQwnz3SJEgOmte+R2tdLprTYoa50mvuomlLpD4Y3oQZnov6D2RzCqI93bWOHaEmAGqQUyRBlZR1WfarcD/EJ2z8DtzDGvsMCwpm8XOCfDUsVOCYhiqRxI/CTQo4UOvjzO7Pow18vfywneuUHHUUxLn55lLw5JFpZ8bEUcY8oXdOLWiHLTxvoGpLqoUmy6dBT15o/ox3znpoycAmxUsiJTbs1cmxeVKp+0zmFIS7bGWiVghC7Vwse8jFKAX9eljh4ggKLLv7uaQvG9/F59Oo2SouxPu7OTCxN/s8wAAAAASUVORK5CYII=",list1:[{name:"关注"},{name:"推荐"},{name:"电影"},{name:"科技"},{name:"音乐"},{name:"美食"},{name:"文化"},{name:"财经"},{name:"手工"}],list2:[{name:"关注"},{name:"推荐",badge:{isDot:!0}},{name:"电影",badge:{value:5}},{name:"科技"},{name:"音乐"},{name:"美食"},{name:"文化"},{name:"财经"},{name:"手工"}],list3:[{name:"关注"},{name:"推荐"},{name:"电影",disabled:!0},{name:"科技"},{name:"音乐"},{name:"美食"},{name:"文化"},{name:"财经"},{name:"手工"}],list4:[{name:"关注"},{name:"推荐",badge:{isDot:!0}},{name:"电影"},{name:"科技"},{name:"音乐"},{name:"美食"},{name:"文化"},{name:"财经"},{name:"手工"}],list6:[{name:"关注"},{name:"推荐"},{name:"电影"},{name:"科技"}],list1Current:1}),onLoad(){},methods:{click(l){console.log("item",l)},nextTab(){this.list1.length<=this.list1Current+1?this.list1Current=0:this.list1Current=this.list1Current+1}}},[["render",function(p,A,b,g,k,C){const h=m,v=u(l("up-tabs"),c),x=s,y=u(l("up-sticky"),d),B=u(l("up-gap"),r),U=u(l("up-icon"),_),j=u(l("up-button"),f);return t(),e(x,{class:"u-page"},{default:a((()=>[o(x,{class:"u-demo-block"},{default:a((()=>[o(h,{class:"u-demo-block__title"},{default:a((()=>[i("基础演示")])),_:1}),o(x,{class:"u-demo-block__content"},{default:a((()=>[o(v,{list:k.list1,onClick:C.click,current:3},null,8,["list","onClick"])])),_:1})])),_:1}),o(x,{class:"u-demo-block",style:{"margin-bottom":"0"}},{default:a((()=>[o(h,{class:"u-demo-block__title"},{default:a((()=>[i("粘性布局")])),_:1})])),_:1}),o(y,{bgColor:"#fff"},{default:a((()=>[o(v,{list:k.list1},null,8,["list"])])),_:1}),o(B,{height:"23",bgColor:"#fff"}),o(x,{class:"u-demo-block"},{default:a((()=>[o(h,{class:"u-demo-block__title"},{default:a((()=>[i("显示徽标")])),_:1}),o(x,{class:"u-demo-block__content"},{default:a((()=>[o(v,{list:k.list2},null,8,["list"])])),_:1})])),_:1}),o(x,{class:"u-demo-block"},{default:a((()=>[o(h,{class:"u-demo-block__title"},{default:a((()=>[i("禁止滚动")])),_:1}),o(x,{class:"u-demo-block__content"},{default:a((()=>[o(v,{list:k.list6,scrollable:!1},null,8,["list"])])),_:1})])),_:1}),o(x,{class:"u-demo-block"},{default:a((()=>[o(h,{class:"u-demo-block__title"},{default:a((()=>[i("禁用菜单")])),_:1}),o(x,{class:"u-demo-block__content"},{default:a((()=>[o(v,{list:k.list3},null,8,["list"])])),_:1})])),_:1}),o(x,{class:"u-demo-block"},{default:a((()=>[o(h,{class:"u-demo-block__title"},{default:a((()=>[i("自定义样式")])),_:1}),o(x,{class:"u-demo-block__content"},{default:a((()=>[o(v,{list:k.list4,lineWidth:"30",lineColor:"#f56c6c",activeStyle:{color:"#303133",fontWeight:"bold",transform:"scale(1.05)"},inactiveStyle:{color:"#606266",transform:"scale(1)"},itemStyle:"padding-left: 15px; padding-right: 15px; height: 34px;"},null,8,["list","activeStyle","inactiveStyle"])])),_:1})])),_:1}),o(x,{class:"u-demo-block"},{default:a((()=>[o(h,{class:"u-demo-block__title"},{default:a((()=>[i("滑块设置背景图")])),_:1}),o(x,{class:"u-demo-block__content"},{default:a((()=>[o(v,{list:k.list4,lineWidth:"20",lineHeight:"7",lineColor:`url(${k.lineBg}) 100% 100%`,activeStyle:{color:"#303133",fontWeight:"bold",transform:"scale(1.05)"},inactiveStyle:{color:"#606266",transform:"scale(1)"},itemStyle:"padding-left: 15px; padding-right: 15px; height: 34px;"},null,8,["list","lineColor","activeStyle","inactiveStyle"])])),_:1})])),_:1}),o(x,{class:"u-demo-block"},{default:a((()=>[o(h,{class:"u-demo-block__title"},{default:a((()=>[i("自定义内容插槽")])),_:1}),o(x,{class:"u-demo-block__content"},{default:a((()=>[o(v,{list:k.list1},{default:a((l=>[o(h,{class:"u-tabs__wrapper__nav__item__text",style:{color:"red"}},{default:a((()=>{var t;return[i(n((null==(t=l.item)?void 0:t[l.keyName])||"-"),1)]})),_:2},1024)])),_:1},8,["list"])])),_:1})])),_:1}),o(x,{class:"u-demo-block"},{default:a((()=>[o(h,{class:"u-demo-block__title"},{default:a((()=>[i("右侧自定义插槽")])),_:1}),o(x,{class:"u-demo-block__content"},{default:a((()=>[o(v,{list:k.list1,current:k.list1Current,"onUpdate:current":A[1]||(A[1]=l=>k.list1Current=l)},{right:a((()=>[o(x,{style:{"padding-left":"4px"},onClick:A[0]||(A[0]=l=>p.$u.toast("插槽被点击"))},{default:a((()=>[o(U,{name:"list",size:"21",bold:""})])),_:1})])),_:1},8,["list","current"]),o(j,{type:"primary",size:"small",style:{width:"120px"},onClick:C.nextTab},{default:a((()=>[i("切换下一个"+n(k.list1Current),1)])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-289344fc"]]);export{A as default};