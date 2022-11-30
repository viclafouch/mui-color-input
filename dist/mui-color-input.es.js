import c from "react";
import Ct from "@mui/material/InputAdornment";
import At from "@mui/material/Button";
import { styled as E } from "@mui/material/styles";
import { jsx as h, jsxs as ct, Fragment as kt } from "react/jsx-runtime";
import Rt from "@mui/material/Popover";
import K from "@mui/material/Box";
import lt from "@mui/material/Slider";
import Ht from "@mui/material/TextField";
const It = "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(135deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(135deg, transparent 75%, #ccc 75%) /*! @noflip */", Pt = "linear-gradient(to top, #000000, transparent), linear-gradient(to right, #ffffff, transparent) /*! @noflip */", Tt = {
  Button: E(At)(() => ({
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 0, 4px -4px, 0px 4px",
    transition: "none",
    boxShadow: "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
    border: 0,
    borderRadius: 4,
    width: "24px",
    aspectRatio: "1 / 1",
    height: "24px",
    minWidth: 0
  }))
}, Bt = (e) => {
  const {
    bgColor: t,
    className: r,
    disablePopover: n,
    isBgColorValid: a,
    ...o
  } = e;
  return /* @__PURE__ */ h(Tt.Button, {
    disableTouchRipple: !0,
    style: {
      backgroundColor: a ? t : void 0,
      backgroundImage: a ? void 0 : It,
      cursor: n ? "default" : void 0
    },
    className: `MuiColorInput-Button ${r || ""}`,
    ...o
  });
}, Ft = {
  Container: E("div")(() => ({
    width: 300,
    padding: 8
  }))
}, Et = (e) => {
  const {
    children: t,
    className: r,
    position: n,
    ...a
  } = e;
  return /* @__PURE__ */ h(Rt, {
    className: `MuiColorInput-Popover ${r || ""}`,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: n === "start" ? "left" : "right"
    },
    ...a,
    children: /* @__PURE__ */ h(Ft.Container, {
      children: t
    })
  });
}, Nt = {
  Slider: E(lt, {
    shouldForwardProp: (e) => e !== "$rgbaFrom" && e !== "$rgbaTo"
  })(() => ({
    height: 8,
    "& .MuiSlider-rail": {
      opacity: 1,
      background: "linear-gradient(to right, rgba(var(--rgb-r), var(--rgb-g), var(--rgb-b), 0) 0%, rgba(var(--rgb-r), var(--rgb-g), var(--rgb-b), 1) 100%)"
    },
    "& .MuiSlider-track": {
      color: "transparent",
      border: 0
    },
    "& .MuiSlider-thumb": {
      backgroundColor: "#ffffff",
      border: "3px solid currentColor"
    }
  }))
}, Vt = (e) => {
  const {
    rgbColor: t,
    style: r,
    className: n,
    ...a
  } = e, o = {
    "--rgb-r": t.r,
    "--rgb-g": t.g,
    "--rgb-b": t.b,
    ...r
  };
  return /* @__PURE__ */ h(Nt.Slider, {
    className: `MuiColorInput-AlphaSlider ${n || ""}`,
    style: o,
    ...a
  });
}, L = {
  up: "ArrowUp",
  down: "ArrowDown",
  left: "ArrowLeft",
  right: "ArrowRight"
}, $t = {
  ArrowUp: {
    type: "hsvV",
    value: 1
  },
  ArrowDown: {
    type: "hsvV",
    value: -1
  },
  ArrowLeft: {
    type: "hsvS",
    value: -1
  },
  ArrowRight: {
    type: "hsvS",
    value: 1
  }
};
function Lt(e) {
  return e === L.up || e === L.down || e === L.left || e === L.right;
}
function _(e, t, r) {
  return Math.max(t, Math.min(e, r));
}
function rt(e) {
  return typeof e == "number";
}
function nt(e, t, r) {
  const n = e.toLocaleString("en", {
    useGrouping: !1,
    minimumFractionDigits: t,
    maximumFractionDigits: r
  });
  return Number(n);
}
function Ot(e, t, r) {
  const n = e.getBoundingClientRect(), a = t - n.left, o = r - n.top;
  return {
    x: _(a / n.width, 0, 1),
    y: _(1 - o / n.height, 0, 1)
  };
}
function Dt(e) {
  const t = c.useRef();
  return t.current = e, c.useCallback((...r) => t.current?.(...r), []);
}
const ot = {
  Space: E("div")(() => ({
    width: "100%",
    height: "180px",
    boxSizing: "border-box",
    outline: 0,
    position: "relative",
    backgroundImage: Pt
  })),
  Thumb: E("div")(() => ({
    position: "absolute",
    border: "3px solid #ffffff",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    marginLeft: "-10px /*! @noflip */",
    marginBottom: "-10px /*! @noflip */",
    outline: 0,
    boxSizing: "border-box",
    willChange: "left, bottom",
    transition: "box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    "&:hover": {
      boxShadow: "0px 0px 0px 4px rgba(255 255 255 / 0.16)"
    },
    "&.MuiColorInput-Thumb-active": {
      boxShadow: "0px 0px 0px 8px rgba(255 255 255 / 0.16)"
    },
    "@media (hover: none)": {
      boxShadow: "none"
    }
  }))
}, _t = (e) => {
  const {
    hsv: t,
    onChange: r,
    currentHue: n
  } = e, a = c.useRef(!1), o = c.useRef(null), [i, s] = c.useState(!1), f = Dt((d, S) => {
    if (!o.current)
      return;
    const {
      x: k,
      y: I
    } = Ot(o.current, d, S);
    r({
      s: k,
      v: I
    }), o.current && document.activeElement !== o.current && o.current.focus();
  }), b = c.useCallback(() => {
    a.current && (a.current = !1, s(!1));
  }, []), m = c.useCallback((d) => {
    a.current && f(d.clientX, d.clientY);
  }, []);
  c.useEffect(() => (document.addEventListener("mousemove", m, !1), document.addEventListener("mouseup", b, !1), () => {
    document.removeEventListener("mousemove", m, !1), document.removeEventListener("mouseup", b, !1);
  }), [b, m]);
  const p = (d) => {
    d.preventDefault(), a.current = !0, f(d.clientX, d.clientY), s(!0);
  }, y = (d) => {
    if (Lt(d.key)) {
      d.preventDefault();
      const {
        type: S,
        value: k
      } = $t[d.key], I = d.shiftKey ? 10 : 1, P = S === "hsvS" ? t.s : t.v, N = _(P + k * I * 0.01, 0, 1);
      s(!0), r({
        s: S === "hsvS" ? N : t.s,
        v: S === "hsvV" ? N : t.v
      });
    }
  }, w = t.s * 100, H = t.v * 100;
  return /* @__PURE__ */ h(ot.Space, {
    onMouseDown: p,
    ref: o,
    className: "MuiColorInput-ColorSpace",
    style: {
      backgroundColor: `hsl(${n} 100% 50%)`
    },
    role: "slider",
    "aria-valuetext": `Saturation ${nt(w, 0, 0)}%, Brightness ${nt(H, 0, 0)}%`,
    onKeyDown: y,
    tabIndex: 0,
    children: /* @__PURE__ */ h(ot.Thumb, {
      "aria-label": "Color space thumb",
      className: i ? "MuiColorInput-Thumb-active" : "",
      style: {
        left: `${w}%`,
        bottom: `${H}%`
      }
    })
  });
}, jt = {
  Slider: E(lt)(() => ({
    height: 8,
    "& .MuiSlider-rail": {
      opacity: 1,
      background: "linear-gradient(to right, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%) /*! @noflip */"
    },
    "& .MuiSlider-track": {
      color: "transparent",
      border: 0
    },
    "& .MuiSlider-thumb": {
      backgroundColor: "#ffffff",
      border: "3px solid currentColor"
    }
  }))
}, Gt = (e) => {
  const {
    className: t,
    ...r
  } = e;
  return /* @__PURE__ */ h(jt.Slider, {
    className: `MuiColorInput-HueSlider ${t || ""}`,
    ...r
  });
};
function l(e, t) {
  Wt(e) && (e = "100%");
  var r = Kt(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function O(e) {
  return Math.min(1, Math.max(0, e));
}
function Wt(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Kt(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function dt(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function D(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function R(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Ut(e, t, r) {
  return {
    r: l(e, 255) * 255,
    g: l(t, 255) * 255,
    b: l(r, 255) * 255
  };
}
function at(e, t, r) {
  e = l(e, 255), t = l(t, 255), r = l(r, 255);
  var n = Math.max(e, t, r), a = Math.min(e, t, r), o = 0, i = 0, s = (n + a) / 2;
  if (n === a)
    i = 0, o = 0;
  else {
    var f = n - a;
    switch (i = s > 0.5 ? f / (2 - n - a) : f / (n + a), n) {
      case e:
        o = (t - r) / f + (t < r ? 6 : 0);
        break;
      case t:
        o = (r - e) / f + 2;
        break;
      case r:
        o = (e - t) / f + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: i, l: s };
}
function U(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function qt(e, t, r) {
  var n, a, o;
  if (e = l(e, 360), t = l(t, 100), r = l(r, 100), t === 0)
    a = r, o = r, n = r;
  else {
    var i = r < 0.5 ? r * (1 + t) : r + t - r * t, s = 2 * r - i;
    n = U(s, i, e + 1 / 3), a = U(s, i, e), o = U(s, i, e - 1 / 3);
  }
  return { r: n * 255, g: a * 255, b: o * 255 };
}
function it(e, t, r) {
  e = l(e, 255), t = l(t, 255), r = l(r, 255);
  var n = Math.max(e, t, r), a = Math.min(e, t, r), o = 0, i = n, s = n - a, f = n === 0 ? 0 : s / n;
  if (n === a)
    o = 0;
  else {
    switch (n) {
      case e:
        o = (t - r) / s + (t < r ? 6 : 0);
        break;
      case t:
        o = (r - e) / s + 2;
        break;
      case r:
        o = (e - t) / s + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: f, v: i };
}
function zt(e, t, r) {
  e = l(e, 360) * 6, t = l(t, 100), r = l(r, 100);
  var n = Math.floor(e), a = e - n, o = r * (1 - t), i = r * (1 - a * t), s = r * (1 - (1 - a) * t), f = n % 6, b = [r, i, o, o, s, r][f], m = [s, r, r, i, o, o][f], p = [o, o, s, r, r, i][f];
  return { r: b * 255, g: m * 255, b: p * 255 };
}
function st(e, t, r, n) {
  var a = [
    R(Math.round(e).toString(16)),
    R(Math.round(t).toString(16)),
    R(Math.round(r).toString(16))
  ];
  return n && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function Yt(e, t, r, n, a) {
  var o = [
    R(Math.round(e).toString(16)),
    R(Math.round(t).toString(16)),
    R(Math.round(r).toString(16)),
    R(Xt(n))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function Xt(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function ut(e) {
  return v(e) / 255;
}
function v(e) {
  return parseInt(e, 16);
}
function Zt(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Y = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function Jt(e) {
  var t = { r: 0, g: 0, b: 0 }, r = 1, n = null, a = null, o = null, i = !1, s = !1;
  return typeof e == "string" && (e = ee(e)), typeof e == "object" && (M(e.r) && M(e.g) && M(e.b) ? (t = Ut(e.r, e.g, e.b), i = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : M(e.h) && M(e.s) && M(e.v) ? (n = D(e.s), a = D(e.v), t = zt(e.h, n, a), i = !0, s = "hsv") : M(e.h) && M(e.s) && M(e.l) && (n = D(e.s), o = D(e.l), t = qt(e.h, n, o), i = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = dt(r), {
    ok: i,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var Qt = "[-\\+]?\\d+%?", te = "[-\\+]?\\d*\\.\\d+%?", A = "(?:".concat(te, ")|(?:").concat(Qt, ")"), q = "[\\s|\\(]+(".concat(A, ")[,|\\s]+(").concat(A, ")[,|\\s]+(").concat(A, ")\\s*\\)?"), z = "[\\s|\\(]+(".concat(A, ")[,|\\s]+(").concat(A, ")[,|\\s]+(").concat(A, ")[,|\\s]+(").concat(A, ")\\s*\\)?"), x = {
  CSS_UNIT: new RegExp(A),
  rgb: new RegExp("rgb" + q),
  rgba: new RegExp("rgba" + z),
  hsl: new RegExp("hsl" + q),
  hsla: new RegExp("hsla" + z),
  hsv: new RegExp("hsv" + q),
  hsva: new RegExp("hsva" + z),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function ee(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Y[e])
    e = Y[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = x.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = x.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = x.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = x.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = x.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = x.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = x.hex8.exec(e), r ? {
    r: v(r[1]),
    g: v(r[2]),
    b: v(r[3]),
    a: ut(r[4]),
    format: t ? "name" : "hex8"
  } : (r = x.hex6.exec(e), r ? {
    r: v(r[1]),
    g: v(r[2]),
    b: v(r[3]),
    format: t ? "name" : "hex"
  } : (r = x.hex4.exec(e), r ? {
    r: v(r[1] + r[1]),
    g: v(r[2] + r[2]),
    b: v(r[3] + r[3]),
    a: ut(r[4] + r[4]),
    format: t ? "name" : "hex8"
  } : (r = x.hex3.exec(e), r ? {
    r: v(r[1] + r[1]),
    g: v(r[2] + r[2]),
    b: v(r[3] + r[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function M(e) {
  return Boolean(x.CSS_UNIT.exec(String(e)));
}
var C = function() {
  function e(t, r) {
    t === void 0 && (t = ""), r === void 0 && (r = {});
    var n;
    if (t instanceof e)
      return t;
    typeof t == "number" && (t = Zt(t)), this.originalInput = t;
    var a = Jt(t);
    this.originalInput = t, this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = r.format) !== null && n !== void 0 ? n : a.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = a.ok;
  }
  return e.prototype.isDark = function() {
    return this.getBrightness() < 128;
  }, e.prototype.isLight = function() {
    return !this.isDark();
  }, e.prototype.getBrightness = function() {
    var t = this.toRgb();
    return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
  }, e.prototype.getLuminance = function() {
    var t = this.toRgb(), r, n, a, o = t.r / 255, i = t.g / 255, s = t.b / 255;
    return o <= 0.03928 ? r = o / 12.92 : r = Math.pow((o + 0.055) / 1.055, 2.4), i <= 0.03928 ? n = i / 12.92 : n = Math.pow((i + 0.055) / 1.055, 2.4), s <= 0.03928 ? a = s / 12.92 : a = Math.pow((s + 0.055) / 1.055, 2.4), 0.2126 * r + 0.7152 * n + 0.0722 * a;
  }, e.prototype.getAlpha = function() {
    return this.a;
  }, e.prototype.setAlpha = function(t) {
    return this.a = dt(t), this.roundA = Math.round(100 * this.a) / 100, this;
  }, e.prototype.toHsv = function() {
    var t = it(this.r, this.g, this.b);
    return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
  }, e.prototype.toHsvString = function() {
    var t = it(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), a = Math.round(t.v * 100);
    return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(a, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
  }, e.prototype.toHsl = function() {
    var t = at(this.r, this.g, this.b);
    return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
  }, e.prototype.toHslString = function() {
    var t = at(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), a = Math.round(t.l * 100);
    return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(a, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
  }, e.prototype.toHex = function(t) {
    return t === void 0 && (t = !1), st(this.r, this.g, this.b, t);
  }, e.prototype.toHexString = function(t) {
    return t === void 0 && (t = !1), "#" + this.toHex(t);
  }, e.prototype.toHex8 = function(t) {
    return t === void 0 && (t = !1), Yt(this.r, this.g, this.b, this.a, t);
  }, e.prototype.toHex8String = function(t) {
    return t === void 0 && (t = !1), "#" + this.toHex8(t);
  }, e.prototype.toRgb = function() {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  }, e.prototype.toRgbString = function() {
    var t = Math.round(this.r), r = Math.round(this.g), n = Math.round(this.b);
    return this.a === 1 ? "rgb(".concat(t, ", ").concat(r, ", ").concat(n, ")") : "rgba(".concat(t, ", ").concat(r, ", ").concat(n, ", ").concat(this.roundA, ")");
  }, e.prototype.toPercentageRgb = function() {
    var t = function(r) {
      return "".concat(Math.round(l(r, 255) * 100), "%");
    };
    return {
      r: t(this.r),
      g: t(this.g),
      b: t(this.b),
      a: this.a
    };
  }, e.prototype.toPercentageRgbString = function() {
    var t = function(r) {
      return Math.round(l(r, 255) * 100);
    };
    return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
  }, e.prototype.toName = function() {
    if (this.a === 0)
      return "transparent";
    if (this.a < 1)
      return !1;
    for (var t = "#" + st(this.r, this.g, this.b, !1), r = 0, n = Object.entries(Y); r < n.length; r++) {
      var a = n[r], o = a[0], i = a[1];
      if (t === i)
        return o;
    }
    return !1;
  }, e.prototype.toString = function(t) {
    var r = Boolean(t);
    t = t ?? this.format;
    var n = !1, a = this.a < 1 && this.a >= 0, o = !r && a && (t.startsWith("hex") || t === "name");
    return o ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (n = this.toRgbString()), t === "prgb" && (n = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (n = this.toHexString()), t === "hex3" && (n = this.toHexString(!0)), t === "hex4" && (n = this.toHex8String(!0)), t === "hex8" && (n = this.toHex8String()), t === "name" && (n = this.toName()), t === "hsl" && (n = this.toHslString()), t === "hsv" && (n = this.toHsvString()), n || this.toHexString());
  }, e.prototype.toNumber = function() {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  }, e.prototype.clone = function() {
    return new e(this.toString());
  }, e.prototype.lighten = function(t) {
    t === void 0 && (t = 10);
    var r = this.toHsl();
    return r.l += t / 100, r.l = O(r.l), new e(r);
  }, e.prototype.brighten = function(t) {
    t === void 0 && (t = 10);
    var r = this.toRgb();
    return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r);
  }, e.prototype.darken = function(t) {
    t === void 0 && (t = 10);
    var r = this.toHsl();
    return r.l -= t / 100, r.l = O(r.l), new e(r);
  }, e.prototype.tint = function(t) {
    return t === void 0 && (t = 10), this.mix("white", t);
  }, e.prototype.shade = function(t) {
    return t === void 0 && (t = 10), this.mix("black", t);
  }, e.prototype.desaturate = function(t) {
    t === void 0 && (t = 10);
    var r = this.toHsl();
    return r.s -= t / 100, r.s = O(r.s), new e(r);
  }, e.prototype.saturate = function(t) {
    t === void 0 && (t = 10);
    var r = this.toHsl();
    return r.s += t / 100, r.s = O(r.s), new e(r);
  }, e.prototype.greyscale = function() {
    return this.desaturate(100);
  }, e.prototype.spin = function(t) {
    var r = this.toHsl(), n = (r.h + t) % 360;
    return r.h = n < 0 ? 360 + n : n, new e(r);
  }, e.prototype.mix = function(t, r) {
    r === void 0 && (r = 50);
    var n = this.toRgb(), a = new e(t).toRgb(), o = r / 100, i = {
      r: (a.r - n.r) * o + n.r,
      g: (a.g - n.g) * o + n.g,
      b: (a.b - n.b) * o + n.b,
      a: (a.a - n.a) * o + n.a
    };
    return new e(i);
  }, e.prototype.analogous = function(t, r) {
    t === void 0 && (t = 6), r === void 0 && (r = 30);
    var n = this.toHsl(), a = 360 / r, o = [this];
    for (n.h = (n.h - (a * t >> 1) + 720) % 360; --t; )
      n.h = (n.h + a) % 360, o.push(new e(n));
    return o;
  }, e.prototype.complement = function() {
    var t = this.toHsl();
    return t.h = (t.h + 180) % 360, new e(t);
  }, e.prototype.monochromatic = function(t) {
    t === void 0 && (t = 6);
    for (var r = this.toHsv(), n = r.h, a = r.s, o = r.v, i = [], s = 1 / t; t--; )
      i.push(new e({ h: n, s: a, v: o })), o = (o + s) % 1;
    return i;
  }, e.prototype.splitcomplement = function() {
    var t = this.toHsl(), r = t.h;
    return [
      this,
      new e({ h: (r + 72) % 360, s: t.s, l: t.l }),
      new e({ h: (r + 216) % 360, s: t.s, l: t.l })
    ];
  }, e.prototype.onBackground = function(t) {
    var r = this.toRgb(), n = new e(t).toRgb();
    return new e({
      r: n.r + (r.r - n.r) * r.a,
      g: n.g + (r.g - n.g) * r.a,
      b: n.b + (r.b - n.b) * r.a
    });
  }, e.prototype.triad = function() {
    return this.polyad(3);
  }, e.prototype.tetrad = function() {
    return this.polyad(4);
  }, e.prototype.polyad = function(t) {
    for (var r = this.toHsl(), n = r.h, a = [this], o = 360 / t, i = 1; i < t; i++)
      a.push(new e({ h: (n + i * o) % 360, s: r.s, l: r.l }));
    return a;
  }, e.prototype.equals = function(t) {
    return this.toRgbString() === new e(t).toRgbString();
  }, e;
}();
function re(e) {
  return typeof e == "string";
}
function F(e, t) {
  return e.toString(t);
}
function ft(e, t, r) {
  return new C(e === "transparent" ? t : e, r);
}
function ne(e) {
  return re(e) ? e : new C(e).toString();
}
const oe = (e) => {
  const {
    currentColor: t,
    format: r,
    onChange: n,
    isAlphaHidden: a
  } = e, [o, i] = c.useState(t.toHsv()), s = (m, p) => {
    if (!rt(p))
      return;
    const y = _(360 * p / 100, 0, 359);
    i((H) => ({
      ...H,
      h: y
    }));
    const w = new C({
      ...o,
      a: t.toHsv().a,
      h: y
    });
    n?.(F(w, r));
  }, f = (m, p) => {
    if (!rt(p))
      return;
    const y = t.clone().setAlpha(p);
    n?.(F(y, r));
  }, b = ({
    s: m,
    v: p
  }) => {
    const y = new C({
      h: o.h,
      a: t.toHsv().a,
      s: m,
      v: p
    });
    i((w) => ({
      ...w,
      s: m,
      v: p
    })), n?.(F(y, r));
  };
  return /* @__PURE__ */ ct(K, {
    className: "MuiColorInput-PopoverBody",
    children: [/* @__PURE__ */ h(_t, {
      currentHue: o.h,
      hsv: o,
      onChange: b
    }), /* @__PURE__ */ h(K, {
      mt: "10px",
      px: "3px",
      children: /* @__PURE__ */ h(Gt, {
        min: 0,
        max: 100,
        step: 1,
        onChange: s,
        "aria-label": "hue",
        value: o.h * 100 / 360
      })
    }), a ? null : /* @__PURE__ */ h(K, {
      mt: "10px",
      px: "3px",
      children: /* @__PURE__ */ h(Vt, {
        min: 0,
        max: 1,
        step: 0.01,
        "aria-label": "alpha",
        rgbColor: t.toRgb(),
        onChange: f,
        value: t.getAlpha()
      })
    })]
  });
}, ae = c.forwardRef((e, t) => {
  const {
    className: r,
    ...n
  } = e;
  return /* @__PURE__ */ h(Ht, {
    className: `MuiColorInput-TextField ${r || ""}`,
    ref: t,
    ...n
  });
}), ie = "black", se = "rgb";
function ue(e) {
  return typeof e == "object" && !Array.isArray(e) && e !== null;
}
function ht(e, t) {
  typeof t == "function" ? t(e) : t && ue(t) && "current" in t && (t.current = e);
}
function me(e) {
  return new C(e).isValid;
}
const ye = c.forwardRef((e, t) => {
  const {
    value: r,
    format: n,
    onChange: a,
    AdornmentProps: o = {
      position: "start"
    },
    PopoverProps: i,
    fallbackValue: s,
    isAlphaHidden: f,
    disablePopover: b,
    ...m
  } = e, {
    onBlur: p,
    InputProps: y,
    ...w
  } = m, {
    onClose: H,
    ...d
  } = i || {}, S = s || ie, k = w.disabled || y?.disabled || !1, I = c.useRef(null), P = c.useRef(null), [N, X] = c.useState(null), T = n || se, j = ft(r, S, {
    format: T
  }), [Z, V] = c.useState(r), [J, $] = c.useState(r), gt = (u) => {
    u.preventDefault(), u.stopPropagation(), !k && !b && X(I.current);
  }, G = (u) => {
    const g = new C(u);
    a?.(u, {
      hex: g.toHexString(),
      hsv: g.toHsvString(),
      hsl: g.toHslString(),
      rgb: g.toRgbString(),
      hex8: g.toHex8String()
    });
  }, pt = (u) => {
    const g = u.target.value;
    V(g);
    const W = new C(g), B = F(W, T);
    $(B), G(B);
  }, bt = (...u) => {
    H?.(...u), X(null), queueMicrotask(() => {
      P.current?.focus();
    });
  }, vt = (u) => {
    p?.(u);
    const g = new C(Z);
    if (g.isValid)
      g.format !== T && V(F(g, T));
    else {
      const W = new C(S), B = F(W, T);
      V(B), $(B), G(B);
    }
  };
  c.useEffect(() => {
    if (r !== J) {
      const g = ft(r, S).originalInput;
      $(g), V(g);
    }
  }, [r, J, S]);
  const mt = (u) => {
    V(u), $(u), G(u);
  }, yt = (u) => {
    I.current = u, t && ht(u, t);
  }, xt = (u) => {
    P.current = u, P && ht(u, P);
  }, Q = Boolean(N), tt = Q ? "color-popover" : void 0, St = {
    disabled: k,
    "aria-describedby": tt,
    disablePopover: b || !1,
    component: b ? "span" : void 0,
    bgColor: j.toString(),
    isBgColorValid: j.isValid,
    onClick: b ? void 0 : gt
  }, wt = o.CustomAdornment ?? Bt, et = /* @__PURE__ */ h(Ct, {
    position: o.position,
    children: /* @__PURE__ */ h(wt, {
      ...St
    })
  }), Mt = o.position === "start" ? {
    startAdornment: et
  } : {
    endAdornment: et
  };
  return /* @__PURE__ */ ct(kt, {
    children: [/* @__PURE__ */ h(ae, {
      ref: yt,
      spellCheck: "false",
      type: "text",
      autoComplete: "off",
      onChange: pt,
      value: ne(Z),
      onBlur: vt,
      inputRef: xt,
      disabled: k,
      InputProps: {
        ...Mt,
        ...y
      },
      ...w
    }), b ? null : /* @__PURE__ */ h(Et, {
      id: tt,
      open: Q,
      position: o.position,
      anchorEl: N,
      onClose: bt,
      ...d,
      children: /* @__PURE__ */ h(oe, {
        onChange: mt,
        currentColor: j,
        format: T,
        isAlphaHidden: f
      })
    })]
  });
});
export {
  ye as MuiColorInput,
  me as matchIsValidColor
};
