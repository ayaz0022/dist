(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function a(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(d){if(d.ep)return;d.ep=!0;const h=a(d);fetch(d.href,h)}})();function md(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var xa={exports:{}},io={},Ia={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uu;function jp(){if(Uu)return de;Uu=1;var r=Symbol.for("react.element"),l=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),m=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),M=Symbol.iterator;function E(k){return k===null||typeof k!="object"?null:(k=M&&k[M]||k["@@iterator"],typeof k=="function"?k:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,b={};function R(k,P,z){this.props=k,this.context=P,this.refs=b,this.updater=z||_}R.prototype.isReactComponent={},R.prototype.setState=function(k,P){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,P,"setState")},R.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function O(){}O.prototype=R.prototype;function U(k,P,z){this.props=k,this.context=P,this.refs=b,this.updater=z||_}var $=U.prototype=new O;$.constructor=U,S($,R.prototype),$.isPureReactComponent=!0;var Y=Array.isArray,L=Object.prototype.hasOwnProperty,ue={current:null},we={key:!0,ref:!0,__self:!0,__source:!0};function pe(k,P,z){var j,K={},x=null,te=null;if(P!=null)for(j in P.ref!==void 0&&(te=P.ref),P.key!==void 0&&(x=""+P.key),P)L.call(P,j)&&!we.hasOwnProperty(j)&&(K[j]=P[j]);var F=arguments.length-2;if(F===1)K.children=z;else if(1<F){for(var re=Array(F),le=0;le<F;le++)re[le]=arguments[le+2];K.children=re}if(k&&k.defaultProps)for(j in F=k.defaultProps,F)K[j]===void 0&&(K[j]=F[j]);return{$$typeof:r,type:k,key:x,ref:te,props:K,_owner:ue.current}}function ye(k,P){return{$$typeof:r,type:k.type,key:P,ref:k.ref,props:k.props,_owner:k._owner}}function Ie(k){return typeof k=="object"&&k!==null&&k.$$typeof===r}function Xe(k){var P={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(z){return P[z]})}var Ae=/\/+/g;function Ce(k,P){return typeof k=="object"&&k!==null&&k.key!=null?Xe(""+k.key):P.toString(36)}function Fe(k,P,z,j,K){var x=typeof k;(x==="undefined"||x==="boolean")&&(k=null);var te=!1;if(k===null)te=!0;else switch(x){case"string":case"number":te=!0;break;case"object":switch(k.$$typeof){case r:case l:te=!0}}if(te)return te=k,K=K(te),k=j===""?"."+Ce(te,0):j,Y(K)?(z="",k!=null&&(z=k.replace(Ae,"$&/")+"/"),Fe(K,P,z,"",function(le){return le})):K!=null&&(Ie(K)&&(K=ye(K,z+(!K.key||te&&te.key===K.key?"":(""+K.key).replace(Ae,"$&/")+"/")+k)),P.push(K)),1;if(te=0,j=j===""?".":j+":",Y(k))for(var F=0;F<k.length;F++){x=k[F];var re=j+Ce(x,F);te+=Fe(x,P,z,re,K)}else if(re=E(k),typeof re=="function")for(k=re.call(k),F=0;!(x=k.next()).done;)x=x.value,re=j+Ce(x,F++),te+=Fe(x,P,z,re,K);else if(x==="object")throw P=String(k),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.");return te}function Te(k,P,z){if(k==null)return k;var j=[],K=0;return Fe(k,j,"","",function(x){return P.call(z,x,K++)}),j}function He(k){if(k._status===-1){var P=k._result;P=P(),P.then(function(z){(k._status===0||k._status===-1)&&(k._status=1,k._result=z)},function(z){(k._status===0||k._status===-1)&&(k._status=2,k._result=z)}),k._status===-1&&(k._status=0,k._result=P)}if(k._status===1)return k._result.default;throw k._result}var me={current:null},V={transition:null},ie={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:V,ReactCurrentOwner:ue};function G(){throw Error("act(...) is not supported in production builds of React.")}return de.Children={map:Te,forEach:function(k,P,z){Te(k,function(){P.apply(this,arguments)},z)},count:function(k){var P=0;return Te(k,function(){P++}),P},toArray:function(k){return Te(k,function(P){return P})||[]},only:function(k){if(!Ie(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},de.Component=R,de.Fragment=a,de.Profiler=d,de.PureComponent=U,de.StrictMode=c,de.Suspense=f,de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,de.act=G,de.cloneElement=function(k,P,z){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var j=S({},k.props),K=k.key,x=k.ref,te=k._owner;if(P!=null){if(P.ref!==void 0&&(x=P.ref,te=ue.current),P.key!==void 0&&(K=""+P.key),k.type&&k.type.defaultProps)var F=k.type.defaultProps;for(re in P)L.call(P,re)&&!we.hasOwnProperty(re)&&(j[re]=P[re]===void 0&&F!==void 0?F[re]:P[re])}var re=arguments.length-2;if(re===1)j.children=z;else if(1<re){F=Array(re);for(var le=0;le<re;le++)F[le]=arguments[le+2];j.children=F}return{$$typeof:r,type:k.type,key:K,ref:x,props:j,_owner:te}},de.createContext=function(k){return k={$$typeof:m,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:h,_context:k},k.Consumer=k},de.createElement=pe,de.createFactory=function(k){var P=pe.bind(null,k);return P.type=k,P},de.createRef=function(){return{current:null}},de.forwardRef=function(k){return{$$typeof:w,render:k}},de.isValidElement=Ie,de.lazy=function(k){return{$$typeof:D,_payload:{_status:-1,_result:k},_init:He}},de.memo=function(k,P){return{$$typeof:y,type:k,compare:P===void 0?null:P}},de.startTransition=function(k){var P=V.transition;V.transition={};try{k()}finally{V.transition=P}},de.unstable_act=G,de.useCallback=function(k,P){return me.current.useCallback(k,P)},de.useContext=function(k){return me.current.useContext(k)},de.useDebugValue=function(){},de.useDeferredValue=function(k){return me.current.useDeferredValue(k)},de.useEffect=function(k,P){return me.current.useEffect(k,P)},de.useId=function(){return me.current.useId()},de.useImperativeHandle=function(k,P,z){return me.current.useImperativeHandle(k,P,z)},de.useInsertionEffect=function(k,P){return me.current.useInsertionEffect(k,P)},de.useLayoutEffect=function(k,P){return me.current.useLayoutEffect(k,P)},de.useMemo=function(k,P){return me.current.useMemo(k,P)},de.useReducer=function(k,P,z){return me.current.useReducer(k,P,z)},de.useRef=function(k){return me.current.useRef(k)},de.useState=function(k){return me.current.useState(k)},de.useSyncExternalStore=function(k,P,z){return me.current.useSyncExternalStore(k,P,z)},de.useTransition=function(){return me.current.useTransition()},de.version="18.3.1",de}var Fu;function ja(){return Fu||(Fu=1,Ia.exports=jp()),Ia.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zu;function Hp(){if(zu)return io;zu=1;var r=ja(),l=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function m(w,f,y){var D,M={},E=null,_=null;y!==void 0&&(E=""+y),f.key!==void 0&&(E=""+f.key),f.ref!==void 0&&(_=f.ref);for(D in f)c.call(f,D)&&!h.hasOwnProperty(D)&&(M[D]=f[D]);if(w&&w.defaultProps)for(D in f=w.defaultProps,f)M[D]===void 0&&(M[D]=f[D]);return{$$typeof:l,type:w,key:E,ref:_,props:M,_owner:d.current}}return io.Fragment=a,io.jsx=m,io.jsxs=m,io}var Wu;function Bp(){return Wu||(Wu=1,xa.exports=Hp()),xa.exports}var B=Bp(),A=ja();const kt=md(A);var kr={},Pa={exports:{}},mt={},Ca={exports:{}},Ta={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nu;function qp(){return Nu||(Nu=1,function(r){function l(V,ie){var G=V.length;V.push(ie);e:for(;0<G;){var k=G-1>>>1,P=V[k];if(0<d(P,ie))V[k]=ie,V[G]=P,G=k;else break e}}function a(V){return V.length===0?null:V[0]}function c(V){if(V.length===0)return null;var ie=V[0],G=V.pop();if(G!==ie){V[0]=G;e:for(var k=0,P=V.length,z=P>>>1;k<z;){var j=2*(k+1)-1,K=V[j],x=j+1,te=V[x];if(0>d(K,G))x<P&&0>d(te,K)?(V[k]=te,V[x]=G,k=x):(V[k]=K,V[j]=G,k=j);else if(x<P&&0>d(te,G))V[k]=te,V[x]=G,k=x;else break e}}return ie}function d(V,ie){var G=V.sortIndex-ie.sortIndex;return G!==0?G:V.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;r.unstable_now=function(){return h.now()}}else{var m=Date,w=m.now();r.unstable_now=function(){return m.now()-w}}var f=[],y=[],D=1,M=null,E=3,_=!1,S=!1,b=!1,R=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function $(V){for(var ie=a(y);ie!==null;){if(ie.callback===null)c(y);else if(ie.startTime<=V)c(y),ie.sortIndex=ie.expirationTime,l(f,ie);else break;ie=a(y)}}function Y(V){if(b=!1,$(V),!S)if(a(f)!==null)S=!0,He(L);else{var ie=a(y);ie!==null&&me(Y,ie.startTime-V)}}function L(V,ie){S=!1,b&&(b=!1,O(pe),pe=-1),_=!0;var G=E;try{for($(ie),M=a(f);M!==null&&(!(M.expirationTime>ie)||V&&!Xe());){var k=M.callback;if(typeof k=="function"){M.callback=null,E=M.priorityLevel;var P=k(M.expirationTime<=ie);ie=r.unstable_now(),typeof P=="function"?M.callback=P:M===a(f)&&c(f),$(ie)}else c(f);M=a(f)}if(M!==null)var z=!0;else{var j=a(y);j!==null&&me(Y,j.startTime-ie),z=!1}return z}finally{M=null,E=G,_=!1}}var ue=!1,we=null,pe=-1,ye=5,Ie=-1;function Xe(){return!(r.unstable_now()-Ie<ye)}function Ae(){if(we!==null){var V=r.unstable_now();Ie=V;var ie=!0;try{ie=we(!0,V)}finally{ie?Ce():(ue=!1,we=null)}}else ue=!1}var Ce;if(typeof U=="function")Ce=function(){U(Ae)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,Te=Fe.port2;Fe.port1.onmessage=Ae,Ce=function(){Te.postMessage(null)}}else Ce=function(){R(Ae,0)};function He(V){we=V,ue||(ue=!0,Ce())}function me(V,ie){pe=R(function(){V(r.unstable_now())},ie)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(V){V.callback=null},r.unstable_continueExecution=function(){S||_||(S=!0,He(L))},r.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<V?Math.floor(1e3/V):5},r.unstable_getCurrentPriorityLevel=function(){return E},r.unstable_getFirstCallbackNode=function(){return a(f)},r.unstable_next=function(V){switch(E){case 1:case 2:case 3:var ie=3;break;default:ie=E}var G=E;E=ie;try{return V()}finally{E=G}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(V,ie){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var G=E;E=V;try{return ie()}finally{E=G}},r.unstable_scheduleCallback=function(V,ie,G){var k=r.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?k+G:k):G=k,V){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=G+P,V={id:D++,callback:ie,priorityLevel:V,startTime:G,expirationTime:P,sortIndex:-1},G>k?(V.sortIndex=G,l(y,V),a(f)===null&&V===a(y)&&(b?(O(pe),pe=-1):b=!0,me(Y,G-k))):(V.sortIndex=P,l(f,V),S||_||(S=!0,He(L))),V},r.unstable_shouldYield=Xe,r.unstable_wrapCallback=function(V){var ie=E;return function(){var G=E;E=ie;try{return V.apply(this,arguments)}finally{E=G}}}}(Ta)),Ta}var ju;function Vp(){return ju||(ju=1,Ca.exports=qp()),Ca.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hu;function $p(){if(Hu)return mt;Hu=1;var r=ja(),l=Vp();function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,d={};function h(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(d[e]=t,e=0;e<t.length;e++)c.add(t[e])}var w=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,D={},M={};function E(e){return f.call(M,e)?!0:f.call(D,e)?!1:y.test(e)?M[e]=!0:(D[e]=!0,!1)}function _(e,t,i,n){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function S(e,t,i,n){if(t===null||typeof t>"u"||_(e,t,i,n))return!0;if(n)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function b(e,t,i,n,o,s,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=u}var R={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){R[e]=new b(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];R[t]=new b(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){R[e]=new b(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){R[e]=new b(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){R[e]=new b(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){R[e]=new b(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){R[e]=new b(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){R[e]=new b(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){R[e]=new b(e,5,!1,e.toLowerCase(),null,!1,!1)});var O=/[\-:]([a-z])/g;function U(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(O,U);R[t]=new b(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(O,U);R[t]=new b(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(O,U);R[t]=new b(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){R[e]=new b(e,1,!1,e.toLowerCase(),null,!1,!1)}),R.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){R[e]=new b(e,1,!1,e.toLowerCase(),null,!0,!0)});function $(e,t,i,n){var o=R.hasOwnProperty(t)?R[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(S(t,i,o,n)&&(i=null),n||o===null?E(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):o.mustUseProperty?e[o.propertyName]=i===null?o.type===3?!1:"":i:(t=o.attributeName,n=o.attributeNamespace,i===null?e.removeAttribute(t):(o=o.type,i=o===3||o===4&&i===!0?"":""+i,n?e.setAttributeNS(n,t,i):e.setAttribute(t,i))))}var Y=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),ue=Symbol.for("react.portal"),we=Symbol.for("react.fragment"),pe=Symbol.for("react.strict_mode"),ye=Symbol.for("react.profiler"),Ie=Symbol.for("react.provider"),Xe=Symbol.for("react.context"),Ae=Symbol.for("react.forward_ref"),Ce=Symbol.for("react.suspense"),Fe=Symbol.for("react.suspense_list"),Te=Symbol.for("react.memo"),He=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),V=Symbol.iterator;function ie(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,k;function P(e){if(k===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);k=t&&t[1]||""}return`
`+k+e}var z=!1;function j(e,t){if(!e||z)return"";z=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(T){var n=T}Reflect.construct(e,[],t)}else{try{t.call()}catch(T){n=T}e.call(t.prototype)}else{try{throw Error()}catch(T){n=T}e()}}catch(T){if(T&&n&&typeof T.stack=="string"){for(var o=T.stack.split(`
`),s=n.stack.split(`
`),u=o.length-1,p=s.length-1;1<=u&&0<=p&&o[u]!==s[p];)p--;for(;1<=u&&0<=p;u--,p--)if(o[u]!==s[p]){if(u!==1||p!==1)do if(u--,p--,0>p||o[u]!==s[p]){var g=`
`+o[u].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=u&&0<=p);break}}}finally{z=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?P(e):""}function K(e){switch(e.tag){case 5:return P(e.type);case 16:return P("Lazy");case 13:return P("Suspense");case 19:return P("SuspenseList");case 0:case 2:case 15:return e=j(e.type,!1),e;case 11:return e=j(e.type.render,!1),e;case 1:return e=j(e.type,!0),e;default:return""}}function x(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case we:return"Fragment";case ue:return"Portal";case ye:return"Profiler";case pe:return"StrictMode";case Ce:return"Suspense";case Fe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xe:return(e.displayName||"Context")+".Consumer";case Ie:return(e._context.displayName||"Context")+".Provider";case Ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Te:return t=e.displayName||null,t!==null?t:x(e.type)||"Memo";case He:t=e._payload,e=e._init;try{return x(e(t))}catch{}}return null}function te(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return x(t);case 8:return t===pe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function F(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function re(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function le(e){var t=re(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var o=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(u){n=""+u,s.call(this,u)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ge(e){e._valueTracker||(e._valueTracker=le(e))}function ce(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),n="";return e&&(n=re(e)?e.checked?"true":"false":e.value),e=n,e!==i?(t.setValue(e),!0):!1}function ze(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ge(e,t){var i=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function he(e,t){var i=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;i=F(t.value!=null?t.value:i),e._wrapperState={initialChecked:n,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ve(e,t){t=t.checked,t!=null&&$(e,"checked",t,!1)}function fe(e,t){Ve(e,t);var i=F(t.value),n=t.type;if(i!=null)n==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?qt(e,t.type,i):t.hasOwnProperty("defaultValue")&&qt(e,t.type,F(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Be(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function qt(e,t,i){(t!=="number"||ze(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Oe=Array.isArray;function Et(e,t,i,n){if(e=e.options,t){t={};for(var o=0;o<i.length;o++)t["$"+i[o]]=!0;for(i=0;i<e.length;i++)o=t.hasOwnProperty("$"+e[i].value),e[i].selected!==o&&(e[i].selected=o),o&&n&&(e[i].defaultSelected=!0)}else{for(i=""+F(i),t=null,o=0;o<e.length;o++){if(e[o].value===i){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Vt(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(a(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function lt(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(a(92));if(Oe(i)){if(1<i.length)throw Error(a(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:F(i)}}function se(e,t){var i=F(t.value),n=F(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),n!=null&&(e.defaultValue=""+n)}function Re(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ni(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ni(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ft,Ya=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,i,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ft=ft||document.createElement("div"),ft.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ft.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vn(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var wn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vd=["Webkit","ms","Moz","O"];Object.keys(wn).forEach(function(e){Vd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wn[t]=wn[e]})});function Ja(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||wn.hasOwnProperty(e)&&wn[e]?(""+t).trim():t+"px"}function Xa(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var n=i.indexOf("--")===0,o=Ja(i,t[i],n);i==="float"&&(i="cssFloat"),n?e.setProperty(i,o):e[i]=o}}var $d=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _r(e,t){if(t){if($d[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(a(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(t.style!=null&&typeof t.style!="object")throw Error(a(62))}}function Ur(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fr=null;function zr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wr=null,ji=null,Hi=null;function Za(e){if(e=jn(e)){if(typeof Wr!="function")throw Error(a(280));var t=e.stateNode;t&&(t=Uo(t),Wr(e.stateNode,e.type,t))}}function el(e){ji?Hi?Hi.push(e):Hi=[e]:ji=e}function tl(){if(ji){var e=ji,t=Hi;if(Hi=ji=null,Za(e),t)for(e=0;e<t.length;e++)Za(t[e])}}function il(e,t){return e(t)}function nl(){}var Nr=!1;function ol(e,t,i){if(Nr)return e(t,i);Nr=!0;try{return il(e,t,i)}finally{Nr=!1,(ji!==null||Hi!==null)&&(nl(),tl())}}function bn(e,t){var i=e.stateNode;if(i===null)return null;var n=Uo(i);if(n===null)return null;i=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(a(231,t,typeof i));return i}var jr=!1;if(w)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){jr=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{jr=!1}function Kd(e,t,i,n,o,s,u,p,g){var T=Array.prototype.slice.call(arguments,3);try{t.apply(i,T)}catch(N){this.onError(N)}}var Sn=!1,mo=null,go=!1,Hr=null,Gd={onError:function(e){Sn=!0,mo=e}};function Qd(e,t,i,n,o,s,u,p,g){Sn=!1,mo=null,Kd.apply(Gd,arguments)}function Yd(e,t,i,n,o,s,u,p,g){if(Qd.apply(this,arguments),Sn){if(Sn){var T=mo;Sn=!1,mo=null}else throw Error(a(198));go||(go=!0,Hr=T)}}function Ci(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function rl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function sl(e){if(Ci(e)!==e)throw Error(a(188))}function Jd(e){var t=e.alternate;if(!t){if(t=Ci(e),t===null)throw Error(a(188));return t!==e?null:e}for(var i=e,n=t;;){var o=i.return;if(o===null)break;var s=o.alternate;if(s===null){if(n=o.return,n!==null){i=n;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===i)return sl(o),e;if(s===n)return sl(o),t;s=s.sibling}throw Error(a(188))}if(i.return!==n.return)i=o,n=s;else{for(var u=!1,p=o.child;p;){if(p===i){u=!0,i=o,n=s;break}if(p===n){u=!0,n=o,i=s;break}p=p.sibling}if(!u){for(p=s.child;p;){if(p===i){u=!0,i=s,n=o;break}if(p===n){u=!0,n=s,i=o;break}p=p.sibling}if(!u)throw Error(a(189))}}if(i.alternate!==n)throw Error(a(190))}if(i.tag!==3)throw Error(a(188));return i.stateNode.current===i?e:t}function al(e){return e=Jd(e),e!==null?ll(e):null}function ll(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ll(e);if(t!==null)return t;e=e.sibling}return null}var cl=l.unstable_scheduleCallback,ul=l.unstable_cancelCallback,Xd=l.unstable_shouldYield,Zd=l.unstable_requestPaint,Ne=l.unstable_now,eh=l.unstable_getCurrentPriorityLevel,Br=l.unstable_ImmediatePriority,dl=l.unstable_UserBlockingPriority,fo=l.unstable_NormalPriority,th=l.unstable_LowPriority,hl=l.unstable_IdlePriority,yo=null,Ft=null;function ih(e){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(yo,e,void 0,(e.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:rh,nh=Math.log,oh=Math.LN2;function rh(e){return e>>>=0,e===0?32:31-(nh(e)/oh|0)|0}var vo=64,wo=4194304;function xn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bo(e,t){var i=e.pendingLanes;if(i===0)return 0;var n=0,o=e.suspendedLanes,s=e.pingedLanes,u=i&268435455;if(u!==0){var p=u&~o;p!==0?n=xn(p):(s&=u,s!==0&&(n=xn(s)))}else u=i&~o,u!==0?n=xn(u):s!==0&&(n=xn(s));if(n===0)return 0;if(t!==0&&t!==n&&(t&o)===0&&(o=n&-n,s=t&-t,o>=s||o===16&&(s&4194240)!==0))return t;if((n&4)!==0&&(n|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)i=31-At(t),o=1<<i,n|=e[i],t&=~o;return n}function sh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ah(e,t){for(var i=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var u=31-At(s),p=1<<u,g=o[u];g===-1?((p&i)===0||(p&n)!==0)&&(o[u]=sh(p,t)):g<=t&&(e.expiredLanes|=p),s&=~p}}function qr(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pl(){var e=vo;return vo<<=1,(vo&4194240)===0&&(vo=64),e}function Vr(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function In(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-At(t),e[t]=i}function lh(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<i;){var o=31-At(i),s=1<<o;t[o]=0,n[o]=-1,e[o]=-1,i&=~s}}function $r(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var n=31-At(i),o=1<<n;o&t|e[n]&t&&(e[n]|=t),i&=~o}}var Se=0;function ml(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var gl,Kr,fl,yl,vl,Gr=!1,ko=[],oi=null,ri=null,si=null,Pn=new Map,Cn=new Map,ai=[],ch="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wl(e,t){switch(e){case"focusin":case"focusout":oi=null;break;case"dragenter":case"dragleave":ri=null;break;case"mouseover":case"mouseout":si=null;break;case"pointerover":case"pointerout":Pn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cn.delete(t.pointerId)}}function Tn(e,t,i,n,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:i,eventSystemFlags:n,nativeEvent:s,targetContainers:[o]},t!==null&&(t=jn(t),t!==null&&Kr(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function uh(e,t,i,n,o){switch(t){case"focusin":return oi=Tn(oi,e,t,i,n,o),!0;case"dragenter":return ri=Tn(ri,e,t,i,n,o),!0;case"mouseover":return si=Tn(si,e,t,i,n,o),!0;case"pointerover":var s=o.pointerId;return Pn.set(s,Tn(Pn.get(s)||null,e,t,i,n,o)),!0;case"gotpointercapture":return s=o.pointerId,Cn.set(s,Tn(Cn.get(s)||null,e,t,i,n,o)),!0}return!1}function bl(e){var t=Ti(e.target);if(t!==null){var i=Ci(t);if(i!==null){if(t=i.tag,t===13){if(t=rl(i),t!==null){e.blockedOn=t,vl(e.priority,function(){fl(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function So(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Yr(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var n=new i.constructor(i.type,i);Fr=n,i.target.dispatchEvent(n),Fr=null}else return t=jn(i),t!==null&&Kr(t),e.blockedOn=i,!1;t.shift()}return!0}function kl(e,t,i){So(e)&&i.delete(t)}function dh(){Gr=!1,oi!==null&&So(oi)&&(oi=null),ri!==null&&So(ri)&&(ri=null),si!==null&&So(si)&&(si=null),Pn.forEach(kl),Cn.forEach(kl)}function Dn(e,t){e.blockedOn===t&&(e.blockedOn=null,Gr||(Gr=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,dh)))}function En(e){function t(o){return Dn(o,e)}if(0<ko.length){Dn(ko[0],e);for(var i=1;i<ko.length;i++){var n=ko[i];n.blockedOn===e&&(n.blockedOn=null)}}for(oi!==null&&Dn(oi,e),ri!==null&&Dn(ri,e),si!==null&&Dn(si,e),Pn.forEach(t),Cn.forEach(t),i=0;i<ai.length;i++)n=ai[i],n.blockedOn===e&&(n.blockedOn=null);for(;0<ai.length&&(i=ai[0],i.blockedOn===null);)bl(i),i.blockedOn===null&&ai.shift()}var Bi=Y.ReactCurrentBatchConfig,xo=!0;function hh(e,t,i,n){var o=Se,s=Bi.transition;Bi.transition=null;try{Se=1,Qr(e,t,i,n)}finally{Se=o,Bi.transition=s}}function ph(e,t,i,n){var o=Se,s=Bi.transition;Bi.transition=null;try{Se=4,Qr(e,t,i,n)}finally{Se=o,Bi.transition=s}}function Qr(e,t,i,n){if(xo){var o=Yr(e,t,i,n);if(o===null)ps(e,t,n,Io,i),wl(e,n);else if(uh(o,e,t,i,n))n.stopPropagation();else if(wl(e,n),t&4&&-1<ch.indexOf(e)){for(;o!==null;){var s=jn(o);if(s!==null&&gl(s),s=Yr(e,t,i,n),s===null&&ps(e,t,n,Io,i),s===o)break;o=s}o!==null&&n.stopPropagation()}else ps(e,t,n,null,i)}}var Io=null;function Yr(e,t,i,n){if(Io=null,e=zr(n),e=Ti(e),e!==null)if(t=Ci(e),t===null)e=null;else if(i=t.tag,i===13){if(e=rl(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Io=e,null}function Sl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(eh()){case Br:return 1;case dl:return 4;case fo:case th:return 16;case hl:return 536870912;default:return 16}default:return 16}}var li=null,Jr=null,Po=null;function xl(){if(Po)return Po;var e,t=Jr,i=t.length,n,o="value"in li?li.value:li.textContent,s=o.length;for(e=0;e<i&&t[e]===o[e];e++);var u=i-e;for(n=1;n<=u&&t[i-n]===o[s-n];n++);return Po=o.slice(e,1<n?1-n:void 0)}function Co(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function To(){return!0}function Il(){return!1}function yt(e){function t(i,n,o,s,u){this._reactName=i,this._targetInst=o,this.type=n,this.nativeEvent=s,this.target=u,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(i=e[p],this[p]=i?i(s):s[p]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?To:Il,this.isPropagationStopped=Il,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=To)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=To)},persist:function(){},isPersistent:To}),t}var qi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xr=yt(qi),An=G({},qi,{view:0,detail:0}),mh=yt(An),Zr,es,Rn,Do=G({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rn&&(Rn&&e.type==="mousemove"?(Zr=e.screenX-Rn.screenX,es=e.screenY-Rn.screenY):es=Zr=0,Rn=e),Zr)},movementY:function(e){return"movementY"in e?e.movementY:es}}),Pl=yt(Do),gh=G({},Do,{dataTransfer:0}),fh=yt(gh),yh=G({},An,{relatedTarget:0}),ts=yt(yh),vh=G({},qi,{animationName:0,elapsedTime:0,pseudoElement:0}),wh=yt(vh),bh=G({},qi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kh=yt(bh),Sh=G({},qi,{data:0}),Cl=yt(Sh),xh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ih={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ph={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ch(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ph[e])?!!t[e]:!1}function is(){return Ch}var Th=G({},An,{key:function(e){if(e.key){var t=xh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Co(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ih[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:is,charCode:function(e){return e.type==="keypress"?Co(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Co(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dh=yt(Th),Eh=G({},Do,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tl=yt(Eh),Ah=G({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:is}),Rh=yt(Ah),Mh=G({},qi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Oh=yt(Mh),Lh=G({},Do,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_h=yt(Lh),Uh=[9,13,27,32],ns=w&&"CompositionEvent"in window,Mn=null;w&&"documentMode"in document&&(Mn=document.documentMode);var Fh=w&&"TextEvent"in window&&!Mn,Dl=w&&(!ns||Mn&&8<Mn&&11>=Mn),El=" ",Al=!1;function Rl(e,t){switch(e){case"keyup":return Uh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ml(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vi=!1;function zh(e,t){switch(e){case"compositionend":return Ml(t);case"keypress":return t.which!==32?null:(Al=!0,El);case"textInput":return e=t.data,e===El&&Al?null:e;default:return null}}function Wh(e,t){if(Vi)return e==="compositionend"||!ns&&Rl(e,t)?(e=xl(),Po=Jr=li=null,Vi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dl&&t.locale!=="ko"?null:t.data;default:return null}}var Nh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ol(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nh[e.type]:t==="textarea"}function Ll(e,t,i,n){el(n),t=Oo(t,"onChange"),0<t.length&&(i=new Xr("onChange","change",null,i,n),e.push({event:i,listeners:t}))}var On=null,Ln=null;function jh(e){Xl(e,0)}function Eo(e){var t=Yi(e);if(ce(t))return e}function Hh(e,t){if(e==="change")return t}var _l=!1;if(w){var os;if(w){var rs="oninput"in document;if(!rs){var Ul=document.createElement("div");Ul.setAttribute("oninput","return;"),rs=typeof Ul.oninput=="function"}os=rs}else os=!1;_l=os&&(!document.documentMode||9<document.documentMode)}function Fl(){On&&(On.detachEvent("onpropertychange",zl),Ln=On=null)}function zl(e){if(e.propertyName==="value"&&Eo(Ln)){var t=[];Ll(t,Ln,e,zr(e)),ol(jh,t)}}function Bh(e,t,i){e==="focusin"?(Fl(),On=t,Ln=i,On.attachEvent("onpropertychange",zl)):e==="focusout"&&Fl()}function qh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Eo(Ln)}function Vh(e,t){if(e==="click")return Eo(t)}function $h(e,t){if(e==="input"||e==="change")return Eo(t)}function Kh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:Kh;function _n(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),n=Object.keys(t);if(i.length!==n.length)return!1;for(n=0;n<i.length;n++){var o=i[n];if(!f.call(t,o)||!Rt(e[o],t[o]))return!1}return!0}function Wl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nl(e,t){var i=Wl(e);e=0;for(var n;i;){if(i.nodeType===3){if(n=e+i.textContent.length,e<=t&&n>=t)return{node:i,offset:t-e};e=n}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Wl(i)}}function jl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hl(){for(var e=window,t=ze();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=ze(e.document)}return t}function ss(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gh(e){var t=Hl(),i=e.focusedElem,n=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&jl(i.ownerDocument.documentElement,i)){if(n!==null&&ss(i)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=i.textContent.length,s=Math.min(n.start,o);n=n.end===void 0?s:Math.min(n.end,o),!e.extend&&s>n&&(o=n,n=s,s=o),o=Nl(i,s);var u=Nl(i,n);o&&u&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),s>n?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qh=w&&"documentMode"in document&&11>=document.documentMode,$i=null,as=null,Un=null,ls=!1;function Bl(e,t,i){var n=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;ls||$i==null||$i!==ze(n)||(n=$i,"selectionStart"in n&&ss(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Un&&_n(Un,n)||(Un=n,n=Oo(as,"onSelect"),0<n.length&&(t=new Xr("onSelect","select",null,t,i),e.push({event:t,listeners:n}),t.target=$i)))}function Ao(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var Ki={animationend:Ao("Animation","AnimationEnd"),animationiteration:Ao("Animation","AnimationIteration"),animationstart:Ao("Animation","AnimationStart"),transitionend:Ao("Transition","TransitionEnd")},cs={},ql={};w&&(ql=document.createElement("div").style,"AnimationEvent"in window||(delete Ki.animationend.animation,delete Ki.animationiteration.animation,delete Ki.animationstart.animation),"TransitionEvent"in window||delete Ki.transitionend.transition);function Ro(e){if(cs[e])return cs[e];if(!Ki[e])return e;var t=Ki[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in ql)return cs[e]=t[i];return e}var Vl=Ro("animationend"),$l=Ro("animationiteration"),Kl=Ro("animationstart"),Gl=Ro("transitionend"),Ql=new Map,Yl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ci(e,t){Ql.set(e,t),h(t,[e])}for(var us=0;us<Yl.length;us++){var ds=Yl[us],Yh=ds.toLowerCase(),Jh=ds[0].toUpperCase()+ds.slice(1);ci(Yh,"on"+Jh)}ci(Vl,"onAnimationEnd"),ci($l,"onAnimationIteration"),ci(Kl,"onAnimationStart"),ci("dblclick","onDoubleClick"),ci("focusin","onFocus"),ci("focusout","onBlur"),ci(Gl,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));function Jl(e,t,i){var n=e.type||"unknown-event";e.currentTarget=i,Yd(n,t,void 0,e),e.currentTarget=null}function Xl(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var n=e[i],o=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var u=n.length-1;0<=u;u--){var p=n[u],g=p.instance,T=p.currentTarget;if(p=p.listener,g!==s&&o.isPropagationStopped())break e;Jl(o,p,T),s=g}else for(u=0;u<n.length;u++){if(p=n[u],g=p.instance,T=p.currentTarget,p=p.listener,g!==s&&o.isPropagationStopped())break e;Jl(o,p,T),s=g}}}if(go)throw e=Hr,go=!1,Hr=null,e}function De(e,t){var i=t[ws];i===void 0&&(i=t[ws]=new Set);var n=e+"__bubble";i.has(n)||(Zl(t,e,2,!1),i.add(n))}function hs(e,t,i){var n=0;t&&(n|=4),Zl(i,e,n,t)}var Mo="_reactListening"+Math.random().toString(36).slice(2);function zn(e){if(!e[Mo]){e[Mo]=!0,c.forEach(function(i){i!=="selectionchange"&&(Xh.has(i)||hs(i,!1,e),hs(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mo]||(t[Mo]=!0,hs("selectionchange",!1,t))}}function Zl(e,t,i,n){switch(Sl(t)){case 1:var o=hh;break;case 4:o=ph;break;default:o=Qr}i=o.bind(null,t,i,e),o=void 0,!jr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,i,{capture:!0,passive:o}):e.addEventListener(t,i,!0):o!==void 0?e.addEventListener(t,i,{passive:o}):e.addEventListener(t,i,!1)}function ps(e,t,i,n,o){var s=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var u=n.tag;if(u===3||u===4){var p=n.stateNode.containerInfo;if(p===o||p.nodeType===8&&p.parentNode===o)break;if(u===4)for(u=n.return;u!==null;){var g=u.tag;if((g===3||g===4)&&(g=u.stateNode.containerInfo,g===o||g.nodeType===8&&g.parentNode===o))return;u=u.return}for(;p!==null;){if(u=Ti(p),u===null)return;if(g=u.tag,g===5||g===6){n=s=u;continue e}p=p.parentNode}}n=n.return}ol(function(){var T=s,N=zr(i),H=[];e:{var W=Ql.get(e);if(W!==void 0){var Q=Xr,X=e;switch(e){case"keypress":if(Co(i)===0)break e;case"keydown":case"keyup":Q=Dh;break;case"focusin":X="focus",Q=ts;break;case"focusout":X="blur",Q=ts;break;case"beforeblur":case"afterblur":Q=ts;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=Pl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=fh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=Rh;break;case Vl:case $l:case Kl:Q=wh;break;case Gl:Q=Oh;break;case"scroll":Q=mh;break;case"wheel":Q=_h;break;case"copy":case"cut":case"paste":Q=kh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=Tl}var Z=(t&4)!==0,je=!Z&&e==="scroll",I=Z?W!==null?W+"Capture":null:W;Z=[];for(var v=T,C;v!==null;){C=v;var q=C.stateNode;if(C.tag===5&&q!==null&&(C=q,I!==null&&(q=bn(v,I),q!=null&&Z.push(Wn(v,q,C)))),je)break;v=v.return}0<Z.length&&(W=new Q(W,X,null,i,N),H.push({event:W,listeners:Z}))}}if((t&7)===0){e:{if(W=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",W&&i!==Fr&&(X=i.relatedTarget||i.fromElement)&&(Ti(X)||X[$t]))break e;if((Q||W)&&(W=N.window===N?N:(W=N.ownerDocument)?W.defaultView||W.parentWindow:window,Q?(X=i.relatedTarget||i.toElement,Q=T,X=X?Ti(X):null,X!==null&&(je=Ci(X),X!==je||X.tag!==5&&X.tag!==6)&&(X=null)):(Q=null,X=T),Q!==X)){if(Z=Pl,q="onMouseLeave",I="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(Z=Tl,q="onPointerLeave",I="onPointerEnter",v="pointer"),je=Q==null?W:Yi(Q),C=X==null?W:Yi(X),W=new Z(q,v+"leave",Q,i,N),W.target=je,W.relatedTarget=C,q=null,Ti(N)===T&&(Z=new Z(I,v+"enter",X,i,N),Z.target=C,Z.relatedTarget=je,q=Z),je=q,Q&&X)t:{for(Z=Q,I=X,v=0,C=Z;C;C=Gi(C))v++;for(C=0,q=I;q;q=Gi(q))C++;for(;0<v-C;)Z=Gi(Z),v--;for(;0<C-v;)I=Gi(I),C--;for(;v--;){if(Z===I||I!==null&&Z===I.alternate)break t;Z=Gi(Z),I=Gi(I)}Z=null}else Z=null;Q!==null&&ec(H,W,Q,Z,!1),X!==null&&je!==null&&ec(H,je,X,Z,!0)}}e:{if(W=T?Yi(T):window,Q=W.nodeName&&W.nodeName.toLowerCase(),Q==="select"||Q==="input"&&W.type==="file")var ee=Hh;else if(Ol(W))if(_l)ee=$h;else{ee=qh;var ne=Bh}else(Q=W.nodeName)&&Q.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(ee=Vh);if(ee&&(ee=ee(e,T))){Ll(H,ee,i,N);break e}ne&&ne(e,W,T),e==="focusout"&&(ne=W._wrapperState)&&ne.controlled&&W.type==="number"&&qt(W,"number",W.value)}switch(ne=T?Yi(T):window,e){case"focusin":(Ol(ne)||ne.contentEditable==="true")&&($i=ne,as=T,Un=null);break;case"focusout":Un=as=$i=null;break;case"mousedown":ls=!0;break;case"contextmenu":case"mouseup":case"dragend":ls=!1,Bl(H,i,N);break;case"selectionchange":if(Qh)break;case"keydown":case"keyup":Bl(H,i,N)}var oe;if(ns)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else Vi?Rl(e,i)&&(ae="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(ae="onCompositionStart");ae&&(Dl&&i.locale!=="ko"&&(Vi||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&Vi&&(oe=xl()):(li=N,Jr="value"in li?li.value:li.textContent,Vi=!0)),ne=Oo(T,ae),0<ne.length&&(ae=new Cl(ae,e,null,i,N),H.push({event:ae,listeners:ne}),oe?ae.data=oe:(oe=Ml(i),oe!==null&&(ae.data=oe)))),(oe=Fh?zh(e,i):Wh(e,i))&&(T=Oo(T,"onBeforeInput"),0<T.length&&(N=new Cl("onBeforeInput","beforeinput",null,i,N),H.push({event:N,listeners:T}),N.data=oe))}Xl(H,t)})}function Wn(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Oo(e,t){for(var i=t+"Capture",n=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=bn(e,i),s!=null&&n.unshift(Wn(e,s,o)),s=bn(e,t),s!=null&&n.push(Wn(e,s,o))),e=e.return}return n}function Gi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ec(e,t,i,n,o){for(var s=t._reactName,u=[];i!==null&&i!==n;){var p=i,g=p.alternate,T=p.stateNode;if(g!==null&&g===n)break;p.tag===5&&T!==null&&(p=T,o?(g=bn(i,s),g!=null&&u.unshift(Wn(i,g,p))):o||(g=bn(i,s),g!=null&&u.push(Wn(i,g,p)))),i=i.return}u.length!==0&&e.push({event:t,listeners:u})}var Zh=/\r\n?/g,ep=/\u0000|\uFFFD/g;function tc(e){return(typeof e=="string"?e:""+e).replace(Zh,`
`).replace(ep,"")}function Lo(e,t,i){if(t=tc(t),tc(e)!==t&&i)throw Error(a(425))}function _o(){}var ms=null,gs=null;function fs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ys=typeof setTimeout=="function"?setTimeout:void 0,tp=typeof clearTimeout=="function"?clearTimeout:void 0,ic=typeof Promise=="function"?Promise:void 0,ip=typeof queueMicrotask=="function"?queueMicrotask:typeof ic<"u"?function(e){return ic.resolve(null).then(e).catch(np)}:ys;function np(e){setTimeout(function(){throw e})}function vs(e,t){var i=t,n=0;do{var o=i.nextSibling;if(e.removeChild(i),o&&o.nodeType===8)if(i=o.data,i==="/$"){if(n===0){e.removeChild(o),En(t);return}n--}else i!=="$"&&i!=="$?"&&i!=="$!"||n++;i=o}while(i);En(t)}function ui(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var Qi=Math.random().toString(36).slice(2),zt="__reactFiber$"+Qi,Nn="__reactProps$"+Qi,$t="__reactContainer$"+Qi,ws="__reactEvents$"+Qi,op="__reactListeners$"+Qi,rp="__reactHandles$"+Qi;function Ti(e){var t=e[zt];if(t)return t;for(var i=e.parentNode;i;){if(t=i[$t]||i[zt]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=nc(e);e!==null;){if(i=e[zt])return i;e=nc(e)}return t}e=i,i=e.parentNode}return null}function jn(e){return e=e[zt]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function Uo(e){return e[Nn]||null}var bs=[],Ji=-1;function di(e){return{current:e}}function Ee(e){0>Ji||(e.current=bs[Ji],bs[Ji]=null,Ji--)}function Pe(e,t){Ji++,bs[Ji]=e.current,e.current=t}var hi={},tt=di(hi),ct=di(!1),Di=hi;function Xi(e,t){var i=e.type.contextTypes;if(!i)return hi;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in i)o[s]=t[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ut(e){return e=e.childContextTypes,e!=null}function Fo(){Ee(ct),Ee(tt)}function oc(e,t,i){if(tt.current!==hi)throw Error(a(168));Pe(tt,t),Pe(ct,i)}function rc(e,t,i){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return i;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(a(108,te(e)||"Unknown",o));return G({},i,n)}function zo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||hi,Di=tt.current,Pe(tt,e),Pe(ct,ct.current),!0}function sc(e,t,i){var n=e.stateNode;if(!n)throw Error(a(169));i?(e=rc(e,t,Di),n.__reactInternalMemoizedMergedChildContext=e,Ee(ct),Ee(tt),Pe(tt,e)):Ee(ct),Pe(ct,i)}var Kt=null,Wo=!1,ks=!1;function ac(e){Kt===null?Kt=[e]:Kt.push(e)}function sp(e){Wo=!0,ac(e)}function pi(){if(!ks&&Kt!==null){ks=!0;var e=0,t=Se;try{var i=Kt;for(Se=1;e<i.length;e++){var n=i[e];do n=n(!0);while(n!==null)}Kt=null,Wo=!1}catch(o){throw Kt!==null&&(Kt=Kt.slice(e+1)),cl(Br,pi),o}finally{Se=t,ks=!1}}return null}var Zi=[],en=0,No=null,jo=0,St=[],xt=0,Ei=null,Gt=1,Qt="";function Ai(e,t){Zi[en++]=jo,Zi[en++]=No,No=e,jo=t}function lc(e,t,i){St[xt++]=Gt,St[xt++]=Qt,St[xt++]=Ei,Ei=e;var n=Gt;e=Qt;var o=32-At(n)-1;n&=~(1<<o),i+=1;var s=32-At(t)+o;if(30<s){var u=o-o%5;s=(n&(1<<u)-1).toString(32),n>>=u,o-=u,Gt=1<<32-At(t)+o|i<<o|n,Qt=s+e}else Gt=1<<s|i<<o|n,Qt=e}function Ss(e){e.return!==null&&(Ai(e,1),lc(e,1,0))}function xs(e){for(;e===No;)No=Zi[--en],Zi[en]=null,jo=Zi[--en],Zi[en]=null;for(;e===Ei;)Ei=St[--xt],St[xt]=null,Qt=St[--xt],St[xt]=null,Gt=St[--xt],St[xt]=null}var vt=null,wt=null,Me=!1,Mt=null;function cc(e,t){var i=Tt(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function uc(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,wt=ui(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,wt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=Ei!==null?{id:Gt,overflow:Qt}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=Tt(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,vt=e,wt=null,!0):!1;default:return!1}}function Is(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ps(e){if(Me){var t=wt;if(t){var i=t;if(!uc(e,t)){if(Is(e))throw Error(a(418));t=ui(i.nextSibling);var n=vt;t&&uc(e,t)?cc(n,i):(e.flags=e.flags&-4097|2,Me=!1,vt=e)}}else{if(Is(e))throw Error(a(418));e.flags=e.flags&-4097|2,Me=!1,vt=e}}}function dc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function Ho(e){if(e!==vt)return!1;if(!Me)return dc(e),Me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!fs(e.type,e.memoizedProps)),t&&(t=wt)){if(Is(e))throw hc(),Error(a(418));for(;t;)cc(e,t),t=ui(t.nextSibling)}if(dc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){wt=ui(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}wt=null}}else wt=vt?ui(e.stateNode.nextSibling):null;return!0}function hc(){for(var e=wt;e;)e=ui(e.nextSibling)}function tn(){wt=vt=null,Me=!1}function Cs(e){Mt===null?Mt=[e]:Mt.push(e)}var ap=Y.ReactCurrentBatchConfig;function Hn(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(a(309));var n=i.stateNode}if(!n)throw Error(a(147,e));var o=n,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(u){var p=o.refs;u===null?delete p[s]:p[s]=u},t._stringRef=s,t)}if(typeof e!="string")throw Error(a(284));if(!i._owner)throw Error(a(290,e))}return e}function Bo(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pc(e){var t=e._init;return t(e._payload)}function mc(e){function t(I,v){if(e){var C=I.deletions;C===null?(I.deletions=[v],I.flags|=16):C.push(v)}}function i(I,v){if(!e)return null;for(;v!==null;)t(I,v),v=v.sibling;return null}function n(I,v){for(I=new Map;v!==null;)v.key!==null?I.set(v.key,v):I.set(v.index,v),v=v.sibling;return I}function o(I,v){return I=ki(I,v),I.index=0,I.sibling=null,I}function s(I,v,C){return I.index=C,e?(C=I.alternate,C!==null?(C=C.index,C<v?(I.flags|=2,v):C):(I.flags|=2,v)):(I.flags|=1048576,v)}function u(I){return e&&I.alternate===null&&(I.flags|=2),I}function p(I,v,C,q){return v===null||v.tag!==6?(v=ya(C,I.mode,q),v.return=I,v):(v=o(v,C),v.return=I,v)}function g(I,v,C,q){var ee=C.type;return ee===we?N(I,v,C.props.children,q,C.key):v!==null&&(v.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===He&&pc(ee)===v.type)?(q=o(v,C.props),q.ref=Hn(I,v,C),q.return=I,q):(q=pr(C.type,C.key,C.props,null,I.mode,q),q.ref=Hn(I,v,C),q.return=I,q)}function T(I,v,C,q){return v===null||v.tag!==4||v.stateNode.containerInfo!==C.containerInfo||v.stateNode.implementation!==C.implementation?(v=va(C,I.mode,q),v.return=I,v):(v=o(v,C.children||[]),v.return=I,v)}function N(I,v,C,q,ee){return v===null||v.tag!==7?(v=zi(C,I.mode,q,ee),v.return=I,v):(v=o(v,C),v.return=I,v)}function H(I,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ya(""+v,I.mode,C),v.return=I,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case L:return C=pr(v.type,v.key,v.props,null,I.mode,C),C.ref=Hn(I,null,v),C.return=I,C;case ue:return v=va(v,I.mode,C),v.return=I,v;case He:var q=v._init;return H(I,q(v._payload),C)}if(Oe(v)||ie(v))return v=zi(v,I.mode,C,null),v.return=I,v;Bo(I,v)}return null}function W(I,v,C,q){var ee=v!==null?v.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return ee!==null?null:p(I,v,""+C,q);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case L:return C.key===ee?g(I,v,C,q):null;case ue:return C.key===ee?T(I,v,C,q):null;case He:return ee=C._init,W(I,v,ee(C._payload),q)}if(Oe(C)||ie(C))return ee!==null?null:N(I,v,C,q,null);Bo(I,C)}return null}function Q(I,v,C,q,ee){if(typeof q=="string"&&q!==""||typeof q=="number")return I=I.get(C)||null,p(v,I,""+q,ee);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case L:return I=I.get(q.key===null?C:q.key)||null,g(v,I,q,ee);case ue:return I=I.get(q.key===null?C:q.key)||null,T(v,I,q,ee);case He:var ne=q._init;return Q(I,v,C,ne(q._payload),ee)}if(Oe(q)||ie(q))return I=I.get(C)||null,N(v,I,q,ee,null);Bo(v,q)}return null}function X(I,v,C,q){for(var ee=null,ne=null,oe=v,ae=v=0,Je=null;oe!==null&&ae<C.length;ae++){oe.index>ae?(Je=oe,oe=null):Je=oe.sibling;var be=W(I,oe,C[ae],q);if(be===null){oe===null&&(oe=Je);break}e&&oe&&be.alternate===null&&t(I,oe),v=s(be,v,ae),ne===null?ee=be:ne.sibling=be,ne=be,oe=Je}if(ae===C.length)return i(I,oe),Me&&Ai(I,ae),ee;if(oe===null){for(;ae<C.length;ae++)oe=H(I,C[ae],q),oe!==null&&(v=s(oe,v,ae),ne===null?ee=oe:ne.sibling=oe,ne=oe);return Me&&Ai(I,ae),ee}for(oe=n(I,oe);ae<C.length;ae++)Je=Q(oe,I,ae,C[ae],q),Je!==null&&(e&&Je.alternate!==null&&oe.delete(Je.key===null?ae:Je.key),v=s(Je,v,ae),ne===null?ee=Je:ne.sibling=Je,ne=Je);return e&&oe.forEach(function(Si){return t(I,Si)}),Me&&Ai(I,ae),ee}function Z(I,v,C,q){var ee=ie(C);if(typeof ee!="function")throw Error(a(150));if(C=ee.call(C),C==null)throw Error(a(151));for(var ne=ee=null,oe=v,ae=v=0,Je=null,be=C.next();oe!==null&&!be.done;ae++,be=C.next()){oe.index>ae?(Je=oe,oe=null):Je=oe.sibling;var Si=W(I,oe,be.value,q);if(Si===null){oe===null&&(oe=Je);break}e&&oe&&Si.alternate===null&&t(I,oe),v=s(Si,v,ae),ne===null?ee=Si:ne.sibling=Si,ne=Si,oe=Je}if(be.done)return i(I,oe),Me&&Ai(I,ae),ee;if(oe===null){for(;!be.done;ae++,be=C.next())be=H(I,be.value,q),be!==null&&(v=s(be,v,ae),ne===null?ee=be:ne.sibling=be,ne=be);return Me&&Ai(I,ae),ee}for(oe=n(I,oe);!be.done;ae++,be=C.next())be=Q(oe,I,ae,be.value,q),be!==null&&(e&&be.alternate!==null&&oe.delete(be.key===null?ae:be.key),v=s(be,v,ae),ne===null?ee=be:ne.sibling=be,ne=be);return e&&oe.forEach(function(Np){return t(I,Np)}),Me&&Ai(I,ae),ee}function je(I,v,C,q){if(typeof C=="object"&&C!==null&&C.type===we&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case L:e:{for(var ee=C.key,ne=v;ne!==null;){if(ne.key===ee){if(ee=C.type,ee===we){if(ne.tag===7){i(I,ne.sibling),v=o(ne,C.props.children),v.return=I,I=v;break e}}else if(ne.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===He&&pc(ee)===ne.type){i(I,ne.sibling),v=o(ne,C.props),v.ref=Hn(I,ne,C),v.return=I,I=v;break e}i(I,ne);break}else t(I,ne);ne=ne.sibling}C.type===we?(v=zi(C.props.children,I.mode,q,C.key),v.return=I,I=v):(q=pr(C.type,C.key,C.props,null,I.mode,q),q.ref=Hn(I,v,C),q.return=I,I=q)}return u(I);case ue:e:{for(ne=C.key;v!==null;){if(v.key===ne)if(v.tag===4&&v.stateNode.containerInfo===C.containerInfo&&v.stateNode.implementation===C.implementation){i(I,v.sibling),v=o(v,C.children||[]),v.return=I,I=v;break e}else{i(I,v);break}else t(I,v);v=v.sibling}v=va(C,I.mode,q),v.return=I,I=v}return u(I);case He:return ne=C._init,je(I,v,ne(C._payload),q)}if(Oe(C))return X(I,v,C,q);if(ie(C))return Z(I,v,C,q);Bo(I,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,v!==null&&v.tag===6?(i(I,v.sibling),v=o(v,C),v.return=I,I=v):(i(I,v),v=ya(C,I.mode,q),v.return=I,I=v),u(I)):i(I,v)}return je}var nn=mc(!0),gc=mc(!1),qo=di(null),Vo=null,on=null,Ts=null;function Ds(){Ts=on=Vo=null}function Es(e){var t=qo.current;Ee(qo),e._currentValue=t}function As(e,t,i){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===i)break;e=e.return}}function rn(e,t){Vo=e,Ts=on=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(dt=!0),e.firstContext=null)}function It(e){var t=e._currentValue;if(Ts!==e)if(e={context:e,memoizedValue:t,next:null},on===null){if(Vo===null)throw Error(a(308));on=e,Vo.dependencies={lanes:0,firstContext:e}}else on=on.next=e;return t}var Ri=null;function Rs(e){Ri===null?Ri=[e]:Ri.push(e)}function fc(e,t,i,n){var o=t.interleaved;return o===null?(i.next=i,Rs(t)):(i.next=o.next,o.next=i),t.interleaved=i,Yt(e,n)}function Yt(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var mi=!1;function Ms(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gi(e,t,i){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ve&2)!==0){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,Yt(e,i)}return o=n.interleaved,o===null?(t.next=t,Rs(n)):(t.next=o.next,o.next=t),n.interleaved=t,Yt(e,i)}function $o(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,i|=n,t.lanes=i,$r(e,i)}}function vc(e,t){var i=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,i===n)){var o=null,s=null;if(i=i.firstBaseUpdate,i!==null){do{var u={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};s===null?o=s=u:s=s.next=u,i=i.next}while(i!==null);s===null?o=s=t:s=s.next=t}else o=s=t;i={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function Ko(e,t,i,n){var o=e.updateQueue;mi=!1;var s=o.firstBaseUpdate,u=o.lastBaseUpdate,p=o.shared.pending;if(p!==null){o.shared.pending=null;var g=p,T=g.next;g.next=null,u===null?s=T:u.next=T,u=g;var N=e.alternate;N!==null&&(N=N.updateQueue,p=N.lastBaseUpdate,p!==u&&(p===null?N.firstBaseUpdate=T:p.next=T,N.lastBaseUpdate=g))}if(s!==null){var H=o.baseState;u=0,N=T=g=null,p=s;do{var W=p.lane,Q=p.eventTime;if((n&W)===W){N!==null&&(N=N.next={eventTime:Q,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var X=e,Z=p;switch(W=t,Q=i,Z.tag){case 1:if(X=Z.payload,typeof X=="function"){H=X.call(Q,H,W);break e}H=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=Z.payload,W=typeof X=="function"?X.call(Q,H,W):X,W==null)break e;H=G({},H,W);break e;case 2:mi=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,W=o.effects,W===null?o.effects=[p]:W.push(p))}else Q={eventTime:Q,lane:W,tag:p.tag,payload:p.payload,callback:p.callback,next:null},N===null?(T=N=Q,g=H):N=N.next=Q,u|=W;if(p=p.next,p===null){if(p=o.shared.pending,p===null)break;W=p,p=W.next,W.next=null,o.lastBaseUpdate=W,o.shared.pending=null}}while(!0);if(N===null&&(g=H),o.baseState=g,o.firstBaseUpdate=T,o.lastBaseUpdate=N,t=o.shared.interleaved,t!==null){o=t;do u|=o.lane,o=o.next;while(o!==t)}else s===null&&(o.shared.lanes=0);Li|=u,e.lanes=u,e.memoizedState=H}}function wc(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=i,typeof o!="function")throw Error(a(191,o));o.call(n)}}}var Bn={},Wt=di(Bn),qn=di(Bn),Vn=di(Bn);function Mi(e){if(e===Bn)throw Error(a(174));return e}function Os(e,t){switch(Pe(Vn,t),Pe(qn,e),Pe(Wt,Bn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Pi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Pi(t,e)}Ee(Wt),Pe(Wt,t)}function sn(){Ee(Wt),Ee(qn),Ee(Vn)}function bc(e){Mi(Vn.current);var t=Mi(Wt.current),i=Pi(t,e.type);t!==i&&(Pe(qn,e),Pe(Wt,i))}function Ls(e){qn.current===e&&(Ee(Wt),Ee(qn))}var Le=di(0);function Go(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _s=[];function Us(){for(var e=0;e<_s.length;e++)_s[e]._workInProgressVersionPrimary=null;_s.length=0}var Qo=Y.ReactCurrentDispatcher,Fs=Y.ReactCurrentBatchConfig,Oi=0,_e=null,$e=null,Qe=null,Yo=!1,$n=!1,Kn=0,lp=0;function it(){throw Error(a(321))}function zs(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!Rt(e[i],t[i]))return!1;return!0}function Ws(e,t,i,n,o,s){if(Oi=s,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qo.current=e===null||e.memoizedState===null?hp:pp,e=i(n,o),$n){s=0;do{if($n=!1,Kn=0,25<=s)throw Error(a(301));s+=1,Qe=$e=null,t.updateQueue=null,Qo.current=mp,e=i(n,o)}while($n)}if(Qo.current=Zo,t=$e!==null&&$e.next!==null,Oi=0,Qe=$e=_e=null,Yo=!1,t)throw Error(a(300));return e}function Ns(){var e=Kn!==0;return Kn=0,e}function Nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?_e.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Pt(){if($e===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=Qe===null?_e.memoizedState:Qe.next;if(t!==null)Qe=t,$e=e;else{if(e===null)throw Error(a(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Qe===null?_e.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function Gn(e,t){return typeof t=="function"?t(e):t}function js(e){var t=Pt(),i=t.queue;if(i===null)throw Error(a(311));i.lastRenderedReducer=e;var n=$e,o=n.baseQueue,s=i.pending;if(s!==null){if(o!==null){var u=o.next;o.next=s.next,s.next=u}n.baseQueue=o=s,i.pending=null}if(o!==null){s=o.next,n=n.baseState;var p=u=null,g=null,T=s;do{var N=T.lane;if((Oi&N)===N)g!==null&&(g=g.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),n=T.hasEagerState?T.eagerState:e(n,T.action);else{var H={lane:N,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};g===null?(p=g=H,u=n):g=g.next=H,_e.lanes|=N,Li|=N}T=T.next}while(T!==null&&T!==s);g===null?u=n:g.next=p,Rt(n,t.memoizedState)||(dt=!0),t.memoizedState=n,t.baseState=u,t.baseQueue=g,i.lastRenderedState=n}if(e=i.interleaved,e!==null){o=e;do s=o.lane,_e.lanes|=s,Li|=s,o=o.next;while(o!==e)}else o===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function Hs(e){var t=Pt(),i=t.queue;if(i===null)throw Error(a(311));i.lastRenderedReducer=e;var n=i.dispatch,o=i.pending,s=t.memoizedState;if(o!==null){i.pending=null;var u=o=o.next;do s=e(s,u.action),u=u.next;while(u!==o);Rt(s,t.memoizedState)||(dt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),i.lastRenderedState=s}return[s,n]}function kc(){}function Sc(e,t){var i=_e,n=Pt(),o=t(),s=!Rt(n.memoizedState,o);if(s&&(n.memoizedState=o,dt=!0),n=n.queue,Bs(Pc.bind(null,i,n,e),[e]),n.getSnapshot!==t||s||Qe!==null&&Qe.memoizedState.tag&1){if(i.flags|=2048,Qn(9,Ic.bind(null,i,n,o,t),void 0,null),Ye===null)throw Error(a(349));(Oi&30)!==0||xc(i,t,o)}return o}function xc(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function Ic(e,t,i,n){t.value=i,t.getSnapshot=n,Cc(t)&&Tc(e)}function Pc(e,t,i){return i(function(){Cc(t)&&Tc(e)})}function Cc(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!Rt(e,i)}catch{return!0}}function Tc(e){var t=Yt(e,1);t!==null&&Ut(t,e,1,-1)}function Dc(e){var t=Nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gn,lastRenderedState:e},t.queue=e,e=e.dispatch=dp.bind(null,_e,e),[t.memoizedState,e]}function Qn(e,t,i,n){return e={tag:e,create:t,destroy:i,deps:n,next:null},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(n=i.next,i.next=e,e.next=n,t.lastEffect=e)),e}function Ec(){return Pt().memoizedState}function Jo(e,t,i,n){var o=Nt();_e.flags|=e,o.memoizedState=Qn(1|t,i,void 0,n===void 0?null:n)}function Xo(e,t,i,n){var o=Pt();n=n===void 0?null:n;var s=void 0;if($e!==null){var u=$e.memoizedState;if(s=u.destroy,n!==null&&zs(n,u.deps)){o.memoizedState=Qn(t,i,s,n);return}}_e.flags|=e,o.memoizedState=Qn(1|t,i,s,n)}function Ac(e,t){return Jo(8390656,8,e,t)}function Bs(e,t){return Xo(2048,8,e,t)}function Rc(e,t){return Xo(4,2,e,t)}function Mc(e,t){return Xo(4,4,e,t)}function Oc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lc(e,t,i){return i=i!=null?i.concat([e]):null,Xo(4,4,Oc.bind(null,t,e),i)}function qs(){}function _c(e,t){var i=Pt();t=t===void 0?null:t;var n=i.memoizedState;return n!==null&&t!==null&&zs(t,n[1])?n[0]:(i.memoizedState=[e,t],e)}function Uc(e,t){var i=Pt();t=t===void 0?null:t;var n=i.memoizedState;return n!==null&&t!==null&&zs(t,n[1])?n[0]:(e=e(),i.memoizedState=[e,t],e)}function Fc(e,t,i){return(Oi&21)===0?(e.baseState&&(e.baseState=!1,dt=!0),e.memoizedState=i):(Rt(i,t)||(i=pl(),_e.lanes|=i,Li|=i,e.baseState=!0),t)}function cp(e,t){var i=Se;Se=i!==0&&4>i?i:4,e(!0);var n=Fs.transition;Fs.transition={};try{e(!1),t()}finally{Se=i,Fs.transition=n}}function zc(){return Pt().memoizedState}function up(e,t,i){var n=wi(e);if(i={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null},Wc(e))Nc(t,i);else if(i=fc(e,t,i,n),i!==null){var o=at();Ut(i,e,n,o),jc(i,t,n)}}function dp(e,t,i){var n=wi(e),o={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null};if(Wc(e))Nc(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var u=t.lastRenderedState,p=s(u,i);if(o.hasEagerState=!0,o.eagerState=p,Rt(p,u)){var g=t.interleaved;g===null?(o.next=o,Rs(t)):(o.next=g.next,g.next=o),t.interleaved=o;return}}catch{}finally{}i=fc(e,t,o,n),i!==null&&(o=at(),Ut(i,e,n,o),jc(i,t,n))}}function Wc(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function Nc(e,t){$n=Yo=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function jc(e,t,i){if((i&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,i|=n,t.lanes=i,$r(e,i)}}var Zo={readContext:It,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},hp={readContext:It,useCallback:function(e,t){return Nt().memoizedState=[e,t===void 0?null:t],e},useContext:It,useEffect:Ac,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,Jo(4194308,4,Oc.bind(null,t,e),i)},useLayoutEffect:function(e,t){return Jo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Jo(4,2,e,t)},useMemo:function(e,t){var i=Nt();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var n=Nt();return t=i!==void 0?i(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=up.bind(null,_e,e),[n.memoizedState,e]},useRef:function(e){var t=Nt();return e={current:e},t.memoizedState=e},useState:Dc,useDebugValue:qs,useDeferredValue:function(e){return Nt().memoizedState=e},useTransition:function(){var e=Dc(!1),t=e[0];return e=cp.bind(null,e[1]),Nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var n=_e,o=Nt();if(Me){if(i===void 0)throw Error(a(407));i=i()}else{if(i=t(),Ye===null)throw Error(a(349));(Oi&30)!==0||xc(n,t,i)}o.memoizedState=i;var s={value:i,getSnapshot:t};return o.queue=s,Ac(Pc.bind(null,n,s,e),[e]),n.flags|=2048,Qn(9,Ic.bind(null,n,s,i,t),void 0,null),i},useId:function(){var e=Nt(),t=Ye.identifierPrefix;if(Me){var i=Qt,n=Gt;i=(n&~(1<<32-At(n)-1)).toString(32)+i,t=":"+t+"R"+i,i=Kn++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=lp++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pp={readContext:It,useCallback:_c,useContext:It,useEffect:Bs,useImperativeHandle:Lc,useInsertionEffect:Rc,useLayoutEffect:Mc,useMemo:Uc,useReducer:js,useRef:Ec,useState:function(){return js(Gn)},useDebugValue:qs,useDeferredValue:function(e){var t=Pt();return Fc(t,$e.memoizedState,e)},useTransition:function(){var e=js(Gn)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:kc,useSyncExternalStore:Sc,useId:zc,unstable_isNewReconciler:!1},mp={readContext:It,useCallback:_c,useContext:It,useEffect:Bs,useImperativeHandle:Lc,useInsertionEffect:Rc,useLayoutEffect:Mc,useMemo:Uc,useReducer:Hs,useRef:Ec,useState:function(){return Hs(Gn)},useDebugValue:qs,useDeferredValue:function(e){var t=Pt();return $e===null?t.memoizedState=e:Fc(t,$e.memoizedState,e)},useTransition:function(){var e=Hs(Gn)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:kc,useSyncExternalStore:Sc,useId:zc,unstable_isNewReconciler:!1};function Ot(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function Vs(e,t,i,n){t=e.memoizedState,i=i(n,t),i=i==null?t:G({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var er={isMounted:function(e){return(e=e._reactInternals)?Ci(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var n=at(),o=wi(e),s=Jt(n,o);s.payload=t,i!=null&&(s.callback=i),t=gi(e,s,o),t!==null&&(Ut(t,e,o,n),$o(t,e,o))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var n=at(),o=wi(e),s=Jt(n,o);s.tag=1,s.payload=t,i!=null&&(s.callback=i),t=gi(e,s,o),t!==null&&(Ut(t,e,o,n),$o(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=at(),n=wi(e),o=Jt(i,n);o.tag=2,t!=null&&(o.callback=t),t=gi(e,o,n),t!==null&&(Ut(t,e,n,i),$o(t,e,n))}};function Hc(e,t,i,n,o,s,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,u):t.prototype&&t.prototype.isPureReactComponent?!_n(i,n)||!_n(o,s):!0}function Bc(e,t,i){var n=!1,o=hi,s=t.contextType;return typeof s=="object"&&s!==null?s=It(s):(o=ut(t)?Di:tt.current,n=t.contextTypes,s=(n=n!=null)?Xi(e,o):hi),t=new t(i,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=er,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),t}function qc(e,t,i,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,n),t.state!==e&&er.enqueueReplaceState(t,t.state,null)}function $s(e,t,i,n){var o=e.stateNode;o.props=i,o.state=e.memoizedState,o.refs={},Ms(e);var s=t.contextType;typeof s=="object"&&s!==null?o.context=It(s):(s=ut(t)?Di:tt.current,o.context=Xi(e,s)),o.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Vs(e,t,s,i),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&er.enqueueReplaceState(o,o.state,null),Ko(e,i,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function an(e,t){try{var i="",n=t;do i+=K(n),n=n.return;while(n);var o=i}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:o,digest:null}}function Ks(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function Gs(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var gp=typeof WeakMap=="function"?WeakMap:Map;function Vc(e,t,i){i=Jt(-1,i),i.tag=3,i.payload={element:null};var n=t.value;return i.callback=function(){ar||(ar=!0,ca=n),Gs(e,t)},i}function $c(e,t,i){i=Jt(-1,i),i.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;i.payload=function(){return n(o)},i.callback=function(){Gs(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(i.callback=function(){Gs(e,t),typeof n!="function"&&(yi===null?yi=new Set([this]):yi.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),i}function Kc(e,t,i){var n=e.pingCache;if(n===null){n=e.pingCache=new gp;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(i)||(o.add(i),e=Ep.bind(null,e,t,i),t.then(e,e))}function Gc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qc(e,t,i,n,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=Jt(-1,1),t.tag=2,gi(i,t,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var fp=Y.ReactCurrentOwner,dt=!1;function st(e,t,i,n){t.child=e===null?gc(t,null,i,n):nn(t,e.child,i,n)}function Yc(e,t,i,n,o){i=i.render;var s=t.ref;return rn(t,o),n=Ws(e,t,i,n,s,o),i=Ns(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Xt(e,t,o)):(Me&&i&&Ss(t),t.flags|=1,st(e,t,n,o),t.child)}function Jc(e,t,i,n,o){if(e===null){var s=i.type;return typeof s=="function"&&!fa(s)&&s.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=s,Xc(e,t,s,n,o)):(e=pr(i.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&o)===0){var u=s.memoizedProps;if(i=i.compare,i=i!==null?i:_n,i(u,n)&&e.ref===t.ref)return Xt(e,t,o)}return t.flags|=1,e=ki(s,n),e.ref=t.ref,e.return=t,t.child=e}function Xc(e,t,i,n,o){if(e!==null){var s=e.memoizedProps;if(_n(s,n)&&e.ref===t.ref)if(dt=!1,t.pendingProps=n=s,(e.lanes&o)!==0)(e.flags&131072)!==0&&(dt=!0);else return t.lanes=e.lanes,Xt(e,t,o)}return Qs(e,t,i,n,o)}function Zc(e,t,i){var n=t.pendingProps,o=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(cn,bt),bt|=i;else{if((i&1073741824)===0)return e=s!==null?s.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Pe(cn,bt),bt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:i,Pe(cn,bt),bt|=n}else s!==null?(n=s.baseLanes|i,t.memoizedState=null):n=i,Pe(cn,bt),bt|=n;return st(e,t,o,i),t.child}function eu(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function Qs(e,t,i,n,o){var s=ut(i)?Di:tt.current;return s=Xi(t,s),rn(t,o),i=Ws(e,t,i,n,s,o),n=Ns(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Xt(e,t,o)):(Me&&n&&Ss(t),t.flags|=1,st(e,t,i,o),t.child)}function tu(e,t,i,n,o){if(ut(i)){var s=!0;zo(t)}else s=!1;if(rn(t,o),t.stateNode===null)ir(e,t),Bc(t,i,n),$s(t,i,n,o),n=!0;else if(e===null){var u=t.stateNode,p=t.memoizedProps;u.props=p;var g=u.context,T=i.contextType;typeof T=="object"&&T!==null?T=It(T):(T=ut(i)?Di:tt.current,T=Xi(t,T));var N=i.getDerivedStateFromProps,H=typeof N=="function"||typeof u.getSnapshotBeforeUpdate=="function";H||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(p!==n||g!==T)&&qc(t,u,n,T),mi=!1;var W=t.memoizedState;u.state=W,Ko(t,n,u,o),g=t.memoizedState,p!==n||W!==g||ct.current||mi?(typeof N=="function"&&(Vs(t,i,N,n),g=t.memoizedState),(p=mi||Hc(t,i,p,n,W,g,T))?(H||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=g),u.props=n,u.state=g,u.context=T,n=p):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{u=t.stateNode,yc(e,t),p=t.memoizedProps,T=t.type===t.elementType?p:Ot(t.type,p),u.props=T,H=t.pendingProps,W=u.context,g=i.contextType,typeof g=="object"&&g!==null?g=It(g):(g=ut(i)?Di:tt.current,g=Xi(t,g));var Q=i.getDerivedStateFromProps;(N=typeof Q=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(p!==H||W!==g)&&qc(t,u,n,g),mi=!1,W=t.memoizedState,u.state=W,Ko(t,n,u,o);var X=t.memoizedState;p!==H||W!==X||ct.current||mi?(typeof Q=="function"&&(Vs(t,i,Q,n),X=t.memoizedState),(T=mi||Hc(t,i,T,n,W,X,g)||!1)?(N||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,X,g),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,X,g)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||p===e.memoizedProps&&W===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&W===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=X),u.props=n,u.state=X,u.context=g,n=T):(typeof u.componentDidUpdate!="function"||p===e.memoizedProps&&W===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&W===e.memoizedState||(t.flags|=1024),n=!1)}return Ys(e,t,i,n,s,o)}function Ys(e,t,i,n,o,s){eu(e,t);var u=(t.flags&128)!==0;if(!n&&!u)return o&&sc(t,i,!1),Xt(e,t,s);n=t.stateNode,fp.current=t;var p=u&&typeof i.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&u?(t.child=nn(t,e.child,null,s),t.child=nn(t,null,p,s)):st(e,t,p,s),t.memoizedState=n.state,o&&sc(t,i,!0),t.child}function iu(e){var t=e.stateNode;t.pendingContext?oc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&oc(e,t.context,!1),Os(e,t.containerInfo)}function nu(e,t,i,n,o){return tn(),Cs(o),t.flags|=256,st(e,t,i,n),t.child}var Js={dehydrated:null,treeContext:null,retryLane:0};function Xs(e){return{baseLanes:e,cachePool:null,transitions:null}}function ou(e,t,i){var n=t.pendingProps,o=Le.current,s=!1,u=(t.flags&128)!==0,p;if((p=u)||(p=e!==null&&e.memoizedState===null?!1:(o&2)!==0),p?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Pe(Le,o&1),e===null)return Ps(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(u=n.children,e=n.fallback,s?(n=t.mode,s=t.child,u={mode:"hidden",children:u},(n&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=u):s=mr(u,n,0,null),e=zi(e,n,i,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Xs(i),t.memoizedState=Js,e):Zs(t,u));if(o=e.memoizedState,o!==null&&(p=o.dehydrated,p!==null))return yp(e,t,u,n,p,o,i);if(s){s=n.fallback,u=t.mode,o=e.child,p=o.sibling;var g={mode:"hidden",children:n.children};return(u&1)===0&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=g,t.deletions=null):(n=ki(o,g),n.subtreeFlags=o.subtreeFlags&14680064),p!==null?s=ki(p,s):(s=zi(s,u,i,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,n=s,s=t.child,u=e.child.memoizedState,u=u===null?Xs(i):{baseLanes:u.baseLanes|i,cachePool:null,transitions:u.transitions},s.memoizedState=u,s.childLanes=e.childLanes&~i,t.memoizedState=Js,n}return s=e.child,e=s.sibling,n=ki(s,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=i),n.return=t,n.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=n,t.memoizedState=null,n}function Zs(e,t){return t=mr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function tr(e,t,i,n){return n!==null&&Cs(n),nn(t,e.child,null,i),e=Zs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yp(e,t,i,n,o,s,u){if(i)return t.flags&256?(t.flags&=-257,n=Ks(Error(a(422))),tr(e,t,u,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=n.fallback,o=t.mode,n=mr({mode:"visible",children:n.children},o,0,null),s=zi(s,o,u,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,(t.mode&1)!==0&&nn(t,e.child,null,u),t.child.memoizedState=Xs(u),t.memoizedState=Js,s);if((t.mode&1)===0)return tr(e,t,u,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var p=n.dgst;return n=p,s=Error(a(419)),n=Ks(s,n,void 0),tr(e,t,u,n)}if(p=(u&e.childLanes)!==0,dt||p){if(n=Ye,n!==null){switch(u&-u){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(n.suspendedLanes|u))!==0?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,Yt(e,o),Ut(n,e,o,-1))}return ga(),n=Ks(Error(a(421))),tr(e,t,u,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Ap.bind(null,e),o._reactRetry=t,null):(e=s.treeContext,wt=ui(o.nextSibling),vt=t,Me=!0,Mt=null,e!==null&&(St[xt++]=Gt,St[xt++]=Qt,St[xt++]=Ei,Gt=e.id,Qt=e.overflow,Ei=t),t=Zs(t,n.children),t.flags|=4096,t)}function ru(e,t,i){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),As(e.return,t,i)}function ea(e,t,i,n,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:i,tailMode:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=i,s.tailMode=o)}function su(e,t,i){var n=t.pendingProps,o=n.revealOrder,s=n.tail;if(st(e,t,n.children,i),n=Le.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ru(e,i,t);else if(e.tag===19)ru(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Pe(Le,n),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(i=t.child,o=null;i!==null;)e=i.alternate,e!==null&&Go(e)===null&&(o=i),i=i.sibling;i=o,i===null?(o=t.child,t.child=null):(o=i.sibling,i.sibling=null),ea(t,!1,o,i,s);break;case"backwards":for(i=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Go(e)===null){t.child=o;break}e=o.sibling,o.sibling=i,i=o,o=e}ea(t,!0,i,null,s);break;case"together":ea(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ir(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xt(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Li|=t.lanes,(i&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,i=ki(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=ki(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function vp(e,t,i){switch(t.tag){case 3:iu(t),tn();break;case 5:bc(t);break;case 1:ut(t.type)&&zo(t);break;case 4:Os(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;Pe(qo,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(Pe(Le,Le.current&1),t.flags|=128,null):(i&t.child.childLanes)!==0?ou(e,t,i):(Pe(Le,Le.current&1),e=Xt(e,t,i),e!==null?e.sibling:null);Pe(Le,Le.current&1);break;case 19:if(n=(i&t.childLanes)!==0,(e.flags&128)!==0){if(n)return su(e,t,i);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Pe(Le,Le.current),n)break;return null;case 22:case 23:return t.lanes=0,Zc(e,t,i)}return Xt(e,t,i)}var au,ta,lu,cu;au=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},ta=function(){},lu=function(e,t,i,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,Mi(Wt.current);var s=null;switch(i){case"input":o=Ge(e,o),n=Ge(e,n),s=[];break;case"select":o=G({},o,{value:void 0}),n=G({},n,{value:void 0}),s=[];break;case"textarea":o=Vt(e,o),n=Vt(e,n),s=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=_o)}_r(i,n);var u;i=null;for(T in o)if(!n.hasOwnProperty(T)&&o.hasOwnProperty(T)&&o[T]!=null)if(T==="style"){var p=o[T];for(u in p)p.hasOwnProperty(u)&&(i||(i={}),i[u]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(d.hasOwnProperty(T)?s||(s=[]):(s=s||[]).push(T,null));for(T in n){var g=n[T];if(p=o!=null?o[T]:void 0,n.hasOwnProperty(T)&&g!==p&&(g!=null||p!=null))if(T==="style")if(p){for(u in p)!p.hasOwnProperty(u)||g&&g.hasOwnProperty(u)||(i||(i={}),i[u]="");for(u in g)g.hasOwnProperty(u)&&p[u]!==g[u]&&(i||(i={}),i[u]=g[u])}else i||(s||(s=[]),s.push(T,i)),i=g;else T==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,p=p?p.__html:void 0,g!=null&&p!==g&&(s=s||[]).push(T,g)):T==="children"?typeof g!="string"&&typeof g!="number"||(s=s||[]).push(T,""+g):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(d.hasOwnProperty(T)?(g!=null&&T==="onScroll"&&De("scroll",e),s||p===g||(s=[])):(s=s||[]).push(T,g))}i&&(s=s||[]).push("style",i);var T=s;(t.updateQueue=T)&&(t.flags|=4)}},cu=function(e,t,i,n){i!==n&&(t.flags|=4)};function Yn(e,t){if(!Me)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,n=0;if(t)for(var o=e.child;o!==null;)i|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)i|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=i,t}function wp(e,t,i){var n=t.pendingProps;switch(xs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return ut(t.type)&&Fo(),nt(t),null;case 3:return n=t.stateNode,sn(),Ee(ct),Ee(tt),Us(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ho(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Mt!==null&&(ha(Mt),Mt=null))),ta(e,t),nt(t),null;case 5:Ls(t);var o=Mi(Vn.current);if(i=t.type,e!==null&&t.stateNode!=null)lu(e,t,i,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(a(166));return nt(t),null}if(e=Mi(Wt.current),Ho(t)){n=t.stateNode,i=t.type;var s=t.memoizedProps;switch(n[zt]=t,n[Nn]=s,e=(t.mode&1)!==0,i){case"dialog":De("cancel",n),De("close",n);break;case"iframe":case"object":case"embed":De("load",n);break;case"video":case"audio":for(o=0;o<Fn.length;o++)De(Fn[o],n);break;case"source":De("error",n);break;case"img":case"image":case"link":De("error",n),De("load",n);break;case"details":De("toggle",n);break;case"input":he(n,s),De("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},De("invalid",n);break;case"textarea":lt(n,s),De("invalid",n)}_r(i,s),o=null;for(var u in s)if(s.hasOwnProperty(u)){var p=s[u];u==="children"?typeof p=="string"?n.textContent!==p&&(s.suppressHydrationWarning!==!0&&Lo(n.textContent,p,e),o=["children",p]):typeof p=="number"&&n.textContent!==""+p&&(s.suppressHydrationWarning!==!0&&Lo(n.textContent,p,e),o=["children",""+p]):d.hasOwnProperty(u)&&p!=null&&u==="onScroll"&&De("scroll",n)}switch(i){case"input":ge(n),Be(n,s,!0);break;case"textarea":ge(n),Re(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=_o)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{u=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ni(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=u.createElement(i,{is:n.is}):(e=u.createElement(i),i==="select"&&(u=e,n.multiple?u.multiple=!0:n.size&&(u.size=n.size))):e=u.createElementNS(e,i),e[zt]=t,e[Nn]=n,au(e,t,!1,!1),t.stateNode=e;e:{switch(u=Ur(i,n),i){case"dialog":De("cancel",e),De("close",e),o=n;break;case"iframe":case"object":case"embed":De("load",e),o=n;break;case"video":case"audio":for(o=0;o<Fn.length;o++)De(Fn[o],e);o=n;break;case"source":De("error",e),o=n;break;case"img":case"image":case"link":De("error",e),De("load",e),o=n;break;case"details":De("toggle",e),o=n;break;case"input":he(e,n),o=Ge(e,n),De("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=G({},n,{value:void 0}),De("invalid",e);break;case"textarea":lt(e,n),o=Vt(e,n),De("invalid",e);break;default:o=n}_r(i,o),p=o;for(s in p)if(p.hasOwnProperty(s)){var g=p[s];s==="style"?Xa(e,g):s==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&Ya(e,g)):s==="children"?typeof g=="string"?(i!=="textarea"||g!=="")&&vn(e,g):typeof g=="number"&&vn(e,""+g):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(d.hasOwnProperty(s)?g!=null&&s==="onScroll"&&De("scroll",e):g!=null&&$(e,s,g,u))}switch(i){case"input":ge(e),Be(e,n,!1);break;case"textarea":ge(e),Re(e);break;case"option":n.value!=null&&e.setAttribute("value",""+F(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?Et(e,!!n.multiple,s,!1):n.defaultValue!=null&&Et(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=_o)}switch(i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return nt(t),null;case 6:if(e&&t.stateNode!=null)cu(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(a(166));if(i=Mi(Vn.current),Mi(Wt.current),Ho(t)){if(n=t.stateNode,i=t.memoizedProps,n[zt]=t,(s=n.nodeValue!==i)&&(e=vt,e!==null))switch(e.tag){case 3:Lo(n.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Lo(n.nodeValue,i,(e.mode&1)!==0)}s&&(t.flags|=4)}else n=(i.nodeType===9?i:i.ownerDocument).createTextNode(n),n[zt]=t,t.stateNode=n}return nt(t),null;case 13:if(Ee(Le),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Me&&wt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)hc(),tn(),t.flags|=98560,s=!1;else if(s=Ho(t),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(a(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(a(317));s[zt]=t}else tn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;nt(t),s=!1}else Mt!==null&&(ha(Mt),Mt=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=i,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Le.current&1)!==0?Ke===0&&(Ke=3):ga())),t.updateQueue!==null&&(t.flags|=4),nt(t),null);case 4:return sn(),ta(e,t),e===null&&zn(t.stateNode.containerInfo),nt(t),null;case 10:return Es(t.type._context),nt(t),null;case 17:return ut(t.type)&&Fo(),nt(t),null;case 19:if(Ee(Le),s=t.memoizedState,s===null)return nt(t),null;if(n=(t.flags&128)!==0,u=s.rendering,u===null)if(n)Yn(s,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Go(e),u!==null){for(t.flags|=128,Yn(s,!1),n=u.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=i,i=t.child;i!==null;)s=i,e=n,s.flags&=14680066,u=s.alternate,u===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=u.childLanes,s.lanes=u.lanes,s.child=u.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=u.memoizedProps,s.memoizedState=u.memoizedState,s.updateQueue=u.updateQueue,s.type=u.type,e=u.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Pe(Le,Le.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ne()>un&&(t.flags|=128,n=!0,Yn(s,!1),t.lanes=4194304)}else{if(!n)if(e=Go(u),e!==null){if(t.flags|=128,n=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),Yn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!u.alternate&&!Me)return nt(t),null}else 2*Ne()-s.renderingStartTime>un&&i!==1073741824&&(t.flags|=128,n=!0,Yn(s,!1),t.lanes=4194304);s.isBackwards?(u.sibling=t.child,t.child=u):(i=s.last,i!==null?i.sibling=u:t.child=u,s.last=u)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ne(),t.sibling=null,i=Le.current,Pe(Le,n?i&1|2:i&1),t):(nt(t),null);case 22:case 23:return ma(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(bt&1073741824)!==0&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),null;case 24:return null;case 25:return null}throw Error(a(156,t.tag))}function bp(e,t){switch(xs(t),t.tag){case 1:return ut(t.type)&&Fo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sn(),Ee(ct),Ee(tt),Us(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ls(t),null;case 13:if(Ee(Le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ee(Le),null;case 4:return sn(),null;case 10:return Es(t.type._context),null;case 22:case 23:return ma(),null;case 24:return null;default:return null}}var nr=!1,ot=!1,kp=typeof WeakSet=="function"?WeakSet:Set,J=null;function ln(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(n){We(e,t,n)}else i.current=null}function ia(e,t,i){try{i()}catch(n){We(e,t,n)}}var uu=!1;function Sp(e,t){if(ms=xo,e=Hl(),ss(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var n=i.getSelection&&i.getSelection();if(n&&n.rangeCount!==0){i=n.anchorNode;var o=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{i.nodeType,s.nodeType}catch{i=null;break e}var u=0,p=-1,g=-1,T=0,N=0,H=e,W=null;t:for(;;){for(var Q;H!==i||o!==0&&H.nodeType!==3||(p=u+o),H!==s||n!==0&&H.nodeType!==3||(g=u+n),H.nodeType===3&&(u+=H.nodeValue.length),(Q=H.firstChild)!==null;)W=H,H=Q;for(;;){if(H===e)break t;if(W===i&&++T===o&&(p=u),W===s&&++N===n&&(g=u),(Q=H.nextSibling)!==null)break;H=W,W=H.parentNode}H=Q}i=p===-1||g===-1?null:{start:p,end:g}}else i=null}i=i||{start:0,end:0}}else i=null;for(gs={focusedElem:e,selectionRange:i},xo=!1,J=t;J!==null;)if(t=J,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,J=e;else for(;J!==null;){t=J;try{var X=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(X!==null){var Z=X.memoizedProps,je=X.memoizedState,I=t.stateNode,v=I.getSnapshotBeforeUpdate(t.elementType===t.type?Z:Ot(t.type,Z),je);I.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var C=t.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(q){We(t,t.return,q)}if(e=t.sibling,e!==null){e.return=t.return,J=e;break}J=t.return}return X=uu,uu=!1,X}function Jn(e,t,i){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&ia(t,i,s)}o=o.next}while(o!==n)}}function or(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var n=i.create;i.destroy=n()}i=i.next}while(i!==t)}}function na(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function du(e){var t=e.alternate;t!==null&&(e.alternate=null,du(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zt],delete t[Nn],delete t[ws],delete t[op],delete t[rp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hu(e){return e.tag===5||e.tag===3||e.tag===4}function pu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oa(e,t,i){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=_o));else if(n!==4&&(e=e.child,e!==null))for(oa(e,t,i),e=e.sibling;e!==null;)oa(e,t,i),e=e.sibling}function ra(e,t,i){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ra(e,t,i),e=e.sibling;e!==null;)ra(e,t,i),e=e.sibling}var Ze=null,Lt=!1;function fi(e,t,i){for(i=i.child;i!==null;)mu(e,t,i),i=i.sibling}function mu(e,t,i){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(yo,i)}catch{}switch(i.tag){case 5:ot||ln(i,t);case 6:var n=Ze,o=Lt;Ze=null,fi(e,t,i),Ze=n,Lt=o,Ze!==null&&(Lt?(e=Ze,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):Ze.removeChild(i.stateNode));break;case 18:Ze!==null&&(Lt?(e=Ze,i=i.stateNode,e.nodeType===8?vs(e.parentNode,i):e.nodeType===1&&vs(e,i),En(e)):vs(Ze,i.stateNode));break;case 4:n=Ze,o=Lt,Ze=i.stateNode.containerInfo,Lt=!0,fi(e,t,i),Ze=n,Lt=o;break;case 0:case 11:case 14:case 15:if(!ot&&(n=i.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var s=o,u=s.destroy;s=s.tag,u!==void 0&&((s&2)!==0||(s&4)!==0)&&ia(i,t,u),o=o.next}while(o!==n)}fi(e,t,i);break;case 1:if(!ot&&(ln(i,t),n=i.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=i.memoizedProps,n.state=i.memoizedState,n.componentWillUnmount()}catch(p){We(i,t,p)}fi(e,t,i);break;case 21:fi(e,t,i);break;case 22:i.mode&1?(ot=(n=ot)||i.memoizedState!==null,fi(e,t,i),ot=n):fi(e,t,i);break;default:fi(e,t,i)}}function gu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new kp),t.forEach(function(n){var o=Rp.bind(null,e,n);i.has(n)||(i.add(n),n.then(o,o))})}}function _t(e,t){var i=t.deletions;if(i!==null)for(var n=0;n<i.length;n++){var o=i[n];try{var s=e,u=t,p=u;e:for(;p!==null;){switch(p.tag){case 5:Ze=p.stateNode,Lt=!1;break e;case 3:Ze=p.stateNode.containerInfo,Lt=!0;break e;case 4:Ze=p.stateNode.containerInfo,Lt=!0;break e}p=p.return}if(Ze===null)throw Error(a(160));mu(s,u,o),Ze=null,Lt=!1;var g=o.alternate;g!==null&&(g.return=null),o.return=null}catch(T){We(o,t,T)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fu(t,e),t=t.sibling}function fu(e,t){var i=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_t(t,e),jt(e),n&4){try{Jn(3,e,e.return),or(3,e)}catch(Z){We(e,e.return,Z)}try{Jn(5,e,e.return)}catch(Z){We(e,e.return,Z)}}break;case 1:_t(t,e),jt(e),n&512&&i!==null&&ln(i,i.return);break;case 5:if(_t(t,e),jt(e),n&512&&i!==null&&ln(i,i.return),e.flags&32){var o=e.stateNode;try{vn(o,"")}catch(Z){We(e,e.return,Z)}}if(n&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,u=i!==null?i.memoizedProps:s,p=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{p==="input"&&s.type==="radio"&&s.name!=null&&Ve(o,s),Ur(p,u);var T=Ur(p,s);for(u=0;u<g.length;u+=2){var N=g[u],H=g[u+1];N==="style"?Xa(o,H):N==="dangerouslySetInnerHTML"?Ya(o,H):N==="children"?vn(o,H):$(o,N,H,T)}switch(p){case"input":fe(o,s);break;case"textarea":se(o,s);break;case"select":var W=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var Q=s.value;Q!=null?Et(o,!!s.multiple,Q,!1):W!==!!s.multiple&&(s.defaultValue!=null?Et(o,!!s.multiple,s.defaultValue,!0):Et(o,!!s.multiple,s.multiple?[]:"",!1))}o[Nn]=s}catch(Z){We(e,e.return,Z)}}break;case 6:if(_t(t,e),jt(e),n&4){if(e.stateNode===null)throw Error(a(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(Z){We(e,e.return,Z)}}break;case 3:if(_t(t,e),jt(e),n&4&&i!==null&&i.memoizedState.isDehydrated)try{En(t.containerInfo)}catch(Z){We(e,e.return,Z)}break;case 4:_t(t,e),jt(e);break;case 13:_t(t,e),jt(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(la=Ne())),n&4&&gu(e);break;case 22:if(N=i!==null&&i.memoizedState!==null,e.mode&1?(ot=(T=ot)||N,_t(t,e),ot=T):_t(t,e),jt(e),n&8192){if(T=e.memoizedState!==null,(e.stateNode.isHidden=T)&&!N&&(e.mode&1)!==0)for(J=e,N=e.child;N!==null;){for(H=J=N;J!==null;){switch(W=J,Q=W.child,W.tag){case 0:case 11:case 14:case 15:Jn(4,W,W.return);break;case 1:ln(W,W.return);var X=W.stateNode;if(typeof X.componentWillUnmount=="function"){n=W,i=W.return;try{t=n,X.props=t.memoizedProps,X.state=t.memoizedState,X.componentWillUnmount()}catch(Z){We(n,i,Z)}}break;case 5:ln(W,W.return);break;case 22:if(W.memoizedState!==null){wu(H);continue}}Q!==null?(Q.return=W,J=Q):wu(H)}N=N.sibling}e:for(N=null,H=e;;){if(H.tag===5){if(N===null){N=H;try{o=H.stateNode,T?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(p=H.stateNode,g=H.memoizedProps.style,u=g!=null&&g.hasOwnProperty("display")?g.display:null,p.style.display=Ja("display",u))}catch(Z){We(e,e.return,Z)}}}else if(H.tag===6){if(N===null)try{H.stateNode.nodeValue=T?"":H.memoizedProps}catch(Z){We(e,e.return,Z)}}else if((H.tag!==22&&H.tag!==23||H.memoizedState===null||H===e)&&H.child!==null){H.child.return=H,H=H.child;continue}if(H===e)break e;for(;H.sibling===null;){if(H.return===null||H.return===e)break e;N===H&&(N=null),H=H.return}N===H&&(N=null),H.sibling.return=H.return,H=H.sibling}}break;case 19:_t(t,e),jt(e),n&4&&gu(e);break;case 21:break;default:_t(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(hu(i)){var n=i;break e}i=i.return}throw Error(a(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(vn(o,""),n.flags&=-33);var s=pu(e);ra(e,s,o);break;case 3:case 4:var u=n.stateNode.containerInfo,p=pu(e);oa(e,p,u);break;default:throw Error(a(161))}}catch(g){We(e,e.return,g)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xp(e,t,i){J=e,yu(e)}function yu(e,t,i){for(var n=(e.mode&1)!==0;J!==null;){var o=J,s=o.child;if(o.tag===22&&n){var u=o.memoizedState!==null||nr;if(!u){var p=o.alternate,g=p!==null&&p.memoizedState!==null||ot;p=nr;var T=ot;if(nr=u,(ot=g)&&!T)for(J=o;J!==null;)u=J,g=u.child,u.tag===22&&u.memoizedState!==null?bu(o):g!==null?(g.return=u,J=g):bu(o);for(;s!==null;)J=s,yu(s),s=s.sibling;J=o,nr=p,ot=T}vu(e)}else(o.subtreeFlags&8772)!==0&&s!==null?(s.return=o,J=s):vu(e)}}function vu(e){for(;J!==null;){var t=J;if((t.flags&8772)!==0){var i=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ot||or(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ot)if(i===null)n.componentDidMount();else{var o=t.elementType===t.type?i.memoizedProps:Ot(t.type,i.memoizedProps);n.componentDidUpdate(o,i.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&wc(t,s,n);break;case 3:var u=t.updateQueue;if(u!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}wc(t,u,i)}break;case 5:var p=t.stateNode;if(i===null&&t.flags&4){i=p;var g=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&i.focus();break;case"img":g.src&&(i.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var T=t.alternate;if(T!==null){var N=T.memoizedState;if(N!==null){var H=N.dehydrated;H!==null&&En(H)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}ot||t.flags&512&&na(t)}catch(W){We(t,t.return,W)}}if(t===e){J=null;break}if(i=t.sibling,i!==null){i.return=t.return,J=i;break}J=t.return}}function wu(e){for(;J!==null;){var t=J;if(t===e){J=null;break}var i=t.sibling;if(i!==null){i.return=t.return,J=i;break}J=t.return}}function bu(e){for(;J!==null;){var t=J;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{or(4,t)}catch(g){We(t,i,g)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(g){We(t,o,g)}}var s=t.return;try{na(t)}catch(g){We(t,s,g)}break;case 5:var u=t.return;try{na(t)}catch(g){We(t,u,g)}}}catch(g){We(t,t.return,g)}if(t===e){J=null;break}var p=t.sibling;if(p!==null){p.return=t.return,J=p;break}J=t.return}}var Ip=Math.ceil,rr=Y.ReactCurrentDispatcher,sa=Y.ReactCurrentOwner,Ct=Y.ReactCurrentBatchConfig,ve=0,Ye=null,qe=null,et=0,bt=0,cn=di(0),Ke=0,Xn=null,Li=0,sr=0,aa=0,Zn=null,ht=null,la=0,un=1/0,Zt=null,ar=!1,ca=null,yi=null,lr=!1,vi=null,cr=0,eo=0,ua=null,ur=-1,dr=0;function at(){return(ve&6)!==0?Ne():ur!==-1?ur:ur=Ne()}function wi(e){return(e.mode&1)===0?1:(ve&2)!==0&&et!==0?et&-et:ap.transition!==null?(dr===0&&(dr=pl()),dr):(e=Se,e!==0||(e=window.event,e=e===void 0?16:Sl(e.type)),e)}function Ut(e,t,i,n){if(50<eo)throw eo=0,ua=null,Error(a(185));In(e,i,n),((ve&2)===0||e!==Ye)&&(e===Ye&&((ve&2)===0&&(sr|=i),Ke===4&&bi(e,et)),pt(e,n),i===1&&ve===0&&(t.mode&1)===0&&(un=Ne()+500,Wo&&pi()))}function pt(e,t){var i=e.callbackNode;ah(e,t);var n=bo(e,e===Ye?et:0);if(n===0)i!==null&&ul(i),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(i!=null&&ul(i),t===1)e.tag===0?sp(Su.bind(null,e)):ac(Su.bind(null,e)),ip(function(){(ve&6)===0&&pi()}),i=null;else{switch(ml(n)){case 1:i=Br;break;case 4:i=dl;break;case 16:i=fo;break;case 536870912:i=hl;break;default:i=fo}i=Au(i,ku.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function ku(e,t){if(ur=-1,dr=0,(ve&6)!==0)throw Error(a(327));var i=e.callbackNode;if(dn()&&e.callbackNode!==i)return null;var n=bo(e,e===Ye?et:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=hr(e,n);else{t=n;var o=ve;ve|=2;var s=Iu();(Ye!==e||et!==t)&&(Zt=null,un=Ne()+500,Ui(e,t));do try{Tp();break}catch(p){xu(e,p)}while(!0);Ds(),rr.current=s,ve=o,qe!==null?t=0:(Ye=null,et=0,t=Ke)}if(t!==0){if(t===2&&(o=qr(e),o!==0&&(n=o,t=da(e,o))),t===1)throw i=Xn,Ui(e,0),bi(e,n),pt(e,Ne()),i;if(t===6)bi(e,n);else{if(o=e.current.alternate,(n&30)===0&&!Pp(o)&&(t=hr(e,n),t===2&&(s=qr(e),s!==0&&(n=s,t=da(e,s))),t===1))throw i=Xn,Ui(e,0),bi(e,n),pt(e,Ne()),i;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(a(345));case 2:Fi(e,ht,Zt);break;case 3:if(bi(e,n),(n&130023424)===n&&(t=la+500-Ne(),10<t)){if(bo(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){at(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ys(Fi.bind(null,e,ht,Zt),t);break}Fi(e,ht,Zt);break;case 4:if(bi(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var u=31-At(n);s=1<<u,u=t[u],u>o&&(o=u),n&=~s}if(n=o,n=Ne()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Ip(n/1960))-n,10<n){e.timeoutHandle=ys(Fi.bind(null,e,ht,Zt),n);break}Fi(e,ht,Zt);break;case 5:Fi(e,ht,Zt);break;default:throw Error(a(329))}}}return pt(e,Ne()),e.callbackNode===i?ku.bind(null,e):null}function da(e,t){var i=Zn;return e.current.memoizedState.isDehydrated&&(Ui(e,t).flags|=256),e=hr(e,t),e!==2&&(t=ht,ht=i,t!==null&&ha(t)),e}function ha(e){ht===null?ht=e:ht.push.apply(ht,e)}function Pp(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var n=0;n<i.length;n++){var o=i[n],s=o.getSnapshot;o=o.value;try{if(!Rt(s(),o))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bi(e,t){for(t&=~aa,t&=~sr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-At(t),n=1<<i;e[i]=-1,t&=~n}}function Su(e){if((ve&6)!==0)throw Error(a(327));dn();var t=bo(e,0);if((t&1)===0)return pt(e,Ne()),null;var i=hr(e,t);if(e.tag!==0&&i===2){var n=qr(e);n!==0&&(t=n,i=da(e,n))}if(i===1)throw i=Xn,Ui(e,0),bi(e,t),pt(e,Ne()),i;if(i===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fi(e,ht,Zt),pt(e,Ne()),null}function pa(e,t){var i=ve;ve|=1;try{return e(t)}finally{ve=i,ve===0&&(un=Ne()+500,Wo&&pi())}}function _i(e){vi!==null&&vi.tag===0&&(ve&6)===0&&dn();var t=ve;ve|=1;var i=Ct.transition,n=Se;try{if(Ct.transition=null,Se=1,e)return e()}finally{Se=n,Ct.transition=i,ve=t,(ve&6)===0&&pi()}}function ma(){bt=cn.current,Ee(cn)}function Ui(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,tp(i)),qe!==null)for(i=qe.return;i!==null;){var n=i;switch(xs(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Fo();break;case 3:sn(),Ee(ct),Ee(tt),Us();break;case 5:Ls(n);break;case 4:sn();break;case 13:Ee(Le);break;case 19:Ee(Le);break;case 10:Es(n.type._context);break;case 22:case 23:ma()}i=i.return}if(Ye=e,qe=e=ki(e.current,null),et=bt=t,Ke=0,Xn=null,aa=sr=Li=0,ht=Zn=null,Ri!==null){for(t=0;t<Ri.length;t++)if(i=Ri[t],n=i.interleaved,n!==null){i.interleaved=null;var o=n.next,s=i.pending;if(s!==null){var u=s.next;s.next=o,n.next=u}i.pending=n}Ri=null}return e}function xu(e,t){do{var i=qe;try{if(Ds(),Qo.current=Zo,Yo){for(var n=_e.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}Yo=!1}if(Oi=0,Qe=$e=_e=null,$n=!1,Kn=0,sa.current=null,i===null||i.return===null){Ke=1,Xn=t,qe=null;break}e:{var s=e,u=i.return,p=i,g=t;if(t=et,p.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var T=g,N=p,H=N.tag;if((N.mode&1)===0&&(H===0||H===11||H===15)){var W=N.alternate;W?(N.updateQueue=W.updateQueue,N.memoizedState=W.memoizedState,N.lanes=W.lanes):(N.updateQueue=null,N.memoizedState=null)}var Q=Gc(u);if(Q!==null){Q.flags&=-257,Qc(Q,u,p,s,t),Q.mode&1&&Kc(s,T,t),t=Q,g=T;var X=t.updateQueue;if(X===null){var Z=new Set;Z.add(g),t.updateQueue=Z}else X.add(g);break e}else{if((t&1)===0){Kc(s,T,t),ga();break e}g=Error(a(426))}}else if(Me&&p.mode&1){var je=Gc(u);if(je!==null){(je.flags&65536)===0&&(je.flags|=256),Qc(je,u,p,s,t),Cs(an(g,p));break e}}s=g=an(g,p),Ke!==4&&(Ke=2),Zn===null?Zn=[s]:Zn.push(s),s=u;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var I=Vc(s,g,t);vc(s,I);break e;case 1:p=g;var v=s.type,C=s.stateNode;if((s.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(yi===null||!yi.has(C)))){s.flags|=65536,t&=-t,s.lanes|=t;var q=$c(s,p,t);vc(s,q);break e}}s=s.return}while(s!==null)}Cu(i)}catch(ee){t=ee,qe===i&&i!==null&&(qe=i=i.return);continue}break}while(!0)}function Iu(){var e=rr.current;return rr.current=Zo,e===null?Zo:e}function ga(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),Ye===null||(Li&268435455)===0&&(sr&268435455)===0||bi(Ye,et)}function hr(e,t){var i=ve;ve|=2;var n=Iu();(Ye!==e||et!==t)&&(Zt=null,Ui(e,t));do try{Cp();break}catch(o){xu(e,o)}while(!0);if(Ds(),ve=i,rr.current=n,qe!==null)throw Error(a(261));return Ye=null,et=0,Ke}function Cp(){for(;qe!==null;)Pu(qe)}function Tp(){for(;qe!==null&&!Xd();)Pu(qe)}function Pu(e){var t=Eu(e.alternate,e,bt);e.memoizedProps=e.pendingProps,t===null?Cu(e):qe=t,sa.current=null}function Cu(e){var t=e;do{var i=t.alternate;if(e=t.return,(t.flags&32768)===0){if(i=wp(i,t,bt),i!==null){qe=i;return}}else{if(i=bp(i,t),i!==null){i.flags&=32767,qe=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ke=6,qe=null;return}}if(t=t.sibling,t!==null){qe=t;return}qe=t=e}while(t!==null);Ke===0&&(Ke=5)}function Fi(e,t,i){var n=Se,o=Ct.transition;try{Ct.transition=null,Se=1,Dp(e,t,i,n)}finally{Ct.transition=o,Se=n}return null}function Dp(e,t,i,n){do dn();while(vi!==null);if((ve&6)!==0)throw Error(a(327));i=e.finishedWork;var o=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var s=i.lanes|i.childLanes;if(lh(e,s),e===Ye&&(qe=Ye=null,et=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||lr||(lr=!0,Au(fo,function(){return dn(),null})),s=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||s){s=Ct.transition,Ct.transition=null;var u=Se;Se=1;var p=ve;ve|=4,sa.current=null,Sp(e,i),fu(i,e),Gh(gs),xo=!!ms,gs=ms=null,e.current=i,xp(i),Zd(),ve=p,Se=u,Ct.transition=s}else e.current=i;if(lr&&(lr=!1,vi=e,cr=o),s=e.pendingLanes,s===0&&(yi=null),ih(i.stateNode),pt(e,Ne()),t!==null)for(n=e.onRecoverableError,i=0;i<t.length;i++)o=t[i],n(o.value,{componentStack:o.stack,digest:o.digest});if(ar)throw ar=!1,e=ca,ca=null,e;return(cr&1)!==0&&e.tag!==0&&dn(),s=e.pendingLanes,(s&1)!==0?e===ua?eo++:(eo=0,ua=e):eo=0,pi(),null}function dn(){if(vi!==null){var e=ml(cr),t=Ct.transition,i=Se;try{if(Ct.transition=null,Se=16>e?16:e,vi===null)var n=!1;else{if(e=vi,vi=null,cr=0,(ve&6)!==0)throw Error(a(331));var o=ve;for(ve|=4,J=e.current;J!==null;){var s=J,u=s.child;if((J.flags&16)!==0){var p=s.deletions;if(p!==null){for(var g=0;g<p.length;g++){var T=p[g];for(J=T;J!==null;){var N=J;switch(N.tag){case 0:case 11:case 15:Jn(8,N,s)}var H=N.child;if(H!==null)H.return=N,J=H;else for(;J!==null;){N=J;var W=N.sibling,Q=N.return;if(du(N),N===T){J=null;break}if(W!==null){W.return=Q,J=W;break}J=Q}}}var X=s.alternate;if(X!==null){var Z=X.child;if(Z!==null){X.child=null;do{var je=Z.sibling;Z.sibling=null,Z=je}while(Z!==null)}}J=s}}if((s.subtreeFlags&2064)!==0&&u!==null)u.return=s,J=u;else e:for(;J!==null;){if(s=J,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Jn(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,J=I;break e}J=s.return}}var v=e.current;for(J=v;J!==null;){u=J;var C=u.child;if((u.subtreeFlags&2064)!==0&&C!==null)C.return=u,J=C;else e:for(u=v;J!==null;){if(p=J,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:or(9,p)}}catch(ee){We(p,p.return,ee)}if(p===u){J=null;break e}var q=p.sibling;if(q!==null){q.return=p.return,J=q;break e}J=p.return}}if(ve=o,pi(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(yo,e)}catch{}n=!0}return n}finally{Se=i,Ct.transition=t}}return!1}function Tu(e,t,i){t=an(i,t),t=Vc(e,t,1),e=gi(e,t,1),t=at(),e!==null&&(In(e,1,t),pt(e,t))}function We(e,t,i){if(e.tag===3)Tu(e,e,i);else for(;t!==null;){if(t.tag===3){Tu(t,e,i);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(yi===null||!yi.has(n))){e=an(i,e),e=$c(t,e,1),t=gi(t,e,1),e=at(),t!==null&&(In(t,1,e),pt(t,e));break}}t=t.return}}function Ep(e,t,i){var n=e.pingCache;n!==null&&n.delete(t),t=at(),e.pingedLanes|=e.suspendedLanes&i,Ye===e&&(et&i)===i&&(Ke===4||Ke===3&&(et&130023424)===et&&500>Ne()-la?Ui(e,0):aa|=i),pt(e,t)}function Du(e,t){t===0&&((e.mode&1)===0?t=1:(t=wo,wo<<=1,(wo&130023424)===0&&(wo=4194304)));var i=at();e=Yt(e,t),e!==null&&(In(e,t,i),pt(e,i))}function Ap(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),Du(e,i)}function Rp(e,t){var i=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(i=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(a(314))}n!==null&&n.delete(t),Du(e,i)}var Eu;Eu=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||ct.current)dt=!0;else{if((e.lanes&i)===0&&(t.flags&128)===0)return dt=!1,vp(e,t,i);dt=(e.flags&131072)!==0}else dt=!1,Me&&(t.flags&1048576)!==0&&lc(t,jo,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;ir(e,t),e=t.pendingProps;var o=Xi(t,tt.current);rn(t,i),o=Ws(null,t,n,e,o,i);var s=Ns();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ut(n)?(s=!0,zo(t)):s=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ms(t),o.updater=er,t.stateNode=o,o._reactInternals=t,$s(t,n,e,i),t=Ys(null,t,n,!0,s,i)):(t.tag=0,Me&&s&&Ss(t),st(null,t,o,i),t=t.child),t;case 16:n=t.elementType;e:{switch(ir(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=Op(n),e=Ot(n,e),o){case 0:t=Qs(null,t,n,e,i);break e;case 1:t=tu(null,t,n,e,i);break e;case 11:t=Yc(null,t,n,e,i);break e;case 14:t=Jc(null,t,n,Ot(n.type,e),i);break e}throw Error(a(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Ot(n,o),Qs(e,t,n,o,i);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Ot(n,o),tu(e,t,n,o,i);case 3:e:{if(iu(t),e===null)throw Error(a(387));n=t.pendingProps,s=t.memoizedState,o=s.element,yc(e,t),Ko(t,n,null,i);var u=t.memoizedState;if(n=u.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){o=an(Error(a(423)),t),t=nu(e,t,n,i,o);break e}else if(n!==o){o=an(Error(a(424)),t),t=nu(e,t,n,i,o);break e}else for(wt=ui(t.stateNode.containerInfo.firstChild),vt=t,Me=!0,Mt=null,i=gc(t,null,n,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(tn(),n===o){t=Xt(e,t,i);break e}st(e,t,n,i)}t=t.child}return t;case 5:return bc(t),e===null&&Ps(t),n=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,u=o.children,fs(n,o)?u=null:s!==null&&fs(n,s)&&(t.flags|=32),eu(e,t),st(e,t,u,i),t.child;case 6:return e===null&&Ps(t),null;case 13:return ou(e,t,i);case 4:return Os(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=nn(t,null,n,i):st(e,t,n,i),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Ot(n,o),Yc(e,t,n,o,i);case 7:return st(e,t,t.pendingProps,i),t.child;case 8:return st(e,t,t.pendingProps.children,i),t.child;case 12:return st(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,s=t.memoizedProps,u=o.value,Pe(qo,n._currentValue),n._currentValue=u,s!==null)if(Rt(s.value,u)){if(s.children===o.children&&!ct.current){t=Xt(e,t,i);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var p=s.dependencies;if(p!==null){u=s.child;for(var g=p.firstContext;g!==null;){if(g.context===n){if(s.tag===1){g=Jt(-1,i&-i),g.tag=2;var T=s.updateQueue;if(T!==null){T=T.shared;var N=T.pending;N===null?g.next=g:(g.next=N.next,N.next=g),T.pending=g}}s.lanes|=i,g=s.alternate,g!==null&&(g.lanes|=i),As(s.return,i,t),p.lanes|=i;break}g=g.next}}else if(s.tag===10)u=s.type===t.type?null:s.child;else if(s.tag===18){if(u=s.return,u===null)throw Error(a(341));u.lanes|=i,p=u.alternate,p!==null&&(p.lanes|=i),As(u,i,t),u=s.sibling}else u=s.child;if(u!==null)u.return=s;else for(u=s;u!==null;){if(u===t){u=null;break}if(s=u.sibling,s!==null){s.return=u.return,u=s;break}u=u.return}s=u}st(e,t,o.children,i),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,rn(t,i),o=It(o),n=n(o),t.flags|=1,st(e,t,n,i),t.child;case 14:return n=t.type,o=Ot(n,t.pendingProps),o=Ot(n.type,o),Jc(e,t,n,o,i);case 15:return Xc(e,t,t.type,t.pendingProps,i);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Ot(n,o),ir(e,t),t.tag=1,ut(n)?(e=!0,zo(t)):e=!1,rn(t,i),Bc(t,n,o),$s(t,n,o,i),Ys(null,t,n,!0,e,i);case 19:return su(e,t,i);case 22:return Zc(e,t,i)}throw Error(a(156,t.tag))};function Au(e,t){return cl(e,t)}function Mp(e,t,i,n){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,i,n){return new Mp(e,t,i,n)}function fa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Op(e){if(typeof e=="function")return fa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ae)return 11;if(e===Te)return 14}return 2}function ki(e,t){var i=e.alternate;return i===null?(i=Tt(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function pr(e,t,i,n,o,s){var u=2;if(n=e,typeof e=="function")fa(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case we:return zi(i.children,o,s,t);case pe:u=8,o|=8;break;case ye:return e=Tt(12,i,t,o|2),e.elementType=ye,e.lanes=s,e;case Ce:return e=Tt(13,i,t,o),e.elementType=Ce,e.lanes=s,e;case Fe:return e=Tt(19,i,t,o),e.elementType=Fe,e.lanes=s,e;case me:return mr(i,o,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ie:u=10;break e;case Xe:u=9;break e;case Ae:u=11;break e;case Te:u=14;break e;case He:u=16,n=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return t=Tt(u,i,t,o),t.elementType=e,t.type=n,t.lanes=s,t}function zi(e,t,i,n){return e=Tt(7,e,n,t),e.lanes=i,e}function mr(e,t,i,n){return e=Tt(22,e,n,t),e.elementType=me,e.lanes=i,e.stateNode={isHidden:!1},e}function ya(e,t,i){return e=Tt(6,e,null,t),e.lanes=i,e}function va(e,t,i){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lp(e,t,i,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vr(0),this.expirationTimes=Vr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vr(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function wa(e,t,i,n,o,s,u,p,g){return e=new Lp(e,t,i,p,g),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Tt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ms(s),e}function _p(e,t,i){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ue,key:n==null?null:""+n,children:e,containerInfo:t,implementation:i}}function Ru(e){if(!e)return hi;e=e._reactInternals;e:{if(Ci(e)!==e||e.tag!==1)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(a(171))}if(e.tag===1){var i=e.type;if(ut(i))return rc(e,i,t)}return t}function Mu(e,t,i,n,o,s,u,p,g){return e=wa(i,n,!0,e,o,s,u,p,g),e.context=Ru(null),i=e.current,n=at(),o=wi(i),s=Jt(n,o),s.callback=t??null,gi(i,s,o),e.current.lanes=o,In(e,o,n),pt(e,n),e}function gr(e,t,i,n){var o=t.current,s=at(),u=wi(o);return i=Ru(i),t.context===null?t.context=i:t.pendingContext=i,t=Jt(s,u),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=gi(o,t,u),e!==null&&(Ut(e,o,u,s),$o(e,o,u)),u}function fr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ou(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function ba(e,t){Ou(e,t),(e=e.alternate)&&Ou(e,t)}function Up(){return null}var Lu=typeof reportError=="function"?reportError:function(e){console.error(e)};function ka(e){this._internalRoot=e}yr.prototype.render=ka.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));gr(e,t,null,null)},yr.prototype.unmount=ka.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_i(function(){gr(null,e,null,null)}),t[$t]=null}};function yr(e){this._internalRoot=e}yr.prototype.unstable_scheduleHydration=function(e){if(e){var t=yl();e={blockedOn:null,target:e,priority:t};for(var i=0;i<ai.length&&t!==0&&t<ai[i].priority;i++);ai.splice(i,0,e),i===0&&bl(e)}};function Sa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _u(){}function Fp(e,t,i,n,o){if(o){if(typeof n=="function"){var s=n;n=function(){var T=fr(u);s.call(T)}}var u=Mu(t,n,e,0,null,!1,!1,"",_u);return e._reactRootContainer=u,e[$t]=u.current,zn(e.nodeType===8?e.parentNode:e),_i(),u}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var p=n;n=function(){var T=fr(g);p.call(T)}}var g=wa(e,0,!1,null,null,!1,!1,"",_u);return e._reactRootContainer=g,e[$t]=g.current,zn(e.nodeType===8?e.parentNode:e),_i(function(){gr(t,g,i,n)}),g}function wr(e,t,i,n,o){var s=i._reactRootContainer;if(s){var u=s;if(typeof o=="function"){var p=o;o=function(){var g=fr(u);p.call(g)}}gr(t,u,e,o)}else u=Fp(i,t,e,o,n);return fr(u)}gl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=xn(t.pendingLanes);i!==0&&($r(t,i|1),pt(t,Ne()),(ve&6)===0&&(un=Ne()+500,pi()))}break;case 13:_i(function(){var n=Yt(e,1);if(n!==null){var o=at();Ut(n,e,1,o)}}),ba(e,1)}},Kr=function(e){if(e.tag===13){var t=Yt(e,134217728);if(t!==null){var i=at();Ut(t,e,134217728,i)}ba(e,134217728)}},fl=function(e){if(e.tag===13){var t=wi(e),i=Yt(e,t);if(i!==null){var n=at();Ut(i,e,t,n)}ba(e,t)}},yl=function(){return Se},vl=function(e,t){var i=Se;try{return Se=e,t()}finally{Se=i}},Wr=function(e,t,i){switch(t){case"input":if(fe(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var n=i[t];if(n!==e&&n.form===e.form){var o=Uo(n);if(!o)throw Error(a(90));ce(n),fe(n,o)}}}break;case"textarea":se(e,i);break;case"select":t=i.value,t!=null&&Et(e,!!i.multiple,t,!1)}},il=pa,nl=_i;var zp={usingClientEntryPoint:!1,Events:[jn,Yi,Uo,el,tl,pa]},to={findFiberByHostInstance:Ti,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wp={bundleType:to.bundleType,version:to.version,rendererPackageName:to.rendererPackageName,rendererConfig:to.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Y.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=al(e),e===null?null:e.stateNode},findFiberByHostInstance:to.findFiberByHostInstance||Up,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var br=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!br.isDisabled&&br.supportsFiber)try{yo=br.inject(Wp),Ft=br}catch{}}return mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zp,mt.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sa(t))throw Error(a(200));return _p(e,t,null,i)},mt.createRoot=function(e,t){if(!Sa(e))throw Error(a(299));var i=!1,n="",o=Lu;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=wa(e,1,!1,null,null,i,!1,n,o),e[$t]=t.current,zn(e.nodeType===8?e.parentNode:e),new ka(t)},mt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=al(t),e=e===null?null:e.stateNode,e},mt.flushSync=function(e){return _i(e)},mt.hydrate=function(e,t,i){if(!vr(t))throw Error(a(200));return wr(null,e,t,!0,i)},mt.hydrateRoot=function(e,t,i){if(!Sa(e))throw Error(a(405));var n=i!=null&&i.hydratedSources||null,o=!1,s="",u=Lu;if(i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(s=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),t=Mu(t,null,e,1,i??null,o,!1,s,u),e[$t]=t.current,zn(e),n)for(e=0;e<n.length;e++)i=n[e],o=i._getVersion,o=o(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,o]:t.mutableSourceEagerHydrationData.push(i,o);return new yr(t)},mt.render=function(e,t,i){if(!vr(t))throw Error(a(200));return wr(null,e,t,!1,i)},mt.unmountComponentAtNode=function(e){if(!vr(e))throw Error(a(40));return e._reactRootContainer?(_i(function(){wr(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1},mt.unstable_batchedUpdates=pa,mt.unstable_renderSubtreeIntoContainer=function(e,t,i,n){if(!vr(i))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return wr(e,t,i,!1,n)},mt.version="18.3.1-next-f1338f8080-20240426",mt}var Bu;function Kp(){if(Bu)return Pa.exports;Bu=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(l){console.error(l)}}return r(),Pa.exports=$p(),Pa.exports}var qu;function Gp(){if(qu)return kr;qu=1;var r=Kp();return kr.createRoot=r.createRoot,kr.hydrateRoot=r.hydrateRoot,kr}var Qp=Gp(),no={},Vu;function Yp(){if(Vu)return no;Vu=1,Object.defineProperty(no,"__esModule",{value:!0}),no.parse=m,no.serialize=y;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,l=/^[\u0021-\u003A\u003C-\u007E]*$/,a=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,c=/^[\u0020-\u003A\u003D-\u007E]*$/,d=Object.prototype.toString,h=(()=>{const E=function(){};return E.prototype=Object.create(null),E})();function m(E,_){const S=new h,b=E.length;if(b<2)return S;const R=(_==null?void 0:_.decode)||D;let O=0;do{const U=E.indexOf("=",O);if(U===-1)break;const $=E.indexOf(";",O),Y=$===-1?b:$;if(U>Y){O=E.lastIndexOf(";",U-1)+1;continue}const L=w(E,O,U),ue=f(E,U,L),we=E.slice(L,ue);if(S[we]===void 0){let pe=w(E,U+1,Y),ye=f(E,Y,pe);const Ie=R(E.slice(pe,ye));S[we]=Ie}O=Y+1}while(O<b);return S}function w(E,_,S){do{const b=E.charCodeAt(_);if(b!==32&&b!==9)return _}while(++_<S);return S}function f(E,_,S){for(;_>S;){const b=E.charCodeAt(--_);if(b!==32&&b!==9)return _+1}return S}function y(E,_,S){const b=(S==null?void 0:S.encode)||encodeURIComponent;if(!r.test(E))throw new TypeError(`argument name is invalid: ${E}`);const R=b(_);if(!l.test(R))throw new TypeError(`argument val is invalid: ${_}`);let O=E+"="+R;if(!S)return O;if(S.maxAge!==void 0){if(!Number.isInteger(S.maxAge))throw new TypeError(`option maxAge is invalid: ${S.maxAge}`);O+="; Max-Age="+S.maxAge}if(S.domain){if(!a.test(S.domain))throw new TypeError(`option domain is invalid: ${S.domain}`);O+="; Domain="+S.domain}if(S.path){if(!c.test(S.path))throw new TypeError(`option path is invalid: ${S.path}`);O+="; Path="+S.path}if(S.expires){if(!M(S.expires)||!Number.isFinite(S.expires.valueOf()))throw new TypeError(`option expires is invalid: ${S.expires}`);O+="; Expires="+S.expires.toUTCString()}if(S.httpOnly&&(O+="; HttpOnly"),S.secure&&(O+="; Secure"),S.partitioned&&(O+="; Partitioned"),S.priority)switch(typeof S.priority=="string"?S.priority.toLowerCase():void 0){case"low":O+="; Priority=Low";break;case"medium":O+="; Priority=Medium";break;case"high":O+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${S.priority}`)}if(S.sameSite)switch(typeof S.sameSite=="string"?S.sameSite.toLowerCase():S.sameSite){case!0:case"strict":O+="; SameSite=Strict";break;case"lax":O+="; SameSite=Lax";break;case"none":O+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${S.sameSite}`)}return O}function D(E){if(E.indexOf("%")===-1)return E;try{return decodeURIComponent(E)}catch{return E}}function M(E){return d.call(E)==="[object Date]"}return no}Yp();var $u="popstate";function Jp(r={}){function l(c,d){let{pathname:h,search:m,hash:w}=c.location;return _a("",{pathname:h,search:m,hash:w},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function a(c,d){return typeof d=="string"?d:so(d)}return Zp(l,a,null,r)}function Ue(r,l){if(r===!1||r===null||typeof r>"u")throw new Error(l)}function Ht(r,l){if(!r){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function Xp(){return Math.random().toString(36).substring(2,10)}function Ku(r,l){return{usr:r.state,key:r.key,idx:l}}function _a(r,l,a=null,c){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof l=="string"?fn(l):l,state:a,key:l&&l.key||c||Xp()}}function so({pathname:r="/",search:l="",hash:a=""}){return l&&l!=="?"&&(r+=l.charAt(0)==="?"?l:"?"+l),a&&a!=="#"&&(r+=a.charAt(0)==="#"?a:"#"+a),r}function fn(r){let l={};if(r){let a=r.indexOf("#");a>=0&&(l.hash=r.substring(a),r=r.substring(0,a));let c=r.indexOf("?");c>=0&&(l.search=r.substring(c),r=r.substring(0,c)),r&&(l.pathname=r)}return l}function Zp(r,l,a,c={}){let{window:d=document.defaultView,v5Compat:h=!1}=c,m=d.history,w="POP",f=null,y=D();y==null&&(y=0,m.replaceState({...m.state,idx:y},""));function D(){return(m.state||{idx:null}).idx}function M(){w="POP";let R=D(),O=R==null?null:R-y;y=R,f&&f({action:w,location:b.location,delta:O})}function E(R,O){w="PUSH";let U=_a(b.location,R,O);y=D()+1;let $=Ku(U,y),Y=b.createHref(U);try{m.pushState($,"",Y)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;d.location.assign(Y)}h&&f&&f({action:w,location:b.location,delta:1})}function _(R,O){w="REPLACE";let U=_a(b.location,R,O);y=D();let $=Ku(U,y),Y=b.createHref(U);m.replaceState($,"",Y),h&&f&&f({action:w,location:b.location,delta:0})}function S(R){return em(R)}let b={get action(){return w},get location(){return r(d,m)},listen(R){if(f)throw new Error("A history only accepts one active listener");return d.addEventListener($u,M),f=R,()=>{d.removeEventListener($u,M),f=null}},createHref(R){return l(d,R)},createURL:S,encodeLocation(R){let O=S(R);return{pathname:O.pathname,search:O.search,hash:O.hash}},push:E,replace:_,go(R){return m.go(R)}};return b}function em(r,l=!1){let a="http://localhost";typeof window<"u"&&(a=window.location.origin!=="null"?window.location.origin:window.location.href),Ue(a,"No window.location.(origin|href) available to create URL");let c=typeof r=="string"?r:so(r);return c=c.replace(/ $/,"%20"),!l&&c.startsWith("//")&&(c=a+c),new URL(c,a)}function gd(r,l,a="/"){return tm(r,l,a,!1)}function tm(r,l,a,c){let d=typeof l=="string"?fn(l):l,h=ii(d.pathname||"/",a);if(h==null)return null;let m=fd(r);im(m);let w=null;for(let f=0;w==null&&f<m.length;++f){let y=pm(h);w=dm(m[f],y,c)}return w}function fd(r,l=[],a=[],c=""){let d=(h,m,w)=>{let f={relativePath:w===void 0?h.path||"":w,caseSensitive:h.caseSensitive===!0,childrenIndex:m,route:h};f.relativePath.startsWith("/")&&(Ue(f.relativePath.startsWith(c),`Absolute route path "${f.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(c.length));let y=ti([c,f.relativePath]),D=a.concat(f);h.children&&h.children.length>0&&(Ue(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),fd(h.children,l,D,y)),!(h.path==null&&!h.index)&&l.push({path:y,score:cm(y,h.index),routesMeta:D})};return r.forEach((h,m)=>{var w;if(h.path===""||!((w=h.path)!=null&&w.includes("?")))d(h,m);else for(let f of yd(h.path))d(h,m,f)}),l}function yd(r){let l=r.split("/");if(l.length===0)return[];let[a,...c]=l,d=a.endsWith("?"),h=a.replace(/\?$/,"");if(c.length===0)return d?[h,""]:[h];let m=yd(c.join("/")),w=[];return w.push(...m.map(f=>f===""?h:[h,f].join("/"))),d&&w.push(...m),w.map(f=>r.startsWith("/")&&f===""?"/":f)}function im(r){r.sort((l,a)=>l.score!==a.score?a.score-l.score:um(l.routesMeta.map(c=>c.childrenIndex),a.routesMeta.map(c=>c.childrenIndex)))}var nm=/^:[\w-]+$/,om=3,rm=2,sm=1,am=10,lm=-2,Gu=r=>r==="*";function cm(r,l){let a=r.split("/"),c=a.length;return a.some(Gu)&&(c+=lm),l&&(c+=rm),a.filter(d=>!Gu(d)).reduce((d,h)=>d+(nm.test(h)?om:h===""?sm:am),c)}function um(r,l){return r.length===l.length&&r.slice(0,-1).every((c,d)=>c===l[d])?r[r.length-1]-l[l.length-1]:0}function dm(r,l,a=!1){let{routesMeta:c}=r,d={},h="/",m=[];for(let w=0;w<c.length;++w){let f=c[w],y=w===c.length-1,D=h==="/"?l:l.slice(h.length)||"/",M=Dr({path:f.relativePath,caseSensitive:f.caseSensitive,end:y},D),E=f.route;if(!M&&y&&a&&!c[c.length-1].route.index&&(M=Dr({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},D)),!M)return null;Object.assign(d,M.params),m.push({params:d,pathname:ti([h,M.pathname]),pathnameBase:ym(ti([h,M.pathnameBase])),route:E}),M.pathnameBase!=="/"&&(h=ti([h,M.pathnameBase]))}return m}function Dr(r,l){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[a,c]=hm(r.path,r.caseSensitive,r.end),d=l.match(a);if(!d)return null;let h=d[0],m=h.replace(/(.)\/+$/,"$1"),w=d.slice(1);return{params:c.reduce((y,{paramName:D,isOptional:M},E)=>{if(D==="*"){let S=w[E]||"";m=h.slice(0,h.length-S.length).replace(/(.)\/+$/,"$1")}const _=w[E];return M&&!_?y[D]=void 0:y[D]=(_||"").replace(/%2F/g,"/"),y},{}),pathname:h,pathnameBase:m,pattern:r}}function hm(r,l=!1,a=!0){Ht(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let c=[],d="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,w,f)=>(c.push({paramName:w,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(c.push({paramName:"*"}),d+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?d+="\\/*$":r!==""&&r!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,l?void 0:"i"),c]}function pm(r){try{return r.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return Ht(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),r}}function ii(r,l){if(l==="/")return r;if(!r.toLowerCase().startsWith(l.toLowerCase()))return null;let a=l.endsWith("/")?l.length-1:l.length,c=r.charAt(a);return c&&c!=="/"?null:r.slice(a)||"/"}function mm(r,l="/"){let{pathname:a,search:c="",hash:d=""}=typeof r=="string"?fn(r):r;return{pathname:a?a.startsWith("/")?a:gm(a,l):l,search:vm(c),hash:wm(d)}}function gm(r,l){let a=l.replace(/\/+$/,"").split("/");return r.split("/").forEach(d=>{d===".."?a.length>1&&a.pop():d!=="."&&a.push(d)}),a.length>1?a.join("/"):"/"}function Da(r,l,a,c){return`Cannot include a '${r}' character in a manually specified \`to.${l}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function fm(r){return r.filter((l,a)=>a===0||l.route.path&&l.route.path.length>0)}function vd(r){let l=fm(r);return l.map((a,c)=>c===l.length-1?a.pathname:a.pathnameBase)}function wd(r,l,a,c=!1){let d;typeof r=="string"?d=fn(r):(d={...r},Ue(!d.pathname||!d.pathname.includes("?"),Da("?","pathname","search",d)),Ue(!d.pathname||!d.pathname.includes("#"),Da("#","pathname","hash",d)),Ue(!d.search||!d.search.includes("#"),Da("#","search","hash",d)));let h=r===""||d.pathname==="",m=h?"/":d.pathname,w;if(m==null)w=a;else{let M=l.length-1;if(!c&&m.startsWith("..")){let E=m.split("/");for(;E[0]==="..";)E.shift(),M-=1;d.pathname=E.join("/")}w=M>=0?l[M]:"/"}let f=mm(d,w),y=m&&m!=="/"&&m.endsWith("/"),D=(h||m===".")&&a.endsWith("/");return!f.pathname.endsWith("/")&&(y||D)&&(f.pathname+="/"),f}var ti=r=>r.join("/").replace(/\/\/+/g,"/"),ym=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),vm=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,wm=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function bm(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var bd=["POST","PUT","PATCH","DELETE"];new Set(bd);var km=["GET",...bd];new Set(km);var yn=A.createContext(null);yn.displayName="DataRouter";var Or=A.createContext(null);Or.displayName="DataRouterState";var kd=A.createContext({isTransitioning:!1});kd.displayName="ViewTransition";var Sm=A.createContext(new Map);Sm.displayName="Fetchers";var xm=A.createContext(null);xm.displayName="Await";var Bt=A.createContext(null);Bt.displayName="Navigation";var co=A.createContext(null);co.displayName="Location";var ni=A.createContext({outlet:null,matches:[],isDataRoute:!1});ni.displayName="Route";var Ha=A.createContext(null);Ha.displayName="RouteError";function Im(r,{relative:l}={}){Ue(uo(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:c}=A.useContext(Bt),{hash:d,pathname:h,search:m}=ho(r,{relative:l}),w=h;return a!=="/"&&(w=h==="/"?a:ti([a,h])),c.createHref({pathname:w,search:m,hash:d})}function uo(){return A.useContext(co)!=null}function Ii(){return Ue(uo(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(co).location}var Sd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function xd(r){A.useContext(Bt).static||A.useLayoutEffect(r)}function Id(){let{isDataRoute:r}=A.useContext(ni);return r?Fm():Pm()}function Pm(){Ue(uo(),"useNavigate() may be used only in the context of a <Router> component.");let r=A.useContext(yn),{basename:l,navigator:a}=A.useContext(Bt),{matches:c}=A.useContext(ni),{pathname:d}=Ii(),h=JSON.stringify(vd(c)),m=A.useRef(!1);return xd(()=>{m.current=!0}),A.useCallback((f,y={})=>{if(Ht(m.current,Sd),!m.current)return;if(typeof f=="number"){a.go(f);return}let D=wd(f,JSON.parse(h),d,y.relative==="path");r==null&&l!=="/"&&(D.pathname=D.pathname==="/"?l:ti([l,D.pathname])),(y.replace?a.replace:a.push)(D,y.state,y)},[l,a,h,d,r])}A.createContext(null);function ho(r,{relative:l}={}){let{matches:a}=A.useContext(ni),{pathname:c}=Ii(),d=JSON.stringify(vd(a));return A.useMemo(()=>wd(r,JSON.parse(d),c,l==="path"),[r,d,c,l])}function Cm(r,l){return Pd(r,l)}function Pd(r,l,a,c){var O;Ue(uo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=A.useContext(Bt),{matches:h}=A.useContext(ni),m=h[h.length-1],w=m?m.params:{},f=m?m.pathname:"/",y=m?m.pathnameBase:"/",D=m&&m.route;{let U=D&&D.path||"";Cd(f,!D||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let M=Ii(),E;if(l){let U=typeof l=="string"?fn(l):l;Ue(y==="/"||((O=U.pathname)==null?void 0:O.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${U.pathname}" was given in the \`location\` prop.`),E=U}else E=M;let _=E.pathname||"/",S=_;if(y!=="/"){let U=y.replace(/^\//,"").split("/");S="/"+_.replace(/^\//,"").split("/").slice(U.length).join("/")}let b=gd(r,{pathname:S});Ht(D||b!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),Ht(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=Rm(b&&b.map(U=>Object.assign({},U,{params:Object.assign({},w,U.params),pathname:ti([y,d.encodeLocation?d.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?y:ti([y,d.encodeLocation?d.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),h,a,c);return l&&R?A.createElement(co.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},R):R}function Tm(){let r=Um(),l=bm(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),a=r instanceof Error?r.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},h={padding:"2px 4px",backgroundColor:c},m=null;return console.error("Error handled by React Router default ErrorBoundary:",r),m=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:h},"ErrorBoundary")," or"," ",A.createElement("code",{style:h},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},l),a?A.createElement("pre",{style:d},a):null,m)}var Dm=A.createElement(Tm,null),Em=class extends A.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,l){return l.location!==r.location||l.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:l.error,location:l.location,revalidation:r.revalidation||l.revalidation}}componentDidCatch(r,l){console.error("React Router caught the following error during render",r,l)}render(){return this.state.error!==void 0?A.createElement(ni.Provider,{value:this.props.routeContext},A.createElement(Ha.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Am({routeContext:r,match:l,children:a}){let c=A.useContext(yn);return c&&c.static&&c.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=l.route.id),A.createElement(ni.Provider,{value:r},a)}function Rm(r,l=[],a=null,c=null){if(r==null){if(!a)return null;if(a.errors)r=a.matches;else if(l.length===0&&!a.initialized&&a.matches.length>0)r=a.matches;else return null}let d=r,h=a==null?void 0:a.errors;if(h!=null){let f=d.findIndex(y=>y.route.id&&(h==null?void 0:h[y.route.id])!==void 0);Ue(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),d=d.slice(0,Math.min(d.length,f+1))}let m=!1,w=-1;if(a)for(let f=0;f<d.length;f++){let y=d[f];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(w=f),y.route.id){let{loaderData:D,errors:M}=a,E=y.route.loader&&!D.hasOwnProperty(y.route.id)&&(!M||M[y.route.id]===void 0);if(y.route.lazy||E){m=!0,w>=0?d=d.slice(0,w+1):d=[d[0]];break}}}return d.reduceRight((f,y,D)=>{let M,E=!1,_=null,S=null;a&&(M=h&&y.route.id?h[y.route.id]:void 0,_=y.route.errorElement||Dm,m&&(w<0&&D===0?(Cd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,S=null):w===D&&(E=!0,S=y.route.hydrateFallbackElement||null)));let b=l.concat(d.slice(0,D+1)),R=()=>{let O;return M?O=_:E?O=S:y.route.Component?O=A.createElement(y.route.Component,null):y.route.element?O=y.route.element:O=f,A.createElement(Am,{match:y,routeContext:{outlet:f,matches:b,isDataRoute:a!=null},children:O})};return a&&(y.route.ErrorBoundary||y.route.errorElement||D===0)?A.createElement(Em,{location:a.location,revalidation:a.revalidation,component:_,error:M,children:R(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):R()},null)}function Ba(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mm(r){let l=A.useContext(yn);return Ue(l,Ba(r)),l}function Om(r){let l=A.useContext(Or);return Ue(l,Ba(r)),l}function Lm(r){let l=A.useContext(ni);return Ue(l,Ba(r)),l}function qa(r){let l=Lm(r),a=l.matches[l.matches.length-1];return Ue(a.route.id,`${r} can only be used on routes that contain a unique "id"`),a.route.id}function _m(){return qa("useRouteId")}function Um(){var c;let r=A.useContext(Ha),l=Om("useRouteError"),a=qa("useRouteError");return r!==void 0?r:(c=l.errors)==null?void 0:c[a]}function Fm(){let{router:r}=Mm("useNavigate"),l=qa("useNavigate"),a=A.useRef(!1);return xd(()=>{a.current=!0}),A.useCallback(async(d,h={})=>{Ht(a.current,Sd),a.current&&(typeof d=="number"?r.navigate(d):await r.navigate(d,{fromRouteId:l,...h}))},[r,l])}var Qu={};function Cd(r,l,a){!l&&!Qu[r]&&(Qu[r]=!0,Ht(!1,a))}A.memo(zm);function zm({routes:r,future:l,state:a}){return Pd(r,void 0,a,l)}function rt(r){Ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Wm({basename:r="/",children:l=null,location:a,navigationType:c="POP",navigator:d,static:h=!1}){Ue(!uo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=r.replace(/^\/*/,"/"),w=A.useMemo(()=>({basename:m,navigator:d,static:h,future:{}}),[m,d,h]);typeof a=="string"&&(a=fn(a));let{pathname:f="/",search:y="",hash:D="",state:M=null,key:E="default"}=a,_=A.useMemo(()=>{let S=ii(f,m);return S==null?null:{location:{pathname:S,search:y,hash:D,state:M,key:E},navigationType:c}},[m,f,y,D,M,E,c]);return Ht(_!=null,`<Router basename="${m}"> is not able to match the URL "${f}${y}${D}" because it does not start with the basename, so the <Router> won't render anything.`),_==null?null:A.createElement(Bt.Provider,{value:w},A.createElement(co.Provider,{children:l,value:_}))}function Nm({children:r,location:l}){return Cm(Ua(r),l)}function Ua(r,l=[]){let a=[];return A.Children.forEach(r,(c,d)=>{if(!A.isValidElement(c))return;let h=[...l,d];if(c.type===A.Fragment){a.push.apply(a,Ua(c.props.children,h));return}Ue(c.type===rt,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ue(!c.props.index||!c.props.children,"An index route cannot have child routes.");let m={id:c.props.id||h.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(m.children=Ua(c.props.children,h)),a.push(m)}),a}var Pr="get",Cr="application/x-www-form-urlencoded";function Lr(r){return r!=null&&typeof r.tagName=="string"}function jm(r){return Lr(r)&&r.tagName.toLowerCase()==="button"}function Hm(r){return Lr(r)&&r.tagName.toLowerCase()==="form"}function Bm(r){return Lr(r)&&r.tagName.toLowerCase()==="input"}function qm(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Vm(r,l){return r.button===0&&(!l||l==="_self")&&!qm(r)}var Sr=null;function $m(){if(Sr===null)try{new FormData(document.createElement("form"),0),Sr=!1}catch{Sr=!0}return Sr}var Km=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ea(r){return r!=null&&!Km.has(r)?(Ht(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Cr}"`),null):r}function Gm(r,l){let a,c,d,h,m;if(Hm(r)){let w=r.getAttribute("action");c=w?ii(w,l):null,a=r.getAttribute("method")||Pr,d=Ea(r.getAttribute("enctype"))||Cr,h=new FormData(r)}else if(jm(r)||Bm(r)&&(r.type==="submit"||r.type==="image")){let w=r.form;if(w==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=r.getAttribute("formaction")||w.getAttribute("action");if(c=f?ii(f,l):null,a=r.getAttribute("formmethod")||w.getAttribute("method")||Pr,d=Ea(r.getAttribute("formenctype"))||Ea(w.getAttribute("enctype"))||Cr,h=new FormData(w,r),!$m()){let{name:y,type:D,value:M}=r;if(D==="image"){let E=y?`${y}.`:"";h.append(`${E}x`,"0"),h.append(`${E}y`,"0")}else y&&h.append(y,M)}}else{if(Lr(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=Pr,c=null,d=Cr,m=r}return h&&d==="text/plain"&&(m=h,h=void 0),{action:c,method:a.toLowerCase(),encType:d,formData:h,body:m}}function Va(r,l){if(r===!1||r===null||typeof r>"u")throw new Error(l)}async function Qm(r,l){if(r.id in l)return l[r.id];try{let a=await import(r.module);return l[r.id]=a,a}catch(a){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ym(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Jm(r,l,a){let c=await Promise.all(r.map(async d=>{let h=l.routes[d.route.id];if(h){let m=await Qm(h,a);return m.links?m.links():[]}return[]}));return tg(c.flat(1).filter(Ym).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Yu(r,l,a,c,d,h){let m=(f,y)=>a[y]?f.route.id!==a[y].route.id:!0,w=(f,y)=>{var D;return a[y].pathname!==f.pathname||((D=a[y].route.path)==null?void 0:D.endsWith("*"))&&a[y].params["*"]!==f.params["*"]};return h==="assets"?l.filter((f,y)=>m(f,y)||w(f,y)):h==="data"?l.filter((f,y)=>{var M;let D=c.routes[f.route.id];if(!D||!D.hasLoader)return!1;if(m(f,y)||w(f,y))return!0;if(f.route.shouldRevalidate){let E=f.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:((M=a[0])==null?void 0:M.params)||{},nextUrl:new URL(r,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function Xm(r,l,{includeHydrateFallback:a}={}){return Zm(r.map(c=>{let d=l.routes[c.route.id];if(!d)return[];let h=[d.module];return d.clientActionModule&&(h=h.concat(d.clientActionModule)),d.clientLoaderModule&&(h=h.concat(d.clientLoaderModule)),a&&d.hydrateFallbackModule&&(h=h.concat(d.hydrateFallbackModule)),d.imports&&(h=h.concat(d.imports)),h}).flat(1))}function Zm(r){return[...new Set(r)]}function eg(r){let l={},a=Object.keys(r).sort();for(let c of a)l[c]=r[c];return l}function tg(r,l){let a=new Set;return new Set(l),r.reduce((c,d)=>{let h=JSON.stringify(eg(d));return a.has(h)||(a.add(h),c.push({key:h,link:d})),c},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var ig=new Set([100,101,204,205]);function ng(r,l){let a=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return a.pathname==="/"?a.pathname="_root.data":l&&ii(a.pathname,l)==="/"?a.pathname=`${l.replace(/\/$/,"")}/_root.data`:a.pathname=`${a.pathname.replace(/\/$/,"")}.data`,a}function Td(){let r=A.useContext(yn);return Va(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function og(){let r=A.useContext(Or);return Va(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var $a=A.createContext(void 0);$a.displayName="FrameworkContext";function Dd(){let r=A.useContext($a);return Va(r,"You must render this element inside a <HydratedRouter> element"),r}function rg(r,l){let a=A.useContext($a),[c,d]=A.useState(!1),[h,m]=A.useState(!1),{onFocus:w,onBlur:f,onMouseEnter:y,onMouseLeave:D,onTouchStart:M}=l,E=A.useRef(null);A.useEffect(()=>{if(r==="render"&&m(!0),r==="viewport"){let b=O=>{O.forEach(U=>{m(U.isIntersecting)})},R=new IntersectionObserver(b,{threshold:.5});return E.current&&R.observe(E.current),()=>{R.disconnect()}}},[r]),A.useEffect(()=>{if(c){let b=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(b)}}},[c]);let _=()=>{d(!0)},S=()=>{d(!1),m(!1)};return a?r!=="intent"?[h,E,{}]:[h,E,{onFocus:oo(w,_),onBlur:oo(f,S),onMouseEnter:oo(y,_),onMouseLeave:oo(D,S),onTouchStart:oo(M,_)}]:[!1,E,{}]}function oo(r,l){return a=>{r&&r(a),a.defaultPrevented||l(a)}}function sg({page:r,...l}){let{router:a}=Td(),c=A.useMemo(()=>gd(a.routes,r,a.basename),[a.routes,r,a.basename]);return c?A.createElement(lg,{page:r,matches:c,...l}):null}function ag(r){let{manifest:l,routeModules:a}=Dd(),[c,d]=A.useState([]);return A.useEffect(()=>{let h=!1;return Jm(r,l,a).then(m=>{h||d(m)}),()=>{h=!0}},[r,l,a]),c}function lg({page:r,matches:l,...a}){let c=Ii(),{manifest:d,routeModules:h}=Dd(),{basename:m}=Td(),{loaderData:w,matches:f}=og(),y=A.useMemo(()=>Yu(r,l,f,d,c,"data"),[r,l,f,d,c]),D=A.useMemo(()=>Yu(r,l,f,d,c,"assets"),[r,l,f,d,c]),M=A.useMemo(()=>{if(r===c.pathname+c.search+c.hash)return[];let S=new Set,b=!1;if(l.forEach(O=>{var $;let U=d.routes[O.route.id];!U||!U.hasLoader||(!y.some(Y=>Y.route.id===O.route.id)&&O.route.id in w&&(($=h[O.route.id])!=null&&$.shouldRevalidate)||U.hasClientLoader?b=!0:S.add(O.route.id))}),S.size===0)return[];let R=ng(r,m);return b&&S.size>0&&R.searchParams.set("_routes",l.filter(O=>S.has(O.route.id)).map(O=>O.route.id).join(",")),[R.pathname+R.search]},[m,w,c,d,y,l,r,h]),E=A.useMemo(()=>Xm(D,d),[D,d]),_=ag(D);return A.createElement(A.Fragment,null,M.map(S=>A.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...a})),E.map(S=>A.createElement("link",{key:S,rel:"modulepreload",href:S,...a})),_.map(({key:S,link:b})=>A.createElement("link",{key:S,...b})))}function cg(...r){return l=>{r.forEach(a=>{typeof a=="function"?a(l):a!=null&&(a.current=l)})}}var Ed=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ed&&(window.__reactRouterVersion="7.6.2")}catch{}function ug({basename:r,children:l,window:a}){let c=A.useRef();c.current==null&&(c.current=Jp({window:a,v5Compat:!0}));let d=c.current,[h,m]=A.useState({action:d.action,location:d.location}),w=A.useCallback(f=>{A.startTransition(()=>m(f))},[m]);return A.useLayoutEffect(()=>d.listen(w),[d,w]),A.createElement(Wm,{basename:r,children:l,location:h.location,navigationType:h.action,navigator:d})}var Ad=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rd=A.forwardRef(function({onClick:l,discover:a="render",prefetch:c="none",relative:d,reloadDocument:h,replace:m,state:w,target:f,to:y,preventScrollReset:D,viewTransition:M,...E},_){let{basename:S}=A.useContext(Bt),b=typeof y=="string"&&Ad.test(y),R,O=!1;if(typeof y=="string"&&b&&(R=y,Ed))try{let ye=new URL(window.location.href),Ie=y.startsWith("//")?new URL(ye.protocol+y):new URL(y),Xe=ii(Ie.pathname,S);Ie.origin===ye.origin&&Xe!=null?y=Xe+Ie.search+Ie.hash:O=!0}catch{Ht(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let U=Im(y,{relative:d}),[$,Y,L]=rg(c,E),ue=pg(y,{replace:m,state:w,target:f,preventScrollReset:D,relative:d,viewTransition:M});function we(ye){l&&l(ye),ye.defaultPrevented||ue(ye)}let pe=A.createElement("a",{...E,...L,href:R||U,onClick:O||h?l:we,ref:cg(_,Y),target:f,"data-discover":!b&&a==="render"?"true":void 0});return $&&!b?A.createElement(A.Fragment,null,pe,A.createElement(sg,{page:U})):pe});Rd.displayName="Link";var Md=A.forwardRef(function({"aria-current":l="page",caseSensitive:a=!1,className:c="",end:d=!1,style:h,to:m,viewTransition:w,children:f,...y},D){let M=ho(m,{relative:y.relative}),E=Ii(),_=A.useContext(Or),{navigator:S,basename:b}=A.useContext(Bt),R=_!=null&&vg(M)&&w===!0,O=S.encodeLocation?S.encodeLocation(M).pathname:M.pathname,U=E.pathname,$=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;a||(U=U.toLowerCase(),$=$?$.toLowerCase():null,O=O.toLowerCase()),$&&b&&($=ii($,b)||$);const Y=O!=="/"&&O.endsWith("/")?O.length-1:O.length;let L=U===O||!d&&U.startsWith(O)&&U.charAt(Y)==="/",ue=$!=null&&($===O||!d&&$.startsWith(O)&&$.charAt(O.length)==="/"),we={isActive:L,isPending:ue,isTransitioning:R},pe=L?l:void 0,ye;typeof c=="function"?ye=c(we):ye=[c,L?"active":null,ue?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let Ie=typeof h=="function"?h(we):h;return A.createElement(Rd,{...y,"aria-current":pe,className:ye,ref:D,style:Ie,to:m,viewTransition:w},typeof f=="function"?f(we):f)});Md.displayName="NavLink";var dg=A.forwardRef(({discover:r="render",fetcherKey:l,navigate:a,reloadDocument:c,replace:d,state:h,method:m=Pr,action:w,onSubmit:f,relative:y,preventScrollReset:D,viewTransition:M,...E},_)=>{let S=fg(),b=yg(w,{relative:y}),R=m.toLowerCase()==="get"?"get":"post",O=typeof w=="string"&&Ad.test(w),U=$=>{if(f&&f($),$.defaultPrevented)return;$.preventDefault();let Y=$.nativeEvent.submitter,L=(Y==null?void 0:Y.getAttribute("formmethod"))||m;S(Y||$.currentTarget,{fetcherKey:l,method:L,navigate:a,replace:d,state:h,relative:y,preventScrollReset:D,viewTransition:M})};return A.createElement("form",{ref:_,method:R,action:b,onSubmit:c?f:U,...E,"data-discover":!O&&r==="render"?"true":void 0})});dg.displayName="Form";function hg(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Od(r){let l=A.useContext(yn);return Ue(l,hg(r)),l}function pg(r,{target:l,replace:a,state:c,preventScrollReset:d,relative:h,viewTransition:m}={}){let w=Id(),f=Ii(),y=ho(r,{relative:h});return A.useCallback(D=>{if(Vm(D,l)){D.preventDefault();let M=a!==void 0?a:so(f)===so(y);w(r,{replace:M,state:c,preventScrollReset:d,relative:h,viewTransition:m})}},[f,w,y,a,c,l,r,d,h,m])}var mg=0,gg=()=>`__${String(++mg)}__`;function fg(){let{router:r}=Od("useSubmit"),{basename:l}=A.useContext(Bt),a=_m();return A.useCallback(async(c,d={})=>{let{action:h,method:m,encType:w,formData:f,body:y}=Gm(c,l);if(d.navigate===!1){let D=d.fetcherKey||gg();await r.fetch(D,a,d.action||h,{preventScrollReset:d.preventScrollReset,formData:f,body:y,formMethod:d.method||m,formEncType:d.encType||w,flushSync:d.flushSync})}else await r.navigate(d.action||h,{preventScrollReset:d.preventScrollReset,formData:f,body:y,formMethod:d.method||m,formEncType:d.encType||w,replace:d.replace,state:d.state,fromRouteId:a,flushSync:d.flushSync,viewTransition:d.viewTransition})},[r,l,a])}function yg(r,{relative:l}={}){let{basename:a}=A.useContext(Bt),c=A.useContext(ni);Ue(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),h={...ho(r||".",{relative:l})},m=Ii();if(r==null){h.search=m.search;let w=new URLSearchParams(h.search),f=w.getAll("index");if(f.some(D=>D==="")){w.delete("index"),f.filter(M=>M).forEach(M=>w.append("index",M));let D=w.toString();h.search=D?`?${D}`:""}}return(!r||r===".")&&d.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(h.pathname=h.pathname==="/"?a:ti([a,h.pathname])),so(h)}function vg(r,l={}){let a=A.useContext(kd);Ue(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Od("useViewTransitionState"),d=ho(r,{relative:l.relative});if(!a.isTransitioning)return!1;let h=ii(a.currentLocation.pathname,c)||a.currentLocation.pathname,m=ii(a.nextLocation.pathname,c)||a.nextLocation.pathname;return Dr(d.pathname,m)!=null||Dr(d.pathname,h)!=null}[...ig];var Aa={exports:{}},xe={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ju;function wg(){if(Ju)return xe;Ju=1;var r=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),m=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),E=Symbol.for("react.view_transition"),_=Symbol.for("react.client.reference");function S(b){if(typeof b=="object"&&b!==null){var R=b.$$typeof;switch(R){case r:switch(b=b.type,b){case a:case d:case c:case f:case y:case E:return b;default:switch(b=b&&b.$$typeof,b){case m:case w:case M:case D:return b;case h:return b;default:return R}}case l:return R}}}return xe.ContextConsumer=h,xe.ContextProvider=m,xe.Element=r,xe.ForwardRef=w,xe.Fragment=a,xe.Lazy=M,xe.Memo=D,xe.Portal=l,xe.Profiler=d,xe.StrictMode=c,xe.Suspense=f,xe.SuspenseList=y,xe.isContextConsumer=function(b){return S(b)===h},xe.isContextProvider=function(b){return S(b)===m},xe.isElement=function(b){return typeof b=="object"&&b!==null&&b.$$typeof===r},xe.isForwardRef=function(b){return S(b)===w},xe.isFragment=function(b){return S(b)===a},xe.isLazy=function(b){return S(b)===M},xe.isMemo=function(b){return S(b)===D},xe.isPortal=function(b){return S(b)===l},xe.isProfiler=function(b){return S(b)===d},xe.isStrictMode=function(b){return S(b)===c},xe.isSuspense=function(b){return S(b)===f},xe.isSuspenseList=function(b){return S(b)===y},xe.isValidElementType=function(b){return typeof b=="string"||typeof b=="function"||b===a||b===d||b===c||b===f||b===y||typeof b=="object"&&b!==null&&(b.$$typeof===M||b.$$typeof===D||b.$$typeof===m||b.$$typeof===h||b.$$typeof===w||b.$$typeof===_||b.getModuleId!==void 0)},xe.typeOf=S,xe}var Xu;function bg(){return Xu||(Xu=1,Aa.exports=wg()),Aa.exports}var Ld=bg();function kg(r){function l(P,z,j,K,x){for(var te=0,F=0,re=0,le=0,ge,ce,ze=0,Ge=0,he,Ve=he=ge=0,fe=0,Be=0,qt=0,Oe=0,Et=j.length,Vt=Et-1,lt,se="",Re="",Ni="",Pi="",ft;fe<Et;){if(ce=j.charCodeAt(fe),fe===Vt&&F+le+re+te!==0&&(F!==0&&(ce=F===47?10:47),le=re=te=0,Et++,Vt++),F+le+re+te===0){if(fe===Vt&&(0<Be&&(se=se.replace(E,"")),0<se.trim().length)){switch(ce){case 32:case 9:case 59:case 13:case 10:break;default:se+=j.charAt(fe)}ce=59}switch(ce){case 123:for(se=se.trim(),ge=se.charCodeAt(0),he=1,Oe=++fe;fe<Et;){switch(ce=j.charCodeAt(fe)){case 123:he++;break;case 125:he--;break;case 47:switch(ce=j.charCodeAt(fe+1)){case 42:case 47:e:{for(Ve=fe+1;Ve<Vt;++Ve)switch(j.charCodeAt(Ve)){case 47:if(ce===42&&j.charCodeAt(Ve-1)===42&&fe+2!==Ve){fe=Ve+1;break e}break;case 10:if(ce===47){fe=Ve+1;break e}}fe=Ve}}break;case 91:ce++;case 40:ce++;case 34:case 39:for(;fe++<Vt&&j.charCodeAt(fe)!==ce;);}if(he===0)break;fe++}switch(he=j.substring(Oe,fe),ge===0&&(ge=(se=se.replace(M,"").trim()).charCodeAt(0)),ge){case 64:switch(0<Be&&(se=se.replace(E,"")),ce=se.charCodeAt(1),ce){case 100:case 109:case 115:case 45:Be=z;break;default:Be=He}if(he=l(z,Be,he,ce,x+1),Oe=he.length,0<V&&(Be=a(He,se,qt),ft=w(3,he,Be,z,Ce,Ae,Oe,ce,x,K),se=Be.join(""),ft!==void 0&&(Oe=(he=ft.trim()).length)===0&&(ce=0,he="")),0<Oe)switch(ce){case 115:se=se.replace(ue,m);case 100:case 109:case 45:he=se+"{"+he+"}";break;case 107:se=se.replace(U,"$1 $2"),he=se+"{"+he+"}",he=Te===1||Te===2&&h("@"+he,3)?"@-webkit-"+he+"@"+he:"@"+he;break;default:he=se+he,K===112&&(he=(Re+=he,""))}else he="";break;default:he=l(z,a(z,se,qt),he,K,x+1)}Ni+=he,he=qt=Be=Ve=ge=0,se="",ce=j.charCodeAt(++fe);break;case 125:case 59:if(se=(0<Be?se.replace(E,""):se).trim(),1<(Oe=se.length))switch(Ve===0&&(ge=se.charCodeAt(0),ge===45||96<ge&&123>ge)&&(Oe=(se=se.replace(" ",":")).length),0<V&&(ft=w(1,se,z,P,Ce,Ae,Re.length,K,x,K))!==void 0&&(Oe=(se=ft.trim()).length)===0&&(se="\0\0"),ge=se.charCodeAt(0),ce=se.charCodeAt(1),ge){case 0:break;case 64:if(ce===105||ce===99){Pi+=se+j.charAt(fe);break}default:se.charCodeAt(Oe-1)!==58&&(Re+=d(se,ge,ce,se.charCodeAt(2)))}qt=Be=Ve=ge=0,se="",ce=j.charCodeAt(++fe)}}switch(ce){case 13:case 10:F===47?F=0:1+ge===0&&K!==107&&0<se.length&&(Be=1,se+="\0"),0<V*G&&w(0,se,z,P,Ce,Ae,Re.length,K,x,K),Ae=1,Ce++;break;case 59:case 125:if(F+le+re+te===0){Ae++;break}default:switch(Ae++,lt=j.charAt(fe),ce){case 9:case 32:if(le+te+F===0)switch(ze){case 44:case 58:case 9:case 32:lt="";break;default:ce!==32&&(lt=" ")}break;case 0:lt="\\0";break;case 12:lt="\\f";break;case 11:lt="\\v";break;case 38:le+F+te===0&&(Be=qt=1,lt="\f"+lt);break;case 108:if(le+F+te+Fe===0&&0<Ve)switch(fe-Ve){case 2:ze===112&&j.charCodeAt(fe-3)===58&&(Fe=ze);case 8:Ge===111&&(Fe=Ge)}break;case 58:le+F+te===0&&(Ve=fe);break;case 44:F+re+le+te===0&&(Be=1,lt+="\r");break;case 34:case 39:F===0&&(le=le===ce?0:le===0?ce:le);break;case 91:le+F+re===0&&te++;break;case 93:le+F+re===0&&te--;break;case 41:le+F+te===0&&re--;break;case 40:if(le+F+te===0){if(ge===0)switch(2*ze+3*Ge){case 533:break;default:ge=1}re++}break;case 64:F+re+le+te+Ve+he===0&&(he=1);break;case 42:case 47:if(!(0<le+te+re))switch(F){case 0:switch(2*ce+3*j.charCodeAt(fe+1)){case 235:F=47;break;case 220:Oe=fe,F=42}break;case 42:ce===47&&ze===42&&Oe+2!==fe&&(j.charCodeAt(Oe+2)===33&&(Re+=j.substring(Oe,fe+1)),lt="",F=0)}}F===0&&(se+=lt)}Ge=ze,ze=ce,fe++}if(Oe=Re.length,0<Oe){if(Be=z,0<V&&(ft=w(2,Re,Be,P,Ce,Ae,Oe,K,x,K),ft!==void 0&&(Re=ft).length===0))return Pi+Re+Ni;if(Re=Be.join(",")+"{"+Re+"}",Te*Fe!==0){switch(Te!==2||h(Re,2)||(Fe=0),Fe){case 111:Re=Re.replace(Y,":-moz-$1")+Re;break;case 112:Re=Re.replace($,"::-webkit-input-$1")+Re.replace($,"::-moz-$1")+Re.replace($,":-ms-input-$1")+Re}Fe=0}}return Pi+Re+Ni}function a(P,z,j){var K=z.trim().split(R);z=K;var x=K.length,te=P.length;switch(te){case 0:case 1:var F=0;for(P=te===0?"":P[0]+" ";F<x;++F)z[F]=c(P,z[F],j).trim();break;default:var re=F=0;for(z=[];F<x;++F)for(var le=0;le<te;++le)z[re++]=c(P[le]+" ",K[F],j).trim()}return z}function c(P,z,j){var K=z.charCodeAt(0);switch(33>K&&(K=(z=z.trim()).charCodeAt(0)),K){case 38:return z.replace(O,"$1"+P.trim());case 58:return P.trim()+z.replace(O,"$1"+P.trim());default:if(0<1*j&&0<z.indexOf("\f"))return z.replace(O,(P.charCodeAt(0)===58?"":"$1")+P.trim())}return P+z}function d(P,z,j,K){var x=P+";",te=2*z+3*j+4*K;if(te===944){P=x.indexOf(":",9)+1;var F=x.substring(P,x.length-1).trim();return F=x.substring(0,P).trim()+F+";",Te===1||Te===2&&h(F,1)?"-webkit-"+F+F:F}if(Te===0||Te===2&&!h(x,1))return x;switch(te){case 1015:return x.charCodeAt(10)===97?"-webkit-"+x+x:x;case 951:return x.charCodeAt(3)===116?"-webkit-"+x+x:x;case 963:return x.charCodeAt(5)===110?"-webkit-"+x+x:x;case 1009:if(x.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+x+x;case 978:return"-webkit-"+x+"-moz-"+x+x;case 1019:case 983:return"-webkit-"+x+"-moz-"+x+"-ms-"+x+x;case 883:if(x.charCodeAt(8)===45)return"-webkit-"+x+x;if(0<x.indexOf("image-set(",11))return x.replace(Xe,"$1-webkit-$2")+x;break;case 932:if(x.charCodeAt(4)===45)switch(x.charCodeAt(5)){case 103:return"-webkit-box-"+x.replace("-grow","")+"-webkit-"+x+"-ms-"+x.replace("grow","positive")+x;case 115:return"-webkit-"+x+"-ms-"+x.replace("shrink","negative")+x;case 98:return"-webkit-"+x+"-ms-"+x.replace("basis","preferred-size")+x}return"-webkit-"+x+"-ms-"+x+x;case 964:return"-webkit-"+x+"-ms-flex-"+x+x;case 1023:if(x.charCodeAt(8)!==99)break;return F=x.substring(x.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+F+"-webkit-"+x+"-ms-flex-pack"+F+x;case 1005:return S.test(x)?x.replace(_,":-webkit-")+x.replace(_,":-moz-")+x:x;case 1e3:switch(F=x.substring(13).trim(),z=F.indexOf("-")+1,F.charCodeAt(0)+F.charCodeAt(z)){case 226:F=x.replace(L,"tb");break;case 232:F=x.replace(L,"tb-rl");break;case 220:F=x.replace(L,"lr");break;default:return x}return"-webkit-"+x+"-ms-"+F+x;case 1017:if(x.indexOf("sticky",9)===-1)break;case 975:switch(z=(x=P).length-10,F=(x.charCodeAt(z)===33?x.substring(0,z):x).substring(P.indexOf(":",7)+1).trim(),te=F.charCodeAt(0)+(F.charCodeAt(7)|0)){case 203:if(111>F.charCodeAt(8))break;case 115:x=x.replace(F,"-webkit-"+F)+";"+x;break;case 207:case 102:x=x.replace(F,"-webkit-"+(102<te?"inline-":"")+"box")+";"+x.replace(F,"-webkit-"+F)+";"+x.replace(F,"-ms-"+F+"box")+";"+x}return x+";";case 938:if(x.charCodeAt(5)===45)switch(x.charCodeAt(6)){case 105:return F=x.replace("-items",""),"-webkit-"+x+"-webkit-box-"+F+"-ms-flex-"+F+x;case 115:return"-webkit-"+x+"-ms-flex-item-"+x.replace(pe,"")+x;default:return"-webkit-"+x+"-ms-flex-line-pack"+x.replace("align-content","").replace(pe,"")+x}break;case 973:case 989:if(x.charCodeAt(3)!==45||x.charCodeAt(4)===122)break;case 931:case 953:if(Ie.test(P)===!0)return(F=P.substring(P.indexOf(":")+1)).charCodeAt(0)===115?d(P.replace("stretch","fill-available"),z,j,K).replace(":fill-available",":stretch"):x.replace(F,"-webkit-"+F)+x.replace(F,"-moz-"+F.replace("fill-",""))+x;break;case 962:if(x="-webkit-"+x+(x.charCodeAt(5)===102?"-ms-"+x:"")+x,j+K===211&&x.charCodeAt(13)===105&&0<x.indexOf("transform",10))return x.substring(0,x.indexOf(";",27)+1).replace(b,"$1-webkit-$2")+x}return x}function h(P,z){var j=P.indexOf(z===1?":":"{"),K=P.substring(0,z!==3?j:10);return j=P.substring(j+1,P.length-1),ie(z!==2?K:K.replace(ye,"$1"),j,z)}function m(P,z){var j=d(z,z.charCodeAt(0),z.charCodeAt(1),z.charCodeAt(2));return j!==z+";"?j.replace(we," or ($1)").substring(4):"("+z+")"}function w(P,z,j,K,x,te,F,re,le,ge){for(var ce=0,ze=z,Ge;ce<V;++ce)switch(Ge=me[ce].call(D,P,ze,j,K,x,te,F,re,le,ge)){case void 0:case!1:case!0:case null:break;default:ze=Ge}if(ze!==z)return ze}function f(P){switch(P){case void 0:case null:V=me.length=0;break;default:if(typeof P=="function")me[V++]=P;else if(typeof P=="object")for(var z=0,j=P.length;z<j;++z)f(P[z]);else G=!!P|0}return f}function y(P){return P=P.prefix,P!==void 0&&(ie=null,P?typeof P!="function"?Te=1:(Te=2,ie=P):Te=0),y}function D(P,z){var j=P;if(33>j.charCodeAt(0)&&(j=j.trim()),k=j,j=[k],0<V){var K=w(-1,z,j,j,Ce,Ae,0,0,0,0);K!==void 0&&typeof K=="string"&&(z=K)}var x=l(He,j,z,0,0);return 0<V&&(K=w(-2,x,j,j,Ce,Ae,x.length,0,0,0),K!==void 0&&(x=K)),k="",Fe=0,Ae=Ce=1,x}var M=/^\0+/g,E=/[\0\r\f]/g,_=/: */g,S=/zoo|gra/,b=/([,: ])(transform)/g,R=/,\r+?/g,O=/([\t\r\n ])*\f?&/g,U=/@(k\w+)\s*(\S*)\s*/,$=/::(place)/g,Y=/:(read-only)/g,L=/[svh]\w+-[tblr]{2}/,ue=/\(\s*(.*)\s*\)/g,we=/([\s\S]*?);/g,pe=/-self|flex-/g,ye=/[^]*?(:[rp][el]a[\w-]+)[^]*/,Ie=/stretch|:\s*\w+\-(?:conte|avail)/,Xe=/([^-])(image-set\()/,Ae=1,Ce=1,Fe=0,Te=1,He=[],me=[],V=0,ie=null,G=0,k="";return D.use=f,D.set=y,r!==void 0&&y(r),D}var Sg={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function xg(r){var l=Object.create(null);return function(a){return l[a]===void 0&&(l[a]=r(a)),l[a]}}var Ig=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Zu=xg(function(r){return Ig.test(r)||r.charCodeAt(0)===111&&r.charCodeAt(1)===110&&r.charCodeAt(2)<91}),Ra={exports:{}},ke={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed;function Pg(){if(ed)return ke;ed=1;var r=typeof Symbol=="function"&&Symbol.for,l=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,c=r?Symbol.for("react.fragment"):60107,d=r?Symbol.for("react.strict_mode"):60108,h=r?Symbol.for("react.profiler"):60114,m=r?Symbol.for("react.provider"):60109,w=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,y=r?Symbol.for("react.concurrent_mode"):60111,D=r?Symbol.for("react.forward_ref"):60112,M=r?Symbol.for("react.suspense"):60113,E=r?Symbol.for("react.suspense_list"):60120,_=r?Symbol.for("react.memo"):60115,S=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.block"):60121,R=r?Symbol.for("react.fundamental"):60117,O=r?Symbol.for("react.responder"):60118,U=r?Symbol.for("react.scope"):60119;function $(L){if(typeof L=="object"&&L!==null){var ue=L.$$typeof;switch(ue){case l:switch(L=L.type,L){case f:case y:case c:case h:case d:case M:return L;default:switch(L=L&&L.$$typeof,L){case w:case D:case S:case _:case m:return L;default:return ue}}case a:return ue}}}function Y(L){return $(L)===y}return ke.AsyncMode=f,ke.ConcurrentMode=y,ke.ContextConsumer=w,ke.ContextProvider=m,ke.Element=l,ke.ForwardRef=D,ke.Fragment=c,ke.Lazy=S,ke.Memo=_,ke.Portal=a,ke.Profiler=h,ke.StrictMode=d,ke.Suspense=M,ke.isAsyncMode=function(L){return Y(L)||$(L)===f},ke.isConcurrentMode=Y,ke.isContextConsumer=function(L){return $(L)===w},ke.isContextProvider=function(L){return $(L)===m},ke.isElement=function(L){return typeof L=="object"&&L!==null&&L.$$typeof===l},ke.isForwardRef=function(L){return $(L)===D},ke.isFragment=function(L){return $(L)===c},ke.isLazy=function(L){return $(L)===S},ke.isMemo=function(L){return $(L)===_},ke.isPortal=function(L){return $(L)===a},ke.isProfiler=function(L){return $(L)===h},ke.isStrictMode=function(L){return $(L)===d},ke.isSuspense=function(L){return $(L)===M},ke.isValidElementType=function(L){return typeof L=="string"||typeof L=="function"||L===c||L===y||L===h||L===d||L===M||L===E||typeof L=="object"&&L!==null&&(L.$$typeof===S||L.$$typeof===_||L.$$typeof===m||L.$$typeof===w||L.$$typeof===D||L.$$typeof===R||L.$$typeof===O||L.$$typeof===U||L.$$typeof===b)},ke.typeOf=$,ke}var td;function Cg(){return td||(td=1,Ra.exports=Pg()),Ra.exports}var Ma,id;function Tg(){if(id)return Ma;id=1;var r=Cg(),l={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},d={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},h={};h[r.ForwardRef]=c,h[r.Memo]=d;function m(S){return r.isMemo(S)?d:h[S.$$typeof]||l}var w=Object.defineProperty,f=Object.getOwnPropertyNames,y=Object.getOwnPropertySymbols,D=Object.getOwnPropertyDescriptor,M=Object.getPrototypeOf,E=Object.prototype;function _(S,b,R){if(typeof b!="string"){if(E){var O=M(b);O&&O!==E&&_(S,O,R)}var U=f(b);y&&(U=U.concat(y(b)));for(var $=m(S),Y=m(b),L=0;L<U.length;++L){var ue=U[L];if(!a[ue]&&!(R&&R[ue])&&!(Y&&Y[ue])&&!($&&$[ue])){var we=D(b,ue);try{w(S,ue,we)}catch{}}}}return S}return Ma=_,Ma}var Dg=Tg();const Eg=md(Dg);var Dt={};function ei(){return(ei=Object.assign||function(r){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(r[c]=a[c])}return r}).apply(this,arguments)}var nd=function(r,l){for(var a=[r[0]],c=0,d=l.length;c<d;c+=1)a.push(l[c],r[c+1]);return a},Fa=function(r){return r!==null&&typeof r=="object"&&(r.toString?r.toString():Object.prototype.toString.call(r))==="[object Object]"&&!Ld.typeOf(r)},Er=Object.freeze([]),xi=Object.freeze({});function ao(r){return typeof r=="function"}function od(r){return r.displayName||r.name||"Component"}function Ka(r){return r&&typeof r.styledComponentId=="string"}var mn=typeof process<"u"&&Dt!==void 0&&(Dt.REACT_APP_SC_ATTR||Dt.SC_ATTR)||"data-styled",Ga=typeof window<"u"&&"HTMLElement"in window,Ag=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Dt!==void 0&&(Dt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Dt.REACT_APP_SC_DISABLE_SPEEDY!==""?Dt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Dt.REACT_APP_SC_DISABLE_SPEEDY:Dt.SC_DISABLE_SPEEDY!==void 0&&Dt.SC_DISABLE_SPEEDY!==""&&Dt.SC_DISABLE_SPEEDY!=="false"&&Dt.SC_DISABLE_SPEEDY));function po(r){for(var l=arguments.length,a=new Array(l>1?l-1:0),c=1;c<l;c++)a[c-1]=arguments[c];throw new Error("An error occurred. See https://git.io/JUIaE#"+r+" for more information."+(a.length>0?" Args: "+a.join(", "):""))}var Rg=function(){function r(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}var l=r.prototype;return l.indexOfGroup=function(a){for(var c=0,d=0;d<a;d++)c+=this.groupSizes[d];return c},l.insertRules=function(a,c){if(a>=this.groupSizes.length){for(var d=this.groupSizes,h=d.length,m=h;a>=m;)(m<<=1)<0&&po(16,""+a);this.groupSizes=new Uint32Array(m),this.groupSizes.set(d),this.length=m;for(var w=h;w<m;w++)this.groupSizes[w]=0}for(var f=this.indexOfGroup(a+1),y=0,D=c.length;y<D;y++)this.tag.insertRule(f,c[y])&&(this.groupSizes[a]++,f++)},l.clearGroup=function(a){if(a<this.length){var c=this.groupSizes[a],d=this.indexOfGroup(a),h=d+c;this.groupSizes[a]=0;for(var m=d;m<h;m++)this.tag.deleteRule(d)}},l.getGroup=function(a){var c="";if(a>=this.length||this.groupSizes[a]===0)return c;for(var d=this.groupSizes[a],h=this.indexOfGroup(a),m=h+d,w=h;w<m;w++)c+=this.tag.getRule(w)+`/*!sc*/
`;return c},r}(),Tr=new Map,Ar=new Map,ro=1,xr=function(r){if(Tr.has(r))return Tr.get(r);for(;Ar.has(ro);)ro++;var l=ro++;return Tr.set(r,l),Ar.set(l,r),l},Mg=function(r){return Ar.get(r)},Og=function(r,l){l>=ro&&(ro=l+1),Tr.set(r,l),Ar.set(l,r)},Lg="style["+mn+'][data-styled-version="5.3.10"]',_g=new RegExp("^"+mn+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Ug=function(r,l,a){for(var c,d=a.split(","),h=0,m=d.length;h<m;h++)(c=d[h])&&r.registerName(l,c)},Fg=function(r,l){for(var a=(l.textContent||"").split(`/*!sc*/
`),c=[],d=0,h=a.length;d<h;d++){var m=a[d].trim();if(m){var w=m.match(_g);if(w){var f=0|parseInt(w[1],10),y=w[2];f!==0&&(Og(y,f),Ug(r,y,w[3]),r.getTag().insertRules(f,c)),c.length=0}else c.push(m)}}},zg=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},_d=function(r){var l=document.head,a=r||l,c=document.createElement("style"),d=function(w){for(var f=w.childNodes,y=f.length;y>=0;y--){var D=f[y];if(D&&D.nodeType===1&&D.hasAttribute(mn))return D}}(a),h=d!==void 0?d.nextSibling:null;c.setAttribute(mn,"active"),c.setAttribute("data-styled-version","5.3.10");var m=zg();return m&&c.setAttribute("nonce",m),a.insertBefore(c,h),c},Wg=function(){function r(a){var c=this.element=_d(a);c.appendChild(document.createTextNode("")),this.sheet=function(d){if(d.sheet)return d.sheet;for(var h=document.styleSheets,m=0,w=h.length;m<w;m++){var f=h[m];if(f.ownerNode===d)return f}po(17)}(c),this.length=0}var l=r.prototype;return l.insertRule=function(a,c){try{return this.sheet.insertRule(c,a),this.length++,!0}catch{return!1}},l.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},l.getRule=function(a){var c=this.sheet.cssRules[a];return c!==void 0&&typeof c.cssText=="string"?c.cssText:""},r}(),Ng=function(){function r(a){var c=this.element=_d(a);this.nodes=c.childNodes,this.length=0}var l=r.prototype;return l.insertRule=function(a,c){if(a<=this.length&&a>=0){var d=document.createTextNode(c),h=this.nodes[a];return this.element.insertBefore(d,h||null),this.length++,!0}return!1},l.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},l.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},r}(),jg=function(){function r(a){this.rules=[],this.length=0}var l=r.prototype;return l.insertRule=function(a,c){return a<=this.length&&(this.rules.splice(a,0,c),this.length++,!0)},l.deleteRule=function(a){this.rules.splice(a,1),this.length--},l.getRule=function(a){return a<this.length?this.rules[a]:""},r}(),rd=Ga,Hg={isServer:!Ga,useCSSOMInjection:!Ag},Ud=function(){function r(a,c,d){a===void 0&&(a=xi),c===void 0&&(c={}),this.options=ei({},Hg,{},a),this.gs=c,this.names=new Map(d),this.server=!!a.isServer,!this.server&&Ga&&rd&&(rd=!1,function(h){for(var m=document.querySelectorAll(Lg),w=0,f=m.length;w<f;w++){var y=m[w];y&&y.getAttribute(mn)!=="active"&&(Fg(h,y),y.parentNode&&y.parentNode.removeChild(y))}}(this))}r.registerId=function(a){return xr(a)};var l=r.prototype;return l.reconstructWithOptions=function(a,c){return c===void 0&&(c=!0),new r(ei({},this.options,{},a),this.gs,c&&this.names||void 0)},l.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},l.getTag=function(){return this.tag||(this.tag=(d=(c=this.options).isServer,h=c.useCSSOMInjection,m=c.target,a=d?new jg(m):h?new Wg(m):new Ng(m),new Rg(a)));var a,c,d,h,m},l.hasNameForId=function(a,c){return this.names.has(a)&&this.names.get(a).has(c)},l.registerName=function(a,c){if(xr(a),this.names.has(a))this.names.get(a).add(c);else{var d=new Set;d.add(c),this.names.set(a,d)}},l.insertRules=function(a,c,d){this.registerName(a,c),this.getTag().insertRules(xr(a),d)},l.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},l.clearRules=function(a){this.getTag().clearGroup(xr(a)),this.clearNames(a)},l.clearTag=function(){this.tag=void 0},l.toString=function(){return function(a){for(var c=a.getTag(),d=c.length,h="",m=0;m<d;m++){var w=Mg(m);if(w!==void 0){var f=a.names.get(w),y=c.getGroup(m);if(f&&y&&f.size){var D=mn+".g"+m+'[id="'+w+'"]',M="";f!==void 0&&f.forEach(function(E){E.length>0&&(M+=E+",")}),h+=""+y+D+'{content:"'+M+`"}/*!sc*/
`}}}return h}(this)},r}(),Bg=/(a)(d)/gi,sd=function(r){return String.fromCharCode(r+(r>25?39:97))};function za(r){var l,a="";for(l=Math.abs(r);l>52;l=l/52|0)a=sd(l%52)+a;return(sd(l%52)+a).replace(Bg,"$1-$2")}var pn=function(r,l){for(var a=l.length;a;)r=33*r^l.charCodeAt(--a);return r},Fd=function(r){return pn(5381,r)};function qg(r){for(var l=0;l<r.length;l+=1){var a=r[l];if(ao(a)&&!Ka(a))return!1}return!0}var Vg=Fd("5.3.10"),$g=function(){function r(l,a,c){this.rules=l,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&qg(l),this.componentId=a,this.baseHash=pn(Vg,a),this.baseStyle=c,Ud.registerId(a)}return r.prototype.generateAndInjectStyles=function(l,a,c){var d=this.componentId,h=[];if(this.baseStyle&&h.push(this.baseStyle.generateAndInjectStyles(l,a,c)),this.isStatic&&!c.hash)if(this.staticRulesId&&a.hasNameForId(d,this.staticRulesId))h.push(this.staticRulesId);else{var m=gn(this.rules,l,a,c).join(""),w=za(pn(this.baseHash,m)>>>0);if(!a.hasNameForId(d,w)){var f=c(m,"."+w,void 0,d);a.insertRules(d,w,f)}h.push(w),this.staticRulesId=w}else{for(var y=this.rules.length,D=pn(this.baseHash,c.hash),M="",E=0;E<y;E++){var _=this.rules[E];if(typeof _=="string")M+=_;else if(_){var S=gn(_,l,a,c),b=Array.isArray(S)?S.join(""):S;D=pn(D,b+E),M+=b}}if(M){var R=za(D>>>0);if(!a.hasNameForId(d,R)){var O=c(M,"."+R,void 0,d);a.insertRules(d,R,O)}h.push(R)}}return h.join(" ")},r}(),Kg=/^\s*\/\/.*$/gm,Gg=[":","[",".","#"];function Qg(r){var l,a,c,d,h=xi,m=h.options,w=m===void 0?xi:m,f=h.plugins,y=f===void 0?Er:f,D=new kg(w),M=[],E=function(b){function R(O){if(O)try{b(O+"}")}catch{}}return function(O,U,$,Y,L,ue,we,pe,ye,Ie){switch(O){case 1:if(ye===0&&U.charCodeAt(0)===64)return b(U+";"),"";break;case 2:if(pe===0)return U+"/*|*/";break;case 3:switch(pe){case 102:case 112:return b($[0]+U),"";default:return U+(Ie===0?"/*|*/":"")}case-2:U.split("/*|*/}").forEach(R)}}}(function(b){M.push(b)}),_=function(b,R,O){return R===0&&Gg.indexOf(O[a.length])!==-1||O.match(d)?b:"."+l};function S(b,R,O,U){U===void 0&&(U="&");var $=b.replace(Kg,""),Y=R&&O?O+" "+R+" { "+$+" }":$;return l=U,a=R,c=new RegExp("\\"+a+"\\b","g"),d=new RegExp("(\\"+a+"\\b){2,}"),D(O||!R?"":R,Y)}return D.use([].concat(y,[function(b,R,O){b===2&&O.length&&O[0].lastIndexOf(a)>0&&(O[0]=O[0].replace(c,_))},E,function(b){if(b===-2){var R=M;return M=[],R}}])),S.hash=y.length?y.reduce(function(b,R){return R.name||po(15),pn(b,R.name)},5381).toString():"",S}var zd=kt.createContext();zd.Consumer;var Wd=kt.createContext(),Yg=(Wd.Consumer,new Ud),Wa=Qg();function Jg(){return A.useContext(zd)||Yg}function Xg(){return A.useContext(Wd)||Wa}var Zg=function(){function r(l,a){var c=this;this.inject=function(d,h){h===void 0&&(h=Wa);var m=c.name+h.hash;d.hasNameForId(c.id,m)||d.insertRules(c.id,m,h(c.rules,m,"@keyframes"))},this.toString=function(){return po(12,String(c.name))},this.name=l,this.id="sc-keyframes-"+l,this.rules=a}return r.prototype.getName=function(l){return l===void 0&&(l=Wa),this.name+l.hash},r}(),ef=/([A-Z])/,tf=/([A-Z])/g,nf=/^ms-/,of=function(r){return"-"+r.toLowerCase()};function ad(r){return ef.test(r)?r.replace(tf,of).replace(nf,"-ms-"):r}var ld=function(r){return r==null||r===!1||r===""};function gn(r,l,a,c){if(Array.isArray(r)){for(var d,h=[],m=0,w=r.length;m<w;m+=1)(d=gn(r[m],l,a,c))!==""&&(Array.isArray(d)?h.push.apply(h,d):h.push(d));return h}if(ld(r))return"";if(Ka(r))return"."+r.styledComponentId;if(ao(r)){if(typeof(y=r)!="function"||y.prototype&&y.prototype.isReactComponent||!l)return r;var f=r(l);return gn(f,l,a,c)}var y;return r instanceof Zg?a?(r.inject(a,c),r.getName(c)):r:Fa(r)?function D(M,E){var _,S,b=[];for(var R in M)M.hasOwnProperty(R)&&!ld(M[R])&&(Array.isArray(M[R])&&M[R].isCss||ao(M[R])?b.push(ad(R)+":",M[R],";"):Fa(M[R])?b.push.apply(b,D(M[R],R)):b.push(ad(R)+": "+(_=R,(S=M[R])==null||typeof S=="boolean"||S===""?"":typeof S!="number"||S===0||_ in Sg||_.startsWith("--")?String(S).trim():S+"px")+";"));return E?[E+" {"].concat(b,["}"]):b}(r):r.toString()}var cd=function(r){return Array.isArray(r)&&(r.isCss=!0),r};function rf(r){for(var l=arguments.length,a=new Array(l>1?l-1:0),c=1;c<l;c++)a[c-1]=arguments[c];return ao(r)||Fa(r)?cd(gn(nd(Er,[r].concat(a)))):a.length===0&&r.length===1&&typeof r[0]=="string"?r:cd(gn(nd(r,a)))}var sf=function(r,l,a){return a===void 0&&(a=xi),r.theme!==a.theme&&r.theme||l||a.theme},af=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,lf=/(^-|-$)/g;function Oa(r){return r.replace(af,"-").replace(lf,"")}var cf=function(r){return za(Fd(r)>>>0)};function Ir(r){return typeof r=="string"&&!0}var Na=function(r){return typeof r=="function"||typeof r=="object"&&r!==null&&!Array.isArray(r)},uf=function(r){return r!=="__proto__"&&r!=="constructor"&&r!=="prototype"};function df(r,l,a){var c=r[a];Na(l)&&Na(c)?Nd(c,l):r[a]=l}function Nd(r){for(var l=arguments.length,a=new Array(l>1?l-1:0),c=1;c<l;c++)a[c-1]=arguments[c];for(var d=0,h=a;d<h.length;d++){var m=h[d];if(Na(m))for(var w in m)uf(w)&&df(r,m[w],w)}return r}var jd=kt.createContext();jd.Consumer;var La={};function Hd(r,l,a){var c=Ka(r),d=!Ir(r),h=l.attrs,m=h===void 0?Er:h,w=l.componentId,f=w===void 0?function(U,$){var Y=typeof U!="string"?"sc":Oa(U);La[Y]=(La[Y]||0)+1;var L=Y+"-"+cf("5.3.10"+Y+La[Y]);return $?$+"-"+L:L}(l.displayName,l.parentComponentId):w,y=l.displayName,D=y===void 0?function(U){return Ir(U)?"styled."+U:"Styled("+od(U)+")"}(r):y,M=l.displayName&&l.componentId?Oa(l.displayName)+"-"+l.componentId:l.componentId||f,E=c&&r.attrs?Array.prototype.concat(r.attrs,m).filter(Boolean):m,_=l.shouldForwardProp;c&&r.shouldForwardProp&&(_=l.shouldForwardProp?function(U,$,Y){return r.shouldForwardProp(U,$,Y)&&l.shouldForwardProp(U,$,Y)}:r.shouldForwardProp);var S,b=new $g(a,M,c?r.componentStyle:void 0),R=b.isStatic&&m.length===0,O=function(U,$){return function(Y,L,ue,we){var pe=Y.attrs,ye=Y.componentStyle,Ie=Y.defaultProps,Xe=Y.foldedComponentIds,Ae=Y.shouldForwardProp,Ce=Y.styledComponentId,Fe=Y.target,Te=function(K,x,te){K===void 0&&(K=xi);var F=ei({},x,{theme:K}),re={};return te.forEach(function(le){var ge,ce,ze,Ge=le;for(ge in ao(Ge)&&(Ge=Ge(F)),Ge)F[ge]=re[ge]=ge==="className"?(ce=re[ge],ze=Ge[ge],ce&&ze?ce+" "+ze:ce||ze):Ge[ge]}),[F,re]}(sf(L,A.useContext(jd),Ie)||xi,L,pe),He=Te[0],me=Te[1],V=function(K,x,te,F){var re=Jg(),le=Xg(),ge=x?K.generateAndInjectStyles(xi,re,le):K.generateAndInjectStyles(te,re,le);return ge}(ye,we,He),ie=ue,G=me.$as||L.$as||me.as||L.as||Fe,k=Ir(G),P=me!==L?ei({},L,{},me):L,z={};for(var j in P)j[0]!=="$"&&j!=="as"&&(j==="forwardedAs"?z.as=P[j]:(Ae?Ae(j,Zu,G):!k||Zu(j))&&(z[j]=P[j]));return L.style&&me.style!==L.style&&(z.style=ei({},L.style,{},me.style)),z.className=Array.prototype.concat(Xe,Ce,V!==Ce?V:null,L.className,me.className).filter(Boolean).join(" "),z.ref=ie,A.createElement(G,z)}(S,U,$,R)};return O.displayName=D,(S=kt.forwardRef(O)).attrs=E,S.componentStyle=b,S.displayName=D,S.shouldForwardProp=_,S.foldedComponentIds=c?Array.prototype.concat(r.foldedComponentIds,r.styledComponentId):Er,S.styledComponentId=M,S.target=c?r.target:r,S.withComponent=function(U){var $=l.componentId,Y=function(ue,we){if(ue==null)return{};var pe,ye,Ie={},Xe=Object.keys(ue);for(ye=0;ye<Xe.length;ye++)pe=Xe[ye],we.indexOf(pe)>=0||(Ie[pe]=ue[pe]);return Ie}(l,["componentId"]),L=$&&$+"-"+(Ir(U)?U:Oa(od(U)));return Hd(U,ei({},Y,{attrs:E,componentId:L}),a)},Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(U){this._foldedDefaultProps=c?Nd({},r.defaultProps,U):U}}),Object.defineProperty(S,"toString",{value:function(){return"."+S.styledComponentId}}),d&&Eg(S,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),S}var lo=function(r){return function l(a,c,d){if(d===void 0&&(d=xi),!Ld.isValidElementType(c))return po(1,String(c));var h=function(){return a(c,d,rf.apply(void 0,arguments))};return h.withConfig=function(m){return l(a,c,ei({},d,{},m))},h.attrs=function(m){return l(a,c,ei({},d,{attrs:Array.prototype.concat(d.attrs,m).filter(Boolean)}))},h}(Hd,r)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(r){lo[r]=lo(r)});const hf=lo.nav`
  background: rgb(182, 182, 182);
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px;
  height: 24px;
  z-index: 12;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    position: static;
    height: auto;
    min-height: 50px;
    overflow: auto;
  }
`,ud=lo(Md)`
  color: rgb(31, 46, 255);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  &.active {
    color: rgb(255, 255, 255); /* Active link color */
    background: rgb(0, 0, 0);
    border: 0;
    border-radius: 10px;
    padding-top:2px;
    padding-bottom:2px;
  }
  &:hover {
    color: rgb(34, 112, 19); /* Hover color */
  }
`,pf=lo.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap; /* Allows wrapping */
    justify-content: center; /* Centers the items */
    margin: 0; /* Adjust margins for smaller screens */
    gap: 5px; /* Adds spacing between items */
  }
`,mf=()=>{const{searchQuery:r,setSearchQuery:l}=A.useContext(Qa),a=[{to:"/ad",label:"AD"},{to:"/",label:"Resume"},{to:"/network",label:"Network"},{to:"/virtualization",label:"Virtualization"},{to:"/backup",label:"Backup "},{to:"/security",label:"Security"}],c=[{to:"/python",label:"Python"},{to:"/scripting",label:"Scripting"},{to:"/monitoring",label:"Monitoring"},{to:"/cloud",label:"Cloud"},{to:"/docker",label:"Docker"},{to:"/tools",label:"Tools"},{to:"/itil",label:"ITIL"},{to:"/os",label:"OS"}];return B.jsx(hf,{children:B.jsxs(pf,{children:[a.map((d,h)=>B.jsx(ud,{to:d.to,children:d.label},h)),B.jsx("div",{style:{display:"flex",alignItems:"center",marginRight:"10px",borderBottom:"1px solid black"},children:B.jsx("input",{id:"search-input",type:"text",placeholder:"Search...",style:{width:"150px",outline:"none",marginLeft:"7px",height:"20.5px"},value:r,onChange:d=>l(d.target.value)})}),c.map((d,h)=>B.jsx(ud,{to:d.to,children:d.label},h))]})})},gf=[{id:"51",title:"What is Nodejs?",content:`<section><h3>What is Nodejs?</h3><ul><li><strong>Definition:</strong><ul><li>Nodejs is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 JavaScript engine.</li><li>It allows developers to execute JavaScript code outside of a browser, i mean on the server side.</li></ul></li><li><strong>Key Features:</strong><ul><li>Asynchronous and event-driven architecture.</li><li>Single-threaded, non-blocking I/O model for handling multiple requests efficiently.</li><li>Lightweight and efficient for building scalable applications.</li><li>Rich ecosystem with npm (Node Package Manager) for libraries and tools.</li></ul></li><li><strong>Use Cases:</strong><ul><li>Building web servers and APIs.</li><li>Creating real-time applications like chat apps or gaming servers.</li><li>Developing microservices architectures.</li><li>Performing scripting and automation tasks.</li></ul></li><li><strong>Example:</strong><pre><code>// Simple Nodejs Server
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});</code></pre></li><li><strong>Advantages:</strong><ul><li>Fast execution of code due to the V8 engine.</li><li>Efficient handling of concurrent requests using the event loop.</li><li>Extensive npm package ecosystem for rapid development.</li><li>Works seamlessly with front-end JavaScript frameworks.</li></ul></li><li><strong>Notes:</strong><ul><li>Nodejs is not suitable for CPU-intensive tasks but excels in I/O-bound applications.</li><li>It has a large and active community for support and library contributions.</li></ul></li></ul></section>`,link:""}],ff=[...gf];var Bd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},dd=kt.createContext&&kt.createContext(Bd),yf=["attr","size","title"];function vf(r,l){if(r==null)return{};var a=wf(r,l),c,d;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(r);for(d=0;d<h.length;d++)c=h[d],!(l.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(r,c)&&(a[c]=r[c])}return a}function wf(r,l){if(r==null)return{};var a={};for(var c in r)if(Object.prototype.hasOwnProperty.call(r,c)){if(l.indexOf(c)>=0)continue;a[c]=r[c]}return a}function Rr(){return Rr=Object.assign?Object.assign.bind():function(r){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(r[c]=a[c])}return r},Rr.apply(this,arguments)}function hd(r,l){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);l&&(c=c.filter(function(d){return Object.getOwnPropertyDescriptor(r,d).enumerable})),a.push.apply(a,c)}return a}function Mr(r){for(var l=1;l<arguments.length;l++){var a=arguments[l]!=null?arguments[l]:{};l%2?hd(Object(a),!0).forEach(function(c){bf(r,c,a[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):hd(Object(a)).forEach(function(c){Object.defineProperty(r,c,Object.getOwnPropertyDescriptor(a,c))})}return r}function bf(r,l,a){return l=kf(l),l in r?Object.defineProperty(r,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[l]=a,r}function kf(r){var l=Sf(r,"string");return typeof l=="symbol"?l:l+""}function Sf(r,l){if(typeof r!="object"||!r)return r;var a=r[Symbol.toPrimitive];if(a!==void 0){var c=a.call(r,l);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(r)}function qd(r){return r&&r.map((l,a)=>kt.createElement(l.tag,Mr({key:a},l.attr),qd(l.child)))}function Wi(r){return l=>kt.createElement(xf,Rr({attr:Mr({},r.attr)},l),qd(r.child))}function xf(r){var l=a=>{var{attr:c,size:d,title:h}=r,m=vf(r,yf),w=d||a.size||"1em",f;return a.className&&(f=a.className),r.className&&(f=(f?f+" ":"")+r.className),kt.createElement("svg",Rr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,c,m,{className:f,style:Mr(Mr({color:r.color||a.color},a.style),r.style),height:w,width:w,xmlns:"http://www.w3.org/2000/svg"}),h&&kt.createElement("title",null,h),r.children)};return dd!==void 0?kt.createElement(dd.Consumer,null,a=>l(a)):l(Bd)}function If(r){return Wi({attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{d:"M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",fill:"currentColor"},child:[]}]})(r)}const Pf=({title:r,content:l,link:a,activeTooltip:c,setActiveTooltip:d,index:h})=>{const m=A.useRef(),w=D=>{D.stopPropagation(),d(c===h?null:h)},f=D=>{m.current&&!m.current.contains(D.target)&&d(null)};A.useEffect(()=>(document.addEventListener("click",f),()=>{document.removeEventListener("click",f)}),[]);const y=c===h;return B.jsxs("div",{className:"tooltip-container grid-item",ref:m,children:[B.jsx("div",{className:"tooltip-title",onClick:w,children:r}),y&&B.jsxs("div",{className:"tooltip-content",children:[B.jsx("p",{dangerouslySetInnerHTML:{__html:l}}),B.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"tooltip-link",children:"Read More"})]})]})},Cf=({title:r,content:l,link:a,index:c,activeTooltip:d,setActiveTooltip:h})=>{const m=A.useRef(),w=D=>{D.stopPropagation(),h(c===d?null:c)},f=D=>{m.current&&!m.current.contains(D.target)&&h(null)};A.useEffect(()=>(document.addEventListener("click",f),()=>{document.removeEventListener("click",f)}),[]);const y=d===c;return B.jsxs("div",{className:"tooltip-container grid-item",ref:m,children:[B.jsx("div",{className:"tooltip-title tooltip-title-matchx",onClick:w,children:B.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[B.jsx(If,{style:{color:"red",height:"14px",paddingTop:"2px"}}),r]})}),y&&B.jsxs("div",{className:"tooltip-content",children:[B.jsx("p",{dangerouslySetInnerHTML:{__html:l}}),B.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"tooltip-link",children:"Read More"})]})]})};function Tf(r){return Wi({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(r)}function Df(r){return Wi({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8.073 12.194 4.212 8.333c-1.52 1.657-2.096 3.317-2.106 3.351L2 12l.105.316C2.127 12.383 4.421 19 12.054 19c.929 0 1.775-.102 2.552-.273l-2.746-2.746a3.987 3.987 0 0 1-3.787-3.787zM12.054 5c-1.855 0-3.375.404-4.642.998L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.298-3.298c2.638-1.953 3.579-4.637 3.593-4.679l.105-.316-.105-.316C21.98 11.617 19.687 5 12.054 5zm1.906 7.546c.187-.677.028-1.439-.492-1.96s-1.283-.679-1.96-.492L10 8.586A3.955 3.955 0 0 1 12.054 8c2.206 0 4 1.794 4 4a3.94 3.94 0 0 1-.587 2.053l-1.507-1.507z"},child:[]}]})(r)}function Ef(r){return Wi({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 11c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"},child:[]},{tag:"path",attr:{d:"M12 10c-1.084 0-2 .916-2 2s.916 2 2 2 2-.916 2-2-.916-2-2-2z"},child:[]}]})(r)}function Af(r){return Wi({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(r)}function Rf(r){return Wi({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(r)}function Mf(r){return Wi({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]})(r)}const Of=()=>{const[r,l]=A.useState(!1);A.useEffect(()=>{const c=()=>{l(window.scrollY>300)};return window.addEventListener("scroll",c),()=>{window.removeEventListener("scroll",c)}},[]);const a=()=>{window.scrollTo({top:0,behavior:"smooth"})};return B.jsx(Mf,{className:`icon ${r?"visible":"hidden"}`,style:{marginRight:"10px"},onClick:a})},Lf=(r,l,a,c)=>{if(!l||l.length<2)return r;const d=l.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),h=new RegExp(`(${d})`,"gi");return r.split(h).map((m,w)=>m.toLowerCase()===l.toLowerCase()?B.jsx("span",{style:{backgroundColor:a===c?"orange":"yellow",padding:"2px"},children:m},w):m)},gt=({links:r})=>{const{searchQuery:l,setSearchQuery:a}=A.useContext(Qa),[c,d]=A.useState(null),[h,m]=A.useState(-1),[w,f]=kt.useState(!1),y=[];r.forEach((_,S)=>{const b=l.toLowerCase().trim().split(/\s+/),R=_.title.toLowerCase();b.every(U=>R.includes(U))&&y.push(S)}),A.useEffect(()=>{y.length>0&&(m(-1),d(null))},[l]);const D=_=>{if(y.length===0)return;let S;_==="forward"?S=(h+1)%y.length:S=(h-1+y.length)%y.length,m(-1),setTimeout(()=>{m(S),d(y[S])},0)},M=_=>{if(_.key==="Enter")_.preventDefault(),D(_.shiftKey?"backward":"forward");else if(_.key==="\\"){_.preventDefault(),d(null),m(-1),a("");const S=document.getElementById("search-input");S&&S.focus()}},E=()=>{d(null),m(-1),a("")};return A.useEffect(()=>(document.addEventListener("keydown",M),()=>document.removeEventListener("keydown",M)),[h,y]),B.jsxs("div",{className:"main-container",children:[l.length?B.jsx("div",{className:" tooltip-title-match",children:y.map(_=>B.jsx(Cf,{index:_,title:r[_].title,content:r[_].content,link:r[_].link,activeTooltip:c,setActiveTooltip:d},_))}):null,B.jsx("div",{className:"app-container",children:r.map((_,S)=>B.jsx(Pf,{index:S,title:Lf(_.title,l,S,c),content:_.content,link:_.link,activeTooltip:c,setActiveTooltip:d},S))}),B.jsxs("div",{className:"radio-container",children:[B.jsx("label",{className:"show-hide-title",onClick:()=>f(!w),children:w?B.jsx(Ef,{className:"icon"}):B.jsx(Df,{style:{color:"#cf411d"},className:"icon"})}),B.jsxs("span",{className:"navigation-container",children:[B.jsx(Af,{className:"icon",onClick:()=>D("backward")}),B.jsx(Tf,{className:"icon",onClick:E}),B.jsx(Rf,{className:"icon",onClick:()=>D("forward")})]}),B.jsx(Of,{})]}),w?B.jsx("div",{className:"render-content",children:r.map((_,S)=>B.jsxs("div",{className:"link-box",children:[B.jsx("h2",{children:_.title}),B.jsx("div",{dangerouslySetInnerHTML:{__html:_.content}})]},S))}):""]})},_f=()=>B.jsx(gt,{links:ff}),Uf=[{id:"154",title:"AWS, why widely used",content:"<section><h3>What is AWS, and Why Is It Widely Used in Cloud Development?</h3><ul><li><strong>AWS Overview:</strong><ul><li>Amazon Web Services (AWS) is a comprehensive cloud computing platform offering over 200 fully-featured services, including computing, storage, databases, machine learning, and more.</li></ul></li><li><strong>Reasons for Popularity:</strong><ul><li>Global infrastructure for low-latency applications.</li><li>Pay-as-you-go pricing model for cost efficiency.</li><li>Extensive ecosystem of services for diverse workloads.</li><li>Built-in security and compliance frameworks.</li><li>Developer-friendly tools for fast and scalable development.</li></ul></li></ul></section>",link:""}],Ff=[...Uf],zf=()=>B.jsx(gt,{links:Ff}),Wf=[{title:"What is Docker?",content:`
      <h3>What is Docker?</h3>
      <ul>
        <li>Docker is an open-source platform used to automate the deployment, scaling, and management of applications in lightweight, portable containers.</li>
        <li>Containers allow applications and their dependencies to be bundled together, ensuring they run consistently across different environments.</li>
        <li>Docker uses containerization, which is a method of packaging an application and all its dependencies (e.g., libraries, configurations) into a single container.</li>
        <li>It works by utilizing Docker images (read-only templates) and containers (running instances of those images) to deploy applications in isolated environments.</li>
        <li>Docker makes it easy to package, distribute, and run applications anywhere—from local development environments to production servers.</li>
      </ul>
  
      <h3>Use Cases for Docker</h3>
      <ul>
        <li>Developing and testing applications in isolated environments across different systems and platforms.</li>
        <li>Simplifying the deployment of microservices by packaging each service into separate containers.</li>
        <li>Continuous Integration and Continuous Deployment (CI/CD) workflows for fast and consistent application deployments.</li>
        <li>Scaling applications horizontally by replicating containers to meet demand.</li>
        <li>Running legacy applications in isolated containers to maintain compatibility across platforms.</li>
        <li>Ensuring consistency across different development, testing, and production environments.</li>
      </ul>
  
      <h3>Features of Docker</h3>
      <ul>
        <li><strong>Containerization:</strong> Ensures that applications and their dependencies run consistently across any environment.</li>
        <li><strong>Portability:</strong> Docker containers can run on any system that supports Docker, including on-premises or cloud-based environments.</li>
        <li><strong>Isolation:</strong> Containers are isolated from the host system, preventing conflicts with other applications or services.</li>
        <li><strong>Lightweight:</strong> Containers are smaller in size compared to virtual machines, which makes them faster to start and more resource-efficient.</li>
        <li><strong>Versioning and Reproducibility:</strong> Docker images are versioned, ensuring that an application can be reliably replicated across environments.</li>
        <li><strong>Docker Compose:</strong> Allows you to define and manage multi-container applications with ease.</li>
        <li><strong>Docker Swarm and Kubernetes:</strong> Tools for orchestrating and managing a large number of containers, providing high availability and scalability.</li>
      </ul>
    `,link:"https://www.docker.com/what-docker"},{title:"Docker Works Architecture, Pros Cons",content:`
      <h3>How Docker Works</h3>
      <p>Docker simplifies the deployment and management of applications using containers. Here's how it works:</p>
      <ul>
        <li><strong>Docker Images:</strong> A Docker image is a template that contains the application code and all dependencies required to run it. Images are read-only and serve as a blueprint for creating Docker containers.</li>
        <li><strong>Docker Containers:</strong> A container is an instance of a Docker image. Containers are lightweight, isolated environments where applications run. Containers share the OS kernel but are isolated from each other, allowing multiple containers to run on the same machine.</li>
        <li><strong>Docker Engine:</strong> The Docker Engine is the core component that handles building, running, and managing containers. It includes the Docker Daemon (a background service) that manages containers and images, and the Docker CLI (Command Line Interface) to interact with the daemon.</li>
        <li><strong>Docker Hub:</strong> Docker Hub is a public registry that stores Docker images. Developers can pull images from the hub to create containers or push their own images to be shared.</li>
        <li><strong>Docker Compose:</strong> A tool for defining and running multi-container Docker applications. With a simple YAML file, you can configure all your application's services (e.g., databases, web servers) and run them with a single command.</li>
        <li><strong>Docker Swarm & Kubernetes:</strong> These are orchestration tools used to manage clusters of Docker containers, providing scaling, load balancing, and high availability features.</li>
      </ul>
  
      <h3>Docker Architecture</h3>
      <ul>
        <li><strong>Docker Daemon (Server):</strong> A persistent background process that manages the containers, images, networks, and storage volumes. It listens for API requests and communicates with other Docker Daemons.</li>
        <li><strong>Docker Client:</strong> The command-line interface (CLI) that allows users to interact with the Docker Daemon. Commands like <code>docker run</code>, <code>docker build</code>, and <code>docker-compose</code> are executed through the client.</li>
        <li><strong>Docker Images:</strong> Immutable, portable files containing everything needed to run an application, from code to runtime libraries. Images are stored in repositories and are the building blocks of containers.</li>
        <li><strong>Docker Containers:</strong> Running instances of Docker images. They are isolated from each other and the host system, ensuring consistent and reliable application behavior.</li>
        <li><strong>Docker Registry:</strong> A central repository (Docker Hub or private registry) where Docker images are stored and shared. Images can be pulled from or pushed to a registry.</li>
      </ul>
  
      <h3>Pros of Docker</h3>
      <ul>
        <li><strong>Portability:</strong> Docker containers run the same way across different environments (development, testing, production), reducing "it works on my machine" issues.</li>
        <li><strong>Scalability:</strong> Docker allows for scaling applications quickly by adding more containers as needed without compromising performance.</li>
        <li><strong>Isolation:</strong> Each container is isolated from the others, ensuring that they do not interfere with each other and minimizing conflicts between dependencies.</li>
        <li><strong>Efficiency:</strong> Docker containers share the OS kernel and resources, making them lightweight compared to virtual machines, which results in faster startup times and reduced overhead.</li>
        <li><strong>Faster Development Cycle:</strong> Developers can quickly test and deploy applications using Docker, leading to faster development and iteration cycles.</li>
        <li><strong>Easy CI/CD Integration:</strong> Docker fits seamlessly into continuous integration and continuous deployment (CI/CD) workflows, enabling faster and more reliable delivery of applications.</li>
      </ul>
  
      <h3>Cons of Docker</h3>
      <ul>
        <li><strong>Learning Curve:</strong> Docker introduces new concepts (e.g., containers, images, Dockerfiles) that require a learning curve, especially for developers unfamiliar with containerization.</li>
        <li><strong>Persistent Storage:</strong> Docker containers are ephemeral, meaning data within them is lost when the container stops. Managing persistent storage for stateful applications can be challenging.</li>
        <li><strong>Overhead in Complex Orchestration:</strong> While Docker itself is lightweight, managing a large number of containers, especially in a production environment, requires tools like Docker Swarm or Kubernetes, which can add complexity.</li>
        <li><strong>Not Ideal for GUI-based Applications:</strong> Docker is primarily suited for server-side or headless applications. Running GUI-based applications in Docker is not straightforward and requires additional setup.</li>
        <li><strong>Security Concerns:</strong> Docker containers share the host OS kernel, which could potentially lead to security vulnerabilities if not properly configured. Security in containerized environments requires careful attention to detail.</li>
      </ul>
    `,link:"https://www.docker.com/resources/what-container"},{id:1,title:"container vs virtual machine",content:"<h3>What is the difference between a container and a virtual machine?</h3>      <ul>      <li><b>Containers:</b></li>      <li>Containers is Lightweight, and share the host OS kernel, and run isolated processes.</li>      <li>Containers will Start quickly and use less resources.</li>      <li>Containers are more efficient for microservices, as they share the host OS kernel.</li>      <li>Examples: Docker, Kubernetes.</li>      <pre><code>docker run -d my-container</code></pre>      <li><b>Virtual Machines (VMs):</b></li>      <li>VMs Have a full OS with including a dedicated kernel.</li>      <li>It Require more resources and take longer time to start.</li>      <li>Examples: VMware, VirtualBox.</li>      <pre><code>VMs run entire operating systems, including guest OS and kernel.</code></pre>      <li>Containers are more efficient for microservices, while VMs are better for full OS isolation.</li>      </ul>"},{id:2,title:"Docker Engine",content:"<h3>What is Docker Engine?</h3>      <ul>      <li>Docker Engine is the core software that enables containerization.</li>      <li>It consists of three main components:</li>      <li><b>1. Docker Daemon:</b> Runs in the background and manages containers.</li>      <li><b>2. REST API:</b> Allows interaction with Docker programmatically.</li>      <li><b>3. Docker CLI:</b> Command-line tool to communicate with the Docker Daemon.</li>      <li>Example command to check Docker Engine version:</li>      <pre><code>docker version</code></pre>      <li>Docker Engine supports running and managing containerized applications.</li>      </ul>"},{id:3,title:"Docker Image",content:"<h3>What is a Docker image?</h3>      <ul>      <li>A Docker image is a lightweight, standalone, and executable package that contains application code, dependencies, and configuration.</li>      <li>Images are used to create Docker containers.</li>      <li>They are built using a <b>Dockerfile</b>, which defines the application environment.</li>      <li>Example Dockerfile:</li>      <pre><code>FROM node:14      COPY . /app      WORKDIR /app      RUN npm install      CMD ['node', 'app.js']</code></pre>      <li>To build an image:</li>      <pre><code>docker build -t my-app .</code></pre>      <li>To list images:</li>      <pre><code>docker images</code></pre>      <li>Docker images are reusable and can be stored in Docker Hub.</li>      </ul>"},{id:4,title:"Docker Hub",content:"<h3>What is Docker Hub?</h3>          <ul>          <li><b>Docker Hub</b> is a cloud-based repository for Docker images.</li>          <li>It allows developers to store, share, and manage container images.</li>          <li>Provides public and private repositories for hosting images.</li>          <li>Example command to pull an image from Docker Hub:</li>          <pre><code>docker pull nginx</code></pre>          <li>To push an image to Docker Hub:</li>          <pre><code>docker login          docker tag my-app username/my-app          docker push username/my-app</code></pre>          <li>Docker Hub simplifies sharing pre-configured container environments.</li>          </ul>"},{id:5,title:"Create dc from image",content:"<h3>How do you create a Docker container from an image?</h3>          <ul>          <li>A Docker container is created from an image using the <b>docker run</b> command.</li>          <li>Basic command to create and start a container:</li>          <pre><code>docker run -d --name my-container nginx</code></pre>          <li><b>Explanation:</b></li>          <li><b>-d:</b> Runs the container in detached mode.</li>          <li><b>--name:</b> Assigns a custom name to the container.</li>          <li>To list running containers:</li>          <pre><code>docker ps</code></pre>          <li>To stop and remove a container:</li>          <pre><code>docker stop my-container          docker rm my-container</code></pre>          </ul>"},{id:6,title:"Dockerfile",content:"<h3>What is a Dockerfile?</h3>          <ul>          <li>A <b>Dockerfile</b> is a script containing a set of instructions to build a Docker image.</li>          <li>Defines the base image, dependencies, and commands needed to set up an environment.</li>          <li>Example Dockerfile for a Node.js application:</li>          <pre><code>FROM node:14          WORKDIR /app          COPY . .          RUN npm install          CMD ['node', 'app.js']</code></pre>          <li>To build an image from a Dockerfile:</li>          <pre><code>docker build -t my-app .</code></pre>          <li>To run a container from the built image:</li>          <pre><code>docker run -d my-app</code></pre>          </ul>"},{id:7,title:"Hypervisors & their functions",content:"<h3>Talk about hypervisors and their functions.</h3>              <ul>              <li>A <b>hypervisor</b> is software that allows multiple virtual machines (VMs) to run on a single physical machine.</li>              <li>It manages hardware resources and allocates them to VMs.</li>              <li>Two types of hypervisors:</li>              <li><b>1. Type 1 (Bare-metal Hypervisor):</b> Runs directly on the hardware.</li>              <pre><code>Examples: VMware ESXi, Microsoft Hyper-V, Xen</code></pre>              <li><b>2. Type 2 (Hosted Hypervisor):</b> Runs on an existing OS.</li>              <pre><code>Examples: VirtualBox, VMware Workstation</code></pre>              <li>Hypervisors enable virtualization, allowing efficient resource utilization and isolation between VMs.</li>              </ul>"},{id:8,title:"Build Docker image by Dockerfile",content:"<h3>How do you build a Docker image using a Dockerfile?</h3>              <ul>              <li>A Docker image is built using a <b>Dockerfile</b>, which contains instructions for setting up the environment.</li>              <li>Steps to build an image:</li>              <li><b>1. Create a Dockerfile:</b></li>              <pre><code>FROM node:14              WORKDIR /app              COPY . .              RUN npm install              CMD ['node', 'app.js']</code></pre>              <li><b>2. Build the Docker image:</b></li>              <pre><code>docker build -t my-app .</code></pre>              <li><b>3. Verify the image:</b></li>              <pre><code>docker images</code></pre>              <li>The built image can now be used to create a container.</li>              </ul>"},{id:9,title:"Starting & stopping dc",content:"<h3>How do you start and stop a Docker container?</h3>              <ul>              <li>Containers are managed using Docker CLI commands.</li>              <li><b>1. Start a new container:</b></li>              <pre><code>docker run -d --name my-container nginx</code></pre>              <li><b>2. Start an existing stopped container:</b></li>              <pre><code>docker start my-container</code></pre>              <li><b>3. Stop a running container:</b></li>              <pre><code>docker stop my-container</code></pre>              <li><b>4. Restart a container:</b></li>              <pre><code>docker restart my-container</code></pre>              <li>These commands help manage container lifecycles efficiently.</li>              </ul>"},{id:10,title:"Components of Docker",content:"<h3>List down the components of Docker.</h3>                  <ul>                  <li>Docker consists of several key components:</li>                  <li><b>1. Docker Engine:</b> Core component that runs and manages containers.</li>                  <li><b>2. Docker CLI:</b> Command-line tool for interacting with Docker.</li>                  <li><b>3. Docker Images:</b> Read-only templates used to create containers.</li>                  <li><b>4. Docker Containers:</b> Running instances of Docker images.</li>                  <li><b>5. Dockerfile:</b> Script containing instructions to build Docker images.</li>                  <li><b>6. Docker Hub:</b> Cloud-based repository for storing and sharing Docker images.</li>                  <li><b>7. Docker Compose:</b> Tool to define and manage multi-container applications.</li>                  <li><b>8. Docker Swarm:</b> Native clustering and orchestration tool for Docker.</li>                  <li>These components enable efficient containerization and application deployment.</li>                  </ul>"},{id:11,title:"Removing a Docker container",content:"<h3>How do you remove a Docker container?</h3>                  <ul>                  <li>To remove a Docker container, first, stop it if it is running.</li>                  <li><b>1. Stop the container:</b></li>                  <pre><code>docker stop my-container</code></pre>                  <li><b>2. Remove the container:</b></li>                  <pre><code>docker rm my-container</code></pre>                  <li><b>3. Remove multiple containers:</b></li>                  <pre><code>docker rm container1 container2</code></pre>                  <li>To force-remove a running container:</li>                  <pre><code>docker rm -f my-container</code></pre>                  <li>Containers must be stopped before removal unless <b>-f</b> (force) is used.</li>                  </ul>"},{id:12,title:"Remove stopped cont & unused",content:"<h3>How can you remove all stopped containers and unused networks in Docker?</h3>                  <ul>                  <li>To clean up stopped containers and unused networks, use Docker's prune commands.</li>                  <li><b>1. Remove all stopped containers:</b></li>                  <pre><code>docker container prune</code></pre>                  <li><b>2. Remove all unused networks:</b></li>                  <pre><code>docker network prune</code></pre>                  <li><b>3. Remove all unused Docker resources (containers, networks, images, build cache):</b></li>                  <pre><code>docker system prune</code></pre>                  <li>These commands help free up disk space by removing unused Docker objects.</li>                  </ul>"},{id:13,title:"Data persistence in dcs",content:"<h3>When a container exits, is it possible for you to lose data?</h3>                    <ul>                    <li>Yes, data can be lost when a container exits if it is not stored persistently.</li>                    <li>By default, container storage is temporary and gets deleted when the container is removed.</li>                    <li>To prevent data loss, use:</li>                    <li><b>1. Docker Volumes:</b> Persistent storage managed by Docker.</li>                    <pre><code>docker volume create my-volume                    docker run -v my-volume:/data my-container</code></pre>                    <li><b>2. Bind Mounts:</b> Maps a host directory to a container.</li>                    <pre><code>docker run -v /host/path:/container/path my-container</code></pre>                    <li><b>3. External Databases:</b> Store important data outside the container.</li>                    <li>Using persistent storage ensures that data remains even after the container stops.</li>                    </ul>"},{id:14,title:"Docker Compose",content:"<h3>What is Docker Compose?</h3>                    <ul>                    <li><b>Docker Compose</b> is a tool for defining and managing multi-container Docker applications.</li>                    <li>It uses a <b>docker-compose.yml</b> file to configure services, networks, and volumes.</li>                    <li>Example <b>docker-compose.yml</b> file:</li>                    <pre><code>version: '3'                    services:                      web:                        image: nginx                        ports:                          - '8080:80'                      db:                        image: mysql                        environment:                          MYSQL_ROOT_PASSWORD: password</code></pre>                    <li>To start the services:</li>                    <pre><code>docker-compose up -d</code></pre>                    <li>To stop the services:</li>                    <pre><code>docker-compose down</code></pre>                    <li>Docker Compose simplifies managing multiple containers in development and production.</li>                    </ul>"},{id:15,title:"Limit on running dcs",content:"<h3>Is there a limit on how many containers you can run in Docker?</h3>                    <ul>                    <li>There is no fixed limit on the number of Docker containers you can run.</li>                    <li>The limit depends on:</li>                    <li><b>1. System Resources:</b> CPU, RAM, and disk space.</li>                    <li><b>2. Operating System Limits:</b> Some OSes have process limits affecting container count.</li>                    <li><b>3. Docker Daemon Configuration:</b> Docker may restrict resources via configuration.</li>                    <li>To check system resource usage:</li>                    <pre><code>docker stats</code></pre>                    <li>Efficient resource management is necessary when running a large number of containers.</li>                    </ul>"},{id:16,title:"Container vs Daemon Logging",content:"<h3>Differentiate between Container Logging and Daemon Logging.</h3>                      <ul>                      <li><b>Container Logging:</b></li>                      <li>Captures logs from applications running inside a container.</li>                      <li>Uses Docker’s built-in <b>json-file</b> logging driver by default.</li>                      <li>Example command to view container logs:</li>                      <pre><code>docker logs my-container</code></pre>                      <li>Supports logging drivers like syslog, fluentd, and AWS CloudWatch.</li>                      <li><b>Daemon Logging:</b></li>                      <li>Captures logs from the Docker Engine (daemon) itself.</li>                      <li>Helps diagnose issues with container runtime and networking.</li>                      <li>Docker daemon logs are stored in system logs:</li>                      <pre><code>sudo journalctl -u docker.service</code></pre>                      <li>Container logging focuses on application logs, while daemon logging tracks Docker runtime events.</li>                      </ul>"},{id:17,title:"Use Docker for multiple app env",content:"<h3>How will you use Docker for multiple application environments?</h3>                      <ul>                      <li>Docker allows creating separate environments for development, testing, and production.</li>                      <li>Ways to manage multiple environments:</li>                      <li><b>1. Using Docker Compose:</b> Define multiple environments in separate files.</li>                      <pre><code>docker-compose -f docker-compose.dev.yml up</code></pre>                      <li><b>2. Using Environment Variables:</b> Store configuration separately.</li>                      <pre><code>docker run -e ENV=production my-app</code></pre>                      <li><b>3. Multi-stage Builds:</b> Create optimized images for different environments.</li>                      <pre><code>FROM node:14 AS development                      RUN npm install --only=dev                      FROM node:14 AS production                      RUN npm install --only=prod</code></pre>                      <li>Docker ensures consistency across all environments while maintaining isolation.</li>                      </ul>"},{id:18,title:"IPv6 support in Docker",content:'<h3>Does Docker provide support for IPv6?</h3>                      <ul>                      <li>Yes, Docker supports IPv6 but it is disabled by default.</li>                      <li>To enable IPv6, edit the Docker daemon configuration:</li>                      <pre><code>{                        "ipv6": true,                        "fixed-cidr-v6": "2001:db8:1::/64"                      }</code></pre>                      <li>Restart the Docker service:</li>                      <pre><code>sudo systemctl restart docker</code></pre>                      <li>Check the IPv6 network:</li>                      <pre><code>docker network inspect bridge</code></pre>                      <li>Docker supports IPv6 in container networking, but not all cloud providers support it.</li>                      </ul>'},{id:19,title:"Scaling dcs horizontally",content:"<h3>How do you scale Docker containers horizontally?</h3>                        <ul>                        <li>Scaling Docker containers horizontally means running multiple instances of a container across different nodes or machines.</li>                        <li><b>1. Using Docker Compose:</b> Scale services with the <b>--scale</b> flag.</li>                        <pre><code>docker-compose up --scale app=3</code></pre>                        <li><b>2. Using Docker Swarm:</b> Deploy a service and scale replicas.</li>                        <pre><code>docker service create --name my-service --replicas 5 nginx</code></pre>                        <li><b>3. Using Kubernetes:</b> Manage scaling dynamically.</li>                        <pre><code>kubectl scale deployment my-app --replicas=4</code></pre>                        <li>Horizontal scaling improves availability and load balancing.</li>                        </ul>"},{id:20,title:"CMD & ENTRYPOINT in Dockerfile",content:'<h3>What is the difference between the CMD and ENTRYPOINT instructions in a Dockerfile?</h3>                        <ul>                        <li>Both <b>CMD</b> and <b>ENTRYPOINT</b> define commands to execute when a container starts.</li>                        <li><b>CMD:</b></li>                        <li>- Provides default command but can be overridden.</li>                        <li>- Syntax:</li>                        <pre><code>CMD ["node", "app.js"]</code></pre>                        <li><b>ENTRYPOINT:</b></li>                        <li>- Always executes and cannot be easily overridden.</li>                        <li>- Syntax:</li>                        <pre><code>ENTRYPOINT ["node", "app.js"]</code></pre>                        <li><b>Example with both:</b></li>                        <pre><code>ENTRYPOINT ["python"]                        CMD ["script.py"]</code></pre>                        <li>Running <b>docker run my-container another.py</b> will override <b>CMD</b> but not <b>ENTRYPOINT</b>.</li>                        </ul>'},{id:21,title:"Purpose of volumes in dc",content:"<h3>What is the purpose of volumes in Docker?</h3>                        <ul>                        <li>Docker volumes provide persistent storage for containers.</li>                        <li>They allow data to persist even if the container is removed.</li>                        <li><b>1. Create a volume:</b></li>                        <pre><code>docker volume create my-volume</code></pre>                        <li><b>2. Use a volume in a container:</b></li>                        <pre><code>docker run -v my-volume:/app/data my-container</code></pre>                        <li><b>3. List volumes:</b></li>                        <pre><code>docker volume ls</code></pre>                        <li>Volumes are managed by Docker and provide better performance than bind mounts.</li>                        </ul>"},{id:22,title:"Container self restart capability",content:"<h3>Is it possible for a container to restart by itself?</h3>                          <ul>                          <li>Yes, a container can restart automatically based on its restart policy.</li>                          <li>Docker provides different restart policies:</li>                          <li><b>1. no (default):</b> The container does not restart automatically.</li>                          <li><b>2. always:</b> The container restarts regardless of exit status.</li>                          <li><b>3. on-failure:</b> Restarts only if the container exits with an error.</li>                          <li><b>4. unless-stopped:</b> Restarts the container unless explicitly stopped.</li>                          <li>Example:</li>                          <pre><code>docker run --restart=always my-container</code></pre>                          <li>To update restart policy for an existing container:</li>                          <pre><code>docker update --restart=on-failure my-container</code></pre>                          <li>This ensures better uptime and fault tolerance.</li>                          </ul>"},{id:23,title:"Exposing ports in dc",content:'<h3>How do you expose ports in a Docker container?</h3>                          <ul>                          <li>Ports are exposed to allow external access to services running inside a container.</li>                          <li><b>1. Using the -p flag:</b> Map a container port to a host port.</li>                          <pre><code>docker run -p 8080:80 nginx</code></pre>                          <li><b>2. Defining ports in a Dockerfile:</b></li>                          <pre><code>EXPOSE 80</code></pre>                          <li><b>3. Using Docker Compose:</b></li>                          <pre><code>services:                            web:                              image: nginx                              ports:                                - "8080:80"</code></pre>                          <li>Mapping ports allows access to containerized applications.</li>                          </ul>'},{id:24,title:"Passing env variables to dc",content:'<h3>How do you pass environment variables to a Docker container?</h3>                          <ul>                          <li>Environment variables provide configuration data to containers.</li>                          <li><b>1. Using the -e flag:</b></li>                          <pre><code>docker run -e "ENV_MODE=production" my-container</code></pre>                          <li><b>2. Defining in a Dockerfile:</b></li>                          <pre><code>ENV ENV_MODE=production</code></pre>                          <li><b>3. Using an environment file:</b></li>                          <pre><code>docker run --env-file ./env.list my-container</code></pre>                          <li><b>4. Using Docker Compose:</b></li>                          <pre><code>services:                            app:                              environment:                                - ENV_MODE=production</code></pre>                          <li>Passing environment variables allows flexible configuration of containers.</li>                          </ul>'},{id:25,title:"Diff b/w dc restart policies",content:'<h3>What is the difference between Docker restart policies "no", "on-failure", and "always"?</h3>                            <ul>                            <li>Docker restart policies determine how a container restarts after it stops.</li>                            <li><b>1. no (default):</b> The container does not restart automatically.</li>                            <pre><code>docker run --restart=no my-container</code></pre>                            <li><b>2. on-failure:</b> Restarts the container only if it exits with a non-zero error code.</li>                            <pre><code>docker run --restart=on-failure my-container</code></pre>                            <li><b>3. always:</b> The container restarts regardless of the exit status.</li>                            <pre><code>docker run --restart=always my-container</code></pre>                            <li>Choosing the right restart policy ensures better uptime and fault tolerance.</li>                            </ul>'},{id:26,title:"Purpose of the Docker registry",content:"<h3>What is the purpose of the Docker registry?</h3>                            <ul>                            <li>A Docker registry is a storage system for Docker images.</li>                            <li>It allows users to share, store, and manage container images.</li>                            <li><b>1. Public registry:</b> Docker Hub provides a cloud-based repository for sharing images.</li>                            <pre><code>docker pull nginx</code></pre>                            <li><b>2. Private registry:</b> Organizations can host their own registry for internal use.</li>                            <pre><code>docker run -d -p 5000:5000 --name registry registry:2</code></pre>                            <li><b>3. Pushing images to a registry:</b></li>                            <pre><code>docker tag my-app my-registry.com/my-app                            docker push my-registry.com/my-app</code></pre>                            <li>Docker registries help in version control and deployment automation.</li>                            </ul>"},{id:27,title:"Docker image vs container",content:"<h3>What is the difference between a Docker image and a container?</h3>                            <ul>                            <li><b>Docker Image:</b></li>                            <li>- A read-only template containing the application and dependencies.</li>                            <li>- Used to create containers.</li>                            <li>- Built from a Dockerfile.</li>                            <pre><code>docker build -t my-app .</code></pre>                            <li><b>Docker Container:</b></li>                            <li>- A running instance of a Docker image.</li>                            <li>- Has its own isolated environment.</li>                            <li>- Created using the <b>docker run</b> command.</li>                            <pre><code>docker run -d my-app</code></pre>                            <li>Docker images are templates, while containers are live instances running from images.</li>                            </ul>"},{id:28,title:"Updating a Docker image",content:"<h3>How do you update a Docker image?</h3>                              <ul>                              <li>To update a Docker image, follow these steps:</li>                              <li><b>1. Pull the latest version of the image:</b></li>                              <pre><code>docker pull my-image:latest</code></pre>                              <li><b>2. Rebuild the image if using a Dockerfile:</b></li>                              <pre><code>docker build -t my-app .</code></pre>                              <li><b>3. Remove the old container and start a new one with the updated image:</b></li>                              <pre><code>docker stop my-container                              docker rm my-container                              docker run -d --name my-container my-image:latest</code></pre>                              <li><b>4. Use Docker Compose to update services:</b></li>                              <pre><code>docker-compose pull                              docker-compose up -d</code></pre>                              <li>These steps ensure that your application runs with the latest changes.</li>                              </ul>"},{id:29,title:"base image vs child image",content:"<h3>What is the difference between a base image and a child image in Docker?</h3>                              <ul>                              <li><b>Base Image:</b></li>                              <li>- The starting point for building a Docker image.</li>                              <li>- Does not depend on any other image.</li>                              <li>- Common examples: <b>ubuntu, alpine, node</b>.</li>                              <pre><code>FROM ubuntu:latest</code></pre>                              <li><b>Child Image:</b></li>                              <li>- Built on top of a base image.</li>                              <li>- Inherits features from the base image and adds modifications.</li>                              <pre><code>FROM node:14                              COPY . /app                              RUN npm install</code></pre>                              <li>Base images provide the foundation, while child images extend functionality.</li>                              </ul>"},{id:30,title:"CMD instruction in a Dockerfile",content:'<h3>What is the purpose of the CMD instruction in a Dockerfile?</h3>                              <ul>                              <li>The <b>CMD</b> instruction specifies the default command to run when a container starts.</li>                              <li>It allows providing arguments to the main application.</li>                              <li><b>Syntax:</b></li>                              <pre><code>CMD ["executable", "arg1", "arg2"]</code></pre>                              <li><b>Example:</b></li>                              <pre><code>CMD ["node", "server.js"]</code></pre>                              <li>If a command is provided during <b>docker run</b>, it overrides <b>CMD</b>.</li>                              <li>Use <b>ENTRYPOINT</b> for commands that should not be overridden.</li>                              </ul>'},{id:31,title:"Inspecting metadata dc image",content:"<h3>How do you inspect the metadata of a Docker image?</h3>    <ul>    <li>You can inspect the metadata of a Docker image using the <b>docker inspect</b> command.</li>    <li><b>Syntax:</b></li>    <pre><code>docker inspect image-name</code></pre>    <li><b>Example:</b></li>    <pre><code>docker inspect ubuntu:latest</code></pre>    <li>The command returns details such as:</li>    <ul>      <li>- Image ID</li>      <li>- Created date</li>      <li>- OS and architecture</li>      <li>- Environment variables</li>      <li>- Entrypoint and CMD</li>    </ul>    <li>You can filter specific information using:</li>    <pre><code>docker inspect --format='{{.Config.Cmd}}' ubuntu:latest</code></pre>    </ul>"},{id:32,title:"Understanding Docker Swarm",content:"<h3>What is Docker Swarm?</h3>    <ul>    <li><b>Docker Swarm</b> is a container orchestration tool built into Docker.</li>    <li>It allows managing multiple Docker containers across a cluster.</li>    <li><b>Key features:</b></li>    <ul>      <li>- High availability and load balancing</li>      <li>- Service scaling and rolling updates</li>      <li>- Secure communication between nodes</li>      <li>- Built-in service discovery</li>    </ul>    <li><b>Commands to set up a Swarm:</b></li>    <pre><code>docker swarm init</code></pre>    <li><b>Deploy services:</b></li>    <pre><code>docker service create --name my-service nginx</code></pre>    <li>Docker Swarm provides a simple way to manage containerized applications at scale.</li>    </ul>"},{id:33,title:"Docker cont vs Kubernetes pod",content:"<h3>What is the difference between a Docker container and a Kubernetes pod?</h3>    <ul>    <li><b>Docker Container:</b></li>    <ul>      <li>- A single isolated unit that runs an application.</li>      <li>- Created from a Docker image.</li>      <li>- Uses the Docker runtime to manage execution.</li>    </ul>    <pre><code>docker run -d --name my-container nginx</code></pre>    <li><b>Kubernetes Pod:</b></li>    <ul>      <li>- A group of one or more containers.</li>      <li>- Containers share the same network and storage.</li>      <li>- Managed by Kubernetes.</li>    </ul>    <pre><code>kubectl run my-pod --image=nginx</code></pre>    <li><b>Key Differences:</b></li>    <ul>      <li>- A container is a single runtime unit, while a pod can contain multiple containers.</li>      <li>- Pods enable better communication between tightly coupled containers.</li>      <li>- Kubernetes manages pods for scaling and orchestration.</li>    </ul>    </ul>"},{id:34,title:"Container isolation and security",content:"<h3>How does Docker handle container isolation and security?</h3>    <ul>    <li>Docker ensures container isolation and security using various Linux kernel features.</li>    <li><b>Key mechanisms:</b></li>    <ul>      <li>- <b>Namespaces:</b> Provides process isolation (PID, network, filesystem).</li>      <li>- <b>Control Groups (cgroups):</b> Limits CPU, memory, and I/O usage.</li>      <li>- <b>Seccomp:</b> Restricts system calls for security.</li>      <li>- <b>Capabilities:</b> Limits privileges inside the container.</li>      <li>- <b>AppArmor/SELinux:</b> Enforces security policies.</li>    </ul>    <li><b>Example: Running a container with limited privileges:</b></li>    <pre><code>docker run --security-opt no-new-privileges nginx</code></pre>    <li>These mechanisms help prevent unauthorized access and resource abuse.</li>    </ul>"},{id:35,title:"Purpose of Docker volume driver",content:"<h3>What is the purpose of a Docker volume driver?</h3>    <ul>    <li>A <b>Docker volume driver</b> allows Docker to manage data storage using external storage systems.</li>    <li><b>Why use volume drivers?</b></li>    <ul>      <li>- Supports external storage like NFS, AWS EBS, and GlusterFS.</li>      <li>- Provides persistent data storage.</li>      <li>- Enables data sharing between containers.</li>    </ul>    <li><b>Creating a volume with a specific driver:</b></li>    <pre><code>docker volume create --driver local my-volume</code></pre>    <li><b>Using a volume in a container:</b></li>    <pre><code>docker run -d --mount source=my-volume,target=/app nginx</code></pre>    <li>Volume drivers enhance flexibility in managing container storage.</li>    </ul>"},{id:36,title:"Deploying dc to remote host",content:'<h3>How do you deploy a Docker container to a remote host?</h3>    <ul>    <li>Docker allows deploying containers to remote hosts using SSH or Docker Swarm.</li>    <li><b>Using SSH:</b></li>    <pre><code>docker -H ssh://user@remote-host run -d nginx</code></pre>    <li><b>Using Docker Swarm:</b></li>    <ul>      <li>1. Initialize Swarm on the remote host:</li>      <pre><code>docker swarm init</code></pre>      <li>2. Deploy a service:</li>      <pre><code>docker service create --name my-service nginx</code></pre>    </ul>    <li><b>Using Docker Context:</b></li>    <ul>      <li>1. Create a new context:</li>      <pre><code>docker context create my-remote --docker "host=ssh://user@remote-host"</code></pre>      <li>2. Use the context:</li>      <pre><code>docker context use my-remote</code></pre>      <li>3. Run the container remotely:</li>      <pre><code>docker run -d nginx</code></pre>    </ul>    <li>These methods enable efficient remote deployment and management of containers.</li>    </ul>'},{id:37,title:"Use dc in microservices archi",content:"<h3>What are the benefits of using Docker in a microservices architecture?</h3>    <ul>    <li>Docker enhances microservices architecture by providing:</li>    <li><b>1. Isolation:</b> Each microservice runs in its own container, preventing conflicts.</li>    <li><b>2. Portability:</b> Containers run consistently across different environments.</li>    <li><b>3. Scalability:</b> Easily scale microservices up or down using orchestration tools.</li>    <li><b>4. Faster Deployment:</b> Containers start quickly, improving CI/CD processes.</li>    <li><b>5. Resource Efficiency:</b> Containers use fewer resources than VMs.</li>    <li><b>Example:</b> Running multiple microservices with Docker Compose:</li>    <pre><code>docker-compose up -d</code></pre>    <li>Docker simplifies deployment, scaling, and management of microservices.</li>    </ul>"},{id:38,title:"Debugging issues in dc",content:"<h3>How do you debug issues in a Docker container?</h3>    <ul>    <li><b>1. Check container logs:</b></li>    <pre><code>docker logs my-container</code></pre>    <li><b>2. Inspect the container:</b></li>    <pre><code>docker inspect my-container</code></pre>    <li><b>3. Get real-time logs:</b></li>    <pre><code>docker logs -f my-container</code></pre>    <li><b>4. Enter the container shell:</b></li>    <pre><code>docker exec -it my-container sh</code></pre>    <li><b>5. Check running processes:</b></li>    <pre><code>docker top my-container</code></pre>    <li><b>6. Monitor resource usage:</b></li>    <pre><code>docker stats</code></pre>    <li>These methods help identify and resolve container issues effectively.</li>    </ul>"},{id:39,title:"docker exec command",content:'<h3>What is the purpose of the "docker exec" command?</h3>    <ul>    <li>The <b>docker exec</b> command allows running commands inside a running container.</li>    <li><b>Common use cases:</b></li>    <ul>      <li>- Debugging and troubleshooting containers.</li>      <li>- Running administrative tasks inside the container.</li>      <li>- Checking logs and configurations.</li>    </ul>    <li><b>Example: Open an interactive shell inside a container:</b></li>    <pre><code>docker exec -it my-container sh</code></pre>    <li><b>Example: Running a single command inside a container:</b></li>    <pre><code>docker exec my-container ls /app</code></pre>    <li>The <b>docker exec</b> command is useful for interacting with running containers.</li>    </ul>'},{id:40,title:"Limiting CPU & memory use dc",content:'<h3>How do you limit the CPU and memory usage of a Docker container?</h3>    <ul>    <li>Docker provides options to limit CPU and memory usage for containers.</li>    <li><b>1. Limit CPU usage:</b></li>    <pre><code>docker run --cpus="1.5" my-container</code></pre>    <li><b>2. Limit memory usage:</b></li>    <pre><code>docker run --memory="512m" my-container</code></pre>    <li><b>3. Limit both CPU and memory:</b></li>    <pre><code>docker run --cpus="2" --memory="1g" my-container</code></pre>    <li>These limits prevent containers from consuming excessive resources.</li>    </ul>'},{id:41,title:"Significance 'Dockerfile.lock' file",content:'<h3>What is the significance of the "Dockerfile.lock" file?</h3>    <ul>    <li>The <b>Dockerfile.lock</b> file is not an official Docker feature but is sometimes used to:</li>    <ul>      <li>- Lock dependencies to specific versions.</li>      <li>- Ensure reproducible builds.</li>      <li>- Prevent accidental updates of base images or dependencies.</li>    </ul>    <li><b>Example: Using a lock file for dependencies:</b></li>    <pre><code>FROM node:14RUN npm ci --lockfile</code></pre>    <li>While not a default Docker feature, a lock file can enhance build stability.</li>    </ul>'},{id:42,title:"Create multi-stage build dc",content:'<h3>How do you create a multi-stage build in Docker?</h3>    <ul>    <li>Multi-stage builds help reduce the final image size by keeping only necessary files.</li>    <li><b>Example: Building a Node.js app with multi-stage builds:</b></li>    <pre><code>FROM node:14 AS builderWORKDIR /appCOPY package.json .RUN npm installCOPY . .RUN npm run buildFROM node:14WORKDIR /appCOPY --from=builder /app/dist /app/distCMD ["node", "dist/server.js"]</code></pre>    <li><b>Benefits of multi-stage builds:</b></li>    <ul>      <li>- Reduces image size.</li>      <li>- Keeps only necessary files.</li>      <li>- Improves security by excluding build tools.</li>    </ul>    <li>Multi-stage builds make Docker images more efficient and production-ready.</li>    </ul>'},{id:1,title:"link containers in Docker",content:"<h3>How do we link containers in Docker?</h3>      <ul>      <li>To link containers in Docker, we can use the <b>--link</b> flag when running a container.</li>      <li>Example:suppose we have 2 containers container1 and container2, first we can start the container using command</li>      <pre><code>docker run --name container1 -d my_image</code></pre>      <li>Then we can link the second container to the first container using the <b>--link</b> flag:</li>      <pre><code>docker run --name container2 --link container1 -d my_image</code></pre>      <li>This allows <b>container2</b> to access <b>container1</b> by its name.</li>      <li>We can also set environment variables in the linked container to access details like IP and ports.</li>      <li>Note: The <b>--link</b> flag is considered legacy. For modern setups, we should use <b>Docker networks</b> instead.</li>      <li>Linking containers is useful for simple use cases but lacks the flexibility and scalability of Docker networks.</li>      </ul>"},{id:2,title:"Docker networks",content:"<h3>What are Docker networks?</h3>      <ul>      <li><b>Docker networks</b> allow containers to communicate with each other by securely and efficiently.</li>      <li>It provide isolation and connectivity between containers</li><li>It is easier to manage multi-container applications.</li>      <li>Docker supports different network drivers like <b>bridge</b>, <b>host</b>, <b>overlay</b>, and <b>macvlan</b>.</li>      <li>By default, Docker creates a <b>bridge network</b> for containers to connect to.</li>      <li>We can use networks to enable features like DNS resolution between containers, making it easier to refer to containers by name.</li>      <li>Networks also help in isolating environments, such as separating development, testing, and production containers.</li>      <li>Overlay networks are particularly useful for multi-host Docker setups, such as in Docker Swarm.</li>      </ul>"},{id:3,title:"create custom Docker network",content:"<h3>How do we create a custom Docker network?</h3>      <ul>      <li>To create a custom Docker network, we can use the <b>docker network create</b> command.</li>      <li>Example:</li>      <pre><code>docker network create my_custom_network</code></pre>      <li>This will create a new bridge network named <b>my_custom_network</b>.</li>      <li>We can specify a custom driver using the <b>--driver</b> flag:</li>      <pre><code>docker network create --driver overlay my_overlay_network</code></pre>      <li>To connect a container to the custom network, we use the <b>--network</b> flag:</li>      <pre><code>docker run --name my_container --network my_custom_network -d my_image</code></pre>      <li>This ensures the container is part of the specified network.</li>      <li>We can also inspect the network details using:</li>      <pre><code>docker network inspect my_custom_network</code></pre>      <li>Custom networks are useful for creating isolated environments or grouping related containers together.</li>      <li>We can connect multiple containers to the same network, enabling seamless communication between them.</li>      </ul>"},{id:4,title:"bridge network driver",content:"<h3>What is the purpose of the bridge network driver in Docker?</h3>        <ul>        <li>The <b>bridge network driver</b> is Docker's default network driver.</li>        <li>It lets containers on the same host talk to each other.</li>        <li>Each container gets its own IP address in the bridge network.</li>        <li>It keeps containers separate from the host network for security.</li>        <li>Best for single-host setups.</li>        </ul>"},{id:5,title:"Docker volumes and how work",content:"<h3>What are Docker volumes and how do they work?</h3>        <ul>        <li><b>Docker volumes</b> store data outside containers.</li>        <li>They keep data safe even if containers are deleted.</li>        <li>Volumes can be shared between multiple containers.</li>        <li>Create a volume using:</li>        <pre><code>docker volume create my_volume</code></pre>        <li>Mount a volume to a container:</li>        <pre><code>docker run -v my_volume:/app/data my_image</code></pre>        <li>Volumes are managed by Docker and stored on the host.</li>        </ul>"},{id:6,title:"manage data persistence in dc",content:"<h3>How do you manage data persistence in Docker containers?</h3>        <ul>        <li>Use <b>Docker volumes</b> to save data outside containers.</li>        <li>Volumes keep data safe even if containers are removed.</li>        <li>You can also use <b>bind mounts</b> to link host folders to containers:</li>        <pre><code>docker run -v /host/path:/container/path my_image</code></pre>        <li>For cloud storage, use <b>Docker volume plugins</b>.</li>        <li>Always back up volume data to avoid losing it.</li>        <li>Use <b>docker-compose</b> to manage volumes in multi-container apps.</li>        </ul>"},{id:7,title:"update dc without losing data",content:"<h3>How do you update a Docker container without losing data?</h3>          <ul>          <li>Use <b>Docker volumes</b> to store data outside the container.</li>          <li>Stop the old container:</li>          <pre><code>docker stop old_container</code></pre>          <li>Remove the old container:</li>          <pre><code>docker rm old_container</code></pre>          <li>Run a new container with the same volume:</li>          <pre><code>docker run -v my_volume:/app/data new_image</code></pre>          <li>This keeps your data safe during updates.</li>          </ul>"},{id:8,title:"COPY vs ADD in Dockerfile",content:"<h3>What is the difference between COPY and ADD instructions in a Dockerfile?</h3>          <ul>          <li><b>COPY</b> is used to copy files or directories from the host to the container.</li>          <li>Example:</li>          <pre><code>COPY ./app /app</code></pre>          <li><b>ADD</b> can also copy files, but it has extra features like:</li>          <ul>          <li>Downloading files from URLs.</li>          <li>Automatically extracting tar files.</li>          </ul>          <li>Example:</li>          <pre><code>ADD ./app.tar.gz /app</code></pre>          <li>Use <b>COPY</b> for simplicity unless you need <b>ADD</b>'s extra features.</li>          </ul>"},{id:9,title:"Docker labels",content:'<h3>What are Docker labels and how do you use them?</h3>          <ul>          <li><b>Docker labels</b> are key-value pairs used to add metadata to Docker objects like images, containers, or networks.</li>          <li>They help organize and manage Docker resources.</li>          <li>Add labels in a Dockerfile:</li>          <pre><code>LABEL version="1.0" author="JohnDoe"</code></pre>          <li>Add labels when running a container:</li>          <pre><code>docker run --label env="production" my_image</code></pre>          <li>View labels using:</li>          <pre><code>docker inspect container_id</code></pre>          </ul>'},{id:10,title:"secure Docker containers",content:"<h3>How do you secure Docker containers?</h3>          <ul>          <li>Use <b>minimal base images</b> to reduce vulnerabilities.</li>          <li>Run containers as a <b>non-root user</b>:</li>          <pre><code>USER nobody</code></pre>          <li>Keep Docker and host systems <b>updated</b>.</li>          <li>Use <b>Docker Content Trust (DCT)</b> to verify image authenticity.</li>          <li>Limit container capabilities using <b>--cap-drop</b>:</li>          <pre><code>docker run --cap-drop ALL --cap-add NET_BIND_SERVICE my_image</code></pre>          <li>Use <b>secrets</b> for sensitive data instead of environment variables.</li>          <li>Scan images for vulnerabilities using tools like <b>Clair</b> or <b>Trivy</b>.</li>          </ul>"},{id:11,title:"create Docker Swarm cluster",content:"<h3>How do you create a Docker Swarm cluster?</h3>          <ul>          <li>Initialize a Swarm on the manager node:</li>          <pre><code>docker swarm init --advertise-addr MANAGER_IP</code></pre>          <li>Join worker nodes to the Swarm using the token provided after initialization:</li>          <pre><code>docker swarm join --token WORKER_TOKEN MANAGER_IP:2377</code></pre>          <li>Check the Swarm status:</li>          <pre><code>docker node ls</code></pre>          <li>This creates a Swarm cluster with one manager and multiple workers.</li>          </ul>"},{id:12,title:"purpose of Docker secrets",content:"<h3>What is the purpose of Docker secrets?</h3>          <ul>          <li><b>Docker secrets</b> securely manage sensitive data like passwords, API keys, or certificates.<li>          <li>Secrets are encrypted during transit and at rest.</li>          <li>They are only accessible to services that need them.</li>          <li>Secrets are stored in the Swarm's Raft database.</li>          <li>Example: Store a database password as a secret.</li>          </ul>"},{id:13,title:"manage secrets in dc Swarm",content:'<h3>How do you manage secrets in Docker Swarm?</h3>          <ul>          <li>Create a secret:</li>          <pre><code>echo "my_secret" | docker secret create my_secret -</code></pre>          <li>Use the secret in a service:</li>          <pre><code>docker service create --name my_service --secret my_secret my_image</code></pre>          <li>View secrets:</li>          <pre><code>docker secret ls</code></pre>          <li>Remove a secret:</li>          <pre><code>docker secret rm my_secret</code></pre>          <li>Secrets are mounted to containers at <b>/run/secrets/</b>.</li>          </ul>'},{id:14,title:"service discovery in dc Swarm",content:"<h3>How does Docker handle service discovery in Swarm mode?</h3>          <ul>          <li>Docker Swarm uses an <b>internal DNS server</b> for service discovery.</li>          <li>Each service gets a DNS entry based on its name.</li>          <li>Containers can communicate using the service name.</li>          <li>Example: If a service is named <b>web</b>, other containers can access it via <b>web</b>.</li>          <li>Swarm automatically updates DNS entries when services scale or change.</li>          </ul>"},{id:15,title:"Docker overlay networking",content:"<h3>What is Docker overlay networking?</h3>          <ul>          <li><b>Overlay networking</b> allows containers on different hosts to communicate securely.</li>          <li>It’s used in Docker Swarm for multi-host communication.</li>          <li>Create an overlay network:</li>          <pre><code>docker network create --driver overlay my_overlay_network</code></pre>          <li>Services in the same overlay network can talk to each other.</li>          <li>Overlay networks encrypt traffic by default.</li>          </ul>"},{id:16,title:"purpose of dc orchestration",content:"<h3>What is the purpose of Docker container orchestration?</h3>          <ul>          <li><b>Container orchestration</b> automates deployment, scaling, and management of containers.</li>          <li>It ensures high availability and load balancing.</li>          <li>Tools like <b>Docker Swarm</b> and <b>Kubernetes</b> handle orchestration.</li>          <li>Orchestration helps manage multi-container applications across multiple hosts.</li>          <li>It simplifies tasks like rolling updates and self-healing.</li>          </ul>"},{id:17,title:"monitor Docker containers",content:"<h3>How do you monitor Docker containers?</h3>          <ul>          <li>Use <b>docker stats</b> to view real-time resource usage:</li>          <pre><code>docker stats</code></pre>          <li>Check container logs:</li>          <pre><code>docker logs container_id</code></pre>          <li>Use monitoring tools like <b>Prometheus</b>, <b>Grafana</b>, or <b>cAdvisor</b>.</li>          <li>Enable Docker's built-in metrics endpoint:</li>          <pre><code>docker run -d --name my_container --metrics-addr 0.0.0.0:9323 my_image</code></pre>          <li>Set up alerts for resource thresholds using tools like <b>Alertmanager</b>.</li>          </ul>"},{id:18,title:"using Docker in production",content:'<h3>What are some best practices for using Docker in production environments?</h3>    <ul>    <li>Use <b>minimal base images</b> to reduce attack surface.</li>    <li>Run containers as a <b>non-root user</b> for security.</li>    <li>Use <b>Docker secrets</b> for sensitive data like passwords.</li>    <li>Monitor containers using tools like <b>Prometheus</b> or <b>cAdvisor</b>.</li>    <li>Set resource limits to prevent overuse:</li>    <pre><code>docker run --memory="512m" --cpus="1" my_image</code></pre>    <li>Keep Docker and host systems <b>updated</b>.</li>    <li>Use <b>health checks</b> to ensure container availability.</li>    </ul>'},{id:19,title:"automate deployment of dc",content:"<h3>How do you automate the deployment of Docker containers?</h3>    <ul>    <li>Use <b>CI/CD pipelines</b> with tools like Jenkins, GitLab CI, or GitHub Actions.</li>    <li>Build Docker images automatically on code changes:</li>    <pre><code>docker build -t my_image .</code></pre>    <li>Push images to a <b>Docker registry</b>:</li>    <pre><code>docker push my_registry/my_image</code></pre>    <li>Deploy containers using <b>docker-compose</b> or <b>Kubernetes</b>.</li>    <li>Example of a simple pipeline:</li>    <pre><code>build -> test -> push -> deploy</code></pre>    </ul>"},{id:20,title:"rolling updates in dc Swarm",content:"<h3>How do you perform rolling updates in Docker Swarm?</h3>    <ul>    <li>Update a service with a new image:</li>    <pre><code>docker service update --image new_image my_service</code></pre>    <li>Swarm updates containers one by one to ensure zero downtime.</li>    <li>Control the update process with:</li>    <ul>    <li><b>--update-parallelism</b>: Number of containers to update at once.</li>    <li><b>--update-delay</b>: Time between updates.</li>    </ul>    <li>Roll back to a previous version if needed:</li>    <pre><code>docker service rollback my_service</code></pre>    </ul>"},{id:21,title:"Docker content trust",content:"<h3>What is Docker content trust?</h3>    <ul>    <li><b>Docker Content Trust (DCT)</b> ensures the authenticity of Docker images.</li>    <li>It uses digital signatures to verify images.</li>    <li>Enable DCT by setting:</li>    <pre><code>export DOCKER_CONTENT_TRUST=1</code></pre>    <li>Only signed images can be pulled or run when DCT is enabled.</li>    <li>Prevents the use of tampered or unauthorized images.</li>    </ul>"},{id:22,title:"use Docker with Kubernetes",content:`<h3>How do you use Docker with Kubernetes?</h3>    <ul>    <li>Build Docker images and push them to a registry.</li>    <li>Create a <b>Kubernetes deployment</b> YAML file:</li>    <pre><code>apiVersion: apps/v1
kind: Deployment
metadata:
  name: my_app
spec:
  repli3
  template:
    spec:
      containers:
      - name: my_container
        immy_registry/my_image</code></pre>    <li>Deploy the application:</li>    <pre><code>kubectl apply -f deployment.yaml</code></pre>    <li>Kubernetes manages scaling, updates, and networking for Docker containers.</li>    </ul>`},{id:23,title:" Docker Swarm HashiCorp Nomad",content:"<h3>What are the differences between Docker Swarm and HashiCorp Nomad?</h3>    <ul>    <li><b>Docker Swarm</b>:</li>    <ul>    <li>Built into Docker.</li>    <li>Easy to set up and use.</li>    <li>Best for small to medium-scale deployments.</li>    </ul>    <li><b>HashiCorp Nomad</b>:</li>    <ul>    <li>Supports Docker and other workloads (VMs, binaries).</li>    <li>More flexible and scalable.</li>    <li>Requires additional setup and learning.</li>    </ul>    <li>Choose Swarm for simplicity, Nomad for flexibility.</li>    </ul>"},{id:24,title:"automatic container restarts",content:"<h3>How do you configure automatic container restarts in Docker?</h3>    <ul>    <li>Use the <b>--restart</b> policy when running a container:</li>    <pre><code>docker run --restart always my_image</code></pre>    <li>Restart policies:</li>    <ul>    <li><b>no</b>: Do not restart (default).</li>    <li><b>on-failure</b>: Restart only if the container fails.</li>    <li><b>always</b>: Always restart, even if stopped manually.</li>    <li><b>unless-stopped</b>: Always restart, unless explicitly stopped.</li>    </ul>    </ul>"},{id:25,title:"role of Docker API in con mana",content:"<h3>What is the role of the Docker API in container management?</h3>    <ul>    <li>The <b>Docker API</b> allows programmatic control of Docker.</li>    <li>It enables automation of container management tasks.</li>    <li>Examples:</li>    <ul>    <li>Start/stop containers.</li>    <li>Build and push images.</li>    <li>Manage networks and volumes.</li>    </ul>    <li>Access the API using HTTP requests or SDKs (e.g., Python, Go).</li>    <li>Secure the API with TLS to prevent unauthorized access.</li>    </ul>"},{id:26,title:"share data between containers",content:"<h3>How do you share data between containers in Docker?</h3>    <ul>    <li>Use <b>Docker volumes</b> to share data:</li>    <pre><code>docker volume create shared_volume</code></pre>    <li>Mount the volume to multiple containers:</li>    <pre><code>docker run -v shared_volume:/data container1</code></pre>    <pre><code>docker run -v shared_volume:/data container2</code></pre>    <li>Use <b>bind mounts</b> to share host directories:</li>    <pre><code>docker run -v /host/path:/container/path my_container</code></pre>    <li>For temporary sharing, use <b>--volumes-from</b>:</li>    <pre><code>docker run --volumes-from container1 my_container</code></pre>    </ul>"},{id:27,title:"manage network connectivity",content:"<h3>How do you manage network connectivity between Docker containers and the host machine?</h3>    <ul>    <li>Use <b>bridge networking</b> for container-to-host communication.</li>    <li>Expose container ports to the host using <b>-p</b>:</li>    <pre><code>docker run -p 8080:80 my_image</code></pre>    <li>Access the container from the host using <b>localhost:8080</b>.</li>    <li>For host-to-container communication, use the container's IP address.</li>    <li>Use <b>host networking</b> to share the host's network stack:</li>    <pre><code>docker run --network host my_image</code></pre>    <li>This removes isolation between the container and host network.</li>    </ul>"},{id:28,title:"docker network inspect command",content:"<h3>What is the purpose of the 'docker network inspect' command?</h3>    <ul>    <li>The <b>docker network inspect</b> command shows detailed information about a Docker network.</li>    <li>Example:</li>    <pre><code>docker network inspect my_network</code></pre>    <li>It displays:</li>    <ul>    <li>Network name and ID.</li>    <li>Driver type (e.g., bridge, overlay).</li>    <li>Connected containers and their IP addresses.</li>    <li>Subnet and gateway details.</li>    </ul>    <li>Useful for troubleshooting network issues.</li>    </ul>"},{id:29,title:"configure health checks for dc",content:`<h3>How do you configure health checks for Docker containers?</h3>    <ul>    <li>Add a <b>HEALTHCHECK</b> instruction in the Dockerfile:</li>    <pre><code>HEALTHCHECK --interval=30s --timeout=10s --retries=3 \\
  CMD curl -f http://localhost/ || exit 1</code></pre>    <li>Or set health checks when running a container:</li>    <pre><code>docker run --health-cmd="curl -f http://localhost/ || exit 1" \\
  --health-interval=30s --health-timeout=10s --health-retries=3 my_image</code></pre>    <li>Check container health status:</li>    <pre><code>docker inspect --format='{{.State.Health.Status}}' container_id</code></pre>    <li>Health checks ensure containers are running as expected.</li>    </ul>`},{id:30,title:"configure custom logging driver",content:"<h3>How do you configure a custom logging driver in Docker?</h3>    <ul>    <li>Use the <b>--log-driver</b> flag when running a container:</li>    <pre><code>docker run --log-driver=json-file --log-opt max-size=10m my_image</code></pre>    <li>Supported logging drivers:</li>    <ul>    <li><b>json-file</b>: Default driver (stores logs as JSON files).</li>    <li><b>syslog</b>: Sends logs to a syslog server.</li>    <li><b>fluentd</b>: Sends logs to a Fluentd server.</li>    <li><b>awslogs</b>: Sends logs to AWS CloudWatch.</li>    </ul>    <li>Configure logging options using <b>--log-opt</b>:</li>    <pre><code>docker run --log-driver=syslog --log-opt syslog-address=udp://logs.example.com my_image</code></pre>    </ul>"},{id:31,title:"docker system prune command",content:"<h3>What is the purpose of the 'docker system prune' command?</h3>    <ul>    <li>The <b>docker system prune</b> command cleans up unused Docker objects.</li>    <li>Removes:</li>    <ul>    <li>Stopped containers.</li>    <li>Unused networks.</li>    <li>Dangling images.</li>    <li>Build cache.</li>    </ul>    <li>Run the command:</li>    <pre><code>docker system prune</code></pre>    <li>Add <b>-a</b> to remove all unused images (not just dangling):</li>    <pre><code>docker system prune -a</code></pre>    <li>Add <b>--volumes</b> to remove unused volumes:</li>    <pre><code>docker system prune --volumes</code></pre>    <li>Frees up disk space.</li>    </ul>"},{id:32,title:"Docker secrets in non-Swarm env",content:'<h3>How do you use Docker secrets in a non-Swarm environment?</h3>    <ul>    <li>Docker secrets are designed for Swarm, but you can simulate them in non-Swarm environments.</li>    <li>Use <b>bind mounts</b> to inject secrets as files:</li>    <pre><code>docker run -v /path/to/secret:/run/secrets/my_secret my_image</code></pre>    <li>Access the secret in the container at <b>/run/secrets/my_secret</b>.</li>    <li>Alternatively, use environment variables (less secure):</li>    <pre><code>docker run -e MY_SECRET="secret_value" my_image</code></pre>    <li>For better security, use third-party tools like <b>Vault</b> or <b>AWS Secrets Manager</b>.</li>    </ul>'},{id:1,title:"achi high avail in Docker Swarm",content:"<h3>How do you achieve high availability with Docker Swarm?</h3>    <ul>    <li>Use <b>multiple manager nodes</b> to ensure fault tolerance.</li>    <li>Deploy services with <b>replicas</b> to distribute workloads:</li>    <pre><code>docker service create --replicas 3 my_image</code></pre>    <li>Use <b>health checks</b> to monitor container status.</li>    <li>Ensure proper <b>resource allocation</b> to prevent overloading.</li>    <li>Use <b>overlay networks</b> for seamless communication between nodes.</li>    <li>Regularly back up Swarm configurations and data.</li>    </ul>"},{id:2,title:"Docker Swarm & Kubernetes",content:"<h3>What are the differences between Docker Swarm and Kubernetes?</h3>    <ul>    <li><b>Docker Swarm</b>:</li>    <ul>    <li>Built into Docker.</li>    <li>Easy to set up and use.</li>    <li>Best for small to medium-scale deployments.</li>    </ul>    <li><b>Kubernetes</b>:</li>    <ul>    <li>More complex but highly scalable.</li>    <li>Supports advanced features like auto-scaling and rolling updates.</li>    <li>Better for large-scale, production-grade deployments.</li>    </ul>    <li>Choose Swarm for simplicity, Kubernetes for advanced needs.</li>    </ul>"},{id:3,title:"imp blue-green deployments",content:"<h3>How do you implement blue-green deployments with Docker?</h3>    <ul>    <li>Run two identical environments: <b>blue</b> (current) and <b>green</b> (new).</li>    <li>Deploy the new version to the green environment:</li>    <pre><code>docker-compose -f docker-compose-green.yml up -d</code></pre>    <li>Test the green environment to ensure it works.</li>    <li>Switch traffic from blue to green by updating the load balancer or DNS.</li>    <li>Decommission the blue environment after the switch.</li>    <li>This ensures zero downtime during updates.</li>    </ul>"},{id:4,title:"dc Config feature Swarm mode",content:"<h3>What is the purpose of the Docker Config feature in Swarm mode?</h3>    <ul>    <li><b>Docker Config</b> securely manages non-sensitive configuration files in Swarm.</li>    <li>Store configuration files like JSON, XML, or YAML:</li>    <pre><code>docker config create my_config config_file.json</code></pre>    <li>Use the config in a service:</li>    <pre><code>docker service create --name my_service --config src=my_config,target=/app/config.json my_image</code></pre>    <li>Configs are encrypted and only accessible to services that use them.</li>    <li>Ideal for managing application settings.</li>    </ul>"},{id:5,title:"manage secrets in Docker",content:'<h3>How do you manage secrets in Docker using external secret stores?</h3>    <ul>    <li>Use tools like <b>HashiCorp Vault</b>, <b>AWS Secrets Manager</b>, or <b>Azure Key Vault</b>.</li>    <li>Fetch secrets at runtime using environment variables or API calls.</li>    <li>Example with HashiCorp Vault:</li>    <pre><code>docker run -e SECRET="$(vault read -field=value secret/my_secret)" my_image</code></pre>    <li>For Swarm, use Docker secrets with external integrations:</li>    <pre><code>docker secret create my_secret <(vault read -field=value secret/my_secret)</code></pre>    <li>This ensures secrets are securely managed outside Docker.</li>    </ul>'},{id:6,title:"health check feature",content:`<h3>What is the purpose of the health check feature in Docker?</h3>    <ul>    <li><b>Health checks</b> monitor the status of containers.</li>    <li>Ensure containers are running as expected.</li>    <li>Automatically restart unhealthy containers.</li>    <li>Example in Dockerfile:</li>    <pre><code>HEALTHCHECK --interval=30s --timeout=10s --retries=3 \\
  CMD curl -f http://localhost/ || exit 1</code></pre>    <li>Check health status:</li>    <pre><code>docker inspect --format='{{.State.Health.Status}}' container_id</code></pre>    <li>Improves application reliability.</li>    </ul>`},{id:7,title:"manage secrets in Dockerized app",content:"<h3>How do you securely manage secrets in a Dockerized application?</h3>    <ul>    <li>Use <b>Docker secrets</b> in Swarm mode for encryption and access control.</li>    <li>Store secrets in external tools like <b>HashiCorp Vault</b> or <b>AWS Secrets Manager</b>.</li>    <li>Avoid hardcoding secrets in Dockerfiles or environment variables.</li>    <li>Use <b>bind mounts</b> to inject secrets as files:</li>    <pre><code>docker run -v /path/to/secret:/run/secrets/my_secret my_image</code></pre>    <li>Rotate secrets regularly to minimize risks.</li>    </ul>"},{id:8,title:"load balancing Docker Swarm",content:"<h3>How do you achieve load balancing with Docker Swarm?</h3>    <ul>    <li>Docker Swarm provides <b>built-in load balancing</b>.</li>    <li>Use the <b>--publish</b> flag to expose services:</li>    <pre><code>docker service create --name my_service --publish 8080:80 my_image</code></pre>    <li>Swarm automatically distributes traffic across replicas.</li>    <li>Use <b>overlay networks</b> for multi-host communication.</li>    <li>For advanced load balancing, integrate with tools like <b>NGINX</b> or <b>HAProxy</b>.</li>    </ul>"},{id:9,title:"support for GPU acceleration",content:`<h3>What is Docker's support for GPU acceleration?</h3>    <ul>    <li>Docker supports GPU acceleration using <b>NVIDIA GPUs</b>.</li>    <li>Install the <b>NVIDIA Container Toolkit</b>:</li>    <pre><code>distribution=$(. /etc/os-release;echo $ID$VERSION_ID) \\
  && curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add - \\
  && curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list</code></pre>    <li>Run containers with GPU access:</li>    <pre><code>docker run --gpus all nvidia/cuda:11.0-base nvidia-smi</code></pre>    <li>Useful for machine learning, AI, and high-performance computing.</li>    </ul>`},{id:10,title:"troubleshoot issues with dc",content:"<h3>How do you troubleshoot issues with Docker containers?</h3>    <ul>    <li>Check container logs:</li>    <pre><code>docker logs container_id</code></pre>    <li>Inspect container details:</li>    <pre><code>docker inspect container_id</code></pre>    <li>Check container status:</li>    <pre><code>docker ps -a</code></pre>    <li>Run a shell inside the container for debugging:</li>    <pre><code>docker exec -it container_id /bin/sh</code></pre>    <li>Test network connectivity:</li>    <pre><code>docker exec container_id ping google.com</code></pre>    <li>Review Docker daemon logs for system-level issues:</li>    <pre><code>journalctl -u docker.service</code></pre>    </ul>"},{id:11,title:"security vulnerabilities mitigation",content:'<h3>What are some common Docker security vulnerabilities and how do you mitigate them?</h3>    <ul>    <li><b>Running as root</b>: Run containers as a non-root user.</li>    <li><b>Exposed ports</b>: Only expose necessary ports.</li>    <li><b>Outdated images</b>: Use minimal and updated base images.</li>    <li><b>Secrets in images</b>: Use Docker secrets or external tools like Vault.</li>    <li><b>Unrestricted resource usage</b>: Set resource limits:</li>    <pre><code>docker run --memory="512m" --cpus="1" my_image</code></pre>    <li><b>Network isolation</b>: Use bridge networks and avoid host networking.</li>    <li>Regularly scan images for vulnerabilities using tools like <b>Clair</b> or <b>Trivy</b>.</li>    </ul>'},{id:12,title:"monitor dc resource usage",content:"<h3>How do you monitor Docker container resource usage?</h3>    <ul>    <li>Use <b>docker stats</b> for real-time resource usage:</li>    <pre><code>docker stats</code></pre>    <li>Inspect container resource usage:</li>    <pre><code>docker inspect container_id</code></pre>    <li>Use monitoring tools like <b>Prometheus</b>, <b>Grafana</b>, or <b>cAdvisor</b>.</li>    <li>Enable Docker's built-in metrics endpoint:</li>    <pre><code>docker run -d --name my_container --metrics-addr 0.0.0.0:9323 my_image</code></pre>    <li>Set up alerts for resource thresholds using tools like <b>Alertmanager</b>.</li>    </ul>"},{id:13,title:"automate scaling of ds in sm",content:`<h3>How do you automate the scaling of Docker services in Swarm mode?</h3>    <ul>    <li>Use the <b>docker service scale</b> command:</li>    <pre><code>docker service scale my_service=5</code></pre>    <li>For auto-scaling, integrate with tools like <b>Prometheus</b> and <b>cAdvisor</b>.</li>    <li>Set up custom scripts to monitor metrics and scale services dynamically.</li>    <li>Example: Scale based on CPU usage.</li>    <li>Use <b>docker-compose</b> with <b>replicas</b> for simple scaling:</li>    <pre><code>deploy:
  replicas: 5</code></pre>    </ul>`},{id:14,title:"Docker Machine",content:"<h3>What is Docker Machine and how is it used?</h3>    <ul>    <li><b>Docker Machine</b> is a tool to provision and manage Docker hosts.</li>    <li>It supports local (VirtualBox) and cloud providers (AWS, Azure).</li>    <li>Create a Docker host:</li>    <pre><code>docker-machine create --driver virtualbox my_vm</code></pre>    <li>List machines:</li>    <pre><code>docker-machine ls</code></pre>    <li>Connect to a machine:</li>    <pre><code>eval $(docker-machine env my_vm)</code></pre>    <li>Docker Machine is deprecated but still used in legacy setups.</li>    </ul>"},{id:15,title:"use different container runtime",content:`<h3>How do you configure Docker to use a different container runtime?</h3>    <ul>    <li>Edit the Docker daemon configuration file (<b>/etc/docker/daemon.json</b>):</li>    <pre><code>{
  "runtimes": {
    "my_runtime": {
      "path": "/path/to/runtime"
    }
  }
}</code></pre>    <li>Restart the Docker daemon:</li>    <pre><code>sudo systemctl restart docker</code></pre>    <li>Run a container with the custom runtime:</li>    <pre><code>docker run --runtime=my_runtime my_image</code></pre>    <li>Supported runtimes include <b>runc</b>, <b>gVisor</b>, and <b>Kata Containers</b>.</li>    </ul>`},{id:16,title:"purpose Docker namespaces",content:"<h3>What is the purpose of Docker namespaces?</h3>    <ul>    <li><b>Docker namespaces</b> isolate containers from each other and the host.</li>    <li>Types of namespaces:</li>    <ul>    <li><b>PID</b>: Isolates process IDs.</li>    <li><b>Network</b>: Isolates network interfaces.</li>    <li><b>Mount</b>: Isolates filesystem mounts.</li>    <li><b>IPC</b>: Isolates inter-process communication.</li>    <li><b>UTS</b>: Isolates hostname and domain name.</li>    <li><b>User</b>: Isolates user and group IDs.</li>    </ul>    <li>Namespaces ensure containers run securely and independently.</li>    </ul>"},{id:17,title:"limit resources consumed",content:`<h3>How do you limit the resources consumed by a Docker container?</h3>    <ul>    <li>Set memory limits:</li>    <pre><code>docker run --memory="512m" my_image</code></pre>    <li>Set CPU limits:</li>    <pre><code>docker run --cpus="1.5" my_image</code></pre>    <li>Limit disk I/O:</li>    <pre><code>docker run --device-read-bps /dev/sda:1mb my_image</code></pre>    <li>Set resource limits in Docker Compose:</li>    <pre><code>deploy:
  resources:
    limits:
      cpus: '1.5'
      memory: 512m</code></pre>    <li>Prevents containers from overusing host resources.</li>    </ul>`},{id:18,title:"configure network policies",content:"<h3>How do you configure network policies in Docker?</h3>    <ul>    <li>Use <b>overlay networks</b> in Swarm mode for secure communication.</li>    <li>Restrict container access using <b>firewall rules</b> or <b>iptables</b>.</li>    <li>Use <b>network plugins</b> like Calico or Weave for advanced policies.</li>    <li>Example: Allow only specific containers to communicate:</li>    <pre><code>docker network create --driver overlay --subnet 10.0.0.0/24 my_network</code></pre>    <li>Apply policies using labels or network segmentation.</li>    </ul>"},{id:19,title:"Docker image & a Docker layer",content:"<h3>What is the difference between a Docker image and a Docker layer?</h3>    <ul>    <li>A <b>Docker image</b> is a collection of layers that make up a container.</li>    <li>Each <b>layer</b> represents a change in the filesystem (e.g., adding a file or running a command).</li>    <li>Layers are read-only and shared across images to save space.</li>    <li>Example: A Dockerfile with multiple commands creates multiple layers.</li>    <li>When you pull or push an image, only the missing layers are transferred.</li>    <li>Layers improve build efficiency and reduce storage usage.</li>    </ul>"},{id:20,title:"manage Docker container logs",content:"<h3>How do you manage Docker container logs?</h3>    <ul>    <li>View logs for a container:</li>    <pre><code>docker logs container_id</code></pre>    <li>Follow logs in real-time:</li>    <pre><code>docker logs -f container_id</code></pre>    <li>Limit log size and rotation:</li>    <pre><code>docker run --log-opt max-size=10m --log-opt max-file=3 my_image</code></pre>    <li>Use custom logging drivers (e.g., JSON-file, syslog, fluentd):</li>    <pre><code>docker run --log-driver=json-file my_image</code></pre>    <li>Centralize logs using tools like <b>ELK Stack</b> or <b>Fluentd</b>.</li>    </ul>"},{id:21,title:"Docker secrets in Swarm mode",content:'<h3>What is the purpose of Docker secrets in Swarm mode?</h3>    <ul>    <li><b>Docker secrets</b> securely manage sensitive data like passwords, API keys, or certificates.</li>    <li>Secrets are encrypted during transit and at rest.</li>    <li>They are only accessible to services that need them.</li>    <li>Example: Store a database password as a secret:</li>    <pre><code>echo "my_password" | docker secret create db_password -</code></pre>    <li>Use secrets in a service:</li>    <pre><code>docker service create --name my_service --secret db_password my_image</code></pre>    <li>Secrets are mounted to containers at <b>/run/secrets/</b>.</li>    </ul>'},{id:22,title:"manage di in private registry",content:"<h3>How do you manage Docker images in a private registry?</h3>    <ul>    <li>Set up a private registry using <b>Docker Registry</b> or cloud services like <b>AWS ECR</b> or <b>Azure ACR</b>.</li>    <li>Push images to the registry:</li>    <pre><code>docker tag my_image my_registry/my_image</code></pre>    <pre><code>docker push my_registry/my_image</code></pre>    <li>Pull images from the registry:</li>    <pre><code>docker pull my_registry/my_image</code></pre>    <li>Authenticate with the registry:</li>    <pre><code>docker login my_registry</code></pre>    <li>Manage access control and permissions for the registry.</li>    </ul>"},{id:23,title:"perform load testing on di",content:"<h3>How do you perform load testing on Docker containers?</h3>    <ul>    <li>Use tools like <b>Apache JMeter</b>, <b>k6</b>, or <b>Locust</b>.</li>    <li>Run the load testing tool in a container:</li>    <pre><code>docker run -it --rm my_load_test_tool</code></pre>    <li>Monitor container resource usage during the test:</li>    <pre><code>docker stats</code></pre>    <li>Analyze logs and metrics to identify bottlenecks.</li>    <li>Scale services based on test results.</li>    </ul>"},{id:24,title:"custom Docker network driver",content:"<h3>How do you create a custom Docker network driver?</h3>    <ul>    <li>Develop a custom network driver using Docker's <b>libnetwork</b> plugin system.</li>    <li>Install the driver on the Docker host.</li>    <li>Create a network using the custom driver:</li>    <pre><code>docker network create --driver my_custom_driver my_network</code></pre>    <li>Use the network in a container:</li>    <pre><code>docker run --network my_network my_image</code></pre>    <li>Custom drivers are useful for advanced networking scenarios.</li>    </ul>"},{id:25,title:"Docker content trust feature",content:"<h3>What is the purpose of the Docker content trust feature?</h3>    <ul>    <li><b>Docker Content Trust (DCT)</b> ensures the authenticity of Docker images.</li>    <li>It uses digital signatures to verify images.</li>    <li>Enable DCT by setting:</li>    <pre><code>export DOCKER_CONTENT_TRUST=1</code></pre>    <li>Only signed images can be pulled or run when DCT is enabled.</li>    <li>Prevents the use of tampered or unauthorized images.</li>    </ul>"},{id:26,title:"rolling updates w Dcr Compose",content:"<h3>How do you perform rolling updates with Docker Compose?</h3>    <ul>    <li>Update the Docker Compose file with the new image version.</li>    <li>Run the update command:</li>    <pre><code>docker-compose up -d</code></pre>    <li>Docker Compose updates containers one by one to ensure zero downtime.</li>    <li>Use <b>health checks</b> to ensure containers are ready before updating the next one.</li>    <li>Roll back to a previous version if needed:</li>    <pre><code>docker-compose down && docker-compose up -d</code></pre>    </ul>"},{id:27,title:"service discovery & lb in kubr",content:`<h3>How do you implement service discovery and load balancing in Kubernetes?</h3>    <ul>    <li>Use <b>Kubernetes Services</b> for service discovery and load balancing.</li>    <li>Create a Service YAML file:</li>    <pre><code>apiVersion: v1
kind: Service
metadata:
  name: my_service
spec:
  selector:
    app: my_app
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080</code></pre>    <li>Deploy the Service:</li>    <pre><code>kubectl apply -f service.yaml</code></pre>    <li>Kubernetes automatically assigns a ClusterIP and handles load balancing.</li>    <li>For external access, use <b>NodePort</b> or <b>LoadBalancer</b> type.</li>    <li>Example of LoadBalancer:</li>    <pre><code>spec:
  type: LoadBalancer</code></pre>    </ul>`},{id:28,title:"Docker plugin system",content:"<h3>What is the purpose of the Docker plugin system?</h3>      <ul>      <li>The <b>Docker plugin system</b> extends Docker's functionality.</li>      <li>Plugins add features like:</li>      <ul>      <li>Custom network drivers.</li>      <li>Volume plugins for external storage.</li>      <li>Logging plugins for centralized logging.</li>      </ul>      <li>Install and manage plugins using:</li>      <pre><code>docker plugin install plugin_name</code></pre>      <li>Example: Use a volume plugin for cloud storage.</li>      <li>Plugins make Docker more flexible and adaptable.</li>      </ul>"},{id:29,title:"confi Dcr diff storage driver",content:`<h3>How do you configure Docker to use a different storage driver?</h3>      <ul>      <li>Edit the Docker daemon configuration file (<b>/etc/docker/daemon.json</b>):</li>      <pre><code>{
  "storage-driver": "overlay2"
}</code></pre>      <li>Supported drivers include <b>overlay2</b>, <b>aufs</b>, <b>btrfs</b>, and <b>zfs</b>.</li>      <li>Restart the Docker daemon:</li>      <pre><code>sudo systemctl restart docker</code></pre>      <li>Verify the storage driver:</li>      <pre><code>docker info | grep Storage</code></pre>      <li>Choose a driver based on your host's filesystem and performance needs.</li>      </ul>`},{id:30,title:"imp canary deployments",content:`<h3>How do you implement canary deployments with Docker and Kubernetes?</h3>      <ul>      <li>Deploy a new version of your application to a small subset of users.</li>      <li>In Kubernetes, use <b>Deployments</b> and <b>Services</b>:</li>      <pre><code>apiVersion: apps/v1
kind: Deployment
metadata:
  name: my_app_canary
spec:
  replicas: 1
  template:
    spec:
      containers:
      - name: my_container
        image: new_image</code></pre>      <li>Route a small percentage of traffic to the canary deployment.</li>      <li>Monitor performance and errors.</li>      <li>If the canary succeeds, scale up the new version and remove the old one.</li>      <li>If it fails, roll back to the previous version.</li>      </ul>`},{id:31,title:"Docker CE and Docker EE",content:"<h3>What are the differences between Docker Community Edition (CE) and Docker Enterprise Edition (EE)?</h3>      <ul>      <li><b>Docker CE</b>:</li>      <ul>      <li>Free and open-source.</li>      <li>Ideal for developers and small teams.</li>      <li>Basic features for container management.</li>      </ul>      <li><b>Docker EE</b>:</li>      <ul>      <li>Paid version with advanced features.</li>      <li>Includes enterprise-grade security, support, and management tools.</li>      <li>Certified plugins and integrations.</li>      <li>Ideal for large-scale production environments.</li>      </ul>      <li>Choose CE for personal use, EE for enterprise needs.</li>      </ul>"},{id:32,title:"use private image registry",content:"<h3>How do you configure Docker to use a private image registry?</h3>      <ul>      <li>Log in to the private registry:</li>      <pre><code>docker login my_registry</code></pre>      <li>Tag the image with the registry URL:</li>      <pre><code>docker tag my_image my_registry/my_image</code></pre>      <li>Push the image to the registry:</li>      <pre><code>docker push my_registry/my_image</code></pre>      <li>Pull the image from the registry:</li>      <pre><code>docker pull my_registry/my_image</code></pre>      <li>Use the image in a container:</li>      <pre><code>docker run my_registry/my_image</code></pre>      </ul>"},{id:33,title:"docker checkpoint command",content:"<h3>What is the purpose of the 'docker checkpoint' command?</h3>      <ul>      <li>The <b>docker checkpoint</b> command saves the state of a running container.</li>      <li>Useful for:</li>      <ul>      <li>Pausing and resuming containers.</li>      <li>Migrating containers between hosts.</li>      </ul>      <li>Create a checkpoint:</li>      <pre><code>docker checkpoint create my_container my_checkpoint</code></pre>      <li>Restore from a checkpoint:</li>      <pre><code>docker start --checkpoint my_checkpoint my_container</code></pre>      <li>Requires the <b>--live-restore</b> option to be enabled.</li>      </ul>"},{id:34,title:"use IPv6 networking",content:`<h3>How do you configure Docker to use IPv6 networking?</h3>      <ul>      <li>Edit the Docker daemon configuration file (<b>/etc/docker/daemon.json</b>):</li>      <pre><code>{
  "ipv6": true,
  "fixed-cidr-v6": "2001:db8::/64"
}</code></pre>      <li>Restart the Docker daemon:</li>      <pre><code>sudo systemctl restart docker</code></pre>      <li>Create an IPv6-enabled network:</li>      <pre><code>docker network create --ipv6 --subnet=2001:db8::/64 my_network</code></pre>      <li>Run a container with IPv6:</li>      <pre><code>docker run --network my_network my_image</code></pre>      <li>Verify IPv6 connectivity:</li>      <pre><code>docker exec container_id ping6 google.com</code></pre>      </ul>`},{id:35,title:"containerd in Dckr ecosystem",content:"<h3>What is the role of containerd in the Docker ecosystem?</h3>      <ul>      <li><b>containerd</b> is a core container runtime used by Docker.</li>      <li>It manages container lifecycle operations like:</li>      <ul>      <li>Starting and stopping containers.</li>      <li>Pulling and managing images.</li>      <li>Handling storage and networking.</li>      </ul>      <li>Docker uses containerd as an intermediate layer for container management.</li>      <li>containerd is also used by other tools like <b>Kubernetes</b>.</li>      <li>It provides a stable and efficient runtime for containers.</li>      </ul>"},{id:36,title:"live migration of dc between hosts",content:"<h3>How do you perform a live migration of Docker containers between hosts?</h3>      <ul>      <li>Use <b>checkpoint/restore</b> to save and move container state.</li>      <li>Create a checkpoint on the source host:</li>      <pre><code>docker checkpoint create my_container my_checkpoint</code></pre>      <li>Copy the checkpoint data to the target host.</li>      <li>Restore the container on the target host:</li>      <pre><code>docker start --checkpoint my_checkpoint my_container</code></pre>      <li>Ensure both hosts have the same Docker version and configuration.</li>      <li>Live migration is experimental and requires additional tools like <b>CRIU</b>.</li>      </ul>"}],Nf=()=>B.jsx(gt,{links:Wf}),jf=[{id:"1",title:"Reactjs? Use Cases",content:`<section>
      <h3>What is React?</h3>
      <p>React is a popular JavaScript library for building user interfaces, developed by Facebook. It is widely used for creating web applications due to its efficiency, flexibility, and component-based architecture.</p>
      
      <h3>Why is React used?</h3>
      <ul>
        <li>React allows developers to build reusable UI components.</li>
        <li>It uses a virtual DOM for fast rendering and updates.</li>
        <li>It supports a declarative programming style for easier debugging and maintenance.</li>
        <li>React's ecosystem supports seamless integration with other tools and libraries.</li>
      </ul>
  
      <h3>How React Works?</h3>
      <p>React creates a virtual DOM. When the state changes in a component, it first runs a "diffing" algorithm, which identifies what has changed in the virtual DOM. The second step is reconciliation, where it updates the DOM with the results of diff.</p>
  
      <h3>Use Cases</h3>
      <ul>
        <li>Single Page Applications (SPAs).</li>
        <li>Interactive dashboards and data-driven UIs.</li>
        <li>Mobile applications using React Native.</li>
        <li>Real-time applications like chat apps, collaboration tools.</li>
        <li>Progressive Web Applications (PWAs).</li>
      </ul>
  
      <h3>Advantages</h3>
      <ul>
        <li>It is easy to know how a component is rendered, we just need to look at the render function.</li>
        <li>JSX makes it easy to read the code of the components.</li>
        <li>It is also really easy to see the layout, or how components are plugged/combined.</li>
        <li>We can render React on the server side. This improves SEO and performance.</li>
        <li>It is easy to test.</li>
        <li>We can use React with any framework we want as it is only a view layer.</li>
      </ul>
  
      <h3>Disadvantages</h3>
      <ul>
        <li>Lack of Proper Documentation</li>
        <li>Development Speed</li>
        <li>JSX Complexity</li>
        <li>Problems With SEO</li>
      </ul>
    </section>`,link:"https://www.geeksforgeeks.org/what-are-the-limitations-of-react-js/"}],Hf=[...jf],Bf=()=>B.jsx(gt,{links:Hf}),qf=[{id:1,title:"Angular? its use cases feature",content:`
      <section>
        <h3>What is Angular?</h3>
        <ul>
          <li>Angular is an open-source front-end web framework developed by Google.</li>
          <li>It is based on TypeScript, which adds strong typing and modern JavaScript features.</li>
          <li>It helps build Single Page Applications (SPAs) with a clear structure and components.</li>
          <li>Angular includes everything needed to develop full-featured web apps, like routing, forms, and HTTP handling.</li>
        </ul>
        <h4>Use Cases</h4>
        <ul>
          <li>Creating web dashboards for internal tools or enterprise systems.</li>
          <li>Building single-page apps that update data without refreshing the page.</li>
          <li>Developing Progressive Web Apps (PWAs) that work offline.</li>
          <li>Making cross-platform mobile apps using Ionic and Angular.</li>
        </ul>
        <h4>Key Features</h4>
        <ul>
          <li>Angular is Component-based architecture and Its better for code organization.</li>
          <li>It provide Two-way data binding between HTML and component data.</li>
          <li>It Supports Built-in dependency injection for better modularity.</li>
          <li>It havePowerful Angular CLI to generate code and manage projects.</li>
        </ul>
      </section>
    `}],Vf=[...qf],$f=()=>B.jsx(gt,{links:Vf}),Kf=[{id:24,title:"self motivation",content:"<h3>How do you motivate yourself?</h3>      <ul>      <li>Whenever I feel low or stuck, I remind myself why I started — my goals and the bigger picture.</li>      <li>I break the task into smaller steps and focus on making steady progress.</li>      <li>Even small wins give me a boost and help me keep going.</li>      <li>Sometimes, a quick walk or some music helps me reset and refocus.</li>      <li>Most importantly, knowing that my work has purpose and impact keeps me motivated.</li>      </ul>"},{id:25,title:"teamwork",content:"<h3>How do you handle teamwork?</h3>      <ul>      <li>I believe in open communication and sharing ideas freely.</li>      <li>Listening to others' perspectives helps us find the best solutions together.</li>      <li>We celebrate our successes as a team, which strengthens our bond.</li>      <li>When conflicts arise, I focus on finding common ground and moving forward.</li>      <li>Ultimately, I see teamwork as a way to achieve more than we could alone.</li>      </ul>"},{id:25,title:"workload management",content:"<h3>How do you manage workload?</h3>      <ul>      <li>I start by listing down all the tasks and prioritizing them based on urgency and importance.</li>      <li>I break big tasks into smaller, manageable steps to avoid feeling overwhelmed.</li>      <li>I set realistic deadlines and try to stay consistent rather than rushing at the last minute.</li>      <li>Whenever needed, I communicate early if I need support or if something might get delayed.</li>      <li>Staying organized, focused, and calm helps me handle my workload effectively.</li>      </ul>"},{id:26,title:"conflict resolution",content:"<h3>How do you handle conflicts?</h3>      <ul>      <li>I approach conflicts with an open mind, ready to listen to all sides.</li>      <li>Understanding the root cause helps us find a solution that works for everyone.</li>      <li>I focus on the issue at hand, not personal attacks, to keep discussions constructive.</li>      <li>Finding common ground and compromising when possible is key to resolving conflicts.</li>      <li>Ultimately, I believe in maintaining respect and professionalism throughout the process.</li>      </ul>"},{id:26,title:"preferred work environment",content:"<h3>What kind of work environment do you prefer?</h3>      <ul>      <li>I prefer a positive and collaborative environment where team members support each other.</li>      <li>Open communication and mutual respect matter a lot to me.</li>      <li>I enjoy working in a place where learning is encouraged and feedback is constructive.</li>      <li>Having a bit of flexibility and trust from the team helps me stay motivated and productive.</li>      <li>Overall, I do well in an environment that values both individual contribution and teamwork.</li>      </ul>"},{id:27,title:"leadership style",content:"<h3>What is your leadership style?</h3>      <ul>      <li>I believe in leading by example and being approachable.</li>      <li>Empowering team members to take ownership of their work is important to me.</li>      <li>I encourage open communication and value everyone's input.</li>      <li>When challenges arise, I focus on finding solutions together rather than placing blame.</li>      <li>Ultimately, I aim to create an environment where everyone can thrive and contribute their best.</li>      </ul>"},{id:27,title:"work-life balance OR Do you take your work home with you?",content:"<h3>Do you take your work home with you?</h3>      <ul>      <li>I believe in maintaining a healthy work-life balance to stay productive and focused.</li>      <li>I try to complete my tasks within working hours by managing my time efficiently.</li>      <li>However, if there's something urgent or important, I don't mind putting in extra effort from home.</li>      <li>But I also understand the importance of rest, so I make sure to recharge and come back fresh the next day.</li>      </ul>"},{id:28,title:"feedback",content:"<h3>How do you handle feedback?</h3>      <ul>      <li>I see feedback as an opportunity to grow and improve.</li>      <li>I listen carefully and try to understand the perspective of the person giving feedback.</li>      <li>If it's constructive, I take it to heart and make necessary changes.</li>      <li>Even if it's tough to hear, I appreciate honesty and use it to better myself.</li>      <li>Overall, I believe feedback is essential for personal and professional development.</li>      </ul>"},{id:28,title:"management style feedback",content:"<h3>What do you think your employees would say about your management style?</h3>      <ul>      <li>They would probably say that I'm approachable, supportive, and fair.</li>      <li>I believe in giving team members the space to do their work while being available when they need help.</li>      <li>I try to lead by example, communicate clearly, and recognize good work.</li>      <li>I also encourage collaboration and open feedback so everyone feels involved and valued.</li>      <li>Overall, I aim to create a positive environment where people can grow and perform their best.</li>      </ul>"},{id:29,title:"decision making",content:"<h3>How do you make decisions?</h3>      <ul>      <li>I gather all the relevant information and consider different perspectives before making a decision.</li>      <li>When possible, I involve team members to get their input and insights.</li>      <li>I weigh the pros and cons, thinking about both short-term and long-term impacts.</li>      <li>Once I make a decision, I communicate it clearly and ensure everyone understands the reasoning behind it.</li>      <li>Ultimately, I trust my judgment but remain open to feedback and adjustments if needed.</li>      </ul>"},{id:29,title:"qualities of a successful manager",content:"<h3>What are the qualities of a successful manager?</h3>      <ul>      <li>A successful manager is someone who leads by example and earns the trust of their team.</li>      <li>They should have strong communication skills and be able to listen as well as guide.</li>      <li>They need to be organized, make clear decisions, and handle pressure calmly.</li>      <li>Empathy and fairness are key — understanding team members and treating everyone with respect.</li>      <li>And most importantly, a good manager helps others grow by providing support, feedback, and opportunities.</li>      </ul>"},{id:30,title:"time management",content:"<h3>How do you manage your time?</h3>      <ul>      <li>I start by setting clear priorities and breaking tasks into smaller steps.</li>      <li>I use tools like calendars and to-do lists to keep track of deadlines and appointments.</li>      <li>Staying focused and avoiding distractions helps me make the most of my time.</li>      <li>I also try to allocate specific time blocks for different tasks to stay organized.</li>      <li>Overall, I believe in being proactive and flexible to adapt to changing priorities.</li>      </ul>"},{id:30,title:"motivating employees in tough times",content:"<h3>How do you motivate your employees in tough times?</h3>      <ul>      <li>In tough times, I focus on keeping communication open and honest to reduce uncertainty.</li>      <li>I acknowledge the challenges and appreciate the team's efforts sincerely.</li>      <li>I try to keep the team focused on what we can control and break down goals into achievable steps.</li>      <li>Celebrating small wins and supporting each other goes a long way during difficult phases.</li>      <li>I also stay positive and lead with empathy — showing that we’re in it together and things will get better.</li>      </ul>"},{id:31,title:"change management?,How handle change?",content:"<h3>How do you handle change?</h3>      <ul>      <li>I try to stay adaptable and open-minded when facing change.</li>      <li>Understanding the reasons behind the change helps me accept it more easily.</li>      <li>I communicate with my team to address concerns and gather feedback on how we can adapt together.</li>      <li>Staying focused on our goals and finding ways to make the change work for us is key.</li>      <li>Ultimately, I see change as an opportunity for growth and improvement.</li>      </ul>"},{id:31,title:"delegation strategy an important assignment to others while ensuring that it will be completed successfully?",content:"<h3>How do you delegate an important assignment to others while ensuring that it will be completed successfully?</h3>      <ul>      <li>I start by clearly understanding the assignment and then choosing the right person based on their skills and experience.</li>      <li>I explain the goals, expectations, and deadlines clearly, and make sure they have all the necessary resources.</li>      <li>I trust the team member to take ownership, but I also set up check-ins to track progress and offer support if needed.</li>      <li>Open communication is key — I encourage questions and updates to avoid misunderstandings.</li>      <li>In the end, I review the outcome, give feedback, and appreciate the effort, which builds accountability and confidence.</li>      </ul>"},{id:32,title:"performance evaluation",content:"<h3>How do you evaluate the performance of your team members?</h3>      <ul>      <li>I set clear goals and expectations at the beginning of each period to measure performance against.</li>      <li>I regularly check in with team members to discuss their progress and any challenges they face.</li>      <li>Feedback is a two-way street — I encourage them to share their thoughts on how I can support them better.</li>      <li>At the end of the evaluation period, I provide constructive feedback, recognizing achievements and areas for improvement.</li>      <li>Overall, I believe in fostering a growth mindset where everyone feels valued and motivated to improve.</li>      </ul>"},{id:32,title:"motivation through rewards of an employee",content:"<h3>Do you have an example of when you motivated your staff using a reward?</h3>      <ul>      <li>Yes, during a tight project deadline, I set a team goal and told them that if we met it early with good quality, I’d arrange a small team lunch.</li>      <li>The team worked together efficiently, helped each other, and we completed the project ahead of schedule.</li>      <li>The lunch wasn’t big, but it showed appreciation and gave everyone a chance to relax and bond.</li>      <li>It boosted morale and reminded the team that their extra effort is noticed and valued.</li>      <li>Sometimes, even simple rewards can make a big difference in motivation.</li>      </ul>"},{id:33,title:"What type of pace do you work? or working pace",content:"<h3>What type of pace do you work?</h3>      <ul>      <li>I usually work at a steady and focused pace, balancing quality with efficiency.</li>      <li>When deadlines are tight or situations demand it, I can shift gears and work faster without compromising accuracy.</li>      <li>I prioritize tasks smartly so that I'm not just busy, but actually productive.</li>      <li>My goal is always to deliver consistent results, whether the pace is fast or moderate.</li>      <li>I believe it’s important to adapt my pace based on the project's needs and urgency.</li>      </ul>"},{id:34,title:"Most challenging part of this position?",content:"<h3>What do you think will be the most challenging part of this position?</h3>      <ul>      <li>Every role comes with its own challenges, and for this position, I think the initial challenge will be understanding the team dynamics and ongoing projects quickly.</li>      <li>Getting up to speed with internal tools, workflows, and expectations might take some focused effort at the beginning.</li>      <li>However, I see this as a positive challenge — it’s a chance to learn fast and adapt.</li>      <li>I’m confident that with my experience, willingness to ask questions, and ability to collaborate, I’ll overcome this quickly.</li>      <li>And once I settle in, I can contribute more effectively and help the team move forward.</li>      </ul>"},{id:35,title:"What is your management style?",content:"<h3>What is your management style?</h3>      <ul>      <li>I would describe my management style as supportive and collaborative.</li>      <li>I believe in empowering team members by giving them ownership of their tasks while being available for guidance.</li>      <li>Open communication is key — I encourage feedback and discussions to ensure everyone feels heard.</li>      <li>I adapt my approach based on the team's needs, whether it’s providing structure or allowing flexibility.</li>      <li>Ultimately, I aim to create an environment where everyone can thrive and contribute their best.</li>      </ul>"},{id:35,title:"How do you keep updated on your management skills?",content:"<h3>How do you keep updated on your management skills?</h3>      <ul>      <li>I regularly read articles, books, and blogs related to leadership and management to stay current with new ideas.</li>      <li>I follow thought leaders and attend webinars or workshops whenever possible.</li>      <li>I also learn a lot from real-life experiences — by reflecting on what worked well and what could be improved.</li>      <li>Feedback from my team and peers plays a big role in helping me grow and adapt my approach.</li>      <li>Staying open to learning and being self-aware helps me continuously sharpen my management skills.</li>      </ul>"},{id:36,title:"What is your approach to team building?",content:"<h3>What is your approach to team building?</h3>      <ul>      <li>I believe in creating a strong foundation of trust and open communication within the team.</li>      <li>Regular team-building activities, both formal and informal, help strengthen relationships.</li>      <li>I encourage collaboration by assigning tasks that require teamwork and shared goals.</li>      <li>Recognizing individual strengths and celebrating achievements fosters a positive team culture.</li>      <li>Ultimately, I aim to create an environment where everyone feels valued and motivated to contribute.</li>      </ul>"},{id:36,title:"important aspects of a team",content:"<h3>What do you think are important aspects of a team?</h3>      <ul>      <li>Trust is the foundation — team members should feel comfortable relying on one another.</li>      <li>Clear communication ensures everyone is aligned and misunderstandings are minimized.</li>      <li>Respect for different perspectives and skills helps create a more balanced and creative team.</li>      <li>Shared goals and a sense of ownership keep everyone motivated and working in the same direction.</li>      <li>Lastly, support and collaboration make the team stronger during both good and tough times.</li>      </ul>"},{id:37,title:"How do you handle underperforming team members?",content:"<h3>How do you handle underperforming team members?</h3>      <ul>      <li>I start by having a one-on-one conversation to understand any challenges they might be facing.</li>      <li>Setting clear expectations and providing constructive feedback is important to help them improve.</li>      <li>I offer support, whether it’s additional training, resources, or just being available to answer questions.</li>      <li>If performance doesn’t improve, I work with them to create a performance improvement plan.</li>      <li>Ultimately, I believe in giving everyone a fair chance to succeed while also being honest about expectations.</li>      </ul>"},{id:37,title:"Do you have experience with setting budgets?",content:"<h3>Do you have experience with setting budgets?</h3>      <ul>      <li>Yes, I have experience setting budgets, especially for team projects and resource planning.</li>      <li>I start by understanding the goals and identifying all potential costs — from tools and manpower to time estimates.</li>      <li>I make sure to allocate resources wisely, keeping both efficiency and quality in mind.</li>      <li>I also monitor the budget regularly to stay on track and adjust if priorities shift.</li>      <li>For me, budgeting is not just about limiting spending but about smart planning to maximize value.</li>      </ul>"},{id:38,title:"How do you handle stress?",content:"<h3>How do you handle stress?</h3>      <ul>      <li>I try to stay calm and focused, breaking down tasks into smaller, manageable steps.</li>      <li>Taking short breaks to clear my mind helps me regain perspective and energy.</li>      <li>Staying organized and prioritizing tasks reduces the feeling of being overwhelmed.</li>      <li>I also find that talking things out with a colleague or friend can provide new insights and relief.</li>      <li>Ultimately, I believe in maintaining a positive attitude and finding healthy outlets for stress.</li>      </ul>"},{id:38,title:"least rewarding part of previous role",content:"<h3>What was the least rewarding part of your previous position?</h3>      <ul>      <li>Every job has its ups and downs, and for me, the least rewarding part was when good ideas took a long time to get approved or implemented.</li>      <li>It was sometimes challenging to wait when I felt that a change could make a real positive impact quickly.</li>      <li>However, I used that time to refine the ideas further and build stronger cases for them.</li>      <li>This experience taught me patience, persistence, and how to better navigate processes and communication.</li>      <li>Even the less rewarding parts helped me grow professionally and personally.</li>      </ul>"},{id:39,title:"How do you handle tight deadlines?",content:"<h3>How do you handle tight deadlines?</h3>      <ul>      <li>I stay calm and focused, breaking down the tasks into smaller, manageable parts.</li>      <li>Prioritizing tasks based on urgency helps me tackle the most critical ones first.</li>      <li>I communicate with my team to ensure we’re all aligned and can support each other.</li>      <li>Staying organized and avoiding distractions is key to making the most of the time available.</li>      <li>Ultimately, I believe in maintaining a positive attitude and doing my best under pressure.</li>      </ul>"},{id:39,title:"contribution to the company",content:"<h3>What will you contribute to this company?</h3>      <ul>      <li>I will bring a strong sense of responsibility, dedication, and a positive mindset to every task I handle.</li>      <li>My experience, problem-solving skills, and ability to work both independently and with a team will add value from day one.</li>      <li>I’m always eager to learn and adapt, which helps me stay aligned with company goals and industry changes.</li>      <li>I’ll also contribute by promoting a collaborative and respectful work culture.</li>      <li>Ultimately, I want to grow with the company and help it succeed in any way I can.</li>      </ul>"},{id:40,title:"How do you handle multiple tasks at once?",content:"<h3>How do you handle multiple tasks at once?</h3>      <ul>      <li>I prioritize tasks based on urgency and importance, focusing on one thing at a time.</li>      <li>Using tools like to-do lists or project management software helps me stay organized.</li>      <li>I break larger tasks into smaller steps to make them more manageable.</li>      <li>Staying flexible and adapting to changes is key when juggling multiple responsibilities.</li>      <li>Ultimately, I believe in maintaining a calm and focused approach to ensure quality work across all tasks.</li>      </ul>"},{id:40,title:"How go about delivering bad news or a decision that will not be popular?",content:"<h3>How would you go about delivering bad news or a decision that will not be popular?</h3>      <ul>      <li>I believe honesty and clarity are key, so I share the news directly but with empathy.</li>      <li>I explain the reasons behind the decision, helping others understand the bigger picture.</li>      <li>I give space for questions and concerns, listening carefully to how people feel.</li>      <li>Whenever possible, I offer support or solutions to help cope with the impact.</li>      <li>Being respectful and transparent helps maintain trust, even in tough conversations.</li>      </ul>"},{id:41,title:"establishing rapport with new employees",content:"<h3>How do you establish rapport with a new employee?</h3>      <ul>      <li>I start by being welcoming and approachable to create a comfortable environment.</li>      <li>I take time to learn about their background, interests, and goals.</li>      <li>I encourage open communication and make sure they know where to find help or resources.</li>      <li>Pairing them with a mentor or buddy helps them settle in faster and feel supported.</li>      <li>Building trust early helps set the stage for good teamwork and collaboration.</li>      </ul>"},{id:42,title:"communicating expectations to an employee?",content:"<h3>How do you communicate an expectation to an employee?</h3>      <ul>      <li>I clearly explain what needs to be done, why it’s important, and how it fits into the bigger goals.</li>      <li>I make sure to be specific about deadlines, quality standards, and any resources available.</li>      <li>I check for understanding by asking questions and encouraging feedback.</li>      <li>Providing examples or guidelines helps avoid confusion.</li>      <li>Finally, I stay available for support and follow-up to ensure expectations are met.</li>      </ul>"},{id:43,title:"coaching underperforming employees",content:"<h3>How do you go about coaching an employee who is not performing where they need to be?</h3>      <ul>      <li>First, I have a private and honest conversation to understand any challenges or obstacles they face.</li>      <li>Together, we set clear, achievable goals and create a plan to improve performance.</li>      <li>I offer resources, training, or mentorship that could help them develop necessary skills.</li>      <li>Regular check-ins and feedback keep the process on track and encourage progress.</li>      <li>Throughout, I focus on positive reinforcement and support to build confidence.</li>      </ul>"},{id:44,title:"handling under-performing high performer",content:"<h3>A high-performing employee has recently been under-performing. How would you deal with the situation?</h3>      <ul>      <li>I would start by having a private, open conversation to understand what might be causing the change in performance.</li>      <li>There could be personal issues, workload stress, or unclear expectations impacting their work.</li>      <li>Together, we'd identify any obstacles and create an action plan to support their improvement.</li>      <li>I’d offer resources, guidance, or adjustments needed to help them get back on track.</li>      <li>Regular follow-ups and encouragement would help maintain motivation and accountability.</li>      </ul>"},{id:45,title:"gaining rapport in new workplace",content:"<h3>When you enter a new workplace with new employees, how would you go about gaining rapport with them?</h3>      <ul>      <li>I focus on being approachable and open, showing genuine interest in getting to know my colleagues.</li>      <li>Listening carefully and respecting their experiences helps build trust quickly.</li>      <li>Participating in team activities and informal conversations helps break the ice.</li>      <li>I make an effort to understand their working styles and preferences.</li>      <li>Building rapport early creates a positive foundation for collaboration and teamwork.</li>      </ul>"},{id:46,title:"handling conflict between employees",content:"<h3>How do you handle conflict with two employees?</h3>      <ul>      <li>I address conflicts quickly and fairly by listening to both sides without bias.</li>      <li>I encourage open and respectful communication to help each understand the other’s perspective.</li>      <li>Together, we identify the root cause and explore solutions that satisfy both parties.</li>      <li>Sometimes, setting clear guidelines and expectations helps prevent future conflicts.</li>      <li>If needed, I involve HR or mediation to ensure a positive and professional work environment.</li>      </ul>"},{id:47,title:"handling failure",content:"<h3>How do you handle failure?</h3>      <ul>      <li>I see failure as an opportunity to learn and grow rather than as a setback.</li>      <li>When I face failure, I take time to analyze what went wrong and why.</li>      <li>I seek feedback and advice to gain new perspectives and improve.</li>      <li>Applying lessons learned helps me avoid repeating mistakes and build resilience.</li>      <li>Staying positive and focused on solutions keeps me motivated to move forward.</li>      </ul>"},{id:48,title:"managing work week",content:"<h3>Describe how you would manage your work week.</h3>      <ul>      <li>I start by prioritizing tasks based on deadlines and importance to ensure key goals are met.</li>      <li>I break down larger projects into smaller, manageable steps to avoid feeling overwhelmed.</li>      <li>I schedule focused time blocks for deep work and leave room for meetings and collaboration.</li>      <li>Regularly reviewing progress helps me stay flexible and adjust plans if priorities change.</li>      <li>I also make sure to balance work with breaks to maintain energy and productivity throughout the week.</li>      </ul>"},{id:49,title:"explaining management style",content:"<h3>How would you explain your management style?</h3>      <ul>      <li>My management style is collaborative and supportive, focusing on open communication and trust.</li>      <li>I believe in empowering team members by giving them clear goals and the freedom to find the best way to achieve them.</li>      <li>I provide regular feedback and encourage professional growth.</li>      <li>At the same time, I am approachable and ready to step in when guidance or problem-solving is needed.</li>      <li>This balance helps create a motivated and accountable team.</li>      </ul>"},{id:50,title:"handling different personalities of your employees",content:"<h3>How do you handle different personalities of your employees?</h3>      <ul>      <li>I recognize that every person is unique and try to understand their strengths, communication styles, and motivators.</li>      <li>I adapt my approach to suit individual needs, whether that means giving more guidance or more independence.</li>      <li>Creating an inclusive environment where everyone feels valued helps bring out the best in diverse personalities.</li>      <li>I also encourage team bonding to build respect and understanding among employees.</li>      <li>This approach helps reduce conflicts and improve overall teamwork.</li>      </ul>"},{id:51,title:"adapting to change",content:"<h3>How do you adapt to change?</h3>      <ul>      <li>I stay open-minded and try to see change as an opportunity rather than a challenge.</li>      <li>I focus on understanding the reasons behind the change to better align with new directions.</li>      <li>I remain flexible and ready to adjust plans or learn new skills when needed.</li>      <li>Communicating clearly with my team helps everyone stay informed and comfortable during transitions.</li>      <li>By maintaining a positive attitude, I help create a supportive atmosphere that embraces change.</li>      </ul>"},{id:52,title:"most rewarding part of previous position",content:"<h3>What do you find most rewarding about your previous position?</h3>      <ul>      <li>The most rewarding part was seeing the positive impact of my work on both the team and the organization.</li>      <li>I enjoyed helping teammates grow and achieve their goals through support and collaboration.</li>      <li>Solving complex problems and delivering successful outcomes gave me a strong sense of accomplishment.</li>      <li>Being trusted with responsibilities and making meaningful contributions kept me motivated and proud.</li>      </ul>"},{id:53,title:"handling unexpected outcomes",content:"<h3>How would you handle a decision that you made that did not have the effect that you were expecting to achieve?</h3>      <ul>      <li>I would take responsibility and assess what went wrong without placing blame.</li>      <li>I would gather feedback and data to understand why the outcome differed from expectations.</li>      <li>From there, I’d adjust my approach and develop a new plan of action based on what I learned.</li>      <li>I believe being flexible, learning from mistakes, and staying solution-focused is key to growth.</li>      </ul>"},{id:54,title:"future goals if hired",content:"<h3>What are your goals for the future if you are hired in this company?</h3>      <ul>      <li>My goal is to contribute meaningfully to the team and help the company achieve its objectives.</li>      <li>I aim to keep improving my technical and leadership skills to take on greater responsibilities over time.</li>      <li>I want to become a reliable and valuable part of the team by consistently delivering high-quality work.</li>      <li>Building strong relationships with coworkers and learning from them is also a priority.</li>      </ul>"},{id:55,title:"achieving future goals",content:"<h3>How will you achieve these goals?</h3>      <ul>      <li>I plan to stay proactive in learning new tools, technologies, and business processes.</li>      <li>I’ll seek feedback regularly and use it to improve my performance and decision-making.</li>      <li>Setting short-term milestones will help me stay on track and measure progress.</li>      <li>I’ll also stay engaged with my team, share knowledge, and take initiative whenever possible.</li>      </ul>"},{id:56,title:"disagreeing with supervisor",content:"<h3>How would you go about disagreeing with your supervisor about a decision that you know is not the right one?</h3>      <ul>      <li>I would approach the situation respectfully and professionally, focusing on the facts.</li>      <li>I’d ask for a private discussion to share my perspective and present data or examples to support my concerns.</li>      <li>I would remain open to understanding their reasoning and aim for a constructive conversation.</li>      <li>If the decision stands, I would respect it and execute it to the best of my ability while documenting my input.</li>      </ul>"},{id:57,title:"How do you show confidence in your employee’s ability when you assign them a task?",content:"<h3>How do you show confidence in your employee’s ability when you assign them a task?</h3>      <ul>      <li>I clearly communicate why I believe they are the right person for the task based on their skills or past work.</li>      <li>I give them ownership of the task and let them make decisions where appropriate.</li>      <li>I provide any needed support but avoid micromanaging, showing that I trust their judgment.</li>      <li>Recognition and encouragement during and after the task reinforce my confidence in them.</li>      </ul>"},{id:58,title:"An employee reports a problem to you, how do you go about solving it?",content:"<h3>An employee reports a problem to you, how do you go about solving it?</h3>      <ul>      <li>I begin by listening carefully and asking clarifying questions to fully understand the issue.</li>      <li>I assess the impact of the problem and identify any immediate steps to contain or address it.</li>      <li>I collaborate with the employee and other stakeholders to explore possible solutions.</li>      <li>Once resolved, I follow up to ensure the fix worked and to prevent future occurrences.</li>      </ul>"},{id:59,title:"How do you motivate an employee who is reluctant to take on an additional task?",content:"<h3>How do you motivate an employee who is reluctant to take on an additional task?</h3>      <ul>      <li>I try to understand their hesitation by having an open and honest conversation.</li>      <li>I explain the importance and value of the task and how it fits into the bigger picture.</li>      <li>If possible, I align the task with their strengths or growth goals to increase engagement.</li>      <li>Providing support, breaking the task into smaller steps, or offering recognition can also help build motivation.</li>      </ul>"},{id:60,title:"You are at a point with an employee that it is best to have them leave the organization. How would you go about the conversation?",content:"<h3>You are at a point with an employee that it is best to have them leave the organization. How would you go about the conversation?</h3>      <ul>      <li>I would prepare by reviewing their performance history and consulting HR to ensure fairness and compliance.</li>      <li>In the conversation, I would remain respectful and compassionate while being clear and direct.</li>      <li>I would explain the reasons for the decision based on documented performance issues.</li>      <li>I’d also offer information on any support available, such as outplacement services or references if appropriate.</li>      </ul>"},{id:61,title:"An employee wants a promotion, however, he or she is not qualified for the new position. How would you have the conversation with the employee?",content:"<h3>An employee wants a promotion, however, he or she is not qualified for the new position. How would you have the conversation with the employee?</h3>      <ul>      <li>I’d acknowledge their interest and appreciate their ambition and dedication.</li>      <li>I would clearly explain the qualifications or experience required for the role and where they currently stand.</li>      <li>Together, we’d create a development plan to help them build the skills or experience needed for future opportunities.</li>      <li>Maintaining transparency and support helps keep them motivated while preparing them for the next step.</li>      </ul>"}],Gf=[{title:"About yourself",content:`
            <p>Hello, my name is <strong>Seraj Ahamad</strong>, and I am from <strong>Lucknow, Uttar Pradesh</strong>.</p>
            <p>I have completed my <strong>bachelor’s degree in Computer Science and Engineering</strong> from the <strong>School of Engineering, CUSAT, Kerala</strong>, with a GPA of <strong>8.01</strong>.</p>
            <p>Over the past 3 years, I’ve been working as a Full Stack Developer, at Gadgeon Smart Systems Inc.</p>
            <p>During this time, I’ve gained hands-on experience in Node.js, TypeScript, MongoDB, AWS Services, Docker, MySQL, JavaScript, Reactjs, Redis, Kafka . I’ve developed REST APIs, worked with microservices and serverless architectures on AWS, and built scalable solutions using design principles and best practices.</p>
            <p>I am passionate about solving complex problems, staying updated with new technologies, and contributing to impactful projects. </p>
            <p>Outside of work, I enjoy playing cricket and volleyball, reading, listening to music, and continuously challenging myself to grow.</p>
            <p>I consider myself a focused, goal-oriented team player who values leadership, collaboration, and continuous learning.</p>
            <p>Thank you for the opportunity to introduce myself—I’m excited to explore how my experience and passion can add value to your team.</p>
        `,link:""},{id:101,title:"Serverless Routes Layer – API Entry Points (CHTS)",content:`
    <section>
      <h3>Overview: Serverless Routes Layer</h3>
      <p>
        In our CHTS project, we follow a serverless, domain-driven structure. Each folder in this layer represents a distinct feature area or business domain exposed through APIs.
        These are lightweight serverless handlers written in Node.js/TypeScript and deployed individually (e.g., via AWS Lambda).
      </p>

      <h4>Key Responsibilities:</h4>
      <ul>
        <li>Handles external requests – validates, authenticates, and routes them to internal services.</li>
        <li>Communicates with microservices, databases, queues, or event-driven jobs.</li>
        <li>Stateless, scalable, and easily maintainable.</li>
      </ul>

      <h4>Domain-wise Route Explanation:</h4>

      <ul>
        <li>
          <strong>activitylog:</strong> 
          Manages audit logs of user activities, device events, and system changes. Useful for debugging, traceability, and compliance.
        </li>
        <li>
          <strong>backup:</strong> 
          Triggers on-demand or scheduled backups of configuration, reports, or data snapshots to cloud storage.
        </li>
        <li>
          <strong>certificate:</strong> 
          Handles SSL/TLS certificates and device certificate management – used during device onboarding or mutual authentication.
        </li>
        <li>
          <strong>configuration:</strong> 
          Fetches and updates global or tenant-specific settings like thresholds, feature toggles, and environmental settings.
        </li>
        <li>
          <strong>customer_documentation:</strong> 
          API for uploading, viewing, and managing client-related documentation – such as manuals or compliance certificates.
        </li>
        <li>
          <strong>dataExport:</strong> 
          Allows exporting data like device stats, logs, or reports to Excel, CSV, or PDF – may trigger a background job via jobFramework.
        </li>
        <li>
          <strong>deviceGroup:</strong> 
          Manages logical grouping of devices for batch control, rule assignment, or visualization in dashboards.
        </li>
        <li>
          <strong>documentation:</strong> 
          API to serve internal help content, markdown-based technical documents, or third-party links.
        </li>
        <li>
          <strong>gateway:</strong> 
          Interfaces with edge gateways and third-party IoT communication hardware – handles registration, status update, firmware push.
        </li>
        <li>
          <strong>kitusers:</strong> 
          Manages provisioning and linking of users to devices (kits), including roles, permissions, and access boundaries.
        </li>
        <li>
          <strong>monitoringKit:</strong> 
          Health monitoring for kits/devices – metrics like battery, temperature, signal strength, and last ping timestamp.
        </li>
        <li>
          <strong>notification:</strong> 
          Sends email, SMS, and push notifications based on triggered rules, events, or exports. Uses templates and localization.
        </li>
        <li>
          <strong>organization:</strong> 
          Handles organization-level structure like branches, departments, roles, and licensing constraints.
        </li>
        <li>
          <strong>peripheral:</strong> 
          APIs for handling connected peripherals like sensors, actuators – CRUD and assignment to kits/devices.
        </li>
        <li>
          <strong>quicksight:</strong> 
          Integration with AWS QuickSight for serving embedded analytics dashboards to end users.
        </li>
        <li>
          <strong>sse:</strong> 
          Implements Server-Sent Events (SSE) for real-time updates to frontend – used for live data, alert streams.
        </li>
        <li>
          <strong>status:</strong> 
          Returns live status or heartbeat of services, devices, and jobs. Often used for health checks and monitoring UIs.
        </li>
        <li>
          <strong>telemetry:</strong> 
          Receives and forwards telemetry data from devices – values like voltage, temperature, usage metrics, etc.
        </li>
        <li>
          <strong>updateVersionMatrix:</strong> 
          Controls and tracks firmware/software versions available for each device type. Used for safe upgrade paths.
        </li>
        <li>
          <strong>user:</strong> 
          Core user management – login, profile, access token refresh, role updates. Works closely with kitusers and organization.
        </li>
      </ul>

      <h4>How It Works:</h4>
      <ol>
        <li>Each route has an entry file (handler) that receives HTTP requests.</li>
        <li>Performs middleware operations like auth, validation, or transformation.</li>
        <li>Calls respective microservice via internal API or publishes to a queue for async processing.</li>
      </ol>

      <h4>Deployment and Scaling:</h4>
      <ul>
        <li>Each route is deployed separately via CI/CD (GitHub Actions + AWS Lambda).</li>
        <li>Stateless by design – easily auto-scalable under load.</li>
        <li>Integrated with monitoring and alerting using CloudWatch and Logstash.</li>
      </ul>

      <h4>Benefits:</h4>
      <ul>
        <li>Modular codebase – easy to debug, test, and replace features.</li>
        <li>Independent deployment – faster release cycles.</li>
        <li>Lightweight – minimal cold start latency and cost-effective.</li>
      </ul>
    </section>
  `,link:""},{id:102,title:"Microservices Layer – Core Business Logic (CHTS)",content:`
    <section>
      <h3>Overview: Microservices Layer</h3>
      <p>
        This layer consists of independently developed and deployed services, each owning a specific business capability.
        These microservices are written in Node.js/TypeScript and follow a clean, modular structure with internal APIs and background jobs.
      </p>

      <h4>Key Characteristics:</h4>
      <ul>
        <li>Each folder is a self-contained microservice.</li>
        <li>Follows domain-driven design with clear separation of concerns.</li>
        <li>Communicates with each other via internal APIs or message queues.</li>
        <li>Can run as containerized services (e.g., Docker) or inside serverless environments.</li>
      </ul>

      <h4>Service-wise Breakdown:</h4>
      <ul>
        <li><strong>alertFramework:</strong> 
          Manages alert rules, thresholds, subscriptions, and real-time triggers. Supports time-based and event-based alerting logic.
        </li>
        <li><strong>apidoc:</strong> 
          Automatically generates API documentation using JSDoc or Swagger for internal and external endpoints.
        </li>
        <li><strong>bootstrap:</strong> 
          Initializes core system config, first-time setup, admin seeders, or environment variables for fresh deployments.
        </li>
        <li><strong>common:</strong> 
          Shared utility functions, validators, enums, constants, logging, and middleware reused across services.
        </li>
        <li><strong>configuration / configurationV2:</strong> 
          Stores system-wide or tenant-specific settings. V2 supports versioning and dynamic reloading.
        </li>
        <li><strong>device:</strong> 
          Manages all CRUD operations for devices, their metadata, and assignment to users or organizations.
        </li>
        <li><strong>deviceUtil:</strong> 
          Helper functions related to device lifecycle like last ping, OTA version checks, heartbeat verifications.
        </li>
        <li><strong>eventFramework:</strong> 
          Processes internal and external events using a rule engine – used for real-time analytics, alerting, or automation workflows.
        </li>
        <li><strong>internalAPI:</strong> 
          A lightweight service for intra-service secure communication. Contains proxy handlers and internal auth tokens.
        </li>
        <li><strong>iotDataProcessor:</strong> 
          Real-time processing of telemetry data. Applies transformation, validation, and persists readings in time-series DBs.
        </li>
        <li><strong>jobFramework:</strong> 
          Schedules and manages background jobs, retries, and delayed tasks. Integrated with cron triggers or queue consumers.
        </li>
        <li><strong>logstash:</strong> 
          Integrates with the ELK stack. Collects logs from all services and pushes them for analysis and monitoring.
        </li>
        <li><strong>reporting:</strong> 
          Generates user reports, CSV exports, and summary views for dashboards. Uses templates and file stream generation.
        </li>
        <li><strong>telemetryData:</strong> 
          Stores and retrieves high-frequency telemetry data for charting, analysis, or diagnostics.
        </li>
        <li><strong>userOrgFramework:</strong> 
          Manages user authentication, user-organization mapping, role hierarchy, SSO, and access controls.
        </li>
      </ul>

      <h4>How They Work Together:</h4>
      <ol>
        <li>APIs from the <code>routes</code> layer call these services internally.</li>
        <li>They can publish/subscribe to events (e.g., using Redis Pub/Sub or message queues).</li>
        <li>Some run scheduled background jobs (e.g., retry mechanisms, daily summaries).</li>
      </ol>

      <h4>Benefits of This Design:</h4>
      <ul>
        <li>Independent scaling and deployment – improves resilience.</li>
        <li>Clear ownership – easy for teams to work in parallel.</li>
        <li>Better testing and debugging – unit + integration level isolation.</li>
        <li>Flexible tech stack – possible to rewrite one service without impacting others.</li>
      </ul>

      <h4>Real Project Examples:</h4>
      <ul>
        <li>I worked on optimizing <strong>iotDataProcessor</strong> to reduce memory consumption and handle 10x more data.</li>
        <li>Designed multi-tenant support in <strong>configurationV2</strong> with real-time dynamic settings fetch.</li>
        <li>Created data pipeline using <strong>eventFramework</strong> to trigger alerts from incoming sensor data.</li>
      </ul>
    </section>
  `,link:""},{title:"Roles and Responsibility",content:`
            <p>My role in the project was primarily focused on backend development. I designed and implemented scalable REST APIs using Node.js and TypeScript. I also worked on integrating various AWS services like Lambda, API Gateway, and DynamoDB to ensure secure and efficient data flow. Additionally, I collaborated with front-end and DevOps teams to achieve seamless device management and cloud integration.</p>
            <h3>Backend Development:</h3>
            <ul>
                <li>I Developed and maintained scalable backend solutions using Node.js and TypeScript.</li>
                <li>And I Designed and implemented secure REST APIs for seamless communication between services.</li>
                <li>And Also Designed and developed Node.js-based APIs and middleware to integrate KDP with CHTS using Express.js, serverless architecture, and AWS.</li>
                <li>For that I Followed microservices architecture principles to ensure scalability and maintainability.</li>
            </ul>
           
            <h3>Cloud Integration:</h3>
            <ul>
                <li>I Worked extensively with AWS services such as Lambda, API Gateway, DynamoDB, SNS, and SQS to build and optimize cloud-based solutions.</li>
                <li>And Ensured scalability and performance by leveraging serverless architecture.</li>
            </ul>
           
            <h3>Performance Optimization & Automation:</h3>
            <ul>
                <li>I Optimized application performance using tools like AWS X-Ray for monitoring and debugging.</li>
                <li>And Automated recurring tasks, like certificate deletion from S3 and AWS IoT, using AWS Lambda and Node.js with AWS SDK v3.</li>
                <li>And Developed test scripts for APIs using Chai, Mocha, and Axios, which streamlined the testing process and improved efficiency.</li>
            </ul>
           
            <h3>Database Management:</h3>
            <ul>
                <li>Used MySQL for efficient data handling and dynamic query generation in API responses and validations.</li>
            </ul>
           
            <h3>Team Collaboration:</h3>
            <ul>
                <li>Collaborated with cross-functional teams to ensure smooth deployments, troubleshoot integration issues, and implement best coding practices.</li>
                <li>Participated in code reviews to maintain high-quality deliverables and mentor junior developers.</li>
            </ul>
            <h3>Result-Oriented Approach:</h3>
            <ul>
                <li>I Reduced manual effort by automating complex workflows and ensured robust integrations, which improved overall system efficiency and reliability.</li>
            </ul>
            <h3>Problem Solving and Issue Resolution:</h3>
            <ul><li>I Troubleshoted and resolved complex technical issues, including communication certificate problems during integration with KDP.</li></ul>
            <h3>Documentation and Knowledge Sharing:</h3>
            <ul><li>Documented system designs, workflows, and processes for future reference.</li><li>Contributed to team knowledge by sharing insights and best practices.</li></ul>
        `,link:""},{title:"Key Points",content:`
            <p>In my current role, I focused on integrating KDP with CHTS APIs by developing middleware in Node.js, using microservices architecture and Express.js.</p>
            <p>I also automated workflows, like deleting expired IoT certificates from S3 and IoT, using AWS Lambda and AWS SDK v3. These efforts reduced manual intervention, streamlined operations, and ensured compliance.</p>
            <p>Additionally, I collaborated with team members to ensure code quality through reviews and implemented testing frameworks like Mocha and Chai to validate API functionality.</p>
        `,link:""},{title:"KDP CHTS Integration",content:`
                <ul>
                    <li>I Developed middlewares wrapper to align KDP's API with CHTS.</li>
                    <li>And Used Node.js, serverless design patterns, and Express.js.</li>
                    <li>Also Implemented authentication by ensuring secure data exchange.</li>
                    <li>And Followed microservices architecture to enhance scalability.</li>
                </ul>
            `,link:""},{title:"IoT Cert Automation",content:`
                <ul>
                    <li>I Created an AWS Lambda job to delete expired certificates from S3 and AWS IoT.</li>
                    <li>And Used Node.js and AWS SDK v3 for seamless execution.</li>
                    <li>I did that because there was a requiement to reduced manual intervention.</li>
                </ul>
            `,link:""},{title:"AWS Experience",content:`<h4>What do you mean by scalable</h4>
              <p>Scalable systems handle growing workloads (users/data) without compromising performance. For example:</p>
                <ul>
                    <li><strong>Horizontal Scaling:</strong> At Gadgeon, I used Node.js + AWS Lambda to auto-scale APIs during traffic spikes (handled 50K RPM).</li>
                    <li><strong>Database Scaling:</strong> Implemented Redis caching and MongoDB sharding in the KORE project to reduce query latency by 40%.</li>
                    <li><strong>Modular Architecture:</strong> Designed microservices with Docker, allowing independent scaling of high-demand components.</li>
                </ul>
            `,link:""},{title:"AWS Experience",content:`
                <ul>
                    <li>I have Extensive experience with API Gateway, DynamoDB, AWS Lambda, SNS, and X-Ray.</li>
                    <li>I Built serverless applications and automated cloud tasks using aws sdk v3.</li>
                    <li>I Optimized performance with distributed tracing using X-Ray.</li>
                </ul>
            `,link:""},{title:"Scalability and Reliability",content:`<h3>How did you ensure scalability and reliability in the project?</h3><section><ul><li>I used serverless architecture with AWS Lambda to automatically scale based on demand. DynamoDB was implemented for a high-performing and scalable database. Additionally, I optimized APIs for performance and used AWS X-Ray to monitor and debug application issues, ensuring reliability under varying loads.</li></ul></section>
                <ul>
                    <li>We Used microservices architecture for scalability.</li>
                    <li>And Implemented caching strategies using redis and optimize queries in MySQL.</li>
                    <li>Tested thoroughly with unit testing frameworks like Mocha and Chai.</li>
                </ul>
            `,link:""},{title:"Challenging Problem",content:`
                <ul>
                    <li>I Resolved IoT certificate expiration by automating its deletion from S3 and AWS IoT.</li>
                    <li>Faced challenges with AWS SDK v3 updates, which required extensive testing.</li>
                    <li>Successfully reduced downtime and improved compliance.</li>
                </ul>
            `,link:""},{title:"Automation Tasks",content:`
                <ul>
                    <li>Automated CHTS API test cases using MySQL, Node.js, Chai, and Axios.</li>
                    <li>Ensured seamless integration testing, improving reliability.</li>
                </ul>
            `,link:""},{title:"Job Change Reason",content:`
          <h3>I’m looking for a role that offers:</h3>
          <ul>
            <li>To work on <strong>more challenging projects</strong> to further grow my skills and expertise..</li>
            <li>I am seeking opportunities for career growth and advancement to progress professionally.</li>
            <li>and a Kinds <strong>Flexible Work Environment:</strong> If available, I would prefer a work culture that supports flexibility and work-life balance.</li>
            <li>Opportunities to apply new skills I’ve developed through recent training and education.</li>
            <li>My current role has been a great learning experience, but I am ready to contribute to larger, more meaningful initiatives.</li>
          </ul>
        `,link:""},{title:"problem solving approach",content:"<h3>How do you approach problem-solving?</h3><section><ul><li><b>Stay Calm and Analyze the Problem:</b> When faced with an unfamiliar problem, my first step is to stay calm and take a systematic approach. I break the problem into smaller components to better understand what I’m dealing with.</li><li><b>Research and Gather Information:</b> I research the problem thoroughly, using documentation, online resources, or asking knowledgeable colleagues. For technical issues, I consult relevant tools, forums, or official documentation.</li><li><b>Apply Logical Thinking:</b> I use my existing knowledge to draw parallels with similar challenges I’ve faced. Then, I brainstorm potential solutions and evaluate their feasibility based on the context.</li><li><b>Experiment and Iterate:</b> If it’s a technical issue, I try out solutions in a controlled environment to test their effectiveness. I learn from what works and refine my approach if needed.</li><li><b>Seek Guidance if Necessary:</b> If I’m unable to resolve the issue independently, I don’t hesitate to seek help from peers or experts. Collaboration often brings fresh perspectives that lead to a solution.</li><li><b>Document and Learn:</b> After resolving the issue, I document the solution and take the time to learn from it so I’m better prepared if a similar situation arises in the future.</li></ul></section>",link:""},{title:"Task Prioritization",content:`
                <ul>
                    <li>Use tools like Jira to manage tasks and deadlines.</li>
                    <li>Focus on high-priority deliverables that impact the project timeline.</li>
                    <li>Regularly communicate with the team to ensure alignment.</li>
                </ul>
            `,link:""},{title:"Project",content:`<h3>Dec 2024 - Present</h3>
    <ul><li>I have been working on the Gadgeon Middle East Website project since December 2024.</li>
    <li>Where I was created scalable backend solutions using Node.js and TypeScript with Dependency Injection.</li><li>Implementing REST APIs for seamless integration.</li><li>Managing infrastructure using Terraform (OpenTofu).</li><li>Collaborated with the frontend development team to seamlessly integrate backend APIs with the React.js-based frontend application. </li>
    </ul>
    <h3>CHTS june 2022 - Nov 2024</h3>
        <ul>
        <li>I have been working on the KORE Connected Health Telemetry Solutions project since June 2022.</li><li>This project focuses on creating APIs and integrating various devices, gateways, and user interfaces to manage patient health data efficiently.</li><li>It enables device management, BLE pairing, and uploads patient data securely to the cloud.</li><li>I worked extensively on the backend using Node.js and TypeScript, implementing REST APIs and leveraging AWS services like Lambda, API Gateway, DynamoDB, and SQS.</li><li>The project emphasizes scalability and reliability through serverless development and modular architecture.</li><li>Collaborating with cross-functional teams, I ensured seamless integration and delivered high-quality solutions.</li><li>The system bridges the gap between patients and providers, creating a robust, compliant-cloud-based healthcare platform</li>
        </ul>
        <h3>Mini Project Dec 2020 to May 2021</h3>
        <ul><li>I worked on a project called Campus Utilities at Fingertips during my B.Tech, which aimed to digitize and simplify campus facilities like the library, canteen, classrooms, transport, maintenance, and health.</li><li> It was a web application developed using ReactJS, Node.js, MongoDB, and styled with CSS, Material UI, and Bootstrap.</li><li>My role focused on building secure REST APIs, managing the database, and ensuring smooth communication between the frontend and backend.</li><li>This project helped reduce physical interactions during COVID-19 and was a step toward modernizing campus operations.</li></ul>
        <h3>Major Project July 2021 to May 2022</h3>
        <ul><li>I worked on a project called Explore Restaurants Nearby, which helps travelers find restaurants and services in new locations easily.</li><li>It was built using ReactJS, JavaScript, Material UI, and integrated multiple APIs like Google Maps API, Places API, and Travel Advisor API.</li><li>My role was to create an attractive user interface and manage API integration for real-time data.</li><li>This project aimed to promote tourism and make exploring new places more convenient for users.</li></ul>
        <h3>Spam Detection API Project</h3>
        <ul><li>I have worked on developing a robust Spam Detection API using FastAPI that validates IP addresses, classifies text content, and validates email domains for spam.</li><li>This solution ensures high performance, scalability, and security, leveraging technologies like PostgreSQL, Google’s Gemini API, and the AbuseIPDB database.</li><li>And Additionally, I implemented rate limiting, JWT authentication, and a detailed response format for improved usability.</li><li>The application has been containerized using Docker and is deployed on Oracle Cloud’s Ampere A1 Compute instances, where I continuously monitor performance with Prometheus and Grafana.</li></ul>
        `,link:""},{id:4,title:"project impact end users",content:"<h3>How does this project impact end users?</h3><section><ul><li> This project bridges the gap between patients and healthcare providers by securely uploading health telemetry data from devices to the cloud. It allows providers to monitor patients' health in real-time and make informed decisions. For end-users, it simplifies device pairing and management, making healthcare more accessible and efficient.</li></ul></section>",link:""},{id:6,title:"How improve if given more time",content:`
    <h3>What would you improve if given more time?</h3>
    <section>
      <ul>
        <li>If I had more time, I’d focus on improving the user interface to make it even smoother and more intuitive.</li>
        <li>I’d also enhance the analytics part by integrating some basic machine learning to identify usage patterns.</li>
        <li>Additionally, I would look into deploying the system across multiple AWS regions to reduce latency and improve availability.</li>
      </ul>
    </section>
  `,link:""},{id:7,title:"collaborate with other team members",content:`
    <h3>How did you collaborate with other team members?</h3>
    <section>
      <ul>
        <li>I regularly joined daily standups and sprint planning meetings to stay aligned with the team.</li>
        <li>I closely worked with frontend developers to ensure API responses were well-structured and as expected.</li>
        <li>I coordinated with DevOps for deployments and AWS configuration tasks.</li>
        <li>Code reviews, quick sync-ups, and open communication helped us move fast and solve blockers early.</li>
      </ul>
    </section>
  `,link:""},{id:8,title:"Project demonstrate your technical skills",content:`
    <h3>How does this project demonstrate your technical skills?</h3>
    <section>
      <ul>
        <li>It shows my backend skills using Node.js and TypeScript with real-world architecture patterns.</li>
        <li>I worked on AWS Lambda, SQS, SNS — showing my comfort with serverless and cloud deployments.</li>
        <li>I handled secure API design, proper error handling, and integration with frontend teams.</li>
        <li>The project also shows my ability to work in a microservices setup and troubleshoot complex bugs independently.</li>
      </ul>
    </section>
  `,link:""},{id:9,title:"primary goal of project",content:`
    <h3>What was the primary goal of the project?</h3>
    <section>
      <ul>
        <li>The goal was to build a connected healthcare system that collects patient health data from devices.</li>
        <li>This data gets securely uploaded to the cloud and helps doctors monitor patients remotely.</li>
        <li>It also involved managing device BLE pairing and secure data communication from device to backend.</li>
      </ul>
    </section>
  `,link:""},{id:10,title:"Handle API security",content:`
    <h3>How did you handle API security in your project?</h3>
    <section>
      <ul>
        <li>I used OAuth2 with JWT tokens for authentication and role-based access control.</li>
        <li>All APIs were served over HTTPS to ensure secure communication.</li>
        <li>We used AWS API Gateway for rate limiting and throttling to avoid abuse.</li>
        <li>Also monitored everything using CloudWatch and AWS X-Ray for real-time alerts and debugging.</li>
      </ul>
    </section>
  `,link:""},{id:11,title:"Test your code",content:`
    <h3>How did you test your code?</h3>
    <section>
      <ul>
        <li>I tested my code using both manual and automated methods.</li>
        <li>For APIs, I used Postman for manual testing and wrote integration tests to check full system flows.</li>
        <li>I also created unit tests to make sure each function worked as expected.</li>
        <li>During deployment, I checked logs using CloudWatch to catch any runtime issues early.</li>
        <li>This helped me catch bugs quickly and ensure smooth releases.</li>
      </ul>
    </section>
  `,link:""},{id:12,title:"Project aligned with business requirements",content:`
    <h3>How do you ensure the project is aligned with business requirements?</h3>
    <section>
      <ul>
        <li>I regularly discussed requirements with the product team to understand the business goals.</li>
        <li>I attended sprint planning and grooming sessions to clarify any doubts early.</li>
        <li>We did sprint reviews where I presented the progress and collected feedback from stakeholders.</li>
        <li>This helped ensure the development matched what the business actually needed.</li>
      </ul>
    </section>
  `,link:""},{id:13,title:"Performance of APIs",content:`
    <h3>How did you optimize the performance of the APIs?</h3>
    <section>
      <ul>
        <li>I used indexing in DynamoDB and MySQL to speed up data access.</li>
        <li>Optimized the queries and reduced unnecessary joins or lookups.</li>
        <li>Used Redis caching to avoid hitting the database for repeated calls.</li>
        <li>In AWS Lambda, I kept functions lightweight for faster execution.</li>
        <li>Also did load testing to check API behavior under traffic.</li>
      </ul>
    </section>
  `,link:""},{id:14,title:"Version control",content:`
    <h3>What tools did you use for version control and deployment?</h3>
    <section>
      <ul>
        <li>For version control, I used Git and managed code using feature branches.</li>
        <li>I used Docker to containerize the services and deploy them consistently across environments.</li>
        <li>For serverless apps, I used the Serverless Framework and deployed on AWS.</li>
        <li>I managed infrastructure with Terraform and CloudFormation for better control and repeatability.</li>
      </ul>
    </section>
  `,link:""},{id:15,title:"Measure project success",content:`
    <h3>What metrics did you use to measure project success?</h3>
    <section>
      <ul>
        <li>We tracked API uptime and response time to ensure reliability and speed.</li>
        <li>Measured how often health data was successfully uploaded to the cloud.</li>
        <li>Collected feedback from end users and product team to know how well the solution worked.</li>
        <li>Made sure all healthcare standards and compliance rules were followed.</li>
        <li>Also used CloudWatch metrics and logs to monitor backend performance.</li>
      </ul>
    </section>
  `,link:""},{id:16,title:"complex feature developed",content:`
    <h3>What was the most complex feature you developed in this project?</h3>
    <section>
      <ul>
        <li>The most complex feature I worked on was secure BLE pairing and data sync between medical devices and the cloud.</li>
        <li>I had to make sure the connection was secure, stable, and fast — even with multiple devices connected at the same time.</li>
        <li>It also involved real-time data streaming, retries, and proper error handling to ensure reliability.</li>
        <li>This pushed me to improve both my backend and device communication knowledge.</li>
      </ul>
    </section>
  `,link:""},{id:17,title:"stay updated technologies or latest technologies",content:`
    <h3>How did you stay updated with the latest technologies while working on the project?</h3>
    <section>
      <ul>
        <li>I regularly read official documentation and changelogs for Node.js, AWS, and related tools.</li>
        <li>I followed blogs like AWS News, Dev.to, and Medium articles to stay in touch with best practices.</li>
        <li>Also, I attended online webinars, tech meetups, and company-led workshops to keep learning.</li>
        <li>I often try out small proof-of-concept projects on new tech before applying it in the main codebase.</li>
      </ul>
    </section>
  `,link:""},{id:18,title:"would you do differently if start this project today",content:`
    <h3>What would you do differently if you started this project today?</h3>
    <section>
      <ul>
        <li>If I started today, I’d focus more on adding advanced analytics to generate insights from patient data.</li>
        <li>I’d also explore adding ML pipelines using AWS services like SageMaker or Lambda-based models.</li>
        <li>On the infra side, I would consider using a multi-cloud strategy to avoid vendor lock-in and improve redundancy.</li>
        <li>And finally, I would start with more extensive test automation from day one.</li>
      </ul>
    </section>
  `,link:""},{id:19,title:"project contribute professional growth",content:`
    <h3>How did this project contribute to your professional growth?</h3>
    <section>
      <ul>
        <li>This project strengthened my skills in backend development using Node.js and TypeScript.</li>
        <li>I got hands-on experience with AWS services like Lambda, API Gateway, DynamoDB, and SQS.</li>
        <li>I learned how to design scalable, secure APIs and manage end-to-end deployments.</li>
        <li>Working in a cross-functional team improved my communication and collaboration skills.</li>
        <li>It also gave me confidence to take ownership of critical features and deployments.</li>
      </ul>
    </section>
  `,link:""},{id:20,title:"ensure data compliance",content:`
    <h3>How did you ensure data compliance for healthcare standards?</h3>
    <section>
      <ul>
        <li>We followed strict data protection rules — encrypting data both in transit and at rest.</li>
        <li>Used AWS services that support healthcare compliance like HIPAA-eligible services.</li>
        <li>We also followed secure coding practices like input validation and token-based auth.</li>
        <li>Audits and logging were done using CloudWatch and X-Ray to track every data access and error.</li>
        <li>Regular reviews with the compliance team ensured we met all necessary standards.</li>
      </ul>
    </section>
  `,link:""},{id:101,title:"5 Reasons to Join/choose a <Software Company>",content:`
    <h3>Five reasons to join a good software company</h3>
    <ul>
      <li><strong>Focus on Innovation:</strong> I always look for companies that adopt modern technologies like AI, cloud, and microservices — where I can stay ahead in tech.</li>
      <li><strong>Continuous Learning:</strong> I value organizations that encourage technical growth through challenging projects, mentorship, or learning programs.</li>
      <li><strong>Global Exposure:</strong> Working with diverse clients or teams from different domains helps me broaden my problem-solving approach.</li>
      <li><strong>Healthy Work Culture:</strong> A positive environment with flexible policies and work-life balance makes me more productive and creative.</li>
      <li><strong>Career Growth & Stability:</strong> I prefer companies that offer long-term opportunities, recognize performance, and invest in their people.</li>
    </ul>
  `,link:""},{id:102,title:"Ethics",content:`
    <h3>Ethics followed in good software companies</h3>
    <ul>
      <li><strong>Integrity & Transparency:</strong> I value companies that maintain honesty in communication and business practices.</li>
      <li><strong>Customer-Centric Approach:</strong> Delivering solutions that truly solve client problems is a top priority.</li>
      <li><strong>Respect & Diversity:</strong> A healthy workplace respects different backgrounds, opinions, and promotes inclusion.</li>
      <li><strong>Commitment to Innovation:</strong> Companies that encourage learning and keep up with tech trends align with my values.</li>
      <li><strong>Social Responsibility:</strong> I admire organizations that contribute to society through ethical and sustainable practices.</li>
    </ul>
  `},{id:103,title:"Future Plans",content:"<h3>Future Plans</h3>        <ul>        <li><b>Expansion in AI & IoT:</b> Aiming to develop advanced AI and IoT solutions for various industries.</li>        <li><b>Global Market Growth:</b> Expanding its presence in international markets with strategic partnerships.</li>        <li><b>Focus on Blockchain & FinTech:</b> Investing in blockchain and financial technology for secure digital solutions.</li>        <li><b>Strengthening R&D:</b> Enhancing research capabilities to drive innovation and stay ahead in technology.</li>        <li><b>Employee & Talent Development:</b> Creating better learning programs and leadership opportunities for employees.</li>        </ul>"},{id:104,title:"Major Clients",content:`
    <h3>Major Clients</h3>
    <ul>
      <li><strong>Large Enterprises:</strong> Serves global companies across industries like healthcare, finance, and retail.</li>
      <li><strong>Tech Startups:</strong> Collaborates with startups to co-develop innovative digital solutions.</li>
      <li><strong>Public Sector:</strong> Provides tech support for government projects, public safety, and smart cities.</li>
      <li><strong>FinTech Clients:</strong> Builds secure banking and financial platforms with modern tech stacks.</li>
      <li><strong>Manufacturing & Industrial:</strong> Helps automate operations using IoT and analytics in industrial domains.</li>
    </ul>
  `},{id:105,title:"Common Issues Faced in Projects",content:"<h3>Common Issues Faced in Projects</h3>        <ul>        <li><b>Changing Requirements:</b> Frequent modifications in client needs can impact timelines.</li>        <li><b>Integration Challenges:</b> Ensuring smooth integration of new systems with existing infrastructure.</li>        <li><b>Scalability Issues:</b> Managing system performance as user demand increases.</li>        <li><b>Security Concerns:</b> Protecting data and preventing cyber threats in applications.</li>        <li><b>Time Management:</b> Balancing multiple tasks while ensuring on-time project delivery.</li>        </ul>"},{id:106,title:"Strengths and Weaknesses",content:`
    <section>
      <h3>Strengths & Weaknesses</h3>
      <ul>
        <li><strong>Strengths:</strong>
          <ul>
            <li>I'm quick at picking up new technologies — like when I learned Terraform and AWS Lambda hands-on during live projects.</li>
            <li>I enjoy solving technical problems and debugging — it's something I naturally get pulled into.</li>
            <li>I'm confident building scalable cloud solutions using AWS and serverless architecture.</li>
            <li>And I'm a team player — I always try to keep communication open and help the team move forward smoothly.</li>
          </ul>
        </li>
        <li><strong>Weaknesses:</strong>
          <ul>
            <li>Sometimes I spend extra time perfecting a solution, which can delay delivery a bit — but I’m learning to balance quality with timelines.</li>
            <li>I’ve focused more on deep technical skills, so I’m now working on improving soft skills like giving clear presentations and mentoring.</li>
            <li>I used to take on too much myself, but now I consciously practice delegating and trusting others when working in teams.</li>
          </ul>
        </li>
      </ul>
    </section>
  `,link:""},{id:107,title:"Hard Work vs Smart Work",content:"<h3>Difference Between Hard Work & Smart Work</h3>        <ul>        <li><b>Hard Work:</b>        <ul>        <li>Putting in long hours to complete a task.</li>        <li>Following traditional methods to solve a problem.</li>        <li>Requires more effort and energy.</li>        </ul>        </li>        <li><b>Smart Work:</b>        <ul>        <li>Using efficient techniques to complete tasks faster.</li>        <li>Finding the best possible solution with minimal effort.</li>        <li>Focuses on productivity rather than just effort.</li>        </ul>        </li>        <li><b>Conclusion:</b> A balance of both is necessary for success—hard work builds discipline, and smart work ensures efficiency.</li>        </ul>"},{id:5,title:"Confidence vs Overconfidence",content:"<h3>Confidence vs Overconfidence</h3>        <ul>        <li><b>Confidence:</b> A positive belief in one's abilities, expressed as 'I can do it.'</li>        <li><b>Overconfidence:</b> An excessive belief in oneself, expressed as 'Only I can do it.'</li>        <li>Confidence is essential for success, while overconfidence can lead to failure.</li>        </ul>"},{id:7,title:"Willingness to Work Nights and Weekends",content:`
    <section>
      <h3>How do you feel about working nights and weekends?</h3>
      <ul>
        <li>Ideally, I value personal time with family, which helps me stay balanced and focused.</li>
        <li>But I’m flexible when the work demands it — if there’s a critical delivery or production issue, I’m absolutely okay to support during nights or weekends.</li>
        <li>I see the company as my extended family, and I’m always ready to contribute when it’s needed most.</li>
      </ul>
    </section>
  `,link:""},{id:8,title:"Ability to Work Under Pressure",content:`
    <section>
      <h3>Can you work under pressure?</h3>
      <ul>
        <li>Yes, I’ve handled many situations where deadlines were tight or issues were urgent.</li>
        <li>Pressure actually sharpens my focus — I prioritize better and avoid distractions.</li>
        <li>It also pushes me to think creatively and improve my problem-solving skills.</li>
        <li>For example, during a live integration issue in production, I calmly traced the root cause and fixed it without delays.</li>
      </ul>
    </section>
  `,link:""},{id:9,title:"Willingness to Relocate or Travel",content:`
    <section>
      <h3>Are you willing to relocate or travel?</h3>
      <ul>
        <li>Yes, I’m open to both. I enjoy traveling and seeing new places.</li>
        <li>I believe relocation or travel helps you grow professionally — you get to learn new cultures, work with different teams, and take on fresh challenges.</li>
        <li>I see it as a good opportunity, not a constraint.</li>
      </ul>
    </section>
  `,link:""},{id:14,title:"Expected Duration of Employment",content:`
    <section>
      <h3>How long would you expect to work for us if hired?</h3>
      <ul>
        <li>I’m looking for a long-term opportunity where I can grow technically and professionally.</li>
        <li>As long as I keep learning and contributing meaningfully, I would love to continue.</li>
        <li>If I see good growth, challenging projects, and a healthy work environment, I don't see a reason to leave.</li>
      </ul>
    </section>
  `,link:""},{id:18,title:"Being an Asset to Organization",content:`
    <section>
      <h3>How would you be an asset to this organization?</h3>
      <ul>
        <li>I bring strong hands-on experience with full-stack development, especially in scalable backend systems and cloud deployments.</li>
        <li>I’m dedicated to learning — I pick up new tools and technologies quickly and apply them effectively.</li>
        <li>I also believe in team success — I always collaborate well and take ownership of tasks, even under pressure.</li>
        <li>So I feel I can contribute both technically and culturally to the team.</li>
      </ul>
    </section>
  `,link:""},{id:20,title:"Would You Lie for the Company?",content:`
    <section>
      <h3>Would you lie for the company?</h3>
      <ul>
        <li>Honestly, I believe in transparency and ethics in professional life.</li>
        <li>If it's about protecting confidential information or avoiding unnecessary panic — like simplifying a situation — that’s acceptable.</li>
        <li>But I wouldn't lie in a way that harms a client, a teammate, or the company’s long-term reputation.</li>
        <li>So I’d say — I’ll act responsibly, balancing truth and professionalism as per the context.</li>
      </ul>
    </section>
  `,link:""},{id:29,title:"Rating the Interviewer",content:"<h3>On a scale of one to ten, rate me as an interviewer.</h3>        <ul>        <li>Sorry, but I cannot rate you in such a short interaction.</li>        <li>However, I appreciate the engaging conversation and learned a lot.</li>        <li>It was a great experience interacting with you.</li>        </ul>"},{id:29,title:"Master Your thoughts",content:`<h3>Master Your thoughts and Master Your life.</h3>        <p>This Book tells
How to pull  out of the  negative emotions and help to be happy and successful, enabling you to enjoy life to the fullest.
How we  understand the power of intention.</br>


Sir could you please allow me to think on this question?
I am so sorry sir i am not getting the ans
Could you please help me with this.</br>


What should I hire you?
Well sir i don't think i am the best but i do think i am close to the best.
justify it ?
Definitely sir if you see my resume and my project.
I have gone through a website and i have found that somewhere you also working on this project(unke project ka naam) using these technology(technology ka naam)
</p>`},{title:"Salary Negotiation Script",content:`
      <table border="1">
        <thead>
          <tr>
            <th>Scenario</th>
            <th>Response</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td><strong>HR Asks About Current Salary</strong></td>
            <td>
              <strong>HR:</strong> "What is your current salary?"<br>
              <strong>You:</strong> "My current CTC is ₹4.8 LPA (₹35K in-hand) with remote work. Moving to an office increases my living costs, so I expect ₹7.5–9 LPA, considering my contributions in Full Stack development as REST APIs, AWS, and performance optimization."
            </td>
          </tr>
          <tr>
            <td><strong>Initial Salary Discussion</strong></td>
            <td>
              <strong>HR:</strong> "What is your expected salary?"<br>
              <p>To be honest, my main goal is to join a team where I can grow technically and contribute meaningfully. That said, I do expect a fair compensation based on my experience and skills.</p>
               <p>With around 3 years of experience in full-stack development, backend architecture, and AWS deployment, I’m looking for a package that reflects both my current skill set and market standards.</p>
              <strong>You:</strong> "Considering my experience, skills, and the added cost of moving to an office location, I believe a salary in the range of ₹7.5–9 LPA would be appropriate."
            </td>
          </tr>
          <tr>
            <td><strong>HR Says 'That’s Beyond Our Budget'</strong></td>
            <td>
              <strong>HR:</strong> "Our budget is around ₹7 LPA."<br>
              <strong>You:</strong> "I understand, but given my expertise in Node.js, TypeScript, AWS, and MongoDB, I believe ₹7.5–9 LPA is justified. Also, relocation has additional costs."<br>
              <strong>Alternative:</strong> "If salary flexibility is limited, can we discuss relocation assistance, rental allowance, or a performance-based revision in 6 months?"
            </td>
          </tr>
          <tr>
            <td><strong>HR Says 'We’ll Review Later'</strong></td>
            <td>
              <strong>HR:</strong> "We will review your salary after joining."<br>
              <strong>You:</strong> "I appreciate the opportunity. I'd be happy to join if we finalize a competitive starting package. However, I would like a written confirmation for a salary review within 6 months based on performance."
            </td>
          </tr>
        </tbody>
      </table>
    `,link:""},{id:30,title:"Salary Expectation",content:"<h3>What is your salary expectation?</h3>        <ul>        <li>Sir, my salary expectation is as per the company policy.</li>        <li>If asked how I would survive on a very low salary, my response would be:</li>        <li>That is not my concern; it is the company's concern.</li>        <li>I am joining a great organization that values its employees.</li>        <li>I trust that the company will take care of me, and my focus will be on delivering 100% effort in my work and responsibilities.</li>        </ul>"},{id:30,title:"questions to ask with HR",content:`
    <h3>Salary & Appraisal</h3>        <ul>
        <li>How does the salary increment process work here?</li>
     <li>How often are performance reviews conducted?</li>
     <li>What percentage hike can one typically expect during an annual appraisal?</li>
     <li>Is there any probation period? If yes, how long and how does it affect compensation or benefits?</li>
     <li>Are there any joining bonuses or retention bonuses offered?</li> 
     </ul>

    <h3>Company Culture & Work-Life Balance</h3>        <ul>
        <li>What’s the team structure and working style like (remote, hybrid, office)?</li>
        <li>How does the company support work-life balance?</li>
        <li>What tools or practices does the team use for collaboration and productivity?</li>
        <li>How does the company handle overtime or weekend work, if any? </li>
     </ul>
     
     `},{title:"Questions to Ask the Interviewer",content:`
      <table border="1">
        <thead>
          <tr>
            <th>Category</th>
            <th>Questions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Role & Responsibilities</strong></td>
            <td>
              <ul>
                <li>Can you describe the day-to-day responsibilities of this role?</li>
                <li>What are the key challenges someone in this position would face?</li>
                <li>What are the expectations for this role in the first 6 months?</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><strong>Team & Culture</strong></td>
            <td>
              <ul>
                <li>Can you tell me about the team I would be working with?</li>
                <li>How does the team collaborate on projects?</li>
                <li>What is the company culture like?</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><strong>Technology & Projects</strong></td>
            <td>
              <ul>
                <li>What tech stack does the team primarily use?</li>
                <li>Are there any major projects or challenges the team is currently working on?</li>
                <li>How does the company stay updated with new technologies?</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><strong>Growth & Learning</strong></td>
            <td>
              <ul>
                <li>Are there opportunities for career growth and skill development?</li>
                <li>Does the company support certifications, courses, or conferences?</li>
                <li>How do performance reviews and promotions work here?</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><strong>Company Vision & Future</strong></td>
            <td>
              <ul>
                <li>What are the company's goals for the next year?</li>
                <li>How does this role contribute to the company's long-term vision?</li>
                <li>How has the company evolved in recent years?</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><strong>Final Wrap-up</strong></td>
            <td>
              <ul>
                <li>Do you have any concerns about my fit for this role?</li>
                <li>What are the next steps in the interview process?</li>
                <li>Is there anything else you would like to know about me?</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    `,link:""},{id:1,title:"know about our company",content:"<h3>What do you know about our company?</h3>        <ul>        <li>Your company is a well-established organization known for its expertise in <b>[mention key domain, e.g., software solutions, AI, cloud services, etc.]</b>.</li>        <li>It has built a strong reputation for delivering innovative and scalable solutions to its clients.</li>        <li>The company is recognized for fostering a great work culture and encouraging professional growth.</li>        <li>It continuously adapts to emerging technologies and trends to stay competitive in the industry.</li>        </ul>"},{id:6,title:"Why Do You Think You Are Fit for Our Organization?",content:`
    <section>
      <h3>Why do you think you are fit for our organization?</h3>
      <ul>
        <li>I have hands-on experience with the technologies you're looking for — like Node.js, TypeScript, React, MongoDB, AWS, and microservices.</li>
        <li>I pick up new tools quickly and can adapt to different project needs without much ramp-up time.</li>
        <li>I enjoy solving real-world problems and writing clean, scalable code that adds value to the product.</li>
        <li>I work well in a team and communicate clearly, which helps in fast-paced or collaborative environments.</li>
        <li>I’m passionate about learning and constantly improving — that helps me stay aligned with company goals and industry standards.</li>
      </ul>
    </section>
  `,link:""},{id:8,title:"Tell us about company",content:"<h3>Tell us about Impelsys and its positioning as compared to its competitors?</h3>        <ul>        <li>Impelsys is a leading provider of digital content and learning solutions, specializing in e-learning platforms, digital publishing, and knowledge management.</li>        <li>It offers end-to-end solutions that help businesses and institutions manage, distribute, and monetize their content.</li>        <li>Compared to its competitors, Impelsys stands out for its strong focus on <b>AI-driven learning, cloud-based solutions, and customizable platforms</b>.</li>        <li>Its ability to deliver innovative solutions and high-quality user experiences makes it a preferred choice for organizations worldwide.</li>        </ul>"},{id:12,title:"role model, incorporated your life",content:"<h3>Who is your role model? What have you incorporated into your life from him/her?</h3>        <ul>        <li>My role model is my <b>mother</b> because of her resilience, dedication, and ability to handle any situation with strength.</li>        <li>She has always pushed me to strive for excellence and never settle for less.</li>        <li>Her ability to manage responsibilities and face challenges with confidence inspires me daily.</li>        <li>From her, I have learned discipline, patience, and the importance of staying focused on my goals.</li>        </ul>"},{id:16,title:"Four things would make a good leader",content:"<h3>What Four things would make a good leader?</h3>        <ul>        <li><b>Have Faith in Their Beliefs:</b> A good leader must have confidence in their vision and decisions.</li>        <li><b>Earn the Respect of the Team:</b> Leaders gain respect by being honest, fair, and leading by example.</li>        <li><b>Make the Hard Choices:</b> A leader must take responsibility and make tough decisions when needed.</li>        <li><b>Being Close to Team Members:</b> Understanding and supporting the team builds trust and motivation.</li>        </ul>"},{id:17,title:"What is success?",content:"<h3>What is success?</h3>        <ul>        <li>Success refers to the accomplishment of an aim or purpose.</li>        <li>For me, success is making an improvement in all fields compared to the past, whether that is in my skills, knowledge, or personal happiness.</li>        <li>Success is not a destination but a continuous journey of growth and learning.</li>        </ul>"},{id:19,title:"Have you ever been a leader?",content:"<h3>Have you ever been a leader?</h3>        <ul>        <li>Yes, I have been a team leader during our academic mini-project.</li>        <li>I confidently applied my leadership skills to guide my team members.</li>        <li>To motivate my team, I used to give small treats upon successful completion of assigned tasks.</li>        </ul>"},{id:20,title:"most stressful situation",content:"<h3>Which is the most stressful situation you have faced in college life?</h3>        <ul>        <li>I believe that stress depends on how we perceive a situation.</li>        <li>If I consider something tough, it becomes difficult, but if I approach it with confidence, I can handle it with ease.</li>        </ul>"},{id:22,title:"makes stand out other candidates",content:"<h3>What makes you stand out against all the other candidates?</h3>        <ul>        <li>I understand that success is not always guaranteed, but I never lose faith.</li>        <li>Whether I succeed or not, I stay committed and keep learning.</li>        <li>My persistence and positive mindset make me stand out from other candidates.</li>        </ul>"},{id:23,title:"Where Would You Like to See Yourself in the Next Five Years?",content:`
    <section>
      <h3>Where would you like to see yourself in the next five years?</h3>
      <ul>
        <li>In the next five years, I see myself growing into a senior or lead engineer role where I can mentor others and make architectural decisions.</li>
        <li>I want to be someone the team relies on for solving complex problems and delivering reliable solutions.</li>
        <li>I also want to keep improving technically — especially in system design, cloud architecture, and performance optimization.</li>
        <li>At the same time, I’d like to contribute to the company’s long-term goals and help drive innovation in the projects I’m part of.</li>
      </ul>
    </section>
  `,link:""},{id:24,title:"ultimate goal in life",content:"<h3>What is your ultimate goal in life?</h3>        <ul>        <li>My goal is to work in a reputed company like yours where I can enhance my technical skills and knowledge.</li>        <li>My long-term goal is to reach a topmost position in a reputed organization.</li>        <li>My ultimate goal is to make my family proud of me.</li>        <li>I also aspire to contribute significantly to my company's success, ensuring my name is recognized as part of its growth story.</li>        </ul>"},{id:26,title:"personal attributes do you have",content:"<h3>Which personal attributes do you have?</h3>        <ul>        <li>I always stay positive, even in challenging situations.</li>        <li>I maintain a respectful attitude towards both my elders and younger colleagues.</li>        </ul>"},{id:27,title:"Where Do You Rate Yourself as an Engineer?",content:`
    <section>
      <h3>Where do you rate yourself as an engineer?</h3>
      <ul>
        <li>I believe learning is a continuous process, especially in tech where things change rapidly.</li>
        <li>If I had to rate myself, I’d say I’m at a solid 8 out of 10.</li>
        <li>I have a strong foundation and hands-on experience in backend, cloud, and full-stack development.</li>
        <li>But I also know there's a lot more to explore — whether it’s system design, performance tuning, or leadership — and I’m actively working on those areas.</li>
      </ul>
    </section>
  `,link:""},{id:17,title:"day to day work in software company",content:"<h3>What do you think is day-to-day work in a software company?</h3>        <ul>        <li>Software engineers start their day by attending team meetings to discuss project updates, plans, and blockers.</li>        <li>They spend time coding, debugging, and testing software to ensure smooth development.</li>        <li>Collaboration with team members, reviewing code, and designing project architecture are also part of the daily routine.</li>        <li>Many companies provide lunch for employees, allowing them to discuss work and socialize.</li>        <li>At the end of the day, they might document their progress and plan for the next tasks.</li>        </ul>"},{id:19,title:"plan to do with your first salary",content:"<h3>What is your plan to do with your first salary?</h3>        <ul>        <li>When I earned my first salary, I gave it to my parents as a token of gratitude.</li>        <li>For my next first salary, I plan to save a portion of it to invest in my dreams.</li>        <li>I believe in financial planning and want to use my earnings wisely to fulfill my aspirations.</li>        </ul>"},{id:20,title:"thoughts on work life balance",content:"<h3>What are your thoughts on work-life balance?</h3>        <ul>        <li>The biggest challenge in maintaining work-life balance is time management.</li>        <li>Having a clear plan and prioritizing tasks help in balancing professional and personal life.</li>        <li>When managed well, work-life balance can lead to a fulfilling career and a happy personal life.</li>        </ul>"},{id:22,title:"deal with feedback and criticism",content:"<h3>How will you deal with feedback and criticism?</h3>        <ul>        <li>I accept constructive criticism positively as it helps me improve.</li>        <li>If the criticism is valid, I reflect on it and make necessary changes.</li>        <li>If it's baseless or comes from an ego-driven perspective, I don't let it affect me.</li>        <li>My focus remains on growth, and I take feedback as a learning opportunity.</li>        </ul>"},{id:23,title:"toughest decision",content:"<h3>What is the toughest decision you ever had to make?</h3>        <ul>        <li>I believe that the toughness of a decision depends on how we perceive it.</li>        <li>If I see a situation as difficult, it becomes tough; if I take it as a challenge, I can handle it.</li>        <li>For me, no decision is the toughest because every challenge is an opportunity to learn and grow.</li>        </ul>"},{id:24,title:"consider as attitude",content:"<h3>What do you consider as attitude?</h3>        <ul>        <li>Attitude is a mindset or behavior towards a person or situation.</li>        <li>A positive attitude reflects a constructive and optimistic approach to life.</li>        <li>It is defined as the way of thinking, feeling, and behaving that showcases one's state of mind.</li>        </ul>"},{title:"Negotiating with a Non-Technical Client on Technology Choice",content:`
      <ul>
        <li><strong>Understand Client's Needs:</strong> Ask about their business goals, expected user base, scalability needs, and budget to understand their requirements.</li>
        <li><strong>Simplify Technical Concepts:</strong> Explain frontend as the user interface and backend as the server-side logic. Use real-world analogies like a restaurant (menu = frontend, kitchen = backend).</li>
        <li><strong>Present Language Benefits:</strong> Highlight how a programming language meets their needs—performance, security, cost-effectiveness, and scalability—without using technical jargon.</li>
        <li><strong>Show Industry Standards:</strong> Mention case studies or well-known companies using the suggested tech stack to build confidence in your recommendation.</li>
        <li><strong>Address Concerns:</strong> If they have doubts, compare alternatives and explain long-term maintenance, developer availability, and cost factors.</li>
        <li><strong>Use Visual Aids:</strong> Provide diagrams, flowcharts, or a simple prototype to help them visualize how the technology will support their business.</li>
        <li><strong>Build Trust:</strong> Reassure them that the choice is based on experience, best practices, and future-proofing, ensuring long-term success.</li>
      </ul>
    `},{id:103,title:"What Are Your Strengths?",content:`
    <section>
      <ul>
        <li><strong>Problem Solving:</strong> I enjoy debugging, analyzing system performance, and improving response times.</li>
        <li><strong>Fast Learner:</strong> I’ve self-learned many tools like Terraform and AWS Lambda on real projects.</li>
        <li><strong>Clean Coding:</strong> I always follow proper design principles like DRY, SRP, and OOP.</li>
        <li><strong>Team Player:</strong> I’ve worked closely with cross-functional teams and always prioritize communication.</li>
        <li><strong>Ownership:</strong> I take full responsibility for my tasks — from design to deployment.</li>
      </ul>
    </section>
  `,link:""},{id:11,title:"Why Do You Want to Work with Our Company?",content:`
    <section>
      <h3>Why do you want to work with our company?</h3>
      <ul>
        <li>I've researched your company and I’m really impressed by the kind of projects you're working on — especially the focus on innovation, quality, and scalable tech solutions.</li>
        <li>I want to be part of a team where I can contribute to impactful products and learn from experienced professionals.</li>
        <li>Your tech stack and engineering culture seem to align well with my skills in Node.js, TypeScript, AWS, and microservices.</li>
        <li>I’m also looking for a company where I can grow long-term — technically and professionally — and I feel this is the right environment for that.</li>
      </ul>
    </section>
  `,link:""},{id:4,title:"Why Are You Looking for a Change?",content:`
    <section>
      <h3>Why are you looking for a change?</h3>
      <ul>
        <li>I've had a great learning experience in my current company — worked on backend systems, AWS deployments, and real-time problem-solving.</li>
        <li>Now I feel ready to take on bigger challenges and work on more complex, large-scale systems.</li>
        <li>I’m looking for a role where I can grow further, explore new technologies, and contribute to high-impact projects.</li>
        <li>Also, I’m hoping to work with a strong engineering team where I can learn and also share my knowledge.</li>
      </ul>
    </section>
  `,link:""},{id:5,title:"Tell Me About the Gap in Your Resume",content:`
    <section>
      <h3>Tell me about the gap in your resume</h3>
      <ul>
        <li>The gap was a conscious decision — I used that time to focus on improving my skills and preparing for better opportunities.</li>
        <li>I enrolled in structured courses on Data Structures, System Design, and cloud technologies, and built small projects to apply what I learned.</li>
        <li>It also gave me a chance to reflect on my strengths and career direction, so I could come back more focused and prepared.</li>
        <li>Now I’m fully ready to contribute and excited to join a team where I can add long-term value.</li>
      </ul>
    </section>
  `,link:""},{id:28,title:"What Is Your Biggest Achievement So Far?",content:`
    <section>
      <h3>What is your biggest achievement so far?</h3>
      <ul>
        <li>One of my biggest achievements was during my work on the KORE Connected Health Telemetry project.</li>
        <li>We had a critical challenge with authentication and secure communication between devices — specifically certificate-based communication with KDP integration.</li>
        <li>I took ownership of the issue, worked closely with AWS services and the device team, and resolved the certificate problem without delaying the delivery.</li>
        <li>My effort was appreciated by both the client and my company, and I even received a Thank You card from management.</li>
        <li>This experience boosted my confidence and taught me how to troubleshoot under pressure, especially in live production systems.</li>
        <li>It also made me realize the value of persistence, communication, and end-to-end ownership.</li>
      </ul>
    </section>
  `,link:""},{id:9,title:"Why Should We Hire You",content:`
    <section>
      <h3>Why should we hire you?</h3>
      <ul>
        <li>I have solid hands-on experience in full-stack development using Node.js, TypeScript, React, MongoDB, and AWS — which aligns with your tech stack.</li>
        <li>I’ve worked on real-world, scalable projects — building REST APIs, deploying serverless solutions, and solving production-level challenges.</li>
        <li>I take full ownership of my tasks, from writing clean code to handling deployment and debugging under pressure.</li>
        <li>I’m a quick learner and can pick up new tools and frameworks with minimal ramp-up time.</li>
        <li>I’m also a strong team player — I communicate clearly, collaborate well, and enjoy contributing to shared success.</li>
        <li>So overall, I believe I can contribute both technically and culturally to your team from day one.</li>
      </ul>
    </section>
  `,link:""},{id:31,title:"Handling Sudden Change in Project Priorities",content:`
    <section>
      <h3>How would you handle it if project priorities suddenly changed?</h3>
      <ul>
        <li>I understand that in real-world projects, priorities can shift based on business needs, client feedback, or critical issues.</li>
        <li>If that happens, my first step would be to stay calm and reassess the new priorities with my team or manager.</li>
        <li>I’d ask questions to understand the reason behind the change — is it urgent, high-impact, or time-sensitive?</li>
        <li>Then I’d re-organize my current tasks, drop or postpone low-priority items, and fully focus on what’s now important.</li>
        <li>I also make sure to communicate clearly with teammates, so we stay aligned and avoid confusion or duplicate work.</li>
        <li>Overall, I treat it as a chance to stay flexible, learn adaptability, and support the team in delivering what matters most.</li>
      </ul>
    </section>
  `,link:""},{id:29,title:"You Were Not Satisfied with Your Performance",content:`
    <section>
      <h3>Tell me about a time when you were not satisfied with your performance</h3>
      <ul>
        <li>There was a time during my early involvement in the KORE health telemetry project where I underestimated the effort needed for a module related to API integration.</li>
        <li>I delivered the first version, but later realized it lacked proper error handling and test coverage.</li>
        <li>Even though it was working functionally, I wasn’t happy with the quality — it didn’t meet my personal standards.</li>
        <li>So, I took the feedback, refactored the module, added detailed logging and unit tests, and made it more maintainable.</li>
        <li>This experience taught me the importance of thinking beyond just delivery — and focusing more on long-term maintainability and code quality.</li>
        <li>Since then, I make sure to plan time for code reviews, testing, and future-proofing in every task I take up.</li>
      </ul>
    </section>
  `,link:""},{id:30,title:"A Time I Was Happy with My Work, reaction",content:`
    <section>
      <h3>Can you tell me about a time you were happy with your work and what was your reaction?</h3>
      <ul>
        <li>I felt genuinely proud during the KDP integration in the KORE health project, where we had critical communication issues due to certificate mismatches.</li>
        <li>I took the lead in analyzing the issue, coordinated with multiple teams, and resolved the problem before it impacted the client timeline.</li>
        <li>The client appreciated our work and my manager gave me a thank-you card as a token of recognition.</li>
        <li>That moment gave me a strong sense of accomplishment and reinforced my confidence in handling high-pressure tasks independently.</li>
        <li>It also made me realize the value of deep debugging and proactive communication in real-time problem-solving.</li>
      </ul>
    </section>
  `,link:""},{id:31,title:"A Time I Faced Difficulty During a Project",content:`
    <section>
      <h3>Tell me about a time you experienced difficulty at work while working on a project</h3>
      <ul>
        <li>Once, while working on the Gadgeon Middle East website, we faced unexpected issues with serverless deployment due to AWS IAM permission misconfigurations in Terraform scripts.</li>
        <li>It delayed the deployment pipeline, and the team wasn’t familiar with resolving such Terraform-based issues.</li>
        <li>I took the initiative to read AWS documentation, debug using CloudTrail logs, and fixed the IAM roles without affecting other modules.</li>
        <li>It took extra hours, but I learned a lot and helped the team avoid the same issue in future deployments.</li>
        <li>This situation taught me that sometimes going deep into the root cause saves more time in the long run.</li>
      </ul>
    </section>
  `,link:""},{id:32,title:"A Time I Showed/displayed Leadership Skills",content:`
    <section>
      <h3>Tell me about a time where you displayed leadership skills</h3>
      <ul>
        <li>During a sprint in the KORE health project, one of our teammates had to leave unexpectedly during a critical API development phase.</li>
        <li>I voluntarily stepped in, took charge of assigning remaining tasks, and helped the team prioritize features based on dependencies.</li>
        <li>I also reviewed their code, ensured proper handover, and maintained communication with the QA team to keep things on track.</li>
        <li>We completed the sprint with minimal delay, and my manager appreciated how I handled the situation calmly.</li>
        <li>This experience showed me that leadership is not about title — it’s about taking ownership and helping the team move forward during uncertainty.</li>
      </ul>
    </section>
  `,link:""},{id:33,title:"A Mistake I Made in My Career",content:`
    <section>
      <h3>Was there any point in your career where you made a mistake? Tell me about it.</h3>
      <ul>
        <li>Yes, during my early phase at Gadgeon, I once pushed a minor bug to production because I assumed the change was too small to need thorough testing.</li>
        <li>It was a simple UI-related change, but it caused a button to break on certain screen sizes.</li>
        <li>Though it was quickly fixed, I realized that no change is too small to skip testing or peer review.</li>
        <li>Since then, I make sure to follow proper code review and testing practices, even for the smallest tasks.</li>
        <li>The experience taught me to stay disciplined and never cut corners in the name of speed — quality matters at every step.</li>
      </ul>
    </section>
  `,link:""},{id:34,title:"Handle Disagreements with Manager",content:`
    <section>
      <h3>How did you handle disagreements with your manager?</h3>
      <ul>
        <li>Disagreements are natural at work, and I believe it's important to handle them respectfully and logically.</li>
        <li>Once, I had a different opinion on how we should handle error retries in an API flow — I felt we needed a more centralized retry mechanism using queues, while my manager preferred handling it at the controller level.</li>
        <li>I didn’t argue emotionally — I prepared my points, showed how centralized retry would reduce duplicate logic and improve maintainability, and then discussed it in our next team sync.</li>
        <li>My manager appreciated the effort, and though we didn’t immediately change the approach, he later adopted it in another service.</li>
        <li>So I learned that even if your idea isn’t accepted right away, respectful communication builds trust and influence over time.</li>
      </ul>
    </section>
  `,link:""},{id:2,title:"If You Win a Million-Dollar Lottery, Would You Still Work?",content:`
    <section>
      <h3>If you win a million-dollar lottery, would you still work?</h3>
      <ul>
        <li>Yes, I would still choose to work — because I enjoy solving problems and building things.</li>
        <li>Money brings comfort, but work gives me purpose and growth.</li>
        <li>I'd probably take a short break to travel or support my family more, but I’d definitely return to work and continue learning.</li>
        <li>I feel most satisfied when I’m contributing to meaningful projects and improving myself as an engineer.</li>
        <li>Plus, I love working in teams and learning from others — no amount of money can replace that experience and growth.</li>
      </ul>
    </section>
  `,link:""},{id:3,title:"What Would You Do If You Were Working Under a Bad Boss",content:`
    <section>
      <h3>What would you do if you were working under a bad boss?</h3>
      <ul>
        <li>First, I’d try to understand the reason behind the behavior — maybe it’s stress, deadlines, or miscommunication.</li>
        <li>I’d stay professional, focus on doing my job well, and avoid reacting emotionally.</li>
        <li>If needed, I’d ask for a one-on-one discussion to align expectations and share any concerns respectfully.</li>
        <li>I believe open communication can solve most issues — sometimes, just clearing the air makes things better.</li>
        <li>And if things don’t improve over time, I’d raise it through the proper channels or look for a team where I can grow in a healthier environment.</li>
      </ul>
    </section>
  `,link:""},{id:4,title:"What Do You Think Is an Ideal Work Environment?",content:`
    <section>
      <h3>What do you think is an ideal work environment?</h3>
      <ul>
        <li>For me, an ideal work environment is where there's mutual respect, open communication, and a strong sense of ownership.</li>
        <li>I prefer working in teams where people support each other and are open to sharing knowledge and feedback.</li>
        <li>Technical growth is also important — so a place where learning is encouraged and you're exposed to new challenges keeps me motivated.</li>
        <li>Flexibility also matters — I appreciate when there’s trust in the team to manage their work with responsibility.</li>
        <li>Overall, I feel most productive where people value collaboration, quality, and continuous improvement.</li>
      </ul>
    </section>
  `,link:""},{id:5,title:"What Does Motivation Mean to You?",content:`
    <section>
      <h3>What does motivation mean to you?</h3>
      <ul>
        <li>To me, motivation means having a clear reason to keep pushing forward, even when things get tough.</li>
        <li>It comes from both internal drive — like wanting to grow, solve problems, and improve every day — and external factors like appreciation, good teamwork, and meaningful projects.</li>
        <li>When I see my work making an impact or helping users, that gives me a strong sense of motivation.</li>
        <li>Even learning a new skill or solving a tricky bug gives me a boost — small wins matter.</li>
        <li>So for me, motivation is about purpose, progress, and the opportunity to keep getting better as a developer and as a person.</li>
      </ul>
    </section>
  `,link:""},{id:104,title:"What is Your Dream Company Like?",content:`
    <section>
      <p>My dream company is one where learning never stops — where the team encourages innovation, uses the latest technologies, and values clean code and good design.</p>
      <p>I also appreciate a company that values its people, encourages open communication, and supports career growth through feedback and mentoring.</p>
    </section>
  `,link:""},{id:105,title:"How Do You Ensure Task Completion?",content:`
    <section>
      <p>I usually break larger tasks into smaller ones and prioritize them based on urgency and impact.</p>
      <p>I use tools like JIRA or Trello and follow a checklist-based approach. I also estimate timelines realistically and communicate any blockers early with my team.</p>
      <p>This helps me deliver consistently and maintain good quality even under pressure.</p>
    </section>
  `,link:""},{id:106,title:"Liked or Feared?",content:`
    <section>
      <p>I prefer being liked — not just on a personal level, but as someone who’s dependable, respectful, and collaborative.</p>
      <p>I believe teams perform better when people feel comfortable, supported, and heard. That kind of trust builds long-term productivity.</p>
    </section>
  `,link:""},{id:107,title:"How Long Will You Stay/work With Us?",content:`
    <section>
      <p>I’m looking for stability and long-term growth. If the work continues to challenge me and I'm learning and contributing meaningfully, I don’t see any reason to leave.</p>
      <p>I believe in giving my best to wherever I work, and I want to grow with the company.</p>
    </section>
  `,link:""},{id:108,title:"If You Were Reborn as an Animal",content:`
    <section>
      <p>I’d like to be an eagle.</p>
      <p>Eagles have great vision, they fly high but stay focused — just like how I like to see the big picture in a project while still paying attention to the details.</p>
      <p>They’re also independent, strong, and patient — qualities I try to follow in my professional life as well.</p>
    </section>
  `,link:""}],Qf=[...Gf,...Kf],pd=()=>B.jsx(gt,{links:Qf}),Yf=[{title:"Key features",content:"<section><h3>Python is a versatile and popular programming language known for its simplicity, elegant syntax, and a vast ecosystem of libraries.</h3><h4>Key Features of Python</h4><ol><li><strong>Interpreted and Interactive</strong><br>Python uses an interpreter, allowing developers to run code line-by-line, making it ideal for rapid prototyping and debugging.</li><li><strong>Easy to Learn and Read</strong><br>Python's clean, readable syntax, often resembling plain English, reduces the cognitive load for beginners and experienced developers alike.</li><li><strong>Cross-Platform Compatibility</strong><br>Python is versatile, running on various platforms, such as Windows, Linux, and macOS, without requiring platform-specific modifications.</li><li><strong>Modular and Scalable</strong><br>Developers can organize their code into modular packages and reusable functions.</li><li><strong>Rich Library Ecosystem</strong><br>The Python Package Index (PyPI) hosts over 260,000 libraries, providing solutions for tasks ranging from web development to data analytics.</li><li><strong>Exceptionally Versatile</strong><br>From web applications to scientific computing, Python is equally proficient in diverse domains.</li><li><strong>Memory Management</strong><br>Python seamlessly allocates and manages memory, shielding developers from low-level tasks, such as memory deallocation.</li><li><strong>Dynamically Typed</strong><br>Python infers the data type of a variable during execution, easing the declaration and manipulation of variables.</li><li><strong>Object-Oriented</strong><br>Python supports object-oriented paradigms, where everything is an object, offering attributes and methods to manipulate data.</li><li><strong>Extensible</strong><br>With its C-language API, developers can integrate performance-critical tasks and existing C modules with Python.</li></ol></section>",link:""},{title:"Py applications",content:`<h3>It was designed with an emphasis on code readability, and its syntax allows programmers to express their concepts in fewer lines of code.</h3>
    <h3>It is used for:</h3>
    <ul>
        <li>System Scripting</li>
        <li>Web Development</li>
        <li>Game Development</li>
        <li>Software Development</li>
        <li>Complex Mathematics</li>
    </ul>`,link:""},{title:"Py compiled or inter?",content:"Actually, Python is a partially compiled language and partially interpreted language. The compilation part is done first when we execute our code and this will generate byte code internally this byte code gets converted by the Python virtual machine(p.v.m) according to the underlying platform(machine+operating system).",link:""},{title:"Mutable & Immutable",content:`Mutable data types can be edited i.e., they can change at runtime. Eg – List, Dictionary, etc.
Immutable data types can not be edited i.e., they can not change at runtime. Eg – String, Tuple, etc.`,link:""},{title:"args passedByvalue,ByReference",content:`<h3>How are arguments passed by value or by reference in Python?</h3>In Python, arguments are passed by object reference (also called “pass by assignment”). This means that functions receive references to the same objects:

Mutable objects (like lists or dictionaries) can be modified within the function.
Immutable objects (like integers or strings) cannot be changed and reassigning them inside the function doesn’t affect the original object.`,link:""},{title:"Set vs Dictionary",content:"The set is unordered collection of unique items that is iterable and mutable. A dictionary in Python is an ordered collection of data values, used to store data values like a map.",link:""},{title:"List Comprehension?",content:"List comprehension is a syntax construction to ease the creation of a list based on existing iterable.</br>For Example: <li>my_list = [i for i in range(1, 10)]</li>",link:""},{title:"lambda fun",content:"A lambda function is an anonymous function. This function can have any number of parameters but, can have just one statement. For Example:<li>a = lambda x, y : x*y</li><li>print(a(7, 19))</li>",link:""},{title:"break, continue, pass",content:`<h3>Loop Control Statements in Python:</h3>
    <ul>
        <li>
            <strong>Break:</strong> The <code>break</code> statement is used to terminate the loop or statement in which it is present. After that, the control will pass to the statements that are present after the <code>break</code> statement, if available.
        </li>
        <li>
            <strong>Continue:</strong> The <code>continue</code> statement is also a loop control statement just like the <code>break</code> statement. Unlike <code>break</code>, it does not terminate the loop but forces the execution of the next iteration of the loop.
        </li>
        <li>
            <strong>Pass:</strong> The <code>pass</code> statement performs no operation. It is a placeholder in compound statements where a blank space is syntactically required but no action is to be performed.
        </li>
    </ul>`,link:""},{title:"/ vs // ",content:"/ represents precise division (result is a floating point number) whereas // represents floor division (result is an integer). For Example:5//2 = 2, 5/2 = 2.5",link:""},{title:"Exceptional handling",content:"There are 3 main keywords i.e. try, except, and finally which are used to catch exceptions and handle the recovering mechanism accordingly. Try is the block of a code that is monitored for errors. Except block gets executed when an error occurs.</br>The beauty of the final block is to execute the code after trying for an error. This block gets executed irrespective of whether an error occurred or not. Finally, block is used to do the required cleanup activities of objects/variables.",link:""},{title:"swapcase fun",content:'It is a string’s function that converts all uppercase characters into lowercase and vice versa. It is used to alter the existing case of the string. This method creates a copy of the string which contains all the characters in the swap case. For Example:string = "SwapcasE", string.swapcase() ---> "sWAPCASe"',link:""},{title:"for vs while loop",content:"The “for” Loop is generally used to iterate through the elements of various collection types such as List, Tuple, Set, and Dictionary. Developers use a “for” loop where they have both the conditions start and the end. Whereas, the “while” loop is the actual looping feature that is used in any other programming language. Programmers use a Python while loop where they just have the end conditions.",link:""},{title:"fun as args",content:"<h3>Can we Pass a function as an argument in Python?</h3>Yes, Several arguments can be passed to a function, including objects, variables (of the same or distinct data types), and functions. Functions can be passed as parameters to other functions because they are objects. Higher-order functions are functions that can take other functions as arguments.",link:""},{title:"*args and **kwargs?",content:"To pass a variable number of arguments to a function in Python, use the special syntax *args and **kwargs in the function specification. Both are to send a variable-length argument list. The syntax *args is used to pass a non-keyworded, variable-length argument list.",link:""},{title:"Is Indentation Required",content:"Yes, indentation is required in Python. A Python interpreter can be informed that a group of statements belongs to a specific block of code by using Python indentation. Indentations make the code easy to read for developers in all programming languages but in Python, it is very important to indent the code in a specific order.",link:""},{title:"Scope in Py",content:`<h3>The location where we can find a variable and also access it if required is called the scope of a variable.</h3>
    <h3>Types of Scope in Python:</h3>
    <ul>
        <li><strong>Python Local Variable:</strong> Local variables are those that are initialized within a function and are unique to that function. It cannot be accessed outside of the function.</li>
        <li><strong>Python Global Variables:</strong> Global variables are the ones that are defined and declared outside any function and are not specified to any function.</li>
        <li><strong>Module-level Scope:</strong> It refers to the global objects of the current module accessible in the program.</li>
        <li><strong>Outermost Scope:</strong> It refers to any built-in names that the program can call. The name referenced is located last among the objects in this scope.</li>
    </ul>`,link:""},{title:"docstring in Py",content:`<h3>Python documentation strings (or docstrings) provide a convenient way of associating documentation with Python modules, functions, classes, and methods.</h3>
    <h3>Key Points about Docstrings:</h3>
    <ul>
        <li><strong>Declaring Docstrings:</strong> The docstrings are declared using <code>'''triple single quotes'''</code> or <code>"""triple double quotes"""</code> just below the class, method, or function declaration. All functions should have a docstring.</li>
        <li><strong>Accessing Docstrings:</strong> The docstrings can be accessed using the <code>__doc__</code> method of the object or using the <code>help</code> function.</li>
    </ul>`,link:""},{title:"dynamically typed",content:`<h3>Typed languages are the languages in which we define the type of data type, and it will be known by the machine at compile-time or runtime.</h3>
    <h3>Categories of Typed Languages:</h3>
    <ul>
        <li><strong>Statically Typed Languages:</strong> In this type of language, the data type of a variable is known at compile time, which means the programmer has to specify the data type of a variable at the time of its declaration.</li>
        <li><strong>Dynamically Typed Languages:</strong> These are the languages that do not require any pre-defined data type for any variable as it is interpreted at runtime by the machine itself. In these languages, interpreters assign the data type to a variable at runtime depending on its value.</li>
    </ul>`,link:""},{title:"Built-in data types",content:`<section>
    <h3>The following are the standard or built-in data types in Python:</h3>
    <ul>
        <li>
            <strong>Numeric:</strong> The numeric data type in Python represents the data that has a numeric value. A numeric value can be an integer, a floating number, a Boolean, or even a complex number.
        </li>
        <li>
            <strong>Sequence Type:</strong> The sequence data type in Python is the ordered collection of similar or different data types. There are several sequence types in Python:
            <ul>
                <li>Python String</li>
                <li>Python List</li>
                <li>Python Tuple</li>
                <li>Python range</li>
            </ul>
        </li>
        <li>
            <strong>Mapping Types:</strong> In Python, hashable data can be mapped to random objects using a mapping object. There is currently only one common mapping type, the dictionary, and mapping objects are mutable.
            <ul>
                <li>Python Dictionary</li>
            </ul>
        </li>
        <li>
            <strong>Set Types:</strong> In Python, a set is an unordered collection of data types that is iterable, mutable, and has no duplicate elements. The order of elements in a set is undefined though it may consist of various elements.
        </li>
    </ul>
</section>
`,link:""},{title:"floor a number",content:`<section>
    <h3>Python Math Module: Floor and Ceiling Methods</h3>
    <ul>
        <li>
            <strong>floor() Method:</strong> The <code>floor()</code> method in Python returns the floor of <code>x</code>, i.e., the largest integer not greater than <code>x</code>.
        </li>
        <li>
            <strong>ceil() Method:</strong> The <code>ceil()</code> method in Python returns the ceiling value of <code>x</code>, i.e., the smallest integer greater than or equal to <code>x</code>.
        </li>
    </ul>
</section>
`,link:""},{title:"xrange and range fun",content:`<section>
    <h3>range() and xrange() in Python</h3>
    <ul>
        <li>
            <strong>In Python 3:</strong> The <code>xrange()</code> function is not available, but the <code>range()</code> function behaves like <code>xrange()</code> from Python 2.
        </li>
        <li>
            <strong>In Python 2:</strong>
            <ul>
                <li>
                    <strong>range():</strong> This function returns a range object, which is an immutable sequence type that generates the numbers on demand.
                </li>
                <li>
                    <strong>xrange():</strong> This function returns a generator object that can be used to display numbers only by looping. It uses lazy evaluation, meaning only the required range is generated on demand.
                </li>
            </ul>
        </li>
    </ul>
</section>
`,link:""},{title:"Dict Comprehension",content:`<section>
    <h3>Dictionary Comprehension in Python</h3>
    <p>Dictionary Comprehension is a syntax construction to ease the creation of a dictionary based on an existing iterable.</p>
    <h3>Example:</h3>
    <pre><code>my_dict = {i: i + 7 for i in range(1, 10)}</code></pre>
</section>
`,link:""},{title:"Tuple Comprehension",content:`<section>
    <h3>Tuple Comprehension in Python</h3>
    <p>Tuple comprehension is not possible in Python because it will result in a generator, not a tuple comprehension.</p>
    <h3>Example:</h3>
    <pre><code>(i for i in (1, 2, 3))</code></pre>
    <p>This will create a generator object, not a tuple.</p>
</section>`,link:""},{title:"List and Tuple",content:`<section>
    <h3>Differences Between List and Tuple in Python</h3>
    <ul>
        <li>
            <strong>List:</strong>
            <ul>
                <li>Lists are <strong>mutable</strong> data types.</li>
                <li>Lists consume <strong>more memory</strong>.</li>
                <li>Lists are better for performing operations such as <strong>insertion and deletion</strong>.</li>
                <li>The implication of iterations is <strong>time-consuming</strong>.</li>
            </ul>
        </li>
        <li>
            <strong>Tuple:</strong>
            <ul>
                <li>Tuples are <strong>immutable</strong> data types.</li>
                <li>Tuples consume <strong>less memory</strong> compared to lists.</li>
                <li>Tuples are appropriate for <strong>accessing elements</strong>.</li>
                <li>The implication of iterations is <strong>comparatively faster</strong>.</li>
            </ul>
        </li>
    </ul>
</section>
`,link:""},{title:"shallow vs deep copy",content:`<section>
    <h3>Shallow Copy vs Deep Copy in Python</h3>
    <ul>
        <li>
            <strong>Shallow Copy:</strong> A shallow copy is used when a new instance type gets created, and it keeps values that are copied. 
            It has faster program execution.
        </li>
        <li>
            <strong>Deep Copy:</strong> A deep copy stores values that are already copied. It makes the program execution slower.
        </li>
    </ul>
</section>
`,link:""},{title:"sort() and sorted()",content:`<section>
    <h3>Python Sorting: Tim Sort Algorithm</h3>
    <p>Python uses the <strong>Tim Sort</strong> algorithm for sorting. It’s a stable sorting algorithm with a worst-case time complexity of <strong>O(N log N)</strong>.</p>
    <p>Tim Sort is a hybrid sorting algorithm, derived from <strong>merge sort</strong> and <strong>insertion sort</strong>, designed to perform well on many kinds of real-world data.</p>
</section>
`,link:""},{title:"Decorators",content:`<section>
    <h3>Python Decorators</h3>
    <p>Decorators are a very powerful and useful tool in Python. They are specific changes made in Python syntax to alter functions easily.</p>
</section>
`,link:""},{title:"debug a Py?",content:`<section>
    <p>To debug a Python program, use the following command:</p>
    <pre><code>$ python -m pdb python-script.py</code></pre>
</section>
`,link:""},{title:"Iterators in Py",content:`<section>
    <h3>Python Iterators</h3>
    <p>In Python, iterators are used to iterate over a group of elements, such as containers like a list. Iterators are collections of items, and they can be lists, tuples, or dictionaries.</p>
    <p>A Python iterator implements the <code>__iter__</code> and <code>next()</code> methods to iterate through the stored elements. We generally use loops to iterate over collections (like lists or tuples) in Python.</p>
</section>
`,link:""},{title:"Generators in Py",content:`<section>
    <h3>Python Generators</h3>
    <p>In Python, a generator is a way to implement iterators. It is a normal function except that it yields an expression within the function. Unlike iterators, it does not implement the <code>__iter__</code> and <code>__next__</code> methods, reducing other overheads.</p>
    <p>If a function contains at least one <code>yield</code> statement, it becomes a generator. The <code>yield</code> keyword pauses the current execution by saving its state and then resumes from the same point when required.</p>
</section>
`,link:""},{title:"multiple Inheritance?",content:`<section>
    <h3>Multiple Inheritance in Python</h3>
    <p>Python supports multiple inheritance, unlike Java. Multiple inheritance means that a class can be derived from more than one parent class.</p>
</section>
`,link:""},{title:"Polymorphism",content:`<section>
    <h3>Polymorphism in Python</h3>
    <p>Polymorphism means the ability to take multiple forms. It allows different classes to be treated as if they are instances of the same class through a common interface.</p>
    <p>This means that a method in a parent class can be overridden by a method with the same name in a child class, but the child class can provide its own specific implementation. The same method can operate differently depending on the object that invokes it.</p>
    <p>Polymorphism is about overriding, not overloading. It enables methods to operate on objects of different classes, which can have their own attributes and methods, providing flexibility and reusability in the code.</p>
</section>
`,link:""},{title:"encapsulation",content:"Encapsulation means binding the code and the data together. A Python class is an example of encapsulation.",link:""},{title:"data abstraction in Py",content:"Data Abstraction is providing only the required details and hides the implementation from the world. It can be achieved in Python by using interfaces and abstract classes.",link:""},{title:"memory management",content:`<section>
    <h3>Memory Management in Python</h3>
    <p>Python uses its private heap space to manage memory. All objects and data structures are stored in this private heap space. The programmer cannot access this space directly as the interpreter handles it.</p>
    <p>Python also has an inbuilt garbage collector, which recycles unused memory, frees it, and makes it available for reuse in the heap space.</p>
</section>
`,link:""},{title:"Delete File",content:`<section>
    <h3>How to Delete a File Using Python</h3>
    <p>We can delete a file in Python using the following approaches:</p>
    <ul>
        <li><code>os.remove()</code></li>
        <li><code>os.unlink()</code></li>
    </ul>
</section>
`,link:""},{title:"Slicing in Py",content:`<section>
    <p>Python Slicing is a string operation for extracting a part of a string or some part of a list. With this operator, one can specify the start, end, and step for the slicing operation. List slicing returns a new list from the existing list.</p>
    <h3>Syntax:</h3>
    <pre><code>Lst[ Initial : End : IndexJump ]</code></pre>
</section>
`,link:""},{title:"namespace",content:"A namespace is a naming system used to make sure that names are unique to avoid naming conflicts.",link:""},{title:"PIP",content:`<section>
    <h3>What is PIP in Python?</h3>
    <p>PIP is an acronym for <strong>Python Installer Package</strong>, which provides a seamless interface to install various Python modules. It is a command-line tool that can search for packages over the internet and install them without any user interaction.</p>
</section>
`,link:""},{title:"zip() Fun",content:`<section>
    <h3>What is the zip() Function in Python?</h3>
    <p>The Python <code>zip()</code> function returns a zip object, which maps similar indices of multiple containers. It takes an iterable, converts it into an iterator, and aggregates the elements based on the iterables passed. It returns an iterator of tuples.</p>
</section>
`,link:""},{title:"Pickling and Unpickling",content:`<section>
    <h3>What are Pickling and Unpickling?</h3>
    <p>The <strong>Pickle</strong> module accepts any Python object and converts it into a string representation, which can then be dumped into a file using the <code>dump</code> function. This process is called <strong>pickling</strong>.</p>
    <p>On the other hand, the process of retrieving the original Python objects from the stored string representation is called <strong>unpickling</strong>.</p>
</section>
`,link:""},{title:"Monkey Patching",content:`<section>
    <h3>What is Monkey Patching in Python?</h3>
    <p>In Python, the term <strong>monkey patching</strong> refers to the dynamic modifications of a class or module at run-time.</p>
    <p>Example:</p>
    <pre><code># g.py
class GeeksClass:
    def function(self):
        print "function()"

import m
def monkey_function(self):
    print "monkey_function()"

m.GeeksClass.function = monkey_function
obj = m.GeeksClass()
obj.function()
</code></pre>
</section>
`,link:""},{title:"_init__() in Py",content:`<section>
    <h3>What is __init__() in Python?</h3>
    <p>The <code>__init__()</code> method in Python is equivalent to constructors in object-oriented programming (OOP) terminology. It is a reserved method in Python classes and is called automatically whenever a new object is instantiated.</p>
    <p>This method is used to initialize the object's attributes with values. While <code>__init__()</code> initializes the object, it does not allocate memory. Memory allocation for a new object is handled by the <code>__new__()</code> method, which is called before <code>__init__()</code>.</p>
</section>
`,link:""},{title:"Display the Curr Time",content:`<section>
    <h3>Code to Display the Current Time in Python</h3>
    <pre><code>import time

currenttime = time.localtime(time.time())
print("Current time is", currenttime)</code></pre>
</section>
`,link:""},{title:"Access Specifiers",content:`<section>
    <h3>What are Access Specifiers in Python?</h3>
    <p>Python uses the ‘_’ symbol to determine the access control for a specific data member or a member function of a class. A Class in Python has three types of access specifiers:</p>
    <ul>
        <li><strong>Public Access Modifier:</strong> The members of a class that are declared public are easily accessible from any part of the program. All data members and member functions of a class are public by default.</li>
        <li><strong>Protected Access Modifier:</strong> The members of a class that are declared protected are only accessible to a class derived from it. These are declared by adding a single underscore ‘<code>_</code>’ symbol before the data members.</li>
        <li><strong>Private Access Modifier:</strong> The members of a class that are declared private are accessible within the class only. This is the most secure access modifier, declared by adding a double underscore ‘<code>__</code>’ symbol before the data member of that class.</li>
    </ul>
</section>
`,link:""},{title:"Unit Tests in Py",content:`<section>
    <h3>What are Unit Tests in Python?</h3>
    <p><strong>Unit Testing</strong> is the first level of software testing where the smallest testable parts of the software are tested. It is used to validate that each unit of the software performs as designed.</p>
    <p>The unit test framework in Python follows the xUnit style framework. The <strong>White Box Testing</strong> method is used for Unit testing.</p>
</section>
`,link:""},{title:"GIL",content:`<section>
    <h3>What is Python Global Interpreter Lock (GIL)?</h3>
    <p><strong>Python Global Interpreter Lock (GIL)</strong> is a type of process lock that is used by Python whenever it deals with processes. Generally, Python only uses one thread to execute the set of written statements.</p>
    <p>The performance of the single-threaded process and the multi-threaded process will be the same in Python due to the GIL. We cannot achieve true multithreading in Python because the GIL restricts the threads and forces them to behave as a single thread.</p>
</section>
`,link:""},{title:"Function Annotations",content:`<section>
    <h3>What are Function Annotations in Python?</h3>
    <p><strong>Function Annotation</strong> is a feature that allows you to add metadata to function parameters and return values. This way, you can specify the input type of the function parameters and the return type of the value the function returns.</p>
    <p>Function annotations are arbitrary Python expressions that are associated with various parts of functions. These expressions are evaluated at compile time and have no effect in Python’s runtime environment. Python does not attach any meaning to these annotations. They take significance when interpreted by third-party libraries, for example, <code>mypy</code>.</p>
</section>
`,link:""},{title:"Exception Groups",content:`<section>
    <h3>What are Exception Groups in Python?</h3>
    <p><strong>Exception Groups</strong> is a new feature introduced in Python 3.11. An ExceptionGroup is a collection/group of different kinds of exceptions. Instead of creating multiple exceptions, we can group together different exceptions and later fetch them one by one whenever necessary. The order in which exceptions are stored in the Exception Group doesn’t matter when calling them.</p>
    <p>Exception Groups can be handled using a new <code>except*</code> syntax. The <code>*</code> symbol indicates that multiple exceptions can be handled by each <code>except*</code> clause.</p>
    <pre>
        <code>
        try:
            raise ExceptionGroup('Example ExceptionGroup', (
                TypeError('Example TypeError'),
                ValueError('Example ValueError'),
                KeyError('Example KeyError'),
                AttributeError('Example AttributeError')
            ))
        except* TypeError:
            ...
        except* ValueError as e:
            ...
        except* (KeyError, AttributeError) as e:
            ...
        </code>
    </pre>
</section>
`,link:""},{title:"Switch Statement?",content:`<section>
    <h3>What is Python Switch Statement?</h3>
    <p>From Python version 3.10 and upward, Python has implemented a switch-case feature called <strong>structural pattern matching</strong>. This feature can be implemented using the <code>match</code> and <code>case</code> keywords. The underscore symbol <code>_</code> is used to define a default case for the switch statement in Python.</p>
    <p><strong>Note:</strong> Before Python 3.10, Python didn’t support match statements.</p>
    <pre>
        <code>
        match term:
            case pattern-1:
                action-1
            case pattern-2:
                action-2
            case pattern-3:
                action-3
            case _:
                action-default
        </code>
    </pre>
</section>
`,link:""},{title:"Walrus Operator?",content:`<section>
    <h3>What is Walrus Operator?</h3>
    <p>The Walrus Operator allows you to assign a value to a variable within an expression. This can be useful when you need to use a value multiple times in a loop, but don’t want to repeat the calculation.</p>
    <p>The Walrus Operator is represented by the <code>:=</code> syntax and can be used in a variety of contexts, including <strong>while loops</strong> and <strong>if statements</strong>.</p>
    <p><strong>Note:</strong> Python versions before 3.8 don’t support the Walrus Operator.</p>
    <pre>
        <code>
        names = ["Jacob", "Joe", "Jim"]

        if (name := input("Enter a name: ")) in names:
            print(f"Hello, {name}!")
        else:
            print("Name not found.")
        </code>
    </pre>
</section>
`,link:""},{title:"Spam Detection API",content:`    <h1>Spam Detection API Project</h1>

    <h2>Project Overview: <strong>Spam Detection API Using FastAPI</strong></h2>
    <p>The <strong>Spam Detection API</strong> is designed to offer a robust solution for identifying and blocking spam messages based on multiple checks, including:</p>
    <ul>
        <li><strong>IP Validation</strong>: Verifies if the IP address is blacklisted using the AbuseIPDB database.</li>
        <li><strong>Text Content Classification</strong>: Utilizes Google’s Gemini API for classifying text content to detect spam and promotional messages.</li>
        <li><strong>Email Domain Validation</strong>: Checks if the email domain is blacklisted or whitelisted using both a local database and an external API for more precise validation.</li>
    </ul>
    <p>The project aims to ensure seamless integration and provide an efficient, secure API that can be used to classify messages based on multiple criteria. The entire application is built using <strong>FastAPI</strong>, which ensures high performance and scalability, and will be deployed on Oracle Cloud's Ampere A1 Compute instances.</p>

    <h2>Key Components and Steps:</h2>

    <h3>1. FastAPI Setup</h3>
    <p>FastAPI will be used as the main framework for creating the REST API. FastAPI is a modern, fast web framework for building APIs with Python. We will use <strong>Uvicorn</strong> or <strong>Gunicorn</strong> with Uvicorn Workers to serve the application.</p>

    <h3>2. Database Setup</h3>
    <p>The project will use <strong>PostgreSQL</strong> as the main relational database. <strong>SQLAlchemy</strong> will be used for ORM (Object-Relational Mapping), providing an easy interface to interact with the database. There will be separate databases for:</p>
    <ul>
        <li>IP blacklisting (using the AbuseIPDB database)</li>
        <li>Email domain blacklisting and whitelisting</li>
        <li>Customer data (for quota management)</li>
    </ul>

    <h3>3. Rate Limiting</h3>
    <p><strong>SlowAPI</strong> will be integrated for rate-limiting to ensure that the API doesn't get overloaded with too many requests at once, maintaining the performance of the service.</p>

    <h3>4. API Workflow</h3>
    <p>The API will have the following primary endpoint:</p>
    <pre><code>POST /check_spam</code></pre>
    <p>It accepts the following parameters:</p>
    <ul>
        <li><strong>api_key</strong>: Authentication key</li>
        <li><strong>text_content</strong>: The text message/content to be classified</li>
        <li><strong>email_domain</strong>: The domain of the email for validation</li>
        <li><strong>ip_address</strong>: The IP address to check for blacklisting</li>
    </ul>
    <p>The API will perform the following checks in order:</p>
    <ul>
        <li><strong>Step 1: IP Validation</strong> - The first check verifies if the provided IP address exists in the <strong>AbuseIPDB</strong> database, which lists blacklisted IPs.</li>
        <li><strong>Step 2: Text Content Classification</strong> - If the IP is not blacklisted, the system proceeds to classify the <code>text_content</code> using Google’s <strong>Gemini API</strong>.</li>
        <li><strong>Step 3: Email Domain Validation</strong> - The API checks the provided <strong>email domain</strong> to see if it's in the <strong>whitelisted</strong> or <strong>blacklisted</strong> database.</li>
    </ul>

    <h3>5. Modules</h3>
    <h4>Module 1: IP Validation</h4>
    <p><strong>Objective:</strong> Validate the IP against AbuseIPDB.</p>
    <p><strong>How:</strong> Use a file containing IP addresses from <strong>AbuseIPDB</strong> and check if the IP is present in the database. We will update the database periodically (every hour).</p>
    <pre><code>
    # Sample Process:
    # 1. Parse the IP list from the raw file (.ipv4 format)
    # 2. Check if the IP is found in the database
    # 3. Return true/false accordingly
    </code></pre>

    <h4>Module 2: Text Classification</h4>
    <p><strong>Objective:</strong> Use <strong>Gemini API</strong> to classify text messages.</p>
    <p><strong>How:</strong> Send the text content to Gemini API, and classify it as <strong>spam</strong>, <strong>promotional</strong>, or <strong>informational</strong>.</p>
    <pre><code>
    # 1. Trim the text if it exceeds 300 tokens.
    # 2. Pass the text to Gemini API.
    # 3. Process the response for classification.
    </code></pre>

    <h4>Module 3: Email Domain Validation</h4>
    <p><strong>Objective:</strong> Validate the email domain and check if it’s blacklisted or whitelisted.</p>
    <p><strong>How:</strong></p>
    <ul>
        <li>First, validate using a regular expression.</li>
        <li>Then, check the local whitelist and blacklist databases.</li>
        <li>If not found, make an external call to <strong>RapidAPI</strong> to validate the email domain.</li>
    </ul>
    <pre><code>
    # Sample Process:
    # 1. Regex validation of the domain
    # 2. Check in local database
    # 3. If not found, call RapidAPI to validate.
    </code></pre>

    <h3>6. API Response Format</h3>
    <p>The API will return a JSON response with the following structure:</p>
    <pre><code>
    # If IP is blacklisted:
    {
      "content_type": "null",
      "is_promotional": true,
      "promotional_probability": 1,
      "is_spam": true,
      "spam_probability": 1,
      "spam_reason": "blacklisted_ip",
      "is_blocked_ip": true,
      "is_blocked_email_domain": true,
      "remaining_quota": 100
    }

    # If IP is not blacklisted:
    {
      "content_type": "transactional",
      "is_promotional": false,
      "promotional_probability": 0.1,
      "is_spam": false,
      "spam_probability": 0.05,
      "spam_reason": "ai_detected",
      "is_blocked_ip": false,
      "is_blocked_email_domain": false,
      "remaining_quota": 100
    }
    </code></pre>

    <h3>7. Security & Authentication</h3>
    <ul>
        <li><strong>OAuth2 with JWT tokens</strong> will be used for secure authentication.</li>
        <li><strong>HTTPS</strong> will be enforced for all communication.</li>
        <li><strong>CORS</strong> will be configured to handle cross-origin requests.</li>
    </ul>

    <h3>8. Deployment</h3>
    <ul>
        <li>The application will be containerized using <strong>Docker</strong> for easy deployment.</li>
        <li>We will deploy the app on <strong>Oracle Cloud</strong> using the Ampere A1 Compute instances.</li>
        <li>Continuous monitoring with <strong>Prometheus</strong> and <strong>Grafana</strong> for performance optimization.</li>
    </ul>`,link:""}],Jf=()=>B.jsx(gt,{links:Yf}),Xf=[{id:"1",title:"Reactjs? Use Cases",content:`<section>
      <h3>What is React?</h3>
      <p>React is a popular JavaScript library for building user interfaces, developed by Facebook. It is widely used for creating web applications due to its efficiency, flexibility, and component-based architecture.</p>
      
      <h3>Why is React used?</h3>
      <ul>
        <li>React allows developers to build reusable UI components.</li>
        <li>It uses a virtual DOM for fast rendering and updates.</li>
        <li>It supports a declarative programming style for easier debugging and maintenance.</li>
        <li>React's ecosystem supports seamless integration with other tools and libraries.</li>
      </ul>
  
      <h3>How React Works?</h3>
      <p>React creates a virtual DOM. When the state changes in a component, it first runs a "diffing" algorithm, which identifies what has changed in the virtual DOM. The second step is reconciliation, where it updates the DOM with the results of diff.</p>
  
      <h3>Use Cases</h3>
      <ul>
        <li>Single Page Applications (SPAs).</li>
        <li>Interactive dashboards and data-driven UIs.</li>
        <li>Mobile applications using React Native.</li>
        <li>Real-time applications like chat apps, collaboration tools.</li>
        <li>Progressive Web Applications (PWAs).</li>
      </ul>
  
      <h3>Advantages</h3>
      <ul>
        <li>It is easy to know how a component is rendered, we just need to look at the render function.</li>
        <li>JSX makes it easy to read the code of the components.</li>
        <li>It is also really easy to see the layout, or how components are plugged/combined.</li>
        <li>We can render React on the server side. This improves SEO and performance.</li>
        <li>It is easy to test.</li>
        <li>We can use React with any framework we want as it is only a view layer.</li>
      </ul>
  
      <h3>Disadvantages</h3>
      <ul>
        <li>Lack of Proper Documentation</li>
        <li>Development Speed</li>
        <li>JSX Complexity</li>
        <li>Problems With SEO</li>
      </ul>
    </section>`,link:"https://www.geeksforgeeks.org/what-are-the-limitations-of-react-js/"}],Zf=[...Xf],ey=()=>B.jsx(gt,{links:Zf}),ty=[{id:"1",title:"TypeScript? Use Cases Features",content:`
      <section>
        <h3>What is TypeScript?</h3>
        <ul>
          <li>TypeScript is a strongly typed programming language developed by Microsoft.</li>
          <li>It is a superset of JavaScript, meaning it extends JavaScript by adding static types.</li>
          <li>It helps developers catch errors during development by enforcing type checks.</li>
          <li>TypeScript code is transpiled into plain JavaScript to run in any environment that supports JavaScript.</li>
        </ul>
  
        <h3>Use Cases</h3>
        <ul>
          <li>Large-scale frontend and backend applications.</li>
          <li>Enterprise software with complex logic and data models.</li>
          <li>Projects where early bug detection and code maintainability are important.</li>
          <li>Frameworks and libraries development (e.g., Angular is written in TypeScript).</li>
          <li>Migration from JavaScript to a more structured codebase.</li>
        </ul>
  
        <h3>Features</h3>
        <ul>
          <li>Static typing and type inference.</li>
          <li>Interfaces and advanced object-oriented programming support (classes, inheritance).</li>
          <li>Modern JavaScript features (ES6/ESNext) with backward compatibility.</li>
          <li>Rich tooling support in IDEs like VSCode (auto-complete, refactoring, etc.).</li>
          <li>Supports namespaces, decorators, and modules for better code organization.</li>
          <li>Improved code readability, maintainability, and scalability.</li>
        </ul>
      </section>
    `,link:""}],iy=()=>B.jsx(gt,{links:ty}),ny=[{id:1,title:"SQL?",content:`
          <section>
            <ul>
              <li><strong>Definition:</strong> SQL stands for Structured Query Language.</li>
              <li><strong>Purpose:</strong> It is used to communicate with and manage relational databases.</li>
              <li><strong>Key Features:</strong>
                <ul>
                  <li>Used for querying, updating, and manipulating data in databases.</li>
                  <li>Allows the creation, modification, and deletion of database schemas (tables, indexes).</li>
                </ul>
              </li>
              <li><strong>Common Commands:</strong>
                <ul>
                  <li><strong>SELECT:</strong> Retrieve data from a database.</li>
                  <li><strong>INSERT:</strong> Add new data to a table.</li>
                  <li><strong>UPDATE:</strong> Modify existing data.</li>
                  <li><strong>DELETE:</strong> Remove data from a table.</li>
                </ul>
              </li>
              <li><strong>Used By:</strong> Developers, data analysts, and database administrators.</li>
              <li><strong>Popular Databases:</strong> SQL works with systems like MySQL, PostgreSQL, Oracle, and Microsoft SQL Server.</li>
            </ul>
          </section>
        `,link:"https://www.w3schools.com/sql/"}],oy=[...ny],ry=()=>B.jsx(gt,{links:oy}),sy=[{id:81,title:"JavaScript? Use Cases Features",content:`
      <section>
        <h3>What is JavaScript?</h3>
        <ul>
          <li>JavaScript is a scripting language that helps make websites interactive and dynamic.</li>
          <li>It's one of the core technologies of the web, along with HTML and CSS.</li>
          <li>It was first used just in the browser, but now it also runs on the server with tools like Node.js.</li>
          <li>It's lightweight, meaning it runs fast and doesn’t need a lot of setup.</li>
          <li>JavaScript code runs directly in the browser without needing to compile it first.</li>
        </ul>
  
        <h3>Common Use Cases:</h3>
        <ul>
          <li>Making websites interactive (like buttons, forms, sliders, and modals).</li>
          <li>Creating single-page applications using frameworks like React, Angular, or Vue.</li>
          <li>Building backend services with Node.js and Express.</li>
          <li>Creating mobile apps with tools like React Native or Ionic.</li>
          <li>Building desktop applications using Electron.</li>
          <li>Game development using HTML5 Canvas and WebGL.</li>
          <li>Making browser extensions or automation tools.</li>
        </ul>
  
        <h3>Key Features:</h3>
        <ul>
          <li>It’s dynamically typed – you don’t need to declare data types.</li>
          <li>Supports both object-oriented and functional programming styles.</li>
          <li>Great for asynchronous operations like API calls and animations using callbacks, promises, and async/await.</li>
          <li>Uses prototypes instead of classes for inheritance.</li>
          <li>Runs on all modern browsers and operating systems.</li>
        </ul>
  
        <h3>Example:</h3>
        <p>
          Imagine you're building a shopping cart on a website. JavaScript can update the total price in real-time as the user adds or removes items — without needing to reload the page. This is done by listening for events and manipulating the DOM.
        </p>
      </section>
    `}],ay=()=>B.jsx(gt,{links:sy}),ly=[{title:"What is MongoDB? Key Features and Use Cases",content:`
    <h3>Overview of MongoDB</h3>
    <ul>
      <li>MongoDB is a NoSQL database. It works great with large, flexible, or semi-structured data.</li>
      <li>Unlike SQL tables and rows, MongoDB stores data in collections and documents.</li>
      <li>It uses BSON — like JSON but supports more data types and no fixed schema.</li>
      <li>It's built for scale and speed. Very useful in large applications.</li>
      <li>You get powerful features like indexing, aggregation, and real-time queries.</li>
    </ul>

    <h3>Key Features</h3>
    <ul>
        <li>MongoDB is <b>Document-oriented</b>database, which stores data in documents.</li>
        <li>Its <b>Schema-less</b> database, Which means, we can store documents with different fields in the same collection</li>
        <li>Its <b>Scalable</b> due to horizontal scaling through sharding, and it can handle large amounts of data across multiple servers.</li>
        <li>Mongodb is <b>High availability</b> database, Which means, It uses replica sets that helps database is always accessible.</li>
        <li>Mongodb supports <b>Rich query language</b> like filtering, sorting, and aggregation, This helps us perform complex queries efficiently.</li>
    </ul>

    <h3>Use Cases</h3>
    <ul>
        <li>Can be used for Content management systems (CMS) and blogging platforms, where flexibility and speed are key.</li>
        <li>Real-time analytics and IoT (Internet of Things) applications, as MongoDB handles large streams of data well.</li>
        <li>E-commerce platforms with dynamic product catalogs that change frequently.</li>
        <li>Mobile applications, where the data structure may change as features evolve.</li>
        <li>Rapid prototyping and agile development, where flexibility and fast iterations are essential.</li>
    </ul>

      <p><a href="https://www.mongodb.com/docs/manual/introduction/">Learn more about MongoDB</a></p>`}],cy=[...ly],uy=()=>B.jsx(gt,{links:cy}),dy=[{id:"q1",title:"microservice? Use cases Feature",content:`<h3>What is a microservice architecture?</h3> <ul><li>Microservices break applications into small, independent services.</li><li>Each service is deployed separately using AWS Lambda, API Gateway, or containers.</li><li>They communicate via REST, GraphQL, or message queues (e.g., SQS).</li><li>Example: A simple AWS Lambda microservice using Node.js and Express.</li></ul><pre><code>import express from 'express';
const app = express();
app.get('/hello', (req, res) => res.json({ message: 'Hello from microservice!' }));
export const handler = serverless(app);</code></pre> <h3>Use Cases for Microservices</h3>
    <ul>
      <li>Large-scale applications that require high scalability and flexibility.</li>
      <li>When different teams need to work on different parts of an application independently.</li>
      <li>Applications that need to support frequent updates and deployment of individual components.</li>
      <li>When you need to adopt different technologies and frameworks for different services.</li>
      <li>Systems that require fault tolerance and resilience in each service.</li>
    </ul>

    <h3>Features of Microservices Architecture</h3>
    <ul>
      <li>Independent deployability: Each service can be deployed and updated independently.</li>
      <li>Scalability: Microservices can be scaled independently based on demand.</li>
      <li>Resilience: Failure in one service does not impact the entire system.</li>
      <li>Technology agnostic: Different services can use different technologies and programming languages.</li>
      <li>Distributed data management: Each service may have its own database.</li>
    </ul>`}],hy=()=>B.jsx(gt,{links:dy}),py=[{id:1,title:"What is an Operating System?",content:`
      <section>
        <h3>Definition</h3>
        <ul>
          <li>An Operating System (OS) is system software that manages computer hardware, software resources, and provides common services for computer programs.</li>
          <li>It acts as an intermediary between users and the computer hardware.</li>
        </ul>
        <h4>Key Roles</h4>
        <ul>
          <li>Manages memory, processes, and file systems.</li>
          <li>Enables user interaction via GUI or CLI.</li>
          <li>Ensures security and access control.</li>
        </ul>
      </section>
    `},{id:2,title:"Services provided by an OS",content:`
      <section>
        <h3>Core Services</h3>
        <ul>
          <li><strong>Process Management:</strong> Creates, schedules, and terminates processes.</li>
          <li><strong>Memory Management:</strong> Allocates and deallocates memory for applications.</li>
          <li><strong>File System Management:</strong> Handles file storage, retrieval, and permissions.</li>
          <li><strong>Device Management:</strong> Controls hardware via drivers (e.g., printers, keyboards).</li>
          <li><strong>User Interface:</strong> Provides GUI (Graphical) or CLI (Command Line) for interaction.</li>
          <li><strong>Security:</strong> Authenticates users and enforces access controls.</li>
          <li><strong>Networking:</strong> Manages network connections and data transfer.</li>
        </ul>
      </section>
    `},{id:3,title:"Types of Operating Systems",content:`
      <section>
        <h3>Common OS Types</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>Type</th><th>Description</th><th>Examples</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Batch OS</strong></td><td>Processes jobs in batches without user interaction.</td><td>Early mainframe systems</td></tr>
            <tr><td><strong>Time-Sharing OS</strong></td><td>Allows multiple users to share system resources simultaneously.</td><td>UNIX, Multics</td></tr>
            <tr><td><strong>Real-Time OS (RTOS)</strong></td><td>Guarantees timely execution for critical tasks (e.g., robotics).</td><td>VxWorks, FreeRTOS</td></tr>
            <tr><td><strong>Distributed OS</strong></td><td>Manages a group of networked computers as a single system.</td><td>Google’s Borg, Kubernetes</td></tr>
            <tr><td><strong>Embedded OS</strong></td><td>Designed for small devices (e.g., IoT, wearables).</td><td>Android Things, QNX</td></tr>
            <tr><td><strong>Mobile OS</strong></td><td>Optimized for smartphones/tablets.</td><td>Android, iOS</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:1,title:"Batch OS",content:`
      <section>
        <h3>Batch Operating System</h3>
        <ul>
          <li><strong>Definition:</strong> Processes jobs in batches without user interaction.</li>
          <li><strong>How it works:</strong> Jobs with similar requirements are grouped and executed sequentially.</li>
          <li><strong>Advantages:</strong> Efficient for large-scale repetitive tasks, minimizes idle time.</li>
          <li><strong>Disadvantages:</strong> No user interaction, debugging is difficult.</li>
          <li><strong>Examples:</strong> Early mainframe systems (e.g., IBM OS/360).</li>
        </ul>
      </section>
    `},{id:2,title:"Time Sharing OS",content:`
      <section>
        <h3>Time-Sharing Operating System</h3>
        <ul>
          <li><strong>Definition:</strong> Allows multiple users to share system resources simultaneously.</li>
          <li><strong>How it works:</strong> CPU time is divided into small slices (time quantum) and allocated to each user.</li>
          <li><strong>Advantages:</strong> Faster response time, supports multitasking.</li>
          <li><strong>Disadvantages:</strong> Complex scheduling, potential security risks.</li>
          <li><strong>Examples:</strong> UNIX, Multics, Linux.</li>
        </ul>
      </section>
    `},{id:3,title:"Network OS",content:`
      <section>
        <h3>Network Operating System</h3>
        <ul>
          <li><strong>Definition:</strong> Manages and coordinates networked computers.</li>
          <li><strong>How it works:</strong> Provides shared access to files, printers, and services across a network.</li>
          <li><strong>Advantages:</strong> Centralized management, resource sharing.</li>
          <li><strong>Disadvantages:</strong> Dependent on server availability, security concerns.</li>
          <li><strong>Examples:</strong> Windows Server, Novell NetWare, Linux-based servers.</li>
        </ul>
      </section>
    `},{id:4,title:"Real Time OS (RTOS)",content:`
      <section>
        <h3>Real-Time Operating System</h3>
        <ul>
          <li><strong>Definition:</strong> Ensures tasks are completed within strict time constraints.</li>
          <li><strong>Types:</strong>
            <ul>
              <li><strong>Hard RTOS:</strong> Deadline-critical (e.g., medical systems, avionics).</li>
              <li><strong>Soft RTOS:</strong> Tolerates minor delays (e.g., streaming, ATMs).</li>
            </ul>
          </li>
          <li><strong>Advantages:</strong> Predictable timing, high reliability.</li>
          <li><strong>Disadvantages:</strong> Complex development, limited flexibility.</li>
          <li><strong>Examples:</strong> VxWorks, FreeRTOS, QNX.</li>
        </ul>
      </section>
    `},{id:5,title:"Distributed OS",content:`
      <section>
        <h3>Distributed Operating System</h3>
        <ul>
          <li><strong>Definition:</strong> Manages a group of networked computers as a single system.</li>
          <li><strong>How it works:</strong> Tasks are distributed across nodes for parallel processing.</li>
          <li><strong>Advantages:</strong> Scalability, fault tolerance, resource sharing.</li>
          <li><strong>Disadvantages:</strong> Complex to implement, network dependency.</li>
          <li><strong>Examples:</strong> Google’s Borg, Kubernetes, Apache Hadoop.</li>
        </ul>
      </section>
    `},{id:1,title:"RAM vs ROM",content:`
      <section>
        <h3>RAM (Random Access Memory) vs ROM (Read-Only Memory)</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>RAM</th><th>ROM</th></tr>
          </thead>
          <tbody>
            <tr><td>RAM is Volatile (It loses data when power is off)</td><td>ROM is Non-volatile (retains data When power is off)</td></tr>
            <tr><td>RAM is Temporary storage for active programs</td><td>ROM is permanent storage for firmware/BIOS</td></tr>
            <tr><td>Ram can read and write multiple times</td><td>ROM Read-only (some types of ROM allow limited writes)</td></tr>
            <tr><td>RAM Much faster</td><td>ROM is Slower</td></tr>
            <tr><td>RAM Examples are: DDR4, DDR5</td><td>ROM Examples are: BIOS chips, firmware storage</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:2,title:"SRAM vs DRAM",content:`
      <section>
        <h3>SRAM (Static RAM) vs DRAM (Dynamic RAM)</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>SRAM</th><th>DRAM</th></tr>
          </thead>
          <tbody>
            <tr><td>SRAM has 6 transistors per bit (flip-flop)</td><td>DRAM has 1 transistor + 1 capacitor per bit</td></tr>
            <tr><td>SRAM does not need periodic refresh</td><td>DRAM needs periodic refresh</td></tr>
            <tr><td>SRAM is faster (used in cache)</td><td>DRAM is slower (used in main memory)</td></tr>
            <tr><td>SRAM is more expensive</td><td>DRAM is cheaper</td></tr>
            <tr><td>SRAM has lower power consumption (no refresh)</td><td>DRAM has higher power consumption</td></tr>
            <tr><td>SRAM has lower density</td><td>DRAM has higher density</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:3,title:"PROM EPROM EEPROM",content:`
      <section>
        <h3>Types of ROM</h3>
        
        <h4>PROM (Programmable ROM)</h4>
        <ul>
          <li><strong>Full Form:</strong> Programmable Read-Only Memory</li>
          <li><strong>Characteristics:</strong> Programmable once by the user. Once written, it cannot be modified.</li>
          <li><strong>Erasure Method:</strong> Cannot be erased.</li>
          <li><strong>Uses:</strong> Primarily used in older firmware applications.</li>
        </ul>
  
        <h4>EPROM (Erasable PROM)</h4>
        <ul>
          <li><strong>Full Form:</strong> Erasable Programmable Read-Only Memory</li>
          <li><strong>Characteristics:</strong> Can be erased and reprogrammed using ultraviolet (UV) light.</li>
          <li><strong>Erasure Method:</strong> Exposed to UV light to erase the data (entire chip).</li>
          <li><strong>Uses:</strong> Commonly used in firmware development and prototype applications.</li>
        </ul>
  
        <h4>EEPROM (Electrically Erasable PROM)</h4>
        <ul>
          <li><strong>Full Form:</strong> Electrically Erasable Programmable Read-Only Memory</li>
          <li><strong>Characteristics:</strong> Allows byte-level erasure and rewriting. It can be reprogrammed using electrical signals.</li>
          <li><strong>Erasure Method:</strong> Erased and reprogrammed via electrical signals.</li>
          <li><strong>Uses:</strong> Widely used in storing BIOS settings, small configuration data, and in applications that need frequent updates.</li>
        </ul>
        
      </section>
    `},{id:4,title:"Virtualization vs Containerization",content:`
      <section>
        <h3>Virtualization vs Containerization</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>Virtualization</th><th>Containerization</th></tr>
          </thead>
          <tbody>
            <tr><td>Virtualization provides full OS-level isolation (hypervisor)</td><td>Containerization provides process-level isolation (shared OS kernel)</td></tr>
            <tr><td>Virtualization has higher overhead</td><td>Containerization provides near-native performance</td></tr>
            <tr><td>Virtualization has slow boot time (full OS boot)</td><td>Containerization has instant boot time (shared kernel)</td></tr>
            <tr><td>Virtualization has large image size (GBs)</td><td>Containerization has small image size (MBs)</td></tr>
            <tr><td>Virtualization is used for running different OSes, legacy apps</td><td>Containerization is used for microservices, cloud-native apps</td></tr>
            <tr><td>Virtualization examples include VMware, VirtualBox</td><td>Containerization examples include Docker, Kubernetes</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:5,title:"BIOS vs UEFI",content:`
      <section>
        <h3>BIOS vs UEFI</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>BIOS</th><th>UEFI</th></tr>
          </thead>
          <tbody>
            <tr><td>BIOS stands for Basic Input/Output System</td><td>UEFI stands for Unified Extensible Firmware Interface</td></tr>
            <tr><td>BIOS has a 16-bit interface (limited to 1MB space)</td><td>UEFI has a 32/64-bit interface (modern)</td></tr>
            <tr><td>BIOS has slower boot speed due to POST checks</td><td>UEFI has faster boot speed due to parallel initialization</td></tr>
            <tr><td>BIOS supports MBR (max 2TB disks)</td><td>UEFI supports GPT (disks > 2TB)</td></tr>
            <tr><td>BIOS has no security features</td><td>UEFI supports Secure Boot</td></tr>
            <tr><td>BIOS has built-in drivers</td><td>UEFI can load drivers from disk</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:6,title:"MBR vs GPT",content:`
      <section>
        <h3>MBR vs GPT Partition Schemes</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>MBR</th><th>GPT</th></tr>
          </thead>
          <tbody>
            <tr><td>MBR has a maximum partition size of 2TB</td><td>GPT has a theoretical maximum partition size of 9.4ZB</td></tr>
            <tr><td>MBR supports a maximum of 4 primary partitions (or 3 primary + 1 extended)</td><td>GPT supports up to 128 partitions (standard)</td></tr>
            <tr><td>MBR is compatible with BIOS</td><td>GPT requires UEFI (mostly)</td></tr>
            <tr><td>MBR has a single copy of the partition table</td><td>GPT has multiple backups for data safety</td></tr>
            <tr><td>MBR uses Legacy BIOS boot mode</td><td>GPT uses UEFI boot mode</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:7,title:"Firmware",content:`
      <section>
        <h3>What is Firmware?</h3>
        <ul>
          <li><strong>Definition:</strong> Low-level software permanently programmed into hardware.</li>
          <li><strong>Purpose:</strong> Controls device-specific functions (e.g., BIOS/UEFI, router firmware).</li>
          <li><strong>Characteristics:</strong>
            <ul>
              <li>Stored in non-volatile memory (ROM, EEPROM, flash).</li>
              <li>Rarely updated ("semi-permanent").</li>
              <li>Hardware-dependent.</li>
            </ul>
          </li>
          <li><strong>Examples:</strong>
            <ul>
              <li>BIOS/UEFI (motherboards)</li>
              <li>Device drivers (printers, SSDs)</li>
              <li>IoT device controllers</li>
            </ul>
          </li>
        </ul>
      </section>
    `},{id:1,title:"Kernel Mode vs User Mode",content:`
      <section>
        <h3>Kernel Mode vs User Mode</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>Kernel Mode</th><th>User Mode</th></tr>
          </thead>
          <tbody>
            <tr><td>It has complete access to all hardware and system resources.</td><td>It has restricted access, only limited resources can be used.</td></tr>
            <tr><td>Used by operating system code like drivers, kernels.</td><td>Used by normal applications and programs.</td></tr>
            <tr><td>If an error occurs, the whole system can crash.</td><td>If an error occurs, only the application crashes, not the system.</td></tr>
            <tr><td>Runs in a privileged mode.</td><td>Runs in a non-privileged mode.</td></tr>
            <tr><td>Examples: OS kernel, device drivers.</td><td>Examples: Web browsers, media players, games.</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:2,title:"Hardware vs Software Interrupt",content:`
      <section>
        <h3>Hardware Interrupt vs Software Interrupt</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>Hardware Interrupt</th><th>Software Interrupt</th></tr>
          </thead>
          <tbody>
            <tr><td>Generated by external hardware devices like keyboard, mouse, or network cards.</td><td>Generated by programs or operating systems during execution.</td></tr>
            <tr><td>Occurs asynchronously, at any time.</td><td>Occurs synchronously, based on program instruction.</td></tr>
            <tr><td>Example: Pressing a key on the keyboard.</td><td>Example: A system call in a program.</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:3,title:"Maskable vs NonMaskable Interrupt",content:`
      <section>
        <h3>Maskable vs Non-Maskable Interrupt</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>Maskable Interrupt</th><th>Non-Maskable Interrupt</th></tr>
          </thead>
          <tbody>
            <tr><td>Can be ignored or delayed by the processor.</td><td>Cannot be ignored; must be processed immediately.</td></tr>
            <tr><td>Used for non-critical tasks.</td><td>Used for critical tasks like hardware failure notifications.</td></tr>
            <tr><td>Example: Network packet arrival.</td><td>Example: Memory corruption alert.</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:4,title:"Trap vs Interrupt",content:`
      <section>
        <h3>Trap vs Interrupt</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>Trap</th><th>Interrupt</th></tr>
          </thead>
          <tbody>
            <tr><td>It is a software-generated interrupt.</td><td>It can be generated by hardware or software.</td></tr>
            <tr><td>Triggered intentionally by a running program, often for system calls or error handling.</td><td>Triggered mostly by external events like I/O or hardware signals.</td></tr>
            <tr><td>Occurs synchronously (based on instruction execution).</td><td>Occurs asynchronously (external event-based).</td></tr>
            <tr><td>Example: Divide by zero error causing a trap.</td><td>Example: Keyboard input causing an interrupt.</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:5,title:"Daemons vs Services",content:`
      <section>
        <h3>Daemons and Services</h3>
        <ul>
          <li><strong>Daemon:</strong> A background process that runs continuously on UNIX/Linux systems to handle system tasks like logging, networking, or scheduling.</li>
          <li><strong>Service:</strong> In Windows, services are similar to daemons — background processes that start automatically and handle system functionalities like printing, security updates, etc.</li>
          <li>Both daemons and services are essential for system operations but differ slightly by platform (UNIX/Linux vs Windows).</li>
          <li>Examples of Daemon: <code>cron</code> (scheduler), <code>sshd</code> (SSH server).</li>
          <li>Examples of Service: Windows Update service, Print Spooler service.</li>
        </ul>
      </section>
    `},{id:1,title:"Compiler Loader Assembler Interpreter",content:`
      <section>
        <h3>System Software Components</h3>
        
        <h4>Compiler</h4>
        <ul>
          <li><strong>Function:</strong> Translates entire high-level code to machine code</li>
          <li><strong>Input:</strong> Source code</li>
          <li><strong>Output:</strong> Executable file</li>
          <li><strong>Example:</strong> GCC (C compiler)</li>
        </ul>
  
        <h4>Interpreter</h4>
        <ul>
          <li><strong>Function:</strong> Executes code line-by-line</li>
          <li><strong>Input:</strong> Source code</li>
          <li><strong>Output:</strong> Immediate execution</li>
          <li><strong>Example:</strong> Python interpreter</li>
        </ul>
  
        <h4>Assembler</h4>
        <ul>
          <li><strong>Function:</strong> Converts assembly code to machine code</li>
          <li><strong>Input:</strong> Assembly code</li>
          <li><strong>Output:</strong> Object code</li>
          <li><strong>Example:</strong> MASM</li>
        </ul>
  
        <h4>Loader</h4>
        <ul>
          <li><strong>Function:</strong> Loads executable into memory</li>
          <li><strong>Input:</strong> Object file</li>
          <li><strong>Output:</strong> Memory allocation</li>
          <li><strong>Example:</strong> Part of OS</li>
        </ul>
  
        <h4>Key Differences</h4>
        <ul>
          <li><strong>Compiler vs Interpreter:</strong> Compiler generates standalone executable; interpreter executes directly</li>
          <li><strong>Assembler:</strong> Works only with assembly language (low-level)</li>
          <li><strong>Loader:</strong> Final step before execution (memory mapping)</li>
        </ul>
      </section>
    `},{id:2,title:"System Calls",content:`
      <section>
        <h3>System Calls</h3>
        <ul>
          <li><strong>Definition:</strong> Interface between user programs and OS kernel</li>
          <li><strong>Purpose:</strong> Access hardware/services (files, processes, devices)</li>
          <li><strong>How it works:</strong>
            <ol>
              <li>User program triggers software interrupt (e.g., <code>int 0x80</code> in Linux)</li>
              <li>CPU switches to kernel mode</li>
              <li>Kernel executes privileged operation</li>
              <li>Returns result to user space</li>
            </ol>
          </li>
          <li><strong>Types:</strong>
            <ul>
              <li>Process Control (<code>fork()</code>, <code>exit()</code>)</li>
              <li>File Management (<code>open()</code>, <code>read()</code>)</li>
              <li>Device Management (<code>ioctl()</code>)</li>
              <li>Communication (<code>pipe()</code>, <code>shmget()</code>)</li>
            </ul>
          </li>
        </ul>
      </section>
    `},{id:3,title:"Application Programming Interface API",content:`
      <section>
        <h3>APIs</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>Description</th><th>Details</th></tr>
          </thead>
          <tbody>
            <tr><td>API is a set of protocols and routines for building software</td><td>APIs standardize communication between different software components</td></tr>
            <tr><td>API's purpose is to standardize communication between components</td><td>It allows different software applications to interact efficiently</td></tr>
            <tr><td>API types include:</td><td>
              <ul>
                <li><strong>Web APIs:</strong> REST, SOAP (HTTP-based)</li>
                <li><strong>Library APIs:</strong> Standard libraries (e.g., Java Collections)</li>
                <li><strong>OS APIs:</strong> Windows API, POSIX</li>
              </ul>
            </td></tr>
            <tr><td>APIs use system calls internally but provide abstraction</td><td>System calls perform lower-level operations, while APIs offer higher-level interfaces</td></tr>
            <tr><td>Examples of APIs include Twitter API, Google Maps API, and OpenGL</td><td>These APIs allow integration with various services and platforms</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:4,title:"OS Kernel",content:`
      <section>
        <h3>Operating System Kernel</h3>
        <ul>
          <li><strong>Definition:</strong> Core component of OS managing system resources</li>
          <li><strong>Functions:</strong>
            <ul>
              <li>Process scheduling</li>
              <li>Memory management</li>
              <li>Device I/O</li>
              <li>System security</li>
            </ul>
          </li>
          <li><strong>Types:</strong>
            <table border="1" cellpadding="6" cellspacing="0">
              <thead>
                <tr><th>Type</th><th>Description</th><th>Examples</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Monolithic</strong></td><td>All services in kernel space</td><td>Linux, Unix</td></tr>
                <tr><td><strong>Microkernel</strong></td><td>Minimal services in kernel, rest in user space</td><td>QNX, MINIX</td></tr>
                <tr><td><strong>Hybrid</strong></td><td>Combines monolithic and microkernel</td><td>Windows NT, macOS</td></tr>
              </tbody>
            </table>
          </li>
          <li><strong>Key Concepts:</strong>
            <ul>
              <li><strong>Kernel Mode:</strong> Privileged CPU mode for kernel operations</li>
              <li><strong>System Calls:</strong> User-to-kernel transition mechanism</li>
            </ul>
          </li>
        </ul>
      </section>
    `},{id:6,title:"Shell",content:`
      <section>
        <h3>Shell</h3>
        <ul>
          <li>A shell is a command-line interface between the user and the operating system.</li>
          <li>It interprets user commands and converts them into actions by the OS.</li>
          <li>Shells can be command-line (like Bash, Zsh) or graphical (GUI shells).</li>
          <li>Examples: Bash (Bourne Again Shell), Zsh, Fish, Windows PowerShell.</li>
          <li>It also supports scripting for automating tasks.</li>
        </ul>
      </section>
    `},{id:7,title:"JVM (Java Virtual Machine)",content:`
      <section>
        <h3>JVM (Java Virtual Machine)</h3>
        <ul>
          <li>JVM is a part of the Java Runtime Environment (JRE) responsible for running Java bytecode.</li>
          <li>It abstracts the underlying hardware and OS, making Java programs platform-independent ("Write Once, Run Anywhere").</li>
          <li>Main tasks: Loading code, verifying code, executing code, and managing memory (Garbage Collection).</li>
          <li>Key Components: Class Loader, Bytecode Verifier, Execution Engine, Garbage Collector.</li>
          <li>Example: When you run <code>java MyProgram</code>, the JVM executes the compiled <code>.class</code> file.</li>
        </ul>
      </section>
    `},{id:8,title:"Booting Process",content:`
      <section>
        <h3>Booting Process</h3>
        <ul>
          <li>The booting process is the sequence of steps that a computer follows when powered on to load the operating system.</li>
          <li>Main Steps:</li>
          <ul>
            <li>1. Power On (POST - Power-On Self Test)</li>
            <li>2. Load Bootloader from BIOS/UEFI</li>
            <li>3. Bootloader loads the operating system kernel into memory</li>
            <li>4. Kernel initializes and starts system services</li>
            <li>5. Login screen or system ready for use</li>
          </ul>
          <li>Without a proper booting process, the computer cannot start the OS.</li>
        </ul>
      </section>
    `},{id:9,title:"Bootloader",content:`
      <section>
        <h3>Bootloader</h3>
        <ul>
          <li>Bootloader is a small program that loads the operating system into memory during the booting process.</li>
          <li>It is the first software that runs after BIOS/UEFI initialization.</li>
          <li>It locates the OS kernel, loads it into RAM, and starts its execution.</li>
          <li>Examples: GRUB (Linux), LILO (older Linux), Windows Boot Manager.</li>
          <li>Advanced bootloaders can also offer options like booting multiple OS (dual boot).</li>
        </ul>
      </section>
    `},{id:10,title:"Bootstrapping",content:`
      <section>
        <h3>Bootstrapping</h3>
        <ul>
          <li>Bootstrapping is the process of starting a system from a powered-off or reset state without manual intervention.</li>
          <li>It refers to loading the minimal initial software needed to load and run the operating system.</li>
          <li>In computing, "bootstrap" means "self-starting" — small code leads to loading larger, complex systems.</li>
          <li>Bootstrapping mainly involves the execution of the Bootloader.</li>
          <li>Example: Bootstrapping helps a computer get from power-on state to full operating system running.</li>
        </ul>
      </section>
    `},{id:1,title:"Multiprogramming",content:`
      <section>
        <h3>Multiprogramming</h3>
        <ul>
          <li><strong>Definition:</strong> Running multiple programs simultaneously by sharing a single CPU</li>
          <li><strong>Key Characteristics:</strong>
            <ul>
              <li>Designed to maximize CPU utilization</li>
              <li>Uses context switching between programs</li>
              <li>Programs are kept in memory simultaneously</li>
              <li>CPU switches when current program is waiting for I/O</li>
            </ul>
          </li>
          <li><strong>Advantages:</strong>
            <ul>
              <li>Better CPU utilization</li>
              <li>Increased system throughput</li>
            </ul>
          </li>
          <li><strong>Disadvantages:</strong>
            <ul>
              <li>No user interaction</li>
              <li>Complex memory management needed</li>
            </ul>
          </li>
          <li><strong>Example:</strong> Early mainframe systems</li>
        </ul>
      </section>
    `},{id:2,title:"Multiprocessing",content:`
      <section>
        <h3>Multiprocessing</h3>
        <ul>
          <li><strong>Definition:</strong> Using multiple CPUs/cores to execute processes simultaneously</li>
          <li><strong>Key Characteristics:</strong>
            <ul>
              <li>True parallel execution</li>
              <li>Each CPU can execute separate processes</li>
              <li>Can be symmetric (SMP) or asymmetric (AMP)</li>
            </ul>
          </li>
          <li><strong>Advantages:</strong>
            <ul>
              <li>Genuine parallel processing</li>
              <li>Increased reliability (if one CPU fails)</li>
              <li>Better performance for CPU-bound tasks</li>
            </ul>
          </li>
          <li><strong>Disadvantages:</strong>
            <ul>
              <li>More expensive hardware</li>
              <li>Complex coordination required</li>
            </ul>
          </li>
          <li><strong>Example:</strong> Modern multi-core processors</li>
        </ul>
      </section>
    `},{id:3,title:"Multitasking",content:`
      <section>
        <h3>Multitasking</h3>
        <ul>
          <li><strong>Definition:</strong> Executing multiple tasks (processes) concurrently on a single CPU</li>
          <li><strong>Key Characteristics:</strong>
            <ul>
              <li>Time-sharing between tasks</li>
              <li>Fast switching creates illusion of parallelism</li>
              <li>Can be preemptive or cooperative</li>
            </ul>
          </li>
          <li><strong>Advantages:</strong>
            <ul>
              <li>Better user experience</li>
              <li>Efficient resource utilization</li>
              <li>Responsive systems</li>
            </ul>
          </li>
          <li><strong>Disadvantages:</strong>
            <ul>
              <li>Overhead from context switching</li>
              <li>Potential for priority inversion</li>
            </ul>
          </li>
          <li><strong>Example:</strong> Modern operating systems (Windows, Linux, macOS)</li>
        </ul>
      </section>
    `},{id:4,title:"Multithreading",content:`
      <section>
        <h3>Multithreading</h3>
        <ul>
          <li><strong>Definition:</strong> Executing multiple threads within a single process</li>
          <li><strong>Key Characteristics:</strong>
            <ul>
              <li>Threads share the same memory space</li>
              <li>Lighter than processes (faster creation/termination)</li>
              <li>Can be user-level or kernel-level</li>
            </ul>
          </li>
          <li><strong>Advantages:</strong>
            <ul>
              <li>Improved application responsiveness</li>
              <li>Efficient communication between threads</li>
              <li>Better utilization of multi-core systems</li>
            </ul>
          </li>
          <li><strong>Disadvantages:</strong>
            <ul>
              <li>Complex synchronization needed</li>
              <li>Potential for deadlocks and race conditions</li>
            </ul>
          </li>
          <li><strong>Example:</strong> Web servers handling multiple requests</li>
        </ul>
  
        <h4>Comparison of Concepts</h4>
  
        <h5>Multiprogramming</h5>
        <ul>
          <li><strong>Level:</strong> Process</li>
          <li><strong>Parallelism:</strong> No (only one process at a time)</li>
          <li><strong>Memory:</strong> Separate memory for each process</li>
          <li><strong>Switching Cost:</strong> High (process switching overhead)</li>
        </ul>
  
        <h5>Multiprocessing</h5>
        <ul>
          <li><strong>Level:</strong> Process</li>
          <li><strong>Parallelism:</strong> Yes (true parallelism across multiple CPUs)</li>
          <li><strong>Memory:</strong> Separate memory for each process</li>
          <li><strong>Switching Cost:</strong> High (context switch between processes)</li>
        </ul>
  
        <h5>Multitasking</h5>
        <ul>
          <li><strong>Level:</strong> Process</li>
          <li><strong>Parallelism:</strong> Simulated (fast switching gives illusion of parallelism)</li>
          <li><strong>Memory:</strong> Separate memory for each process</li>
          <li><strong>Switching Cost:</strong> High (CPU time shared between processes)</li>
        </ul>
  
        <h5>Multithreading</h5>
        <ul>
          <li><strong>Level:</strong> Thread</li>
          <li><strong>Parallelism:</strong> Yes (especially on multi-core processors)</li>
          <li><strong>Memory:</strong> Threads share the same memory space</li>
          <li><strong>Switching Cost:</strong> Low (lightweight context switching)</li>
        </ul>
      </section>
    `},{id:1,title:"What is a Process?",content:`
      <section>
        <h3>Process Definition</h3>
        <ul>
          <li><strong>Technical Definition:</strong> A program in execution with its own memory space and system resources</li>
          <li><strong>Components:</strong>
            <ul>
              <li>Program code (text section)</li>
              <li>Current activity (program counter, registers)</li>
              <li>Stack (temporary data like function parameters)</li>
              <li>Data section (global variables)</li>
              <li>Heap (dynamically allocated memory)</li>
            </ul>
          </li>
          <li><strong>Created by:</strong> Forking (Unix) or CreateProcess (Windows)</li>
          <li><strong>Process Control Block (PCB):</strong> Data structure containing:
            <ul>
              <li>Process ID (PID)</li>
              <li>Process state</li>
              <li>CPU registers</li>
              <li>Memory limits</li>
              <li>List of open files</li>
            </ul>
          </li>
        </ul>
      </section>
    `},{id:2,title:"Process States",content:`
      <section>
        <h3>Process Lifecycle States</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>State</th><th>Description</th><th>Trigger</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>New</strong></td>
              <td>Process is being created</td>
              <td>When a program starts execution</td>
            </tr>
            <tr>
              <td><strong>Ready</strong></td>
              <td>Process is loaded in memory, waiting for CPU</td>
              <td>After creation or when preempted</td>
            </tr>
            <tr>
              <td><strong>Running</strong></td>
              <td>Instructions are being executed</td>
              <td>When scheduled by CPU</td>
            </tr>
            <tr>
              <td><strong>Waiting/Blocked</strong></td>
              <td>Process is waiting for an event (I/O, signal)</td>
              <td>When requesting I/O or resources</td>
            </tr>
            <tr>
              <td><strong>Terminated</strong></td>
              <td>Process has finished execution</td>
              <td>After completion or forced termination</td>
            </tr>
          </tbody>
        </table>
        
        <h4>State Transition Diagram</h4>
        <p>New → Ready → Running → Waiting → Ready → Running → Terminated</p>
        
        <h4>Key Notes:</h4>
        <ul>
          <li><strong>Preemption:</strong> Running → Ready (when time quantum expires)</li>
          <li><strong>Dispatch:</strong> Ready → Running (when scheduled)</li>
          <li><strong>I/O Wait:</strong> Running → Waiting (when I/O requested)</li>
          <li><strong>Wake Up:</strong> Waiting → Ready (when I/O completes)</li>
        </ul>
      </section>
    `},{id:1,title:"Types of Processes",content:`
      <section>
        <h3>Classification of Processes</h3>
  
        <h4>Foreground Processes</h4>
        <ul>
          <li><strong>Description:</strong> Interactive processes requiring user input</li>
          <li><strong>Examples:</strong> Text editors, browsers</li>
          <li><strong>Key Characteristics:</strong>
            <ul>
              <li>Higher priority</li>
              <li>Connected to terminal</li>
              <li>User-initiated</li>
            </ul>
          </li>
        </ul>
  
        <h4>Background Processes</h4>
        <ul>
          <li><strong>Description:</strong> Non-interactive autonomous processes</li>
          <li><strong>Examples:</strong> Antivirus scans, backups</li>
          <li><strong>Key Characteristics:</strong>
            <ul>
              <li>Lower priority</li>
              <li>No user interaction</li>
              <li>Daemons in Unix</li>
            </ul>
          </li>
        </ul>
  
        <h4>System Processes</h4>
        <ul>
          <li><strong>Description:</strong> OS core operations</li>
          <li><strong>Examples:</strong> Memory management, task scheduler</li>
          <li><strong>Key Characteristics:</strong>
            <ul>
              <li>Kernel-level privileges</li>
              <li>Auto-started at boot</li>
              <li>Critical for OS functioning</li>
            </ul>
          </li>
        </ul>
  
        <h4>User Processes</h4>
        <ul>
          <li><strong>Description:</strong> Applications initiated by users</li>
          <li><strong>Examples:</strong> Word processors, games</li>
          <li><strong>Key Characteristics:</strong>
            <ul>
              <li>Run in user space</li>
              <li>Can be terminated without system crash</li>
              <li>Limited hardware access</li>
            </ul>
          </li>
        </ul>
  
        <h4>Batch Processes</h4>
        <ul>
          <li><strong>Description:</strong> Pre-defined sequence of commands</li>
          <li><strong>Examples:</strong> Payroll processing, log analysis</li>
          <li><strong>Key Characteristics:</strong>
            <ul>
              <li>Non-interactive execution</li>
              <li>Scheduled for specific times</li>
              <li>Resource-intensive</li>
            </ul>
          </li>
        </ul>
  
        <h4>Orphan Processes</h4>
        <ul>
          <li><strong>Description:</strong> Child processes without parent</li>
          <li><strong>Examples:</strong> Crashed application remnants</li>
          <li><strong>Key Characteristics:</strong>
            <ul>
              <li>Adopted by init process (PID 1)</li>
              <li>Consume resources unnecessarily</li>
            </ul>
          </li>
        </ul>
  
        <h4>Zombie Processes</h4>
        <ul>
          <li><strong>Description:</strong> Terminated but not cleaned up</li>
          <li><strong>Examples:</strong> Defunct processes in process table</li>
          <li><strong>Key Characteristics:</strong>
            <ul>
              <li>Retain PID until parent reads exit status</li>
              <li>Waste process table slots</li>
            </ul>
          </li>
        </ul>
  
        <h3>Special Process Types in Unix/Linux</h3>
        <ul>
          <li><strong>Daemon Processes:</strong> Background services (e.g., httpd, sshd)</li>
          <li><strong>Kernel Threads:</strong> Responsible for memory management, process scheduling</li>
          <li><strong>Init Process:</strong> First process (PID 1) that starts all other processes</li>
        </ul>
  
        <h3>Windows-Specific Types</h3>
        <ul>
          <li><strong>Services:</strong> Equivalent to daemons, e.g., Print Spooler</li>
          <li><strong>NT Kernel Processes:</strong> Handle system-critical operations</li>
        </ul>
  
      </section>
    `},{id:11,title:"User Process",content:`
      <section>
        <h3>User Process</h3>
        <ul>
          <li>A User Process is created and managed by users or user applications.</li>
          <li>It runs in User Mode with limited privileges for system safety.</li>
          <li>Examples: Web browsers, text editors, and media players.</li>
          <li>If a user process crashes, it usually does not affect the overall system.</li>
        </ul>
      </section>
    `},{id:12,title:"System Process",content:`
      <section>
        <h3>System Process</h3>
        <ul>
          <li>A System Process is created and managed by the operating system itself.</li>
          <li>It runs in Kernel Mode with full privileges to access hardware and memory.</li>
          <li>Examples: Scheduler, memory manager, device drivers.</li>
          <li>If a system process crashes, it can cause the entire system to become unstable or crash.</li>
        </ul>
      </section>
    `},{id:13,title:"Daemon Process",content:`
      <section>
        <h3>Daemon Process</h3>
        <ul>
          <li>A Daemon is a background process that runs without direct user interaction.</li>
          <li>It is usually started during system boot and runs continuously to provide services.</li>
          <li>Examples: <code>sshd</code> (SSH server daemon), <code>httpd</code> (Apache web server daemon).</li>
          <li>In Unix/Linux, daemon processes typically have names ending with "d".</li>
        </ul>
      </section>
    `},{id:14,title:"Zombie Process",content:`
      <section>
        <h3>Zombie Process</h3>
        <ul>
          <li>A Zombie Process is a process that has completed its execution but still has an entry in the process table.</li>
          <li>It occurs because its parent process has not yet read its exit status using the <code>wait()</code> system call.</li>
          <li>Zombies do not consume system resources, but if too many accumulate, it can exhaust process table entries.</li>
          <li>Solution: Properly handle child processes using <code>wait()</code> or <code>waitpid()</code>.</li>
        </ul>
      </section>
    `},{id:15,title:"Orphan Process",content:`
      <section>
        <h3>Orphan Process</h3>
        <ul>
          <li>An Orphan Process is a process whose parent has terminated or crashed while it is still running.</li>
          <li>These processes are adopted by the <code>init</code> process (PID 1) in Unix/Linux systems.</li>
          <li><code>init</code> takes responsibility for cleaning up orphan processes after they terminate.</li>
          <li>Orphans are usually harmless and properly managed by the OS.</li>
        </ul>
      </section>
    `},{id:16,title:"Process Control Block (PCB)",content:`
      <section>
        <h3>Process Control Block (PCB)</h3>
        <ul>
          <li>PCB is a data structure maintained by the OS for each process.</li>
          <li>It stores all information about the process like process ID, process state, CPU registers, memory limits, open files, and scheduling information.</li>
          <li>PCB helps the OS to manage and switch between processes efficiently during context switching.</li>
        </ul>
      </section>
    `},{id:17,title:"Process Looks in Memory or process memory layout",content:`
      <section>
        <h3>Process Memory Layout</h3>
        <ul>
          <li><strong>Text Segment:</strong> Contains executable code.</li>
          <li><strong>Data Segment:</strong> Holds global and static variables.</li>
          <li><strong>Heap Segment:</strong> Used for dynamic memory allocation during runtime.</li>
          <li><strong>Stack Segment:</strong> Holds function calls, local variables, and control flow data.</li>
        </ul>
      </section>
    `},{id:18,title:"Process vs Threads",content:`
      <section>
        <h3>Process vs Threads</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>Process</th><th>Thread</th></tr>
          </thead>
          <tbody>
            <tr><td>Independent execution unit with its own memory space.</td><td>Lightweight execution unit sharing memory within a process.</td></tr>
            <tr><td>Processes are isolated from each other.</td><td>Threads share the same memory of the process.</td></tr>
            <tr><td>Inter-process communication (IPC) is needed to share data between processes.</td><td>Threads can directly communicate with each other.</td></tr>
            <tr><td>Context switching between processes is slower.</td><td>Context switching between threads is faster.</td></tr>
            <tr><td>Example: Running two separate applications like Chrome and VSCode.</td><td>Example: Multiple tabs running inside Chrome (threads).</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:19,title:"Context Switching",content:`
      <section>
        <h3>Context Switching</h3>
        <ul>
          <li>Context Switching is the process of saving the state of a running process or thread and loading the state of the next one to run.</li>
          <li>It is necessary to achieve multitasking and efficient CPU usage.</li>
          <li>During a context switch, the CPU saves the current process's PCB and loads the next process's PCB.</li>
          <li>Although necessary, frequent context switching can lead to performance overhead.</li>
        </ul>
      </section>
    `},{id:20,title:"Fork vs Exec System Calls",content:`
      <section>
        <h3>Fork vs Exec</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>Fork</th><th>Exec</th></tr>
          </thead>
          <tbody>
            <tr><td>Creates a new child process by duplicating the parent process.</td><td>Replaces the current process image with a new process image.</td></tr>
            <tr><td>Child and parent run independently after fork.</td><td>Only the new process runs; old process memory is replaced.</td></tr>
            <tr><td>Returns twice: once in parent and once in child.</td><td>Never returns if successful, directly runs new program.</td></tr>
            <tr><td>Used when we need both parent and child processes.</td><td>Used when we want to completely replace the process.</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:21,title:"Vfork vs Fork",content:`
      <section>
        <h3>Vfork vs Fork</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>Fork</th><th>Vfork</th></tr>
          </thead>
          <tbody>
            <tr><td>Child has its own copy of the parent's address space.</td><td>Child shares the parent's address space until it calls <code>exec()</code> or <code>exit()</code>.</td></tr>
            <tr><td>Slower because of copying the parent's memory.</td><td>Faster because no memory is copied initially.</td></tr>
            <tr><td>Parent and child can run independently.</td><td>Parent is suspended until child releases memory (calls exec or exit).</td></tr>
            <tr><td>Safe but less efficient for creating quick new processes.</td><td>Efficient but dangerous if child modifies memory before exec.</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:1,title:"Race Condition",content:`
      <section>
        <h3>Race Condition</h3>
        <ul>
          <li><strong>Definition:</strong> A situation where multiple processes/threads access shared data concurrently, and the final outcome depends on the timing of their execution</li>
          <li><strong>Occurs when:</strong>
            <ul>
              <li>Two or more processes access shared memory</li>
              <li>At least one process is writing</li>
              <li>Operations are not properly synchronized</li>
            </ul>
          </li>
          <li><strong>Example:</strong>
            <pre>
Process A: read X (value=5)
Process B: read X (value=5)
Process A: increment X (5→6)
Process B: decrement X (5→4)
Final value: 4 or 6 (should be 5)
            </pre>
          </li>
          <li><strong>Prevention:</strong>
            <ul>
              <li>Mutex locks</li>
              <li>Semaphores</li>
              <li>Atomic operations</li>
              <li>Monitor</li>
            </ul>
          </li>
        </ul>
      </section>
    `},{id:2,title:"Process Scheduling Queues",content:`
      <section>
        <h3>Process Scheduling Queues</h3>
        <ul>
          <li><strong>Job Queue:</strong>
            <ul>
              <li><strong>Purpose:</strong> Holds all processes present in the system</li>
              <li><strong>Contains:</strong> Newly created processes</li>
              <li><strong>Managed By:</strong> Long-term scheduler</li>
            </ul>
          </li>
  
          <li><strong>Ready Queue:</strong>
            <ul>
              <li><strong>Purpose:</strong> Holds processes that are ready to execute</li>
              <li><strong>Contains:</strong> Processes in the ready state</li>
              <li><strong>Managed By:</strong> Short-term scheduler</li>
            </ul>
          </li>
  
          <li><strong>Device Queue:</strong>
            <ul>
              <li><strong>Purpose:</strong> Holds processes waiting for I/O devices</li>
              <li><strong>Contains:</strong> Processes in the waiting (blocked) state</li>
              <li><strong>Managed By:</strong> I/O subsystem</li>
            </ul>
          </li>
  
          <li><strong>Termination Queue:</strong>
            <ul>
              <li><strong>Purpose:</strong> Holds completed processes awaiting cleanup</li>
              <li><strong>Contains:</strong> Zombie processes</li>
              <li><strong>Managed By:</strong> Operating System (OS) cleanup routines</li>
            </ul>
          </li>
        </ul>
  
        <h4>Queue Relationships</h4>
        <pre>
  New → Job Queue → Ready Queue → Running → Device Queue → Ready Queue → Terminated
        </pre>
  
        <h4>Key Points:</h4>
        <ul>
          <li><strong>Ready Queue:</strong> Often implemented as a priority queue for scheduling</li>
          <li><strong>Device Queues:</strong> Multiple device-specific queues exist (one per I/O device)</li>
          <li><strong>Context Switch:</strong> Happens when moving between the ready and running states</li>
        </ul>
      </section>
    `},{id:22,title:"Job Queue",content:`
      <section>
        <h3>Job Queue</h3>
        <ul>
          <li>The Job Queue holds all processes that are submitted to the system for processing.</li>
          <li>These processes are waiting to be admitted into main memory for execution.</li>
          <li>It is typically managed by the long-term scheduler (job scheduler).</li>
        </ul>
      </section>
    `},{id:23,title:"Ready Queue",content:`
      <section>
        <h3>Ready Queue</h3>
        <ul>
          <li>The Ready Queue holds all processes that are loaded in memory and ready to execute but are waiting for CPU time.</li>
          <li>These processes are managed by the short-term scheduler (CPU scheduler).</li>
          <li>When the CPU becomes free, a process from the ready queue is selected for execution.</li>
        </ul>
      </section>
    `},{id:24,title:"Device Queue",content:`
      <section>
        <h3>Device Queue</h3>
        <ul>
          <li>The Device Queue holds all processes that are waiting for a particular I/O device to become available.</li>
          <li>Each I/O device has its own device queue.</li>
          <li>When the I/O operation completes, the process is moved back to the ready queue for CPU execution.</li>
        </ul>
      </section>
    `},{id:1,title:"Schedulers",content:`
      <section>
        <h3>Types of Process Schedulers</h3>
  
        <h4>Long-Term Scheduler (Job Scheduler)</h4>
        <ul>
          <li><strong>Frequency:</strong> Infrequent (minutes)</li>
          <li><strong>Speed:</strong> Slowest</li>
          <li><strong>Key Responsibility:</strong> Controls degree of multiprogramming by selecting processes from job pool to load into memory</li>
          <li><strong>Examples:</strong> Batch system job selection</li>
        </ul>
  
        <h4>Short-Term Scheduler (CPU Scheduler)</h4>
        <ul>
          <li><strong>Frequency:</strong> Very frequent (milliseconds)</li>
          <li><strong>Speed:</strong> Fastest</li>
          <li><strong>Key Responsibility:</strong> Selects which ready process gets CPU time next</li>
          <li><strong>Examples:</strong> Time-sharing systems</li>
        </ul>
  
        <h4>Medium-Term Scheduler (Swapper)</h4>
        <ul>
          <li><strong>Frequency:</strong> Moderate (seconds)</li>
          <li><strong>Speed:</strong> Medium</li>
          <li><strong>Key Responsibility:</strong> Performs process swapping between memory and disk</li>
          <li><strong>Examples:</strong> Virtual memory systems</li>
        </ul>
  
        <h3>Detailed Comparison</h3>
        <ul>
          <li><strong>Long-Term Scheduler:</strong>
            <ul>
              <li>Determines which programs are admitted to the system</li>
              <li>Balances CPU-bound and I/O-bound processes</li>
              <li>Rarely used in modern time-sharing systems</li>
            </ul>
          </li>
          <li><strong>Short-Term Scheduler:</strong>
            <ul>
              <li>Invoked whenever CPU becomes idle</li>
              <li>Uses scheduling algorithms (Round Robin, Priority, etc.)</li>
              <li>Makes the most frequent scheduling decisions</li>
            </ul>
          </li>
          <li><strong>Medium-Term Scheduler:</strong>
            <ul>
              <li>Manages memory overload via swapping</li>
              <li>Can suspend/resume processes</li>
              <li>Helps maintain good system performance</li>
            </ul>
          </li>
        </ul>
  
        <h3>Scheduler Relationships</h3>
        <pre>
  Job Pool → [Long-Term] → Ready Queue → [Short-Term] → CPU
  Memory ↔ [Medium-Term] ↔ Disk (Swap)
        </pre>
  
        <h3>Key Notes</h3>
        <ul>
          <li>Most modern systems primarily use short-term scheduling</li>
          <li>Long-term scheduling is more common in batch systems</li>
          <li>Medium-term scheduling is crucial for systems with virtual memory</li>
        </ul>
      </section>
    `},{id:25,title:"Long Term Scheduler",content:`
      <section>
        <h3>Long-Term Scheduler (Job Scheduler)</h3>
        <ul>
          <li>Controls the admission of processes into the system (from the Job Queue to the Ready Queue).</li>
          <li>Decides how many and which processes are admitted into the system for processing.</li>
          <li>Helps maintain a good mix of CPU-bound and I/O-bound processes for system balance.</li>
          <li>It is invoked less frequently compared to other schedulers.</li>
        </ul>
      </section>
    `},{id:26,title:"Short Term Scheduler",content:`
      <section>
        <h3>Short-Term Scheduler (CPU Scheduler)</h3>
        <ul>
          <li>Decides which process from the Ready Queue will be executed next by the CPU.</li>
          <li>It is invoked very frequently (milliseconds), making quick decisions.</li>
          <li>Main goal is to maximize CPU utilization and system responsiveness.</li>
        </ul>
      </section>
    `},{id:27,title:"Medium Term Scheduler",content:`
      <section>
        <h3>Medium-Term Scheduler</h3>
        <ul>
          <li>Handles the suspension and resumption of processes (swapping).</li>
          <li>Temporarily removes processes from main memory (swap out) to reduce the load if needed.</li>
          <li>Later, brings back the processes into memory (swap in) for execution.</li>
          <li>Helps improve memory management and CPU efficiency.</li>
        </ul>
      </section>
    `},{id:28,title:"CPU vs I/O Bound Process",content:`
      <section>
        <h3>CPU Bound Process vs I/O Bound Process</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>CPU Bound Process</th><th>I/O Bound Process</th></tr>
          </thead>
          <tbody>
            <tr><td>Primarily uses CPU resources for computation.</td><td>Primarily waits for I/O operations like reading/writing to disk or network.</td></tr>
            <tr><td>Execution time is limited by CPU speed.</td><td>Execution time is limited by the speed of I/O devices.</td></tr>
            <tr><td>Examples: Complex calculations, simulations.</td><td>Examples: File transfers, database queries.</td></tr>
            <tr><td>Often runs with high CPU usage, keeping CPU busy.</td><td>Spends a lot of time waiting for I/O operations to complete.</td></tr>
            <tr><td>Optimized by increasing CPU power or multi-threading.</td><td>Optimized by improving I/O device speed or using parallel processing for I/O.</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:29,title:"Context Switching",content:`
      <section>
        <h3>Context Switching</h3>
        <ul>
          <li>Context Switching is the process of saving and restoring the state (context) of a CPU process when switching between different tasks.</li>
          <li>It occurs when the operating system’s scheduler switches the CPU from one process to another.</li>
          <li>The state of the current process is saved in the Process Control Block (PCB), and the state of the next process is loaded from its PCB.</li>
          <li>Context switching allows multitasking and ensures that multiple processes can run concurrently on a single CPU.</li>
          <li>It has overhead, as saving and loading contexts take time and resources.</li>
        </ul>
      </section>
    `},{id:1,title:"Inter Process Communication (IPC)",content:`
      <section>
        <h3>Inter-Process Communication (IPC)</h3>
        <ul>
          <li><strong>Definition:</strong> Mechanisms that allow processes to communicate and synchronize their actions</li>
          <li><strong>Purpose:</strong> Enable processes to share data, coordinate tasks, and avoid race conditions</li>
        </ul>
  
        <h4>IPC Communication Models</h4>
        <ul>
          <li><strong>Shared Memory:</strong>
            <ul>
              <li>Processes access a common memory region</li>
              <li>Best for high-speed communication between processes on the same machine</li>
            </ul>
          </li>
          <li><strong>Message Passing:</strong>
            <ul>
              <li>Processes exchange messages through the operating system kernel</li>
              <li>Useful for communication between different machines or when memory separation is needed</li>
            </ul>
          </li>
        </ul>
  
        <h4>Common IPC Methods</h4>
        <ul>
          <li><strong>Pipes (Message Passing):</strong>
            <ul>
              <li>Unidirectional communication channel (anonymous or named)</li>
              <li>Examples: Unix pipe (|), mkfifo</li>
            </ul>
          </li>
          <li><strong>Message Queues (Message Passing):</strong>
            <ul>
              <li>Structured messages stored in a queue</li>
              <li>Examples: POSIX message queues, System V messages</li>
            </ul>
          </li>
          <li><strong>Shared Memory (Shared Memory):</strong>
            <ul>
              <li>Fastest IPC method using a common memory area</li>
              <li>Examples: shmget(), mmap()</li>
            </ul>
          </li>
          <li><strong>Sockets (Message Passing):</strong>
            <ul>
              <li>Endpoint for network communication</li>
              <li>Examples: TCP/IP sockets, Unix domain sockets</li>
            </ul>
          </li>
          <li><strong>Signals (Message Passing):</strong>
            <ul>
              <li>Asynchronous notifications sent to processes</li>
              <li>Examples: SIGTERM, SIGKILL</li>
            </ul>
          </li>
          <li><strong>Semaphores (Synchronization):</strong>
            <ul>
              <li>Counter used to control access to shared resources</li>
              <li>Examples: System V semaphores, POSIX semaphores</li>
            </ul>
          </li>
        </ul>
  
        <h4>Key Considerations</h4>
        <ul>
          <li><strong>Performance:</strong> Shared memory is fastest but needs proper synchronization</li>
          <li><strong>Synchronization:</strong> Required for shared memory (e.g., mutexes, semaphores)</li>
          <li><strong>Security:</strong> Message passing provides better process isolation</li>
          <li><strong>Complexity:</strong> Shared memory programming is harder to implement correctly</li>
        </ul>
  
        <h4>Use Case Examples</h4>
        <ul>
          <li><strong>Shared Memory:</strong> Database systems, real-time applications</li>
          <li><strong>Message Queues:</strong> Microservices architecture</li>
          <li><strong>Pipes:</strong> Command-line chaining (e.g., <code>ls | grep</code>)</li>
          <li><strong>Sockets:</strong> Client-server applications</li>
        </ul>
      </section>
    `},{id:30,title:"Shared Memory",content:`
      <section>
        <h3>Shared Memory</h3>
        <ul>
          <li>Shared memory is a memory segment that can be accessed by multiple processes in a system.</li>
          <li>It is one of the fastest forms of Inter-Process Communication (IPC) as processes directly read from and write to a common memory region.</li>
          <li>Processes must synchronize their access to shared memory to avoid data inconsistency.</li>
          <li>Typically used when processes need to share large amounts of data or complex structures.</li>
        </ul>
      </section>
    `},{id:31,title:"Message Passing",content:`
      <section>
        <h3>Message Passing</h3>
        <ul>
          <li>Message passing is a communication method where processes communicate by sending and receiving messages.</li>
          <li>It can be either direct (one process sends a message to another) or indirect (messages are sent via a mailbox or message queue).</li>
          <li>This method does not require shared memory and is often used in distributed systems or environments where direct memory access is not practical.</li>
          <li>Message passing is slower than shared memory but can be safer as it avoids issues related to synchronization.</li>
        </ul>
      </section>
    `},{id:32,title:"Pipes",content:`
      <section>
        <h3>Pipes</h3>
        <ul>
          <li>A pipe is a communication channel that allows one process to send data to another process.</li>
          <li>There are two types of pipes: unnamed pipes (for communication between related processes) and named pipes (FIFO - First In, First Out) for communication between any processes.</li>
          <li>Pipes work in a unidirectional manner, i.e., data flows in one direction from the writing process to the reading process.</li>
          <li>Pipes are commonly used in Unix-based systems and support simple and efficient communication for tasks like filtering or data processing.</li>
        </ul>
      </section>
    `},{id:1,title:"Define Pipe",content:`
      <section>
        <h3>Pipe in Operating Systems</h3>
        <ul>
          <li><strong>Definition:</strong> A unidirectional inter-process communication (IPC) mechanism that allows data flow between processes</li>
  
          <li><strong>Characteristics:</strong>
            <ul>
              <li>Creates a producer-consumer relationship between processes</li>
              <li>Data written to the write-end is read from the read-end</li>
              <li>Fixed buffer capacity (typically 4KB–64KB in modern systems)</li>
            </ul>
          </li>
  
          <li><strong>Types of Pipes:</strong>
            <ul>
              <li><strong>Anonymous Pipe:</strong>
                <ul>
                  <li>Temporary communication between related processes</li>
                  <li>Created using <code>pipe()</code> system call</li>
                  <li>Exists only while processes are running</li>
                </ul>
              </li>
              <li><strong>Named Pipe (FIFO):</strong>
                <ul>
                  <li>Persistent communication between unrelated processes</li>
                  <li>Created using <code>mkfifo()</code> command</li>
                  <li>Exists as a file until explicitly deleted</li>
                </ul>
              </li>
            </ul>
          </li>
  
          <li><strong>Common Usage:</strong>
            <ul>
              <li>Command chaining in shells, e.g., <code>ls | grep "file"</code></li>
              <li>Parent-child process communication</li>
              <li>Log processing pipelines</li>
            </ul>
          </li>
        </ul>
      </section>
    `},{id:2,title:"Zombie Processes handle limit",content:`
      <section>
        <h3>Zombie Process Limitations</h3>
        <ul>
          <li><strong>Theoretical Limit:</strong>
            <ul>
              <li>Determined by the PID (Process ID) range</li>
              <li>Default maximum PID value: 32768 (can be increased to 2^22 ~ 4 million on 64-bit systems)</li>
              <li>Each zombie occupies one PID until reaped</li>
            </ul>
          </li>
          <li><strong>Practical Constraints:</strong>
            <table border="1" cellpadding="6" cellspacing="0">
              <thead>
                <tr>
                  <th>Resource</th>
                  <th>Impact</th>
                  <th>Typical Limits</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Process Table Size</td>
                  <td>Kernel data structure storing process info</td>
                  <td>Configurable (usually several thousand entries)</td>
                </tr>
                <tr>
                  <td>System Memory</td>
                  <td>Each zombie consumes kernel memory</td>
                  <td>Minimal (~100 bytes per zombie)</td>
                </tr>
                <tr>
                  <td>Open Files Limit</td>
                  <td>Zombies retain file descriptors</td>
                  <td>ulimit -n (often 1024-65536)</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li><strong>System Configuration:</strong>
            <ul>
              <li><code>/proc/sys/kernel/pid_max</code> - Defines maximum PID value</li>
              <li><code>/proc/sys/kernel/threads-max</code> - Limits total processes/threads</li>
              <li>Can be adjusted via: <code>sysctl -w kernel.pid_max=NEW_VALUE</code></li>
            </ul>
          </li>
          <li><strong>Danger Signs:</strong>
            <ul>
              <li>Failing to create new processes</li>
              <li>"fork: Cannot allocate memory" errors</li>
              <li>High system resource usage despite few active processes</li>
            </ul>
          </li>
        </ul>
      </section>
    `},{id:33,title:"What is a Thread?",content:`
      <section>
        <h3>What is a Thread?</h3>
        <ul>
          <li>A thread is the smallest unit of execution within a process.</li>
          <li>Multiple threads can exist within a process, sharing the same resources such as memory, but each thread has its own execution path.</li>
          <li>Threads allow concurrent execution within a single process, enabling multitasking and improving the performance of applications.</li>
          <li>Threads are lightweight compared to processes, as they share the same memory space and do not require separate memory allocation for each execution unit.</li>
          <li>Threads within a process communicate easily because they share the same memory space, unlike separate processes which require Inter-Process Communication (IPC).</li>
        </ul>
      </section>
    `},{id:34,title:"Thread States",content:`
      <section>
        <h3>Thread States</h3>
        <ul>
          <li><strong>New:</strong> The thread is created but has not started execution yet.</li>
          <li><strong>Ready:</strong> The thread is ready to be executed and is waiting for CPU time. It is in the ready queue.</li>
          <li><strong>Running:</strong> The thread is actively executing on the CPU.</li>
          <li><strong>Waiting:</strong> The thread is waiting for some event to occur (like I/O completion or synchronization).</li>
          <li><strong>Terminated:</strong> The thread has finished execution and is no longer active. It is removed from the system.</li>
        </ul>
      </section>
    `},{id:1,title:"Types of Threads",content:`
      <section>
        <h3>Classification of Threads</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr>
              <th>Cla^on Basis</th>
              <th>Thread Type</th>
              <th>Des</th>
              <th>Impt^on</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="2"><strong>Impt^on Level</strong></td>
              <td><strong>User-Level Threads (ULT)</strong></td>
              <td>Managed by user-space libraries without kernel awareness. Examples: GNU Portable Threads, Java Green Threads (pre-Java 1.3)</td>
              <td>Fast creation/context switching but no true parallelism</td>
            </tr>
            <tr>
              <td><strong>Kernel-Level Threads (KLT)</strong></td>
              <td>Managed directly by OS kernel. Examples: Windows threads, Linux threads (via clone())</td>
              <td>Slower operations but enables true multi-core parallelism</td>
            </tr>
            <tr>
              <td><strong>Rel^on ship</strong></td>
              <td><strong>Worker Threads</strong></td>
              <td>Background threads performing specific tasks. Examples: Web server request handlers, Database connection pools</td>
              <td>Typically part of thread pools</td>
            </tr>
            <tr>
              <td rowspan="3"><strong>Exe^on Model</strong></td>
              <td><strong>Single-Thread-ed</strong></td>
              <td>Process with single thread of execution. Example: Legacy applications</td>
              <td>Simple but cannot leverage multi-core CPUs</td>
            </tr>
            <tr>
              <td><strong>Multi-Thread-ed</strong></td>
              <td>Process with multiple concurrent threads. Example: Modern applications, Web browsers</td>
              <td>Enables parallelism and better resource utilization</td>
            </tr>
            <tr>
              <td><strong>Hybrid</strong></td>
              <td>Combination of ULT and KLT (M:N model). Example: Go goroutines, Solaris threads</td>
              <td>Balances flexibility and performance</td>
            </tr>
          </tbody>
        </table>
  
        <h4>Key Comparisons</h4>
         <table border="1" cellpadding="6" cellspacing="0">
        <thead>
          <tr><th>User-Level Threads</th><th>Kernel-Level Threads</th></tr>
        </thead>
        <tbody>
          <tr><td>User-level threads have very fast context switches (no kernel mode switch)</td><td>Kernel-level threads have slower context switches (requires kernel intervention)</td></tr>
          <tr><td>User-level threads are limited to single-core execution</td><td>Kernel-level threads allow true multi-core parallelism</td></tr>
          <tr><td>If one user-level thread blocks, the whole process blocks</td><td>Other kernel-level threads can continue execution even if one thread blocks</td></tr>
          <tr><td>User-level threads are complex to implement in user-space</td><td>Kernel-level threads result in simpler application code</td></tr>
        </tbody>
      </table>
  
        <h4>Special Thread Types</h4>
        <ul>
          <li><strong>Daemon Threads:</strong> Background threads that don't prevent process termination (e.g., garbage collection threads in Java)</li>
          <li><strong>Fiber Threads:</strong> Ultra-lightweight cooperative threads (Windows Fibers)</li>
          <li><strong>GPU Threads:</strong> Specialized threads for parallel processing on graphics hardware</li>
        </ul>
      </section>
    `},{id:35,title:"User vs Kernel Threads",content:`
      <section>
        <h3>User Threads vs Kernel Threads</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>User Threads</th><th>Kernel Threads</th></tr>
          </thead>
          <tbody>
            <tr><td>User threads are managed by the user-level library (e.g., pthreads) and the kernel is unaware of them.</td><td>Kernel threads are managed by the operating system kernel and the kernel knows about each thread.</td></tr>
            <tr><td>User threads are lightweight because no kernel intervention is required for their management.</td><td>Kernel threads are heavier due to the involvement of the operating system for management.</td></tr>
            <tr><td>User threads cannot take advantage of multiple processors in a multiprocessor system (since the kernel sees them as a single process).</td><td>Kernel threads can take advantage of multiprocessor systems and execute in parallel.</td></tr>
            <tr><td>Scheduling of user threads is handled by a user-level thread library.</td><td>Scheduling of kernel threads is handled by the operating system.</td></tr>
            <tr><td>Example: pthreads in user-space libraries.</td><td>Example: Windows Threads, Linux Native Threads.</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:36,title:"Thread Control Block (TCB)",content:`
      <section>
        <h3>Thread Control Block (TCB)</h3>
        <ul>
          <li>The Thread Control Block (TCB) is a data structure used by the operating system to store information about a thread.</li>
          <li>Each thread in a system has its own TCB, which contains important information like the thread’s state, program counter, registers, priority, and other context information needed for thread scheduling and management.</li>
          <li>TCB helps the operating system in saving and restoring the context of a thread during context switching.</li>
          <li>The TCB is created when a thread is created and is removed when the thread terminates.</li>
        </ul>
      </section>
    `},{id:37,title:"Threads vs Processes",content:`
      <section>
        <h3>Threads vs Processes</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>Threads</th><th>Processes</th></tr>
          </thead>
          <tbody>
            <tr><td>Threads are the smallest unit of execution within a process.</td><td>Processes are independent execution units that contain multiple threads.</td></tr>
            <tr><td>Multiple threads within the same process share the same memory space and resources.</td><td>Each process has its own separate memory space and resources.</td></tr>
            <tr><td>Threads are lighter and more efficient in terms of resource usage.</td><td>Processes are heavier due to their own memory allocation and isolation.</td></tr>
            <tr><td>Threads can easily communicate with each other since they share the same memory space.</td><td>Processes require Inter-Process Communication (IPC) mechanisms to communicate, which adds overhead.</td></tr>
            <tr><td>Context switching between threads is faster since they share the same memory space.</td><td>Context switching between processes is slower due to the overhead of managing separate memory spaces.</td></tr>
            <tr><td>Threads are commonly used for tasks that require concurrent execution but share the same state or resources.</td><td>Processes are suitable for tasks that need to run independently with their own resources.</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:38,title:"Pros and Cons of Threads",content:`
      <section>
        <h3>Pros and Cons of Threads</h3>
        <h4>Pros</h4>
        <ul>
          <li><strong>Efficient Communication:</strong> Threads within the same process share the same memory, making communication between them faster and easier.</li>
          <li><strong>Better Performance:</strong> Threads allow better CPU utilization as multiple threads can run concurrently, especially on multi-core systems.</li>
          <li><strong>Less Overhead:</strong> Since threads share the same resources within a process, the overhead of managing them is lower compared to managing processes.</li>
          <li><strong>Responsive Applications:</strong> Multithreading enables applications to perform multiple tasks simultaneously, improving responsiveness (e.g., a GUI that remains responsive while performing background tasks).</li>
          <li><strong>Resource Sharing:</strong> Threads can share the same memory and resources within a process, leading to efficient resource utilization.</li>
        </ul>
        <h4>Cons</h4>
        <ul>
          <li><strong>Concurrency Issues:</strong> Threads need synchronization mechanisms to avoid race conditions, deadlocks, and other concurrency issues, making the program more complex.</li>
          <li><strong>Debugging Complexity:</strong> Debugging multi-threaded applications can be challenging due to the non-deterministic behavior of threads.</li>
          <li><strong>Context Switching Overhead:</strong> Frequent context switching between threads can incur performance overhead, especially when there are many threads running.</li>
          <li><strong>Shared Memory Risks:</strong> While threads share memory, this can lead to issues like memory corruption or inconsistent data if proper synchronization is not handled.</li>
          <li><strong>Deadlocks and Race Conditions:</strong> Threads can lead to complex issues such as deadlocks and race conditions if not managed properly, requiring careful design and synchronization.</li>
        </ul>
      </section>
    `},{id:2,title:"Multithreading Models",content:`
      <section>
        <h3>Multithreading Models Overview</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr>
              <th>Model</th>
              <th>Description</th>
              <th>Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>M:N Model</strong></td>
              <td>Multiple user-level threads are mapped to multiple kernel-level threads. Provides a balance between flexibility and performance.</td>
              <td>Solaris Threads, Go goroutines</td>
            </tr>
            <tr>
              <td><strong>1:1 Model</strong></td>
              <td>Each user-level thread is mapped to a unique kernel-level thread. Provides better parallelism but with more overhead.</td>
              <td>Linux threads, Windows threads</td>
            </tr>
            <tr>
              <td><strong>M:1 Model</strong></td>
              <td>Multiple user-level threads are mapped to a single kernel-level thread. Efficient but limits parallelism to a single CPU core.</td>
              <td>GNU Portable Threads (pre-Java 1.3)</td>
            </tr>
          </tbody>
        </table>
  
       <h4>Key Comparisons</h4>
<table border="1" cellpadding="6" cellspacing="0">
  <thead>
    <tr>
      <th>M:N Model</th>
      <th>1:1 Model</th>
      <th>M:1 Model</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Supports parallel balanced operation, allowing multiple threads to run across multiple cores. Thread management is handled by user-space libraries. Context switching is moderately fast depending on implementation. Overhead is low, enabling efficient thread usage.</td>
      <td>Supports true multi-core parallelism, where each thread is directly managed by the OS kernel. Context switching is slower due to kernel intervention. Overhead is high because each user thread maps to a kernel thread.</td>
      <td>Limits parallelism to a single core, as multiple user-level threads are mapped to one kernel thread. Thread management is done in user space. Context switching is very fast (no kernel mode switch). Overhead is low but scalability is limited.</td>
    </tr>
  </tbody>
</table>

  
        <h4>Special Considerations</h4>
        <ul>
          <li><strong>Context Switching:</strong> Models with more threads have more complex context switching and synchronization issues.</li>
          <li><strong>Efficiency:</strong> Some models are more efficient in terms of memory and processing time, depending on the task.</li>
          <li><strong>Scalability:</strong> Models like 1:1 and M:N scale well with increasing CPU cores, while M:1 is more suited for single-core systems.</li>
        </ul>
      </section>
    `},{id:39,title:"Many to One Model",content:`
      <section>
        <h3>Many-to-One Model</h3>
        <ul>
          <li>Many user-level threads are mapped to a single kernel thread.</li>
          <li>Only one thread can access the kernel at a time — no true parallelism.</li>
          <li>If one thread blocks, the entire process blocks.</li>
          <li><strong>Example:</strong> Green Threads in early Java versions.</li>
        </ul>
      </section>
    `},{id:40,title:"One to One Model",content:`
      <section>
        <h3>One-to-One Model</h3>
        <ul>
          <li>Each user-level thread maps to one kernel thread.</li>
          <li>Supports true parallelism on multi-core systems.</li>
          <li>More resource-intensive because each thread requires a kernel thread.</li>
          <li><strong>Example:</strong> Windows and Linux pthreads.</li>
        </ul>
      </section>
    `},{id:41,title:"Many to Many Model",content:`
      <section>
        <h3>Many-to-Many Model</h3>
        <ul>
          <li>Many user-level threads are mapped to a smaller or equal number of kernel threads.</li>
          <li>Allows the operating system to manage thread scheduling better.</li>
          <li>Applications can create many threads without overloading the kernel.</li>
          <li><strong>Example:</strong> Solaris OS.</li>
        </ul>
      </section>
    `},{id:42,title:"Two Level Model",content:`
      <section>
        <h3>Two-Level Model</h3>
        <ul>
          <li>Combines features of Many-to-Many and One-to-One models.</li>
          <li>Allows certain user threads to be bound directly to kernel threads.</li>
          <li>Provides better flexibility and performance tuning options.</li>
          <li><strong>Example:</strong> Tru64 UNIX, IRIX operating systems.</li>
        </ul>
      </section>
    `},{id:43,title:"Best Fit Model",content:`
      <section>
        <h3>Best Fit Model (Memory Allocation)</h3>
        <ul>
          <li>Allocates the smallest available memory block that fits the process request.</li>
          <li>Minimizes wasted space (internal fragmentation).</li>
          <li>Needs to scan the entire list of free memory blocks.</li>
          <li><strong>Drawback:</strong> Can lead to many small unusable memory fragments (external fragmentation).</li>
        </ul>
      </section>
    `},{id:44,title:"Example of Multithreading",content:`
      <section>
        <h3>Example of Multithreading</h3>
        <ul>
          <li><strong>Web Server:</strong> Handles multiple client requests simultaneously using threads.</li>
          <li><strong>Word Processor:</strong> One thread for typing, another for spell-check, another for autosave.</li>
          <li><strong>Games:</strong> Separate threads for rendering graphics, playing music, and user inputs.</li>
        </ul>
      </section>
    `},{id:45,title:"Optimal Number Threads Require",content:`
      <section>
        <h3>Optimal Number of Threads</h3>
        <ul>
          <li>Usually, the optimal number of threads ≈ number of CPU cores.</li>
          <li>If threads are I/O bound, you can have more threads than cores.</li>
          <li>If threads are CPU bound, keeping threads equal to CPU cores avoids context-switching overhead.</li>
        </ul>
      </section>
    `},{id:46,title:"Effect Multiple Cores Multithreading",content:`
      <section>
        <h3>Effect of Multiple Cores on Multithreading</h3>
        <ul>
          <li>Multiple cores allow true parallel execution of threads.</li>
          <li>Multithreading improves performance significantly with more cores.</li>
          <li>CPU-bound threads benefit most from multi-core systems.</li>
          <li>However, too many threads may still cause contention if not managed properly.</li>
        </ul>
      </section>
    `},{id:47,title:"C++ Static Variables OS",content:`
      <section>
        <h3>Static Variables in C++ (OS Impact)</h3>
        <ul>
          <li>Static variables are shared across threads if not handled carefully.</li>
          <li>They can cause <strong>race conditions</strong> when accessed by multiple threads at the same time.</li>
          <li>They increase <strong>memory footprint</strong> unnecessarily if overused.</li>
          <li>Static initialization order issues can lead to <strong>hard-to-debug bugs</strong> in complex OS code.</li>
        </ul>
      </section>
    `},{id:48,title:"Thread Pools",content:`
      <section>
        <h3>Thread Pools</h3>
        <ul>
          <li>A thread pool maintains a fixed number of threads ready to perform tasks.</li>
          <li>Instead of creating a new thread for every task, tasks are assigned to existing threads.</li>
          <li><strong>Benefits:</strong> Reduces thread creation overhead and improves performance.</li>
          <li>Commonly used in web servers, database servers, and real-time systems.</li>
        </ul>
      </section>
    `},{id:49,title:"Thread Cancellation",content:`
      <section>
        <h3>Thread Cancellation</h3>
        <ul>
          <li>Terminating a thread before it finishes normally is called thread cancellation.</li>
          <li><strong>Asynchronous Cancellation:</strong> Thread is terminated immediately.</li>
          <li><strong>Deferred Cancellation:</strong> Thread periodically checks if it should cancel itself.</li>
          <li>Improper cancellation can lead to resource leaks and inconsistent states.</li>
        </ul>
      </section>
    `},{id:50,title:"Green Threads vs Native Threads",content:`
      <section>
        <h3>Green Threads vs Native Threads</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>Green Threads</th><th>Native Threads</th></tr>
          </thead>
          <tbody>
            <tr><td>Managed by a runtime library, not by the OS.</td><td>Managed directly by the operating system.</td></tr>
            <tr><td>Portable across operating systems.</td><td>Dependent on OS-specific thread management.</td></tr>
            <tr><td>Only one green thread can run at a time on multi-core CPUs.</td><td>True parallelism is possible across multiple cores.</td></tr>
            <tr><td>Lighter and faster to create/manage.</td><td>Heavier but gives better performance for CPU-bound tasks.</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:51,title:"Fiber vs Thread",content:`
      <section>
        <h3>Fiber vs Thread</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>Fiber</th><th>Thread</th></tr>
          </thead>
          <tbody>
            <tr><td>Lightweight units of execution, manually scheduled by application.</td><td>Scheduled automatically by the operating system.</td></tr>
            <tr><td>Run in the context of a thread and share its resources.</td><td>Each thread has its own stack and CPU context.</td></tr>
            <tr><td>Good for fine-grained concurrency when switching is controlled manually.</td><td>Good for general-purpose concurrent programming with OS support.</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:52,title:"What is Process Scheduling?",content:`
      <section>
        <h3>Process Scheduling</h3>
        <ul>
          <li>Process scheduling is the activity of selecting a process from the ready queue and assigning it to the CPU for execution.</li>
          <li>It ensures efficient CPU utilization and manages process execution order in a multiprogramming environment.</li>
          <li>The goal is to maximize CPU use, throughput, and response time, while minimizing waiting time.</li>
        </ul>
      </section>
    `},{id:53,title:"Need Process Scheduling",content:`
      <section>
        <h3>Need for Process Scheduling</h3>
        <ul>
          <li>To efficiently manage the CPU among multiple processes.</li>
          <li>To ensure <strong>fairness</strong> among all processes.</li>
          <li>To maximize system performance (high CPU utilization and throughput).</li>
          <li>To provide quick response to interactive users.</li>
          <li>To avoid process starvation and deadlock situations.</li>
        </ul>
      </section>
    `},{id:54,title:"CPU Burst Cycle",content:`
      <section>
        <h3>CPU Burst Cycle</h3>
        <ul>
          <li>Programs usually alternate between CPU bursts and I/O bursts.</li>
          <li><strong>CPU Burst:</strong> Time when the process is using the CPU for computation.</li>
          <li><strong>I/O Burst:</strong> Time when the process is waiting for I/O operations to complete.</li>
          <li>Scheduling decisions are often made at the end of a CPU burst.</li>
        </ul>
      </section>
    `},{id:55,title:"CPU Scheduler",content:`
      <section>
        <h3>CPU Scheduler</h3>
        <ul>
          <li>Also called the short-term scheduler.</li>
          <li>Selects one of the processes from the ready queue to execute on the CPU next.</li>
          <li>It runs very frequently (milliseconds) and must be extremely fast.</li>
          <li>Uses different scheduling algorithms like FCFS, SJF, Round Robin, etc.</li>
        </ul>
      </section>
    `},{id:56,title:"Preemptive Scheduling",content:`
      <section>
        <h3>Preemptive Scheduling</h3>
        <ul>
          <li>CPU can be taken away from a running process if a higher-priority process arrives.</li>
          <li>Processes are forced to share CPU time fairly.</li>
          <li>Common in real-time and multi-user systems for better responsiveness.</li>
          <li>Examples: Round Robin, Shortest Remaining Time First (SRTF), Priority Preemptive Scheduling.</li>
        </ul>
        <h4>Pros and Cons</h4>
        <ul>
          <li><strong>Pros:</strong> Better responsiveness, allows multitasking, good for time-critical applications.</li>
          <li><strong>Cons:</strong> Higher overhead due to frequent context switches, more complexity in managing shared resources.</li>
        </ul>
      </section>
    `},{id:57,title:"Non Preemptive Scheduling",content:`
      <section>
        <h3>Non-Preemptive Scheduling</h3>
        <ul>
          <li>Once a process starts executing, it keeps the CPU until it finishes or moves to waiting state voluntarily.</li>
          <li>Operating system does not forcibly interrupt a running process.</li>
          <li>Examples: First Come First Serve (FCFS), Shortest Job First (non-preemptive).</li>
        </ul>
        <h4>Pros and Cons</h4>
        <ul>
          <li><strong>Pros:</strong> Simple to implement, fewer context switches, more predictable behavior.</li>
          <li><strong>Cons:</strong> Poor responsiveness, long tasks can block others, not suitable for real-time systems.</li>
        </ul>
      </section>
    `},{id:58,title:"Dispatcher",content:`
      <section>
        <h3>What is a Dispatcher?</h3>
        <ul>
          <li>The Dispatcher is a component of the operating system responsible for giving control of the CPU to the selected process by the scheduler.</li>
          <li>It loads the process's context (registers, program counter) and starts its execution.</li>
          <li>It performs a context switch between the old and new processes.</li>
          <li>The dispatcher must be fast to avoid high context switching overhead.</li>
        </ul>
        <h4>Main Tasks of Dispatcher</h4>
        <ul>
          <li>Switch context from one process to another.</li>
          <li>Switch to user mode from kernel mode.</li>
          <li>Jump to the correct location to start executing the new process.</li>
        </ul>
        <h4>Summary</h4>
        <ul>
          <li>Scheduler chooses the next process, and Dispatcher actually starts it.</li>
          <li>Dispatcher latency (delay) should be as low as possible for better system performance.</li>
        </ul>
      </section>
    `},{id:59,title:"Role of Dispatcher",content:`
      <section>
        <h3>Role of Dispatcher</h3>
        <ul>
          <li>The dispatcher is responsible for transferring control of the CPU to the process selected by the scheduler.</li>
          <li>It performs a context switch between the currently running process and the next one.</li>
          <li>It is crucial for efficient process execution and resource management.</li>
          <li>Its primary function is to switch the CPU from one process to another while maintaining the process state.</li>
        </ul>
      </section>
    `},{id:60,title:"Dispatch Latency",content:`
      <section>
        <h3>Dispatch Latency</h3>
        <ul>
          <li>Dispatch latency refers to the time taken from when the dispatcher is ready to switch processes until the new process begins executing.</li>
          <li>It is the delay caused during a context switch.</li>
          <li>Lower dispatch latency improves system responsiveness.</li>
        </ul>
      </section>
    `},{id:61,title:"Dispatch Time",content:`
      <section>
        <h3>Dispatch Time</h3>
        <ul>
          <li>Dispatch time is the total time taken for the dispatcher to stop the current process and start the next process.</li>
          <li>It includes the time for saving the context of the current process and loading the context of the new process.</li>
          <li>Reducing dispatch time is key for performance in multitasking systems.</li>
        </ul>
      </section>
    `},{id:62,title:"Dispatch Overhead",content:`
      <section>
        <h3>Dispatch Overhead</h3>
        <ul>
          <li>Dispatch overhead refers to the system resources (CPU cycles, memory usage) consumed during the dispatch process.</li>
          <li>It includes time spent in context switching, saving and loading process states.</li>
          <li>Higher dispatch overhead means more CPU time spent managing processes rather than performing actual tasks.</li>
        </ul>
      </section>
    `},{id:63,title:"Scheduling Criteria",content:`
      <section>
        <h3>Scheduling Criteria</h3>
        <ul>
          <li>Scheduling criteria are the parameters used to evaluate the performance of a scheduling algorithm.</li>
          <li>They help determine how effectively the CPU resources are allocated among processes.</li>
          <li>Common criteria include CPU utilization, throughput, waiting time, and turnaround time.</li>
        </ul>
        <h4>Common Scheduling Criteria</h4>
        <ul>
          <li><strong>CPU Utilization:</strong> The percentage of time the CPU is actively working on processes.</li>
          <li><strong>Throughput:</strong> The number of processes completed in a given period.</li>
          <li><strong>Waiting Time:</strong> The total time a process spends waiting in the ready queue.</li>
          <li><strong>Turnaround Time:</strong> The total time taken from the arrival of the process to its completion.</li>
          <li><strong>Response Time:</strong> The time from submitting a request until the first response is produced (important in interactive systems).</li>
        </ul>
        <h4>Summary</h4>
        <ul>
          <li>Choosing the right scheduling algorithm depends on which criteria are prioritized for the system.</li>
          <li>For real-time systems, response time might be more critical, while for batch systems, throughput could be prioritized.</li>
        </ul>
      </section>
    `},{id:69,title:"CPU Utilization for Scheduling",content:`
      <section>
        <h3>CPU Utilization for Scheduling</h3>
        <ul>
          <li>In scheduling, CPU utilization is a key factor to determine how effectively the CPU is used while processing tasks.</li>
          <li>The scheduling algorithm should aim to maximize CPU utilization, ensuring the CPU is not left idle.</li>
          <li>For example, in round-robin scheduling, CPU utilization is maximized by allocating time slices to processes, keeping the CPU busy.</li>
        </ul>
      </section>
    `},{id:70,title:"Throughput for Scheduling",content:`
      <section>
        <h3>Throughput for Scheduling</h3>
        <ul>
          <li>Throughput in scheduling refers to the number of processes completed within a certain period.</li>
          <li>Scheduling algorithms should prioritize throughput by minimizing idle times and keeping the CPU consistently working on processes.</li>
          <li>In scheduling algorithms like Shortest Job First (SJF), throughput is optimized by executing the shortest jobs first, allowing more jobs to be completed in less time.</li>
        </ul>
      </section>
    `},{id:71,title:"Turnaround Time for Scheduling",content:`
      <section>
        <h3>Turnaround Time for Scheduling</h3>
        <ul>
          <li>Turnaround Time in scheduling is the total time a process takes from submission to completion.</li>
          <li>Scheduling algorithms should aim to minimize the turnaround time, ensuring processes are completed quickly.</li>
          <li>Algorithms like FCFS (First-Come, First-Served) might increase the turnaround time for processes in the queue, especially if long processes precede short ones.</li>
        </ul>
      </section>
    `},{id:72,title:"Waiting Time for Scheduling",content:`
      <section>
        <h3>Waiting Time for Scheduling</h3>
        <ul>
          <li>Waiting Time in scheduling is the total time a process spends waiting in the ready queue before it gets executed by the CPU.</li>
          <li>Minimizing waiting time is essential for improving system responsiveness and user experience.</li>
          <li>Scheduling algorithms like Shortest Job Next (SJN) minimize waiting time by ensuring shorter jobs are executed first, reducing waiting times for other processes.</li>
        </ul>
      </section>
    `},{id:73,title:"Response Time for Scheduling",content:`
      <section>
        <h3>Response Time for Scheduling</h3>
        <ul>
          <li>Response Time in scheduling is the time between submitting a request and receiving the first response from the system.</li>
          <li>In interactive systems, minimizing response time is crucial for providing a seamless user experience.</li>
          <li>Preemptive scheduling algorithms like Round Robin help ensure faster response times by allowing the CPU to quickly switch between processes and respond to user inputs more quickly.</li>
        </ul>
      </section>
    `},{id:74,title:"Scheduling Algorithms Overview",content:`
      <section>
        <h3>Scheduling Algorithms Overview</h3>
        <ul>
          <li>Scheduling algorithms determine the order in which processes are executed by the CPU.</li>
          <li>The choice of scheduling algorithm can affect system performance, including CPU utilization, response time, waiting time, and throughput.</li>
          <li>Common scheduling algorithms include First-Come, First-Served (FCFS), Shortest Job Next (SJN), Round Robin (RR), Priority Scheduling, and Multilevel Queue Scheduling.</li>
        </ul>
      </section>
    `},{id:81,title:"First Come First Served (FCFS)",content:`
      <section>
        <h3>First-Come, First-Served (FCFS)</h3>
        <ul>
          <li>Processes are executed in the order they arrive in the ready queue.</li>
          <li>Simple to implement but can suffer from long waiting times for short processes.</li>
          <li>Convoy effect: Long processes can delay short processes, increasing average waiting time.</li>
          <li>Non-preemptive, meaning once a process starts, it runs to completion.</li>
          <li>Pros: Simple, easy to implement. Cons: Poor performance in certain cases (convoy effect).</li>
        </ul>
      </section>
    `},{id:82,title:"Shortest Job First (SJF)",content:`
      <section>
        <h3>Shortest Job First (SJF)</h3>
        <ul>
          <li>Executes the process with the shortest burst time (execution time) next.</li>
          <li>Minimizes average waiting time and turnaround time.</li>
          <li>Can lead to starvation for long processes if short processes keep arriving.</li>
          <li>Optimal in terms of minimizing average waiting time but impractical in real-time systems as burst times are often unknown.</li>
          <li>Pros: Minimizes average waiting time. Cons: Requires knowledge of execution times (difficult in practice), potential for starvation.</li>
        </ul>
      </section>
    `},{id:83,title:"Round Robin (RR)",content:`
      <section>
        <h3>Round Robin (RR)</h3>
        <ul>
          <li>Each process gets a fixed time slice (quantum) in cyclic order.</li>
          <li>Preemptive, as it allows processes to be interrupted after their time slice expires.</li>
          <li>Fair distribution of CPU time among processes, making it ideal for time-sharing systems.</li>
          <li>If the time quantum is too large or small, it may lead to inefficiency or higher waiting time.</li>
          <li>Pros: Ensures fairness, responsive in interactive systems. Cons: Higher waiting time and turnaround time in some cases.</li>
        </ul>
      </section>
    `},{id:84,title:"Priority Scheduling",content:`
      <section>
        <h3>Priority Scheduling</h3>
        <ul>
          <li>Processes are assigned a priority value, and the CPU executes the process with the highest priority first.</li>
          <li>Can be preemptive or non-preemptive depending on whether a running process can be preempted by a higher priority process.</li>
          <li>Can cause starvation for low-priority processes if higher-priority processes keep arriving.</li>
          <li>Often requires dynamic priority adjustments to avoid starvation (using aging techniques).</li>
          <li>Pros: Ensures important tasks get executed first. Cons: Risk of starvation for low-priority tasks.</li>
        </ul>
      </section>
    `},{id:85,title:"Multilevel Queue Scheduling (MLQS)",content:`
      <section>
        <h3>Multilevel Queue Scheduling (MLQS)</h3>
        <ul>
          <li>Processes are divided into different queues based on their characteristics (e.g., interactive, batch).</li>
          <li>Each queue uses a different scheduling algorithm (e.g., FCFS for batch, RR for interactive).</li>
          <li>Processes remain in the queue they are assigned to, and the scheduler executes queues based on priority.</li>
          <li>Provides efficient handling of different types of processes with distinct requirements.</li>
          <li>Pros: Organizes processes efficiently by type, optimized for heterogeneous workloads. Cons: Inflexible, processes cannot move between queues.</li>
        </ul>
      </section>
    `},{id:86,title:"Multilevel Feedback Que Sch MLFQS",content:`
      <section>
        <h3>Multilevel Feedback Queue Scheduling (MLFQS)</h3>
        <ul>
          <li>Similar to MLQS, but allows processes to move between queues based on their behavior (e.g., CPU-bound vs I/O-bound).</li>
          <li>Processes that use more CPU time may be moved to lower-priority queues, and I/O-bound processes may be moved to higher-priority queues.</li>
          <li>Helps prevent starvation and provides more dynamic scheduling compared to MLQS.</li>
          <li>Pros: Flexible, reduces starvation, adapts to changing process behavior. Cons: More complex, requires efficient tracking of process behavior.</li>
        </ul>
      </section>
    `},{id:87,title:"Shortest Remain Time First SRTF",content:`
      <section>
        <h3>Shortest Remaining Time First (SRTF)</h3>
        <ul>
          <li>A preemptive version of SJF.</li>
          <li>Executes the process with the shortest remaining execution time first.</li>
          <li>When a new process arrives, it can preempt the current process if it has a shorter remaining burst time.</li>
          <li>Optimal for minimizing average waiting time but suffers from starvation for longer processes.</li>
          <li>Pros: Efficient in minimizing waiting time. Cons: Can cause starvation for longer processes, requires knowing the remaining time.</li>
        </ul>
      </section>
    `},{id:88,title:"Highest Response Ratio Next HRRN",content:`
      <section>
        <h3>Highest Response Ratio Next (HRRN)</h3>
        <ul>
          <li>Executes the process with the highest response ratio next.</li>
          <li>Response ratio is calculated as: (waiting time + burst time) / burst time.</li>
          <li>Aims to balance between favoring short and long processes.</li>
          <li>Gives higher priority to processes that have been waiting longer, helping to prevent starvation.</li>
          <li>Pros: Good balance between short and long processes. Cons: More complex to implement compared to simpler algorithms.</li>
        </ul>
      </section>
    `},{id:89,title:"Lottery Scheduling",content:`
      <section>
        <h3>Lottery Scheduling</h3>
        <ul>
          <li>Processes are assigned tickets, and the scheduler randomly picks a ticket to determine which process runs next.</li>
          <li>The more tickets a process has, the higher the chance it will be selected.</li>
          <li>Allows for probabilistic fair distribution of CPU time.</li>
          <li>Can be used to approximate other scheduling strategies (e.g., priority scheduling).</li>
          <li>Pros: Simple and flexible. Cons: May be less predictable, leading to potential fairness issues.</li>
        </ul>
      </section>
    `},{id:90,title:"Fair Share Scheduling",content:`
      <section>
        <h3>Fair Share Scheduling</h3>
        <ul>
          <li>Assigns a share of CPU time to each user or group of processes.</li>
          <li>Each process gets its fair share of CPU resources, based on priorities or weights assigned to users or groups.</li>
          <li>Ensures fairness among multiple users or user groups, preventing any single user or group from monopolizing CPU time.</li>
          <li>Pros: Ensures fair allocation among users or groups. Cons: May lead to inefficient CPU utilization if users do not have equal resource needs.</li>
        </ul>
      </section>
    `},{id:91,title:"Completely Fair Scheduler (CFS)",content:`
      <section>
        <h3>Completely Fair Scheduler (CFS)</h3>
        <ul>
          <li>Used in modern Linux systems to ensure a fair distribution of CPU time across processes.</li>
          <li>CFS uses a virtual runtime system to determine how much time each process should get.</li>
          <li>Processes are given CPU time based on their historical usage, and the one with the least virtual runtime is given the CPU next.</li>
          <li>Aims to ensure a smooth and fair sharing of the CPU for all processes in a system.</li>
          <li>Pros: Fair distribution of CPU resources. Cons: Can be complex to configure and tune for specific workloads.</li>
        </ul>
      </section>
    `},{id:92,title:"Real Time Scheduling",content:`
      <section>
        <h3>Real-Time Scheduling</h3>
        <ul>
          <li>Designed for systems that require deterministic responses within a specified time frame (e.g., embedded systems, industrial systems).</li>
          <li>Real-time scheduling algorithms ensure that critical tasks meet deadlines and guarantee timing behavior.</li>
          <li>Can be classified into two categories: Hard Real-Time and Soft Real-Time.</li>
          <li>Pros: Ensures strict timing constraints are met. Cons: Hard real-time systems are difficult to implement and manage due to strict requirements.</li>
        </ul>
      </section>
    `},{id:93,title:"Earliest Deadline First (EDF)",content:`
      <section>
        <h3>Earliest Deadline First (EDF)</h3>
        <ul>
          <li>A dynamic real-time scheduling algorithm where processes with the earliest deadline are given higher priority.</li>
          <li>Preemptive, meaning a running process can be interrupted if another process with an earlier deadline arrives.</li>
          <li>Optimal for systems with hard deadlines, as it ensures all tasks can be completed on time if feasible.</li>
          <li>Pros: Optimal for deadline-based systems. Cons: May lead to high preemption overhead and complex management.</li>
        </ul>
      </section>
    `},{id:94,title:"Rate Monotonic Scheduling (RMS)",content:`
      <section>
        <h3>Rate Monotonic Scheduling (RMS)</h3>
        <ul>
          <li>A fixed priority preemptive scheduling algorithm for real-time systems.</li>
          <li>Processes with shorter periods (higher frequency) are assigned higher priorities.</li>
          <li>Assumes that processes are periodic and have deadlines equal to their periods.</li>
          <li>Pros: Simple and predictable. Cons: May not always meet deadlines for a given set of tasks (not optimal for all workloads).</li>
        </ul>
      </section>
    `},{id:95,title:"Least Laxity First (LLF)",content:`
      <section>
        <h3>Least Laxity First (LLF)</h3>
        <ul>
          <li>Schedules processes based on their laxity, which is the difference between their deadline and the remaining execution time.</li>
          <li>Preemptive, meaning a process with the least laxity is given priority over others.</li>
          <li>Used in real-time systems to meet tight timing constraints.</li>
          <li>Pros: Ensures tasks meet their deadlines by prioritizing those that are closer to missing their deadline. Cons: High complexity due to frequent context switching.</li>
        </ul>
      </section>
    `},{id:96,title:"Deadline Monotonic Schedul DMS",content:`
      <section>
        <h3>Deadline Monotonic Scheduling (DMS)</h3>
        <ul>
          <li>A fixed-priority algorithm where processes with earlier deadlines are given higher priority.</li>
          <li>Unlike RMS, it considers absolute deadlines rather than periods for priority assignment.</li>
          <li>Works best in systems where deadlines are the primary concern rather than periodicity.</li>
          <li>Pros: Easy to implement and understand. Cons: Not always optimal for all real-time systems.</li>
        </ul>
      </section>
    `},{id:97,title:"Weighted Round Robin (WRR)",content:`
      <section>
        <h3>Weighted Round Robin (WRR)</h3>
        <ul>
          <li>A variation of the Round Robin algorithm where processes are assigned weights based on their importance or priority.</li>
          <li>Processes with higher weights get more CPU time compared to processes with lower weights.</li>
          <li>Ensures fairness while allowing more important tasks to receive more resources.</li>
          <li>Pros: Flexible, can adapt to varying workloads. Cons: May lead to unfairness if weight assignment is not accurate.</li>
        </ul>
      </section>
    `},{id:98,title:"Weighted Fair Queuing (WFQ)",content:`
      <section>
        <h3>Weighted Fair Queuing (WFQ)</h3>
        <ul>
          <li>A network scheduling algorithm used for fair bandwidth allocation among different data flows.</li>
          <li>Assigns weights to data flows, where flows with higher weights receive a larger share of the available bandwidth.</li>
          <li>Used to implement fair sharing in networking environments, ensuring that each flow gets a fair share of resources.</li>
          <li>Pros: Fair allocation of bandwidth among users. Cons: Complexity in implementation and managing multiple flows.</li>
        </ul>
      </section>
    `},{id:99,title:"Schedule Algo Used Real World OS",content:`
      <section>
        <h3>Scheduling Algorithms Used in Real-World OS</h3>
        <ul>
          <li>Most modern operating systems employ a combination of scheduling algorithms, including:
            <ul>
              <li>First-Come, First-Served (FCFS)</li>
              <li>Round Robin (RR)</li>
              <li>Priority Scheduling</li>
              <li>Multilevel Queue Scheduling (MLQS)</li>
              <li>Completely Fair Scheduler (CFS)</li>
            </ul>
          </li>
          <li>Some algorithms like FCFS and Round Robin are simpler but can lead to issues like starvation in certain cases.</li>
          <li>More advanced algorithms like CFS are used to balance fairness and efficiency in complex, multi-user systems.</li>
          <li>Real-time operating systems typically rely on specialized real-time scheduling algorithms like EDF, RMS, and LLF.</li>
        </ul>
      </section>
    `},{id:100,title:"Starvation",content:`
      <section>
        <h3>Starvation</h3>
        <ul>
          <li>Starvation occurs when a process is perpetually denied access to resources due to the system's scheduling policy.</li>
          <li>This happens when a process continuously gets lower priority or is always preempted by others.</li>
          <li>In some cases, lower-priority tasks may never get a chance to execute if higher-priority tasks keep arriving.</li>
          <li>Starvation is particularly problematic in systems using non-preemptive scheduling (e.g., FCFS, Priority Scheduling without aging) and where high-priority tasks dominate the CPU time.</li>
        </ul>
      </section>
    `},{id:101,title:"Aging",content:`
      <section>
        <h3>Aging</h3>
        <ul>
          <li>Aging is a technique used to prevent starvation by gradually increasing the priority of a process the longer it waits.</li>
          <li>This ensures that no process waits indefinitely and eventually gets executed, even if it started as a lower-priority task.</li>
          <li>Aging is often used in priority-based scheduling algorithms to prevent low-priority tasks from being starved.</li>
          <li>For example, in priority scheduling, a process's priority could be increased after each time slice, giving it a better chance of execution.</li>
        </ul>
      </section>
    `},{id:102,title:"Convoy Effect",content:`
      <section>
        <h3>Convoy Effect</h3>
        <ul>
          <li>The convoy effect happens when a large group of processes all have to wait for a single slow process to finish.</li>
          <li>It is especially prominent in algorithms like FCFS, where a long-running process can delay others from executing.</li>
          <li>This effect causes a backlog of waiting processes and reduces the overall system throughput and performance.</li>
          <li>In the worst-case scenario, a single lengthy task can hold up an entire queue of shorter tasks, causing significant delays for all processes.</li>
        </ul>
      </section>
    `},{id:103,title:"How to Prevent Starvation",content:`
      <section>
        <h3>How to Prevent Starvation</h3>
        <ul>
          <li>Starvation can be prevented or minimized through various strategies:
            <ul>
              <li><strong>Aging</strong>: Gradually increasing the priority of waiting processes to ensure they eventually get scheduled.</li>
              <li><strong>Fair Scheduling</strong>: Using algorithms like Weighted Fair Queuing (WFQ) or Completely Fair Scheduler (CFS) that ensure even low-priority tasks get their fair share of CPU time.</li>
              <li><strong>Priority Preemption</strong>: Periodically preempting high-priority processes or dynamically adjusting priorities to avoid long-term starvation for low-priority tasks.</li>
              <li><strong>Multilevel Feedback Queues (MLFQ)</strong>: Allowing processes to move between queues based on their behavior (e.g., CPU-bound tasks moving to lower-priority queues, while I/O-bound tasks may get higher priority).</li>
            </ul>
          </li>
          <li>Starvation is more easily prevented in systems with dynamic priority adjustments or fair sharing mechanisms like CFS.</li>
          <li>In real-time systems, starvation prevention can be more complex and often involves deadline-based scheduling mechanisms like EDF or LLF, where tasks with missed deadlines are given higher priority.</li>
        </ul>
      </section>
    `},{id:104,title:"What is Synchronization?",content:`
      <section>
        <h3>What is Synchronization?</h3>
        <ul>
          <li>Synchronization in operating systems refers to the coordination of processes or threads to ensure that shared resources (like data or hardware) are accessed in a controlled manner.</li>
          <li>It aims to prevent conflicts between processes that might attempt to access shared resources simultaneously, causing inconsistencies or errors.</li>
          <li>Synchronization ensures that processes execute in a way that guarantees consistency and avoids problems like data corruption or crashes due to concurrency issues.</li>
        </ul>
      </section>
    `},{id:105,title:"Why Synchronization is Needed",content:`
      <section>
        <h3>Why Synchronization is Needed</h3>
        <ul>
          <li>Synchronization is necessary to manage concurrent access to shared resources, such as variables, memory locations, and hardware devices.</li>
          <li>It prevents multiple processes or threads from simultaneously modifying the same data, which can lead to corruption or unexpected results.</li>
          <li>Without synchronization, the operating system would be unable to maintain consistency when multiple tasks are executing in parallel or in multi-core environments.</li>
          <li>Common issues like data inconsistency, race conditions, and deadlocks can arise without proper synchronization mechanisms.</li>
        </ul>
      </section>
    `},{id:106,title:"Problems Without Synchronization",content:`
      <section>
        <h3>Problems Without Synchronization</h3>
        <ul>
          <li><strong>Data Inconsistency</strong>: Without synchronization, different processes may simultaneously update shared data, leading to inconsistent or incorrect results. For example, if two processes modify the same variable at the same time, the final value may not reflect the intended result.</li>
          <li><strong>Race Conditions</strong>: A race condition occurs when the behavior of a system depends on the sequence or timing of uncontrollable events. If two or more processes or threads attempt to change shared data at the same time, the outcome depends on the timing of their execution, leading to unpredictable results.</li>
        </ul>
      </section>
    `},{id:107,title:"Physical vs Logical Address Space",content:`
      <section>
        <h3>Physical vs Logical Address Space</h3>
        <ul>
          <li><strong>Physical Address Space:</strong> Refers to the actual physical locations in the computer's memory hardware (RAM). It is the range of memory addresses that are available on the hardware.</li>
          <li><strong>Logical Address Space:</strong> Refers to the address space used by programs (virtual memory). It is the set of addresses generated by the CPU during a program's execution.</li>
          <li>The operating system and memory management unit (MMU) translate logical addresses into physical addresses during the process of executing a program.</li>
        </ul>
      </section>
    `},{id:108,title:"Critical Section",content:`
      <section>
        <h3>Critical Section</h3>
        <ul>
          <li>A <strong>Critical Section</strong> is a part of a program that accesses shared resources (like variables, memory, or devices) that must not be concurrently accessed by more than one thread or process at a time.</li>
          <li>If two processes simultaneously execute their critical sections, it can lead to race conditions, data inconsistency, and other problems.</li>
          <li>The goal is to ensure that only one process or thread can execute in the critical section at any given time, using synchronization techniques.</li>
        </ul>
      </section>
    `},{id:109,title:"Mutual Exclusion",content:`
      <section>
        <h3>Mutual Exclusion</h3>
        <ul>
          <li><strong>Mutual Exclusion</strong> is a property that ensures that no two processes can be in their critical section at the same time. Only one process is allowed to access shared resources at any given moment.</li>
          <li>It is essential for avoiding conflicts and ensuring data consistency when multiple processes or threads try to access the same resource concurrently.</li>
        </ul>
      </section>
    `},{id:110,title:"Critical Section Problem",content:`
      <section>
        <h3>Critical Section Problem</h3>
        <ul>
          <li>The <strong>Critical Section Problem</strong> arises when multiple processes or threads need access to shared resources and must do so without violating mutual exclusion.</li>
          <li>The problem is to design a mechanism that allows each process or thread to enter and exit the critical section without interference from others, while avoiding issues like deadlock and starvation.</li>
          <li>To solve this, various synchronization techniques such as locks, semaphores, and monitors are used to ensure mutual exclusion.</li>
        </ul>
      </section>
    `},{id:111,title:"Preemptive vs Non Preemptive Kernel",content:`
      <section>
        <h3>Preemptive Kernel vs Non-Preemptive Kernel</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>Preemptive Kernel</th><th>Non-Preemptive Kernel</th></tr>
          </thead>
          <tbody>
            <tr><td>The kernel can interrupt processes and take control of the CPU at any time, allowing for better responsiveness.</td><td>The kernel cannot interrupt a running process; it only switches context when a process voluntarily relinquishes control or finishes execution.</td></tr>
            <tr><td>Better for multi-tasking and real-time systems where high responsiveness is required.</td><td>Simpler design but may result in poor responsiveness, especially for time-sensitive applications.</td></tr>
            <tr><td>Can lead to a more complex design due to the need to manage the possibility of preemption.</td><td>Less complex but can result in inefficiencies, such as starvation or blocking if processes take too long to finish.</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:112,title:"Semaphores",content:`
      <section>
        <h3>Semaphores</h3>
        <ul>
          <li>A <strong>semaphore</strong> is a synchronization primitive used to manage concurrent access to shared resources in a multi-threaded or multi-process environment.</li>
          <li>It is essentially a variable or abstract data type used to control access to a resource by multiple processes.</li>
          <li>Semaphores can be binary (binary semaphore or mutex) or counting (allowing multiple resources to be managed simultaneously).</li>
          <li><strong>Types of Semaphores:</strong></li>
          <ul>
            <li><strong>Binary Semaphore:</strong> Can only have values 0 or 1, similar to a mutex.</li>
            <li><strong>Counting Semaphore:</strong> Can take non-negative integer values, used for managing access to a pool of resources (like a printer pool).</li>
          </ul>
          <li><strong>Operations:</strong> The two primary operations on semaphores are <code>wait()</code> (also known as P operation) and <code>signal()</code> (also known as V operation). These operations are atomic to ensure mutual exclusion.</li>
        </ul>
      </section>
    `},{id:113,title:"Binary Semaphore (Mutex)",content:`
      <section>
        <h3>Binary Semaphore (Mutex)</h3>
        <ul>
          <li>A <strong>binary semaphore</strong> is a type of semaphore that only has two possible values: 0 or 1. It is used to implement mutual exclusion, often referred to as a <strong>mutex</strong>.</li>
          <li>The primary purpose of a binary semaphore is to ensure that only one thread or process can access a shared resource at any given time.</li>
          <li><strong>Usage:</strong> A binary semaphore is used when the shared resource can only be accessed by one process at a time. When the semaphore is 1, access is allowed, and when it is 0, access is denied until the semaphore is released.</li>
        </ul>
      </section>
    `},{id:114,title:"Counting Semaphore",content:`
      <section>
        <h3>Counting Semaphore</h3>
        <ul>
          <li>A <strong>counting semaphore</strong> is a generalization of a binary semaphore that allows for a range of values, usually non-negative integers. It is used to manage access to a pool of resources.</li>
          <li><strong>Usage:</strong> If a counting semaphore's value is greater than 0, resources are available, and processes can proceed to access the resource. The value is decremented when a process acquires a resource and incremented when the resource is released.</li>
          <li>Counting semaphores are useful for controlling access to a finite number of identical resources (like a pool of printers or database connections).</li>
        </ul>
      </section>
    `},{id:115,title:"wait() and signal() Operations",content:`
      <section>
        <h3>wait() and signal() Operations</h3>
        <ul>
          <li>The two primary operations used on semaphores are <strong>wait()</strong> (P operation) and <strong>signal()</strong> (V operation).</li>
          <li><strong>wait():</strong> This operation decreases the value of the semaphore. If the value is less than or equal to 0, the process is blocked until the semaphore value becomes positive again (indicating resource availability).</li>
          <li><strong>signal():</strong> This operation increases the value of the semaphore and unblocks any waiting processes. It signals that a resource has been released and is now available for other processes to use.</li>
        </ul>
      </section>
    `},{id:116,title:"Semaphore vs Mutex",content:`
      <section>
        <h3>Semaphore vs Mutex</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>Semaphore</th><th>Mutex</th></tr>
          </thead>
          <tbody>
            <tr><td>A semaphore can have a value greater than 1 (for counting semaphores) and can be used for synchronizing access to multiple instances of a resource.</td><td>A mutex can only have values 0 or 1 and is used to ensure exclusive access to a single resource by a single process or thread.</td></tr>
            <tr><td>Semaphores are often used for managing multiple resources (e.g., a pool of printers).</td><td>Mutex is typically used for mutual exclusion in critical sections where only one process can execute at a time.</td></tr>
            <tr><td>Semaphores do not guarantee mutual exclusion but rather manage the number of resources available.</td><td>Mutex guarantees mutual exclusion by locking a resource for exclusive access.</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:117,title:"Semaphore vs Monitor",content:`
      <section>
        <h3>Semaphore vs Monitor</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>Semaphore</th><th>Monitor</th></tr>
          </thead>
          <tbody>
            <tr><td>A semaphore is a low-level synchronization primitive that can be used for signaling between processes or threads.</td><td>A monitor is a higher-level synchronization abstraction that combines mutual exclusion and condition variables, providing a more structured way to synchronize access to shared resources.</td></tr>
            <tr><td>Semaphores allow multiple processes or threads to signal each other directly.</td><td>Monitors manage synchronization internally, offering a more object-oriented approach and avoiding manual signaling.</td></tr>
            <tr><td>Semaphores are more prone to errors like deadlocks or missed signals if not handled properly.</td><td>Monitors offer better safety with built-in operations like wait() and signal() to avoid errors.</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:118,title:"Semaphore vs Spinlock",content:`
      <section>
        <h3>Semaphore vs Spinlock</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>Semaphore</th><th>Spinlock</th></tr>
          </thead>
          <tbody>
            <tr><td>A semaphore is a synchronization primitive that uses wait() and signal() operations to manage access to shared resources.</td><td>A spinlock is a lock where a process continuously checks for the availability of a resource without yielding control, “spinning” until the resource is available.</td></tr>
            <tr><td>Semaphores can block processes and allow others to execute while waiting.</td><td>Spinlocks are non-blocking but inefficient because they waste CPU cycles while waiting for a lock.</td></tr>
            <tr><td>Semaphores can be used for counting resources, not just binary mutual exclusion.</td><td>Spinlocks are typically used for short critical sections and are often employed in low-level, hardware-oriented systems.</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:119,title:"Semaphore vs Condition Variable",content:`
      <section>
        <h3>Semaphore vs Condition Variable</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>Semaphore</th><th>Condition Variable</th></tr>
          </thead>
          <tbody>
            <tr><td>A semaphore can signal between processes or threads based on a shared resource's availability.</td><td>A condition variable is used for thread synchronization, enabling threads to wait for a particular condition to be true before continuing.</td></tr>
            <tr><td>Semaphores can be used for counting resources and managing more complex situations (e.g., resource pools).</td><td>Condition variables are typically used within a monitor to synchronize threads based on specific conditions.</td></tr>
            <tr><td>Semaphores can be binary or counting, and they may not provide high-level abstractions like monitors.</td><td>Condition variables are often paired with mutexes and provide more structured thread synchronization.</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:120,title:"Semaphore vs Barrier",content:`
      <section>
        <h3>Semaphore vs Barrier</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>Semaphore</th><th>Barrier</th></tr>
          </thead>
          <tbody>
            <tr><td>A semaphore is a synchronization primitive that allows process or thread communication and resource control.</td><td>A barrier is a synchronization mechanism where a group of threads or processes must all reach the same point before any of them can proceed.</td></tr>
            <tr><td>Semaphores control access to resources and can allow or deny access based on availability.</td><td>Barriers enforce synchronization between multiple threads or processes, making them wait for each other at a specific point in execution.</td></tr>
            <tr><td>Semaphores are more general-purpose and flexible for managing various types of synchronization.</td><td>Barriers are specifically designed to synchronize groups of threads or processes at particular synchronization points.</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:121,title:"Busy Waiting",content:`
      <section>
        <h3>Busy Waiting</h3>
        <ul>
          <li><strong>Busy waiting</strong> occurs when a process continuously checks for a condition to be met without relinquishing control of the CPU. It consumes CPU cycles without making progress, leading to inefficiency.</li>
          <li>Busy waiting usually happens when a thread waits for a resource or condition, but instead of being blocked, it constantly checks the condition (i.e., polling).</li>
          <li>It is often considered inefficient because the CPU is occupied with the check rather than allowing other processes to use the CPU.</li>
        </ul>
      </section>
    `},{id:122,title:"Example of Busy Waiting",content:`
      <section>
        <h3>Example of Busy Waiting</h3>
        <ul>
          <li>An example of busy waiting would be a thread waiting for a shared resource to be available by continually checking a condition like this:</li>
          <pre>
            while (resource_not_available) {
                // busy waiting, keep checking
            }
          </pre>
          <li>In this case, the process continuously checks if the resource is available without yielding the CPU to other processes, causing CPU cycles to be wasted.</li>
        </ul>
      </section>
    `},{id:123,title:"Spinlock",content:`
      <section>
        <h3>Spinlock</h3>
        <ul>
          <li>A <strong>spinlock</strong> is a type of lock where a thread or process waits in a busy-wait loop (spinning) until it acquires the lock.</li>
          <li>Unlike a regular lock that blocks the process, a spinlock makes the process repeatedly check for the lock's availability without yielding the CPU.</li>
          <li>Spinlocks are efficient for short critical sections, but they are inefficient for longer waiting times since they waste CPU cycles.</li>
        </ul>
      </section>
    `},{id:124,title:"Example of Spinlock",content:`
      <section>
        <h3>Example of Spinlock</h3>
        <ul>
          <li>Here’s a simple example of how a spinlock might be implemented in a pseudo-code:</li>
          <pre>
            while (lock == true) {
                // keep spinning, busy-waiting
            }
            lock = true;  // Acquire the lock
            // Critical section
            lock = false; // Release the lock
          </pre>
          <li>The process spins in the loop until the lock is released, thus wasting CPU cycles if the wait is prolonged.</li>
        </ul>
      </section>
    `},{id:125,title:"Implement Binary Semaphore Real World",content:`
      <section>
        <h3>Implementing Binary Semaphore (Real-World)</h3>
        <ul>
          <li>In real-world scenarios, a binary semaphore (or mutex) can be used to ensure mutual exclusion when multiple threads need to access a shared resource. The semaphore can be initialized to 1, and the thread performing an operation on the resource will decrement the semaphore to 0 when it locks the resource.</li>
          <li>An example in a multi-threaded application could be a printer queue, where only one thread can access the printer at any given time.</li>
          <pre>
            semaphore mutex = 1;

            // Thread 1
            wait(mutex);  // Lock the printer
            print_document();
            signal(mutex);  // Release the printer

            // Thread 2
            wait(mutex);  // Lock the printer
            print_another_document();
            signal(mutex);  // Release the printer
          </pre>
          <li>In this case, the binary semaphore (mutex) prevents multiple threads from printing simultaneously and ensures that the printer is used by one thread at a time.</li>
        </ul>
      </section>
    `},{id:126,title:"What is Deadlock?",content:`
      <section>
        <h3>What is Deadlock?</h3>
        <ul>
          <li><strong>Deadlock</strong> occurs when a set of processes or threads are blocked because they are waiting for resources held by each other, resulting in a circular dependency that prevents any of them from making progress.</li>
          <li>Deadlock typically involves the following conditions, which must all be true simultaneously:
            <ul>
              <li><strong>Mutual Exclusion:</strong> At least one resource is held in a non-shareable mode.</li>
              <li><strong>Hold and Wait:</strong> A process is holding at least one resource and is waiting for additional resources held by other processes.</li>
              <li><strong>No Preemption:</strong> Resources cannot be forcibly taken from processes holding them.</li>
              <li><strong>Circular Wait:</strong> A set of processes are waiting for each other in a circular chain.</li>
            </ul>
          </li>
          <li>In a deadlock situation, no process can proceed because they are all waiting for resources that are held by others, leading to a system freeze or stagnation.</li>
        </ul>
      </section>
    `},{id:127,title:"What is Starvation?",content:`
      <section>
        <h3>What is Starvation?</h3>
        <ul>
          <li><strong>Starvation</strong> occurs when a process is perpetually denied access to necessary resources, causing it to never get a chance to execute.</li>
          <li>In scheduling algorithms, starvation can happen if a process waits indefinitely while other processes keep receiving resources.</li>
          <li>Starvation typically happens in algorithms that favor higher-priority processes and neglect lower-priority ones.</li>
        </ul>
      </section>
    `},{id:128,title:"Bounded Buffer Problem",content:`
      <section>
        <h3>Bounded Buffer Problem</h3>
        <ul>
          <li>The <strong>bounded buffer problem</strong> (also known as the producer-consumer problem) is a classic synchronization problem in which one or more producers produce items to be consumed by consumers.</li>
          <li>The buffer has a fixed size, and it’s bounded by the producer-consumer synchronization. The producer should not produce if the buffer is full, and the consumer should not consume if the buffer is empty.</li>
          <li>The main challenge is to ensure that producers and consumers work at a steady pace without causing deadlock or data inconsistency.</li>
        </ul>
      </section>
    `},{id:129,title:"Reader Writer Problem",content:`
      <section>
        <h3>Reader-Writer Problem</h3>
        <ul>
          <li>The <strong>reader-writer problem</strong> deals with situations where multiple processes (readers and writers) access shared data.</li>
          <li>Readers can read the shared data simultaneously, but writers must have exclusive access to modify it.</li>
          <li>The challenge is to design synchronization methods that allow readers to access the data concurrently but ensure that writers get exclusive access when they need it.</li>
          <li>There are different solutions to this problem, such as giving priority to writers to prevent starvation of writers, or giving priority to readers to improve read throughput.</li>
        </ul>
      </section>
    `},{id:130,title:"Dining Philosopher Problem",content:`
      <section>
        <h3>Dining Philosopher Problem</h3>
        <ul>
          <li>The <strong>Dining Philosopher Problem</strong> is a classic synchronization and concurrency problem where five philosophers sit at a table, each having a fork on either side of their plate.</li>
          <li>The philosophers need both forks to eat, and they pick up the forks one at a time. The challenge is to ensure that all philosophers can eat without causing a deadlock or resource starvation.</li>
          <li>In the problem, processes (philosophers) are in a circular wait, where they try to pick up forks. Without proper synchronization, this can lead to deadlock, and without careful design, it can also cause starvation.</li>
        </ul>
      </section>
    `},{id:131,title:"What is a Deadlock?",content:`
      <section>
        <h3>What is a Deadlock?</h3>
        <ul>
          <li><strong>Deadlock</strong> is a situation in a system where a group of processes are stuck in a state where they cannot proceed because each process is waiting for a resource that another process is holding.</li>
          <li>In simple terms, a deadlock occurs when a set of processes are unable to move forward due to circular dependencies between them.</li>
          <li>Deadlock is a major concern in multitasking environments, as it can significantly affect system performance and lead to resource wastage.</li>
        </ul>
      </section>
    `},{id:132,title:"Effect of Deadlock",content:`
      <section>
        <h3>Effect of Deadlock</h3>
        <ul>
          <li>Deadlock can lead to <strong>resource wastage</strong>, as the resources held by processes in a deadlock state cannot be used by other processes.</li>
          <li>It can lead to <strong>system inefficiency</strong> as the involved processes cannot proceed, leading to a significant performance degradation in the system.</li>
          <li>In severe cases, deadlock can cause a <strong>complete system halt</strong>, where no processes can make progress, which can be critical in real-time or high-performance systems.</li>
          <li>Deadlock resolution can require complex recovery mechanisms, which may further degrade system performance and cause additional overhead.</li>
        </ul>
      </section>
    `},{id:133,title:"Necessary Conditions of Deadlock",content:`
      <section>
        <h3>Necessary Conditions of Deadlock</h3>
        <ul>
          <li>There are four necessary conditions for a deadlock to occur in a system, and all of them must hold simultaneously:</li>
          <li><strong>Mutual Exclusion</strong>: At least one resource must be held in a non-shareable mode. If another process requests that resource, it must wait until the resource is released.</li>
          <li><strong>Hold and Wait</strong>: A process holding at least one resource is waiting to acquire additional resources held by other processes.</li>
          <li><strong>No Preemption</strong>: Resources cannot be forcibly taken from processes holding them. A resource can only be released voluntarily by the process holding it.</li>
          <li><strong>Circular Wait</strong>: A set of processes {P1, P2, ..., Pn} exists such that each process Pi is waiting for a resource held by process Pi+1, and process Pn is waiting for a resource held by process P1, forming a circular chain.</li>
        </ul>
      </section>
    `},{id:134,title:"Mutual Exclusion",content:`
      <section>
        <h3>Mutual Exclusion</h3>
        <ul>
          <li><strong>Mutual Exclusion</strong> refers to the requirement that at least one resource must be held in a non-shareable mode, meaning only one process can use the resource at any given time.</li>
          <li>For example, a printer can only be used by one process at a time. If a second process requests the printer, it must wait until the first process finishes.</li>
          <li>In a deadlock scenario, this condition ensures that the resources involved in the deadlock cannot be accessed by other processes, which is one of the key reasons for the occurrence of a deadlock.</li>
        </ul>
      </section>
    `},{id:135,title:"Hold and Wait",content:`
      <section>
        <h3>Hold and Wait</h3>
        <ul>
          <li><strong>Hold and Wait</strong> occurs when a process holds at least one resource and is waiting to acquire additional resources that are being held by other processes.</li>
          <li>For example, process A holds resource 1 and is waiting for resource 2, while process B holds resource 2 and is waiting for resource 1.</li>
          <li>This condition enables a circular dependency between processes, which is crucial for a deadlock to occur.</li>
        </ul>
      </section>
    `},{id:136,title:"No Preemption",content:`
      <section>
        <h3>No Preemption</h3>
        <ul>
          <li><strong>No Preemption</strong> means that resources cannot be forcibly taken from a process holding them. A resource can only be released voluntarily when the process holding it is done using it.</li>
          <li>If a process is holding a resource and requests another, it cannot be preempted to allow another process to proceed. This can lead to a deadlock situation if other processes are waiting for the resources.</li>
          <li>In some systems, preemption is allowed (for example, for CPU resources), but it is not allowed for all resources in most systems, especially shared ones like files or printers.</li>
        </ul>
      </section>
    `},{id:137,title:"Circular Wait",content:`
      <section>
        <h3>Circular Wait</h3>
        <ul>
          <li><strong>Circular Wait</strong> occurs when a set of processes {P1, P2, ..., Pn} exists such that each process Pi is waiting for a resource held by the next process Pi+1, and the last process Pn is waiting for a resource held by the first process P1, forming a circular chain of dependencies.</li>
          <li>For example, process 1 is waiting for resource 2, process 2 is waiting for resource 3, and process 3 is waiting for resource 1, creating a circular wait condition.</li>
          <li>This circular wait is a key factor in deadlock, and it is the condition that often needs to be broken to prevent or resolve deadlock situations.</li>
        </ul>
      </section>
    `},{id:7,title:"Methods for Handling Deadlocks",content:`
      <section>
        <h3>Methods for Handling Deadlocks</h3>
        <ul>
          <li><strong>Deadlock Prevention:</strong> This method prevents the occurrence of deadlocks by ensuring that one of the necessary conditions for deadlock is always violated.
            <ul>
              <li><strong>Example:</strong> Ensuring that the system only grants resources in a way that avoids circular wait.</li>
              <li><strong>Pro:</strong> Avoids deadlocks from happening.</li>
              <li><strong>Con:</strong> Can lead to lower resource utilization.</li>
            </ul>
          </li>
          <li><strong>Deadlock Avoidance:</strong> This method dynamically analyzes resource requests and grants them only if they do not lead to a deadlock.
            <ul>
              <li><strong>Example:</strong> The Banker's algorithm checks whether resource allocation is safe before granting a request.</li>
              <li><strong>Pro:</strong> Prevents deadlocks without reducing resource utilization too much.</li>
              <li><strong>Con:</strong> Can introduce significant overhead in checking resource availability.</li>
            </ul>
          </li>
          <li><strong>Deadlock Detection and Recovery:</strong> In this approach, the system allows deadlocks to occur but periodically checks for them. If a deadlock is detected, recovery mechanisms are triggered.
            <ul>
              <li><strong>Example:</strong> Using a resource allocation graph to detect deadlocks.</li>
              <li><strong>Pro:</strong> Allows for efficient resource usage until a deadlock occurs.</li>
              <li><strong>Con:</strong> Deadlocks can disrupt system functionality until detected and recovered.</li>
            </ul>
          </li>
          <li><strong>Ignoring Deadlocks (Ostrich Algorithm):</strong> This method completely ignores the possibility of deadlocks, assuming that they are rare or unlikely to cause serious issues.
            <ul>
              <li><strong>Pro:</strong> Simple and low-cost implementation.</li>
              <li><strong>Con:</strong> Can cause system crashes or instability if deadlocks do occur.</li>
            </ul>
          </li>
        </ul>
      </section>
    `},{id:138,title:"Deadlock Prevention",content:`
      <section>
        <h3>Deadlock Prevention</h3>
        <ul>
          <li><strong>Deadlock Prevention</strong> aims to prevent one or more of the necessary conditions for deadlock from occurring. The key strategies involve:</li>
          <li><strong>Mutual Exclusion Prevention:</strong> Eliminate the need for mutual exclusion for resources that are sharable (e.g., allowing multiple processes to access resources like memory simultaneously).</li>
          <li><strong>Hold and Wait Prevention:</strong> Processes must request all resources at once, rather than holding some resources and waiting for others. This prevents circular dependencies.</li>
          <li><strong>No Preemption Prevention:</strong> If a process is holding a resource and requesting others, preemption is allowed. Resources can be forcibly taken from a process and allocated to others to break the deadlock cycle.</li>
          <li><strong>Circular Wait Prevention:</strong> A partial order of resource allocation is established, where resources are assigned in a way that eliminates circular waiting dependencies.</li>
        </ul>
      </section>
    `},{id:139,title:"Deadlock Avoidance",content:`
      <section>
        <h3>Deadlock Avoidance</h3>
        <ul>
          <li><strong>Deadlock Avoidance</strong> allows the system to proceed without causing a deadlock, but unlike prevention, it doesn't eliminate the possibility of deadlock; it simply avoids it by carefully monitoring resource allocation.</li>
          <li>The key strategy used here is the <strong>Banker's Algorithm</strong>, which assesses resource allocation requests based on whether they can safely be granted without leading to a deadlock. The algorithm checks if the system can always fulfill future requests even if resources are allocated in the present.</li>
          <li>Deadlock avoidance algorithms require knowledge of the maximum resource requirements of each process in advance and ensure that only safe resource allocations are made.</li>
        </ul>
      </section>
    `},{id:140,title:"Deadlock Detection",content:`
      <section>
        <h3>Deadlock Detection</h3>
        <ul>
          <li><strong>Deadlock Detection</strong> allows the system to continue running even if deadlock occurs, but periodically checks for deadlock and takes action when it detects it.</li>
          <li>The system maintains a resource allocation graph or a wait-for graph to detect deadlock by checking for cycles in these graphs.</li>
          <li>Once a deadlock is detected, the system must take action, such as terminating one or more processes involved in the deadlock or rolling back processes to a safe state to resolve the deadlock.</li>
        </ul>
      </section>
    `},{id:141,title:"Deadlock Recovery",content:`
      <section>
        <h3>Deadlock Recovery</h3>
        <ul>
          <li><strong>Deadlock Recovery</strong> involves taking corrective measures after deadlock is detected, to break the deadlock and resume system operations. Recovery strategies include:</li>
          <li><strong>Process Termination:</strong> One or more processes involved in the deadlock are terminated to release resources and break the cycle.</li>
          <li><strong>Resource Preemption:</strong> Resources held by processes are preempted and reassigned to other processes, which may involve rolling back some processes to a safe state before preemption.</li>
          <li><strong>Rollback:</strong> Involves restoring processes to a previous safe state, undoing their progress, and reattempting the resource allocation to avoid the deadlock.</li>
        </ul>
      </section>
    `},{id:6,title:"Ignore Deadlocks, Ostrich Algo",content:`
      <section>
        <h3>Ignoring Deadlocks (Ostrich Algorithm)</h3>
        <ul>
          <li>The Ostrich Algorithm is a strategy where a system intentionally ignores deadlocks, hoping they will not happen or cause significant issues.</li>
          <li>This approach assumes that deadlocks are rare or that their occurrence will not significantly impact the system's overall performance or reliability.</li>
          <li>Rather than solving deadlock problems proactively, the system allows them to happen and deals with the consequences if they arise.</li>
          <li>It is often used in systems where the cost of handling deadlocks is higher than the potential risk or frequency of occurrence.</li>
          <li><strong>Pros:</strong> Simple, low overhead, no need for complex algorithms to detect or recover from deadlocks.</li>
          <li><strong>Cons:</strong> If deadlocks do occur, they can cause significant system downtime or resource wastage, leading to reduced system reliability.</li>
          <li><strong>Example:</strong> An embedded system with limited resources, where deadlocks are unlikely and can be ignored for simplicity.</li>
        </ul>
      </section>
    `},{id:8,title:"Bankers Algorithm (Safe State)",content:`
      <section>
        <h3>Banker's Algorithm (Safe State)</h3>
        <ul>
          <li><strong>What is the Banker's Algorithm?</strong> The Banker's Algorithm is used to avoid deadlock by determining whether the system is in a safe state before allocating resources to processes.</li>
          <li><strong>Safe State:</strong> A system is in a safe state if there exists a sequence of processes that can finish without causing a deadlock.</li>
          <li><strong>How it Works:</strong>
            <ul>
              <li>Each process in the system declares its maximum resource needs.</li>
              <li>The system checks if it can safely allocate resources by ensuring that enough resources are available for each process to complete.</li>
              <li>If resources can be safely allocated, the system is in a safe state, and resources are granted.</li>
            </ul>
          </li>
          <li><strong>Pro:</strong> Helps to ensure that the system does not enter a deadlock state.</li>
          <li><strong>Con:</strong> Can introduce overhead in checking safe states before allocating resources.</li>
        </ul>
      </section>
    `},{id:9,title:"Resource Preemption",content:`
      <section>
        <h3>Resource Preemption</h3>
        <ul>
          <li><strong>What is Resource Preemption?</strong> Resource preemption involves taking resources away from a process to resolve a deadlock situation.</li>
          <li><strong>How it Works:</strong> If a process holds a resource and is blocking others, the system can preempt (take away) resources from it and allocate them to other processes.</li>
          <li><strong>Pro:</strong> Can break a deadlock by redistributing resources.</li>
          <li><strong>Con:</strong> Preempting resources may cause process starvation or may not guarantee resolution of all deadlock situations.</li>
        </ul>
      </section>
    `},{id:10,title:"Resource Allocation Graph (RAG)",content:`
      <section>
        <h3>Resource Allocation Graph (RAG)</h3>
        <ul>
          <li><strong>What is a Resource Allocation Graph (RAG)?</strong> A resource allocation graph is a directed graph used to represent the relationships between processes and resources in a system.</li>
          <li><strong>Nodes:</strong>
            <ul>
              <li><strong>Process Nodes:</strong> Represent processes in the system.</li>
              <li><strong>Resource Nodes:</strong> Represent resources available in the system.</li>
            </ul>
          </li>
          <li><strong>Edges:</strong> The edges represent resource requests and allocations:
            <ul>
              <li><strong>Request Edge:</strong> A directed edge from a process to a resource indicating that the process is requesting the resource.</li>
              <li><strong>Assignment Edge:</strong> A directed edge from a resource to a process, indicating that the resource is currently allocated to the process.</li>
            </ul>
          </li>
          <li><strong>Usage:</strong> RAG is used to detect deadlocks. A cycle in the graph indicates a deadlock.</li>
        </ul>
      </section>
    `},{id:11,title:"Safe State vs Unsafe State",content:`
      <section>
        <h3>Safe State vs Unsafe State</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>Safe State</th><th>Unsafe State</th></tr>
          </thead>
          <tbody>
            <tr><td>The system is in a safe state if there exists a sequence of processes that can finish without causing a deadlock.</td><td>The system is in an unsafe state if no such sequence exists, and it might lead to a deadlock.</td></tr>
            <tr><td>In a safe state, resources can be allocated without the risk of deadlock.</td><td>In an unsafe state, allocating resources could lead to a deadlock.</td></tr>
            <tr><td>Can be determined using the Banker's Algorithm.</td><td>Cannot be easily predicted or resolved without complex checks.</td></tr>
            <tr><td>Safe states are preferable for system stability and resource management.</td><td>Unsafe states need careful handling and resource allocation policies.</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:12,title:"Deadlock vs Livelock",content:`
      <section>
        <h3>Deadlock vs Livelock</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>Deadlock</th><th>Livelock</th></tr>
          </thead>
          <tbody>
            <tr><td>In deadlock, processes are blocked and cannot proceed.</td><td>In livelock, processes continuously change states in response to each other but still do not make progress.</td></tr>
            <tr><td>Processes are stuck waiting for resources or events that will never occur.</td><td>Processes actively work, but their actions result in no real progress being made.</td></tr>
            <tr><td>Can occur when resources are locked in a circular dependency.</td><td>Can occur when processes constantly respond to each other in an attempt to resolve a situation but fail to make any headway.</td></tr>
            <tr><td>Deadlocks usually require intervention to break the cycle and release resources.</td><td>Livelocks can often be resolved by breaking the cycle through changes in process design or priorities.</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:13,title:"CPU Memory Access",content:`
      <section>
        <h3>CPU Access to Register and Main Memory</h3>
        <ul>
          <li><strong>Registers:</strong> Registers are small, fast storage locations within the CPU used to store data that is actively being processed.</li>
          <li><strong>CPU Access:</strong> The CPU can directly access registers in a single clock cycle, which allows fast execution of instructions.</li>
          <li><strong>Main Memory (RAM):</strong> Main memory is larger than registers but slower. The CPU accesses main memory via the memory bus, which involves multiple cycles.</li>
          <li><strong>Cache Memory:</strong> Often used to bridge the speed gap between the CPU and main memory. It stores frequently accessed data to reduce the time spent accessing the slower RAM.</li>
          <li><strong>Memory Hierarchy:</strong> The CPU has a hierarchy of storage (registers, cache, main memory, etc.) to optimize speed and size.</li>
        </ul>
      </section>
    `},{id:14,title:"Memory Protection",content:`
      <section>
        <h3>Memory Protection (Base and Limit Registers)</h3>
        <ul>
          <li><strong>Base Register:</strong> Holds the starting address of the process's memory in physical memory. It ensures that a process does not access memory outside its allocated space.</li>
          <li><strong>Limit Register:</strong> Defines the size of the memory allocated to the process. It ensures that the process does not access memory beyond its allocated range.</li>
          <li><strong>Protection:</strong> The combination of the base and limit registers prevents processes from accessing memory they are not authorized to use, protecting the system from memory corruption and unauthorized access.</li>
          <li><strong>Usage:</strong> These registers are typically used in systems with hardware memory protection, like those in modern operating systems.</li>
        </ul>
      </section>
    `},{id:15,title:"Logical vs Physical Address Space",content:`
      <section>
        <h3>Logical Address Space vs Physical Address Space</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>Logical Address Space</th><th>Physical Address Space</th></tr>
          </thead>
          <tbody>
            <tr><td>The address generated by the CPU during program execution.</td><td>The actual physical addresses in the computer's memory (RAM).</td></tr>
            <tr><td>Also known as virtual address space.</td><td>Also known as real address space.</td></tr>
            <tr><td>Translated into physical addresses by the memory management unit (MMU) using techniques like paging or segmentation.</td><td>Directly accessed by the hardware.</td></tr>
            <tr><td>Allows processes to use virtual memory, providing isolation and abstraction from physical memory.</td><td>Represents the actual layout of memory in the system.</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:16,title:"Memory Categories in OS",content:`
      <section>
        <h3>Memory Categories in OS</h3>
        <ul>
          <li><strong>Primary Memory (RAM):</strong> Temporary memory used by the CPU to store data that is actively being used. It is fast but volatile (data is lost when the power is turned off).</li>
          <li><strong>Secondary Memory:</strong> Non-volatile memory used for long-term storage, such as hard drives (HDDs) or solid-state drives (SSDs). It is slower than primary memory but has larger capacity.</li>
          <li><strong>Cache Memory:</strong> A small, fast memory located close to the CPU that stores frequently accessed data to speed up processing. It sits between the CPU and main memory.</li>
          <li><strong>Virtual Memory:</strong> An abstraction that allows the system to use disk space to simulate extra RAM, enabling larger programs to run on systems with limited physical memory.</li>
          <li><strong>ROM (Read-Only Memory):</strong> Non-volatile memory used to store the firmware and boot instructions. It cannot be modified or written over under normal operation.</li>
          <li><strong>Swap Space:</strong> A portion of the disk that is used to store data when the physical memory is full, facilitating memory management in low-memory situations.</li>
        </ul>
      </section>
    `},{id:17,title:"memory Reserved for OS",content:`
      <section>
        <h3>Reserved for OS</h3>
        <ul>
          <li><strong>OS Memory Allocation:</strong> A portion of memory is reserved for the operating system to ensure its functions are stable and protected.</li>
          <li><strong>Critical Functions:</strong> The OS uses this reserved memory for managing hardware, system processes, interrupt handling, and other core activities.</li>
          <li><strong>Isolation:</strong> Reserved memory ensures the OS is isolated from user processes, protecting it from potential crashes or memory overflows caused by user programs.</li>
          <li><strong>Permanent Allocation:</strong> This memory is allocated permanently and cannot be accessed or altered by user processes.</li>
          <li><strong>Examples:</strong> Kernel space, device drivers, memory management, and I/O operations are stored in this reserved area.</li>
        </ul>
      </section>
    `},{id:18,title:"User Processes memory",content:`
      <section>
        <h3>User Processes</h3>
        <ul>
          <li><strong>User Space:</strong> Memory allocated for the execution of user programs. Each user process operates in its own isolated space.</li>
          <li><strong>Separation:</strong> User processes are separated from OS memory to prevent interference with critical OS tasks, ensuring system stability.</li>
          <li><strong>Dynamic Allocation:</strong> Memory for user processes is dynamically allocated and can vary in size depending on the application’s needs.</li>
          <li><strong>Access:</strong> User processes can only access their allocated memory and cannot access the OS's reserved memory.</li>
          <li><strong>Examples:</strong> Applications, background tasks, user input handling, and other non-OS tasks are executed in user space.</li>
        </ul>
      </section>
    `},{id:19,title:"Swapping",content:`
      <section>
        <h3>Swapping</h3>
        <ul>
          <li><strong>Definition:</strong> Swapping is a memory management technique where processes are temporarily moved from main memory to disk (usually the swap space) to free up memory for other processes.</li>
          <li><strong>How it Works:</strong> When memory is full, the OS selects a process that is not actively being used and transfers it to a designated space on the disk. This allows other processes to use the freed memory.</li>
          <li><strong>Process State:</strong> The swapped-out process is saved in its exact state so that it can be resumed when swapped back into memory.</li>
          <li><strong>Purpose:</strong> Swapping helps manage system memory efficiently, allowing more processes to run on limited memory resources.</li>
          <li><strong>Performance Impact:</strong> Frequent swapping can cause performance issues (called thrashing) as the system spends more time swapping than running processes.</li>
        </ul>
      </section>
    `},{id:20,title:"Memory Allocation",content:`
      <section>
        <h3>Memory Allocation</h3>
        <ul>
          <li><strong>Definition:</strong> Memory allocation is the process of assigning blocks of memory to different processes, ensuring that each process has the required resources to run.</li>
          <li><strong>Types:</strong>
            <ul>
              <li><strong>Contiguous Memory Allocation:</strong> Allocates a single, continuous block of memory to each process. It's simple but can lead to fragmentation.</li>
              <li><strong>Paged Memory Allocation:</strong> Divides memory into fixed-size pages and allocates them to processes. This prevents fragmentation but can introduce overhead.</li>
              <li><strong>Segmented Memory Allocation:</strong> Divides memory into variable-sized segments, which are allocated to different processes based on their needs. This method can handle growing data but may lead to fragmentation.</li>
            </ul>
          </li>
          <li><strong>Dynamic Allocation:</strong> Memory is allocated at runtime based on process demands and can be resized as needed.</li>
          <li><strong>External Fragmentation:</strong> Occurs when free memory is split into small blocks and cannot be used efficiently for larger processes.</li>
          <li><strong>Internal Fragmentation:</strong> Occurs when memory allocated to a process is larger than required, leading to wasted space.</li>
        </ul>
      </section>
    `},{id:21,title:"Contiguous Allocation",content:`
      <section>
        <h3>Contiguous Allocation</h3>
        <ul>
          <li><strong>Definition:</strong> Contiguous allocation is a memory management technique where each process is assigned a single, continuous block of memory in the main memory.</li>
          <li><strong>How it Works:</strong> The OS allocates a single, contiguous block of memory to a process. The process occupies this block of memory entirely, without being split.</li>
          <li><strong>Advantages:</strong>
            <ul>
              <li><strong>Simplicity:</strong> It's simple to implement and manage.</li>
              <li><strong>Fast Access:</strong> Since the memory is contiguous, accessing memory locations is fast and direct.</li>
            </ul>
          </li>
          <li><strong>Disadvantages:</strong>
            <ul>
              <li><strong>Fragmentation:</strong> External fragmentation occurs when free memory is scattered, leaving gaps that cannot be used for larger processes.</li>
              <li><strong>Fixed Size:</strong> It's difficult to resize processes once they've been allocated memory.</li>
              <li><strong>Limited Flexibility:</strong> The allocation is static and cannot easily adjust to varying process sizes or requirements.</li>
            </ul>
          </li>
          <li><strong>Use Cases:</strong> Contiguous allocation is commonly used in systems with limited memory and for smaller, simpler systems where memory management is less complex.</li>
        </ul>
      </section>
    `},{id:7,title:"Fixed Partitioning",content:`
      <section>
        <h3>Fixed Partitioning</h3>
        <ul>
          <li>In fixed partitioning, memory is divided into fixed-size partitions at the time of system startup.</li>
          <li>Each partition can only hold one process, and the size of the partition cannot be changed once defined.</li>
          <li>If a process is smaller than a partition, the unused space within the partition is wasted.</li>
          <li>Simple to implement but inefficient due to internal fragmentation.</li>
          <li><strong>Example:</strong> A system with fixed partitions of 256MB each, and processes of varying sizes.</li>
        </ul>
      </section>
    `},{id:8,title:"Variable Partitioning",content:`
      <section>
        <h3>Variable Partitioning</h3>
        <ul>
          <li>In variable partitioning, memory is divided into partitions of varying sizes based on the size of incoming processes.</li>
          <li>When a process arrives, the system allocates exactly the required amount of memory.</li>
          <li>There is no waste of memory space as in fixed partitioning, but external fragmentation can occur.</li>
          <li>More flexible than fixed partitioning but requires sophisticated management to track available spaces.</li>
          <li><strong>Example:</strong> A system where processes of varying sizes are allocated dynamically to available memory slots.</li>
        </ul>
      </section>
    `},{id:9,title:"First Fit",content:`
      <section>
        <h3>First Fit</h3>
        <ul>
          <li>First Fit is a memory allocation strategy where the first available partition large enough to hold the process is selected.</li>
          <li>This strategy is fast, as it does not search the entire list of available spaces.</li>
          <li>However, it may leave small gaps at the beginning of memory, causing external fragmentation.</li>
          <li><strong>Example:</strong> Allocating a 200MB process to the first partition that has more than 200MB free memory.</li>
        </ul>
      </section>
    `},{id:10,title:"Best Fit",content:`
      <section>
        <h3>Best Fit</h3>
        <ul>
          <li>Best Fit allocates a process to the smallest available partition that can accommodate it, aiming to minimize unused space.</li>
          <li>This strategy reduces the size of remaining free spaces, potentially reducing external fragmentation.</li>
          <li>However, it requires more time to search the list of available partitions to find the best match.</li>
          <li><strong>Example:</strong> Allocating a 200MB process to the smallest partition that is larger than 200MB.</li>
        </ul>
      </section>
    `},{id:11,title:"Worst Fit",content:`
      <section>
        <h3>Worst Fit</h3>
        <ul>
          <li>Worst Fit allocates a process to the largest available partition, leaving the largest remaining free space.</li>
          <li>This strategy aims to reduce fragmentation by leaving large enough spaces for future processes.</li>
          <li>However, it may cause excessive fragmentation in some cases, as large partitions can be split into many small spaces.</li>
          <li><strong>Example:</strong> Allocating a 200MB process to the largest available partition, even if much of it remains unused.</li>
        </ul>
      </section>
    `},{id:12,title:"Internal Fragmentation",content:`
      <section>
        <h3>Internal Fragmentation</h3>
        <ul>
          <li>Internal fragmentation occurs when fixed-sized memory partitions are allocated, but a process does not completely fill the partition.</li>
          <li>The unused space within the partition is wasted and cannot be used by other processes.</li>
          <li>This is common in fixed partitioning and occurs due to the mismatch between process size and partition size.</li>
          <li><strong>Example:</strong> A 100MB process is allocated a 128MB partition, leaving 28MB unused within the partition.</li>
        </ul>
      </section>
    `},{id:13,title:"External Fragmentation",content:`
      <section>
        <h3>External Fragmentation</h3>
        <ul>
          <li>External fragmentation occurs when free memory is scattered throughout the system, preventing large blocks of memory from being allocated even though the total free memory is sufficient.</li>
          <li>This is a common issue in systems that use variable partitioning, where memory is divided dynamically based on process sizes.</li>
          <li>It happens when there are many small free memory blocks scattered across the system.</li>
          <li><strong>Example:</strong> A system with many small unused partitions that collectively add up to enough memory for a large process, but cannot fit the process due to their scattered locations.</li>
        </ul>
      </section>
    `},{id:14,title:"Remedies Fragmentation Compaction",content:`
      <section>
        <h3>Remedies for Fragmentation</h3>
        <ul>
          <li><strong>Compaction:</strong> This technique involves moving processes around in memory to create larger contiguous blocks of free space, thus eliminating external fragmentation.</li>
          <li><strong>Paging:</strong> Memory is divided into fixed-sized blocks (pages) that can be allocated non-contiguously. This eliminates external fragmentation, though it introduces internal fragmentation within pages.</li>
          <li><strong>Segmentation:</strong> Memory is divided into segments based on logical divisions (e.g., code, data, stack). It allows processes to be allocated memory based on their logical structure, reducing fragmentation but not eliminating it entirely.</li>
          <li><strong>Example:</strong> Compaction may move processes to combine free memory space, Paging divides memory into pages to avoid fragmentation, and Segmentation allocates memory based on logical process divisions.</li>
        </ul>
      </section>
    `},{id:28,title:"Non Contiguous Allocation",content:`
      <section>
        <h3>Non-Contiguous Allocation</h3>
        <ul>
          <li>Non-contiguous allocation is a memory management technique where processes do not need to be stored in consecutive memory locations.</li>
          <li>It allows more flexible memory usage by splitting processes into smaller parts that can be stored at different locations in memory.</li>
          <li>Unlike contiguous allocation, where the process must occupy a single continuous block of memory, non-contiguous allocation enables the memory to be allocated in fragments across the available space.</li>
          <li>Two common techniques for non-contiguous allocation are **paging** and **segmentation**.</li>
        </ul>
        <h4>Advantages</h4>
        <ul>
          <li>Efficient use of memory as it allows for dynamic allocation and deallocation of memory blocks.</li>
          <li>Helps reduce fragmentation issues, allowing for a more flexible use of available memory.</li>
          <li>Improves the system’s ability to handle larger processes by splitting them across different memory locations.</li>
        </ul>
        <h4>Disadvantages</h4>
        <ul>
          <li>More complex memory management compared to contiguous allocation.</li>
          <li>Can lead to higher overhead due to the need for managing multiple memory blocks and addresses.</li>
        </ul>
      </section>
    `},{id:15,title:"Paging",content:`
      <section>
        <h3>Paging</h3>
        <ul>
          <li>Paging is a memory management scheme that eliminates the need for contiguous memory allocation.</li>
          <li>Memory is divided into small fixed-size blocks called pages, and the physical memory is divided into blocks of the same size called frames.</li>
          <li>Paging allows non-contiguous memory allocation, reducing fragmentation.</li>
        </ul>
      </section>
    `},{id:16,title:"Page Table",content:`
      <section>
        <h3>Page Table</h3>
        <ul>
          <li>A page table is a data structure used in virtual memory systems to store the mapping between virtual addresses and physical addresses.</li>
          <li>Each entry in the page table holds the frame number of the corresponding page in physical memory.</li>
          <li>The page table allows the operating system to translate virtual addresses to physical addresses efficiently.</li>
        </ul>
      </section>
    `},{id:17,title:"Page Number",content:`
      <section>
        <h3>Page Number</h3>
        <ul>
          <li>The page number is the index used to look up the page table for the corresponding physical frame number.</li>
          <li>It represents the virtual page in the virtual address space.</li>
          <li>When a virtual address is used, the page number is extracted to find the corresponding frame in physical memory.</li>
        </ul>
      </section>
    `},{id:18,title:"Page Offset",content:`
      <section>
        <h3>Page Offset</h3>
        <ul>
          <li>The page offset is the portion of the virtual address that represents the exact location within a page.</li>
          <li>It is used to access the data inside the specific frame once the page table lookup has provided the corresponding frame number.</li>
          <li>It allows the operating system to determine the exact byte within the frame once the page number has been translated.</li>
        </ul>
      </section>
    `},{id:19,title:"Page Table Limit Register",content:`
      <section>
        <h3>Page Table Limit Register</h3>
        <ul>
          <li>The Page Table Limit Register (PTLR) stores the size of the page table.</li>
          <li>It is used to ensure that memory accesses are valid and do not reference locations beyond the available page table entries.</li>
          <li>By checking PTLR, the operating system ensures that only valid pages are accessed in memory.</li>
        </ul>
      </section>
    `},{id:20,title:"Translation Lookaside Buffer (TLB) Miss",content:`
      <section>
        <h3>TLB Miss</h3>
        <ul>
          <li>A Translation Lookaside Buffer (TLB) is a small, fast cache used to store recently accessed page table entries.</li>
          <li>A TLB miss occurs when the requested page entry is not found in the TLB, requiring a lookup in the page table.</li>
          <li>On a TLB miss, the page table must be accessed to retrieve the mapping, which introduces a delay.</li>
        </ul>
      </section>
    `},{id:21,title:"Segmentation",content:`
      <section>
        <h3>Segmentation</h3>
        <ul>
          <li>Segmentation is a memory management technique where memory is divided into variable-sized segments based on logical divisions (e.g., code, data, stack).</li>
          <li>Unlike paging, segmentation does not require memory to be divided into fixed-size blocks.</li>
          <li>It allows more flexible memory allocation, based on the structure of the program.</li>
        </ul>
      </section>
    `},{id:22,title:"Segment Table",content:`
      <section>
        <h3>Segment Table</h3>
        <ul>
          <li>A segment table is used to store information about segments, including the base address (starting address) and the limit (length) of each segment.</li>
          <li>Each entry in the segment table maps a segment number to a physical address, making it possible to translate a logical segment address to a physical address.</li>
        </ul>
      </section>
    `},{id:23,title:"Segment Number",content:`
      <section>
        <h3>Segment Number</h3>
        <ul>
          <li>The segment number is used to index the segment table for accessing information about a particular segment.</li>
          <li>It represents the logical segment in the program, such as code or data.</li>
        </ul>
      </section>
    `},{id:24,title:"Segment Offset",content:`
      <section>
        <h3>Segment Offset</h3>
        <ul>
          <li>The segment offset is the portion of a logical address that specifies the exact location within a segment.</li>
          <li>Once the segment number is used to find the segment’s base address, the offset is added to it to get the exact physical address.</li>
        </ul>
      </section>
    `},{id:25,title:"Segment Table Limit Register",content:`
      <section>
        <h3>Segment Table Limit Register</h3>
        <ul>
          <li>The Segment Table Limit Register (STLR) stores the size of the segment table.</li>
          <li>It helps the operating system ensure that segment numbers accessed in memory are within valid ranges.</li>
          <li>If a segment number exceeds the limit in the STLR, a segmentation fault is triggered.</li>
        </ul>
      </section>
    `},{id:26,title:"Segment Fault",content:`
      <section>
        <h3>Segment Fault</h3>
        <ul>
          <li>A segment fault occurs when a program tries to access a memory location outside the bounds of a segment.</li>
          <li>It happens when the segment number is invalid or the offset is beyond the segment’s limit.</li>
          <li>It is similar to a page fault in paging systems, but it is caused by segmentation violations.</li>
        </ul>
      </section>
    `},{id:29,title:"Page vs Frame",content:`
      <section>
        <h3>Page vs Frame</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>Page</th><th>Frame</th></tr>
          </thead>
          <tbody>
            <tr><td>A page is a fixed-size block of logical memory in the process's address space.</td><td>A frame is a fixed-size block of physical memory in the main memory.</td></tr>
            <tr><td>Pages are part of the virtual memory system.</td><td>Frames are part of the physical memory (RAM).</td></tr>
            <tr><td>Pages are mapped to frames through the page table.</td><td>Frames hold the actual data from the process's pages.</td></tr>
            <tr><td>Pages belong to the logical structure of a program.</td><td>Frames belong to the physical structure of memory.</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:30,title:"Why Paging Increases CST",content:`
      <section>
        <h3>Why Paging Increases Context Switching Time</h3>
        <ul>
          <li>Paging introduces overhead during context switching due to the need to update the page table each time a process is switched in or out.</li>
          <li>The operating system must load the process’s page table from memory, and potentially bring in pages from secondary storage (disk), which can take time.</li>
          <li>If the process uses a large number of pages, updating the page table and handling page faults can add additional delays during context switching.</li>
          <li>Furthermore, the hardware needs to update the Translation Lookaside Buffer (TLB) entries, which may cause additional delays if the TLB is not already updated.</li>
        </ul>
      </section>
    `},{id:31,title:"Copy on Write (COW)",content:`
      <section>
        <h3>Copy-on-Write (COW)</h3>
        <ul>
          <li>Copy-on-Write (COW) is an optimization strategy used in memory management where processes share memory pages until one of the processes modifies the page.</li>
          <li>Initially, processes share the same copy of the memory page, and no actual copy is made. When one process writes to the shared page, a new copy is created, and the writing process gets its own copy of the page.</li>
          <li>This technique saves memory by avoiding unnecessary copies of memory pages when processes don’t modify them.</li>
          <li>COW is commonly used in **fork() system calls** in Unix-like operating systems, where the child process initially shares the parent's memory, but copies are made only when one of the processes modifies the memory.</li>
        </ul>
      </section>
    `},{id:32,title:"Goal of Memory Management",content:`
      <section>
        <h3>Goal of Memory Management</h3>
        <ul>
          <li>Efficiently allocate and deallocate memory to processes, ensuring optimal usage of available memory resources.</li>
          <li>Provide isolation between processes, preventing them from interfering with each other’s memory space.</li>
          <li>Support multitasking by ensuring that multiple processes can execute simultaneously without memory conflicts.</li>
          <li>Minimize fragmentation (both internal and external) to ensure continuous and efficient use of memory.</li>
          <li>Enable processes to access large memory spaces beyond the physical memory using virtual memory.</li>
        </ul>
      </section>
    `},{id:33,title:"What is Virtual Memory?",content:`
      <section>
        <h3>What is Virtual Memory?</h3>
        <ul>
          <li>Virtual memory is a memory management technique that allows the execution of processes that may not be completely in the physical memory at once.</li>
          <li>It gives an application the impression it has contiguous memory, even though it may be fragmented and spread across physical memory and secondary storage (like a hard disk or SSD).</li>
          <li>Virtual memory allows programs to use more memory than is physically available by swapping data between RAM and disk storage.</li>
        </ul>
      </section>
    `},{id:34,title:"Why is Virtual Memory Needed?",content:`
      <section>
        <h3>Why is Virtual Memory Needed?</h3>
        <ul>
          <li>It allows programs to run regardless of the amount of physical memory available, enabling them to utilize more memory than the physical RAM.</li>
          <li>It provides process isolation, ensuring that one process cannot access or modify the memory of another process.</li>
          <li>It helps in managing memory more efficiently, preventing programs from running out of memory when there’s insufficient physical memory available.</li>
          <li>It allows for multitasking by enabling multiple processes to run simultaneously, even if their memory needs exceed the physical memory available.</li>
        </ul>
      </section>
    `},{id:35,title:"How Does Virtual Memory Work?",content:`
      <section>
        <h3>How Does Virtual Memory Work?</h3>
        <ul>
          <li>Virtual memory works by dividing physical memory into fixed-size pages and logical memory into corresponding page tables.</li>
          <li>When a process accesses a memory location, the operating system checks if the data is in physical memory (RAM). If it is not, a page fault occurs, and the data is fetched from the disk (secondary storage).</li>
          <li>When pages are swapped between RAM and disk, the page table is updated to reflect where each page is currently located (either in RAM or on disk).</li>
          <li>Processes are given the illusion of a larger address space than is physically available by mapping virtual addresses to physical addresses dynamically.</li>
        </ul>
      </section>
    `},{id:36,title:"Virtual Memory Location Disk Space",content:`
      <section>
        <h3>Virtual Memory Location (Disk Space)</h3>
        <ul>
          <li>When physical memory is full, virtual memory allows portions of processes to be stored on secondary storage devices like hard disks or SSDs.</li>
          <li>These portions are called **pages**, and the swap space (or paging file) on disk is used to store pages not currently in use.</li>
          <li>Disk space is used to swap in pages that are needed and swap out pages that are not currently needed, ensuring that processes continue running despite limited physical memory.</li>
        </ul>
      </section>
    `},{id:37,title:"Implementation of Virtual Memory",content:`
      <section>
        <h3>Implementation of Virtual Memory</h3>
        <ul>
          <li>Virtual memory is implemented through the use of **paging** and **segmentation** techniques.</li>
          <li>The operating system manages page tables and uses a **memory management unit (MMU)** to map virtual addresses to physical addresses.</li>
          <li>The system uses **page tables** to keep track of which pages are in physical memory and which are on disk, facilitating efficient swapping between RAM and secondary storage.</li>
          <li>When a page fault occurs, the operating system retrieves the required page from disk and loads it into physical memory, while managing memory access to avoid conflicts.</li>
        </ul>
      </section>
    `},{id:38,title:"Benefits of Virtual Memory",content:`
      <section>
        <h3>Benefits of Virtual Memory</h3>
        <ul>
          <li>**Increased Process Size**: Allows processes to exceed the available physical memory, enabling larger applications to run.</li>
          <li>**Improved Multitasking**: Multiple processes can run simultaneously, each with its own virtual address space, without worrying about memory conflicts.</li>
          <li>**Memory Protection**: Ensures that one process cannot access or corrupt the memory of another process, increasing system security and stability.</li>
          <li>**Efficient Use of RAM**: Allows the operating system to use physical memory more efficiently by swapping out less frequently used data and keeping the most essential data in RAM.</li>
          <li>**Process Isolation**: Each process has its own separate virtual memory, preventing unauthorized access to data.</li>
        </ul>
      </section>
    `},{id:39,title:"Demand Paging",content:`
      <section>
        <h3>What is Demand Paging?</h3>
        <ul>
          <li>Demand paging is a memory management scheme in which a page is only loaded into physical memory when it is needed (i.e., on demand).</li>
          <li>Instead of loading all pages of a program into RAM at once, only the pages that are required during execution are brought into memory.</li>
          <li>This technique helps to save memory space and allows processes to run more efficiently by avoiding the need to load unnecessary data into RAM.</li>
        </ul>

        <h4>How Does Demand Paging Work?</h4>
        <ul>
          <li>When a program starts, it is not loaded entirely into physical memory. Only the **initial pages** are loaded.</li>
          <li>As the program executes, if it requires a page that is not currently in physical memory, a **page fault** occurs.</li>
          <li>Upon a page fault, the operating system will locate the required page on disk (usually in a swap space or paging file) and load it into memory.</li>
          <li>While loading the page, the operating system may choose to swap out a page that is less frequently used to make room for the new page in physical memory.</li>
          <li>This swapping mechanism ensures that only the necessary pages are in memory, optimizing the use of available resources.</li>
        </ul>

        <h4>Steps in Demand Paging</h4>
        <ul>
          <li>The process begins execution and only the initial pages are loaded into memory.</li>
          <li>When a page is accessed that is not in memory, a **page fault** is triggered.</li>
          <li>The operating system locates the required page on disk and loads it into memory.</li>
          <li>The page table is updated to reflect the new location of the page.</li>
          <li>If needed, a page replacement algorithm (e.g., LRU, FIFO) is used to swap out less-used pages from memory to make room for the new one.</li>
        </ul>

        <h4>Benefits of Demand Paging</h4>
        <ul>
          <li>Efficient memory usage: Only the pages that are required are loaded into memory, saving space.</li>
          <li>Reduces the load time of programs as not all pages need to be loaded initially.</li>
          <li>Improves performance for programs with large memory requirements by avoiding the need to load unnecessary data.</li>
          <li>Enhances multitasking, as more programs can run simultaneously by efficiently managing memory.</li>
        </ul>

        <h4>Challenges and Drawbacks</h4>
        <ul>
          <li>**Page faults** can cause delays, especially if the page is not present in memory and needs to be loaded from disk.</li>
          <li>Excessive page faults can lead to **thrashing**, where the system spends most of its time swapping pages in and out, causing poor performance.</li>
          <li>Requires efficient page replacement algorithms to minimize performance degradation.</li>
        </ul>
      </section>
    `},{id:40,title:"Page Fault",content:`
      <section>
        <h3>What is a Page Fault?</h3>
        <ul>
          <li>A page fault occurs when a program attempts to access a page that is not currently loaded in physical memory.</li>
          <li>This is a type of exception or interrupt that signals that the required page must be fetched from disk (or swap space) into memory.</li>
          <li>Page faults are an essential part of virtual memory management, allowing processes to access memory locations beyond the physical RAM capacity.</li>
        </ul>

        <h4>Types of Page Faults</h4>
        <ul>
          <li><strong>Minor Page Fault:</strong> The required page is already in memory but not in the location the CPU expects, so it needs to be moved.</li>
          <li><strong>Major Page Fault:</strong> The page is not in memory and needs to be loaded from the disk.</li>
        </ul>

        <h4>Steps in Handling a Page Fault</h4>
        <ul>
          <li>When a page fault occurs, the operating system checks if the page is available in swap space (disk).</li>
          <li>If available, the page is loaded into a free frame in memory.</li>
          <li>The page table is updated to reflect the new location of the page in memory.</li>
          <li>If there is no free memory, a page replacement algorithm is used to swap out an existing page and free up space for the required page.</li>
        </ul>
      </section>
    `},{id:41,title:"Lazy Swapper",content:`
      <section>
        <h3>What is a Lazy Swapper?</h3>
        <ul>
          <li>A lazy swapper is a memory management technique where pages are swapped in only when they are needed, rather than loading all pages at once.</li>
          <li>The system does not preemptively load pages into memory. Instead, it waits for a page fault to occur before loading the required page.</li>
          <li>This reduces the amount of memory used and ensures that only necessary data is kept in RAM.</li>
        </ul>

        <h4>How Lazy Swapping Works</h4>
        <ul>
          <li>Initially, a process may be loaded with only a few pages in memory, while others remain on disk.</li>
          <li>When the process accesses a page that is not in memory, a page fault occurs.</li>
          <li>Only the required page is swapped into memory, reducing the overhead of loading unnecessary data.</li>
          <li>The lazy swapping method ensures efficient memory usage by minimizing the number of pages loaded at any given time.</li>
        </ul>

        <h4>Advantages of Lazy Swapping</h4>
        <ul>
          <li>Efficient memory usage: Only the necessary pages are loaded.</li>
          <li>Reduces the load time of programs since only part of the program is initially loaded into memory.</li>
        </ul>

        <h4>Disadvantages</h4>
        <ul>
          <li>Page faults can cause delays, particularly if the needed page is located on disk and not already in memory.</li>
        </ul>
      </section>
    `},{id:42,title:"Pager",content:`
      <section>
        <h3>What is a Pager?</h3>
        <ul>
          <li>A pager is a system component responsible for loading pages from secondary storage (e.g., hard drive or SSD) into physical memory when required.</li>
          <li>The pager manages page faults by locating the necessary page in swap space or disk and loading it into RAM.</li>
          <li>It works as part of the virtual memory management system and ensures that pages are moved in and out of memory as needed.</li>
        </ul>

        <h4>Role of the Pager</h4>
        <ul>
          <li>The pager is responsible for managing the transfer of pages from disk to memory and vice versa.</li>
          <li>When a page fault occurs, the pager ensures that the required page is swapped into a free frame in memory.</li>
          <li>If no free frame is available, the pager may trigger page replacement to free up space.</li>
        </ul>

        <h4>Pager's Interaction with the Operating System</h4>
        <ul>
          <li>The pager communicates with the operating system’s memory manager, which handles tasks such as page replacement, memory allocation, and page table management.</li>
          <li>The operating system uses the pager to ensure that pages are brought into memory only when necessary, optimizing resource usage.</li>
        </ul>
      </section>
    `},{id:43,title:"Paging vs Swapping",content:`
      <section>
        <h3>Paging and Swapping</h3>
        <ul>
          <li><strong>Paging:</strong> Paging is a memory management scheme that eliminates the need for contiguous allocation of physical memory. It divides physical memory into fixed-size blocks called <strong>frames</strong> and divides logical memory into blocks of the same size called <strong>pages</strong>.</li>
          <li><strong>Swapping:</strong> Swapping refers to moving processes between main memory (RAM) and secondary memory (e.g., disk) in a system with limited physical memory. When a process is not currently executing, its pages may be swapped out to disk to free up space for other processes.</li>
        </ul>

        <h4>How Paging and Swapping Work Together</h4>
        <ul>
          <li>When a page fault occurs, and the page needed is not in memory, the operating system may swap out a currently resident page to disk to make space for the required page.</li>
          <li>Paging handles dividing memory into manageable chunks, while swapping manages the transfer of pages between physical memory and disk.</li>
          <li>Swapping allows the system to manage larger programs than would fit entirely into memory, while paging ensures efficient memory usage.</li>
        </ul>

        <h4>Advantages of Paging and Swapping</h4>
        <ul>
          <li>Efficient use of memory by breaking it into smaller, fixed-size pages.</li>
          <li>Enables the execution of processes larger than available memory.</li>
          <li>Supports virtual memory, allowing processes to be allocated more memory than physically available in RAM.</li>
        </ul>

        <h4>Disadvantages</h4>
        <ul>
          <li>Frequent page swapping can lead to performance issues due to the time required for disk I/O operations.</li>
        </ul>
      </section>
    `},{id:44,title:"Page Replacement Algorithms",content:`
      <section>
        <h3>Page Replacement Algorithms</h3>
        <ul>
          <li>Page replacement algorithms decide which page to swap out of memory when a page fault occurs and no free frames are available.</li>
          <li>These algorithms aim to optimize memory usage by ensuring that frequently used pages are kept in memory while swapping out less frequently used ones.</li>
        </ul>

        <h4>Types of Page Replacement Algorithms</h4>
        <ul>
          <li><strong>FIFO (First-In, First-Out):</strong> Pages are replaced in the order they were brought into memory. The oldest page in memory is replaced first.</li>
          <li><strong>Optimal (OPT):</strong> Replaces the page that will not be used for the longest time in the future. This is the ideal algorithm, but it's impractical as it requires future knowledge of memory accesses.</li>
          <li><strong>LRU (Least Recently Used):</strong> Replaces the page that has not been used for the longest period of time. It approximates the optimal algorithm by tracking the order of page accesses.</li>
          <li><strong>Clock (Second-Chance):</strong> A circular queue that gives each page a second chance before replacing it. Pages are examined in a circular manner, and if a page has been referenced recently, it is given another chance before being replaced.</li>
          <li><strong>Least Frequently Used (LFU):</strong> Replaces the page that has been used the least frequently. It counts how often each page is accessed and replaces the least accessed page.</li>
          <li><strong>Most Frequently Used (MFU):</strong> Replaces the page that has been accessed the most frequently, based on the assumption that pages used frequently are less likely to be needed again soon.</li>
        </ul>

        <h4>Advantages and Disadvantages</h4>
        <ul>
          <li><strong>FIFO:</strong> Simple and easy to implement, but not always optimal in terms of performance.</li>
          <li><strong>OPT:</strong> Provides the best possible performance but is impractical because it requires future access knowledge.</li>
          <li><strong>LRU:</strong> A good approximation of OPT, but requires keeping track of the order of page accesses, which can be resource-intensive.</li>
          <li><strong>Clock:</strong> Efficient and relatively easy to implement, but may not be as accurate as LRU or OPT.</li>
          <li><strong>LFU:</strong> Effective for programs with predictable access patterns, but may perform poorly if access patterns change frequently.</li>
        </ul>
      </section>
    `},{id:29,title:"FIFO (First In First Out)",content:`
      <section>
        <h3>FIFO (First In First Out)</h3>
        <ul>
          <li>FIFO is the simplest page replacement algorithm where the oldest page in memory is replaced when a new page needs to be loaded.</li>
          <li>It maintains a queue of pages in memory and when a page needs to be replaced, the one at the front of the queue is replaced.</li>
          <li>Disadvantage: FIFO may lead to poor performance, especially in cases where the oldest page is still frequently used (Belady's Anomaly).</li>
        </ul>
      </section>
    `},{id:30,title:"LRU (Least Recently Used)",content:`
      <section>
        <h3>LRU (Least Recently Used)</h3>
        <ul>
          <li>LRU replaces the page that has not been used for the longest period of time.</li>
          <li>It keeps track of the order in which pages are accessed and when a page needs to be replaced, the least recently used page is chosen.</li>
          <li>Disadvantage: Maintaining the order of pages can be expensive in terms of time complexity.</li>
        </ul>
      </section>
    `},{id:31,title:"Optimal Page Replacement",content:`
      <section>
        <h3>Optimal Page Replacement</h3>
        <ul>
          <li>The optimal algorithm replaces the page that will not be used for the longest period in the future.</li>
          <li>This provides the best possible performance but is difficult to implement since it requires knowledge of future page references.</li>
          <li>Used for theoretical comparisons of other algorithms.</li>
        </ul>
      </section>
    `},{id:32,title:"Second Chance Algorithm",content:`
      <section>
        <h3>Second Chance Algorithm</h3>
        <ul>
          <li>The second chance algorithm is an enhancement of FIFO. It gives a second chance to the page if it was recently used before replacing it.</li>
          <li>Pages are marked with a reference bit. When a page is accessed, its reference bit is set to 1. If a page needs to be replaced, the algorithm checks the reference bit and gives a second chance to pages with bit 1.</li>
        </ul>
      </section>
    `},{id:33,title:"Clock Algorithm",content:`
      <section>
        <h3>Clock Algorithm</h3>
        <ul>
          <li>The clock algorithm is similar to the second chance algorithm. It arranges pages in a circular buffer and gives each page a second chance.</li>
          <li>Pages are also marked with a reference bit, and when a page is accessed, its reference bit is set to 1. When a page needs to be replaced, the clock hand moves around the buffer and checks the reference bits of the pages to decide which page to replace.</li>
        </ul>
      </section>
    `},{id:34,title:"LFU (Least Frequently Used)",content:`
      <section>
        <h3>LFU (Least Frequently Used)</h3>
        <ul>
          <li>LFU replaces the page that is used the least frequently.</li>
          <li>It counts the number of times a page has been accessed and replaces the page with the lowest access count.</li>
          <li>Disadvantage: Maintaining the frequency count can be costly in terms of time and space complexity.</li>
        </ul>
      </section>
    `},{id:35,title:"MFU (Most Frequently Used)",content:`
      <section>
        <h3>MFU (Most Frequently Used)</h3>
        <ul>
          <li>MFU replaces the page that is used most frequently.</li>
          <li>It assumes that pages that are used frequently will continue to be used, and thus replacing them will help improve performance.</li>
          <li>In practice, MFU is not as commonly used as LFU.</li>
        </ul>
      </section>
    `},{id:36,title:"Random Page Replacement",content:`
      <section>
        <h3>Random Page Replacement</h3>
        <ul>
          <li>Random page replacement replaces a randomly chosen page in memory when a new page needs to be loaded.</li>
          <li>It is simple and easy to implement but may not perform as well as other algorithms in certain scenarios.</li>
        </ul>
      </section>
    `},{id:37,title:"Aging Algorithm",content:`
      <section>
        <h3>Aging Algorithm</h3>
        <ul>
          <li>The aging algorithm is a combination of FIFO and LRU.</li>
          <li>It shifts the reference bits of pages to the right (ages the bits) and periodically checks the reference bits to decide which pages to replace.</li>
          <li>This algorithm helps balance between pages that have been frequently used and pages that are old and less frequently used.</li>
        </ul>
      </section>
    `},{id:38,title:"Pure Demand Paging",content:`
      <section>
        <h3>Pure Demand Paging</h3>
        <ul>
          <li>In pure demand paging, pages are loaded into memory only when they are needed (i.e., when a page fault occurs).</li>
          <li>This method helps optimize memory usage by only loading pages that will actually be used, saving space and reducing overhead.</li>
          <li>The page is not loaded initially but fetched from the disk when a reference to the page is made.</li>
        </ul>
      </section>
    `},{id:39,title:"Swap Space",content:`
      <section>
        <h3>Swap Space</h3>
        <ul>
          <li>Swap space is an area on the hard disk or SSD used as virtual memory when the physical RAM is full.</li>
          <li>When the system runs out of RAM, pages that are not currently needed are swapped out to swap space to free up memory for other processes.</li>
          <li>It helps prevent system crashes due to running out of memory but accessing swap space is much slower than accessing RAM.</li>
        </ul>
      </section>
    `},{id:40,title:"What is Page Fault?",content:`
      <section>
        <h3>What is a Page Fault?</h3>
        <ul>
          <li>A page fault occurs when a program tries to access a page that is not currently loaded in memory.</li>
          <li>The operating system will then fetch the page from disk and load it into memory, which may result in slower performance due to disk access latency.</li>
          <li>Page faults are a normal part of the demand paging system, but frequent page faults can lead to performance degradation (thrashing).</li>
        </ul>
      </section>
    `},{id:41,title:"Frame Rate",content:`
      <section>
        <h3>Frame Rate</h3>
        <ul>
          <li>Frame rate refers to the number of frames (pages) that can be loaded into memory (or the number of page frames available for processes).</li>
          <li>The more frame rate available, the more pages can be loaded into memory, which can reduce page faults and improve system performance.</li>
          <li>However, increasing frame rate also requires more physical memory, which may not always be possible or cost-effective.</li>
        </ul>
      </section>
    `},{id:42,title:"Beladys Anomaly",content:`
      <section>
        <h3>Belady's Anomaly</h3>
        <ul>
          <li>Belady's Anomaly occurs when increasing the number of page frames in memory results in more page faults, rather than fewer.</li>
          <li>This is counterintuitive because we would expect that having more frames would decrease the number of page faults, but this anomaly can occur with certain page replacement algorithms (e.g., FIFO).</li>
          <li>It shows that the performance of page replacement algorithms may not always improve with more memory.</li>
        </ul>
      </section>
    `},{id:43,title:"Inverted Page Table",content:`
      <section>
        <h3>Inverted Page Table</h3>
        <ul>
          <li>An inverted page table is a type of page table where each entry represents a frame in physical memory, rather than a virtual page.</li>
          <li>This table contains a single entry for each frame in physical memory and maps it to the virtual address space that is currently occupying that frame.</li>
          <li>It reduces memory overhead compared to traditional page tables but may make address translation slower due to the need to search the table for each virtual page.</li>
        </ul>
      </section>
    `},{id:44,title:"Segmentation with Paging",content:`
      <section>
        <h3>Segmentation with Paging</h3>
        <ul>
          <li>Segmentation with paging is a memory management scheme that combines both segmentation and paging to address the limitations of each method.</li>
          <li>In this system, memory is divided into segments (logical units) and each segment is further divided into pages.</li>
          <li>This allows for both the benefits of logical division (segmentation) and efficient memory allocation (paging), providing more flexibility and efficient memory usage.</li>
        </ul>
      </section>
    `},{id:45,title:"What is Thrashing?",content:`
      <section>
        <h3>What is Thrashing?</h3>
        <ul>
          <li>Thrashing occurs when a system spends the majority of its time swapping data between memory and disk (swap space) rather than executing the processes themselves.</li>
          <li>This happens when there is not enough memory available to handle the running processes, leading to excessive page faults and the system being unable to perform useful work.</li>
          <li>Thrashing can cause a significant slowdown in performance and can result in the system becoming unresponsive.</li>
        </ul>
      </section>
    `},{id:46,title:"How to Prevent Thrashing",content:`
      <section>
        <h3>How to Prevent Thrashing</h3>
        <ul>
          <li>Ensure that the system has enough physical memory to handle the processes without excessive paging.</li>
          <li>Use effective page replacement algorithms that reduce page faults (e.g., LRU, Optimal Page Replacement).</li>
          <li>Implement working set models to keep track of the pages that are actively used and allocate resources accordingly.</li>
          <li>Limit the number of processes running simultaneously or prioritize critical processes to reduce contention for memory.</li>
          <li>Adjust the degree of multiprogramming (number of processes in memory) to ensure that the system doesn’t become overloaded.</li>
        </ul>
      </section>
    `},{id:47,title:"Local vs Global Page Replacement",content:`
      <section>
        <h3>Local vs Global Page Replacement</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>Local Page Replacement</th><th>Global Page Replacement</th></tr>
          </thead>
          <tbody>
            <tr><td>Each process is given a fixed number of pages in memory, and page replacement is confined to that process's pages.</td><td>Pages can be swapped out from any process in memory, and any process can be selected for page replacement.</td></tr>
            <tr><td>Prevents one process from affecting the memory allocation of others.</td><td>More flexible as it allows the system to use the total memory efficiently.</td></tr>
            <tr><td>May lead to more frequent page faults for individual processes if memory allocation is insufficient.</td><td>Can cause interference between processes, leading to increased page faults in some processes.</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:48,title:"Working Set Model",content:`
      <section>
        <h3>Working Set Model</h3>
        <ul>
          <li>The working set model is a concept used to predict the set of pages that a process is likely to use in the near future.</li>
          <li>It maintains a window of recently used pages, and the system ensures that these pages stay in memory to avoid page faults.</li>
          <li>By focusing on the working set, the system can reduce the likelihood of thrashing and improve performance.</li>
          <li>The size of the working set can be dynamically adjusted based on the behavior of the process.</li>
        </ul>
      </section>
    `},{id:49,title:"Locality of Reference",content:`
      <section>
        <h3>Locality of Reference</h3>
        <ul>
          <li>Locality of reference refers to the tendency of a program to access a small set of memory locations frequently within a short period.</li>
          <li>There are two types of locality of reference:
            <ul>
              <li><strong>Temporal Locality:</strong> Refers to the reuse of specific data or resources within a short time span (e.g., accessing the same variable multiple times).</li>
              <li><strong>Spatial Locality:</strong> Refers to the tendency of a process to access data in nearby memory locations (e.g., iterating through an array).</li>
            </ul>
          </li>
          <li>Exploiting locality of reference helps improve memory access performance, as frequently accessed data can be kept in faster, smaller memory caches.</li>
        </ul>
      </section>
    `},{id:50,title:"Can We Replace Physical Memory?",content:`
      <section>
        <h3>Can We Replace Physical Memory?</h3>
        <ul>
          <li>In most systems, physical memory (RAM) can be replaced if it fails or if you want to upgrade the system.</li>
          <li>However, physically replacing RAM is hardware-dependent. If the RAM is modular, like in personal computers, it is relatively easy to swap it out with more or better memory.</li>
          <li>In a server or specialized hardware environment, replacing memory is more complex and may require specific configurations or even downtime for the system.</li>
          <li>Replacing physical memory does not affect how the system operates with virtual memory, as virtual memory is a software abstraction that uses disk space when physical memory is exhausted.</li>
        </ul>
      </section>
    `},{id:51,title:"Virtual vs Physical Memory Performance",content:`
      <section>
        <h3>Virtual vs Physical Memory Performance</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>Virtual Memory</th><th>Physical Memory</th></tr>
          </thead>
          <tbody>
            <tr><td>Virtual memory uses disk space to simulate additional memory, extending the physical memory.</td><td>Physical memory refers to the actual RAM installed in the system, which is much faster than virtual memory.</td></tr>
            <tr><td>Performance may degrade when virtual memory is used heavily, as accessing the disk (swap space) is much slower than accessing RAM.</td><td>Physical memory provides fast access speeds and is essential for smooth system performance.</td></tr>
            <tr><td>Virtual memory allows systems to run programs larger than the available physical memory by swapping data in and out of RAM.</td><td>Physical memory is limited by the amount of installed RAM, and once it is full, the system must rely on slower virtual memory.</td></tr>
            <tr><td>Excessive use of virtual memory can lead to thrashing, where the system spends more time swapping than performing useful tasks.</td><td>Physical memory avoids thrashing but may become fully utilized if too many processes are running simultaneously.</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:1,title:"File System Basics",content:`
      <section>
        <h3>File System Fundamentals</h3>
        <ul>
          <li><strong>Definition:</strong> The method and data structures an OS uses to organize files on storage devices</li>
          <li><strong>Key Components:</strong>
            <table border="1" cellpadding="6" cellspacing="0">
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Files</strong></td>
                  <td>Basic unit of storage (data, programs, directories)</td>
                </tr>
                <tr>
                  <td><strong>Directories</strong></td>
                  <td>Hierarchical organization structure</td>
                </tr>
                <tr>
                  <td><strong>Metadata</strong></td>
                  <td>Information about files (size, permissions, timestamps)</td>
                </tr>
                <tr>
                  <td><strong>Storage Blocks</strong></td>
                  <td>Physical allocation units on disk</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li><strong>Common Operations:</strong>
            <ul>
              <li>create(), open(), read(), write(), seek(), close(), delete()</li>
              <li>Permission management (chmod, ACLs)</li>
              <li>Space allocation and deallocation</li>
            </ul>
          </li>
          <li><strong>File Types:</strong>
            <ul>
              <li>Regular files (text, binary)</li>
              <li>Directories</li>
              <li>Special files (device files, named pipes)</li>
              <li>Symbolic/hard links</li>
            </ul>
          </li>
        </ul>
      </section>
    `},{id:2,title:"Inode Structure (Linux/Unix)",content:`
      <section>
        <h3>Inode Architecture</h3>
        <ul>
          <li><strong>Definition:</strong> Index node - a data structure storing file metadata and block pointers</li>
          <li><strong>Key Contents:</strong>
            <table border="1" cellpadding="6" cellspacing="0">
              <thead>
                <tr>
                  <th>Field</th>
                  <th>Description</th>
                  <th>Size (Typical)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>File type/permissions</td>
                  <td>Regular file, directory, symlink, etc.</td>
                  <td>2 bytes</td>
                </tr>
                <tr>
                  <td>Owner UID/GID</td>
                  <td>User and group ownership</td>
                  <td>4 bytes each</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>File size in bytes</td>
                  <td>8 bytes</td>
                </tr>
                <tr>
                  <td>Timestamps</td>
                  <td>Creation, modification, access times</td>
                  <td>12 bytes each</td>
                </tr>
                <tr>
                  <td>Block pointers</td>
                  <td>Direct, indirect, double-indirect references</td>
                  <td>60 bytes (ext4)</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li><strong>Block Pointer Structure (ext4):</strong>
            <ul>
              <li>12 Direct pointers (to data blocks)</li>
              <li>1 Single indirect pointer (to block of pointers)</li>
              <li>1 Double indirect pointer (to blocks of pointers)</li>
              <li>1 Triple indirect pointer (for huge files)</li>
            </ul>
          </li>
          <li><strong>Key Commands:</strong>
            <ul>
              <li><code>ls -i</code> - View inode numbers</li>
              <li><code>stat filename</code> - Show inode details</li>
              <li><code>df -i</code> - Check inode usage</li>
            </ul>
          </li>
        </ul>
      </section>
    `},{id:3,title:"File Allocation Methods",content:`
      <section>
        <h3>File Allocation Techniques</h3>
        <ul>
          <li><strong>Contiguous Allocation:</strong>
            <ul>
              <li><strong>Description:</strong> Files are stored in consecutive disk blocks</li>
              <li><strong>Advantages:</strong> 
                <ul>
                  <li>Fast sequential access</li>
                  <li>Simple to implement</li>
                </ul>
              </li>
              <li><strong>Disadvantages:</strong> 
                <ul>
                  <li>External fragmentation</li>
                  <li>Difficult to grow files dynamically</li>
                </ul>
              </li>
              <li><strong>Usage:</strong> CD-ROMs, some database systems</li>
            </ul>
          </li>
  
          <li><strong>Linked List Allocation:</strong>
            <ul>
              <li><strong>Description:</strong> Disk blocks are linked together using pointers (e.g., FAT file systems)</li>
              <li><strong>Advantages:</strong> 
                <ul>
                  <li>No external fragmentation</li>
                  <li>Easy to grow files</li>
                </ul>
              </li>
              <li><strong>Disadvantages:</strong> 
                <ul>
                  <li>Slow random access</li>
                  <li>Pointer storage overhead</li>
                </ul>
              </li>
              <li><strong>Usage:</strong> FAT file systems</li>
            </ul>
          </li>
  
          <li><strong>Indexed Allocation:</strong>
            <ul>
              <li><strong>Description:</strong> Each file has an index block containing pointers to its data blocks</li>
              <li><strong>Advantages:</strong> 
                <ul>
                  <li>Fast random access</li>
                  <li>No external fragmentation</li>
                </ul>
              </li>
              <li><strong>Disadvantages:</strong> 
                <ul>
                  <li>Overhead of maintaining index block</li>
                  <li>Handling very large files is complex</li>
                </ul>
              </li>
              <li><strong>Usage:</strong> Unix/Linux file systems (inodes)</li>
            </ul>
          </li>
  
          <li><strong>Extent-Based Allocation:</strong>
            <ul>
              <li><strong>Description:</strong> Combines contiguous chunks (extents) with indexing</li>
              <li><strong>Advantages:</strong> 
                <ul>
                  <li>Efficient for large files</li>
                  <li>Reduced metadata requirements</li>
                </ul>
              </li>
              <li><strong>Disadvantages:</strong> 
                <ul>
                  <li>Internal fragmentation</li>
                </ul>
              </li>
              <li><strong>Usage:</strong> NTFS, ext4 file systems</li>
            </ul>
          </li>
        </ul>
  
        <h4>Performance Comparison</h4>
        <ul>
          <li><strong>Sequential Access Speed:</strong> Contiguous > Extent > Linked > Indexed</li>
          <li><strong>Random Access Speed:</strong> Indexed > Extent > Linked > Contiguous</li>
          <li><strong>Storage Efficiency:</strong> Linked > Indexed > Extent > Contiguous</li>
        </ul>
      </section>
    `},{id:1,title:"Contiguous File Allocation",content:`
      <section>
        <h3>Contiguous File Allocation</h3>
        <ul>
          <li>In contiguous file allocation, each file is stored as a contiguous block of space on the disk.</li>
          <li>The operating system allocates a set of contiguous disk blocks to store the entire file.</li>
          <li>This method is simple to implement and provides fast access as it minimizes the disk seeks required to read a file.</li>
          <li>However, it suffers from fragmentation issues, both internal (unused space within a block) and external (insufficient contiguous free space).</li>
          <li>File growth is also limited, as there may not be enough contiguous space available to expand the file.</li>
        </ul>
      </section>
    `},{id:2,title:"Linked File Allocation",content:`
      <section>
        <h3>Linked File Allocation</h3>
        <ul>
          <li>In linked file allocation, files are stored in linked lists of disk blocks, where each block contains a pointer to the next block.</li>
          <li>This eliminates the need for contiguous space, and files can be scattered across the disk.</li>
          <li>The main advantage is flexibility, as files can grow without the need for contiguous free space.</li>
          <li>However, accessing a file involves following pointers, which can lead to slower access times compared to contiguous allocation due to disk seek time.</li>
          <li>It also requires extra space for storing pointers in each block.</li>
        </ul>
      </section>
    `},{id:3,title:"Indexed File Allocation",content:`
      <section>
        <h3>Indexed File Allocation</h3>
        <ul>
          <li>Indexed file allocation stores a special index block that contains pointers to all the disk blocks used by the file.</li>
          <li>This method combines the advantages of contiguous and linked allocation by allowing non-contiguous storage while providing efficient direct access to any part of the file.</li>
          <li>It avoids fragmentation issues since files can be scattered across the disk, but the index block requires additional storage.</li>
          <li>Access times are faster than linked allocation since the index block allows direct access to file blocks.</li>
          <li>A downside is that if the index block becomes too large, it may require multiple index blocks or additional storage management techniques (e.g., multi-level indexing).</li>
        </ul>
      </section>
    `},{id:1,title:"File System examples FAT32 NTFS ext4",content:`
      <section>
        <h3>File System Examples</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>File System</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>FAT32</strong></td><td>A widely-used file system for storage devices like USB drives and external hard drives. It supports large volumes but has limitations with file sizes (max 4GB).</td></tr>
            <tr><td><strong>NTFS</strong></td><td>The default file system for Windows. It supports large files, file permissions, and advanced features like compression and encryption.</td></tr>
            <tr><td><strong>ext4</strong></td><td>Used by Linux-based systems, ext4 is known for its performance, scalability, and support for large files. It offers journaling and better reliability than its predecessors (ext3, ext2).</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:2,title:"Journaling File Systems",content:`
      <section>
        <h3>Journaling File Systems</h3>
        <ul>
          <li>A journaling file system records changes to a log (journal) before applying them to the file system. This helps protect data integrity and makes recovery faster in case of crashes.</li>
          <li>Common examples include ext4, NTFS, and XFS.</li>
          <li>When a system crashes, the file system can replay the journal to restore the file system to a consistent state.</li>
          <li>Journaling helps avoid file system corruption and reduces the need for file system checks after an unexpected shutdown.</li>
          <li>There are different types of journaling, such as:
            <ul>
              <li><strong>Writeback:</strong> Only metadata is journaled, providing faster performance but less protection against corruption.</li>
              <li><strong>Ordered:</strong> Ensures metadata is written before file data, improving consistency.</li>
              <li><strong>Full:</strong> Journals both metadata and file data, offering the highest level of data protection but with a performance cost.</li>
            </ul>
          </li>
        </ul>
      </section>
    `},{id:3,title:"Mounting vs Unmounting",content:`
      <section>
        <h3>Mounting and Unmounting</h3>
        <ul>
          <li><strong>Mounting:</strong> The process of making a storage device (like a hard drive, USB drive, or network share) accessible by the operating system. It involves associating a device or partition with a directory (mount point) in the file system.</li>
          <li>In Linux, the <code>mount</code> command is used, and in Windows, drives are automatically mounted with a letter (e.g., C:, D:).</li>
          <li><strong>Unmounting:</strong> The process of safely disconnecting a storage device from the system to ensure that all data is written to the device and the device is no longer in use. This prevents data corruption.</li>
          <li>In Linux, the <code>umount</code> command is used to unmount, and in Windows, you can eject drives from File Explorer or use the "Safely Remove Hardware" option.</li>
          <li>It's important to unmount a device properly before removing it to avoid data loss or corruption.</li>
        </ul>
      </section>
    `},{id:1,title:"I/O Hardware Basics",content:`
      <section>
        <h3>I/O Hardware Basics</h3>
        <ul>
          <li><strong>Input Devices:</strong> Devices used to send data to the computer (e.g., keyboard, mouse, scanner).</li>
          <li><strong>Output Devices:</strong> Devices that receive and display data from the computer (e.g., monitors, printers, speakers).</li>
          <li><strong>Interfaces:</strong> Hardware that allows communication between the computer and external devices, such as USB, PCI, and parallel/serial ports.</li>
          <li><strong>Ports:</strong> Physical or virtual connections for data transfer, such as USB, HDMI, or Ethernet ports.</li>
          <li><strong>Controller:</strong> A hardware component that manages the communication between the computer’s processor and I/O devices.</li>
        </ul>
      </section>
    `},{id:2,title:"DMA (Direct Memory Access)",content:`
      <section>
        <h3>DMA (Direct Memory Access)</h3>
        <ul>
          <li><strong>Definition:</strong> DMA is a method of transferring data directly between memory and I/O devices without involving the CPU, improving performance.</li>
          <li><strong>How it Works:</strong> DMA allows peripherals to communicate with system memory without CPU intervention. The CPU configures the DMA controller and then lets it transfer data independently.</li>
          <li><strong>Benefits:</strong>
            <ul>
              <li>Reduces CPU workload, allowing the CPU to focus on other tasks.</li>
              <li>Improves data transfer speed for large data sets, like disk or network operations.</li>
            </ul>
          </li>
          <li><strong>Types of DMA:</strong>
            <ul>
              <li><strong>Burst Mode:</strong> DMA transfers data in bursts, with the CPU disabled during each burst.</li>
              <li><strong>Cycle Stealing Mode:</strong> DMA transfers one word of data at a time, allowing the CPU to regain control between transfers.</li>
              <li><strong>Block Mode:</strong> DMA transfers data in blocks, with the CPU only gaining control once the entire block has been transferred.</li>
            </ul>
          </li>
        </ul>
      </section>
    `},{id:3,title:"Interrupt Driven vs Programmed I/O",content:`
      <section>
        <h3>Interrupt Driven I/O vs Programmed I/O</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>Interrupt Driven I/O</th><th>Programmed I/O</th></tr>
          </thead>
          <tbody>
            <tr><td>Interrupt driven I/O involves CPU being interrupted to handle I/O operations when needed</td><td>Programmed I/O involves CPU actively monitoring and managing I/O operations</td></tr>
            <tr><td>Interrupt driven I/O is more efficient, as the CPU can perform other tasks until interrupted</td><td>Programmed I/O is less efficient, as the CPU continuously checks and manages I/O</td></tr>
            <tr><td>Interrupt driven I/O transfers data when the I/O device signals completion via an interrupt</td><td>Programmed I/O transfers data through constant polling by the CPU</td></tr>
            <tr><td>Interrupt driven I/O is typically faster, as the CPU is less involved</td><td>Programmed I/O is slower, due to constant polling and CPU intervention</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:4,title:"Polling vs Interrupts",content:`
      <section>
        <h3>Polling vs Interrupts</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>Polling</th><th>Interrupts</th></tr>
          </thead>
          <tbody>
            <tr><td>Polling is a method where the CPU repeatedly checks the status of a device</td><td>Interrupts are events triggered by I/O devices to alert the CPU of the need for service</td></tr>
            <tr><td>Polling is less efficient as the CPU continuously checks devices even if there is no activity</td><td>Interrupts are more efficient as the CPU only responds when an interrupt occurs, freeing it up for other tasks</td></tr>
            <tr><td>Polling is slower as the CPU must check periodically</td><td>Interrupts are faster as the CPU is immediately notified when attention is needed</td></tr>
            <tr><td>Polling is simpler, but less efficient for devices with intermittent use</td><td>Interrupts are more complex as it requires managing interrupts and context switching</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:5,title:"Buffering vs Spooling",content:`
      <section>
        <h3>Buffering and Spooling</h3>
        <ul>
          <li><strong>Buffering:</strong> Buffering is the process of temporarily storing data in memory (a buffer) to allow continuous data processing. It helps smooth out fluctuations in data transfer rates between I/O devices and the CPU.</li>
          <li><strong>Spooling:</strong> Spooling (Simultaneous Peripheral Operations On-Line) is the process of sending data to a buffer (typically a disk) for deferred processing, usually used for tasks like printing. It allows the CPU to continue working while I/O operations are processed in the background.</li>
          <li><strong>Difference:</strong> Buffering handles the immediate needs of I/O devices, while spooling handles long-term tasks by storing data for later processing.</li>
          <li><strong>Use Case:</strong> Buffering is used in streaming media, while spooling is common in printing and queuing systems.</li>
        </ul>
      </section>
    `},{id:1,title:"Protection vs Security",content:`
      <section>
        <h3>Protection vs Security</h3>
        <ul>
          <li><strong>Protection:</strong> Refers to mechanisms designed to ensure that a system's resources are used only by authorized users and that they are protected from harm or misuse. It is often enforced by the operating system through access control mechanisms like user permissions, file access control, and memory protection.</li>
          <li><strong>Security:</strong> Refers to the measures taken to guard against unauthorized access, attacks, or damage to the system. This involves both protecting against external threats (e.g., hackers) and ensuring system integrity, data confidentiality, and availability.</li>
          <li><strong>Key Difference:</strong> Protection ensures that resources are used only by authorized parties and prevents misuse, while security focuses on preventing threats and attacks to preserve the system's confidentiality, integrity, and availability.</li>
        </ul>
      </section>
    `},{id:2,title:"Access Matrix",content:`
      <section>
        <h3>Access Matrix</h3>
        <ul>
          <li><strong>Definition:</strong> An access matrix is a conceptual model used to define the access rights of users or processes to different system resources. It is represented as a table, where rows represent subjects (users or processes) and columns represent objects (files, devices, etc.). Each cell in the table specifies the type of access a subject has to an object.</li>
          <li><strong>Access Types:</strong> The matrix can include various access rights, such as read, write, execute, or delete, for each object.</li>
          <li><strong>Example:</strong>
            <ul>
              <li><strong>Subject/User:</strong> Alice, Bob, Charlie</li>
              <li><strong>Object/File:</strong> File1, File2</li>
              <li><strong>Matrix:</strong>
                <pre>
                |         | File1 | File2 |
                |---------|-------|-------|
                | Alice   | R/W   | R     |
                | Bob     | R     | R/W   |
                | Charlie |       | R     |
                </pre>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    `},{id:3,title:"Access Control Lists (ACL)",content:`
      <section>
        <h3>Access Control Lists (ACL)</h3>
        <ul>
          <li><strong>Definition:</strong> An Access Control List (ACL) is a list of rules associated with a particular object, specifying which users or groups have access to the object and what type of operations (e.g., read, write, execute) they can perform on it.</li>
          <li><strong>Structure:</strong> Each entry in the ACL typically includes a subject (user or group) and the allowed or denied operations on the object.</li>
          <li><strong>Example:</strong>
            <pre>
            File1:
            Alice: Read, Write
            Bob: Read
            Charlie: None
            </pre>
          </li>
          <li><strong>Types:</strong> ACLs can be implemented on files, directories, network devices, and other system resources.</li>
        </ul>
      </section>
    `},{id:4,title:"Authentication vs Authorization",content:`
      <section>
        <h3>Authentication vs Authorization</h3>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead>
            <tr><th>Aspect</th><th>Authentication</th><th>Authorization</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Definition</strong></td><td>Authentication is the process of verifying the identity of a user or system.</td><td>Authorization is the process of granting or denying access to specific resources based on the identity verified in authentication.</td></tr>
            <tr><td><strong>Purpose</strong></td><td>To confirm that a user is who they claim to be.</td><td>To determine whether the authenticated user has the rights to perform certain actions.</td></tr>
            <tr><td><strong>Process</strong></td><td>Involves credentials (username/password, biometric data, etc.) to confirm identity.</td><td>Involves checking access controls like ACLs or roles to determine allowed actions.</td></tr>
            <tr><td><strong>Example</strong></td><td>Logging in with a username and password.</td><td>Allowing or denying access to a file based on the user’s role.</td></tr>
          </tbody>
        </table>
      </section>
    `},{id:5,title:"Password Management",content:`
      <section>
        <h3>Password Management</h3>
        <ul>
          <li><strong>Definition:</strong> Password management refers to the processes and tools used to create, store, and manage passwords securely.</li>
          <li><strong>Best Practices:</strong>
            <ul>
              <li>Use strong, unique passwords for each account.</li>
              <li>Enable multi-factor authentication (MFA) for an added layer of security.</li>
              <li>Use password managers to securely store and generate passwords.</li>
              <li>Regularly update passwords and avoid reusing them across different sites.</li>
            </ul>
          </li>
          <li><strong>Password Policies:</strong> Organizations may enforce password policies requiring specific characteristics, such as minimum length, complexity (mix of characters), and expiration dates.</li>
        </ul>
      </section>
    `},{id:6,title:"Shadow Passwords",content:`
      <section>
        <h3>Shadow Passwords</h3>
        <ul>
          <li><strong>Definition:</strong> Shadow passwords are a way of storing user passwords securely by keeping them in a separate file (shadow file) that is accessible only to privileged users. The actual password is stored in an encrypted form, typically using a one-way hashing algorithm.</li>
          <li><strong>How it Works:</strong> The system stores a hashed version of the password in the shadow file. When a user attempts to log in, the system hashes the entered password and compares it to the hashed value stored in the shadow file.</li>
          <li><strong>Advantages:</strong>
            <ul>
              <li>Improved security as passwords are not stored in plaintext.</li>
              <li>Access to the shadow file is restricted to authorized users (typically root).</li>
            </ul>
          </li>
        </ul>
      </section>
    `},{id:1,title:"Multicore Systems and Challenges",content:`
      <section>
        <h3>Multicore Systems and Challenges</h3>
        <ul>
          <li><strong>Multicore Systems:</strong> These systems have multiple processing units (cores) integrated into a single chip. Each core can execute instructions independently, allowing for parallel processing, improved performance, and better resource utilization.</li>
          <li><strong>Challenges:</strong>
            <ul>
              <li><strong>Load Balancing:</strong> Efficiently distributing tasks across cores can be complex, as each core may have varying computational loads.</li>
              <li><strong>Memory Sharing:</strong> Ensuring efficient access to shared memory among cores while avoiding contention and delays.</li>
              <li><strong>Concurrency Issues:</strong> Managing concurrent execution and synchronization between cores can lead to challenges such as race conditions and deadlocks.</li>
              <li><strong>Software Optimization:</strong> Not all software is optimized to take advantage of multiple cores, which may lead to suboptimal performance.</li>
            </ul>
          </li>
        </ul>
      </section>
    `},{id:2,title:"NUMA Non Uniform Memory Access",content:`
      <section>
        <h3>NUMA (Non-Uniform Memory Access)</h3>
        <ul>
          <li><strong>Definition:</strong> NUMA is a memory architecture in which the time taken to access memory varies depending on the memory location relative to a processor. In NUMA systems, each processor has local memory, but can also access the memory of other processors, though with higher latency.</li>
          <li><strong>Advantages:</strong>
            <ul>
              <li>Improved scalability and performance in large systems due to local memory access being faster than remote memory access.</li>
              <li>Efficient resource utilization in multicore systems, allowing for optimal memory distribution across processors.</li>
            </ul>
          </li>
          <li><strong>Challenges:</strong>
            <ul>
              <li><strong>Memory Access Latency:</strong> Remote memory access has higher latency compared to local memory, which can degrade performance.</li>
              <li><strong>Operating System Complexity:</strong> The OS must manage NUMA-specific memory policies to ensure optimal memory distribution across processors.</li>
            </ul>
          </li>
        </ul>
      </section>
    `},{id:3,title:"Virtualization Support by OS",content:`
      <section>
        <h3>Virtualization Support by OS</h3>
        <ul>
          <li><strong>Definition:</strong> Virtualization support by the operating system enables the OS to run multiple virtual machines (VMs) on a physical machine. It allows for resource isolation, efficient resource management, and the ability to run different operating systems on the same hardware.</li>
          <li><strong>Key Functions:</strong>
            <ul>
              <li><strong>Resource Allocation:</strong> The OS allocates CPU, memory, and storage resources to virtual machines, ensuring they are isolated and managed independently.</li>
              <li><strong>Isolation:</strong> The OS provides isolation between VMs to prevent one VM from affecting the performance or security of another.</li>
              <li><strong>Scheduling:</strong> The OS schedules virtual machine processes, ensuring that they get fair access to hardware resources.</li>
            </ul>
          </li>
          <li><strong>Types of Virtualization:</strong>
            <ul>
              <li><strong>Full Virtualization:</strong> The OS allows VMs to run completely independent of the underlying hardware, often requiring a hypervisor.</li>
              <li><strong>Paravirtualization:</strong> The OS works in conjunction with the hypervisor to provide virtualization with improved performance but requires modifications to the guest operating system.</li>
            </ul>
          </li>
        </ul>
      </section>
    `},{id:4,title:"Hypervisor Types",content:`
      <section>
        <h3>Hypervisor Types</h3>
        <ul>
          <li><strong>Type 1 (Bare Metal):</strong>
            <ul>
              <li><strong>Definition:</strong> A Type 1 hypervisor runs directly on the physical hardware without the need for an underlying operating system. It has direct access to system resources and is more efficient than Type 2 hypervisors.</li>
              <li><strong>Advantages:</strong>
                <ul>
                  <li>Better performance due to direct access to hardware resources.</li>
                  <li>Higher security as it operates at a lower level without the dependencies of an operating system.</li>
                  <li>Ideal for large-scale virtualization environments like data centers.</li>
                </ul>
              </li>
              <li><strong>Example:</strong> VMware ESXi, Microsoft Hyper-V, Xen.</li>
            </ul>
          </li>
          <li><strong>Type 2 (Hosted):</strong>
            <ul>
              <li><strong>Definition:</strong> A Type 2 hypervisor runs on top of an existing operating system. It requires the host OS to manage hardware resources, and as a result, it has slightly lower performance compared to Type 1 hypervisors.</li>
              <li><strong>Advantages:</strong>
                <ul>
                  <li>Easier to set up and use since it operates within an existing OS.</li>
                  <li>More flexible for personal or development environments.</li>
                </ul>
              </li>
              <li><strong>Example:</strong> VirtualBox, VMware Workstation, Parallels Desktop.</li>
            </ul>
          </li>
        </ul>
      </section>
    `},{id:1,title:"What is a Distributed OS?",content:`
      <section>
        <h3>What is a Distributed OS?</h3>
        <ul>
          <li><strong>Definition:</strong> A Distributed Operating System (DOS) is a system that manages a collection of independent computers and makes them appear as a single coherent system to the users and applications. The goal of a Distributed OS is to provide transparency, resource sharing, and fault tolerance across a network of interconnected machines.</li>
          <li><strong>Key Features:</strong>
            <ul>
              <li><strong>Transparency:</strong> The system hides the complexity of the underlying distributed hardware, making it appear as a single entity to the user.</li>
              <li><strong>Resource Sharing:</strong> Resources such as CPU, memory, and storage can be shared across different machines within the network.</li>
              <li><strong>Fault Tolerance:</strong> The system is designed to handle hardware or software failures gracefully without affecting the overall functioning of the system.</li>
              <li><strong>Scalability:</strong> It can scale easily by adding more machines to the network without disrupting the system's performance.</li>
            </ul>
          </li>
          <li><strong>Examples:</strong> Examples of distributed operating systems include Google’s Fuchsia, Hadoop, and PlanetLab.</li>
        </ul>
      </section>
    `},{id:2,title:"Remote Procedure Call (RPC)",content:`
      <section>
        <h3>Remote Procedure Call (RPC)</h3>
        <ul>
          <li><strong>Definition:</strong> A Remote Procedure Call (RPC) is a protocol that allows a program to execute a procedure (subroutine) on a remote machine as if it were a local call. The procedure call is initiated by the client, and the server handles the execution of the procedure on the remote machine, returning the result to the client.</li>
          <li><strong>How it Works:</strong>
            <ul>
              <li>The client sends a request to the server for a procedure to execute, along with any necessary parameters.</li>
              <li>The server processes the request, executes the procedure, and sends the result back to the client.</li>
              <li>The underlying system handles the complexities of communication, such as data serialization, network management, and error handling.</li>
            </ul>
          </li>
          <li><strong>Advantages:</strong>
            <ul>
              <li>It abstracts the details of network communication, allowing developers to focus on higher-level functionality.</li>
              <li>RPC allows easy communication between distributed systems, making it ideal for client-server applications and microservices architectures.</li>
            </ul>
          </li>
          <li><strong>Examples:</strong> RPC is commonly used in frameworks like gRPC (Google Remote Procedure Call) and XML-RPC.</li>
        </ul>
      </section>
    `},{id:3,title:"Examples of Distributed OS",content:`
      <section>
        <h3>Examples of Distributed OS</h3>
        <ul>
          <li><strong>Google Fuchsia:</strong> A modern, open-source operating system designed for a wide variety of devices. It supports distributed computing environments and provides resource management across devices.</li>
          <li><strong>Hadoop:</strong> Primarily used for big data processing, Hadoop enables distributed storage and processing of large datasets across multiple nodes in a cluster. It allows for fault tolerance, scalability, and resource sharing.</li>
          <li><strong>PlanetLab:</strong> A global research network that enables the development and deployment of distributed applications. It allows for distributed computing experiments, providing a platform for research in areas like networking and large-scale systems.</li>
          <li><strong>CORD (Central Office Re-architected as a Data Center):</strong> A distributed operating system developed for the telecom industry, designed to support flexible, scalable network architectures and applications.</li>
          <li><strong>Microkernel-based Distributed OS:</strong> Systems like L4 microkernel and QNX, which focus on minimal kernel design and allow for distributing processing workloads across multiple systems.</li>
        </ul>
      </section>
    `},{id:"q127",title:"Runnable vs Callable",content:`
      <h2>What is the Difference Between Runnable and Callable?</h2>
      
      <h3>Runnable:</h3>
      <ul>
        <li><b>Interface:</b> Runnable is an interface in Java used to define a task that can be executed by a thread.</li>
        <li><b>Return Type:</b> Runnable does not return any result. Its <code>run()</code> method has no return value (void).</li>
        <li><b>Exception Handling:</b> Runnable cannot throw any checked exceptions. If a checked exception occurs, it must be handled within the <code>run()</code> method.</li>
        <li><b>Usage:</b> Runnable is used when you don’t care about the result of the task and are only interested in executing some logic asynchronously.</li>
        <li><b>Example:</b></li>
        <pre><code>Runnable task = () -> { System.out.println("Task is running!"); };
        Thread thread = new Thread(task);
        thread.start();</code></pre>
      </ul>
      
      <h3>Callable:</h3>
      <ul>
        <li><b>Interface:</b> Callable is also an interface, similar to Runnable, but with the ability to return a result.</li>
        <li><b>Return Type:</b> Callable’s <code>call()</code> method returns a result of type <code>V</code> (any object) and can throw exceptions.</li>
        <li><b>Exception Handling:</b> Callable can throw checked exceptions, allowing you to handle errors more explicitly.</li>
        <li><b>Usage:</b> Callable is ideal when you need to perform a task that returns a result or throws an exception.</li>
        <li><b>Example:</b></li>
        <pre><code>Callable<Integer> task = () -> { return 10 * 2; };
        ExecutorService executor = Executors.newFixedThreadPool(1);
        Future<Integer> result = executor.submit(task);
        System.out.println(result.get());  // Output: 20</code></pre>
      </ul>
    `},{id:"q128",title:"Fail Fast vs Fail Safe",content:`
      <h2>What is the Difference Between Fail-Fast and Fail-Safe?</h2>
      
      <h3>Fail-Fast:</h3>
      <ul>
        <li><b>Definition:</b> A fail-fast system immediately throws an error when it detects an invalid state or failure in the process. The goal is to prevent the system from continuing in an erroneous state.</li>
        <li><b>Behavior:</b> When an error is detected, it stops the operation immediately and throws an exception.</li>
        <li><b>Example:</b> If you try to access an invalid element in a collection like a <code>List</code>, it throws an <code>IndexOutOfBoundsException</code> right away.</li>
        <li><b>Advantage:</b> It prevents the system from processing incorrect data and helps with faster debugging.</li>
        <li><b>Example Code:</b></li>
        <pre><code>List<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.get(3);  // Throws IndexOutOfBoundsException immediately</code></pre>
      </ul>
      
      <h3>Fail-Safe:</h3>
      <ul>
        <li><b>Definition:</b> A fail-safe system continues its operations even when a failure is detected, ensuring that the system doesn’t crash. Fail-safe systems usually provide default values or handle the error gracefully.</li>
        <li><b>Behavior:</b> It prevents the system from crashing by using mechanisms like default values or error handling, allowing it to continue running.</li>
        <li><b>Example:</b> A fail-safe iterator allows modifications to the collection during iteration without throwing errors.</li>
        <li><b>Advantage:</b> It ensures that the application keeps running smoothly, even if an error occurs in one part.</li>
        <li><b>Example Code:</b></li>
        <pre><code>List<Integer> list = new CopyOnWriteArrayList<>();
        list.add(1);
        list.add(2);
        Iterator<Integer> iterator = list.iterator();
        list.add(3);  // No error, collection is safely modified during iteration
        while(iterator.hasNext()) {
            System.out.println(iterator.next());
        }</code></pre>
      </ul>
      
      <h3>Key Differences:</h3>
      <ul>
        <li><b>Fail-Fast:</b> Stops immediately on error, usually by throwing exceptions.</li>
        <li><b>Fail-Safe:</b> Continues running even when errors are detected, often by using safeguards like fallback or default behavior.</li>
      </ul>
    `}],my=()=>B.jsx(gt,{links:py}),Qa=kt.createContext(),hn=["/ad","/","/network","/virtualization","/backup","/security","/python","/scripting","/monitoring","/cloud","/docker","/tools","/itil","/os"],gy=()=>{const[r,l]=A.useState(""),a=Ii(),c=Id();return A.useEffect(()=>{const d=h=>{const m=hn.indexOf(a.pathname);if(h.key==="Tab")if(h.preventDefault(),h.shiftKey){const w=(m-1+hn.length)%hn.length;c(hn[w])}else{const w=(m+1)%hn.length;c(hn[w])}};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[a,c]),B.jsxs(Qa.Provider,{value:{searchQuery:r,setSearchQuery:l},children:[B.jsx(mf,{}),B.jsxs(Nm,{children:[B.jsx(rt,{path:"/",element:B.jsx(pd,{})}),B.jsx(rt,{path:"/virtualization",element:B.jsx(_f,{})}),B.jsx(rt,{path:"/network",element:B.jsx(ay,{})}),B.jsx(rt,{path:"/ad",element:B.jsx(iy,{})}),B.jsx(rt,{path:"/backup",element:B.jsx(ey,{})}),B.jsx(rt,{path:"/security",element:B.jsx(ry,{})}),B.jsx(rt,{path:"/scripting",element:B.jsx(uy,{})}),B.jsx(rt,{path:"/monitoring",element:B.jsx(hy,{})}),B.jsx(rt,{path:"/cloud",element:B.jsx(zf,{})}),B.jsx(rt,{path:"/docker",element:B.jsx(Nf,{})}),B.jsx(rt,{path:"/tools",element:B.jsx($f,{})}),B.jsx(rt,{path:"/itil",element:B.jsx(Bf,{})}),B.jsx(rt,{path:"/python",element:B.jsx(Jf,{})}),B.jsx(rt,{path:"/os",element:B.jsx(my,{})}),B.jsx(rt,{path:"*",element:B.jsx(pd,{})})]})]})},fy=()=>B.jsx(ug,{children:B.jsx(gy,{})}),yy=()=>B.jsx(B.Fragment,{children:B.jsx(fy,{})});Qp.createRoot(document.getElementById("root")).render(B.jsx(A.StrictMode,{children:B.jsx(yy,{})}));
