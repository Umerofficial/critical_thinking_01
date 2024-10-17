(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185],
  {
    53342: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 76872));
    },
    76872: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var r = n(57437);
      n(5449);
      var s = n(93046),
        a = n(39730),
        o = n(89241);
      let i = (0, a.xC)({
        reducer: { properties: o.ZP },
        middleware: (e) => e({ serializableCheck: !1 }),
      });
      function c(e) {
        let { children: t } = e;
        return (0, r.jsxs)("html", {
          lang: "en",
          suppressHydrationWarning: !1,
          children: [
            (0, r.jsxs)("head", {
              children: [
                (0, r.jsx)("meta", {
                  name: "keywords",
                  content: "Real estate, Property sale, Property buy",
                }),
                (0, r.jsx)("meta", {
                  name: "description",
                  content:
                    "Homy is a beautiful website template designed for Real Estate Agency.",
                }),
                (0, r.jsx)("meta", {
                  property: "og:site_name",
                  content: "Homy",
                }),
                (0, r.jsx)("meta", {
                  property: "og:url",
                  content: "https://creativegigstf.com",
                }),
                (0, r.jsx)("meta", { property: "og:type", content: "website" }),
                (0, r.jsx)("meta", {
                  property: "og:title",
                  content: "Homy - Real Estate React Next js Template",
                }),
                (0, r.jsx)("meta", {
                  name: "og:image",
                  content: "images/assets/ogg.png",
                }),
                (0, r.jsx)("meta", {
                  httpEquiv: "X-UA-Compatible",
                  content: "IE=edge",
                }),
                (0, r.jsx)("meta", {
                  name: "viewport",
                  content: "width=device-width, initial-scale=1.0",
                }),
                (0, r.jsx)("meta", { name: "theme-color", content: "#0D1A1C" }),
                (0, r.jsx)("meta", {
                  name: "msapplication-navbutton-color",
                  content: "#0D1A1C",
                }),
                (0, r.jsx)("meta", {
                  name: "apple-mobile-web-app-status-bar-style",
                  content: "#0D1A1C",
                }),
                (0, r.jsx)("link", {
                  rel: "icon",
                  href: "/favicon.png",
                  sizes: "any",
                }),
                (0, r.jsx)("link", {
                  rel: "stylesheet",
                  href: "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap",
                }),
              ],
            }),
            (0, r.jsx)("body", {
              suppressHydrationWarning: !0,
              children: (0, r.jsx)("div", {
                className: "main-page-wrapper",
                children: (0, r.jsx)(s.zt, { store: i, children: t }),
              }),
            }),
          ],
        });
      }
    },
    5449: function () {},
    30622: function (e, t, n) {
      "use strict";
      var r = n(2265),
        s = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        i =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = { key: !0, ref: !0, __self: !0, __source: !0 };
      function l(e, t, n) {
        var r,
          a = {},
          l = null,
          p = null;
        for (r in (void 0 !== n && (l = "" + n),
        void 0 !== t.key && (l = "" + t.key),
        void 0 !== t.ref && (p = t.ref),
        t))
          o.call(t, r) && !c.hasOwnProperty(r) && (a[r] = t[r]);
        if (e && e.defaultProps)
          for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
        return {
          $$typeof: s,
          type: e,
          key: l,
          ref: p,
          props: a,
          _owner: i.current,
        };
      }
      (t.Fragment = a), (t.jsx = l), (t.jsxs = l);
    },
    57437: function (e, t, n) {
      "use strict";
      e.exports = n(30622);
    },
  },
  function (e) {
    e.O(0, [5262, 9241, 2971, 4938, 1744], function () {
      return e((e.s = 53342));
    }),
      (_N_E = e.O());
  },
]);
