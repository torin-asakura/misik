!(function (e) {
  var t = {}
  function n(r) {
    if (t[r]) return t[r].exports
    var i = (t[r] = { i: r, l: !1, exports: {} })
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
  }
  ;(n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var r = Object.create(null)
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var i in e)
          n.d(
            r,
            i,
            function (t) {
              return e[t]
            }.bind(null, i)
          )
      return r
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default
            }
          : function () {
              return e
            }
      return n.d(t, 'a', t), t
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (n.p = ''),
    n((n.s = 0))
})([
  function (e, t, n) {
    n(1), (e.exports = n(2))
  },
  function (e, t) {
    var n = 'undefined' != typeof self ? self : this,
      r = (function () {
        function e() {
          ;(this.fetch = !1), (this.DOMException = n.DOMException)
        }
        return (e.prototype = n), new e()
      })()
    !(function (e) {
      !(function (t) {
        var n = 'URLSearchParams' in e,
          r = 'Symbol' in e && 'iterator' in Symbol,
          i =
            'FileReader' in e &&
            'Blob' in e &&
            (function () {
              try {
                return new Blob(), !0
              } catch (e) {
                return !1
              }
            })(),
          s = 'FormData' in e,
          o = 'ArrayBuffer' in e
        if (o)
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
              function (e) {
                return e && a.indexOf(Object.prototype.toString.call(e)) > -1
              }
        function l(e) {
          if (('string' != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)))
            throw new TypeError('Invalid character in header field name')
          return e.toLowerCase()
        }
        function c(e) {
          return 'string' != typeof e && (e = String(e)), e
        }
        function h(e) {
          var t = {
            next: function () {
              var t = e.shift()
              return { done: void 0 === t, value: t }
            },
          }
          return (
            r &&
              (t[Symbol.iterator] = function () {
                return t
              }),
            t
          )
        }
        function d(e) {
          ;(this.map = {}),
            e instanceof d
              ? e.forEach(function (e, t) {
                  this.append(t, e)
                }, this)
              : Array.isArray(e)
              ? e.forEach(function (e) {
                  this.append(e[0], e[1])
                }, this)
              : e &&
                Object.getOwnPropertyNames(e).forEach(function (t) {
                  this.append(t, e[t])
                }, this)
        }
        function p(e) {
          if (e.bodyUsed) return Promise.reject(new TypeError('Already read'))
          e.bodyUsed = !0
        }
        function f(e) {
          return new Promise(function (t, n) {
            ;(e.onload = function () {
              t(e.result)
            }),
              (e.onerror = function () {
                n(e.error)
              })
          })
        }
        function y(e) {
          var t = new FileReader(),
            n = f(t)
          return t.readAsArrayBuffer(e), n
        }
        function b(e) {
          if (e.slice) return e.slice(0)
          var t = new Uint8Array(e.byteLength)
          return t.set(new Uint8Array(e)), t.buffer
        }
        function v() {
          return (
            (this.bodyUsed = !1),
            (this._initBody = function (e) {
              var t
              ;(this._bodyInit = e),
                e
                  ? 'string' == typeof e
                    ? (this._bodyText = e)
                    : i && Blob.prototype.isPrototypeOf(e)
                    ? (this._bodyBlob = e)
                    : s && FormData.prototype.isPrototypeOf(e)
                    ? (this._bodyFormData = e)
                    : n && URLSearchParams.prototype.isPrototypeOf(e)
                    ? (this._bodyText = e.toString())
                    : o && i && (t = e) && DataView.prototype.isPrototypeOf(t)
                    ? ((this._bodyArrayBuffer = b(e.buffer)),
                      (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                    : o && (ArrayBuffer.prototype.isPrototypeOf(e) || u(e))
                    ? (this._bodyArrayBuffer = b(e))
                    : (this._bodyText = e = Object.prototype.toString.call(e))
                  : (this._bodyText = ''),
                this.headers.get('content-type') ||
                  ('string' == typeof e
                    ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
                    : this._bodyBlob && this._bodyBlob.type
                    ? this.headers.set('content-type', this._bodyBlob.type)
                    : n &&
                      URLSearchParams.prototype.isPrototypeOf(e) &&
                      this.headers.set(
                        'content-type',
                        'application/x-www-form-urlencoded;charset=UTF-8'
                      ))
            }),
            i &&
              ((this.blob = function () {
                var e = p(this)
                if (e) return e
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob)
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]))
                if (this._bodyFormData) throw new Error('could not read FormData body as blob')
                return Promise.resolve(new Blob([this._bodyText]))
              }),
              (this.arrayBuffer = function () {
                return this._bodyArrayBuffer
                  ? p(this) || Promise.resolve(this._bodyArrayBuffer)
                  : this.blob().then(y)
              })),
            (this.text = function () {
              var e,
                t,
                n,
                r = p(this)
              if (r) return r
              if (this._bodyBlob)
                return (e = this._bodyBlob), (t = new FileReader()), (n = f(t)), t.readAsText(e), n
              if (this._bodyArrayBuffer)
                return Promise.resolve(
                  (function (e) {
                    for (
                      var t = new Uint8Array(e), n = new Array(t.length), r = 0;
                      r < t.length;
                      r++
                    )
                      n[r] = String.fromCharCode(t[r])
                    return n.join('')
                  })(this._bodyArrayBuffer)
                )
              if (this._bodyFormData) throw new Error('could not read FormData body as text')
              return Promise.resolve(this._bodyText)
            }),
            s &&
              (this.formData = function () {
                return this.text().then(L)
              }),
            (this.json = function () {
              return this.text().then(JSON.parse)
            }),
            this
          )
        }
        ;(d.prototype.append = function (e, t) {
          ;(e = l(e)), (t = c(t))
          var n = this.map[e]
          this.map[e] = n ? n + ', ' + t : t
        }),
          (d.prototype.delete = function (e) {
            delete this.map[l(e)]
          }),
          (d.prototype.get = function (e) {
            return (e = l(e)), this.has(e) ? this.map[e] : null
          }),
          (d.prototype.has = function (e) {
            return this.map.hasOwnProperty(l(e))
          }),
          (d.prototype.set = function (e, t) {
            this.map[l(e)] = c(t)
          }),
          (d.prototype.forEach = function (e, t) {
            for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
          }),
          (d.prototype.keys = function () {
            var e = []
            return (
              this.forEach(function (t, n) {
                e.push(n)
              }),
              h(e)
            )
          }),
          (d.prototype.values = function () {
            var e = []
            return (
              this.forEach(function (t) {
                e.push(t)
              }),
              h(e)
            )
          }),
          (d.prototype.entries = function () {
            var e = []
            return (
              this.forEach(function (t, n) {
                e.push([n, t])
              }),
              h(e)
            )
          }),
          r && (d.prototype[Symbol.iterator] = d.prototype.entries)
        var m = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
        function E(e, t) {
          var n,
            r,
            i = (t = t || {}).body
          if (e instanceof E) {
            if (e.bodyUsed) throw new TypeError('Already read')
            ;(this.url = e.url),
              (this.credentials = e.credentials),
              t.headers || (this.headers = new d(e.headers)),
              (this.method = e.method),
              (this.mode = e.mode),
              (this.signal = e.signal),
              i || null == e._bodyInit || ((i = e._bodyInit), (e.bodyUsed = !0))
          } else this.url = String(e)
          if (
            ((this.credentials = t.credentials || this.credentials || 'same-origin'),
            (!t.headers && this.headers) || (this.headers = new d(t.headers)),
            (this.method =
              ((n = t.method || this.method || 'GET'),
              (r = n.toUpperCase()),
              m.indexOf(r) > -1 ? r : n)),
            (this.mode = t.mode || this.mode || null),
            (this.signal = t.signal || this.signal),
            (this.referrer = null),
            ('GET' === this.method || 'HEAD' === this.method) && i)
          )
            throw new TypeError('Body not allowed for GET or HEAD requests')
          this._initBody(i)
        }
        function L(e) {
          var t = new FormData()
          return (
            e
              .trim()
              .split('&')
              .forEach(function (e) {
                if (e) {
                  var n = e.split('='),
                    r = n.shift().replace(/\+/g, ' '),
                    i = n.join('=').replace(/\+/g, ' ')
                  t.append(decodeURIComponent(r), decodeURIComponent(i))
                }
              }),
            t
          )
        }
        function S(e, t) {
          t || (t = {}),
            (this.type = 'default'),
            (this.status = void 0 === t.status ? 200 : t.status),
            (this.ok = this.status >= 200 && this.status < 300),
            (this.statusText = 'statusText' in t ? t.statusText : 'OK'),
            (this.headers = new d(t.headers)),
            (this.url = t.url || ''),
            this._initBody(e)
        }
        ;(E.prototype.clone = function () {
          return new E(this, { body: this._bodyInit })
        }),
          v.call(E.prototype),
          v.call(S.prototype),
          (S.prototype.clone = function () {
            return new S(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new d(this.headers),
              url: this.url,
            })
          }),
          (S.error = function () {
            var e = new S(null, { status: 0, statusText: '' })
            return (e.type = 'error'), e
          })
        var T = [301, 302, 303, 307, 308]
        ;(S.redirect = function (e, t) {
          if (-1 === T.indexOf(t)) throw new RangeError('Invalid status code')
          return new S(null, { status: t, headers: { location: e } })
        }),
          (t.DOMException = e.DOMException)
        try {
          new t.DOMException()
        } catch (e) {
          ;(t.DOMException = function (e, t) {
            ;(this.message = e), (this.name = t)
            var n = Error(e)
            this.stack = n.stack
          }),
            (t.DOMException.prototype = Object.create(Error.prototype)),
            (t.DOMException.prototype.constructor = t.DOMException)
        }
        function _(e, n) {
          return new Promise(function (r, s) {
            var o = new E(e, n)
            if (o.signal && o.signal.aborted) return s(new t.DOMException('Aborted', 'AbortError'))
            var a = new XMLHttpRequest()
            function u() {
              a.abort()
            }
            ;(a.onload = function () {
              var e,
                t,
                n = {
                  status: a.status,
                  statusText: a.statusText,
                  headers:
                    ((e = a.getAllResponseHeaders() || ''),
                    (t = new d()),
                    e
                      .replace(/\r?\n[\t ]+/g, ' ')
                      .split(/\r?\n/)
                      .forEach(function (e) {
                        var n = e.split(':'),
                          r = n.shift().trim()
                        if (r) {
                          var i = n.join(':').trim()
                          t.append(r, i)
                        }
                      }),
                    t),
                }
              n.url = 'responseURL' in a ? a.responseURL : n.headers.get('X-Request-URL')
              var i = 'response' in a ? a.response : a.responseText
              r(new S(i, n))
            }),
              (a.onerror = function () {
                s(new TypeError('Network request failed'))
              }),
              (a.ontimeout = function () {
                s(new TypeError('Network request failed'))
              }),
              (a.onabort = function () {
                s(new t.DOMException('Aborted', 'AbortError'))
              }),
              a.open(o.method, o.url, !0),
              'include' === o.credentials
                ? (a.withCredentials = !0)
                : 'omit' === o.credentials && (a.withCredentials = !1),
              'responseType' in a && i && (a.responseType = 'blob'),
              o.headers.forEach(function (e, t) {
                a.setRequestHeader(t, e)
              }),
              o.signal &&
                (o.signal.addEventListener('abort', u),
                (a.onreadystatechange = function () {
                  4 === a.readyState && o.signal.removeEventListener('abort', u)
                })),
              a.send(void 0 === o._bodyInit ? null : o._bodyInit)
          })
        }
        ;(_.polyfill = !0),
          e.fetch || ((e.fetch = _), (e.Headers = d), (e.Request = E), (e.Response = S)),
          (t.Headers = d),
          (t.Request = E),
          (t.Response = S),
          (t.fetch = _),
          Object.defineProperty(t, '__esModule', { value: !0 })
      })({})
    })(r),
      (r.fetch.ponyfill = !0),
      delete r.fetch.polyfill
    var i = r
    ;((t = i.fetch).default = i.fetch),
      (t.fetch = i.fetch),
      (t.Headers = i.Headers),
      (t.Request = i.Request),
      (t.Response = i.Response),
      (e.exports = t)
  },
  function (e, t, n) {
    'use strict'
    var r,
      i = n(3),
      s = (r = i) && r.__esModule ? r : { default: r }
    document.addEventListener('DOMContentLoaded', function () {
      new s.default()
    })
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    })()
    function i(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]
        return n
      }
      return Array.from(e)
    }
    var s = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        })(this, e),
          (this.OPTIONS_FORM_SELECTOR = '#ctl-options'),
          (this.HEADER_SELECTOR = this.OPTIONS_FORM_SELECTOR + ' h2'),
          (this.TABLE_SELECTOR = this.OPTIONS_FORM_SELECTOR + ' table'),
          (this.SUBMIT_SELECTOR = this.OPTIONS_FORM_SELECTOR + ' #submit'),
          (this.CURRENT_STUB_ID = 'ctl-current'),
          (this.CURRENT_NAV_TAB_CLASS = 'nav-tab-current'),
          (this.ACTIVE_NAV_TAB_CLASS = 'nav-tab-active'),
          (this.ACTIVE_TABLE_CLASS = 'active'),
          (this.EDIT_LABEL_ID = 'ctl-edit-label'),
          (this.EDIT_LABEL_ERROR_CLASS = 'ctl-edit-label-error'),
          (this.plusButton =
            '<button type="button" aria-haspopup="true" aria-expanded="false" class="components-button block-editor-inserter__toggle has-icon" aria-label="Добавить блок"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" role="img" aria-hidden="true" focusable="false"><path d="M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6zM10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"></path></svg></button>'),
          (this.PLUS_CLASS = 'ctl-plus'),
          (this.optionsForm = document.querySelector(this.OPTIONS_FORM_SELECTOR)),
          (this.tablesData = this.getTablesData()),
          (this.submitButton = document.querySelector(this.SUBMIT_SELECTOR)),
          (this.optionsSaveSuccessMessage = Cyr2LatTablesObject.optionsSaveSuccessMessage),
          (this.optionsSaveErrorMessage = Cyr2LatTablesObject.optionsSaveErrorMessage),
          this.addWrapper(),
          this.addMessageLines(),
          this.moveTabs(),
          this.addEditLabelInput(),
          this.hideTables(),
          this.bindEvents(),
          this.setSubmitStatus()
      }
      return (
        r(e, [
          {
            key: 'getHeaders',
            value: function () {
              return [].concat(i(document.querySelectorAll(this.HEADER_SELECTOR)))
            },
          },
          {
            key: 'getActiveHeader',
            value: function () {
              return document.querySelector(this.HEADER_SELECTOR + '.' + this.ACTIVE_NAV_TAB_CLASS)
            },
          },
          {
            key: 'getActiveIndex',
            value: function () {
              return this.getActiveHeader().dataset.index
            },
          },
          {
            key: 'getTables',
            value: function () {
              return [].concat(i(document.querySelectorAll(this.TABLE_SELECTOR)))
            },
          },
          {
            key: 'getActiveTable',
            value: function () {
              return document.querySelector(this.TABLE_SELECTOR + '.' + this.ACTIVE_TABLE_CLASS)
            },
          },
          {
            key: 'getInputs',
            value: function () {
              return [].concat(i(document.querySelectorAll(this.OPTIONS_FORM_SELECTOR + ' input')))
            },
          },
          {
            key: 'getLabels',
            value: function () {
              return [].concat(i(document.querySelectorAll(this.OPTIONS_FORM_SELECTOR + ' label')))
            },
          },
          {
            key: 'getPlusButtons',
            value: function () {
              return [].concat(
                i(document.querySelectorAll(this.OPTIONS_FORM_SELECTOR + ' .' + this.PLUS_CLASS))
              )
            },
          },
          {
            key: 'isActiveTableChanged',
            value: function () {
              var e = this.getActiveIndex()
              return (
                JSON.stringify(this.getActiveTableData()) !== JSON.stringify(this.tablesData[e])
              )
            },
          },
          {
            key: 'setSubmitStatus',
            value: function () {
              this.submitButton.disabled = !this.isActiveTableChanged()
            },
          },
          {
            key: 'saveActiveTable',
            value: function () {
              var e = this
              if (this.isActiveTableChanged()) {
                var t = this.getActiveTable(),
                  n = document.createElement('form')
                return (
                  (n.action = this.optionsForm.getAttribute('action')),
                  (n.method = this.optionsForm.method),
                  n.appendChild(t.cloneNode(!0)),
                  [].concat(i(t.querySelectorAll('input'))).map(function (e) {
                    return (n.querySelector('#' + e.id).value = e.value)
                  }),
                  []
                    .concat(i(this.optionsForm.querySelectorAll('input[type="hidden"]')))
                    .map(function (e) {
                      return n.appendChild(e.cloneNode(!0))
                    }),
                  document.body.appendChild(n),
                  fetch(this.optionsForm.getAttribute('action'), {
                    method: n.method,
                    body: new URLSearchParams([].concat(i(new FormData(n)))),
                  })
                    .then(function (t) {
                      return (
                        t.ok
                          ? (e.showMessage(e.successMessage, e.optionsSaveSuccessMessage),
                            (e.tablesData = e.getTablesData()))
                          : e.showMessage(e.errorMessage, e.optionsSaveErrorMessage),
                        t.json()
                      )
                    })
                    .finally(function () {
                      n.parentNode.removeChild(n), e.setSubmitStatus()
                    })
                )
              }
            },
          },
          {
            key: 'getTableData',
            value: function (e) {
              var t = this,
                n = [].concat(i(e.querySelectorAll('input'))),
                r = {}
              return (
                n.forEach(function (e) {
                  var n = document.querySelector(
                    t.OPTIONS_FORM_SELECTOR + ' label[for="' + e.id + '"]'
                  )
                  r[n.innerHTML] = e.value
                }),
                r
              )
            },
          },
          {
            key: 'getTablesData',
            value: function () {
              var e = this
              return this.getTables().map(function (t) {
                return e.getTableData(t)
              })
            },
          },
          {
            key: 'getActiveTableData',
            value: function () {
              return this.getTableData(this.getActiveTable())
            },
          },
          {
            key: 'addWrapper',
            value: function () {
              ;(this.wrapper = document.createElement('ul')),
                this.wrapper.classList.add('nav-tab-wrapper'),
                this.optionsForm.insertBefore(this.wrapper, this.optionsForm.firstChild)
            },
          },
          {
            key: 'addMessageLine',
            value: function (e) {
              var t = document.createElement('div')
              return (t.id = e), this.optionsForm.insertBefore(t, this.optionsForm.firstChild), t
            },
          },
          {
            key: 'addMessageLines',
            value: function () {
              ;(this.successMessage = this.addMessageLine('ctl-success')),
                (this.errorMessage = this.addMessageLine('ctl-error'))
            },
          },
          {
            key: 'moveTabs',
            value: function () {
              var e = document.querySelector('.ctl-settings-tabs')
              e && this.optionsForm.insertBefore(e, this.optionsForm.firstChild)
            },
          },
          {
            key: 'addEditLabelInput',
            value: function () {
              ;(this.editLabelInput = document.createElement('input')),
                (this.editLabelInput.id = this.EDIT_LABEL_ID),
                (this.editLabelInput.style.display = 'none'),
                document.body.appendChild(this.editLabelInput)
            },
          },
          {
            key: 'hideEditLabelInput',
            value: function () {
              ;(this.editLabelInput.style.display = 'none'),
                this.editLabelInput.classList.remove(this.EDIT_LABEL_ERROR_CLASS),
                document.body.appendChild(this.editLabelInput)
            },
          },
          {
            key: 'getLastCell',
            value: function () {
              return document.querySelector(
                this.OPTIONS_FORM_SELECTOR + ' .' + this.ACTIVE_TABLE_CLASS + ' .' + this.PLUS_CLASS
              ).previousElementSibling
            },
          },
          {
            key: 'addCell',
            value: function () {
              var e = this.getLastCell()
              e.parentElement.insertBefore(e.cloneNode(!0), e.nextElementSibling)
              var t = (e = this.getLastCell()).querySelector('label'),
                n = e.querySelector('input'),
                r = n.id.split('-'),
                i = r[0] + '-' + (parseInt(r[1]) + 1)
              ;(t.htmlFor = i),
                (t.innerHTML = ''),
                (n.id = i),
                (n.value = ''),
                n.setAttribute('value', ''),
                this.replaceName(n, ''),
                this.bindEvents(),
                this.editLabel(t)
            },
          },
          {
            key: 'hideTables',
            value: function () {
              var e = this,
                t = 0
              this.getTables().map(function (n, r) {
                n.classList.add('ctl-table'),
                  e.CURRENT_STUB_ID === n.previousElementSibling.id &&
                    ((t = r), n.classList.add(e.ACTIVE_TABLE_CLASS))
                var i = document.createElement('div')
                return (
                  i.classList.add(e.PLUS_CLASS),
                  (i.innerHTML = e.plusButton),
                  n.querySelector('td').appendChild(i),
                  null
                )
              }),
                this.getHeaders().map(function (n, r) {
                  return (
                    n.classList.add('nav-tab'),
                    (n.dataset.index = r),
                    e.wrapper.appendChild(n),
                    r === t &&
                      (n.classList.add(e.CURRENT_NAV_TAB_CLASS),
                      n.classList.add(e.ACTIVE_NAV_TAB_CLASS)),
                    null
                  )
                })
            },
          },
          {
            key: 'bindEvents',
            value: function () {
              var e = this
              this.getHeaders().map(function (t, n, r) {
                return (
                  (t.onclick = function (t) {
                    t.preventDefault()
                    var n = t.target.dataset.index
                    if (n === e.getActiveIndex()) return !1
                    e.saveActiveTable(),
                      r.map(function (t) {
                        return t.classList.remove(e.ACTIVE_NAV_TAB_CLASS)
                      }),
                      r[n].classList.add(e.ACTIVE_NAV_TAB_CLASS)
                    var i = e.getTables()
                    return (
                      i.map(function (t) {
                        return t.classList.remove(e.ACTIVE_TABLE_CLASS)
                      }),
                      i[n].classList.add(e.ACTIVE_TABLE_CLASS),
                      e.setSubmitStatus(),
                      !1
                    )
                  }),
                  null
                )
              }),
                this.getInputs().map(function (t) {
                  return (
                    (t.oninput = function () {
                      e.setSubmitStatus()
                    }),
                    null
                  )
                }),
                this.getLabels().map(function (t) {
                  return (
                    (t.onclick = function (t) {
                      return t.preventDefault(), e.editLabel(t.target), !1
                    }),
                    null
                  )
                }),
                (this.editLabelInput.onblur = function () {
                  e.saveLabel()
                }),
                (this.editLabelInput.onkeyup = function (t) {
                  'Escape' === t.key && e.saveLabel(!0), 'Enter' === t.key && e.saveLabel()
                }),
                this.getPlusButtons().map(function (t) {
                  return (
                    (t.onclick = function (t) {
                      return t.preventDefault(), e.addCell(t.target), !1
                    }),
                    null
                  )
                }),
                (this.submitButton.onclick = function (t) {
                  return t.preventDefault(), e.saveActiveTable(), !1
                })
            },
          },
          {
            key: 'editLabel',
            value: function (e) {
              e.parentNode.appendChild(this.editLabelInput),
                (this.editLabelInput.value = e.innerHTML),
                this.editLabelInput.classList.remove(this.EDIT_LABEL_ERROR_CLASS),
                (this.editLabelInput.style.display = 'block'),
                this.editLabelInput.focus()
            },
          },
          {
            key: 'isUniqueLabel',
            value: function (e) {
              return []
                .concat(i(this.getActiveTable().querySelectorAll('label')))
                .reduce(function (t, n) {
                  return t && n.innerHTML !== e
                }, !0)
            },
          },
          {
            key: 'saveLabel',
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              if ('none' !== this.editLabelInput.style.display) {
                var t = this.editLabelInput.value.trim()
                if ('' === t) {
                  var n = document.getElementById(this.EDIT_LABEL_ID).parentElement
                  return (
                    this.hideEditLabelInput(),
                    n.parentNode.removeChild(n),
                    void this.setSubmitStatus()
                  )
                }
                var r = this.editLabelInput.parentNode.querySelector('label')
                if (e || t === r.innerHTML) this.hideEditLabelInput()
                else if (this.isUniqueLabel(t)) {
                  var i = this.editLabelInput.parentNode.querySelector('input')
                  this.hideEditLabelInput(),
                    (r.innerHTML = t),
                    this.replaceName(i, t),
                    this.setSubmitStatus()
                } else this.editLabelInput.classList.add(this.EDIT_LABEL_ERROR_CLASS)
              }
            },
          },
          {
            key: 'replaceName',
            value: function (e, t) {
              e.name = e.name.replace(/(.+\[.+])\[.*]/g, '$1[' + t + ']')
            },
          },
          {
            key: 'clearMessage',
            value: function (e) {
              ;(e.innerHTML = ''), e.classList.remove('active')
            },
          },
          {
            key: 'clearMessages',
            value: function () {
              this.clearMessage(this.successMessage),
                this.clearMessage(this.errorMessage),
                clearTimeout(this.msgTimer)
            },
          },
          {
            key: 'showMessage',
            value: function (e, t) {
              var n = this
              ;(e.innerHTML = t),
                e.classList.add('active'),
                (this.msgTimer = setTimeout(function () {
                  n.clearMessages()
                }, 5e3))
            },
          },
        ]),
        e
      )
    })()
    t.default = s
  },
])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nyb3NzLWZldGNoL2Rpc3QvYnJvd3Nlci1wb255ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdGFibGVzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdGFibGVzL3RhYmxlcy5qcyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsImdsb2JhbCIsInNlbGYiLCJ0aGlzIiwiX19zZWxmX18iLCJGIiwiZmV0Y2giLCJET01FeGNlcHRpb24iLCJzdXBwb3J0IiwiQmxvYiIsImUiLCJ2aWV3Q2xhc3NlcyIsImlzQXJyYXlCdWZmZXJWaWV3IiwiQXJyYXlCdWZmZXIiLCJpc1ZpZXciLCJvYmoiLCJpbmRleE9mIiwidG9TdHJpbmciLCJub3JtYWxpemVOYW1lIiwiU3RyaW5nIiwidGVzdCIsIlR5cGVFcnJvciIsInRvTG93ZXJDYXNlIiwibm9ybWFsaXplVmFsdWUiLCJpdGVyYXRvckZvciIsIml0ZW1zIiwiaXRlcmF0b3IiLCJuZXh0Iiwic2hpZnQiLCJkb25lIiwidW5kZWZpbmVkIiwiSGVhZGVycyIsImhlYWRlcnMiLCJtYXAiLCJmb3JFYWNoIiwiYXBwZW5kIiwiQXJyYXkiLCJpc0FycmF5IiwiaGVhZGVyIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImNvbnN1bWVkIiwiYm9keSIsImJvZHlVc2VkIiwiUHJvbWlzZSIsInJlamVjdCIsImZpbGVSZWFkZXJSZWFkeSIsInJlYWRlciIsInJlc29sdmUiLCJvbmxvYWQiLCJyZXN1bHQiLCJvbmVycm9yIiwiZXJyb3IiLCJyZWFkQmxvYkFzQXJyYXlCdWZmZXIiLCJibG9iIiwiRmlsZVJlYWRlciIsInByb21pc2UiLCJyZWFkQXNBcnJheUJ1ZmZlciIsImJ1ZmZlckNsb25lIiwiYnVmIiwic2xpY2UiLCJ2aWV3IiwiVWludDhBcnJheSIsImJ5dGVMZW5ndGgiLCJzZXQiLCJidWZmZXIiLCJCb2R5IiwiX2luaXRCb2R5IiwiX2JvZHlJbml0IiwiX2JvZHlUZXh0IiwiaXNQcm90b3R5cGVPZiIsIl9ib2R5QmxvYiIsIkZvcm1EYXRhIiwiX2JvZHlGb3JtRGF0YSIsIlVSTFNlYXJjaFBhcmFtcyIsIkRhdGFWaWV3IiwiX2JvZHlBcnJheUJ1ZmZlciIsInR5cGUiLCJyZWplY3RlZCIsIkVycm9yIiwiYXJyYXlCdWZmZXIiLCJ0aGVuIiwidGV4dCIsInJlYWRBc1RleHQiLCJjaGFycyIsImxlbmd0aCIsImZyb21DaGFyQ29kZSIsImpvaW4iLCJyZWFkQXJyYXlCdWZmZXJBc1RleHQiLCJmb3JtRGF0YSIsImRlY29kZSIsImpzb24iLCJKU09OIiwicGFyc2UiLCJvbGRWYWx1ZSIsImhhcyIsImNhbGxiYWNrIiwidGhpc0FyZyIsImtleXMiLCJwdXNoIiwidmFsdWVzIiwiZW50cmllcyIsIm1ldGhvZHMiLCJSZXF1ZXN0IiwiaW5wdXQiLCJvcHRpb25zIiwibWV0aG9kIiwidXBjYXNlZCIsInVybCIsImNyZWRlbnRpYWxzIiwic2lnbmFsIiwidG9VcHBlckNhc2UiLCJyZWZlcnJlciIsImZvcm0iLCJ0cmltIiwic3BsaXQiLCJieXRlcyIsInJlcGxhY2UiLCJkZWNvZGVVUklDb21wb25lbnQiLCJSZXNwb25zZSIsImJvZHlJbml0Iiwic3RhdHVzIiwib2siLCJzdGF0dXNUZXh0IiwiY2xvbmUiLCJyZXNwb25zZSIsInJlZGlyZWN0U3RhdHVzZXMiLCJyZWRpcmVjdCIsIlJhbmdlRXJyb3IiLCJsb2NhdGlvbiIsImVyciIsIm1lc3NhZ2UiLCJzdGFjayIsImNvbnN0cnVjdG9yIiwiaW5pdCIsInJlcXVlc3QiLCJhYm9ydGVkIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJhYm9ydFhociIsImFib3J0IiwicmF3SGVhZGVycyIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsImxpbmUiLCJwYXJ0cyIsInJlc3BvbnNlVVJMIiwicmVzcG9uc2VUZXh0Iiwib250aW1lb3V0Iiwib25hYm9ydCIsIm9wZW4iLCJ3aXRoQ3JlZGVudGlhbHMiLCJyZXNwb25zZVR5cGUiLCJzZXRSZXF1ZXN0SGVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2VuZCIsInBvbHlmaWxsIiwicG9ueWZpbGwiLCJjdHgiLCJkZWZhdWx0IiwiZG9jdW1lbnQiLCJUYWJsZXMiLCJPUFRJT05TX0ZPUk1fU0VMRUNUT1IiLCJIRUFERVJfU0VMRUNUT1IiLCJUQUJMRV9TRUxFQ1RPUiIsIlNVQk1JVF9TRUxFQ1RPUiIsIkNVUlJFTlRfU1RVQl9JRCIsIkNVUlJFTlRfTkFWX1RBQl9DTEFTUyIsIkFDVElWRV9OQVZfVEFCX0NMQVNTIiwiQUNUSVZFX1RBQkxFX0NMQVNTIiwiRURJVF9MQUJFTF9JRCIsIkVESVRfTEFCRUxfRVJST1JfQ0xBU1MiLCJwbHVzQnV0dG9uIiwiUExVU19DTEFTUyIsIm9wdGlvbnNGb3JtIiwicXVlcnlTZWxlY3RvciIsInRhYmxlc0RhdGEiLCJnZXRUYWJsZXNEYXRhIiwic3VibWl0QnV0dG9uIiwib3B0aW9uc1NhdmVTdWNjZXNzTWVzc2FnZSIsIkN5cjJMYXRUYWJsZXNPYmplY3QiLCJvcHRpb25zU2F2ZUVycm9yTWVzc2FnZSIsImFkZFdyYXBwZXIiLCJhZGRNZXNzYWdlTGluZXMiLCJtb3ZlVGFicyIsImFkZEVkaXRMYWJlbElucHV0IiwiaGlkZVRhYmxlcyIsImJpbmRFdmVudHMiLCJzZXRTdWJtaXRTdGF0dXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0QWN0aXZlSGVhZGVyIiwiZGF0YXNldCIsImluZGV4IiwiYWN0aXZlSW5kZXgiLCJnZXRBY3RpdmVJbmRleCIsInN0cmluZ2lmeSIsImdldEFjdGl2ZVRhYmxlRGF0YSIsImRpc2FibGVkIiwiaXNBY3RpdmVUYWJsZUNoYW5nZWQiLCJhY3RpdmVUYWJsZSIsImdldEFjdGl2ZVRhYmxlIiwiYWN0aXZlRm9ybSIsImNyZWF0ZUVsZW1lbnQiLCJhY3Rpb24iLCJnZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImNsb25lTm9kZSIsImFjdGl2ZUlucHV0cyIsImlkIiwiaGlkZGVuSW5wdXRzIiwic2hvd01lc3NhZ2UiLCJzdWNjZXNzTWVzc2FnZSIsImVycm9yTWVzc2FnZSIsImZpbmFsbHkiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ0YWJsZSIsImlucHV0cyIsImRhdGEiLCJsYWJlbCIsImlubmVySFRNTCIsImdldFRhYmxlcyIsImdldFRhYmxlRGF0YSIsIndyYXBwZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiYWRkTWVzc2FnZUxpbmUiLCJ0YWJzIiwiZWRpdExhYmVsSW5wdXQiLCJzdHlsZSIsImRpc3BsYXkiLCJyZW1vdmUiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibGFzdENlbGwiLCJnZXRMYXN0Q2VsbCIsInBhcmVudEVsZW1lbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJpZEFyciIsIm5ld0lkIiwicGFyc2VJbnQiLCJodG1sRm9yIiwic2V0QXR0cmlidXRlIiwicmVwbGFjZU5hbWUiLCJlZGl0TGFiZWwiLCJjdXJyZW50SW5kZXgiLCJwbHVzIiwiZ2V0SGVhZGVycyIsIm9uY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0Iiwic2F2ZUFjdGl2ZVRhYmxlIiwiYUhlYWRlciIsInRhYmxlcyIsImdldElucHV0cyIsIm9uaW5wdXQiLCJnZXRMYWJlbHMiLCJvbmJsdXIiLCJzYXZlTGFiZWwiLCJvbmtleXVwIiwiZ2V0UGx1c0J1dHRvbnMiLCJhZGRDZWxsIiwiZm9jdXMiLCJuZXdWYWx1ZSIsInJlZHVjZSIsImFjYyIsImNhbmNlbCIsImVkaXRlZENlbGwiLCJnZXRFbGVtZW50QnlJZCIsImhpZGVFZGl0TGFiZWxJbnB1dCIsImlzVW5pcXVlTGFiZWwiLCJjbGVhck1lc3NhZ2UiLCJjbGVhclRpbWVvdXQiLCJtc2dUaW1lciIsImVsIiwic2V0VGltZW91dCIsImNsZWFyTWVzc2FnZXMiXSwibWFwcGluZ3MiOiJhQUNFLElBQUlBLEVBQW1CLEdBR3ZCLFNBQVNDLEVBQW9CQyxHQUc1QixHQUFHRixFQUFpQkUsR0FDbkIsT0FBT0YsRUFBaUJFLEdBQVVDLFFBR25DLElBQUlDLEVBQVNKLEVBQWlCRSxHQUFZLENBQ3pDRyxFQUFHSCxFQUNISSxHQUFHLEVBQ0hILFFBQVMsSUFVVixPQU5BSSxFQUFRTCxHQUFVTSxLQUFLSixFQUFPRCxRQUFTQyxFQUFRQSxFQUFPRCxRQUFTRixHQUcvREcsRUFBT0UsR0FBSSxFQUdKRixFQUFPRCxRQUtmRixFQUFvQlEsRUFBSUYsRUFHeEJOLEVBQW9CUyxFQUFJVixFQUd4QkMsRUFBb0JVLEVBQUksU0FBU1IsRUFBU1MsRUFBTUMsR0FDM0NaLEVBQW9CYSxFQUFFWCxFQUFTUyxJQUNsQ0csT0FBT0MsZUFBZWIsRUFBU1MsRUFBTSxDQUFFSyxZQUFZLEVBQU1DLElBQUtMLEtBS2hFWixFQUFvQmtCLEVBQUksU0FBU2hCLEdBQ1gsb0JBQVhpQixRQUEwQkEsT0FBT0MsYUFDMUNOLE9BQU9DLGVBQWViLEVBQVNpQixPQUFPQyxZQUFhLENBQUVDLE1BQU8sV0FFN0RQLE9BQU9DLGVBQWViLEVBQVMsYUFBYyxDQUFFbUIsT0FBTyxLQVF2RHJCLEVBQW9Cc0IsRUFBSSxTQUFTRCxFQUFPRSxHQUV2QyxHQURVLEVB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LEtBQUtpUixZLGtDQVNQQyxFQUFJbkosR0FBVSxXQUMxQm1KLEVBQUd4RCxVQUFZM0YsRUFDZm1KLEVBQUdwRCxVQUFVQyxJQUFLLFVBRWxCL04sS0FBS2lSLFNBQVdFLFlBQVksV0FDM0IsRUFBS0Msa0JBQ0gsUyxlQUlVckgiLCJmaWxlIjoidGFibGVzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsInZhciBnbG9iYWwgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcztcbnZhciBfX3NlbGZfXyA9IChmdW5jdGlvbiAoKSB7XG5mdW5jdGlvbiBGKCkge1xudGhpcy5mZXRjaCA9IGZhbHNlO1xudGhpcy5ET01FeGNlcHRpb24gPSBnbG9iYWwuRE9NRXhjZXB0aW9uXG59XG5GLnByb3RvdHlwZSA9IGdsb2JhbDtcbnJldHVybiBuZXcgRigpO1xufSkoKTtcbihmdW5jdGlvbihzZWxmKSB7XG5cbnZhciBpcnJlbGV2YW50ID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG5cbiAgdmFyIHN1cHBvcnQgPSB7XG4gICAgc2VhcmNoUGFyYW1zOiAnVVJMU2VhcmNoUGFyYW1zJyBpbiBzZWxmLFxuICAgIGl0ZXJhYmxlOiAnU3ltYm9sJyBpbiBzZWxmICYmICdpdGVyYXRvcicgaW4gU3ltYm9sLFxuICAgIGJsb2I6XG4gICAgICAnRmlsZVJlYWRlcicgaW4gc2VsZiAmJlxuICAgICAgJ0Jsb2InIGluIHNlbGYgJiZcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBuZXcgQmxvYigpO1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSkoKSxcbiAgICBmb3JtRGF0YTogJ0Zvcm1EYXRhJyBpbiBzZWxmLFxuICAgIGFycmF5QnVmZmVyOiAnQXJyYXlCdWZmZXInIGluIHNlbGZcbiAgfTtcblxuICBmdW5jdGlvbiBpc0RhdGFWaWV3KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgRGF0YVZpZXcucHJvdG90eXBlLmlzUHJvdG90eXBlT2Yob2JqKVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgdmlld0NsYXNzZXMgPSBbXG4gICAgICAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQ2NEFycmF5XSdcbiAgICBdO1xuXG4gICAgdmFyIGlzQXJyYXlCdWZmZXJWaWV3ID1cbiAgICAgIEFycmF5QnVmZmVyLmlzVmlldyB8fFxuICAgICAgZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgdmlld0NsYXNzZXMuaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSkgPiAtMVxuICAgICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUobmFtZSkge1xuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPSBTdHJpbmcobmFtZSk7XG4gICAgfVxuICAgIGlmICgvW15hLXowLTlcXC0jJCUmJyorLl5fYHx+XS9pLnRlc3QobmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lJylcbiAgICB9XG4gICAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8vIEJ1aWxkIGEgZGVzdHJ1Y3RpdmUgaXRlcmF0b3IgZm9yIHRoZSB2YWx1ZSBsaXN0XG4gIGZ1bmN0aW9uIGl0ZXJhdG9yRm9yKGl0ZW1zKSB7XG4gICAgdmFyIGl0ZXJhdG9yID0ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGl0ZW1zLnNoaWZ0KCk7XG4gICAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHVuZGVmaW5lZCwgdmFsdWU6IHZhbHVlfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZXJhdG9yXG4gIH1cblxuICBmdW5jdGlvbiBIZWFkZXJzKGhlYWRlcnMpIHtcbiAgICB0aGlzLm1hcCA9IHt9O1xuXG4gICAgaWYgKGhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgdmFsdWUpO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGhlYWRlcnMpKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24oaGVhZGVyKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKGhlYWRlclswXSwgaGVhZGVyWzFdKTtcbiAgICAgIH0sIHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoaGVhZGVycykge1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIGhlYWRlcnNbbmFtZV0pO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKTtcbiAgICB2YWx1ZSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLm1hcFtuYW1lXTtcbiAgICB0aGlzLm1hcFtuYW1lXSA9IG9sZFZhbHVlID8gb2xkVmFsdWUgKyAnLCAnICsgdmFsdWUgOiB2YWx1ZTtcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldO1xuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKTtcbiAgICByZXR1cm4gdGhpcy5oYXMobmFtZSkgPyB0aGlzLm1hcFtuYW1lXSA6IG51bGxcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmhhc093blByb3BlcnR5KG5vcm1hbGl6ZU5hbWUobmFtZSkpXG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMubWFwKSB7XG4gICAgICBpZiAodGhpcy5tYXAuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzLm1hcFtuYW1lXSwgbmFtZSwgdGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgIGl0ZW1zLnB1c2gobmFtZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaXRlbXMucHVzaCh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgIGl0ZW1zLnB1c2goW25hbWUsIHZhbHVlXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9O1xuXG4gIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXM7XG4gIH1cblxuICBmdW5jdGlvbiBjb25zdW1lZChib2R5KSB7XG4gICAgaWYgKGJvZHkuYm9keVVzZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKSlcbiAgICB9XG4gICAgYm9keS5ib2R5VXNlZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgICAgfTtcbiAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpO1xuICAgICAgfTtcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc0FycmF5QnVmZmVyKGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpO1xuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKTtcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc1RleHQoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcik7XG4gICAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYik7XG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRBcnJheUJ1ZmZlckFzVGV4dChidWYpIHtcbiAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zik7XG4gICAgdmFyIGNoYXJzID0gbmV3IEFycmF5KHZpZXcubGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hhcnNbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHZpZXdbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gY2hhcnMuam9pbignJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1ZmZlckNsb25lKGJ1Zikge1xuICAgIGlmIChidWYuc2xpY2UpIHtcbiAgICAgIHJldHVybiBidWYuc2xpY2UoMClcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYuYnl0ZUxlbmd0aCk7XG4gICAgICB2aWV3LnNldChuZXcgVWludDhBcnJheShidWYpKTtcbiAgICAgIHJldHVybiB2aWV3LmJ1ZmZlclxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEJvZHkoKSB7XG4gICAgdGhpcy5ib2R5VXNlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5faW5pdEJvZHkgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5SW5pdCA9IGJvZHk7XG4gICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSAnJztcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keTtcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5ibG9iICYmIEJsb2IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUJsb2IgPSBib2R5O1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmZvcm1EYXRhICYmIEZvcm1EYXRhLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlGb3JtRGF0YSA9IGJvZHk7XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkudG9TdHJpbmcoKTtcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiBzdXBwb3J0LmJsb2IgJiYgaXNEYXRhVmlldyhib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5LmJ1ZmZlcik7XG4gICAgICAgIC8vIElFIDEwLTExIGNhbid0IGhhbmRsZSBhIERhdGFWaWV3IGJvZHkuXG4gICAgICAgIHRoaXMuX2JvZHlJbml0ID0gbmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pO1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSB8fCBpc0FycmF5QnVmZmVyVmlldyhib2R5KSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYm9keSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QmxvYiAmJiB0aGlzLl9ib2R5QmxvYi50eXBlKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgdGhpcy5ibG9iID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpO1xuICAgICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSkpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIGJsb2InKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlUZXh0XSkpXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBjb25zdW1lZCh0aGlzKSB8fCBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUFycmF5QnVmZmVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpO1xuICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRCbG9iQXNUZXh0KHRoaXMuX2JvZHlCbG9iKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZWFkQXJyYXlCdWZmZXJBc1RleHQodGhpcy5fYm9keUFycmF5QnVmZmVyKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyB0ZXh0JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChzdXBwb3J0LmZvcm1EYXRhKSB7XG4gICAgICB0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5qc29uID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gSFRUUCBtZXRob2RzIHdob3NlIGNhcGl0YWxpemF0aW9uIHNob3VsZCBiZSBub3JtYWxpemVkXG4gIHZhciBtZXRob2RzID0gWydERUxFVEUnLCAnR0VUJywgJ0hFQUQnLCAnT1BUSU9OUycsICdQT1NUJywgJ1BVVCddO1xuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZChtZXRob2QpIHtcbiAgICB2YXIgdXBjYXNlZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpO1xuICAgIHJldHVybiBtZXRob2RzLmluZGV4T2YodXBjYXNlZCkgPiAtMSA/IHVwY2FzZWQgOiBtZXRob2RcbiAgfVxuXG4gIGZ1bmN0aW9uIFJlcXVlc3QoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keTtcblxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIFJlcXVlc3QpIHtcbiAgICAgIGlmIChpbnB1dC5ib2R5VXNlZCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKVxuICAgICAgfVxuICAgICAgdGhpcy51cmwgPSBpbnB1dC51cmw7XG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0gaW5wdXQuY3JlZGVudGlhbHM7XG4gICAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbnB1dC5oZWFkZXJzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubWV0aG9kID0gaW5wdXQubWV0aG9kO1xuICAgICAgdGhpcy5tb2RlID0gaW5wdXQubW9kZTtcbiAgICAgIHRoaXMuc2lnbmFsID0gaW5wdXQuc2lnbmFsO1xuICAgICAgaWYgKCFib2R5ICYmIGlucHV0Ll9ib2R5SW5pdCAhPSBudWxsKSB7XG4gICAgICAgIGJvZHkgPSBpbnB1dC5fYm9keUluaXQ7XG4gICAgICAgIGlucHV0LmJvZHlVc2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cmwgPSBTdHJpbmcoaW5wdXQpO1xuICAgIH1cblxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzIHx8IHRoaXMuY3JlZGVudGlhbHMgfHwgJ3NhbWUtb3JpZ2luJztcbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzIHx8ICF0aGlzLmhlYWRlcnMpIHtcbiAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycyk7XG4gICAgfVxuICAgIHRoaXMubWV0aG9kID0gbm9ybWFsaXplTWV0aG9kKG9wdGlvbnMubWV0aG9kIHx8IHRoaXMubWV0aG9kIHx8ICdHRVQnKTtcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGw7XG4gICAgdGhpcy5zaWduYWwgPSBvcHRpb25zLnNpZ25hbCB8fCB0aGlzLnNpZ25hbDtcbiAgICB0aGlzLnJlZmVycmVyID0gbnVsbDtcblxuICAgIGlmICgodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpICYmIGJvZHkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JvZHkgbm90IGFsbG93ZWQgZm9yIEdFVCBvciBIRUFEIHJlcXVlc3RzJylcbiAgICB9XG4gICAgdGhpcy5faW5pdEJvZHkoYm9keSk7XG4gIH1cblxuICBSZXF1ZXN0LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzLCB7Ym9keTogdGhpcy5fYm9keUluaXR9KVxuICB9O1xuXG4gIGZ1bmN0aW9uIGRlY29kZShib2R5KSB7XG4gICAgdmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcbiAgICBib2R5XG4gICAgICAudHJpbSgpXG4gICAgICAuc3BsaXQoJyYnKVxuICAgICAgLmZvckVhY2goZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgICAgaWYgKGJ5dGVzKSB7XG4gICAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKTtcbiAgICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJyk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpO1xuICAgICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAvLyBSZXBsYWNlIGluc3RhbmNlcyBvZiBcXHJcXG4gYW5kIFxcbiBmb2xsb3dlZCBieSBhdCBsZWFzdCBvbmUgc3BhY2Ugb3IgaG9yaXpvbnRhbCB0YWIgd2l0aCBhIHNwYWNlXG4gICAgLy8gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzAjc2VjdGlvbi0zLjJcbiAgICB2YXIgcHJlUHJvY2Vzc2VkSGVhZGVycyA9IHJhd0hlYWRlcnMucmVwbGFjZSgvXFxyP1xcbltcXHQgXSsvZywgJyAnKTtcbiAgICBwcmVQcm9jZXNzZWRIZWFkZXJzLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6Jyk7XG4gICAgICB2YXIga2V5ID0gcGFydHMuc2hpZnQoKS50cmltKCk7XG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzonKS50cmltKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBoZWFkZXJzXG4gIH1cblxuICBCb2R5LmNhbGwoUmVxdWVzdC5wcm90b3R5cGUpO1xuXG4gIGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHlJbml0LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdGhpcy50eXBlID0gJ2RlZmF1bHQnO1xuICAgIHRoaXMuc3RhdHVzID0gb3B0aW9ucy5zdGF0dXMgPT09IHVuZGVmaW5lZCA/IDIwMCA6IG9wdGlvbnMuc3RhdHVzO1xuICAgIHRoaXMub2sgPSB0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDA7XG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gJ3N0YXR1c1RleHQnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1c1RleHQgOiAnT0snO1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycyk7XG4gICAgdGhpcy51cmwgPSBvcHRpb25zLnVybCB8fCAnJztcbiAgICB0aGlzLl9pbml0Qm9keShib2R5SW5pdCk7XG4gIH1cblxuICBCb2R5LmNhbGwoUmVzcG9uc2UucHJvdG90eXBlKTtcblxuICBSZXNwb25zZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKHRoaXMuX2JvZHlJbml0LCB7XG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgIHVybDogdGhpcy51cmxcbiAgICB9KVxuICB9O1xuXG4gIFJlc3BvbnNlLmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDAsIHN0YXR1c1RleHQ6ICcnfSk7XG4gICAgcmVzcG9uc2UudHlwZSA9ICdlcnJvcic7XG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH07XG5cbiAgdmFyIHJlZGlyZWN0U3RhdHVzZXMgPSBbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdO1xuXG4gIFJlc3BvbnNlLnJlZGlyZWN0ID0gZnVuY3Rpb24odXJsLCBzdGF0dXMpIHtcbiAgICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzdGF0dXMgY29kZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiBzdGF0dXMsIGhlYWRlcnM6IHtsb2NhdGlvbjogdXJsfX0pXG4gIH07XG5cbiAgZXhwb3J0cy5ET01FeGNlcHRpb24gPSBzZWxmLkRPTUV4Y2VwdGlvbjtcbiAgdHJ5IHtcbiAgICBuZXcgZXhwb3J0cy5ET01FeGNlcHRpb24oKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZXhwb3J0cy5ET01FeGNlcHRpb24gPSBmdW5jdGlvbihtZXNzYWdlLCBuYW1lKSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgIHZhciBlcnJvciA9IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgdGhpcy5zdGFjayA9IGVycm9yLnN0YWNrO1xuICAgIH07XG4gICAgZXhwb3J0cy5ET01FeGNlcHRpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICAgIGV4cG9ydHMuRE9NRXhjZXB0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGV4cG9ydHMuRE9NRXhjZXB0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2goaW5wdXQsIGluaXQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGlucHV0LCBpbml0KTtcblxuICAgICAgaWYgKHJlcXVlc3Quc2lnbmFsICYmIHJlcXVlc3Quc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgZXhwb3J0cy5ET01FeGNlcHRpb24oJ0Fib3J0ZWQnLCAnQWJvcnRFcnJvcicpKVxuICAgICAgfVxuXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIGZ1bmN0aW9uIGFib3J0WGhyKCkge1xuICAgICAgICB4aHIuYWJvcnQoKTtcbiAgICAgIH1cblxuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB8fCAnJylcbiAgICAgICAgfTtcbiAgICAgICAgb3B0aW9ucy51cmwgPSAncmVzcG9uc2VVUkwnIGluIHhociA/IHhoci5yZXNwb25zZVVSTCA6IG9wdGlvbnMuaGVhZGVycy5nZXQoJ1gtUmVxdWVzdC1VUkwnKTtcbiAgICAgICAgdmFyIGJvZHkgPSAncmVzcG9uc2UnIGluIHhociA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgIHJlc29sdmUobmV3IFJlc3BvbnNlKGJvZHksIG9wdGlvbnMpKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbmFib3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgZXhwb3J0cy5ET01FeGNlcHRpb24oJ0Fib3J0ZWQnLCAnQWJvcnRFcnJvcicpKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LnVybCwgdHJ1ZSk7XG5cbiAgICAgIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnaW5jbHVkZScpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdvbWl0Jykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIgJiYgc3VwcG9ydC5ibG9iKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3QuaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVxdWVzdC5zaWduYWwpIHtcbiAgICAgICAgcmVxdWVzdC5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydFhocik7XG5cbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIERPTkUgKHN1Y2Nlc3Mgb3IgZmFpbHVyZSlcbiAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgIHJlcXVlc3Quc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRYaHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgeGhyLnNlbmQodHlwZW9mIHJlcXVlc3QuX2JvZHlJbml0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiByZXF1ZXN0Ll9ib2R5SW5pdCk7XG4gICAgfSlcbiAgfVxuXG4gIGZldGNoLnBvbHlmaWxsID0gdHJ1ZTtcblxuICBpZiAoIXNlbGYuZmV0Y2gpIHtcbiAgICBzZWxmLmZldGNoID0gZmV0Y2g7XG4gICAgc2VsZi5IZWFkZXJzID0gSGVhZGVycztcbiAgICBzZWxmLlJlcXVlc3QgPSBSZXF1ZXN0O1xuICAgIHNlbGYuUmVzcG9uc2UgPSBSZXNwb25zZTtcbiAgfVxuXG4gIGV4cG9ydHMuSGVhZGVycyA9IEhlYWRlcnM7XG4gIGV4cG9ydHMuUmVxdWVzdCA9IFJlcXVlc3Q7XG4gIGV4cG9ydHMuUmVzcG9uc2UgPSBSZXNwb25zZTtcbiAgZXhwb3J0cy5mZXRjaCA9IGZldGNoO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oe30pKTtcbn0pKF9fc2VsZl9fKTtcbl9fc2VsZl9fLmZldGNoLnBvbnlmaWxsID0gdHJ1ZTtcbi8vIFJlbW92ZSBcInBvbHlmaWxsXCIgcHJvcGVydHkgYWRkZWQgYnkgd2hhdHdnLWZldGNoXG5kZWxldGUgX19zZWxmX18uZmV0Y2gucG9seWZpbGw7XG4vLyBDaG9vc2UgYmV0d2VlbiBuYXRpdmUgaW1wbGVtZW50YXRpb24gKGdsb2JhbCkgb3IgY3VzdG9tIGltcGxlbWVudGF0aW9uIChfX3NlbGZfXylcbi8vIHZhciBjdHggPSBnbG9iYWwuZmV0Y2ggPyBnbG9iYWwgOiBfX3NlbGZfXztcbnZhciBjdHggPSBfX3NlbGZfXzsgLy8gdGhpcyBsaW5lIGRpc2FibGUgc2VydmljZSB3b3JrZXIgc3VwcG9ydCB0ZW1wb3JhcmlseVxuZXhwb3J0cyA9IGN0eC5mZXRjaCAvLyBUbyBlbmFibGU6IGltcG9ydCBmZXRjaCBmcm9tICdjcm9zcy1mZXRjaCdcbmV4cG9ydHMuZGVmYXVsdCA9IGN0eC5mZXRjaCAvLyBGb3IgVHlwZVNjcmlwdCBjb25zdW1lcnMgd2l0aG91dCBlc01vZHVsZUludGVyb3AuXG5leHBvcnRzLmZldGNoID0gY3R4LmZldGNoIC8vIFRvIGVuYWJsZTogaW1wb3J0IHtmZXRjaH0gZnJvbSAnY3Jvc3MtZmV0Y2gnXG5leHBvcnRzLkhlYWRlcnMgPSBjdHguSGVhZGVyc1xuZXhwb3J0cy5SZXF1ZXN0ID0gY3R4LlJlcXVlc3RcbmV4cG9ydHMuUmVzcG9uc2UgPSBjdHguUmVzcG9uc2Vcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1xuIiwiLyoqXG4gKiBAZmlsZSBUYWJsZXMgQXBwbGljYXRpb24uXG4gKi9cbmltcG9ydCBUYWJsZXMgZnJvbSAnLi90YWJsZXMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblx0bmV3IFRhYmxlcygpO1xufSApO1xuIiwiLyoqXG4gKiBAZmlsZSBjbGFzcyBUYWJsZXMuXG4gKi9cblxuLyogZ2xvYmFsIEN5cjJMYXRUYWJsZXNPYmplY3QgKi9cblxuY2xhc3MgVGFibGVzIHtcblx0LyoqXG5cdCAqIENsYXNzIGNvbnN0cnVjdG9yLlxuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5PUFRJT05TX0ZPUk1fU0VMRUNUT1IgPSAnI2N0bC1vcHRpb25zJztcblx0XHR0aGlzLkhFQURFUl9TRUxFQ1RPUiA9IHRoaXMuT1BUSU9OU19GT1JNX1NFTEVDVE9SICsgJyBoMic7XG5cdFx0dGhpcy5UQUJMRV9TRUxFQ1RPUiA9IHRoaXMuT1BUSU9OU19GT1JNX1NFTEVDVE9SICsgJyB0YWJsZSc7XG5cdFx0dGhpcy5TVUJNSVRfU0VMRUNUT1IgPSB0aGlzLk9QVElPTlNfRk9STV9TRUxFQ1RPUiArICcgI3N1Ym1pdCc7XG5cdFx0dGhpcy5DVVJSRU5UX1NUVUJfSUQgPSAnY3RsLWN1cnJlbnQnO1xuXHRcdHRoaXMuQ1VSUkVOVF9OQVZfVEFCX0NMQVNTID0gJ25hdi10YWItY3VycmVudCc7XG5cdFx0dGhpcy5BQ1RJVkVfTkFWX1RBQl9DTEFTUyA9ICduYXYtdGFiLWFjdGl2ZSc7XG5cdFx0dGhpcy5BQ1RJVkVfVEFCTEVfQ0xBU1MgPSAnYWN0aXZlJztcblx0XHR0aGlzLkVESVRfTEFCRUxfSUQgPSAnY3RsLWVkaXQtbGFiZWwnO1xuXHRcdHRoaXMuRURJVF9MQUJFTF9FUlJPUl9DTEFTUyA9ICdjdGwtZWRpdC1sYWJlbC1lcnJvcic7XG5cdFx0dGhpcy5wbHVzQnV0dG9uID1cblx0XHRcdCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGNsYXNzPVwiY29tcG9uZW50cy1idXR0b24gYmxvY2stZWRpdG9yLWluc2VydGVyX190b2dnbGUgaGFzLWljb25cIiBhcmlhLWxhYmVsPVwi0JTQvtCx0LDQstC40YLRjCDQsdC70L7QulwiPicgK1xuXHRcdFx0Jzxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCItMiAtMiAyNCAyNFwiIHJvbGU9XCJpbWdcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiPicgK1xuXHRcdFx0JzxwYXRoIGQ9XCJNMTAgMWMtNSAwLTkgNC05IDlzNCA5IDkgOSA5LTQgOS05LTQtOS05LTl6bTAgMTZjLTMuOSAwLTctMy4xLTctN3MzLjEtNyA3LTcgNyAzLjEgNyA3LTMuMSA3LTcgN3ptMS0xMUg5djNINnYyaDN2M2gydi0zaDNWOWgtM1Y2ek0xMCAxYy01IDAtOSA0LTkgOXM0IDkgOSA5IDktNCA5LTktNC05LTktOXptMCAxNmMtMy45IDAtNy0zLjEtNy03czMuMS03IDctNyA3IDMuMSA3IDctMy4xIDctNyA3em0xLTExSDl2M0g2djJoM3YzaDJ2LTNoM1Y5aC0zVjZ6XCI+JyArXG5cdFx0XHQnPC9wYXRoPicgK1xuXHRcdFx0Jzwvc3ZnPicgK1xuXHRcdFx0JzwvYnV0dG9uPic7XG5cdFx0dGhpcy5QTFVTX0NMQVNTID0gJ2N0bC1wbHVzJztcblxuXHRcdHRoaXMub3B0aW9uc0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCB0aGlzLk9QVElPTlNfRk9STV9TRUxFQ1RPUiApO1xuXHRcdHRoaXMudGFibGVzRGF0YSA9IHRoaXMuZ2V0VGFibGVzRGF0YSgpO1xuXHRcdHRoaXMuc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggdGhpcy5TVUJNSVRfU0VMRUNUT1IgKTtcblxuXHRcdC8vIENvcHkgdG8gY2xhc3MgcHJvcGVydGllcywgb3RoZXJ3aXNlIGVzbGludCBtYXJrcyBzb21lIHByb3BlcnRpZXMgb2YgZ2xvYmFsIG9iamVjdCBhcyB1bnJlc29sdmVkLlxuXHRcdHRoaXMub3B0aW9uc1NhdmVTdWNjZXNzTWVzc2FnZSA9XG5cdFx0XHRDeXIyTGF0VGFibGVzT2JqZWN0Lm9wdGlvbnNTYXZlU3VjY2Vzc01lc3NhZ2U7XG5cdFx0dGhpcy5vcHRpb25zU2F2ZUVycm9yTWVzc2FnZSA9XG5cdFx0XHRDeXIyTGF0VGFibGVzT2JqZWN0Lm9wdGlvbnNTYXZlRXJyb3JNZXNzYWdlO1xuXG5cdFx0dGhpcy5hZGRXcmFwcGVyKCk7XG5cdFx0dGhpcy5hZGRNZXNzYWdlTGluZXMoKTtcblx0XHR0aGlzLm1vdmVUYWJzKCk7XG5cdFx0dGhpcy5hZGRFZGl0TGFiZWxJbnB1dCgpO1xuXHRcdHRoaXMuaGlkZVRhYmxlcygpO1xuXHRcdHRoaXMuYmluZEV2ZW50cygpO1xuXHRcdHRoaXMuc2V0U3VibWl0U3RhdHVzKCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGhlYWRlcnMuXG5cdCAqXG5cdCAqIEByZXR1cm4geypbXX0gSGVhZGVycy5cblx0ICovXG5cdGdldEhlYWRlcnMoKSB7XG5cdFx0cmV0dXJuIFsgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggdGhpcy5IRUFERVJfU0VMRUNUT1IgKSBdO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhY3RpdmUgaGVhZGVyLlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtFbGVtZW50fSBBY3RpdmUgaGVhZGVyLlxuXHQgKi9cblx0Z2V0QWN0aXZlSGVhZGVyKCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0dGhpcy5IRUFERVJfU0VMRUNUT1IgKyAnLicgKyB0aGlzLkFDVElWRV9OQVZfVEFCX0NMQVNTXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWN0aXZlIGluZGV4LlxuXHQgKlxuXHQgKiBAcmV0dXJuIHsqfSBBY3RpdmUgaW5kZXguXG5cdCAqL1xuXHRnZXRBY3RpdmVJbmRleCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBY3RpdmVIZWFkZXIoKS5kYXRhc2V0LmluZGV4O1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0YWJsZXMuXG5cdCAqXG5cdCAqIEByZXR1cm4geypbXX0gVGFibGVzLlxuXHQgKi9cblx0Z2V0VGFibGVzKCkge1xuXHRcdHJldHVybiBbIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoIHRoaXMuVEFCTEVfU0VMRUNUT1IgKSBdO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhY3RpdmUgdGFibGUuXG5cdCAqXG5cdCAqIEByZXR1cm4ge0VsZW1lbnR9IEFjdGl2ZSB0YWJsZS5cblx0ICovXG5cdGdldEFjdGl2ZVRhYmxlKCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0dGhpcy5UQUJMRV9TRUxFQ1RPUiArICcuJyArIHRoaXMuQUNUSVZFX1RBQkxFX0NMQVNTXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgaW5wdXRzLlxuXHQgKlxuXHQgKiBAcmV0dXJuIHsqW119IElucHV0cy5cblx0ICovXG5cdGdldElucHV0cygpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Li4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdFx0dGhpcy5PUFRJT05TX0ZPUk1fU0VMRUNUT1IgKyAnIGlucHV0J1xuXHRcdFx0KSxcblx0XHRdO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBsYWJlbHMuXG5cdCAqXG5cdCAqIEByZXR1cm4geypbXX0gTGFiZWxzLlxuXHQgKi9cblx0Z2V0TGFiZWxzKCkge1xuXHRcdHJldHVybiBbXG5cdFx0XHQuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0XHR0aGlzLk9QVElPTlNfRk9STV9TRUxFQ1RPUiArICcgbGFiZWwnXG5cdFx0XHQpLFxuXHRcdF07XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHBsdXMgYnV0dG9ucy5cblx0ICpcblx0ICogQHJldHVybiB7KltdfSBQbHVzIGJ1dHRvbnMuXG5cdCAqL1xuXHRnZXRQbHVzQnV0dG9ucygpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Li4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdFx0dGhpcy5PUFRJT05TX0ZPUk1fU0VMRUNUT1IgKyAnIC4nICsgdGhpcy5QTFVTX0NMQVNTXG5cdFx0XHQpLFxuXHRcdF07XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2sgb2YgYWN0aXZlIHRhYmxlIHdhcyBjaGFuZ2VkLlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtib29sZWFufSBJZiBhY3RpdmUgdGFibGUgd2FzIGNoYW5nZWQuXG5cdCAqL1xuXHRpc0FjdGl2ZVRhYmxlQ2hhbmdlZCgpIHtcblx0XHRjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuZ2V0QWN0aXZlSW5kZXgoKTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHRKU09OLnN0cmluZ2lmeSggdGhpcy5nZXRBY3RpdmVUYWJsZURhdGEoKSApICE9PVxuXHRcdFx0SlNPTi5zdHJpbmdpZnkoIHRoaXMudGFibGVzRGF0YVsgYWN0aXZlSW5kZXggXSApXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgc3RhdHVzIG9mIHN1Ym1pdCBidXR0b24uXG5cdCAqL1xuXHRzZXRTdWJtaXRTdGF0dXMoKSB7XG5cdFx0dGhpcy5zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSAhIHRoaXMuaXNBY3RpdmVUYWJsZUNoYW5nZWQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTYXZlIGFjdGl2ZSB0YWJsZS5cblx0ICovXG5cdHNhdmVBY3RpdmVUYWJsZSgpIHtcblx0XHRpZiAoICEgdGhpcy5pc0FjdGl2ZVRhYmxlQ2hhbmdlZCgpICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGFjdGl2ZVRhYmxlID0gdGhpcy5nZXRBY3RpdmVUYWJsZSgpO1xuXG5cdFx0Y29uc3QgYWN0aXZlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdmb3JtJyApO1xuXHRcdGFjdGl2ZUZvcm0uYWN0aW9uID0gdGhpcy5vcHRpb25zRm9ybS5nZXRBdHRyaWJ1dGUoICdhY3Rpb24nICk7XG5cdFx0YWN0aXZlRm9ybS5tZXRob2QgPSB0aGlzLm9wdGlvbnNGb3JtLm1ldGhvZDtcblx0XHRhY3RpdmVGb3JtLmFwcGVuZENoaWxkKCBhY3RpdmVUYWJsZS5jbG9uZU5vZGUoIHRydWUgKSApO1xuXG5cdFx0Y29uc3QgYWN0aXZlSW5wdXRzID0gWyAuLi5hY3RpdmVUYWJsZS5xdWVyeVNlbGVjdG9yQWxsKCAnaW5wdXQnICkgXTtcblx0XHRhY3RpdmVJbnB1dHMubWFwKCAoIGlucHV0ICkgPT4ge1xuXHRcdFx0cmV0dXJuICggYWN0aXZlRm9ybS5xdWVyeVNlbGVjdG9yKCAnIycgKyBpbnB1dC5pZCApLnZhbHVlID1cblx0XHRcdFx0aW5wdXQudmFsdWUgKTtcblx0XHR9ICk7XG5cblx0XHRjb25zdCBoaWRkZW5JbnB1dHMgPSBbXG5cdFx0XHQuLi50aGlzLm9wdGlvbnNGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoICdpbnB1dFt0eXBlPVwiaGlkZGVuXCJdJyApLFxuXHRcdF07XG5cdFx0aGlkZGVuSW5wdXRzLm1hcCggKCBpbnB1dCApID0+IHtcblx0XHRcdHJldHVybiBhY3RpdmVGb3JtLmFwcGVuZENoaWxkKCBpbnB1dC5jbG9uZU5vZGUoIHRydWUgKSApO1xuXHRcdH0gKTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBhY3RpdmVGb3JtICk7XG5cblx0XHRyZXR1cm4gZmV0Y2goIHRoaXMub3B0aW9uc0Zvcm0uZ2V0QXR0cmlidXRlKCAnYWN0aW9uJyApLCB7XG5cdFx0XHRtZXRob2Q6IGFjdGl2ZUZvcm0ubWV0aG9kLFxuXHRcdFx0Ym9keTogbmV3IFVSTFNlYXJjaFBhcmFtcyggWyAuLi5uZXcgRm9ybURhdGEoIGFjdGl2ZUZvcm0gKSBdICksXG5cdFx0fSApXG5cdFx0XHQudGhlbiggKCByZXNwb25zZSApID0+IHtcblx0XHRcdFx0aWYgKCByZXNwb25zZS5vayApIHtcblx0XHRcdFx0XHR0aGlzLnNob3dNZXNzYWdlKFxuXHRcdFx0XHRcdFx0dGhpcy5zdWNjZXNzTWVzc2FnZSxcblx0XHRcdFx0XHRcdHRoaXMub3B0aW9uc1NhdmVTdWNjZXNzTWVzc2FnZVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0dGhpcy50YWJsZXNEYXRhID0gdGhpcy5nZXRUYWJsZXNEYXRhKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5zaG93TWVzc2FnZShcblx0XHRcdFx0XHRcdHRoaXMuZXJyb3JNZXNzYWdlLFxuXHRcdFx0XHRcdFx0dGhpcy5vcHRpb25zU2F2ZUVycm9yTWVzc2FnZVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0fSApXG5cdFx0XHQuZmluYWxseSggKCkgPT4ge1xuXHRcdFx0XHRhY3RpdmVGb3JtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIGFjdGl2ZUZvcm0gKTtcblx0XHRcdFx0dGhpcy5zZXRTdWJtaXRTdGF0dXMoKTtcblx0XHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGFibGUgZGF0YS5cblx0ICpcblx0ICogQHBhcmFtIHtFbGVtZW50fSB0YWJsZSBUYWJsZS5cblx0ICogQHJldHVybiB7e31bXX0gVGFibGUgZGF0YS5cblx0ICovXG5cdGdldFRhYmxlRGF0YSggdGFibGUgKSB7XG5cdFx0Y29uc3QgaW5wdXRzID0gWyAuLi50YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCAnaW5wdXQnICkgXTtcblxuXHRcdGNvbnN0IGRhdGEgPSB7fTtcblx0XHRpbnB1dHMuZm9yRWFjaCggKCBpbnB1dCApID0+IHtcblx0XHRcdGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFx0dGhpcy5PUFRJT05TX0ZPUk1fU0VMRUNUT1IgKyAnIGxhYmVsW2Zvcj1cIicgKyBpbnB1dC5pZCArICdcIl0nXG5cdFx0XHQpO1xuXG5cdFx0XHRkYXRhWyBsYWJlbC5pbm5lckhUTUwgXSA9IGlucHV0LnZhbHVlO1xuXHRcdH0gKTtcblxuXHRcdHJldHVybiBkYXRhO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBkYXRhIGZyb20gYWxsIHRhYmxlcy5cblx0ICpcblx0ICogQHJldHVybiB7e31bXVtdfSBEYXRhIGZyb20gYWxsIHRhYmxlcy5cblx0ICovXG5cdGdldFRhYmxlc0RhdGEoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VGFibGVzKCkubWFwKCAoIHRhYmxlICkgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VGFibGVEYXRhKCB0YWJsZSApO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWN0aXZlIHRhYmxlIGRhdGEuXG5cdCAqXG5cdCAqIEByZXR1cm4ge3t9W119IEFjdGl2ZSB0YWJsZSBkYXRhLlxuXHQgKi9cblx0Z2V0QWN0aXZlVGFibGVEYXRhKCkge1xuXHRcdHJldHVybiB0aGlzLmdldFRhYmxlRGF0YSggdGhpcy5nZXRBY3RpdmVUYWJsZSgpICk7XG5cdH1cblxuXHQvKipcblx0ICogQWRkIHdyYXBwZXIuXG5cdCAqL1xuXHRhZGRXcmFwcGVyKCkge1xuXHRcdHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICd1bCcgKTtcblx0XHR0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZCggJ25hdi10YWItd3JhcHBlcicgKTtcblx0XHR0aGlzLm9wdGlvbnNGb3JtLmluc2VydEJlZm9yZShcblx0XHRcdHRoaXMud3JhcHBlcixcblx0XHRcdHRoaXMub3B0aW9uc0Zvcm0uZmlyc3RDaGlsZFxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogQWRkIG1lc3NhZ2UgbGluZS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGlkIE1lc3NhZ2UgaWQuXG5cdCAqIEByZXR1cm4ge0hUTUxEaXZFbGVtZW50fSBNZXNzYWdlIGxpbmUuXG5cdCAqL1xuXHRhZGRNZXNzYWdlTGluZSggaWQgKSB7XG5cdFx0Y29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG5cdFx0bWVzc2FnZS5pZCA9IGlkO1xuXHRcdHRoaXMub3B0aW9uc0Zvcm0uaW5zZXJ0QmVmb3JlKCBtZXNzYWdlLCB0aGlzLm9wdGlvbnNGb3JtLmZpcnN0Q2hpbGQgKTtcblxuXHRcdHJldHVybiBtZXNzYWdlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFkZCBzdWNjZXNzIGFuZCBlcnJvciBtZXNzYWdlIGxpbmVzLlxuXHQgKi9cblx0YWRkTWVzc2FnZUxpbmVzKCkge1xuXHRcdHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSB0aGlzLmFkZE1lc3NhZ2VMaW5lKCAnY3RsLXN1Y2Nlc3MnICk7XG5cdFx0dGhpcy5lcnJvck1lc3NhZ2UgPSB0aGlzLmFkZE1lc3NhZ2VMaW5lKCAnY3RsLWVycm9yJyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1ha2UgdGFicyB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgZm9ybS5cblx0ICovXG5cdG1vdmVUYWJzKCkge1xuXHRcdGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmN0bC1zZXR0aW5ncy10YWJzJyApO1xuXHRcdGlmICggdGFicyApIHtcblx0XHRcdHRoaXMub3B0aW9uc0Zvcm0uaW5zZXJ0QmVmb3JlKCB0YWJzLCB0aGlzLm9wdGlvbnNGb3JtLmZpcnN0Q2hpbGQgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQWRkIGVkaXQgbGFiZWwgaW5wdXQuXG5cdCAqL1xuXHRhZGRFZGl0TGFiZWxJbnB1dCgpIHtcblx0XHR0aGlzLmVkaXRMYWJlbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2lucHV0JyApO1xuXHRcdHRoaXMuZWRpdExhYmVsSW5wdXQuaWQgPSB0aGlzLkVESVRfTEFCRUxfSUQ7XG5cdFx0dGhpcy5lZGl0TGFiZWxJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIHRoaXMuZWRpdExhYmVsSW5wdXQgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIaWRlIGVkaXQgbGFiZWwgaW5wdXQuXG5cdCAqL1xuXHRoaWRlRWRpdExhYmVsSW5wdXQoKSB7XG5cdFx0dGhpcy5lZGl0TGFiZWxJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdHRoaXMuZWRpdExhYmVsSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSggdGhpcy5FRElUX0xBQkVMX0VSUk9SX0NMQVNTICk7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggdGhpcy5lZGl0TGFiZWxJbnB1dCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBsYXN0IGNlbGwgaW4gYWN0aXZlIHRhYmxlLlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtFbGVtZW50fSBMYXN0IGNlbGwuXG5cdCAqL1xuXHRnZXRMYXN0Q2VsbCgpIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdHRoaXMuT1BUSU9OU19GT1JNX1NFTEVDVE9SICtcblx0XHRcdFx0JyAuJyArXG5cdFx0XHRcdHRoaXMuQUNUSVZFX1RBQkxFX0NMQVNTICtcblx0XHRcdFx0JyAuJyArXG5cdFx0XHRcdHRoaXMuUExVU19DTEFTU1xuXHRcdCkucHJldmlvdXNFbGVtZW50U2libGluZztcblx0fVxuXG5cdC8qKlxuXHQgKiBBZGQgbmV3IGNlbGwgdG8gdGhlIGFjdGl2ZSB0YWJsZS5cblx0ICovXG5cdGFkZENlbGwoKSB7XG5cdFx0bGV0IGxhc3RDZWxsID0gdGhpcy5nZXRMYXN0Q2VsbCgpO1xuXHRcdGxhc3RDZWxsLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0bGFzdENlbGwuY2xvbmVOb2RlKCB0cnVlICksXG5cdFx0XHRsYXN0Q2VsbC5uZXh0RWxlbWVudFNpYmxpbmdcblx0XHQpO1xuXG5cdFx0bGFzdENlbGwgPSB0aGlzLmdldExhc3RDZWxsKCk7XG5cdFx0Y29uc3QgbGFiZWwgPSBsYXN0Q2VsbC5xdWVyeVNlbGVjdG9yKCAnbGFiZWwnICk7XG5cdFx0Y29uc3QgaW5wdXQgPSBsYXN0Q2VsbC5xdWVyeVNlbGVjdG9yKCAnaW5wdXQnICk7XG5cblx0XHRjb25zdCBpZEFyciA9IGlucHV0LmlkLnNwbGl0KCAnLScgKTtcblx0XHRjb25zdCBuZXdJZCA9IGlkQXJyWyAwIF0gKyAnLScgKyAoIHBhcnNlSW50KCBpZEFyclsgMSBdICkgKyAxICk7XG5cblx0XHRsYWJlbC5odG1sRm9yID0gbmV3SWQ7XG5cdFx0bGFiZWwuaW5uZXJIVE1MID0gJyc7XG5cblx0XHRpbnB1dC5pZCA9IG5ld0lkO1xuXHRcdGlucHV0LnZhbHVlID0gJyc7XG5cdFx0aW5wdXQuc2V0QXR0cmlidXRlKCAndmFsdWUnLCAnJyApO1xuXHRcdHRoaXMucmVwbGFjZU5hbWUoIGlucHV0LCAnJyApO1xuXG5cdFx0dGhpcy5iaW5kRXZlbnRzKCk7XG5cblx0XHR0aGlzLmVkaXRMYWJlbCggbGFiZWwgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIaWRlIGNvbnZlcnNpb24gdGFibGVzIGV4Y2VwdCB0aGUgZmlyc3Qgb25lLlxuXHQgKiBDcmVhdGUgbmF2aWdhdGlvbiB0YWJzLlxuXHQgKi9cblx0aGlkZVRhYmxlcygpIHtcblx0XHRsZXQgY3VycmVudEluZGV4ID0gMDtcblxuXHRcdHRoaXMuZ2V0VGFibGVzKCkubWFwKCAoIHRhYmxlLCBpbmRleCApID0+IHtcblx0XHRcdHRhYmxlLmNsYXNzTGlzdC5hZGQoICdjdGwtdGFibGUnICk7XG5cblx0XHRcdGlmICggdGhpcy5DVVJSRU5UX1NUVUJfSUQgPT09IHRhYmxlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaWQgKSB7XG5cdFx0XHRcdGN1cnJlbnRJbmRleCA9IGluZGV4O1xuXHRcdFx0XHR0YWJsZS5jbGFzc0xpc3QuYWRkKCB0aGlzLkFDVElWRV9UQUJMRV9DTEFTUyApO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwbHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcblx0XHRcdHBsdXMuY2xhc3NMaXN0LmFkZCggdGhpcy5QTFVTX0NMQVNTICk7XG5cdFx0XHRwbHVzLmlubmVySFRNTCA9IHRoaXMucGx1c0J1dHRvbjtcblx0XHRcdHRhYmxlLnF1ZXJ5U2VsZWN0b3IoICd0ZCcgKS5hcHBlbmRDaGlsZCggcGx1cyApO1xuXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9ICk7XG5cblx0XHR0aGlzLmdldEhlYWRlcnMoKS5tYXAoICggaGVhZGVyLCBpbmRleCApID0+IHtcblx0XHRcdGhlYWRlci5jbGFzc0xpc3QuYWRkKCAnbmF2LXRhYicgKTtcblx0XHRcdGhlYWRlci5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG5cblx0XHRcdHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZCggaGVhZGVyICk7XG5cdFx0XHRpZiAoIGluZGV4ID09PSBjdXJyZW50SW5kZXggKSB7XG5cdFx0XHRcdGhlYWRlci5jbGFzc0xpc3QuYWRkKCB0aGlzLkNVUlJFTlRfTkFWX1RBQl9DTEFTUyApO1xuXHRcdFx0XHRoZWFkZXIuY2xhc3NMaXN0LmFkZCggdGhpcy5BQ1RJVkVfTkFWX1RBQl9DTEFTUyApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQmluZCBldmVudHMgdG8gbWV0aG9kcy5cblx0ICovXG5cdGJpbmRFdmVudHMoKSB7XG5cdFx0dGhpcy5nZXRIZWFkZXJzKCkubWFwKCAoIGhlYWRlciwgaSwgaGVhZGVycyApID0+IHtcblx0XHRcdGhlYWRlci5vbmNsaWNrID0gKCBldmVudCApID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0XHRjb25zdCBpbmRleCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4O1xuXHRcdFx0XHRjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuZ2V0QWN0aXZlSW5kZXgoKTtcblxuXHRcdFx0XHRpZiAoIGluZGV4ID09PSBhY3RpdmVJbmRleCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnNhdmVBY3RpdmVUYWJsZSgpO1xuXG5cdFx0XHRcdGhlYWRlcnMubWFwKCAoIGFIZWFkZXIgKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGFIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcblx0XHRcdFx0XHRcdHRoaXMuQUNUSVZFX05BVl9UQUJfQ0xBU1Ncblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHRcdGhlYWRlcnNbIGluZGV4IF0uY2xhc3NMaXN0LmFkZCggdGhpcy5BQ1RJVkVfTkFWX1RBQl9DTEFTUyApO1xuXG5cdFx0XHRcdGNvbnN0IHRhYmxlcyA9IHRoaXMuZ2V0VGFibGVzKCk7XG5cdFx0XHRcdHRhYmxlcy5tYXAoICggdGFibGUgKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHRhYmxlLmNsYXNzTGlzdC5yZW1vdmUoIHRoaXMuQUNUSVZFX1RBQkxFX0NMQVNTICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0dGFibGVzWyBpbmRleCBdLmNsYXNzTGlzdC5hZGQoIHRoaXMuQUNUSVZFX1RBQkxFX0NMQVNTICk7XG5cblx0XHRcdFx0dGhpcy5zZXRTdWJtaXRTdGF0dXMoKTtcblxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9ICk7XG5cblx0XHR0aGlzLmdldElucHV0cygpLm1hcCggKCBpbnB1dCApID0+IHtcblx0XHRcdGlucHV0Lm9uaW5wdXQgPSAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2V0U3VibWl0U3RhdHVzKCk7XG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9ICk7XG5cblx0XHR0aGlzLmdldExhYmVscygpLm1hcCggKCBsYWJlbCApID0+IHtcblx0XHRcdGxhYmVsLm9uY2xpY2sgPSAoIGV2ZW50ICkgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0aGlzLmVkaXRMYWJlbCggZXZlbnQudGFyZ2V0ICk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH07XG5cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMuZWRpdExhYmVsSW5wdXQub25ibHVyID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5zYXZlTGFiZWwoKTtcblx0XHR9O1xuXG5cdFx0dGhpcy5lZGl0TGFiZWxJbnB1dC5vbmtleXVwID0gKCBlICkgPT4ge1xuXHRcdFx0aWYgKCAnRXNjYXBlJyA9PT0gZS5rZXkgKSB7XG5cdFx0XHRcdHRoaXMuc2F2ZUxhYmVsKCB0cnVlICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggJ0VudGVyJyA9PT0gZS5rZXkgKSB7XG5cdFx0XHRcdHRoaXMuc2F2ZUxhYmVsKCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHRoaXMuZ2V0UGx1c0J1dHRvbnMoKS5tYXAoICggcGx1cyApID0+IHtcblx0XHRcdHBsdXMub25jbGljayA9ICggZXZlbnQgKSA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdHRoaXMuYWRkQ2VsbCggZXZlbnQudGFyZ2V0ICk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH07XG5cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMuc3VibWl0QnV0dG9uLm9uY2xpY2sgPSAoIGV2ZW50ICkgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMuc2F2ZUFjdGl2ZVRhYmxlKCk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBFZGl0IGxhYmVsLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGxhYmVsIExhYmVsIHRvIGVkaXQuXG5cdCAqL1xuXHRlZGl0TGFiZWwoIGxhYmVsICkge1xuXHRcdGxhYmVsLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoIHRoaXMuZWRpdExhYmVsSW5wdXQgKTtcblx0XHR0aGlzLmVkaXRMYWJlbElucHV0LnZhbHVlID0gbGFiZWwuaW5uZXJIVE1MO1xuXG5cdFx0dGhpcy5lZGl0TGFiZWxJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCB0aGlzLkVESVRfTEFCRUxfRVJST1JfQ0xBU1MgKTtcblx0XHR0aGlzLmVkaXRMYWJlbElucHV0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdHRoaXMuZWRpdExhYmVsSW5wdXQuZm9jdXMoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJcyBuZXcgdmFsdWUgb2YgZWRpdGVkIGxhYmVsIHVuaXF1ZSBpbiBhY3RpdmUgdGFibGUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuZXdWYWx1ZSBOZXcgVmFsdWUgZnJvbSBlZGl0ZWQgbGFiZWwuXG5cdCAqIEByZXR1cm4geyp9IElmIG5ldyB2YWx1ZSBvZiBlZGl0ZWQgbGFiZWwgaXMgdW5pcXVlIGluIGFjdGl2ZSB0YWJsZS5cblx0ICovXG5cdGlzVW5pcXVlTGFiZWwoIG5ld1ZhbHVlICkge1xuXHRcdHJldHVybiBbIC4uLnRoaXMuZ2V0QWN0aXZlVGFibGUoKS5xdWVyeVNlbGVjdG9yQWxsKCAnbGFiZWwnICkgXS5yZWR1Y2UoXG5cdFx0XHQoIGFjYywgbGFiZWwgKSA9PiB7XG5cdFx0XHRcdHJldHVybiBhY2MgJiYgbGFiZWwuaW5uZXJIVE1MICE9PSBuZXdWYWx1ZTtcblx0XHRcdH0sXG5cdFx0XHR0cnVlXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTYXZlIG1vZGlmaWVkIGxhYmVsLlxuXHQgKlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGNhbmNlbCBDYW5jZWwuXG5cdCAqL1xuXHRzYXZlTGFiZWwoIGNhbmNlbCA9IGZhbHNlICkge1xuXHRcdGlmICggJ25vbmUnID09PSB0aGlzLmVkaXRMYWJlbElucHV0LnN0eWxlLmRpc3BsYXkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgbmV3VmFsdWUgPSB0aGlzLmVkaXRMYWJlbElucHV0LnZhbHVlLnRyaW0oKTtcblxuXHRcdGlmICggJycgPT09IG5ld1ZhbHVlICkge1xuXHRcdFx0Y29uc3QgZWRpdGVkQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCB0aGlzLkVESVRfTEFCRUxfSUQgKVxuXHRcdFx0XHQucGFyZW50RWxlbWVudDtcblx0XHRcdHRoaXMuaGlkZUVkaXRMYWJlbElucHV0KCk7XG5cdFx0XHRlZGl0ZWRDZWxsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIGVkaXRlZENlbGwgKTtcblx0XHRcdHRoaXMuc2V0U3VibWl0U3RhdHVzKCk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBsYWJlbCA9IHRoaXMuZWRpdExhYmVsSW5wdXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCAnbGFiZWwnICk7XG5cdFx0aWYgKCBjYW5jZWwgfHwgbmV3VmFsdWUgPT09IGxhYmVsLmlubmVySFRNTCApIHtcblx0XHRcdHRoaXMuaGlkZUVkaXRMYWJlbElucHV0KCk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoICEgdGhpcy5pc1VuaXF1ZUxhYmVsKCBuZXdWYWx1ZSApICkge1xuXHRcdFx0dGhpcy5lZGl0TGFiZWxJbnB1dC5jbGFzc0xpc3QuYWRkKCB0aGlzLkVESVRfTEFCRUxfRVJST1JfQ0xBU1MgKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlucHV0ID0gdGhpcy5lZGl0TGFiZWxJbnB1dC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoICdpbnB1dCcgKTtcblxuXHRcdHRoaXMuaGlkZUVkaXRMYWJlbElucHV0KCk7XG5cblx0XHRsYWJlbC5pbm5lckhUTUwgPSBuZXdWYWx1ZTtcblx0XHR0aGlzLnJlcGxhY2VOYW1lKCBpbnB1dCwgbmV3VmFsdWUgKTtcblxuXHRcdHRoaXMuc2V0U3VibWl0U3RhdHVzKCk7XG5cdH1cblxuXHQvKipcblx0ICogUmVwbGFjZSBpbnB1dCBuYW1lIGFjY29yZGluZyB0byB0aGUgbmV3IGxhYmVsIHZhbHVlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGlucHV0IElucHV0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuZXdWYWx1ZSBOZXcgbGFiZWwgdmFsdWVcblx0ICovXG5cdHJlcGxhY2VOYW1lKCBpbnB1dCwgbmV3VmFsdWUgKSB7XG5cdFx0Ly8gbm9pbnNwZWN0aW9uIEpTVW5yZXNvbHZlZFZhcmlhYmxlXG5cdFx0aW5wdXQubmFtZSA9IGlucHV0Lm5hbWUucmVwbGFjZShcblx0XHRcdC8oLitcXFsuK10pXFxbLipdL2csXG5cdFx0XHQnJDFbJyArIG5ld1ZhbHVlICsgJ10nXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDbGVhciBtZXNzYWdlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxEaXZFbGVtZW50fSBtZXNzYWdlIE1lc3NhZ2UuXG5cdCAqL1xuXHRjbGVhck1lc3NhZ2UoIG1lc3NhZ2UgKSB7XG5cdFx0bWVzc2FnZS5pbm5lckhUTUwgPSAnJztcblx0XHRtZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoICdhY3RpdmUnICk7XG5cdH1cblxuXHQvKipcblx0ICogQ2xlYXIgbWVzc2FnZXMuXG5cdCAqL1xuXHRjbGVhck1lc3NhZ2VzKCkge1xuXHRcdHRoaXMuY2xlYXJNZXNzYWdlKCB0aGlzLnN1Y2Nlc3NNZXNzYWdlICk7XG5cdFx0dGhpcy5jbGVhck1lc3NhZ2UoIHRoaXMuZXJyb3JNZXNzYWdlICk7XG5cdFx0Y2xlYXJUaW1lb3V0KCB0aGlzLm1zZ1RpbWVyICk7XG5cdH1cblxuXHQvKipcblx0ICogU2hvdyBtZXNzYWdlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxEaXZFbGVtZW50fSBlbCBFbGVtZW50LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBNZXNzYWdlLlxuXHQgKi9cblx0c2hvd01lc3NhZ2UoIGVsLCBtZXNzYWdlICkge1xuXHRcdGVsLmlubmVySFRNTCA9IG1lc3NhZ2U7XG5cdFx0ZWwuY2xhc3NMaXN0LmFkZCggJ2FjdGl2ZScgKTtcblxuXHRcdHRoaXMubXNnVGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XG5cdFx0XHR0aGlzLmNsZWFyTWVzc2FnZXMoKTtcblx0XHR9LCA1MDAwICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
