import{_ as n}from"./up-navbar.CU-7DQ2I.js";import{r as o,o as e,c as l,w as i,i as s,a as c,b as a,d as t,F as u,f as r,e as m}from"./index-C3UXxwfW.js";import{r as h}from"./uni-app.es.CqYlZVXb.js";import{_ as p}from"./up-cell.D3gLs5ov.js";import{_ as d}from"./up-cell-group.CTmC7PO2.js";import{_ as g}from"./up-picker.BGB3dwbe.js";import{_ as C}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./up-status-bar.VZkP8NkI.js";import"./up-icon.BrIVCe5a.js";import"./up-line.BBfW2jaO.js";import"./up-loading-icon.DXCjh8Fn.js";import"./up-popup.wdWgQwv2.js";import"./up-overlay.CoCKb7JO.js";import"./up-transition.CkVV8kmf.js";import"./up-safe-bottom.DPzYJrA4.js";const w=C({data:()=>({index:0,loading:!1,columnData:[["深圳","厦门","上海","拉萨"],["得州","华盛顿","纽约","阿拉斯加"]],columns1:[["中国","美国","日本"]],columns2:[["中国","美国","日本"]],columns3:[["中国","美国"],["深圳","厦门","上海","拉萨"]],columns4:[["中国","美国"],["深圳","厦门","上海","拉萨"]],columns5:[["中国","美国","日本"]],columns6:[["中国","美国","日本"]],columns7:[[{label:"苹果",value:1},{label:"橘子",value:2},{label:"香蕉",value:3}]],show1:!1,show2:!1,show3:!1,show4:!1,show5:!1,show6:!1,list:[{title:"基础使用",iconUrl:"https://cdn.uviewui.com/uview/demo/picker/2.png"},{title:"设置默认项",iconUrl:"https://cdn.uviewui.com/uview/demo/picker/5.png"},{title:"多列联动",iconUrl:"https://cdn.uviewui.com/uview/demo/picker/1.png"},{title:"加载中状态(切换第一列)",iconUrl:"https://cdn.uviewui.com/uview/demo/picker/3.png"},{title:"设置标题",iconUrl:"https://cdn.uviewui.com/uview/demo/picker/4.png"},{title:"允许点击遮罩关闭",iconUrl:"https://cdn.uviewui.com/uview/demo/picker/6.png"}]}),methods:{changeHandler1(n){this.change(n);const{columnIndex:o,value:e,values:l,index:i,picker:s=this.$refs.uPicker3}=n;0===o&&s.setColumnValues(1,this.columnData[i])},changeHandler2(n){this.change(n);const{columnIndex:o,value:e,values:l,index:i,picker:s=this.$refs.uPicker4}=n;0===o&&(this.loading=!0,uni.$u.sleep(1500).then((()=>{s.setColumnValues(1,this.columnData[i]),this.loading=!1})))},navigateBack(){uni.navigateBack()},change(n){},showPicker(n){this.index=n+1,this[`show${n+1}`]=!0},close(){this[`show${this.index}`]=!1},confirm(n){this[`show${this.index}`]=!1},cancel(){this[`show${this.index}`]=!1}}},[["render",function(C,w,f,v,k,x){const j=h(o("up-navbar"),n),_=m,b=h(o("up-cell"),p),P=h(o("up-cell-group"),d),U=s,$=h(o("up-picker"),g);return e(),l(U,{class:"u-page",ref:"page"},{default:i((()=>[c(j,{title:"选择器",onLeftClick:x.navigateBack,safeAreaInsetTop:"",fixed:"",placeholder:""},null,8,["onLeftClick"]),c(P,null,{default:i((()=>[(e(!0),a(u,null,t(k.list,((n,o)=>(e(),l(b,{onClick:n=>x.showPicker(o),title:n.title,key:o,isLink:""},{icon:i((()=>[c(_,{class:"u-cell-icon",src:n.iconUrl,mode:"widthFix"},null,8,["src"])])),_:2},1032,["onClick","title"])))),128))])),_:1}),c($,{show:k.show1,columns:k.columns1,onChange:x.change,onCancel:x.cancel,onConfirm:x.confirm,toolbarRightSlot:""},{"toolbar-right":i((()=>[c(U,{style:{"padding-right":"10px"}},{default:i((()=>[r("右侧")])),_:1})])),"toolbar-bottom":i((()=>[])),_:1},8,["show","columns","onChange","onCancel","onConfirm"]),c($,{show:k.show2,columns:k.columns2,defaultIndex:[1],onCancel:x.cancel,onConfirm:x.confirm,onChange:x.change},null,8,["show","columns","onCancel","onConfirm","onChange"]),c($,{show:k.show3,columns:k.columns3,ref:"uPicker3",onCancel:x.cancel,onConfirm:x.confirm,onChange:x.changeHandler1},null,8,["show","columns","onCancel","onConfirm","onChange"]),c($,{show:k.show4,columns:k.columns4,onCancel:x.cancel,onConfirm:x.confirm,loading:k.loading,onChange:x.changeHandler2,ref:"uPicker4"},null,8,["show","columns","onCancel","onConfirm","loading","onChange"]),c($,{show:k.show5,columns:k.columns5,title:"标题太长就会显示省略号",onCancel:x.cancel,onConfirm:x.confirm,onChange:x.change},null,8,["show","columns","onCancel","onConfirm","onChange"]),c($,{show:k.show6,columns:k.columns6,closeOnClickOverlay:"",onCancel:x.cancel,onConfirm:x.confirm,onClose:x.close,onChange:x.change},null,8,["show","columns","onCancel","onConfirm","onClose","onChange"])])),_:1},512)}],["__scopeId","data-v-a8b07465"]]);export{w as default};