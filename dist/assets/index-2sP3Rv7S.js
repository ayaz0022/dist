(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function o(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(u){if(u.ep)return;u.ep=!0;const d=o(u);fetch(u.href,d)}})();function wh(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var tl={exports:{}},fr={},il={exports:{}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function gg(){if(Ed)return ge;Ed=1;var n=Symbol.for("react.element"),s=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),I=Symbol.iterator;function E(P){return P===null||typeof P!="object"?null:(P=I&&P[I]||P["@@iterator"],typeof P=="function"?P:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,b={};function x(P,D,j){this.props=P,this.context=D,this.refs=b,this.updater=j||_}x.prototype.isReactComponent={},x.prototype.setState=function(P,D){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,D,"setState")},x.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function L(){}L.prototype=x.prototype;function F(P,D,j){this.props=P,this.context=D,this.refs=b,this.updater=j||_}var H=F.prototype=new L;H.constructor=F,v(H,x.prototype),H.isPureReactComponent=!0;var G=Array.isArray,U=Object.prototype.hasOwnProperty,se={current:null},pe={key:!0,ref:!0,__self:!0,__source:!0};function me(P,D,j){var q,Q={},C=null,ie=null;if(D!=null)for(q in D.ref!==void 0&&(ie=D.ref),D.key!==void 0&&(C=""+D.key),D)U.call(D,q)&&!pe.hasOwnProperty(q)&&(Q[q]=D[q]);var z=arguments.length-2;if(z===1)Q.children=j;else if(1<z){for(var ae=Array(z),ue=0;ue<z;ue++)ae[ue]=arguments[ue+2];Q.children=ae}if(P&&P.defaultProps)for(q in z=P.defaultProps,z)Q[q]===void 0&&(Q[q]=z[q]);return{$$typeof:n,type:P,key:C,ref:ie,props:Q,_owner:se.current}}function fe(P,D){return{$$typeof:n,type:P.type,key:D,ref:P.ref,props:P.props,_owner:P._owner}}function Ce(P){return typeof P=="object"&&P!==null&&P.$$typeof===n}function it(P){var D={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(j){return D[j]})}var Me=/\/+/g;function Ee(P,D){return typeof P=="object"&&P!==null&&P.key!=null?it(""+P.key):D.toString(36)}function ze(P,D,j,q,Q){var C=typeof P;(C==="undefined"||C==="boolean")&&(P=null);var ie=!1;if(P===null)ie=!0;else switch(C){case"string":case"number":ie=!0;break;case"object":switch(P.$$typeof){case n:case s:ie=!0}}if(ie)return ie=P,Q=Q(ie),P=q===""?"."+Ee(ie,0):q,G(Q)?(j="",P!=null&&(j=P.replace(Me,"$&/")+"/"),ze(Q,D,j,"",function(ue){return ue})):Q!=null&&(Ce(Q)&&(Q=fe(Q,j+(!Q.key||ie&&ie.key===Q.key?"":(""+Q.key).replace(Me,"$&/")+"/")+P)),D.push(Q)),1;if(ie=0,q=q===""?".":q+":",G(P))for(var z=0;z<P.length;z++){C=P[z];var ae=q+Ee(C,z);ie+=ze(C,D,j,ae,Q)}else if(ae=E(P),typeof ae=="function")for(P=ae.call(P),z=0;!(C=P.next()).done;)C=C.value,ae=q+Ee(C,z++),ie+=ze(C,D,j,ae,Q);else if(C==="object")throw D=String(P),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.");return ie}function De(P,D,j){if(P==null)return P;var q=[],Q=0;return ze(P,q,"","",function(C){return D.call(j,C,Q++)}),q}function Ve(P){if(P._status===-1){var D=P._result;D=D(),D.then(function(j){(P._status===0||P._status===-1)&&(P._status=1,P._result=j)},function(j){(P._status===0||P._status===-1)&&(P._status=2,P._result=j)}),P._status===-1&&(P._status=0,P._result=D)}if(P._status===1)return P._result.default;throw P._result}var ve={current:null},K={transition:null},ne={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:K,ReactCurrentOwner:se};function Y(){throw Error("act(...) is not supported in production builds of React.")}return ge.Children={map:De,forEach:function(P,D,j){De(P,function(){D.apply(this,arguments)},j)},count:function(P){var D=0;return De(P,function(){D++}),D},toArray:function(P){return De(P,function(D){return D})||[]},only:function(P){if(!Ce(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},ge.Component=x,ge.Fragment=o,ge.Profiler=u,ge.PureComponent=F,ge.StrictMode=l,ge.Suspense=f,ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,ge.act=Y,ge.cloneElement=function(P,D,j){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var q=v({},P.props),Q=P.key,C=P.ref,ie=P._owner;if(D!=null){if(D.ref!==void 0&&(C=D.ref,ie=se.current),D.key!==void 0&&(Q=""+D.key),P.type&&P.type.defaultProps)var z=P.type.defaultProps;for(ae in D)U.call(D,ae)&&!pe.hasOwnProperty(ae)&&(q[ae]=D[ae]===void 0&&z!==void 0?z[ae]:D[ae])}var ae=arguments.length-2;if(ae===1)q.children=j;else if(1<ae){z=Array(ae);for(var ue=0;ue<ae;ue++)z[ue]=arguments[ue+2];q.children=z}return{$$typeof:n,type:P.type,key:Q,ref:C,props:q,_owner:ie}},ge.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:d,_context:P},P.Consumer=P},ge.createElement=me,ge.createFactory=function(P){var D=me.bind(null,P);return D.type=P,D},ge.createRef=function(){return{current:null}},ge.forwardRef=function(P){return{$$typeof:m,render:P}},ge.isValidElement=Ce,ge.lazy=function(P){return{$$typeof:w,_payload:{_status:-1,_result:P},_init:Ve}},ge.memo=function(P,D){return{$$typeof:g,type:P,compare:D===void 0?null:D}},ge.startTransition=function(P){var D=K.transition;K.transition={};try{P()}finally{K.transition=D}},ge.unstable_act=Y,ge.useCallback=function(P,D){return ve.current.useCallback(P,D)},ge.useContext=function(P){return ve.current.useContext(P)},ge.useDebugValue=function(){},ge.useDeferredValue=function(P){return ve.current.useDeferredValue(P)},ge.useEffect=function(P,D){return ve.current.useEffect(P,D)},ge.useId=function(){return ve.current.useId()},ge.useImperativeHandle=function(P,D,j){return ve.current.useImperativeHandle(P,D,j)},ge.useInsertionEffect=function(P,D){return ve.current.useInsertionEffect(P,D)},ge.useLayoutEffect=function(P,D){return ve.current.useLayoutEffect(P,D)},ge.useMemo=function(P,D){return ve.current.useMemo(P,D)},ge.useReducer=function(P,D,j){return ve.current.useReducer(P,D,j)},ge.useRef=function(P){return ve.current.useRef(P)},ge.useState=function(P){return ve.current.useState(P)},ge.useSyncExternalStore=function(P,D,j){return ve.current.useSyncExternalStore(P,D,j)},ge.useTransition=function(){return ve.current.useTransition()},ge.version="18.3.1",ge}var Dd;function El(){return Dd||(Dd=1,il.exports=gg()),il.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd;function fg(){if(Rd)return fr;Rd=1;var n=El(),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(m,f,g){var w,I={},E=null,_=null;g!==void 0&&(E=""+g),f.key!==void 0&&(E=""+f.key),f.ref!==void 0&&(_=f.ref);for(w in f)l.call(f,w)&&!d.hasOwnProperty(w)&&(I[w]=f[w]);if(m&&m.defaultProps)for(w in f=m.defaultProps,f)I[w]===void 0&&(I[w]=f[w]);return{$$typeof:s,type:m,key:E,ref:_,props:I,_owner:u.current}}return fr.Fragment=o,fr.jsx=h,fr.jsxs=h,fr}var Ad;function yg(){return Ad||(Ad=1,tl.exports=fg()),tl.exports}var N=yg(),M=El();const Tt=wh(M);var zo={},nl={exports:{}},vt={},rl={exports:{}},ol={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md;function vg(){return Md||(Md=1,function(n){function s(K,ne){var Y=K.length;K.push(ne);e:for(;0<Y;){var P=Y-1>>>1,D=K[P];if(0<u(D,ne))K[P]=ne,K[Y]=D,Y=P;else break e}}function o(K){return K.length===0?null:K[0]}function l(K){if(K.length===0)return null;var ne=K[0],Y=K.pop();if(Y!==ne){K[0]=Y;e:for(var P=0,D=K.length,j=D>>>1;P<j;){var q=2*(P+1)-1,Q=K[q],C=q+1,ie=K[C];if(0>u(Q,Y))C<D&&0>u(ie,Q)?(K[P]=ie,K[C]=Y,P=C):(K[P]=Q,K[q]=Y,P=q);else if(C<D&&0>u(ie,Y))K[P]=ie,K[C]=Y,P=C;else break e}}return ne}function u(K,ne){var Y=K.sortIndex-ne.sortIndex;return Y!==0?Y:K.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var h=Date,m=h.now();n.unstable_now=function(){return h.now()-m}}var f=[],g=[],w=1,I=null,E=3,_=!1,v=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function H(K){for(var ne=o(g);ne!==null;){if(ne.callback===null)l(g);else if(ne.startTime<=K)l(g),ne.sortIndex=ne.expirationTime,s(f,ne);else break;ne=o(g)}}function G(K){if(b=!1,H(K),!v)if(o(f)!==null)v=!0,Ve(U);else{var ne=o(g);ne!==null&&ve(G,ne.startTime-K)}}function U(K,ne){v=!1,b&&(b=!1,L(me),me=-1),_=!0;var Y=E;try{for(H(ne),I=o(f);I!==null&&(!(I.expirationTime>ne)||K&&!it());){var P=I.callback;if(typeof P=="function"){I.callback=null,E=I.priorityLevel;var D=P(I.expirationTime<=ne);ne=n.unstable_now(),typeof D=="function"?I.callback=D:I===o(f)&&l(f),H(ne)}else l(f);I=o(f)}if(I!==null)var j=!0;else{var q=o(g);q!==null&&ve(G,q.startTime-ne),j=!1}return j}finally{I=null,E=Y,_=!1}}var se=!1,pe=null,me=-1,fe=5,Ce=-1;function it(){return!(n.unstable_now()-Ce<fe)}function Me(){if(pe!==null){var K=n.unstable_now();Ce=K;var ne=!0;try{ne=pe(!0,K)}finally{ne?Ee():(se=!1,pe=null)}}else se=!1}var Ee;if(typeof F=="function")Ee=function(){F(Me)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,De=ze.port2;ze.port1.onmessage=Me,Ee=function(){De.postMessage(null)}}else Ee=function(){x(Me,0)};function Ve(K){pe=K,se||(se=!0,Ee())}function ve(K,ne){me=x(function(){K(n.unstable_now())},ne)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(K){K.callback=null},n.unstable_continueExecution=function(){v||_||(v=!0,Ve(U))},n.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):fe=0<K?Math.floor(1e3/K):5},n.unstable_getCurrentPriorityLevel=function(){return E},n.unstable_getFirstCallbackNode=function(){return o(f)},n.unstable_next=function(K){switch(E){case 1:case 2:case 3:var ne=3;break;default:ne=E}var Y=E;E=ne;try{return K()}finally{E=Y}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(K,ne){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var Y=E;E=K;try{return ne()}finally{E=Y}},n.unstable_scheduleCallback=function(K,ne,Y){var P=n.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?P+Y:P):Y=P,K){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=Y+D,K={id:w++,callback:ne,priorityLevel:K,startTime:Y,expirationTime:D,sortIndex:-1},Y>P?(K.sortIndex=Y,s(g,K),o(f)===null&&K===o(g)&&(b?(L(me),me=-1):b=!0,ve(G,Y-P))):(K.sortIndex=D,s(f,K),v||_||(v=!0,Ve(U))),K},n.unstable_shouldYield=it,n.unstable_wrapCallback=function(K){var ne=E;return function(){var Y=E;E=ne;try{return K.apply(this,arguments)}finally{E=Y}}}}(ol)),ol}var Od;function wg(){return Od||(Od=1,rl.exports=vg()),rl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld;function bg(){if(Ld)return vt;Ld=1;var n=El(),s=wg();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,u={};function d(e,t){h(e,t),h(e+"Capture",t)}function h(e,t){for(u[e]=t,e=0;e<t.length;e++)l.add(t[e])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},I={};function E(e){return f.call(I,e)?!0:f.call(w,e)?!1:g.test(e)?I[e]=!0:(w[e]=!0,!1)}function _(e,t,i,r){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function v(e,t,i,r){if(t===null||typeof t>"u"||_(e,t,i,r))return!0;if(r)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function b(e,t,i,r,a,c,p){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=p}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){x[e]=new b(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];x[t]=new b(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){x[e]=new b(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){x[e]=new b(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){x[e]=new b(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){x[e]=new b(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){x[e]=new b(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){x[e]=new b(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){x[e]=new b(e,5,!1,e.toLowerCase(),null,!1,!1)});var L=/[\-:]([a-z])/g;function F(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(L,F);x[t]=new b(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(L,F);x[t]=new b(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(L,F);x[t]=new b(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){x[e]=new b(e,1,!1,e.toLowerCase(),null,!1,!1)}),x.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){x[e]=new b(e,1,!1,e.toLowerCase(),null,!0,!0)});function H(e,t,i,r){var a=x.hasOwnProperty(t)?x[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(v(t,i,a,r)&&(i=null),r||a===null?E(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):a.mustUseProperty?e[a.propertyName]=i===null?a.type===3?!1:"":i:(t=a.attributeName,r=a.attributeNamespace,i===null?e.removeAttribute(t):(a=a.type,i=a===3||a===4&&i===!0?"":""+i,r?e.setAttributeNS(r,t,i):e.setAttribute(t,i))))}var G=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),se=Symbol.for("react.portal"),pe=Symbol.for("react.fragment"),me=Symbol.for("react.strict_mode"),fe=Symbol.for("react.profiler"),Ce=Symbol.for("react.provider"),it=Symbol.for("react.context"),Me=Symbol.for("react.forward_ref"),Ee=Symbol.for("react.suspense"),ze=Symbol.for("react.suspense_list"),De=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),ve=Symbol.for("react.offscreen"),K=Symbol.iterator;function ne(e){return e===null||typeof e!="object"?null:(e=K&&e[K]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,P;function D(e){if(P===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);P=t&&t[1]||""}return`
`+P+e}var j=!1;function q(e,t){if(!e||j)return"";j=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(A){var r=A}Reflect.construct(e,[],t)}else{try{t.call()}catch(A){r=A}e.call(t.prototype)}else{try{throw Error()}catch(A){r=A}e()}}catch(A){if(A&&r&&typeof A.stack=="string"){for(var a=A.stack.split(`
`),c=r.stack.split(`
`),p=a.length-1,y=c.length-1;1<=p&&0<=y&&a[p]!==c[y];)y--;for(;1<=p&&0<=y;p--,y--)if(a[p]!==c[y]){if(p!==1||y!==1)do if(p--,y--,0>y||a[p]!==c[y]){var k=`
`+a[p].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=p&&0<=y);break}}}finally{j=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?D(e):""}function Q(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=q(e.type,!1),e;case 11:return e=q(e.type.render,!1),e;case 1:return e=q(e.type,!0),e;default:return""}}function C(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pe:return"Fragment";case se:return"Portal";case fe:return"Profiler";case me:return"StrictMode";case Ee:return"Suspense";case ze:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case it:return(e.displayName||"Context")+".Consumer";case Ce:return(e._context.displayName||"Context")+".Provider";case Me:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case De:return t=e.displayName||null,t!==null?t:C(e.type)||"Memo";case Ve:t=e._payload,e=e._init;try{return C(e(t))}catch{}}return null}function ie(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return C(t);case 8:return t===me?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function z(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ae(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ue(e){var t=ae(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,c=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(p){r=""+p,c.call(this,p)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return r},setValue:function(p){r=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function we(e){e._valueTracker||(e._valueTracker=ue(e))}function de(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),r="";return e&&(r=ae(e)?e.checked?"true":"false":e.value),e=r,e!==i?(t.setValue(e),!0):!1}function je(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xe(e,t){var i=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function ye(e,t){var i=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;i=z(t.value!=null?t.value:i),e._wrapperState={initialChecked:r,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ge(e,t){t=t.checked,t!=null&&H(e,"checked",t,!1)}function be(e,t){Ge(e,t);var i=z(t.value),r=t.type;if(i!=null)r==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zt(e,t.type,i):t.hasOwnProperty("defaultValue")&&Zt(e,t.type,z(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $e(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function Zt(e,t,i){(t!=="number"||je(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Ue=Array.isArray;function _t(e,t,i,r){if(e=e.options,t){t={};for(var a=0;a<i.length;a++)t["$"+i[a]]=!0;for(i=0;i<e.length;i++)a=t.hasOwnProperty("$"+e[i].value),e[i].selected!==a&&(e[i].selected=a),a&&r&&(e[i].defaultSelected=!0)}else{for(i=""+z(i),t=null,a=0;a<e.length;a++){if(e[a].value===i){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function ei(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ht(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(o(92));if(Ue(i)){if(1<i.length)throw Error(o(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:z(i)}}function le(e,t){var i=z(t.value),r=z(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),r!=null&&(e.defaultValue=""+r)}function Oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ji(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ji(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var St,Bl=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,i,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(St=St||document.createElement("div"),St.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=St.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mn(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wp=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(e){wp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),On[t]=On[e]})});function Hl(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||On.hasOwnProperty(e)&&On[e]?(""+t).trim():t+"px"}function ql(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var r=i.indexOf("--")===0,a=Hl(i,t[i],r);i==="float"&&(i="cssFloat"),r?e.setProperty(i,a):e[i]=a}}var bp=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ps(e,t){if(t){if(bp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function ms(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gs=null;function fs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ys=null,Xi=null,Zi=null;function Vl(e){if(e=tr(e)){if(typeof ys!="function")throw Error(o(280));var t=e.stateNode;t&&(t=Zr(t),ys(e.stateNode,e.type,t))}}function $l(e){Xi?Zi?Zi.push(e):Zi=[e]:Xi=e}function Kl(){if(Xi){var e=Xi,t=Zi;if(Zi=Xi=null,Vl(e),t)for(e=0;e<t.length;e++)Vl(t[e])}}function Gl(e,t){return e(t)}function Ql(){}var vs=!1;function Yl(e,t,i){if(vs)return e(t,i);vs=!0;try{return Gl(e,t,i)}finally{vs=!1,(Xi!==null||Zi!==null)&&(Ql(),Kl())}}function Ln(e,t){var i=e.stateNode;if(i===null)return null;var r=Zr(i);if(r===null)return null;i=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(o(231,t,typeof i));return i}var ws=!1;if(m)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){ws=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{ws=!1}function kp(e,t,i,r,a,c,p,y,k){var A=Array.prototype.slice.call(arguments,3);try{t.apply(i,A)}catch(B){this.onError(B)}}var Un=!1,Ar=null,Mr=!1,bs=null,Sp={onError:function(e){Un=!0,Ar=e}};function xp(e,t,i,r,a,c,p,y,k){Un=!1,Ar=null,kp.apply(Sp,arguments)}function Ip(e,t,i,r,a,c,p,y,k){if(xp.apply(this,arguments),Un){if(Un){var A=Ar;Un=!1,Ar=null}else throw Error(o(198));Mr||(Mr=!0,bs=A)}}function Li(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function Jl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xl(e){if(Li(e)!==e)throw Error(o(188))}function Pp(e){var t=e.alternate;if(!t){if(t=Li(e),t===null)throw Error(o(188));return t!==e?null:e}for(var i=e,r=t;;){var a=i.return;if(a===null)break;var c=a.alternate;if(c===null){if(r=a.return,r!==null){i=r;continue}break}if(a.child===c.child){for(c=a.child;c;){if(c===i)return Xl(a),e;if(c===r)return Xl(a),t;c=c.sibling}throw Error(o(188))}if(i.return!==r.return)i=a,r=c;else{for(var p=!1,y=a.child;y;){if(y===i){p=!0,i=a,r=c;break}if(y===r){p=!0,r=a,i=c;break}y=y.sibling}if(!p){for(y=c.child;y;){if(y===i){p=!0,i=c,r=a;break}if(y===r){p=!0,r=c,i=a;break}y=y.sibling}if(!p)throw Error(o(189))}}if(i.alternate!==r)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?e:t}function Zl(e){return e=Pp(e),e!==null?ec(e):null}function ec(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ec(e);if(t!==null)return t;e=e.sibling}return null}var tc=s.unstable_scheduleCallback,ic=s.unstable_cancelCallback,Cp=s.unstable_shouldYield,Tp=s.unstable_requestPaint,Be=s.unstable_now,Ep=s.unstable_getCurrentPriorityLevel,ks=s.unstable_ImmediatePriority,nc=s.unstable_UserBlockingPriority,Or=s.unstable_NormalPriority,Dp=s.unstable_LowPriority,rc=s.unstable_IdlePriority,Lr=null,$t=null;function Rp(e){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(Lr,e,void 0,(e.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:Op,Ap=Math.log,Mp=Math.LN2;function Op(e){return e>>>=0,e===0?32:31-(Ap(e)/Mp|0)|0}var _r=64,Ur=4194304;function Fn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fr(e,t){var i=e.pendingLanes;if(i===0)return 0;var r=0,a=e.suspendedLanes,c=e.pingedLanes,p=i&268435455;if(p!==0){var y=p&~a;y!==0?r=Fn(y):(c&=p,c!==0&&(r=Fn(c)))}else p=i&~a,p!==0?r=Fn(p):c!==0&&(r=Fn(c));if(r===0)return 0;if(t!==0&&t!==r&&(t&a)===0&&(a=r&-r,c=t&-t,a>=c||a===16&&(c&4194240)!==0))return t;if((r&4)!==0&&(r|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)i=31-Ut(t),a=1<<i,r|=e[i],t&=~a;return r}function Lp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _p(e,t){for(var i=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,c=e.pendingLanes;0<c;){var p=31-Ut(c),y=1<<p,k=a[p];k===-1?((y&i)===0||(y&r)!==0)&&(a[p]=Lp(y,t)):k<=t&&(e.expiredLanes|=y),c&=~y}}function Ss(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function oc(){var e=_r;return _r<<=1,(_r&4194240)===0&&(_r=64),e}function xs(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function Nn(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ut(t),e[t]=i}function Up(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<i;){var a=31-Ut(i),c=1<<a;t[a]=0,r[a]=-1,e[a]=-1,i&=~c}}function Is(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var r=31-Ut(i),a=1<<r;a&t|e[r]&t&&(e[r]|=t),i&=~a}}var Ie=0;function sc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ac,Ps,lc,cc,uc,Cs=!1,Nr=[],pi=null,mi=null,gi=null,zn=new Map,jn=new Map,fi=[],Fp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dc(e,t){switch(e){case"focusin":case"focusout":pi=null;break;case"dragenter":case"dragleave":mi=null;break;case"mouseover":case"mouseout":gi=null;break;case"pointerover":case"pointerout":zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jn.delete(t.pointerId)}}function Wn(e,t,i,r,a,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:i,eventSystemFlags:r,nativeEvent:c,targetContainers:[a]},t!==null&&(t=tr(t),t!==null&&Ps(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Np(e,t,i,r,a){switch(t){case"focusin":return pi=Wn(pi,e,t,i,r,a),!0;case"dragenter":return mi=Wn(mi,e,t,i,r,a),!0;case"mouseover":return gi=Wn(gi,e,t,i,r,a),!0;case"pointerover":var c=a.pointerId;return zn.set(c,Wn(zn.get(c)||null,e,t,i,r,a)),!0;case"gotpointercapture":return c=a.pointerId,jn.set(c,Wn(jn.get(c)||null,e,t,i,r,a)),!0}return!1}function hc(e){var t=_i(e.target);if(t!==null){var i=Li(t);if(i!==null){if(t=i.tag,t===13){if(t=Jl(i),t!==null){e.blockedOn=t,uc(e.priority,function(){lc(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Es(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var r=new i.constructor(i.type,i);gs=r,i.target.dispatchEvent(r),gs=null}else return t=tr(i),t!==null&&Ps(t),e.blockedOn=i,!1;t.shift()}return!0}function pc(e,t,i){zr(e)&&i.delete(t)}function zp(){Cs=!1,pi!==null&&zr(pi)&&(pi=null),mi!==null&&zr(mi)&&(mi=null),gi!==null&&zr(gi)&&(gi=null),zn.forEach(pc),jn.forEach(pc)}function Bn(e,t){e.blockedOn===t&&(e.blockedOn=null,Cs||(Cs=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,zp)))}function Hn(e){function t(a){return Bn(a,e)}if(0<Nr.length){Bn(Nr[0],e);for(var i=1;i<Nr.length;i++){var r=Nr[i];r.blockedOn===e&&(r.blockedOn=null)}}for(pi!==null&&Bn(pi,e),mi!==null&&Bn(mi,e),gi!==null&&Bn(gi,e),zn.forEach(t),jn.forEach(t),i=0;i<fi.length;i++)r=fi[i],r.blockedOn===e&&(r.blockedOn=null);for(;0<fi.length&&(i=fi[0],i.blockedOn===null);)hc(i),i.blockedOn===null&&fi.shift()}var en=G.ReactCurrentBatchConfig,jr=!0;function jp(e,t,i,r){var a=Ie,c=en.transition;en.transition=null;try{Ie=1,Ts(e,t,i,r)}finally{Ie=a,en.transition=c}}function Wp(e,t,i,r){var a=Ie,c=en.transition;en.transition=null;try{Ie=4,Ts(e,t,i,r)}finally{Ie=a,en.transition=c}}function Ts(e,t,i,r){if(jr){var a=Es(e,t,i,r);if(a===null)Vs(e,t,r,Wr,i),dc(e,r);else if(Np(a,e,t,i,r))r.stopPropagation();else if(dc(e,r),t&4&&-1<Fp.indexOf(e)){for(;a!==null;){var c=tr(a);if(c!==null&&ac(c),c=Es(e,t,i,r),c===null&&Vs(e,t,r,Wr,i),c===a)break;a=c}a!==null&&r.stopPropagation()}else Vs(e,t,r,null,i)}}var Wr=null;function Es(e,t,i,r){if(Wr=null,e=fs(r),e=_i(e),e!==null)if(t=Li(e),t===null)e=null;else if(i=t.tag,i===13){if(e=Jl(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wr=e,null}function mc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ep()){case ks:return 1;case nc:return 4;case Or:case Dp:return 16;case rc:return 536870912;default:return 16}default:return 16}}var yi=null,Ds=null,Br=null;function gc(){if(Br)return Br;var e,t=Ds,i=t.length,r,a="value"in yi?yi.value:yi.textContent,c=a.length;for(e=0;e<i&&t[e]===a[e];e++);var p=i-e;for(r=1;r<=p&&t[i-r]===a[c-r];r++);return Br=a.slice(e,1<r?1-r:void 0)}function Hr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qr(){return!0}function fc(){return!1}function xt(e){function t(i,r,a,c,p){this._reactName=i,this._targetInst=a,this.type=r,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(i=e[y],this[y]=i?i(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?qr:fc,this.isPropagationStopped=fc,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=qr)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=qr)},persist:function(){},isPersistent:qr}),t}var tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rs=xt(tn),qn=Y({},tn,{view:0,detail:0}),Bp=xt(qn),As,Ms,Vn,Vr=Y({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ls,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vn&&(Vn&&e.type==="mousemove"?(As=e.screenX-Vn.screenX,Ms=e.screenY-Vn.screenY):Ms=As=0,Vn=e),As)},movementY:function(e){return"movementY"in e?e.movementY:Ms}}),yc=xt(Vr),Hp=Y({},Vr,{dataTransfer:0}),qp=xt(Hp),Vp=Y({},qn,{relatedTarget:0}),Os=xt(Vp),$p=Y({},tn,{animationName:0,elapsedTime:0,pseudoElement:0}),Kp=xt($p),Gp=Y({},tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qp=xt(Gp),Yp=Y({},tn,{data:0}),vc=xt(Yp),Jp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function em(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zp[e])?!!t[e]:!1}function Ls(){return em}var tm=Y({},qn,{key:function(e){if(e.key){var t=Jp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ls,charCode:function(e){return e.type==="keypress"?Hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),im=xt(tm),nm=Y({},Vr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wc=xt(nm),rm=Y({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ls}),om=xt(rm),sm=Y({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),am=xt(sm),lm=Y({},Vr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cm=xt(lm),um=[9,13,27,32],_s=m&&"CompositionEvent"in window,$n=null;m&&"documentMode"in document&&($n=document.documentMode);var dm=m&&"TextEvent"in window&&!$n,bc=m&&(!_s||$n&&8<$n&&11>=$n),kc=" ",Sc=!1;function xc(e,t){switch(e){case"keyup":return um.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ic(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nn=!1;function hm(e,t){switch(e){case"compositionend":return Ic(t);case"keypress":return t.which!==32?null:(Sc=!0,kc);case"textInput":return e=t.data,e===kc&&Sc?null:e;default:return null}}function pm(e,t){if(nn)return e==="compositionend"||!_s&&xc(e,t)?(e=gc(),Br=Ds=yi=null,nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bc&&t.locale!=="ko"?null:t.data;default:return null}}var mm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mm[e.type]:t==="textarea"}function Cc(e,t,i,r){$l(r),t=Yr(t,"onChange"),0<t.length&&(i=new Rs("onChange","change",null,i,r),e.push({event:i,listeners:t}))}var Kn=null,Gn=null;function gm(e){qc(e,0)}function $r(e){var t=ln(e);if(de(t))return e}function fm(e,t){if(e==="change")return t}var Tc=!1;if(m){var Us;if(m){var Fs="oninput"in document;if(!Fs){var Ec=document.createElement("div");Ec.setAttribute("oninput","return;"),Fs=typeof Ec.oninput=="function"}Us=Fs}else Us=!1;Tc=Us&&(!document.documentMode||9<document.documentMode)}function Dc(){Kn&&(Kn.detachEvent("onpropertychange",Rc),Gn=Kn=null)}function Rc(e){if(e.propertyName==="value"&&$r(Gn)){var t=[];Cc(t,Gn,e,fs(e)),Yl(gm,t)}}function ym(e,t,i){e==="focusin"?(Dc(),Kn=t,Gn=i,Kn.attachEvent("onpropertychange",Rc)):e==="focusout"&&Dc()}function vm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $r(Gn)}function wm(e,t){if(e==="click")return $r(t)}function bm(e,t){if(e==="input"||e==="change")return $r(t)}function km(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ft=typeof Object.is=="function"?Object.is:km;function Qn(e,t){if(Ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),r=Object.keys(t);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var a=i[r];if(!f.call(t,a)||!Ft(e[a],t[a]))return!1}return!0}function Ac(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mc(e,t){var i=Ac(e);e=0;for(var r;i;){if(i.nodeType===3){if(r=e+i.textContent.length,e<=t&&r>=t)return{node:i,offset:t-e};e=r}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Ac(i)}}function Oc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Oc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lc(){for(var e=window,t=je();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=je(e.document)}return t}function Ns(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sm(e){var t=Lc(),i=e.focusedElem,r=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&Oc(i.ownerDocument.documentElement,i)){if(r!==null&&Ns(i)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=i.textContent.length,c=Math.min(r.start,a);r=r.end===void 0?c:Math.min(r.end,a),!e.extend&&c>r&&(a=r,r=c,c=a),a=Mc(i,c);var p=Mc(i,r);a&&p&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==p.node||e.focusOffset!==p.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),c>r?(e.addRange(t),e.extend(p.node,p.offset)):(t.setEnd(p.node,p.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xm=m&&"documentMode"in document&&11>=document.documentMode,rn=null,zs=null,Yn=null,js=!1;function _c(e,t,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;js||rn==null||rn!==je(r)||(r=rn,"selectionStart"in r&&Ns(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yn&&Qn(Yn,r)||(Yn=r,r=Yr(zs,"onSelect"),0<r.length&&(t=new Rs("onSelect","select",null,t,i),e.push({event:t,listeners:r}),t.target=rn)))}function Kr(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var on={animationend:Kr("Animation","AnimationEnd"),animationiteration:Kr("Animation","AnimationIteration"),animationstart:Kr("Animation","AnimationStart"),transitionend:Kr("Transition","TransitionEnd")},Ws={},Uc={};m&&(Uc=document.createElement("div").style,"AnimationEvent"in window||(delete on.animationend.animation,delete on.animationiteration.animation,delete on.animationstart.animation),"TransitionEvent"in window||delete on.transitionend.transition);function Gr(e){if(Ws[e])return Ws[e];if(!on[e])return e;var t=on[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Uc)return Ws[e]=t[i];return e}var Fc=Gr("animationend"),Nc=Gr("animationiteration"),zc=Gr("animationstart"),jc=Gr("transitionend"),Wc=new Map,Bc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vi(e,t){Wc.set(e,t),d(t,[e])}for(var Bs=0;Bs<Bc.length;Bs++){var Hs=Bc[Bs],Im=Hs.toLowerCase(),Pm=Hs[0].toUpperCase()+Hs.slice(1);vi(Im,"on"+Pm)}vi(Fc,"onAnimationEnd"),vi(Nc,"onAnimationIteration"),vi(zc,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(jc,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jn));function Hc(e,t,i){var r=e.type||"unknown-event";e.currentTarget=i,Ip(r,t,void 0,e),e.currentTarget=null}function qc(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var r=e[i],a=r.event;r=r.listeners;e:{var c=void 0;if(t)for(var p=r.length-1;0<=p;p--){var y=r[p],k=y.instance,A=y.currentTarget;if(y=y.listener,k!==c&&a.isPropagationStopped())break e;Hc(a,y,A),c=k}else for(p=0;p<r.length;p++){if(y=r[p],k=y.instance,A=y.currentTarget,y=y.listener,k!==c&&a.isPropagationStopped())break e;Hc(a,y,A),c=k}}}if(Mr)throw e=bs,Mr=!1,bs=null,e}function Re(e,t){var i=t[Js];i===void 0&&(i=t[Js]=new Set);var r=e+"__bubble";i.has(r)||(Vc(t,e,2,!1),i.add(r))}function qs(e,t,i){var r=0;t&&(r|=4),Vc(i,e,r,t)}var Qr="_reactListening"+Math.random().toString(36).slice(2);function Xn(e){if(!e[Qr]){e[Qr]=!0,l.forEach(function(i){i!=="selectionchange"&&(Cm.has(i)||qs(i,!1,e),qs(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qr]||(t[Qr]=!0,qs("selectionchange",!1,t))}}function Vc(e,t,i,r){switch(mc(t)){case 1:var a=jp;break;case 4:a=Wp;break;default:a=Ts}i=a.bind(null,t,i,e),a=void 0,!ws||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,i,{capture:!0,passive:a}):e.addEventListener(t,i,!0):a!==void 0?e.addEventListener(t,i,{passive:a}):e.addEventListener(t,i,!1)}function Vs(e,t,i,r,a){var c=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var p=r.tag;if(p===3||p===4){var y=r.stateNode.containerInfo;if(y===a||y.nodeType===8&&y.parentNode===a)break;if(p===4)for(p=r.return;p!==null;){var k=p.tag;if((k===3||k===4)&&(k=p.stateNode.containerInfo,k===a||k.nodeType===8&&k.parentNode===a))return;p=p.return}for(;y!==null;){if(p=_i(y),p===null)return;if(k=p.tag,k===5||k===6){r=c=p;continue e}y=y.parentNode}}r=r.return}Yl(function(){var A=c,B=fs(i),V=[];e:{var W=Wc.get(e);if(W!==void 0){var J=Rs,Z=e;switch(e){case"keypress":if(Hr(i)===0)break e;case"keydown":case"keyup":J=im;break;case"focusin":Z="focus",J=Os;break;case"focusout":Z="blur",J=Os;break;case"beforeblur":case"afterblur":J=Os;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=yc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=qp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=om;break;case Fc:case Nc:case zc:J=Kp;break;case jc:J=am;break;case"scroll":J=Bp;break;case"wheel":J=cm;break;case"copy":case"cut":case"paste":J=Qp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=wc}var ee=(t&4)!==0,He=!ee&&e==="scroll",T=ee?W!==null?W+"Capture":null:W;ee=[];for(var S=A,R;S!==null;){R=S;var $=R.stateNode;if(R.tag===5&&$!==null&&(R=$,T!==null&&($=Ln(S,T),$!=null&&ee.push(Zn(S,$,R)))),He)break;S=S.return}0<ee.length&&(W=new J(W,Z,null,i,B),V.push({event:W,listeners:ee}))}}if((t&7)===0){e:{if(W=e==="mouseover"||e==="pointerover",J=e==="mouseout"||e==="pointerout",W&&i!==gs&&(Z=i.relatedTarget||i.fromElement)&&(_i(Z)||Z[ti]))break e;if((J||W)&&(W=B.window===B?B:(W=B.ownerDocument)?W.defaultView||W.parentWindow:window,J?(Z=i.relatedTarget||i.toElement,J=A,Z=Z?_i(Z):null,Z!==null&&(He=Li(Z),Z!==He||Z.tag!==5&&Z.tag!==6)&&(Z=null)):(J=null,Z=A),J!==Z)){if(ee=yc,$="onMouseLeave",T="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ee=wc,$="onPointerLeave",T="onPointerEnter",S="pointer"),He=J==null?W:ln(J),R=Z==null?W:ln(Z),W=new ee($,S+"leave",J,i,B),W.target=He,W.relatedTarget=R,$=null,_i(B)===A&&(ee=new ee(T,S+"enter",Z,i,B),ee.target=R,ee.relatedTarget=He,$=ee),He=$,J&&Z)t:{for(ee=J,T=Z,S=0,R=ee;R;R=sn(R))S++;for(R=0,$=T;$;$=sn($))R++;for(;0<S-R;)ee=sn(ee),S--;for(;0<R-S;)T=sn(T),R--;for(;S--;){if(ee===T||T!==null&&ee===T.alternate)break t;ee=sn(ee),T=sn(T)}ee=null}else ee=null;J!==null&&$c(V,W,J,ee,!1),Z!==null&&He!==null&&$c(V,He,Z,ee,!0)}}e:{if(W=A?ln(A):window,J=W.nodeName&&W.nodeName.toLowerCase(),J==="select"||J==="input"&&W.type==="file")var te=fm;else if(Pc(W))if(Tc)te=bm;else{te=vm;var re=ym}else(J=W.nodeName)&&J.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(te=wm);if(te&&(te=te(e,A))){Cc(V,te,i,B);break e}re&&re(e,W,A),e==="focusout"&&(re=W._wrapperState)&&re.controlled&&W.type==="number"&&Zt(W,"number",W.value)}switch(re=A?ln(A):window,e){case"focusin":(Pc(re)||re.contentEditable==="true")&&(rn=re,zs=A,Yn=null);break;case"focusout":Yn=zs=rn=null;break;case"mousedown":js=!0;break;case"contextmenu":case"mouseup":case"dragend":js=!1,_c(V,i,B);break;case"selectionchange":if(xm)break;case"keydown":case"keyup":_c(V,i,B)}var oe;if(_s)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else nn?xc(e,i)&&(ce="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(ce="onCompositionStart");ce&&(bc&&i.locale!=="ko"&&(nn||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&nn&&(oe=gc()):(yi=B,Ds="value"in yi?yi.value:yi.textContent,nn=!0)),re=Yr(A,ce),0<re.length&&(ce=new vc(ce,e,null,i,B),V.push({event:ce,listeners:re}),oe?ce.data=oe:(oe=Ic(i),oe!==null&&(ce.data=oe)))),(oe=dm?hm(e,i):pm(e,i))&&(A=Yr(A,"onBeforeInput"),0<A.length&&(B=new vc("onBeforeInput","beforeinput",null,i,B),V.push({event:B,listeners:A}),B.data=oe))}qc(V,t)})}function Zn(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Yr(e,t){for(var i=t+"Capture",r=[];e!==null;){var a=e,c=a.stateNode;a.tag===5&&c!==null&&(a=c,c=Ln(e,i),c!=null&&r.unshift(Zn(e,c,a)),c=Ln(e,t),c!=null&&r.push(Zn(e,c,a))),e=e.return}return r}function sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $c(e,t,i,r,a){for(var c=t._reactName,p=[];i!==null&&i!==r;){var y=i,k=y.alternate,A=y.stateNode;if(k!==null&&k===r)break;y.tag===5&&A!==null&&(y=A,a?(k=Ln(i,c),k!=null&&p.unshift(Zn(i,k,y))):a||(k=Ln(i,c),k!=null&&p.push(Zn(i,k,y)))),i=i.return}p.length!==0&&e.push({event:t,listeners:p})}var Tm=/\r\n?/g,Em=/\u0000|\uFFFD/g;function Kc(e){return(typeof e=="string"?e:""+e).replace(Tm,`
`).replace(Em,"")}function Jr(e,t,i){if(t=Kc(t),Kc(e)!==t&&i)throw Error(o(425))}function Xr(){}var $s=null,Ks=null;function Gs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qs=typeof setTimeout=="function"?setTimeout:void 0,Dm=typeof clearTimeout=="function"?clearTimeout:void 0,Gc=typeof Promise=="function"?Promise:void 0,Rm=typeof queueMicrotask=="function"?queueMicrotask:typeof Gc<"u"?function(e){return Gc.resolve(null).then(e).catch(Am)}:Qs;function Am(e){setTimeout(function(){throw e})}function Ys(e,t){var i=t,r=0;do{var a=i.nextSibling;if(e.removeChild(i),a&&a.nodeType===8)if(i=a.data,i==="/$"){if(r===0){e.removeChild(a),Hn(t);return}r--}else i!=="$"&&i!=="$?"&&i!=="$!"||r++;i=a}while(i);Hn(t)}function wi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var an=Math.random().toString(36).slice(2),Kt="__reactFiber$"+an,er="__reactProps$"+an,ti="__reactContainer$"+an,Js="__reactEvents$"+an,Mm="__reactListeners$"+an,Om="__reactHandles$"+an;function _i(e){var t=e[Kt];if(t)return t;for(var i=e.parentNode;i;){if(t=i[ti]||i[Kt]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Qc(e);e!==null;){if(i=e[Kt])return i;e=Qc(e)}return t}e=i,i=e.parentNode}return null}function tr(e){return e=e[Kt]||e[ti],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ln(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function Zr(e){return e[er]||null}var Xs=[],cn=-1;function bi(e){return{current:e}}function Ae(e){0>cn||(e.current=Xs[cn],Xs[cn]=null,cn--)}function Te(e,t){cn++,Xs[cn]=e.current,e.current=t}var ki={},ot=bi(ki),pt=bi(!1),Ui=ki;function un(e,t){var i=e.type.contextTypes;if(!i)return ki;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},c;for(c in i)a[c]=t[c];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function mt(e){return e=e.childContextTypes,e!=null}function eo(){Ae(pt),Ae(ot)}function Yc(e,t,i){if(ot.current!==ki)throw Error(o(168));Te(ot,t),Te(pt,i)}function Jc(e,t,i){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return i;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(o(108,ie(e)||"Unknown",a));return Y({},i,r)}function to(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ki,Ui=ot.current,Te(ot,e),Te(pt,pt.current),!0}function Xc(e,t,i){var r=e.stateNode;if(!r)throw Error(o(169));i?(e=Jc(e,t,Ui),r.__reactInternalMemoizedMergedChildContext=e,Ae(pt),Ae(ot),Te(ot,e)):Ae(pt),Te(pt,i)}var ii=null,io=!1,Zs=!1;function Zc(e){ii===null?ii=[e]:ii.push(e)}function Lm(e){io=!0,Zc(e)}function Si(){if(!Zs&&ii!==null){Zs=!0;var e=0,t=Ie;try{var i=ii;for(Ie=1;e<i.length;e++){var r=i[e];do r=r(!0);while(r!==null)}ii=null,io=!1}catch(a){throw ii!==null&&(ii=ii.slice(e+1)),tc(ks,Si),a}finally{Ie=t,Zs=!1}}return null}var dn=[],hn=0,no=null,ro=0,Et=[],Dt=0,Fi=null,ni=1,ri="";function Ni(e,t){dn[hn++]=ro,dn[hn++]=no,no=e,ro=t}function eu(e,t,i){Et[Dt++]=ni,Et[Dt++]=ri,Et[Dt++]=Fi,Fi=e;var r=ni;e=ri;var a=32-Ut(r)-1;r&=~(1<<a),i+=1;var c=32-Ut(t)+a;if(30<c){var p=a-a%5;c=(r&(1<<p)-1).toString(32),r>>=p,a-=p,ni=1<<32-Ut(t)+a|i<<a|r,ri=c+e}else ni=1<<c|i<<a|r,ri=e}function ea(e){e.return!==null&&(Ni(e,1),eu(e,1,0))}function ta(e){for(;e===no;)no=dn[--hn],dn[hn]=null,ro=dn[--hn],dn[hn]=null;for(;e===Fi;)Fi=Et[--Dt],Et[Dt]=null,ri=Et[--Dt],Et[Dt]=null,ni=Et[--Dt],Et[Dt]=null}var It=null,Pt=null,Le=!1,Nt=null;function tu(e,t){var i=Ot(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function iu(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,It=e,Pt=wi(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,It=e,Pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=Fi!==null?{id:ni,overflow:ri}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=Ot(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,It=e,Pt=null,!0):!1;default:return!1}}function ia(e){return(e.mode&1)!==0&&(e.flags&128)===0}function na(e){if(Le){var t=Pt;if(t){var i=t;if(!iu(e,t)){if(ia(e))throw Error(o(418));t=wi(i.nextSibling);var r=It;t&&iu(e,t)?tu(r,i):(e.flags=e.flags&-4097|2,Le=!1,It=e)}}else{if(ia(e))throw Error(o(418));e.flags=e.flags&-4097|2,Le=!1,It=e}}}function nu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;It=e}function oo(e){if(e!==It)return!1;if(!Le)return nu(e),Le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Gs(e.type,e.memoizedProps)),t&&(t=Pt)){if(ia(e))throw ru(),Error(o(418));for(;t;)tu(e,t),t=wi(t.nextSibling)}if(nu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){Pt=wi(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}Pt=null}}else Pt=It?wi(e.stateNode.nextSibling):null;return!0}function ru(){for(var e=Pt;e;)e=wi(e.nextSibling)}function pn(){Pt=It=null,Le=!1}function ra(e){Nt===null?Nt=[e]:Nt.push(e)}var _m=G.ReactCurrentBatchConfig;function ir(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(o(309));var r=i.stateNode}if(!r)throw Error(o(147,e));var a=r,c=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(p){var y=a.refs;p===null?delete y[c]:y[c]=p},t._stringRef=c,t)}if(typeof e!="string")throw Error(o(284));if(!i._owner)throw Error(o(290,e))}return e}function so(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ou(e){var t=e._init;return t(e._payload)}function su(e){function t(T,S){if(e){var R=T.deletions;R===null?(T.deletions=[S],T.flags|=16):R.push(S)}}function i(T,S){if(!e)return null;for(;S!==null;)t(T,S),S=S.sibling;return null}function r(T,S){for(T=new Map;S!==null;)S.key!==null?T.set(S.key,S):T.set(S.index,S),S=S.sibling;return T}function a(T,S){return T=Ri(T,S),T.index=0,T.sibling=null,T}function c(T,S,R){return T.index=R,e?(R=T.alternate,R!==null?(R=R.index,R<S?(T.flags|=2,S):R):(T.flags|=2,S)):(T.flags|=1048576,S)}function p(T){return e&&T.alternate===null&&(T.flags|=2),T}function y(T,S,R,$){return S===null||S.tag!==6?(S=Qa(R,T.mode,$),S.return=T,S):(S=a(S,R),S.return=T,S)}function k(T,S,R,$){var te=R.type;return te===pe?B(T,S,R.props.children,$,R.key):S!==null&&(S.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Ve&&ou(te)===S.type)?($=a(S,R.props),$.ref=ir(T,S,R),$.return=T,$):($=Ao(R.type,R.key,R.props,null,T.mode,$),$.ref=ir(T,S,R),$.return=T,$)}function A(T,S,R,$){return S===null||S.tag!==4||S.stateNode.containerInfo!==R.containerInfo||S.stateNode.implementation!==R.implementation?(S=Ya(R,T.mode,$),S.return=T,S):(S=a(S,R.children||[]),S.return=T,S)}function B(T,S,R,$,te){return S===null||S.tag!==7?(S=$i(R,T.mode,$,te),S.return=T,S):(S=a(S,R),S.return=T,S)}function V(T,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Qa(""+S,T.mode,R),S.return=T,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case U:return R=Ao(S.type,S.key,S.props,null,T.mode,R),R.ref=ir(T,null,S),R.return=T,R;case se:return S=Ya(S,T.mode,R),S.return=T,S;case Ve:var $=S._init;return V(T,$(S._payload),R)}if(Ue(S)||ne(S))return S=$i(S,T.mode,R,null),S.return=T,S;so(T,S)}return null}function W(T,S,R,$){var te=S!==null?S.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return te!==null?null:y(T,S,""+R,$);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case U:return R.key===te?k(T,S,R,$):null;case se:return R.key===te?A(T,S,R,$):null;case Ve:return te=R._init,W(T,S,te(R._payload),$)}if(Ue(R)||ne(R))return te!==null?null:B(T,S,R,$,null);so(T,R)}return null}function J(T,S,R,$,te){if(typeof $=="string"&&$!==""||typeof $=="number")return T=T.get(R)||null,y(S,T,""+$,te);if(typeof $=="object"&&$!==null){switch($.$$typeof){case U:return T=T.get($.key===null?R:$.key)||null,k(S,T,$,te);case se:return T=T.get($.key===null?R:$.key)||null,A(S,T,$,te);case Ve:var re=$._init;return J(T,S,R,re($._payload),te)}if(Ue($)||ne($))return T=T.get(R)||null,B(S,T,$,te,null);so(S,$)}return null}function Z(T,S,R,$){for(var te=null,re=null,oe=S,ce=S=0,tt=null;oe!==null&&ce<R.length;ce++){oe.index>ce?(tt=oe,oe=null):tt=oe.sibling;var Se=W(T,oe,R[ce],$);if(Se===null){oe===null&&(oe=tt);break}e&&oe&&Se.alternate===null&&t(T,oe),S=c(Se,S,ce),re===null?te=Se:re.sibling=Se,re=Se,oe=tt}if(ce===R.length)return i(T,oe),Le&&Ni(T,ce),te;if(oe===null){for(;ce<R.length;ce++)oe=V(T,R[ce],$),oe!==null&&(S=c(oe,S,ce),re===null?te=oe:re.sibling=oe,re=oe);return Le&&Ni(T,ce),te}for(oe=r(T,oe);ce<R.length;ce++)tt=J(oe,T,ce,R[ce],$),tt!==null&&(e&&tt.alternate!==null&&oe.delete(tt.key===null?ce:tt.key),S=c(tt,S,ce),re===null?te=tt:re.sibling=tt,re=tt);return e&&oe.forEach(function(Ai){return t(T,Ai)}),Le&&Ni(T,ce),te}function ee(T,S,R,$){var te=ne(R);if(typeof te!="function")throw Error(o(150));if(R=te.call(R),R==null)throw Error(o(151));for(var re=te=null,oe=S,ce=S=0,tt=null,Se=R.next();oe!==null&&!Se.done;ce++,Se=R.next()){oe.index>ce?(tt=oe,oe=null):tt=oe.sibling;var Ai=W(T,oe,Se.value,$);if(Ai===null){oe===null&&(oe=tt);break}e&&oe&&Ai.alternate===null&&t(T,oe),S=c(Ai,S,ce),re===null?te=Ai:re.sibling=Ai,re=Ai,oe=tt}if(Se.done)return i(T,oe),Le&&Ni(T,ce),te;if(oe===null){for(;!Se.done;ce++,Se=R.next())Se=V(T,Se.value,$),Se!==null&&(S=c(Se,S,ce),re===null?te=Se:re.sibling=Se,re=Se);return Le&&Ni(T,ce),te}for(oe=r(T,oe);!Se.done;ce++,Se=R.next())Se=J(oe,T,ce,Se.value,$),Se!==null&&(e&&Se.alternate!==null&&oe.delete(Se.key===null?ce:Se.key),S=c(Se,S,ce),re===null?te=Se:re.sibling=Se,re=Se);return e&&oe.forEach(function(mg){return t(T,mg)}),Le&&Ni(T,ce),te}function He(T,S,R,$){if(typeof R=="object"&&R!==null&&R.type===pe&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case U:e:{for(var te=R.key,re=S;re!==null;){if(re.key===te){if(te=R.type,te===pe){if(re.tag===7){i(T,re.sibling),S=a(re,R.props.children),S.return=T,T=S;break e}}else if(re.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Ve&&ou(te)===re.type){i(T,re.sibling),S=a(re,R.props),S.ref=ir(T,re,R),S.return=T,T=S;break e}i(T,re);break}else t(T,re);re=re.sibling}R.type===pe?(S=$i(R.props.children,T.mode,$,R.key),S.return=T,T=S):($=Ao(R.type,R.key,R.props,null,T.mode,$),$.ref=ir(T,S,R),$.return=T,T=$)}return p(T);case se:e:{for(re=R.key;S!==null;){if(S.key===re)if(S.tag===4&&S.stateNode.containerInfo===R.containerInfo&&S.stateNode.implementation===R.implementation){i(T,S.sibling),S=a(S,R.children||[]),S.return=T,T=S;break e}else{i(T,S);break}else t(T,S);S=S.sibling}S=Ya(R,T.mode,$),S.return=T,T=S}return p(T);case Ve:return re=R._init,He(T,S,re(R._payload),$)}if(Ue(R))return Z(T,S,R,$);if(ne(R))return ee(T,S,R,$);so(T,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,S!==null&&S.tag===6?(i(T,S.sibling),S=a(S,R),S.return=T,T=S):(i(T,S),S=Qa(R,T.mode,$),S.return=T,T=S),p(T)):i(T,S)}return He}var mn=su(!0),au=su(!1),ao=bi(null),lo=null,gn=null,oa=null;function sa(){oa=gn=lo=null}function aa(e){var t=ao.current;Ae(ao),e._currentValue=t}function la(e,t,i){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===i)break;e=e.return}}function fn(e,t){lo=e,oa=gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(gt=!0),e.firstContext=null)}function Rt(e){var t=e._currentValue;if(oa!==e)if(e={context:e,memoizedValue:t,next:null},gn===null){if(lo===null)throw Error(o(308));gn=e,lo.dependencies={lanes:0,firstContext:e}}else gn=gn.next=e;return t}var zi=null;function ca(e){zi===null?zi=[e]:zi.push(e)}function lu(e,t,i,r){var a=t.interleaved;return a===null?(i.next=i,ca(t)):(i.next=a.next,a.next=i),t.interleaved=i,oi(e,r)}function oi(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var xi=!1;function ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function si(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ii(e,t,i){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ke&2)!==0){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,oi(e,i)}return a=r.interleaved,a===null?(t.next=t,ca(r)):(t.next=a.next,a.next=t),r.interleaved=t,oi(e,i)}function co(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,i|=r,t.lanes=i,Is(e,i)}}function uu(e,t){var i=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var a=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var p={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};c===null?a=c=p:c=c.next=p,i=i.next}while(i!==null);c===null?a=c=t:c=c.next=t}else a=c=t;i={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:c,shared:r.shared,effects:r.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function uo(e,t,i,r){var a=e.updateQueue;xi=!1;var c=a.firstBaseUpdate,p=a.lastBaseUpdate,y=a.shared.pending;if(y!==null){a.shared.pending=null;var k=y,A=k.next;k.next=null,p===null?c=A:p.next=A,p=k;var B=e.alternate;B!==null&&(B=B.updateQueue,y=B.lastBaseUpdate,y!==p&&(y===null?B.firstBaseUpdate=A:y.next=A,B.lastBaseUpdate=k))}if(c!==null){var V=a.baseState;p=0,B=A=k=null,y=c;do{var W=y.lane,J=y.eventTime;if((r&W)===W){B!==null&&(B=B.next={eventTime:J,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var Z=e,ee=y;switch(W=t,J=i,ee.tag){case 1:if(Z=ee.payload,typeof Z=="function"){V=Z.call(J,V,W);break e}V=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ee.payload,W=typeof Z=="function"?Z.call(J,V,W):Z,W==null)break e;V=Y({},V,W);break e;case 2:xi=!0}}y.callback!==null&&y.lane!==0&&(e.flags|=64,W=a.effects,W===null?a.effects=[y]:W.push(y))}else J={eventTime:J,lane:W,tag:y.tag,payload:y.payload,callback:y.callback,next:null},B===null?(A=B=J,k=V):B=B.next=J,p|=W;if(y=y.next,y===null){if(y=a.shared.pending,y===null)break;W=y,y=W.next,W.next=null,a.lastBaseUpdate=W,a.shared.pending=null}}while(!0);if(B===null&&(k=V),a.baseState=k,a.firstBaseUpdate=A,a.lastBaseUpdate=B,t=a.shared.interleaved,t!==null){a=t;do p|=a.lane,a=a.next;while(a!==t)}else c===null&&(a.shared.lanes=0);Bi|=p,e.lanes=p,e.memoizedState=V}}function du(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=i,typeof a!="function")throw Error(o(191,a));a.call(r)}}}var nr={},Gt=bi(nr),rr=bi(nr),or=bi(nr);function ji(e){if(e===nr)throw Error(o(174));return e}function da(e,t){switch(Te(or,t),Te(rr,e),Te(Gt,nr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Oi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Oi(t,e)}Ae(Gt),Te(Gt,t)}function yn(){Ae(Gt),Ae(rr),Ae(or)}function hu(e){ji(or.current);var t=ji(Gt.current),i=Oi(t,e.type);t!==i&&(Te(rr,e),Te(Gt,i))}function ha(e){rr.current===e&&(Ae(Gt),Ae(rr))}var Fe=bi(0);function ho(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pa=[];function ma(){for(var e=0;e<pa.length;e++)pa[e]._workInProgressVersionPrimary=null;pa.length=0}var po=G.ReactCurrentDispatcher,ga=G.ReactCurrentBatchConfig,Wi=0,Ne=null,Qe=null,Ze=null,mo=!1,sr=!1,ar=0,Um=0;function st(){throw Error(o(321))}function fa(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!Ft(e[i],t[i]))return!1;return!0}function ya(e,t,i,r,a,c){if(Wi=c,Ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,po.current=e===null||e.memoizedState===null?jm:Wm,e=i(r,a),sr){c=0;do{if(sr=!1,ar=0,25<=c)throw Error(o(301));c+=1,Ze=Qe=null,t.updateQueue=null,po.current=Bm,e=i(r,a)}while(sr)}if(po.current=yo,t=Qe!==null&&Qe.next!==null,Wi=0,Ze=Qe=Ne=null,mo=!1,t)throw Error(o(300));return e}function va(){var e=ar!==0;return ar=0,e}function Qt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Ne.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function At(){if(Qe===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var t=Ze===null?Ne.memoizedState:Ze.next;if(t!==null)Ze=t,Qe=e;else{if(e===null)throw Error(o(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},Ze===null?Ne.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function lr(e,t){return typeof t=="function"?t(e):t}function wa(e){var t=At(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var r=Qe,a=r.baseQueue,c=i.pending;if(c!==null){if(a!==null){var p=a.next;a.next=c.next,c.next=p}r.baseQueue=a=c,i.pending=null}if(a!==null){c=a.next,r=r.baseState;var y=p=null,k=null,A=c;do{var B=A.lane;if((Wi&B)===B)k!==null&&(k=k.next={lane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),r=A.hasEagerState?A.eagerState:e(r,A.action);else{var V={lane:B,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null};k===null?(y=k=V,p=r):k=k.next=V,Ne.lanes|=B,Bi|=B}A=A.next}while(A!==null&&A!==c);k===null?p=r:k.next=y,Ft(r,t.memoizedState)||(gt=!0),t.memoizedState=r,t.baseState=p,t.baseQueue=k,i.lastRenderedState=r}if(e=i.interleaved,e!==null){a=e;do c=a.lane,Ne.lanes|=c,Bi|=c,a=a.next;while(a!==e)}else a===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function ba(e){var t=At(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var r=i.dispatch,a=i.pending,c=t.memoizedState;if(a!==null){i.pending=null;var p=a=a.next;do c=e(c,p.action),p=p.next;while(p!==a);Ft(c,t.memoizedState)||(gt=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),i.lastRenderedState=c}return[c,r]}function pu(){}function mu(e,t){var i=Ne,r=At(),a=t(),c=!Ft(r.memoizedState,a);if(c&&(r.memoizedState=a,gt=!0),r=r.queue,ka(yu.bind(null,i,r,e),[e]),r.getSnapshot!==t||c||Ze!==null&&Ze.memoizedState.tag&1){if(i.flags|=2048,cr(9,fu.bind(null,i,r,a,t),void 0,null),et===null)throw Error(o(349));(Wi&30)!==0||gu(i,t,a)}return a}function gu(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function fu(e,t,i,r){t.value=i,t.getSnapshot=r,vu(t)&&wu(e)}function yu(e,t,i){return i(function(){vu(t)&&wu(e)})}function vu(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!Ft(e,i)}catch{return!0}}function wu(e){var t=oi(e,1);t!==null&&Bt(t,e,1,-1)}function bu(e){var t=Qt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lr,lastRenderedState:e},t.queue=e,e=e.dispatch=zm.bind(null,Ne,e),[t.memoizedState,e]}function cr(e,t,i,r){return e={tag:e,create:t,destroy:i,deps:r,next:null},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(r=i.next,i.next=e,e.next=r,t.lastEffect=e)),e}function ku(){return At().memoizedState}function go(e,t,i,r){var a=Qt();Ne.flags|=e,a.memoizedState=cr(1|t,i,void 0,r===void 0?null:r)}function fo(e,t,i,r){var a=At();r=r===void 0?null:r;var c=void 0;if(Qe!==null){var p=Qe.memoizedState;if(c=p.destroy,r!==null&&fa(r,p.deps)){a.memoizedState=cr(t,i,c,r);return}}Ne.flags|=e,a.memoizedState=cr(1|t,i,c,r)}function Su(e,t){return go(8390656,8,e,t)}function ka(e,t){return fo(2048,8,e,t)}function xu(e,t){return fo(4,2,e,t)}function Iu(e,t){return fo(4,4,e,t)}function Pu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cu(e,t,i){return i=i!=null?i.concat([e]):null,fo(4,4,Pu.bind(null,t,e),i)}function Sa(){}function Tu(e,t){var i=At();t=t===void 0?null:t;var r=i.memoizedState;return r!==null&&t!==null&&fa(t,r[1])?r[0]:(i.memoizedState=[e,t],e)}function Eu(e,t){var i=At();t=t===void 0?null:t;var r=i.memoizedState;return r!==null&&t!==null&&fa(t,r[1])?r[0]:(e=e(),i.memoizedState=[e,t],e)}function Du(e,t,i){return(Wi&21)===0?(e.baseState&&(e.baseState=!1,gt=!0),e.memoizedState=i):(Ft(i,t)||(i=oc(),Ne.lanes|=i,Bi|=i,e.baseState=!0),t)}function Fm(e,t){var i=Ie;Ie=i!==0&&4>i?i:4,e(!0);var r=ga.transition;ga.transition={};try{e(!1),t()}finally{Ie=i,ga.transition=r}}function Ru(){return At().memoizedState}function Nm(e,t,i){var r=Ei(e);if(i={lane:r,action:i,hasEagerState:!1,eagerState:null,next:null},Au(e))Mu(t,i);else if(i=lu(e,t,i,r),i!==null){var a=dt();Bt(i,e,r,a),Ou(i,t,r)}}function zm(e,t,i){var r=Ei(e),a={lane:r,action:i,hasEagerState:!1,eagerState:null,next:null};if(Au(e))Mu(t,a);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var p=t.lastRenderedState,y=c(p,i);if(a.hasEagerState=!0,a.eagerState=y,Ft(y,p)){var k=t.interleaved;k===null?(a.next=a,ca(t)):(a.next=k.next,k.next=a),t.interleaved=a;return}}catch{}finally{}i=lu(e,t,a,r),i!==null&&(a=dt(),Bt(i,e,r,a),Ou(i,t,r))}}function Au(e){var t=e.alternate;return e===Ne||t!==null&&t===Ne}function Mu(e,t){sr=mo=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Ou(e,t,i){if((i&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,i|=r,t.lanes=i,Is(e,i)}}var yo={readContext:Rt,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},jm={readContext:Rt,useCallback:function(e,t){return Qt().memoizedState=[e,t===void 0?null:t],e},useContext:Rt,useEffect:Su,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,go(4194308,4,Pu.bind(null,t,e),i)},useLayoutEffect:function(e,t){return go(4194308,4,e,t)},useInsertionEffect:function(e,t){return go(4,2,e,t)},useMemo:function(e,t){var i=Qt();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var r=Qt();return t=i!==void 0?i(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Nm.bind(null,Ne,e),[r.memoizedState,e]},useRef:function(e){var t=Qt();return e={current:e},t.memoizedState=e},useState:bu,useDebugValue:Sa,useDeferredValue:function(e){return Qt().memoizedState=e},useTransition:function(){var e=bu(!1),t=e[0];return e=Fm.bind(null,e[1]),Qt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var r=Ne,a=Qt();if(Le){if(i===void 0)throw Error(o(407));i=i()}else{if(i=t(),et===null)throw Error(o(349));(Wi&30)!==0||gu(r,t,i)}a.memoizedState=i;var c={value:i,getSnapshot:t};return a.queue=c,Su(yu.bind(null,r,c,e),[e]),r.flags|=2048,cr(9,fu.bind(null,r,c,i,t),void 0,null),i},useId:function(){var e=Qt(),t=et.identifierPrefix;if(Le){var i=ri,r=ni;i=(r&~(1<<32-Ut(r)-1)).toString(32)+i,t=":"+t+"R"+i,i=ar++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=Um++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Wm={readContext:Rt,useCallback:Tu,useContext:Rt,useEffect:ka,useImperativeHandle:Cu,useInsertionEffect:xu,useLayoutEffect:Iu,useMemo:Eu,useReducer:wa,useRef:ku,useState:function(){return wa(lr)},useDebugValue:Sa,useDeferredValue:function(e){var t=At();return Du(t,Qe.memoizedState,e)},useTransition:function(){var e=wa(lr)[0],t=At().memoizedState;return[e,t]},useMutableSource:pu,useSyncExternalStore:mu,useId:Ru,unstable_isNewReconciler:!1},Bm={readContext:Rt,useCallback:Tu,useContext:Rt,useEffect:ka,useImperativeHandle:Cu,useInsertionEffect:xu,useLayoutEffect:Iu,useMemo:Eu,useReducer:ba,useRef:ku,useState:function(){return ba(lr)},useDebugValue:Sa,useDeferredValue:function(e){var t=At();return Qe===null?t.memoizedState=e:Du(t,Qe.memoizedState,e)},useTransition:function(){var e=ba(lr)[0],t=At().memoizedState;return[e,t]},useMutableSource:pu,useSyncExternalStore:mu,useId:Ru,unstable_isNewReconciler:!1};function zt(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function xa(e,t,i,r){t=e.memoizedState,i=i(r,t),i=i==null?t:Y({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var vo={isMounted:function(e){return(e=e._reactInternals)?Li(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var r=dt(),a=Ei(e),c=si(r,a);c.payload=t,i!=null&&(c.callback=i),t=Ii(e,c,a),t!==null&&(Bt(t,e,a,r),co(t,e,a))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var r=dt(),a=Ei(e),c=si(r,a);c.tag=1,c.payload=t,i!=null&&(c.callback=i),t=Ii(e,c,a),t!==null&&(Bt(t,e,a,r),co(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=dt(),r=Ei(e),a=si(i,r);a.tag=2,t!=null&&(a.callback=t),t=Ii(e,a,r),t!==null&&(Bt(t,e,r,i),co(t,e,r))}};function Lu(e,t,i,r,a,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,c,p):t.prototype&&t.prototype.isPureReactComponent?!Qn(i,r)||!Qn(a,c):!0}function _u(e,t,i){var r=!1,a=ki,c=t.contextType;return typeof c=="object"&&c!==null?c=Rt(c):(a=mt(t)?Ui:ot.current,r=t.contextTypes,c=(r=r!=null)?un(e,a):ki),t=new t(i,c),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=c),t}function Uu(e,t,i,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,r),t.state!==e&&vo.enqueueReplaceState(t,t.state,null)}function Ia(e,t,i,r){var a=e.stateNode;a.props=i,a.state=e.memoizedState,a.refs={},ua(e);var c=t.contextType;typeof c=="object"&&c!==null?a.context=Rt(c):(c=mt(t)?Ui:ot.current,a.context=un(e,c)),a.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(xa(e,t,c,i),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&vo.enqueueReplaceState(a,a.state,null),uo(e,i,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function vn(e,t){try{var i="",r=t;do i+=Q(r),r=r.return;while(r);var a=i}catch(c){a=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:t,stack:a,digest:null}}function Pa(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function Ca(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var Hm=typeof WeakMap=="function"?WeakMap:Map;function Fu(e,t,i){i=si(-1,i),i.tag=3,i.payload={element:null};var r=t.value;return i.callback=function(){Po||(Po=!0,Wa=r),Ca(e,t)},i}function Nu(e,t,i){i=si(-1,i),i.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;i.payload=function(){return r(a)},i.callback=function(){Ca(e,t)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(i.callback=function(){Ca(e,t),typeof r!="function"&&(Ci===null?Ci=new Set([this]):Ci.add(this));var p=t.stack;this.componentDidCatch(t.value,{componentStack:p!==null?p:""})}),i}function zu(e,t,i){var r=e.pingCache;if(r===null){r=e.pingCache=new Hm;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(i)||(a.add(i),e=ng.bind(null,e,t,i),t.then(e,e))}function ju(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wu(e,t,i,r,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=si(-1,1),t.tag=2,Ii(i,t,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var qm=G.ReactCurrentOwner,gt=!1;function ut(e,t,i,r){t.child=e===null?au(t,null,i,r):mn(t,e.child,i,r)}function Bu(e,t,i,r,a){i=i.render;var c=t.ref;return fn(t,a),r=ya(e,t,i,r,c,a),i=va(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,ai(e,t,a)):(Le&&i&&ea(t),t.flags|=1,ut(e,t,r,a),t.child)}function Hu(e,t,i,r,a){if(e===null){var c=i.type;return typeof c=="function"&&!Ga(c)&&c.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=c,qu(e,t,c,r,a)):(e=Ao(i.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,(e.lanes&a)===0){var p=c.memoizedProps;if(i=i.compare,i=i!==null?i:Qn,i(p,r)&&e.ref===t.ref)return ai(e,t,a)}return t.flags|=1,e=Ri(c,r),e.ref=t.ref,e.return=t,t.child=e}function qu(e,t,i,r,a){if(e!==null){var c=e.memoizedProps;if(Qn(c,r)&&e.ref===t.ref)if(gt=!1,t.pendingProps=r=c,(e.lanes&a)!==0)(e.flags&131072)!==0&&(gt=!0);else return t.lanes=e.lanes,ai(e,t,a)}return Ta(e,t,i,r,a)}function Vu(e,t,i){var r=t.pendingProps,a=r.children,c=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(bn,Ct),Ct|=i;else{if((i&1073741824)===0)return e=c!==null?c.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Te(bn,Ct),Ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=c!==null?c.baseLanes:i,Te(bn,Ct),Ct|=r}else c!==null?(r=c.baseLanes|i,t.memoizedState=null):r=i,Te(bn,Ct),Ct|=r;return ut(e,t,a,i),t.child}function $u(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function Ta(e,t,i,r,a){var c=mt(i)?Ui:ot.current;return c=un(t,c),fn(t,a),i=ya(e,t,i,r,c,a),r=va(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,ai(e,t,a)):(Le&&r&&ea(t),t.flags|=1,ut(e,t,i,a),t.child)}function Ku(e,t,i,r,a){if(mt(i)){var c=!0;to(t)}else c=!1;if(fn(t,a),t.stateNode===null)bo(e,t),_u(t,i,r),Ia(t,i,r,a),r=!0;else if(e===null){var p=t.stateNode,y=t.memoizedProps;p.props=y;var k=p.context,A=i.contextType;typeof A=="object"&&A!==null?A=Rt(A):(A=mt(i)?Ui:ot.current,A=un(t,A));var B=i.getDerivedStateFromProps,V=typeof B=="function"||typeof p.getSnapshotBeforeUpdate=="function";V||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(y!==r||k!==A)&&Uu(t,p,r,A),xi=!1;var W=t.memoizedState;p.state=W,uo(t,r,p,a),k=t.memoizedState,y!==r||W!==k||pt.current||xi?(typeof B=="function"&&(xa(t,i,B,r),k=t.memoizedState),(y=xi||Lu(t,i,y,r,W,k,A))?(V||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(t.flags|=4194308)):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=k),p.props=r,p.state=k,p.context=A,r=y):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{p=t.stateNode,cu(e,t),y=t.memoizedProps,A=t.type===t.elementType?y:zt(t.type,y),p.props=A,V=t.pendingProps,W=p.context,k=i.contextType,typeof k=="object"&&k!==null?k=Rt(k):(k=mt(i)?Ui:ot.current,k=un(t,k));var J=i.getDerivedStateFromProps;(B=typeof J=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(y!==V||W!==k)&&Uu(t,p,r,k),xi=!1,W=t.memoizedState,p.state=W,uo(t,r,p,a);var Z=t.memoizedState;y!==V||W!==Z||pt.current||xi?(typeof J=="function"&&(xa(t,i,J,r),Z=t.memoizedState),(A=xi||Lu(t,i,A,r,W,Z,k)||!1)?(B||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(r,Z,k),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(r,Z,k)),typeof p.componentDidUpdate=="function"&&(t.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof p.componentDidUpdate!="function"||y===e.memoizedProps&&W===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&W===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=Z),p.props=r,p.state=Z,p.context=k,r=A):(typeof p.componentDidUpdate!="function"||y===e.memoizedProps&&W===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&W===e.memoizedState||(t.flags|=1024),r=!1)}return Ea(e,t,i,r,c,a)}function Ea(e,t,i,r,a,c){$u(e,t);var p=(t.flags&128)!==0;if(!r&&!p)return a&&Xc(t,i,!1),ai(e,t,c);r=t.stateNode,qm.current=t;var y=p&&typeof i.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&p?(t.child=mn(t,e.child,null,c),t.child=mn(t,null,y,c)):ut(e,t,y,c),t.memoizedState=r.state,a&&Xc(t,i,!0),t.child}function Gu(e){var t=e.stateNode;t.pendingContext?Yc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Yc(e,t.context,!1),da(e,t.containerInfo)}function Qu(e,t,i,r,a){return pn(),ra(a),t.flags|=256,ut(e,t,i,r),t.child}var Da={dehydrated:null,treeContext:null,retryLane:0};function Ra(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yu(e,t,i){var r=t.pendingProps,a=Fe.current,c=!1,p=(t.flags&128)!==0,y;if((y=p)||(y=e!==null&&e.memoizedState===null?!1:(a&2)!==0),y?(c=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Te(Fe,a&1),e===null)return na(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(p=r.children,e=r.fallback,c?(r=t.mode,c=t.child,p={mode:"hidden",children:p},(r&1)===0&&c!==null?(c.childLanes=0,c.pendingProps=p):c=Mo(p,r,0,null),e=$i(e,r,i,null),c.return=t,e.return=t,c.sibling=e,t.child=c,t.child.memoizedState=Ra(i),t.memoizedState=Da,e):Aa(t,p));if(a=e.memoizedState,a!==null&&(y=a.dehydrated,y!==null))return Vm(e,t,p,r,y,a,i);if(c){c=r.fallback,p=t.mode,a=e.child,y=a.sibling;var k={mode:"hidden",children:r.children};return(p&1)===0&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=k,t.deletions=null):(r=Ri(a,k),r.subtreeFlags=a.subtreeFlags&14680064),y!==null?c=Ri(y,c):(c=$i(c,p,i,null),c.flags|=2),c.return=t,r.return=t,r.sibling=c,t.child=r,r=c,c=t.child,p=e.child.memoizedState,p=p===null?Ra(i):{baseLanes:p.baseLanes|i,cachePool:null,transitions:p.transitions},c.memoizedState=p,c.childLanes=e.childLanes&~i,t.memoizedState=Da,r}return c=e.child,e=c.sibling,r=Ri(c,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=i),r.return=t,r.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=r,t.memoizedState=null,r}function Aa(e,t){return t=Mo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wo(e,t,i,r){return r!==null&&ra(r),mn(t,e.child,null,i),e=Aa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Vm(e,t,i,r,a,c,p){if(i)return t.flags&256?(t.flags&=-257,r=Pa(Error(o(422))),wo(e,t,p,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(c=r.fallback,a=t.mode,r=Mo({mode:"visible",children:r.children},a,0,null),c=$i(c,a,p,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,(t.mode&1)!==0&&mn(t,e.child,null,p),t.child.memoizedState=Ra(p),t.memoizedState=Da,c);if((t.mode&1)===0)return wo(e,t,p,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var y=r.dgst;return r=y,c=Error(o(419)),r=Pa(c,r,void 0),wo(e,t,p,r)}if(y=(p&e.childLanes)!==0,gt||y){if(r=et,r!==null){switch(p&-p){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(r.suspendedLanes|p))!==0?0:a,a!==0&&a!==c.retryLane&&(c.retryLane=a,oi(e,a),Bt(r,e,a,-1))}return Ka(),r=Pa(Error(o(421))),wo(e,t,p,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=rg.bind(null,e),a._reactRetry=t,null):(e=c.treeContext,Pt=wi(a.nextSibling),It=t,Le=!0,Nt=null,e!==null&&(Et[Dt++]=ni,Et[Dt++]=ri,Et[Dt++]=Fi,ni=e.id,ri=e.overflow,Fi=t),t=Aa(t,r.children),t.flags|=4096,t)}function Ju(e,t,i){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),la(e.return,t,i)}function Ma(e,t,i,r,a){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:a}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=r,c.tail=i,c.tailMode=a)}function Xu(e,t,i){var r=t.pendingProps,a=r.revealOrder,c=r.tail;if(ut(e,t,r.children,i),r=Fe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ju(e,i,t);else if(e.tag===19)Ju(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Te(Fe,r),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(i=t.child,a=null;i!==null;)e=i.alternate,e!==null&&ho(e)===null&&(a=i),i=i.sibling;i=a,i===null?(a=t.child,t.child=null):(a=i.sibling,i.sibling=null),Ma(t,!1,a,i,c);break;case"backwards":for(i=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ho(e)===null){t.child=a;break}e=a.sibling,a.sibling=i,i=a,a=e}Ma(t,!0,i,null,c);break;case"together":Ma(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ai(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Bi|=t.lanes,(i&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,i=Ri(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=Ri(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function $m(e,t,i){switch(t.tag){case 3:Gu(t),pn();break;case 5:hu(t);break;case 1:mt(t.type)&&to(t);break;case 4:da(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Te(ao,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Te(Fe,Fe.current&1),t.flags|=128,null):(i&t.child.childLanes)!==0?Yu(e,t,i):(Te(Fe,Fe.current&1),e=ai(e,t,i),e!==null?e.sibling:null);Te(Fe,Fe.current&1);break;case 19:if(r=(i&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Xu(e,t,i);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Te(Fe,Fe.current),r)break;return null;case 22:case 23:return t.lanes=0,Vu(e,t,i)}return ai(e,t,i)}var Zu,Oa,ed,td;Zu=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Oa=function(){},ed=function(e,t,i,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,ji(Gt.current);var c=null;switch(i){case"input":a=Xe(e,a),r=Xe(e,r),c=[];break;case"select":a=Y({},a,{value:void 0}),r=Y({},r,{value:void 0}),c=[];break;case"textarea":a=ei(e,a),r=ei(e,r),c=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xr)}ps(i,r);var p;i=null;for(A in a)if(!r.hasOwnProperty(A)&&a.hasOwnProperty(A)&&a[A]!=null)if(A==="style"){var y=a[A];for(p in y)y.hasOwnProperty(p)&&(i||(i={}),i[p]="")}else A!=="dangerouslySetInnerHTML"&&A!=="children"&&A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&A!=="autoFocus"&&(u.hasOwnProperty(A)?c||(c=[]):(c=c||[]).push(A,null));for(A in r){var k=r[A];if(y=a!=null?a[A]:void 0,r.hasOwnProperty(A)&&k!==y&&(k!=null||y!=null))if(A==="style")if(y){for(p in y)!y.hasOwnProperty(p)||k&&k.hasOwnProperty(p)||(i||(i={}),i[p]="");for(p in k)k.hasOwnProperty(p)&&y[p]!==k[p]&&(i||(i={}),i[p]=k[p])}else i||(c||(c=[]),c.push(A,i)),i=k;else A==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,y=y?y.__html:void 0,k!=null&&y!==k&&(c=c||[]).push(A,k)):A==="children"?typeof k!="string"&&typeof k!="number"||(c=c||[]).push(A,""+k):A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&(u.hasOwnProperty(A)?(k!=null&&A==="onScroll"&&Re("scroll",e),c||y===k||(c=[])):(c=c||[]).push(A,k))}i&&(c=c||[]).push("style",i);var A=c;(t.updateQueue=A)&&(t.flags|=4)}},td=function(e,t,i,r){i!==r&&(t.flags|=4)};function ur(e,t){if(!Le)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function at(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,r=0;if(t)for(var a=e.child;a!==null;)i|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)i|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=i,t}function Km(e,t,i){var r=t.pendingProps;switch(ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(t),null;case 1:return mt(t.type)&&eo(),at(t),null;case 3:return r=t.stateNode,yn(),Ae(pt),Ae(ot),ma(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(oo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Nt!==null&&(qa(Nt),Nt=null))),Oa(e,t),at(t),null;case 5:ha(t);var a=ji(or.current);if(i=t.type,e!==null&&t.stateNode!=null)ed(e,t,i,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(o(166));return at(t),null}if(e=ji(Gt.current),oo(t)){r=t.stateNode,i=t.type;var c=t.memoizedProps;switch(r[Kt]=t,r[er]=c,e=(t.mode&1)!==0,i){case"dialog":Re("cancel",r),Re("close",r);break;case"iframe":case"object":case"embed":Re("load",r);break;case"video":case"audio":for(a=0;a<Jn.length;a++)Re(Jn[a],r);break;case"source":Re("error",r);break;case"img":case"image":case"link":Re("error",r),Re("load",r);break;case"details":Re("toggle",r);break;case"input":ye(r,c),Re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!c.multiple},Re("invalid",r);break;case"textarea":ht(r,c),Re("invalid",r)}ps(i,c),a=null;for(var p in c)if(c.hasOwnProperty(p)){var y=c[p];p==="children"?typeof y=="string"?r.textContent!==y&&(c.suppressHydrationWarning!==!0&&Jr(r.textContent,y,e),a=["children",y]):typeof y=="number"&&r.textContent!==""+y&&(c.suppressHydrationWarning!==!0&&Jr(r.textContent,y,e),a=["children",""+y]):u.hasOwnProperty(p)&&y!=null&&p==="onScroll"&&Re("scroll",r)}switch(i){case"input":we(r),$e(r,c,!0);break;case"textarea":we(r),Oe(r);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(r.onclick=Xr)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{p=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ji(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=p.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=p.createElement(i,{is:r.is}):(e=p.createElement(i),i==="select"&&(p=e,r.multiple?p.multiple=!0:r.size&&(p.size=r.size))):e=p.createElementNS(e,i),e[Kt]=t,e[er]=r,Zu(e,t,!1,!1),t.stateNode=e;e:{switch(p=ms(i,r),i){case"dialog":Re("cancel",e),Re("close",e),a=r;break;case"iframe":case"object":case"embed":Re("load",e),a=r;break;case"video":case"audio":for(a=0;a<Jn.length;a++)Re(Jn[a],e);a=r;break;case"source":Re("error",e),a=r;break;case"img":case"image":case"link":Re("error",e),Re("load",e),a=r;break;case"details":Re("toggle",e),a=r;break;case"input":ye(e,r),a=Xe(e,r),Re("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=Y({},r,{value:void 0}),Re("invalid",e);break;case"textarea":ht(e,r),a=ei(e,r),Re("invalid",e);break;default:a=r}ps(i,a),y=a;for(c in y)if(y.hasOwnProperty(c)){var k=y[c];c==="style"?ql(e,k):c==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Bl(e,k)):c==="children"?typeof k=="string"?(i!=="textarea"||k!=="")&&Mn(e,k):typeof k=="number"&&Mn(e,""+k):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(u.hasOwnProperty(c)?k!=null&&c==="onScroll"&&Re("scroll",e):k!=null&&H(e,c,k,p))}switch(i){case"input":we(e),$e(e,r,!1);break;case"textarea":we(e),Oe(e);break;case"option":r.value!=null&&e.setAttribute("value",""+z(r.value));break;case"select":e.multiple=!!r.multiple,c=r.value,c!=null?_t(e,!!r.multiple,c,!1):r.defaultValue!=null&&_t(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Xr)}switch(i){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return at(t),null;case 6:if(e&&t.stateNode!=null)td(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(o(166));if(i=ji(or.current),ji(Gt.current),oo(t)){if(r=t.stateNode,i=t.memoizedProps,r[Kt]=t,(c=r.nodeValue!==i)&&(e=It,e!==null))switch(e.tag){case 3:Jr(r.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Jr(r.nodeValue,i,(e.mode&1)!==0)}c&&(t.flags|=4)}else r=(i.nodeType===9?i:i.ownerDocument).createTextNode(r),r[Kt]=t,t.stateNode=r}return at(t),null;case 13:if(Ae(Fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Le&&Pt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ru(),pn(),t.flags|=98560,c=!1;else if(c=oo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(o(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(o(317));c[Kt]=t}else pn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;at(t),c=!1}else Nt!==null&&(qa(Nt),Nt=null),c=!0;if(!c)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=i,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Fe.current&1)!==0?Ye===0&&(Ye=3):Ka())),t.updateQueue!==null&&(t.flags|=4),at(t),null);case 4:return yn(),Oa(e,t),e===null&&Xn(t.stateNode.containerInfo),at(t),null;case 10:return aa(t.type._context),at(t),null;case 17:return mt(t.type)&&eo(),at(t),null;case 19:if(Ae(Fe),c=t.memoizedState,c===null)return at(t),null;if(r=(t.flags&128)!==0,p=c.rendering,p===null)if(r)ur(c,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(p=ho(e),p!==null){for(t.flags|=128,ur(c,!1),r=p.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=i,i=t.child;i!==null;)c=i,e=r,c.flags&=14680066,p=c.alternate,p===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=p.childLanes,c.lanes=p.lanes,c.child=p.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=p.memoizedProps,c.memoizedState=p.memoizedState,c.updateQueue=p.updateQueue,c.type=p.type,e=p.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Te(Fe,Fe.current&1|2),t.child}e=e.sibling}c.tail!==null&&Be()>kn&&(t.flags|=128,r=!0,ur(c,!1),t.lanes=4194304)}else{if(!r)if(e=ho(p),e!==null){if(t.flags|=128,r=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),ur(c,!0),c.tail===null&&c.tailMode==="hidden"&&!p.alternate&&!Le)return at(t),null}else 2*Be()-c.renderingStartTime>kn&&i!==1073741824&&(t.flags|=128,r=!0,ur(c,!1),t.lanes=4194304);c.isBackwards?(p.sibling=t.child,t.child=p):(i=c.last,i!==null?i.sibling=p:t.child=p,c.last=p)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=Be(),t.sibling=null,i=Fe.current,Te(Fe,r?i&1|2:i&1),t):(at(t),null);case 22:case 23:return $a(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ct&1073741824)!==0&&(at(t),t.subtreeFlags&6&&(t.flags|=8192)):at(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function Gm(e,t){switch(ta(t),t.tag){case 1:return mt(t.type)&&eo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yn(),Ae(pt),Ae(ot),ma(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ha(t),null;case 13:if(Ae(Fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ae(Fe),null;case 4:return yn(),null;case 10:return aa(t.type._context),null;case 22:case 23:return $a(),null;case 24:return null;default:return null}}var ko=!1,lt=!1,Qm=typeof WeakSet=="function"?WeakSet:Set,X=null;function wn(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(r){We(e,t,r)}else i.current=null}function La(e,t,i){try{i()}catch(r){We(e,t,r)}}var id=!1;function Ym(e,t){if($s=jr,e=Lc(),Ns(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var r=i.getSelection&&i.getSelection();if(r&&r.rangeCount!==0){i=r.anchorNode;var a=r.anchorOffset,c=r.focusNode;r=r.focusOffset;try{i.nodeType,c.nodeType}catch{i=null;break e}var p=0,y=-1,k=-1,A=0,B=0,V=e,W=null;t:for(;;){for(var J;V!==i||a!==0&&V.nodeType!==3||(y=p+a),V!==c||r!==0&&V.nodeType!==3||(k=p+r),V.nodeType===3&&(p+=V.nodeValue.length),(J=V.firstChild)!==null;)W=V,V=J;for(;;){if(V===e)break t;if(W===i&&++A===a&&(y=p),W===c&&++B===r&&(k=p),(J=V.nextSibling)!==null)break;V=W,W=V.parentNode}V=J}i=y===-1||k===-1?null:{start:y,end:k}}else i=null}i=i||{start:0,end:0}}else i=null;for(Ks={focusedElem:e,selectionRange:i},jr=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var Z=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(Z!==null){var ee=Z.memoizedProps,He=Z.memoizedState,T=t.stateNode,S=T.getSnapshotBeforeUpdate(t.elementType===t.type?ee:zt(t.type,ee),He);T.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var R=t.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch($){We(t,t.return,$)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return Z=id,id=!1,Z}function dr(e,t,i){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var c=a.destroy;a.destroy=void 0,c!==void 0&&La(t,i,c)}a=a.next}while(a!==r)}}function So(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var r=i.create;i.destroy=r()}i=i.next}while(i!==t)}}function _a(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function nd(e){var t=e.alternate;t!==null&&(e.alternate=null,nd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Kt],delete t[er],delete t[Js],delete t[Mm],delete t[Om])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rd(e){return e.tag===5||e.tag===3||e.tag===4}function od(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ua(e,t,i){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=Xr));else if(r!==4&&(e=e.child,e!==null))for(Ua(e,t,i),e=e.sibling;e!==null;)Ua(e,t,i),e=e.sibling}function Fa(e,t,i){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fa(e,t,i),e=e.sibling;e!==null;)Fa(e,t,i),e=e.sibling}var nt=null,jt=!1;function Pi(e,t,i){for(i=i.child;i!==null;)sd(e,t,i),i=i.sibling}function sd(e,t,i){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(Lr,i)}catch{}switch(i.tag){case 5:lt||wn(i,t);case 6:var r=nt,a=jt;nt=null,Pi(e,t,i),nt=r,jt=a,nt!==null&&(jt?(e=nt,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):nt.removeChild(i.stateNode));break;case 18:nt!==null&&(jt?(e=nt,i=i.stateNode,e.nodeType===8?Ys(e.parentNode,i):e.nodeType===1&&Ys(e,i),Hn(e)):Ys(nt,i.stateNode));break;case 4:r=nt,a=jt,nt=i.stateNode.containerInfo,jt=!0,Pi(e,t,i),nt=r,jt=a;break;case 0:case 11:case 14:case 15:if(!lt&&(r=i.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var c=a,p=c.destroy;c=c.tag,p!==void 0&&((c&2)!==0||(c&4)!==0)&&La(i,t,p),a=a.next}while(a!==r)}Pi(e,t,i);break;case 1:if(!lt&&(wn(i,t),r=i.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=i.memoizedProps,r.state=i.memoizedState,r.componentWillUnmount()}catch(y){We(i,t,y)}Pi(e,t,i);break;case 21:Pi(e,t,i);break;case 22:i.mode&1?(lt=(r=lt)||i.memoizedState!==null,Pi(e,t,i),lt=r):Pi(e,t,i);break;default:Pi(e,t,i)}}function ad(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Qm),t.forEach(function(r){var a=og.bind(null,e,r);i.has(r)||(i.add(r),r.then(a,a))})}}function Wt(e,t){var i=t.deletions;if(i!==null)for(var r=0;r<i.length;r++){var a=i[r];try{var c=e,p=t,y=p;e:for(;y!==null;){switch(y.tag){case 5:nt=y.stateNode,jt=!1;break e;case 3:nt=y.stateNode.containerInfo,jt=!0;break e;case 4:nt=y.stateNode.containerInfo,jt=!0;break e}y=y.return}if(nt===null)throw Error(o(160));sd(c,p,a),nt=null,jt=!1;var k=a.alternate;k!==null&&(k.return=null),a.return=null}catch(A){We(a,t,A)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ld(t,e),t=t.sibling}function ld(e,t){var i=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Wt(t,e),Yt(e),r&4){try{dr(3,e,e.return),So(3,e)}catch(ee){We(e,e.return,ee)}try{dr(5,e,e.return)}catch(ee){We(e,e.return,ee)}}break;case 1:Wt(t,e),Yt(e),r&512&&i!==null&&wn(i,i.return);break;case 5:if(Wt(t,e),Yt(e),r&512&&i!==null&&wn(i,i.return),e.flags&32){var a=e.stateNode;try{Mn(a,"")}catch(ee){We(e,e.return,ee)}}if(r&4&&(a=e.stateNode,a!=null)){var c=e.memoizedProps,p=i!==null?i.memoizedProps:c,y=e.type,k=e.updateQueue;if(e.updateQueue=null,k!==null)try{y==="input"&&c.type==="radio"&&c.name!=null&&Ge(a,c),ms(y,p);var A=ms(y,c);for(p=0;p<k.length;p+=2){var B=k[p],V=k[p+1];B==="style"?ql(a,V):B==="dangerouslySetInnerHTML"?Bl(a,V):B==="children"?Mn(a,V):H(a,B,V,A)}switch(y){case"input":be(a,c);break;case"textarea":le(a,c);break;case"select":var W=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!c.multiple;var J=c.value;J!=null?_t(a,!!c.multiple,J,!1):W!==!!c.multiple&&(c.defaultValue!=null?_t(a,!!c.multiple,c.defaultValue,!0):_t(a,!!c.multiple,c.multiple?[]:"",!1))}a[er]=c}catch(ee){We(e,e.return,ee)}}break;case 6:if(Wt(t,e),Yt(e),r&4){if(e.stateNode===null)throw Error(o(162));a=e.stateNode,c=e.memoizedProps;try{a.nodeValue=c}catch(ee){We(e,e.return,ee)}}break;case 3:if(Wt(t,e),Yt(e),r&4&&i!==null&&i.memoizedState.isDehydrated)try{Hn(t.containerInfo)}catch(ee){We(e,e.return,ee)}break;case 4:Wt(t,e),Yt(e);break;case 13:Wt(t,e),Yt(e),a=e.child,a.flags&8192&&(c=a.memoizedState!==null,a.stateNode.isHidden=c,!c||a.alternate!==null&&a.alternate.memoizedState!==null||(ja=Be())),r&4&&ad(e);break;case 22:if(B=i!==null&&i.memoizedState!==null,e.mode&1?(lt=(A=lt)||B,Wt(t,e),lt=A):Wt(t,e),Yt(e),r&8192){if(A=e.memoizedState!==null,(e.stateNode.isHidden=A)&&!B&&(e.mode&1)!==0)for(X=e,B=e.child;B!==null;){for(V=X=B;X!==null;){switch(W=X,J=W.child,W.tag){case 0:case 11:case 14:case 15:dr(4,W,W.return);break;case 1:wn(W,W.return);var Z=W.stateNode;if(typeof Z.componentWillUnmount=="function"){r=W,i=W.return;try{t=r,Z.props=t.memoizedProps,Z.state=t.memoizedState,Z.componentWillUnmount()}catch(ee){We(r,i,ee)}}break;case 5:wn(W,W.return);break;case 22:if(W.memoizedState!==null){dd(V);continue}}J!==null?(J.return=W,X=J):dd(V)}B=B.sibling}e:for(B=null,V=e;;){if(V.tag===5){if(B===null){B=V;try{a=V.stateNode,A?(c=a.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(y=V.stateNode,k=V.memoizedProps.style,p=k!=null&&k.hasOwnProperty("display")?k.display:null,y.style.display=Hl("display",p))}catch(ee){We(e,e.return,ee)}}}else if(V.tag===6){if(B===null)try{V.stateNode.nodeValue=A?"":V.memoizedProps}catch(ee){We(e,e.return,ee)}}else if((V.tag!==22&&V.tag!==23||V.memoizedState===null||V===e)&&V.child!==null){V.child.return=V,V=V.child;continue}if(V===e)break e;for(;V.sibling===null;){if(V.return===null||V.return===e)break e;B===V&&(B=null),V=V.return}B===V&&(B=null),V.sibling.return=V.return,V=V.sibling}}break;case 19:Wt(t,e),Yt(e),r&4&&ad(e);break;case 21:break;default:Wt(t,e),Yt(e)}}function Yt(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(rd(i)){var r=i;break e}i=i.return}throw Error(o(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Mn(a,""),r.flags&=-33);var c=od(e);Fa(e,c,a);break;case 3:case 4:var p=r.stateNode.containerInfo,y=od(e);Ua(e,y,p);break;default:throw Error(o(161))}}catch(k){We(e,e.return,k)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jm(e,t,i){X=e,cd(e)}function cd(e,t,i){for(var r=(e.mode&1)!==0;X!==null;){var a=X,c=a.child;if(a.tag===22&&r){var p=a.memoizedState!==null||ko;if(!p){var y=a.alternate,k=y!==null&&y.memoizedState!==null||lt;y=ko;var A=lt;if(ko=p,(lt=k)&&!A)for(X=a;X!==null;)p=X,k=p.child,p.tag===22&&p.memoizedState!==null?hd(a):k!==null?(k.return=p,X=k):hd(a);for(;c!==null;)X=c,cd(c),c=c.sibling;X=a,ko=y,lt=A}ud(e)}else(a.subtreeFlags&8772)!==0&&c!==null?(c.return=a,X=c):ud(e)}}function ud(e){for(;X!==null;){var t=X;if((t.flags&8772)!==0){var i=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:lt||So(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!lt)if(i===null)r.componentDidMount();else{var a=t.elementType===t.type?i.memoizedProps:zt(t.type,i.memoizedProps);r.componentDidUpdate(a,i.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&du(t,c,r);break;case 3:var p=t.updateQueue;if(p!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}du(t,p,i)}break;case 5:var y=t.stateNode;if(i===null&&t.flags&4){i=y;var k=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&i.focus();break;case"img":k.src&&(i.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var A=t.alternate;if(A!==null){var B=A.memoizedState;if(B!==null){var V=B.dehydrated;V!==null&&Hn(V)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}lt||t.flags&512&&_a(t)}catch(W){We(t,t.return,W)}}if(t===e){X=null;break}if(i=t.sibling,i!==null){i.return=t.return,X=i;break}X=t.return}}function dd(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var i=t.sibling;if(i!==null){i.return=t.return,X=i;break}X=t.return}}function hd(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{So(4,t)}catch(k){We(t,i,k)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(k){We(t,a,k)}}var c=t.return;try{_a(t)}catch(k){We(t,c,k)}break;case 5:var p=t.return;try{_a(t)}catch(k){We(t,p,k)}}}catch(k){We(t,t.return,k)}if(t===e){X=null;break}var y=t.sibling;if(y!==null){y.return=t.return,X=y;break}X=t.return}}var Xm=Math.ceil,xo=G.ReactCurrentDispatcher,Na=G.ReactCurrentOwner,Mt=G.ReactCurrentBatchConfig,ke=0,et=null,Ke=null,rt=0,Ct=0,bn=bi(0),Ye=0,hr=null,Bi=0,Io=0,za=0,pr=null,ft=null,ja=0,kn=1/0,li=null,Po=!1,Wa=null,Ci=null,Co=!1,Ti=null,To=0,mr=0,Ba=null,Eo=-1,Do=0;function dt(){return(ke&6)!==0?Be():Eo!==-1?Eo:Eo=Be()}function Ei(e){return(e.mode&1)===0?1:(ke&2)!==0&&rt!==0?rt&-rt:_m.transition!==null?(Do===0&&(Do=oc()),Do):(e=Ie,e!==0||(e=window.event,e=e===void 0?16:mc(e.type)),e)}function Bt(e,t,i,r){if(50<mr)throw mr=0,Ba=null,Error(o(185));Nn(e,i,r),((ke&2)===0||e!==et)&&(e===et&&((ke&2)===0&&(Io|=i),Ye===4&&Di(e,rt)),yt(e,r),i===1&&ke===0&&(t.mode&1)===0&&(kn=Be()+500,io&&Si()))}function yt(e,t){var i=e.callbackNode;_p(e,t);var r=Fr(e,e===et?rt:0);if(r===0)i!==null&&ic(i),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(i!=null&&ic(i),t===1)e.tag===0?Lm(md.bind(null,e)):Zc(md.bind(null,e)),Rm(function(){(ke&6)===0&&Si()}),i=null;else{switch(sc(r)){case 1:i=ks;break;case 4:i=nc;break;case 16:i=Or;break;case 536870912:i=rc;break;default:i=Or}i=Sd(i,pd.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function pd(e,t){if(Eo=-1,Do=0,(ke&6)!==0)throw Error(o(327));var i=e.callbackNode;if(Sn()&&e.callbackNode!==i)return null;var r=Fr(e,e===et?rt:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ro(e,r);else{t=r;var a=ke;ke|=2;var c=fd();(et!==e||rt!==t)&&(li=null,kn=Be()+500,qi(e,t));do try{tg();break}catch(y){gd(e,y)}while(!0);sa(),xo.current=c,ke=a,Ke!==null?t=0:(et=null,rt=0,t=Ye)}if(t!==0){if(t===2&&(a=Ss(e),a!==0&&(r=a,t=Ha(e,a))),t===1)throw i=hr,qi(e,0),Di(e,r),yt(e,Be()),i;if(t===6)Di(e,r);else{if(a=e.current.alternate,(r&30)===0&&!Zm(a)&&(t=Ro(e,r),t===2&&(c=Ss(e),c!==0&&(r=c,t=Ha(e,c))),t===1))throw i=hr,qi(e,0),Di(e,r),yt(e,Be()),i;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:Vi(e,ft,li);break;case 3:if(Di(e,r),(r&130023424)===r&&(t=ja+500-Be(),10<t)){if(Fr(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){dt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Qs(Vi.bind(null,e,ft,li),t);break}Vi(e,ft,li);break;case 4:if(Di(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var p=31-Ut(r);c=1<<p,p=t[p],p>a&&(a=p),r&=~c}if(r=a,r=Be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Xm(r/1960))-r,10<r){e.timeoutHandle=Qs(Vi.bind(null,e,ft,li),r);break}Vi(e,ft,li);break;case 5:Vi(e,ft,li);break;default:throw Error(o(329))}}}return yt(e,Be()),e.callbackNode===i?pd.bind(null,e):null}function Ha(e,t){var i=pr;return e.current.memoizedState.isDehydrated&&(qi(e,t).flags|=256),e=Ro(e,t),e!==2&&(t=ft,ft=i,t!==null&&qa(t)),e}function qa(e){ft===null?ft=e:ft.push.apply(ft,e)}function Zm(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var r=0;r<i.length;r++){var a=i[r],c=a.getSnapshot;a=a.value;try{if(!Ft(c(),a))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Di(e,t){for(t&=~za,t&=~Io,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-Ut(t),r=1<<i;e[i]=-1,t&=~r}}function md(e){if((ke&6)!==0)throw Error(o(327));Sn();var t=Fr(e,0);if((t&1)===0)return yt(e,Be()),null;var i=Ro(e,t);if(e.tag!==0&&i===2){var r=Ss(e);r!==0&&(t=r,i=Ha(e,r))}if(i===1)throw i=hr,qi(e,0),Di(e,t),yt(e,Be()),i;if(i===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Vi(e,ft,li),yt(e,Be()),null}function Va(e,t){var i=ke;ke|=1;try{return e(t)}finally{ke=i,ke===0&&(kn=Be()+500,io&&Si())}}function Hi(e){Ti!==null&&Ti.tag===0&&(ke&6)===0&&Sn();var t=ke;ke|=1;var i=Mt.transition,r=Ie;try{if(Mt.transition=null,Ie=1,e)return e()}finally{Ie=r,Mt.transition=i,ke=t,(ke&6)===0&&Si()}}function $a(){Ct=bn.current,Ae(bn)}function qi(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,Dm(i)),Ke!==null)for(i=Ke.return;i!==null;){var r=i;switch(ta(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&eo();break;case 3:yn(),Ae(pt),Ae(ot),ma();break;case 5:ha(r);break;case 4:yn();break;case 13:Ae(Fe);break;case 19:Ae(Fe);break;case 10:aa(r.type._context);break;case 22:case 23:$a()}i=i.return}if(et=e,Ke=e=Ri(e.current,null),rt=Ct=t,Ye=0,hr=null,za=Io=Bi=0,ft=pr=null,zi!==null){for(t=0;t<zi.length;t++)if(i=zi[t],r=i.interleaved,r!==null){i.interleaved=null;var a=r.next,c=i.pending;if(c!==null){var p=c.next;c.next=a,r.next=p}i.pending=r}zi=null}return e}function gd(e,t){do{var i=Ke;try{if(sa(),po.current=yo,mo){for(var r=Ne.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}mo=!1}if(Wi=0,Ze=Qe=Ne=null,sr=!1,ar=0,Na.current=null,i===null||i.return===null){Ye=1,hr=t,Ke=null;break}e:{var c=e,p=i.return,y=i,k=t;if(t=rt,y.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var A=k,B=y,V=B.tag;if((B.mode&1)===0&&(V===0||V===11||V===15)){var W=B.alternate;W?(B.updateQueue=W.updateQueue,B.memoizedState=W.memoizedState,B.lanes=W.lanes):(B.updateQueue=null,B.memoizedState=null)}var J=ju(p);if(J!==null){J.flags&=-257,Wu(J,p,y,c,t),J.mode&1&&zu(c,A,t),t=J,k=A;var Z=t.updateQueue;if(Z===null){var ee=new Set;ee.add(k),t.updateQueue=ee}else Z.add(k);break e}else{if((t&1)===0){zu(c,A,t),Ka();break e}k=Error(o(426))}}else if(Le&&y.mode&1){var He=ju(p);if(He!==null){(He.flags&65536)===0&&(He.flags|=256),Wu(He,p,y,c,t),ra(vn(k,y));break e}}c=k=vn(k,y),Ye!==4&&(Ye=2),pr===null?pr=[c]:pr.push(c),c=p;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var T=Fu(c,k,t);uu(c,T);break e;case 1:y=k;var S=c.type,R=c.stateNode;if((c.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(Ci===null||!Ci.has(R)))){c.flags|=65536,t&=-t,c.lanes|=t;var $=Nu(c,y,t);uu(c,$);break e}}c=c.return}while(c!==null)}vd(i)}catch(te){t=te,Ke===i&&i!==null&&(Ke=i=i.return);continue}break}while(!0)}function fd(){var e=xo.current;return xo.current=yo,e===null?yo:e}function Ka(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),et===null||(Bi&268435455)===0&&(Io&268435455)===0||Di(et,rt)}function Ro(e,t){var i=ke;ke|=2;var r=fd();(et!==e||rt!==t)&&(li=null,qi(e,t));do try{eg();break}catch(a){gd(e,a)}while(!0);if(sa(),ke=i,xo.current=r,Ke!==null)throw Error(o(261));return et=null,rt=0,Ye}function eg(){for(;Ke!==null;)yd(Ke)}function tg(){for(;Ke!==null&&!Cp();)yd(Ke)}function yd(e){var t=kd(e.alternate,e,Ct);e.memoizedProps=e.pendingProps,t===null?vd(e):Ke=t,Na.current=null}function vd(e){var t=e;do{var i=t.alternate;if(e=t.return,(t.flags&32768)===0){if(i=Km(i,t,Ct),i!==null){Ke=i;return}}else{if(i=Gm(i,t),i!==null){i.flags&=32767,Ke=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ye=6,Ke=null;return}}if(t=t.sibling,t!==null){Ke=t;return}Ke=t=e}while(t!==null);Ye===0&&(Ye=5)}function Vi(e,t,i){var r=Ie,a=Mt.transition;try{Mt.transition=null,Ie=1,ig(e,t,i,r)}finally{Mt.transition=a,Ie=r}return null}function ig(e,t,i,r){do Sn();while(Ti!==null);if((ke&6)!==0)throw Error(o(327));i=e.finishedWork;var a=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var c=i.lanes|i.childLanes;if(Up(e,c),e===et&&(Ke=et=null,rt=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||Co||(Co=!0,Sd(Or,function(){return Sn(),null})),c=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||c){c=Mt.transition,Mt.transition=null;var p=Ie;Ie=1;var y=ke;ke|=4,Na.current=null,Ym(e,i),ld(i,e),Sm(Ks),jr=!!$s,Ks=$s=null,e.current=i,Jm(i),Tp(),ke=y,Ie=p,Mt.transition=c}else e.current=i;if(Co&&(Co=!1,Ti=e,To=a),c=e.pendingLanes,c===0&&(Ci=null),Rp(i.stateNode),yt(e,Be()),t!==null)for(r=e.onRecoverableError,i=0;i<t.length;i++)a=t[i],r(a.value,{componentStack:a.stack,digest:a.digest});if(Po)throw Po=!1,e=Wa,Wa=null,e;return(To&1)!==0&&e.tag!==0&&Sn(),c=e.pendingLanes,(c&1)!==0?e===Ba?mr++:(mr=0,Ba=e):mr=0,Si(),null}function Sn(){if(Ti!==null){var e=sc(To),t=Mt.transition,i=Ie;try{if(Mt.transition=null,Ie=16>e?16:e,Ti===null)var r=!1;else{if(e=Ti,Ti=null,To=0,(ke&6)!==0)throw Error(o(331));var a=ke;for(ke|=4,X=e.current;X!==null;){var c=X,p=c.child;if((X.flags&16)!==0){var y=c.deletions;if(y!==null){for(var k=0;k<y.length;k++){var A=y[k];for(X=A;X!==null;){var B=X;switch(B.tag){case 0:case 11:case 15:dr(8,B,c)}var V=B.child;if(V!==null)V.return=B,X=V;else for(;X!==null;){B=X;var W=B.sibling,J=B.return;if(nd(B),B===A){X=null;break}if(W!==null){W.return=J,X=W;break}X=J}}}var Z=c.alternate;if(Z!==null){var ee=Z.child;if(ee!==null){Z.child=null;do{var He=ee.sibling;ee.sibling=null,ee=He}while(ee!==null)}}X=c}}if((c.subtreeFlags&2064)!==0&&p!==null)p.return=c,X=p;else e:for(;X!==null;){if(c=X,(c.flags&2048)!==0)switch(c.tag){case 0:case 11:case 15:dr(9,c,c.return)}var T=c.sibling;if(T!==null){T.return=c.return,X=T;break e}X=c.return}}var S=e.current;for(X=S;X!==null;){p=X;var R=p.child;if((p.subtreeFlags&2064)!==0&&R!==null)R.return=p,X=R;else e:for(p=S;X!==null;){if(y=X,(y.flags&2048)!==0)try{switch(y.tag){case 0:case 11:case 15:So(9,y)}}catch(te){We(y,y.return,te)}if(y===p){X=null;break e}var $=y.sibling;if($!==null){$.return=y.return,X=$;break e}X=y.return}}if(ke=a,Si(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(Lr,e)}catch{}r=!0}return r}finally{Ie=i,Mt.transition=t}}return!1}function wd(e,t,i){t=vn(i,t),t=Fu(e,t,1),e=Ii(e,t,1),t=dt(),e!==null&&(Nn(e,1,t),yt(e,t))}function We(e,t,i){if(e.tag===3)wd(e,e,i);else for(;t!==null;){if(t.tag===3){wd(t,e,i);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ci===null||!Ci.has(r))){e=vn(i,e),e=Nu(t,e,1),t=Ii(t,e,1),e=dt(),t!==null&&(Nn(t,1,e),yt(t,e));break}}t=t.return}}function ng(e,t,i){var r=e.pingCache;r!==null&&r.delete(t),t=dt(),e.pingedLanes|=e.suspendedLanes&i,et===e&&(rt&i)===i&&(Ye===4||Ye===3&&(rt&130023424)===rt&&500>Be()-ja?qi(e,0):za|=i),yt(e,t)}function bd(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ur,Ur<<=1,(Ur&130023424)===0&&(Ur=4194304)));var i=dt();e=oi(e,t),e!==null&&(Nn(e,t,i),yt(e,i))}function rg(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),bd(e,i)}function og(e,t){var i=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(i=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}r!==null&&r.delete(t),bd(e,i)}var kd;kd=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||pt.current)gt=!0;else{if((e.lanes&i)===0&&(t.flags&128)===0)return gt=!1,$m(e,t,i);gt=(e.flags&131072)!==0}else gt=!1,Le&&(t.flags&1048576)!==0&&eu(t,ro,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;bo(e,t),e=t.pendingProps;var a=un(t,ot.current);fn(t,i),a=ya(null,t,r,e,a,i);var c=va();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,mt(r)?(c=!0,to(t)):c=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ua(t),a.updater=vo,t.stateNode=a,a._reactInternals=t,Ia(t,r,e,i),t=Ea(null,t,r,!0,c,i)):(t.tag=0,Le&&c&&ea(t),ut(null,t,a,i),t=t.child),t;case 16:r=t.elementType;e:{switch(bo(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=ag(r),e=zt(r,e),a){case 0:t=Ta(null,t,r,e,i);break e;case 1:t=Ku(null,t,r,e,i);break e;case 11:t=Bu(null,t,r,e,i);break e;case 14:t=Hu(null,t,r,zt(r.type,e),i);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:zt(r,a),Ta(e,t,r,a,i);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:zt(r,a),Ku(e,t,r,a,i);case 3:e:{if(Gu(t),e===null)throw Error(o(387));r=t.pendingProps,c=t.memoizedState,a=c.element,cu(e,t),uo(t,r,null,i);var p=t.memoizedState;if(r=p.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){a=vn(Error(o(423)),t),t=Qu(e,t,r,i,a);break e}else if(r!==a){a=vn(Error(o(424)),t),t=Qu(e,t,r,i,a);break e}else for(Pt=wi(t.stateNode.containerInfo.firstChild),It=t,Le=!0,Nt=null,i=au(t,null,r,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(pn(),r===a){t=ai(e,t,i);break e}ut(e,t,r,i)}t=t.child}return t;case 5:return hu(t),e===null&&na(t),r=t.type,a=t.pendingProps,c=e!==null?e.memoizedProps:null,p=a.children,Gs(r,a)?p=null:c!==null&&Gs(r,c)&&(t.flags|=32),$u(e,t),ut(e,t,p,i),t.child;case 6:return e===null&&na(t),null;case 13:return Yu(e,t,i);case 4:return da(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mn(t,null,r,i):ut(e,t,r,i),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:zt(r,a),Bu(e,t,r,a,i);case 7:return ut(e,t,t.pendingProps,i),t.child;case 8:return ut(e,t,t.pendingProps.children,i),t.child;case 12:return ut(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,c=t.memoizedProps,p=a.value,Te(ao,r._currentValue),r._currentValue=p,c!==null)if(Ft(c.value,p)){if(c.children===a.children&&!pt.current){t=ai(e,t,i);break e}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var y=c.dependencies;if(y!==null){p=c.child;for(var k=y.firstContext;k!==null;){if(k.context===r){if(c.tag===1){k=si(-1,i&-i),k.tag=2;var A=c.updateQueue;if(A!==null){A=A.shared;var B=A.pending;B===null?k.next=k:(k.next=B.next,B.next=k),A.pending=k}}c.lanes|=i,k=c.alternate,k!==null&&(k.lanes|=i),la(c.return,i,t),y.lanes|=i;break}k=k.next}}else if(c.tag===10)p=c.type===t.type?null:c.child;else if(c.tag===18){if(p=c.return,p===null)throw Error(o(341));p.lanes|=i,y=p.alternate,y!==null&&(y.lanes|=i),la(p,i,t),p=c.sibling}else p=c.child;if(p!==null)p.return=c;else for(p=c;p!==null;){if(p===t){p=null;break}if(c=p.sibling,c!==null){c.return=p.return,p=c;break}p=p.return}c=p}ut(e,t,a.children,i),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,fn(t,i),a=Rt(a),r=r(a),t.flags|=1,ut(e,t,r,i),t.child;case 14:return r=t.type,a=zt(r,t.pendingProps),a=zt(r.type,a),Hu(e,t,r,a,i);case 15:return qu(e,t,t.type,t.pendingProps,i);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:zt(r,a),bo(e,t),t.tag=1,mt(r)?(e=!0,to(t)):e=!1,fn(t,i),_u(t,r,a),Ia(t,r,a,i),Ea(null,t,r,!0,e,i);case 19:return Xu(e,t,i);case 22:return Vu(e,t,i)}throw Error(o(156,t.tag))};function Sd(e,t){return tc(e,t)}function sg(e,t,i,r){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,i,r){return new sg(e,t,i,r)}function Ga(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ag(e){if(typeof e=="function")return Ga(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Me)return 11;if(e===De)return 14}return 2}function Ri(e,t){var i=e.alternate;return i===null?(i=Ot(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Ao(e,t,i,r,a,c){var p=2;if(r=e,typeof e=="function")Ga(e)&&(p=1);else if(typeof e=="string")p=5;else e:switch(e){case pe:return $i(i.children,a,c,t);case me:p=8,a|=8;break;case fe:return e=Ot(12,i,t,a|2),e.elementType=fe,e.lanes=c,e;case Ee:return e=Ot(13,i,t,a),e.elementType=Ee,e.lanes=c,e;case ze:return e=Ot(19,i,t,a),e.elementType=ze,e.lanes=c,e;case ve:return Mo(i,a,c,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ce:p=10;break e;case it:p=9;break e;case Me:p=11;break e;case De:p=14;break e;case Ve:p=16,r=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=Ot(p,i,t,a),t.elementType=e,t.type=r,t.lanes=c,t}function $i(e,t,i,r){return e=Ot(7,e,r,t),e.lanes=i,e}function Mo(e,t,i,r){return e=Ot(22,e,r,t),e.elementType=ve,e.lanes=i,e.stateNode={isHidden:!1},e}function Qa(e,t,i){return e=Ot(6,e,null,t),e.lanes=i,e}function Ya(e,t,i){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lg(e,t,i,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xs(0),this.expirationTimes=xs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xs(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ja(e,t,i,r,a,c,p,y,k){return e=new lg(e,t,i,y,k),t===1?(t=1,c===!0&&(t|=8)):t=0,c=Ot(3,null,null,t),e.current=c,c.stateNode=e,c.memoizedState={element:r,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},ua(c),e}function cg(e,t,i){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:se,key:r==null?null:""+r,children:e,containerInfo:t,implementation:i}}function xd(e){if(!e)return ki;e=e._reactInternals;e:{if(Li(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(mt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var i=e.type;if(mt(i))return Jc(e,i,t)}return t}function Id(e,t,i,r,a,c,p,y,k){return e=Ja(i,r,!0,e,a,c,p,y,k),e.context=xd(null),i=e.current,r=dt(),a=Ei(i),c=si(r,a),c.callback=t??null,Ii(i,c,a),e.current.lanes=a,Nn(e,a,r),yt(e,r),e}function Oo(e,t,i,r){var a=t.current,c=dt(),p=Ei(a);return i=xd(i),t.context===null?t.context=i:t.pendingContext=i,t=si(c,p),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ii(a,t,p),e!==null&&(Bt(e,a,p,c),co(e,a,p)),p}function Lo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function Xa(e,t){Pd(e,t),(e=e.alternate)&&Pd(e,t)}function ug(){return null}var Cd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Za(e){this._internalRoot=e}_o.prototype.render=Za.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));Oo(e,t,null,null)},_o.prototype.unmount=Za.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hi(function(){Oo(null,e,null,null)}),t[ti]=null}};function _o(e){this._internalRoot=e}_o.prototype.unstable_scheduleHydration=function(e){if(e){var t=cc();e={blockedOn:null,target:e,priority:t};for(var i=0;i<fi.length&&t!==0&&t<fi[i].priority;i++);fi.splice(i,0,e),i===0&&hc(e)}};function el(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Uo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Td(){}function dg(e,t,i,r,a){if(a){if(typeof r=="function"){var c=r;r=function(){var A=Lo(p);c.call(A)}}var p=Id(t,r,e,0,null,!1,!1,"",Td);return e._reactRootContainer=p,e[ti]=p.current,Xn(e.nodeType===8?e.parentNode:e),Hi(),p}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var y=r;r=function(){var A=Lo(k);y.call(A)}}var k=Ja(e,0,!1,null,null,!1,!1,"",Td);return e._reactRootContainer=k,e[ti]=k.current,Xn(e.nodeType===8?e.parentNode:e),Hi(function(){Oo(t,k,i,r)}),k}function Fo(e,t,i,r,a){var c=i._reactRootContainer;if(c){var p=c;if(typeof a=="function"){var y=a;a=function(){var k=Lo(p);y.call(k)}}Oo(t,p,e,a)}else p=dg(i,t,e,a,r);return Lo(p)}ac=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=Fn(t.pendingLanes);i!==0&&(Is(t,i|1),yt(t,Be()),(ke&6)===0&&(kn=Be()+500,Si()))}break;case 13:Hi(function(){var r=oi(e,1);if(r!==null){var a=dt();Bt(r,e,1,a)}}),Xa(e,1)}},Ps=function(e){if(e.tag===13){var t=oi(e,134217728);if(t!==null){var i=dt();Bt(t,e,134217728,i)}Xa(e,134217728)}},lc=function(e){if(e.tag===13){var t=Ei(e),i=oi(e,t);if(i!==null){var r=dt();Bt(i,e,t,r)}Xa(e,t)}},cc=function(){return Ie},uc=function(e,t){var i=Ie;try{return Ie=e,t()}finally{Ie=i}},ys=function(e,t,i){switch(t){case"input":if(be(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var r=i[t];if(r!==e&&r.form===e.form){var a=Zr(r);if(!a)throw Error(o(90));de(r),be(r,a)}}}break;case"textarea":le(e,i);break;case"select":t=i.value,t!=null&&_t(e,!!i.multiple,t,!1)}},Gl=Va,Ql=Hi;var hg={usingClientEntryPoint:!1,Events:[tr,ln,Zr,$l,Kl,Va]},gr={findFiberByHostInstance:_i,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pg={bundleType:gr.bundleType,version:gr.version,rendererPackageName:gr.rendererPackageName,rendererConfig:gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:G.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zl(e),e===null?null:e.stateNode},findFiberByHostInstance:gr.findFiberByHostInstance||ug,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var No=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!No.isDisabled&&No.supportsFiber)try{Lr=No.inject(pg),$t=No}catch{}}return vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hg,vt.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!el(t))throw Error(o(200));return cg(e,t,null,i)},vt.createRoot=function(e,t){if(!el(e))throw Error(o(299));var i=!1,r="",a=Cd;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Ja(e,1,!1,null,null,i,!1,r,a),e[ti]=t.current,Xn(e.nodeType===8?e.parentNode:e),new Za(t)},vt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=Zl(t),e=e===null?null:e.stateNode,e},vt.flushSync=function(e){return Hi(e)},vt.hydrate=function(e,t,i){if(!Uo(t))throw Error(o(200));return Fo(null,e,t,!0,i)},vt.hydrateRoot=function(e,t,i){if(!el(e))throw Error(o(405));var r=i!=null&&i.hydratedSources||null,a=!1,c="",p=Cd;if(i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(p=i.onRecoverableError)),t=Id(t,null,e,1,i??null,a,!1,c,p),e[ti]=t.current,Xn(e),r)for(e=0;e<r.length;e++)i=r[e],a=i._getVersion,a=a(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,a]:t.mutableSourceEagerHydrationData.push(i,a);return new _o(t)},vt.render=function(e,t,i){if(!Uo(t))throw Error(o(200));return Fo(null,e,t,!1,i)},vt.unmountComponentAtNode=function(e){if(!Uo(e))throw Error(o(40));return e._reactRootContainer?(Hi(function(){Fo(null,null,e,!1,function(){e._reactRootContainer=null,e[ti]=null})}),!0):!1},vt.unstable_batchedUpdates=Va,vt.unstable_renderSubtreeIntoContainer=function(e,t,i,r){if(!Uo(i))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Fo(e,t,i,!1,r)},vt.version="18.3.1-next-f1338f8080-20240426",vt}var _d;function kg(){if(_d)return nl.exports;_d=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(s){console.error(s)}}return n(),nl.exports=bg(),nl.exports}var Ud;function Sg(){if(Ud)return zo;Ud=1;var n=kg();return zo.createRoot=n.createRoot,zo.hydrateRoot=n.hydrateRoot,zo}var xg=Sg(),yr={},Fd;function Ig(){if(Fd)return yr;Fd=1,Object.defineProperty(yr,"__esModule",{value:!0}),yr.parse=h,yr.serialize=g;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,s=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,l=/^[\u0020-\u003A\u003D-\u007E]*$/,u=Object.prototype.toString,d=(()=>{const E=function(){};return E.prototype=Object.create(null),E})();function h(E,_){const v=new d,b=E.length;if(b<2)return v;const x=(_==null?void 0:_.decode)||w;let L=0;do{const F=E.indexOf("=",L);if(F===-1)break;const H=E.indexOf(";",L),G=H===-1?b:H;if(F>G){L=E.lastIndexOf(";",F-1)+1;continue}const U=m(E,L,F),se=f(E,F,U),pe=E.slice(U,se);if(v[pe]===void 0){let me=m(E,F+1,G),fe=f(E,G,me);const Ce=x(E.slice(me,fe));v[pe]=Ce}L=G+1}while(L<b);return v}function m(E,_,v){do{const b=E.charCodeAt(_);if(b!==32&&b!==9)return _}while(++_<v);return v}function f(E,_,v){for(;_>v;){const b=E.charCodeAt(--_);if(b!==32&&b!==9)return _+1}return v}function g(E,_,v){const b=(v==null?void 0:v.encode)||encodeURIComponent;if(!n.test(E))throw new TypeError(`argument name is invalid: ${E}`);const x=b(_);if(!s.test(x))throw new TypeError(`argument val is invalid: ${_}`);let L=E+"="+x;if(!v)return L;if(v.maxAge!==void 0){if(!Number.isInteger(v.maxAge))throw new TypeError(`option maxAge is invalid: ${v.maxAge}`);L+="; Max-Age="+v.maxAge}if(v.domain){if(!o.test(v.domain))throw new TypeError(`option domain is invalid: ${v.domain}`);L+="; Domain="+v.domain}if(v.path){if(!l.test(v.path))throw new TypeError(`option path is invalid: ${v.path}`);L+="; Path="+v.path}if(v.expires){if(!I(v.expires)||!Number.isFinite(v.expires.valueOf()))throw new TypeError(`option expires is invalid: ${v.expires}`);L+="; Expires="+v.expires.toUTCString()}if(v.httpOnly&&(L+="; HttpOnly"),v.secure&&(L+="; Secure"),v.partitioned&&(L+="; Partitioned"),v.priority)switch(typeof v.priority=="string"?v.priority.toLowerCase():void 0){case"low":L+="; Priority=Low";break;case"medium":L+="; Priority=Medium";break;case"high":L+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${v.priority}`)}if(v.sameSite)switch(typeof v.sameSite=="string"?v.sameSite.toLowerCase():v.sameSite){case!0:case"strict":L+="; SameSite=Strict";break;case"lax":L+="; SameSite=Lax";break;case"none":L+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${v.sameSite}`)}return L}function w(E){if(E.indexOf("%")===-1)return E;try{return decodeURIComponent(E)}catch{return E}}function I(E){return u.call(E)==="[object Date]"}return yr}Ig();var Nd="popstate";function Pg(n={}){function s(l,u){let{pathname:d,search:h,hash:m}=l.location;return fl("",{pathname:d,search:h,hash:m},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function o(l,u){return typeof u=="string"?u:kr(u)}return Tg(s,o,null,n)}function _e(n,s){if(n===!1||n===null||typeof n>"u")throw new Error(s)}function Ht(n,s){if(!n){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Cg(){return Math.random().toString(36).substring(2,10)}function zd(n,s){return{usr:n.state,key:n.key,idx:s}}function fl(n,s,o=null,l){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof s=="string"?Tn(s):s,state:o,key:s&&s.key||l||Cg()}}function kr({pathname:n="/",search:s="",hash:o=""}){return s&&s!=="?"&&(n+=s.charAt(0)==="?"?s:"?"+s),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function Tn(n){let s={};if(n){let o=n.indexOf("#");o>=0&&(s.hash=n.substring(o),n=n.substring(0,o));let l=n.indexOf("?");l>=0&&(s.search=n.substring(l),n=n.substring(0,l)),n&&(s.pathname=n)}return s}function Tg(n,s,o,l={}){let{window:u=document.defaultView,v5Compat:d=!1}=l,h=u.history,m="POP",f=null,g=w();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function w(){return(h.state||{idx:null}).idx}function I(){m="POP";let x=w(),L=x==null?null:x-g;g=x,f&&f({action:m,location:b.location,delta:L})}function E(x,L){m="PUSH";let F=fl(b.location,x,L);g=w()+1;let H=zd(F,g),G=b.createHref(F);try{h.pushState(H,"",G)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;u.location.assign(G)}d&&f&&f({action:m,location:b.location,delta:1})}function _(x,L){m="REPLACE";let F=fl(b.location,x,L);g=w();let H=zd(F,g),G=b.createHref(F);h.replaceState(H,"",G),d&&f&&f({action:m,location:b.location,delta:0})}function v(x){return Eg(x)}let b={get action(){return m},get location(){return n(u,h)},listen(x){if(f)throw new Error("A history only accepts one active listener");return u.addEventListener(Nd,I),f=x,()=>{u.removeEventListener(Nd,I),f=null}},createHref(x){return s(u,x)},createURL:v,encodeLocation(x){let L=v(x);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:E,replace:_,go(x){return h.go(x)}};return b}function Eg(n,s=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),_e(o,"No window.location.(origin|href) available to create URL");let l=typeof n=="string"?n:kr(n);return l=l.replace(/ $/,"%20"),!s&&l.startsWith("//")&&(l=o+l),new URL(l,o)}function bh(n,s,o="/"){return Dg(n,s,o,!1)}function Dg(n,s,o,l){let u=typeof s=="string"?Tn(s):s,d=di(u.pathname||"/",o);if(d==null)return null;let h=kh(n);Rg(h);let m=null;for(let f=0;m==null&&f<h.length;++f){let g=Wg(d);m=zg(h[f],g,l)}return m}function kh(n,s=[],o=[],l=""){let u=(d,h,m)=>{let f={relativePath:m===void 0?d.path||"":m,caseSensitive:d.caseSensitive===!0,childrenIndex:h,route:d};f.relativePath.startsWith("/")&&(_e(f.relativePath.startsWith(l),`Absolute route path "${f.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(l.length));let g=ui([l,f.relativePath]),w=o.concat(f);d.children&&d.children.length>0&&(_e(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),kh(d.children,s,w,g)),!(d.path==null&&!d.index)&&s.push({path:g,score:Fg(g,d.index),routesMeta:w})};return n.forEach((d,h)=>{var m;if(d.path===""||!((m=d.path)!=null&&m.includes("?")))u(d,h);else for(let f of Sh(d.path))u(d,h,f)}),s}function Sh(n){let s=n.split("/");if(s.length===0)return[];let[o,...l]=s,u=o.endsWith("?"),d=o.replace(/\?$/,"");if(l.length===0)return u?[d,""]:[d];let h=Sh(l.join("/")),m=[];return m.push(...h.map(f=>f===""?d:[d,f].join("/"))),u&&m.push(...h),m.map(f=>n.startsWith("/")&&f===""?"/":f)}function Rg(n){n.sort((s,o)=>s.score!==o.score?o.score-s.score:Ng(s.routesMeta.map(l=>l.childrenIndex),o.routesMeta.map(l=>l.childrenIndex)))}var Ag=/^:[\w-]+$/,Mg=3,Og=2,Lg=1,_g=10,Ug=-2,jd=n=>n==="*";function Fg(n,s){let o=n.split("/"),l=o.length;return o.some(jd)&&(l+=Ug),s&&(l+=Og),o.filter(u=>!jd(u)).reduce((u,d)=>u+(Ag.test(d)?Mg:d===""?Lg:_g),l)}function Ng(n,s){return n.length===s.length&&n.slice(0,-1).every((l,u)=>l===s[u])?n[n.length-1]-s[s.length-1]:0}function zg(n,s,o=!1){let{routesMeta:l}=n,u={},d="/",h=[];for(let m=0;m<l.length;++m){let f=l[m],g=m===l.length-1,w=d==="/"?s:s.slice(d.length)||"/",I=Qo({path:f.relativePath,caseSensitive:f.caseSensitive,end:g},w),E=f.route;if(!I&&g&&o&&!l[l.length-1].route.index&&(I=Qo({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},w)),!I)return null;Object.assign(u,I.params),h.push({params:u,pathname:ui([d,I.pathname]),pathnameBase:Vg(ui([d,I.pathnameBase])),route:E}),I.pathnameBase!=="/"&&(d=ui([d,I.pathnameBase]))}return h}function Qo(n,s){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[o,l]=jg(n.path,n.caseSensitive,n.end),u=s.match(o);if(!u)return null;let d=u[0],h=d.replace(/(.)\/+$/,"$1"),m=u.slice(1);return{params:l.reduce((g,{paramName:w,isOptional:I},E)=>{if(w==="*"){let v=m[E]||"";h=d.slice(0,d.length-v.length).replace(/(.)\/+$/,"$1")}const _=m[E];return I&&!_?g[w]=void 0:g[w]=(_||"").replace(/%2F/g,"/"),g},{}),pathname:d,pathnameBase:h,pattern:n}}function jg(n,s=!1,o=!0){Ht(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let l=[],u="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,m,f)=>(l.push({paramName:m,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(l.push({paramName:"*"}),u+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?u+="\\/*$":n!==""&&n!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,s?void 0:"i"),l]}function Wg(n){try{return n.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Ht(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),n}}function di(n,s){if(s==="/")return n;if(!n.toLowerCase().startsWith(s.toLowerCase()))return null;let o=s.endsWith("/")?s.length-1:s.length,l=n.charAt(o);return l&&l!=="/"?null:n.slice(o)||"/"}function Bg(n,s="/"){let{pathname:o,search:l="",hash:u=""}=typeof n=="string"?Tn(n):n;return{pathname:o?o.startsWith("/")?o:Hg(o,s):s,search:$g(l),hash:Kg(u)}}function Hg(n,s){let o=s.replace(/\/+$/,"").split("/");return n.split("/").forEach(u=>{u===".."?o.length>1&&o.pop():u!=="."&&o.push(u)}),o.length>1?o.join("/"):"/"}function sl(n,s,o,l){return`Cannot include a '${n}' character in a manually specified \`to.${s}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function qg(n){return n.filter((s,o)=>o===0||s.route.path&&s.route.path.length>0)}function Dl(n){let s=qg(n);return s.map((o,l)=>l===s.length-1?o.pathname:o.pathnameBase)}function Rl(n,s,o,l=!1){let u;typeof n=="string"?u=Tn(n):(u={...n},_e(!u.pathname||!u.pathname.includes("?"),sl("?","pathname","search",u)),_e(!u.pathname||!u.pathname.includes("#"),sl("#","pathname","hash",u)),_e(!u.search||!u.search.includes("#"),sl("#","search","hash",u)));let d=n===""||u.pathname==="",h=d?"/":u.pathname,m;if(h==null)m=o;else{let I=s.length-1;if(!l&&h.startsWith("..")){let E=h.split("/");for(;E[0]==="..";)E.shift(),I-=1;u.pathname=E.join("/")}m=I>=0?s[I]:"/"}let f=Bg(u,m),g=h&&h!=="/"&&h.endsWith("/"),w=(d||h===".")&&o.endsWith("/");return!f.pathname.endsWith("/")&&(g||w)&&(f.pathname+="/"),f}var ui=n=>n.join("/").replace(/\/\/+/g,"/"),Vg=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),$g=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Kg=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Gg(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var xh=["POST","PUT","PATCH","DELETE"];new Set(xh);var Qg=["GET",...xh];new Set(Qg);var En=M.createContext(null);En.displayName="DataRouter";var ns=M.createContext(null);ns.displayName="DataRouterState";var Ih=M.createContext({isTransitioning:!1});Ih.displayName="ViewTransition";var Yg=M.createContext(new Map);Yg.displayName="Fetchers";var Jg=M.createContext(null);Jg.displayName="Await";var qt=M.createContext(null);qt.displayName="Navigation";var Pr=M.createContext(null);Pr.displayName="Location";var Xt=M.createContext({outlet:null,matches:[],isDataRoute:!1});Xt.displayName="Route";var Al=M.createContext(null);Al.displayName="RouteError";function Xg(n,{relative:s}={}){_e(Dn(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:l}=M.useContext(qt),{hash:u,pathname:d,search:h}=Tr(n,{relative:s}),m=d;return o!=="/"&&(m=d==="/"?o:ui([o,d])),l.createHref({pathname:m,search:h,hash:u})}function Dn(){return M.useContext(Pr)!=null}function hi(){return _e(Dn(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(Pr).location}var Ph="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ch(n){M.useContext(qt).static||M.useLayoutEffect(n)}function Cr(){let{isDataRoute:n}=M.useContext(Xt);return n?hf():Zg()}function Zg(){_e(Dn(),"useNavigate() may be used only in the context of a <Router> component.");let n=M.useContext(En),{basename:s,navigator:o}=M.useContext(qt),{matches:l}=M.useContext(Xt),{pathname:u}=hi(),d=JSON.stringify(Dl(l)),h=M.useRef(!1);return Ch(()=>{h.current=!0}),M.useCallback((f,g={})=>{if(Ht(h.current,Ph),!h.current)return;if(typeof f=="number"){o.go(f);return}let w=Rl(f,JSON.parse(d),u,g.relative==="path");n==null&&s!=="/"&&(w.pathname=w.pathname==="/"?s:ui([s,w.pathname])),(g.replace?o.replace:o.push)(w,g.state,g)},[s,o,d,u,n])}M.createContext(null);function Tr(n,{relative:s}={}){let{matches:o}=M.useContext(Xt),{pathname:l}=hi(),u=JSON.stringify(Dl(o));return M.useMemo(()=>Rl(n,JSON.parse(u),l,s==="path"),[n,u,l,s])}function ef(n,s){return Th(n,s)}function Th(n,s,o,l){var L;_e(Dn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=M.useContext(qt),{matches:d}=M.useContext(Xt),h=d[d.length-1],m=h?h.params:{},f=h?h.pathname:"/",g=h?h.pathnameBase:"/",w=h&&h.route;{let F=w&&w.path||"";Eh(f,!w||F.endsWith("*")||F.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${F}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${F}"> to <Route path="${F==="/"?"*":`${F}/*`}">.`)}let I=hi(),E;if(s){let F=typeof s=="string"?Tn(s):s;_e(g==="/"||((L=F.pathname)==null?void 0:L.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${F.pathname}" was given in the \`location\` prop.`),E=F}else E=I;let _=E.pathname||"/",v=_;if(g!=="/"){let F=g.replace(/^\//,"").split("/");v="/"+_.replace(/^\//,"").split("/").slice(F.length).join("/")}let b=bh(n,{pathname:v});Ht(w||b!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),Ht(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=sf(b&&b.map(F=>Object.assign({},F,{params:Object.assign({},m,F.params),pathname:ui([g,u.encodeLocation?u.encodeLocation(F.pathname).pathname:F.pathname]),pathnameBase:F.pathnameBase==="/"?g:ui([g,u.encodeLocation?u.encodeLocation(F.pathnameBase).pathname:F.pathnameBase])})),d,o,l);return s&&x?M.createElement(Pr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},x):x}function tf(){let n=df(),s=Gg(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),o=n instanceof Error?n.stack:null,l="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:l},d={padding:"2px 4px",backgroundColor:l},h=null;return console.error("Error handled by React Router default ErrorBoundary:",n),h=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:d},"ErrorBoundary")," or"," ",M.createElement("code",{style:d},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},s),o?M.createElement("pre",{style:u},o):null,h)}var nf=M.createElement(tf,null),rf=class extends M.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,s){return s.location!==n.location||s.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:s.error,location:s.location,revalidation:n.revalidation||s.revalidation}}componentDidCatch(n,s){console.error("React Router caught the following error during render",n,s)}render(){return this.state.error!==void 0?M.createElement(Xt.Provider,{value:this.props.routeContext},M.createElement(Al.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function of({routeContext:n,match:s,children:o}){let l=M.useContext(En);return l&&l.static&&l.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=s.route.id),M.createElement(Xt.Provider,{value:n},o)}function sf(n,s=[],o=null,l=null){if(n==null){if(!o)return null;if(o.errors)n=o.matches;else if(s.length===0&&!o.initialized&&o.matches.length>0)n=o.matches;else return null}let u=n,d=o==null?void 0:o.errors;if(d!=null){let f=u.findIndex(g=>g.route.id&&(d==null?void 0:d[g.route.id])!==void 0);_e(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),u=u.slice(0,Math.min(u.length,f+1))}let h=!1,m=-1;if(o)for(let f=0;f<u.length;f++){let g=u[f];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=f),g.route.id){let{loaderData:w,errors:I}=o,E=g.route.loader&&!w.hasOwnProperty(g.route.id)&&(!I||I[g.route.id]===void 0);if(g.route.lazy||E){h=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((f,g,w)=>{let I,E=!1,_=null,v=null;o&&(I=d&&g.route.id?d[g.route.id]:void 0,_=g.route.errorElement||nf,h&&(m<0&&w===0?(Eh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,v=null):m===w&&(E=!0,v=g.route.hydrateFallbackElement||null)));let b=s.concat(u.slice(0,w+1)),x=()=>{let L;return I?L=_:E?L=v:g.route.Component?L=M.createElement(g.route.Component,null):g.route.element?L=g.route.element:L=f,M.createElement(of,{match:g,routeContext:{outlet:f,matches:b,isDataRoute:o!=null},children:L})};return o&&(g.route.ErrorBoundary||g.route.errorElement||w===0)?M.createElement(rf,{location:o.location,revalidation:o.revalidation,component:_,error:I,children:x(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):x()},null)}function Ml(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function af(n){let s=M.useContext(En);return _e(s,Ml(n)),s}function lf(n){let s=M.useContext(ns);return _e(s,Ml(n)),s}function cf(n){let s=M.useContext(Xt);return _e(s,Ml(n)),s}function Ol(n){let s=cf(n),o=s.matches[s.matches.length-1];return _e(o.route.id,`${n} can only be used on routes that contain a unique "id"`),o.route.id}function uf(){return Ol("useRouteId")}function df(){var l;let n=M.useContext(Al),s=lf("useRouteError"),o=Ol("useRouteError");return n!==void 0?n:(l=s.errors)==null?void 0:l[o]}function hf(){let{router:n}=af("useNavigate"),s=Ol("useNavigate"),o=M.useRef(!1);return Ch(()=>{o.current=!0}),M.useCallback(async(u,d={})=>{Ht(o.current,Ph),o.current&&(typeof u=="number"?n.navigate(u):await n.navigate(u,{fromRouteId:s,...d}))},[n,s])}var Wd={};function Eh(n,s,o){!s&&!Wd[n]&&(Wd[n]=!0,Ht(!1,o))}M.memo(pf);function pf({routes:n,future:s,state:o}){return Th(n,void 0,o,s)}function mf({to:n,replace:s,state:o,relative:l}){_e(Dn(),"<Navigate> may be used only in the context of a <Router> component.");let{static:u}=M.useContext(qt);Ht(!u,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:d}=M.useContext(Xt),{pathname:h}=hi(),m=Cr(),f=Rl(n,Dl(d),h,l==="path"),g=JSON.stringify(f);return M.useEffect(()=>{m(JSON.parse(g),{replace:s,state:o,relative:l})},[m,g,l,s,o]),null}function Je(n){_e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function gf({basename:n="/",children:s=null,location:o,navigationType:l="POP",navigator:u,static:d=!1}){_e(!Dn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=n.replace(/^\/*/,"/"),m=M.useMemo(()=>({basename:h,navigator:u,static:d,future:{}}),[h,u,d]);typeof o=="string"&&(o=Tn(o));let{pathname:f="/",search:g="",hash:w="",state:I=null,key:E="default"}=o,_=M.useMemo(()=>{let v=di(f,h);return v==null?null:{location:{pathname:v,search:g,hash:w,state:I,key:E},navigationType:l}},[h,f,g,w,I,E,l]);return Ht(_!=null,`<Router basename="${h}"> is not able to match the URL "${f}${g}${w}" because it does not start with the basename, so the <Router> won't render anything.`),_==null?null:M.createElement(qt.Provider,{value:m},M.createElement(Pr.Provider,{children:s,value:_}))}function Dh({children:n,location:s}){return ef(yl(n),s)}function yl(n,s=[]){let o=[];return M.Children.forEach(n,(l,u)=>{if(!M.isValidElement(l))return;let d=[...s,u];if(l.type===M.Fragment){o.push.apply(o,yl(l.props.children,d));return}_e(l.type===Je,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_e(!l.props.index||!l.props.children,"An index route cannot have child routes.");let h={id:l.props.id||d.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(h.children=yl(l.props.children,d)),o.push(h)}),o}var Ho="get",qo="application/x-www-form-urlencoded";function rs(n){return n!=null&&typeof n.tagName=="string"}function ff(n){return rs(n)&&n.tagName.toLowerCase()==="button"}function yf(n){return rs(n)&&n.tagName.toLowerCase()==="form"}function vf(n){return rs(n)&&n.tagName.toLowerCase()==="input"}function wf(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function bf(n,s){return n.button===0&&(!s||s==="_self")&&!wf(n)}var jo=null;function kf(){if(jo===null)try{new FormData(document.createElement("form"),0),jo=!1}catch{jo=!0}return jo}var Sf=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function al(n){return n!=null&&!Sf.has(n)?(Ht(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qo}"`),null):n}function xf(n,s){let o,l,u,d,h;if(yf(n)){let m=n.getAttribute("action");l=m?di(m,s):null,o=n.getAttribute("method")||Ho,u=al(n.getAttribute("enctype"))||qo,d=new FormData(n)}else if(ff(n)||vf(n)&&(n.type==="submit"||n.type==="image")){let m=n.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=n.getAttribute("formaction")||m.getAttribute("action");if(l=f?di(f,s):null,o=n.getAttribute("formmethod")||m.getAttribute("method")||Ho,u=al(n.getAttribute("formenctype"))||al(m.getAttribute("enctype"))||qo,d=new FormData(m,n),!kf()){let{name:g,type:w,value:I}=n;if(w==="image"){let E=g?`${g}.`:"";d.append(`${E}x`,"0"),d.append(`${E}y`,"0")}else g&&d.append(g,I)}}else{if(rs(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Ho,l=null,u=qo,h=n}return d&&u==="text/plain"&&(h=d,d=void 0),{action:l,method:o.toLowerCase(),encType:u,formData:d,body:h}}function Ll(n,s){if(n===!1||n===null||typeof n>"u")throw new Error(s)}async function If(n,s){if(n.id in s)return s[n.id];try{let o=await import(n.module);return s[n.id]=o,o}catch(o){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Pf(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function Cf(n,s,o){let l=await Promise.all(n.map(async u=>{let d=s.routes[u.route.id];if(d){let h=await If(d,o);return h.links?h.links():[]}return[]}));return Rf(l.flat(1).filter(Pf).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function Bd(n,s,o,l,u,d){let h=(f,g)=>o[g]?f.route.id!==o[g].route.id:!0,m=(f,g)=>{var w;return o[g].pathname!==f.pathname||((w=o[g].route.path)==null?void 0:w.endsWith("*"))&&o[g].params["*"]!==f.params["*"]};return d==="assets"?s.filter((f,g)=>h(f,g)||m(f,g)):d==="data"?s.filter((f,g)=>{var I;let w=l.routes[f.route.id];if(!w||!w.hasLoader)return!1;if(h(f,g)||m(f,g))return!0;if(f.route.shouldRevalidate){let E=f.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:((I=o[0])==null?void 0:I.params)||{},nextUrl:new URL(n,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function Tf(n,s,{includeHydrateFallback:o}={}){return Ef(n.map(l=>{let u=s.routes[l.route.id];if(!u)return[];let d=[u.module];return u.clientActionModule&&(d=d.concat(u.clientActionModule)),u.clientLoaderModule&&(d=d.concat(u.clientLoaderModule)),o&&u.hydrateFallbackModule&&(d=d.concat(u.hydrateFallbackModule)),u.imports&&(d=d.concat(u.imports)),d}).flat(1))}function Ef(n){return[...new Set(n)]}function Df(n){let s={},o=Object.keys(n).sort();for(let l of o)s[l]=n[l];return s}function Rf(n,s){let o=new Set;return new Set(s),n.reduce((l,u)=>{let d=JSON.stringify(Df(u));return o.has(d)||(o.add(d),l.push({key:d,link:u})),l},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Af=new Set([100,101,204,205]);function Mf(n,s){let o=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return o.pathname==="/"?o.pathname="_root.data":s&&di(o.pathname,s)==="/"?o.pathname=`${s.replace(/\/$/,"")}/_root.data`:o.pathname=`${o.pathname.replace(/\/$/,"")}.data`,o}function Rh(){let n=M.useContext(En);return Ll(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function Of(){let n=M.useContext(ns);return Ll(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var _l=M.createContext(void 0);_l.displayName="FrameworkContext";function Ah(){let n=M.useContext(_l);return Ll(n,"You must render this element inside a <HydratedRouter> element"),n}function Lf(n,s){let o=M.useContext(_l),[l,u]=M.useState(!1),[d,h]=M.useState(!1),{onFocus:m,onBlur:f,onMouseEnter:g,onMouseLeave:w,onTouchStart:I}=s,E=M.useRef(null);M.useEffect(()=>{if(n==="render"&&h(!0),n==="viewport"){let b=L=>{L.forEach(F=>{h(F.isIntersecting)})},x=new IntersectionObserver(b,{threshold:.5});return E.current&&x.observe(E.current),()=>{x.disconnect()}}},[n]),M.useEffect(()=>{if(l){let b=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(b)}}},[l]);let _=()=>{u(!0)},v=()=>{u(!1),h(!1)};return o?n!=="intent"?[d,E,{}]:[d,E,{onFocus:vr(m,_),onBlur:vr(f,v),onMouseEnter:vr(g,_),onMouseLeave:vr(w,v),onTouchStart:vr(I,_)}]:[!1,E,{}]}function vr(n,s){return o=>{n&&n(o),o.defaultPrevented||s(o)}}function _f({page:n,...s}){let{router:o}=Rh(),l=M.useMemo(()=>bh(o.routes,n,o.basename),[o.routes,n,o.basename]);return l?M.createElement(Ff,{page:n,matches:l,...s}):null}function Uf(n){let{manifest:s,routeModules:o}=Ah(),[l,u]=M.useState([]);return M.useEffect(()=>{let d=!1;return Cf(n,s,o).then(h=>{d||u(h)}),()=>{d=!0}},[n,s,o]),l}function Ff({page:n,matches:s,...o}){let l=hi(),{manifest:u,routeModules:d}=Ah(),{basename:h}=Rh(),{loaderData:m,matches:f}=Of(),g=M.useMemo(()=>Bd(n,s,f,u,l,"data"),[n,s,f,u,l]),w=M.useMemo(()=>Bd(n,s,f,u,l,"assets"),[n,s,f,u,l]),I=M.useMemo(()=>{if(n===l.pathname+l.search+l.hash)return[];let v=new Set,b=!1;if(s.forEach(L=>{var H;let F=u.routes[L.route.id];!F||!F.hasLoader||(!g.some(G=>G.route.id===L.route.id)&&L.route.id in m&&((H=d[L.route.id])!=null&&H.shouldRevalidate)||F.hasClientLoader?b=!0:v.add(L.route.id))}),v.size===0)return[];let x=Mf(n,h);return b&&v.size>0&&x.searchParams.set("_routes",s.filter(L=>v.has(L.route.id)).map(L=>L.route.id).join(",")),[x.pathname+x.search]},[h,m,l,u,g,s,n,d]),E=M.useMemo(()=>Tf(w,u),[w,u]),_=Uf(w);return M.createElement(M.Fragment,null,I.map(v=>M.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...o})),E.map(v=>M.createElement("link",{key:v,rel:"modulepreload",href:v,...o})),_.map(({key:v,link:b})=>M.createElement("link",{key:v,...b})))}function Nf(...n){return s=>{n.forEach(o=>{typeof o=="function"?o(s):o!=null&&(o.current=s)})}}var Mh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Mh&&(window.__reactRouterVersion="7.6.2")}catch{}function zf({basename:n,children:s,window:o}){let l=M.useRef();l.current==null&&(l.current=Pg({window:o,v5Compat:!0}));let u=l.current,[d,h]=M.useState({action:u.action,location:u.location}),m=M.useCallback(f=>{M.startTransition(()=>h(f))},[h]);return M.useLayoutEffect(()=>u.listen(m),[u,m]),M.createElement(gf,{basename:n,children:s,location:d.location,navigationType:d.action,navigator:u})}var Oh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lh=M.forwardRef(function({onClick:s,discover:o="render",prefetch:l="none",relative:u,reloadDocument:d,replace:h,state:m,target:f,to:g,preventScrollReset:w,viewTransition:I,...E},_){let{basename:v}=M.useContext(qt),b=typeof g=="string"&&Oh.test(g),x,L=!1;if(typeof g=="string"&&b&&(x=g,Mh))try{let fe=new URL(window.location.href),Ce=g.startsWith("//")?new URL(fe.protocol+g):new URL(g),it=di(Ce.pathname,v);Ce.origin===fe.origin&&it!=null?g=it+Ce.search+Ce.hash:L=!0}catch{Ht(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let F=Xg(g,{relative:u}),[H,G,U]=Lf(l,E),se=Bf(g,{replace:h,state:m,target:f,preventScrollReset:w,relative:u,viewTransition:I});function pe(fe){s&&s(fe),fe.defaultPrevented||se(fe)}let me=M.createElement("a",{...E,...U,href:x||F,onClick:L||d?s:pe,ref:Nf(_,G),target:f,"data-discover":!b&&o==="render"?"true":void 0});return H&&!b?M.createElement(M.Fragment,null,me,M.createElement(_f,{page:F})):me});Lh.displayName="Link";var _h=M.forwardRef(function({"aria-current":s="page",caseSensitive:o=!1,className:l="",end:u=!1,style:d,to:h,viewTransition:m,children:f,...g},w){let I=Tr(h,{relative:g.relative}),E=hi(),_=M.useContext(ns),{navigator:v,basename:b}=M.useContext(qt),x=_!=null&&Kf(I)&&m===!0,L=v.encodeLocation?v.encodeLocation(I).pathname:I.pathname,F=E.pathname,H=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;o||(F=F.toLowerCase(),H=H?H.toLowerCase():null,L=L.toLowerCase()),H&&b&&(H=di(H,b)||H);const G=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let U=F===L||!u&&F.startsWith(L)&&F.charAt(G)==="/",se=H!=null&&(H===L||!u&&H.startsWith(L)&&H.charAt(L.length)==="/"),pe={isActive:U,isPending:se,isTransitioning:x},me=U?s:void 0,fe;typeof l=="function"?fe=l(pe):fe=[l,U?"active":null,se?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let Ce=typeof d=="function"?d(pe):d;return M.createElement(Lh,{...g,"aria-current":me,className:fe,ref:w,style:Ce,to:h,viewTransition:m},typeof f=="function"?f(pe):f)});_h.displayName="NavLink";var jf=M.forwardRef(({discover:n="render",fetcherKey:s,navigate:o,reloadDocument:l,replace:u,state:d,method:h=Ho,action:m,onSubmit:f,relative:g,preventScrollReset:w,viewTransition:I,...E},_)=>{let v=Vf(),b=$f(m,{relative:g}),x=h.toLowerCase()==="get"?"get":"post",L=typeof m=="string"&&Oh.test(m),F=H=>{if(f&&f(H),H.defaultPrevented)return;H.preventDefault();let G=H.nativeEvent.submitter,U=(G==null?void 0:G.getAttribute("formmethod"))||h;v(G||H.currentTarget,{fetcherKey:s,method:U,navigate:o,replace:u,state:d,relative:g,preventScrollReset:w,viewTransition:I})};return M.createElement("form",{ref:_,method:x,action:b,onSubmit:l?f:F,...E,"data-discover":!L&&n==="render"?"true":void 0})});jf.displayName="Form";function Wf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Uh(n){let s=M.useContext(En);return _e(s,Wf(n)),s}function Bf(n,{target:s,replace:o,state:l,preventScrollReset:u,relative:d,viewTransition:h}={}){let m=Cr(),f=hi(),g=Tr(n,{relative:d});return M.useCallback(w=>{if(bf(w,s)){w.preventDefault();let I=o!==void 0?o:kr(f)===kr(g);m(n,{replace:I,state:l,preventScrollReset:u,relative:d,viewTransition:h})}},[f,m,g,o,l,s,n,u,d,h])}var Hf=0,qf=()=>`__${String(++Hf)}__`;function Vf(){let{router:n}=Uh("useSubmit"),{basename:s}=M.useContext(qt),o=uf();return M.useCallback(async(l,u={})=>{let{action:d,method:h,encType:m,formData:f,body:g}=xf(l,s);if(u.navigate===!1){let w=u.fetcherKey||qf();await n.fetch(w,o,u.action||d,{preventScrollReset:u.preventScrollReset,formData:f,body:g,formMethod:u.method||h,formEncType:u.encType||m,flushSync:u.flushSync})}else await n.navigate(u.action||d,{preventScrollReset:u.preventScrollReset,formData:f,body:g,formMethod:u.method||h,formEncType:u.encType||m,replace:u.replace,state:u.state,fromRouteId:o,flushSync:u.flushSync,viewTransition:u.viewTransition})},[n,s,o])}function $f(n,{relative:s}={}){let{basename:o}=M.useContext(qt),l=M.useContext(Xt);_e(l,"useFormAction must be used inside a RouteContext");let[u]=l.matches.slice(-1),d={...Tr(n||".",{relative:s})},h=hi();if(n==null){d.search=h.search;let m=new URLSearchParams(d.search),f=m.getAll("index");if(f.some(w=>w==="")){m.delete("index"),f.filter(I=>I).forEach(I=>m.append("index",I));let w=m.toString();d.search=w?`?${w}`:""}}return(!n||n===".")&&u.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(d.pathname=d.pathname==="/"?o:ui([o,d.pathname])),kr(d)}function Kf(n,s={}){let o=M.useContext(Ih);_e(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=Uh("useViewTransitionState"),u=Tr(n,{relative:s.relative});if(!o.isTransitioning)return!1;let d=di(o.currentLocation.pathname,l)||o.currentLocation.pathname,h=di(o.nextLocation.pathname,l)||o.nextLocation.pathname;return Qo(u.pathname,h)!=null||Qo(u.pathname,d)!=null}[...Af];var ll={exports:{}},Pe={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd;function Gf(){if(Hd)return Pe;Hd=1;var n=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),E=Symbol.for("react.view_transition"),_=Symbol.for("react.client.reference");function v(b){if(typeof b=="object"&&b!==null){var x=b.$$typeof;switch(x){case n:switch(b=b.type,b){case o:case u:case l:case f:case g:case E:return b;default:switch(b=b&&b.$$typeof,b){case h:case m:case I:case w:return b;case d:return b;default:return x}}case s:return x}}}return Pe.ContextConsumer=d,Pe.ContextProvider=h,Pe.Element=n,Pe.ForwardRef=m,Pe.Fragment=o,Pe.Lazy=I,Pe.Memo=w,Pe.Portal=s,Pe.Profiler=u,Pe.StrictMode=l,Pe.Suspense=f,Pe.SuspenseList=g,Pe.isContextConsumer=function(b){return v(b)===d},Pe.isContextProvider=function(b){return v(b)===h},Pe.isElement=function(b){return typeof b=="object"&&b!==null&&b.$$typeof===n},Pe.isForwardRef=function(b){return v(b)===m},Pe.isFragment=function(b){return v(b)===o},Pe.isLazy=function(b){return v(b)===I},Pe.isMemo=function(b){return v(b)===w},Pe.isPortal=function(b){return v(b)===s},Pe.isProfiler=function(b){return v(b)===u},Pe.isStrictMode=function(b){return v(b)===l},Pe.isSuspense=function(b){return v(b)===f},Pe.isSuspenseList=function(b){return v(b)===g},Pe.isValidElementType=function(b){return typeof b=="string"||typeof b=="function"||b===o||b===u||b===l||b===f||b===g||typeof b=="object"&&b!==null&&(b.$$typeof===I||b.$$typeof===w||b.$$typeof===h||b.$$typeof===d||b.$$typeof===m||b.$$typeof===_||b.getModuleId!==void 0)},Pe.typeOf=v,Pe}var qd;function Qf(){return qd||(qd=1,ll.exports=Gf()),ll.exports}var Fh=Qf();function Yf(n){function s(D,j,q,Q,C){for(var ie=0,z=0,ae=0,ue=0,we,de,je=0,Xe=0,ye,Ge=ye=we=0,be=0,$e=0,Zt=0,Ue=0,_t=q.length,ei=_t-1,ht,le="",Oe="",Ji="",Oi="",St;be<_t;){if(de=q.charCodeAt(be),be===ei&&z+ue+ae+ie!==0&&(z!==0&&(de=z===47?10:47),ue=ae=ie=0,_t++,ei++),z+ue+ae+ie===0){if(be===ei&&(0<$e&&(le=le.replace(E,"")),0<le.trim().length)){switch(de){case 32:case 9:case 59:case 13:case 10:break;default:le+=q.charAt(be)}de=59}switch(de){case 123:for(le=le.trim(),we=le.charCodeAt(0),ye=1,Ue=++be;be<_t;){switch(de=q.charCodeAt(be)){case 123:ye++;break;case 125:ye--;break;case 47:switch(de=q.charCodeAt(be+1)){case 42:case 47:e:{for(Ge=be+1;Ge<ei;++Ge)switch(q.charCodeAt(Ge)){case 47:if(de===42&&q.charCodeAt(Ge-1)===42&&be+2!==Ge){be=Ge+1;break e}break;case 10:if(de===47){be=Ge+1;break e}}be=Ge}}break;case 91:de++;case 40:de++;case 34:case 39:for(;be++<ei&&q.charCodeAt(be)!==de;);}if(ye===0)break;be++}switch(ye=q.substring(Ue,be),we===0&&(we=(le=le.replace(I,"").trim()).charCodeAt(0)),we){case 64:switch(0<$e&&(le=le.replace(E,"")),de=le.charCodeAt(1),de){case 100:case 109:case 115:case 45:$e=j;break;default:$e=Ve}if(ye=s(j,$e,ye,de,C+1),Ue=ye.length,0<K&&($e=o(Ve,le,Zt),St=m(3,ye,$e,j,Ee,Me,Ue,de,C,Q),le=$e.join(""),St!==void 0&&(Ue=(ye=St.trim()).length)===0&&(de=0,ye="")),0<Ue)switch(de){case 115:le=le.replace(se,h);case 100:case 109:case 45:ye=le+"{"+ye+"}";break;case 107:le=le.replace(F,"$1 $2"),ye=le+"{"+ye+"}",ye=De===1||De===2&&d("@"+ye,3)?"@-webkit-"+ye+"@"+ye:"@"+ye;break;default:ye=le+ye,Q===112&&(ye=(Oe+=ye,""))}else ye="";break;default:ye=s(j,o(j,le,Zt),ye,Q,C+1)}Ji+=ye,ye=Zt=$e=Ge=we=0,le="",de=q.charCodeAt(++be);break;case 125:case 59:if(le=(0<$e?le.replace(E,""):le).trim(),1<(Ue=le.length))switch(Ge===0&&(we=le.charCodeAt(0),we===45||96<we&&123>we)&&(Ue=(le=le.replace(" ",":")).length),0<K&&(St=m(1,le,j,D,Ee,Me,Oe.length,Q,C,Q))!==void 0&&(Ue=(le=St.trim()).length)===0&&(le="\0\0"),we=le.charCodeAt(0),de=le.charCodeAt(1),we){case 0:break;case 64:if(de===105||de===99){Oi+=le+q.charAt(be);break}default:le.charCodeAt(Ue-1)!==58&&(Oe+=u(le,we,de,le.charCodeAt(2)))}Zt=$e=Ge=we=0,le="",de=q.charCodeAt(++be)}}switch(de){case 13:case 10:z===47?z=0:1+we===0&&Q!==107&&0<le.length&&($e=1,le+="\0"),0<K*Y&&m(0,le,j,D,Ee,Me,Oe.length,Q,C,Q),Me=1,Ee++;break;case 59:case 125:if(z+ue+ae+ie===0){Me++;break}default:switch(Me++,ht=q.charAt(be),de){case 9:case 32:if(ue+ie+z===0)switch(je){case 44:case 58:case 9:case 32:ht="";break;default:de!==32&&(ht=" ")}break;case 0:ht="\\0";break;case 12:ht="\\f";break;case 11:ht="\\v";break;case 38:ue+z+ie===0&&($e=Zt=1,ht="\f"+ht);break;case 108:if(ue+z+ie+ze===0&&0<Ge)switch(be-Ge){case 2:je===112&&q.charCodeAt(be-3)===58&&(ze=je);case 8:Xe===111&&(ze=Xe)}break;case 58:ue+z+ie===0&&(Ge=be);break;case 44:z+ae+ue+ie===0&&($e=1,ht+="\r");break;case 34:case 39:z===0&&(ue=ue===de?0:ue===0?de:ue);break;case 91:ue+z+ae===0&&ie++;break;case 93:ue+z+ae===0&&ie--;break;case 41:ue+z+ie===0&&ae--;break;case 40:if(ue+z+ie===0){if(we===0)switch(2*je+3*Xe){case 533:break;default:we=1}ae++}break;case 64:z+ae+ue+ie+Ge+ye===0&&(ye=1);break;case 42:case 47:if(!(0<ue+ie+ae))switch(z){case 0:switch(2*de+3*q.charCodeAt(be+1)){case 235:z=47;break;case 220:Ue=be,z=42}break;case 42:de===47&&je===42&&Ue+2!==be&&(q.charCodeAt(Ue+2)===33&&(Oe+=q.substring(Ue,be+1)),ht="",z=0)}}z===0&&(le+=ht)}Xe=je,je=de,be++}if(Ue=Oe.length,0<Ue){if($e=j,0<K&&(St=m(2,Oe,$e,D,Ee,Me,Ue,Q,C,Q),St!==void 0&&(Oe=St).length===0))return Oi+Oe+Ji;if(Oe=$e.join(",")+"{"+Oe+"}",De*ze!==0){switch(De!==2||d(Oe,2)||(ze=0),ze){case 111:Oe=Oe.replace(G,":-moz-$1")+Oe;break;case 112:Oe=Oe.replace(H,"::-webkit-input-$1")+Oe.replace(H,"::-moz-$1")+Oe.replace(H,":-ms-input-$1")+Oe}ze=0}}return Oi+Oe+Ji}function o(D,j,q){var Q=j.trim().split(x);j=Q;var C=Q.length,ie=D.length;switch(ie){case 0:case 1:var z=0;for(D=ie===0?"":D[0]+" ";z<C;++z)j[z]=l(D,j[z],q).trim();break;default:var ae=z=0;for(j=[];z<C;++z)for(var ue=0;ue<ie;++ue)j[ae++]=l(D[ue]+" ",Q[z],q).trim()}return j}function l(D,j,q){var Q=j.charCodeAt(0);switch(33>Q&&(Q=(j=j.trim()).charCodeAt(0)),Q){case 38:return j.replace(L,"$1"+D.trim());case 58:return D.trim()+j.replace(L,"$1"+D.trim());default:if(0<1*q&&0<j.indexOf("\f"))return j.replace(L,(D.charCodeAt(0)===58?"":"$1")+D.trim())}return D+j}function u(D,j,q,Q){var C=D+";",ie=2*j+3*q+4*Q;if(ie===944){D=C.indexOf(":",9)+1;var z=C.substring(D,C.length-1).trim();return z=C.substring(0,D).trim()+z+";",De===1||De===2&&d(z,1)?"-webkit-"+z+z:z}if(De===0||De===2&&!d(C,1))return C;switch(ie){case 1015:return C.charCodeAt(10)===97?"-webkit-"+C+C:C;case 951:return C.charCodeAt(3)===116?"-webkit-"+C+C:C;case 963:return C.charCodeAt(5)===110?"-webkit-"+C+C:C;case 1009:if(C.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+C+C;case 978:return"-webkit-"+C+"-moz-"+C+C;case 1019:case 983:return"-webkit-"+C+"-moz-"+C+"-ms-"+C+C;case 883:if(C.charCodeAt(8)===45)return"-webkit-"+C+C;if(0<C.indexOf("image-set(",11))return C.replace(it,"$1-webkit-$2")+C;break;case 932:if(C.charCodeAt(4)===45)switch(C.charCodeAt(5)){case 103:return"-webkit-box-"+C.replace("-grow","")+"-webkit-"+C+"-ms-"+C.replace("grow","positive")+C;case 115:return"-webkit-"+C+"-ms-"+C.replace("shrink","negative")+C;case 98:return"-webkit-"+C+"-ms-"+C.replace("basis","preferred-size")+C}return"-webkit-"+C+"-ms-"+C+C;case 964:return"-webkit-"+C+"-ms-flex-"+C+C;case 1023:if(C.charCodeAt(8)!==99)break;return z=C.substring(C.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+z+"-webkit-"+C+"-ms-flex-pack"+z+C;case 1005:return v.test(C)?C.replace(_,":-webkit-")+C.replace(_,":-moz-")+C:C;case 1e3:switch(z=C.substring(13).trim(),j=z.indexOf("-")+1,z.charCodeAt(0)+z.charCodeAt(j)){case 226:z=C.replace(U,"tb");break;case 232:z=C.replace(U,"tb-rl");break;case 220:z=C.replace(U,"lr");break;default:return C}return"-webkit-"+C+"-ms-"+z+C;case 1017:if(C.indexOf("sticky",9)===-1)break;case 975:switch(j=(C=D).length-10,z=(C.charCodeAt(j)===33?C.substring(0,j):C).substring(D.indexOf(":",7)+1).trim(),ie=z.charCodeAt(0)+(z.charCodeAt(7)|0)){case 203:if(111>z.charCodeAt(8))break;case 115:C=C.replace(z,"-webkit-"+z)+";"+C;break;case 207:case 102:C=C.replace(z,"-webkit-"+(102<ie?"inline-":"")+"box")+";"+C.replace(z,"-webkit-"+z)+";"+C.replace(z,"-ms-"+z+"box")+";"+C}return C+";";case 938:if(C.charCodeAt(5)===45)switch(C.charCodeAt(6)){case 105:return z=C.replace("-items",""),"-webkit-"+C+"-webkit-box-"+z+"-ms-flex-"+z+C;case 115:return"-webkit-"+C+"-ms-flex-item-"+C.replace(me,"")+C;default:return"-webkit-"+C+"-ms-flex-line-pack"+C.replace("align-content","").replace(me,"")+C}break;case 973:case 989:if(C.charCodeAt(3)!==45||C.charCodeAt(4)===122)break;case 931:case 953:if(Ce.test(D)===!0)return(z=D.substring(D.indexOf(":")+1)).charCodeAt(0)===115?u(D.replace("stretch","fill-available"),j,q,Q).replace(":fill-available",":stretch"):C.replace(z,"-webkit-"+z)+C.replace(z,"-moz-"+z.replace("fill-",""))+C;break;case 962:if(C="-webkit-"+C+(C.charCodeAt(5)===102?"-ms-"+C:"")+C,q+Q===211&&C.charCodeAt(13)===105&&0<C.indexOf("transform",10))return C.substring(0,C.indexOf(";",27)+1).replace(b,"$1-webkit-$2")+C}return C}function d(D,j){var q=D.indexOf(j===1?":":"{"),Q=D.substring(0,j!==3?q:10);return q=D.substring(q+1,D.length-1),ne(j!==2?Q:Q.replace(fe,"$1"),q,j)}function h(D,j){var q=u(j,j.charCodeAt(0),j.charCodeAt(1),j.charCodeAt(2));return q!==j+";"?q.replace(pe," or ($1)").substring(4):"("+j+")"}function m(D,j,q,Q,C,ie,z,ae,ue,we){for(var de=0,je=j,Xe;de<K;++de)switch(Xe=ve[de].call(w,D,je,q,Q,C,ie,z,ae,ue,we)){case void 0:case!1:case!0:case null:break;default:je=Xe}if(je!==j)return je}function f(D){switch(D){case void 0:case null:K=ve.length=0;break;default:if(typeof D=="function")ve[K++]=D;else if(typeof D=="object")for(var j=0,q=D.length;j<q;++j)f(D[j]);else Y=!!D|0}return f}function g(D){return D=D.prefix,D!==void 0&&(ne=null,D?typeof D!="function"?De=1:(De=2,ne=D):De=0),g}function w(D,j){var q=D;if(33>q.charCodeAt(0)&&(q=q.trim()),P=q,q=[P],0<K){var Q=m(-1,j,q,q,Ee,Me,0,0,0,0);Q!==void 0&&typeof Q=="string"&&(j=Q)}var C=s(Ve,q,j,0,0);return 0<K&&(Q=m(-2,C,q,q,Ee,Me,C.length,0,0,0),Q!==void 0&&(C=Q)),P="",ze=0,Me=Ee=1,C}var I=/^\0+/g,E=/[\0\r\f]/g,_=/: */g,v=/zoo|gra/,b=/([,: ])(transform)/g,x=/,\r+?/g,L=/([\t\r\n ])*\f?&/g,F=/@(k\w+)\s*(\S*)\s*/,H=/::(place)/g,G=/:(read-only)/g,U=/[svh]\w+-[tblr]{2}/,se=/\(\s*(.*)\s*\)/g,pe=/([\s\S]*?);/g,me=/-self|flex-/g,fe=/[^]*?(:[rp][el]a[\w-]+)[^]*/,Ce=/stretch|:\s*\w+\-(?:conte|avail)/,it=/([^-])(image-set\()/,Me=1,Ee=1,ze=0,De=1,Ve=[],ve=[],K=0,ne=null,Y=0,P="";return w.use=f,w.set=g,n!==void 0&&g(n),w}var Jf={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Xf(n){var s=Object.create(null);return function(o){return s[o]===void 0&&(s[o]=n(o)),s[o]}}var Zf=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Vd=Xf(function(n){return Zf.test(n)||n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)<91}),cl={exports:{}},xe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $d;function ey(){if($d)return xe;$d=1;var n=typeof Symbol=="function"&&Symbol.for,s=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,l=n?Symbol.for("react.fragment"):60107,u=n?Symbol.for("react.strict_mode"):60108,d=n?Symbol.for("react.profiler"):60114,h=n?Symbol.for("react.provider"):60109,m=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,g=n?Symbol.for("react.concurrent_mode"):60111,w=n?Symbol.for("react.forward_ref"):60112,I=n?Symbol.for("react.suspense"):60113,E=n?Symbol.for("react.suspense_list"):60120,_=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,b=n?Symbol.for("react.block"):60121,x=n?Symbol.for("react.fundamental"):60117,L=n?Symbol.for("react.responder"):60118,F=n?Symbol.for("react.scope"):60119;function H(U){if(typeof U=="object"&&U!==null){var se=U.$$typeof;switch(se){case s:switch(U=U.type,U){case f:case g:case l:case d:case u:case I:return U;default:switch(U=U&&U.$$typeof,U){case m:case w:case v:case _:case h:return U;default:return se}}case o:return se}}}function G(U){return H(U)===g}return xe.AsyncMode=f,xe.ConcurrentMode=g,xe.ContextConsumer=m,xe.ContextProvider=h,xe.Element=s,xe.ForwardRef=w,xe.Fragment=l,xe.Lazy=v,xe.Memo=_,xe.Portal=o,xe.Profiler=d,xe.StrictMode=u,xe.Suspense=I,xe.isAsyncMode=function(U){return G(U)||H(U)===f},xe.isConcurrentMode=G,xe.isContextConsumer=function(U){return H(U)===m},xe.isContextProvider=function(U){return H(U)===h},xe.isElement=function(U){return typeof U=="object"&&U!==null&&U.$$typeof===s},xe.isForwardRef=function(U){return H(U)===w},xe.isFragment=function(U){return H(U)===l},xe.isLazy=function(U){return H(U)===v},xe.isMemo=function(U){return H(U)===_},xe.isPortal=function(U){return H(U)===o},xe.isProfiler=function(U){return H(U)===d},xe.isStrictMode=function(U){return H(U)===u},xe.isSuspense=function(U){return H(U)===I},xe.isValidElementType=function(U){return typeof U=="string"||typeof U=="function"||U===l||U===g||U===d||U===u||U===I||U===E||typeof U=="object"&&U!==null&&(U.$$typeof===v||U.$$typeof===_||U.$$typeof===h||U.$$typeof===m||U.$$typeof===w||U.$$typeof===x||U.$$typeof===L||U.$$typeof===F||U.$$typeof===b)},xe.typeOf=H,xe}var Kd;function ty(){return Kd||(Kd=1,cl.exports=ey()),cl.exports}var ul,Gd;function iy(){if(Gd)return ul;Gd=1;var n=ty(),s={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},d={};d[n.ForwardRef]=l,d[n.Memo]=u;function h(v){return n.isMemo(v)?u:d[v.$$typeof]||s}var m=Object.defineProperty,f=Object.getOwnPropertyNames,g=Object.getOwnPropertySymbols,w=Object.getOwnPropertyDescriptor,I=Object.getPrototypeOf,E=Object.prototype;function _(v,b,x){if(typeof b!="string"){if(E){var L=I(b);L&&L!==E&&_(v,L,x)}var F=f(b);g&&(F=F.concat(g(b)));for(var H=h(v),G=h(b),U=0;U<F.length;++U){var se=F[U];if(!o[se]&&!(x&&x[se])&&!(G&&G[se])&&!(H&&H[se])){var pe=w(b,se);try{m(v,se,pe)}catch{}}}}return v}return ul=_,ul}var ny=iy();const ry=wh(ny);var Lt={};function ci(){return(ci=Object.assign||function(n){for(var s=1;s<arguments.length;s++){var o=arguments[s];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n}).apply(this,arguments)}var Qd=function(n,s){for(var o=[n[0]],l=0,u=s.length;l<u;l+=1)o.push(s[l],n[l+1]);return o},vl=function(n){return n!==null&&typeof n=="object"&&(n.toString?n.toString():Object.prototype.toString.call(n))==="[object Object]"&&!Fh.typeOf(n)},Yo=Object.freeze([]),Mi=Object.freeze({});function Sr(n){return typeof n=="function"}function Yd(n){return n.displayName||n.name||"Component"}function Ul(n){return n&&typeof n.styledComponentId=="string"}var Pn=typeof process<"u"&&Lt!==void 0&&(Lt.REACT_APP_SC_ATTR||Lt.SC_ATTR)||"data-styled",Fl=typeof window<"u"&&"HTMLElement"in window,oy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&(Lt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==""?Lt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Lt.REACT_APP_SC_DISABLE_SPEEDY:Lt.SC_DISABLE_SPEEDY!==void 0&&Lt.SC_DISABLE_SPEEDY!==""&&Lt.SC_DISABLE_SPEEDY!=="false"&&Lt.SC_DISABLE_SPEEDY));function Er(n){for(var s=arguments.length,o=new Array(s>1?s-1:0),l=1;l<s;l++)o[l-1]=arguments[l];throw new Error("An error occurred. See https://git.io/JUIaE#"+n+" for more information."+(o.length>0?" Args: "+o.join(", "):""))}var sy=function(){function n(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}var s=n.prototype;return s.indexOfGroup=function(o){for(var l=0,u=0;u<o;u++)l+=this.groupSizes[u];return l},s.insertRules=function(o,l){if(o>=this.groupSizes.length){for(var u=this.groupSizes,d=u.length,h=d;o>=h;)(h<<=1)<0&&Er(16,""+o);this.groupSizes=new Uint32Array(h),this.groupSizes.set(u),this.length=h;for(var m=d;m<h;m++)this.groupSizes[m]=0}for(var f=this.indexOfGroup(o+1),g=0,w=l.length;g<w;g++)this.tag.insertRule(f,l[g])&&(this.groupSizes[o]++,f++)},s.clearGroup=function(o){if(o<this.length){var l=this.groupSizes[o],u=this.indexOfGroup(o),d=u+l;this.groupSizes[o]=0;for(var h=u;h<d;h++)this.tag.deleteRule(u)}},s.getGroup=function(o){var l="";if(o>=this.length||this.groupSizes[o]===0)return l;for(var u=this.groupSizes[o],d=this.indexOfGroup(o),h=d+u,m=d;m<h;m++)l+=this.tag.getRule(m)+`/*!sc*/
`;return l},n}(),Vo=new Map,Jo=new Map,br=1,Wo=function(n){if(Vo.has(n))return Vo.get(n);for(;Jo.has(br);)br++;var s=br++;return Vo.set(n,s),Jo.set(s,n),s},ay=function(n){return Jo.get(n)},ly=function(n,s){s>=br&&(br=s+1),Vo.set(n,s),Jo.set(s,n)},cy="style["+Pn+'][data-styled-version="5.3.10"]',uy=new RegExp("^"+Pn+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),dy=function(n,s,o){for(var l,u=o.split(","),d=0,h=u.length;d<h;d++)(l=u[d])&&n.registerName(s,l)},hy=function(n,s){for(var o=(s.textContent||"").split(`/*!sc*/
`),l=[],u=0,d=o.length;u<d;u++){var h=o[u].trim();if(h){var m=h.match(uy);if(m){var f=0|parseInt(m[1],10),g=m[2];f!==0&&(ly(g,f),dy(n,g,m[3]),n.getTag().insertRules(f,l)),l.length=0}else l.push(h)}}},py=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Nh=function(n){var s=document.head,o=n||s,l=document.createElement("style"),u=function(m){for(var f=m.childNodes,g=f.length;g>=0;g--){var w=f[g];if(w&&w.nodeType===1&&w.hasAttribute(Pn))return w}}(o),d=u!==void 0?u.nextSibling:null;l.setAttribute(Pn,"active"),l.setAttribute("data-styled-version","5.3.10");var h=py();return h&&l.setAttribute("nonce",h),o.insertBefore(l,d),l},my=function(){function n(o){var l=this.element=Nh(o);l.appendChild(document.createTextNode("")),this.sheet=function(u){if(u.sheet)return u.sheet;for(var d=document.styleSheets,h=0,m=d.length;h<m;h++){var f=d[h];if(f.ownerNode===u)return f}Er(17)}(l),this.length=0}var s=n.prototype;return s.insertRule=function(o,l){try{return this.sheet.insertRule(l,o),this.length++,!0}catch{return!1}},s.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},s.getRule=function(o){var l=this.sheet.cssRules[o];return l!==void 0&&typeof l.cssText=="string"?l.cssText:""},n}(),gy=function(){function n(o){var l=this.element=Nh(o);this.nodes=l.childNodes,this.length=0}var s=n.prototype;return s.insertRule=function(o,l){if(o<=this.length&&o>=0){var u=document.createTextNode(l),d=this.nodes[o];return this.element.insertBefore(u,d||null),this.length++,!0}return!1},s.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},s.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},n}(),fy=function(){function n(o){this.rules=[],this.length=0}var s=n.prototype;return s.insertRule=function(o,l){return o<=this.length&&(this.rules.splice(o,0,l),this.length++,!0)},s.deleteRule=function(o){this.rules.splice(o,1),this.length--},s.getRule=function(o){return o<this.length?this.rules[o]:""},n}(),Jd=Fl,yy={isServer:!Fl,useCSSOMInjection:!oy},zh=function(){function n(o,l,u){o===void 0&&(o=Mi),l===void 0&&(l={}),this.options=ci({},yy,{},o),this.gs=l,this.names=new Map(u),this.server=!!o.isServer,!this.server&&Fl&&Jd&&(Jd=!1,function(d){for(var h=document.querySelectorAll(cy),m=0,f=h.length;m<f;m++){var g=h[m];g&&g.getAttribute(Pn)!=="active"&&(hy(d,g),g.parentNode&&g.parentNode.removeChild(g))}}(this))}n.registerId=function(o){return Wo(o)};var s=n.prototype;return s.reconstructWithOptions=function(o,l){return l===void 0&&(l=!0),new n(ci({},this.options,{},o),this.gs,l&&this.names||void 0)},s.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},s.getTag=function(){return this.tag||(this.tag=(u=(l=this.options).isServer,d=l.useCSSOMInjection,h=l.target,o=u?new fy(h):d?new my(h):new gy(h),new sy(o)));var o,l,u,d,h},s.hasNameForId=function(o,l){return this.names.has(o)&&this.names.get(o).has(l)},s.registerName=function(o,l){if(Wo(o),this.names.has(o))this.names.get(o).add(l);else{var u=new Set;u.add(l),this.names.set(o,u)}},s.insertRules=function(o,l,u){this.registerName(o,l),this.getTag().insertRules(Wo(o),u)},s.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},s.clearRules=function(o){this.getTag().clearGroup(Wo(o)),this.clearNames(o)},s.clearTag=function(){this.tag=void 0},s.toString=function(){return function(o){for(var l=o.getTag(),u=l.length,d="",h=0;h<u;h++){var m=ay(h);if(m!==void 0){var f=o.names.get(m),g=l.getGroup(h);if(f&&g&&f.size){var w=Pn+".g"+h+'[id="'+m+'"]',I="";f!==void 0&&f.forEach(function(E){E.length>0&&(I+=E+",")}),d+=""+g+w+'{content:"'+I+`"}/*!sc*/
`}}}return d}(this)},n}(),vy=/(a)(d)/gi,Xd=function(n){return String.fromCharCode(n+(n>25?39:97))};function wl(n){var s,o="";for(s=Math.abs(n);s>52;s=s/52|0)o=Xd(s%52)+o;return(Xd(s%52)+o).replace(vy,"$1-$2")}var In=function(n,s){for(var o=s.length;o;)n=33*n^s.charCodeAt(--o);return n},jh=function(n){return In(5381,n)};function wy(n){for(var s=0;s<n.length;s+=1){var o=n[s];if(Sr(o)&&!Ul(o))return!1}return!0}var by=jh("5.3.10"),ky=function(){function n(s,o,l){this.rules=s,this.staticRulesId="",this.isStatic=(l===void 0||l.isStatic)&&wy(s),this.componentId=o,this.baseHash=In(by,o),this.baseStyle=l,zh.registerId(o)}return n.prototype.generateAndInjectStyles=function(s,o,l){var u=this.componentId,d=[];if(this.baseStyle&&d.push(this.baseStyle.generateAndInjectStyles(s,o,l)),this.isStatic&&!l.hash)if(this.staticRulesId&&o.hasNameForId(u,this.staticRulesId))d.push(this.staticRulesId);else{var h=Cn(this.rules,s,o,l).join(""),m=wl(In(this.baseHash,h)>>>0);if(!o.hasNameForId(u,m)){var f=l(h,"."+m,void 0,u);o.insertRules(u,m,f)}d.push(m),this.staticRulesId=m}else{for(var g=this.rules.length,w=In(this.baseHash,l.hash),I="",E=0;E<g;E++){var _=this.rules[E];if(typeof _=="string")I+=_;else if(_){var v=Cn(_,s,o,l),b=Array.isArray(v)?v.join(""):v;w=In(w,b+E),I+=b}}if(I){var x=wl(w>>>0);if(!o.hasNameForId(u,x)){var L=l(I,"."+x,void 0,u);o.insertRules(u,x,L)}d.push(x)}}return d.join(" ")},n}(),Sy=/^\s*\/\/.*$/gm,xy=[":","[",".","#"];function Iy(n){var s,o,l,u,d=Mi,h=d.options,m=h===void 0?Mi:h,f=d.plugins,g=f===void 0?Yo:f,w=new Yf(m),I=[],E=function(b){function x(L){if(L)try{b(L+"}")}catch{}}return function(L,F,H,G,U,se,pe,me,fe,Ce){switch(L){case 1:if(fe===0&&F.charCodeAt(0)===64)return b(F+";"),"";break;case 2:if(me===0)return F+"/*|*/";break;case 3:switch(me){case 102:case 112:return b(H[0]+F),"";default:return F+(Ce===0?"/*|*/":"")}case-2:F.split("/*|*/}").forEach(x)}}}(function(b){I.push(b)}),_=function(b,x,L){return x===0&&xy.indexOf(L[o.length])!==-1||L.match(u)?b:"."+s};function v(b,x,L,F){F===void 0&&(F="&");var H=b.replace(Sy,""),G=x&&L?L+" "+x+" { "+H+" }":H;return s=F,o=x,l=new RegExp("\\"+o+"\\b","g"),u=new RegExp("(\\"+o+"\\b){2,}"),w(L||!x?"":x,G)}return w.use([].concat(g,[function(b,x,L){b===2&&L.length&&L[0].lastIndexOf(o)>0&&(L[0]=L[0].replace(l,_))},E,function(b){if(b===-2){var x=I;return I=[],x}}])),v.hash=g.length?g.reduce(function(b,x){return x.name||Er(15),In(b,x.name)},5381).toString():"",v}var Wh=Tt.createContext();Wh.Consumer;var Bh=Tt.createContext(),Py=(Bh.Consumer,new zh),bl=Iy();function Cy(){return M.useContext(Wh)||Py}function Ty(){return M.useContext(Bh)||bl}var Ey=function(){function n(s,o){var l=this;this.inject=function(u,d){d===void 0&&(d=bl);var h=l.name+d.hash;u.hasNameForId(l.id,h)||u.insertRules(l.id,h,d(l.rules,h,"@keyframes"))},this.toString=function(){return Er(12,String(l.name))},this.name=s,this.id="sc-keyframes-"+s,this.rules=o}return n.prototype.getName=function(s){return s===void 0&&(s=bl),this.name+s.hash},n}(),Dy=/([A-Z])/,Ry=/([A-Z])/g,Ay=/^ms-/,My=function(n){return"-"+n.toLowerCase()};function Zd(n){return Dy.test(n)?n.replace(Ry,My).replace(Ay,"-ms-"):n}var eh=function(n){return n==null||n===!1||n===""};function Cn(n,s,o,l){if(Array.isArray(n)){for(var u,d=[],h=0,m=n.length;h<m;h+=1)(u=Cn(n[h],s,o,l))!==""&&(Array.isArray(u)?d.push.apply(d,u):d.push(u));return d}if(eh(n))return"";if(Ul(n))return"."+n.styledComponentId;if(Sr(n)){if(typeof(g=n)!="function"||g.prototype&&g.prototype.isReactComponent||!s)return n;var f=n(s);return Cn(f,s,o,l)}var g;return n instanceof Ey?o?(n.inject(o,l),n.getName(l)):n:vl(n)?function w(I,E){var _,v,b=[];for(var x in I)I.hasOwnProperty(x)&&!eh(I[x])&&(Array.isArray(I[x])&&I[x].isCss||Sr(I[x])?b.push(Zd(x)+":",I[x],";"):vl(I[x])?b.push.apply(b,w(I[x],x)):b.push(Zd(x)+": "+(_=x,(v=I[x])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||_ in Jf||_.startsWith("--")?String(v).trim():v+"px")+";"));return E?[E+" {"].concat(b,["}"]):b}(n):n.toString()}var th=function(n){return Array.isArray(n)&&(n.isCss=!0),n};function Oy(n){for(var s=arguments.length,o=new Array(s>1?s-1:0),l=1;l<s;l++)o[l-1]=arguments[l];return Sr(n)||vl(n)?th(Cn(Qd(Yo,[n].concat(o)))):o.length===0&&n.length===1&&typeof n[0]=="string"?n:th(Cn(Qd(n,o)))}var Ly=function(n,s,o){return o===void 0&&(o=Mi),n.theme!==o.theme&&n.theme||s||o.theme},_y=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Uy=/(^-|-$)/g;function dl(n){return n.replace(_y,"-").replace(Uy,"")}var Fy=function(n){return wl(jh(n)>>>0)};function Bo(n){return typeof n=="string"&&!0}var kl=function(n){return typeof n=="function"||typeof n=="object"&&n!==null&&!Array.isArray(n)},Ny=function(n){return n!=="__proto__"&&n!=="constructor"&&n!=="prototype"};function zy(n,s,o){var l=n[o];kl(s)&&kl(l)?Hh(l,s):n[o]=s}function Hh(n){for(var s=arguments.length,o=new Array(s>1?s-1:0),l=1;l<s;l++)o[l-1]=arguments[l];for(var u=0,d=o;u<d.length;u++){var h=d[u];if(kl(h))for(var m in h)Ny(m)&&zy(n,h[m],m)}return n}var qh=Tt.createContext();qh.Consumer;var hl={};function Vh(n,s,o){var l=Ul(n),u=!Bo(n),d=s.attrs,h=d===void 0?Yo:d,m=s.componentId,f=m===void 0?function(F,H){var G=typeof F!="string"?"sc":dl(F);hl[G]=(hl[G]||0)+1;var U=G+"-"+Fy("5.3.10"+G+hl[G]);return H?H+"-"+U:U}(s.displayName,s.parentComponentId):m,g=s.displayName,w=g===void 0?function(F){return Bo(F)?"styled."+F:"Styled("+Yd(F)+")"}(n):g,I=s.displayName&&s.componentId?dl(s.displayName)+"-"+s.componentId:s.componentId||f,E=l&&n.attrs?Array.prototype.concat(n.attrs,h).filter(Boolean):h,_=s.shouldForwardProp;l&&n.shouldForwardProp&&(_=s.shouldForwardProp?function(F,H,G){return n.shouldForwardProp(F,H,G)&&s.shouldForwardProp(F,H,G)}:n.shouldForwardProp);var v,b=new ky(o,I,l?n.componentStyle:void 0),x=b.isStatic&&h.length===0,L=function(F,H){return function(G,U,se,pe){var me=G.attrs,fe=G.componentStyle,Ce=G.defaultProps,it=G.foldedComponentIds,Me=G.shouldForwardProp,Ee=G.styledComponentId,ze=G.target,De=function(Q,C,ie){Q===void 0&&(Q=Mi);var z=ci({},C,{theme:Q}),ae={};return ie.forEach(function(ue){var we,de,je,Xe=ue;for(we in Sr(Xe)&&(Xe=Xe(z)),Xe)z[we]=ae[we]=we==="className"?(de=ae[we],je=Xe[we],de&&je?de+" "+je:de||je):Xe[we]}),[z,ae]}(Ly(U,M.useContext(qh),Ce)||Mi,U,me),Ve=De[0],ve=De[1],K=function(Q,C,ie,z){var ae=Cy(),ue=Ty(),we=C?Q.generateAndInjectStyles(Mi,ae,ue):Q.generateAndInjectStyles(ie,ae,ue);return we}(fe,pe,Ve),ne=se,Y=ve.$as||U.$as||ve.as||U.as||ze,P=Bo(Y),D=ve!==U?ci({},U,{},ve):U,j={};for(var q in D)q[0]!=="$"&&q!=="as"&&(q==="forwardedAs"?j.as=D[q]:(Me?Me(q,Vd,Y):!P||Vd(q))&&(j[q]=D[q]));return U.style&&ve.style!==U.style&&(j.style=ci({},U.style,{},ve.style)),j.className=Array.prototype.concat(it,Ee,K!==Ee?K:null,U.className,ve.className).filter(Boolean).join(" "),j.ref=ne,M.createElement(Y,j)}(v,F,H,x)};return L.displayName=w,(v=Tt.forwardRef(L)).attrs=E,v.componentStyle=b,v.displayName=w,v.shouldForwardProp=_,v.foldedComponentIds=l?Array.prototype.concat(n.foldedComponentIds,n.styledComponentId):Yo,v.styledComponentId=I,v.target=l?n.target:n,v.withComponent=function(F){var H=s.componentId,G=function(se,pe){if(se==null)return{};var me,fe,Ce={},it=Object.keys(se);for(fe=0;fe<it.length;fe++)me=it[fe],pe.indexOf(me)>=0||(Ce[me]=se[me]);return Ce}(s,["componentId"]),U=H&&H+"-"+(Bo(F)?F:dl(Yd(F)));return Vh(F,ci({},G,{attrs:E,componentId:U}),o)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(F){this._foldedDefaultProps=l?Hh({},n.defaultProps,F):F}}),Object.defineProperty(v,"toString",{value:function(){return"."+v.styledComponentId}}),u&&ry(v,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var xr=function(n){return function s(o,l,u){if(u===void 0&&(u=Mi),!Fh.isValidElementType(l))return Er(1,String(l));var d=function(){return o(l,u,Oy.apply(void 0,arguments))};return d.withConfig=function(h){return s(o,l,ci({},u,{},h))},d.attrs=function(h){return s(o,l,ci({},u,{attrs:Array.prototype.concat(u.attrs,h).filter(Boolean)}))},d}(Vh,n)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(n){xr[n]=xr(n)});const jy=xr.nav`
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
`,ih=xr(_h)`
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
`,Wy=xr.div`
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
`,By=()=>{const{searchQuery:n,setSearchQuery:s}=M.useContext(Wl),o=[{to:"/ad",label:"AD"},{to:"/",label:"Resume"},{to:"/network",label:"Network"},{to:"/virtualization",label:"Virtualization"},{to:"/backup",label:"Backup "},{to:"/security",label:"Security"}],l=[{to:"/python",label:"Python"},{to:"/scripting",label:"Scripting"},{to:"/monitoring",label:"Monitoring"},{to:"/cloud",label:"Cloud"},{to:"/docker",label:"Docker"},{to:"/tools",label:"Tools"},{to:"/itil",label:"ITIL"},{to:"/os",label:"OS"}];return N.jsx(jy,{children:N.jsxs(Wy,{children:[o.map((u,d)=>N.jsx(ih,{to:u.to,children:u.label},d)),N.jsx("div",{style:{display:"flex",alignItems:"center",marginRight:"10px",borderBottom:"1px solid black"},children:N.jsx("input",{id:"search-input",type:"text",placeholder:"Search...",style:{width:"150px",outline:"none",marginLeft:"7px",height:"20.5px"},value:n,onChange:u=>s(u.target.value)})}),l.map((u,d)=>N.jsx(ih,{to:u.to,children:u.label},d))]})})};function $h(n,s){return function(){return n.apply(s,arguments)}}const{toString:Hy}=Object.prototype,{getPrototypeOf:Nl}=Object,{iterator:os,toStringTag:Kh}=Symbol,ss=(n=>s=>{const o=Hy.call(s);return n[o]||(n[o]=o.slice(8,-1).toLowerCase())})(Object.create(null)),Vt=n=>(n=n.toLowerCase(),s=>ss(s)===n),as=n=>s=>typeof s===n,{isArray:Rn}=Array,Ir=as("undefined");function qy(n){return n!==null&&!Ir(n)&&n.constructor!==null&&!Ir(n.constructor)&&wt(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Gh=Vt("ArrayBuffer");function Vy(n){let s;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?s=ArrayBuffer.isView(n):s=n&&n.buffer&&Gh(n.buffer),s}const $y=as("string"),wt=as("function"),Qh=as("number"),ls=n=>n!==null&&typeof n=="object",Ky=n=>n===!0||n===!1,$o=n=>{if(ss(n)!=="object")return!1;const s=Nl(n);return(s===null||s===Object.prototype||Object.getPrototypeOf(s)===null)&&!(Kh in n)&&!(os in n)},Gy=Vt("Date"),Qy=Vt("File"),Yy=Vt("Blob"),Jy=Vt("FileList"),Xy=n=>ls(n)&&wt(n.pipe),Zy=n=>{let s;return n&&(typeof FormData=="function"&&n instanceof FormData||wt(n.append)&&((s=ss(n))==="formdata"||s==="object"&&wt(n.toString)&&n.toString()==="[object FormData]"))},ev=Vt("URLSearchParams"),[tv,iv,nv,rv]=["ReadableStream","Request","Response","Headers"].map(Vt),ov=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Dr(n,s,{allOwnKeys:o=!1}={}){if(n===null||typeof n>"u")return;let l,u;if(typeof n!="object"&&(n=[n]),Rn(n))for(l=0,u=n.length;l<u;l++)s.call(null,n[l],l,n);else{const d=o?Object.getOwnPropertyNames(n):Object.keys(n),h=d.length;let m;for(l=0;l<h;l++)m=d[l],s.call(null,n[m],m,n)}}function Yh(n,s){s=s.toLowerCase();const o=Object.keys(n);let l=o.length,u;for(;l-- >0;)if(u=o[l],s===u.toLowerCase())return u;return null}const Ki=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Jh=n=>!Ir(n)&&n!==Ki;function Sl(){const{caseless:n}=Jh(this)&&this||{},s={},o=(l,u)=>{const d=n&&Yh(s,u)||u;$o(s[d])&&$o(l)?s[d]=Sl(s[d],l):$o(l)?s[d]=Sl({},l):Rn(l)?s[d]=l.slice():s[d]=l};for(let l=0,u=arguments.length;l<u;l++)arguments[l]&&Dr(arguments[l],o);return s}const sv=(n,s,o,{allOwnKeys:l}={})=>(Dr(s,(u,d)=>{o&&wt(u)?n[d]=$h(u,o):n[d]=u},{allOwnKeys:l}),n),av=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),lv=(n,s,o,l)=>{n.prototype=Object.create(s.prototype,l),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:s.prototype}),o&&Object.assign(n.prototype,o)},cv=(n,s,o,l)=>{let u,d,h;const m={};if(s=s||{},n==null)return s;do{for(u=Object.getOwnPropertyNames(n),d=u.length;d-- >0;)h=u[d],(!l||l(h,n,s))&&!m[h]&&(s[h]=n[h],m[h]=!0);n=o!==!1&&Nl(n)}while(n&&(!o||o(n,s))&&n!==Object.prototype);return s},uv=(n,s,o)=>{n=String(n),(o===void 0||o>n.length)&&(o=n.length),o-=s.length;const l=n.indexOf(s,o);return l!==-1&&l===o},dv=n=>{if(!n)return null;if(Rn(n))return n;let s=n.length;if(!Qh(s))return null;const o=new Array(s);for(;s-- >0;)o[s]=n[s];return o},hv=(n=>s=>n&&s instanceof n)(typeof Uint8Array<"u"&&Nl(Uint8Array)),pv=(n,s)=>{const l=(n&&n[os]).call(n);let u;for(;(u=l.next())&&!u.done;){const d=u.value;s.call(n,d[0],d[1])}},mv=(n,s)=>{let o;const l=[];for(;(o=n.exec(s))!==null;)l.push(o);return l},gv=Vt("HTMLFormElement"),fv=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(o,l,u){return l.toUpperCase()+u}),nh=(({hasOwnProperty:n})=>(s,o)=>n.call(s,o))(Object.prototype),yv=Vt("RegExp"),Xh=(n,s)=>{const o=Object.getOwnPropertyDescriptors(n),l={};Dr(o,(u,d)=>{let h;(h=s(u,d,n))!==!1&&(l[d]=h||u)}),Object.defineProperties(n,l)},vv=n=>{Xh(n,(s,o)=>{if(wt(n)&&["arguments","caller","callee"].indexOf(o)!==-1)return!1;const l=n[o];if(wt(l)){if(s.enumerable=!1,"writable"in s){s.writable=!1;return}s.set||(s.set=()=>{throw Error("Can not rewrite read-only method '"+o+"'")})}})},wv=(n,s)=>{const o={},l=u=>{u.forEach(d=>{o[d]=!0})};return Rn(n)?l(n):l(String(n).split(s)),o},bv=()=>{},kv=(n,s)=>n!=null&&Number.isFinite(n=+n)?n:s;function Sv(n){return!!(n&&wt(n.append)&&n[Kh]==="FormData"&&n[os])}const xv=n=>{const s=new Array(10),o=(l,u)=>{if(ls(l)){if(s.indexOf(l)>=0)return;if(!("toJSON"in l)){s[u]=l;const d=Rn(l)?[]:{};return Dr(l,(h,m)=>{const f=o(h,u+1);!Ir(f)&&(d[m]=f)}),s[u]=void 0,d}}return l};return o(n,0)},Iv=Vt("AsyncFunction"),Pv=n=>n&&(ls(n)||wt(n))&&wt(n.then)&&wt(n.catch),Zh=((n,s)=>n?setImmediate:s?((o,l)=>(Ki.addEventListener("message",({source:u,data:d})=>{u===Ki&&d===o&&l.length&&l.shift()()},!1),u=>{l.push(u),Ki.postMessage(o,"*")}))(`axios@${Math.random()}`,[]):o=>setTimeout(o))(typeof setImmediate=="function",wt(Ki.postMessage)),Cv=typeof queueMicrotask<"u"?queueMicrotask.bind(Ki):typeof process<"u"&&process.nextTick||Zh,Tv=n=>n!=null&&wt(n[os]),O={isArray:Rn,isArrayBuffer:Gh,isBuffer:qy,isFormData:Zy,isArrayBufferView:Vy,isString:$y,isNumber:Qh,isBoolean:Ky,isObject:ls,isPlainObject:$o,isReadableStream:tv,isRequest:iv,isResponse:nv,isHeaders:rv,isUndefined:Ir,isDate:Gy,isFile:Qy,isBlob:Yy,isRegExp:yv,isFunction:wt,isStream:Xy,isURLSearchParams:ev,isTypedArray:hv,isFileList:Jy,forEach:Dr,merge:Sl,extend:sv,trim:ov,stripBOM:av,inherits:lv,toFlatObject:cv,kindOf:ss,kindOfTest:Vt,endsWith:uv,toArray:dv,forEachEntry:pv,matchAll:mv,isHTMLForm:gv,hasOwnProperty:nh,hasOwnProp:nh,reduceDescriptors:Xh,freezeMethods:vv,toObjectSet:wv,toCamelCase:fv,noop:bv,toFiniteNumber:kv,findKey:Yh,global:Ki,isContextDefined:Jh,isSpecCompliantForm:Sv,toJSONObject:xv,isAsyncFn:Iv,isThenable:Pv,setImmediate:Zh,asap:Cv,isIterable:Tv};function he(n,s,o,l,u){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",s&&(this.code=s),o&&(this.config=o),l&&(this.request=l),u&&(this.response=u,this.status=u.status?u.status:null)}O.inherits(he,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:O.toJSONObject(this.config),code:this.code,status:this.status}}});const ep=he.prototype,tp={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{tp[n]={value:n}});Object.defineProperties(he,tp);Object.defineProperty(ep,"isAxiosError",{value:!0});he.from=(n,s,o,l,u,d)=>{const h=Object.create(ep);return O.toFlatObject(n,h,function(f){return f!==Error.prototype},m=>m!=="isAxiosError"),he.call(h,n.message,s,o,l,u),h.cause=n,h.name=n.name,d&&Object.assign(h,d),h};const Ev=null;function xl(n){return O.isPlainObject(n)||O.isArray(n)}function ip(n){return O.endsWith(n,"[]")?n.slice(0,-2):n}function rh(n,s,o){return n?n.concat(s).map(function(u,d){return u=ip(u),!o&&d?"["+u+"]":u}).join(o?".":""):s}function Dv(n){return O.isArray(n)&&!n.some(xl)}const Rv=O.toFlatObject(O,{},null,function(s){return/^is[A-Z]/.test(s)});function cs(n,s,o){if(!O.isObject(n))throw new TypeError("target must be an object");s=s||new FormData,o=O.toFlatObject(o,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,x){return!O.isUndefined(x[b])});const l=o.metaTokens,u=o.visitor||w,d=o.dots,h=o.indexes,f=(o.Blob||typeof Blob<"u"&&Blob)&&O.isSpecCompliantForm(s);if(!O.isFunction(u))throw new TypeError("visitor must be a function");function g(v){if(v===null)return"";if(O.isDate(v))return v.toISOString();if(O.isBoolean(v))return v.toString();if(!f&&O.isBlob(v))throw new he("Blob is not supported. Use a Buffer instead.");return O.isArrayBuffer(v)||O.isTypedArray(v)?f&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function w(v,b,x){let L=v;if(v&&!x&&typeof v=="object"){if(O.endsWith(b,"{}"))b=l?b:b.slice(0,-2),v=JSON.stringify(v);else if(O.isArray(v)&&Dv(v)||(O.isFileList(v)||O.endsWith(b,"[]"))&&(L=O.toArray(v)))return b=ip(b),L.forEach(function(H,G){!(O.isUndefined(H)||H===null)&&s.append(h===!0?rh([b],G,d):h===null?b:b+"[]",g(H))}),!1}return xl(v)?!0:(s.append(rh(x,b,d),g(v)),!1)}const I=[],E=Object.assign(Rv,{defaultVisitor:w,convertValue:g,isVisitable:xl});function _(v,b){if(!O.isUndefined(v)){if(I.indexOf(v)!==-1)throw Error("Circular reference detected in "+b.join("."));I.push(v),O.forEach(v,function(L,F){(!(O.isUndefined(L)||L===null)&&u.call(s,L,O.isString(F)?F.trim():F,b,E))===!0&&_(L,b?b.concat(F):[F])}),I.pop()}}if(!O.isObject(n))throw new TypeError("data must be an object");return _(n),s}function oh(n){const s={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(l){return s[l]})}function zl(n,s){this._pairs=[],n&&cs(n,this,s)}const np=zl.prototype;np.append=function(s,o){this._pairs.push([s,o])};np.toString=function(s){const o=s?function(l){return s.call(this,l,oh)}:oh;return this._pairs.map(function(u){return o(u[0])+"="+o(u[1])},"").join("&")};function Av(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function rp(n,s,o){if(!s)return n;const l=o&&o.encode||Av;O.isFunction(o)&&(o={serialize:o});const u=o&&o.serialize;let d;if(u?d=u(s,o):d=O.isURLSearchParams(s)?s.toString():new zl(s,o).toString(l),d){const h=n.indexOf("#");h!==-1&&(n=n.slice(0,h)),n+=(n.indexOf("?")===-1?"?":"&")+d}return n}class sh{constructor(){this.handlers=[]}use(s,o,l){return this.handlers.push({fulfilled:s,rejected:o,synchronous:l?l.synchronous:!1,runWhen:l?l.runWhen:null}),this.handlers.length-1}eject(s){this.handlers[s]&&(this.handlers[s]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(s){O.forEach(this.handlers,function(l){l!==null&&s(l)})}}const op={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Mv=typeof URLSearchParams<"u"?URLSearchParams:zl,Ov=typeof FormData<"u"?FormData:null,Lv=typeof Blob<"u"?Blob:null,_v={isBrowser:!0,classes:{URLSearchParams:Mv,FormData:Ov,Blob:Lv},protocols:["http","https","file","blob","url","data"]},jl=typeof window<"u"&&typeof document<"u",Il=typeof navigator=="object"&&navigator||void 0,Uv=jl&&(!Il||["ReactNative","NativeScript","NS"].indexOf(Il.product)<0),Fv=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Nv=jl&&window.location.href||"http://localhost",zv=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:jl,hasStandardBrowserEnv:Uv,hasStandardBrowserWebWorkerEnv:Fv,navigator:Il,origin:Nv},Symbol.toStringTag,{value:"Module"})),ct={...zv,..._v};function jv(n,s){return cs(n,new ct.classes.URLSearchParams,Object.assign({visitor:function(o,l,u,d){return ct.isNode&&O.isBuffer(o)?(this.append(l,o.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)}},s))}function Wv(n){return O.matchAll(/\w+|\[(\w*)]/g,n).map(s=>s[0]==="[]"?"":s[1]||s[0])}function Bv(n){const s={},o=Object.keys(n);let l;const u=o.length;let d;for(l=0;l<u;l++)d=o[l],s[d]=n[d];return s}function sp(n){function s(o,l,u,d){let h=o[d++];if(h==="__proto__")return!0;const m=Number.isFinite(+h),f=d>=o.length;return h=!h&&O.isArray(u)?u.length:h,f?(O.hasOwnProp(u,h)?u[h]=[u[h],l]:u[h]=l,!m):((!u[h]||!O.isObject(u[h]))&&(u[h]=[]),s(o,l,u[h],d)&&O.isArray(u[h])&&(u[h]=Bv(u[h])),!m)}if(O.isFormData(n)&&O.isFunction(n.entries)){const o={};return O.forEachEntry(n,(l,u)=>{s(Wv(l),u,o,0)}),o}return null}function Hv(n,s,o){if(O.isString(n))try{return(s||JSON.parse)(n),O.trim(n)}catch(l){if(l.name!=="SyntaxError")throw l}return(o||JSON.stringify)(n)}const Rr={transitional:op,adapter:["xhr","http","fetch"],transformRequest:[function(s,o){const l=o.getContentType()||"",u=l.indexOf("application/json")>-1,d=O.isObject(s);if(d&&O.isHTMLForm(s)&&(s=new FormData(s)),O.isFormData(s))return u?JSON.stringify(sp(s)):s;if(O.isArrayBuffer(s)||O.isBuffer(s)||O.isStream(s)||O.isFile(s)||O.isBlob(s)||O.isReadableStream(s))return s;if(O.isArrayBufferView(s))return s.buffer;if(O.isURLSearchParams(s))return o.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),s.toString();let m;if(d){if(l.indexOf("application/x-www-form-urlencoded")>-1)return jv(s,this.formSerializer).toString();if((m=O.isFileList(s))||l.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return cs(m?{"files[]":s}:s,f&&new f,this.formSerializer)}}return d||u?(o.setContentType("application/json",!1),Hv(s)):s}],transformResponse:[function(s){const o=this.transitional||Rr.transitional,l=o&&o.forcedJSONParsing,u=this.responseType==="json";if(O.isResponse(s)||O.isReadableStream(s))return s;if(s&&O.isString(s)&&(l&&!this.responseType||u)){const h=!(o&&o.silentJSONParsing)&&u;try{return JSON.parse(s)}catch(m){if(h)throw m.name==="SyntaxError"?he.from(m,he.ERR_BAD_RESPONSE,this,null,this.response):m}}return s}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ct.classes.FormData,Blob:ct.classes.Blob},validateStatus:function(s){return s>=200&&s<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};O.forEach(["delete","get","head","post","put","patch"],n=>{Rr.headers[n]={}});const qv=O.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Vv=n=>{const s={};let o,l,u;return n&&n.split(`
`).forEach(function(h){u=h.indexOf(":"),o=h.substring(0,u).trim().toLowerCase(),l=h.substring(u+1).trim(),!(!o||s[o]&&qv[o])&&(o==="set-cookie"?s[o]?s[o].push(l):s[o]=[l]:s[o]=s[o]?s[o]+", "+l:l)}),s},ah=Symbol("internals");function wr(n){return n&&String(n).trim().toLowerCase()}function Ko(n){return n===!1||n==null?n:O.isArray(n)?n.map(Ko):String(n)}function $v(n){const s=Object.create(null),o=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let l;for(;l=o.exec(n);)s[l[1]]=l[2];return s}const Kv=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function pl(n,s,o,l,u){if(O.isFunction(l))return l.call(this,s,o);if(u&&(s=o),!!O.isString(s)){if(O.isString(l))return s.indexOf(l)!==-1;if(O.isRegExp(l))return l.test(s)}}function Gv(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(s,o,l)=>o.toUpperCase()+l)}function Qv(n,s){const o=O.toCamelCase(" "+s);["get","set","has"].forEach(l=>{Object.defineProperty(n,l+o,{value:function(u,d,h){return this[l].call(this,s,u,d,h)},configurable:!0})})}let bt=class{constructor(s){s&&this.set(s)}set(s,o,l){const u=this;function d(m,f,g){const w=wr(f);if(!w)throw new Error("header name must be a non-empty string");const I=O.findKey(u,w);(!I||u[I]===void 0||g===!0||g===void 0&&u[I]!==!1)&&(u[I||f]=Ko(m))}const h=(m,f)=>O.forEach(m,(g,w)=>d(g,w,f));if(O.isPlainObject(s)||s instanceof this.constructor)h(s,o);else if(O.isString(s)&&(s=s.trim())&&!Kv(s))h(Vv(s),o);else if(O.isObject(s)&&O.isIterable(s)){let m={},f,g;for(const w of s){if(!O.isArray(w))throw TypeError("Object iterator must return a key-value pair");m[g=w[0]]=(f=m[g])?O.isArray(f)?[...f,w[1]]:[f,w[1]]:w[1]}h(m,o)}else s!=null&&d(o,s,l);return this}get(s,o){if(s=wr(s),s){const l=O.findKey(this,s);if(l){const u=this[l];if(!o)return u;if(o===!0)return $v(u);if(O.isFunction(o))return o.call(this,u,l);if(O.isRegExp(o))return o.exec(u);throw new TypeError("parser must be boolean|regexp|function")}}}has(s,o){if(s=wr(s),s){const l=O.findKey(this,s);return!!(l&&this[l]!==void 0&&(!o||pl(this,this[l],l,o)))}return!1}delete(s,o){const l=this;let u=!1;function d(h){if(h=wr(h),h){const m=O.findKey(l,h);m&&(!o||pl(l,l[m],m,o))&&(delete l[m],u=!0)}}return O.isArray(s)?s.forEach(d):d(s),u}clear(s){const o=Object.keys(this);let l=o.length,u=!1;for(;l--;){const d=o[l];(!s||pl(this,this[d],d,s,!0))&&(delete this[d],u=!0)}return u}normalize(s){const o=this,l={};return O.forEach(this,(u,d)=>{const h=O.findKey(l,d);if(h){o[h]=Ko(u),delete o[d];return}const m=s?Gv(d):String(d).trim();m!==d&&delete o[d],o[m]=Ko(u),l[m]=!0}),this}concat(...s){return this.constructor.concat(this,...s)}toJSON(s){const o=Object.create(null);return O.forEach(this,(l,u)=>{l!=null&&l!==!1&&(o[u]=s&&O.isArray(l)?l.join(", "):l)}),o}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([s,o])=>s+": "+o).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(s){return s instanceof this?s:new this(s)}static concat(s,...o){const l=new this(s);return o.forEach(u=>l.set(u)),l}static accessor(s){const l=(this[ah]=this[ah]={accessors:{}}).accessors,u=this.prototype;function d(h){const m=wr(h);l[m]||(Qv(u,h),l[m]=!0)}return O.isArray(s)?s.forEach(d):d(s),this}};bt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);O.reduceDescriptors(bt.prototype,({value:n},s)=>{let o=s[0].toUpperCase()+s.slice(1);return{get:()=>n,set(l){this[o]=l}}});O.freezeMethods(bt);function ml(n,s){const o=this||Rr,l=s||o,u=bt.from(l.headers);let d=l.data;return O.forEach(n,function(m){d=m.call(o,d,u.normalize(),s?s.status:void 0)}),u.normalize(),d}function ap(n){return!!(n&&n.__CANCEL__)}function An(n,s,o){he.call(this,n??"canceled",he.ERR_CANCELED,s,o),this.name="CanceledError"}O.inherits(An,he,{__CANCEL__:!0});function lp(n,s,o){const l=o.config.validateStatus;!o.status||!l||l(o.status)?n(o):s(new he("Request failed with status code "+o.status,[he.ERR_BAD_REQUEST,he.ERR_BAD_RESPONSE][Math.floor(o.status/100)-4],o.config,o.request,o))}function Yv(n){const s=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return s&&s[1]||""}function Jv(n,s){n=n||10;const o=new Array(n),l=new Array(n);let u=0,d=0,h;return s=s!==void 0?s:1e3,function(f){const g=Date.now(),w=l[d];h||(h=g),o[u]=f,l[u]=g;let I=d,E=0;for(;I!==u;)E+=o[I++],I=I%n;if(u=(u+1)%n,u===d&&(d=(d+1)%n),g-h<s)return;const _=w&&g-w;return _?Math.round(E*1e3/_):void 0}}function Xv(n,s){let o=0,l=1e3/s,u,d;const h=(g,w=Date.now())=>{o=w,u=null,d&&(clearTimeout(d),d=null),n.apply(null,g)};return[(...g)=>{const w=Date.now(),I=w-o;I>=l?h(g,w):(u=g,d||(d=setTimeout(()=>{d=null,h(u)},l-I)))},()=>u&&h(u)]}const Xo=(n,s,o=3)=>{let l=0;const u=Jv(50,250);return Xv(d=>{const h=d.loaded,m=d.lengthComputable?d.total:void 0,f=h-l,g=u(f),w=h<=m;l=h;const I={loaded:h,total:m,progress:m?h/m:void 0,bytes:f,rate:g||void 0,estimated:g&&m&&w?(m-h)/g:void 0,event:d,lengthComputable:m!=null,[s?"download":"upload"]:!0};n(I)},o)},lh=(n,s)=>{const o=n!=null;return[l=>s[0]({lengthComputable:o,total:n,loaded:l}),s[1]]},ch=n=>(...s)=>O.asap(()=>n(...s)),Zv=ct.hasStandardBrowserEnv?((n,s)=>o=>(o=new URL(o,ct.origin),n.protocol===o.protocol&&n.host===o.host&&(s||n.port===o.port)))(new URL(ct.origin),ct.navigator&&/(msie|trident)/i.test(ct.navigator.userAgent)):()=>!0,ew=ct.hasStandardBrowserEnv?{write(n,s,o,l,u,d){const h=[n+"="+encodeURIComponent(s)];O.isNumber(o)&&h.push("expires="+new Date(o).toGMTString()),O.isString(l)&&h.push("path="+l),O.isString(u)&&h.push("domain="+u),d===!0&&h.push("secure"),document.cookie=h.join("; ")},read(n){const s=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function tw(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function iw(n,s){return s?n.replace(/\/?\/$/,"")+"/"+s.replace(/^\/+/,""):n}function cp(n,s,o){let l=!tw(s);return n&&(l||o==!1)?iw(n,s):s}const uh=n=>n instanceof bt?{...n}:n;function Qi(n,s){s=s||{};const o={};function l(g,w,I,E){return O.isPlainObject(g)&&O.isPlainObject(w)?O.merge.call({caseless:E},g,w):O.isPlainObject(w)?O.merge({},w):O.isArray(w)?w.slice():w}function u(g,w,I,E){if(O.isUndefined(w)){if(!O.isUndefined(g))return l(void 0,g,I,E)}else return l(g,w,I,E)}function d(g,w){if(!O.isUndefined(w))return l(void 0,w)}function h(g,w){if(O.isUndefined(w)){if(!O.isUndefined(g))return l(void 0,g)}else return l(void 0,w)}function m(g,w,I){if(I in s)return l(g,w);if(I in n)return l(void 0,g)}const f={url:d,method:d,data:d,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutMessage:h,withCredentials:h,withXSRFToken:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,responseEncoding:h,validateStatus:m,headers:(g,w,I)=>u(uh(g),uh(w),I,!0)};return O.forEach(Object.keys(Object.assign({},n,s)),function(w){const I=f[w]||u,E=I(n[w],s[w],w);O.isUndefined(E)&&I!==m||(o[w]=E)}),o}const up=n=>{const s=Qi({},n);let{data:o,withXSRFToken:l,xsrfHeaderName:u,xsrfCookieName:d,headers:h,auth:m}=s;s.headers=h=bt.from(h),s.url=rp(cp(s.baseURL,s.url,s.allowAbsoluteUrls),n.params,n.paramsSerializer),m&&h.set("Authorization","Basic "+btoa((m.username||"")+":"+(m.password?unescape(encodeURIComponent(m.password)):"")));let f;if(O.isFormData(o)){if(ct.hasStandardBrowserEnv||ct.hasStandardBrowserWebWorkerEnv)h.setContentType(void 0);else if((f=h.getContentType())!==!1){const[g,...w]=f?f.split(";").map(I=>I.trim()).filter(Boolean):[];h.setContentType([g||"multipart/form-data",...w].join("; "))}}if(ct.hasStandardBrowserEnv&&(l&&O.isFunction(l)&&(l=l(s)),l||l!==!1&&Zv(s.url))){const g=u&&d&&ew.read(d);g&&h.set(u,g)}return s},nw=typeof XMLHttpRequest<"u",rw=nw&&function(n){return new Promise(function(o,l){const u=up(n);let d=u.data;const h=bt.from(u.headers).normalize();let{responseType:m,onUploadProgress:f,onDownloadProgress:g}=u,w,I,E,_,v;function b(){_&&_(),v&&v(),u.cancelToken&&u.cancelToken.unsubscribe(w),u.signal&&u.signal.removeEventListener("abort",w)}let x=new XMLHttpRequest;x.open(u.method.toUpperCase(),u.url,!0),x.timeout=u.timeout;function L(){if(!x)return;const H=bt.from("getAllResponseHeaders"in x&&x.getAllResponseHeaders()),U={data:!m||m==="text"||m==="json"?x.responseText:x.response,status:x.status,statusText:x.statusText,headers:H,config:n,request:x};lp(function(pe){o(pe),b()},function(pe){l(pe),b()},U),x=null}"onloadend"in x?x.onloadend=L:x.onreadystatechange=function(){!x||x.readyState!==4||x.status===0&&!(x.responseURL&&x.responseURL.indexOf("file:")===0)||setTimeout(L)},x.onabort=function(){x&&(l(new he("Request aborted",he.ECONNABORTED,n,x)),x=null)},x.onerror=function(){l(new he("Network Error",he.ERR_NETWORK,n,x)),x=null},x.ontimeout=function(){let G=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded";const U=u.transitional||op;u.timeoutErrorMessage&&(G=u.timeoutErrorMessage),l(new he(G,U.clarifyTimeoutError?he.ETIMEDOUT:he.ECONNABORTED,n,x)),x=null},d===void 0&&h.setContentType(null),"setRequestHeader"in x&&O.forEach(h.toJSON(),function(G,U){x.setRequestHeader(U,G)}),O.isUndefined(u.withCredentials)||(x.withCredentials=!!u.withCredentials),m&&m!=="json"&&(x.responseType=u.responseType),g&&([E,v]=Xo(g,!0),x.addEventListener("progress",E)),f&&x.upload&&([I,_]=Xo(f),x.upload.addEventListener("progress",I),x.upload.addEventListener("loadend",_)),(u.cancelToken||u.signal)&&(w=H=>{x&&(l(!H||H.type?new An(null,n,x):H),x.abort(),x=null)},u.cancelToken&&u.cancelToken.subscribe(w),u.signal&&(u.signal.aborted?w():u.signal.addEventListener("abort",w)));const F=Yv(u.url);if(F&&ct.protocols.indexOf(F)===-1){l(new he("Unsupported protocol "+F+":",he.ERR_BAD_REQUEST,n));return}x.send(d||null)})},ow=(n,s)=>{const{length:o}=n=n?n.filter(Boolean):[];if(s||o){let l=new AbortController,u;const d=function(g){if(!u){u=!0,m();const w=g instanceof Error?g:this.reason;l.abort(w instanceof he?w:new An(w instanceof Error?w.message:w))}};let h=s&&setTimeout(()=>{h=null,d(new he(`timeout ${s} of ms exceeded`,he.ETIMEDOUT))},s);const m=()=>{n&&(h&&clearTimeout(h),h=null,n.forEach(g=>{g.unsubscribe?g.unsubscribe(d):g.removeEventListener("abort",d)}),n=null)};n.forEach(g=>g.addEventListener("abort",d));const{signal:f}=l;return f.unsubscribe=()=>O.asap(m),f}},sw=function*(n,s){let o=n.byteLength;if(o<s){yield n;return}let l=0,u;for(;l<o;)u=l+s,yield n.slice(l,u),l=u},aw=async function*(n,s){for await(const o of lw(n))yield*sw(o,s)},lw=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const s=n.getReader();try{for(;;){const{done:o,value:l}=await s.read();if(o)break;yield l}}finally{await s.cancel()}},dh=(n,s,o,l)=>{const u=aw(n,s);let d=0,h,m=f=>{h||(h=!0,l&&l(f))};return new ReadableStream({async pull(f){try{const{done:g,value:w}=await u.next();if(g){m(),f.close();return}let I=w.byteLength;if(o){let E=d+=I;o(E)}f.enqueue(new Uint8Array(w))}catch(g){throw m(g),g}},cancel(f){return m(f),u.return()}},{highWaterMark:2})},us=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",dp=us&&typeof ReadableStream=="function",cw=us&&(typeof TextEncoder=="function"?(n=>s=>n.encode(s))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),hp=(n,...s)=>{try{return!!n(...s)}catch{return!1}},uw=dp&&hp(()=>{let n=!1;const s=new Request(ct.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!s}),hh=64*1024,Pl=dp&&hp(()=>O.isReadableStream(new Response("").body)),Zo={stream:Pl&&(n=>n.body)};us&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(s=>{!Zo[s]&&(Zo[s]=O.isFunction(n[s])?o=>o[s]():(o,l)=>{throw new he(`Response type '${s}' is not supported`,he.ERR_NOT_SUPPORT,l)})})})(new Response);const dw=async n=>{if(n==null)return 0;if(O.isBlob(n))return n.size;if(O.isSpecCompliantForm(n))return(await new Request(ct.origin,{method:"POST",body:n}).arrayBuffer()).byteLength;if(O.isArrayBufferView(n)||O.isArrayBuffer(n))return n.byteLength;if(O.isURLSearchParams(n)&&(n=n+""),O.isString(n))return(await cw(n)).byteLength},hw=async(n,s)=>{const o=O.toFiniteNumber(n.getContentLength());return o??dw(s)},pw=us&&(async n=>{let{url:s,method:o,data:l,signal:u,cancelToken:d,timeout:h,onDownloadProgress:m,onUploadProgress:f,responseType:g,headers:w,withCredentials:I="same-origin",fetchOptions:E}=up(n);g=g?(g+"").toLowerCase():"text";let _=ow([u,d&&d.toAbortSignal()],h),v;const b=_&&_.unsubscribe&&(()=>{_.unsubscribe()});let x;try{if(f&&uw&&o!=="get"&&o!=="head"&&(x=await hw(w,l))!==0){let U=new Request(s,{method:"POST",body:l,duplex:"half"}),se;if(O.isFormData(l)&&(se=U.headers.get("content-type"))&&w.setContentType(se),U.body){const[pe,me]=lh(x,Xo(ch(f)));l=dh(U.body,hh,pe,me)}}O.isString(I)||(I=I?"include":"omit");const L="credentials"in Request.prototype;v=new Request(s,{...E,signal:_,method:o.toUpperCase(),headers:w.normalize().toJSON(),body:l,duplex:"half",credentials:L?I:void 0});let F=await fetch(v,E);const H=Pl&&(g==="stream"||g==="response");if(Pl&&(m||H&&b)){const U={};["status","statusText","headers"].forEach(fe=>{U[fe]=F[fe]});const se=O.toFiniteNumber(F.headers.get("content-length")),[pe,me]=m&&lh(se,Xo(ch(m),!0))||[];F=new Response(dh(F.body,hh,pe,()=>{me&&me(),b&&b()}),U)}g=g||"text";let G=await Zo[O.findKey(Zo,g)||"text"](F,n);return!H&&b&&b(),await new Promise((U,se)=>{lp(U,se,{data:G,headers:bt.from(F.headers),status:F.status,statusText:F.statusText,config:n,request:v})})}catch(L){throw b&&b(),L&&L.name==="TypeError"&&/Load failed|fetch/i.test(L.message)?Object.assign(new he("Network Error",he.ERR_NETWORK,n,v),{cause:L.cause||L}):he.from(L,L&&L.code,n,v)}}),Cl={http:Ev,xhr:rw,fetch:pw};O.forEach(Cl,(n,s)=>{if(n){try{Object.defineProperty(n,"name",{value:s})}catch{}Object.defineProperty(n,"adapterName",{value:s})}});const ph=n=>`- ${n}`,mw=n=>O.isFunction(n)||n===null||n===!1,pp={getAdapter:n=>{n=O.isArray(n)?n:[n];const{length:s}=n;let o,l;const u={};for(let d=0;d<s;d++){o=n[d];let h;if(l=o,!mw(o)&&(l=Cl[(h=String(o)).toLowerCase()],l===void 0))throw new he(`Unknown adapter '${h}'`);if(l)break;u[h||"#"+d]=l}if(!l){const d=Object.entries(u).map(([m,f])=>`adapter ${m} `+(f===!1?"is not supported by the environment":"is not available in the build"));let h=s?d.length>1?`since :
`+d.map(ph).join(`
`):" "+ph(d[0]):"as no adapter specified";throw new he("There is no suitable adapter to dispatch the request "+h,"ERR_NOT_SUPPORT")}return l},adapters:Cl};function gl(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new An(null,n)}function mh(n){return gl(n),n.headers=bt.from(n.headers),n.data=ml.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),pp.getAdapter(n.adapter||Rr.adapter)(n).then(function(l){return gl(n),l.data=ml.call(n,n.transformResponse,l),l.headers=bt.from(l.headers),l},function(l){return ap(l)||(gl(n),l&&l.response&&(l.response.data=ml.call(n,n.transformResponse,l.response),l.response.headers=bt.from(l.response.headers))),Promise.reject(l)})}const mp="1.10.0",ds={};["object","boolean","number","function","string","symbol"].forEach((n,s)=>{ds[n]=function(l){return typeof l===n||"a"+(s<1?"n ":" ")+n}});const gh={};ds.transitional=function(s,o,l){function u(d,h){return"[Axios v"+mp+"] Transitional option '"+d+"'"+h+(l?". "+l:"")}return(d,h,m)=>{if(s===!1)throw new he(u(h," has been removed"+(o?" in "+o:"")),he.ERR_DEPRECATED);return o&&!gh[h]&&(gh[h]=!0,console.warn(u(h," has been deprecated since v"+o+" and will be removed in the near future"))),s?s(d,h,m):!0}};ds.spelling=function(s){return(o,l)=>(console.warn(`${l} is likely a misspelling of ${s}`),!0)};function gw(n,s,o){if(typeof n!="object")throw new he("options must be an object",he.ERR_BAD_OPTION_VALUE);const l=Object.keys(n);let u=l.length;for(;u-- >0;){const d=l[u],h=s[d];if(h){const m=n[d],f=m===void 0||h(m,d,n);if(f!==!0)throw new he("option "+d+" must be "+f,he.ERR_BAD_OPTION_VALUE);continue}if(o!==!0)throw new he("Unknown option "+d,he.ERR_BAD_OPTION)}}const Go={assertOptions:gw,validators:ds},Jt=Go.validators;let Gi=class{constructor(s){this.defaults=s||{},this.interceptors={request:new sh,response:new sh}}async request(s,o){try{return await this._request(s,o)}catch(l){if(l instanceof Error){let u={};Error.captureStackTrace?Error.captureStackTrace(u):u=new Error;const d=u.stack?u.stack.replace(/^.+\n/,""):"";try{l.stack?d&&!String(l.stack).endsWith(d.replace(/^.+\n.+\n/,""))&&(l.stack+=`
`+d):l.stack=d}catch{}}throw l}}_request(s,o){typeof s=="string"?(o=o||{},o.url=s):o=s||{},o=Qi(this.defaults,o);const{transitional:l,paramsSerializer:u,headers:d}=o;l!==void 0&&Go.assertOptions(l,{silentJSONParsing:Jt.transitional(Jt.boolean),forcedJSONParsing:Jt.transitional(Jt.boolean),clarifyTimeoutError:Jt.transitional(Jt.boolean)},!1),u!=null&&(O.isFunction(u)?o.paramsSerializer={serialize:u}:Go.assertOptions(u,{encode:Jt.function,serialize:Jt.function},!0)),o.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?o.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:o.allowAbsoluteUrls=!0),Go.assertOptions(o,{baseUrl:Jt.spelling("baseURL"),withXsrfToken:Jt.spelling("withXSRFToken")},!0),o.method=(o.method||this.defaults.method||"get").toLowerCase();let h=d&&O.merge(d.common,d[o.method]);d&&O.forEach(["delete","get","head","post","put","patch","common"],v=>{delete d[v]}),o.headers=bt.concat(h,d);const m=[];let f=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(o)===!1||(f=f&&b.synchronous,m.unshift(b.fulfilled,b.rejected))});const g=[];this.interceptors.response.forEach(function(b){g.push(b.fulfilled,b.rejected)});let w,I=0,E;if(!f){const v=[mh.bind(this),void 0];for(v.unshift.apply(v,m),v.push.apply(v,g),E=v.length,w=Promise.resolve(o);I<E;)w=w.then(v[I++],v[I++]);return w}E=m.length;let _=o;for(I=0;I<E;){const v=m[I++],b=m[I++];try{_=v(_)}catch(x){b.call(this,x);break}}try{w=mh.call(this,_)}catch(v){return Promise.reject(v)}for(I=0,E=g.length;I<E;)w=w.then(g[I++],g[I++]);return w}getUri(s){s=Qi(this.defaults,s);const o=cp(s.baseURL,s.url,s.allowAbsoluteUrls);return rp(o,s.params,s.paramsSerializer)}};O.forEach(["delete","get","head","options"],function(s){Gi.prototype[s]=function(o,l){return this.request(Qi(l||{},{method:s,url:o,data:(l||{}).data}))}});O.forEach(["post","put","patch"],function(s){function o(l){return function(d,h,m){return this.request(Qi(m||{},{method:s,headers:l?{"Content-Type":"multipart/form-data"}:{},url:d,data:h}))}}Gi.prototype[s]=o(),Gi.prototype[s+"Form"]=o(!0)});let fw=class gp{constructor(s){if(typeof s!="function")throw new TypeError("executor must be a function.");let o;this.promise=new Promise(function(d){o=d});const l=this;this.promise.then(u=>{if(!l._listeners)return;let d=l._listeners.length;for(;d-- >0;)l._listeners[d](u);l._listeners=null}),this.promise.then=u=>{let d;const h=new Promise(m=>{l.subscribe(m),d=m}).then(u);return h.cancel=function(){l.unsubscribe(d)},h},s(function(d,h,m){l.reason||(l.reason=new An(d,h,m),o(l.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(s){if(this.reason){s(this.reason);return}this._listeners?this._listeners.push(s):this._listeners=[s]}unsubscribe(s){if(!this._listeners)return;const o=this._listeners.indexOf(s);o!==-1&&this._listeners.splice(o,1)}toAbortSignal(){const s=new AbortController,o=l=>{s.abort(l)};return this.subscribe(o),s.signal.unsubscribe=()=>this.unsubscribe(o),s.signal}static source(){let s;return{token:new gp(function(u){s=u}),cancel:s}}};function yw(n){return function(o){return n.apply(null,o)}}function vw(n){return O.isObject(n)&&n.isAxiosError===!0}const Tl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Tl).forEach(([n,s])=>{Tl[s]=n});function fp(n){const s=new Gi(n),o=$h(Gi.prototype.request,s);return O.extend(o,Gi.prototype,s,{allOwnKeys:!0}),O.extend(o,s,null,{allOwnKeys:!0}),o.create=function(u){return fp(Qi(n,u))},o}const qe=fp(Rr);qe.Axios=Gi;qe.CanceledError=An;qe.CancelToken=fw;qe.isCancel=ap;qe.VERSION=mp;qe.toFormData=cs;qe.AxiosError=he;qe.Cancel=qe.CanceledError;qe.all=function(s){return Promise.all(s)};qe.spread=yw;qe.isAxiosError=vw;qe.mergeConfig=Qi;qe.AxiosHeaders=bt;qe.formToJSON=n=>sp(O.isHTMLForm(n)?new FormData(n):n);qe.getAdapter=pp.getAdapter;qe.HttpStatusCode=Tl;qe.default=qe;const{Axios:Db,AxiosError:Rb,CanceledError:Ab,isCancel:Mb,CancelToken:Ob,VERSION:Lb,all:_b,Cancel:Ub,isAxiosError:Fb,spread:Nb,toFormData:zb,AxiosHeaders:jb,HttpStatusCode:Wb,formToJSON:Bb,getAdapter:Hb,mergeConfig:qb}=qe,es=qe.create({baseURL:"https://notebackend-ashy.vercel.app/",withCredentials:!0}),hs=M.createContext(),ww=({children:n})=>{const[s,o]=M.useState(null),[l,u]=M.useState(!0),d=async()=>{try{const h=await es.get("/api/auth/me",{withCredentials:!0});o(h.data.user)}catch{o(null)}u(!1)};return M.useEffect(()=>{d()},[]),N.jsx(hs.Provider,{value:{user:s,setUser:o,loading:l},children:n})};function bw(){const[n,s]=M.useState(""),[o,l]=M.useState(""),{setUser:u}=M.useContext(hs),d=Cr(),h=async m=>{m.preventDefault();try{await es.post("api/auth/login",{email:n,password:o});const f=await es.get("api/auth/me",{withCredentials:!0});u(f.data.user),d("/")}catch{alert("Login failed")}};return N.jsx("div",{className:"login-container",children:N.jsxs("div",{className:"login-card",children:[N.jsx("h2",{className:"login-title",children:"Login"}),N.jsxs("form",{onSubmit:h,children:[N.jsxs("div",{className:"form-group",children:[N.jsx("label",{children:"Email address"}),N.jsx("input",{type:"text",className:"form-input",value:n,onChange:m=>s(m.target.value),required:!0,placeholder:"you@example.com"})]}),N.jsxs("div",{className:"form-group",children:[N.jsx("label",{children:"Password"}),N.jsx("input",{type:"password",className:"form-input",value:o,onChange:m=>l(m.target.value),required:!0,placeholder:"Your password"})]}),N.jsx("button",{type:"submit",className:"login-button",children:"Login"})]})]})})}function kw(){const{setUser:n}=M.useContext(hs),s=Cr(),o=async()=>{await es.post("api/auth/logout"),n(null),s("/login")};return N.jsx("div",{style:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center",backgroundColor:"#f0f4f8"},children:N.jsx("button",{onClick:o,style:{padding:"12px 24px",backgroundColor:"#007bff",color:"#fff",fontSize:"16px",border:"none",borderRadius:"6px",cursor:"pointer",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)",transition:"background-color 0.3s ease"},onMouseOver:l=>l.target.style.backgroundColor="#0056b3",onMouseOut:l=>l.target.style.backgroundColor="#007bff",children:"Logout"})})}function Sw({children:n}){const{user:s,loading:o}=M.useContext(hs);return o?N.jsx("div",{children:"Loading..."}):s?n:N.jsx(mf,{to:"/login"})}const xw=[{id:"51",title:"What is Nodejs?",content:`<section><h3>What is Nodejs?</h3><ul><li><strong>Definition:</strong><ul><li>Nodejs is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 JavaScript engine.</li><li>It allows developers to execute JavaScript code outside of a browser, i mean on the server side.</li></ul></li><li><strong>Key Features:</strong><ul><li>Asynchronous and event-driven architecture.</li><li>Single-threaded, non-blocking I/O model for handling multiple requests efficiently.</li><li>Lightweight and efficient for building scalable applications.</li><li>Rich ecosystem with npm (Node Package Manager) for libraries and tools.</li></ul></li><li><strong>Use Cases:</strong><ul><li>Building web servers and APIs.</li><li>Creating real-time applications like chat apps or gaming servers.</li><li>Developing microservices architectures.</li><li>Performing scripting and automation tasks.</li></ul></li><li><strong>Example:</strong><pre><code>// Simple Nodejs Server
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});</code></pre></li><li><strong>Advantages:</strong><ul><li>Fast execution of code due to the V8 engine.</li><li>Efficient handling of concurrent requests using the event loop.</li><li>Extensive npm package ecosystem for rapid development.</li><li>Works seamlessly with front-end JavaScript frameworks.</li></ul></li><li><strong>Notes:</strong><ul><li>Nodejs is not suitable for CPU-intensive tasks but excels in I/O-bound applications.</li><li>It has a large and active community for support and library contributions.</li></ul></li></ul></section>`,link:""}],Iw=[...xw];var yp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},fh=Tt.createContext&&Tt.createContext(yp),Pw=["attr","size","title"];function Cw(n,s){if(n==null)return{};var o=Tw(n,s),l,u;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(n);for(u=0;u<d.length;u++)l=d[u],!(s.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(n,l)&&(o[l]=n[l])}return o}function Tw(n,s){if(n==null)return{};var o={};for(var l in n)if(Object.prototype.hasOwnProperty.call(n,l)){if(s.indexOf(l)>=0)continue;o[l]=n[l]}return o}function ts(){return ts=Object.assign?Object.assign.bind():function(n){for(var s=1;s<arguments.length;s++){var o=arguments[s];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},ts.apply(this,arguments)}function yh(n,s){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);s&&(l=l.filter(function(u){return Object.getOwnPropertyDescriptor(n,u).enumerable})),o.push.apply(o,l)}return o}function is(n){for(var s=1;s<arguments.length;s++){var o=arguments[s]!=null?arguments[s]:{};s%2?yh(Object(o),!0).forEach(function(l){Ew(n,l,o[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):yh(Object(o)).forEach(function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(o,l))})}return n}function Ew(n,s,o){return s=Dw(s),s in n?Object.defineProperty(n,s,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[s]=o,n}function Dw(n){var s=Rw(n,"string");return typeof s=="symbol"?s:s+""}function Rw(n,s){if(typeof n!="object"||!n)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var l=o.call(n,s);if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(n)}function vp(n){return n&&n.map((s,o)=>Tt.createElement(s.tag,is({key:o},s.attr),vp(s.child)))}function Yi(n){return s=>Tt.createElement(Aw,ts({attr:is({},n.attr)},s),vp(n.child))}function Aw(n){var s=o=>{var{attr:l,size:u,title:d}=n,h=Cw(n,Pw),m=u||o.size||"1em",f;return o.className&&(f=o.className),n.className&&(f=(f?f+" ":"")+n.className),Tt.createElement("svg",ts({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,l,h,{className:f,style:is(is({color:n.color||o.color},o.style),n.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),d&&Tt.createElement("title",null,d),n.children)};return fh!==void 0?Tt.createElement(fh.Consumer,null,o=>s(o)):s(yp)}function Mw(n){return Yi({attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{d:"M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",fill:"currentColor"},child:[]}]})(n)}const Ow=({title:n,content:s,link:o,activeTooltip:l,setActiveTooltip:u,index:d})=>{const h=M.useRef(),m=w=>{w.stopPropagation(),u(l===d?null:d)},f=w=>{h.current&&!h.current.contains(w.target)&&u(null)};M.useEffect(()=>(document.addEventListener("click",f),()=>{document.removeEventListener("click",f)}),[]);const g=l===d;return N.jsxs("div",{className:"tooltip-container grid-item",ref:h,children:[N.jsx("div",{className:"tooltip-title",onClick:m,children:n}),g&&N.jsxs("div",{className:"tooltip-content",children:[N.jsx("p",{dangerouslySetInnerHTML:{__html:s}}),N.jsx("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"tooltip-link",children:"Read More"})]})]})},Lw=({title:n,content:s,link:o,index:l,activeTooltip:u,setActiveTooltip:d})=>{const h=M.useRef(),m=w=>{w.stopPropagation(),d(l===u?null:l)},f=w=>{h.current&&!h.current.contains(w.target)&&d(null)};M.useEffect(()=>(document.addEventListener("click",f),()=>{document.removeEventListener("click",f)}),[]);const g=u===l;return N.jsxs("div",{className:"tooltip-container grid-item",ref:h,children:[N.jsx("div",{className:"tooltip-title tooltip-title-matchx",onClick:m,children:N.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[N.jsx(Mw,{style:{color:"red",height:"14px",paddingTop:"2px"}}),n]})}),g&&N.jsxs("div",{className:"tooltip-content",children:[N.jsx("p",{dangerouslySetInnerHTML:{__html:s}}),N.jsx("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"tooltip-link",children:"Read More"})]})]})};function _w(n){return Yi({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(n)}function Uw(n){return Yi({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8.073 12.194 4.212 8.333c-1.52 1.657-2.096 3.317-2.106 3.351L2 12l.105.316C2.127 12.383 4.421 19 12.054 19c.929 0 1.775-.102 2.552-.273l-2.746-2.746a3.987 3.987 0 0 1-3.787-3.787zM12.054 5c-1.855 0-3.375.404-4.642.998L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.298-3.298c2.638-1.953 3.579-4.637 3.593-4.679l.105-.316-.105-.316C21.98 11.617 19.687 5 12.054 5zm1.906 7.546c.187-.677.028-1.439-.492-1.96s-1.283-.679-1.96-.492L10 8.586A3.955 3.955 0 0 1 12.054 8c2.206 0 4 1.794 4 4a3.94 3.94 0 0 1-.587 2.053l-1.507-1.507z"},child:[]}]})(n)}function Fw(n){return Yi({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 11c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"},child:[]},{tag:"path",attr:{d:"M12 10c-1.084 0-2 .916-2 2s.916 2 2 2 2-.916 2-2-.916-2-2-2z"},child:[]}]})(n)}function Nw(n){return Yi({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(n)}function zw(n){return Yi({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(n)}function jw(n){return Yi({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]})(n)}const Ww=()=>{const[n,s]=M.useState(!1);M.useEffect(()=>{const l=()=>{s(window.scrollY>300)};return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}},[]);const o=()=>{window.scrollTo({top:0,behavior:"smooth"})};return N.jsx(jw,{className:`icon ${n?"visible":"hidden"}`,style:{marginRight:"10px"},onClick:o})},Bw=(n,s,o,l)=>{if(!s||s.length<2)return n;const u=s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),d=new RegExp(`(${u})`,"gi");return n.split(d).map((h,m)=>h.toLowerCase()===s.toLowerCase()?N.jsx("span",{style:{backgroundColor:o===l?"orange":"yellow",padding:"2px"},children:h},m):h)},kt=({links:n})=>{const{searchQuery:s,setSearchQuery:o}=M.useContext(Wl),[l,u]=M.useState(null),[d,h]=M.useState(-1),[m,f]=Tt.useState(!1),g=[];n.forEach((_,v)=>{const b=s.toLowerCase().trim().split(/\s+/),x=_.title.toLowerCase();b.every(F=>x.includes(F))&&g.push(v)}),M.useEffect(()=>{g.length>0&&(h(-1),u(null))},[s]);const w=_=>{if(g.length===0)return;let v;_==="forward"?v=(d+1)%g.length:v=(d-1+g.length)%g.length,h(-1),setTimeout(()=>{h(v),u(g[v])},0)},I=_=>{if(_.key==="Enter")_.preventDefault(),w(_.shiftKey?"backward":"forward");else if(_.key==="\\"){_.preventDefault(),u(null),h(-1),o("");const v=document.getElementById("search-input");v&&v.focus()}},E=()=>{u(null),h(-1),o("")};return M.useEffect(()=>(document.addEventListener("keydown",I),()=>document.removeEventListener("keydown",I)),[d,g]),N.jsxs("div",{className:"main-container",children:[s.length?N.jsx("div",{className:" tooltip-title-match",children:g.map(_=>N.jsx(Lw,{index:_,title:n[_].title,content:n[_].content,link:n[_].link,activeTooltip:l,setActiveTooltip:u},_))}):null,N.jsx("div",{className:"app-container",children:n.map((_,v)=>N.jsx(Ow,{index:v,title:Bw(_.title,s,v,l),content:_.content,link:_.link,activeTooltip:l,setActiveTooltip:u},v))}),N.jsxs("div",{className:"radio-container",children:[N.jsx("label",{className:"show-hide-title",onClick:()=>f(!m),children:m?N.jsx(Fw,{className:"icon"}):N.jsx(Uw,{style:{color:"#cf411d"},className:"icon"})}),N.jsxs("span",{className:"navigation-container",children:[N.jsx(Nw,{className:"icon",onClick:()=>w("backward")}),N.jsx(_w,{className:"icon",onClick:E}),N.jsx(zw,{className:"icon",onClick:()=>w("forward")})]}),N.jsx(Ww,{})]}),m?N.jsx("div",{className:"render-content",children:n.map((_,v)=>N.jsxs("div",{className:"link-box",children:[N.jsx("h2",{children:_.title}),N.jsx("div",{dangerouslySetInnerHTML:{__html:_.content}})]},v))}):""]})},Hw=()=>N.jsx(kt,{links:Iw}),qw=[{id:"154",title:"AWS, why widely used",content:"<section><h3>What is AWS, and Why Is It Widely Used in Cloud Development?</h3><ul><li><strong>AWS Overview:</strong><ul><li>Amazon Web Services (AWS) is a comprehensive cloud computing platform offering over 200 fully-featured services, including computing, storage, databases, machine learning, and more.</li></ul></li><li><strong>Reasons for Popularity:</strong><ul><li>Global infrastructure for low-latency applications.</li><li>Pay-as-you-go pricing model for cost efficiency.</li><li>Extensive ecosystem of services for diverse workloads.</li><li>Built-in security and compliance frameworks.</li><li>Developer-friendly tools for fast and scalable development.</li></ul></li></ul></section>",link:""}],Vw=[...qw],$w=()=>N.jsx(kt,{links:Vw}),Kw=[{title:"What is Docker?",content:`
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
}</code></pre>      <li>Restart the Docker daemon:</li>      <pre><code>sudo systemctl restart docker</code></pre>      <li>Create an IPv6-enabled network:</li>      <pre><code>docker network create --ipv6 --subnet=2001:db8::/64 my_network</code></pre>      <li>Run a container with IPv6:</li>      <pre><code>docker run --network my_network my_image</code></pre>      <li>Verify IPv6 connectivity:</li>      <pre><code>docker exec container_id ping6 google.com</code></pre>      </ul>`},{id:35,title:"containerd in Dckr ecosystem",content:"<h3>What is the role of containerd in the Docker ecosystem?</h3>      <ul>      <li><b>containerd</b> is a core container runtime used by Docker.</li>      <li>It manages container lifecycle operations like:</li>      <ul>      <li>Starting and stopping containers.</li>      <li>Pulling and managing images.</li>      <li>Handling storage and networking.</li>      </ul>      <li>Docker uses containerd as an intermediate layer for container management.</li>      <li>containerd is also used by other tools like <b>Kubernetes</b>.</li>      <li>It provides a stable and efficient runtime for containers.</li>      </ul>"},{id:36,title:"live migration of dc between hosts",content:"<h3>How do you perform a live migration of Docker containers between hosts?</h3>      <ul>      <li>Use <b>checkpoint/restore</b> to save and move container state.</li>      <li>Create a checkpoint on the source host:</li>      <pre><code>docker checkpoint create my_container my_checkpoint</code></pre>      <li>Copy the checkpoint data to the target host.</li>      <li>Restore the container on the target host:</li>      <pre><code>docker start --checkpoint my_checkpoint my_container</code></pre>      <li>Ensure both hosts have the same Docker version and configuration.</li>      <li>Live migration is experimental and requires additional tools like <b>CRIU</b>.</li>      </ul>"}],Gw=()=>N.jsx(kt,{links:Kw}),Qw=[{id:"1",title:"Reactjs? Use Cases",content:`<section>
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
    </section>`,link:"https://www.geeksforgeeks.org/what-are-the-limitations-of-react-js/"}],Yw=[...Qw],Jw=()=>N.jsx(kt,{links:Yw}),Xw=[{id:1,title:"Angular? its use cases feature",content:`
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
    `}],Zw=[...Xw],eb=()=>N.jsx(kt,{links:Zw}),tb=[{id:24,title:"self motivation",content:"<h3>How do you motivate yourself?</h3>      <ul>      <li>Whenever I feel low or stuck, I remind myself why I started — my goals and the bigger picture.</li>      <li>I break the task into smaller steps and focus on making steady progress.</li>      <li>Even small wins give me a boost and help me keep going.</li>      <li>Sometimes, a quick walk or some music helps me reset and refocus.</li>      <li>Most importantly, knowing that my work has purpose and impact keeps me motivated.</li>      </ul>"},{id:25,title:"teamwork",content:"<h3>How do you handle teamwork?</h3>      <ul>      <li>I believe in open communication and sharing ideas freely.</li>      <li>Listening to others' perspectives helps us find the best solutions together.</li>      <li>We celebrate our successes as a team, which strengthens our bond.</li>      <li>When conflicts arise, I focus on finding common ground and moving forward.</li>      <li>Ultimately, I see teamwork as a way to achieve more than we could alone.</li>      </ul>"},{id:25,title:"workload management",content:"<h3>How do you manage workload?</h3>      <ul>      <li>I start by listing down all the tasks and prioritizing them based on urgency and importance.</li>      <li>I break big tasks into smaller, manageable steps to avoid feeling overwhelmed.</li>      <li>I set realistic deadlines and try to stay consistent rather than rushing at the last minute.</li>      <li>Whenever needed, I communicate early if I need support or if something might get delayed.</li>      <li>Staying organized, focused, and calm helps me handle my workload effectively.</li>      </ul>"},{id:26,title:"conflict resolution",content:"<h3>How do you handle conflicts?</h3>      <ul>      <li>I approach conflicts with an open mind, ready to listen to all sides.</li>      <li>Understanding the root cause helps us find a solution that works for everyone.</li>      <li>I focus on the issue at hand, not personal attacks, to keep discussions constructive.</li>      <li>Finding common ground and compromising when possible is key to resolving conflicts.</li>      <li>Ultimately, I believe in maintaining respect and professionalism throughout the process.</li>      </ul>"},{id:26,title:"preferred work environment",content:"<h3>What kind of work environment do you prefer?</h3>      <ul>      <li>I prefer a positive and collaborative environment where team members support each other.</li>      <li>Open communication and mutual respect matter a lot to me.</li>      <li>I enjoy working in a place where learning is encouraged and feedback is constructive.</li>      <li>Having a bit of flexibility and trust from the team helps me stay motivated and productive.</li>      <li>Overall, I do well in an environment that values both individual contribution and teamwork.</li>      </ul>"},{id:27,title:"leadership style",content:"<h3>What is your leadership style?</h3>      <ul>      <li>I believe in leading by example and being approachable.</li>      <li>Empowering team members to take ownership of their work is important to me.</li>      <li>I encourage open communication and value everyone's input.</li>      <li>When challenges arise, I focus on finding solutions together rather than placing blame.</li>      <li>Ultimately, I aim to create an environment where everyone can thrive and contribute their best.</li>      </ul>"},{id:27,title:"work-life balance OR Do you take your work home with you?",content:"<h3>Do you take your work home with you?</h3>      <ul>      <li>I believe in maintaining a healthy work-life balance to stay productive and focused.</li>      <li>I try to complete my tasks within working hours by managing my time efficiently.</li>      <li>However, if there's something urgent or important, I don't mind putting in extra effort from home.</li>      <li>But I also understand the importance of rest, so I make sure to recharge and come back fresh the next day.</li>      </ul>"},{id:28,title:"feedback",content:"<h3>How do you handle feedback?</h3>      <ul>      <li>I see feedback as an opportunity to grow and improve.</li>      <li>I listen carefully and try to understand the perspective of the person giving feedback.</li>      <li>If it's constructive, I take it to heart and make necessary changes.</li>      <li>Even if it's tough to hear, I appreciate honesty and use it to better myself.</li>      <li>Overall, I believe feedback is essential for personal and professional development.</li>      </ul>"},{id:28,title:"management style feedback",content:"<h3>What do you think your employees would say about your management style?</h3>      <ul>      <li>They would probably say that I'm approachable, supportive, and fair.</li>      <li>I believe in giving team members the space to do their work while being available when they need help.</li>      <li>I try to lead by example, communicate clearly, and recognize good work.</li>      <li>I also encourage collaboration and open feedback so everyone feels involved and valued.</li>      <li>Overall, I aim to create a positive environment where people can grow and perform their best.</li>      </ul>"},{id:29,title:"decision making",content:"<h3>How do you make decisions?</h3>      <ul>      <li>I gather all the relevant information and consider different perspectives before making a decision.</li>      <li>When possible, I involve team members to get their input and insights.</li>      <li>I weigh the pros and cons, thinking about both short-term and long-term impacts.</li>      <li>Once I make a decision, I communicate it clearly and ensure everyone understands the reasoning behind it.</li>      <li>Ultimately, I trust my judgment but remain open to feedback and adjustments if needed.</li>      </ul>"},{id:29,title:"qualities of a successful manager",content:"<h3>What are the qualities of a successful manager?</h3>      <ul>      <li>A successful manager is someone who leads by example and earns the trust of their team.</li>      <li>They should have strong communication skills and be able to listen as well as guide.</li>      <li>They need to be organized, make clear decisions, and handle pressure calmly.</li>      <li>Empathy and fairness are key — understanding team members and treating everyone with respect.</li>      <li>And most importantly, a good manager helps others grow by providing support, feedback, and opportunities.</li>      </ul>"},{id:30,title:"time management",content:"<h3>How do you manage your time?</h3>      <ul>      <li>I start by setting clear priorities and breaking tasks into smaller steps.</li>      <li>I use tools like calendars and to-do lists to keep track of deadlines and appointments.</li>      <li>Staying focused and avoiding distractions helps me make the most of my time.</li>      <li>I also try to allocate specific time blocks for different tasks to stay organized.</li>      <li>Overall, I believe in being proactive and flexible to adapt to changing priorities.</li>      </ul>"},{id:30,title:"motivating employees in tough times",content:"<h3>How do you motivate your employees in tough times?</h3>      <ul>      <li>In tough times, I focus on keeping communication open and honest to reduce uncertainty.</li>      <li>I acknowledge the challenges and appreciate the team's efforts sincerely.</li>      <li>I try to keep the team focused on what we can control and break down goals into achievable steps.</li>      <li>Celebrating small wins and supporting each other goes a long way during difficult phases.</li>      <li>I also stay positive and lead with empathy — showing that we’re in it together and things will get better.</li>      </ul>"},{id:31,title:"change management?,How handle change?",content:"<h3>How do you handle change?</h3>      <ul>      <li>I try to stay adaptable and open-minded when facing change.</li>      <li>Understanding the reasons behind the change helps me accept it more easily.</li>      <li>I communicate with my team to address concerns and gather feedback on how we can adapt together.</li>      <li>Staying focused on our goals and finding ways to make the change work for us is key.</li>      <li>Ultimately, I see change as an opportunity for growth and improvement.</li>      </ul>"},{id:31,title:"delegation strategy an important assignment to others while ensuring that it will be completed successfully?",content:"<h3>How do you delegate an important assignment to others while ensuring that it will be completed successfully?</h3>      <ul>      <li>I start by clearly understanding the assignment and then choosing the right person based on their skills and experience.</li>      <li>I explain the goals, expectations, and deadlines clearly, and make sure they have all the necessary resources.</li>      <li>I trust the team member to take ownership, but I also set up check-ins to track progress and offer support if needed.</li>      <li>Open communication is key — I encourage questions and updates to avoid misunderstandings.</li>      <li>In the end, I review the outcome, give feedback, and appreciate the effort, which builds accountability and confidence.</li>      </ul>"},{id:32,title:"performance evaluation",content:"<h3>How do you evaluate the performance of your team members?</h3>      <ul>      <li>I set clear goals and expectations at the beginning of each period to measure performance against.</li>      <li>I regularly check in with team members to discuss their progress and any challenges they face.</li>      <li>Feedback is a two-way street — I encourage them to share their thoughts on how I can support them better.</li>      <li>At the end of the evaluation period, I provide constructive feedback, recognizing achievements and areas for improvement.</li>      <li>Overall, I believe in fostering a growth mindset where everyone feels valued and motivated to improve.</li>      </ul>"},{id:32,title:"motivation through rewards of an employee",content:"<h3>Do you have an example of when you motivated your staff using a reward?</h3>      <ul>      <li>Yes, during a tight project deadline, I set a team goal and told them that if we met it early with good quality, I’d arrange a small team lunch.</li>      <li>The team worked together efficiently, helped each other, and we completed the project ahead of schedule.</li>      <li>The lunch wasn’t big, but it showed appreciation and gave everyone a chance to relax and bond.</li>      <li>It boosted morale and reminded the team that their extra effort is noticed and valued.</li>      <li>Sometimes, even simple rewards can make a big difference in motivation.</li>      </ul>"},{id:33,title:"What type of pace do you work? or working pace",content:"<h3>What type of pace do you work?</h3>      <ul>      <li>I usually work at a steady and focused pace, balancing quality with efficiency.</li>      <li>When deadlines are tight or situations demand it, I can shift gears and work faster without compromising accuracy.</li>      <li>I prioritize tasks smartly so that I'm not just busy, but actually productive.</li>      <li>My goal is always to deliver consistent results, whether the pace is fast or moderate.</li>      <li>I believe it’s important to adapt my pace based on the project's needs and urgency.</li>      </ul>"},{id:34,title:"Most challenging part of this position?",content:"<h3>What do you think will be the most challenging part of this position?</h3>      <ul>      <li>Every role comes with its own challenges, and for this position, I think the initial challenge will be understanding the team dynamics and ongoing projects quickly.</li>      <li>Getting up to speed with internal tools, workflows, and expectations might take some focused effort at the beginning.</li>      <li>However, I see this as a positive challenge — it’s a chance to learn fast and adapt.</li>      <li>I’m confident that with my experience, willingness to ask questions, and ability to collaborate, I’ll overcome this quickly.</li>      <li>And once I settle in, I can contribute more effectively and help the team move forward.</li>      </ul>"},{id:35,title:"What is your management style?",content:"<h3>What is your management style?</h3>      <ul>      <li>I would describe my management style as supportive and collaborative.</li>      <li>I believe in empowering team members by giving them ownership of their tasks while being available for guidance.</li>      <li>Open communication is key — I encourage feedback and discussions to ensure everyone feels heard.</li>      <li>I adapt my approach based on the team's needs, whether it’s providing structure or allowing flexibility.</li>      <li>Ultimately, I aim to create an environment where everyone can thrive and contribute their best.</li>      </ul>"},{id:35,title:"How do you keep updated on your management skills?",content:"<h3>How do you keep updated on your management skills?</h3>      <ul>      <li>I regularly read articles, books, and blogs related to leadership and management to stay current with new ideas.</li>      <li>I follow thought leaders and attend webinars or workshops whenever possible.</li>      <li>I also learn a lot from real-life experiences — by reflecting on what worked well and what could be improved.</li>      <li>Feedback from my team and peers plays a big role in helping me grow and adapt my approach.</li>      <li>Staying open to learning and being self-aware helps me continuously sharpen my management skills.</li>      </ul>"},{id:36,title:"What is your approach to team building?",content:"<h3>What is your approach to team building?</h3>      <ul>      <li>I believe in creating a strong foundation of trust and open communication within the team.</li>      <li>Regular team-building activities, both formal and informal, help strengthen relationships.</li>      <li>I encourage collaboration by assigning tasks that require teamwork and shared goals.</li>      <li>Recognizing individual strengths and celebrating achievements fosters a positive team culture.</li>      <li>Ultimately, I aim to create an environment where everyone feels valued and motivated to contribute.</li>      </ul>"},{id:36,title:"important aspects of a team",content:"<h3>What do you think are important aspects of a team?</h3>      <ul>      <li>Trust is the foundation — team members should feel comfortable relying on one another.</li>      <li>Clear communication ensures everyone is aligned and misunderstandings are minimized.</li>      <li>Respect for different perspectives and skills helps create a more balanced and creative team.</li>      <li>Shared goals and a sense of ownership keep everyone motivated and working in the same direction.</li>      <li>Lastly, support and collaboration make the team stronger during both good and tough times.</li>      </ul>"},{id:37,title:"How do you handle underperforming team members?",content:"<h3>How do you handle underperforming team members?</h3>      <ul>      <li>I start by having a one-on-one conversation to understand any challenges they might be facing.</li>      <li>Setting clear expectations and providing constructive feedback is important to help them improve.</li>      <li>I offer support, whether it’s additional training, resources, or just being available to answer questions.</li>      <li>If performance doesn’t improve, I work with them to create a performance improvement plan.</li>      <li>Ultimately, I believe in giving everyone a fair chance to succeed while also being honest about expectations.</li>      </ul>"},{id:37,title:"Do you have experience with setting budgets?",content:"<h3>Do you have experience with setting budgets?</h3>      <ul>      <li>Yes, I have experience setting budgets, especially for team projects and resource planning.</li>      <li>I start by understanding the goals and identifying all potential costs — from tools and manpower to time estimates.</li>      <li>I make sure to allocate resources wisely, keeping both efficiency and quality in mind.</li>      <li>I also monitor the budget regularly to stay on track and adjust if priorities shift.</li>      <li>For me, budgeting is not just about limiting spending but about smart planning to maximize value.</li>      </ul>"},{id:38,title:"How do you handle stress?",content:"<h3>How do you handle stress?</h3>      <ul>      <li>I try to stay calm and focused, breaking down tasks into smaller, manageable steps.</li>      <li>Taking short breaks to clear my mind helps me regain perspective and energy.</li>      <li>Staying organized and prioritizing tasks reduces the feeling of being overwhelmed.</li>      <li>I also find that talking things out with a colleague or friend can provide new insights and relief.</li>      <li>Ultimately, I believe in maintaining a positive attitude and finding healthy outlets for stress.</li>      </ul>"},{id:38,title:"least rewarding part of previous role",content:"<h3>What was the least rewarding part of your previous position?</h3>      <ul>      <li>Every job has its ups and downs, and for me, the least rewarding part was when good ideas took a long time to get approved or implemented.</li>      <li>It was sometimes challenging to wait when I felt that a change could make a real positive impact quickly.</li>      <li>However, I used that time to refine the ideas further and build stronger cases for them.</li>      <li>This experience taught me patience, persistence, and how to better navigate processes and communication.</li>      <li>Even the less rewarding parts helped me grow professionally and personally.</li>      </ul>"},{id:39,title:"How do you handle tight deadlines?",content:"<h3>How do you handle tight deadlines?</h3>      <ul>      <li>I stay calm and focused, breaking down the tasks into smaller, manageable parts.</li>      <li>Prioritizing tasks based on urgency helps me tackle the most critical ones first.</li>      <li>I communicate with my team to ensure we’re all aligned and can support each other.</li>      <li>Staying organized and avoiding distractions is key to making the most of the time available.</li>      <li>Ultimately, I believe in maintaining a positive attitude and doing my best under pressure.</li>      </ul>"},{id:39,title:"contribution to the company",content:"<h3>What will you contribute to this company?</h3>      <ul>      <li>I will bring a strong sense of responsibility, dedication, and a positive mindset to every task I handle.</li>      <li>My experience, problem-solving skills, and ability to work both independently and with a team will add value from day one.</li>      <li>I’m always eager to learn and adapt, which helps me stay aligned with company goals and industry changes.</li>      <li>I’ll also contribute by promoting a collaborative and respectful work culture.</li>      <li>Ultimately, I want to grow with the company and help it succeed in any way I can.</li>      </ul>"},{id:40,title:"How do you handle multiple tasks at once?",content:"<h3>How do you handle multiple tasks at once?</h3>      <ul>      <li>I prioritize tasks based on urgency and importance, focusing on one thing at a time.</li>      <li>Using tools like to-do lists or project management software helps me stay organized.</li>      <li>I break larger tasks into smaller steps to make them more manageable.</li>      <li>Staying flexible and adapting to changes is key when juggling multiple responsibilities.</li>      <li>Ultimately, I believe in maintaining a calm and focused approach to ensure quality work across all tasks.</li>      </ul>"},{id:40,title:"How go about delivering bad news or a decision that will not be popular?",content:"<h3>How would you go about delivering bad news or a decision that will not be popular?</h3>      <ul>      <li>I believe honesty and clarity are key, so I share the news directly but with empathy.</li>      <li>I explain the reasons behind the decision, helping others understand the bigger picture.</li>      <li>I give space for questions and concerns, listening carefully to how people feel.</li>      <li>Whenever possible, I offer support or solutions to help cope with the impact.</li>      <li>Being respectful and transparent helps maintain trust, even in tough conversations.</li>      </ul>"},{id:41,title:"establishing rapport with new employees",content:"<h3>How do you establish rapport with a new employee?</h3>      <ul>      <li>I start by being welcoming and approachable to create a comfortable environment.</li>      <li>I take time to learn about their background, interests, and goals.</li>      <li>I encourage open communication and make sure they know where to find help or resources.</li>      <li>Pairing them with a mentor or buddy helps them settle in faster and feel supported.</li>      <li>Building trust early helps set the stage for good teamwork and collaboration.</li>      </ul>"},{id:42,title:"communicating expectations to an employee?",content:"<h3>How do you communicate an expectation to an employee?</h3>      <ul>      <li>I clearly explain what needs to be done, why it’s important, and how it fits into the bigger goals.</li>      <li>I make sure to be specific about deadlines, quality standards, and any resources available.</li>      <li>I check for understanding by asking questions and encouraging feedback.</li>      <li>Providing examples or guidelines helps avoid confusion.</li>      <li>Finally, I stay available for support and follow-up to ensure expectations are met.</li>      </ul>"},{id:43,title:"coaching underperforming employees",content:"<h3>How do you go about coaching an employee who is not performing where they need to be?</h3>      <ul>      <li>First, I have a private and honest conversation to understand any challenges or obstacles they face.</li>      <li>Together, we set clear, achievable goals and create a plan to improve performance.</li>      <li>I offer resources, training, or mentorship that could help them develop necessary skills.</li>      <li>Regular check-ins and feedback keep the process on track and encourage progress.</li>      <li>Throughout, I focus on positive reinforcement and support to build confidence.</li>      </ul>"},{id:44,title:"handling under-performing high performer",content:"<h3>A high-performing employee has recently been under-performing. How would you deal with the situation?</h3>      <ul>      <li>I would start by having a private, open conversation to understand what might be causing the change in performance.</li>      <li>There could be personal issues, workload stress, or unclear expectations impacting their work.</li>      <li>Together, we'd identify any obstacles and create an action plan to support their improvement.</li>      <li>I’d offer resources, guidance, or adjustments needed to help them get back on track.</li>      <li>Regular follow-ups and encouragement would help maintain motivation and accountability.</li>      </ul>"},{id:45,title:"gaining rapport in new workplace",content:"<h3>When you enter a new workplace with new employees, how would you go about gaining rapport with them?</h3>      <ul>      <li>I focus on being approachable and open, showing genuine interest in getting to know my colleagues.</li>      <li>Listening carefully and respecting their experiences helps build trust quickly.</li>      <li>Participating in team activities and informal conversations helps break the ice.</li>      <li>I make an effort to understand their working styles and preferences.</li>      <li>Building rapport early creates a positive foundation for collaboration and teamwork.</li>      </ul>"},{id:46,title:"handling conflict between employees",content:"<h3>How do you handle conflict with two employees?</h3>      <ul>      <li>I address conflicts quickly and fairly by listening to both sides without bias.</li>      <li>I encourage open and respectful communication to help each understand the other’s perspective.</li>      <li>Together, we identify the root cause and explore solutions that satisfy both parties.</li>      <li>Sometimes, setting clear guidelines and expectations helps prevent future conflicts.</li>      <li>If needed, I involve HR or mediation to ensure a positive and professional work environment.</li>      </ul>"},{id:47,title:"handling failure",content:"<h3>How do you handle failure?</h3>      <ul>      <li>I see failure as an opportunity to learn and grow rather than as a setback.</li>      <li>When I face failure, I take time to analyze what went wrong and why.</li>      <li>I seek feedback and advice to gain new perspectives and improve.</li>      <li>Applying lessons learned helps me avoid repeating mistakes and build resilience.</li>      <li>Staying positive and focused on solutions keeps me motivated to move forward.</li>      </ul>"},{id:48,title:"managing work week",content:"<h3>Describe how you would manage your work week.</h3>      <ul>      <li>I start by prioritizing tasks based on deadlines and importance to ensure key goals are met.</li>      <li>I break down larger projects into smaller, manageable steps to avoid feeling overwhelmed.</li>      <li>I schedule focused time blocks for deep work and leave room for meetings and collaboration.</li>      <li>Regularly reviewing progress helps me stay flexible and adjust plans if priorities change.</li>      <li>I also make sure to balance work with breaks to maintain energy and productivity throughout the week.</li>      </ul>"},{id:49,title:"explaining management style",content:"<h3>How would you explain your management style?</h3>      <ul>      <li>My management style is collaborative and supportive, focusing on open communication and trust.</li>      <li>I believe in empowering team members by giving them clear goals and the freedom to find the best way to achieve them.</li>      <li>I provide regular feedback and encourage professional growth.</li>      <li>At the same time, I am approachable and ready to step in when guidance or problem-solving is needed.</li>      <li>This balance helps create a motivated and accountable team.</li>      </ul>"},{id:50,title:"handling different personalities of your employees",content:"<h3>How do you handle different personalities of your employees?</h3>      <ul>      <li>I recognize that every person is unique and try to understand their strengths, communication styles, and motivators.</li>      <li>I adapt my approach to suit individual needs, whether that means giving more guidance or more independence.</li>      <li>Creating an inclusive environment where everyone feels valued helps bring out the best in diverse personalities.</li>      <li>I also encourage team bonding to build respect and understanding among employees.</li>      <li>This approach helps reduce conflicts and improve overall teamwork.</li>      </ul>"},{id:51,title:"adapting to change",content:"<h3>How do you adapt to change?</h3>      <ul>      <li>I stay open-minded and try to see change as an opportunity rather than a challenge.</li>      <li>I focus on understanding the reasons behind the change to better align with new directions.</li>      <li>I remain flexible and ready to adjust plans or learn new skills when needed.</li>      <li>Communicating clearly with my team helps everyone stay informed and comfortable during transitions.</li>      <li>By maintaining a positive attitude, I help create a supportive atmosphere that embraces change.</li>      </ul>"},{id:52,title:"most rewarding part of previous position",content:"<h3>What do you find most rewarding about your previous position?</h3>      <ul>      <li>The most rewarding part was seeing the positive impact of my work on both the team and the organization.</li>      <li>I enjoyed helping teammates grow and achieve their goals through support and collaboration.</li>      <li>Solving complex problems and delivering successful outcomes gave me a strong sense of accomplishment.</li>      <li>Being trusted with responsibilities and making meaningful contributions kept me motivated and proud.</li>      </ul>"},{id:53,title:"handling unexpected outcomes",content:"<h3>How would you handle a decision that you made that did not have the effect that you were expecting to achieve?</h3>      <ul>      <li>I would take responsibility and assess what went wrong without placing blame.</li>      <li>I would gather feedback and data to understand why the outcome differed from expectations.</li>      <li>From there, I’d adjust my approach and develop a new plan of action based on what I learned.</li>      <li>I believe being flexible, learning from mistakes, and staying solution-focused is key to growth.</li>      </ul>"},{id:54,title:"future goals if hired",content:"<h3>What are your goals for the future if you are hired in this company?</h3>      <ul>      <li>My goal is to contribute meaningfully to the team and help the company achieve its objectives.</li>      <li>I aim to keep improving my technical and leadership skills to take on greater responsibilities over time.</li>      <li>I want to become a reliable and valuable part of the team by consistently delivering high-quality work.</li>      <li>Building strong relationships with coworkers and learning from them is also a priority.</li>      </ul>"},{id:55,title:"achieving future goals",content:"<h3>How will you achieve these goals?</h3>      <ul>      <li>I plan to stay proactive in learning new tools, technologies, and business processes.</li>      <li>I’ll seek feedback regularly and use it to improve my performance and decision-making.</li>      <li>Setting short-term milestones will help me stay on track and measure progress.</li>      <li>I’ll also stay engaged with my team, share knowledge, and take initiative whenever possible.</li>      </ul>"},{id:56,title:"disagreeing with supervisor",content:"<h3>How would you go about disagreeing with your supervisor about a decision that you know is not the right one?</h3>      <ul>      <li>I would approach the situation respectfully and professionally, focusing on the facts.</li>      <li>I’d ask for a private discussion to share my perspective and present data or examples to support my concerns.</li>      <li>I would remain open to understanding their reasoning and aim for a constructive conversation.</li>      <li>If the decision stands, I would respect it and execute it to the best of my ability while documenting my input.</li>      </ul>"},{id:57,title:"How do you show confidence in your employee’s ability when you assign them a task?",content:"<h3>How do you show confidence in your employee’s ability when you assign them a task?</h3>      <ul>      <li>I clearly communicate why I believe they are the right person for the task based on their skills or past work.</li>      <li>I give them ownership of the task and let them make decisions where appropriate.</li>      <li>I provide any needed support but avoid micromanaging, showing that I trust their judgment.</li>      <li>Recognition and encouragement during and after the task reinforce my confidence in them.</li>      </ul>"},{id:58,title:"An employee reports a problem to you, how do you go about solving it?",content:"<h3>An employee reports a problem to you, how do you go about solving it?</h3>      <ul>      <li>I begin by listening carefully and asking clarifying questions to fully understand the issue.</li>      <li>I assess the impact of the problem and identify any immediate steps to contain or address it.</li>      <li>I collaborate with the employee and other stakeholders to explore possible solutions.</li>      <li>Once resolved, I follow up to ensure the fix worked and to prevent future occurrences.</li>      </ul>"},{id:59,title:"How do you motivate an employee who is reluctant to take on an additional task?",content:"<h3>How do you motivate an employee who is reluctant to take on an additional task?</h3>      <ul>      <li>I try to understand their hesitation by having an open and honest conversation.</li>      <li>I explain the importance and value of the task and how it fits into the bigger picture.</li>      <li>If possible, I align the task with their strengths or growth goals to increase engagement.</li>      <li>Providing support, breaking the task into smaller steps, or offering recognition can also help build motivation.</li>      </ul>"},{id:60,title:"You are at a point with an employee that it is best to have them leave the organization. How would you go about the conversation?",content:"<h3>You are at a point with an employee that it is best to have them leave the organization. How would you go about the conversation?</h3>      <ul>      <li>I would prepare by reviewing their performance history and consulting HR to ensure fairness and compliance.</li>      <li>In the conversation, I would remain respectful and compassionate while being clear and direct.</li>      <li>I would explain the reasons for the decision based on documented performance issues.</li>      <li>I’d also offer information on any support available, such as outplacement services or references if appropriate.</li>      </ul>"},{id:61,title:"An employee wants a promotion, however, he or she is not qualified for the new position. How would you have the conversation with the employee?",content:"<h3>An employee wants a promotion, however, he or she is not qualified for the new position. How would you have the conversation with the employee?</h3>      <ul>      <li>I’d acknowledge their interest and appreciate their ambition and dedication.</li>      <li>I would clearly explain the qualifications or experience required for the role and where they currently stand.</li>      <li>Together, we’d create a development plan to help them build the skills or experience needed for future opportunities.</li>      <li>Maintaining transparency and support helps keep them motivated while preparing them for the next step.</li>      </ul>"}],ib=[{title:"About yourself",content:`
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
  `,link:""}],nb=[...ib,...tb],vh=()=>N.jsx(kt,{links:nb}),rb=[{title:"Key features",content:"<section><h3>Python is a versatile and popular programming language known for its simplicity, elegant syntax, and a vast ecosystem of libraries.</h3><h4>Key Features of Python</h4><ol><li><strong>Interpreted and Interactive</strong><br>Python uses an interpreter, allowing developers to run code line-by-line, making it ideal for rapid prototyping and debugging.</li><li><strong>Easy to Learn and Read</strong><br>Python's clean, readable syntax, often resembling plain English, reduces the cognitive load for beginners and experienced developers alike.</li><li><strong>Cross-Platform Compatibility</strong><br>Python is versatile, running on various platforms, such as Windows, Linux, and macOS, without requiring platform-specific modifications.</li><li><strong>Modular and Scalable</strong><br>Developers can organize their code into modular packages and reusable functions.</li><li><strong>Rich Library Ecosystem</strong><br>The Python Package Index (PyPI) hosts over 260,000 libraries, providing solutions for tasks ranging from web development to data analytics.</li><li><strong>Exceptionally Versatile</strong><br>From web applications to scientific computing, Python is equally proficient in diverse domains.</li><li><strong>Memory Management</strong><br>Python seamlessly allocates and manages memory, shielding developers from low-level tasks, such as memory deallocation.</li><li><strong>Dynamically Typed</strong><br>Python infers the data type of a variable during execution, easing the declaration and manipulation of variables.</li><li><strong>Object-Oriented</strong><br>Python supports object-oriented paradigms, where everything is an object, offering attributes and methods to manipulate data.</li><li><strong>Extensible</strong><br>With its C-language API, developers can integrate performance-critical tasks and existing C modules with Python.</li></ol></section>",link:""},{title:"Py applications",content:`<h3>It was designed with an emphasis on code readability, and its syntax allows programmers to express their concepts in fewer lines of code.</h3>
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
    </ul>`,link:""}],ob=()=>N.jsx(kt,{links:rb}),sb=[{id:"1",title:"Reactjs? Use Cases",content:`<section>
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
    </section>`,link:"https://www.geeksforgeeks.org/what-are-the-limitations-of-react-js/"}],ab=[...sb],lb=()=>N.jsx(kt,{links:ab}),cb=[{id:"1",title:"TypeScript? Use Cases Features",content:`
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
    `,link:""}],ub=()=>N.jsx(kt,{links:cb}),db=[{id:1,title:"SQL?",content:`
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
        `,link:"https://www.w3schools.com/sql/"}],hb=[...db],pb=()=>N.jsx(kt,{links:hb}),mb=[{id:81,title:"JavaScript? Use Cases Features",content:`
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
    `}],gb=()=>N.jsx(kt,{links:mb}),fb=[{title:"What is MongoDB? Key Features and Use Cases",content:`
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

      <p><a href="https://www.mongodb.com/docs/manual/introduction/">Learn more about MongoDB</a></p>`}],yb=[...fb],vb=()=>N.jsx(kt,{links:yb}),wb=[{id:"q1",title:"microservice? Use cases Feature",content:`<h3>What is a microservice architecture?</h3> <ul><li>Microservices break applications into small, independent services.</li><li>Each service is deployed separately using AWS Lambda, API Gateway, or containers.</li><li>They communicate via REST, GraphQL, or message queues (e.g., SQS).</li><li>Example: A simple AWS Lambda microservice using Node.js and Express.</li></ul><pre><code>import express from 'express';
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
    </ul>`}],bb=()=>N.jsx(kt,{links:wb}),kb=[{id:1,title:"What is an Operating System?",content:`
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
    `}],Sb=()=>N.jsx(kt,{links:kb});function xb(){return N.jsxs(Dh,{children:[N.jsx(Je,{path:"/",element:N.jsx(vh,{})}),N.jsx(Je,{path:"/virtualization",element:N.jsx(Hw,{})}),N.jsx(Je,{path:"/network",element:N.jsx(gb,{})}),N.jsx(Je,{path:"/ad",element:N.jsx(ub,{})}),N.jsx(Je,{path:"/backup",element:N.jsx(lb,{})}),N.jsx(Je,{path:"/security",element:N.jsx(pb,{})}),N.jsx(Je,{path:"/scripting",element:N.jsx(vb,{})}),N.jsx(Je,{path:"/monitoring",element:N.jsx(bb,{})}),N.jsx(Je,{path:"/cloud",element:N.jsx($w,{})}),N.jsx(Je,{path:"/docker",element:N.jsx(Gw,{})}),N.jsx(Je,{path:"/tools",element:N.jsx(eb,{})}),N.jsx(Je,{path:"/itil",element:N.jsx(Jw,{})}),N.jsx(Je,{path:"/python",element:N.jsx(ob,{})}),N.jsx(Je,{path:"/os",element:N.jsx(Sb,{})}),N.jsx(Je,{path:"*",element:N.jsx(vh,{})})]})}const Wl=Tt.createContext(),xn=["/ad","/","/network","/virtualization","/backup","/security","/python","/scripting","/monitoring","/cloud","/docker","/tools","/itil","/os"],Ib=()=>{const[n,s]=M.useState(""),o=hi(),l=Cr();return M.useEffect(()=>{const u=d=>{const h=xn.indexOf(o.pathname);if(d.key==="Tab")if(d.preventDefault(),d.shiftKey){const m=(h-1+xn.length)%xn.length;l(xn[m])}else{const m=(h+1)%xn.length;l(xn[m])}};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[o,l]),N.jsxs(Wl.Provider,{value:{searchQuery:n,setSearchQuery:s},children:[N.jsx(By,{}),N.jsxs(Dh,{children:[N.jsx(Je,{path:"/login",element:N.jsx(bw,{})}),N.jsx(Je,{path:"*",element:N.jsx(Sw,{children:N.jsx(xb,{})})}),N.jsx(Je,{path:"/logout",element:N.jsx(kw,{})})]})]})},Pb=()=>N.jsx(zf,{children:N.jsx(Ib,{})}),Cb=()=>N.jsx(N.Fragment,{children:N.jsx(Pb,{})});xg.createRoot(document.getElementById("root")).render(N.jsx(M.StrictMode,{children:N.jsx(ww,{children:N.jsx(Cb,{})})}));
