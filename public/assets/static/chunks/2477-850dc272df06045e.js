"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2477],
  {
    24916: function (e, i, l) {
      var s = l(2265);
      i.Z = () => {
        let [e, i] = (0, s.useState)(!1),
          l = () => {
            window.scrollY > 200 ? i(!0) : i(!1);
          };
        return (
          (0, s.useEffect)(
            () => (
              window.addEventListener("scroll", l),
              () => {
                window.removeEventListener("scroll", l);
              }
            ),
            []
          ),
          { sticky: e }
        );
      };
    },
    59365: function (e, i, l) {
      l.r(i),
        l.d(i, {
          default: function () {
            return d;
          },
        });
      var s = l(57437),
        t = l(2265),
        n = l(60171);
      let a = () => {
        l.e(2862)
          .then(l.t.bind(l, 62862, 23))
          .then((e) => {
            new e.default.WOW({ live: !1 }).init();
          });
      };
      var r = l(24916),
        c = () => {
          let { sticky: e } = (0, r.Z)(),
            [i, l] = (0, t.useState)(!1);
          return (
            (0, t.useEffect)(() => {
              let e = () => {
                !i && window.pageYOffset > 400
                  ? l(!0)
                  : i && window.pageYOffset <= 400 && l(!1);
              };
              return (
                window.addEventListener("scroll", e),
                () => window.removeEventListener("scroll", e)
              );
            }, [
              () => {
                !i && window.pageYOffset > 400
                  ? l(!0)
                  : i && window.pageYOffset <= 400 && l(!1);
              },
            ]),
            (0, s.jsx)(s.Fragment, {
              children: (0, s.jsx)("div", {
                onClick: () => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                },
                className: "scroll-top ".concat(e ? "active" : ""),
                children: (0, s.jsx)("i", {
                  className: "bi bi-arrow-up-short",
                }),
              }),
            })
          );
        };
      l(32722);
      var d = (e) => {
        let { children: i } = e;
        return (
          (0, t.useEffect)(() => {
            let e = setTimeout(() => {
              a();
            }, 100);
            return () => clearTimeout(e);
          }, []),
          (0, s.jsxs)(s.Fragment, {
            children: [
              i,
              (0, s.jsx)(c, {}),
              (0, s.jsx)(n.Ix, { position: "top-center" }),
            ],
          })
        );
      };
    },
    21503: function (e, i, l) {
      l.d(i, {
        Z: function () {
          return h;
        },
      });
      var s = l(57437),
        t = [
          {
            id: 1,
            // has_dropdown: !0,
            title: "Home",
            link: "#",
            // sub_menus: [
            //   { link: "/", title: "Home 01" },
            //   { link: "/home-two", title: "Home 02" },
            //   { link: "/home-three", title: "Home 03" },
            //   { link: "/home-four", title: "Home 04" },
            //   { link: "/home-five", title: "Home 05" },
            //   { link: "/home-six", title: "Home 06" },
            //   { link: "/home-seven", title: "Home 07" },
            // ],
          },
          {
            id: 2,
            has_dropdown: !0,
            title: "Listing",
            // class_name: "mega-dropdown-sm",
            link: "#",
            menu_column: [
              {
                id: 1,
                // mega_title: "Listing Type",
                mega_menus: [
                  { link: "/listing_01", title: "Grid Sidebar-1" },
                  { link: "/listing_14", title: "Grid Fullwidth Map-1" },
                  { link: "/listing_details_01", title: "Listing Details-1" },

                  //   { link: "/listing_05", title: "Grid Sidebar-2" },
                  //   { link: "/listing_02", title: "List Sidebar-1" },
                  //   { link: "/listing_06", title: "List Sidebar-2" },
                  //   { link: "/listing_03", title: "Grid Top Filter-1" },
                  //   { link: "/listing_07", title: "Grid Top Filter-2" },
                  //   { link: "/listing_04", title: "List Top Filter-1" },
                  //   { link: "/listing_08", title: "List Top Filter-2" },
                  //   { link: "/listing_09", title: "Grid Banner Filter-1" },
                ],
              },
              //   {
              //     id: 2,
              //     mega_title: "Listing Type",
              //     mega_menus: [
              //       { link: "/listing_11", title: "Grid Banner Filter-2" },
              //       { link: "/listing_10", title: "List Banner Filter-1" },
              //       { link: "/listing_12", title: "List Banner Filter-2" },
              //       { link: "/listing_13", title: "Grid Fullwidth" },
              //       { link: "/listing_14", title: "Grid Fullwidth Map-1" },
              //       { link: "/listing_16", title: "Grid Fullwidth Map-2" },
              //       { link: "/listing_15", title: "List Fullwidth Map-1" },
              //       { link: "/listing_17", title: "List Fullwidth Map-2" },
              //     ],
              //   },
              //   {
              //     id: 3,
              //     mega_title: "Single Listing",
              //     mega_menus: [
              //       { link: "/listing_details_01", title: "Listing Details-1" },
              //       { link: "/listing_details_02", title: "Listing Details-2" },
              //       { link: "/listing_details_03", title: "Listing Details-3" },
              //       { link: "/listing_details_04", title: "Listing Details-4" },
              //       { link: "/listing_details_05", title: "Listing Details-5" },
              //       { link: "/listing_details_06", title: "Listing Details-6" },
              //     ],
              //   },
            ],
          },
          {
            id: 3,
            // has_dropdown: !0,
            title: "About us ",
            // class_name: "mega-dropdown-sm",
            link: "/about_us_01",
          },
          {
            id: 3,
            // has_dropdown: !0,
            title: "Service",
            // class_name: "mega-dropdown-sm",
            link: "/service_01",
          },
          {
            id: 3,
            // has_dropdown: !0,
            title: "Contact Us",
            // class_name: "mega-dropdown-sm",
            link: "/contact",
          },

          //   {
          //     id: 3,
          //     has_dropdown: !0,
          //     title: "Pages",
          //     class_name: "mega-dropdown-sm",
          //     link: "#",
          //     menu_column: [
          //       {
          //         id: 1,
          //         mega_title: "Essential",
          //         mega_menus: [
          //           { link: "/about_us_01", title: "About us -1" },
          //           { link: "/about_us_02", title: "About us -2" },
          //           { link: "/agency", title: "Agency" },
          //           { link: "/agency_details", title: "Agency Details" },
          //           { link: "/agent", title: "Agent" },
          //           { link: "/agent_details", title: "Agent Details" },
          //         ],
          //       },
          //       {
          //         id: 2,
          //         mega_title: "Features",
          //         mega_menus: [
          //           { link: "/project_01", title: "Project -1" },
          //           { link: "/project_02", title: "Project -2" },
          //           { link: "/project_03", title: "Project -3" },
          //           { link: "/project_04", title: "Project -4" },
          //           { link: "/project_details_01", title: "Project Details" },
          //           { link: "/service_01", title: "Service -1" },
          //           { link: "/service_02", title: "Service -2" },
          //           { link: "/service_details", title: "Service Details" },
          //         ],
          //       },
          //       {
          //         id: 3,
          //         mega_title: "Others",
          //         mega_menus: [
          //           { link: "/compare", title: "Property Compare" },
          //           { link: "/pricing_01", title: "Pricing -1" },
          //           { link: "/pricing_02", title: "Pricing -2" },
          //           { link: "/contact", title: "Contact Us" },
          //           { link: "/faq", title: "FAQ's" },
          //           { link: "/not-found", title: "404-Error" },
          //         ],
          //       },
          //     ],
          //   },
          //   {
          //     id: 4,
          //     has_dropdown: !0,
          //     title: "Blog",
          //     link: "#",
          //     sub_menus: [
          //       { link: "/blog_01", title: "Blog Grid" },
          //       { link: "/blog_02", title: "Blog List" },
          //       { link: "/blog_03", title: "Blog 2 column" },
          //       { link: "/blog_details", title: "Blog Details" },
          //     ],
          //   },
        ],
        n = l(61396),
        a = l.n(n),
        r = l(24033),
        c = l(16691),
        d = l.n(c),
        o = l(2265),
        m = l(87989),
        h = () => {
          let e = (0, r.usePathname)();
          (0, r.usePathname)();
          let [i, l] = (0, o.useState)(""),
            n = (e) => {
              i === e ? l("") : l(e);
            };
          return (0, s.jsxs)("ul", {
            className: "navbar-nav align-items-lg-center",
            children: [
              (0, s.jsx)("li", {
                className: "d-block d-lg-none",
                children: (0, s.jsx)("div", {
                  className: "logo",
                  children: (0, s.jsx)(a(), {
                    href: "/",
                    className: "d-block",
                    children: (0, s.jsx)(d(), { src: m.default, alt: "" }),
                  }),
                }),
              }),
              //   (0, s.jsx)("li", {
              //     className: "nav-item dashboard-menu",
              //     children: (0, s.jsx)(a(), {
              //       className: "nav-link",
              //       href: "/dashboard/dashboard-index",
              //       target: "_blank",
              //       children: "Dashboard",
              //     }),
              //   }),
              t.map((l) =>
                (0, s.jsxs)(
                  "li",
                  {
                    className: "nav-item dropdown ".concat(l.class_name),
                    children: [
                      (0, s.jsx)(a(), {
                        href: l.link,
                        className: "nav-link " //dropdown-toggle
                          .concat(
                            e === l.link ? "active" : "",
                            "\n                     "
                          )
                          .concat(i === l.title ? "show" : ""),
                        onClick: () => n(l.title),
                        children: l.title,
                      }),
                      l.has_dropdown &&
                        (0, s.jsx)(s.Fragment, {
                          children: (0, s.jsxs)("ul", {
                            className: "dropdown-menu ".concat(
                              i === l.title ? "show" : ""
                            ),
                            children: [
                              l.sub_menus &&
                                l.sub_menus.map((i, l) =>
                                  (0, s.jsx)(
                                    "li",
                                    {
                                      children: (0, s.jsx)(a(), {
                                        href: i.link,
                                        className: "dropdown-item ".concat(
                                          e === i.link ? "active" : ""
                                        ),
                                        children: (0, s.jsx)("span", {
                                          children: i.title,
                                        }),
                                      }),
                                    },
                                    l
                                  )
                                ),
                              l.menu_column &&
                                (0, s.jsx)("li", {
                                  className: "row gx-1",
                                  children: l.menu_column.map((i) =>
                                    (0, s.jsx)(
                                      "div",
                                      {
                                        className: "col-lg-4",
                                        children: (0, s.jsxs)("div", {
                                          className: "menu-column",
                                          children: [
                                            (0, s.jsx)("h6", {
                                              className: "mega-menu-title",
                                              children: i.mega_title,
                                            }),
                                            (0, s.jsx)("ul", {
                                              className:
                                                "style-none mega-dropdown-list",
                                              children: i.mega_menus.map(
                                                (i, l) =>
                                                  (0, s.jsx)(
                                                    "li",
                                                    {
                                                      children: (0, s.jsx)(
                                                        a(),
                                                        {
                                                          href: i.link,
                                                          className:
                                                            "dropdown-item ".concat(
                                                              e === i.link
                                                                ? "active"
                                                                : ""
                                                            ),
                                                          children: (0, s.jsx)(
                                                            "span",
                                                            {
                                                              children: i.title,
                                                            }
                                                          ),
                                                        }
                                                      ),
                                                    },
                                                    l
                                                  )
                                              ),
                                            }),
                                          ],
                                        }),
                                      },
                                      i.id
                                    )
                                  ),
                                }),
                            ],
                          }),
                        }),
                    ],
                  },
                  l.id
                )
              ),
            ],
          });
        };
    },
    7599: function (e, i, l) {
      l.d(i, {
        Z: function () {
          return A;
        },
      });
      var s = l(57437),
        t = l(16691),
        n = l.n(t),
        a = l(61396),
        r = l.n(a),
        c = l(2265),
        d = l(60171),
        o = l(35691),
        m = l(61865),
        h = l(89701),
        u = {
          src: "/_next/static/media/icon_68.f3a1521f.svg",
          height: 16,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        g = () => {
          var e, i;
          let l = o
              .Ry({
                email: o.Z_().required().email().label("Email"),
                password: o.Z_().required().label("Password"),
              })
              .required(),
            {
              register: t,
              handleSubmit: a,
              reset: g,
              formState: { errors: p },
            } = (0, m.cI)({ resolver: (0, h.X)(l) }),
            [x, j] = (0, c.useState)(!1);
          return (0, s.jsx)("form", {
            onSubmit: a((e) => {
              (0, d.Am)("Login successfully", { position: "top-center" }), g();
            }),
            children: (0, s.jsxs)("div", {
              className: "row",
              children: [
                (0, s.jsx)("div", {
                  className: "col-12",
                  children: (0, s.jsxs)("div", {
                    className: "input-group-meta position-relative mb-25",
                    children: [
                      (0, s.jsx)("label", { children: "Email*" }),
                      (0, s.jsx)("input", {
                        type: "email",
                        ...t("email"),
                        placeholder: "Youremail@gmail.com",
                      }),
                      (0, s.jsx)("p", {
                        className: "form_error",
                        children:
                          null === (e = p.email) || void 0 === e
                            ? void 0
                            : e.message,
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)("div", {
                  className: "col-12",
                  children: (0, s.jsxs)("div", {
                    className: "input-group-meta position-relative mb-20",
                    children: [
                      (0, s.jsx)("label", { children: "Password*" }),
                      (0, s.jsx)("input", {
                        type: x ? "text" : "password",
                        ...t("password"),
                        placeholder: "Enter Password",
                        className: "pass_log_id",
                      }),
                      (0, s.jsx)("span", {
                        className: "placeholder_icon",
                        children: (0, s.jsx)("span", {
                          className: "passVicon ".concat(x ? "eye-slash" : ""),
                          children: (0, s.jsx)(n(), {
                            onClick: () => {
                              j(!x);
                            },
                            src: u,
                            alt: "",
                          }),
                        }),
                      }),
                      (0, s.jsx)("p", {
                        className: "form_error",
                        children:
                          null === (i = p.password) || void 0 === i
                            ? void 0
                            : i.message,
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)("div", {
                  className: "col-12",
                  children: (0, s.jsxs)("div", {
                    className:
                      "agreement-checkbox d-flex justify-content-between align-items-center",
                    children: [
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("input", {
                            type: "checkbox",
                            id: "remember",
                          }),
                          (0, s.jsx)("label", {
                            htmlFor: "remember",
                            children: "Keep me logged in",
                          }),
                        ],
                      }),
                      (0, s.jsx)(r(), {
                        href: "#",
                        children: "Forget Password?",
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)("div", {
                  className: "col-12",
                  children: (0, s.jsx)("button", {
                    type: "submit",
                    className: "btn-two w-100 text-uppercase d-block mt-20",
                    children: "Login",
                  }),
                }),
              ],
            }),
          });
        },
        p = {
          src: "/_next/static/media/google.d4e9d6fc.png",
          height: 25,
          width: 24,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEWhd07qQjTpPjdViuD1Khg/h+g0qVMwplRChPEzp0jpQzbvuQo/itBChO/OSEjoQTVFivq1tRz/vAPvRjrrPzf5nxBEhPT4vwNGjv88sXw5t1pVvFD/Sjr/ZDAlb3VPAAAAGHRSTlMBt2MMDGTykMBC3emFMipldlCk8KpbpKn6fE33AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQElEQVR4nBXISRKAIAwAwQGEBHAHFbf/f9Oyjw1YY6YOqE9KZYTttfDHkXGq6lkzbtc2s9wCvg0gVwhnDxBFInxM8wIsthSuiwAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        x = {
          src: "/_next/static/media/facebook.41e4c86e.png",
          height: 23,
          width: 22,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEUZefQYePYNcfEZefgKbvKaw/nF3PxMaXEgeu4Xde4cevQBafAYePAGa/AXd/EkgPd4rvb///+51fu31PoZf/8ZePO61/2Cuv3///8Fdf+hEiDhAAAAF3RSTlPztOyj/f79AB0y4J01vcL++P3Y2f///rDXOVgAAAAJcEhZcwAACxMAAAsTAQCanBgAAABASURBVHicBcEHAoAgDACxQ0YZblvG/z9qguznth1FKOg1BgWnIT63OjBL3QwIcc4YwCspoZ5cV++rZiS3721Zfl/JAsHlLE+jAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        j = () => {
          var e, i, l;
          let t = o
              .Ry({
                name: o.Z_().required().label("Name"),
                email: o.Z_().required().email().label("Email"),
                password: o.Z_().required().label("Password"),
              })
              .required(),
            {
              register: a,
              handleSubmit: g,
              reset: p,
              formState: { errors: x },
            } = (0, m.cI)({ resolver: (0, h.X)(t) }),
            [j, v] = (0, c.useState)(!1);
          return (0, s.jsx)("form", {
            onSubmit: g((e) => {
              (0, d.Am)("Registration successfully", {
                position: "top-center",
              }),
                p();
            }),
            children: (0, s.jsxs)("div", {
              className: "row",
              children: [
                (0, s.jsx)("div", {
                  className: "col-12",
                  children: (0, s.jsxs)("div", {
                    className: "input-group-meta position-relative mb-25",
                    children: [
                      (0, s.jsx)("label", { children: "Name*" }),
                      (0, s.jsx)("input", {
                        type: "text",
                        ...a("name"),
                        placeholder: "Zubayer Hasan",
                      }),
                      (0, s.jsx)("p", {
                        className: "form_error",
                        children:
                          null === (e = x.name) || void 0 === e
                            ? void 0
                            : e.message,
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)("div", {
                  className: "col-12",
                  children: (0, s.jsxs)("div", {
                    className: "input-group-meta position-relative mb-25",
                    children: [
                      (0, s.jsx)("label", { children: "Email*" }),
                      (0, s.jsx)("input", {
                        type: "email",
                        ...a("email"),
                        placeholder: "Youremail@gmail.com",
                      }),
                      (0, s.jsx)("p", {
                        className: "form_error",
                        children:
                          null === (i = x.email) || void 0 === i
                            ? void 0
                            : i.message,
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)("div", {
                  className: "col-12",
                  children: (0, s.jsxs)("div", {
                    className: "input-group-meta position-relative mb-20",
                    children: [
                      (0, s.jsx)("label", { children: "Password*" }),
                      (0, s.jsx)("input", {
                        type: j ? "text" : "password",
                        ...a("password"),
                        placeholder: "Enter Password",
                        className: "pass_log_id",
                      }),
                      (0, s.jsx)("span", {
                        className: "placeholder_icon",
                        children: (0, s.jsx)("span", {
                          className: "passVicon ".concat(j ? "eye-slash" : ""),
                          children: (0, s.jsx)(n(), {
                            onClick: () => {
                              v(!j);
                            },
                            src: u,
                            alt: "",
                          }),
                        }),
                      }),
                      (0, s.jsx)("p", {
                        className: "form_error",
                        children:
                          null === (l = x.password) || void 0 === l
                            ? void 0
                            : l.message,
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)("div", {
                  className: "col-12",
                  children: (0, s.jsx)("div", {
                    className:
                      "agreement-checkbox d-flex justify-content-between align-items-center",
                    children: (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsx)("input", {
                          type: "checkbox",
                          id: "remember2",
                        }),
                        (0, s.jsxs)("label", {
                          htmlFor: "remember2",
                          children: [
                            'By hitting the "Register" button, you agree to the ',
                            (0, s.jsx)(r(), {
                              href: "#",
                              children: "Terms conditions",
                            }),
                            " & ",
                            (0, s.jsx)(r(), {
                              href: "#",
                              children: "Privacy Policy",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                (0, s.jsx)("div", {
                  className: "col-12",
                  children: (0, s.jsx)("button", {
                    type: "submit",
                    className: "btn-two w-100 text-uppercase d-block mt-20",
                    children: "SIGN UP",
                  }),
                }),
              ],
            }),
          });
        };
      let v = ["Login", "Signup"];
      var A = (e) => {
        let { loginModal: i, setLoginModal: l } = e,
          [t, a] = (0, c.useState)(0),
          d = (e) => {
            a(e);
          };
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)("div", {
            className: "modal fade",
            id: "loginModal",
            tabIndex: -1,
            "aria-hidden": "true",
            children: (0, s.jsx)("div", {
              className: "modal-dialog modal-fullscreen modal-dialog-centered",
              children: (0, s.jsx)("div", {
                className: "container",
                children: (0, s.jsxs)("div", {
                  className: "user-data-form modal-content",
                  children: [
                    (0, s.jsx)("button", {
                      type: "button",
                      className: "btn-close",
                      "data-bs-dismiss": "modal",
                      "aria-label": "Close",
                    }),
                    (0, s.jsxs)("div", {
                      className: "form-wrapper m-auto",
                      children: [
                        (0, s.jsx)("ul", {
                          className: "nav nav-tabs w-100",
                          children: v.map((e, i) =>
                            (0, s.jsx)(
                              "li",
                              {
                                onClick: () => d(i),
                                className: "nav-item",
                                children: (0, s.jsx)("button", {
                                  className: "nav-link ".concat(
                                    t === i ? "active" : ""
                                  ),
                                  children: e,
                                }),
                              },
                              i
                            )
                          ),
                        }),
                        (0, s.jsxs)("div", {
                          className: "tab-content mt-30",
                          children: [
                            (0, s.jsxs)("div", {
                              className: "tab-pane fade ".concat(
                                0 === t ? "show active" : ""
                              ),
                              children: [
                                (0, s.jsxs)("div", {
                                  className: "text-center mb-20",
                                  children: [
                                    (0, s.jsx)("h2", {
                                      children: "Welcome Back!",
                                    }),
                                    (0, s.jsxs)("p", {
                                      className: "fs-20 color-dark",
                                      children: [
                                        "Still don't have an account? ",
                                        (0, s.jsx)(r(), {
                                          href: "#",
                                          children: "Sign up",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, s.jsx)(g, {}),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "tab-pane fade ".concat(
                                1 === t ? "show active" : ""
                              ),
                              children: [
                                (0, s.jsxs)("div", {
                                  className: "text-center mb-20",
                                  children: [
                                    (0, s.jsx)("h2", { children: "Register" }),
                                    (0, s.jsxs)("p", {
                                      className: "fs-20 color-dark",
                                      children: [
                                        "Already have an account? ",
                                        (0, s.jsx)(r(), {
                                          href: "#",
                                          children: "Login",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, s.jsx)(j, {}),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "d-flex align-items-center mt-30 mb-10",
                          children: [
                            (0, s.jsx)("div", { className: "line" }),
                            (0, s.jsx)("span", {
                              className: "pe-3 ps-3 fs-6",
                              children: "OR",
                            }),
                            (0, s.jsx)("div", { className: "line" }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "row",
                          children: [
                            (0, s.jsx)("div", {
                              className: "col-sm-6",
                              children: (0, s.jsxs)(r(), {
                                href: "#",
                                className:
                                  "social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10",
                                children: [
                                  (0, s.jsx)(n(), { src: p, alt: "" }),
                                  (0, s.jsx)("span", {
                                    className: "ps-3",
                                    children: "Signup with Google",
                                  }),
                                ],
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className: "col-sm-6",
                              children: (0, s.jsxs)(r(), {
                                href: "#",
                                className:
                                  "social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10",
                                children: [
                                  (0, s.jsx)(n(), { src: x, alt: "" }),
                                  (0, s.jsx)("span", {
                                    className: "ps-3",
                                    children: "Signup with Facebook",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      };
    },
    87989: function (e, i, l) {
      l.r(i),
        (i.default = {
          src: "/_next/static/media/logo_01.03026861.svg",
          height: 50,
          width: 130,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
  },
]);
