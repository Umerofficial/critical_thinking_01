"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [581],
  {
    47496: function (A, e, t) {
      t.r(e);
      var i = t(57437),
        a = t(2265),
        s = t(51729),
        l = t(4327);
      e.default = (A) => {
        let { number: e } = A,
          [t, n] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            localStorage.getItem("hasCountedBefore") ||
              (n(!0), localStorage.setItem("hasCountedBefore", "true"));
          }, []),
          (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(s.ZP, {
              start: 0,
              end: t ? e : 0,
              duration: 2,
              decimals: e % 1 != 0 ? 1 : 0,
              children: (A) => {
                let { countUpRef: e } = A;
                return (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("span", { ref: e }),
                    (0, i.jsx)(l.df, {
                      as: "span",
                      onChange: (A) => {
                        A && !t && n(!0);
                      },
                    }),
                  ],
                });
              },
            }),
          })
        );
      };
    },
    45386: function (A, e, t) {
      t.r(e);
      var i = t(57437),
        a = t(16691),
        s = t.n(a),
        l = t(61396),
        n = t.n(l),
        r = t(88235);
      e.default = (A) => {
        let { style: e } = A;
        return (0, i.jsx)("div", {
          className:
            "fancy-banner-two position-relative z-1 pt-90 lg-pt-50 pb-90 lg-pb-50",
          children: (0, i.jsx)("div", {
            className: "container",
            children: (0, i.jsxs)("div", {
              className: "row align-items-center",
              children: [
                (0, i.jsx)("div", {
                  className: "col-lg-6",
                  children: (0, i.jsx)("div", {
                    className:
                      "title-one text-center text-lg-start md-mb-40 pe-xl-5",
                    children: (0, i.jsxs)("h3", {
                      className: "text-white m0",
                      children: [
                        "Start your ",
                        (0, i.jsxs)("span", {
                          children: [
                            "Journey",
                            e
                              ? ""
                              : (0, i.jsx)(s(), {
                                  src: r.default,
                                  alt: "",
                                  className: "lazy-img",
                                }),
                          ],
                        }),
                        " As a Retailer.",
                      ],
                    }),
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "col-lg-6",
                  children: (0, i.jsxs)("div", {
                    className: "form-wrapper me-auto ms-auto me-lg-0",
                    children: [
                      (0, i.jsxs)("form", {
                        onSubmit: (A) => A.preventDefault(),
                        children: [
                          (0, i.jsx)("input", {
                            type: "email",
                            placeholder: "Email address",
                            className: e ? "rounded-0" : "",
                          }),
                          (0, i.jsx)("button", {
                            className: e ? "rounded-0" : "",
                            children: "Get Started",
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "fs-16 mt-10 text-white",
                        children: [
                          "Already a Agent? ",
                          (0, i.jsx)(n(), {
                            href: "#",
                            "data-bs-toggle": "modal",
                            "data-bs-target": "#loginModal",
                            children: "Sign in.",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      };
    },
    83069: function (A, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return g;
          },
        });
      var i = t(57437),
        a = t(16691),
        s = t.n(a),
        l = t(74741),
        n = {
          src: "/_next/static/media/rating_01.8b042ad5.png",
          height: 77,
          width: 151,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAIVBMVEUbxo4YGxYYGhcWEBBMaXE1zpwgvosmyZQqypd///820J6WTXe7AAAACnRSTlNjKR80AOxz5e8CkvqIzQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACZJREFUeJxjYGFiZGRkZuJkADGYmZlYGNgYwICNgYudlYODlZ0LAAZSAHR+Yk/mAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 4,
        },
        r = t(33807),
        c = t(93240),
        d = t(94421);
      let h = [
        {
          id: 1,
          img: r.default,
          title: "Jonathan Harry",
          country: "Milan, Itlay",
          desc: "Efficient, knowledgeable, & made our home search a smooth experience. Highly recommended agency!",
          rating_count: 4.7,
          total_rating: 13,
        },
        {
          id: 2,
          img: c.Z,
          title: "Sofia Rena",
          country: "New York, USA",
          desc: "Efficient, knowledgeable, & made our home search a smooth experience. Highly recommended agency!",
          rating_count: 4.5,
          total_rating: 10,
        },
        {
          id: 3,
          img: d.default,
          title: "Rashed Kabir",
          country: "Dhaka, BD",
          desc: "Efficient, knowledgeable, & made our home search a smooth experience. Highly recommended agency!",
          rating_count: 4.8,
          total_rating: 11,
        },
      ];
      var g = () =>
        (0, i.jsx)("div", {
          className:
            "feedback-section-one position-relative z-1 pt-70 md-pt-50 pb-80 md-pb-60",
          children: (0, i.jsx)("div", {
            className: "main-content m-auto",
            children: (0, i.jsx)(l.Z, {
              dots: !0,
              arrows: !1,
              centerPadding: "0px",
              slidesToShow: 1,
              slidesToScroll: 1,
              fade: !0,
              autoplay: !0,
              autoplaySpeed: 3e5,
              className: "feedback-slider-one position-static",
              children: h.map((A) =>
                (0, i.jsx)(
                  "div",
                  {
                    className: "item",
                    children: (0, i.jsx)("div", {
                      className: "feedback-block-one text-center",
                      children: (0, i.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                          (0, i.jsxs)("div", {
                            className: "col-md-3",
                            children: [
                              (0, i.jsx)(s(), {
                                src: A.img,
                                alt: "",
                                className: "rounded-circle m-auto avatar",
                              }),
                              (0, i.jsx)("h6", {
                                className: "fs-20 m0 pt-10",
                                children: A.title,
                              }),
                              (0, i.jsx)("span", {
                                className: "fs-16",
                                children: A.country,
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: "col-md-6",
                            children: (0, i.jsx)("blockquote", {
                              children: A.desc,
                            }),
                          }),
                          (0, i.jsxs)("div", {
                            className: "col-md-3",
                            children: [
                              (0, i.jsx)(s(), {
                                src: n,
                                alt: "",
                                className: "lazy-img m-auto",
                              }),
                              (0, i.jsxs)("p", {
                                className: "text-center m0 pt-10",
                                children: [
                                  (0, i.jsxs)("span", {
                                    className: "fw-500 color-dark",
                                    children: [A.total_rating, "k rating"],
                                  }),
                                  " (",
                                  A.rating_count,
                                  " Rating)",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  },
                  A.id
                )
              ),
            }),
          }),
        });
    },
    69623: function (A, e, t) {
      t.r(e);
      var i = t(57437),
        a = t(21503),
        s = t(61396),
        l = t.n(s),
        n = t(16691),
        r = t.n(n),
        c = t(24916),
        d = t(7599),
        h = t(87989);
      e.default = (A) => {
        let { style: e } = A,
          { sticky: t } = (0, c.Z)();
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)("header", {
              className:
                "theme-main-menu menu-overlay menu-style-one sticky-menu ".concat(
                  t ? "fixed" : ""
                ),
              children: [
                !e &&
                  // (0, i.jsx)("div", {
                  //   className: "alert-wrapper text-center",
                  //   children: (0, i.jsxs)("p", {
                  //     className: "fs-16 m0 text-white",
                  //     children: [
                  //       "The ",
                  //       (0, i.jsx)(l(), {
                  //         href: "/listing_01",
                  //         className: "fw-500",
                  //         children: "flash sale",
                  //       }),
                  //       " go on. The offer will end in — ",
                  //       (0, i.jsx)("span", { children: "This Sunday" }),
                  //     ],
                  //   }),
                  // }),
                  (0, i.jsx)("div", {
                    className: "inner-content gap-one",
                    children: (0, i.jsx)("div", {
                      className: "top-header position-relative",
                      children: (0, i.jsxs)("div", {
                        className:
                          "d-flex align-items-center justify-content-between",
                        children: [
                          (0, i.jsx)("div", {
                            className: "logo order-lg-0",
                            children: (0, i.jsx)(l(), {
                              href: "/",
                              className: "d-flex align-items-center",
                              children: (0, i.jsx)(r(), {
                                src: h.default,
                                alt: "",
                              }),
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3",
                            children: (0, i.jsxs)("ul", {
                              className: "d-flex align-items-center style-none",
                              children: [
                                (0, i.jsx)("li", {
                                  children: (0, i.jsxs)(l(), {
                                    href: "#",
                                    "data-bs-toggle": "modal",
                                    "data-bs-target": "#loginModal",
                                    className: "btn-one",
                                    children: [
                                      (0, i.jsx)("i", {
                                        className: "fa-regular fa-lock",
                                      }),
                                      " ",
                                      (0, i.jsx)("span", { children: "Login" }),
                                    ],
                                  }),
                                }),
                                (0, i.jsx)("li", {
                                  className: "d-none d-md-inline-block ms-3",
                                  children: (0, i.jsxs)(l(), {
                                    href: "/dashboard/add-property",
                                    className: "btn-two",
                                    target: "_blank",
                                    children: [
                                      (0, i.jsx)("span", {
                                        children: "Add Listing",
                                      }),
                                      " ",
                                      (0, i.jsx)("i", {
                                        className: "fa-thin fa-arrow-up-right",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, i.jsxs)("nav", {
                            className: "navbar navbar-expand-lg p0 order-lg-2",
                            children: [
                              (0, i.jsx)("button", {
                                className: "navbar-toggler d-block d-lg-none",
                                type: "button",
                                "data-bs-toggle": "collapse",
                                "data-bs-target": "#navbarNav",
                                "aria-controls": "navbarNav",
                                "aria-expanded": "false",
                                "aria-label": "Toggle navigation",
                                children: (0, i.jsx)("span", {}),
                              }),
                              (0, i.jsx)("div", {
                                className: "collapse navbar-collapse",
                                id: "navbarNav",
                                children: (0, i.jsx)(a.Z, {}),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
              ],
            }),
            (0, i.jsx)(d.Z, {}),
          ],
        });
      };
    },
    64645: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/icon_01.76e69ba4.svg",
          height: 220,
          width: 220,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    3539: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/icon_02.e0efe402.svg",
          height: 220,
          width: 220,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    18148: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/icon_03.a4b83c0a.svg",
          height: 220,
          width: 220,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    26070: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/icon_07.0d2e75df.svg",
          height: 220,
          width: 220,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    46420: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/icon_08.c4dbbad5.svg",
          height: 220,
          width: 220,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    71894: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/icon_09.063f8e9d.svg",
          height: 220,
          width: 220,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    97974: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/icon_11.18598708.svg",
          height: 25,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    19846: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/icon_12.7f36f205.svg",
          height: 19,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    89918: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/icon_13.61605eb2.svg",
          height: 14,
          width: 19,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    31974: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/icon_23.c339ff1d.svg",
          height: 115,
          width: 115,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    45879: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/icon_24.19cd7956.svg",
          height: 115,
          width: 115,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    85708: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/icon_25.940baefc.svg",
          height: 115,
          width: 115,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    23721: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/icon_26.e207be38.svg",
          height: 25,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    18100: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/icon_27.3c688b15.svg",
          height: 18,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    61886: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/icon_28.93dda3b4.svg",
          height: 14,
          width: 19,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    85202: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/icon_35.08b778da.svg",
          height: 25,
          width: 27,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    24607: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/icon_36.603c06e9.svg",
          height: 27,
          width: 29,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    9934: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/icon_37.f9738395.svg",
          height: 27,
          width: 28,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    76413: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/icon_40.58924ca0.svg",
          height: 106,
          width: 114,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    32585: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/icon_41.c775f773.svg",
          height: 96,
          width: 100,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    62074: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/icon_42.137e7f22.svg",
          height: 102,
          width: 102,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    93240: function (A, e) {
      e.Z = {
        src: "/_next/static/media/img_02.f395a74d.jpg",
        height: 60,
        width: 60,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABjBv/AP/EABYQAQEBAAAAAAAAAAAAAAAAAAIDAf/aAAgBAQABBQJOU8//xAAWEQEBAQAAAAAAAAAAAAAAAAABAgD/2gAIAQMBAT8BuQd//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAGRAAAQUAAAAAAAAAAAAAAAAAAQACEiGh/9oACAEBAAY/AhTSZ4v/xAAXEAEBAQEAAAAAAAAAAAAAAAARAQDh/9oACAEBAAE/ISuCBZxv/9oADAMBAAIAAwAAABAD/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQBR/9oACAEDAQE/EBQZf//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/EI//xAAYEAEAAwEAAAAAAAAAAAAAAAABABEhcf/aAAgBAQABPxBQZqbtbSDosOk//9k=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    94421: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/img_03.ce67483e.jpg",
          height: 60,
          width: 60,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAAGcM//EABUQAQEAAAAAAAAAAAAAAAAAAAEy/9oACAEBAAEFAiv/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEv/aAAgBAwEBPwGn/8QAFREBAQAAAAAAAAAAAAAAAAAAABL/2gAIAQIBAT8Bl//EABkQAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAgBAQAGPwJ6245OZP/EABcQAQADAAAAAAAAAAAAAAAAAAEAEYH/2gAIAQEAAT8hZY6hP//aAAwDAQACAAMAAAAQB//EABYRAQEBAAAAAAAAAAAAAAAAAAEAIf/aAAgBAwEBPxATjf/EABYRAQEBAAAAAAAAAAAAAAAAAAEAMf/aAAgBAgEBPxBBl//EABkQAQACAwAAAAAAAAAAAAAAAAERIQAxkf/aAAgBAQABPxAwiFChNhqJvuf/2Q==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    76378: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/img_19.f1a428d1.jpg",
          height: 571,
          width: 457,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABuhP/xAAWEAEBAQAAAAAAAAAAAAAAAAABAxP/2gAIAQEAAQUCKO3/xAAWEQADAAAAAAAAAAAAAAAAAAAAARL/2gAIAQMBAT8Bpn//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAWEAADAAAAAAAAAAAAAAAAAAAAEkH/2gAIAQEABj8CWH//xAAZEAEAAgMAAAAAAAAAAAAAAAABABEhQVH/2gAIAQEAAT8hUnWDrjP/2gAMAwEAAgADAAAAEPv/xAAWEQADAAAAAAAAAAAAAAAAAAAAEUH/2gAIAQMBAT8QRT//xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAgEBPxABv//EABkQAQACAwAAAAAAAAAAAAAAAAEAESExYf/aAAgBAQABPxAlanAysDd9n//Z",
          blurWidth: 6,
          blurHeight: 8,
        });
    },
    47932: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/img_20.c2ca60e5.jpg",
          height: 571,
          width: 457,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAGgA//EABYQAQEBAAAAAAAAAAAAAAAAAAIBE//aAAgBAQABBQLU1f/EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPwGI/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAFhABAQEAAAAAAAAAAAAAAAAAAQBR/9oACAEBAAY/Aky//8QAFhAAAwAAAAAAAAAAAAAAAAAAAAFh/9oACAEBAAE/IVBx/9oADAMBAAIAAwAAABD3/8QAFhEAAwAAAAAAAAAAAAAAAAAAABFB/9oACAEDAQE/EHQ//8QAFhEAAwAAAAAAAAAAAAAAAAAAAAER/9oACAECAQE/EKz/xAAXEAEBAQEAAAAAAAAAAAAAAAABEQBR/9oACAEBAAE/EIcgEPbv/9k=",
          blurWidth: 6,
          blurHeight: 8,
        });
    },
    93625: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/img_21.c06a8bb9.jpg",
          height: 571,
          width: 457,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAABthH/xAAXEAADAQAAAAAAAAAAAAAAAAAAAQID/9oACAEBAAEFAp0Z/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwF//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAFhAAAwAAAAAAAAAAAAAAAAAAAAEy/9oACAEBAAY/ApR//8QAGRAAAgMBAAAAAAAAAAAAAAAAAREAITFR/9oACAEBAAE/IQCkbb4Z/9oADAMBAAIAAwAAABAL/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEh/9oACAEDAQE/EHD/xAAWEQADAAAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8QrP/EABkQAAEFAAAAAAAAAAAAAAAAABEAASExYf/aAAgBAQABPxABsDtgpf/Z",
          blurWidth: 6,
          blurHeight: 8,
        });
    },
    39991: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/title_shape_01.5b2611cd.svg",
          height: 24,
          width: 365,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    80734: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/title_shape_05.0fcc1421.svg",
          height: 18,
          width: 231,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    88235: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/title_shape_06.81b8cc1f.svg",
          height: 18,
          width: 269,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    51682: function (A, e, t) {
      t.r(e),
        (e.default = {
          src: "/_next/static/media/title_shape_07.a50f5241.svg",
          height: 19,
          width: 405,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
  },
]);
