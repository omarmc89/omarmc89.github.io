// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  const previousRequire = typeof parcelRequire === 'function' && parcelRequire
  const nodeRequire = typeof require === 'function' && require

  function newRequire (name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        const currentRequire = typeof parcelRequire === 'function' && parcelRequire
        if (!jumped && currentRequire) {
          return currentRequire(name, true)
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true)
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name)
        }

        const err = new Error('Cannot find module \'' + name + '\'')
        err.code = 'MODULE_NOT_FOUND'
        throw err
      }

      localRequire.resolve = resolve
      localRequire.cache = {}

      const module = cache[name] = new newRequire.Module(name)

      modules[name][0].call(module.exports, localRequire, module, module.exports, this)
    }

    return cache[name].exports

    function localRequire (x) {
      return newRequire(localRequire.resolve(x))
    }

    function resolve (x) {
      return modules[name][1][x] || x
    }
  }

  function Module (moduleName) {
    this.id = moduleName
    this.bundle = newRequire
    this.exports = {}
  }

  newRequire.isParcelRequire = true
  newRequire.Module = Module
  newRequire.modules = modules
  newRequire.cache = cache
  newRequire.parent = previousRequire
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports
    }, {}]
  }

  let error
  for (let i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i])
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    const mainExports = newRequire(entry[entry.length - 1])

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports

    // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports
      })

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error
  }

  return newRequire
})({
  'js/vendor/modernizr-3.11.2.min.js': [function (require, module, exports) {
    function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

    /*! modernizr 3.11.2 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csscolumns-customelements-flexbox-history-picture-pointerevents-postmessage-sizes-srcset-webgl-websockets-webworkers-addtest-domprefixes-hasevent-mq-prefixedcssvalue-prefixes-setclasses-testallprops-testprop-teststyles ! */
    !(function (e, t, n, r) {
      function o (e, t) {
        return _typeof(e) === t
      }

      function i (e) {
        let t = _.className
        const n = Modernizr._config.classPrefix || ''

        if (S && (t = t.baseVal), Modernizr._config.enableJSClass) {
          const r = new RegExp('(^|\\s)' + n + 'no-js(\\s|$)')
          t = t.replace(r, '$1' + n + 'js$2')
        }

        Modernizr._config.enableClasses && (e.length > 0 && (t += ' ' + n + e.join(' ' + n)), S ? _.className.baseVal = t : _.className = t)
      }

      function s (e, t) {
        if (_typeof(e) == 'object') {
          for (const n in e) {
            k(e, n) && s(n, e[n])
          }
        } else {
          e = e.toLowerCase()
          const r = e.split('.')
          let o = Modernizr[r[0]]
          if (r.length === 2 && (o = o[r[1]]), void 0 !== o) return Modernizr
          t = typeof t === 'function' ? t() : t, r.length === 1 ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), i([(t && !1 !== t ? '' : 'no-') + r.join('-')]), Modernizr._trigger(e, t)
        }
        return Modernizr
      }

      function a () {
        return typeof n.createElement !== 'function' ? n.createElement(arguments[0]) : S ? n.createElementNS.call(n, 'http://www.w3.org/2000/svg', arguments[0]) : n.createElement.apply(n, arguments)
      }

      function l () {
        let e = n.body
        return e || (e = a(S ? 'svg' : 'body'), e.fake = !0), e
      }

      function u (e, t, r, o) {
        let i
        let s
        let u
        let f
        const c = 'modernizr'
        const d = a('div')
        const p = l()
        if (parseInt(r, 10)) {
          for (; r--;) {
            u = a('div'), u.id = o ? o[r] : c + (r + 1), d.appendChild(u)
          }
        }
        return i = a('style'), i.type = 'text/css', i.id = 's' + c, (p.fake ? p : d).appendChild(i), p.appendChild(d), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(n.createTextNode(e)), d.id = c, p.fake && (p.style.background = '', p.style.overflow = 'hidden', f = _.style.overflow, _.style.overflow = 'hidden', _.appendChild(p)), s = t(d, e), p.fake ? (p.parentNode.removeChild(p), _.style.overflow = f, _.offsetHeight) : d.parentNode.removeChild(d), !!s
      }

      function f (e, n, r) {
        let o

        if ('getComputedStyle' in t) {
          o = getComputedStyle.call(t, e, n)
          const i = t.console
          if (o !== null) r && (o = o.getPropertyValue(r)); else if (i) {
            const s = i.error ? 'error' : 'log'
            i[s].call(i, 'getComputedStyle returning null, its possible modernizr test results are inaccurate')
          }
        } else o = !n && e.currentStyle && e.currentStyle[r]

        return o
      }

      function c (e, t) {
        return !!~('' + e).indexOf(t)
      }

      function d (e) {
        return e.replace(/([A-Z])/g, function (e, t) {
          return '-' + t.toLowerCase()
        }).replace(/^ms-/, '-ms-')
      }

      function p (e, n) {
        let o = e.length

        if ('CSS' in t && 'supports' in t.CSS) {
          for (; o--;) {
            if (t.CSS.supports(d(e[o]), n)) return !0
          }

          return !1
        }

        if ('CSSSupportsRule' in t) {
          for (var i = []; o--;) {
            i.push('(' + d(e[o]) + ':' + n + ')')
          }

          return i = i.join(' or '), u('@supports (' + i + ') { #modernizr { position: absolute; } }', function (e) {
            return f(e, null, 'position') === 'absolute'
          })
        }

        return r
      }

      function m (e) {
        return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
          return t + n.toUpperCase()
        }).replace(/^-/, '')
      }

      function h (e, t, n, i) {
        function s () {
          u && (delete N.style, delete N.modElem)
        }

        if (i = !o(i, 'undefined') && i, !o(n, 'undefined')) {
          const l = p(e, n)
          if (!o(l, 'undefined')) return l
        }

        for (var u, f, d, h, A, v = ['modernizr', 'tspan', 'samp']; !N.style && v.length;) {
          u = !0, N.modElem = a(v.shift()), N.style = N.modElem.style
        }

        for (d = e.length, f = 0; f < d; f++) {
          if (h = e[f], A = N.style[h], c(h, '-') && (h = m(h)), N.style[h] !== r) {
            if (i || o(n, 'undefined')) return s(), t !== 'pfx' || h

            try {
              N.style[h] = n
            } catch (e) {}

            if (N.style[h] !== A) return s(), t !== 'pfx' || h
          }
        }

        return s(), !1
      }

      function A (e, t) {
        return function () {
          return e.apply(t, arguments)
        }
      }

      function v (e, t, n) {
        let r

        for (const i in e) {
          if (e[i] in t) return !1 === n ? e[i] : (r = t[e[i]], o(r, 'function') ? A(r, n || t) : r)
        }

        return !1
      }

      function g (e, t, n, r, i) {
        const s = e.charAt(0).toUpperCase() + e.slice(1)
        let a = (e + ' ' + O.join(s + ' ') + s).split(' ')
        return o(t, 'string') || o(t, 'undefined') ? h(a, t, r, i) : (a = (e + ' ' + T.join(s + ' ') + s).split(' '), v(a, t, n))
      }

      function y (e, t, n) {
        return g(e, r, r, t, n)
      }

      const w = []
      const C = {
        _version: '3.11.2',
        _config: {
          classPrefix: '',
          enableClasses: !0,
          enableJSClass: !0,
          usePrefixes: !0
        },
        _q: [],
        on: function on (e, t) {
          const n = this
          setTimeout(function () {
            t(n[e])
          }, 0)
        },
        addTest: function addTest (e, t, n) {
          w.push({
            name: e,
            fn: t,
            options: n
          })
        },
        addAsyncTest: function addAsyncTest (e) {
          w.push({
            name: null,
            fn: e
          })
        }
      }
      var Modernizr = function Modernizr () {}

      Modernizr.prototype = C, Modernizr = new Modernizr()

      const b = []
      var _ = n.documentElement
      var S = _.nodeName.toLowerCase() === 'svg'
      const x = 'Moz O ms Webkit'
      var T = C._config.usePrefixes ? x.toLowerCase().split(' ') : []

      C._domPrefixes = T
      const P = C._config.usePrefixes ? ' -webkit- -moz- -o- -ms- '.split(' ') : ['', '']
      C._prefixes = P
      let k
      !(function () {
        const e = {}.hasOwnProperty
        k = o(e, 'undefined') || o(e.call, 'undefined')
          ? function (e, t) {
            return t in e && o(e.constructor.prototype[t], 'undefined')
          }
          : function (t, n) {
            return e.call(t, n)
          }
      }()), C._l = {}, C.on = function (e, t) {
        this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function () {
          Modernizr._trigger(e, Modernizr[e])
        }, 0)
      }, C._trigger = function (e, t) {
        if (this._l[e]) {
          const n = this._l[e]
          setTimeout(function () {
            let e

            for (e = 0; e < n.length; e++) {
              (0, n[e])(t)
            }
          }, 0), delete this._l[e]
        }
      }, Modernizr._q.push(function () {
        C.addTest = s
      })

      const E = (function () {
        function e (e, n) {
          let o
          return !!e && (n && typeof n !== 'string' || (n = a(n || 'div')), e = 'on' + e, o = e in n, !o && t && (n.setAttribute || (n = a('div')), n.setAttribute(e, ''), o = typeof n[e] === 'function', n[e] !== r && (n[e] = r), n.removeAttribute(e)), o)
        }

        var t = !('onblur' in _)
        return e
      }())

      C.hasEvent = E

      const B = (function () {
        const e = t.matchMedia || t.msMatchMedia
        return e
          ? function (t) {
            const n = e(t)
            return n && n.matches || !1
          }
          : function (e) {
            let t = !1
            return u('@media ' + e + ' { #modernizr { position: absolute; } }', function (e) {
              t = f(e, null, 'position') === 'absolute'
            }), t
          }
      }())

      C.mq = B

      const z = function z (e, t) {
        let n = !1
        const r = a('div')
        const o = r.style

        if (e in o) {
          let i = T.length

          for (o[e] = t, n = o[e]; i-- && !n;) {
            o[e] = '-' + T[i] + '-' + t, n = o[e]
          }
        }

        return n === '' && (n = !1), n
      }

      C.prefixedCSSValue = z
      var O = C._config.usePrefixes ? x.split(' ') : []
      C._cssomPrefixes = O
      const L = {
        elem: a('modernizr')
      }

      Modernizr._q.push(function () {
        delete L.elem
      })

      var N = {
        style: L.elem.style
      }
      Modernizr._q.unshift(function () {
        delete N.style
      }), C.testAllProps = g, C.testAllProps = y
      C.testProp = function (e, t, n) {
        return h([e], r, t, n)
      }, C.testStyles = u
      Modernizr.addTest('customelements', 'customElements' in t), Modernizr.addTest('history', function () {
        const e = navigator.userAgent
        return !!e && (e.indexOf('Android 2.') === -1 && e.indexOf('Android 4.0') === -1 || e.indexOf('Mobile Safari') === -1 || e.indexOf('Chrome') !== -1 || e.indexOf('Windows Phone') !== -1 || location.protocol === 'file:') && t.history && 'pushState' in t.history
      })
      const R = [''].concat(T)
      C._domPrefixesAll = R, Modernizr.addTest('pointerevents', function () {
        for (let e = 0, t = R.length; e < t; e++) {
          if (E(R[e] + 'pointerdown')) return !0
        }

        return !1
      })
      let j = !0

      try {
        t.postMessage({
          toString: function toString () {
            j = !1
          }
        }, '*')
      } catch (e) {}

      Modernizr.addTest('postmessage', new Boolean('postMessage' in t)), Modernizr.addTest('postmessage.structuredclones', j), Modernizr.addTest('webgl', function () {
        return 'WebGLRenderingContext' in t
      })
      let M = !1

      try {
        M = 'WebSocket' in t && t.WebSocket.CLOSING === 2
      } catch (e) {}

      Modernizr.addTest('websockets', M), Modernizr.addTest('cssanimations', y('animationName', 'a', !0)), (function () {
        Modernizr.addTest('csscolumns', function () {
          let e = !1
          const t = y('columnCount')

          try {
            e = !!t, e && (e = new Boolean(e))
          } catch (e) {}

          return e
        })

        for (var e, t, n = ['Width', 'Span', 'Fill', 'Gap', 'Rule', 'RuleColor', 'RuleStyle', 'RuleWidth', 'BreakBefore', 'BreakAfter', 'BreakInside'], r = 0; r < n.length; r++) {
          e = n[r].toLowerCase(), t = y('column' + n[r]), e !== 'breakbefore' && e !== 'breakafter' && e !== 'breakinside' || (t = t || y(n[r])), Modernizr.addTest('csscolumns.' + e, t)
        }
      }()), Modernizr.addTest('flexbox', y('flexBasis', '1px', !0)), Modernizr.addTest('picture', 'HTMLPictureElement' in t), Modernizr.addAsyncTest(function () {
        let e
        let t
        let n
        const r = a('img')
        const o = ('sizes' in r)
        !o && 'srcset' in r
          ? (t = 'data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==', e = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==', n = function n () {
              s('sizes', r.width === 2)
            }, r.onload = n, r.onerror = n, r.setAttribute('sizes', '9px'), r.srcset = e + ' 1w,' + t + ' 8w', r.src = e)
          : s('sizes', o)
      }), Modernizr.addTest('srcset', 'srcset' in a('img')), Modernizr.addTest('webworkers', 'Worker' in t), (function () {
        let e, t, n, r, i, s, a

        for (const l in w) {
          if (w.hasOwnProperty(l)) {
            if (e = [], t = w[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) {
              for (n = 0; n < t.options.aliases.length; n++) {
                e.push(t.options.aliases[n].toLowerCase())
              }
            }

            for (r = o(t.fn, 'function') ? t.fn() : t.fn, i = 0; i < e.length; i++) {
              s = e[i], a = s.split('.'), a.length === 1 ? Modernizr[a[0]] = r : (Modernizr[a[0]] && (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean) || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = r), b.push((r ? '' : 'no-') + a.join('-'))
            }
          }
        }
      }()), i(b), delete C.addTest, delete C.addAsyncTest

      for (let W = 0; W < Modernizr._q.length; W++) {
        Modernizr._q[W]()
      }

      e.Modernizr = Modernizr
    }(window, window, document))
  }, {}],
  'node_modules/parcel-bundler/src/builtins/hmr-runtime.js': [function (require, module, exports) {
    const global = arguments[3]
    const OVERLAY_ID = '__parcel__error__overlay__'
    const OldModule = module.bundle.Module

    function Module (moduleName) {
      OldModule.call(this, moduleName)
      this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function (fn) {
          this._acceptCallbacks.push(fn || function () {})
        },
        dispose: function (fn) {
          this._disposeCallbacks.push(fn)
        }
      }
      module.bundle.hotData = null
    }

    module.bundle.Module = Module
    let checkedAssets, assetsToAccept
    const parent = module.bundle.parent

    if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
      const hostname = '' || location.hostname
      const protocol = location.protocol === 'https:' ? 'wss' : 'ws'
      const ws = new WebSocket(protocol + '://' + hostname + ':' + '49834' + '/')

      ws.onmessage = function (event) {
        checkedAssets = {}
        assetsToAccept = []
        const data = JSON.parse(event.data)

        if (data.type === 'update') {
          let handled = false
          data.assets.forEach(function (asset) {
            if (!asset.isNew) {
              const didAccept = hmrAcceptCheck(global.parcelRequire, asset.id)

              if (didAccept) {
                handled = true
              }
            }
          }) // Enable HMR for CSS by default.

          handled = handled || data.assets.every(function (asset) {
            return asset.type === 'css' && asset.generated.js
          })

          if (handled) {
            console.clear()
            data.assets.forEach(function (asset) {
              hmrApply(global.parcelRequire, asset)
            })
            assetsToAccept.forEach(function (v) {
              hmrAcceptRun(v[0], v[1])
            })
          } else if (location.reload) {
            // `location` global exists in a web worker context but lacks `.reload()` function.
            location.reload()
          }
        }

        if (data.type === 'reload') {
          ws.close()

          ws.onclose = function () {
            location.reload()
          }
        }

        if (data.type === 'error-resolved') {
          console.log('[parcel] ✨ Error resolved')
          removeErrorOverlay()
        }

        if (data.type === 'error') {
          console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack)
          removeErrorOverlay()
          const overlay = createErrorOverlay(data)
          document.body.appendChild(overlay)
        }
      }
    }

    function removeErrorOverlay () {
      const overlay = document.getElementById(OVERLAY_ID)

      if (overlay) {
        overlay.remove()
      }
    }

    function createErrorOverlay (data) {
      const overlay = document.createElement('div')
      overlay.id = OVERLAY_ID // html encode message and stack trace

      const message = document.createElement('div')
      const stackTrace = document.createElement('pre')
      message.innerText = data.error.message
      stackTrace.innerText = data.error.stack
      overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>'
      return overlay
    }

    function getParents (bundle, id) {
      const modules = bundle.modules

      if (!modules) {
        return []
      }

      let parents = []
      let k, d, dep

      for (k in modules) {
        for (d in modules[k][1]) {
          dep = modules[k][1][d]

          if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
            parents.push(k)
          }
        }
      }

      if (bundle.parent) {
        parents = parents.concat(getParents(bundle.parent, id))
      }

      return parents
    }

    function hmrApply (bundle, asset) {
      const modules = bundle.modules

      if (!modules) {
        return
      }

      if (modules[asset.id] || !bundle.parent) {
        const fn = new Function('require', 'module', 'exports', asset.generated.js)
        asset.isNew = !modules[asset.id]
        modules[asset.id] = [fn, asset.deps]
      } else if (bundle.parent) {
        hmrApply(bundle.parent, asset)
      }
    }

    function hmrAcceptCheck (bundle, id) {
      const modules = bundle.modules

      if (!modules) {
        return
      }

      if (!modules[id] && bundle.parent) {
        return hmrAcceptCheck(bundle.parent, id)
      }

      if (checkedAssets[id]) {
        return
      }

      checkedAssets[id] = true
      const cached = bundle.cache[id]
      assetsToAccept.push([bundle, id])

      if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        return true
      }

      return getParents(global.parcelRequire, id).some(function (id) {
        return hmrAcceptCheck(global.parcelRequire, id)
      })
    }

    function hmrAcceptRun (bundle, id) {
      let cached = bundle.cache[id]
      bundle.hotData = {}

      if (cached) {
        cached.hot.data = bundle.hotData
      }

      if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
        cached.hot._disposeCallbacks.forEach(function (cb) {
          cb(bundle.hotData)
        })
      }

      delete bundle.cache[id]
      bundle(id)
      cached = bundle.cache[id]

      if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        cached.hot._acceptCallbacks.forEach(function (cb) {
          cb()
        })

        return true
      }
    }
  }, {}]
}, {}, ['node_modules/parcel-bundler/src/builtins/hmr-runtime.js', 'js/vendor/modernizr-3.11.2.min.js'], null)
// # sourceMappingURL=/modernizr-3.11.2.min.659b9f56.js.map
