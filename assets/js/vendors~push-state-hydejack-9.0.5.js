/*!
 *  __  __                __                                     __
 * /\ \/\ \              /\ \             __                    /\ \
 * \ \ \_\ \   __  __    \_\ \      __   /\_\      __       ___ \ \ \/'\
 *  \ \  _  \ /\ \/\ \   /'_` \   /'__`\ \/\ \   /'__`\    /'___\\ \ , <
 *   \ \ \ \ \\ \ \_\ \ /\ \L\ \ /\  __/  \ \ \ /\ \L\.\_ /\ \__/ \ \ \\`\
 *    \ \_\ \_\\/`____ \\ \___,_\\ \____\ _\ \ \\ \__/.\_\\ \____\ \ \_\ \_\
 *     \/_/\/_/ `/___/> \\/__,_ / \/____//\ \_\ \\/__/\/_/ \/____/  \/_/\/_/
 *                 /\___/                \ \____/
 *                 \/__/                  \/___/
 *
 * Powered by Hydejack v9.0.5 <https://hydejack.com/>
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{204:function(e,t,r){"use strict";r.r(t),r.d(t,"HyPushState",(function(){return Pe}));var n,i=r(179),o=r(171),c=r(157),a=r(182),s=r(0),l=r(94),u=r(92),h=function(e){function t(t,r){var n=e.call(this,t,r)||this;return n.scheduler=t,n.work=r,n}return Object(s.c)(t,e),t.prototype.requestAsyncId=function(t,r,n){return void 0===n&&(n=0),null!==n&&n>0?e.prototype.requestAsyncId.call(this,t,r,n):(t.actions.push(this),t.scheduled||(t.scheduled=u.a.requestAnimationFrame((function(){return t.flush(void 0)}))))},t.prototype.recycleAsyncId=function(t,r,n){if(void 0===n&&(n=0),null!=n&&n>0||null==n&&this.delay>0)return e.prototype.recycleAsyncId.call(this,t,r,n);0===t.actions.length&&(u.a.cancelAnimationFrame(r),t.scheduled=void 0)},t}(l.a),p=new(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(s.c)(t,e),t.prototype.flush=function(e){this.active=!0,this.scheduled=void 0;var t,r=this.actions,n=-1;e=e||r.shift();var i=r.length;do{if(t=e.execute(e.state,e.delay))break}while(++n<i&&(e=r.shift()));if(this.active=!1,t){for(;++n<i&&(e=r.shift());)e.unsubscribe();throw t}},t}(r(95).a))(h),f=r(207),d=r(209),b=r(19),O=r(99),v=r(100),y=r(181),j=r(186),m=r(184),g=r(2),w=r(183),S=r(37),P=r(1);!function(e){e.NEXT="N",e.ERROR="E",e.COMPLETE="C"}(n||(n={}));!function(){function e(e,t,r){this.kind=e,this.value=t,this.error=r,this.hasValue="N"===e}e.prototype.observe=function(e){var t,r,n;switch(this.kind){case"N":null===(t=e.next)||void 0===t||t.call(e,this.value);break;case"E":null===(r=e.error)||void 0===r||r.call(e,this.error);break;case"C":null===(n=e.complete)||void 0===n||n.call(e)}},e.prototype.do=function(e,t,r){switch(this.kind){case"N":null==e||e(this.value);break;case"E":null==t||t(this.error);break;case"C":null==r||r()}},e.prototype.accept=function(e,t,r){return e&&"function"==typeof e.next?this.observe(e):this.do(e,t,r)},e.prototype.toObservable=function(){var e,t;switch(this.kind){case"N":return Object(S.a)(this.value);case"E":return e=this.error,t?new P.a((function(r){return t.schedule((function(){r.error("function"==typeof e?e():e)}))})):new P.a((function(t){return t.error("function"==typeof e?e():e)}));case"C":return w.a}throw new Error("unexpected notification kind value")},e.createNext=function(t){return new e("N",t)},e.createError=function(t){return new e("E",void 0,t)},e.createComplete=function(){return e.completeNotification},e.completeNotification=new e("C")}();var E=N("C",void 0,void 0);function N(e,t,r){return{kind:e,value:t,error:r}}var L=r(5);function A(e,t){return void 0===t&&(t=0),function(r){return Object(L.a)(r,new k(e,t))}}var M,k=function(){function e(e,t){void 0===t&&(t=0),this.scheduler=e,this.delay=t}return e.prototype.call=function(e,t){return t.subscribe(new R(e,this.scheduler,this.delay))},e}(),R=function(e){function t(t,r,n){void 0===n&&(n=0);var i=e.call(this,t)||this;return i.scheduler=r,i.delay=n,i}return Object(s.c)(t,e),t.dispatch=function(e){!function(e,t){var r,n,i;if("string"!=typeof e.kind)throw new TypeError('Invalid notification, missing "kind"');switch(e.kind){case"N":null===(r=t.next)||void 0===r||r.call(t,e.value);break;case"E":null===(n=t.error)||void 0===n||n.call(t,e.error);break;case"C":null===(i=t.complete)||void 0===i||i.call(t)}}(e.notification,e.destination),this.unsubscribe()},t.prototype.scheduleMessage=function(e){var r=this.destination;r.add(this.scheduler.schedule(t.dispatch,this.delay,{notification:e,destination:r}))},t.prototype._next=function(e){this.scheduleMessage(function(e){return N("N",e,void 0)}(e))},t.prototype._error=function(e){this.scheduleMessage(function(e){return N("E",void 0,e)}(e)),this.unsubscribe()},t.prototype._complete=function(){this.scheduleMessage(E),this.unsubscribe()},t}(g.a),C=r(185),q=r(206),_=r(96),H=r(98),x=r(210),D=r(208),T=r(166);function U(e){var{protocol:t,host:r}=e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location;return t!==n.protocol||r!==n.host}function I(e){return e&&""===e.target}function $(e,t){var{url:r,anchor:n}=e;return I(n)&&!U(r,t)&&!function(e){var{hash:t,origin:r,pathname:n}=e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location;return""!==t&&r===i.origin&&n===i.pathname}(r,t)}function B(e){var{cause:t,url:{pathname:r,hash:n},oldURL:{pathname:i}}=e;return r===i&&(t===M.Pop||t===M.Push&&""!==n)}!function(e){e.Init="init",e.Hint="hint",e.Push="push",e.Pop="pop"}(M||(M={}));var F=r(211),V=r(214);function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){X(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function X(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class J{constructor(e){this.parent=e}fetchPage(e){return Object(T.g)(e.url.href,{method:"GET",mode:"cors",headers:{Accept:"text/html"}}).pipe(Object(_.a)(e=>e.text()),Object(b.a)(t=>W(W({},e),{},{responseText:t})),Object(x.a)(t=>Object(S.a)(W(W({},e),{},{error:t,responseText:null}))))}selectPrefetch(e,t,r){var{href:n}=e;return n===t.url.href?Object(S.a)(t):r.pipe(Object(V.a)(1))}getResponse(e,t,r){return Object(F.a)(this.selectPrefetch(t.url,r,e),this.parent.animPromise).pipe(Object(b.a)(e=>{var[r]=e;return W(W({},r),t)}))}}var K=r(41),G=r(158),Q=r(192);function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){ee(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ee(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class te{constructor(e){this.parent=e}get scriptSelector(){return this.parent.scriptSelector}removeScriptTags(e){var t=[];return e.forEach(e=>{null!=e&&e.querySelectorAll(this.scriptSelector).forEach(e=>{var r=[function(e){var t=document.createElement("script");return Array.from(e.attributes).forEach(e=>t.setAttributeNode(e.cloneNode())),t.innerHTML=e.innerHTML,t}(e),e];t.push(r)})}),t}reinsertScriptTags(e){if(!this.scriptSelector)return Promise.resolve(e);var{scripts:t}=e,r=document.write;return Object(K.a)(t).pipe(Object(G.a)(e=>this.insertScript(e)),Object(x.a)(t=>Object(S.a)(Z(Z({},e),{},{error:t}))),Object(Q.a)(()=>document.write=r),Object(C.a)(e)).toPromise()}insertScript(e){var[t,r]=e;return document.write=function(){for(var e=document.createElement("div"),t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];e.innerHTML=n.join(),Array.from(e.childNodes).forEach(e=>r.parentNode.insertBefore(e,r))},new Promise((e,n)=>{""!==t.src?(t.addEventListener("load",e),t.addEventListener("error",n),r.parentNode.replaceChild(t,r)):(r.parentNode.replaceChild(t,r),e({}))})}}function re(e,t){e.forEach(e=>{e.querySelectorAll("[href]").forEach(ne("href",t)),e.querySelectorAll("[src]").forEach(ne("src",t)),e.querySelectorAll("img[srcset]").forEach(function(e,t){return r=>{try{r.setAttribute(e,r.getAttribute(e).split(/\s*,\s*/).map(e=>{var r=e.split(/\s+/);return r[0]=new URL(r[0],t).href,r.join(" ")}).join(", "))}catch(e){}}}("srcset",t)),e.querySelectorAll("blockquote[cite]").forEach(ne("cite",t)),e.querySelectorAll("del[cite]").forEach(ne("cite",t)),e.querySelectorAll("ins[cite]").forEach(ne("cite",t)),e.querySelectorAll("q[cite]").forEach(ne("cite",t)),e.querySelectorAll("img[longdesc]").forEach(ne("longdesc",t)),e.querySelectorAll("frame[longdesc]").forEach(ne("longdesc",t)),e.querySelectorAll("iframe[longdesc]").forEach(ne("longdesc",t)),e.querySelectorAll("img[usemap]").forEach(ne("usemap",t)),e.querySelectorAll("input[usemap]").forEach(ne("usemap",t)),e.querySelectorAll("object[usemap]").forEach(ne("usemap",t)),e.querySelectorAll("form[action]").forEach(ne("action",t)),e.querySelectorAll("button[formaction]").forEach(ne("formaction",t)),e.querySelectorAll("input[formaction]").forEach(ne("formaction",t)),e.querySelectorAll("video[poster]").forEach(ne("poster",t)),e.querySelectorAll("object[data]").forEach(ne("data",t)),e.querySelectorAll("object[codebase]").forEach(ne("codebase",t)),e.querySelectorAll("object[archive]").forEach(function(e,t){return r=>{try{r.setAttribute(e,r.getAttribute(e).split(/[\s,]+/).map(e=>new URL(e,t).href).join(", "))}catch(e){}}}("archive",t))})}function ne(e,t){return r=>{try{r.setAttribute(e,new URL(r.getAttribute(e),t).href)}catch(e){}}}function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){ce(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ce(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class ae{constructor(e){this.parent=e,this.scriptManager=new te(e)}get el(){return this.parent.el}get replaceSelector(){return this.parent.replaceSelector}get scriptSelector(){return this.parent.scriptSelector}getReplaceElements(e){if(this.replaceSelector)return this.replaceSelector.split(",").map(t=>e.querySelector(t));if(this.el.id)return[e.getElementById(this.el.id)];var t=Array.from(document.getElementsByTagName(this.el.tagName)).indexOf(this.el);return[e.getElementsByTagName(this.el.tagName)[t]]}responseToContent(e){var{responseText:t}=e,r=(new DOMParser).parseFromString(t,"text/html"),{title:n=""}=r,i=this.getReplaceElements(r);if(i.every(e=>null==e))throw new Error("Couldn't find any element in the document at '".concat(location,"'."));var o=this.scriptSelector?this.scriptManager.removeScriptTags(i):[];return oe(oe({},e),{},{document:r,title:n,replaceEls:i,scripts:o})}replaceContentWithSelector(e){this.replaceSelector.split(",").map(e=>document.querySelector(e)).forEach((t,r)=>t.parentNode.replaceChild(e[r],t))}replaceContentWholesale(e){var[t]=e;this.el.innerHTML=t.innerHTML}replaceContent(e){this.replaceSelector?this.replaceContentWithSelector(e):this.replaceContentWholesale(e)}replaceHead(e){var{head:t}=this.el.ownerDocument,r=t.querySelector("link[rel=canonical]"),n=e.head.querySelector("link[rel=canonical]");r&&n&&(r.href=n.href);var i=t.querySelector("meta[name=description]"),o=e.head.querySelector("meta[name=description]");i&&o&&(i.content=o.content)}updateDOM(e){try{var{replaceEls:t,document:r}=e;U(this.parent)&&re(t,this.parent.href),this.replaceHead(r),this.replaceContent(t)}catch(t){throw oe(oe({},e),{},{error:t})}}reinsertScriptTags(e){return this.scriptManager.reinsertScriptTags(e)}}var se=r(38),le=r(76),ue=e=>Array.prototype.concat.apply([],e),he=e=>({addedNodes:new Set(ue(e.map(e=>Array.from(e.addedNodes)))),removedNodes:new Set(ue(e.map(e=>Array.from(e.removedNodes))))});class pe{setupEventListeners(){var e=Object(c.a)(this.el,"click").pipe(Object(b.a)(e=>{var t=Object(T.k)(e.target,this.linkSelector);if(t instanceof HTMLAnchorElement)return[e,t]}),Object(O.a)(e=>!!e)),t=(e,t)=>e.matches(t)?Object(S.a)(e):Object(K.a)(e.querySelectorAll(t));return{hintEvent$:this.$.linkSelector.pipe(Object(_.a)(e=>{var r=new Map,n=e=>{r.has(e)||r.set(e,(e=>Object(a.a)(Object(c.a)(e,"mouseenter",{passive:!0}),Object(c.a)(e,"touchstart",{passive:!0}),Object(c.a)(e,"focus",{passive:!0})).pipe(Object(b.a)(t=>[t,e])))(e))},i=e=>{r.delete(e)};return Object(T.d)(this.el,{childList:!0,subtree:!0}).pipe(Object(y.a)({addedNodes:[this.el],removedNodes:[]}),Object(T.c)(500),Object(b.a)(he),Object(_.a)(o=>{var{addedNodes:c,removedNodes:a}=o;return Object(K.a)(a).pipe(Object(O.a)(e=>e instanceof Element),Object(se.a)(r=>t(r,e)),Object(v.a)(i)).subscribe(),Object(K.a)(c).pipe(Object(O.a)(e=>e instanceof Element),Object(se.a)(r=>t(r,e)),Object(v.a)(n)).subscribe(),Object(K.a)(r.values()).pipe(Object(le.a)())}),Object(T.l)(this.$.prefetch))})),pushEvent$:e}}}function fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function de(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(r),!0).forEach((function(t){be(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function be(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Oe=e=>new Promise(t=>setTimeout(t,e));class ve{constructor(e){this.parent=e}onStart(e){this.parent.animPromise=Oe(this.parent.duration);this.parent.fireEvent("start",{detail:de(de({},e),{},{transitionUntil:e=>{this.parent.animPromise=Promise.all([this.parent.animPromise,e])}})})}emitDOMError(e){var t=location.href;window.history.back(),setTimeout(()=>document.location.assign(t),100)}emitNetworkError(e){this.parent.fireEvent("networkerror",{detail:e})}emitError(e){this.parent.fireEvent("error",{detail:e})}emitReady(e){this.parent.fireEvent("ready",{detail:e})}emitAfter(e){this.parent.fadePromise=Oe(this.parent.duration);this.parent.fireEvent("after",{detail:de(de({},e),{},{transitionUntil:e=>{this.parent.fadePromise=Promise.all([this.parent.fadePromise,e])}})})}emitProgress(e){this.parent.fireEvent("progress",{detail:e})}emitLoad(e){this.parent.fireEvent("load",{detail:e})}}function ye(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function je(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(r),!0).forEach((function(t){me(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ye(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function me(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}window.HashChangeEvent=window.HashChangeEvent||function(e){var{oldURL:t="",newURL:r=""}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new CustomEvent(e);return n.oldURL=t,n.newURL=r,n};class ge{constructor(e){this.updateHistoryScrollPosition=()=>{if(!U(this.parent)){var e=this.assignScrollPosition(history.state||{});history.replaceState(e,document.title)}},this.parent=e}updateHistoryState(e){var{cause:t,replace:r,url:n,oldURL:i}=e;if(!U(this.parent))switch(t){case M.Init:case M.Push:var{histId:o}=this.parent;if(r||n.href===location.href){var c=je(je({},history.state),{},{[o]:{}});history.replaceState(c,document.title,n.href)}else history.pushState({[o]:{}},document.title,n.href);case M.Pop:this.parent.simulateHashChange&&function(e,t){e.hash!==t.hash&&window.dispatchEvent(new HashChangeEvent("hashchange",{newURL:e.href,oldURL:t.href}))}(n,i)}}updateTitle(e){var{cause:t,title:r}=e;document.title=r,U(this.parent)||t!==M.Push||history.replaceState(history.state,r)}assignScrollPosition(e){var{histId:t}=this.parent;return je(je({},e),{},{[t]:je(je({},e[t]),{},{scrollTop:Object(T.j)(),scrollHeight:Object(T.i)()})})}}class we{constructor(e){this.parent=e,"scrollRestoration"in history&&(history.scrollRestoration="manual")}manageScrollPosition(e){var{cause:t,url:{hash:r}}=e;switch(t){case M.Push:this.scrollHashIntoView(r,{behavior:"smooth",block:"start",inline:"nearest"});break;case M.Pop:this.restoreScrollPosition();break;case M.Init:this.restoreScrollPositionOnReload()}}elementFromHash(e){return document.getElementById(decodeURIComponent(e.substr(1)))}scrollHashIntoView(e,t){if(e){var r=this.elementFromHash(e);r&&r.scrollIntoView(t)}else window.scroll(window.pageXOffset,0)}restoreScrollPosition(){var{histId:e}=this.parent,{scrollTop:t}=history.state&&history.state[e]||{};null!=t&&window.scroll(window.pageXOffset,t)}restoreScrollPositionOnReload(){var{histId:e}=this.parent;history.state&&history.state[e]&&0===Object(T.j)()?this.restoreScrollPosition():location.hash&&requestAnimationFrame(()=>this.scrollHashIntoView(location.hash,!0))}}var Se=function(e,t,r,n){var i,o=arguments.length,c=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(o<3?i(c):o>3?i(t,r,c):i(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},Pe=class extends(Object(T.b)(T.a,[pe])){constructor(){super(...arguments),this.el=this,this.linkSelector="a[href]:not([data-no-push])",this.prefetch=!1,this.duration=0,this.simulateHashChange=!1,this.baseURL=window.location.href,this._initialized=Object(T.f)(),this.$={},this.fadePromise=Promise.resolve(null),this.scrollManager=new we(this),this.historyManager=new ge(this),this.fetchManager=new J(this),this.updateManager=new ae(this),this.eventManager=new ve(this),this._url=new URL(this.baseURL),this.reload$=new o.a,this.cacheNr=0,this.upgrade=()=>{var{pushEvent$:e,hintEvent$:t}=this.setupEventListeners(),r={},n=e.pipe(Object(b.a)(e=>{var[t,r]=e;return{cause:M.Push,url:new URL(r.href,this.href),anchor:r,event:t,cacheNr:this.cacheNr}}),Object(O.a)(e=>function(e,t){var{url:r,anchor:n,event:{metaKey:i,ctrlKey:o}}=e;return!i&&!o&&I(n)&&!U(r,t)}(e,this)),Object(v.a)(e=>{var{event:t}=e;t.preventDefault(),this.historyManager.updateHistoryScrollPosition()})),i=Object(c.a)(window,"popstate").pipe(Object(O.a)(()=>window.history.state&&window.history.state[this.histId]),Object(b.a)(e=>({cause:M.Pop,url:new URL(window.location.href),cacheNr:this.cacheNr,event:e}))),o=this.reload$,s=Object(a.a)(n,i,o).pipe(Object(y.a)({url:new URL(window.location.href)}),Object(j.a)(),Object(b.a)(e=>{var[t,r]=e;return Object.assign(r,{oldURL:t.url})}),Object(m.a)()),l=s.pipe(Object(O.a)(e=>!B(e)),Object(m.a)()),u=s.pipe(Object(O.a)(e=>B(e)),Object(O.a)(()=>history.state&&history.state[this.histId]),A(p),Object(v.a)(e=>{this.historyManager.updateHistoryState(e),this.scrollManager.manageScrollPosition(e)})),h=Object(f.a)(()=>Object(a.a)(l.pipe(Object(C.a)(!0)),r.response$.pipe(Object(C.a)(!1)))).pipe(Object(y.a)(!1)),d=t.pipe(Object(T.h)(h.pipe(Object(b.a)(e=>!e))),Object(b.a)(e=>{var[t,r]=e;return{cause:M.Hint,url:new URL(r.href,this.href),anchor:r,event:t,cacheNr:this.cacheNr}}),Object(O.a)(e=>$(e,this))),g=Object(a.a)(d,l).pipe(Object(q.a)((e,t)=>this.compareContext(e,t)),Object(_.a)(e=>this.fetchManager.fetchPage(e)),Object(y.a)({url:{}}),Object(m.a)()),w=r.response$=l.pipe(Object(v.a)(e=>{this.eventManager.onStart(e),this.historyManager.updateHistoryState(e),this._url=e.url}),Object(H.a)(g),Object(_.a)(e=>this.fetchManager.getResponse(g,...e)),Object(m.a)()),S=w.pipe(Object(O.a)(e=>{var{error:t}=e;return!t})),P=w.pipe(Object(O.a)(e=>{var{error:t}=e;return!!t})),E=S.pipe(Object(b.a)(e=>this.updateManager.responseToContent(e)),Object(v.a)(e=>this.eventManager.emitReady(e)),A(p),Object(v.a)(e=>{this.updateManager.updateDOM(e),this.historyManager.updateTitle(e),this.eventManager.emitAfter(e)}),Object(y.a)({cause:M.Init,url:this._url,scripts:[]}),A(p),Object(v.a)(e=>this.scrollManager.manageScrollPosition(e)),Object(v.a)({error:e=>this.eventManager.emitDOMError(e)}),Object(x.a)((e,t)=>t),Object(_.a)(e=>this.fadePromise.then(()=>e)),Object(_.a)(e=>this.updateManager.reinsertScriptTags(e)),Object(v.a)({error:e=>this.eventManager.emitError(e)}),Object(x.a)((e,t)=>t),Object(v.a)(e=>this.eventManager.emitLoad(e))),N=P.pipe(Object(v.a)(e=>this.eventManager.emitNetworkError(e))),L=l.pipe(Object(_.a)(e=>Object(f.a)(()=>this.animPromise).pipe(Object(D.a)(w),Object(C.a)(e))),Object(v.a)(e=>this.eventManager.emitProgress(e)));E.subscribe(),u.subscribe(),N.subscribe(),L.subscribe(),this._initialized.resolve(this),this.fireEvent("init")}}createRenderRoot(){return this}get initialized(){return this._initialized}_setLocation(e,t){var r=new URL(this._url.href);r[e]=t,this.assign(r.href)}get hash(){return this._url.hash}get host(){return this._url.host}get hostname(){return this._url.hostname}get href(){return this._url.href}get pathname(){return this._url.pathname}get port(){return this._url.port}get protocol(){return this._url.protocol}get search(){return this._url.search}get origin(){return this._url.origin}get ancestorOrigins(){return window.location.ancestorOrigins}set hash(e){this._setLocation("hash",e)}set host(e){this._setLocation("host",e)}set hostname(e){this._setLocation("hostname",e)}set href(e){this._setLocation("href",e)}set pathname(e){this._setLocation("pathname",e)}set port(e){this._setLocation("port",e)}set protocol(e){this._setLocation("protocol",e)}set search(e){this._setLocation("search",e)}set origin(e){}set ancestorOrigins(e){}get histId(){return this.id||this.tagName}assign(e){this.reload$.next({cause:M.Push,url:new URL(e,this.href),cacheNr:++this.cacheNr})}reload(){this.reload$.next({cause:M.Push,url:new URL(this.href),cacheNr:++this.cacheNr,replace:!0})}replace(e){this.reload$.next({cause:M.Push,url:new URL(e,this.href),cacheNr:++this.cacheNr,replace:!0})}compareContext(e,t){return e.url.href===t.url.href&&e.error===t.error&&e.cacheNr===t.cacheNr}connectedCallback(){super.connectedCallback(),this.$.linkSelector=new d.a(this.linkSelector),this.$.prefetch=new d.a(this.prefetch),window.addEventListener("beforeunload",this.historyManager.updateHistoryScrollPosition),this.updateComplete.then(this.upgrade)}disconnectedCallback(){window.removeEventListener("beforeunload",this.historyManager.updateHistoryScrollPosition)}};
/**
 * Copyright (c) 2020 Florian Klampfer <https://qwtel.com/>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @license
 * @nocompile
 */Se([Object(i.e)({type:String,reflect:!0,attribute:"replace-selector"})],Pe.prototype,"replaceSelector",void 0),Se([Object(i.e)({type:String,reflect:!0,attribute:"link-selector"})],Pe.prototype,"linkSelector",void 0),Se([Object(i.e)({type:String,reflect:!0,attribute:"script-selector"})],Pe.prototype,"scriptSelector",void 0),Se([Object(i.e)({type:Boolean,reflect:!0,attribute:"prefetch"})],Pe.prototype,"prefetch",void 0),Se([Object(i.e)({type:Number,reflect:!0,attribute:"duration"})],Pe.prototype,"duration",void 0),Se([Object(i.e)({type:Boolean,reflect:!0,attribute:"hashchange"})],Pe.prototype,"simulateHashChange",void 0),Se([Object(i.e)({type:String})],Pe.prototype,"baseURL",void 0),Se([Object(i.e)()],Pe.prototype,"assign",null),Se([Object(i.e)()],Pe.prototype,"reload",null),Se([Object(i.e)()],Pe.prototype,"replace",null),Pe=Se([Object(i.c)("hy-push-state")],Pe)},210:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(0),i=r(2),o=r(5),c=r(3),a=r(41);function s(e){return function(t){return Object(o.a)(t,(function(t){var r,n=this,i=new c.a,o=null,u=!1;return o=t.subscribe(new l(n,(function(c){!function(i){try{r=Object(a.a)(e(i,s(e)(t)))}catch(i){return void n.error(i)}}(c),r&&(o?(o.unsubscribe(),o=null,i.add(r.subscribe(n))):u=!0)}))),u?(o.unsubscribe(),o=null,i.add(r.subscribe(n))):i.add(o),i}))}}var l=function(e){function t(t,r){var n=e.call(this,t)||this;return n.onError=r,n}return Object(n.c)(t,e),t.prototype._error=function(e){this.onError(e),this.unsubscribe()},t}(i.a)},211:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(1),i=r(3),o=r(41);function c(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=void 0;return"function"==typeof e[e.length-1]&&(r=e.pop()),new n.a((function(t){for(var n=e.map((function(){return[]})),c=e.map((function(){return!1})),a=new i.a,s=function(i){var s=Object(o.a)(e[i]);a.add(s.subscribe({next:function(e){n[i].push(e),function(){if(n.every((function(e){return e.length>0}))){var e=n.map((function(e){return e.shift()}));if(r)try{e=r.apply(void 0,e)}catch(e){return void t.error(e)}t.next(e),n.some((function(e,t){return 0===e.length&&c[t]}))&&t.complete()}}()},error:function(e){return t.error(e)},complete:function(){c[i]=!0,0===n[i].length&&t.complete()}}))},l=0;!t.closed&&l<e.length;l++)s(l);return a}))}},212:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(0),i=r(19),o=r(41),c=r(5),a=r(12);function s(e,t){return t?function(r){return r.pipe(s((function(r,n){return Object(o.a)(e(r,n)).pipe(Object(i.a)((function(e,i){return t(r,e,n,i)})))})))}:function(t){return Object(c.a)(t,new l(e))}}var l=function(){function e(e){this.project=e}return e.prototype.call=function(e,t){return t.subscribe(new u(e,this.project))},e}(),u=function(e){function t(t,r){var n=e.call(this,t)||this;return n.destination=t,n.project=r,n.hasCompleted=!1,n.index=0,n}return Object(n.c)(t,e),t.prototype._next=function(e){if(!this.innerSubscription){var t=void 0,r=this.index++;try{t=this.project(e,r)}catch(e){return void this.destination.error(e)}var n=new a.c(this);this.destination.add(n),this.innerSubscription=n,Object(a.e)(t,n)}},t.prototype._complete=function(){this.hasCompleted=!0,this.innerSubscription||this.destination.complete(),this.unsubscribe()},t.prototype.notifyNext=function(e){this.destination.next(e)},t.prototype.notifyError=function(e){this.destination.error(e)},t.prototype.notifyComplete=function(){this.innerSubscription=void 0,this.hasCompleted&&this.destination.complete()},t}(a.d)},216:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(1),i=r(78),o=r(71);function c(e,t,r){void 0===e&&(e=0);var c=-1;return null!=t&&(Object(o.a)(t)?r=t:c=t),Object(o.a)(r)||(r=i.a),new n.a((function(t){var n,i=Math.max(0,(n=e)instanceof Date&&!isNaN(n)?+e-r.now():e);return r.schedule(a,i,{counter:0,period:c,subscriber:t})}))}function a(e){var t=e.period,r=e.subscriber,n=e.counter++;if(r.next(n),!r.closed){if(t<0)return r.complete();this.schedule(e,t)}}}}]);