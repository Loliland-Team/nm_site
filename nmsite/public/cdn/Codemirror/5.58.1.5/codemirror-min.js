const cm = {addon: {}, mode: {}, lib: {}};
cm.lib = function() {
   "use strict";
   var e = navigator.userAgent, t = navigator.platform, n = /gecko\/\d/i.test(e), r = /MSIE \d/.test(e),
      i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e), o = /Edge\/(\d+)/.exec(e), a = r || i || o,
      l = a && (r ? document.documentMode || 6 : +(o || i)[1]), s = !o && /WebKit\//.test(e),
      c = s && /Qt\/\d+\.\d+/.test(e), u = !o && /Chrome\//.test(e), d = /Opera\//.test(e),
      f = /Apple Computer/.test(navigator.vendor), h = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e), p = /PhantomJS/.test(e),
      m = !o && /AppleWebKit/.test(e) && /Mobile\/\w+/.test(e), g = /Android/.test(e),
      v = m || g || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e), y = m || /Mac/.test(t),
      b = /\bCrOS\b/.test(e), w = /win/i.test(t), x = d && e.match(/Version\/(\d*\.\d*)/);
   x && (x = Number(x[1])), x && x >= 15 && (d = !1, s = !0);
   var k = y && (c || d && (null == x || x < 12.11)), C = n || a && l >= 9;

   function S(e) {
      return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*")
   }

   var T, L = function(e, t) {
      var n = e.className, r = S(t).exec(n);
      if (r) {
         var i = n.slice(r.index + r[0].length);
         e.className = n.slice(0, r.index) + (i ? r[1] + i : "")
      }
   };

   function M(e) {
      for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
      return e
   }

   function _(e, t) {
      return M(e).appendChild(t)
   }

   function O(e, t, n, r) {
      var i = document.createElement(e);
      if (n && (i.className = n), r && (i.style.cssText = r), "string" == typeof t) i.appendChild(document.createTextNode(t)); else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
      return i
   }

   function A(e, t, n, r) {
      var i = O(e, t, n, r);
      return i.setAttribute("role", "presentation"), i
   }

   function N(e, t) {
      if (3 == t.nodeType && (t = t.parentNode), e.contains) return e.contains(t);
      do {
         if (11 == t.nodeType && (t = t.host), t == e) return !0
      } while (t = t.parentNode)
   }

   function z() {
      var e;
      try {
         e = document.activeElement
      } catch (t) {
         e = document.body || null
      }
      for (; e && e.shadowRoot && e.shadowRoot.activeElement;) e = e.shadowRoot.activeElement;
      return e
   }

   function F(e, t) {
      var n = e.className;
      S(t).test(n) || (e.className += (n ? " " : "") + t)
   }

   function P(e, t) {
      for (var n = e.split(" "), r = 0; r < n.length; r++) n[r] && !S(n[r]).test(t) && (t += " " + n[r]);
      return t
   }

   T = document.createRange ? function(e, t, n, r) {
      var i = document.createRange();
      return i.setEnd(r || e, n), i.setStart(e, t), i
   } : function(e, t, n) {
      var r = document.body.createTextRange();
      try {
         r.moveToElementText(e.parentNode)
      } catch (e) {
         return r
      }
      return r.collapse(!0), r.moveEnd("character", n), r.moveStart("character", t), r
   };
   var D = function(e) {
      e.select()
   };

   function E(e) {
      var t = Array.prototype.slice.call(arguments, 1);
      return function() {
         return e.apply(null, t)
      }
   }

   function H(e, t, n) {
      for (var r in t || (t = {}), e) !e.hasOwnProperty(r) || !1 === n && t.hasOwnProperty(r) || (t[r] = e[r]);
      return t
   }

   function W(e, t, n, r, i) {
      null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
      for (var o = r || 0, a = i || 0; ;) {
         var l = e.indexOf("\t", o);
         if (l < 0 || l >= t) return a + (t - o);
         a += l - o, a += n - a % n, o = l + 1
      }
   }

   m ? D = function(e) {
      e.selectionStart = 0, e.selectionEnd = e.value.length
   } : a && (D = function(e) {
      try {
         e.select()
      } catch (e) {
      }
   });
   var I = function() {
      this.id = null
   };

   function R(e, t) {
      for (var n = 0; n < e.length; ++n) if (e[n] == t) return n;
      return -1
   }

   I.prototype.set = function(e, t) {
      clearTimeout(this.id), this.id = setTimeout(t, e)
   };
   var q = 30, B = {
      toString: function() {
         return "CodeMirror.Pass"
      }
   }, j = {scroll: !1}, U = {origin: "*mouse"}, V = {origin: "+move"};

   function G(e, t, n) {
      for (var r = 0, i = 0; ;) {
         var o = e.indexOf("\t", r);
         -1 == o && (o = e.length);
         var a = o - r;
         if (o == e.length || i + a >= t) return r + Math.min(a, t - i);
         if (i += o - r, r = o + 1, (i += n - i % n) >= t) return r
      }
   }

   var K = [""];

   function $(e) {
      for (; K.length <= e;) K.push(X(K) + " ");
      return K[e]
   }

   function X(e) {
      return e[e.length - 1]
   }

   function Y(e, t) {
      for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r);
      return n
   }

   function Q() {
   }

   function Z(e, t) {
      var n;
      return Object.create ? n = Object.create(e) : (Q.prototype = e, n = new Q), t && H(t, n), n
   }

   var J = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;

   function ee(e) {
      return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || J.test(e))
   }

   function te(e, t) {
      return t ? !!(t.source.indexOf("\\w") > -1 && ee(e)) || t.test(e) : ee(e)
   }

   function ne(e) {
      for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
      return !0
   }

   var re = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;

   function ie(e) {
      return e.charCodeAt(0) >= 768 && re.test(e)
   }

   function oe(e, t, n) {
      for (; (n < 0 ? t > 0 : t < e.length) && ie(e.charAt(t));) t += n;
      return t
   }

   function ae(e, t, n) {
      for (var r = t > n ? -1 : 1; ;) {
         if (t == n) return t;
         var i = (t + n) / 2, o = r < 0 ? Math.ceil(i) : Math.floor(i);
         if (o == t) return e(o) ? t : n;
         e(o) ? n = o : t = o + r
      }
   }

   function le(e, t, r) {
      var i = this;
      this.input = r, i.scrollbarFiller = O("div", null, "CodeMirror-scrollbar-filler"), i.scrollbarFiller.setAttribute("cm-not-content", "true"), i.gutterFiller = O("div", null, "CodeMirror-gutter-filler"), i.gutterFiller.setAttribute("cm-not-content", "true"), i.lineDiv = A("div", null, "CodeMirror-code"), i.selectionDiv = O("div", null, null, "position: relative; z-index: 1"), i.cursorDiv = O("div", null, "CodeMirror-cursors"), i.measure = O("div", null, "CodeMirror-measure"), i.lineMeasure = O("div", null, "CodeMirror-measure"), i.lineSpace = A("div", [i.measure, i.lineMeasure, i.selectionDiv, i.cursorDiv, i.lineDiv], null, "position: relative; outline: none");
      var o = A("div", [i.lineSpace], "CodeMirror-lines");
      i.mover = O("div", [o], null, "position: relative"), i.sizer = O("div", [i.mover], "CodeMirror-sizer"), i.sizerWidth = null, i.heightForcer = O("div", null, null, "position: absolute; height: " + q + "px; width: 1px;"), i.gutters = O("div", null, "CodeMirror-gutters"), i.lineGutter = null, i.scroller = O("div", [i.sizer, i.heightForcer, i.gutters], "CodeMirror-scroll"), i.scroller.setAttribute("tabIndex", "-1"), i.wrapper = O("div", [i.scrollbarFiller, i.gutterFiller, i.scroller], "CodeMirror"), a && l < 8 && (i.gutters.style.zIndex = -1, i.scroller.style.paddingRight = 0), s || n && v || (i.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(i.wrapper) : e(i.wrapper)), i.viewFrom = i.viewTo = t.first, i.reportedViewFrom = i.reportedViewTo = t.first, i.view = [], i.renderedView = null, i.externalMeasured = null, i.viewOffset = 0, i.lastWrapHeight = i.lastWrapWidth = 0, i.updateLineNumbers = null, i.nativeBarWidth = i.barHeight = i.barWidth = 0, i.scrollbarsClipped = !1, i.lineNumWidth = i.lineNumInnerWidth = i.lineNumChars = null, i.alignWidgets = !1, i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null, i.maxLine = null, i.maxLineLength = 0, i.maxLineChanged = !1, i.wheelDX = i.wheelDY = i.wheelStartX = i.wheelStartY = null, i.shift = !1, i.selForContextMenu = null, i.activeTouch = null, r.init(i)
   }

   function se(e, t) {
      if ((t -= e.first) < 0 || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document.");
      for (var n = e; !n.lines;) for (var r = 0; ; ++r) {
         var i = n.children[r], o = i.chunkSize();
         if (t < o) {
            n = i;
            break
         }
         t -= o
      }
      return n.lines[t]
   }

   function ce(e, t, n) {
      var r = [], i = t.line;
      return e.iter(t.line, n.line + 1, function(e) {
         var o = e.text;
         i == n.line && (o = o.slice(0, n.ch)), i == t.line && (o = o.slice(t.ch)), r.push(o), ++i
      }), r
   }

   function ue(e, t, n) {
      var r = [];
      return e.iter(t, n, function(e) {
         r.push(e.text)
      }), r
   }

   function de(e, t) {
      var n = t - e.height;
      if (n) for (var r = e; r; r = r.parent) r.height += n
   }

   function fe(e) {
      if (null == e.parent) return null;
      for (var t = e.parent, n = R(t.lines, e), r = t.parent; r; t = r, r = r.parent) for (var i = 0; r.children[i] != t; ++i) n += r.children[i].chunkSize();
      return n + t.first
   }

   function he(e, t) {
      var n = e.first;
      e:do {
         for (var r = 0; r < e.children.length; ++r) {
            var i = e.children[r], o = i.height;
            if (t < o) {
               e = i;
               continue e
            }
            t -= o, n += i.chunkSize()
         }
         return n
      } while (!e.lines);
      for (var a = 0; a < e.lines.length; ++a) {
         var l = e.lines[a].height;
         if (t < l) break;
         t -= l
      }
      return n + a
   }

   function pe(e, t) {
      return t >= e.first && t < e.first + e.size
   }

   function me(e, t) {
      return String(e.lineNumberFormatter(t + e.firstLineNumber))
   }

   function ge(e, t, n) {
      if (void 0 === n && (n = null), !(this instanceof ge)) return new ge(e, t, n);
      this.line = e, this.ch = t, this.sticky = n
   }

   function ve(e, t) {
      return e.line - t.line || e.ch - t.ch
   }

   function ye(e, t) {
      return e.sticky == t.sticky && 0 == ve(e, t)
   }

   function be(e) {
      return ge(e.line, e.ch)
   }

   function we(e, t) {
      return ve(e, t) < 0 ? t : e
   }

   function xe(e, t) {
      return ve(e, t) < 0 ? e : t
   }

   function ke(e, t) {
      return Math.max(e.first, Math.min(t, e.first + e.size - 1))
   }

   function Ce(e, t) {
      if (t.line < e.first) return ge(e.first, 0);
      var n = e.first + e.size - 1;
      return t.line > n ? ge(n, se(e, n).text.length) : function(e, t) {
         var n = e.ch;
         return null == n || n > t ? ge(e.line, t) : n < 0 ? ge(e.line, 0) : e
      }(t, se(e, t.line).text.length)
   }

   function Se(e, t) {
      for (var n = [], r = 0; r < t.length; r++) n[r] = Ce(e, t[r]);
      return n
   }

   var Te = !1, Le = !1;

   function Me(e, t, n) {
      this.marker = e, this.from = t, this.to = n
   }

   function _e(e, t) {
      if (e) for (var n = 0; n < e.length; ++n) {
         var r = e[n];
         if (r.marker == t) return r
      }
   }

   function Oe(e, t) {
      for (var n, r = 0; r < e.length; ++r) e[r] != t && (n || (n = [])).push(e[r]);
      return n
   }

   function Ae(e, t) {
      if (t.full) return null;
      var n = pe(e, t.from.line) && se(e, t.from.line).markedSpans,
         r = pe(e, t.to.line) && se(e, t.to.line).markedSpans;
      if (!n && !r) return null;
      var i = t.from.ch, o = t.to.ch, a = 0 == ve(t.from, t.to), l = function(e, t, n) {
         var r;
         if (e) for (var i = 0; i < e.length; ++i) {
            var o = e[i], a = o.marker;
            if (null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t) || o.from == t && "bookmark" == a.type && (!n || !o.marker.insertLeft)) {
               var l = null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);
               (r || (r = [])).push(new Me(a, o.from, l ? null : o.to))
            }
         }
         return r
      }(n, i, a), s = function(e, t, n) {
         var r;
         if (e) for (var i = 0; i < e.length; ++i) {
            var o = e[i], a = o.marker;
            if (null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t) || o.from == t && "bookmark" == a.type && (!n || o.marker.insertLeft)) {
               var l = null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t);
               (r || (r = [])).push(new Me(a, l ? null : o.from - t, null == o.to ? null : o.to - t))
            }
         }
         return r
      }(r, o, a), c = 1 == t.text.length, u = X(t.text).length + (c ? i : 0);
      if (l) for (var d = 0; d < l.length; ++d) {
         var f = l[d];
         if (null == f.to) {
            var h = _e(s, f.marker);
            h ? c && (f.to = null == h.to ? null : h.to + u) : f.to = i
         }
      }
      if (s) for (var p = 0; p < s.length; ++p) {
         var m = s[p];
         if (null != m.to && (m.to += u), null == m.from) _e(l, m.marker) || (m.from = u, c && (l || (l = [])).push(m)); else m.from += u, c && (l || (l = [])).push(m)
      }
      l && (l = Ne(l)), s && s != l && (s = Ne(s));
      var g = [l];
      if (!c) {
         var v, y = t.text.length - 2;
         if (y > 0 && l) for (var b = 0; b < l.length; ++b) null == l[b].to && (v || (v = [])).push(new Me(l[b].marker, null, null));
         for (var w = 0; w < y; ++w) g.push(v);
         g.push(s)
      }
      return g
   }

   function Ne(e) {
      for (var t = 0; t < e.length; ++t) {
         var n = e[t];
         null != n.from && n.from == n.to && !1 !== n.marker.clearWhenEmpty && e.splice(t--, 1)
      }
      return e.length ? e : null
   }

   function ze(e) {
      var t = e.markedSpans;
      if (t) {
         for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
         e.markedSpans = null
      }
   }

   function Fe(e, t) {
      if (t) {
         for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
         e.markedSpans = t
      }
   }

   function Pe(e) {
      return e.inclusiveLeft ? -1 : 0
   }

   function De(e) {
      return e.inclusiveRight ? 1 : 0
   }

   function Ee(e, t) {
      var n = e.lines.length - t.lines.length;
      if (0 != n) return n;
      var r = e.find(), i = t.find(), o = ve(r.from, i.from) || Pe(e) - Pe(t);
      if (o) return -o;
      var a = ve(r.to, i.to) || De(e) - De(t);
      return a || t.id - e.id
   }

   function He(e, t) {
      var n, r = Le && e.markedSpans;
      if (r) for (var i = void 0, o = 0; o < r.length; ++o) (i = r[o]).marker.collapsed && null == (t ? i.from : i.to) && (!n || Ee(n, i.marker) < 0) && (n = i.marker);
      return n
   }

   function We(e) {
      return He(e, !0)
   }

   function Ie(e) {
      return He(e, !1)
   }

   function Re(e, t) {
      var n, r = Le && e.markedSpans;
      if (r) for (var i = 0; i < r.length; ++i) {
         var o = r[i];
         o.marker.collapsed && (null == o.from || o.from < t) && (null == o.to || o.to > t) && (!n || Ee(n, o.marker) < 0) && (n = o.marker)
      }
      return n
   }

   function qe(e, t, n, r, i) {
      var o = se(e, t), a = Le && o.markedSpans;
      if (a) for (var l = 0; l < a.length; ++l) {
         var s = a[l];
         if (s.marker.collapsed) {
            var c = s.marker.find(0), u = ve(c.from, n) || Pe(s.marker) - Pe(i),
               d = ve(c.to, r) || De(s.marker) - De(i);
            if (!(u >= 0 && d <= 0 || u <= 0 && d >= 0) && (u <= 0 && (s.marker.inclusiveRight && i.inclusiveLeft ? ve(c.to, n) >= 0 : ve(c.to, n) > 0) || u >= 0 && (s.marker.inclusiveRight && i.inclusiveLeft ? ve(c.from, r) <= 0 : ve(c.from, r) < 0))) return !0
         }
      }
   }

   function Be(e) {
      for (var t; t = We(e);) e = t.find(-1, !0).line;
      return e
   }

   function je(e, t) {
      var n = se(e, t), r = Be(n);
      return n == r ? t : fe(r)
   }

   function Ue(e, t) {
      if (t > e.lastLine()) return t;
      var n, r = se(e, t);
      if (!Ve(e, r)) return t;
      for (; n = Ie(r);) r = n.find(1, !0).line;
      return fe(r) + 1
   }

   function Ve(e, t) {
      var n = Le && t.markedSpans;
      if (n) for (var r = void 0, i = 0; i < n.length; ++i) if ((r = n[i]).marker.collapsed) {
         if (null == r.from) return !0;
         if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && Ge(e, t, r)) return !0
      }
   }

   function Ge(e, t, n) {
      if (null == n.to) {
         var r = n.marker.find(1, !0);
         return Ge(e, r.line, _e(r.line.markedSpans, n.marker))
      }
      if (n.marker.inclusiveRight && n.to == t.text.length) return !0;
      for (var i = void 0, o = 0; o < t.markedSpans.length; ++o) if ((i = t.markedSpans[o]).marker.collapsed && !i.marker.widgetNode && i.from == n.to && (null == i.to || i.to != n.from) && (i.marker.inclusiveLeft || n.marker.inclusiveRight) && Ge(e, t, i)) return !0
   }

   function Ke(e) {
      for (var t = 0, n = (e = Be(e)).parent, r = 0; r < n.lines.length; ++r) {
         var i = n.lines[r];
         if (i == e) break;
         t += i.height
      }
      for (var o = n.parent; o; o = (n = o).parent) for (var a = 0; a < o.children.length; ++a) {
         var l = o.children[a];
         if (l == n) break;
         t += l.height
      }
      return t
   }

   function $e(e) {
      if (0 == e.height) return 0;
      for (var t, n = e.text.length, r = e; t = We(r);) {
         var i = t.find(0, !0);
         r = i.from.line, n += i.from.ch - i.to.ch
      }
      for (r = e; t = Ie(r);) {
         var o = t.find(0, !0);
         n -= r.text.length - o.from.ch, n += (r = o.to.line).text.length - o.to.ch
      }
      return n
   }

   function Xe(e) {
      var t = e.display, n = e.doc;
      t.maxLine = se(n, n.first), t.maxLineLength = $e(t.maxLine), t.maxLineChanged = !0, n.iter(function(e) {
         var n = $e(e);
         n > t.maxLineLength && (t.maxLineLength = n, t.maxLine = e)
      })
   }

   var Ye = null;

   function Qe(e, t, n) {
      var r;
      Ye = null;
      for (var i = 0; i < e.length; ++i) {
         var o = e[i];
         if (o.from < t && o.to > t) return i;
         o.to == t && (o.from != o.to && "before" == n ? r = i : Ye = i), o.from == t && (o.from != o.to && "before" != n ? r = i : Ye = i)
      }
      return null != r ? r : Ye
   }

   var Ze = function() {
      var e = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
         t = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
      var n = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, r = /[stwN]/, i = /[LRr]/, o = /[Lb1n]/, a = /[1n]/;

      function l(e, t, n) {
         this.level = e, this.from = t, this.to = n
      }

      return function(s, c) {
         var u = "ltr" == c ? "L" : "R";
         if (0 == s.length || "ltr" == c && !n.test(s)) return !1;
         for (var d, f = s.length, h = [], p = 0; p < f; ++p) h.push((d = s.charCodeAt(p)) <= 247 ? e.charAt(d) : 1424 <= d && d <= 1524 ? "R" : 1536 <= d && d <= 1785 ? t.charAt(d - 1536) : 1774 <= d && d <= 2220 ? "r" : 8192 <= d && d <= 8203 ? "w" : 8204 == d ? "b" : "L");
         for (var m = 0, g = u; m < f; ++m) {
            var v = h[m];
            "m" == v ? h[m] = g : g = v
         }
         for (var y = 0, b = u; y < f; ++y) {
            var w = h[y];
            "1" == w && "r" == b ? h[y] = "n" : i.test(w) && (b = w, "r" == w && (h[y] = "R"))
         }
         for (var x = 1, k = h[0]; x < f - 1; ++x) {
            var C = h[x];
            "+" == C && "1" == k && "1" == h[x + 1] ? h[x] = "1" : "," != C || k != h[x + 1] || "1" != k && "n" != k || (h[x] = k), k = C
         }
         for (var S = 0; S < f; ++S) {
            var T = h[S];
            if ("," == T) h[S] = "N"; else if ("%" == T) {
               var L = void 0;
               for (L = S + 1; L < f && "%" == h[L]; ++L) ;
               for (var M = S && "!" == h[S - 1] || L < f && "1" == h[L] ? "1" : "N", _ = S; _ < L; ++_) h[_] = M;
               S = L - 1
            }
         }
         for (var O = 0, A = u; O < f; ++O) {
            var N = h[O];
            "L" == A && "1" == N ? h[O] = "L" : i.test(N) && (A = N)
         }
         for (var z = 0; z < f; ++z) if (r.test(h[z])) {
            var F = void 0;
            for (F = z + 1; F < f && r.test(h[F]); ++F) ;
            for (var P = "L" == (z ? h[z - 1] : u), D = P == ("L" == (F < f ? h[F] : u)) ? P ? "L" : "R" : u, E = z; E < F; ++E) h[E] = D;
            z = F - 1
         }
         for (var H, W = [], I = 0; I < f;) if (o.test(h[I])) {
            var R = I;
            for (++I; I < f && o.test(h[I]); ++I) ;
            W.push(new l(0, R, I))
         } else {
            var q = I, B = W.length;
            for (++I; I < f && "L" != h[I]; ++I) ;
            for (var j = q; j < I;) if (a.test(h[j])) {
               q < j && W.splice(B, 0, new l(1, q, j));
               var U = j;
               for (++j; j < I && a.test(h[j]); ++j) ;
               W.splice(B, 0, new l(2, U, j)), q = j
            } else ++j;
            q < I && W.splice(B, 0, new l(1, q, I))
         }
         return "ltr" == c && (1 == W[0].level && (H = s.match(/^\s+/)) && (W[0].from = H[0].length, W.unshift(new l(0, 0, H[0].length))), 1 == X(W).level && (H = s.match(/\s+$/)) && (X(W).to -= H[0].length, W.push(new l(0, f - H[0].length, f)))), "rtl" == c ? W.reverse() : W
      }
   }();

   function Je(e, t) {
      var n = e.order;
      return null == n && (n = e.order = Ze(e.text, t)), n
   }

   var et = [], tt = function(e, t, n) {
      if (e.addEventListener) e.addEventListener(t, n, !1); else if (e.attachEvent) e.attachEvent("on" + t, n); else {
         var r = e._handlers || (e._handlers = {});
         r[t] = (r[t] || et).concat(n)
      }
   };

   function nt(e, t) {
      return e._handlers && e._handlers[t] || et
   }

   function rt(e, t, n) {
      if (e.removeEventListener) e.removeEventListener(t, n, !1); else if (e.detachEvent) e.detachEvent("on" + t, n); else {
         var r = e._handlers, i = r && r[t];
         if (i) {
            var o = R(i, n);
            o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1)))
         }
      }
   }

   function it(e, t) {
      var n = nt(e, t);
      if (n.length) for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i) n[i].apply(null, r)
   }

   function ot(e, t, n) {
      return "string" == typeof t && (t = {
         type: t, preventDefault: function() {
            this.defaultPrevented = !0
         }
      }), it(e, n || t.type, e, t), dt(t) || t.codemirrorIgnore
   }

   function at(e) {
      var t = e._handlers && e._handlers.cursorActivity;
      if (t) for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < t.length; ++r) -1 == R(n, t[r]) && n.push(t[r])
   }

   function lt(e, t) {
      return nt(e, t).length > 0
   }

   function st(e) {
      e.prototype.on = function(e, t) {
         tt(this, e, t)
      }, e.prototype.off = function(e, t) {
         rt(this, e, t)
      }
   }

   function ct(e) {
      e.preventDefault ? e.preventDefault() : e.returnValue = !1
   }

   function ut(e) {
      e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
   }

   function dt(e) {
      return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue
   }

   function ft(e) {
      ct(e), ut(e)
   }

   function ht(e) {
      return e.target || e.srcElement
   }

   function pt(e) {
      var t = e.which;
      return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), y && e.ctrlKey && 1 == t && (t = 3), t
   }

   var mt, gt, vt = function() {
      if (a && l < 9) return !1;
      var e = O("div");
      return "draggable" in e || "dragDrop" in e
   }();

   function yt(e) {
      if (null == mt) {
         var t = O("span", "​");
         _(e, O("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (mt = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(a && l < 8))
      }
      var n = mt ? O("span", "​") : O("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
      return n.setAttribute("cm-text", ""), n
   }

   function bt(e) {
      if (null != gt) return gt;
      var t = _(e, document.createTextNode("AخA")), n = T(t, 0, 1).getBoundingClientRect(),
         r = T(t, 1, 2).getBoundingClientRect();
      return M(e), !(!n || n.left == n.right) && (gt = r.right - n.right < 3)
   }

   var wt, xt = 3 != "\n\nb".split(/\n/).length ? function(e) {
         for (var t = 0, n = [], r = e.length; t <= r;) {
            var i = e.indexOf("\n", t);
            -1 == i && (i = e.length);
            var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i), a = o.indexOf("\r");
            -1 != a ? (n.push(o.slice(0, a)), t += a + 1) : (n.push(o), t = i + 1)
         }
         return n
      } : function(e) {
         return e.split(/\r\n?|\n/)
      }, kt = window.getSelection ? function(e) {
         try {
            return e.selectionStart != e.selectionEnd
         } catch (e) {
            return !1
         }
      } : function(e) {
         var t;
         try {
            t = e.ownerDocument.selection.createRange()
         } catch (e) {
         }
         return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t)
      }, Ct = "oncopy" in (wt = O("div")) || (wt.setAttribute("oncopy", "return;"), "function" == typeof wt.oncopy),
      St = null;
   var Tt = {}, Lt = {};

   function Mt(e) {
      if ("string" == typeof e && Lt.hasOwnProperty(e)) e = Lt[e]; else if (e && "string" == typeof e.name && Lt.hasOwnProperty(e.name)) {
         var t = Lt[e.name];
         "string" == typeof t && (t = {name: t}), (e = Z(t, e)).name = t.name
      } else {
         if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return Mt("application/xml");
         if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return Mt("application/json")
      }
      return "string" == typeof e ? {name: e} : e || {name: "null"}
   }

   function _t(e, t) {
      t = Mt(t);
      var n = Tt[t.name];
      if (!n) return _t(e, "text/plain");
      var r = n(e, t);
      if (Ot.hasOwnProperty(t.name)) {
         var i = Ot[t.name];
         for (var o in i) i.hasOwnProperty(o) && (r.hasOwnProperty(o) && (r["_" + o] = r[o]), r[o] = i[o])
      }
      if (r.name = t.name, t.helperType && (r.helperType = t.helperType), t.modeProps) for (var a in t.modeProps) r[a] = t.modeProps[a];
      return r
   }

   var Ot = {};

   function At(e, t) {
      H(t, Ot.hasOwnProperty(e) ? Ot[e] : Ot[e] = {})
   }

   function Nt(e, t) {
      if (!0 === t) return t;
      if (e.copyState) return e.copyState(t);
      var n = {};
      for (var r in t) {
         var i = t[r];
         i instanceof Array && (i = i.concat([])), n[r] = i
      }
      return n
   }

   function zt(e, t) {
      for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e;) t = n.state, e = n.mode;
      return n || {mode: e, state: t}
   }

   function Ft(e, t, n) {
      return !e.startState || e.startState(t, n)
   }

   var Pt = function(e, t, n) {
      this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = n
   };
   Pt.prototype.eol = function() {
      return this.pos >= this.string.length
   }, Pt.prototype.sol = function() {
      return this.pos == this.lineStart
   }, Pt.prototype.peek = function() {
      return this.string.charAt(this.pos) || void 0
   }, Pt.prototype.next = function() {
      if (this.pos < this.string.length) return this.string.charAt(this.pos++)
   }, Pt.prototype.eat = function(e) {
      var t = this.string.charAt(this.pos);
      if ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))) return ++this.pos, t
   }, Pt.prototype.eatWhile = function(e) {
      for (var t = this.pos; this.eat(e);) ;
      return this.pos > t
   }, Pt.prototype.eatSpace = function() {
      for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos));) ++this.pos;
      return this.pos > e
   }, Pt.prototype.skipToEnd = function() {
      this.pos = this.string.length
   }, Pt.prototype.skipTo = function(e) {
      var t = this.string.indexOf(e, this.pos);
      if (t > -1) return this.pos = t, !0
   }, Pt.prototype.backUp = function(e) {
      this.pos -= e
   }, Pt.prototype.column = function() {
      return this.lastColumnPos < this.start && (this.lastColumnValue = W(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? W(this.string, this.lineStart, this.tabSize) : 0)
   }, Pt.prototype.indentation = function() {
      return W(this.string, null, this.tabSize) - (this.lineStart ? W(this.string, this.lineStart, this.tabSize) : 0)
   }, Pt.prototype.match = function(e, t, n) {
      if ("string" != typeof e) {
         var r = this.string.slice(this.pos).match(e);
         return r && r.index > 0 ? null : (r && !1 !== t && (this.pos += r[0].length), r)
      }
      var i = function(e) {
         return n ? e.toLowerCase() : e
      };
      if (i(this.string.substr(this.pos, e.length)) == i(e)) return !1 !== t && (this.pos += e.length), !0
   }, Pt.prototype.current = function() {
      return this.string.slice(this.start, this.pos)
   }, Pt.prototype.hideFirstChars = function(e, t) {
      this.lineStart += e;
      try {
         return t()
      } finally {
         this.lineStart -= e
      }
   }, Pt.prototype.lookAhead = function(e) {
      var t = this.lineOracle;
      return t && t.lookAhead(e)
   }, Pt.prototype.baseToken = function() {
      var e = this.lineOracle;
      return e && e.baseToken(this.pos)
   };
   var Dt = function(e, t) {
      this.state = e, this.lookAhead = t
   }, Et = function(e, t, n, r) {
      this.state = t, this.doc = e, this.line = n, this.maxLookAhead = r || 0, this.baseTokens = null, this.baseTokenPos = 1
   };

   function Ht(e, t, n, r) {
      var i = [e.state.modeGen], o = {};
      Gt(e, t.text, e.doc.mode, n, function(e, t) {
         return i.push(e, t)
      }, o, r);
      for (var a = n.state, l = function(r) {
         n.baseTokens = i;
         var l = e.state.overlays[r], s = 1, c = 0;
         n.state = !0, Gt(e, t.text, l.mode, n, function(e, t) {
            for (var n = s; c < e;) {
               var r = i[s];
               r > e && i.splice(s, 1, e, i[s + 1], r), s += 2, c = Math.min(e, r)
            }
            if (t) if (l.opaque) i.splice(n, s - n, e, "overlay " + t), s = n + 2; else for (; n < s; n += 2) {
               var o = i[n + 1];
               i[n + 1] = (o ? o + " " : "") + "overlay " + t
            }
         }, o), n.state = a, n.baseTokens = null, n.baseTokenPos = 1
      }, s = 0; s < e.state.overlays.length; ++s) l(s);
      return {styles: i, classes: o.bgClass || o.textClass ? o : null}
   }

   function Wt(e, t, n) {
      if (!t.styles || t.styles[0] != e.state.modeGen) {
         var r = It(e, fe(t)), i = t.text.length > e.options.maxHighlightLength && Nt(e.doc.mode, r.state),
            o = Ht(e, t, r);
         i && (r.state = i), t.stateAfter = r.save(!i), t.styles = o.styles, o.classes ? t.styleClasses = o.classes : t.styleClasses && (t.styleClasses = null), n === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier))
      }
      return t.styles
   }

   function It(e, t, n) {
      var r = e.doc, i = e.display;
      if (!r.mode.startState) return new Et(r, !0, t);
      var o = function(e, t, n) {
         for (var r, i, o = e.doc, a = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), l = t; l > a; --l) {
            if (l <= o.first) return o.first;
            var s = se(o, l - 1), c = s.stateAfter;
            if (c && (!n || l + (c instanceof Dt ? c.lookAhead : 0) <= o.modeFrontier)) return l;
            var u = W(s.text, null, e.options.tabSize);
            (null == i || r > u) && (i = l - 1, r = u)
         }
         return i
      }(e, t, n), a = o > r.first && se(r, o - 1).stateAfter, l = a ? Et.fromSaved(r, a, o) : new Et(r, Ft(r.mode), o);
      return r.iter(o, t, function(n) {
         Rt(e, n.text, l);
         var r = l.line;
         n.stateAfter = r == t - 1 || r % 5 == 0 || r >= i.viewFrom && r < i.viewTo ? l.save() : null, l.nextLine()
      }), n && (r.modeFrontier = l.line), l
   }

   function Rt(e, t, n, r) {
      var i = e.doc.mode, o = new Pt(t, e.options.tabSize, n);
      for (o.start = o.pos = r || 0, "" == t && qt(i, n.state); !o.eol();) Bt(i, o, n.state), o.start = o.pos
   }

   function qt(e, t) {
      if (e.blankLine) return e.blankLine(t);
      if (e.innerMode) {
         var n = zt(e, t);
         return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0
      }
   }

   function Bt(e, t, n, r) {
      for (var i = 0; i < 10; i++) {
         r && (r[0] = zt(e, n).mode);
         var o = e.token(t, n);
         if (t.pos > t.start) return o
      }
      throw new Error("Mode " + e.name + " failed to advance stream.")
   }

   Et.prototype.lookAhead = function(e) {
      var t = this.doc.getLine(this.line + e);
      return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t
   }, Et.prototype.baseToken = function(e) {
      if (!this.baseTokens) return null;
      for (; this.baseTokens[this.baseTokenPos] <= e;) this.baseTokenPos += 2;
      var t = this.baseTokens[this.baseTokenPos + 1];
      return {type: t && t.replace(/( |^)overlay .*/, ""), size: this.baseTokens[this.baseTokenPos] - e}
   }, Et.prototype.nextLine = function() {
      this.line++, this.maxLookAhead > 0 && this.maxLookAhead--
   }, Et.fromSaved = function(e, t, n) {
      return t instanceof Dt ? new Et(e, Nt(e.mode, t.state), n, t.lookAhead) : new Et(e, Nt(e.mode, t), n)
   }, Et.prototype.save = function(e) {
      var t = !1 !== e ? Nt(this.doc.mode, this.state) : this.state;
      return this.maxLookAhead > 0 ? new Dt(t, this.maxLookAhead) : t
   };
   var jt = function(e, t, n) {
      this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = t || null, this.state = n
   };

   function Ut(e, t, n, r) {
      var i, o, a = e.doc, l = a.mode, s = se(a, (t = Ce(a, t)).line), c = It(e, t.line, n),
         u = new Pt(s.text, e.options.tabSize, c);
      for (r && (o = []); (r || u.pos < t.ch) && !u.eol();) u.start = u.pos, i = Bt(l, u, c.state), r && o.push(new jt(u, i, Nt(a.mode, c.state)));
      return r ? o : new jt(u, i, c.state)
   }

   function Vt(e, t) {
      if (e) for (; ;) {
         var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
         if (!n) break;
         e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
         var r = n[1] ? "bgClass" : "textClass";
         null == t[r] ? t[r] = n[2] : new RegExp("(?:^|s)" + n[2] + "(?:$|s)").test(t[r]) || (t[r] += " " + n[2])
      }
      return e
   }

   function Gt(e, t, n, r, i, o, a) {
      var l = n.flattenSpans;
      null == l && (l = e.options.flattenSpans);
      var s, c = 0, u = null, d = new Pt(t, e.options.tabSize, r), f = e.options.addModeClass && [null];
      for ("" == t && Vt(qt(n, r.state), o); !d.eol();) {
         if (d.pos > e.options.maxHighlightLength ? (l = !1, a && Rt(e, t, r, d.pos), d.pos = t.length, s = null) : s = Vt(Bt(n, d, r.state, f), o), f) {
            var h = f[0].name;
            h && (s = "m-" + (s ? h + " " + s : h))
         }
         if (!l || u != s) {
            for (; c < d.start;) i(c = Math.min(d.start, c + 5e3), u);
            u = s
         }
         d.start = d.pos
      }
      for (; c < d.pos;) {
         var p = Math.min(d.pos, c + 5e3);
         i(p, u), c = p
      }
   }

   var Kt = function(e, t, n) {
      this.text = e, Fe(this, t), this.height = n ? n(this) : 1
   };

   function $t(e) {
      e.parent = null, ze(e)
   }

   Kt.prototype.lineNo = function() {
      return fe(this)
   }, st(Kt);
   var Xt = {}, Yt = {};

   function Qt(e, t) {
      if (!e || /^\s*$/.test(e)) return null;
      var n = t.addModeClass ? Yt : Xt;
      return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"))
   }

   function Zt(e, t) {
      var n = A("span", null, null, s ? "padding-right: .1px" : null), r = {
         pre: A("pre", [n], "CodeMirror-line"),
         content: n,
         col: 0,
         pos: 0,
         cm: e,
         trailingSpace: !1,
         splitSpaces: e.getOption("lineWrapping")
      };
      t.measure = {};
      for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
         var o = i ? t.rest[i - 1] : t.line, a = void 0;
         r.pos = 0, r.addToken = en, bt(e.display.measure) && (a = Je(o, e.doc.direction)) && (r.addToken = tn(r.addToken, a)), r.map = [], rn(o, r, Wt(e, o, t != e.display.externalMeasured && fe(o))), o.styleClasses && (o.styleClasses.bgClass && (r.bgClass = P(o.styleClasses.bgClass, r.bgClass || "")), o.styleClasses.textClass && (r.textClass = P(o.styleClasses.textClass, r.textClass || ""))), 0 == r.map.length && r.map.push(0, 0, r.content.appendChild(yt(e.display.measure))), 0 == i ? (t.measure.map = r.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(r.map), (t.measure.caches || (t.measure.caches = [])).push({}))
      }
      if (s) {
         var l = r.content.lastChild;
         (/\bcm-tab\b/.test(l.className) || l.querySelector && l.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack")
      }
      return it(e, "renderLine", e, t.line, r.pre), r.pre.className && (r.textClass = P(r.pre.className, r.textClass || "")), r
   }

   function Jt(e) {
      var t = O("span", "•", "cm-invalidchar");
      return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t
   }

   function en(e, t, n, r, i, o, s) {
      if (t) {
         var c, u = e.splitSpaces ? function(e, t) {
            if (e.length > 1 && !/  /.test(e)) return e;
            for (var n = t, r = "", i = 0; i < e.length; i++) {
               var o = e.charAt(i);
               " " != o || !n || i != e.length - 1 && 32 != e.charCodeAt(i + 1) || (o = " "), r += o, n = " " == o
            }
            return r
         }(t, e.trailingSpace) : t, d = e.cm.state.specialChars, f = !1;
         if (d.test(t)) {
            c = document.createDocumentFragment();
            for (var h = 0; ;) {
               d.lastIndex = h;
               var p = d.exec(t), m = p ? p.index - h : t.length - h;
               if (m) {
                  var g = document.createTextNode(u.slice(h, h + m));
                  a && l < 9 ? c.appendChild(O("span", [g])) : c.appendChild(g), e.map.push(e.pos, e.pos + m, g), e.col += m, e.pos += m
               }
               if (!p) break;
               h += m + 1;
               var v = void 0;
               if ("\t" == p[0]) {
                  var y = e.cm.options.tabSize, b = y - e.col % y;
                  (v = c.appendChild(O("span", $(b), "cm-tab"))).setAttribute("role", "presentation"), v.setAttribute("cm-text", "\t"), e.col += b
               } else "\r" == p[0] || "\n" == p[0] ? ((v = c.appendChild(O("span", "\r" == p[0] ? "␍" : "␤", "cm-invalidchar"))).setAttribute("cm-text", p[0]), e.col += 1) : ((v = e.cm.options.specialCharPlaceholder(p[0])).setAttribute("cm-text", p[0]), a && l < 9 ? c.appendChild(O("span", [v])) : c.appendChild(v), e.col += 1);
               e.map.push(e.pos, e.pos + 1, v), e.pos++
            }
         } else e.col += t.length, c = document.createTextNode(u), e.map.push(e.pos, e.pos + t.length, c), a && l < 9 && (f = !0), e.pos += t.length;
         if (e.trailingSpace = 32 == u.charCodeAt(t.length - 1), n || r || i || f || o) {
            var w = n || "";
            r && (w += r), i && (w += i);
            var x = O("span", [c], w, o);
            if (s) for (var k in s) s.hasOwnProperty(k) && "style" != k && "class" != k && x.setAttribute(k, s[k]);
            return e.content.appendChild(x)
         }
         e.content.appendChild(c)
      }
   }

   function tn(e, t) {
      return function(n, r, i, o, a, l, s) {
         i = i ? i + " cm-force-border" : "cm-force-border";
         for (var c = n.pos, u = c + r.length; ;) {
            for (var d = void 0, f = 0; f < t.length && !((d = t[f]).to > c && d.from <= c); f++) ;
            if (d.to >= u) return e(n, r, i, o, a, l, s);
            e(n, r.slice(0, d.to - c), i, o, null, l, s), o = null, r = r.slice(d.to - c), c = d.to
         }
      }
   }

   function nn(e, t, n, r) {
      var i = !r && n.widgetNode;
      i && e.map.push(e.pos, e.pos + t, i), !r && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", n.id)), i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)), e.pos += t, e.trailingSpace = !1
   }

   function rn(e, t, n) {
      var r = e.markedSpans, i = e.text, o = 0;
      if (r) for (var a, l, s, c, u, d, f, h = i.length, p = 0, m = 1, g = "", v = 0; ;) {
         if (v == p) {
            s = c = u = l = "", f = null, d = null, v = 1 / 0;
            for (var y = [], b = void 0, w = 0; w < r.length; ++w) {
               var x = r[w], k = x.marker;
               if ("bookmark" == k.type && x.from == p && k.widgetNode) y.push(k); else if (x.from <= p && (null == x.to || x.to > p || k.collapsed && x.to == p && x.from == p)) {
                  if (null != x.to && x.to != p && v > x.to && (v = x.to, c = ""), k.className && (s += " " + k.className), k.css && (l = (l ? l + ";" : "") + k.css), k.startStyle && x.from == p && (u += " " + k.startStyle), k.endStyle && x.to == v && (b || (b = [])).push(k.endStyle, x.to), k.title && ((f || (f = {})).title = k.title), k.attributes) for (var C in k.attributes) (f || (f = {}))[C] = k.attributes[C];
                  k.collapsed && (!d || Ee(d.marker, k) < 0) && (d = x)
               } else x.from > p && v > x.from && (v = x.from)
            }
            if (b) for (var S = 0; S < b.length; S += 2) b[S + 1] == v && (c += " " + b[S]);
            if (!d || d.from == p) for (var T = 0; T < y.length; ++T) nn(t, 0, y[T]);
            if (d && (d.from || 0) == p) {
               if (nn(t, (null == d.to ? h + 1 : d.to) - p, d.marker, null == d.from), null == d.to) return;
               d.to == p && (d = !1)
            }
         }
         if (p >= h) break;
         for (var L = Math.min(h, v); ;) {
            if (g) {
               var M = p + g.length;
               if (!d) {
                  var _ = M > L ? g.slice(0, L - p) : g;
                  t.addToken(t, _, a ? a + s : s, u, p + _.length == v ? c : "", l, f)
               }
               if (M >= L) {
                  g = g.slice(L - p), p = L;
                  break
               }
               p = M, u = ""
            }
            g = i.slice(o, o = n[m++]), a = Qt(n[m++], t.cm.options)
         }
      } else for (var O = 1; O < n.length; O += 2) t.addToken(t, i.slice(o, o = n[O]), Qt(n[O + 1], t.cm.options))
   }

   function on(e, t, n) {
      this.line = t, this.rest = function(e) {
         for (var t, n; t = Ie(e);) e = t.find(1, !0).line, (n || (n = [])).push(e);
         return n
      }(t), this.size = this.rest ? fe(X(this.rest)) - n + 1 : 1, this.node = this.text = null, this.hidden = Ve(e, t)
   }

   function an(e, t, n) {
      for (var r, i = [], o = t; o < n; o = r) {
         var a = new on(e.doc, se(e.doc, o), o);
         r = o + a.size, i.push(a)
      }
      return i
   }

   var ln = null;
   var sn = null;

   function cn(e, t) {
      var n = nt(e, t);
      if (n.length) {
         var r, i = Array.prototype.slice.call(arguments, 2);
         ln ? r = ln.delayedCallbacks : sn ? r = sn : (r = sn = [], setTimeout(un, 0));
         for (var o = function(e) {
            r.push(function() {
               return n[e].apply(null, i)
            })
         }, a = 0; a < n.length; ++a) o(a)
      }
   }

   function un() {
      var e = sn;
      sn = null;
      for (var t = 0; t < e.length; ++t) e[t]()
   }

   function dn(e, t, n, r) {
      for (var i = 0; i < t.changes.length; i++) {
         var o = t.changes[i];
         "text" == o ? pn(e, t) : "gutter" == o ? gn(e, t, n, r) : "class" == o ? mn(e, t) : "widget" == o && vn(e, t, r)
      }
      t.changes = null
   }

   function fn(e) {
      return e.node == e.text && (e.node = O("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), a && l < 8 && (e.node.style.zIndex = 2)), e.node
   }

   function hn(e, t) {
      var n = e.display.externalMeasured;
      return n && n.line == t.line ? (e.display.externalMeasured = null, t.measure = n.measure, n.built) : Zt(e, t)
   }

   function pn(e, t) {
      var n = t.text.className, r = hn(e, t);
      t.text == t.node && (t.node = r.pre), t.text.parentNode.replaceChild(r.pre, t.text), t.text = r.pre, r.bgClass != t.bgClass || r.textClass != t.textClass ? (t.bgClass = r.bgClass, t.textClass = r.textClass, mn(e, t)) : n && (t.text.className = n)
   }

   function mn(e, t) {
      !function(e, t) {
         var n = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
         if (n && (n += " CodeMirror-linebackground"), t.background) n ? t.background.className = n : (t.background.parentNode.removeChild(t.background), t.background = null); else if (n) {
            var r = fn(t);
            t.background = r.insertBefore(O("div", null, n), r.firstChild), e.display.input.setUneditable(t.background)
         }
      }(e, t), t.line.wrapClass ? fn(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");
      var n = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
      t.text.className = n || ""
   }

   function gn(e, t, n, r) {
      if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
         var i = fn(t);
         t.gutterBackground = O("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px; width: " + r.gutterTotalWidth + "px"), e.display.input.setUneditable(t.gutterBackground), i.insertBefore(t.gutterBackground, t.text)
      }
      var o = t.line.gutterMarkers;
      if (e.options.lineNumbers || o) {
         var a = fn(t),
            l = t.gutter = O("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px");
         if (e.display.input.setUneditable(l), a.insertBefore(l, t.text), t.line.gutterClass && (l.className += " " + t.line.gutterClass), !e.options.lineNumbers || o && o["CodeMirror-linenumbers"] || (t.lineNumber = l.appendChild(O("div", me(e.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + r.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), o) for (var s = 0; s < e.options.gutters.length; ++s) {
            var c = e.options.gutters[s], u = o.hasOwnProperty(c) && o[c];
            u && l.appendChild(O("div", [u], "CodeMirror-gutter-elt", "left: " + r.gutterLeft[c] + "px; width: " + r.gutterWidth[c] + "px"))
         }
      }
   }

   function vn(e, t, n) {
      t.alignable && (t.alignable = null);
      for (var r = t.node.firstChild, i = void 0; r; r = i) i = r.nextSibling, "CodeMirror-linewidget" == r.className && t.node.removeChild(r);
      bn(e, t, n)
   }

   function yn(e, t, n, r) {
      var i = hn(e, t);
      return t.text = t.node = i.pre, i.bgClass && (t.bgClass = i.bgClass), i.textClass && (t.textClass = i.textClass), mn(e, t), gn(e, t, n, r), bn(e, t, r), t.node
   }

   function bn(e, t, n) {
      if (wn(e, t.line, t, n, !0), t.rest) for (var r = 0; r < t.rest.length; r++) wn(e, t.rest[r], t, n, !1)
   }

   function wn(e, t, n, r, i) {
      if (t.widgets) for (var o = fn(n), a = 0, l = t.widgets; a < l.length; ++a) {
         var s = l[a], c = O("div", [s.node], "CodeMirror-linewidget");
         s.handleMouseEvents || c.setAttribute("cm-ignore-events", "true"), xn(s, c, n, r), e.display.input.setUneditable(c), i && s.above ? o.insertBefore(c, n.gutter || n.text) : o.appendChild(c), cn(s, "redraw")
      }
   }

   function xn(e, t, n, r) {
      if (e.noHScroll) {
         (n.alignable || (n.alignable = [])).push(t);
         var i = r.wrapperWidth;
         t.style.left = r.fixedPos + "px", e.coverGutter || (i -= r.gutterTotalWidth, t.style.paddingLeft = r.gutterTotalWidth + "px"), t.style.width = i + "px"
      }
      e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"))
   }

   function kn(e) {
      if (null != e.height) return e.height;
      var t = e.doc.cm;
      if (!t) return 0;
      if (!N(document.body, e.node)) {
         var n = "position: relative;";
         e.coverGutter && (n += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (n += "width: " + t.display.wrapper.clientWidth + "px;"), _(t.display.measure, O("div", [e.node], null, n))
      }
      return e.height = e.node.parentNode.offsetHeight
   }

   function Cn(e, t) {
      for (var n = ht(t); n != e.wrapper; n = n.parentNode) if (!n || 1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events") || n.parentNode == e.sizer && n != e.mover) return !0
   }

   function Sn(e) {
      return e.lineSpace.offsetTop
   }

   function Tn(e) {
      return e.mover.offsetHeight - e.lineSpace.offsetHeight
   }

   function Ln(e) {
      if (e.cachedPaddingH) return e.cachedPaddingH;
      var t = _(e.measure, O("pre", "x")), n = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
         r = {left: parseInt(n.paddingLeft), right: parseInt(n.paddingRight)};
      return isNaN(r.left) || isNaN(r.right) || (e.cachedPaddingH = r), r
   }

   function Mn(e) {
      return q - e.display.nativeBarWidth
   }

   function _n(e) {
      return e.display.scroller.clientWidth - Mn(e) - e.display.barWidth
   }

   function On(e) {
      return e.display.scroller.clientHeight - Mn(e) - e.display.barHeight
   }

   function An(e, t, n) {
      if (e.line == t) return {map: e.measure.map, cache: e.measure.cache};
      for (var r = 0; r < e.rest.length; r++) if (e.rest[r] == t) return {
         map: e.measure.maps[r],
         cache: e.measure.caches[r]
      };
      for (var i = 0; i < e.rest.length; i++) if (fe(e.rest[i]) > n) return {
         map: e.measure.maps[i],
         cache: e.measure.caches[i],
         before: !0
      }
   }

   function Nn(e, t, n, r) {
      return Pn(e, Fn(e, t), n, r)
   }

   function zn(e, t) {
      if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[cr(e, t)];
      var n = e.display.externalMeasured;
      return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0
   }

   function Fn(e, t) {
      var n = fe(t), r = zn(e, n);
      r && !r.text ? r = null : r && r.changes && (dn(e, r, n, ir(e)), e.curOp.forceUpdate = !0), r || (r = function(e, t) {
         var n = fe(t = Be(t)), r = e.display.externalMeasured = new on(e.doc, t, n);
         r.lineN = n;
         var i = r.built = Zt(e, r);
         return r.text = i.pre, _(e.display.lineMeasure, i.pre), r
      }(e, t));
      var i = An(r, t, n);
      return {line: t, view: r, rect: null, map: i.map, cache: i.cache, before: i.before, hasHeights: !1}
   }

   function Pn(e, t, n, r, i) {
      t.before && (n = -1);
      var o, s = n + (r || "");
      return t.cache.hasOwnProperty(s) ? o = t.cache[s] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (!function(e, t, n) {
         var r = e.options.lineWrapping, i = r && _n(e);
         if (!t.measure.heights || r && t.measure.width != i) {
            var o = t.measure.heights = [];
            if (r) {
               t.measure.width = i;
               for (var a = t.text.firstChild.getClientRects(), l = 0; l < a.length - 1; l++) {
                  var s = a[l], c = a[l + 1];
                  Math.abs(s.bottom - c.bottom) > 2 && o.push((s.bottom + c.top) / 2 - n.top)
               }
            }
            o.push(n.bottom - n.top)
         }
      }(e, t.view, t.rect), t.hasHeights = !0), (o = function(e, t, n, r) {
         var i, o = Hn(t.map, n, r), s = o.node, c = o.start, u = o.end, d = o.collapse;
         if (3 == s.nodeType) {
            for (var f = 0; f < 4; f++) {
               for (; c && ie(t.line.text.charAt(o.coverStart + c));) --c;
               for (; o.coverStart + u < o.coverEnd && ie(t.line.text.charAt(o.coverStart + u));) ++u;
               if ((i = a && l < 9 && 0 == c && u == o.coverEnd - o.coverStart ? s.parentNode.getBoundingClientRect() : Wn(T(s, c, u).getClientRects(), r)).left || i.right || 0 == c) break;
               u = c, c -= 1, d = "right"
            }
            a && l < 11 && (i = function(e, t) {
               if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !function(e) {
                  if (null != St) return St;
                  var t = _(e, O("span", "x")), n = t.getBoundingClientRect(), r = T(t, 0, 1).getBoundingClientRect();
                  return St = Math.abs(n.left - r.left) > 1
               }(e)) return t;
               var n = screen.logicalXDPI / screen.deviceXDPI, r = screen.logicalYDPI / screen.deviceYDPI;
               return {left: t.left * n, right: t.right * n, top: t.top * r, bottom: t.bottom * r}
            }(e.display.measure, i))
         } else {
            var h;
            c > 0 && (d = r = "right"), i = e.options.lineWrapping && (h = s.getClientRects()).length > 1 ? h["right" == r ? h.length - 1 : 0] : s.getBoundingClientRect()
         }
         if (a && l < 9 && !c && (!i || !i.left && !i.right)) {
            var p = s.parentNode.getClientRects()[0];
            i = p ? {left: p.left, right: p.left + rr(e.display), top: p.top, bottom: p.bottom} : En
         }
         for (var m = i.top - t.rect.top, g = i.bottom - t.rect.top, v = (m + g) / 2, y = t.view.measure.heights, b = 0; b < y.length - 1 && !(v < y[b]); b++) ;
         var w = b ? y[b - 1] : 0, x = y[b], k = {
            left: ("right" == d ? i.right : i.left) - t.rect.left,
            right: ("left" == d ? i.left : i.right) - t.rect.left,
            top: w,
            bottom: x
         };
         i.left || i.right || (k.bogus = !0);
         e.options.singleCursorHeightPerLine || (k.rtop = m, k.rbottom = g);
         return k
      }(e, t, n, r)).bogus || (t.cache[s] = o)), {
         left: o.left,
         right: o.right,
         top: i ? o.rtop : o.top,
         bottom: i ? o.rbottom : o.bottom
      }
   }

   var Dn, En = {left: 0, right: 0, top: 0, bottom: 0};

   function Hn(e, t, n) {
      for (var r, i, o, a, l, s, c = 0; c < e.length; c += 3) if (l = e[c], s = e[c + 1], t < l ? (i = 0, o = 1, a = "left") : t < s ? o = (i = t - l) + 1 : (c == e.length - 3 || t == s && e[c + 3] > t) && (i = (o = s - l) - 1, t >= s && (a = "right")), null != i) {
         if (r = e[c + 2], l == s && n == (r.insertLeft ? "left" : "right") && (a = n), "left" == n && 0 == i) for (; c && e[c - 2] == e[c - 3] && e[c - 1].insertLeft;) r = e[2 + (c -= 3)], a = "left";
         if ("right" == n && i == s - l) for (; c < e.length - 3 && e[c + 3] == e[c + 4] && !e[c + 5].insertLeft;) r = e[(c += 3) + 2], a = "right";
         break
      }
      return {node: r, start: i, end: o, collapse: a, coverStart: l, coverEnd: s}
   }

   function Wn(e, t) {
      var n = En;
      if ("left" == t) for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++) ; else for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--) ;
      return n
   }

   function In(e) {
      if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest)) for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {}
   }

   function Rn(e) {
      e.display.externalMeasure = null, M(e.display.lineMeasure);
      for (var t = 0; t < e.display.view.length; t++) In(e.display.view[t])
   }

   function qn(e) {
      Rn(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null
   }

   function Bn() {
      return u && g ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft
   }

   function jn() {
      return u && g ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop
   }

   function Un(e) {
      var t = 0;
      if (e.widgets) for (var n = 0; n < e.widgets.length; ++n) e.widgets[n].above && (t += kn(e.widgets[n]));
      return t
   }

   function Vn(e, t, n, r, i) {
      if (!i) {
         var o = Un(t);
         n.top += o, n.bottom += o
      }
      if ("line" == r) return n;
      r || (r = "local");
      var a = Ke(t);
      if ("local" == r ? a += Sn(e.display) : a -= e.display.viewOffset, "page" == r || "window" == r) {
         var l = e.display.lineSpace.getBoundingClientRect();
         a += l.top + ("window" == r ? 0 : jn());
         var s = l.left + ("window" == r ? 0 : Bn());
         n.left += s, n.right += s
      }
      return n.top += a, n.bottom += a, n
   }

   function Gn(e, t, n) {
      if ("div" == n) return t;
      var r = t.left, i = t.top;
      if ("page" == n) r -= Bn(), i -= jn(); else if ("local" == n || !n) {
         var o = e.display.sizer.getBoundingClientRect();
         r += o.left, i += o.top
      }
      var a = e.display.lineSpace.getBoundingClientRect();
      return {left: r - a.left, top: i - a.top}
   }

   function Kn(e, t, n, r, i) {
      return r || (r = se(e.doc, t.line)), Vn(e, r, Nn(e, r, t.ch, i), n)
   }

   function $n(e, t, n, r, i, o) {
      function a(t, a) {
         var l = Pn(e, i, t, a ? "right" : "left", o);
         return a ? l.left = l.right : l.right = l.left, Vn(e, r, l, n)
      }

      r = r || se(e.doc, t.line), i || (i = Fn(e, r));
      var l = Je(r, e.doc.direction), s = t.ch, c = t.sticky;
      if (s >= r.text.length ? (s = r.text.length, c = "before") : s <= 0 && (s = 0, c = "after"), !l) return a("before" == c ? s - 1 : s, "before" == c);

      function u(e, t, n) {
         return a(n ? e - 1 : e, 1 == l[t].level != n)
      }

      var d = Qe(l, s, c), f = Ye, h = u(s, d, "before" == c);
      return null != f && (h.other = u(s, f, "before" != c)), h
   }

   function Xn(e, t) {
      var n = 0;
      t = Ce(e.doc, t), e.options.lineWrapping || (n = rr(e.display) * t.ch);
      var r = se(e.doc, t.line), i = Ke(r) + Sn(e.display);
      return {left: n, right: n, top: i, bottom: i + r.height}
   }

   function Yn(e, t, n, r, i) {
      var o = ge(e, t, n);
      return o.xRel = i, r && (o.outside = !0), o
   }

   function Qn(e, t, n) {
      var r = e.doc;
      if ((n += e.display.viewOffset) < 0) return Yn(r.first, 0, null, !0, -1);
      var i = he(r, n), o = r.first + r.size - 1;
      if (i > o) return Yn(r.first + r.size - 1, se(r, o).text.length, null, !0, 1);
      t < 0 && (t = 0);
      for (var a = se(r, i); ;) {
         var l = tr(e, a, i, t, n), s = Re(a, l.ch + (l.xRel > 0 ? 1 : 0));
         if (!s) return l;
         var c = s.find(1);
         if (c.line == i) return c;
         a = se(r, i = c.line)
      }
   }

   function Zn(e, t, n, r) {
      r -= Un(t);
      var i = t.text.length, o = ae(function(t) {
         return Pn(e, n, t - 1).bottom <= r
      }, i, 0);
      return {
         begin: o, end: i = ae(function(t) {
            return Pn(e, n, t).top > r
         }, o, i)
      }
   }

   function Jn(e, t, n, r) {
      return n || (n = Fn(e, t)), Zn(e, t, n, Vn(e, t, Pn(e, n, r), "line").top)
   }

   function er(e, t, n, r) {
      return !(e.bottom <= n) && (e.top > n || (r ? e.left : e.right) > t)
   }

   function tr(e, t, n, r, i) {
      i -= Ke(t);
      var o = Fn(e, t), a = Un(t), l = 0, s = t.text.length, c = !0, u = Je(t, e.doc.direction);
      if (u) {
         var d = (e.options.lineWrapping ? function(e, t, n, r, i, o, a) {
            var l = Zn(e, t, r, a), s = l.begin, c = l.end;
            /\s/.test(t.text.charAt(c - 1)) && c--;
            for (var u = null, d = null, f = 0; f < i.length; f++) {
               var h = i[f];
               if (!(h.from >= c || h.to <= s)) {
                  var p = 1 != h.level, m = Pn(e, r, p ? Math.min(c, h.to) - 1 : Math.max(s, h.from)).right,
                     g = m < o ? o - m + 1e9 : m - o;
                  (!u || d > g) && (u = h, d = g)
               }
            }
            u || (u = i[i.length - 1]);
            u.from < s && (u = {from: s, to: u.to, level: u.level});
            u.to > c && (u = {from: u.from, to: c, level: u.level});
            return u
         } : function(e, t, n, r, i, o, a) {
            var l = ae(function(l) {
               var s = i[l], c = 1 != s.level;
               return er($n(e, ge(n, c ? s.to : s.from, c ? "before" : "after"), "line", t, r), o, a, !0)
            }, 0, i.length - 1), s = i[l];
            if (l > 0) {
               var c = 1 != s.level, u = $n(e, ge(n, c ? s.from : s.to, c ? "after" : "before"), "line", t, r);
               er(u, o, a, !0) && u.top > a && (s = i[l - 1])
            }
            return s
         })(e, t, n, o, u, r, i);
         l = (c = 1 != d.level) ? d.from : d.to - 1, s = c ? d.to : d.from - 1
      }
      var f, h, p = null, m = null, g = ae(function(t) {
         var n = Pn(e, o, t);
         return n.top += a, n.bottom += a, !!er(n, r, i, !1) && (n.top <= i && n.left <= r && (p = t, m = n), !0)
      }, l, s), v = !1;
      if (m) {
         var y = r - m.left < m.right - r, b = y == c;
         g = p + (b ? 0 : 1), h = b ? "after" : "before", f = y ? m.left : m.right
      } else {
         c || g != s && g != l || g++, h = 0 == g ? "after" : g == t.text.length ? "before" : Pn(e, o, g - (c ? 1 : 0)).bottom + a <= i == c ? "after" : "before";
         var w = $n(e, ge(n, g, h), "line", t, o);
         f = w.left, v = i < w.top || i >= w.bottom
      }
      return Yn(n, g = oe(t.text, g, 1), h, v, r - f)
   }

   function nr(e) {
      if (null != e.cachedTextHeight) return e.cachedTextHeight;
      if (null == Dn) {
         Dn = O("pre");
         for (var t = 0; t < 49; ++t) Dn.appendChild(document.createTextNode("x")), Dn.appendChild(O("br"));
         Dn.appendChild(document.createTextNode("x"))
      }
      _(e.measure, Dn);
      var n = Dn.offsetHeight / 50;
      return n > 3 && (e.cachedTextHeight = n), M(e.measure), n || 1
   }

   function rr(e) {
      if (null != e.cachedCharWidth) return e.cachedCharWidth;
      var t = O("span", "xxxxxxxxxx"), n = O("pre", [t]);
      _(e.measure, n);
      var r = t.getBoundingClientRect(), i = (r.right - r.left) / 10;
      return i > 2 && (e.cachedCharWidth = i), i || 10
   }

   function ir(e) {
      for (var t = e.display, n = {}, r = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, a = 0; o; o = o.nextSibling, ++a) n[e.options.gutters[a]] = o.offsetLeft + o.clientLeft + i, r[e.options.gutters[a]] = o.clientWidth;
      return {
         fixedPos: or(t),
         gutterTotalWidth: t.gutters.offsetWidth,
         gutterLeft: n,
         gutterWidth: r,
         wrapperWidth: t.wrapper.clientWidth
      }
   }

   function or(e) {
      return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
   }

   function ar(e) {
      var t = nr(e.display), n = e.options.lineWrapping,
         r = n && Math.max(5, e.display.scroller.clientWidth / rr(e.display) - 3);
      return function(i) {
         if (Ve(e.doc, i)) return 0;
         var o = 0;
         if (i.widgets) for (var a = 0; a < i.widgets.length; a++) i.widgets[a].height && (o += i.widgets[a].height);
         return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t
      }
   }

   function lr(e) {
      var t = e.doc, n = ar(e);
      t.iter(function(e) {
         var t = n(e);
         t != e.height && de(e, t)
      })
   }

   function sr(e, t, n, r) {
      var i = e.display;
      if (!n && "true" == ht(t).getAttribute("cm-not-content")) return null;
      var o, a, l = i.lineSpace.getBoundingClientRect();
      try {
         o = t.clientX - l.left, a = t.clientY - l.top
      } catch (t) {
         return null
      }
      var s, c = Qn(e, o, a);
      if (r && 1 == c.xRel && (s = se(e.doc, c.line).text).length == c.ch) {
         var u = W(s, s.length, e.options.tabSize) - s.length;
         c = ge(c.line, Math.max(0, Math.round((o - Ln(e.display).left) / rr(e.display)) - u))
      }
      return c
   }

   function cr(e, t) {
      if (t >= e.display.viewTo) return null;
      if ((t -= e.display.viewFrom) < 0) return null;
      for (var n = e.display.view, r = 0; r < n.length; r++) if ((t -= n[r].size) < 0) return r
   }

   function ur(e) {
      e.display.input.showSelection(e.display.input.prepareSelection())
   }

   function dr(e, t) {
      void 0 === t && (t = !0);
      for (var n = e.doc, r = {}, i = r.cursors = document.createDocumentFragment(), o = r.selection = document.createDocumentFragment(), a = 0; a < n.sel.ranges.length; a++) if (t || a != n.sel.primIndex) {
         var l = n.sel.ranges[a];
         if (!(l.from().line >= e.display.viewTo || l.to().line < e.display.viewFrom)) {
            var s = l.empty();
            (s || e.options.showCursorWhenSelecting) && fr(e, l.head, i), s || pr(e, l, o)
         }
      }
      return r
   }

   function fr(e, t, n) {
      var r = $n(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
         i = n.appendChild(O("div", " ", "CodeMirror-cursor"));
      if (i.style.left = r.left + "px", i.style.top = r.top + "px", i.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px", r.other) {
         var o = n.appendChild(O("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
         o.style.display = "", o.style.left = r.other.left + "px", o.style.top = r.other.top + "px", o.style.height = .85 * (r.other.bottom - r.other.top) + "px"
      }
   }

   function hr(e, t) {
      return e.top - t.top || e.left - t.left
   }

   function pr(e, t, n) {
      var r = e.display, i = e.doc, o = document.createDocumentFragment(), a = Ln(e.display), l = a.left,
         s = Math.max(r.sizerWidth, _n(e) - r.sizer.offsetLeft) - a.right, c = "ltr" == i.direction;

      function u(e, t, n, r) {
         t < 0 && (t = 0), t = Math.round(t), r = Math.round(r), o.appendChild(O("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == n ? s - e : n) + "px;\n                             height: " + (r - t) + "px"))
      }

      function d(t, n, r) {
         var o, a, d = se(i, t), f = d.text.length;

         function h(n, r) {
            return Kn(e, ge(t, n), "div", d, r)
         }

         function p(t, n, r) {
            var i = Jn(e, d, null, t), o = "ltr" == n == ("after" == r) ? "left" : "right";
            return h("after" == r ? i.begin : i.end - (/\s/.test(d.text.charAt(i.end - 1)) ? 2 : 1), o)[o]
         }

         var m = Je(d, i.direction);
         return function(e, t, n, r) {
            if (!e) return r(t, n, "ltr", 0);
            for (var i = !1, o = 0; o < e.length; ++o) {
               var a = e[o];
               (a.from < n && a.to > t || t == n && a.to == t) && (r(Math.max(a.from, t), Math.min(a.to, n), 1 == a.level ? "rtl" : "ltr", o), i = !0)
            }
            i || r(t, n, "ltr")
         }(m, n || 0, null == r ? f : r, function(e, t, i, d) {
            var g = "ltr" == i, v = h(e, g ? "left" : "right"), y = h(t - 1, g ? "right" : "left"),
               b = null == n && 0 == e, w = null == r && t == f, x = 0 == d, k = !m || d == m.length - 1;
            if (y.top - v.top <= 3) {
               var C = (c ? w : b) && k, S = (c ? b : w) && x ? l : (g ? v : y).left, T = C ? s : (g ? y : v).right;
               u(S, v.top, T - S, v.bottom)
            } else {
               var L, M, _, O;
               g ? (L = c && b && x ? l : v.left, M = c ? s : p(e, i, "before"), _ = c ? l : p(t, i, "after"), O = c && w && k ? s : y.right) : (L = c ? p(e, i, "before") : l, M = !c && b && x ? s : v.right, _ = !c && w && k ? l : y.left, O = c ? p(t, i, "after") : s), u(L, v.top, M - L, v.bottom), v.bottom < y.top && u(l, v.bottom, null, y.top), u(_, y.top, O - _, y.bottom)
            }
            (!o || hr(v, o) < 0) && (o = v), hr(y, o) < 0 && (o = y), (!a || hr(v, a) < 0) && (a = v), hr(y, a) < 0 && (a = y)
         }), {start: o, end: a}
      }

      var f = t.from(), h = t.to();
      if (f.line == h.line) d(f.line, f.ch, h.ch); else {
         var p = se(i, f.line), m = se(i, h.line), g = Be(p) == Be(m),
            v = d(f.line, f.ch, g ? p.text.length + 1 : null).end, y = d(h.line, g ? 0 : null, h.ch).start;
         g && (v.top < y.top - 2 ? (u(v.right, v.top, null, v.bottom), u(l, y.top, y.left, y.bottom)) : u(v.right, v.top, y.left - v.right, v.bottom)), v.bottom < y.top && u(l, v.bottom, null, y.top)
      }
      n.appendChild(o)
   }

   function mr(e) {
      if (e.state.focused) {
         var t = e.display;
         clearInterval(t.blinker);
         var n = !0;
         t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function() {
            return t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden"
         }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden")
      }
   }

   function gr(e) {
      e.state.focused || (e.display.input.focus(), yr(e))
   }

   function vr(e) {
      e.state.delayingBlurEvent = !0, setTimeout(function() {
         e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, br(e))
      }, 100)
   }

   function yr(e, t) {
      e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1), "nocursor" != e.options.readOnly && (e.state.focused || (it(e, "focus", e, t), e.state.focused = !0, F(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), s && setTimeout(function() {
         return e.display.input.reset(!0)
      }, 20)), e.display.input.receivedFocus()), mr(e))
   }

   function br(e, t) {
      e.state.delayingBlurEvent || (e.state.focused && (it(e, "blur", e, t), e.state.focused = !1, L(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function() {
         e.state.focused || (e.display.shift = !1)
      }, 150))
   }

   function wr(e) {
      for (var t = e.display, n = t.lineDiv.offsetTop, r = 0; r < t.view.length; r++) {
         var i = t.view[r], o = e.options.lineWrapping, s = void 0, c = 0;
         if (!i.hidden) {
            if (a && l < 8) {
               var u = i.node.offsetTop + i.node.offsetHeight;
               s = u - n, n = u
            } else {
               var d = i.node.getBoundingClientRect();
               s = d.bottom - d.top, !o && i.text.firstChild && (c = i.text.firstChild.getBoundingClientRect().right - d.left - 1)
            }
            var f = i.line.height - s;
            if ((f > .005 || f < -.005) && (de(i.line, s), xr(i.line), i.rest)) for (var h = 0; h < i.rest.length; h++) xr(i.rest[h]);
            if (c > e.display.sizerWidth) {
               var p = Math.ceil(c / rr(e.display));
               p > e.display.maxLineLength && (e.display.maxLineLength = p, e.display.maxLine = i.line, e.display.maxLineChanged = !0)
            }
         }
      }
   }

   function xr(e) {
      if (e.widgets) for (var t = 0; t < e.widgets.length; ++t) {
         var n = e.widgets[t], r = n.node.parentNode;
         r && (n.height = r.offsetHeight)
      }
   }

   function kr(e, t, n) {
      var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
      r = Math.floor(r - Sn(e));
      var i = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight, o = he(t, r), a = he(t, i);
      if (n && n.ensure) {
         var l = n.ensure.from.line, s = n.ensure.to.line;
         l < o ? (o = l, a = he(t, Ke(se(t, l)) + e.wrapper.clientHeight)) : Math.min(s, t.lastLine()) >= a && (o = he(t, Ke(se(t, s)) - e.wrapper.clientHeight), a = s)
      }
      return {from: o, to: Math.max(a, o + 1)}
   }

   function Cr(e) {
      var t = e.display, n = t.view;
      if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
         for (var r = or(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = r + "px", a = 0; a < n.length; a++) if (!n[a].hidden) {
            e.options.fixedGutter && (n[a].gutter && (n[a].gutter.style.left = o), n[a].gutterBackground && (n[a].gutterBackground.style.left = o));
            var l = n[a].alignable;
            if (l) for (var s = 0; s < l.length; s++) l[s].style.left = o
         }
         e.options.fixedGutter && (t.gutters.style.left = r + i + "px")
      }
   }

   function Sr(e) {
      if (!e.options.lineNumbers) return !1;
      var t = e.doc, n = me(e.options, t.first + t.size - 1), r = e.display;
      if (n.length != r.lineNumChars) {
         var i = r.measure.appendChild(O("div", [O("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
            o = i.firstChild.offsetWidth, a = i.offsetWidth - o;
         return r.lineGutter.style.width = "", r.lineNumInnerWidth = Math.max(o, r.lineGutter.offsetWidth - a) + 1, r.lineNumWidth = r.lineNumInnerWidth + a, r.lineNumChars = r.lineNumInnerWidth ? n.length : -1, r.lineGutter.style.width = r.lineNumWidth + "px", ci(e), !0
      }
      return !1
   }

   function Tr(e, t) {
      var n = e.display, r = nr(e.display);
      t.top < 0 && (t.top = 0);
      var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : n.scroller.scrollTop, o = On(e), a = {};
      t.bottom - t.top > o && (t.bottom = t.top + o);
      var l = e.doc.height + Tn(n), s = t.top < r, c = t.bottom > l - r;
      if (t.top < i) a.scrollTop = s ? 0 : t.top; else if (t.bottom > i + o) {
         var u = Math.min(t.top, (c ? l : t.bottom) - o);
         u != i && (a.scrollTop = u)
      }
      var d = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : n.scroller.scrollLeft,
         f = _n(e) - (e.options.fixedGutter ? n.gutters.offsetWidth : 0), h = t.right - t.left > f;
      return h && (t.right = t.left + f), t.left < 10 ? a.scrollLeft = 0 : t.left < d ? a.scrollLeft = Math.max(0, t.left - (h ? 0 : 10)) : t.right > f + d - 3 && (a.scrollLeft = t.right + (h ? 0 : 10) - f), a
   }

   function Lr(e, t) {
      null != t && (Or(e), e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t)
   }

   function Mr(e) {
      Or(e);
      var t = e.getCursor();
      e.curOp.scrollToPos = {from: t, to: t, margin: e.options.cursorScrollMargin}
   }

   function _r(e, t, n) {
      null == t && null == n || Or(e), null != t && (e.curOp.scrollLeft = t), null != n && (e.curOp.scrollTop = n)
   }

   function Or(e) {
      var t = e.curOp.scrollToPos;
      t && (e.curOp.scrollToPos = null, Ar(e, Xn(e, t.from), Xn(e, t.to), t.margin))
   }

   function Ar(e, t, n, r) {
      var i = Tr(e, {
         left: Math.min(t.left, n.left),
         top: Math.min(t.top, n.top) - r,
         right: Math.max(t.right, n.right),
         bottom: Math.max(t.bottom, n.bottom) + r
      });
      _r(e, i.scrollLeft, i.scrollTop)
   }

   function Nr(e, t) {
      Math.abs(e.doc.scrollTop - t) < 2 || (n || si(e, {top: t}), zr(e, t, !0), n && si(e), ri(e, 100))
   }

   function zr(e, t, n) {
      t = Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t), (e.display.scroller.scrollTop != t || n) && (e.doc.scrollTop = t, e.display.scrollbars.setScrollTop(t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t))
   }

   function Fr(e, t, n, r) {
      t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), (n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !r || (e.doc.scrollLeft = t, Cr(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t))
   }

   function Pr(e) {
      var t = e.display, n = t.gutters.offsetWidth, r = Math.round(e.doc.height + Tn(e.display));
      return {
         clientHeight: t.scroller.clientHeight,
         viewHeight: t.wrapper.clientHeight,
         scrollWidth: t.scroller.scrollWidth,
         clientWidth: t.scroller.clientWidth,
         viewWidth: t.wrapper.clientWidth,
         barLeft: e.options.fixedGutter ? n : 0,
         docHeight: r,
         scrollHeight: r + Mn(e) + t.barHeight,
         nativeBarWidth: t.nativeBarWidth,
         gutterWidth: n
      }
   }

   var Dr = function(e, t, n) {
      this.cm = n;
      var r = this.vert = O("div", [O("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
         i = this.horiz = O("div", [O("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
      r.tabIndex = i.tabIndex = -1, e(r), e(i), tt(r, "scroll", function() {
         r.clientHeight && t(r.scrollTop, "vertical")
      }), tt(i, "scroll", function() {
         i.clientWidth && t(i.scrollLeft, "horizontal")
      }), this.checkedZeroWidth = !1, a && l < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
   };
   Dr.prototype.update = function(e) {
      var t = e.scrollWidth > e.clientWidth + 1, n = e.scrollHeight > e.clientHeight + 1, r = e.nativeBarWidth;
      if (n) {
         this.vert.style.display = "block", this.vert.style.bottom = t ? r + "px" : "0";
         var i = e.viewHeight - (t ? r : 0);
         this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px"
      } else this.vert.style.display = "", this.vert.firstChild.style.height = "0";
      if (t) {
         this.horiz.style.display = "block", this.horiz.style.right = n ? r + "px" : "0", this.horiz.style.left = e.barLeft + "px";
         var o = e.viewWidth - e.barLeft - (n ? r : 0);
         this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + "px"
      } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
      return !this.checkedZeroWidth && e.clientHeight > 0 && (0 == r && this.zeroWidthHack(), this.checkedZeroWidth = !0), {
         right: n ? r : 0,
         bottom: t ? r : 0
      }
   }, Dr.prototype.setScrollLeft = function(e) {
      this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz")
   }, Dr.prototype.setScrollTop = function(e) {
      this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert")
   }, Dr.prototype.zeroWidthHack = function() {
      var e = y && !h ? "12px" : "18px";
      this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new I, this.disableVert = new I
   }, Dr.prototype.enableZeroWidthBar = function(e, t, n) {
      e.style.pointerEvents = "auto", t.set(1e3, function r() {
         var i = e.getBoundingClientRect();
         ("vert" == n ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2) : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1)) != e ? e.style.pointerEvents = "none" : t.set(1e3, r)
      })
   }, Dr.prototype.clear = function() {
      var e = this.horiz.parentNode;
      e.removeChild(this.horiz), e.removeChild(this.vert)
   };
   var Er = function() {
   };

   function Hr(e, t) {
      t || (t = Pr(e));
      var n = e.display.barWidth, r = e.display.barHeight;
      Wr(e, t);
      for (var i = 0; i < 4 && n != e.display.barWidth || r != e.display.barHeight; i++) n != e.display.barWidth && e.options.lineWrapping && wr(e), Wr(e, Pr(e)), n = e.display.barWidth, r = e.display.barHeight
   }

   function Wr(e, t) {
      var n = e.display, r = n.scrollbars.update(t);
      n.sizer.style.paddingRight = (n.barWidth = r.right) + "px", n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px", n.heightForcer.style.borderBottom = r.bottom + "px solid transparent", r.right && r.bottom ? (n.scrollbarFiller.style.display = "block", n.scrollbarFiller.style.height = r.bottom + "px", n.scrollbarFiller.style.width = r.right + "px") : n.scrollbarFiller.style.display = "", r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (n.gutterFiller.style.display = "block", n.gutterFiller.style.height = r.bottom + "px", n.gutterFiller.style.width = t.gutterWidth + "px") : n.gutterFiller.style.display = ""
   }

   Er.prototype.update = function() {
      return {bottom: 0, right: 0}
   }, Er.prototype.setScrollLeft = function() {
   }, Er.prototype.setScrollTop = function() {
   }, Er.prototype.clear = function() {
   };
   var Ir = {native: Dr, null: Er};

   function Rr(e) {
      e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && L(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new Ir[e.options.scrollbarStyle](function(t) {
         e.display.wrapper.insertBefore(t, e.display.scrollbarFiller), tt(t, "mousedown", function() {
            e.state.focused && setTimeout(function() {
               return e.display.input.focus()
            }, 0)
         }), t.setAttribute("cm-not-content", "true")
      }, function(t, n) {
         "horizontal" == n ? Fr(e, t) : Nr(e, t)
      }, e), e.display.scrollbars.addClass && F(e.display.wrapper, e.display.scrollbars.addClass)
   }

   var qr = 0;

   function Br(e) {
      var t;
      e.curOp = {
         cm: e,
         viewChanged: !1,
         startHeight: e.doc.height,
         forceUpdate: !1,
         updateInput: 0,
         typing: !1,
         changeObjs: null,
         cursorActivityHandlers: null,
         cursorActivityCalled: 0,
         selectionChanged: !1,
         updateMaxLine: !1,
         scrollLeft: null,
         scrollTop: null,
         scrollToPos: null,
         focus: !1,
         id: ++qr
      }, t = e.curOp, ln ? ln.ops.push(t) : t.ownsGroup = ln = {ops: [t], delayedCallbacks: []}
   }

   function jr(e) {
      var t = e.curOp;
      t && function(e, t) {
         var n = e.ownsGroup;
         if (n) try {
            !function(e) {
               var t = e.delayedCallbacks, n = 0;
               do {
                  for (; n < t.length; n++) t[n].call(null);
                  for (var r = 0; r < e.ops.length; r++) {
                     var i = e.ops[r];
                     if (i.cursorActivityHandlers) for (; i.cursorActivityCalled < i.cursorActivityHandlers.length;) i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm)
                  }
               } while (n < t.length)
            }(n)
         } finally {
            ln = null, t(n)
         }
      }(t, function(e) {
         for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
         !function(e) {
            for (var t = e.ops, n = 0; n < t.length; n++) Ur(t[n]);
            for (var r = 0; r < t.length; r++) (i = t[r]).updatedDisplay = i.mustUpdate && ai(i.cm, i.update);
            var i;
            for (var o = 0; o < t.length; o++) Vr(t[o]);
            for (var a = 0; a < t.length; a++) Gr(t[a]);
            for (var l = 0; l < t.length; l++) Kr(t[l])
         }(e)
      })
   }

   function Ur(e) {
      var t = e.cm, n = t.display;
      !function(e) {
         var t = e.display;
         !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = Mn(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = Mn(e) + "px", t.scrollbarsClipped = !0)
      }(t), e.updateMaxLine && Xe(t), e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new oi(t, e.mustUpdate && {
         top: e.scrollTop,
         ensure: e.scrollToPos
      }, e.forceUpdate)
   }

   function Vr(e) {
      var t = e.cm, n = t.display;
      e.updatedDisplay && wr(t), e.barMeasure = Pr(t), n.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Nn(t, n.maxLine, n.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + Mn(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - _n(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection())
   }

   function Gr(e) {
      var t = e.cm;
      null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && Fr(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1);
      var n = e.focus && e.focus == z();
      e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n), (e.updatedDisplay || e.startHeight != t.doc.height) && Hr(t, e.barMeasure), e.updatedDisplay && ui(t, e.barMeasure), e.selectionChanged && mr(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), n && gr(e.cm)
   }

   function Kr(e) {
      var t = e.cm, n = t.display, r = t.doc;
      (e.updatedDisplay && li(t, e.update), null == n.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (n.wheelStartX = n.wheelStartY = null), null != e.scrollTop && zr(t, e.scrollTop, e.forceScroll), null != e.scrollLeft && Fr(t, e.scrollLeft, !0, !0), e.scrollToPos) && function(e, t) {
         if (!ot(e, "scrollCursorIntoView")) {
            var n = e.display, r = n.sizer.getBoundingClientRect(), i = null;
            if (t.top + r.top < 0 ? i = !0 : t.bottom + r.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1), null != i && !p) {
               var o = O("div", "​", null, "position: absolute;\n                         top: " + (t.top - n.viewOffset - Sn(e.display)) + "px;\n                         height: " + (t.bottom - t.top + Mn(e) + n.barHeight) + "px;\n                         left: " + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
               e.display.lineSpace.appendChild(o), o.scrollIntoView(i), e.display.lineSpace.removeChild(o)
            }
         }
      }(t, function(e, t, n, r) {
         var i;
         null == r && (r = 0), e.options.lineWrapping || t != n || (n = "before" == (t = t.ch ? ge(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t).sticky ? ge(t.line, t.ch + 1, "before") : t);
         for (var o = 0; o < 5; o++) {
            var a = !1, l = $n(e, t), s = n && n != t ? $n(e, n) : l, c = Tr(e, i = {
               left: Math.min(l.left, s.left),
               top: Math.min(l.top, s.top) - r,
               right: Math.max(l.left, s.left),
               bottom: Math.max(l.bottom, s.bottom) + r
            }), u = e.doc.scrollTop, d = e.doc.scrollLeft;
            if (null != c.scrollTop && (Nr(e, c.scrollTop), Math.abs(e.doc.scrollTop - u) > 1 && (a = !0)), null != c.scrollLeft && (Fr(e, c.scrollLeft), Math.abs(e.doc.scrollLeft - d) > 1 && (a = !0)), !a) break
         }
         return i
      }(t, Ce(r, e.scrollToPos.from), Ce(r, e.scrollToPos.to), e.scrollToPos.margin));
      var i = e.maybeHiddenMarkers, o = e.maybeUnhiddenMarkers;
      if (i) for (var a = 0; a < i.length; ++a) i[a].lines.length || it(i[a], "hide");
      if (o) for (var l = 0; l < o.length; ++l) o[l].lines.length && it(o[l], "unhide");
      n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop), e.changeObjs && it(t, "changes", t, e.changeObjs), e.update && e.update.finish()
   }

   function $r(e, t) {
      if (e.curOp) return t();
      Br(e);
      try {
         return t()
      } finally {
         jr(e)
      }
   }

   function Xr(e, t) {
      return function() {
         if (e.curOp) return t.apply(e, arguments);
         Br(e);
         try {
            return t.apply(e, arguments)
         } finally {
            jr(e)
         }
      }
   }

   function Yr(e) {
      return function() {
         if (this.curOp) return e.apply(this, arguments);
         Br(this);
         try {
            return e.apply(this, arguments)
         } finally {
            jr(this)
         }
      }
   }

   function Qr(e) {
      return function() {
         var t = this.cm;
         if (!t || t.curOp) return e.apply(this, arguments);
         Br(t);
         try {
            return e.apply(this, arguments)
         } finally {
            jr(t)
         }
      }
   }

   function Zr(e, t, n, r) {
      null == t && (t = e.doc.first), null == n && (n = e.doc.first + e.doc.size), r || (r = 0);
      var i = e.display;
      if (r && n < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= i.viewTo) Le && je(e.doc, t) < i.viewTo && ei(e); else if (n <= i.viewFrom) Le && Ue(e.doc, n + r) > i.viewFrom ? ei(e) : (i.viewFrom += r, i.viewTo += r); else if (t <= i.viewFrom && n >= i.viewTo) ei(e); else if (t <= i.viewFrom) {
         var o = ti(e, n, n + r, 1);
         o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN, i.viewTo += r) : ei(e)
      } else if (n >= i.viewTo) {
         var a = ti(e, t, t, -1);
         a ? (i.view = i.view.slice(0, a.index), i.viewTo = a.lineN) : ei(e)
      } else {
         var l = ti(e, t, t, -1), s = ti(e, n, n + r, 1);
         l && s ? (i.view = i.view.slice(0, l.index).concat(an(e, l.lineN, s.lineN)).concat(i.view.slice(s.index)), i.viewTo += r) : ei(e)
      }
      var c = i.externalMeasured;
      c && (n < c.lineN ? c.lineN += r : t < c.lineN + c.size && (i.externalMeasured = null))
   }

   function Jr(e, t, n) {
      e.curOp.viewChanged = !0;
      var r = e.display, i = e.display.externalMeasured;
      if (i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null), !(t < r.viewFrom || t >= r.viewTo)) {
         var o = r.view[cr(e, t)];
         if (null != o.node) {
            var a = o.changes || (o.changes = []);
            -1 == R(a, n) && a.push(n)
         }
      }
   }

   function ei(e) {
      e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0
   }

   function ti(e, t, n, r) {
      var i, o = cr(e, t), a = e.display.view;
      if (!Le || n == e.doc.first + e.doc.size) return {index: o, lineN: n};
      for (var l = e.display.viewFrom, s = 0; s < o; s++) l += a[s].size;
      if (l != t) {
         if (r > 0) {
            if (o == a.length - 1) return null;
            i = l + a[o].size - t, o++
         } else i = l - t;
         t += i, n += i
      }
      for (; je(e.doc, n) != n;) {
         if (o == (r < 0 ? 0 : a.length - 1)) return null;
         n += r * a[o - (r < 0 ? 1 : 0)].size, o += r
      }
      return {index: o, lineN: n}
   }

   function ni(e) {
      for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
         var i = t[r];
         i.hidden || i.node && !i.changes || ++n
      }
      return n
   }

   function ri(e, t) {
      e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, E(ii, e))
   }

   function ii(e) {
      var t = e.doc;
      if (!(t.highlightFrontier >= e.display.viewTo)) {
         var n = +new Date + e.options.workTime, r = It(e, t.highlightFrontier), i = [];
         t.iter(r.line, Math.min(t.first + t.size, e.display.viewTo + 500), function(o) {
            if (r.line >= e.display.viewFrom) {
               var a = o.styles, l = o.text.length > e.options.maxHighlightLength ? Nt(t.mode, r.state) : null,
                  s = Ht(e, o, r, !0);
               l && (r.state = l), o.styles = s.styles;
               var c = o.styleClasses, u = s.classes;
               u ? o.styleClasses = u : c && (o.styleClasses = null);
               for (var d = !a || a.length != o.styles.length || c != u && (!c || !u || c.bgClass != u.bgClass || c.textClass != u.textClass), f = 0; !d && f < a.length; ++f) d = a[f] != o.styles[f];
               d && i.push(r.line), o.stateAfter = r.save(), r.nextLine()
            } else o.text.length <= e.options.maxHighlightLength && Rt(e, o.text, r), o.stateAfter = r.line % 5 == 0 ? r.save() : null, r.nextLine();
            if (+new Date > n) return ri(e, e.options.workDelay), !0
         }), t.highlightFrontier = r.line, t.modeFrontier = Math.max(t.modeFrontier, r.line), i.length && $r(e, function() {
            for (var t = 0; t < i.length; t++) Jr(e, i[t], "text")
         })
      }
   }

   var oi = function(e, t, n) {
      var r = e.display;
      this.viewport = t, this.visible = kr(r, e.doc, t), this.editorIsHidden = !r.wrapper.offsetWidth, this.wrapperHeight = r.wrapper.clientHeight, this.wrapperWidth = r.wrapper.clientWidth, this.oldDisplayWidth = _n(e), this.force = n, this.dims = ir(e), this.events = []
   };

   function ai(e, t) {
      var n = e.display, r = e.doc;
      if (t.editorIsHidden) return ei(e), !1;
      if (!t.force && t.visible.from >= n.viewFrom && t.visible.to <= n.viewTo && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) && n.renderedView == n.view && 0 == ni(e)) return !1;
      Sr(e) && (ei(e), t.dims = ir(e));
      var i = r.first + r.size, o = Math.max(t.visible.from - e.options.viewportMargin, r.first),
         a = Math.min(i, t.visible.to + e.options.viewportMargin);
      n.viewFrom < o && o - n.viewFrom < 20 && (o = Math.max(r.first, n.viewFrom)), n.viewTo > a && n.viewTo - a < 20 && (a = Math.min(i, n.viewTo)), Le && (o = je(e.doc, o), a = Ue(e.doc, a));
      var l = o != n.viewFrom || a != n.viewTo || n.lastWrapHeight != t.wrapperHeight || n.lastWrapWidth != t.wrapperWidth;
      !function(e, t, n) {
         var r = e.display;
         0 == r.view.length || t >= r.viewTo || n <= r.viewFrom ? (r.view = an(e, t, n), r.viewFrom = t) : (r.viewFrom > t ? r.view = an(e, t, r.viewFrom).concat(r.view) : r.viewFrom < t && (r.view = r.view.slice(cr(e, t))), r.viewFrom = t, r.viewTo < n ? r.view = r.view.concat(an(e, r.viewTo, n)) : r.viewTo > n && (r.view = r.view.slice(0, cr(e, n)))), r.viewTo = n
      }(e, o, a), n.viewOffset = Ke(se(e.doc, n.viewFrom)), e.display.mover.style.top = n.viewOffset + "px";
      var c = ni(e);
      if (!l && 0 == c && !t.force && n.renderedView == n.view && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)) return !1;
      var u = function(e) {
         if (e.hasFocus()) return null;
         var t = z();
         if (!t || !N(e.display.lineDiv, t)) return null;
         var n = {activeElt: t};
         if (window.getSelection) {
            var r = window.getSelection();
            r.anchorNode && r.extend && N(e.display.lineDiv, r.anchorNode) && (n.anchorNode = r.anchorNode, n.anchorOffset = r.anchorOffset, n.focusNode = r.focusNode, n.focusOffset = r.focusOffset)
         }
         return n
      }(e);
      return c > 4 && (n.lineDiv.style.display = "none"), function(e, t, n) {
         var r = e.display, i = e.options.lineNumbers, o = r.lineDiv, a = o.firstChild;

         function l(t) {
            var n = t.nextSibling;
            return s && y && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t), n
         }

         for (var c = r.view, u = r.viewFrom, d = 0; d < c.length; d++) {
            var f = c[d];
            if (f.hidden) ; else if (f.node && f.node.parentNode == o) {
               for (; a != f.node;) a = l(a);
               var h = i && null != t && t <= u && f.lineNumber;
               f.changes && (R(f.changes, "gutter") > -1 && (h = !1), dn(e, f, u, n)), h && (M(f.lineNumber), f.lineNumber.appendChild(document.createTextNode(me(e.options, u)))), a = f.node.nextSibling
            } else {
               var p = yn(e, f, u, n);
               o.insertBefore(p, a)
            }
            u += f.size
         }
         for (; a;) a = l(a)
      }(e, n.updateLineNumbers, t.dims), c > 4 && (n.lineDiv.style.display = ""), n.renderedView = n.view, function(e) {
         if (e && e.activeElt && e.activeElt != z() && (e.activeElt.focus(), e.anchorNode && N(document.body, e.anchorNode) && N(document.body, e.focusNode))) {
            var t = window.getSelection(), n = document.createRange();
            n.setEnd(e.anchorNode, e.anchorOffset), n.collapse(!1), t.removeAllRanges(), t.addRange(n), t.extend(e.focusNode, e.focusOffset)
         }
      }(u), M(n.cursorDiv), M(n.selectionDiv), n.gutters.style.height = n.sizer.style.minHeight = 0, l && (n.lastWrapHeight = t.wrapperHeight, n.lastWrapWidth = t.wrapperWidth, ri(e, 400)), n.updateLineNumbers = null, !0
   }

   function li(e, t) {
      for (var n = t.viewport, r = !0; (r && e.options.lineWrapping && t.oldDisplayWidth != _n(e) || (n && null != n.top && (n = {top: Math.min(e.doc.height + Tn(e.display) - On(e), n.top)}), t.visible = kr(e.display, e.doc, n), !(t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo))) && ai(e, t); r = !1) {
         wr(e);
         var i = Pr(e);
         ur(e), Hr(e, i), ui(e, i), t.force = !1
      }
      t.signal(e, "update", e), e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo)
   }

   function si(e, t) {
      var n = new oi(e, t);
      if (ai(e, n)) {
         wr(e), li(e, n);
         var r = Pr(e);
         ur(e), Hr(e, r), ui(e, r), n.finish()
      }
   }

   function ci(e) {
      var t = e.display.gutters.offsetWidth;
      e.display.sizer.style.marginLeft = t + "px"
   }

   function ui(e, t) {
      e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + Mn(e) + "px"
   }

   function di(e) {
      var t = e.display.gutters, n = e.options.gutters;
      M(t);
      for (var r = 0; r < n.length; ++r) {
         var i = n[r], o = t.appendChild(O("div", null, "CodeMirror-gutter " + i));
         "CodeMirror-linenumbers" == i && (e.display.lineGutter = o, o.style.width = (e.display.lineNumWidth || 1) + "px")
      }
      t.style.display = r ? "" : "none", ci(e)
   }

   function fi(e) {
      var t = R(e.gutters, "CodeMirror-linenumbers");
      -1 == t && e.lineNumbers ? e.gutters = e.gutters.concat(["CodeMirror-linenumbers"]) : t > -1 && !e.lineNumbers && (e.gutters = e.gutters.slice(0), e.gutters.splice(t, 1))
   }

   oi.prototype.signal = function(e, t) {
      lt(e, t) && this.events.push(arguments)
   }, oi.prototype.finish = function() {
      for (var e = 0; e < this.events.length; e++) it.apply(null, this.events[e])
   };
   var hi = 0, pi = null;

   function mi(e) {
      var t = e.wheelDeltaX, n = e.wheelDeltaY;
      return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == n && e.detail && e.axis == e.VERTICAL_AXIS ? n = e.detail : null == n && (n = e.wheelDelta), {
         x: t,
         y: n
      }
   }

   function gi(e) {
      var t = mi(e);
      return t.x *= pi, t.y *= pi, t
   }

   function vi(e, t) {
      var r = mi(t), i = r.x, o = r.y, a = e.display, l = a.scroller, c = l.scrollWidth > l.clientWidth,
         u = l.scrollHeight > l.clientHeight;
      if (i && c || o && u) {
         if (o && y && s) e:for (var f = t.target, h = a.view; f != l; f = f.parentNode) for (var p = 0; p < h.length; p++) if (h[p].node == f) {
            e.display.currentWheelTarget = f;
            break e
         }
         if (i && !n && !d && null != pi) return o && u && Nr(e, Math.max(0, l.scrollTop + o * pi)), Fr(e, Math.max(0, l.scrollLeft + i * pi)), (!o || o && u) && ct(t), void (a.wheelStartX = null);
         if (o && null != pi) {
            var m = o * pi, g = e.doc.scrollTop, v = g + a.wrapper.clientHeight;
            m < 0 ? g = Math.max(0, g + m - 50) : v = Math.min(e.doc.height, v + m + 50), si(e, {top: g, bottom: v})
         }
         hi < 20 && (null == a.wheelStartX ? (a.wheelStartX = l.scrollLeft, a.wheelStartY = l.scrollTop, a.wheelDX = i, a.wheelDY = o, setTimeout(function() {
            if (null != a.wheelStartX) {
               var e = l.scrollLeft - a.wheelStartX, t = l.scrollTop - a.wheelStartY,
                  n = t && a.wheelDY && t / a.wheelDY || e && a.wheelDX && e / a.wheelDX;
               a.wheelStartX = a.wheelStartY = null, n && (pi = (pi * hi + n) / (hi + 1), ++hi)
            }
         }, 200)) : (a.wheelDX += i, a.wheelDY += o))
      }
   }

   a ? pi = -.53 : n ? pi = 15 : u ? pi = -.7 : f && (pi = -1 / 3);
   var yi = function(e, t) {
      this.ranges = e, this.primIndex = t
   };
   yi.prototype.primary = function() {
      return this.ranges[this.primIndex]
   }, yi.prototype.equals = function(e) {
      if (e == this) return !0;
      if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
      for (var t = 0; t < this.ranges.length; t++) {
         var n = this.ranges[t], r = e.ranges[t];
         if (!ye(n.anchor, r.anchor) || !ye(n.head, r.head)) return !1
      }
      return !0
   }, yi.prototype.deepCopy = function() {
      for (var e = [], t = 0; t < this.ranges.length; t++) e[t] = new bi(be(this.ranges[t].anchor), be(this.ranges[t].head));
      return new yi(e, this.primIndex)
   }, yi.prototype.somethingSelected = function() {
      for (var e = 0; e < this.ranges.length; e++) if (!this.ranges[e].empty()) return !0;
      return !1
   }, yi.prototype.contains = function(e, t) {
      t || (t = e);
      for (var n = 0; n < this.ranges.length; n++) {
         var r = this.ranges[n];
         if (ve(t, r.from()) >= 0 && ve(e, r.to()) <= 0) return n
      }
      return -1
   };
   var bi = function(e, t) {
      this.anchor = e, this.head = t
   };

   function wi(e, t, n) {
      var r = e && e.options.selectionsMayTouch, i = t[n];
      t.sort(function(e, t) {
         return ve(e.from(), t.from())
      }), n = R(t, i);
      for (var o = 1; o < t.length; o++) {
         var a = t[o], l = t[o - 1], s = ve(l.to(), a.from());
         if (r && !a.empty() ? s > 0 : s >= 0) {
            var c = xe(l.from(), a.from()), u = we(l.to(), a.to()),
               d = l.empty() ? a.from() == a.head : l.from() == l.head;
            o <= n && --n, t.splice(--o, 2, new bi(d ? u : c, d ? c : u))
         }
      }
      return new yi(t, n)
   }

   function xi(e, t) {
      return new yi([new bi(e, t || e)], 0)
   }

   function ki(e) {
      return e.text ? ge(e.from.line + e.text.length - 1, X(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to
   }

   function Ci(e, t) {
      if (ve(e, t.from) < 0) return e;
      if (ve(e, t.to) <= 0) return ki(t);
      var n = e.line + t.text.length - (t.to.line - t.from.line) - 1, r = e.ch;
      return e.line == t.to.line && (r += ki(t).ch - t.to.ch), ge(n, r)
   }

   function Si(e, t) {
      for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
         var i = e.sel.ranges[r];
         n.push(new bi(Ci(i.anchor, t), Ci(i.head, t)))
      }
      return wi(e.cm, n, e.sel.primIndex)
   }

   function Ti(e, t, n) {
      return e.line == t.line ? ge(n.line, e.ch - t.ch + n.ch) : ge(n.line + (e.line - t.line), e.ch)
   }

   function Li(e) {
      e.doc.mode = _t(e.options, e.doc.modeOption), Mi(e)
   }

   function Mi(e) {
      e.doc.iter(function(e) {
         e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null)
      }), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, ri(e, 100), e.state.modeGen++, e.curOp && Zr(e)
   }

   function _i(e, t) {
      return 0 == t.from.ch && 0 == t.to.ch && "" == X(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore)
   }

   function Oi(e, t, n, r) {
      function i(e) {
         return n ? n[e] : null
      }

      function o(e, n, i) {
         !function(e, t, n, r) {
            e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), ze(e), Fe(e, n);
            var i = r ? r(e) : 1;
            i != e.height && de(e, i)
         }(e, n, i, r), cn(e, "change", e, t)
      }

      function a(e, t) {
         for (var n = [], o = e; o < t; ++o) n.push(new Kt(c[o], i(o), r));
         return n
      }

      var l = t.from, s = t.to, c = t.text, u = se(e, l.line), d = se(e, s.line), f = X(c), h = i(c.length - 1),
         p = s.line - l.line;
      if (t.full) e.insert(0, a(0, c.length)), e.remove(c.length, e.size - c.length); else if (_i(e, t)) {
         var m = a(0, c.length - 1);
         o(d, d.text, h), p && e.remove(l.line, p), m.length && e.insert(l.line, m)
      } else if (u == d) if (1 == c.length) o(u, u.text.slice(0, l.ch) + f + u.text.slice(s.ch), h); else {
         var g = a(1, c.length - 1);
         g.push(new Kt(f + u.text.slice(s.ch), h, r)), o(u, u.text.slice(0, l.ch) + c[0], i(0)), e.insert(l.line + 1, g)
      } else if (1 == c.length) o(u, u.text.slice(0, l.ch) + c[0] + d.text.slice(s.ch), i(0)), e.remove(l.line + 1, p); else {
         o(u, u.text.slice(0, l.ch) + c[0], i(0)), o(d, f + d.text.slice(s.ch), h);
         var v = a(1, c.length - 1);
         p > 1 && e.remove(l.line + 1, p - 1), e.insert(l.line + 1, v)
      }
      cn(e, "change", e, t)
   }

   function Ai(e, t, n) {
      !function e(r, i, o) {
         if (r.linked) for (var a = 0; a < r.linked.length; ++a) {
            var l = r.linked[a];
            if (l.doc != i) {
               var s = o && l.sharedHist;
               n && !s || (t(l.doc, s), e(l.doc, r, s))
            }
         }
      }(e, null, !0)
   }

   function Ni(e, t) {
      if (t.cm) throw new Error("This document is already in use.");
      e.doc = t, t.cm = e, lr(e), Li(e), zi(e), e.options.lineWrapping || Xe(e), e.options.mode = t.modeOption, Zr(e)
   }

   function zi(e) {
      ("rtl" == e.doc.direction ? F : L)(e.display.lineDiv, "CodeMirror-rtl")
   }

   function Fi(e) {
      this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e || 1
   }

   function Pi(e, t) {
      var n = {from: be(t.from), to: ki(t), text: ce(e, t.from, t.to)};
      return Ii(e, n, t.from.line, t.to.line + 1), Ai(e, function(e) {
         return Ii(e, n, t.from.line, t.to.line + 1)
      }, !0), n
   }

   function Di(e) {
      for (; e.length;) {
         if (!X(e).ranges) break;
         e.pop()
      }
   }

   function Ei(e, t, n, r) {
      var i = e.history;
      i.undone.length = 0;
      var o, a, l = +new Date;
      if ((i.lastOp == r || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && i.lastModTime > l - (e.cm ? e.cm.options.historyEventDelay : 500) || "*" == t.origin.charAt(0))) && (o = function(e, t) {
         return t ? (Di(e.done), X(e.done)) : e.done.length && !X(e.done).ranges ? X(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), X(e.done)) : void 0
      }(i, i.lastOp == r))) a = X(o.changes), 0 == ve(t.from, t.to) && 0 == ve(t.from, a.to) ? a.to = ki(t) : o.changes.push(Pi(e, t)); else {
         var s = X(i.done);
         for (s && s.ranges || Wi(e.sel, i.done), o = {
            changes: [Pi(e, t)],
            generation: i.generation
         }, i.done.push(o); i.done.length > i.undoDepth;) i.done.shift(), i.done[0].ranges || i.done.shift()
      }
      i.done.push(n), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = l, i.lastOp = i.lastSelOp = r, i.lastOrigin = i.lastSelOrigin = t.origin, a || it(e, "historyAdded")
   }

   function Hi(e, t, n, r) {
      var i = e.history, o = r && r.origin;
      n == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || function(e, t, n, r) {
         var i = t.charAt(0);
         return "*" == i || "+" == i && n.ranges.length == r.ranges.length && n.somethingSelected() == r.somethingSelected() && new Date - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500)
      }(e, o, X(i.done), t)) ? i.done[i.done.length - 1] = t : Wi(t, i.done), i.lastSelTime = +new Date, i.lastSelOrigin = o, i.lastSelOp = n, r && !1 !== r.clearRedo && Di(i.undone)
   }

   function Wi(e, t) {
      var n = X(t);
      n && n.ranges && n.equals(e) || t.push(e)
   }

   function Ii(e, t, n, r) {
      var i = t["spans_" + e.id], o = 0;
      e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function(n) {
         n.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = n.markedSpans), ++o
      })
   }

   function Ri(e) {
      if (!e) return null;
      for (var t, n = 0; n < e.length; ++n) e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
      return t ? t.length ? t : null : e
   }

   function qi(e, t) {
      var n = function(e, t) {
         var n = t["spans_" + e.id];
         if (!n) return null;
         for (var r = [], i = 0; i < t.text.length; ++i) r.push(Ri(n[i]));
         return r
      }(e, t), r = Ae(e, t);
      if (!n) return r;
      if (!r) return n;
      for (var i = 0; i < n.length; ++i) {
         var o = n[i], a = r[i];
         if (o && a) e:for (var l = 0; l < a.length; ++l) {
            for (var s = a[l], c = 0; c < o.length; ++c) if (o[c].marker == s.marker) continue e;
            o.push(s)
         } else a && (n[i] = a)
      }
      return n
   }

   function Bi(e, t, n) {
      for (var r = [], i = 0; i < e.length; ++i) {
         var o = e[i];
         if (o.ranges) r.push(n ? yi.prototype.deepCopy.call(o) : o); else {
            var a = o.changes, l = [];
            r.push({changes: l});
            for (var s = 0; s < a.length; ++s) {
               var c = a[s], u = void 0;
               if (l.push({
                  from: c.from,
                  to: c.to,
                  text: c.text
               }), t) for (var d in c) (u = d.match(/^spans_(\d+)$/)) && R(t, Number(u[1])) > -1 && (X(l)[d] = c[d], delete c[d])
            }
         }
      }
      return r
   }

   function ji(e, t, n, r) {
      if (r) {
         var i = e.anchor;
         if (n) {
            var o = ve(t, i) < 0;
            o != ve(n, i) < 0 ? (i = t, t = n) : o != ve(t, n) < 0 && (t = n)
         }
         return new bi(i, t)
      }
      return new bi(n || t, t)
   }

   function Ui(e, t, n, r, i) {
      null == i && (i = e.cm && (e.cm.display.shift || e.extend)), Xi(e, new yi([ji(e.sel.primary(), t, n, i)], 0), r)
   }

   function Vi(e, t, n) {
      for (var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++) r[o] = ji(e.sel.ranges[o], t[o], null, i);
      Xi(e, wi(e.cm, r, e.sel.primIndex), n)
   }

   function Gi(e, t, n, r) {
      var i = e.sel.ranges.slice(0);
      i[t] = n, Xi(e, wi(e.cm, i, e.sel.primIndex), r)
   }

   function Ki(e, t, n, r) {
      Xi(e, xi(t, n), r)
   }

   function $i(e, t, n) {
      var r = e.history.done, i = X(r);
      i && i.ranges ? (r[r.length - 1] = t, Yi(e, t, n)) : Xi(e, t, n)
   }

   function Xi(e, t, n) {
      Yi(e, t, n), Hi(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n)
   }

   function Yi(e, t, n) {
      (lt(e, "beforeSelectionChange") || e.cm && lt(e.cm, "beforeSelectionChange")) && (t = function(e, t, n) {
         var r = {
            ranges: t.ranges, update: function(t) {
               this.ranges = [];
               for (var n = 0; n < t.length; n++) this.ranges[n] = new bi(Ce(e, t[n].anchor), Ce(e, t[n].head))
            }, origin: n && n.origin
         };
         return it(e, "beforeSelectionChange", e, r), e.cm && it(e.cm, "beforeSelectionChange", e.cm, r), r.ranges != t.ranges ? wi(e.cm, r.ranges, r.ranges.length - 1) : t
      }(e, t, n));
      var r = n && n.bias || (ve(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
      Qi(e, Ji(e, t, r, !0)), n && !1 === n.scroll || !e.cm || Mr(e.cm)
   }

   function Qi(e, t) {
      t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = 1, e.cm.curOp.selectionChanged = !0, at(e.cm)), cn(e, "cursorActivity", e))
   }

   function Zi(e) {
      Qi(e, Ji(e, e.sel, null, !1))
   }

   function Ji(e, t, n, r) {
      for (var i, o = 0; o < t.ranges.length; o++) {
         var a = t.ranges[o], l = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
            s = to(e, a.anchor, l && l.anchor, n, r), c = to(e, a.head, l && l.head, n, r);
         (i || s != a.anchor || c != a.head) && (i || (i = t.ranges.slice(0, o)), i[o] = new bi(s, c))
      }
      return i ? wi(e.cm, i, t.primIndex) : t
   }

   function eo(e, t, n, r, i) {
      var o = se(e, t.line);
      if (o.markedSpans) for (var a = 0; a < o.markedSpans.length; ++a) {
         var l = o.markedSpans[a], s = l.marker;
         if ((null == l.from || (s.inclusiveLeft ? l.from <= t.ch : l.from < t.ch)) && (null == l.to || (s.inclusiveRight ? l.to >= t.ch : l.to > t.ch))) {
            if (i && (it(s, "beforeCursorEnter"), s.explicitlyCleared)) {
               if (o.markedSpans) {
                  --a;
                  continue
               }
               break
            }
            if (!s.atomic) continue;
            if (n) {
               var c = s.find(r < 0 ? 1 : -1), u = void 0;
               if ((r < 0 ? s.inclusiveRight : s.inclusiveLeft) && (c = no(e, c, -r, c && c.line == t.line ? o : null)), c && c.line == t.line && (u = ve(c, n)) && (r < 0 ? u < 0 : u > 0)) return eo(e, c, t, r, i)
            }
            var d = s.find(r < 0 ? -1 : 1);
            return (r < 0 ? s.inclusiveLeft : s.inclusiveRight) && (d = no(e, d, r, d.line == t.line ? o : null)), d ? eo(e, d, t, r, i) : null
         }
      }
      return t
   }

   function to(e, t, n, r, i) {
      var o = r || 1,
         a = eo(e, t, n, o, i) || !i && eo(e, t, n, o, !0) || eo(e, t, n, -o, i) || !i && eo(e, t, n, -o, !0);
      return a || (e.cantEdit = !0, ge(e.first, 0))
   }

   function no(e, t, n, r) {
      return n < 0 && 0 == t.ch ? t.line > e.first ? Ce(e, ge(t.line - 1)) : null : n > 0 && t.ch == (r || se(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? ge(t.line + 1, 0) : null : new ge(t.line, t.ch + n)
   }

   function ro(e) {
      e.setSelection(ge(e.firstLine(), 0), ge(e.lastLine()), j)
   }

   function io(e, t, n) {
      var r = {
         canceled: !1, from: t.from, to: t.to, text: t.text, origin: t.origin, cancel: function() {
            return r.canceled = !0
         }
      };
      return n && (r.update = function(t, n, i, o) {
         t && (r.from = Ce(e, t)), n && (r.to = Ce(e, n)), i && (r.text = i), void 0 !== o && (r.origin = o)
      }), it(e, "beforeChange", e, r), e.cm && it(e.cm, "beforeChange", e.cm, r), r.canceled ? (e.cm && (e.cm.curOp.updateInput = 2), null) : {
         from: r.from,
         to: r.to,
         text: r.text,
         origin: r.origin
      }
   }

   function oo(e, t, n) {
      if (e.cm) {
         if (!e.cm.curOp) return Xr(e.cm, oo)(e, t, n);
         if (e.cm.state.suppressEdits) return
      }
      if (!(lt(e, "beforeChange") || e.cm && lt(e.cm, "beforeChange")) || (t = io(e, t, !0))) {
         var r = Te && !n && function(e, t, n) {
            var r = null;
            if (e.iter(t.line, n.line + 1, function(e) {
               if (e.markedSpans) for (var t = 0; t < e.markedSpans.length; ++t) {
                  var n = e.markedSpans[t].marker;
                  !n.readOnly || r && -1 != R(r, n) || (r || (r = [])).push(n)
               }
            }), !r) return null;
            for (var i = [{
               from: t,
               to: n
            }], o = 0; o < r.length; ++o) for (var a = r[o], l = a.find(0), s = 0; s < i.length; ++s) {
               var c = i[s];
               if (!(ve(c.to, l.from) < 0 || ve(c.from, l.to) > 0)) {
                  var u = [s, 1], d = ve(c.from, l.from), f = ve(c.to, l.to);
                  (d < 0 || !a.inclusiveLeft && !d) && u.push({
                     from: c.from,
                     to: l.from
                  }), (f > 0 || !a.inclusiveRight && !f) && u.push({
                     from: l.to,
                     to: c.to
                  }), i.splice.apply(i, u), s += u.length - 3
               }
            }
            return i
         }(e, t.from, t.to);
         if (r) for (var i = r.length - 1; i >= 0; --i) ao(e, {
            from: r[i].from,
            to: r[i].to,
            text: i ? [""] : t.text,
            origin: t.origin
         }); else ao(e, t)
      }
   }

   function ao(e, t) {
      if (1 != t.text.length || "" != t.text[0] || 0 != ve(t.from, t.to)) {
         var n = Si(e, t);
         Ei(e, t, n, e.cm ? e.cm.curOp.id : NaN), co(e, t, n, Ae(e, t));
         var r = [];
         Ai(e, function(e, n) {
            n || -1 != R(r, e.history) || (po(e.history, t), r.push(e.history)), co(e, t, null, Ae(e, t))
         })
      }
   }

   function lo(e, t, n) {
      var r = e.cm && e.cm.state.suppressEdits;
      if (!r || n) {
         for (var i, o = e.history, a = e.sel, l = "undo" == t ? o.done : o.undone, s = "undo" == t ? o.undone : o.done, c = 0; c < l.length && (i = l[c], n ? !i.ranges || i.equals(e.sel) : i.ranges); c++) ;
         if (c != l.length) {
            for (o.lastOrigin = o.lastSelOrigin = null; ;) {
               if (!(i = l.pop()).ranges) {
                  if (r) return void l.push(i);
                  break
               }
               if (Wi(i, s), n && !i.equals(e.sel)) return void Xi(e, i, {clearRedo: !1});
               a = i
            }
            var u = [];
            Wi(a, s), s.push({changes: u, generation: o.generation}), o.generation = i.generation || ++o.maxGeneration;
            for (var d = lt(e, "beforeChange") || e.cm && lt(e.cm, "beforeChange"), f = function(n) {
               var r = i.changes[n];
               if (r.origin = t, d && !io(e, r, !1)) return l.length = 0, {};
               u.push(Pi(e, r));
               var o = n ? Si(e, r) : X(l);
               co(e, r, o, qi(e, r)), !n && e.cm && e.cm.scrollIntoView({from: r.from, to: ki(r)});
               var a = [];
               Ai(e, function(e, t) {
                  t || -1 != R(a, e.history) || (po(e.history, r), a.push(e.history)), co(e, r, null, qi(e, r))
               })
            }, h = i.changes.length - 1; h >= 0; --h) {
               var p = f(h);
               if (p) return p.v
            }
         }
      }
   }

   function so(e, t) {
      if (0 != t && (e.first += t, e.sel = new yi(Y(e.sel.ranges, function(e) {
         return new bi(ge(e.anchor.line + t, e.anchor.ch), ge(e.head.line + t, e.head.ch))
      }), e.sel.primIndex), e.cm)) {
         Zr(e.cm, e.first, e.first - t, t);
         for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++) Jr(e.cm, r, "gutter")
      }
   }

   function co(e, t, n, r) {
      if (e.cm && !e.cm.curOp) return Xr(e.cm, co)(e, t, n, r);
      if (t.to.line < e.first) so(e, t.text.length - 1 - (t.to.line - t.from.line)); else if (!(t.from.line > e.lastLine())) {
         if (t.from.line < e.first) {
            var i = t.text.length - 1 - (e.first - t.from.line);
            so(e, i), t = {from: ge(e.first, 0), to: ge(t.to.line + i, t.to.ch), text: [X(t.text)], origin: t.origin}
         }
         var o = e.lastLine();
         t.to.line > o && (t = {
            from: t.from,
            to: ge(o, se(e, o).text.length),
            text: [t.text[0]],
            origin: t.origin
         }), t.removed = ce(e, t.from, t.to), n || (n = Si(e, t)), e.cm ? function(e, t, n) {
            var r = e.doc, i = e.display, o = t.from, a = t.to, l = !1, s = o.line;
            e.options.lineWrapping || (s = fe(Be(se(r, o.line))), r.iter(s, a.line + 1, function(e) {
               if (e == i.maxLine) return l = !0, !0
            }));
            r.sel.contains(t.from, t.to) > -1 && at(e);
            Oi(r, t, n, ar(e)), e.options.lineWrapping || (r.iter(s, o.line + t.text.length, function(e) {
               var t = $e(e);
               t > i.maxLineLength && (i.maxLine = e, i.maxLineLength = t, i.maxLineChanged = !0, l = !1)
            }), l && (e.curOp.updateMaxLine = !0));
            (function(e, t) {
               if (e.modeFrontier = Math.min(e.modeFrontier, t), !(e.highlightFrontier < t - 10)) {
                  for (var n = e.first, r = t - 1; r > n; r--) {
                     var i = se(e, r).stateAfter;
                     if (i && (!(i instanceof Dt) || r + i.lookAhead < t)) {
                        n = r + 1;
                        break
                     }
                  }
                  e.highlightFrontier = Math.min(e.highlightFrontier, n)
               }
            })(r, o.line), ri(e, 400);
            var c = t.text.length - (a.line - o.line) - 1;
            t.full ? Zr(e) : o.line != a.line || 1 != t.text.length || _i(e.doc, t) ? Zr(e, o.line, a.line + 1, c) : Jr(e, o.line, "text");
            var u = lt(e, "changes"), d = lt(e, "change");
            if (d || u) {
               var f = {from: o, to: a, text: t.text, removed: t.removed, origin: t.origin};
               d && cn(e, "change", e, f), u && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(f)
            }
            e.display.selForContextMenu = null
         }(e.cm, t, r) : Oi(e, t, r), Yi(e, n, j)
      }
   }

   function uo(e, t, n, r, i) {
      var o;
      r || (r = n), ve(r, n) < 0 && (n = (o = [r, n])[0], r = o[1]), "string" == typeof t && (t = e.splitLines(t)), oo(e, {
         from: n,
         to: r,
         text: t,
         origin: i
      })
   }

   function fo(e, t, n, r) {
      n < e.line ? e.line += r : t < e.line && (e.line = t, e.ch = 0)
   }

   function ho(e, t, n, r) {
      for (var i = 0; i < e.length; ++i) {
         var o = e[i], a = !0;
         if (o.ranges) {
            o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
            for (var l = 0; l < o.ranges.length; l++) fo(o.ranges[l].anchor, t, n, r), fo(o.ranges[l].head, t, n, r)
         } else {
            for (var s = 0; s < o.changes.length; ++s) {
               var c = o.changes[s];
               if (n < c.from.line) c.from = ge(c.from.line + r, c.from.ch), c.to = ge(c.to.line + r, c.to.ch); else if (t <= c.to.line) {
                  a = !1;
                  break
               }
            }
            a || (e.splice(0, i + 1), i = 0)
         }
      }
   }

   function po(e, t) {
      var n = t.from.line, r = t.to.line, i = t.text.length - (r - n) - 1;
      ho(e.done, n, r, i), ho(e.undone, n, r, i)
   }

   function mo(e, t, n, r) {
      var i = t, o = t;
      return "number" == typeof t ? o = se(e, ke(e, t)) : i = fe(t), null == i ? null : (r(o, i) && e.cm && Jr(e.cm, i, n), o)
   }

   function go(e) {
      this.lines = e, this.parent = null;
      for (var t = 0, n = 0; n < e.length; ++n) e[n].parent = this, t += e[n].height;
      this.height = t
   }

   function vo(e) {
      this.children = e;
      for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
         var i = e[r];
         t += i.chunkSize(), n += i.height, i.parent = this
      }
      this.size = t, this.height = n, this.parent = null
   }

   bi.prototype.from = function() {
      return xe(this.anchor, this.head)
   }, bi.prototype.to = function() {
      return we(this.anchor, this.head)
   }, bi.prototype.empty = function() {
      return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
   }, go.prototype = {
      chunkSize: function() {
         return this.lines.length
      }, removeInner: function(e, t) {
         for (var n = e, r = e + t; n < r; ++n) {
            var i = this.lines[n];
            this.height -= i.height, $t(i), cn(i, "delete")
         }
         this.lines.splice(e, t)
      }, collapse: function(e) {
         e.push.apply(e, this.lines)
      }, insertInner: function(e, t, n) {
         this.height += n, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
         for (var r = 0; r < t.length; ++r) t[r].parent = this
      }, iterN: function(e, t, n) {
         for (var r = e + t; e < r; ++e) if (n(this.lines[e])) return !0
      }
   }, vo.prototype = {
      chunkSize: function() {
         return this.size
      }, removeInner: function(e, t) {
         this.size -= t;
         for (var n = 0; n < this.children.length; ++n) {
            var r = this.children[n], i = r.chunkSize();
            if (e < i) {
               var o = Math.min(t, i - e), a = r.height;
               if (r.removeInner(e, o), this.height -= a - r.height, i == o && (this.children.splice(n--, 1), r.parent = null), 0 == (t -= o)) break;
               e = 0
            } else e -= i
         }
         if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof go))) {
            var l = [];
            this.collapse(l), this.children = [new go(l)], this.children[0].parent = this
         }
      }, collapse: function(e) {
         for (var t = 0; t < this.children.length; ++t) this.children[t].collapse(e)
      }, insertInner: function(e, t, n) {
         this.size += t.length, this.height += n;
         for (var r = 0; r < this.children.length; ++r) {
            var i = this.children[r], o = i.chunkSize();
            if (e <= o) {
               if (i.insertInner(e, t, n), i.lines && i.lines.length > 50) {
                  for (var a = i.lines.length % 25 + 25, l = a; l < i.lines.length;) {
                     var s = new go(i.lines.slice(l, l += 25));
                     i.height -= s.height, this.children.splice(++r, 0, s), s.parent = this
                  }
                  i.lines = i.lines.slice(0, a), this.maybeSpill()
               }
               break
            }
            e -= o
         }
      }, maybeSpill: function() {
         if (!(this.children.length <= 10)) {
            var e = this;
            do {
               var t = new vo(e.children.splice(e.children.length - 5, 5));
               if (e.parent) {
                  e.size -= t.size, e.height -= t.height;
                  var n = R(e.parent.children, e);
                  e.parent.children.splice(n + 1, 0, t)
               } else {
                  var r = new vo(e.children);
                  r.parent = e, e.children = [r, t], e = r
               }
               t.parent = e.parent
            } while (e.children.length > 10);
            e.parent.maybeSpill()
         }
      }, iterN: function(e, t, n) {
         for (var r = 0; r < this.children.length; ++r) {
            var i = this.children[r], o = i.chunkSize();
            if (e < o) {
               var a = Math.min(t, o - e);
               if (i.iterN(e, a, n)) return !0;
               if (0 == (t -= a)) break;
               e = 0
            } else e -= o
         }
      }
   };
   var yo = function(e, t, n) {
      if (n) for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r]);
      this.doc = e, this.node = t
   };

   function bo(e, t, n) {
      Ke(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && Lr(e, n)
   }

   yo.prototype.clear = function() {
      var e = this.doc.cm, t = this.line.widgets, n = this.line, r = fe(n);
      if (null != r && t) {
         for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
         t.length || (n.widgets = null);
         var o = kn(this);
         de(n, Math.max(0, n.height - o)), e && ($r(e, function() {
            bo(e, n, -o), Jr(e, r, "widget")
         }), cn(e, "lineWidgetCleared", e, this, r))
      }
   }, yo.prototype.changed = function() {
      var e = this, t = this.height, n = this.doc.cm, r = this.line;
      this.height = null;
      var i = kn(this) - t;
      i && (Ve(this.doc, r) || de(r, r.height + i), n && $r(n, function() {
         n.curOp.forceUpdate = !0, bo(n, r, i), cn(n, "lineWidgetChanged", n, e, fe(r))
      }))
   }, st(yo);
   var wo = 0, xo = function(e, t) {
      this.lines = [], this.type = t, this.doc = e, this.id = ++wo
   };

   function ko(e, t, n, r, i) {
      if (r && r.shared) return function(e, t, n, r, i) {
         (r = H(r)).shared = !1;
         var o = [ko(e, t, n, r, i)], a = o[0], l = r.widgetNode;
         return Ai(e, function(e) {
            l && (r.widgetNode = l.cloneNode(!0)), o.push(ko(e, Ce(e, t), Ce(e, n), r, i));
            for (var s = 0; s < e.linked.length; ++s) if (e.linked[s].isParent) return;
            a = X(o)
         }), new Co(o, a)
      }(e, t, n, r, i);
      if (e.cm && !e.cm.curOp) return Xr(e.cm, ko)(e, t, n, r, i);
      var o = new xo(e, i), a = ve(t, n);
      if (r && H(r, o, !1), a > 0 || 0 == a && !1 !== o.clearWhenEmpty) return o;
      if (o.replacedWith && (o.collapsed = !0, o.widgetNode = A("span", [o.replacedWith], "CodeMirror-widget"), r.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"), r.insertLeft && (o.widgetNode.insertLeft = !0)), o.collapsed) {
         if (qe(e, t.line, t, n, o) || t.line != n.line && qe(e, n.line, t, n, o)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
         Le = !0
      }
      o.addToHistory && Ei(e, {from: t, to: n, origin: "markText"}, e.sel, NaN);
      var l, s = t.line, c = e.cm;
      if (e.iter(s, n.line + 1, function(e) {
         c && o.collapsed && !c.options.lineWrapping && Be(e) == c.display.maxLine && (l = !0), o.collapsed && s != t.line && de(e, 0), function(e, t) {
            e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], t.marker.attachLine(e)
         }(e, new Me(o, s == t.line ? t.ch : null, s == n.line ? n.ch : null)), ++s
      }), o.collapsed && e.iter(t.line, n.line + 1, function(t) {
         Ve(e, t) && de(t, 0)
      }), o.clearOnEnter && tt(o, "beforeCursorEnter", function() {
         return o.clear()
      }), o.readOnly && (Te = !0, (e.history.done.length || e.history.undone.length) && e.clearHistory()), o.collapsed && (o.id = ++wo, o.atomic = !0), c) {
         if (l && (c.curOp.updateMaxLine = !0), o.collapsed) Zr(c, t.line, n.line + 1); else if (o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title) for (var u = t.line; u <= n.line; u++) Jr(c, u, "text");
         o.atomic && Zi(c.doc), cn(c, "markerAdded", c, o)
      }
      return o
   }

   xo.prototype.clear = function() {
      if (!this.explicitlyCleared) {
         var e = this.doc.cm, t = e && !e.curOp;
         if (t && Br(e), lt(this, "clear")) {
            var n = this.find();
            n && cn(this, "clear", n.from, n.to)
         }
         for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
            var a = this.lines[o], l = _e(a.markedSpans, this);
            e && !this.collapsed ? Jr(e, fe(a), "text") : e && (null != l.to && (i = fe(a)), null != l.from && (r = fe(a))), a.markedSpans = Oe(a.markedSpans, l), null == l.from && this.collapsed && !Ve(this.doc, a) && e && de(a, nr(e.display))
         }
         if (e && this.collapsed && !e.options.lineWrapping) for (var s = 0; s < this.lines.length; ++s) {
            var c = Be(this.lines[s]), u = $e(c);
            u > e.display.maxLineLength && (e.display.maxLine = c, e.display.maxLineLength = u, e.display.maxLineChanged = !0)
         }
         null != r && e && this.collapsed && Zr(e, r, i + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && Zi(e.doc)), e && cn(e, "markerCleared", e, this, r, i), t && jr(e), this.parent && this.parent.clear()
      }
   }, xo.prototype.find = function(e, t) {
      var n, r;
      null == e && "bookmark" == this.type && (e = 1);
      for (var i = 0; i < this.lines.length; ++i) {
         var o = this.lines[i], a = _e(o.markedSpans, this);
         if (null != a.from && (n = ge(t ? o : fe(o), a.from), -1 == e)) return n;
         if (null != a.to && (r = ge(t ? o : fe(o), a.to), 1 == e)) return r
      }
      return n && {from: n, to: r}
   }, xo.prototype.changed = function() {
      var e = this, t = this.find(-1, !0), n = this, r = this.doc.cm;
      t && r && $r(r, function() {
         var i = t.line, o = fe(t.line), a = zn(r, o);
         if (a && (In(a), r.curOp.selectionChanged = r.curOp.forceUpdate = !0), r.curOp.updateMaxLine = !0, !Ve(n.doc, i) && null != n.height) {
            var l = n.height;
            n.height = null;
            var s = kn(n) - l;
            s && de(i, i.height + s)
         }
         cn(r, "markerChanged", r, e)
      })
   }, xo.prototype.attachLine = function(e) {
      if (!this.lines.length && this.doc.cm) {
         var t = this.doc.cm.curOp;
         t.maybeHiddenMarkers && -1 != R(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)
      }
      this.lines.push(e)
   }, xo.prototype.detachLine = function(e) {
      if (this.lines.splice(R(this.lines, e), 1), !this.lines.length && this.doc.cm) {
         var t = this.doc.cm.curOp;
         (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
      }
   }, st(xo);
   var Co = function(e, t) {
      this.markers = e, this.primary = t;
      for (var n = 0; n < e.length; ++n) e[n].parent = this
   };

   function So(e) {
      return e.findMarks(ge(e.first, 0), e.clipPos(ge(e.lastLine())), function(e) {
         return e.parent
      })
   }

   function To(e) {
      for (var t = function(t) {
         var n = e[t], r = [n.primary.doc];
         Ai(n.primary.doc, function(e) {
            return r.push(e)
         });
         for (var i = 0; i < n.markers.length; i++) {
            var o = n.markers[i];
            -1 == R(r, o.doc) && (o.parent = null, n.markers.splice(i--, 1))
         }
      }, n = 0; n < e.length; n++) t(n)
   }

   Co.prototype.clear = function() {
      if (!this.explicitlyCleared) {
         this.explicitlyCleared = !0;
         for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
         cn(this, "clear")
      }
   }, Co.prototype.find = function(e, t) {
      return this.primary.find(e, t)
   }, st(Co);
   var Lo = 0, Mo = function(e, t, n, r, i) {
      if (!(this instanceof Mo)) return new Mo(e, t, n, r, i);
      null == n && (n = 0), vo.call(this, [new go([new Kt("", null)])]), this.first = n, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = n;
      var o = ge(n, 0);
      this.sel = xi(o), this.history = new Fi(null), this.id = ++Lo, this.modeOption = t, this.lineSep = r, this.direction = "rtl" == i ? "rtl" : "ltr", this.extend = !1, "string" == typeof e && (e = this.splitLines(e)), Oi(this, {
         from: o,
         to: o,
         text: e
      }), Xi(this, xi(o), j)
   };
   Mo.prototype = Z(vo.prototype, {
      constructor: Mo, iter: function(e, t, n) {
         n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e)
      }, insert: function(e, t) {
         for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height;
         this.insertInner(e - this.first, t, n)
      }, remove: function(e, t) {
         this.removeInner(e - this.first, t)
      }, getValue: function(e) {
         var t = ue(this, this.first, this.first + this.size);
         return !1 === e ? t : t.join(e || this.lineSeparator())
      }, setValue: Qr(function(e) {
         var t = ge(this.first, 0), n = this.first + this.size - 1;
         oo(this, {
            from: t,
            to: ge(n, se(this, n).text.length),
            text: this.splitLines(e),
            origin: "setValue",
            full: !0
         }, !0), this.cm && _r(this.cm, 0, 0), Xi(this, xi(t), j)
      }), replaceRange: function(e, t, n, r) {
         uo(this, e, t = Ce(this, t), n = n ? Ce(this, n) : t, r)
      }, getRange: function(e, t, n) {
         var r = ce(this, Ce(this, e), Ce(this, t));
         return !1 === n ? r : r.join(n || this.lineSeparator())
      }, getLine: function(e) {
         var t = this.getLineHandle(e);
         return t && t.text
      }, getLineHandle: function(e) {
         if (pe(this, e)) return se(this, e)
      }, getLineNumber: function(e) {
         return fe(e)
      }, getLineHandleVisualStart: function(e) {
         return "number" == typeof e && (e = se(this, e)), Be(e)
      }, lineCount: function() {
         return this.size
      }, firstLine: function() {
         return this.first
      }, lastLine: function() {
         return this.first + this.size - 1
      }, clipPos: function(e) {
         return Ce(this, e)
      }, getCursor: function(e) {
         var t = this.sel.primary();
         return null == e || "head" == e ? t.head : "anchor" == e ? t.anchor : "end" == e || "to" == e || !1 === e ? t.to() : t.from()
      }, listSelections: function() {
         return this.sel.ranges
      }, somethingSelected: function() {
         return this.sel.somethingSelected()
      }, setCursor: Qr(function(e, t, n) {
         Ki(this, Ce(this, "number" == typeof e ? ge(e, t || 0) : e), null, n)
      }), setSelection: Qr(function(e, t, n) {
         Ki(this, Ce(this, e), Ce(this, t || e), n)
      }), extendSelection: Qr(function(e, t, n) {
         Ui(this, Ce(this, e), t && Ce(this, t), n)
      }), extendSelections: Qr(function(e, t) {
         Vi(this, Se(this, e), t)
      }), extendSelectionsBy: Qr(function(e, t) {
         Vi(this, Se(this, Y(this.sel.ranges, e)), t)
      }), setSelections: Qr(function(e, t, n) {
         if (e.length) {
            for (var r = [], i = 0; i < e.length; i++) r[i] = new bi(Ce(this, e[i].anchor), Ce(this, e[i].head));
            null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), Xi(this, wi(this.cm, r, t), n)
         }
      }), addSelection: Qr(function(e, t, n) {
         var r = this.sel.ranges.slice(0);
         r.push(new bi(Ce(this, e), Ce(this, t || e))), Xi(this, wi(this.cm, r, r.length - 1), n)
      }), getSelection: function(e) {
         for (var t, n = this.sel.ranges, r = 0; r < n.length; r++) {
            var i = ce(this, n[r].from(), n[r].to());
            t = t ? t.concat(i) : i
         }
         return !1 === e ? t : t.join(e || this.lineSeparator())
      }, getSelections: function(e) {
         for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
            var i = ce(this, n[r].from(), n[r].to());
            !1 !== e && (i = i.join(e || this.lineSeparator())), t[r] = i
         }
         return t
      }, replaceSelection: function(e, t, n) {
         for (var r = [], i = 0; i < this.sel.ranges.length; i++) r[i] = e;
         this.replaceSelections(r, t, n || "+input")
      }, replaceSelections: Qr(function(e, t, n) {
         for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
            var a = i.ranges[o];
            r[o] = {from: a.from(), to: a.to(), text: this.splitLines(e[o]), origin: n}
         }
         for (var l = t && "end" != t && function(e, t, n) {
            for (var r = [], i = ge(e.first, 0), o = i, a = 0; a < t.length; a++) {
               var l = t[a], s = Ti(l.from, i, o), c = Ti(ki(l), i, o);
               if (i = l.to, o = c, "around" == n) {
                  var u = e.sel.ranges[a], d = ve(u.head, u.anchor) < 0;
                  r[a] = new bi(d ? c : s, d ? s : c)
               } else r[a] = new bi(s, s)
            }
            return new yi(r, e.sel.primIndex)
         }(this, r, t), s = r.length - 1; s >= 0; s--) oo(this, r[s]);
         l ? $i(this, l) : this.cm && Mr(this.cm)
      }), undo: Qr(function() {
         lo(this, "undo")
      }), redo: Qr(function() {
         lo(this, "redo")
      }), undoSelection: Qr(function() {
         lo(this, "undo", !0)
      }), redoSelection: Qr(function() {
         lo(this, "redo", !0)
      }), setExtending: function(e) {
         this.extend = e
      }, getExtending: function() {
         return this.extend
      }, historySize: function() {
         for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++) e.done[r].ranges || ++t;
         for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++n;
         return {undo: t, redo: n}
      }, clearHistory: function() {
         this.history = new Fi(this.history.maxGeneration)
      }, markClean: function() {
         this.cleanGeneration = this.changeGeneration(!0)
      }, changeGeneration: function(e) {
         return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation
      }, isClean: function(e) {
         return this.history.generation == (e || this.cleanGeneration)
      }, getHistory: function() {
         return {done: Bi(this.history.done), undone: Bi(this.history.undone)}
      }, setHistory: function(e) {
         var t = this.history = new Fi(this.history.maxGeneration);
         t.done = Bi(e.done.slice(0), null, !0), t.undone = Bi(e.undone.slice(0), null, !0)
      }, setGutterMarker: Qr(function(e, t, n) {
         return mo(this, e, "gutter", function(e) {
            var r = e.gutterMarkers || (e.gutterMarkers = {});
            return r[t] = n, !n && ne(r) && (e.gutterMarkers = null), !0
         })
      }), clearGutter: Qr(function(e) {
         var t = this;
         this.iter(function(n) {
            n.gutterMarkers && n.gutterMarkers[e] && mo(t, n, "gutter", function() {
               return n.gutterMarkers[e] = null, ne(n.gutterMarkers) && (n.gutterMarkers = null), !0
            })
         })
      }), lineInfo: function(e) {
         var t;
         if ("number" == typeof e) {
            if (!pe(this, e)) return null;
            if (t = e, !(e = se(this, e))) return null
         } else if (null == (t = fe(e))) return null;
         return {
            line: t,
            handle: e,
            text: e.text,
            gutterMarkers: e.gutterMarkers,
            textClass: e.textClass,
            bgClass: e.bgClass,
            wrapClass: e.wrapClass,
            widgets: e.widgets
         }
      }, addLineClass: Qr(function(e, t, n) {
         return mo(this, e, "gutter" == t ? "gutter" : "class", function(e) {
            var r = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass";
            if (e[r]) {
               if (S(n).test(e[r])) return !1;
               e[r] += " " + n
            } else e[r] = n;
            return !0
         })
      }), removeLineClass: Qr(function(e, t, n) {
         return mo(this, e, "gutter" == t ? "gutter" : "class", function(e) {
            var r = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass",
               i = e[r];
            if (!i) return !1;
            if (null == n) e[r] = null; else {
               var o = i.match(S(n));
               if (!o) return !1;
               var a = o.index + o[0].length;
               e[r] = i.slice(0, o.index) + (o.index && a != i.length ? " " : "") + i.slice(a) || null
            }
            return !0
         })
      }), addLineWidget: Qr(function(e, t, n) {
         return function(e, t, n, r) {
            var i = new yo(e, n, r), o = e.cm;
            return o && i.noHScroll && (o.display.alignWidgets = !0), mo(e, t, "widget", function(t) {
               var n = t.widgets || (t.widgets = []);
               if (null == i.insertAt ? n.push(i) : n.splice(Math.min(n.length - 1, Math.max(0, i.insertAt)), 0, i), i.line = t, o && !Ve(e, t)) {
                  var r = Ke(t) < e.scrollTop;
                  de(t, t.height + kn(i)), r && Lr(o, i.height), o.curOp.forceUpdate = !0
               }
               return !0
            }), o && cn(o, "lineWidgetAdded", o, i, "number" == typeof t ? t : fe(t)), i
         }(this, e, t, n)
      }), removeLineWidget: function(e) {
         e.clear()
      }, markText: function(e, t, n) {
         return ko(this, Ce(this, e), Ce(this, t), n, n && n.type || "range")
      }, setBookmark: function(e, t) {
         var n = {
            replacedWith: t && (null == t.nodeType ? t.widget : t),
            insertLeft: t && t.insertLeft,
            clearWhenEmpty: !1,
            shared: t && t.shared,
            handleMouseEvents: t && t.handleMouseEvents
         };
         return ko(this, e = Ce(this, e), e, n, "bookmark")
      }, findMarksAt: function(e) {
         var t = [], n = se(this, (e = Ce(this, e)).line).markedSpans;
         if (n) for (var r = 0; r < n.length; ++r) {
            var i = n[r];
            (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker)
         }
         return t
      }, findMarks: function(e, t, n) {
         e = Ce(this, e), t = Ce(this, t);
         var r = [], i = e.line;
         return this.iter(e.line, t.line + 1, function(o) {
            var a = o.markedSpans;
            if (a) for (var l = 0; l < a.length; l++) {
               var s = a[l];
               null != s.to && i == e.line && e.ch >= s.to || null == s.from && i != e.line || null != s.from && i == t.line && s.from >= t.ch || n && !n(s.marker) || r.push(s.marker.parent || s.marker)
            }
            ++i
         }), r
      }, getAllMarks: function() {
         var e = [];
         return this.iter(function(t) {
            var n = t.markedSpans;
            if (n) for (var r = 0; r < n.length; ++r) null != n[r].from && e.push(n[r].marker)
         }), e
      }, posFromIndex: function(e) {
         var t, n = this.first, r = this.lineSeparator().length;
         return this.iter(function(i) {
            var o = i.text.length + r;
            if (o > e) return t = e, !0;
            e -= o, ++n
         }), Ce(this, ge(n, t))
      }, indexFromPos: function(e) {
         var t = (e = Ce(this, e)).ch;
         if (e.line < this.first || e.ch < 0) return 0;
         var n = this.lineSeparator().length;
         return this.iter(this.first, e.line, function(e) {
            t += e.text.length + n
         }), t
      }, copy: function(e) {
         var t = new Mo(ue(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
         return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t
      }, linkedDoc: function(e) {
         e || (e = {});
         var t = this.first, n = this.first + this.size;
         null != e.from && e.from > t && (t = e.from), null != e.to && e.to < n && (n = e.to);
         var r = new Mo(ue(this, t, n), e.mode || this.modeOption, t, this.lineSep, this.direction);
         return e.sharedHist && (r.history = this.history), (this.linked || (this.linked = [])).push({
            doc: r,
            sharedHist: e.sharedHist
         }), r.linked = [{doc: this, isParent: !0, sharedHist: e.sharedHist}], function(e, t) {
            for (var n = 0; n < t.length; n++) {
               var r = t[n], i = r.find(), o = e.clipPos(i.from), a = e.clipPos(i.to);
               if (ve(o, a)) {
                  var l = ko(e, o, a, r.primary, r.primary.type);
                  r.markers.push(l), l.parent = r
               }
            }
         }(r, So(this)), r
      }, unlinkDoc: function(e) {
         if (e instanceof Sa && (e = e.doc), this.linked) for (var t = 0; t < this.linked.length; ++t) {
            if (this.linked[t].doc == e) {
               this.linked.splice(t, 1), e.unlinkDoc(this), To(So(this));
               break
            }
         }
         if (e.history == this.history) {
            var n = [e.id];
            Ai(e, function(e) {
               return n.push(e.id)
            }, !0), e.history = new Fi(null), e.history.done = Bi(this.history.done, n), e.history.undone = Bi(this.history.undone, n)
         }
      }, iterLinkedDocs: function(e) {
         Ai(this, e)
      }, getMode: function() {
         return this.mode
      }, getEditor: function() {
         return this.cm
      }, splitLines: function(e) {
         return this.lineSep ? e.split(this.lineSep) : xt(e)
      }, lineSeparator: function() {
         return this.lineSep || "\n"
      }, setDirection: Qr(function(e) {
         var t;
         ("rtl" != e && (e = "ltr"), e != this.direction) && (this.direction = e, this.iter(function(e) {
            return e.order = null
         }), this.cm && $r(t = this.cm, function() {
            zi(t), Zr(t)
         }))
      })
   }), Mo.prototype.eachLine = Mo.prototype.iter;
   var _o = 0;

   function Oo(e) {
      var t = this;
      if (Ao(t), !ot(t, e) && !Cn(t.display, e)) {
         ct(e), a && (_o = +new Date);
         var n = sr(t, e, !0), r = e.dataTransfer.files;
         if (n && !t.isReadOnly()) if (r && r.length && window.FileReader && window.File) for (var i = r.length, o = Array(i), l = 0, s = function(e, r) {
            if (!t.options.allowDropFileTypes || -1 != R(t.options.allowDropFileTypes, e.type)) {
               var a = new FileReader;
               a.onload = Xr(t, function() {
                  var e = a.result;
                  if (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""), o[r] = e, ++l == i) {
                     var s = {
                        from: n = Ce(t.doc, n),
                        to: n,
                        text: t.doc.splitLines(o.join(t.doc.lineSeparator())),
                        origin: "paste"
                     };
                     oo(t.doc, s), $i(t.doc, xi(n, ki(s)))
                  }
               }), a.readAsText(e)
            }
         }, c = 0; c < i; ++c) s(r[c], c); else {
            if (t.state.draggingText && t.doc.sel.contains(n) > -1) return t.state.draggingText(e), void setTimeout(function() {
               return t.display.input.focus()
            }, 20);
            try {
               var u = e.dataTransfer.getData("Text");
               if (u) {
                  var d;
                  if (t.state.draggingText && !t.state.draggingText.copy && (d = t.listSelections()), Yi(t.doc, xi(n, n)), d) for (var f = 0; f < d.length; ++f) uo(t.doc, "", d[f].anchor, d[f].head, "drag");
                  t.replaceSelection(u, "around", "paste"), t.display.input.focus()
               }
            } catch (e) {
            }
         }
      }
   }

   function Ao(e) {
      e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null)
   }

   function No(e) {
      if (document.getElementsByClassName) {
         for (var t = document.getElementsByClassName("CodeMirror"), n = [], r = 0; r < t.length; r++) {
            var i = t[r].CodeMirror;
            i && n.push(i)
         }
         n.length && n[0].operation(function() {
            for (var t = 0; t < n.length; t++) e(n[t])
         })
      }
   }

   var zo = !1;

   function Fo() {
      var e;
      zo || (tt(window, "resize", function() {
         null == e && (e = setTimeout(function() {
            e = null, No(Po)
         }, 100))
      }), tt(window, "blur", function() {
         return No(br)
      }), zo = !0)
   }

   function Po(e) {
      var t = e.display;
      t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize()
   }

   for (var Do = {
      3: "Pause",
      8: "Backspace",
      9: "Tab",
      13: "Enter",
      16: "Shift",
      17: "Ctrl",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Esc",
      32: "Space",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "Left",
      38: "Up",
      39: "Right",
      40: "Down",
      44: "PrintScrn",
      45: "Insert",
      46: "Delete",
      59: ";",
      61: "=",
      91: "Mod",
      92: "Mod",
      93: "Mod",
      106: "*",
      107: "=",
      109: "-",
      110: ".",
      111: "/",
      127: "Delete",
      145: "ScrollLock",
      173: "-",
      186: ";",
      187: "=",
      188: ",",
      189: "-",
      190: ".",
      191: "/",
      192: "`",
      219: "[",
      220: "\\",
      221: "]",
      222: "'",
      63232: "Up",
      63233: "Down",
      63234: "Left",
      63235: "Right",
      63272: "Delete",
      63273: "Home",
      63275: "End",
      63276: "PageUp",
      63277: "PageDown",
      63302: "Insert"
   }, Eo = 0; Eo < 10; Eo++) Do[Eo + 48] = Do[Eo + 96] = String(Eo);
   for (var Ho = 65; Ho <= 90; Ho++) Do[Ho] = String.fromCharCode(Ho);
   for (var Wo = 1; Wo <= 12; Wo++) Do[Wo + 111] = Do[Wo + 63235] = "F" + Wo;
   var Io = {};

   function Ro(e) {
      var t, n, r, i, o = e.split(/-(?!$)/);
      e = o[o.length - 1];
      for (var a = 0; a < o.length - 1; a++) {
         var l = o[a];
         if (/^(cmd|meta|m)$/i.test(l)) i = !0; else if (/^a(lt)?$/i.test(l)) t = !0; else if (/^(c|ctrl|control)$/i.test(l)) n = !0; else {
            if (!/^s(hift)?$/i.test(l)) throw new Error("Unrecognized modifier name: " + l);
            r = !0
         }
      }
      return t && (e = "Alt-" + e), n && (e = "Ctrl-" + e), i && (e = "Cmd-" + e), r && (e = "Shift-" + e), e
   }

   function qo(e) {
      var t = {};
      for (var n in e) if (e.hasOwnProperty(n)) {
         var r = e[n];
         if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
         if ("..." == r) {
            delete e[n];
            continue
         }
         for (var i = Y(n.split(" "), Ro), o = 0; o < i.length; o++) {
            var a = void 0, l = void 0;
            o == i.length - 1 ? (l = i.join(" "), a = r) : (l = i.slice(0, o + 1).join(" "), a = "...");
            var s = t[l];
            if (s) {
               if (s != a) throw new Error("Inconsistent bindings for " + l)
            } else t[l] = a
         }
         delete e[n]
      }
      for (var c in t) e[c] = t[c];
      return e
   }

   function Bo(e, t, n, r) {
      var i = (t = Go(t)).call ? t.call(e, r) : t[e];
      if (!1 === i) return "nothing";
      if ("..." === i) return "multi";
      if (null != i && n(i)) return "handled";
      if (t.fallthrough) {
         if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return Bo(e, t.fallthrough, n, r);
         for (var o = 0; o < t.fallthrough.length; o++) {
            var a = Bo(e, t.fallthrough[o], n, r);
            if (a) return a
         }
      }
   }

   function jo(e) {
      var t = "string" == typeof e ? e : Do[e.keyCode];
      return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
   }

   function Uo(e, t, n) {
      var r = e;
      return t.altKey && "Alt" != r && (e = "Alt-" + e), (k ? t.metaKey : t.ctrlKey) && "Ctrl" != r && (e = "Ctrl-" + e), (k ? t.ctrlKey : t.metaKey) && "Cmd" != r && (e = "Cmd-" + e), !n && t.shiftKey && "Shift" != r && (e = "Shift-" + e), e
   }

   function Vo(e, t) {
      if (d && 34 == e.keyCode && e.char) return !1;
      var n = Do[e.keyCode];
      return null != n && !e.altGraphKey && (3 == e.keyCode && e.code && (n = e.code), Uo(n, e, t))
   }

   function Go(e) {
      return "string" == typeof e ? Io[e] : e
   }

   function Ko(e, t) {
      for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
         for (var o = t(n[i]); r.length && ve(o.from, X(r).to) <= 0;) {
            var a = r.pop();
            if (ve(a.from, o.from) < 0) {
               o.from = a.from;
               break
            }
         }
         r.push(o)
      }
      $r(e, function() {
         for (var t = r.length - 1; t >= 0; t--) uo(e.doc, "", r[t].from, r[t].to, "+delete");
         Mr(e)
      })
   }

   function $o(e, t, n) {
      var r = oe(e.text, t + n, n);
      return r < 0 || r > e.text.length ? null : r
   }

   function Xo(e, t, n) {
      var r = $o(e, t.ch, n);
      return null == r ? null : new ge(t.line, r, n < 0 ? "after" : "before")
   }

   function Yo(e, t, n, r, i) {
      if (e) {
         var o = Je(n, t.doc.direction);
         if (o) {
            var a, l = i < 0 ? X(o) : o[0], s = i < 0 == (1 == l.level) ? "after" : "before";
            if (l.level > 0 || "rtl" == t.doc.direction) {
               var c = Fn(t, n);
               a = i < 0 ? n.text.length - 1 : 0;
               var u = Pn(t, c, a).top;
               a = ae(function(e) {
                  return Pn(t, c, e).top == u
               }, i < 0 == (1 == l.level) ? l.from : l.to - 1, a), "before" == s && (a = $o(n, a, 1))
            } else a = i < 0 ? l.to : l.from;
            return new ge(r, a, s)
         }
      }
      return new ge(r, i < 0 ? n.text.length : 0, i < 0 ? "before" : "after")
   }

   Io.basic = {
      Left: "goCharLeft",
      Right: "goCharRight",
      Up: "goLineUp",
      Down: "goLineDown",
      End: "goLineEnd",
      Home: "goLineStartSmart",
      PageUp: "goPageUp",
      PageDown: "goPageDown",
      Delete: "delCharAfter",
      Backspace: "delCharBefore",
      "Shift-Backspace": "delCharBefore",
      Tab: "defaultTab",
      "Shift-Tab": "indentAuto",
      Enter: "newlineAndIndent",
      Insert: "toggleOverwrite",
      Esc: "singleSelection"
   }, Io.pcDefault = {
      "Ctrl-A": "selectAll",
      "Ctrl-D": "deleteLine",
      "Ctrl-Z": "undo",
      "Shift-Ctrl-Z": "redo",
      "Ctrl-Y": "redo",
      "Ctrl-Home": "goDocStart",
      "Ctrl-End": "goDocEnd",
      "Ctrl-Up": "goLineUp",
      "Ctrl-Down": "goLineDown",
      "Ctrl-Left": "goGroupLeft",
      "Ctrl-Right": "goGroupRight",
      "Alt-Left": "goLineStart",
      "Alt-Right": "goLineEnd",
      "Ctrl-Backspace": "delGroupBefore",
      "Ctrl-Delete": "delGroupAfter",
      "Ctrl-S": "save",
      "Ctrl-F": "find",
      "Ctrl-G": "findNext",
      "Shift-Ctrl-G": "findPrev",
      "Shift-Ctrl-F": "replace",
      "Shift-Ctrl-R": "replaceAll",
      "Ctrl-[": "indentLess",
      "Ctrl-]": "indentMore",
      "Ctrl-U": "undoSelection",
      "Shift-Ctrl-U": "redoSelection",
      "Alt-U": "redoSelection",
      fallthrough: "basic"
   }, Io.emacsy = {
      "Ctrl-F": "goCharRight",
      "Ctrl-B": "goCharLeft",
      "Ctrl-P": "goLineUp",
      "Ctrl-N": "goLineDown",
      "Alt-F": "goWordRight",
      "Alt-B": "goWordLeft",
      "Ctrl-A": "goLineStart",
      "Ctrl-E": "goLineEnd",
      "Ctrl-V": "goPageDown",
      "Shift-Ctrl-V": "goPageUp",
      "Ctrl-D": "delCharAfter",
      "Ctrl-H": "delCharBefore",
      "Alt-D": "delWordAfter",
      "Alt-Backspace": "delWordBefore",
      "Ctrl-K": "killLine",
      "Ctrl-T": "transposeChars",
      "Ctrl-O": "openLine"
   }, Io.macDefault = {
      "Cmd-A": "selectAll",
      "Cmd-D": "deleteLine",
      "Cmd-Z": "undo",
      "Shift-Cmd-Z": "redo",
      "Cmd-Y": "redo",
      "Cmd-Home": "goDocStart",
      "Cmd-Up": "goDocStart",
      "Cmd-End": "goDocEnd",
      "Cmd-Down": "goDocEnd",
      "Alt-Left": "goGroupLeft",
      "Alt-Right": "goGroupRight",
      "Cmd-Left": "goLineLeft",
      "Cmd-Right": "goLineRight",
      "Alt-Backspace": "delGroupBefore",
      "Ctrl-Alt-Backspace": "delGroupAfter",
      "Alt-Delete": "delGroupAfter",
      "Cmd-S": "save",
      "Cmd-F": "find",
      "Cmd-G": "findNext",
      "Shift-Cmd-G": "findPrev",
      "Cmd-Alt-F": "replace",
      "Shift-Cmd-Alt-F": "replaceAll",
      "Cmd-[": "indentLess",
      "Cmd-]": "indentMore",
      "Cmd-Backspace": "delWrappedLineLeft",
      "Cmd-Delete": "delWrappedLineRight",
      "Cmd-U": "undoSelection",
      "Shift-Cmd-U": "redoSelection",
      "Ctrl-Up": "goDocStart",
      "Ctrl-Down": "goDocEnd",
      fallthrough: ["basic", "emacsy"]
   }, Io.default = y ? Io.macDefault : Io.pcDefault;
   var Qo = {
      selectAll: ro, singleSelection: function(e) {
         return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), j)
      }, killLine: function(e) {
         return Ko(e, function(t) {
            if (t.empty()) {
               var n = se(e.doc, t.head.line).text.length;
               return t.head.ch == n && t.head.line < e.lastLine() ? {
                  from: t.head,
                  to: ge(t.head.line + 1, 0)
               } : {from: t.head, to: ge(t.head.line, n)}
            }
            return {from: t.from(), to: t.to()}
         })
      }, deleteLine: function(e) {
         return Ko(e, function(t) {
            return {from: ge(t.from().line, 0), to: Ce(e.doc, ge(t.to().line + 1, 0))}
         })
      }, delLineLeft: function(e) {
         return Ko(e, function(e) {
            return {from: ge(e.from().line, 0), to: e.from()}
         })
      }, delWrappedLineLeft: function(e) {
         return Ko(e, function(t) {
            var n = e.charCoords(t.head, "div").top + 5;
            return {from: e.coordsChar({left: 0, top: n}, "div"), to: t.from()}
         })
      }, delWrappedLineRight: function(e) {
         return Ko(e, function(t) {
            var n = e.charCoords(t.head, "div").top + 5,
               r = e.coordsChar({left: e.display.lineDiv.offsetWidth + 100, top: n}, "div");
            return {from: t.from(), to: r}
         })
      }, undo: function(e) {
         return e.undo()
      }, redo: function(e) {
         return e.redo()
      }, undoSelection: function(e) {
         return e.undoSelection()
      }, redoSelection: function(e) {
         return e.redoSelection()
      }, goDocStart: function(e) {
         return e.extendSelection(ge(e.firstLine(), 0))
      }, goDocEnd: function(e) {
         return e.extendSelection(ge(e.lastLine()))
      }, goLineStart: function(e) {
         return e.extendSelectionsBy(function(t) {
            return Zo(e, t.head.line)
         }, {origin: "+move", bias: 1})
      }, goLineStartSmart: function(e) {
         return e.extendSelectionsBy(function(t) {
            return Jo(e, t.head)
         }, {origin: "+move", bias: 1})
      }, goLineEnd: function(e) {
         return e.extendSelectionsBy(function(t) {
            return function(e, t) {
               var n = se(e.doc, t), r = function(e) {
                  for (var t; t = Ie(e);) e = t.find(1, !0).line;
                  return e
               }(n);
               r != n && (t = fe(r));
               return Yo(!0, e, n, t, -1)
            }(e, t.head.line)
         }, {origin: "+move", bias: -1})
      }, goLineRight: function(e) {
         return e.extendSelectionsBy(function(t) {
            var n = e.cursorCoords(t.head, "div").top + 5;
            return e.coordsChar({left: e.display.lineDiv.offsetWidth + 100, top: n}, "div")
         }, V)
      }, goLineLeft: function(e) {
         return e.extendSelectionsBy(function(t) {
            var n = e.cursorCoords(t.head, "div").top + 5;
            return e.coordsChar({left: 0, top: n}, "div")
         }, V)
      }, goLineLeftSmart: function(e) {
         return e.extendSelectionsBy(function(t) {
            var n = e.cursorCoords(t.head, "div").top + 5, r = e.coordsChar({left: 0, top: n}, "div");
            return r.ch < e.getLine(r.line).search(/\S/) ? Jo(e, t.head) : r
         }, V)
      }, goLineUp: function(e) {
         return e.moveV(-1, "line")
      }, goLineDown: function(e) {
         return e.moveV(1, "line")
      }, goPageUp: function(e) {
         return e.moveV(-1, "page")
      }, goPageDown: function(e) {
         return e.moveV(1, "page")
      }, goCharLeft: function(e) {
         return e.moveH(-1, "char")
      }, goCharRight: function(e) {
         return e.moveH(1, "char")
      }, goColumnLeft: function(e) {
         return e.moveH(-1, "column")
      }, goColumnRight: function(e) {
         return e.moveH(1, "column")
      }, goWordLeft: function(e) {
         return e.moveH(-1, "word")
      }, goGroupRight: function(e) {
         return e.moveH(1, "group")
      }, goGroupLeft: function(e) {
         return e.moveH(-1, "group")
      }, goWordRight: function(e) {
         return e.moveH(1, "word")
      }, delCharBefore: function(e) {
         return e.deleteH(-1, "char")
      }, delCharAfter: function(e) {
         return e.deleteH(1, "char")
      }, delWordBefore: function(e) {
         return e.deleteH(-1, "word")
      }, delWordAfter: function(e) {
         return e.deleteH(1, "word")
      }, delGroupBefore: function(e) {
         return e.deleteH(-1, "group")
      }, delGroupAfter: function(e) {
         return e.deleteH(1, "group")
      }, indentAuto: function(e) {
         return e.indentSelection("smart")
      }, indentMore: function(e) {
         return e.indentSelection("add")
      }, indentLess: function(e) {
         return e.indentSelection("subtract")
      }, insertTab: function(e) {
         return e.replaceSelection("\t")
      }, insertSoftTab: function(e) {
         for (var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0; i < n.length; i++) {
            var o = n[i].from(), a = W(e.getLine(o.line), o.ch, r);
            t.push($(r - a % r))
         }
         e.replaceSelections(t)
      }, defaultTab: function(e) {
         e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab")
      }, transposeChars: function(e) {
         return $r(e, function() {
            for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++) if (t[r].empty()) {
               var i = t[r].head, o = se(e.doc, i.line).text;
               if (o) if (i.ch == o.length && (i = new ge(i.line, i.ch - 1)), i.ch > 0) i = new ge(i.line, i.ch + 1), e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), ge(i.line, i.ch - 2), i, "+transpose"); else if (i.line > e.doc.first) {
                  var a = se(e.doc, i.line - 1).text;
                  a && (i = new ge(i.line, 1), e.replaceRange(o.charAt(0) + e.doc.lineSeparator() + a.charAt(a.length - 1), ge(i.line - 1, a.length - 1), i, "+transpose"))
               }
               n.push(new bi(i, i))
            }
            e.setSelections(n)
         })
      }, newlineAndIndent: function(e) {
         return $r(e, function() {
            for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--) e.replaceRange(e.doc.lineSeparator(), t[n].anchor, t[n].head, "+input");
            t = e.listSelections();
            for (var r = 0; r < t.length; r++) e.indentLine(t[r].from().line, null, !0);
            Mr(e)
         })
      }, openLine: function(e) {
         return e.replaceSelection("\n", "start")
      }, toggleOverwrite: function(e) {
         return e.toggleOverwrite()
      }
   };

   function Zo(e, t) {
      var n = se(e.doc, t), r = Be(n);
      return r != n && (t = fe(r)), Yo(!0, e, r, t, 1)
   }

   function Jo(e, t) {
      var n = Zo(e, t.line), r = se(e.doc, n.line), i = Je(r, e.doc.direction);
      if (!i || 0 == i[0].level) {
         var o = Math.max(0, r.text.search(/\S/)), a = t.line == n.line && t.ch <= o && t.ch;
         return ge(n.line, a ? 0 : o, n.sticky)
      }
      return n
   }

   function ea(e, t, n) {
      if ("string" == typeof t && !(t = Qo[t])) return !1;
      e.display.input.ensurePolled();
      var r = e.display.shift, i = !1;
      try {
         e.isReadOnly() && (e.state.suppressEdits = !0), n && (e.display.shift = !1), i = t(e) != B
      } finally {
         e.display.shift = r, e.state.suppressEdits = !1
      }
      return i
   }

   var ta = new I;

   function na(e, t, n, r) {
      var i = e.state.keySeq;
      if (i) {
         if (jo(t)) return "handled";
         if (/\'$/.test(t) ? e.state.keySeq = null : ta.set(50, function() {
            e.state.keySeq == i && (e.state.keySeq = null, e.display.input.reset())
         }), ra(e, i + " " + t, n, r)) return !0
      }
      return ra(e, t, n, r)
   }

   function ra(e, t, n, r) {
      var i = function(e, t, n) {
         for (var r = 0; r < e.state.keyMaps.length; r++) {
            var i = Bo(t, e.state.keyMaps[r], n, e);
            if (i) return i
         }
         return e.options.extraKeys && Bo(t, e.options.extraKeys, n, e) || Bo(t, e.options.keyMap, n, e)
      }(e, t, r);
      return "multi" == i && (e.state.keySeq = t), "handled" == i && cn(e, "keyHandled", e, t, n), "handled" != i && "multi" != i || (ct(n), mr(e)), !!i
   }

   function ia(e, t) {
      var n = Vo(t, !0);
      return !!n && (t.shiftKey && !e.state.keySeq ? na(e, "Shift-" + n, t, function(t) {
         return ea(e, t, !0)
      }) || na(e, n, t, function(t) {
         if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) return ea(e, t)
      }) : na(e, n, t, function(t) {
         return ea(e, t)
      }))
   }

   var oa = null;

   function aa(e) {
      var t = this;
      if (t.curOp.focus = z(), !ot(t, e)) {
         a && l < 11 && 27 == e.keyCode && (e.returnValue = !1);
         var n = e.keyCode;
         t.display.shift = 16 == n || e.shiftKey;
         var r = ia(t, e);
         d && (oa = r ? n : null, !r && 88 == n && !Ct && (y ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")), 18 != n || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || function(e) {
            var t = e.display.lineDiv;

            function n(e) {
               18 != e.keyCode && e.altKey || (L(t, "CodeMirror-crosshair"), rt(document, "keyup", n), rt(document, "mouseover", n))
            }

            F(t, "CodeMirror-crosshair"), tt(document, "keyup", n), tt(document, "mouseover", n)
         }(t)
      }
   }

   function la(e) {
      16 == e.keyCode && (this.doc.sel.shift = !1), ot(this, e)
   }

   function sa(e) {
      var t = this;
      if (!(Cn(t.display, e) || ot(t, e) || e.ctrlKey && !e.altKey || y && e.metaKey)) {
         var n = e.keyCode, r = e.charCode;
         if (d && n == oa) return oa = null, void ct(e);
         if (!d || e.which && !(e.which < 10) || !ia(t, e)) {
            var i = String.fromCharCode(null == r ? n : r);
            "\b" != i && (function(e, t, n) {
               return na(e, "'" + n + "'", t, function(t) {
                  return ea(e, t, !0)
               })
            }(t, e, i) || t.display.input.onKeyPress(e))
         }
      }
   }

   var ca, ua, da = function(e, t, n) {
      this.time = e, this.pos = t, this.button = n
   };

   function fa(e) {
      var t = this, n = t.display;
      if (!(ot(t, e) || n.activeTouch && n.input.supportsTouch())) if (n.input.ensurePolled(), n.shift = e.shiftKey, Cn(n, e)) s || (n.scroller.draggable = !1, setTimeout(function() {
         return n.scroller.draggable = !0
      }, 100)); else if (!ma(t, e)) {
         var r = sr(t, e), i = pt(e), o = r ? function(e, t) {
            var n = +new Date;
            return ua && ua.compare(n, e, t) ? (ca = ua = null, "triple") : ca && ca.compare(n, e, t) ? (ua = new da(n, e, t), ca = null, "double") : (ca = new da(n, e, t), ua = null, "single")
         }(r, i) : "single";
         window.focus(), 1 == i && t.state.selectingText && t.state.selectingText(e), r && function(e, t, n, r, i) {
            var o = "Click";
            "double" == r ? o = "Double" + o : "triple" == r && (o = "Triple" + o);
            return na(e, Uo(o = (1 == t ? "Left" : 2 == t ? "Middle" : "Right") + o, i), i, function(t) {
               if ("string" == typeof t && (t = Qo[t]), !t) return !1;
               var r = !1;
               try {
                  e.isReadOnly() && (e.state.suppressEdits = !0), r = t(e, n) != B
               } finally {
                  e.state.suppressEdits = !1
               }
               return r
            })
         }(t, i, r, o, e) || (1 == i ? r ? function(e, t, n, r) {
            a ? setTimeout(E(gr, e), 0) : e.curOp.focus = z();
            var i, o = function(e, t, n) {
               var r = e.getOption("configureMouse"), i = r ? r(e, t, n) : {};
               if (null == i.unit) {
                  var o = b ? n.shiftKey && n.metaKey : n.altKey;
                  i.unit = o ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line"
               }
               (null == i.extend || e.doc.extend) && (i.extend = e.doc.extend || n.shiftKey);
               null == i.addNew && (i.addNew = y ? n.metaKey : n.ctrlKey);
               null == i.moveOnDrag && (i.moveOnDrag = !(y ? n.altKey : n.ctrlKey));
               return i
            }(e, n, r), c = e.doc.sel;
            e.options.dragDrop && vt && !e.isReadOnly() && "single" == n && (i = c.contains(t)) > -1 && (ve((i = c.ranges[i]).from(), t) < 0 || t.xRel > 0) && (ve(i.to(), t) > 0 || t.xRel < 0) ? function(e, t, n, r) {
               var i = e.display, o = !1, c = Xr(e, function(t) {
                  s && (i.scroller.draggable = !1), e.state.draggingText = !1, rt(i.wrapper.ownerDocument, "mouseup", c), rt(i.wrapper.ownerDocument, "mousemove", u), rt(i.scroller, "dragstart", d), rt(i.scroller, "drop", c), o || (ct(t), r.addNew || Ui(e.doc, n, null, null, r.extend), s || a && 9 == l ? setTimeout(function() {
                     i.wrapper.ownerDocument.body.focus(), i.input.focus()
                  }, 20) : i.input.focus())
               }), u = function(e) {
                  o = o || Math.abs(t.clientX - e.clientX) + Math.abs(t.clientY - e.clientY) >= 10
               }, d = function() {
                  return o = !0
               };
               s && (i.scroller.draggable = !0);
               e.state.draggingText = c, c.copy = !r.moveOnDrag, i.scroller.dragDrop && i.scroller.dragDrop();
               tt(i.wrapper.ownerDocument, "mouseup", c), tt(i.wrapper.ownerDocument, "mousemove", u), tt(i.scroller, "dragstart", d), tt(i.scroller, "drop", c), vr(e), setTimeout(function() {
                  return i.input.focus()
               }, 20)
            }(e, r, t, o) : function(e, t, n, r) {
               var i = e.display, o = e.doc;
               ct(t);
               var a, l, s = o.sel, c = s.ranges;
               r.addNew && !r.extend ? (l = o.sel.contains(n), a = l > -1 ? c[l] : new bi(n, n)) : (a = o.sel.primary(), l = o.sel.primIndex);
               if ("rectangle" == r.unit) r.addNew || (a = new bi(n, n)), n = sr(e, t, !0, !0), l = -1; else {
                  var u = ha(e, n, r.unit);
                  a = r.extend ? ji(a, u.anchor, u.head, r.extend) : u
               }
               r.addNew ? -1 == l ? (l = c.length, Xi(o, wi(e, c.concat([a]), l), {
                  scroll: !1,
                  origin: "*mouse"
               })) : c.length > 1 && c[l].empty() && "char" == r.unit && !r.extend ? (Xi(o, wi(e, c.slice(0, l).concat(c.slice(l + 1)), 0), {
                  scroll: !1,
                  origin: "*mouse"
               }), s = o.sel) : Gi(o, l, a, U) : (l = 0, Xi(o, new yi([a], 0), U), s = o.sel);
               var d = n;

               function f(t) {
                  if (0 != ve(d, t)) if (d = t, "rectangle" == r.unit) {
                     for (var i = [], c = e.options.tabSize, u = W(se(o, n.line).text, n.ch, c), f = W(se(o, t.line).text, t.ch, c), h = Math.min(u, f), p = Math.max(u, f), m = Math.min(n.line, t.line), g = Math.min(e.lastLine(), Math.max(n.line, t.line)); m <= g; m++) {
                        var v = se(o, m).text, y = G(v, h, c);
                        h == p ? i.push(new bi(ge(m, y), ge(m, y))) : v.length > y && i.push(new bi(ge(m, y), ge(m, G(v, p, c))))
                     }
                     i.length || i.push(new bi(n, n)), Xi(o, wi(e, s.ranges.slice(0, l).concat(i), l), {
                        origin: "*mouse",
                        scroll: !1
                     }), e.scrollIntoView(t)
                  } else {
                     var b, w = a, x = ha(e, t, r.unit), k = w.anchor;
                     ve(x.anchor, k) > 0 ? (b = x.head, k = xe(w.from(), x.anchor)) : (b = x.anchor, k = we(w.to(), x.head));
                     var C = s.ranges.slice(0);
                     C[l] = function(e, t) {
                        var n = t.anchor, r = t.head, i = se(e.doc, n.line);
                        if (0 == ve(n, r) && n.sticky == r.sticky) return t;
                        var o = Je(i);
                        if (!o) return t;
                        var a = Qe(o, n.ch, n.sticky), l = o[a];
                        if (l.from != n.ch && l.to != n.ch) return t;
                        var s, c = a + (l.from == n.ch == (1 != l.level) ? 0 : 1);
                        if (0 == c || c == o.length) return t;
                        if (r.line != n.line) s = (r.line - n.line) * ("ltr" == e.doc.direction ? 1 : -1) > 0; else {
                           var u = Qe(o, r.ch, r.sticky), d = u - a || (r.ch - n.ch) * (1 == l.level ? -1 : 1);
                           s = u == c - 1 || u == c ? d < 0 : d > 0
                        }
                        var f = o[c + (s ? -1 : 0)], h = s == (1 == f.level), p = h ? f.from : f.to,
                           m = h ? "after" : "before";
                        return n.ch == p && n.sticky == m ? t : new bi(new ge(n.line, p, m), r)
                     }(e, new bi(Ce(o, k), b)), Xi(o, wi(e, C, l), U)
                  }
               }

               var h = i.wrapper.getBoundingClientRect(), p = 0;

               function m(t) {
                  e.state.selectingText = !1, p = 1 / 0, ct(t), i.input.focus(), rt(i.wrapper.ownerDocument, "mousemove", g), rt(i.wrapper.ownerDocument, "mouseup", v), o.history.lastSelOrigin = null
               }

               var g = Xr(e, function(t) {
                  0 !== t.buttons && pt(t) ? function t(n) {
                     var a = ++p;
                     var l = sr(e, n, !0, "rectangle" == r.unit);
                     if (!l) return;
                     if (0 != ve(l, d)) {
                        e.curOp.focus = z(), f(l);
                        var s = kr(i, o);
                        (l.line >= s.to || l.line < s.from) && setTimeout(Xr(e, function() {
                           p == a && t(n)
                        }), 150)
                     } else {
                        var c = n.clientY < h.top ? -20 : n.clientY > h.bottom ? 20 : 0;
                        c && setTimeout(Xr(e, function() {
                           p == a && (i.scroller.scrollTop += c, t(n))
                        }), 50)
                     }
                  }(t) : m(t)
               }), v = Xr(e, m);
               e.state.selectingText = v, tt(i.wrapper.ownerDocument, "mousemove", g), tt(i.wrapper.ownerDocument, "mouseup", v)
            }(e, r, t, o)
         }(t, r, o, e) : ht(e) == n.scroller && ct(e) : 2 == i ? (r && Ui(t.doc, r), setTimeout(function() {
            return n.input.focus()
         }, 20)) : 3 == i && (C ? t.display.input.onContextMenu(e) : vr(t)))
      }
   }

   function ha(e, t, n) {
      if ("char" == n) return new bi(t, t);
      if ("word" == n) return e.findWordAt(t);
      if ("line" == n) return new bi(ge(t.line, 0), Ce(e.doc, ge(t.line + 1, 0)));
      var r = n(e, t);
      return new bi(r.from, r.to)
   }

   function pa(e, t, n, r) {
      var i, o;
      if (t.touches) i = t.touches[0].clientX, o = t.touches[0].clientY; else try {
         i = t.clientX, o = t.clientY
      } catch (t) {
         return !1
      }
      if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
      r && ct(t);
      var a = e.display, l = a.lineDiv.getBoundingClientRect();
      if (o > l.bottom || !lt(e, n)) return dt(t);
      o -= l.top - a.viewOffset;
      for (var s = 0; s < e.options.gutters.length; ++s) {
         var c = a.gutters.childNodes[s];
         if (c && c.getBoundingClientRect().right >= i) return it(e, n, e, he(e.doc, o), e.options.gutters[s], t), dt(t)
      }
   }

   function ma(e, t) {
      return pa(e, t, "gutterClick", !0)
   }

   function ga(e, t) {
      Cn(e.display, t) || function(e, t) {
         if (!lt(e, "gutterContextMenu")) return !1;
         return pa(e, t, "gutterContextMenu", !1)
      }(e, t) || ot(e, t, "contextmenu") || C || e.display.input.onContextMenu(t)
   }

   function va(e) {
      e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), qn(e)
   }

   da.prototype.compare = function(e, t, n) {
      return this.time + 400 > e && 0 == ve(t, this.pos) && n == this.button
   };
   var ya = {
      toString: function() {
         return "CodeMirror.Init"
      }
   }, ba = {}, wa = {};

   function xa(e) {
      di(e), Zr(e), Cr(e)
   }

   function ka(e, t, n) {
      if (!t != !(n && n != ya)) {
         var r = e.display.dragFunctions, i = t ? tt : rt;
         i(e.display.scroller, "dragstart", r.start), i(e.display.scroller, "dragenter", r.enter), i(e.display.scroller, "dragover", r.over), i(e.display.scroller, "dragleave", r.leave), i(e.display.scroller, "drop", r.drop)
      }
   }

   function Ca(e) {
      e.options.lineWrapping ? (F(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (L(e.display.wrapper, "CodeMirror-wrap"), Xe(e)), lr(e), Zr(e), qn(e), setTimeout(function() {
         return Hr(e)
      }, 100)
   }

   function Sa(e, t) {
      var n = this;
      if (!(this instanceof Sa)) return new Sa(e, t);
      this.options = t = t ? H(t) : {}, H(ba, t, !1), fi(t);
      var r = t.value;
      "string" == typeof r ? r = new Mo(r, t.mode, null, t.lineSeparator, t.direction) : t.mode && (r.modeOption = t.mode), this.doc = r;
      var i = new Sa.inputStyles[t.inputStyle](this), o = this.display = new le(e, r, i);
      for (var c in o.wrapper.CodeMirror = this, di(this), va(this), t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), Rr(this), this.state = {
         keyMaps: [],
         overlays: [],
         modeGen: 0,
         overwrite: !1,
         delayingBlurEvent: !1,
         focused: !1,
         suppressEdits: !1,
         pasteIncoming: -1,
         cutIncoming: -1,
         selectingText: !1,
         draggingText: !1,
         highlight: new I,
         keySeq: null,
         specialChars: null
      }, t.autofocus && !v && o.input.focus(), a && l < 11 && setTimeout(function() {
         return n.display.input.reset(!0)
      }, 20), function(e) {
         var t = e.display;
         tt(t.scroller, "mousedown", Xr(e, fa)), tt(t.scroller, "dblclick", a && l < 11 ? Xr(e, function(t) {
            if (!ot(e, t)) {
               var n = sr(e, t);
               if (n && !ma(e, t) && !Cn(e.display, t)) {
                  ct(t);
                  var r = e.findWordAt(n);
                  Ui(e.doc, r.anchor, r.head)
               }
            }
         }) : function(t) {
            return ot(e, t) || ct(t)
         });
         tt(t.scroller, "contextmenu", function(t) {
            return ga(e, t)
         });
         var n, r = {end: 0};

         function i() {
            t.activeTouch && (n = setTimeout(function() {
               return t.activeTouch = null
            }, 1e3), (r = t.activeTouch).end = +new Date)
         }

         function o(e, t) {
            if (null == t.left) return !0;
            var n = t.left - e.left, r = t.top - e.top;
            return n * n + r * r > 400
         }

         tt(t.scroller, "touchstart", function(i) {
            if (!ot(e, i) && !function(e) {
               if (1 != e.touches.length) return !1;
               var t = e.touches[0];
               return t.radiusX <= 1 && t.radiusY <= 1
            }(i) && !ma(e, i)) {
               t.input.ensurePolled(), clearTimeout(n);
               var o = +new Date;
               t.activeTouch = {
                  start: o,
                  moved: !1,
                  prev: o - r.end <= 300 ? r : null
               }, 1 == i.touches.length && (t.activeTouch.left = i.touches[0].pageX, t.activeTouch.top = i.touches[0].pageY)
            }
         }), tt(t.scroller, "touchmove", function() {
            t.activeTouch && (t.activeTouch.moved = !0)
         }), tt(t.scroller, "touchend", function(n) {
            var r = t.activeTouch;
            if (r && !Cn(t, n) && null != r.left && !r.moved && new Date - r.start < 300) {
               var a, l = e.coordsChar(t.activeTouch, "page");
               a = !r.prev || o(r, r.prev) ? new bi(l, l) : !r.prev.prev || o(r, r.prev.prev) ? e.findWordAt(l) : new bi(ge(l.line, 0), Ce(e.doc, ge(l.line + 1, 0))), e.setSelection(a.anchor, a.head), e.focus(), ct(n)
            }
            i()
         }), tt(t.scroller, "touchcancel", i), tt(t.scroller, "scroll", function() {
            t.scroller.clientHeight && (Nr(e, t.scroller.scrollTop), Fr(e, t.scroller.scrollLeft, !0), it(e, "scroll", e))
         }), tt(t.scroller, "mousewheel", function(t) {
            return vi(e, t)
         }), tt(t.scroller, "DOMMouseScroll", function(t) {
            return vi(e, t)
         }), tt(t.wrapper, "scroll", function() {
            return t.wrapper.scrollTop = t.wrapper.scrollLeft = 0
         }), t.dragFunctions = {
            enter: function(t) {
               ot(e, t) || ft(t)
            }, over: function(t) {
               ot(e, t) || (!function(e, t) {
                  var n = sr(e, t);
                  if (n) {
                     var r = document.createDocumentFragment();
                     fr(e, n, r), e.display.dragCursor || (e.display.dragCursor = O("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), _(e.display.dragCursor, r)
                  }
               }(e, t), ft(t))
            }, start: function(t) {
               return function(e, t) {
                  if (a && (!e.state.draggingText || +new Date - _o < 100)) ft(t); else if (!ot(e, t) && !Cn(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !f)) {
                     var n = O("img", null, null, "position: fixed; left: 0; top: 0;");
                     n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", d && (n.width = n.height = 1, e.display.wrapper.appendChild(n), n._top = n.offsetTop), t.dataTransfer.setDragImage(n, 0, 0), d && n.parentNode.removeChild(n)
                  }
               }(e, t)
            }, drop: Xr(e, Oo), leave: function(t) {
               ot(e, t) || Ao(e)
            }
         };
         var s = t.input.getField();
         tt(s, "keyup", function(t) {
            return la.call(e, t)
         }), tt(s, "keydown", Xr(e, aa)), tt(s, "keypress", Xr(e, sa)), tt(s, "focus", function(t) {
            return yr(e, t)
         }), tt(s, "blur", function(t) {
            return br(e, t)
         })
      }(this), Fo(), Br(this), this.curOp.forceUpdate = !0, Ni(this, r), t.autofocus && !v || this.hasFocus() ? setTimeout(E(yr, this), 20) : br(this), wa) wa.hasOwnProperty(c) && wa[c](n, t[c], ya);
      Sr(this), t.finishInit && t.finishInit(this);
      for (var u = 0; u < Ta.length; ++u) Ta[u](n);
      jr(this), s && t.lineWrapping && "optimizelegibility" == getComputedStyle(o.lineDiv).textRendering && (o.lineDiv.style.textRendering = "auto")
   }

   Sa.defaults = ba, Sa.optionHandlers = wa;
   var Ta = [];

   function La(e, t, n, r) {
      var i, o = e.doc;
      null == n && (n = "add"), "smart" == n && (o.mode.indent ? i = It(e, t).state : n = "prev");
      var a = e.options.tabSize, l = se(o, t), s = W(l.text, null, a);
      l.stateAfter && (l.stateAfter = null);
      var c, u = l.text.match(/^\s*/)[0];
      if (r || /\S/.test(l.text)) {
         if ("smart" == n && ((c = o.mode.indent(i, l.text.slice(u.length), l.text)) == B || c > 150)) {
            if (!r) return;
            n = "prev"
         }
      } else c = 0, n = "not";
      "prev" == n ? c = t > o.first ? W(se(o, t - 1).text, null, a) : 0 : "add" == n ? c = s + e.options.indentUnit : "subtract" == n ? c = s - e.options.indentUnit : "number" == typeof n && (c = s + n), c = Math.max(0, c);
      var d = "", f = 0;
      if (e.options.indentWithTabs) for (var h = Math.floor(c / a); h; --h) f += a, d += "\t";
      if (f < c && (d += $(c - f)), d != u) return uo(o, d, ge(t, 0), ge(t, u.length), "+input"), l.stateAfter = null, !0;
      for (var p = 0; p < o.sel.ranges.length; p++) {
         var m = o.sel.ranges[p];
         if (m.head.line == t && m.head.ch < u.length) {
            var g = ge(t, u.length);
            Gi(o, p, new bi(g, g));
            break
         }
      }
   }

   Sa.defineInitHook = function(e) {
      return Ta.push(e)
   };
   var Ma = null;

   function _a(e) {
      Ma = e
   }

   function Oa(e, t, n, r, i) {
      var o = e.doc;
      e.display.shift = !1, r || (r = o.sel);
      var a = +new Date - 200, l = "paste" == i || e.state.pasteIncoming > a, s = xt(t), c = null;
      if (l && r.ranges.length > 1) if (Ma && Ma.text.join("\n") == t) {
         if (r.ranges.length % Ma.text.length == 0) {
            c = [];
            for (var u = 0; u < Ma.text.length; u++) c.push(o.splitLines(Ma.text[u]))
         }
      } else s.length == r.ranges.length && e.options.pasteLinesPerSelection && (c = Y(s, function(e) {
         return [e]
      }));
      for (var d = e.curOp.updateInput, f = r.ranges.length - 1; f >= 0; f--) {
         var h = r.ranges[f], p = h.from(), m = h.to();
         h.empty() && (n && n > 0 ? p = ge(p.line, p.ch - n) : e.state.overwrite && !l ? m = ge(m.line, Math.min(se(o, m.line).text.length, m.ch + X(s).length)) : l && Ma && Ma.lineWise && Ma.text.join("\n") == t && (p = m = ge(p.line, 0)));
         var g = {
            from: p,
            to: m,
            text: c ? c[f % c.length] : s,
            origin: i || (l ? "paste" : e.state.cutIncoming > a ? "cut" : "+input")
         };
         oo(e.doc, g), cn(e, "inputRead", e, g)
      }
      t && !l && Na(e, t), Mr(e), e.curOp.updateInput < 2 && (e.curOp.updateInput = d), e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = -1
   }

   function Aa(e, t) {
      var n = e.clipboardData && e.clipboardData.getData("Text");
      if (n) return e.preventDefault(), t.isReadOnly() || t.options.disableInput || $r(t, function() {
         return Oa(t, n, 0, null, "paste")
      }), !0
   }

   function Na(e, t) {
      if (e.options.electricChars && e.options.smartIndent) for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
         var i = n.ranges[r];
         if (!(i.head.ch > 100 || r && n.ranges[r - 1].head.line == i.head.line)) {
            var o = e.getModeAt(i.head), a = !1;
            if (o.electricChars) {
               for (var l = 0; l < o.electricChars.length; l++) if (t.indexOf(o.electricChars.charAt(l)) > -1) {
                  a = La(e, i.head.line, "smart");
                  break
               }
            } else o.electricInput && o.electricInput.test(se(e.doc, i.head.line).text.slice(0, i.head.ch)) && (a = La(e, i.head.line, "smart"));
            a && cn(e, "electricInput", e, i.head.line)
         }
      }
   }

   function za(e) {
      for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
         var i = e.doc.sel.ranges[r].head.line, o = {anchor: ge(i, 0), head: ge(i + 1, 0)};
         n.push(o), t.push(e.getRange(o.anchor, o.head))
      }
      return {text: t, ranges: n}
   }

   function Fa(e, t, n, r) {
      e.setAttribute("autocorrect", !!n), e.setAttribute("autocapitalize", !!r), e.setAttribute("spellcheck", !!t)
   }

   function Pa() {
      var e = O("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
         t = O("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
      return s ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), m && (e.style.border = "1px solid black"), Fa(e), t
   }

   function Da(e, t, n, r, i) {
      var o = t, a = n, l = se(e, t.line);

      function s(r) {
         var o, a;
         if (null == (o = i ? function(e, t, n, r) {
            var i = Je(t, e.doc.direction);
            if (!i) return Xo(t, n, r);
            n.ch >= t.text.length ? (n.ch = t.text.length, n.sticky = "before") : n.ch <= 0 && (n.ch = 0, n.sticky = "after");
            var o = Qe(i, n.ch, n.sticky), a = i[o];
            if ("ltr" == e.doc.direction && a.level % 2 == 0 && (r > 0 ? a.to > n.ch : a.from < n.ch)) return Xo(t, n, r);
            var l, s = function(e, n) {
               return $o(t, e instanceof ge ? e.ch : e, n)
            }, c = function(n) {
               return e.options.lineWrapping ? (l = l || Fn(e, t), Jn(e, t, l, n)) : {begin: 0, end: t.text.length}
            }, u = c("before" == n.sticky ? s(n, -1) : n.ch);
            if ("rtl" == e.doc.direction || 1 == a.level) {
               var d = 1 == a.level == r < 0, f = s(n, d ? 1 : -1);
               if (null != f && (d ? f <= a.to && f <= u.end : f >= a.from && f >= u.begin)) {
                  var h = d ? "before" : "after";
                  return new ge(n.line, f, h)
               }
            }
            var p = function(e, t, r) {
               for (var o = function(e, t) {
                  return t ? new ge(n.line, s(e, 1), "before") : new ge(n.line, e, "after")
               }; e >= 0 && e < i.length; e += t) {
                  var a = i[e], l = t > 0 == (1 != a.level), c = l ? r.begin : s(r.end, -1);
                  if (a.from <= c && c < a.to) return o(c, l);
                  if (c = l ? a.from : s(a.to, -1), r.begin <= c && c < r.end) return o(c, l)
               }
            }, m = p(o + r, r, u);
            if (m) return m;
            var g = r > 0 ? u.end : s(u.begin, -1);
            return null == g || r > 0 && g == t.text.length || !(m = p(r > 0 ? 0 : i.length - 1, r, c(g))) ? null : m
         }(e.cm, l, t, n) : Xo(l, t, n))) {
            if (r || (a = t.line + n) < e.first || a >= e.first + e.size || (t = new ge(a, t.ch, t.sticky), !(l = se(e, a)))) return !1;
            t = Yo(i, e.cm, l, t.line, n)
         } else t = o;
         return !0
      }

      if ("char" == r) s(); else if ("column" == r) s(!0); else if ("word" == r || "group" == r) for (var c = null, u = "group" == r, d = e.cm && e.cm.getHelper(t, "wordChars"), f = !0; !(n < 0) || s(!f); f = !1) {
         var h = l.text.charAt(t.ch) || "\n",
            p = te(h, d) ? "w" : u && "\n" == h ? "n" : !u || /\s/.test(h) ? null : "p";
         if (!u || f || p || (p = "s"), c && c != p) {
            n < 0 && (n = 1, s(), t.sticky = "after");
            break
         }
         if (p && (c = p), n > 0 && !s(!f)) break
      }
      var m = to(e, t, o, a, !0);
      return ye(o, m) && (m.hitSide = !0), m
   }

   function Ea(e, t, n, r) {
      var i, o, a = e.doc, l = t.left;
      if ("page" == r) {
         var s = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
            c = Math.max(s - .5 * nr(e.display), 3);
         i = (n > 0 ? t.bottom : t.top) + n * c
      } else "line" == r && (i = n > 0 ? t.bottom + 3 : t.top - 3);
      for (; (o = Qn(e, l, i)).outside;) {
         if (n < 0 ? i <= 0 : i >= a.height) {
            o.hitSide = !0;
            break
         }
         i += 5 * n
      }
      return o
   }

   var Ha = function(e) {
      this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new I, this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null
   };

   function Wa(e, t) {
      var n = zn(e, t.line);
      if (!n || n.hidden) return null;
      var r = se(e.doc, t.line), i = An(n, r, t.line), o = Je(r, e.doc.direction), a = "left";
      o && (a = Qe(o, t.ch) % 2 ? "right" : "left");
      var l = Hn(i.map, t.ch, a);
      return l.offset = "right" == l.collapse ? l.end : l.start, l
   }

   function Ia(e, t) {
      return t && (e.bad = !0), e
   }

   function Ra(e, t, n) {
      var r;
      if (t == e.display.lineDiv) {
         if (!(r = e.display.lineDiv.childNodes[n])) return Ia(e.clipPos(ge(e.display.viewTo - 1)), !0);
         t = null, n = 0
      } else for (r = t; ; r = r.parentNode) {
         if (!r || r == e.display.lineDiv) return null;
         if (r.parentNode && r.parentNode == e.display.lineDiv) break
      }
      for (var i = 0; i < e.display.view.length; i++) {
         var o = e.display.view[i];
         if (o.node == r) return qa(o, t, n)
      }
   }

   function qa(e, t, n) {
      var r = e.text.firstChild, i = !1;
      if (!t || !N(r, t)) return Ia(ge(fe(e.line), 0), !0);
      if (t == r && (i = !0, t = r.childNodes[n], n = 0, !t)) {
         var o = e.rest ? X(e.rest) : e.line;
         return Ia(ge(fe(o), o.text.length), i)
      }
      var a = 3 == t.nodeType ? t : null, l = t;
      for (a || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (a = t.firstChild, n && (n = a.nodeValue.length)); l.parentNode != r;) l = l.parentNode;
      var s = e.measure, c = s.maps;

      function u(t, n, r) {
         for (var i = -1; i < (c ? c.length : 0); i++) for (var o = i < 0 ? s.map : c[i], a = 0; a < o.length; a += 3) {
            var l = o[a + 2];
            if (l == t || l == n) {
               var u = fe(i < 0 ? e.line : e.rest[i]), d = o[a] + r;
               return (r < 0 || l != t) && (d = o[a + (r ? 1 : 0)]), ge(u, d)
            }
         }
      }

      var d = u(a, l, n);
      if (d) return Ia(d, i);
      for (var f = l.nextSibling, h = a ? a.nodeValue.length - n : 0; f; f = f.nextSibling) {
         if (d = u(f, f.firstChild, 0)) return Ia(ge(d.line, d.ch - h), i);
         h += f.textContent.length
      }
      for (var p = l.previousSibling, m = n; p; p = p.previousSibling) {
         if (d = u(p, p.firstChild, -1)) return Ia(ge(d.line, d.ch + m), i);
         m += p.textContent.length
      }
   }

   Ha.prototype.init = function(e) {
      var t = this, n = this, r = n.cm, i = n.div = e.lineDiv;

      function o(e) {
         if (!ot(r, e)) {
            if (r.somethingSelected()) _a({
               lineWise: !1,
               text: r.getSelections()
            }), "cut" == e.type && r.replaceSelection("", null, "cut"); else {
               if (!r.options.lineWiseCopyCut) return;
               var t = za(r);
               _a({lineWise: !0, text: t.text}), "cut" == e.type && r.operation(function() {
                  r.setSelections(t.ranges, 0, j), r.replaceSelection("", null, "cut")
               })
            }
            if (e.clipboardData) {
               e.clipboardData.clearData();
               var o = Ma.text.join("\n");
               if (e.clipboardData.setData("Text", o), e.clipboardData.getData("Text") == o) return void e.preventDefault()
            }
            var a = Pa(), l = a.firstChild;
            r.display.lineSpace.insertBefore(a, r.display.lineSpace.firstChild), l.value = Ma.text.join("\n");
            var s = document.activeElement;
            D(l), setTimeout(function() {
               r.display.lineSpace.removeChild(a), s.focus(), s == i && n.showPrimarySelection()
            }, 50)
         }
      }

      Fa(i, r.options.spellcheck, r.options.autocorrect, r.options.autocapitalize), tt(i, "paste", function(e) {
         ot(r, e) || Aa(e, r) || l <= 11 && setTimeout(Xr(r, function() {
            return t.updateFromDOM()
         }), 20)
      }), tt(i, "compositionstart", function(e) {
         t.composing = {data: e.data, done: !1}
      }), tt(i, "compositionupdate", function(e) {
         t.composing || (t.composing = {data: e.data, done: !1})
      }), tt(i, "compositionend", function(e) {
         t.composing && (e.data != t.composing.data && t.readFromDOMSoon(), t.composing.done = !0)
      }), tt(i, "touchstart", function() {
         return n.forceCompositionEnd()
      }), tt(i, "input", function() {
         t.composing || t.readFromDOMSoon()
      }), tt(i, "copy", o), tt(i, "cut", o)
   }, Ha.prototype.prepareSelection = function() {
      var e = dr(this.cm, !1);
      return e.focus = this.cm.state.focused, e
   }, Ha.prototype.showSelection = function(e, t) {
      e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e))
   }, Ha.prototype.getSelection = function() {
      return this.cm.display.wrapper.ownerDocument.getSelection()
   }, Ha.prototype.showPrimarySelection = function() {
      var e = this.getSelection(), t = this.cm, r = t.doc.sel.primary(), i = r.from(), o = r.to();
      if (t.display.viewTo == t.display.viewFrom || i.line >= t.display.viewTo || o.line < t.display.viewFrom) e.removeAllRanges(); else {
         var a = Ra(t, e.anchorNode, e.anchorOffset), l = Ra(t, e.focusNode, e.focusOffset);
         if (!a || a.bad || !l || l.bad || 0 != ve(xe(a, l), i) || 0 != ve(we(a, l), o)) {
            var s = t.display.view,
               c = i.line >= t.display.viewFrom && Wa(t, i) || {node: s[0].measure.map[2], offset: 0},
               u = o.line < t.display.viewTo && Wa(t, o);
            if (!u) {
               var d = s[s.length - 1].measure, f = d.maps ? d.maps[d.maps.length - 1] : d.map;
               u = {node: f[f.length - 1], offset: f[f.length - 2] - f[f.length - 3]}
            }
            if (c && u) {
               var h, p = e.rangeCount && e.getRangeAt(0);
               try {
                  h = T(c.node, c.offset, u.offset, u.node)
               } catch (e) {
               }
               h && (!n && t.state.focused ? (e.collapse(c.node, c.offset), h.collapsed || (e.removeAllRanges(), e.addRange(h))) : (e.removeAllRanges(), e.addRange(h)), p && null == e.anchorNode ? e.addRange(p) : n && this.startGracePeriod()), this.rememberSelection()
            } else e.removeAllRanges()
         }
      }
   }, Ha.prototype.startGracePeriod = function() {
      var e = this;
      clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function() {
         e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function() {
            return e.cm.curOp.selectionChanged = !0
         })
      }, 20)
   }, Ha.prototype.showMultipleSelections = function(e) {
      _(this.cm.display.cursorDiv, e.cursors), _(this.cm.display.selectionDiv, e.selection)
   }, Ha.prototype.rememberSelection = function() {
      var e = this.getSelection();
      this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset
   }, Ha.prototype.selectionInEditor = function() {
      var e = this.getSelection();
      if (!e.rangeCount) return !1;
      var t = e.getRangeAt(0).commonAncestorContainer;
      return N(this.div, t)
   }, Ha.prototype.focus = function() {
      "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() || this.showSelection(this.prepareSelection(), !0), this.div.focus())
   }, Ha.prototype.blur = function() {
      this.div.blur()
   }, Ha.prototype.getField = function() {
      return this.div
   }, Ha.prototype.supportsTouch = function() {
      return !0
   }, Ha.prototype.receivedFocus = function() {
      var e = this;
      this.selectionInEditor() ? this.pollSelection() : $r(this.cm, function() {
         return e.cm.curOp.selectionChanged = !0
      }), this.polling.set(this.cm.options.pollInterval, function t() {
         e.cm.state.focused && (e.pollSelection(), e.polling.set(e.cm.options.pollInterval, t))
      })
   }, Ha.prototype.selectionChanged = function() {
      var e = this.getSelection();
      return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset
   }, Ha.prototype.pollSelection = function() {
      if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
         var e = this.getSelection(), t = this.cm;
         if (g && u && this.cm.options.gutters.length && function(e) {
            for (var t = e; t; t = t.parentNode) if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
            return !1
         }(e.anchorNode)) return this.cm.triggerOnKeyDown({
            type: "keydown",
            keyCode: 8,
            preventDefault: Math.abs
         }), this.blur(), void this.focus();
         if (!this.composing) {
            this.rememberSelection();
            var n = Ra(t, e.anchorNode, e.anchorOffset), r = Ra(t, e.focusNode, e.focusOffset);
            n && r && $r(t, function() {
               Xi(t.doc, xi(n, r), j), (n.bad || r.bad) && (t.curOp.selectionChanged = !0)
            })
         }
      }
   }, Ha.prototype.pollContent = function() {
      null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
      var e, t, n, r = this.cm, i = r.display, o = r.doc.sel.primary(), a = o.from(), l = o.to();
      if (0 == a.ch && a.line > r.firstLine() && (a = ge(a.line - 1, se(r.doc, a.line - 1).length)), l.ch == se(r.doc, l.line).text.length && l.line < r.lastLine() && (l = ge(l.line + 1, 0)), a.line < i.viewFrom || l.line > i.viewTo - 1) return !1;
      a.line == i.viewFrom || 0 == (e = cr(r, a.line)) ? (t = fe(i.view[0].line), n = i.view[0].node) : (t = fe(i.view[e].line), n = i.view[e - 1].node.nextSibling);
      var s, c, u = cr(r, l.line);
      if (u == i.view.length - 1 ? (s = i.viewTo - 1, c = i.lineDiv.lastChild) : (s = fe(i.view[u + 1].line) - 1, c = i.view[u + 1].node.previousSibling), !n) return !1;
      for (var d = r.doc.splitLines(function(e, t, n, r, i) {
         var o = "", a = !1, l = e.doc.lineSeparator(), s = !1;

         function c() {
            a && (o += l, s && (o += l), a = s = !1)
         }

         function u(e) {
            e && (c(), o += e)
         }

         function d(t) {
            if (1 == t.nodeType) {
               var n = t.getAttribute("cm-text");
               if (n) return void u(n);
               var o, f = t.getAttribute("cm-marker");
               if (f) {
                  var h = e.findMarks(ge(r, 0), ge(i + 1, 0), (g = +f, function(e) {
                     return e.id == g
                  }));
                  return void (h.length && (o = h[0].find(0)) && u(ce(e.doc, o.from, o.to).join(l)))
               }
               if ("false" == t.getAttribute("contenteditable")) return;
               var p = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
               if (!/^br$/i.test(t.nodeName) && 0 == t.textContent.length) return;
               p && c();
               for (var m = 0; m < t.childNodes.length; m++) d(t.childNodes[m]);
               /^(pre|p)$/i.test(t.nodeName) && (s = !0), p && (a = !0)
            } else 3 == t.nodeType && u(t.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
            var g
         }

         for (; d(t), t != n;) t = t.nextSibling, s = !1;
         return o
      }(r, n, c, t, s)), f = ce(r.doc, ge(t, 0), ge(s, se(r.doc, s).text.length)); d.length > 1 && f.length > 1;) if (X(d) == X(f)) d.pop(), f.pop(), s--; else {
         if (d[0] != f[0]) break;
         d.shift(), f.shift(), t++
      }
      for (var h = 0, p = 0, m = d[0], g = f[0], v = Math.min(m.length, g.length); h < v && m.charCodeAt(h) == g.charCodeAt(h);) ++h;
      for (var y = X(d), b = X(f), w = Math.min(y.length - (1 == d.length ? h : 0), b.length - (1 == f.length ? h : 0)); p < w && y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1);) ++p;
      if (1 == d.length && 1 == f.length && t == a.line) for (; h && h > a.ch && y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1);) h--, p++;
      d[d.length - 1] = y.slice(0, y.length - p).replace(/^\u200b+/, ""), d[0] = d[0].slice(h).replace(/\u200b+$/, "");
      var x = ge(t, h), k = ge(s, f.length ? X(f).length - p : 0);
      return d.length > 1 || d[0] || ve(x, k) ? (uo(r.doc, d, x, k, "+input"), !0) : void 0
   }, Ha.prototype.ensurePolled = function() {
      this.forceCompositionEnd()
   }, Ha.prototype.reset = function() {
      this.forceCompositionEnd()
   }, Ha.prototype.forceCompositionEnd = function() {
      this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus())
   }, Ha.prototype.readFromDOMSoon = function() {
      var e = this;
      null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout(function() {
         if (e.readDOMTimeout = null, e.composing) {
            if (!e.composing.done) return;
            e.composing = null
         }
         e.updateFromDOM()
      }, 80))
   }, Ha.prototype.updateFromDOM = function() {
      var e = this;
      !this.cm.isReadOnly() && this.pollContent() || $r(this.cm, function() {
         return Zr(e.cm)
      })
   }, Ha.prototype.setUneditable = function(e) {
      e.contentEditable = "false"
   }, Ha.prototype.onKeyPress = function(e) {
      0 == e.charCode || this.composing || (e.preventDefault(), this.cm.isReadOnly() || Xr(this.cm, Oa)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0))
   }, Ha.prototype.readOnlyChanged = function(e) {
      this.div.contentEditable = String("nocursor" != e)
   }, Ha.prototype.onContextMenu = function() {
   }, Ha.prototype.resetPosition = function() {
   }, Ha.prototype.needsContentAttribute = !0;
   var Ba = function(e) {
      this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new I, this.hasSelection = !1, this.composing = null
   };
   Ba.prototype.init = function(e) {
      var t = this, n = this, r = this.cm;
      this.createField(e);
      var i = this.textarea;

      function o(e) {
         if (!ot(r, e)) {
            if (r.somethingSelected()) _a({lineWise: !1, text: r.getSelections()}); else {
               if (!r.options.lineWiseCopyCut) return;
               var t = za(r);
               _a({
                  lineWise: !0,
                  text: t.text
               }), "cut" == e.type ? r.setSelections(t.ranges, null, j) : (n.prevInput = "", i.value = t.text.join("\n"), D(i))
            }
            "cut" == e.type && (r.state.cutIncoming = +new Date)
         }
      }

      e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild), m && (i.style.width = "0px"), tt(i, "input", function() {
         a && l >= 9 && t.hasSelection && (t.hasSelection = null), n.poll()
      }), tt(i, "paste", function(e) {
         ot(r, e) || Aa(e, r) || (r.state.pasteIncoming = +new Date, n.fastPoll())
      }), tt(i, "cut", o), tt(i, "copy", o), tt(e.scroller, "paste", function(t) {
         if (!Cn(e, t) && !ot(r, t)) {
            if (!i.dispatchEvent) return r.state.pasteIncoming = +new Date, void n.focus();
            var o = new Event("paste");
            o.clipboardData = t.clipboardData, i.dispatchEvent(o)
         }
      }), tt(e.lineSpace, "selectstart", function(t) {
         Cn(e, t) || ct(t)
      }), tt(i, "compositionstart", function() {
         var e = r.getCursor("from");
         n.composing && n.composing.range.clear(), n.composing = {
            start: e,
            range: r.markText(e, r.getCursor("to"), {className: "CodeMirror-composing"})
         }
      }), tt(i, "compositionend", function() {
         n.composing && (n.poll(), n.composing.range.clear(), n.composing = null)
      })
   }, Ba.prototype.createField = function(e) {
      this.wrapper = Pa(), this.textarea = this.wrapper.firstChild
   }, Ba.prototype.prepareSelection = function() {
      var e = this.cm, t = e.display, n = e.doc, r = dr(e);
      if (e.options.moveInputWithCursor) {
         var i = $n(e, n.sel.primary().head, "div"), o = t.wrapper.getBoundingClientRect(),
            a = t.lineDiv.getBoundingClientRect();
         r.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + a.top - o.top)), r.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + a.left - o.left))
      }
      return r
   }, Ba.prototype.showSelection = function(e) {
      var t = this.cm.display;
      _(t.cursorDiv, e.cursors), _(t.selectionDiv, e.selection), null != e.teTop && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px")
   }, Ba.prototype.reset = function(e) {
      if (!this.contextMenuPending && !this.composing) {
         var t = this.cm;
         if (t.somethingSelected()) {
            this.prevInput = "";
            var n = t.getSelection();
            this.textarea.value = n, t.state.focused && D(this.textarea), a && l >= 9 && (this.hasSelection = n)
         } else e || (this.prevInput = this.textarea.value = "", a && l >= 9 && (this.hasSelection = null))
      }
   }, Ba.prototype.getField = function() {
      return this.textarea
   }, Ba.prototype.supportsTouch = function() {
      return !1
   }, Ba.prototype.focus = function() {
      if ("nocursor" != this.cm.options.readOnly && (!v || z() != this.textarea)) try {
         this.textarea.focus()
      } catch (e) {
      }
   }, Ba.prototype.blur = function() {
      this.textarea.blur()
   }, Ba.prototype.resetPosition = function() {
      this.wrapper.style.top = this.wrapper.style.left = 0
   }, Ba.prototype.receivedFocus = function() {
      this.slowPoll()
   }, Ba.prototype.slowPoll = function() {
      var e = this;
      this.pollingFast || this.polling.set(this.cm.options.pollInterval, function() {
         e.poll(), e.cm.state.focused && e.slowPoll()
      })
   }, Ba.prototype.fastPoll = function() {
      var e = !1, t = this;
      t.pollingFast = !0, t.polling.set(20, function n() {
         t.poll() || e ? (t.pollingFast = !1, t.slowPoll()) : (e = !0, t.polling.set(60, n))
      })
   }, Ba.prototype.poll = function() {
      var e = this, t = this.cm, n = this.textarea, r = this.prevInput;
      if (this.contextMenuPending || !t.state.focused || kt(n) && !r && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq) return !1;
      var i = n.value;
      if (i == r && !t.somethingSelected()) return !1;
      if (a && l >= 9 && this.hasSelection === i || y && /[\uf700-\uf7ff]/.test(i)) return t.display.input.reset(), !1;
      if (t.doc.sel == t.display.selForContextMenu) {
         var o = i.charCodeAt(0);
         if (8203 != o || r || (r = "​"), 8666 == o) return this.reset(), this.cm.execCommand("undo")
      }
      for (var s = 0, c = Math.min(r.length, i.length); s < c && r.charCodeAt(s) == i.charCodeAt(s);) ++s;
      return $r(t, function() {
         Oa(t, i.slice(s), r.length - s, null, e.composing ? "*compose" : null), i.length > 1e3 || i.indexOf("\n") > -1 ? n.value = e.prevInput = "" : e.prevInput = i, e.composing && (e.composing.range.clear(), e.composing.range = t.markText(e.composing.start, t.getCursor("to"), {className: "CodeMirror-composing"}))
      }), !0
   }, Ba.prototype.ensurePolled = function() {
      this.pollingFast && this.poll() && (this.pollingFast = !1)
   }, Ba.prototype.onKeyPress = function() {
      a && l >= 9 && (this.hasSelection = null), this.fastPoll()
   }, Ba.prototype.onContextMenu = function(e) {
      var t = this, n = t.cm, r = n.display, i = t.textarea;
      t.contextMenuPending && t.contextMenuPending();
      var o = sr(n, e), c = r.scroller.scrollTop;
      if (o && !d) {
         n.options.resetSelectionOnContextMenu && -1 == n.doc.sel.contains(o) && Xr(n, Xi)(n.doc, xi(o), j);
         var u, f = i.style.cssText, h = t.wrapper.style.cssText, p = t.wrapper.offsetParent.getBoundingClientRect();
         if (t.wrapper.style.cssText = "position: static", i.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - p.top - 5) + "px; left: " + (e.clientX - p.left - 5) + "px;\n      z-index: 1000; background: " + (a ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", s && (u = window.scrollY), r.input.focus(), s && window.scrollTo(null, u), r.input.reset(), n.somethingSelected() || (i.value = t.prevInput = " "), t.contextMenuPending = v, r.selForContextMenu = n.doc.sel, clearTimeout(r.detectingSelectAll), a && l >= 9 && g(), C) {
            ft(e);
            var m = function() {
               rt(window, "mouseup", m), setTimeout(v, 20)
            };
            tt(window, "mouseup", m)
         } else setTimeout(v, 50)
      }

      function g() {
         if (null != i.selectionStart) {
            var e = n.somethingSelected(), o = "​" + (e ? i.value : "");
            i.value = "⇚", i.value = o, t.prevInput = e ? "" : "​", i.selectionStart = 1, i.selectionEnd = o.length, r.selForContextMenu = n.doc.sel
         }
      }

      function v() {
         if (t.contextMenuPending == v && (t.contextMenuPending = !1, t.wrapper.style.cssText = h, i.style.cssText = f, a && l < 9 && r.scrollbars.setScrollTop(r.scroller.scrollTop = c), null != i.selectionStart)) {
            (!a || a && l < 9) && g();
            var e = 0, o = function() {
               r.selForContextMenu == n.doc.sel && 0 == i.selectionStart && i.selectionEnd > 0 && "​" == t.prevInput ? Xr(n, ro)(n) : e++ < 10 ? r.detectingSelectAll = setTimeout(o, 500) : (r.selForContextMenu = null, r.input.reset())
            };
            r.detectingSelectAll = setTimeout(o, 200)
         }
      }
   }, Ba.prototype.readOnlyChanged = function(e) {
      e || this.reset(), this.textarea.disabled = "nocursor" == e
   }, Ba.prototype.setUneditable = function() {
   }, Ba.prototype.needsContentAttribute = !1, function(e) {
      var t = e.optionHandlers;

      function n(n, r, i, o) {
         e.defaults[n] = r, i && (t[n] = o ? function(e, t, n) {
            n != ya && i(e, t, n)
         } : i)
      }

      e.defineOption = n, e.Init = ya, n("value", "", function(e, t) {
         return e.setValue(t)
      }, !0), n("mode", null, function(e, t) {
         e.doc.modeOption = t, Li(e)
      }, !0), n("indentUnit", 2, Li, !0), n("indentWithTabs", !1), n("smartIndent", !0), n("tabSize", 4, function(e) {
         Mi(e), qn(e), Zr(e)
      }, !0), n("lineSeparator", null, function(e, t) {
         if (e.doc.lineSep = t, t) {
            var n = [], r = e.doc.first;
            e.doc.iter(function(e) {
               for (var i = 0; ;) {
                  var o = e.text.indexOf(t, i);
                  if (-1 == o) break;
                  i = o + t.length, n.push(ge(r, o))
               }
               r++
            });
            for (var i = n.length - 1; i >= 0; i--) uo(e.doc, t, n[i], ge(n[i].line, n[i].ch + t.length))
         }
      }), n("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g, function(e, t, n) {
         e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g"), n != ya && e.refresh()
      }), n("specialCharPlaceholder", Jt, function(e) {
         return e.refresh()
      }, !0), n("electricChars", !0), n("inputStyle", v ? "contenteditable" : "textarea", function() {
         throw new Error("inputStyle can not (yet) be changed in a running editor")
      }, !0), n("spellcheck", !1, function(e, t) {
         return e.getInputField().spellcheck = t
      }, !0), n("autocorrect", !1, function(e, t) {
         return e.getInputField().autocorrect = t
      }, !0), n("autocapitalize", !1, function(e, t) {
         return e.getInputField().autocapitalize = t
      }, !0), n("rtlMoveVisually", !w), n("wholeLineUpdateBefore", !0), n("theme", "default", function(e) {
         va(e), xa(e)
      }, !0), n("keyMap", "default", function(e, t, n) {
         var r = Go(t), i = n != ya && Go(n);
         i && i.detach && i.detach(e, r), r.attach && r.attach(e, i || null)
      }), n("extraKeys", null), n("configureMouse", null), n("lineWrapping", !1, Ca, !0), n("gutters", [], function(e) {
         fi(e.options), xa(e)
      }, !0), n("fixedGutter", !0, function(e, t) {
         e.display.gutters.style.left = t ? or(e.display) + "px" : "0", e.refresh()
      }, !0), n("coverGutterNextToScrollbar", !1, function(e) {
         return Hr(e)
      }, !0), n("scrollbarStyle", "native", function(e) {
         Rr(e), Hr(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)
      }, !0), n("lineNumbers", !1, function(e) {
         fi(e.options), xa(e)
      }, !0), n("firstLineNumber", 1, xa, !0), n("lineNumberFormatter", function(e) {
         return e
      }, xa, !0), n("showCursorWhenSelecting", !1, ur, !0), n("resetSelectionOnContextMenu", !0), n("lineWiseCopyCut", !0), n("pasteLinesPerSelection", !0), n("selectionsMayTouch", !1), n("readOnly", !1, function(e, t) {
         "nocursor" == t && (br(e), e.display.input.blur()), e.display.input.readOnlyChanged(t)
      }), n("disableInput", !1, function(e, t) {
         t || e.display.input.reset()
      }, !0), n("dragDrop", !0, ka), n("allowDropFileTypes", null), n("cursorBlinkRate", 530), n("cursorScrollMargin", 0), n("cursorHeight", 1, ur, !0), n("singleCursorHeightPerLine", !0, ur, !0), n("workTime", 100), n("workDelay", 100), n("flattenSpans", !0, Mi, !0), n("addModeClass", !1, Mi, !0), n("pollInterval", 100), n("undoDepth", 200, function(e, t) {
         return e.doc.history.undoDepth = t
      }), n("historyEventDelay", 1250), n("viewportMargin", 10, function(e) {
         return e.refresh()
      }, !0), n("maxHighlightLength", 1e4, Mi, !0), n("moveInputWithCursor", !0, function(e, t) {
         t || e.display.input.resetPosition()
      }), n("tabindex", null, function(e, t) {
         return e.display.input.getField().tabIndex = t || ""
      }), n("autofocus", null), n("direction", "ltr", function(e, t) {
         return e.doc.setDirection(t)
      }, !0), n("phrases", null)
   }(Sa), function(e) {
      var t = e.optionHandlers, n = e.helpers = {};
      e.prototype = {
         constructor: e,
         focus: function() {
            window.focus(), this.display.input.focus()
         },
         setOption: function(e, n) {
            var r = this.options, i = r[e];
            r[e] == n && "mode" != e || (r[e] = n, t.hasOwnProperty(e) && Xr(this, t[e])(this, n, i), it(this, "optionChange", this, e))
         },
         getOption: function(e) {
            return this.options[e]
         },
         getDoc: function() {
            return this.doc
         },
         addKeyMap: function(e, t) {
            this.state.keyMaps[t ? "push" : "unshift"](Go(e))
         },
         removeKeyMap: function(e) {
            for (var t = this.state.keyMaps, n = 0; n < t.length; ++n) if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0
         },
         addOverlay: Yr(function(t, n) {
            var r = t.token ? t : e.getMode(this.options, t);
            if (r.startState) throw new Error("Overlays may not be stateful.");
            !function(e, t, n) {
               for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i;) r++;
               e.splice(r, 0, t)
            }(this.state.overlays, {
               mode: r,
               modeSpec: t,
               opaque: n && n.opaque,
               priority: n && n.priority || 0
            }, function(e) {
               return e.priority
            }), this.state.modeGen++, Zr(this)
         }),
         removeOverlay: Yr(function(e) {
            for (var t = this.state.overlays, n = 0; n < t.length; ++n) {
               var r = t[n].modeSpec;
               if (r == e || "string" == typeof e && r.name == e) return t.splice(n, 1), this.state.modeGen++, void Zr(this)
            }
         }),
         indentLine: Yr(function(e, t, n) {
            "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), pe(this.doc, e) && La(this, e, t, n)
         }),
         indentSelection: Yr(function(e) {
            for (var t = this.doc.sel.ranges, n = -1, r = 0; r < t.length; r++) {
               var i = t[r];
               if (i.empty()) i.head.line > n && (La(this, i.head.line, e, !0), n = i.head.line, r == this.doc.sel.primIndex && Mr(this)); else {
                  var o = i.from(), a = i.to(), l = Math.max(n, o.line);
                  n = Math.min(this.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;
                  for (var s = l; s < n; ++s) La(this, s, e);
                  var c = this.doc.sel.ranges;
                  0 == o.ch && t.length == c.length && c[r].from().ch > 0 && Gi(this.doc, r, new bi(o, c[r].to()), j)
               }
            }
         }),
         getTokenAt: function(e, t) {
            return Ut(this, e, t)
         },
         getLineTokens: function(e, t) {
            return Ut(this, ge(e), t, !0)
         },
         getTokenTypeAt: function(e) {
            e = Ce(this.doc, e);
            var t, n = Wt(this, se(this.doc, e.line)), r = 0, i = (n.length - 1) / 2, o = e.ch;
            if (0 == o) t = n[2]; else for (; ;) {
               var a = r + i >> 1;
               if ((a ? n[2 * a - 1] : 0) >= o) i = a; else {
                  if (!(n[2 * a + 1] < o)) {
                     t = n[2 * a + 2];
                     break
                  }
                  r = a + 1
               }
            }
            var l = t ? t.indexOf("overlay ") : -1;
            return l < 0 ? t : 0 == l ? null : t.slice(0, l - 1)
         },
         getModeAt: function(t) {
            var n = this.doc.mode;
            return n.innerMode ? e.innerMode(n, this.getTokenAt(t).state).mode : n
         },
         getHelper: function(e, t) {
            return this.getHelpers(e, t)[0]
         },
         getHelpers: function(e, t) {
            var r = [];
            if (!n.hasOwnProperty(t)) return r;
            var i = n[t], o = this.getModeAt(e);
            if ("string" == typeof o[t]) i[o[t]] && r.push(i[o[t]]); else if (o[t]) for (var a = 0; a < o[t].length; a++) {
               var l = i[o[t][a]];
               l && r.push(l)
            } else o.helperType && i[o.helperType] ? r.push(i[o.helperType]) : i[o.name] && r.push(i[o.name]);
            for (var s = 0; s < i._global.length; s++) {
               var c = i._global[s];
               c.pred(o, this) && -1 == R(r, c.val) && r.push(c.val)
            }
            return r
         },
         getStateAfter: function(e, t) {
            var n = this.doc;
            return It(this, (e = ke(n, null == e ? n.first + n.size - 1 : e)) + 1, t).state
         },
         cursorCoords: function(e, t) {
            var n = this.doc.sel.primary();
            return $n(this, null == e ? n.head : "object" == typeof e ? Ce(this.doc, e) : e ? n.from() : n.to(), t || "page")
         },
         charCoords: function(e, t) {
            return Kn(this, Ce(this.doc, e), t || "page")
         },
         coordsChar: function(e, t) {
            return Qn(this, (e = Gn(this, e, t || "page")).left, e.top)
         },
         lineAtHeight: function(e, t) {
            return e = Gn(this, {top: e, left: 0}, t || "page").top, he(this.doc, e + this.display.viewOffset)
         },
         heightAtLine: function(e, t, n) {
            var r, i = !1;
            if ("number" == typeof e) {
               var o = this.doc.first + this.doc.size - 1;
               e < this.doc.first ? e = this.doc.first : e > o && (e = o, i = !0), r = se(this.doc, e)
            } else r = e;
            return Vn(this, r, {top: 0, left: 0}, t || "page", n || i).top + (i ? this.doc.height - Ke(r) : 0)
         },
         defaultTextHeight: function() {
            return nr(this.display)
         },
         defaultCharWidth: function() {
            return rr(this.display)
         },
         getViewport: function() {
            return {from: this.display.viewFrom, to: this.display.viewTo}
         },
         addWidget: function(e, t, n, r, i) {
            var o, a, l, s = this.display, c = (e = $n(this, Ce(this.doc, e))).bottom, u = e.left;
            if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), s.sizer.appendChild(t), "over" == r) c = e.top; else if ("above" == r || "near" == r) {
               var d = Math.max(s.wrapper.clientHeight, this.doc.height),
                  f = Math.max(s.sizer.clientWidth, s.lineSpace.clientWidth);
               ("above" == r || e.bottom + t.offsetHeight > d) && e.top > t.offsetHeight ? c = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= d && (c = e.bottom), u + t.offsetWidth > f && (u = f - t.offsetWidth)
            }
            t.style.top = c + "px", t.style.left = t.style.right = "", "right" == i ? (u = s.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == i ? u = 0 : "middle" == i && (u = (s.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = u + "px"), n && (o = this, a = {
               left: u,
               top: c,
               right: u + t.offsetWidth,
               bottom: c + t.offsetHeight
            }, null != (l = Tr(o, a)).scrollTop && Nr(o, l.scrollTop), null != l.scrollLeft && Fr(o, l.scrollLeft))
         },
         triggerOnKeyDown: Yr(aa),
         triggerOnKeyPress: Yr(sa),
         triggerOnKeyUp: la,
         triggerOnMouseDown: Yr(fa),
         execCommand: function(e) {
            if (Qo.hasOwnProperty(e)) return Qo[e].call(null, this)
         },
         triggerElectric: Yr(function(e) {
            Na(this, e)
         }),
         findPosH: function(e, t, n, r) {
            var i = 1;
            t < 0 && (i = -1, t = -t);
            for (var o = Ce(this.doc, e), a = 0; a < t && !(o = Da(this.doc, o, i, n, r)).hitSide; ++a) ;
            return o
         },
         moveH: Yr(function(e, t) {
            var n = this;
            this.extendSelectionsBy(function(r) {
               return n.display.shift || n.doc.extend || r.empty() ? Da(n.doc, r.head, e, t, n.options.rtlMoveVisually) : e < 0 ? r.from() : r.to()
            }, V)
         }),
         deleteH: Yr(function(e, t) {
            var n = this.doc.sel, r = this.doc;
            n.somethingSelected() ? r.replaceSelection("", null, "+delete") : Ko(this, function(n) {
               var i = Da(r, n.head, e, t, !1);
               return e < 0 ? {from: i, to: n.head} : {from: n.head, to: i}
            })
         }),
         findPosV: function(e, t, n, r) {
            var i = 1, o = r;
            t < 0 && (i = -1, t = -t);
            for (var a = Ce(this.doc, e), l = 0; l < t; ++l) {
               var s = $n(this, a, "div");
               if (null == o ? o = s.left : s.left = o, (a = Ea(this, s, i, n)).hitSide) break
            }
            return a
         },
         moveV: Yr(function(e, t) {
            var n = this, r = this.doc, i = [], o = !this.display.shift && !r.extend && r.sel.somethingSelected();
            if (r.extendSelectionsBy(function(a) {
               if (o) return e < 0 ? a.from() : a.to();
               var l = $n(n, a.head, "div");
               null != a.goalColumn && (l.left = a.goalColumn), i.push(l.left);
               var s = Ea(n, l, e, t);
               return "page" == t && a == r.sel.primary() && Lr(n, Kn(n, s, "div").top - l.top), s
            }, V), i.length) for (var a = 0; a < r.sel.ranges.length; a++) r.sel.ranges[a].goalColumn = i[a]
         }),
         findWordAt: function(e) {
            var t = se(this.doc, e.line).text, n = e.ch, r = e.ch;
            if (t) {
               var i = this.getHelper(e, "wordChars");
               "before" != e.sticky && r != t.length || !n ? ++r : --n;
               for (var o = t.charAt(n), a = te(o, i) ? function(e) {
                  return te(e, i)
               } : /\s/.test(o) ? function(e) {
                  return /\s/.test(e)
               } : function(e) {
                  return !/\s/.test(e) && !te(e)
               }; n > 0 && a(t.charAt(n - 1));) --n;
               for (; r < t.length && a(t.charAt(r));) ++r
            }
            return new bi(ge(e.line, n), ge(e.line, r))
         },
         toggleOverwrite: function(e) {
            null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? F(this.display.cursorDiv, "CodeMirror-overwrite") : L(this.display.cursorDiv, "CodeMirror-overwrite"), it(this, "overwriteToggle", this, this.state.overwrite))
         },
         hasFocus: function() {
            return this.display.input.getField() == z()
         },
         isReadOnly: function() {
            return !(!this.options.readOnly && !this.doc.cantEdit)
         },
         scrollTo: Yr(function(e, t) {
            _r(this, e, t)
         }),
         getScrollInfo: function() {
            var e = this.display.scroller;
            return {
               left: e.scrollLeft,
               top: e.scrollTop,
               height: e.scrollHeight - Mn(this) - this.display.barHeight,
               width: e.scrollWidth - Mn(this) - this.display.barWidth,
               clientHeight: On(this),
               clientWidth: _n(this)
            }
         },
         scrollIntoView: Yr(function(e, t) {
            null == e ? (e = {
               from: this.doc.sel.primary().head,
               to: null
            }, null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
               from: ge(e, 0),
               to: null
            } : null == e.from && (e = {
               from: e,
               to: null
            }), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line ? function(e, t) {
               Or(e), e.curOp.scrollToPos = t
            }(this, e) : Ar(this, e.from, e.to, e.margin)
         }),
         setSize: Yr(function(e, t) {
            var n = this, r = function(e) {
               return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e
            };
            null != e && (this.display.wrapper.style.width = r(e)), null != t && (this.display.wrapper.style.height = r(t)), this.options.lineWrapping && Rn(this);
            var i = this.display.viewFrom;
            this.doc.iter(i, this.display.viewTo, function(e) {
               if (e.widgets) for (var t = 0; t < e.widgets.length; t++) if (e.widgets[t].noHScroll) {
                  Jr(n, i, "widget");
                  break
               }
               ++i
            }), this.curOp.forceUpdate = !0, it(this, "refresh", this)
         }),
         operation: function(e) {
            return $r(this, e)
         },
         startOperation: function() {
            return Br(this)
         },
         endOperation: function() {
            return jr(this)
         },
         refresh: Yr(function() {
            var e = this.display.cachedTextHeight;
            Zr(this), this.curOp.forceUpdate = !0, qn(this), _r(this, this.doc.scrollLeft, this.doc.scrollTop), ci(this), (null == e || Math.abs(e - nr(this.display)) > .5) && lr(this), it(this, "refresh", this)
         }),
         swapDoc: Yr(function(e) {
            var t = this.doc;
            return t.cm = null, Ni(this, e), qn(this), this.display.input.reset(), _r(this, e.scrollLeft, e.scrollTop), this.curOp.forceScroll = !0, cn(this, "swapDoc", this, t), t
         }),
         phrase: function(e) {
            var t = this.options.phrases;
            return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e
         },
         getInputField: function() {
            return this.display.input.getField()
         },
         getWrapperElement: function() {
            return this.display.wrapper
         },
         getScrollerElement: function() {
            return this.display.scroller
         },
         getGutterElement: function() {
            return this.display.gutters
         }
      }, st(e), e.registerHelper = function(t, r, i) {
         n.hasOwnProperty(t) || (n[t] = e[t] = {_global: []}), n[t][r] = i
      }, e.registerGlobalHelper = function(t, r, i, o) {
         e.registerHelper(t, r, o), n[t]._global.push({pred: i, val: o})
      }
   }(Sa);
   var ja = "iter insert remove copy getEditor constructor".split(" ");
   for (var Ua in Mo.prototype) Mo.prototype.hasOwnProperty(Ua) && R(ja, Ua) < 0 && (Sa.prototype[Ua] = function(e) {
      return function() {
         return e.apply(this.doc, arguments)
      }
   }(Mo.prototype[Ua]));
   return st(Mo), Sa.inputStyles = {textarea: Ba, contenteditable: Ha}, Sa.defineMode = function(e) {
      Sa.defaults.mode || "null" == e || (Sa.defaults.mode = e), function(e, t) {
         arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), Tt[e] = t
      }.apply(this, arguments)
   }, Sa.defineMIME = function(e, t) {
      Lt[e] = t
   }, Sa.defineMode("null", function() {
      return {
         token: function(e) {
            return e.skipToEnd()
         }
      }
   }), Sa.defineMIME("text/plain", "null"), Sa.defineExtension = function(e, t) {
      Sa.prototype[e] = t
   }, Sa.defineDocExtension = function(e, t) {
      Mo.prototype[e] = t
   }, Sa.fromTextArea = function(e, t) {
      if ((t = t ? H(t) : {}).value = e.value, !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder), null == t.autofocus) {
         var n = z();
         t.autofocus = n == e || null != e.getAttribute("autofocus") && n == document.body
      }

      function r() {
         e.value = l.getValue()
      }

      var i;
      if (e.form && (tt(e.form, "submit", r), !t.leaveSubmitMethodAlone)) {
         var o = e.form;
         i = o.submit;
         try {
            var a = o.submit = function() {
               r(), o.submit = i, o.submit(), o.submit = a
            }
         } catch (e) {
         }
      }
      t.finishInit = function(t) {
         t.save = r, t.getTextArea = function() {
            return e
         }, t.toTextArea = function() {
            t.toTextArea = isNaN, r(), e.parentNode.removeChild(t.getWrapperElement()), e.style.display = "", e.form && (rt(e.form, "submit", r), "function" == typeof e.form.submit && (e.form.submit = i))
         }
      }, e.style.display = "none";
      var l = Sa(function(t) {
         return e.parentNode.insertBefore(t, e.nextSibling)
      }, t);
      return l
   }, function(e) {
      e.off = rt, e.on = tt, e.wheelEventPixels = gi, e.Doc = Mo, e.splitLines = xt, e.countColumn = W, e.findColumn = G, e.isWordChar = ee, e.Pass = B, e.signal = it, e.Line = Kt, e.changeEnd = ki, e.scrollbarModel = Ir, e.Pos = ge, e.cmpPos = ve, e.modes = Tt, e.mimeModes = Lt, e.resolveMode = Mt, e.getMode = _t, e.modeExtensions = Ot, e.extendMode = At, e.copyState = Nt, e.startState = Ft, e.innerMode = zt, e.commands = Qo, e.keyMap = Io, e.keyName = Vo, e.isModifierKey = jo, e.lookupKey = Bo, e.normalizeKeyMap = qo, e.StringStream = Pt, e.SharedTextMarker = Co, e.TextMarker = xo, e.LineWidget = yo, e.e_preventDefault = ct, e.e_stopPropagation = ut, e.e_stop = ft, e.addClass = F, e.contains = N, e.rmClass = L, e.keyNames = Do
   }(Sa), Sa.version = "5.45.0", Sa
}, cm.mode.css = function(e) {
   "use strict";

   function t(e) {
      for (var t = {}, n = 0; n < e.length; ++n) t[e[n].toLowerCase()] = !0;
      return t
   }

   e.defineMode("css", function(t, n) {
      var r = n.inline;
      n.propertyKeywords || (n = e.resolveMode("text/css"));
      var i, o, a = t.indentUnit, l = n.tokenHooks, s = n.documentTypes || {}, c = n.mediaTypes || {},
         u = n.mediaFeatures || {}, d = n.mediaValueKeywords || {}, f = n.propertyKeywords || {},
         h = n.nonStandardPropertyKeywords || {}, p = n.fontProperties || {}, m = n.counterDescriptors || {},
         g = n.colorKeywords || {}, v = n.valueKeywords || {}, y = n.allowNested, b = n.lineComment,
         w = !0 === n.supportsAtComponent;

      function x(e, t) {
         return i = t, e
      }

      function k(e) {
         return function(t, n) {
            for (var r, i = !1; null != (r = t.next());) {
               if (r == e && !i) {
                  ")" == e && t.backUp(1);
                  break
               }
               i = !i && "\\" == r
            }
            return (r == e || !i && ")" != e) && (n.tokenize = null), x("string", "string")
         }
      }

      function C(e, t) {
         return e.next(), e.match(/\s*[\"\')]/, !1) ? t.tokenize = null : t.tokenize = k(")"), x(null, "(")
      }

      function S(e, t, n) {
         this.type = e, this.indent = t, this.prev = n
      }

      function T(e, t, n, r) {
         return e.context = new S(n, t.indentation() + (!1 === r ? 0 : a), e.context), n
      }

      function L(e) {
         return e.context.prev && (e.context = e.context.prev), e.context.type
      }

      function M(e, t, n) {
         return A[n.context.type](e, t, n)
      }

      function _(e, t, n, r) {
         for (var i = r || 1; i > 0; i--) n.context = n.context.prev;
         return M(e, t, n)
      }

      function O(e) {
         var t = e.current().toLowerCase();
         o = v.hasOwnProperty(t) ? "atom" : g.hasOwnProperty(t) ? "keyword" : "variable"
      }

      var A = {
         top: function(e, t, n) {
            if ("{" == e) return T(n, t, "block");
            if ("}" == e && n.context.prev) return L(n);
            if (w && /@component/i.test(e)) return T(n, t, "atComponentBlock");
            if (/^@(-moz-)?document$/i.test(e)) return T(n, t, "documentTypes");
            if (/^@(media|supports|(-moz-)?document|import)$/i.test(e)) return T(n, t, "atBlock");
            if (/^@(font-face|counter-style)/i.test(e)) return n.stateArg = e, "restricted_atBlock_before";
            if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(e)) return "keyframes";
            if (e && "@" == e.charAt(0)) return T(n, t, "at");
            if ("hash" == e) o = "builtin"; else if ("word" == e) o = "tag"; else {
               if ("variable-definition" == e) return "maybeprop";
               if ("interpolation" == e) return T(n, t, "interpolation");
               if (":" == e) return "pseudo";
               if (y && "(" == e) return T(n, t, "parens")
            }
            return n.context.type
         }, block: function(e, t, n) {
            if ("word" == e) {
               var r = t.current().toLowerCase();
               return f.hasOwnProperty(r) ? (o = "property", "maybeprop") : h.hasOwnProperty(r) ? (o = "string-2", "maybeprop") : y ? (o = t.match(/^\s*:(?:\s|$)/, !1) ? "property" : "tag", "block") : (o += " error", "maybeprop")
            }
            return "meta" == e ? "block" : y || "hash" != e && "qualifier" != e ? A.top(e, t, n) : (o = "error", "block")
         }, maybeprop: function(e, t, n) {
            return ":" == e ? T(n, t, "prop") : M(e, t, n)
         }, prop: function(e, t, n) {
            if (";" == e) return L(n);
            if ("{" == e && y) return T(n, t, "propBlock");
            if ("}" == e || "{" == e) return _(e, t, n);
            if ("(" == e) return T(n, t, "parens");
            if ("hash" != e || /^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(t.current())) {
               if ("word" == e) O(t); else if ("interpolation" == e) return T(n, t, "interpolation")
            } else o += " error";
            return "prop"
         }, propBlock: function(e, t, n) {
            return "}" == e ? L(n) : "word" == e ? (o = "property", "maybeprop") : n.context.type
         }, parens: function(e, t, n) {
            return "{" == e || "}" == e ? _(e, t, n) : ")" == e ? L(n) : "(" == e ? T(n, t, "parens") : "interpolation" == e ? T(n, t, "interpolation") : ("word" == e && O(t), "parens")
         }, pseudo: function(e, t, n) {
            return "meta" == e ? "pseudo" : "word" == e ? (o = "variable-3", n.context.type) : M(e, t, n)
         }, documentTypes: function(e, t, n) {
            return "word" == e && s.hasOwnProperty(t.current()) ? (o = "tag", n.context.type) : A.atBlock(e, t, n)
         }, atBlock: function(e, t, n) {
            if ("(" == e) return T(n, t, "atBlock_parens");
            if ("}" == e || ";" == e) return _(e, t, n);
            if ("{" == e) return L(n) && T(n, t, y ? "block" : "top");
            if ("interpolation" == e) return T(n, t, "interpolation");
            if ("word" == e) {
               var r = t.current().toLowerCase();
               o = "only" == r || "not" == r || "and" == r || "or" == r ? "keyword" : c.hasOwnProperty(r) ? "attribute" : u.hasOwnProperty(r) ? "property" : d.hasOwnProperty(r) ? "keyword" : f.hasOwnProperty(r) ? "property" : h.hasOwnProperty(r) ? "string-2" : v.hasOwnProperty(r) ? "atom" : g.hasOwnProperty(r) ? "keyword" : "error"
            }
            return n.context.type
         }, atComponentBlock: function(e, t, n) {
            return "}" == e ? _(e, t, n) : "{" == e ? L(n) && T(n, t, y ? "block" : "top", !1) : ("word" == e && (o = "error"), n.context.type)
         }, atBlock_parens: function(e, t, n) {
            return ")" == e ? L(n) : "{" == e || "}" == e ? _(e, t, n, 2) : A.atBlock(e, t, n)
         }, restricted_atBlock_before: function(e, t, n) {
            return "{" == e ? T(n, t, "restricted_atBlock") : "word" == e && "@counter-style" == n.stateArg ? (o = "variable", "restricted_atBlock_before") : M(e, t, n)
         }, restricted_atBlock: function(e, t, n) {
            return "}" == e ? (n.stateArg = null, L(n)) : "word" == e ? (o = "@font-face" == n.stateArg && !p.hasOwnProperty(t.current().toLowerCase()) || "@counter-style" == n.stateArg && !m.hasOwnProperty(t.current().toLowerCase()) ? "error" : "property", "maybeprop") : "restricted_atBlock"
         }, keyframes: function(e, t, n) {
            return "word" == e ? (o = "variable", "keyframes") : "{" == e ? T(n, t, "top") : M(e, t, n)
         }, at: function(e, t, n) {
            return ";" == e ? L(n) : "{" == e || "}" == e ? _(e, t, n) : ("word" == e ? o = "tag" : "hash" == e && (o = "builtin"), "at")
         }, interpolation: function(e, t, n) {
            return "}" == e ? L(n) : "{" == e || ";" == e ? _(e, t, n) : ("word" == e ? o = "variable" : "variable" != e && "(" != e && ")" != e && (o = "error"), "interpolation")
         }
      };
      return {
         startState: function(e) {
            return {
               tokenize: null,
               state: r ? "block" : "top",
               stateArg: null,
               context: new S(r ? "block" : "top", e || 0, null)
            }
         },
         token: function(e, t) {
            if (!t.tokenize && e.eatSpace()) return null;
            var n = (t.tokenize || function(e, t) {
               var n = e.next();
               if (l[n]) {
                  var r = l[n](e, t);
                  if (!1 !== r) return r
               }
               return "@" == n ? (e.eatWhile(/[\w\\\-]/), x("def", e.current())) : "=" == n || ("~" == n || "|" == n) && e.eat("=") ? x(null, "compare") : '"' == n || "'" == n ? (t.tokenize = k(n), t.tokenize(e, t)) : "#" == n ? (e.eatWhile(/[\w\\\-]/), x("atom", "hash")) : "!" == n ? (e.match(/^\s*\w*/), x("keyword", "important")) : /\d/.test(n) || "." == n && e.eat(/\d/) ? (e.eatWhile(/[\w.%]/), x("number", "unit")) : "-" !== n ? /[,+>*\/]/.test(n) ? x(null, "select-op") : "." == n && e.match(/^-?[_a-z][_a-z0-9-]*/i) ? x("qualifier", "qualifier") : /[:;{}\[\]\(\)]/.test(n) ? x(null, n) : e.match(/[\w-.]+(?=\()/) ? (/^(url(-prefix)?|domain|regexp)$/.test(e.current().toLowerCase()) && (t.tokenize = C), x("variable callee", "variable")) : /[\w\\\-]/.test(n) ? (e.eatWhile(/[\w\\\-]/), x("property", "word")) : x(null, null) : /[\d.]/.test(e.peek()) ? (e.eatWhile(/[\w.%]/), x("number", "unit")) : e.match(/^-[\w\\\-]*/) ? (e.eatWhile(/[\w\\\-]/), e.match(/^\s*:/, !1) ? x("variable-2", "variable-definition") : x("variable-2", "variable")) : e.match(/^\w+-/) ? x("meta", "meta") : void 0
            })(e, t);
            return n && "object" == typeof n && (i = n[1], n = n[0]), o = n, "comment" != i && (t.state = A[t.state](i, e, t)), o
         },
         indent: function(e, t) {
            var n = e.context, r = t && t.charAt(0), i = n.indent;
            return "prop" != n.type || "}" != r && ")" != r || (n = n.prev), n.prev && ("}" != r || "block" != n.type && "top" != n.type && "interpolation" != n.type && "restricted_atBlock" != n.type ? (")" != r || "parens" != n.type && "atBlock_parens" != n.type) && ("{" != r || "at" != n.type && "atBlock" != n.type) || (i = Math.max(0, n.indent - a)) : i = (n = n.prev).indent), i
         },
         electricChars: "}",
         blockCommentStart: "/*",
         blockCommentEnd: "*/",
         blockCommentContinue: " * ",
         lineComment: b,
         fold: "brace"
      }
   });
   var n = ["domain", "regexp", "url", "url-prefix"], r = t(n),
      i = ["all", "aural", "braille", "handheld", "print", "projection", "screen", "tty", "tv", "embossed"], o = t(i),
      a = ["width", "min-width", "max-width", "height", "min-height", "max-height", "device-width", "min-device-width", "max-device-width", "device-height", "min-device-height", "max-device-height", "aspect-ratio", "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio", "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color", "max-color", "color-index", "min-color-index", "max-color-index", "monochrome", "min-monochrome", "max-monochrome", "resolution", "min-resolution", "max-resolution", "scan", "grid", "orientation", "device-pixel-ratio", "min-device-pixel-ratio", "max-device-pixel-ratio", "pointer", "any-pointer", "hover", "any-hover"],
      l = t(a),
      s = ["landscape", "portrait", "none", "coarse", "fine", "on-demand", "hover", "interlace", "progressive"],
      c = t(s),
      u = ["align-content", "align-items", "align-self", "alignment-adjust", "alignment-baseline", "anchor-point", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "appearance", "azimuth", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "baseline-shift", "binding", "bleed", "bookmark-label", "bookmark-level", "bookmark-state", "bookmark-target", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "color", "color-profile", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "crop", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "dominant-baseline", "drop-initial-after-adjust", "drop-initial-after-align", "drop-initial-before-adjust", "drop-initial-before-align", "drop-initial-size", "drop-initial-value", "elevation", "empty-cells", "fit", "fit-position", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "float-offset", "flow-from", "flow-into", "font", "font-feature-settings", "font-family", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-weight", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-gap", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-gap", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "inline-box-align", "justify-content", "justify-items", "justify-self", "left", "letter-spacing", "line-break", "line-height", "line-stacking", "line-stacking-ruby", "line-stacking-shift", "line-stacking-strategy", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "marquee-direction", "marquee-loop", "marquee-play-count", "marquee-speed", "marquee-style", "max-height", "max-width", "min-height", "min-width", "mix-blend-mode", "move-to", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page", "page-break-after", "page-break-before", "page-break-inside", "page-policy", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pitch", "pitch-range", "place-content", "place-items", "place-self", "play-during", "position", "presentation-level", "punctuation-trim", "quotes", "region-break-after", "region-break-before", "region-break-inside", "region-fragment", "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness", "right", "rotation", "rotation-point", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span", "shape-image-threshold", "shape-inside", "shape-margin", "shape-outside", "size", "speak", "speak-as", "speak-header", "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set", "tab-size", "table-layout", "target", "target-name", "target-new", "target-position", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-skip", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-height", "text-indent", "text-justify", "text-outline", "text-overflow", "text-shadow", "text-size-adjust", "text-space-collapse", "text-transform", "text-underline-position", "text-wrap", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "user-select", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "z-index", "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color", "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events", "color-interpolation", "color-interpolation-filters", "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering", "marker", "marker-end", "marker-mid", "marker-start", "shape-rendering", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering", "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal", "glyph-orientation-vertical", "text-anchor", "writing-mode"],
      d = t(u),
      f = ["scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color", "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color", "scrollbar-3d-light-color", "scrollbar-track-color", "shape-inside", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "zoom"],
      h = t(f),
      p = t(["font-family", "src", "unicode-range", "font-variant", "font-feature-settings", "font-stretch", "font-weight", "font-style"]),
      m = t(["additive-symbols", "fallback", "negative", "pad", "prefix", "range", "speak-as", "suffix", "symbols", "system"]),
      g = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"],
      v = t(g),
      y = ["above", "absolute", "activeborder", "additive", "activecaption", "afar", "after-white-space", "ahead", "alias", "all", "all-scroll", "alphabetic", "alternate", "always", "amharic", "amharic-abegede", "antialiased", "appworkspace", "arabic-indic", "armenian", "asterisks", "attr", "auto", "auto-flow", "avoid", "avoid-column", "avoid-page", "avoid-region", "background", "backwards", "baseline", "below", "bidi-override", "binary", "bengali", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box", "both", "bottom", "break", "break-all", "break-word", "bullets", "button", "button-bevel", "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "calc", "cambodian", "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret", "cell", "center", "checkbox", "circle", "cjk-decimal", "cjk-earthly-branch", "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote", "col-resize", "collapse", "color", "color-burn", "color-dodge", "column", "column-reverse", "compact", "condensed", "contain", "content", "contents", "content-box", "context-menu", "continuous", "copy", "counter", "counters", "cover", "crop", "cross", "crosshair", "currentcolor", "cursive", "cyclic", "darken", "dashed", "decimal", "decimal-leading-zero", "default", "default-button", "dense", "destination-atop", "destination-in", "destination-out", "destination-over", "devanagari", "difference", "disc", "discard", "disclosure-closed", "disclosure-open", "document", "dot-dash", "dot-dot-dash", "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out", "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede", "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er", "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er", "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et", "ethiopic-halehame-gez", "ethiopic-halehame-om-et", "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et", "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig", "ethiopic-numeric", "ew-resize", "exclusion", "expanded", "extends", "extra-condensed", "extra-expanded", "fantasy", "fast", "fill", "fixed", "flat", "flex", "flex-end", "flex-start", "footnotes", "forwards", "from", "geometricPrecision", "georgian", "graytext", "grid", "groove", "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hard-light", "hebrew", "help", "hidden", "hide", "higher", "highlight", "highlighttext", "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "hue", "icon", "ignore", "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite", "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis", "inline-block", "inline-flex", "inline-grid", "inline-table", "inset", "inside", "intrinsic", "invert", "italic", "japanese-formal", "japanese-informal", "justify", "kannada", "katakana", "katakana-iroha", "keep-all", "khmer", "korean-hangul-formal", "korean-hanja-formal", "korean-hanja-informal", "landscape", "lao", "large", "larger", "left", "level", "lighter", "lighten", "line-through", "linear", "linear-gradient", "lines", "list-item", "listbox", "listitem", "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian", "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian", "lower-roman", "lowercase", "ltr", "luminosity", "malayalam", "match", "matrix", "matrix3d", "media-controls-background", "media-current-time-display", "media-fullscreen-button", "media-mute-button", "media-play-button", "media-return-to-realtime-button", "media-rewind-button", "media-seek-back-button", "media-seek-forward-button", "media-slider", "media-sliderthumb", "media-time-remaining-display", "media-volume-slider", "media-volume-slider-container", "media-volume-sliderthumb", "medium", "menu", "menulist", "menulist-button", "menulist-text", "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic", "mix", "mongolian", "monospace", "move", "multiple", "multiply", "myanmar", "n-resize", "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop", "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap", "ns-resize", "numbers", "numeric", "nw-resize", "nwse-resize", "oblique", "octal", "opacity", "open-quote", "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset", "outside", "outside-shape", "overlay", "overline", "padding", "padding-box", "painted", "page", "paused", "persian", "perspective", "plus-darker", "plus-lighter", "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d", "progress", "push-button", "radial-gradient", "radio", "read-only", "read-write", "read-write-plaintext-only", "rectangle", "region", "relative", "repeat", "repeating-linear-gradient", "repeating-radial-gradient", "repeat-x", "repeat-y", "reset", "reverse", "rgb", "rgba", "ridge", "right", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "round", "row", "row-resize", "row-reverse", "rtl", "run-in", "running", "s-resize", "sans-serif", "saturation", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "screen", "scroll", "scrollbar", "scroll-position", "se-resize", "searchfield", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "self-start", "self-end", "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama", "simp-chinese-formal", "simp-chinese-informal", "single", "skew", "skewX", "skewY", "skip-white-space", "slide", "slider-horizontal", "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow", "small", "small-caps", "small-caption", "smaller", "soft-light", "solid", "somali", "source-atop", "source-in", "source-out", "source-over", "space", "space-around", "space-between", "space-evenly", "spell-out", "square", "square-button", "start", "static", "status-bar", "stretch", "stroke", "sub", "subpixel-antialiased", "super", "sw-resize", "symbolic", "symbols", "system-ui", "table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group", "tamil", "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai", "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight", "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er", "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top", "trad-chinese-formal", "trad-chinese-informal", "transform", "translate", "translate3d", "translateX", "translateY", "translateZ", "transparent", "ultra-condensed", "ultra-expanded", "underline", "unset", "up", "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal", "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url", "var", "vertical", "vertical-text", "visible", "visibleFill", "visiblePainted", "visibleStroke", "visual", "w-resize", "wait", "wave", "wider", "window", "windowframe", "windowtext", "words", "wrap", "wrap-reverse", "x-large", "x-small", "xor", "xx-large", "xx-small"],
      b = t(y), w = n.concat(i).concat(a).concat(s).concat(u).concat(f).concat(g).concat(y);

   function x(e, t) {
      for (var n, r = !1; null != (n = e.next());) {
         if (r && "/" == n) {
            t.tokenize = null;
            break
         }
         r = "*" == n
      }
      return ["comment", "comment"]
   }

   e.registerHelper("hintWords", "css", w), e.defineMIME("text/css", {
      documentTypes: r,
      mediaTypes: o,
      mediaFeatures: l,
      mediaValueKeywords: c,
      propertyKeywords: d,
      nonStandardPropertyKeywords: h,
      fontProperties: p,
      counterDescriptors: m,
      colorKeywords: v,
      valueKeywords: b,
      tokenHooks: {
         "/": function(e, t) {
            return !!e.eat("*") && (t.tokenize = x, x(e, t))
         }
      },
      name: "css"
   }), e.defineMIME("text/x-scss", {
      mediaTypes: o,
      mediaFeatures: l,
      mediaValueKeywords: c,
      propertyKeywords: d,
      nonStandardPropertyKeywords: h,
      colorKeywords: v,
      valueKeywords: b,
      fontProperties: p,
      allowNested: !0,
      lineComment: "//",
      tokenHooks: {
         "/": function(e, t) {
            return e.eat("/") ? (e.skipToEnd(), ["comment", "comment"]) : e.eat("*") ? (t.tokenize = x, x(e, t)) : ["operator", "operator"]
         }, ":": function(e) {
            return !!e.match(/\s*\{/, !1) && [null, null]
         }, $: function(e) {
            return e.match(/^[\w-]+/), e.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"]
         }, "#": function(e) {
            return !!e.eat("{") && [null, "interpolation"]
         }
      },
      name: "css",
      helperType: "scss"
   }), e.defineMIME("text/x-less", {
      mediaTypes: o,
      mediaFeatures: l,
      mediaValueKeywords: c,
      propertyKeywords: d,
      nonStandardPropertyKeywords: h,
      colorKeywords: v,
      valueKeywords: b,
      fontProperties: p,
      allowNested: !0,
      lineComment: "//",
      tokenHooks: {
         "/": function(e, t) {
            return e.eat("/") ? (e.skipToEnd(), ["comment", "comment"]) : e.eat("*") ? (t.tokenize = x, x(e, t)) : ["operator", "operator"]
         }, "@": function(e) {
            return e.eat("{") ? [null, "interpolation"] : !e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i, !1) && (e.eatWhile(/[\w\\\-]/), e.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"])
         }, "&": function() {
            return ["atom", "atom"]
         }
      },
      name: "css",
      helperType: "less"
   }), e.defineMIME("text/x-gss", {
      documentTypes: r,
      mediaTypes: o,
      mediaFeatures: l,
      propertyKeywords: d,
      nonStandardPropertyKeywords: h,
      fontProperties: p,
      counterDescriptors: m,
      colorKeywords: v,
      valueKeywords: b,
      supportsAtComponent: !0,
      tokenHooks: {
         "/": function(e, t) {
            return !!e.eat("*") && (t.tokenize = x, x(e, t))
         }
      },
      name: "css",
      helperType: "gss"
   })
}, cm.addon.placeholder = function(e) {
   function t(e) {
      e.state.placeholder && (e.state.placeholder.parentNode.removeChild(e.state.placeholder), e.state.placeholder = null)
   }

   function n(e) {
      t(e);
      var n = e.state.placeholder = document.createElement("pre");
      n.style.cssText = "height: 0; overflow: visible", n.style.direction = e.getOption("direction"), n.className = "CodeMirror-placeholder";
      var r = e.getOption("placeholder");
      "string" == typeof r && (r = document.createTextNode(r)), n.appendChild(r), e.display.lineSpace.insertBefore(n, e.display.lineSpace.firstChild)
   }

   function r(e) {
      o(e) && n(e)
   }

   function i(e) {
      var r = e.getWrapperElement(), i = o(e);
      r.className = r.className.replace(" CodeMirror-empty", "") + (i ? " CodeMirror-empty" : ""), i ? n(e) : t(e)
   }

   function o(e) {
      return 1 === e.lineCount() && "" === e.getLine(0)
   }

   e.defineOption("placeholder", "", function(n, o, a) {
      var l = a && a != e.Init;
      if (o && !l) n.on("blur", r), n.on("change", i), n.on("swapDoc", i), i(n); else if (!o && l) {
         n.off("blur", r), n.off("change", i), n.off("swapDoc", i), t(n);
         var s = n.getWrapperElement();
         s.className = s.className.replace(" CodeMirror-empty", "")
      }
      o && !n.hasFocus() && r(n)
   })
}, cm.addon.rulers = function(e) {
   "use strict";

   function t(t) {
      t.state.rulerDiv.textContent = "";
      var n = t.getOption("rulers"), r = t.defaultCharWidth(), i = t.charCoords(e.Pos(t.firstLine(), 0), "div").left;
      t.state.rulerDiv.style.minHeight = t.display.scroller.offsetHeight + 30 + "px";
      for (var o = 0; o < n.length; o++) {
         var a = document.createElement("div");
         a.className = "CodeMirror-ruler";
         var l, s = n[o];
         "number" == typeof s ? l = s : (l = s.column, s.className && (a.className += " " + s.className), s.color && (a.style.borderColor = s.color), s.lineStyle && (a.style.borderLeftStyle = s.lineStyle), s.width && (a.style.borderLeftWidth = s.width)), a.style.left = i + l * r + "px", t.state.rulerDiv.appendChild(a)
      }
   }

   e.defineOption("rulers", !1, function(e, n) {
      e.state.rulerDiv && (e.state.rulerDiv.parentElement.removeChild(e.state.rulerDiv), e.state.rulerDiv = null, e.off("refresh", t)), n && n.length && (e.state.rulerDiv = e.display.lineSpace.parentElement.insertBefore(document.createElement("div"), e.display.lineSpace), e.state.rulerDiv.className = "CodeMirror-rulers", t(e), e.on("refresh", t))
   })
}, cm.addon.comment = function(e) {
   "use strict";
   var t = {}, n = /[^\s\u00a0]/, r = e.Pos;

   function i(e) {
      var t = e.search(n);
      return -1 == t ? 0 : t
   }

   function o(e, t) {
      var n = e.getMode();
      return !1 !== n.useInnerComments && n.innerMode ? e.getModeAt(t) : n
   }

   e.commands.toggleComment = function(e) {
      e.toggleComment()
   }, e.defineExtension("toggleComment", function(e) {
      e || (e = t);
      for (var n = 1 / 0, i = this.listSelections(), o = null, a = i.length - 1; a >= 0; a--) {
         var l = i[a].from(), s = i[a].to();
         l.line >= n || (s.line >= n && (s = r(n, 0)), n = l.line, null == o ? this.uncomment(l, s, e) ? o = "un" : (this.lineComment(l, s, e), o = "line") : "un" == o ? this.uncomment(l, s, e) : this.lineComment(l, s, e))
      }
   }), e.defineExtension("lineComment", function(e, a, l) {
      l || (l = t);
      var s = this, c = o(s, e), u = s.getLine(e.line);
      if (null != u && (d = e, f = u, !/\bstring\b/.test(s.getTokenTypeAt(r(d.line, 0))) || /^[\'\"\`]/.test(f))) {
         var d, f, h = l.lineComment || c.lineComment;
         if (h) {
            var p = Math.min(0 != a.ch || a.line == e.line ? a.line + 1 : a.line, s.lastLine() + 1),
               m = null == l.padding ? " " : l.padding, g = l.commentBlankLines || e.line == a.line;
            s.operation(function() {
               if (l.indent) {
                  for (var t = null, o = e.line; o < p; ++o) {
                     var a = (c = s.getLine(o)).slice(0, i(c));
                     (null == t || t.length > a.length) && (t = a)
                  }
                  for (o = e.line; o < p; ++o) {
                     var c = s.getLine(o), u = t.length;
                     (g || n.test(c)) && (c.slice(0, u) != t && (u = i(c)), s.replaceRange(t + h + m, r(o, 0), r(o, u)))
                  }
               } else for (o = e.line; o < p; ++o) (g || n.test(s.getLine(o))) && s.replaceRange(h + m, r(o, 0))
            })
         } else (l.blockCommentStart || c.blockCommentStart) && (l.fullLines = !0, s.blockComment(e, a, l))
      }
   }), e.defineExtension("blockComment", function(e, i, a) {
      a || (a = t);
      var l = this, s = o(l, e), c = a.blockCommentStart || s.blockCommentStart,
         u = a.blockCommentEnd || s.blockCommentEnd;
      if (c && u) {
         if (!/\bcomment\b/.test(l.getTokenTypeAt(r(e.line, 0)))) {
            var d = Math.min(i.line, l.lastLine());
            d != e.line && 0 == i.ch && n.test(l.getLine(d)) && --d;
            var f = null == a.padding ? " " : a.padding;
            e.line > d || l.operation(function() {
               if (0 != a.fullLines) {
                  var t = n.test(l.getLine(d));
                  l.replaceRange(f + u, r(d)), l.replaceRange(c + f, r(e.line, 0));
                  var o = a.blockCommentLead || s.blockCommentLead;
                  if (null != o) for (var h = e.line + 1; h <= d; ++h) (h != d || t) && l.replaceRange(o + f, r(h, 0))
               } else l.replaceRange(u, i), l.replaceRange(c, e)
            })
         }
      } else (a.lineComment || s.lineComment) && 0 != a.fullLines && l.lineComment(e, i, a)
   }), e.defineExtension("uncomment", function(e, i, a) {
      a || (a = t);
      var l, s = this, c = o(s, e), u = Math.min(0 != i.ch || i.line == e.line ? i.line : i.line - 1, s.lastLine()),
         d = Math.min(e.line, u), f = a.lineComment || c.lineComment, h = [], p = null == a.padding ? " " : a.padding;
      e:if (f) {
         for (var m = d; m <= u; ++m) {
            var g = s.getLine(m), v = g.indexOf(f);
            if (v > -1 && !/comment/.test(s.getTokenTypeAt(r(m, v + 1))) && (v = -1), -1 == v && n.test(g)) break e;
            if (v > -1 && n.test(g.slice(0, v))) break e;
            h.push(g)
         }
         if (s.operation(function() {
            for (var e = d; e <= u; ++e) {
               var t = h[e - d], n = t.indexOf(f), i = n + f.length;
               n < 0 || (t.slice(i, i + p.length) == p && (i += p.length), l = !0, s.replaceRange("", r(e, n), r(e, i)))
            }
         }), l) return !0
      }
      var y = a.blockCommentStart || c.blockCommentStart, b = a.blockCommentEnd || c.blockCommentEnd;
      if (!y || !b) return !1;
      var w = a.blockCommentLead || c.blockCommentLead, x = s.getLine(d), k = x.indexOf(y);
      if (-1 == k) return !1;
      var C = u == d ? x : s.getLine(u), S = C.indexOf(b, u == d ? k + y.length : 0), T = r(d, k + 1), L = r(u, S + 1);
      if (-1 == S || !/comment/.test(s.getTokenTypeAt(T)) || !/comment/.test(s.getTokenTypeAt(L)) || s.getRange(T, L, "\n").indexOf(b) > -1) return !1;
      var M = x.lastIndexOf(y, e.ch), _ = -1 == M ? -1 : x.slice(0, e.ch).indexOf(b, M + y.length);
      if (-1 != M && -1 != _ && _ + b.length != e.ch) return !1;
      _ = C.indexOf(b, i.ch);
      var O = C.slice(i.ch).lastIndexOf(y, _ - i.ch);
      return M = -1 == _ || -1 == O ? -1 : i.ch + O, (-1 == _ || -1 == M || M == i.ch) && (s.operation(function() {
         s.replaceRange("", r(u, S - (p && C.slice(S - p.length, S) == p ? p.length : 0)), r(u, S + b.length));
         var e = k + y.length;
         if (p && x.slice(e, e + p.length) == p && (e += p.length), s.replaceRange("", r(d, k), r(d, e)), w) for (var t = d + 1; t <= u; ++t) {
            var i = s.getLine(t), o = i.indexOf(w);
            if (-1 != o && !n.test(i.slice(0, o))) {
               var a = o + w.length;
               p && i.slice(a, a + p.length) == p && (a += p.length), s.replaceRange("", r(t, o), r(t, a))
            }
         }
      }), !0)
   })
}, cm.addon.closebrackets = function(e) {
   var t = {pairs: "()[]{}''\"\"", closeBefore: ")]}'\":;>", triples: "", explode: "[]{}"}, n = e.Pos;

   function r(e, n) {
      return "pairs" == n && "string" == typeof e ? e : "object" == typeof e && null != e[n] ? e[n] : t[n]
   }

   e.defineOption("autoCloseBrackets", !1, function(t, n, a) {
      a && a != e.Init && (t.removeKeyMap(i), t.state.closeBrackets = null), n && (o(r(n, "pairs")), t.state.closeBrackets = n, t.addKeyMap(i))
   });
   var i = {
      Backspace: function(t) {
         var i = l(t);
         if (!i || t.getOption("disableInput")) return e.Pass;
         for (var o = r(i, "pairs"), a = t.listSelections(), c = 0; c < a.length; c++) {
            if (!a[c].empty()) return e.Pass;
            var u = s(t, a[c].head);
            if (!u || o.indexOf(u) % 2 != 0) return e.Pass
         }
         for (var c = a.length - 1; c >= 0; c--) {
            var d = a[c].head;
            t.replaceRange("", n(d.line, d.ch - 1), n(d.line, d.ch + 1), "+delete")
         }
      }, Enter: function(t) {
         var n = l(t), i = n && r(n, "explode");
         if (!i || t.getOption("disableInput")) return e.Pass;
         for (var o = t.listSelections(), a = 0; a < o.length; a++) {
            if (!o[a].empty()) return e.Pass;
            var c = s(t, o[a].head);
            if (!c || i.indexOf(c) % 2 != 0) return e.Pass
         }
         t.operation(function() {
            var e = t.lineSeparator() || "\n";
            t.replaceSelection(e + e, null), t.execCommand("goCharLeft"), o = t.listSelections();
            for (var n = 0; n < o.length; n++) {
               var r = o[n].head.line;
               t.indentLine(r, null, !0), t.indentLine(r + 1, null, !0)
            }
         })
      }
   };

   function o(e) {
      for (var t = 0; t < e.length; t++) {
         var n = e.charAt(t), r = "'" + n + "'";
         i[r] || (i[r] = a(n))
      }
   }

   function a(t) {
      return function(i) {
         return function(t, i) {
            var o = l(t);
            if (!o || t.getOption("disableInput")) return e.Pass;
            var a = r(o, "pairs"), s = a.indexOf(i);
            if (-1 == s) return e.Pass;
            for (var u, d = r(o, "closeBefore"), f = r(o, "triples"), h = a.charAt(s + 1) == i, p = t.listSelections(), m = s % 2 == 0, g = 0; g < p.length; g++) {
               var v, y = p[g], b = y.head, w = t.getRange(b, n(b.line, b.ch + 1));
               if (m && !y.empty()) v = "surround"; else if (!h && m || w != i) if (h && b.ch > 1 && f.indexOf(i) >= 0 && t.getRange(n(b.line, b.ch - 2), b) == i + i) {
                  if (b.ch > 2 && /\bstring/.test(t.getTokenTypeAt(n(b.line, b.ch - 2)))) return e.Pass;
                  v = "addFour"
               } else if (h) {
                  var x = 0 == b.ch ? " " : t.getRange(n(b.line, b.ch - 1), b);
                  if (e.isWordChar(w) || x == i || e.isWordChar(x)) return e.Pass;
                  v = "both"
               } else {
                  if (!m || !(0 === w.length || /\s/.test(w) || d.indexOf(w) > -1)) return e.Pass;
                  v = "both"
               } else v = h && c(t, b) ? "both" : f.indexOf(i) >= 0 && t.getRange(b, n(b.line, b.ch + 3)) == i + i + i ? "skipThree" : "skip";
               if (u) {
                  if (u != v) return e.Pass
               } else u = v
            }
            var k = s % 2 ? a.charAt(s - 1) : i, C = s % 2 ? i : a.charAt(s + 1);
            t.operation(function() {
               if ("skip" == u) t.execCommand("goCharRight"); else if ("skipThree" == u) for (var r = 0; r < 3; r++) t.execCommand("goCharRight"); else if ("surround" == u) {
                  for (var i = t.getSelections(), r = 0; r < i.length; r++) i[r] = k + i[r] + C;
                  t.replaceSelections(i, "around"), i = t.listSelections().slice();
                  for (var r = 0; r < i.length; r++) i[r] = (o = i[r], a = void 0, a = e.cmpPos(o.anchor, o.head) > 0, {
                     anchor: new n(o.anchor.line, o.anchor.ch + (a ? -1 : 1)),
                     head: new n(o.head.line, o.head.ch + (a ? 1 : -1))
                  });
                  t.setSelections(i)
               } else "both" == u ? (t.replaceSelection(k + C, null), t.triggerElectric(k + C), t.execCommand("goCharLeft")) : "addFour" == u && (t.replaceSelection(k + k + k + k, "before"), t.execCommand("goCharRight"));
               var o, a
            })
         }(i, t)
      }
   }

   function l(e) {
      var t = e.state.closeBrackets;
      return !t || t.override ? t : e.getModeAt(e.getCursor()).closeBrackets || t
   }

   function s(e, t) {
      var r = e.getRange(n(t.line, t.ch - 1), n(t.line, t.ch + 1));
      return 2 == r.length ? r : null
   }

   function c(e, t) {
      var r = e.getTokenAt(n(t.line, t.ch + 1));
      return /\bstring/.test(r.type) && r.start == t.ch && (0 == t.ch || !/\bstring/.test(e.getTokenTypeAt(t)))
   }

   o(t.pairs + "`")
}, cm.addon.closetag = function(e) {
   e.defineOption("autoCloseTags", !1, function(a, l, s) {
      if (s != e.Init && s && a.removeKeyMap("autoCloseTags"), l) {
         var c = {name: "autoCloseTags"};
         ("object" != typeof l || l.whenClosing) && (c["'/'"] = function(t) {
            return function(t) {
               return t.getOption("disableInput") ? e.Pass : r(t, !0)
            }(t)
         }), ("object" != typeof l || l.whenOpening) && (c["'>'"] = function(r) {
            return function(r) {
               if (r.getOption("disableInput")) return e.Pass;
               for (var a = r.listSelections(), l = [], s = r.getOption("autoCloseTags"), c = 0; c < a.length; c++) {
                  if (!a[c].empty()) return e.Pass;
                  var u = a[c].head, d = r.getTokenAt(u), f = e.innerMode(r.getMode(), d.state), h = f.state;
                  if ("xml" != f.mode.name || !h.tagName) return e.Pass;
                  var p = "html" == f.mode.configuration, m = "object" == typeof s && s.dontCloseTags || p && t,
                     g = "object" == typeof s && s.indentTags || p && n, v = h.tagName;
                  d.end > u.ch && (v = v.slice(0, v.length - d.end + u.ch));
                  var y = v.toLowerCase();
                  if (!v || "string" == d.type && (d.end != u.ch || !/[\"\']/.test(d.string.charAt(d.string.length - 1)) || 1 == d.string.length) || "tag" == d.type && "closeTag" == h.type || d.string.indexOf("/") == d.string.length - 1 || m && i(m, y) > -1 || o(r, v, u, h, !0)) return e.Pass;
                  var b = g && i(g, y) > -1;
                  l[c] = {
                     indent: b,
                     text: ">" + (b ? "\n\n" : "") + "</" + v + ">",
                     newPos: b ? e.Pos(u.line + 1, 0) : e.Pos(u.line, u.ch + 1)
                  }
               }
               for (var w = "object" == typeof s && s.dontIndentOnAutoClose, c = a.length - 1; c >= 0; c--) {
                  var x = l[c];
                  r.replaceRange(x.text, a[c].head, a[c].anchor, "+insert");
                  var k = r.listSelections().slice(0);
                  k[c] = {
                     head: x.newPos,
                     anchor: x.newPos
                  }, r.setSelections(k), !w && x.indent && (r.indentLine(x.newPos.line, null, !0), r.indentLine(x.newPos.line + 1, null, !0))
               }
            }(r)
         }), a.addKeyMap(c)
      }
   });
   var t = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"],
      n = ["applet", "blockquote", "body", "button", "div", "dl", "fieldset", "form", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "html", "iframe", "layer", "legend", "object", "ol", "p", "select", "table", "ul"];

   function r(t, n) {
      for (var r = t.listSelections(), i = [], a = n ? "/" : "</", l = t.getOption("autoCloseTags"), s = "object" == typeof l && l.dontIndentOnSlash, c = 0; c < r.length; c++) {
         if (!r[c].empty()) return e.Pass;
         var u, d = r[c].head, f = t.getTokenAt(d), h = e.innerMode(t.getMode(), f.state), p = h.state;
         if (n && ("string" == f.type || "<" != f.string.charAt(0) || f.start != d.ch - 1)) return e.Pass;
         if ("xml" != h.mode.name) if ("htmlmixed" == t.getMode().name && "javascript" == h.mode.name) u = a + "script"; else {
            if ("htmlmixed" != t.getMode().name || "css" != h.mode.name) return e.Pass;
            u = a + "style"
         } else {
            if (!p.context || !p.context.tagName || o(t, p.context.tagName, d, p)) return e.Pass;
            u = a + p.context.tagName
         }
         ">" != t.getLine(d.line).charAt(f.end) && (u += ">"), i[c] = u
      }
      if (t.replaceSelections(i), r = t.listSelections(), !s) for (c = 0; c < r.length; c++) (c == r.length - 1 || r[c].head.line < r[c + 1].head.line) && t.indentLine(r[c].head.line)
   }

   function i(e, t) {
      if (e.indexOf) return e.indexOf(t);
      for (var n = 0, r = e.length; n < r; ++n) if (e[n] == t) return n;
      return -1
   }

   function o(t, n, r, i, o) {
      if (!e.scanForClosingTag) return !1;
      var a = Math.min(t.lastLine() + 1, r.line + 500), l = e.scanForClosingTag(t, r, null, a);
      if (!l || l.tag != n) return !1;
      for (var s = i.context, c = o ? 1 : 0; s && s.tagName == n; s = s.prev) ++c;
      r = l.to;
      for (var u = 1; u < c; u++) {
         var d = e.scanForClosingTag(t, r, null, a);
         if (!d || d.tag != n) return !1;
         r = d.to
      }
      return !0
   }

   e.commands.closeTag = function(e) {
      return r(e)
   }
}, cm.addon.matchbrackets = function(e) {
   var t = /MSIE \d/.test(navigator.userAgent) && (null == document.documentMode || document.documentMode < 8),
      n = e.Pos, r = {"(": ")>", ")": "(<", "[": "]>", "]": "[<", "{": "}>", "}": "{<", "<": ">>", ">": "<<"};

   function i(e) {
      return e && e.bracketRegex || /[(){}[\]]/
   }

   function o(e, t, o) {
      var l = e.getLineHandle(t.line), s = t.ch - 1, c = o && o.afterCursor;
      null == c && (c = /(^| )cm-fat-cursor($| )/.test(e.getWrapperElement().className));
      var u = i(o),
         d = !c && s >= 0 && u.test(l.text.charAt(s)) && r[l.text.charAt(s)] || u.test(l.text.charAt(s + 1)) && r[l.text.charAt(++s)];
      if (!d) return null;
      var f = ">" == d.charAt(1) ? 1 : -1;
      if (o && o.strict && f > 0 != (s == t.ch)) return null;
      var h = e.getTokenTypeAt(n(t.line, s + 1)), p = a(e, n(t.line, s + (f > 0 ? 1 : 0)), f, h || null, o);
      return null == p ? null : {from: n(t.line, s), to: p && p.pos, match: p && p.ch == d.charAt(0), forward: f > 0}
   }

   function a(e, t, o, a, l) {
      for (var s = l && l.maxScanLineLength || 1e4, c = l && l.maxScanLines || 1e3, u = [], d = i(l), f = o > 0 ? Math.min(t.line + c, e.lastLine() + 1) : Math.max(e.firstLine() - 1, t.line - c), h = t.line; h != f; h += o) {
         var p = e.getLine(h);
         if (p) {
            var m = o > 0 ? 0 : p.length - 1, g = o > 0 ? p.length : -1;
            if (!(p.length > s)) for (h == t.line && (m = t.ch - (o < 0 ? 1 : 0)); m != g; m += o) {
               var v = p.charAt(m);
               if (d.test(v) && (void 0 === a || e.getTokenTypeAt(n(h, m + 1)) == a)) {
                  var y = r[v];
                  if (y && ">" == y.charAt(1) == o > 0) u.push(v); else {
                     if (!u.length) return {pos: n(h, m), ch: v};
                     u.pop()
                  }
               }
            }
         }
      }
      return h - o != (o > 0 ? e.lastLine() : e.firstLine()) && null
   }

   function l(e, r, i) {
      for (var a = e.state.matchBrackets.maxHighlightLineLength || 1e3, l = [], s = e.listSelections(), c = 0; c < s.length; c++) {
         var u = s[c].empty() && o(e, s[c].head, i);
         if (u && e.getLine(u.from.line).length <= a) {
            var d = u.match ? "CodeMirror-matchingbracket" : "CodeMirror-nonmatchingbracket";
            l.push(e.markText(u.from, n(u.from.line, u.from.ch + 1), {className: d})), u.to && e.getLine(u.to.line).length <= a && l.push(e.markText(u.to, n(u.to.line, u.to.ch + 1), {className: d}))
         }
      }
      if (l.length) {
         t && e.state.focused && e.focus();
         var f = function() {
            e.operation(function() {
               for (var e = 0; e < l.length; e++) l[e].clear()
            })
         };
         if (!r) return f;
         setTimeout(f, 800)
      }
   }

   function s(e) {
      e.operation(function() {
         e.state.matchBrackets.currentlyHighlighted && (e.state.matchBrackets.currentlyHighlighted(), e.state.matchBrackets.currentlyHighlighted = null), e.state.matchBrackets.currentlyHighlighted = l(e, !1, e.state.matchBrackets)
      })
   }

   e.defineOption("matchBrackets", !1, function(t, n, r) {
      r && r != e.Init && (t.off("cursorActivity", s), t.state.matchBrackets && t.state.matchBrackets.currentlyHighlighted && (t.state.matchBrackets.currentlyHighlighted(), t.state.matchBrackets.currentlyHighlighted = null)), n && (t.state.matchBrackets = "object" == typeof n ? n : {}, t.on("cursorActivity", s))
   }), e.defineExtension("matchBrackets", function() {
      l(this, !0)
   }), e.defineExtension("findMatchingBracket", function(e, t, n) {
      return (n || "boolean" == typeof t) && (n ? (n.strict = t, t = n) : t = t ? {strict: !0} : null), o(this, e, t)
   }), e.defineExtension("scanForBracket", function(e, t, n, r) {
      return a(this, e, t, n, r)
   })
}, cm.addon.matchtags = function(e) {
   "use strict";

   function t(e) {
      e.state.tagHit && e.state.tagHit.clear(), e.state.tagOther && e.state.tagOther.clear(), e.state.tagHit = e.state.tagOther = null
   }

   function n(n) {
      n.state.failedTagMatch = !1, n.operation(function() {
         if (t(n), !n.somethingSelected()) {
            var r = n.getCursor(), i = n.getViewport();
            i.from = Math.min(i.from, r.line), i.to = Math.max(r.line + 1, i.to);
            var o = e.findMatchingTag(n, r, i);
            if (o) {
               if (n.state.matchBothTags) {
                  var a = "open" == o.at ? o.open : o.close;
                  a && (n.state.tagHit = n.markText(a.from, a.to, {className: "CodeMirror-matchingtag"}))
               }
               var l = "close" == o.at ? o.open : o.close;
               l ? n.state.tagOther = n.markText(l.from, l.to, {className: "CodeMirror-matchingtag"}) : n.state.failedTagMatch = !0
            }
         }
      })
   }

   function r(e) {
      e.state.failedTagMatch && n(e)
   }

   e.defineOption("matchTags", !1, function(i, o, a) {
      a && a != e.Init && (i.off("cursorActivity", n), i.off("viewportChange", r), t(i)), o && (i.state.matchBothTags = "object" == typeof o && o.bothTags, i.on("cursorActivity", n), i.on("viewportChange", r), n(i))
   }), e.commands.toMatchingTag = function(t) {
      var n = e.findMatchingTag(t, t.getCursor());
      if (n) {
         var r = "close" == n.at ? n.open : n.close;
         r && t.extendSelection(r.to, r.from)
      }
   }
}, cm.addon.trailingspace = function(e) {
   e.defineOption("showTrailingSpace", !1, function(t, n, r) {
      r == e.Init && (r = !1), r && !n ? t.removeOverlay("trailingspace") : !r && n && t.addOverlay({
         token: function(e) {
            for (var t = e.string.length, n = t; n && /\s/.test(e.string.charAt(n - 1)); --n) ;
            return n > e.pos ? (e.pos = n, null) : (e.pos = t, "trailingspace")
         }, name: "trailingspace"
      })
   })
}, cm.addon["brace-fold"] = function(e) {
   "use strict";
   e.registerHelper("fold", "brace", function(t, n) {
      var r, i = n.line, o = t.getLine(i);

      function a(a) {
         for (var l = n.ch, s = 0; ;) {
            var c = l <= 0 ? -1 : o.lastIndexOf(a, l - 1);
            if (-1 != c) {
               if (1 == s && c < n.ch) break;
               if (r = t.getTokenTypeAt(e.Pos(i, c + 1)), !/^(comment|string)/.test(r)) return c + 1;
               l = c - 1
            } else {
               if (1 == s) break;
               s = 1, l = o.length
            }
         }
      }

      var l = "{", s = "}", c = a("{");
      if (null == c && (l = "[", s = "]", c = a("[")), null != c) {
         var u, d, f = 1, h = t.lastLine();
         e:for (var p = i; p <= h; ++p) for (var m = t.getLine(p), g = p == i ? c : 0; ;) {
            var v = m.indexOf(l, g), y = m.indexOf(s, g);
            if (v < 0 && (v = m.length), y < 0 && (y = m.length), (g = Math.min(v, y)) == m.length) break;
            if (t.getTokenTypeAt(e.Pos(p, g + 1)) == r) if (g == v) ++f; else if (!--f) {
               u = p, d = g;
               break e
            }
            ++g
         }
         if (null != u && i != u) return {from: e.Pos(i, c), to: e.Pos(u, d)}
      }
   }), e.registerHelper("fold", "import", function(t, n) {
      function r(n) {
         if (n < t.firstLine() || n > t.lastLine()) return null;
         var r = t.getTokenAt(e.Pos(n, 1));
         if (/\S/.test(r.string) || (r = t.getTokenAt(e.Pos(n, r.end + 1))), "keyword" != r.type || "import" != r.string) return null;
         for (var i = n, o = Math.min(t.lastLine(), n + 10); i <= o; ++i) {
            var a = t.getLine(i).indexOf(";");
            if (-1 != a) return {startCh: r.end, end: e.Pos(i, a)}
         }
      }

      var i, o = n.line, a = r(o);
      if (!a || r(o - 1) || (i = r(o - 2)) && i.end.line == o - 1) return null;
      for (var l = a.end; ;) {
         var s = r(l.line + 1);
         if (null == s) break;
         l = s.end
      }
      return {from: t.clipPos(e.Pos(o, a.startCh + 1)), to: l}
   }), e.registerHelper("fold", "include", function(t, n) {
      function r(n) {
         if (n < t.firstLine() || n > t.lastLine()) return null;
         var r = t.getTokenAt(e.Pos(n, 1));
         return /\S/.test(r.string) || (r = t.getTokenAt(e.Pos(n, r.end + 1))), "meta" == r.type && "#include" == r.string.slice(0, 8) ? r.start + 8 : void 0
      }

      var i = n.line, o = r(i);
      if (null == o || null != r(i - 1)) return null;
      for (var a = i; ;) {
         if (null == r(a + 1)) break;
         ++a
      }
      return {from: e.Pos(i, o + 1), to: t.clipPos(e.Pos(a))}
   })
}, cm.addon["comment-fold"] = function(e) {
   "use strict";
   e.registerGlobalHelper("fold", "comment", function(e) {
      return e.blockCommentStart && e.blockCommentEnd
   }, function(t, n) {
      var r = t.getModeAt(n), i = r.blockCommentStart, o = r.blockCommentEnd;
      if (i && o) {
         for (var a, l = n.line, s = t.getLine(l), c = n.ch, u = 0; ;) {
            var d = c <= 0 ? -1 : s.lastIndexOf(i, c - 1);
            if (-1 != d) {
               if (1 == u && d < n.ch) return;
               if (/comment/.test(t.getTokenTypeAt(e.Pos(l, d + 1))) && (0 == d || s.slice(d - o.length, d) == o || !/comment/.test(t.getTokenTypeAt(e.Pos(l, d))))) {
                  a = d + i.length;
                  break
               }
               c = d - 1
            } else {
               if (1 == u) return;
               u = 1, c = s.length
            }
         }
         var f, h, p = 1, m = t.lastLine();
         e:for (var g = l; g <= m; ++g) for (var v = t.getLine(g), y = g == l ? a : 0; ;) {
            var b = v.indexOf(i, y), w = v.indexOf(o, y);
            if (b < 0 && (b = v.length), w < 0 && (w = v.length), (y = Math.min(b, w)) == v.length) break;
            if (y == b) ++p; else if (!--p) {
               f = g, h = y;
               break e
            }
            ++y
         }
         if (null != f && (l != f || h != a)) return {from: e.Pos(l, a), to: e.Pos(f, h)}
      }
   })
}, cm.addon.foldcode = function(e) {
   "use strict";

   function t(t, n, i, o) {
      if (i && i.call) {
         var a = i;
         i = null
      } else a = r(t, i, "rangeFinder");
      "number" == typeof n && (n = e.Pos(n, 0));
      var l = r(t, i, "minFoldSize");

      function s(e) {
         var r = a(t, n);
         if (!r || r.to.line - r.from.line < l) return null;
         for (var i = t.findMarksAt(r.from), s = 0; s < i.length; ++s) if (i[s].__isFold && "fold" !== o) {
            if (!e) return null;
            r.cleared = !0, i[s].clear()
         }
         return r
      }

      var c = s(!0);
      if (r(t, i, "scanUp")) for (; !c && n.line > t.firstLine();) n = e.Pos(n.line - 1, 0), c = s(!1);
      if (c && !c.cleared && "unfold" !== o) {
         var u = function(e, t) {
            var n = r(e, t, "widget");
            if ("string" == typeof n) {
               var i = document.createTextNode(n);
               (n = document.createElement("span")).appendChild(i), n.className = "CodeMirror-foldmarker"
            } else n && (n = n.cloneNode(!0));
            return n
         }(t, i);
         e.on(u, "mousedown", function(t) {
            d.clear(), e.e_preventDefault(t)
         });
         var d = t.markText(c.from, c.to, {replacedWith: u, clearOnEnter: r(t, i, "clearOnEnter"), __isFold: !0});
         d.on("clear", function(n, r) {
            e.signal(t, "unfold", t, n, r)
         }), e.signal(t, "fold", t, c.from, c.to)
      }
   }

   e.newFoldFunction = function(e, n) {
      return function(r, i) {
         t(r, i, {rangeFinder: e, widget: n})
      }
   }, e.defineExtension("foldCode", function(e, n, r) {
      t(this, e, n, r)
   }), e.defineExtension("isFolded", function(e) {
      for (var t = this.findMarksAt(e), n = 0; n < t.length; ++n) if (t[n].__isFold) return !0
   }), e.commands.toggleFold = function(e) {
      e.foldCode(e.getCursor())
   }, e.commands.fold = function(e) {
      e.foldCode(e.getCursor(), null, "fold")
   }, e.commands.unfold = function(e) {
      e.foldCode(e.getCursor(), null, "unfold")
   }, e.commands.foldAll = function(t) {
      t.operation(function() {
         for (var n = t.firstLine(), r = t.lastLine(); n <= r; n++) t.foldCode(e.Pos(n, 0), null, "fold")
      })
   }, e.commands.unfoldAll = function(t) {
      t.operation(function() {
         for (var n = t.firstLine(), r = t.lastLine(); n <= r; n++) t.foldCode(e.Pos(n, 0), null, "unfold")
      })
   }, e.registerHelper("fold", "combine", function() {
      var e = Array.prototype.slice.call(arguments, 0);
      return function(t, n) {
         for (var r = 0; r < e.length; ++r) {
            var i = e[r](t, n);
            if (i) return i
         }
      }
   }), e.registerHelper("fold", "auto", function(e, t) {
      for (var n = e.getHelpers(t, "fold"), r = 0; r < n.length; r++) {
         var i = n[r](e, t);
         if (i) return i
      }
   });
   var n = {rangeFinder: e.fold.auto, widget: "↔", minFoldSize: 0, scanUp: !1, clearOnEnter: !0};

   function r(e, t, r) {
      if (t && void 0 !== t[r]) return t[r];
      var i = e.options.foldOptions;
      return i && void 0 !== i[r] ? i[r] : n[r]
   }

   e.defineOption("foldOptions", null), e.defineExtension("foldOption", function(e, t) {
      return r(this, e, t)
   })
}, cm.addon.foldgutter = function(e) {
   "use strict";
   e.defineOption("foldGutter", !1, function(t, r, i) {
      i && i != e.Init && (t.clearGutter(t.state.foldGutter.options.gutter), t.state.foldGutter = null, t.off("gutterClick", l), t.off("change", s), t.off("viewportChange", c), t.off("fold", u), t.off("unfold", u), t.off("swapDoc", s)), r && (t.state.foldGutter = new n(function(e) {
         !0 === e && (e = {});
         null == e.gutter && (e.gutter = "CodeMirror-foldgutter");
         null == e.indicatorOpen && (e.indicatorOpen = "CodeMirror-foldgutter-open");
         null == e.indicatorFolded && (e.indicatorFolded = "CodeMirror-foldgutter-folded");
         return e
      }(r)), a(t), t.on("gutterClick", l), t.on("change", s), t.on("viewportChange", c), t.on("fold", u), t.on("unfold", u), t.on("swapDoc", s))
   });
   var t = e.Pos;

   function n(e) {
      this.options = e, this.from = this.to = 0
   }

   function r(e, n) {
      for (var r = e.findMarks(t(n, 0), t(n + 1, 0)), i = 0; i < r.length; ++i) if (r[i].__isFold && r[i].find().from.line == n) return r[i]
   }

   function i(e) {
      if ("string" == typeof e) {
         var t = document.createElement("div");
         return t.className = e + " CodeMirror-guttermarker-subtle", t
      }
      return e.cloneNode(!0)
   }

   function o(e, n, o) {
      var a = e.state.foldGutter.options, l = n, s = e.foldOption(a, "minFoldSize"), c = e.foldOption(a, "rangeFinder");
      e.eachLine(n, o, function(n) {
         var o = null;
         if (r(e, l)) o = i(a.indicatorFolded); else {
            var u = t(l, 0), d = c && c(e, u);
            d && d.to.line - d.from.line >= s && (o = i(a.indicatorOpen))
         }
         e.setGutterMarker(n, a.gutter, o), ++l
      })
   }

   function a(e) {
      var t = e.getViewport(), n = e.state.foldGutter;
      n && (e.operation(function() {
         o(e, t.from, t.to)
      }), n.from = t.from, n.to = t.to)
   }

   function l(e, n, i) {
      var o = e.state.foldGutter;
      if (o) {
         var a = o.options;
         if (i == a.gutter) {
            var l = r(e, n);
            l ? l.clear() : e.foldCode(t(n, 0), a.rangeFinder)
         }
      }
   }

   function s(e) {
      var t = e.state.foldGutter;
      if (t) {
         var n = t.options;
         t.from = t.to = 0, clearTimeout(t.changeUpdate), t.changeUpdate = setTimeout(function() {
            a(e)
         }, n.foldOnChangeTimeSpan || 600)
      }
   }

   function c(e) {
      var t = e.state.foldGutter;
      if (t) {
         var n = t.options;
         clearTimeout(t.changeUpdate), t.changeUpdate = setTimeout(function() {
            var n = e.getViewport();
            t.from == t.to || n.from - t.to > 20 || t.from - n.to > 20 ? a(e) : e.operation(function() {
               n.from < t.from && (o(e, n.from, t.from), t.from = n.from), n.to > t.to && (o(e, t.to, n.to), t.to = n.to)
            })
         }, n.updateViewportTimeSpan || 400)
      }
   }

   function u(e, t) {
      var n = e.state.foldGutter;
      if (n) {
         var r = t.line;
         r >= n.from && r < n.to && o(e, r, r + 1)
      }
   }
}, cm.addon["indent-fold"] = function(e) {
   "use strict";

   function t(t, n) {
      var r = t.getLine(n), i = r.search(/\S/);
      return -1 == i || /\bcomment\b/.test(t.getTokenTypeAt(e.Pos(n, i + 1))) ? -1 : e.countColumn(r, null, t.getOption("tabSize"))
   }

   e.registerHelper("fold", "indent", function(n, r) {
      var i = t(n, r.line);
      if (!(i < 0)) {
         for (var o = null, a = r.line + 1, l = n.lastLine(); a <= l; ++a) {
            var s = t(n, a);
            if (-1 == s) ; else {
               if (!(s > i)) break;
               o = a
            }
         }
         return o ? {from: e.Pos(r.line, n.getLine(r.line).length), to: e.Pos(o, n.getLine(o).length)} : void 0
      }
   })
}, cm.addon["xml-fold"] = function(e) {
   "use strict";
   var t = e.Pos;

   function n(e, t) {
      return e.line - t.line || e.ch - t.ch
   }

   var r = "A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
      i = new RegExp("<(/?)([" + r + "][A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD-:.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*)", "g");

   function o(e, t, n, r) {
      this.line = t, this.ch = n, this.cm = e, this.text = e.getLine(t), this.min = r ? Math.max(r.from, e.firstLine()) : e.firstLine(), this.max = r ? Math.min(r.to - 1, e.lastLine()) : e.lastLine()
   }

   function a(e, n) {
      var r = e.cm.getTokenTypeAt(t(e.line, n));
      return r && /\btag\b/.test(r)
   }

   function l(e) {
      if (!(e.line >= e.max)) return e.ch = 0, e.text = e.cm.getLine(++e.line), !0
   }

   function s(e) {
      if (!(e.line <= e.min)) return e.text = e.cm.getLine(--e.line), e.ch = e.text.length, !0
   }

   function c(e) {
      for (; ;) {
         var t = e.text.indexOf(">", e.ch);
         if (-1 == t) {
            if (l(e)) continue;
            return
         }
         if (a(e, t + 1)) {
            var n = e.text.lastIndexOf("/", t), r = n > -1 && !/\S/.test(e.text.slice(n + 1, t));
            return e.ch = t + 1, r ? "selfClose" : "regular"
         }
         e.ch = t + 1
      }
   }

   function u(e) {
      for (; ;) {
         var t = e.ch ? e.text.lastIndexOf("<", e.ch - 1) : -1;
         if (-1 == t) {
            if (s(e)) continue;
            return
         }
         if (a(e, t + 1)) {
            i.lastIndex = t, e.ch = t;
            var n = i.exec(e.text);
            if (n && n.index == t) return n
         } else e.ch = t
      }
   }

   function d(e) {
      for (; ;) {
         i.lastIndex = e.ch;
         var t = i.exec(e.text);
         if (!t) {
            if (l(e)) continue;
            return
         }
         if (a(e, t.index + 1)) return e.ch = t.index + t[0].length, t;
         e.ch = t.index + 1
      }
   }

   function f(e) {
      for (; ;) {
         var t = e.ch ? e.text.lastIndexOf(">", e.ch - 1) : -1;
         if (-1 == t) {
            if (s(e)) continue;
            return
         }
         if (a(e, t + 1)) {
            var n = e.text.lastIndexOf("/", t), r = n > -1 && !/\S/.test(e.text.slice(n + 1, t));
            return e.ch = t + 1, r ? "selfClose" : "regular"
         }
         e.ch = t
      }
   }

   function h(e, n) {
      for (var r = []; ;) {
         var i, o = d(e), a = e.line, l = e.ch - (o ? o[0].length : 0);
         if (!o || !(i = c(e))) return;
         if ("selfClose" != i) if (o[1]) {
            for (var s = r.length - 1; s >= 0; --s) if (r[s] == o[2]) {
               r.length = s;
               break
            }
            if (s < 0 && (!n || n == o[2])) return {tag: o[2], from: t(a, l), to: t(e.line, e.ch)}
         } else r.push(o[2])
      }
   }

   function p(e, n) {
      for (var r = []; ;) {
         var i = f(e);
         if (!i) return;
         if ("selfClose" != i) {
            var o = e.line, a = e.ch, l = u(e);
            if (!l) return;
            if (l[1]) r.push(l[2]); else {
               for (var s = r.length - 1; s >= 0; --s) if (r[s] == l[2]) {
                  r.length = s;
                  break
               }
               if (s < 0 && (!n || n == l[2])) return {tag: l[2], from: t(e.line, e.ch), to: t(o, a)}
            }
         } else u(e)
      }
   }

   e.registerHelper("fold", "xml", function(e, r) {
      for (var i = new o(e, r.line, 0); ;) {
         var a = d(i);
         if (!a || i.line != r.line) return;
         var l = c(i);
         if (!l) return;
         if (!a[1] && "selfClose" != l) {
            var s = t(i.line, i.ch), u = h(i, a[2]);
            return u && n(u.from, s) > 0 ? {from: s, to: u.from} : null
         }
      }
   }), e.findMatchingTag = function(e, r, i) {
      var a = new o(e, r.line, r.ch, i);
      if (-1 != a.text.indexOf(">") || -1 != a.text.indexOf("<")) {
         var l = c(a), s = l && t(a.line, a.ch), d = l && u(a);
         if (l && d && !(n(a, r) > 0)) {
            var f = {from: t(a.line, a.ch), to: s, tag: d[2]};
            return "selfClose" == l ? {open: f, close: null, at: "open"} : d[1] ? {
               open: p(a, d[2]),
               close: f,
               at: "close"
            } : {open: f, close: h(a = new o(e, s.line, s.ch, i), d[2]), at: "open"}
         }
      }
   }, e.findEnclosingTag = function(e, t, n, r) {
      for (var i = new o(e, t.line, t.ch, n); ;) {
         var a = p(i, r);
         if (!a) break;
         var l = h(new o(e, t.line, t.ch, n), a.tag);
         if (l) return {open: a, close: l}
      }
   }, e.scanForClosingTag = function(e, t, n, r) {
      return h(new o(e, t.line, t.ch, r ? {from: 0, to: r} : null), n)
   }
}, cm.addon["anyword-hint"] = function(e) {
   "use strict";
   var t = /[\w$]+/;
   e.registerHelper("hint", "anyword", function(n, r) {
      for (var i = r && r.word || t, o = r && r.range || 500, a = n.getCursor(), l = n.getLine(a.line), s = a.ch, c = s; c && i.test(l.charAt(c - 1));) --c;
      for (var u = c != s && l.slice(c, s), d = r && r.list || [], f = {}, h = new RegExp(i.source, "g"), p = -1; p <= 1; p += 2) for (var m = a.line, g = Math.min(Math.max(m + p * o, n.firstLine()), n.lastLine()) + p; m != g; m += p) for (var v, y = n.getLine(m); v = h.exec(y);) m == a.line && v[0] === u || u && 0 != v[0].lastIndexOf(u, 0) || Object.prototype.hasOwnProperty.call(f, v[0]) || (f[v[0]] = !0, d.push(v[0]));
      return {list: d, from: e.Pos(a.line, c), to: e.Pos(a.line, s)}
   })
}, cm.addon["css-hint"] = function(e) {
   "use strict";
   var t = {
      link: 1,
      visited: 1,
      active: 1,
      hover: 1,
      focus: 1,
      "first-letter": 1,
      "first-line": 1,
      "first-child": 1,
      before: 1,
      after: 1,
      lang: 1
   };
   e.registerHelper("hint", "css", function(n) {
      var r = n.getCursor(), i = n.getTokenAt(r), o = e.innerMode(n.getMode(), i.state);
      if ("css" == o.mode.name) {
         if ("keyword" == i.type && 0 == "!important".indexOf(i.string)) return {
            list: ["!important"],
            from: e.Pos(r.line, i.start),
            to: e.Pos(r.line, i.end)
         };
         var a = i.start, l = r.ch, s = i.string.slice(0, l - a);
         /[^\w$_-]/.test(s) && (s = "", a = l = r.ch);
         var c = e.resolveMode("text/css"), u = [], d = o.state.state;
         return "pseudo" == d || "variable-3" == i.type ? f(t) : "block" == d || "maybeprop" == d ? f(c.propertyKeywords) : "prop" == d || "parens" == d || "at" == d || "params" == d ? (f(c.valueKeywords), f(c.colorKeywords)) : "media" != d && "media_parens" != d || (f(c.mediaTypes), f(c.mediaFeatures)), u.length ? {
            list: u,
            from: e.Pos(r.line, a),
            to: e.Pos(r.line, l)
         } : void 0
      }

      function f(e) {
         for (var t in e) s && 0 != t.lastIndexOf(s, 0) || u.push(t)
      }
   })
}, cm.addon["html-hint"] = function(e) {
   "use strict";
   var t = "ab aa af ak sq am ar an hy as av ae ay az bm ba eu be bn bh bi bs br bg my ca ch ce ny zh cv kw co cr hr cs da dv nl dz en eo et ee fo fj fi fr ff gl ka de el gn gu ht ha he hz hi ho hu ia id ie ga ig ik io is it iu ja jv kl kn kr ks kk km ki rw ky kv kg ko ku kj la lb lg li ln lo lt lu lv gv mk mg ms ml mt mi mr mh mn na nv nb nd ne ng nn no ii nr oc oj cu om or os pa pi fa pl ps pt qu rm rn ro ru sa sc sd se sm sg sr gd sn si sk sl so st es su sw ss sv ta te tg th ti bo tk tl tn to tr ts tt tw ty ug uk ur uz ve vi vo wa cy wo fy xh yi yo za zu".split(" "),
      n = ["_blank", "_self", "_top", "_parent"], r = ["ascii", "utf-8", "utf-16", "latin1", "latin1"],
      i = ["get", "post", "put", "delete"],
      o = ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"],
      a = ["all", "screen", "print", "embossed", "braille", "handheld", "print", "projection", "screen", "tty", "tv", "speech", "3d-glasses", "resolution [>][<][=] [X]", "device-aspect-ratio: X/Y", "orientation:portrait", "orientation:landscape", "device-height: [X]", "device-width: [X]"],
      l = {attrs: {}}, s = {
         a: {attrs: {href: null, ping: null, type: null, media: a, target: n, hreflang: t}},
         abbr: l,
         acronym: l,
         address: l,
         applet: l,
         area: {
            attrs: {
               alt: null,
               coords: null,
               href: null,
               target: null,
               ping: null,
               media: a,
               hreflang: t,
               type: null,
               shape: ["default", "rect", "circle", "poly"]
            }
         },
         article: l,
         aside: l,
         audio: {
            attrs: {
               src: null,
               mediagroup: null,
               crossorigin: ["anonymous", "use-credentials"],
               preload: ["none", "metadata", "auto"],
               autoplay: ["", "autoplay"],
               loop: ["", "loop"],
               controls: ["", "controls"]
            }
         },
         b: l,
         base: {attrs: {href: null, target: n}},
         basefont: l,
         bdi: l,
         bdo: l,
         big: l,
         blockquote: {attrs: {cite: null}},
         body: l,
         br: l,
         button: {
            attrs: {
               form: null,
               formaction: null,
               name: null,
               value: null,
               autofocus: ["", "autofocus"],
               disabled: ["", "autofocus"],
               formenctype: o,
               formmethod: i,
               formnovalidate: ["", "novalidate"],
               formtarget: n,
               type: ["submit", "reset", "button"]
            }
         },
         canvas: {attrs: {width: null, height: null}},
         caption: l,
         center: l,
         cite: l,
         code: l,
         col: {attrs: {span: null}},
         colgroup: {attrs: {span: null}},
         command: {
            attrs: {
               type: ["command", "checkbox", "radio"],
               label: null,
               icon: null,
               radiogroup: null,
               command: null,
               title: null,
               disabled: ["", "disabled"],
               checked: ["", "checked"]
            }
         },
         data: {attrs: {value: null}},
         datagrid: {attrs: {disabled: ["", "disabled"], multiple: ["", "multiple"]}},
         datalist: {attrs: {data: null}},
         dd: l,
         del: {attrs: {cite: null, datetime: null}},
         details: {attrs: {open: ["", "open"]}},
         dfn: l,
         dir: l,
         div: l,
         dl: l,
         dt: l,
         em: l,
         embed: {attrs: {src: null, type: null, width: null, height: null}},
         eventsource: {attrs: {src: null}},
         fieldset: {attrs: {disabled: ["", "disabled"], form: null, name: null}},
         figcaption: l,
         figure: l,
         font: l,
         footer: l,
         form: {
            attrs: {
               action: null,
               name: null,
               "accept-charset": r,
               autocomplete: ["on", "off"],
               enctype: o,
               method: i,
               novalidate: ["", "novalidate"],
               target: n
            }
         },
         frame: l,
         frameset: l,
         h1: l,
         h2: l,
         h3: l,
         h4: l,
         h5: l,
         h6: l,
         head: {attrs: {}, children: ["title", "base", "link", "style", "meta", "script", "noscript", "command"]},
         header: l,
         hgroup: l,
         hr: l,
         html: {attrs: {manifest: null}, children: ["head", "body"]},
         i: l,
         iframe: {
            attrs: {
               src: null,
               srcdoc: null,
               name: null,
               width: null,
               height: null,
               sandbox: ["allow-top-navigation", "allow-same-origin", "allow-forms", "allow-scripts"],
               seamless: ["", "seamless"]
            }
         },
         img: {
            attrs: {
               alt: null,
               src: null,
               ismap: null,
               usemap: null,
               width: null,
               height: null,
               crossorigin: ["anonymous", "use-credentials"]
            }
         },
         input: {
            attrs: {
               alt: null,
               dirname: null,
               form: null,
               formaction: null,
               height: null,
               list: null,
               max: null,
               maxlength: null,
               min: null,
               name: null,
               pattern: null,
               placeholder: null,
               size: null,
               src: null,
               step: null,
               value: null,
               width: null,
               accept: ["audio/*", "video/*", "image/*"],
               autocomplete: ["on", "off"],
               autofocus: ["", "autofocus"],
               checked: ["", "checked"],
               disabled: ["", "disabled"],
               formenctype: o,
               formmethod: i,
               formnovalidate: ["", "novalidate"],
               formtarget: n,
               multiple: ["", "multiple"],
               readonly: ["", "readonly"],
               required: ["", "required"],
               type: ["hidden", "text", "search", "tel", "url", "email", "password", "datetime", "date", "month", "week", "time", "datetime-local", "number", "range", "color", "checkbox", "radio", "file", "submit", "image", "reset", "button"]
            }
         },
         ins: {attrs: {cite: null, datetime: null}},
         kbd: l,
         keygen: {
            attrs: {
               challenge: null,
               form: null,
               name: null,
               autofocus: ["", "autofocus"],
               disabled: ["", "disabled"],
               keytype: ["RSA"]
            }
         },
         label: {attrs: {for: null, form: null}},
         legend: l,
         li: {attrs: {value: null}},
         link: {
            attrs: {
               href: null,
               type: null,
               hreflang: t,
               media: a,
               sizes: ["all", "16x16", "16x16 32x32", "16x16 32x32 64x64"]
            }
         },
         map: {attrs: {name: null}},
         mark: l,
         menu: {attrs: {label: null, type: ["list", "context", "toolbar"]}},
         meta: {
            attrs: {
               content: null,
               charset: r,
               name: ["viewport", "application-name", "author", "description", "generator", "keywords"],
               "http-equiv": ["content-language", "content-type", "default-style", "refresh"]
            }
         },
         meter: {attrs: {value: null, min: null, low: null, high: null, max: null, optimum: null}},
         nav: l,
         noframes: l,
         noscript: l,
         object: {
            attrs: {
               data: null,
               type: null,
               name: null,
               usemap: null,
               form: null,
               width: null,
               height: null,
               typemustmatch: ["", "typemustmatch"]
            }
         },
         ol: {attrs: {reversed: ["", "reversed"], start: null, type: ["1", "a", "A", "i", "I"]}},
         optgroup: {attrs: {disabled: ["", "disabled"], label: null}},
         option: {attrs: {disabled: ["", "disabled"], label: null, selected: ["", "selected"], value: null}},
         output: {attrs: {for: null, form: null, name: null}},
         p: l,
         param: {attrs: {name: null, value: null}},
         pre: l,
         progress: {attrs: {value: null, max: null}},
         q: {attrs: {cite: null}},
         rp: l,
         rt: l,
         ruby: l,
         s: l,
         samp: l,
         script: {attrs: {type: ["text/javascript"], src: null, async: ["", "async"], defer: ["", "defer"], charset: r}},
         section: l,
         select: {
            attrs: {
               form: null,
               name: null,
               size: null,
               autofocus: ["", "autofocus"],
               disabled: ["", "disabled"],
               multiple: ["", "multiple"]
            }
         },
         small: l,
         source: {attrs: {src: null, type: null, media: null}},
         span: l,
         strike: l,
         strong: l,
         style: {attrs: {type: ["text/css"], media: a, scoped: null}},
         sub: l,
         summary: l,
         sup: l,
         table: l,
         tbody: l,
         td: {attrs: {colspan: null, rowspan: null, headers: null}},
         textarea: {
            attrs: {
               dirname: null,
               form: null,
               maxlength: null,
               name: null,
               placeholder: null,
               rows: null,
               cols: null,
               autofocus: ["", "autofocus"],
               disabled: ["", "disabled"],
               readonly: ["", "readonly"],
               required: ["", "required"],
               wrap: ["soft", "hard"]
            }
         },
         tfoot: l,
         th: {attrs: {colspan: null, rowspan: null, headers: null, scope: ["row", "col", "rowgroup", "colgroup"]}},
         thead: l,
         time: {attrs: {datetime: null}},
         title: l,
         tr: l,
         track: {
            attrs: {
               src: null,
               label: null,
               default: null,
               kind: ["subtitles", "captions", "descriptions", "chapters", "metadata"],
               srclang: t
            }
         },
         tt: l,
         u: l,
         ul: l,
         var: l,
         video: {
            attrs: {
               src: null,
               poster: null,
               width: null,
               height: null,
               crossorigin: ["anonymous", "use-credentials"],
               preload: ["auto", "metadata", "none"],
               autoplay: ["", "autoplay"],
               mediagroup: ["movie"],
               muted: ["", "muted"],
               controls: ["", "controls"]
            }
         },
         wbr: l
      }, c = {
         accesskey: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
         class: null,
         contenteditable: ["true", "false"],
         contextmenu: null,
         dir: ["ltr", "rtl", "auto"],
         draggable: ["true", "false", "auto"],
         dropzone: ["copy", "move", "link", "string:", "file:"],
         hidden: ["hidden"],
         id: null,
         inert: ["inert"],
         itemid: null,
         itemprop: null,
         itemref: null,
         itemscope: ["itemscope"],
         itemtype: null,
         lang: ["en", "es"],
         spellcheck: ["true", "false"],
         autocorrect: ["true", "false"],
         autocapitalize: ["true", "false"],
         style: null,
         tabindex: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
         title: null,
         translate: ["yes", "no"],
         onclick: null,
         rel: ["stylesheet", "alternate", "author", "bookmark", "help", "license", "next", "nofollow", "noreferrer", "prefetch", "prev", "search", "tag"]
      };

   function u(e) {
      for (var t in c) c.hasOwnProperty(t) && (e.attrs[t] = c[t])
   }

   for (var d in u(l), s) s.hasOwnProperty(d) && s[d] != l && u(s[d]);
   e.htmlSchema = s, e.registerHelper("hint", "html", function(t, n) {
      var r = {schemaInfo: s};
      if (n) for (var i in n) r[i] = n[i];
      return e.hint.xml(t, r)
   })
}, cm.addon["javascript-hint"] = function(e) {
   var t = e.Pos;

   function n(e, t) {
      for (var n = 0, r = e.length; n < r; ++n) t(e[n])
   }

   function r(n, r, i, o) {
      var a = n.getCursor(), l = i(n, a);
      if (!/\b(?:string|comment)\b/.test(l.type)) {
         var s = e.innerMode(n.getMode(), l.state);
         if ("json" !== s.mode.helperType) {
            l.state = s.state, /^[\w$_]*$/.test(l.string) ? l.end > a.ch && (l.end = a.ch, l.string = l.string.slice(0, a.ch - l.start)) : l = {
               start: a.ch,
               end: a.ch,
               string: "",
               state: l.state,
               type: "." == l.string ? "property" : null
            };
            for (var c = l; "property" == c.type;) {
               if ("." != (c = i(n, t(a.line, c.start))).string) return;
               if (c = i(n, t(a.line, c.start)), !d) var d = [];
               d.push(c)
            }
            return {list: u(l, d, r, o), from: t(a.line, l.start), to: t(a.line, l.end)}
         }
      }
   }

   function i(e, t) {
      var n = e.getTokenAt(t);
      return t.ch == n.start + 1 && "." == n.string.charAt(0) ? (n.end = n.start, n.string = ".", n.type = "property") : /^\.[\w$_]*$/.test(n.string) && (n.type = "property", n.start++, n.string = n.string.replace(/\./, "")), n
   }

   e.registerHelper("hint", "javascript", function(e, t) {
      return r(e, s, function(e, t) {
         return e.getTokenAt(t)
      }, t)
   }), e.registerHelper("hint", "coffeescript", function(e, t) {
      return r(e, c, i, t)
   });
   var o = "charAt charCodeAt indexOf lastIndexOf substring substr slice trim trimLeft trimRight toUpperCase toLowerCase split concat match replace search".split(" "),
      a = "length concat join splice push pop shift unshift slice reverse sort indexOf lastIndexOf every some filter forEach map reduce reduceRight ".split(" "),
      l = "prototype apply call bind".split(" "),
      s = "break case catch class const continue debugger default delete do else export extends false finally for function if in import instanceof new null return super switch this throw true try typeof var void while with yield".split(" "),
      c = "and break catch class continue delete do else extends false finally for if in instanceof isnt new no not null of off on or return switch then throw true try typeof until void while with yes".split(" ");

   function u(e, t, r, i) {
      var s = [], c = e.string, u = i && i.globalScope || window;

      function d(e) {
         0 != e.lastIndexOf(c, 0) || function(e, t) {
            if (!Array.prototype.indexOf) {
               for (var n = e.length; n--;) if (e[n] === t) return !0;
               return !1
            }
            return -1 != e.indexOf(t)
         }(s, e) || s.push(e)
      }

      function f(e) {
         "string" == typeof e ? n(o, d) : e instanceof Array ? n(a, d) : e instanceof Function && n(l, d), function(e, t) {
            if (Object.getOwnPropertyNames && Object.getPrototypeOf) for (var n = e; n; n = Object.getPrototypeOf(n)) Object.getOwnPropertyNames(n).forEach(t); else for (var r in e) t(r)
         }(e, d)
      }

      if (t && t.length) {
         var h, p = t.pop();
         for (p.type && 0 === p.type.indexOf("variable") ? (i && i.additionalContext && (h = i.additionalContext[p.string]), i && !1 === i.useGlobalScope || (h = h || u[p.string])) : "string" == p.type ? h = "" : "atom" == p.type ? h = 1 : "function" == p.type && (null == u.jQuery || "$" != p.string && "jQuery" != p.string || "function" != typeof u.jQuery ? null != u._ && "_" == p.string && "function" == typeof u._ && (h = u._()) : h = u.jQuery()); null != h && t.length;) h = h[t.pop().string];
         null != h && f(h)
      } else {
         for (var m = e.state.localVars; m; m = m.next) d(m.name);
         for (m = e.state.globalVars; m; m = m.next) d(m.name);
         i && !1 === i.useGlobalScope || f(u), n(r, d)
      }
      return s
   }
}, cm.addon["show-hint"] = function(e) {
   "use strict";
   var t = "CodeMirror-hint", n = "CodeMirror-hint-active";

   function r(e, t) {
      this.cm = e, this.options = t, this.widget = null, this.debounce = 0, this.tick = 0, this.startPos = this.cm.getCursor("start"), this.startLen = this.cm.getLine(this.startPos.line).length - this.cm.getSelection().length;
      var n = this;
      e.on("cursorActivity", this.activityFunc = function() {
         n.cursorActivity()
      })
   }

   e.showHint = function(e, t, n) {
      if (!t) return e.showHint(n);
      n && n.async && (t.async = !0);
      var r = {hint: t};
      if (n) for (var i in n) r[i] = n[i];
      return e.showHint(r)
   }, e.defineExtension("showHint", function(t) {
      t = function(e, t, n) {
         var r = e.options.hintOptions, i = {};
         for (var o in u) i[o] = u[o];
         if (r) for (var o in r) void 0 !== r[o] && (i[o] = r[o]);
         if (n) for (var o in n) void 0 !== n[o] && (i[o] = n[o]);
         i.hint.resolve && (i.hint = i.hint.resolve(e, t));
         return i
      }(this, this.getCursor("start"), t);
      var n = this.listSelections();
      if (!(n.length > 1)) {
         if (this.somethingSelected()) {
            if (!t.hint.supportsSelection) return;
            for (var i = 0; i < n.length; i++) if (n[i].head.line != n[i].anchor.line) return
         }
         this.state.completionActive && this.state.completionActive.close();
         var o = this.state.completionActive = new r(this, t);
         o.options.hint && (e.signal(this, "startCompletion", this), o.update(!0))
      }
   }), e.defineExtension("closeHint", function() {
      this.state.completionActive && this.state.completionActive.close()
   });
   var i = window.requestAnimationFrame || function(e) {
      return setTimeout(e, 1e3 / 60)
   }, o = window.cancelAnimationFrame || clearTimeout;

   function a(e) {
      return "string" == typeof e ? e : e.text
   }

   function l(e, t) {
      for (; t && t != e;) {
         if ("LI" === t.nodeName.toUpperCase() && t.parentNode == e) return t;
         t = t.parentNode
      }
   }

   function s(r, i) {
      this.completion = r, this.data = i, this.picked = !1;
      var o = this, s = r.cm, c = s.getInputField().ownerDocument, u = c.defaultView || c.parentWindow,
         d = this.hints = c.createElement("ul"), f = r.cm.options.theme;
      d.className = "CodeMirror-hints " + f, this.selectedHint = i.selectedHint || 0;
      for (var h = i.list, p = 0; p < h.length; ++p) {
         var m = d.appendChild(c.createElement("li")), g = h[p], v = t + (p != this.selectedHint ? "" : " " + n);
         null != g.className && (v = g.className + " " + v), m.className = v, g.render ? g.render(m, i, g) : m.appendChild(c.createTextNode(g.displayText || a(g))), m.hintId = p
      }
      var y = s.cursorCoords(r.options.alignWithWord ? i.from : null), b = y.left, w = y.bottom, x = !0;
      d.style.left = b + "px", d.style.top = w + "px";
      var k = u.innerWidth || Math.max(c.body.offsetWidth, c.documentElement.offsetWidth),
         C = u.innerHeight || Math.max(c.body.offsetHeight, c.documentElement.offsetHeight);
      (r.options.container || c.body).appendChild(d);
      var S = d.getBoundingClientRect(), T = S.bottom - C, L = d.scrollHeight > d.clientHeight + 1,
         M = s.getScrollInfo();
      if (T > 0) {
         var _ = S.bottom - S.top;
         if (y.top - (y.bottom - S.top) - _ > 0) d.style.top = (w = y.top - _) + "px", x = !1; else if (_ > C) {
            d.style.height = C - 5 + "px", d.style.top = (w = y.bottom - S.top) + "px";
            var O = s.getCursor();
            i.from.ch != O.ch && (y = s.cursorCoords(O), d.style.left = (b = y.left) + "px", S = d.getBoundingClientRect())
         }
      }
      var A, N = S.right - k;
      if (N > 0 && (S.right - S.left > k && (d.style.width = k - 5 + "px", N -= S.right - S.left - k), d.style.left = (b = y.left - N) + "px"), L) for (var z = d.firstChild; z; z = z.nextSibling) z.style.paddingRight = s.display.nativeBarWidth + "px";
      (s.addKeyMap(this.keyMap = function(e, t) {
         var n = {
            Up: function() {
               t.moveFocus(-1)
            }, Down: function() {
               t.moveFocus(1)
            }, PageUp: function() {
               t.moveFocus(1 - t.menuSize(), !0)
            }, PageDown: function() {
               t.moveFocus(t.menuSize() - 1, !0)
            }, Home: function() {
               t.setFocus(0)
            }, End: function() {
               t.setFocus(t.length - 1)
            }, Enter: t.pick, Tab: t.pick, Esc: t.close
         };
         /Mac/.test(navigator.platform) && (n["Ctrl-P"] = function() {
            t.moveFocus(-1)
         }, n["Ctrl-N"] = function() {
            t.moveFocus(1)
         });
         var r = e.options.customKeys, i = r ? {} : n;

         function o(e, r) {
            var o;
            o = "string" != typeof r ? function(e) {
               return r(e, t)
            } : n.hasOwnProperty(r) ? n[r] : r, i[e] = o
         }

         if (r) for (var a in r) r.hasOwnProperty(a) && o(a, r[a]);
         var l = e.options.extraKeys;
         if (l) for (var a in l) l.hasOwnProperty(a) && o(a, l[a]);
         return i
      }(r, {
         moveFocus: function(e, t) {
            o.changeActive(o.selectedHint + e, t)
         }, setFocus: function(e) {
            o.changeActive(e)
         }, menuSize: function() {
            return o.screenAmount()
         }, length: h.length, close: function() {
            r.close()
         }, pick: function() {
            o.pick()
         }, data: i
      })), r.options.closeOnUnfocus) && (s.on("blur", this.onBlur = function() {
         A = setTimeout(function() {
            r.close()
         }, 100)
      }), s.on("focus", this.onFocus = function() {
         clearTimeout(A)
      }));
      return s.on("scroll", this.onScroll = function() {
         var e = s.getScrollInfo(), t = s.getWrapperElement().getBoundingClientRect(), n = w + M.top - e.top,
            i = n - (u.pageYOffset || (c.documentElement || c.body).scrollTop);
         if (x || (i += d.offsetHeight), i <= t.top || i >= t.bottom) return r.close();
         d.style.top = n + "px", d.style.left = b + M.left - e.left + "px"
      }), e.on(d, "dblclick", function(e) {
         var t = l(d, e.target || e.srcElement);
         t && null != t.hintId && (o.changeActive(t.hintId), o.pick())
      }), e.on(d, "click", function(e) {
         var t = l(d, e.target || e.srcElement);
         t && null != t.hintId && (o.changeActive(t.hintId), r.options.completeOnSingleClick && o.pick())
      }), e.on(d, "mousedown", function() {
         setTimeout(function() {
            s.focus()
         }, 20)
      }), e.signal(i, "select", h[this.selectedHint], d.childNodes[this.selectedHint]), !0
   }

   function c(e, t, n, r) {
      if (e.async) e(t, r, n); else {
         var i = e(t, n);
         i && i.then ? i.then(r) : r(i)
      }
   }

   r.prototype = {
      close: function() {
         this.active() && (this.cm.state.completionActive = null, this.tick = null, this.cm.off("cursorActivity", this.activityFunc), this.widget && this.data && e.signal(this.data, "close"), this.widget && this.widget.close(), e.signal(this.cm, "endCompletion", this.cm))
      }, active: function() {
         return this.cm.state.completionActive == this
      }, pick: function(t, n) {
         var r = t.list[n];
         r.hint ? r.hint(this.cm, t, r) : this.cm.replaceRange(a(r), r.from || t.from, r.to || t.to, "complete"), e.signal(t, "pick", r), this.close()
      }, cursorActivity: function() {
         this.debounce && (o(this.debounce), this.debounce = 0);
         var e = this.cm.getCursor(), t = this.cm.getLine(e.line);
         if (e.line != this.startPos.line || t.length - e.ch != this.startLen - this.startPos.ch || e.ch < this.startPos.ch || this.cm.somethingSelected() || !e.ch || this.options.closeCharacters.test(t.charAt(e.ch - 1))) this.close(); else {
            var n = this;
            this.debounce = i(function() {
               n.update()
            }), this.widget && this.widget.disable()
         }
      }, update: function(e) {
         if (null != this.tick) {
            var t = this, n = ++this.tick;
            c(this.options.hint, this.cm, this.options, function(r) {
               t.tick == n && t.finishUpdate(r, e)
            })
         }
      }, finishUpdate: function(t, n) {
         this.data && e.signal(this.data, "update");
         var r = this.widget && this.widget.picked || n && this.options.completeSingle;
         this.widget && this.widget.close(), this.data = t, t && t.list.length && (r && 1 == t.list.length ? this.pick(t, 0) : (this.widget = new s(this, t), e.signal(t, "shown")))
      }
   }, s.prototype = {
      close: function() {
         if (this.completion.widget == this) {
            this.completion.widget = null, this.hints.parentNode.removeChild(this.hints), this.completion.cm.removeKeyMap(this.keyMap);
            var e = this.completion.cm;
            this.completion.options.closeOnUnfocus && (e.off("blur", this.onBlur), e.off("focus", this.onFocus)), e.off("scroll", this.onScroll)
         }
      }, disable: function() {
         this.completion.cm.removeKeyMap(this.keyMap);
         var e = this;
         this.keyMap = {
            Enter: function() {
               e.picked = !0
            }
         }, this.completion.cm.addKeyMap(this.keyMap)
      }, pick: function() {
         this.completion.pick(this.data, this.selectedHint)
      }, changeActive: function(t, r) {
         if (t >= this.data.list.length ? t = r ? this.data.list.length - 1 : 0 : t < 0 && (t = r ? 0 : this.data.list.length - 1), this.selectedHint != t) {
            var i = this.hints.childNodes[this.selectedHint];
            i && (i.className = i.className.replace(" " + n, "")), (i = this.hints.childNodes[this.selectedHint = t]).className += " " + n, i.offsetTop < this.hints.scrollTop ? this.hints.scrollTop = i.offsetTop - 3 : i.offsetTop + i.offsetHeight > this.hints.scrollTop + this.hints.clientHeight && (this.hints.scrollTop = i.offsetTop + i.offsetHeight - this.hints.clientHeight + 3), e.signal(this.data, "select", this.data.list[this.selectedHint], i)
         }
      }, screenAmount: function() {
         return Math.floor(this.hints.clientHeight / this.hints.firstChild.offsetHeight) || 1
      }
   }, e.registerHelper("hint", "auto", {
      resolve: function(t, n) {
         var r, i = t.getHelpers(n, "hint");
         if (i.length) {
            var o = function(e, t, n) {
               var r = function(e, t) {
                  if (!e.somethingSelected()) return t;
                  for (var n = [], r = 0; r < t.length; r++) t[r].supportsSelection && n.push(t[r]);
                  return n
               }(e, i);
               !function i(o) {
                  if (o == r.length) return t(null);
                  c(r[o], e, n, function(e) {
                     e && e.list.length > 0 ? t(e) : i(o + 1)
                  })
               }(0)
            };
            return o.async = !0, o.supportsSelection = !0, o
         }
         return (r = t.getHelper(t.getCursor(), "hintWords")) ? function(t) {
            return e.hint.fromList(t, {words: r})
         } : e.hint.anyword ? function(t, n) {
            return e.hint.anyword(t, n)
         } : function() {
         }
      }
   }), e.registerHelper("hint", "fromList", function(t, n) {
      var r, i = t.getCursor(), o = t.getTokenAt(i), a = e.Pos(i.line, o.start), l = i;
      o.start < i.ch && /\w/.test(o.string.charAt(i.ch - o.start - 1)) ? r = o.string.substr(0, i.ch - o.start) : (r = "", a = i);
      for (var s = [], c = 0; c < n.words.length; c++) {
         var u = n.words[c];
         u.slice(0, r.length) == r && s.push(u)
      }
      if (s.length) return {list: s, from: a, to: l}
   }), e.commands.autocomplete = e.showHint;
   var u = {
      hint: e.hint.auto,
      completeSingle: !0,
      alignWithWord: !0,
      closeCharacters: /[\s()\[\]{};:>,]/,
      closeOnUnfocus: !0,
      completeOnSingleClick: !0,
      container: null,
      customKeys: null,
      extraKeys: null
   };
   e.defineOption("hintOptions", null)
}, cm.addon["sql-hint"] = function(e) {
   "use strict";
   var t, n, r, i, o = {QUERY_DIV: ";", ALIAS_KEYWORD: "AS"}, a = e.Pos, l = e.cmpPos;

   function s(e) {
      return "[object Array]" == Object.prototype.toString.call(e)
   }

   function c(e) {
      return "string" == typeof e ? e : e.text
   }

   function u(e, t) {
      return s(t) && (t = {columns: t}), t.text || (t.text = e), t
   }

   function d(e) {
      return t[e.toUpperCase()]
   }

   function f(e) {
      var t = {};
      for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
      return t
   }

   function h(e, t) {
      var n = e.length, r = c(t).substr(0, n);
      return e.toUpperCase() === r.toUpperCase()
   }

   function p(e, t, n, r) {
      if (s(n)) for (var i = 0; i < n.length; i++) h(t, n[i]) && e.push(r(n[i])); else for (var o in n) if (n.hasOwnProperty(o)) {
         var a = n[o];
         h(t, a = a && !0 !== a ? a.displayText ? {
            text: a.text,
            displayText: a.displayText
         } : a.text : o) && e.push(r(a))
      }
   }

   function m(e) {
      "." == e.charAt(0) && (e = e.substr(1));
      for (var t = e.split(i + i), n = 0; n < t.length; n++) t[n] = t[n].replace(new RegExp(i, "g"), "");
      return t.join(i)
   }

   function g(e) {
      for (var t = c(e).split("."), n = 0; n < t.length; n++) t[n] = i + t[n].replace(new RegExp(i, "g"), i + i) + i;
      var r = t.join(".");
      return "string" == typeof e ? r : ((e = f(e)).text = r, e)
   }

   function v(e, t) {
      for (var n = e.split(/\s+/), r = 0; r < n.length; r++) n[r] && t(n[r].replace(/[,;]/g, ""))
   }

   function y(e, t) {
      for (var n = t.doc, r = n.getValue(), i = e.toUpperCase(), s = "", c = "", u = [], f = {
         start: a(0, 0),
         end: a(t.lastLine(), t.getLineHandle(t.lastLine()).length)
      }, h = r.indexOf(o.QUERY_DIV); -1 != h;) u.push(n.posFromIndex(h)), h = r.indexOf(o.QUERY_DIV, h + 1);
      u.unshift(a(0, 0)), u.push(a(t.lastLine(), t.getLineHandle(t.lastLine()).text.length));
      for (var p = null, m = t.getCursor(), g = 0; g < u.length; g++) {
         if ((null == p || l(m, p) > 0) && l(m, u[g]) <= 0) {
            f = {start: p, end: u[g]};
            break
         }
         p = u[g]
      }
      if (f.start) {
         var y = n.getRange(f.start, f.end, !1);
         for (g = 0; g < y.length; g++) {
            if (v(y[g], function(e) {
               var t = e.toUpperCase();
               t === i && d(s) && (c = s), t !== o.ALIAS_KEYWORD && (s = e)
            }), c) break
         }
      }
      return c
   }

   e.registerHelper("hint", "sql", function(o, l) {
      t = function(e) {
         var t = {};
         if (s(e)) for (var n = e.length - 1; n >= 0; n--) {
            var r = e[n];
            t[c(r).toUpperCase()] = u(c(r), r)
         } else if (e) for (var i in e) t[i.toUpperCase()] = u(i, e[i]);
         return t
      }(l && l.tables);
      var h = l && l.defaultTable, v = l && l.disableKeywords;
      n = h && d(h), r = function(t) {
         var n = t.doc.modeOption;
         return "sql" === n && (n = "text/x-sql"), e.resolveMode(n).keywords
      }(o), i = function(t) {
         var n = t.doc.modeOption;
         return "sql" === n && (n = "text/x-sql"), e.resolveMode(n).identifierQuote || "`"
      }(o), h && !n && (n = y(h, o)), (n = n || []).columns && (n = n.columns);
      var b, w, x, k = o.getCursor(), C = [], S = o.getTokenAt(k);
      if (S.end > k.ch && (S.end = k.ch, S.string = S.string.slice(0, k.ch - S.start)), S.string.match(/^[.`"\w@]\w*$/) ? (x = S.string, b = S.start, w = S.end) : (b = w = k.ch, x = ""), "." == x.charAt(0) || x.charAt(0) == i) b = function(e, r, o, l) {
         for (var s = !1, c = [], u = r.start, h = !0; h;) h = "." == r.string.charAt(0), s = s || r.string.charAt(0) == i, u = r.start, c.unshift(m(r.string)), "." == (r = l.getTokenAt(a(e.line, r.start))).string && (h = !0, r = l.getTokenAt(a(e.line, r.start)));
         var v = c.join(".");
         p(o, v, t, function(e) {
            return s ? g(e) : e
         }), p(o, v, n, function(e) {
            return s ? g(e) : e
         }), v = c.pop();
         var b = c.join("."), w = !1, x = b;
         if (!d(b)) {
            var k = b;
            (b = y(b, l)) !== k && (w = !0)
         }
         var C = d(b);
         return C && C.columns && (C = C.columns), C && p(o, v, C, function(e) {
            var t = b;
            return 1 == w && (t = x), "string" == typeof e ? e = t + "." + e : (e = f(e)).text = t + "." + e.text, s ? g(e) : e
         }), u
      }(k, S, C, o); else {
         var T = function(e, t) {
            return "object" == typeof e ? e.className = t : e = {text: e, className: t}, e
         };
         p(C, x, n, function(e) {
            return T(e, "CodeMirror-hint-table CodeMirror-hint-default-table")
         }), p(C, x, t, function(e) {
            return T(e, "CodeMirror-hint-table")
         }), v || p(C, x, r, function(e) {
            return T(e.toUpperCase(), "CodeMirror-hint-keyword")
         })
      }
      return {list: C, from: a(k.line, b), to: a(k.line, w)}
   })
}, cm.addon["xml-hint"] = function(e) {
   "use strict";
   var t = e.Pos;

   function n(e, t, n) {
      return n ? e.indexOf(t) >= 0 : 0 == e.lastIndexOf(t, 0)
   }

   e.registerHelper("hint", "xml", function(r, i) {
      var o = i && i.schemaInfo, a = i && i.quoteChar || '"', l = i && i.matchInMiddle;
      if (o) {
         var s = r.getCursor(), c = r.getTokenAt(s);
         c.end > s.ch && (c.end = s.ch, c.string = c.string.slice(0, s.ch - c.start));
         var u = e.innerMode(r.getMode(), c.state);
         if ("xml" == u.mode.name) {
            var d, f, h = [], p = !1, m = /\btag\b/.test(c.type) && !/>$/.test(c.string), g = m && /^\w/.test(c.string);
            if (g) {
               var v = r.getLine(s.line).slice(Math.max(0, c.start - 2), c.start),
                  y = /<\/$/.test(v) ? "close" : /<$/.test(v) ? "open" : null;
               y && (f = c.start - ("close" == y ? 2 : 1))
            } else m && "<" == c.string ? y = "open" : m && "</" == c.string && (y = "close");
            if (!m && !u.state.tagName || y) {
               g && (d = c.string), p = y;
               var b = u.state.context, w = b && o[b.tagName], x = b ? w && w.children : o["!top"];
               if (x && "close" != y) for (var k = 0; k < x.length; ++k) d && !n(x[k], d, l) || h.push("<" + x[k]); else if ("close" != y) for (var C in o) !o.hasOwnProperty(C) || "!top" == C || "!attrs" == C || d && !n(C, d, l) || h.push("<" + C);
               b && (!d || "close" == y && n(b.tagName, d, l)) && h.push("</" + b.tagName + ">")
            } else {
               var S = (w = o[u.state.tagName]) && w.attrs, T = o["!attrs"];
               if (!S && !T) return;
               if (S) {
                  if (T) {
                     var L = {};
                     for (var M in T) T.hasOwnProperty(M) && (L[M] = T[M]);
                     for (var M in S) S.hasOwnProperty(M) && (L[M] = S[M]);
                     S = L
                  }
               } else S = T;
               if ("string" == c.type || "=" == c.string) {
                  var _,
                     O = (v = r.getRange(t(s.line, Math.max(0, s.ch - 60)), t(s.line, "string" == c.type ? c.start : c.end))).match(/([^\s\u00a0=<>\"\']+)=$/);
                  if (!O || !S.hasOwnProperty(O[1]) || !(_ = S[O[1]])) return;
                  if ("function" == typeof _ && (_ = _.call(this, r)), "string" == c.type) {
                     d = c.string;
                     var A = 0;
                     /['"]/.test(c.string.charAt(0)) && (a = c.string.charAt(0), d = c.string.slice(1), A++);
                     var N = c.string.length;
                     /['"]/.test(c.string.charAt(N - 1)) && (a = c.string.charAt(N - 1), d = c.string.substr(A, N - 2)), p = !0
                  }
                  for (k = 0; k < _.length; ++k) d && !n(_[k], d, l) || h.push(a + _[k] + a)
               } else for (var z in "attribute" == c.type && (d = c.string, p = !0), S) !S.hasOwnProperty(z) || d && !n(z, d, l) || h.push(z)
            }
            return {list: h, from: p ? t(s.line, null == f ? c.start : f) : s, to: p ? t(s.line, c.end) : s}
         }
      }
   })
}, cm.mode.htmlmixed = function(e) {
   "use strict";
   var t = {
      script: [["lang", /(javascript|babel)/i, "javascript"], ["type", /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i, "javascript"], ["type", /./, "text/plain"], [null, null, "javascript"]],
      style: [["lang", /^css$/i, "css"], ["type", /^(text\/)?(x-)?(stylesheet|css)$/i, "css"], ["type", /./, "text/plain"], [null, null, "css"]]
   };
   var n = {};

   function r(e, t) {
      var r = e.match(function(e) {
         var t = n[e];
         return t || (n[e] = new RegExp("\\s+" + e + "\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*"))
      }(t));
      return r ? /^\s*(.*?)\s*$/.exec(r[2])[1] : ""
   }

   function i(e, t) {
      return new RegExp((t ? "^" : "") + "</s*" + e + "s*>", "i")
   }

   function o(e, t) {
      for (var n in e) for (var r = t[n] || (t[n] = []), i = e[n], o = i.length - 1; o >= 0; o--) r.unshift(i[o])
   }

   e.defineMode("htmlmixed", function(n, a) {
      var l = e.getMode(n, {
         name: "xml",
         htmlMode: !0,
         multilineTagIndentFactor: a.multilineTagIndentFactor,
         multilineTagIndentPastTag: a.multilineTagIndentPastTag
      }), s = {}, c = a && a.tags, u = a && a.scriptTypes;
      if (o(t, s), c && o(c, s), u) for (var d = u.length - 1; d >= 0; d--) s.script.unshift(["type", u[d].matches, u[d].mode]);

      function f(t, o) {
         var a, c = l.token(t, o.htmlState), u = /\btag\b/.test(c);
         if (u && !/[<>\s\/]/.test(t.current()) && (a = o.htmlState.tagName && o.htmlState.tagName.toLowerCase()) && s.hasOwnProperty(a)) o.inTag = a + " "; else if (o.inTag && u && />$/.test(t.current())) {
            var d = /^([\S]+) (.*)/.exec(o.inTag);
            o.inTag = null;
            var h = ">" == t.current() && function(e, t) {
               for (var n = 0; n < e.length; n++) {
                  var i = e[n];
                  if (!i[0] || i[1].test(r(t, i[0]))) return i[2]
               }
            }(s[d[1]], d[2]), p = e.getMode(n, h), m = i(d[1], !0), g = i(d[1], !1);
            o.token = function(e, t) {
               return e.match(m, !1) ? (t.token = f, t.localState = t.localMode = null, null) : function(e, t, n) {
                  var r = e.current(), i = r.search(t);
                  return i > -1 ? e.backUp(r.length - i) : r.match(/<\/?$/) && (e.backUp(r.length), e.match(t, !1) || e.match(r)), n
               }(e, g, t.localMode.token(e, t.localState))
            }, o.localMode = p, o.localState = e.startState(p, l.indent(o.htmlState, "", ""))
         } else o.inTag && (o.inTag += t.current(), t.eol() && (o.inTag += " "));
         return c
      }

      return {
         startState: function() {
            return {token: f, inTag: null, localMode: null, localState: null, htmlState: e.startState(l)}
         }, copyState: function(t) {
            var n;
            return t.localState && (n = e.copyState(t.localMode, t.localState)), {
               token: t.token,
               inTag: t.inTag,
               localMode: t.localMode,
               localState: n,
               htmlState: e.copyState(l, t.htmlState)
            }
         }, token: function(e, t) {
            return t.token(e, t)
         }, indent: function(t, n, r) {
            return !t.localMode || /^\s*<\//.test(n) ? l.indent(t.htmlState, n, r) : t.localMode.indent ? t.localMode.indent(t.localState, n, r) : e.Pass
         }, innerMode: function(e) {
            return {state: e.localState || e.htmlState, mode: e.localMode || l}
         }
      }
   }, "xml", "javascript", "css"), e.defineMIME("text/html", "htmlmixed")
}, cm.mode.javascript = function(e) {
   "use strict";
   e.defineMode("javascript", function(t, n) {
      var r, i, o = t.indentUnit, a = n.statementIndent, l = n.jsonld, s = n.json || l, c = n.typescript,
         u = n.wordCharacters || /[\w$\xa1-\uffff]/, d = function() {
            function e(e) {
               return {type: e, style: "keyword"}
            }

            var t = e("keyword a"), n = e("keyword b"), r = e("keyword c"), i = e("keyword d"), o = e("operator"),
               a = {type: "atom", style: "atom"};
            return {
               if: e("if"),
               while: t,
               with: t,
               else: n,
               do: n,
               try: n,
               finally: n,
               return: i,
               break: i,
               continue: i,
               new: e("new"),
               delete: r,
               void: r,
               throw: r,
               debugger: e("debugger"),
               var: e("var"),
               const: e("var"),
               let: e("var"),
               function: e("function"),
               catch: e("catch"),
               for: e("for"),
               switch: e("switch"),
               case: e("case"),
               default: e("default"),
               in: o,
               typeof: o,
               instanceof: o,
               true: a,
               false: a,
               null: a,
               undefined: a,
               NaN: a,
               Infinity: a,
               this: e("this"),
               class: e("class"),
               super: e("atom"),
               yield: r,
               export: e("export"),
               import: e("import"),
               extends: r,
               await: r
            }
         }(), f = /[+\-*&%=<>!?|~^@]/,
         h = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;

      function p(e, t, n) {
         return r = e, i = n, t
      }

      function m(e, t) {
         var n, r = e.next();
         if ('"' == r || "'" == r) return t.tokenize = (n = r, function(e, t) {
            var r, i = !1;
            if (l && "@" == e.peek() && e.match(h)) return t.tokenize = m, p("jsonld-keyword", "meta");
            for (; null != (r = e.next()) && (r != n || i);) i = !i && "\\" == r;
            return i || (t.tokenize = m), p("string", "string")
         }), t.tokenize(e, t);
         if ("." == r && e.match(/^\d+(?:[eE][+\-]?\d+)?/)) return p("number", "number");
         if ("." == r && e.match("..")) return p("spread", "meta");
         if (/[\[\]{}\(\),;\:\.]/.test(r)) return p(r);
         if ("=" == r && e.eat(">")) return p("=>", "operator");
         if ("0" == r && e.match(/^(?:x[\da-f]+|o[0-7]+|b[01]+)n?/i)) return p("number", "number");
         if (/\d/.test(r)) return e.match(/^\d*(?:n|(?:\.\d*)?(?:[eE][+\-]?\d+)?)?/), p("number", "number");
         if ("/" == r) return e.eat("*") ? (t.tokenize = g, g(e, t)) : e.eat("/") ? (e.skipToEnd(), p("comment", "comment")) : Ke(e, t, 1) ? (function(e) {
            for (var t, n = !1, r = !1; null != (t = e.next());) {
               if (!n) {
                  if ("/" == t && !r) return;
                  "[" == t ? r = !0 : r && "]" == t && (r = !1)
               }
               n = !n && "\\" == t
            }
         }(e), e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), p("regexp", "string-2")) : (e.eat("="), p("operator", "operator", e.current()));
         if ("`" == r) return t.tokenize = v, v(e, t);
         if ("#" == r) return e.skipToEnd(), p("error", "error");
         if (f.test(r)) return ">" == r && t.lexical && ">" == t.lexical.type || (e.eat("=") ? "!" != r && "=" != r || e.eat("=") : /[<>*+\-]/.test(r) && (e.eat(r), ">" == r && e.eat(r))), p("operator", "operator", e.current());
         if (u.test(r)) {
            e.eatWhile(u);
            var i = e.current();
            if ("." != t.lastType) {
               if (d.propertyIsEnumerable(i)) {
                  var o = d[i];
                  return p(o.type, o.style, i)
               }
               if ("async" == i && e.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/, !1)) return p("async", "keyword", i)
            }
            return p("variable", "variable", i)
         }
      }

      function g(e, t) {
         for (var n, r = !1; n = e.next();) {
            if ("/" == n && r) {
               t.tokenize = m;
               break
            }
            r = "*" == n
         }
         return p("comment", "comment")
      }

      function v(e, t) {
         for (var n, r = !1; null != (n = e.next());) {
            if (!r && ("`" == n || "$" == n && e.eat("{"))) {
               t.tokenize = m;
               break
            }
            r = !r && "\\" == n
         }
         return p("quasi", "string-2", e.current())
      }

      var y = "([{}])";

      function b(e, t) {
         t.fatArrowAt && (t.fatArrowAt = null);
         var n = e.string.indexOf("=>", e.start);
         if (!(n < 0)) {
            if (c) {
               var r = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start, n));
               r && (n = r.index)
            }
            for (var i = 0, o = !1, a = n - 1; a >= 0; --a) {
               var l = e.string.charAt(a), s = y.indexOf(l);
               if (s >= 0 && s < 3) {
                  if (!i) {
                     ++a;
                     break
                  }
                  if (0 == --i) {
                     "(" == l && (o = !0);
                     break
                  }
               } else if (s >= 3 && s < 6) ++i; else if (u.test(l)) o = !0; else {
                  if (/["'\/]/.test(l)) return;
                  if (o && !i) {
                     ++a;
                     break
                  }
               }
            }
            o && !i && (t.fatArrowAt = a)
         }
      }

      var w = {atom: !0, number: !0, variable: !0, string: !0, regexp: !0, this: !0, "jsonld-keyword": !0};

      function x(e, t, n, r, i, o) {
         this.indented = e, this.column = t, this.type = n, this.prev = i, this.info = o, null != r && (this.align = r)
      }

      function k(e, t) {
         for (var n = e.localVars; n; n = n.next) if (n.name == t) return !0;
         for (var r = e.context; r; r = r.prev) for (n = r.vars; n; n = n.next) if (n.name == t) return !0
      }

      var C = {state: null, column: null, marked: null, cc: null};

      function S() {
         for (var e = arguments.length - 1; e >= 0; e--) C.cc.push(arguments[e])
      }

      function T() {
         return S.apply(null, arguments), !0
      }

      function L(e, t) {
         for (var n = t; n; n = n.next) if (n.name == e) return !0;
         return !1
      }

      function M(e) {
         var t = C.state;
         if (C.marked = "def", t.context) if ("var" == t.lexical.info && t.context && t.context.block) {
            var r = function e(t, n) {
               if (n) {
                  if (n.block) {
                     var r = e(t, n.prev);
                     return r ? r == n.prev ? n : new O(r, n.vars, !0) : null
                  }
                  return L(t, n.vars) ? n : new O(n.prev, new A(t, n.vars), !1)
               }
               return null
            }(e, t.context);
            if (null != r) return void (t.context = r)
         } else if (!L(e, t.localVars)) return void (t.localVars = new A(e, t.localVars));
         n.globalVars && !L(e, t.globalVars) && (t.globalVars = new A(e, t.globalVars))
      }

      function _(e) {
         return "public" == e || "private" == e || "protected" == e || "abstract" == e || "readonly" == e
      }

      function O(e, t, n) {
         this.prev = e, this.vars = t, this.block = n
      }

      function A(e, t) {
         this.name = e, this.next = t
      }

      var N = new A("this", new A("arguments", null));

      function z() {
         C.state.context = new O(C.state.context, C.state.localVars, !1), C.state.localVars = N
      }

      function F() {
         C.state.context = new O(C.state.context, C.state.localVars, !0), C.state.localVars = null
      }

      function P() {
         C.state.localVars = C.state.context.vars, C.state.context = C.state.context.prev
      }

      function D(e, t) {
         var n = function() {
            var n = C.state, r = n.indented;
            if ("stat" == n.lexical.type) r = n.lexical.indented; else for (var i = n.lexical; i && ")" == i.type && i.align; i = i.prev) r = i.indented;
            n.lexical = new x(r, C.stream.column(), e, null, n.lexical, t)
         };
         return n.lex = !0, n
      }

      function E() {
         var e = C.state;
         e.lexical.prev && (")" == e.lexical.type && (e.indented = e.lexical.indented), e.lexical = e.lexical.prev)
      }

      function H(e) {
         return function t(n) {
            return n == e ? T() : ";" == e || "}" == n || ")" == n || "]" == n ? S() : T(t)
         }
      }

      function W(e, t) {
         return "var" == e ? T(D("vardef", t), ye, H(";"), E) : "keyword a" == e ? T(D("form"), B, W, E) : "keyword b" == e ? T(D("form"), W, E) : "keyword d" == e ? C.stream.match(/^\s*$/, !1) ? T() : T(D("stat"), U, H(";"), E) : "debugger" == e ? T(H(";")) : "{" == e ? T(D("}"), F, ae, E, P) : ";" == e ? T() : "if" == e ? ("else" == C.state.lexical.info && C.state.cc[C.state.cc.length - 1] == E && C.state.cc.pop()(), T(D("form"), B, W, E, Se)) : "function" == e ? T(_e) : "for" == e ? T(D("form"), Te, W, E) : "class" == e || c && "interface" == t ? (C.marked = "keyword", T(D("form", "class" == e ? e : t), Fe, E)) : "variable" == e ? c && "declare" == t ? (C.marked = "keyword", T(W)) : c && ("module" == t || "enum" == t || "type" == t) && C.stream.match(/^\s*\w/, !1) ? (C.marked = "keyword", "enum" == t ? T(Ve) : "type" == t ? T(Ae, H("operator"), ue, H(";")) : T(D("form"), be, H("{"), D("}"), ae, E, E)) : c && "namespace" == t ? (C.marked = "keyword", T(D("form"), R, W, E)) : c && "abstract" == t ? (C.marked = "keyword", T(W)) : T(D("stat"), J) : "switch" == e ? T(D("form"), B, H("{"), D("}", "switch"), F, ae, E, E, P) : "case" == e ? T(R, H(":")) : "default" == e ? T(H(":")) : "catch" == e ? T(D("form"), z, I, W, E, P) : "export" == e ? T(D("stat"), He, E) : "import" == e ? T(D("stat"), Ie, E) : "async" == e ? T(W) : "@" == t ? T(R, W) : S(D("stat"), R, H(";"), E)
      }

      function I(e) {
         if ("(" == e) return T(Ne, H(")"))
      }

      function R(e, t) {
         return j(e, t, !1)
      }

      function q(e, t) {
         return j(e, t, !0)
      }

      function B(e) {
         return "(" != e ? S() : T(D(")"), R, H(")"), E)
      }

      function j(e, t, n) {
         if (C.state.fatArrowAt == C.stream.start) {
            var r = n ? Y : X;
            if ("(" == e) return T(z, D(")"), ie(Ne, ")"), E, H("=>"), r, P);
            if ("variable" == e) return S(z, be, H("=>"), r, P)
         }
         var i = n ? G : V;
         return w.hasOwnProperty(e) ? T(i) : "function" == e ? T(_e, i) : "class" == e || c && "interface" == t ? (C.marked = "keyword", T(D("form"), ze, E)) : "keyword c" == e || "async" == e ? T(n ? q : R) : "(" == e ? T(D(")"), U, H(")"), E, i) : "operator" == e || "spread" == e ? T(n ? q : R) : "[" == e ? T(D("]"), Ue, E, i) : "{" == e ? oe(te, "}", null, i) : "quasi" == e ? S(K, i) : "new" == e ? T(function(e) {
            return function(t) {
               return "." == t ? T(e ? Z : Q) : "variable" == t && c ? T(me, e ? G : V) : S(e ? q : R)
            }
         }(n)) : "import" == e ? T(R) : T()
      }

      function U(e) {
         return e.match(/[;\}\)\],]/) ? S() : S(R)
      }

      function V(e, t) {
         return "," == e ? T(R) : G(e, t, !1)
      }

      function G(e, t, n) {
         var r = 0 == n ? V : G, i = 0 == n ? R : q;
         return "=>" == e ? T(z, n ? Y : X, P) : "operator" == e ? /\+\+|--/.test(t) || c && "!" == t ? T(r) : c && "<" == t && C.stream.match(/^([^>]|<.*?>)*>\s*\(/, !1) ? T(D(">"), ie(ue, ">"), E, r) : "?" == t ? T(R, H(":"), i) : T(i) : "quasi" == e ? S(K, r) : ";" != e ? "(" == e ? oe(q, ")", "call", r) : "." == e ? T(ee, r) : "[" == e ? T(D("]"), U, H("]"), E, r) : c && "as" == t ? (C.marked = "keyword", T(ue, r)) : "regexp" == e ? (C.state.lastType = C.marked = "operator", C.stream.backUp(C.stream.pos - C.stream.start - 1), T(i)) : void 0 : void 0
      }

      function K(e, t) {
         return "quasi" != e ? S() : "${" != t.slice(t.length - 2) ? T(K) : T(R, $)
      }

      function $(e) {
         if ("}" == e) return C.marked = "string-2", C.state.tokenize = v, T(K)
      }

      function X(e) {
         return b(C.stream, C.state), S("{" == e ? W : R)
      }

      function Y(e) {
         return b(C.stream, C.state), S("{" == e ? W : q)
      }

      function Q(e, t) {
         if ("target" == t) return C.marked = "keyword", T(V)
      }

      function Z(e, t) {
         if ("target" == t) return C.marked = "keyword", T(G)
      }

      function J(e) {
         return ":" == e ? T(E, W) : S(V, H(";"), E)
      }

      function ee(e) {
         if ("variable" == e) return C.marked = "property", T()
      }

      function te(e, t) {
         return "async" == e ? (C.marked = "property", T(te)) : "variable" == e || "keyword" == C.style ? (C.marked = "property", "get" == t || "set" == t ? T(ne) : (c && C.state.fatArrowAt == C.stream.start && (n = C.stream.match(/^\s*:\s*/, !1)) && (C.state.fatArrowAt = C.stream.pos + n[0].length), T(re))) : "number" == e || "string" == e ? (C.marked = l ? "property" : C.style + " property", T(re)) : "jsonld-keyword" == e ? T(re) : c && _(t) ? (C.marked = "keyword", T(te)) : "[" == e ? T(R, le, H("]"), re) : "spread" == e ? T(q, re) : "*" == t ? (C.marked = "keyword", T(te)) : ":" == e ? S(re) : void 0;
         var n
      }

      function ne(e) {
         return "variable" != e ? S(re) : (C.marked = "property", T(_e))
      }

      function re(e) {
         return ":" == e ? T(q) : "(" == e ? S(_e) : void 0
      }

      function ie(e, t, n) {
         function r(i, o) {
            if (n ? n.indexOf(i) > -1 : "," == i) {
               var a = C.state.lexical;
               return "call" == a.info && (a.pos = (a.pos || 0) + 1), T(function(n, r) {
                  return n == t || r == t ? S() : S(e)
               }, r)
            }
            return i == t || o == t ? T() : n && n.indexOf(";") > -1 ? S(e) : T(H(t))
         }

         return function(n, i) {
            return n == t || i == t ? T() : S(e, r)
         }
      }

      function oe(e, t, n) {
         for (var r = 3; r < arguments.length; r++) C.cc.push(arguments[r]);
         return T(D(t, n), ie(e, t), E)
      }

      function ae(e) {
         return "}" == e ? T() : S(W, ae)
      }

      function le(e, t) {
         if (c) {
            if (":" == e || "in" == t) return T(ue);
            if ("?" == t) return T(le)
         }
      }

      function se(e) {
         if (c && ":" == e) return C.stream.match(/^\s*\w+\s+is\b/, !1) ? T(R, ce, ue) : T(ue)
      }

      function ce(e, t) {
         if ("is" == t) return C.marked = "keyword", T()
      }

      function ue(e, t) {
         return "keyof" == t || "typeof" == t || "infer" == t ? (C.marked = "keyword", T("typeof" == t ? q : ue)) : "variable" == e || "void" == t ? (C.marked = "type", T(pe)) : "|" == t || "&" == t ? T(ue) : "string" == e || "number" == e || "atom" == e ? T(pe) : "[" == e ? T(D("]"), ie(ue, "]", ","), E, pe) : "{" == e ? T(D("}"), ie(fe, "}", ",;"), E, pe) : "(" == e ? T(ie(he, ")"), de, pe) : "<" == e ? T(ie(ue, ">"), ue) : void 0
      }

      function de(e) {
         if ("=>" == e) return T(ue)
      }

      function fe(e, t) {
         return "variable" == e || "keyword" == C.style ? (C.marked = "property", T(fe)) : "?" == t || "number" == e || "string" == e ? T(fe) : ":" == e ? T(ue) : "[" == e ? T(H("variable"), le, H("]"), fe) : "(" == e ? S(Oe, fe) : void 0
      }

      function he(e, t) {
         return "variable" == e && C.stream.match(/^\s*[?:]/, !1) || "?" == t ? T(he) : ":" == e ? T(ue) : "spread" == e ? T(he) : S(ue)
      }

      function pe(e, t) {
         return "<" == t ? T(D(">"), ie(ue, ">"), E, pe) : "|" == t || "." == e || "&" == t ? T(ue) : "[" == e ? T(ue, H("]"), pe) : "extends" == t || "implements" == t ? (C.marked = "keyword", T(ue)) : "?" == t ? T(ue, H(":"), ue) : void 0
      }

      function me(e, t) {
         if ("<" == t) return T(D(">"), ie(ue, ">"), E, pe)
      }

      function ge() {
         return S(ue, ve)
      }

      function ve(e, t) {
         if ("=" == t) return T(ue)
      }

      function ye(e, t) {
         return "enum" == t ? (C.marked = "keyword", T(Ve)) : S(be, le, ke, Ce)
      }

      function be(e, t) {
         return c && _(t) ? (C.marked = "keyword", T(be)) : "variable" == e ? (M(t), T()) : "spread" == e ? T(be) : "[" == e ? oe(xe, "]") : "{" == e ? oe(we, "}") : void 0
      }

      function we(e, t) {
         return "variable" != e || C.stream.match(/^\s*:/, !1) ? ("variable" == e && (C.marked = "property"), "spread" == e ? T(be) : "}" == e ? S() : "[" == e ? T(R, H("]"), H(":"), we) : T(H(":"), be, ke)) : (M(t), T(ke))
      }

      function xe() {
         return S(be, ke)
      }

      function ke(e, t) {
         if ("=" == t) return T(q)
      }

      function Ce(e) {
         if ("," == e) return T(ye)
      }

      function Se(e, t) {
         if ("keyword b" == e && "else" == t) return T(D("form", "else"), W, E)
      }

      function Te(e, t) {
         return "await" == t ? T(Te) : "(" == e ? T(D(")"), Le, E) : void 0
      }

      function Le(e) {
         return "var" == e ? T(ye, Me) : "variable" == e ? T(Me) : S(Me)
      }

      function Me(e, t) {
         return ")" == e ? T() : ";" == e ? T(Me) : "in" == t || "of" == t ? (C.marked = "keyword", T(R, Me)) : S(R, Me)
      }

      function _e(e, t) {
         return "*" == t ? (C.marked = "keyword", T(_e)) : "variable" == e ? (M(t), T(_e)) : "(" == e ? T(z, D(")"), ie(Ne, ")"), E, se, W, P) : c && "<" == t ? T(D(">"), ie(ge, ">"), E, _e) : void 0
      }

      function Oe(e, t) {
         return "*" == t ? (C.marked = "keyword", T(Oe)) : "variable" == e ? (M(t), T(Oe)) : "(" == e ? T(z, D(")"), ie(Ne, ")"), E, se, P) : c && "<" == t ? T(D(">"), ie(ge, ">"), E, Oe) : void 0
      }

      function Ae(e, t) {
         return "keyword" == e || "variable" == e ? (C.marked = "type", T(Ae)) : "<" == t ? T(D(">"), ie(ge, ">"), E) : void 0
      }

      function Ne(e, t) {
         return "@" == t && T(R, Ne), "spread" == e ? T(Ne) : c && _(t) ? (C.marked = "keyword", T(Ne)) : c && "this" == e ? T(le, ke) : S(be, le, ke)
      }

      function ze(e, t) {
         return "variable" == e ? Fe(e, t) : Pe(e, t)
      }

      function Fe(e, t) {
         if ("variable" == e) return M(t), T(Pe)
      }

      function Pe(e, t) {
         return "<" == t ? T(D(">"), ie(ge, ">"), E, Pe) : "extends" == t || "implements" == t || c && "," == e ? ("implements" == t && (C.marked = "keyword"), T(c ? ue : R, Pe)) : "{" == e ? T(D("}"), De, E) : void 0
      }

      function De(e, t) {
         return "async" == e || "variable" == e && ("static" == t || "get" == t || "set" == t || c && _(t)) && C.stream.match(/^\s+[\w$\xa1-\uffff]/, !1) ? (C.marked = "keyword", T(De)) : "variable" == e || "keyword" == C.style ? (C.marked = "property", T(c ? Ee : _e, De)) : "number" == e || "string" == e ? T(c ? Ee : _e, De) : "[" == e ? T(R, le, H("]"), c ? Ee : _e, De) : "*" == t ? (C.marked = "keyword", T(De)) : c && "(" == e ? S(Oe, De) : ";" == e || "," == e ? T(De) : "}" == e ? T() : "@" == t ? T(R, De) : void 0
      }

      function Ee(e, t) {
         if ("?" == t) return T(Ee);
         if (":" == e) return T(ue, ke);
         if ("=" == t) return T(q);
         var n = C.state.lexical.prev;
         return S(n && "interface" == n.info ? Oe : _e)
      }

      function He(e, t) {
         return "*" == t ? (C.marked = "keyword", T(je, H(";"))) : "default" == t ? (C.marked = "keyword", T(R, H(";"))) : "{" == e ? T(ie(We, "}"), je, H(";")) : S(W)
      }

      function We(e, t) {
         return "as" == t ? (C.marked = "keyword", T(H("variable"))) : "variable" == e ? S(q, We) : void 0
      }

      function Ie(e) {
         return "string" == e ? T() : "(" == e ? S(R) : S(Re, qe, je)
      }

      function Re(e, t) {
         return "{" == e ? oe(Re, "}") : ("variable" == e && M(t), "*" == t && (C.marked = "keyword"), T(Be))
      }

      function qe(e) {
         if ("," == e) return T(Re, qe)
      }

      function Be(e, t) {
         if ("as" == t) return C.marked = "keyword", T(Re)
      }

      function je(e, t) {
         if ("from" == t) return C.marked = "keyword", T(R)
      }

      function Ue(e) {
         return "]" == e ? T() : S(ie(q, "]"))
      }

      function Ve() {
         return S(D("form"), be, H("{"), D("}"), ie(Ge, "}"), E, E)
      }

      function Ge() {
         return S(be, ke)
      }

      function Ke(e, t, n) {
         return t.tokenize == m && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType) || "quasi" == t.lastType && /\{\s*$/.test(e.string.slice(0, e.pos - (n || 0)))
      }

      return P.lex = !0, E.lex = !0, {
         startState: function(e) {
            var t = {
               tokenize: m,
               lastType: "sof",
               cc: [],
               lexical: new x((e || 0) - o, 0, "block", !1),
               localVars: n.localVars,
               context: n.localVars && new O(null, null, !1),
               indented: e || 0
            };
            return n.globalVars && "object" == typeof n.globalVars && (t.globalVars = n.globalVars), t
         },
         token: function(e, t) {
            if (e.sol() && (t.lexical.hasOwnProperty("align") || (t.lexical.align = !1), t.indented = e.indentation(), b(e, t)), t.tokenize != g && e.eatSpace()) return null;
            var n = t.tokenize(e, t);
            return "comment" == r ? n : (t.lastType = "operator" != r || "++" != i && "--" != i ? r : "incdec", function(e, t, n, r, i) {
               var o = e.cc;
               for (C.state = e, C.stream = i, C.marked = null, C.cc = o, C.style = t, e.lexical.hasOwnProperty("align") || (e.lexical.align = !0); ;) if ((o.length ? o.pop() : s ? R : W)(n, r)) {
                  for (; o.length && o[o.length - 1].lex;) o.pop()();
                  return C.marked ? C.marked : "variable" == n && k(e, r) ? "variable-2" : t
               }
            }(t, n, r, i, e))
         },
         indent: function(t, r) {
            if (t.tokenize == g) return e.Pass;
            if (t.tokenize != m) return 0;
            var i, l = r && r.charAt(0), s = t.lexical;
            if (!/^\s*else\b/.test(r)) for (var c = t.cc.length - 1; c >= 0; --c) {
               var u = t.cc[c];
               if (u == E) s = s.prev; else if (u != Se) break
            }
            for (; ("stat" == s.type || "form" == s.type) && ("}" == l || (i = t.cc[t.cc.length - 1]) && (i == V || i == G) && !/^[,\.=+\-*:?[\(]/.test(r));) s = s.prev;
            a && ")" == s.type && "stat" == s.prev.type && (s = s.prev);
            var d = s.type, h = l == d;
            return "vardef" == d ? s.indented + ("operator" == t.lastType || "," == t.lastType ? s.info.length + 1 : 0) : "form" == d && "{" == l ? s.indented : "form" == d ? s.indented + o : "stat" == d ? s.indented + (function(e, t) {
               return "operator" == e.lastType || "," == e.lastType || f.test(t.charAt(0)) || /[,.]/.test(t.charAt(0))
            }(t, r) ? a || o : 0) : "switch" != s.info || h || 0 == n.doubleIndentSwitch ? s.align ? s.column + (h ? 0 : 1) : s.indented + (h ? 0 : o) : s.indented + (/^(?:case|default)\b/.test(r) ? o : 2 * o)
         },
         electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
         blockCommentStart: s ? null : "/*",
         blockCommentEnd: s ? null : "*/",
         blockCommentContinue: s ? null : " * ",
         lineComment: s ? null : "//",
         fold: "brace",
         closeBrackets: "()[]{}''\"\"``",
         helperType: s ? "json" : "javascript",
         jsonldMode: l,
         jsonMode: s,
         expressionAllowed: Ke,
         skipExpression: function(e) {
            var t = e.cc[e.cc.length - 1];
            t != R && t != q || e.cc.pop()
         }
      }
   }), e.registerHelper("wordChars", "javascript", /[\w$]/), e.defineMIME("text/javascript", "javascript"), e.defineMIME("text/ecmascript", "javascript"), e.defineMIME("application/javascript", "javascript"), e.defineMIME("application/x-javascript", "javascript"), e.defineMIME("application/ecmascript", "javascript"), e.defineMIME("application/json", {
      name: "javascript",
      json: !0
   }), e.defineMIME("application/x-json", {
      name: "javascript",
      json: !0
   }), e.defineMIME("application/ld+json", {
      name: "javascript",
      jsonld: !0
   }), e.defineMIME("text/typescript", {
      name: "javascript",
      typescript: !0
   }), e.defineMIME("application/typescript", {name: "javascript", typescript: !0})
}, cm.addon["css-lint"] = function(e) {
   "use strict";
   e.registerHelper("lint", "css", function(t, n) {
      var r = [];
      if (!window.CSSLint) return window.console && window.console.error("Error: window.CSSLint not defined, CodeMirror CSS linting cannot run."), r;
      for (var i = CSSLint.verify(t, n).messages, o = null, a = 0; a < i.length; a++) {
         var l = (o = i[a]).line - 1, s = o.line - 1, c = o.col - 1, u = o.col;
         r.push({from: e.Pos(l, c), to: e.Pos(s, u), message: o.message, severity: o.type})
      }
      return r
   })
}, cm.addon["html-lint"] = function(e, t) {
   "use strict";
   var n = {
      "tagname-lowercase": !0,
      "attr-lowercase": !0,
      "attr-value-double-quotes": !0,
      "doctype-first": !1,
      "tag-pair": !0,
      "spec-char-escape": !0,
      "id-unique": !0,
      "src-not-empty": !0,
      "attr-no-duplication": !0
   };
   e.registerHelper("lint", "html", function(r, i) {
      var o = [];
      if (t && !t.verify && (t = t.HTMLHint), t || (t = window.HTMLHint), !t) return window.console && window.console.error("Error: HTMLHint not found, not defined on window, or not available through define/require, CodeMirror HTML linting cannot run."), o;
      for (var a = t.verify(r, i && i.rules || n), l = 0; l < a.length; l++) {
         var s = a[l], c = s.line - 1, u = s.line - 1, d = s.col - 1, f = s.col;
         o.push({from: e.Pos(c, d), to: e.Pos(u, f), message: s.message, severity: s.type})
      }
      return o
   })
}, cm.addon["javascript-lint"] = function(e) {
   "use strict";
   e.registerHelper("lint", "javascript", function(t, n) {
      if (!window.JSHINT) return window.console && window.console.error("Error: window.JSHINT not defined, CodeMirror JavaScript linting cannot run."), [];
      n.indent || (n.indent = 1), JSHINT(t, n, n.globals);
      var r = JSHINT.data().errors, i = [];
      return r && function(t, n) {
         for (var r = 0; r < t.length; r++) {
            var i = t[r];
            if (i) {
               if (i.line <= 0) {
                  window.console && window.console.warn("Cannot display JSHint error (invalid line " + i.line + ")", i);
                  continue
               }
               var o = i.character - 1, a = o + 1;
               if (i.evidence) {
                  var l = i.evidence.substring(o).search(/.\b/);
                  l > -1 && (a += l)
               }
               var s = {
                  message: i.reason,
                  severity: i.code && i.code.startsWith("W") ? "warning" : "error",
                  from: e.Pos(i.line - 1, o),
                  to: e.Pos(i.line - 1, a)
               };
               n.push(s)
            }
         }
      }(r, i), i
   })
}, cm.addon.lint = function(e) {
   "use strict";
   var t = "CodeMirror-lint-markers";

   function n(e) {
      e.parentNode && e.parentNode.removeChild(e)
   }

   function r(t, r, i) {
      var o = function(t, n) {
         var r = document.createElement("div");

         function i(t) {
            if (!r.parentNode) return e.off(document, "mousemove", i);
            r.style.top = Math.max(0, t.clientY - r.offsetHeight - 5) + "px", r.style.left = t.clientX + 5 + "px"
         }

         return r.className = "CodeMirror-lint-tooltip", r.appendChild(n.cloneNode(!0)), document.body.appendChild(r), e.on(document, "mousemove", i), i(t), null != r.style.opacity && (r.style.opacity = 1), r
      }(t, r);

      function a() {
         var t;
         e.off(i, "mouseout", a), o && ((t = o).parentNode && (null == t.style.opacity && n(t), t.style.opacity = 0, setTimeout(function() {
            n(t)
         }, 600)), o = null)
      }

      var l = setInterval(function() {
         if (o) for (var e = i; ; e = e.parentNode) {
            if (e && 11 == e.nodeType && (e = e.host), e == document.body) return;
            if (!e) {
               a();
               break
            }
         }
         if (!o) return clearInterval(l)
      }, 400);
      e.on(i, "mouseout", a)
   }

   function i(e, t, n) {
      this.marked = [], this.options = t, this.timeout = null, this.hasGutter = n, this.onMouseOver = function(t) {
         !function(e, t) {
            var n = t.target || t.srcElement;
            if (!/\bCodeMirror-lint-mark-/.test(n.className)) return;
            for (var i = n.getBoundingClientRect(), o = (i.left + i.right) / 2, a = (i.top + i.bottom) / 2, s = e.findMarksAt(e.coordsChar({
               left: o,
               top: a
            }, "client")), c = [], u = 0; u < s.length; ++u) {
               var d = s[u].__annotation;
               d && c.push(d)
            }
            c.length && function(e, t) {
               for (var n = t.target || t.srcElement, i = document.createDocumentFragment(), o = 0; o < e.length; o++) {
                  var a = e[o];
                  i.appendChild(l(a))
               }
               r(t, i, n)
            }(c, t)
         }(e, t)
      }, this.waitingFor = 0
   }

   function o(e) {
      var n = e.state.lint;
      n.hasGutter && e.clearGutter(t);
      for (var r = 0; r < n.marked.length; ++r) n.marked[r].clear();
      n.marked.length = 0
   }

   function a(t, n, i, o) {
      var a = document.createElement("div"), l = a;
      return a.className = "CodeMirror-lint-marker-" + n, i && ((l = a.appendChild(document.createElement("div"))).className = "CodeMirror-lint-marker-multiple"), 0 != o && e.on(l, "mouseover", function(e) {
         r(e, t, l)
      }), a
   }

   function l(e) {
      var t = e.severity;
      t || (t = "error");
      var n = document.createElement("div");
      return n.className = "CodeMirror-lint-message-" + t, void 0 !== e.messageHTML ? n.innerHTML = e.messageHTML : n.appendChild(document.createTextNode(e.message)), n
   }

   function s(t) {
      var n = t.state.lint.options, r = n.options || n, i = n.getAnnotations || t.getHelper(e.Pos(0, 0), "lint");
      if (i) if (n.async || i.async) !function(t, n, r) {
         var i = t.state.lint, o = ++i.waitingFor;

         function a() {
            o = -1, t.off("change", a)
         }

         t.on("change", a), n(t.getValue(), function(n, r) {
            t.off("change", a), i.waitingFor == o && (r && n instanceof e && (n = r), t.operation(function() {
               c(t, n)
            }))
         }, r, t)
      }(t, i, r); else {
         var o = i(t.getValue(), r, t);
         if (!o) return;
         o.then ? o.then(function(e) {
            t.operation(function() {
               c(t, e)
            })
         }) : t.operation(function() {
            c(t, o)
         })
      }
   }

   function c(e, n) {
      o(e);
      for (var r, i, s = e.state.lint, c = s.options, u = function(e) {
         for (var t = [], n = 0; n < e.length; ++n) {
            var r = e[n], i = r.from.line;
            (t[i] || (t[i] = [])).push(r)
         }
         return t
      }(n), d = 0; d < u.length; ++d) {
         var f = u[d];
         if (f) {
            for (var h = null, p = s.hasGutter && document.createDocumentFragment(), m = 0; m < f.length; ++m) {
               var g = f[m], v = g.severity;
               v || (v = "error"), i = v, h = "error" == (r = h) ? r : i, c.formatAnnotation && (g = c.formatAnnotation(g)), s.hasGutter && p.appendChild(l(g)), g.to && s.marked.push(e.markText(g.from, g.to, {
                  className: "CodeMirror-lint-mark-" + v,
                  __annotation: g
               }))
            }
            s.hasGutter && e.setGutterMarker(d, t, a(p, h, f.length > 1, s.options.tooltips))
         }
      }
      c.onUpdateLinting && c.onUpdateLinting(n, u, e)
   }

   function u(e) {
      var t = e.state.lint;
      t && (clearTimeout(t.timeout), t.timeout = setTimeout(function() {
         s(e)
      }, t.options.delay || 500))
   }

   e.defineOption("lint", !1, function(n, r, a) {
      if (a && a != e.Init && (o(n), !1 !== n.state.lint.options.lintOnChange && n.off("change", u), e.off(n.getWrapperElement(), "mouseover", n.state.lint.onMouseOver), clearTimeout(n.state.lint.timeout), delete n.state.lint), r) {
         for (var l = n.getOption("gutters"), c = !1, d = 0; d < l.length; ++d) l[d] == t && (c = !0);
         var f = n.state.lint = new i(n, (h = r) instanceof Function ? {getAnnotations: h} : (h && !0 !== h || (h = {}), h), c);
         !1 !== f.options.lintOnChange && n.on("change", u), 0 != f.options.tooltips && "gutter" != f.options.tooltips && e.on(n.getWrapperElement(), "mouseover", f.onMouseOver), s(n)
      }
      var h
   }), e.defineExtension("performLint", function() {
      this.state.lint && s(this)
   })
}, cm.addon.merge = function(e) {
   "use strict";
   var t = e.Pos, n = "http://www.w3.org/2000/svg";

   function r(e, t) {
      this.mv = e, this.type = t, this.classes = "left" == t ? {
         chunk: "CodeMirror-merge-l-chunk",
         start: "CodeMirror-merge-l-chunk-start",
         end: "CodeMirror-merge-l-chunk-end",
         insert: "CodeMirror-merge-l-inserted",
         del: "CodeMirror-merge-l-deleted",
         connect: "CodeMirror-merge-l-connect"
      } : {
         chunk: "CodeMirror-merge-r-chunk",
         start: "CodeMirror-merge-r-chunk-start",
         end: "CodeMirror-merge-r-chunk-end",
         insert: "CodeMirror-merge-r-inserted",
         del: "CodeMirror-merge-r-deleted",
         connect: "CodeMirror-merge-r-connect"
      }
   }

   function i(t) {
      t.diffOutOfDate && (t.diff = M(t.orig.getValue(), t.edit.getValue(), t.mv.options.ignoreWhitespace), t.chunks = _(t.diff), t.diffOutOfDate = !1, e.signal(t.edit, "updateDiff", t.diff))
   }

   r.prototype = {
      constructor: r, init: function(t, n, r) {
         this.edit = this.mv.edit, (this.edit.state.diffViews || (this.edit.state.diffViews = [])).push(this), this.orig = e(t, H({
            value: n,
            readOnly: !this.mv.options.allowEditingOriginals
         }, H(r))), "align" == this.mv.options.connect && (this.edit.state.trackAlignable || (this.edit.state.trackAlignable = new B(this.edit)), this.orig.state.trackAlignable = new B(this.orig)), this.lockButton.title = this.edit.phrase("Toggle locked scrolling"), this.orig.state.diffViews = [this];
         var i = r.chunkClassLocation || "background";
         "[object Array]" != Object.prototype.toString.call(i) && (i = [i]), this.classes.classLocation = i, this.diff = M(L(n), L(r.value), this.mv.options.ignoreWhitespace), this.chunks = _(this.diff), this.diffOutOfDate = this.dealigned = !1, this.needsScrollSync = null, this.showDifferences = !1 !== r.showDifferences
      }, registerEvents: function(t) {
         this.forceUpdate = function(t) {
            var n, r = {from: 0, to: 0, marked: []}, l = {from: 0, to: 0, marked: []}, s = !1;

            function c(e) {
               o = !0, s = !1, "full" == e && (t.svg && D(t.svg), t.copyButtons && D(t.copyButtons), u(t.edit, r.marked, t.classes), u(t.orig, l.marked, t.classes), r.from = r.to = l.from = l.to = 0), i(t), t.showDifferences && (d(t.edit, t.diff, r, DIFF_INSERT, t.classes), d(t.orig, t.diff, l, DIFF_DELETE, t.classes)), "align" == t.mv.options.connect && y(t), p(t), null != t.needsScrollSync && a(t, t.needsScrollSync), o = !1
            }

            function f(e) {
               o || (t.dealigned = !0, h(e))
            }

            function h(e) {
               o || s || (clearTimeout(n), !0 === e && (s = !0), n = setTimeout(c, !0 === e ? 20 : 250))
            }

            function m(e, n) {
               t.diffOutOfDate || (t.diffOutOfDate = !0, r.from = r.to = l.from = l.to = 0), f(n.text.length - 1 != n.to.line - n.from.line)
            }

            function g() {
               t.diffOutOfDate = !0, t.dealigned = !0, c("full")
            }

            t.edit.on("change", m), t.orig.on("change", m), t.edit.on("swapDoc", g), t.orig.on("swapDoc", g), "align" == t.mv.options.connect && (e.on(t.edit.state.trackAlignable, "realign", f), e.on(t.orig.state.trackAlignable, "realign", f));
            return t.edit.on("viewportChange", function() {
               h(!1)
            }), t.orig.on("viewportChange", function() {
               h(!1)
            }), c(), c
         }(this), s(this, !0, !1), function(e, t) {
            e.edit.on("scroll", function() {
               a(e, !0) && p(e)
            }), e.orig.on("scroll", function() {
               a(e, !1) && p(e), t && a(t, !0) && p(t)
            })
         }(this, t)
      }, setShowDifferences: function(e) {
         (e = !1 !== e) != this.showDifferences && (this.showDifferences = e, this.forceUpdate("full"))
      }
   };
   var o = !1;

   function a(e, t) {
      if (e.diffOutOfDate) return e.lockScroll && null == e.needsScrollSync && (e.needsScrollSync = t), !1;
      if (e.needsScrollSync = null, !e.lockScroll) return !0;
      var n, r, i = +new Date;
      if (t ? (n = e.edit, r = e.orig) : (n = e.orig, r = e.edit), n.state.scrollSetBy == e && (n.state.scrollSetAt || 0) + 250 > i) return !1;
      var o = n.getScrollInfo();
      if ("align" == e.mv.options.connect) g = o.top; else {
         var a, s, c = .5 * o.clientHeight, u = o.top + c, d = n.lineAtHeight(u, "local"), f = function(e, t, n) {
               for (var r, i, o, a, l = 0; l < e.length; l++) {
                  var s = e[l], c = n ? s.editFrom : s.origFrom, u = n ? s.editTo : s.origTo;
                  null == i && (c > t ? (i = s.editFrom, a = s.origFrom) : u > t && (i = s.editTo, a = s.origTo)), u <= t ? (r = s.editTo, o = s.origTo) : c <= t && (r = s.editFrom, o = s.origFrom)
               }
               return {edit: {before: r, after: i}, orig: {before: o, after: a}}
            }(e.chunks, d, t), h = l(n, t ? f.edit : f.orig), p = l(r, t ? f.orig : f.edit),
            m = (u - h.top) / (h.bot - h.top), g = p.top - c + m * (p.bot - p.top);
         if (g > o.top && (s = o.top / c) < 1) g = g * s + o.top * (1 - s); else if ((a = o.height - o.clientHeight - o.top) < c) {
            var v = r.getScrollInfo();
            v.height - v.clientHeight - g > a && (s = a / c) < 1 && (g = g * s + (v.height - v.clientHeight - a) * (1 - s))
         }
      }
      return r.scrollTo(o.left, g), r.state.scrollSetAt = i, r.state.scrollSetBy = e, !0
   }

   function l(e, t) {
      var n = t.after;
      return null == n && (n = e.lastLine() + 1), {
         top: e.heightAtLine(t.before || 0, "local"),
         bot: e.heightAtLine(n, "local")
      }
   }

   function s(t, n, r) {
      t.lockScroll = n, n && 0 != r && a(t, DIFF_INSERT) && p(t), (n ? e.addClass : e.rmClass)(t.lockButton, "CodeMirror-merge-scrolllock-enabled")
   }

   function c(e, t, n) {
      for (var r = n.classLocation, i = 0; i < r.length; i++) e.removeLineClass(t, r[i], n.chunk), e.removeLineClass(t, r[i], n.start), e.removeLineClass(t, r[i], n.end)
   }

   function u(t, n, r) {
      for (var i = 0; i < n.length; ++i) {
         var o = n[i];
         o instanceof e.TextMarker ? o.clear() : o.parent && c(t, o, r)
      }
      n.length = 0
   }

   function d(e, t, n, r, i) {
      var o = e.getViewport();
      e.operation(function() {
         n.from == n.to || o.from - n.to > 20 || n.from - o.to > 20 ? (u(e, n.marked, i), h(e, t, r, n.marked, o.from, o.to, i), n.from = o.from, n.to = o.to) : (o.from < n.from && (h(e, t, r, n.marked, o.from, n.from, i), n.from = o.from), o.to > n.to && (h(e, t, r, n.marked, n.to, o.to, i), n.to = o.to))
      })
   }

   function f(e, t, n, r, i, o) {
      for (var a = n.classLocation, l = e.getLineHandle(t), s = 0; s < a.length; s++) r && e.addLineClass(l, a[s], n.chunk), i && e.addLineClass(l, a[s], n.start), o && e.addLineClass(l, a[s], n.end);
      return l
   }

   function h(e, n, r, i, o, a, l) {
      var s = t(0, 0), c = t(o, 0), u = e.clipPos(t(a - 1)), d = r == DIFF_DELETE ? l.del : l.insert;

      function h(t, n) {
         for (var r = Math.max(o, t), s = Math.min(a, n), c = r; c < s; ++c) i.push(f(e, c, l, !0, c == t, c == n - 1));
         t == n && r == n && s == n && (r ? i.push(f(e, r - 1, l, !1, !1, !0)) : i.push(f(e, r, l, !1, !0, !1)))
      }

      for (var p = 0, m = !1, g = 0; g < n.length; ++g) {
         var v = n[g], y = v[0], b = v[1];
         if (y == DIFF_EQUAL) {
            var w = s.line + (A(n, g) ? 0 : 1);
            W(s, b);
            var x = s.line + (O(n, g) ? 1 : 0);
            x > w && (m && (h(p, w), m = !1), p = x)
         } else if (m = !0, y == r) {
            var k = W(s, b, !0), C = U(c, s), S = j(u, k);
            V(C, S) || i.push(e.markText(C, S, {className: d})), s = k
         }
      }
      m && h(p, s.line + 1)
   }

   function p(e) {
      if (e.showDifferences) {
         if (e.svg) {
            D(e.svg);
            var t = e.gap.offsetWidth;
            E(e.svg, "width", t, "height", e.gap.offsetHeight)
         }
         e.copyButtons && D(e.copyButtons);
         for (var n = e.edit.getViewport(), r = e.orig.getViewport(), i = e.mv.wrap.getBoundingClientRect().top, o = i - e.edit.getScrollerElement().getBoundingClientRect().top + e.edit.getScrollInfo().top, a = i - e.orig.getScrollerElement().getBoundingClientRect().top + e.orig.getScrollInfo().top, l = 0; l < e.chunks.length; l++) {
            var s = e.chunks[l];
            s.editFrom <= n.to && s.editTo >= n.from && s.origFrom <= r.to && s.origTo >= r.from && x(e, s, a, o, t)
         }
      }
   }

   function m(e, t) {
      for (var n = 0, r = 0, i = 0; i < t.length; i++) {
         var o = t[i];
         if (o.editTo > e && o.editFrom <= e) return null;
         if (o.editFrom > e) break;
         n = o.editTo, r = o.origTo
      }
      return r + (e - n)
   }

   function g(e, t, n) {
      for (var r = e.state.trackAlignable, i = e.firstLine(), o = 0, a = [], l = 0; ; l++) {
         for (var s = t[l], c = s ? n ? s.origFrom : s.editFrom : 1e9; o < r.alignable.length; o += 2) {
            var u = r.alignable[o] + 1;
            if (!(u <= i)) {
               if (!(u <= c)) break;
               a.push(u)
            }
         }
         if (!s) break;
         a.push(i = n ? s.origTo : s.editTo)
      }
      return a
   }

   function v(e, t, n, r) {
      var i = 0, o = 0, a = 0, l = 0;
      e:for (; ; i++) {
         var s = e[i], c = t[o];
         if (!s && null == c) break;
         for (var u = s ? s[0] : 1e9, d = null == c ? 1e9 : c; a < n.length;) {
            var f = n[a];
            if (f.origFrom <= d && f.origTo > d) {
               o++, i--;
               continue e
            }
            if (f.editTo > u) {
               if (f.editFrom <= u) continue e;
               break
            }
            l += f.origTo - f.origFrom - (f.editTo - f.editFrom), a++
         }
         if (u == d - l) s[r] = d, o++; else if (u < d - l) s[r] = u + l; else {
            var h = [d - l, null, null];
            h[r] = d, e.splice(i, 0, h), o++
         }
      }
   }

   function y(e, t) {
      if (e.dealigned || t) {
         if (!e.orig.curOp) return e.orig.operation(function() {
            y(e, t)
         });
         e.dealigned = !1;
         var n = e.mv.left == e ? e.mv.right : e.mv.left;
         n && (i(n), n.dealigned = !1);
         for (var r = function(e, t) {
            var n = g(e.edit, e.chunks, !1), r = [];
            if (t) for (var i = 0, o = 0; i < t.chunks.length; i++) {
               for (var a = t.chunks[i].editTo; o < n.length && n[o] < a;) o++;
               o != n.length && n[o] == a || n.splice(o++, 0, a)
            }
            for (i = 0; i < n.length; i++) r.push([n[i], null, null]);
            return v(r, g(e.orig, e.chunks, !0), e.chunks, 1), t && v(r, g(t.orig, t.chunks, !0), t.chunks, 2), r
         }(e, n), o = e.mv.aligners, a = 0; a < o.length; a++) o[a].clear();
         o.length = 0;
         var l = [e.edit, e.orig], s = [];
         n && l.push(n.orig);
         for (a = 0; a < l.length; a++) s.push(l[a].getScrollInfo().top);
         for (var c = 0; c < r.length; c++) b(l, r[c], o);
         for (a = 0; a < l.length; a++) l[a].scrollTo(null, s[a])
      }
   }

   function b(e, t, n) {
      for (var r = 0, i = [], o = 0; o < e.length; o++) if (null != t[o]) {
         var a = e[o].heightAtLine(t[o], "local");
         i[o] = a, r = Math.max(r, a)
      }
      for (o = 0; o < e.length; o++) if (null != t[o]) {
         var l = r - i[o];
         l > 1 && n.push(w(e[o], t[o], l))
      }
   }

   function w(e, t, n) {
      var r = !0;
      t > e.lastLine() && (t--, r = !1);
      var i = document.createElement("div");
      return i.className = "CodeMirror-merge-spacer", i.style.height = n + "px", i.style.minWidth = "1px", e.addLineWidget(t, i, {
         height: n,
         above: r,
         mergeSpacer: !0,
         handleMouseEvents: !0
      })
   }

   function x(e, t, r, i, o) {
      var a = "left" == e.type, l = e.orig.heightAtLine(t.origFrom, "local", !0) - r;
      if (e.svg) {
         var s = l, c = e.edit.heightAtLine(t.editFrom, "local", !0) - i;
         if (a) {
            var u = s;
            s = c, c = u
         }
         var d = e.orig.heightAtLine(t.origTo, "local", !0) - r, f = e.edit.heightAtLine(t.editTo, "local", !0) - i;
         if (a) {
            u = d;
            d = f, f = u
         }
         var h = " C " + o / 2 + " " + c + " " + o / 2 + " " + s + " " + (o + 2) + " " + s,
            p = " C " + o / 2 + " " + d + " " + o / 2 + " " + f + " -1 " + f;
         E(e.svg.appendChild(document.createElementNS(n, "path")), "d", "M -1 " + c + h + " L " + (o + 2) + " " + d + p + " z", "class", e.classes.connect)
      }
      if (e.copyButtons) {
         var m = e.copyButtons.appendChild(P("div", "left" == e.type ? "⇝" : "⇜", "CodeMirror-merge-copy")),
            g = e.mv.options.allowEditingOriginals;
         if (m.title = e.edit.phrase(g ? "Push to left" : "Revert chunk"), m.chunk = t, m.style.top = (t.origTo > t.origFrom ? l : e.edit.heightAtLine(t.editFrom, "local") - i) + "px", g) {
            var v = e.edit.heightAtLine(t.editFrom, "local") - i,
               y = e.copyButtons.appendChild(P("div", "right" == e.type ? "⇝" : "⇜", "CodeMirror-merge-copy-reverse"));
            y.title = "Push to right", y.chunk = {
               editFrom: t.origFrom,
               editTo: t.origTo,
               origFrom: t.editFrom,
               origTo: t.editTo
            }, y.style.top = v + "px", "right" == e.type ? y.style.left = "2px" : y.style.right = "2px"
         }
      }
   }

   function k(e, n, r, i) {
      if (!e.diffOutOfDate) {
         var o = i.origTo > r.lastLine() ? t(i.origFrom - 1) : t(i.origFrom, 0), a = t(i.origTo, 0),
            l = i.editTo > n.lastLine() ? t(i.editFrom - 1) : t(i.editFrom, 0), s = t(i.editTo, 0),
            c = e.mv.options.revertChunk;
         c ? c(e.mv, r, o, a, n, l, s) : n.replaceRange(r.getRange(o, a), l, s)
      }
   }

   var C, S = e.MergeView = function(t, n) {
      if (!(this instanceof S)) return new S(t, n);
      this.options = n;
      var i = n.origLeft, o = null == n.origRight ? n.orig : n.origRight, a = null != i, l = null != o,
         s = 1 + (a ? 1 : 0) + (l ? 1 : 0), c = [], u = this.left = null, d = this.right = null, f = this;
      if (a) {
         u = this.left = new r(this, "left");
         var h = P("div", null, "CodeMirror-merge-pane CodeMirror-merge-left");
         c.push(h), c.push(T(u))
      }
      var g = P("div", null, "CodeMirror-merge-pane CodeMirror-merge-editor");
      if (c.push(g), l) {
         d = this.right = new r(this, "right"), c.push(T(d));
         var v = P("div", null, "CodeMirror-merge-pane CodeMirror-merge-right");
         c.push(v)
      }
      (l ? v : g).className += " CodeMirror-merge-pane-rightmost", c.push(P("div", null, null, "height: 0; clear: both;"));
      var b = this.wrap = t.appendChild(P("div", c, "CodeMirror-merge CodeMirror-merge-" + s + "pane"));
      this.edit = e(g, H(n)), u && u.init(h, i, n), d && d.init(v, o, n), n.collapseIdentical && this.editor().operation(function() {
         !function(e, t) {
            "number" != typeof t && (t = 2);
            for (var n = [], r = e.editor(), i = r.firstLine(), o = i, a = r.lastLine(); o <= a; o++) n.push(!0);
            e.left && F(e.left, t, i, n);
            e.right && F(e.right, t, i, n);
            for (var l = 0; l < n.length; l++) if (n[l]) {
               for (var s = l + i, c = 1; l < n.length - 1 && n[l + 1]; l++, c++) ;
               if (c > t) {
                  var u = [{line: s, cm: r}];
                  e.left && u.push({
                     line: m(s, e.left.chunks),
                     cm: e.left.orig
                  }), e.right && u.push({line: m(s, e.right.chunks), cm: e.right.orig});
                  var d = z(c, u);
                  e.options.onCollapse && e.options.onCollapse(e, s, c, d)
               }
            }
         }(f, n.collapseIdentical)
      }), "align" == n.connect && (this.aligners = [], y(this.left || this.right, !0)), u && u.registerEvents(d), d && d.registerEvents(u);
      var w = function() {
         u && p(u), d && p(d)
      };
      e.on(window, "resize", w);
      var x = setInterval(function() {
         for (var t = b.parentNode; t && t != document.body; t = t.parentNode) ;
         t || (clearInterval(x), e.off(window, "resize", w))
      }, 5e3)
   };

   function T(t) {
      var r = t.lockButton = P("div", null, "CodeMirror-merge-scrolllock"),
         i = P("div", [r], "CodeMirror-merge-scrolllock-wrap");
      e.on(r, "click", function() {
         s(t, !t.lockScroll)
      });
      var o = [i];
      if (!1 !== t.mv.options.revertButtons && (t.copyButtons = P("div", null, "CodeMirror-merge-copybuttons-" + t.type), e.on(t.copyButtons, "click", function(e) {
         var n = e.target || e.srcElement;
         n.chunk && ("CodeMirror-merge-copy-reverse" != n.className ? k(t, t.edit, t.orig, n.chunk) : k(t, t.orig, t.edit, n.chunk))
      }), o.unshift(t.copyButtons)), "align" != t.mv.options.connect) {
         var a = document.createElementNS && document.createElementNS(n, "svg");
         a && !a.createSVGRect && (a = null), t.svg = a, a && o.push(a)
      }
      return t.gap = P("div", o, "CodeMirror-merge-gap")
   }

   function L(e) {
      return "string" == typeof e ? e : e.getValue()
   }

   function M(e, t, n) {
      C || (C = new diff_match_patch);
      for (var r = C.diff_main(e, t), i = 0; i < r.length; ++i) {
         var o = r[i];
         (n ? /[^ \t]/.test(o[1]) : o[1]) ? i && r[i - 1][0] == o[0] && (r.splice(i--, 1), r[i][1] += o[1]) : r.splice(i--, 1)
      }
      return r
   }

   function _(e) {
      var n = [];
      if (!e.length) return n;
      for (var r = 0, i = 0, o = t(0, 0), a = t(0, 0), l = 0; l < e.length; ++l) {
         var s = e[l], c = s[0];
         if (c == DIFF_EQUAL) {
            var u = !A(e, l) || o.line < r || a.line < i ? 1 : 0, d = o.line + u, f = a.line + u;
            W(o, s[1], null, a);
            var h = O(e, l) ? 1 : 0, p = o.line + h, m = a.line + h;
            p > d && (l && n.push({origFrom: i, origTo: f, editFrom: r, editTo: d}), r = p, i = m)
         } else W(c == DIFF_INSERT ? o : a, s[1])
      }
      return (r <= o.line || i <= a.line) && n.push({
         origFrom: i,
         origTo: a.line + 1,
         editFrom: r,
         editTo: o.line + 1
      }), n
   }

   function O(e, t) {
      if (t == e.length - 1) return !0;
      var n = e[t + 1][1];
      return !(1 == n.length && t < e.length - 2 || 10 != n.charCodeAt(0)) && (t == e.length - 2 || ((n = e[t + 2][1]).length > 1 || t == e.length - 3) && 10 == n.charCodeAt(0))
   }

   function A(e, t) {
      if (0 == t) return !0;
      var n = e[t - 1][1];
      return 10 == n.charCodeAt(n.length - 1) && (1 == t || 10 == (n = e[t - 2][1]).charCodeAt(n.length - 1))
   }

   function N(n, r, i) {
      n.addLineClass(r, "wrap", "CodeMirror-merge-collapsed-line");
      var o = document.createElement("span");
      o.className = "CodeMirror-merge-collapsed-widget", o.title = n.phrase("Identical text collapsed. Click to expand.");
      var a = n.markText(t(r, 0), t(i - 1), {inclusiveLeft: !0, inclusiveRight: !0, replacedWith: o, clearOnEnter: !0});

      function l() {
         a.clear(), n.removeLineClass(r, "wrap", "CodeMirror-merge-collapsed-line")
      }

      return a.explicitlyCleared && l(), e.on(o, "click", l), a.on("clear", l), e.on(o, "click", l), {mark: a, clear: l}
   }

   function z(e, t) {
      var n = [];

      function r() {
         for (var e = 0; e < n.length; e++) n[e].clear()
      }

      for (var i = 0; i < t.length; i++) {
         var o = t[i], a = N(o.cm, o.line, o.line + e);
         n.push(a), a.mark.on("clear", r)
      }
      return n[0].mark
   }

   function F(e, t, n, r) {
      for (var i = 0; i < e.chunks.length; i++) for (var o = e.chunks[i], a = o.editFrom - t; a < o.editTo + t; a++) {
         var l = a + n;
         l >= 0 && l < r.length && (r[l] = !1)
      }
   }

   function P(e, t, n, r) {
      var i = document.createElement(e);
      if (n && (i.className = n), r && (i.style.cssText = r), "string" == typeof t) i.appendChild(document.createTextNode(t)); else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
      return i
   }

   function D(e) {
      for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild)
   }

   function E(e) {
      for (var t = 1; t < arguments.length; t += 2) e.setAttribute(arguments[t], arguments[t + 1])
   }

   function H(e, t) {
      for (var n in t || (t = {}), e) e.hasOwnProperty(n) && (t[n] = e[n]);
      return t
   }

   function W(e, n, r, i) {
      for (var o = r ? t(e.line, e.ch) : e, a = 0; ;) {
         var l = n.indexOf("\n", a);
         if (-1 == l) break;
         ++o.line, i && ++i.line, a = l + 1
      }
      return o.ch = (a ? 0 : o.ch) + (n.length - a), i && (i.ch = (a ? 0 : i.ch) + (n.length - a)), o
   }

   S.prototype = {
      constructor: S, editor: function() {
         return this.edit
      }, rightOriginal: function() {
         return this.right && this.right.orig
      }, leftOriginal: function() {
         return this.left && this.left.orig
      }, setShowDifferences: function(e) {
         this.right && this.right.setShowDifferences(e), this.left && this.left.setShowDifferences(e)
      }, rightChunks: function() {
         if (this.right) return i(this.right), this.right.chunks
      }, leftChunks: function() {
         if (this.left) return i(this.left), this.left.chunks
      }
   };
   var I = 1, R = 2, q = 4;

   function B(e) {
      this.cm = e, this.alignable = [], this.height = e.doc.height;
      var t = this;
      e.on("markerAdded", function(e, n) {
         if (n.collapsed) {
            var r = n.find(1);
            null != r && t.set(r.line, q)
         }
      }), e.on("markerCleared", function(e, n, r, i) {
         null != i && n.collapsed && t.check(i, q, t.hasMarker)
      }), e.on("markerChanged", this.signal.bind(this)), e.on("lineWidgetAdded", function(e, n, r) {
         n.mergeSpacer || (n.above ? t.set(r - 1, R) : t.set(r, I))
      }), e.on("lineWidgetCleared", function(e, n, r) {
         n.mergeSpacer || (n.above ? t.check(r - 1, R, t.hasWidgetBelow) : t.check(r, I, t.hasWidget))
      }), e.on("lineWidgetChanged", this.signal.bind(this)), e.on("change", function(e, n) {
         var r = n.from.line, i = n.to.line - n.from.line, o = n.text.length - 1, a = r + o;
         (i || o) && t.map(r, i, o), t.check(a, q, t.hasMarker), (i || o) && t.check(n.from.line, q, t.hasMarker)
      }), e.on("viewportChange", function() {
         t.cm.doc.height != t.height && t.signal()
      })
   }

   function j(e, t) {
      return (e.line - t.line || e.ch - t.ch) < 0 ? e : t
   }

   function U(e, t) {
      return (e.line - t.line || e.ch - t.ch) > 0 ? e : t
   }

   function V(e, t) {
      return e.line == t.line && e.ch == t.ch
   }

   function G(e, t, n) {
      for (var r = e.length - 1; r >= 0; r--) {
         var i = e[r], o = (n ? i.origTo : i.editTo) - 1;
         if (o < t) return o
      }
   }

   function K(e, t, n) {
      for (var r = 0; r < e.length; r++) {
         var i = e[r], o = n ? i.origFrom : i.editFrom;
         if (o > t) return o
      }
   }

   function $(t, n) {
      var r = null, o = t.state.diffViews, a = t.getCursor().line;
      if (o) for (var l = 0; l < o.length; l++) {
         var s = o[l], c = t == s.orig;
         i(s);
         var u = n < 0 ? G(s.chunks, a, c) : K(s.chunks, a, c);
         null == u || null != r && !(n < 0 ? u > r : u < r) || (r = u)
      }
      if (null == r) return e.Pass;
      t.setCursor(r, 0)
   }

   B.prototype = {
      signal: function() {
         e.signal(this, "realign"), this.height = this.cm.doc.height
      }, set: function(e, t) {
         for (var n = -1; n < this.alignable.length; n += 2) {
            var r = this.alignable[n] - e;
            if (0 == r) {
               if ((this.alignable[n + 1] & t) == t) return;
               return this.alignable[n + 1] |= t, void this.signal()
            }
            if (r > 0) break
         }
         this.signal(), this.alignable.splice(n, 0, e, t)
      }, find: function(e) {
         for (var t = 0; t < this.alignable.length; t += 2) if (this.alignable[t] == e) return t;
         return -1
      }, check: function(e, t, n) {
         var r = this.find(e);
         if (-1 != r && this.alignable[r + 1] & t && !n.call(this, e)) {
            this.signal();
            var i = this.alignable[r + 1] & ~t;
            i ? this.alignable[r + 1] = i : this.alignable.splice(r, 2)
         }
      }, hasMarker: function(e) {
         var t = this.cm.getLineHandle(e);
         if (t.markedSpans) for (var n = 0; n < t.markedSpans.length; n++) if (t.markedSpans[n].mark.collapsed && null != t.markedSpans[n].to) return !0;
         return !1
      }, hasWidget: function(e) {
         var t = this.cm.getLineHandle(e);
         if (t.widgets) for (var n = 0; n < t.widgets.length; n++) if (!t.widgets[n].above && !t.widgets[n].mergeSpacer) return !0;
         return !1
      }, hasWidgetBelow: function(e) {
         if (e == this.cm.lastLine()) return !1;
         var t = this.cm.getLineHandle(e + 1);
         if (t.widgets) for (var n = 0; n < t.widgets.length; n++) if (t.widgets[n].above && !t.widgets[n].mergeSpacer) return !0;
         return !1
      }, map: function(e, t, n) {
         for (var r = n - t, i = e + t, o = -1, a = -1, l = 0; l < this.alignable.length; l += 2) {
            var s = this.alignable[l];
            s == e && this.alignable[l + 1] & R && (o = l), s == i && this.alignable[l + 1] & R && (a = l), s <= e || (s < i ? this.alignable.splice(l--, 2) : this.alignable[l] += r)
         }
         if (o > -1) {
            var c = this.alignable[o + 1];
            c == R ? this.alignable.splice(o, 2) : this.alignable[o + 1] = c & ~R
         }
         a > -1 && n && this.set(e + n, R)
      }
   }, e.commands.goNextDiff = function(e) {
      return $(e, 1)
   }, e.commands.goPrevDiff = function(e) {
      return $(e, -1)
   }
}, cm.mode.python = function(e) {
   "use strict";

   function t(e) {
      return new RegExp("^((" + e.join(")|(") + "))\\b")
   }

   var n = t(["and", "or", "not", "is"]),
      r = ["as", "assert", "break", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "lambda", "pass", "raise", "return", "try", "while", "with", "yield", "in"],
      i = ["abs", "all", "any", "bin", "bool", "bytearray", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip", "__import__", "NotImplemented", "Ellipsis", "__debug__"];

   function o(e) {
      return e.scopes[e.scopes.length - 1]
   }

   e.registerHelper("hintWords", "python", r.concat(i)), e.defineMode("python", function(a, l) {
      for (var s = "error", c = l.delimiters || l.singleDelimiters || /^[\(\)\[\]\{\}@,:`=;\.\\]/, u = [l.singleOperators, l.doubleOperators, l.doubleDelimiters, l.tripleDelimiters, l.operators || /^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@])/], d = 0; d < u.length; d++) u[d] || u.splice(d--, 1);
      var f = l.hangingIndent || a.indentUnit, h = r, p = i;
      null != l.extra_keywords && (h = h.concat(l.extra_keywords)), null != l.extra_builtins && (p = p.concat(l.extra_builtins));
      var m = !(l.version && Number(l.version) < 3);
      if (m) {
         var g = l.identifiers || /^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;
         h = h.concat(["nonlocal", "False", "True", "None", "async", "await"]), p = p.concat(["ascii", "bytes", "exec", "print"]);
         var v = new RegExp("^(([rbuf]|(br)|(fr))?('{3}|\"{3}|['\"]))", "i")
      } else {
         g = l.identifiers || /^[_A-Za-z][_A-Za-z0-9]*/;
         h = h.concat(["exec", "print"]), p = p.concat(["apply", "basestring", "buffer", "cmp", "coerce", "execfile", "file", "intern", "long", "raw_input", "reduce", "reload", "unichr", "unicode", "xrange", "False", "True", "None"]);
         v = new RegExp("^(([rubf]|(ur)|(br))?('{3}|\"{3}|['\"]))", "i")
      }
      var y = t(h), b = t(p);

      function w(e, t) {
         var n = e.sol() && "\\" != t.lastToken;
         if (n && (t.indent = e.indentation()), n && "py" == o(t).type) {
            var r = o(t).offset;
            if (e.eatSpace()) {
               var i = e.indentation();
               return i > r ? k(t) : i < r && C(e, t) && "#" != e.peek() && (t.errorToken = !0), null
            }
            var a = x(e, t);
            return r > 0 && C(e, t) && (a += " " + s), a
         }
         return x(e, t)
      }

      function x(e, t) {
         if (e.eatSpace()) return null;
         if (e.match(/^#.*/)) return "comment";
         if (e.match(/^[0-9\.]/, !1)) {
            var r = !1;
            if (e.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i) && (r = !0), e.match(/^[\d_]+\.\d*/) && (r = !0), e.match(/^\.\d+/) && (r = !0), r) return e.eat(/J/i), "number";
            var i = !1;
            if (e.match(/^0x[0-9a-f_]+/i) && (i = !0), e.match(/^0b[01_]+/i) && (i = !0), e.match(/^0o[0-7_]+/i) && (i = !0), e.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/) && (e.eat(/J/i), i = !0), e.match(/^0(?![\dx])/i) && (i = !0), i) return e.eat(/L/i), "number"
         }
         if (e.match(v)) return -1 !== e.current().toLowerCase().indexOf("f") ? (t.tokenize = function(e, t) {
            for (; "rubf".indexOf(e.charAt(0).toLowerCase()) >= 0;) e = e.substr(1);
            var n = 1 == e.length, r = "string";

            function i(e) {
               return function(t, n) {
                  var r = x(t, n);
                  return "punctuation" == r && ("{" == t.current() ? n.tokenize = i(e + 1) : "}" == t.current() && (n.tokenize = e > 1 ? i(e - 1) : o)), r
               }
            }

            function o(o, a) {
               for (; !o.eol();) if (o.eatWhile(/[^'"\{\}\\]/), o.eat("\\")) {
                  if (o.next(), n && o.eol()) return r
               } else {
                  if (o.match(e)) return a.tokenize = t, r;
                  if (o.match("{{")) return r;
                  if (o.match("{", !1)) return a.tokenize = i(0), o.current() ? r : a.tokenize(o, a);
                  if (o.match("}}")) return r;
                  if (o.match("}")) return s;
                  o.eat(/['"]/)
               }
               if (n) {
                  if (l.singleLineStringErrors) return s;
                  a.tokenize = t
               }
               return r
            }

            return o.isString = !0, o
         }(e.current(), t.tokenize), t.tokenize(e, t)) : (t.tokenize = function(e, t) {
            for (; "rubf".indexOf(e.charAt(0).toLowerCase()) >= 0;) e = e.substr(1);
            var n = 1 == e.length, r = "string";

            function i(i, o) {
               for (; !i.eol();) if (i.eatWhile(/[^'"\\]/), i.eat("\\")) {
                  if (i.next(), n && i.eol()) return r
               } else {
                  if (i.match(e)) return o.tokenize = t, r;
                  i.eat(/['"]/)
               }
               if (n) {
                  if (l.singleLineStringErrors) return s;
                  o.tokenize = t
               }
               return r
            }

            return i.isString = !0, i
         }(e.current(), t.tokenize), t.tokenize(e, t));
         for (var o = 0; o < u.length; o++) if (e.match(u[o])) return "operator";
         return e.match(c) ? "punctuation" : "." == t.lastToken && e.match(g) ? "property" : e.match(y) || e.match(n) ? "keyword" : e.match(b) ? "builtin" : e.match(/^(self|cls)\b/) ? "variable-2" : e.match(g) ? "def" == t.lastToken || "class" == t.lastToken ? "def" : "variable" : (e.next(), s)
      }

      function k(e) {
         for (; "py" != o(e).type;) e.scopes.pop();
         e.scopes.push({offset: o(e).offset + a.indentUnit, type: "py", align: null})
      }

      function C(e, t) {
         for (var n = e.indentation(); t.scopes.length > 1 && o(t).offset > n;) {
            if ("py" != o(t).type) return !0;
            t.scopes.pop()
         }
         return o(t).offset != n
      }

      function S(e, t) {
         e.sol() && (t.beginningOfLine = !0);
         var n = t.tokenize(e, t), r = e.current();
         if (t.beginningOfLine && "@" == r) return e.match(g, !1) ? "meta" : m ? "operator" : s;
         if (/\S/.test(r) && (t.beginningOfLine = !1), "variable" != n && "builtin" != n || "meta" != t.lastToken || (n = "meta"), "pass" != r && "return" != r || (t.dedent += 1), "lambda" == r && (t.lambda = !0), ":" != r || t.lambda || "py" != o(t).type || k(t), 1 == r.length && !/string|comment/.test(n)) {
            var i = "[({".indexOf(r);
            if (-1 != i && function(e, t, n) {
               var r = e.match(/^([\s\[\{\(]|#.*)*$/, !1) ? null : e.column() + 1;
               t.scopes.push({offset: t.indent + f, type: n, align: r})
            }(e, t, "])}".slice(i, i + 1)), -1 != (i = "])}".indexOf(r))) {
               if (o(t).type != r) return s;
               t.indent = t.scopes.pop().offset - f
            }
         }
         return t.dedent > 0 && e.eol() && "py" == o(t).type && (t.scopes.length > 1 && t.scopes.pop(), t.dedent -= 1), n
      }

      return {
         startState: function(e) {
            return {
               tokenize: w,
               scopes: [{offset: e || 0, type: "py", align: null}],
               indent: e || 0,
               lastToken: null,
               lambda: !1,
               dedent: 0
            }
         }, token: function(e, t) {
            var n = t.errorToken;
            n && (t.errorToken = !1);
            var r = S(e, t);
            return r && "comment" != r && (t.lastToken = "keyword" == r || "punctuation" == r ? e.current() : r), "punctuation" == r && (r = null), e.eol() && t.lambda && (t.lambda = !1), n ? r + " " + s : r
         }, indent: function(t, n) {
            if (t.tokenize != w) return t.tokenize.isString ? e.Pass : 0;
            var r = o(t), i = r.type == n.charAt(0);
            return null != r.align ? r.align - (i ? 1 : 0) : r.offset - (i ? f : 0)
         }, electricInput: /^\s*[\}\]\)]$/, closeBrackets: {triples: "'\""}, lineComment: "#", fold: "indent"
      }
   }), e.defineMIME("text/x-python", "python");
   var a;
   e.defineMIME("text/x-cython", {
      name: "python",
      extra_keywords: (a = "by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE", a.split(" "))
   })
}, cm.addon.annotatescrollbar = function(e) {
   "use strict";

   function t(e, t) {
      function n(e) {
         clearTimeout(r.doRedraw), r.doRedraw = setTimeout(function() {
            r.redraw()
         }, e)
      }

      this.cm = e, this.options = t, this.buttonHeight = t.scrollButtonHeight || e.getOption("scrollButtonHeight"), this.annotations = [], this.doRedraw = this.doUpdate = null, this.div = e.getWrapperElement().appendChild(document.createElement("div")), this.div.style.cssText = "position: absolute; right: 0; top: 0; z-index: 7; pointer-events: none", this.computeScale();
      var r = this;
      e.on("refresh", this.resizeHandler = function() {
         clearTimeout(r.doUpdate), r.doUpdate = setTimeout(function() {
            r.computeScale() && n(20)
         }, 100)
      }), e.on("markerAdded", this.resizeHandler), e.on("markerCleared", this.resizeHandler), !1 !== t.listenForChanges && e.on("change", this.changeHandler = function() {
         n(250)
      })
   }

   e.defineExtension("annotateScrollbar", function(e) {
      return "string" == typeof e && (e = {className: e}), new t(this, e)
   }), e.defineOption("scrollButtonHeight", 0), t.prototype.computeScale = function() {
      var e = this.cm,
         t = (e.getWrapperElement().clientHeight - e.display.barHeight - 2 * this.buttonHeight) / e.getScrollerElement().scrollHeight;
      if (t != this.hScale) return this.hScale = t, !0
   }, t.prototype.update = function(e) {
      this.annotations = e, this.redraw()
   }, t.prototype.redraw = function(e) {
      !1 !== e && this.computeScale();
      var t = this.cm, n = this.hScale, r = document.createDocumentFragment(), i = this.annotations,
         o = t.getOption("lineWrapping"), a = o && 1.5 * t.defaultTextHeight(), l = null, s = null;

      function c(e, n) {
         return l != e.line && (l = e.line, s = t.getLineHandle(l)), s.widgets && s.widgets.length || o && s.height > a ? t.charCoords(e, "local")[n ? "top" : "bottom"] : t.heightAtLine(s, "local") + (n ? 0 : s.height)
      }

      var u = t.lastLine();
      if (t.display.barWidth) for (var d, f = 0; f < i.length; f++) {
         var h = i[f];
         if (!(h.to.line > u)) {
            for (var p = d || c(h.from, !0) * n, m = c(h.to, !1) * n; f < i.length - 1 && !(i[f + 1].to.line > u) && !((d = c(i[f + 1].from, !0) * n) > m + .9);) m = c((h = i[++f]).to, !1) * n;
            if (m != p) {
               var g = Math.max(m - p, 3), v = r.appendChild(document.createElement("div"));
               v.style.cssText = "position: absolute; right: 0px; width: " + Math.max(t.display.barWidth - 1, 2) + "px; top: " + (p + this.buttonHeight) + "px; height: " + g + "px", v.className = this.options.className, h.id && v.setAttribute("annotation-id", h.id)
            }
         }
      }
      this.div.textContent = "", this.div.appendChild(r)
   }, t.prototype.clear = function() {
      this.cm.off("refresh", this.resizeHandler), this.cm.off("markerAdded", this.resizeHandler), this.cm.off("markerCleared", this.resizeHandler), this.changeHandler && this.cm.off("change", this.changeHandler), this.div.parentNode.removeChild(this.div)
   }
}, cm.addon.simplescrollbars = function(e) {
   "use strict";

   function t(t, n, r) {
      this.orientation = n, this.scroll = r, this.screen = this.total = this.size = 1, this.pos = 0, this.node = document.createElement("div"), this.node.className = t + "-" + n, this.inner = this.node.appendChild(document.createElement("div"));
      var i = this;

      function o(t) {
         var n = e.wheelEventPixels(t)["horizontal" == i.orientation ? "x" : "y"], r = i.pos;
         i.moveTo(i.pos + n), i.pos != r && e.e_preventDefault(t)
      }

      e.on(this.inner, "mousedown", function(t) {
         if (1 == t.which) {
            e.e_preventDefault(t);
            var n = "horizontal" == i.orientation ? "pageX" : "pageY", r = t[n], o = i.pos;
            e.on(document, "mousemove", l), e.on(document, "mouseup", a)
         }

         function a() {
            e.off(document, "mousemove", l), e.off(document, "mouseup", a)
         }

         function l(e) {
            if (1 != e.which) return a();
            i.moveTo(o + (e[n] - r) * (i.total / i.size))
         }
      }), e.on(this.node, "click", function(t) {
         e.e_preventDefault(t);
         var n, r = i.inner.getBoundingClientRect();
         n = "horizontal" == i.orientation ? t.clientX < r.left ? -1 : t.clientX > r.right ? 1 : 0 : t.clientY < r.top ? -1 : t.clientY > r.bottom ? 1 : 0, i.moveTo(i.pos + n * i.screen)
      }), e.on(this.node, "mousewheel", o), e.on(this.node, "DOMMouseScroll", o)
   }

   t.prototype.setPos = function(e, t) {
      return e < 0 && (e = 0), e > this.total - this.screen && (e = this.total - this.screen), !(!t && e == this.pos) && (this.pos = e, this.inner.style["horizontal" == this.orientation ? "left" : "top"] = e * (this.size / this.total) + "px", !0)
   }, t.prototype.moveTo = function(e) {
      this.setPos(e) && this.scroll(e, this.orientation)
   };

   function n(e, n, r) {
      this.addClass = e, this.horiz = new t(e, "horizontal", r), n(this.horiz.node), this.vert = new t(e, "vertical", r), n(this.vert.node), this.width = null
   }

   t.prototype.update = function(e, t, n) {
      var r = this.screen != t || this.total != e || this.size != n;
      r && (this.screen = t, this.total = e, this.size = n);
      var i = this.screen * (this.size / this.total);
      i < 10 && (this.size -= 10 - i, i = 10), this.inner.style["horizontal" == this.orientation ? "width" : "height"] = i + "px", this.setPos(this.pos, r)
   }, n.prototype.update = function(e) {
      if (null == this.width) {
         var t = window.getComputedStyle ? window.getComputedStyle(this.horiz.node) : this.horiz.node.currentStyle;
         t && (this.width = parseInt(t.height))
      }
      var n = this.width || 0, r = e.scrollWidth > e.clientWidth + 1, i = e.scrollHeight > e.clientHeight + 1;
      return this.vert.node.style.display = i ? "block" : "none", this.horiz.node.style.display = r ? "block" : "none", i && (this.vert.update(e.scrollHeight, e.clientHeight, e.viewHeight - (r ? n : 0)), this.vert.node.style.bottom = r ? n + "px" : "0"), r && (this.horiz.update(e.scrollWidth, e.clientWidth, e.viewWidth - (i ? n : 0) - e.barLeft), this.horiz.node.style.right = i ? n + "px" : "0", this.horiz.node.style.left = e.barLeft + "px"), {
         right: i ? n : 0,
         bottom: r ? n : 0
      }
   }, n.prototype.setScrollTop = function(e) {
      this.vert.setPos(e)
   }, n.prototype.setScrollLeft = function(e) {
      this.horiz.setPos(e)
   }, n.prototype.clear = function() {
      var e = this.horiz.node.parentNode;
      e.removeChild(this.horiz.node), e.removeChild(this.vert.node)
   }, e.scrollbarModel.simple = function(e, t) {
      return new n("CodeMirror-simplescroll", e, t)
   }, e.scrollbarModel.overlay = function(e, t) {
      return new n("CodeMirror-overlayscroll", e, t)
   }
}, cm.addon["jump-to-line"] = function(e) {
   "use strict";

   function t(e, t) {
      var n = Number(t);
      return /^[-+]/.test(t) ? e.getCursor().line + n : n - 1
   }

   e.commands.jumpToLine = function(e) {
      var n = e.getCursor();
      !function(e, t, n, r, i) {
         e.openDialog ? e.openDialog(t, i, {value: r, selectValueOnOpen: !0}) : i(prompt(n, r))
      }(e, function(e) {
         return e.phrase("Jump to line:") + ' <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">' + e.phrase("(Use line:column or scroll% syntax)") + "</span>"
      }(e), e.phrase("Jump to line:"), n.line + 1 + ":" + n.ch, function(r) {
         var i;
         if (r) if (i = /^\s*([\+\-]?\d+)\s*\:\s*(\d+)\s*$/.exec(r)) e.setCursor(t(e, i[1]), Number(i[2])); else if (i = /^\s*([\+\-]?\d+(\.\d+)?)\%\s*/.exec(r)) {
            var o = Math.round(e.lineCount() * Number(i[1]) / 100);
            /^[-+]/.test(i[1]) && (o = n.line + o + 1), e.setCursor(o - 1, n.ch)
         } else (i = /^\s*\:?\s*([\+\-]?\d+)\s*/.exec(r)) && e.setCursor(t(e, i[1]), n.ch)
      })
   }, e.keyMap.default["Alt-G"] = "jumpToLine"
}, cm.addon["match-highlighter"] = function(e) {
   "use strict";
   var t = {
      style: "matchhighlight",
      minChars: 2,
      delay: 100,
      wordsOnly: !1,
      annotateScrollbar: !1,
      showToken: !1,
      trim: !0
   };

   function n(e) {
      for (var n in this.options = {}, t) this.options[n] = (e && e.hasOwnProperty(n) ? e : t)[n];
      this.overlay = this.timeout = null, this.matchesonscroll = null, this.active = !1
   }

   function r(e) {
      var t = e.state.matchHighlighter;
      (t.active || e.hasFocus()) && o(e, t)
   }

   function i(e) {
      var t = e.state.matchHighlighter;
      t.active || (t.active = !0, o(e, t))
   }

   function o(e, t) {
      clearTimeout(t.timeout), t.timeout = setTimeout(function() {
         s(e)
      }, t.options.delay)
   }

   function a(e, t, n, r) {
      var i = e.state.matchHighlighter;
      if (e.addOverlay(i.overlay = function(e, t, n) {
         return {
            token: function(r) {
               if (r.match(e) && (!t || function(e, t) {
                  return !(e.start && t.test(e.string.charAt(e.start - 1)) || e.pos != e.string.length && t.test(e.string.charAt(e.pos)))
               }(r, t))) return n;
               r.next(), r.skipTo(e.charAt(0)) || r.skipToEnd()
            }
         }
      }(t, n, r)), i.options.annotateScrollbar && e.showMatchesOnScrollbar) {
         var o = n ? new RegExp("\\b" + t.replace(/[\\\[.+*?(){|^$]/g, "\\$&") + "\\b") : t;
         i.matchesonscroll = e.showMatchesOnScrollbar(o, !1, {className: "CodeMirror-selection-highlight-scrollbar"})
      }
   }

   function l(e) {
      var t = e.state.matchHighlighter;
      t.overlay && (e.removeOverlay(t.overlay), t.overlay = null, t.matchesonscroll && (t.matchesonscroll.clear(), t.matchesonscroll = null))
   }

   function s(e) {
      e.operation(function() {
         var t = e.state.matchHighlighter;
         if (l(e), e.somethingSelected() || !t.options.showToken) {
            var n = e.getCursor("from"), r = e.getCursor("to");
            if (n.line == r.line && (!t.options.wordsOnly || function(e, t, n) {
               if (null !== e.getRange(t, n).match(/^\w+$/)) {
                  if (t.ch > 0) {
                     var r = {line: t.line, ch: t.ch - 1}, i = e.getRange(r, t);
                     if (null === i.match(/\W/)) return !1
                  }
                  if (n.ch < e.getLine(t.line).length) {
                     var r = {line: n.line, ch: n.ch + 1}, i = e.getRange(n, r);
                     if (null === i.match(/\W/)) return !1
                  }
                  return !0
               }
               return !1
            }(e, n, r))) {
               var i = e.getRange(n, r);
               t.options.trim && (i = i.replace(/^\s+|\s+$/g, "")), i.length >= t.options.minChars && a(e, i, !1, t.options.style)
            }
         } else {
            for (var o = !0 === t.options.showToken ? /[\w$]/ : t.options.showToken, s = e.getCursor(), c = e.getLine(s.line), u = s.ch, d = u; u && o.test(c.charAt(u - 1));) --u;
            for (; d < c.length && o.test(c.charAt(d));) ++d;
            u < d && a(e, c.slice(u, d), o, t.options.style)
         }
      })
   }

   e.defineOption("highlightSelectionMatches", !1, function(t, o, a) {
      if (a && a != e.Init && (l(t), clearTimeout(t.state.matchHighlighter.timeout), t.state.matchHighlighter = null, t.off("cursorActivity", r), t.off("focus", i)), o) {
         var c = t.state.matchHighlighter = new n(o);
         t.hasFocus() ? (c.active = !0, s(t)) : t.on("focus", i), t.on("cursorActivity", r)
      }
   })
}, cm.addon.matchesonscrollbar = function(e) {
   "use strict";

   function t(e, t, n, r) {
      this.cm = e, this.options = r;
      var i = {listenForChanges: !1};
      for (var o in r) i[o] = r[o];
      i.className || (i.className = "CodeMirror-search-match"), this.annotation = e.annotateScrollbar(i), this.query = t, this.caseFold = n, this.gap = {
         from: e.firstLine(),
         to: e.lastLine() + 1
      }, this.matches = [], this.update = null, this.findMatches(), this.annotation.update(this.matches);
      var a = this;
      e.on("change", this.changeHandler = function(e, t) {
         a.onChange(t)
      })
   }

   e.defineExtension("showMatchesOnScrollbar", function(e, n, r) {
      return "string" == typeof r && (r = {className: r}), r || (r = {}), new t(this, e, n, r)
   });

   function n(e, t, n) {
      return e <= t ? e : Math.max(t, e + n)
   }

   t.prototype.findMatches = function() {
      if (this.gap) {
         for (var t = 0; t < this.matches.length; t++) {
            if ((i = this.matches[t]).from.line >= this.gap.to) break;
            i.to.line >= this.gap.from && this.matches.splice(t--, 1)
         }
         for (var n = this.cm.getSearchCursor(this.query, e.Pos(this.gap.from, 0), this.caseFold), r = this.options && this.options.maxMatches || 1e3; n.findNext();) {
            var i;
            if ((i = {from: n.from(), to: n.to()}).from.line >= this.gap.to) break;
            if (this.matches.splice(t++, 0, i), this.matches.length > r) break
         }
         this.gap = null
      }
   }, t.prototype.onChange = function(t) {
      var r = t.from.line, i = e.changeEnd(t).line, o = i - t.to.line;
      if (this.gap ? (this.gap.from = Math.min(n(this.gap.from, r, o), t.from.line), this.gap.to = Math.max(n(this.gap.to, r, o), t.from.line)) : this.gap = {
         from: t.from.line,
         to: i + 1
      }, o) for (var a = 0; a < this.matches.length; a++) {
         var l = this.matches[a], s = n(l.from.line, r, o);
         s != l.from.line && (l.from = e.Pos(s, l.from.ch));
         var c = n(l.to.line, r, o);
         c != l.to.line && (l.to = e.Pos(c, l.to.ch))
      }
      clearTimeout(this.update);
      var u = this;
      this.update = setTimeout(function() {
         u.updateAfterChange()
      }, 250)
   }, t.prototype.updateAfterChange = function() {
      this.findMatches(), this.annotation.update(this.matches)
   }, t.prototype.clear = function() {
      this.cm.off("change", this.changeHandler), this.annotation.clear()
   }
}, cm.addon.search = function(e) {
   "use strict";

   function t() {
      this.posFrom = this.posTo = this.lastQuery = this.query = null, this.overlay = null
   }

   function n(e) {
      return e.state.search || (e.state.search = new t)
   }

   function r(e) {
      return "string" == typeof e && e == e.toLowerCase()
   }

   function i(e, t, n) {
      return e.getSearchCursor(t, n, {caseFold: r(t), multiline: !0})
   }

   function o(e, t, n, r, i) {
      e.openDialog ? e.openDialog(t, i, {value: r, selectValueOnOpen: !0}) : i(prompt(n, r))
   }

   function a(e) {
      return e.replace(/\\(.)/g, function(e, t) {
         return "n" == t ? "\n" : "r" == t ? "\r" : t
      })
   }

   function l(e) {
      var t = e.match(/^\/(.*)\/([a-z]*)$/);
      if (t) try {
         e = new RegExp(t[1], -1 == t[2].indexOf("i") ? "" : "i")
      } catch (e) {
      } else e = a(e);
      return ("string" == typeof e ? "" == e : e.test("")) && (e = /x^/), e
   }

   function s(e, t, n) {
      t.queryText = n, t.query = l(n), e.removeOverlay(t.overlay, r(t.query)), t.overlay = function(e, t) {
         return "string" == typeof e ? e = new RegExp(e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), t ? "gi" : "g") : e.global || (e = new RegExp(e.source, e.ignoreCase ? "gi" : "g")), {
            token: function(t) {
               e.lastIndex = t.pos;
               var n = e.exec(t.string);
               if (n && n.index == t.pos) return t.pos += n[0].length || 1, "searching";
               n ? t.pos = n.index : t.skipToEnd()
            }
         }
      }(t.query, r(t.query)), e.addOverlay(t.overlay), e.showMatchesOnScrollbar && (t.annotate && (t.annotate.clear(), t.annotate = null), t.annotate = e.showMatchesOnScrollbar(t.query, r(t.query)))
   }

   function c(t, r, i, a) {
      var l = n(t);
      if (l.query) return u(t, r);
      var c = t.getSelection() || l.lastQuery;
      if (c instanceof RegExp && "x^" == c.source && (c = null), i && t.openDialog) {
         var h = null, p = function(n, r) {
            e.e_stop(r), n && (n != l.queryText && (s(t, l, n), l.posFrom = l.posTo = t.getCursor()), h && (h.style.opacity = 1), u(t, r.shiftKey, function(e, n) {
               var r;
               n.line < 3 && document.querySelector && (r = t.display.wrapper.querySelector(".CodeMirror-dialog")) && r.getBoundingClientRect().bottom - 4 > t.cursorCoords(n, "window").top && ((h = r).style.opacity = .4)
            }))
         };
         !function(e, t, n, r, i) {
            e.openDialog(t, r, {
               value: n, selectValueOnOpen: !0, closeOnEnter: !1, onClose: function() {
                  d(e)
               }, onKeyDown: i
            })
         }(t, f(t), c, p, function(r, i) {
            var o = e.keyName(r), a = t.getOption("extraKeys"), l = a && a[o] || e.keyMap[t.getOption("keyMap")][o];
            "findNext" == l || "findPrev" == l || "findPersistentNext" == l || "findPersistentPrev" == l ? (e.e_stop(r), s(t, n(t), i), t.execCommand(l)) : "find" != l && "findPersistent" != l || (e.e_stop(r), p(i, r))
         }), a && c && (s(t, l, c), u(t, r))
      } else o(t, f(t), "Search for:", c, function(e) {
         e && !l.query && t.operation(function() {
            s(t, l, e), l.posFrom = l.posTo = t.getCursor(), u(t, r)
         })
      })
   }

   function u(t, r, o) {
      t.operation(function() {
         var a = n(t), l = i(t, a.query, r ? a.posFrom : a.posTo);
         (l.find(r) || (l = i(t, a.query, r ? e.Pos(t.lastLine()) : e.Pos(t.firstLine(), 0))).find(r)) && (t.setSelection(l.from(), l.to()), t.scrollIntoView({
            from: l.from(),
            to: l.to()
         }, 20), a.posFrom = l.from(), a.posTo = l.to(), o && o(l.from(), l.to()))
      })
   }

   function d(e) {
      e.operation(function() {
         var t = n(e);
         t.lastQuery = t.query, t.query && (t.query = t.queryText = null, e.removeOverlay(t.overlay), t.annotate && (t.annotate.clear(), t.annotate = null))
      })
   }

   function f(e) {
      return '<span class="CodeMirror-search-label">' + e.phrase("Search:") + '</span> <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">' + e.phrase("(Use /re/ syntax for regexp search)") + "</span>"
   }

   function h(e, t, n) {
      e.operation(function() {
         for (var r = i(e, t); r.findNext();) if ("string" != typeof t) {
            var o = e.getRange(r.from(), r.to()).match(t);
            r.replace(n.replace(/\$(\d)/g, function(e, t) {
               return o[t]
            }))
         } else r.replace(n)
      })
   }

   function p(e, t) {
      if (!e.getOption("readOnly")) {
         var r = e.getSelection() || n(e).lastQuery,
            s = '<span class="CodeMirror-search-label">' + (t ? e.phrase("Replace all:") : e.phrase("Replace:")) + "</span>";
         o(e, s + function(e) {
            return ' <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">' + e.phrase("(Use /re/ syntax for regexp search)") + "</span>"
         }(e), s, r, function(n) {
            n && (n = l(n), o(e, function(e) {
               return '<span class="CodeMirror-search-label">' + e.phrase("With:") + '</span> <input type="text" style="width: 10em" class="CodeMirror-search-field"/>'
            }(e), e.phrase("Replace with:"), "", function(r) {
               if (r = a(r), t) h(e, n, r); else {
                  d(e);
                  var o = i(e, n, e.getCursor("from")), l = function() {
                     var t, a = o.from();
                     !(t = o.findNext()) && (o = i(e, n), !(t = o.findNext()) || a && o.from().line == a.line && o.from().ch == a.ch) || (e.setSelection(o.from(), o.to()), e.scrollIntoView({
                        from: o.from(),
                        to: o.to()
                     }), function(e, t, n, r) {
                        e.openConfirm ? e.openConfirm(t, r) : confirm(n) && r[0]()
                     }(e, function(e) {
                        return '<span class="CodeMirror-search-label">' + e.phrase("Replace?") + "</span> <button>" + e.phrase("Yes") + "</button> <button>" + e.phrase("No") + "</button> <button>" + e.phrase("All") + "</button> <button>" + e.phrase("Stop") + "</button> "
                     }(e), e.phrase("Replace?"), [function() {
                        s(t)
                     }, l, function() {
                        h(e, n, r)
                     }]))
                  }, s = function(e) {
                     o.replace("string" == typeof n ? r : r.replace(/\$(\d)/g, function(t, n) {
                        return e[n]
                     })), l()
                  };
                  l()
               }
            }))
         })
      }
   }

   e.commands.find = function(e) {
      d(e), c(e)
   }, e.commands.findPersistent = function(e) {
      d(e), c(e, !1, !0)
   }, e.commands.findPersistentNext = function(e) {
      c(e, !1, !0, !0)
   }, e.commands.findPersistentPrev = function(e) {
      c(e, !0, !0, !0)
   }, e.commands.findNext = c, e.commands.findPrev = function(e) {
      c(e, !0)
   }, e.commands.clearSearch = d, e.commands.replace = p, e.commands.replaceAll = function(e) {
      p(e, !0)
   }
}, cm.addon.searchcursor = function(e) {
   "use strict";
   var t, n, r = e.Pos;

   function i(e, t) {
      for (var n = function(e) {
         var t = e.flags;
         return null != t ? t : (e.ignoreCase ? "i" : "") + (e.global ? "g" : "") + (e.multiline ? "m" : "")
      }(e), r = n, i = 0; i < t.length; i++) -1 == r.indexOf(t.charAt(i)) && (r += t.charAt(i));
      return n == r ? e : new RegExp(e.source, r)
   }

   function o(e, t, n) {
      t = i(t, "g");
      for (var o = n.line, a = n.ch, l = e.lastLine(); o <= l; o++, a = 0) {
         t.lastIndex = a;
         var s = e.getLine(o), c = t.exec(s);
         if (c) return {from: r(o, c.index), to: r(o, c.index + c[0].length), match: c}
      }
   }

   function a(e, t) {
      for (var n, r = 0; ;) {
         t.lastIndex = r;
         var i = t.exec(e);
         if (!i) return n;
         if ((r = (n = i).index + (n[0].length || 1)) == e.length) return n
      }
   }

   function l(e, t, n, r) {
      if (e.length == t.length) return n;
      for (var i = 0, o = n + Math.max(0, e.length - t.length); ;) {
         if (i == o) return i;
         var a = i + o >> 1, l = r(e.slice(0, a)).length;
         if (l == n) return a;
         l > n ? o = a : i = a + 1
      }
   }

   function s(e, s, c, u) {
      var d;
      this.atOccurrence = !1, this.doc = e, c = c ? e.clipPos(c) : r(0, 0), this.pos = {
         from: c,
         to: c
      }, "object" == typeof u ? d = u.caseFold : (d = u, u = null), "string" == typeof s ? (null == d && (d = !1), this.matches = function(i, o) {
         return (i ? function(e, i, o, a) {
            if (!i.length) return null;
            var s = a ? t : n, c = s(i).split(/\r|\n\r?/);
            e:for (var u = o.line, d = o.ch, f = e.firstLine() - 1 + c.length; u >= f; u--, d = -1) {
               var h = e.getLine(u);
               d > -1 && (h = h.slice(0, d));
               var p = s(h);
               if (1 == c.length) {
                  var m = p.lastIndexOf(c[0]);
                  if (-1 == m) continue e;
                  return {from: r(u, l(h, p, m, s)), to: r(u, l(h, p, m + c[0].length, s))}
               }
               var g = c[c.length - 1];
               if (p.slice(0, g.length) == g) {
                  var v = 1;
                  for (o = u - c.length + 1; v < c.length - 1; v++) if (s(e.getLine(o + v)) != c[v]) continue e;
                  var y = e.getLine(u + 1 - c.length), b = s(y);
                  if (b.slice(b.length - c[0].length) == c[0]) return {
                     from: r(u + 1 - c.length, l(y, b, y.length - c[0].length, s)),
                     to: r(u, l(h, p, g.length, s))
                  }
               }
            }
         } : function(e, i, o, a) {
            if (!i.length) return null;
            var s = a ? t : n, c = s(i).split(/\r|\n\r?/);
            e:for (var u = o.line, d = o.ch, f = e.lastLine() + 1 - c.length; u <= f; u++, d = 0) {
               var h = e.getLine(u).slice(d), p = s(h);
               if (1 == c.length) {
                  var m = p.indexOf(c[0]);
                  if (-1 == m) continue e;
                  return o = l(h, p, m, s) + d, {
                     from: r(u, l(h, p, m, s) + d),
                     to: r(u, l(h, p, m + c[0].length, s) + d)
                  }
               }
               var g = p.length - c[0].length;
               if (p.slice(g) == c[0]) {
                  for (var v = 1; v < c.length - 1; v++) if (s(e.getLine(u + v)) != c[v]) continue e;
                  var y = e.getLine(u + c.length - 1), b = s(y), w = c[c.length - 1];
                  if (b.slice(0, w.length) == w) return {
                     from: r(u, l(h, p, g, s) + d),
                     to: r(u + c.length - 1, l(y, b, w.length, s))
                  }
               }
            }
         })(e, s, o, d)
      }) : (s = i(s, "gm"), u && !1 === u.multiline ? this.matches = function(t, n) {
         return (t ? function(e, t, n) {
            t = i(t, "g");
            for (var o = n.line, l = n.ch, s = e.firstLine(); o >= s; o--, l = -1) {
               var c = e.getLine(o);
               l > -1 && (c = c.slice(0, l));
               var u = a(c, t);
               if (u) return {from: r(o, u.index), to: r(o, u.index + u[0].length), match: u}
            }
         } : o)(e, s, n)
      } : this.matches = function(t, n) {
         return (t ? function(e, t, n) {
            t = i(t, "gm");
            for (var o, l = 1, s = n.line, c = e.firstLine(); s >= c;) {
               for (var u = 0; u < l; u++) {
                  var d = e.getLine(s--);
                  o = null == o ? d.slice(0, n.ch) : d + "\n" + o
               }
               l *= 2;
               var f = a(o, t);
               if (f) {
                  var h = o.slice(0, f.index).split("\n"), p = f[0].split("\n"), m = s + h.length,
                     g = h[h.length - 1].length;
                  return {
                     from: r(m, g),
                     to: r(m + p.length - 1, 1 == p.length ? g + p[0].length : p[p.length - 1].length),
                     match: f
                  }
               }
            }
         } : function(e, t, n) {
            if (!function(e) {
               return /\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source)
            }(t)) return o(e, t, n);
            t = i(t, "gm");
            for (var a, l = 1, s = n.line, c = e.lastLine(); s <= c;) {
               for (var u = 0; u < l && !(s > c); u++) {
                  var d = e.getLine(s++);
                  a = null == a ? d : a + "\n" + d
               }
               l *= 2, t.lastIndex = n.ch;
               var f = t.exec(a);
               if (f) {
                  var h = a.slice(0, f.index).split("\n"), p = f[0].split("\n"), m = n.line + h.length - 1,
                     g = h[h.length - 1].length;
                  return {
                     from: r(m, g),
                     to: r(m + p.length - 1, 1 == p.length ? g + p[0].length : p[p.length - 1].length),
                     match: f
                  }
               }
            }
         })(e, s, n)
      })
   }

   String.prototype.normalize ? (t = function(e) {
      return e.normalize("NFD").toLowerCase()
   }, n = function(e) {
      return e.normalize("NFD")
   }) : (t = function(e) {
      return e.toLowerCase()
   }, n = function(e) {
      return e
   }), s.prototype = {
      findNext: function() {
         return this.find(!1)
      }, findPrevious: function() {
         return this.find(!0)
      }, find: function(t) {
         for (var n = this.matches(t, this.doc.clipPos(t ? this.pos.from : this.pos.to)); n && 0 == e.cmpPos(n.from, n.to);) t ? n.from.ch ? n.from = r(n.from.line, n.from.ch - 1) : n = n.from.line == this.doc.firstLine() ? null : this.matches(t, this.doc.clipPos(r(n.from.line - 1))) : n.to.ch < this.doc.getLine(n.to.line).length ? n.to = r(n.to.line, n.to.ch + 1) : n = n.to.line == this.doc.lastLine() ? null : this.matches(t, r(n.to.line + 1, 0));
         if (n) return this.pos = n, this.atOccurrence = !0, this.pos.match || !0;
         var i = r(t ? this.doc.firstLine() : this.doc.lastLine() + 1, 0);
         return this.pos = {from: i, to: i}, this.atOccurrence = !1
      }, from: function() {
         if (this.atOccurrence) return this.pos.from
      }, to: function() {
         if (this.atOccurrence) return this.pos.to
      }, replace: function(t, n) {
         if (this.atOccurrence) {
            var i = e.splitLines(t);
            this.doc.replaceRange(i, this.pos.from, this.pos.to, n), this.pos.to = r(this.pos.from.line + i.length - 1, i[i.length - 1].length + (1 == i.length ? this.pos.from.ch : 0))
         }
      }
   }, e.defineExtension("getSearchCursor", function(e, t, n) {
      return new s(this.doc, e, t, n)
   }), e.defineDocExtension("getSearchCursor", function(e, t, n) {
      return new s(this, e, t, n)
   }), e.defineExtension("selectMatches", function(t, n) {
      for (var r = [], i = this.getSearchCursor(t, this.getCursor("from"), n); i.findNext() && !(e.cmpPos(i.to(), this.getCursor("to")) > 0);) r.push({
         anchor: i.from(),
         head: i.to()
      });
      r.length && this.setSelections(r, 0)
   })
}, cm.mode.sql = function(e) {
   "use strict";

   function t(e) {
      for (var t; null != (t = e.next());) if ("`" == t && !e.eat("`")) return "variable-2";
      return e.backUp(e.current().length - 1), e.eatWhile(/\w/) ? "variable-2" : null
   }

   function n(e) {
      return e.eat("@") && (e.match(/^session\./), e.match(/^local\./), e.match(/^global\./)), e.eat("'") ? (e.match(/^.*'/), "variable-2") : e.eat('"') ? (e.match(/^.*"/), "variable-2") : e.eat("`") ? (e.match(/^.*`/), "variable-2") : e.match(/^[0-9a-zA-Z$\.\_]+/) ? "variable-2" : null
   }

   function r(e) {
      return e.eat("N") ? "atom" : e.match(/^[a-zA-Z.#!?]/) ? "variable-2" : null
   }

   e.defineMode("sql", function(t, n) {
      var r = n.client || {}, l = n.atoms || {false: !0, true: !0, null: !0}, s = n.builtin || o(a),
         c = n.keywords || o(i), u = n.operatorChars || /^[*+\-%<>!=&|~^\/]/, d = n.support || {}, f = n.hooks || {},
         h = n.dateSQL || {date: !0, time: !0, timestamp: !0}, p = !1 !== n.backslashStringEscapes,
         m = n.brackets || /^[\{}\(\)\[\]]/, g = n.punctuation || /^[;.,:]/;

      function v(e, t) {
         var n, i = e.next();
         if (f[i]) {
            var o = f[i](e, t);
            if (!1 !== o) return o
         }
         if (d.hexNumber && ("0" == i && e.match(/^[xX][0-9a-fA-F]+/) || ("x" == i || "X" == i) && e.match(/^'[0-9a-fA-F]+'/))) return "number";
         if (d.binaryNumber && (("b" == i || "B" == i) && e.match(/^'[01]+'/) || "0" == i && e.match(/^b[01]+/))) return "number";
         if (i.charCodeAt(0) > 47 && i.charCodeAt(0) < 58) return e.match(/^[0-9]*(\.[0-9]+)?([eE][-+]?[0-9]+)?/), d.decimallessFloat && e.match(/^\.(?!\.)/), "number";
         if ("?" == i && (e.eatSpace() || e.eol() || e.eat(";"))) return "variable-3";
         if ("'" == i || '"' == i && d.doubleQuote) return t.tokenize = (n = i, function(e, t) {
            for (var r, i = !1; null != (r = e.next());) {
               if (r == n && !i) {
                  t.tokenize = v;
                  break
               }
               i = p && !i && "\\" == r
            }
            return "string"
         }), t.tokenize(e, t);
         if ((d.nCharCast && ("n" == i || "N" == i) || d.charsetCast && "_" == i && e.match(/[a-z][a-z0-9]*/i)) && ("'" == e.peek() || '"' == e.peek())) return "keyword";
         if (d.commentSlashSlash && "/" == i && e.eat("/")) return e.skipToEnd(), "comment";
         if (d.commentHash && "#" == i || "-" == i && e.eat("-") && (!d.commentSpaceRequired || e.eat(" "))) return e.skipToEnd(), "comment";
         if ("/" == i && e.eat("*")) return t.tokenize = function e(t) {
            return function(n, r) {
               var i = n.match(/^.*?(\/\*|\*\/)/);
               return i ? "/*" == i[1] ? r.tokenize = e(t + 1) : r.tokenize = t > 1 ? e(t - 1) : v : n.skipToEnd(), "comment"
            }
         }(1), t.tokenize(e, t);
         if ("." != i) {
            if (u.test(i)) return e.eatWhile(u), "operator";
            if (m.test(i)) return "bracket";
            if (g.test(i)) return e.eatWhile(g), "punctuation";
            if ("{" == i && (e.match(/^( )*(d|D|t|T|ts|TS)( )*'[^']*'( )*}/) || e.match(/^( )*(d|D|t|T|ts|TS)( )*"[^"]*"( )*}/))) return "number";
            e.eatWhile(/^[_\w\d]/);
            var a = e.current().toLowerCase();
            return h.hasOwnProperty(a) && (e.match(/^( )+'[^']*'/) || e.match(/^( )+"[^"]*"/)) ? "number" : l.hasOwnProperty(a) ? "atom" : s.hasOwnProperty(a) ? "builtin" : c.hasOwnProperty(a) ? "keyword" : r.hasOwnProperty(a) ? "string-2" : null
         }
         return d.zerolessFloat && e.match(/^(?:\d+(?:e[+-]?\d+)?)/i) ? "number" : e.match(/^\.+/) ? null : d.ODBCdotTable && e.match(/^[\w\d_]+/) ? "variable-2" : void 0
      }

      function y(e, t, n) {
         t.context = {prev: t.context, indent: e.indentation(), col: e.column(), type: n}
      }

      return {
         startState: function() {
            return {tokenize: v, context: null}
         },
         token: function(e, t) {
            if (e.sol() && t.context && null == t.context.align && (t.context.align = !1), t.tokenize == v && e.eatSpace()) return null;
            var n = t.tokenize(e, t);
            if ("comment" == n) return n;
            t.context && null == t.context.align && (t.context.align = !0);
            var r = e.current();
            return "(" == r ? y(e, t, ")") : "[" == r ? y(e, t, "]") : t.context && t.context.type == r && function(e) {
               e.indent = e.context.indent, e.context = e.context.prev
            }(t), n
         },
         indent: function(n, r) {
            var i = n.context;
            if (!i) return e.Pass;
            var o = r.charAt(0) == i.type;
            return i.align ? i.col + (o ? 0 : 1) : i.indent + (o ? 0 : t.indentUnit)
         },
         blockCommentStart: "/*",
         blockCommentEnd: "*/",
         lineComment: d.commentSlashSlash ? "//" : d.commentHash ? "#" : "--",
         closeBrackets: "()[]{}''\"\"``"
      }
   });
   var i = "alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit ";

   function o(e) {
      for (var t = {}, n = e.split(" "), r = 0; r < n.length; ++r) t[n[r]] = !0;
      return t
   }

   var a = "bool boolean bit blob enum long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision real date datetime year unsigned signed decimal numeric";
   e.defineMIME("text/x-sql", {
      name: "sql",
      keywords: o(i + "begin"),
      builtin: o(a),
      atoms: o("false true null unknown"),
      dateSQL: o("date time timestamp"),
      support: o("ODBCdotTable doubleQuote binaryNumber hexNumber")
   }), e.defineMIME("text/x-mssql", {
      name: "sql",
      client: o("$partition binary_checksum checksum connectionproperty context_info current_request_id error_line error_message error_number error_procedure error_severity error_state formatmessage get_filestream_transaction_context getansinull host_id host_name isnull isnumeric min_active_rowversion newid newsequentialid rowcount_big xact_state object_id"),
      keywords: o(i + "begin trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare exec go if use index holdlock nolock nowait paglock readcommitted readcommittedlock readpast readuncommitted repeatableread rowlock serializable snapshot tablock tablockx updlock with"),
      builtin: o("bigint numeric bit smallint decimal smallmoney int tinyint money float real char varchar text nchar nvarchar ntext binary varbinary image cursor timestamp hierarchyid uniqueidentifier sql_variant xml table "),
      atoms: o("is not null like and or in left right between inner outer join all any some cross unpivot pivot exists"),
      operatorChars: /^[*+\-%<>!=^\&|\/]/,
      brackets: /^[\{}\(\)]/,
      punctuation: /^[;.,:/]/,
      backslashStringEscapes: !1,
      dateSQL: o("date datetimeoffset datetime2 smalldatetime datetime time"),
      hooks: {"@": n}
   }), e.defineMIME("text/x-mysql", {
      name: "sql",
      client: o("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),
      keywords: o(i + "accessible action add after algorithm all analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general get global grant grants group group_concat handler hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show signal slave slow smallint snapshot soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"),
      builtin: o("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric"),
      atoms: o("false true null unknown"),
      operatorChars: /^[*+\-%<>!=&|^]/,
      dateSQL: o("date time timestamp"),
      support: o("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired"),
      hooks: {"@": n, "`": t, "\\": r}
   }), e.defineMIME("text/x-mariadb", {
      name: "sql",
      client: o("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),
      keywords: o(i + "accessible action add after algorithm all always analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general generated get global grant grants group groupby_concat handler hard hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password persistent phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show shutdown signal slave slow smallint snapshot soft soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views virtual warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"),
      builtin: o("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric"),
      atoms: o("false true null unknown"),
      operatorChars: /^[*+\-%<>!=&|^]/,
      dateSQL: o("date time timestamp"),
      support: o("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired"),
      hooks: {"@": n, "`": t, "\\": r}
   }), e.defineMIME("text/x-sqlite", {
      name: "sql",
      client: o("auth backup bail binary changes check clone databases dbinfo dump echo eqp exit explain fullschema headers help import imposter indexes iotrace limit lint load log mode nullvalue once open output print prompt quit read restore save scanstats schema separator session shell show stats system tables testcase timeout timer trace vfsinfo vfslist vfsname width"),
      keywords: o(i + "abort action add after all analyze attach autoincrement before begin cascade case cast check collate column commit conflict constraint cross current_date current_time current_timestamp database default deferrable deferred detach each else end escape except exclusive exists explain fail for foreign full glob if ignore immediate index indexed initially inner instead intersect isnull key left limit match natural no notnull null of offset outer plan pragma primary query raise recursive references regexp reindex release rename replace restrict right rollback row savepoint temp temporary then to transaction trigger unique using vacuum view virtual when with without"),
      builtin: o("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text clob bigint int int2 int8 integer float double char varchar date datetime year unsigned signed numeric real"),
      atoms: o("null current_date current_time current_timestamp"),
      operatorChars: /^[*+\-%<>!=&|/~]/,
      dateSQL: o("date time timestamp datetime"),
      support: o("decimallessFloat zerolessFloat"),
      identifierQuote: '"',
      hooks: {
         "@": n, ":": n, "?": n, $: n, '"': function(e) {
            for (var t; null != (t = e.next());) if ('"' == t && !e.eat('"')) return "variable-2";
            return e.backUp(e.current().length - 1), e.eatWhile(/\w/) ? "variable-2" : null
         }, "`": t
      }
   }), e.defineMIME("text/x-cassandra", {
      name: "sql",
      client: {},
      keywords: o("add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime"),
      builtin: o("ascii bigint blob boolean counter decimal double float frozen inet int list map static text timestamp timeuuid tuple uuid varchar varint"),
      atoms: o("false true infinity NaN"),
      operatorChars: /^[<>=]/,
      dateSQL: {},
      support: o("commentSlashSlash decimallessFloat"),
      hooks: {}
   }), e.defineMIME("text/x-plsql", {
      name: "sql",
      client: o("appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define describe echo editfile embedded escape exec execute feedback flagger flush heading headsep instance linesize lno loboffset logsource long longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar release repfooter repheader serveroutput shiftinout show showmode size spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout time timing trimout trimspool ttitle underline verify version wrap"),
      keywords: o("abort accept access add all alter and any array arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body boolean by case cast char char_base check close cluster clusters colauth column comment commit compress connect connected constant constraint crash create current currval cursor data_base database date dba deallocate debugoff debugon decimal declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry escape exception exception_init exchange exclusive exists exit external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging long loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base object of off offline on online only open option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw read rebuild record ref references refresh release rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate session set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work"),
      builtin: o("abs acos add_months ascii asin atan atan2 average bfile bfilename bigserial bit blob ceil character chartorowid chr clob concat convert cos cosh count dec decode deref dual dump dup_val_on_index empty error exp false float floor found glb greatest hextoraw initcap instr instrb int integer isopen last_day least length lengthb ln lower lpad ltrim lub make_ref max min mlslabel mod months_between natural naturaln nchar nclob new_time next_day nextval nls_charset_decl_len nls_charset_id nls_charset_name nls_initcap nls_lower nls_sort nls_upper nlssort no_data_found notfound null number numeric nvarchar2 nvl others power rawtohex real reftohex round rowcount rowidtochar rowtype rpad rtrim serial sign signtype sin sinh smallint soundex sqlcode sqlerrm sqrt stddev string substr substrb sum sysdate tan tanh to_char text to_date to_label to_multi_byte to_number to_single_byte translate true trunc uid unlogged upper user userenv varchar varchar2 variance varying vsize xml"),
      operatorChars: /^[*\/+\-%<>!=~]/,
      dateSQL: o("date time timestamp"),
      support: o("doubleQuote nCharCast zerolessFloat binaryNumber hexNumber")
   }), e.defineMIME("text/x-hive", {
      name: "sql",
      keywords: o("select alter $elem$ $key$ $value$ add after all analyze and archive as asc before between binary both bucket buckets by cascade case cast change cluster clustered clusterstatus collection column columns comment compute concatenate continue create cross cursor data database databases dbproperties deferred delete delimited desc describe directory disable distinct distribute drop else enable end escaped exclusive exists explain export extended external fetch fields fileformat first format formatted from full function functions grant group having hold_ddltime idxproperties if import in index indexes inpath inputdriver inputformat insert intersect into is items join keys lateral left like limit lines load local location lock locks mapjoin materialized minus msck no_drop nocompress not of offline on option or order out outer outputdriver outputformat overwrite partition partitioned partitions percent plus preserve procedure purge range rcfile read readonly reads rebuild recordreader recordwriter recover reduce regexp rename repair replace restrict revoke right rlike row schema schemas semi sequencefile serde serdeproperties set shared show show_database sort sorted ssl statistics stored streamtable table tables tablesample tblproperties temporary terminated textfile then tmp to touch transform trigger unarchive undo union uniquejoin unlock update use using utc utc_tmestamp view when where while with admin authorization char compact compactions conf cube current current_date current_timestamp day decimal defined dependency directories elem_type exchange file following for grouping hour ignore inner interval jar less logical macro minute month more none noscan over owner partialscan preceding pretty principals protection reload rewrite role roles rollup rows second server sets skewed transactions truncate unbounded unset uri user values window year"),
      builtin: o("bool boolean long timestamp tinyint smallint bigint int float double date datetime unsigned string array struct map uniontype key_type utctimestamp value_type varchar"),
      atoms: o("false true null unknown"),
      operatorChars: /^[*+\-%<>!=]/,
      dateSQL: o("date timestamp"),
      support: o("ODBCdotTable doubleQuote binaryNumber hexNumber")
   }), e.defineMIME("text/x-pgsql", {
      name: "sql",
      client: o("source"),
      keywords: o(i + "a abort abs absent absolute access according action ada add admin after aggregate alias all allocate also alter always analyse analyze and any are array array_agg array_max_cardinality as asc asensitive assert assertion assignment asymmetric at atomic attach attribute attributes authorization avg backward base64 before begin begin_frame begin_partition bernoulli between bigint binary bit bit_length blob blocked bom boolean both breadth by c cache call called cardinality cascade cascaded case cast catalog catalog_name ceil ceiling chain char char_length character character_length character_set_catalog character_set_name character_set_schema characteristics characters check checkpoint class class_origin clob close cluster coalesce cobol collate collation collation_catalog collation_name collation_schema collect column column_name columns command_function command_function_code comment comments commit committed concurrently condition condition_number configuration conflict connect connection connection_name constant constraint constraint_catalog constraint_name constraint_schema constraints constructor contains content continue control conversion convert copy corr corresponding cost count covar_pop covar_samp create cross csv cube cume_dist current current_catalog current_date current_default_transform_group current_path current_role current_row current_schema current_time current_timestamp current_transform_group_for_type current_user cursor cursor_name cycle data database datalink datatype date datetime_interval_code datetime_interval_precision day db deallocate debug dec decimal declare default defaults deferrable deferred defined definer degree delete delimiter delimiters dense_rank depends depth deref derived desc describe descriptor detach detail deterministic diagnostics dictionary disable discard disconnect dispatch distinct dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue do document domain double drop dump dynamic dynamic_function dynamic_function_code each element else elseif elsif empty enable encoding encrypted end end_frame end_partition endexec enforced enum equals errcode error escape event every except exception exclude excluding exclusive exec execute exists exit exp explain expression extension external extract false family fetch file filter final first first_value flag float floor following for force foreach foreign fortran forward found frame_row free freeze from fs full function functions fusion g general generated get global go goto grant granted greatest group grouping groups handler having header hex hierarchy hint hold hour id identity if ignore ilike immediate immediately immutable implementation implicit import in include including increment indent index indexes indicator info inherit inherits initially inline inner inout input insensitive insert instance instantiable instead int integer integrity intersect intersection interval into invoker is isnull isolation join k key key_member key_type label lag language large last last_value lateral lead leading leakproof least left length level library like like_regex limit link listen ln load local localtime localtimestamp location locator lock locked log logged loop lower m map mapping match matched materialized max max_cardinality maxvalue member merge message message_length message_octet_length message_text method min minute minvalue mod mode modifies module month more move multiset mumps name names namespace national natural nchar nclob nesting new next nfc nfd nfkc nfkd nil no none normalize normalized not nothing notice notify notnull nowait nth_value ntile null nullable nullif nulls number numeric object occurrences_regex octet_length octets of off offset oids old on only open operator option options or order ordering ordinality others out outer output over overlaps overlay overriding owned owner p pad parallel parameter parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partial partition pascal passing passthrough password path percent percent_rank percentile_cont percentile_disc perform period permission pg_context pg_datatype_name pg_exception_context pg_exception_detail pg_exception_hint placing plans pli policy portion position position_regex power precedes preceding precision prepare prepared preserve primary print_strict_params prior privileges procedural procedure procedures program public publication query quote raise range rank read reads real reassign recheck recovery recursive ref references referencing refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex relative release rename repeatable replace replica requiring reset respect restart restore restrict result result_oid return returned_cardinality returned_length returned_octet_length returned_sqlstate returning returns reverse revoke right role rollback rollup routine routine_catalog routine_name routine_schema routines row row_count row_number rows rowtype rule savepoint scale schema schema_name schemas scope scope_catalog scope_name scope_schema scroll search second section security select selective self sensitive sequence sequences serializable server server_name session session_user set setof sets share show similar simple size skip slice smallint snapshot some source space specific specific_name specifictype sql sqlcode sqlerror sqlexception sqlstate sqlwarning sqrt stable stacked standalone start state statement static statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset subscription substring substring_regex succeeds sum symmetric sysid system system_time system_user t table table_name tables tablesample tablespace temp template temporary text then ties time timestamp timezone_hour timezone_minute to token top_level_count trailing transaction transaction_active transactions_committed transactions_rolled_back transform transforms translate translate_regex translation treat trigger trigger_catalog trigger_name trigger_schema trim trim_array true truncate trusted type types uescape unbounded uncommitted under unencrypted union unique unknown unlink unlisten unlogged unnamed unnest until untyped update upper uri usage use_column use_variable user user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema using vacuum valid validate validator value value_of values var_pop var_samp varbinary varchar variable_conflict variadic varying verbose version versioning view views volatile warning when whenever where while whitespace width_bucket window with within without work wrapper write xml xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate year yes zone"),
      builtin: o("bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml"),
      atoms: o("false true null unknown"),
      operatorChars: /^[*\/+\-%<>!=&|^\/#@?~]/,
      dateSQL: o("date time timestamp"),
      support: o("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast")
   }), e.defineMIME("text/x-gql", {
      name: "sql",
      keywords: o("ancestor and asc by contains desc descendant distinct from group has in is limit offset on order select superset where"),
      atoms: o("false true"),
      builtin: o("blob datetime first key __key__ string integer double boolean null"),
      operatorChars: /^[*+\-%<>!=]/
   }), e.defineMIME("text/x-gpsql", {
      name: "sql",
      client: o("source"),
      keywords: o("abort absolute access action active add admin after aggregate all also alter always analyse analyze and any array as asc assertion assignment asymmetric at authorization backward before begin between bigint binary bit boolean both by cache called cascade cascaded case cast chain char character characteristics check checkpoint class close cluster coalesce codegen collate column comment commit committed concurrency concurrently configuration connection constraint constraints contains content continue conversion copy cost cpu_rate_limit create createdb createexttable createrole createuser cross csv cube current current_catalog current_date current_role current_schema current_time current_timestamp current_user cursor cycle data database day deallocate dec decimal declare decode default defaults deferrable deferred definer delete delimiter delimiters deny desc dictionary disable discard distinct distributed do document domain double drop dxl each else enable encoding encrypted end enum errors escape every except exchange exclude excluding exclusive execute exists explain extension external extract false family fetch fields filespace fill filter first float following for force foreign format forward freeze from full function global grant granted greatest group group_id grouping handler hash having header hold host hour identity if ignore ilike immediate immutable implicit in including inclusive increment index indexes inherit inherits initially inline inner inout input insensitive insert instead int integer intersect interval into invoker is isnull isolation join key language large last leading least left level like limit list listen load local localtime localtimestamp location lock log login mapping master match maxvalue median merge minute minvalue missing mode modifies modify month move name names national natural nchar new newline next no nocreatedb nocreateexttable nocreaterole nocreateuser noinherit nologin none noovercommit nosuperuser not nothing notify notnull nowait null nullif nulls numeric object of off offset oids old on only operator option options or order ordered others out outer over overcommit overlaps overlay owned owner parser partial partition partitions passing password percent percentile_cont percentile_disc placing plans position preceding precision prepare prepared preserve primary prior privileges procedural procedure protocol queue quote randomly range read readable reads real reassign recheck recursive ref references reindex reject relative release rename repeatable replace replica reset resource restart restrict returning returns revoke right role rollback rollup rootpartition row rows rule savepoint scatter schema scroll search second security segment select sequence serializable session session_user set setof sets share show similar simple smallint some split sql stable standalone start statement statistics stdin stdout storage strict strip subpartition subpartitions substring superuser symmetric sysid system table tablespace temp template temporary text then threshold ties time timestamp to trailing transaction treat trigger trim true truncate trusted type unbounded uncommitted unencrypted union unique unknown unlisten until update user using vacuum valid validation validator value values varchar variadic varying verbose version view volatile web when where whitespace window with within without work writable write xml xmlattributes xmlconcat xmlelement xmlexists xmlforest xmlparse xmlpi xmlroot xmlserialize year yes zone"),
      builtin: o("bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml"),
      atoms: o("false true null unknown"),
      operatorChars: /^[*+\-%<>!=&|^\/#@?~]/,
      dateSQL: o("date time timestamp"),
      support: o("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast")
   }), e.defineMIME("text/x-sparksql", {
      name: "sql",
      keywords: o("add after all alter analyze and anti archive array as asc at between bucket buckets by cache cascade case cast change clear cluster clustered codegen collection column columns comment commit compact compactions compute concatenate cost create cross cube current current_date current_timestamp database databases datata dbproperties defined delete delimited deny desc describe dfs directories distinct distribute drop else end escaped except exchange exists explain export extended external false fields fileformat first following for format formatted from full function functions global grant group grouping having if ignore import in index indexes inner inpath inputformat insert intersect interval into is items join keys last lateral lazy left like limit lines list load local location lock locks logical macro map minus msck natural no not null nulls of on optimize option options or order out outer outputformat over overwrite partition partitioned partitions percent preceding principals purge range recordreader recordwriter recover reduce refresh regexp rename repair replace reset restrict revoke right rlike role roles rollback rollup row rows schema schemas select semi separated serde serdeproperties set sets show skewed sort sorted start statistics stored stratify struct table tables tablesample tblproperties temp temporary terminated then to touch transaction transactions transform true truncate unarchive unbounded uncache union unlock unset use using values view when where window with"),
      builtin: o("tinyint smallint int bigint boolean float double string binary timestamp decimal array map struct uniontype delimited serde sequencefile textfile rcfile inputformat outputformat"),
      atoms: o("false true null"),
      operatorChars: /^[*\/+\-%<>!=~&|^]/,
      dateSQL: o("date time timestamp"),
      support: o("ODBCdotTable doubleQuote zerolessFloat")
   }), e.defineMIME("text/x-esper", {
      name: "sql",
      client: o("source"),
      keywords: o("alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit after all and as at asc avedev avg between by case cast coalesce count create current_timestamp day days delete define desc distinct else end escape events every exists false first from full group having hour hours in inner insert instanceof into irstream is istream join last lastweekday left limit like max match_recognize matches median measures metadatasql min minute minutes msec millisecond milliseconds not null offset on or order outer output partition pattern prev prior regexp retain-union retain-intersection right rstream sec second seconds select set some snapshot sql stddev sum then true unidirectional until update variable weekday when where window"),
      builtin: {},
      atoms: o("false true null"),
      operatorChars: /^[*+\-%<>!=&|^\/#@?~]/,
      dateSQL: o("time"),
      support: o("decimallessFloat zerolessFloat binaryNumber hexNumber")
   })
}, cm.mode.xml = function(e) {
   "use strict";
   var t = {
      autoSelfClosers: {
         area: !0,
         base: !0,
         br: !0,
         col: !0,
         command: !0,
         embed: !0,
         frame: !0,
         hr: !0,
         img: !0,
         input: !0,
         keygen: !0,
         link: !0,
         meta: !0,
         param: !0,
         source: !0,
         track: !0,
         wbr: !0,
         menuitem: !0
      },
      implicitlyClosed: {
         dd: !0,
         li: !0,
         optgroup: !0,
         option: !0,
         p: !0,
         rp: !0,
         rt: !0,
         tbody: !0,
         td: !0,
         tfoot: !0,
         th: !0,
         tr: !0
      },
      contextGrabbers: {
         dd: {dd: !0, dt: !0},
         dt: {dd: !0, dt: !0},
         li: {li: !0},
         option: {option: !0, optgroup: !0},
         optgroup: {optgroup: !0},
         p: {
            address: !0,
            article: !0,
            aside: !0,
            blockquote: !0,
            dir: !0,
            div: !0,
            dl: !0,
            fieldset: !0,
            footer: !0,
            form: !0,
            h1: !0,
            h2: !0,
            h3: !0,
            h4: !0,
            h5: !0,
            h6: !0,
            header: !0,
            hgroup: !0,
            hr: !0,
            menu: !0,
            nav: !0,
            ol: !0,
            p: !0,
            pre: !0,
            section: !0,
            table: !0,
            ul: !0
         },
         rp: {rp: !0, rt: !0},
         rt: {rp: !0, rt: !0},
         tbody: {tbody: !0, tfoot: !0},
         td: {td: !0, th: !0},
         tfoot: {tbody: !0},
         th: {td: !0, th: !0},
         thead: {tbody: !0, tfoot: !0},
         tr: {tr: !0}
      },
      doNotIndent: {pre: !0},
      allowUnquoted: !0,
      allowMissing: !0,
      caseFold: !0
   }, n = {
      autoSelfClosers: {},
      implicitlyClosed: {},
      contextGrabbers: {},
      doNotIndent: {},
      allowUnquoted: !1,
      allowMissing: !1,
      allowMissingTagName: !1,
      caseFold: !1
   };
   e.defineMode("xml", function(r, i) {
      var o, a, l = r.indentUnit, s = {}, c = i.htmlMode ? t : n;
      for (var u in c) s[u] = c[u];
      for (var u in i) s[u] = i[u];

      function d(e, t) {
         function n(n) {
            return t.tokenize = n, n(e, t)
         }

         var r = e.next();
         return "<" == r ? e.eat("!") ? e.eat("[") ? e.match("CDATA[") ? n(h("atom", "]]>")) : null : e.match("--") ? n(h("comment", "--\x3e")) : e.match("DOCTYPE", !0, !0) ? (e.eatWhile(/[\w\._\-]/), n(function e(t) {
            return function(n, r) {
               for (var i; null != (i = n.next());) {
                  if ("<" == i) return r.tokenize = e(t + 1), r.tokenize(n, r);
                  if (">" == i) {
                     if (1 == t) {
                        r.tokenize = d;
                        break
                     }
                     return r.tokenize = e(t - 1), r.tokenize(n, r)
                  }
               }
               return "meta"
            }
         }(1))) : null : e.eat("?") ? (e.eatWhile(/[\w\._\-]/), t.tokenize = h("meta", "?>"), "meta") : (o = e.eat("/") ? "closeTag" : "openTag", t.tokenize = f, "tag bracket") : "&" == r ? (e.eat("#") ? e.eat("x") ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";") : e.eatWhile(/[\d]/) && e.eat(";") : e.eatWhile(/[\w\.\-:]/) && e.eat(";")) ? "atom" : "error" : (e.eatWhile(/[^&<]/), null)
      }

      function f(e, t) {
         var n, r, i = e.next();
         if (">" == i || "/" == i && e.eat(">")) return t.tokenize = d, o = ">" == i ? "endTag" : "selfcloseTag", "tag bracket";
         if ("=" == i) return o = "equals", null;
         if ("<" == i) {
            t.tokenize = d, t.state = v, t.tagName = t.tagStart = null;
            var a = t.tokenize(e, t);
            return a ? a + " tag error" : "tag error"
         }
         return /[\'\"]/.test(i) ? (t.tokenize = (n = i, (r = function(e, t) {
            for (; !e.eol();) if (e.next() == n) {
               t.tokenize = f;
               break
            }
            return "string"
         }).isInAttribute = !0, r), t.stringStartCol = e.column(), t.tokenize(e, t)) : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word")
      }

      function h(e, t) {
         return function(n, r) {
            for (; !n.eol();) {
               if (n.match(t)) {
                  r.tokenize = d;
                  break
               }
               n.next()
            }
            return e
         }
      }

      function p(e, t, n) {
         this.prev = e.context, this.tagName = t, this.indent = e.indented, this.startOfLine = n, (s.doNotIndent.hasOwnProperty(t) || e.context && e.context.noIndent) && (this.noIndent = !0)
      }

      function m(e) {
         e.context && (e.context = e.context.prev)
      }

      function g(e, t) {
         for (var n; ;) {
            if (!e.context) return;
            if (n = e.context.tagName, !s.contextGrabbers.hasOwnProperty(n) || !s.contextGrabbers[n].hasOwnProperty(t)) return;
            m(e)
         }
      }

      function v(e, t, n) {
         return "openTag" == e ? (n.tagStart = t.column(), y) : "closeTag" == e ? b : v
      }

      function y(e, t, n) {
         return "word" == e ? (n.tagName = t.current(), a = "tag", k) : s.allowMissingTagName && "endTag" == e ? (a = "tag bracket", k(e, t, n)) : (a = "error", y)
      }

      function b(e, t, n) {
         if ("word" == e) {
            var r = t.current();
            return n.context && n.context.tagName != r && s.implicitlyClosed.hasOwnProperty(n.context.tagName) && m(n), n.context && n.context.tagName == r || !1 === s.matchClosing ? (a = "tag", w) : (a = "tag error", x)
         }
         return s.allowMissingTagName && "endTag" == e ? (a = "tag bracket", w(e, t, n)) : (a = "error", x)
      }

      function w(e, t, n) {
         return "endTag" != e ? (a = "error", w) : (m(n), v)
      }

      function x(e, t, n) {
         return a = "error", w(e, 0, n)
      }

      function k(e, t, n) {
         if ("word" == e) return a = "attribute", C;
         if ("endTag" == e || "selfcloseTag" == e) {
            var r = n.tagName, i = n.tagStart;
            return n.tagName = n.tagStart = null, "selfcloseTag" == e || s.autoSelfClosers.hasOwnProperty(r) ? g(n, r) : (g(n, r), n.context = new p(n, r, i == n.indented)), v
         }
         return a = "error", k
      }

      function C(e, t, n) {
         return "equals" == e ? S : (s.allowMissing || (a = "error"), k(e, 0, n))
      }

      function S(e, t, n) {
         return "string" == e ? T : "word" == e && s.allowUnquoted ? (a = "string", k) : (a = "error", k(e, 0, n))
      }

      function T(e, t, n) {
         return "string" == e ? T : k(e, 0, n)
      }

      return d.isInText = !0, {
         startState: function(e) {
            var t = {tokenize: d, state: v, indented: e || 0, tagName: null, tagStart: null, context: null};
            return null != e && (t.baseIndent = e), t
         },
         token: function(e, t) {
            if (!t.tagName && e.sol() && (t.indented = e.indentation()), e.eatSpace()) return null;
            o = null;
            var n = t.tokenize(e, t);
            return (n || o) && "comment" != n && (a = null, t.state = t.state(o || n, e, t), a && (n = "error" == a ? n + " error" : a)), n
         },
         indent: function(t, n, r) {
            var i = t.context;
            if (t.tokenize.isInAttribute) return t.tagStart == t.indented ? t.stringStartCol + 1 : t.indented + l;
            if (i && i.noIndent) return e.Pass;
            if (t.tokenize != f && t.tokenize != d) return r ? r.match(/^(\s*)/)[0].length : 0;
            if (t.tagName) return !1 !== s.multilineTagIndentPastTag ? t.tagStart + t.tagName.length + 2 : t.tagStart + l * (s.multilineTagIndentFactor || 1);
            if (s.alignCDATA && /<!\[CDATA\[/.test(n)) return 0;
            var o = n && /^<(\/)?([\w_:\.-]*)/.exec(n);
            if (o && o[1]) for (; i;) {
               if (i.tagName == o[2]) {
                  i = i.prev;
                  break
               }
               if (!s.implicitlyClosed.hasOwnProperty(i.tagName)) break;
               i = i.prev
            } else if (o) for (; i;) {
               var a = s.contextGrabbers[i.tagName];
               if (!a || !a.hasOwnProperty(o[2])) break;
               i = i.prev
            }
            for (; i && i.prev && !i.startOfLine;) i = i.prev;
            return i ? i.indent + l : t.baseIndent || 0
         },
         electricInput: /<\/[\s\w:]+>$/,
         blockCommentStart: "\x3c!--",
         blockCommentEnd: "--\x3e",
         configuration: s.htmlMode ? "html" : "xml",
         helperType: s.htmlMode ? "html" : "xml",
         skipAttribute: function(e) {
            e.state == S && (e.state = k)
         }
      }
   }), e.defineMIME("text/xml", "xml"), e.defineMIME("application/xml", "xml"), e.mimeModes.hasOwnProperty("text/html") || e.defineMIME("text/html", {
      name: "xml",
      htmlMode: !0
   })
}, define(["exports"], function(e) {
   e.lib = cm.lib, e.addons = cm.addon, e.modes = cm.mode
});
