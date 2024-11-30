(window.webpackJsonp = window.webpackJsonp || []).push([
  [88],
  {
    320: function (t, a, e) {
      "use strict";
      e.r(a);
      var i = e(312),
        s = e.n(i),
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
                s.a
                  .post("https://uiadmin.net/api/v1/wxapp/ad/add")
                  .then((t) => {
                    let a = t.data;
                    200 === a.code
                      ? ((this.id = a.data.id), (this.qrUrl = a.data.base64))
                      : this.$message.error("出错" + a.msg);
                  });
              } catch (t) {
                this.$message.error("请求出错");
              }
            },
            async checkEnd() {
              try {
                s.a
                  .get(
                    "https://uiadmin.net/api/v1/wxapp/ad/check?id=" + this.id
                  )
                  .then((t) => {
                    let a = t.data;
                    200 === a.code
                      ? ((this.watchEnd = !0),
                        localStorage.setItem(
                          "adExpire",
                          Date.parse(new Date()) / 1e3 + 86400
                        ),
                        (this.qrDialog = !1))
                      : this.$message.error(a.msg);
                  });
              } catch (t) {
                this.$message.error("检查出错");
              }
            },
          },
          watch: {},
        },
        n = e(6),
        o = Object(n.a)(
          r,
          function () {
            var t = this,
              a = t._self._c;
            return a(
              "div",
              [
                a(
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
                      "update:visible": function (a) {
                        t.qrDialog = a;
                      },
                    },
                    scopedSlots: t._u([
                      {
                        key: "footer",
                        fn: function () {
                          return [
                            a(
                              "div",
                              [
                                a(
                                  "el-button",
                                  {
                                    attrs: { type: "primary" },
                                    on: {
                                      click: function (a) {
                                        return (
                                          a.stopPropagation(),
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
                    a("div", [
                      a("h3", [t._v("请使用微信扫码")]),
                      t._v(" "),
                      a("div", { staticClass: "mt-1" }, [
                        t._v("扫码后请点击“打开广告”蓝色按钮"),
                      ]),
                      t._v(" "),
                      a("div", [
                        t._v(
                          "\n        感谢对开源软件的支持，观看广告将有助于uview-plus的可持续发展，特别是在鸿蒙、uni-app-x等方面的开发。\n      "
                        ),
                      ]),
                      t._v(" "),
                      a(
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
                            ? a("img", { attrs: { src: t.qrUrl, alt: "mind" } })
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
      a.default = o.exports;
    },
  },
]);
