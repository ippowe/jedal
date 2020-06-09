/**
 * Kakao Javascript SDK for Kakao Open Platform Service - v1.39.0
 *
 * Copyright 2017 Kakao Corp.
 *
 *
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 *
 * OSS Notice | KakaoSDK-Javascript
 *
 * This application is Copyright © Kakao Corp. All rights reserved.
 * The following sets forth attribution notices for third party software that may be contained in this application.
 * If you have any questions or concerns, please contact us at opensource@kakaocorp.com
 *
 *
 *  crypto-js
 *
 * https://github.com/brix/crypto-js
 *
 * Copyright 2009-2013 Jeff Mott
 * Copyright 2013-2016 Evan Vosberg
 *
 * MIT License
 *
 *
 *  easyXDM
 *
 * https://github.com/oyvindkinsey/easyXDM/
 *
 * Copyright 2009-2011 Øyvind Sean Kinsey, oyvind@kinsey.no
 *
 * MIT License
 *
 *
 *  ES6-Promise
 *
 * https://github.com/stefanpenner/es6-promise
 *
 * Copyright 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors
 *
 * MIT License
 *
 *
 *  Underscore
 *
 * https://github.com/jashkenas/underscore
 *
 * Copyright 2009-2017 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 *
 * MIT License
 *
 *
 *  Web2App Library
 *
 * https://github.com/kakao/web2app
 *
 * Copyright 2015 Kakao Corp. http://www.kakaocorp.com
 *
 * MIT License
 *
 *
 * ``````````
 * MIT License
 *
 * Copyright (c) <year> <copyright holders>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ``````````
 */
var _typeof =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
              return typeof e;
          }
        : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
          };
