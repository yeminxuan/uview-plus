(window.webpackJsonp = window.webpackJsonp || []).push([
  [12, 15, 21, 88],
  {
    287: function (t, e, n) {
      "use strict";
      n.d(e, "c", function () {
        return r;
      }),
        n.d(e, "e", function () {
          return l;
        }),
        n.d(e, "f", function () {
          return c;
        }),
        n.d(e, "g", function () {
          return p;
        }),
        n.d(e, "a", function () {
          return u;
        }),
        n.d(e, "d", function () {
          return d;
        }),
        n.d(e, "i", function () {
          return f;
        }),
        n.d(e, "j", function () {
          return h;
        }),
        n.d(e, "b", function () {
          return v;
        }),
        n.d(e, "h", function () {
          return m;
        });
      const r = /#.*$/,
        i = /\.(md|html)$/,
        a = /\/$/,
        s = /^[a-z]+:/i;
      function o(t) {
        return decodeURI(t).replace(r, "").replace(i, "");
      }
      function l(t) {
        return s.test(t);
      }
      function c(t) {
        return /^mailto:/.test(t);
      }
      function p(t) {
        return /^tel:/.test(t);
      }
      function u(t) {
        if (l(t)) return t;
        const e = t.match(r),
          n = e ? e[0] : "",
          i = o(t);
        return a.test(i) ? t : i + ".html" + n;
      }
      function d(t, e) {
        const n = decodeURIComponent(t.hash),
          i = (function (t) {
            const e = t.match(r);
            if (e) return e[0];
          })(e);
        if (i && n !== i) return !1;
        return o(t.path) === o(e);
      }
      function f(t, e, n) {
        if (l(e)) return { type: "external", path: e };
        n &&
          (e = (function (t, e, n) {
            const r = t.charAt(0);
            if ("/" === r) return t;
            if ("?" === r || "#" === r) return e + t;
            const i = e.split("/");
            (n && i[i.length - 1]) || i.pop();
            const a = t.replace(/^\//, "").split("/");
            for (let t = 0; t < a.length; t++) {
              const e = a[t];
              ".." === e ? i.pop() : "." !== e && i.push(e);
            }
            "" !== i[0] && i.unshift("");
            return i.join("/");
          })(e, n));
        const r = o(e);
        for (let e = 0; e < t.length; e++)
          if (o(t[e].regularPath) === r)
            return Object.assign({}, t[e], {
              type: "page",
              path: u(t[e].path),
            });
        return (
          console.error(
            `[vuepress] No matching page found for sidebar item "${e}"`
          ),
          {}
        );
      }
      function h(t, e, n, r) {
        const { pages: i, themeConfig: a } = n,
          s = (r && a.locales && a.locales[r]) || a;
        if ("auto" === (t.frontmatter.sidebar || s.sidebar || a.sidebar))
          return g(t);
        const o = s.sidebar || a.sidebar;
        if (o) {
          const { base: n, config: r } = (function (t, e) {
            if (Array.isArray(e)) return { base: "/", config: e };
            for (const r in e)
              if (
                0 ===
                ((n = t), /(\.html|\/)$/.test(n) ? n : n + "/").indexOf(
                  encodeURI(r)
                )
              )
                return { base: r, config: e[r] };
            var n;
            return {};
          })(e, o);
          return "auto" === r
            ? g(t)
            : r
            ? r.map((t) =>
                (function t(e, n, r, i = 1) {
                  if ("string" == typeof e) return f(n, e, r);
                  if (Array.isArray(e))
                    return Object.assign(f(n, e[0], r), { title: e[1] });
                  {
                    const a = e.children || [];
                    return 0 === a.length && e.path
                      ? Object.assign(f(n, e.path, r), { title: e.title })
                      : {
                          type: "group",
                          path: e.path,
                          title: e.title,
                          sidebarDepth: e.sidebarDepth,
                          initialOpenGroupIndex: e.initialOpenGroupIndex,
                          children: a.map((e) => t(e, n, r, i + 1)),
                          collapsable: !1 !== e.collapsable,
                        };
                  }
                })(t, i, n)
              )
            : [];
        }
        return [];
      }
      function g(t) {
        const e = v(t.headers || []);
        return [
          {
            type: "group",
            collapsable: !1,
            title: t.title,
            path: null,
            children: e.map((e) => ({
              type: "auto",
              title: e.title,
              basePath: t.path,
              path: t.path + "#" + e.slug,
              children: e.children || [],
            })),
          },
        ];
      }
      function v(t) {
        let e;
        return (
          (t = t.map((t) => Object.assign({}, t))).forEach((t) => {
            2 === t.level
              ? (e = t)
              : e && (e.children || (e.children = [])).push(t);
          }),
          t.filter((t) => 2 === t.level)
        );
      }
      function m(t) {
        return Object.assign(t, {
          type: t.items && t.items.length ? "links" : "link",
        });
      }
    },
    294: function (t, e) {
      t.exports = function (t) {
        return null == t;
      };
    },
    297: function (t, e, n) {},
    298: function (t, e, n) {},
    309: function (t, e, n) {
      "use strict";
      n(297);
    },
    310: function (t, e, n) {
      var r = n(18),
        i = n(3),
        a = n(13);
      t.exports = function (t) {
        return (
          "string" == typeof t || (!i(t) && a(t) && "[object String]" == r(t))
        );
      };
    },
    311: function (t, e, n) {
      "use strict";
      n(298);
    },
    318: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(294),
        i = n.n(r);
      const a = /\/$/,
        s = /^[a-z]+:/i;
      var o = {
          name: "PageEdit",
          computed: {
            lastUpdated() {
              return this.$page.lastUpdated;
            },
            lastUpdatedText() {
              return "string" == typeof this.$themeLocaleConfig.lastUpdated
                ? this.$themeLocaleConfig.lastUpdated
                : "string" == typeof this.$site.themeConfig.lastUpdated
                ? this.$site.themeConfig.lastUpdated
                : "Last Updated";
            },
            editLink() {
              const t = i()(this.$page.frontmatter.editLink)
                  ? this.$site.themeConfig.editLinks
                  : this.$page.frontmatter.editLink,
                {
                  repo: e,
                  docsDir: n = "",
                  docsBranch: r = "master",
                  docsRepo: a = e,
                } = this.$site.themeConfig;
              return t && a && this.$page.relativePath
                ? this.createEditLink(e, a, n, r, this.$page.relativePath)
                : null;
            },
            editLinkText() {
              return (
                this.$themeLocaleConfig.editLinkText ||
                this.$site.themeConfig.editLinkText ||
                "Edit this page"
              );
            },
          },
          methods: {
            createEditLink(t, e, n, r, i) {
              if (/bitbucket.org/.test(e)) {
                return (
                  e.replace(a, "") +
                  "/src" +
                  `/${r}/` +
                  (n ? n.replace(a, "") + "/" : "") +
                  i +
                  `?mode=edit&spa=0&at=${r}&fileviewer=file-view-default`
                );
              }
              if (/gitlab.com/.test(e)) {
                return (
                  e.replace(a, "") +
                  "/-/edit" +
                  `/${r}/` +
                  (n ? n.replace(a, "") + "/" : "") +
                  i
                );
              }
              return (
                (s.test(e) ? e : "https://github.com/" + e).replace(a, "") +
                "/edit" +
                `/${r}/` +
                (n ? n.replace(a, "") + "/" : "") +
                i
              );
            },
          },
        },
        l = (n(309), n(6)),
        c = Object(l.a)(
          o,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "footer",
              { staticClass: "page-edit" },
              [
                e("bottom-ad"),
                t._v(" "),
                t.editLink
                  ? e(
                      "div",
                      { staticClass: "edit-link" },
                      [
                        e(
                          "a",
                          {
                            attrs: {
                              href: t.editLink,
                              target: "_blank",
                              rel: "noopener noreferrer",
                            },
                          },
                          [t._v(t._s(t.editLinkText))]
                        ),
                        t._v(" "),
                        e("OutboundLink"),
                      ],
                      1
                    )
                  : t._e(),
                t._v(" "),
                t.lastUpdated
                  ? e("div", { staticClass: "last-updated" }, [
                      e("span", { staticClass: "prefix" }, [
                        t._v(t._s(t.lastUpdatedText) + ":"),
                      ]),
                      t._v(" "),
                      e("span", { staticClass: "time" }, [
                        t._v(t._s(t.lastUpdated)),
                      ]),
                    ])
                  : t._e(),
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
      e.default = c.exports;
    },
    319: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(287),
        i = n(310),
        a = n.n(i),
        s = n(294),
        o = n.n(s),
        l = {
          name: "PageNav",
          props: ["sidebarItems"],
          computed: {
            prev() {
              return p(c.PREV, this);
            },
            next() {
              return p(c.NEXT, this);
            },
          },
        };
      const c = {
        NEXT: {
          resolveLink: function (t, e) {
            return u(t, e, 1);
          },
          getThemeLinkConfig: ({ nextLinks: t }) => t,
          getPageLinkConfig: ({ frontmatter: t }) => t.next,
        },
        PREV: {
          resolveLink: function (t, e) {
            return u(t, e, -1);
          },
          getThemeLinkConfig: ({ prevLinks: t }) => t,
          getPageLinkConfig: ({ frontmatter: t }) => t.prev,
        },
      };
      function p(
        t,
        { $themeConfig: e, $page: n, $route: i, $site: s, sidebarItems: l }
      ) {
        const {
            resolveLink: c,
            getThemeLinkConfig: p,
            getPageLinkConfig: u,
          } = t,
          d = p(e),
          f = u(n),
          h = o()(f) ? d : f;
        return !1 === h
          ? void 0
          : a()(h)
          ? Object(r.i)(s.pages, h, i.path)
          : c(n, l);
      }
      function u(t, e, n) {
        const r = [];
        !(function t(e, n) {
          for (let r = 0, i = e.length; r < i; r++)
            "group" === e[r].type ? t(e[r].children || [], n) : n.push(e[r]);
        })(e, r);
        for (let e = 0; e < r.length; e++) {
          const i = r[e];
          if ("page" === i.type && i.path === decodeURIComponent(t.path))
            return r[e + n];
        }
      }
      var d = l,
        f = (n(311), n(6)),
        h = Object(f.a)(
          d,
          function () {
            var t = this,
              e = t._self._c;
            return t.prev || t.next
              ? e("div", { staticClass: "page-nav" }, [
                  e("p", { staticClass: "inner" }, [
                    t.prev
                      ? e(
                          "span",
                          { staticClass: "prev" },
                          [
                            t._v("\n      ←\n      "),
                            "external" === t.prev.type
                              ? e(
                                  "a",
                                  {
                                    staticClass: "prev",
                                    attrs: {
                                      href: t.prev.path,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                    },
                                  },
                                  [
                                    t._v(
                                      "\n        " +
                                        t._s(t.prev.title || t.prev.path) +
                                        "\n\n        "
                                    ),
                                    e("OutboundLink"),
                                  ],
                                  1
                                )
                              : e(
                                  "RouterLink",
                                  {
                                    staticClass: "prev",
                                    attrs: { to: t.prev.path },
                                  },
                                  [
                                    t._v(
                                      "\n        " +
                                        t._s(t.prev.title || t.prev.path) +
                                        "\n      "
                                    ),
                                  ]
                                ),
                          ],
                          1
                        )
                      : t._e(),
                    t._v(" "),
                    t.next
                      ? e(
                          "span",
                          { staticClass: "next" },
                          [
                            "external" === t.next.type
                              ? e(
                                  "a",
                                  {
                                    attrs: {
                                      href: t.next.path,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                    },
                                  },
                                  [
                                    t._v(
                                      "\n        " +
                                        t._s(t.next.title || t.next.path) +
                                        "\n\n        "
                                    ),
                                    e("OutboundLink"),
                                  ],
                                  1
                                )
                              : e(
                                  "RouterLink",
                                  { attrs: { to: t.next.path } },
                                  [
                                    t._v(
                                      "\n        " +
                                        t._s(t.next.title || t.next.path) +
                                        "\n      "
                                    ),
                                  ]
                                ),
                            t._v("\n      →\n    "),
                          ],
                          1
                        )
                      : t._e(),
                  ]),
                ])
              : t._e();
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = h.exports;
    },
    320: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(312),
        i = n.n(r),
        a = {
          data: () => ({
            id: "",
            adDialog: !1,
            qrDialog: !1,
            qrUrl: "",
            watchEnd: !1,
            loadingInstance: null,
          }),
          created() {},
          mounted() {
            // if ("undefined" != typeof window && window.localStorage) {
            //   let t = localStorage.getItem("adExpire");
            //   (!t || Date.parse(new Date()) / 1e3 > t) &&
            //     ((this.qrDialog = !0), this.watchAd());
            // }
          },
          methods: {
            openDialog() {
              this.qrDialog = !0;
            },
            async watchAd() {
              try {
                i.a
                  .post("https://uiadmin.net/api/v1/wxapp/ad/add")
                  .then((t) => {
                    let e = t.data;
                    200 === e.code
                      ? ((this.id = e.data.id), (this.qrUrl = e.data.base64))
                      : this.$message.error("出错" + e.msg);
                  });
              } catch (t) {
                this.$message.error("请求出错");
              }
            },
            async checkEnd() {
              try {
                i.a
                  .get(
                    "https://uiadmin.net/api/v1/wxapp/ad/check?id=" + this.id
                  )
                  .then((t) => {
                    let e = t.data;
                    200 === e.code
                      ? ((this.watchEnd = !0),
                        localStorage.setItem(
                          "adExpire",
                          Date.parse(new Date()) / 1e3 + 86400
                        ),
                        (this.qrDialog = !1))
                      : this.$message.error(e.msg);
                  });
              } catch (t) {
                this.$message.error("检查出错");
              }
            },
          },
          watch: {},
        },
        s = n(6),
        o = Object(s.a)(
          a,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              [
                e(
                  "el-dialog",
                  {
                    attrs: {
                      title: "广告",
                      visible: false,
                      width: "600px",
                      "close-on-click-modal": !1,
                      "close-on-press-escape": !1,
                      "show-close": !1,
                    },
                    on: {
                      "update:visible": function (e) {
                        t.qrDialog = e;
                      },
                    },
                    scopedSlots: t._u([
                      {
                        key: "footer",
                        fn: function () {
                          return [
                            e(
                              "div",
                              [
                                e(
                                  "el-button",
                                  {
                                    attrs: { type: "primary" },
                                    on: {
                                      click: function (e) {
                                        return (
                                          e.stopPropagation(),
                                          t.checkEnd.apply(null, arguments)
                                        );
                                      },
                                    },
                                  },
                                  [t._v("已经看完")]
                                ),
                              ],
                              1
                            ),
                          ];
                        },
                        proxy: !0,
                      },
                    ]),
                  },
                  [
                    e("div", [
                      e("h3", [t._v("请使用微信扫码")]),
                      t._v(" "),
                      e("div", { staticClass: "mt-1" }, [
                        t._v("扫码后请点击“打开广告”蓝色按钮"),
                      ]),
                      t._v(" "),
                      e("div", [
                        t._v(
                          "\n        感谢对开源软件的支持，观看广告将有助于uview-plus的可持续发展，特别是在鸿蒙、uni-app-x等方面的开发。\n      "
                        ),
                      ]),
                      t._v(" "),
                      e(
                        "div",
                        {
                          directives: [
                            {
                              name: "loading",
                              rawName: "v-loading",
                              value: !t.qrUrl,
                              expression: "qrUrl ? false : true",
                            },
                          ],
                          staticClass: "pt-3",
                        },
                        [
                          t.qrUrl
                            ? e("img", { attrs: { src: t.qrUrl, alt: "mind" } })
                            : t._e(),
                        ]
                      ),
                    ]),
                  ]
                ),
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
      e.default = o.exports;
    },
    415: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(318),
        i = n(319),
        a = n(320),
        s = {
          components: {
            PageEdit: r.default,
            PageNav: i.default,
            AdVip: a.default,
          },
          props: ["sidebarItems"],
          data: () => ({}),
        },
        o = n(6),
        l = Object(o.a)(
          s,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "main",
              {
                staticClass: "page",
                style: { marginTop: t.showV2Tips ? "2.3rem" : 0 },
              },
              [
                t._t("top"),
                t._v(" "),
                e("Content", { staticClass: "theme-default-content" }),
                t._v(" "),
                e("PageEdit"),
                t._v(" "),
                e(
                  "PageNav",
                  t._b({}, "PageNav", { sidebarItems: t.sidebarItems }, !1)
                ),
                t._v(" "),
                e("ad-vip"),
                t._v(" "),
                t._t("bottom"),
              ],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = l.exports;
    },
  },
]);
