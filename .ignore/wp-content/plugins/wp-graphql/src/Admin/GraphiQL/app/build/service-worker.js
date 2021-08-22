'use strict'
var precacheConfig = [
    ['/index.html', '4e642a765eddf7c917daf2859e1eb6b6'],
    ['/static/css/main.aafb6422.css', '31bb002b1eb5fb77cd3334ded1e7a5e0'],
    ['/static/js/main.b7d08b5b.js', '4eb7445e437af673eab91e94cb74eea9'],
    ['/static/media/GraphQLLanguageService.js.5ab204b9.flow', '5ab204b9b95c06640dbefae9a65b1db2'],
    ['/static/media/autocompleteUtils.js.4ce7ba19.flow', '4ce7ba191f7ebee4426768f246b2f0e0'],
    [
      '/static/media/getAutocompleteSuggestions.js.7f98f032.flow',
      '7f98f032085704c8943ec2d1925c7c84',
    ],
    ['/static/media/getDefinition.js.4dbec62f.flow', '4dbec62f1d8e8417afb9cbd19f1268c3'],
    ['/static/media/getDiagnostics.js.65b0979a.flow', '65b0979ac23feca49e4411883fd8eaab'],
    ['/static/media/getHoverInformation.js.d9411837.flow', 'd94118379d362fc161aa1246bcc14d43'],
    ['/static/media/getOutline.js.c04e3998.flow', 'c04e3998712b37a96f0bfd283fa06b52'],
    ['/static/media/index.js.02c24280.flow', '02c24280c5e4a7eb3c6cfcb079a8f1e3'],
  ],
  cacheName =
    'sw-precache-v3-sw-precache-webpack-plugin-' +
    (self.registration ? self.registration.scope : ''),
  ignoreUrlParametersMatching = [/^utm_/],
  addDirectoryIndex = function (e, t) {
    var n = new URL(e)
    return '/' === n.pathname.slice(-1) && (n.pathname += t), n.toString()
  },
  cleanResponse = function (t) {
    return t.redirected
      ? ('body' in t ? Promise.resolve(t.body) : t.blob()).then(function (e) {
          return new Response(e, { headers: t.headers, status: t.status, statusText: t.statusText })
        })
      : Promise.resolve(t)
  },
  createCacheKey = function (e, t, n, a) {
    var r = new URL(e)
    return (
      (a && r.pathname.match(a)) ||
        (r.search += (r.search ? '&' : '') + encodeURIComponent(t) + '=' + encodeURIComponent(n)),
      r.toString()
    )
  },
  isPathWhitelisted = function (e, t) {
    if (0 === e.length) return !0
    var n = new URL(t).pathname
    return e.some(function (e) {
      return n.match(e)
    })
  },
  stripIgnoredUrlParameters = function (e, n) {
    var t = new URL(e)
    return (
      (t.hash = ''),
      (t.search = t.search
        .slice(1)
        .split('&')
        .map(function (e) {
          return e.split('=')
        })
        .filter(function (t) {
          return n.every(function (e) {
            return !e.test(t[0])
          })
        })
        .map(function (e) {
          return e.join('=')
        })
        .join('&')),
      t.toString()
    )
  },
  hashParamName = '_sw-precache',
  urlsToCacheKeys = new Map(
    precacheConfig.map(function (e) {
      var t = e[0],
        n = e[1],
        a = new URL(t, self.location),
        r = createCacheKey(a, hashParamName, n, /\.\w{8}\./)
      return [a.toString(), r]
    })
  )
function setOfCachedUrls(e) {
  return e
    .keys()
    .then(function (e) {
      return e.map(function (e) {
        return e.url
      })
    })
    .then(function (e) {
      return new Set(e)
    })
}
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches
      .open(cacheName)
      .then(function (a) {
        return setOfCachedUrls(a).then(function (n) {
          return Promise.all(
            Array.from(urlsToCacheKeys.values()).map(function (t) {
              if (!n.has(t)) {
                var e = new Request(t, { credentials: 'same-origin' })
                return fetch(e).then(function (e) {
                  if (!e.ok)
                    throw new Error(
                      'Request for ' + t + ' returned a response with status ' + e.status
                    )
                  return cleanResponse(e).then(function (e) {
                    return a.put(t, e)
                  })
                })
              }
            })
          )
        })
      })
      .then(function () {
        return self.skipWaiting()
      })
  )
}),
  self.addEventListener('activate', function (e) {
    var n = new Set(urlsToCacheKeys.values())
    e.waitUntil(
      caches
        .open(cacheName)
        .then(function (t) {
          return t.keys().then(function (e) {
            return Promise.all(
              e.map(function (e) {
                if (!n.has(e.url)) return t.delete(e)
              })
            )
          })
        })
        .then(function () {
          return self.clients.claim()
        })
    )
  }),
  self.addEventListener('fetch', function (t) {
    if ('GET' === t.request.method) {
      var e,
        n = stripIgnoredUrlParameters(t.request.url, ignoreUrlParametersMatching),
        a = 'index.html'
      ;(e = urlsToCacheKeys.has(n)) || ((n = addDirectoryIndex(n, a)), (e = urlsToCacheKeys.has(n)))
      var r = '/index.html'
      !e &&
        'navigate' === t.request.mode &&
        isPathWhitelisted(['^(?!\\/__).*'], t.request.url) &&
        ((n = new URL(r, self.location).toString()), (e = urlsToCacheKeys.has(n))),
        e &&
          t.respondWith(
            caches
              .open(cacheName)
              .then(function (e) {
                return e.match(urlsToCacheKeys.get(n)).then(function (e) {
                  if (e) return e
                  throw Error('The cached response that was expected is missing.')
                })
              })
              .catch(function (e) {
                return (
                  console.warn(
                    'Couldn\'t serve response for "%s" from cache: %O',
                    t.request.url,
                    e
                  ),
                  fetch(t.request)
                )
              })
          )
    }
  })
