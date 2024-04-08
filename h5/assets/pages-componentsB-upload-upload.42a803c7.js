import{m as e,h as t,d as a,o as l,c as i,w as s,a as u,b as o,F as d,r as n,n as p,f as c,t as r,l as m,s as f,k as _,p as h,e as g,g as b,i as y}from"./index-71ce7ade.js";import{_ as w}from"./u-icon.e9530d0d.js";import{r as k}from"./uni-app.es.521d9055.js";import{_ as $}from"./u-loading-icon.b68ad7f2.js";import{_ as v}from"./_plugin-vue_export-helper.1b428a4d.js";function x(e,t){return["[object Object]","[object File]"].includes(Object.prototype.toString.call(e))?Object.keys(e).reduce(((a,l)=>(t.includes(l)||(a[l]=e[l]),a)),{}):{}}function L(e){return e.tempFiles.map((e=>({...x(e,["path"]),url:e.path,size:e.size,name:e.name,type:e.type})))}function R({accept:e,multiple:t,capture:a,compressed:l,maxDuration:i,sizeType:s,camera:u,maxCount:o}){return new Promise(((d,n)=>{switch(e){case"image":uni.chooseImage({count:t?Math.min(o,9):1,sourceType:a,sizeType:s,success:e=>d(function(e){return e.tempFiles.map((e=>({...x(e,["path"]),type:"image",url:e.path,thumb:e.path,size:e.size,name:e.name})))}(e)),fail:n});break;case"video":uni.chooseVideo({sourceType:a,compressed:l,maxDuration:i,camera:u,success:e=>d(function(e){return[{...x(e,["tempFilePath","thumbTempFilePath","errMsg"]),type:"video",url:e.tempFilePath,thumb:e.thumbTempFilePath,size:e.size,name:e.name}]}(e)),fail:n});break;case"file":uni.chooseFile({count:t?o:1,type:e,success:e=>d(L(e)),fail:n});break;default:uni.chooseFile({count:t?o:1,type:"all",success:e=>d(L(e)),fail:n})}}))}const C=v({name:"u-upload",mixins:[e,t,{watch:{accept:{immediate:!0,handler(e){"all"!==e&&"media"!==e||uni.$u.error("只有微信小程序才支持把accept配置为all、media之一")}}}},{props:{accept:{type:String,default:()=>uni.$u.props.upload.accept},capture:{type:[String,Array],default:()=>uni.$u.props.upload.capture},compressed:{type:Boolean,default:()=>uni.$u.props.upload.compressed},camera:{type:String,default:()=>uni.$u.props.upload.camera},maxDuration:{type:Number,default:()=>uni.$u.props.upload.maxDuration},uploadIcon:{type:String,default:()=>uni.$u.props.upload.uploadIcon},uploadIconColor:{type:String,default:()=>uni.$u.props.upload.uploadIconColor},useBeforeRead:{type:Boolean,default:()=>uni.$u.props.upload.useBeforeRead},afterRead:{type:Function,default:null},beforeRead:{type:Function,default:null},previewFullImage:{type:Boolean,default:()=>uni.$u.props.upload.previewFullImage},maxCount:{type:[String,Number],default:()=>uni.$u.props.upload.maxCount},disabled:{type:Boolean,default:()=>uni.$u.props.upload.disabled},imageMode:{type:String,default:()=>uni.$u.props.upload.imageMode},name:{type:String,default:()=>uni.$u.props.upload.name},sizeType:{type:Array,default:()=>uni.$u.props.upload.sizeType},multiple:{type:Boolean,default:()=>uni.$u.props.upload.multiple},deletable:{type:Boolean,default:()=>uni.$u.props.upload.deletable},maxSize:{type:[String,Number],default:()=>uni.$u.props.upload.maxSize},fileList:{type:Array,default:()=>uni.$u.props.upload.fileList},uploadText:{type:String,default:()=>uni.$u.props.upload.uploadText},width:{type:[String,Number],default:()=>uni.$u.props.upload.width},height:{type:[String,Number],default:()=>uni.$u.props.upload.height},previewImage:{type:Boolean,default:()=>uni.$u.props.upload.previewImage}}}],data:()=>({lists:[],isInCount:!0}),watch:{fileList:{handler(){this.formatFileList()},immediate:!0,deep:!0}},emits:["error","beforeRead","oversize","afterRead","delete","clickPreview"],methods:{formatFileList(){const{fileList:e=[],maxCount:t}=this,a=e.map((e=>Object.assign(Object.assign({},e),{isImage:"image"===this.accept||uni.$u.test.image(e.url||e.thumb),isVideo:"video"===this.accept||uni.$u.test.video(e.url||e.thumb),deletable:"boolean"==typeof e.deletable?e.deletable:this.deletable})));this.lists=a,this.isInCount=a.length<t},chooseFile(){const{maxCount:e,multiple:t,lists:a,disabled:l}=this;if(l)return;let i;try{i=uni.$u.test.array(this.capture)?this.capture:this.capture.split(",")}catch(s){i=[]}R(Object.assign({accept:this.accept,multiple:this.multiple,capture:i,compressed:this.compressed,maxDuration:this.maxDuration,sizeType:this.sizeType,camera:this.camera},{maxCount:e-a.length})).then((e=>{this.onBeforeRead(t?e:e[0])})).catch((e=>{this.$emit("error",e)}))},onBeforeRead(e){const{beforeRead:t,useBeforeRead:a}=this;let l=!0;uni.$u.test.func(t)&&(l=t(e,this.getDetail())),a&&(l=new Promise(((t,a)=>{this.$emit("beforeRead",Object.assign(Object.assign({file:e},this.getDetail()),{callback:e=>{e?t():a()}}))}))),l&&(uni.$u.test.promise(l)?l.then((t=>this.onAfterRead(t||e))):this.onAfterRead(e))},getDetail(e){return{name:this.name,index:null==e?this.fileList.length:e}},onAfterRead(e){const{maxSize:t,afterRead:a}=this;(Array.isArray(e)?e.some((e=>e.size>t)):e.size>t)?this.$emit("oversize",Object.assign({file:e},this.getDetail())):("function"==typeof a&&a(e,this.getDetail()),this.$emit("afterRead",Object.assign({file:e},this.getDetail())))},deleteItem(e){this.$emit("delete",Object.assign(Object.assign({},this.getDetail(e)),{file:this.fileList[e]}))},onPreviewImage(e){e.isImage&&this.previewFullImage&&uni.previewImage({urls:this.lists.filter((e=>"image"===this.accept||uni.$u.test.image(e.url||e.thumb))).map((e=>e.url||e.thumb)),current:e.url||e.thumb,fail(){uni.$u.toast("预览图片失败")}})},onPreviewVideo(e){if(!this.data.previewFullImage)return;const{index:t}=e.currentTarget.dataset,{lists:a}=this.data;wx.previewMedia({sources:a.filter((e=>isVideoFile(e))).map((e=>Object.assign(Object.assign({},e),{type:"video"}))),current:t,fail(){uni.$u.toast("预览视频失败")}})},onClickPreview(e){const{index:t}=e.currentTarget.dataset,a=this.data.lists[t];this.$emit("clickPreview",Object.assign(Object.assign({},a),this.getDetail(t)))}}},[["render",function(e,t,v,x,L,R){const C=g,F=k(a("u-icon"),w),I=b,j=y,D=k(a("u-loading-icon"),$);return l(),i(j,{class:"u-upload",style:p([e.$u.addStyle(e.customStyle)])},{default:s((()=>[u(j,{class:"u-upload__wrap"},{default:s((()=>[e.previewImage?(l(!0),o(d,{key:0},n(L.lists,((t,a)=>(l(),i(j,{class:"u-upload__wrap__preview",key:a},{default:s((()=>[t.isImage||t.type&&"image"===t.type?(l(),i(C,{key:0,src:t.thumb||t.url,mode:e.imageMode,class:"u-upload__wrap__preview__image",onClick:e=>R.onPreviewImage(t),style:p([{width:e.$u.addUnit(e.width),height:e.$u.addUnit(e.height)}])},null,8,["src","mode","onClick","style"])):(l(),i(j,{key:1,class:"u-upload__wrap__preview__other"},{default:s((()=>[u(F,{color:"#80CBF9",size:"26",name:t.isVideo||t.type&&"video"===t.type?"movie":"folder"},null,8,["name"]),u(I,{class:"u-upload__wrap__preview__other__text"},{default:s((()=>[c(r(t.isVideo||t.type&&"video"===t.type?"视频":"文件"),1)])),_:2},1024)])),_:2},1024)),"uploading"===t.status||"failed"===t.status?(l(),i(j,{key:2,class:"u-upload__status"},{default:s((()=>[u(j,{class:"u-upload__status__icon"},{default:s((()=>["failed"===t.status?(l(),i(F,{key:0,name:"close-circle",color:"#ffffff",size:"25"})):(l(),i(D,{key:1,size:"22",mode:"circle",color:"#ffffff"}))])),_:2},1024),t.message?(l(),i(I,{key:0,class:"u-upload__status__message"},{default:s((()=>[c(r(t.message),1)])),_:2},1024)):m("",!0)])),_:2},1024)):m("",!0),"uploading"!==t.status&&(e.deletable||t.deletable)?(l(),i(j,{key:3,class:"u-upload__deletable",onClick:f((e=>R.deleteItem(a)),["stop"])},{default:s((()=>[u(j,{class:"u-upload__deletable__icon"},{default:s((()=>[u(F,{name:"close",color:"#ffffff",size:"10"})])),_:1})])),_:2},1032,["onClick"])):m("",!0),"success"===t.status?(l(),i(j,{key:4,class:"u-upload__success"},{default:s((()=>[u(j,{class:"u-upload__success__icon"},{default:s((()=>[u(F,{name:"checkmark",color:"#ffffff",size:"12"})])),_:1})])),_:1})):m("",!0)])),_:2},1024)))),128)):m("",!0),L.isInCount?(l(),o(d,{key:1},[e.$slots.default||e.$slots.$default?(l(),i(j,{key:0,onClick:R.chooseFile},{default:s((()=>[_(e.$slots,"default",{},void 0,!0)])),_:3},8,["onClick"])):(l(),i(j,{key:1,class:h(["u-upload__button",[e.disabled&&"u-upload__button--disabled"]]),"hover-class":e.disabled?"":"u-upload__button--hover","hover-stay-time":"150",onClick:R.chooseFile,style:p([{width:e.$u.addUnit(e.width),height:e.$u.addUnit(e.height)}])},{default:s((()=>[u(F,{name:e.uploadIcon,size:"26",color:e.uploadIconColor},null,8,["name","color"]),e.uploadText?(l(),i(I,{key:0,class:"u-upload__button__text"},{default:s((()=>[c(r(e.uploadText),1)])),_:1})):m("",!0)])),_:1},8,["hover-class","onClick","class","style"]))],64)):m("",!0)])),_:3})])),_:3},8,["style"])}],["__scopeId","data-v-99d52f01"]]);const F=v({data:()=>({fileList1:[],fileList2:[],fileList3:[{url:"https://cdn.uviewui.com/uview/swiper/1.jpg"}],fileList4:[{url:"https://cdn.uviewui.com/uview/swiper/1.jpg"},{url:"https://cdn.uviewui.com/uview/swiper/1.jpg"}],fileList5:[],fileList6:[],fileList7:[]}),onLoad(){},methods:{deletePic(e){this[`fileList${e.name}`].splice(e.index,1)},async afterRead(e){let t=[].concat(e.file),a=this[`fileList${e.name}`].length;t.map((t=>{this[`fileList${e.name}`].push({...t,status:"uploading",message:"上传中"})}));for(let l=0;l<t.length;l++){const i=await this.uploadFilePromise(t[l].url);let s=this[`fileList${e.name}`][a];this[`fileList${e.name}`].splice(a,1,Object.assign(s,{status:"success",message:"",url:i})),a++}},uploadFilePromise:e=>new Promise(((t,a)=>{uni.uploadFile({url:"http://www.example.com/upload",filePath:e,name:"file",formData:{user:"test"},success:e=>{setTimeout((()=>{t(e.data.data)}),1e3)}})}))}},[["render",function(e,t,o,d,n,p){const r=b,m=k(a("u-upload"),C),f=y,_=g;return l(),i(f,{class:"u-page"},{default:s((()=>[u(f,{class:"u-demo-block"},{default:s((()=>[u(r,{class:"u-demo-block__title"},{default:s((()=>[c("基础用法")])),_:1}),u(f,{class:"u-demo-block__content"},{default:s((()=>[u(f,{class:"u-page__upload-item"},{default:s((()=>[u(m,{fileList:n.fileList1,onAfterRead:p.afterRead,onDelete:p.deletePic,name:"1",multiple:"",maxCount:10},null,8,["fileList","onAfterRead","onDelete"])])),_:1})])),_:1})])),_:1}),u(f,{class:"u-demo-block"},{default:s((()=>[u(r,{class:"u-demo-block__title"},{default:s((()=>[c("上传视频")])),_:1}),u(f,{class:"u-demo-block__content"},{default:s((()=>[u(f,{class:"u-page__upload-item"},{default:s((()=>[u(m,{fileList:n.fileList2,onAfterRead:p.afterRead,onDelete:p.deletePic,name:"2",multiple:"",maxCount:10,accept:"video"},null,8,["fileList","onAfterRead","onDelete"])])),_:1})])),_:1})])),_:1}),u(f,{class:"u-demo-block"},{default:s((()=>[u(r,{class:"u-demo-block__title"},{default:s((()=>[c("文件预览")])),_:1}),u(f,{class:"u-demo-block__content"},{default:s((()=>[u(f,{class:"u-page__upload-item"},{default:s((()=>[u(m,{fileList:n.fileList3,onAfterRead:p.afterRead,onDelete:p.deletePic,name:"3",multiple:"",maxCount:10,previewFullImage:!0},null,8,["fileList","onAfterRead","onDelete"])])),_:1})])),_:1})])),_:1}),u(f,{class:"u-demo-block"},{default:s((()=>[u(r,{class:"u-demo-block__title"},{default:s((()=>[c("隐藏上传按钮")])),_:1}),u(f,{class:"u-demo-block__content"},{default:s((()=>[u(f,{class:"u-page__upload-item"},{default:s((()=>[u(m,{fileList:n.fileList4,onAfterRead:p.afterRead,onDelete:p.deletePic,name:"4",multiple:"",maxCount:2},null,8,["fileList","onAfterRead","onDelete"])])),_:1})])),_:1})])),_:1}),u(f,{class:"u-demo-block"},{default:s((()=>[u(r,{class:"u-demo-block__title"},{default:s((()=>[c("限制上传数量")])),_:1}),u(f,{class:"u-demo-block__content"},{default:s((()=>[u(f,{class:"u-page__upload-item"},{default:s((()=>[u(m,{fileList:n.fileList5,onAfterRead:p.afterRead,onDelete:p.deletePic,name:"5",multiple:"",maxCount:3},null,8,["fileList","onAfterRead","onDelete"])])),_:1})])),_:1})])),_:1}),u(f,{class:"u-demo-block"},{default:s((()=>[u(r,{class:"u-demo-block__title"},{default:s((()=>[c("自定义上传样式")])),_:1}),u(f,{class:"u-demo-block__content"},{default:s((()=>[u(f,{class:"u-page__upload-item"},{default:s((()=>[u(m,{fileList:n.fileList6,onAfterRead:p.afterRead,onDelete:p.deletePic,name:"6",multiple:"",maxCount:1,width:"250",height:"150"},{default:s((()=>[u(_,{src:"https://cdn.uviewui.com/uview/demo/upload/positive.png",mode:"widthFix",style:{width:"250px",height:"150px"}})])),_:1},8,["fileList","onAfterRead","onDelete"])])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-97f68678"]]);export{F as default};