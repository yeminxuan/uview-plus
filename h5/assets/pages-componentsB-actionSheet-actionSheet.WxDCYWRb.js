import{_ as e,r as o,C as n,a as s,b as t,c as a,B as i,o as c,f as l,w as u,i as h,g as w,h as m,j as r,F as d,m as p,n as f,k as g}from"./index-C1jc28HG.js";const v=e({data:()=>({show0:!1,show1:!1,show2:!1,show3:!1,show4:!1,show5:!1,actions0:[{name:"选项1"},{name:"选项2"},{name:"选项2"},{name:"选项2"},{name:"选项2"},{name:"选项2"},{name:"选项2"},{name:"选项2"},{name:"选项2"},{name:"选项2"},{name:"选项2"},{name:"选项2"},{name:"选项3",subname:"描述文本"}],actions1:[{name:"选项1"},{loading:!0},{name:"选项被禁用",disabled:!0}],actions2:[{name:"选项1"},{name:"选项2"},{name:"选项3"}],actions3:[{name:"选项1"},{name:"选项2"},{name:"选项3"}],actions5:[{name:"获取用户信息",openType:"getUserInfo",color:uni.$u.color.success}],list:[{title:"普通使用",iconUrl:"https://cdn.uviewui.com/uview/demo/actionSheet/custom.png"},{title:"设置状态",iconUrl:"https://cdn.uviewui.com/uview/demo/actionSheet/status.png"},{title:"显示取消按钮",iconUrl:"https://cdn.uviewui.com/uview/demo/actionSheet/cancel.png"},{title:"描述内容",iconUrl:"https://cdn.uviewui.com/uview/demo/actionSheet/desc.png"},{title:"显示标题(显示圆角)",iconUrl:"https://cdn.uviewui.com/uview/demo/actionSheet/title.png"},{title:"微信开放能力",iconUrl:"https://cdn.uviewui.com/uview/demo/actionSheet/open.png"}]}),onLoad(){},methods:{openSheet(e){if(5===e)return uni.$u.toast("请在微信内预览");this[`show${e}`]=!0},getuserinfo(e){uni.$u.toast(`用户名：${e.userInfo.nickName}`)},navigateBack(){uni.navigateBack()},close(){console.log("close"),this.show0=!1},select(e){console.log("select",e)}}},[["render",function(e,v,C,k,x,S){const U=o(s("up-navbar"),n),_=g,$=o(s("up-cell"),t),b=o(s("up-cell-group"),a),y=o(s("up-action-sheet"),i),B=f,I=h;return c(),l(I,{class:"u-page"},{default:u((()=>[w(U,{title:"上拉菜单",onLeftClick:S.navigateBack,safeAreaInsetTop:"",fixed:"",placeholder:""},null,8,["onLeftClick"]),w(b,null,{default:u((()=>[(c(!0),m(d,null,r(x.list,((e,o)=>(c(),l($,{onClick:e=>S.openSheet(o),title:e.title,key:o,isLink:""},{icon:u((()=>[w(_,{slot:"",class:"u-cell-icon",src:e.iconUrl,mode:"widthFix"},null,8,["src"])])),_:2},1032,["onClick","title"])))),128))])),_:1}),w(y,{show:x.show0,onClose:S.close,onSelect:S.select,actions:x.actions0,closeOnClickOverlay:!1},null,8,["show","onClose","onSelect","actions"]),w(y,{show:x.show1,onClose:v[0]||(v[0]=e=>x.show1=!1),actions:x.actions1},null,8,["show","actions"]),w(y,{show:x.show2,onClose:v[1]||(v[1]=e=>x.show2=!1),actions:x.actions2,cancelText:"取消"},null,8,["show","actions"]),w(y,{show:x.show3,onClose:v[2]||(v[2]=e=>x.show3=!1),actions:x.actions3,description:"这是一段描述文本,字号偏小,颜色偏淡"},null,8,["show","actions"]),w(y,{show:x.show4,onClose:v[3]||(v[3]=e=>x.show4=!1),title:"标题位置",round:10},{default:u((()=>[w(B,{style:{margin:"10px 20px 30px 20px",color:"#303133","font-size":"15px"}},{default:u((()=>[p("这是一段通过slot传入的内容,您可以在此自定义操作面板")])),_:1})])),_:1},8,["show"]),w(y,{show:x.show5,onClose:v[4]||(v[4]=e=>x.show5=!1),title:"微信开放能力",actions:x.actions5,onGetuserinfo:S.getuserinfo},null,8,["show","actions","onGetuserinfo"])])),_:1})}],["__scopeId","data-v-88391c14"]]);export{v as default};