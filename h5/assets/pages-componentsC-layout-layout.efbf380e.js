import{o as t,c as e,w as s,k as a,l,n as u,i,a as o,g as n,h as d,d as p}from"./index-4f0c5e1d.js";import{m as r,a as c}from"./mixin.d0c91ebc.js";import{_ as f}from"./_plugin-vue_export-helper.1b428a4d.js";import{r as m}from"./uni-app.es.fcad82c0.js";const g=f({name:"u-col",mixins:[r,c,{props:{span:{type:[String,Number],default:()=>uni.$u.props.col.span},offset:{type:[String,Number],default:()=>uni.$u.props.col.offset},justify:{type:String,default:()=>uni.$u.props.col.justify},align:{type:String,default:()=>uni.$u.props.col.align},textAlign:{type:String,default:()=>uni.$u.props.col.textAlign}}}],data:()=>({width:0,parentData:{gutter:0},gridNum:12}),options:{virtualHost:!0},computed:{uJustify(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align},colStyle(){const t={paddingLeft:uni.$u.addUnit(uni.$u.getPx(this.parentData.gutter)/2),paddingRight:uni.$u.addUnit(uni.$u.getPx(this.parentData.gutter)/2),alignItems:this.uAlignItem,justifyContent:this.uJustify,textAlign:this.textAlign,flex:`0 0 ${100/this.gridNum*this.span}%`,marginLeft:100/12*this.offset+"%"};return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}},mounted(){this.init()},emits:["click"],methods:{async init(){this.updateParentData(),this.width=await this.parent.getComponentWidth()},updateParentData(){this.getParentData("u-row")},clickHandler(t){this.$emit("click")}}},[["render",function(o,n,d,p,r,c){const f=i;return t(),e(f,{class:l(["u-col",["u-col-"+o.span]]),ref:"u-col",style:u([c.colStyle]),onClick:c.clickHandler},{default:s((()=>[a(o.$slots,"default",{},void 0,!0)])),_:3},8,["class","style","onClick"])}],["__scopeId","data-v-d2e75320"]]);const _=f({name:"u-row",mixins:[r,c,{props:{gutter:{type:[String,Number],default:()=>uni.$u.props.row.gutter},justify:{type:String,default:()=>uni.$u.props.row.justify},align:{type:String,default:()=>uni.$u.props.row.align}}}],data:()=>({}),computed:{uJustify(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align},rowStyle(){const t={alignItems:this.uAlignItem,justifyContent:this.uJustify};return this.gutter&&(t.marginLeft=uni.$u.addUnit(-Number(this.gutter)/2),t.marginRight=uni.$u.addUnit(-Number(this.gutter)/2)),uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}},emits:["click"],methods:{clickHandler(t){this.$emit("click")},async getComponentWidth(){return await uni.$u.sleep(),new Promise((t=>{this.$uGetRect(".u-row").then((e=>{t(e.width)}))}))}}},[["render",function(l,o,n,d,p,r){const c=i;return t(),e(c,{class:"u-row",ref:"u-row",style:u([r.rowStyle]),onClick:r.clickHandler},{default:s((()=>[a(l.$slots,"default",{},void 0,!0)])),_:3},8,["style","onClick"])}],["__scopeId","data-v-02833213"]]);const y=f({data:()=>({})},[["render",function(a,l,u,r,c,f){const y=d,h=i,b=m(p("u-col"),g),k=m(p("u-row"),_);return t(),e(h,{class:"u-page"},{default:s((()=>[o(h,{class:"u-demo-block"},{default:s((()=>[o(y,{class:"u-demo-block__title"},{default:s((()=>[n("基础使用")])),_:1}),o(h,{class:"u-demo-block__content"},{default:s((()=>[o(k,{customStyle:"margin-bottom: 10px"},{default:s((()=>[o(b,{span:"6"},{default:s((()=>[o(h,{class:"demo-layout bg-purple-light"})])),_:1}),o(b,{span:"6"},{default:s((()=>[o(h,{class:"demo-layout bg-purple"})])),_:1})])),_:1}),o(k,{customStyle:"margin-bottom: 10px"},{default:s((()=>[o(b,{span:"4"},{default:s((()=>[o(h,{class:"demo-layout bg-purple"})])),_:1}),o(b,{span:"4"},{default:s((()=>[o(h,{class:"demo-layout bg-purple-light"})])),_:1}),o(b,{span:"4"},{default:s((()=>[o(h,{class:"demo-layout bg-purple-dark"})])),_:1})])),_:1}),o(k,{justify:"space-between"},{default:s((()=>[o(b,{span:"3"},{default:s((()=>[o(h,{class:"demo-layout bg-purple"})])),_:1}),o(b,{span:"3"},{default:s((()=>[o(h,{class:"demo-layout bg-purple-light"})])),_:1}),o(b,{span:"3"},{default:s((()=>[o(h,{class:"demo-layout bg-purple"})])),_:1}),o(b,{span:"3"},{default:s((()=>[o(h,{class:"demo-layout bg-purple-light"})])),_:1})])),_:1})])),_:1})])),_:1}),o(h,{class:"u-demo-block"},{default:s((()=>[o(y,{class:"u-demo-block__title"},{default:s((()=>[n("分栏间隔")])),_:1}),o(h,{class:"u-demo-block__content"},{default:s((()=>[o(k,{justify:"space-between",gutter:"10"},{default:s((()=>[o(b,{span:"3"},{default:s((()=>[o(h,{class:"demo-layout bg-purple"})])),_:1}),o(b,{span:"3"},{default:s((()=>[o(h,{class:"demo-layout bg-purple-light"})])),_:1}),o(b,{span:"3"},{default:s((()=>[o(h,{class:"demo-layout bg-purple"})])),_:1}),o(b,{span:"3"},{default:s((()=>[o(h,{class:"demo-layout bg-purple-light"})])),_:1})])),_:1})])),_:1})])),_:1}),o(h,{class:"u-demo-block"},{default:s((()=>[o(y,{class:"u-demo-block__title"},{default:s((()=>[n("混合布局")])),_:1}),o(h,{class:"u-demo-block__content"},{default:s((()=>[o(k,{justify:"space-between",gutter:"10"},{default:s((()=>[o(b,{span:"2"},{default:s((()=>[o(h,{class:"demo-layout bg-purple-light"})])),_:1}),o(b,{span:"4"},{default:s((()=>[o(h,{class:"demo-layout bg-purple"})])),_:1}),o(b,{span:"6"},{default:s((()=>[o(h,{class:"demo-layout bg-purple-dark"})])),_:1})])),_:1})])),_:1})])),_:1}),o(h,{class:"u-demo-block"},{default:s((()=>[o(y,{class:"u-demo-block__title"},{default:s((()=>[n("分栏偏移")])),_:1}),o(h,{class:"u-demo-block__content"},{default:s((()=>[o(k,{justify:"space-between",customStyle:"margin-bottom: 10px"},{default:s((()=>[o(b,{span:"3",offset:"3"},{default:s((()=>[o(h,{class:"demo-layout bg-purple-light"})])),_:1}),o(b,{span:"3",offset:"3"},{default:s((()=>[o(h,{class:"demo-layout bg-purple"})])),_:1})])),_:1}),o(k,null,{default:s((()=>[o(b,{span:"3"},{default:s((()=>[o(h,{class:"demo-layout bg-purple-light"})])),_:1}),o(b,{span:"3",offset:"3"},{default:s((()=>[o(h,{class:"demo-layout bg-purple"})])),_:1})])),_:1})])),_:1})])),_:1}),o(h,{class:"u-demo-block"},{default:s((()=>[o(y,{class:"u-demo-block__title"},{default:s((()=>[n("对齐方式")])),_:1}),o(h,{class:"u-demo-block__content"},{default:s((()=>[o(k,{justify:"space-between",customStyle:"margin-bottom: 10px"},{default:s((()=>[o(b,{span:"3"},{default:s((()=>[o(h,{class:"demo-layout bg-purple-light"})])),_:1}),o(b,{span:"3"},{default:s((()=>[o(h,{class:"demo-layout bg-purple"})])),_:1})])),_:1}),o(k,null,{default:s((()=>[o(b,{span:"3"},{default:s((()=>[o(h,{class:"demo-layout bg-purple-light"})])),_:1}),o(b,{span:"3"},{default:s((()=>[o(h,{class:"demo-layout bg-purple"})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-70ab21ec"]]);export{y as default};