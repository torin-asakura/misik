!(function (t) {
  var e = {}
  function r(n) {
    if (e[n]) return e[n].exports
    var o = (e[n] = { i: n, l: !1, exports: {} })
    return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports
  }
  ;(r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n })
    }),
    (r.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t
      var n = Object.create(null)
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var o in t)
          r.d(
            n,
            o,
            function (e) {
              return t[e]
            }.bind(null, o)
          )
      return n
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default
            }
          : function () {
              return t
            }
      return r.d(e, 'a', e), e
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (r.p = ''),
    r((r.s = 0))
})([
  function (t, e, r) {
    r(1), (t.exports = r(2))
  },
  function (t, e) {
    var r = 'undefined' != typeof self ? self : this,
      n = (function () {
        function t() {
          ;(this.fetch = !1), (this.DOMException = r.DOMException)
        }
        return (t.prototype = r), new t()
      })()
    !(function (t) {
      !(function (e) {
        var r = 'URLSearchParams' in t,
          n = 'Symbol' in t && 'iterator' in Symbol,
          o =
            'FileReader' in t &&
            'Blob' in t &&
            (function () {
              try {
                return new Blob(), !0
              } catch (t) {
                return !1
              }
            })(),
          i = 'FormData' in t,
          s = 'ArrayBuffer' in t
        if (s)
          var a = [
              '[object Int8Array]',
              '[object Uint8Array]',
              '[object Uint8ClampedArray]',
              '[object Int16Array]',
              '[object Uint16Array]',
              '[object Int32Array]',
              '[object Uint32Array]',
              '[object Float32Array]',
              '[object Float64Array]',
            ],
            u =
              ArrayBuffer.isView ||
              function (t) {
                return t && a.indexOf(Object.prototype.toString.call(t)) > -1
              }
        function c(t) {
          if (('string' != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)))
            throw new TypeError('Invalid character in header field name')
          return t.toLowerCase()
        }
        function f(t) {
          return 'string' != typeof t && (t = String(t)), t
        }
        function h(t) {
          var e = {
            next: function () {
              var e = t.shift()
              return { done: void 0 === e, value: e }
            },
          }
          return (
            n &&
              (e[Symbol.iterator] = function () {
                return e
              }),
            e
          )
        }
        function d(t) {
          ;(this.map = {}),
            t instanceof d
              ? t.forEach(function (t, e) {
                  this.append(e, t)
                }, this)
              : Array.isArray(t)
              ? t.forEach(function (t) {
                  this.append(t[0], t[1])
                }, this)
              : t &&
                Object.getOwnPropertyNames(t).forEach(function (e) {
                  this.append(e, t[e])
                }, this)
        }
        function l(t) {
          if (t.bodyUsed) return Promise.reject(new TypeError('Already read'))
          t.bodyUsed = !0
        }
        function p(t) {
          return new Promise(function (e, r) {
            ;(t.onload = function () {
              e(t.result)
            }),
              (t.onerror = function () {
                r(t.error)
              })
          })
        }
        function y(t) {
          var e = new FileReader(),
            r = p(e)
          return e.readAsArrayBuffer(t), r
        }
        function b(t) {
          if (t.slice) return t.slice(0)
          var e = new Uint8Array(t.byteLength)
          return e.set(new Uint8Array(t)), e.buffer
        }
        function m() {
          return (
            (this.bodyUsed = !1),
            (this._initBody = function (t) {
              var e
              ;(this._bodyInit = t),
                t
                  ? 'string' == typeof t
                    ? (this._bodyText = t)
                    : o && Blob.prototype.isPrototypeOf(t)
                    ? (this._bodyBlob = t)
                    : i && FormData.prototype.isPrototypeOf(t)
                    ? (this._bodyFormData = t)
                    : r && URLSearchParams.prototype.isPrototypeOf(t)
                    ? (this._bodyText = t.toString())
                    : s && o && (e = t) && DataView.prototype.isPrototypeOf(e)
                    ? ((this._bodyArrayBuffer = b(t.buffer)),
                      (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                    : s && (ArrayBuffer.prototype.isPrototypeOf(t) || u(t))
                    ? (this._bodyArrayBuffer = b(t))
                    : (this._bodyText = t = Object.prototype.toString.call(t))
                  : (this._bodyText = ''),
                this.headers.get('content-type') ||
                  ('string' == typeof t
                    ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
                    : this._bodyBlob && this._bodyBlob.type
                    ? this.headers.set('content-type', this._bodyBlob.type)
                    : r &&
                      URLSearchParams.prototype.isPrototypeOf(t) &&
                      this.headers.set(
                        'content-type',
                        'application/x-www-form-urlencoded;charset=UTF-8'
                      ))
            }),
            o &&
              ((this.blob = function () {
                var t = l(this)
                if (t) return t
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob)
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]))
                if (this._bodyFormData) throw new Error('could not read FormData body as blob')
                return Promise.resolve(new Blob([this._bodyText]))
              }),
              (this.arrayBuffer = function () {
                return this._bodyArrayBuffer
                  ? l(this) || Promise.resolve(this._bodyArrayBuffer)
                  : this.blob().then(y)
              })),
            (this.text = function () {
              var t,
                e,
                r,
                n = l(this)
              if (n) return n
              if (this._bodyBlob)
                return (t = this._bodyBlob), (e = new FileReader()), (r = p(e)), e.readAsText(t), r
              if (this._bodyArrayBuffer)
                return Promise.resolve(
                  (function (t) {
                    for (
                      var e = new Uint8Array(t), r = new Array(e.length), n = 0;
                      n < e.length;
                      n++
                    )
                      r[n] = String.fromCharCode(e[n])
                    return r.join('')
                  })(this._bodyArrayBuffer)
                )
              if (this._bodyFormData) throw new Error('could not read FormData body as text')
              return Promise.resolve(this._bodyText)
            }),
            i &&
              (this.formData = function () {
                return this.text().then(O)
              }),
            (this.json = function () {
              return this.text().then(JSON.parse)
            }),
            this
          )
        }
        ;(d.prototype.append = function (t, e) {
          ;(t = c(t)), (e = f(e))
          var r = this.map[t]
          this.map[t] = r ? r + ', ' + e : e
        }),
          (d.prototype.delete = function (t) {
            delete this.map[c(t)]
          }),
          (d.prototype.get = function (t) {
            return (t = c(t)), this.has(t) ? this.map[t] : null
          }),
          (d.prototype.has = function (t) {
            return this.map.hasOwnProperty(c(t))
          }),
          (d.prototype.set = function (t, e) {
            this.map[c(t)] = f(e)
          }),
          (d.prototype.forEach = function (t, e) {
            for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
          }),
          (d.prototype.keys = function () {
            var t = []
            return (
              this.forEach(function (e, r) {
                t.push(r)
              }),
              h(t)
            )
          }),
          (d.prototype.values = function () {
            var t = []
            return (
              this.forEach(function (e) {
                t.push(e)
              }),
              h(t)
            )
          }),
          (d.prototype.entries = function () {
            var t = []
            return (
              this.forEach(function (e, r) {
                t.push([r, e])
              }),
              h(t)
            )
          }),
          n && (d.prototype[Symbol.iterator] = d.prototype.entries)
        var E = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
        function v(t, e) {
          var r,
            n,
            o = (e = e || {}).body
          if (t instanceof v) {
            if (t.bodyUsed) throw new TypeError('Already read')
            ;(this.url = t.url),
              (this.credentials = t.credentials),
              e.headers || (this.headers = new d(t.headers)),
              (this.method = t.method),
              (this.mode = t.mode),
              (this.signal = t.signal),
              o || null == t._bodyInit || ((o = t._bodyInit), (t.bodyUsed = !0))
          } else this.url = String(t)
          if (
            ((this.credentials = e.credentials || this.credentials || 'same-origin'),
            (!e.headers && this.headers) || (this.headers = new d(e.headers)),
            (this.method =
              ((r = e.method || this.method || 'GET'),
              (n = r.toUpperCase()),
              E.indexOf(n) > -1 ? n : r)),
            (this.mode = e.mode || this.mode || null),
            (this.signal = e.signal || this.signal),
            (this.referrer = null),
            ('GET' === this.method || 'HEAD' === this.method) && o)
          )
            throw new TypeError('Body not allowed for GET or HEAD requests')
          this._initBody(o)
        }
        function O(t) {
          var e = new FormData()
          return (
            t
              .trim()
              .split('&')
              .forEach(function (t) {
                if (t) {
                  var r = t.split('='),
                    n = r.shift().replace(/\+/g, ' '),
                    o = r.join('=').replace(/\+/g, ' ')
                  e.append(decodeURIComponent(n), decodeURIComponent(o))
                }
              }),
            e
          )
        }
        function _(t, e) {
          e || (e = {}),
            (this.type = 'default'),
            (this.status = void 0 === e.status ? 200 : e.status),
            (this.ok = this.status >= 200 && this.status < 300),
            (this.statusText = 'statusText' in e ? e.statusText : 'OK'),
            (this.headers = new d(e.headers)),
            (this.url = e.url || ''),
            this._initBody(t)
        }
        ;(v.prototype.clone = function () {
          return new v(this, { body: this._bodyInit })
        }),
          m.call(v.prototype),
          m.call(_.prototype),
          (_.prototype.clone = function () {
            return new _(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new d(this.headers),
              url: this.url,
            })
          }),
          (_.error = function () {
            var t = new _(null, { status: 0, statusText: '' })
            return (t.type = 'error'), t
          })
        var w = [301, 302, 303, 307, 308]
        ;(_.redirect = function (t, e) {
          if (-1 === w.indexOf(e)) throw new RangeError('Invalid status code')
          return new _(null, { status: e, headers: { location: t } })
        }),
          (e.DOMException = t.DOMException)
        try {
          new e.DOMException()
        } catch (t) {
          ;(e.DOMException = function (t, e) {
            ;(this.message = t), (this.name = e)
            var r = Error(t)
            this.stack = r.stack
          }),
            (e.DOMException.prototype = Object.create(Error.prototype)),
            (e.DOMException.prototype.constructor = e.DOMException)
        }
        function T(t, r) {
          return new Promise(function (n, i) {
            var s = new v(t, r)
            if (s.signal && s.signal.aborted) return i(new e.DOMException('Aborted', 'AbortError'))
            var a = new XMLHttpRequest()
            function u() {
              a.abort()
            }
            ;(a.onload = function () {
              var t,
                e,
                r = {
                  status: a.status,
                  statusText: a.statusText,
                  headers:
                    ((t = a.getAllResponseHeaders() || ''),
                    (e = new d()),
                    t
                      .replace(/\r?\n[\t ]+/g, ' ')
                      .split(/\r?\n/)
                      .forEach(function (t) {
                        var r = t.split(':'),
                          n = r.shift().trim()
                        if (n) {
                          var o = r.join(':').trim()
                          e.append(n, o)
                        }
                      }),
                    e),
                }
              r.url = 'responseURL' in a ? a.responseURL : r.headers.get('X-Request-URL')
              var o = 'response' in a ? a.response : a.responseText
              n(new _(o, r))
            }),
              (a.onerror = function () {
                i(new TypeError('Network request failed'))
              }),
              (a.ontimeout = function () {
                i(new TypeError('Network request failed'))
              }),
              (a.onabort = function () {
                i(new e.DOMException('Aborted', 'AbortError'))
              }),
              a.open(s.method, s.url, !0),
              'include' === s.credentials
                ? (a.withCredentials = !0)
                : 'omit' === s.credentials && (a.withCredentials = !1),
              'responseType' in a && o && (a.responseType = 'blob'),
              s.headers.forEach(function (t, e) {
                a.setRequestHeader(e, t)
              }),
              s.signal &&
                (s.signal.addEventListener('abort', u),
                (a.onreadystatechange = function () {
                  4 === a.readyState && s.signal.removeEventListener('abort', u)
                })),
              a.send(void 0 === s._bodyInit ? null : s._bodyInit)
          })
        }
        ;(T.polyfill = !0),
          t.fetch || ((t.fetch = T), (t.Headers = d), (t.Request = v), (t.Response = _)),
          (e.Headers = d),
          (e.Request = v),
          (e.Response = _),
          (e.fetch = T),
          Object.defineProperty(e, '__esModule', { value: !0 })
      })({})
    })(n),
      (n.fetch.ponyfill = !0),
      delete n.fetch.polyfill
    var o = n
    ;((e = o.fetch).default = o.fetch),
      (e.fetch = o.fetch),
      (e.Headers = o.Headers),
      (e.Request = o.Request),
      (e.Response = o.Response),
      (t.exports = e)
  },
  function (t, e, r) {
    'use strict'
    var n,
      o = r(3),
      i = (n = o) && n.__esModule ? n : { default: n }
    document.addEventListener('DOMContentLoaded', function () {
      new i.default()
    })
  },
  function (t, e, r) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
    var n = (function () {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e
      }
    })()
    var o = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
        })(this, t),
          (this.CONVERT_FORM_SELECTOR = '#ctl-convert-existing-slugs'),
          (this.CONVERT_BUTTON_SELECTOR = '#ctl-convert-button'),
          (this.CONFIRM_POPUP_SELECTOR = '#ctl-confirm-popup'),
          (this.CONFIRM_OK_SELECTOR = '#ctl-confirm-ok'),
          (this.CONFIRM_CANCEL_SELECTOR = '#ctl-confirm-cancel'),
          (this.confirmPopup = document.querySelector(this.CONFIRM_POPUP_SELECTOR)),
          this.bindEvents()
      }
      return (
        n(t, [
          {
            key: 'bindEvents',
            value: function () {
              var t = this
              ;(document.querySelector(this.CONVERT_BUTTON_SELECTOR).onclick = function (e) {
                return e.preventDefault(), (t.confirmPopup.style.display = 'block'), !1
              }),
                (this.confirmPopup.onclick = function () {
                  t.hideConfirmPopup()
                }),
                (document.querySelector(this.CONFIRM_OK_SELECTOR).onclick = function (e) {
                  e.stopPropagation(),
                    t.hideConfirmPopup(),
                    document.querySelector(t.CONVERT_FORM_SELECTOR).submit()
                }),
                (document.querySelector(this.CONFIRM_CANCEL_SELECTOR).onclick = function (e) {
                  e.stopPropagation(), t.hideConfirmPopup()
                })
            },
          },
          {
            key: 'hideConfirmPopup',
            value: function () {
              this.confirmPopup.style.display = 'none'
            },
          },
        ]),
        t
      )
    })()
    e.default = o
  },
])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nyb3NzLWZldGNoL2Rpc3QvYnJvd3Nlci1wb255ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udmVydGVyL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udmVydGVyL2NvbnZlcnRlci5qcyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsImdsb2JhbCIsInNlbGYiLCJ0aGlzIiwiX19zZWxmX18iLCJGIiwiZmV0Y2giLCJET01FeGNlcHRpb24iLCJzdXBwb3J0IiwiQmxvYiIsImUiLCJ2aWV3Q2xhc3NlcyIsImlzQXJyYXlCdWZmZXJWaWV3IiwiQXJyYXlCdWZmZXIiLCJpc1ZpZXciLCJvYmoiLCJpbmRleE9mIiwidG9TdHJpbmciLCJub3JtYWxpemVOYW1lIiwiU3RyaW5nIiwidGVzdCIsIlR5cGVFcnJvciIsInRvTG93ZXJDYXNlIiwibm9ybWFsaXplVmFsdWUiLCJpdGVyYXRvckZvciIsIml0ZW1zIiwiaXRlcmF0b3IiLCJuZXh0Iiwic2hpZnQiLCJkb25lIiwidW5kZWZpbmVkIiwiSGVhZGVycyIsImhlYWRlcnMiLCJtYXAiLCJmb3JFYWNoIiwiYXBwZW5kIiwiQXJyYXkiLCJpc0FycmF5IiwiaGVhZGVyIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImNvbnN1bWVkIiwiYm9keSIsImJvZHlVc2VkIiwiUHJvbWlzZSIsInJlamVjdCIsImZpbGVSZWFkZXJSZWFkeSIsInJlYWRlciIsInJlc29sdmUiLCJvbmxvYWQiLCJyZXN1bHQiLCJvbmVycm9yIiwiZXJyb3IiLCJyZWFkQmxvYkFzQXJyYXlCdWZmZXIiLCJibG9iIiwiRmlsZVJlYWRlciIsInByb21pc2UiLCJyZWFkQXNBcnJheUJ1ZmZlciIsImJ1ZmZlckNsb25lIiwiYnVmIiwic2xpY2UiLCJ2aWV3IiwiVWludDhBcnJheSIsImJ5dGVMZW5ndGgiLCJzZXQiLCJidWZmZXIiLCJCb2R5IiwiX2luaXRCb2R5IiwiX2JvZHlJbml0IiwiX2JvZHlUZXh0IiwiaXNQcm90b3R5cGVPZiIsIl9ib2R5QmxvYiIsIkZvcm1EYXRhIiwiX2JvZHlGb3JtRGF0YSIsIlVSTFNlYXJjaFBhcmFtcyIsIkRhdGFWaWV3IiwiX2JvZHlBcnJheUJ1ZmZlciIsInR5cGUiLCJyZWplY3RlZCIsIkVycm9yIiwiYXJyYXlCdWZmZXIiLCJ0aGVuIiwidGV4dCIsInJlYWRBc1RleHQiLCJjaGFycyIsImxlbmd0aCIsImZyb21DaGFyQ29kZSIsImpvaW4iLCJyZWFkQXJyYXlCdWZmZXJBc1RleHQiLCJmb3JtRGF0YSIsImRlY29kZSIsImpzb24iLCJKU09OIiwicGFyc2UiLCJvbGRWYWx1ZSIsImhhcyIsImNhbGxiYWNrIiwidGhpc0FyZyIsImtleXMiLCJwdXNoIiwidmFsdWVzIiwiZW50cmllcyIsIm1ldGhvZHMiLCJSZXF1ZXN0IiwiaW5wdXQiLCJvcHRpb25zIiwibWV0aG9kIiwidXBjYXNlZCIsInVybCIsImNyZWRlbnRpYWxzIiwic2lnbmFsIiwidG9VcHBlckNhc2UiLCJyZWZlcnJlciIsImZvcm0iLCJ0cmltIiwic3BsaXQiLCJieXRlcyIsInJlcGxhY2UiLCJkZWNvZGVVUklDb21wb25lbnQiLCJSZXNwb25zZSIsImJvZHlJbml0Iiwic3RhdHVzIiwib2siLCJzdGF0dXNUZXh0IiwiY2xvbmUiLCJyZXNwb25zZSIsInJlZGlyZWN0U3RhdHVzZXMiLCJyZWRpcmVjdCIsIlJhbmdlRXJyb3IiLCJsb2NhdGlvbiIsImVyciIsIm1lc3NhZ2UiLCJzdGFjayIsImNvbnN0cnVjdG9yIiwiaW5pdCIsInJlcXVlc3QiLCJhYm9ydGVkIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJhYm9ydFhociIsImFib3J0IiwicmF3SGVhZGVycyIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsImxpbmUiLCJwYXJ0cyIsInJlc3BvbnNlVVJMIiwicmVzcG9uc2VUZXh0Iiwib250aW1lb3V0Iiwib25hYm9ydCIsIm9wZW4iLCJ3aXRoQ3JlZGVudGlhbHMiLCJyZXNwb25zZVR5cGUiLCJzZXRSZXF1ZXN0SGVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2VuZCIsInBvbHlmaWxsIiwicG9ueWZpbGwiLCJjdHgiLCJkZWZhdWx0IiwiZG9jdW1lbnQiLCJDb252ZXJ0ZXIiLCJDT05WRVJUX0ZPUk1fU0VMRUNUT1IiLCJDT05WRVJUX0JVVFRPTl9TRUxFQ1RPUiIsIkNPTkZJUk1fUE9QVVBfU0VMRUNUT1IiLCJDT05GSVJNX09LX1NFTEVDVE9SIiwiQ09ORklSTV9DQU5DRUxfU0VMRUNUT1IiLCJjb25maXJtUG9wdXAiLCJxdWVyeVNlbGVjdG9yIiwiYmluZEV2ZW50cyIsIm9uY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3R5bGUiLCJkaXNwbGF5IiwiaGlkZUNvbmZpcm1Qb3B1cCIsInN0b3BQcm9wYWdhdGlvbiIsInN1Ym1pdCJdLCJtYXBwaW5ncyI6ImFBQ0UsSUFBSUEsRUFBbUIsR0FHdkIsU0FBU0MsRUFBb0JDLEdBRzVCLEdBQUdGLEVBQWlCRSxHQUNuQixPQUFPRixFQUFpQkUsR0FBVUMsUUFHbkMsSUFBSUMsRUFBU0osRUFBaUJFLEdBQVksQ0FDekNHLEVB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QyxJQUFJVSxjLDJVQ0ZDQSxFLFdBSUwsYyw0RkFBYyxTQUNiL0osS0FBS2dLLHNCQUF3Qiw4QkFDN0JoSyxLQUFLaUssd0JBQTBCLHNCQUMvQmpLLEtBQUtrSyx1QkFBeUIscUJBQzlCbEssS0FBS21LLG9CQUFzQixrQkFDM0JuSyxLQUFLb0ssd0JBQTBCLHNCQUUvQnBLLEtBQUtxSyxhQUFlUCxTQUFTUSxjQUM1QnRLLEtBQUtrSyx3QkFHTmxLLEtBQUt1SyxhLCtDQU1PLFdBQ1pULFNBQVNRLGNBQWV0SyxLQUFLaUsseUJBQTBCTyxRQUFVLFNBQ2hFQyxHQUlBLE9BRkFBLEVBQU1DLGlCQUNOLEVBQUtMLGFBQWFNLE1BQU1DLFFBQVUsU0FDM0IsR0FHUjVLLEtBQUtxSyxhQUFhRyxRQUFVLFdBQzNCLEVBQUtLLG9CQUdOZixTQUFTUSxjQUFldEssS0FBS21LLHFCQUFzQkssUUFBVSxTQUM1REMsR0FFQUEsRUFBTUssa0JBQ04sRUFBS0QsbUJBQ0xmLFNBQVNRLGNBQWUsRUFBS04sdUJBQXdCZSxVQUd0RGpCLFNBQVNRLGNBQWV0SyxLQUFLb0sseUJBQTBCSSxRQUFVLFNBQ2hFQyxHQUVBQSxFQUFNSyxrQkFDTixFQUFLRCxzQix5Q0FRTjdLLEtBQUtxSyxhQUFhTSxNQUFNQyxRQUFVLFcsZUFJckJiIiwiZmlsZSI6ImNvbnZlcnRlci9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJ2YXIgZ2xvYmFsID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXM7XG52YXIgX19zZWxmX18gPSAoZnVuY3Rpb24gKCkge1xuZnVuY3Rpb24gRigpIHtcbnRoaXMuZmV0Y2ggPSBmYWxzZTtcbnRoaXMuRE9NRXhjZXB0aW9uID0gZ2xvYmFsLkRPTUV4Y2VwdGlvblxufVxuRi5wcm90b3R5cGUgPSBnbG9iYWw7XG5yZXR1cm4gbmV3IEYoKTtcbn0pKCk7XG4oZnVuY3Rpb24oc2VsZikge1xuXG52YXIgaXJyZWxldmFudCA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuXG4gIHZhciBzdXBwb3J0ID0ge1xuICAgIHNlYXJjaFBhcmFtczogJ1VSTFNlYXJjaFBhcmFtcycgaW4gc2VsZixcbiAgICBpdGVyYWJsZTogJ1N5bWJvbCcgaW4gc2VsZiAmJiAnaXRlcmF0b3InIGluIFN5bWJvbCxcbiAgICBibG9iOlxuICAgICAgJ0ZpbGVSZWFkZXInIGluIHNlbGYgJiZcbiAgICAgICdCbG9iJyBpbiBzZWxmICYmXG4gICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbmV3IEJsb2IoKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pKCksXG4gICAgZm9ybURhdGE6ICdGb3JtRGF0YScgaW4gc2VsZixcbiAgICBhcnJheUJ1ZmZlcjogJ0FycmF5QnVmZmVyJyBpbiBzZWxmXG4gIH07XG5cbiAgZnVuY3Rpb24gaXNEYXRhVmlldyhvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIERhdGFWaWV3LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKG9iailcbiAgfVxuXG4gIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyKSB7XG4gICAgdmFyIHZpZXdDbGFzc2VzID0gW1xuICAgICAgJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nXG4gICAgXTtcblxuICAgIHZhciBpc0FycmF5QnVmZmVyVmlldyA9XG4gICAgICBBcnJheUJ1ZmZlci5pc1ZpZXcgfHxcbiAgICAgIGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqICYmIHZpZXdDbGFzc2VzLmluZGV4T2YoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikpID4gLTFcbiAgICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVOYW1lKG5hbWUpIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lID0gU3RyaW5nKG5hbWUpO1xuICAgIH1cbiAgICBpZiAoL1teYS16MC05XFwtIyQlJicqKy5eX2B8fl0vaS50ZXN0KG5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNoYXJhY3RlciBpbiBoZWFkZXIgZmllbGQgbmFtZScpXG4gICAgfVxuICAgIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvLyBCdWlsZCBhIGRlc3RydWN0aXZlIGl0ZXJhdG9yIGZvciB0aGUgdmFsdWUgbGlzdFxuICBmdW5jdGlvbiBpdGVyYXRvckZvcihpdGVtcykge1xuICAgIHZhciBpdGVyYXRvciA9IHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpO1xuICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBpdGVyYXRvclxuICB9XG5cbiAgZnVuY3Rpb24gSGVhZGVycyhoZWFkZXJzKSB7XG4gICAgdGhpcy5tYXAgPSB7fTtcblxuICAgIGlmIChoZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0sIHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShoZWFkZXJzKSkge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhlYWRlcikge1xuICAgICAgICB0aGlzLmFwcGVuZChoZWFkZXJbMF0sIGhlYWRlclsxXSk7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9IGVsc2UgaWYgKGhlYWRlcnMpIHtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCBoZWFkZXJzW25hbWVdKTtcbiAgICAgIH0sIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSk7XG4gICAgdmFsdWUgPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG4gICAgdmFyIG9sZFZhbHVlID0gdGhpcy5tYXBbbmFtZV07XG4gICAgdGhpcy5tYXBbbmFtZV0gPSBvbGRWYWx1ZSA/IG9sZFZhbHVlICsgJywgJyArIHZhbHVlIDogdmFsdWU7XG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGVbJ2RlbGV0ZSddID0gZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXTtcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSk7XG4gICAgcmV0dXJuIHRoaXMuaGFzKG5hbWUpID8gdGhpcy5tYXBbbmFtZV0gOiBudWxsXG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShub3JtYWxpemVOYW1lKG5hbWUpKVxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLm1hcCkge1xuICAgICAgaWYgKHRoaXMubWFwLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdGhpcy5tYXBbbmFtZV0sIG5hbWUsIHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW107XG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICBpdGVtcy5wdXNoKG5hbWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGl0ZW1zLnB1c2godmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW107XG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pO1xuICAgIH0pO1xuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfTtcblxuICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgIEhlYWRlcnMucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzO1xuICB9XG5cbiAgZnVuY3Rpb24gY29uc3VtZWQoYm9keSkge1xuICAgIGlmIChib2R5LmJvZHlVc2VkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJykpXG4gICAgfVxuICAgIGJvZHkuYm9keVVzZWQgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gZmlsZVJlYWRlclJlYWR5KHJlYWRlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICAgIH07XG4gICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKTtcbiAgICAgIH07XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNBcnJheUJ1ZmZlcihibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKTtcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYik7XG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNUZXh0KGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpO1xuICAgIHJlYWRlci5yZWFkQXNUZXh0KGJsb2IpO1xuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQXJyYXlCdWZmZXJBc1RleHQoYnVmKSB7XG4gICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYpO1xuICAgIHZhciBjaGFycyA9IG5ldyBBcnJheSh2aWV3Lmxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZpZXcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoYXJzW2ldID0gU3RyaW5nLmZyb21DaGFyQ29kZSh2aWV3W2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoYXJzLmpvaW4oJycpXG4gIH1cblxuICBmdW5jdGlvbiBidWZmZXJDbG9uZShidWYpIHtcbiAgICBpZiAoYnVmLnNsaWNlKSB7XG4gICAgICByZXR1cm4gYnVmLnNsaWNlKDApXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmLmJ5dGVMZW5ndGgpO1xuICAgICAgdmlldy5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmKSk7XG4gICAgICByZXR1cm4gdmlldy5idWZmZXJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBCb2R5KCkge1xuICAgIHRoaXMuYm9keVVzZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuX2luaXRCb2R5ID0gZnVuY3Rpb24oYm9keSkge1xuICAgICAgdGhpcy5fYm9keUluaXQgPSBib2R5O1xuICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gJyc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHk7XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYmxvYiAmJiBCbG9iLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlCbG9iID0gYm9keTtcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5mb3JtRGF0YSAmJiBGb3JtRGF0YS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5Rm9ybURhdGEgPSBib2R5O1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5LnRvU3RyaW5nKCk7XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgc3VwcG9ydC5ibG9iICYmIGlzRGF0YVZpZXcoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keS5idWZmZXIpO1xuICAgICAgICAvLyBJRSAxMC0xMSBjYW4ndCBoYW5kbGUgYSBEYXRhVmlldyBib2R5LlxuICAgICAgICB0aGlzLl9ib2R5SW5pdCA9IG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKTtcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiAoQXJyYXlCdWZmZXIucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkgfHwgaXNBcnJheUJ1ZmZlclZpZXcoYm9keSkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGJvZHkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUJsb2IgJiYgdGhpcy5fYm9keUJsb2IudHlwZSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsIHRoaXMuX2JvZHlCbG9iLnR5cGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChzdXBwb3J0LmJsb2IpIHtcbiAgICAgIHRoaXMuYmxvYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKTtcbiAgICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlCbG9iKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyBibG9iJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5VGV4dF0pKVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLmFycmF5QnVmZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gY29uc3VtZWQodGhpcykgfHwgUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ibG9iKCkudGhlbihyZWFkQmxvYkFzQXJyYXlCdWZmZXIpXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKTtcbiAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgIHJldHVybiByZWFkQmxvYkFzVGV4dCh0aGlzLl9ib2R5QmxvYilcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVhZEFycmF5QnVmZmVyQXNUZXh0KHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgdGV4dCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlUZXh0KVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoc3VwcG9ydC5mb3JtRGF0YSkge1xuICAgICAgdGhpcy5mb3JtRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihkZWNvZGUpXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMuanNvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oSlNPTi5wYXJzZSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8vIEhUVFAgbWV0aG9kcyB3aG9zZSBjYXBpdGFsaXphdGlvbiBzaG91bGQgYmUgbm9ybWFsaXplZFxuICB2YXIgbWV0aG9kcyA9IFsnREVMRVRFJywgJ0dFVCcsICdIRUFEJywgJ09QVElPTlMnLCAnUE9TVCcsICdQVVQnXTtcblxuICBmdW5jdGlvbiBub3JtYWxpemVNZXRob2QobWV0aG9kKSB7XG4gICAgdmFyIHVwY2FzZWQgPSBtZXRob2QudG9VcHBlckNhc2UoKTtcbiAgICByZXR1cm4gbWV0aG9kcy5pbmRleE9mKHVwY2FzZWQpID4gLTEgPyB1cGNhc2VkIDogbWV0aG9kXG4gIH1cblxuICBmdW5jdGlvbiBSZXF1ZXN0KGlucHV0LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdmFyIGJvZHkgPSBvcHRpb25zLmJvZHk7XG5cbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBSZXF1ZXN0KSB7XG4gICAgICBpZiAoaW5wdXQuYm9keVVzZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJylcbiAgICAgIH1cbiAgICAgIHRoaXMudXJsID0gaW5wdXQudXJsO1xuICAgICAgdGhpcy5jcmVkZW50aWFscyA9IGlucHV0LmNyZWRlbnRpYWxzO1xuICAgICAgaWYgKCFvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5wdXQuaGVhZGVycyk7XG4gICAgICB9XG4gICAgICB0aGlzLm1ldGhvZCA9IGlucHV0Lm1ldGhvZDtcbiAgICAgIHRoaXMubW9kZSA9IGlucHV0Lm1vZGU7XG4gICAgICB0aGlzLnNpZ25hbCA9IGlucHV0LnNpZ25hbDtcbiAgICAgIGlmICghYm9keSAmJiBpbnB1dC5fYm9keUluaXQgIT0gbnVsbCkge1xuICAgICAgICBib2R5ID0gaW5wdXQuX2JvZHlJbml0O1xuICAgICAgICBpbnB1dC5ib2R5VXNlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXJsID0gU3RyaW5nKGlucHV0KTtcbiAgICB9XG5cbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscyB8fCB0aGlzLmNyZWRlbnRpYWxzIHx8ICdzYW1lLW9yaWdpbic7XG4gICAgaWYgKG9wdGlvbnMuaGVhZGVycyB8fCAhdGhpcy5oZWFkZXJzKSB7XG4gICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpO1xuICAgIH1cbiAgICB0aGlzLm1ldGhvZCA9IG5vcm1hbGl6ZU1ldGhvZChvcHRpb25zLm1ldGhvZCB8fCB0aGlzLm1ldGhvZCB8fCAnR0VUJyk7XG4gICAgdGhpcy5tb2RlID0gb3B0aW9ucy5tb2RlIHx8IHRoaXMubW9kZSB8fCBudWxsO1xuICAgIHRoaXMuc2lnbmFsID0gb3B0aW9ucy5zaWduYWwgfHwgdGhpcy5zaWduYWw7XG4gICAgdGhpcy5yZWZlcnJlciA9IG51bGw7XG5cbiAgICBpZiAoKHRoaXMubWV0aG9kID09PSAnR0VUJyB8fCB0aGlzLm1ldGhvZCA9PT0gJ0hFQUQnKSAmJiBib2R5KSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb2R5IG5vdCBhbGxvd2VkIGZvciBHRVQgb3IgSEVBRCByZXF1ZXN0cycpXG4gICAgfVxuICAgIHRoaXMuX2luaXRCb2R5KGJvZHkpO1xuICB9XG5cbiAgUmVxdWVzdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QodGhpcywge2JvZHk6IHRoaXMuX2JvZHlJbml0fSlcbiAgfTtcblxuICBmdW5jdGlvbiBkZWNvZGUoYm9keSkge1xuICAgIHZhciBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgYm9keVxuICAgICAgLnRyaW0oKVxuICAgICAgLnNwbGl0KCcmJylcbiAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICAgIGlmIChieXRlcykge1xuICAgICAgICAgIHZhciBzcGxpdCA9IGJ5dGVzLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgdmFyIG5hbWUgPSBzcGxpdC5zaGlmdCgpLnJlcGxhY2UoL1xcKy9nLCAnICcpO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IHNwbGl0LmpvaW4oJz0nKS5yZXBsYWNlKC9cXCsvZywgJyAnKTtcbiAgICAgICAgICBmb3JtLmFwcGVuZChkZWNvZGVVUklDb21wb25lbnQobmFtZSksIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICByZXR1cm4gZm9ybVxuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VIZWFkZXJzKHJhd0hlYWRlcnMpIHtcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgLy8gUmVwbGFjZSBpbnN0YW5jZXMgb2YgXFxyXFxuIGFuZCBcXG4gZm9sbG93ZWQgYnkgYXQgbGVhc3Qgb25lIHNwYWNlIG9yIGhvcml6b250YWwgdGFiIHdpdGggYSBzcGFjZVxuICAgIC8vIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMwI3NlY3Rpb24tMy4yXG4gICAgdmFyIHByZVByb2Nlc3NlZEhlYWRlcnMgPSByYXdIZWFkZXJzLnJlcGxhY2UoL1xccj9cXG5bXFx0IF0rL2csICcgJyk7XG4gICAgcHJlUHJvY2Vzc2VkSGVhZGVycy5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xuICAgICAgdmFyIHBhcnRzID0gbGluZS5zcGxpdCgnOicpO1xuICAgICAgdmFyIGtleSA9IHBhcnRzLnNoaWZ0KCkudHJpbSgpO1xuICAgICAgaWYgKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwYXJ0cy5qb2luKCc6JykudHJpbSgpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZChrZXksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gaGVhZGVyc1xuICB9XG5cbiAgQm9keS5jYWxsKFJlcXVlc3QucHJvdG90eXBlKTtcblxuICBmdW5jdGlvbiBSZXNwb25zZShib2R5SW5pdCwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMudHlwZSA9ICdkZWZhdWx0JztcbiAgICB0aGlzLnN0YXR1cyA9IG9wdGlvbnMuc3RhdHVzID09PSB1bmRlZmluZWQgPyAyMDAgOiBvcHRpb25zLnN0YXR1cztcbiAgICB0aGlzLm9rID0gdGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgMzAwO1xuICAgIHRoaXMuc3RhdHVzVGV4dCA9ICdzdGF0dXNUZXh0JyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXNUZXh0IDogJ09LJztcbiAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpO1xuICAgIHRoaXMudXJsID0gb3B0aW9ucy51cmwgfHwgJyc7XG4gICAgdGhpcy5faW5pdEJvZHkoYm9keUluaXQpO1xuICB9XG5cbiAgQm9keS5jYWxsKFJlc3BvbnNlLnByb3RvdHlwZSk7XG5cbiAgUmVzcG9uc2UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZSh0aGlzLl9ib2R5SW5pdCwge1xuICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgIHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcbiAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHRoaXMuaGVhZGVycyksXG4gICAgICB1cmw6IHRoaXMudXJsXG4gICAgfSlcbiAgfTtcblxuICBSZXNwb25zZS5lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXNwb25zZSA9IG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiAwLCBzdGF0dXNUZXh0OiAnJ30pO1xuICAgIHJlc3BvbnNlLnR5cGUgPSAnZXJyb3InO1xuICAgIHJldHVybiByZXNwb25zZVxuICB9O1xuXG4gIHZhciByZWRpcmVjdFN0YXR1c2VzID0gWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XTtcblxuICBSZXNwb25zZS5yZWRpcmVjdCA9IGZ1bmN0aW9uKHVybCwgc3RhdHVzKSB7XG4gICAgaWYgKHJlZGlyZWN0U3RhdHVzZXMuaW5kZXhPZihzdGF0dXMpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc3RhdHVzIGNvZGUnKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogc3RhdHVzLCBoZWFkZXJzOiB7bG9jYXRpb246IHVybH19KVxuICB9O1xuXG4gIGV4cG9ydHMuRE9NRXhjZXB0aW9uID0gc2VsZi5ET01FeGNlcHRpb247XG4gIHRyeSB7XG4gICAgbmV3IGV4cG9ydHMuRE9NRXhjZXB0aW9uKCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGV4cG9ydHMuRE9NRXhjZXB0aW9uID0gZnVuY3Rpb24obWVzc2FnZSwgbmFtZSkge1xuICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICB2YXIgZXJyb3IgPSBFcnJvcihtZXNzYWdlKTtcbiAgICAgIHRoaXMuc3RhY2sgPSBlcnJvci5zdGFjaztcbiAgICB9O1xuICAgIGV4cG9ydHMuRE9NRXhjZXB0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbiAgICBleHBvcnRzLkRPTUV4Y2VwdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBleHBvcnRzLkRPTUV4Y2VwdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoKGlucHV0LCBpbml0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChpbnB1dCwgaW5pdCk7XG5cbiAgICAgIGlmIChyZXF1ZXN0LnNpZ25hbCAmJiByZXF1ZXN0LnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3QobmV3IGV4cG9ydHMuRE9NRXhjZXB0aW9uKCdBYm9ydGVkJywgJ0Fib3J0RXJyb3InKSlcbiAgICAgIH1cblxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICBmdW5jdGlvbiBhYm9ydFhocigpIHtcbiAgICAgICAgeGhyLmFib3J0KCk7XG4gICAgICB9XG5cbiAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IHBhcnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkgfHwgJycpXG4gICAgICAgIH07XG4gICAgICAgIG9wdGlvbnMudXJsID0gJ3Jlc3BvbnNlVVJMJyBpbiB4aHIgPyB4aHIucmVzcG9uc2VVUkwgOiBvcHRpb25zLmhlYWRlcnMuZ2V0KCdYLVJlcXVlc3QtVVJMJyk7XG4gICAgICAgIHZhciBib2R5ID0gJ3Jlc3BvbnNlJyBpbiB4aHIgPyB4aHIucmVzcG9uc2UgOiB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICByZXNvbHZlKG5ldyBSZXNwb25zZShib2R5LCBvcHRpb25zKSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub25hYm9ydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IGV4cG9ydHMuRE9NRXhjZXB0aW9uKCdBYm9ydGVkJywgJ0Fib3J0RXJyb3InKSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub3BlbihyZXF1ZXN0Lm1ldGhvZCwgcmVxdWVzdC51cmwsIHRydWUpO1xuXG4gICAgICBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ2luY2x1ZGUnKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnb21pdCcpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoJ3Jlc3BvbnNlVHlwZScgaW4geGhyICYmIHN1cHBvcnQuYmxvYikge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xuICAgICAgfVxuXG4gICAgICByZXF1ZXN0LmhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlcXVlc3Quc2lnbmFsKSB7XG4gICAgICAgIHJlcXVlc3Quc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRYaHIpO1xuXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBET05FIChzdWNjZXNzIG9yIGZhaWx1cmUpXG4gICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICByZXF1ZXN0LnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0WGhyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHhoci5zZW5kKHR5cGVvZiByZXF1ZXN0Ll9ib2R5SW5pdCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcmVxdWVzdC5fYm9keUluaXQpO1xuICAgIH0pXG4gIH1cblxuICBmZXRjaC5wb2x5ZmlsbCA9IHRydWU7XG5cbiAgaWYgKCFzZWxmLmZldGNoKSB7XG4gICAgc2VsZi5mZXRjaCA9IGZldGNoO1xuICAgIHNlbGYuSGVhZGVycyA9IEhlYWRlcnM7XG4gICAgc2VsZi5SZXF1ZXN0ID0gUmVxdWVzdDtcbiAgICBzZWxmLlJlc3BvbnNlID0gUmVzcG9uc2U7XG4gIH1cblxuICBleHBvcnRzLkhlYWRlcnMgPSBIZWFkZXJzO1xuICBleHBvcnRzLlJlcXVlc3QgPSBSZXF1ZXN0O1xuICBleHBvcnRzLlJlc3BvbnNlID0gUmVzcG9uc2U7XG4gIGV4cG9ydHMuZmV0Y2ggPSBmZXRjaDtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KHt9KSk7XG59KShfX3NlbGZfXyk7XG5fX3NlbGZfXy5mZXRjaC5wb255ZmlsbCA9IHRydWU7XG4vLyBSZW1vdmUgXCJwb2x5ZmlsbFwiIHByb3BlcnR5IGFkZGVkIGJ5IHdoYXR3Zy1mZXRjaFxuZGVsZXRlIF9fc2VsZl9fLmZldGNoLnBvbHlmaWxsO1xuLy8gQ2hvb3NlIGJldHdlZW4gbmF0aXZlIGltcGxlbWVudGF0aW9uIChnbG9iYWwpIG9yIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiAoX19zZWxmX18pXG4vLyB2YXIgY3R4ID0gZ2xvYmFsLmZldGNoID8gZ2xvYmFsIDogX19zZWxmX187XG52YXIgY3R4ID0gX19zZWxmX187IC8vIHRoaXMgbGluZSBkaXNhYmxlIHNlcnZpY2Ugd29ya2VyIHN1cHBvcnQgdGVtcG9yYXJpbHlcbmV4cG9ydHMgPSBjdHguZmV0Y2ggLy8gVG8gZW5hYmxlOiBpbXBvcnQgZmV0Y2ggZnJvbSAnY3Jvc3MtZmV0Y2gnXG5leHBvcnRzLmRlZmF1bHQgPSBjdHguZmV0Y2ggLy8gRm9yIFR5cGVTY3JpcHQgY29uc3VtZXJzIHdpdGhvdXQgZXNNb2R1bGVJbnRlcm9wLlxuZXhwb3J0cy5mZXRjaCA9IGN0eC5mZXRjaCAvLyBUbyBlbmFibGU6IGltcG9ydCB7ZmV0Y2h9IGZyb20gJ2Nyb3NzLWZldGNoJ1xuZXhwb3J0cy5IZWFkZXJzID0gY3R4LkhlYWRlcnNcbmV4cG9ydHMuUmVxdWVzdCA9IGN0eC5SZXF1ZXN0XG5leHBvcnRzLlJlc3BvbnNlID0gY3R4LlJlc3BvbnNlXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNcbiIsIi8qKlxuICogQGZpbGUgQ29udmVydGVyIEFwcGxpY2F0aW9uLlxuICovXG5pbXBvcnQgQ29udmVydGVyIGZyb20gJy4vY29udmVydGVyJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cdG5ldyBDb252ZXJ0ZXIoKTtcbn0gKTtcbiIsIi8qKlxuICogQGZpbGUgY2xhc3MgQ29udmVydGVyLlxuICovXG5cbmNsYXNzIENvbnZlcnRlciB7XG5cdC8qKlxuXHQgKiBDbGFzcyBjb25zdHJ1Y3Rvci5cblx0ICovXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuQ09OVkVSVF9GT1JNX1NFTEVDVE9SID0gJyNjdGwtY29udmVydC1leGlzdGluZy1zbHVncyc7XG5cdFx0dGhpcy5DT05WRVJUX0JVVFRPTl9TRUxFQ1RPUiA9ICcjY3RsLWNvbnZlcnQtYnV0dG9uJztcblx0XHR0aGlzLkNPTkZJUk1fUE9QVVBfU0VMRUNUT1IgPSAnI2N0bC1jb25maXJtLXBvcHVwJztcblx0XHR0aGlzLkNPTkZJUk1fT0tfU0VMRUNUT1IgPSAnI2N0bC1jb25maXJtLW9rJztcblx0XHR0aGlzLkNPTkZJUk1fQ0FOQ0VMX1NFTEVDVE9SID0gJyNjdGwtY29uZmlybS1jYW5jZWwnO1xuXG5cdFx0dGhpcy5jb25maXJtUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0dGhpcy5DT05GSVJNX1BPUFVQX1NFTEVDVE9SXG5cdFx0KTtcblxuXHRcdHRoaXMuYmluZEV2ZW50cygpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEJpbmQgZXZlbnRzIHRvIG1ldGhvZHMuXG5cdCAqL1xuXHRiaW5kRXZlbnRzKCkge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIHRoaXMuQ09OVkVSVF9CVVRUT05fU0VMRUNUT1IgKS5vbmNsaWNrID0gKFxuXHRcdFx0ZXZlbnRcblx0XHQpID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR0aGlzLmNvbmZpcm1Qb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXG5cdFx0dGhpcy5jb25maXJtUG9wdXAub25jbGljayA9ICgpID0+IHtcblx0XHRcdHRoaXMuaGlkZUNvbmZpcm1Qb3B1cCgpO1xuXHRcdH07XG5cblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCB0aGlzLkNPTkZJUk1fT0tfU0VMRUNUT1IgKS5vbmNsaWNrID0gKFxuXHRcdFx0ZXZlbnRcblx0XHQpID0+IHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0dGhpcy5oaWRlQ29uZmlybVBvcHVwKCk7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCB0aGlzLkNPTlZFUlRfRk9STV9TRUxFQ1RPUiApLnN1Ym1pdCgpO1xuXHRcdH07XG5cblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCB0aGlzLkNPTkZJUk1fQ0FOQ0VMX1NFTEVDVE9SICkub25jbGljayA9IChcblx0XHRcdGV2ZW50XG5cdFx0KSA9PiB7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdHRoaXMuaGlkZUNvbmZpcm1Qb3B1cCgpO1xuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogSGlkZSBjb25maXJtYXRpb24gcG9wdXAuXG5cdCAqL1xuXHRoaWRlQ29uZmlybVBvcHVwKCkge1xuXHRcdHRoaXMuY29uZmlybVBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udmVydGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
