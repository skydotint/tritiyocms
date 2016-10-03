/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e, t) {
    function _(e) {
        var t = M[e] = {};
        return v.each(e.split(y), function(e, n) {
            t[n] = !0
        }), t
    }

    function H(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : D.test(r) ? v.parseJSON(r) : r
                } catch (s) {}
                v.data(e, n, r)
            } else r = t
        }
        return r
    }

    function B(e) {
        var t;
        for (t in e) {
            if (t === "data" && v.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1
        }
        return !0
    }

    function et() {
        return !1
    }

    function tt() {
        return !0
    }

    function ut(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }

    function at(e, t) {
        do e = e[t]; while (e && e.nodeType !== 1);
        return e
    }

    function ft(e, t, n) {
        t = t || 0;
        if (v.isFunction(t)) return v.grep(e, function(e, r) {
            var i = !!t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return v.grep(e, function(e, r) {
            return e === t === n
        });
        if (typeof t == "string") {
            var r = v.grep(e, function(e) {
                return e.nodeType === 1
            });
            if (it.test(t)) return v.filter(t, r, !n);
            t = v.filter(t, r)
        }
        return v.grep(e, function(e, r) {
            return v.inArray(e, t) >= 0 === n
        })
    }

    function lt(e) {
        var t = ct.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }

    function Lt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function At(e, t) {
        if (t.nodeType !== 1 || !v.hasData(e)) return;
        var n, r, i, s = v._data(e),
            o = v._data(t, s),
            u = s.events;
        if (u) {
            delete o.handle, o.events = {};
            for (n in u)
                for (r = 0, i = u[n].length; r < i; r++) v.event.add(t, n, u[n][r])
        }
        o.data && (o.data = v.extend({}, o.data))
    }

    function Ot(e, t) {
        var n;
        if (t.nodeType !== 1) return;
        t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), n === "object" ? (t.parentNode && (t.outerHTML = e.outerHTML), v.support.html5Clone && e.innerHTML && !v.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : n === "input" && Et.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text), t.removeAttribute(v.expando)
    }

    function Mt(e) {
        return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
    }

    function _t(e) {
        Et.test(e.type) && (e.defaultChecked = e.checked)
    }

    function Qt(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = Jt.length;
        while (i--) {
            t = Jt[i] + n;
            if (t in e) return t
        }
        return r
    }

    function Gt(e, t) {
        return e = t || e, v.css(e, "display") === "none" || !v.contains(e.ownerDocument, e)
    }

    function Yt(e, t) {
        var n, r, i = [],
            s = 0,
            o = e.length;
        for (; s < o; s++) {
            n = e[s];
            if (!n.style) continue;
            i[s] = v._data(n, "olddisplay"), t ? (!i[s] && n.style.display === "none" && (n.style.display = ""), n.style.display === "" && Gt(n) && (i[s] = v._data(n, "olddisplay", nn(n.nodeName)))) : (r = Dt(n, "display"), !i[s] && r !== "none" && v._data(n, "olddisplay", r))
        }
        for (s = 0; s < o; s++) {
            n = e[s];
            if (!n.style) continue;
            if (!t || n.style.display === "none" || n.style.display === "") n.style.display = t ? i[s] || "" : "none"
        }
        return e
    }

    function Zt(e, t, n) {
        var r = Rt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function en(e, t, n, r) {
        var i = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
            s = 0;
        for (; i < 4; i += 2) n === "margin" && (s += v.css(e, n + $t[i], !0)), r ? (n === "content" && (s -= parseFloat(Dt(e, "padding" + $t[i])) || 0), n !== "margin" && (s -= parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0)) : (s += parseFloat(Dt(e, "padding" + $t[i])) || 0, n !== "padding" && (s += parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0));
        return s
    }

    function tn(e, t, n) {
        var r = t === "width" ? e.offsetWidth : e.offsetHeight,
            i = !0,
            s = v.support.boxSizing && v.css(e, "boxSizing") === "border-box";
        if (r <= 0 || r == null) {
            r = Dt(e, t);
            if (r < 0 || r == null) r = e.style[t];
            if (Ut.test(r)) return r;
            i = s && (v.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + en(e, t, n || (s ? "border" : "content"), i) + "px"
    }

    function nn(e) {
        if (Wt[e]) return Wt[e];
        var t = v("<" + e + ">").appendTo(i.body),
            n = t.css("display");
        t.remove();
        if (n === "none" || n === "") {
            Pt = i.body.appendChild(Pt || v.extend(i.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!Ht || !Pt.createElement) Ht = (Pt.contentWindow || Pt.contentDocument).document, Ht.write("<!doctype html><html><body>"), Ht.close();
            t = Ht.body.appendChild(Ht.createElement(e)), n = Dt(t, "display"), i.body.removeChild(Pt)
        }
        return Wt[e] = n, n
    }

    function fn(e, t, n, r) {
        var i;
        if (v.isArray(t)) v.each(t, function(t, i) {
            n || sn.test(e) ? r(e, i) : fn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
        });
        else if (!n && v.type(t) === "object")
            for (i in t) fn(e + "[" + i + "]", t[i], n, r);
        else r(e, t)
    }

    function Cn(e) {
        return function(t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i, s, o = t.toLowerCase().split(y),
                u = 0,
                a = o.length;
            if (v.isFunction(n))
                for (; u < a; u++) r = o[u], s = /^\+/.test(r), s && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[s ? "unshift" : "push"](n)
        }
    }

    function kn(e, n, r, i, s, o) {
        s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
        var u, a = e[s],
            f = 0,
            l = a ? a.length : 0,
            c = e === Sn;
        for (; f < l && (c || !u); f++) u = a[f](n, r, i), typeof u == "string" && (!c || o[u] ? u = t : (n.dataTypes.unshift(u), u = kn(e, n, r, i, u, o)));
        return (c || !u) && !o["*"] && (u = kn(e, n, r, i, "*", o)), u
    }

    function Ln(e, n) {
        var r, i, s = v.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
        i && v.extend(!0, e, i)
    }

    function An(e, n, r) {
        var i, s, o, u, a = e.contents,
            f = e.dataTypes,
            l = e.responseFields;
        for (s in l) s in r && (n[l[s]] = r[s]);
        while (f[0] === "*") f.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
        if (i)
            for (s in a)
                if (a[s] && a[s].test(i)) {
                    f.unshift(s);
                    break
                }
        if (f[0] in r) o = f[0];
        else {
            for (s in r) {
                if (!f[0] || e.converters[s + " " + f[0]]) {
                    o = s;
                    break
                }
                u || (u = s)
            }
            o = o || u
        }
        if (o) return o !== f[0] && f.unshift(o), r[o]
    }

    function On(e, t) {
        var n, r, i, s, o = e.dataTypes.slice(),
            u = o[0],
            a = {},
            f = 0;
        e.dataFilter && (t = e.dataFilter(t, e.dataType));
        if (o[1])
            for (n in e.converters) a[n.toLowerCase()] = e.converters[n];
        for (; i = o[++f];)
            if (i !== "*") {
                if (u !== "*" && u !== i) {
                    n = a[u + " " + i] || a["* " + i];
                    if (!n)
                        for (r in a) {
                            s = r.split(" ");
                            if (s[1] === i) {
                                n = a[u + " " + s[0]] || a["* " + s[0]];
                                if (n) {
                                    n === !0 ? n = a[r] : a[r] !== !0 && (i = s[0], o.splice(f--, 0, i));
                                    break
                                }
                            }
                        }
                    if (n !== !0)
                        if (n && e["throws"]) t = n(t);
                        else try {
                            t = n(t)
                        } catch (l) {
                            return {
                                state: "parsererror",
                                error: n ? l : "No conversion from " + u + " to " + i
                            }
                        }
                }
                u = i
            }
        return {
            state: "success",
            data: t
        }
    }

    function Fn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function In() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function $n() {
        return setTimeout(function() {
            qn = t
        }, 0), qn = v.now()
    }

    function Jn(e, t) {
        v.each(t, function(t, n) {
            var r = (Vn[t] || []).concat(Vn["*"]),
                i = 0,
                s = r.length;
            for (; i < s; i++)
                if (r[i].call(e, t, n)) return
        })
    }

    function Kn(e, t, n) {
        var r, i = 0,
            s = 0,
            o = Xn.length,
            u = v.Deferred().always(function() {
                delete a.elem
            }),
            a = function() {
                var t = qn || $n(),
                    n = Math.max(0, f.startTime + f.duration - t),
                    r = n / f.duration || 0,
                    i = 1 - r,
                    s = 0,
                    o = f.tweens.length;
                for (; s < o; s++) f.tweens[s].run(i);
                return u.notifyWith(e, [f, i, n]), i < 1 && o ? n : (u.resolveWith(e, [f]), !1)
            },
            f = u.promise({
                elem: e,
                props: v.extend({}, t),
                opts: v.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: qn || $n(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n, r) {
                    var i = v.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    for (; n < r; n++) f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        Qn(l, f.opts.specialEasing);
        for (; i < o; i++) {
            r = Xn[i].call(f, e, l, f.opts);
            if (r) return r
        }
        return Jn(f, l), v.isFunction(f.opts.start) && f.opts.start.call(e, f), v.fx.timer(v.extend(a, {
            anim: f,
            queue: f.opts.queue,
            elem: e
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function Qn(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = v.camelCase(n), i = t[r], s = e[n], v.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = v.cssHooks[r];
            if (o && "expand" in o) {
                s = o.expand(s), delete e[r];
                for (n in s) n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
        }
    }

    function Gn(e, t, n) {
        var r, i, s, o, u, a, f, l, c, h = this,
            p = e.style,
            d = {},
            m = [],
            g = e.nodeType && Gt(e);
        n.queue || (l = v._queueHooks(e, "fx"), l.unqueued == null && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function() {
            l.unqueued || c()
        }), l.unqueued++, h.always(function() {
            h.always(function() {
                l.unqueued--, v.queue(e, "fx").length || l.empty.fire()
            })
        })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], v.css(e, "display") === "inline" && v.css(e, "float") === "none" && (!v.support.inlineBlockNeedsLayout || nn(e.nodeName) === "inline" ? p.display = "inline-block" : p.zoom = 1)), n.overflow && (p.overflow = "hidden", v.support.shrinkWrapBlocks || h.done(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t) {
            s = t[r];
            if (Un.exec(s)) {
                delete t[r], a = a || s === "toggle";
                if (s === (g ? "hide" : "show")) continue;
                m.push(r)
            }
        }
        o = m.length;
        if (o) {
            u = v._data(e, "fxshow") || v._data(e, "fxshow", {}), "hidden" in u && (g = u.hidden), a && (u.hidden = !g), g ? v(e).show() : h.done(function() {
                v(e).hide()
            }), h.done(function() {
                var t;
                v.removeData(e, "fxshow", !0);
                for (t in d) v.style(e, t, d[t])
            });
            for (r = 0; r < o; r++) i = m[r], f = h.createTween(i, g ? u[i] : 0), d[i] = u[i] || v.style(e, i), i in u || (u[i] = f.start, g && (f.end = f.start, f.start = i === "width" || i === "height" ? 1 : 0))
        }
    }

    function Yn(e, t, n, r, i) {
        return new Yn.prototype.init(e, t, n, r, i)
    }

    function Zn(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t) n = $t[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function tr(e) {
        return v.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    var n, r, i = e.document,
        s = e.location,
        o = e.navigator,
        u = e.jQuery,
        a = e.$,
        f = Array.prototype.push,
        l = Array.prototype.slice,
        c = Array.prototype.indexOf,
        h = Object.prototype.toString,
        p = Object.prototype.hasOwnProperty,
        d = String.prototype.trim,
        v = function(e, t) {
            return new v.fn.init(e, t, n)
        },
        m = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        g = /\S/,
        y = /\s+/,
        b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        w = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        S = /^[\],:{}\s]*$/,
        x = /(?:^|:|,)(?:\s*\[)+/g,
        T = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        N = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        C = /^-ms-/,
        k = /-([\da-z])/gi,
        L = function(e, t) {
            return (t + "").toUpperCase()
        },
        A = function() {
            i.addEventListener ? (i.removeEventListener("DOMContentLoaded", A, !1), v.ready()) : i.readyState === "complete" && (i.detachEvent("onreadystatechange", A), v.ready())
        },
        O = {};
    v.fn = v.prototype = {
        constructor: v,
        init: function(e, n, r) {
            var s, o, u, a;
            if (!e) return this;
            if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? s = [null, e, null] : s = w.exec(e);
                if (s && (s[1] || !n)) {
                    if (s[1]) return n = n instanceof v ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : i, e = v.parseHTML(s[1], a, !0), E.test(s[1]) && v.isPlainObject(n) && this.attr.call(e, n, !0), v.merge(this, e);
                    o = i.getElementById(s[2]);
                    if (o && o.parentNode) {
                        if (o.id !== s[2]) return r.find(e);
                        this.length = 1, this[0] = o
                    }
                    return this.context = i, this.selector = e, this
                }
                return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
            }
            return v.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), v.makeArray(e, this))
        },
        selector: "",
        jquery: "1.8.3",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return l.call(this)
        },
        get: function(e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function(e, t, n) {
            var r = v.merge(this.constructor(), e);
            return r.prevObject = this, r.context = this.context, t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
        },
        each: function(e, t) {
            return v.each(this, e, t)
        },
        ready: function(e) {
            return v.ready.promise().done(e), this
        },
        eq: function(e) {
            return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(l.apply(this, arguments), "slice", l.call(arguments).join(","))
        },
        map: function(e) {
            return this.pushStack(v.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: [].sort,
        splice: [].splice
    }, v.fn.init.prototype = v.fn, v.extend = v.fn.extend = function() {
        var e, n, r, i, s, o, u = arguments[0] || {},
            a = 1,
            f = arguments.length,
            l = !1;
        typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !v.isFunction(u) && (u = {}), f === a && (u = this, --a);
        for (; a < f; a++)
            if ((e = arguments[a]) != null)
                for (n in e) {
                    r = u[n], i = e[n];
                    if (u === i) continue;
                    l && i && (v.isPlainObject(i) || (s = v.isArray(i))) ? (s ? (s = !1, o = r && v.isArray(r) ? r : []) : o = r && v.isPlainObject(r) ? r : {}, u[n] = v.extend(l, o, i)) : i !== t && (u[n] = i)
                }
            return u
    }, v.extend({
        noConflict: function(t) {
            return e.$ === v && (e.$ = a), t && e.jQuery === v && (e.jQuery = u), v
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? v.readyWait++ : v.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? --v.readyWait : v.isReady) return;
            if (!i.body) return setTimeout(v.ready, 1);
            v.isReady = !0;
            if (e !== !0 && --v.readyWait > 0) return;
            r.resolveWith(i, [v]), v.fn.trigger && v(i).trigger("ready").off("ready")
        },
        isFunction: function(e) {
            return v.type(e) === "function"
        },
        isArray: Array.isArray || function(e) {
            return v.type(e) === "array"
        },
        isWindow: function(e) {
            return e != null && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return e == null ? String(e) : O[h.call(e)] || "object"
        },
        isPlainObject: function(e) {
            if (!e || v.type(e) !== "object" || e.nodeType || v.isWindow(e)) return !1;
            try {
                if (e.constructor && !p.call(e, "constructor") && !p.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e);
            return r === t || p.call(e, r)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function(e) {
            throw new Error(e)
        },
        parseHTML: function(e, t, n) {
            var r;
            return !e || typeof e != "string" ? null : (typeof t == "boolean" && (n = t, t = 0), t = t || i, (r = E.exec(e)) ? [t.createElement(r[1])] : (r = v.buildFragment([e], t, n ? null : []), v.merge([], (r.cacheable ? v.clone(r.fragment) : r.fragment).childNodes)))
        },
        parseJSON: function(t) {
            if (!t || typeof t != "string") return null;
            t = v.trim(t);
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
            if (S.test(t.replace(T, "@").replace(N, "]").replace(x, ""))) return (new Function("return " + t))();
            v.error("Invalid JSON: " + t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || typeof n != "string") return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (s) {
                r = t
            }
            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && v.error("Invalid XML: " + n), r
        },
        noop: function() {},
        globalEval: function(t) {
            t && g.test(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(C, "ms-").replace(k, L)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, n, r) {
            var i, s = 0,
                o = e.length,
                u = o === t || v.isFunction(e);
            if (r) {
                if (u) {
                    for (i in e)
                        if (n.apply(e[i], r) === !1) break
                } else
                    for (; s < o;)
                        if (n.apply(e[s++], r) === !1) break
            } else if (u) {
                for (i in e)
                    if (n.call(e[i], i, e[i]) === !1) break
            } else
                for (; s < o;)
                    if (n.call(e[s], s, e[s++]) === !1) break; return e
        },
        trim: d && !d.call("\ufeff\u00a0") ? function(e) {
            return e == null ? "" : d.call(e)
        } : function(e) {
            return e == null ? "" : (e + "").replace(b, "")
        },
        makeArray: function(e, t) {
            var n, r = t || [];
            return e != null && (n = v.type(e), e.length == null || n === "string" || n === "function" || n === "regexp" || v.isWindow(e) ? f.call(r, e) : v.merge(r, e)), r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (c) return c.call(t, e, n);
                r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                s = 0;
            if (typeof r == "number")
                for (; s < r; s++) e[i++] = n[s];
            else
                while (n[s] !== t) e[i++] = n[s++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                s = 0,
                o = e.length;
            n = !!n;
            for (; s < o; s++) r = !!t(e[s], s), n !== r && i.push(e[s]);
            return i
        },
        map: function(e, n, r) {
            var i, s, o = [],
                u = 0,
                a = e.length,
                f = e instanceof v || a !== t && typeof a == "number" && (a > 0 && e[0] && e[a - 1] || a === 0 || v.isArray(e));
            if (f)
                for (; u < a; u++) i = n(e[u], u, r), i != null && (o[o.length] = i);
            else
                for (s in e) i = n(e[s], s, r), i != null && (o[o.length] = i);
            return o.concat.apply([], o)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, s;
            return typeof n == "string" && (r = e[n], n = e, e = r), v.isFunction(e) ? (i = l.call(arguments, 2), s = function() {
                return e.apply(n, i.concat(l.call(arguments)))
            }, s.guid = e.guid = e.guid || v.guid++, s) : t
        },
        access: function(e, n, r, i, s, o, u) {
            var a, f = r == null,
                l = 0,
                c = e.length;
            if (r && typeof r == "object") {
                for (l in r) v.access(e, n, l, r[l], 1, o, i);
                s = 1
            } else if (i !== t) {
                a = u === t && v.isFunction(i), f && (a ? (a = n, n = function(e, t, n) {
                    return a.call(v(e), n)
                }) : (n.call(e, i), n = null));
                if (n)
                    for (; l < c; l++) n(e[l], r, a ? i.call(e[l], l, n(e[l], r)) : i, u);
                s = 1
            }
            return s ? e : f ? n.call(e) : c ? n(e[0], r) : o
        },
        now: function() {
            return (new Date).getTime()
        }
    }), v.ready.promise = function(t) {
        if (!r) {
            r = v.Deferred();
            if (i.readyState === "complete") setTimeout(v.ready, 1);
            else if (i.addEventListener) i.addEventListener("DOMContentLoaded", A, !1), e.addEventListener("load", v.ready, !1);
            else {
                i.attachEvent("onreadystatechange", A), e.attachEvent("onload", v.ready);
                var n = !1;
                try {
                    n = e.frameElement == null && i.documentElement
                } catch (s) {}
                n && n.doScroll && function o() {
                    if (!v.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(o, 50)
                        }
                        v.ready()
                    }
                }()
            }
        }
        return r.promise(t)
    }, v.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
        O["[object " + t + "]"] = t.toLowerCase()
    }), n = v(i);
    var M = {};
    v.Callbacks = function(e) {
        e = typeof e == "string" ? M[e] || _(e) : v.extend({}, e);
        var n, r, i, s, o, u, a = [],
            f = !e.once && [],
            l = function(t) {
                n = e.memory && t, r = !0, u = s || 0, s = 0, o = a.length, i = !0;
                for (; a && u < o; u++)
                    if (a[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                i = !1, a && (f ? f.length && l(f.shift()) : n ? a = [] : c.disable())
            },
            c = {
                add: function() {
                    if (a) {
                        var t = a.length;
                        (function r(t) {
                            v.each(t, function(t, n) {
                                var i = v.type(n);
                                i === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && i !== "string" && r(n)
                            })
                        })(arguments), i ? o = a.length : n && (s = t, l(n))
                    }
                    return this
                },
                remove: function() {
                    return a && v.each(arguments, function(e, t) {
                        var n;
                        while ((n = v.inArray(t, a, n)) > -1) a.splice(n, 1), i && (n <= o && o--, n <= u && u--)
                    }), this
                },
                has: function(e) {
                    return v.inArray(e, a) > -1
                },
                empty: function() {
                    return a = [], this
                },
                disable: function() {
                    return a = f = n = t, this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return f = t, n || c.disable(), this
                },
                locked: function() {
                    return !f
                },
                fireWith: function(e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], a && (!r || f) && (i ? f.push(t) : l(t)), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return c
    }, v.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", v.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", v.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", v.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return v.Deferred(function(n) {
                            v.each(t, function(t, r) {
                                var s = r[0],
                                    o = e[t];
                                i[r[1]](v.isFunction(o) ? function() {
                                    var e = o.apply(this, arguments);
                                    e && v.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n : this, [e])
                                } : n[s])
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return e != null ? v.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, v.each(t, function(e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add, u && o.add(function() {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = o.fire, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = l.call(arguments),
                r = n.length,
                i = r !== 1 || e && v.isFunction(e.promise) ? r : 0,
                s = i === 1 ? e : v.Deferred(),
                o = function(e, t, n) {
                    return function(r) {
                        t[e] = this, n[e] = arguments.length > 1 ? l.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                    }
                },
                u, a, f;
            if (r > 1) {
                u = new Array(r), a = new Array(r), f = new Array(r);
                for (; t < r; t++) n[t] && v.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n), s.promise()
        }
    }), v.support = function() {
        var t, n, r, s, o, u, a, f, l, c, h, p = i.createElement("div");
        p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0];
        if (!n || !r || !n.length) return {};
        s = i.createElement("select"), o = s.appendChild(i.createElement("option")), u = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: r.getAttribute("href") === "/a",
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: u.value === "on",
            optSelected: o.selected,
            getSetAttribute: p.className !== "t",
            enctype: !!i.createElement("form").enctype,
            html5Clone: i.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: i.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, u.checked = !0, t.noCloneChecked = u.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !o.disabled;
        try {
            delete p.test
        } catch (d) {
            t.deleteExpando = !1
        }!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", h = function() {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick"), p.detachEvent("onclick", h)), u = i.createElement("input"), u.value = "t", u.setAttribute("type", "radio"), t.radioValue = u.value === "t", u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), p.appendChild(u), a = i.createDocumentFragment(), a.appendChild(p.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = u.checked, a.removeChild(u), a.appendChild(p);
        if (p.attachEvent)
            for (l in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) f = "on" + l, c = f in p, c || (p.setAttribute(f, "return;"), c = typeof p[f] == "function"), t[l + "Bubbles"] = c;
        return v(function() {
            var n, r, s, o, u = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                a = i.getElementsByTagName("body")[0];
            if (!a) return;
            n = i.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", a.insertBefore(n, a.firstChild), r = i.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = r.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && s[0].offsetHeight === 0, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = r.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(r, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(r, null) || {
                width: "4px"
            }).width === "4px", o = i.createElement("div"), o.style.cssText = r.style.cssText = u, o.style.marginRight = o.style.width = "0", r.style.width = "1px", r.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), typeof r.style.zoom != "undefined" && (r.innerHTML = "", r.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = r.offsetWidth === 3, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = r.offsetWidth !== 3, n.style.zoom = 1), a.removeChild(n), n = r = s = o = null
        }), a.removeChild(p), n = r = s = o = u = a = p = null, t
    }();
    var D = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        P = /([A-Z])/g;
    v.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (v.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? v.cache[e[v.expando]] : e[v.expando], !!e && !B(e)
        },
        data: function(e, n, r, i) {
            if (!v.acceptData(e)) return;
            var s, o, u = v.expando,
                a = typeof n == "string",
                f = e.nodeType,
                l = f ? v.cache : e,
                c = f ? e[u] : e[u] && u;
            if ((!c || !l[c] || !i && !l[c].data) && a && r === t) return;
            c || (f ? e[u] = c = v.deletedIds.pop() || v.guid++ : c = u), l[c] || (l[c] = {}, f || (l[c].toJSON = v.noop));
            if (typeof n == "object" || typeof n == "function") i ? l[c] = v.extend(l[c], n) : l[c].data = v.extend(l[c].data, n);
            return s = l[c], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[v.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[v.camelCase(n)])) : o = s, o
        },
        removeData: function(e, t, n) {
            if (!v.acceptData(e)) return;
            var r, i, s, o = e.nodeType,
                u = o ? v.cache : e,
                a = o ? e[v.expando] : v.expando;
            if (!u[a]) return;
            if (t) {
                r = n ? u[a] : u[a].data;
                if (r) {
                    v.isArray(t) || (t in r ? t = [t] : (t = v.camelCase(t), t in r ? t = [t] : t = t.split(" ")));
                    for (i = 0, s = t.length; i < s; i++) delete r[t[i]];
                    if (!(n ? B : v.isEmptyObject)(r)) return
                }
            }
            if (!n) {
                delete u[a].data;
                if (!B(u[a])) return
            }
            o ? v.cleanData([e], !0) : v.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null
        },
        _data: function(e, t, n) {
            return v.data(e, t, n, !0)
        },
        acceptData: function(e) {
            var t = e.nodeName && v.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), v.fn.extend({
        data: function(e, n) {
            var r, i, s, o, u, a = this[0],
                f = 0,
                l = null;
            if (e === t) {
                if (this.length) {
                    l = v.data(a);
                    if (a.nodeType === 1 && !v._data(a, "parsedAttrs")) {
                        s = a.attributes;
                        for (u = s.length; f < u; f++) o = s[f].name, o.indexOf("data-") || (o = v.camelCase(o.substring(5)), H(a, o, l[o]));
                        v._data(a, "parsedAttrs", !0)
                    }
                }
                return l
            }
            return typeof e == "object" ? this.each(function() {
                v.data(this, e)
            }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", v.access(this, function(n) {
                if (n === t) return l = this.triggerHandler("getData" + i, [r[0]]), l === t && a && (l = v.data(a, e), l = H(a, e, l)), l === t && r[1] ? this.data(r[0]) : l;
                r[1] = n, this.each(function() {
                    var t = v(this);
                    t.triggerHandler("setData" + i, r), v.data(this, e, n), t.triggerHandler("changeData" + i, r)
                })
            }, null, n, arguments.length > 1, null, !1))
        },
        removeData: function(e) {
            return this.each(function() {
                v.removeData(this, e)
            })
        }
    }), v.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = v._data(e, t), n && (!r || v.isArray(n) ? r = v._data(e, t, v.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = v.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = v._queueHooks(e, t),
                o = function() {
                    v.dequeue(e, t)
                };
            i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return v._data(e, n) || v._data(e, n, {
                empty: v.Callbacks("once memory").add(function() {
                    v.removeData(e, t + "queue", !0), v.removeData(e, n, !0)
                })
            })
        }
    }), v.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? v.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = v.queue(this, e, n);
                v._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && v.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                v.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = v.fx ? v.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
                s = v.Deferred(),
                o = this,
                u = this.length,
                a = function() {
                    --i || s.resolveWith(o, [o])
                };
            typeof e != "string" && (n = e, e = t), e = e || "fx";
            while (u--) r = v._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
            return a(), s.promise(n)
        }
    });
    var j, F, I, q = /[\t\r\n]/g,
        R = /\r/g,
        U = /^(?:button|input)$/i,
        z = /^(?:button|input|object|select|textarea)$/i,
        W = /^a(?:rea|)$/i,
        X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        V = v.support.getSetAttribute;
    v.fn.extend({
        attr: function(e, t) {
            return v.access(this, v.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                v.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return v.access(this, v.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = v.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, s, o, u;
            if (v.isFunction(e)) return this.each(function(t) {
                v(this).addClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string") {
                t = e.split(y);
                for (n = 0, r = this.length; n < r; n++) {
                    i = this[n];
                    if (i.nodeType === 1)
                        if (!i.className && t.length === 1) i.className = e;
                        else {
                            s = " " + i.className + " ";
                            for (o = 0, u = t.length; o < u; o++) s.indexOf(" " + t[o] + " ") < 0 && (s += t[o] + " ");
                            i.className = v.trim(s)
                        }
                }
            }
            return this
        },
        removeClass: function(e) {
            var n, r, i, s, o, u, a;
            if (v.isFunction(e)) return this.each(function(t) {
                v(this).removeClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string" || e === t) {
                n = (e || "").split(y);
                for (u = 0, a = this.length; u < a; u++) {
                    i = this[u];
                    if (i.nodeType === 1 && i.className) {
                        r = (" " + i.className + " ").replace(q, " ");
                        for (s = 0, o = n.length; s < o; s++)
                            while (r.indexOf(" " + n[s] + " ") >= 0) r = r.replace(" " + n[s] + " ", " ");
                        i.className = e ? v.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = typeof t == "boolean";
            return v.isFunction(e) ? this.each(function(n) {
                v(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if (n === "string") {
                    var i, s = 0,
                        o = v(this),
                        u = t,
                        a = e.split(y);
                    while (i = a[s++]) u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i)
                } else if (n === "undefined" || n === "boolean") this.className && v._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : v._data(this, "__className__") || ""
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; n < r; n++)
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(q, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, s = this[0];
            if (!arguments.length) {
                if (s) return n = v.valHooks[s.type] || v.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(R, "") : r == null ? "" : r);
                return
            }
            return i = v.isFunction(e), this.each(function(r) {
                var s, o = v(this);
                if (this.nodeType !== 1) return;
                i ? s = e.call(this, r, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : v.isArray(s) && (s = v.map(s, function(e) {
                    return e == null ? "" : e + ""
                })), n = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()];
                if (!n || !("set" in n) || n.set(this, s, "value") === t) this.value = s
            })
        }
    }), v.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        s = e.type === "select-one" || i < 0,
                        o = s ? null : [],
                        u = s ? i + 1 : r.length,
                        a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (v.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !v.nodeName(n.parentNode, "optgroup"))) {
                            t = v(n).val();
                            if (s) return t;
                            o.push(t)
                        }
                    }
                    return o
                },
                set: function(e, t) {
                    var n = v.makeArray(t);
                    return v(e).find("option").each(function() {
                        this.selected = v.inArray(v(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {},
        attr: function(e, n, r, i) {
            var s, o, u, a = e.nodeType;
            if (!e || a === 3 || a === 8 || a === 2) return;
            if (i && v.isFunction(v.fn[n])) return v(e)[n](r);
            if (typeof e.getAttribute == "undefined") return v.prop(e, n, r);
            u = a !== 1 || !v.isXMLDoc(e), u && (n = n.toLowerCase(), o = v.attrHooks[n] || (X.test(n) ? F : j));
            if (r !== t) {
                if (r === null) {
                    v.removeAttr(e, n);
                    return
                }
                return o && "set" in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r)
            }
            return o && "get" in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n), s === null ? t : s)
        },
        removeAttr: function(e, t) {
            var n, r, i, s, o = 0;
            if (t && e.nodeType === 1) {
                r = t.split(y);
                for (; o < r.length; o++) i = r[o], i && (n = v.propFix[i] || i, s = X.test(i), s || v.attr(e, i, ""), e.removeAttribute(V ? i : n), s && n in e && (e[n] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (U.test(e.nodeName) && e.parentNode) v.error("type property can't be changed");
                    else if (!v.support.radioValue && t === "radio" && v.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return j && v.nodeName(e, "button") ? j.get(e, t) : t in e ? e.value : null
                },
                set: function(e, t, n) {
                    if (j && v.nodeName(e, "button")) return j.set(e, t, n);
                    e.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2) return;
            return o = u !== 1 || !v.isXMLDoc(e), o && (n = v.propFix[n] || n, s = v.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : z.test(e.nodeName) || W.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), F = {
        get: function(e, n) {
            var r, i = v.prop(e, n);
            return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            var r;
            return t === !1 ? v.removeAttr(e, n) : (r = v.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, V || (I = {
        name: !0,
        id: !0,
        coords: !0
    }, j = v.valHooks.button = {
        get: function(e, n) {
            var r;
            return r = e.getAttributeNode(n), r && (I[n] ? r.value !== "" : r.specified) ? r.value : t
        },
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = i.createAttribute(n), e.setAttributeNode(r)), r.value = t + ""
        }
    }, v.each(["width", "height"], function(e, t) {
        v.attrHooks[t] = v.extend(v.attrHooks[t], {
            set: function(e, n) {
                if (n === "") return e.setAttribute(t, "auto"), n
            }
        })
    }), v.attrHooks.contenteditable = {
        get: j.get,
        set: function(e, t, n) {
            t === "" && (t = "false"), j.set(e, t, n)
        }
    }), v.support.hrefNormalized || v.each(["href", "src", "width", "height"], function(e, n) {
        v.attrHooks[n] = v.extend(v.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return r === null ? t : r
            }
        })
    }), v.support.style || (v.attrHooks.style = {
        get: function(e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), v.support.optSelected || (v.propHooks.selected = v.extend(v.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), v.support.enctype || (v.propFix.enctype = "encoding"), v.support.checkOn || v.each(["radio", "checkbox"], function() {
        v.valHooks[this] = {
            get: function(e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    }), v.each(["radio", "checkbox"], function() {
        v.valHooks[this] = v.extend(v.valHooks[this], {
            set: function(e, t) {
                if (v.isArray(t)) return e.checked = v.inArray(v(e).val(), t) >= 0
            }
        })
    });
    var $ = /^(?:textarea|input|select)$/i,
        J = /^([^\.]*|)(?:\.(.+)|)$/,
        K = /(?:^|\s)hover(\.\S+|)\b/,
        Q = /^key/,
        G = /^(?:mouse|contextmenu)|click/,
        Y = /^(?:focusinfocus|focusoutblur)$/,
        Z = function(e) {
            return v.event.special.hover ? e : e.replace(K, "mouseenter$1 mouseleave$1")
        };
    v.event = {
            add: function(e, n, r, i, s) {
                var o, u, a, f, l, c, h, p, d, m, g;
                if (e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = v._data(e))) return;
                r.handler && (d = r, r = d.handler, s = d.selector), r.guid || (r.guid = v.guid++), a = o.events, a || (o.events = a = {}), u = o.handle, u || (o.handle = u = function(e) {
                    return typeof v == "undefined" || !!e && v.event.triggered === e.type ? t : v.event.dispatch.apply(u.elem, arguments)
                }, u.elem = e), n = v.trim(Z(n)).split(" ");
                for (f = 0; f < n.length; f++) {
                    l = J.exec(n[f]) || [], c = l[1], h = (l[2] || "").split(".").sort(), g = v.event.special[c] || {}, c = (s ? g.delegateType : g.bindType) || c, g = v.event.special[c] || {}, p = v.extend({
                        type: c,
                        origType: l[1],
                        data: i,
                        handler: r,
                        guid: r.guid,
                        selector: s,
                        needsContext: s && v.expr.match.needsContext.test(s),
                        namespace: h.join(".")
                    }, d), m = a[c];
                    if (!m) {
                        m = a[c] = [], m.delegateCount = 0;
                        if (!g.setup || g.setup.call(e, i, h, u) === !1) e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u)
                    }
                    g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), s ? m.splice(m.delegateCount++, 0, p) : m.push(p), v.event.global[c] = !0
                }
                e = null
            },
            global: {},
            remove: function(e, t, n, r, i) {
                var s, o, u, a, f, l, c, h, p, d, m, g = v.hasData(e) && v._data(e);
                if (!g || !(h = g.events)) return;
                t = v.trim(Z(t || "")).split(" ");
                for (s = 0; s < t.length; s++) {
                    o = J.exec(t[s]) || [], u = a = o[1], f = o[2];
                    if (!u) {
                        for (u in h) v.event.remove(e, u + t[s], n, r, !0);
                        continue
                    }
                    p = v.event.special[u] || {}, u = (r ? p.delegateType : p.bindType) || u, d = h[u] || [], l = d.length, f = f ? new RegExp("(^|\\.)" + f.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                    for (c = 0; c < d.length; c++) m = d[c], (i || a === m.origType) && (!n || n.guid === m.guid) && (!f || f.test(m.namespace)) && (!r || r === m.selector || r === "**" && m.selector) && (d.splice(c--, 1), m.selector && d.delegateCount--, p.remove && p.remove.call(e, m));
                    d.length === 0 && l !== d.length && ((!p.teardown || p.teardown.call(e, f, g.handle) === !1) && v.removeEvent(e, u, g.handle), delete h[u])
                }
                v.isEmptyObject(h) && (delete g.handle, v.removeData(e, "events", !0))
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(n, r, s, o) {
                if (!s || s.nodeType !== 3 && s.nodeType !== 8) {
                    var u, a, f, l, c, h, p, d, m, g, y = n.type || n,
                        b = [];
                    if (Y.test(y + v.event.triggered)) return;
                    y.indexOf("!") >= 0 && (y = y.slice(0, -1), a = !0), y.indexOf(".") >= 0 && (b = y.split("."), y = b.shift(), b.sort());
                    if ((!s || v.event.customEvent[y]) && !v.event.global[y]) return;
                    n = typeof n == "object" ? n[v.expando] ? n : new v.Event(y, n) : new v.Event(y), n.type = y, n.isTrigger = !0, n.exclusive = a, n.namespace = b.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = y.indexOf(":") < 0 ? "on" + y : "";
                    if (!s) {
                        u = v.cache;
                        for (f in u) u[f].events && u[f].events[y] && v.event.trigger(n, r, u[f].handle.elem, !0);
                        return
                    }
                    n.result = t, n.target || (n.target = s), r = r != null ? v.makeArray(r) : [], r.unshift(n), p = v.event.special[y] || {};
                    if (p.trigger && p.trigger.apply(s, r) === !1) return;
                    m = [
                        [s, p.bindType || y]
                    ];
                    if (!o && !p.noBubble && !v.isWindow(s)) {
                        g = p.delegateType || y, l = Y.test(g + y) ? s : s.parentNode;
                        for (c = s; l; l = l.parentNode) m.push([l, g]), c = l;
                        c === (s.ownerDocument || i) && m.push([c.defaultView || c.parentWindow || e, g])
                    }
                    for (f = 0; f < m.length && !n.isPropagationStopped(); f++) l = m[f][0], n.type = m[f][1], d = (v._data(l, "events") || {})[n.type] && v._data(l, "handle"), d && d.apply(l, r), d = h && l[h], d && v.acceptData(l) && d.apply && d.apply(l, r) === !1 && n.preventDefault();
                    return n.type = y, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(s.ownerDocument, r) === !1) && (y !== "click" || !v.nodeName(s, "a")) && v.acceptData(s) && h && s[y] && (y !== "focus" && y !== "blur" || n.target.offsetWidth !== 0) && !v.isWindow(s) && (c = s[h], c && (s[h] = null), v.event.triggered = y, s[y](), v.event.triggered = t, c && (s[h] = c)), n.result
                }
                return
            },
            dispatch: function(n) {
                n = v.event.fix(n || e.event);
                var r, i, s, o, u, a, f, c, h, p, d = (v._data(this, "events") || {})[n.type] || [],
                    m = d.delegateCount,
                    g = l.call(arguments),
                    y = !n.exclusive && !n.namespace,
                    b = v.event.special[n.type] || {},
                    w = [];
                g[0] = n, n.delegateTarget = this;
                if (b.preDispatch && b.preDispatch.call(this, n) === !1) return;
                if (m && (!n.button || n.type !== "click"))
                    for (s = n.target; s != this; s = s.parentNode || this)
                        if (s.disabled !== !0 || n.type !== "click") {
                            u = {}, f = [];
                            for (r = 0; r < m; r++) c = d[r], h = c.selector, u[h] === t && (u[h] = c.needsContext ? v(h, this).index(s) >= 0 : v.find(h, this, null, [s]).length), u[h] && f.push(c);
                            f.length && w.push({
                                elem: s,
                                matches: f
                            })
                        }
                d.length > m && w.push({
                    elem: this,
                    matches: d.slice(m)
                });
                for (r = 0; r < w.length && !n.isPropagationStopped(); r++) {
                    a = w[r], n.currentTarget = a.elem;
                    for (i = 0; i < a.matches.length && !n.isImmediatePropagationStopped(); i++) {
                        c = a.matches[i];
                        if (y || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) n.data = c.data, n.handleObj = c, o = ((v.event.special[c.origType] || {}).handle || c.handler).apply(a.elem, g), o !== t && (n.result = o, o === !1 && (n.preventDefault(), n.stopPropagation()))
                    }
                }
                return b.postDispatch && b.postDispatch.call(this, n), n.result
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var r, s, o, u = n.button,
                        a = n.fromElement;
                    return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || i, s = r.documentElement, o = r.body, e.pageX = n.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[v.expando]) return e;
                var t, n, r = e,
                    s = v.event.fixHooks[e.type] || {},
                    o = s.props ? this.props.concat(s.props) : this.props;
                e = v.Event(r);
                for (t = o.length; t;) n = o[--t], e[n] = r[n];
                return e.target || (e.target = r.srcElement || i), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(e, t, n) {
                        v.isWindow(this) && (this.onbeforeunload = n)
                    },
                    teardown: function(e, t) {
                        this.onbeforeunload === t && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(e, t, n, r) {
                var i = v.extend(new v.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? v.event.trigger(i, null, t) : v.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, v.event.handle = v.event.dispatch, v.removeEvent = i.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var r = "on" + t;
            e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null), e.detachEvent(r, n))
        }, v.Event = function(e, t) {
            if (!(this instanceof v.Event)) return new v.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? tt : et) : this.type = e, t && v.extend(this, t), this.timeStamp = e && e.timeStamp || v.now(), this[v.expando] = !0
        }, v.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = tt;
                var e = this.originalEvent;
                if (!e) return;
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            },
            stopPropagation: function() {
                this.isPropagationStopped = tt;
                var e = this.originalEvent;
                if (!e) return;
                e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = tt, this.stopPropagation()
            },
            isDefaultPrevented: et,
            isPropagationStopped: et,
            isImmediatePropagationStopped: et
        }, v.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            v.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        s = e.handleObj,
                        o = s.selector;
                    if (!i || i !== r && !v.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                    return n
                }
            }
        }), v.support.submitBubbles || (v.event.special.submit = {
            setup: function() {
                if (v.nodeName(this, "form")) return !1;
                v.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target,
                        r = v.nodeName(n, "input") || v.nodeName(n, "button") ? n.form : t;
                    r && !v._data(r, "_submit_attached") && (v.event.add(r, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), v._data(r, "_submit_attached", !0))
                })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && v.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                if (v.nodeName(this, "form")) return !1;
                v.event.remove(this, "._submit")
            }
        }), v.support.changeBubbles || (v.event.special.change = {
            setup: function() {
                if ($.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") v.event.add(this, "propertychange._change", function(e) {
                        e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }), v.event.add(this, "click._change", function(e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1), v.event.simulate("change", this, e, !0)
                    });
                    return !1
                }
                v.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    $.test(t.nodeName) && !v._data(t, "_change_attached") && (v.event.add(t, "change._change", function(e) {
                        this.parentNode && !e.isSimulated && !e.isTrigger && v.event.simulate("change", this.parentNode, e, !0)
                    }), v._data(t, "_change_attached", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return v.event.remove(this, "._change"), !$.test(this.nodeName)
            }
        }), v.support.focusinBubbles || v.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0,
                r = function(e) {
                    v.event.simulate(t, e.target, v.event.fix(e), !0)
                };
            v.event.special[t] = {
                setup: function() {
                    n++ === 0 && i.addEventListener(e, r, !0)
                },
                teardown: function() {
                    --n === 0 && i.removeEventListener(e, r, !0)
                }
            }
        }), v.fn.extend({
            on: function(e, n, r, i, s) {
                var o, u;
                if (typeof e == "object") {
                    typeof n != "string" && (r = r || n, n = t);
                    for (u in e) this.on(u, n, r, e[u], s);
                    return this
                }
                r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
                if (i === !1) i = et;
                else if (!i) return this;
                return s === 1 && (o = i, i = function(e) {
                    return v().off(e), o.apply(this, arguments)
                }, i.guid = o.guid || (o.guid = v.guid++)), this.each(function() {
                    v.event.add(this, e, i, r, n)
                })
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function(e, n, r) {
                var i, s;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, v(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if (typeof e == "object") {
                    for (s in e) this.off(s, n, e[s]);
                    return this
                }
                if (n === !1 || typeof n == "function") r = n, n = t;
                return r === !1 && (r = et), this.each(function() {
                    v.event.remove(this, e, r, n)
                })
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            live: function(e, t, n) {
                return v(this.context).on(e, this.selector, t, n), this
            },
            die: function(e, t) {
                return v(this.context).off(e, this.selector || "**", t), this
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            trigger: function(e, t) {
                return this.each(function() {
                    v.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                if (this[0]) return v.event.trigger(e, t, this[0], !0)
            },
            toggle: function(e) {
                var t = arguments,
                    n = e.guid || v.guid++,
                    r = 0,
                    i = function(n) {
                        var i = (v._data(this, "lastToggle" + e.guid) || 0) % r;
                        return v._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
                    };
                i.guid = n;
                while (r < t.length) t[r++].guid = n;
                return this.click(i)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            v.fn[t] = function(e, n) {
                return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }, Q.test(t) && (v.event.fixHooks[t] = v.event.keyHooks), G.test(t) && (v.event.fixHooks[t] = v.event.mouseHooks)
        }),
        function(e, t) {
            function nt(e, t, n, r) {
                n = n || [], t = t || g;
                var i, s, a, f, l = t.nodeType;
                if (!e || typeof e != "string") return n;
                if (l !== 1 && l !== 9) return [];
                a = o(t);
                if (!a && !r)
                    if (i = R.exec(e))
                        if (f = i[1]) {
                            if (l === 9) {
                                s = t.getElementById(f);
                                if (!s || !s.parentNode) return n;
                                if (s.id === f) return n.push(s), n
                            } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(f)) && u(t, s) && s.id === f) return n.push(s), n
                        } else {
                            if (i[2]) return S.apply(n, x.call(t.getElementsByTagName(e), 0)), n;
                            if ((f = i[3]) && Z && t.getElementsByClassName) return S.apply(n, x.call(t.getElementsByClassName(f), 0)), n
                        }
                return vt(e.replace(j, "$1"), t, n, r, a)
            }

            function rt(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return n === "input" && t.type === e
                }
            }

            function it(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return (n === "input" || n === "button") && t.type === e
                }
            }

            function st(e) {
                return N(function(t) {
                    return t = +t, N(function(n, r) {
                        var i, s = e([], n.length, t),
                            o = s.length;
                        while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function ot(e, t, n) {
                if (e === t) return n;
                var r = e.nextSibling;
                while (r) {
                    if (r === t) return -1;
                    r = r.nextSibling
                }
                return 1
            }

            function ut(e, t) {
                var n, r, s, o, u, a, f, l = L[d][e + " "];
                if (l) return t ? 0 : l.slice(0);
                u = e, a = [], f = i.preFilter;
                while (u) {
                    if (!n || (r = F.exec(u))) r && (u = u.slice(r[0].length) || u), a.push(s = []);
                    n = !1;
                    if (r = I.exec(u)) s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = r[0].replace(j, " ");
                    for (o in i.filter)(r = J[o].exec(u)) && (!f[o] || (r = f[o](r))) && (s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = o, n.matches = r);
                    if (!n) break
                }
                return t ? u.length : u ? nt.error(e) : L(e, a).slice(0)
            }

            function at(e, t, r) {
                var i = t.dir,
                    s = r && t.dir === "parentNode",
                    o = w++;
                return t.first ? function(t, n, r) {
                    while (t = t[i])
                        if (s || t.nodeType === 1) return e(t, n, r)
                } : function(t, r, u) {
                    if (!u) {
                        var a, f = b + " " + o + " ",
                            l = f + n;
                        while (t = t[i])
                            if (s || t.nodeType === 1) {
                                if ((a = t[d]) === l) return t.sizset;
                                if (typeof a == "string" && a.indexOf(f) === 0) {
                                    if (t.sizset) return t
                                } else {
                                    t[d] = l;
                                    if (e(t, r, u)) return t.sizset = !0, t;
                                    t.sizset = !1
                                }
                            }
                    } else
                        while (t = t[i])
                            if (s || t.nodeType === 1)
                                if (e(t, r, u)) return t
                }
            }

            function ft(e) {
                return e.length > 1 ? function(t, n, r) {
                    var i = e.length;
                    while (i--)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function lt(e, t, n, r, i) {
                var s, o = [],
                    u = 0,
                    a = e.length,
                    f = t != null;
                for (; u < a; u++)
                    if (s = e[u])
                        if (!n || n(s, r, i)) o.push(s), f && t.push(u);
                return o
            }

            function ct(e, t, n, r, i, s) {
                return r && !r[d] && (r = ct(r)), i && !i[d] && (i = ct(i, s)), N(function(s, o, u, a) {
                    var f, l, c, h = [],
                        p = [],
                        d = o.length,
                        v = s || dt(t || "*", u.nodeType ? [u] : u, []),
                        m = e && (s || !t) ? lt(v, h, e, u, a) : v,
                        g = n ? i || (s ? e : d || r) ? [] : o : m;
                    n && n(m, g, u, a);
                    if (r) {
                        f = lt(g, p), r(f, [], u, a), l = f.length;
                        while (l--)
                            if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
                    }
                    if (s) {
                        if (i || e) {
                            if (i) {
                                f = [], l = g.length;
                                while (l--)(c = g[l]) && f.push(m[l] = c);
                                i(null, g = [], f, a)
                            }
                            l = g.length;
                            while (l--)(c = g[l]) && (f = i ? T.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                        }
                    } else g = lt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : S.apply(o, g)
                })
            }

            function ht(e) {
                var t, n, r, s = e.length,
                    o = i.relative[e[0].type],
                    u = o || i.relative[" "],
                    a = o ? 1 : 0,
                    f = at(function(e) {
                        return e === t
                    }, u, !0),
                    l = at(function(e) {
                        return T.call(t, e) > -1
                    }, u, !0),
                    h = [function(e, n, r) {
                        return !o && (r || n !== c) || ((t = n).nodeType ? f(e, n, r) : l(e, n, r))
                    }];
                for (; a < s; a++)
                    if (n = i.relative[e[a].type]) h = [at(ft(h), n)];
                    else {
                        n = i.filter[e[a].type].apply(null, e[a].matches);
                        if (n[d]) {
                            r = ++a;
                            for (; r < s; r++)
                                if (i.relative[e[r].type]) break;
                            return ct(a > 1 && ft(h), a > 1 && e.slice(0, a - 1).join("").replace(j, "$1"), n, a < r && ht(e.slice(a, r)), r < s && ht(e = e.slice(r)), r < s && e.join(""))
                        }
                        h.push(n)
                    }
                return ft(h)
            }

            function pt(e, t) {
                var r = t.length > 0,
                    s = e.length > 0,
                    o = function(u, a, f, l, h) {
                        var p, d, v, m = [],
                            y = 0,
                            w = "0",
                            x = u && [],
                            T = h != null,
                            N = c,
                            C = u || s && i.find.TAG("*", h && a.parentNode || a),
                            k = b += N == null ? 1 : Math.E;
                        T && (c = a !== g && a, n = o.el);
                        for (;
                            (p = C[w]) != null; w++) {
                            if (s && p) {
                                for (d = 0; v = e[d]; d++)
                                    if (v(p, a, f)) {
                                        l.push(p);
                                        break
                                    }
                                T && (b = k, n = ++o.el)
                            }
                            r && ((p = !v && p) && y--, u && x.push(p))
                        }
                        y += w;
                        if (r && w !== y) {
                            for (d = 0; v = t[d]; d++) v(x, m, a, f);
                            if (u) {
                                if (y > 0)
                                    while (w--) !x[w] && !m[w] && (m[w] = E.call(l));
                                m = lt(m)
                            }
                            S.apply(l, m), T && !u && m.length > 0 && y + t.length > 1 && nt.uniqueSort(l)
                        }
                        return T && (b = k, c = N), x
                    };
                return o.el = 0, r ? N(o) : o
            }

            function dt(e, t, n) {
                var r = 0,
                    i = t.length;
                for (; r < i; r++) nt(e, t[r], n);
                return n
            }

            function vt(e, t, n, r, s) {
                var o, u, f, l, c, h = ut(e),
                    p = h.length;
                if (!r && h.length === 1) {
                    u = h[0] = h[0].slice(0);
                    if (u.length > 2 && (f = u[0]).type === "ID" && t.nodeType === 9 && !s && i.relative[u[1].type]) {
                        t = i.find.ID(f.matches[0].replace($, ""), t, s)[0];
                        if (!t) return n;
                        e = e.slice(u.shift().length)
                    }
                    for (o = J.POS.test(e) ? -1 : u.length - 1; o >= 0; o--) {
                        f = u[o];
                        if (i.relative[l = f.type]) break;
                        if (c = i.find[l])
                            if (r = c(f.matches[0].replace($, ""), z.test(u[0].type) && t.parentNode || t, s)) {
                                u.splice(o, 1), e = r.length && u.join("");
                                if (!e) return S.apply(n, x.call(r, 0)), n;
                                break
                            }
                    }
                }
                return a(e, h)(r, t, s, n, z.test(e)), n
            }

            function mt() {}
            var n, r, i, s, o, u, a, f, l, c, h = !0,
                p = "undefined",
                d = ("sizcache" + Math.random()).replace(".", ""),
                m = String,
                g = e.document,
                y = g.documentElement,
                b = 0,
                w = 0,
                E = [].pop,
                S = [].push,
                x = [].slice,
                T = [].indexOf || function(e) {
                    var t = 0,
                        n = this.length;
                    for (; t < n; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                N = function(e, t) {
                    return e[d] = t == null || t, e
                },
                C = function() {
                    var e = {},
                        t = [];
                    return N(function(n, r) {
                        return t.push(n) > i.cacheLength && delete e[t.shift()], e[n + " "] = r
                    }, e)
                },
                k = C(),
                L = C(),
                A = C(),
                O = "[\\x20\\t\\r\\n\\f]",
                M = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                _ = M.replace("w", "w#"),
                D = "([*^$|!~]?=)",
                P = "\\[" + O + "*(" + M + ")" + O + "*(?:" + D + O + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + _ + ")|)|)" + O + "*\\]",
                H = ":(" + M + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + P + ")|[^:]|\\\\.)*|.*))\\)|)",
                B = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)",
                j = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
                F = new RegExp("^" + O + "*," + O + "*"),
                I = new RegExp("^" + O + "*([\\x20\\t\\r\\n\\f>+~])" + O + "*"),
                q = new RegExp(H),
                R = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                U = /^:not/,
                z = /[\x20\t\r\n\f]*[+~]/,
                W = /:not\($/,
                X = /h\d/i,
                V = /input|select|textarea|button/i,
                $ = /\\(?!\\)/g,
                J = {
                    ID: new RegExp("^#(" + M + ")"),
                    CLASS: new RegExp("^\\.(" + M + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + M + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + P),
                    PSEUDO: new RegExp("^" + H),
                    POS: new RegExp(B, "i"),
                    CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                    needsContext: new RegExp("^" + O + "*[>+~]|" + B, "i")
                },
                K = function(e) {
                    var t = g.createElement("div");
                    try {
                        return e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t = null
                    }
                },
                Q = K(function(e) {
                    return e.appendChild(g.createComment("")), !e.getElementsByTagName("*").length
                }),
                G = K(function(e) {
                    return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== p && e.firstChild.getAttribute("href") === "#"
                }),
                Y = K(function(e) {
                    e.innerHTML = "<select></select>";
                    var t = typeof e.lastChild.getAttribute("multiple");
                    return t !== "boolean" && t !== "string"
                }),
                Z = K(function(e) {
                    return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2)
                }),
                et = K(function(e) {
                    e.id = d + 0, e.innerHTML = "<a name='" + d + "'></a><div name='" + d + "'></div>", y.insertBefore(e, y.firstChild);
                    var t = g.getElementsByName && g.getElementsByName(d).length === 2 + g.getElementsByName(d + 0).length;
                    return r = !g.getElementById(d), y.removeChild(e), t
                });
            try {
                x.call(y.childNodes, 0)[0].nodeType
            } catch (tt) {
                x = function(e) {
                    var t, n = [];
                    for (; t = this[e]; e++) n.push(t);
                    return n
                }
            }
            nt.matches = function(e, t) {
                return nt(e, null, null, t)
            }, nt.matchesSelector = function(e, t) {
                return nt(t, null, null, [e]).length > 0
            }, s = nt.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (i === 1 || i === 9 || i === 11) {
                        if (typeof e.textContent == "string") return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                    } else if (i === 3 || i === 4) return e.nodeValue
                } else
                    for (; t = e[r]; r++) n += s(t);
                return n
            }, o = nt.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? t.nodeName !== "HTML" : !1
            }, u = nt.contains = y.contains ? function(e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !!(r && r.nodeType === 1 && n.contains && n.contains(r))
            } : y.compareDocumentPosition ? function(e, t) {
                return t && !!(e.compareDocumentPosition(t) & 16)
            } : function(e, t) {
                while (t = t.parentNode)
                    if (t === e) return !0;
                return !1
            }, nt.attr = function(e, t) {
                var n, r = o(e);
                return r || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : r || Y ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? typeof e[t] == "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null)
            }, i = nt.selectors = {
                cacheLength: 50,
                createPseudo: N,
                match: J,
                attrHandle: G ? {} : {
                    href: function(e) {
                        return e.getAttribute("href", 2)
                    },
                    type: function(e) {
                        return e.getAttribute("type")
                    }
                },
                find: {
                    ID: r ? function(e, t, n) {
                        if (typeof t.getElementById !== p && !n) {
                            var r = t.getElementById(e);
                            return r && r.parentNode ? [r] : []
                        }
                    } : function(e, n, r) {
                        if (typeof n.getElementById !== p && !r) {
                            var i = n.getElementById(e);
                            return i ? i.id === e || typeof i.getAttributeNode !== p && i.getAttributeNode("id").value === e ? [i] : t : []
                        }
                    },
                    TAG: Q ? function(e, t) {
                        if (typeof t.getElementsByTagName !== p) return t.getElementsByTagName(e)
                    } : function(e, t) {
                        var n = t.getElementsByTagName(e);
                        if (e === "*") {
                            var r, i = [],
                                s = 0;
                            for (; r = n[s]; s++) r.nodeType === 1 && i.push(r);
                            return i
                        }
                        return n
                    },
                    NAME: et && function(e, t) {
                        if (typeof t.getElementsByName !== p) return t.getElementsByName(name)
                    },
                    CLASS: Z && function(e, t, n) {
                        if (typeof t.getElementsByClassName !== p && !n) return t.getElementsByClassName(e)
                    }
                },
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace($, ""), e[3] = (e[4] || e[5] || "").replace($, ""), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), e[1] === "nth" ? (e[2] || nt.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd")), e[4] = +(e[6] + e[7] || e[2] === "odd")) : e[2] && nt.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n;
                        if (J.CHILD.test(e[0])) return null;
                        if (e[3]) e[2] = e[3];
                        else if (t = e[4]) q.test(t) && (n = ut(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t;
                        return e.slice(0, 3)
                    }
                },
                filter: {
                    ID: r ? function(e) {
                        return e = e.replace($, ""),
                            function(t) {
                                return t.getAttribute("id") === e
                            }
                    } : function(e) {
                        return e = e.replace($, ""),
                            function(t) {
                                var n = typeof t.getAttributeNode !== p && t.getAttributeNode("id");
                                return n && n.value === e
                            }
                    },
                    TAG: function(e) {
                        return e === "*" ? function() {
                            return !0
                        } : (e = e.replace($, "").toLowerCase(), function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        })
                    },
                    CLASS: function(e) {
                        var t = k[d][e + " "];
                        return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && k(e, function(e) {
                            return t.test(e.className || typeof e.getAttribute !== p && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r, i) {
                            var s = nt.attr(r, e);
                            return s == null ? t === "!=" : t ? (s += "", t === "=" ? s === n : t === "!=" ? s !== n : t === "^=" ? n && s.indexOf(n) === 0 : t === "*=" ? n && s.indexOf(n) > -1 : t === "$=" ? n && s.substr(s.length - n.length) === n : t === "~=" ? (" " + s + " ").indexOf(n) > -1 : t === "|=" ? s === n || s.substr(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r) {
                        return e === "nth" ? function(e) {
                            var t, i, s = e.parentNode;
                            if (n === 1 && r === 0) return !0;
                            if (s) {
                                i = 0;
                                for (t = s.firstChild; t; t = t.nextSibling)
                                    if (t.nodeType === 1) {
                                        i++;
                                        if (e === t) break
                                    }
                            }
                            return i -= r, i === n || i % n === 0 && i / n >= 0
                        } : function(t) {
                            var n = t;
                            switch (e) {
                                case "only":
                                case "first":
                                    while (n = n.previousSibling)
                                        if (n.nodeType === 1) return !1;
                                    if (e === "first") return !0;
                                    n = t;
                                case "last":
                                    while (n = n.nextSibling)
                                        if (n.nodeType === 1) return !1;
                                    return !0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || nt.error("unsupported pseudo: " + e);
                        return r[d] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? N(function(e, n) {
                            var i, s = r(e, t),
                                o = s.length;
                            while (o--) i = T.call(e, s[o]), e[i] = !(n[i] = s[o])
                        }) : function(e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: N(function(e) {
                        var t = [],
                            n = [],
                            r = a(e.replace(j, "$1"));
                        return r[d] ? N(function(e, t, n, i) {
                            var s, o = r(e, null, i, []),
                                u = e.length;
                            while (u--)
                                if (s = o[u]) e[u] = !(t[u] = s)
                        }) : function(e, i, s) {
                            return t[0] = e, r(t, null, s, n), !n.pop()
                        }
                    }),
                    has: N(function(e) {
                        return function(t) {
                            return nt(e, t).length > 0
                        }
                    }),
                    contains: N(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                        }
                    }),
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && !!e.checked || t === "option" && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    parent: function(e) {
                        return !i.pseudos.empty(e)
                    },
                    empty: function(e) {
                        var t;
                        e = e.firstChild;
                        while (e) {
                            if (e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4) return !1;
                            e = e.nextSibling
                        }
                        return !0
                    },
                    header: function(e) {
                        return X.test(e.nodeName)
                    },
                    text: function(e) {
                        var t, n;
                        return e.nodeName.toLowerCase() === "input" && (t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t)
                    },
                    radio: rt("radio"),
                    checkbox: rt("checkbox"),
                    file: rt("file"),
                    password: rt("password"),
                    image: rt("image"),
                    submit: it("submit"),
                    reset: it("reset"),
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && e.type === "button" || t === "button"
                    },
                    input: function(e) {
                        return V.test(e.nodeName)
                    },
                    focus: function(e) {
                        var t = e.ownerDocument;
                        return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    active: function(e) {
                        return e === e.ownerDocument.activeElement
                    },
                    first: st(function() {
                        return [0]
                    }),
                    last: st(function(e, t) {
                        return [t - 1]
                    }),
                    eq: st(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: st(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: st(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: st(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: st(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }, f = y.compareDocumentPosition ? function(e, t) {
                return e === t ? (l = !0, 0) : (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1
            } : function(e, t) {
                if (e === t) return l = !0, 0;
                if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                var n, r, i = [],
                    s = [],
                    o = e.parentNode,
                    u = t.parentNode,
                    a = o;
                if (o === u) return ot(e, t);
                if (!o) return -1;
                if (!u) return 1;
                while (a) i.unshift(a), a = a.parentNode;
                a = u;
                while (a) s.unshift(a), a = a.parentNode;
                n = i.length, r = s.length;
                for (var f = 0; f < n && f < r; f++)
                    if (i[f] !== s[f]) return ot(i[f], s[f]);
                return f === n ? ot(e, s[f], -1) : ot(i[f], t, 1)
            }, [0, 0].sort(f), h = !l, nt.uniqueSort = function(e) {
                var t, n = [],
                    r = 1,
                    i = 0;
                l = h, e.sort(f);
                if (l) {
                    for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                    while (i--) e.splice(n[i], 1)
                }
                return e
            }, nt.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, a = nt.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    s = A[d][e + " "];
                if (!s) {
                    t || (t = ut(e)), n = t.length;
                    while (n--) s = ht(t[n]), s[d] ? r.push(s) : i.push(s);
                    s = A(e, pt(i, r))
                }
                return s
            }, g.querySelectorAll && function() {
                var e, t = vt,
                    n = /'|\\/g,
                    r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    i = [":focus"],
                    s = [":active"],
                    u = y.matchesSelector || y.mozMatchesSelector || y.webkitMatchesSelector || y.oMatchesSelector || y.msMatchesSelector;
                K(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || i.push("\\[" + O + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || i.push(":checked")
                }), K(function(e) {
                    e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && i.push("[*^$]=" + O + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || i.push(":enabled", ":disabled")
                }), i = new RegExp(i.join("|")), vt = function(e, r, s, o, u) {
                    if (!o && !u && !i.test(e)) {
                        var a, f, l = !0,
                            c = d,
                            h = r,
                            p = r.nodeType === 9 && e;
                        if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
                            a = ut(e), (l = r.getAttribute("id")) ? c = l.replace(n, "\\$&") : r.setAttribute("id", c), c = "[id='" + c + "'] ", f = a.length;
                            while (f--) a[f] = c + a[f].join("");
                            h = z.test(e) && r.parentNode || r, p = a.join(",")
                        }
                        if (p) try {
                            return S.apply(s, x.call(h.querySelectorAll(p), 0)), s
                        } catch (v) {} finally {
                            l || r.removeAttribute("id")
                        }
                    }
                    return t(e, r, s, o, u)
                }, u && (K(function(t) {
                    e = u.call(t, "div");
                    try {
                        u.call(t, "[test!='']:sizzle"), s.push("!=", H)
                    } catch (n) {}
                }), s = new RegExp(s.join("|")), nt.matchesSelector = function(t, n) {
                    n = n.replace(r, "='$1']");
                    if (!o(t) && !s.test(n) && !i.test(n)) try {
                        var a = u.call(t, n);
                        if (a || e || t.document && t.document.nodeType !== 11) return a
                    } catch (f) {}
                    return nt(n, null, null, [t]).length > 0
                })
            }(), i.pseudos.nth = i.pseudos.eq, i.filters = mt.prototype = i.pseudos, i.setFilters = new mt, nt.attr = v.attr, v.find = nt, v.expr = nt.selectors, v.expr[":"] = v.expr.pseudos, v.unique = nt.uniqueSort, v.text = nt.getText, v.isXMLDoc = nt.isXML, v.contains = nt.contains
        }(e);
    var nt = /Until$/,
        rt = /^(?:parents|prev(?:Until|All))/,
        it = /^.[^:#\[\.,]*$/,
        st = v.expr.match.needsContext,
        ot = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    v.fn.extend({
        find: function(e) {
            var t, n, r, i, s, o, u = this;
            if (typeof e != "string") return v(e).filter(function() {
                for (t = 0, n = u.length; t < n; t++)
                    if (v.contains(u[t], this)) return !0
            });
            o = this.pushStack("", "find", e);
            for (t = 0, n = this.length; t < n; t++) {
                r = o.length, v.find(e, this[t], o);
                if (t > 0)
                    for (i = r; i < o.length; i++)
                        for (s = 0; s < r; s++)
                            if (o[s] === o[i]) {
                                o.splice(i--, 1);
                                break
                            }
            }
            return o
        },
        has: function(e) {
            var t, n = v(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++)
                    if (v.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(ft(this, e, !1), "not", e)
        },
        filter: function(e) {
            return this.pushStack(ft(this, e, !0), "filter", e)
        },
        is: function(e) {
            return !!e && (typeof e == "string" ? st.test(e) ? v(e, this.context).index(this[0]) >= 0 : v.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                s = [],
                o = st.test(e) || typeof e != "string" ? v(e, t || this.context) : 0;
            for (; r < i; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                    if (o ? o.index(n) > -1 : v.find.matchesSelector(n, e)) {
                        s.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return s = s.length > 1 ? v.unique(s) : s, this.pushStack(s, "closest", e)
        },
        index: function(e) {
            return e ? typeof e == "string" ? v.inArray(this[0], v(e)) : v.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(e, t) {
            var n = typeof e == "string" ? v(e, t) : v.makeArray(e && e.nodeType ? [e] : e),
                r = v.merge(this.get(), n);
            return this.pushStack(ut(n[0]) || ut(r[0]) ? r : v.unique(r))
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }), v.fn.andSelf = v.fn.addBack, v.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(e) {
            return v.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return v.dir(e, "parentNode", n)
        },
        next: function(e) {
            return at(e, "nextSibling")
        },
        prev: function(e) {
            return at(e, "previousSibling")
        },
        nextAll: function(e) {
            return v.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return v.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return v.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return v.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return v.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return v.sibling(e.firstChild)
        },
        contents: function(e) {
            return v.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : v.merge([], e.childNodes)
        }
    }, function(e, t) {
        v.fn[e] = function(n, r) {
            var i = v.map(this, t, n);
            return nt.test(e) || (r = n), r && typeof r == "string" && (i = v.filter(r, i)), i = this.length > 1 && !ot[e] ? v.unique(i) : i, this.length > 1 && rt.test(e) && (i = i.reverse()), this.pushStack(i, e, l.call(arguments).join(","))
        }
    }), v.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), t.length === 1 ? v.find.matchesSelector(t[0], e) ? [t[0]] : [] : v.find.matches(e, t)
        },
        dir: function(e, n, r) {
            var i = [],
                s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !v(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var ct = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ht = / jQuery\d+="(?:null|\d+)"/g,
        pt = /^\s+/,
        dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        vt = /<([\w:]+)/,
        mt = /<tbody/i,
        gt = /<|&#?\w+;/,
        yt = /<(?:script|style|link)/i,
        bt = /<(?:script|object|embed|option|style)/i,
        wt = new RegExp("<(?:" + ct + ")[\\s/>]", "i"),
        Et = /^(?:checkbox|radio)$/,
        St = /checked\s*(?:[^=]|=\s*.checked.)/i,
        xt = /\/(java|ecma)script/i,
        Tt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        Nt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        Ct = lt(i),
        kt = Ct.appendChild(i.createElement("div"));
    Nt.optgroup = Nt.option, Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead, Nt.th = Nt.td, v.support.htmlSerialize || (Nt._default = [1, "X<div>", "</div>"]), v.fn.extend({
            text: function(e) {
                return v.access(this, function(e) {
                    return e === t ? v.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i).createTextNode(e))
                }, null, e, arguments.length)
            },
            wrapAll: function(e) {
                if (v.isFunction(e)) return this.each(function(t) {
                    v(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = v(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        var e = this;
                        while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return v.isFunction(e) ? this.each(function(t) {
                    v(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = v(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = v.isFunction(e);
                return this.each(function(n) {
                    v(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    v.nodeName(this, "body") || v(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(e) {
                    (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(e)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(e) {
                    (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(e, this.firstChild)
                })
            },
            before: function() {
                if (!ut(this[0])) return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this)
                });
                if (arguments.length) {
                    var e = v.clean(arguments);
                    return this.pushStack(v.merge(e, this), "before", this.selector)
                }
            },
            after: function() {
                if (!ut(this[0])) return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                });
                if (arguments.length) {
                    var e = v.clean(arguments);
                    return this.pushStack(v.merge(this, e), "after", this.selector)
                }
            },
            remove: function(e, t) {
                var n, r = 0;
                for (;
                    (n = this[r]) != null; r++)
                    if (!e || v.filter(e, [n]).length) !t && n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), v.cleanData([n])), n.parentNode && n.parentNode.removeChild(n);
                return this
            },
            empty: function() {
                var e, t = 0;
                for (;
                    (e = this[t]) != null; t++) {
                    e.nodeType === 1 && v.cleanData(e.getElementsByTagName("*"));
                    while (e.firstChild) e.removeChild(e.firstChild)
                }
                return this
            },
            clone: function(e, t) {
                return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
                    return v.clone(this, e, t)
                })
            },
            html: function(e) {
                return v.access(this, function(e) {
                    var n = this[0] || {},
                        r = 0,
                        i = this.length;
                    if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(ht, "") : t;
                    if (typeof e == "string" && !yt.test(e) && (v.support.htmlSerialize || !wt.test(e)) && (v.support.leadingWhitespace || !pt.test(e)) && !Nt[(vt.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(dt, "<$1></$2>");
                        try {
                            for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                            n = 0
                        } catch (s) {}
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function(e) {
                return ut(this[0]) ? this.length ? this.pushStack(v(v.isFunction(e) ? e() : e), "replaceWith", e) : this : v.isFunction(e) ? this.each(function(t) {
                    var n = v(this),
                        r = n.html();
                    n.replaceWith(e.call(this, t, r))
                }) : (typeof e != "string" && (e = v(e).detach()), this.each(function() {
                    var t = this.nextSibling,
                        n = this.parentNode;
                    v(this).remove(), t ? v(t).before(e) : v(n).append(e)
                }))
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, n, r) {
                e = [].concat.apply([], e);
                var i, s, o, u, a = 0,
                    f = e[0],
                    l = [],
                    c = this.length;
                if (!v.support.checkClone && c > 1 && typeof f == "string" && St.test(f)) return this.each(function() {
                    v(this).domManip(e, n, r)
                });
                if (v.isFunction(f)) return this.each(function(i) {
                    var s = v(this);
                    e[0] = f.call(this, i, n ? s.html() : t), s.domManip(e, n, r)
                });
                if (this[0]) {
                    i = v.buildFragment(e, this, l), o = i.fragment, s = o.firstChild, o.childNodes.length === 1 && (o = s);
                    if (s) {
                        n = n && v.nodeName(s, "tr");
                        for (u = i.cacheable || c - 1; a < c; a++) r.call(n && v.nodeName(this[a], "table") ? Lt(this[a], "tbody") : this[a], a === u ? o : v.clone(o, !0, !0))
                    }
                    o = s = null, l.length && v.each(l, function(e, t) {
                        t.src ? v.ajax ? v.ajax({
                            url: t.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            "throws": !0
                        }) : v.error("no ajax") : v.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Tt, "")), t.parentNode && t.parentNode.removeChild(t)
                    })
                }
                return this
            }
        }), v.buildFragment = function(e, n, r) {
            var s, o, u, a = e[0];
            return n = n || i, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, e.length === 1 && typeof a == "string" && a.length < 512 && n === i && a.charAt(0) === "<" && !bt.test(a) && (v.support.checkClone || !St.test(a)) && (v.support.html5Clone || !wt.test(a)) && (o = !0, s = v.fragments[a], u = s !== t), s || (s = n.createDocumentFragment(), v.clean(e, n, s, r), o && (v.fragments[a] = u && s)), {
                fragment: s,
                cacheable: o
            }
        }, v.fragments = {}, v.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            v.fn[e] = function(n) {
                var r, i = 0,
                    s = [],
                    o = v(n),
                    u = o.length,
                    a = this.length === 1 && this[0].parentNode;
                if ((a == null || a && a.nodeType === 11 && a.childNodes.length === 1) && u === 1) return o[t](this[0]), this;
                for (; i < u; i++) r = (i > 0 ? this.clone(!0) : this).get(), v(o[i])[t](r), s = s.concat(r);
                return this.pushStack(s, e, o.selector)
            }
        }), v.extend({
            clone: function(e, t, n) {
                var r, i, s, o;
                v.support.html5Clone || v.isXMLDoc(e) || !wt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (kt.innerHTML = e.outerHTML, kt.removeChild(o = kt.firstChild));
                if ((!v.support.noCloneEvent || !v.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !v.isXMLDoc(e)) {
                    Ot(e, o), r = Mt(e), i = Mt(o);
                    for (s = 0; r[s]; ++s) i[s] && Ot(r[s], i[s])
                }
                if (t) {
                    At(e, o);
                    if (n) {
                        r = Mt(e), i = Mt(o);
                        for (s = 0; r[s]; ++s) At(r[s], i[s])
                    }
                }
                return r = i = null, o
            },
            clean: function(e, t, n, r) {
                var s, o, u, a, f, l, c, h, p, d, m, g, y = t === i && Ct,
                    b = [];
                if (!t || typeof t.createDocumentFragment == "undefined") t = i;
                for (s = 0;
                    (u = e[s]) != null; s++) {
                    typeof u == "number" && (u += "");
                    if (!u) continue;
                    if (typeof u == "string")
                        if (!gt.test(u)) u = t.createTextNode(u);
                        else {
                            y = y || lt(t), c = t.createElement("div"), y.appendChild(c), u = u.replace(dt, "<$1></$2>"), a = (vt.exec(u) || ["", ""])[1].toLowerCase(), f = Nt[a] || Nt._default, l = f[0], c.innerHTML = f[1] + u + f[2];
                            while (l--) c = c.lastChild;
                            if (!v.support.tbody) {
                                h = mt.test(u), p = a === "table" && !h ? c.firstChild && c.firstChild.childNodes : f[1] === "<table>" && !h ? c.childNodes : [];
                                for (o = p.length - 1; o >= 0; --o) v.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o])
                            }!v.support.leadingWhitespace && pt.test(u) && c.insertBefore(t.createTextNode(pt.exec(u)[0]), c.firstChild), u = c.childNodes, c.parentNode.removeChild(c)
                        }
                    u.nodeType ? b.push(u) : v.merge(b, u)
                }
                c && (u = c = y = null);
                if (!v.support.appendChecked)
                    for (s = 0;
                        (u = b[s]) != null; s++) v.nodeName(u, "input") ? _t(u) : typeof u.getElementsByTagName != "undefined" && v.grep(u.getElementsByTagName("input"), _t);
                if (n) {
                    m = function(e) {
                        if (!e.type || xt.test(e.type)) return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e)
                    };
                    for (s = 0;
                        (u = b[s]) != null; s++)
                        if (!v.nodeName(u, "script") || !m(u)) n.appendChild(u), typeof u.getElementsByTagName != "undefined" && (g = v.grep(v.merge([], u.getElementsByTagName("script")), m), b.splice.apply(b, [s + 1, 0].concat(g)), s += g.length)
                }
                return b
            },
            cleanData: function(e, t) {
                var n, r, i, s, o = 0,
                    u = v.expando,
                    a = v.cache,
                    f = v.support.deleteExpando,
                    l = v.event.special;
                for (;
                    (i = e[o]) != null; o++)
                    if (t || v.acceptData(i)) {
                        r = i[u], n = r && a[r];
                        if (n) {
                            if (n.events)
                                for (s in n.events) l[s] ? v.event.remove(i, s) : v.removeEvent(i, s, n.handle);
                            a[r] && (delete a[r], f ? delete i[u] : i.removeAttribute ? i.removeAttribute(u) : i[u] = null, v.deletedIds.push(r))
                        }
                    }
            }
        }),
        function() {
            var e, t;
            v.uaMatch = function(e) {
                e = e.toLowerCase();
                var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                return {
                    browser: t[1] || "",
                    version: t[2] || "0"
                }
            }, e = v.uaMatch(o.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), v.browser = t, v.sub = function() {
                function e(t, n) {
                    return new e.fn.init(t, n)
                }
                v.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(r, i) {
                    return i && i instanceof v && !(i instanceof e) && (i = e(i)), v.fn.init.call(this, r, i, t)
                }, e.fn.init.prototype = e.fn;
                var t = e(i);
                return e
            }
        }();
    var Dt, Pt, Ht, Bt = /alpha\([^)]*\)/i,
        jt = /opacity=([^)]*)/,
        Ft = /^(top|right|bottom|left)$/,
        It = /^(none|table(?!-c[ea]).+)/,
        qt = /^margin/,
        Rt = new RegExp("^(" + m + ")(.*)$", "i"),
        Ut = new RegExp("^(" + m + ")(?!px)[a-z%]+$", "i"),
        zt = new RegExp("^([-+])=(" + m + ")", "i"),
        Wt = {
            BODY: "block"
        },
        Xt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Vt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        $t = ["Top", "Right", "Bottom", "Left"],
        Jt = ["Webkit", "O", "Moz", "ms"],
        Kt = v.fn.toggle;
    v.fn.extend({
        css: function(e, n) {
            return v.access(this, function(e, n, r) {
                return r !== t ? v.style(e, n, r) : v.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return Yt(this, !0)
        },
        hide: function() {
            return Yt(this)
        },
        toggle: function(e, t) {
            var n = typeof e == "boolean";
            return v.isFunction(e) && v.isFunction(t) ? Kt.apply(this, arguments) : this.each(function() {
                (n ? e : Gt(this)) ? v(this).show(): v(this).hide()
            })
        }
    }), v.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Dt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": v.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var s, o, u, a = v.camelCase(n),
                f = e.style;
            n = v.cssProps[a] || (v.cssProps[a] = Qt(f, a)), u = v.cssHooks[n] || v.cssHooks[a];
            if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
            o = typeof r, o === "string" && (s = zt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(v.css(e, n)), o = "number");
            if (r == null || o === "number" && isNaN(r)) return;
            o === "number" && !v.cssNumber[a] && (r += "px");
            if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
                f[n] = r
            } catch (l) {}
        },
        css: function(e, n, r, i) {
            var s, o, u, a = v.camelCase(n);
            return n = v.cssProps[a] || (v.cssProps[a] = Qt(e.style, a)), u = v.cssHooks[n] || v.cssHooks[a], u && "get" in u && (s = u.get(e, !0, i)), s === t && (s = Dt(e, n)), s === "normal" && n in Vt && (s = Vt[n]), r || i !== t ? (o = parseFloat(s), r || v.isNumeric(o) ? o || 0 : s) : s
        },
        swap: function(e, t, n) {
            var r, i, s = {};
            for (i in t) s[i] = e.style[i], e.style[i] = t[i];
            r = n.call(e);
            for (i in t) e.style[i] = s[i];
            return r
        }
    }), e.getComputedStyle ? Dt = function(t, n) {
        var r, i, s, o, u = e.getComputedStyle(t, null),
            a = t.style;
        return u && (r = u.getPropertyValue(n) || u[n], r === "" && !v.contains(t.ownerDocument, t) && (r = v.style(t, n)), Ut.test(r) && qt.test(n) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = u.width, a.width = i, a.minWidth = s, a.maxWidth = o)), r
    } : i.documentElement.currentStyle && (Dt = function(e, t) {
        var n, r, i = e.currentStyle && e.currentStyle[t],
            s = e.style;
        return i == null && s && s[t] && (i = s[t]), Ut.test(i) && !Ft.test(t) && (n = s.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), s.left = t === "fontSize" ? "1em" : i, i = s.pixelLeft + "px", s.left = n, r && (e.runtimeStyle.left = r)), i === "" ? "auto" : i
    }), v.each(["height", "width"], function(e, t) {
        v.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return e.offsetWidth === 0 && It.test(Dt(e, "display")) ? v.swap(e, Xt, function() {
                    return tn(e, t, r)
                }) : tn(e, t, r)
            },
            set: function(e, n, r) {
                return Zt(e, n, r ? en(e, t, r, v.support.boxSizing && v.css(e, "boxSizing") === "border-box") : 0)
            }
        }
    }), v.support.opacity || (v.cssHooks.opacity = {
        get: function(e, t) {
            return jt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = v.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if (t >= 1 && v.trim(s.replace(Bt, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (r && !r.filter) return
            }
            n.filter = Bt.test(s) ? s.replace(Bt, i) : s + " " + i
        }
    }), v(function() {
        v.support.reliableMarginRight || (v.cssHooks.marginRight = {
            get: function(e, t) {
                return v.swap(e, {
                    display: "inline-block"
                }, function() {
                    if (t) return Dt(e, "marginRight")
                })
            }
        }), !v.support.pixelPosition && v.fn.position && v.each(["top", "left"], function(e, t) {
            v.cssHooks[t] = {
                get: function(e, n) {
                    if (n) {
                        var r = Dt(e, t);
                        return Ut.test(r) ? v(e).position()[t] + "px" : r
                    }
                }
            }
        })
    }), v.expr && v.expr.filters && (v.expr.filters.hidden = function(e) {
        return e.offsetWidth === 0 && e.offsetHeight === 0 || !v.support.reliableHiddenOffsets && (e.style && e.style.display || Dt(e, "display")) === "none"
    }, v.expr.filters.visible = function(e) {
        return !v.expr.filters.hidden(e)
    }), v.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        v.cssHooks[e + t] = {
            expand: function(n) {
                var r, i = typeof n == "string" ? n.split(" ") : [n],
                    s = {};
                for (r = 0; r < 4; r++) s[e + $t[r] + t] = i[r] || i[r - 2] || i[0];
                return s
            }
        }, qt.test(e) || (v.cssHooks[e + t].set = Zt)
    });
    var rn = /%20/g,
        sn = /\[\]$/,
        on = /\r?\n/g,
        un = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        an = /^(?:select|textarea)/i;
    v.fn.extend({
        serialize: function() {
            return v.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? v.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || an.test(this.nodeName) || un.test(this.type))
            }).map(function(e, t) {
                var n = v(this).val();
                return n == null ? null : v.isArray(n) ? v.map(n, function(e, n) {
                    return {
                        name: t.name,
                        value: e.replace(on, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(on, "\r\n")
                }
            }).get()
        }
    }), v.param = function(e, n) {
        var r, i = [],
            s = function(e, t) {
                t = v.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        n === t && (n = v.ajaxSettings && v.ajaxSettings.traditional);
        if (v.isArray(e) || e.jquery && !v.isPlainObject(e)) v.each(e, function() {
            s(this.name, this.value)
        });
        else
            for (r in e) fn(r, e[r], n, s);
        return i.join("&").replace(rn, "+")
    };
    var ln, cn, hn = /#.*$/,
        pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        dn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        vn = /^(?:GET|HEAD)$/,
        mn = /^\/\//,
        gn = /\?/,
        yn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bn = /([?&])_=[^&]*/,
        wn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        En = v.fn.load,
        Sn = {},
        xn = {},
        Tn = ["*/"] + ["*"];
    try {
        cn = s.href
    } catch (Nn) {
        cn = i.createElement("a"), cn.href = "", cn = cn.href
    }
    ln = wn.exec(cn.toLowerCase()) || [], v.fn.load = function(e, n, r) {
        if (typeof e != "string" && En) return En.apply(this, arguments);
        if (!this.length) return this;
        var i, s, o, u = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), v.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (s = "POST"), v.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: n,
            complete: function(e, t) {
                r && u.each(r, o || [e.responseText, t, e])
            }
        }).done(function(e) {
            o = arguments, u.html(i ? v("<div>").append(e.replace(yn, "")).find(i) : e)
        }), this
    }, v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        v.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), v.each(["get", "post"], function(e, n) {
        v[n] = function(e, r, i, s) {
            return v.isFunction(r) && (s = s || i, i = r, r = t), v.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: s
            })
        }
    }), v.extend({
        getScript: function(e, n) {
            return v.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return v.get(e, t, n, "json")
        },
        ajaxSetup: function(e, t) {
            return t ? Ln(e, v.ajaxSettings) : (t = e, e = v.ajaxSettings), Ln(e, t), e
        },
        ajaxSettings: {
            url: cn,
            isLocal: dn.test(ln[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Tn
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": v.parseJSON,
                "text xml": v.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: Cn(Sn),
        ajaxTransport: Cn(xn),
        ajax: function(e, n) {
            function T(e, n, s, a) {
                var l, y, b, w, S, T = n;
                if (E === 2) return;
                E = 2, u && clearTimeout(u), o = t, i = a || "", x.readyState = e > 0 ? 4 : 0, s && (w = An(c, x, s));
                if (e >= 200 && e < 300 || e === 304) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (v.lastModified[r] = S), S = x.getResponseHeader("Etag"), S && (v.etag[r] = S)), e === 304 ? (T = "notmodified", l = !0) : (l = On(c, w), T = l.state, y = l.data, b = l.error, l = !b);
                else {
                    b = T;
                    if (!T || e) T = "error", e < 0 && (e = 0)
                }
                x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [y, T, x]) : d.rejectWith(h, [x, T, b]), x.statusCode(g), g = t, f && p.trigger("ajax" + (l ? "Success" : "Error"), [x, c, l ? y : b]), m.fireWith(h, [x, T]), f && (p.trigger("ajaxComplete", [x, c]), --v.active || v.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (n = e, e = t), n = n || {};
            var r, i, s, o, u, a, f, l, c = v.ajaxSetup({}, n),
                h = c.context || c,
                p = h !== c && (h.nodeType || h instanceof v) ? v(h) : v.event,
                d = v.Deferred(),
                m = v.Callbacks("once memory"),
                g = c.statusCode || {},
                b = {},
                w = {},
                E = 0,
                S = "canceled",
                x = {
                    readyState: 0,
                    setRequestHeader: function(e, t) {
                        if (!E) {
                            var n = e.toLowerCase();
                            e = w[n] = w[n] || e, b[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return E === 2 ? i : null
                    },
                    getResponseHeader: function(e) {
                        var n;
                        if (E === 2) {
                            if (!s) {
                                s = {};
                                while (n = pn.exec(i)) s[n[1].toLowerCase()] = n[2]
                            }
                            n = s[e.toLowerCase()]
                        }
                        return n === t ? null : n
                    },
                    overrideMimeType: function(e) {
                        return E || (c.mimeType = e), this
                    },
                    abort: function(e) {
                        return e = e || S, o && o.abort(e), T(0, e), this
                    }
                };
            d.promise(x), x.success = x.done, x.error = x.fail, x.complete = m.add, x.statusCode = function(e) {
                if (e) {
                    var t;
                    if (E < 2)
                        for (t in e) g[t] = [g[t], e[t]];
                    else t = e[x.status], x.always(t)
                }
                return this
            }, c.url = ((e || c.url) + "").replace(hn, "").replace(mn, ln[1] + "//"), c.dataTypes = v.trim(c.dataType || "*").toLowerCase().split(y), c.crossDomain == null && (a = wn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === ln[1] && a[2] === ln[2] && (a[3] || (a[1] === "http:" ? 80 : 443)) == (ln[3] || (ln[1] === "http:" ? 80 : 443)))), c.data && c.processData && typeof c.data != "string" && (c.data = v.param(c.data, c.traditional)), kn(Sn, c, n, x);
            if (E === 2) return x;
            f = c.global, c.type = c.type.toUpperCase(), c.hasContent = !vn.test(c.type), f && v.active++ === 0 && v.event.trigger("ajaxStart");
            if (!c.hasContent) {
                c.data && (c.url += (gn.test(c.url) ? "&" : "?") + c.data, delete c.data), r = c.url;
                if (c.cache === !1) {
                    var N = v.now(),
                        C = c.url.replace(bn, "$1_=" + N);
                    c.url = C + (C === c.url ? (gn.test(c.url) ? "&" : "?") + "_=" + N : "")
                }
            }(c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), c.ifModified && (r = r || c.url, v.lastModified[r] && x.setRequestHeader("If-Modified-Since", v.lastModified[r]), v.etag[r] && x.setRequestHeader("If-None-Match", v.etag[r])), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + Tn + "; q=0.01" : "") : c.accepts["*"]);
            for (l in c.headers) x.setRequestHeader(l, c.headers[l]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && E !== 2) {
                S = "abort";
                for (l in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[l](c[l]);
                o = kn(xn, c, n, x);
                if (!o) T(-1, "No Transport");
                else {
                    x.readyState = 1, f && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function() {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        E = 1, o.send(b, T)
                    } catch (k) {
                        if (!(E < 2)) throw k;
                        T(-1, k)
                    }
                }
                return x
            }
            return x.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Mn = [],
        _n = /\?/,
        Dn = /(=)\?(?=&|$)|\?\?/,
        Pn = v.now();
    v.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Mn.pop() || v.expando + "_" + Pn++;
            return this[e] = !0, e
        }
    }), v.ajaxPrefilter("json jsonp", function(n, r, i) {
        var s, o, u, a = n.data,
            f = n.url,
            l = n.jsonp !== !1,
            c = l && Dn.test(f),
            h = l && !c && typeof a == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Dn.test(a);
        if (n.dataTypes[0] === "jsonp" || c || h) return s = n.jsonpCallback = v.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, o = e[s], c ? n.url = f.replace(Dn, "$1" + s) : h ? n.data = a.replace(Dn, "$1" + s) : l && (n.url += (_n.test(f) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
            return u || v.error(s + " was not called"), u[0]
        }, n.dataTypes[0] = "json", e[s] = function() {
            u = arguments
        }, i.always(function() {
            e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, Mn.push(s)), u && v.isFunction(o) && o(u[0]), u = o = t
        }), "script"
    }), v.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return v.globalEval(e), e
            }
        }
    }), v.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), v.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = i.head || i.getElementsByTagName("head")[0] || i.documentElement;
            return {
                send: function(s, o) {
                    n = i.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, i) {
                        if (i || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success")
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var Hn, Bn = e.ActiveXObject ? function() {
            for (var e in Hn) Hn[e](0, 1)
        } : !1,
        jn = 0;
    v.ajaxSettings.xhr = e.ActiveXObject ? function() {
            return !this.isLocal && Fn() || In()
        } : Fn,
        function(e) {
            v.extend(v.support, {
                ajax: !!e,
                cors: !!e && "withCredentials" in e
            })
        }(v.ajaxSettings.xhr()), v.support.ajax && v.ajaxTransport(function(n) {
            if (!n.crossDomain || v.support.cors) {
                var r;
                return {
                    send: function(i, s) {
                        var o, u, a = n.xhr();
                        n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                        if (n.xhrFields)
                            for (u in n.xhrFields) a[u] = n.xhrFields[u];
                        n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (u in i) a.setRequestHeader(u, i[u])
                        } catch (f) {}
                        a.send(n.hasContent && n.data || null), r = function(e, i) {
                            var u, f, l, c, h;
                            try {
                                if (r && (i || a.readyState === 4)) {
                                    r = t, o && (a.onreadystatechange = v.noop, Bn && delete Hn[o]);
                                    if (i) a.readyState !== 4 && a.abort();
                                    else {
                                        u = a.status, l = a.getAllResponseHeaders(), c = {}, h = a.responseXML, h && h.documentElement && (c.xml = h);
                                        try {
                                            c.text = a.responseText
                                        } catch (p) {}
                                        try {
                                            f = a.statusText
                                        } catch (p) {
                                            f = ""
                                        }!u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                    }
                                }
                            } catch (d) {
                                i || s(-1, d)
                            }
                            c && s(u, f, c, l)
                        }, n.async ? a.readyState === 4 ? setTimeout(r, 0) : (o = ++jn, Bn && (Hn || (Hn = {}, v(e).unload(Bn)), Hn[o] = r), a.onreadystatechange = r) : r()
                    },
                    abort: function() {
                        r && r(0, 1)
                    }
                }
            }
        });
    var qn, Rn, Un = /^(?:toggle|show|hide)$/,
        zn = new RegExp("^(?:([-+])=|)(" + m + ")([a-z%]*)$", "i"),
        Wn = /queueHooks$/,
        Xn = [Gn],
        Vn = {
            "*": [function(e, t) {
                var n, r, i = this.createTween(e, t),
                    s = zn.exec(t),
                    o = i.cur(),
                    u = +o || 0,
                    a = 1,
                    f = 20;
                if (s) {
                    n = +s[2], r = s[3] || (v.cssNumber[e] ? "" : "px");
                    if (r !== "px" && u) {
                        u = v.css(i.elem, e, !0) || n || 1;
                        do a = a || ".5", u /= a, v.style(i.elem, e, u + r); while (a !== (a = i.cur() / o) && a !== 1 && --f)
                    }
                    i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n
                }
                return i
            }]
        };
    v.Animation = v.extend(Kn, {
        tweener: function(e, t) {
            v.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; r < i; r++) n = e[r], Vn[n] = Vn[n] || [], Vn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Xn.unshift(e) : Xn.push(e)
        }
    }), v.Tween = Yn, Yn.prototype = {
        constructor: Yn,
        init: function(e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (v.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Yn.propHooks[this.prop];
            return e && e.get ? e.get(this) : Yn.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Yn.propHooks[this.prop];
            return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yn.propHooks._default.set(this), this
        }
    }, Yn.prototype.init.prototype = Yn.prototype, Yn.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = v.css(e.elem, e.prop, !1, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            },
            set: function(e) {
                v.fx.step[e.prop] ? v.fx.step[e.prop](e) : e.elem.style && (e.elem.style[v.cssProps[e.prop]] != null || v.cssHooks[e.prop]) ? v.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Yn.propHooks.scrollTop = Yn.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, v.each(["toggle", "show", "hide"], function(e, t) {
        var n = v.fn[t];
        v.fn[t] = function(r, i, s) {
            return r == null || typeof r == "boolean" || !e && v.isFunction(r) && v.isFunction(i) ? n.apply(this, arguments) : this.animate(Zn(t, !0), r, i, s)
        }
    }), v.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Gt).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = v.isEmptyObject(e),
                s = v.speed(t, n, r),
                o = function() {
                    var t = Kn(this, v.extend({}, e), s);
                    i && t.stop(!0)
                };
            return i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = e != null && e + "queueHooks",
                    s = v.timers,
                    o = v._data(this);
                if (n) o[n] && o[n].stop && i(o[n]);
                else
                    for (n in o) o[n] && o[n].stop && Wn.test(n) && i(o[n]);
                for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                (t || !r) && v.dequeue(this, e)
            })
        }
    }), v.each({
        slideDown: Zn("show"),
        slideUp: Zn("hide"),
        slideToggle: Zn("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        v.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), v.speed = function(e, t, n) {
        var r = e && typeof e == "object" ? v.extend({}, e) : {
            complete: n || !n && t || v.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !v.isFunction(t) && t
        };
        r.duration = v.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in v.fx.speeds ? v.fx.speeds[r.duration] : v.fx.speeds._default;
        if (r.queue == null || r.queue === !0) r.queue = "fx";
        return r.old = r.complete, r.complete = function() {
            v.isFunction(r.old) && r.old.call(this), r.queue && v.dequeue(this, r.queue)
        }, r
    }, v.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, v.timers = [], v.fx = Yn.prototype.init, v.fx.tick = function() {
        var e, n = v.timers,
            r = 0;
        qn = v.now();
        for (; r < n.length; r++) e = n[r], !e() && n[r] === e && n.splice(r--, 1);
        n.length || v.fx.stop(), qn = t
    }, v.fx.timer = function(e) {
        e() && v.timers.push(e) && !Rn && (Rn = setInterval(v.fx.tick, v.fx.interval))
    }, v.fx.interval = 13, v.fx.stop = function() {
        clearInterval(Rn), Rn = null
    }, v.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, v.fx.step = {}, v.expr && v.expr.filters && (v.expr.filters.animated = function(e) {
        return v.grep(v.timers, function(t) {
            return e === t.elem
        }).length
    });
    var er = /^(?:body|html)$/i;
    v.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            v.offset.setOffset(this, e, t)
        });
        var n, r, i, s, o, u, a, f = {
                top: 0,
                left: 0
            },
            l = this[0],
            c = l && l.ownerDocument;
        if (!c) return;
        return (r = c.body) === l ? v.offset.bodyOffset(l) : (n = c.documentElement, v.contains(n, l) ? (typeof l.getBoundingClientRect != "undefined" && (f = l.getBoundingClientRect()), i = tr(c), s = n.clientTop || r.clientTop || 0, o = n.clientLeft || r.clientLeft || 0, u = i.pageYOffset || n.scrollTop, a = i.pageXOffset || n.scrollLeft, {
            top: f.top + u - s,
            left: f.left + a - o
        }) : f)
    }, v.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop,
                n = e.offsetLeft;
            return v.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(v.css(e, "marginTop")) || 0, n += parseFloat(v.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function(e, t, n) {
            var r = v.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = v(e),
                s = i.offset(),
                o = v.css(e, "top"),
                u = v.css(e, "left"),
                a = (r === "absolute" || r === "fixed") && v.inArray("auto", [o, u]) > -1,
                f = {},
                l = {},
                c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), v.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }
    }, v.fn.extend({
        position: function() {
            if (!this[0]) return;
            var e = this[0],
                t = this.offsetParent(),
                n = this.offset(),
                r = er.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : t.offset();
            return n.top -= parseFloat(v.css(e, "marginTop")) || 0, n.left -= parseFloat(v.css(e, "marginLeft")) || 0, r.top += parseFloat(v.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(v.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - r.top,
                left: n.left - r.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || i.body;
                while (e && !er.test(e.nodeName) && v.css(e, "position") === "static") e = e.offsetParent;
                return e || i.body
            })
        }
    }), v.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        v.fn[e] = function(i) {
            return v.access(this, function(e, i, s) {
                var o = tr(e);
                if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(r ? v(o).scrollLeft() : s, r ? s : v(o).scrollTop()) : e[i] = s
            }, e, i, arguments.length, null)
        }
    }), v.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        v.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            v.fn[i] = function(i, s) {
                var o = arguments.length && (r || typeof i != "boolean"),
                    u = r || (i === !0 || s === !0 ? "margin" : "border");
                return v.access(this, function(n, r, i) {
                    var s;
                    return v.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? v.css(n, r, i, u) : v.style(n, r, i, u)
                }, n, o ? i : t, o, null)
            }
        })
    }), e.jQuery = e.$ = v, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return v
    })
})(window);
jQuery.noConflict();

;
/*
 * QueryLoader v2 - A simple script to create a preloader for images
 *
 * For instructions read the original post:
 * http://www.gayadesign.com/diy/queryloader2-preload-your-images-with-ease/
 *
 * Copyright (c) 2011 - Gaya Kessler
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Version:  2.2
 * Last update: 03-04-2012
 *
 */
(function($) {

    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(elt /*, from*/ ) {
            var len = this.length >>> 0;
            var from = Number(arguments[1]) || 0;
            from = (from < 0) ? Math.ceil(from) : Math.floor(from);
            if (from < 0)
                from += len;

            for (; from < len; from++) {
                if (from in this &&
                    this[from] === elt)
                    return from;
            }
            return -1;
        };
    }

    var qLimages = new Array;
    var qLdone = 0;
    var qLdestroyed = false;

    var qLimageContainer = "";
    var qLoverlay = "";
    var qLbar = "";
    var qLpercentage = "";
    var qLimageCounter = 0;
    var qLstart = 0;

    var qLoptions = {
        addAdditionalImages: function(qLimages) {
            return qLimages;
        },
        onBeforeComplete: function() {},
        onComplete: function() {},
        backgroundColor: "#000",
        barColor: "#fff",
        barHeight: 1,
        percentage: false,
        deepSearch: true,
        completeAnimation: "fade",
        minimumTime: 500,
        onLoadComplete: function() {
            if (qLoptions.completeAnimation == "grow") {
                var animationTime = 500;
                var currentTime = new Date();
                if ((currentTime.getTime() - qLstart) < qLoptions.minimumTime) {
                    animationTime = (qLoptions.minimumTime - (currentTime.getTime() - qLstart));
                }

                qLoptions.onBeforeComplete();
                $(qLbar).stop().animate({
                    "width": "100%"
                }, animationTime, function() {
                    $(this).animate({
                        top: "0%",
                        width: "100%",
                        height: "100%"
                    }, 500, function() {
                        $(qLoverlay).fadeOut(500, function() {
                            $(this).remove();
                            qLoptions.onComplete();
                        })
                    });
                });
            } else {
                qLoptions.onBeforeComplete();
                setTimeout(function() {
                    $(qLoverlay).fadeOut(500, function() {
                        $(qLoverlay).remove();
                        qLoptions.onComplete();
                    });
                }, qLoptions.minimumTime);
            }
        }
    };

    var afterEach = function() {
        //start timer
        var currentTime = new Date();
        qLstart = currentTime.getTime();

        createPreloadContainer();
        createOverlayLoader();
    };

    var createPreloadContainer = function() {
        qLimageContainer = $("<div></div>").appendTo("body").css({
            display: "none",
            width: 0,
            height: 0,
            overflow: "hidden"
        });
        for (var i = 0; qLimages.length > i; i++) {
            $.ajax({
                url: qLimages[i],
                type: 'HEAD',
                success: function(data) {
                    if (!qLdestroyed) {
                        qLimageCounter++;
                        addImageForPreload(this['url']);
                    }
                }
            });
        }
    };

    var addImageForPreload = function(url) {
        var image = $("<img />").attr("src", url).bind("load", function() {
            completeImageLoading();
        }).appendTo(qLimageContainer);
    };

    var completeImageLoading = function() {
        qLdone++;

        var percentage = (qLdone / qLimageCounter) * 100;
        $(qLbar).stop().animate({
            width: percentage + "%",
            minWidth: percentage + "%"
        }, 200);

        if (qLoptions.percentage == true) {
            $(qLpercentage).text(Math.ceil(percentage) + "%");
        }

        if (qLdone == qLimageCounter) {
            destroyQueryLoader();
        }
    };

    var destroyQueryLoader = function() {
        $(qLimageContainer).remove();
        qLoptions.onLoadComplete();
        qLdestroyed = true;
    };

    var createOverlayLoader = function() {
        qLoverlay = $("<div id='qLoverlay'></div>").css({
            width: "100%",
            height: "100%",
            backgroundColor: qLoptions.backgroundColor,
            backgroundPosition: "fixed",
            position: "fixed",
            zIndex: 666999,
            top: 0,
            left: 0
        }).appendTo("body");
        $("body").removeClass('opt-0');
        qLbar = $("<div id='qLbar' class='bottom_progress'></div>").css({
            height: qLoptions.barHeight + "px",
            marginTop: "-" + (qLoptions.barHeight / 2) + "px",
            backgroundColor: qLoptions.barColor,
            //	    backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAICAYAAAA4GpVBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjlBOTYyODE0RDBGMTFFMDhGOEQ4NTA1RTVDMDMwM0EiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjlBOTYyODI0RDBGMTFFMDhGOEQ4NTA1RTVDMDMwM0EiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyOUE5NjI3RjREMEYxMUUwOEY4RDg1MDVFNUMwMzAzQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyOUE5NjI4MDREMEYxMUUwOEY4RDg1MDVFNUMwMzAzQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlymaksAAAAVSURBVHjaYvj//78DEwMQ4CcAAgwAe84DTJNWtqEAAAAASUVORK5CYII=)',
            width: "0%",
            position: "fixed",
            bottom: "0"
        }).appendTo(qLoverlay);
        qLhomeLogo = $("<div id='qLhomeLogo' class='loader_middle' >WE LIVE PASSION</div>").css({
            //            backgroundImage: 'url("./images/home-logo.png")',
            backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABDCAYAAABEDoFIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAFgpJREFUeNrsXQu0XkV13nP+/968bu7N4wYSSCAhgegivFJCDQpLBREq8lAKXasFKdpaxEcQQcACivaFUG1WH9JFl0KVii5ti6W+KEgXhVYKPitYVEywvOSRQEhy7/+fs7v3mT0ze+af/77jWjfJXpmc8895z56997f37Jlrhp7/MVhCQAQwxtT7VXsYoNpZb7EaAixpvxwGU9J+NUz1XNeiQlts90PVWkbHD4eydRji8Ao6YR+s2n1YtQrANlZVuR3a7acB2o/RjX5Iv78PptoMZXsLQAlVVdHzyvrZBiqosKL70j7V8SuVFdpjBgKZ+l/93hFJvSP7XXw119vvs/v2GFY7YOaiY2DJiZ+C6UZNrL/Oflj9kdxoxvgPtq0TtxCGFjuUzn0V/Xw91a2nIyvqVqn0JQUYLKiuXT+H+OKY8Djd6H66/q6qwvto/wf2+cnTqBL5IscY/16BSe46tw8ZprprUO6ur+nsAdOIge7r0KD0TscgIx/KX2oAY+ato+1ZVE6na1ZzA9iGKaQVC3t5hU62pbsLQ2z9MvqxjJh3Nt3jp/SIrxCfvkhH7it0v3EdKu08JmFOF154RmV45JkNJnt8ejBQpM9LopF9+SItEXR4MX3sH1Dd7xSmWFkLmoiUIaZV2FINrZrX3aRmahUan641RX1sJUntBjrwFrrLrfT8T9F7bHLaAGt1CrH6RMVE7FSpsVSq74Npy6ssFUZJmuvd1g4a1dPr+pPo/y9RuYYuWolepcn1tX0qfIvaW5jIFnnpTCQG3TMNHEC7l9PVX6Z3OaN+p0TagvSYeF+rThPbPcc815fM9NecgYH8cTHjcorJvJf+u4XKsZ5hJgCeIKVKFFDdxXUItIz20kPMNCIqsdrGtVRuotoP1Sq0ts9BiiCxcygvYJRaBKOE1GRfLbaDxkxPBgbGoQYn7sPYRn6Mfv0Zbfc1CCMoIH0PVOKFEeLASASCXfSMDPK8kGqupvqNdE0TE0SCIuVaQlGBFVciJkLgfwR6zHRWoarLJmqpSV//Udq9gn7NjG1P0QF2wEuBiVFC0GOCbjVgQAsgKgd0UGns+s69VP9u2ttIJ/WkL+/7grOPqGyjiRmbAh8wsWmexig040TZ/y4l+bwcKi1flthnQ2FWaBxldLje2CrUatQJpLFMc2qL+wOWTiFUXjwwGOcLaW8L3fYa2nqkpPtCZM8wPU5vSg8o29uTzxQprbbXfu60ZCBCw9sXCxpoi9VpdOzDujFQ9eyisGASvA1B2QaY55gHEYAIes0Ir8K14FWovxWG+xdQbCCv/lH68WnthGtJA+w0Z/V5JfF81iDM3ueYIHJa9Kph6J13yPRkYNHTl9iG1kFQ7ryBvq83fKTy41i6qtBgDrE65kcGRlrYKD/SS0ZlO41Hi4JYFb+deawlk86cRf7j1fTze/TjoRSYmATVarVRDW+DOcveAIte8zHY3agwNpZUF2uR8CqqWRnBSNQNQucUsYthInFwgQHVgkXiyAvqdPC/3ge11epNzhXws5w2V9B2FqrITM5BN7rDQRvKHc/C7kiFafZAQYW31KAnUt25NlLSzbTHSNWDTNdiaO2hUa5CzZHKY14lMljLFoi/51W5AiMuxOf1dQFn0u5Jpj6psnrWbevCHZEKbbnjIJB67D8EBtZcsHsysDZoBdnBomFo/4PUBI0OP1AassYXtfGyobNUiiIM5KWygrqxC2FGZCD5FAORe2IEABkTQnuCfgTBNmh/Az2vP/iGItWRky8Mr4bA9MyGWUuO2U0l0JAEUjHQOIHa+NiOSIz3yySCj2HUwgpd5X8HMBIHs9necVzU3QN8tESYb9wzREX75ymfsXBAq+4Ix9Oh41lT2I4Vb+v6+h1KKHoGYfHxH4fdlQoXzKXvPY+2szuxuA/3RohPeYxexVm1puylMZ2YXqMUrRrF/vnAdRKArrVj4YLtPMRhzqX/m7XdLkTimckGJdrC9b2w9NTboNl/wG7MQNNgv2AxNdyrQ0AMO7xgRAhen+mMR1poWqhQiPKnDaqISxH3DeeFmzDUUyFG7oCxKBQc3hJie72/CyhISMBKYo1yh6ExaxGVBbA7U2EaPU3677XUWouCW9UJYFCgPijgggJYQmurgKR34tH7cr4YUB0lQFyj/QE/7mc8wPXo0p62gNyT4407sXKDs3Q+uQ09cw6E/U75HNQddHdmIJVB6rssfX0dY24KwBR1scyJvQgTfC+EzkgHy21h1ZtnBppOTCu9wmcFIKgB2EqEXOwiVo7Bx8UhO75+J/TMXwP7n3IL2b85sLsT8aVYTR9/BDi77yMVVdKIsflyKk+PQmDKPbFtRc0DNZJgtLduOmKbUcAb0A8qGy+ChbvgCHCouXYxGtDe9h1YdMyVYHrnwp5APB54CLXRUhQJQ8gNr3CWCgZ3obLSYAS4OEfeGMjGtDAZu3EOgjGgdHEaAjMQBpslzKaHhKqasUtJrQ/WwIfcIWy9CP2r3kd2byHsKcSa8UBqgNmFCEmhRcwoFKpGt03hEJ91Baw7oFCmN3nJ0JGBJAhgInsbDe6ClkYMUZcocAB9dMJiC2IMtLf/D8xZfgo05+6/BzEQzEL6/Bk+EgJJVAVjxxwd4FQNaXTYLAUzoEbVnYqsMHEz9fBCGJdEhGiENpOo1KCjA/U9h56FeYdeBTOXrIU9iRjTz6TGaYKKRXZEiJOGRi2cIOl/Lt0sHWGtpTdJRDLBudNRFu8HqvSOAIG1iq60sa3HCbHcBr3zVkCTXIc9iZqeA87G6f6tVKhrN89ko6IpNmAWmrTSYEhARzVsUwuRSkkF2laUeR9LOq3kMKY9Xkt6ZaM+dV6ozUesOG8Ugw10Qdc2Sd/AwefDwOrfgj2NmIE7qIXKTExfO80hSK2BCYTcGNSjFwJsvPNPRrMxc6F1yJlBdZ+RRF4OxdU5o3SH0upmZlrD9Yf6eCWCXcX+ilWxw40Zi6A5h+xe0ycOLKMy1/aSyGV6nsozE2inFcDDa/G4DEv+JiovJedy5GBx5tnPUfnlBPnEH7ZUEDcq3rU4bYJvGg1Hh+EeHVMJNjLKb5EfhVZsakCubO8kf6wf5h92AfQOrK6zvKPsW90k2v0Q1GQwdBg0Gg15JvbU8t+YoT/htVQ+KY3clgu4Ee6j8rtUNo+j8V4HNqFrLoSU5QEq91M5P8NAjid/nhs3aex/p3JGwtix0jlU/pTKHPU93KG+yzfeRL+2hayxOHQZZXMlcN6Dwjh3PYRRFBI1jdlkaXtpt3dCXdCM79DnqJxK5eyk/vVUPkDlEmng0YgZ9SfS+zUx0/6cyk8z13yPysNUjk7q30iF/dYHJxBseZNItaYXuFPwiNkjiOWmCkKOi4mC0LFfhj57WwerVRgMk0C4nLOLEod6HYhJqBJGPZI5xlJz2hjvz/c4JnPvT1D5xy7XPE7ltkx9I9OhxkKrqByeqX+Iys081vMoNfJDFkZ2DFQoE4g+MO14hxUmURjlPkSIkaxfsE/jJkxfLRDbtJ+N0JAfpDKc1LMq5NyK0YYoXk3looyEf4vKxlGuvZvKExlNcVrtu46PjqeyPKnjb/pXKj9pEtJ7oUK8l9r+nWiwP81Wd+IWMtCC683DONiWiTBVJXA/ikTTMRKS9jC89NhXoTFjngUsDGJKO9BbX8ezkUAiCfU10h3ahK965hK6JBPQMyv3cVdS+d8RPv52aewPJPWvoHI5lQ0ZBjOxL/IRKvOT+qelUzw3SqP/kMo3RNo1MSPeMIL0ptQjDJyR1D9J5QtsD5sEzbnl76Ef/0elH7Rd8+nNIQMbFLhBNQkBVZoES4z35wt6B2zB9ifupk2Lqgh5VjwtrS15OGXtOmCJklvYtjHWcqi+3eC6q+t0jwyxDfrMGBrhOiqvovKapP4CaeR/ylzzDgFCmgh9wR9R+e8xPHNI7v2bAjwcMSPeMg4GHkplfaaeAdEvRE/WfX8rtdldxmepY4hTem2o5h9Uklao0GYRjfnpkV+HjJqkRnuhIIYyUw2pVNPorfeLxswa4LCaNcVM+j2jlvOBw94Dc1a+2cUZNH1VwEU1hkZglH0FcF5pTNyYnHG+fwZFvtsHyQN9mcqN41B9d1H5fkaNrhe3ZCzEHe+gpG4HlVu9ocPawWYtUt5M999mXP6Lnt8gQz1GuRKcShPlwnRMTQu+mq1q1KW+S9GwyU68pWLzbAq7bZBn09oBc1adDfPWnE+ndTDvx4Iix5Nmdq9IT8rwQ0QNO6vAUfDLqOyXnMdg6NIu6rYbsbr9JnRmTjOiffMYrufsiOM6wIh9l7vDaERlHWcSqQekZ8f9RUmZnk9QS6BOx0eMZsAGFyKd22fi4DbGge5q5/MwY/GxMHjURWq2k6ftYs8engAW+kwX1fV2KifIPqPE0zPq8BIxMeOl28XZTyX/pIyEp3SwaIOUviDvJBKIOi5WXs+NhJl5V5FjL9nZOl0XnersmDkSJNEot8OF3BzDOUpTDW+Fnr6DYMHai2vwklBbgMW/TBDMPivoM9eg14i6el/muhsE8U2EHuxiM4/IuCcp/VoGfb4oqlz5CtiSue4tnpf+AEnWxnQeus9ZqTAk37oUBpWFjX48qEi1qHdF6illEUq18wqr8mXSsDNhwdEXQ+/AgbkPYr3/N5P0G79L5do08iQ9/bNUVmfAwnWTfCYHFbZl1OgpI1zDYPI3MvVfZ9chYmBFUB1LV4a5QQndmQfDOLxigeRSVG7CiwmZaCYrgbaPmEgXo8zqtYxGJOYxKm1vh/lr3gGz9lvfrSdflQlbTbRBb8tEO1YmdU+J6tw6yed9Q+x2zr/rNvK8XKJGKf19ascLKy1FnSNt5yCYX1KDk3+ET3dkrqD4aCotAl1OTJQyhioYg9HKBmkos/YBh16AvmVvgv6Dz8pFxp4Vf20zTA2x/fiwhLxGOucjY3QZRiO22//MKDGpX9vFxnED/HrGB+VO8J8dcTYnfVDRc0pbEIcJtRWXCWQNQMjlpriwW6XRaRGmT+spzwC+XmedOfBTDm+BGYNHwvwjL9SjCdru/aGgyKmkn4vd29Ll+B1UPj2Fz7tVYpdpROiEDMrsk9hnSp/PBRBqNwJZhVVtskN2a0NX+Nk66oBkL/TMXbeaRTSBskpSBOMgnEnyTXnZkdpZJ7XZM3sJzD/8XdCYs2/uw9nv+rtdNJS2OBPhcLRGYpBTRRz0vjNTf2LmOUsVKtZSfEfO7y1i96AAlTrGJ/81z0OgA1u9SUM1Wu5n5BbR6AMmc7zQz4IJcyMYNLFf2P/Kc2HmPkfmPvrfJNzV3gXMWy9+3awux9k//BCVeVP4zJszDHgllXWJ+jwhEy9l8PJol6EK0+H0uQZHjnMZ+Fs6ci4d2mRxjFHLwRiVcIuRiYsk0BiNQ+X+Leg74GToW3FqNxX3ngx6mwoaEEC0cpTzeHj/nCl8LiPa72TA0xsVw9iGnNWhwqzrtKULA+PVJrz7FpYQ4dqv0D7D2i9ReVnP2/OLG/iAWzJ5AqMp8fZAeyfMWHg4DKx5W26C38tU3jtBZ300Yuf5/RkIz076DzJggtcIOGqKnr1DXJWUTlL+3qqMf8jg5b5uNy3CyhJ6kQPTIZFUfkTlbNrbQNUE603LzU4Kc/6S1AqM583Xx1s7oDF7Edm9d0LR25++TyXo745dZPe4sS7MPPNKQbpDmVGJP57AEBBkwQAJQgbM7KvQ6Osyav3rkB84DirUdEgBdvZFu1MRE29CdjJNDXDuIT26JSxE1glwfG4oh27Iz+TtAPl7PQPZeC77Z385xiD1eGk/6Rxp2trdIhmcIvEPmetOluD2VNDjaSRFPWO2qNNUGzH4aY0ogTnmoc6EDgLkHPZn6LRP0K8z6cjb6MwbatBhzOOQZAT6VHhyVcqhLeTrnYOzlqzvFiVRrsuUUiEjEuuS+pekvpLn3pAJtQHYMcCpmCE6LJ20ykSC+N3Skff7R1KfTE2r5dCjRT/XL0ozNPGSIuDzY16QgO3tnCFNFTzKvZTusZRecR+Szj5SsY1y+IWS0zbmrjpr3dxVp7ORTgf4nhDQ8otdpDrfSuX3MvWcGvGA+s0DsZw8tDF5R0aj18sowmQjM5wK8R/gJuYEVX2VqNMUiT8/IgPzgQCQacuxZGKELEMahYCep+h8Kvht2yk4W2O4Ub68uZi99MRyzoEnD/YOLD8VGr1pFJ7H6y7eBc66Ix5P+3jG5/uvLrHVW8Q/e2tSf5xI4pWTfJ/nRVUfl2iI1Pd7jMrXRrtZUycwpbawY8UQJX1uGlil0uz14ne1k96/slx49GVlY9Zgb9Gcfb0Yaf2QlkQp2A6tgPEvmsTnPzNCjLQpweg0Or5TwmlPdQl9XddlNICl+B4BFpMBM/cKg0Ya2L0vg4xzKjSdGaSCldGqWZm1XtSyIAHHsO1sEUg5COYfcRGPvBvpub+dYVBDfC3u7RPJNxyWe9/a5TiDjzMz9Sx53xzhvt+ugxh2EFir0kEJ7fFI+5OTYCK7SDz2+q4ux7d2iZ/mJFBLlmamyvNEjBSoMTLdr15RQo/cc6o8Ma9vGSw4aoOLgbJhPi8T83OqY/EkGqIl6C1H6wSgpM99QJgzWuP8Bdi8mHRYh3NrLhHANVG0zNElHmM8v8v7PzxWV6rQPl+YaYTRsh0hUVdN9IwW3TT1ch5N8u+a5B4sWPt+vS5ozwgxx8lSt/VbOb2dM7P3yUgsA5efjFG6r4b8SDyr0jNgcuvk8cjCXZn6UgIm28fEQL1eqAYxRtkzPbMyrKILCuy0iHn7wfw1b4cFR1zYTe/vCsKMhHFnuRY6h2pKiUd+cRz3f1AYnubC9ItP+YpJvPtzEjJMafMIJmEkEBO2YRlH7LCBen6Ej5kSYOlbfR7Zu2xseLOEpAZhfElBY2Vg6idxPPFHghaHlK0dEpdnvMHxv5KY7FylMgtRfb0w8VWcl0NnqiNIB3tizAxEtTqPRqHR5Eq1jjYmTK2cZJZd/W9GiTfBr462io2bKmLEeuMoanwixDmjR2ZcjPGkLmoQY+Lgifb8MKTM+yUpu52759FEPvxQ8X1T4pDez8YbYuquBdJFVDEsl5X6h2Zar3v7K6W54p4sSeqflFDe+GKEUWYZhLVa0inWxsSLD8TOPu5lyxg1nrg2udlRn4QJ5P00TWbBTaPXiVEcCwuSe689/K0J2MvEUWiG+I6XZuzm/YKQx98j/JKROuaJ6RP0SoJOOo1PctpLoxIHqXlcMbdo6Q4J6z09IQZ2lcAqD7jCCrqx+txrA7sy7jiRvHVdnHb2J++chE7W0RUT1ioz8frXBsJCrG5RVgyLsO6lTlvHw2a/DzaA341uFD9zwgPYPist/EUWE09Cif68iVoAAVQuzV4OpsSBg9PHwLwrYJKJW4VGoHp1imh9CjXy0KlyzV712Ulugmcu8sQTVK4VMPPiVIh6YIRJ/05gMiUMgtqsvBOIsJd/WeI46s/B5pg6ulN8va9N1UOaRtSkTqfQYKbj77q4WGjy92z2qtEO4iGhR4SBPDTEE1O+NVG02Y3+X4ABAG1gB3y3vveWAAAAAElFTkSuQmCC)',
            position: "fixed"
        }).appendTo(qLoverlay);
        if (qLoptions.percentage == true) {
            qLpercentage = $("<div id='qLpercentage'></div>").text("0%").css({
                height: "40px",
                width: "100px",
                position: "absolute",
                fontSize: "3em",
                top: "50%",
                left: "50%",
                marginTop: "-" + (59 + qLoptions.barHeight) + "px",
                textAlign: "center",
                marginLeft: "-50px",
                color: qLoptions.barColor
            }).appendTo(qLoverlay);
        }
    };

    var findImageInElement = function(element) {
        var url = "";

        if ($(element).css("background-image") != "none") {
            var url = $(element).css("background-image");
        } else if (typeof($(element).attr("src")) != "undefined" && element.nodeName.toLowerCase() == "img") {
            var url = $(element).attr("src");
        }

        if (url.indexOf("gradient") == -1) {
            url = url.replace(/url\(\"/g, "");
            url = url.replace(/url\(/g, "");
            url = url.replace(/\"\)/g, "");
            url = url.replace(/\)/g, "");

            var urls = url.split(", ");

            for (var i = 0; i < urls.length; i++) {
                if (urls[i].length > 0 && qLimages.indexOf(urls[i]) == -1) {
                    var extra = "";
                    if ($.browser.msie && $.browser.version < 9) {
                        extra = "?" + Math.floor(Math.random() * 3000);
                    }
                    qLimages.push(urls[i] + extra);
                }
            }
        }
    }

    $.fn.queryLoader2 = function(options) {
        if (options) {
            $.extend(qLoptions, options);
        }

        qLimages = qLoptions.addAdditionalImages(qLimages);

        this.each(function() {
            findImageInElement(this);
            if (qLoptions.deepSearch == true) {
                $(this).find("*:not(script)").each(function() {
                    findImageInElement(this);
                });
            }
        });

        afterEach();

        return this;
    };

    $.preLoadImages = function(imageList, callback) {
        var pic = [],
            i, total, loaded = 0;
        if (typeof imageList != 'undefined') {
            if ($.isArray(imageList)) {
                total = imageList.length; // used later
                for (i = 0; i < total; i++) {
                    pic[i] = new Image();
                    pic[i].onload = function() {
                        loaded++; // should never hit a race condition due to JS's non-threaded nature
                        if (loaded == total) {
                            if ($.isFunction(callback)) {
                                callback();
                            }
                        }
                    };
                    pic[i].src = imageList[i];
                }
            } else {
                pic[0] = new Image();
                if ($.isFunction(callback)) {
                    pic[0].onload = callback;
                }
                pic[0].src = imageList;
            }
        } else if ($.isFunction(callback)) {
            //nothing passed but we have a callback.. so run this now
            //thanks to Evgeni Nobokov
            callback();
        }
        pic = undefined;
    };

})(jQuery);;
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function(x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function(x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function(x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function(x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function(x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function(x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function(x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    easeInOutBounce: function(x, t, b, c, d) {
        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
});;
/*!
 * jQuery Transit - CSS3 transitions and transformations
 * Copyright(c) 2011 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */
(function(d) {
    function k(a) {
        var b = ["Moz", "Webkit", "O", "ms"],
            c = a.charAt(0).toUpperCase() + a.substr(1);
        if (a in i.style) return a;
        for (a = 0; a < b.length; ++a) {
            var d = b[a] + c;
            if (d in i.style) return d
        }
    }

    function j(a) {
        "string" === typeof a && this.parse(a);
        return this
    }

    function p(a, b, c) {
        !0 === b ? a.queue(c) : b ? a.queue(b, c) : c()
    }

    function m(a) {
        var b = [];
        d.each(a, function(a) {
            a = d.camelCase(a);
            a = d.transit.propertyMap[a] || a;
            a = r(a); - 1 === d.inArray(a, b) && b.push(a)
        });
        return b
    }

    function q(a, b, c, e) {
        a = m(a);
        d.cssEase[c] && (c = d.cssEase[c]);
        var h = "" + n(b) + " " + c;
        0 < parseInt(e, 10) && (h += " " + n(e));
        var f = [];
        d.each(a, function(a, b) {
            f.push(b + " " + h)
        });
        return f.join(", ")
    }

    function f(a, b) {
        b || (d.cssNumber[a] = !0);
        d.transit.propertyMap[a] = e.transform;
        d.cssHooks[a] = {
            get: function(b) {
                return (d(b).css("transform") || new j).get(a)
            },
            set: function(b, e) {
                var h = d(b).css("transform") || new j;
                h.setFromString(a, e);
                d(b).css({
                    transform: h
                })
            }
        }
    }

    function r(a) {
        return a.replace(/([A-Z])/g, function(a) {
            return "-" + a.toLowerCase()
        })
    }

    function g(a, b) {
        return "string" === typeof a && !a.match(/^[\-0-9\.]+$/) ?
            a : "" + a + b
    }

    function n(a) {
        d.fx.speeds[a] && (a = d.fx.speeds[a]);
        return g(a, "ms")
    }
    d.transit = {
        version: "0.1.3",
        propertyMap: {
            marginLeft: "margin",
            marginRight: "margin",
            marginBottom: "margin",
            marginTop: "margin",
            paddingLeft: "padding",
            paddingRight: "padding",
            paddingBottom: "padding",
            paddingTop: "padding"
        },
        enabled: !0,
        useTransitionEnd: !1
    };
    var i = document.createElement("div"),
        e = {},
        s = -1 < navigator.userAgent.toLowerCase().indexOf("chrome");
    e.transition = k("transition");
    e.transitionDelay = k("transitionDelay");
    e.transform = k("transform");
    e.transformOrigin = k("transformOrigin");
    i.style[e.transform] = "";
    i.style[e.transform] = "rotateY(90deg)";
    e.transform3d = "" !== i.style[e.transform];
    d.extend(d.support, e);
    var o = e.transitionEnd = {
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            WebkitTransition: "webkitTransitionEnd",
            msTransition: "MSTransitionEnd"
        }[e.transition] || null,
        i = null;
    d.cssEase = {
        _default: "ease",
        "in": "ease-in",
        out: "ease-out",
        "in-out": "ease-in-out",
        snap: "cubic-bezier(0,1,.5,1)"
    };
    d.cssHooks.transform = {
        get: function(a) {
            return d(a).data("transform")
        },
        set: function(a, b) {
            var c = b;
            c instanceof j || (c = new j(c));
            a.style[e.transform] = "WebkitTransform" === e.transform && !s ? c.toString(!0) : c.toString();
            d(a).data("transform", c)
        }
    };
    d.cssHooks.transformOrigin = {
        get: function(a) {
            return a.style[e.transformOrigin]
        },
        set: function(a, b) {
            a.style[e.transformOrigin] = b
        }
    };
    d.cssHooks.transition = {
        get: function(a) {
            return a.style[e.transition]
        },
        set: function(a, b) {
            a.style[e.transition] = b
        }
    };
    f("scale");
    f("translate");
    f("rotate");
    f("rotateX");
    f("rotateY");
    f("rotate3d");
    f("perspective");
    f("skewX");
    f("skewY");
    f("x", !0);
    f("y", !0);
    j.prototype = {
        setFromString: function(a, b) {
            var c = "string" === typeof b ? b.split(",") : b.constructor === Array ? b : [b];
            c.unshift(a);
            j.prototype.set.apply(this, c)
        },
        set: function(a) {
            var b = Array.prototype.slice.apply(arguments, [1]);
            this.setter[a] ? this.setter[a].apply(this, b) : this[a] = b.join(",")
        },
        get: function(a) {
            return this.getter[a] ? this.getter[a].apply(this) : this[a] || 0
        },
        setter: {
            rotate: function(a) {
                this.rotate = g(a, "deg")
            },
            rotateX: function(a) {
                this.rotateX = g(a, "deg")
            },
            rotateY: function(a) {
                this.rotateY =
                    g(a, "deg")
            },
            scale: function(a, b) {
                void 0 === b && (b = a);
                this.scale = a + "," + b
            },
            skewX: function(a) {
                this.skewX = g(a, "deg")
            },
            skewY: function(a) {
                this.skewY = g(a, "deg")
            },
            perspective: function(a) {
                this.perspective = g(a, "px")
            },
            x: function(a) {
                this.set("translate", a, null)
            },
            y: function(a) {
                this.set("translate", null, a)
            },
            translate: function(a, b) {
                void 0 === this._translateX && (this._translateX = 0);
                void 0 === this._translateY && (this._translateY = 0);
                null !== a && (this._translateX = g(a, "px"));
                null !== b && (this._translateY = g(b, "px"));
                this.translate =
                    this._translateX + "," + this._translateY
            }
        },
        getter: {
            x: function() {
                return this._translateX || 0
            },
            y: function() {
                return this._translateY || 0
            },
            scale: function() {
                var a = (this.scale || "1,1").split(",");
                a[0] && (a[0] = parseFloat(a[0]));
                a[1] && (a[1] = parseFloat(a[1]));
                return a[0] === a[1] ? a[0] : a
            },
            rotate3d: function() {
                for (var a = (this.rotate3d || "0,0,0,0deg").split(","), b = 0; 3 >= b; ++b) a[b] && (a[b] = parseFloat(a[b]));
                a[3] && (a[3] = g(a[3], "deg"));
                return a
            }
        },
        parse: function(a) {
            var b = this;
            a.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(a, d,
                e) {
                b.setFromString(d, e)
            })
        },
        toString: function(a) {
            var b = [],
                c;
            for (c in this)
                if (this.hasOwnProperty(c) && (e.transform3d || !("rotateX" === c || "rotateY" === c || "perspective" === c || "transformOrigin" === c))) "_" !== c[0] && (a && "scale" === c ? b.push(c + "3d(" + this[c] + ",1)") : a && "translate" === c ? b.push(c + "3d(" + this[c] + ",0)") : b.push(c + "(" + this[c] + ")"));
            return b.join(" ")
        }
    };
    d.fn.transition = d.fn.transit = function(a, b, c, f) {
        var h = this,
            g = 0,
            i = !0;
        "function" === typeof b && (f = b, b = void 0);
        "function" === typeof c && (f = c, c = void 0);
        "undefined" !==
        typeof a.easing && (c = a.easing, delete a.easing);
        "undefined" !== typeof a.duration && (b = a.duration, delete a.duration);
        "undefined" !== typeof a.complete && (f = a.complete, delete a.complete);
        "undefined" !== typeof a.queue && (i = a.queue, delete a.queue);
        "undefined" !== typeof a.delay && (g = a.delay, delete a.delay);
        "undefined" === typeof b && (b = d.fx.speeds._default);
        "undefined" === typeof c && (c = d.cssEase._default);
        var b = n(b),
            j = q(a, b, c, g),
            l = d.transit.enabled && e.transition ? parseInt(b, 10) + parseInt(g, 10) : 0;
        if (0 === l) return p(h, i, function(b) {
            h.css(a);
            f && f.apply(h);
            b && b()
        }), h;
        var k = {},
            m = function(b) {
                var c = false,
                    g = function() {
                        c && h.unbind(o, g);
                        l > 0 && h.each(function() {
                            this.style[e.transition] = k[this] || null
                        });
                        typeof f === "function" && f.apply(h);
                        typeof b === "function" && b()
                    };
                if (l > 0 && o && d.transit.useTransitionEnd) {
                    c = true;
                    h.bind(o, g)
                } else window.setTimeout(g, l);
                h.each(function() {
                    l > 0 && (this.style[e.transition] = j);
                    d(this).css(a)
                })
            };
        p(h, i, function(a) {
            var b = 0;
            e.transition === "MozTransition" && b < 25 && (b = 25);
            window.setTimeout(function() {
                m(a)
            }, b)
        });
        return this
    };
    d.transit.getTransitionValue =
        q
})(jQuery);;
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function($) {

    var types = ['DOMMouseScroll', 'mousewheel'];

    if ($.event.fixHooks) {
        for (var i = types.length; i;) {
            $.event.fixHooks[types[--i]] = $.event.mouseHooks;
        }
    }

    $.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) {
                for (var i = types.length; i;) {
                    this.addEventListener(types[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
        },

        teardown: function() {
            if (this.removeEventListener) {
                for (var i = types.length; i;) {
                    this.removeEventListener(types[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        },

        unmousewheel: function(fn) {
            return this.unbind("mousewheel", fn);
        }
    });

    function handler(event) {
        var orgEvent = event || window.event,
            args = [].slice.call(arguments, 1),
            delta = 0,
            returnValue = true,
            deltaX = 0,
            deltaY = 0;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";

        // Old school scrollwheel delta
        if (orgEvent.wheelDelta) {
            delta = orgEvent.wheelDelta / 120;
        }
        if (orgEvent.detail) {
            delta = -orgEvent.detail / 3;
        }

        // New school multidimensional scroll (touchpads) deltas
        deltaY = delta;

        // Gecko
        if (orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaY = 0;
            deltaX = -1 * delta;
        }

        // Webkit
        if (orgEvent.wheelDeltaY !== undefined) {
            deltaY = orgEvent.wheelDeltaY / 120;
        }
        if (orgEvent.wheelDeltaX !== undefined) {
            deltaX = -1 * orgEvent.wheelDeltaX / 120;
        }

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

})(jQuery);

;
/*
 * jScrollPane - v2.0.0beta12 - 2012-09-27
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2010 Kelvin Luck
 * Dual licensed under the MIT or GPL licenses.
 */
(function(b, a, c) {
    b.fn.jScrollPane = function(e) {
        function d(D, O) {
            var ay, Q = this,
                Y, aj, v, al, T, Z, y, q, az, aE, au, i, I, h, j, aa, U, ap, X, t, A, aq, af, am, G, l, at, ax, x, av, aH, f, L, ai = true,
                P = true,
                aG = false,
                k = false,
                ao = D.clone(false, false).empty(),
                ac = b.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            aH = D.css("paddingTop") + " " + D.css("paddingRight") + " " + D.css("paddingBottom") + " " + D.css("paddingLeft");
            f = (parseInt(D.css("paddingLeft"), 10) || 0) + (parseInt(D.css("paddingRight"), 10) || 0);

            function ar(aQ) {
                var aL, aN, aM, aJ, aI, aP, aO = false,
                    aK = false;
                ay = aQ;
                if (Y === c) {
                    aI = D.scrollTop();
                    aP = D.scrollLeft();
                    D.css({
                        overflow: "hidden",
                        padding: 0
                    });
                    aj = D.innerWidth() + f;
                    v = D.innerHeight();
                    D.width(aj);
                    Y = b('<div class="jspPane" />').css("padding", aH).append(D.children());
                    al = b('<div class="jspContainer" />').css({
                        width: aj + "px",
                        height: v + "px"
                    }).append(Y).appendTo(D)
                } else {
                    D.css("width", "");
                    aO = ay.stickToBottom && K();
                    aK = ay.stickToRight && B();
                    aJ = D.innerWidth() + f != aj || D.outerHeight() != v;
                    if (aJ) {
                        aj = D.innerWidth() + f;
                        v = D.innerHeight();
                        al.css({
                            width: aj + "px",
                            height: v + "px"
                        })
                    }
                    if (!aJ && L == T && Y.outerHeight() == Z) {
                        D.width(aj);
                        return
                    }
                    L = T;
                    Y.css("width", "");
                    D.width(aj);
                    al.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                }
                Y.css("overflow", "auto");
                if (aQ.contentWidth) {
                    T = aQ.contentWidth
                } else {
                    T = Y[0].scrollWidth
                }
                Z = Y[0].scrollHeight;
                Y.css("overflow", "");
                y = T / aj;
                q = Z / v;
                az = q > 1;
                aE = y > 1;
                if (!(aE || az)) {
                    D.removeClass("jspScrollable");
                    Y.css({
                        top: 0,
                        width: al.width() - f
                    });
                    n();
                    E();
                    R();
                    w()
                } else {
                    D.addClass("jspScrollable");
                    aL = ay.maintainPosition && (I || aa);
                    if (aL) {
                        aN = aC();
                        aM = aA()
                    }
                    aF();
                    z();
                    F();
                    if (aL) {
                        N(aK ? (T - aj) : aN, false);
                        M(aO ? (Z - v) : aM, false)
                    }
                    J();
                    ag();
                    an();
                    if (ay.enableKeyboardNavigation) {
                        S()
                    }
                    if (ay.clickOnTrack) {
                        p()
                    }
                    C();
                    if (ay.hijackInternalLinks) {
                        m()
                    }
                }
                if (ay.autoReinitialise && !av) {
                    av = setInterval(function() {
                        ar(ay)
                    }, ay.autoReinitialiseDelay)
                } else {
                    if (!ay.autoReinitialise && av) {
                        clearInterval(av)
                    }
                }
                aI && D.scrollTop(0) && M(aI, false);
                aP && D.scrollLeft(0) && N(aP, false);
                D.trigger("jsp-initialised", [aE || az])
            }

            function aF() {
                if (az) {
                    al.append(b('<div class="jspVerticalBar" />').append(b('<div class="jspCap jspCapTop" />'), b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragTop" />'), b('<div class="jspDragBottom" />'))), b('<div class="jspCap jspCapBottom" />')));
                    U = al.find(">.jspVerticalBar");
                    ap = U.find(">.jspTrack");
                    au = ap.find(">.jspDrag");
                    if (ay.showArrows) {
                        aq = b('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", aD(0, -1)).bind("click.jsp", aB);
                        af = b('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", aD(0, 1)).bind("click.jsp", aB);
                        if (ay.arrowScrollOnHover) {
                            aq.bind("mouseover.jsp", aD(0, -1, aq));
                            af.bind("mouseover.jsp", aD(0, 1, af))
                        }
                        ak(ap, ay.verticalArrowPositions, aq, af)
                    }
                    t = v;
                    al.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
                        t -= b(this).outerHeight()
                    });
                    au.hover(function() {
                        au.addClass("jspHover")
                    }, function() {
                        au.removeClass("jspHover")
                    }).bind("mousedown.jsp", function(aI) {
                        b("html").bind("dragstart.jsp selectstart.jsp", aB);
                        au.addClass("jspActive");
                        var s = aI.pageY - au.position().top;
                        b("html").bind("mousemove.jsp", function(aJ) {
                            V(aJ.pageY - s, false)
                        }).bind("mouseup.jsp mouseleave.jsp", aw);
                        return false
                    });
                    o()
                }
            }

            function o() {
                ap.height(t + "px");
                I = 0;
                X = ay.verticalGutter + ap.outerWidth();
                Y.width(aj - X - f);
                try {
                    if (U.position().left === 0) {
                        Y.css("margin-left", X + "px")
                    }
                } catch (s) {}
            }

            function z() {
                if (aE) {
                    al.append(b('<div class="jspHorizontalBar" />').append(b('<div class="jspCap jspCapLeft" />'), b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragLeft" />'), b('<div class="jspDragRight" />'))), b('<div class="jspCap jspCapRight" />')));
                    am = al.find(">.jspHorizontalBar");
                    G = am.find(">.jspTrack");
                    h = G.find(">.jspDrag");
                    if (ay.showArrows) {
                        ax = b('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", aD(-1, 0)).bind("click.jsp", aB);
                        x = b('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", aD(1, 0)).bind("click.jsp", aB);
                        if (ay.arrowScrollOnHover) {
                            ax.bind("mouseover.jsp", aD(-1, 0, ax));
                            x.bind("mouseover.jsp", aD(1, 0, x))
                        }
                        ak(G, ay.horizontalArrowPositions, ax, x)
                    }
                    h.hover(function() {
                        h.addClass("jspHover")
                    }, function() {
                        h.removeClass("jspHover")
                    }).bind("mousedown.jsp", function(aI) {
                        b("html").bind("dragstart.jsp selectstart.jsp", aB);
                        h.addClass("jspActive");
                        var s = aI.pageX - h.position().left;
                        b("html").bind("mousemove.jsp", function(aJ) {
                            W(aJ.pageX - s, false)
                        }).bind("mouseup.jsp mouseleave.jsp", aw);
                        return false
                    });
                    l = al.innerWidth();
                    ah()
                }
            }

            function ah() {
                al.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
                    l -= b(this).outerWidth()
                });
                G.width(l + "px");
                aa = 0
            }

            function F() {
                if (aE && az) {
                    var aI = G.outerHeight(),
                        s = ap.outerWidth();
                    t -= aI;
                    b(am).find(">.jspCap:visible,>.jspArrow").each(function() {
                        l += b(this).outerWidth()
                    });
                    l -= s;
                    v -= s;
                    aj -= aI;
                    G.parent().append(b('<div class="jspCorner" />').css("width", aI + "px"));
                    o();
                    ah()
                }
                if (aE) {
                    Y.width((al.outerWidth() - f) + "px")
                }
                Z = Y.outerHeight();
                q = Z / v;
                if (aE) {
                    at = Math.ceil(1 / y * l);
                    if (at > ay.horizontalDragMaxWidth) {
                        at = ay.horizontalDragMaxWidth
                    } else {
                        if (at < ay.horizontalDragMinWidth) {
                            at = ay.horizontalDragMinWidth
                        }
                    }
                    h.width(at + "px");
                    j = l - at;
                    ae(aa)
                }
                if (az) {
                    A = Math.ceil(1 / q * t);
                    if (A > ay.verticalDragMaxHeight) {
                        A = ay.verticalDragMaxHeight
                    } else {
                        if (A < ay.verticalDragMinHeight) {
                            A = ay.verticalDragMinHeight
                        }
                    }
                    au.height(A + "px");
                    i = t - A;
                    ad(I)
                }
            }

            function ak(aJ, aL, aI, s) {
                var aN = "before",
                    aK = "after",
                    aM;
                if (aL == "os") {
                    aL = /Mac/.test(navigator.platform) ? "after" : "split"
                }
                if (aL == aN) {
                    aK = aL
                } else {
                    if (aL == aK) {
                        aN = aL;
                        aM = aI;
                        aI = s;
                        s = aM
                    }
                }
                aJ[aN](aI)[aK](s)
            }

            function aD(aI, s, aJ) {
                return function() {
                    H(aI, s, this, aJ);
                    this.blur();
                    return false
                }
            }

            function H(aL, aK, aO, aN) {
                aO = b(aO).addClass("jspActive");
                var aM, aJ, aI = true,
                    s = function() {
                        if (aL !== 0) {
                            Q.scrollByX(aL * ay.arrowButtonSpeed)
                        }
                        if (aK !== 0) {
                            Q.scrollByY(aK * ay.arrowButtonSpeed)
                        }
                        aJ = setTimeout(s, aI ? ay.initialDelay : ay.arrowRepeatFreq);
                        aI = false
                    };
                s();
                aM = aN ? "mouseout.jsp" : "mouseup.jsp";
                aN = aN || b("html");
                aN.bind(aM, function() {
                    aO.removeClass("jspActive");
                    aJ && clearTimeout(aJ);
                    aJ = null;
                    aN.unbind(aM)
                })
            }

            function p() {
                w();
                if (az) {
                    ap.bind("mousedown.jsp", function(aN) {
                        if (aN.originalTarget === c || aN.originalTarget == aN.currentTarget) {
                            var aL = b(this),
                                aO = aL.offset(),
                                aM = aN.pageY - aO.top - I,
                                aJ, aI = true,
                                s = function() {
                                    var aR = aL.offset(),
                                        aS = aN.pageY - aR.top - A / 2,
                                        aP = v * ay.scrollPagePercent,
                                        aQ = i * aP / (Z - v);
                                    if (aM < 0) {
                                        if (I - aQ > aS) {
                                            Q.scrollByY(-aP)
                                        } else {
                                            V(aS)
                                        }
                                    } else {
                                        if (aM > 0) {
                                            if (I + aQ < aS) {
                                                Q.scrollByY(aP)
                                            } else {
                                                V(aS)
                                            }
                                        } else {
                                            aK();
                                            return
                                        }
                                    }
                                    aJ = setTimeout(s, aI ? ay.initialDelay : ay.trackClickRepeatFreq);
                                    aI = false
                                },
                                aK = function() {
                                    aJ && clearTimeout(aJ);
                                    aJ = null;
                                    b(document).unbind("mouseup.jsp", aK)
                                };
                            s();
                            b(document).bind("mouseup.jsp", aK);
                            return false
                        }
                    })
                }
                if (aE) {
                    G.bind("mousedown.jsp", function(aN) {
                        if (aN.originalTarget === c || aN.originalTarget == aN.currentTarget) {
                            var aL = b(this),
                                aO = aL.offset(),
                                aM = aN.pageX - aO.left - aa,
                                aJ, aI = true,
                                s = function() {
                                    var aR = aL.offset(),
                                        aS = aN.pageX - aR.left - at / 2,
                                        aP = aj * ay.scrollPagePercent,
                                        aQ = j * aP / (T - aj);
                                    if (aM < 0) {
                                        if (aa - aQ > aS) {
                                            Q.scrollByX(-aP)
                                        } else {
                                            W(aS)
                                        }
                                    } else {
                                        if (aM > 0) {
                                            if (aa + aQ < aS) {
                                                Q.scrollByX(aP)
                                            } else {
                                                W(aS)
                                            }
                                        } else {
                                            aK();
                                            return
                                        }
                                    }
                                    aJ = setTimeout(s, aI ? ay.initialDelay : ay.trackClickRepeatFreq);
                                    aI = false
                                },
                                aK = function() {
                                    aJ && clearTimeout(aJ);
                                    aJ = null;
                                    b(document).unbind("mouseup.jsp", aK)
                                };
                            s();
                            b(document).bind("mouseup.jsp", aK);
                            return false
                        }
                    })
                }
            }

            function w() {
                if (G) {
                    G.unbind("mousedown.jsp")
                }
                if (ap) {
                    ap.unbind("mousedown.jsp")
                }
            }

            function aw() {
                b("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");
                if (au) {
                    au.removeClass("jspActive")
                }
                if (h) {
                    h.removeClass("jspActive")
                }
            }

            function V(s, aI) {
                if (!az) {
                    return
                }
                if (s < 0) {
                    s = 0
                } else {
                    if (s > i) {
                        s = i
                    }
                }
                if (aI === c) {
                    aI = ay.animateScroll
                }
                if (aI) {
                    Q.animate(au, "top", s, ad)
                } else {
                    au.css("top", s);
                    ad(s)
                }
            }

            function ad(aI) {
                if (aI === c) {
                    aI = au.position().top
                }
                al.scrollTop(0);
                I = aI;
                var aL = I === 0,
                    aJ = I == i,
                    aK = aI / i,
                    s = -aK * (Z - v);
                if (ai != aL || aG != aJ) {
                    ai = aL;
                    aG = aJ;
                    D.trigger("jsp-arrow-change", [ai, aG, P, k])
                }
                u(aL, aJ);
                Y.css("top", s);
                D.trigger("jsp-scroll-y", [-s, aL, aJ]).trigger("scroll")
            }

            function W(aI, s) {
                if (!aE) {
                    return
                }
                if (aI < 0) {
                    aI = 0
                } else {
                    if (aI > j) {
                        aI = j
                    }
                }
                if (s === c) {
                    s = ay.animateScroll
                }
                if (s) {
                    Q.animate(h, "left", aI, ae)
                } else {
                    h.css("left", aI);
                    ae(aI)
                }
            }

            function ae(aI) {
                if (aI === c) {
                    aI = h.position().left
                }
                al.scrollTop(0);
                aa = aI;
                var aL = aa === 0,
                    aK = aa == j,
                    aJ = aI / j,
                    s = -aJ * (T - aj);
                if (P != aL || k != aK) {
                    P = aL;
                    k = aK;
                    D.trigger("jsp-arrow-change", [ai, aG, P, k])
                }
                r(aL, aK);
                Y.css("left", s);
                D.trigger("jsp-scroll-x", [-s, aL, aK]).trigger("scroll")
            }

            function u(aI, s) {
                if (ay.showArrows) {
                    aq[aI ? "addClass" : "removeClass"]("jspDisabled");
                    af[s ? "addClass" : "removeClass"]("jspDisabled")
                }
            }

            function r(aI, s) {
                if (ay.showArrows) {
                    ax[aI ? "addClass" : "removeClass"]("jspDisabled");
                    x[s ? "addClass" : "removeClass"]("jspDisabled")
                }
            }

            function M(s, aI) {
                var aJ = s / (Z - v);
                V(aJ * i, aI)
            }

            function N(aI, s) {
                var aJ = aI / (T - aj);
                W(aJ * j, s)
            }

            function ab(aV, aQ, aJ) {
                var aN, aK, aL, s = 0,
                    aU = 0,
                    aI, aP, aO, aS, aR, aT;
                try {
                    aN = b(aV)
                } catch (aM) {
                    return
                }
                aK = aN.outerHeight();
                aL = aN.outerWidth();
                al.scrollTop(0);
                al.scrollLeft(0);
                while (!aN.is(".jspPane")) {
                    s += aN.position().top;
                    aU += aN.position().left;
                    aN = aN.offsetParent();
                    if (/^body|html$/i.test(aN[0].nodeName)) {
                        return
                    }
                }
                aI = aA();
                aO = aI + v;
                if (s < aI || aQ) {
                    aR = s - ay.verticalGutter
                } else {
                    if (s + aK > aO) {
                        aR = s - v + aK + ay.verticalGutter
                    }
                }
                if (aR) {
                    M(aR, aJ)
                }
                aP = aC();
                aS = aP + aj;
                if (aU < aP || aQ) {
                    aT = aU - ay.horizontalGutter
                } else {
                    if (aU + aL > aS) {
                        aT = aU - aj + aL + ay.horizontalGutter
                    }
                }
                if (aT) {
                    N(aT, aJ)
                }
            }

            function aC() {
                return -Y.position().left
            }

            function aA() {
                return -Y.position().top
            }

            function K() {
                var s = Z - v;
                return (s > 20) && (s - aA() < 10)
            }

            function B() {
                var s = T - aj;
                return (s > 20) && (s - aC() < 10)
            }

            function ag() {
                al.unbind(ac).bind(ac, function(aL, aM, aK, aI) {
                    var aJ = aa,
                        s = I;
                    Q.scrollBy(aK * ay.mouseWheelSpeed, -aI * ay.mouseWheelSpeed, false);
                    return aJ == aa && s == I
                })
            }

            function n() {
                al.unbind(ac)
            }

            function aB() {
                return false
            }

            function J() {
                Y.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function(s) {
                    ab(s.target, false)
                })
            }

            function E() {
                Y.find(":input,a").unbind("focus.jsp")
            }

            function S() {
                var s, aI, aK = [];
                aE && aK.push(am[0]);
                az && aK.push(U[0]);
                Y.focus(function() {
                    D.focus()
                });
                D.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function(aN) {
                    if (aN.target !== this && !(aK.length && b(aN.target).closest(aK).length)) {
                        return
                    }
                    var aM = aa,
                        aL = I;
                    switch (aN.keyCode) {
                        case 40:
                        case 38:
                        case 34:
                        case 32:
                        case 33:
                        case 39:
                        case 37:
                            s = aN.keyCode;
                            aJ();
                            break;
                        case 35:
                            M(Z - v);
                            s = null;
                            break;
                        case 36:
                            M(0);
                            s = null;
                            break
                    }
                    aI = aN.keyCode == s && aM != aa || aL != I;
                    return !aI
                }).bind("keypress.jsp", function(aL) {
                    if (aL.keyCode == s) {
                        aJ()
                    }
                    return !aI
                });
                if (ay.hideFocus) {
                    D.css("outline", "none");
                    if ("hideFocus" in al[0]) {
                        D.attr("hideFocus", true)
                    }
                } else {
                    D.css("outline", "");
                    if ("hideFocus" in al[0]) {
                        D.attr("hideFocus", false)
                    }
                }

                function aJ() {
                    var aM = aa,
                        aL = I;
                    switch (s) {
                        case 40:
                            Q.scrollByY(ay.keyboardSpeed, false);
                            break;
                        case 38:
                            Q.scrollByY(-ay.keyboardSpeed, false);
                            break;
                        case 34:
                        case 32:
                            Q.scrollByY(v * ay.scrollPagePercent, false);
                            break;
                        case 33:
                            Q.scrollByY(-v * ay.scrollPagePercent, false);
                            break;
                        case 39:
                            Q.scrollByX(ay.keyboardSpeed, false);
                            break;
                        case 37:
                            Q.scrollByX(-ay.keyboardSpeed, false);
                            break
                    }
                    aI = aM != aa || aL != I;
                    return aI
                }
            }

            function R() {
                D.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")
            }

            function C() {
                if (location.hash && location.hash.length > 1) {
                    var aK, aI, aJ = escape(location.hash.substr(1));
                    try {
                        aK = b("#" + aJ + ', a[name="' + aJ + '"]')
                    } catch (s) {
                        return
                    }
                    if (aK.length && Y.find(aJ)) {
                        if (al.scrollTop() === 0) {
                            aI = setInterval(function() {
                                if (al.scrollTop() > 0) {
                                    ab(aK, true);
                                    b(document).scrollTop(al.position().top);
                                    clearInterval(aI)
                                }
                            }, 50)
                        } else {
                            ab(aK, true);
                            b(document).scrollTop(al.position().top)
                        }
                    }
                }
            }

            function m() {
                if (b(document.body).data("jspHijack")) {
                    return
                }
                b(document.body).data("jspHijack", true);
                b(document.body).delegate("a[href*=#]", "click", function(s) {
                    var aI = this.href.substr(0, this.href.indexOf("#")),
                        aK = location.href,
                        aO, aP, aJ, aM, aL, aN;
                    if (location.href.indexOf("#") !== -1) {
                        aK = location.href.substr(0, location.href.indexOf("#"))
                    }
                    if (aI !== aK) {
                        return
                    }
                    aO = escape(this.href.substr(this.href.indexOf("#") + 1));
                    aP;
                    try {
                        aP = b("#" + aO + ', a[name="' + aO + '"]')
                    } catch (aQ) {
                        return
                    }
                    if (!aP.length) {
                        return
                    }
                    aJ = aP.closest(".jspScrollable");
                    aM = aJ.data("jsp");
                    aM.scrollToElement(aP, true);
                    if (aJ[0].scrollIntoView) {
                        aL = b(a).scrollTop();
                        aN = aP.offset().top;
                        if (aN < aL || aN > aL + b(a).height()) {
                            aJ[0].scrollIntoView()
                        }
                    }
                    s.preventDefault()
                })
            }

            function an() {
                var aJ, aI, aL, aK, aM, s = false;
                al.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function(aN) {
                    var aO = aN.originalEvent.touches[0];
                    aJ = aC();
                    aI = aA();
                    aL = aO.pageX;
                    aK = aO.pageY;
                    aM = false;
                    s = true
                }).bind("touchmove.jsp", function(aQ) {
                    if (!s) {
                        return
                    }
                    var aP = aQ.originalEvent.touches[0],
                        aO = aa,
                        aN = I;
                    Q.scrollTo(aJ + aL - aP.pageX, aI + aK - aP.pageY);
                    aM = aM || Math.abs(aL - aP.pageX) > 5 || Math.abs(aK - aP.pageY) > 5;
                    return aO == aa && aN == I
                }).bind("touchend.jsp", function(aN) {
                    s = false
                }).bind("click.jsp-touchclick", function(aN) {
                    if (aM) {
                        aM = false;
                        return false
                    }
                })
            }

            function g() {
                var s = aA(),
                    aI = aC();
                D.removeClass("jspScrollable").unbind(".jsp");
                D.replaceWith(ao.append(Y.children()));
                ao.scrollTop(s);
                ao.scrollLeft(aI);
                if (av) {
                    clearInterval(av)
                }
            }
            b.extend(Q, {
                reinitialise: function(aI) {
                    aI = b.extend({}, ay, aI);
                    ar(aI)
                },
                scrollToElement: function(aJ, aI, s) {
                    ab(aJ, aI, s)
                },
                scrollTo: function(aJ, s, aI) {
                    N(aJ, aI);
                    M(s, aI)
                },
                scrollToX: function(aI, s) {
                    N(aI, s)
                },
                scrollToY: function(s, aI) {
                    M(s, aI)
                },
                scrollToPercentX: function(aI, s) {
                    N(aI * (T - aj), s)
                },
                scrollToPercentY: function(aI, s) {
                    M(aI * (Z - v), s)
                },
                scrollBy: function(aI, s, aJ) {
                    Q.scrollByX(aI, aJ);
                    Q.scrollByY(s, aJ)
                },
                scrollByX: function(s, aJ) {
                    var aI = aC() + Math[s < 0 ? "floor" : "ceil"](s),
                        aK = aI / (T - aj);
                    W(aK * j, aJ)
                },
                scrollByY: function(s, aJ) {
                    var aI = aA() + Math[s < 0 ? "floor" : "ceil"](s),
                        aK = aI / (Z - v);
                    V(aK * i, aJ)
                },
                positionDragX: function(s, aI) {
                    W(s, aI)
                },
                positionDragY: function(aI, s) {
                    V(aI, s)
                },
                animate: function(aI, aL, s, aK) {
                    var aJ = {};
                    aJ[aL] = s;
                    aI.animate(aJ, {
                        duration: ay.animateDuration,
                        easing: ay.animateEase,
                        queue: false,
                        step: aK
                    })
                },
                getContentPositionX: function() {
                    return aC()
                },
                getContentPositionY: function() {
                    return aA()
                },
                getContentWidth: function() {
                    return T
                },
                getContentHeight: function() {
                    return Z
                },
                getPercentScrolledX: function() {
                    return aC() / (T - aj)
                },
                getPercentScrolledY: function() {
                    return aA() / (Z - v)
                },
                getIsScrollableH: function() {
                    return aE
                },
                getIsScrollableV: function() {
                    return az
                },
                getContentPane: function() {
                    return Y
                },
                scrollToBottom: function(s) {
                    V(i, s)
                },
                hijackInternalLinks: b.noop,
                destroy: function() {
                    g()
                }
            });
            ar(O)
        }
        e = b.extend({}, b.fn.jScrollPane.defaults, e);
        b.each(["mouseWheelSpeed", "arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function() {
            e[this] = e[this] || e.speed
        });
        return this.each(function() {
            var f = b(this),
                g = f.data("jsp");
            if (g) {
                g.reinitialise(e)
            } else {
                b("script", f).filter('[type="text/javascript"],:not([type])').remove();
                g = new d(f, e);
                f.data("jsp", g)
            }
        })
    };
    b.fn.jScrollPane.defaults = {
        showArrows: false,
        maintainPosition: true,
        stickToBottom: false,
        stickToRight: false,
        clickOnTrack: true,
        autoReinitialise: false,
        autoReinitialiseDelay: 500,
        verticalDragMinHeight: 0,
        verticalDragMaxHeight: 99999,
        horizontalDragMinWidth: 0,
        horizontalDragMaxWidth: 99999,
        contentWidth: c,
        animateScroll: false,
        animateDuration: 300,
        animateEase: "linear",
        hijackInternalLinks: false,
        verticalGutter: 4,
        horizontalGutter: 4,
        mouseWheelSpeed: 0,
        arrowButtonSpeed: 0,
        arrowRepeatFreq: 50,
        arrowScrollOnHover: false,
        trackClickSpeed: 0,
        trackClickRepeatFreq: 70,
        verticalArrowPositions: "split",
        horizontalArrowPositions: "split",
        enableKeyboardNavigation: true,
        hideFocus: false,
        keyboardSpeed: 0,
        initialDelay: 300,
        speed: 30,
        scrollPagePercent: 0.8
    }
})(jQuery, this);; /*! fancyBox v2.1.3 fancyapps.com | fancyapps.com/fancybox/#license */
(function(B, x, f, q) {
    var r = f(B),
        m = f(x),
        b = f.fancybox = function() {
            b.open.apply(this, arguments)
        },
        u = null,
        n = x.createTouch !== q,
        s = function(a) {
            return a && a.hasOwnProperty && a instanceof f
        },
        p = function(a) {
            return a && "string" === f.type(a)
        },
        E = function(a) {
            return p(a) && 0 < a.indexOf("%")
        },
        k = function(a, d) {
            var e = parseInt(a, 10) || 0;
            d && E(a) && (e *= b.getViewport()[d] / 100);
            return Math.ceil(e)
        },
        v = function(a, b) {
            return k(a, b) + "px"
        };
    f.extend(b, {
        version: "2.1.3",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !n,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: 0.5,
            leftRatio: 0.5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3E3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
                    (f.browser.msie ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: !0,
                title: !0
            },
            onCancel: f.noop,
            beforeLoad: f.noop,
            afterLoad: f.noop,
            beforeShow: f.noop,
            afterShow: f.noop,
            beforeChange: f.noop,
            beforeClose: f.noop,
            afterClose: f.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(a, d) {
            if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = s(a) ? f(a).get() : [a]), f.each(a, function(e, c) {
                var j = {},
                    g, h, i, l, k;
                "object" === f.type(c) && (c.nodeType && (c = f(c)), s(c) ? (j = {
                    href: c.data("fancybox-href") || c.attr("href"),
                    title: c.data("fancybox-title") || c.attr("title"),
                    isDom: !0,
                    element: c
                }, f.metadata && f.extend(!0,
                    j, c.metadata())) : j = c);
                g = d.href || j.href || (p(c) ? c : null);
                h = d.title !== q ? d.title : j.title || "";
                l = (i = d.content || j.content) ? "html" : d.type || j.type;
                !l && j.isDom && (l = c.data("fancybox-type"), l || (l = (l = c.prop("class").match(/fancybox\.(\w+)/)) ? l[1] : null));
                p(g) && (l || (b.isImage(g) ? l = "image" : b.isSWF(g) ? l = "swf" : "#" === g.charAt(0) ? l = "inline" : p(c) && (l = "html", i = c)), "ajax" === l && (k = g.split(/\s+/, 2), g = k.shift(), k = k.shift()));
                i || ("inline" === l ? g ? i = f(p(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : j.isDom && (i = c) : "html" === l ? i = g : !l && (!g &&
                    j.isDom) && (l = "inline", i = c));
                f.extend(j, {
                    href: g,
                    type: l,
                    content: i,
                    title: h,
                    selector: k
                });
                a[e] = j
            }), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== q && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index)
        },
        cancel: function() {
            var a = b.coming;
            a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current ||
                b._afterZoomOut(a))
        },
        close: function(a) {
            b.cancel();
            !1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()) : (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]())))
        },
        play: function(a) {
            var d = function() {
                    clearTimeout(b.player.timer)
                },
                e = function() {
                    d();
                    b.current && b.player.isActive && (b.player.timer =
                        setTimeout(b.next, b.current.playSpeed))
                },
                c = function() {
                    d();
                    f("body").unbind(".player");
                    b.player.isActive = !1;
                    b.trigger("onPlayEnd")
                };
            if (!0 === a || !b.player.isActive && !1 !== a) {
                if (b.current && (b.current.loop || b.current.index < b.group.length - 1)) b.player.isActive = !0, f("body").bind({
                    "afterShow.player onUpdate.player": e,
                    "onCancel.player beforeClose.player": c,
                    "beforeLoad.player": d
                }), e(), b.trigger("onPlayStart")
            } else c()
        },
        next: function(a) {
            var d = b.current;
            d && (p(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"))
        },
        prev: function(a) {
            var d = b.current;
            d && (p(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"))
        },
        jumpto: function(a, d, e) {
            var c = b.current;
            c && (a = k(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== q && (b.cancel(), b._start(a)))
        },
        reposition: function(a, d) {
            var e = b.current,
                c = e ? e.wrap : null,
                j;
            c && (j = b._getPosition(d), a && "scroll" === a.type ? (delete j.position, c.stop(!0, !0).animate(j, 200)) : (c.css(j), e.pos = f.extend({},
                e.dim, j)))
        },
        update: function(a) {
            var d = a && a.type,
                e = !d || "orientationchange" === d;
            e && (clearTimeout(u), u = null);
            b.isOpen && !u && (u = setTimeout(function() {
                var c = b.current;
                c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), u = null)
            }, e && !n ? 0 : 300))
        },
        toggle: function(a) {
            b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, n && (b.wrap.removeAttr("style").addClass("fancybox-tmp"),
                b.trigger("onUpdate")), b.update())
        },
        hideLoading: function() {
            m.unbind(".loading");
            f("#fancybox-loading").remove()
        },
        showLoading: function() {
            var a, d;
            b.hideLoading();
            a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");
            m.bind("keydown.loading", function(a) {
                if (27 === (a.which || a.keyCode)) a.preventDefault(), b.cancel()
            });
            b.defaults.fixed || (d = b.getViewport(), a.css({
                position: "absolute",
                top: 0.5 * d.h + d.y,
                left: 0.5 * d.w + d.x
            }))
        },
        getViewport: function() {
            var a = b.current && b.current.locked ||
                !1,
                d = {
                    x: r.scrollLeft(),
                    y: r.scrollTop()
                };
            a ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = n && B.innerWidth ? B.innerWidth : r.width(), d.h = n && B.innerHeight ? B.innerHeight : r.height());
            return d
        },
        unbindEvents: function() {
            b.wrap && s(b.wrap) && b.wrap.unbind(".fb");
            m.unbind(".fb");
            r.unbind(".fb")
        },
        bindEvents: function() {
            var a = b.current,
                d;
            a && (r.bind("orientationchange.fb" + (n ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && m.bind("keydown.fb", function(e) {
                var c = e.which || e.keyCode,
                    j =
                    e.target || e.srcElement;
                if (27 === c && b.coming) return !1;
                !e.ctrlKey && (!e.altKey && !e.shiftKey && !e.metaKey && (!j || !j.type && !f(j).is("[contenteditable]"))) && f.each(d, function(d, j) {
                    if (1 < a.group.length && j[c] !== q) return b[d](j[c]), e.preventDefault(), !1;
                    if (-1 < f.inArray(c, j)) return b[d](), e.preventDefault(), !1
                })
            }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function(d, c, j, g) {
                for (var h = f(d.target || null), i = !1; h.length && !i && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");) i = h[0] && !(h[0].style.overflow &&
                    "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
                if (0 !== c && !i && 1 < b.group.length && !a.canShrink) {
                    if (0 < g || 0 < j) b.prev(0 < g ? "down" : "left");
                    else if (0 > g || 0 > j) b.next(0 > g ? "up" : "right");
                    d.preventDefault()
                }
            }))
        },
        trigger: function(a, d) {
            var e, c = d || b.coming || b.current;
            if (c) {
                f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
                if (!1 === e) return !1;
                c.helpers && f.each(c.helpers, function(d,
                    e) {
                    e && (b.helpers[d] && f.isFunction(b.helpers[d][a])) && (e = f.extend(!0, {}, b.helpers[d].defaults, e), b.helpers[d][a](e, c))
                });
                f.event.trigger(a + ".fb")
            }
        },
        isImage: function(a) {
            return p(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i)
        },
        isSWF: function(a) {
            return p(a) && a.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function(a) {
            var d = {},
                e, c, a = k(a);
            e = b.group[a] || null;
            if (!e) return !1;
            d = f.extend(!0, {}, b.opts, e);
            e = d.margin;
            c = d.padding;
            "number" === f.type(e) && (d.margin = [e, e, e, e]);
            "number" === f.type(c) &&
                (d.padding = [c, c, c, c]);
            d.modal && f.extend(!0, d, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {
                    overlay: {
                        closeClick: !1
                    }
                }
            });
            d.autoSize && (d.autoWidth = d.autoHeight = !0);
            "auto" === d.width && (d.autoWidth = !0);
            "auto" === d.height && (d.autoHeight = !0);
            d.group = b.group;
            d.index = a;
            b.coming = d;
            if (!1 === b.trigger("beforeLoad")) b.coming = null;
            else {
                c = d.type;
                e = d.href;
                if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
                b.isActive = !0;
                if ("image" === c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";
                "image" === c && (d.aspectRatio = !0);
                "iframe" === c && n && (d.scrolling = "scroll");
                d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (n ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
                f.extend(d, {
                    skin: f(".fancybox-skin", d.wrap),
                    outer: f(".fancybox-outer", d.wrap),
                    inner: f(".fancybox-inner", d.wrap)
                });
                f.each(["Top", "Right", "Bottom", "Left"], function(a, b) {
                    d.skin.css("padding" + b, v(d.padding[a]))
                });
                b.trigger("onReady");
                if ("inline" === c || "html" === c) {
                    if (!d.content || !d.content.length) return b._error("content")
                } else if (!e) return b._error("href");
                "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
            }
        },
        _error: function(a) {
            f.extend(b.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: a,
                content: b.coming.tpl.error
            });
            b._afterLoad()
        },
        _loadImage: function() {
            var a = b.imgPreload = new Image;
            a.onload = function() {
                this.onload = this.onerror = null;
                b.coming.width =
                    this.width;
                b.coming.height = this.height;
                b._afterLoad()
            };
            a.onerror = function() {
                this.onload = this.onerror = null;
                b._error("image")
            };
            a.src = b.coming.href;
            !0 !== a.complete && b.showLoading()
        },
        _loadAjax: function() {
            var a = b.coming;
            b.showLoading();
            b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
                url: a.href,
                error: function(a, e) {
                    b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading()
                },
                success: function(d, e) {
                    "success" === e && (a.content = d, b._afterLoad())
                }
            }))
        },
        _loadIframe: function() {
            var a = b.coming,
                d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", n ? "auto" : a.iframe.scrolling).attr("src", a.href);
            f(a.wrap).bind("onReset", function() {
                try {
                    f(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (a) {}
            });
            a.iframe.preload && (b.showLoading(), d.one("load", function() {
                f(this).data("ready", 1);
                n || f(this).bind("load.fb", b.update);
                f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                b._afterLoad()
            }));
            a.content = d.appendTo(a.inner);
            a.iframe.preload || b._afterLoad()
        },
        _preloadImages: function() {
            var a =
                b.group,
                d = b.current,
                e = a.length,
                c = d.preload ? Math.min(d.preload, e - 1) : 0,
                f, g;
            for (g = 1; g <= c; g += 1) f = a[(d.index + g) % e], "image" === f.type && f.href && ((new Image).src = f.href)
        },
        _afterLoad: function() {
            var a = b.coming,
                d = b.current,
                e, c, j, g, h;
            b.hideLoading();
            if (a && !1 !== b.isActive)
                if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null;
                else {
                    d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
                    b.unbindEvents();
                    e = a.content;
                    c = a.type;
                    j = a.scrolling;
                    f.extend(b, {
                        wrap: a.wrap,
                        skin: a.skin,
                        outer: a.outer,
                        inner: a.inner,
                        current: a,
                        previous: d
                    });
                    g = a.href;
                    switch (c) {
                        case "inline":
                        case "ajax":
                        case "html":
                            a.selector ? e = f("<div>").html(e).find(a.selector) : s(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function() {
                                f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                            }));
                            break;
                        case "image":
                            e = a.tpl.image.replace("{href}", g);
                            break;
                        case "swf":
                            e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function(a, b) {
                                e += '<param name="' + a + '" value="' + b + '"></param>';
                                h += " " + a + '="' + b + '"'
                            }), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>"
                    }(!s(e) || !e.parent().is(a.inner)) && a.inner.append(e);
                    b.trigger("beforeShow");
                    a.inner.css("overflow", "yes" === j ? "scroll" : "no" === j ? "hidden" : j);
                    b._setDimension();
                    b.reposition();
                    b.isOpen = !1;
                    b.coming = null;
                    b.bindEvents();
                    if (b.isOpened) {
                        if (d.prevMethod) b.transitions[d.prevMethod]()
                    } else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
                    b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
                    b._preloadImages()
                }
        },
        _setDimension: function() {
            var a = b.getViewport(),
                d = 0,
                e = !1,
                c = !1,
                e = b.wrap,
                j = b.skin,
                g = b.inner,
                h = b.current,
                c = h.width,
                i = h.height,
                l = h.minWidth,
                t = h.minHeight,
                m = h.maxWidth,
                n = h.maxHeight,
                r = h.scrolling,
                p = h.scrollOutside ? h.scrollbarWidth : 0,
                w = h.margin,
                y = k(w[1] + w[3]),
                q = k(w[0] + w[2]),
                x, z, s, C, A, F, B, D, u;
            e.add(j).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
            w = k(j.outerWidth(!0) - j.width());
            x = k(j.outerHeight(!0) - j.height());
            z = y + w;
            s = q + x;
            C = E(c) ? (a.w - z) * k(c) / 100 : c;
            A = E(i) ? (a.h - s) * k(i) / 100 : i;
            if ("iframe" === h.type) {
                if (u = h.content, h.autoHeight && 1 === u.data("ready")) try {
                    u[0].contentWindow.document.location && (g.width(C).height(9999), F = u.contents().find("body"), p && F.css("overflow-x",
                        "hidden"), A = F.height())
                } catch (G) {}
            } else if (h.autoWidth || h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(C), h.autoHeight || g.height(A), h.autoWidth && (C = g.width()), h.autoHeight && (A = g.height()), g.removeClass("fancybox-tmp");
            c = k(C);
            i = k(A);
            D = C / A;
            l = k(E(l) ? k(l, "w") - z : l);
            m = k(E(m) ? k(m, "w") - z : m);
            t = k(E(t) ? k(t, "h") - s : t);
            n = k(E(n) ? k(n, "h") - s : n);
            F = m;
            B = n;
            h.fitToView && (m = Math.min(a.w - z, m), n = Math.min(a.h - s, n));
            z = a.w - y;
            q = a.h - q;
            h.aspectRatio ? (c > m && (c = m, i = k(c / D)), i > n && (i = n, c = k(i * D)), c < l && (c = l, i = k(c / D)), i < t &&
                (i = t, c = k(i * D))) : (c = Math.max(l, Math.min(c, m)), h.autoHeight && "iframe" !== h.type && (g.width(c), i = g.height()), i = Math.max(t, Math.min(i, n)));
            if (h.fitToView)
                if (g.width(c).height(i), e.width(c + w), a = e.width(), y = e.height(), h.aspectRatio)
                    for (;
                        (a > z || y > q) && (c > l && i > t) && !(19 < d++);) i = Math.max(t, Math.min(n, i - 10)), c = k(i * D), c < l && (c = l, i = k(c / D)), c > m && (c = m, i = k(c / D)), g.width(c).height(i), e.width(c + w), a = e.width(), y = e.height();
                else c = Math.max(l, Math.min(c, c - (a - z))), i = Math.max(t, Math.min(i, i - (y - q)));
            p && ("auto" === r && i < A && c + w +
                p < z) && (c += p);
            g.width(c).height(i);
            e.width(c + w);
            a = e.width();
            y = e.height();
            e = (a > z || y > q) && c > l && i > t;
            c = h.aspectRatio ? c < F && i < B && c < C && i < A : (c < F || i < B) && (c < C || i < A);
            f.extend(h, {
                dim: {
                    width: v(a),
                    height: v(y)
                },
                origWidth: C,
                origHeight: A,
                canShrink: e,
                canExpand: c,
                wPadding: w,
                hPadding: x,
                wrapSpace: y - j.outerHeight(!0),
                skinSpace: j.height() - i
            });
            !u && (h.autoHeight && i > t && i < n && !c) && g.height("auto")
        },
        _getPosition: function(a) {
            var d = b.current,
                e = b.getViewport(),
                c = d.margin,
                f = b.wrap.width() + c[1] + c[3],
                g = b.wrap.height() + c[0] + c[2],
                c = {
                    position: "absolute",
                    top: c[0],
                    left: c[3]
                };
            d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);
            c.top = v(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
            c.left = v(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
            return c
        },
        _afterZoomIn: function() {
            var a = b.current;
            a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function(d) {
                !f(d.target).is("a") && !f(d.target).parent().is("a") &&
                    (d.preventDefault(), b[a.closeClick ? "close" : "next"]())
            }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind(n ? "touchstart.fb" : "click.fb", function(a) {
                a.preventDefault();
                b.close()
            }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play()))
        },
        _afterZoomOut: function(a) {
            a = a || b.current;
            f(".fancybox-wrap").trigger("onReset").remove();
            f.extend(b, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });
            b.trigger("afterClose", a)
        }
    });
    b.transitions = {
        getOrigPosition: function() {
            var a = b.current,
                d = a.element,
                e = a.orig,
                c = {},
                f = 50,
                g = 50,
                h = a.hPadding,
                i = a.wPadding,
                l = b.getViewport();
            !e && (a.isDom && d.is(":visible")) && (e = d.find("img:first"), e.length || (e = d));
            s(e) ? (c = e.offset(),
                e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) : (c.top = l.y + (l.h - g) * a.topRatio, c.left = l.x + (l.w - f) * a.leftRatio);
            if ("fixed" === b.wrap.css("position") || a.locked) c.top -= l.y, c.left -= l.x;
            return c = {
                top: v(c.top - h * a.topRatio),
                left: v(c.left - i * a.leftRatio),
                width: v(f + i),
                height: v(g + h)
            }
        },
        step: function(a, d) {
            var e, c, f = d.prop;
            c = b.current;
            var g = c.wrapSpace,
                h = c.skinSpace;
            if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](k("width" ===
                f ? c : c - g * e)), b.inner[f](k("width" === f ? c : c - g * e - h * e))
        },
        zoomIn: function() {
            var a = b.current,
                d = a.pos,
                e = a.openEffect,
                c = "elastic" === e,
                j = f.extend({
                    opacity: 1
                }, d);
            delete j.position;
            c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);
            b.wrap.css(d).animate(j, {
                duration: "none" === e ? 0 : a.openSpeed,
                easing: a.openEasing,
                step: c ? this.step : null,
                complete: b._afterZoomIn
            })
        },
        zoomOut: function() {
            var a = b.current,
                d = a.closeEffect,
                e = "elastic" === d,
                c = {
                    opacity: 0.1
                };
            e && (c = this.getOrigPosition(), a.closeOpacity &&
                (c.opacity = 0.1));
            b.wrap.animate(c, {
                duration: "none" === d ? 0 : a.closeSpeed,
                easing: a.closeEasing,
                step: e ? this.step : null,
                complete: b._afterZoomOut
            })
        },
        changeIn: function() {
            var a = b.current,
                d = a.nextEffect,
                e = a.pos,
                c = {
                    opacity: 1
                },
                f = b.direction,
                g;
            e.opacity = 0.1;
            "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = v(k(e[g]) - 200), c[g] = "+=200px") : (e[g] = v(k(e[g]) + 200), c[g] = "-=200px"));
            "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, {
                duration: a.nextSpeed,
                easing: a.nextEasing,
                complete: function() {
                    setTimeout(b._afterZoomIn,
                        20)
                }
            })
        },
        changeOut: function() {
            var a = b.previous,
                d = a.prevEffect,
                e = {
                    opacity: 0.1
                },
                c = b.direction;
            "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");
            a.wrap.animate(e, {
                duration: "none" === d ? 0 : a.prevSpeed,
                easing: a.prevEasing,
                complete: function() {
                    f(this).trigger("onReset").remove()
                }
            })
        }
    };
    b.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !n,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        create: function(a) {
            a = f.extend({}, this.defaults, a);
            this.overlay && this.close();
            this.overlay = f('<div class="fancybox-overlay"></div>').appendTo("body");
            this.fixed = !1;
            a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function(a) {
            var d = this,
                a = f.extend({}, this.defaults, a);
            this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
            this.fixed || (r.bind("resize.overlay", f.proxy(this.update, this)), this.update());
            a.closeClick && this.overlay.bind("click.overlay", function(a) {
                f(a.target).hasClass("fancybox-overlay") &&
                    (b.isActive ? b.close() : d.close())
            });
            this.overlay.css(a.css).show()
        },
        close: function() {
            f(".fancybox-overlay").remove();
            r.unbind("resize.overlay");
            this.overlay = null;
            !1 !== this.margin && (f("body").css("margin-right", this.margin), this.margin = !1);
            this.el && this.el.removeClass("fancybox-lock")
        },
        update: function() {
            var a = "100%",
                b;
            this.overlay.width(a).height("100%");
            f.browser.msie ? (b = Math.max(x.documentElement.offsetWidth, x.body.offsetWidth), m.width() > b && (a = m.width())) : m.width() > r.width() && (a = m.width());
            this.overlay.width(a).height(m.height())
        },
        onReady: function(a, b) {
            f(".fancybox-overlay").stop(!0, !0);
            this.overlay || (this.margin = m.height() > r.height() || "scroll" === f("body").css("overflow-y") ? f("body").css("margin-right") : !1, this.el = x.all && !x.querySelector ? f("html") : f("body"), this.create(a));
            a.locked && this.fixed && (b.locked = this.overlay.append(b.wrap), b.fixed = !1);
            !0 === a.showEarly && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function(a, b) {
            b.locked && (this.el.addClass("fancybox-lock"), !1 !== this.margin && f("body").css("margin-right", k(this.margin) +
                b.scrollbarWidth));
            this.open(a)
        },
        onUpdate: function() {
            this.fixed || this.update()
        },
        afterClose: function(a) {
            this.overlay && !b.isActive && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this))
        }
    };
    b.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function(a) {
            var d = b.current,
                e = d.title,
                c = a.type;
            f.isFunction(e) && (e = e.call(d.element, d));
            if (p(e) && "" !== f.trim(e)) {
                d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");
                switch (c) {
                    case "inside":
                        c = b.skin;
                        break;
                    case "outside":
                        c =
                            b.wrap;
                        break;
                    case "over":
                        c = b.inner;
                        break;
                    default:
                        c = b.skin, d.appendTo("body"), f.browser.msie && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(k(d.css("margin-bottom")))
                }
                d["top" === a.position ? "prependTo" : "appendTo"](c)
            }
        }
    };
    f.fn.fancybox = function(a) {
        var d, e = f(this),
            c = this.selector || "",
            j = function(g) {
                var h = f(this).blur(),
                    i = d,
                    j, k;
                !g.ctrlKey && (!g.altKey && !g.shiftKey && !g.metaKey) && !h.is(".fancybox-wrap") && (j = a.groupAttr || "data-fancybox-group", k = h.attr(j), k || (j = "rel",
                    k = h.get(0)[j]), k && ("" !== k && "nofollow" !== k) && (h = c.length ? f(c) : e, h = h.filter("[" + j + '="' + k + '"]'), i = h.index(this)), a.index = i, !1 !== b.open(h, a) && g.preventDefault())
            },
            a = a || {};
        d = a.index || 0;
        !c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", j) : m.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", j);
        this.filter("[data-fancybox-start=1]").trigger("click");
        return this
    };
    m.ready(function() {
        f.scrollbarWidth === q && (f.scrollbarWidth = function() {
            var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                b = a.children(),
                b = b.innerWidth() - b.height(99).innerWidth();
            a.remove();
            return b
        });
        if (f.support.fixedPosition === q) {
            var a = f.support,
                d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                e = 20 === d[0].offsetTop || 15 === d[0].offsetTop;
            d.remove();
            a.fixedPosition = e
        }
        f.extend(b.defaults, {
            scrollbarWidth: f.scrollbarWidth(),
            fixed: f.support.fixedPosition,
            parent: f("body")
        })
    })
})(window, document, jQuery);;
/*!
 * Buttons helper for fancyBox
 * version: 1.0.5 (Mon, 15 Oct 2012)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             buttons: {
 *                 position : 'top'
 *             }
 *         }
 *     });
 *
 */
(function($) {
    //Shortcut for fancyBox object
    var F = $.fancybox;

    //Add helper object
    F.helpers.buttons = {
        defaults: {
            skipSingle: false, // disables if gallery contains single image
            position: 'top', // 'top' or 'bottom'
            tpl: '<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:jQuery.fancybox.close();"></a></li></ul></div>'
        },

        list: null,
        buttons: null,

        beforeLoad: function(opts, obj) {
            //Remove self if gallery do not have at least two items

            if (opts.skipSingle && obj.group.length < 2) {
                obj.helpers.buttons = false;
                obj.closeBtn = true;

                return;
            }

            //Increase top margin to give space for buttons
            obj.margin[opts.position === 'bottom' ? 2 : 0] += 30;
        },

        onPlayStart: function() {
            if (this.buttons) {
                this.buttons.play.attr('title', 'Pause slideshow').addClass('btnPlayOn');
            }
        },

        onPlayEnd: function() {
            if (this.buttons) {
                this.buttons.play.attr('title', 'Start slideshow').removeClass('btnPlayOn');
            }
        },

        afterShow: function(opts, obj) {
            var buttons = this.buttons;

            if (!buttons) {
                this.list = $(opts.tpl).addClass(opts.position).appendTo('body');

                buttons = {
                    prev: this.list.find('.btnPrev').click(F.prev),
                    next: this.list.find('.btnNext').click(F.next),
                    play: this.list.find('.btnPlay').click(F.play),
                    toggle: this.list.find('.btnToggle').click(F.toggle)
                }
            }

            //Prev
            if (obj.index > 0 || obj.loop) {
                buttons.prev.removeClass('btnDisabled');
            } else {
                buttons.prev.addClass('btnDisabled');
            }

            //Next / Play
            if (obj.loop || obj.index < obj.group.length - 1) {
                buttons.next.removeClass('btnDisabled');
                buttons.play.removeClass('btnDisabled');

            } else {
                buttons.next.addClass('btnDisabled');
                buttons.play.addClass('btnDisabled');
            }

            this.buttons = buttons;

            this.onUpdate(opts, obj);
        },

        onUpdate: function(opts, obj) {
            var toggle;

            if (!this.buttons) {
                return;
            }

            toggle = this.buttons.toggle.removeClass('btnDisabled btnToggleOn');

            //Size toggle button
            if (obj.canShrink) {
                toggle.addClass('btnToggleOn');

            } else if (!obj.canExpand) {
                toggle.addClass('btnDisabled');
            }
        },

        beforeClose: function() {
            if (this.list) {
                this.list.remove();
            }

            this.list = null;
            this.buttons = null;
        }
    };

}(jQuery));;
(function($) {
    $(document).ready(function() {
        // --------------------------------------------------- //
        // -------------------- Document --------------------- //
        // --------------------------------------------------- //

        var body = $('body'),
            doc = $(document),
            height = $(window).height(),
            width = $(window).width(),
            main = true,
            _url = _config.templateUrl,
            images = _config.homeImages,
            pos = (height - (width * .75)) * .5,
            isPageShow = false,
            css = (width > height) ? {
                'width': width,
                'height': width * .75,
                'marginTop': pos + 'px',
                'marginLeft': '0px'
            } : {
                'width': height / .75,
                'height': height,
                'marginTop': '0px',
                'marginLeft': (width - (height / .75)) * .5 + 'px'
            };

        // -------------------------------------------------------------- //
        // ------------------------ Preloader --------------------------- //
        // -------------------------------------------------------------- //

        body.queryLoader2({
            barColor: "#F9BFA7",
            backgroundColor: "#EF6022",
            barHeight: 7,
            minimumTime: 1000,
            addAdditionalImages: function(qLimages) {
                if (images.length > 0) {
                    for (var i = 0; i < images.length; i++) {
                        if (images[i].length > 0 && qLimages.indexOf(images[i]) == -1) {
                            var extra = "";
                            if ($.browser.msie && $.browser.version < 9) {
                                extra = "?" + Math.floor(Math.random() * 3000);
                            }
                            qLimages.push(images[i] + extra);
                        }
                    }
                }
                return qLimages;
            },
            onComplete: function() {},
            onBeforeComplete: function() {
                toHome();
            }
        });

        // --------------------------------------------------------------- //
        // -------------------- Home | prefix : home_ -------------------- //
        // --------------------------------------------------------------- //

        /* Vars */
        var home_paths = _config.homeImages,
            home_index = 0,
            home_length = home_paths.length,
            home_delay = 5000,
            container = $('div#container'),
            home_prevnext = $('div#nav-buttons div#button-prev, div#nav-buttons div#button-next'),
            home_prev = $('div#nav-buttons div#button-prev'),
            home_next = $('div#nav-buttons div#button-next'),
            home_buttons = $('div#button-next, div#button-prev, div#close-pop, div#behance, div#flickr, div#close-pop');

        home_prevnext.live({
            mouseenter: function() {
                clearInterval(home_timer);
            },
            mouseleave: function() {
                home_timer = setInterval(home_recursive, home_delay);
            }
        });

        home_prev.live('click', function(e) {

            for (var i = home_length - 1; i >= 0; --i) {
                var isAnimated = $('div.slider-' + i + ' div.mask:eq(0)').is(":animated");
                if (isAnimated) return;
            }

            (home_index == 0) ? home_index = home_length - 1: home_index--;
            home_slide();
            e.preventDefault();
        });

        home_next.live('click', function(e) {

            for (var i = home_length - 1; i >= 0; --i) {
                var isAnimated = $('div.slider-' + i + ' div.mask:eq(0)').is(":animated");
                if (isAnimated) return;
            }

            (home_index < home_length - 1) ? home_index++ : home_index = 0;
            home_slide();
            e.preventDefault();
        });

        home_buttons.live({
            mouseenter: function() {
                var target = $(this),
                    w = target.width();
                target.stop().animate({
                    'backgroundPositionX': '-' + w
                }, 300, 'easeOutExpo');
            },
            mouseleave: function() {
                var target = $(this);
                target.stop().animate({
                    'backgroundPositionX': '0'
                }, 400, 'easeOutExpo');
            }
        });

        /* Functions */
        var home_timer = null;

        var home_recursive = function() {
            (home_index < home_length - 1) ? home_index++ : home_index = 0;
            home_slide();
        }

        function home_slide() {
            for (var i = home_length - 1; i >= 0; --i) {
                var slider = $('div.slider-' + i),
                    slideIndex = (home_index + i) % home_length,
                    path = home_paths[slideIndex];
                slider.append('<div class="mask"><img src="' + path + '"></div>');
                var mask = slider.find('div.mask');
                home_hide(mask, i);
            };
        }

        function home_hide(mask, i) {
            mask.eq(1).css({
                'zIndex': 0,
                'width': '100%'
            });
            mask.eq(0).delay(Math.abs(200 * (i - 3))).animate({
                'width': '0%'
            }, 800, 'easeOutExpo', function() {
                mask.eq(0).remove();
                mask.eq(1).css({
                    'zIndex': 1
                });
            });
        }

        function padLeft(nr, n, str) {
            return Array(n - String(nr).length + 1).join(str || '0') + nr;
        }

        function toHome() {
            isPreloaded = true;
            container.children().each(function(i) {
                var slider = $('div.slider-' + i + ' div.mask'),
                    image = '<img src="' + images[i] + '">';
                slider.append(image);
            });
            home_index = 0;
            if (isPageShow == false) {
                home_timer = setInterval(home_recursive, home_delay);
            }
        }

        /*---------- popup ----------*/

        function makeScrollable(pos) {
            var cont_height = $('#' + pos).find('h3.entry-title').height() + 120;
            $('#' + pos).find('div.for_cont_scroll').css('height', ($(window).height() - cont_height + 'px'))
                .bind('jsp-initialised', function(event, isScrollable) {
                    if (isScrollable == false) {
                        $(this).find('.jspPane').width(function() {
                            return $(this).width() - ($(window).width() * 0.027);
                        });
                    }
                }).jScrollPane({
                    'verticalGutter': ($(window).width() * 0.022)
                });
        }

        function focusContent() {
            var $self = $(this),
                _pageurl = $self.attr('href'),
                pos = $self.attr('rel'),
                focus = $('#focus'),
                pageSlider = $('#page-slider'),
                pageSliderFocus = $('div.column-focus .page-slider-' + pos, pageSlider),
                pageSliderLeft = $('div.column .page-slider-' + pos, pageSlider),
                parentLi = $self.closest('li'),
                hasFocusImage = parentLi.hasClass('has-focus-image'),
                hasLeftImage = parentLi.hasClass('has-left-image');

            $('a', menuNav).removeClass('active');
            $self.addClass('active');

            if ($self.hasClass('loaded') == false) {
                focus.append('<article class="content-loader" id="' + pos + '"></article>');
                pageSliderFocus = $('<div class="page-slider-item page-slider-' + pos + '"><div class="mask' + (hasFocusImage ? ' content-loader' : '') + '"></div></div>').appendTo($('div.column-focus', pageSlider));
                pageSliderLeft = $('<div class="page-slider-item page-slider-' + pos + '"><div class="mask' + (hasLeftImage ? ' content-loader' : '') + '"></div></div>').appendTo($('div.column', pageSlider));

                if (typeof ajaxRequestObject === "object") {
                    ajaxRequestObject.abort();
                }
                ajaxRequestObject = $.post(_pageurl, {}, function(response) {
                    ajaxRequestObject = false;
                    $('#' + pos).empty().append(response.html).removeClass('content-loader')
                        .find("a.myfancybox").fancybox({
                            closeBtn: false,
                            arrows: false,
                            padding: 0,
                            helpers: {
                                title: {
                                    type: 'inside'
                                },
                                buttons: {}
                            }
                        }).find('img').hover(function() {
                            $(this).fadeTo(250, 0.5);
                        }, function() {
                            $(this).fadeTo(250, 1);
                        });

                    $('.pop_video a', '#' + pos).fancybox({
                        maxWidth: 800,
                        maxHeight: 600,
                        fitToView: false,
                        width: '70%',
                        height: '70%',
                        autoSize: false,
                        closeClick: false,
                        openEffect: 'none',
                        closeEffect: 'none',
                        padding: 0,
                        closeBtn: false
                    });

                    $('#' + pos).find('img').hide().each(function() {
                        $(this).parent().addClass('img-loader');
                    }).load(function() {
                        $(this).show().parent().removeClass('img-loader');
                    });

                    $self.addClass('loaded');

                    makeScrollable(pos);

                    var pageImageList = [],
                        pageClassSuffixList = [];
                    if (response.focusImage) {
                        pageImageList.push(response.focusImage);
                        pageClassSuffixList.push('-focus');
                    }
                    if (response.leftImage) {
                        pageImageList.push(response.leftImage);
                        pageClassSuffixList.push('');
                    }

                    $.preLoadImages(pageImageList, function() {
                        $.each(pageImageList, function(i, _src) {
                            $('<img />').attr('src', _src)
                                .appendTo($('div.column' + pageClassSuffixList[i] + ' .page-slider-' + pos + ' div.mask', pageSlider).removeClass('content-loader'));
                        })
                    });
                }, 'json');
            }
            if (focus.css('right') != '0%') {
                focus.animate({
                    'right': '0%'
                }, 600, 'easeInOutExpo');
                $('div#close-pop').remove();
                $("<div id='close-pop'>&nbsp;</div>").appendTo(focus);
            }
            $('#' + pos).css({
                'opacity': 0
            }).show().animate({
                'opacity': 1
            }).siblings('article').hide();
            if ((hasFocusImage || hasLeftImage)) {

                $('#stripe').css('z-index', 12);
                $('.cache', pageSliderLeft.parent()).show();
                if (hasLeftImage == false) {
                    $('.cache', pageSliderLeft.parent()).hide();
                }

                pageSlider.animate({
                    'left': '0%'
                }, 600, 'easeInOutExpo');

                pageSliderFocus.css({
                    'opacity': 0
                }).show().animate({
                    'opacity': 1
                }).siblings('.page-slider-item').hide();

                pageSliderLeft.css({
                    'opacity': 0
                }).show().animate({
                    'opacity': 1
                }).siblings('.page-slider-item').hide();
            } else {
                //                $('#stripe').css('z-index',10);
                //                pageSlider.animate({
                //                    'left':'-56%'
                //                },600, 'easeInOutExpo');
            }
            isPageShow = true;
            clearInterval(home_timer);
            return false;
        }

        var menuNav = $('#newNav li'),
            ajaxRequestObject = false;
        menuNav.eq(0).addClass('first').find('span').unwrap().closest('li').append('<span class="span-for">for</span>');
        $('a[rel=about] span', menuNav).unwrap();
        $('ul li a', menuNav).html(function() {
            return $(this).text();
        });

        $('a', menuNav).click(focusContent);
        $('#focus a.go-to-page').live('click', function() {
            $('a[rel=' + $(this).attr('title') + ']', menuNav).trigger('click');
            return false;
        });
        $('#focus .streetwear_links a:not(.go-to-page)').live('click', function() {
            return false;
        });

        $('#close-pop').live('click', function() {
            var focus = $('#focus'),
                pageSlider = $('#page-slider'),
                w = focus.outerWidth() + 0.2;
            pageSlider.animate({
                'left': '-56%'
            }, 600, 'easeInOutExpo');

            $('#stripe').css('z-index', 10);

            focus.animate({
                'right': '-' + w
            }, 600, 'easeInOutExpo', function() {
                $(this).children().hide();
                $('div#close-pop').remove();
            });
            $('a', menuNav).removeClass('active');
            home_timer = setInterval(home_recursive, home_delay);
            isPageShow = false;
            //            e.preventDefault();
            return false;
        });

        // ------------------------------------------------- //
        // -------------------- Resize --------------------- //
        // ------------------------------------------------- //

        $(window).resize(function() {

            height = $(window).height();
            width = $(window).width();
            pos = (width > 1024) ? -100 : (height - (width * .75)) * .5;
            css = (width > height) ? {
                'width': width,
                'height': width * .75,
                'marginTop': pos + 'px',
                'marginLeft': '0px'
            } : {
                'width': height / .75,
                'height': height,
                'marginTop': '0px',
                'marginLeft': (width - (height / .75)) * .5 + 'px'
            };

            if (isPreloaded) {
                if (main) {
                    clearInterval(home_timer);
                    body.stop().animate({
                        'opacity': 0
                    }, function() {
                        body.animate({
                            'opacity': 1
                        }, 1000);
                        toHome();
                        var articleEl = $('#focus article:visible');
                        if (articleEl.size() > 0) {
                            articleEl.find('div.for_cont_scroll').data('jsp').destroy();
                            makeScrollable(articleEl.attr('id'));
                        }
                    });
                }
            }
        });
    });
})(jQuery);;
(function(a) {
    function r(b) {
        function e(b) {
            for (; b && b.nodeName.toLowerCase() != "html"; b = b.parentNode) {
                var c = a.css(b, "background-color");
                if (c && c.indexOf("rgb") >= 0) {
                    var e = c.match(/\d+/g);
                    return "#" + d(e[0]) + d(e[1]) + d(e[2])
                }
                if (c && c != "transparent") return c
            }
            return "#ffffff"
        }

        function d(a) {
            a = parseInt(a, 10).toString(16);
            return a.length < 2 ? "0" + a : a
        }
        c("applying clearType background-color hack");
        b.each(function() {
            a(this).css("background-color", e(this))
        })
    }

    function q(b, c) {
        var d = a(c.pager);
        a.each(b, function(e, f) {
            a.fn.cycle.createPagerAnchor(e, f, d, b, c)
        });
        c.updateActivePagerLink(c.pager, c.startingSlide, c.activePagerClass)
    }

    function o(b, c) {
        var d = c ? 1 : -1;
        var e = b.elements;
        var f = b.$cont[0],
            g = f.cycleTimeout;
        if (g) {
            clearTimeout(g);
            f.cycleTimeout = 0
        }
        if (b.random && d < 0) {
            b.randomIndex--;
            if (--b.randomIndex == -2) b.randomIndex = e.length - 2;
            else if (b.randomIndex == -1) b.randomIndex = e.length - 1;
            b.nextSlide = b.randomMap[b.randomIndex]
        } else if (b.random) {
            b.nextSlide = b.randomMap[b.randomIndex]
        } else {
            b.nextSlide = b.currSlide + d;
            if (b.nextSlide < 0) {
                if (b.nowrap) return false;
                b.nextSlide = e.length - 1
            } else if (b.nextSlide >= e.length) {
                if (b.nowrap) return false;
                b.nextSlide = 0
            }
        }
        var h = b.onPrevNextEvent || b.prevNextClick;
        if (a.isFunction(h)) h(d > 0, b.nextSlide, e[b.nextSlide]);
        m(e, b, 1, c);
        return false
    }

    function n(a, b, d, e) {
        if (d.timeoutFn) {
            var f = d.timeoutFn.call(a, a, b, d, e);
            while (d.fx != "none" && f - d.speed < 250) f += d.speed;
            c("calculated timeout: " + f + "; speed: " + d.speed);
            if (f !== false) return f
        }
        return d.timeout
    }

    function m(b, d, e, f) {
        if (e && d.busy && d.manualTrump) {
            c("manualTrump in go(), stopping active transition");
            a(b).stop(true, true);
            d.busy = 0
        }
        if (d.busy) {
            c("transition active, ignoring new tx request");
            return
        }
        var g = d.$cont[0],
            h = b[d.currSlide],
            i = b[d.nextSlide];
        if (g.cycleStop != d.stopCount || g.cycleTimeout === 0 && !e) return;
        if (!e && !g.cyclePause && !d.bounce && (d.autostop && --d.countdown <= 0 || d.nowrap && !d.random && d.nextSlide < d.currSlide)) {
            if (d.end) d.end(d);
            return
        }
        var j = false;
        if ((e || !g.cyclePause) && d.nextSlide != d.currSlide) {
            j = true;
            var k = d.fx;
            h.cycleH = h.cycleH || a(h).height();
            h.cycleW = h.cycleW || a(h).width();
            i.cycleH = i.cycleH || a(i).height();
            i.cycleW = i.cycleW || a(i).width();
            if (d.multiFx) {
                if (f && (d.lastFx == undefined || ++d.lastFx >= d.fxs.length)) d.lastFx = 0;
                else if (!f && (d.lastFx == undefined || --d.lastFx < 0)) d.lastFx = d.fxs.length - 1;
                k = d.fxs[d.lastFx]
            }
            if (d.oneTimeFx) {
                k = d.oneTimeFx;
                d.oneTimeFx = null
            }
            a.fn.cycle.resetState(d, k);
            if (d.before.length) a.each(d.before, function(a, b) {
                if (g.cycleStop != d.stopCount) return;
                b.apply(i, [h, i, d, f])
            });
            var l = function() {
                d.busy = 0;
                a.each(d.after, function(a, b) {
                    if (g.cycleStop != d.stopCount) return;
                    b.apply(i, [h, i, d, f])
                })
            };
            c("tx firing(" + k + "); currSlide: " + d.currSlide + "; nextSlide: " + d.nextSlide);
            d.busy = 1;
            if (d.fxFn) d.fxFn(h, i, d, l, f, e && d.fastOnEvent);
            else if (a.isFunction(a.fn.cycle[d.fx])) a.fn.cycle[d.fx](h, i, d, l, f, e && d.fastOnEvent);
            else a.fn.cycle.custom(h, i, d, l, f, e && d.fastOnEvent)
        }
        if (j || d.nextSlide == d.currSlide) {
            d.lastSlide = d.currSlide;
            if (d.random) {
                d.currSlide = d.nextSlide;
                if (++d.randomIndex == b.length) d.randomIndex = 0;
                d.nextSlide = d.randomMap[d.randomIndex];
                if (d.nextSlide == d.currSlide) d.nextSlide = d.currSlide == d.slideCount - 1 ? 0 : d.currSlide + 1
            } else if (d.backwards) {
                var o = d.nextSlide - 1 < 0;
                if (o && d.bounce) {
                    d.backwards = !d.backwards;
                    d.nextSlide = 1;
                    d.currSlide = 0
                } else {
                    d.nextSlide = o ? b.length - 1 : d.nextSlide - 1;
                    d.currSlide = o ? 0 : d.nextSlide + 1
                }
            } else {
                var o = d.nextSlide + 1 == b.length;
                if (o && d.bounce) {
                    d.backwards = !d.backwards;
                    d.nextSlide = b.length - 2;
                    d.currSlide = b.length - 1
                } else {
                    d.nextSlide = o ? 0 : d.nextSlide + 1;
                    d.currSlide = o ? b.length - 1 : d.nextSlide - 1
                }
            }
        }
        if (j && d.pager) d.updateActivePagerLink(d.pager, d.currSlide, d.activePagerClass);
        var p = 0;
        if (d.timeout && !d.continuous) p = n(b[d.currSlide], b[d.nextSlide], d, f);
        else if (d.continuous && g.cyclePause) p = 10;
        if (p > 0) g.cycleTimeout = setTimeout(function() {
            m(b, d, 0, !d.backwards)
        }, p)
    }

    function l(b, c) {
        b.addSlide = function(d, e) {
            var f = a(d),
                g = f[0];
            if (!b.autostopCount) b.countdown++;
            c[e ? "unshift" : "push"](g);
            if (b.els) b.els[e ? "unshift" : "push"](g);
            b.slideCount = c.length;
            f.css("position", "absolute");
            f[e ? "prependTo" : "appendTo"](b.$cont);
            if (e) {
                b.currSlide++;
                b.nextSlide++
            }
            if (!a.support.opacity && b.cleartype && !b.cleartypeNoBg) r(f);
            if (b.fit && b.width) f.width(b.width);
            if (b.fit && b.height && b.height != "auto") f.height(b.height);
            g.cycleH = b.fit && b.height ? b.height : f.height();
            g.cycleW = b.fit && b.width ? b.width : f.width();
            f.css(b.cssBefore);
            if (b.pager || b.pagerAnchorBuilder) a.fn.cycle.createPagerAnchor(c.length - 1, g, a(b.pager), c, b);
            if (a.isFunction(b.onAddSlide)) b.onAddSlide(f);
            else f.hide()
        }
    }

    function k(b) {
        var e, f, g = a.fn.cycle.transitions;
        if (b.fx.indexOf(",") > 0) {
            b.multiFx = true;
            b.fxs = b.fx.replace(/\s*/g, "").split(",");
            for (e = 0; e < b.fxs.length; e++) {
                var h = b.fxs[e];
                f = g[h];
                if (!f || !g.hasOwnProperty(h) || !a.isFunction(f)) {
                    d("discarding unknown transition: ", h);
                    b.fxs.splice(e, 1);
                    e--
                }
            }
            if (!b.fxs.length) {
                d("No valid transitions named; slideshow terminating.");
                return false
            }
        } else if (b.fx == "all") {
            b.multiFx = true;
            b.fxs = [];
            for (p in g) {
                f = g[p];
                if (g.hasOwnProperty(p) && a.isFunction(f)) b.fxs.push(p)
            }
        }
        if (b.multiFx && b.randomizeEffects) {
            var i = Math.floor(Math.random() * 20) + 30;
            for (e = 0; e < i; e++) {
                var j = Math.floor(Math.random() * b.fxs.length);
                b.fxs.push(b.fxs.splice(j, 1)[0])
            }
            c("randomized fx sequence: ", b.fxs)
        }
        return true
    }

    function j(b) {
        b.original = {
            before: [],
            after: []
        };
        b.original.cssBefore = a.extend({}, b.cssBefore);
        b.original.cssAfter = a.extend({}, b.cssAfter);
        b.original.animIn = a.extend({}, b.animIn);
        b.original.animOut = a.extend({}, b.animOut);
        a.each(b.before, function() {
            b.original.before.push(this)
        });
        a.each(b.after, function() {
            b.original.after.push(this)
        })
    }

    function i(b, c, f, h, i) {
        var n = a.extend({}, a.fn.cycle.defaults, h || {}, a.metadata ? b.metadata() : a.meta ? b.data() : {});
        var p = a.isFunction(b.data) ? b.data(n.metaAttr) : null;
        if (p) n = a.extend(n, p);
        if (n.autostop) n.countdown = n.autostopCount || f.length;
        var s = b[0];
        b.data("cycle.opts", n);
        n.$cont = b;
        n.stopCount = s.cycleStop;
        n.elements = f;
        n.before = n.before ? [n.before] : [];
        n.after = n.after ? [n.after] : [];
        if (!a.support.opacity && n.cleartype) n.after.push(function() {
            g(this, n)
        });
        if (n.continuous) n.after.push(function() {
            m(f, n, 0, !n.backwards)
        });
        j(n);
        if (!a.support.opacity && n.cleartype && !n.cleartypeNoBg) r(c);
        if (b.css("position") == "static") b.css("position", "relative");
        if (n.width) b.width(n.width);
        if (n.height && n.height != "auto") b.height(n.height);
        if (n.startingSlide) n.startingSlide = parseInt(n.startingSlide, 10);
        else if (n.backwards) n.startingSlide = f.length - 1;
        if (n.random) {
            n.randomMap = [];
            for (var t = 0; t < f.length; t++) n.randomMap.push(t);
            n.randomMap.sort(function(a, b) {
                return Math.random() - .5
            });
            n.randomIndex = 1;
            n.startingSlide = n.randomMap[1]
        } else if (n.startingSlide >= f.length) n.startingSlide = 0;
        n.currSlide = n.startingSlide || 0;
        var u = n.startingSlide;
        c.css({
            position: "absolute",
            top: 0,
            left: 0
        }).hide().each(function(b) {
            var c;
            if (n.backwards) c = u ? b <= u ? f.length + (b - u) : u - b : f.length - b;
            else c = u ? b >= u ? f.length - (b - u) : u - b : f.length - b;
            a(this).css("z-index", c)
        });
        a(f[u]).css("opacity", 1).show();
        g(f[u], n);
        if (n.fit) {
            if (!n.aspect) {
                if (n.width) c.width(n.width);
                if (n.height && n.height != "auto") c.height(n.height)
            } else {
                c.each(function() {
                    var b = a(this);
                    var c = n.aspect === true ? b.width() / b.height() : n.aspect;
                    if (n.width && b.width() != n.width) {
                        b.width(n.width);
                        b.height(n.width / c)
                    }
                    if (n.height && b.height() < n.height) {
                        b.height(n.height);
                        b.width(n.height * c)
                    }
                })
            }
        }
        if (n.center && (!n.fit || n.aspect)) {
            c.each(function() {
                var b = a(this);
                b.css({
                    "margin-left": n.width ? (n.width - b.width()) / 2 + "px" : 0,
                    "margin-top": n.height ? (n.height - b.height()) / 2 + "px" : 0
                })
            })
        }
        if (n.center && !n.fit && !n.slideResize) {
            c.each(function() {
                var b = a(this);
                b.css({
                    "margin-left": n.width ? (n.width - b.width()) / 2 + "px" : 0,
                    "margin-top": n.height ? (n.height - b.height()) / 2 + "px" : 0
                })
            })
        }
        var v = n.containerResize && !b.innerHeight();
        if (v) {
            var w = 0,
                x = 0;
            for (var y = 0; y < f.length; y++) {
                var z = a(f[y]),
                    A = z[0],
                    B = z.outerWidth(),
                    C = z.outerHeight();
                if (!B) B = A.offsetWidth || A.width || z.attr("width");
                if (!C) C = A.offsetHeight || A.height || z.attr("height");
                w = B > w ? B : w;
                x = C > x ? C : x
            }
            if (w > 0 && x > 0) b.css({
                width: w + "px",
                height: x + "px"
            })
        }
        var D = false;
        if (n.pause) b.hover(function() {
            D = true;
            this.cyclePause++;
            e(s, true)
        }, function() {
            D && this.cyclePause--;
            e(s, true)
        });
        if (k(n) === false) return false;
        var E = false;
        h.requeueAttempts = h.requeueAttempts || 0;
        c.each(function() {
            var b = a(this);
            this.cycleH = n.fit && n.height ? n.height : b.height() || this.offsetHeight || this.height || b.attr("height") || 0;
            this.cycleW = n.fit && n.width ? n.width : b.width() || this.offsetWidth || this.width || b.attr("width") || 0;
            if (b.is("img")) {
                var c = a.browser.msie && this.cycleW == 28 && this.cycleH == 30 && !this.complete;
                var e = a.browser.mozilla && this.cycleW == 34 && this.cycleH == 19 && !this.complete;
                var f = a.browser.opera && (this.cycleW == 42 && this.cycleH == 19 || this.cycleW == 37 && this.cycleH == 17) && !this.complete;
                var g = this.cycleH == 0 && this.cycleW == 0 && !this.complete;
                if (c || e || f || g) {
                    if (i.s && n.requeueOnImageNotLoaded && ++h.requeueAttempts < 100) {
                        d(h.requeueAttempts, " - img slide not loaded, requeuing slideshow: ", this.src, this.cycleW, this.cycleH);
                        setTimeout(function() {
                            a(i.s, i.c).cycle(h)
                        }, n.requeueTimeout);
                        E = true;
                        return false
                    } else {
                        d("could not determine size of image: " + this.src, this.cycleW, this.cycleH)
                    }
                }
            }
            return true
        });
        if (E) return false;
        n.cssBefore = n.cssBefore || {};
        n.cssAfter = n.cssAfter || {};
        n.cssFirst = n.cssFirst || {};
        n.animIn = n.animIn || {};
        n.animOut = n.animOut || {};
        c.not(":eq(" + u + ")").css(n.cssBefore);
        a(c[u]).css(n.cssFirst);
        if (n.timeout) {
            n.timeout = parseInt(n.timeout, 10);
            if (n.speed.constructor == String) n.speed = a.fx.speeds[n.speed] || parseInt(n.speed, 10);
            if (!n.sync) n.speed = n.speed / 2;
            var F = n.fx == "none" ? 0 : n.fx == "shuffle" ? 500 : 250;
            while (n.timeout - n.speed < F) n.timeout += n.speed
        }
        if (n.easing) n.easeIn = n.easeOut = n.easing;
        if (!n.speedIn) n.speedIn = n.speed;
        if (!n.speedOut) n.speedOut = n.speed;
        n.slideCount = f.length;
        n.currSlide = n.lastSlide = u;
        if (n.random) {
            if (++n.randomIndex == f.length) n.randomIndex = 0;
            n.nextSlide = n.randomMap[n.randomIndex]
        } else if (n.backwards) n.nextSlide = n.startingSlide == 0 ? f.length - 1 : n.startingSlide - 1;
        else n.nextSlide = n.startingSlide >= f.length - 1 ? 0 : n.startingSlide + 1;
        if (!n.multiFx) {
            var G = a.fn.cycle.transitions[n.fx];
            if (a.isFunction(G)) G(b, c, n);
            else if (n.fx != "custom" && !n.multiFx) {
                d("unknown transition: " + n.fx, "; slideshow terminating");
                return false
            }
        }
        var H = c[u];
        if (!n.skipInitializationCallbacks) {
            if (n.before.length) n.before[0].apply(H, [H, H, n, true]);
            if (n.after.length) n.after[0].apply(H, [H, H, n, true])
        }
        if (n.next) a(n.next).bind(n.prevNextEvent, function() {
            return o(n, 1)
        });
        if (n.prev) a(n.prev).bind(n.prevNextEvent, function() {
            return o(n, 0)
        });
        if (n.pager || n.pagerAnchorBuilder) q(f, n);
        l(n, f);
        return n
    }

    function h(b) {
        if (b.next) a(b.next).unbind(b.prevNextEvent);
        if (b.prev) a(b.prev).unbind(b.prevNextEvent);
        if (b.pager || b.pagerAnchorBuilder) a.each(b.pagerAnchors || [], function() {
            this.unbind().remove()
        });
        b.pagerAnchors = null;
        if (b.destroy) b.destroy(b)
    }

    function g(b, c) {
        if (!a.support.opacity && c.cleartype && b.style.filter) {
            try {
                b.style.removeAttribute("filter")
            } catch (d) {}
        }
    }

    function f(b, c, f) {
        function j(b, c, e) {
            if (!b && c === true) {
                var f = a(e).data("cycle.opts");
                if (!f) {
                    d("options not found, can not resume");
                    return false
                }
                if (e.cycleTimeout) {
                    clearTimeout(e.cycleTimeout);
                    e.cycleTimeout = 0
                }
                m(f.elements, f, 1, !f.backwards)
            }
        }
        if (b.cycleStop == undefined) b.cycleStop = 0;
        if (c === undefined || c === null) c = {};
        if (c.constructor == String) {
            switch (c) {
                case "destroy":
                case "stop":
                    var g = a(b).data("cycle.opts");
                    if (!g) return false;
                    b.cycleStop++;
                    if (b.cycleTimeout) clearTimeout(b.cycleTimeout);
                    b.cycleTimeout = 0;
                    g.elements && a(g.elements).stop();
                    a(b).removeData("cycle.opts");
                    if (c == "destroy") h(g);
                    return false;
                case "toggle":
                    b.cyclePause = b.cyclePause === 1 ? 0 : 1;
                    j(b.cyclePause, f, b);
                    e(b);
                    return false;
                case "pause":
                    b.cyclePause = 1;
                    e(b);
                    return false;
                case "resume":
                    b.cyclePause = 0;
                    j(false, f, b);
                    e(b);
                    return false;
                case "prev":
                case "next":
                    var g = a(b).data("cycle.opts");
                    if (!g) {
                        d('options not found, "prev/next" ignored');
                        return false
                    }
                    a.fn.cycle[c](g);
                    return false;
                default:
                    c = {
                        fx: c
                    }
            }
            return c
        } else if (c.constructor == Number) {
            var i = c;
            c = a(b).data("cycle.opts");
            if (!c) {
                d("options not found, can not advance slide");
                return false
            }
            if (i < 0 || i >= c.elements.length) {
                d("invalid slide index: " + i);
                return false
            }
            c.nextSlide = i;
            if (b.cycleTimeout) {
                clearTimeout(b.cycleTimeout);
                b.cycleTimeout = 0
            }
            if (typeof f == "string") c.oneTimeFx = f;
            m(c.elements, c, 1, i >= c.currSlide);
            return false
        }
        return c
    }

    function e(b, c, d) {
        var e = a(b).data("cycle.opts");
        var f = !!b.cyclePause;
        if (f && e.paused) e.paused(b, e, c, d);
        else if (!f && e.resumed) e.resumed(b, e, c, d)
    }

    function d() {
        window.console && console.log && console.log("[cycle] " + Array.prototype.join.call(arguments, " "))
    }

    function c(b) {
        a.fn.cycle.debug && d(b)
    }
    var b = "2.9995";
    if (a.support == undefined) {
        a.support = {
            opacity: !a.browser.msie
        }
    }
    a.expr[":"].paused = function(a) {
        return a.cyclePause
    };
    a.fn.cycle = function(b, e) {
        var g = {
            s: this.selector,
            c: this.context
        };
        if (this.length === 0 && b != "stop") {
            if (!a.isReady && g.s) {
                d("DOM not ready, queuing slideshow");
                a(function() {
                    a(g.s, g.c).cycle(b, e)
                });
                return this
            }
            d("terminating; zero elements found by selector" + (a.isReady ? "" : " (DOM not ready)"));
            return this
        }
        return this.each(function() {
            var h = f(this, b, e);
            if (h === false) return;
            h.updateActivePagerLink = h.updateActivePagerLink || a.fn.cycle.updateActivePagerLink;
            if (this.cycleTimeout) clearTimeout(this.cycleTimeout);
            this.cycleTimeout = this.cyclePause = 0;
            var j = a(this);
            var k = h.slideExpr ? a(h.slideExpr, this) : j.children();
            var l = k.get();
            var o = i(j, k, l, h, g);
            if (o === false) return;
            if (l.length < 2) {
                d("terminating; too few slides: " + l.length);
                return
            }
            var p = o.continuous ? 10 : n(l[o.currSlide], l[o.nextSlide], o, !o.backwards);
            if (p) {
                p += o.delay || 0;
                if (p < 10) p = 10;
                c("first timeout: " + p);
                this.cycleTimeout = setTimeout(function() {
                    m(l, o, 0, !h.backwards)
                }, p)
            }
        })
    };
    a.fn.cycle.resetState = function(b, c) {
        c = c || b.fx;
        b.before = [];
        b.after = [];
        b.cssBefore = a.extend({}, b.original.cssBefore);
        b.cssAfter = a.extend({}, b.original.cssAfter);
        b.animIn = a.extend({}, b.original.animIn);
        b.animOut = a.extend({}, b.original.animOut);
        b.fxFn = null;
        a.each(b.original.before, function() {
            b.before.push(this)
        });
        a.each(b.original.after, function() {
            b.after.push(this)
        });
        var d = a.fn.cycle.transitions[c];
        if (a.isFunction(d)) d(b.$cont, a(b.elements), b)
    };
    a.fn.cycle.updateActivePagerLink = function(b, c, d) {
        a(b).each(function() {
            a(this).children().removeClass(d).eq(c).addClass(d)
        })
    };
    a.fn.cycle.next = function(a) {
        o(a, 1)
    };
    a.fn.cycle.prev = function(a) {
        o(a, 0)
    };
    a.fn.cycle.createPagerAnchor = function(b, d, f, g, h) {
        var i;
        if (a.isFunction(h.pagerAnchorBuilder)) {
            i = h.pagerAnchorBuilder(b, d);
            c("pagerAnchorBuilder(" + b + ", el) returned: " + i)
        } else i = '<a href="#">' + (b + 1) + "</a>";
        if (!i) return;
        var j = a(i);
        if (j.parents("body").length === 0) {
            var k = [];
            if (f.length > 1) {
                f.each(function() {
                    var b = j.clone(true);
                    a(this).append(b);
                    k.push(b[0])
                });
                j = a(k)
            } else {
                j.appendTo(f)
            }
        }
        h.pagerAnchors = h.pagerAnchors || [];
        h.pagerAnchors.push(j);
        var l = function(c) {
            c.preventDefault();
            h.nextSlide = b;
            var d = h.$cont[0],
                e = d.cycleTimeout;
            if (e) {
                clearTimeout(e);
                d.cycleTimeout = 0
            }
            var f = h.onPagerEvent || h.pagerClick;
            if (a.isFunction(f)) f(h.nextSlide, g[h.nextSlide]);
            m(g, h, 1, h.currSlide < b)
        };
        if (/mouseenter|mouseover/i.test(h.pagerEvent)) {
            j.hover(l, function() {})
        } else {
            j.bind(h.pagerEvent, l)
        }
        if (!/^click/.test(h.pagerEvent) && !h.allowPagerClickBubble) j.bind("click.cycle", function() {
            return false
        });
        var n = h.$cont[0];
        var o = false;
        if (h.pauseOnPagerHover) {
            j.hover(function() {
                o = true;
                n.cyclePause++;
                e(n, true, true)
            }, function() {
                o && n.cyclePause--;
                e(n, true, true)
            })
        }
    };
    a.fn.cycle.hopsFromLast = function(a, b) {
        var c, d = a.lastSlide,
            e = a.currSlide;
        if (b) c = e > d ? e - d : a.slideCount - d;
        else c = e < d ? d - e : d + a.slideCount - e;
        return c
    };
    a.fn.cycle.commonReset = function(b, c, d, e, f, g) {
        a(d.elements).not(b).hide();
        if (typeof d.cssBefore.opacity == "undefined") d.cssBefore.opacity = 1;
        d.cssBefore.display = "block";
        if (d.slideResize && e !== false && c.cycleW > 0) d.cssBefore.width = c.cycleW;
        if (d.slideResize && f !== false && c.cycleH > 0) d.cssBefore.height = c.cycleH;
        d.cssAfter = d.cssAfter || {};
        d.cssAfter.display = "none";
        a(b).css("zIndex", d.slideCount + (g === true ? 1 : 0));
        a(c).css("zIndex", d.slideCount + (g === true ? 0 : 1))
    };
    a.fn.cycle.custom = function(b, c, d, e, f, g) {
        var h = a(b),
            i = a(c);
        var j = d.speedIn,
            k = d.speedOut,
            l = d.easeIn,
            m = d.easeOut;
        i.css(d.cssBefore);
        if (g) {
            if (typeof g == "number") j = k = g;
            else j = k = 1;
            l = m = null
        }
        var n = function() {
            i.animate(d.animIn, j, l, function() {
                e()
            })
        };
        h.animate(d.animOut, k, m, function() {
            h.css(d.cssAfter);
            if (!d.sync) n()
        });
        if (d.sync) n()
    };
    a.fn.cycle.transitions = {
        fade: function(b, c, d) {
            c.not(":eq(" + d.currSlide + ")").css("opacity", 0);
            d.before.push(function(b, c, d) {
                a.fn.cycle.commonReset(b, c, d);
                d.cssBefore.opacity = 0
            });
            d.animIn = {
                opacity: 1
            };
            d.animOut = {
                opacity: 0
            };
            d.cssBefore = {
                top: 0,
                left: 0
            }
        }
    };
    a.fn.cycle.ver = function() {
        return b
    };
    a.fn.cycle.defaults = {
        activePagerClass: "activeSlide",
        after: null,
        allowPagerClickBubble: false,
        animIn: null,
        animOut: null,
        aspect: false,
        autostop: 0,
        autostopCount: 0,
        backwards: false,
        before: null,
        center: null,
        cleartype: !a.support.opacity,
        cleartypeNoBg: false,
        containerResize: 1,
        continuous: 0,
        cssAfter: null,
        cssBefore: null,
        delay: 0,
        easeIn: null,
        easeOut: null,
        easing: null,
        end: null,
        fastOnEvent: 0,
        fit: 0,
        fx: "fade",
        fxFn: null,
        height: "auto",
        manualTrump: true,
        metaAttr: "cycle",
        next: null,
        nowrap: 0,
        onPagerEvent: null,
        onPrevNextEvent: null,
        pager: null,
        pagerAnchorBuilder: null,
        pagerEvent: "click.cycle",
        pause: 0,
        pauseOnPagerHover: 0,
        prev: null,
        prevNextEvent: "click.cycle",
        random: 0,
        randomizeEffects: 1,
        requeueOnImageNotLoaded: true,
        requeueTimeout: 250,
        rev: 0,
        shuffle: null,
        skipInitializationCallbacks: false,
        slideExpr: null,
        slideResize: 1,
        speed: 1e3,
        speedIn: null,
        speedOut: null,
        startingSlide: 0,
        sync: 1,
        timeout: 4e3,
        timeoutFn: null,
        updateActivePagerLink: null,
        width: null
    }
})(jQuery);
(function(a) {
    a.fn.cycle.transitions.none = function(b, c, d) {
        d.fxFn = function(b, c, d, e) {
            a(c).show();
            a(b).hide();
            e()
        }
    };
    a.fn.cycle.transitions.fadeout = function(b, c, d) {
        c.not(":eq(" + d.currSlide + ")").css({
            display: "block",
            opacity: 1
        });
        d.before.push(function(b, c, d, e, f, g) {
            a(b).css("zIndex", d.slideCount + (!g === true ? 1 : 0));
            a(c).css("zIndex", d.slideCount + (!g === true ? 0 : 1))
        });
        d.animIn.opacity = 1;
        d.animOut.opacity = 0;
        d.cssBefore.opacity = 1;
        d.cssBefore.display = "block";
        d.cssAfter.zIndex = 0
    };
    a.fn.cycle.transitions.scrollUp = function(b, c, d) {
        b.css("overflow", "hidden");
        d.before.push(a.fn.cycle.commonReset);
        var e = b.height();
        d.cssBefore.top = e;
        d.cssBefore.left = 0;
        d.cssFirst.top = 0;
        d.animIn.top = 0;
        d.animOut.top = -e
    };
    a.fn.cycle.transitions.scrollDown = function(b, c, d) {
        b.css("overflow", "hidden");
        d.before.push(a.fn.cycle.commonReset);
        var e = b.height();
        d.cssFirst.top = 0;
        d.cssBefore.top = -e;
        d.cssBefore.left = 0;
        d.animIn.top = 0;
        d.animOut.top = e
    };
    a.fn.cycle.transitions.scrollLeft = function(b, c, d) {
        b.css("overflow", "hidden");
        d.before.push(a.fn.cycle.commonReset);
        var e = b.width();
        d.cssFirst.left = 0;
        d.cssBefore.left = e;
        d.cssBefore.top = 0;
        d.animIn.left = 0;
        d.animOut.left = 0 - e
    };
    a.fn.cycle.transitions.scrollRight = function(b, c, d) {
        b.css("overflow", "hidden");
        d.before.push(a.fn.cycle.commonReset);
        var e = b.width();
        d.cssFirst.left = 0;
        d.cssBefore.left = -e;
        d.cssBefore.top = 0;
        d.animIn.left = 0;
        d.animOut.left = e
    };
    a.fn.cycle.transitions.scrollHorz = function(b, c, d) {
        b.css("overflow", "hidden").width();
        d.before.push(function(b, c, d, e) {
            if (d.rev) e = !e;
            a.fn.cycle.commonReset(b, c, d);
            d.cssBefore.left = e ? c.cycleW - 1 : 1 - c.cycleW;
            d.animOut.left = e ? -b.cycleW : b.cycleW
        });
        d.cssFirst.left = 0;
        d.cssBefore.top = 0;
        d.animIn.left = 0;
        d.animOut.top = 0
    };
    a.fn.cycle.transitions.scrollVert = function(b, c, d) {
        b.css("overflow", "hidden");
        d.before.push(function(b, c, d, e) {
            if (d.rev) e = !e;
            a.fn.cycle.commonReset(b, c, d);
            d.cssBefore.top = e ? 1 - c.cycleH : c.cycleH - 1;
            d.animOut.top = e ? b.cycleH : -b.cycleH
        });
        d.cssFirst.top = 0;
        d.cssBefore.left = 0;
        d.animIn.top = 0;
        d.animOut.left = 0
    };
    a.fn.cycle.transitions.slideX = function(b, c, d) {
        d.before.push(function(b, c, d) {
            a(d.elements).not(b).hide();
            a.fn.cycle.commonReset(b, c, d, false, true);
            d.animIn.width = c.cycleW
        });
        d.cssBefore.left = 0;
        d.cssBefore.top = 0;
        d.cssBefore.width = 0;
        d.animIn.width = "show";
        d.animOut.width = 0
    };
    a.fn.cycle.transitions.slideY = function(b, c, d) {
        d.before.push(function(b, c, d) {
            a(d.elements).not(b).hide();
            a.fn.cycle.commonReset(b, c, d, true, false);
            d.animIn.height = c.cycleH
        });
        d.cssBefore.left = 0;
        d.cssBefore.top = 0;
        d.cssBefore.height = 0;
        d.animIn.height = "show";
        d.animOut.height = 0
    };
    a.fn.cycle.transitions.shuffle = function(b, c, d) {
        var e, f = b.css("overflow", "visible").width();
        c.css({
            left: 0,
            top: 0
        });
        d.before.push(function(b, c, d) {
            a.fn.cycle.commonReset(b, c, d, true, true, true)
        });
        if (!d.speedAdjusted) {
            d.speed = d.speed / 2;
            d.speedAdjusted = true
        }
        d.random = 0;
        d.shuffle = d.shuffle || {
            left: -f,
            top: 15
        };
        d.els = [];
        for (e = 0; e < c.length; e++) d.els.push(c[e]);
        for (e = 0; e < d.currSlide; e++) d.els.push(d.els.shift());
        d.fxFn = function(b, c, d, e, f) {
            if (d.rev) f = !f;
            var g = f ? a(b) : a(c);
            a(c).css(d.cssBefore);
            var h = d.slideCount;
            g.animate(d.shuffle, d.speedIn, d.easeIn, function() {
                var c = a.fn.cycle.hopsFromLast(d, f);
                for (var i = 0; i < c; i++) f ? d.els.push(d.els.shift()) : d.els.unshift(d.els.pop());
                if (f) {
                    for (var j = 0, k = d.els.length; j < k; j++) a(d.els[j]).css("z-index", k - j + h)
                } else {
                    var l = a(b).css("z-index");
                    g.css("z-index", parseInt(l, 10) + 1 + h)
                }
                g.animate({
                    left: 0,
                    top: 0
                }, d.speedOut, d.easeOut, function() {
                    a(f ? this : b).hide();
                    if (e) e()
                })
            })
        };
        a.extend(d.cssBefore, {
            display: "block",
            opacity: 1,
            top: 0,
            left: 0
        })
    };
    a.fn.cycle.transitions.turnUp = function(b, c, d) {
        d.before.push(function(b, c, d) {
            a.fn.cycle.commonReset(b, c, d, true, false);
            d.cssBefore.top = c.cycleH;
            d.animIn.height = c.cycleH;
            d.animOut.width = c.cycleW
        });
        d.cssFirst.top = 0;
        d.cssBefore.left = 0;
        d.cssBefore.height = 0;
        d.animIn.top = 0;
        d.animOut.height = 0
    };
    a.fn.cycle.transitions.turnDown = function(b, c, d) {
        d.before.push(function(b, c, d) {
            a.fn.cycle.commonReset(b, c, d, true, false);
            d.animIn.height = c.cycleH;
            d.animOut.top = b.cycleH
        });
        d.cssFirst.top = 0;
        d.cssBefore.left = 0;
        d.cssBefore.top = 0;
        d.cssBefore.height = 0;
        d.animOut.height = 0
    };
    a.fn.cycle.transitions.turnLeft = function(b, c, d) {
        d.before.push(function(b, c, d) {
            a.fn.cycle.commonReset(b, c, d, false, true);
            d.cssBefore.left = c.cycleW;
            d.animIn.width = c.cycleW
        });
        d.cssBefore.top = 0;
        d.cssBefore.width = 0;
        d.animIn.left = 0;
        d.animOut.width = 0
    };
    a.fn.cycle.transitions.turnRight = function(b, c, d) {
        d.before.push(function(b, c, d) {
            a.fn.cycle.commonReset(b, c, d, false, true);
            d.animIn.width = c.cycleW;
            d.animOut.left = b.cycleW
        });
        a.extend(d.cssBefore, {
            top: 0,
            left: 0,
            width: 0
        });
        d.animIn.left = 0;
        d.animOut.width = 0
    };
    a.fn.cycle.transitions.zoom = function(b, c, d) {
        d.before.push(function(b, c, d) {
            a.fn.cycle.commonReset(b, c, d, false, false, true);
            d.cssBefore.top = c.cycleH / 2;
            d.cssBefore.left = c.cycleW / 2;
            a.extend(d.animIn, {
                top: 0,
                left: 0,
                width: c.cycleW,
                height: c.cycleH
            });
            a.extend(d.animOut, {
                width: 0,
                height: 0,
                top: b.cycleH / 2,
                left: b.cycleW / 2
            })
        });
        d.cssFirst.top = 0;
        d.cssFirst.left = 0;
        d.cssBefore.width = 0;
        d.cssBefore.height = 0
    };
    a.fn.cycle.transitions.fadeZoom = function(b, c, d) {
        d.before.push(function(b, c, d) {
            a.fn.cycle.commonReset(b, c, d, false, false);
            d.cssBefore.left = c.cycleW / 2;
            d.cssBefore.top = c.cycleH / 2;
            a.extend(d.animIn, {
                top: 0,
                left: 0,
                width: c.cycleW,
                height: c.cycleH
            })
        });
        d.cssBefore.width = 0;
        d.cssBefore.height = 0;
        d.animOut.opacity = 0
    };
    a.fn.cycle.transitions.blindX = function(b, c, d) {
        var e = b.css("overflow", "hidden").width();
        d.before.push(function(b, c, d) {
            a.fn.cycle.commonReset(b, c, d);
            d.animIn.width = c.cycleW;
            d.animOut.left = b.cycleW
        });
        d.cssBefore.left = e;
        d.cssBefore.top = 0;
        d.animIn.left = 0;
        d.animOut.left = e
    };
    a.fn.cycle.transitions.blindY = function(b, c, d) {
        var e = b.css("overflow", "hidden").height();
        d.before.push(function(b, c, d) {
            a.fn.cycle.commonReset(b, c, d);
            d.animIn.height = c.cycleH;
            d.animOut.top = b.cycleH
        });
        d.cssBefore.top = e;
        d.cssBefore.left = 0;
        d.animIn.top = 0;
        d.animOut.top = e
    };
    a.fn.cycle.transitions.blindZ = function(b, c, d) {
        var e = b.css("overflow", "hidden").height();
        var f = b.width();
        d.before.push(function(b, c, d) {
            a.fn.cycle.commonReset(b, c, d);
            d.animIn.height = c.cycleH;
            d.animOut.top = b.cycleH
        });
        d.cssBefore.top = e;
        d.cssBefore.left = f;
        d.animIn.top = 0;
        d.animIn.left = 0;
        d.animOut.top = e;
        d.animOut.left = f
    };
    a.fn.cycle.transitions.growX = function(b, c, d) {
        d.before.push(function(b, c, d) {
            a.fn.cycle.commonReset(b, c, d, false, true);
            d.cssBefore.left = this.cycleW / 2;
            d.animIn.left = 0;
            d.animIn.width = this.cycleW;
            d.animOut.left = 0
        });
        d.cssBefore.top = 0;
        d.cssBefore.width = 0
    };
    a.fn.cycle.transitions.growY = function(b, c, d) {
        d.before.push(function(b, c, d) {
            a.fn.cycle.commonReset(b, c, d, true, false);
            d.cssBefore.top = this.cycleH / 2;
            d.animIn.top = 0;
            d.animIn.height = this.cycleH;
            d.animOut.top = 0
        });
        d.cssBefore.height = 0;
        d.cssBefore.left = 0
    };
    a.fn.cycle.transitions.curtainX = function(b, c, d) {
        d.before.push(function(b, c, d) {
            a.fn.cycle.commonReset(b, c, d, false, true, true);
            d.cssBefore.left = c.cycleW / 2;
            d.animIn.left = 0;
            d.animIn.width = this.cycleW;
            d.animOut.left = b.cycleW / 2;
            d.animOut.width = 0
        });
        d.cssBefore.top = 0;
        d.cssBefore.width = 0
    };
    a.fn.cycle.transitions.curtainY = function(b, c, d) {
        d.before.push(function(b, c, d) {
            a.fn.cycle.commonReset(b, c, d, true, false, true);
            d.cssBefore.top = c.cycleH / 2;
            d.animIn.top = 0;
            d.animIn.height = c.cycleH;
            d.animOut.top = b.cycleH / 2;
            d.animOut.height = 0
        });
        d.cssBefore.height = 0;
        d.cssBefore.left = 0
    };
    a.fn.cycle.transitions.cover = function(b, c, d) {
        var e = d.direction || "left";
        var f = b.css("overflow", "hidden").width();
        var g = b.height();
        d.before.push(function(b, c, d) {
            a.fn.cycle.commonReset(b, c, d);
            if (e == "right") d.cssBefore.left = -f;
            else if (e == "up") d.cssBefore.top = g;
            else if (e == "down") d.cssBefore.top = -g;
            else d.cssBefore.left = f
        });
        d.animIn.left = 0;
        d.animIn.top = 0;
        d.cssBefore.top = 0;
        d.cssBefore.left = 0
    };
    a.fn.cycle.transitions.uncover = function(b, c, d) {
        var e = d.direction || "left";
        var f = b.css("overflow", "hidden").width();
        var g = b.height();
        d.before.push(function(b, c, d) {
            a.fn.cycle.commonReset(b, c, d, true, true, true);
            if (e == "right") d.animOut.left = f;
            else if (e == "up") d.animOut.top = -g;
            else if (e == "down") d.animOut.top = g;
            else d.animOut.left = -f
        });
        d.animIn.left = 0;
        d.animIn.top = 0;
        d.cssBefore.top = 0;
        d.cssBefore.left = 0
    };
    a.fn.cycle.transitions.toss = function(b, c, d) {
        var e = b.css("overflow", "visible").width();
        var f = b.height();
        d.before.push(function(b, c, d) {
            a.fn.cycle.commonReset(b, c, d, true, true, true);
            if (!d.animOut.left && !d.animOut.top) a.extend(d.animOut, {
                left: e * 2,
                top: -f / 2,
                opacity: 0
            });
            else d.animOut.opacity = 0
        });
        d.cssBefore.left = 0;
        d.cssBefore.top = 0;
        d.animIn.left = 0
    };
    a.fn.cycle.transitions.wipe = function(b, c, d) {
        var e = b.css("overflow", "hidden").width();
        var f = b.height();
        d.cssBefore = d.cssBefore || {};
        var g;
        if (d.clip) {
            if (/l2r/.test(d.clip)) g = "rect(0px 0px " + f + "px 0px)";
            else if (/r2l/.test(d.clip)) g = "rect(0px " + e + "px " + f + "px " + e + "px)";
            else if (/t2b/.test(d.clip)) g = "rect(0px " + e + "px 0px 0px)";
            else if (/b2t/.test(d.clip)) g = "rect(" + f + "px " + e + "px " + f + "px 0px)";
            else if (/zoom/.test(d.clip)) {
                var h = parseInt(f / 2, 10);
                var i = parseInt(e / 2, 10);
                g = "rect(" + h + "px " + i + "px " + h + "px " + i + "px)"
            }
        }
        d.cssBefore.clip = d.cssBefore.clip || g || "rect(0px 0px 0px 0px)";
        var j = d.cssBefore.clip.match(/(\d+)/g);
        var k = parseInt(j[0], 10),
            l = parseInt(j[1], 10),
            m = parseInt(j[2], 10),
            n = parseInt(j[3], 10);
        d.before.push(function(b, c, d) {
            if (b == c) return;
            var g = a(b),
                h = a(c);
            a.fn.cycle.commonReset(b, c, d, true, true, false);
            d.cssAfter.display = "block";
            var i = 1,
                j = parseInt(d.speedIn / 13, 10) - 1;
            (function o() {
                var a = k ? k - parseInt(i * (k / j), 10) : 0;
                var b = n ? n - parseInt(i * (n / j), 10) : 0;
                var c = m < f ? m + parseInt(i * ((f - m) / j || 1), 10) : f;
                var d = l < e ? l + parseInt(i * ((e - l) / j || 1), 10) : e;
                h.css({
                    clip: "rect(" + a + "px " + d + "px " + c + "px " + b + "px)"
                });
                i++ <= j ? setTimeout(o, 13) : g.css("display", "none")
            })()
        });
        a.extend(d.cssBefore, {
            display: "block",
            opacity: 1,
            top: 0,
            left: 0
        });
        d.animIn = {
            left: 0
        };
        d.animOut = {
            left: 0
        }
    }
})(jQuery);
jQuery.fn.nggSlideshow = function(args) {
    var defaults = {
        id: 1,
        width: 320,
        height: 240,
        fx: 'fade',
        domain: '',
        timeout: 5000
    };
    var s = jQuery.extend({}, defaults, args);
    var obj = this.selector;
    var stack = [];
    var url = s.domain + 'index.php?callback=json&api_key=true&format=json&method=gallery&id=' + s.id;
    var stackLength = 0;
    jQuery.getJSON(url, function(r) {
        if (r.stat == "ok") {
            for (img in r.images) {
                var photo = r.images[img];
                stack.push(decodeURI(photo['imageURL']))
            }
            stackLength = stack.length;
            loadImage(1)
        }
    });

    function loadImage(num) {
        if (stackLength > 0 && num <= 3) {
            var img = new Image();
            img.src = stack.shift();
            stackLength--;
            jQuery(img).one('load', function() {
                appendImage(img, num)
            }).each(function() {
                if (this.complete) jQuery(this).trigger('load')
            })
        }
    }

    function appendImage(img, num) {
        jQuery(img).hide();
        jQuery(obj).append(imageResize(img, s.width, s.height));
        if (num == 3 || stackLength == 0) {
            startSlideshow()
        } else {
            loadImage(++num)
        }
    }

    function startSlideshow() {
        jQuery(obj + '-loader').empty().remove();
        jQuery(obj + ' img:first').fadeIn(1000, function() {
            jQuery(obj).cycle({
                fx: s.fx,
                containerResize: 1,
                fit: 1,
                timeout: s.timeout,
                next: obj,
                before: jCycle_onBefore
            })
        })
    }

    function imageResize(img, maxWidth, maxHeight) {
        if (!img.complete) jQuery(img).bind('load', function() {
            imageResize(img, maxWidth, maxHeight)
        });
        if (img.height == 0 || img.width == 0) return img;
        var width, height;
        if (img.width * maxHeight > img.height * maxWidth) {
            if (img.width > maxWidth) {
                width = maxWidth;
                height = Math.round(img.height / img.width * maxWidth)
            }
        } else {
            if (img.height > maxHeight) {
                height = maxHeight;
                width = Math.round(img.width / img.height * maxHeight)
            }
        }
        jQuery(img).css({
            'height': height,
            'width': width
        });
        return img
    };

    function jCycle_onBefore(curr, next, opts) {
        if (opts.addSlide)
            if (stackLength > 0) {
                var img = new Image();
                img.src = stack.shift();
                stackLength--;
                jQuery(img).bind('load', function() {
                    opts.addSlide(imageResize(this, s.width, s.height))
                })
            }
    }
}