!(function (e) {
    if ('object' === ('undefined' == typeof exports ? 'undefined' : _typeof(exports)) && 'undefined' != typeof module)
        module.exports = e();
    else if ('function' == typeof define && define.amd) define([], e);
    else {
        ('undefined' != typeof window
            ? window
            : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
            ? self
            : this
        ).Kakao = e();
    }
})(function () {
    return (function d(o, a, s) {
        function c(t, e) {
            if (!a[t]) {
                if (!o[t]) {
                    var n = 'function' == typeof require && require;
                    if (!e && n) return n(t, !0);
                    if (u) return u(t, !0);
                    var r = new Error("Cannot find module '" + t + "'");
                    throw ((r.code = 'MODULE_NOT_FOUND'), r);
                }
                var i = (a[t] = { exports: {} });
                o[t][0].call(
                    i.exports,
                    function (e) {
                        return c(o[t][1][e] || e);
                    },
                    i,
                    i.exports,
                    d,
                    o,
                    a,
                    s,
                );
            }
            return a[t].exports;
        }
        for (var u = 'function' == typeof require && require, e = 0; e < s.length; e++) c(s[e]);
        return c;
    })(
        {
            1: [
                function (e, t, n) {
                    var r,
                        i,
                        o = (t.exports = {});
                    function a() {
                        throw new Error('setTimeout has not been defined');
                    }
                    function s() {
                        throw new Error('clearTimeout has not been defined');
                    }
                    function c(e) {
                        if (r === setTimeout) return setTimeout(e, 0);
                        if ((r === a || !r) && setTimeout) return (r = setTimeout), setTimeout(e, 0);
                        try {
                            return r(e, 0);
                        } catch (t) {
                            try {
                                return r.call(null, e, 0);
                            } catch (t) {
                                return r.call(this, e, 0);
                            }
                        }
                    }
                    !(function () {
                        try {
                            r = 'function' == typeof setTimeout ? setTimeout : a;
                        } catch (e) {
                            r = a;
                        }
                        try {
                            i = 'function' == typeof clearTimeout ? clearTimeout : s;
                        } catch (e) {
                            i = s;
                        }
                    })();
                    var u,
                        l = [],
                        d = !1,
                        p = -1;
                    function f() {
                        d && u && ((d = !1), u.length ? (l = u.concat(l)) : (p = -1), l.length && m());
                    }
                    function m() {
                        if (!d) {
                            var e = c(f);
                            d = !0;
                            for (var t = l.length; t; ) {
                                for (u = l, l = []; ++p < t; ) u && u[p].run();
                                (p = -1), (t = l.length);
                            }
                            (u = null),
                                (d = !1),
                                (function n(e) {
                                    if (i === clearTimeout) return clearTimeout(e);
                                    if ((i === s || !i) && clearTimeout) return (i = clearTimeout), clearTimeout(e);
                                    try {
                                        return i(e);
                                    } catch (t) {
                                        try {
                                            return i.call(null, e);
                                        } catch (t) {
                                            return i.call(this, e);
                                        }
                                    }
                                })(e);
                        }
                    }
                    function h(e, t) {
                        (this.fun = e), (this.array = t);
                    }
                    function g() {}
                    (o.nextTick = function (e) {
                        var t = new Array(arguments.length - 1);
                        if (1 < arguments.length) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        l.push(new h(e, t)), 1 !== l.length || d || c(m);
                    }),
                        (h.prototype.run = function () {
                            this.fun.apply(null, this.array);
                        }),
                        (o.title = 'browser'),
                        (o.browser = !0),
                        (o.env = {}),
                        (o.argv = []),
                        (o.version = ''),
                        (o.versions = {}),
                        (o.on = g),
                        (o.addListener = g),
                        (o.once = g),
                        (o.off = g),
                        (o.removeListener = g),
                        (o.removeAllListeners = g),
                        (o.emit = g),
                        (o.prependListener = g),
                        (o.prependOnceListener = g),
                        (o.listeners = function (e) {
                            return [];
                        }),
                        (o.binding = function (e) {
                            throw new Error('process.binding is not supported');
                        }),
                        (o.cwd = function () {
                            return '/';
                        }),
                        (o.chdir = function (e) {
                            throw new Error('process.chdir is not supported');
                        }),
                        (o.umask = function () {
                            return 0;
                        });
                },
                {},
            ],
            2: [
                function (c, e, u) {
                    (function (e, t) {
                        var r = c('process/browser.js').nextTick,
                            n = Function.prototype.apply,
                            i = Array.prototype.slice,
                            o = {},
                            a = 0;
                        function s(e, t) {
                            (this._id = e), (this._clearFn = t);
                        }
                        (u.setTimeout = function () {
                            return new s(n.call(setTimeout, window, arguments), clearTimeout);
                        }),
                            (u.setInterval = function () {
                                return new s(n.call(setInterval, window, arguments), clearInterval);
                            }),
                            (u.clearTimeout = u.clearInterval = function (e) {
                                e.close();
                            }),
                            (s.prototype.unref = s.prototype.ref = function () {}),
                            (s.prototype.close = function () {
                                this._clearFn.call(window, this._id);
                            }),
                            (u.enroll = function (e, t) {
                                clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
                            }),
                            (u.unenroll = function (e) {
                                clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
                            }),
                            (u._unrefActive = u.active = function (e) {
                                clearTimeout(e._idleTimeoutId);
                                var t = e._idleTimeout;
                                0 <= t &&
                                    (e._idleTimeoutId = setTimeout(function () {
                                        e._onTimeout && e._onTimeout();
                                    }, t));
                            }),
                            (u.setImmediate =
                                'function' == typeof e
                                    ? e
                                    : function (e) {
                                          var t = a++,
                                              n = !(arguments.length < 2) && i.call(arguments, 1);
                                          return (
                                              (o[t] = !0),
                                              r(function () {
                                                  o[t] && (n ? e.apply(null, n) : e.call(null), u.clearImmediate(t));
                                              }),
                                              t
                                          );
                                      }),
                            (u.clearImmediate =
                                'function' == typeof t
                                    ? t
                                    : function (e) {
                                          delete o[e];
                                      });
                    }.call(this, c('timers').setImmediate, c('timers').clearImmediate));
                },
                { 'process/browser.js': 1, timers: 2 },
            ],
            3: [
                function (r, e, t) {
                    e.exports = (function () {
                        var e = r('./auth.js');
                        function t() {
                            return 'Bearer ' + e.getAccessToken();
                        }
                        function n() {
                            return 'KakaoAK ' + e.getAppKey();
                        }
                        return { accessToken: t, appKey: n, tokenOrKey: e.getAccessToken() ? t : n };
                    })();
                },
                { './auth.js': 6 },
            ],
            4: [
                function (s, e, t) {
                    e.exports = (function () {
                        var n = {};
                        s('../vendor/es6-promise.js');
                        var r,
                            o = s('../vendor/easyXDM.js'),
                            c = s('./util.js'),
                            u = s('./common.js'),
                            l = s('./api.authType');
                        (n.request = function (a) {
                            var s = (a = u.processRules(a, d.request, 'API.request')).url;
                            return (
                                d.api[s].data && (a.data = u.processRules(a.data, d.api[s].data, 'API.request - ' + s)),
                                new Promise(function (n, i) {
                                    (function t() {
                                        var i = {};
                                        c.each(a.data, function (e, t) {
                                            i[t] = c.isString(e) ? e : JSON.stringify(e);
                                        });
                                        var o = {
                                                url: s,
                                                method: d.api[s].method,
                                                headers: {
                                                    KA: u.KAKAO_AGENT,
                                                    'Cache-Control': 'no-cache',
                                                    Pragma: 'no-cache',
                                                },
                                                data: i,
                                            },
                                            e = d.api[s].authType || l.accessToken;
                                        return (
                                            (o.headers.Authorization = e()),
                                            new Promise(function (r, t) {
                                                if (
                                                    (function n(e) {
                                                        return (
                                                            '/v1/api/story/upload/multi' === e ||
                                                            '/v2/api/talk/message/image/upload' === e
                                                        );
                                                    })(s) ||
                                                    a.data.file
                                                ) {
                                                    if (!a.files && !a.data.file)
                                                        throw new u.KakaoError(
                                                            "'files' parameter should be set for " + s,
                                                        );
                                                    (function e(r) {
                                                        return new Promise(function (t, n) {
                                                            var e = c.map(r, function (t) {
                                                                return u.serializeFile(t).then(function (e) {
                                                                    return { name: t.name, type: t.type, str: e };
                                                                });
                                                            });
                                                            Promise.all(e).then(
                                                                function (e) {
                                                                    t({ paramName: 'file', data: e });
                                                                },
                                                                function (e) {
                                                                    n(e);
                                                                },
                                                            );
                                                        });
                                                    })(a.files || a.data.file).then(
                                                        function (e) {
                                                            var t = [];
                                                            for (var n in i)
                                                                'file' !== n &&
                                                                    t.push(n + '=' + encodeURIComponent(i[n]));
                                                            0 < t.length && (o.url = o.url + '?' + t.join('&')),
                                                                (o.file = e),
                                                                r(o);
                                                        },
                                                        function (e) {
                                                            t(e);
                                                        },
                                                    );
                                                } else r(o);
                                            })
                                        );
                                    })().then(
                                        function (e) {
                                            (function t() {
                                                r ||
                                                    (r = u.guardCreateEasyXDM(function () {
                                                        return new o.Rpc(
                                                            { remote: u.URL.apiRemote },
                                                            { remote: { request: {} } },
                                                        );
                                                    }));
                                                return r;
                                            })().request(
                                                e,
                                                function (e) {
                                                    a.success(e), a.always(e), n(e);
                                                },
                                                function (e) {
                                                    var t = (function r(e) {
                                                        try {
                                                            u.logDebug(e);
                                                            var t = e.message;
                                                            return JSON.parse(t.responseText);
                                                        } catch (n) {
                                                            return { code: -777, msg: 'Unknown error' };
                                                        }
                                                    })(e);
                                                    a.fail(t), a.always(t), i(t);
                                                },
                                            );
                                        },
                                        function (e) {
                                            i(e);
                                        },
                                    );
                                })
                            );
                        }),
                            (n.createAPIAlias = function (t) {
                                return function (e) {
                                    return (e = e || {}), c.defaults(e, t), n.request(e);
                                };
                            });
                        var e = {
                                permission: c.isOneOf(['A', 'F', 'M']),
                                enable_share: c.isBoolean,
                                android_exec_param: c.isString,
                                ios_exec_param: c.isString,
                                android_market_param: c.isString,
                                ios_market_param: c.isString,
                            },
                            t = { secure_resource: c.isBoolean },
                            d = {
                                request: {
                                    required: {
                                        url: function (e) {
                                            return c.isOneOf(c.keys(d.api))(e);
                                        },
                                    },
                                    optional: {
                                        data: c.isObject,
                                        files: function (e) {
                                            return (
                                                c.passesOneOf([c.isArray, c.isFileList])(e) &&
                                                c.every(e, c.passesOneOf([c.isFile, c.isBlob]))
                                            );
                                        },
                                        file: c.isFile,
                                        success: c.isFunction,
                                        fail: c.isFunction,
                                        always: c.isFunction,
                                    },
                                    defaults: {
                                        data: {},
                                        success: c.emptyFunc,
                                        fail: c.emptyFunc,
                                        always: c.emptyFunc,
                                    },
                                },
                                api: {
                                    '/v1/user/signup': {
                                        method: 'post',
                                        data: { optional: { properties: c.isObject } },
                                    },
                                    '/v1/user/unlink': { method: 'post' },
                                    '/v2/user/me': {
                                        method: 'get',
                                        data: { optional: c.extend({ property_keys: c.isArray }, t) },
                                    },
                                    '/v1/user/logout': { method: 'post', data: {} },
                                    '/v1/user/update_profile': {
                                        method: 'post',
                                        data: { required: { properties: c.isObject } },
                                    },
                                    '/v1/api/talk/profile': { method: 'get', data: { optional: t } },
                                    '/v1/api/talk/memo/send': {
                                        method: 'post',
                                        data: {
                                            required: { template_id: c.passesOneOf([c.isNumber, c.isString]) },
                                            optional: { args: c.isString },
                                        },
                                    },
                                    '/v2/api/talk/memo/send': {
                                        method: 'post',
                                        data: { required: { template_id: c.isNumber }, optional: { args: c.isString } },
                                    },
                                    '/v2/api/talk/memo/scrap/send': {
                                        method: 'post',
                                        data: {
                                            required: { request_url: c.isString },
                                            optional: { template_id: c.isNumber, template_args: c.isObject },
                                        },
                                    },
                                    '/v2/api/talk/memo/default/send': {
                                        method: 'post',
                                        data: { required: { template_object: c.isObject } },
                                    },
                                    '/v1/api/story/profile': { method: 'get', data: { optional: t } },
                                    '/v1/api/story/isstoryuser': { method: 'get' },
                                    '/v1/api/story/mystory': { method: 'get', data: { required: { id: c.isString } } },
                                    '/v1/api/story/mystories': {
                                        method: 'get',
                                        data: { optional: { last_id: c.isString } },
                                    },
                                    '/v1/api/story/linkinfo': {
                                        method: 'get',
                                        data: { required: { url: c.isString } },
                                    },
                                    '/v1/api/story/post/note': {
                                        method: 'post',
                                        data: { required: { content: i }, optional: e },
                                    },
                                    '/v1/api/story/post/photo': {
                                        method: 'post',
                                        data: {
                                            required: {
                                                image_url_list: function a(e) {
                                                    return (
                                                        !!c.isArray(e) &&
                                                        c.every(e, function (e) {
                                                            if (!c.isString(e)) return !1;
                                                            if (c.isURL(e))
                                                                throw new u.KakaoError(
                                                                    "url in image_url_list should be a kage url, obtained from '/v1/api/story/upload/multi'.",
                                                                );
                                                            return !0;
                                                        })
                                                    );
                                                },
                                            },
                                            optional: c.extend({ content: i }, e),
                                        },
                                    },
                                    '/v1/api/story/post/link': {
                                        method: 'post',
                                        data: {
                                            required: { link_info: c.isObject },
                                            optional: c.extend({ content: i }, e),
                                        },
                                    },
                                    '/v1/api/story/upload/multi': { method: 'post', data: {} },
                                    '/v1/emoticon/my_items': { method: 'get', data: {}, authType: l.appKey },
                                    '/v1/emoticon/item_resources': {
                                        method: 'get',
                                        data: { required: { id: c.isString } },
                                        authType: l.appKey,
                                    },
                                    '/v1/api/story/delete/mystory': {
                                        method: 'delete',
                                        data: { required: { id: c.isString } },
                                    },
                                    '/v2/emoticon/items': { method: 'get', authType: l.tokenOrKey },
                                    '/v2/emoticon/item': {
                                        method: 'get',
                                        data: { required: { id: c.passesOneOf([c.isNumber, c.isString]) } },
                                        authType: l.tokenOrKey,
                                    },
                                    '/v2/emoticon/item_resources': { method: 'get', authType: l.tokenOrKey },
                                    '/v2/emoticon/item_resource': {
                                        method: 'get',
                                        data: { required: { id: c.passesOneOf([c.isNumber, c.isString]) } },
                                        authType: l.tokenOrKey,
                                    },
                                    '/v2/api/kakaolink/talk/template/validate': {
                                        method: 'get',
                                        data: {
                                            required: { link_ver: c.isString, template_id: c.isNumber },
                                            optional: { template_args: c.isObject },
                                        },
                                        authType: l.appKey,
                                    },
                                    '/v2/api/kakaolink/talk/template/scrap': {
                                        method: 'get',
                                        data: {
                                            required: { link_ver: c.isString, request_url: c.isString },
                                            optional: { template_id: c.isNumber, template_args: c.isObject },
                                        },
                                        authType: l.appKey,
                                    },
                                    '/v2/api/kakaolink/talk/template/default': {
                                        method: 'get',
                                        data: { required: { link_ver: c.isString, template_object: c.isObject } },
                                        authType: l.appKey,
                                    },
                                    '/v1/user/access_token_info': { method: 'get', data: {} },
                                    '/v2/api/talk/message/image/upload': {
                                        method: 'post',
                                        data: { required: { file: c.isObject } },
                                        authType: l.appKey,
                                    },
                                    '/v2/api/talk/message/image/delete': {
                                        method: 'delete',
                                        data: { required: { image_url: c.isString } },
                                        authType: l.appKey,
                                    },
                                    '/v2/api/talk/message/image/scrap': {
                                        method: 'post',
                                        data: { required: { image_url: c.isString } },
                                        authType: l.appKey,
                                    },
                                    '/v1/vision/face/detect': {
                                        method: 'post',
                                        data: {
                                            optional: {
                                                file: c.isObject,
                                                image_url: c.isString,
                                                threshold: c.isNumber,
                                            },
                                        },
                                        authType: l.appKey,
                                    },
                                    '/v1/vision/product/detect': {
                                        method: 'post',
                                        data: {
                                            optional: {
                                                file: c.isObject,
                                                image_url: c.isString,
                                                threshold: c.isNumber,
                                            },
                                        },
                                        authType: l.appKey,
                                    },
                                    '/v1/vision/thumbnail/crop': {
                                        method: 'post',
                                        data: {
                                            required: { width: c.isInteger, height: c.isInteger },
                                            optional: { file: c.isObject, image_url: c.isString },
                                        },
                                        authType: l.appKey,
                                    },
                                    '/v1/vision/thumbnail/detect': {
                                        method: 'post',
                                        data: {
                                            required: { width: c.isInteger, height: c.isInteger },
                                            optional: { file: c.isObject, image_url: c.isString },
                                        },
                                        authType: l.appKey,
                                    },
                                    '/v1/vision/multitag/generate': {
                                        method: 'post',
                                        data: { optional: { file: c.isObject, image_url: c.isString } },
                                        authType: l.appKey,
                                    },
                                    '/v1/vision/adult/detect': {
                                        method: 'post',
                                        data: { optional: { file: c.isObject, image_url: c.isString } },
                                        authType: l.appKey,
                                    },
                                    '/v1/vision/text/detect': {
                                        method: 'post',
                                        data: { optional: { file: c.isObject } },
                                        authType: l.appKey,
                                    },
                                    '/v1/vision/text/recognize': {
                                        method: 'post',
                                        data: {
                                            optional: {
                                                file: c.isObject,
                                                boxes: c.passesOneOf([c.isString, c.isArray]),
                                            },
                                        },
                                        authType: l.appKey,
                                    },
                                    '/v1/translation/translate': {
                                        method: 'post',
                                        data: {
                                            required: {
                                                query: c.isString,
                                                src_lang: c.isString,
                                                target_lang: c.isString,
                                            },
                                        },
                                        authType: l.appKey,
                                    },
                                    '/v1/friends': {
                                        method: 'get',
                                        data: {
                                            optional: c.extend(
                                                {
                                                    offset: c.isNumber,
                                                    limit: c.isNumber,
                                                    order: c.isString,
                                                    friend_order: c.isString,
                                                },
                                                t,
                                            ),
                                        },
                                    },
                                    '/v1/user/service/terms': { method: 'get' },
                                    '/v1/api/talk/plusfriends': {
                                        method: 'get',
                                        data: { optional: c.extend({ plus_friend_public_ids: c.isArray }) },
                                    },
                                    '/v1/user/shipping_address': {
                                        method: 'get',
                                        data: {
                                            optional: c.extend({
                                                address_id: c.isNumber,
                                                from_updated_at: c.isNumber,
                                                page_size: c.isNumber,
                                            }),
                                        },
                                    },
                                    '/v1/api/talk/friends': {
                                        method: 'get',
                                        data: {
                                            optional: c.extend(
                                                { offset: c.isNumber, limit: c.isNumber, order: c.isString },
                                                t,
                                            ),
                                        },
                                    },
                                    '/v1/api/talk/friends/message/send': {
                                        method: 'post',
                                        data: {
                                            required: {
                                                template_id: c.isNumber,
                                                receiver_uuids: c.isArray,
                                                receiver_id_type: c.isString,
                                            },
                                            optional: { template_args: c.isObject },
                                            defaults: function () {
                                                return { receiver_id_type: 'uuid' };
                                            },
                                        },
                                    },
                                    '/v1/api/talk/friends/message/scrap/send': {
                                        method: 'post',
                                        data: {
                                            required: {
                                                request_url: c.isString,
                                                receiver_uuids: c.isArray,
                                                receiver_id_type: c.isString,
                                            },
                                            optional: { template_id: c.isNumber, template_args: c.isObject },
                                            defaults: function () {
                                                return { receiver_id_type: 'uuid' };
                                            },
                                        },
                                    },
                                    '/v1/api/talk/friends/message/default/send': {
                                        method: 'post',
                                        data: {
                                            required: {
                                                template_object: c.isObject,
                                                receiver_uuids: c.isArray,
                                                receiver_id_type: c.isString,
                                            },
                                            defaults: function () {
                                                return { receiver_id_type: 'uuid' };
                                            },
                                        },
                                    },
                                    '/v1/api/talk/wishlist/add': {
                                        method: 'post',
                                        data: {
                                            required: {
                                                item_id: c.isNumber,
                                                item_name: c.isString,
                                                item_url: c.isString,
                                                price: c.isNumber,
                                                image_url: c.isString,
                                            },
                                            optional: {
                                                store_key: c.isString,
                                                discount_price: c.isNumber,
                                                discount_rate: c.isNumber,
                                                image_width: c.isNumber,
                                                image_height: c.isNumber,
                                                oneclick_plugin_id: c.isString,
                                                oneclick_id: c.isString,
                                                option_plugin_id: c.isString,
                                                product_id: c.isString,
                                            },
                                        },
                                    },
                                },
                            };
                        function i(e) {
                            if (!c.isString(e)) return !1;
                            if (0 === e.length || 2048 < e.length)
                                throw new u.KakaoError('content length should be between 0 and 2048');
                            return !0;
                        }
                        return (
                            (n.cleanup = function () {
                                r && (r.destroy(), (r = null));
                            }),
                            n
                        );
                    })();
                },
                {
                    '../vendor/easyXDM.js': 28,
                    '../vendor/es6-promise.js': 29,
                    './api.authType': 3,
                    './common.js': 11,
                    './util.js': 24,
                },
            ],
            5: [
                function (e, t, n) {
                    var r;
                    t.exports =
                        ((r = e('./common.js')),
                        {
                            getTranId: function () {
                                return (
                                    Math.random().toString(36).slice(2) +
                                    r.RUNTIME.appKey +
                                    new Date().getTime().toString(36)
                                ).slice(0, 60);
                            },
                            checkAuthorize: function (e, t) {
                                var n = new XMLHttpRequest();
                                if ('undefined' != typeof n.withCredentials)
                                    n.open('GET', e),
                                        n.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
                                        (n.onload = function () {
                                            t(n);
                                        }),
                                        n.send();
                                else {
                                    var r = new XDomainRequest();
                                    r.open('get', e),
                                        (r.onload = function () {
                                            var e = {
                                                status: r.responseText ? 200 : 'error',
                                                response: r.responseText,
                                            };
                                            t(e);
                                        }),
                                        setTimeout(function () {
                                            r.send();
                                        }, 0);
                                }
                            },
                            getToken: function (e, t, n) {
                                var r = new XMLHttpRequest();
                                if ('undefined' != typeof r.withCredentials)
                                    r.open('POST', e),
                                        r.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
                                        (r.onreadystatechange = function () {
                                            this.readyState === XMLHttpRequest.DONE && 200 === this.status && n(r);
                                        }),
                                        r.send(t);
                                else {
                                    var i = new XDomainRequest();
                                    i.open('post', e),
                                        (i.onload = function () {
                                            var e = {
                                                status: i.responseText ? 200 : 'error',
                                                response: i.responseText,
                                            };
                                            n(e);
                                        }),
                                        setTimeout(function () {
                                            i.send(t);
                                        }, 0);
                                }
                            },
                        });
                },
                { './common.js': 11 },
            ],
            6: [
                function (M, e, t) {
                    e.exports = (function () {
                        var r = {},
                            i = M('../vendor/easyXDM.js'),
                            o = M('../vendor/CryptoJS.js'),
                            g = M('./util.js'),
                            v = M('./common.js'),
                            y = M('./auth.common.js'),
                            a = M('./auth.withTalk.js'),
                            k = M('./auth.withTalk.poller.js'),
                            b = M('./common/everntObserver'),
                            s = M('./webviewchecker.js')(),
                            c = [],
                            w = '_blank';
                        function _() {
                            return (
                                'width=480, height=700, scrollbars=yes, resizable=1, left=' +
                                (screen.width / 2 -
                                    240 +
                                    (function e() {
                                        return window.screenLeft
                                            ? window.screenLeft
                                            : window.screenX
                                            ? window.screenX
                                            : 0;
                                    })()) +
                                ', top=' +
                                (screen.height / 2 -
                                    350 +
                                    (function t() {
                                        return window.screenTop
                                            ? window.screenTop
                                            : window.screenY
                                            ? window.screenY
                                            : 0;
                                    })())
                            );
                        }
                        r.createLoginButton = function (r) {
                            r = v.processRules(r, U.createLoginButton, 'Auth.createLoginButton');
                            var e = g.getElement(r.container);
                            if (!e)
                                throw new v.KakaoError(
                                    'container is required for Kakao login button: pass in element or id',
                                );
                            var t = 'medium' === r.size ? '02' : 'small' === r.size ? '03' : '01',
                                n =
                                    v.URL.authDomain +
                                    '/public/widget/login/' +
                                    r.lang +
                                    '/' +
                                    r.lang +
                                    '_' +
                                    t +
                                    '_medium.png',
                                i =
                                    v.URL.authDomain +
                                    '/public/widget/login/' +
                                    r.lang +
                                    '/' +
                                    r.lang +
                                    '_' +
                                    t +
                                    '_medium_press.png';
                            (e.innerHTML =
                                '<img \n        id="kakao-login-btn" \n        src=' +
                                n +
                                '\n        style="cursor: pointer"\n        onmouseover=this.src=\'' +
                                i +
                                "' \n        onmouseout=this.src='" +
                                n +
                                "' />"),
                                (e.onclick = function () {
                                    var e = g.getRandomString() + g.getRandomString();
                                    if (a.isSupport() && r.throughTalk) S(r, e);
                                    else if (s.isNewerAndroidKakaoTalkWebView())
                                        if (r.redirectUri) {
                                            var t = A(r);
                                            location.href = t;
                                        } else {
                                            var n = m(r, e, v.URL.talkLoginRedirectUri);
                                            S(r, e, n);
                                        }
                                    else if (r.redirectUri) {
                                        t = A(r);
                                        location.href = t;
                                    } else {
                                        var t = T(r, e);
                                        (v.UA.browser.msie && parseInt(v.UA.browser.version.major) <= 9) || O(r, e),
                                            v.windowOpen(t, w, _());
                                    }
                                    b.dispatch('LOGIN_START');
                                });
                        };
                        var e,
                            u,
                            l,
                            d,
                            p,
                            f,
                            t = {};
                        function m(t, n, r) {
                            return (function i() {
                                var e = g.extend(
                                    {
                                        redirect_uri: r,
                                        response_type: 'code',
                                        state: n,
                                        ka: v.KAKAO_AGENT,
                                        origin: window.location.origin,
                                    },
                                    F(t),
                                    C(t),
                                );
                                return v.URL.authorize + '?' + g.buildQueryString(e);
                            })();
                        }
                        function h() {
                            l && l.close && l.close();
                        }
                        function S(t, e, n) {
                            if (
                                (u ||
                                    ((u = I({}, function (e) {
                                        'error' != e.status ||
                                            ('500' != e.error_code && '600' != e.error_code) ||
                                            (k.stop(),
                                            L(
                                                {
                                                    error: e.error_description,
                                                    error_description: e.error_description,
                                                    error_code: e.error_code,
                                                    status: e.status,
                                                },
                                                t,
                                            ));
                                        if (e.status)
                                            if ('ok' == e.status) {
                                                if ((k.stop(), d === e.code)) return;
                                                (d = e.code),
                                                    u.getAccessToken(
                                                        e.code,
                                                        v.RUNTIME.appKey,
                                                        v.UA.os.ios && !n
                                                            ? v.URL.redirectUri
                                                            : v.URL.talkLoginRedirectUri,
                                                        t.approvalType,
                                                    ),
                                                    h();
                                            } else 'about:blank' == l.location.href && v.UA.os.ios && h();
                                        else L(e, t);
                                    })),
                                    c.push(function () {
                                        u.destroy(), (u = null);
                                    })),
                                n)
                            )
                                t.redirectUri ? (location.href = n) : v.windowOpen(n, w, _());
                            else {
                                var r;
                                r = t.redirectUri
                                    ? A(t)
                                    : T(t, e, v.UA.os.ios ? v.URL.redirectUri : v.URL.talkLoginRedirectUri);
                                var i = g.extend(F(t), C(t));
                                setTimeout(function () {
                                    l = a.login(e, r, i, t.redirectUri);
                                }, 500);
                            }
                            k.start(
                                function () {
                                    e && u.getCode(e, v.RUNTIME.appKey);
                                },
                                function () {
                                    L(
                                        {
                                            error: 'timeout',
                                            description: 'Account login timed out. Please log in again.',
                                            error_description: 'Account login timed out. Please log in again.',
                                        },
                                        t,
                                    ),
                                        t.redirectUri ? (location.href = r) : v.windowOpen(r, w, _());
                                },
                            );
                        }
                        function A(t) {
                            return (function n() {
                                var e = g.extend(
                                    {
                                        redirect_uri: t.redirectUri,
                                        response_type: 'code',
                                        ka: v.KAKAO_AGENT,
                                        origin: window.location.origin,
                                    },
                                    F(t),
                                    C(t),
                                );
                                return v.URL.authorize + '?' + g.buildQueryString(e);
                            })();
                        }
                        function T(n, r, i) {
                            return (
                                p ||
                                    ((p = I({}, function (e) {
                                        k.stop(), L(e, j(e, t));
                                    })),
                                    c.push(function () {
                                        p.destroy(), (p = null);
                                    })),
                                (t[r] = n),
                                (function o() {
                                    var e;
                                    e = n.redirectUri ? n.redirectUri : i || 'kakaojs';
                                    var t = g.extend(
                                        {
                                            redirect_uri: e,
                                            response_type: 'code',
                                            state: r,
                                            proxy: 'easyXDM_Kakao_' + p.channel + '_provider',
                                            ka: v.KAKAO_AGENT,
                                            origin: window.location.origin,
                                        },
                                        F(n),
                                        C(n),
                                    );
                                    return v.URL.authorize + '?' + g.buildQueryString(t);
                                })()
                            );
                        }
                        function O(r, e) {
                            g.addEvent(window, 'message', function i(e) {
                                if (/\.kakao\.com$/.test(e.origin) && e.data && 'string' == typeof e.data) {
                                    var t = e.data.split(' ');
                                    if ('postResponse' === t[1]) {
                                        var n = JSON.parse(decodeURIComponent(t[2]));
                                        L(n, r), g.removeEvent(window, 'message', i);
                                    }
                                }
                                c.push(function () {
                                    g.removeEvent(window, 'message', i);
                                });
                            });
                        }
                        (r.login = function (e) {
                            e = v.processRules(e, U.login, 'Auth.login');
                            var t = g.getRandomString() + g.getRandomString();
                            if (a.isSupport() && e.throughTalk) S(e, t);
                            else if (s.isNewerAndroidKakaoTalkWebView())
                                if (e.redirectUri) {
                                    var n = A(e);
                                    location.href = n;
                                } else {
                                    S(e, t, m(e, t, v.URL.talkLoginRedirectUri));
                                }
                            else if (e.redirectUri) {
                                n = A(e);
                                location.href = n;
                            } else {
                                var n = T(e, t);
                                (v.UA.browser.msie && parseInt(v.UA.browser.version.major) <= 9) || O(e, t),
                                    v.windowOpen(n, w, _());
                            }
                            b.dispatch('LOGIN_START');
                        }),
                            (r.authorize = function (r) {
                                var i;
                                if (
                                    (r = v.processRules(r, U.authorize, 'Auth.authorize')).autoLogin &&
                                    !/KAKAOTALK/i.test(v.UA.ua)
                                )
                                    return (
                                        (location.href =
                                            r.redirectUri +
                                            '?error=auto_login&error_description=NOT_SUPPORTED_BROWSER' +
                                            (r.state ? '&state=' + r.state : '')),
                                        !1
                                    );
                                var o =
                                        (function m() {
                                            return !((!v.UA.os.ios && !v.UA.os.android) || /KAKAOTALK/i.test(v.UA.ua));
                                        })() &&
                                        r.throughTalk &&
                                        !r.autoLogin,
                                    e = y.getTranId();
                                function t(e) {
                                    if (200 === e.status && e.response) {
                                        var t = JSON.parse(e.response);
                                        if ('ok' == t.status && t.code) {
                                            k.stop(), i && i.close && i.close();
                                            var n =
                                                r.redirectUri +
                                                '?code=' +
                                                t.code +
                                                (t.state ? '&state=' + t.state : '');
                                            location.href = n;
                                        } else
                                            'error' != t.status ||
                                                ('500' != t.error_code && '600' != t.error_code) ||
                                                (k.stop(),
                                                i && i.close && i.close(),
                                                (location.href =
                                                    r.redirectUri +
                                                    '?error=' +
                                                    t.error +
                                                    '&error_description=' +
                                                    t.error_description +
                                                    (t.state ? '&state=' + t.state : '')));
                                        !o && i && i.closed && k.stop();
                                    }
                                }
                                k.start(
                                    function () {
                                        e &&
                                            y.checkAuthorize(
                                                v.URL.authDomain +
                                                    '/apiweb/code.json?client_id=' +
                                                    v.RUNTIME.appKey +
                                                    '&auth_tran_id=' +
                                                    e,
                                                t,
                                            );
                                    },
                                    function () {
                                        location.href =
                                            r.redirectUri +
                                            '?error=timeout&error_description=LOGIN_TIMEOUT' +
                                            (r.state ? '&state=' + r.state : '');
                                    },
                                );
                                var n = g.extend(F(r), C(r), {
                                        redirect_uri: r.redirectUri,
                                        response_type: 'code',
                                        auth_tran_id: e,
                                    }),
                                    a = g.extend({}, n, { ka: v.KAKAO_AGENT, is_popup: r.isPopup }),
                                    s = v.URL.authorize + '?' + g.buildQueryString(a);
                                if (o) {
                                    var c = g.extend({}, n, { is_popup: !0 });
                                    if (v.UA.os.android) {
                                        var u = (function h(e, t) {
                                            var n = [
                                                'intent:#Intent',
                                                'action=com.kakao.talk.intent.action.CAPRI_LOGGED_IN_ACTIVITY',
                                                'launchFlags=0x08880000',
                                                'S.com.kakao.sdk.talk.appKey=' + v.RUNTIME.appKey,
                                                'S.com.kakao.sdk.talk.redirectUri=' + r.redirectUri,
                                                'S.com.kakao.sdk.talk.kaHeader=' + v.KAKAO_AGENT,
                                                'S.com.kakao.sdk.talk.extraparams=' +
                                                    encodeURIComponent(JSON.stringify(t)),
                                            ];
                                            return (
                                                r.state && n.push('S.com.kakao.sdk.talk.state=' + r.state),
                                                n.push('S.browser_fallback_url=' + encodeURIComponent(e), 'end;'),
                                                n.join(';')
                                            );
                                        })(s, c);
                                        r.isPopup ? (i = v.windowOpen(u, w, _())) : (location.href = u);
                                    } else {
                                        var l = encodeURIComponent(
                                                v.URL.authorize + '?' + g.buildQueryString(r.isPopup ? c : n),
                                            ),
                                            d = encodeURIComponent(
                                                v.URL.authorize +
                                                    '?' +
                                                    g.buildQueryString(c) +
                                                    '&ka=' +
                                                    encodeURIComponent(v.KAKAO_AGENT),
                                            ),
                                            p = v.URL.talkInappScheme + '?url=' + d,
                                            f = v.URL.universalKakaoLink + encodeURIComponent(p) + '&web=' + l;
                                        r.isPopup ? (i = v.windowOpen(f, w, _())) : (location.href = f);
                                    }
                                } else r.isPopup ? (i = v.windowOpen(s, w, _())) : (location.href = s);
                                b.dispatch('LOGIN_START');
                            }),
                            (r.autoLogin = function (e) {
                                if (
                                    ((e = v.processRules(e, U.autoLogin, 'Auth.autoLogin')),
                                    s.isIOSKakaoTalkWebView() || s.isAndroidKakaoTalkWebView())
                                ) {
                                    var t = g.getRandomString() + g.getRandomString();
                                    S(
                                        e,
                                        t,
                                        (function o(t, n, r) {
                                            return (function i() {
                                                var e = g.extend(
                                                    {
                                                        redirect_uri: r,
                                                        response_type: 'code',
                                                        state: n,
                                                        ka: v.KAKAO_AGENT,
                                                        origin: window.location.origin,
                                                        auto_login: 'true',
                                                    },
                                                    F(t),
                                                );
                                                return v.URL.authorize + '?' + g.buildQueryString(e);
                                            })();
                                        })(e, t, v.URL.talkLoginRedirectUri),
                                    );
                                } else {
                                    K(
                                        {
                                            error: 'auto_login',
                                            error_description:
                                                'Auto-login is only supported by KakaoTalk InAppBrowser.',
                                            error_code: '400',
                                            status: 'error',
                                        },
                                        e,
                                    );
                                }
                                b.dispatch('LOGIN_START');
                            }),
                            (r.issueAccessToken = function (t) {
                                (t = v.processRules(t, U.issueAccessToken, 'Auth.issueAccessToken')),
                                    e ||
                                        (e = I({}, function (e) {
                                            L(e, t);
                                        })),
                                    e.getAccessToken(t.code, v.RUNTIME.appKey, t.redirectUri);
                            }),
                            (r.getLoginUrl = function (t, n, r) {
                                return (function i() {
                                    var e = g.extend(
                                        {
                                            redirect_uri: 'JS-SDK',
                                            response_type: 'code',
                                            state: n,
                                            ka: v.KAKAO_AGENT,
                                            origin: window.location.origin,
                                        },
                                        F(t),
                                    );
                                    return r && (e.redirect_uri = r), v.URL.authorize + '?' + g.buildQueryString(e);
                                })();
                            });
                        var x = {};
                        r.selectStoryChannel = function (t) {
                            (t = v.processRules(t, U.selectStoryChannel, 'Auth.selectStoryChannel')),
                                f ||
                                    ((f = I({}, function (e) {
                                        K(e, j(e, x));
                                    })),
                                    c.push(function () {
                                        f.destroy(), (f = null);
                                    }));
                            var n = g.getRandomString();
                            (x[n] = t),
                                window.open(
                                    (function r() {
                                        var e = g.extend(
                                            {
                                                state: n,
                                                proxy: 'easyXDM_Kakao_' + f.channel + '_provider',
                                                token: t.extendedToken || '',
                                            },
                                            F(t),
                                        );
                                        return v.URL.storyChannel + '?' + g.buildQueryString(e);
                                    })(),
                                    'kakaostory_channel_select',
                                    _(),
                                );
                        };
                        var n = { success: g.emptyFunc, fail: g.emptyFunc, always: g.emptyFunc },
                            R = g.extend({ throughTalk: !0, persistAccessToken: !0, persistRefreshToken: !1 }, n),
                            E = {
                                success: g.isFunction,
                                fail: g.isFunction,
                                always: g.isFunction,
                                persistAccessToken: g.isBoolean,
                                persistRefreshToken: g.isBoolean,
                                approvalType: g.isOneOf(['project']),
                                scope: g.isString,
                                throughTalk: g.isBoolean,
                                plusFriendPublicId: g.isString,
                                channelPublicId: g.isString,
                                serviceTerms: g.isString,
                                redirectUri: g.isString,
                                state: g.isString,
                            },
                            U = {
                                createLoginButton: {
                                    required: { container: g.passesOneOf([g.isElement, g.isString]) },
                                    optional: g.extend(
                                        {
                                            lang: g.isOneOf(['en', 'kr']),
                                            size: g.isOneOf(['small', 'medium', 'large']),
                                        },
                                        E,
                                    ),
                                    defaults: g.extend({ lang: 'kr', size: 'medium' }, R),
                                },
                                login: { optional: E, defaults: R },
                                authorize: {
                                    required: { redirectUri: g.isString },
                                    optional: {
                                        approvalType: g.isOneOf(['project']),
                                        scope: g.isString,
                                        throughTalk: g.isBoolean,
                                        plusFriendPublicId: g.isString,
                                        channelPublicId: g.isString,
                                        serviceTerms: g.isString,
                                        isPopup: g.isBoolean,
                                        state: g.isString,
                                        autoLogin: g.isBoolean,
                                    },
                                    defaults: { throughTalk: !0, isPopup: !1 },
                                },
                                autoLogin: {
                                    optional: { success: g.isFunction, fail: g.isFunction, always: g.isFunction },
                                    defaults: n,
                                },
                                issueAccessToken: {
                                    required: { code: g.isString, redirectUri: g.isString },
                                    optional: { success: g.isFunction, fail: g.isFunction, always: g.isFunction },
                                    defaults: n,
                                },
                                selectStoryChannel: {
                                    optional: {
                                        extendedToken: g.isString,
                                        success: g.isFunction,
                                        fail: g.isFunction,
                                        always: g.isFunction,
                                    },
                                    defaults: n,
                                },
                            };
                        function I(t, n) {
                            return (
                                g.extend(t, { remote: v.URL.loginWidget, channel: g.getRandomString() }),
                                v.guardCreateEasyXDM(function () {
                                    var e = new i.Rpc(t, {
                                        local: {
                                            postResponse: n,
                                            getKakaoAgent: function () {
                                                return v.KAKAO_AGENT;
                                            },
                                        },
                                        remote: {
                                            getCode: {},
                                            getAccessToken: {},
                                            setClient: {},
                                            setStateToken: {},
                                            deleteAuthCookie: {},
                                        },
                                    });
                                    return (e.channel = t.channel), e;
                                })
                            );
                        }
                        function j(e, t) {
                            if (!g.has(t, e.stateToken)) throw new v.KakaoError('security error: #CST2');
                            var n = t[e.stateToken];
                            return delete t[e.stateToken], delete e.stateToken, n;
                        }
                        function L(e, t) {
                            e.error
                                ? (function n(e) {
                                      if ('access_denied' == e.error) return;
                                      r.setAccessToken(null);
                                  })(e)
                                : (r.setAccessToken(e.access_token, t.persistAccessToken), b.dispatch('LOGIN')),
                                K(e, t);
                        }
                        function K(e, t) {
                            v.logDebug(e), e.error ? t.fail(e) : t.success(e), t.always(e);
                        }
                        function F(e) {
                            var t = { client_id: v.RUNTIME.appKey };
                            return (
                                e.approvalType && (t.approval_type = e.approvalType),
                                e.scope && (t.scope = e.scope),
                                e.state && (t.state = e.state),
                                t
                            );
                        }
                        function C(e) {
                            var t = {};
                            return (
                                e.plusFriendPublicId !== undefined &&
                                    (t['extra.plus_friend_public_id'] = e.plusFriendPublicId),
                                e.channelPublicId !== undefined && (t.channel_public_id = e.channelPublicId),
                                e.serviceTerms !== undefined && (t['extra.service_terms'] = e.serviceTerms),
                                e.autoLogin !== undefined && (t.auto_login = e.autoLogin),
                                t
                            );
                        }
                        (r.logout = function (e) {
                            (e = e || g.emptyFunc),
                                v.validate(e, g.isFunction, 'Auth.logout'),
                                Kakao.API.request({
                                    url: '/v1/user/logout',
                                    always: function () {
                                        r.setAccessToken(null), b.dispatch('LOGOUT'), e(!0);
                                    },
                                });
                        }),
                            (r.loginForm = function (e) {
                                e = v.processRules(e, U.login, 'Auth.loginForm');
                                var t = g.getRandomString() + g.getRandomString();
                                if (e.redirectUri) {
                                    n = v.URL.loginForm + '?continue=' + encodeURIComponent(A(e));
                                    location.href = n;
                                } else {
                                    var n = v.URL.loginForm + '?continue=' + encodeURIComponent(T(e, t));
                                    v.windowOpen(n, w, _());
                                }
                            }),
                            (r.setAccessToken = function (e, t) {
                                null === (v.RUNTIME.accessToken = e) || !1 === t
                                    ? (function n(e) {
                                          g.localStorage.removeItem(e);
                                      })(B())
                                    : (function i(e, t) {
                                          var n = (function r(e, t) {
                                              return o.AES.encrypt(e, t).toString();
                                          })(t, v.RUNTIME.appKey);
                                          g.localStorage.setItem(e, n);
                                      })(B(), e);
                            }),
                            (r.setRefreshToken = function (e) {
                                console.log('unsupported operation: setRefreshToken()');
                            }),
                            (r.getAccessToken = function () {
                                return (
                                    v.RUNTIME.accessToken ||
                                        (v.RUNTIME.accessToken = (function r(e) {
                                            var t = g.localStorage.getItem(e);
                                            return t
                                                ? (function n(e, t) {
                                                      return o.AES.decrypt(e, t).toString(o.enc.Utf8);
                                                  })(t, v.RUNTIME.appKey)
                                                : null;
                                        })(B())),
                                    v.RUNTIME.accessToken
                                );
                            }),
                            (r.getRefreshToken = function () {
                                return console.log('unsupported operation: getRefreshToken()'), '';
                            });
                        var N = {};
                        function B() {
                            return (
                                N.accessTokenKey ||
                                    (N.accessTokenKey =
                                        'kakao_' +
                                        (function t(e) {
                                            return o.MD5(e).toString();
                                        })('kat' + v.RUNTIME.appKey)),
                                N.accessTokenKey
                            );
                        }
                        return (
                            (r.getAppKey = function () {
                                return v.RUNTIME.appKey;
                            }),
                            (r.getStatusInfo = function (t) {
                                v.validate(t, g.isFunction, 'Auth.getConnectionInfo'),
                                    r.getAccessToken()
                                        ? Kakao.API.request({
                                              url: '/v2/user/me',
                                              success: function (e) {
                                                  t({ status: 'connected', user: e });
                                              },
                                              fail: function () {
                                                  t({ status: 'not_connected' });
                                              },
                                          })
                                        : t({ status: 'not_connected' });
                            }),
                            (r.cleanup = function () {
                                g.each(c, function (e, t) {
                                    e();
                                }),
                                    (c.length = 0);
                            }),
                            r
                        );
                    })();
                },
                {
                    '../vendor/CryptoJS.js': 27,
                    '../vendor/easyXDM.js': 28,
                    './auth.common.js': 5,
                    './auth.withTalk.js': 7,
                    './auth.withTalk.poller.js': 8,
                    './common.js': 11,
                    './common/everntObserver': 13,
                    './util.js': 24,
                    './webviewchecker.js': 25,
                },
            ],
            7: [
                function (e, t, n) {
                    var l, d, p, f, m, h;
                    t.exports =
                        ((d = e('./common.js')),
                        (p = '_blank'),
                        (f = 'width=380, height=520, scrollbars=yes'),
                        (m = /Version\/4.0/i.test(d.UA.ua) || /; wv\)/i.test(d.UA.ua)),
                        (h = /naver\(inapp|fb_iab|daumapps|instagram|ebay/g.test(d.UA.ua)),
                        {
                            isSupport: function () {
                                if (d.UA.os.ios) {
                                    var e = /safari|FxiOS|CriOS/.test(d.UA.ua),
                                        t = !/KAKAOTALK/i.test(d.UA.ua);
                                    return e || t;
                                }
                                return (
                                    !!d.UA.os.android &&
                                    d.UA.browser.chrome &&
                                    !/opr\//i.test(d.UA.ua) &&
                                    30 <= d.UA.browser.version.major &&
                                    (!m || (m && h))
                                );
                            },
                            login: function (e, t, n, r) {
                                if (this.isSupport()) {
                                    if (d.UA.os.ios) {
                                        var i = (function a(e, t) {
                                            return (
                                                (t.state = e),
                                                [
                                                    d.URL.talkLoginScheme,
                                                    '?',
                                                    'client_id=' + d.RUNTIME.appKey,
                                                    '&',
                                                    'redirect_uri=' + d.URL.redirectUri,
                                                    '&',
                                                    'params=' + encodeURIComponent(JSON.stringify(t)),
                                                ].join('')
                                            );
                                        })(e, n);
                                        r
                                            ? (location.href =
                                                  d.URL.universalKakaoLink +
                                                  encodeURIComponent(i) +
                                                  '&web=' +
                                                  encodeURIComponent(t))
                                            : (l = d.windowOpen(
                                                  d.URL.universalKakaoLink +
                                                      encodeURIComponent(i) +
                                                      '&web=' +
                                                      encodeURIComponent(t),
                                                  p,
                                                  f,
                                              ));
                                    } else if (d.UA.os.android) {
                                        var o = (function s(e, t, n) {
                                            return [
                                                'intent:#Intent',
                                                'action=com.kakao.talk.intent.action.CAPRI_LOGGED_IN_ACTIVITY',
                                                'launchFlags=0x08880000',
                                                'S.com.kakao.sdk.talk.appKey=' + d.RUNTIME.appKey,
                                                'S.com.kakao.sdk.talk.redirectUri=' + d.URL.talkLoginRedirectUri,
                                                'S.com.kakao.sdk.talk.state=' + e,
                                                'S.com.kakao.sdk.talk.kaHeader=' + d.KAKAO_AGENT,
                                                'S.com.kakao.sdk.talk.extraparams=' +
                                                    encodeURIComponent(JSON.stringify(n)),
                                                'S.browser_fallback_url=' + encodeURIComponent(t),
                                                'end;',
                                            ].join(';');
                                        })(e, t, n);
                                        r
                                            ? (location.href = o)
                                            : (function c() {
                                                  return 40 < d.UA.browser.version.major;
                                              })() &&
                                              (!m || (m && h))
                                            ? (l = d.windowOpen(o, p, f))
                                            : (l = d.windowOpen('', p, f)) &&
                                              (l.addEventListener('unload', function u() {
                                                  setTimeout(function () {
                                                      l && l.location && (l.location.href = t);
                                                  }, 10);
                                              }),
                                              (l.location.href = o));
                                    }
                                    return l;
                                }
                            },
                            hasWebLoginWindow: function () {
                                try {
                                    return !(
                                        !l ||
                                        !l.location ||
                                        'about:blank' == l.location.href ||
                                        (d.UA.os.android && !l.location.href)
                                    );
                                } catch (e) {
                                    return !0;
                                }
                            },
                        });
                },
                { './common.js': 11 },
            ],
            8: [
                function (e, t, n) {
                    t.exports = (function () {
                        var n,
                            r = 0,
                            i = function i() {},
                            o = function o() {},
                            t = function t() {
                                return !1;
                            };
                        function a() {
                            t() ? s() : 600 < ++r ? (s(), i()) : o();
                        }
                        function s() {
                            clearInterval(n);
                        }
                        return {
                            start: function (e, t) {
                                (r = 0),
                                    'function' == typeof e && (o = e),
                                    'function' == typeof t && (i = t),
                                    n && s(),
                                    (n = setInterval(a, 1e3));
                            },
                            stop: function () {
                                s();
                            },
                            setStopCondition: function (e) {
                                'function' == typeof e && (t = e);
                            },
                        };
                    })();
                },
                {},
            ],
            9: [
                function (e, t, n) {
                    var r;
                    t.exports =
                        ((r = e('../vendor/userAgent.js')),
                        {
                            getOrigin: function () {
                                return (
                                    location.protocol +
                                    '//' +
                                    location.hostname +
                                    (location.port ? ':' + location.port : '')
                                );
                            },
                            getNavigator: function () {
                                return navigator;
                            },
                            getUA: function () {
                                return r();
                            },
                        });
                },
                { '../vendor/userAgent.js': 30 },
            ],
            10: [
                function (i, e, t) {
                    e.exports = (function () {
                        var e = {},
                            c = i('./util.js'),
                            u = i('./common.js'),
                            t = i('./browserProxy.js'),
                            l = 'channel_add_social_plugin',
                            d = 'channel_chat_social_plugin',
                            p = 'width=350, height=510',
                            n = '1.1',
                            f = [];
                        function m(e, t, n, r) {
                            var i = document.createElement('a'),
                                o = document.createElement('img');
                            return (
                                i.setAttribute('href', '#'),
                                o.setAttribute('src', t),
                                o.setAttribute('alt', n),
                                o.setAttribute('title', n),
                                r.supportMultipleDensities &&
                                    o.setAttribute(
                                        'srcset',
                                        [t.replace('.png', '_2X.png 2x'), t.replace('.png', '_3X.png 3x')].join(', '),
                                    ),
                                i.appendChild(o),
                                i
                            );
                        }
                        function h(e) {
                            var t = u.URL.plusFriend + '/' + e.channelPublicId + '/friend';
                            return u.RUNTIME.appKey && (t += '?' + r()), t;
                        }
                        function g(e) {
                            var t = u.URL.plusFriend + '/' + e.channelPublicId + '/chat';
                            return u.RUNTIME.appKey && (t += '?' + r()), t;
                        }
                        function r() {
                            if (!u.RUNTIME.appKey)
                                throw u.KakaoError('The app key does not exist. Please call Kakao.init function.');
                            var e = {
                                api_ver: n,
                                kakao_agent: u.KAKAO_AGENT,
                                app_key: u.RUNTIME.appKey,
                                referer: t.getOrigin() + location.pathname + location.search,
                            };
                            return c.buildQueryString(e);
                        }
                        (e.createAddChannelButton = function (e) {
                            e = u.processRules(e, v.createAddChannelButton, 'Channel.createAddChannelButton');
                            var t = c.getElement(e.container);
                            if (!t)
                                throw new u.KakaoError(
                                    'container is required for creating Channel.addChannel button: pass in element or id',
                                );
                            var n = h(e),
                                r = (function s(e) {
                                    var t = 'friendadd_' + e.size + '_yellow_rect';
                                    return u.URL.resPrefix + '/logos/channel/' + t + '.png';
                                })(e),
                                i = m(n, r, '카카오톡 채널 추가 버튼', e);
                            t.appendChild(i);
                            var o = function o(e) {
                                e.preventDefault ? e.preventDefault() : (e.returnValue = !1), u.windowOpen(n, l, p);
                            };
                            c.addEvent(i, 'click', o);
                            var a = function a() {
                                t.removeChild(i), c.removeEvent(i, 'click', o);
                            };
                            f.push(a);
                        }),
                            (e.addChannel = function (e) {
                                var t = h((e = u.processRules(e, v.addChannel, 'Channel.addChannel')));
                                u.windowOpen(t, l, p);
                            }),
                            (e.createChatButton = function (e) {
                                e = u.processRules(e, v.createChatButton, 'Channel.createChatButton');
                                var t = c.getElement(e.container);
                                if (!t)
                                    throw new u.KakaoError(
                                        'container is required for creating Channel.chat button: pass in element or id',
                                    );
                                var n = g(e),
                                    r = (function s(e) {
                                        var t = e.title + '_' + e.size + '_' + e.color + '_' + e.shape;
                                        return u.URL.resPrefix + '/logos/channel/' + t + '.png';
                                    })(e),
                                    i = m(n, r, '카카오톡 채널 1:1 채팅 버튼', e);
                                t.appendChild(i);
                                var o = function o(e) {
                                    e.preventDefault ? e.preventDefault() : (e.returnValue = !1), u.windowOpen(n, d, p);
                                };
                                c.addEvent(i, 'click', o);
                                var a = function a() {
                                    t.removeChild(i), c.removeEvent(i, 'click', o);
                                };
                                f.push(a);
                            }),
                            (e.chat = function (e) {
                                var t = g((e = u.processRules(e, v.chat, 'Channel.chat')));
                                u.windowOpen(t, d, p);
                            });
                        var v = {
                            createAddChannelButton: {
                                required: {
                                    container: c.passesOneOf([c.isElement, c.isString]),
                                    channelPublicId: c.isString,
                                },
                                optional: {
                                    size: c.isOneOf(['small', 'large']),
                                    supportMultipleDensities: c.isBoolean,
                                },
                                defaults: function (e) {
                                    var t = c.getElement(e.container);
                                    return t
                                        ? {
                                              channelPublicId: t.getAttribute('data-channel-public-id'),
                                              size: t.getAttribute('data-size') || 'small',
                                              supportMultipleDensities: !!t.getAttribute(
                                                  'data-support-multiple-densities',
                                              ),
                                          }
                                        : null;
                                },
                            },
                            addChannel: { required: { channelPublicId: c.isString } },
                            createChatButton: {
                                required: {
                                    container: c.passesOneOf([c.isElement, c.isString]),
                                    channelPublicId: c.isString,
                                },
                                optional: {
                                    color: c.isOneOf(['yellow', 'mono']),
                                    shape: c.isOneOf(['pc', 'mobile']),
                                    size: c.isOneOf(['small', 'large']),
                                    title: c.isOneOf(['consult', 'question']),
                                    supportMultipleDensities: c.isBoolean,
                                },
                                defaults: function (e) {
                                    var t = c.getElement(e.container);
                                    return t
                                        ? {
                                              channelPublicId: t.getAttribute('data-channel-public-id'),
                                              color: t.getAttribute('data-color') || 'yellow',
                                              shape: t.getAttribute('data-shape') || 'pc',
                                              size: t.getAttribute('data-size') || 'small',
                                              title: t.getAttribute('data-title') || 'consult',
                                              supportMultipleDensities: !!t.getAttribute(
                                                  'data-support-multiple-densities',
                                              ),
                                          }
                                        : null;
                                },
                            },
                            chat: { required: { channelPublicId: c.isString } },
                        };
                        return (
                            (e.cleanup = function () {
                                c.each(f, function (e) {
                                    e();
                                }),
                                    (f.length = 0);
                            }),
                            e
                        );
                    })();
                },
                { './browserProxy.js': 9, './common.js': 11, './util.js': 24 },
            ],
            11: [
                function (n, e, t) {
                    e.exports = (function () {
                        var c = {},
                            u = n('./util.js'),
                            e = n('./browserProxy.js'),
                            t = e.getOrigin();
                        (c.VERSION = '1.39.0'),
                            (c.KAKAO_AGENT =
                                'sdk/' +
                                c.VERSION +
                                ' os/javascript lang/' +
                                (e.getNavigator().userLanguage || e.getNavigator().language) +
                                ' device/' +
                                e.getNavigator().platform.replace(/ /g, '_') +
                                ' origin/' +
                                encodeURIComponent(t)),
                            (c.URL = {
                                authorize: 'https://kauth.kakao.com/oauth/authorize',
                                loginWidget: 'https://kauth.kakao.com/public/widget/login/kakaoLoginWidget.html',
                                apiRemote: 'https://kapi.kakao.com/cors/',
                                plusFriend: 'https://pf.kakao.com',
                                storyChannel: 'https://kauth.kakao.com/story/select_channel',
                                storyShare: 'https://story.kakao.com/s/share',
                                channelFollow: 'https://story.kakao.com/s/follow',
                                storyIcon: '//dev.kakao.com/sdk/js/resources/story/icon_small.png',
                                universalKakaoLink: 'https://talk-apps.kakao.com/scheme/',
                                talkLoginScheme: 'kakaokompassauth://authorize',
                                talkLoginRedirectUri: 'https://kapi.kakao.com/cors/afterlogin.html',
                                redirectUri: 'JS-SDK',
                                authDomain: 'https://kauth.kakao.com',
                                navi: 'kakaonavi-sdk://navigate',
                                naviShare: 'kakaonavi-sdk://sharePoi',
                                naviWeb: 'https://kakaonavi-wguide.kakao.com/openapi',
                                loginForm: 'https://accounts.kakao.com/login',
                                sharerDomain: 'https://sharer.kakao.com',
                                stat: 'https://apps.kakao.com/sdk/js',
                                resPrefix: 'https://developers.kakao.com/assets/img/about',
                                wishlistUrl: 'https://wishlist.kakao.com',
                                talkInappScheme: 'kakaotalk://inappbrowser',
                            }),
                            (c.RUNTIME = { appKey: '', accessToken: '' }),
                            (c.DUMMY_KEY = 'YOUR APP KEY'),
                            (c.UA = e.getUA());
                        var l = function l(e) {
                            Error.prototype.constructor.apply(this, arguments),
                                (this.name = 'KakaoError'),
                                (this.message = e);
                        };
                        return (
                            (l.prototype = new Error()),
                            (c.KakaoError = l),
                            (c.isDebug = function () {
                                return !1;
                            }),
                            (c.logDebug = function (e) {
                                c.isDebug() && window.console && console.log(JSON.stringify(e));
                            }),
                            (c.validate = function (e, t, n) {
                                if (!0 !== t(e)) throw new l('Illegal argument for ' + n);
                            }),
                            (c.processRules = function (e, t, r) {
                                (e = e || {}),
                                    t.before && t.before(e),
                                    u.isFunction(t.defaults) ? u.defaults(e, t.defaults(e)) : u.defaults(e, t.defaults);
                                var n = t.required || {},
                                    i = u.difference(u.keys(n), u.keys(e));
                                if (i.length) throw new l('Missing required keys: ' + i.join(',') + ' at ' + r);
                                var o = t.optional || {},
                                    a = u.extend({}, n, o),
                                    s = u.difference(u.keys(e), u.keys(a));
                                if (s.length) throw new l('Invalid parameter keys: ' + s.join(',') + ' at ' + r);
                                return (
                                    u.each(e, function (e, t) {
                                        var n = a[t];
                                        c.validate(e, n, '"' + t + '" in ' + r);
                                    }),
                                    t.after && t.after(e),
                                    e
                                );
                            }),
                            (c.getInstallUrl = function (e, t) {
                                if (c.UA.os.android) {
                                    var n = { appkey: c.RUNTIME.appKey, KA: c.KAKAO_AGENT };
                                    return 'market://details?id=' + e + '&referrer=' + JSON.stringify(n);
                                }
                                return c.UA.os.ios ? 'https://itunes.apple.com/app/id' + t : location.href;
                            }),
                            (c.isRetinaDisplay = function () {
                                return (
                                    1 < window.devicePixelRatio ||
                                    !(
                                        !window.matchMedia ||
                                        !window.matchMedia(
                                            '(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)',
                                        ).matches
                                    )
                                );
                            }),
                            (c.createHiddenIframe = function (e, t) {
                                var n = document.getElementById(e);
                                return (
                                    null !== n && n.parentNode.removeChild(n),
                                    ((n = document.createElement('iframe')).id = e),
                                    (n.style.border = 'none'),
                                    (n.style.display = 'none'),
                                    (n.style.width = '0px'),
                                    (n.style.height = '0px'),
                                    (n.src = t),
                                    n
                                );
                            }),
                            (c.guardCreateEasyXDM = function (e) {
                                try {
                                    return e();
                                } catch (t) {
                                    throw t instanceof TypeError
                                        ? new l('kakao.js should be loaded from a web server')
                                        : new l('EasyXDM -' + t.message);
                                }
                            }),
                            (c.serializeFile = function (r) {
                                return new Promise(function (t, n) {
                                    'undefined' == typeof FileReader &&
                                        n(new l('File API is not supported for this browser.'));
                                    var e = new FileReader();
                                    (e.onload = function (e) {
                                        try {
                                            t(u.arrayBufferToString(e.target.result));
                                        } catch (e) {
                                            n(e);
                                        }
                                    }),
                                        (e.onerror = function (e) {
                                            n(new l('Cannot read file: ' + r.name));
                                        }),
                                        e.readAsArrayBuffer(r);
                                });
                            }),
                            (c.popupWindows = {}),
                            (c.windowOpen = function (e, t, n) {
                                var r = c.popupWindows[t];
                                return (
                                    r && r.close && !r.closed && r.close(),
                                    (c.popupWindows[t] = window.open(e, t, n)),
                                    c.popupWindows[t]
                                );
                            }),
                            c
                        );
                    })();
                },
                { './browserProxy.js': 9, './util.js': 24 },
            ],
            12: [
                function (e, t, n) {
                    var r;
                    t.exports =
                        (((r = function r(e) {
                            Error.prototype.constructor.apply(this, arguments),
                                (this.name = 'KakaoError'),
                                (this.message = e);
                        }).prototype = new Error()),
                        r);
                },
                {},
            ],
            13: [
                function (e, t, n) {
                    var r, i;
                    t.exports =
                        ((r = e('../util')),
                        (i = {}),
                        {
                            subscribe: function (e, t) {
                                i[e] || (i[e] = []), i[e].push(t);
                            },
                            unsubscribe: function (e, t) {
                                for (var n = i[e], r = 0; r < l.length; r++)
                                    if (n[m] === t) {
                                        n.splice(m, 1);
                                        break;
                                    }
                            },
                            dispatch: function (e) {
                                var t = i[e];
                                t &&
                                    t.length &&
                                    r.each(t, function (e) {
                                        e();
                                    });
                            },
                        });
                },
                { '../util': 24 },
            ],
            14: [
                function (d, e, t) {
                    e.exports = function (e, t, r) {
                        var n = d('../util.js'),
                            i = d('./KakaoError'),
                            o = d('./validate');
                        (e = e || {}),
                            t.before && t.before(e),
                            n.isFunction(t.defaults) ? n.defaults(e, t.defaults(e)) : n.defaults(e, t.defaults);
                        var a = t.required || {},
                            s = n.difference(n.keys(a), n.keys(e));
                        if (s.length) throw new i('Missing required keys: ' + s.join(',') + ' at ' + r);
                        var c = t.optional || {},
                            u = n.extend({}, a, c),
                            l = n.difference(n.keys(e), n.keys(u));
                        if (l.length) throw new i('Invalid parameter keys: ' + l.join(',') + ' at ' + r);
                        return (
                            n.each(e, function (e, t) {
                                var n = u[t];
                                o(e, n, '"' + t + '" in ' + r);
                            }),
                            t.after && t.after(e),
                            e
                        );
                    };
                },
                { '../util.js': 24, './KakaoError': 12, './validate': 15 },
            ],
            15: [
                function (i, e, t) {
                    e.exports = function (e, t, n) {
                        var r = i('./KakaoError');
                        if (!0 !== t(e)) throw new r('Illegal argument for ' + n);
                    };
                },
                { './KakaoError': 12 },
            ],
            16: [
                function (e, t, n) {
                    var r, i, o, a;
                    t.exports =
                        ((r = {}),
                        (i = e('./util.js')),
                        (o = e('./api.js')),
                        e('./common/everntObserver'),
                        (a = []),
                        (r.getMyItems = o.createAPIAlias({ url: '/v1/emoticon/my_items' })),
                        (r.getItemResources = o.createAPIAlias({ url: '/v1/emoticon/item_resources', data: {} })),
                        (r.cleanup = function () {
                            i.each(a, function (e, t) {
                                e();
                            }),
                                (a.length = 0);
                        }),
                        r);
                },
                { './api.js': 4, './common/everntObserver': 13, './util.js': 24 },
            ],
            17: [
                function (L, e, t) {
                    e.exports = (function () {
                        var o = 'com.kakao.talk',
                            a = '362057947',
                            e = {},
                            d = L('./util.js'),
                            n = L('./api.js'),
                            p = L('./common.js'),
                            s = L('../vendor/web2app.js'),
                            c = L('./webviewchecker.js')(),
                            u = L('./link.obj.js'),
                            l = L('../vendor/userAgent.js')(),
                            f = L('./link.poller'),
                            t = function t() {
                                (this.appkey = p.RUNTIME.appKey),
                                    (this.appver = '1.0'),
                                    (this.apiver = '3.0'),
                                    (this.linkver = '3.5'),
                                    (this.extras = { KA: p.KAKAO_AGENT }),
                                    (this.objs = []);
                            },
                            m = function m() {
                                (this.appkey = p.RUNTIME.appKey),
                                    (this.appver = '1.0'),
                                    (this.linkver = '4.0'),
                                    (this.template_json = {}),
                                    (this.template_args = {}),
                                    (this.template_id = ''),
                                    (this.extras = { KA: p.KAKAO_AGENT });
                            },
                            h = function h(e) {
                                var r = {};
                                return (
                                    (r.object_type = e.objectType),
                                    (r.button_title = e.buttonTitle || ''),
                                    d.each(e, function (e, t) {
                                        var n = u.create(e, t, 'defaultObject');
                                        r && (r[t] = n);
                                    }),
                                    'list' == r.object_type &&
                                        ((r.header_title = e.headerTitle || ''),
                                        e.headerImageUrl && (r.header_image_url = e.headerImageUrl),
                                        e.headerImageWidth && (r.header_image_width = e.headerImageWidth),
                                        e.headerImageHeight && (r.header_image_height = e.headerImageHeight),
                                        (r.header_link = r.headerLink || {}),
                                        delete r.headerLink),
                                    'location' == r.object_type &&
                                        ((r.address = e.address || ''), (r.address_title = e.addressTitle || '')),
                                    'text' == r.object_type && (r.text = e.text || ''),
                                    { link_ver: '4.0', template_object: r }
                                );
                            },
                            g = function g(e) {
                                return { link_ver: '4.0', template_id: e.templateId, template_args: e.templateArgs };
                            },
                            v = function v(e) {
                                var t = { link_ver: '4.0', request_url: e.requestUrl };
                                return (
                                    e.templateId && (t.template_id = e.templateId),
                                    e.templateArgs && (t.template_args = e.templateArgs),
                                    t
                                );
                            },
                            r = 'custom',
                            i = 'default',
                            y = 'scrap',
                            k = [];
                        function b(t, n, r) {
                            var e = d.getElement(n.container);
                            if (!e)
                                throw new p.KakaoError(
                                    'container is required for KakaoTalk Link: pass in element or id',
                                );
                            var i = function i(e) {
                                return (e = e || window.e).preventDefault(), e.stopPropagation(), S(t, n, r), !1;
                            };
                            d.addEvent(e, 'click', i),
                                k.push(function () {
                                    d.removeEvent(e, 'click', i);
                                });
                        }
                        function w(t, e) {
                            var n;
                            switch (e) {
                                case 'custom':
                                    n = g(t);
                                    break;
                                case 'default':
                                    n = h(t);
                                    break;
                                case 'scrap':
                                    n = v(t);
                                    break;
                                default:
                                    throw new p.KakaoError('type is required for KakaoTalk Link');
                            }
                            var r = {
                                app_key: p.RUNTIME.appKey,
                                validation_action: e,
                                validation_params: JSON.stringify(n),
                                ka: p.KAKAO_AGENT,
                            };
                            t.serverCallbackArgs && (r.lcba = t.serverCallbackArgs);
                            var i =
                                p.URL.sharerDomain +
                                '/talk/friends/picker/easylink?app_key=' +
                                r.app_key +
                                '&ka=' +
                                encodeURIComponent(r.ka) +
                                '&validation_action=' +
                                r.validation_action +
                                '&validation_params=' +
                                encodeURIComponent(r.validation_params);
                            r.lcba && (i = i + '&lcba=' + encodeURIComponent(r.lcba));
                            var o,
                                a = 'kakao_link_web_sharer',
                                s = 'location=no,resizable=no,status=no,scrollbars=no,width=460,height=608';
                            function c(e) {
                                'sent' === e.data && e.origin === p.URL.sharerDomain && t.callback();
                            }
                            !0 !== (p.UA.browser.msie || p.UA.browser.spartan) && i.length < 2084
                                ? (o = p.windowOpen(i, a, s)).focus()
                                : (o = (function l(e, t, n, r) {
                                      var i = p.UA.browser.msie ? {} : p.windowOpen('', n, t),
                                          o = document.createElement('form');
                                      for (var a in (o.setAttribute('accept-charset', 'utf-8'),
                                      o.setAttribute('method', 'post'),
                                      o.setAttribute('action', e),
                                      o.setAttribute('target', n),
                                      o.setAttribute('style', 'display:none'),
                                      r))
                                          if (r.hasOwnProperty(a)) {
                                              var s = document.createElement('input');
                                              (s.type = 'hidden'),
                                                  (s.name = a),
                                                  (s.value = d.isString(r[a]) ? r[a] : JSON.stringify(r[a])),
                                                  o.appendChild(s);
                                          }
                                      return (
                                          document.body.appendChild(o),
                                          o.submit(),
                                          document.body.removeChild(o),
                                          i.focus && i.focus(),
                                          i
                                      );
                                  })(p.URL.sharerDomain + '/talk/friends/picker/link', s, a, r)),
                                t.callback &&
                                    p.UA.browser.msie &&
                                    console.log(
                                        "method 'callback' does not support the Internet Explorer environment.",
                                    );
                            var u = setInterval(function () {
                                o.closed && (clearInterval(u), d.removeEvent(window, 'message', c));
                            }, 1e3);
                            d.addEvent(window, 'message', c),
                                k.push(function () {
                                    d.removeEvent(window, 'message', c);
                                });
                        }
                        (e.createTalkLink = e.createTalkLinkButton = function (e) {
                            e = p.processRules(e, O.createTalkLink, 'Link.createTalkLink');
                            var t = d.getElement(e.container);
                            if (!t)
                                throw new p.KakaoError(
                                    'container is required for KakaoTalk Link: pass in element or id',
                                );
                            var n = function n() {
                                j(R(e, 'Link.createTalkLink'), e.fail, e.installTalk);
                            };
                            d.addEvent(t, 'click', n),
                                k.push(function () {
                                    d.removeEvent(t, 'click', n);
                                });
                        }),
                            (e.sendTalkLink = function (e) {
                                j(
                                    R((e = p.processRules(e, O.talkLink, 'Link.sendTalkLink')), 'Link.sendTalkLink'),
                                    e.fail,
                                    e.installTalk,
                                );
                            }),
                            (e.createCustom = e.createCustomButton = function (e) {
                                b(E, (e = p.processRules(e, O.createCustom, 'Link.createCustom')), r);
                            }),
                            (e.createScrap = e.createScrapButton = function (e) {
                                b(U, (e = p.processRules(e, O.createScrap, 'Link.createScrap')), y);
                            }),
                            (e.createDefault = e.createDefaultButton = function (e) {
                                b(
                                    I,
                                    (e =
                                        'list' == e.objectType
                                            ? p.processRules(e, O.createDefaultList, 'Link.createDefaultList')
                                            : 'location' == e.objectType
                                            ? p.processRules(e, O.createDefaultLocation, 'Link.createDefaultLocation')
                                            : 'commerce' == e.objectType
                                            ? p.processRules(e, O.createDefaultCommerce, 'Link.createDefaultCommerce')
                                            : 'text' == e.objectType
                                            ? p.processRules(e, O.createDefaultText, 'Link.createDefaultText')
                                            : p.processRules(e, O.createDefaultFeed, 'Link.createDefaultFeed')),
                                    i,
                                );
                            });
                        var _ = 'tablet' == l.platform && l.os.ios;
                        function S(e, t, n) {
                            if (!t.throughTalk || ('mobile' != l.platform && !_)) return w(t, n);
                            var r;
                            if (l.browser.iphone && /version/.test(l.ua.toLowerCase())) {
                                var i = null;
                                (r = function r(e) {
                                    return (i = e);
                                }),
                                    f.start(
                                        function () {
                                            return null != i;
                                        },
                                        function () {
                                            A(i, t);
                                        },
                                        function () {
                                            t.fail({ msg: 'The request wait time has expired.', at: 'link.poller' });
                                        },
                                    );
                            } else r = A;
                            return e(t).then(
                                function (e) {
                                    return r(e, t);
                                },
                                function (e) {
                                    t.fail(e);
                                },
                            );
                        }
                        function A(e, t) {
                            var n = new m();
                            (n.extras = d.extend(n.extras, t.extras)),
                                t.serverCallbackArgs && (n.extras.lcba = t.serverCallbackArgs),
                                (n.template_json = e.template_msg),
                                (n.template_args = e.template_args),
                                (n.template_id = e.template_id);
                            var r = x + '://send?' + d.buildQueryString(n);
                            if (1e4 < JSON.stringify(n).length)
                                throw new p.KakaoError(
                                    'Failed to send message because it exceeds the message size limit. Please contact the app administrator.',
                                );
                            ('mobile' == l.platform || _) && j(r, t.fail, t.installTalk);
                            var i = {
                                template_msg: e.template_msg || {},
                                warning_msg: e.warning_msg || {},
                                argument_msg: e.argument_msg || {},
                            };
                            return t.success(i), i;
                        }
                        (e.sendCustom = function (e) {
                            return S(E, (e = p.processRules(e, O.custom, 'Link.sendCustomTemplate')), r);
                        }),
                            (e.sendScrap = function (e) {
                                return S(U, (e = p.processRules(e, O.scrap, 'Link.sendScrap')), y);
                            }),
                            (e.sendDefault = function (e) {
                                if (!e.objectType) throw new p.KakaoError('objectType is required for KakaoTalk Link');
                                return S(I, (e = p.processRules(e, O[e.objectType], 'Link.sendDefault')), i);
                            }),
                            (e.uploadImage = function (e) {
                                return (function t(e) {
                                    return n.request({
                                        url: '/v2/api/talk/message/image/upload',
                                        data: { file: e.file },
                                    });
                                })((e = p.processRules(e, O.uploadImage, 'Link.uploadImage')));
                            }),
                            (e.deleteImage = function (e) {
                                return (function t(e) {
                                    return n.request({
                                        url: '/v2/api/talk/message/image/delete',
                                        data: { image_url: e.imageUrl },
                                    });
                                })((e = p.processRules(e, O.deleteImage, 'Link.deleteImage')));
                            }),
                            (e.scrapImage = function (e) {
                                return (function t(e) {
                                    return n.request({
                                        url: '/v2/api/talk/message/image/scrap',
                                        data: { image_url: e.imageUrl },
                                    });
                                })((e = p.processRules(e, O.scrapImage, 'Link.scrapImage')));
                            });
                        var T = ['feed', 'list', 'location', 'commerce', 'text'],
                            O = {
                                talkLink: {
                                    optional: {
                                        label: d.passesOneOf([d.isString, d.isObject]),
                                        image: d.isObject,
                                        webImage: d.isObject,
                                        webButton: d.isObject,
                                        webLink: d.isObject,
                                        appButton: d.isObject,
                                        appLink: d.isObject,
                                        horizontalButton: d.isArray,
                                        fail: d.isFunction,
                                        installTalk: d.isBoolean,
                                        forwardable: d.isBoolean,
                                        extras: d.isObject,
                                    },
                                    before: function (e) {
                                        d.isString(e.label) && (e.label = { text: e.label });
                                    },
                                    defaults: { installTalk: !0, forwardable: !1, fail: d.emptyFunc },
                                },
                                custom: {
                                    required: { templateId: d.isNumber },
                                    optional: {
                                        templateArgs: d.isObject,
                                        installTalk: d.isBoolean,
                                        fail: d.isFunction,
                                        always: d.isFunction,
                                        success: d.isFunction,
                                        extras: d.isObject,
                                        callback: d.isFunction,
                                        serverCallbackArgs: d.isString,
                                        throughTalk: d.isBoolean,
                                    },
                                    defaults: {
                                        templateArgs: {},
                                        installTalk: !1,
                                        fail: d.emptyFunc,
                                        always: d.emptyFunc,
                                        success: d.emptyFunc,
                                        callback: d.emptyFunc,
                                        throughTalk: !0,
                                    },
                                },
                                scrap: {
                                    required: { requestUrl: d.isString },
                                    optional: {
                                        templateId: d.isNumber,
                                        templateArgs: d.isObject,
                                        installTalk: d.isBoolean,
                                        fail: d.isFunction,
                                        always: d.isFunction,
                                        success: d.isFunction,
                                        extras: d.isObject,
                                        callback: d.isFunction,
                                        serverCallbackArgs: d.isString,
                                        throughTalk: d.isBoolean,
                                    },
                                    defaults: {
                                        templateArgs: {},
                                        installTalk: !1,
                                        fail: d.emptyFunc,
                                        always: d.emptyFunc,
                                        success: d.emptyFunc,
                                        callback: d.emptyFunc,
                                        throughTalk: !0,
                                    },
                                },
                                feed: {
                                    required: { objectType: d.isOneOf(T), content: d.isObject },
                                    optional: {
                                        social: d.isObject,
                                        buttonTitle: d.isString,
                                        buttons: d.isArray,
                                        installTalk: d.isBoolean,
                                        fail: d.isFunction,
                                        always: d.isFunction,
                                        success: d.isFunction,
                                        extras: d.isObject,
                                        callback: d.isFunction,
                                        serverCallbackArgs: d.isString,
                                        throughTalk: d.isBoolean,
                                    },
                                    defaults: {
                                        installTalk: !1,
                                        fail: d.emptyFunc,
                                        always: d.emptyFunc,
                                        success: d.emptyFunc,
                                        callback: d.emptyFunc,
                                        throughTalk: !0,
                                    },
                                },
                                commerce: {
                                    required: { objectType: d.isOneOf(T), content: d.isObject, commerce: d.isObject },
                                    optional: {
                                        buttonTitle: d.isString,
                                        buttons: d.isArray,
                                        installTalk: d.isBoolean,
                                        fail: d.isFunction,
                                        always: d.isFunction,
                                        success: d.isFunction,
                                        extras: d.isObject,
                                        callback: d.isFunction,
                                        serverCallbackArgs: d.isString,
                                        throughTalk: d.isBoolean,
                                    },
                                    defaults: {
                                        installTalk: !1,
                                        fail: d.emptyFunc,
                                        always: d.emptyFunc,
                                        success: d.emptyFunc,
                                        callback: d.emptyFunc,
                                        throughTalk: !0,
                                    },
                                },
                                list: {
                                    required: {
                                        objectType: d.isOneOf(T),
                                        headerTitle: d.isString,
                                        headerLink: d.isObject,
                                        contents: d.isArray,
                                    },
                                    optional: {
                                        buttonTitle: d.isString,
                                        buttons: d.isArray,
                                        headerImageUrl: d.isString,
                                        headerImageWidth: d.isNumber,
                                        headerImageHeight: d.isNumber,
                                        installTalk: d.isBoolean,
                                        fail: d.isFunction,
                                        always: d.isFunction,
                                        success: d.isFunction,
                                        extras: d.isObject,
                                        callback: d.isFunction,
                                        serverCallbackArgs: d.isString,
                                        throughTalk: d.isBoolean,
                                    },
                                    defaults: {
                                        installTalk: !1,
                                        fail: d.emptyFunc,
                                        always: d.emptyFunc,
                                        success: d.emptyFunc,
                                        callback: d.emptyFunc,
                                        throughTalk: !0,
                                    },
                                },
                                location: {
                                    required: { objectType: d.isOneOf(T), content: d.isObject, address: d.isString },
                                    optional: {
                                        addressTitle: d.isString,
                                        social: d.isObject,
                                        buttonTitle: d.isString,
                                        buttons: d.isArray,
                                        installTalk: d.isBoolean,
                                        fail: d.isFunction,
                                        always: d.isFunction,
                                        success: d.isFunction,
                                        extras: d.isObject,
                                        callback: d.isFunction,
                                        serverCallbackArgs: d.isString,
                                        throughTalk: d.isBoolean,
                                    },
                                    defaults: {
                                        installTalk: !1,
                                        fail: d.emptyFunc,
                                        always: d.emptyFunc,
                                        success: d.emptyFunc,
                                        callback: d.emptyFunc,
                                        throughTalk: !0,
                                    },
                                },
                                text: {
                                    required: { objectType: d.isOneOf(T), text: d.isString, link: d.isObject },
                                    optional: {
                                        buttonTitle: d.isString,
                                        buttons: d.isArray,
                                        installTalk: d.isBoolean,
                                        fail: d.isFunction,
                                        always: d.isFunction,
                                        success: d.isFunction,
                                        extras: d.isObject,
                                        callback: d.isFunction,
                                        serverCallbackArgs: d.isString,
                                        throughTalk: d.isBoolean,
                                    },
                                    defaults: {
                                        installTalk: !1,
                                        fail: d.emptyFunc,
                                        always: d.emptyFunc,
                                        success: d.emptyFunc,
                                        callback: d.emptyFunc,
                                        throughTalk: !0,
                                    },
                                },
                                uploadImage: {
                                    required: { file: d.isObject },
                                    optional: { always: d.isFunction, success: d.isFunction },
                                    defaults: { always: d.emptyFunc, success: d.emptyFunc },
                                },
                                deleteImage: {
                                    required: { imageUrl: d.isString },
                                    optional: { always: d.isFunction, success: d.isFunction },
                                    defaults: { always: d.emptyFunc, success: d.emptyFunc },
                                },
                                scrapImage: {
                                    required: { imageUrl: d.isString },
                                    optional: { always: d.isFunction, success: d.isFunction },
                                    defaults: { always: d.emptyFunc, success: d.emptyFunc },
                                },
                            };
                        (O.createTalkLink = d.extend(
                            { required: { container: d.passesOneOf([d.isElement, d.isString]) } },
                            O.talkLink,
                        )),
                            (O.createCustom = d.defaults(
                                {
                                    required: d.extend(
                                        { container: d.passesOneOf([d.isElement, d.isString]) },
                                        O.custom.required,
                                    ),
                                },
                                O.custom,
                            )),
                            (O.createScrap = d.defaults(
                                {
                                    required: d.extend(
                                        { container: d.passesOneOf([d.isElement, d.isString]) },
                                        O.scrap.required,
                                    ),
                                },
                                O.scrap,
                            )),
                            (O.createDefaultFeed = d.defaults(
                                {
                                    required: d.extend(
                                        { container: d.passesOneOf([d.isElement, d.isString]) },
                                        O.feed.required,
                                    ),
                                },
                                O.feed,
                            )),
                            (O.createDefaultList = d.defaults(
                                {
                                    required: d.extend(
                                        { container: d.passesOneOf([d.isElement, d.isString]) },
                                        O.list.required,
                                    ),
                                },
                                O.list,
                            )),
                            (O.createDefaultLocation = d.defaults(
                                {
                                    required: d.extend(
                                        { container: d.passesOneOf([d.isElement, d.isString]) },
                                        O.location.required,
                                    ),
                                },
                                O.location,
                            )),
                            (O.createDefaultCommerce = d.defaults(
                                {
                                    required: d.extend(
                                        { container: d.passesOneOf([d.isElement, d.isString]) },
                                        O.commerce.required,
                                    ),
                                },
                                O.commerce,
                            )),
                            (O.createDefaultText = d.defaults(
                                {
                                    required: d.extend(
                                        { container: d.passesOneOf([d.isElement, d.isString]) },
                                        O.text.required,
                                    ),
                                },
                                O.text,
                            ));
                        var x = (p.UA.os.ios, 'kakaolink');
                        function R(e, r) {
                            var i = new t();
                            return (
                                (i.forwardable = e.forwardable),
                                (i.extras = d.extend(i.extras, e.extras)),
                                d.each(e, function (e, t) {
                                    var n = u.create(e, t, r);
                                    n && i.objs.push(n);
                                }),
                                x + '://send?' + d.buildQueryString(i)
                            );
                        }
                        function E(e) {
                            return n.request({ url: '/v2/api/kakaolink/talk/template/validate', data: g(e) });
                        }
                        function U(e) {
                            return n.request({ url: '/v2/api/kakaolink/talk/template/scrap', data: v(e) });
                        }
                        function I(e) {
                            return n.request({ url: '/v2/api/kakaolink/talk/template/default', data: h(e) });
                        }
                        function j(e, t, n) {
                            var r = {
                                urlScheme: e,
                                intentURI:
                                    'intent:' +
                                    e +
                                    '#Intent;launchFlags=0x14008000;' +
                                    (!0 === n ? 'package=com.kakao.talk;' : '') +
                                    'end;',
                                appName: 'KakaoTalk',
                                storeURL: p.getInstallUrl(o, a),
                                onUnsupportedEnvironment: function () {
                                    t(e);
                                },
                            };
                            (!n || c.isIOSKakaoTalkWebView() || c.isAndroidWebView()) && (r.onAppMissing = d.emptyFunc),
                                c.isIOSKakaoTalkWebView() && (r.universalLink = undefined);
                            try {
                                s(r);
                            } catch (i) {
                                console.log(i);
                            }
                        }
                        return (
                            (e.cleanup = function () {
                                d.each(k, function (e, t) {
                                    e();
                                }),
                                    (k.length = 0);
                            }),
                            e
                        );
                    })();
                },
                {
                    '../vendor/userAgent.js': 30,
                    '../vendor/web2app.js': 31,
                    './api.js': 4,
                    './common.js': 11,
                    './link.obj.js': 18,
                    './link.poller': 19,
                    './util.js': 24,
                    './webviewchecker.js': 25,
                },
            ],
            18: [
                function (x, e, t) {
                    e.exports = (function () {
                        var a = x('./util.js'),
                            n = x('./common/KakaoError'),
                            s = x('./common/ruleProcess'),
                            e = 'web',
                            t = 'inweb',
                            r = { displayType: a.isOneOf(['both', 'sender', 'receiver']) };
                        function i(e) {
                            var t = parseInt(e, 10);
                            if (isNaN(t) || t < 80)
                                throw new n(
                                    'Illegal argument for image: width/height should be a number larger than 80',
                                );
                            return !0;
                        }
                        function o(e) {
                            (e.width = parseInt(e.width, 10)), (e.height = parseInt(e.height, 10));
                        }
                        function c(e) {
                            var t = a.keys(e)[0];
                            return (
                                'webButton' === t
                                    ? s(e.webButton, v[t], 'parameter webButton in Link.createTalkLink')
                                    : s(e.appButton, v[t], 'parameter appButton in Link.createTalkLink'),
                                !0
                            );
                        }
                        function u(e, t) {
                            return {
                                objtype: 'image',
                                src: t.src,
                                width: t.width,
                                height: t.height,
                                action: p(e, t),
                                disptype: t.displayType,
                            };
                        }
                        function l(e, t) {
                            return { objtype: 'button', text: t.text, action: p(e, t), disptype: t.displayType };
                        }
                        function d(e, t) {
                            return { objtype: 'link', text: t.text, action: p(e, t), disptype: t.displayType };
                        }
                        function p(e, n) {
                            switch (e) {
                                case 'web':
                                    return (function r() {
                                        return {
                                            type: n.type,
                                            url: n.url
                                                ? (function t(e) {
                                                      return -1 < e.indexOf('://') ? e : 'http://' + e;
                                                  })(n.url)
                                                : undefined,
                                            auth: n.auth,
                                        };
                                    })();
                                case 'app':
                                    return (function t() {
                                        return {
                                            type: 'app',
                                            url: n.webUrl,
                                            actioninfo: (function e(r, i) {
                                                r && (r = s(r, y, 'execParams in Kakao.Link'));
                                                i && (i = s(i, y, 'marketParams in Kakao.Link'));
                                                var o = [];
                                                return (
                                                    a.each(
                                                        {
                                                            android: { os: 'android' },
                                                            iphone: { os: 'ios', devicetype: 'phone' },
                                                            ipad: { os: 'ios', devicetype: 'pad' },
                                                        },
                                                        function (e, t) {
                                                            var n = a.extend({}, e);
                                                            r && r[t] && (n.execparam = a.buildQueryString(r[t], !1)),
                                                                i &&
                                                                    i[t] &&
                                                                    (n.marketparam = a.buildQueryString(i[t], !1)),
                                                                (n.execparam || n.marketparam) && o.push(n);
                                                        },
                                                    ),
                                                    o
                                                );
                                            })(n.execParams, n.marketParams),
                                        };
                                    })();
                                default:
                                    return undefined;
                            }
                        }
                        function f(e) {
                            return {
                                web_url: e.webUrl,
                                mobile_web_url: e.mobileWebUrl,
                                android_execution_params: e.androidExecParams,
                                ios_execution_params: e.iosExecParams,
                            };
                        }
                        function m(e) {
                            return s(e, v.content, 'parameter content in Link.sendDefault'), !0;
                        }
                        function h(e) {
                            return s(e, v.link, 'parameter link in Link.sendDefault'), !0;
                        }
                        function g(e) {
                            return s(e, v.button, 'parameter button in Link.sendDefault'), !0;
                        }
                        var v = {
                                label: {
                                    required: { text: a.isString },
                                    optional: r,
                                    builder: function k(e) {
                                        return { objtype: 'label', text: e.text, disptype: e.displayType };
                                    },
                                },
                                image: {
                                    required: { src: a.isString, width: i, height: i },
                                    optional: r,
                                    before: o,
                                    builder: a.partial(u, null),
                                },
                                webImage: {
                                    required: { src: a.isString, width: i, height: i },
                                    optional: a.extend(
                                        { url: a.isString, auth: a.isBoolean, type: a.isOneOf([e, t]) },
                                        r,
                                    ),
                                    defaults: { type: e },
                                    before: o,
                                    builder: a.partial(u, 'web'),
                                },
                                webButton: {
                                    optional: a.extend(
                                        {
                                            text: a.isString,
                                            url: a.isString,
                                            auth: a.isBoolean,
                                            type: a.isOneOf(['web', 'inweb']),
                                        },
                                        r,
                                    ),
                                    defaults: { type: 'web' },
                                    builder: a.partial(l, 'web'),
                                },
                                appButton: {
                                    optional: a.extend(
                                        {
                                            text: a.isString,
                                            webUrl: a.isString,
                                            execParams: a.isObject,
                                            marketParams: a.isObject,
                                            type: a.isString,
                                        },
                                        r,
                                    ),
                                    defaults: { type: 'app' },
                                    builder: a.partial(l, 'app'),
                                },
                                webLink: {
                                    required: { text: a.isString },
                                    optional: a.extend(
                                        { url: a.isString, auth: a.isBoolean, type: a.isOneOf(['web', 'inweb']) },
                                        r,
                                    ),
                                    defaults: { type: 'web' },
                                    builder: a.partial(d, 'web'),
                                },
                                appLink: {
                                    required: { text: a.isString },
                                    optional: a.extend(
                                        { webUrl: a.isString, execParams: a.isObject, marketParams: a.isObject },
                                        r,
                                    ),
                                    builder: a.partial(d, 'app'),
                                },
                                horizontalButton: {
                                    required: { 0: c, 1: c },
                                    builder: function b(e) {
                                        var t = a.keys(e[0]),
                                            n = a.keys(e[1]),
                                            r = e[0][t],
                                            i = e[1][n];
                                        return {
                                            objtype: 'horizontal',
                                            subs: [
                                                { objtype: 'button', text: r.text, action: p(r.type, r) },
                                                { objtype: 'button', text: i.text, action: p(i.type, i) },
                                            ],
                                            disptype: 'both',
                                        };
                                    },
                                },
                                content: {
                                    required: { title: a.isString, imageUrl: a.isString, link: h },
                                    optional: {
                                        imageWidth: a.isNumber,
                                        imageHeight: a.isNumber,
                                        description: a.isString,
                                    },
                                    builder: function w(e) {
                                        return {
                                            title: e.title,
                                            image_url: e.imageUrl,
                                            link: f(e.link),
                                            image_width: e.imageWidth,
                                            image_height: e.imageHeight,
                                            description: e.description,
                                        };
                                    },
                                },
                                contents: {
                                    optional: { 0: m, 1: m, 2: m },
                                    builder: function _(e) {
                                        if (e.length < 2) throw new n('Illegal argument for contents: min count(2)');
                                        return a.map(e, function (e) {
                                            return {
                                                title: e.title,
                                                image_url: e.imageUrl,
                                                link: f(e.link),
                                                image_width: e.imageWidth,
                                                image_height: e.imageHeight,
                                                description: e.description,
                                            };
                                        });
                                    },
                                },
                                commerce: {
                                    required: { regularPrice: a.isNumber },
                                    optional: {
                                        discountPrice: a.isNumber,
                                        discountRate: a.isNumber,
                                        fixedDiscountPrice: a.isNumber,
                                        productName: a.isString,
                                    },
                                    builder: function S(e) {
                                        return {
                                            regular_price: e.regularPrice,
                                            discount_price: e.discountPrice,
                                            discount_rate: e.discountRate,
                                            fixed_discount_price: e.fixedDiscountPrice,
                                            product_name: e.productName,
                                        };
                                    },
                                },
                                social: {
                                    optional: {
                                        likeCount: a.isNumber,
                                        commentCount: a.isNumber,
                                        sharedCount: a.isNumber,
                                        viewCount: a.isNumber,
                                        subscriberCount: a.isNumber,
                                    },
                                    builder: function A(e) {
                                        return {
                                            like_count: e.likeCount,
                                            comment_count: e.commentCount,
                                            shared_count: e.sharedCount,
                                            view_count: e.viewCount,
                                            subscriber_count: e.subscriberCount,
                                        };
                                    },
                                },
                                button: {
                                    required: { title: a.isString, link: h },
                                    builder: function T(e) {
                                        return { title: e.title, link: f(e.link) };
                                    },
                                },
                                buttons: {
                                    optional: { 0: g, 1: g },
                                    builder: function O(e) {
                                        return a.map(e, function (e) {
                                            return { title: e.title, link: f(e.link) };
                                        });
                                    },
                                },
                                headerLink: {
                                    optional: {
                                        webUrl: a.isString,
                                        mobileWebUrl: a.isString,
                                        androidExecParams: a.isString,
                                        iosExecParams: a.isString,
                                    },
                                    builder: f,
                                },
                                link: {
                                    optional: {
                                        webUrl: a.isString,
                                        mobileWebUrl: a.isString,
                                        androidExecParams: a.isString,
                                        iosExecParams: a.isString,
                                    },
                                    builder: f,
                                },
                            },
                            y = { optional: { iphone: a.isObject, ipad: a.isObject, android: a.isObject } };
                        return {
                            create: function (e, t, n) {
                                var r = v[t];
                                if (r) return (e = s(e, r, "parameter '" + t + "' in " + (n || 'Link'))), r.builder(e);
                            },
                        };
                    })();
                },
                { './common/KakaoError': 12, './common/ruleProcess': 14, './util.js': 24 },
            ],
            19: [
                function (e, t, n) {
                    t.exports = (function () {
                        var a = 0,
                            s = [];
                        function c() {
                            for (var e = 0; e < s.length; ++e) clearTimeout(s[e]);
                            s = [];
                        }
                        return {
                            start: function (e, t, n) {
                                !(function o() {
                                    (a = 0), c();
                                })();
                                for (var r = 1; 100 * r < 10001; ++r) {
                                    var i = setTimeout(function () {
                                        (a += 100), e() ? (c(), t()) : 10001 < a + 100 && (c(), n());
                                    }, 100 * r);
                                    s.push(i);
                                }
                            },
                            stop: function () {
                                c();
                            },
                        };
                    })();
                },
                {},
            ],
            20: [
                function (i, e, t) {
                    e.exports = (function (e) {
                        e.Kakao = e.Kakao || {};
                        var t = e.Kakao,
                            n = i('./util.js'),
                            r = i('./common.js');
                        return (
                            (t.VERSION = r.VERSION),
                            (t.Story = i('./story.js')),
                            (t.init = function (e) {
                                if (r.RUNTIME.appKey) throw new r.KakaoError('Kakao.init: Already initialized.');
                                if (!n.isString(e) || e === r.DUMMY_KEY)
                                    throw new r.KakaoError('Kakao.init: App key must be provided');
                                (r.RUNTIME.appKey = e),
                                    (t.Auth = i('./auth.js')),
                                    (t.API = i('./api.js')),
                                    (t.Link = i('./link.js')),
                                    (t.Emoticon = i('./emoticon.js')),
                                    (t.Navi = i('./navi.js')),
                                    (t.PlusFriend = i('./plusFriend.js')),
                                    (t.Channel = i('./channel.js')),
                                    (t.Wishlist = i('./wishlist.js'));
                            }),
                            (t.isInitialized = function () {
                                return !!r.RUNTIME.appKey;
                            }),
                            (t.cleanup = function () {
                                t.Auth && t.Auth.cleanup(),
                                    t.API && t.API.cleanup(),
                                    t.Link && t.Link.cleanup(),
                                    t.Story && t.Story.cleanup(),
                                    t.Emoticon && t.Emoticon.cleanup(),
                                    t.PlusFriend && t.PlusFriend.cleanup(),
                                    t.Channel && t.Channel.cleanup(),
                                    t.Wishlist && t.Wishlist.cleanup(),
                                    n.nullify(r.RUNTIME);
                            }),
                            window.kakaoAsyncInit && window.kakaoAsyncInit(),
                            t
                        );
                    })(window);
                },
                {
                    './api.js': 4,
                    './auth.js': 6,
                    './channel.js': 10,
                    './common.js': 11,
                    './emoticon.js': 16,
                    './link.js': 17,
                    './navi.js': 21,
                    './plusFriend.js': 22,
                    './story.js': 23,
                    './util.js': 24,
                    './wishlist.js': 26,
                },
            ],
            21: [
                function (t, e, n) {
                    e.exports = (function () {
                        var i = t('./util.js'),
                            o = t('./common'),
                            a = t('./common/ruleProcess'),
                            s = t('../vendor/web2app.js'),
                            c = 'com.locnall.KimGiSa',
                            e = {};
                        (e.start = function (e) {
                            var t = (function r(e) {
                                    var t = new u();
                                    return (
                                        (t.param = {
                                            destination: l.spot.destinationBuilder(e),
                                            option:
                                                '{}' === JSON.stringify(l.spot.optionBuilder(e))
                                                    ? undefined
                                                    : l.spot.optionBuilder(e),
                                            via_list: e.viaPoints,
                                        }),
                                        o.URL.navi + '?' + i.buildQueryString(t)
                                    );
                                })((e = a(e, l.spot))),
                                n = encodeURIComponent(t.replace(o.URL.navi, o.URL.naviWeb));
                            s({
                                urlScheme: t,
                                intentURI:
                                    'intent:' + t + '#Intent;package=' + c + ';S.browser_fallback_url=' + n + ';end;',
                                storeURL: t.replace(o.URL.navi, o.URL.naviWeb),
                                universalLink: t.replace(o.URL.navi, o.URL.naviWeb),
                            });
                        }),
                            (e.share = function (e) {
                                var t = (function r(e) {
                                        var t = new u();
                                        return (
                                            (t.param = {
                                                destination: d.spot.destinationBuilder(e),
                                                option:
                                                    '{}' === JSON.stringify(d.spot.optionBuilder(e))
                                                        ? undefined
                                                        : d.spot.optionBuilder(e),
                                            }),
                                            (t.scheme_type = 'sharePoi'),
                                            o.URL.naviShare + '?' + i.buildQueryString(t)
                                        );
                                    })((e = a(e, d.spot))),
                                    n = encodeURIComponent(t.replace(o.URL.naviShare, o.URL.naviWeb));
                                s({
                                    urlScheme: t,
                                    intentURI:
                                        'intent:' +
                                        t +
                                        '#Intent;package=' +
                                        c +
                                        ';S.browser_fallback_url=' +
                                        n +
                                        ';end;',
                                    storeURL: t.replace(o.URL.naviShare, o.URL.naviWeb),
                                    universalLink: t.replace(o.URL.naviShare, o.URL.naviWeb),
                                });
                            });
                        var u = function u() {
                                (this.appkey = o.RUNTIME.appKey),
                                    (this.apiver = '1.0'),
                                    (this.extras = { KA: o.KAKAO_AGENT });
                            },
                            l = {
                                spot: {
                                    required: { name: i.isString, x: i.isNumber, y: i.isNumber },
                                    optional: {
                                        coordType: i.isOneOf(['wgs84', 'katec']),
                                        vehicleType: i.isOneOf([1, 2, 3, 4, 5, 6, 7]),
                                        rpOption: i.isOneOf([1, 2, 3, 4, 5, 6, 8, 100]),
                                        routeInfo: i.isBoolean,
                                        sX: i.isNumber,
                                        sY: i.isNumber,
                                        sAngle: i.isNumber,
                                        returnUri: i.isString,
                                        rpflag: i.isString,
                                        cid: i.isString,
                                        guideId: i.isNumber,
                                        viaPoints: function (e) {
                                            if (!i.isArray(e)) return !1;
                                            if (3 < e.length) throw new Error('via points should not be exceed 3');
                                            return (
                                                i.each(e, function (e) {
                                                    return a(e, l.viaPoint);
                                                }),
                                                !0
                                            );
                                        },
                                    },
                                    destinationBuilder: function (e) {
                                        return {
                                            name: e.name,
                                            x: e.x,
                                            y: e.y,
                                            rpflag: e.rpflag,
                                            cid: e.cid,
                                            guide_id: e.guideId,
                                        };
                                    },
                                    optionBuilder: function (e) {
                                        return {
                                            coord_type: e.coordType,
                                            vehicle_type: e.vehicleType,
                                            rpoption: e.rpOption,
                                            route_info: e.routeInfo,
                                            s_x: e.sX,
                                            s_y: e.sY,
                                            s_angle: e.sAngle,
                                            return_uri: e.returnUri,
                                        };
                                    },
                                },
                                viaPoint: {
                                    required: { name: i.isString, x: i.isNumber, y: i.isNumber },
                                    optional: { rpflag: i.isString, cid: i.isString },
                                },
                            },
                            d = {
                                spot: {
                                    required: { name: i.isString, x: i.isNumber, y: i.isNumber },
                                    optional: {
                                        coordType: i.isOneOf(['wgs84', 'katec']),
                                        rpflag: i.isString,
                                        cid: i.isString,
                                        guideId: i.isNumber,
                                    },
                                    destinationBuilder: function (e) {
                                        return {
                                            name: e.name,
                                            x: e.x,
                                            y: e.y,
                                            rpflag: e.rpflag,
                                            cid: e.cid,
                                            guide_id: e.guideId,
                                        };
                                    },
                                    optionBuilder: function (e) {
                                        return { coord_type: e.coordType };
                                    },
                                },
                            };
                        return e;
                    })();
                },
                { '../vendor/web2app.js': 31, './common': 11, './common/ruleProcess': 14, './util.js': 24 },
            ],
            22: [
                function (i, e, t) {
                    e.exports = (function () {
                        var e = {},
                            c = i('./util.js'),
                            u = i('./common.js'),
                            t = i('./browserProxy.js'),
                            l = 'plus_friend_add_social_plugin',
                            d = 'plus_friend_chat_social_plugin',
                            p = 'width=350, height=510',
                            n = '1.0',
                            f = [];
                        function m(e, t, n, r) {
                            var i = document.createElement('a'),
                                o = document.createElement('img');
                            return (
                                i.setAttribute('href', '#'),
                                o.setAttribute('src', t),
                                o.setAttribute('alt', n),
                                o.setAttribute('title', n),
                                r.supportMultipleDensities &&
                                    o.setAttribute(
                                        'srcset',
                                        [t.replace('.png', '_2X.png 2x'), t.replace('.png', '_3X.png 3x')].join(', '),
                                    ),
                                i.appendChild(o),
                                i
                            );
                        }
                        function h(e) {
                            var t = u.URL.plusFriend + '/' + e.plusFriendId + '/friend';
                            return u.RUNTIME.appKey && (t += '?' + r()), t;
                        }
                        function g(e) {
                            var t = u.URL.plusFriend + '/' + e.plusFriendId + '/chat';
                            return u.RUNTIME.appKey && (t += '?' + r()), t;
                        }
                        function r() {
                            if (!u.RUNTIME.appKey)
                                throw u.KakaoError('The app key does not exist. Please call Kakao.init function.');
                            var e = {
                                api_ver: n,
                                kakao_agent: u.KAKAO_AGENT,
                                app_key: u.RUNTIME.appKey,
                                referer: t.getOrigin() + location.pathname + location.search,
                            };
                            return c.buildQueryString(e);
                        }
                        (e.createAddFriendButton = function (e) {
                            e = u.processRules(e, v.createAddFriendButton, 'PlusFriend.createAddFriendButton');
                            var t = c.getElement(e.container);
                            if (!t)
                                throw new u.KakaoError(
                                    'container is required for creating PlusFriend.addFriend button: pass in element or id',
                                );
                            var n = h(e),
                                r = (function s(e) {
                                    var t = 'friendadd_' + e.size + '_' + e.color + '_' + e.shape;
                                    return u.URL.resPrefix + '/logos/plusfriend/' + t + '.png';
                                })(e),
                                i = m(n, r, '플러스친구 친구 추가 버튼', e);
                            t.appendChild(i);
                            var o = function o(e) {
                                e.preventDefault ? e.preventDefault() : (e.returnValue = !1), u.windowOpen(n, l, p);
                            };
                            c.addEvent(i, 'click', o);
                            var a = function a() {
                                t.removeChild(i), c.removeEvent(i, 'click', o);
                            };
                            f.push(a);
                        }),
                            (e.addFriend = function (e) {
                                var t = h((e = u.processRules(e, v.addFriend, 'PlusFriend.addFriend')));
                                u.windowOpen(t, l, p);
                            }),
                            (e.createChatButton = function (e) {
                                e = u.processRules(e, v.createChatButton, 'PlusFriend.createChatButton');
                                var t = c.getElement(e.container);
                                if (!t)
                                    throw new u.KakaoError(
                                        'container is required for creating PlusFriend.chat button: pass in element or id',
                                    );
                                var n = g(e),
                                    r = (function s(e) {
                                        var t = e.title + '_' + e.size + '_' + e.color + '_' + e.shape;
                                        return u.URL.resPrefix + '/logos/plusfriend/' + t + '.png';
                                    })(e),
                                    i = m(n, r, '플러스친구 1:1 채팅 버튼', e);
                                t.appendChild(i);
                                var o = function o(e) {
                                    e.preventDefault ? e.preventDefault() : (e.returnValue = !1), u.windowOpen(n, d, p);
                                };
                                c.addEvent(i, 'click', o);
                                var a = function a() {
                                    t.removeChild(i), c.removeEvent(i, 'click', o);
                                };
                                f.push(a);
                            }),
                            (e.chat = function (e) {
                                var t = g((e = u.processRules(e, v.chat, 'PlusFriend.chat')));
                                u.windowOpen(t, d, p);
                            });
                        var v = {
                            createAddFriendButton: {
                                required: {
                                    container: c.passesOneOf([c.isElement, c.isString]),
                                    plusFriendId: c.isString,
                                },
                                optional: {
                                    color: c.isOneOf(['yellow', 'black']),
                                    shape: c.isOneOf(['rect', 'round']),
                                    size: c.isOneOf(['small', 'large']),
                                    supportMultipleDensities: c.isBoolean,
                                },
                                defaults: function (e) {
                                    var t = c.getElement(e.container);
                                    return t
                                        ? {
                                              plusFriendId: t.getAttribute('data-plusfriend-id'),
                                              color: t.getAttribute('data-color') || 'yellow',
                                              shape: t.getAttribute('data-shape') || 'rect',
                                              size: t.getAttribute('data-size') || 'small',
                                              supportMultipleDensities: !!t.getAttribute(
                                                  'data-support-multiple-densities',
                                              ),
                                          }
                                        : null;
                                },
                            },
                            addFriend: { required: { plusFriendId: c.isString } },
                            createChatButton: {
                                required: {
                                    container: c.passesOneOf([c.isElement, c.isString]),
                                    plusFriendId: c.isString,
                                },
                                optional: {
                                    color: c.isOneOf(['yellow', 'mono']),
                                    shape: c.isOneOf(['pc', 'mobile']),
                                    size: c.isOneOf(['small', 'large']),
                                    title: c.isOneOf(['consult', 'question']),
                                    supportMultipleDensities: c.isBoolean,
                                },
                                defaults: function (e) {
                                    var t = c.getElement(e.container);
                                    return t
                                        ? {
                                              plusFriendId: t.getAttribute('data-plusfriend-id'),
                                              color: t.getAttribute('data-color') || 'yellow',
                                              shape: t.getAttribute('data-shape') || 'pc',
                                              size: t.getAttribute('data-size') || 'small',
                                              title: t.getAttribute('data-title') || 'consult',
                                              supportMultipleDensities: !!t.getAttribute(
                                                  'data-support-multiple-densities',
                                              ),
                                          }
                                        : null;
                                },
                            },
                            chat: { required: { plusFriendId: c.isString } },
                        };
                        return (
                            (e.cleanup = function () {
                                c.each(f, function (e) {
                                    e();
                                }),
                                    (f.length = 0);
                            }),
                            e
                        );
                    })();
                },
                { './browserProxy.js': 9, './common.js': 11, './util.js': 24 },
            ],
            23: [
                function (t, e, n) {
                    e.exports = (function () {
                        var e = {},
                            l = t('./util.js'),
                            d = t('./common.js'),
                            c = t('../vendor/web2app.js'),
                            s = 'kakaostory_social_plugin',
                            u = 'width=670, height=471',
                            p = [];
                        (e.createShareButton = function (e) {
                            e = d.processRules(e, f.createShareButton, 'Story.createShareButton');
                            var r = l.getElement(e.container);
                            if (!r)
                                throw new d.KakaoError(
                                    'container is required for KakaoStory share button: pass in element or id',
                                );
                            var i = document.createElement('a'),
                                o = document.createElement('img');
                            i.appendChild(o);
                            var t = m(e.url, e.text);
                            i.setAttribute('href', t), i.setAttribute('target', '_blank');
                            var n = function n(e) {
                                e.preventDefault ? e.preventDefault() : (e.returnValue = !1), d.windowOpen(t, s, u);
                            };
                            l.addEvent(i, 'click', n);
                            var a = function a() {
                                l.removeEvent(i, 'click', n), r.removeChild(i);
                            };
                            p.push(a),
                                (o.onload = function (e) {
                                    var t, n;
                                    r.appendChild(i),
                                        (n =
                                            d.UA.browser.msie && parseInt(d.UA.browser.version.major) <= 10
                                                ? ((t = o.width), o.height)
                                                : ((t = e.target.width), e.target.height)),
                                        (o.width = t),
                                        (o.height = n);
                                }),
                                (o.src = d.URL.storyIcon);
                        }),
                            (e.share = function (e) {
                                var t = m((e = d.processRules(e, f.share, 'Story.share')).url, e.text);
                                d.windowOpen(t, s, u);
                            }),
                            (e.open = function (e) {
                                var t,
                                    n,
                                    r =
                                        ((e = d.processRules(e, f.open, 'Story.open')).text ? e.text + '\n' : '') +
                                        (e.url || ''),
                                    i = location.hostname || '';
                                e.urlInfo &&
                                    (n = (t = d.processRules(e.urlInfo, f.openUrlInfo, 'Story.open')).name || '');
                                var o = (function s(e, t, n, r) {
                                        var i = { post: e, appver: d.VERSION, appid: t, apiver: '1.0', appname: n };
                                        r && (i.urlinfo = r);
                                        return l.extend(i, h()), 'storylink://posting?' + l.buildQueryString(i);
                                    })(r, i, n || i, JSON.stringify(t)),
                                    a = {
                                        urlScheme: o,
                                        intentURI:
                                            'intent:' +
                                            o +
                                            '#Intent;' +
                                            (!0 === e.install ? 'package=com.kakao.story;' : '') +
                                            'end;',
                                        appname: 'KakaoStory',
                                        storeURL: d.getInstallUrl('com.kakao.story', '486244601'),
                                        onUnsupportedEnvironment: function () {
                                            e.fail && e.fail();
                                        },
                                    };
                                c(a);
                            });
                        var i = 0;
                        e.createFollowButton = function (e) {
                            e = d.processRules(e, f.createFollowButton, 'Story.createFollowButton');
                            var t = l.getElement(e.container);
                            if (!t)
                                throw new d.KakaoError(
                                    'container is required for KakaoStory follow button: pass in element or id',
                                );
                            var o = document.createElement('iframe'),
                                a = i++;
                            (o.src = (function r(e, t) {
                                var n = { id: e.id, type: e.type, hideFollower: !e.showFollowerCount, frameId: t };
                                return l.extend(n, h()), d.URL.channelFollow + '?' + l.buildQueryString(n);
                            })(e, a)),
                                o.setAttribute('frameborder', '0'),
                                o.setAttribute('marginwidth', '0'),
                                o.setAttribute('marginheight', '0'),
                                o.setAttribute('scrolling', 'no');
                            var s = e.showFollowerCount && 'horizontal' === e.type ? 85 : 59,
                                c = e.showFollowerCount && 'vertical' === e.type ? 46 : 20;
                            (o.style.width = s + 'px'), (o.style.height = c + 'px');
                            var u = function u(e) {
                                if (e.data && /\.kakao\.com$/.test(e.origin) && 'string' == typeof e.data) {
                                    var t = e.data.split(','),
                                        n = parseInt(t[0], 10),
                                        r = parseInt(t[1], 10),
                                        i = parseInt(t[2], 10);
                                    if (n !== a) return;
                                    s !== r && ((s = r), (o.style.width = r + 'px')),
                                        c !== i && ((c = i), (o.style.height = i + 'px'));
                                }
                            };
                            t.appendChild(o), l.addEvent(window, 'message', u);
                            var n = function n() {
                                l.removeEvent(window, 'message', u), t.removeChild(o);
                            };
                            p.push(n);
                        };
                        var f = {
                            createShareButton: {
                                required: { container: l.passesOneOf([l.isElement, l.isString]) },
                                optional: { url: l.isString, text: l.isString },
                                defaults: function (e) {
                                    var t = l.getElement(e.container);
                                    return t ? { url: t.getAttribute('data-url') || location.href } : null;
                                },
                            },
                            share: {
                                optional: { url: l.isString, text: l.isString },
                                defaults: { url: location.href },
                            },
                            open: {
                                optional: {
                                    url: l.isString,
                                    text: l.isString,
                                    urlInfo: l.isObject,
                                    install: l.isBoolean,
                                },
                                defaults: { url: location.href, install: !1 },
                            },
                            openUrlInfo: {
                                required: { title: l.isString },
                                optional: {
                                    desc: l.isString,
                                    name: l.isString,
                                    images: l.isArray,
                                    imageurl: l.isArray,
                                    type: l.isString,
                                },
                                defaults: { type: 'website' },
                                before: function (e) {
                                    e.images && ((e.imageurl = e.images), delete e.images);
                                },
                            },
                            createFollowButton: {
                                required: { container: l.passesOneOf([l.isElement, l.isString]), id: l.isString },
                                optional: {
                                    type: l.isOneOf(['horizontal', 'vertical']),
                                    showFollowerCount: l.isBoolean,
                                },
                                defaults: function (e) {
                                    var t = l.getElement(e.container);
                                    if (t) {
                                        var n = {
                                                type: t.getAttribute('data-type') || 'horizontal',
                                                showFollowerCount:
                                                    'false' !== t.getAttribute('data-show-follower-count'),
                                            },
                                            r = t.getAttribute('data-id');
                                        return r && (n.id = r), n;
                                    }
                                    return null;
                                },
                                after: function (e) {
                                    '@' !== e.id.substr(0, 1) && (e.id = '@' + e.id);
                                },
                            },
                        };
                        function m(e, t) {
                            var n = { url: e };
                            return t && (n.text = t), l.extend(n, h()), d.URL.storyShare + '?' + l.buildQueryString(n);
                        }
                        function h() {
                            var e = { kakao_agent: d.KAKAO_AGENT };
                            return d.RUNTIME.appKey && (e.app_key = d.RUNTIME.appKey), e;
                        }
                        return (
                            (e.cleanup = function () {
                                l.each(p, function (e, t) {
                                    e();
                                }),
                                    (p.length = 0);
                            }),
                            e
                        );
                    })();
                },
                { '../vendor/web2app.js': 31, './common.js': 11, './util.js': 24 },
            ],
            24: [
                function (e, t, n) {
                    t.exports = (function () {
                        var s = {},
                            a = {},
                            n = Array.prototype,
                            e = Object.prototype,
                            r = n.slice,
                            i = n.concat,
                            o = e.toString,
                            c = e.hasOwnProperty,
                            u = n.forEach,
                            t = n.map,
                            l = n.filter,
                            d = n.every,
                            p = n.some,
                            f = n.indexOf,
                            m = Array.isArray,
                            h = Object.keys,
                            g = (s.each = function (e, t, n) {
                                if (null == e) return e;
                                if (u && e.forEach === u) e.forEach(t, n);
                                else if (e.length === +e.length) {
                                    for (var r = 0, i = e.length; r < i; r++) if (t.call(n, e[r], r, e) === a) return;
                                } else {
                                    var o = s.keys(e);
                                    for (r = 0, i = o.length; r < i; r++) if (t.call(n, e[o[r]], o[r], e) === a) return;
                                }
                                return e;
                            });
                        (s.map = function (e, r, i) {
                            var o = [];
                            return null == e
                                ? o
                                : t && e.map === t
                                ? e.map(r, i)
                                : (g(e, function (e, t, n) {
                                      o.push(r.call(i, e, t, n));
                                  }),
                                  o);
                        }),
                            (s.filter = function (e, r, i) {
                                var o = [];
                                return null == e
                                    ? o
                                    : l && e.filter === l
                                    ? e.filter(r, i)
                                    : (g(e, function (e, t, n) {
                                          r.call(i, e, t, n) && o.push(e);
                                      }),
                                      o);
                            }),
                            (s.every = function (e, r, i) {
                                r || (r = s.identity);
                                var o = !0;
                                return null == e
                                    ? o
                                    : d && e.every === d
                                    ? e.every(r, i)
                                    : (g(e, function (e, t, n) {
                                          if (!(o = o && r.call(i, e, t, n))) return a;
                                      }),
                                      !!o);
                            });
                        var v = (s.any = function (e, r, i) {
                            r || (r = s.identity);
                            var o = !1;
                            return null == e
                                ? o
                                : p && e.some === p
                                ? e.some(r, i)
                                : (g(e, function (e, t, n) {
                                      if (o || (o = r.call(i, e, t, n))) return a;
                                  }),
                                  !!o);
                        });
                        return (
                            (s.contains = function (e, t) {
                                return (
                                    null != e &&
                                    (f && e.indexOf === f
                                        ? -1 != e.indexOf(t)
                                        : v(e, function (e) {
                                              return e === t;
                                          }))
                                );
                            }),
                            (s.difference = function (e) {
                                var t = i.apply(n, r.call(arguments, 1));
                                return s.filter(e, function (e) {
                                    return !s.contains(t, e);
                                });
                            }),
                            (s.partial = function (i) {
                                var o = r.call(arguments, 1);
                                return function () {
                                    for (var e = 0, t = o.slice(), n = 0, r = t.length; n < r; n++)
                                        t[n] === s && (t[n] = arguments[e++]);
                                    for (; e < arguments.length; ) t.push(arguments[e++]);
                                    return i.apply(this, t);
                                };
                            }),
                            (s.after = function (e, t) {
                                return function () {
                                    if (--e < 1) return t.apply(this, arguments);
                                };
                            }),
                            (s.keys = function (e) {
                                if (!s.isObject(e)) return [];
                                if (h) return h(e);
                                var t = [];
                                for (var n in e) s.has(e, n) && t.push(n);
                                return t;
                            }),
                            (s.extend = function (n) {
                                return (
                                    g(r.call(arguments, 1), function (e) {
                                        if (e) for (var t in e) n[t] = e[t];
                                    }),
                                    n
                                );
                            }),
                            (s.defaults = function (n) {
                                return (
                                    g(r.call(arguments, 1), function (e) {
                                        if (e) for (var t in e) void 0 === n[t] && (n[t] = e[t]);
                                    }),
                                    n
                                );
                            }),
                            (s.isElement = function (e) {
                                return !(!e || 1 !== e.nodeType);
                            }),
                            (s.isArray =
                                m ||
                                function (e) {
                                    return '[object Array]' == o.call(e);
                                }),
                            (s.isObject = function (e) {
                                return e === Object(e);
                            }),
                            g(
                                [
                                    'Arguments',
                                    'Function',
                                    'String',
                                    'Number',
                                    'Date',
                                    'RegExp',
                                    'Blob',
                                    'File',
                                    'FileList',
                                ],
                                function (t) {
                                    s['is' + t] = function (e) {
                                        return o.call(e) == '[object ' + t + ']';
                                    };
                                },
                            ),
                            (s.isBoolean = function (e) {
                                return !0 === e || !1 === e || '[object Boolean]' == o.call(e);
                            }),
                            (s.has = function (e, t) {
                                return c.call(e, t);
                            }),
                            (s.identity = function (e) {
                                return e;
                            }),
                            (s.isInteger = function (e) {
                                return s.isNumber(e) && e % 1 == 0;
                            }),
                            (s.emptyFunc = function () {}),
                            (s.getElement = function (e) {
                                return s.isElement(e) ? e : s.isString(e) ? document.querySelector(e) : null;
                            }),
                            (s.addEvent = function (e, t, n) {
                                e.addEventListener
                                    ? e.addEventListener(t, n, !1)
                                    : e.attachEvent && e.attachEvent('on' + t, n);
                            }),
                            (s.removeEvent = function (e, t, n) {
                                e.removeEventListener
                                    ? e.removeEventListener(t, n, !1)
                                    : e.detachEvent && e.detachEvent('on' + t, n);
                            }),
                            (s.buildQueryString = function (e, t) {
                                var n = [];
                                for (var r in e)
                                    if (e.hasOwnProperty(r)) {
                                        var i = e[r];
                                        s.isObject(i) && (i = JSON.stringify(i));
                                        var o = !1 === t ? r : encodeURIComponent(r),
                                            a = !1 === t ? i : encodeURIComponent(i);
                                        n.push(o + '=' + a);
                                    }
                                return n.join('&');
                            }),
                            (s.getRandomString = function () {
                                return Math.random().toString(36).slice(2);
                            }),
                            (s.nullify = function (n) {
                                s.each(n, function (e, t) {
                                    n[t] = null;
                                });
                            }),
                            (s.isOneOf = function (e) {
                                return s.partial(s.contains, e);
                            }),
                            (s.passesOneOf = function (e) {
                                if (!s.isArray(e)) throw new Error('validators should be an Array');
                                return function (t) {
                                    return s.any(e, function (e) {
                                        return e(t);
                                    });
                                };
                            }),
                            (s.isURL = function (e) {
                                return /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(
                                    e,
                                );
                            }),
                            (s.arrayBufferToString = function (e) {
                                var t,
                                    n,
                                    r,
                                    i = '',
                                    o = new Uint8Array(e),
                                    a = o.length,
                                    s = Math.pow(2, 16);
                                for (t = 0; t < a; t += s)
                                    (n = Math.min(s, a - t)),
                                        (r = o.subarray(t, t + n)),
                                        (i += String.fromCharCode.apply(null, r));
                                return i;
                            }),
                            (s.localStorage = (function () {
                                var e = {
                                    _data: {},
                                    setItem: function (e, t) {
                                        return (this._data[e] = String(t));
                                    },
                                    getItem: function (e) {
                                        return this._data.hasOwnProperty(e) ? this._data[e] : null;
                                    },
                                    removeItem: function (e) {
                                        return delete this._data[e];
                                    },
                                    clear: function () {
                                        return (this._data = {});
                                    },
                                };
                                try {
                                    return 'localStorage' in window
                                        ? (window.localStorage.setItem('store', ''),
                                          window.localStorage.removeItem('store'),
                                          window.localStorage)
                                        : e;
                                } catch (t) {
                                    return e;
                                }
                            })()),
                            s
                        );
                    })();
                },
                {},
            ],
            25: [
                function (e, t, n) {
                    t.exports = function () {
                        var r = e('../vendor/userAgent.js')();
                        return {
                            isAndroidWebView: function () {
                                return (
                                    r.os.android &&
                                    ((function e() {
                                        return 2 == r.os.version.major && /Version\/\d+.\d+|/i.test(r.ua);
                                    })() ||
                                        (function t() {
                                            return (
                                                4 == r.os.version.major &&
                                                r.os.version.minor < 4 &&
                                                /Version\/\d+.\d+|/i.test(r.ua)
                                            );
                                        })() ||
                                        (function n() {
                                            return (
                                                /Version\/\d+\.\d+/i.test(r.ua) &&
                                                (/Chrome\/\d+\.\d+\.\d+\.\d+ Mobile/i.test(r.ua) ||
                                                    /; wv\)/i.test(r.ua))
                                            );
                                        })())
                                );
                            },
                            isIOSKakaoTalkWebView: function () {
                                return r.os.ios && /KAKAOTALK/i.test(r.ua);
                            },
                            isAndroidKakaoTalkWebView: function () {
                                return r.os.android && /KAKAOTALK/i.test(r.ua);
                            },
                            isNewerAndroidKakaoTalkWebView: function () {
                                return (
                                    r.os.android &&
                                    /KAKAOTALK/i.test(r.ua) &&
                                    r.browser.chrome &&
                                    71 <= r.browser.version.major
                                );
                            },
                        };
                    };
                },
                { '../vendor/userAgent.js': 30 },
            ],
            26: [
                function (y, e, t) {
                    e.exports = (function () {
                        var s,
                            e = {},
                            c = y('./util.js'),
                            u = y('./common.js'),
                            a = y('./auth.withTalk.poller.js'),
                            r = (y('../vendor/easyXDM.js'), y('./api.js')),
                            l = y('./auth.common.js'),
                            i = y('./auth.js'),
                            d = (y('./common/everntObserver'), []);
                        function p() {
                            s && s.close && s.close();
                        }
                        function f() {
                            return (
                                'width=480, height=700, scrollbars=yes, resizable=1, left=' +
                                (screen.width / 2 -
                                    240 +
                                    (function e() {
                                        return window.screenLeft
                                            ? window.screenLeft
                                            : window.screenX
                                            ? window.screenX
                                            : 0;
                                    })()) +
                                ', top=' +
                                (screen.height / 2 -
                                    350 +
                                    (function t() {
                                        return window.screenTop
                                            ? window.screenTop
                                            : window.screenY
                                            ? window.screenY
                                            : 0;
                                    })())
                            );
                        }
                        var m = function m(e) {
                                var t = {};
                                return (
                                    e.storeKey && (t.store_key = e.storeKey),
                                    e.itemId && (t.item_id = e.itemId),
                                    e.itemName && (t.item_name = e.itemName),
                                    e.itemUrl && (t.item_url = e.itemUrl),
                                    e.price && (t.price = e.price),
                                    e.imageUrl && (t.image_url = e.imageUrl),
                                    e.discountPrice && (t.discount_price = e.discountPrice),
                                    e.discountRate && (t.discount_rate = e.discountRate),
                                    e.imageWidth && (t.image_width = e.imageWidth),
                                    e.imageHeight && (t.image_height = e.imageHeight),
                                    e.oneclickPluginId && (t.oneclick_plugin_id = e.oneclickPluginId),
                                    e.oneclickId && (t.oneclick_id = e.oneclickId),
                                    e.optionPluginId && (t.option_plugin_id = e.optionPluginId),
                                    e.productId && (t.product_id = e.productId),
                                    t
                                );
                            },
                            h = function h(n, e) {
                                function o(e) {
                                    if (200 === e.status && e.response) {
                                        var t = JSON.parse(e.response);
                                        i.setAccessToken(t.access_token, !0),
                                            r
                                                .request({ url: '/v1/api/talk/wishlist/add', data: m(n) })
                                                .then(function (e) {
                                                    n.success(e), n.always(e);
                                                })
                                                ['catch'](function (e) {
                                                    n.fail(e), n.always(e);
                                                });
                                    }
                                }
                                function t(e) {
                                    if (200 === e.status && e.response) {
                                        var t = JSON.parse(e.response);
                                        if ('ok' == t.status && t.code) {
                                            a.stop(), p();
                                            var n =
                                                'grant_type=authorization_code&client_id=' +
                                                u.RUNTIME.appKey +
                                                '&redirect_uri=JS-SDK&code=' +
                                                t.code;
                                            l.getToken(u.URL.authDomain + '/oauth/token', n, o);
                                        } else if (
                                            'error' != t.status ||
                                            ('500' != t.error_code && '600' != t.error_code)
                                        )
                                            try {
                                                'about:blank' == s.location.href && u.UA.os.ios && p();
                                            } catch (r) {
                                                return !1;
                                            }
                                        else a.stop(), p();
                                        !(function i() {
                                            return !((!u.UA.os.ios && !u.UA.os.android) || /KAKAOTALK/i.test(u.UA.ua));
                                        })() &&
                                            s &&
                                            s.closed &&
                                            a.stop();
                                    }
                                }
                                a.start(
                                    function () {
                                        e &&
                                            l.checkAuthorize(
                                                u.URL.authDomain +
                                                    '/apiweb/code.json?client_id=' +
                                                    u.RUNTIME.appKey +
                                                    '&auth_tran_id=' +
                                                    e,
                                                t,
                                            );
                                    },
                                    function () {
                                        var e = {
                                            error: 'timeout',
                                            error_description: 'Account login timed out. Please log in again.',
                                            error_code: '504',
                                            status: 'error',
                                        };
                                        n.fail(e), n.always(e);
                                    },
                                );
                            };
                        function g(e, t) {
                            var n = (function o(e, t) {
                                    return (function n() {
                                        var e = {
                                            client_id: u.RUNTIME.appKey,
                                            redirect_uri: 'JS-SDK',
                                            response_type: 'code',
                                            auth_tran_id: t,
                                            ka: u.KAKAO_AGENT,
                                            origin: window.location.origin,
                                        };
                                        return u.URL.authorize + '?' + c.buildQueryString(e);
                                    })();
                                })(0, t),
                                r = u.URL.wishlistUrl + '?auth_url=' + encodeURIComponent(n);
                            if (!u.UA.os.ios || /KAKAOTALK/i.test(u.UA.ua))
                                return !u.UA.os.android || /KAKAOTALK/i.test(u.UA.ua)
                                    ? r
                                    : 'intent://inappbrowser?url=' +
                                          encodeURIComponent(r) +
                                          '#Intent;scheme=kakaotalk;launchFlags=0x08880000;S.browser_fallback_url=' +
                                          encodeURIComponent(r) +
                                          ';end';
                            var i = u.URL.talkInappScheme + '?url=' + encodeURIComponent(r);
                            return (
                                '' + u.URL.universalKakaoLink + encodeURIComponent(i) + '&web=' + encodeURIComponent(r)
                            );
                        }
                        (e.createAddWishlistButton = function (r) {
                            r = u.processRules(r, v.createAddWishlistButton, 'Wishlist.createAddWishlistButton');
                            var e = c.getElement(r.container);
                            if (!e)
                                throw new u.KakaoError(
                                    'container is required for creating Wishlist.createAddWishlistButton button: pass in element or id',
                                );
                            var t = (function o(e, t, n) {
                                var r = document.createElement('a'),
                                    i = document.createElement('img');
                                return (
                                    r.setAttribute('href', '#'),
                                    i.setAttribute('src', e),
                                    i.setAttribute('alt', t),
                                    i.setAttribute('title', t),
                                    n.supportMultipleDensities &&
                                        i.setAttribute(
                                            'srcset',
                                            [e.replace('.png', '_2X.png 2x'), e.replace('.png', '_3X.png 3x')].join(
                                                ', ',
                                            ),
                                        ),
                                    r.appendChild(i),
                                    r
                                );
                            })(
                                (function a(e) {
                                    var t = 'wishlist_' + e.size + '_yellow_' + e.shape;
                                    return u.URL.resPrefix + '/logos/wishlist/' + t + '.png';
                                })(r),
                                '톡찜 추가 버튼',
                                r,
                            );
                            e.appendChild(t);
                            var i = function i(e) {
                                e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
                                var t = l.getTranId();
                                h(r, t);
                                var n = g(0, t);
                                s = u.windowOpen(n, '_blank', f());
                            };
                            c.addEvent(t, 'click', i);
                            var n = function n() {
                                e.removeChild(t), c.removeEvent(t, 'click', i);
                            };
                            d.push(n);
                        }),
                            (e.addWishlist = function (e) {
                                e = u.processRules(e, v.addWishlist, 'Wishlist.addWishlist');
                                var t = l.getTranId();
                                h(e, t);
                                var n = g(0, t);
                                s = u.windowOpen(n, '_blank', f());
                            });
                        var n = { success: c.emptyFunc, fail: c.emptyFunc, always: c.emptyFunc },
                            t = {
                                success: c.isFunction,
                                fail: c.isFunction,
                                always: c.isFunction,
                                discountPrice: c.isNumber,
                                discountRate: c.isNumber,
                                imageWidth: c.isNumber,
                                imageHeight: c.isNumber,
                                oneclickPluginId: c.isString,
                                oneclickId: c.isString,
                                optionPluginId: c.isString,
                                productId: c.isString,
                                storeKey: c.isString,
                            },
                            o = {
                                itemId: c.isNumber,
                                itemName: c.isString,
                                itemUrl: c.isString,
                                price: c.isNumber,
                                imageUrl: c.isString,
                            },
                            v = {
                                createAddWishlistButton: {
                                    required: c.extend({ container: c.passesOneOf([c.isElement, c.isString]) }, o),
                                    optional: c.extend(
                                        {
                                            size: c.isOneOf(['small', 'large']),
                                            shape: c.isOneOf(['pc', 'mobile']),
                                            supportMultipleDensities: c.isBoolean,
                                        },
                                        t,
                                    ),
                                    defaults: function (e) {
                                        var t = c.getElement(e.container);
                                        return c.extend(
                                            t
                                                ? {
                                                      size: t.getAttribute('data-size') || 'large',
                                                      shape: t.getAttribute('data-shape') || 'pc',
                                                      supportMultipleDensities: !!t.getAttribute(
                                                          'data-support-multiple-densities',
                                                      ),
                                                  }
                                                : {},
                                            n,
                                        );
                                    },
                                },
                                addWishlist: { required: o, optional: t, defaults: n },
                            };
                        return (
                            (e.cleanup = function () {
                                c.each(d, function (e) {
                                    e();
                                }),
                                    (d.length = 0);
                            }),
                            e
                        );
                    })();
                },
                {
                    '../vendor/easyXDM.js': 28,
                    './api.js': 4,
                    './auth.common.js': 5,
                    './auth.js': 6,
                    './auth.withTalk.poller.js': 8,
                    './common.js': 11,
                    './common/everntObserver': 13,
                    './util.js': 24,
                },
            ],
            27: [
                function (e, t, n) {
                    var r, c, i, o, a, u, s, R;
                    t.exports =
                        ((R =
                            R ||
                            (function (s, e) {
                                var t = {},
                                    n = (t.lib = {}),
                                    r = function r() {},
                                    i = (n.Base = {
                                        extend: function (e) {
                                            r.prototype = this;
                                            var t = new r();
                                            return (
                                                e && t.mixIn(e),
                                                t.hasOwnProperty('init') ||
                                                    (t.init = function () {
                                                        t.$super.init.apply(this, arguments);
                                                    }),
                                                ((t.init.prototype = t).$super = this),
                                                t
                                            );
                                        },
                                        create: function () {
                                            var e = this.extend();
                                            return e.init.apply(e, arguments), e;
                                        },
                                        init: function () {},
                                        mixIn: function (e) {
                                            for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                                            e.hasOwnProperty('toString') && (this.toString = e.toString);
                                        },
                                        clone: function () {
                                            return this.init.prototype.extend(this);
                                        },
                                    }),
                                    c = (n.WordArray = i.extend({
                                        init: function (e, t) {
                                            (e = this.words = e || []), (this.sigBytes = null != t ? t : 4 * e.length);
                                        },
                                        toString: function (e) {
                                            return (e || a).stringify(this);
                                        },
                                        concat: function (e) {
                                            var t = this.words,
                                                n = e.words,
                                                r = this.sigBytes;
                                            if (((e = e.sigBytes), this.clamp(), r % 4))
                                                for (var i = 0; i < e; i++)
                                                    t[(r + i) >>> 2] |=
                                                        ((n[i >>> 2] >>> (24 - (i % 4) * 8)) & 255) <<
                                                        (24 - ((r + i) % 4) * 8);
                                            else if (65535 < n.length)
                                                for (i = 0; i < e; i += 4) t[(r + i) >>> 2] = n[i >>> 2];
                                            else t.push.apply(t, n);
                                            return (this.sigBytes += e), this;
                                        },
                                        clamp: function () {
                                            var e = this.words,
                                                t = this.sigBytes;
                                            (e[t >>> 2] &= 4294967295 << (32 - (t % 4) * 8)),
                                                (e.length = s.ceil(t / 4));
                                        },
                                        clone: function () {
                                            var e = i.clone.call(this);
                                            return (e.words = this.words.slice(0)), e;
                                        },
                                        random: function (e) {
                                            for (var t = [], n = 0; n < e; n += 4)
                                                t.push((4294967296 * s.random()) | 0);
                                            return new c.init(t, e);
                                        },
                                    })),
                                    o = (t.enc = {}),
                                    a = (o.Hex = {
                                        stringify: function (e) {
                                            var t = e.words;
                                            e = e.sigBytes;
                                            for (var n = [], r = 0; r < e; r++) {
                                                var i = (t[r >>> 2] >>> (24 - (r % 4) * 8)) & 255;
                                                n.push((i >>> 4).toString(16)), n.push((15 & i).toString(16));
                                            }
                                            return n.join('');
                                        },
                                        parse: function (e) {
                                            for (var t = e.length, n = [], r = 0; r < t; r += 2)
                                                n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << (24 - (r % 8) * 4);
                                            return new c.init(n, t / 2);
                                        },
                                    }),
                                    u = (o.Latin1 = {
                                        stringify: function (e) {
                                            var t = e.words;
                                            e = e.sigBytes;
                                            for (var n = [], r = 0; r < e; r++)
                                                n.push(String.fromCharCode((t[r >>> 2] >>> (24 - (r % 4) * 8)) & 255));
                                            return n.join('');
                                        },
                                        parse: function (e) {
                                            for (var t = e.length, n = [], r = 0; r < t; r++)
                                                n[r >>> 2] |= (255 & e.charCodeAt(r)) << (24 - (r % 4) * 8);
                                            return new c.init(n, t);
                                        },
                                    }),
                                    l = (o.Utf8 = {
                                        stringify: function (e) {
                                            try {
                                                return decodeURIComponent(escape(u.stringify(e)));
                                            } catch (t) {
                                                throw Error('Malformed UTF-8 data');
                                            }
                                        },
                                        parse: function (e) {
                                            return u.parse(unescape(encodeURIComponent(e)));
                                        },
                                    }),
                                    d = (n.BufferedBlockAlgorithm = i.extend({
                                        reset: function () {
                                            (this._data = new c.init()), (this._nDataBytes = 0);
                                        },
                                        _append: function (e) {
                                            'string' == typeof e && (e = l.parse(e)),
                                                this._data.concat(e),
                                                (this._nDataBytes += e.sigBytes);
                                        },
                                        _process: function (e) {
                                            var t = this._data,
                                                n = t.words,
                                                r = t.sigBytes,
                                                i = this.blockSize,
                                                o = r / (4 * i);
                                            if (
                                                ((e =
                                                    (o = e ? s.ceil(o) : s.max((0 | o) - this._minBufferSize, 0)) * i),
                                                (r = s.min(4 * e, r)),
                                                e)
                                            ) {
                                                for (var a = 0; a < e; a += i) this._doProcessBlock(n, a);
                                                (a = n.splice(0, e)), (t.sigBytes -= r);
                                            }
                                            return new c.init(a, r);
                                        },
                                        clone: function () {
                                            var e = i.clone.call(this);
                                            return (e._data = this._data.clone()), e;
                                        },
                                        _minBufferSize: 0,
                                    }));
                                n.Hasher = d.extend({
                                    cfg: i.extend(),
                                    init: function (e) {
                                        (this.cfg = this.cfg.extend(e)), this.reset();
                                    },
                                    reset: function () {
                                        d.reset.call(this), this._doReset();
                                    },
                                    update: function (e) {
                                        return this._append(e), this._process(), this;
                                    },
                                    finalize: function (e) {
                                        return e && this._append(e), this._doFinalize();
                                    },
                                    blockSize: 16,
                                    _createHelper: function (n) {
                                        return function (e, t) {
                                            return new n.init(t).finalize(e);
                                        };
                                    },
                                    _createHmacHelper: function (n) {
                                        return function (e, t) {
                                            return new p.HMAC.init(n, t).finalize(e);
                                        };
                                    },
                                });
                                var p = (t.algo = {});
                                return t;
                            })(Math)),
                        (c = (r = R).lib.WordArray),
                        (r.enc.Base64 = {
                            stringify: function (e) {
                                var t = e.words,
                                    n = e.sigBytes,
                                    r = this._map;
                                e.clamp(), (e = []);
                                for (var i = 0; i < n; i += 3)
                                    for (
                                        var o =
                                                (((t[i >>> 2] >>> (24 - (i % 4) * 8)) & 255) << 16) |
                                                (((t[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 255) << 8) |
                                                ((t[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 255),
                                            a = 0;
                                        a < 4 && i + 0.75 * a < n;
                                        a++
                                    )
                                        e.push(r.charAt((o >>> (6 * (3 - a))) & 63));
                                if ((t = r.charAt(64))) for (; e.length % 4; ) e.push(t);
                                return e.join('');
                            },
                            parse: function (e) {
                                var t = e.length,
                                    n = this._map;
                                (r = n.charAt(64)) && -1 != (r = e.indexOf(r)) && (t = r);
                                for (var r = [], i = 0, o = 0; o < t; o++)
                                    if (o % 4) {
                                        var a = n.indexOf(e.charAt(o - 1)) << ((o % 4) * 2),
                                            s = n.indexOf(e.charAt(o)) >>> (6 - (o % 4) * 2);
                                        (r[i >>> 2] |= (a | s) << (24 - (i % 4) * 8)), i++;
                                    }
                                return c.create(r, i);
                            },
                            _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
                        }),
                        (function (o) {
                            function S(e, t, n, r, i, o, a) {
                                return (((e = e + ((t & n) | (~t & r)) + i + a) << o) | (e >>> (32 - o))) + t;
                            }
                            function A(e, t, n, r, i, o, a) {
                                return (((e = e + ((t & r) | (n & ~r)) + i + a) << o) | (e >>> (32 - o))) + t;
                            }
                            function T(e, t, n, r, i, o, a) {
                                return (((e = e + (t ^ n ^ r) + i + a) << o) | (e >>> (32 - o))) + t;
                            }
                            function O(e, t, n, r, i, o, a) {
                                return (((e = e + (n ^ (t | ~r)) + i + a) << o) | (e >>> (32 - o))) + t;
                            }
                            for (
                                var e = R, t = (r = e.lib).WordArray, n = r.Hasher, r = e.algo, x = [], i = 0;
                                i < 64;
                                i++
                            )
                                x[i] = (4294967296 * o.abs(o.sin(i + 1))) | 0;
                            (r = r.MD5 = n.extend({
                                _doReset: function () {
                                    this._hash = new t.init([1732584193, 4023233417, 2562383102, 271733878]);
                                },
                                _doProcessBlock: function (e, t) {
                                    for (var n = 0; n < 16; n++) {
                                        var r = e[(a = t + n)];
                                        e[a] =
                                            (16711935 & ((r << 8) | (r >>> 24))) |
                                            (4278255360 & ((r << 24) | (r >>> 8)));
                                    }
                                    n = this._hash.words;
                                    var i,
                                        o,
                                        a = e[t + 0],
                                        s = ((r = e[t + 1]), e[t + 2]),
                                        c = e[t + 3],
                                        u = e[t + 4],
                                        l = e[t + 5],
                                        d = e[t + 6],
                                        p = e[t + 7],
                                        f = e[t + 8],
                                        m = e[t + 9],
                                        h = e[t + 10],
                                        g = e[t + 11],
                                        v = e[t + 12],
                                        y = e[t + 13],
                                        k = e[t + 14],
                                        b = e[t + 15],
                                        w = n[0],
                                        _ = O(
                                            (_ = O(
                                                (_ = O(
                                                    (_ = O(
                                                        (_ = T(
                                                            (_ = T(
                                                                (_ = T(
                                                                    (_ = T(
                                                                        (_ = A(
                                                                            (_ = A(
                                                                                (_ = A(
                                                                                    (_ = A(
                                                                                        (_ = S(
                                                                                            (_ = S(
                                                                                                (_ = S(
                                                                                                    (_ = S(
                                                                                                        (_ = n[1]),
                                                                                                        (o = S(
                                                                                                            (o = n[2]),
                                                                                                            (i = S(
                                                                                                                (i =
                                                                                                                    n[3]),
                                                                                                                (w = S(
                                                                                                                    w,
                                                                                                                    _,
                                                                                                                    o,
                                                                                                                    i,
                                                                                                                    a,
                                                                                                                    7,
                                                                                                                    x[0],
                                                                                                                )),
                                                                                                                _,
                                                                                                                o,
                                                                                                                r,
                                                                                                                12,
                                                                                                                x[1],
                                                                                                            )),
                                                                                                            w,
                                                                                                            _,
                                                                                                            s,
                                                                                                            17,
                                                                                                            x[2],
                                                                                                        )),
                                                                                                        i,
                                                                                                        w,
                                                                                                        c,
                                                                                                        22,
                                                                                                        x[3],
                                                                                                    )),
                                                                                                    (o = S(
                                                                                                        o,
                                                                                                        (i = S(
                                                                                                            i,
                                                                                                            (w = S(
                                                                                                                w,
                                                                                                                _,
                                                                                                                o,
                                                                                                                i,
                                                                                                                u,
                                                                                                                7,
                                                                                                                x[4],
                                                                                                            )),
                                                                                                            _,
                                                                                                            o,
                                                                                                            l,
                                                                                                            12,
                                                                                                            x[5],
                                                                                                        )),
                                                                                                        w,
                                                                                                        _,
                                                                                                        d,
                                                                                                        17,
                                                                                                        x[6],
                                                                                                    )),
                                                                                                    i,
                                                                                                    w,
                                                                                                    p,
                                                                                                    22,
                                                                                                    x[7],
                                                                                                )),
                                                                                                (o = S(
                                                                                                    o,
                                                                                                    (i = S(
                                                                                                        i,
                                                                                                        (w = S(
                                                                                                            w,
                                                                                                            _,
                                                                                                            o,
                                                                                                            i,
                                                                                                            f,
                                                                                                            7,
                                                                                                            x[8],
                                                                                                        )),
                                                                                                        _,
                                                                                                        o,
                                                                                                        m,
                                                                                                        12,
                                                                                                        x[9],
                                                                                                    )),
                                                                                                    w,
                                                                                                    _,
                                                                                                    h,
                                                                                                    17,
                                                                                                    x[10],
                                                                                                )),
                                                                                                i,
                                                                                                w,
                                                                                                g,
                                                                                                22,
                                                                                                x[11],
                                                                                            )),
                                                                                            (o = S(
                                                                                                o,
                                                                                                (i = S(
                                                                                                    i,
                                                                                                    (w = S(
                                                                                                        w,
                                                                                                        _,
                                                                                                        o,
                                                                                                        i,
                                                                                                        v,
                                                                                                        7,
                                                                                                        x[12],
                                                                                                    )),
                                                                                                    _,
                                                                                                    o,
                                                                                                    y,
                                                                                                    12,
                                                                                                    x[13],
                                                                                                )),
                                                                                                w,
                                                                                                _,
                                                                                                k,
                                                                                                17,
                                                                                                x[14],
                                                                                            )),
                                                                                            i,
                                                                                            w,
                                                                                            b,
                                                                                            22,
                                                                                            x[15],
                                                                                        )),
                                                                                        (o = A(
                                                                                            o,
                                                                                            (i = A(
                                                                                                i,
                                                                                                (w = A(
                                                                                                    w,
                                                                                                    _,
                                                                                                    o,
                                                                                                    i,
                                                                                                    r,
                                                                                                    5,
                                                                                                    x[16],
                                                                                                )),
                                                                                                _,
                                                                                                o,
                                                                                                d,
                                                                                                9,
                                                                                                x[17],
                                                                                            )),
                                                                                            w,
                                                                                            _,
                                                                                            g,
                                                                                            14,
                                                                                            x[18],
                                                                                        )),
                                                                                        i,
                                                                                        w,
                                                                                        a,
                                                                                        20,
                                                                                        x[19],
                                                                                    )),
                                                                                    (o = A(
                                                                                        o,
                                                                                        (i = A(
                                                                                            i,
                                                                                            (w = A(
                                                                                                w,
                                                                                                _,
                                                                                                o,
                                                                                                i,
                                                                                                l,
                                                                                                5,
                                                                                                x[20],
                                                                                            )),
                                                                                            _,
                                                                                            o,
                                                                                            h,
                                                                                            9,
                                                                                            x[21],
                                                                                        )),
                                                                                        w,
                                                                                        _,
                                                                                        b,
                                                                                        14,
                                                                                        x[22],
                                                                                    )),
                                                                                    i,
                                                                                    w,
                                                                                    u,
                                                                                    20,
                                                                                    x[23],
                                                                                )),
                                                                                (o = A(
                                                                                    o,
                                                                                    (i = A(
                                                                                        i,
                                                                                        (w = A(
                                                                                            w,
                                                                                            _,
                                                                                            o,
                                                                                            i,
                                                                                            m,
                                                                                            5,
                                                                                            x[24],
                                                                                        )),
                                                                                        _,
                                                                                        o,
                                                                                        k,
                                                                                        9,
                                                                                        x[25],
                                                                                    )),
                                                                                    w,
                                                                                    _,
                                                                                    c,
                                                                                    14,
                                                                                    x[26],
                                                                                )),
                                                                                i,
                                                                                w,
                                                                                f,
                                                                                20,
                                                                                x[27],
                                                                            )),
                                                                            (o = A(
                                                                                o,
                                                                                (i = A(
                                                                                    i,
                                                                                    (w = A(w, _, o, i, y, 5, x[28])),
                                                                                    _,
                                                                                    o,
                                                                                    s,
                                                                                    9,
                                                                                    x[29],
                                                                                )),
                                                                                w,
                                                                                _,
                                                                                p,
                                                                                14,
                                                                                x[30],
                                                                            )),
                                                                            i,
                                                                            w,
                                                                            v,
                                                                            20,
                                                                            x[31],
                                                                        )),
                                                                        (o = T(
                                                                            o,
                                                                            (i = T(
                                                                                i,
                                                                                (w = T(w, _, o, i, l, 4, x[32])),
                                                                                _,
                                                                                o,
                                                                                f,
                                                                                11,
                                                                                x[33],
                                                                            )),
                                                                            w,
                                                                            _,
                                                                            g,
                                                                            16,
                                                                            x[34],
                                                                        )),
                                                                        i,
                                                                        w,
                                                                        k,
                                                                        23,
                                                                        x[35],
                                                                    )),
                                                                    (o = T(
                                                                        o,
                                                                        (i = T(
                                                                            i,
                                                                            (w = T(w, _, o, i, r, 4, x[36])),
                                                                            _,
                                                                            o,
                                                                            u,
                                                                            11,
                                                                            x[37],
                                                                        )),
                                                                        w,
                                                                        _,
                                                                        p,
                                                                        16,
                                                                        x[38],
                                                                    )),
                                                                    i,
                                                                    w,
                                                                    h,
                                                                    23,
                                                                    x[39],
                                                                )),
                                                                (o = T(
                                                                    o,
                                                                    (i = T(
                                                                        i,
                                                                        (w = T(w, _, o, i, y, 4, x[40])),
                                                                        _,
                                                                        o,
                                                                        a,
                                                                        11,
                                                                        x[41],
                                                                    )),
                                                                    w,
                                                                    _,
                                                                    c,
                                                                    16,
                                                                    x[42],
                                                                )),
                                                                i,
                                                                w,
                                                                d,
                                                                23,
                                                                x[43],
                                                            )),
                                                            (o = T(
                                                                o,
                                                                (i = T(
                                                                    i,
                                                                    (w = T(w, _, o, i, m, 4, x[44])),
                                                                    _,
                                                                    o,
                                                                    v,
                                                                    11,
                                                                    x[45],
                                                                )),
                                                                w,
                                                                _,
                                                                b,
                                                                16,
                                                                x[46],
                                                            )),
                                                            i,
                                                            w,
                                                            s,
                                                            23,
                                                            x[47],
                                                        )),
                                                        (o = O(
                                                            o,
                                                            (i = O(
                                                                i,
                                                                (w = O(w, _, o, i, a, 6, x[48])),
                                                                _,
                                                                o,
                                                                p,
                                                                10,
                                                                x[49],
                                                            )),
                                                            w,
                                                            _,
                                                            k,
                                                            15,
                                                            x[50],
                                                        )),
                                                        i,
                                                        w,
                                                        l,
                                                        21,
                                                        x[51],
                                                    )),
                                                    (o = O(
                                                        o,
                                                        (i = O(
                                                            i,
                                                            (w = O(w, _, o, i, v, 6, x[52])),
                                                            _,
                                                            o,
                                                            c,
                                                            10,
                                                            x[53],
                                                        )),
                                                        w,
                                                        _,
                                                        h,
                                                        15,
                                                        x[54],
                                                    )),
                                                    i,
                                                    w,
                                                    r,
                                                    21,
                                                    x[55],
                                                )),
                                                (o = O(
                                                    o,
                                                    (i = O(i, (w = O(w, _, o, i, f, 6, x[56])), _, o, b, 10, x[57])),
                                                    w,
                                                    _,
                                                    d,
                                                    15,
                                                    x[58],
                                                )),
                                                i,
                                                w,
                                                y,
                                                21,
                                                x[59],
                                            )),
                                            (o = O(
                                                o,
                                                (i = O(i, (w = O(w, _, o, i, u, 6, x[60])), _, o, g, 10, x[61])),
                                                w,
                                                _,
                                                s,
                                                15,
                                                x[62],
                                            )),
                                            i,
                                            w,
                                            m,
                                            21,
                                            x[63],
                                        );
                                    (n[0] = (n[0] + w) | 0),
                                        (n[1] = (n[1] + _) | 0),
                                        (n[2] = (n[2] + o) | 0),
                                        (n[3] = (n[3] + i) | 0);
                                },
                                _doFinalize: function () {
                                    var e = this._data,
                                        t = e.words,
                                        n = 8 * this._nDataBytes,
                                        r = 8 * e.sigBytes;
                                    t[r >>> 5] |= 128 << (24 - (r % 32));
                                    var i = o.floor(n / 4294967296);
                                    for (
                                        t[15 + (((r + 64) >>> 9) << 4)] =
                                            (16711935 & ((i << 8) | (i >>> 24))) |
                                            (4278255360 & ((i << 24) | (i >>> 8))),
                                            t[14 + (((r + 64) >>> 9) << 4)] =
                                                (16711935 & ((n << 8) | (n >>> 24))) |
                                                (4278255360 & ((n << 24) | (n >>> 8))),
                                            e.sigBytes = 4 * (t.length + 1),
                                            this._process(),
                                            t = (e = this._hash).words,
                                            n = 0;
                                        n < 4;
                                        n++
                                    )
                                        (r = t[n]),
                                            (t[n] =
                                                (16711935 & ((r << 8) | (r >>> 24))) |
                                                (4278255360 & ((r << 24) | (r >>> 8))));
                                    return e;
                                },
                                clone: function () {
                                    var e = n.clone.call(this);
                                    return (e._hash = this._hash.clone()), e;
                                },
                            })),
                                (e.MD5 = n._createHelper(r)),
                                (e.HmacMD5 = n._createHmacHelper(r));
                        })(Math),
                        (a = (i = (o = R).lib).Base),
                        (u = i.WordArray),
                        (s = (i = o.algo).EvpKDF = a.extend({
                            cfg: a.extend({ keySize: 4, hasher: i.MD5, iterations: 1 }),
                            init: function (e) {
                                this.cfg = this.cfg.extend(e);
                            },
                            compute: function (e, t) {
                                for (
                                    var n = (a = this.cfg).hasher.create(),
                                        r = u.create(),
                                        i = r.words,
                                        o = a.keySize,
                                        a = a.iterations;
                                    i.length < o;

                                ) {
                                    s && n.update(s);
                                    var s = n.update(e).finalize(t);
                                    n.reset();
                                    for (var c = 1; c < a; c++) (s = n.finalize(s)), n.reset();
                                    r.concat(s);
                                }
                                return (r.sigBytes = 4 * o), r;
                            },
                        })),
                        (o.EvpKDF = function (e, t, n) {
                            return s.create(n).compute(e, t);
                        }),
                        R.lib.Cipher ||
                            (function (e) {
                                var t = (f = R).lib,
                                    n = t.Base,
                                    a = t.WordArray,
                                    r = t.BufferedBlockAlgorithm,
                                    i = f.enc.Base64,
                                    o = f.algo.EvpKDF,
                                    s = (t.Cipher = r.extend({
                                        cfg: n.extend(),
                                        createEncryptor: function (e, t) {
                                            return this.create(this._ENC_XFORM_MODE, e, t);
                                        },
                                        createDecryptor: function (e, t) {
                                            return this.create(this._DEC_XFORM_MODE, e, t);
                                        },
                                        init: function (e, t, n) {
                                            (this.cfg = this.cfg.extend(n)),
                                                (this._xformMode = e),
                                                (this._key = t),
                                                this.reset();
                                        },
                                        reset: function () {
                                            r.reset.call(this), this._doReset();
                                        },
                                        process: function (e) {
                                            return this._append(e), this._process();
                                        },
                                        finalize: function (e) {
                                            return e && this._append(e), this._doFinalize();
                                        },
                                        keySize: 4,
                                        ivSize: 4,
                                        _ENC_XFORM_MODE: 1,
                                        _DEC_XFORM_MODE: 2,
                                        _createHelper: function (r) {
                                            return {
                                                encrypt: function (e, t, n) {
                                                    return ('string' == typeof t ? m : p).encrypt(r, e, t, n);
                                                },
                                                decrypt: function (e, t, n) {
                                                    return ('string' == typeof t ? m : p).decrypt(r, e, t, n);
                                                },
                                            };
                                        },
                                    }));
                                t.StreamCipher = s.extend({
                                    _doFinalize: function () {
                                        return this._process(!0);
                                    },
                                    blockSize: 1,
                                });
                                var c = (f.mode = {}),
                                    u = function u(e, t, n) {
                                        var r = this._iv;
                                        r ? (this._iv = void 0) : (r = this._prevBlock);
                                        for (var i = 0; i < n; i++) e[t + i] ^= r[i];
                                    },
                                    l = (t.BlockCipherMode = n.extend({
                                        createEncryptor: function (e, t) {
                                            return this.Encryptor.create(e, t);
                                        },
                                        createDecryptor: function (e, t) {
                                            return this.Decryptor.create(e, t);
                                        },
                                        init: function (e, t) {
                                            (this._cipher = e), (this._iv = t);
                                        },
                                    })).extend();
                                (l.Encryptor = l.extend({
                                    processBlock: function (e, t) {
                                        var n = this._cipher,
                                            r = n.blockSize;
                                        u.call(this, e, t, r),
                                            n.encryptBlock(e, t),
                                            (this._prevBlock = e.slice(t, t + r));
                                    },
                                })),
                                    (l.Decryptor = l.extend({
                                        processBlock: function (e, t) {
                                            var n = this._cipher,
                                                r = n.blockSize,
                                                i = e.slice(t, t + r);
                                            n.decryptBlock(e, t), u.call(this, e, t, r), (this._prevBlock = i);
                                        },
                                    })),
                                    (c = c.CBC = l),
                                    (l = (f.pad = {}).Pkcs7 = {
                                        pad: function (e, t) {
                                            for (
                                                var n,
                                                    r =
                                                        ((n = (n = 4 * t) - (e.sigBytes % n)) << 24) |
                                                        (n << 16) |
                                                        (n << 8) |
                                                        n,
                                                    i = [],
                                                    o = 0;
                                                o < n;
                                                o += 4
                                            )
                                                i.push(r);
                                            (n = a.create(i, n)), e.concat(n);
                                        },
                                        unpad: function (e) {
                                            e.sigBytes -= 255 & e.words[(e.sigBytes - 1) >>> 2];
                                        },
                                    }),
                                    (t.BlockCipher = s.extend({
                                        cfg: s.cfg.extend({ mode: c, padding: l }),
                                        reset: function () {
                                            s.reset.call(this);
                                            var e = (t = this.cfg).iv,
                                                t = t.mode;
                                            if (this._xformMode == this._ENC_XFORM_MODE) var n = t.createEncryptor;
                                            else (n = t.createDecryptor), (this._minBufferSize = 1);
                                            this._mode = n.call(t, this, e && e.words);
                                        },
                                        _doProcessBlock: function (e, t) {
                                            this._mode.processBlock(e, t);
                                        },
                                        _doFinalize: function () {
                                            var e = this.cfg.padding;
                                            if (this._xformMode == this._ENC_XFORM_MODE) {
                                                e.pad(this._data, this.blockSize);
                                                var t = this._process(!0);
                                            } else (t = this._process(!0)), e.unpad(t);
                                            return t;
                                        },
                                        blockSize: 4,
                                    }));
                                var d = (t.CipherParams = n.extend({
                                        init: function (e) {
                                            this.mixIn(e);
                                        },
                                        toString: function (e) {
                                            return (e || this.formatter).stringify(this);
                                        },
                                    })),
                                    p =
                                        ((c = (f.format = {}).OpenSSL = {
                                            stringify: function (e) {
                                                var t = e.ciphertext;
                                                return ((e = e.salt)
                                                    ? a.create([1398893684, 1701076831]).concat(e).concat(t)
                                                    : t
                                                ).toString(i);
                                            },
                                            parse: function (e) {
                                                var t = (e = i.parse(e)).words;
                                                if (1398893684 == t[0] && 1701076831 == t[1]) {
                                                    var n = a.create(t.slice(2, 4));
                                                    t.splice(0, 4), (e.sigBytes -= 16);
                                                }
                                                return d.create({ ciphertext: e, salt: n });
                                            },
                                        }),
                                        (t.SerializableCipher = n.extend({
                                            cfg: n.extend({ format: c }),
                                            encrypt: function (e, t, n, r) {
                                                r = this.cfg.extend(r);
                                                var i = e.createEncryptor(n, r);
                                                return (
                                                    (t = i.finalize(t)),
                                                    (i = i.cfg),
                                                    d.create({
                                                        ciphertext: t,
                                                        key: n,
                                                        iv: i.iv,
                                                        algorithm: e,
                                                        mode: i.mode,
                                                        padding: i.padding,
                                                        blockSize: e.blockSize,
                                                        formatter: r.format,
                                                    })
                                                );
                                            },
                                            decrypt: function (e, t, n, r) {
                                                return (
                                                    (r = this.cfg.extend(r)),
                                                    (t = this._parse(t, r.format)),
                                                    e.createDecryptor(n, r).finalize(t.ciphertext)
                                                );
                                            },
                                            _parse: function (e, t) {
                                                return 'string' == typeof e ? t.parse(e, this) : e;
                                            },
                                        }))),
                                    f = ((f.kdf = {}).OpenSSL = {
                                        execute: function (e, t, n, r) {
                                            return (
                                                r || (r = a.random(8)),
                                                (e = o.create({ keySize: t + n }).compute(e, r)),
                                                (n = a.create(e.words.slice(t), 4 * n)),
                                                (e.sigBytes = 4 * t),
                                                d.create({ key: e, iv: n, salt: r })
                                            );
                                        },
                                    }),
                                    m = (t.PasswordBasedCipher = p.extend({
                                        cfg: p.cfg.extend({ kdf: f }),
                                        encrypt: function (e, t, n, r) {
                                            return (
                                                (n = (r = this.cfg.extend(r)).kdf.execute(n, e.keySize, e.ivSize)),
                                                (r.iv = n.iv),
                                                (e = p.encrypt.call(this, e, t, n.key, r)).mixIn(n),
                                                e
                                            );
                                        },
                                        decrypt: function (e, t, n, r) {
                                            return (
                                                (r = this.cfg.extend(r)),
                                                (t = this._parse(t, r.format)),
                                                (n = r.kdf.execute(n, e.keySize, e.ivSize, t.salt)),
                                                (r.iv = n.iv),
                                                p.decrypt.call(this, e, t, n.key, r)
                                            );
                                        },
                                    }));
                            })(),
                        (function () {
                            for (
                                var e = R,
                                    t = e.lib.BlockCipher,
                                    n = e.algo,
                                    a = [],
                                    r = [],
                                    i = [],
                                    o = [],
                                    s = [],
                                    c = [],
                                    u = [],
                                    l = [],
                                    d = [],
                                    p = [],
                                    f = [],
                                    m = 0;
                                m < 256;
                                m++
                            )
                                f[m] = m < 128 ? m << 1 : (m << 1) ^ 283;
                            var h = 0,
                                g = 0;
                            for (m = 0; m < 256; m++) {
                                var v = ((v = g ^ (g << 1) ^ (g << 2) ^ (g << 3) ^ (g << 4)) >>> 8) ^ (255 & v) ^ 99;
                                a[h] = v;
                                var y = f[(r[v] = h)],
                                    k = f[y],
                                    b = f[k],
                                    w = (257 * f[v]) ^ (16843008 * v);
                                (i[h] = (w << 24) | (w >>> 8)),
                                    (o[h] = (w << 16) | (w >>> 16)),
                                    (s[h] = (w << 8) | (w >>> 24)),
                                    (c[h] = w),
                                    (w = (16843009 * b) ^ (65537 * k) ^ (257 * y) ^ (16843008 * h)),
                                    (u[v] = (w << 24) | (w >>> 8)),
                                    (l[v] = (w << 16) | (w >>> 16)),
                                    (d[v] = (w << 8) | (w >>> 24)),
                                    (p[v] = w),
                                    h ? ((h = y ^ f[f[f[b ^ y]]]), (g ^= f[f[g]])) : (h = g = 1);
                            }
                            var _ = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
                            (n = n.AES = t.extend({
                                _doReset: function () {
                                    for (
                                        var e = (n = this._key).words,
                                            t = n.sigBytes / 4,
                                            n = 4 * ((this._nRounds = t + 6) + 1),
                                            r = (this._keySchedule = []),
                                            i = 0;
                                        i < n;
                                        i++
                                    )
                                        if (i < t) r[i] = e[i];
                                        else {
                                            var o = r[i - 1];
                                            i % t
                                                ? 6 < t &&
                                                  4 == i % t &&
                                                  (o =
                                                      (a[o >>> 24] << 24) |
                                                      (a[(o >>> 16) & 255] << 16) |
                                                      (a[(o >>> 8) & 255] << 8) |
                                                      a[255 & o])
                                                : ((o =
                                                      (a[(o = (o << 8) | (o >>> 24)) >>> 24] << 24) |
                                                      (a[(o >>> 16) & 255] << 16) |
                                                      (a[(o >>> 8) & 255] << 8) |
                                                      a[255 & o]),
                                                  (o ^= _[(i / t) | 0] << 24)),
                                                (r[i] = r[i - t] ^ o);
                                        }
                                    for (e = this._invKeySchedule = [], t = 0; t < n; t++)
                                        (i = n - t),
                                            (o = t % 4 ? r[i] : r[i - 4]),
                                            (e[t] =
                                                t < 4 || i <= 4
                                                    ? o
                                                    : u[a[o >>> 24]] ^
                                                      l[a[(o >>> 16) & 255]] ^
                                                      d[a[(o >>> 8) & 255]] ^
                                                      p[a[255 & o]]);
                                },
                                encryptBlock: function (e, t) {
                                    this._doCryptBlock(e, t, this._keySchedule, i, o, s, c, a);
                                },
                                decryptBlock: function (e, t) {
                                    var n = e[t + 1];
                                    (e[t + 1] = e[t + 3]),
                                        (e[t + 3] = n),
                                        this._doCryptBlock(e, t, this._invKeySchedule, u, l, d, p, r),
                                        (n = e[t + 1]),
                                        (e[t + 1] = e[t + 3]),
                                        (e[t + 3] = n);
                                },
                                _doCryptBlock: function (e, t, n, r, i, o, a, s) {
                                    for (
                                        var c = this._nRounds,
                                            u = e[t] ^ n[0],
                                            l = e[t + 1] ^ n[1],
                                            d = e[t + 2] ^ n[2],
                                            p = e[t + 3] ^ n[3],
                                            f = 4,
                                            m = 1;
                                        m < c;
                                        m++
                                    ) {
                                        var h =
                                                r[u >>> 24] ^
                                                i[(l >>> 16) & 255] ^
                                                o[(d >>> 8) & 255] ^
                                                a[255 & p] ^
                                                n[f++],
                                            g =
                                                r[l >>> 24] ^
                                                i[(d >>> 16) & 255] ^
                                                o[(p >>> 8) & 255] ^
                                                a[255 & u] ^
                                                n[f++],
                                            v =
                                                r[d >>> 24] ^
                                                i[(p >>> 16) & 255] ^
                                                o[(u >>> 8) & 255] ^
                                                a[255 & l] ^
                                                n[f++];
                                        (p =
                                            r[p >>> 24] ^
                                            i[(u >>> 16) & 255] ^
                                            o[(l >>> 8) & 255] ^
                                            a[255 & d] ^
                                            n[f++]),
                                            (u = h),
                                            (l = g),
                                            (d = v);
                                    }
                                    (h =
                                        ((s[u >>> 24] << 24) |
                                            (s[(l >>> 16) & 255] << 16) |
                                            (s[(d >>> 8) & 255] << 8) |
                                            s[255 & p]) ^
                                        n[f++]),
                                        (g =
                                            ((s[l >>> 24] << 24) |
                                                (s[(d >>> 16) & 255] << 16) |
                                                (s[(p >>> 8) & 255] << 8) |
                                                s[255 & u]) ^
                                            n[f++]),
                                        (v =
                                            ((s[d >>> 24] << 24) |
                                                (s[(p >>> 16) & 255] << 16) |
                                                (s[(u >>> 8) & 255] << 8) |
                                                s[255 & l]) ^
                                            n[f++]),
                                        (p =
                                            ((s[p >>> 24] << 24) |
                                                (s[(u >>> 16) & 255] << 16) |
                                                (s[(l >>> 8) & 255] << 8) |
                                                s[255 & d]) ^
                                            n[f++]),
                                        (e[t] = h),
                                        (e[t + 1] = g),
                                        (e[t + 2] = v),
                                        (e[t + 3] = p);
                                },
                                keySize: 8,
                            })),
                                (e.AES = t._createHelper(n));
                        })(),
                        R);
                },
                {},
            ],
            28: [
                function (e, t, n) {
                    t.exports =
                        ((function (h, l, d, g, p, f) {
                            var s,
                                u,
                                m,
                                c,
                                v,
                                y = this || h,
                                k = Math.floor(1e4 * Math.random()),
                                b = Function.prototype,
                                w = /^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/,
                                n = /[\-\w]+\/\.\.\//,
                                r = /([^:])\/\//g,
                                _ = '',
                                S = {},
                                t = h.easyXDM,
                                A = 'easyXDM_',
                                T = !1;
                            function O(e, t) {
                                var n = _typeof(e[t]);
                                return 'function' == n || !('object' != n || !e[t]) || 'unknown' == n;
                            }
                            function x() {
                                var e,
                                    t = 'Shockwave Flash',
                                    n = 'application/x-shockwave-flash';
                                if (!F(navigator.plugins) && 'object' == _typeof(navigator.plugins[t])) {
                                    var r = navigator.plugins[t].description;
                                    r &&
                                        !F(navigator.mimeTypes) &&
                                        navigator.mimeTypes[n] &&
                                        navigator.mimeTypes[n].enabledPlugin &&
                                        (u = r.match(/\d+/g));
                                }
                                if (!u)
                                    try {
                                        (e = new ActiveXObject('ShockwaveFlash.ShockwaveFlash')),
                                            (u = Array.prototype.slice.call(
                                                e.GetVariable('$version').match(/(\d+),(\d+),(\d+),(\d+)/),
                                                1,
                                            )),
                                            (e = null);
                                    } catch (a) {}
                                if (!u) return !1;
                                var i = parseInt(u[0], 10),
                                    o = parseInt(u[1], 10);
                                return (m = 9 < i && 0 < o), !0;
                            }
                            if (O(h, 'addEventListener'))
                                (c = function c(e, t, n) {
                                    e.addEventListener(t, n, !1);
                                }),
                                    (v = function v(e, t, n) {
                                        e.removeEventListener(t, n, !1);
                                    });
                            else {
                                if (!O(h, 'attachEvent')) throw new Error('Browser not supported');
                                (c = function c(e, t, n) {
                                    e.attachEvent('on' + t, n);
                                }),
                                    (v = function v(e, t, n) {
                                        e.detachEvent('on' + t, n);
                                    });
                            }
                            var e,
                                i = !1,
                                o = [];
                            function a() {
                                if (!i) {
                                    i = !0;
                                    for (var e = 0; e < o.length; e++) o[e]();
                                    o.length = 0;
                                }
                            }
                            if (
                                !(i =
                                    'readyState' in l
                                        ? 'complete' == (e = l.readyState) ||
                                          (~navigator.userAgent.indexOf('AppleWebKit/') &&
                                              ('loaded' == e || 'interactive' == e))
                                        : !!l.body)
                            ) {
                                if (O(h, 'addEventListener')) c(l, 'DOMContentLoaded', a);
                                else if (
                                    (c(l, 'readystatechange', function () {
                                        'complete' == l.readyState && a();
                                    }),
                                    l.documentElement.doScroll && h === top)
                                ) {
                                    var R = function R() {
                                        if (!i) {
                                            try {
                                                l.documentElement.doScroll('left');
                                            } catch (e) {
                                                return void g(R, 1);
                                            }
                                            a();
                                        }
                                    };
                                    R();
                                }
                                c(h, 'load', a);
                            }
                            function E(e, t) {
                                i
                                    ? e.call(t)
                                    : o.push(function () {
                                          e.call(t);
                                      });
                            }
                            function U(e) {
                                return e.match(w)[3];
                            }
                            function I(e) {
                                if (0 <= e.indexOf('file://')) return 'file://';
                                var t = e.toLowerCase().match(w);
                                if (!t) return '';
                                var n = t[2],
                                    r = t[3],
                                    i = t[4] || '';
                                return (
                                    (('http:' == n && ':80' == i) || ('https:' == n && ':443' == i)) && (i = ''),
                                    n + '//' + r + i
                                );
                            }
                            function j(e) {
                                if (!(e = e.replace(r, '$1/')).match(/^(http||https):\/\//)) {
                                    var t = '/' === e.substring(0, 1) ? '' : d.pathname;
                                    '/' !== t.substring(t.length - 1) && (t = t.substring(0, t.lastIndexOf('/') + 1)),
                                        (e = d.protocol + '//' + d.host + t + e);
                                }
                                for (; n.test(e); ) e = e.replace(n, '');
                                return e;
                            }
                            function L(e, t) {
                                var n = '',
                                    r = e.indexOf('#');
                                -1 !== r && ((n = e.substring(r)), (e = e.substring(0, r)));
                                var i = [];
                                for (var o in t) t.hasOwnProperty(o) && i.push(o + '=' + f(t[o]));
                                return e + (T ? '#' : -1 == e.indexOf('?') ? '?' : '&') + i.join('&') + n;
                            }
                            var K = (function (e) {
                                for (var t, n = {}, r = (e = e.substring(1).split('&')).length; r--; )
                                    n[(t = e[r].split('='))[0]] = p(t[1]);
                                return n;
                            })(/xdm_e=/.test(d.search) ? d.search : d.hash);
                            function F(e) {
                                return void 0 === e;
                            }
                            var C,
                                N = function () {
                                    var e = {},
                                        t = { a: [1, 2, 3] },
                                        n = '{"a":[1,2,3]}';
                                    return 'undefined' != typeof JSON &&
                                        'function' == typeof JSON.stringify &&
                                        JSON.stringify(t).replace(/\s/g, '') === n
                                        ? JSON
                                        : (Object.toJSON &&
                                              Object.toJSON(t).replace(/\s/g, '') === n &&
                                              (e.stringify = Object.toJSON),
                                          'function' == typeof String.prototype.evalJSON &&
                                              (t = n.evalJSON()).a &&
                                              3 === t.a.length &&
                                              3 === t.a[2] &&
                                              (e.parse = function (e) {
                                                  return e.evalJSON();
                                              }),
                                          e.stringify && e.parse
                                              ? ((N = function () {
                                                    return e;
                                                }),
                                                e)
                                              : null);
                                };
                            function B(e, t, n) {
                                var r;
                                for (var i in t)
                                    t.hasOwnProperty(i) &&
                                        (i in e
                                            ? 'object' === (void 0 === (r = t[i]) ? 'undefined' : _typeof(r))
                                                ? B(e[i], r, n)
                                                : n || (e[i] = t[i])
                                            : (e[i] = t[i]));
                                return e;
                            }
                            function M(e) {
                                var t;
                                F(s) &&
                                    (function a() {
                                        var e = l.body.appendChild(l.createElement('form')),
                                            t = e.appendChild(l.createElement('input'));
                                        (t.name = A + 'TEST' + k),
                                            (s = t !== e.elements[t.name]),
                                            l.body.removeChild(e);
                                    })(),
                                    s
                                        ? (t = l.createElement('<iframe name="' + e.props.name + '"/>'))
                                        : ((t = l.createElement('IFRAME')).name = e.props.name),
                                    (t.id = t.name = e.props.name),
                                    delete e.props.name,
                                    'string' == typeof e.container && (e.container = l.getElementById(e.container)),
                                    e.container ||
                                        (B(t.style, { position: 'absolute', top: '-2000px', left: '0px' }),
                                        (e.container = l.body));
                                var n = e.props.src;
                                if (
                                    ((e.props.src = 'javascript:false'),
                                    B(t, e.props),
                                    (t.border = t.frameBorder = 0),
                                    (t.allowTransparency = !0),
                                    e.container.appendChild(t),
                                    e.onLoad && c(t, 'load', e.onLoad),
                                    e.usePost)
                                ) {
                                    var r,
                                        i = e.container.appendChild(l.createElement('form'));
                                    if (
                                        ((i.target = t.name),
                                        (i.action = n),
                                        (i.method = 'POST'),
                                        'object' === _typeof(e.usePost))
                                    )
                                        for (var o in e.usePost)
                                            e.usePost.hasOwnProperty(o) &&
                                                (s
                                                    ? (r = l.createElement('<input name="' + o + '"/>'))
                                                    : ((r = l.createElement('INPUT')).name = o),
                                                (r.value = e.usePost[o]),
                                                i.appendChild(r));
                                    i.submit(), i.parentNode.removeChild(i);
                                } else t.src = n;
                                return (e.props.src = n), t;
                            }
                            function P(e) {
                                var t,
                                    n = e.protocol;
                                if (
                                    ((e.isHost = e.isHost || F(K.xdm_p)),
                                    (T = e.hash || !1),
                                    e.props || (e.props = {}),
                                    e.isHost)
                                )
                                    (e.remote = j(e.remote)),
                                        (e.channel = e.channel || 'default' + k++),
                                        (e.secret = Math.random().toString(16).substring(2)),
                                        F(n) &&
                                            (n =
                                                I(d.href) == I(e.remote)
                                                    ? '4'
                                                    : O(h, 'postMessage') || O(l, 'postMessage')
                                                    ? '1'
                                                    : e.swf && O(h, 'ActiveXObject') && x()
                                                    ? '6'
                                                    : 'Gecko' === navigator.product &&
                                                      'frameElement' in h &&
                                                      -1 == navigator.userAgent.indexOf('WebKit')
                                                    ? '5'
                                                    : e.remoteHelper
                                                    ? '2'
                                                    : '0');
                                else if (
                                    ((e.channel = K.xdm_c.replace(/["'<>\\]/g, '')),
                                    (e.secret = K.xdm_s),
                                    (e.remote = K.xdm_e.replace(/["'<>\\]/g, '')),
                                    (n = K.xdm_p),
                                    e.acl &&
                                        !(function c(e, t) {
                                            'string' == typeof e && (e = [e]);
                                            for (var n, r = e.length; r--; )
                                                if (
                                                    ((n =
                                                        '^' === e[r].substr(0, 1) &&
                                                        '$' === e[r].substr(e[r].length - 1, 1)
                                                            ? e[r]
                                                            : '^' +
                                                              e[r]
                                                                  .replace(/[-[\]/{}()+.\^$|]/g, '\\$&')
                                                                  .replace(/(\*)/g, '.$1')
                                                                  .replace(/\?/g, '.') +
                                                              '$'),
                                                    (n = new RegExp(n)).test(t))
                                                )
                                                    return !0;
                                            return !1;
                                        })(e.acl, e.remote))
                                )
                                    throw new Error('Access denied for ' + e.remote);
                                switch ((e.protocol = n)) {
                                    case '0':
                                        if (
                                            (B(
                                                e,
                                                {
                                                    interval: 100,
                                                    delay: 2e3,
                                                    useResize: !0,
                                                    useParent: !1,
                                                    usePolling: !1,
                                                },
                                                !0,
                                            ),
                                            e.isHost)
                                        ) {
                                            if (!e.local) {
                                                for (
                                                    var r,
                                                        i = d.protocol + '//' + d.host,
                                                        o = l.body.getElementsByTagName('img'),
                                                        a = o.length;
                                                    a--;

                                                )
                                                    if ((r = o[a]).src.substring(0, i.length) === i) {
                                                        e.local = r.src;
                                                        break;
                                                    }
                                                e.local || (e.local = h);
                                            }
                                            var s = { xdm_c: e.channel, xdm_p: 0 };
                                            e.local === h
                                                ? ((e.usePolling = !0),
                                                  (e.useParent = !0),
                                                  (e.local = d.protocol + '//' + d.host + d.pathname + d.search),
                                                  (s.xdm_e = e.local),
                                                  (s.xdm_pa = 1))
                                                : (s.xdm_e = j(e.local)),
                                                e.container && ((e.useResize = !1), (s.xdm_po = 1)),
                                                (e.remote = L(e.remote, s));
                                        } else
                                            B(e, {
                                                useParent: !F(K.xdm_pa),
                                                usePolling: !F(K.xdm_po),
                                                useResize: !e.useParent && e.useResize,
                                            });
                                        t = [
                                            new S.stack.HashTransport(e),
                                            new S.stack.ReliableBehavior({}),
                                            new S.stack.QueueBehavior({ encode: !0, maxLength: 4e3 - e.remote.length }),
                                            new S.stack.VerifyBehavior({ initiate: e.isHost }),
                                        ];
                                        break;
                                    case '1':
                                        t = [new S.stack.PostMessageTransport(e)];
                                        break;
                                    case '2':
                                        e.isHost && (e.remoteHelper = j(e.remoteHelper)),
                                            (t = [
                                                new S.stack.NameTransport(e),
                                                new S.stack.QueueBehavior(),
                                                new S.stack.VerifyBehavior({ initiate: e.isHost }),
                                            ]);
                                        break;
                                    case '3':
                                        t = [new S.stack.NixTransport(e)];
                                        break;
                                    case '4':
                                        t = [new S.stack.SameOriginTransport(e)];
                                        break;
                                    case '5':
                                        t = [new S.stack.FrameElementTransport(e)];
                                        break;
                                    case '6':
                                        u || x(), (t = [new S.stack.FlashTransport(e)]);
                                }
                                return t.push(new S.stack.QueueBehavior({ lazy: e.lazy, remove: !0 })), t;
                            }
                            function D(e) {
                                for (
                                    var t,
                                        n = {
                                            incoming: function (e, t) {
                                                this.up.incoming(e, t);
                                            },
                                            outgoing: function (e, t) {
                                                this.down.outgoing(e, t);
                                            },
                                            callback: function (e) {
                                                this.up.callback(e);
                                            },
                                            init: function () {
                                                this.down.init();
                                            },
                                            destroy: function () {
                                                this.down.destroy();
                                            },
                                        },
                                        r = 0,
                                        i = e.length;
                                    r < i;
                                    r++
                                )
                                    B((t = e[r]), n, !0),
                                        0 !== r && (t.down = e[r - 1]),
                                        r !== i - 1 && (t.up = e[r + 1]);
                                return t;
                            }
                            B(S, {
                                version: '2.5.00.1',
                                query: K,
                                stack: {},
                                apply: B,
                                getJSONObject: N,
                                whenReady: E,
                                noConflict: function q(e) {
                                    return (h.easyXDM = t), (_ = e) && (A = 'easyXDM_' + _.replace('.', '_') + '_'), S;
                                },
                            }),
                                (S.DomHelper = {
                                    on: c,
                                    un: v,
                                    requiresJSON: function (e) {
                                        (function n(e, t) {
                                            return !('object' != _typeof(e[t]) || !e[t]);
                                        })(h, 'JSON') ||
                                            l.write('<script type="text/javascript" src="' + e + '"></script>');
                                    },
                                }),
                                (C = {}),
                                (S.Fn = {
                                    set: function (e, t) {
                                        C[e] = t;
                                    },
                                    get: function (e, t) {
                                        if (C.hasOwnProperty(e)) {
                                            var n = C[e];
                                            return t && delete C[e], n;
                                        }
                                    },
                                }),
                                (S.Socket = function (n) {
                                    var t = D(
                                            P(n).concat([
                                                {
                                                    incoming: function (e, t) {
                                                        n.onMessage(e, t);
                                                    },
                                                    callback: function (e) {
                                                        n.onReady && n.onReady(e);
                                                    },
                                                },
                                            ]),
                                        ),
                                        r = I(n.remote);
                                    (this.origin = I(n.remote)),
                                        (this.destroy = function () {
                                            t.destroy();
                                        }),
                                        (this.postMessage = function (e) {
                                            t.outgoing(e, r);
                                        }),
                                        t.init();
                                }),
                                (S.Rpc = function (t, e) {
                                    if (e.local)
                                        for (var n in e.local)
                                            if (e.local.hasOwnProperty(n)) {
                                                var r = e.local[n];
                                                'function' == typeof r && (e.local[n] = { method: r });
                                            }
                                    var i = D(
                                        P(t).concat([
                                            new S.stack.RpcBehavior(this, e),
                                            {
                                                callback: function (e) {
                                                    t.onReady && t.onReady(e);
                                                },
                                            },
                                        ]),
                                    );
                                    (this.origin = I(t.remote)),
                                        (this.context = t.context || null),
                                        (this.destroy = function () {
                                            i.destroy();
                                        }),
                                        i.init();
                                }),
                                (S.stack.SameOriginTransport = function (e) {
                                    var t, n, i, o;
                                    return (t = {
                                        outgoing: function (e, t, n) {
                                            i(e), n && n();
                                        },
                                        destroy: function () {
                                            n && (n.parentNode.removeChild(n), (n = null));
                                        },
                                        onDOMReady: function () {
                                            (o = I(e.remote)),
                                                e.isHost
                                                    ? (B(e.props, {
                                                          src: L(e.remote, {
                                                              xdm_e: d.protocol + '//' + d.host + d.pathname,
                                                              xdm_c: e.channel,
                                                              xdm_p: 4,
                                                          }),
                                                          name: A + e.channel + '_provider',
                                                      }),
                                                      (n = M(e)),
                                                      S.Fn.set(e.channel, function (e) {
                                                          return (
                                                              (i = e),
                                                              g(function () {
                                                                  t.up.callback(!0);
                                                              }, 0),
                                                              function (e) {
                                                                  t.up.incoming(e, o);
                                                              }
                                                          );
                                                      }))
                                                    : ((i = (function r() {
                                                          var e = parent;
                                                          if ('' !== _)
                                                              for (var t = 0, n = _.split('.'); t < n.length; t++)
                                                                  e = e[n[t]];
                                                          return e.easyXDM;
                                                      })().Fn.get(
                                                          e.channel,
                                                          !0,
                                                      )(function (e) {
                                                          t.up.incoming(e, o);
                                                      })),
                                                      g(function () {
                                                          t.up.callback(!0);
                                                      }, 0));
                                        },
                                        init: function () {
                                            E(t.onDOMReady, t);
                                        },
                                    });
                                }),
                                (S.stack.FlashTransport = function (o) {
                                    var n, r, i, a, s;
                                    function c(e, t) {
                                        g(function () {
                                            n.up.incoming(e, i);
                                        }, 0);
                                    }
                                    function u(n) {
                                        var e = o.swf + '?host=' + o.isHost,
                                            t = 'easyXDM_swf_' + Math.floor(1e4 * Math.random());
                                        S.Fn.set('flash_loaded' + n.replace(/[\-.]/g, '_'), function () {
                                            S.stack.FlashTransport[n].swf = a = s.firstChild;
                                            for (var e = S.stack.FlashTransport[n].queue, t = 0; t < e.length; t++)
                                                e[t]();
                                            e.length = 0;
                                        }),
                                            o.swfContainer
                                                ? (s =
                                                      'string' == typeof o.swfContainer
                                                          ? l.getElementById(o.swfContainer)
                                                          : o.swfContainer)
                                                : (B(
                                                      (s = l.createElement('div')).style,
                                                      m && o.swfNoThrottle
                                                          ? {
                                                                height: '20px',
                                                                width: '20px',
                                                                position: 'fixed',
                                                                right: 0,
                                                                top: 0,
                                                            }
                                                          : {
                                                                height: '1px',
                                                                width: '1px',
                                                                position: 'absolute',
                                                                overflow: 'hidden',
                                                                right: 0,
                                                                top: 0,
                                                            },
                                                  ),
                                                  l.body.appendChild(s));
                                        var r =
                                            'callback=flash_loaded' +
                                            f(n.replace(/[\-.]/g, '_')) +
                                            '&proto=' +
                                            y.location.protocol +
                                            '&domain=' +
                                            f(U(y.location.href)) +
                                            '&port=' +
                                            f(
                                                (function i(e) {
                                                    return e.match(w)[4] || '';
                                                })(y.location.href),
                                            ) +
                                            '&ns=' +
                                            f(_);
                                        s.innerHTML =
                                            "<object height='20' width='20' type='application/x-shockwave-flash' id='" +
                                            t +
                                            "' data='" +
                                            e +
                                            "'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='" +
                                            e +
                                            "'></param><param name='flashvars' value='" +
                                            r +
                                            "'></param><embed type='application/x-shockwave-flash' FlashVars='" +
                                            r +
                                            "' allowScriptAccess='always' wmode='transparent' src='" +
                                            e +
                                            "' height='1' width='1'></embed></object>";
                                    }
                                    return (n = {
                                        outgoing: function (e, t, n) {
                                            a.postMessage(o.channel, e.toString()), n && n();
                                        },
                                        destroy: function () {
                                            try {
                                                a.destroyChannel(o.channel);
                                            } catch (e) {}
                                            (a = null), r && (r.parentNode.removeChild(r), (r = null));
                                        },
                                        onDOMReady: function () {
                                            (i = o.remote),
                                                S.Fn.set('flash_' + o.channel + '_init', function () {
                                                    g(function () {
                                                        n.up.callback(!0);
                                                    });
                                                }),
                                                S.Fn.set('flash_' + o.channel + '_onMessage', c),
                                                (o.swf = j(o.swf));
                                            var e = U(o.swf),
                                                t = function t() {
                                                    (S.stack.FlashTransport[e].init = !0),
                                                        (a = S.stack.FlashTransport[e].swf).createChannel(
                                                            o.channel,
                                                            o.secret,
                                                            I(o.remote),
                                                            o.isHost,
                                                        ),
                                                        o.isHost &&
                                                            (m &&
                                                                o.swfNoThrottle &&
                                                                B(o.props, {
                                                                    position: 'fixed',
                                                                    right: 0,
                                                                    top: 0,
                                                                    height: '20px',
                                                                    width: '20px',
                                                                }),
                                                            B(o.props, {
                                                                src: L(o.remote, {
                                                                    xdm_e: I(d.href),
                                                                    xdm_c: o.channel,
                                                                    xdm_p: 6,
                                                                    xdm_s: o.secret,
                                                                }),
                                                                name: A + o.channel + '_provider',
                                                            }),
                                                            (r = M(o)));
                                                };
                                            S.stack.FlashTransport[e] && S.stack.FlashTransport[e].init
                                                ? t()
                                                : S.stack.FlashTransport[e]
                                                ? S.stack.FlashTransport[e].queue.push(t)
                                                : ((S.stack.FlashTransport[e] = { queue: [t] }), u(e));
                                        },
                                        init: function () {
                                            E(n.onDOMReady, n);
                                        },
                                    });
                                }),
                                (S.stack.PostMessageTransport = function (r) {
                                    var i, t, o, a;
                                    function n(e) {
                                        if ('string' == typeof e.data) {
                                            var t = (function n(e) {
                                                if (e.origin) return I(e.origin);
                                                if (e.uri) return I(e.uri);
                                                if (e.domain) return d.protocol + '//' + e.domain;
                                                throw 'Unable to retrieve the origin of the event';
                                            })(e);
                                            t == a &&
                                                'string' == typeof e.data &&
                                                e.data.substring(0, r.channel.length + 1) == r.channel + ' ' &&
                                                i.up.incoming(e.data.substring(r.channel.length + 1), t);
                                        }
                                    }
                                    function s(e) {
                                        e.data == r.channel + '-ready' &&
                                            ((o =
                                                'postMessage' in t.contentWindow
                                                    ? t.contentWindow
                                                    : t.contentWindow.document),
                                            v(h, 'message', s),
                                            c(h, 'message', n),
                                            g(function () {
                                                i.up.callback(!0);
                                            }, 0));
                                    }
                                    return (i = {
                                        outgoing: function (e, t, n) {
                                            o.postMessage(r.channel + ' ' + e, t || a), n && n();
                                        },
                                        destroy: function () {
                                            v(h, 'message', s),
                                                v(h, 'message', n),
                                                t && ((o = null), t.parentNode.removeChild(t), (t = null));
                                        },
                                        onDOMReady: function () {
                                            'file://' === (a = I(r.remote)) && (a = '*'),
                                                r.isHost
                                                    ? (c(h, 'message', s),
                                                      B(r.props, {
                                                          src: L(r.remote, {
                                                              xdm_e: I(d.href),
                                                              xdm_c: r.channel,
                                                              xdm_p: 1,
                                                          }),
                                                          name: A + r.channel + '_provider',
                                                      }),
                                                      (t = M(r)))
                                                    : (c(h, 'message', n),
                                                      (o =
                                                          'postMessage' in h.parent
                                                              ? h.parent
                                                              : h.parent.document).postMessage(r.channel + '-ready', a),
                                                      g(function () {
                                                          i.up.callback(!0);
                                                      }, 0));
                                        },
                                        init: function () {
                                            E(i.onDOMReady, i);
                                        },
                                    });
                                }),
                                (S.stack.FrameElementTransport = function (e) {
                                    var t, n, r, i;
                                    return (t = {
                                        outgoing: function (e, t, n) {
                                            r.call(this, e), n && n();
                                        },
                                        destroy: function () {
                                            n && (n.parentNode.removeChild(n), (n = null));
                                        },
                                        onDOMReady: function () {
                                            (i = I(e.remote)),
                                                e.isHost
                                                    ? (B(e.props, {
                                                          src: L(e.remote, {
                                                              xdm_e: I(d.href),
                                                              xdm_c: e.channel,
                                                              xdm_p: 5,
                                                          }),
                                                          name: A + e.channel + '_provider',
                                                      }),
                                                      ((n = M(e)).fn = function (e) {
                                                          return (
                                                              delete n.fn,
                                                              (r = e),
                                                              g(function () {
                                                                  t.up.callback(!0);
                                                              }, 0),
                                                              function (e) {
                                                                  t.up.incoming(e, i);
                                                              }
                                                          );
                                                      }))
                                                    : (l.referrer &&
                                                          I(l.referrer) != K.xdm_e &&
                                                          (h.top.location = K.xdm_e),
                                                      (r = h.frameElement.fn(function (e) {
                                                          t.up.incoming(e, i);
                                                      })),
                                                      t.up.callback(!0));
                                        },
                                        init: function () {
                                            E(t.onDOMReady, t);
                                        },
                                    });
                                }),
                                (S.stack.NameTransport = function (r) {
                                    var t, i, o, e, a, s, c, u;
                                    function l(e) {
                                        var t = r.remoteHelper + (i ? '#_3' : '#_2') + r.channel;
                                        o.contentWindow.sendMessage(e, t);
                                    }
                                    function d() {
                                        i ? (2 != ++a && i) || t.up.callback(!0) : (l('ready'), t.up.callback(!0));
                                    }
                                    function p(e) {
                                        t.up.incoming(e, c);
                                    }
                                    function f() {
                                        s &&
                                            g(function () {
                                                s(!0);
                                            }, 0);
                                    }
                                    return (t = {
                                        outgoing: function (e, t, n) {
                                            (s = n), l(e);
                                        },
                                        destroy: function () {
                                            o.parentNode.removeChild(o),
                                                (o = null),
                                                i && (e.parentNode.removeChild(e), (e = null));
                                        },
                                        onDOMReady: function () {
                                            (i = r.isHost),
                                                (a = 0),
                                                (c = I(r.remote)),
                                                (r.local = j(r.local)),
                                                i
                                                    ? (S.Fn.set(r.channel, function (e) {
                                                          i && 'ready' === e && (S.Fn.set(r.channel, p), d());
                                                      }),
                                                      (u = L(r.remote, { xdm_e: r.local, xdm_c: r.channel, xdm_p: 2 })),
                                                      B(r.props, {
                                                          src: u + '#' + r.channel,
                                                          name: A + r.channel + '_provider',
                                                      }),
                                                      (e = M(r)))
                                                    : ((r.remoteHelper = r.remote), S.Fn.set(r.channel, p));
                                            var n = function n() {
                                                var e = o || this;
                                                v(e, 'load', n),
                                                    S.Fn.set(r.channel + '_load', f),
                                                    (function t() {
                                                        'function' == typeof e.contentWindow.sendMessage
                                                            ? d()
                                                            : g(t, 50);
                                                    })();
                                            };
                                            o = M({ props: { src: r.local + '#_4' + r.channel }, onLoad: n });
                                        },
                                        init: function () {
                                            E(t.onDOMReady, t);
                                        },
                                    });
                                }),
                                (S.stack.HashTransport = function (i) {
                                    var o, a, e, s, c, u, l, d, p, f;
                                    function t() {
                                        if (l) {
                                            var e = l.location.href,
                                                t = '',
                                                n = e.indexOf('#');
                                            -1 != n && (t = e.substring(n)),
                                                t &&
                                                    t != c &&
                                                    (function r(e) {
                                                        (c = e), o.up.incoming(c.substring(c.indexOf('_') + 1), f);
                                                    })(t);
                                        }
                                    }
                                    function m() {
                                        e = setInterval(t, s);
                                    }
                                    return (o = {
                                        outgoing: function (e, t) {
                                            !(function n(e) {
                                                if (d) {
                                                    var t = i.remote + '#' + u++ + '_' + e;
                                                    (a || !p ? d.contentWindow : d).location = t;
                                                }
                                            })(e);
                                        },
                                        destroy: function () {
                                            h.clearInterval(e), (!a && p) || d.parentNode.removeChild(d), (d = null);
                                        },
                                        onDOMReady: function () {
                                            if (
                                                ((a = i.isHost),
                                                (s = i.interval),
                                                (c = '#' + i.channel),
                                                (u = 0),
                                                (p = i.useParent),
                                                (f = I(i.remote)),
                                                a)
                                            ) {
                                                if (
                                                    (B(i.props, { src: i.remote, name: A + i.channel + '_provider' }),
                                                    p)
                                                )
                                                    i.onLoad = function () {
                                                        (l = h), m(), o.up.callback(!0);
                                                    };
                                                else {
                                                    var t = 0,
                                                        n = i.delay / 50;
                                                    !(function r() {
                                                        if (++t > n)
                                                            throw new Error('Unable to reference listenerwindow');
                                                        try {
                                                            l = d.contentWindow.frames[A + i.channel + '_consumer'];
                                                        } catch (e) {}
                                                        l ? (m(), o.up.callback(!0)) : g(r, 50);
                                                    })();
                                                }
                                                d = M(i);
                                            } else
                                                (l = h),
                                                    m(),
                                                    p
                                                        ? ((d = parent), o.up.callback(!0))
                                                        : (B(i, {
                                                              props: {
                                                                  src: i.remote + '#' + i.channel + new Date(),
                                                                  name: A + i.channel + '_consumer',
                                                              },
                                                              onLoad: function () {
                                                                  o.up.callback(!0);
                                                              },
                                                          }),
                                                          (d = M(i)));
                                        },
                                        init: function () {
                                            E(o.onDOMReady, o);
                                        },
                                    });
                                }),
                                (S.stack.ReliableBehavior = function (e) {
                                    var i,
                                        o,
                                        a = 0,
                                        s = 0,
                                        c = '';
                                    return (i = {
                                        incoming: function (e, t) {
                                            var n = e.indexOf('_'),
                                                r = e.substring(0, n).split(',');
                                            (e = e.substring(n + 1)),
                                                r[0] == a && ((c = ''), o && o(!0)),
                                                0 < e.length &&
                                                    (i.down.outgoing(r[1] + ',' + a + '_' + c, t),
                                                    s != r[1] && ((s = r[1]), i.up.incoming(e, t)));
                                        },
                                        outgoing: function (e, t, n) {
                                            (c = e), (o = n), i.down.outgoing(s + ',' + ++a + '_' + e, t);
                                        },
                                    });
                                }),
                                (S.stack.QueueBehavior = function (o) {
                                    var a,
                                        e,
                                        s = [],
                                        r = !0,
                                        i = '',
                                        c = 0,
                                        u = !1,
                                        l = !1;
                                    function d() {
                                        if (o.remove && 0 === s.length)
                                            !(function n(e) {
                                                (e.up.down = e.down), (e.down.up = e.up), (e.up = e.down = null);
                                            })(a);
                                        else if (!r && 0 !== s.length && !e) {
                                            r = !0;
                                            var t = s.shift();
                                            a.down.outgoing(t.data, t.origin, function (e) {
                                                (r = !1),
                                                    t.callback &&
                                                        g(function () {
                                                            t.callback(e);
                                                        }, 0),
                                                    d();
                                            });
                                        }
                                    }
                                    return (a = {
                                        init: function () {
                                            F(o) && (o = {}),
                                                o.maxLength && ((c = o.maxLength), (l = !0)),
                                                o.lazy ? (u = !0) : a.down.init();
                                        },
                                        callback: function (e) {
                                            r = !1;
                                            var t = a.up;
                                            d(), t.callback(e);
                                        },
                                        incoming: function (e, t) {
                                            if (l) {
                                                var n = e.indexOf('_'),
                                                    r = parseInt(e.substring(0, n), 10);
                                                (i += e.substring(n + 1)),
                                                    0 === r && (o.encode && (i = p(i)), a.up.incoming(i, t), (i = ''));
                                            } else a.up.incoming(e, t);
                                        },
                                        outgoing: function (e, t, n) {
                                            o.encode && (e = f(e));
                                            var r,
                                                i = [];
                                            if (l) {
                                                for (; 0 !== e.length; )
                                                    (r = e.substring(0, c)), (e = e.substring(r.length)), i.push(r);
                                                for (; (r = i.shift()); )
                                                    s.push({
                                                        data: i.length + '_' + r,
                                                        origin: t,
                                                        callback: 0 === i.length ? n : null,
                                                    });
                                            } else s.push({ data: e, origin: t, callback: n });
                                            u ? a.down.init() : d();
                                        },
                                        destroy: function () {
                                            (e = !0), a.down.destroy();
                                        },
                                    });
                                }),
                                (S.stack.VerifyBehavior = function (r) {
                                    var i, o, a;
                                    function s() {
                                        (o = Math.random().toString(16).substring(2)), i.down.outgoing(o);
                                    }
                                    return (i = {
                                        incoming: function (e, t) {
                                            var n = e.indexOf('_');
                                            -1 === n
                                                ? e === o
                                                    ? i.up.callback(!0)
                                                    : a || ((a = e), r.initiate || s(), i.down.outgoing(e))
                                                : e.substring(0, n) === a && i.up.incoming(e.substring(n + 1), t);
                                        },
                                        outgoing: function (e, t, n) {
                                            i.down.outgoing(o + '_' + e, t, n);
                                        },
                                        callback: function (e) {
                                            r.initiate && s();
                                        },
                                    });
                                }),
                                (S.stack.RpcBehavior = function (l, i) {
                                    var t,
                                        o = i.serializer || N(),
                                        a = 0,
                                        s = {};
                                    function d(e) {
                                        (e.jsonrpc = '2.0'), t.down.outgoing(o.stringify(e));
                                    }
                                    function n(r, i) {
                                        var o = Array.prototype.slice;
                                        return function () {
                                            var e,
                                                t = arguments.length,
                                                n = { method: i };
                                            0 < t && 'function' == typeof arguments[t - 1]
                                                ? (1 < t && 'function' == typeof arguments[t - 2]
                                                      ? ((e = { success: arguments[t - 2], error: arguments[t - 1] }),
                                                        (n.params = o.call(arguments, 0, t - 2)))
                                                      : ((e = { success: arguments[t - 1] }),
                                                        (n.params = o.call(arguments, 0, t - 1))),
                                                  (s['' + ++a] = e),
                                                  (n.id = a))
                                                : (n.params = o.call(arguments, 0)),
                                                r.namedParams && 1 === n.params.length && (n.params = n.params[0]),
                                                d(n);
                                        };
                                    }
                                    function c(e, r, t, n) {
                                        if (t) {
                                            var i, o;
                                            r
                                                ? ((i = function (e) {
                                                      (i = b), d({ id: r, result: e });
                                                  }),
                                                  (o = function (e, t) {
                                                      o = b;
                                                      var n = { id: r, error: { code: -32099, message: e } };
                                                      t && (n.error.data = t), d(n);
                                                  }))
                                                : (i = o = b),
                                                (function c(e) {
                                                    return '[object Array]' === Object.prototype.toString.call(e);
                                                })(n) || (n = [n]);
                                            try {
                                                var a = l.context || t.scope,
                                                    s = t.method.apply(a, n.concat([i, o]));
                                                F(s) || i(s);
                                            } catch (u) {
                                                o(u.message);
                                            }
                                        } else
                                            r && d({ id: r, error: { code: -32601, message: 'Procedure not found.' } });
                                    }
                                    return (t = {
                                        incoming: function (e, t) {
                                            var n = o.parse(e);
                                            if (n.method)
                                                i.handle
                                                    ? i.handle(n, d)
                                                    : c(n.method, n.id, i.local[n.method], n.params);
                                            else {
                                                var r = s[n.id];
                                                n.error
                                                    ? r.error && r.error(n.error)
                                                    : r.success && r.success(n.result),
                                                    delete s[n.id];
                                            }
                                        },
                                        init: function () {
                                            if (i.remote)
                                                for (var e in i.remote)
                                                    i.remote.hasOwnProperty(e) && (l[e] = n(i.remote[e], e));
                                            t.down.init();
                                        },
                                        destroy: function () {
                                            for (var e in i.remote)
                                                i.remote.hasOwnProperty(e) && l.hasOwnProperty(e) && delete l[e];
                                            t.down.destroy();
                                        },
                                    });
                                }),
                                (y.easyXDM = S);
                        })(window, document, location, window.setTimeout, decodeURIComponent, encodeURIComponent),
                        easyXDM.noConflict('Kakao'));
                },
                {},
            ],
            29: [
                function (Z, ee, e) {
                    (function (Q, Y, $) {
                        (function () {
                            'use strict';
                            function d(e) {
                                return 'function' == typeof e;
                            }
                            var r,
                                a = Array.isArray
                                    ? Array.isArray
                                    : function M(e) {
                                          return '[object Array]' === Object.prototype.toString.call(e);
                                      },
                                n = 0;
                            var s = function P(e, t) {
                                    (p[n] = e), (p[n + 1] = t), 2 === (n += 2) && l();
                                },
                                e = 'undefined' != typeof window ? window : undefined,
                                t = e || {},
                                i = t.MutationObserver || t.WebKitMutationObserver,
                                o = void 0 !== Q && '[object process]' === {}.toString.call(Q),
                                c =
                                    'undefined' != typeof Uint8ClampedArray &&
                                    'undefined' != typeof importScripts &&
                                    'undefined' != typeof MessageChannel;
                            function u() {
                                return function () {
                                    setTimeout(f, 1);
                                };
                            }
                            var l,
                                p = new Array(1e3);
                            function f() {
                                for (var e = 0; e < n; e += 2) {
                                    (0, p[e])(p[e + 1]), (p[e] = undefined), (p[e + 1] = undefined);
                                }
                                n = 0;
                            }
                            function m() {}
                            l = o
                                ? (function D() {
                                      var e = Q.nextTick,
                                          t = Q.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
                                      return (
                                          Array.isArray(t) && '0' === t[1] && '10' === t[2] && (e = $),
                                          function () {
                                              e(f);
                                          }
                                      );
                                  })()
                                : i
                                ? (function q() {
                                      var e = 0,
                                          t = new i(f),
                                          n = document.createTextNode('');
                                      return (
                                          t.observe(n, { characterData: !0 }),
                                          function () {
                                              n.data = e = ++e % 2;
                                          }
                                      );
                                  })()
                                : c
                                ? (function z() {
                                      var e = new MessageChannel();
                                      return (
                                          (e.port1.onmessage = f),
                                          function () {
                                              e.port2.postMessage(0);
                                          }
                                      );
                                  })()
                                : e === undefined && 'function' == typeof Z
                                ? (function W() {
                                      try {
                                          var e = Z('vertx');
                                          return (
                                              (r = e.runOnLoop || e.runOnContext),
                                              (function t() {
                                                  return function () {
                                                      r(f);
                                                  };
                                              })()
                                          );
                                      } catch (n) {
                                          return u();
                                      }
                                  })()
                                : u();
                            var h = void 0,
                                g = 1,
                                v = 2,
                                y = new O();
                            function k(e, t) {
                                if (t.constructor === e.constructor)
                                    !(function r(t, e) {
                                        e._state === g
                                            ? _(t, e._result)
                                            : e._state === v
                                            ? S(t, e._result)
                                            : A(
                                                  e,
                                                  undefined,
                                                  function (e) {
                                                      b(t, e);
                                                  },
                                                  function (e) {
                                                      S(t, e);
                                                  },
                                              );
                                    })(e, t);
                                else {
                                    var n = (function i(e) {
                                        try {
                                            return e.then;
                                        } catch (t) {
                                            return (y.error = t), y;
                                        }
                                    })(t);
                                    n === y
                                        ? S(e, y.error)
                                        : n === undefined
                                        ? _(e, t)
                                        : d(n)
                                        ? (function o(e, r, i) {
                                              s(function (t) {
                                                  var n = !1,
                                                      e = (function o(e, t, n, r) {
                                                          try {
                                                              e.call(t, n, r);
                                                          } catch (i) {
                                                              return i;
                                                          }
                                                      })(
                                                          i,
                                                          r,
                                                          function (e) {
                                                              n || ((n = !0), r !== e ? b(t, e) : _(t, e));
                                                          },
                                                          function (e) {
                                                              n || ((n = !0), S(t, e));
                                                          },
                                                          t._label,
                                                      );
                                                  !n && e && ((n = !0), S(t, e));
                                              }, e);
                                          })(e, t, n)
                                        : _(e, t);
                                }
                            }
                            function b(e, t) {
                                e === t
                                    ? S(
                                          e,
                                          (function n() {
                                              return new TypeError('You cannot resolve a promise with itself');
                                          })(),
                                      )
                                    : !(function r(e) {
                                          return (
                                              'function' == typeof e ||
                                              ('object' === (void 0 === e ? 'undefined' : _typeof(e)) && null !== e)
                                          );
                                      })(t)
                                    ? _(e, t)
                                    : k(e, t);
                            }
                            function w(e) {
                                e._onerror && e._onerror(e._result), T(e);
                            }
                            function _(e, t) {
                                e._state === h &&
                                    ((e._result = t), (e._state = g), 0 !== e._subscribers.length && s(T, e));
                            }
                            function S(e, t) {
                                e._state === h && ((e._state = v), (e._result = t), s(w, e));
                            }
                            function A(e, t, n, r) {
                                var i = e._subscribers,
                                    o = i.length;
                                (e._onerror = null),
                                    (i[o] = t),
                                    (i[o + g] = n),
                                    (i[o + v] = r),
                                    0 === o && e._state && s(T, e);
                            }
                            function T(e) {
                                var t = e._subscribers,
                                    n = e._state;
                                if (0 !== t.length) {
                                    for (var r, i, o = e._result, a = 0; a < t.length; a += 3)
                                        (r = t[a]), (i = t[a + n]), r ? R(n, r, i, o) : i(o);
                                    e._subscribers.length = 0;
                                }
                            }
                            function O() {
                                this.error = null;
                            }
                            var x = new O();
                            function R(e, t, n, r) {
                                var i,
                                    o,
                                    a,
                                    s,
                                    c = d(n);
                                if (c) {
                                    if (
                                        ((i = (function u(e, t) {
                                            try {
                                                return e(t);
                                            } catch (n) {
                                                return (x.error = n), x;
                                            }
                                        })(n, r)) === x
                                            ? ((s = !0), (o = i.error), (i = null))
                                            : (a = !0),
                                        t === i)
                                    )
                                        return void S(
                                            t,
                                            (function l() {
                                                return new TypeError(
                                                    'A promises callback cannot return that same promise.',
                                                );
                                            })(),
                                        );
                                } else (i = r), (a = !0);
                                t._state !== h ||
                                    (c && a ? b(t, i) : s ? S(t, o) : e === g ? _(t, i) : e === v && S(t, i));
                            }
                            function E(e, t) {
                                var n = this;
                                (n._instanceConstructor = e),
                                    (n.promise = new e(m)),
                                    n._validateInput(t)
                                        ? ((n._input = t),
                                          (n.length = t.length),
                                          (n._remaining = t.length),
                                          n._init(),
                                          0 === n.length
                                              ? _(n.promise, n._result)
                                              : ((n.length = n.length || 0),
                                                n._enumerate(),
                                                0 === n._remaining && _(n.promise, n._result)))
                                        : S(n.promise, n._validationError());
                            }
                            (E.prototype._validateInput = function (e) {
                                return a(e);
                            }),
                                (E.prototype._validationError = function () {
                                    return new Error('Array Methods must be provided an Array');
                                }),
                                (E.prototype._init = function () {
                                    this._result = new Array(this.length);
                                });
                            var U = E;
                            (E.prototype._enumerate = function () {
                                for (
                                    var e = this.length, t = this.promise, n = this._input, r = 0;
                                    t._state === h && r < e;
                                    r++
                                )
                                    this._eachEntry(n[r], r);
                            }),
                                (E.prototype._eachEntry = function (e, t) {
                                    var n = this,
                                        r = n._instanceConstructor;
                                    !(function i(e) {
                                        return 'object' === (void 0 === e ? 'undefined' : _typeof(e)) && null !== e;
                                    })(e)
                                        ? (n._remaining--, (n._result[t] = e))
                                        : e.constructor === r && e._state !== h
                                        ? ((e._onerror = null), n._settledAt(e._state, t, e._result))
                                        : n._willSettleAt(r.resolve(e), t);
                                }),
                                (E.prototype._settledAt = function (e, t, n) {
                                    var r = this,
                                        i = r.promise;
                                    i._state === h && (r._remaining--, e === v ? S(i, n) : (r._result[t] = n)),
                                        0 === r._remaining && _(i, r._result);
                                }),
                                (E.prototype._willSettleAt = function (e, t) {
                                    var n = this;
                                    A(
                                        e,
                                        undefined,
                                        function (e) {
                                            n._settledAt(g, t, e);
                                        },
                                        function (e) {
                                            n._settledAt(v, t, e);
                                        },
                                    );
                                });
                            var I = function H(e) {
                                var t = new this(m);
                                if (!a(e)) return S(t, new TypeError('You must pass an array to race.')), t;
                                var n = e.length;
                                function r(e) {
                                    b(t, e);
                                }
                                function i(e) {
                                    S(t, e);
                                }
                                for (var o = 0; t._state === h && o < n; o++) A(this.resolve(e[o]), undefined, r, i);
                                return t;
                            };
                            var j = function X(e) {
                                if (
                                    e &&
                                    'object' === (void 0 === e ? 'undefined' : _typeof(e)) &&
                                    e.constructor === this
                                )
                                    return e;
                                var t = new this(m);
                                return b(t, e), t;
                            };
                            var L = function J(e) {
                                    var t = new this(m);
                                    return S(t, e), t;
                                },
                                K = 0;
                            var F = C;
                            function C(e) {
                                (this._id = K++),
                                    (this._state = undefined),
                                    (this._result = undefined),
                                    (this._subscribers = []),
                                    m !== e &&
                                        (d(e) ||
                                            (function t() {
                                                throw new TypeError(
                                                    'You must pass a resolver function as the first argument to the promise constructor',
                                                );
                                            })(),
                                        this instanceof C ||
                                            (function n() {
                                                throw new TypeError(
                                                    "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.",
                                                );
                                            })(),
                                        (function r(t, e) {
                                            try {
                                                e(
                                                    function (e) {
                                                        b(t, e);
                                                    },
                                                    function (e) {
                                                        S(t, e);
                                                    },
                                                );
                                            } catch (n) {
                                                S(t, n);
                                            }
                                        })(this, e));
                            }
                            (C.all = function G(e) {
                                return new U(this, e).promise;
                            }),
                                (C.race = I),
                                (C.resolve = j),
                                (C.reject = L),
                                (C.prototype = {
                                    constructor: C,
                                    then: function (e, t) {
                                        var n = this._state;
                                        if ((n === g && !e) || (n === v && !t)) return this;
                                        var r = new this.constructor(m),
                                            i = this._result;
                                        if (n) {
                                            var o = arguments[n - 1];
                                            s(function () {
                                                R(n, r, o, i);
                                            });
                                        } else A(this, r, e, t);
                                        return r;
                                    },
                                    catch: function (e) {
                                        return this.then(null, e);
                                    },
                                });
                            var N = function V() {
                                    var e;
                                    if (void 0 !== Y) e = Y;
                                    else if ('undefined' != typeof self) e = self;
                                    else
                                        try {
                                            e = Function('return this')();
                                        } catch (n) {
                                            throw new Error(
                                                'polyfill failed because global object is unavailable in this environment',
                                            );
                                        }
                                    var t = e.Promise;
                                    (t &&
                                        '[object Promise]' === Object.prototype.toString.call(t.resolve()) &&
                                        !t.cast) ||
                                        (e.Promise = F);
                                },
                                B = { Promise: F, polyfill: N };
                            void 0 !== ee && ee.exports ? (ee.exports = B) : void 0 !== this && (this.ES6Promise = B),
                                N();
                        }.call(this));
                    }.call(
                        this,
                        Z('_process'),
                        'undefined' != typeof global
                            ? global
                            : 'undefined' != typeof self
                            ? self
                            : 'undefined' != typeof window
                            ? window
                            : {},
                        Z('timers').setImmediate,
                    ));
                },
                { _process: 1, timers: 2 },
            ],
            30: [
                function (e, t, n) {
                    t.exports = function c(e) {
                        function r(e) {
                            var t = {},
                                n = e ? e.split(/\.|-|_/) : ['0', '0', '0'];
                            return (
                                (t.info = n.join('.')),
                                (t.major = n[0] || '0'),
                                (t.minor = n[1] || '0'),
                                (t.patch = n[2] || '0'),
                                t
                            );
                        }
                        return {
                            ua: (e = (e || window.navigator.userAgent).toString().toLowerCase()),
                            browser: (function i(e) {
                                var t = {},
                                    n = /(dolfin)[ \/]([\w.]+)/.exec(e) ||
                                        /(edge)[ \/]([\w.]+)/.exec(e) ||
                                        /(chrome)[ \/]([\w.]+)/.exec(e) ||
                                        /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(e) ||
                                        /(webkit)(?:.*version)?[ \/]([\w.]+)/.exec(e) ||
                                        /(msie) ([\w.]+)/.exec(e) ||
                                        (e.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(e)) || [
                                            '',
                                            'unknown',
                                        ];
                                return (
                                    'webkit' === n[1]
                                        ? (n = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(e) ||
                                              /(android)[ \/]([\w._\-]+);/.exec(e) || [n[0], 'safari', n[2]])
                                        : 'mozilla' === n[1]
                                        ? /trident/.test(e)
                                            ? (n[1] = 'msie')
                                            : (n[1] = 'firefox')
                                        : 'edge' === n[1]
                                        ? (n[1] = 'spartan')
                                        : /polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(e) &&
                                          (n[1] = 'polaris'),
                                    (t[n[1]] = !0),
                                    (t.name = n[1]),
                                    (t.version = r(n[2])),
                                    t
                                );
                            })(e),
                            platform: (function o(e) {
                                return (function t(e) {
                                    return !(
                                        !e.match(/linux|windows (nt|98)|macintosh/) ||
                                        e.match(/android|mobile|polaris|lgtelecom|uzard|natebrowser|ktf;|skt;/)
                                    );
                                })(e)
                                    ? 'pc'
                                    : (function n(e) {
                                          return !!(
                                              e.match(/ipad/) ||
                                              (e.match(/android/) && !e.match(/mobi|mini|fennec/))
                                          );
                                      })(e)
                                    ? 'tablet'
                                    : (function r(e) {
                                          return !!e.match(
                                              /ip(hone|od)|android.+mobile|windows (ce|phone)|blackberry|bb10|symbian|webos|firefox.+fennec|opera m(ob|in)i|polaris|iemobile|lgtelecom|nokia|sonyericsson|dolfin|uzard|natebrowser|ktf;|skt;/,
                                          );
                                      })(e)
                                    ? 'mobile'
                                    : '';
                            })(e),
                            os: (function a(e) {
                                var t = {},
                                    n = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(e) ||
                                        /(android)[ \/]([\w._\-]+);/.exec(e) ||
                                        (!!/android/.test(e) && ['', 'android', '0.0.0']) ||
                                        (!!/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(
                                            e,
                                        ) && ['', 'polaris', '0.0.0']) ||
                                        /(windows)(?: nt | phone(?: os){0,1} | )([\w._\-]+)/.exec(e) ||
                                        (!!/(windows)/.test(e) && ['', 'windows', '0.0.0']) ||
                                        /(mac) os x ([\w._\-]+)/.exec(e) ||
                                        (!!/(linux)/.test(e) && ['', 'linux', '0.0.0']) ||
                                        (!!/webos/.test(e) && ['', 'webos', '0.0.0']) ||
                                        /(bada)[ \/]([\w._\-]+)/.exec(e) ||
                                        (!!/bada/.test(e) && ['', 'bada', '0.0.0']) ||
                                        (!!/(rim|blackberry|bb10)/.test(e) && ['', 'blackberry', '0.0.0']) || [
                                            '',
                                            'unknown',
                                            '0.0.0',
                                        ];
                                return (
                                    'iphone' === n[1] || 'ipad' === n[1] || 'ipod' === n[1]
                                        ? (n[1] = 'ios')
                                        : 'windows' === n[1] && '98' === n[2] && (n[2] = '0.98.0'),
                                    (t[n[1]] = !0),
                                    (t.name = n[1]),
                                    (t.version = r(n[2])),
                                    t
                                );
                            })(e),
                            app: (function s(e) {
                                var t = {},
                                    n = /(crios)[ \/]([\w.]+)/.exec(e) || /(daumapps)[ \/]([\w.]+)/.exec(e) || ['', ''];
                                return (
                                    n[1] ? ((t.isApp = !0), (t.name = n[1]), (t.version = r(n[2]))) : (t.isApp = !1), t
                                );
                            })(e),
                        };
                    };
                },
                {},
            ],
            31: [
                function (t, e, n) {
                    e.exports = (function () {
                        var e = t('./userAgent.js'),
                            l = 5e3,
                            s = 300,
                            o = 100,
                            d = e(),
                            c = d.os,
                            p = ['firefox', 'opr/'],
                            f = ['KAKAOTALK'];
                        function m(e) {
                            window.top.location.replace(e);
                        }
                        function h(t, n, r) {
                            var i = new Date().getTime();
                            return setTimeout(function () {
                                var e = new Date().getTime();
                                g() && e - i < t + o && r(n);
                            }, t);
                        }
                        function g() {
                            for (var e = ['hidden', 'webkitHidden'], t = 0, n = e.length; t < n; t++)
                                if ('undefined' != typeof document[e[t]]) return !document[e[t]];
                            return !0;
                        }
                        function v(e) {
                            setTimeout(function () {
                                (function n(e) {
                                    var t = document.createElement('iframe');
                                    return (
                                        (t.id = e),
                                        (t.style.border = 'none'),
                                        (t.style.width = '0'),
                                        (t.style.height = '0'),
                                        (t.style.display = 'none'),
                                        (t.style.overflow = 'hidden'),
                                        document.body.appendChild(t),
                                        t
                                    );
                                })('appLauncher').src = e;
                            }, 100);
                        }
                        return function y(e) {
                            var t = 'function' == typeof e.willInvokeApp ? e.willInvokeApp : function () {},
                                n = 'function' == typeof e.onAppMissing ? e.onAppMissing : m,
                                r =
                                    'function' == typeof e.onUnsupportedEnvironment
                                        ? e.onUnsupportedEnvironment
                                        : function () {};
                            t(),
                                c.android
                                    ? (function i() {
                                          var e = d.browser.chrome && 25 <= +d.browser.version.major,
                                              t = new RegExp(p.join('|'), 'i'),
                                              n = new RegExp(f.join('|'), 'i');
                                          return (e && !t.test(d.ua)) || n.test(d.ua);
                                      })() &&
                                      e.intentURI &&
                                      !e.useUrlScheme
                                        ? (function o(e) {
                                              function t() {
                                                  top.location.href = e;
                                              }
                                              d.browser.chrome ? t() : setTimeout(t, 100);
                                          })(e.intentURI)
                                        : e.storeURL &&
                                          (function a(e, t, n) {
                                              h(s, t, n), v(e);
                                          })(e.urlScheme, e.storeURL, n)
                                    : c.ios && e.storeURL
                                    ? (function u(e, t, n, r) {
                                          var i = h(l, t, n);
                                          parseInt(d.os.version.major, 10) < 8
                                              ? (function o(e) {
                                                    window.addEventListener('pagehide', function t() {
                                                        g() &&
                                                            (clearTimeout(e),
                                                            window.removeEventListener('pagehide', t));
                                                    });
                                                })(i)
                                              : (function a(e) {
                                                    document.addEventListener('visibilitychange', function t() {
                                                        g() &&
                                                            (clearTimeout(e),
                                                            document.removeEventListener('visibilitychange', t));
                                                    });
                                                })(i),
                                              !(function s() {
                                                  return 8 < parseInt(d.os.version.major, 10) && d.os.ios;
                                              })()
                                                  ? v(e)
                                                  : (r === undefined ? (r = e) : clearTimeout(i),
                                                    (function c(e) {
                                                        window.top.location.replace(e);
                                                    })(r));
                                      })(e.urlScheme, e.storeURL, n, e.universalLink)
                                    : setTimeout(function () {
                                          r();
                                      }, 100);
                        };
                    })();
                },
                { './userAgent.js': 30 },
            ],
        },
        {},
        [20],
    )(20);
});
