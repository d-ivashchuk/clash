"use strict";var precacheConfig=[["/clash/index.html","87eae1026fcc4c021392430f172aeeeb"],["/clash/static/js/main.da19f061.js","2696470ef9debb137380ec9d40479a4e"],["/clash/static/media/adidas.330a6cd7.svg","330a6cd72073096db309f155176614a6"],["/clash/static/media/apple.0e27920a.svg","0e27920a35ed462fc15610c47a7a9978"],["/clash/static/media/atom.87e72261.svg","87e722611e37bef97466aaab8a0632a3"],["/clash/static/media/clash.7d8c59a8.svg","7d8c59a846ec7ab29d5596add3702ce0"],["/clash/static/media/firebase.1e018093.svg","1e0180931d235d8a38c617f491c3453d"],["/clash/static/media/github.6249536d.svg","6249536d6632824ec9a34d847e03ef10"],["/clash/static/media/gitlab.707c56c4.svg","707c56c428f24b65743631f5bfa60cb1"],["/clash/static/media/nike.67a938c0.svg","67a938c075f0edd04975890815cd105a"],["/clash/static/media/node.2dcf8a39.svg","2dcf8a391be0a093e38ab62a971d28cf"],["/clash/static/media/playstation.ab8a97fb.svg","ab8a97fb254e18ab0bb6c828537d6e29"],["/clash/static/media/samsung.e9bb6a9f.svg","e9bb6a9fed442cff4bd54c58e2ba9d0b"],["/clash/static/media/sublime.4443a3c0.svg","4443a3c03208294d167bf925a05fe4c3"],["/clash/static/media/xbox.5acdd3d4.svg","5acdd3d4f2db72811f19ef42de475cc5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var s=new URL(e);return n&&s.pathname.match(n)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),s=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var s="/clash/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});