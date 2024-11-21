(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{676:function(e,t,n){"use strict";n.r(t);var a=n(6),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"uts报错案例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uts报错案例"}},[e._v("#")]),e._v(" UTS报错案例")]),e._v(" "),t("p",[e._v("uts报错涉及到原生等方方面面，确实有些问题比较难以定位，特此收集整理供参考。")]),e._v(" "),t("h3",{attrs:{id:"undefined"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#undefined"}},[e._v("#")]),e._v(" Undefined")]),e._v(" "),t("p",[e._v("提示props中定义了一个变量，结果编译报错不存在，出现这种情况有一种可能是多个组件实用mixins定义了props，然后导出时使用的变量名称冲突。\nuview-plus是这样解决的，每个组件的props mixin都导出不同的名称避免冲突，如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("up-textarea/props.uts\nexport const propsTextarea = defineMixin({\n\tprops: {\n\t\t// 输入框的内容\n\t\tmodelValue: {\n\t\t\ttype: String,\n\t\t\tdefault: crtProp['value']\n\t\t},\n    }\n})\n\nup-tag/props.uts\nexport const propsTag = defineMixin({\n\tprops: {\n\t\ttext: {\n\t\t\ttype: String,\n\t\t\tdefault: crtProp['value']\n\t\t},\n    }\n})\n")])])]),t("h3",{attrs:{id:"unexpected-identifier"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unexpected-identifier"}},[e._v("#")]),e._v(" Unexpected identifier")]),e._v(" "),t("p",[e._v("[plugin:uni:pre-android] Unexpected identifier\n14:24:17.074 at uni_modules/uview-plus/components/up-textarea/up-textarea.uvue:1:0")]),e._v(" "),t("p",[e._v("有次遇到这样一个奇怪报错，运用《排除法》终极大法发现是条件编译影响了。")]),e._v(" "),t("p",[e._v("错误")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\x3c!-- #ifndef MP-ALIPAY 支付宝小程序自带 --\x3e\n")])])]),t("p",[e._v("正确")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\x3c!-- #ifndef MP-ALIPAY --\x3e\n")])])]),t("h3",{attrs:{id:"unresolved-reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unresolved-reference"}},[e._v("#")]),e._v(" Unresolved reference")]),e._v(" "),t("p",[e._v("‌error: Unresolved reference. None of the following candidates is applicable because of receiver type mismatch: ‌\n15:28:01.102 ‌public operator fun <T, R> DeepRecursiveFunction<TypeVariable(T), TypeVariable(R)>.invoke(value: TypeVariable(T)): TypeVariable(R) defined in kotlin‌\n同样运用《排除法》终极大法最终定位到是props mixin里面有语法错。\ncrtPropInput('placeholderStyle')应该是crtPropInput['placeholderStyle']")])])}),[],!1,null,null,null);t.default=r.exports}}]);