(window.webpackJsonp = window.webpackJsonp || []).push([
  [108],
  {
    587: function (t, a, s) {
      "use strict";
      s.r(a);
      var n = s(6),
        e = Object(n.a)(
          {},
          function () {
            var t = this,
              a = t._self._c;
            return a(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                a(
                  "h2",
                  { attrs: { id: "swiper-轮播图" } },
                  [
                    a(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#swiper-轮播图" },
                      },
                      [t._v("#")]
                    ),
                    t._v(" Swiper 轮播图 "),
                    a("to-api"),
                  ],
                  1
                ),
                t._v(" "),
                a("demo-model", {
                  attrs: { url: "/pages/componentsC/swiper/swiper" },
                }),
                t._v(" "),
                a("p", [
                  t._v(
                    "该组件一般用于导航轮播，广告展示等场景,可开箱即用，具有如下特点："
                  ),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [t._v("自定义指示器模式，可配置指示器样式")]),
                  t._v(" "),
                  a("li", [t._v("3D轮播图效果，满足不同的开发需求")]),
                  t._v(" "),
                  a("li", [t._v("可配置显示标题，涵盖不同的应用场景")]),
                  t._v(" "),
                  a("li", [
                    t._v("具有设置加载状态和嵌入视频的能力，功能齐全丰富"),
                  ]),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "平台差异说明" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#平台差异说明" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 平台差异说明"),
                ]),
                t._v(" "),
                a("table", [
                  a("thead", [
                    a("tr", [
                      a("th", { staticStyle: { "text-align": "center" } }, [
                        t._v("App（vue）"),
                      ]),
                      t._v(" "),
                      a("th", { staticStyle: { "text-align": "center" } }, [
                        t._v("App（nvue）"),
                      ]),
                      t._v(" "),
                      a("th", { staticStyle: { "text-align": "center" } }, [
                        t._v("H5"),
                      ]),
                      t._v(" "),
                      a("th", { staticStyle: { "text-align": "center" } }, [
                        t._v("小程序"),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  a("tbody", [
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "center" } }, [
                        t._v("√"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "center" } }, [
                        t._v("√"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "center" } }, [
                        t._v("√"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "center" } }, [
                        t._v("√"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "基本使用" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#基本使用" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 基本使用"),
                ]),
                t._v(" "),
                a("p", [
                  t._v("通过"),
                  a("code", [t._v("list")]),
                  t._v(
                    "参数传入轮播图列表值，该值为一个数组，键值为图片路径，例如："
                  ),
                ]),
                t._v(" "),
                a("div", { staticClass: "language-html extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-html" } }, [
                    a("code", [
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("template"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n    "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("u-swiper"),
                        ]),
                        t._v("\n            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":list")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("list1"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("@change")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("change"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("@click")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("click"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n    "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("u-swiper"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n"),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("template"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n\n"),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      a("span", { pre: !0, attrs: { class: "token script" } }, [
                        a(
                          "span",
                          {
                            pre: !0,
                            attrs: { class: "token language-javascript" },
                          },
                          [
                            t._v("\n    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("export")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("default")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n        "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("data")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n            "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("return")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("list1")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("[")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/swiper/swiper1.png'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/swiper/swiper2.png'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/swiper/swiper3.png'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("]")]
                            ),
                            t._v("\n            "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n        "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n"),
                          ]
                        ),
                      ]),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("script"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                a("h3", { attrs: { id: "带标题" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#带标题" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 带标题"),
                ]),
                t._v(" "),
                a("p", [
                  t._v("添加"),
                  a("code", [t._v("showTitle")]),
                  t._v("属性以展示标题，此时"),
                  a("code", [t._v("list")]),
                  t._v("的参数应为一个对象：例如：\n"),
                  a("br"),
                  t._v("\n（请注意：您期望使用对象作为参数时，需要配置"),
                  a("code", [t._v("u-swiper")]),
                  t._v("组件的"),
                  a("code", [t._v("keyName")]),
                  t._v("参数为"),
                  a("code", [t._v("您当前对象的图片key")]),
                  t._v("值）如："),
                  a("code", [t._v('keyName="image"')]),
                ]),
                t._v(" "),
                a("div", { staticClass: "language-html extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-html" } }, [
                    a("code", [
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("template"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n    "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("u-swiper"),
                        ]),
                        t._v("\n            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":list")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("list2"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("keyName")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("image"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("showTitle")]
                        ),
                        t._v("\n            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":autoplay")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("false"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("circular")]
                        ),
                        t._v("\n    "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("u-swiper"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n"),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("template"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n\n"),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      a("span", { pre: !0, attrs: { class: "token script" } }, [
                        a(
                          "span",
                          {
                            pre: !0,
                            attrs: { class: "token language-javascript" },
                          },
                          [
                            t._v("\n    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("export")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("default")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n        "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("data")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n            "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("return")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("list2")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("[")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("image")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/swiper/swiper2.png'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("title")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v("'昨夜星辰昨夜风，画楼西畔桂堂东'")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("image")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/swiper/swiper1.png'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("title")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v("'身无彩凤双飞翼，心有灵犀一点通'")]
                            ),
                            t._v("\n                "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("image")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/swiper/swiper3.png'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("title")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'"
                                ),
                              ]
                            ),
                            t._v("\n                "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("]")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n            "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n        "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n"),
                          ]
                        ),
                      ]),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("script"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                a("h3", { attrs: { id: "带指示器" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#带指示器" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 带指示器"),
                ]),
                t._v(" "),
                a("p", [
                  t._v("通过"),
                  a("code", [t._v("indicator")]),
                  t._v("属性添加指示器，例如："),
                ]),
                t._v(" "),
                a("div", { staticClass: "language-html extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-html" } }, [
                    a("code", [
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("template"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n    "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("u-swiper"),
                        ]),
                        t._v("\n            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":list")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("list3"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("indicator")]
                        ),
                        t._v("\n            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("indicatorMode")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("line"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("circular")]
                        ),
                        t._v("\n    "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("u-swiper"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n"),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("template"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n\n"),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      a("span", { pre: !0, attrs: { class: "token script" } }, [
                        a(
                          "span",
                          {
                            pre: !0,
                            attrs: { class: "token language-javascript" },
                          },
                          [
                            t._v("\n    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("export")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("default")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n        "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("data")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n            "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("return")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("list3")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("[")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/swiper/swiper3.png'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/swiper/swiper2.png'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/swiper/swiper1.png'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("]")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n            "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n        "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n"),
                          ]
                        ),
                      ]),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("script"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                a("h3", { attrs: { id: "加载中" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#加载中" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 加载中"),
                ]),
                t._v(" "),
                a("p", [
                  t._v("通过添加"),
                  a("code", [t._v("loading")]),
                  t._v("属性达到加载中的状态，例如：\n"),
                  a("br"),
                  t._v("\n您也可以动态的来控制加载状态，比如："),
                  a("code", [t._v(":loading='loading'")]),
                ]),
                t._v(" "),
                a("div", { staticClass: "language-html extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-html" } }, [
                    a("code", [
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("template"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n    "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("u-swiper"),
                        ]),
                        t._v("\n            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":list")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("list3"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("loading")]
                        ),
                        t._v("\n    "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("u-swiper"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n"),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("template"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n\n"),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      a("span", { pre: !0, attrs: { class: "token script" } }, [
                        a(
                          "span",
                          {
                            pre: !0,
                            attrs: { class: "token language-javascript" },
                          },
                          [
                            t._v("\n    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("export")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("default")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n        "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("data")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n            "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("return")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("list3")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("[")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/swiper/swiper3.png'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/swiper/swiper2.png'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/swiper/swiper1.png'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("]")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n            "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n        "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n"),
                          ]
                        ),
                      ]),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("script"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                a("h3", { attrs: { id: "嵌入视频" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#嵌入视频" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 嵌入视频"),
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    "我们提供了嵌入视频的能力，为避免资源浪费，在您切换轮播的时候视频会停止播放，你可以设置"
                  ),
                  a("code", [t._v("poster")]),
                  t._v("指定视频封面，案例如下："),
                ]),
                t._v(" "),
                a("div", { staticClass: "language-html extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-html" } }, [
                    a("code", [
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("template"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n    "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("u-swiper"),
                        ]),
                        t._v("\n            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":list")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("list4"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("keyName")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("url"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":autoplay")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("false"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n    "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("u-swiper"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n"),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("template"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n\n"),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      a("span", { pre: !0, attrs: { class: "token script" } }, [
                        a(
                          "span",
                          {
                            pre: !0,
                            attrs: { class: "token language-javascript" },
                          },
                          [
                            t._v("\n    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("export")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("default")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n        "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("data")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n            "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("return")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("list4")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("[")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("url")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/resources/video.mp4'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("title")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v("'昨夜星辰昨夜风，画楼西畔桂堂东'")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("poster")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/swiper/swiper1.png'"
                                ),
                              ]
                            ),
                            t._v("\n                "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("url")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/swiper/swiper2.png'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("title")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v("'身无彩凤双飞翼，心有灵犀一点通'")]
                            ),
                            t._v("\n                "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("url")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/swiper/swiper3.png'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("title")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'"
                                ),
                              ]
                            ),
                            t._v("\n                "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("]")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n            "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n        "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n"),
                          ]
                        ),
                      ]),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("script"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                a(
                  "h3",
                  { attrs: { id: "指定类型" } },
                  [
                    a(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#指定类型" },
                      },
                      [t._v("#")]
                    ),
                    t._v(" 指定类型 "),
                    a("Badge", { attrs: { text: "2.0.30" } }),
                  ],
                  1
                ),
                t._v(" "),
                a("p", [
                  t._v("默认会根据链接自动判断"),
                  a("code", [t._v("swiper-item")]),
                  t._v(
                    "类型，但是在极端情况下可能会不准确，所以我们提供了指定"
                  ),
                  a("code", [t._v("item")]),
                  t._v("的类型，通过设置"),
                  a("code", [t._v("type")]),
                  t._v("为"),
                  a("code", [t._v("video")]),
                  t._v("或"),
                  a("code", [t._v("image")]),
                  t._v("即可："),
                ]),
                t._v(" "),
                a("div", { staticClass: "language-html extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-html" } }, [
                    a("code", [
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("template"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n    "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("u-swiper"),
                        ]),
                        t._v("\n            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":list")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("list4"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("keyName")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("url"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":autoplay")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("false"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n    "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("u-swiper"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n"),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("template"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n\n"),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      a("span", { pre: !0, attrs: { class: "token script" } }, [
                        a(
                          "span",
                          {
                            pre: !0,
                            attrs: { class: "token language-javascript" },
                          },
                          [
                            t._v("\n    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("export")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("default")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n        "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("data")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n            "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("return")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("list4")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("[")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("url")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/resources/video.mp4'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("title")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v("'昨夜星辰昨夜风，画楼西畔桂堂东'")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("poster")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/swiper/swiper1.png'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("type")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v("'video'")]
                            ),
                            t._v("\n                "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("url")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/swiper/swiper2.png'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("title")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v("'身无彩凤双飞翼，心有灵犀一点通'")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("type")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [t._v("'image'")]
                            ),
                            t._v("\n                "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("url")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/swiper/swiper3.png'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("title")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'"
                                ),
                              ]
                            ),
                            t._v("\n                "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("]")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n            "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n        "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n"),
                          ]
                        ),
                      ]),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("script"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                a("h3", { attrs: { id: "自定义指示器" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#自定义指示器" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 自定义指示器"),
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    "如您需要以指示点或数字形式来自定义指示器，请参考如下案例："
                  ),
                ]),
                t._v(" "),
                a("div", { staticClass: "language-html extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-html" } }, [
                    a("code", [
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("template"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n    "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("view"),
                        ]),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("class")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("u-demo-block"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n        "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("text"),
                        ]),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("class")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("u-demo-block__title"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("自定义指示器"),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("text"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n        "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("u-swiper"),
                        ]),
                        t._v("\n                "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":list")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("list5"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n                "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("@change")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("e => current = e.current"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n                "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":autoplay")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("false"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n        "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n            "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("template"),
                        ]),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("#indicator")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n                "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("view"),
                        ]),
                        t._v("\n                    "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("class")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("indicator"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n                "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n                    "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("view"),
                        ]),
                        t._v("\n                            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("class")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("indicator__dot"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n                            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("v-for")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("(item, index) in list5"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n                            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":key")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("index"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n                            "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":class")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v(
                              "[index === current && 'indicator__dot--active']"
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n                    "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n                    "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("view"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n                "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("view"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n            "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("template"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n        "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("u-swiper"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n        "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("u-gap"),
                        ]),
                        t._v("\n                "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("bgColor")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("transparent"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n                "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("height")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("15"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n        "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("u-gap"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n        "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("u-swiper"),
                        ]),
                        t._v("\n                "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":list")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("list6"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n                "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("@change")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("e => currentNum = e.current"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n                "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":autoplay")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("false"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n                "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("indicatorStyle")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("right: 20px"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n        "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n            "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("template"),
                        ]),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("#indicator")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n                "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("view"),
                        ]),
                        t._v("\n                    "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("class")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("indicator-num"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n                "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n                    "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("text"),
                        ]),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("class")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("indicator-num__text"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("{{ currentNum + 1 }}/{{ list6.length }}"),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("text"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n                "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("view"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n            "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("template"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n        "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("u-swiper"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n    "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("view"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n"),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("template"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n\n"),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      a("span", { pre: !0, attrs: { class: "token script" } }, [
                        a(
                          "span",
                          {
                            pre: !0,
                            attrs: { class: "token language-javascript" },
                          },
                          [
                            t._v("\n    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("export")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("default")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n        "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("data")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n            "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("return")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("list5")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("[")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/swiper/swiper3.png'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/swiper/swiper2.png'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/swiper/swiper1.png'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("]")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("list6")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("[")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/swiper/swiper2.png'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/swiper/swiper3.png'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/swiper/swiper1.png'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("]")]
                            ),
                            t._v("\n            "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n        "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n"),
                          ]
                        ),
                      ]),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("script"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n\n"),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("style"),
                        ]),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("lang")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("scss"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      a("span", { pre: !0, attrs: { class: "token style" } }, [
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token language-css" } },
                          [
                            t._v("\n    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token selector" } },
                              [t._v(".indicator")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n        "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token atrule" } },
                              [
                                a(
                                  "span",
                                  { pre: !0, attrs: { class: "token rule" } },
                                  [t._v("@include")]
                                ),
                                t._v(" "),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token function" },
                                  },
                                  [t._v("flex")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v("(")]
                                ),
                                t._v("row"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(")")]
                                ),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(";")]
                                ),
                              ]
                            ),
                            t._v("\n        "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token property" } },
                              [t._v("justify-content")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(":")]
                            ),
                            t._v(" center"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n        "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token selector" } },
                              [t._v("&__dot")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n             "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token property" } },
                              [t._v("height")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(":")]
                            ),
                            t._v(" 6px"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n             "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token property" } },
                              [t._v("width")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(":")]
                            ),
                            t._v(" 6px"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n             "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token property" } },
                              [t._v("border-radius")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(":")]
                            ),
                            t._v(" 100px"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n             "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token property" } },
                              [t._v("background-color")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("rgba")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            t._v("255"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" 255"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" 255"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" 0.35"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n             "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token property" } },
                              [t._v("margin")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(":")]
                            ),
                            t._v(" 0 5px"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n             "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token property" } },
                              [t._v("transition")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(":")]
                            ),
                            t._v(" background-color 0.3s"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n    \n            "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token selector" } },
                              [t._v("&--active")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                 "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token property" } },
                              [t._v("background-color")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(":")]
                            ),
                            t._v(" #ffffff"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n             "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n        "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n\n    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token selector" } },
                              [t._v(".indicator-num")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n        "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token property" } },
                              [t._v("padding")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(":")]
                            ),
                            t._v(" 2px 0"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n        "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token property" } },
                              [t._v("background-color")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("rgba")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            t._v("0"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" 0"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" 0"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v(" 0.35"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n        "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token property" } },
                              [t._v("border-radius")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(":")]
                            ),
                            t._v(" 100px"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n        "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token property" } },
                              [t._v("width")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(":")]
                            ),
                            t._v(" 35px"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n        "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token atrule" } },
                              [
                                a(
                                  "span",
                                  { pre: !0, attrs: { class: "token rule" } },
                                  [t._v("@include")]
                                ),
                                t._v(" flex"),
                                a(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token punctuation" },
                                  },
                                  [t._v(";")]
                                ),
                              ]
                            ),
                            t._v("\n        "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token property" } },
                              [t._v("justify-content")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(":")]
                            ),
                            t._v(" center"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n\n        "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token selector" } },
                              [t._v("&__text")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n             "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token property" } },
                              [t._v("color")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(":")]
                            ),
                            t._v(" #FFFFFF"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n             "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token property" } },
                              [t._v("font-size")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(":")]
                            ),
                            t._v(" 12px"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(";")]
                            ),
                            t._v("\n         "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n"),
                          ]
                        ),
                      ]),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("style"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                a("h3", { attrs: { id: "卡片式轮播" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#卡片式轮播" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 卡片式轮播"),
                ]),
                t._v(" "),
                a("p", [
                  t._v("在实际开发中，普通的轮播或许不能满足您的开发需求，"),
                  a("code", [t._v("swiper")]),
                  t._v(
                    "组件提供了卡片式轮播的api，您可以参考以下案例实现此功能"
                  ),
                ]),
                t._v(" "),
                a("div", { staticClass: "language-html extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-html" } }, [
                    a("code", [
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("template"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("\x3c!-- #ifndef APP-NVUE || MP-TOUTIAO --\x3e")]
                      ),
                      t._v("\n    "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("view"),
                        ]),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("class")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("u-demo-block"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n        "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("text"),
                        ]),
                        t._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("class")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("u-demo-block__title"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("卡片式"),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("text"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n        "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("u-swiper"),
                        ]),
                        t._v("\n                "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":list")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("list3"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n                "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("previousMargin")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("30"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n                "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("nextMargin")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("30"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n                "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("circular")]
                        ),
                        t._v("\n                "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":autoplay")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("false"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n                "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("radius")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("5"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n                "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("bgColor")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token punctuation attr-equals",
                                },
                              },
                              [t._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                            t._v("#ffffff"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v('"')]
                            ),
                          ]
                        ),
                        t._v("\n        "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("u-swiper"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n    "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("view"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("\x3c!-- #endif --\x3e")]
                      ),
                      t._v("\n"),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("template"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n\n"),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      a("span", { pre: !0, attrs: { class: "token script" } }, [
                        a(
                          "span",
                          {
                            pre: !0,
                            attrs: { class: "token language-javascript" },
                          },
                          [
                            t._v("\n    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("export")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("default")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n        "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token function" } },
                              [t._v("data")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("(")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n            "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token keyword" } },
                              [t._v("return")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("{")]
                            ),
                            t._v("\n                "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token literal-property property",
                                },
                              },
                              [t._v("list3")]
                            ),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token operator" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("[")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/swiper/swiper3.png'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/swiper/swiper2.png'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                    "),
                            a(
                              "span",
                              { pre: !0, attrs: { class: "token string" } },
                              [
                                t._v(
                                  "'https://cdn.uviewui.com/uview/swiper/swiper1.png'"
                                ),
                              ]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n                "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("]")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v(",")]
                            ),
                            t._v("\n            "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n        "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n    "),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" },
                              },
                              [t._v("}")]
                            ),
                            t._v("\n"),
                          ]
                        ),
                      ]),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("script"),
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        ),
                      ]),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                a("h3", { attrs: { id: "控制轮播效果" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#控制轮播效果" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 控制轮播效果"),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [
                    a("code", [t._v("autoplay")]),
                    t._v("-是否自动轮播，默认为"),
                    a("code", [t._v("true")]),
                  ]),
                  t._v(" "),
                  a("li", [
                    a("code", [t._v("interval")]),
                    t._v("-前后两张图自动轮播的时间间隔"),
                  ]),
                  t._v(" "),
                  a("li", [
                    a("code", [t._v("duration")]),
                    t._v("-切换一张轮播图所需的时间"),
                  ]),
                  t._v(" "),
                  a("li", [
                    a("code", [t._v("circular")]),
                    t._v(
                      "-是否衔接滑动，即到最后一张时，是否可以直接转到第一张"
                    ),
                  ]),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "此页面源代码地址" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#此页面源代码地址" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" 此页面源代码地址"),
                ]),
                t._v(" "),
                a("div", { staticClass: "custom-block tip" }, [
                  a("p", { staticClass: "custom-block-title" }, [
                    t._v("页面源码地址"),
                  ]),
                  t._v(" "),
                  a("br"),
                  t._v(" "),
                  a(
                    "a",
                    {
                      staticStyle: { display: "flex", "align-items": "center" },
                      attrs: {
                        href: "https://github.com/ijry/uview-plus/blob/master/pages/componentsC/swiper/swiper.nvue",
                        target: "_blank",
                      },
                    },
                    [
                      a("img", {
                        attrs: {
                          height: "30",
                          src: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",
                          title: "github",
                          width: "30",
                        },
                      }),
                      t._v(" github\n"),
                    ]
                  ),
                  t._v(" "),
                  a(
                    "a",
                    {
                      staticStyle: {
                        display: "flex",
                        "align-items": "center",
                        "margin-top": "10px",
                      },
                      attrs: {
                        href: "https://gitee.com/ijry/uview-plus/blob/master/pages/componentsC/swiper/swiper.nvue",
                        target: "_blank",
                      },
                    },
                    [
                      a("img", {
                        attrs: {
                          height: "30",
                          src: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png",
                          title: "github",
                          width: "30",
                        },
                      }),
                      t._v(" gitee\n"),
                    ]
                  ),
                  t._v(" "),
                  a("br"),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "api" } }, [
                  a(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#api" } },
                    [t._v("#")]
                  ),
                  t._v(" API"),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "swiper-props" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#swiper-props" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Swiper Props"),
                ]),
                t._v(" "),
                a("table", [
                  a("thead", [
                    a("tr", [
                      a("th", { staticStyle: { "text-align": "left" } }, [
                        t._v("参数"),
                      ]),
                      t._v(" "),
                      a("th", { staticStyle: { "text-align": "left" } }, [
                        t._v("说明"),
                      ]),
                      t._v(" "),
                      a("th", { staticStyle: { "text-align": "left" } }, [
                        t._v("类型"),
                      ]),
                      t._v(" "),
                      a("th", { staticStyle: { "text-align": "left" } }, [
                        t._v("默认值"),
                      ]),
                      t._v(" "),
                      a("th", { staticStyle: { "text-align": "left" } }, [
                        t._v("可选值"),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  a("tbody", [
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("list"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v('轮播图数据，见上方"基本使用"说明'),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("Array"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("-"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("-"),
                      ]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("indicator"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("是否显示面板指示器"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("Boolean"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("false"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("true"),
                      ]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("indicatorActiveColor"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("指示器激活的颜色"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("String"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("#FFFFFF"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("-"),
                      ]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("indicatorInactiveColor"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("指示器非激活颜色"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("String"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("rgba(255, 255, 255, 0.35)"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("-"),
                      ]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("indicatorStyle"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("指示器样式，可通过bottom，left，right进行定位"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("String | Object"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("-"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("-"),
                      ]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("indicatorMode"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("指示器模式"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("String"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("line"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("dot"),
                      ]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("autoplay"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("是否自动切换"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("Boolean"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("true"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("false"),
                      ]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("current"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("当前所在滑块的 index"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("Number | String"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("0"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("-"),
                      ]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("currentItemId"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v(
                          "当前所在滑块的 item-id ，不能与 current 被同时指定"
                        ),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("String"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("-"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("-"),
                      ]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("interval"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("滑块自动切换时间间隔（ms）"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("String | Number"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("3000"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("-"),
                      ]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("duration"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("滑块切换过程所需时间（ms），nvue不支持"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("String | Number"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("300"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("-"),
                      ]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("circular"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("播放到末尾后是否重新回到开头"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("Boolean"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("false"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("true"),
                      ]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("previousMargin"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v(
                          "前边距，可用于露出前一项的一小部分，nvue和支付宝不支持"
                        ),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("String | Number"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("0"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("-"),
                      ]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("nextMargin"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v(
                          "后边距，可用于露出后一项的一小部分，nvue和支付宝不支持"
                        ),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("String | Number"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("0"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("-"),
                      ]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("acceleration"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v(
                          "当开启时，会根据滑动速度，连续滑动多屏，支付宝不支持"
                        ),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("Boolean"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("false"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("true"),
                      ]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("displayMultipleItems"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("同时显示的滑块数量，nvue、支付宝小程序不支持"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("Number"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("1"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("-"),
                      ]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("easingFunction"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("指定swiper切换缓动动画类型， 只对微信小程序有效"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("String"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("default"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v(
                          "linear、easeInCubic、easeOutCubic、easeInOutCubic"
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("keyName"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("list数组中指定对象的目标属性名"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("String"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("url"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("-"),
                      ]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("imgMode"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("图片的裁剪模式"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("String"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("aspectFill"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("详见图片裁剪"),
                      ]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("height"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("组件高度"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("String | Number"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("130"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("-"),
                      ]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("bgColor"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("背景颜色"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("String"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("#f3f4f6"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("-"),
                      ]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("radius"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("组件圆角，数值或带单位的字符串"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("String | Number"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("4"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("-"),
                      ]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("loading"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("是否加载中"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("Boolean"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("false"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("true"),
                      ]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("showTitle"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("是否显示标题，要求数组对象中有title属性"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("Boolean"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("false"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("-"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "swiper-events" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#swiper-events" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Swiper Events"),
                ]),
                t._v(" "),
                a("table", [
                  a("thead", [
                    a("tr", [
                      a("th", { staticStyle: { "text-align": "left" } }, [
                        t._v("事件名"),
                      ]),
                      t._v(" "),
                      a("th", { staticStyle: { "text-align": "left" } }, [
                        t._v("说明"),
                      ]),
                      t._v(" "),
                      a("th", { staticStyle: { "text-align": "left" } }, [
                        t._v("回调参数"),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  a("tbody", [
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("click"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("点击轮播图时触发"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("index：点击了第几张图片，从0开始"),
                      ]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("change"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("轮播图切换时触发(自动或者手动切换)"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("index：切换到了第几张图片，从0开始"),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "swiperindicator-props" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#swiperindicator-props" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" SwiperIndicator Props"),
                ]),
                t._v(" "),
                a("table", [
                  a("thead", [
                    a("tr", [
                      a("th", { staticStyle: { "text-align": "left" } }, [
                        t._v("参数"),
                      ]),
                      t._v(" "),
                      a("th", { staticStyle: { "text-align": "left" } }, [
                        t._v("说明"),
                      ]),
                      t._v(" "),
                      a("th", { staticStyle: { "text-align": "left" } }, [
                        t._v("类型"),
                      ]),
                      t._v(" "),
                      a("th", { staticStyle: { "text-align": "left" } }, [
                        t._v("默认值"),
                      ]),
                      t._v(" "),
                      a("th", { staticStyle: { "text-align": "left" } }, [
                        t._v("可选值"),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  a("tbody", [
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("length"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("轮播的长度"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("String | Number"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("0"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("-"),
                      ]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("current"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("当前处于活动状态的轮播的索引"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("String | Number"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("0"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("-"),
                      ]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("indicatorActiveColor"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("指示器非激活颜色"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("String"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("-"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("-"),
                      ]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("indicatorInactiveColor"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("指示器的激活颜色"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("String"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("-"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("-"),
                      ]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("indicatorStyle"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("指示器的形式"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("String"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("line"),
                      ]),
                      t._v(" "),
                      a("td", { staticStyle: { "text-align": "left" } }, [
                        t._v("dot"),
                      ]),
                    ]),
                  ]),
                ]),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      a.default = e.exports;
    },
  },
]);
