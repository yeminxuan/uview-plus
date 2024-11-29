(window.webpackJsonp = window.webpackJsonp || []).push([
  [88],
  {
    320: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a(312),
        s = a.n(i),
        r = {
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
            //   let e = localStorage.getItem("adExpire");
            //   (!e ||
            //     Date.parse(new Date()) / 1e3 > e ||
            //     e - Date.parse(new Date()) / 1e3 > 6e4) &&
            //     ((this.qrDialog = !0), this.watchAd());
            // }
          },
          methods: {
            openDialog() {
              this.qrDialog = !0;
            },
            async watchAd() {
              try {
                s.a
                  .post("https://uiadmin.net/api/v1/wxapp/ad/add")
                  .then((e) => {
                    let t = e.data;
                    200 === t.code
                      ? ((this.id = t.data.id), (this.qrUrl = t.data.base64))
                      : this.$message.error("出错" + t.msg);
                  });
              } catch (e) {
                this.$message.error("请求出错");
              }
            },
            async checkEnd() {
              try {
                s.a
                  .get(
                    "https://uiadmin.net/api/v1/wxapp/ad/check?id=" + this.id
                  )
                  .then((e) => {
                    let t = e.data;
                    200 === t.code
                      ? ((this.watchEnd = !0),
                        localStorage.setItem(
                          "adExpire",
                          Date.parse(new Date()) / 1e3 + 6e4
                        ),
                        (this.qrDialog = !1))
                      : this.$message.error(t.msg);
                  });
              } catch (e) {
                this.$message.error("检查出错");
              }
            },
          },
          watch: {},
        },
        n = a(6),
        o = Object(n.a)(
          r,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              [
                t(
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
                      "update:visible": function (t) {
                        e.qrDialog = t;
                      },
                    },
                    scopedSlots: e._u([
                      {
                        key: "footer",
                        fn: function () {
                          return [
                            t(
                              "div",
                              [
                                t(
                                  "el-button",
                                  {
                                    attrs: { type: "primary" },
                                    on: {
                                      click: function (t) {
                                        return (
                                          t.stopPropagation(),
                                          e.checkEnd.apply(null, arguments)
                                        );
                                      },
                                    },
                                  },
                                  [e._v("已经看完")]
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
                    t("div", [
                      t("h3", [e._v("请使用微信扫码")]),
                      e._v(" "),
                      t("div", { staticClass: "mt-1" }, [
                        e._v("扫码后请点击“打开广告”蓝色按钮"),
                      ]),
                      e._v(" "),
                      t("div", [
                        e._v(
                          "\n        感谢对开源软件的支持与理解，我们深知广告会降低用户的体验，我们也深知做开源哪怕是在全世界能坚持维护不断更都是一件不容易的事情，没有资金的投入导致项目停更的情况太多太多了，我们不希望同样的事情发生在uview-plus身上，现阶段观看广告将有助于uview-plus的可持续发展，特别是在鸿蒙、uni-app-x等方面的开发，我们也在积极探索更好的可持续发展模式，以投入更多的研发能力便于提供更加好用的框架。\n      "
                        ),
                      ]),
                      e._v(" "),
                      t(
                        "div",
                        {
                          directives: [
                            {
                              name: "loading",
                              rawName: "v-loading",
                              value: !e.qrUrl,
                              expression: "qrUrl ? false : true",
                            },
                          ],
                          staticClass: "pt-3",
                        },
                        [
                          e.qrUrl
                            ? t("img", { attrs: { src: e.qrUrl, alt: "mind" } })
                            : e._e(),
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
      t.default = o.exports;
    },
  },
]);
