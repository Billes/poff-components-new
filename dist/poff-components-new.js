import "./poff-components-new.css";
import * as C from "react";
import S, { useEffect as G, useLayoutEffect as wa, useRef as A, useState as W, forwardRef as Ur, Fragment as he, isValidElement as ao, cloneElement as io, createElement as oo, createContext as Se, useContext as j, useMemo as V, useReducer as Na, createRef as Ca, useCallback as tt } from "react";
import { createPortal as lo } from "react-dom";
var Er = { exports: {} }, vt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mn;
function so() {
  return mn || (mn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = S, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), d = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = Symbol.iterator, v = "@@iterator";
    function g(u) {
      if (u === null || typeof u != "object")
        return null;
      var y = m && u[m] || u[v];
      return typeof y == "function" ? y : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(u) {
      {
        for (var y = arguments.length, w = new Array(y > 1 ? y - 1 : 0), T = 1; T < y; T++)
          w[T - 1] = arguments[T];
        O("error", u, w);
      }
    }
    function O(u, y, w) {
      {
        var T = b.ReactDebugCurrentFrame, M = T.getStackAddendum();
        M !== "" && (y += "%s", w = w.concat([M]));
        var U = w.map(function(_) {
          return String(_);
        });
        U.unshift("Warning: " + y), Function.prototype.apply.call(console[u], console, U);
      }
    }
    var L = !1, Y = !1, N = !1, E = !1, k = !1, X;
    X = Symbol.for("react.module.reference");
    function ce(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === n || u === i || k || u === a || u === s || u === c || E || u === h || L || Y || N || typeof u == "object" && u !== null && (u.$$typeof === p || u.$$typeof === $ || u.$$typeof === o || u.$$typeof === d || u.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      u.$$typeof === X || u.getModuleId !== void 0));
    }
    function me(u, y, w) {
      var T = u.displayName;
      if (T)
        return T;
      var M = y.displayName || y.name || "";
      return M !== "" ? w + "(" + M + ")" : w;
    }
    function F(u) {
      return u.displayName || "Context";
    }
    function Z(u) {
      if (u == null)
        return null;
      if (typeof u.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
        return u.displayName || u.name || null;
      if (typeof u == "string")
        return u;
      switch (u) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case s:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case d:
            var y = u;
            return F(y) + ".Consumer";
          case o:
            var w = u;
            return F(w._context) + ".Provider";
          case l:
            return me(u, u.render, "ForwardRef");
          case $:
            var T = u.displayName || null;
            return T !== null ? T : Z(u.type) || "Memo";
          case p: {
            var M = u, U = M._payload, _ = M._init;
            try {
              return Z(_(U));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var de = Object.assign, pe = 0, ye, fe, Te, xe, we, le, ge;
    function Ne() {
    }
    Ne.__reactDisabledLog = !0;
    function D() {
      {
        if (pe === 0) {
          ye = console.log, fe = console.info, Te = console.warn, xe = console.error, we = console.group, le = console.groupCollapsed, ge = console.groupEnd;
          var u = {
            configurable: !0,
            enumerable: !0,
            value: Ne,
            writable: !0
          };
          Object.defineProperties(console, {
            info: u,
            log: u,
            warn: u,
            error: u,
            group: u,
            groupCollapsed: u,
            groupEnd: u
          });
        }
        pe++;
      }
    }
    function B() {
      {
        if (pe--, pe === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: de({}, u, {
              value: ye
            }),
            info: de({}, u, {
              value: fe
            }),
            warn: de({}, u, {
              value: Te
            }),
            error: de({}, u, {
              value: xe
            }),
            group: de({}, u, {
              value: we
            }),
            groupCollapsed: de({}, u, {
              value: le
            }),
            groupEnd: de({}, u, {
              value: ge
            })
          });
        }
        pe < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = b.ReactCurrentDispatcher, Re;
    function Le(u, y, w) {
      {
        if (Re === void 0)
          try {
            throw Error();
          } catch (M) {
            var T = M.stack.trim().match(/\n( *(at )?)/);
            Re = T && T[1] || "";
          }
        return `
` + Re + u;
      }
    }
    var ee = !1, Ce;
    {
      var Ee = typeof WeakMap == "function" ? WeakMap : Map;
      Ce = new Ee();
    }
    function Qe(u, y) {
      if (!u || ee)
        return "";
      {
        var w = Ce.get(u);
        if (w !== void 0)
          return w;
      }
      var T;
      ee = !0;
      var M = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var U;
      U = Q.current, Q.current = null, D();
      try {
        if (y) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (je) {
              T = je;
            }
            Reflect.construct(u, [], _);
          } else {
            try {
              _.call();
            } catch (je) {
              T = je;
            }
            u.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (je) {
            T = je;
          }
          u();
        }
      } catch (je) {
        if (je && T && typeof je.stack == "string") {
          for (var I = je.stack.split(`
`), ve = T.stack.split(`
`), te = I.length - 1, ne = ve.length - 1; te >= 1 && ne >= 0 && I[te] !== ve[ne]; )
            ne--;
          for (; te >= 1 && ne >= 0; te--, ne--)
            if (I[te] !== ve[ne]) {
              if (te !== 1 || ne !== 1)
                do
                  if (te--, ne--, ne < 0 || I[te] !== ve[ne]) {
                    var Oe = `
` + I[te].replace(" at new ", " at ");
                    return u.displayName && Oe.includes("<anonymous>") && (Oe = Oe.replace("<anonymous>", u.displayName)), typeof u == "function" && Ce.set(u, Oe), Oe;
                  }
                while (te >= 1 && ne >= 0);
              break;
            }
        }
      } finally {
        ee = !1, Q.current = U, B(), Error.prepareStackTrace = M;
      }
      var dt = u ? u.displayName || u.name : "", gn = dt ? Le(dt) : "";
      return typeof u == "function" && Ce.set(u, gn), gn;
    }
    function _i(u, y, w) {
      return Qe(u, !1);
    }
    function Mi(u) {
      var y = u.prototype;
      return !!(y && y.isReactComponent);
    }
    function Dt(u, y, w) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return Qe(u, Mi(u));
      if (typeof u == "string")
        return Le(u);
      switch (u) {
        case s:
          return Le("Suspense");
        case c:
          return Le("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case l:
            return _i(u.render);
          case $:
            return Dt(u.type, y, w);
          case p: {
            var T = u, M = T._payload, U = T._init;
            try {
              return Dt(U(M), y, w);
            } catch {
            }
          }
        }
      return "";
    }
    var _t = Object.prototype.hasOwnProperty, rn = {}, nn = b.ReactDebugCurrentFrame;
    function Mt(u) {
      if (u) {
        var y = u._owner, w = Dt(u.type, u._source, y ? y.type : null);
        nn.setExtraStackFrame(w);
      } else
        nn.setExtraStackFrame(null);
    }
    function Li(u, y, w, T, M) {
      {
        var U = Function.call.bind(_t);
        for (var _ in u)
          if (U(u, _)) {
            var I = void 0;
            try {
              if (typeof u[_] != "function") {
                var ve = Error((T || "React class") + ": " + w + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ve.name = "Invariant Violation", ve;
              }
              I = u[_](y, _, T, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (te) {
              I = te;
            }
            I && !(I instanceof Error) && (Mt(M), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", T || "React class", w, _, typeof I), Mt(null)), I instanceof Error && !(I.message in rn) && (rn[I.message] = !0, Mt(M), x("Failed %s type: %s", w, I.message), Mt(null));
          }
      }
    }
    var ji = Array.isArray;
    function sr(u) {
      return ji(u);
    }
    function Bi(u) {
      {
        var y = typeof Symbol == "function" && Symbol.toStringTag, w = y && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return w;
      }
    }
    function Gi(u) {
      try {
        return an(u), !1;
      } catch {
        return !0;
      }
    }
    function an(u) {
      return "" + u;
    }
    function on(u) {
      if (Gi(u))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Bi(u)), an(u);
    }
    var pt = b.ReactCurrentOwner, Ui = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, dn, ln, ur;
    ur = {};
    function Hi(u) {
      if (_t.call(u, "ref")) {
        var y = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function Wi(u) {
      if (_t.call(u, "key")) {
        var y = Object.getOwnPropertyDescriptor(u, "key").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function Vi(u, y) {
      if (typeof u.ref == "string" && pt.current && y && pt.current.stateNode !== y) {
        var w = Z(pt.current.type);
        ur[w] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(pt.current.type), u.ref), ur[w] = !0);
      }
    }
    function zi(u, y) {
      {
        var w = function() {
          dn || (dn = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        w.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: w,
          configurable: !0
        });
      }
    }
    function Yi(u, y) {
      {
        var w = function() {
          ln || (ln = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        w.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: w,
          configurable: !0
        });
      }
    }
    var Ki = function(u, y, w, T, M, U, _) {
      var I = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: u,
        key: y,
        ref: w,
        props: _,
        // Record the component responsible for creating this element.
        _owner: U
      };
      return I._store = {}, Object.defineProperty(I._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(I, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.defineProperty(I, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: M
      }), Object.freeze && (Object.freeze(I.props), Object.freeze(I)), I;
    };
    function Xi(u, y, w, T, M) {
      {
        var U, _ = {}, I = null, ve = null;
        w !== void 0 && (on(w), I = "" + w), Wi(y) && (on(y.key), I = "" + y.key), Hi(y) && (ve = y.ref, Vi(y, M));
        for (U in y)
          _t.call(y, U) && !Ui.hasOwnProperty(U) && (_[U] = y[U]);
        if (u && u.defaultProps) {
          var te = u.defaultProps;
          for (U in te)
            _[U] === void 0 && (_[U] = te[U]);
        }
        if (I || ve) {
          var ne = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          I && zi(_, ne), ve && Yi(_, ne);
        }
        return Ki(u, I, ve, M, T, pt.current, _);
      }
    }
    var cr = b.ReactCurrentOwner, sn = b.ReactDebugCurrentFrame;
    function ot(u) {
      if (u) {
        var y = u._owner, w = Dt(u.type, u._source, y ? y.type : null);
        sn.setExtraStackFrame(w);
      } else
        sn.setExtraStackFrame(null);
    }
    var fr;
    fr = !1;
    function $r(u) {
      return typeof u == "object" && u !== null && u.$$typeof === r;
    }
    function un() {
      {
        if (cr.current) {
          var u = Z(cr.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
    }
    function Zi(u) {
      {
        if (u !== void 0) {
          var y = u.fileName.replace(/^.*[\\\/]/, ""), w = u.lineNumber;
          return `

Check your code at ` + y + ":" + w + ".";
        }
        return "";
      }
    }
    var cn = {};
    function Ji(u) {
      {
        var y = un();
        if (!y) {
          var w = typeof u == "string" ? u : u.displayName || u.name;
          w && (y = `

Check the top-level render call using <` + w + ">.");
        }
        return y;
      }
    }
    function fn(u, y) {
      {
        if (!u._store || u._store.validated || u.key != null)
          return;
        u._store.validated = !0;
        var w = Ji(y);
        if (cn[w])
          return;
        cn[w] = !0;
        var T = "";
        u && u._owner && u._owner !== cr.current && (T = " It was passed a child from " + Z(u._owner.type) + "."), ot(u), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, T), ot(null);
      }
    }
    function $n(u, y) {
      {
        if (typeof u != "object")
          return;
        if (sr(u))
          for (var w = 0; w < u.length; w++) {
            var T = u[w];
            $r(T) && fn(T, y);
          }
        else if ($r(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var M = g(u);
          if (typeof M == "function" && M !== u.entries)
            for (var U = M.call(u), _; !(_ = U.next()).done; )
              $r(_.value) && fn(_.value, y);
        }
      }
    }
    function qi(u) {
      {
        var y = u.type;
        if (y == null || typeof y == "string")
          return;
        var w;
        if (typeof y == "function")
          w = y.propTypes;
        else if (typeof y == "object" && (y.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        y.$$typeof === $))
          w = y.propTypes;
        else
          return;
        if (w) {
          var T = Z(y);
          Li(w, u.props, "prop", T, u);
        } else if (y.PropTypes !== void 0 && !fr) {
          fr = !0;
          var M = Z(y);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", M || "Unknown");
        }
        typeof y.getDefaultProps == "function" && !y.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Qi(u) {
      {
        for (var y = Object.keys(u.props), w = 0; w < y.length; w++) {
          var T = y[w];
          if (T !== "children" && T !== "key") {
            ot(u), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", T), ot(null);
            break;
          }
        }
        u.ref !== null && (ot(u), x("Invalid attribute `ref` supplied to `React.Fragment`."), ot(null));
      }
    }
    function hn(u, y, w, T, M, U) {
      {
        var _ = ce(u);
        if (!_) {
          var I = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (I += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ve = Zi(M);
          ve ? I += ve : I += un();
          var te;
          u === null ? te = "null" : sr(u) ? te = "array" : u !== void 0 && u.$$typeof === r ? (te = "<" + (Z(u.type) || "Unknown") + " />", I = " Did you accidentally export a JSX literal instead of a component?") : te = typeof u, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", te, I);
        }
        var ne = Xi(u, y, w, M, U);
        if (ne == null)
          return ne;
        if (_) {
          var Oe = y.children;
          if (Oe !== void 0)
            if (T)
              if (sr(Oe)) {
                for (var dt = 0; dt < Oe.length; dt++)
                  $n(Oe[dt], u);
                Object.freeze && Object.freeze(Oe);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $n(Oe, u);
        }
        return u === n ? Qi(ne) : qi(ne), ne;
      }
    }
    function eo(u, y, w) {
      return hn(u, y, w, !0);
    }
    function to(u, y, w) {
      return hn(u, y, w, !1);
    }
    var ro = to, no = eo;
    vt.Fragment = n, vt.jsx = ro, vt.jsxs = no;
  }()), vt;
}
var bt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pn;
function uo() {
  if (pn)
    return bt;
  pn = 1;
  var e = S, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(d, l, s) {
    var c, $ = {}, p = null, h = null;
    s !== void 0 && (p = "" + s), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (h = l.ref);
    for (c in l)
      n.call(l, c) && !i.hasOwnProperty(c) && ($[c] = l[c]);
    if (d && d.defaultProps)
      for (c in l = d.defaultProps, l)
        $[c] === void 0 && ($[c] = l[c]);
    return { $$typeof: r, type: d, key: p, ref: h, props: $, _owner: a.current };
  }
  return bt.Fragment = t, bt.jsx = o, bt.jsxs = o, bt;
}
process.env.NODE_ENV === "production" ? Er.exports = uo() : Er.exports = so();
var f = Er.exports;
function co({
  title: e,
  titleId: r,
  ...t
}, n) {
  return /* @__PURE__ */ C.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: n,
    "aria-labelledby": r
  }, t), e ? /* @__PURE__ */ C.createElement("title", {
    id: r
  }, e) : null, /* @__PURE__ */ C.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
  }));
}
const fo = C.forwardRef(co), $o = fo;
function ho({
  title: e,
  titleId: r,
  ...t
}, n) {
  return /* @__PURE__ */ C.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: n,
    "aria-labelledby": r
  }, t), e ? /* @__PURE__ */ C.createElement("title", {
    id: r
  }, e) : null, /* @__PURE__ */ C.createElement("path", {
    fillRule: "evenodd",
    d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
    clipRule: "evenodd"
  }));
}
const go = C.forwardRef(ho), Ea = go;
function mo({
  title: e,
  titleId: r,
  ...t
}, n) {
  return /* @__PURE__ */ C.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: n,
    "aria-labelledby": r
  }, t), e ? /* @__PURE__ */ C.createElement("title", {
    id: r
  }, e) : null, /* @__PURE__ */ C.createElement("path", {
    fillRule: "evenodd",
    d: "M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",
    clipRule: "evenodd"
  }));
}
const po = C.forwardRef(mo), Pa = po;
function vo({
  title: e,
  titleId: r,
  ...t
}, n) {
  return /* @__PURE__ */ C.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: n,
    "aria-labelledby": r
  }, t), e ? /* @__PURE__ */ C.createElement("title", {
    id: r
  }, e) : null, /* @__PURE__ */ C.createElement("path", {
    fillRule: "evenodd",
    d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  }));
}
const bo = C.forwardRef(vo), yo = bo;
function xo({
  title: e,
  titleId: r,
  ...t
}, n) {
  return /* @__PURE__ */ C.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: n,
    "aria-labelledby": r
  }, t), e ? /* @__PURE__ */ C.createElement("title", {
    id: r
  }, e) : null, /* @__PURE__ */ C.createElement("path", {
    fillRule: "evenodd",
    d: "M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ C.createElement("path", {
    d: "M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z"
  }));
}
const wo = C.forwardRef(xo), No = wo;
function Co({
  title: e,
  titleId: r,
  ...t
}, n) {
  return /* @__PURE__ */ C.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: n,
    "aria-labelledby": r
  }, t), e ? /* @__PURE__ */ C.createElement("title", {
    id: r
  }, e) : null, /* @__PURE__ */ C.createElement("path", {
    d: "M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
  }), /* @__PURE__ */ C.createElement("path", {
    fillRule: "evenodd",
    d: "M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
    clipRule: "evenodd"
  }));
}
const Eo = C.forwardRef(Co), Po = Eo;
function So({
  title: e,
  titleId: r,
  ...t
}, n) {
  return /* @__PURE__ */ C.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: n,
    "aria-labelledby": r
  }, t), e ? /* @__PURE__ */ C.createElement("title", {
    id: r
  }, e) : null, /* @__PURE__ */ C.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
  }));
}
const ko = C.forwardRef(So), To = ko;
function Oo({
  title: e,
  titleId: r,
  ...t
}, n) {
  return /* @__PURE__ */ C.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: n,
    "aria-labelledby": r
  }, t), e ? /* @__PURE__ */ C.createElement("title", {
    id: r
  }, e) : null, /* @__PURE__ */ C.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",
    clipRule: "evenodd"
  }));
}
const Ao = C.forwardRef(Oo), Ro = Ao;
function Fo({
  title: e,
  titleId: r,
  ...t
}, n) {
  return /* @__PURE__ */ C.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: n,
    "aria-labelledby": r
  }, t), e ? /* @__PURE__ */ C.createElement("title", {
    id: r
  }, e) : null, /* @__PURE__ */ C.createElement("path", {
    d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
  }));
}
const Io = C.forwardRef(Fo), Do = Io;
function K(...e) {
  return e.filter(Boolean).join(" ");
}
var J = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.INFO = "info", e.SUCCESS = "success", e.WARNING = "warning", e))(J || {});
const s1 = ({
  closable: e = !1,
  icon: r = !1,
  type: t = J.SUCCESS,
  headline: n,
  body: a,
  destroy: i,
  duration: o = 0,
  id: d = "alert-id",
  extraClassNames: l = ""
}) => (G(() => {
  if (!o)
    return;
  const s = setTimeout(() => {
    o !== 0 && i && i();
  }, o);
  return () => clearTimeout(s);
}, [e, i, o]), /* @__PURE__ */ f.jsxs(
  "div",
  {
    id: d,
    className: K(
      "pointer-events-auto relative w-96 rounded-md p-5 shadow-lg",
      "dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10",
      t === J.ERROR ? "bg-red-200 dark:bg-red-700" : "",
      t === J.INFO ? "bg-sky-200 dark:bg-sky-600" : "",
      t === J.SUCCESS ? "bg-emerald-100 dark:bg-emerald-700" : "",
      t === J.WARNING ? "bg-orange-100 dark:bg-orange-500" : "",
      l
    ),
    children: [
      /* @__PURE__ */ f.jsxs("div", { className: "flex items-start", children: [
        r && /* @__PURE__ */ f.jsxs("div", { className: "flex-shrink-0", children: [
          t === J.ERROR && /* @__PURE__ */ f.jsx(Ro, { className: "h-5 w-5 text-red-700 dark:text-red-200", "aria-hidden": "true" }),
          t === J.INFO && /* @__PURE__ */ f.jsx(
            To,
            {
              className: "h-5 w-5 text-sky-600 dark:text-sky-200",
              "aria-hidden": "true"
            }
          ),
          t === J.SUCCESS && /* @__PURE__ */ f.jsx(
            $o,
            {
              className: "h-5 w-5 text-emerald-700 dark:text-emerald-100",
              "aria-hidden": "true"
            }
          ),
          t === J.WARNING && /* @__PURE__ */ f.jsx(
            yo,
            {
              className: "h-5 w-5 text-orange-500 dark:text-orange-100",
              "aria-hidden": "true"
            }
          )
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: K("grow", r ? "ml-3" : ""), children: [
          /* @__PURE__ */ f.jsx(
            "h3",
            {
              className: K(
                "font-roboto text-sm font-bold",
                r ? "text-left" : "text-center",
                t === J.ERROR ? "text-red-700 dark:text-red-200" : "",
                t === J.INFO ? "text-sky-600 dark:text-sky-200" : "",
                t === J.SUCCESS ? "text-emerald-700 dark:text-emerald-100" : "",
                t === J.WARNING ? "text-orange-500 dark:text-orange-100" : ""
              ),
              children: n
            }
          ),
          a && /* @__PURE__ */ f.jsx(
            "div",
            {
              className: K(
                "mt-2 font-roboto text-sm",
                r ? "text-left" : "text-center",
                t === J.ERROR ? "text-red-700 dark:text-red-200" : "",
                t === J.INFO ? "text-sky-600 dark:text-sky-200" : "",
                t === J.SUCCESS ? "text-emerald-700 dark:text-emerald-100" : "",
                t === J.WARNING ? "text-orange-500 dark:text-orange-100" : ""
              ),
              children: /* @__PURE__ */ f.jsx("p", { dangerouslySetInnerHTML: { __html: a } })
            }
          )
        ] })
      ] }),
      e && /* @__PURE__ */ f.jsx("div", { className: "absolute top-2 right-2 z-10 flex", children: /* @__PURE__ */ f.jsxs(
        "button",
        {
          type: "button",
          className: K(
            "inline-flex rounded-md focus:outline-none",
            t === J.ERROR ? "text-red-700 hover:text-red-900 dark:text-red-200 dark:hover:text-red-100" : "",
            t === J.INFO ? "text-sky-600 hover:text-sky-800 dark:text-sky-200 dark:hover:text-sky-100" : "",
            t === J.SUCCESS ? "text-emerald-700 hover:text-emerald-900 dark:text-emerald-100 dark:hover:text-emerald-50" : "",
            t === J.WARNING ? "text-orange-500 hover:text-orange-700 dark:text-orange-100 dark:hover:text-orange-50" : ""
          ),
          onClick: i,
          children: [
            /* @__PURE__ */ f.jsx("span", { className: "sr-only", children: "Close" }),
            /* @__PURE__ */ f.jsx(Do, { className: "h-5 w-5", "aria-hidden": "true" })
          ]
        }
      ) })
    ]
  }
));
var Ye = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.DANGER = "danger", e.DEFAULT = "default", e.ACCENT = "accent", e))(Ye || {});
const vn = ({
  onClick: e,
  text: r,
  type: t = Ye.DEFAULT,
  buttonType: n = "button",
  disabled: a = !1,
  extraClassNames: i = "",
  ...o
}) => /* @__PURE__ */ f.jsx(
  "button",
  {
    type: n,
    className: K(
      t === Ye.PRIMARY ? "bg-sky-600 !text-white focus:ring-sky-600 dark:bg-sky-400 dark:focus:ring-sky-400 dark:!text-slate-900" : "",
      t === Ye.DANGER ? "bg-red-700 !text-white focus:ring-red-700 dark:bg-red-500 dark:focus:ring-red-500" : "",
      t === Ye.DEFAULT ? "bg-black !text-white focus:ring-black dark:bg-slate-700 dark:focus:ring-slate-700" : "",
      t === Ye.ACCENT ? "bg-fuchsia-300 !text-black focus:ring-fuchsia-300 dark:bg-fuchsia-700 dark:focus:ring-fuchsia-700 dark:!text-white" : "",
      "inline-flex justify-center rounded-md border border-transparent py-2 px-4 font-roboto text-sm font-bold shadow-md disabled:cursor-not-allowed disabled:opacity-50",
      "hover:ring-4 hover:ring-white",
      "focus:outline-none focus:ring-2 focus:ring-offset-2",
      "dark:hover:ring-0 dark:focus:ring-offset-2 dark:focus:ring-offset-slate-900 dark:focus:ring-2 dark:shadow-none",
      i
    ),
    onClick: e,
    disabled: a,
    ...o,
    children: r
  }
);
var _o = Object.defineProperty, Mo = (e, r, t) => r in e ? _o(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, hr = (e, r, t) => (Mo(e, typeof r != "symbol" ? r + "" : r, t), t);
let Lo = class {
  constructor() {
    hr(this, "current", this.detect()), hr(this, "handoffState", "pending"), hr(this, "currentId", 0);
  }
  set(r) {
    this.current !== r && (this.handoffState = "pending", this.currentId = 0, this.current = r);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, Ge = new Lo(), ae = (e, r) => {
  Ge.isServer ? G(e, r) : wa(e, r);
};
function De(e) {
  let r = A(e);
  return ae(() => {
    r.current = e;
  }, [e]), r;
}
function Sa(e, r) {
  let [t, n] = W(e), a = De(e);
  return ae(() => n(a.current), [a, n, ...r]), t;
}
function qt(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((r) => setTimeout(() => {
    throw r;
  }));
}
function Me() {
  let e = [], r = { addEventListener(t, n, a, i) {
    return t.addEventListener(n, a, i), r.add(() => t.removeEventListener(n, a, i));
  }, requestAnimationFrame(...t) {
    let n = requestAnimationFrame(...t);
    return r.add(() => cancelAnimationFrame(n));
  }, nextFrame(...t) {
    return r.requestAnimationFrame(() => r.requestAnimationFrame(...t));
  }, setTimeout(...t) {
    let n = setTimeout(...t);
    return r.add(() => clearTimeout(n));
  }, microTask(...t) {
    let n = { current: !0 };
    return qt(() => {
      n.current && t[0]();
    }), r.add(() => {
      n.current = !1;
    });
  }, style(t, n, a) {
    let i = t.style.getPropertyValue(n);
    return Object.assign(t.style, { [n]: a }), this.add(() => {
      Object.assign(t.style, { [n]: i });
    });
  }, group(t) {
    let n = Me();
    return t(n), this.add(() => n.dispose());
  }, add(t) {
    return e.push(t), () => {
      let n = e.indexOf(t);
      if (n >= 0)
        for (let a of e.splice(n, 1))
          a();
    };
  }, dispose() {
    for (let t of e.splice(0))
      t();
  } };
  return r;
}
function qe() {
  let [e] = W(Me);
  return G(() => () => e.dispose(), [e]), e;
}
let P = function(e) {
  let r = De(e);
  return S.useCallback((...t) => r.current(...t), [r]);
};
function jo() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in C ? ((r) => r.useSyncExternalStore)(C)(() => () => {
  }, () => !1, () => !e) : !1;
}
function gt() {
  let e = jo(), [r, t] = C.useState(Ge.isHandoffComplete);
  return r && Ge.isHandoffComplete === !1 && t(!1), C.useEffect(() => {
    r !== !0 && t(!0);
  }, [r]), C.useEffect(() => Ge.handoff(), []), e ? !1 : r;
}
var bn;
let Ae = (bn = S.useId) != null ? bn : function() {
  let e = gt(), [r, t] = S.useState(e ? () => Ge.nextId() : null);
  return ae(() => {
    r === null && t(Ge.nextId());
  }, [r]), r != null ? "" + r : void 0;
};
function q(e, r, ...t) {
  if (e in r) {
    let a = r[e];
    return typeof a == "function" ? a(...t) : a;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(r).map((a) => `"${a}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, q), n;
}
function Hr(e) {
  return Ge.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
let Pr = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var et = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(et || {}), ka = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(ka || {}), Bo = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Bo || {});
function Go(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Pr)).sort((r, t) => Math.sign((r.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Wr = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Wr || {});
function Ta(e, r = 0) {
  var t;
  return e === ((t = Hr(e)) == null ? void 0 : t.body) ? !1 : q(r, { 0() {
    return e.matches(Pr);
  }, 1() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(Pr))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
var Uo = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Uo || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function at(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Ho = ["textarea", "input"].join(",");
function Wo(e) {
  var r, t;
  return (t = (r = e == null ? void 0 : e.matches) == null ? void 0 : r.call(e, Ho)) != null ? t : !1;
}
function Oa(e, r = (t) => t) {
  return e.slice().sort((t, n) => {
    let a = r(t), i = r(n);
    if (a === null || i === null)
      return 0;
    let o = a.compareDocumentPosition(i);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ut(e, r, { sorted: t = !0, relativeTo: n = null, skipElements: a = [] } = {}) {
  let i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, o = Array.isArray(e) ? t ? Oa(e) : e : Go(e);
  a.length > 0 && o.length > 1 && (o = o.filter((h) => !a.includes(h))), n = n ?? i.activeElement;
  let d = (() => {
    if (r & 5)
      return 1;
    if (r & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), l = (() => {
    if (r & 1)
      return 0;
    if (r & 2)
      return Math.max(0, o.indexOf(n)) - 1;
    if (r & 4)
      return Math.max(0, o.indexOf(n)) + 1;
    if (r & 8)
      return o.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), s = r & 32 ? { preventScroll: !0 } : {}, c = 0, $ = o.length, p;
  do {
    if (c >= $ || c + $ <= 0)
      return 0;
    let h = l + c;
    if (r & 16)
      h = (h + $) % $;
    else {
      if (h < 0)
        return 3;
      if (h >= $)
        return 1;
    }
    p = o[h], p == null || p.focus(s), c += d;
  } while (p !== i.activeElement);
  return r & 6 && Wo(p) && p.select(), 2;
}
function Lt(e, r, t) {
  let n = De(r);
  G(() => {
    function a(i) {
      n.current(i);
    }
    return document.addEventListener(e, a, t), () => document.removeEventListener(e, a, t);
  }, [e, t]);
}
function Aa(e, r, t) {
  let n = De(r);
  G(() => {
    function a(i) {
      n.current(i);
    }
    return window.addEventListener(e, a, t), () => window.removeEventListener(e, a, t);
  }, [e, t]);
}
function Ra(e, r, t = !0) {
  let n = A(!1);
  G(() => {
    requestAnimationFrame(() => {
      n.current = t;
    });
  }, [t]);
  function a(o, d) {
    if (!n.current || o.defaultPrevented)
      return;
    let l = d(o);
    if (l === null || !l.getRootNode().contains(l) || !l.isConnected)
      return;
    let s = function c($) {
      return typeof $ == "function" ? c($()) : Array.isArray($) || $ instanceof Set ? $ : [$];
    }(e);
    for (let c of s) {
      if (c === null)
        continue;
      let $ = c instanceof HTMLElement ? c : c.current;
      if ($ != null && $.contains(l) || o.composed && o.composedPath().includes($))
        return;
    }
    return !Ta(l, Wr.Loose) && l.tabIndex !== -1 && o.preventDefault(), r(o, l);
  }
  let i = A(null);
  Lt("pointerdown", (o) => {
    var d, l;
    n.current && (i.current = ((l = (d = o.composedPath) == null ? void 0 : d.call(o)) == null ? void 0 : l[0]) || o.target);
  }, !0), Lt("mousedown", (o) => {
    var d, l;
    n.current && (i.current = ((l = (d = o.composedPath) == null ? void 0 : d.call(o)) == null ? void 0 : l[0]) || o.target);
  }, !0), Lt("click", (o) => {
    i.current && (a(o, () => i.current), i.current = null);
  }, !0), Lt("touchend", (o) => a(o, () => o.target instanceof HTMLElement ? o.target : null), !0), Aa("blur", (o) => a(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function yn(e) {
  var r;
  if (e.type)
    return e.type;
  let t = (r = e.as) != null ? r : "button";
  if (typeof t == "string" && t.toLowerCase() === "button")
    return "button";
}
function Fa(e, r) {
  let [t, n] = W(() => yn(e));
  return ae(() => {
    n(yn(e));
  }, [e.type, e.as]), ae(() => {
    t || r.current && r.current instanceof HTMLButtonElement && !r.current.hasAttribute("type") && n("button");
  }, [t, r]), t;
}
let Ia = Symbol();
function Vo(e, r = !0) {
  return Object.assign(e, { [Ia]: r });
}
function ue(...e) {
  let r = A(e);
  G(() => {
    r.current = e;
  }, [e]);
  let t = P((n) => {
    for (let a of r.current)
      a != null && (typeof a == "function" ? a(n) : a.current = n);
  });
  return e.every((n) => n == null || (n == null ? void 0 : n[Ia])) ? void 0 : t;
}
function zo(e) {
  throw new Error("Unexpected object: " + e);
}
var Pe = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(Pe || {});
function Yo(e, r) {
  let t = r.resolveItems();
  if (t.length <= 0)
    return null;
  let n = r.resolveActiveIndex(), a = n ?? -1, i = (() => {
    switch (e.focus) {
      case 0:
        return t.findIndex((o) => !r.resolveDisabled(o));
      case 1: {
        let o = t.slice().reverse().findIndex((d, l, s) => a !== -1 && s.length - l - 1 >= a ? !1 : !r.resolveDisabled(d));
        return o === -1 ? o : t.length - 1 - o;
      }
      case 2:
        return t.findIndex((o, d) => d <= a ? !1 : !r.resolveDisabled(o));
      case 3: {
        let o = t.slice().reverse().findIndex((d) => !r.resolveDisabled(d));
        return o === -1 ? o : t.length - 1 - o;
      }
      case 4:
        return t.findIndex((o) => r.resolveId(o) === e.id);
      case 5:
        return null;
      default:
        zo(e);
    }
  })();
  return i === -1 ? n : i;
}
function zt(...e) {
  return Array.from(new Set(e.flatMap((r) => typeof r == "string" ? r.split(" ") : []))).filter(Boolean).join(" ");
}
var $t = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))($t || {}), Xe = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Xe || {});
function ie({ ourProps: e, theirProps: r, slot: t, defaultTag: n, features: a, visible: i = !0, name: o }) {
  let d = Da(r, e);
  if (i)
    return jt(d, t, n, o);
  let l = a ?? 0;
  if (l & 2) {
    let { static: s = !1, ...c } = d;
    if (s)
      return jt(c, t, n, o);
  }
  if (l & 1) {
    let { unmount: s = !0, ...c } = d;
    return q(s ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return jt({ ...c, hidden: !0, style: { display: "none" } }, t, n, o);
    } });
  }
  return jt(d, t, n, o);
}
function jt(e, r = {}, t, n) {
  let { as: a = t, children: i, refName: o = "ref", ...d } = gr(e, ["unmount", "static"]), l = e.ref !== void 0 ? { [o]: e.ref } : {}, s = typeof i == "function" ? i(r) : i;
  "className" in d && d.className && typeof d.className == "function" && (d.className = d.className(r));
  let c = {};
  if (r) {
    let $ = !1, p = [];
    for (let [h, m] of Object.entries(r))
      typeof m == "boolean" && ($ = !0), m === !0 && p.push(h);
    $ && (c["data-headlessui-state"] = p.join(" "));
  }
  if (a === he && Object.keys(Yt(d)).length > 0) {
    if (!ao(s) || Array.isArray(s) && s.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(d).map((m) => `  - ${m}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((m) => `  - ${m}`).join(`
`)].join(`
`));
    let $ = s.props, p = typeof ($ == null ? void 0 : $.className) == "function" ? (...m) => zt($ == null ? void 0 : $.className(...m), d.className) : zt($ == null ? void 0 : $.className, d.className), h = p ? { className: p } : {};
    return io(s, Object.assign({}, Da(s.props, Yt(gr(d, ["ref"]))), c, l, Ko(s.ref, l.ref), h));
  }
  return oo(a, Object.assign({}, gr(d, ["ref"]), a !== he && l, a !== he && c), s);
}
function Ko(...e) {
  return { ref: e.every((r) => r == null) ? void 0 : (r) => {
    for (let t of e)
      t != null && (typeof t == "function" ? t(r) : t.current = r);
  } };
}
function Da(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let r = {}, t = {};
  for (let n of e)
    for (let a in n)
      a.startsWith("on") && typeof n[a] == "function" ? (t[a] != null || (t[a] = []), t[a].push(n[a])) : r[a] = n[a];
  if (r.disabled || r["aria-disabled"])
    return Object.assign(r, Object.fromEntries(Object.keys(t).map((n) => [n, void 0])));
  for (let n in t)
    Object.assign(r, { [n](a, ...i) {
      let o = t[n];
      for (let d of o) {
        if ((a instanceof Event || (a == null ? void 0 : a.nativeEvent) instanceof Event) && a.defaultPrevented)
          return;
        d(a, ...i);
      }
    } });
  return r;
}
function oe(e) {
  var r;
  return Object.assign(Ur(e), { displayName: (r = e.displayName) != null ? r : e.name });
}
function Yt(e) {
  let r = Object.assign({}, e);
  for (let t in r)
    r[t] === void 0 && delete r[t];
  return r;
}
function gr(e, r = []) {
  let t = Object.assign({}, e);
  for (let n of r)
    n in t && delete t[n];
  return t;
}
function Vr(e) {
  let r = e.parentElement, t = null;
  for (; r && !(r instanceof HTMLFieldSetElement); )
    r instanceof HTMLLegendElement && (t = r), r = r.parentElement;
  let n = (r == null ? void 0 : r.getAttribute("disabled")) === "";
  return n && Xo(t) ? !1 : n;
}
function Xo(e) {
  if (!e)
    return !1;
  let r = e.previousElementSibling;
  for (; r !== null; ) {
    if (r instanceof HTMLLegendElement)
      return !1;
    r = r.previousElementSibling;
  }
  return !0;
}
function _a(e = {}, r = null, t = []) {
  for (let [n, a] of Object.entries(e))
    La(t, Ma(r, n), a);
  return t;
}
function Ma(e, r) {
  return e ? e + "[" + r + "]" : r;
}
function La(e, r, t) {
  if (Array.isArray(t))
    for (let [n, a] of t.entries())
      La(e, Ma(r, n.toString()), a);
  else
    t instanceof Date ? e.push([r, t.toISOString()]) : typeof t == "boolean" ? e.push([r, t ? "1" : "0"]) : typeof t == "string" ? e.push([r, t]) : typeof t == "number" ? e.push([r, `${t}`]) : t == null ? e.push([r, ""]) : _a(t, r, e);
}
function Zo(e) {
  var r, t;
  let n = (r = e == null ? void 0 : e.form) != null ? r : e.closest("form");
  if (n) {
    for (let a of n.elements)
      if (a !== e && (a.tagName === "INPUT" && a.type === "submit" || a.tagName === "BUTTON" && a.type === "submit" || a.nodeName === "INPUT" && a.type === "image")) {
        a.click();
        return;
      }
    (t = n.requestSubmit) == null || t.call(n);
  }
}
let Jo = "div";
var ht = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(ht || {});
function qo(e, r) {
  let { features: t = 1, ...n } = e, a = { ref: r, "aria-hidden": (t & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(t & 4) === 4 && (t & 2) !== 2 && { display: "none" } } };
  return ie({ ourProps: a, theirProps: n, slot: {}, defaultTag: Jo, name: "Hidden" });
}
let St = oe(qo), zr = Se(null);
zr.displayName = "OpenClosedContext";
var $e = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))($e || {});
function Qt() {
  return j(zr);
}
function ja({ value: e, children: r }) {
  return S.createElement(zr.Provider, { value: e }, r);
}
var re = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(re || {});
function Ba(e, r, t) {
  let [n, a] = W(t), i = e !== void 0, o = A(i), d = A(!1), l = A(!1);
  return i && !o.current && !d.current ? (d.current = !0, o.current = i, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !i && o.current && !l.current && (l.current = !0, o.current = i, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [i ? e : n, P((s) => (i || a(s), r == null ? void 0 : r(s)))];
}
function Yr(e, r) {
  let t = A([]), n = P(e);
  G(() => {
    let a = [...t.current];
    for (let [i, o] of r.entries())
      if (t.current[i] !== o) {
        let d = n(r, a);
        return t.current = r, d;
      }
  }, [n, ...r]);
}
function xn(e) {
  return [e.screenX, e.screenY];
}
function Qo() {
  let e = A([-1, -1]);
  return { wasMoved(r) {
    let t = xn(r);
    return e.current[0] === t[0] && e.current[1] === t[1] ? !1 : (e.current = t, !0);
  }, update(r) {
    e.current = xn(r);
  } };
}
function ed() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Ot(...e) {
  return V(() => Hr(...e), [...e]);
}
var Ct = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Ct || {});
function td() {
  let e = A(0);
  return Aa("keydown", (r) => {
    r.key === "Tab" && (e.current = r.shiftKey ? 1 : 0);
  }, !0), e;
}
function At() {
  let e = A(!1);
  return ae(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function Ga(e, r, t, n) {
  let a = De(t);
  G(() => {
    e = e ?? window;
    function i(o) {
      a.current(o);
    }
    return e.addEventListener(r, i, n), () => e.removeEventListener(r, i, n);
  }, [e, r, n]);
}
function rd(e) {
  function r() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", r));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", r), r());
}
function Ua(e) {
  let r = P(e), t = A(!1);
  G(() => (t.current = !1, () => {
    t.current = !0, qt(() => {
      t.current && r();
    });
  }), [r]);
}
function Ha(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let r = /* @__PURE__ */ new Set();
  for (let t of e.current)
    t.current instanceof HTMLElement && r.add(t.current);
  return r;
}
let nd = "div";
var Wa = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Wa || {});
function ad(e, r) {
  let t = A(null), n = ue(t, r), { initialFocus: a, containers: i, features: o = 30, ...d } = e;
  gt() || (o = 1);
  let l = Ot(t);
  dd({ ownerDocument: l }, !!(o & 16));
  let s = ld({ ownerDocument: l, container: t, initialFocus: a }, !!(o & 2));
  sd({ ownerDocument: l, container: t, containers: i, previousActiveElement: s }, !!(o & 8));
  let c = td(), $ = P((v) => {
    let g = t.current;
    g && ((b) => b())(() => {
      q(c.current, { [Ct.Forwards]: () => {
        Ut(g, et.First, { skipElements: [v.relatedTarget] });
      }, [Ct.Backwards]: () => {
        Ut(g, et.Last, { skipElements: [v.relatedTarget] });
      } });
    });
  }), p = qe(), h = A(!1), m = { ref: n, onKeyDown(v) {
    v.key == "Tab" && (h.current = !0, p.requestAnimationFrame(() => {
      h.current = !1;
    }));
  }, onBlur(v) {
    let g = Ha(i);
    t.current instanceof HTMLElement && g.add(t.current);
    let b = v.relatedTarget;
    b instanceof HTMLElement && b.dataset.headlessuiFocusGuard !== "true" && (Va(g, b) || (h.current ? Ut(t.current, q(c.current, { [Ct.Forwards]: () => et.Next, [Ct.Backwards]: () => et.Previous }) | et.WrapAround, { relativeTo: v.target }) : v.target instanceof HTMLElement && at(v.target)));
  } };
  return S.createElement(S.Fragment, null, !!(o & 4) && S.createElement(St, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: $, features: ht.Focusable }), ie({ ourProps: m, theirProps: d, defaultTag: nd, name: "FocusTrap" }), !!(o & 4) && S.createElement(St, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: $, features: ht.Focusable }));
}
let id = oe(ad), yt = Object.assign(id, { features: Wa }), Ke = [];
rd(() => {
  function e(r) {
    r.target instanceof HTMLElement && r.target !== document.body && Ke[0] !== r.target && (Ke.unshift(r.target), Ke = Ke.filter((t) => t != null && t.isConnected), Ke.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function od(e = !0) {
  let r = A(Ke.slice());
  return Yr(([t], [n]) => {
    n === !0 && t === !1 && qt(() => {
      r.current.splice(0);
    }), n === !1 && t === !0 && (r.current = Ke.slice());
  }, [e, Ke, r]), P(() => {
    var t;
    return (t = r.current.find((n) => n != null && n.isConnected)) != null ? t : null;
  });
}
function dd({ ownerDocument: e }, r) {
  let t = od(r);
  Yr(() => {
    r || (e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && at(t());
  }, [r]), Ua(() => {
    r && at(t());
  });
}
function ld({ ownerDocument: e, container: r, initialFocus: t }, n) {
  let a = A(null), i = At();
  return Yr(() => {
    if (!n)
      return;
    let o = r.current;
    o && qt(() => {
      if (!i.current)
        return;
      let d = e == null ? void 0 : e.activeElement;
      if (t != null && t.current) {
        if ((t == null ? void 0 : t.current) === d) {
          a.current = d;
          return;
        }
      } else if (o.contains(d)) {
        a.current = d;
        return;
      }
      t != null && t.current ? at(t.current) : Ut(o, et.First) === ka.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), a.current = e == null ? void 0 : e.activeElement;
    });
  }, [n]), a;
}
function sd({ ownerDocument: e, container: r, containers: t, previousActiveElement: n }, a) {
  let i = At();
  Ga(e == null ? void 0 : e.defaultView, "focus", (o) => {
    if (!a || !i.current)
      return;
    let d = Ha(t);
    r.current instanceof HTMLElement && d.add(r.current);
    let l = n.current;
    if (!l)
      return;
    let s = o.target;
    s && s instanceof HTMLElement ? Va(d, s) ? (n.current = s, at(s)) : (o.preventDefault(), o.stopPropagation(), at(l)) : at(n.current);
  }, !0);
}
function Va(e, r) {
  for (let t of e)
    if (t.contains(r))
      return !0;
  return !1;
}
let za = Se(!1);
function ud() {
  return j(za);
}
function Sr(e) {
  return S.createElement(za.Provider, { value: e.force }, e.children);
}
function cd(e) {
  let r = ud(), t = j(Ya), n = Ot(e), [a, i] = W(() => {
    if (!r && t !== null || Ge.isServer)
      return null;
    let o = n == null ? void 0 : n.getElementById("headlessui-portal-root");
    if (o)
      return o;
    if (n === null)
      return null;
    let d = n.createElement("div");
    return d.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(d);
  });
  return G(() => {
    a !== null && (n != null && n.body.contains(a) || n == null || n.body.appendChild(a));
  }, [a, n]), G(() => {
    r || t !== null && i(t.current);
  }, [t, i, r]), a;
}
let fd = he;
function $d(e, r) {
  let t = e, n = A(null), a = ue(Vo((c) => {
    n.current = c;
  }), r), i = Ot(n), o = cd(n), [d] = W(() => {
    var c;
    return Ge.isServer ? null : (c = i == null ? void 0 : i.createElement("div")) != null ? c : null;
  }), l = j(kr), s = gt();
  return ae(() => {
    !o || !d || o.contains(d) || (d.setAttribute("data-headlessui-portal", ""), o.appendChild(d));
  }, [o, d]), ae(() => {
    if (d && l)
      return l.register(d);
  }, [l, d]), Ua(() => {
    var c;
    !o || !d || (d instanceof Node && o.contains(d) && o.removeChild(d), o.childNodes.length <= 0 && ((c = o.parentElement) == null || c.removeChild(o)));
  }), s ? !o || !d ? null : lo(ie({ ourProps: { ref: a }, theirProps: t, defaultTag: fd, name: "Portal" }), d) : null;
}
let hd = he, Ya = Se(null);
function gd(e, r) {
  let { target: t, ...n } = e, a = { ref: ue(r) };
  return S.createElement(Ya.Provider, { value: t }, ie({ ourProps: a, theirProps: n, defaultTag: hd, name: "Popover.Group" }));
}
let kr = Se(null);
function md() {
  let e = j(kr), r = A([]), t = P((i) => (r.current.push(i), e && e.register(i), () => n(i))), n = P((i) => {
    let o = r.current.indexOf(i);
    o !== -1 && r.current.splice(o, 1), e && e.unregister(i);
  }), a = V(() => ({ register: t, unregister: n, portals: r }), [t, n, r]);
  return [r, V(() => function({ children: i }) {
    return S.createElement(kr.Provider, { value: a }, i);
  }, [a])];
}
let pd = oe($d), vd = oe(gd), Tr = Object.assign(pd, { Group: vd }), Ka = Se(null);
function Xa() {
  let e = j(Ka);
  if (e === null) {
    let r = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(r, Xa), r;
  }
  return e;
}
function Za() {
  let [e, r] = W([]);
  return [e.length > 0 ? e.join(" ") : void 0, V(() => function(t) {
    let n = P((i) => (r((o) => [...o, i]), () => r((o) => {
      let d = o.slice(), l = d.indexOf(i);
      return l !== -1 && d.splice(l, 1), d;
    }))), a = V(() => ({ register: n, slot: t.slot, name: t.name, props: t.props }), [n, t.slot, t.name, t.props]);
    return S.createElement(Ka.Provider, { value: a }, t.children);
  }, [r])];
}
let bd = "p";
function yd(e, r) {
  let t = Ae(), { id: n = `headlessui-description-${t}`, ...a } = e, i = Xa(), o = ue(r);
  ae(() => i.register(n), [n, i.register]);
  let d = { ref: o, ...i.props, id: n };
  return ie({ ourProps: d, theirProps: a, slot: i.slot || {}, defaultTag: bd, name: i.name || "Description" });
}
let xd = oe(yd), Ja = Object.assign(xd, {}), Kr = Se(() => {
});
Kr.displayName = "StackContext";
var Or = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Or || {});
function wd() {
  return j(Kr);
}
function Nd({ children: e, onUpdate: r, type: t, element: n, enabled: a }) {
  let i = wd(), o = P((...d) => {
    r == null || r(...d), i(...d);
  });
  return ae(() => {
    let d = a === void 0 || a === !0;
    return d && o(0, t, n), () => {
      d && o(1, t, n);
    };
  }, [o, t, n, a]), S.createElement(Kr.Provider, { value: o }, e);
}
function Cd(e, r) {
  return e === r && (e !== 0 || 1 / e === 1 / r) || e !== e && r !== r;
}
const Ed = typeof Object.is == "function" ? Object.is : Cd, { useState: Pd, useEffect: Sd, useLayoutEffect: kd, useDebugValue: Td } = C;
function Od(e, r, t) {
  const n = r(), [{ inst: a }, i] = Pd({ inst: { value: n, getSnapshot: r } });
  return kd(() => {
    a.value = n, a.getSnapshot = r, mr(a) && i({ inst: a });
  }, [e, n, r]), Sd(() => (mr(a) && i({ inst: a }), e(() => {
    mr(a) && i({ inst: a });
  })), [e]), Td(n), n;
}
function mr(e) {
  const r = e.getSnapshot, t = e.value;
  try {
    const n = r();
    return !Ed(t, n);
  } catch {
    return !0;
  }
}
function Ad(e, r, t) {
  return r();
}
const Rd = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Fd = !Rd, Id = Fd ? Ad : Od, Dd = "useSyncExternalStore" in C ? ((e) => e.useSyncExternalStore)(C) : Id;
function _d(e) {
  return Dd(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function Md(e, r) {
  let t = e(), n = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t;
  }, subscribe(a) {
    return n.add(a), () => n.delete(a);
  }, dispatch(a, ...i) {
    let o = r[a].call(t, ...i);
    o && (t = o, n.forEach((d) => d()));
  } };
}
function Ld() {
  let e;
  return { before({ doc: r }) {
    var t;
    let n = r.documentElement;
    e = ((t = r.defaultView) != null ? t : window).innerWidth - n.clientWidth;
  }, after({ doc: r, d: t }) {
    let n = r.documentElement, a = n.clientWidth - n.offsetWidth, i = e - a;
    t.style(n, "paddingRight", `${i}px`);
  } };
}
function jd() {
  if (!ed())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: r, d: t, meta: n }) {
    function a(i) {
      return n.containers.flatMap((o) => o()).some((o) => o.contains(i));
    }
    t.microTask(() => {
      if (window.getComputedStyle(r.documentElement).scrollBehavior !== "auto") {
        let o = Me();
        o.style(r.documentElement, "scroll-behavior", "auto"), t.add(() => t.microTask(() => o.dispose()));
      }
      t.style(r.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
      let i = null;
      t.addEventListener(r, "click", (o) => {
        if (o.target instanceof HTMLElement)
          try {
            let d = o.target.closest("a");
            if (!d)
              return;
            let { hash: l } = new URL(d.href), s = r.querySelector(l);
            s && !a(s) && (i = s);
          } catch {
          }
      }, !0), t.addEventListener(r, "touchmove", (o) => {
        o.target instanceof HTMLElement && !a(o.target) && o.preventDefault();
      }, { passive: !1 }), t.add(() => {
        window.scrollTo(0, window.pageYOffset + e), i && i.isConnected && (i.scrollIntoView({ block: "nearest" }), i = null);
      });
    });
  } };
}
function Bd() {
  return { before({ doc: e, d: r }) {
    r.style(e.documentElement, "overflow", "hidden");
  } };
}
function Gd(e) {
  let r = {};
  for (let t of e)
    Object.assign(r, t(r));
  return r;
}
let rt = Md(() => /* @__PURE__ */ new Map(), { PUSH(e, r) {
  var t;
  let n = (t = this.get(e)) != null ? t : { doc: e, count: 0, d: Me(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(r), this.set(e, n), this;
}, POP(e, r) {
  let t = this.get(e);
  return t && (t.count--, t.meta.delete(r)), this;
}, SCROLL_PREVENT({ doc: e, d: r, meta: t }) {
  let n = { doc: e, d: r, meta: Gd(t) }, a = [jd(), Ld(), Bd()];
  a.forEach(({ before: i }) => i == null ? void 0 : i(n)), a.forEach(({ after: i }) => i == null ? void 0 : i(n));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
rt.subscribe(() => {
  let e = rt.getSnapshot(), r = /* @__PURE__ */ new Map();
  for (let [t] of e)
    r.set(t, t.documentElement.style.overflow);
  for (let t of e.values()) {
    let n = r.get(t.doc) === "hidden", a = t.count !== 0;
    (a && !n || !a && n) && rt.dispatch(t.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t), t.count === 0 && rt.dispatch("TEARDOWN", t);
  }
});
function Ud(e, r, t) {
  let n = _d(rt), a = e ? n.get(e) : void 0, i = a ? a.count > 0 : !1;
  return ae(() => {
    if (!(!e || !r))
      return rt.dispatch("PUSH", e, t), () => rt.dispatch("POP", e, t);
  }, [r, e]), i;
}
let pr = /* @__PURE__ */ new Map(), xt = /* @__PURE__ */ new Map();
function wn(e, r = !0) {
  ae(() => {
    var t;
    if (!r)
      return;
    let n = typeof e == "function" ? e() : e.current;
    if (!n)
      return;
    function a() {
      var o;
      if (!n)
        return;
      let d = (o = xt.get(n)) != null ? o : 1;
      if (d === 1 ? xt.delete(n) : xt.set(n, d - 1), d !== 1)
        return;
      let l = pr.get(n);
      l && (l["aria-hidden"] === null ? n.removeAttribute("aria-hidden") : n.setAttribute("aria-hidden", l["aria-hidden"]), n.inert = l.inert, pr.delete(n));
    }
    let i = (t = xt.get(n)) != null ? t : 0;
    return xt.set(n, i + 1), i !== 0 || (pr.set(n, { "aria-hidden": n.getAttribute("aria-hidden"), inert: n.inert }), n.setAttribute("aria-hidden", "true"), n.inert = !0), a;
  }, [e, r]);
}
function Hd({ defaultContainers: e = [], portals: r, mainTreeNodeRef: t } = {}) {
  var n;
  let a = A((n = t == null ? void 0 : t.current) != null ? n : null), i = Ot(a), o = P(() => {
    var d;
    let l = [];
    for (let s of e)
      s !== null && (s instanceof HTMLElement ? l.push(s) : "current" in s && s.current instanceof HTMLElement && l.push(s.current));
    if (r != null && r.current)
      for (let s of r.current)
        l.push(s);
    for (let s of (d = i == null ? void 0 : i.querySelectorAll("html > *, body > *")) != null ? d : [])
      s !== document.body && s !== document.head && s instanceof HTMLElement && s.id !== "headlessui-portal-root" && (s.contains(a.current) || l.some((c) => s.contains(c)) || l.push(s));
    return l;
  });
  return { resolveContainers: o, contains: P((d) => o().some((l) => l.contains(d))), mainTreeNodeRef: a, MainTreeNode: V(() => function() {
    return t != null ? null : S.createElement(St, { features: ht.Hidden, ref: a });
  }, [a, t]) };
}
var Wd = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Wd || {}), Vd = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(Vd || {});
let zd = { 0(e, r) {
  return e.titleId === r.id ? e : { ...e, titleId: r.id };
} }, Kt = Se(null);
Kt.displayName = "DialogContext";
function Rt(e) {
  let r = j(Kt);
  if (r === null) {
    let t = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, Rt), t;
  }
  return r;
}
function Yd(e, r, t = () => [document.body]) {
  Ud(e, r, (n) => {
    var a;
    return { containers: [...(a = n.containers) != null ? a : [], t] };
  });
}
function Kd(e, r) {
  return q(r.type, zd, e, r);
}
let Xd = "div", Zd = $t.RenderStrategy | $t.Static;
function Jd(e, r) {
  var t;
  let n = Ae(), { id: a = `headlessui-dialog-${n}`, open: i, onClose: o, initialFocus: d, __demoMode: l = !1, ...s } = e, [c, $] = W(0), p = Qt();
  i === void 0 && p !== null && (i = (p & $e.Open) === $e.Open);
  let h = A(null), m = ue(h, r), v = Ot(h), g = e.hasOwnProperty("open") || p !== null, b = e.hasOwnProperty("onClose");
  if (!g && !b)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!g)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!b)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof i != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${i}`);
  if (typeof o != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);
  let x = i ? 0 : 1, [O, L] = Na(Kd, { titleId: null, descriptionId: null, panelRef: Ca() }), Y = P(() => o(!1)), N = P((ee) => L({ type: 0, id: ee })), E = gt() ? l ? !1 : x === 0 : !1, k = c > 1, X = j(Kt) !== null, [ce, me] = md(), { resolveContainers: F, mainTreeNodeRef: Z, MainTreeNode: de } = Hd({ portals: ce, defaultContainers: [(t = O.panelRef.current) != null ? t : h.current] }), pe = k ? "parent" : "leaf", ye = p !== null ? (p & $e.Closing) === $e.Closing : !1, fe = X || ye ? !1 : E, Te = tt(() => {
    var ee, Ce;
    return (Ce = Array.from((ee = v == null ? void 0 : v.querySelectorAll("body > *")) != null ? ee : []).find((Ee) => Ee.id === "headlessui-portal-root" ? !1 : Ee.contains(Z.current) && Ee instanceof HTMLElement)) != null ? Ce : null;
  }, [Z]);
  wn(Te, fe);
  let xe = k ? !0 : E, we = tt(() => {
    var ee, Ce;
    return (Ce = Array.from((ee = v == null ? void 0 : v.querySelectorAll("[data-headlessui-portal]")) != null ? ee : []).find((Ee) => Ee.contains(Z.current) && Ee instanceof HTMLElement)) != null ? Ce : null;
  }, [Z]);
  wn(we, xe), Ra(F, Y, !(!E || k));
  let ge = !(k || x !== 0);
  Ga(v == null ? void 0 : v.defaultView, "keydown", (ee) => {
    ge && (ee.defaultPrevented || ee.key === re.Escape && (ee.preventDefault(), ee.stopPropagation(), Y()));
  }), Yd(v, !(ye || x !== 0 || X), F), G(() => {
    if (x !== 0 || !h.current)
      return;
    let ee = new ResizeObserver((Ce) => {
      for (let Ee of Ce) {
        let Qe = Ee.target.getBoundingClientRect();
        Qe.x === 0 && Qe.y === 0 && Qe.width === 0 && Qe.height === 0 && Y();
      }
    });
    return ee.observe(h.current), () => ee.disconnect();
  }, [x, h, Y]);
  let [D, B] = Za(), Q = V(() => [{ dialogState: x, close: Y, setTitleId: N }, O], [x, O, Y, N]), Re = V(() => ({ open: x === 0 }), [x]), Le = { ref: m, id: a, role: "dialog", "aria-modal": x === 0 ? !0 : void 0, "aria-labelledby": O.titleId, "aria-describedby": D };
  return S.createElement(Nd, { type: "Dialog", enabled: x === 0, element: h, onUpdate: P((ee, Ce) => {
    Ce === "Dialog" && q(ee, { [Or.Add]: () => $((Ee) => Ee + 1), [Or.Remove]: () => $((Ee) => Ee - 1) });
  }) }, S.createElement(Sr, { force: !0 }, S.createElement(Tr, null, S.createElement(Kt.Provider, { value: Q }, S.createElement(Tr.Group, { target: h }, S.createElement(Sr, { force: !1 }, S.createElement(B, { slot: Re, name: "Dialog.Description" }, S.createElement(yt, { initialFocus: d, containers: F, features: E ? q(pe, { parent: yt.features.RestoreFocus, leaf: yt.features.All & ~yt.features.FocusLock }) : yt.features.None }, S.createElement(me, null, ie({ ourProps: Le, theirProps: s, slot: Re, defaultTag: Xd, features: Zd, visible: x === 0, name: "Dialog" }))))))))), S.createElement(de, null));
}
let qd = "div";
function Qd(e, r) {
  let t = Ae(), { id: n = `headlessui-dialog-overlay-${t}`, ...a } = e, [{ dialogState: i, close: o }] = Rt("Dialog.Overlay"), d = ue(r), l = P((c) => {
    if (c.target === c.currentTarget) {
      if (Vr(c.currentTarget))
        return c.preventDefault();
      c.preventDefault(), c.stopPropagation(), o();
    }
  }), s = V(() => ({ open: i === 0 }), [i]);
  return ie({ ourProps: { ref: d, id: n, "aria-hidden": !0, onClick: l }, theirProps: a, slot: s, defaultTag: qd, name: "Dialog.Overlay" });
}
let el = "div";
function tl(e, r) {
  let t = Ae(), { id: n = `headlessui-dialog-backdrop-${t}`, ...a } = e, [{ dialogState: i }, o] = Rt("Dialog.Backdrop"), d = ue(r);
  G(() => {
    if (o.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [o.panelRef]);
  let l = V(() => ({ open: i === 0 }), [i]);
  return S.createElement(Sr, { force: !0 }, S.createElement(Tr, null, ie({ ourProps: { ref: d, id: n, "aria-hidden": !0 }, theirProps: a, slot: l, defaultTag: el, name: "Dialog.Backdrop" })));
}
let rl = "div";
function nl(e, r) {
  let t = Ae(), { id: n = `headlessui-dialog-panel-${t}`, ...a } = e, [{ dialogState: i }, o] = Rt("Dialog.Panel"), d = ue(r, o.panelRef), l = V(() => ({ open: i === 0 }), [i]), s = P((c) => {
    c.stopPropagation();
  });
  return ie({ ourProps: { ref: d, id: n, onClick: s }, theirProps: a, slot: l, defaultTag: rl, name: "Dialog.Panel" });
}
let al = "h2";
function il(e, r) {
  let t = Ae(), { id: n = `headlessui-dialog-title-${t}`, ...a } = e, [{ dialogState: i, setTitleId: o }] = Rt("Dialog.Title"), d = ue(r);
  G(() => (o(n), () => o(null)), [n, o]);
  let l = V(() => ({ open: i === 0 }), [i]);
  return ie({ ourProps: { ref: d, id: n }, theirProps: a, slot: l, defaultTag: al, name: "Dialog.Title" });
}
let ol = oe(Jd), dl = oe(tl), ll = oe(nl), sl = oe(Qd), ul = oe(il), Et = Object.assign(ol, { Backdrop: dl, Panel: ll, Overlay: sl, Title: ul, Description: Ja }), Nn = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Cn(e) {
  var r, t;
  let n = (r = e.innerText) != null ? r : "", a = e.cloneNode(!0);
  if (!(a instanceof HTMLElement))
    return n;
  let i = !1;
  for (let d of a.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    d.remove(), i = !0;
  let o = i ? (t = a.innerText) != null ? t : "" : n;
  return Nn.test(o) && (o = o.replace(Nn, "")), o;
}
function cl(e) {
  let r = e.getAttribute("aria-label");
  if (typeof r == "string")
    return r.trim();
  let t = e.getAttribute("aria-labelledby");
  if (t) {
    let n = t.split(" ").map((a) => {
      let i = document.getElementById(a);
      if (i) {
        let o = i.getAttribute("aria-label");
        return typeof o == "string" ? o.trim() : Cn(i).trim();
      }
      return null;
    }).filter(Boolean);
    if (n.length > 0)
      return n.join(", ");
  }
  return Cn(e).trim();
}
function fl(e) {
  let r = A(""), t = A("");
  return P(() => {
    let n = e.current;
    if (!n)
      return "";
    let a = n.innerText;
    if (r.current === a)
      return t.current;
    let i = cl(n).trim().toLowerCase();
    return r.current = a, t.current = i, i;
  });
}
var $l = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))($l || {}), hl = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(hl || {}), gl = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(gl || {}), ml = ((e) => (e[e.OpenListbox = 0] = "OpenListbox", e[e.CloseListbox = 1] = "CloseListbox", e[e.GoToOption = 2] = "GoToOption", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterOption = 5] = "RegisterOption", e[e.UnregisterOption = 6] = "UnregisterOption", e[e.RegisterLabel = 7] = "RegisterLabel", e))(ml || {});
function vr(e, r = (t) => t) {
  let t = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, n = Oa(r(e.options.slice()), (i) => i.dataRef.current.domRef.current), a = t ? n.indexOf(t) : null;
  return a === -1 && (a = null), { options: n, activeOptionIndex: a };
}
let pl = { 1(e) {
  return e.dataRef.current.disabled || e.listboxState === 1 ? e : { ...e, activeOptionIndex: null, listboxState: 1 };
}, 0(e) {
  if (e.dataRef.current.disabled || e.listboxState === 0)
    return e;
  let r = e.activeOptionIndex, { isSelected: t } = e.dataRef.current, n = e.options.findIndex((a) => t(a.dataRef.current.value));
  return n !== -1 && (r = n), { ...e, listboxState: 0, activeOptionIndex: r };
}, 2(e, r) {
  var t;
  if (e.dataRef.current.disabled || e.listboxState === 1)
    return e;
  let n = vr(e), a = Yo(r, { resolveItems: () => n.options, resolveActiveIndex: () => n.activeOptionIndex, resolveId: (i) => i.id, resolveDisabled: (i) => i.dataRef.current.disabled });
  return { ...e, ...n, searchQuery: "", activeOptionIndex: a, activationTrigger: (t = r.trigger) != null ? t : 1 };
}, 3: (e, r) => {
  if (e.dataRef.current.disabled || e.listboxState === 1)
    return e;
  let t = e.searchQuery !== "" ? 0 : 1, n = e.searchQuery + r.value.toLowerCase(), a = (e.activeOptionIndex !== null ? e.options.slice(e.activeOptionIndex + t).concat(e.options.slice(0, e.activeOptionIndex + t)) : e.options).find((o) => {
    var d;
    return !o.dataRef.current.disabled && ((d = o.dataRef.current.textValue) == null ? void 0 : d.startsWith(n));
  }), i = a ? e.options.indexOf(a) : -1;
  return i === -1 || i === e.activeOptionIndex ? { ...e, searchQuery: n } : { ...e, searchQuery: n, activeOptionIndex: i, activationTrigger: 1 };
}, 4(e) {
  return e.dataRef.current.disabled || e.listboxState === 1 || e.searchQuery === "" ? e : { ...e, searchQuery: "" };
}, 5: (e, r) => {
  let t = { id: r.id, dataRef: r.dataRef }, n = vr(e, (a) => [...a, t]);
  return e.activeOptionIndex === null && e.dataRef.current.isSelected(r.dataRef.current.value) && (n.activeOptionIndex = n.options.indexOf(t)), { ...e, ...n };
}, 6: (e, r) => {
  let t = vr(e, (n) => {
    let a = n.findIndex((i) => i.id === r.id);
    return a !== -1 && n.splice(a, 1), n;
  });
  return { ...e, ...t, activationTrigger: 1 };
}, 7: (e, r) => ({ ...e, labelId: r.id }) }, Xr = Se(null);
Xr.displayName = "ListboxActionsContext";
function Ft(e) {
  let r = j(Xr);
  if (r === null) {
    let t = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ft), t;
  }
  return r;
}
let Zr = Se(null);
Zr.displayName = "ListboxDataContext";
function It(e) {
  let r = j(Zr);
  if (r === null) {
    let t = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, It), t;
  }
  return r;
}
function vl(e, r) {
  return q(r.type, pl, e, r);
}
let bl = he;
function yl(e, r) {
  let { value: t, defaultValue: n, form: a, name: i, onChange: o, by: d = (D, B) => D === B, disabled: l = !1, horizontal: s = !1, multiple: c = !1, ...$ } = e;
  const p = s ? "horizontal" : "vertical";
  let h = ue(r), [m = c ? [] : void 0, v] = Ba(t, o, n), [g, b] = Na(vl, { dataRef: Ca(), listboxState: 1, options: [], searchQuery: "", labelId: null, activeOptionIndex: null, activationTrigger: 1 }), x = A({ static: !1, hold: !1 }), O = A(null), L = A(null), Y = A(null), N = P(typeof d == "string" ? (D, B) => {
    let Q = d;
    return (D == null ? void 0 : D[Q]) === (B == null ? void 0 : B[Q]);
  } : d), E = tt((D) => q(k.mode, { 1: () => m.some((B) => N(B, D)), 0: () => N(m, D) }), [m]), k = V(() => ({ ...g, value: m, disabled: l, mode: c ? 1 : 0, orientation: p, compare: N, isSelected: E, optionsPropsRef: x, labelRef: O, buttonRef: L, optionsRef: Y }), [m, l, c, g]);
  ae(() => {
    g.dataRef.current = k;
  }, [k]), Ra([k.buttonRef, k.optionsRef], (D, B) => {
    var Q;
    b({ type: 1 }), Ta(B, Wr.Loose) || (D.preventDefault(), (Q = k.buttonRef.current) == null || Q.focus());
  }, k.listboxState === 0);
  let X = V(() => ({ open: k.listboxState === 0, disabled: l, value: m }), [k, l, m]), ce = P((D) => {
    let B = k.options.find((Q) => Q.id === D);
    B && fe(B.dataRef.current.value);
  }), me = P(() => {
    if (k.activeOptionIndex !== null) {
      let { dataRef: D, id: B } = k.options[k.activeOptionIndex];
      fe(D.current.value), b({ type: 2, focus: Pe.Specific, id: B });
    }
  }), F = P(() => b({ type: 0 })), Z = P(() => b({ type: 1 })), de = P((D, B, Q) => D === Pe.Specific ? b({ type: 2, focus: Pe.Specific, id: B, trigger: Q }) : b({ type: 2, focus: D, trigger: Q })), pe = P((D, B) => (b({ type: 5, id: D, dataRef: B }), () => b({ type: 6, id: D }))), ye = P((D) => (b({ type: 7, id: D }), () => b({ type: 7, id: null }))), fe = P((D) => q(k.mode, { 0() {
    return v == null ? void 0 : v(D);
  }, 1() {
    let B = k.value.slice(), Q = B.findIndex((Re) => N(Re, D));
    return Q === -1 ? B.push(D) : B.splice(Q, 1), v == null ? void 0 : v(B);
  } })), Te = P((D) => b({ type: 3, value: D })), xe = P(() => b({ type: 4 })), we = V(() => ({ onChange: fe, registerOption: pe, registerLabel: ye, goToOption: de, closeListbox: Z, openListbox: F, selectActiveOption: me, selectOption: ce, search: Te, clearSearch: xe }), []), le = { ref: h }, ge = A(null), Ne = qe();
  return G(() => {
    ge.current && n !== void 0 && Ne.addEventListener(ge.current, "reset", () => {
      v == null || v(n);
    });
  }, [ge, v]), S.createElement(Xr.Provider, { value: we }, S.createElement(Zr.Provider, { value: k }, S.createElement(ja, { value: q(k.listboxState, { 0: $e.Open, 1: $e.Closed }) }, i != null && m != null && _a({ [i]: m }).map(([D, B], Q) => S.createElement(St, { features: ht.Hidden, ref: Q === 0 ? (Re) => {
    var Le;
    ge.current = (Le = Re == null ? void 0 : Re.closest("form")) != null ? Le : null;
  } : void 0, ...Yt({ key: D, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: a, name: D, value: B }) })), ie({ ourProps: le, theirProps: $, slot: X, defaultTag: bl, name: "Listbox" }))));
}
let xl = "button";
function wl(e, r) {
  var t;
  let n = Ae(), { id: a = `headlessui-listbox-button-${n}`, ...i } = e, o = It("Listbox.Button"), d = Ft("Listbox.Button"), l = ue(o.buttonRef, r), s = qe(), c = P((g) => {
    switch (g.key) {
      case re.Space:
      case re.Enter:
      case re.ArrowDown:
        g.preventDefault(), d.openListbox(), s.nextFrame(() => {
          o.value || d.goToOption(Pe.First);
        });
        break;
      case re.ArrowUp:
        g.preventDefault(), d.openListbox(), s.nextFrame(() => {
          o.value || d.goToOption(Pe.Last);
        });
        break;
    }
  }), $ = P((g) => {
    switch (g.key) {
      case re.Space:
        g.preventDefault();
        break;
    }
  }), p = P((g) => {
    if (Vr(g.currentTarget))
      return g.preventDefault();
    o.listboxState === 0 ? (d.closeListbox(), s.nextFrame(() => {
      var b;
      return (b = o.buttonRef.current) == null ? void 0 : b.focus({ preventScroll: !0 });
    })) : (g.preventDefault(), d.openListbox());
  }), h = Sa(() => {
    if (o.labelId)
      return [o.labelId, a].join(" ");
  }, [o.labelId, a]), m = V(() => ({ open: o.listboxState === 0, disabled: o.disabled, value: o.value }), [o]), v = { ref: l, id: a, type: Fa(e, o.buttonRef), "aria-haspopup": "listbox", "aria-controls": (t = o.optionsRef.current) == null ? void 0 : t.id, "aria-expanded": o.listboxState === 0, "aria-labelledby": h, disabled: o.disabled, onKeyDown: c, onKeyUp: $, onClick: p };
  return ie({ ourProps: v, theirProps: i, slot: m, defaultTag: xl, name: "Listbox.Button" });
}
let Nl = "label";
function Cl(e, r) {
  let t = Ae(), { id: n = `headlessui-listbox-label-${t}`, ...a } = e, i = It("Listbox.Label"), o = Ft("Listbox.Label"), d = ue(i.labelRef, r);
  ae(() => o.registerLabel(n), [n]);
  let l = P(() => {
    var c;
    return (c = i.buttonRef.current) == null ? void 0 : c.focus({ preventScroll: !0 });
  }), s = V(() => ({ open: i.listboxState === 0, disabled: i.disabled }), [i]);
  return ie({ ourProps: { ref: d, id: n, onClick: l }, theirProps: a, slot: s, defaultTag: Nl, name: "Listbox.Label" });
}
let El = "ul", Pl = $t.RenderStrategy | $t.Static;
function Sl(e, r) {
  var t;
  let n = Ae(), { id: a = `headlessui-listbox-options-${n}`, ...i } = e, o = It("Listbox.Options"), d = Ft("Listbox.Options"), l = ue(o.optionsRef, r), s = qe(), c = qe(), $ = Qt(), p = $ !== null ? ($ & $e.Open) === $e.Open : o.listboxState === 0;
  G(() => {
    var b;
    let x = o.optionsRef.current;
    x && o.listboxState === 0 && x !== ((b = Hr(x)) == null ? void 0 : b.activeElement) && x.focus({ preventScroll: !0 });
  }, [o.listboxState, o.optionsRef]);
  let h = P((b) => {
    switch (c.dispose(), b.key) {
      case re.Space:
        if (o.searchQuery !== "")
          return b.preventDefault(), b.stopPropagation(), d.search(b.key);
      case re.Enter:
        if (b.preventDefault(), b.stopPropagation(), o.activeOptionIndex !== null) {
          let { dataRef: x } = o.options[o.activeOptionIndex];
          d.onChange(x.current.value);
        }
        o.mode === 0 && (d.closeListbox(), Me().nextFrame(() => {
          var x;
          return (x = o.buttonRef.current) == null ? void 0 : x.focus({ preventScroll: !0 });
        }));
        break;
      case q(o.orientation, { vertical: re.ArrowDown, horizontal: re.ArrowRight }):
        return b.preventDefault(), b.stopPropagation(), d.goToOption(Pe.Next);
      case q(o.orientation, { vertical: re.ArrowUp, horizontal: re.ArrowLeft }):
        return b.preventDefault(), b.stopPropagation(), d.goToOption(Pe.Previous);
      case re.Home:
      case re.PageUp:
        return b.preventDefault(), b.stopPropagation(), d.goToOption(Pe.First);
      case re.End:
      case re.PageDown:
        return b.preventDefault(), b.stopPropagation(), d.goToOption(Pe.Last);
      case re.Escape:
        return b.preventDefault(), b.stopPropagation(), d.closeListbox(), s.nextFrame(() => {
          var x;
          return (x = o.buttonRef.current) == null ? void 0 : x.focus({ preventScroll: !0 });
        });
      case re.Tab:
        b.preventDefault(), b.stopPropagation();
        break;
      default:
        b.key.length === 1 && (d.search(b.key), c.setTimeout(() => d.clearSearch(), 350));
        break;
    }
  }), m = Sa(() => {
    var b, x, O;
    return (O = (b = o.labelRef.current) == null ? void 0 : b.id) != null ? O : (x = o.buttonRef.current) == null ? void 0 : x.id;
  }, [o.labelRef.current, o.buttonRef.current]), v = V(() => ({ open: o.listboxState === 0 }), [o]), g = { "aria-activedescendant": o.activeOptionIndex === null || (t = o.options[o.activeOptionIndex]) == null ? void 0 : t.id, "aria-multiselectable": o.mode === 1 ? !0 : void 0, "aria-labelledby": m, "aria-orientation": o.orientation, id: a, onKeyDown: h, role: "listbox", tabIndex: 0, ref: l };
  return ie({ ourProps: g, theirProps: i, slot: v, defaultTag: El, features: Pl, visible: p, name: "Listbox.Options" });
}
let kl = "li";
function Tl(e, r) {
  let t = Ae(), { id: n = `headlessui-listbox-option-${t}`, disabled: a = !1, value: i, ...o } = e, d = It("Listbox.Option"), l = Ft("Listbox.Option"), s = d.activeOptionIndex !== null ? d.options[d.activeOptionIndex].id === n : !1, c = d.isSelected(i), $ = A(null), p = fl($), h = De({ disabled: a, value: i, domRef: $, get textValue() {
    return p();
  } }), m = ue(r, $);
  ae(() => {
    if (d.listboxState !== 0 || !s || d.activationTrigger === 0)
      return;
    let N = Me();
    return N.requestAnimationFrame(() => {
      var E, k;
      (k = (E = $.current) == null ? void 0 : E.scrollIntoView) == null || k.call(E, { block: "nearest" });
    }), N.dispose;
  }, [$, s, d.listboxState, d.activationTrigger, d.activeOptionIndex]), ae(() => l.registerOption(n, h), [h, n]);
  let v = P((N) => {
    if (a)
      return N.preventDefault();
    l.onChange(i), d.mode === 0 && (l.closeListbox(), Me().nextFrame(() => {
      var E;
      return (E = d.buttonRef.current) == null ? void 0 : E.focus({ preventScroll: !0 });
    }));
  }), g = P(() => {
    if (a)
      return l.goToOption(Pe.Nothing);
    l.goToOption(Pe.Specific, n);
  }), b = Qo(), x = P((N) => b.update(N)), O = P((N) => {
    b.wasMoved(N) && (a || s || l.goToOption(Pe.Specific, n, 0));
  }), L = P((N) => {
    b.wasMoved(N) && (a || s && l.goToOption(Pe.Nothing));
  }), Y = V(() => ({ active: s, selected: c, disabled: a }), [s, c, a]);
  return ie({ ourProps: { id: n, ref: m, role: "option", tabIndex: a === !0 ? void 0 : -1, "aria-disabled": a === !0 ? !0 : void 0, "aria-selected": c, disabled: void 0, onClick: v, onFocus: g, onPointerEnter: x, onMouseEnter: x, onPointerMove: O, onMouseMove: O, onPointerLeave: L, onMouseLeave: L }, theirProps: o, slot: Y, defaultTag: kl, name: "Listbox.Option" });
}
let Ol = oe(yl), Al = oe(wl), Rl = oe(Cl), Fl = oe(Sl), Il = oe(Tl), Ze = Object.assign(Ol, { Button: Al, Label: Rl, Options: Fl, Option: Il });
function Dl(e = 0) {
  let [r, t] = W(e), n = At(), a = tt((l) => {
    n.current && t((s) => s | l);
  }, [r, n]), i = tt((l) => !!(r & l), [r]), o = tt((l) => {
    n.current && t((s) => s & ~l);
  }, [t, n]), d = tt((l) => {
    n.current && t((s) => s ^ l);
  }, [t]);
  return { flags: r, addFlag: a, hasFlag: i, removeFlag: o, toggleFlag: d };
}
let qa = Se(null);
function Qa() {
  let e = j(qa);
  if (e === null) {
    let r = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(r, Qa), r;
  }
  return e;
}
function _l() {
  let [e, r] = W([]);
  return [e.length > 0 ? e.join(" ") : void 0, V(() => function(t) {
    let n = P((i) => (r((o) => [...o, i]), () => r((o) => {
      let d = o.slice(), l = d.indexOf(i);
      return l !== -1 && d.splice(l, 1), d;
    }))), a = V(() => ({ register: n, slot: t.slot, name: t.name, props: t.props }), [n, t.slot, t.name, t.props]);
    return S.createElement(qa.Provider, { value: a }, t.children);
  }, [r])];
}
let Ml = "label";
function Ll(e, r) {
  let t = Ae(), { id: n = `headlessui-label-${t}`, passive: a = !1, ...i } = e, o = Qa(), d = ue(r);
  ae(() => o.register(n), [n, o.register]);
  let l = { ref: d, ...o.props, id: n };
  return a && ("onClick" in l && (delete l.htmlFor, delete l.onClick), "onClick" in i && delete i.onClick), ie({ ourProps: l, theirProps: i, slot: o.slot || {}, defaultTag: Ml, name: o.name || "Label" });
}
let jl = oe(Ll), Bl = Object.assign(jl, {}), Jr = Se(null);
Jr.displayName = "GroupContext";
let Gl = he;
function Ul(e) {
  var r;
  let [t, n] = W(null), [a, i] = _l(), [o, d] = Za(), l = V(() => ({ switch: t, setSwitch: n, labelledby: a, describedby: o }), [t, n, a, o]), s = {}, c = e;
  return S.createElement(d, { name: "Switch.Description" }, S.createElement(i, { name: "Switch.Label", props: { htmlFor: (r = l.switch) == null ? void 0 : r.id, onClick($) {
    t && ($.currentTarget.tagName === "LABEL" && $.preventDefault(), t.click(), t.focus({ preventScroll: !0 }));
  } } }, S.createElement(Jr.Provider, { value: l }, ie({ ourProps: s, theirProps: c, defaultTag: Gl, name: "Switch.Group" }))));
}
let Hl = "button";
function Wl(e, r) {
  let t = Ae(), { id: n = `headlessui-switch-${t}`, checked: a, defaultChecked: i = !1, onChange: o, name: d, value: l, form: s, ...c } = e, $ = j(Jr), p = A(null), h = ue(p, r, $ === null ? null : $.setSwitch), [m, v] = Ba(a, o, i), g = P(() => v == null ? void 0 : v(!m)), b = P((E) => {
    if (Vr(E.currentTarget))
      return E.preventDefault();
    E.preventDefault(), g();
  }), x = P((E) => {
    E.key === re.Space ? (E.preventDefault(), g()) : E.key === re.Enter && Zo(E.currentTarget);
  }), O = P((E) => E.preventDefault()), L = V(() => ({ checked: m }), [m]), Y = { id: n, ref: h, role: "switch", type: Fa(e, p), tabIndex: 0, "aria-checked": m, "aria-labelledby": $ == null ? void 0 : $.labelledby, "aria-describedby": $ == null ? void 0 : $.describedby, onClick: b, onKeyUp: x, onKeyPress: O }, N = qe();
  return G(() => {
    var E;
    let k = (E = p.current) == null ? void 0 : E.closest("form");
    k && i !== void 0 && N.addEventListener(k, "reset", () => {
      v(i);
    });
  }, [p, v]), S.createElement(S.Fragment, null, d != null && m && S.createElement(St, { features: ht.Hidden, ...Yt({ as: "input", type: "checkbox", hidden: !0, readOnly: !0, form: s, checked: m, name: d, value: l }) }), ie({ ourProps: Y, theirProps: c, slot: L, defaultTag: Hl, name: "Switch" }));
}
let Vl = oe(Wl), zl = Ul, Bt = Object.assign(Vl, { Group: zl, Label: Bl, Description: Ja });
function Yl(e) {
  let r = { called: !1 };
  return (...t) => {
    if (!r.called)
      return r.called = !0, e(...t);
  };
}
function br(e, ...r) {
  e && r.length > 0 && e.classList.add(...r);
}
function yr(e, ...r) {
  e && r.length > 0 && e.classList.remove(...r);
}
function Kl(e, r) {
  let t = Me();
  if (!e)
    return t.dispose;
  let { transitionDuration: n, transitionDelay: a } = getComputedStyle(e), [i, o] = [n, a].map((l) => {
    let [s = 0] = l.split(",").filter(Boolean).map((c) => c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3).sort((c, $) => $ - c);
    return s;
  }), d = i + o;
  if (d !== 0) {
    t.group((s) => {
      s.setTimeout(() => {
        r(), s.dispose();
      }, d), s.addEventListener(e, "transitionrun", (c) => {
        c.target === c.currentTarget && s.dispose();
      });
    });
    let l = t.addEventListener(e, "transitionend", (s) => {
      s.target === s.currentTarget && (r(), l());
    });
  } else
    r();
  return t.add(() => r()), t.dispose;
}
function Xl(e, r, t, n) {
  let a = t ? "enter" : "leave", i = Me(), o = n !== void 0 ? Yl(n) : () => {
  };
  a === "enter" && (e.removeAttribute("hidden"), e.style.display = "");
  let d = q(a, { enter: () => r.enter, leave: () => r.leave }), l = q(a, { enter: () => r.enterTo, leave: () => r.leaveTo }), s = q(a, { enter: () => r.enterFrom, leave: () => r.leaveFrom });
  return yr(e, ...r.base, ...r.enter, ...r.enterTo, ...r.enterFrom, ...r.leave, ...r.leaveFrom, ...r.leaveTo, ...r.entered), br(e, ...r.base, ...d, ...s), i.nextFrame(() => {
    yr(e, ...r.base, ...d, ...s), br(e, ...r.base, ...d, ...l), Kl(e, () => (yr(e, ...r.base, ...d), br(e, ...r.base, ...r.entered), o()));
  }), i.dispose;
}
function Zl({ immediate: e, container: r, direction: t, classes: n, onStart: a, onStop: i }) {
  let o = At(), d = qe(), l = De(t);
  ae(() => {
    e && (l.current = "enter");
  }, [e]), ae(() => {
    let s = Me();
    d.add(s.dispose);
    let c = r.current;
    if (c && l.current !== "idle" && o.current)
      return s.dispose(), a.current(l.current), s.add(Xl(c, n.current, l.current === "enter", () => {
        s.dispose(), i.current(l.current);
      })), s.dispose;
  }, [t]);
}
function He(e = "") {
  return e.split(" ").filter((r) => r.trim().length > 1);
}
let er = Se(null);
er.displayName = "TransitionContext";
var Jl = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Jl || {});
function ql() {
  let e = j(er);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function Ql() {
  let e = j(tr);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let tr = Se(null);
tr.displayName = "NestingContext";
function rr(e) {
  return "children" in e ? rr(e.children) : e.current.filter(({ el: r }) => r.current !== null).filter(({ state: r }) => r === "visible").length > 0;
}
function ei(e, r) {
  let t = De(e), n = A([]), a = At(), i = qe(), o = P((h, m = Xe.Hidden) => {
    let v = n.current.findIndex(({ el: g }) => g === h);
    v !== -1 && (q(m, { [Xe.Unmount]() {
      n.current.splice(v, 1);
    }, [Xe.Hidden]() {
      n.current[v].state = "hidden";
    } }), i.microTask(() => {
      var g;
      !rr(n) && a.current && ((g = t.current) == null || g.call(t));
    }));
  }), d = P((h) => {
    let m = n.current.find(({ el: v }) => v === h);
    return m ? m.state !== "visible" && (m.state = "visible") : n.current.push({ el: h, state: "visible" }), () => o(h, Xe.Unmount);
  }), l = A([]), s = A(Promise.resolve()), c = A({ enter: [], leave: [], idle: [] }), $ = P((h, m, v) => {
    l.current.splice(0), r && (r.chains.current[m] = r.chains.current[m].filter(([g]) => g !== h)), r == null || r.chains.current[m].push([h, new Promise((g) => {
      l.current.push(g);
    })]), r == null || r.chains.current[m].push([h, new Promise((g) => {
      Promise.all(c.current[m].map(([b, x]) => x)).then(() => g());
    })]), m === "enter" ? s.current = s.current.then(() => r == null ? void 0 : r.wait.current).then(() => v(m)) : v(m);
  }), p = P((h, m, v) => {
    Promise.all(c.current[m].splice(0).map(([g, b]) => b)).then(() => {
      var g;
      (g = l.current.shift()) == null || g();
    }).then(() => v(m));
  });
  return V(() => ({ children: n, register: d, unregister: o, onStart: $, onStop: p, wait: s, chains: c }), [d, o, n, $, p, c, s]);
}
function es() {
}
let ts = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function En(e) {
  var r;
  let t = {};
  for (let n of ts)
    t[n] = (r = e[n]) != null ? r : es;
  return t;
}
function rs(e) {
  let r = A(En(e));
  return G(() => {
    r.current = En(e);
  }, [e]), r;
}
let ns = "div", ti = $t.RenderStrategy;
function as(e, r) {
  var t, n;
  let { beforeEnter: a, afterEnter: i, beforeLeave: o, afterLeave: d, enter: l, enterFrom: s, enterTo: c, entered: $, leave: p, leaveFrom: h, leaveTo: m, ...v } = e, g = A(null), b = ue(g, r), x = (t = v.unmount) == null || t ? Xe.Unmount : Xe.Hidden, { show: O, appear: L, initial: Y } = ql(), [N, E] = W(O ? "visible" : "hidden"), k = Ql(), { register: X, unregister: ce } = k;
  G(() => X(g), [X, g]), G(() => {
    if (x === Xe.Hidden && g.current) {
      if (O && N !== "visible") {
        E("visible");
        return;
      }
      return q(N, { hidden: () => ce(g), visible: () => X(g) });
    }
  }, [N, g, X, ce, O, x]);
  let me = De({ base: He(v.className), enter: He(l), enterFrom: He(s), enterTo: He(c), entered: He($), leave: He(p), leaveFrom: He(h), leaveTo: He(m) }), F = rs({ beforeEnter: a, afterEnter: i, beforeLeave: o, afterLeave: d }), Z = gt();
  G(() => {
    if (Z && N === "visible" && g.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [g, N, Z]);
  let de = Y && !L, pe = L && O && Y, ye = !Z || de ? "idle" : O ? "enter" : "leave", fe = Dl(0), Te = P((Ne) => q(Ne, { enter: () => {
    fe.addFlag($e.Opening), F.current.beforeEnter();
  }, leave: () => {
    fe.addFlag($e.Closing), F.current.beforeLeave();
  }, idle: () => {
  } })), xe = P((Ne) => q(Ne, { enter: () => {
    fe.removeFlag($e.Opening), F.current.afterEnter();
  }, leave: () => {
    fe.removeFlag($e.Closing), F.current.afterLeave();
  }, idle: () => {
  } })), we = ei(() => {
    E("hidden"), ce(g);
  }, k);
  Zl({ immediate: pe, container: g, classes: me, direction: ye, onStart: De((Ne) => {
    we.onStart(g, Ne, Te);
  }), onStop: De((Ne) => {
    we.onStop(g, Ne, xe), Ne === "leave" && !rr(we) && (E("hidden"), ce(g));
  }) });
  let le = v, ge = { ref: b };
  return pe ? le = { ...le, className: zt(v.className, ...me.current.enter, ...me.current.enterFrom) } : (le.className = zt(v.className, (n = g.current) == null ? void 0 : n.className), le.className === "" && delete le.className), S.createElement(tr.Provider, { value: we }, S.createElement(ja, { value: q(N, { visible: $e.Open, hidden: $e.Closed }) | fe.flags }, ie({ ourProps: ge, theirProps: le, defaultTag: ns, features: ti, visible: N === "visible", name: "Transition.Child" })));
}
function is(e, r) {
  let { show: t, appear: n = !1, unmount: a = !0, ...i } = e, o = A(null), d = ue(o, r);
  gt();
  let l = Qt();
  if (t === void 0 && l !== null && (t = (l & $e.Open) === $e.Open), ![!0, !1].includes(t))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [s, c] = W(t ? "visible" : "hidden"), $ = ei(() => {
    c("hidden");
  }), [p, h] = W(!0), m = A([t]);
  ae(() => {
    p !== !1 && m.current[m.current.length - 1] !== t && (m.current.push(t), h(!1));
  }, [m, t]);
  let v = V(() => ({ show: t, appear: n, initial: p }), [t, n, p]);
  G(() => {
    if (t)
      c("visible");
    else if (!rr($))
      c("hidden");
    else {
      let O = o.current;
      if (!O)
        return;
      let L = O.getBoundingClientRect();
      L.x === 0 && L.y === 0 && L.width === 0 && L.height === 0 && c("hidden");
    }
  }, [t, $]);
  let g = { unmount: a }, b = P(() => {
    var O;
    p && h(!1), (O = e.beforeEnter) == null || O.call(e);
  }), x = P(() => {
    var O;
    p && h(!1), (O = e.beforeLeave) == null || O.call(e);
  });
  return S.createElement(tr.Provider, { value: $ }, S.createElement(er.Provider, { value: v }, ie({ ourProps: { ...g, as: he, children: S.createElement(ri, { ref: d, ...g, ...i, beforeEnter: b, beforeLeave: x }) }, theirProps: {}, defaultTag: he, features: ti, visible: s === "visible", name: "Transition" })));
}
function os(e, r) {
  let t = j(er) !== null, n = Qt() !== null;
  return S.createElement(S.Fragment, null, !t && n ? S.createElement(Ar, { ref: r, ...e }) : S.createElement(ri, { ref: r, ...e }));
}
let Ar = oe(is), ri = oe(as), ds = oe(os), Je = Object.assign(Ar, { Child: ds, Root: Ar });
function ls({
  title: e,
  titleId: r,
  ...t
}, n) {
  return /* @__PURE__ */ C.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: n,
    "aria-labelledby": r
  }, t), e ? /* @__PURE__ */ C.createElement("title", {
    id: r
  }, e) : null, /* @__PURE__ */ C.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
  }));
}
const ss = C.forwardRef(ls), us = ss;
function cs({
  title: e,
  titleId: r,
  ...t
}, n) {
  return /* @__PURE__ */ C.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: n,
    "aria-labelledby": r
  }, t), e ? /* @__PURE__ */ C.createElement("title", {
    id: r
  }, e) : null, /* @__PURE__ */ C.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18L18 6M6 6l12 12"
  }));
}
const fs = C.forwardRef(cs), $s = fs, c1 = ({
  open: e,
  onClose: r,
  onConfirm: t,
  title: n,
  message: a,
  confirmLabel: i = "OK",
  cancelLabel: o = "Avbryt"
}) => {
  const d = A(null);
  return /* @__PURE__ */ f.jsx(Je.Root, { show: e, as: he, children: /* @__PURE__ */ f.jsxs(Et, { as: "div", className: "relative z-10", initialFocus: d, onClose: r, children: [
    /* @__PURE__ */ f.jsx(
      Je.Child,
      {
        as: he,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ f.jsx("div", { className: "fixed inset-0 bg-gray-500/75 transition-opacity dark:bg-slate-700/75" })
      }
    ),
    /* @__PURE__ */ f.jsx("div", { className: "fixed inset-0 z-10 overflow-y-auto", children: /* @__PURE__ */ f.jsx("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0", children: /* @__PURE__ */ f.jsx(
      Je.Child,
      {
        as: he,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
        enterTo: "opacity-100 translate-y-0 sm:scale-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
        leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
        children: /* @__PURE__ */ f.jsxs(Et.Panel, { className: "relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 dark:bg-slate-800", children: [
          /* @__PURE__ */ f.jsxs("div", { className: "sm:flex sm:items-start", children: [
            /* @__PURE__ */ f.jsx("div", { className: "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10 dark:bg-red-600", children: /* @__PURE__ */ f.jsx(
              us,
              {
                className: "h-6 w-6 text-red-600 dark:text-red-100",
                "aria-hidden": "true"
              }
            ) }),
            /* @__PURE__ */ f.jsxs("div", { className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:!text-left", children: [
              /* @__PURE__ */ f.jsx(
                Et.Title,
                {
                  as: "h3",
                  className: "font-roboto text-lg font-medium leading-6 text-gray-900 dark:text-slate-200",
                  children: n
                }
              ),
              /* @__PURE__ */ f.jsx("div", { className: "mt-2", children: /* @__PURE__ */ f.jsx("p", { className: "font-roboto text-sm text-gray-500 dark:text-slate-300", children: a }) })
            ] })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { className: "mt-5 sm:mt-4 sm:flex sm:flex-row-reverse", children: [
            /* @__PURE__ */ f.jsx(
              vn,
              {
                type: Ye.DANGER,
                onClick: t,
                extraClassNames: "w-full sm:ml-3 sm:!w-auto",
                text: i
              }
            ),
            /* @__PURE__ */ f.jsx(
              vn,
              {
                type: Ye.ACCENT,
                onClick: r,
                extraClassNames: "mt-3 w-full sm:mt-0 sm:!w-auto",
                text: o
              }
            )
          ] })
        ] })
      }
    ) }) })
  ] }) });
}, qr = "-";
function hs(e) {
  const r = ms(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: n
  } = e;
  function a(o) {
    const d = o.split(qr);
    return d[0] === "" && d.length !== 1 && d.shift(), ni(d, r) || gs(o);
  }
  function i(o, d) {
    const l = t[o] || [];
    return d && n[o] ? [...l, ...n[o]] : l;
  }
  return {
    getClassGroupId: a,
    getConflictingClassGroupIds: i
  };
}
function ni(e, r) {
  var o;
  if (e.length === 0)
    return r.classGroupId;
  const t = e[0], n = r.nextPart.get(t), a = n ? ni(e.slice(1), n) : void 0;
  if (a)
    return a;
  if (r.validators.length === 0)
    return;
  const i = e.join(qr);
  return (o = r.validators.find(({
    validator: d
  }) => d(i))) == null ? void 0 : o.classGroupId;
}
const Pn = /^\[(.+)\]$/;
function gs(e) {
  if (Pn.test(e)) {
    const r = Pn.exec(e)[1], t = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}
function ms(e) {
  const {
    theme: r,
    prefix: t
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return vs(Object.entries(e.classGroups), t).forEach(([i, o]) => {
    Rr(o, n, i, r);
  }), n;
}
function Rr(e, r, t, n) {
  e.forEach((a) => {
    if (typeof a == "string") {
      const i = a === "" ? r : Sn(r, a);
      i.classGroupId = t;
      return;
    }
    if (typeof a == "function") {
      if (ps(a)) {
        Rr(a(n), r, t, n);
        return;
      }
      r.validators.push({
        validator: a,
        classGroupId: t
      });
      return;
    }
    Object.entries(a).forEach(([i, o]) => {
      Rr(o, Sn(r, i), t, n);
    });
  });
}
function Sn(e, r) {
  let t = e;
  return r.split(qr).forEach((n) => {
    t.nextPart.has(n) || t.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(n);
  }), t;
}
function ps(e) {
  return e.isThemeGetter;
}
function vs(e, r) {
  return r ? e.map(([t, n]) => {
    const a = n.map((i) => typeof i == "string" ? r + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([o, d]) => [r + o, d])) : i);
    return [t, a];
  }) : e;
}
function bs(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function a(i, o) {
    t.set(i, o), r++, r > e && (r = 0, n = t, t = /* @__PURE__ */ new Map());
  }
  return {
    get(i) {
      let o = t.get(i);
      if (o !== void 0)
        return o;
      if ((o = n.get(i)) !== void 0)
        return a(i, o), o;
    },
    set(i, o) {
      t.has(i) ? t.set(i, o) : a(i, o);
    }
  };
}
const ai = "!";
function ys(e) {
  const r = e.separator, t = r.length === 1, n = r[0], a = r.length;
  return function(o) {
    const d = [];
    let l = 0, s = 0, c;
    for (let v = 0; v < o.length; v++) {
      let g = o[v];
      if (l === 0) {
        if (g === n && (t || o.slice(v, v + a) === r)) {
          d.push(o.slice(s, v)), s = v + a;
          continue;
        }
        if (g === "/") {
          c = v;
          continue;
        }
      }
      g === "[" ? l++ : g === "]" && l--;
    }
    const $ = d.length === 0 ? o : o.substring(s), p = $.startsWith(ai), h = p ? $.substring(1) : $, m = c && c > s ? c - s : void 0;
    return {
      modifiers: d,
      hasImportantModifier: p,
      baseClassName: h,
      maybePostfixModifierPosition: m
    };
  };
}
function xs(e) {
  if (e.length <= 1)
    return e;
  const r = [];
  let t = [];
  return e.forEach((n) => {
    n[0] === "[" ? (r.push(...t.sort(), n), t = []) : t.push(n);
  }), r.push(...t.sort()), r;
}
function ws(e) {
  return {
    cache: bs(e.cacheSize),
    splitModifiers: ys(e),
    ...hs(e)
  };
}
const Ns = /\s+/;
function Cs(e, r) {
  const {
    splitModifiers: t,
    getClassGroupId: n,
    getConflictingClassGroupIds: a
  } = r, i = /* @__PURE__ */ new Set();
  return e.trim().split(Ns).map((o) => {
    const {
      modifiers: d,
      hasImportantModifier: l,
      baseClassName: s,
      maybePostfixModifierPosition: c
    } = t(o);
    let $ = n(c ? s.substring(0, c) : s), p = !!c;
    if (!$) {
      if (!c)
        return {
          isTailwindClass: !1,
          originalClassName: o
        };
      if ($ = n(s), !$)
        return {
          isTailwindClass: !1,
          originalClassName: o
        };
      p = !1;
    }
    const h = xs(d).join(":");
    return {
      isTailwindClass: !0,
      modifierId: l ? h + ai : h,
      classGroupId: $,
      originalClassName: o,
      hasPostfixModifier: p
    };
  }).reverse().filter((o) => {
    if (!o.isTailwindClass)
      return !0;
    const {
      modifierId: d,
      classGroupId: l,
      hasPostfixModifier: s
    } = o, c = d + l;
    return i.has(c) ? !1 : (i.add(c), a(l, s).forEach(($) => i.add(d + $)), !0);
  }).reverse().map((o) => o.originalClassName).join(" ");
}
function Es() {
  let e = 0, r, t, n = "";
  for (; e < arguments.length; )
    (r = arguments[e++]) && (t = ii(r)) && (n && (n += " "), n += t);
  return n;
}
function ii(e) {
  if (typeof e == "string")
    return e;
  let r, t = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (r = ii(e[n])) && (t && (t += " "), t += r);
  return t;
}
function Ps(e, ...r) {
  let t, n, a, i = o;
  function o(l) {
    const s = r.reduce((c, $) => $(c), e());
    return t = ws(s), n = t.cache.get, a = t.cache.set, i = d, d(l);
  }
  function d(l) {
    const s = n(l);
    if (s)
      return s;
    const c = Cs(l, t);
    return a(l, c), c;
  }
  return function() {
    return i(Es.apply(null, arguments));
  };
}
function z(e) {
  const r = (t) => t[e] || [];
  return r.isThemeGetter = !0, r;
}
const oi = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ss = /^\d+\/\d+$/, ks = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ts = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Os = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, As = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Rs = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Fe(e) {
  return nt(e) || ks.has(e) || Ss.test(e);
}
function We(e) {
  return mt(e, "length", Bs);
}
function nt(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Gt(e) {
  return mt(e, "number", nt);
}
function wt(e) {
  return !!e && Number.isInteger(Number(e));
}
function Fs(e) {
  return e.endsWith("%") && nt(e.slice(0, -1));
}
function R(e) {
  return oi.test(e);
}
function Ve(e) {
  return Ts.test(e);
}
const Is = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Ds(e) {
  return mt(e, Is, di);
}
function _s(e) {
  return mt(e, "position", di);
}
const Ms = /* @__PURE__ */ new Set(["image", "url"]);
function Ls(e) {
  return mt(e, Ms, Us);
}
function js(e) {
  return mt(e, "", Gs);
}
function Nt() {
  return !0;
}
function mt(e, r, t) {
  const n = oi.exec(e);
  return n ? n[1] ? typeof r == "string" ? n[1] === r : r.has(n[1]) : t(n[2]) : !1;
}
function Bs(e) {
  return Os.test(e);
}
function di() {
  return !1;
}
function Gs(e) {
  return As.test(e);
}
function Us(e) {
  return Rs.test(e);
}
function Hs() {
  const e = z("colors"), r = z("spacing"), t = z("blur"), n = z("brightness"), a = z("borderColor"), i = z("borderRadius"), o = z("borderSpacing"), d = z("borderWidth"), l = z("contrast"), s = z("grayscale"), c = z("hueRotate"), $ = z("invert"), p = z("gap"), h = z("gradientColorStops"), m = z("gradientColorStopPositions"), v = z("inset"), g = z("margin"), b = z("opacity"), x = z("padding"), O = z("saturate"), L = z("scale"), Y = z("sepia"), N = z("skew"), E = z("space"), k = z("translate"), X = () => ["auto", "contain", "none"], ce = () => ["auto", "hidden", "clip", "visible", "scroll"], me = () => ["auto", R, r], F = () => [R, r], Z = () => ["", Fe, We], de = () => ["auto", nt, R], pe = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ye = () => ["solid", "dashed", "dotted", "double", "none"], fe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], Te = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], xe = () => ["", "0", R], we = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], le = () => [nt, Gt], ge = () => [nt, R];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Nt],
      spacing: [Fe, We],
      blur: ["none", "", Ve, R],
      brightness: le(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Ve, R],
      borderSpacing: F(),
      borderWidth: Z(),
      contrast: le(),
      grayscale: xe(),
      hueRotate: ge(),
      invert: xe(),
      gap: F(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Fs, We],
      inset: me(),
      margin: me(),
      opacity: le(),
      padding: F(),
      saturate: le(),
      scale: le(),
      sepia: xe(),
      skew: ge(),
      space: F(),
      translate: F()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", R]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Ve]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": we()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": we()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...pe(), R]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ce()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ce()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ce()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: X()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": X()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": X()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [v]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [v]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [v]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [v]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [v]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [v]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [v]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [v]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [v]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", wt, R]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: me()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", R]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: xe()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: xe()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", wt, R]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Nt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", wt, R]
        }, R]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": de()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": de()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Nt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [wt, R]
        }, R]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": de()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": de()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", R]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", R]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [p]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [p]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [p]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...Te()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Te(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...Te(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [x]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [x]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [x]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [x]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [x]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [x]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [x]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [x]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [x]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [g]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [g]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [g]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [g]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [g]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [g]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [g]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [g]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [g]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [E]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [E]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", R, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", R, Fe]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [Ve]
        }, Ve, R]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [R, r, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", Fe, R]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [R, r, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Ve, We]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Gt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Nt]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", R]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", nt, Gt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Fe, R]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", R]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", R]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [b]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [b]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...ye(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Fe, We]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Fe, R]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: F()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", R]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", R]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [b]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...pe(), _s]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Ds]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Ls]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [m]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [m]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [d]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [d]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [d]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [d]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [d]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [d]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [d]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [d]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [d]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [b]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ye(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [d]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [d]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [b]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: ye()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [a]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [a]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [a]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [a]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [a]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [a]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [a]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [a]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...ye()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Fe, R]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Fe, We]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: Z()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [b]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Fe, We]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Ve, js]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Nt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [b]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": fe()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": fe()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [t]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Ve, R]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [s]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [c]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [$]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [O]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [Y]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [t]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [s]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [c]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [$]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [b]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [O]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [Y]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [o]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [o]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [o]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", R]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ge()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", R]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ge()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", R]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [L]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [L]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [L]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [wt, R]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [k]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [k]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [N]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [N]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", R]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", R]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": F()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": F()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": F()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": F()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": F()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": F()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": F()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": F()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": F()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": F()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": F()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": F()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": F()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": F()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": F()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": F()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": F()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": F()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", R]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Fe, We, Gt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const H = /* @__PURE__ */ Ps(Hs), Qr = {
  autoHide: !0,
  todayBtn: !0,
  clearBtn: !0,
  todayBtnText: "Idag",
  clearBtnText: "Rensa",
  theme: {
    background: "",
    todayBtn: "",
    clearBtn: "",
    icons: "",
    text: "",
    disabledText: "",
    input: "",
    inputIcon: "",
    selected: ""
  },
  datepickerClassNames: "",
  defaultDate: /* @__PURE__ */ new Date(),
  language: "sv",
  weekDays: ["Må", "Ti", "On", "To", "Fr", "Lö", "Sö"],
  inputNameProp: "date",
  inputIdProp: "date",
  inputPlaceholderProp: "Välj datum",
  inputDateFormatProp: {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }
}, Ws = (e, r, t) => {
  const n = /* @__PURE__ */ new Date(0);
  return n.setFullYear(e, r, t), n.setHours(12, 0, 0, 0);
}, li = (e, r) => {
  const t = new Date(e);
  return t.setDate(t.getDate() + r);
}, kn = (e, r) => (e - r + 7) % 7, Vs = (e, r, t = 0) => {
  const n = new Date(e).getDay();
  return li(e, kn(r, t) - kn(n, t));
}, si = (e, r) => {
  const t = e, n = t.getMonth() + r;
  let a = n % 12;
  a < 0 && (a += 12);
  const i = t.setMonth(n);
  return t.getMonth() !== a ? t.setDate(0) : i;
}, ct = (e, r) => {
  const t = e, n = t.getMonth(), a = t.setFullYear(t.getFullYear() + r);
  return n === 1 && t.getMonth() === 2 ? t.setDate(0) : a;
}, zs = (e, r, t) => {
  let n = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  };
  return t && (n = t), new Intl.DateTimeFormat(e, n).format(r);
}, ui = (e, r, t) => {
  switch (e) {
    case "days":
      return si(r, t);
    case "months":
      return ct(r, t);
    case "years":
      return ct(r, t * 10);
    case "decades":
      return ct(r, t * 100);
    default:
      return ct(r, t * 10);
  }
}, ft = (e, r) => {
  const t = e.getFullYear();
  return Math.floor(t / r) * r;
}, ke = Se({
  options: Qr,
  view: "days",
  setView: () => {
  },
  show: !1,
  setShow: () => {
  },
  selectedDate: /* @__PURE__ */ new Date(),
  changeSelectedDate: () => {
  },
  showSelectedDate: !0,
  setShowSelectedDate: () => {
  },
  selectedMonth: 0,
  selectedYear: 0,
  getFormattedDate: () => ""
}), Ys = ({
  children: e,
  options: r,
  onChange: t,
  show: n,
  setShow: a,
  selectedDateState: i
}) => {
  const o = { ...Qr, ...r }, [d, l] = W("days"), [s, c] = i || W((o == null ? void 0 : o.defaultDate) || /* @__PURE__ */ new Date()), [$, p] = W((o == null ? void 0 : o.defaultDate) !== null);
  G(() => {
    p(s.toISOString() !== "0001-01-01T00:00:00.000Z");
  }, [s]);
  const h = s.getMonth(), m = s.getFullYear(), v = (b, x) => {
    o != null && o.maxDate && x > o.maxDate || o != null && o.minDate && x < o.minDate || o != null && o.disabledDates && o.disabledDates.indexOf(x) >= 0 || (c(x), p(!0), o != null && o.autoHide && d === "days" && b === "date" && a(!1), t && t(x));
  }, g = (b, x) => zs(o != null && o.language ? o == null ? void 0 : o.language : "sv", b, x);
  return /* @__PURE__ */ f.jsx(
    ke.Provider,
    {
      value: {
        options: o,
        view: d,
        setView: l,
        show: n,
        setShow: a,
        selectedDate: s,
        changeSelectedDate: v,
        showSelectedDate: $,
        setShowSelectedDate: p,
        selectedMonth: h,
        selectedYear: m,
        getFormattedDate: g
      },
      children: e
    }
  );
}, Ks = () => {
  var a, i, o;
  const { selectedDate: e, changeSelectedDate: r, view: t, options: n } = j(ke);
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      type: "button",
      className: H(
        "rounded-lg bg-white p-2.5 font-roboto text-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white",
        (a = n == null ? void 0 : n.theme) == null ? void 0 : a.icons
      ),
      onClick: () => r("prev", new Date(ui(t, e, -1))),
      children: (i = n == null ? void 0 : n.icons) != null && i.prev ? (o = n == null ? void 0 : n.icons) == null ? void 0 : o.prev() : /* @__PURE__ */ f.jsx(
        "svg",
        {
          className: "h-4 w-4",
          fill: "currentColor",
          viewBox: "0 0 20 20",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ f.jsx(
            "path",
            {
              fillRule: "evenodd",
              d: "M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z",
              clipRule: "evenodd"
            }
          )
        }
      )
    }
  );
}, Xs = () => {
  var o;
  const { selectedDate: e, view: r, setView: t, options: n, getFormattedDate: a } = j(ke), i = () => r === "days" ? "months" : r === "months" ? "years" : r === "years" ? "decades" : r;
  return /* @__PURE__ */ f.jsxs(
    "button",
    {
      type: "button",
      className: H(
        "rounded-lg bg-white px-5 py-2.5 font-roboto text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
        (o = n == null ? void 0 : n.theme) == null ? void 0 : o.icons
      ),
      onClick: () => t(i()),
      children: [
        r === "days" && a(e, { month: "long", year: "numeric" }),
        r === "months" && a(e, { year: "numeric" }),
        r === "years" && `${ft(e, 10)}-${ft(e, 10) + 9}`,
        r === "decades" && `${ft(e, 100)}-${ft(e, 100) + 90}`
      ]
    }
  );
}, Zs = () => {
  var a, i, o;
  const { selectedDate: e, changeSelectedDate: r, view: t, options: n } = j(ke);
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      type: "button",
      className: H(
        "rounded-lg bg-white p-2.5 font-roboto text-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white",
        (a = n == null ? void 0 : n.theme) == null ? void 0 : a.icons
      ),
      onClick: () => r("next", new Date(ui(t, e, 1))),
      children: (i = n == null ? void 0 : n.icons) != null && i.next ? (o = n == null ? void 0 : n.icons) == null ? void 0 : o.next() : /* @__PURE__ */ f.jsx(
        "svg",
        {
          className: "h-4 w-4",
          fill: "currentColor",
          viewBox: "0 0 20 20",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ f.jsx(
            "path",
            {
              fillRule: "evenodd",
              d: "M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z",
              clipRule: "evenodd"
            }
          )
        }
      )
    }
  );
}, Js = () => {
  var n;
  const { changeSelectedDate: e, setView: r, options: t } = j(ke);
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      type: "button",
      className: H(
        "w-full rounded-lg bg-sky-600 px-5 py-2 text-center font-roboto text-sm font-medium text-white hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 dark:bg-sky-400 dark:hover:bg-sky-500",
        (n = t == null ? void 0 : t.theme) == null ? void 0 : n.todayBtn
      ),
      onClick: () => {
        e("today", /* @__PURE__ */ new Date()), r("days");
      },
      children: t == null ? void 0 : t.todayBtnText
    }
  );
}, qs = () => {
  var t;
  const { setShowSelectedDate: e, options: r } = j(ke);
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      type: "button",
      className: H(
        "w-full rounded-lg border border-gray-300 bg-white px-5 py-2 text-center font-roboto text-sm font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-sky-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600",
        (t = r == null ? void 0 : r.theme) == null ? void 0 : t.clearBtn
      ),
      onClick: () => e(!1),
      children: r == null ? void 0 : r.clearBtnText
    }
  );
}, Qs = ({ start: e }) => {
  const { selectedDate: r, changeSelectedDate: t, showSelectedDate: n, getFormattedDate: a, options: i } = j(ke), o = (new Date(e).getDay() + 6) % 7, d = i.weekDays || [], l = d.slice(o).concat(d.slice(0, o));
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx("div", { className: "mb-1 grid grid-cols-7", children: l.map((s, c) => /* @__PURE__ */ f.jsx(
      "span",
      {
        className: "dow h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-slate-400",
        children: s
      },
      c
    )) }),
    /* @__PURE__ */ f.jsx("div", { className: "grid w-64 grid-cols-7", children: [...Array(42)].map((s, c) => {
      var v, g, b, x, O;
      const $ = li(e, c), p = a($, { day: "numeric" }), h = a($, { month: "long" }), m = a($, { year: "numeric" });
      return /* @__PURE__ */ f.jsx(
        "span",
        {
          className: `block flex-1 cursor-pointer rounded-lg border-0 text-center font-roboto text-sm font-semibold leading-9 hover:bg-gray-100 dark:text-white dark:hover:bg-slate-600 ${n && r.getTime() > 0 && a(r) === a($) ? H(
            "bg-sky-700 text-white hover:bg-sky-600 dark:bg-sky-400 dark:hover:bg-sky-600",
            (v = i == null ? void 0 : i.theme) == null ? void 0 : v.selected
          ) : ""} ${h == a(r, { month: "long" }) && m == a(r, { year: "numeric" }) ? H("text-gray-900", (g = i == null ? void 0 : i.theme) == null ? void 0 : g.text) : H("text-gray-500", (b = i == null ? void 0 : i.theme) == null ? void 0 : b.disabledText)} ${i != null && i.minDate && new Date($) < (i == null ? void 0 : i.minDate) || i != null && i.disabledDates && i.disabledDates.indexOf(new Date($)) >= 0 ? H("text-gray-500", (x = i == null ? void 0 : i.theme) == null ? void 0 : x.disabledText) : ""} ${i != null && i.maxDate && new Date($) > (i == null ? void 0 : i.maxDate) || i != null && i.disabledDates && i.disabledDates.indexOf(new Date($)) >= 0 ? H("text-gray-500", (O = i == null ? void 0 : i.theme) == null ? void 0 : O.disabledText) : ""}
                            `,
          onClick: () => {
            t("date", new Date($));
          },
          children: p
        },
        c
      );
    }) })
  ] });
}, eu = () => {
  const { selectedDate: e, showSelectedDate: r, changeSelectedDate: t, setView: n, getFormattedDate: a, options: i } = j(ke);
  return /* @__PURE__ */ f.jsx("div", { className: "grid w-64 grid-cols-4", children: [...Array(12)].map((o, d) => {
    var c, $, p, h, m;
    const s = ft(e, 100) - 10 + d * 10;
    return /* @__PURE__ */ f.jsx(
      "span",
      {
        className: `block flex-1 cursor-pointer rounded-lg border-0 text-center font-roboto text-sm font-semibold leading-9  hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 ${r && e.getTime() > 0 && Number(a(e, { year: "numeric" })) === s ? H(
          "bg-sky-700 text-white hover:bg-sky-600 dark:bg-sky-400 dark:hover:bg-sky-600",
          (c = i == null ? void 0 : i.theme) == null ? void 0 : c.selected
        ) : ""} ${d == 0 || d == 11 ? H("text-gray-500", ($ = i == null ? void 0 : i.theme) == null ? void 0 : $.disabledText) : H("text-gray-900", (p = i == null ? void 0 : i.theme) == null ? void 0 : p.text)}
                            ${i != null && i.minDate && s < Number(a(i == null ? void 0 : i.minDate, { year: "numeric" })) ? H("text-gray-500", (h = i == null ? void 0 : i.theme) == null ? void 0 : h.disabledText) : ""}
                            ${i != null && i.maxDate && s > Number(a(i == null ? void 0 : i.maxDate, { year: "numeric" })) ? H("text-gray-500", (m = i == null ? void 0 : i.theme) == null ? void 0 : m.disabledText) : ""}
                            `,
        onClick: () => {
          t(
            "date",
            new Date(ct(e, s - e.getFullYear()))
          ), n("years");
        },
        children: s
      },
      d
    );
  }) });
}, tu = () => {
  const { selectedDate: e, showSelectedDate: r, changeSelectedDate: t, getFormattedDate: n, setView: a, options: i } = j(ke);
  return /* @__PURE__ */ f.jsx("div", { className: "grid w-64 grid-cols-4", children: [...Array(12)].map((o, d) => {
    var s, c;
    const l = n(new Date(e.getFullYear(), d), {
      month: "short"
    });
    return /* @__PURE__ */ f.jsx(
      "span",
      {
        className: `block flex-1 cursor-pointer rounded-lg border-0 text-center font-roboto text-sm font-semibold leading-9  text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 ${r && e.getTime() > 0 && n(e, { month: "short" }) === l ? H(
          "bg-sky-700 text-white hover:bg-sky-600 dark:bg-sky-400 dark:hover:bg-sky-600",
          (s = i == null ? void 0 : i.theme) == null ? void 0 : s.selected
        ) : ""} ${H((c = i == null ? void 0 : i.theme) == null ? void 0 : c.text)}`,
        onClick: () => {
          t(
            "date",
            new Date(si(e, d - e.getMonth()))
          ), a("days");
        },
        children: l
      },
      d
    );
  }) });
}, ru = () => {
  const { selectedDate: e, showSelectedDate: r, changeSelectedDate: t, setView: n, getFormattedDate: a, options: i } = j(ke);
  return /* @__PURE__ */ f.jsx("div", { className: "grid w-64 grid-cols-4", children: [...Array(12)].map((o, d) => {
    var c, $, p;
    const s = ft(e, 10) - 1 + d * 1;
    return /* @__PURE__ */ f.jsx(
      "span",
      {
        className: `block flex-1 cursor-pointer rounded-lg border-0 text-center font-roboto text-sm font-semibold leading-9  hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 ${r && e.getTime() > 0 && Number(a(e, { year: "numeric" })) === s ? H(
          "bg-sky-700 text-white hover:bg-sky-600 dark:bg-sky-400 dark:hover:bg-sky-600",
          (c = i == null ? void 0 : i.theme) == null ? void 0 : c.selected
        ) : ""} ${d == 0 || d == 11 ? H("text-gray-500", ($ = i == null ? void 0 : i.theme) == null ? void 0 : $.disabledText) : H("text-gray-900", (p = i == null ? void 0 : i.theme) == null ? void 0 : p.text)}`,
        onClick: () => {
          t(
            "date",
            new Date(ct(e, s - e.getFullYear()))
          ), n("months");
        },
        children: s
      },
      d
    );
  }) });
}, ci = Ur((e, r) => {
  var s, c;
  const { selectedMonth: t, selectedYear: n, view: a, options: i } = j(ke), o = 1, d = Ws(n, t, 1), l = Vs(d, o, o);
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: r,
      className: H("absolute top-10 z-50 block pt-2", i == null ? void 0 : i.datepickerClassNames),
      children: /* @__PURE__ */ f.jsxs(
        "div",
        {
          className: H(
            "inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-slate-800 dark:ring-1 dark:ring-inset dark:ring-white/10",
            (s = i == null ? void 0 : i.theme) == null ? void 0 : s.background
          ),
          children: [
            /* @__PURE__ */ f.jsxs("div", { children: [
              (i == null ? void 0 : i.title) && /* @__PURE__ */ f.jsx(
                "div",
                {
                  className: H(
                    "px-2 py-3 text-center font-roboto font-semibold text-gray-900 dark:text-slate-200",
                    (c = i == null ? void 0 : i.theme) == null ? void 0 : c.text
                  ),
                  children: i == null ? void 0 : i.title
                }
              ),
              /* @__PURE__ */ f.jsxs("div", { className: "mb-2 flex justify-between", children: [
                /* @__PURE__ */ f.jsx(Ks, {}),
                /* @__PURE__ */ f.jsx(Xs, {}),
                /* @__PURE__ */ f.jsx(Zs, {})
              ] })
            ] }),
            /* @__PURE__ */ f.jsxs("div", { className: "p-1", children: [
              a === "days" && /* @__PURE__ */ f.jsx(Qs, { start: l }),
              a === "months" && /* @__PURE__ */ f.jsx(tu, {}),
              a === "years" && /* @__PURE__ */ f.jsx(ru, {}),
              a === "decades" && /* @__PURE__ */ f.jsx(eu, {})
            ] }),
            ((i == null ? void 0 : i.todayBtn) || (i == null ? void 0 : i.clearBtn)) && /* @__PURE__ */ f.jsxs("div", { className: "mt-2 flex space-x-2", children: [
              (i == null ? void 0 : i.todayBtn) && /* @__PURE__ */ f.jsx(Js, {}),
              (i == null ? void 0 : i.clearBtn) && /* @__PURE__ */ f.jsx(qs, {})
            ] })
          ]
        }
      )
    }
  );
});
ci.displayName = "DatePickerPopup";
const f1 = ({
  children: e,
  options: r,
  onChange: t,
  classNames: n,
  show: a,
  setShow: i,
  selectedDateState: o
}) => /* @__PURE__ */ f.jsx("div", { className: H("w-full", n), children: /* @__PURE__ */ f.jsx(
  Ys,
  {
    options: r,
    onChange: t,
    show: a,
    setShow: i,
    selectedDateState: o,
    children: /* @__PURE__ */ f.jsx(nu, { options: r, children: e })
  }
) }), nu = ({
  options: e,
  children: r
}) => {
  const t = { ...Qr, ...e }, { setShow: n, show: a } = j(ke), i = A(null), o = A(null);
  return G(() => {
    const d = (l) => {
      i != null && i.current && (o != null && o.current) && !i.current.contains(l.target) && !o.current.contains(l.target) && n(!1);
    };
    return document.addEventListener("mousedown", (l) => d(l)), () => {
      document.removeEventListener("mousedown", (l) => d(l));
    };
  }, [o, i, n]), /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    r || /* @__PURE__ */ f.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ f.jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3", children: /* @__PURE__ */ f.jsx(au, {}) }),
      /* @__PURE__ */ f.jsx(
        fi,
        {
          ref: i,
          idProp: t == null ? void 0 : t.inputIdProp,
          nameProp: t == null ? void 0 : t.inputNameProp,
          placeholderProp: t == null ? void 0 : t.inputPlaceholderProp,
          dateFormat: t == null ? void 0 : t.inputDateFormatProp
        }
      )
    ] }),
    a && /* @__PURE__ */ f.jsx(ci, { ref: o })
  ] });
}, fi = Ur((e, r) => {
  var $;
  const { setShow: t, selectedDate: n, showSelectedDate: a, options: i, getFormattedDate: o } = j(ke), d = e.nameProp || "date", l = e.idProp || d, s = e.placeholderProp || "Select Date", c = e.dateFormat || null;
  return /* @__PURE__ */ f.jsx(
    "input",
    {
      ref: r,
      type: "text",
      name: d,
      id: l,
      className: H(
        "block w-full rounded-md",
        "border",
        "font-roboto font-light text-gray-900 sm:text-sm",
        "focus:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-75",
        "focus:ring-1",
        "dark:border-slate-600/20 dark:bg-slate-700 dark:ring-slate-200/20 dark:focus:ring-sky-500 dark:text-white dark:placeholder-slate-400",
        "border-gray-300 focus:border-sky-600 focus:ring-sky-600 py-2.5 pl-9 pr-2.5 ",
        ($ = i == null ? void 0 : i.theme) == null ? void 0 : $.input
      ),
      placeholder: s,
      value: n && a ? o(n, c) : "",
      onFocus: () => t(!0),
      readOnly: !0
    }
  );
});
fi.displayName = "Input";
const au = () => {
  var r;
  const { options: e } = j(ke);
  return /* @__PURE__ */ f.jsxs(
    "svg",
    {
      "aria-hidden": "true",
      className: H("h-5 w-5 text-gray-500 dark:text-white", (r = e == null ? void 0 : e.theme) == null ? void 0 : r.inputIcon),
      fill: "currentColor",
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ f.jsx("path", { d: "M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z" }),
        /* @__PURE__ */ f.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z",
            clipRule: "evenodd"
          }
        )
      ]
    }
  );
}, $1 = ({ label: e, ...r }) => /* @__PURE__ */ f.jsx(
  "h3",
  {
    className: "font-roboto text-2xl font-black leading-6 text-black dark:text-slate-200",
    ...r,
    children: e
  }
);
var st = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.DANGER = "danger", e.DEFAULT = "default", e.ACCENT = "accent", e))(st || {});
const h1 = ({
  onClick: e,
  icon: r,
  title: t,
  type: n = st.DEFAULT,
  disabled: a = !1,
  ...i
}) => /* @__PURE__ */ f.jsx(
  "button",
  {
    type: "button",
    className: K(
      n === st.PRIMARY ? "bg-sky-600 !text-white focus:ring-sky-600 dark:bg-sky-400 dark:focus:ring-sky-400 dark:!text-slate-900" : "",
      n === st.DANGER ? "bg-red-700 !text-white focus:ring-red-700 dark:bg-red-500 dark:focus:ring-red-500" : "",
      n === st.DEFAULT ? "bg-black !text-white focus:ring-black dark:bg-slate-700 dark:focus:ring-slate-700" : "",
      n === st.ACCENT ? "bg-fuchsia-300 !text-black focus:ring-fuchsia-300 dark:bg-fuchsia-700 dark:focus:ring-fuchsia-700 dark:!text-white" : "",
      "inline-flex items-center rounded-full border border-transparent p-2 shadow-md disabled:cursor-not-allowed disabled:opacity-50",
      "hover:ring-4 hover:ring-white",
      "focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2",
      "dark:hover:ring-0 dark:focus:ring-offset-2 dark:focus:ring-offset-slate-900 dark:focus:ring-2 dark:shadow-none"
    ),
    title: t,
    onClick: e,
    disabled: a,
    ...i,
    children: r
  }
);
var ze = /* @__PURE__ */ ((e) => (e.TEXT = "text", e.EMAIL = "email", e.HIDDEN = "hidden", e.NUMBER = "number", e.PASSWORD = "password", e.TEL = "tel", e.URL = "url", e.DATE = "date", e.TIME = "time", e.SEARCH = "search", e))(ze || {});
const g1 = ({
  id: e,
  type: r = ze.TEXT,
  disabled: t = !1,
  required: n = !1,
  readonly: a = !1,
  autoComplete: i = "off",
  placeholder: o,
  error: d,
  onChange: l,
  icon: s,
  name: c,
  value: $,
  ref: p,
  step: h,
  maxLength: m,
  description: v,
  ...g
}) => {
  const [b, x] = W(""), [O, L] = W(ze.TEXT), Y = () => {
    O === ze.PASSWORD ? L(ze.TEXT) : L(ze.PASSWORD);
  };
  G(() => {
    L(r);
  }, [r]);
  const N = (E) => {
    const k = E.target;
    x(k.value), l && l(E);
  };
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsxs("div", { className: "relative rounded-md shadow-sm", children: [
      s && /* @__PURE__ */ f.jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2", children: s }),
      /* @__PURE__ */ f.jsx(
        "input",
        {
          id: e,
          ref: p,
          className: K(
            "block w-full rounded-md",
            "border",
            "font-roboto font-light text-gray-900 sm:text-sm",
            "focus:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-75",
            "focus:ring-1",
            "dark:border-slate-600/20 dark:bg-slate-700 dark:ring-slate-200/20 dark:focus:ring-sky-500 dark:text-white dark:placeholder-slate-400",
            s ? "pl-9" : "",
            d ? "border-red-700 text-red-700 focus:ring-red-700" : "border-gray-300 focus:border-sky-600 focus:ring-sky-600"
          ),
          type: O,
          disabled: t,
          required: n,
          readOnly: a,
          placeholder: o,
          name: c,
          value: $,
          onChange: N,
          autoComplete: i,
          step: h,
          maxLength: m,
          ...g
        }
      ),
      r === ze.PASSWORD && /* @__PURE__ */ f.jsx(
        "div",
        {
          className: "cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3",
          onClick: Y,
          children: O === ze.PASSWORD ? /* @__PURE__ */ f.jsx(Po, { className: "h-5 w-5 text-gray-400", "aria-hidden": "true" }) : /* @__PURE__ */ f.jsx(No, { className: "h-5 w-5 text-gray-400", "aria-hidden": "true" })
        }
      )
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "mx-2 flex justify-between text-xs text-gray-500 dark:text-slate-400", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "grow", children: [
        !!d && /* @__PURE__ */ f.jsx("span", { className: "text-red-500", children: d }),
        v && !d && /* @__PURE__ */ f.jsx("span", { children: v })
      ] }),
      m && /* @__PURE__ */ f.jsxs("div", { children: [
        b.toString().length | 0,
        "/",
        m
      ] })
    ] })
  ] });
}, m1 = ({
  text: e,
  htmlFor: r,
  required: t = !1,
  extraClass: n = "",
  ...a
}) => /* @__PURE__ */ f.jsxs(
  "label",
  {
    htmlFor: r,
    className: K(
      "block font-roboto text-sm font-normal text-black dark:text-slate-200",
      n
    ),
    ...a,
    children: [
      e,
      t && /* @__PURE__ */ f.jsx("span", { children: "*" })
    ]
  }
), p1 = ({ children: e, width: r = "lg", overflowHidden: t = !0, ...n }) => {
  const a = (i) => {
    switch (i) {
      case "xs":
        return "20rem";
      case "sm":
        return "24rem";
      case "md":
        return "28rem";
      case "lg":
        return "32rem";
      case "xl":
        return "36rem";
      case "2xl":
        return "42rem";
      case "3xl":
        return "48rem";
      case "4xl":
        return "56rem";
      case "5xl":
        return "64rem";
      case "6xl":
        return "72rem";
      case "7xl":
        return "80rem";
      case "w-full":
        return "100%";
      case "w-min":
        return "min-content";
      case "w-max":
        return "max-content";
      case "w-fit":
        return "fit-content";
      default:
        return "32rem";
    }
  };
  return /* @__PURE__ */ f.jsx(Je.Root, { show: n.open, as: he, children: /* @__PURE__ */ f.jsxs(Et, { as: "div", className: "relative z-10", onClose: n.onClose, children: [
    /* @__PURE__ */ f.jsx(
      Je.Child,
      {
        as: he,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ f.jsx("div", { className: "fixed inset-0 bg-gray-500/75 transition-opacity dark:bg-slate-700/75" })
      }
    ),
    /* @__PURE__ */ f.jsx("div", { className: "fixed inset-0 z-10 overflow-y-auto", children: /* @__PURE__ */ f.jsx("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0", children: /* @__PURE__ */ f.jsx(
      Je.Child,
      {
        as: he,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
        enterTo: "opacity-100 translate-y-0 sm:scale-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
        leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
        children: /* @__PURE__ */ f.jsxs(
          Et.Panel,
          {
            style: { maxWidth: a(r) },
            className: K(
              t ? "overflow-hidden" : "",
              "relative transform rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:p-6 dark:bg-slate-800 dark:ring-1 dark:ring-inset dark:ring-white/10 dark:text-slate-200"
            ),
            children: [
              /* @__PURE__ */ f.jsx("div", { className: "absolute top-0 right-0 hidden pt-4 pr-4 sm:!block", children: /* @__PURE__ */ f.jsxs(
                "button",
                {
                  type: "button",
                  className: "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 dark:bg-slate-800 dark:text-slate-200",
                  onClick: n.onClose,
                  children: [
                    /* @__PURE__ */ f.jsx("span", { className: "sr-only", children: "Close" }),
                    /* @__PURE__ */ f.jsx($s, { className: "h-6 w-6", "aria-hidden": "true" })
                  ]
                }
              ) }),
              e
            ]
          }
        )
      }
    ) }) })
  ] }) });
}, v1 = ({ children: e, extraClass: r = "", ...t }) => /* @__PURE__ */ f.jsx(
  "div",
  {
    className: K(
      "mb-2 space-y-2 font-roboto text-sm font-medium text-black dark:text-slate-200",
      r
    ),
    ...t,
    children: e
  }
), $i = { version: 4, country_calling_codes: { 1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], 7: ["RU", "KZ"], 20: ["EG"], 27: ["ZA"], 30: ["GR"], 31: ["NL"], 32: ["BE"], 33: ["FR"], 34: ["ES"], 36: ["HU"], 39: ["IT", "VA"], 40: ["RO"], 41: ["CH"], 43: ["AT"], 44: ["GB", "GG", "IM", "JE"], 45: ["DK"], 46: ["SE"], 47: ["NO", "SJ"], 48: ["PL"], 49: ["DE"], 51: ["PE"], 52: ["MX"], 53: ["CU"], 54: ["AR"], 55: ["BR"], 56: ["CL"], 57: ["CO"], 58: ["VE"], 60: ["MY"], 61: ["AU", "CC", "CX"], 62: ["ID"], 63: ["PH"], 64: ["NZ"], 65: ["SG"], 66: ["TH"], 81: ["JP"], 82: ["KR"], 84: ["VN"], 86: ["CN"], 90: ["TR"], 91: ["IN"], 92: ["PK"], 93: ["AF"], 94: ["LK"], 95: ["MM"], 98: ["IR"], 211: ["SS"], 212: ["MA", "EH"], 213: ["DZ"], 216: ["TN"], 218: ["LY"], 220: ["GM"], 221: ["SN"], 222: ["MR"], 223: ["ML"], 224: ["GN"], 225: ["CI"], 226: ["BF"], 227: ["NE"], 228: ["TG"], 229: ["BJ"], 230: ["MU"], 231: ["LR"], 232: ["SL"], 233: ["GH"], 234: ["NG"], 235: ["TD"], 236: ["CF"], 237: ["CM"], 238: ["CV"], 239: ["ST"], 240: ["GQ"], 241: ["GA"], 242: ["CG"], 243: ["CD"], 244: ["AO"], 245: ["GW"], 246: ["IO"], 247: ["AC"], 248: ["SC"], 249: ["SD"], 250: ["RW"], 251: ["ET"], 252: ["SO"], 253: ["DJ"], 254: ["KE"], 255: ["TZ"], 256: ["UG"], 257: ["BI"], 258: ["MZ"], 260: ["ZM"], 261: ["MG"], 262: ["RE", "YT"], 263: ["ZW"], 264: ["NA"], 265: ["MW"], 266: ["LS"], 267: ["BW"], 268: ["SZ"], 269: ["KM"], 290: ["SH", "TA"], 291: ["ER"], 297: ["AW"], 298: ["FO"], 299: ["GL"], 350: ["GI"], 351: ["PT"], 352: ["LU"], 353: ["IE"], 354: ["IS"], 355: ["AL"], 356: ["MT"], 357: ["CY"], 358: ["FI", "AX"], 359: ["BG"], 370: ["LT"], 371: ["LV"], 372: ["EE"], 373: ["MD"], 374: ["AM"], 375: ["BY"], 376: ["AD"], 377: ["MC"], 378: ["SM"], 380: ["UA"], 381: ["RS"], 382: ["ME"], 383: ["XK"], 385: ["HR"], 386: ["SI"], 387: ["BA"], 389: ["MK"], 420: ["CZ"], 421: ["SK"], 423: ["LI"], 500: ["FK"], 501: ["BZ"], 502: ["GT"], 503: ["SV"], 504: ["HN"], 505: ["NI"], 506: ["CR"], 507: ["PA"], 508: ["PM"], 509: ["HT"], 590: ["GP", "BL", "MF"], 591: ["BO"], 592: ["GY"], 593: ["EC"], 594: ["GF"], 595: ["PY"], 596: ["MQ"], 597: ["SR"], 598: ["UY"], 599: ["CW", "BQ"], 670: ["TL"], 672: ["NF"], 673: ["BN"], 674: ["NR"], 675: ["PG"], 676: ["TO"], 677: ["SB"], 678: ["VU"], 679: ["FJ"], 680: ["PW"], 681: ["WF"], 682: ["CK"], 683: ["NU"], 685: ["WS"], 686: ["KI"], 687: ["NC"], 688: ["TV"], 689: ["PF"], 690: ["TK"], 691: ["FM"], 692: ["MH"], 850: ["KP"], 852: ["HK"], 853: ["MO"], 855: ["KH"], 856: ["LA"], 880: ["BD"], 886: ["TW"], 960: ["MV"], 961: ["LB"], 962: ["JO"], 963: ["SY"], 964: ["IQ"], 965: ["KW"], 966: ["SA"], 967: ["YE"], 968: ["OM"], 970: ["PS"], 971: ["AE"], 972: ["IL"], 973: ["BH"], 974: ["QA"], 975: ["BT"], 976: ["MN"], 977: ["NP"], 992: ["TJ"], 993: ["TM"], 994: ["AZ"], 995: ["GE"], 996: ["KG"], 998: ["UZ"] }, countries: { AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]], AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]], AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"], AF: ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"], AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"], AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"], AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"], AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"], AO: ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]], AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"], AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"], AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"], AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8]))\\d{3}|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4]))|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-26-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]], AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"], AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"], BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"], BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"], BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|22"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"], BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"], BF: ["226", "00", "[025-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]]], BG: ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"], BH: ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]]], BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]], BJ: ["229", "00", "[24-689]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]]]], BL: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"]]], BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"], BN: ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]], BO: ["591", "00(?:1\\d)?", "(?:[2-467]\\d\\d|8001)\\d{5}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"], BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"], BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"], BT: ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]]], BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]], BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"], BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]], CA: ["1", "011", "(?:[2-8]\\d|90)\\d{8}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-9]|33|44|66|77|88)|622)[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]], CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-26-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CD: ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]], CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]], CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"], CI: ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]], CK: ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]], CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]], CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]], CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "10(?:10|9[56])|2[0-57-9](?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"], CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}", [10, 11], [["(\\d{3})(\\d{7})", "$1 $2", ["6"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?"], CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"], CU: ["53", "119", "[27]\\d{6,7}|[34]\\d{5,7}|63\\d{6}|(?:5|8\\d\\d)\\d{7}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"], CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]], CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"], CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-26-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]], CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]], DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"], DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]], DK: ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]], DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"], DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"], DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"], EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"], EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], "0"], EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"], ER: ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"], ES: ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]], ET: ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], "0"], FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[12]00|[368]|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[1245]|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"], FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"], FK: ["500", "00", "[2-7]\\d{4}", [5]], FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]], FO: ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"], FR: ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"], GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"], GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:[0-5]\\d\\d|69[7-9]|70[0-79])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-2]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"], GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"], GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"], GF: ["594", "00", "[56]94\\d{6}|(?:80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"], GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]], GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0"], GI: ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]], GM: ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], GP: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"]]], GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]], GT: ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"], GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]], GY: ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"], HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]], HR: ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9], [["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"], HT: ["509", "00", "(?:[2-489]\\d|55)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]], HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"], ID: ["62", "00[89]", "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"], IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"], IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0", "1624$1", 0, "74576|(?:16|7[56])24"], IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"], IO: ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]], IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"], IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"], IT: ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, [["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]], JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]], JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"], JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], JP: ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]], "0", 0, "(000[259]\\d{6})$|(?:(?:003768)0?)|0", "$1"], KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], KG: ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"], KM: ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]], KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"], KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"], KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"], KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]], KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"], KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"], LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[013-9]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"], LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"], LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"], LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"], LK: ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"], LR: ["231", "00", "(?:[25]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[4-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23578]"], "0$1"]], "0"], LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]], LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(8-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", 1]], "8", 0, "[08]"], LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"], LV: ["371", "00", "(?:[268]\\d|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]]], LY: ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"], MA: ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|8(?:0[89]|92)", "5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|8(?:0[89]|92)"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-2]|5[01]|8[0-3]))\\d{6}"], ["80[0-7]\\d{6}"], ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]], MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"], MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"], ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"], MF: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"]]], MG: ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"], MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"], MK: ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"], ML: ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]], MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"], MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"], MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]], MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"], MQ: ["596", "00", "596\\d{6}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"], MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]], MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"], MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"], MX: ["52", "0[09]", "1(?:(?:[27]2|44|87|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[01]\\d|2[13-9]|[35][1-9]|4[0-35-9]|6[0-46-9]|7[013-9]|8[1-69]|9[1-8])|[2-9]\\d)\\d{8}", [10, 11], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], 0, 1], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], 0, 1], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], 0, 1]], "01", 0, "0(?:[12]|4[45])|1", 0, 0, 0, 0, "00"], MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"], MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], NA: ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]], NE: ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[047]"]]]], NF: ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"], NG: ["234", "009", "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}", [7, 8, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"], NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]], NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"], NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"], NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"], NR: ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]]], NU: ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]], NZ: ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"], OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]], PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]], PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "], PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"], PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"], PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]], PM: ["508", "00", "[45]\\d{5}|(?:708|80\\d)\\d{6}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"], PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]], PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-6])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"], QA: ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[16]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]], RE: ["262", "00", "(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"], ["69(?:2\\d\\d|3(?:[06][0-6]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-5]|76(?:2[27]|3[0-37]))\\d{4}"], ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]], RO: ["40", "00", "(?:[2378]\\d|62|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "], RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"], RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"], RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"], SA: ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"], SB: ["677", "0[01]", "(?:[1-6]|[7-9]\\d\\d)\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]]], SC: ["248", "010|0[0-2]", "800\\d{4}|(?:[249]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], SD: ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"], SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-8]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"], SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"], SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"], SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0"], SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"], SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"], SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]], SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|77|9[2-9]"]]], "0"], SR: ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]]], SS: ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]], SV: ["503", "00", "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"], SY: ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]], "0"], SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]], TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"], TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"], TD: ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], TG: ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], TJ: ["992", "810", "[0-57-9]\\d{8}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"], TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]], TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]], TM: ["993", "810", "[1-6]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], TN: ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]], TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]], TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"], TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"], TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"], TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"], UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"], UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"], US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["(?:5056(?:[0-35-9]\\d|4[468])|73020\\d)\\d{4}|(?:4722|505[2-57-9]|983[289])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[013569]|3[0-24679]|4[167]|5[0-2]|6[0149]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]]], UY: ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [6, 7, 8, 9, 10, 11, 12, 13], [["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "], UZ: ["998", "810", "(?:20|33|[5-79]\\d|88)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, "06698"], VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"], VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"], VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"], VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"], VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"], VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]], WF: ["681", "00", "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[478]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], XK: ["383", "00", "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]], "0"], YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"], YT: ["262", "00", "(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["269(?:0[0-467]|5[0-4]|6\\d|[78]0)\\d{4}"], ["639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])\\d{4}"], ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]], ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], ZM: ["260", "00", "800\\d{6}|(?:21|63|[79]\\d)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]], "0"], ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"] }, nonGeographic: { 800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]], 808: ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]], 870: ["870", 0, "7\\d{11}|[35-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]], 878: ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]], 881: ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]], ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]], 882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, 0, 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]], 883: ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]], 888: ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]], 979: ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]] } };
function nr(e, r) {
  var t = Array.prototype.slice.call(r);
  return t.push($i), e.apply(this, t);
}
function Fr(e) {
  "@babel/helpers - typeof";
  return Fr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Fr(e);
}
function Tn(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function iu(e, r, t) {
  return r && Tn(e.prototype, r), t && Tn(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ou(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function du(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(r && r.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), r && kt(e, r);
}
function lu(e) {
  var r = gi();
  return function() {
    var n = Tt(e), a;
    if (r) {
      var i = Tt(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else
      a = n.apply(this, arguments);
    return su(this, a);
  };
}
function su(e, r) {
  if (r && (Fr(r) === "object" || typeof r == "function"))
    return r;
  if (r !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return hi(e);
}
function hi(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ir(e) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Ir = function(n) {
    if (n === null || !uu(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof r < "u") {
      if (r.has(n))
        return r.get(n);
      r.set(n, a);
    }
    function a() {
      return Ht(n, arguments, Tt(this).constructor);
    }
    return a.prototype = Object.create(n.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), kt(a, n);
  }, Ir(e);
}
function Ht(e, r, t) {
  return gi() ? Ht = Reflect.construct : Ht = function(a, i, o) {
    var d = [null];
    d.push.apply(d, i);
    var l = Function.bind.apply(a, d), s = new l();
    return o && kt(s, o.prototype), s;
  }, Ht.apply(null, arguments);
}
function gi() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function uu(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function kt(e, r) {
  return kt = Object.setPrototypeOf || function(n, a) {
    return n.__proto__ = a, n;
  }, kt(e, r);
}
function Tt(e) {
  return Tt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Tt(e);
}
var Be = /* @__PURE__ */ function(e) {
  du(t, e);
  var r = lu(t);
  function t(n) {
    var a;
    return ou(this, t), a = r.call(this, n), Object.setPrototypeOf(hi(a), t.prototype), a.name = a.constructor.name, a;
  }
  return iu(t);
}(/* @__PURE__ */ Ir(Error)), en = 2, cu = 17, fu = 3, be = "0-9０-９٠-٩۰-۹", $u = "-‐-―−ー－", hu = "／/", gu = "．.", mu = "  ­​⁠　", pu = "()（）［］\\[\\]", vu = "~⁓∼～", _e = "".concat($u).concat(hu).concat(gu).concat(mu).concat(pu).concat(vu), ar = "+＋";
function On(e, r) {
  e = e.split("-"), r = r.split("-");
  for (var t = e[0].split("."), n = r[0].split("."), a = 0; a < 3; a++) {
    var i = Number(t[a]), o = Number(n[a]);
    if (i > o)
      return 1;
    if (o > i)
      return -1;
    if (!isNaN(i) && isNaN(o))
      return 1;
    if (isNaN(i) && !isNaN(o))
      return -1;
  }
  return e[1] && r[1] ? e[1] > r[1] ? 1 : e[1] < r[1] ? -1 : 0 : !e[1] && r[1] ? 1 : e[1] && !r[1] ? -1 : 0;
}
var bu = {}.constructor;
function Pt(e) {
  return e != null && e.constructor === bu;
}
function Dr(e) {
  "@babel/helpers - typeof";
  return Dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Dr(e);
}
function ir(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function An(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function or(e, r, t) {
  return r && An(e.prototype, r), t && An(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var yu = "1.2.0", xu = "1.7.35", Rn = " ext. ", wu = /^\d+$/, se = /* @__PURE__ */ function() {
  function e(r) {
    ir(this, e), Pu(r), this.metadata = r, pi.call(this, r);
  }
  return or(e, [{
    key: "getCountries",
    value: function() {
      return Object.keys(this.metadata.countries).filter(function(t) {
        return t !== "001";
      });
    }
  }, {
    key: "getCountryMetadata",
    value: function(t) {
      return this.metadata.countries[t];
    }
  }, {
    key: "nonGeographic",
    value: function() {
      if (!(this.v1 || this.v2 || this.v3))
        return this.metadata.nonGeographic || this.metadata.nonGeographical;
    }
  }, {
    key: "hasCountry",
    value: function(t) {
      return this.getCountryMetadata(t) !== void 0;
    }
  }, {
    key: "hasCallingCode",
    value: function(t) {
      if (this.getCountryCodesForCallingCode(t))
        return !0;
      if (this.nonGeographic()) {
        if (this.nonGeographic()[t])
          return !0;
      } else {
        var n = this.countryCallingCodes()[t];
        if (n && n.length === 1 && n[0] === "001")
          return !0;
      }
    }
  }, {
    key: "isNonGeographicCallingCode",
    value: function(t) {
      return this.nonGeographic() ? !!this.nonGeographic()[t] : !this.getCountryCodesForCallingCode(t);
    }
    // Deprecated.
  }, {
    key: "country",
    value: function(t) {
      return this.selectNumberingPlan(t);
    }
  }, {
    key: "selectNumberingPlan",
    value: function(t, n) {
      if (t && wu.test(t) && (n = t, t = null), t && t !== "001") {
        if (!this.hasCountry(t))
          throw new Error("Unknown country: ".concat(t));
        this.numberingPlan = new Fn(this.getCountryMetadata(t), this);
      } else if (n) {
        if (!this.hasCallingCode(n))
          throw new Error("Unknown calling code: ".concat(n));
        this.numberingPlan = new Fn(this.getNumberingPlanMetadata(n), this);
      } else
        this.numberingPlan = void 0;
      return this;
    }
  }, {
    key: "getCountryCodesForCallingCode",
    value: function(t) {
      var n = this.countryCallingCodes()[t];
      if (n)
        return n.length === 1 && n[0].length === 3 ? void 0 : n;
    }
  }, {
    key: "getCountryCodeForCallingCode",
    value: function(t) {
      var n = this.getCountryCodesForCallingCode(t);
      if (n)
        return n[0];
    }
  }, {
    key: "getNumberingPlanMetadata",
    value: function(t) {
      var n = this.getCountryCodeForCallingCode(t);
      if (n)
        return this.getCountryMetadata(n);
      if (this.nonGeographic()) {
        var a = this.nonGeographic()[t];
        if (a)
          return a;
      } else {
        var i = this.countryCallingCodes()[t];
        if (i && i.length === 1 && i[0] === "001")
          return this.metadata.countries["001"];
      }
    }
    // Deprecated.
  }, {
    key: "countryCallingCode",
    value: function() {
      return this.numberingPlan.callingCode();
    }
    // Deprecated.
  }, {
    key: "IDDPrefix",
    value: function() {
      return this.numberingPlan.IDDPrefix();
    }
    // Deprecated.
  }, {
    key: "defaultIDDPrefix",
    value: function() {
      return this.numberingPlan.defaultIDDPrefix();
    }
    // Deprecated.
  }, {
    key: "nationalNumberPattern",
    value: function() {
      return this.numberingPlan.nationalNumberPattern();
    }
    // Deprecated.
  }, {
    key: "possibleLengths",
    value: function() {
      return this.numberingPlan.possibleLengths();
    }
    // Deprecated.
  }, {
    key: "formats",
    value: function() {
      return this.numberingPlan.formats();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixForParsing",
    value: function() {
      return this.numberingPlan.nationalPrefixForParsing();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixTransformRule",
    value: function() {
      return this.numberingPlan.nationalPrefixTransformRule();
    }
    // Deprecated.
  }, {
    key: "leadingDigits",
    value: function() {
      return this.numberingPlan.leadingDigits();
    }
    // Deprecated.
  }, {
    key: "hasTypes",
    value: function() {
      return this.numberingPlan.hasTypes();
    }
    // Deprecated.
  }, {
    key: "type",
    value: function(t) {
      return this.numberingPlan.type(t);
    }
    // Deprecated.
  }, {
    key: "ext",
    value: function() {
      return this.numberingPlan.ext();
    }
  }, {
    key: "countryCallingCodes",
    value: function() {
      return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes;
    }
    // Deprecated.
  }, {
    key: "chooseCountryByCountryCallingCode",
    value: function(t) {
      return this.selectNumberingPlan(t);
    }
  }, {
    key: "hasSelectedNumberingPlan",
    value: function() {
      return this.numberingPlan !== void 0;
    }
  }]), e;
}(), Fn = /* @__PURE__ */ function() {
  function e(r, t) {
    ir(this, e), this.globalMetadataObject = t, this.metadata = r, pi.call(this, t.metadata);
  }
  return or(e, [{
    key: "callingCode",
    value: function() {
      return this.metadata[0];
    }
    // Formatting information for regions which share
    // a country calling code is contained by only one region
    // for performance reasons. For example, for NANPA region
    // ("North American Numbering Plan Administration",
    //  which includes USA, Canada, Cayman Islands, Bahamas, etc)
    // it will be contained in the metadata for `US`.
  }, {
    key: "getDefaultCountryMetadataForRegion",
    value: function() {
      return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
    }
    // Is always present.
  }, {
    key: "IDDPrefix",
    value: function() {
      if (!(this.v1 || this.v2))
        return this.metadata[1];
    }
    // Is only present when a country supports multiple IDD prefixes.
  }, {
    key: "defaultIDDPrefix",
    value: function() {
      if (!(this.v1 || this.v2))
        return this.metadata[12];
    }
  }, {
    key: "nationalNumberPattern",
    value: function() {
      return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2];
    }
    // "possible length" data is always present in Google's metadata.
  }, {
    key: "possibleLengths",
    value: function() {
      if (!this.v1)
        return this.metadata[this.v2 ? 2 : 3];
    }
  }, {
    key: "_getFormats",
    value: function(t) {
      return t[this.v1 ? 2 : this.v2 ? 3 : 4];
    }
    // For countries of the same region (e.g. NANPA)
    // formats are all stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "formats",
    value: function() {
      var t = this, n = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
      return n.map(function(a) {
        return new Nu(a, t);
      });
    }
  }, {
    key: "nationalPrefix",
    value: function() {
      return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
    }
  }, {
    key: "_getNationalPrefixFormattingRule",
    value: function(t) {
      return t[this.v1 ? 4 : this.v2 ? 5 : 6];
    }
    // For countries of the same region (e.g. NANPA)
    // national prefix formatting rule is stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixFormattingRule",
    value: function() {
      return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "_nationalPrefixForParsing",
    value: function() {
      return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
    }
  }, {
    key: "nationalPrefixForParsing",
    value: function() {
      return this._nationalPrefixForParsing() || this.nationalPrefix();
    }
  }, {
    key: "nationalPrefixTransformRule",
    value: function() {
      return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
    }
  }, {
    key: "_getNationalPrefixIsOptionalWhenFormatting",
    value: function() {
      return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
    }
    // For countries of the same region (e.g. NANPA)
    // "national prefix is optional when formatting" flag is
    // stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function() {
      return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "leadingDigits",
    value: function() {
      return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
    }
  }, {
    key: "types",
    value: function() {
      return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
    }
  }, {
    key: "hasTypes",
    value: function() {
      return this.types() && this.types().length === 0 ? !1 : !!this.types();
    }
  }, {
    key: "type",
    value: function(t) {
      if (this.hasTypes() && In(this.types(), t))
        return new Eu(In(this.types(), t), this);
    }
  }, {
    key: "ext",
    value: function() {
      return this.v1 || this.v2 ? Rn : this.metadata[13] || Rn;
    }
  }]), e;
}(), Nu = /* @__PURE__ */ function() {
  function e(r, t) {
    ir(this, e), this._format = r, this.metadata = t;
  }
  return or(e, [{
    key: "pattern",
    value: function() {
      return this._format[0];
    }
  }, {
    key: "format",
    value: function() {
      return this._format[1];
    }
  }, {
    key: "leadingDigitsPatterns",
    value: function() {
      return this._format[2] || [];
    }
  }, {
    key: "nationalPrefixFormattingRule",
    value: function() {
      return this._format[3] || this.metadata.nationalPrefixFormattingRule();
    }
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function() {
      return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
  }, {
    key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
    value: function() {
      return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
    // Checks whether national prefix formatting rule contains national prefix.
  }, {
    key: "usesNationalPrefix",
    value: function() {
      return !!(this.nationalPrefixFormattingRule() && // Check that national prefix formatting rule is not a "dummy" one.
      !Cu.test(this.nationalPrefixFormattingRule()));
    }
  }, {
    key: "internationalFormat",
    value: function() {
      return this._format[5] || this.format();
    }
  }]), e;
}(), Cu = /^\(?\$1\)?$/, Eu = /* @__PURE__ */ function() {
  function e(r, t) {
    ir(this, e), this.type = r, this.metadata = t;
  }
  return or(e, [{
    key: "pattern",
    value: function() {
      return this.metadata.v1 ? this.type : this.type[0];
    }
  }, {
    key: "possibleLengths",
    value: function() {
      if (!this.metadata.v1)
        return this.type[1] || this.metadata.possibleLengths();
    }
  }]), e;
}();
function In(e, r) {
  switch (r) {
    case "FIXED_LINE":
      return e[0];
    case "MOBILE":
      return e[1];
    case "TOLL_FREE":
      return e[2];
    case "PREMIUM_RATE":
      return e[3];
    case "PERSONAL_NUMBER":
      return e[4];
    case "VOICEMAIL":
      return e[5];
    case "UAN":
      return e[6];
    case "PAGER":
      return e[7];
    case "VOIP":
      return e[8];
    case "SHARED_COST":
      return e[9];
  }
}
function Pu(e) {
  if (!e)
    throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
  if (!Pt(e) || !Pt(e.countries))
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(Pt(e) ? "an object of shape: { " + Object.keys(e).join(", ") + " }" : "a " + Su(e) + ": " + e, "."));
}
var Su = function(r) {
  return Dr(r);
};
function dr(e, r) {
  if (r = new se(r), r.hasCountry(e))
    return r.country(e).countryCallingCode();
  throw new Error("Unknown country: ".concat(e));
}
function mi(e, r) {
  return r.countries.hasOwnProperty(e);
}
function pi(e) {
  var r = e.version;
  typeof r == "number" ? (this.v1 = r === 1, this.v2 = r === 2, this.v3 = r === 3, this.v4 = r === 4) : r ? On(r, yu) === -1 ? this.v2 = !0 : On(r, xu) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0;
}
var ku = ";ext=", lt = function(r) {
  return "([".concat(be, "]{1,").concat(r, "})");
};
function vi(e) {
  var r = "20", t = "15", n = "9", a = "6", i = "[  \\t,]*", o = "[:\\.．]?[  \\t,-]*", d = "#?", l = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)", s = "(?:[xｘ#＃~～]|int|ｉｎｔ)", c = "[- ]+", $ = "[  \\t]*", p = "(?:,{2}|;)", h = ku + lt(r), m = i + l + o + lt(r) + d, v = i + s + o + lt(n) + d, g = c + lt(a) + "#", b = $ + p + o + lt(t) + d, x = $ + "(?:,)+" + o + lt(n) + d;
  return h + "|" + m + "|" + v + "|" + g + "|" + b + "|" + x;
}
var Tu = "[" + be + "]{" + en + "}", Ou = "[" + ar + "]{0,1}(?:[" + _e + "]*[" + be + "]){3,}[" + _e + be + "]*", Au = new RegExp("^[" + ar + "]{0,1}(?:[" + _e + "]*[" + be + "]){1,2}$", "i"), Ru = Ou + // Phone number extensions
"(?:" + vi() + ")?", Fu = new RegExp(
  // Either a short two-digit-only phone number
  "^" + Tu + "$|^" + Ru + "$",
  "i"
);
function Iu(e) {
  return e.length >= en && Fu.test(e);
}
function Du(e) {
  return Au.test(e);
}
var Dn = new RegExp("(?:" + vi() + ")$", "i");
function _u(e) {
  var r = e.search(Dn);
  if (r < 0)
    return {};
  for (var t = e.slice(0, r), n = e.match(Dn), a = 1; a < n.length; ) {
    if (n[a])
      return {
        number: t,
        ext: n[a]
      };
    a++;
  }
}
function Mu(e, r) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t)
    return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = Lu(e)) || r && e && typeof e.length == "number") {
    t && (e = t);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Lu(e, r) {
  if (e) {
    if (typeof e == "string")
      return _n(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _n(e, r);
  }
}
function _n(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
var ju = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  "０": "0",
  // Fullwidth digit 0
  "１": "1",
  // Fullwidth digit 1
  "２": "2",
  // Fullwidth digit 2
  "３": "3",
  // Fullwidth digit 3
  "４": "4",
  // Fullwidth digit 4
  "５": "5",
  // Fullwidth digit 5
  "６": "6",
  // Fullwidth digit 6
  "７": "7",
  // Fullwidth digit 7
  "８": "8",
  // Fullwidth digit 8
  "９": "9",
  // Fullwidth digit 9
  "٠": "0",
  // Arabic-indic digit 0
  "١": "1",
  // Arabic-indic digit 1
  "٢": "2",
  // Arabic-indic digit 2
  "٣": "3",
  // Arabic-indic digit 3
  "٤": "4",
  // Arabic-indic digit 4
  "٥": "5",
  // Arabic-indic digit 5
  "٦": "6",
  // Arabic-indic digit 6
  "٧": "7",
  // Arabic-indic digit 7
  "٨": "8",
  // Arabic-indic digit 8
  "٩": "9",
  // Arabic-indic digit 9
  "۰": "0",
  // Eastern-Arabic digit 0
  "۱": "1",
  // Eastern-Arabic digit 1
  "۲": "2",
  // Eastern-Arabic digit 2
  "۳": "3",
  // Eastern-Arabic digit 3
  "۴": "4",
  // Eastern-Arabic digit 4
  "۵": "5",
  // Eastern-Arabic digit 5
  "۶": "6",
  // Eastern-Arabic digit 6
  "۷": "7",
  // Eastern-Arabic digit 7
  "۸": "8",
  // Eastern-Arabic digit 8
  "۹": "9"
  // Eastern-Arabic digit 9
};
function bi(e) {
  return ju[e];
}
function Xt(e) {
  for (var r = "", t = Mu(e.split("")), n; !(n = t()).done; ) {
    var a = n.value, i = bi(a);
    i && (r += i);
  }
  return r;
}
function Bu(e, r) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t)
    return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = Gu(e)) || r && e && typeof e.length == "number") {
    t && (e = t);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gu(e, r) {
  if (e) {
    if (typeof e == "string")
      return Mn(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Mn(e, r);
  }
}
function Mn(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function Ln(e) {
  for (var r = "", t = Bu(e.split("")), n; !(n = t()).done; ) {
    var a = n.value;
    r += Uu(a, r) || "";
  }
  return r;
}
function Uu(e, r) {
  return e === "+" ? r ? void 0 : "+" : bi(e);
}
function Hu(e, r) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t)
    return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = Wu(e)) || r && e && typeof e.length == "number") {
    t && (e = t);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wu(e, r) {
  if (e) {
    if (typeof e == "string")
      return jn(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return jn(e, r);
  }
}
function jn(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function Vu(e, r) {
  for (var t = e.slice(), n = Hu(r), a; !(a = n()).done; ) {
    var i = a.value;
    e.indexOf(i) < 0 && t.push(i);
  }
  return t.sort(function(o, d) {
    return o - d;
  });
}
function lr(e, r) {
  return yi(e, void 0, r);
}
function yi(e, r, t) {
  var n = t.type(r), a = n && n.possibleLengths() || t.possibleLengths();
  if (!a)
    return "IS_POSSIBLE";
  if (r === "FIXED_LINE_OR_MOBILE") {
    if (!t.type("FIXED_LINE"))
      return yi(e, "MOBILE", t);
    var i = t.type("MOBILE");
    i && (a = Vu(a, i.possibleLengths()));
  } else if (r && !n)
    return "INVALID_LENGTH";
  var o = e.length, d = a[0];
  return d === o ? "IS_POSSIBLE" : d > o ? "TOO_SHORT" : a[a.length - 1] < o ? "TOO_LONG" : a.indexOf(o, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}
function zu(e, r, t) {
  if (r === void 0 && (r = {}), t = new se(t), r.v2) {
    if (!e.countryCallingCode)
      throw new Error("Invalid phone number object passed");
    t.selectNumberingPlan(e.countryCallingCode);
  } else {
    if (!e.phone)
      return !1;
    if (e.country) {
      if (!t.hasCountry(e.country))
        throw new Error("Unknown country: ".concat(e.country));
      t.country(e.country);
    } else {
      if (!e.countryCallingCode)
        throw new Error("Invalid phone number object passed");
      t.selectNumberingPlan(e.countryCallingCode);
    }
  }
  if (t.possibleLengths())
    return xi(e.phone || e.nationalNumber, t);
  if (e.countryCallingCode && t.isNonGeographicCallingCode(e.countryCallingCode))
    return !0;
  throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
}
function xi(e, r) {
  switch (lr(e, r)) {
    case "IS_POSSIBLE":
      return !0;
    default:
      return !1;
  }
}
function Ue(e, r) {
  return e = e || "", new RegExp("^(?:" + r + ")$").test(e);
}
function Yu(e, r) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t)
    return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = Ku(e)) || r && e && typeof e.length == "number") {
    t && (e = t);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ku(e, r) {
  if (e) {
    if (typeof e == "string")
      return Bn(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Bn(e, r);
  }
}
function Bn(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
var Xu = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
function tn(e, r, t) {
  if (r = r || {}, !(!e.country && !e.countryCallingCode)) {
    t = new se(t), t.selectNumberingPlan(e.country, e.countryCallingCode);
    var n = r.v2 ? e.nationalNumber : e.phone;
    if (Ue(n, t.nationalNumberPattern())) {
      if (xr(n, "FIXED_LINE", t))
        return t.type("MOBILE") && t.type("MOBILE").pattern() === "" || !t.type("MOBILE") || xr(n, "MOBILE", t) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
      for (var a = Yu(Xu), i; !(i = a()).done; ) {
        var o = i.value;
        if (xr(n, o, t))
          return o;
      }
    }
  }
}
function xr(e, r, t) {
  return r = t.type(r), !r || !r.pattern() || r.possibleLengths() && r.possibleLengths().indexOf(e.length) < 0 ? !1 : Ue(e, r.pattern());
}
function Zu(e, r, t) {
  if (r = r || {}, t = new se(t), t.selectNumberingPlan(e.country, e.countryCallingCode), t.hasTypes())
    return tn(e, r, t.metadata) !== void 0;
  var n = r.v2 ? e.nationalNumber : e.phone;
  return Ue(n, t.nationalNumberPattern());
}
function Ju(e, r, t) {
  var n = new se(t), a = n.getCountryCodesForCallingCode(e);
  return a ? a.filter(function(i) {
    return qu(r, i, t);
  }) : [];
}
function qu(e, r, t) {
  var n = new se(t);
  return n.selectNumberingPlan(r), n.numberingPlan.possibleLengths().indexOf(e.length) >= 0;
}
function wi(e) {
  return e.replace(new RegExp("[".concat(_e, "]+"), "g"), " ").trim();
}
var Ni = /(\$\d)/;
function Ci(e, r, t) {
  var n = t.useInternationalFormat, a = t.withNationalPrefix;
  t.carrierCode, t.metadata;
  var i = e.replace(new RegExp(r.pattern()), n ? r.internationalFormat() : (
    // This library doesn't use `domestic_carrier_code_formatting_rule`,
    // because that one is only used when formatting phone numbers
    // for dialing from a mobile phone, and this is not a dialing library.
    // carrierCode && format.domesticCarrierCodeFormattingRule()
    // 	// First, replace the $CC in the formatting rule with the desired carrier code.
    // 	// Then, replace the $FG in the formatting rule with the first group
    // 	// and the carrier code combined in the appropriate way.
    // 	? format.format().replace(FIRST_GROUP_PATTERN, format.domesticCarrierCodeFormattingRule().replace('$CC', carrierCode))
    // 	: (
    // 		withNationalPrefix && format.nationalPrefixFormattingRule()
    // 			? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule())
    // 			: format.format()
    // 	)
    a && r.nationalPrefixFormattingRule() ? r.format().replace(Ni, r.nationalPrefixFormattingRule()) : r.format()
  ));
  return n ? wi(i) : i;
}
var Qu = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function e0(e, r, t) {
  var n = new se(t);
  if (n.selectNumberingPlan(e, r), n.defaultIDDPrefix())
    return n.defaultIDDPrefix();
  if (Qu.test(n.IDDPrefix()))
    return n.IDDPrefix();
}
function t0(e) {
  var r = e.number, t = e.ext;
  if (!r)
    return "";
  if (r[0] !== "+")
    throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
  return "tel:".concat(r).concat(t ? ";ext=" + t : "");
}
function r0(e, r) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t)
    return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = n0(e)) || r && e && typeof e.length == "number") {
    t && (e = t);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function n0(e, r) {
  if (e) {
    if (typeof e == "string")
      return Gn(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Gn(e, r);
  }
}
function Gn(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function Un(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Hn(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Un(Object(t), !0).forEach(function(n) {
      a0(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Un(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function a0(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var Wn = {
  formatExtension: function(r, t, n) {
    return "".concat(r).concat(n.ext()).concat(t);
  }
};
function i0(e, r, t, n) {
  if (t ? t = Hn(Hn({}, Wn), t) : t = Wn, n = new se(n), e.country && e.country !== "001") {
    if (!n.hasCountry(e.country))
      throw new Error("Unknown country: ".concat(e.country));
    n.country(e.country);
  } else if (e.countryCallingCode)
    n.selectNumberingPlan(e.countryCallingCode);
  else
    return e.phone || "";
  var a = n.countryCallingCode(), i = t.v2 ? e.nationalNumber : e.phone, o;
  switch (r) {
    case "NATIONAL":
      return i ? (o = Zt(i, e.carrierCode, "NATIONAL", n, t), wr(o, e.ext, n, t.formatExtension)) : "";
    case "INTERNATIONAL":
      return i ? (o = Zt(i, null, "INTERNATIONAL", n, t), o = "+".concat(a, " ").concat(o), wr(o, e.ext, n, t.formatExtension)) : "+".concat(a);
    case "E.164":
      return "+".concat(a).concat(i);
    case "RFC3966":
      return t0({
        number: "+".concat(a).concat(i),
        ext: e.ext
      });
    case "IDD":
      if (!t.fromCountry)
        return;
      var d = d0(i, e.carrierCode, a, t.fromCountry, n);
      return wr(d, e.ext, n, t.formatExtension);
    default:
      throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(r, '"'));
  }
}
function Zt(e, r, t, n, a) {
  var i = o0(n.formats(), e);
  return i ? Ci(e, i, {
    useInternationalFormat: t === "INTERNATIONAL",
    withNationalPrefix: !(i.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && a && a.nationalPrefix === !1),
    carrierCode: r,
    metadata: n
  }) : e;
}
function o0(e, r) {
  for (var t = r0(e), n; !(n = t()).done; ) {
    var a = n.value;
    if (a.leadingDigitsPatterns().length > 0) {
      var i = a.leadingDigitsPatterns()[a.leadingDigitsPatterns().length - 1];
      if (r.search(i) !== 0)
        continue;
    }
    if (Ue(r, a.pattern()))
      return a;
  }
}
function wr(e, r, t, n) {
  return r ? n(e, r, t) : e;
}
function d0(e, r, t, n, a) {
  var i = dr(n, a.metadata);
  if (i === t) {
    var o = Zt(e, r, "NATIONAL", a);
    return t === "1" ? t + " " + o : o;
  }
  var d = e0(n, void 0, a.metadata);
  if (d)
    return "".concat(d, " ").concat(t, " ").concat(Zt(e, null, "INTERNATIONAL", a));
}
function Vn(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function zn(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Vn(Object(t), !0).forEach(function(n) {
      l0(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Vn(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function l0(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function s0(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Yn(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function u0(e, r, t) {
  return r && Yn(e.prototype, r), t && Yn(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var Ei = /* @__PURE__ */ function() {
  function e(r, t, n) {
    if (s0(this, e), !r)
      throw new TypeError("`country` or `countryCallingCode` not passed");
    if (!t)
      throw new TypeError("`nationalNumber` not passed");
    if (!n)
      throw new TypeError("`metadata` not passed");
    var a = f0(r, n), i = a.country, o = a.countryCallingCode;
    this.country = i, this.countryCallingCode = o, this.nationalNumber = t, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.getMetadata = function() {
      return n;
    };
  }
  return u0(e, [{
    key: "setExt",
    value: function(t) {
      this.ext = t;
    }
  }, {
    key: "getPossibleCountries",
    value: function() {
      return this.country ? [this.country] : Ju(this.countryCallingCode, this.nationalNumber, this.getMetadata());
    }
  }, {
    key: "isPossible",
    value: function() {
      return zu(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isValid",
    value: function() {
      return Zu(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isNonGeographic",
    value: function() {
      var t = new se(this.getMetadata());
      return t.isNonGeographicCallingCode(this.countryCallingCode);
    }
  }, {
    key: "isEqual",
    value: function(t) {
      return this.number === t.number && this.ext === t.ext;
    }
    // This function was originally meant to be an equivalent for `validatePhoneNumberLength()`,
    // but later it was found out that it doesn't include the possible `TOO_SHORT` result
    // returned from `parsePhoneNumberWithError()` in the original `validatePhoneNumberLength()`,
    // so eventually I simply commented out this method from the `PhoneNumber` class
    // and just left the `validatePhoneNumberLength()` function, even though that one would require
    // and additional step to also validate the actual country / calling code of the phone number.
    // validateLength() {
    // 	const metadata = new Metadata(this.getMetadata())
    // 	metadata.selectNumberingPlan(this.countryCallingCode)
    // 	const result = checkNumberLength(this.nationalNumber, metadata)
    // 	if (result !== 'IS_POSSIBLE') {
    // 		return result
    // 	}
    // }
  }, {
    key: "getType",
    value: function() {
      return tn(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "format",
    value: function(t, n) {
      return i0(this, t, n ? zn(zn({}, n), {}, {
        v2: !0
      }) : {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "formatNational",
    value: function(t) {
      return this.format("NATIONAL", t);
    }
  }, {
    key: "formatInternational",
    value: function(t) {
      return this.format("INTERNATIONAL", t);
    }
  }, {
    key: "getURI",
    value: function(t) {
      return this.format("RFC3966", t);
    }
  }]), e;
}(), c0 = function(r) {
  return /^[A-Z]{2}$/.test(r);
};
function f0(e, r) {
  var t, n, a = new se(r);
  return c0(e) ? (t = e, a.selectNumberingPlan(t), n = a.countryCallingCode()) : n = e, {
    country: t,
    countryCallingCode: n
  };
}
var $0 = new RegExp("([" + be + "])");
function Pi(e, r, t, n) {
  if (r) {
    var a = new se(n);
    a.selectNumberingPlan(r, t);
    var i = new RegExp(a.IDDPrefix());
    if (e.search(i) === 0) {
      e = e.slice(e.match(i)[0].length);
      var o = e.match($0);
      if (!(o && o[1] != null && o[1].length > 0 && o[1] === "0"))
        return e;
    }
  }
}
function _r(e, r) {
  if (e && r.numberingPlan.nationalPrefixForParsing()) {
    var t = new RegExp("^(?:" + r.numberingPlan.nationalPrefixForParsing() + ")"), n = t.exec(e);
    if (n) {
      var a, i, o = n.length - 1, d = o > 0 && n[o];
      if (r.nationalPrefixTransformRule() && d)
        a = e.replace(t, r.nationalPrefixTransformRule()), o > 1 && (i = n[1]);
      else {
        var l = n[0];
        a = e.slice(l.length), d && (i = n[1]);
      }
      var s;
      if (d) {
        var c = e.indexOf(n[1]), $ = e.slice(0, c);
        $ === r.numberingPlan.nationalPrefix() && (s = r.numberingPlan.nationalPrefix());
      } else
        s = n[0];
      return {
        nationalNumber: a,
        nationalPrefix: s,
        carrierCode: i
      };
    }
  }
  return {
    nationalNumber: e
  };
}
function Mr(e, r) {
  var t = _r(e, r), n = t.carrierCode, a = t.nationalNumber;
  if (a !== e) {
    if (!h0(e, a, r))
      return {
        nationalNumber: e
      };
    if (r.possibleLengths() && !g0(a, r))
      return {
        nationalNumber: e
      };
  }
  return {
    nationalNumber: a,
    carrierCode: n
  };
}
function h0(e, r, t) {
  return !(Ue(e, t.nationalNumberPattern()) && !Ue(r, t.nationalNumberPattern()));
}
function g0(e, r) {
  switch (lr(e, r)) {
    case "TOO_SHORT":
    case "INVALID_LENGTH":
      return !1;
    default:
      return !0;
  }
}
function Si(e, r, t, n) {
  var a = r ? dr(r, n) : t;
  if (e.indexOf(a) === 0) {
    n = new se(n), n.selectNumberingPlan(r, t);
    var i = e.slice(a.length), o = Mr(i, n), d = o.nationalNumber, l = Mr(e, n), s = l.nationalNumber;
    if (!Ue(s, n.nationalNumberPattern()) && Ue(d, n.nationalNumberPattern()) || lr(s, n) === "TOO_LONG")
      return {
        countryCallingCode: a,
        number: i
      };
  }
  return {
    number: e
  };
}
function ki(e, r, t, n) {
  if (!e)
    return {};
  var a;
  if (e[0] !== "+") {
    var i = Pi(e, r, t, n);
    if (i && i !== e)
      a = !0, e = "+" + i;
    else {
      if (r || t) {
        var o = Si(e, r, t, n), d = o.countryCallingCode, l = o.number;
        if (d)
          return {
            countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
            countryCallingCode: d,
            number: l
          };
      }
      return {
        // No need to set it to `UNSPECIFIED`. It can be just `undefined`.
        // countryCallingCodeSource: 'UNSPECIFIED',
        number: e
      };
    }
  }
  if (e[1] === "0")
    return {};
  n = new se(n);
  for (var s = 2; s - 1 <= fu && s <= e.length; ) {
    var c = e.slice(1, s);
    if (n.hasCallingCode(c))
      return n.selectNumberingPlan(c), {
        countryCallingCodeSource: a ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
        countryCallingCode: c,
        number: e.slice(s)
      };
    s++;
  }
  return {};
}
function m0(e, r) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t)
    return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = p0(e)) || r && e && typeof e.length == "number") {
    t && (e = t);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function p0(e, r) {
  if (e) {
    if (typeof e == "string")
      return Kn(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Kn(e, r);
  }
}
function Kn(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function Ti(e, r) {
  var t = r.countries, n = r.defaultCountry, a = r.metadata;
  a = new se(a);
  for (var i = [], o = m0(t), d; !(d = o()).done; ) {
    var l = d.value;
    if (a.country(l), a.leadingDigits()) {
      if (e && e.search(a.leadingDigits()) === 0)
        return l;
    } else if (tn({
      phone: e,
      country: l
    }, void 0, a.metadata))
      if (n) {
        if (l === n)
          return l;
        i.push(l);
      } else
        return l;
  }
  if (i.length > 0)
    return i[0];
}
var v0 = !1;
function Oi(e, r) {
  var t = r.nationalNumber, n = r.defaultCountry, a = r.metadata;
  if (v0 && a.isNonGeographicCallingCode(e))
    return "001";
  var i = a.getCountryCodesForCallingCode(e);
  if (i)
    return i.length === 1 ? i[0] : Ti(t, {
      countries: i,
      defaultCountry: n,
      metadata: a.metadata
    });
}
var Ai = "+", b0 = "[\\-\\.\\(\\)]?", Xn = "([" + be + "]|" + b0 + ")", y0 = "^\\" + Ai + Xn + "*[" + be + "]" + Xn + "*$", x0 = new RegExp(y0, "g"), Lr = be, w0 = "[" + Lr + "]+((\\-)*[" + Lr + "])*", N0 = "a-zA-Z", C0 = "[" + N0 + "]+((\\-)*[" + Lr + "])*", E0 = "^(" + w0 + "\\.)*" + C0 + "\\.?$", P0 = new RegExp(E0, "g"), Zn = "tel:", jr = ";phone-context=", S0 = ";isub=";
function k0(e) {
  var r = e.indexOf(jr);
  if (r < 0)
    return null;
  var t = r + jr.length;
  if (t >= e.length)
    return "";
  var n = e.indexOf(";", t);
  return n >= 0 ? e.substring(t, n) : e.substring(t);
}
function T0(e) {
  return e === null ? !0 : e.length === 0 ? !1 : x0.test(e) || P0.test(e);
}
function O0(e, r) {
  var t = r.extractFormattedPhoneNumber, n = k0(e);
  if (!T0(n))
    throw new Be("NOT_A_NUMBER");
  var a;
  if (n === null)
    a = t(e) || "";
  else {
    a = "", n.charAt(0) === Ai && (a += n);
    var i = e.indexOf(Zn), o;
    i >= 0 ? o = i + Zn.length : o = 0;
    var d = e.indexOf(jr);
    a += e.substring(o, d);
  }
  var l = a.indexOf(S0);
  if (l > 0 && (a = a.substring(0, l)), a !== "")
    return a;
}
var A0 = 250, R0 = new RegExp("[" + ar + be + "]"), F0 = new RegExp("[^" + be + "#]+$");
function I0(e, r, t) {
  if (r = r || {}, t = new se(t), r.defaultCountry && !t.hasCountry(r.defaultCountry))
    throw r.v2 ? new Be("INVALID_COUNTRY") : new Error("Unknown country: ".concat(r.defaultCountry));
  var n = _0(e, r.v2, r.extract), a = n.number, i = n.ext, o = n.error;
  if (!a) {
    if (r.v2)
      throw o === "TOO_SHORT" ? new Be("TOO_SHORT") : new Be("NOT_A_NUMBER");
    return {};
  }
  var d = L0(a, r.defaultCountry, r.defaultCallingCode, t), l = d.country, s = d.nationalNumber, c = d.countryCallingCode, $ = d.countryCallingCodeSource, p = d.carrierCode;
  if (!t.hasSelectedNumberingPlan()) {
    if (r.v2)
      throw new Be("INVALID_COUNTRY");
    return {};
  }
  if (!s || s.length < en) {
    if (r.v2)
      throw new Be("TOO_SHORT");
    return {};
  }
  if (s.length > cu) {
    if (r.v2)
      throw new Be("TOO_LONG");
    return {};
  }
  if (r.v2) {
    var h = new Ei(c, s, t.metadata);
    return l && (h.country = l), p && (h.carrierCode = p), i && (h.ext = i), h.__countryCallingCodeSource = $, h;
  }
  var m = (r.extended ? t.hasSelectedNumberingPlan() : l) ? Ue(s, t.nationalNumberPattern()) : !1;
  return r.extended ? {
    country: l,
    countryCallingCode: c,
    carrierCode: p,
    valid: m,
    possible: m ? !0 : !!(r.extended === !0 && t.possibleLengths() && xi(s, t)),
    phone: s,
    ext: i
  } : m ? M0(l, s, i) : {};
}
function D0(e, r, t) {
  if (e) {
    if (e.length > A0) {
      if (t)
        throw new Be("TOO_LONG");
      return;
    }
    if (r === !1)
      return e;
    var n = e.search(R0);
    if (!(n < 0))
      return e.slice(n).replace(F0, "");
  }
}
function _0(e, r, t) {
  var n = O0(e, {
    extractFormattedPhoneNumber: function(o) {
      return D0(o, t, r);
    }
  });
  if (!n)
    return {};
  if (!Iu(n))
    return Du(n) ? {
      error: "TOO_SHORT"
    } : {};
  var a = _u(n);
  return a.ext ? a : {
    number: n
  };
}
function M0(e, r, t) {
  var n = {
    country: e,
    phone: r
  };
  return t && (n.ext = t), n;
}
function L0(e, r, t, n) {
  var a = ki(Ln(e), r, t, n.metadata), i = a.countryCallingCodeSource, o = a.countryCallingCode, d = a.number, l;
  if (o)
    n.selectNumberingPlan(o);
  else if (d && (r || t))
    n.selectNumberingPlan(r, t), r && (l = r), o = t || dr(r, n.metadata);
  else
    return {};
  if (!d)
    return {
      countryCallingCodeSource: i,
      countryCallingCode: o
    };
  var s = Mr(Ln(d), n), c = s.nationalNumber, $ = s.carrierCode, p = Oi(o, {
    nationalNumber: c,
    defaultCountry: r,
    metadata: n
  });
  return p && (l = p, p === "001" || n.country(l)), {
    country: l,
    countryCallingCode: o,
    countryCallingCodeSource: i,
    nationalNumber: c,
    carrierCode: $
  };
}
function Jn(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function qn(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Jn(Object(t), !0).forEach(function(n) {
      j0(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Jn(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function j0(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function B0(e, r, t) {
  return I0(e, qn(qn({}, r), {}, {
    v2: !0
  }), t);
}
function Qn(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function G0(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Qn(Object(t), !0).forEach(function(n) {
      U0(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Qn(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function U0(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function H0(e, r) {
  return Y0(e) || z0(e, r) || V0(e, r) || W0();
}
function W0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function V0(e, r) {
  if (e) {
    if (typeof e == "string")
      return ea(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return ea(e, r);
  }
}
function ea(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function z0(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n = [], a = !0, i = !1, o, d;
    try {
      for (t = t.call(e); !(a = (o = t.next()).done) && (n.push(o.value), !(r && n.length === r)); a = !0)
        ;
    } catch (l) {
      i = !0, d = l;
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (i)
          throw d;
      }
    }
    return n;
  }
}
function Y0(e) {
  if (Array.isArray(e))
    return e;
}
function K0(e) {
  var r = Array.prototype.slice.call(e), t = H0(r, 4), n = t[0], a = t[1], i = t[2], o = t[3], d, l, s;
  if (typeof n == "string")
    d = n;
  else
    throw new TypeError("A text for parsing must be a string.");
  if (!a || typeof a == "string")
    o ? (l = i, s = o) : (l = void 0, s = i), a && (l = G0({
      defaultCountry: a
    }, l));
  else if (Pt(a))
    i ? (l = a, s = i) : s = a;
  else
    throw new Error("Invalid second argument: ".concat(a));
  return {
    text: d,
    options: l,
    metadata: s
  };
}
function ta(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function ra(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ta(Object(t), !0).forEach(function(n) {
      X0(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ta(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function X0(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function Z0(e, r, t) {
  r && r.defaultCountry && !mi(r.defaultCountry, t) && (r = ra(ra({}, r), {}, {
    defaultCountry: void 0
  }));
  try {
    return B0(e, r, t);
  } catch (n) {
    if (!(n instanceof Be))
      throw n;
  }
}
function J0() {
  var e = K0(arguments), r = e.text, t = e.options, n = e.metadata;
  return Z0(r, t, n);
}
function q0(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function na(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Q0(e, r, t) {
  return r && na(e.prototype, r), t && na(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var ec = /* @__PURE__ */ function() {
  function e(r) {
    var t = r.onCountryChange, n = r.onCallingCodeChange;
    q0(this, e), this.onCountryChange = t, this.onCallingCodeChange = n;
  }
  return Q0(e, [{
    key: "reset",
    value: function(t) {
      var n = t.country, a = t.callingCode;
      this.international = !1, this.missingPlus = !1, this.IDDPrefix = void 0, this.callingCode = void 0, this.digits = "", this.resetNationalSignificantNumber(), this.initCountryAndCallingCode(n, a);
    }
  }, {
    key: "resetNationalSignificantNumber",
    value: function() {
      this.nationalSignificantNumber = this.getNationalDigits(), this.nationalSignificantNumberMatchesInput = !0, this.nationalPrefix = void 0, this.carrierCode = void 0, this.complexPrefixBeforeNationalSignificantNumber = void 0;
    }
  }, {
    key: "update",
    value: function(t) {
      for (var n = 0, a = Object.keys(t); n < a.length; n++) {
        var i = a[n];
        this[i] = t[i];
      }
    }
  }, {
    key: "initCountryAndCallingCode",
    value: function(t, n) {
      this.setCountry(t), this.setCallingCode(n);
    }
  }, {
    key: "setCountry",
    value: function(t) {
      this.country = t, this.onCountryChange(t);
    }
  }, {
    key: "setCallingCode",
    value: function(t) {
      this.callingCode = t, this.onCallingCodeChange(t, this.country);
    }
  }, {
    key: "startInternationalNumber",
    value: function(t, n) {
      this.international = !0, this.initCountryAndCallingCode(t, n);
    }
  }, {
    key: "appendDigits",
    value: function(t) {
      this.digits += t;
    }
  }, {
    key: "appendNationalSignificantNumberDigits",
    value: function(t) {
      this.nationalSignificantNumber += t;
    }
    /**
     * Returns the part of `this.digits` that corresponds to the national number.
     * Basically, all digits that have been input by the user, except for the
     * international prefix and the country calling code part
     * (if the number is an international one).
     * @return {string}
     */
  }, {
    key: "getNationalDigits",
    value: function() {
      return this.international ? this.digits.slice((this.IDDPrefix ? this.IDDPrefix.length : 0) + (this.callingCode ? this.callingCode.length : 0)) : this.digits;
    }
  }, {
    key: "getDigitsWithoutInternationalPrefix",
    value: function() {
      return this.international && this.IDDPrefix ? this.digits.slice(this.IDDPrefix.length) : this.digits;
    }
  }]), e;
}();
function tc(e, r) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t)
    return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = rc(e)) || r && e && typeof e.length == "number") {
    t && (e = t);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rc(e, r) {
  if (e) {
    if (typeof e == "string")
      return aa(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return aa(e, r);
  }
}
function aa(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
var Ie = "x", Nr = new RegExp(Ie);
function Wt(e, r) {
  if (r < 1)
    return "";
  for (var t = ""; r > 1; )
    r & 1 && (t += e), r >>= 1, e += e;
  return t + e;
}
function ia(e, r) {
  return e[r] === ")" && r++, nc(e.slice(0, r));
}
function nc(e) {
  for (var r = [], t = 0; t < e.length; )
    e[t] === "(" ? r.push(t) : e[t] === ")" && r.pop(), t++;
  var n = 0, a = "";
  r.push(e.length);
  for (var i = 0, o = r; i < o.length; i++) {
    var d = o[i];
    a += e.slice(n, d), n = d + 1;
  }
  return a;
}
function ac(e, r, t) {
  for (var n = tc(t.split("")), a; !(a = n()).done; ) {
    var i = a.value;
    if (e.slice(r + 1).search(Nr) < 0)
      return;
    r = e.search(Nr), e = e.replace(Nr, i);
  }
  return [e, r];
}
function ic(e, r, t) {
  var n = t.metadata, a = t.shouldTryNationalPrefixFormattingRule, i = t.getSeparatorAfterNationalPrefix, o = new RegExp("^(?:".concat(r.pattern(), ")$"));
  if (o.test(e.nationalSignificantNumber))
    return dc(e, r, {
      metadata: n,
      shouldTryNationalPrefixFormattingRule: a,
      getSeparatorAfterNationalPrefix: i
    });
}
function oc(e, r) {
  return lr(e, r) === "IS_POSSIBLE";
}
function dc(e, r, t) {
  var n = t.metadata, a = t.shouldTryNationalPrefixFormattingRule, i = t.getSeparatorAfterNationalPrefix;
  if (e.nationalSignificantNumber, e.international, e.nationalPrefix, e.carrierCode, a(r)) {
    var o = oa(e, r, {
      useNationalPrefixFormattingRule: !0,
      getSeparatorAfterNationalPrefix: i,
      metadata: n
    });
    if (o)
      return o;
  }
  return oa(e, r, {
    useNationalPrefixFormattingRule: !1,
    getSeparatorAfterNationalPrefix: i,
    metadata: n
  });
}
function oa(e, r, t) {
  var n = t.metadata, a = t.useNationalPrefixFormattingRule, i = t.getSeparatorAfterNationalPrefix, o = Ci(e.nationalSignificantNumber, r, {
    carrierCode: e.carrierCode,
    useInternationalFormat: e.international,
    withNationalPrefix: a,
    metadata: n
  });
  if (a || (e.nationalPrefix ? o = e.nationalPrefix + i(r) + o : e.complexPrefixBeforeNationalSignificantNumber && (o = e.complexPrefixBeforeNationalSignificantNumber + " " + o)), lc(o, e))
    return o;
}
function lc(e, r) {
  return Xt(e) === r.getNationalDigits();
}
function sc(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function da(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function uc(e, r, t) {
  return r && da(e.prototype, r), t && da(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var cc = /* @__PURE__ */ function() {
  function e() {
    sc(this, e);
  }
  return uc(e, [{
    key: "parse",
    value: function(t) {
      if (this.context = [{
        or: !0,
        instructions: []
      }], this.parsePattern(t), this.context.length !== 1)
        throw new Error("Non-finalized contexts left when pattern parse ended");
      var n = this.context[0], a = n.branches, i = n.instructions;
      if (a)
        return {
          op: "|",
          args: a.concat([Cr(i)])
        };
      if (i.length === 0)
        throw new Error("Pattern is required");
      return i.length === 1 ? i[0] : i;
    }
  }, {
    key: "startContext",
    value: function(t) {
      this.context.push(t);
    }
  }, {
    key: "endContext",
    value: function() {
      this.context.pop();
    }
  }, {
    key: "getContext",
    value: function() {
      return this.context[this.context.length - 1];
    }
  }, {
    key: "parsePattern",
    value: function(t) {
      if (!t)
        throw new Error("Pattern is required");
      var n = t.match(hc);
      if (!n) {
        if ($c.test(t))
          throw new Error("Illegal characters found in a pattern: ".concat(t));
        this.getContext().instructions = this.getContext().instructions.concat(t.split(""));
        return;
      }
      var a = n[1], i = t.slice(0, n.index), o = t.slice(n.index + a.length);
      switch (a) {
        case "(?:":
          i && this.parsePattern(i), this.startContext({
            or: !0,
            instructions: [],
            branches: []
          });
          break;
        case ")":
          if (!this.getContext().or)
            throw new Error('")" operator must be preceded by "(?:" operator');
          if (i && this.parsePattern(i), this.getContext().instructions.length === 0)
            throw new Error('No instructions found after "|" operator in an "or" group');
          var d = this.getContext(), l = d.branches;
          l.push(Cr(this.getContext().instructions)), this.endContext(), this.getContext().instructions.push({
            op: "|",
            args: l
          });
          break;
        case "|":
          if (!this.getContext().or)
            throw new Error('"|" operator can only be used inside "or" groups');
          if (i && this.parsePattern(i), !this.getContext().branches)
            if (this.context.length === 1)
              this.getContext().branches = [];
            else
              throw new Error('"branches" not found in an "or" group context');
          this.getContext().branches.push(Cr(this.getContext().instructions)), this.getContext().instructions = [];
          break;
        case "[":
          i && this.parsePattern(i), this.startContext({
            oneOfSet: !0
          });
          break;
        case "]":
          if (!this.getContext().oneOfSet)
            throw new Error('"]" operator must be preceded by "[" operator');
          this.endContext(), this.getContext().instructions.push({
            op: "[]",
            args: fc(i)
          });
          break;
        default:
          throw new Error("Unknown operator: ".concat(a));
      }
      o && this.parsePattern(o);
    }
  }]), e;
}();
function fc(e) {
  for (var r = [], t = 0; t < e.length; ) {
    if (e[t] === "-") {
      if (t === 0 || t === e.length - 1)
        throw new Error("Couldn't parse a one-of set pattern: ".concat(e));
      for (var n = e[t - 1].charCodeAt(0) + 1, a = e[t + 1].charCodeAt(0) - 1, i = n; i <= a; )
        r.push(String.fromCharCode(i)), i++;
    } else
      r.push(e[t]);
    t++;
  }
  return r;
}
var $c = /[\(\)\[\]\?\:\|]/, hc = new RegExp(
  // any of:
  "(\\||\\(\\?\\:|\\)|\\[|\\])"
);
function Cr(e) {
  return e.length === 1 ? e[0] : e;
}
function la(e, r) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t)
    return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = gc(e)) || r && e && typeof e.length == "number") {
    t && (e = t);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gc(e, r) {
  if (e) {
    if (typeof e == "string")
      return sa(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return sa(e, r);
  }
}
function sa(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function mc(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function ua(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function pc(e, r, t) {
  return r && ua(e.prototype, r), t && ua(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var vc = /* @__PURE__ */ function() {
  function e(r) {
    mc(this, e), this.matchTree = new cc().parse(r);
  }
  return pc(e, [{
    key: "match",
    value: function(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.allowOverflow;
      if (!t)
        throw new Error("String is required");
      var i = Br(t.split(""), this.matchTree, !0);
      if (i && i.match && delete i.matchedChars, !(i && i.overflow && !a))
        return i;
    }
  }]), e;
}();
function Br(e, r, t) {
  if (typeof r == "string") {
    var n = e.join("");
    return r.indexOf(n) === 0 ? e.length === r.length ? {
      match: !0,
      matchedChars: e
    } : {
      partialMatch: !0
      // matchedChars: characters
    } : n.indexOf(r) === 0 ? t && e.length > r.length ? {
      overflow: !0
    } : {
      match: !0,
      matchedChars: e.slice(0, r.length)
    } : void 0;
  }
  if (Array.isArray(r)) {
    for (var a = e.slice(), i = 0; i < r.length; ) {
      var o = r[i], d = Br(a, o, t && i === r.length - 1);
      if (d) {
        if (d.overflow)
          return d;
        if (d.match) {
          if (a = a.slice(d.matchedChars.length), a.length === 0)
            return i === r.length - 1 ? {
              match: !0,
              matchedChars: e
            } : {
              partialMatch: !0
              // matchedChars: characters
            };
        } else {
          if (d.partialMatch)
            return {
              partialMatch: !0
              // matchedChars: characters
            };
          throw new Error(`Unsupported match result:
`.concat(JSON.stringify(d, null, 2)));
        }
      } else
        return;
      i++;
    }
    return t ? {
      overflow: !0
    } : {
      match: !0,
      matchedChars: e.slice(0, e.length - a.length)
    };
  }
  switch (r.op) {
    case "|":
      for (var l, s = la(r.args), c; !(c = s()).done; ) {
        var $ = c.value, p = Br(e, $, t);
        if (p) {
          if (p.overflow)
            return p;
          if (p.match)
            return {
              match: !0,
              matchedChars: p.matchedChars
            };
          if (p.partialMatch)
            l = !0;
          else
            throw new Error(`Unsupported match result:
`.concat(JSON.stringify(p, null, 2)));
        }
      }
      return l ? {
        partialMatch: !0
        // matchedChars: ...
      } : void 0;
    case "[]":
      for (var h = la(r.args), m; !(m = h()).done; ) {
        var v = m.value;
        if (e[0] === v)
          return e.length === 1 ? {
            match: !0,
            matchedChars: e
          } : t ? {
            overflow: !0
          } : {
            match: !0,
            matchedChars: [v]
          };
      }
      return;
    default:
      throw new Error("Unsupported instruction tree: ".concat(r));
  }
}
function ca(e, r) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t)
    return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = bc(e)) || r && e && typeof e.length == "number") {
    t && (e = t);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bc(e, r) {
  if (e) {
    if (typeof e == "string")
      return fa(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return fa(e, r);
  }
}
function fa(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function yc(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function $a(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function xc(e, r, t) {
  return r && $a(e.prototype, r), t && $a(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var Gr = "9", wc = 15, Nc = Wt(Gr, wc), Cc = /[- ]/, Ec = function() {
  return /\[([^\[\]])*\]/g;
}, Pc = function() {
  return /\d(?=[^,}][^,}])/g;
}, Sc = new RegExp("[" + _e + "]*\\$1[" + _e + "]*(\\$\\d[" + _e + "]*)*$"), ha = 3, kc = /* @__PURE__ */ function() {
  function e(r) {
    r.state;
    var t = r.metadata;
    yc(this, e), this.metadata = t, this.resetFormat();
  }
  return xc(e, [{
    key: "resetFormat",
    value: function() {
      this.chosenFormat = void 0, this.template = void 0, this.nationalNumberTemplate = void 0, this.populatedNationalNumberTemplate = void 0, this.populatedNationalNumberTemplatePosition = -1;
    }
  }, {
    key: "reset",
    value: function(t, n) {
      this.resetFormat(), t ? (this.isNANP = t.callingCode() === "1", this.matchingFormats = t.formats(), n.nationalSignificantNumber && this.narrowDownMatchingFormats(n)) : (this.isNANP = void 0, this.matchingFormats = []);
    }
    /**
     * Formats an updated phone number.
     * @param  {string} nextDigits — Additional phone number digits.
     * @param  {object} state — `AsYouType` state.
     * @return {[string]} Returns undefined if the updated phone number can't be formatted using any of the available formats.
     */
  }, {
    key: "format",
    value: function(t, n) {
      var a = this;
      if (oc(n.nationalSignificantNumber, this.metadata))
        for (var i = ca(this.matchingFormats), o; !(o = i()).done; ) {
          var d = o.value, l = ic(n, d, {
            metadata: this.metadata,
            shouldTryNationalPrefixFormattingRule: function(c) {
              return a.shouldTryNationalPrefixFormattingRule(c, {
                international: n.international,
                nationalPrefix: n.nationalPrefix
              });
            },
            getSeparatorAfterNationalPrefix: function(c) {
              return a.getSeparatorAfterNationalPrefix(c);
            }
          });
          if (l)
            return this.resetFormat(), this.chosenFormat = d, this.setNationalNumberTemplate(l.replace(/\d/g, Ie), n), this.populatedNationalNumberTemplate = l, this.populatedNationalNumberTemplatePosition = this.template.lastIndexOf(Ie), l;
        }
      return this.formatNationalNumberWithNextDigits(t, n);
    }
    // Formats the next phone number digits.
  }, {
    key: "formatNationalNumberWithNextDigits",
    value: function(t, n) {
      var a = this.chosenFormat, i = this.chooseFormat(n);
      if (i)
        return i === a ? this.formatNextNationalNumberDigits(t) : this.formatNextNationalNumberDigits(n.getNationalDigits());
    }
  }, {
    key: "narrowDownMatchingFormats",
    value: function(t) {
      var n = this, a = t.nationalSignificantNumber, i = t.nationalPrefix, o = t.international, d = a, l = d.length - ha;
      l < 0 && (l = 0), this.matchingFormats = this.matchingFormats.filter(function(s) {
        return n.formatSuits(s, o, i) && n.formatMatches(s, d, l);
      }), this.chosenFormat && this.matchingFormats.indexOf(this.chosenFormat) === -1 && this.resetFormat();
    }
  }, {
    key: "formatSuits",
    value: function(t, n, a) {
      return !(a && !t.usesNationalPrefix() && // !format.domesticCarrierCodeFormattingRule() &&
      !t.nationalPrefixIsOptionalWhenFormattingInNationalFormat() || !n && !a && t.nationalPrefixIsMandatoryWhenFormattingInNationalFormat());
    }
  }, {
    key: "formatMatches",
    value: function(t, n, a) {
      var i = t.leadingDigitsPatterns().length;
      if (i === 0)
        return !0;
      a = Math.min(a, i - 1);
      var o = t.leadingDigitsPatterns()[a];
      if (n.length < ha)
        try {
          return new vc(o).match(n, {
            allowOverflow: !0
          }) !== void 0;
        } catch (d) {
          return console.error(d), !0;
        }
      return new RegExp("^(".concat(o, ")")).test(n);
    }
  }, {
    key: "getFormatFormat",
    value: function(t, n) {
      return n ? t.internationalFormat() : t.format();
    }
  }, {
    key: "chooseFormat",
    value: function(t) {
      for (var n = this, a = function() {
        var s = o.value;
        return n.chosenFormat === s ? "break" : Sc.test(n.getFormatFormat(s, t.international)) ? n.createTemplateForFormat(s, t) ? (n.chosenFormat = s, "break") : (n.matchingFormats = n.matchingFormats.filter(function(c) {
          return c !== s;
        }), "continue") : "continue";
      }, i = ca(this.matchingFormats.slice()), o; !(o = i()).done; ) {
        var d = a();
        if (d === "break")
          break;
      }
      return this.chosenFormat || this.resetFormat(), this.chosenFormat;
    }
  }, {
    key: "createTemplateForFormat",
    value: function(t, n) {
      if (!(t.pattern().indexOf("|") >= 0)) {
        var a = this.getTemplateForFormat(t, n);
        if (a)
          return this.setNationalNumberTemplate(a, n), !0;
      }
    }
  }, {
    key: "getSeparatorAfterNationalPrefix",
    value: function(t) {
      return this.isNANP || t && t.nationalPrefixFormattingRule() && Cc.test(t.nationalPrefixFormattingRule()) ? " " : "";
    }
  }, {
    key: "getInternationalPrefixBeforeCountryCallingCode",
    value: function(t, n) {
      var a = t.IDDPrefix, i = t.missingPlus;
      return a ? n && n.spacing === !1 ? a : a + " " : i ? "" : "+";
    }
  }, {
    key: "getTemplate",
    value: function(t) {
      if (this.template) {
        for (var n = -1, a = 0, i = t.international ? this.getInternationalPrefixBeforeCountryCallingCode(t, {
          spacing: !1
        }) : ""; a < i.length + t.getDigitsWithoutInternationalPrefix().length; )
          n = this.template.indexOf(Ie, n + 1), a++;
        return ia(this.template, n + 1);
      }
    }
  }, {
    key: "setNationalNumberTemplate",
    value: function(t, n) {
      this.nationalNumberTemplate = t, this.populatedNationalNumberTemplate = t, this.populatedNationalNumberTemplatePosition = -1, n.international ? this.template = this.getInternationalPrefixBeforeCountryCallingCode(n).replace(/[\d\+]/g, Ie) + Wt(Ie, n.callingCode.length) + " " + t : this.template = t;
    }
    /**
     * Generates formatting template for a national phone number,
     * optionally containing a national prefix, for a format.
     * @param  {Format} format
     * @param  {string} nationalPrefix
     * @return {string}
     */
  }, {
    key: "getTemplateForFormat",
    value: function(t, n) {
      var a = n.nationalSignificantNumber, i = n.international, o = n.nationalPrefix, d = n.complexPrefixBeforeNationalSignificantNumber, l = t.pattern();
      l = l.replace(Ec(), "\\d").replace(Pc(), "\\d");
      var s = Nc.match(l)[0];
      if (!(a.length > s.length)) {
        var c = new RegExp("^" + l + "$"), $ = a.replace(/\d/g, Gr);
        c.test($) && (s = $);
        var p = this.getFormatFormat(t, i), h;
        if (this.shouldTryNationalPrefixFormattingRule(t, {
          international: i,
          nationalPrefix: o
        })) {
          var m = p.replace(Ni, t.nationalPrefixFormattingRule());
          if (Xt(t.nationalPrefixFormattingRule()) === (o || "") + Xt("$1") && (p = m, h = !0, o))
            for (var v = o.length; v > 0; )
              p = p.replace(/\d/, Ie), v--;
        }
        var g = s.replace(new RegExp(l), p).replace(new RegExp(Gr, "g"), Ie);
        return h || (d ? g = Wt(Ie, d.length) + " " + g : o && (g = Wt(Ie, o.length) + this.getSeparatorAfterNationalPrefix(t) + g)), i && (g = wi(g)), g;
      }
    }
  }, {
    key: "formatNextNationalNumberDigits",
    value: function(t) {
      var n = ac(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition, t);
      if (!n) {
        this.resetFormat();
        return;
      }
      return this.populatedNationalNumberTemplate = n[0], this.populatedNationalNumberTemplatePosition = n[1], ia(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition + 1);
    }
  }, {
    key: "shouldTryNationalPrefixFormattingRule",
    value: function(t, n) {
      var a = n.international, i = n.nationalPrefix;
      if (t.nationalPrefixFormattingRule()) {
        var o = t.usesNationalPrefix();
        if (o && i || !o && !a)
          return !0;
      }
    }
  }]), e;
}();
function Ri(e, r) {
  return Rc(e) || Ac(e, r) || Oc(e, r) || Tc();
}
function Tc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Oc(e, r) {
  if (e) {
    if (typeof e == "string")
      return ga(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return ga(e, r);
  }
}
function ga(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function Ac(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n = [], a = !0, i = !1, o, d;
    try {
      for (t = t.call(e); !(a = (o = t.next()).done) && (n.push(o.value), !(r && n.length === r)); a = !0)
        ;
    } catch (l) {
      i = !0, d = l;
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (i)
          throw d;
      }
    }
    return n;
  }
}
function Rc(e) {
  if (Array.isArray(e))
    return e;
}
function Fc(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function ma(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Ic(e, r, t) {
  return r && ma(e.prototype, r), t && ma(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var Dc = "[" + _e + be + "]+", _c = new RegExp("^" + Dc + "$", "i"), Mc = "(?:[" + ar + "][" + _e + be + "]*|[" + _e + be + "]+)", Lc = new RegExp("[^" + _e + be + "]+.*$"), jc = /[^\d\[\]]/, Bc = /* @__PURE__ */ function() {
  function e(r) {
    var t = r.defaultCountry, n = r.defaultCallingCode, a = r.metadata, i = r.onNationalSignificantNumberChange;
    Fc(this, e), this.defaultCountry = t, this.defaultCallingCode = n, this.metadata = a, this.onNationalSignificantNumberChange = i;
  }
  return Ic(e, [{
    key: "input",
    value: function(t, n) {
      var a = Hc(t), i = Ri(a, 2), o = i[0], d = i[1], l = Xt(o), s;
      return d && (n.digits || (n.startInternationalNumber(), l || (s = !0))), l && this.inputDigits(l, n), {
        digits: l,
        justLeadingPlus: s
      };
    }
    /**
     * Inputs "next" phone number digits.
     * @param  {string} digits
     * @return {string} [formattedNumber] Formatted national phone number (if it can be formatted at this stage). Returning `undefined` means "don't format the national phone number at this stage".
     */
  }, {
    key: "inputDigits",
    value: function(t, n) {
      var a = n.digits, i = a.length < 3 && a.length + t.length >= 3;
      if (n.appendDigits(t), i && this.extractIddPrefix(n), this.isWaitingForCountryCallingCode(n)) {
        if (!this.extractCountryCallingCode(n))
          return;
      } else
        n.appendNationalSignificantNumberDigits(t);
      n.international || this.hasExtractedNationalSignificantNumber || this.extractNationalSignificantNumber(n.getNationalDigits(), function(o) {
        return n.update(o);
      });
    }
  }, {
    key: "isWaitingForCountryCallingCode",
    value: function(t) {
      var n = t.international, a = t.callingCode;
      return n && !a;
    }
    // Extracts a country calling code from a number
    // being entered in internatonal format.
  }, {
    key: "extractCountryCallingCode",
    value: function(t) {
      var n = ki("+" + t.getDigitsWithoutInternationalPrefix(), this.defaultCountry, this.defaultCallingCode, this.metadata.metadata), a = n.countryCallingCode, i = n.number;
      if (a)
        return t.setCallingCode(a), t.update({
          nationalSignificantNumber: i
        }), !0;
    }
  }, {
    key: "reset",
    value: function(t) {
      if (t) {
        this.hasSelectedNumberingPlan = !0;
        var n = t._nationalPrefixForParsing();
        this.couldPossiblyExtractAnotherNationalSignificantNumber = n && jc.test(n);
      } else
        this.hasSelectedNumberingPlan = void 0, this.couldPossiblyExtractAnotherNationalSignificantNumber = void 0;
    }
    /**
     * Extracts a national (significant) number from user input.
     * Google's library is different in that it only applies `national_prefix_for_parsing`
     * and doesn't apply `national_prefix_transform_rule` after that.
     * https://github.com/google/libphonenumber/blob/a3d70b0487875475e6ad659af404943211d26456/java/libphonenumber/src/com/google/i18n/phonenumbers/AsYouTypeFormatter.java#L539
     * @return {boolean} [extracted]
     */
  }, {
    key: "extractNationalSignificantNumber",
    value: function(t, n) {
      if (this.hasSelectedNumberingPlan) {
        var a = _r(t, this.metadata), i = a.nationalPrefix, o = a.nationalNumber, d = a.carrierCode;
        if (o !== t)
          return this.onExtractedNationalNumber(i, d, o, t, n), !0;
      }
    }
    /**
     * In Google's code this function is called "attempt to extract longer NDD".
     * "Some national prefixes are a substring of others", they say.
     * @return {boolean} [result] — Returns `true` if extracting a national prefix produced different results from what they were.
     */
  }, {
    key: "extractAnotherNationalSignificantNumber",
    value: function(t, n, a) {
      if (!this.hasExtractedNationalSignificantNumber)
        return this.extractNationalSignificantNumber(t, a);
      if (this.couldPossiblyExtractAnotherNationalSignificantNumber) {
        var i = _r(t, this.metadata), o = i.nationalPrefix, d = i.nationalNumber, l = i.carrierCode;
        if (d !== n)
          return this.onExtractedNationalNumber(o, l, d, t, a), !0;
      }
    }
  }, {
    key: "onExtractedNationalNumber",
    value: function(t, n, a, i, o) {
      var d, l, s = i.lastIndexOf(a);
      if (s >= 0 && s === i.length - a.length) {
        l = !0;
        var c = i.slice(0, s);
        c !== t && (d = c);
      }
      o({
        nationalPrefix: t,
        carrierCode: n,
        nationalSignificantNumber: a,
        nationalSignificantNumberMatchesInput: l,
        complexPrefixBeforeNationalSignificantNumber: d
      }), this.hasExtractedNationalSignificantNumber = !0, this.onNationalSignificantNumberChange();
    }
  }, {
    key: "reExtractNationalSignificantNumber",
    value: function(t) {
      if (this.extractAnotherNationalSignificantNumber(t.getNationalDigits(), t.nationalSignificantNumber, function(n) {
        return t.update(n);
      }))
        return !0;
      if (this.extractIddPrefix(t))
        return this.extractCallingCodeAndNationalSignificantNumber(t), !0;
      if (this.fixMissingPlus(t))
        return this.extractCallingCodeAndNationalSignificantNumber(t), !0;
    }
  }, {
    key: "extractIddPrefix",
    value: function(t) {
      var n = t.international, a = t.IDDPrefix, i = t.digits;
      if (t.nationalSignificantNumber, !(n || a)) {
        var o = Pi(i, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata);
        if (o !== void 0 && o !== i)
          return t.update({
            IDDPrefix: i.slice(0, i.length - o.length)
          }), this.startInternationalNumber(t, {
            country: void 0,
            callingCode: void 0
          }), !0;
      }
    }
  }, {
    key: "fixMissingPlus",
    value: function(t) {
      if (!t.international) {
        var n = Si(t.digits, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata), a = n.countryCallingCode;
        if (n.number, a)
          return t.update({
            missingPlus: !0
          }), this.startInternationalNumber(t, {
            country: t.country,
            callingCode: a
          }), !0;
      }
    }
  }, {
    key: "startInternationalNumber",
    value: function(t, n) {
      var a = n.country, i = n.callingCode;
      t.startInternationalNumber(a, i), t.nationalSignificantNumber && (t.resetNationalSignificantNumber(), this.onNationalSignificantNumberChange(), this.hasExtractedNationalSignificantNumber = void 0);
    }
  }, {
    key: "extractCallingCodeAndNationalSignificantNumber",
    value: function(t) {
      this.extractCountryCallingCode(t) && this.extractNationalSignificantNumber(t.getNationalDigits(), function(n) {
        return t.update(n);
      });
    }
  }]), e;
}();
function Gc(e) {
  var r = e.search(Mc);
  if (!(r < 0)) {
    e = e.slice(r);
    var t;
    return e[0] === "+" && (t = !0, e = e.slice(1)), e = e.replace(Lc, ""), t && (e = "+" + e), e;
  }
}
function Uc(e) {
  var r = Gc(e) || "";
  return r[0] === "+" ? [r.slice(1), !0] : [r];
}
function Hc(e) {
  var r = Uc(e), t = Ri(r, 2), n = t[0], a = t[1];
  return _c.test(n) || (n = ""), [n, a];
}
function Wc(e, r) {
  return Kc(e) || Yc(e, r) || zc(e, r) || Vc();
}
function Vc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zc(e, r) {
  if (e) {
    if (typeof e == "string")
      return pa(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return pa(e, r);
  }
}
function pa(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function Yc(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n = [], a = !0, i = !1, o, d;
    try {
      for (t = t.call(e); !(a = (o = t.next()).done) && (n.push(o.value), !(r && n.length === r)); a = !0)
        ;
    } catch (l) {
      i = !0, d = l;
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (i)
          throw d;
      }
    }
    return n;
  }
}
function Kc(e) {
  if (Array.isArray(e))
    return e;
}
function Xc(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function va(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Zc(e, r, t) {
  return r && va(e.prototype, r), t && va(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var Fi = /* @__PURE__ */ function() {
  function e(r, t) {
    Xc(this, e), this.metadata = new se(t);
    var n = this.getCountryAndCallingCode(r), a = Wc(n, 2), i = a[0], o = a[1];
    this.defaultCountry = i, this.defaultCallingCode = o, this.reset();
  }
  return Zc(e, [{
    key: "getCountryAndCallingCode",
    value: function(t) {
      var n, a;
      return t && (Pt(t) ? (n = t.defaultCountry, a = t.defaultCallingCode) : n = t), n && !this.metadata.hasCountry(n) && (n = void 0), [n, a];
    }
    /**
     * Inputs "next" phone number characters.
     * @param  {string} text
     * @return {string} Formatted phone number characters that have been input so far.
     */
  }, {
    key: "input",
    value: function(t) {
      var n = this.parser.input(t, this.state), a = n.digits, i = n.justLeadingPlus;
      if (i)
        this.formattedOutput = "+";
      else if (a) {
        this.determineTheCountryIfNeeded(), this.state.nationalSignificantNumber && this.formatter.narrowDownMatchingFormats(this.state);
        var o;
        if (this.metadata.hasSelectedNumberingPlan() && (o = this.formatter.format(a, this.state)), o === void 0 && this.parser.reExtractNationalSignificantNumber(this.state)) {
          this.determineTheCountryIfNeeded();
          var d = this.state.getNationalDigits();
          d && (o = this.formatter.format(d, this.state));
        }
        this.formattedOutput = o ? this.getFullNumber(o) : this.getNonFormattedNumber();
      }
      return this.formattedOutput;
    }
  }, {
    key: "reset",
    value: function() {
      var t = this;
      return this.state = new ec({
        onCountryChange: function(a) {
          t.country = a;
        },
        onCallingCodeChange: function(a, i) {
          t.metadata.selectNumberingPlan(i, a), t.formatter.reset(t.metadata.numberingPlan, t.state), t.parser.reset(t.metadata.numberingPlan);
        }
      }), this.formatter = new kc({
        state: this.state,
        metadata: this.metadata
      }), this.parser = new Bc({
        defaultCountry: this.defaultCountry,
        defaultCallingCode: this.defaultCallingCode,
        metadata: this.metadata,
        state: this.state,
        onNationalSignificantNumberChange: function() {
          t.determineTheCountryIfNeeded(), t.formatter.reset(t.metadata.numberingPlan, t.state);
        }
      }), this.state.reset({
        country: this.defaultCountry,
        callingCode: this.defaultCallingCode
      }), this.formattedOutput = "", this;
    }
    /**
     * Returns `true` if the phone number is being input in international format.
     * In other words, returns `true` if and only if the parsed phone number starts with a `"+"`.
     * @return {boolean}
     */
  }, {
    key: "isInternational",
    value: function() {
      return this.state.international;
    }
    /**
     * Returns the "calling code" part of the phone number when it's being input
     * in an international format.
     * If no valid calling code has been entered so far, returns `undefined`.
     * @return {string} [callingCode]
     */
  }, {
    key: "getCallingCode",
    value: function() {
      if (this.isInternational())
        return this.state.callingCode;
    }
    // A legacy alias.
  }, {
    key: "getCountryCallingCode",
    value: function() {
      return this.getCallingCode();
    }
    /**
     * Returns a two-letter country code of the phone number.
     * Returns `undefined` for "non-geographic" phone numbering plans.
     * Returns `undefined` if no phone number has been input yet.
     * @return {string} [country]
     */
  }, {
    key: "getCountry",
    value: function() {
      var t = this.state.digits;
      if (t)
        return this._getCountry();
    }
    /**
     * Returns a two-letter country code of the phone number.
     * Returns `undefined` for "non-geographic" phone numbering plans.
     * @return {string} [country]
     */
  }, {
    key: "_getCountry",
    value: function() {
      var t = this.state.country;
      return t;
    }
  }, {
    key: "determineTheCountryIfNeeded",
    value: function() {
      (!this.state.country || this.isCountryCallingCodeAmbiguous()) && this.determineTheCountry();
    }
    // Prepends `+CountryCode ` in case of an international phone number
  }, {
    key: "getFullNumber",
    value: function(t) {
      var n = this;
      if (this.isInternational()) {
        var a = function(d) {
          return n.formatter.getInternationalPrefixBeforeCountryCallingCode(n.state, {
            spacing: !!d
          }) + d;
        }, i = this.state.callingCode;
        return a(i ? t ? "".concat(i, " ").concat(t) : i : "".concat(this.state.getDigitsWithoutInternationalPrefix()));
      }
      return t;
    }
  }, {
    key: "getNonFormattedNationalNumberWithPrefix",
    value: function() {
      var t = this.state, n = t.nationalSignificantNumber, a = t.complexPrefixBeforeNationalSignificantNumber, i = t.nationalPrefix, o = n, d = a || i;
      return d && (o = d + o), o;
    }
  }, {
    key: "getNonFormattedNumber",
    value: function() {
      var t = this.state.nationalSignificantNumberMatchesInput;
      return this.getFullNumber(t ? this.getNonFormattedNationalNumberWithPrefix() : this.state.getNationalDigits());
    }
  }, {
    key: "getNonFormattedTemplate",
    value: function() {
      var t = this.getNonFormattedNumber();
      if (t)
        return t.replace(/[\+\d]/g, Ie);
    }
  }, {
    key: "isCountryCallingCodeAmbiguous",
    value: function() {
      var t = this.state.callingCode, n = this.metadata.getCountryCodesForCallingCode(t);
      return n && n.length > 1;
    }
    // Determines the country of the phone number
    // entered so far based on the country phone code
    // and the national phone number.
  }, {
    key: "determineTheCountry",
    value: function() {
      this.state.setCountry(Oi(this.isInternational() ? this.state.callingCode : this.defaultCallingCode, {
        nationalNumber: this.state.nationalSignificantNumber,
        defaultCountry: this.defaultCountry,
        metadata: this.metadata
      }));
    }
    /**
     * Returns a E.164 phone number value for the user's input.
     *
     * For example, for country `"US"` and input `"(222) 333-4444"`
     * it will return `"+12223334444"`.
     *
     * For international phone number input, it will also auto-correct
     * some minor errors such as using a national prefix when writing
     * an international phone number. For example, if the user inputs
     * `"+44 0 7400 000000"` then it will return an auto-corrected
     * `"+447400000000"` phone number value.
     *
     * Will return `undefined` if no digits have been input,
     * or when inputting a phone number in national format and no
     * default country or default "country calling code" have been set.
     *
     * @return {string} [value]
     */
  }, {
    key: "getNumberValue",
    value: function() {
      var t = this.state, n = t.digits, a = t.callingCode, i = t.country, o = t.nationalSignificantNumber;
      if (n) {
        if (this.isInternational())
          return a ? "+" + a + o : "+" + n;
        if (i || a) {
          var d = i ? this.metadata.countryCallingCode() : a;
          return "+" + d + o;
        }
      }
    }
    /**
     * Returns an instance of `PhoneNumber` class.
     * Will return `undefined` if no national (significant) number
     * digits have been entered so far, or if no `defaultCountry` has been
     * set and the user enters a phone number not in international format.
     */
  }, {
    key: "getNumber",
    value: function() {
      var t = this.state, n = t.nationalSignificantNumber, a = t.carrierCode, i = t.callingCode, o = this._getCountry();
      if (n && !(!o && !i)) {
        if (o && o === this.defaultCountry) {
          var d = new se(this.metadata.metadata);
          d.selectNumberingPlan(o);
          var l = d.numberingPlan.callingCode(), s = this.metadata.getCountryCodesForCallingCode(l);
          if (s.length > 1) {
            var c = Ti(n, {
              countries: s,
              defaultCountry: this.defaultCountry,
              metadata: this.metadata.metadata
            });
            c && (o = c);
          }
        }
        var $ = new Ei(o || i, n, this.metadata.metadata);
        return a && ($.carrierCode = a), $;
      }
    }
    /**
     * Returns `true` if the phone number is "possible".
     * Is just a shortcut for `PhoneNumber.isPossible()`.
     * @return {boolean}
     */
  }, {
    key: "isPossible",
    value: function() {
      var t = this.getNumber();
      return t ? t.isPossible() : !1;
    }
    /**
     * Returns `true` if the phone number is "valid".
     * Is just a shortcut for `PhoneNumber.isValid()`.
     * @return {boolean}
     */
  }, {
    key: "isValid",
    value: function() {
      var t = this.getNumber();
      return t ? t.isValid() : !1;
    }
    /**
     * @deprecated
     * This method is used in `react-phone-number-input/source/input-control.js`
     * in versions before `3.0.16`.
     */
  }, {
    key: "getNationalNumber",
    value: function() {
      return this.state.nationalSignificantNumber;
    }
    /**
     * Returns the phone number characters entered by the user.
     * @return {string}
     */
  }, {
    key: "getChars",
    value: function() {
      return (this.state.international ? "+" : "") + this.state.digits;
    }
    /**
     * Returns the template for the formatted phone number.
     * @return {string}
     */
  }, {
    key: "getTemplate",
    value: function() {
      return this.formatter.getTemplate(this.state) || this.getNonFormattedTemplate() || "";
    }
  }]), e;
}();
function Jc(e) {
  return new se(e).getCountries();
}
function qc() {
  return nr(J0, arguments);
}
function Jt(e) {
  return Fi.call(this, e, $i);
}
Jt.prototype = Object.create(Fi.prototype, {});
Jt.prototype.constructor = Jt;
function Ii() {
  return nr(mi, arguments);
}
function ba() {
  return nr(Jc, arguments);
}
function Qc() {
  return nr(dr, arguments);
}
const e1 = {
  AB: "Abchazien",
  AC: "Ascension",
  AD: "Andorra",
  AE: "Förenade Arabemiraten",
  AF: "Afghanistan",
  AG: "Antigua och Barbuda",
  AI: "Anguilla",
  AL: "Albanien",
  AM: "Armenien",
  AO: "Angola",
  AQ: "Antarktis",
  AR: "Argentina",
  AS: "Amerikanska Samoa",
  AT: "Österrike",
  AU: "Australien",
  AW: "Aruba",
  AX: "Åland",
  AZ: "Azerbajdzjan",
  BA: "Bosnien och Hercegovina",
  BB: "Barbados",
  BD: "Bangladesh",
  BE: "Belgien",
  BF: "Burkina Faso",
  BG: "Bulgarien",
  BH: "Bahrain",
  BI: "Burundi",
  BJ: "Benin",
  BL: "Saint-Barthélemy",
  BM: "Bermuda",
  BN: "Brunei",
  BO: "Bolivia",
  BQ: "Bonaire, Saint Eustatius och Saba",
  BR: "Brasilien",
  BS: "Bahamas",
  BT: "Bhutan",
  BV: "Bouvetön",
  BW: "Botswana",
  BY: "Vitryssland",
  BZ: "Belize",
  CA: "Kanada",
  CC: "Kokosöarna",
  CD: "Demokratiska republiken Kongo",
  CF: "Centralafrikanska republiken",
  CG: "Kongo-Brazzaville",
  CH: "Schweiz",
  CI: "Elfenbenskusten",
  CK: "Cooköarna",
  CL: "Chile",
  CM: "Kamerun",
  CN: "Kina",
  CO: "Colombia",
  CR: "Costa Rica",
  CU: "Kuba",
  CV: "Kap Verde",
  CW: "Curacao",
  CX: "Julön",
  CY: "Cypern",
  CZ: "Tjeckien",
  DE: "Tyskland",
  DJ: "Djibouti",
  DK: "Danmark",
  DM: "Dominica",
  DO: "Dominikanska republiken",
  DZ: "Algeriet",
  EC: "Ecuador",
  EE: "Estland",
  EG: "Egypten",
  EH: "Västsahara",
  ER: "Eritrea",
  ES: "Spanien",
  ET: "Etiopien",
  FI: "Finland",
  FJ: "Fiji",
  FK: "Falklandsöarna",
  FM: "Mikronesiska federationen",
  FO: "Färöarna",
  FR: "Frankrike",
  GA: "Gabon",
  GB: "Storbritannien",
  GD: "Grenada",
  GE: "Georgien",
  GF: "Franska Guyana",
  GG: "Guernsey",
  GH: "Ghana",
  GI: "Gibraltar",
  GL: "Grönland",
  GM: "Gambia",
  GN: "Guinea",
  GP: "Guadeloupe",
  GQ: "Ekvatorialguinea",
  GR: "Grekland",
  GS: "Sydgeorgien och Sydsandwichöarna",
  GT: "Guatemala",
  GU: "Guam",
  GW: "Guinea Bissau",
  GY: "Guyana",
  HK: "Hongkong",
  HM: "Heard- och McDonaldsöarna",
  HN: "Honduras",
  HR: "Kroatien",
  HT: "Haiti",
  HU: "Ungern",
  ID: "Indonesien",
  IE: "Irland",
  IL: "Israel",
  IM: "Isle of Man",
  IN: "Indien",
  IO: "Brittiska territoriet i Indiska Oceanen",
  IQ: "Irak",
  IR: "Iran",
  IS: "Island",
  IT: "Italien",
  JE: "Jersey",
  JM: "Jamaica",
  JO: "Jordanien",
  JP: "Japan",
  KE: "Kenya",
  KG: "Kirgizistan",
  KH: "Kambodja",
  KI: "Kiribati",
  KM: "Komorerna",
  KN: "Saint Kitts och Nevis",
  KP: "Nordkorea",
  KR: "Sydkorea",
  KW: "Kuwait",
  KY: "Caymanöarna",
  KZ: "Kazakstan",
  LA: "Laos",
  LB: "Libanon",
  LC: "Saint Lucia",
  LI: "Liechtenstein",
  LK: "Sri Lanka",
  LR: "Liberia",
  LS: "Lesotho",
  LT: "Litauen",
  LU: "Luxemburg",
  LV: "Lettland",
  LY: "Libyen",
  MA: "Marocko",
  MC: "Monaco",
  MD: "Moldavien",
  ME: "Montenegro",
  MF: "Saint Martin (franska delen)",
  MG: "Madagaskar",
  MH: "Marshallöarna",
  MK: "Nordmakedonien",
  ML: "Mali",
  MM: "Myanmar",
  MN: "Mongoliet",
  MO: "Macau",
  MP: "Nordmarianerna",
  MQ: "Martinique",
  MR: "Mauretanien",
  MS: "Montserrat",
  MT: "Malta",
  MU: "Mauritius",
  MV: "Maldiverna",
  MW: "Malawi",
  MX: "Mexiko",
  MY: "Malaysia",
  MZ: "Moçambique",
  NA: "Namibia",
  NC: "Nya Kaledonien",
  NE: "Niger",
  NF: "Norfolkön",
  NG: "Nigeria",
  NI: "Nicaragua",
  NL: "Nederländerna",
  NO: "Norge",
  NP: "Nepal",
  NR: "Nauru",
  NU: "Niue",
  NZ: "Nya Zeeland",
  OM: "Oman",
  OS: "Sydossetien",
  PA: "Panama",
  PE: "Peru",
  PF: "Franska Polynesien",
  PG: "Papua Nya Guinea",
  PH: "Filippinerna",
  PK: "Pakistan",
  PL: "Polen",
  PM: "Saint-Pierre och Miquelon",
  PN: "Pitcairnöarna",
  PR: "Puerto Rico",
  PS: "Palestinska territoriet, ockuperade",
  PT: "Portugal",
  PW: "Palau",
  PY: "Paraguay",
  QA: "Qatar",
  RE: "Réunion",
  RO: "Rumänien",
  RS: "Serbien",
  RU: "Ryssland",
  RW: "Rwanda",
  SA: "Saudiarabien",
  SB: "Salomonöarna",
  SC: "Seychellerna",
  SD: "Sudan",
  SE: "Sverige",
  SG: "Singapore",
  SH: "Sankta Helena",
  SI: "Slovenien",
  SJ: "Svalbard och Jan Mayen",
  SK: "Slovakien",
  SL: "Sierra Leone",
  SM: "San Marino",
  SN: "Senegal",
  SO: "Somalia",
  SR: "Surinam",
  SS: "Sydsudan",
  ST: "São Tomé och Príncipe",
  SV: "El Salvador",
  SX: "Sint Maarten (nederländska delen)",
  SY: "Syrien",
  SZ: "Swaziland",
  TA: "Tristan da Cunha",
  TC: "Turks- och Caicosöarna",
  TD: "Tchad",
  TF: "Franska södra territorierna",
  TG: "Togo",
  TH: "Thailand",
  TJ: "Tadzjikistan",
  TK: "Tokelauöarna",
  TL: "Östtimor",
  TM: "Turkmenistan",
  TN: "Tunisien",
  TO: "Tonga",
  TR: "Turkiet",
  TT: "Trinidad och Tobago",
  TV: "Tuvalu",
  TW: "Taiwan",
  TZ: "Tanzania",
  UA: "Ukraina",
  UG: "Uganda",
  UM: "USA:s yttre öar",
  US: "USA",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VA: "Vatikanstaten",
  VC: "Saint Vincent och Grenadinerna",
  VE: "Venezuela",
  VG: "Brittiska Jungfruöarna",
  VI: "Amerikanska Jungfruöarna",
  VN: "Vietnam",
  VU: "Vanuatu",
  WF: "Wallis- och Futunaöarna",
  WS: "Samoa",
  XK: "Kosovo",
  YE: "Jemen",
  YT: "Mayotte",
  ZA: "Sydafrika",
  ZM: "Zambia",
  ZW: "Zimbabwe"
}, t1 = (e) => e1[e] || e, it = (e) => ({
  value: e,
  // The label will be generated from:
  // 2. the country name
  // 3. the country code
  label: t1(e) || e
}), ya = (e, r) => qc(e || "", r), Vt = (e) => "+" + Qc(e), r1 = (e, r) => {
  const t = Vt(r);
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    if (e[n] !== t[n])
      return !1;
    n++;
  }
  return !0;
}, Di = (e, r) => {
  let t = [], n = [];
  return e && r && r.length && (e = e.filter((a) => !r.includes(a)), t = r.map((a) => it(a)), t.sort((a, i) => a.label.localeCompare(i.label))), e && (n = e.map((a) => it(a))), n.sort((a, i) => a.label.localeCompare(i.label)), t.length > 0 ? (t.push({ label: "----", disabled: !0 }), t.concat(n)) : n;
}, n1 = ({
  countries: e
}) => Di(e)[0], a1 = ({
  value: e,
  phoneNumber: r,
  selectedCountry: t,
  countries: n
}) => {
  let a = it("SE"), i = !0;
  return r && r.country ? a = it(r.country) : t && (!e || r1(e, t)) && (a = it(t)), n && a.value && n.indexOf(a.value) < 0 && (i = !1), !i && n && n.length > 0 && (a = n1({ countries: n })), a;
}, xa = (e) => {
  let r;
  return e && (r = e.filter((t) => Ii(t)), r.length === 0 && (r = void 0)), r;
};
function i1({
  onChange: e,
  defaultCountry: r,
  ...t
}) {
  var p;
  const [n, a] = W(""), [i, o] = W(), [d, l] = W(null), [s] = W(() => new Jt(r)), c = (h, m) => {
    if (n == h)
      return;
    if (o(void 0), m && h === "") {
      o("Telefonnummer är obligatoriskt");
      return;
    }
    if (h.length > n.length && h.slice(0, n.length) == n) {
      const x = h.slice(n.length);
      a(s.input(x));
    } else
      s.reset(), s.input(h), a(h);
    const g = s.getNumber(), b = g == null ? void 0 : g.number;
    e(b), d && g && g.isPossible() && l(!1);
  };
  wa(() => {
    var m;
    if (((m = s.getNumber()) == null ? void 0 : m.number) != t.value) {
      s.reset(), a(t.value ? s.input(t.value) : "");
      const v = s.getNumber();
      l(v == null ? null : !v.isPossible());
      const g = v == null ? void 0 : v.number;
      e(g);
    }
  }, [t.value, s, n, e]);
  const $ = (p = s.getNumber()) == null ? void 0 : p.country;
  return /* @__PURE__ */ f.jsx(f.Fragment, { children: t.children({
    country: $,
    errorMessage: i,
    impossible: d,
    inputValue: n,
    onInputChange: c,
    onBlur() {
      const h = s.getNumber();
      if (e(h == null ? void 0 : h.number), !h)
        return l(null);
      const m = h.isPossible();
      l(!m), m && !i ? (s.reset(), a(s.input(h.number))) : a(s.input(""));
    }
  }) });
}
const b1 = ({
  id: e,
  name: r,
  value: t = "",
  onlyCountries: n,
  defaultCountry: a = "SE",
  updatedCountry: i,
  preferredCountries: o = [],
  disabled: d = !1,
  placeholder: l,
  required: s = !1,
  onChange: c,
  error: $,
  ...p
}) => {
  const h = A(null), [m, v] = W(t), [g, b] = W(
    it(a)
  );
  Ii(a) || b(it("SE")), G(() => {
    const N = ya(m);
    b(
      a1({
        value: m || "",
        phoneNumber: N,
        selectedCountry: g.value,
        countries: xa(n) || ba()
      })
    );
  }, [n, m]);
  const x = (N) => {
    const E = ya(N);
    v(N), c(E == null ? void 0 : E.formatInternational());
  }, O = V(() => Di(
    xa(n) || ba(),
    o
  ), [n, o]), L = (N) => {
    var E;
    if (N.value && g.value && g.value !== N.value) {
      if (!m)
        v(Vt(N.value)), (E = h.current) == null || E.focus();
      else {
        const k = Vt(g.value), X = Vt(N.value);
        v(m.replace(k, X));
      }
      b(N);
    }
  };
  G(() => {
    const N = O.find((E) => E.value === i);
    N && !m && L(N);
  }, [i]);
  const Y = () => /* @__PURE__ */ f.jsx(Ze, { value: g, by: "value", onChange: L, children: /* @__PURE__ */ f.jsxs("div", { children: [
    /* @__PURE__ */ f.jsxs(Ze.Button, { className: "relative w-full cursor-default bg-transparent py-2 pl-3 pr-8 text-left focus:outline-none sm:text-sm", children: [
      /* @__PURE__ */ f.jsx("div", { className: "flex items-center", children: /* @__PURE__ */ f.jsx(
        "img",
        {
          src: `http://purecatamphetamine.github.io/country-flag-icons/3x2/${g.value}.svg`,
          alt: g.label,
          title: g.label,
          className: "h-6 w-6 flex-shrink-0"
        }
      ) }),
      /* @__PURE__ */ f.jsx("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: /* @__PURE__ */ f.jsx(
        Pa,
        {
          className: "h-5 w-5 text-gray-400 dark:text-slate-200",
          "aria-hidden": "true"
        }
      ) })
    ] }),
    /* @__PURE__ */ f.jsx(
      Je,
      {
        as: he,
        leave: "transition ease-in duration-100",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ f.jsx(Ze.Options, { className: "absolute z-50 mt-1 max-h-60 w-max overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dark:bg-slate-900", children: O.map((N, E) => /* @__PURE__ */ f.jsx(
          Ze.Option,
          {
            value: N,
            disabled: N.disabled,
            className: ({ active: k }) => `relative cursor-default select-none py-1 pl-3 pr-9 ${k ? "bg-sky-100 text-sky-900 dark:bg-slate-800 dark:text-slate-200" : "text-gray-900 dark:text-slate-300"}`,
            children: ({ selected: k, active: X }) => /* @__PURE__ */ f.jsx(f.Fragment, { children: /* @__PURE__ */ f.jsxs("div", { className: "flex items-center", children: [
              N.value ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
                /* @__PURE__ */ f.jsx(
                  "img",
                  {
                    src: `http://purecatamphetamine.github.io/country-flag-icons/3x2/${N.value}.svg`,
                    alt: N.label,
                    className: "mr-2 h-6 w-6 flex-shrink-0"
                  }
                ),
                /* @__PURE__ */ f.jsx(
                  "span",
                  {
                    className: K(
                      k ? "font-bold" : "font-normal",
                      "truncate"
                    ),
                    children: N.label
                  }
                ),
                /* @__PURE__ */ f.jsx(
                  "span",
                  {
                    className: K(
                      X ? "text-sky-900" : "text-gray-500",
                      "ml-2 truncate"
                    )
                  }
                )
              ] }) : /* @__PURE__ */ f.jsx("hr", { className: "my-1 -mr-9 h-px w-full bg-gray-600" }),
              k ? /* @__PURE__ */ f.jsx(
                "span",
                {
                  className: K(
                    X ? "text-sky-900 dark:text-slate-200" : "text-sky-600 dark:text-slate-300",
                    "absolute inset-y-0 right-0 flex items-center pr-4"
                  ),
                  children: /* @__PURE__ */ f.jsx(Ea, { className: "h-5 w-5", "aria-hidden": "true" })
                }
              ) : null
            ] }) })
          },
          E
        )) })
      }
    )
  ] }) });
  return /* @__PURE__ */ f.jsxs("div", { className: "relative rounded-md shadow-sm", children: [
    /* @__PURE__ */ f.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center", children: Y() }),
    /* @__PURE__ */ f.jsx(
      i1,
      {
        defaultCountry: g.value,
        value: m,
        onChange: x,
        children: ({ impossible: N, onBlur: E, onInputChange: k, inputValue: X, errorMessage: ce }) => /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
          /* @__PURE__ */ f.jsx(
            "input",
            {
              id: e,
              ref: h,
              className: K(
                "block w-full rounded-md pl-16",
                "border",
                "font-roboto font-light text-gray-900 sm:text-sm",
                "focus:outline-none",
                "disabled:cursor-not-allowed disabled:opacity-75",
                "focus:ring-1",
                "dark:border-slate-600/20 dark:bg-slate-700 dark:ring-slate-200/20 dark:focus:ring-sky-500 dark:text-white dark:placeholder-slate-400",
                $ ? "border-red-700 text-red-700 focus:ring-red-700" : "border-gray-300 focus:border-sky-600 focus:ring-sky-600"
              ),
              type: "tel",
              disabled: d,
              required: s,
              placeholder: l,
              name: r,
              value: X,
              onBlur: E,
              onChange: (me) => k(me.target.value, s),
              ...p
            }
          ),
          (N || ce || $) && /* @__PURE__ */ f.jsx("span", { className: "absolute ml-2 mt-1 text-xs text-red-500", children: ce || $ || "Felaktigt telefonnummer" })
        ] })
      }
    )
  ] });
}, y1 = ({
  name: e,
  options: r,
  selected: t,
  valueIdentifier: n,
  keyIdentifier: a,
  disabled: i = !1,
  onChange: o,
  description: d,
  separator: l = ", ",
  error: s
}) => {
  const c = n.split(",");
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx("div", { className: "relative", children: /* @__PURE__ */ f.jsx(Ze, { value: t, name: e, onChange: o, disabled: i, children: ({ open: $ }) => {
      const p = t ? c.map((h) => t[h]) : null;
      return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
        /* @__PURE__ */ f.jsxs(
          Ze.Button,
          {
            className: K(
              "relative w-full cursor-default rounded-md border bg-white py-2 pl-3 pr-10 text-left shadow-sm sm:text-sm",
              "focus:border-sky-600 focus:outline-none focus:ring-1",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "dark:border-slate-600/20 dark:bg-slate-700 dark:ring-slate-200/20 dark:focus:ring-sky-500 dark:text-white dark:placeholder-slate-400",
              s ? "border-red-700 text-red-700 focus:ring-red-700" : "border-gray-300 focus:ring-sky-600"
            ),
            children: [
              /* @__PURE__ */ f.jsx("span", { className: "block truncate font-roboto font-light", children: p ? p.join(l) : "Välj..." }),
              /* @__PURE__ */ f.jsx("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: /* @__PURE__ */ f.jsx(
                Pa,
                {
                  className: "h-5 w-5 text-gray-400 dark:text-white",
                  "aria-hidden": "true"
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ f.jsx(
          Je,
          {
            show: $,
            as: he,
            leave: "transition ease-in duration-100",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ f.jsx(Ze.Options, { className: "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dark:bg-slate-900 dark:ring-slate-200", children: r.map((h) => {
              const m = c.map((v) => h[v]);
              return /* @__PURE__ */ f.jsxs(
                Ze.Option,
                {
                  className: K(
                    "relative flex cursor-default select-none items-center py-2 pl-8 pr-4 ui-active:bg-sky-600 ui-active:text-white ui-not-active:text-gray-900 dark:ui-active:bg-sky-400 dark:ui-active:text-slate-900 dark:ui-not-active:text-white",
                    h.unavailable ? "cursor-not-allowed opacity-50" : ""
                  ),
                  value: h,
                  disabled: h.unavailable,
                  children: [
                    t && h[a] === t[a] ? /* @__PURE__ */ f.jsx("span", { className: "absolute left-0 items-center pl-1.5", children: /* @__PURE__ */ f.jsx(Ea, { className: "h-5 w-5", "aria-hidden": "true" }) }) : null,
                    /* @__PURE__ */ f.jsx(
                      "span",
                      {
                        className: K(
                          t && h[a] === t[a] ? "font-semibold" : "font-light",
                          "block truncate font-roboto"
                        ),
                        children: m.join(l)
                      }
                    )
                  ]
                },
                h[a]
              );
            }) })
          }
        )
      ] });
    } }) }),
    /* @__PURE__ */ f.jsx("div", { className: "mx-2 flex justify-between text-xs text-gray-500 dark:text-slate-400", children: /* @__PURE__ */ f.jsxs("div", { className: "grow", children: [
      !!s && /* @__PURE__ */ f.jsx("span", { className: "text-red-500", children: s }),
      d && !s && /* @__PURE__ */ f.jsx("span", { children: d })
    ] }) })
  ] });
}, x1 = ({
  name: e,
  options: r,
  selected: t,
  keyIdentifier: n,
  valueIdentifier: a,
  separator: i,
  disabled: o = !1,
  onChange: d
}) => {
  const l = a.split(",");
  return /* @__PURE__ */ f.jsx("div", { className: "relative", children: /* @__PURE__ */ f.jsx(
    "select",
    {
      name: e,
      className: "block appearance-none border-0 border-b-2 border-dashed border-sky-300 bg-transparent bg-none px-0 py-0 font-roboto text-sm text-gray-500 focus:border-sky-700 focus:outline-none focus:ring-0 dark:text-slate-200 dark:border-sky-400 dark:focus:border-sky-400",
      onChange: d,
      disabled: o,
      children: r.map((s) => {
        const c = l.map((p) => s[p]);
        let $ = !1;
        return t && ($ = t[n] === s[n]), /* @__PURE__ */ f.jsx(
          "option",
          {
            value: s,
            disabled: s.unavailable,
            selected: $,
            children: c.join(i)
          },
          s[n]
        );
      })
    }
  ) });
};
var ut = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.DANGER = "danger", e.DEFAULT = "default", e.ACCENT = "accent", e))(ut || {});
const w1 = ({
  onClick: e,
  icon: r,
  title: t,
  type: n = ut.DEFAULT,
  disabled: a = !1,
  ...i
}) => /* @__PURE__ */ f.jsx(
  "button",
  {
    type: "button",
    className: K(
      n === ut.PRIMARY ? "bg-sky-600 !text-white focus:ring-sky-600 dark:bg-sky-400 dark:focus:ring-sky-400 dark:!text-slate-900" : "",
      n === ut.DANGER ? "bg-red-700 !text-white focus:ring-red-700 dark:bg-red-500 dark:focus:ring-red-500" : "",
      n === ut.DEFAULT ? "bg-black !text-white focus:ring-black dark:bg-slate-700 dark:focus:ring-slate-700" : "",
      n === ut.ACCENT ? "bg-fuchsia-300 !text-black focus:ring-fuchsia-300 dark:bg-fuchsia-700 dark:focus:ring-fuchsia-700 dark:!text-white" : "",
      "inline-flex items-center rounded-full border border-transparent p-2 shadow-md disabled:cursor-not-allowed disabled:opacity-50",
      "hover:ring-4 hover:ring-white",
      "focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2",
      "dark:hover:ring-0 dark:focus:ring-offset-2 dark:focus:ring-offset-slate-900 dark:focus:ring-2 dark:shadow-none"
    ),
    title: t,
    onClick: e,
    disabled: a,
    ...i,
    children: r
  }
), N1 = ({ label: e, ...r }) => /* @__PURE__ */ f.jsx(
  "h3",
  {
    className: "font-roboto text-2xl font-medium leading-6 text-black dark:text-slate-200",
    ...r,
    children: e
  }
), C1 = ({
  id: e,
  disabled: r = !1,
  required: t = !1,
  placeholder: n,
  rows: a = 5,
  error: i,
  name: o,
  onChange: d,
  ...l
}) => {
  const [s, c] = W(""), $ = (h) => {
    const m = h.target;
    c(m.validationMessage);
  }, p = (h) => {
    const m = h.target;
    s && c(m.validationMessage);
  };
  return /* @__PURE__ */ f.jsxs("div", { children: [
    /* @__PURE__ */ f.jsx(
      "textarea",
      {
        id: e,
        className: K(
          "block w-full rounded-md py-1 px-2 shadow-sm",
          "border border-gray-300",
          "font-roboto font-light text-gray-900 sm:text-sm",
          "focus:outline-none",
          "disabled:cursor-not-allowed disabled:opacity-75",
          "invalid:border-red-700 invalid:text-red-700 invalid:focus:ring-1 invalid:focus:ring-red-700",
          "focus:border-sky-600 focus:ring-1 focus:ring-sky-600",
          "dark:border-slate-600/20 dark:bg-slate-700 dark:ring-slate-200/20 dark:focus:ring-sky-500 dark:text-white dark:placeholder-slate-400"
        ),
        rows: a,
        wrap: "hard",
        disabled: r,
        required: t,
        name: o,
        placeholder: n,
        onBlur: p,
        onChange: d,
        onInvalid: $,
        ...l
      }
    ),
    !!s && /* @__PURE__ */ f.jsx("span", { className: "ml-2 text-xs text-red-500", children: i })
  ] });
}, E1 = ({
  enabled: e,
  label: r,
  description: t,
  disabled: n = !1,
  onChange: a,
  onClick: i
}) => /* @__PURE__ */ f.jsxs(Bt.Group, { as: "div", className: "flex items-center justify-between font-roboto", children: [
  /* @__PURE__ */ f.jsxs(
    Bt,
    {
      checked: e,
      onChange: a,
      onClick: i,
      disabled: n,
      className: K(
        e ? "bg-sky-600 dark:bg-sky-400" : "bg-gray-200 dark:bg-slate-500",
        n ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        "relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 dark:ring-offset-slate-900 focus:ring-offset-2 dark:focus:ring-sky-400"
      ),
      children: [
        /* @__PURE__ */ f.jsx("span", { className: "sr-only", children: "Use setting" }),
        /* @__PURE__ */ f.jsxs(
          "span",
          {
            className: K(
              e ? "translate-x-5" : "translate-x-0",
              "pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out dark:bg-slate-200"
            ),
            children: [
              /* @__PURE__ */ f.jsx(
                "span",
                {
                  className: K(
                    e ? "opacity-0 duration-100 ease-out" : "opacity-100 duration-200 ease-in",
                    "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                  ),
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ f.jsx("svg", { className: "h-3 w-3 text-gray-400", fill: "none", viewBox: "0 0 12 12", children: /* @__PURE__ */ f.jsx(
                    "path",
                    {
                      d: "M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2",
                      stroke: "currentColor",
                      strokeWidth: 2,
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    }
                  ) })
                }
              ),
              /* @__PURE__ */ f.jsx(
                "span",
                {
                  className: K(
                    e ? "opacity-100 duration-200 ease-in" : "opacity-0 duration-100 ease-out",
                    "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                  ),
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ f.jsx("svg", { className: "h-3 w-3 text-sky-600", fill: "currentColor", viewBox: "0 0 12 12", children: /* @__PURE__ */ f.jsx("path", { d: "M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" }) })
                }
              )
            ]
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ f.jsxs("span", { className: "ml-2 flex flex-grow flex-col", children: [
    /* @__PURE__ */ f.jsx(
      Bt.Label,
      {
        as: "span",
        className: "font-roboto text-sm font-medium text-gray-900 dark:text-slate-200",
        passive: !0,
        children: r
      }
    ),
    /* @__PURE__ */ f.jsx(
      Bt.Description,
      {
        as: "span",
        className: "font-roboto text-xs text-gray-500 dark:text-slate-200",
        children: t
      }
    )
  ] })
] });
export {
  s1 as Alert,
  vn as Button,
  c1 as ConfirmDialog,
  f1 as DatePicker,
  $1 as Headline,
  h1 as IconButton,
  g1 as Input,
  m1 as Label,
  p1 as Modal,
  v1 as Paragraph,
  b1 as PhoneInput,
  y1 as SelectMenu,
  x1 as SimpleSelect,
  w1 as SmallIconButton,
  N1 as Subtitle,
  C1 as Textarea,
  E1 as Toggle
};
