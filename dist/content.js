(function(){"use strict";var Kn={exports:{}},u1={},Yn={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vl=Symbol.for("react.element"),No=Symbol.for("react.portal"),Ro=Symbol.for("react.fragment"),jo=Symbol.for("react.strict_mode"),Io=Symbol.for("react.profiler"),Fo=Symbol.for("react.provider"),Do=Symbol.for("react.context"),Oo=Symbol.for("react.forward_ref"),Ao=Symbol.for("react.suspense"),$o=Symbol.for("react.memo"),Uo=Symbol.for("react.lazy"),Xn=Symbol.iterator;function Bo(e){return e===null||typeof e!="object"?null:(e=Xn&&e[Xn]||e["@@iterator"],typeof e=="function"?e:null)}var qn={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jn=Object.assign,bn={};function A0(e,l,r){this.props=e,this.context=l,this.refs=bn,this.updater=r||qn}A0.prototype.isReactComponent={},A0.prototype.setState=function(e,l){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,l,"setState")},A0.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function es(){}es.prototype=A0.prototype;function Tr(e,l,r){this.props=e,this.context=l,this.refs=bn,this.updater=r||qn}var Pr=Tr.prototype=new es;Pr.constructor=Tr,Jn(Pr,A0.prototype),Pr.isPureReactComponent=!0;var ls=Array.isArray,rs=Object.prototype.hasOwnProperty,zr={current:null},ts={key:!0,ref:!0,__self:!0,__source:!0};function ns(e,l,r){var t,n={},s=null,a=null;if(l!=null)for(t in l.ref!==void 0&&(a=l.ref),l.key!==void 0&&(s=""+l.key),l)rs.call(l,t)&&!ts.hasOwnProperty(t)&&(n[t]=l[t]);var o=arguments.length-2;if(o===1)n.children=r;else if(1<o){for(var i=Array(o),f=0;f<o;f++)i[f]=arguments[f+2];n.children=i}if(e&&e.defaultProps)for(t in o=e.defaultProps,o)n[t]===void 0&&(n[t]=o[t]);return{$$typeof:vl,type:e,key:s,ref:a,props:n,_owner:zr.current}}function Vo(e,l){return{$$typeof:vl,type:e.type,key:l,ref:e.ref,props:e.props,_owner:e._owner}}function Nr(e){return typeof e=="object"&&e!==null&&e.$$typeof===vl}function Ho(e){var l={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return l[r]})}var ss=/\/+/g;function Rr(e,l){return typeof e=="object"&&e!==null&&e.key!=null?Ho(""+e.key):l.toString(36)}function h1(e,l,r,t,n){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case vl:case No:a=!0}}if(a)return a=e,n=n(a),e=t===""?"."+Rr(a,0):t,ls(n)?(r="",e!=null&&(r=e.replace(ss,"$&/")+"/"),h1(n,l,r,"",function(f){return f})):n!=null&&(Nr(n)&&(n=Vo(n,r+(!n.key||a&&a.key===n.key?"":(""+n.key).replace(ss,"$&/")+"/")+e)),l.push(n)),1;if(a=0,t=t===""?".":t+":",ls(e))for(var o=0;o<e.length;o++){s=e[o];var i=t+Rr(s,o);a+=h1(s,l,r,i,n)}else if(i=Bo(e),typeof i=="function")for(e=i.call(e),o=0;!(s=e.next()).done;)s=s.value,i=t+Rr(s,o++),a+=h1(s,l,r,i,n);else if(s==="object")throw l=String(e),Error("Objects are not valid as a React child (found: "+(l==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":l)+"). If you meant to render a collection of children, use an array instead.");return a}function c1(e,l,r){if(e==null)return e;var t=[],n=0;return h1(e,t,"","",function(s){return l.call(r,s,n++)}),t}function Wo(e){if(e._status===-1){var l=e._result;l=l(),l.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=l)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},d1={transition:null},Go={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:d1,ReactCurrentOwner:zr};function as(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:c1,forEach:function(e,l,r){c1(e,function(){l.apply(this,arguments)},r)},count:function(e){var l=0;return c1(e,function(){l++}),l},toArray:function(e){return c1(e,function(l){return l})||[]},only:function(e){if(!Nr(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},N.Component=A0,N.Fragment=Ro,N.Profiler=Io,N.PureComponent=Tr,N.StrictMode=jo,N.Suspense=Ao,N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Go,N.act=as,N.cloneElement=function(e,l,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var t=Jn({},e.props),n=e.key,s=e.ref,a=e._owner;if(l!=null){if(l.ref!==void 0&&(s=l.ref,a=zr.current),l.key!==void 0&&(n=""+l.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(i in l)rs.call(l,i)&&!ts.hasOwnProperty(i)&&(t[i]=l[i]===void 0&&o!==void 0?o[i]:l[i])}var i=arguments.length-2;if(i===1)t.children=r;else if(1<i){o=Array(i);for(var f=0;f<i;f++)o[f]=arguments[f+2];t.children=o}return{$$typeof:vl,type:e.type,key:n,ref:s,props:t,_owner:a}},N.createContext=function(e){return e={$$typeof:Do,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fo,_context:e},e.Consumer=e},N.createElement=ns,N.createFactory=function(e){var l=ns.bind(null,e);return l.type=e,l},N.createRef=function(){return{current:null}},N.forwardRef=function(e){return{$$typeof:Oo,render:e}},N.isValidElement=Nr,N.lazy=function(e){return{$$typeof:Uo,_payload:{_status:-1,_result:e},_init:Wo}},N.memo=function(e,l){return{$$typeof:$o,type:e,compare:l===void 0?null:l}},N.startTransition=function(e){var l=d1.transition;d1.transition={};try{e()}finally{d1.transition=l}},N.unstable_act=as,N.useCallback=function(e,l){return ue.current.useCallback(e,l)},N.useContext=function(e){return ue.current.useContext(e)},N.useDebugValue=function(){},N.useDeferredValue=function(e){return ue.current.useDeferredValue(e)},N.useEffect=function(e,l){return ue.current.useEffect(e,l)},N.useId=function(){return ue.current.useId()},N.useImperativeHandle=function(e,l,r){return ue.current.useImperativeHandle(e,l,r)},N.useInsertionEffect=function(e,l){return ue.current.useInsertionEffect(e,l)},N.useLayoutEffect=function(e,l){return ue.current.useLayoutEffect(e,l)},N.useMemo=function(e,l){return ue.current.useMemo(e,l)},N.useReducer=function(e,l,r){return ue.current.useReducer(e,l,r)},N.useRef=function(e){return ue.current.useRef(e)},N.useState=function(e){return ue.current.useState(e)},N.useSyncExternalStore=function(e,l,r){return ue.current.useSyncExternalStore(e,l,r)},N.useTransition=function(){return ue.current.useTransition()},N.version="18.3.1",Yn.exports=N;var T=Yn.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zo=T,Ko=Symbol.for("react.element"),Yo=Symbol.for("react.fragment"),Xo=Object.prototype.hasOwnProperty,qo=Zo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jo={key:!0,ref:!0,__self:!0,__source:!0};function os(e,l,r){var t,n={},s=null,a=null;r!==void 0&&(s=""+r),l.key!==void 0&&(s=""+l.key),l.ref!==void 0&&(a=l.ref);for(t in l)Xo.call(l,t)&&!Jo.hasOwnProperty(t)&&(n[t]=l[t]);if(e&&e.defaultProps)for(t in l=e.defaultProps,l)n[t]===void 0&&(n[t]=l[t]);return{$$typeof:Ko,type:e,key:s,ref:a,props:n,_owner:qo.current}}u1.Fragment=Yo,u1.jsx=os,u1.jsxs=os,Kn.exports=u1;var U=Kn.exports,is={exports:{}},me={},fs={exports:{}},us={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function l(M,P){var z=M.length;M.push(P);e:for(;0<z;){var _=z-1>>>1,F=M[_];if(0<n(F,P))M[_]=P,M[z]=F,z=_;else break e}}function r(M){return M.length===0?null:M[0]}function t(M){if(M.length===0)return null;var P=M[0],z=M.pop();if(z!==P){M[0]=z;e:for(var _=0,F=M.length,fe=F>>>1;_<fe;){var q=2*(_+1)-1,Ze=M[q],J=q+1,x0=M[J];if(0>n(Ze,z))J<F&&0>n(x0,Ze)?(M[_]=x0,M[J]=z,_=J):(M[_]=Ze,M[q]=z,_=q);else if(J<F&&0>n(x0,z))M[_]=x0,M[J]=z,_=J;else break e}}return P}function n(M,P){var z=M.sortIndex-P.sortIndex;return z!==0?z:M.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var i=[],f=[],d=1,v=null,p=3,y=!1,m=!1,g=!1,j=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function c(M){for(var P=r(f);P!==null;){if(P.callback===null)t(f);else if(P.startTime<=M)t(f),P.sortIndex=P.expirationTime,l(i,P);else break;P=r(f)}}function k(M){if(g=!1,c(M),!m)if(r(i)!==null)m=!0,i1(S);else{var P=r(f);P!==null&&f1(k,P.startTime-M)}}function S(M,P){m=!1,g&&(g=!1,h(L),L=-1),y=!0;var z=p;try{for(c(P),v=r(i);v!==null&&(!(v.expirationTime>P)||M&&!ge());){var _=v.callback;if(typeof _=="function"){v.callback=null,p=v.priorityLevel;var F=_(v.expirationTime<=P);P=e.unstable_now(),typeof F=="function"?v.callback=F:v===r(i)&&t(i),c(P)}else t(i);v=r(i)}if(v!==null)var fe=!0;else{var q=r(f);q!==null&&f1(k,q.startTime-P),fe=!1}return fe}finally{v=null,p=z,y=!1}}var w=!1,E=null,L=-1,D=5,C=-1;function ge(){return!(e.unstable_now()-C<D)}function $e(){if(E!==null){var M=e.unstable_now();C=M;var P=!0;try{P=E(!0,M)}finally{P?Ge():(w=!1,E=null)}}else w=!1}var Ge;if(typeof u=="function")Ge=function(){u($e)};else if(typeof MessageChannel<"u"){var o1=new MessageChannel,Wn=o1.port2;o1.port1.onmessage=$e,Ge=function(){Wn.postMessage(null)}}else Ge=function(){j($e,0)};function i1(M){E=M,w||(w=!0,Ge())}function f1(M,P){L=j(function(){M(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){m||y||(m=!0,i1(S))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(i)},e.unstable_next=function(M){switch(p){case 1:case 2:case 3:var P=3;break;default:P=p}var z=p;p=P;try{return M()}finally{p=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,P){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var z=p;p=M;try{return P()}finally{p=z}},e.unstable_scheduleCallback=function(M,P,z){var _=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?_+z:_):z=_,M){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=z+F,M={id:d++,callback:P,priorityLevel:M,startTime:z,expirationTime:F,sortIndex:-1},z>_?(M.sortIndex=z,l(f,M),r(i)===null&&M===r(f)&&(g?(h(L),L=-1):g=!0,f1(k,z-_))):(M.sortIndex=F,l(i,M),m||y||(m=!0,i1(S))),M},e.unstable_shouldYield=ge,e.unstable_wrapCallback=function(M){var P=p;return function(){var z=p;p=P;try{return M.apply(this,arguments)}finally{p=z}}}})(us),fs.exports=us;var bo=fs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ei=T,Le=bo;function Q(e){for(var l="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)l+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hs=new Set,pl={};function S0(e,l){$0(e,l),$0(e+"Capture",l)}function $0(e,l){for(pl[e]=l,e=0;e<l.length;e++)hs.add(l[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jr=Object.prototype.hasOwnProperty,li=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cs={},ds={};function ri(e){return jr.call(ds,e)?!0:jr.call(cs,e)?!1:li.test(e)?ds[e]=!0:(cs[e]=!0,!1)}function ti(e,l,r,t){if(r!==null&&r.type===0)return!1;switch(typeof l){case"function":case"symbol":return!0;case"boolean":return t?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ni(e,l,r,t){if(l===null||typeof l>"u"||ti(e,l,r,t))return!0;if(t)return!1;if(r!==null)switch(r.type){case 3:return!l;case 4:return l===!1;case 5:return isNaN(l);case 6:return isNaN(l)||1>l}return!1}function he(e,l,r,t,n,s,a){this.acceptsBooleans=l===2||l===3||l===4,this.attributeName=t,this.attributeNamespace=n,this.mustUseProperty=r,this.propertyName=e,this.type=l,this.sanitizeURL=s,this.removeEmptyString=a}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new he(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var l=e[0];le[l]=new he(l,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new he(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){le[e]=new he(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){le[e]=new he(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){le[e]=new he(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){le[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ir=/[\-:]([a-z])/g;function Fr(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var l=e.replace(Ir,Fr);le[l]=new he(l,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var l=e.replace(Ir,Fr);le[l]=new he(l,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var l=e.replace(Ir,Fr);le[l]=new he(l,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){le[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)}),le.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){le[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Dr(e,l,r,t){var n=le.hasOwnProperty(l)?le[l]:null;(n!==null?n.type!==0:t||!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(ni(l,r,n,t)&&(r=null),t||n===null?ri(l)&&(r===null?e.removeAttribute(l):e.setAttribute(l,""+r)):n.mustUseProperty?e[n.propertyName]=r===null?n.type===3?!1:"":r:(l=n.attributeName,t=n.attributeNamespace,r===null?e.removeAttribute(l):(n=n.type,r=n===3||n===4&&r===!0?"":""+r,t?e.setAttributeNS(t,l,r):e.setAttribute(l,r))))}var Ye=ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,v1=Symbol.for("react.element"),U0=Symbol.for("react.portal"),B0=Symbol.for("react.fragment"),Or=Symbol.for("react.strict_mode"),Ar=Symbol.for("react.profiler"),vs=Symbol.for("react.provider"),ps=Symbol.for("react.context"),$r=Symbol.for("react.forward_ref"),Ur=Symbol.for("react.suspense"),Br=Symbol.for("react.suspense_list"),Vr=Symbol.for("react.memo"),n0=Symbol.for("react.lazy"),ks=Symbol.for("react.offscreen"),Qs=Symbol.iterator;function kl(e){return e===null||typeof e!="object"?null:(e=Qs&&e[Qs]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Hr;function Ql(e){if(Hr===void 0)try{throw Error()}catch(r){var l=r.stack.trim().match(/\n( *(at )?)/);Hr=l&&l[1]||""}return`
`+Hr+e}var Wr=!1;function Gr(e,l){if(!e||Wr)return"";Wr=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(l)if(l=function(){throw Error()},Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(f){var t=f}Reflect.construct(e,[],l)}else{try{l.call()}catch(f){t=f}e.call(l.prototype)}else{try{throw Error()}catch(f){t=f}e()}}catch(f){if(f&&t&&typeof f.stack=="string"){for(var n=f.stack.split(`
`),s=t.stack.split(`
`),a=n.length-1,o=s.length-1;1<=a&&0<=o&&n[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(n[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||n[a]!==s[o]){var i=`
`+n[a].replace(" at new "," at ");return e.displayName&&i.includes("<anonymous>")&&(i=i.replace("<anonymous>",e.displayName)),i}while(1<=a&&0<=o);break}}}finally{Wr=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Ql(e):""}function si(e){switch(e.tag){case 5:return Ql(e.type);case 16:return Ql("Lazy");case 13:return Ql("Suspense");case 19:return Ql("SuspenseList");case 0:case 2:case 15:return e=Gr(e.type,!1),e;case 11:return e=Gr(e.type.render,!1),e;case 1:return e=Gr(e.type,!0),e;default:return""}}function Zr(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B0:return"Fragment";case U0:return"Portal";case Ar:return"Profiler";case Or:return"StrictMode";case Ur:return"Suspense";case Br:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ps:return(e.displayName||"Context")+".Consumer";case vs:return(e._context.displayName||"Context")+".Provider";case $r:var l=e.render;return e=e.displayName,e||(e=l.displayName||l.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vr:return l=e.displayName||null,l!==null?l:Zr(e.type)||"Memo";case n0:l=e._payload,e=e._init;try{return Zr(e(l))}catch{}}return null}function ai(e){var l=e.type;switch(e.tag){case 24:return"Cache";case 9:return(l.displayName||"Context")+".Consumer";case 10:return(l._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=l.render,e=e.displayName||e.name||"",l.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return l;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zr(l);case 8:return l===Or?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l}return null}function s0(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ys(e){var l=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function oi(e){var l=ys(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,l),t=""+e[l];if(!e.hasOwnProperty(l)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var n=r.get,s=r.set;return Object.defineProperty(e,l,{configurable:!0,get:function(){return n.call(this)},set:function(a){t=""+a,s.call(this,a)}}),Object.defineProperty(e,l,{enumerable:r.enumerable}),{getValue:function(){return t},setValue:function(a){t=""+a},stopTracking:function(){e._valueTracker=null,delete e[l]}}}}function p1(e){e._valueTracker||(e._valueTracker=oi(e))}function gs(e){if(!e)return!1;var l=e._valueTracker;if(!l)return!0;var r=l.getValue(),t="";return e&&(t=ys(e)?e.checked?"true":"false":e.value),e=t,e!==r?(l.setValue(e),!0):!1}function k1(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Kr(e,l){var r=l.checked;return V({},l,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function ms(e,l){var r=l.defaultValue==null?"":l.defaultValue,t=l.checked!=null?l.checked:l.defaultChecked;r=s0(l.value!=null?l.value:r),e._wrapperState={initialChecked:t,initialValue:r,controlled:l.type==="checkbox"||l.type==="radio"?l.checked!=null:l.value!=null}}function Ls(e,l){l=l.checked,l!=null&&Dr(e,"checked",l,!1)}function Yr(e,l){Ls(e,l);var r=s0(l.value),t=l.type;if(r!=null)t==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}l.hasOwnProperty("value")?Xr(e,l.type,r):l.hasOwnProperty("defaultValue")&&Xr(e,l.type,s0(l.defaultValue)),l.checked==null&&l.defaultChecked!=null&&(e.defaultChecked=!!l.defaultChecked)}function ws(e,l,r){if(l.hasOwnProperty("value")||l.hasOwnProperty("defaultValue")){var t=l.type;if(!(t!=="submit"&&t!=="reset"||l.value!==void 0&&l.value!==null))return;l=""+e._wrapperState.initialValue,r||l===e.value||(e.value=l),e.defaultValue=l}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Xr(e,l,r){(l!=="number"||k1(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var yl=Array.isArray;function V0(e,l,r,t){if(e=e.options,l){l={};for(var n=0;n<r.length;n++)l["$"+r[n]]=!0;for(r=0;r<e.length;r++)n=l.hasOwnProperty("$"+e[r].value),e[r].selected!==n&&(e[r].selected=n),n&&t&&(e[r].defaultSelected=!0)}else{for(r=""+s0(r),l=null,n=0;n<e.length;n++){if(e[n].value===r){e[n].selected=!0,t&&(e[n].defaultSelected=!0);return}l!==null||e[n].disabled||(l=e[n])}l!==null&&(l.selected=!0)}}function qr(e,l){if(l.dangerouslySetInnerHTML!=null)throw Error(Q(91));return V({},l,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ms(e,l){var r=l.value;if(r==null){if(r=l.children,l=l.defaultValue,r!=null){if(l!=null)throw Error(Q(92));if(yl(r)){if(1<r.length)throw Error(Q(93));r=r[0]}l=r}l==null&&(l=""),r=l}e._wrapperState={initialValue:s0(r)}}function xs(e,l){var r=s0(l.value),t=s0(l.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),l.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),t!=null&&(e.defaultValue=""+t)}function Ss(e){var l=e.textContent;l===e._wrapperState.initialValue&&l!==""&&l!==null&&(e.value=l)}function Es(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jr(e,l){return e==null||e==="http://www.w3.org/1999/xhtml"?Es(l):e==="http://www.w3.org/2000/svg"&&l==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Q1,_s=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(l,r,t,n){MSApp.execUnsafeLocalFunction(function(){return e(l,r,t,n)})}:e}(function(e,l){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=l;else{for(Q1=Q1||document.createElement("div"),Q1.innerHTML="<svg>"+l.valueOf().toString()+"</svg>",l=Q1.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;l.firstChild;)e.appendChild(l.firstChild)}});function gl(e,l){if(l){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=l;return}}e.textContent=l}var ml={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ii=["Webkit","ms","Moz","O"];Object.keys(ml).forEach(function(e){ii.forEach(function(l){l=l+e.charAt(0).toUpperCase()+e.substring(1),ml[l]=ml[e]})});function Cs(e,l,r){return l==null||typeof l=="boolean"||l===""?"":r||typeof l!="number"||l===0||ml.hasOwnProperty(e)&&ml[e]?(""+l).trim():l+"px"}function Ts(e,l){e=e.style;for(var r in l)if(l.hasOwnProperty(r)){var t=r.indexOf("--")===0,n=Cs(r,l[r],t);r==="float"&&(r="cssFloat"),t?e.setProperty(r,n):e[r]=n}}var fi=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function br(e,l){if(l){if(fi[e]&&(l.children!=null||l.dangerouslySetInnerHTML!=null))throw Error(Q(137,e));if(l.dangerouslySetInnerHTML!=null){if(l.children!=null)throw Error(Q(60));if(typeof l.dangerouslySetInnerHTML!="object"||!("__html"in l.dangerouslySetInnerHTML))throw Error(Q(61))}if(l.style!=null&&typeof l.style!="object")throw Error(Q(62))}}function et(e,l){if(e.indexOf("-")===-1)return typeof l.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lt=null;function rt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tt=null,H0=null,W0=null;function Ps(e){if(e=Bl(e)){if(typeof tt!="function")throw Error(Q(280));var l=e.stateNode;l&&(l=$1(l),tt(e.stateNode,e.type,l))}}function zs(e){H0?W0?W0.push(e):W0=[e]:H0=e}function Ns(){if(H0){var e=H0,l=W0;if(W0=H0=null,Ps(e),l)for(e=0;e<l.length;e++)Ps(l[e])}}function Rs(e,l){return e(l)}function js(){}var nt=!1;function Is(e,l,r){if(nt)return e(l,r);nt=!0;try{return Rs(e,l,r)}finally{nt=!1,(H0!==null||W0!==null)&&(js(),Ns())}}function Ll(e,l){var r=e.stateNode;if(r===null)return null;var t=$1(r);if(t===null)return null;r=t[l];e:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(Q(231,l,typeof r));return r}var st=!1;if(Ke)try{var wl={};Object.defineProperty(wl,"passive",{get:function(){st=!0}}),window.addEventListener("test",wl,wl),window.removeEventListener("test",wl,wl)}catch{st=!1}function ui(e,l,r,t,n,s,a,o,i){var f=Array.prototype.slice.call(arguments,3);try{l.apply(r,f)}catch(d){this.onError(d)}}var Ml=!1,y1=null,g1=!1,at=null,hi={onError:function(e){Ml=!0,y1=e}};function ci(e,l,r,t,n,s,a,o,i){Ml=!1,y1=null,ui.apply(hi,arguments)}function di(e,l,r,t,n,s,a,o,i){if(ci.apply(this,arguments),Ml){if(Ml){var f=y1;Ml=!1,y1=null}else throw Error(Q(198));g1||(g1=!0,at=f)}}function E0(e){var l=e,r=e;if(e.alternate)for(;l.return;)l=l.return;else{e=l;do l=e,l.flags&4098&&(r=l.return),e=l.return;while(e)}return l.tag===3?r:null}function Fs(e){if(e.tag===13){var l=e.memoizedState;if(l===null&&(e=e.alternate,e!==null&&(l=e.memoizedState)),l!==null)return l.dehydrated}return null}function Ds(e){if(E0(e)!==e)throw Error(Q(188))}function vi(e){var l=e.alternate;if(!l){if(l=E0(e),l===null)throw Error(Q(188));return l!==e?null:e}for(var r=e,t=l;;){var n=r.return;if(n===null)break;var s=n.alternate;if(s===null){if(t=n.return,t!==null){r=t;continue}break}if(n.child===s.child){for(s=n.child;s;){if(s===r)return Ds(n),e;if(s===t)return Ds(n),l;s=s.sibling}throw Error(Q(188))}if(r.return!==t.return)r=n,t=s;else{for(var a=!1,o=n.child;o;){if(o===r){a=!0,r=n,t=s;break}if(o===t){a=!0,t=n,r=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===r){a=!0,r=s,t=n;break}if(o===t){a=!0,t=s,r=n;break}o=o.sibling}if(!a)throw Error(Q(189))}}if(r.alternate!==t)throw Error(Q(190))}if(r.tag!==3)throw Error(Q(188));return r.stateNode.current===r?e:l}function Os(e){return e=vi(e),e!==null?As(e):null}function As(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var l=As(e);if(l!==null)return l;e=e.sibling}return null}var $s=Le.unstable_scheduleCallback,Us=Le.unstable_cancelCallback,pi=Le.unstable_shouldYield,ki=Le.unstable_requestPaint,Z=Le.unstable_now,Qi=Le.unstable_getCurrentPriorityLevel,ot=Le.unstable_ImmediatePriority,Bs=Le.unstable_UserBlockingPriority,m1=Le.unstable_NormalPriority,yi=Le.unstable_LowPriority,Vs=Le.unstable_IdlePriority,L1=null,Ue=null;function gi(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(L1,e,void 0,(e.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:wi,mi=Math.log,Li=Math.LN2;function wi(e){return e>>>=0,e===0?32:31-(mi(e)/Li|0)|0}var w1=64,M1=4194304;function xl(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function x1(e,l){var r=e.pendingLanes;if(r===0)return 0;var t=0,n=e.suspendedLanes,s=e.pingedLanes,a=r&268435455;if(a!==0){var o=a&~n;o!==0?t=xl(o):(s&=a,s!==0&&(t=xl(s)))}else a=r&~n,a!==0?t=xl(a):s!==0&&(t=xl(s));if(t===0)return 0;if(l!==0&&l!==t&&!(l&n)&&(n=t&-t,s=l&-l,n>=s||n===16&&(s&4194240)!==0))return l;if(t&4&&(t|=r&16),l=e.entangledLanes,l!==0)for(e=e.entanglements,l&=t;0<l;)r=31-Re(l),n=1<<r,t|=e[r],l&=~n;return t}function Mi(e,l){switch(e){case 1:case 2:case 4:return l+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xi(e,l){for(var r=e.suspendedLanes,t=e.pingedLanes,n=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-Re(s),o=1<<a,i=n[a];i===-1?(!(o&r)||o&t)&&(n[a]=Mi(o,l)):i<=l&&(e.expiredLanes|=o),s&=~o}}function it(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hs(){var e=w1;return w1<<=1,!(w1&4194240)&&(w1=64),e}function ft(e){for(var l=[],r=0;31>r;r++)l.push(e);return l}function Sl(e,l,r){e.pendingLanes|=l,l!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,l=31-Re(l),e[l]=r}function Si(e,l){var r=e.pendingLanes&~l;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=l,e.mutableReadLanes&=l,e.entangledLanes&=l,l=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<r;){var n=31-Re(r),s=1<<n;l[n]=0,t[n]=-1,e[n]=-1,r&=~s}}function ut(e,l){var r=e.entangledLanes|=l;for(e=e.entanglements;r;){var t=31-Re(r),n=1<<t;n&l|e[t]&l&&(e[t]|=l),r&=~n}}var I=0;function Ws(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Gs,ht,Zs,Ks,Ys,ct=!1,S1=[],a0=null,o0=null,i0=null,El=new Map,_l=new Map,f0=[],Ei="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xs(e,l){switch(e){case"focusin":case"focusout":a0=null;break;case"dragenter":case"dragleave":o0=null;break;case"mouseover":case"mouseout":i0=null;break;case"pointerover":case"pointerout":El.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":_l.delete(l.pointerId)}}function Cl(e,l,r,t,n,s){return e===null||e.nativeEvent!==s?(e={blockedOn:l,domEventName:r,eventSystemFlags:t,nativeEvent:s,targetContainers:[n]},l!==null&&(l=Bl(l),l!==null&&ht(l)),e):(e.eventSystemFlags|=t,l=e.targetContainers,n!==null&&l.indexOf(n)===-1&&l.push(n),e)}function _i(e,l,r,t,n){switch(l){case"focusin":return a0=Cl(a0,e,l,r,t,n),!0;case"dragenter":return o0=Cl(o0,e,l,r,t,n),!0;case"mouseover":return i0=Cl(i0,e,l,r,t,n),!0;case"pointerover":var s=n.pointerId;return El.set(s,Cl(El.get(s)||null,e,l,r,t,n)),!0;case"gotpointercapture":return s=n.pointerId,_l.set(s,Cl(_l.get(s)||null,e,l,r,t,n)),!0}return!1}function qs(e){var l=_0(e.target);if(l!==null){var r=E0(l);if(r!==null){if(l=r.tag,l===13){if(l=Fs(r),l!==null){e.blockedOn=l,Ys(e.priority,function(){Zs(r)});return}}else if(l===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function E1(e){if(e.blockedOn!==null)return!1;for(var l=e.targetContainers;0<l.length;){var r=vt(e.domEventName,e.eventSystemFlags,l[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var t=new r.constructor(r.type,r);lt=t,r.target.dispatchEvent(t),lt=null}else return l=Bl(r),l!==null&&ht(l),e.blockedOn=r,!1;l.shift()}return!0}function Js(e,l,r){E1(e)&&r.delete(l)}function Ci(){ct=!1,a0!==null&&E1(a0)&&(a0=null),o0!==null&&E1(o0)&&(o0=null),i0!==null&&E1(i0)&&(i0=null),El.forEach(Js),_l.forEach(Js)}function Tl(e,l){e.blockedOn===l&&(e.blockedOn=null,ct||(ct=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,Ci)))}function Pl(e){function l(n){return Tl(n,e)}if(0<S1.length){Tl(S1[0],e);for(var r=1;r<S1.length;r++){var t=S1[r];t.blockedOn===e&&(t.blockedOn=null)}}for(a0!==null&&Tl(a0,e),o0!==null&&Tl(o0,e),i0!==null&&Tl(i0,e),El.forEach(l),_l.forEach(l),r=0;r<f0.length;r++)t=f0[r],t.blockedOn===e&&(t.blockedOn=null);for(;0<f0.length&&(r=f0[0],r.blockedOn===null);)qs(r),r.blockedOn===null&&f0.shift()}var G0=Ye.ReactCurrentBatchConfig,_1=!0;function Ti(e,l,r,t){var n=I,s=G0.transition;G0.transition=null;try{I=1,dt(e,l,r,t)}finally{I=n,G0.transition=s}}function Pi(e,l,r,t){var n=I,s=G0.transition;G0.transition=null;try{I=4,dt(e,l,r,t)}finally{I=n,G0.transition=s}}function dt(e,l,r,t){if(_1){var n=vt(e,l,r,t);if(n===null)zt(e,l,t,C1,r),Xs(e,t);else if(_i(n,e,l,r,t))t.stopPropagation();else if(Xs(e,t),l&4&&-1<Ei.indexOf(e)){for(;n!==null;){var s=Bl(n);if(s!==null&&Gs(s),s=vt(e,l,r,t),s===null&&zt(e,l,t,C1,r),s===n)break;n=s}n!==null&&t.stopPropagation()}else zt(e,l,t,null,r)}}var C1=null;function vt(e,l,r,t){if(C1=null,e=rt(t),e=_0(e),e!==null)if(l=E0(e),l===null)e=null;else if(r=l.tag,r===13){if(e=Fs(l),e!==null)return e;e=null}else if(r===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;e=null}else l!==e&&(e=null);return C1=e,null}function bs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qi()){case ot:return 1;case Bs:return 4;case m1:case yi:return 16;case Vs:return 536870912;default:return 16}default:return 16}}var u0=null,pt=null,T1=null;function e2(){if(T1)return T1;var e,l=pt,r=l.length,t,n="value"in u0?u0.value:u0.textContent,s=n.length;for(e=0;e<r&&l[e]===n[e];e++);var a=r-e;for(t=1;t<=a&&l[r-t]===n[s-t];t++);return T1=n.slice(e,1<t?1-t:void 0)}function P1(e){var l=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&l===13&&(e=13)):e=l,e===10&&(e=13),32<=e||e===13?e:0}function z1(){return!0}function l2(){return!1}function we(e){function l(r,t,n,s,a){this._reactName=r,this._targetInst=n,this.type=t,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?z1:l2,this.isPropagationStopped=l2,this}return V(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=z1)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=z1)},persist:function(){},isPersistent:z1}),l}var Z0={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kt=we(Z0),zl=V({},Z0,{view:0,detail:0}),zi=we(zl),Qt,yt,Nl,N1=V({},zl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mt,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nl&&(Nl&&e.type==="mousemove"?(Qt=e.screenX-Nl.screenX,yt=e.screenY-Nl.screenY):yt=Qt=0,Nl=e),Qt)},movementY:function(e){return"movementY"in e?e.movementY:yt}}),r2=we(N1),Ni=V({},N1,{dataTransfer:0}),Ri=we(Ni),ji=V({},zl,{relatedTarget:0}),gt=we(ji),Ii=V({},Z0,{animationName:0,elapsedTime:0,pseudoElement:0}),Fi=we(Ii),Di=V({},Z0,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Oi=we(Di),Ai=V({},Z0,{data:0}),t2=we(Ai),$i={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ui={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bi={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vi(e){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(e):(e=Bi[e])?!!l[e]:!1}function mt(){return Vi}var Hi=V({},zl,{key:function(e){if(e.key){var l=$i[e.key]||e.key;if(l!=="Unidentified")return l}return e.type==="keypress"?(e=P1(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ui[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mt,charCode:function(e){return e.type==="keypress"?P1(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?P1(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wi=we(Hi),Gi=V({},N1,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),n2=we(Gi),Zi=V({},zl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mt}),Ki=we(Zi),Yi=V({},Z0,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xi=we(Yi),qi=V({},N1,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ji=we(qi),bi=[9,13,27,32],Lt=Ke&&"CompositionEvent"in window,Rl=null;Ke&&"documentMode"in document&&(Rl=document.documentMode);var ef=Ke&&"TextEvent"in window&&!Rl,s2=Ke&&(!Lt||Rl&&8<Rl&&11>=Rl),a2=" ",o2=!1;function i2(e,l){switch(e){case"keyup":return bi.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function f2(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var K0=!1;function lf(e,l){switch(e){case"compositionend":return f2(l);case"keypress":return l.which!==32?null:(o2=!0,a2);case"textInput":return e=l.data,e===a2&&o2?null:e;default:return null}}function rf(e,l){if(K0)return e==="compositionend"||!Lt&&i2(e,l)?(e=e2(),T1=pt=u0=null,K0=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return s2&&l.locale!=="ko"?null:l.data;default:return null}}var tf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function u2(e){var l=e&&e.nodeName&&e.nodeName.toLowerCase();return l==="input"?!!tf[e.type]:l==="textarea"}function h2(e,l,r,t){zs(t),l=D1(l,"onChange"),0<l.length&&(r=new kt("onChange","change",null,r,t),e.push({event:r,listeners:l}))}var jl=null,Il=null;function nf(e){T2(e,0)}function R1(e){var l=b0(e);if(gs(l))return e}function sf(e,l){if(e==="change")return l}var c2=!1;if(Ke){var wt;if(Ke){var Mt="oninput"in document;if(!Mt){var d2=document.createElement("div");d2.setAttribute("oninput","return;"),Mt=typeof d2.oninput=="function"}wt=Mt}else wt=!1;c2=wt&&(!document.documentMode||9<document.documentMode)}function v2(){jl&&(jl.detachEvent("onpropertychange",p2),Il=jl=null)}function p2(e){if(e.propertyName==="value"&&R1(Il)){var l=[];h2(l,Il,e,rt(e)),Is(nf,l)}}function af(e,l,r){e==="focusin"?(v2(),jl=l,Il=r,jl.attachEvent("onpropertychange",p2)):e==="focusout"&&v2()}function of(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return R1(Il)}function ff(e,l){if(e==="click")return R1(l)}function uf(e,l){if(e==="input"||e==="change")return R1(l)}function hf(e,l){return e===l&&(e!==0||1/e===1/l)||e!==e&&l!==l}var je=typeof Object.is=="function"?Object.is:hf;function Fl(e,l){if(je(e,l))return!0;if(typeof e!="object"||e===null||typeof l!="object"||l===null)return!1;var r=Object.keys(e),t=Object.keys(l);if(r.length!==t.length)return!1;for(t=0;t<r.length;t++){var n=r[t];if(!jr.call(l,n)||!je(e[n],l[n]))return!1}return!0}function k2(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Q2(e,l){var r=k2(e);e=0;for(var t;r;){if(r.nodeType===3){if(t=e+r.textContent.length,e<=l&&t>=l)return{node:r,offset:l-e};e=t}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=k2(r)}}function y2(e,l){return e&&l?e===l?!0:e&&e.nodeType===3?!1:l&&l.nodeType===3?y2(e,l.parentNode):"contains"in e?e.contains(l):e.compareDocumentPosition?!!(e.compareDocumentPosition(l)&16):!1:!1}function g2(){for(var e=window,l=k1();l instanceof e.HTMLIFrameElement;){try{var r=typeof l.contentWindow.location.href=="string"}catch{r=!1}if(r)e=l.contentWindow;else break;l=k1(e.document)}return l}function xt(e){var l=e&&e.nodeName&&e.nodeName.toLowerCase();return l&&(l==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||l==="textarea"||e.contentEditable==="true")}function cf(e){var l=g2(),r=e.focusedElem,t=e.selectionRange;if(l!==r&&r&&r.ownerDocument&&y2(r.ownerDocument.documentElement,r)){if(t!==null&&xt(r)){if(l=t.start,e=t.end,e===void 0&&(e=l),"selectionStart"in r)r.selectionStart=l,r.selectionEnd=Math.min(e,r.value.length);else if(e=(l=r.ownerDocument||document)&&l.defaultView||window,e.getSelection){e=e.getSelection();var n=r.textContent.length,s=Math.min(t.start,n);t=t.end===void 0?s:Math.min(t.end,n),!e.extend&&s>t&&(n=t,t=s,s=n),n=Q2(r,s);var a=Q2(r,t);n&&a&&(e.rangeCount!==1||e.anchorNode!==n.node||e.anchorOffset!==n.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(l=l.createRange(),l.setStart(n.node,n.offset),e.removeAllRanges(),s>t?(e.addRange(l),e.extend(a.node,a.offset)):(l.setEnd(a.node,a.offset),e.addRange(l)))}}for(l=[],e=r;e=e.parentNode;)e.nodeType===1&&l.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<l.length;r++)e=l[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var df=Ke&&"documentMode"in document&&11>=document.documentMode,Y0=null,St=null,Dl=null,Et=!1;function m2(e,l,r){var t=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Et||Y0==null||Y0!==k1(t)||(t=Y0,"selectionStart"in t&&xt(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Dl&&Fl(Dl,t)||(Dl=t,t=D1(St,"onSelect"),0<t.length&&(l=new kt("onSelect","select",null,l,r),e.push({event:l,listeners:t}),l.target=Y0)))}function j1(e,l){var r={};return r[e.toLowerCase()]=l.toLowerCase(),r["Webkit"+e]="webkit"+l,r["Moz"+e]="moz"+l,r}var X0={animationend:j1("Animation","AnimationEnd"),animationiteration:j1("Animation","AnimationIteration"),animationstart:j1("Animation","AnimationStart"),transitionend:j1("Transition","TransitionEnd")},_t={},L2={};Ke&&(L2=document.createElement("div").style,"AnimationEvent"in window||(delete X0.animationend.animation,delete X0.animationiteration.animation,delete X0.animationstart.animation),"TransitionEvent"in window||delete X0.transitionend.transition);function I1(e){if(_t[e])return _t[e];if(!X0[e])return e;var l=X0[e],r;for(r in l)if(l.hasOwnProperty(r)&&r in L2)return _t[e]=l[r];return e}var w2=I1("animationend"),M2=I1("animationiteration"),x2=I1("animationstart"),S2=I1("transitionend"),E2=new Map,_2="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function h0(e,l){E2.set(e,l),S0(l,[e])}for(var Ct=0;Ct<_2.length;Ct++){var Tt=_2[Ct],vf=Tt.toLowerCase(),pf=Tt[0].toUpperCase()+Tt.slice(1);h0(vf,"on"+pf)}h0(w2,"onAnimationEnd"),h0(M2,"onAnimationIteration"),h0(x2,"onAnimationStart"),h0("dblclick","onDoubleClick"),h0("focusin","onFocus"),h0("focusout","onBlur"),h0(S2,"onTransitionEnd"),$0("onMouseEnter",["mouseout","mouseover"]),$0("onMouseLeave",["mouseout","mouseover"]),$0("onPointerEnter",["pointerout","pointerover"]),$0("onPointerLeave",["pointerout","pointerover"]),S0("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),S0("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),S0("onBeforeInput",["compositionend","keypress","textInput","paste"]),S0("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),S0("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),S0("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ol));function C2(e,l,r){var t=e.type||"unknown-event";e.currentTarget=r,di(t,l,void 0,e),e.currentTarget=null}function T2(e,l){l=(l&4)!==0;for(var r=0;r<e.length;r++){var t=e[r],n=t.event;t=t.listeners;e:{var s=void 0;if(l)for(var a=t.length-1;0<=a;a--){var o=t[a],i=o.instance,f=o.currentTarget;if(o=o.listener,i!==s&&n.isPropagationStopped())break e;C2(n,o,f),s=i}else for(a=0;a<t.length;a++){if(o=t[a],i=o.instance,f=o.currentTarget,o=o.listener,i!==s&&n.isPropagationStopped())break e;C2(n,o,f),s=i}}}if(g1)throw e=at,g1=!1,at=null,e}function A(e,l){var r=l[Dt];r===void 0&&(r=l[Dt]=new Set);var t=e+"__bubble";r.has(t)||(P2(l,e,2,!1),r.add(t))}function Pt(e,l,r){var t=0;l&&(t|=4),P2(r,e,t,l)}var F1="_reactListening"+Math.random().toString(36).slice(2);function Al(e){if(!e[F1]){e[F1]=!0,hs.forEach(function(r){r!=="selectionchange"&&(kf.has(r)||Pt(r,!1,e),Pt(r,!0,e))});var l=e.nodeType===9?e:e.ownerDocument;l===null||l[F1]||(l[F1]=!0,Pt("selectionchange",!1,l))}}function P2(e,l,r,t){switch(bs(l)){case 1:var n=Ti;break;case 4:n=Pi;break;default:n=dt}r=n.bind(null,l,r,e),n=void 0,!st||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(n=!0),t?n!==void 0?e.addEventListener(l,r,{capture:!0,passive:n}):e.addEventListener(l,r,!0):n!==void 0?e.addEventListener(l,r,{passive:n}):e.addEventListener(l,r,!1)}function zt(e,l,r,t,n){var s=t;if(!(l&1)&&!(l&2)&&t!==null)e:for(;;){if(t===null)return;var a=t.tag;if(a===3||a===4){var o=t.stateNode.containerInfo;if(o===n||o.nodeType===8&&o.parentNode===n)break;if(a===4)for(a=t.return;a!==null;){var i=a.tag;if((i===3||i===4)&&(i=a.stateNode.containerInfo,i===n||i.nodeType===8&&i.parentNode===n))return;a=a.return}for(;o!==null;){if(a=_0(o),a===null)return;if(i=a.tag,i===5||i===6){t=s=a;continue e}o=o.parentNode}}t=t.return}Is(function(){var f=s,d=rt(r),v=[];e:{var p=E2.get(e);if(p!==void 0){var y=kt,m=e;switch(e){case"keypress":if(P1(r)===0)break e;case"keydown":case"keyup":y=Wi;break;case"focusin":m="focus",y=gt;break;case"focusout":m="blur",y=gt;break;case"beforeblur":case"afterblur":y=gt;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=r2;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Ri;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Ki;break;case w2:case M2:case x2:y=Fi;break;case S2:y=Xi;break;case"scroll":y=zi;break;case"wheel":y=Ji;break;case"copy":case"cut":case"paste":y=Oi;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=n2}var g=(l&4)!==0,j=!g&&e==="scroll",h=g?p!==null?p+"Capture":null:p;g=[];for(var u=f,c;u!==null;){c=u;var k=c.stateNode;if(c.tag===5&&k!==null&&(c=k,h!==null&&(k=Ll(u,h),k!=null&&g.push($l(u,k,c)))),j)break;u=u.return}0<g.length&&(p=new y(p,m,null,r,d),v.push({event:p,listeners:g}))}}if(!(l&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&r!==lt&&(m=r.relatedTarget||r.fromElement)&&(_0(m)||m[Xe]))break e;if((y||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,y?(m=r.relatedTarget||r.toElement,y=f,m=m?_0(m):null,m!==null&&(j=E0(m),m!==j||m.tag!==5&&m.tag!==6)&&(m=null)):(y=null,m=f),y!==m)){if(g=r2,k="onMouseLeave",h="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(g=n2,k="onPointerLeave",h="onPointerEnter",u="pointer"),j=y==null?p:b0(y),c=m==null?p:b0(m),p=new g(k,u+"leave",y,r,d),p.target=j,p.relatedTarget=c,k=null,_0(d)===f&&(g=new g(h,u+"enter",m,r,d),g.target=c,g.relatedTarget=j,k=g),j=k,y&&m)l:{for(g=y,h=m,u=0,c=g;c;c=q0(c))u++;for(c=0,k=h;k;k=q0(k))c++;for(;0<u-c;)g=q0(g),u--;for(;0<c-u;)h=q0(h),c--;for(;u--;){if(g===h||h!==null&&g===h.alternate)break l;g=q0(g),h=q0(h)}g=null}else g=null;y!==null&&z2(v,p,y,g,!1),m!==null&&j!==null&&z2(v,j,m,g,!0)}}e:{if(p=f?b0(f):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var S=sf;else if(u2(p))if(c2)S=uf;else{S=of;var w=af}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=ff);if(S&&(S=S(e,f))){h2(v,S,r,d);break e}w&&w(e,p,f),e==="focusout"&&(w=p._wrapperState)&&w.controlled&&p.type==="number"&&Xr(p,"number",p.value)}switch(w=f?b0(f):window,e){case"focusin":(u2(w)||w.contentEditable==="true")&&(Y0=w,St=f,Dl=null);break;case"focusout":Dl=St=Y0=null;break;case"mousedown":Et=!0;break;case"contextmenu":case"mouseup":case"dragend":Et=!1,m2(v,r,d);break;case"selectionchange":if(df)break;case"keydown":case"keyup":m2(v,r,d)}var E;if(Lt)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else K0?i2(e,r)&&(L="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(L="onCompositionStart");L&&(s2&&r.locale!=="ko"&&(K0||L!=="onCompositionStart"?L==="onCompositionEnd"&&K0&&(E=e2()):(u0=d,pt="value"in u0?u0.value:u0.textContent,K0=!0)),w=D1(f,L),0<w.length&&(L=new t2(L,e,null,r,d),v.push({event:L,listeners:w}),E?L.data=E:(E=f2(r),E!==null&&(L.data=E)))),(E=ef?lf(e,r):rf(e,r))&&(f=D1(f,"onBeforeInput"),0<f.length&&(d=new t2("onBeforeInput","beforeinput",null,r,d),v.push({event:d,listeners:f}),d.data=E))}T2(v,l)})}function $l(e,l,r){return{instance:e,listener:l,currentTarget:r}}function D1(e,l){for(var r=l+"Capture",t=[];e!==null;){var n=e,s=n.stateNode;n.tag===5&&s!==null&&(n=s,s=Ll(e,r),s!=null&&t.unshift($l(e,s,n)),s=Ll(e,l),s!=null&&t.push($l(e,s,n))),e=e.return}return t}function q0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function z2(e,l,r,t,n){for(var s=l._reactName,a=[];r!==null&&r!==t;){var o=r,i=o.alternate,f=o.stateNode;if(i!==null&&i===t)break;o.tag===5&&f!==null&&(o=f,n?(i=Ll(r,s),i!=null&&a.unshift($l(r,i,o))):n||(i=Ll(r,s),i!=null&&a.push($l(r,i,o)))),r=r.return}a.length!==0&&e.push({event:l,listeners:a})}var Qf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function N2(e){return(typeof e=="string"?e:""+e).replace(Qf,`
`).replace(yf,"")}function O1(e,l,r){if(l=N2(l),N2(e)!==l&&r)throw Error(Q(425))}function A1(){}var Nt=null,Rt=null;function jt(e,l){return e==="textarea"||e==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var It=typeof setTimeout=="function"?setTimeout:void 0,gf=typeof clearTimeout=="function"?clearTimeout:void 0,R2=typeof Promise=="function"?Promise:void 0,mf=typeof queueMicrotask=="function"?queueMicrotask:typeof R2<"u"?function(e){return R2.resolve(null).then(e).catch(Lf)}:It;function Lf(e){setTimeout(function(){throw e})}function Ft(e,l){var r=l,t=0;do{var n=r.nextSibling;if(e.removeChild(r),n&&n.nodeType===8)if(r=n.data,r==="/$"){if(t===0){e.removeChild(n),Pl(l);return}t--}else r!=="$"&&r!=="$?"&&r!=="$!"||t++;r=n}while(r);Pl(l)}function c0(e){for(;e!=null;e=e.nextSibling){var l=e.nodeType;if(l===1||l===3)break;if(l===8){if(l=e.data,l==="$"||l==="$!"||l==="$?")break;if(l==="/$")return null}}return e}function j2(e){e=e.previousSibling;for(var l=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(l===0)return e;l--}else r==="/$"&&l++}e=e.previousSibling}return null}var J0=Math.random().toString(36).slice(2),Be="__reactFiber$"+J0,Ul="__reactProps$"+J0,Xe="__reactContainer$"+J0,Dt="__reactEvents$"+J0,wf="__reactListeners$"+J0,Mf="__reactHandles$"+J0;function _0(e){var l=e[Be];if(l)return l;for(var r=e.parentNode;r;){if(l=r[Xe]||r[Be]){if(r=l.alternate,l.child!==null||r!==null&&r.child!==null)for(e=j2(e);e!==null;){if(r=e[Be])return r;e=j2(e)}return l}e=r,r=e.parentNode}return null}function Bl(e){return e=e[Be]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function b0(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Q(33))}function $1(e){return e[Ul]||null}var Ot=[],el=-1;function d0(e){return{current:e}}function $(e){0>el||(e.current=Ot[el],Ot[el]=null,el--)}function O(e,l){el++,Ot[el]=e.current,e.current=l}var v0={},ne=d0(v0),ve=d0(!1),C0=v0;function ll(e,l){var r=e.type.contextTypes;if(!r)return v0;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===l)return t.__reactInternalMemoizedMaskedChildContext;var n={},s;for(s in r)n[s]=l[s];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=n),n}function pe(e){return e=e.childContextTypes,e!=null}function U1(){$(ve),$(ne)}function I2(e,l,r){if(ne.current!==v0)throw Error(Q(168));O(ne,l),O(ve,r)}function F2(e,l,r){var t=e.stateNode;if(l=l.childContextTypes,typeof t.getChildContext!="function")return r;t=t.getChildContext();for(var n in t)if(!(n in l))throw Error(Q(108,ai(e)||"Unknown",n));return V({},r,t)}function B1(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||v0,C0=ne.current,O(ne,e),O(ve,ve.current),!0}function D2(e,l,r){var t=e.stateNode;if(!t)throw Error(Q(169));r?(e=F2(e,l,C0),t.__reactInternalMemoizedMergedChildContext=e,$(ve),$(ne),O(ne,e)):$(ve),O(ve,r)}var qe=null,V1=!1,At=!1;function O2(e){qe===null?qe=[e]:qe.push(e)}function xf(e){V1=!0,O2(e)}function p0(){if(!At&&qe!==null){At=!0;var e=0,l=I;try{var r=qe;for(I=1;e<r.length;e++){var t=r[e];do t=t(!0);while(t!==null)}qe=null,V1=!1}catch(n){throw qe!==null&&(qe=qe.slice(e+1)),$s(ot,p0),n}finally{I=l,At=!1}}return null}var rl=[],tl=0,H1=null,W1=0,_e=[],Ce=0,T0=null,Je=1,be="";function P0(e,l){rl[tl++]=W1,rl[tl++]=H1,H1=e,W1=l}function A2(e,l,r){_e[Ce++]=Je,_e[Ce++]=be,_e[Ce++]=T0,T0=e;var t=Je;e=be;var n=32-Re(t)-1;t&=~(1<<n),r+=1;var s=32-Re(l)+n;if(30<s){var a=n-n%5;s=(t&(1<<a)-1).toString(32),t>>=a,n-=a,Je=1<<32-Re(l)+n|r<<n|t,be=s+e}else Je=1<<s|r<<n|t,be=e}function $t(e){e.return!==null&&(P0(e,1),A2(e,1,0))}function Ut(e){for(;e===H1;)H1=rl[--tl],rl[tl]=null,W1=rl[--tl],rl[tl]=null;for(;e===T0;)T0=_e[--Ce],_e[Ce]=null,be=_e[--Ce],_e[Ce]=null,Je=_e[--Ce],_e[Ce]=null}var Me=null,xe=null,B=!1,Ie=null;function $2(e,l){var r=Ne(5,null,null,0);r.elementType="DELETED",r.stateNode=l,r.return=e,l=e.deletions,l===null?(e.deletions=[r],e.flags|=16):l.push(r)}function U2(e,l){switch(e.tag){case 5:var r=e.type;return l=l.nodeType!==1||r.toLowerCase()!==l.nodeName.toLowerCase()?null:l,l!==null?(e.stateNode=l,Me=e,xe=c0(l.firstChild),!0):!1;case 6:return l=e.pendingProps===""||l.nodeType!==3?null:l,l!==null?(e.stateNode=l,Me=e,xe=null,!0):!1;case 13:return l=l.nodeType!==8?null:l,l!==null?(r=T0!==null?{id:Je,overflow:be}:null,e.memoizedState={dehydrated:l,treeContext:r,retryLane:1073741824},r=Ne(18,null,null,0),r.stateNode=l,r.return=e,e.child=r,Me=e,xe=null,!0):!1;default:return!1}}function Bt(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vt(e){if(B){var l=xe;if(l){var r=l;if(!U2(e,l)){if(Bt(e))throw Error(Q(418));l=c0(r.nextSibling);var t=Me;l&&U2(e,l)?$2(t,r):(e.flags=e.flags&-4097|2,B=!1,Me=e)}}else{if(Bt(e))throw Error(Q(418));e.flags=e.flags&-4097|2,B=!1,Me=e}}}function B2(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Me=e}function G1(e){if(e!==Me)return!1;if(!B)return B2(e),B=!0,!1;var l;if((l=e.tag!==3)&&!(l=e.tag!==5)&&(l=e.type,l=l!=="head"&&l!=="body"&&!jt(e.type,e.memoizedProps)),l&&(l=xe)){if(Bt(e))throw V2(),Error(Q(418));for(;l;)$2(e,l),l=c0(l.nextSibling)}if(B2(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));e:{for(e=e.nextSibling,l=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(l===0){xe=c0(e.nextSibling);break e}l--}else r!=="$"&&r!=="$!"&&r!=="$?"||l++}e=e.nextSibling}xe=null}}else xe=Me?c0(e.stateNode.nextSibling):null;return!0}function V2(){for(var e=xe;e;)e=c0(e.nextSibling)}function nl(){xe=Me=null,B=!1}function Ht(e){Ie===null?Ie=[e]:Ie.push(e)}var Sf=Ye.ReactCurrentBatchConfig;function Vl(e,l,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(Q(309));var t=r.stateNode}if(!t)throw Error(Q(147,e));var n=t,s=""+e;return l!==null&&l.ref!==null&&typeof l.ref=="function"&&l.ref._stringRef===s?l.ref:(l=function(a){var o=n.refs;a===null?delete o[s]:o[s]=a},l._stringRef=s,l)}if(typeof e!="string")throw Error(Q(284));if(!r._owner)throw Error(Q(290,e))}return e}function Z1(e,l){throw e=Object.prototype.toString.call(l),Error(Q(31,e==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":e))}function H2(e){var l=e._init;return l(e._payload)}function W2(e){function l(h,u){if(e){var c=h.deletions;c===null?(h.deletions=[u],h.flags|=16):c.push(u)}}function r(h,u){if(!e)return null;for(;u!==null;)l(h,u),u=u.sibling;return null}function t(h,u){for(h=new Map;u!==null;)u.key!==null?h.set(u.key,u):h.set(u.index,u),u=u.sibling;return h}function n(h,u){return h=M0(h,u),h.index=0,h.sibling=null,h}function s(h,u,c){return h.index=c,e?(c=h.alternate,c!==null?(c=c.index,c<u?(h.flags|=2,u):c):(h.flags|=2,u)):(h.flags|=1048576,u)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function o(h,u,c,k){return u===null||u.tag!==6?(u=Fn(c,h.mode,k),u.return=h,u):(u=n(u,c),u.return=h,u)}function i(h,u,c,k){var S=c.type;return S===B0?d(h,u,c.props.children,k,c.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===n0&&H2(S)===u.type)?(k=n(u,c.props),k.ref=Vl(h,u,c),k.return=h,k):(k=Qr(c.type,c.key,c.props,null,h.mode,k),k.ref=Vl(h,u,c),k.return=h,k)}function f(h,u,c,k){return u===null||u.tag!==4||u.stateNode.containerInfo!==c.containerInfo||u.stateNode.implementation!==c.implementation?(u=Dn(c,h.mode,k),u.return=h,u):(u=n(u,c.children||[]),u.return=h,u)}function d(h,u,c,k,S){return u===null||u.tag!==7?(u=O0(c,h.mode,k,S),u.return=h,u):(u=n(u,c),u.return=h,u)}function v(h,u,c){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Fn(""+u,h.mode,c),u.return=h,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case v1:return c=Qr(u.type,u.key,u.props,null,h.mode,c),c.ref=Vl(h,null,u),c.return=h,c;case U0:return u=Dn(u,h.mode,c),u.return=h,u;case n0:var k=u._init;return v(h,k(u._payload),c)}if(yl(u)||kl(u))return u=O0(u,h.mode,c,null),u.return=h,u;Z1(h,u)}return null}function p(h,u,c,k){var S=u!==null?u.key:null;if(typeof c=="string"&&c!==""||typeof c=="number")return S!==null?null:o(h,u,""+c,k);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case v1:return c.key===S?i(h,u,c,k):null;case U0:return c.key===S?f(h,u,c,k):null;case n0:return S=c._init,p(h,u,S(c._payload),k)}if(yl(c)||kl(c))return S!==null?null:d(h,u,c,k,null);Z1(h,c)}return null}function y(h,u,c,k,S){if(typeof k=="string"&&k!==""||typeof k=="number")return h=h.get(c)||null,o(u,h,""+k,S);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case v1:return h=h.get(k.key===null?c:k.key)||null,i(u,h,k,S);case U0:return h=h.get(k.key===null?c:k.key)||null,f(u,h,k,S);case n0:var w=k._init;return y(h,u,c,w(k._payload),S)}if(yl(k)||kl(k))return h=h.get(c)||null,d(u,h,k,S,null);Z1(u,k)}return null}function m(h,u,c,k){for(var S=null,w=null,E=u,L=u=0,D=null;E!==null&&L<c.length;L++){E.index>L?(D=E,E=null):D=E.sibling;var C=p(h,E,c[L],k);if(C===null){E===null&&(E=D);break}e&&E&&C.alternate===null&&l(h,E),u=s(C,u,L),w===null?S=C:w.sibling=C,w=C,E=D}if(L===c.length)return r(h,E),B&&P0(h,L),S;if(E===null){for(;L<c.length;L++)E=v(h,c[L],k),E!==null&&(u=s(E,u,L),w===null?S=E:w.sibling=E,w=E);return B&&P0(h,L),S}for(E=t(h,E);L<c.length;L++)D=y(E,h,L,c[L],k),D!==null&&(e&&D.alternate!==null&&E.delete(D.key===null?L:D.key),u=s(D,u,L),w===null?S=D:w.sibling=D,w=D);return e&&E.forEach(function(ge){return l(h,ge)}),B&&P0(h,L),S}function g(h,u,c,k){var S=kl(c);if(typeof S!="function")throw Error(Q(150));if(c=S.call(c),c==null)throw Error(Q(151));for(var w=S=null,E=u,L=u=0,D=null,C=c.next();E!==null&&!C.done;L++,C=c.next()){E.index>L?(D=E,E=null):D=E.sibling;var ge=p(h,E,C.value,k);if(ge===null){E===null&&(E=D);break}e&&E&&ge.alternate===null&&l(h,E),u=s(ge,u,L),w===null?S=ge:w.sibling=ge,w=ge,E=D}if(C.done)return r(h,E),B&&P0(h,L),S;if(E===null){for(;!C.done;L++,C=c.next())C=v(h,C.value,k),C!==null&&(u=s(C,u,L),w===null?S=C:w.sibling=C,w=C);return B&&P0(h,L),S}for(E=t(h,E);!C.done;L++,C=c.next())C=y(E,h,L,C.value,k),C!==null&&(e&&C.alternate!==null&&E.delete(C.key===null?L:C.key),u=s(C,u,L),w===null?S=C:w.sibling=C,w=C);return e&&E.forEach(function($e){return l(h,$e)}),B&&P0(h,L),S}function j(h,u,c,k){if(typeof c=="object"&&c!==null&&c.type===B0&&c.key===null&&(c=c.props.children),typeof c=="object"&&c!==null){switch(c.$$typeof){case v1:e:{for(var S=c.key,w=u;w!==null;){if(w.key===S){if(S=c.type,S===B0){if(w.tag===7){r(h,w.sibling),u=n(w,c.props.children),u.return=h,h=u;break e}}else if(w.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===n0&&H2(S)===w.type){r(h,w.sibling),u=n(w,c.props),u.ref=Vl(h,w,c),u.return=h,h=u;break e}r(h,w);break}else l(h,w);w=w.sibling}c.type===B0?(u=O0(c.props.children,h.mode,k,c.key),u.return=h,h=u):(k=Qr(c.type,c.key,c.props,null,h.mode,k),k.ref=Vl(h,u,c),k.return=h,h=k)}return a(h);case U0:e:{for(w=c.key;u!==null;){if(u.key===w)if(u.tag===4&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){r(h,u.sibling),u=n(u,c.children||[]),u.return=h,h=u;break e}else{r(h,u);break}else l(h,u);u=u.sibling}u=Dn(c,h.mode,k),u.return=h,h=u}return a(h);case n0:return w=c._init,j(h,u,w(c._payload),k)}if(yl(c))return m(h,u,c,k);if(kl(c))return g(h,u,c,k);Z1(h,c)}return typeof c=="string"&&c!==""||typeof c=="number"?(c=""+c,u!==null&&u.tag===6?(r(h,u.sibling),u=n(u,c),u.return=h,h=u):(r(h,u),u=Fn(c,h.mode,k),u.return=h,h=u),a(h)):r(h,u)}return j}var sl=W2(!0),G2=W2(!1),K1=d0(null),Y1=null,al=null,Wt=null;function Gt(){Wt=al=Y1=null}function Zt(e){var l=K1.current;$(K1),e._currentValue=l}function Kt(e,l,r){for(;e!==null;){var t=e.alternate;if((e.childLanes&l)!==l?(e.childLanes|=l,t!==null&&(t.childLanes|=l)):t!==null&&(t.childLanes&l)!==l&&(t.childLanes|=l),e===r)break;e=e.return}}function ol(e,l){Y1=e,Wt=al=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&l&&(ke=!0),e.firstContext=null)}function Te(e){var l=e._currentValue;if(Wt!==e)if(e={context:e,memoizedValue:l,next:null},al===null){if(Y1===null)throw Error(Q(308));al=e,Y1.dependencies={lanes:0,firstContext:e}}else al=al.next=e;return l}var z0=null;function Yt(e){z0===null?z0=[e]:z0.push(e)}function Z2(e,l,r,t){var n=l.interleaved;return n===null?(r.next=r,Yt(l)):(r.next=n.next,n.next=r),l.interleaved=r,e0(e,t)}function e0(e,l){e.lanes|=l;var r=e.alternate;for(r!==null&&(r.lanes|=l),r=e,e=e.return;e!==null;)e.childLanes|=l,r=e.alternate,r!==null&&(r.childLanes|=l),r=e,e=e.return;return r.tag===3?r.stateNode:null}var k0=!1;function Xt(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function K2(e,l){e=e.updateQueue,l.updateQueue===e&&(l.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function l0(e,l){return{eventTime:e,lane:l,tag:0,payload:null,callback:null,next:null}}function Q0(e,l,r){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,R&2){var n=t.pending;return n===null?l.next=l:(l.next=n.next,n.next=l),t.pending=l,e0(e,r)}return n=t.interleaved,n===null?(l.next=l,Yt(t)):(l.next=n.next,n.next=l),t.interleaved=l,e0(e,r)}function X1(e,l,r){if(l=l.updateQueue,l!==null&&(l=l.shared,(r&4194240)!==0)){var t=l.lanes;t&=e.pendingLanes,r|=t,l.lanes=r,ut(e,r)}}function Y2(e,l){var r=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,r===t)){var n=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?n=s=a:s=s.next=a,r=r.next}while(r!==null);s===null?n=s=l:s=s.next=l}else n=s=l;r={baseState:t.baseState,firstBaseUpdate:n,lastBaseUpdate:s,shared:t.shared,effects:t.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=l:e.next=l,r.lastBaseUpdate=l}function q1(e,l,r,t){var n=e.updateQueue;k0=!1;var s=n.firstBaseUpdate,a=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var i=o,f=i.next;i.next=null,a===null?s=f:a.next=f,a=i;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=f:o.next=f,d.lastBaseUpdate=i))}if(s!==null){var v=n.baseState;a=0,d=f=i=null,o=s;do{var p=o.lane,y=o.eventTime;if((t&p)===p){d!==null&&(d=d.next={eventTime:y,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var m=e,g=o;switch(p=l,y=r,g.tag){case 1:if(m=g.payload,typeof m=="function"){v=m.call(y,v,p);break e}v=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,p=typeof m=="function"?m.call(y,v,p):m,p==null)break e;v=V({},v,p);break e;case 2:k0=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,p=n.effects,p===null?n.effects=[o]:p.push(o))}else y={eventTime:y,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(f=d=y,i=v):d=d.next=y,a|=p;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;p=o,o=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);if(d===null&&(i=v),n.baseState=i,n.firstBaseUpdate=f,n.lastBaseUpdate=d,l=n.shared.interleaved,l!==null){n=l;do a|=n.lane,n=n.next;while(n!==l)}else s===null&&(n.shared.lanes=0);j0|=a,e.lanes=a,e.memoizedState=v}}function X2(e,l,r){if(e=l.effects,l.effects=null,e!==null)for(l=0;l<e.length;l++){var t=e[l],n=t.callback;if(n!==null){if(t.callback=null,t=r,typeof n!="function")throw Error(Q(191,n));n.call(t)}}}var Hl={},Ve=d0(Hl),Wl=d0(Hl),Gl=d0(Hl);function N0(e){if(e===Hl)throw Error(Q(174));return e}function qt(e,l){switch(O(Gl,l),O(Wl,e),O(Ve,Hl),e=l.nodeType,e){case 9:case 11:l=(l=l.documentElement)?l.namespaceURI:Jr(null,"");break;default:e=e===8?l.parentNode:l,l=e.namespaceURI||null,e=e.tagName,l=Jr(l,e)}$(Ve),O(Ve,l)}function il(){$(Ve),$(Wl),$(Gl)}function q2(e){N0(Gl.current);var l=N0(Ve.current),r=Jr(l,e.type);l!==r&&(O(Wl,e),O(Ve,r))}function Jt(e){Wl.current===e&&($(Ve),$(Wl))}var H=d0(0);function J1(e){for(var l=e;l!==null;){if(l.tag===13){var r=l.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return l}else if(l.tag===19&&l.memoizedProps.revealOrder!==void 0){if(l.flags&128)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break;for(;l.sibling===null;){if(l.return===null||l.return===e)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var bt=[];function en(){for(var e=0;e<bt.length;e++)bt[e]._workInProgressVersionPrimary=null;bt.length=0}var b1=Ye.ReactCurrentDispatcher,ln=Ye.ReactCurrentBatchConfig,R0=0,W=null,Y=null,b=null,er=!1,Zl=!1,Kl=0,Ef=0;function se(){throw Error(Q(321))}function rn(e,l){if(l===null)return!1;for(var r=0;r<l.length&&r<e.length;r++)if(!je(e[r],l[r]))return!1;return!0}function tn(e,l,r,t,n,s){if(R0=s,W=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,b1.current=e===null||e.memoizedState===null?Pf:zf,e=r(t,n),Zl){s=0;do{if(Zl=!1,Kl=0,25<=s)throw Error(Q(301));s+=1,b=Y=null,l.updateQueue=null,b1.current=Nf,e=r(t,n)}while(Zl)}if(b1.current=tr,l=Y!==null&&Y.next!==null,R0=0,b=Y=W=null,er=!1,l)throw Error(Q(300));return e}function nn(){var e=Kl!==0;return Kl=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return b===null?W.memoizedState=b=e:b=b.next=e,b}function Pe(){if(Y===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var l=b===null?W.memoizedState:b.next;if(l!==null)b=l,Y=e;else{if(e===null)throw Error(Q(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},b===null?W.memoizedState=b=e:b=b.next=e}return b}function Yl(e,l){return typeof l=="function"?l(e):l}function sn(e){var l=Pe(),r=l.queue;if(r===null)throw Error(Q(311));r.lastRenderedReducer=e;var t=Y,n=t.baseQueue,s=r.pending;if(s!==null){if(n!==null){var a=n.next;n.next=s.next,s.next=a}t.baseQueue=n=s,r.pending=null}if(n!==null){s=n.next,t=t.baseState;var o=a=null,i=null,f=s;do{var d=f.lane;if((R0&d)===d)i!==null&&(i=i.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),t=f.hasEagerState?f.eagerState:e(t,f.action);else{var v={lane:d,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};i===null?(o=i=v,a=t):i=i.next=v,W.lanes|=d,j0|=d}f=f.next}while(f!==null&&f!==s);i===null?a=t:i.next=o,je(t,l.memoizedState)||(ke=!0),l.memoizedState=t,l.baseState=a,l.baseQueue=i,r.lastRenderedState=t}if(e=r.interleaved,e!==null){n=e;do s=n.lane,W.lanes|=s,j0|=s,n=n.next;while(n!==e)}else n===null&&(r.lanes=0);return[l.memoizedState,r.dispatch]}function an(e){var l=Pe(),r=l.queue;if(r===null)throw Error(Q(311));r.lastRenderedReducer=e;var t=r.dispatch,n=r.pending,s=l.memoizedState;if(n!==null){r.pending=null;var a=n=n.next;do s=e(s,a.action),a=a.next;while(a!==n);je(s,l.memoizedState)||(ke=!0),l.memoizedState=s,l.baseQueue===null&&(l.baseState=s),r.lastRenderedState=s}return[s,t]}function J2(){}function b2(e,l){var r=W,t=Pe(),n=l(),s=!je(t.memoizedState,n);if(s&&(t.memoizedState=n,ke=!0),t=t.queue,on(ra.bind(null,r,t,e),[e]),t.getSnapshot!==l||s||b!==null&&b.memoizedState.tag&1){if(r.flags|=2048,Xl(9,la.bind(null,r,t,n,l),void 0,null),ee===null)throw Error(Q(349));R0&30||ea(r,l,n)}return n}function ea(e,l,r){e.flags|=16384,e={getSnapshot:l,value:r},l=W.updateQueue,l===null?(l={lastEffect:null,stores:null},W.updateQueue=l,l.stores=[e]):(r=l.stores,r===null?l.stores=[e]:r.push(e))}function la(e,l,r,t){l.value=r,l.getSnapshot=t,ta(l)&&na(e)}function ra(e,l,r){return r(function(){ta(l)&&na(e)})}function ta(e){var l=e.getSnapshot;e=e.value;try{var r=l();return!je(e,r)}catch{return!0}}function na(e){var l=e0(e,1);l!==null&&Ae(l,e,1,-1)}function sa(e){var l=He();return typeof e=="function"&&(e=e()),l.memoizedState=l.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yl,lastRenderedState:e},l.queue=e,e=e.dispatch=Tf.bind(null,W,e),[l.memoizedState,e]}function Xl(e,l,r,t){return e={tag:e,create:l,destroy:r,deps:t,next:null},l=W.updateQueue,l===null?(l={lastEffect:null,stores:null},W.updateQueue=l,l.lastEffect=e.next=e):(r=l.lastEffect,r===null?l.lastEffect=e.next=e:(t=r.next,r.next=e,e.next=t,l.lastEffect=e)),e}function aa(){return Pe().memoizedState}function lr(e,l,r,t){var n=He();W.flags|=e,n.memoizedState=Xl(1|l,r,void 0,t===void 0?null:t)}function rr(e,l,r,t){var n=Pe();t=t===void 0?null:t;var s=void 0;if(Y!==null){var a=Y.memoizedState;if(s=a.destroy,t!==null&&rn(t,a.deps)){n.memoizedState=Xl(l,r,s,t);return}}W.flags|=e,n.memoizedState=Xl(1|l,r,s,t)}function oa(e,l){return lr(8390656,8,e,l)}function on(e,l){return rr(2048,8,e,l)}function ia(e,l){return rr(4,2,e,l)}function fa(e,l){return rr(4,4,e,l)}function ua(e,l){if(typeof l=="function")return e=e(),l(e),function(){l(null)};if(l!=null)return e=e(),l.current=e,function(){l.current=null}}function ha(e,l,r){return r=r!=null?r.concat([e]):null,rr(4,4,ua.bind(null,l,e),r)}function fn(){}function ca(e,l){var r=Pe();l=l===void 0?null:l;var t=r.memoizedState;return t!==null&&l!==null&&rn(l,t[1])?t[0]:(r.memoizedState=[e,l],e)}function da(e,l){var r=Pe();l=l===void 0?null:l;var t=r.memoizedState;return t!==null&&l!==null&&rn(l,t[1])?t[0]:(e=e(),r.memoizedState=[e,l],e)}function va(e,l,r){return R0&21?(je(r,l)||(r=Hs(),W.lanes|=r,j0|=r,e.baseState=!0),l):(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=r)}function _f(e,l){var r=I;I=r!==0&&4>r?r:4,e(!0);var t=ln.transition;ln.transition={};try{e(!1),l()}finally{I=r,ln.transition=t}}function pa(){return Pe().memoizedState}function Cf(e,l,r){var t=L0(e);if(r={lane:t,action:r,hasEagerState:!1,eagerState:null,next:null},ka(e))Qa(l,r);else if(r=Z2(e,l,r,t),r!==null){var n=de();Ae(r,e,t,n),ya(r,l,t)}}function Tf(e,l,r){var t=L0(e),n={lane:t,action:r,hasEagerState:!1,eagerState:null,next:null};if(ka(e))Qa(l,n);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=l.lastRenderedReducer,s!==null))try{var a=l.lastRenderedState,o=s(a,r);if(n.hasEagerState=!0,n.eagerState=o,je(o,a)){var i=l.interleaved;i===null?(n.next=n,Yt(l)):(n.next=i.next,i.next=n),l.interleaved=n;return}}catch{}finally{}r=Z2(e,l,n,t),r!==null&&(n=de(),Ae(r,e,t,n),ya(r,l,t))}}function ka(e){var l=e.alternate;return e===W||l!==null&&l===W}function Qa(e,l){Zl=er=!0;var r=e.pending;r===null?l.next=l:(l.next=r.next,r.next=l),e.pending=l}function ya(e,l,r){if(r&4194240){var t=l.lanes;t&=e.pendingLanes,r|=t,l.lanes=r,ut(e,r)}}var tr={readContext:Te,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},Pf={readContext:Te,useCallback:function(e,l){return He().memoizedState=[e,l===void 0?null:l],e},useContext:Te,useEffect:oa,useImperativeHandle:function(e,l,r){return r=r!=null?r.concat([e]):null,lr(4194308,4,ua.bind(null,l,e),r)},useLayoutEffect:function(e,l){return lr(4194308,4,e,l)},useInsertionEffect:function(e,l){return lr(4,2,e,l)},useMemo:function(e,l){var r=He();return l=l===void 0?null:l,e=e(),r.memoizedState=[e,l],e},useReducer:function(e,l,r){var t=He();return l=r!==void 0?r(l):l,t.memoizedState=t.baseState=l,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},t.queue=e,e=e.dispatch=Cf.bind(null,W,e),[t.memoizedState,e]},useRef:function(e){var l=He();return e={current:e},l.memoizedState=e},useState:sa,useDebugValue:fn,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=sa(!1),l=e[0];return e=_f.bind(null,e[1]),He().memoizedState=e,[l,e]},useMutableSource:function(){},useSyncExternalStore:function(e,l,r){var t=W,n=He();if(B){if(r===void 0)throw Error(Q(407));r=r()}else{if(r=l(),ee===null)throw Error(Q(349));R0&30||ea(t,l,r)}n.memoizedState=r;var s={value:r,getSnapshot:l};return n.queue=s,oa(ra.bind(null,t,s,e),[e]),t.flags|=2048,Xl(9,la.bind(null,t,s,r,l),void 0,null),r},useId:function(){var e=He(),l=ee.identifierPrefix;if(B){var r=be,t=Je;r=(t&~(1<<32-Re(t)-1)).toString(32)+r,l=":"+l+"R"+r,r=Kl++,0<r&&(l+="H"+r.toString(32)),l+=":"}else r=Ef++,l=":"+l+"r"+r.toString(32)+":";return e.memoizedState=l},unstable_isNewReconciler:!1},zf={readContext:Te,useCallback:ca,useContext:Te,useEffect:on,useImperativeHandle:ha,useInsertionEffect:ia,useLayoutEffect:fa,useMemo:da,useReducer:sn,useRef:aa,useState:function(){return sn(Yl)},useDebugValue:fn,useDeferredValue:function(e){var l=Pe();return va(l,Y.memoizedState,e)},useTransition:function(){var e=sn(Yl)[0],l=Pe().memoizedState;return[e,l]},useMutableSource:J2,useSyncExternalStore:b2,useId:pa,unstable_isNewReconciler:!1},Nf={readContext:Te,useCallback:ca,useContext:Te,useEffect:on,useImperativeHandle:ha,useInsertionEffect:ia,useLayoutEffect:fa,useMemo:da,useReducer:an,useRef:aa,useState:function(){return an(Yl)},useDebugValue:fn,useDeferredValue:function(e){var l=Pe();return Y===null?l.memoizedState=e:va(l,Y.memoizedState,e)},useTransition:function(){var e=an(Yl)[0],l=Pe().memoizedState;return[e,l]},useMutableSource:J2,useSyncExternalStore:b2,useId:pa,unstable_isNewReconciler:!1};function Fe(e,l){if(e&&e.defaultProps){l=V({},l),e=e.defaultProps;for(var r in e)l[r]===void 0&&(l[r]=e[r]);return l}return l}function un(e,l,r,t){l=e.memoizedState,r=r(t,l),r=r==null?l:V({},l,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var nr={isMounted:function(e){return(e=e._reactInternals)?E0(e)===e:!1},enqueueSetState:function(e,l,r){e=e._reactInternals;var t=de(),n=L0(e),s=l0(t,n);s.payload=l,r!=null&&(s.callback=r),l=Q0(e,s,n),l!==null&&(Ae(l,e,n,t),X1(l,e,n))},enqueueReplaceState:function(e,l,r){e=e._reactInternals;var t=de(),n=L0(e),s=l0(t,n);s.tag=1,s.payload=l,r!=null&&(s.callback=r),l=Q0(e,s,n),l!==null&&(Ae(l,e,n,t),X1(l,e,n))},enqueueForceUpdate:function(e,l){e=e._reactInternals;var r=de(),t=L0(e),n=l0(r,t);n.tag=2,l!=null&&(n.callback=l),l=Q0(e,n,t),l!==null&&(Ae(l,e,t,r),X1(l,e,t))}};function ga(e,l,r,t,n,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,s,a):l.prototype&&l.prototype.isPureReactComponent?!Fl(r,t)||!Fl(n,s):!0}function ma(e,l,r){var t=!1,n=v0,s=l.contextType;return typeof s=="object"&&s!==null?s=Te(s):(n=pe(l)?C0:ne.current,t=l.contextTypes,s=(t=t!=null)?ll(e,n):v0),l=new l(r,s),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=nr,e.stateNode=l,l._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=s),l}function La(e,l,r,t){e=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(r,t),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(r,t),l.state!==e&&nr.enqueueReplaceState(l,l.state,null)}function hn(e,l,r,t){var n=e.stateNode;n.props=r,n.state=e.memoizedState,n.refs={},Xt(e);var s=l.contextType;typeof s=="object"&&s!==null?n.context=Te(s):(s=pe(l)?C0:ne.current,n.context=ll(e,s)),n.state=e.memoizedState,s=l.getDerivedStateFromProps,typeof s=="function"&&(un(e,l,s,r),n.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(l=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),l!==n.state&&nr.enqueueReplaceState(n,n.state,null),q1(e,r,n,t),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308)}function fl(e,l){try{var r="",t=l;do r+=si(t),t=t.return;while(t);var n=r}catch(s){n=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:l,stack:n,digest:null}}function cn(e,l,r){return{value:e,source:null,stack:r??null,digest:l??null}}function dn(e,l){try{console.error(l.value)}catch(r){setTimeout(function(){throw r})}}var Rf=typeof WeakMap=="function"?WeakMap:Map;function wa(e,l,r){r=l0(-1,r),r.tag=3,r.payload={element:null};var t=l.value;return r.callback=function(){hr||(hr=!0,Cn=t),dn(e,l)},r}function Ma(e,l,r){r=l0(-1,r),r.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var n=l.value;r.payload=function(){return t(n)},r.callback=function(){dn(e,l)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){dn(e,l),typeof t!="function"&&(g0===null?g0=new Set([this]):g0.add(this));var a=l.stack;this.componentDidCatch(l.value,{componentStack:a!==null?a:""})}),r}function xa(e,l,r){var t=e.pingCache;if(t===null){t=e.pingCache=new Rf;var n=new Set;t.set(l,n)}else n=t.get(l),n===void 0&&(n=new Set,t.set(l,n));n.has(r)||(n.add(r),e=Zf.bind(null,e,l,r),l.then(e,e))}function Sa(e){do{var l;if((l=e.tag===13)&&(l=e.memoizedState,l=l!==null?l.dehydrated!==null:!0),l)return e;e=e.return}while(e!==null);return null}function Ea(e,l,r,t,n){return e.mode&1?(e.flags|=65536,e.lanes=n,e):(e===l?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(l=l0(-1,1),l.tag=2,Q0(r,l,1))),r.lanes|=1),e)}var jf=Ye.ReactCurrentOwner,ke=!1;function ce(e,l,r,t){l.child=e===null?G2(l,null,r,t):sl(l,e.child,r,t)}function _a(e,l,r,t,n){r=r.render;var s=l.ref;return ol(l,n),t=tn(e,l,r,t,s,n),r=nn(),e!==null&&!ke?(l.updateQueue=e.updateQueue,l.flags&=-2053,e.lanes&=~n,r0(e,l,n)):(B&&r&&$t(l),l.flags|=1,ce(e,l,t,n),l.child)}function Ca(e,l,r,t,n){if(e===null){var s=r.type;return typeof s=="function"&&!In(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(l.tag=15,l.type=s,Ta(e,l,s,t,n)):(e=Qr(r.type,null,t,l,l.mode,n),e.ref=l.ref,e.return=l,l.child=e)}if(s=e.child,!(e.lanes&n)){var a=s.memoizedProps;if(r=r.compare,r=r!==null?r:Fl,r(a,t)&&e.ref===l.ref)return r0(e,l,n)}return l.flags|=1,e=M0(s,t),e.ref=l.ref,e.return=l,l.child=e}function Ta(e,l,r,t,n){if(e!==null){var s=e.memoizedProps;if(Fl(s,t)&&e.ref===l.ref)if(ke=!1,l.pendingProps=t=s,(e.lanes&n)!==0)e.flags&131072&&(ke=!0);else return l.lanes=e.lanes,r0(e,l,n)}return vn(e,l,r,t,n)}function Pa(e,l,r){var t=l.pendingProps,n=t.children,s=e!==null?e.memoizedState:null;if(t.mode==="hidden")if(!(l.mode&1))l.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(hl,Se),Se|=r;else{if(!(r&1073741824))return e=s!==null?s.baseLanes|r:r,l.lanes=l.childLanes=1073741824,l.memoizedState={baseLanes:e,cachePool:null,transitions:null},l.updateQueue=null,O(hl,Se),Se|=e,null;l.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=s!==null?s.baseLanes:r,O(hl,Se),Se|=t}else s!==null?(t=s.baseLanes|r,l.memoizedState=null):t=r,O(hl,Se),Se|=t;return ce(e,l,n,r),l.child}function za(e,l){var r=l.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(l.flags|=512,l.flags|=2097152)}function vn(e,l,r,t,n){var s=pe(r)?C0:ne.current;return s=ll(l,s),ol(l,n),r=tn(e,l,r,t,s,n),t=nn(),e!==null&&!ke?(l.updateQueue=e.updateQueue,l.flags&=-2053,e.lanes&=~n,r0(e,l,n)):(B&&t&&$t(l),l.flags|=1,ce(e,l,r,n),l.child)}function Na(e,l,r,t,n){if(pe(r)){var s=!0;B1(l)}else s=!1;if(ol(l,n),l.stateNode===null)ar(e,l),ma(l,r,t),hn(l,r,t,n),t=!0;else if(e===null){var a=l.stateNode,o=l.memoizedProps;a.props=o;var i=a.context,f=r.contextType;typeof f=="object"&&f!==null?f=Te(f):(f=pe(r)?C0:ne.current,f=ll(l,f));var d=r.getDerivedStateFromProps,v=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";v||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==t||i!==f)&&La(l,a,t,f),k0=!1;var p=l.memoizedState;a.state=p,q1(l,t,a,n),i=l.memoizedState,o!==t||p!==i||ve.current||k0?(typeof d=="function"&&(un(l,r,d,t),i=l.memoizedState),(o=k0||ga(l,r,o,t,p,i,f))?(v||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(l.flags|=4194308)):(typeof a.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=t,l.memoizedState=i),a.props=t,a.state=i,a.context=f,t=o):(typeof a.componentDidMount=="function"&&(l.flags|=4194308),t=!1)}else{a=l.stateNode,K2(e,l),o=l.memoizedProps,f=l.type===l.elementType?o:Fe(l.type,o),a.props=f,v=l.pendingProps,p=a.context,i=r.contextType,typeof i=="object"&&i!==null?i=Te(i):(i=pe(r)?C0:ne.current,i=ll(l,i));var y=r.getDerivedStateFromProps;(d=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==v||p!==i)&&La(l,a,t,i),k0=!1,p=l.memoizedState,a.state=p,q1(l,t,a,n);var m=l.memoizedState;o!==v||p!==m||ve.current||k0?(typeof y=="function"&&(un(l,r,y,t),m=l.memoizedState),(f=k0||ga(l,r,f,t,p,m,i)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(t,m,i),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(t,m,i)),typeof a.componentDidUpdate=="function"&&(l.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(l.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(l.flags|=1024),l.memoizedProps=t,l.memoizedState=m),a.props=t,a.state=m,a.context=i,t=f):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(l.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(l.flags|=1024),t=!1)}return pn(e,l,r,t,s,n)}function pn(e,l,r,t,n,s){za(e,l);var a=(l.flags&128)!==0;if(!t&&!a)return n&&D2(l,r,!1),r0(e,l,s);t=l.stateNode,jf.current=l;var o=a&&typeof r.getDerivedStateFromError!="function"?null:t.render();return l.flags|=1,e!==null&&a?(l.child=sl(l,e.child,null,s),l.child=sl(l,null,o,s)):ce(e,l,o,s),l.memoizedState=t.state,n&&D2(l,r,!0),l.child}function Ra(e){var l=e.stateNode;l.pendingContext?I2(e,l.pendingContext,l.pendingContext!==l.context):l.context&&I2(e,l.context,!1),qt(e,l.containerInfo)}function ja(e,l,r,t,n){return nl(),Ht(n),l.flags|=256,ce(e,l,r,t),l.child}var kn={dehydrated:null,treeContext:null,retryLane:0};function Qn(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ia(e,l,r){var t=l.pendingProps,n=H.current,s=!1,a=(l.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(n&2)!==0),o?(s=!0,l.flags&=-129):(e===null||e.memoizedState!==null)&&(n|=1),O(H,n&1),e===null)return Vt(l),e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(l.mode&1?e.data==="$!"?l.lanes=8:l.lanes=1073741824:l.lanes=1,null):(a=t.children,e=t.fallback,s?(t=l.mode,s=l.child,a={mode:"hidden",children:a},!(t&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=yr(a,t,0,null),e=O0(e,t,r,null),s.return=l,e.return=l,s.sibling=e,l.child=s,l.child.memoizedState=Qn(r),l.memoizedState=kn,e):yn(l,a));if(n=e.memoizedState,n!==null&&(o=n.dehydrated,o!==null))return If(e,l,a,t,o,n,r);if(s){s=t.fallback,a=l.mode,n=e.child,o=n.sibling;var i={mode:"hidden",children:t.children};return!(a&1)&&l.child!==n?(t=l.child,t.childLanes=0,t.pendingProps=i,l.deletions=null):(t=M0(n,i),t.subtreeFlags=n.subtreeFlags&14680064),o!==null?s=M0(o,s):(s=O0(s,a,r,null),s.flags|=2),s.return=l,t.return=l,t.sibling=s,l.child=t,t=s,s=l.child,a=e.child.memoizedState,a=a===null?Qn(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~r,l.memoizedState=kn,t}return s=e.child,e=s.sibling,t=M0(s,{mode:"visible",children:t.children}),!(l.mode&1)&&(t.lanes=r),t.return=l,t.sibling=null,e!==null&&(r=l.deletions,r===null?(l.deletions=[e],l.flags|=16):r.push(e)),l.child=t,l.memoizedState=null,t}function yn(e,l){return l=yr({mode:"visible",children:l},e.mode,0,null),l.return=e,e.child=l}function sr(e,l,r,t){return t!==null&&Ht(t),sl(l,e.child,null,r),e=yn(l,l.pendingProps.children),e.flags|=2,l.memoizedState=null,e}function If(e,l,r,t,n,s,a){if(r)return l.flags&256?(l.flags&=-257,t=cn(Error(Q(422))),sr(e,l,a,t)):l.memoizedState!==null?(l.child=e.child,l.flags|=128,null):(s=t.fallback,n=l.mode,t=yr({mode:"visible",children:t.children},n,0,null),s=O0(s,n,a,null),s.flags|=2,t.return=l,s.return=l,t.sibling=s,l.child=t,l.mode&1&&sl(l,e.child,null,a),l.child.memoizedState=Qn(a),l.memoizedState=kn,s);if(!(l.mode&1))return sr(e,l,a,null);if(n.data==="$!"){if(t=n.nextSibling&&n.nextSibling.dataset,t)var o=t.dgst;return t=o,s=Error(Q(419)),t=cn(s,t,void 0),sr(e,l,a,t)}if(o=(a&e.childLanes)!==0,ke||o){if(t=ee,t!==null){switch(a&-a){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(t.suspendedLanes|a)?0:n,n!==0&&n!==s.retryLane&&(s.retryLane=n,e0(e,n),Ae(t,e,n,-1))}return jn(),t=cn(Error(Q(421))),sr(e,l,a,t)}return n.data==="$?"?(l.flags|=128,l.child=e.child,l=Kf.bind(null,e),n._reactRetry=l,null):(e=s.treeContext,xe=c0(n.nextSibling),Me=l,B=!0,Ie=null,e!==null&&(_e[Ce++]=Je,_e[Ce++]=be,_e[Ce++]=T0,Je=e.id,be=e.overflow,T0=l),l=yn(l,t.children),l.flags|=4096,l)}function Fa(e,l,r){e.lanes|=l;var t=e.alternate;t!==null&&(t.lanes|=l),Kt(e.return,l,r)}function gn(e,l,r,t,n){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:t,tail:r,tailMode:n}:(s.isBackwards=l,s.rendering=null,s.renderingStartTime=0,s.last=t,s.tail=r,s.tailMode=n)}function Da(e,l,r){var t=l.pendingProps,n=t.revealOrder,s=t.tail;if(ce(e,l,t.children,r),t=H.current,t&2)t=t&1|2,l.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=l.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fa(e,r,l);else if(e.tag===19)Fa(e,r,l);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===l)break e;for(;e.sibling===null;){if(e.return===null||e.return===l)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(O(H,t),!(l.mode&1))l.memoizedState=null;else switch(n){case"forwards":for(r=l.child,n=null;r!==null;)e=r.alternate,e!==null&&J1(e)===null&&(n=r),r=r.sibling;r=n,r===null?(n=l.child,l.child=null):(n=r.sibling,r.sibling=null),gn(l,!1,n,r,s);break;case"backwards":for(r=null,n=l.child,l.child=null;n!==null;){if(e=n.alternate,e!==null&&J1(e)===null){l.child=n;break}e=n.sibling,n.sibling=r,r=n,n=e}gn(l,!0,r,null,s);break;case"together":gn(l,!1,null,null,void 0);break;default:l.memoizedState=null}return l.child}function ar(e,l){!(l.mode&1)&&e!==null&&(e.alternate=null,l.alternate=null,l.flags|=2)}function r0(e,l,r){if(e!==null&&(l.dependencies=e.dependencies),j0|=l.lanes,!(r&l.childLanes))return null;if(e!==null&&l.child!==e.child)throw Error(Q(153));if(l.child!==null){for(e=l.child,r=M0(e,e.pendingProps),l.child=r,r.return=l;e.sibling!==null;)e=e.sibling,r=r.sibling=M0(e,e.pendingProps),r.return=l;r.sibling=null}return l.child}function Ff(e,l,r){switch(l.tag){case 3:Ra(l),nl();break;case 5:q2(l);break;case 1:pe(l.type)&&B1(l);break;case 4:qt(l,l.stateNode.containerInfo);break;case 10:var t=l.type._context,n=l.memoizedProps.value;O(K1,t._currentValue),t._currentValue=n;break;case 13:if(t=l.memoizedState,t!==null)return t.dehydrated!==null?(O(H,H.current&1),l.flags|=128,null):r&l.child.childLanes?Ia(e,l,r):(O(H,H.current&1),e=r0(e,l,r),e!==null?e.sibling:null);O(H,H.current&1);break;case 19:if(t=(r&l.childLanes)!==0,e.flags&128){if(t)return Da(e,l,r);l.flags|=128}if(n=l.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),O(H,H.current),t)break;return null;case 22:case 23:return l.lanes=0,Pa(e,l,r)}return r0(e,l,r)}var Oa,mn,Aa,$a;Oa=function(e,l){for(var r=l.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===l)break;for(;r.sibling===null;){if(r.return===null||r.return===l)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},mn=function(){},Aa=function(e,l,r,t){var n=e.memoizedProps;if(n!==t){e=l.stateNode,N0(Ve.current);var s=null;switch(r){case"input":n=Kr(e,n),t=Kr(e,t),s=[];break;case"select":n=V({},n,{value:void 0}),t=V({},t,{value:void 0}),s=[];break;case"textarea":n=qr(e,n),t=qr(e,t),s=[];break;default:typeof n.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=A1)}br(r,t);var a;r=null;for(f in n)if(!t.hasOwnProperty(f)&&n.hasOwnProperty(f)&&n[f]!=null)if(f==="style"){var o=n[f];for(a in o)o.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(pl.hasOwnProperty(f)?s||(s=[]):(s=s||[]).push(f,null));for(f in t){var i=t[f];if(o=n!=null?n[f]:void 0,t.hasOwnProperty(f)&&i!==o&&(i!=null||o!=null))if(f==="style")if(o){for(a in o)!o.hasOwnProperty(a)||i&&i.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in i)i.hasOwnProperty(a)&&o[a]!==i[a]&&(r||(r={}),r[a]=i[a])}else r||(s||(s=[]),s.push(f,r)),r=i;else f==="dangerouslySetInnerHTML"?(i=i?i.__html:void 0,o=o?o.__html:void 0,i!=null&&o!==i&&(s=s||[]).push(f,i)):f==="children"?typeof i!="string"&&typeof i!="number"||(s=s||[]).push(f,""+i):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(pl.hasOwnProperty(f)?(i!=null&&f==="onScroll"&&A("scroll",e),s||o===i||(s=[])):(s=s||[]).push(f,i))}r&&(s=s||[]).push("style",r);var f=s;(l.updateQueue=f)&&(l.flags|=4)}},$a=function(e,l,r,t){r!==t&&(l.flags|=4)};function ql(e,l){if(!B)switch(e.tailMode){case"hidden":l=e.tail;for(var r=null;l!==null;)l.alternate!==null&&(r=l),l=l.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?l||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function ae(e){var l=e.alternate!==null&&e.alternate.child===e.child,r=0,t=0;if(l)for(var n=e.child;n!==null;)r|=n.lanes|n.childLanes,t|=n.subtreeFlags&14680064,t|=n.flags&14680064,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)r|=n.lanes|n.childLanes,t|=n.subtreeFlags,t|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=t,e.childLanes=r,l}function Df(e,l,r){var t=l.pendingProps;switch(Ut(l),l.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(l),null;case 1:return pe(l.type)&&U1(),ae(l),null;case 3:return t=l.stateNode,il(),$(ve),$(ne),en(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(G1(l)?l.flags|=4:e===null||e.memoizedState.isDehydrated&&!(l.flags&256)||(l.flags|=1024,Ie!==null&&(zn(Ie),Ie=null))),mn(e,l),ae(l),null;case 5:Jt(l);var n=N0(Gl.current);if(r=l.type,e!==null&&l.stateNode!=null)Aa(e,l,r,t,n),e.ref!==l.ref&&(l.flags|=512,l.flags|=2097152);else{if(!t){if(l.stateNode===null)throw Error(Q(166));return ae(l),null}if(e=N0(Ve.current),G1(l)){t=l.stateNode,r=l.type;var s=l.memoizedProps;switch(t[Be]=l,t[Ul]=s,e=(l.mode&1)!==0,r){case"dialog":A("cancel",t),A("close",t);break;case"iframe":case"object":case"embed":A("load",t);break;case"video":case"audio":for(n=0;n<Ol.length;n++)A(Ol[n],t);break;case"source":A("error",t);break;case"img":case"image":case"link":A("error",t),A("load",t);break;case"details":A("toggle",t);break;case"input":ms(t,s),A("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!s.multiple},A("invalid",t);break;case"textarea":Ms(t,s),A("invalid",t)}br(r,s),n=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?t.textContent!==o&&(s.suppressHydrationWarning!==!0&&O1(t.textContent,o,e),n=["children",o]):typeof o=="number"&&t.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&O1(t.textContent,o,e),n=["children",""+o]):pl.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&A("scroll",t)}switch(r){case"input":p1(t),ws(t,s,!0);break;case"textarea":p1(t),Ss(t);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(t.onclick=A1)}t=n,l.updateQueue=t,t!==null&&(l.flags|=4)}else{a=n.nodeType===9?n:n.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Es(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=a.createElement(r,{is:t.is}):(e=a.createElement(r),r==="select"&&(a=e,t.multiple?a.multiple=!0:t.size&&(a.size=t.size))):e=a.createElementNS(e,r),e[Be]=l,e[Ul]=t,Oa(e,l,!1,!1),l.stateNode=e;e:{switch(a=et(r,t),r){case"dialog":A("cancel",e),A("close",e),n=t;break;case"iframe":case"object":case"embed":A("load",e),n=t;break;case"video":case"audio":for(n=0;n<Ol.length;n++)A(Ol[n],e);n=t;break;case"source":A("error",e),n=t;break;case"img":case"image":case"link":A("error",e),A("load",e),n=t;break;case"details":A("toggle",e),n=t;break;case"input":ms(e,t),n=Kr(e,t),A("invalid",e);break;case"option":n=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},n=V({},t,{value:void 0}),A("invalid",e);break;case"textarea":Ms(e,t),n=qr(e,t),A("invalid",e);break;default:n=t}br(r,n),o=n;for(s in o)if(o.hasOwnProperty(s)){var i=o[s];s==="style"?Ts(e,i):s==="dangerouslySetInnerHTML"?(i=i?i.__html:void 0,i!=null&&_s(e,i)):s==="children"?typeof i=="string"?(r!=="textarea"||i!=="")&&gl(e,i):typeof i=="number"&&gl(e,""+i):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(pl.hasOwnProperty(s)?i!=null&&s==="onScroll"&&A("scroll",e):i!=null&&Dr(e,s,i,a))}switch(r){case"input":p1(e),ws(e,t,!1);break;case"textarea":p1(e),Ss(e);break;case"option":t.value!=null&&e.setAttribute("value",""+s0(t.value));break;case"select":e.multiple=!!t.multiple,s=t.value,s!=null?V0(e,!!t.multiple,s,!1):t.defaultValue!=null&&V0(e,!!t.multiple,t.defaultValue,!0);break;default:typeof n.onClick=="function"&&(e.onclick=A1)}switch(r){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(l.flags|=4)}l.ref!==null&&(l.flags|=512,l.flags|=2097152)}return ae(l),null;case 6:if(e&&l.stateNode!=null)$a(e,l,e.memoizedProps,t);else{if(typeof t!="string"&&l.stateNode===null)throw Error(Q(166));if(r=N0(Gl.current),N0(Ve.current),G1(l)){if(t=l.stateNode,r=l.memoizedProps,t[Be]=l,(s=t.nodeValue!==r)&&(e=Me,e!==null))switch(e.tag){case 3:O1(t.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&O1(t.nodeValue,r,(e.mode&1)!==0)}s&&(l.flags|=4)}else t=(r.nodeType===9?r:r.ownerDocument).createTextNode(t),t[Be]=l,l.stateNode=t}return ae(l),null;case 13:if($(H),t=l.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&xe!==null&&l.mode&1&&!(l.flags&128))V2(),nl(),l.flags|=98560,s=!1;else if(s=G1(l),t!==null&&t.dehydrated!==null){if(e===null){if(!s)throw Error(Q(318));if(s=l.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Q(317));s[Be]=l}else nl(),!(l.flags&128)&&(l.memoizedState=null),l.flags|=4;ae(l),s=!1}else Ie!==null&&(zn(Ie),Ie=null),s=!0;if(!s)return l.flags&65536?l:null}return l.flags&128?(l.lanes=r,l):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(l.child.flags|=8192,l.mode&1&&(e===null||H.current&1?X===0&&(X=3):jn())),l.updateQueue!==null&&(l.flags|=4),ae(l),null);case 4:return il(),mn(e,l),e===null&&Al(l.stateNode.containerInfo),ae(l),null;case 10:return Zt(l.type._context),ae(l),null;case 17:return pe(l.type)&&U1(),ae(l),null;case 19:if($(H),s=l.memoizedState,s===null)return ae(l),null;if(t=(l.flags&128)!==0,a=s.rendering,a===null)if(t)ql(s,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=l.child;e!==null;){if(a=J1(e),a!==null){for(l.flags|=128,ql(s,!1),t=a.updateQueue,t!==null&&(l.updateQueue=t,l.flags|=4),l.subtreeFlags=0,t=r,r=l.child;r!==null;)s=r,e=t,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return O(H,H.current&1|2),l.child}e=e.sibling}s.tail!==null&&Z()>cl&&(l.flags|=128,t=!0,ql(s,!1),l.lanes=4194304)}else{if(!t)if(e=J1(a),e!==null){if(l.flags|=128,t=!0,r=e.updateQueue,r!==null&&(l.updateQueue=r,l.flags|=4),ql(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!B)return ae(l),null}else 2*Z()-s.renderingStartTime>cl&&r!==1073741824&&(l.flags|=128,t=!0,ql(s,!1),l.lanes=4194304);s.isBackwards?(a.sibling=l.child,l.child=a):(r=s.last,r!==null?r.sibling=a:l.child=a,s.last=a)}return s.tail!==null?(l=s.tail,s.rendering=l,s.tail=l.sibling,s.renderingStartTime=Z(),l.sibling=null,r=H.current,O(H,t?r&1|2:r&1),l):(ae(l),null);case 22:case 23:return Rn(),t=l.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(l.flags|=8192),t&&l.mode&1?Se&1073741824&&(ae(l),l.subtreeFlags&6&&(l.flags|=8192)):ae(l),null;case 24:return null;case 25:return null}throw Error(Q(156,l.tag))}function Of(e,l){switch(Ut(l),l.tag){case 1:return pe(l.type)&&U1(),e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 3:return il(),$(ve),$(ne),en(),e=l.flags,e&65536&&!(e&128)?(l.flags=e&-65537|128,l):null;case 5:return Jt(l),null;case 13:if($(H),e=l.memoizedState,e!==null&&e.dehydrated!==null){if(l.alternate===null)throw Error(Q(340));nl()}return e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 19:return $(H),null;case 4:return il(),null;case 10:return Zt(l.type._context),null;case 22:case 23:return Rn(),null;case 24:return null;default:return null}}var or=!1,oe=!1,Af=typeof WeakSet=="function"?WeakSet:Set,x=null;function ul(e,l){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(t){G(e,l,t)}else r.current=null}function Ln(e,l,r){try{r()}catch(t){G(e,l,t)}}var Ua=!1;function $f(e,l){if(Nt=_1,e=g2(),xt(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var t=r.getSelection&&r.getSelection();if(t&&t.rangeCount!==0){r=t.anchorNode;var n=t.anchorOffset,s=t.focusNode;t=t.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var a=0,o=-1,i=-1,f=0,d=0,v=e,p=null;l:for(;;){for(var y;v!==r||n!==0&&v.nodeType!==3||(o=a+n),v!==s||t!==0&&v.nodeType!==3||(i=a+t),v.nodeType===3&&(a+=v.nodeValue.length),(y=v.firstChild)!==null;)p=v,v=y;for(;;){if(v===e)break l;if(p===r&&++f===n&&(o=a),p===s&&++d===t&&(i=a),(y=v.nextSibling)!==null)break;v=p,p=v.parentNode}v=y}r=o===-1||i===-1?null:{start:o,end:i}}else r=null}r=r||{start:0,end:0}}else r=null;for(Rt={focusedElem:e,selectionRange:r},_1=!1,x=l;x!==null;)if(l=x,e=l.child,(l.subtreeFlags&1028)!==0&&e!==null)e.return=l,x=e;else for(;x!==null;){l=x;try{var m=l.alternate;if(l.flags&1024)switch(l.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var g=m.memoizedProps,j=m.memoizedState,h=l.stateNode,u=h.getSnapshotBeforeUpdate(l.elementType===l.type?g:Fe(l.type,g),j);h.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var c=l.stateNode.containerInfo;c.nodeType===1?c.textContent="":c.nodeType===9&&c.documentElement&&c.removeChild(c.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Q(163))}}catch(k){G(l,l.return,k)}if(e=l.sibling,e!==null){e.return=l.return,x=e;break}x=l.return}return m=Ua,Ua=!1,m}function Jl(e,l,r){var t=l.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var s=n.destroy;n.destroy=void 0,s!==void 0&&Ln(l,r,s)}n=n.next}while(n!==t)}}function ir(e,l){if(l=l.updateQueue,l=l!==null?l.lastEffect:null,l!==null){var r=l=l.next;do{if((r.tag&e)===e){var t=r.create;r.destroy=t()}r=r.next}while(r!==l)}}function wn(e){var l=e.ref;if(l!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof l=="function"?l(e):l.current=e}}function Ba(e){var l=e.alternate;l!==null&&(e.alternate=null,Ba(l)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(l=e.stateNode,l!==null&&(delete l[Be],delete l[Ul],delete l[Dt],delete l[wf],delete l[Mf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Va(e){return e.tag===5||e.tag===3||e.tag===4}function Ha(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Va(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mn(e,l,r){var t=e.tag;if(t===5||t===6)e=e.stateNode,l?r.nodeType===8?r.parentNode.insertBefore(e,l):r.insertBefore(e,l):(r.nodeType===8?(l=r.parentNode,l.insertBefore(e,r)):(l=r,l.appendChild(e)),r=r._reactRootContainer,r!=null||l.onclick!==null||(l.onclick=A1));else if(t!==4&&(e=e.child,e!==null))for(Mn(e,l,r),e=e.sibling;e!==null;)Mn(e,l,r),e=e.sibling}function xn(e,l,r){var t=e.tag;if(t===5||t===6)e=e.stateNode,l?r.insertBefore(e,l):r.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(xn(e,l,r),e=e.sibling;e!==null;)xn(e,l,r),e=e.sibling}var re=null,De=!1;function y0(e,l,r){for(r=r.child;r!==null;)Wa(e,l,r),r=r.sibling}function Wa(e,l,r){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(L1,r)}catch{}switch(r.tag){case 5:oe||ul(r,l);case 6:var t=re,n=De;re=null,y0(e,l,r),re=t,De=n,re!==null&&(De?(e=re,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):re.removeChild(r.stateNode));break;case 18:re!==null&&(De?(e=re,r=r.stateNode,e.nodeType===8?Ft(e.parentNode,r):e.nodeType===1&&Ft(e,r),Pl(e)):Ft(re,r.stateNode));break;case 4:t=re,n=De,re=r.stateNode.containerInfo,De=!0,y0(e,l,r),re=t,De=n;break;case 0:case 11:case 14:case 15:if(!oe&&(t=r.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){n=t=t.next;do{var s=n,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Ln(r,l,a),n=n.next}while(n!==t)}y0(e,l,r);break;case 1:if(!oe&&(ul(r,l),t=r.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=r.memoizedProps,t.state=r.memoizedState,t.componentWillUnmount()}catch(o){G(r,l,o)}y0(e,l,r);break;case 21:y0(e,l,r);break;case 22:r.mode&1?(oe=(t=oe)||r.memoizedState!==null,y0(e,l,r),oe=t):y0(e,l,r);break;default:y0(e,l,r)}}function Ga(e){var l=e.updateQueue;if(l!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Af),l.forEach(function(t){var n=Yf.bind(null,e,t);r.has(t)||(r.add(t),t.then(n,n))})}}function Oe(e,l){var r=l.deletions;if(r!==null)for(var t=0;t<r.length;t++){var n=r[t];try{var s=e,a=l,o=a;e:for(;o!==null;){switch(o.tag){case 5:re=o.stateNode,De=!1;break e;case 3:re=o.stateNode.containerInfo,De=!0;break e;case 4:re=o.stateNode.containerInfo,De=!0;break e}o=o.return}if(re===null)throw Error(Q(160));Wa(s,a,n),re=null,De=!1;var i=n.alternate;i!==null&&(i.return=null),n.return=null}catch(f){G(n,l,f)}}if(l.subtreeFlags&12854)for(l=l.child;l!==null;)Za(l,e),l=l.sibling}function Za(e,l){var r=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(l,e),We(e),t&4){try{Jl(3,e,e.return),ir(3,e)}catch(g){G(e,e.return,g)}try{Jl(5,e,e.return)}catch(g){G(e,e.return,g)}}break;case 1:Oe(l,e),We(e),t&512&&r!==null&&ul(r,r.return);break;case 5:if(Oe(l,e),We(e),t&512&&r!==null&&ul(r,r.return),e.flags&32){var n=e.stateNode;try{gl(n,"")}catch(g){G(e,e.return,g)}}if(t&4&&(n=e.stateNode,n!=null)){var s=e.memoizedProps,a=r!==null?r.memoizedProps:s,o=e.type,i=e.updateQueue;if(e.updateQueue=null,i!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Ls(n,s),et(o,a);var f=et(o,s);for(a=0;a<i.length;a+=2){var d=i[a],v=i[a+1];d==="style"?Ts(n,v):d==="dangerouslySetInnerHTML"?_s(n,v):d==="children"?gl(n,v):Dr(n,d,v,f)}switch(o){case"input":Yr(n,s);break;case"textarea":xs(n,s);break;case"select":var p=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?V0(n,!!s.multiple,y,!1):p!==!!s.multiple&&(s.defaultValue!=null?V0(n,!!s.multiple,s.defaultValue,!0):V0(n,!!s.multiple,s.multiple?[]:"",!1))}n[Ul]=s}catch(g){G(e,e.return,g)}}break;case 6:if(Oe(l,e),We(e),t&4){if(e.stateNode===null)throw Error(Q(162));n=e.stateNode,s=e.memoizedProps;try{n.nodeValue=s}catch(g){G(e,e.return,g)}}break;case 3:if(Oe(l,e),We(e),t&4&&r!==null&&r.memoizedState.isDehydrated)try{Pl(l.containerInfo)}catch(g){G(e,e.return,g)}break;case 4:Oe(l,e),We(e);break;case 13:Oe(l,e),We(e),n=e.child,n.flags&8192&&(s=n.memoizedState!==null,n.stateNode.isHidden=s,!s||n.alternate!==null&&n.alternate.memoizedState!==null||(_n=Z())),t&4&&Ga(e);break;case 22:if(d=r!==null&&r.memoizedState!==null,e.mode&1?(oe=(f=oe)||d,Oe(l,e),oe=f):Oe(l,e),We(e),t&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!d&&e.mode&1)for(x=e,d=e.child;d!==null;){for(v=x=d;x!==null;){switch(p=x,y=p.child,p.tag){case 0:case 11:case 14:case 15:Jl(4,p,p.return);break;case 1:ul(p,p.return);var m=p.stateNode;if(typeof m.componentWillUnmount=="function"){t=p,r=p.return;try{l=t,m.props=l.memoizedProps,m.state=l.memoizedState,m.componentWillUnmount()}catch(g){G(t,r,g)}}break;case 5:ul(p,p.return);break;case 22:if(p.memoizedState!==null){Xa(v);continue}}y!==null?(y.return=p,x=y):Xa(v)}d=d.sibling}e:for(d=null,v=e;;){if(v.tag===5){if(d===null){d=v;try{n=v.stateNode,f?(s=n.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=v.stateNode,i=v.memoizedProps.style,a=i!=null&&i.hasOwnProperty("display")?i.display:null,o.style.display=Cs("display",a))}catch(g){G(e,e.return,g)}}}else if(v.tag===6){if(d===null)try{v.stateNode.nodeValue=f?"":v.memoizedProps}catch(g){G(e,e.return,g)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;d===v&&(d=null),v=v.return}d===v&&(d=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Oe(l,e),We(e),t&4&&Ga(e);break;case 21:break;default:Oe(l,e),We(e)}}function We(e){var l=e.flags;if(l&2){try{e:{for(var r=e.return;r!==null;){if(Va(r)){var t=r;break e}r=r.return}throw Error(Q(160))}switch(t.tag){case 5:var n=t.stateNode;t.flags&32&&(gl(n,""),t.flags&=-33);var s=Ha(e);xn(e,s,n);break;case 3:case 4:var a=t.stateNode.containerInfo,o=Ha(e);Mn(e,o,a);break;default:throw Error(Q(161))}}catch(i){G(e,e.return,i)}e.flags&=-3}l&4096&&(e.flags&=-4097)}function Uf(e,l,r){x=e,Ka(e)}function Ka(e,l,r){for(var t=(e.mode&1)!==0;x!==null;){var n=x,s=n.child;if(n.tag===22&&t){var a=n.memoizedState!==null||or;if(!a){var o=n.alternate,i=o!==null&&o.memoizedState!==null||oe;o=or;var f=oe;if(or=a,(oe=i)&&!f)for(x=n;x!==null;)a=x,i=a.child,a.tag===22&&a.memoizedState!==null?qa(n):i!==null?(i.return=a,x=i):qa(n);for(;s!==null;)x=s,Ka(s),s=s.sibling;x=n,or=o,oe=f}Ya(e)}else n.subtreeFlags&8772&&s!==null?(s.return=n,x=s):Ya(e)}}function Ya(e){for(;x!==null;){var l=x;if(l.flags&8772){var r=l.alternate;try{if(l.flags&8772)switch(l.tag){case 0:case 11:case 15:oe||ir(5,l);break;case 1:var t=l.stateNode;if(l.flags&4&&!oe)if(r===null)t.componentDidMount();else{var n=l.elementType===l.type?r.memoizedProps:Fe(l.type,r.memoizedProps);t.componentDidUpdate(n,r.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var s=l.updateQueue;s!==null&&X2(l,s,t);break;case 3:var a=l.updateQueue;if(a!==null){if(r=null,l.child!==null)switch(l.child.tag){case 5:r=l.child.stateNode;break;case 1:r=l.child.stateNode}X2(l,a,r)}break;case 5:var o=l.stateNode;if(r===null&&l.flags&4){r=o;var i=l.memoizedProps;switch(l.type){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break;case"img":i.src&&(r.src=i.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(l.memoizedState===null){var f=l.alternate;if(f!==null){var d=f.memoizedState;if(d!==null){var v=d.dehydrated;v!==null&&Pl(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Q(163))}oe||l.flags&512&&wn(l)}catch(p){G(l,l.return,p)}}if(l===e){x=null;break}if(r=l.sibling,r!==null){r.return=l.return,x=r;break}x=l.return}}function Xa(e){for(;x!==null;){var l=x;if(l===e){x=null;break}var r=l.sibling;if(r!==null){r.return=l.return,x=r;break}x=l.return}}function qa(e){for(;x!==null;){var l=x;try{switch(l.tag){case 0:case 11:case 15:var r=l.return;try{ir(4,l)}catch(i){G(l,r,i)}break;case 1:var t=l.stateNode;if(typeof t.componentDidMount=="function"){var n=l.return;try{t.componentDidMount()}catch(i){G(l,n,i)}}var s=l.return;try{wn(l)}catch(i){G(l,s,i)}break;case 5:var a=l.return;try{wn(l)}catch(i){G(l,a,i)}}}catch(i){G(l,l.return,i)}if(l===e){x=null;break}var o=l.sibling;if(o!==null){o.return=l.return,x=o;break}x=l.return}}var Bf=Math.ceil,fr=Ye.ReactCurrentDispatcher,Sn=Ye.ReactCurrentOwner,ze=Ye.ReactCurrentBatchConfig,R=0,ee=null,K=null,te=0,Se=0,hl=d0(0),X=0,bl=null,j0=0,ur=0,En=0,e1=null,Qe=null,_n=0,cl=1/0,t0=null,hr=!1,Cn=null,g0=null,cr=!1,m0=null,dr=0,l1=0,Tn=null,vr=-1,pr=0;function de(){return R&6?Z():vr!==-1?vr:vr=Z()}function L0(e){return e.mode&1?R&2&&te!==0?te&-te:Sf.transition!==null?(pr===0&&(pr=Hs()),pr):(e=I,e!==0||(e=window.event,e=e===void 0?16:bs(e.type)),e):1}function Ae(e,l,r,t){if(50<l1)throw l1=0,Tn=null,Error(Q(185));Sl(e,r,t),(!(R&2)||e!==ee)&&(e===ee&&(!(R&2)&&(ur|=r),X===4&&w0(e,te)),ye(e,t),r===1&&R===0&&!(l.mode&1)&&(cl=Z()+500,V1&&p0()))}function ye(e,l){var r=e.callbackNode;xi(e,l);var t=x1(e,e===ee?te:0);if(t===0)r!==null&&Us(r),e.callbackNode=null,e.callbackPriority=0;else if(l=t&-t,e.callbackPriority!==l){if(r!=null&&Us(r),l===1)e.tag===0?xf(ba.bind(null,e)):O2(ba.bind(null,e)),mf(function(){!(R&6)&&p0()}),r=null;else{switch(Ws(t)){case 1:r=ot;break;case 4:r=Bs;break;case 16:r=m1;break;case 536870912:r=Vs;break;default:r=m1}r=oo(r,Ja.bind(null,e))}e.callbackPriority=l,e.callbackNode=r}}function Ja(e,l){if(vr=-1,pr=0,R&6)throw Error(Q(327));var r=e.callbackNode;if(dl()&&e.callbackNode!==r)return null;var t=x1(e,e===ee?te:0);if(t===0)return null;if(t&30||t&e.expiredLanes||l)l=kr(e,t);else{l=t;var n=R;R|=2;var s=lo();(ee!==e||te!==l)&&(t0=null,cl=Z()+500,F0(e,l));do try{Wf();break}catch(o){eo(e,o)}while(!0);Gt(),fr.current=s,R=n,K!==null?l=0:(ee=null,te=0,l=X)}if(l!==0){if(l===2&&(n=it(e),n!==0&&(t=n,l=Pn(e,n))),l===1)throw r=bl,F0(e,0),w0(e,t),ye(e,Z()),r;if(l===6)w0(e,t);else{if(n=e.current.alternate,!(t&30)&&!Vf(n)&&(l=kr(e,t),l===2&&(s=it(e),s!==0&&(t=s,l=Pn(e,s))),l===1))throw r=bl,F0(e,0),w0(e,t),ye(e,Z()),r;switch(e.finishedWork=n,e.finishedLanes=t,l){case 0:case 1:throw Error(Q(345));case 2:D0(e,Qe,t0);break;case 3:if(w0(e,t),(t&130023424)===t&&(l=_n+500-Z(),10<l)){if(x1(e,0)!==0)break;if(n=e.suspendedLanes,(n&t)!==t){de(),e.pingedLanes|=e.suspendedLanes&n;break}e.timeoutHandle=It(D0.bind(null,e,Qe,t0),l);break}D0(e,Qe,t0);break;case 4:if(w0(e,t),(t&4194240)===t)break;for(l=e.eventTimes,n=-1;0<t;){var a=31-Re(t);s=1<<a,a=l[a],a>n&&(n=a),t&=~s}if(t=n,t=Z()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*Bf(t/1960))-t,10<t){e.timeoutHandle=It(D0.bind(null,e,Qe,t0),t);break}D0(e,Qe,t0);break;case 5:D0(e,Qe,t0);break;default:throw Error(Q(329))}}}return ye(e,Z()),e.callbackNode===r?Ja.bind(null,e):null}function Pn(e,l){var r=e1;return e.current.memoizedState.isDehydrated&&(F0(e,l).flags|=256),e=kr(e,l),e!==2&&(l=Qe,Qe=r,l!==null&&zn(l)),e}function zn(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function Vf(e){for(var l=e;;){if(l.flags&16384){var r=l.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var t=0;t<r.length;t++){var n=r[t],s=n.getSnapshot;n=n.value;try{if(!je(s(),n))return!1}catch{return!1}}}if(r=l.child,l.subtreeFlags&16384&&r!==null)r.return=l,l=r;else{if(l===e)break;for(;l.sibling===null;){if(l.return===null||l.return===e)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function w0(e,l){for(l&=~En,l&=~ur,e.suspendedLanes|=l,e.pingedLanes&=~l,e=e.expirationTimes;0<l;){var r=31-Re(l),t=1<<r;e[r]=-1,l&=~t}}function ba(e){if(R&6)throw Error(Q(327));dl();var l=x1(e,0);if(!(l&1))return ye(e,Z()),null;var r=kr(e,l);if(e.tag!==0&&r===2){var t=it(e);t!==0&&(l=t,r=Pn(e,t))}if(r===1)throw r=bl,F0(e,0),w0(e,l),ye(e,Z()),r;if(r===6)throw Error(Q(345));return e.finishedWork=e.current.alternate,e.finishedLanes=l,D0(e,Qe,t0),ye(e,Z()),null}function Nn(e,l){var r=R;R|=1;try{return e(l)}finally{R=r,R===0&&(cl=Z()+500,V1&&p0())}}function I0(e){m0!==null&&m0.tag===0&&!(R&6)&&dl();var l=R;R|=1;var r=ze.transition,t=I;try{if(ze.transition=null,I=1,e)return e()}finally{I=t,ze.transition=r,R=l,!(R&6)&&p0()}}function Rn(){Se=hl.current,$(hl)}function F0(e,l){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,gf(r)),K!==null)for(r=K.return;r!==null;){var t=r;switch(Ut(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&U1();break;case 3:il(),$(ve),$(ne),en();break;case 5:Jt(t);break;case 4:il();break;case 13:$(H);break;case 19:$(H);break;case 10:Zt(t.type._context);break;case 22:case 23:Rn()}r=r.return}if(ee=e,K=e=M0(e.current,null),te=Se=l,X=0,bl=null,En=ur=j0=0,Qe=e1=null,z0!==null){for(l=0;l<z0.length;l++)if(r=z0[l],t=r.interleaved,t!==null){r.interleaved=null;var n=t.next,s=r.pending;if(s!==null){var a=s.next;s.next=n,t.next=a}r.pending=t}z0=null}return e}function eo(e,l){do{var r=K;try{if(Gt(),b1.current=tr,er){for(var t=W.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}er=!1}if(R0=0,b=Y=W=null,Zl=!1,Kl=0,Sn.current=null,r===null||r.return===null){X=1,bl=l,K=null;break}e:{var s=e,a=r.return,o=r,i=l;if(l=te,o.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){var f=i,d=o,v=d.tag;if(!(d.mode&1)&&(v===0||v===11||v===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Sa(a);if(y!==null){y.flags&=-257,Ea(y,a,o,s,l),y.mode&1&&xa(s,f,l),l=y,i=f;var m=l.updateQueue;if(m===null){var g=new Set;g.add(i),l.updateQueue=g}else m.add(i);break e}else{if(!(l&1)){xa(s,f,l),jn();break e}i=Error(Q(426))}}else if(B&&o.mode&1){var j=Sa(a);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Ea(j,a,o,s,l),Ht(fl(i,o));break e}}s=i=fl(i,o),X!==4&&(X=2),e1===null?e1=[s]:e1.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,l&=-l,s.lanes|=l;var h=wa(s,i,l);Y2(s,h);break e;case 1:o=i;var u=s.type,c=s.stateNode;if(!(s.flags&128)&&(typeof u.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(g0===null||!g0.has(c)))){s.flags|=65536,l&=-l,s.lanes|=l;var k=Ma(s,o,l);Y2(s,k);break e}}s=s.return}while(s!==null)}to(r)}catch(S){l=S,K===r&&r!==null&&(K=r=r.return);continue}break}while(!0)}function lo(){var e=fr.current;return fr.current=tr,e===null?tr:e}function jn(){(X===0||X===3||X===2)&&(X=4),ee===null||!(j0&268435455)&&!(ur&268435455)||w0(ee,te)}function kr(e,l){var r=R;R|=2;var t=lo();(ee!==e||te!==l)&&(t0=null,F0(e,l));do try{Hf();break}catch(n){eo(e,n)}while(!0);if(Gt(),R=r,fr.current=t,K!==null)throw Error(Q(261));return ee=null,te=0,X}function Hf(){for(;K!==null;)ro(K)}function Wf(){for(;K!==null&&!pi();)ro(K)}function ro(e){var l=ao(e.alternate,e,Se);e.memoizedProps=e.pendingProps,l===null?to(e):K=l,Sn.current=null}function to(e){var l=e;do{var r=l.alternate;if(e=l.return,l.flags&32768){if(r=Of(r,l),r!==null){r.flags&=32767,K=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,K=null;return}}else if(r=Df(r,l,Se),r!==null){K=r;return}if(l=l.sibling,l!==null){K=l;return}K=l=e}while(l!==null);X===0&&(X=5)}function D0(e,l,r){var t=I,n=ze.transition;try{ze.transition=null,I=1,Gf(e,l,r,t)}finally{ze.transition=n,I=t}return null}function Gf(e,l,r,t){do dl();while(m0!==null);if(R&6)throw Error(Q(327));r=e.finishedWork;var n=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(Q(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(Si(e,s),e===ee&&(K=ee=null,te=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||cr||(cr=!0,oo(m1,function(){return dl(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=ze.transition,ze.transition=null;var a=I;I=1;var o=R;R|=4,Sn.current=null,$f(e,r),Za(r,e),cf(Rt),_1=!!Nt,Rt=Nt=null,e.current=r,Uf(r),ki(),R=o,I=a,ze.transition=s}else e.current=r;if(cr&&(cr=!1,m0=e,dr=n),s=e.pendingLanes,s===0&&(g0=null),gi(r.stateNode),ye(e,Z()),l!==null)for(t=e.onRecoverableError,r=0;r<l.length;r++)n=l[r],t(n.value,{componentStack:n.stack,digest:n.digest});if(hr)throw hr=!1,e=Cn,Cn=null,e;return dr&1&&e.tag!==0&&dl(),s=e.pendingLanes,s&1?e===Tn?l1++:(l1=0,Tn=e):l1=0,p0(),null}function dl(){if(m0!==null){var e=Ws(dr),l=ze.transition,r=I;try{if(ze.transition=null,I=16>e?16:e,m0===null)var t=!1;else{if(e=m0,m0=null,dr=0,R&6)throw Error(Q(331));var n=R;for(R|=4,x=e.current;x!==null;){var s=x,a=s.child;if(x.flags&16){var o=s.deletions;if(o!==null){for(var i=0;i<o.length;i++){var f=o[i];for(x=f;x!==null;){var d=x;switch(d.tag){case 0:case 11:case 15:Jl(8,d,s)}var v=d.child;if(v!==null)v.return=d,x=v;else for(;x!==null;){d=x;var p=d.sibling,y=d.return;if(Ba(d),d===f){x=null;break}if(p!==null){p.return=y,x=p;break}x=y}}}var m=s.alternate;if(m!==null){var g=m.child;if(g!==null){m.child=null;do{var j=g.sibling;g.sibling=null,g=j}while(g!==null)}}x=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,x=a;else e:for(;x!==null;){if(s=x,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Jl(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,x=h;break e}x=s.return}}var u=e.current;for(x=u;x!==null;){a=x;var c=a.child;if(a.subtreeFlags&2064&&c!==null)c.return=a,x=c;else e:for(a=u;x!==null;){if(o=x,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ir(9,o)}}catch(S){G(o,o.return,S)}if(o===a){x=null;break e}var k=o.sibling;if(k!==null){k.return=o.return,x=k;break e}x=o.return}}if(R=n,p0(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(L1,e)}catch{}t=!0}return t}finally{I=r,ze.transition=l}}return!1}function no(e,l,r){l=fl(r,l),l=wa(e,l,1),e=Q0(e,l,1),l=de(),e!==null&&(Sl(e,1,l),ye(e,l))}function G(e,l,r){if(e.tag===3)no(e,e,r);else for(;l!==null;){if(l.tag===3){no(l,e,r);break}else if(l.tag===1){var t=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(g0===null||!g0.has(t))){e=fl(r,e),e=Ma(l,e,1),l=Q0(l,e,1),e=de(),l!==null&&(Sl(l,1,e),ye(l,e));break}}l=l.return}}function Zf(e,l,r){var t=e.pingCache;t!==null&&t.delete(l),l=de(),e.pingedLanes|=e.suspendedLanes&r,ee===e&&(te&r)===r&&(X===4||X===3&&(te&130023424)===te&&500>Z()-_n?F0(e,0):En|=r),ye(e,l)}function so(e,l){l===0&&(e.mode&1?(l=M1,M1<<=1,!(M1&130023424)&&(M1=4194304)):l=1);var r=de();e=e0(e,l),e!==null&&(Sl(e,l,r),ye(e,r))}function Kf(e){var l=e.memoizedState,r=0;l!==null&&(r=l.retryLane),so(e,r)}function Yf(e,l){var r=0;switch(e.tag){case 13:var t=e.stateNode,n=e.memoizedState;n!==null&&(r=n.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(Q(314))}t!==null&&t.delete(l),so(e,r)}var ao;ao=function(e,l,r){if(e!==null)if(e.memoizedProps!==l.pendingProps||ve.current)ke=!0;else{if(!(e.lanes&r)&&!(l.flags&128))return ke=!1,Ff(e,l,r);ke=!!(e.flags&131072)}else ke=!1,B&&l.flags&1048576&&A2(l,W1,l.index);switch(l.lanes=0,l.tag){case 2:var t=l.type;ar(e,l),e=l.pendingProps;var n=ll(l,ne.current);ol(l,r),n=tn(null,l,t,e,n,r);var s=nn();return l.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(l.tag=1,l.memoizedState=null,l.updateQueue=null,pe(t)?(s=!0,B1(l)):s=!1,l.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,Xt(l),n.updater=nr,l.stateNode=n,n._reactInternals=l,hn(l,t,e,r),l=pn(null,l,t,!0,s,r)):(l.tag=0,B&&s&&$t(l),ce(null,l,n,r),l=l.child),l;case 16:t=l.elementType;e:{switch(ar(e,l),e=l.pendingProps,n=t._init,t=n(t._payload),l.type=t,n=l.tag=qf(t),e=Fe(t,e),n){case 0:l=vn(null,l,t,e,r);break e;case 1:l=Na(null,l,t,e,r);break e;case 11:l=_a(null,l,t,e,r);break e;case 14:l=Ca(null,l,t,Fe(t.type,e),r);break e}throw Error(Q(306,t,""))}return l;case 0:return t=l.type,n=l.pendingProps,n=l.elementType===t?n:Fe(t,n),vn(e,l,t,n,r);case 1:return t=l.type,n=l.pendingProps,n=l.elementType===t?n:Fe(t,n),Na(e,l,t,n,r);case 3:e:{if(Ra(l),e===null)throw Error(Q(387));t=l.pendingProps,s=l.memoizedState,n=s.element,K2(e,l),q1(l,t,null,r);var a=l.memoizedState;if(t=a.element,s.isDehydrated)if(s={element:t,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},l.updateQueue.baseState=s,l.memoizedState=s,l.flags&256){n=fl(Error(Q(423)),l),l=ja(e,l,t,r,n);break e}else if(t!==n){n=fl(Error(Q(424)),l),l=ja(e,l,t,r,n);break e}else for(xe=c0(l.stateNode.containerInfo.firstChild),Me=l,B=!0,Ie=null,r=G2(l,null,t,r),l.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(nl(),t===n){l=r0(e,l,r);break e}ce(e,l,t,r)}l=l.child}return l;case 5:return q2(l),e===null&&Vt(l),t=l.type,n=l.pendingProps,s=e!==null?e.memoizedProps:null,a=n.children,jt(t,n)?a=null:s!==null&&jt(t,s)&&(l.flags|=32),za(e,l),ce(e,l,a,r),l.child;case 6:return e===null&&Vt(l),null;case 13:return Ia(e,l,r);case 4:return qt(l,l.stateNode.containerInfo),t=l.pendingProps,e===null?l.child=sl(l,null,t,r):ce(e,l,t,r),l.child;case 11:return t=l.type,n=l.pendingProps,n=l.elementType===t?n:Fe(t,n),_a(e,l,t,n,r);case 7:return ce(e,l,l.pendingProps,r),l.child;case 8:return ce(e,l,l.pendingProps.children,r),l.child;case 12:return ce(e,l,l.pendingProps.children,r),l.child;case 10:e:{if(t=l.type._context,n=l.pendingProps,s=l.memoizedProps,a=n.value,O(K1,t._currentValue),t._currentValue=a,s!==null)if(je(s.value,a)){if(s.children===n.children&&!ve.current){l=r0(e,l,r);break e}}else for(s=l.child,s!==null&&(s.return=l);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var i=o.firstContext;i!==null;){if(i.context===t){if(s.tag===1){i=l0(-1,r&-r),i.tag=2;var f=s.updateQueue;if(f!==null){f=f.shared;var d=f.pending;d===null?i.next=i:(i.next=d.next,d.next=i),f.pending=i}}s.lanes|=r,i=s.alternate,i!==null&&(i.lanes|=r),Kt(s.return,r,l),o.lanes|=r;break}i=i.next}}else if(s.tag===10)a=s.type===l.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(Q(341));a.lanes|=r,o=a.alternate,o!==null&&(o.lanes|=r),Kt(a,r,l),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===l){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}ce(e,l,n.children,r),l=l.child}return l;case 9:return n=l.type,t=l.pendingProps.children,ol(l,r),n=Te(n),t=t(n),l.flags|=1,ce(e,l,t,r),l.child;case 14:return t=l.type,n=Fe(t,l.pendingProps),n=Fe(t.type,n),Ca(e,l,t,n,r);case 15:return Ta(e,l,l.type,l.pendingProps,r);case 17:return t=l.type,n=l.pendingProps,n=l.elementType===t?n:Fe(t,n),ar(e,l),l.tag=1,pe(t)?(e=!0,B1(l)):e=!1,ol(l,r),ma(l,t,n),hn(l,t,n,r),pn(null,l,t,!0,e,r);case 19:return Da(e,l,r);case 22:return Pa(e,l,r)}throw Error(Q(156,l.tag))};function oo(e,l){return $s(e,l)}function Xf(e,l,r,t){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,l,r,t){return new Xf(e,l,r,t)}function In(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qf(e){if(typeof e=="function")return In(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$r)return 11;if(e===Vr)return 14}return 2}function M0(e,l){var r=e.alternate;return r===null?(r=Ne(e.tag,l,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=l,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,l=e.dependencies,r.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Qr(e,l,r,t,n,s){var a=2;if(t=e,typeof e=="function")In(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case B0:return O0(r.children,n,s,l);case Or:a=8,n|=8;break;case Ar:return e=Ne(12,r,l,n|2),e.elementType=Ar,e.lanes=s,e;case Ur:return e=Ne(13,r,l,n),e.elementType=Ur,e.lanes=s,e;case Br:return e=Ne(19,r,l,n),e.elementType=Br,e.lanes=s,e;case ks:return yr(r,n,s,l);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vs:a=10;break e;case ps:a=9;break e;case $r:a=11;break e;case Vr:a=14;break e;case n0:a=16,t=null;break e}throw Error(Q(130,e==null?e:typeof e,""))}return l=Ne(a,r,l,n),l.elementType=e,l.type=t,l.lanes=s,l}function O0(e,l,r,t){return e=Ne(7,e,t,l),e.lanes=r,e}function yr(e,l,r,t){return e=Ne(22,e,t,l),e.elementType=ks,e.lanes=r,e.stateNode={isHidden:!1},e}function Fn(e,l,r){return e=Ne(6,e,null,l),e.lanes=r,e}function Dn(e,l,r){return l=Ne(4,e.children!==null?e.children:[],e.key,l),l.lanes=r,l.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},l}function Jf(e,l,r,t,n){this.tag=l,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ft(0),this.expirationTimes=ft(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ft(0),this.identifierPrefix=t,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function On(e,l,r,t,n,s,a,o,i){return e=new Jf(e,l,r,o,i),l===1?(l=1,s===!0&&(l|=8)):l=0,s=Ne(3,null,null,l),e.current=s,s.stateNode=e,s.memoizedState={element:t,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xt(s),e}function bf(e,l,r){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U0,key:t==null?null:""+t,children:e,containerInfo:l,implementation:r}}function io(e){if(!e)return v0;e=e._reactInternals;e:{if(E0(e)!==e||e.tag!==1)throw Error(Q(170));var l=e;do{switch(l.tag){case 3:l=l.stateNode.context;break e;case 1:if(pe(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break e}}l=l.return}while(l!==null);throw Error(Q(171))}if(e.tag===1){var r=e.type;if(pe(r))return F2(e,r,l)}return l}function fo(e,l,r,t,n,s,a,o,i){return e=On(r,t,!0,e,n,s,a,o,i),e.context=io(null),r=e.current,t=de(),n=L0(r),s=l0(t,n),s.callback=l??null,Q0(r,s,n),e.current.lanes=n,Sl(e,n,t),ye(e,t),e}function gr(e,l,r,t){var n=l.current,s=de(),a=L0(n);return r=io(r),l.context===null?l.context=r:l.pendingContext=r,l=l0(s,a),l.payload={element:e},t=t===void 0?null:t,t!==null&&(l.callback=t),e=Q0(n,l,a),e!==null&&(Ae(e,n,a,s),X1(e,n,a)),a}function mr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function uo(e,l){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<l?r:l}}function An(e,l){uo(e,l),(e=e.alternate)&&uo(e,l)}function e3(){return null}var ho=typeof reportError=="function"?reportError:function(e){console.error(e)};function $n(e){this._internalRoot=e}Lr.prototype.render=$n.prototype.render=function(e){var l=this._internalRoot;if(l===null)throw Error(Q(409));gr(e,l,null,null)},Lr.prototype.unmount=$n.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var l=e.containerInfo;I0(function(){gr(null,e,null,null)}),l[Xe]=null}};function Lr(e){this._internalRoot=e}Lr.prototype.unstable_scheduleHydration=function(e){if(e){var l=Ks();e={blockedOn:null,target:e,priority:l};for(var r=0;r<f0.length&&l!==0&&l<f0[r].priority;r++);f0.splice(r,0,e),r===0&&qs(e)}};function Un(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function co(){}function l3(e,l,r,t,n){if(n){if(typeof t=="function"){var s=t;t=function(){var f=mr(a);s.call(f)}}var a=fo(l,t,e,0,null,!1,!1,"",co);return e._reactRootContainer=a,e[Xe]=a.current,Al(e.nodeType===8?e.parentNode:e),I0(),a}for(;n=e.lastChild;)e.removeChild(n);if(typeof t=="function"){var o=t;t=function(){var f=mr(i);o.call(f)}}var i=On(e,0,!1,null,null,!1,!1,"",co);return e._reactRootContainer=i,e[Xe]=i.current,Al(e.nodeType===8?e.parentNode:e),I0(function(){gr(l,i,r,t)}),i}function Mr(e,l,r,t,n){var s=r._reactRootContainer;if(s){var a=s;if(typeof n=="function"){var o=n;n=function(){var i=mr(a);o.call(i)}}gr(l,a,e,n)}else a=l3(r,l,e,n,t);return mr(a)}Gs=function(e){switch(e.tag){case 3:var l=e.stateNode;if(l.current.memoizedState.isDehydrated){var r=xl(l.pendingLanes);r!==0&&(ut(l,r|1),ye(l,Z()),!(R&6)&&(cl=Z()+500,p0()))}break;case 13:I0(function(){var t=e0(e,1);if(t!==null){var n=de();Ae(t,e,1,n)}}),An(e,1)}},ht=function(e){if(e.tag===13){var l=e0(e,134217728);if(l!==null){var r=de();Ae(l,e,134217728,r)}An(e,134217728)}},Zs=function(e){if(e.tag===13){var l=L0(e),r=e0(e,l);if(r!==null){var t=de();Ae(r,e,l,t)}An(e,l)}},Ks=function(){return I},Ys=function(e,l){var r=I;try{return I=e,l()}finally{I=r}},tt=function(e,l,r){switch(l){case"input":if(Yr(e,r),l=r.name,r.type==="radio"&&l!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+l)+'][type="radio"]'),l=0;l<r.length;l++){var t=r[l];if(t!==e&&t.form===e.form){var n=$1(t);if(!n)throw Error(Q(90));gs(t),Yr(t,n)}}}break;case"textarea":xs(e,r);break;case"select":l=r.value,l!=null&&V0(e,!!r.multiple,l,!1)}},Rs=Nn,js=I0;var r3={usingClientEntryPoint:!1,Events:[Bl,b0,$1,zs,Ns,Nn]},r1={findFiberByHostInstance:_0,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},t3={bundleType:r1.bundleType,version:r1.version,rendererPackageName:r1.rendererPackageName,rendererConfig:r1.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ye.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Os(e),e===null?null:e.stateNode},findFiberByHostInstance:r1.findFiberByHostInstance||e3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xr.isDisabled&&xr.supportsFiber)try{L1=xr.inject(t3),Ue=xr}catch{}}me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r3,me.createPortal=function(e,l){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Un(l))throw Error(Q(200));return bf(e,l,null,r)},me.createRoot=function(e,l){if(!Un(e))throw Error(Q(299));var r=!1,t="",n=ho;return l!=null&&(l.unstable_strictMode===!0&&(r=!0),l.identifierPrefix!==void 0&&(t=l.identifierPrefix),l.onRecoverableError!==void 0&&(n=l.onRecoverableError)),l=On(e,1,!1,null,null,r,!1,t,n),e[Xe]=l.current,Al(e.nodeType===8?e.parentNode:e),new $n(l)},me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var l=e._reactInternals;if(l===void 0)throw typeof e.render=="function"?Error(Q(188)):(e=Object.keys(e).join(","),Error(Q(268,e)));return e=Os(l),e=e===null?null:e.stateNode,e},me.flushSync=function(e){return I0(e)},me.hydrate=function(e,l,r){if(!wr(l))throw Error(Q(200));return Mr(null,e,l,!0,r)},me.hydrateRoot=function(e,l,r){if(!Un(e))throw Error(Q(405));var t=r!=null&&r.hydratedSources||null,n=!1,s="",a=ho;if(r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),l=fo(l,null,e,1,r??null,n,!1,s,a),e[Xe]=l.current,Al(e),t)for(e=0;e<t.length;e++)r=t[e],n=r._getVersion,n=n(r._source),l.mutableSourceEagerHydrationData==null?l.mutableSourceEagerHydrationData=[r,n]:l.mutableSourceEagerHydrationData.push(r,n);return new Lr(l)},me.render=function(e,l,r){if(!wr(l))throw Error(Q(200));return Mr(null,e,l,!1,r)},me.unmountComponentAtNode=function(e){if(!wr(e))throw Error(Q(40));return e._reactRootContainer?(I0(function(){Mr(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1},me.unstable_batchedUpdates=Nn,me.unstable_renderSubtreeIntoContainer=function(e,l,r,t){if(!wr(r))throw Error(Q(200));if(e==null||e._reactInternals===void 0)throw Error(Q(38));return Mr(e,l,r,!1,t)},me.version="18.3.1-next-f1338f8080-20240426";function vo(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vo)}catch(e){console.error(e)}}vo(),is.exports=me;var n3=is.exports,po,ko=n3;po=ko.createRoot,ko.hydrateRoot;function s3(e){let l=e>>>0;return function(){l=l+1831565813>>>0;let t=l;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const t1=(e,l)=>e+(l-e)*Math.random(),a3=110,o3=8,i3=["top","right","bottom","left"],Qo=.04,f3=.65,n1=new Map;function yo(e){const l=n1.get(e);if(l)return l;const r=s3(e),t=(a,o)=>a+(o-a)*r(),n=[];for(let a=0;a<a3;a++){const o=Math.pow(r(),1.2);n.push({id:a,design:1+Math.floor(r()*o3),edge:i3[Math.floor(r()*4)],along:t(0,1),size:20+o*65+t(-5,5),tilt:t(-20,20),flip:r()<.5,birth:Qo+o*(f3-Qo),grow:t(.12,.3)})}const s={seed:e,clusters:n,totalArea:n.reduce((a,o)=>a+o.size*o.size,0)};return n1.set(e,s),n1.size>60&&n1.delete(n1.keys().next().value),s}const go=.05,u3=e=>e<0?0:e>1?1:e;function h3(e,l=Date.now()){if(e.neglect==null&&e.start)return Math.max(0,l-e.start);const r=e.neglectSince?l-e.neglectSince:0;return Math.max(0,(e.neglect||0)+r)}function Sr(e,l,r=Date.now()){return h3(e,r)/(l*6e4)}function Er(e,l,r){const t=new Set(l.cut||[]),n=new Float32Array(e.clusters.length);let s=0;for(const a of e.clusters){const o=t.has(a.id)?0:u3((r-a.birth)/a.grow);n[a.id]=o,s+=o*a.size*a.size}return{f:r,grown:n,coverage:s/e.totalArea}}const s1=e=>e.coverage>go;function c3(e,l,r=Date.now()){return Er(yo(e.seed),e,Sr(e,l,r))}const a1={enabled:!0,minutes:1440,blade:"rusty"};async function d3(){return{...a1,...await chrome.storage.sync.get(a1)}}function v3(e,l){return chrome.storage.sync.set({[e]:l})}function p3(e){const l=(r,t)=>{if(t!=="sync")return;const n={};let s=!1;for(const a in a1)r[a]&&(n[a]=r[a].newValue??a1[a],s=!0);s&&e(n)};return chrome.storage.onChanged.addListener(l),()=>chrome.storage.onChanged.removeListener(l)}const mo=[{id:"rusty",name:"Rusty machete",emoji:"🔪",reach:0,trail:{glow:"190,255,170",core:"255,255,255",width:1},bits:null,sound:"leaf"},{id:"chainsaw",name:"Chainsaw",emoji:"🪚",reach:22,trail:{glow:"255,190,90",core:"255,240,200",width:2.2},bits:["#f5c542","#3e7a26","#a3a3a3","#4a5a22"],sound:"saw"},{id:"flamethrower",name:"Flamethrower",emoji:"🔥",reach:34,trail:{glow:"255,120,30",core:"255,220,120",width:3.2},bits:["#ff6a00","#ffb300","#ff3d00","#3a2a1a"],sound:"fire"}],k3=e=>mo.find(l=>l.id===e)||mo[0],Q3=e=>`tab:${e}`;function y3(e){return{seed:Math.random()*4294967296>>>0,neglect:0,neglectSince:Date.now(),cut:[],url:e||""}}function g3(e){const{cuts:l,leafCuts:r,...t}=e,n={...t,cut:e.cut||[]};return n.neglect==null&&(n.neglect=n.start?Date.now()-n.start:0,n.neglectSince=Date.now(),delete n.start),n}function m3(){const[e,l]=T.useState(null);T.useEffect(()=>{let t=!0;d3().then(s=>t&&l(s));const n=p3(s=>l(a=>({...a||a1,...s})));return()=>{t=!1,n()}},[]);const r=T.useCallback((t,n)=>{l(s=>({...s,[t]:n})),v3(t,n)},[]);return[e,r]}const L3=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 260" width="200" height="260">
  <defs>
    <path id="v1-leaf-0" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.18 -0.2 L0.22 -0.28 L0.34 -0.16 L0.38 -0.17 L0.46 -0.31 L0.56 -0.31 L0.5 -0.12 L0.53 -0.08 L0.76 -0.1 L0.96 0 L0.76 0.1 L0.53 0.09 L0.5 0.12 L0.55 0.29 L0.46 0.28 L0.38 0.17 L0.34 0.16 L0.26 0.21 L0.23 0.15 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v1-veins-0" d="M0.23 0 L0.85 0 M0.23 0 L0.5 0.26 M0.23 0 L0.51 -0.28 M0.23 0 L0.25 0.17 M0.23 0 L0.22 -0.23"/>
    <path id="v1-leaf-1" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.24 -0.14 L0.27 -0.19 L0.34 -0.16 L0.38 -0.17 L0.48 -0.38 L0.6 -0.38 L0.5 -0.12 L0.53 -0.08 L0.77 -0.11 L0.98 0 L0.77 0.11 L0.53 0.09 L0.5 0.12 L0.56 0.31 L0.46 0.31 L0.38 0.17 L0.34 0.16 L0.25 0.22 L0.22 0.16 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v1-veins-1" d="M0.23 0 L0.86 0 M0.23 0 L0.51 0.29 M0.23 0 L0.54 -0.35 M0.23 0 L0.25 0.18 M0.23 0 L0.26 -0.16"/>
    <path id="v1-leaf-2" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.23 -0.15 L0.26 -0.21 L0.34 -0.16 L0.38 -0.17 L0.48 -0.37 L0.6 -0.37 L0.5 -0.12 L0.53 -0.08 L0.82 -0.12 L1.06 0 L0.82 0.12 L0.53 0.09 L0.5 0.12 L0.6 0.37 L0.48 0.37 L0.38 0.17 L0.34 0.16 L0.27 0.19 L0.24 0.14 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v1-veins-2" d="M0.23 0 L0.92 0 M0.23 0 L0.53 0.34 M0.23 0 L0.53 -0.34 M0.23 0 L0.26 0.16 M0.23 0 L0.26 -0.17"/>
    <path id="v1-leaf-3" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.21 -0.17 L0.25 -0.23 L0.34 -0.16 L0.38 -0.17 L0.47 -0.34 L0.58 -0.34 L0.5 -0.12 L0.53 -0.08 L0.78 -0.11 L0.98 0 L0.78 0.11 L0.53 0.09 L0.5 0.12 L0.55 0.29 L0.46 0.29 L0.38 0.17 L0.34 0.16 L0.24 0.25 L0.2 0.18 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v1-veins-3" d="M0.23 0 L0.86 0 M0.23 0 L0.5 0.27 M0.23 0 L0.52 -0.31 M0.23 0 L0.23 0.2 M0.23 0 L0.24 -0.19"/>
    <path id="v1-leaf-4" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.22 -0.16 L0.26 -0.21 L0.34 -0.16 L0.38 -0.17 L0.46 -0.3 L0.55 -0.3 L0.5 -0.12 L0.53 -0.08 L0.75 -0.1 L0.94 0 L0.75 0.1 L0.53 0.09 L0.5 0.12 L0.56 0.31 L0.46 0.31 L0.38 0.17 L0.34 0.16 L0.23 0.26 L0.19 0.19 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v1-veins-4" d="M0.23 0 L0.83 0 M0.23 0 L0.51 0.28 M0.23 0 L0.5 -0.27 M0.23 0 L0.22 0.22 M0.23 0 L0.25 -0.18"/>
    <path id="v1-leaf-5" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.18 -0.2 L0.22 -0.28 L0.34 -0.16 L0.38 -0.17 L0.47 -0.34 L0.58 -0.34 L0.5 -0.12 L0.53 -0.08 L0.8 -0.11 L1.02 0 L0.8 0.11 L0.53 0.09 L0.5 0.12 L0.57 0.34 L0.47 0.33 L0.38 0.17 L0.34 0.16 L0.23 0.26 L0.19 0.19 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v1-veins-5" d="M0.23 0 L0.9 0 M0.23 0 L0.52 0.31 M0.23 0 L0.52 -0.31 M0.23 0 L0.22 0.21 M0.23 0 L0.21 -0.23"/>
    <linearGradient id="v1-shade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#000" stop-opacity="0.42"/>
      <stop offset="0.4" stop-color="#000" stop-opacity="0.06"/>
      <stop offset="0.75" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.18"/>
    </linearGradient>
    <linearGradient id="v1-under" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0.45" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.22"/>
    </linearGradient>
    <radialGradient id="v1-sheen" cx="0.45" cy="0.3" r="0.55">
      <stop offset="0" stop-color="#f4f6dc" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#f4f6dc" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- Soft shadows under the stems -->
  <g fill="none" stroke="#000" stroke-opacity="0.22" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 3)">
    <path d="M92.1 262 Q90.9 249.3 89.4 243.2 Q87.9 237 85.6 231.1 Q83.3 225.1 80.9 219.2 Q78.6 213.3 76.6 207.3 Q74.6 201.2 73.3 195 Q72 188.8 71.9 182.4 Q71.8 176.1 72.3 169.7 Q72.8 163.4 73 157 Q73.1 150.7 71.9 144.4 L70.6 138.2" stroke-width="7"/>
    <path d="M93.2 262 Q86.8 250.6 82.8 245.3 Q78.9 240.1 74.7 235.1 Q70.4 230.1 66.5 224.8 Q62.6 219.5 59.9 213.6 Q57.2 207.6 55.1 201.4 Q53 195.2 51.3 188.9 Q49.5 182.6 47.9 176.2 Q46.2 169.9 43.9 163.7 Q41.6 157.6 38.4 151.9 Q35.1 146.2 31 141.1 Q27 135.9 22.9 130.8 L18.8 125.7" stroke-width="7.3"/>
    <path d="M117.1 141.9 Q125.2 143.7 129.1 145.1 Q133 146.6 136.7 148.5 L140.3 150.5" stroke-width="1.7"/>
    <path d="M74.6 201.2 Q79.7 193.5 82 189.5 Q84.3 185.5 86.4 181.4 Q88.4 177.2 90.4 173 Q92.3 168.8 94.9 165 Q97.5 161.2 100.4 157.6 Q103.3 154 106.4 150.6 Q109.5 147.2 113.3 144.5 Q117.1 141.9 121.3 139.9 Q125.4 137.9 129.6 135.9 Q133.8 134 138.1 132.3 Q142.4 130.6 146.7 129 L151.1 127.5" stroke-width="2.1"/>
    <path d="M72 188.8 Q82 184 87.2 181.9 Q92.3 179.8 97.5 177.9 Q102.7 175.9 107.9 173.8 Q113 171.7 118.3 169.9 Q123.5 168.1 129 167.4 Q134.6 166.7 140.1 167.4 L145.6 168.1" stroke-width="2.6"/>
    <path d="M70.6 138.2 Q68.7 128.2 67.5 123.3 Q66.3 118.3 65.8 113.3 Q65.2 108.2 65.6 103.2 Q66 98.1 66.9 93.1 Q67.9 88.1 68.5 83 L69.1 78" stroke-width="2.3"/>
    <path d="M56.3 155.9 Q49.8 149.7 46.2 147.1 Q42.6 144.4 38.6 142.5 Q34.6 140.6 30.3 139.3 L26 138" stroke-width="1.9"/>
    <path d="M53 195.2 Q55.3 185.5 55.9 180.6 Q56.4 175.7 56.5 170.7 Q56.7 165.8 56.5 160.8 Q56.3 155.9 56 150.9 Q55.7 146 55.8 141 Q55.9 136.1 57 131.2 Q58.1 126.4 58.9 121.5 Q59.8 116.6 60.5 111.7 Q61.3 106.8 62.1 101.9 Q62.8 97 63.3 92.1 L63.8 87.2" stroke-width="2.5"/>
    <path d="M49.5 182.6 Q52.6 172.7 54 167.6 Q55.3 162.6 56.1 157.5 Q56.8 152.4 57.9 147.3 Q59 142.2 61 137.4 Q62.9 132.6 65.1 127.9 Q67.3 123.2 69.8 118.7 Q72.3 114.1 74.4 109.4 Q76.4 104.6 77.9 99.7 Q79.4 94.7 80.2 89.6 Q81 84.4 81.9 79.3 Q82.9 74.2 84.1 69.2 L85.4 64.2" stroke-width="2.7"/>
    <path d="M21.5 112.7 Q20.1 104.2 18.7 100.1 Q17.3 96.1 18.1 91.9 L19 87.6" stroke-width="2"/>
    <path d="M46.2 169.9 Q39.1 163.5 35.7 160.1 Q32.3 156.7 28.7 153.6 Q25.1 150.4 20.9 148 Q16.8 145.7 14.1 141.7 Q11.4 137.8 11.2 133 Q11.1 128.2 12.8 123.8 Q14.6 119.3 18.1 116 L21.5 112.7" stroke-width="2.7"/>
    <path d="M22.4 83.5 Q31.1 77.7 35.1 74.3 Q39 70.8 42.7 67.1 L46.4 63.4" stroke-width="2"/>
    <path d="M26.2 72.5 Q34.9 66.8 38.3 62.8 Q41.7 58.8 45.2 54.9 L48.6 50.9" stroke-width="2"/>
    <path d="M32.6 50.2 Q42.3 46.2 47.2 44.2 Q52 42.1 56.6 39.7 L61.3 37.3" stroke-width="2"/>
    <path d="M18.8 125.7 Q12.2 116.1 12.4 110.3 Q12.7 104.5 15.6 99.5 Q18.5 94.5 20.5 89 Q22.4 83.5 24.3 78 Q26.2 72.5 27.6 66.9 Q29.1 61.2 30.9 55.7 L32.6 50.2" stroke-width="2.5"/>
  </g>
  <!-- Trailing shoots: green-brown, with a thin highlight -->
  <g fill="none" stroke="hsl(68 22% 21%)" stroke-linecap="round" stroke-linejoin="round">
    <path d="M117.1 141.9 Q125.2 143.7 129.1 145.1 Q133 146.6 136.7 148.5 L140.3 150.5" stroke-width="1"/>
    <path d="M74.6 201.2 Q79.7 193.5 82 189.5 Q84.3 185.5 86.4 181.4 Q88.4 177.2 90.4 173 Q92.3 168.8 94.9 165 Q97.5 161.2 100.4 157.6 Q103.3 154 106.4 150.6 Q109.5 147.2 113.3 144.5 Q117.1 141.9 121.3 139.9 Q125.4 137.9 129.6 135.9 Q133.8 134 138.1 132.3 Q142.4 130.6 146.7 129 L151.1 127.5" stroke-width="1.4"/>
    <path d="M72 188.8 Q82 184 87.2 181.9 Q92.3 179.8 97.5 177.9 Q102.7 175.9 107.9 173.8 Q113 171.7 118.3 169.9 Q123.5 168.1 129 167.4 Q134.6 166.7 140.1 167.4 L145.6 168.1" stroke-width="1.9"/>
    <path d="M70.6 138.2 Q68.7 128.2 67.5 123.3 Q66.3 118.3 65.8 113.3 Q65.2 108.2 65.6 103.2 Q66 98.1 66.9 93.1 Q67.9 88.1 68.5 83 L69.1 78" stroke-width="1.6"/>
    <path d="M56.3 155.9 Q49.8 149.7 46.2 147.1 Q42.6 144.4 38.6 142.5 Q34.6 140.6 30.3 139.3 L26 138" stroke-width="1.2"/>
    <path d="M53 195.2 Q55.3 185.5 55.9 180.6 Q56.4 175.7 56.5 170.7 Q56.7 165.8 56.5 160.8 Q56.3 155.9 56 150.9 Q55.7 146 55.8 141 Q55.9 136.1 57 131.2 Q58.1 126.4 58.9 121.5 Q59.8 116.6 60.5 111.7 Q61.3 106.8 62.1 101.9 Q62.8 97 63.3 92.1 L63.8 87.2" stroke-width="1.8"/>
    <path d="M49.5 182.6 Q52.6 172.7 54 167.6 Q55.3 162.6 56.1 157.5 Q56.8 152.4 57.9 147.3 Q59 142.2 61 137.4 Q62.9 132.6 65.1 127.9 Q67.3 123.2 69.8 118.7 Q72.3 114.1 74.4 109.4 Q76.4 104.6 77.9 99.7 Q79.4 94.7 80.2 89.6 Q81 84.4 81.9 79.3 Q82.9 74.2 84.1 69.2 L85.4 64.2" stroke-width="2"/>
    <path d="M21.5 112.7 Q20.1 104.2 18.7 100.1 Q17.3 96.1 18.1 91.9 L19 87.6" stroke-width="1.4"/>
    <path d="M46.2 169.9 Q39.1 163.5 35.7 160.1 Q32.3 156.7 28.7 153.6 Q25.1 150.4 20.9 148 Q16.8 145.7 14.1 141.7 Q11.4 137.8 11.2 133 Q11.1 128.2 12.8 123.8 Q14.6 119.3 18.1 116 L21.5 112.7" stroke-width="2"/>
    <path d="M22.4 83.5 Q31.1 77.7 35.1 74.3 Q39 70.8 42.7 67.1 L46.4 63.4" stroke-width="1.3"/>
    <path d="M26.2 72.5 Q34.9 66.8 38.3 62.8 Q41.7 58.8 45.2 54.9 L48.6 50.9" stroke-width="1.3"/>
    <path d="M32.6 50.2 Q42.3 46.2 47.2 44.2 Q52 42.1 56.6 39.7 L61.3 37.3" stroke-width="1.3"/>
    <path d="M18.8 125.7 Q12.2 116.1 12.4 110.3 Q12.7 104.5 15.6 99.5 Q18.5 94.5 20.5 89 Q22.4 83.5 24.3 78 Q26.2 72.5 27.6 66.9 Q29.1 61.2 30.9 55.7 L32.6 50.2" stroke-width="1.8"/>
  </g>
  <g fill="none" stroke="hsl(70 25% 40%)" stroke-opacity="0.45" stroke-linecap="round" transform="translate(-0.4 -0.3)">
    <path d="M117.1 141.9 Q125.2 143.7 129.1 145.1 Q133 146.6 136.7 148.5 L140.3 150.5" stroke-width="0.3"/>
    <path d="M74.6 201.2 Q79.7 193.5 82 189.5 Q84.3 185.5 86.4 181.4 Q88.4 177.2 90.4 173 Q92.3 168.8 94.9 165 Q97.5 161.2 100.4 157.6 Q103.3 154 106.4 150.6 Q109.5 147.2 113.3 144.5 Q117.1 141.9 121.3 139.9 Q125.4 137.9 129.6 135.9 Q133.8 134 138.1 132.3 Q142.4 130.6 146.7 129 L151.1 127.5" stroke-width="0.4"/>
    <path d="M72 188.8 Q82 184 87.2 181.9 Q92.3 179.8 97.5 177.9 Q102.7 175.9 107.9 173.8 Q113 171.7 118.3 169.9 Q123.5 168.1 129 167.4 Q134.6 166.7 140.1 167.4 L145.6 168.1" stroke-width="0.6"/>
    <path d="M70.6 138.2 Q68.7 128.2 67.5 123.3 Q66.3 118.3 65.8 113.3 Q65.2 108.2 65.6 103.2 Q66 98.1 66.9 93.1 Q67.9 88.1 68.5 83 L69.1 78" stroke-width="0.5"/>
    <path d="M56.3 155.9 Q49.8 149.7 46.2 147.1 Q42.6 144.4 38.6 142.5 Q34.6 140.6 30.3 139.3 L26 138" stroke-width="0.4"/>
    <path d="M53 195.2 Q55.3 185.5 55.9 180.6 Q56.4 175.7 56.5 170.7 Q56.7 165.8 56.5 160.8 Q56.3 155.9 56 150.9 Q55.7 146 55.8 141 Q55.9 136.1 57 131.2 Q58.1 126.4 58.9 121.5 Q59.8 116.6 60.5 111.7 Q61.3 106.8 62.1 101.9 Q62.8 97 63.3 92.1 L63.8 87.2" stroke-width="0.5"/>
    <path d="M49.5 182.6 Q52.6 172.7 54 167.6 Q55.3 162.6 56.1 157.5 Q56.8 152.4 57.9 147.3 Q59 142.2 61 137.4 Q62.9 132.6 65.1 127.9 Q67.3 123.2 69.8 118.7 Q72.3 114.1 74.4 109.4 Q76.4 104.6 77.9 99.7 Q79.4 94.7 80.2 89.6 Q81 84.4 81.9 79.3 Q82.9 74.2 84.1 69.2 L85.4 64.2" stroke-width="0.6"/>
    <path d="M21.5 112.7 Q20.1 104.2 18.7 100.1 Q17.3 96.1 18.1 91.9 L19 87.6" stroke-width="0.4"/>
    <path d="M46.2 169.9 Q39.1 163.5 35.7 160.1 Q32.3 156.7 28.7 153.6 Q25.1 150.4 20.9 148 Q16.8 145.7 14.1 141.7 Q11.4 137.8 11.2 133 Q11.1 128.2 12.8 123.8 Q14.6 119.3 18.1 116 L21.5 112.7" stroke-width="0.6"/>
    <path d="M22.4 83.5 Q31.1 77.7 35.1 74.3 Q39 70.8 42.7 67.1 L46.4 63.4" stroke-width="0.4"/>
    <path d="M26.2 72.5 Q34.9 66.8 38.3 62.8 Q41.7 58.8 45.2 54.9 L48.6 50.9" stroke-width="0.4"/>
    <path d="M32.6 50.2 Q42.3 46.2 47.2 44.2 Q52 42.1 56.6 39.7 L61.3 37.3" stroke-width="0.4"/>
    <path d="M18.8 125.7 Q12.2 116.1 12.4 110.3 Q12.7 104.5 15.6 99.5 Q18.5 94.5 20.5 89 Q22.4 83.5 24.3 78 Q26.2 72.5 27.6 66.9 Q29.1 61.2 30.9 55.7 L32.6 50.2" stroke-width="0.5"/>
  </g>
  <!-- Woody trunks: tapering, shaded round, with streaky bark -->
  <g fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M92.1 262 Q90.9 249.3 89.4 243.2 Q87.9 237 85.6 231.1 Q83.3 225.1 80.9 219.2 Q78.6 213.3 76.6 207.3 Q74.6 201.2 73.3 195 Q72 188.8 71.9 182.4 Q71.8 176.1 72.3 169.7 Q72.8 163.4 73 157 Q73.1 150.7 71.9 144.4 L70.6 138.2" stroke="hsl(30 14% 19%)" stroke-width="2.9"/>
    <path d="M92.1 262 Q90.9 249.3 89.4 243.2 Q87.9 237 85.6 231.1 Q83.3 225.1 80.9 219.2 Q78.6 213.3 76.6 207.3 Q74.6 201.2 73.3 195 Q72 188.8 71.9 182.4 L71.8 176.1" stroke="hsl(30 14% 19%)" stroke-width="4.8"/>
    <path d="M92.1 262 Q90.9 249.3 89.4 243.2 Q87.9 237 85.6 231.1 Q83.3 225.1 80.9 219.2 L78.6 213.3" stroke="hsl(30 14% 19%)" stroke-width="6.4"/>
    <path d="M92.1 262 Q90.9 249.3 89.4 243.2 Q87.9 237 85.6 231.1 Q83.3 225.1 80.9 219.2 Q78.6 213.3 76.6 207.3 Q74.6 201.2 73.3 195 Q72 188.8 71.9 182.4 Q71.8 176.1 72.3 169.7 Q72.8 163.4 73 157 Q73.1 150.7 71.9 144.4 L70.6 138.2" stroke="#000" stroke-opacity="0.28" stroke-width="1" transform="translate(0.6 0.3)"/>
    <path d="M92.1 262 Q90.9 249.3 89.4 243.2 Q87.9 237 85.6 231.1 Q83.3 225.1 80.9 219.2 Q78.6 213.3 76.6 207.3 Q74.6 201.2 73.3 195 Q72 188.8 71.9 182.4 L71.8 176.1" stroke="#000" stroke-opacity="0.28" stroke-width="1.7" transform="translate(1.1 0.6)"/>
    <path d="M92.1 262 Q90.9 249.3 89.4 243.2 Q87.9 237 85.6 231.1 Q83.3 225.1 80.9 219.2 L78.6 213.3" stroke="#000" stroke-opacity="0.28" stroke-width="2.2" transform="translate(1.4 0.8)"/>
    <path d="M92.1 262 Q90.9 249.3 89.4 243.2 Q87.9 237 85.6 231.1 Q83.3 225.1 80.9 219.2 Q78.6 213.3 76.6 207.3 Q74.6 201.2 73.3 195 Q72 188.8 71.9 182.4 Q71.8 176.1 72.3 169.7 Q72.8 163.4 73 157 Q73.1 150.7 71.9 144.4 L70.6 138.2" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="0.5" transform="translate(-0.6 -0.3)"/>
    <path d="M92.1 262 Q90.9 249.3 89.4 243.2 Q87.9 237 85.6 231.1 Q83.3 225.1 80.9 219.2 Q78.6 213.3 76.6 207.3 Q74.6 201.2 73.3 195 Q72 188.8 71.9 182.4 L71.8 176.1" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="0.9" transform="translate(-1.1 -0.5)"/>
    <path d="M92.1 262 Q90.9 249.3 89.4 243.2 Q87.9 237 85.6 231.1 Q83.3 225.1 80.9 219.2 L78.6 213.3" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="1.1" transform="translate(-1.4 -0.6)"/>
    <path d="M92.1 262 Q90.9 249.3 89.4 243.2 Q87.9 237 85.6 231.1 Q83.3 225.1 80.9 219.2 Q78.6 213.3 76.6 207.3 Q74.6 201.2 73.3 195 Q72 188.8 71.9 182.4 L71.8 176.1" stroke="hsl(30 12% 9%)" stroke-opacity="0.55" stroke-width="1.3" stroke-dasharray="8.3 3.9 3.4 3.3"/>
    <path d="M92.1 262 Q90.9 249.3 89.4 243.2 Q87.9 237 85.6 231.1 Q83.3 225.1 80.9 219.2 Q78.6 213.3 76.6 207.3 Q74.6 201.2 73.3 195 Q72 188.8 71.9 182.4 L71.8 176.1" stroke="hsl(36 14% 38%)" stroke-opacity="0.35" stroke-width="0.8" stroke-dasharray="2.3 7.8" transform="translate(-0.8 0)"/>
  </g>
  <g fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M93.2 262 Q86.8 250.6 82.8 245.3 Q78.9 240.1 74.7 235.1 Q70.4 230.1 66.5 224.8 Q62.6 219.5 59.9 213.6 Q57.2 207.6 55.1 201.4 Q53 195.2 51.3 188.9 Q49.5 182.6 47.9 176.2 Q46.2 169.9 43.9 163.7 Q41.6 157.6 38.4 151.9 Q35.1 146.2 31 141.1 Q27 135.9 22.9 130.8 L18.8 125.7" stroke="hsl(30 14% 19%)" stroke-width="3"/>
    <path d="M93.2 262 Q86.8 250.6 82.8 245.3 Q78.9 240.1 74.7 235.1 Q70.4 230.1 66.5 224.8 Q62.6 219.5 59.9 213.6 Q57.2 207.6 55.1 201.4 Q53 195.2 51.3 188.9 Q49.5 182.6 47.9 176.2 Q46.2 169.9 43.9 163.7 L41.6 157.6" stroke="hsl(30 14% 19%)" stroke-width="5"/>
    <path d="M93.2 262 Q86.8 250.6 82.8 245.3 Q78.9 240.1 74.7 235.1 Q70.4 230.1 66.5 224.8 Q62.6 219.5 59.9 213.6 L57.2 207.6" stroke="hsl(30 14% 19%)" stroke-width="6.6"/>
    <path d="M93.2 262 Q86.8 250.6 82.8 245.3 Q78.9 240.1 74.7 235.1 Q70.4 230.1 66.5 224.8 Q62.6 219.5 59.9 213.6 Q57.2 207.6 55.1 201.4 Q53 195.2 51.3 188.9 Q49.5 182.6 47.9 176.2 Q46.2 169.9 43.9 163.7 Q41.6 157.6 38.4 151.9 Q35.1 146.2 31 141.1 Q27 135.9 22.9 130.8 L18.8 125.7" stroke="#000" stroke-opacity="0.28" stroke-width="1" transform="translate(0.7 0.4)"/>
    <path d="M93.2 262 Q86.8 250.6 82.8 245.3 Q78.9 240.1 74.7 235.1 Q70.4 230.1 66.5 224.8 Q62.6 219.5 59.9 213.6 Q57.2 207.6 55.1 201.4 Q53 195.2 51.3 188.9 Q49.5 182.6 47.9 176.2 Q46.2 169.9 43.9 163.7 L41.6 157.6" stroke="#000" stroke-opacity="0.28" stroke-width="1.7" transform="translate(1.1 0.6)"/>
    <path d="M93.2 262 Q86.8 250.6 82.8 245.3 Q78.9 240.1 74.7 235.1 Q70.4 230.1 66.5 224.8 Q62.6 219.5 59.9 213.6 L57.2 207.6" stroke="#000" stroke-opacity="0.28" stroke-width="2.3" transform="translate(1.5 0.8)"/>
    <path d="M93.2 262 Q86.8 250.6 82.8 245.3 Q78.9 240.1 74.7 235.1 Q70.4 230.1 66.5 224.8 Q62.6 219.5 59.9 213.6 Q57.2 207.6 55.1 201.4 Q53 195.2 51.3 188.9 Q49.5 182.6 47.9 176.2 Q46.2 169.9 43.9 163.7 Q41.6 157.6 38.4 151.9 Q35.1 146.2 31 141.1 Q27 135.9 22.9 130.8 L18.8 125.7" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="0.5" transform="translate(-0.7 -0.3)"/>
    <path d="M93.2 262 Q86.8 250.6 82.8 245.3 Q78.9 240.1 74.7 235.1 Q70.4 230.1 66.5 224.8 Q62.6 219.5 59.9 213.6 Q57.2 207.6 55.1 201.4 Q53 195.2 51.3 188.9 Q49.5 182.6 47.9 176.2 Q46.2 169.9 43.9 163.7 L41.6 157.6" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="0.9" transform="translate(-1.1 -0.5)"/>
    <path d="M93.2 262 Q86.8 250.6 82.8 245.3 Q78.9 240.1 74.7 235.1 Q70.4 230.1 66.5 224.8 Q62.6 219.5 59.9 213.6 L57.2 207.6" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="1.2" transform="translate(-1.5 -0.7)"/>
    <path d="M93.2 262 Q86.8 250.6 82.8 245.3 Q78.9 240.1 74.7 235.1 Q70.4 230.1 66.5 224.8 Q62.6 219.5 59.9 213.6 Q57.2 207.6 55.1 201.4 Q53 195.2 51.3 188.9 Q49.5 182.6 47.9 176.2 Q46.2 169.9 43.9 163.7 L41.6 157.6" stroke="hsl(30 12% 9%)" stroke-opacity="0.55" stroke-width="1.3" stroke-dasharray="4.3 3.1 2.5 3.7"/>
    <path d="M93.2 262 Q86.8 250.6 82.8 245.3 Q78.9 240.1 74.7 235.1 Q70.4 230.1 66.5 224.8 Q62.6 219.5 59.9 213.6 Q57.2 207.6 55.1 201.4 Q53 195.2 51.3 188.9 Q49.5 182.6 47.9 176.2 Q46.2 169.9 43.9 163.7 L41.6 157.6" stroke="hsl(36 14% 38%)" stroke-opacity="0.35" stroke-width="0.8" stroke-dasharray="4.2 6.5" transform="translate(-0.8 0)"/>
  </g>
  <!-- Fine hairy rootlets -->
  <path fill="none" stroke="hsl(30 18% 20%)" stroke-opacity="0.6" stroke-width="0.5" stroke-linecap="round" d="M91.4 257.6 l2.2 -0.8 M91.1 252.7 l-3.6 0.1 M91.9 257.3 l5.8 -0.1 M91.9 260.2 l-5.3 2 M90.7 249.3 l4.6 -2.4 M90.3 246.8 l-4.7 0.2 M89.2 248.4 l-5.2 2.1 M89.7 247.8 l4.3 -2.5 M84.4 229.5 l-3.3 1.7 M85.4 232.1 l4.5 -0.7 M87.4 232.8 l-2.6 0.3 M84.7 226.5 l-2.8 2.3 M82.9 213.3 l4.3 -2.3 M82.9 222.5 l3.2 -1.1 M81 220.7 l4.2 -2.2 M81.4 218.8 l-2.8 0.3 M76.2 209.8 l-1.8 0.6 M77.9 208.3 l3.7 -2.9 M77.6 202.7 l-2.7 0.8 M75.3 204.6 l-4.1 1.1 M72.6 191.3 l-2.5 -0.4 M73.1 199.4 l3.8 -0.6 M72.8 198.3 l-2.7 1.1 M73 189.9 l-2 0.7 M71.8 186.8 l3.5 -0.1 M71.8 184.6 l3.1 0.5 M72 177.2 l-4.1 -0.1 M71.8 179.3 l2.1 0.3 M72 174.9 l3.3 0 M72.7 174.8 l2.8 -0.1 M72.2 171.4 l-3.3 0 M72.7 174.3 l3.4 0 M72.8 153.5 l2.2 -0.1 M72.9 160.8 l-2 0.2 M72.9 156.1 l3.1 -0.1 M73 154.8 l-1.6 0.1 M71 139.7 l2.4 -0.2 M71.1 143.2 l1.2 -0.7 M72 138.6 l-1.8 0.1 M71.4 149.9 l2.4 -1 M92.6 257.8 l-3.7 2.3 M90.7 250.7 l-4.4 1.8 M92.2 258 l-5.3 0.8 M89.7 252.6 l-3.2 0.7 M81.8 241.8 l3.7 -1.5 M86.6 245 l3.4 -4.6 M84.7 243.6 l-2.6 1.4 M84.3 240.6 l2.2 -0.8 M73 232.6 l-2.2 2.3 M76.6 236.5 l2.9 -4.2 M74.3 231.8 l-1.6 1.9 M71.5 234.6 l3.9 -3 M64.4 226.1 l-2.5 3.1 M69.2 227 l-2.2 2 M67.3 221.5 l-1.3 1.3 M68.6 222.1 l4 -2.7 M60 209.7 l3.5 -1.3 M57.5 218.3 l-1.8 0.5 M59.4 210.9 l4.7 -1.2 M59.3 209.5 l-4 1.4 M55.4 198.7 l3 -1.2 M56.7 199.3 l-3.9 0.3 M56.4 197.2 l2.3 -1.7 M53.8 202.5 l3.6 -0.8 M51.8 184.1 l4 -1.2 M52.6 190.6 l-1.6 -0.1 M52.9 193.1 l-3 1.8 M51.8 192.8 l3.6 -2.2 M47 181.3 l-3.8 0.6 M47.5 170.8 l3.9 -0.5 M46.4 173.2 l1.8 -0.8 M47.2 172.4 l-1.7 0.9 M42.6 164.4 l2.6 -1 M44.7 167.5 l3.7 -0.9 M45.2 158.7 l-2 1.4 M45.7 164.7 l1.4 -0.7 M39.3 153.8 l-2.1 1.1 M37.9 146.8 l-3.1 1.4 M39.1 156.8 l-1.7 0.8 M37.5 156.2 l-1.7 1 M30.7 145.4 l1.1 -0.8 M29.8 142.1 l-2 2.7 M27.6 145.6 l-2.3 1.1 M34.5 144.3 l-0.9 1.2 M23.2 135 l-1 0.5 M24.3 126.9 l-2.4 0.9 M26.1 130.3 l1.6 -1.2 M22.7 135.7 l-1.2 1.4"/>
  <!-- Tendrils -->
  <g fill="none" stroke="hsl(68 22% 24%)" stroke-width="0.75" stroke-linecap="round">
    <path d="M140.3 150.5 Q142.8 151.2 144 151.3 Q145.3 151.3 146.4 151 Q147.5 150.7 148.4 150.1 Q149.3 149.4 149.8 148.6 Q150.3 147.7 150.4 146.8 Q150.5 145.9 150.2 145.1 Q149.9 144.3 149.2 143.8 Q148.6 143.3 147.9 143.3 Q147.2 143.3 146.6 143.7 Q146.1 144 146 144.6 Q145.8 145.2 146.1 145.6 Q146.3 146.1 146.7 146.2 Q147.1 146.3 147.4 146.1 L147.7 145.9"/>
    <path d="M151.1 127.5 Q153.3 126.2 154.2 125.4 Q155.1 124.5 155.6 123.5 Q156.1 122.4 156.3 121.4 Q156.4 120.3 156.2 119.3 Q155.9 118.3 155.3 117.6 Q154.7 116.9 153.9 116.6 Q153.1 116.3 152.3 116.5 Q151.5 116.6 151 117.1 Q150.5 117.6 150.4 118.3 Q150.3 118.9 150.6 119.4 Q151 119.9 151.4 120 Q151.9 120.2 152.3 119.9 Q152.7 119.7 152.7 119.3 L152.8 119"/>
    <path d="M145.6 168.1 Q148 168.9 149.1 169.6 Q150.1 170.3 150.8 171.2 Q151.6 172 151.9 173.1 Q152.3 174.1 152.2 175.1 Q152.2 176.1 151.7 176.9 Q151.3 177.7 150.5 178.2 Q149.8 178.7 149 178.7 Q148.2 178.7 147.6 178.3 Q147 177.9 146.8 177.3 Q146.6 176.7 146.8 176.1 Q147 175.6 147.5 175.4 Q147.9 175.1 148.3 175.3 Q148.7 175.4 148.9 175.8 L149 176.1"/>
    <path d="M69.1 78 Q70 75.5 70.6 74.5 Q71.3 73.5 72.2 72.7 Q73.1 72 74.1 71.6 Q75.1 71.3 76.1 71.3 Q77.1 71.4 78 71.8 Q78.8 72.3 79.3 73 Q79.7 73.7 79.7 74.5 Q79.7 75.3 79.3 75.9 Q78.9 76.5 78.3 76.8 Q77.7 77 77.2 76.8 Q76.6 76.6 76.4 76.1 Q76.2 75.6 76.3 75.2 Q76.5 74.8 76.8 74.7 L77.2 74.6"/>
    <path d="M26 138 Q23.4 137.8 22.2 138 Q21 138.2 20 138.7 Q18.9 139.2 18.2 140 Q17.5 140.8 17.1 141.8 Q16.7 142.7 16.8 143.6 Q16.9 144.6 17.4 145.3 Q17.9 146 18.6 146.3 Q19.3 146.7 20 146.6 Q20.7 146.4 21.2 146 Q21.6 145.5 21.7 144.9 Q21.7 144.3 21.4 143.9 Q21 143.6 20.6 143.5 Q20.2 143.5 19.9 143.7 L19.7 144"/>
    <path d="M63.8 87.2 Q64.6 84.7 65.2 83.7 Q65.9 82.6 66.8 81.9 Q67.6 81.1 68.6 80.7 Q69.6 80.3 70.7 80.4 Q71.7 80.4 72.5 80.8 Q73.3 81.3 73.8 82 Q74.3 82.7 74.3 83.5 Q74.4 84.3 74 84.9 Q73.6 85.5 73 85.7 Q72.4 86 71.8 85.8 Q71.3 85.6 71 85.1 Q70.8 84.7 70.9 84.3 Q71.1 83.9 71.4 83.7 L71.8 83.6"/>
    <path d="M85.4 64.2 Q86.5 61.8 87.2 60.9 Q88 59.9 89 59.3 Q90 58.7 91 58.4 Q92.1 58.2 93.1 58.3 Q94.1 58.5 94.8 59 Q95.6 59.6 96 60.4 Q96.3 61.2 96.3 61.9 Q96.2 62.7 95.7 63.3 Q95.3 63.8 94.6 64 Q94 64.1 93.5 63.9 Q93 63.6 92.8 63.1 Q92.6 62.6 92.8 62.3 Q93 61.9 93.4 61.8 L93.7 61.7"/>
    <path d="M19 87.6 Q19 85 18.7 83.8 Q18.4 82.6 17.8 81.7 Q17.2 80.7 16.3 80 Q15.5 79.3 14.5 79.1 Q13.5 78.8 12.6 79 Q11.7 79.1 11 79.7 Q10.3 80.2 10.1 81 Q9.8 81.7 10 82.4 Q10.2 83.1 10.7 83.5 Q11.2 83.9 11.8 83.9 Q12.3 83.9 12.7 83.5 Q13.1 83.2 13.1 82.7 Q13 82.3 12.8 82.1 L12.5 81.8"/>
    <path d="M21.5 112.7 Q23.7 111.4 24.9 111 Q26.1 110.6 27.2 110.6 Q28.4 110.6 29.4 111 Q30.4 111.3 31.2 112 Q31.9 112.7 32.3 113.6 Q32.6 114.5 32.5 115.3 Q32.4 116.2 31.9 116.8 Q31.4 117.4 30.7 117.6 Q30 117.8 29.4 117.6 Q28.8 117.4 28.5 116.9 Q28.2 116.4 28.4 115.9 Q28.5 115.4 28.8 115.2 Q29.2 115 29.6 115.1 L29.9 115.2"/>
    <path d="M46.4 63.4 Q48.6 62 49.7 61.6 Q50.9 61.2 52.1 61.2 Q53.2 61.1 54.2 61.5 Q55.3 61.8 56 62.5 Q56.8 63.1 57.2 64 Q57.5 64.9 57.5 65.7 Q57.4 66.6 56.9 67.2 Q56.4 67.8 55.7 68.1 Q55.1 68.3 54.4 68.1 Q53.8 67.9 53.5 67.4 Q53.2 66.9 53.3 66.4 Q53.4 65.9 53.8 65.7 Q54.2 65.5 54.5 65.6 L54.9 65.7"/>
    <path d="M48.6 50.9 Q49.9 48.6 50.2 47.5 Q50.5 46.3 50.5 45.1 Q50.4 44 50 43 Q49.6 41.9 48.9 41.2 Q48.2 40.5 47.3 40.2 Q46.4 39.9 45.6 40 Q44.7 40.2 44.1 40.7 Q43.5 41.2 43.3 41.9 Q43.1 42.6 43.4 43.2 Q43.6 43.8 44.1 44.1 Q44.7 44.4 45.1 44.2 Q45.6 44.1 45.8 43.7 Q46.1 43.3 45.9 43 L45.8 42.6"/>
    <path d="M61.3 37.3 Q63.8 36.6 65 36.5 Q66.2 36.5 67.3 36.8 Q68.4 37.1 69.3 37.7 Q70.2 38.4 70.7 39.2 Q71.3 40.1 71.3 41 Q71.4 42 71.1 42.8 Q70.8 43.6 70.1 44 Q69.5 44.5 68.8 44.5 Q68 44.5 67.5 44.1 Q67 43.8 66.8 43.2 Q66.7 42.6 66.9 42.2 Q67.2 41.8 67.6 41.6 Q68 41.5 68.3 41.7 L68.6 41.9"/>
    <path d="M32.6 50.2 Q33.9 47.9 34.8 47 Q35.6 46.1 36.6 45.6 Q37.6 45 38.7 44.8 Q39.8 44.7 40.8 44.9 Q41.7 45.2 42.5 45.8 Q43.2 46.4 43.5 47.2 Q43.8 48 43.7 48.7 Q43.6 49.5 43.1 50 Q42.5 50.6 41.9 50.7 Q41.3 50.8 40.8 50.5 Q40.3 50.2 40.1 49.7 Q40 49.2 40.2 48.8 Q40.4 48.4 40.8 48.4 L41.2 48.3"/>
  </g>
  <!-- Ivy leaves: soft shadow, own colour, shading, sheen, faint veins, decay spots -->
  <g transform="translate(84.3 185.5) rotate(-15.3)">
    <path d="M0 0 L4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4 0) scale(22.5)">
      <use href="#v1-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-0" fill="hsl(106.6 31.6% 21.2%)"/>
      <use href="#v1-leaf-0" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-0" fill="url(#v1-under)"/>
      <use href="#v1-leaf-0" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.024" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(92.3 168.8) rotate(-0.5)">
    <path d="M0 0 L3.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.6 0) scale(13.4)">
      <use href="#v1-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-0" fill="hsl(102.6 40.7% 23.2%)"/>
      <use href="#v1-leaf-0" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-0" fill="url(#v1-under)"/>
      <use href="#v1-leaf-0" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.040999999999999995" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(97.5 161.2) rotate(-107.4)">
    <path d="M0 0 L3.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.9 0) scale(19.6)">
      <use href="#v1-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-4" fill="hsl(93 40.8% 24.3%)"/>
      <use href="#v1-leaf-4" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-4" fill="url(#v1-under)"/>
      <use href="#v1-leaf-4" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027999999999999997" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(103.3 154) rotate(4.1)">
    <path d="M0 0 L3.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.5 0) scale(15.8)">
      <use href="#v1-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-1" fill="hsl(65.5 45.4% 29%)"/>
      <use href="#v1-leaf-1" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-1" fill="url(#v1-under)"/>
      <use href="#v1-leaf-1" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
      <circle cx="0.512" cy="0.04" r="0.076" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.36700000000000005" cy="-0.14800000000000002" r="0.077" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(109.5 147.2) rotate(-93.2)">
    <path d="M0 0 L3.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.9 0) scale(18.6)">
      <use href="#v1-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-0" fill="hsl(58.4 44% 29.2%)"/>
      <use href="#v1-leaf-0" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-0" fill="url(#v1-under)"/>
      <use href="#v1-leaf-0" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
      <circle cx="0.5720000000000001" cy="-0.062" r="0.068" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.376" cy="-0.187" r="0.044000000000000004" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(117.1 141.9) rotate(30.9)">
    <path d="M0 0 L3.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.4 0) scale(16.4)">
      <use href="#v1-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-4" fill="hsl(64 43% 32.3%)"/>
      <use href="#v1-leaf-4" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-4" fill="url(#v1-under)"/>
      <use href="#v1-leaf-4" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.034" stroke-linecap="round"/>
      <circle cx="0.456" cy="-0.077" r="0.087" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.506" cy="-0.136" r="0.047" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(133 146.6) rotate(70.3)">
    <path d="M0 0 L4.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.1 0) scale(16.2)">
      <use href="#v1-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-3" fill="hsl(107.8 29.2% 21.3%)"/>
      <use href="#v1-leaf-3" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-3" fill="url(#v1-under)"/>
      <use href="#v1-leaf-3" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.034" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(140.3 150.5) rotate(-34.4)">
    <path d="M0 0 L3.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.1 0) scale(17.5)">
      <use href="#v1-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-5" fill="hsl(91.7 30.9% 15.3%)"/>
      <use href="#v1-leaf-5" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-5" fill="url(#v1-under)"/>
      <use href="#v1-leaf-5" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.031" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(125.4 137.9) rotate(-69.7)">
    <path d="M0 0 L4.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.1 0) scale(11.1)">
      <use href="#v1-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-5" fill="hsl(102.3 30.1% 15.5%)"/>
      <use href="#v1-leaf-5" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-5" fill="url(#v1-under)"/>
      <use href="#v1-leaf-5" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.05" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(133.8 134) rotate(15.6)">
    <path d="M0 0 L3.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.9 0) scale(16.1)">
      <use href="#v1-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-2" fill="hsl(66.3 38.4% 34.2%)"/>
      <use href="#v1-leaf-2" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-2" fill="url(#v1-under)"/>
      <use href="#v1-leaf-2" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.034" stroke-linecap="round"/>
      <circle cx="0.34" cy="-0.17" r="0.068" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.639" cy="0.054000000000000006" r="0.078" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(102.7 175.9) rotate(-71.6)">
    <path d="M0 0 L5.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.5 0) scale(20.4)">
      <use href="#v1-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-0" fill="hsl(87.4 42.2% 25.3%)"/>
      <use href="#v1-leaf-0" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-0" fill="url(#v1-under)"/>
      <use href="#v1-leaf-0" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027000000000000003" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(134.6 166.7) rotate(55.3)">
    <path d="M0 0 L4.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.7 0) scale(12.3)">
      <use href="#v1-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-5" fill="hsl(105.3 41.5% 16.4%)"/>
      <use href="#v1-leaf-5" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-5" fill="url(#v1-under)"/>
      <use href="#v1-leaf-5" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.045" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(145.6 168.1) rotate(-48.7)">
    <path d="M0 0 L6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(6 0) scale(11.5)">
      <use href="#v1-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-2" fill="hsl(100.9 37.8% 28.8%)"/>
      <use href="#v1-leaf-2" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-2" fill="url(#v1-under)"/>
      <use href="#v1-leaf-2" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.048" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(71.8 176.1) rotate(-160.1)">
    <path d="M0 0 L4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4 0) scale(25.3)">
      <use href="#v1-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-5" fill="hsl(61.7 45.8% 27.1%)"/>
      <use href="#v1-leaf-5" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-5" fill="url(#v1-under)"/>
      <use href="#v1-leaf-5" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.022000000000000002" stroke-linecap="round"/>
      <circle cx="0.341" cy="-0.105" r="0.051" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.23199999999999998" cy="-0.19399999999999998" r="0.061" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(66.3 118.3) rotate(-56.9)">
    <path d="M0 0 L4.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.7 0) scale(14.9)">
      <use href="#v1-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-2" fill="hsl(89.4 41.4% 26.2%)"/>
      <use href="#v1-leaf-2" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-2" fill="url(#v1-under)"/>
      <use href="#v1-leaf-2" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.037000000000000005" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(65.2 108.2) rotate(-140.6)">
    <path d="M0 0 L3.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.1 0) scale(18.8)">
      <use href="#v1-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-2" fill="hsl(97.6 26.5% 26.8%)"/>
      <use href="#v1-leaf-2" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-2" fill="url(#v1-under)"/>
      <use href="#v1-leaf-2" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.028999999999999998" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(67.9 88.1) rotate(-128.3)">
    <path d="M0 0 L5.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.8 0) scale(15.4)">
      <use href="#v1-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-5" fill="hsl(84.2 31.2% 15.8%)"/>
      <use href="#v1-leaf-5" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-5" fill="url(#v1-under)"/>
      <use href="#v1-leaf-5" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.036000000000000004" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(69.1 78) rotate(-43.4)">
    <path d="M0 0 L3.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.9 0) scale(15.7)">
      <use href="#v1-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-1" fill="hsl(97.5 36% 15.4%)"/>
      <use href="#v1-leaf-1" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-1" fill="url(#v1-under)"/>
      <use href="#v1-leaf-1" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(56.7 165.8) rotate(-155.6)">
    <path d="M0 0 L4.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.5 0) scale(12.3)">
      <use href="#v1-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-0" fill="hsl(34.4 38.2% 19.4%)"/>
      <use href="#v1-leaf-0" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-0" fill="url(#v1-under)"/>
      <use href="#v1-leaf-0" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.045" stroke-linecap="round"/>
      <circle cx="0.539" cy="-0.14800000000000002" r="0.046" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.597" cy="0.07200000000000001" r="0.043" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.326" cy="0.14400000000000002" r="0.081" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.557" cy="-0.073" r="0.08199999999999999" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(56.3 155.9) rotate(-30)">
    <path d="M0 0 L5.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.2 0) scale(17.8)">
      <use href="#v1-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-4" fill="hsl(104.6 42.5% 24%)"/>
      <use href="#v1-leaf-4" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-4" fill="url(#v1-under)"/>
      <use href="#v1-leaf-4" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.031" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(42.6 144.4) rotate(-72.6)">
    <path d="M0 0 L4.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.2 0) scale(14.8)">
      <use href="#v1-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-5" fill="hsl(107.8 36.8% 17.4%)"/>
      <use href="#v1-leaf-5" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-5" fill="url(#v1-under)"/>
      <use href="#v1-leaf-5" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.037000000000000005" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(34.6 140.6) rotate(-213.6)">
    <path d="M0 0 L4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4 0) scale(16)">
      <use href="#v1-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-5" fill="hsl(85.1 44% 20.4%)"/>
      <use href="#v1-leaf-5" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-5" fill="url(#v1-under)"/>
      <use href="#v1-leaf-5" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.034" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(26 138) rotate(-122.5)">
    <path d="M0 0 L4.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.7 0) scale(9.7)">
      <use href="#v1-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-5" fill="hsl(93.5 44.1% 23.3%)"/>
      <use href="#v1-leaf-5" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-5" fill="url(#v1-under)"/>
      <use href="#v1-leaf-5" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.057" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(55.7 146) rotate(-141.3)">
    <path d="M0 0 L5.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.1 0) scale(20.3)">
      <use href="#v1-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-1" fill="hsl(86.7 30.3% 27.6%)"/>
      <use href="#v1-leaf-1" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-1" fill="url(#v1-under)"/>
      <use href="#v1-leaf-1" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027000000000000003" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(55.9 136.1) rotate(-21)">
    <path d="M0 0 L5.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.3 0) scale(13.7)">
      <use href="#v1-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-2" fill="hsl(51.2 39% 32.8%)"/>
      <use href="#v1-leaf-2" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-2" fill="url(#v1-under)"/>
      <use href="#v1-leaf-2" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.04" stroke-linecap="round"/>
      <circle cx="0.33799999999999997" cy="0.09300000000000001" r="0.08" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.536" cy="-0.008" r="0.086" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(58.1 126.4) rotate(-123.9)">
    <path d="M0 0 L4.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.2 0) scale(11.5)">
      <use href="#v1-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-0" fill="hsl(58.8 40.6% 36.8%)"/>
      <use href="#v1-leaf-0" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-0" fill="url(#v1-under)"/>
      <use href="#v1-leaf-0" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.048" stroke-linecap="round"/>
      <circle cx="0.525" cy="-0.102" r="0.052000000000000005" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.324" cy="0.098" r="0.049" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(59.8 116.6) rotate(-40.5)">
    <path d="M0 0 L3.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.2 0) scale(11.1)">
      <use href="#v1-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-4" fill="hsl(96.9 45.8% 17.5%)"/>
      <use href="#v1-leaf-4" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-4" fill="url(#v1-under)"/>
      <use href="#v1-leaf-4" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.05" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(62.8 97) rotate(-46.8)">
    <path d="M0 0 L5.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.2 0) scale(9.5)">
      <use href="#v1-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-4" fill="hsl(29.1 33% 27.6%)"/>
      <use href="#v1-leaf-4" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-4" fill="url(#v1-under)"/>
      <use href="#v1-leaf-4" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.057999999999999996" stroke-linecap="round"/>
      <circle cx="0.309" cy="0.107" r="0.052000000000000005" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.29100000000000004" cy="-0.122" r="0.040999999999999995" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.519" cy="-0.196" r="0.06" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.61" cy="0.14" r="0.081" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(55.3 162.6) rotate(-23.2)">
    <path d="M0 0 L4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4 0) scale(15.9)">
      <use href="#v1-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-2" fill="hsl(36.2 32.2% 27.6%)"/>
      <use href="#v1-leaf-2" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-2" fill="url(#v1-under)"/>
      <use href="#v1-leaf-2" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
      <circle cx="0.547" cy="0.156" r="0.068" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.225" cy="0.129" r="0.08800000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.522" cy="0.033" r="0.085" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.44799999999999995" cy="0.18600000000000003" r="0.06" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(56.8 152.4) rotate(-154.8)">
    <path d="M0 0 L5.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.1 0) scale(20.1)">
      <use href="#v1-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-5" fill="hsl(93.4 34.9% 15.7%)"/>
      <use href="#v1-leaf-5" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-5" fill="url(#v1-under)"/>
      <use href="#v1-leaf-5" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027000000000000003" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(59 142.2) rotate(-25.8)">
    <path d="M0 0 L4.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.5 0) scale(20.1)">
      <use href="#v1-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-2" fill="hsl(109.2 28.6% 27.4%)"/>
      <use href="#v1-leaf-2" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-2" fill="url(#v1-under)"/>
      <use href="#v1-leaf-2" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027000000000000003" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(62.9 132.6) rotate(-137.3)">
    <path d="M0 0 L5.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.3 0) scale(12.4)">
      <use href="#v1-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-3" fill="hsl(66 40.3% 30.8%)"/>
      <use href="#v1-leaf-3" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-3" fill="url(#v1-under)"/>
      <use href="#v1-leaf-3" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.044000000000000004" stroke-linecap="round"/>
      <circle cx="0.46" cy="-0.152" r="0.069" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.46799999999999997" cy="-0.157" r="0.049" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(67.3 123.2) rotate(-2.7)">
    <path d="M0 0 L4.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.4 0) scale(18.3)">
      <use href="#v1-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-4" fill="hsl(67.5 34.5% 35.6%)"/>
      <use href="#v1-leaf-4" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-4" fill="url(#v1-under)"/>
      <use href="#v1-leaf-4" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
      <circle cx="0.33399999999999996" cy="-0.092" r="0.045" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.47200000000000003" cy="-0.094" r="0.051" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(76.4 104.6) rotate(-0.4)">
    <path d="M0 0 L3.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.7 0) scale(12.2)">
      <use href="#v1-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-2" fill="hsl(58.1 37.2% 36.1%)"/>
      <use href="#v1-leaf-2" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-2" fill="url(#v1-under)"/>
      <use href="#v1-leaf-2" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.045" stroke-linecap="round"/>
      <circle cx="0.621" cy="-0.09" r="0.07400000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.294" cy="-0.221" r="0.084" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(79.4 94.7) rotate(-144.6)">
    <path d="M0 0 L3.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.9 0) scale(16.7)">
      <use href="#v1-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-0" fill="hsl(98 39.3% 15%)"/>
      <use href="#v1-leaf-0" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-0" fill="url(#v1-under)"/>
      <use href="#v1-leaf-0" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.033" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(81 84.4) rotate(-10.6)">
    <path d="M0 0 L3.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.4 0) scale(14)">
      <use href="#v1-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-5" fill="hsl(85.2 30.3% 19.9%)"/>
      <use href="#v1-leaf-5" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-5" fill="url(#v1-under)"/>
      <use href="#v1-leaf-5" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.039" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(82.9 74.2) rotate(-140.5)">
    <path d="M0 0 L4.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.5 0) scale(11.3)">
      <use href="#v1-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-3" fill="hsl(108.3 39.1% 15.6%)"/>
      <use href="#v1-leaf-3" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-3" fill="url(#v1-under)"/>
      <use href="#v1-leaf-3" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.049" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(32.3 156.7) rotate(-72.7)">
    <path d="M0 0 L5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5 0) scale(19)">
      <use href="#v1-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-2" fill="hsl(110.1 34.7% 23.4%)"/>
      <use href="#v1-leaf-2" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-2" fill="url(#v1-under)"/>
      <use href="#v1-leaf-2" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.028999999999999998" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(25.1 150.4) rotate(-202.1)">
    <path d="M0 0 L5.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.9 0) scale(18.4)">
      <use href="#v1-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-4" fill="hsl(88.9 43.7% 20.3%)"/>
      <use href="#v1-leaf-4" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-4" fill="url(#v1-under)"/>
      <use href="#v1-leaf-4" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(11.1 128.2) rotate(-49.5)">
    <path d="M0 0 L3.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.5 0) scale(12.8)">
      <use href="#v1-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-0" fill="hsl(91.7 31.7% 26.2%)"/>
      <use href="#v1-leaf-0" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-0" fill="url(#v1-under)"/>
      <use href="#v1-leaf-0" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.043" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(21.5 112.7) rotate(11.7)">
    <path d="M0 0 L3.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.5 0) scale(15.4)">
      <use href="#v1-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-4" fill="hsl(110.3 40.3% 28.8%)"/>
      <use href="#v1-leaf-4" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-4" fill="url(#v1-under)"/>
      <use href="#v1-leaf-4" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.036000000000000004" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(17.3 96.1) rotate(-72.1)">
    <path d="M0 0 L5.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.8 0) scale(21)">
      <use href="#v1-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-1" fill="hsl(57.7 39.5% 32.8%)"/>
      <use href="#v1-leaf-1" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-1" fill="url(#v1-under)"/>
      <use href="#v1-leaf-1" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.026000000000000002" stroke-linecap="round"/>
      <circle cx="0.489" cy="-0.17" r="0.07400000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.332" cy="-0.133" r="0.086" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(19 87.6) rotate(-144.4)">
    <path d="M0 0 L3.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.2 0) scale(12.9)">
      <use href="#v1-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-5" fill="hsl(29.3 41.5% 18.4%)"/>
      <use href="#v1-leaf-5" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-5" fill="url(#v1-under)"/>
      <use href="#v1-leaf-5" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.043" stroke-linecap="round"/>
      <circle cx="0.355" cy="0.15" r="0.063" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.294" cy="-0.135" r="0.057999999999999996" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.5720000000000001" cy="0.125" r="0.09" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.462" cy="0.126" r="0.040999999999999995" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(46.2 169.9) rotate(-62.4)">
    <path d="M0 0 L5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5 0) scale(20.5)">
      <use href="#v1-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-5" fill="hsl(104.3 30% 27.6%)"/>
      <use href="#v1-leaf-5" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-5" fill="url(#v1-under)"/>
      <use href="#v1-leaf-5" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027000000000000003" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(35.1 146.2) rotate(-60)">
    <path d="M0 0 L4.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.7 0) scale(24.8)">
      <use href="#v1-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-0" fill="hsl(94.8 26.7% 21.6%)"/>
      <use href="#v1-leaf-0" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-0" fill="url(#v1-under)"/>
      <use href="#v1-leaf-0" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.022000000000000002" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(12.7 104.5) rotate(-37.9)">
    <path d="M0 0 L4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4 0) scale(14)">
      <use href="#v1-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-2" fill="hsl(89.4 26.6% 27.4%)"/>
      <use href="#v1-leaf-2" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-2" fill="url(#v1-under)"/>
      <use href="#v1-leaf-2" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.039" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(18.5 94.5) rotate(-112.4)">
    <path d="M0 0 L5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5 0) scale(18.7)">
      <use href="#v1-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-3" fill="hsl(55 49.7% 30.7%)"/>
      <use href="#v1-leaf-3" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-3" fill="url(#v1-under)"/>
      <use href="#v1-leaf-3" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.028999999999999998" stroke-linecap="round"/>
      <circle cx="0.522" cy="0.09" r="0.07" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.35" cy="-0.22399999999999998" r="0.07400000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(22.4 83.5) rotate(-19.1)">
    <path d="M0 0 L4.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.9 0) scale(19.7)">
      <use href="#v1-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-3" fill="hsl(24.1 33.2% 28.6%)"/>
      <use href="#v1-leaf-3" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-3" fill="url(#v1-under)"/>
      <use href="#v1-leaf-3" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027999999999999997" stroke-linecap="round"/>
      <circle cx="0.326" cy="0.08900000000000001" r="0.063" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.479" cy="-0.08199999999999999" r="0.075" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.33799999999999997" cy="-0.11699999999999999" r="0.059000000000000004" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.6679999999999999" cy="-0.032" r="0.044000000000000004" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(46.4 63.4) rotate(-106.4)">
    <path d="M0 0 L4.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.4 0) scale(10.6)">
      <use href="#v1-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-3" fill="hsl(55.7 35.7% 36.8%)"/>
      <use href="#v1-leaf-3" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-3" fill="url(#v1-under)"/>
      <use href="#v1-leaf-3" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.052000000000000005" stroke-linecap="round"/>
      <circle cx="0.644" cy="-0.10800000000000001" r="0.040999999999999995" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.49" cy="0.043" r="0.08900000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(26.2 72.5) rotate(-138.9)">
    <path d="M0 0 L5.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.3 0) scale(15.4)">
      <use href="#v1-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-0" fill="hsl(103 40.5% 28.5%)"/>
      <use href="#v1-leaf-0" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-0" fill="url(#v1-under)"/>
      <use href="#v1-leaf-0" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.036000000000000004" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(48.6 50.9) rotate(-114.8)">
    <path d="M0 0 L3.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.9 0) scale(10.6)">
      <use href="#v1-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-3" fill="hsl(93.2 42.8% 29%)"/>
      <use href="#v1-leaf-3" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-3" fill="url(#v1-under)"/>
      <use href="#v1-leaf-3" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.052000000000000005" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(29.1 61.2) rotate(-10.9)">
    <path d="M0 0 L5.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.1 0) scale(15.4)">
      <use href="#v1-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-1" fill="hsl(54 43.7% 35.3%)"/>
      <use href="#v1-leaf-1" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-1" fill="url(#v1-under)"/>
      <use href="#v1-leaf-1" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.036000000000000004" stroke-linecap="round"/>
      <circle cx="0.59" cy="0.11699999999999999" r="0.047" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.29600000000000004" cy="0.171" r="0.043" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(32.6 50.2) rotate(-143.7)">
    <path d="M0 0 L3.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.6 0) scale(9.8)">
      <use href="#v1-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-4" fill="hsl(105.8 37.1% 25.7%)"/>
      <use href="#v1-leaf-4" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-4" fill="url(#v1-under)"/>
      <use href="#v1-leaf-4" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.055999999999999994" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(61.3 37.3) rotate(-94.2)">
    <path d="M0 0 L5.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.1 0) scale(17.3)">
      <use href="#v1-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v1-leaf-2" fill="hsl(96.5 29.3% 16.9%)"/>
      <use href="#v1-leaf-2" fill="url(#v1-shade)"/>
      <use href="#v1-leaf-2" fill="url(#v1-under)"/>
      <use href="#v1-leaf-2" fill="url(#v1-sheen)"/>
      <use href="#v1-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.032" stroke-linecap="round"/>
    </g>
  </g>
</svg>
`,w3=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 260" width="200" height="260">
  <defs>
    <path id="v2-leaf-0" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.22 -0.16 L0.26 -0.21 L0.34 -0.16 L0.38 -0.17 L0.48 -0.37 L0.6 -0.38 L0.5 -0.12 L0.53 -0.08 L0.75 -0.1 L0.95 0 L0.75 0.1 L0.53 0.09 L0.5 0.12 L0.58 0.34 L0.47 0.34 L0.38 0.17 L0.34 0.16 L0.22 0.27 L0.18 0.2 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v2-veins-0" d="M0.23 0 L0.83 0 M0.23 0 L0.52 0.31 M0.23 0 L0.53 -0.34 M0.23 0 L0.22 0.23 M0.23 0 L0.25 -0.18"/>
    <path id="v2-leaf-1" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.23 -0.15 L0.26 -0.21 L0.34 -0.16 L0.38 -0.17 L0.47 -0.35 L0.58 -0.35 L0.5 -0.12 L0.53 -0.08 L0.76 -0.1 L0.96 0 L0.76 0.1 L0.53 0.09 L0.5 0.12 L0.58 0.34 L0.47 0.34 L0.38 0.17 L0.34 0.16 L0.25 0.23 L0.22 0.16 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v2-veins-1" d="M0.23 0 L0.84 0 M0.23 0 L0.52 0.31 M0.23 0 L0.52 -0.32 M0.23 0 L0.24 0.19 M0.23 0 L0.26 -0.17"/>
    <path id="v2-leaf-2" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.2 -0.18 L0.24 -0.25 L0.34 -0.16 L0.38 -0.17 L0.48 -0.36 L0.59 -0.36 L0.5 -0.12 L0.53 -0.08 L0.81 -0.11 L1.03 0 L0.81 0.11 L0.53 0.09 L0.5 0.12 L0.58 0.34 L0.47 0.34 L0.38 0.17 L0.34 0.16 L0.25 0.23 L0.21 0.17 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v2-veins-2" d="M0.23 0 L0.9 0 M0.23 0 L0.52 0.31 M0.23 0 L0.53 -0.33 M0.23 0 L0.24 0.19 M0.23 0 L0.23 -0.21"/>
    <path id="v2-leaf-3" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.24 -0.14 L0.27 -0.19 L0.34 -0.16 L0.38 -0.17 L0.47 -0.34 L0.58 -0.34 L0.5 -0.12 L0.53 -0.08 L0.78 -0.11 L0.99 0 L0.78 0.11 L0.53 0.09 L0.5 0.12 L0.55 0.29 L0.46 0.29 L0.38 0.17 L0.34 0.16 L0.27 0.2 L0.24 0.14 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v2-veins-3" d="M0.23 0 L0.86 0 M0.23 0 L0.5 0.26 M0.23 0 L0.52 -0.31 M0.23 0 L0.26 0.16 M0.23 0 L0.26 -0.16"/>
    <path id="v2-leaf-4" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.19 -0.19 L0.23 -0.25 L0.34 -0.16 L0.38 -0.17 L0.48 -0.38 L0.6 -0.38 L0.5 -0.12 L0.53 -0.08 L0.75 -0.1 L0.95 0 L0.75 0.1 L0.53 0.09 L0.5 0.12 L0.59 0.36 L0.48 0.36 L0.38 0.17 L0.34 0.16 L0.25 0.23 L0.21 0.17 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v2-veins-4" d="M0.23 0 L0.84 0 M0.23 0 L0.53 0.33 M0.23 0 L0.54 -0.35 M0.23 0 L0.24 0.19 M0.23 0 L0.23 -0.21"/>
    <path id="v2-leaf-5" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.24 -0.14 L0.27 -0.19 L0.34 -0.16 L0.38 -0.17 L0.46 -0.3 L0.55 -0.3 L0.5 -0.12 L0.53 -0.08 L0.79 -0.11 L1.01 0 L0.79 0.11 L0.53 0.09 L0.5 0.12 L0.59 0.36 L0.48 0.36 L0.38 0.17 L0.34 0.16 L0.26 0.21 L0.22 0.16 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v2-veins-5" d="M0.23 0 L0.88 0 M0.23 0 L0.53 0.33 M0.23 0 L0.5 -0.27 M0.23 0 L0.25 0.18 M0.23 0 L0.27 -0.16"/>
    <linearGradient id="v2-shade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#000" stop-opacity="0.42"/>
      <stop offset="0.4" stop-color="#000" stop-opacity="0.06"/>
      <stop offset="0.75" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.18"/>
    </linearGradient>
    <linearGradient id="v2-under" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0.45" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.22"/>
    </linearGradient>
    <radialGradient id="v2-sheen" cx="0.45" cy="0.3" r="0.55">
      <stop offset="0" stop-color="#f4f6dc" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#f4f6dc" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- Soft shadows under the stems -->
  <g fill="none" stroke="#000" stroke-opacity="0.22" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 3)">
    <path d="M107.8 262 Q103.7 248 103.1 240.7 Q102.5 233.4 102.6 226.1 Q102.7 218.8 102.3 211.5 Q101.9 204.2 100.2 197.2 Q98.4 190.1 95.3 183.4 Q92.3 176.8 87.8 171.1 Q83.3 165.3 78.3 159.9 Q73.3 154.6 68.5 149.2 Q63.6 143.8 60 137.4 Q56.3 131.1 53.5 124.4 L50.6 117.6" stroke-width="6.8"/>
    <path d="M93.6 262 Q91 249.2 91.2 242.6 Q91.3 236.1 92.7 229.7 Q94.1 223.3 96.6 217.3 Q99.1 211.2 101.1 205 Q103.2 198.8 104.4 192.4 Q105.7 185.9 105.3 179.4 Q104.8 172.9 103.4 166.5 Q101.9 160.1 100.1 153.8 Q98.2 147.6 96.6 141.2 Q95 134.9 94.5 128.4 Q94 121.9 94.2 115.3 Q94.4 108.8 95.5 102.3 Q96.7 95.9 97.4 89.4 L98 82.9" stroke-width="8.4"/>
    <path d="M102.7 218.8 Q111.5 215.7 116.2 215.4 Q120.8 215.1 125.5 215.3 Q130.2 215.6 134.7 216.5 Q139.3 217.4 143.9 218.2 Q148.5 219.1 153.1 220 Q157.7 220.9 162.3 221.8 Q166.9 222.7 171.4 223.6 Q176 224.6 180.4 226.2 Q184.7 227.9 189.2 226.4 Q193.6 224.9 196.9 221.6 L200.2 218.3" stroke-width="2.2"/>
    <path d="M101.9 204.2 Q92.9 201.1 88.3 199.6 Q83.7 198.2 79 197.2 Q74.3 196.3 69.6 195.4 Q64.9 194.4 60.5 192.5 Q56 190.7 51.5 189 Q47 187.4 42.6 185.6 Q38.1 183.8 33.6 182.2 Q29 180.6 24.5 179.1 Q19.9 177.5 15.5 175.8 Q11 174.1 8.5 170 L6 165.9" stroke-width="2.3"/>
    <path d="M83.3 165.3 Q71.8 167.7 66 168.8 Q60.2 170 54.5 171.3 Q48.8 172.7 43.4 175.2 Q38.1 177.7 32.6 179.9 Q27.2 182 21.4 183.1 Q15.6 184.2 11.2 180.3 Q6.7 176.5 5.5 170.7 Q4.3 165 5.3 159.2 L6.3 153.4" stroke-width="2.1"/>
    <path d="M50.6 117.6 Q44.3 108.5 40.6 104.3 Q37 100 33.1 96.1 Q29.1 92.2 25.4 88 Q21.8 83.8 18.3 79.5 Q14.8 75.1 15.9 69.7 L17 64.2" stroke-width="2.1"/>
    <path d="M99.1 211.2 Q109.9 209.9 115.4 209.7 Q120.8 209.5 126.3 209.7 Q131.7 209.8 137.2 209.6 Q142.7 209.4 148.1 209.3 Q153.6 209.1 159 208.2 L164.4 207.3" stroke-width="1.9"/>
    <path d="M103.2 198.8 Q114.4 198.9 120 199 Q125.7 199.2 131 200.8 Q136.4 202.5 141.4 205 Q146.5 207.6 151 210.9 Q155.5 214.3 160.2 217.4 Q164.9 220.5 169.2 224.1 Q173.6 227.6 177.8 231.3 Q182 235.1 187.6 235 Q193.3 235 198.2 232.2 Q203.1 229.5 206.7 225.2 Q210.4 221 212.7 215.8 L215.1 210.7" stroke-width="2.7"/>
    <path d="M87 148.4 Q78 145.7 73.6 143.9 Q69.2 142.1 64.7 140.7 L60.1 139.2" stroke-width="1.8"/>
    <path d="M105.7 185.9 Q102.2 176 100.2 171.1 Q98.3 166.2 95.7 161.7 Q93 157.1 90 152.8 Q87 148.4 83.8 144.3 Q80.5 140.1 77.1 136.2 L73.7 132.2" stroke-width="2.3"/>
    <path d="M21.1 125.6 Q12.5 131.4 12 136.6 Q11.4 141.7 14.2 146 L17.1 150.4" stroke-width="1.7"/>
    <path d="M98.2 147.6 Q87.4 143.8 82 141.9 Q76.6 140 71.1 138.1 Q65.7 136.2 60.3 134.2 Q54.9 132.2 49.3 130.9 Q43.7 129.6 38.1 128.6 Q32.4 127.6 26.7 126.6 Q21.1 125.6 15.5 124.5 Q9.8 123.3 6.9 118.4 Q3.9 113.5 4.2 107.7 Q4.5 102 6.8 96.7 L9.1 91.5" stroke-width="2.1"/>
    <path d="M116.3 100.8 Q113.4 92.1 111.9 87.9 Q110.3 83.6 108.4 79.5 L106.5 75.4" stroke-width="1.9"/>
    <path d="M95 134.9 Q100 126.2 102.3 121.7 Q104.5 117.1 107.4 113 Q110.3 108.9 113.3 104.8 Q116.3 100.8 119.7 97 Q123.1 93.3 126.6 89.7 Q130.2 86.1 133.5 82.4 Q136.9 78.6 140.5 75.1 L144 71.5" stroke-width="2.4"/>
    <path d="M11.1 44.6 Q6.8 53.9 7 59.1 Q7.2 64.2 9 69 L10.9 73.8" stroke-width="1.9"/>
    <path d="M96.7 95.9 Q87.9 88.6 83.1 85.4 Q78.4 82.3 73.7 78.9 Q69.1 75.6 64.9 71.7 Q60.7 67.8 56.7 63.7 Q52.7 59.6 48.5 55.7 Q44.3 51.9 39 49.7 Q33.7 47.6 28.1 46.5 Q22.5 45.4 16.8 45 Q11.1 44.6 6.8 48.4 L2.6 52.3" stroke-width="2.5"/>
    <path d="M98 82.9 Q98.3 72.2 97.6 66.8 Q97 61.5 96.5 56.2 Q96 50.8 95.9 45.5 Q95.8 40.1 96.2 34.7 Q96.5 29.4 96.3 24 Q96.1 18.7 94.9 13.5 L93.6 8.2" stroke-width="2.1"/>
  </g>
  <!-- Trailing shoots: green-brown, with a thin highlight -->
  <g fill="none" stroke="hsl(68 22% 21%)" stroke-linecap="round" stroke-linejoin="round">
    <path d="M102.7 218.8 Q111.5 215.7 116.2 215.4 Q120.8 215.1 125.5 215.3 Q130.2 215.6 134.7 216.5 Q139.3 217.4 143.9 218.2 Q148.5 219.1 153.1 220 Q157.7 220.9 162.3 221.8 Q166.9 222.7 171.4 223.6 Q176 224.6 180.4 226.2 Q184.7 227.9 189.2 226.4 Q193.6 224.9 196.9 221.6 L200.2 218.3" stroke-width="1.5"/>
    <path d="M101.9 204.2 Q92.9 201.1 88.3 199.6 Q83.7 198.2 79 197.2 Q74.3 196.3 69.6 195.4 Q64.9 194.4 60.5 192.5 Q56 190.7 51.5 189 Q47 187.4 42.6 185.6 Q38.1 183.8 33.6 182.2 Q29 180.6 24.5 179.1 Q19.9 177.5 15.5 175.8 Q11 174.1 8.5 170 L6 165.9" stroke-width="1.6"/>
    <path d="M83.3 165.3 Q71.8 167.7 66 168.8 Q60.2 170 54.5 171.3 Q48.8 172.7 43.4 175.2 Q38.1 177.7 32.6 179.9 Q27.2 182 21.4 183.1 Q15.6 184.2 11.2 180.3 Q6.7 176.5 5.5 170.7 Q4.3 165 5.3 159.2 L6.3 153.4" stroke-width="1.4"/>
    <path d="M50.6 117.6 Q44.3 108.5 40.6 104.3 Q37 100 33.1 96.1 Q29.1 92.2 25.4 88 Q21.8 83.8 18.3 79.5 Q14.8 75.1 15.9 69.7 L17 64.2" stroke-width="1.5"/>
    <path d="M99.1 211.2 Q109.9 209.9 115.4 209.7 Q120.8 209.5 126.3 209.7 Q131.7 209.8 137.2 209.6 Q142.7 209.4 148.1 209.3 Q153.6 209.1 159 208.2 L164.4 207.3" stroke-width="1.2"/>
    <path d="M103.2 198.8 Q114.4 198.9 120 199 Q125.7 199.2 131 200.8 Q136.4 202.5 141.4 205 Q146.5 207.6 151 210.9 Q155.5 214.3 160.2 217.4 Q164.9 220.5 169.2 224.1 Q173.6 227.6 177.8 231.3 Q182 235.1 187.6 235 Q193.3 235 198.2 232.2 Q203.1 229.5 206.7 225.2 Q210.4 221 212.7 215.8 L215.1 210.7" stroke-width="2"/>
    <path d="M87 148.4 Q78 145.7 73.6 143.9 Q69.2 142.1 64.7 140.7 L60.1 139.2" stroke-width="1.1"/>
    <path d="M105.7 185.9 Q102.2 176 100.2 171.1 Q98.3 166.2 95.7 161.7 Q93 157.1 90 152.8 Q87 148.4 83.8 144.3 Q80.5 140.1 77.1 136.2 L73.7 132.2" stroke-width="1.6"/>
    <path d="M21.1 125.6 Q12.5 131.4 12 136.6 Q11.4 141.7 14.2 146 L17.1 150.4" stroke-width="1"/>
    <path d="M98.2 147.6 Q87.4 143.8 82 141.9 Q76.6 140 71.1 138.1 Q65.7 136.2 60.3 134.2 Q54.9 132.2 49.3 130.9 Q43.7 129.6 38.1 128.6 Q32.4 127.6 26.7 126.6 Q21.1 125.6 15.5 124.5 Q9.8 123.3 6.9 118.4 Q3.9 113.5 4.2 107.7 Q4.5 102 6.8 96.7 L9.1 91.5" stroke-width="1.4"/>
    <path d="M116.3 100.8 Q113.4 92.1 111.9 87.9 Q110.3 83.6 108.4 79.5 L106.5 75.4" stroke-width="1.2"/>
    <path d="M95 134.9 Q100 126.2 102.3 121.7 Q104.5 117.1 107.4 113 Q110.3 108.9 113.3 104.8 Q116.3 100.8 119.7 97 Q123.1 93.3 126.6 89.7 Q130.2 86.1 133.5 82.4 Q136.9 78.6 140.5 75.1 L144 71.5" stroke-width="1.7"/>
    <path d="M11.1 44.6 Q6.8 53.9 7 59.1 Q7.2 64.2 9 69 L10.9 73.8" stroke-width="1.2"/>
    <path d="M96.7 95.9 Q87.9 88.6 83.1 85.4 Q78.4 82.3 73.7 78.9 Q69.1 75.6 64.9 71.7 Q60.7 67.8 56.7 63.7 Q52.7 59.6 48.5 55.7 Q44.3 51.9 39 49.7 Q33.7 47.6 28.1 46.5 Q22.5 45.4 16.8 45 Q11.1 44.6 6.8 48.4 L2.6 52.3" stroke-width="1.8"/>
    <path d="M98 82.9 Q98.3 72.2 97.6 66.8 Q97 61.5 96.5 56.2 Q96 50.8 95.9 45.5 Q95.8 40.1 96.2 34.7 Q96.5 29.4 96.3 24 Q96.1 18.7 94.9 13.5 L93.6 8.2" stroke-width="1.4"/>
  </g>
  <g fill="none" stroke="hsl(70 25% 40%)" stroke-opacity="0.45" stroke-linecap="round" transform="translate(-0.4 -0.3)">
    <path d="M102.7 218.8 Q111.5 215.7 116.2 215.4 Q120.8 215.1 125.5 215.3 Q130.2 215.6 134.7 216.5 Q139.3 217.4 143.9 218.2 Q148.5 219.1 153.1 220 Q157.7 220.9 162.3 221.8 Q166.9 222.7 171.4 223.6 Q176 224.6 180.4 226.2 Q184.7 227.9 189.2 226.4 Q193.6 224.9 196.9 221.6 L200.2 218.3" stroke-width="0.4"/>
    <path d="M101.9 204.2 Q92.9 201.1 88.3 199.6 Q83.7 198.2 79 197.2 Q74.3 196.3 69.6 195.4 Q64.9 194.4 60.5 192.5 Q56 190.7 51.5 189 Q47 187.4 42.6 185.6 Q38.1 183.8 33.6 182.2 Q29 180.6 24.5 179.1 Q19.9 177.5 15.5 175.8 Q11 174.1 8.5 170 L6 165.9" stroke-width="0.5"/>
    <path d="M83.3 165.3 Q71.8 167.7 66 168.8 Q60.2 170 54.5 171.3 Q48.8 172.7 43.4 175.2 Q38.1 177.7 32.6 179.9 Q27.2 182 21.4 183.1 Q15.6 184.2 11.2 180.3 Q6.7 176.5 5.5 170.7 Q4.3 165 5.3 159.2 L6.3 153.4" stroke-width="0.4"/>
    <path d="M50.6 117.6 Q44.3 108.5 40.6 104.3 Q37 100 33.1 96.1 Q29.1 92.2 25.4 88 Q21.8 83.8 18.3 79.5 Q14.8 75.1 15.9 69.7 L17 64.2" stroke-width="0.4"/>
    <path d="M99.1 211.2 Q109.9 209.9 115.4 209.7 Q120.8 209.5 126.3 209.7 Q131.7 209.8 137.2 209.6 Q142.7 209.4 148.1 209.3 Q153.6 209.1 159 208.2 L164.4 207.3" stroke-width="0.4"/>
    <path d="M103.2 198.8 Q114.4 198.9 120 199 Q125.7 199.2 131 200.8 Q136.4 202.5 141.4 205 Q146.5 207.6 151 210.9 Q155.5 214.3 160.2 217.4 Q164.9 220.5 169.2 224.1 Q173.6 227.6 177.8 231.3 Q182 235.1 187.6 235 Q193.3 235 198.2 232.2 Q203.1 229.5 206.7 225.2 Q210.4 221 212.7 215.8 L215.1 210.7" stroke-width="0.6"/>
    <path d="M87 148.4 Q78 145.7 73.6 143.9 Q69.2 142.1 64.7 140.7 L60.1 139.2" stroke-width="0.3"/>
    <path d="M105.7 185.9 Q102.2 176 100.2 171.1 Q98.3 166.2 95.7 161.7 Q93 157.1 90 152.8 Q87 148.4 83.8 144.3 Q80.5 140.1 77.1 136.2 L73.7 132.2" stroke-width="0.5"/>
    <path d="M21.1 125.6 Q12.5 131.4 12 136.6 Q11.4 141.7 14.2 146 L17.1 150.4" stroke-width="0.3"/>
    <path d="M98.2 147.6 Q87.4 143.8 82 141.9 Q76.6 140 71.1 138.1 Q65.7 136.2 60.3 134.2 Q54.9 132.2 49.3 130.9 Q43.7 129.6 38.1 128.6 Q32.4 127.6 26.7 126.6 Q21.1 125.6 15.5 124.5 Q9.8 123.3 6.9 118.4 Q3.9 113.5 4.2 107.7 Q4.5 102 6.8 96.7 L9.1 91.5" stroke-width="0.4"/>
    <path d="M116.3 100.8 Q113.4 92.1 111.9 87.9 Q110.3 83.6 108.4 79.5 L106.5 75.4" stroke-width="0.3"/>
    <path d="M95 134.9 Q100 126.2 102.3 121.7 Q104.5 117.1 107.4 113 Q110.3 108.9 113.3 104.8 Q116.3 100.8 119.7 97 Q123.1 93.3 126.6 89.7 Q130.2 86.1 133.5 82.4 Q136.9 78.6 140.5 75.1 L144 71.5" stroke-width="0.5"/>
    <path d="M11.1 44.6 Q6.8 53.9 7 59.1 Q7.2 64.2 9 69 L10.9 73.8" stroke-width="0.4"/>
    <path d="M96.7 95.9 Q87.9 88.6 83.1 85.4 Q78.4 82.3 73.7 78.9 Q69.1 75.6 64.9 71.7 Q60.7 67.8 56.7 63.7 Q52.7 59.6 48.5 55.7 Q44.3 51.9 39 49.7 Q33.7 47.6 28.1 46.5 Q22.5 45.4 16.8 45 Q11.1 44.6 6.8 48.4 L2.6 52.3" stroke-width="0.5"/>
    <path d="M98 82.9 Q98.3 72.2 97.6 66.8 Q97 61.5 96.5 56.2 Q96 50.8 95.9 45.5 Q95.8 40.1 96.2 34.7 Q96.5 29.4 96.3 24 Q96.1 18.7 94.9 13.5 L93.6 8.2" stroke-width="0.4"/>
  </g>
  <!-- Woody trunks: tapering, shaded round, with streaky bark -->
  <g fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M107.8 262 Q103.7 248 103.1 240.7 Q102.5 233.4 102.6 226.1 Q102.7 218.8 102.3 211.5 Q101.9 204.2 100.2 197.2 Q98.4 190.1 95.3 183.4 Q92.3 176.8 87.8 171.1 Q83.3 165.3 78.3 159.9 Q73.3 154.6 68.5 149.2 Q63.6 143.8 60 137.4 Q56.3 131.1 53.5 124.4 L50.6 117.6" stroke="hsl(30 14% 19%)" stroke-width="2.8"/>
    <path d="M107.8 262 Q103.7 248 103.1 240.7 Q102.5 233.4 102.6 226.1 Q102.7 218.8 102.3 211.5 Q101.9 204.2 100.2 197.2 Q98.4 190.1 95.3 183.4 Q92.3 176.8 87.8 171.1 Q83.3 165.3 78.3 159.9 L73.3 154.6" stroke="hsl(30 14% 19%)" stroke-width="4.6"/>
    <path d="M107.8 262 Q103.7 248 103.1 240.7 Q102.5 233.4 102.6 226.1 Q102.7 218.8 102.3 211.5 L101.9 204.2" stroke="hsl(30 14% 19%)" stroke-width="6.1"/>
    <path d="M107.8 262 Q103.7 248 103.1 240.7 Q102.5 233.4 102.6 226.1 Q102.7 218.8 102.3 211.5 Q101.9 204.2 100.2 197.2 Q98.4 190.1 95.3 183.4 Q92.3 176.8 87.8 171.1 Q83.3 165.3 78.3 159.9 Q73.3 154.6 68.5 149.2 Q63.6 143.8 60 137.4 Q56.3 131.1 53.5 124.4 L50.6 117.6" stroke="#000" stroke-opacity="0.28" stroke-width="1" transform="translate(0.6 0.3)"/>
    <path d="M107.8 262 Q103.7 248 103.1 240.7 Q102.5 233.4 102.6 226.1 Q102.7 218.8 102.3 211.5 Q101.9 204.2 100.2 197.2 Q98.4 190.1 95.3 183.4 Q92.3 176.8 87.8 171.1 Q83.3 165.3 78.3 159.9 L73.3 154.6" stroke="#000" stroke-opacity="0.28" stroke-width="1.6" transform="translate(1 0.6)"/>
    <path d="M107.8 262 Q103.7 248 103.1 240.7 Q102.5 233.4 102.6 226.1 Q102.7 218.8 102.3 211.5 L101.9 204.2" stroke="#000" stroke-opacity="0.28" stroke-width="2.1" transform="translate(1.4 0.7)"/>
    <path d="M107.8 262 Q103.7 248 103.1 240.7 Q102.5 233.4 102.6 226.1 Q102.7 218.8 102.3 211.5 Q101.9 204.2 100.2 197.2 Q98.4 190.1 95.3 183.4 Q92.3 176.8 87.8 171.1 Q83.3 165.3 78.3 159.9 Q73.3 154.6 68.5 149.2 Q63.6 143.8 60 137.4 Q56.3 131.1 53.5 124.4 L50.6 117.6" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="0.5" transform="translate(-0.6 -0.3)"/>
    <path d="M107.8 262 Q103.7 248 103.1 240.7 Q102.5 233.4 102.6 226.1 Q102.7 218.8 102.3 211.5 Q101.9 204.2 100.2 197.2 Q98.4 190.1 95.3 183.4 Q92.3 176.8 87.8 171.1 Q83.3 165.3 78.3 159.9 L73.3 154.6" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="0.8" transform="translate(-1 -0.5)"/>
    <path d="M107.8 262 Q103.7 248 103.1 240.7 Q102.5 233.4 102.6 226.1 Q102.7 218.8 102.3 211.5 L101.9 204.2" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="1.1" transform="translate(-1.4 -0.6)"/>
    <path d="M107.8 262 Q103.7 248 103.1 240.7 Q102.5 233.4 102.6 226.1 Q102.7 218.8 102.3 211.5 Q101.9 204.2 100.2 197.2 Q98.4 190.1 95.3 183.4 Q92.3 176.8 87.8 171.1 Q83.3 165.3 78.3 159.9 L73.3 154.6" stroke="hsl(30 12% 9%)" stroke-opacity="0.55" stroke-width="1.2" stroke-dasharray="6.7 3.3 5.1 5"/>
    <path d="M107.8 262 Q103.7 248 103.1 240.7 Q102.5 233.4 102.6 226.1 Q102.7 218.8 102.3 211.5 Q101.9 204.2 100.2 197.2 Q98.4 190.1 95.3 183.4 Q92.3 176.8 87.8 171.1 Q83.3 165.3 78.3 159.9 L73.3 154.6" stroke="hsl(36 14% 38%)" stroke-opacity="0.35" stroke-width="0.7" stroke-dasharray="2.3 5.6" transform="translate(-0.7 0)"/>
  </g>
  <g fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M93.6 262 Q91 249.2 91.2 242.6 Q91.3 236.1 92.7 229.7 Q94.1 223.3 96.6 217.3 Q99.1 211.2 101.1 205 Q103.2 198.8 104.4 192.4 Q105.7 185.9 105.3 179.4 Q104.8 172.9 103.4 166.5 Q101.9 160.1 100.1 153.8 Q98.2 147.6 96.6 141.2 Q95 134.9 94.5 128.4 Q94 121.9 94.2 115.3 Q94.4 108.8 95.5 102.3 Q96.7 95.9 97.4 89.4 L98 82.9" stroke="hsl(30 14% 19%)" stroke-width="3.5"/>
    <path d="M93.6 262 Q91 249.2 91.2 242.6 Q91.3 236.1 92.7 229.7 Q94.1 223.3 96.6 217.3 Q99.1 211.2 101.1 205 Q103.2 198.8 104.4 192.4 Q105.7 185.9 105.3 179.4 Q104.8 172.9 103.4 166.5 Q101.9 160.1 100.1 153.8 Q98.2 147.6 96.6 141.2 L95 134.9" stroke="hsl(30 14% 19%)" stroke-width="5.8"/>
    <path d="M93.6 262 Q91 249.2 91.2 242.6 Q91.3 236.1 92.7 229.7 Q94.1 223.3 96.6 217.3 Q99.1 211.2 101.1 205 L103.2 198.8" stroke="hsl(30 14% 19%)" stroke-width="7.7"/>
    <path d="M93.6 262 Q91 249.2 91.2 242.6 Q91.3 236.1 92.7 229.7 Q94.1 223.3 96.6 217.3 Q99.1 211.2 101.1 205 Q103.2 198.8 104.4 192.4 Q105.7 185.9 105.3 179.4 Q104.8 172.9 103.4 166.5 Q101.9 160.1 100.1 153.8 Q98.2 147.6 96.6 141.2 Q95 134.9 94.5 128.4 Q94 121.9 94.2 115.3 Q94.4 108.8 95.5 102.3 Q96.7 95.9 97.4 89.4 L98 82.9" stroke="#000" stroke-opacity="0.28" stroke-width="1.2" transform="translate(0.8 0.4)"/>
    <path d="M93.6 262 Q91 249.2 91.2 242.6 Q91.3 236.1 92.7 229.7 Q94.1 223.3 96.6 217.3 Q99.1 211.2 101.1 205 Q103.2 198.8 104.4 192.4 Q105.7 185.9 105.3 179.4 Q104.8 172.9 103.4 166.5 Q101.9 160.1 100.1 153.8 Q98.2 147.6 96.6 141.2 L95 134.9" stroke="#000" stroke-opacity="0.28" stroke-width="2" transform="translate(1.3 0.7)"/>
    <path d="M93.6 262 Q91 249.2 91.2 242.6 Q91.3 236.1 92.7 229.7 Q94.1 223.3 96.6 217.3 Q99.1 211.2 101.1 205 L103.2 198.8" stroke="#000" stroke-opacity="0.28" stroke-width="2.7" transform="translate(1.7 0.9)"/>
    <path d="M93.6 262 Q91 249.2 91.2 242.6 Q91.3 236.1 92.7 229.7 Q94.1 223.3 96.6 217.3 Q99.1 211.2 101.1 205 Q103.2 198.8 104.4 192.4 Q105.7 185.9 105.3 179.4 Q104.8 172.9 103.4 166.5 Q101.9 160.1 100.1 153.8 Q98.2 147.6 96.6 141.2 Q95 134.9 94.5 128.4 Q94 121.9 94.2 115.3 Q94.4 108.8 95.5 102.3 Q96.7 95.9 97.4 89.4 L98 82.9" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="0.6" transform="translate(-0.8 -0.3)"/>
    <path d="M93.6 262 Q91 249.2 91.2 242.6 Q91.3 236.1 92.7 229.7 Q94.1 223.3 96.6 217.3 Q99.1 211.2 101.1 205 Q103.2 198.8 104.4 192.4 Q105.7 185.9 105.3 179.4 Q104.8 172.9 103.4 166.5 Q101.9 160.1 100.1 153.8 Q98.2 147.6 96.6 141.2 L95 134.9" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="1" transform="translate(-1.3 -0.6)"/>
    <path d="M93.6 262 Q91 249.2 91.2 242.6 Q91.3 236.1 92.7 229.7 Q94.1 223.3 96.6 217.3 Q99.1 211.2 101.1 205 L103.2 198.8" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="1.4" transform="translate(-1.7 -0.8)"/>
    <path d="M93.6 262 Q91 249.2 91.2 242.6 Q91.3 236.1 92.7 229.7 Q94.1 223.3 96.6 217.3 Q99.1 211.2 101.1 205 Q103.2 198.8 104.4 192.4 Q105.7 185.9 105.3 179.4 Q104.8 172.9 103.4 166.5 Q101.9 160.1 100.1 153.8 Q98.2 147.6 96.6 141.2 L95 134.9" stroke="hsl(30 12% 9%)" stroke-opacity="0.55" stroke-width="1.5" stroke-dasharray="8.2 2.7 4.1 5"/>
    <path d="M93.6 262 Q91 249.2 91.2 242.6 Q91.3 236.1 92.7 229.7 Q94.1 223.3 96.6 217.3 Q99.1 211.2 101.1 205 Q103.2 198.8 104.4 192.4 Q105.7 185.9 105.3 179.4 Q104.8 172.9 103.4 166.5 Q101.9 160.1 100.1 153.8 Q98.2 147.6 96.6 141.2 L95 134.9" stroke="hsl(36 14% 38%)" stroke-opacity="0.35" stroke-width="0.9" stroke-dasharray="2.8 7.9" transform="translate(-0.9 0)"/>
  </g>
  <!-- Fine hairy rootlets -->
  <path fill="none" stroke="hsl(30 18% 20%)" stroke-opacity="0.6" stroke-width="0.5" stroke-linecap="round" d="M105.8 251.4 l3.8 -0.7 M107.2 251.2 l3.2 -1.2 M105.5 259.1 l3.1 -0.7 M106.1 256.3 l-4.8 3.4 M102.7 234.7 l2.6 -0.2 M103.5 242.6 l-5.1 1 M102.9 242.2 l-5.4 1.4 M103.6 237.7 l5.1 -1.8 M102.5 219 l-1.8 -0.4 M102.6 231.5 l-1.9 0.5 M102.7 222 l-4.6 1.2 M102.7 233.1 l2.9 0.4 M102.5 209.8 l-2.3 0 M102.3 209.6 l3 0.8 M102.2 218.6 l-2.1 -0.5 M102 218.4 l3.5 -1.6 M100.9 202.9 l-3.6 0.5 M100.4 199.6 l3.5 -2.3 M101.7 193 l-1.7 0.1 M100.9 200.9 l2.4 -0.2 M95.6 179.1 l-1.7 0.8 M92.9 181.9 l1.5 -0.8 M95.1 180.9 l-2.1 1.6 M97.2 189.1 l2.7 -2.7 M90.2 174.8 l-1.5 0.7 M88.7 176.5 l-1.4 0.9 M88.8 170.2 l-2.5 1.3 M85.8 170.8 l-2.4 1.3 M81.9 160.5 l1.5 -0.8 M74.4 155.2 l-1.4 2 M80.6 164.7 l1.2 -0.8 M80.2 160.9 l-1.1 1.2 M71.3 148.4 l2.7 -2 M71.4 150.2 l0.9 -0.9 M64.6 152.3 l2.9 -2.5 M67 145.5 l1.7 -1.1 M57.2 137.8 l3.1 -0.8 M59.6 141.2 l2.5 -0.6 M59.4 136.9 l-1.6 0.5 M56.6 133.4 l1.9 -1.9 M52 125.1 l3.2 -0.5 M53.6 129.9 l-1.8 0.3 M54.6 122.2 l-1.5 0.6 M54.8 120.3 l2.9 -0.3 M92.6 255.9 l3.2 0.4 M91.5 257.1 l-5.8 1.2 M91.4 258.2 l2.3 0.1 M92.4 256.1 l2 -0.8 M91.1 241.1 l5.6 0.3 M91.3 241.3 l-4.2 0.1 M91.1 240 l-4.1 -1.3 M91.2 237.7 l2.1 0.6 M91.8 231.5 l-3.2 -1.3 M91.8 233.3 l3.4 0 M91.8 229.6 l2.2 0.8 M92.9 228.6 l-2.4 0.2 M97.5 221.9 l2.2 0.7 M98.7 221.2 l3.7 2.3 M98.3 213.9 l1.8 1.3 M94.3 216.8 l1.7 0.6 M101.7 210.3 l2.6 0 M99.4 206.2 l-1.9 -1.5 M101.7 206.2 l-3.2 -2.2 M102.6 206.2 l4 2.1 M105.6 193.7 l2.1 0.6 M104.5 195.8 l-3.7 -0.1 M105.5 193.3 l1.6 0.7 M104.1 195.5 l-4.3 -0.7 M105 185.6 l2 0.5 M105.5 176.3 l-4 -1.1 M105.3 172.9 l-2.4 -0.5 M105.4 184.2 l2.7 0.2 M103.9 164.7 l-3.4 1.2 M102.6 162.8 l2.5 0.3 M104.1 166.3 l1.7 -0.7 M103.4 164.3 l-4.4 0.3 M99.5 154.8 l-1.9 0.7 M101.3 157.6 l-1.5 0.3 M101 159.8 l-3.4 1.7 M99.4 150.3 l2.8 -1.4 M96.3 136.3 l2.7 -0.8 M95.3 136.8 l3 -1.3 M96.3 136.5 l2.4 -1.6 M98 137.4 l-2.3 0.3 M94.7 129.7 l1.5 0.3 M94.5 134.3 l2 -0.2 M94.6 124.1 l2.7 0.6 M94.7 133.3 l-2.9 0.2 M94.3 116.8 l2.1 0.3 M94.4 113.4 l2.6 -0.8 M94.3 113.1 l-3.4 -1 M94.1 121.2 l-1.6 -0.7 M94.7 104 l3 1.2 M94.8 97.5 l1.5 0.1 M95.3 96 l2.3 0 M95.6 100.5 l3 0.5 M97.1 95.8 l-1.9 0.1 M97.7 88.1 l-1.4 -0.6 M97.7 86.5 l1.3 0.1 M97.4 85.3 l-2.5 0"/>
  <!-- Tendrils -->
  <g fill="none" stroke="hsl(68 22% 24%)" stroke-width="0.75" stroke-linecap="round">
    <path d="M200.2 218.3 Q201.6 216.1 202 214.9 Q202.4 213.8 202.4 212.6 Q202.5 211.5 202.1 210.4 Q201.8 209.4 201.1 208.7 Q200.5 207.9 199.6 207.5 Q198.7 207.2 197.9 207.3 Q197 207.3 196.4 207.8 Q195.7 208.3 195.5 209 Q195.3 209.7 195.5 210.3 Q195.7 210.9 196.2 211.2 Q196.7 211.5 197.2 211.4 Q197.7 211.3 197.9 210.9 Q198.1 210.6 198 210.2 L197.9 209.9"/>
    <path d="M6 165.9 Q4.3 163.9 3.3 163.3 Q2.2 162.6 1.1 162.3 Q0 162 -1.1 162 Q-2.1 162.1 -3 162.6 Q-3.9 163 -4.5 163.8 Q-5.1 164.5 -5.2 165.4 Q-5.3 166.2 -5 166.9 Q-4.7 167.7 -4.1 168.1 Q-3.5 168.5 -2.9 168.4 Q-2.2 168.4 -1.8 168 Q-1.4 167.6 -1.4 167.1 Q-1.4 166.5 -1.6 166.2 Q-1.9 165.9 -2.3 165.9 L-2.7 165.9"/>
    <path d="M6.3 153.4 Q7.2 150.9 7.9 149.9 Q8.6 148.9 9.5 148.2 Q10.5 147.5 11.5 147.2 Q12.5 146.9 13.5 147 Q14.5 147.1 15.3 147.6 Q16.1 148.1 16.6 148.8 Q17 149.6 17 150.4 Q17 151.2 16.5 151.7 Q16.1 152.3 15.5 152.5 Q14.9 152.7 14.3 152.5 Q13.8 152.2 13.6 151.8 Q13.4 151.3 13.6 150.9 Q13.7 150.5 14.1 150.4 L14.4 150.3"/>
    <path d="M17 64.2 Q18 61.8 18.8 60.9 Q19.5 59.9 20.4 59.2 Q21.4 58.5 22.4 58.2 Q23.5 57.9 24.5 58.1 Q25.5 58.2 26.3 58.7 Q27 59.2 27.5 60 Q27.9 60.8 27.8 61.6 Q27.8 62.3 27.3 62.9 Q26.9 63.5 26.3 63.7 Q25.6 63.8 25.1 63.6 Q24.6 63.3 24.4 62.9 Q24.2 62.4 24.4 62 Q24.6 61.6 24.9 61.5 L25.2 61.4"/>
    <path d="M164.4 207.3 Q167 207.4 168.1 207.7 Q169.3 208.1 170.3 208.7 Q171.2 209.4 171.9 210.2 Q172.5 211.1 172.8 212.1 Q173 213.1 172.8 214 Q172.6 214.9 172 215.6 Q171.5 216.2 170.7 216.5 Q169.9 216.7 169.3 216.5 Q168.6 216.3 168.2 215.8 Q167.8 215.2 167.8 214.7 Q167.9 214.1 168.3 213.7 Q168.6 213.4 169.1 213.4 Q169.5 213.4 169.7 213.7 L169.9 214"/>
    <path d="M215.1 210.7 Q215.6 208.2 215.6 207 Q215.6 205.7 215.2 204.6 Q214.8 203.5 214.1 202.7 Q213.5 201.9 212.6 201.4 Q211.7 200.9 210.8 200.9 Q209.8 200.8 209 201.2 Q208.3 201.6 207.8 202.2 Q207.4 202.9 207.4 203.6 Q207.5 204.4 207.9 204.9 Q208.3 205.4 208.8 205.5 Q209.4 205.6 209.8 205.3 Q210.3 205 210.4 204.6 Q210.4 204.2 210.2 203.9 L210 203.6"/>
    <path d="M60.1 139.2 Q57.9 138 57 137.1 Q56.1 136.3 55.5 135.3 Q54.9 134.3 54.8 133.2 Q54.6 132.1 54.8 131.2 Q55.1 130.2 55.6 129.4 Q56.2 128.7 57 128.4 Q57.8 128.1 58.6 128.2 Q59.4 128.3 59.9 128.8 Q60.5 129.3 60.6 130 Q60.7 130.6 60.4 131.1 Q60.1 131.6 59.6 131.7 Q59.1 131.9 58.7 131.7 Q58.3 131.4 58.3 131.1 L58.2 130.7"/>
    <path d="M73.7 132.2 Q72.4 129.9 72.1 128.7 Q71.8 127.5 71.8 126.4 Q71.9 125.2 72.3 124.2 Q72.7 123.2 73.4 122.5 Q74.1 121.8 75 121.5 Q75.9 121.2 76.7 121.3 Q77.6 121.5 78.2 122 Q78.8 122.5 79 123.2 Q79.2 123.9 78.9 124.5 Q78.7 125.1 78.1 125.4 Q77.6 125.6 77.1 125.5 Q76.6 125.4 76.4 125 Q76.2 124.6 76.4 124.3 L76.5 123.9"/>
    <path d="M17.1 150.4 Q18 152.8 18.2 154 Q18.3 155.2 18.1 156.4 Q17.9 157.5 17.4 158.4 Q16.9 159.4 16.1 160 Q15.3 160.6 14.3 160.8 Q13.4 161 12.6 160.7 Q11.8 160.5 11.2 159.9 Q10.7 159.3 10.6 158.6 Q10.5 157.8 10.9 157.3 Q11.2 156.7 11.7 156.5 Q12.3 156.3 12.7 156.5 Q13.2 156.7 13.4 157.1 Q13.5 157.5 13.4 157.9 L13.2 158.2"/>
    <path d="M9.1 91.5 Q9.7 89 9.7 87.7 Q9.6 86.5 9.2 85.4 Q8.9 84.3 8.2 83.5 Q7.5 82.6 6.6 82.2 Q5.7 81.7 4.8 81.7 Q3.8 81.6 3.1 82 Q2.3 82.4 1.9 83.1 Q1.4 83.7 1.5 84.5 Q1.5 85.2 1.9 85.7 Q2.3 86.2 2.9 86.3 Q3.5 86.4 3.9 86.1 Q4.3 85.8 4.4 85.4 Q4.5 85 4.3 84.7 L4.1 84.4"/>
    <path d="M106.5 75.4 Q105.9 72.8 105.9 71.6 Q105.9 70.4 106.3 69.3 Q106.6 68.2 107.3 67.3 Q108 66.5 108.9 66 Q109.8 65.5 110.7 65.4 Q111.6 65.4 112.4 65.8 Q113.2 66.1 113.6 66.8 Q114.1 67.5 114 68.2 Q114 68.9 113.6 69.4 Q113.2 69.9 112.7 70 Q112.1 70.1 111.7 69.9 Q111.2 69.6 111.1 69.2 Q111 68.8 111.2 68.5 L111.5 68.2"/>
    <path d="M144 71.5 Q145.5 69.3 145.9 68.2 Q146.3 67 146.3 65.9 Q146.4 64.7 146 63.7 Q145.7 62.6 145 61.9 Q144.4 61.1 143.5 60.8 Q142.6 60.4 141.8 60.5 Q140.9 60.5 140.3 61 Q139.6 61.5 139.4 62.2 Q139.2 62.9 139.4 63.5 Q139.6 64.1 140.1 64.4 Q140.6 64.7 141.1 64.6 Q141.6 64.5 141.8 64.1 Q142 63.8 141.9 63.4 L141.8 63.1"/>
    <path d="M10.9 73.8 Q11.3 76.4 11.2 77.6 Q11.1 78.9 10.7 79.9 Q10.2 81 9.5 81.8 Q8.8 82.6 7.9 83 Q7 83.5 6 83.5 Q5.1 83.4 4.3 83 Q3.6 82.6 3.2 81.9 Q2.8 81.2 2.9 80.5 Q2.9 79.8 3.4 79.3 Q3.8 78.8 4.4 78.7 Q5 78.7 5.4 79 Q5.8 79.2 5.8 79.7 Q5.9 80.1 5.7 80.4 L5.4 80.7"/>
    <path d="M2.6 52.3 Q1.1 54.4 0.6 55.5 Q0.2 56.7 0.1 57.8 Q0 59 0.3 60 Q0.6 61 1.2 61.8 Q1.8 62.6 2.7 63 Q3.5 63.4 4.4 63.4 Q5.2 63.4 5.9 62.9 Q6.5 62.5 6.8 61.8 Q7.1 61.1 6.9 60.5 Q6.7 59.9 6.2 59.6 Q5.8 59.2 5.3 59.3 Q4.8 59.4 4.5 59.7 Q4.3 60.1 4.3 60.4 L4.4 60.8"/>
    <path d="M93.6 8.2 Q93.6 5.6 93.8 4.4 Q94.1 3.2 94.7 2.2 Q95.3 1.2 96.1 0.5 Q96.9 -0.2 97.9 -0.5 Q98.9 -0.8 99.8 -0.6 Q100.7 -0.5 101.4 0 Q102.1 0.6 102.4 1.3 Q102.7 2.1 102.5 2.8 Q102.3 3.5 101.8 3.9 Q101.3 4.3 100.8 4.3 Q100.2 4.3 99.8 3.9 Q99.4 3.6 99.4 3.1 Q99.4 2.7 99.7 2.5 L100 2.2"/>
  </g>
  <!-- Ivy leaves: soft shadow, own colour, shading, sheen, faint veins, decay spots -->
  <g transform="translate(120.8 215.1) rotate(66.4)">
    <path d="M0 0 L4.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.3 0) scale(15.7)">
      <use href="#v2-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-5" fill="hsl(27.4 39% 23.3%)"/>
      <use href="#v2-leaf-5" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-5" fill="url(#v2-under)"/>
      <use href="#v2-leaf-5" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
      <circle cx="0.42" cy="0.091" r="0.07400000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.518" cy="-0.212" r="0.081" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.505" cy="-0.126" r="0.085" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.601" cy="0.08900000000000001" r="0.08900000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(130.2 215.6) rotate(-64.1)">
    <path d="M0 0 L5.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.5 0) scale(15.2)">
      <use href="#v2-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-5" fill="hsl(98.3 45.7% 18.8%)"/>
      <use href="#v2-leaf-5" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-5" fill="url(#v2-under)"/>
      <use href="#v2-leaf-5" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.036000000000000004" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(139.3 217.4) rotate(84.8)">
    <path d="M0 0 L3.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.1 0) scale(14.1)">
      <use href="#v2-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-1" fill="hsl(29.4 38.1% 24.3%)"/>
      <use href="#v2-leaf-1" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-1" fill="url(#v2-under)"/>
      <use href="#v2-leaf-1" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.039" stroke-linecap="round"/>
      <circle cx="0.573" cy="0.092" r="0.083" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.363" cy="0.209" r="0.048" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.489" cy="-0.166" r="0.067" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.535" cy="-0.201" r="0.062" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(148.5 219.1) rotate(-60.9)">
    <path d="M0 0 L5.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.3 0) scale(18.9)">
      <use href="#v2-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-0" fill="hsl(55.8 37.1% 28.4%)"/>
      <use href="#v2-leaf-0" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-0" fill="url(#v2-under)"/>
      <use href="#v2-leaf-0" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.028999999999999998" stroke-linecap="round"/>
      <circle cx="0.41100000000000003" cy="0.131" r="0.042" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.301" cy="0.192" r="0.08199999999999999" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(157.7 220.9) rotate(67.5)">
    <path d="M0 0 L5.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.3 0) scale(17.3)">
      <use href="#v2-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-0" fill="hsl(101.3 27.7% 17.6%)"/>
      <use href="#v2-leaf-0" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-0" fill="url(#v2-under)"/>
      <use href="#v2-leaf-0" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.032" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(176 224.6) rotate(61.1)">
    <path d="M0 0 L3.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.2 0) scale(18.3)">
      <use href="#v2-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-4" fill="hsl(87.4 42.2% 25.3%)"/>
      <use href="#v2-leaf-4" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-4" fill="url(#v2-under)"/>
      <use href="#v2-leaf-4" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(193.6 224.9) rotate(46.9)">
    <path d="M0 0 L3.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.2 0) scale(13.2)">
      <use href="#v2-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-1" fill="hsl(103.9 26.9% 16.7%)"/>
      <use href="#v2-leaf-1" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-1" fill="url(#v2-under)"/>
      <use href="#v2-leaf-1" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.042" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(200.2 218.3) rotate(-86.4)">
    <path d="M0 0 L5.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.4 0) scale(12.7)">
      <use href="#v2-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-5" fill="hsl(86.1 32.5% 19.6%)"/>
      <use href="#v2-leaf-5" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-5" fill="url(#v2-under)"/>
      <use href="#v2-leaf-5" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.043" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(83.7 198.2) rotate(-118)">
    <path d="M0 0 L3.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.7 0) scale(19.3)">
      <use href="#v2-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-5" fill="hsl(32.4 43.4% 29.2%)"/>
      <use href="#v2-leaf-5" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-5" fill="url(#v2-under)"/>
      <use href="#v2-leaf-5" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.028999999999999998" stroke-linecap="round"/>
      <circle cx="0.284" cy="0.092" r="0.046" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.384" cy="0.191" r="0.047" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.47" cy="-0.20600000000000002" r="0.08199999999999999" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.6" cy="-0.153" r="0.052000000000000005" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(74.3 196.3) rotate(-226.6)">
    <path d="M0 0 L4.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.2 0) scale(20.1)">
      <use href="#v2-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-2" fill="hsl(93.4 26% 17.6%)"/>
      <use href="#v2-leaf-2" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-2" fill="url(#v2-under)"/>
      <use href="#v2-leaf-2" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027000000000000003" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(64.9 194.4) rotate(-106.4)">
    <path d="M0 0 L3.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.8 0) scale(15.8)">
      <use href="#v2-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-5" fill="hsl(97.7 27.5% 16.3%)"/>
      <use href="#v2-leaf-5" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-5" fill="url(#v2-under)"/>
      <use href="#v2-leaf-5" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(56 190.7) rotate(-212.6)">
    <path d="M0 0 L3.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.1 0) scale(19.6)">
      <use href="#v2-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-2" fill="hsl(61.5 35.4% 26.2%)"/>
      <use href="#v2-leaf-2" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-2" fill="url(#v2-under)"/>
      <use href="#v2-leaf-2" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027999999999999997" stroke-linecap="round"/>
      <circle cx="0.257" cy="0.154" r="0.083" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.39" cy="-0.153" r="0.079" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(38.1 183.8) rotate(-196.5)">
    <path d="M0 0 L4.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.8 0) scale(11.2)">
      <use href="#v2-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-2" fill="hsl(101.3 35.5% 20.5%)"/>
      <use href="#v2-leaf-2" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-2" fill="url(#v2-under)"/>
      <use href="#v2-leaf-2" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.049" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(19.9 177.5) rotate(-209.9)">
    <path d="M0 0 L3.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.6 0) scale(15.5)">
      <use href="#v2-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-0" fill="hsl(63.6 41.9% 30.8%)"/>
      <use href="#v2-leaf-0" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-0" fill="url(#v2-under)"/>
      <use href="#v2-leaf-0" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.036000000000000004" stroke-linecap="round"/>
      <circle cx="0.501" cy="0.054000000000000006" r="0.086" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.376" cy="0.138" r="0.076" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(6 165.9) rotate(-180.6)">
    <path d="M0 0 L4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4 0) scale(16.1)">
      <use href="#v2-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-5" fill="hsl(29.4 41.7% 25.3%)"/>
      <use href="#v2-leaf-5" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-5" fill="url(#v2-under)"/>
      <use href="#v2-leaf-5" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.034" stroke-linecap="round"/>
      <circle cx="0.22699999999999998" cy="0.192" r="0.086" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.509" cy="0.065" r="0.064" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.41100000000000003" cy="0.109" r="0.054000000000000006" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.465" cy="-0.196" r="0.07200000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(60.2 170) rotate(-153.4)">
    <path d="M0 0 L3.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.2 0) scale(19.7)">
      <use href="#v2-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-3" fill="hsl(25.1 31.3% 27.4%)"/>
      <use href="#v2-leaf-3" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-3" fill="url(#v2-under)"/>
      <use href="#v2-leaf-3" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027999999999999997" stroke-linecap="round"/>
      <circle cx="0.608" cy="0.095" r="0.065" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.406" cy="0.171" r="0.065" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.43799999999999994" cy="0.102" r="0.071" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.308" cy="0.226" r="0.085" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(48.8 172.7) rotate(-255.5)">
    <path d="M0 0 L4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4 0) scale(13)">
      <use href="#v2-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-2" fill="hsl(105 41.3% 22%)"/>
      <use href="#v2-leaf-2" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-2" fill="url(#v2-under)"/>
      <use href="#v2-leaf-2" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.042" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(27.2 182) rotate(-261.6)">
    <path d="M0 0 L5.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.7 0) scale(17.6)">
      <use href="#v2-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-0" fill="hsl(90.9 44.2% 18.2%)"/>
      <use href="#v2-leaf-0" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-0" fill="url(#v2-under)"/>
      <use href="#v2-leaf-0" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.031" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(15.6 184.2) rotate(-119)">
    <path d="M0 0 L5.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.1 0) scale(12.7)">
      <use href="#v2-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-5" fill="hsl(89.5 46% 28%)"/>
      <use href="#v2-leaf-5" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-5" fill="url(#v2-under)"/>
      <use href="#v2-leaf-5" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.043" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(6.7 176.5) rotate(-206.3)">
    <path d="M0 0 L3.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.3 0) scale(10.1)">
      <use href="#v2-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-0" fill="hsl(36.5 34.1% 25.8%)"/>
      <use href="#v2-leaf-0" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-0" fill="url(#v2-under)"/>
      <use href="#v2-leaf-0" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.054000000000000006" stroke-linecap="round"/>
      <circle cx="0.439" cy="-0.157" r="0.077" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.5660000000000001" cy="0.069" r="0.078" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.5920000000000001" cy="0.038" r="0.08199999999999999" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.5" cy="-0.013999999999999999" r="0.063" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(6.3 153.4) rotate(-136.3)">
    <path d="M0 0 L4.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.8 0) scale(11.1)">
      <use href="#v2-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-3" fill="hsl(35.4 43.4% 23.1%)"/>
      <use href="#v2-leaf-3" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-3" fill="url(#v2-under)"/>
      <use href="#v2-leaf-3" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.05" stroke-linecap="round"/>
      <circle cx="0.289" cy="-0.092" r="0.085" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.49200000000000005" cy="0.185" r="0.085" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.653" cy="0.022000000000000002" r="0.069" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.435" cy="-0.158" r="0.08900000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(83.3 165.3) rotate(-181.9)">
    <path d="M0 0 L5.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.3 0) scale(22.8)">
      <use href="#v2-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-1" fill="hsl(92.2 29.2% 27.4%)"/>
      <use href="#v2-leaf-1" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-1" fill="url(#v2-under)"/>
      <use href="#v2-leaf-1" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.024" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(63.6 143.8) rotate(-179.2)">
    <path d="M0 0 L5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5 0) scale(22.9)">
      <use href="#v2-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-0" fill="hsl(53.7 34.3% 33.1%)"/>
      <use href="#v2-leaf-0" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-0" fill="url(#v2-under)"/>
      <use href="#v2-leaf-0" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.024" stroke-linecap="round"/>
      <circle cx="0.47100000000000003" cy="0.109" r="0.054000000000000006" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.272" cy="-0.138" r="0.086" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(37 100) rotate(-76.9)">
    <path d="M0 0 L5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5 0) scale(13.7)">
      <use href="#v2-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-1" fill="hsl(110 43.2% 19.9%)"/>
      <use href="#v2-leaf-1" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-1" fill="url(#v2-under)"/>
      <use href="#v2-leaf-1" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.04" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(21.8 83.8) rotate(-92.1)">
    <path d="M0 0 L3.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.5 0) scale(12.3)">
      <use href="#v2-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-1" fill="hsl(30.2 30.2% 28.4%)"/>
      <use href="#v2-leaf-1" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-1" fill="url(#v2-under)"/>
      <use href="#v2-leaf-1" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.045" stroke-linecap="round"/>
      <circle cx="0.251" cy="-0.168" r="0.046" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.305" cy="-0.133" r="0.078" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.308" cy="-0.10800000000000001" r="0.054000000000000006" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.62" cy="-0.017" r="0.044000000000000004" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(14.8 75.1) rotate(-192.3)">
    <path d="M0 0 L4.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.9 0) scale(17.4)">
      <use href="#v2-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-5" fill="hsl(36.7 29.7% 20.8%)"/>
      <use href="#v2-leaf-5" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-5" fill="url(#v2-under)"/>
      <use href="#v2-leaf-5" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.032" stroke-linecap="round"/>
      <circle cx="0.442" cy="-0.135" r="0.08" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.484" cy="0.057999999999999996" r="0.077" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.462" cy="0.10099999999999999" r="0.055999999999999994" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.569" cy="-0.16699999999999998" r="0.06" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(120.8 209.5) rotate(39.3)">
    <path d="M0 0 L5.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.4 0) scale(21.5)">
      <use href="#v2-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-3" fill="hsl(88.7 36% 26.8%)"/>
      <use href="#v2-leaf-3" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-3" fill="url(#v2-under)"/>
      <use href="#v2-leaf-3" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.026000000000000002" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(142.7 209.4) rotate(32.9)">
    <path d="M0 0 L5.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.9 0) scale(11.7)">
      <use href="#v2-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-4" fill="hsl(96.7 34.1% 22.8%)"/>
      <use href="#v2-leaf-4" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-4" fill="url(#v2-under)"/>
      <use href="#v2-leaf-4" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.047" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(153.6 209.1) rotate(-53.7)">
    <path d="M0 0 L4.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.7 0) scale(16.9)">
      <use href="#v2-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-3" fill="hsl(89.8 39% 27.4%)"/>
      <use href="#v2-leaf-3" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-3" fill="url(#v2-under)"/>
      <use href="#v2-leaf-3" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.033" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(164.4 207.3) rotate(42.6)">
    <path d="M0 0 L4.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.5 0) scale(14.2)">
      <use href="#v2-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-0" fill="hsl(85.3 44.4% 19%)"/>
      <use href="#v2-leaf-0" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-0" fill="url(#v2-under)"/>
      <use href="#v2-leaf-0" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.039" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(136.4 202.5) rotate(-47.4)">
    <path d="M0 0 L3.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.3 0) scale(15.2)">
      <use href="#v2-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-0" fill="hsl(60.3 39.3% 30.6%)"/>
      <use href="#v2-leaf-0" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-0" fill="url(#v2-under)"/>
      <use href="#v2-leaf-0" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.036000000000000004" stroke-linecap="round"/>
      <circle cx="0.452" cy="0.17300000000000001" r="0.053" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.488" cy="-0.133" r="0.047" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(146.5 207.6) rotate(97.7)">
    <path d="M0 0 L5.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.5 0) scale(14.7)">
      <use href="#v2-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-0" fill="hsl(88.8 33.5% 20.2%)"/>
      <use href="#v2-leaf-0" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-0" fill="url(#v2-under)"/>
      <use href="#v2-leaf-0" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.037000000000000005" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(155.5 214.3) rotate(-14.5)">
    <path d="M0 0 L3.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.2 0) scale(12.6)">
      <use href="#v2-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-5" fill="hsl(98.4 40.4% 27.4%)"/>
      <use href="#v2-leaf-5" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-5" fill="url(#v2-under)"/>
      <use href="#v2-leaf-5" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.044000000000000004" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(164.9 220.5) rotate(79.2)">
    <path d="M0 0 L3.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.4 0) scale(16.4)">
      <use href="#v2-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-3" fill="hsl(85.1 39.1% 24.5%)"/>
      <use href="#v2-leaf-3" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-3" fill="url(#v2-under)"/>
      <use href="#v2-leaf-3" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.034" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(173.6 227.6) rotate(-7.3)">
    <path d="M0 0 L4.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.2 0) scale(17.4)">
      <use href="#v2-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-2" fill="hsl(92.1 29.5% 19.9%)"/>
      <use href="#v2-leaf-2" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-2" fill="url(#v2-under)"/>
      <use href="#v2-leaf-2" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.032" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(182 235.1) rotate(81.6)">
    <path d="M0 0 L5.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.8 0) scale(18.1)">
      <use href="#v2-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-2" fill="hsl(54.9 45.7% 33%)"/>
      <use href="#v2-leaf-2" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-2" fill="url(#v2-under)"/>
      <use href="#v2-leaf-2" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
      <circle cx="0.305" cy="-0.16899999999999998" r="0.071" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.628" cy="0.022000000000000002" r="0.046" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(193.3 235) rotate(-52.9)">
    <path d="M0 0 L4.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.5 0) scale(11.6)">
      <use href="#v2-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-2" fill="hsl(24.4 39.2% 24.8%)"/>
      <use href="#v2-leaf-2" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-2" fill="url(#v2-under)"/>
      <use href="#v2-leaf-2" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.047" stroke-linecap="round"/>
      <circle cx="0.638" cy="-0.121" r="0.066" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.479" cy="0.2" r="0.045" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.584" cy="-0.018000000000000002" r="0.06" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.5820000000000001" cy="0" r="0.068" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(203.1 229.5) rotate(33.7)">
    <path d="M0 0 L3.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.1 0) scale(13.2)">
      <use href="#v2-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-2" fill="hsl(106.8 45.8% 16.3%)"/>
      <use href="#v2-leaf-2" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-2" fill="url(#v2-under)"/>
      <use href="#v2-leaf-2" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.042" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(215.1 210.7) rotate(-3)">
    <path d="M0 0 L5.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.5 0) scale(15.7)">
      <use href="#v2-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-3" fill="hsl(92.5 28.5% 21.6%)"/>
      <use href="#v2-leaf-3" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-3" fill="url(#v2-under)"/>
      <use href="#v2-leaf-3" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(98.3 166.2) rotate(-55)">
    <path d="M0 0 L5.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.8 0) scale(18.6)">
      <use href="#v2-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-0" fill="hsl(56.6 47.8% 30.1%)"/>
      <use href="#v2-leaf-0" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-0" fill="url(#v2-under)"/>
      <use href="#v2-leaf-0" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
      <circle cx="0.512" cy="0.129" r="0.046" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.635" cy="-0.038" r="0.045" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(93 157.1) rotate(-193.9)">
    <path d="M0 0 L3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3 0) scale(18.6)">
      <use href="#v2-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-0" fill="hsl(111.7 32.6% 26%)"/>
      <use href="#v2-leaf-0" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-0" fill="url(#v2-under)"/>
      <use href="#v2-leaf-0" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(69.2 142.1) rotate(-118.5)">
    <path d="M0 0 L4.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.7 0) scale(15.4)">
      <use href="#v2-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-4" fill="hsl(89.5 33.6% 23.4%)"/>
      <use href="#v2-leaf-4" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-4" fill="url(#v2-under)"/>
      <use href="#v2-leaf-4" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.036000000000000004" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(60.1 139.2) rotate(-204.6)">
    <path d="M0 0 L5.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.4 0) scale(15.4)">
      <use href="#v2-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-2" fill="hsl(95 30.3% 15.1%)"/>
      <use href="#v2-leaf-2" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-2" fill="url(#v2-under)"/>
      <use href="#v2-leaf-2" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.036000000000000004" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(73.7 132.2) rotate(-91.4)">
    <path d="M0 0 L5.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.6 0) scale(12.5)">
      <use href="#v2-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-0" fill="hsl(37.1 39.8% 21.8%)"/>
      <use href="#v2-leaf-0" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-0" fill="url(#v2-under)"/>
      <use href="#v2-leaf-0" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.044000000000000004" stroke-linecap="round"/>
      <circle cx="0.544" cy="0.026000000000000002" r="0.063" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.657" cy="0.07" r="0.049" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.46" cy="0.22399999999999998" r="0.052000000000000005" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.47200000000000003" cy="-0.191" r="0.063" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(76.6 140) rotate(-97.6)">
    <path d="M0 0 L4.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.3 0) scale(17.1)">
      <use href="#v2-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-4" fill="hsl(32.4 37.4% 25.5%)"/>
      <use href="#v2-leaf-4" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-4" fill="url(#v2-under)"/>
      <use href="#v2-leaf-4" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.032" stroke-linecap="round"/>
      <circle cx="0.29" cy="-0.131" r="0.052000000000000005" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.49200000000000005" cy="-0.11800000000000001" r="0.045" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.381" cy="0.18899999999999997" r="0.043" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.375" cy="-0.14800000000000002" r="0.078" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(65.7 136.2) rotate(-217.1)">
    <path d="M0 0 L3.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.6 0) scale(12.5)">
      <use href="#v2-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-2" fill="hsl(33 38% 24.8%)"/>
      <use href="#v2-leaf-2" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-2" fill="url(#v2-under)"/>
      <use href="#v2-leaf-2" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.044000000000000004" stroke-linecap="round"/>
      <circle cx="0.262" cy="0.11199999999999999" r="0.05" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.191" cy="0.147" r="0.076" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.46" cy="0.1" r="0.079" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.64" cy="0.063" r="0.051" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(54.9 132.2) rotate(-108.1)">
    <path d="M0 0 L4.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.8 0) scale(12.3)">
      <use href="#v2-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-0" fill="hsl(30.3 39.5% 18.3%)"/>
      <use href="#v2-leaf-0" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-0" fill="url(#v2-under)"/>
      <use href="#v2-leaf-0" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.045" stroke-linecap="round"/>
      <circle cx="0.446" cy="-0.133" r="0.066" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.301" cy="-0.124" r="0.078" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.47200000000000003" cy="0.11699999999999999" r="0.05" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.599" cy="-0.061" r="0.047" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(43.7 129.6) rotate(-239.2)">
    <path d="M0 0 L5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5 0) scale(18.9)">
      <use href="#v2-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-1" fill="hsl(50.4 45.5% 34.1%)"/>
      <use href="#v2-leaf-1" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-1" fill="url(#v2-under)"/>
      <use href="#v2-leaf-1" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.028999999999999998" stroke-linecap="round"/>
      <circle cx="0.5670000000000001" cy="0.081" r="0.081" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.45" cy="-0.22699999999999998" r="0.08900000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(32.4 127.6) rotate(-97.1)">
    <path d="M0 0 L5.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.7 0) scale(11.5)">
      <use href="#v2-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-2" fill="hsl(32.5 40.6% 29.8%)"/>
      <use href="#v2-leaf-2" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-2" fill="url(#v2-under)"/>
      <use href="#v2-leaf-2" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.048" stroke-linecap="round"/>
      <circle cx="0.521" cy="0.15" r="0.081" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.48200000000000004" cy="-0.1" r="0.052000000000000005" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.562" cy="0.064" r="0.068" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.5920000000000001" cy="-0.067" r="0.07400000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(21.1 125.6) rotate(-232.5)">
    <path d="M0 0 L5.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.7 0) scale(13.8)">
      <use href="#v2-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-3" fill="hsl(90.8 32.7% 17.2%)"/>
      <use href="#v2-leaf-3" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-3" fill="url(#v2-under)"/>
      <use href="#v2-leaf-3" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.04" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(11.4 141.7) rotate(-195.3)">
    <path d="M0 0 L5.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.3 0) scale(16.9)">
      <use href="#v2-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-5" fill="hsl(94.2 39.1% 15.9%)"/>
      <use href="#v2-leaf-5" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-5" fill="url(#v2-under)"/>
      <use href="#v2-leaf-5" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.032" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(17.1 150.4) rotate(-346)">
    <path d="M0 0 L3.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.1 0) scale(13.7)">
      <use href="#v2-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-0" fill="hsl(109.5 43.6% 19.1%)"/>
      <use href="#v2-leaf-0" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-0" fill="url(#v2-under)"/>
      <use href="#v2-leaf-0" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.04" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(9.8 123.3) rotate(-104.8)">
    <path d="M0 0 L4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4 0) scale(15.2)">
      <use href="#v2-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-4" fill="hsl(110.3 37.4% 19.1%)"/>
      <use href="#v2-leaf-4" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-4" fill="url(#v2-under)"/>
      <use href="#v2-leaf-4" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.036000000000000004" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(3.9 113.5) rotate(-190.3)">
    <path d="M0 0 L5.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.9 0) scale(12.6)">
      <use href="#v2-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-2" fill="hsl(92.4 27.3% 22.2%)"/>
      <use href="#v2-leaf-2" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-2" fill="url(#v2-under)"/>
      <use href="#v2-leaf-2" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.044000000000000004" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(4.5 102) rotate(-26.2)">
    <path d="M0 0 L5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5 0) scale(16.7)">
      <use href="#v2-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-3" fill="hsl(105.5 38.7% 26%)"/>
      <use href="#v2-leaf-3" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-3" fill="url(#v2-under)"/>
      <use href="#v2-leaf-3" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.033" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(9.1 91.5) rotate(-128.7)">
    <path d="M0 0 L5.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.5 0) scale(9.7)">
      <use href="#v2-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-3" fill="hsl(90.8 35.5% 28.8%)"/>
      <use href="#v2-leaf-3" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-3" fill="url(#v2-under)"/>
      <use href="#v2-leaf-3" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.057" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(98.2 147.6) rotate(-160.7)">
    <path d="M0 0 L4.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.6 0) scale(24.1)">
      <use href="#v2-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-1" fill="hsl(100 28.6% 20.3%)"/>
      <use href="#v2-leaf-1" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-1" fill="url(#v2-under)"/>
      <use href="#v2-leaf-1" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.023" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(104.5 117.1) rotate(-25.5)">
    <path d="M0 0 L3.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.2 0) scale(19.5)">
      <use href="#v2-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-0" fill="hsl(30.3 37.1% 29.9%)"/>
      <use href="#v2-leaf-0" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-0" fill="url(#v2-under)"/>
      <use href="#v2-leaf-0" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027999999999999997" stroke-linecap="round"/>
      <circle cx="0.451" cy="-0.138" r="0.047" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.583" cy="0.084" r="0.062" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.452" cy="-0.131" r="0.048" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.544" cy="0.009000000000000001" r="0.05" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(116.3 100.8) rotate(11.9)">
    <path d="M0 0 L5.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.6 0) scale(15.8)">
      <use href="#v2-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-2" fill="hsl(103.9 38.9% 26.1%)"/>
      <use href="#v2-leaf-2" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-2" fill="url(#v2-under)"/>
      <use href="#v2-leaf-2" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(110.3 83.6) rotate(-57.3)">
    <path d="M0 0 L4.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.3 0) scale(18.7)">
      <use href="#v2-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-5" fill="hsl(104.1 45.9% 19.9%)"/>
      <use href="#v2-leaf-5" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-5" fill="url(#v2-under)"/>
      <use href="#v2-leaf-5" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.028999999999999998" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(106.5 75.4) rotate(-172.7)">
    <path d="M0 0 L5.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.4 0) scale(12.6)">
      <use href="#v2-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-4" fill="hsl(107.8 42.9% 20.5%)"/>
      <use href="#v2-leaf-4" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-4" fill="url(#v2-under)"/>
      <use href="#v2-leaf-4" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.043" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(123.1 93.3) rotate(-85.9)">
    <path d="M0 0 L4.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.3 0) scale(14.3)">
      <use href="#v2-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-0" fill="hsl(28.9 39.2% 23.2%)"/>
      <use href="#v2-leaf-0" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-0" fill="url(#v2-under)"/>
      <use href="#v2-leaf-0" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.038" stroke-linecap="round"/>
      <circle cx="0.39799999999999996" cy="-0.13" r="0.066" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.368" cy="0.121" r="0.069" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.581" cy="0.076" r="0.076" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.36200000000000004" cy="-0.166" r="0.065" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(136.9 78.6) rotate(-108.2)">
    <path d="M0 0 L4.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.9 0) scale(16.7)">
      <use href="#v2-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-3" fill="hsl(85.5 31.6% 18.8%)"/>
      <use href="#v2-leaf-3" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-3" fill="url(#v2-under)"/>
      <use href="#v2-leaf-3" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.033" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(144 71.5) rotate(27.7)">
    <path d="M0 0 L3.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.3 0) scale(11.7)">
      <use href="#v2-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-5" fill="hsl(103.9 37.2% 16.6%)"/>
      <use href="#v2-leaf-5" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-5" fill="url(#v2-under)"/>
      <use href="#v2-leaf-5" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.047" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(95 134.9) rotate(-64.2)">
    <path d="M0 0 L4.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.2 0) scale(18.3)">
      <use href="#v2-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-5" fill="hsl(55.7 38.1% 33.4%)"/>
      <use href="#v2-leaf-5" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-5" fill="url(#v2-under)"/>
      <use href="#v2-leaf-5" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
      <circle cx="0.336" cy="-0.095" r="0.085" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.506" cy="-0.073" r="0.066" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(94.4 108.8) rotate(-43.4)">
    <path d="M0 0 L4.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.7 0) scale(23.8)">
      <use href="#v2-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-4" fill="hsl(25.2 40.7% 24.4%)"/>
      <use href="#v2-leaf-4" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-4" fill="url(#v2-under)"/>
      <use href="#v2-leaf-4" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.023" stroke-linecap="round"/>
      <circle cx="0.507" cy="-0.152" r="0.055" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.387" cy="0.124" r="0.062" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.627" cy="0.011000000000000001" r="0.073" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.47600000000000003" cy="0.063" r="0.075" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(78.4 82.3) rotate(-83.4)">
    <path d="M0 0 L4.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.9 0) scale(18)">
      <use href="#v2-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-5" fill="hsl(109.9 42.7% 27.2%)"/>
      <use href="#v2-leaf-5" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-5" fill="url(#v2-under)"/>
      <use href="#v2-leaf-5" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.031" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(69.1 75.6) rotate(-218.4)">
    <path d="M0 0 L5.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.9 0) scale(15.7)">
      <use href="#v2-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-1" fill="hsl(32.2 34.5% 27.4%)"/>
      <use href="#v2-leaf-1" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-1" fill="url(#v2-under)"/>
      <use href="#v2-leaf-1" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
      <circle cx="0.23" cy="0.11900000000000001" r="0.087" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.547" cy="-0.04" r="0.064" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.5710000000000001" cy="-0.059000000000000004" r="0.085" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.434" cy="-0.096" r="0.084" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(60.7 67.8) rotate(-93.5)">
    <path d="M0 0 L5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5 0) scale(18.8)">
      <use href="#v2-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-4" fill="hsl(60.9 44.1% 27.5%)"/>
      <use href="#v2-leaf-4" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-4" fill="url(#v2-under)"/>
      <use href="#v2-leaf-4" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.028999999999999998" stroke-linecap="round"/>
      <circle cx="0.51" cy="0.059000000000000004" r="0.048" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.49200000000000005" cy="0.127" r="0.076" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(52.7 59.6) rotate(-197.3)">
    <path d="M0 0 L3.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.1 0) scale(12.9)">
      <use href="#v2-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-5" fill="hsl(27.1 38.7% 22%)"/>
      <use href="#v2-leaf-5" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-5" fill="url(#v2-under)"/>
      <use href="#v2-leaf-5" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.043" stroke-linecap="round"/>
      <circle cx="0.52" cy="0.11" r="0.040999999999999995" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.556" cy="-0.18600000000000003" r="0.062" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.516" cy="-0.069" r="0.08800000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.452" cy="0.099" r="0.043" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(33.7 47.6) rotate(-212.4)">
    <path d="M0 0 L4.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.9 0) scale(18.7)">
      <use href="#v2-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-0" fill="hsl(66.5 43.7% 29.9%)"/>
      <use href="#v2-leaf-0" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-0" fill="url(#v2-under)"/>
      <use href="#v2-leaf-0" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.028999999999999998" stroke-linecap="round"/>
      <circle cx="0.273" cy="0.132" r="0.07400000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.386" cy="-0.114" r="0.049" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(22.5 45.4) rotate(-124.5)">
    <path d="M0 0 L5.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.7 0) scale(10.4)">
      <use href="#v2-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-2" fill="hsl(90.7 32.8% 22.4%)"/>
      <use href="#v2-leaf-2" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-2" fill="url(#v2-under)"/>
      <use href="#v2-leaf-2" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.053" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(11.1 44.6) rotate(-229.5)">
    <path d="M0 0 L5.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.7 0) scale(15.2)">
      <use href="#v2-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-2" fill="hsl(92 44.7% 22%)"/>
      <use href="#v2-leaf-2" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-2" fill="url(#v2-under)"/>
      <use href="#v2-leaf-2" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.036000000000000004" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(7.2 64.2) rotate(-219.8)">
    <path d="M0 0 L5.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.8 0) scale(16.3)">
      <use href="#v2-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-4" fill="hsl(101.2 41.3% 28.1%)"/>
      <use href="#v2-leaf-4" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-4" fill="url(#v2-under)"/>
      <use href="#v2-leaf-4" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.034" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(10.9 73.8) rotate(-349.7)">
    <path d="M0 0 L5.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.3 0) scale(10.3)">
      <use href="#v2-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-2" fill="hsl(102.5 35.7% 27.1%)"/>
      <use href="#v2-leaf-2" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-2" fill="url(#v2-under)"/>
      <use href="#v2-leaf-2" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.053" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(2.6 52.3) rotate(-183.5)">
    <path d="M0 0 L3.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.7 0) scale(15.8)">
      <use href="#v2-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-2" fill="hsl(30.5 30.7% 22.8%)"/>
      <use href="#v2-leaf-2" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-2" fill="url(#v2-under)"/>
      <use href="#v2-leaf-2" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
      <circle cx="0.49200000000000005" cy="0.068" r="0.086" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.6579999999999999" cy="0.023" r="0.059000000000000004" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.536" cy="0.008" r="0.049" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.31" cy="0.158" r="0.048" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(97 61.5) rotate(-32)">
    <path d="M0 0 L3.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.5 0) scale(14.4)">
      <use href="#v2-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-0" fill="hsl(100.6 30.9% 26.2%)"/>
      <use href="#v2-leaf-0" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-0" fill="url(#v2-under)"/>
      <use href="#v2-leaf-0" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.038" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(96 50.8) rotate(-143.9)">
    <path d="M0 0 L5.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.2 0) scale(14.4)">
      <use href="#v2-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-3" fill="hsl(55.9 44.6% 28.7%)"/>
      <use href="#v2-leaf-3" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-3" fill="url(#v2-under)"/>
      <use href="#v2-leaf-3" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.038" stroke-linecap="round"/>
      <circle cx="0.295" cy="0.161" r="0.081" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.46" cy="0.138" r="0.053" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(95.8 40.1) rotate(-45.9)">
    <path d="M0 0 L5.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.5 0) scale(19.5)">
      <use href="#v2-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-5" fill="hsl(31 43.4% 19.4%)"/>
      <use href="#v2-leaf-5" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-5" fill="url(#v2-under)"/>
      <use href="#v2-leaf-5" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027999999999999997" stroke-linecap="round"/>
      <circle cx="0.557" cy="-0.067" r="0.05" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.389" cy="0.209" r="0.071" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.44799999999999995" cy="0.14400000000000002" r="0.043" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.524" cy="-0.076" r="0.054000000000000006" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(96.5 29.4) rotate(-124.1)">
    <path d="M0 0 L3.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.2 0) scale(17.5)">
      <use href="#v2-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-2" fill="hsl(61 47.6% 26.6%)"/>
      <use href="#v2-leaf-2" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-2" fill="url(#v2-under)"/>
      <use href="#v2-leaf-2" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.031" stroke-linecap="round"/>
      <circle cx="0.299" cy="-0.07400000000000001" r="0.042" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.47600000000000003" cy="-0.11" r="0.057999999999999996" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(96.1 18.7) rotate(-23.4)">
    <path d="M0 0 L4.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.8 0) scale(13)">
      <use href="#v2-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-2" fill="hsl(53.6 49.1% 31%)"/>
      <use href="#v2-leaf-2" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-2" fill="url(#v2-under)"/>
      <use href="#v2-leaf-2" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.042" stroke-linecap="round"/>
      <circle cx="0.276" cy="0.078" r="0.046" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.63" cy="0.055999999999999994" r="0.042" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(93.6 8.2) rotate(-177)">
    <path d="M0 0 L3.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.4 0) scale(16.5)">
      <use href="#v2-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v2-leaf-0" fill="hsl(104 32.7% 17.9%)"/>
      <use href="#v2-leaf-0" fill="url(#v2-shade)"/>
      <use href="#v2-leaf-0" fill="url(#v2-under)"/>
      <use href="#v2-leaf-0" fill="url(#v2-sheen)"/>
      <use href="#v2-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.033" stroke-linecap="round"/>
    </g>
  </g>
</svg>
`,M3=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 260" width="200" height="260">
  <defs>
    <path id="v3-leaf-0" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.23 -0.15 L0.26 -0.21 L0.34 -0.16 L0.38 -0.17 L0.47 -0.35 L0.58 -0.35 L0.5 -0.12 L0.53 -0.08 L0.78 -0.11 L0.98 0 L0.78 0.11 L0.53 0.09 L0.5 0.12 L0.6 0.38 L0.48 0.38 L0.38 0.17 L0.34 0.16 L0.26 0.2 L0.23 0.15 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v3-veins-0" d="M0.23 0 L0.86 0 M0.23 0 L0.53 0.35 M0.23 0 L0.52 -0.32 M0.23 0 L0.26 0.17 M0.23 0 L0.26 -0.17"/>
    <path id="v3-leaf-1" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.18 -0.2 L0.22 -0.28 L0.34 -0.16 L0.38 -0.17 L0.47 -0.35 L0.59 -0.36 L0.5 -0.12 L0.53 -0.08 L0.82 -0.12 L1.06 0 L0.82 0.12 L0.53 0.09 L0.5 0.12 L0.55 0.29 L0.46 0.29 L0.38 0.17 L0.34 0.16 L0.25 0.23 L0.21 0.17 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v3-veins-1" d="M0.23 0 L0.92 0 M0.23 0 L0.5 0.26 M0.23 0 L0.53 -0.32 M0.23 0 L0.24 0.19 M0.23 0 L0.21 -0.23"/>
    <path id="v3-leaf-2" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.2 -0.18 L0.24 -0.25 L0.34 -0.16 L0.38 -0.17 L0.48 -0.37 L0.59 -0.37 L0.5 -0.12 L0.53 -0.08 L0.81 -0.11 L1.03 0 L0.81 0.11 L0.53 0.09 L0.5 0.12 L0.55 0.29 L0.46 0.29 L0.38 0.17 L0.34 0.16 L0.23 0.26 L0.19 0.19 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v3-veins-2" d="M0.23 0 L0.9 0 M0.23 0 L0.5 0.27 M0.23 0 L0.53 -0.34 M0.23 0 L0.22 0.21 M0.23 0 L0.23 -0.2"/>
    <path id="v3-leaf-3" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.22 -0.16 L0.25 -0.22 L0.34 -0.16 L0.38 -0.17 L0.46 -0.3 L0.56 -0.31 L0.5 -0.12 L0.53 -0.08 L0.8 -0.11 L1.02 0 L0.8 0.11 L0.53 0.09 L0.5 0.12 L0.6 0.38 L0.48 0.37 L0.38 0.17 L0.34 0.16 L0.23 0.26 L0.19 0.19 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v3-veins-3" d="M0.23 0 L0.9 0 M0.23 0 L0.53 0.34 M0.23 0 L0.51 -0.28 M0.23 0 L0.22 0.21 M0.23 0 L0.25 -0.18"/>
    <path id="v3-leaf-4" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.22 -0.16 L0.25 -0.22 L0.34 -0.16 L0.38 -0.17 L0.47 -0.32 L0.57 -0.32 L0.5 -0.12 L0.53 -0.08 L0.75 -0.1 L0.94 0 L0.75 0.1 L0.53 0.09 L0.5 0.12 L0.59 0.36 L0.48 0.36 L0.38 0.17 L0.34 0.16 L0.22 0.27 L0.18 0.2 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v3-veins-4" d="M0.23 0 L0.83 0 M0.23 0 L0.53 0.33 M0.23 0 L0.51 -0.29 M0.23 0 L0.22 0.22 M0.23 0 L0.25 -0.18"/>
    <path id="v3-leaf-5" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.2 -0.18 L0.23 -0.25 L0.34 -0.16 L0.38 -0.17 L0.47 -0.35 L0.58 -0.35 L0.5 -0.12 L0.53 -0.08 L0.77 -0.1 L0.98 0 L0.77 0.1 L0.53 0.09 L0.5 0.12 L0.59 0.37 L0.48 0.37 L0.38 0.17 L0.34 0.16 L0.25 0.22 L0.22 0.16 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v3-veins-5" d="M0.23 0 L0.86 0 M0.23 0 L0.53 0.34 M0.23 0 L0.52 -0.32 M0.23 0 L0.25 0.18 M0.23 0 L0.23 -0.21"/>
    <linearGradient id="v3-shade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#000" stop-opacity="0.42"/>
      <stop offset="0.4" stop-color="#000" stop-opacity="0.06"/>
      <stop offset="0.75" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.18"/>
    </linearGradient>
    <linearGradient id="v3-under" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0.45" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.22"/>
    </linearGradient>
    <radialGradient id="v3-sheen" cx="0.45" cy="0.3" r="0.55">
      <stop offset="0" stop-color="#f4f6dc" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#f4f6dc" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- Soft shadows under the stems -->
  <g fill="none" stroke="#000" stroke-opacity="0.22" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 3)">
    <path d="M90.5 262 Q93.8 248.7 94.5 241.9 Q95.2 235.1 94.6 228.2 Q94.1 221.4 93.1 214.6 Q92.1 207.9 91.8 201 Q91.6 194.2 92.1 187.3 Q92.6 180.5 94.7 174 Q96.8 167.4 99.8 161.3 Q102.7 155.1 105.1 148.6 Q107.5 142.2 108.7 135.5 L109.9 128.7" stroke-width="7.3"/>
    <path d="M87 262 Q88.9 247.4 89.1 240.1 Q89.3 232.7 89.4 225.4 Q89.4 218 89.7 210.7 Q90.1 203.4 92.2 196.3 Q94.3 189.3 97.2 182.6 Q100.1 175.8 103.4 169.2 Q106.7 162.7 109.4 155.8 Q112.1 149 113.4 141.8 Q114.7 134.5 114.7 127.2 Q114.8 119.9 114.4 112.5 L113.9 105.2" stroke-width="6.5"/>
    <path d="M36.9 181.6 Q30.7 189.7 28.1 194.1 Q25.5 198.4 23.8 203.2 L22.1 208" stroke-width="1.8"/>
    <path d="M91.6 194.2 Q81.3 189.5 75.8 188.5 Q70.2 187.4 64.6 187 Q58.9 186.6 53.4 185.4 Q47.9 184.2 42.4 182.9 Q36.9 181.6 31.3 180.8 L25.7 180" stroke-width="2.3"/>
    <path d="M150.2 175.2 Q156.5 181.2 159.8 184 Q163.1 186.9 166.3 189.9 Q169.4 192.8 172.6 195.8 L175.8 198.8" stroke-width="1.9"/>
    <path d="M92.6 180.5 Q102.1 178.7 107 178.3 Q111.8 178 116.6 177.3 Q121.3 176.5 126.1 175.7 Q130.9 174.9 135.7 174.6 Q140.5 174.2 145.3 174.7 Q150.2 175.2 154.9 176.3 Q159.6 177.5 164 179.5 Q168.4 181.5 172.6 183.7 Q176.9 186 181.2 188.2 Q185.5 190.5 189.9 188.5 Q194.3 186.6 197.4 182.8 L200.5 179.1" stroke-width="2.5"/>
    <path d="M96.8 167.4 Q105.2 160.8 109.1 157.1 Q113 153.5 117.4 150.4 Q121.8 147.4 126.7 145.3 Q131.6 143.1 136.7 141.5 Q141.8 139.8 147.1 139.1 L152.4 138.3" stroke-width="2.7"/>
    <path d="M80.2 114.9 Q79.1 106.2 78.7 101.9 Q78.4 97.5 77.4 93.3 Q76.4 89 74.8 85 L73.1 80.9" stroke-width="1.6"/>
    <path d="M37.3 62.4 Q37.1 53.7 36.3 49.4 Q35.4 45.1 33.9 41 L32.4 36.9" stroke-width="1.6"/>
    <path d="M107.5 142.2 Q101.8 134.4 98.6 130.7 Q95.5 127 91.6 124 Q87.8 121 84 118 Q80.2 114.9 76.8 111.4 Q73.4 108 70.6 104 Q67.7 100.1 65.2 96 Q62.6 91.8 59.8 87.9 Q57 83.9 53.9 80.1 Q50.9 76.4 47.6 72.8 Q44.3 69.2 40.8 65.8 L37.3 62.4" stroke-width="2.1"/>
    <path d="M127.6 77 Q121.2 69.4 118.2 65.4 Q115.3 61.5 112.5 57.3 L109.7 53.2" stroke-width="2"/>
    <path d="M109.9 128.7 Q112 117.9 113.9 112.8 Q115.8 107.6 118.4 102.8 Q120.9 97.9 122.9 92.8 Q124.8 87.6 126.2 82.3 Q127.6 77 128.9 71.6 L130.3 66.3" stroke-width="2.6"/>
    <path d="M90.1 203.4 Q83 196.9 78.9 194.4 Q74.8 191.9 70.6 189.7 Q66.3 187.5 62 185.5 Q57.6 183.4 53.7 180.7 Q49.8 178 46.1 174.8 L42.5 171.7" stroke-width="1.9"/>
    <path d="M94.3 189.3 Q84.4 183.1 79.3 180.1 Q74.2 177.2 69.1 174.2 Q64.1 171.1 59.6 167.3 Q55.2 163.4 51.6 158.8 Q48 154.1 44.4 149.5 Q40.7 144.9 37.1 140.3 L33.4 135.7" stroke-width="2.2"/>
    <path d="M100.1 175.8 Q93.3 168.7 90.4 164.7 Q87.6 160.7 85.8 156.1 Q84 151.5 82.9 146.7 Q81.8 141.9 80.6 137.2 Q79.4 132.4 77.3 127.9 Q75.2 123.5 72.5 119.3 Q69.9 115.2 67.1 111.2 Q64.3 107.1 61.9 102.8 Q59.5 98.5 57.3 94.1 Q55 89.8 53.3 85.1 L51.6 80.5" stroke-width="2.1"/>
    <path d="M114.8 119.9 Q107.5 110.4 104.3 105.4 Q101.1 100.3 98.5 94.9 Q95.9 89.5 93.2 84.2 Q90.5 78.9 86.9 74.1 Q83.4 69.3 78.7 65.5 Q74.1 61.7 69.2 58.4 Q64.2 55.1 59.1 52 Q54 48.9 48.9 45.8 Q43.8 42.6 38.5 39.8 Q33.3 36.9 27.6 35.1 Q21.9 33.4 15.9 33.5 L9.9 33.6" stroke-width="2.5"/>
    <path d="M113.9 105.2 Q114.4 93.6 115.2 87.8 Q115.9 82.1 116.8 76.3 Q117.6 70.6 117.7 64.8 Q117.8 59 117.8 53.2 L117.9 47.4" stroke-width="2.5"/>
  </g>
  <!-- Trailing shoots: green-brown, with a thin highlight -->
  <g fill="none" stroke="hsl(68 22% 21%)" stroke-linecap="round" stroke-linejoin="round">
    <path d="M36.9 181.6 Q30.7 189.7 28.1 194.1 Q25.5 198.4 23.8 203.2 L22.1 208" stroke-width="1.1"/>
    <path d="M91.6 194.2 Q81.3 189.5 75.8 188.5 Q70.2 187.4 64.6 187 Q58.9 186.6 53.4 185.4 Q47.9 184.2 42.4 182.9 Q36.9 181.6 31.3 180.8 L25.7 180" stroke-width="1.6"/>
    <path d="M150.2 175.2 Q156.5 181.2 159.8 184 Q163.1 186.9 166.3 189.9 Q169.4 192.8 172.6 195.8 L175.8 198.8" stroke-width="1.2"/>
    <path d="M92.6 180.5 Q102.1 178.7 107 178.3 Q111.8 178 116.6 177.3 Q121.3 176.5 126.1 175.7 Q130.9 174.9 135.7 174.6 Q140.5 174.2 145.3 174.7 Q150.2 175.2 154.9 176.3 Q159.6 177.5 164 179.5 Q168.4 181.5 172.6 183.7 Q176.9 186 181.2 188.2 Q185.5 190.5 189.9 188.5 Q194.3 186.6 197.4 182.8 L200.5 179.1" stroke-width="1.8"/>
    <path d="M96.8 167.4 Q105.2 160.8 109.1 157.1 Q113 153.5 117.4 150.4 Q121.8 147.4 126.7 145.3 Q131.6 143.1 136.7 141.5 Q141.8 139.8 147.1 139.1 L152.4 138.3" stroke-width="2"/>
    <path d="M80.2 114.9 Q79.1 106.2 78.7 101.9 Q78.4 97.5 77.4 93.3 Q76.4 89 74.8 85 L73.1 80.9" stroke-width="1"/>
    <path d="M37.3 62.4 Q37.1 53.7 36.3 49.4 Q35.4 45.1 33.9 41 L32.4 36.9" stroke-width="1"/>
    <path d="M107.5 142.2 Q101.8 134.4 98.6 130.7 Q95.5 127 91.6 124 Q87.8 121 84 118 Q80.2 114.9 76.8 111.4 Q73.4 108 70.6 104 Q67.7 100.1 65.2 96 Q62.6 91.8 59.8 87.9 Q57 83.9 53.9 80.1 Q50.9 76.4 47.6 72.8 Q44.3 69.2 40.8 65.8 L37.3 62.4" stroke-width="1.4"/>
    <path d="M127.6 77 Q121.2 69.4 118.2 65.4 Q115.3 61.5 112.5 57.3 L109.7 53.2" stroke-width="1.3"/>
    <path d="M109.9 128.7 Q112 117.9 113.9 112.8 Q115.8 107.6 118.4 102.8 Q120.9 97.9 122.9 92.8 Q124.8 87.6 126.2 82.3 Q127.6 77 128.9 71.6 L130.3 66.3" stroke-width="1.9"/>
    <path d="M90.1 203.4 Q83 196.9 78.9 194.4 Q74.8 191.9 70.6 189.7 Q66.3 187.5 62 185.5 Q57.6 183.4 53.7 180.7 Q49.8 178 46.1 174.8 L42.5 171.7" stroke-width="1.2"/>
    <path d="M94.3 189.3 Q84.4 183.1 79.3 180.1 Q74.2 177.2 69.1 174.2 Q64.1 171.1 59.6 167.3 Q55.2 163.4 51.6 158.8 Q48 154.1 44.4 149.5 Q40.7 144.9 37.1 140.3 L33.4 135.7" stroke-width="1.5"/>
    <path d="M100.1 175.8 Q93.3 168.7 90.4 164.7 Q87.6 160.7 85.8 156.1 Q84 151.5 82.9 146.7 Q81.8 141.9 80.6 137.2 Q79.4 132.4 77.3 127.9 Q75.2 123.5 72.5 119.3 Q69.9 115.2 67.1 111.2 Q64.3 107.1 61.9 102.8 Q59.5 98.5 57.3 94.1 Q55 89.8 53.3 85.1 L51.6 80.5" stroke-width="1.4"/>
    <path d="M114.8 119.9 Q107.5 110.4 104.3 105.4 Q101.1 100.3 98.5 94.9 Q95.9 89.5 93.2 84.2 Q90.5 78.9 86.9 74.1 Q83.4 69.3 78.7 65.5 Q74.1 61.7 69.2 58.4 Q64.2 55.1 59.1 52 Q54 48.9 48.9 45.8 Q43.8 42.6 38.5 39.8 Q33.3 36.9 27.6 35.1 Q21.9 33.4 15.9 33.5 L9.9 33.6" stroke-width="1.8"/>
    <path d="M113.9 105.2 Q114.4 93.6 115.2 87.8 Q115.9 82.1 116.8 76.3 Q117.6 70.6 117.7 64.8 Q117.8 59 117.8 53.2 L117.9 47.4" stroke-width="1.8"/>
  </g>
  <g fill="none" stroke="hsl(70 25% 40%)" stroke-opacity="0.45" stroke-linecap="round" transform="translate(-0.4 -0.3)">
    <path d="M36.9 181.6 Q30.7 189.7 28.1 194.1 Q25.5 198.4 23.8 203.2 L22.1 208" stroke-width="0.3"/>
    <path d="M91.6 194.2 Q81.3 189.5 75.8 188.5 Q70.2 187.4 64.6 187 Q58.9 186.6 53.4 185.4 Q47.9 184.2 42.4 182.9 Q36.9 181.6 31.3 180.8 L25.7 180" stroke-width="0.5"/>
    <path d="M150.2 175.2 Q156.5 181.2 159.8 184 Q163.1 186.9 166.3 189.9 Q169.4 192.8 172.6 195.8 L175.8 198.8" stroke-width="0.4"/>
    <path d="M92.6 180.5 Q102.1 178.7 107 178.3 Q111.8 178 116.6 177.3 Q121.3 176.5 126.1 175.7 Q130.9 174.9 135.7 174.6 Q140.5 174.2 145.3 174.7 Q150.2 175.2 154.9 176.3 Q159.6 177.5 164 179.5 Q168.4 181.5 172.6 183.7 Q176.9 186 181.2 188.2 Q185.5 190.5 189.9 188.5 Q194.3 186.6 197.4 182.8 L200.5 179.1" stroke-width="0.5"/>
    <path d="M96.8 167.4 Q105.2 160.8 109.1 157.1 Q113 153.5 117.4 150.4 Q121.8 147.4 126.7 145.3 Q131.6 143.1 136.7 141.5 Q141.8 139.8 147.1 139.1 L152.4 138.3" stroke-width="0.6"/>
    <path d="M80.2 114.9 Q79.1 106.2 78.7 101.9 Q78.4 97.5 77.4 93.3 Q76.4 89 74.8 85 L73.1 80.9" stroke-width="0.3"/>
    <path d="M37.3 62.4 Q37.1 53.7 36.3 49.4 Q35.4 45.1 33.9 41 L32.4 36.9" stroke-width="0.3"/>
    <path d="M107.5 142.2 Q101.8 134.4 98.6 130.7 Q95.5 127 91.6 124 Q87.8 121 84 118 Q80.2 114.9 76.8 111.4 Q73.4 108 70.6 104 Q67.7 100.1 65.2 96 Q62.6 91.8 59.8 87.9 Q57 83.9 53.9 80.1 Q50.9 76.4 47.6 72.8 Q44.3 69.2 40.8 65.8 L37.3 62.4" stroke-width="0.4"/>
    <path d="M127.6 77 Q121.2 69.4 118.2 65.4 Q115.3 61.5 112.5 57.3 L109.7 53.2" stroke-width="0.4"/>
    <path d="M109.9 128.7 Q112 117.9 113.9 112.8 Q115.8 107.6 118.4 102.8 Q120.9 97.9 122.9 92.8 Q124.8 87.6 126.2 82.3 Q127.6 77 128.9 71.6 L130.3 66.3" stroke-width="0.6"/>
    <path d="M90.1 203.4 Q83 196.9 78.9 194.4 Q74.8 191.9 70.6 189.7 Q66.3 187.5 62 185.5 Q57.6 183.4 53.7 180.7 Q49.8 178 46.1 174.8 L42.5 171.7" stroke-width="0.4"/>
    <path d="M94.3 189.3 Q84.4 183.1 79.3 180.1 Q74.2 177.2 69.1 174.2 Q64.1 171.1 59.6 167.3 Q55.2 163.4 51.6 158.8 Q48 154.1 44.4 149.5 Q40.7 144.9 37.1 140.3 L33.4 135.7" stroke-width="0.4"/>
    <path d="M100.1 175.8 Q93.3 168.7 90.4 164.7 Q87.6 160.7 85.8 156.1 Q84 151.5 82.9 146.7 Q81.8 141.9 80.6 137.2 Q79.4 132.4 77.3 127.9 Q75.2 123.5 72.5 119.3 Q69.9 115.2 67.1 111.2 Q64.3 107.1 61.9 102.8 Q59.5 98.5 57.3 94.1 Q55 89.8 53.3 85.1 L51.6 80.5" stroke-width="0.4"/>
    <path d="M114.8 119.9 Q107.5 110.4 104.3 105.4 Q101.1 100.3 98.5 94.9 Q95.9 89.5 93.2 84.2 Q90.5 78.9 86.9 74.1 Q83.4 69.3 78.7 65.5 Q74.1 61.7 69.2 58.4 Q64.2 55.1 59.1 52 Q54 48.9 48.9 45.8 Q43.8 42.6 38.5 39.8 Q33.3 36.9 27.6 35.1 Q21.9 33.4 15.9 33.5 L9.9 33.6" stroke-width="0.5"/>
    <path d="M113.9 105.2 Q114.4 93.6 115.2 87.8 Q115.9 82.1 116.8 76.3 Q117.6 70.6 117.7 64.8 Q117.8 59 117.8 53.2 L117.9 47.4" stroke-width="0.5"/>
  </g>
  <!-- Woody trunks: tapering, shaded round, with streaky bark -->
  <g fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M90.5 262 Q93.8 248.7 94.5 241.9 Q95.2 235.1 94.6 228.2 Q94.1 221.4 93.1 214.6 Q92.1 207.9 91.8 201 Q91.6 194.2 92.1 187.3 Q92.6 180.5 94.7 174 Q96.8 167.4 99.8 161.3 Q102.7 155.1 105.1 148.6 Q107.5 142.2 108.7 135.5 L109.9 128.7" stroke="hsl(30 14% 19%)" stroke-width="3"/>
    <path d="M90.5 262 Q93.8 248.7 94.5 241.9 Q95.2 235.1 94.6 228.2 Q94.1 221.4 93.1 214.6 Q92.1 207.9 91.8 201 Q91.6 194.2 92.1 187.3 Q92.6 180.5 94.7 174 L96.8 167.4" stroke="hsl(30 14% 19%)" stroke-width="5"/>
    <path d="M90.5 262 Q93.8 248.7 94.5 241.9 Q95.2 235.1 94.6 228.2 Q94.1 221.4 93.1 214.6 L92.1 207.9" stroke="hsl(30 14% 19%)" stroke-width="6.6"/>
    <path d="M90.5 262 Q93.8 248.7 94.5 241.9 Q95.2 235.1 94.6 228.2 Q94.1 221.4 93.1 214.6 Q92.1 207.9 91.8 201 Q91.6 194.2 92.1 187.3 Q92.6 180.5 94.7 174 Q96.8 167.4 99.8 161.3 Q102.7 155.1 105.1 148.6 Q107.5 142.2 108.7 135.5 L109.9 128.7" stroke="#000" stroke-opacity="0.28" stroke-width="1" transform="translate(0.7 0.4)"/>
    <path d="M90.5 262 Q93.8 248.7 94.5 241.9 Q95.2 235.1 94.6 228.2 Q94.1 221.4 93.1 214.6 Q92.1 207.9 91.8 201 Q91.6 194.2 92.1 187.3 Q92.6 180.5 94.7 174 L96.8 167.4" stroke="#000" stroke-opacity="0.28" stroke-width="1.7" transform="translate(1.1 0.6)"/>
    <path d="M90.5 262 Q93.8 248.7 94.5 241.9 Q95.2 235.1 94.6 228.2 Q94.1 221.4 93.1 214.6 L92.1 207.9" stroke="#000" stroke-opacity="0.28" stroke-width="2.3" transform="translate(1.5 0.8)"/>
    <path d="M90.5 262 Q93.8 248.7 94.5 241.9 Q95.2 235.1 94.6 228.2 Q94.1 221.4 93.1 214.6 Q92.1 207.9 91.8 201 Q91.6 194.2 92.1 187.3 Q92.6 180.5 94.7 174 Q96.8 167.4 99.8 161.3 Q102.7 155.1 105.1 148.6 Q107.5 142.2 108.7 135.5 L109.9 128.7" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="0.5" transform="translate(-0.7 -0.3)"/>
    <path d="M90.5 262 Q93.8 248.7 94.5 241.9 Q95.2 235.1 94.6 228.2 Q94.1 221.4 93.1 214.6 Q92.1 207.9 91.8 201 Q91.6 194.2 92.1 187.3 Q92.6 180.5 94.7 174 L96.8 167.4" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="0.9" transform="translate(-1.1 -0.5)"/>
    <path d="M90.5 262 Q93.8 248.7 94.5 241.9 Q95.2 235.1 94.6 228.2 Q94.1 221.4 93.1 214.6 L92.1 207.9" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="1.2" transform="translate(-1.5 -0.7)"/>
    <path d="M90.5 262 Q93.8 248.7 94.5 241.9 Q95.2 235.1 94.6 228.2 Q94.1 221.4 93.1 214.6 Q92.1 207.9 91.8 201 Q91.6 194.2 92.1 187.3 Q92.6 180.5 94.7 174 L96.8 167.4" stroke="hsl(30 12% 9%)" stroke-opacity="0.55" stroke-width="1.3" stroke-dasharray="5.3 3 5 3.1"/>
    <path d="M90.5 262 Q93.8 248.7 94.5 241.9 Q95.2 235.1 94.6 228.2 Q94.1 221.4 93.1 214.6 Q92.1 207.9 91.8 201 Q91.6 194.2 92.1 187.3 Q92.6 180.5 94.7 174 L96.8 167.4" stroke="hsl(36 14% 38%)" stroke-opacity="0.35" stroke-width="0.8" stroke-dasharray="3.6 6.4" transform="translate(-0.8 0)"/>
  </g>
  <g fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M87 262 Q88.9 247.4 89.1 240.1 Q89.3 232.7 89.4 225.4 Q89.4 218 89.7 210.7 Q90.1 203.4 92.2 196.3 Q94.3 189.3 97.2 182.6 Q100.1 175.8 103.4 169.2 Q106.7 162.7 109.4 155.8 Q112.1 149 113.4 141.8 Q114.7 134.5 114.7 127.2 Q114.8 119.9 114.4 112.5 L113.9 105.2" stroke="hsl(30 14% 19%)" stroke-width="2.7"/>
    <path d="M87 262 Q88.9 247.4 89.1 240.1 Q89.3 232.7 89.4 225.4 Q89.4 218 89.7 210.7 Q90.1 203.4 92.2 196.3 Q94.3 189.3 97.2 182.6 Q100.1 175.8 103.4 169.2 Q106.7 162.7 109.4 155.8 L112.1 149" stroke="hsl(30 14% 19%)" stroke-width="4.4"/>
    <path d="M87 262 Q88.9 247.4 89.1 240.1 Q89.3 232.7 89.4 225.4 Q89.4 218 89.7 210.7 L90.1 203.4" stroke="hsl(30 14% 19%)" stroke-width="5.9"/>
    <path d="M87 262 Q88.9 247.4 89.1 240.1 Q89.3 232.7 89.4 225.4 Q89.4 218 89.7 210.7 Q90.1 203.4 92.2 196.3 Q94.3 189.3 97.2 182.6 Q100.1 175.8 103.4 169.2 Q106.7 162.7 109.4 155.8 Q112.1 149 113.4 141.8 Q114.7 134.5 114.7 127.2 Q114.8 119.9 114.4 112.5 L113.9 105.2" stroke="#000" stroke-opacity="0.28" stroke-width="0.9" transform="translate(0.6 0.3)"/>
    <path d="M87 262 Q88.9 247.4 89.1 240.1 Q89.3 232.7 89.4 225.4 Q89.4 218 89.7 210.7 Q90.1 203.4 92.2 196.3 Q94.3 189.3 97.2 182.6 Q100.1 175.8 103.4 169.2 Q106.7 162.7 109.4 155.8 L112.1 149" stroke="#000" stroke-opacity="0.28" stroke-width="1.5" transform="translate(1 0.5)"/>
    <path d="M87 262 Q88.9 247.4 89.1 240.1 Q89.3 232.7 89.4 225.4 Q89.4 218 89.7 210.7 L90.1 203.4" stroke="#000" stroke-opacity="0.28" stroke-width="2.1" transform="translate(1.3 0.7)"/>
    <path d="M87 262 Q88.9 247.4 89.1 240.1 Q89.3 232.7 89.4 225.4 Q89.4 218 89.7 210.7 Q90.1 203.4 92.2 196.3 Q94.3 189.3 97.2 182.6 Q100.1 175.8 103.4 169.2 Q106.7 162.7 109.4 155.8 Q112.1 149 113.4 141.8 Q114.7 134.5 114.7 127.2 Q114.8 119.9 114.4 112.5 L113.9 105.2" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="0.5" transform="translate(-0.6 -0.3)"/>
    <path d="M87 262 Q88.9 247.4 89.1 240.1 Q89.3 232.7 89.4 225.4 Q89.4 218 89.7 210.7 Q90.1 203.4 92.2 196.3 Q94.3 189.3 97.2 182.6 Q100.1 175.8 103.4 169.2 Q106.7 162.7 109.4 155.8 L112.1 149" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="0.8" transform="translate(-1 -0.4)"/>
    <path d="M87 262 Q88.9 247.4 89.1 240.1 Q89.3 232.7 89.4 225.4 Q89.4 218 89.7 210.7 L90.1 203.4" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="1.1" transform="translate(-1.3 -0.6)"/>
    <path d="M87 262 Q88.9 247.4 89.1 240.1 Q89.3 232.7 89.4 225.4 Q89.4 218 89.7 210.7 Q90.1 203.4 92.2 196.3 Q94.3 189.3 97.2 182.6 Q100.1 175.8 103.4 169.2 Q106.7 162.7 109.4 155.8 L112.1 149" stroke="hsl(30 12% 9%)" stroke-opacity="0.55" stroke-width="1.2" stroke-dasharray="6.6 3 3.5 4.7"/>
    <path d="M87 262 Q88.9 247.4 89.1 240.1 Q89.3 232.7 89.4 225.4 Q89.4 218 89.7 210.7 Q90.1 203.4 92.2 196.3 Q94.3 189.3 97.2 182.6 Q100.1 175.8 103.4 169.2 Q106.7 162.7 109.4 155.8 L112.1 149" stroke="hsl(36 14% 38%)" stroke-opacity="0.35" stroke-width="0.7" stroke-dasharray="4 8.3" transform="translate(-0.7 0)"/>
  </g>
  <!-- Fine hairy rootlets -->
  <path fill="none" stroke="hsl(30 18% 20%)" stroke-opacity="0.6" stroke-width="0.5" stroke-linecap="round" d="M91.6 259.8 l4 1.2 M93.1 255.7 l4.9 0.7 M93.8 249 l4.1 2 M93.3 254.7 l4.2 1.5 M93.8 237.6 l3.5 1.5 M95.1 239.1 l-4.5 -1.4 M95 241.7 l5.5 0 M94.3 242.3 l5.2 -1 M94.9 234.5 l-5.1 -1.5 M95 224.1 l4.2 -0.4 M94.6 229.4 l4.6 -0.6 M95 222.8 l-2.8 0.9 M93.1 217.3 l2.3 -0.7 M92.6 219.2 l4.4 -1.6 M93.7 220 l2 -0.4 M92.9 218.1 l-4.9 0.6 M91.7 202.6 l3.9 -0.8 M91.6 197.5 l-4 -0.3 M91.9 201.9 l3.1 -1 M92 195.3 l1.8 -0.5 M92 188.3 l1.8 0.4 M92.2 193.4 l-3.7 -1.1 M91.7 191.7 l3.4 -1 M92 182.2 l-1.5 -0.6 M95.8 171.4 l2.5 0.2 M94 174.5 l-3.2 -1.7 M94.5 176 l-2.8 -1 M94.6 176.5 l-3.3 -0.8 M99.6 160.7 l2.6 0.3 M102.3 161.2 l-2.1 -0.6 M98.4 160.8 l3.5 0.8 M98.1 156.1 l1.6 0.7 M103.9 147.6 l2.6 0.3 M103.5 154.4 l2.4 1 M104.3 144.5 l2.1 0.7 M104.3 143.4 l-1.6 -0.6 M107.5 131.5 l-2.8 0.4 M108.3 139.9 l-1.3 -0.6 M108.6 137.7 l2.3 0.4 M109.3 137.8 l2.6 0.9 M87.7 249.2 l3.5 1 M87.8 257 l-3.8 0.6 M88 258.1 l5.5 0.3 M87.9 251.1 l-4.8 -1.9 M88.9 247.1 l-4.8 -0.8 M88.9 245.9 l-3.7 -0.7 M89.2 247.3 l-2.7 0.4 M88.9 240 l-3.6 -1 M89.4 226.9 l2.3 -0.6 M89.4 218.9 l-5 0.5 M89.4 226.1 l4.6 -1.3 M89.4 219.3 l-3.2 -0.4 M89.6 209.5 l-2.7 0.3 M89.5 210.1 l-3.4 -0.4 M90 208.5 l3.1 0.1 M89.6 215 l-4.7 -1.2 M94.3 189.9 l-2.9 -1.7 M90.7 193.6 l-3.3 -1.4 M94 198.6 l-2.9 -0.1 M90.7 196.1 l-4.1 -1.6 M96.8 177 l-2.1 -0.4 M98.8 178 l3.9 0.6 M96.5 184.1 l-4.3 -1 M97.9 187.2 l-1.5 -0.9 M105.9 166.4 l-2.7 -0.8 M106.1 174.2 l2.7 0.9 M102.7 163.1 l-2.3 -0.5 M104.5 166.7 l-3.2 -3 M110.9 155.3 l-1.1 -1 M109.3 159 l-2.8 -1.8 M109 155 l1.6 1.2 M109.1 151 l1.7 0.3 M114.7 149 l2.7 1.1 M112.5 145.3 l3.1 0.6 M112.7 141.9 l-2.5 -1.4 M113.8 147.7 l3 -0.1 M114.8 125.4 l-1.3 0.3 M114.8 132.6 l-3.2 -1.2 M114.7 132.1 l2.3 -0.1 M114.8 130.6 l1.7 0.4 M114.5 113.5 l-1.6 0.4 M114.7 118.2 l2.4 0.2 M114.6 112 l-1.9 -0.4 M114.6 110.3 l2.1 -0.5"/>
  <!-- Tendrils -->
  <g fill="none" stroke="hsl(68 22% 24%)" stroke-width="0.75" stroke-linecap="round">
    <path d="M22.1 208 Q21.7 210.6 21.9 211.8 Q22 213 22.5 214.1 Q22.9 215.2 23.7 216 Q24.4 216.7 25.3 217.1 Q26.3 217.6 27.2 217.5 Q28.1 217.5 28.9 217 Q29.6 216.6 30 215.9 Q30.4 215.2 30.3 214.5 Q30.2 213.8 29.8 213.3 Q29.3 212.8 28.7 212.8 Q28.2 212.7 27.7 213 Q27.3 213.3 27.3 213.7 Q27.2 214.2 27.5 214.4 L27.7 214.7"/>
    <path d="M25.7 180 Q23.1 180.2 21.9 180.6 Q20.7 181 19.8 181.6 Q18.8 182.3 18.2 183.2 Q17.6 184.1 17.4 185.1 Q17.2 186 17.4 187 Q17.6 187.9 18.2 188.5 Q18.8 189.1 19.6 189.4 Q20.3 189.6 21 189.3 Q21.7 189.1 22.1 188.6 Q22.4 188 22.4 187.5 Q22.3 186.9 21.9 186.6 Q21.6 186.2 21.1 186.3 Q20.7 186.3 20.5 186.6 L20.3 186.9"/>
    <path d="M175.8 198.8 Q178 200.2 179.2 200.6 Q180.3 200.9 181.5 200.9 Q182.6 200.9 183.7 200.6 Q184.7 200.2 185.4 199.5 Q186.2 198.8 186.5 198 Q186.9 197.1 186.7 196.2 Q186.6 195.4 186.1 194.7 Q185.6 194.1 185 193.9 Q184.3 193.7 183.7 193.9 Q183 194.2 182.8 194.7 Q182.5 195.2 182.6 195.6 Q182.7 196.1 183.1 196.4 Q183.5 196.6 183.8 196.5 L184.1 196.4"/>
    <path d="M200.5 179.1 Q202.5 177.5 203.6 176.9 Q204.7 176.4 205.9 176.3 Q207 176.1 208.1 176.3 Q209.1 176.6 210 177.2 Q210.8 177.7 211.2 178.6 Q211.7 179.4 211.7 180.3 Q211.7 181.1 211.3 181.8 Q210.9 182.5 210.2 182.8 Q209.6 183.1 208.9 182.9 Q208.3 182.8 207.9 182.3 Q207.6 181.9 207.6 181.4 Q207.7 180.9 208 180.6 Q208.4 180.3 208.7 180.4 L209.1 180.5"/>
    <path d="M152.4 138.3 Q155 138.5 156.2 138.8 Q157.3 139.2 158.3 139.9 Q159.2 140.5 159.9 141.4 Q160.5 142.3 160.7 143.3 Q160.9 144.3 160.7 145.2 Q160.5 146.1 159.9 146.7 Q159.3 147.4 158.5 147.6 Q157.8 147.8 157.1 147.6 Q156.4 147.4 156 146.8 Q155.7 146.3 155.7 145.7 Q155.8 145.2 156.2 144.8 Q156.5 144.5 157 144.5 Q157.4 144.5 157.6 144.8 L157.8 145.1"/>
    <path d="M73.1 80.9 Q72.6 78.4 72.7 77.1 Q72.8 75.9 73.2 74.8 Q73.6 73.7 74.3 72.9 Q75 72.1 75.9 71.6 Q76.8 71.2 77.7 71.2 Q78.7 71.2 79.4 71.6 Q80.2 72 80.6 72.7 Q81 73.4 81 74.1 Q80.9 74.8 80.5 75.3 Q80.1 75.8 79.5 75.9 Q78.9 76 78.5 75.7 Q78.1 75.4 78 75 Q77.9 74.5 78.2 74.3 L78.4 74"/>
    <path d="M32.4 36.9 Q32 34.3 32.1 33.1 Q32.2 31.9 32.7 30.8 Q33.1 29.8 33.8 29 Q34.6 28.2 35.5 27.8 Q36.4 27.3 37.4 27.4 Q38.3 27.4 39 27.8 Q39.8 28.2 40.2 28.9 Q40.6 29.6 40.5 30.4 Q40.4 31.1 40 31.6 Q39.5 32 38.9 32.1 Q38.4 32.2 38 31.9 Q37.6 31.6 37.5 31.1 Q37.4 30.7 37.7 30.4 L37.9 30.2"/>
    <path d="M37.3 62.4 Q35.9 60.3 35.5 59.1 Q35 58 35 56.8 Q34.9 55.7 35.3 54.6 Q35.6 53.6 36.2 52.8 Q36.9 52.1 37.7 51.7 Q38.6 51.3 39.5 51.4 Q40.3 51.4 41 51.9 Q41.6 52.4 41.8 53.1 Q42.1 53.7 41.9 54.4 Q41.7 55 41.2 55.3 Q40.7 55.6 40.2 55.5 Q39.7 55.4 39.5 55 Q39.2 54.7 39.3 54.3 L39.4 54"/>
    <path d="M109.7 53.2 Q108.7 50.8 108.6 49.6 Q108.4 48.4 108.6 47.3 Q108.8 46.1 109.3 45.2 Q109.8 44.2 110.6 43.6 Q111.4 43 112.3 42.8 Q113.2 42.6 114.1 42.8 Q114.9 43.1 115.4 43.7 Q116 44.3 116.1 45 Q116.2 45.7 115.8 46.3 Q115.5 46.8 115 47 Q114.4 47.2 114 47 Q113.5 46.8 113.3 46.4 Q113.2 46 113.4 45.7 L113.5 45.4"/>
    <path d="M130.3 66.3 Q130.4 63.7 130.2 62.5 Q130 61.3 129.4 60.3 Q128.9 59.3 128.1 58.6 Q127.2 57.8 126.3 57.5 Q125.3 57.2 124.4 57.3 Q123.5 57.4 122.8 57.9 Q122.1 58.4 121.8 59.2 Q121.4 59.9 121.6 60.6 Q121.7 61.3 122.2 61.8 Q122.7 62.2 123.3 62.2 Q123.9 62.2 124.3 61.9 Q124.6 61.5 124.6 61.1 Q124.7 60.7 124.4 60.4 L124.1 60.2"/>
    <path d="M42.5 171.7 Q40.2 170.4 39 170.1 Q37.9 169.8 36.7 169.8 Q35.5 169.9 34.5 170.3 Q33.5 170.7 32.8 171.4 Q32.1 172.1 31.8 173 Q31.5 173.9 31.6 174.8 Q31.8 175.6 32.3 176.2 Q32.8 176.8 33.5 177 Q34.2 177.2 34.8 176.9 Q35.4 176.7 35.7 176.2 Q36 175.7 35.8 175.2 Q35.7 174.7 35.3 174.5 Q34.9 174.3 34.6 174.4 L34.2 174.5"/>
    <path d="M33.4 135.7 Q31.4 134 30.3 133.5 Q29.2 132.9 28.1 132.8 Q27 132.6 25.9 132.8 Q24.8 133 24 133.6 Q23.2 134.2 22.7 135 Q22.2 135.8 22.2 136.7 Q22.2 137.5 22.6 138.2 Q23 138.9 23.6 139.2 Q24.3 139.5 24.9 139.4 Q25.6 139.2 25.9 138.8 Q26.3 138.3 26.2 137.8 Q26.2 137.3 25.9 137 Q25.5 136.8 25.2 136.8 L24.8 136.9"/>
    <path d="M51.6 80.5 Q50.3 78.3 49.4 77.5 Q48.5 76.6 47.5 76.1 Q46.5 75.5 45.4 75.4 Q44.3 75.3 43.3 75.6 Q42.4 75.8 41.7 76.5 Q41 77.1 40.7 77.9 Q40.4 78.7 40.5 79.5 Q40.7 80.3 41.2 80.8 Q41.8 81.3 42.4 81.4 Q43 81.4 43.5 81.1 Q44 80.8 44.1 80.3 Q44.2 79.8 44 79.4 Q43.8 79.1 43.4 79 L43.1 79"/>
    <path d="M9.9 33.6 Q7.4 33.1 6.2 32.6 Q5.1 32.1 4.3 31.3 Q3.4 30.6 2.9 29.6 Q2.4 28.7 2.3 27.7 Q2.2 26.7 2.5 25.8 Q2.9 24.9 3.5 24.3 Q4.2 23.8 5 23.6 Q5.7 23.5 6.4 23.8 Q7 24.1 7.3 24.7 Q7.6 25.3 7.5 25.8 Q7.4 26.4 7 26.7 Q6.6 27 6.1 26.9 Q5.7 26.8 5.5 26.5 L5.4 26.2"/>
    <path d="M117.9 47.4 Q117.3 44.8 116.8 43.7 Q116.3 42.6 115.5 41.7 Q114.7 40.9 113.7 40.4 Q112.8 39.9 111.8 39.8 Q110.8 39.8 109.9 40.1 Q109 40.5 108.5 41.1 Q107.9 41.8 107.8 42.6 Q107.7 43.4 108 44 Q108.3 44.7 108.9 44.9 Q109.5 45.2 110 45.1 Q110.6 45 110.9 44.5 Q111.2 44.1 111.1 43.7 Q111 43.3 110.7 43.1 L110.3 42.9"/>
  </g>
  <!-- Ivy leaves: soft shadow, own colour, shading, sheen, faint veins, decay spots -->
  <g transform="translate(47.9 184.2) rotate(-125.1)">
    <path d="M0 0 L3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3 0) scale(15.3)">
      <use href="#v3-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-4" fill="hsl(24 30.1% 18.9%)"/>
      <use href="#v3-leaf-4" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-4" fill="url(#v3-under)"/>
      <use href="#v3-leaf-4" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.036000000000000004" stroke-linecap="round"/>
      <circle cx="0.516" cy="-0.141" r="0.068" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.669" cy="-0.004" r="0.07" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.469" cy="-0.126" r="0.07" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.24600000000000002" cy="-0.132" r="0.053" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(25.7 180) rotate(-130.1)">
    <path d="M0 0 L4.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.8 0) scale(14.3)">
      <use href="#v3-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-2" fill="hsl(111.5 39.1% 17.7%)"/>
      <use href="#v3-leaf-2" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-2" fill="url(#v3-under)"/>
      <use href="#v3-leaf-2" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.038" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(111.8 178) rotate(46.3)">
    <path d="M0 0 L6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(6 0) scale(18.2)">
      <use href="#v3-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-4" fill="hsl(101.1 41.9% 28.2%)"/>
      <use href="#v3-leaf-4" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-4" fill="url(#v3-under)"/>
      <use href="#v3-leaf-4" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(121.3 176.5) rotate(-78.4)">
    <path d="M0 0 L5.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.1 0) scale(15.5)">
      <use href="#v3-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-0" fill="hsl(54 43.9% 33.3%)"/>
      <use href="#v3-leaf-0" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-0" fill="url(#v3-under)"/>
      <use href="#v3-leaf-0" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
      <circle cx="0.588" cy="0.047" r="0.052000000000000005" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.287" cy="-0.087" r="0.079" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(130.9 174.9) rotate(35.3)">
    <path d="M0 0 L3.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.7 0) scale(20.4)">
      <use href="#v3-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-1" fill="hsl(100.2 30% 17.9%)"/>
      <use href="#v3-leaf-1" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-1" fill="url(#v3-under)"/>
      <use href="#v3-leaf-1" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027000000000000003" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(140.5 174.2) rotate(-57.3)">
    <path d="M0 0 L5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5 0) scale(15.4)">
      <use href="#v3-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-1" fill="hsl(86.1 30.1% 23.3%)"/>
      <use href="#v3-leaf-1" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-1" fill="url(#v3-under)"/>
      <use href="#v3-leaf-1" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.036000000000000004" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(163.1 186.9) rotate(106.8)">
    <path d="M0 0 L4.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.1 0) scale(15.9)">
      <use href="#v3-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-1" fill="hsl(103.8 39.8% 23.3%)"/>
      <use href="#v3-leaf-1" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-1" fill="url(#v3-under)"/>
      <use href="#v3-leaf-1" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.034" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(169.4 192.8) rotate(-11.6)">
    <path d="M0 0 L4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4 0) scale(17.8)">
      <use href="#v3-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-4" fill="hsl(65.1 39.4% 31.2%)"/>
      <use href="#v3-leaf-4" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-4" fill="url(#v3-under)"/>
      <use href="#v3-leaf-4" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.031" stroke-linecap="round"/>
      <circle cx="0.342" cy="0.141" r="0.071" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.56" cy="-0.099" r="0.068" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(175.8 198.8) rotate(102.2)">
    <path d="M0 0 L4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4 0) scale(16.9)">
      <use href="#v3-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-0" fill="hsl(93.8 26.6% 28.9%)"/>
      <use href="#v3-leaf-0" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-0" fill="url(#v3-under)"/>
      <use href="#v3-leaf-0" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.033" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(159.6 177.5) rotate(-59.3)">
    <path d="M0 0 L4.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.5 0) scale(12.2)">
      <use href="#v3-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-3" fill="hsl(86.3 42.7% 24.7%)"/>
      <use href="#v3-leaf-3" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-3" fill="url(#v3-under)"/>
      <use href="#v3-leaf-3" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.045" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(176.9 186) rotate(-8)">
    <path d="M0 0 L3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3 0) scale(10.1)">
      <use href="#v3-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-1" fill="hsl(95.5 35% 21.9%)"/>
      <use href="#v3-leaf-1" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-1" fill="url(#v3-under)"/>
      <use href="#v3-leaf-1" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.055" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(185.5 190.5) rotate(72.4)">
    <path d="M0 0 L4.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.1 0) scale(13.9)">
      <use href="#v3-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-0" fill="hsl(96.1 35.5% 25.4%)"/>
      <use href="#v3-leaf-0" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-0" fill="url(#v3-under)"/>
      <use href="#v3-leaf-0" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.04" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(194.3 186.6) rotate(-92.4)">
    <path d="M0 0 L5.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.9 0) scale(16.9)">
      <use href="#v3-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-4" fill="hsl(36.7 36.6% 18.4%)"/>
      <use href="#v3-leaf-4" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-4" fill="url(#v3-under)"/>
      <use href="#v3-leaf-4" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.033" stroke-linecap="round"/>
      <circle cx="0.467" cy="0.133" r="0.069" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.5870000000000001" cy="-0.03" r="0.08800000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.37" cy="-0.105" r="0.078" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.19699999999999998" cy="0.14" r="0.062" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(200.5 179.1) rotate(14.1)">
    <path d="M0 0 L5.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.3 0) scale(11.7)">
      <use href="#v3-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-5" fill="hsl(92.7 32.1% 26%)"/>
      <use href="#v3-leaf-5" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-5" fill="url(#v3-under)"/>
      <use href="#v3-leaf-5" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.047" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(113 153.5) rotate(12)">
    <path d="M0 0 L3.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.7 0) scale(21)">
      <use href="#v3-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-3" fill="hsl(33.7 43.3% 22.7%)"/>
      <use href="#v3-leaf-3" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-3" fill="url(#v3-under)"/>
      <use href="#v3-leaf-3" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.026000000000000002" stroke-linecap="round"/>
      <circle cx="0.414" cy="0.17800000000000002" r="0.061" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.49700000000000005" cy="-0.107" r="0.084" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.502" cy="-0.028999999999999998" r="0.081" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.371" cy="-0.145" r="0.085" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(131.6 143.1) rotate(33.7)">
    <path d="M0 0 L5.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.8 0) scale(19.3)">
      <use href="#v3-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-0" fill="hsl(61 40.8% 28.7%)"/>
      <use href="#v3-leaf-0" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-0" fill="url(#v3-under)"/>
      <use href="#v3-leaf-0" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.028999999999999998" stroke-linecap="round"/>
      <circle cx="0.409" cy="-0.109" r="0.068" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.33399999999999996" cy="0.121" r="0.052000000000000005" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(141.8 139.8) rotate(-68.9)">
    <path d="M0 0 L3.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.5 0) scale(17.1)">
      <use href="#v3-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-2" fill="hsl(95 28% 19.9%)"/>
      <use href="#v3-leaf-2" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-2" fill="url(#v3-under)"/>
      <use href="#v3-leaf-2" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.032" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(152.4 138.3) rotate(58.7)">
    <path d="M0 0 L5.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.1 0) scale(11)">
      <use href="#v3-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-2" fill="hsl(94.1 37.4% 25.9%)"/>
      <use href="#v3-leaf-2" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-2" fill="url(#v3-under)"/>
      <use href="#v3-leaf-2" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.05" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(95.5 127) rotate(-87.8)">
    <path d="M0 0 L4.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.3 0) scale(22.9)">
      <use href="#v3-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-5" fill="hsl(92.9 32% 19.1%)"/>
      <use href="#v3-leaf-5" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-5" fill="url(#v3-under)"/>
      <use href="#v3-leaf-5" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.024" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(87.8 121) rotate(-212.5)">
    <path d="M0 0 L4.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.6 0) scale(17)">
      <use href="#v3-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-2" fill="hsl(87.6 26.4% 18.8%)"/>
      <use href="#v3-leaf-2" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-2" fill="url(#v3-under)"/>
      <use href="#v3-leaf-2" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.032" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(80.2 114.9) rotate(-74.2)">
    <path d="M0 0 L4.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.7 0) scale(15.7)">
      <use href="#v3-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-0" fill="hsl(100.3 26.5% 22.1%)"/>
      <use href="#v3-leaf-0" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-0" fill="url(#v3-under)"/>
      <use href="#v3-leaf-0" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(78.4 97.5) rotate(-30.6)">
    <path d="M0 0 L3.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.4 0) scale(11.9)">
      <use href="#v3-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-4" fill="hsl(35.7 41% 22.1%)"/>
      <use href="#v3-leaf-4" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-4" fill="url(#v3-under)"/>
      <use href="#v3-leaf-4" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.046" stroke-linecap="round"/>
      <circle cx="0.304" cy="0.196" r="0.059000000000000004" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.221" cy="-0.17600000000000002" r="0.057" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.33399999999999996" cy="0.10400000000000001" r="0.057" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.48200000000000004" cy="-0.21" r="0.059000000000000004" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(76.4 89) rotate(-167.9)">
    <path d="M0 0 L5.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.7 0) scale(13.9)">
      <use href="#v3-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-2" fill="hsl(57.2 39.3% 29%)"/>
      <use href="#v3-leaf-2" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-2" fill="url(#v3-under)"/>
      <use href="#v3-leaf-2" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.04" stroke-linecap="round"/>
      <circle cx="0.405" cy="-0.19699999999999998" r="0.059000000000000004" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.544" cy="-0.09" r="0.078" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(73.1 80.9) rotate(-69.1)">
    <path d="M0 0 L4.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.7 0) scale(15.4)">
      <use href="#v3-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-4" fill="hsl(102.2 39% 25.9%)"/>
      <use href="#v3-leaf-4" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-4" fill="url(#v3-under)"/>
      <use href="#v3-leaf-4" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.036000000000000004" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(73.4 108) rotate(-203.6)">
    <path d="M0 0 L3.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.6 0) scale(11.4)">
      <use href="#v3-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-5" fill="hsl(30.3 32.2% 27.5%)"/>
      <use href="#v3-leaf-5" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-5" fill="url(#v3-under)"/>
      <use href="#v3-leaf-5" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.048" stroke-linecap="round"/>
      <circle cx="0.529" cy="0.203" r="0.045" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.405" cy="-0.18100000000000002" r="0.05" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.307" cy="0.165" r="0.053" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.386" cy="0.182" r="0.071" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(67.7 100.1) rotate(-75.4)">
    <path d="M0 0 L4.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.9 0) scale(15.2)">
      <use href="#v3-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-0" fill="hsl(100.6 43.2% 27.9%)"/>
      <use href="#v3-leaf-0" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-0" fill="url(#v3-under)"/>
      <use href="#v3-leaf-0" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.036000000000000004" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(57 83.9) rotate(-54.1)">
    <path d="M0 0 L5.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.3 0) scale(12.2)">
      <use href="#v3-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-4" fill="hsl(93.6 43% 20%)"/>
      <use href="#v3-leaf-4" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-4" fill="url(#v3-under)"/>
      <use href="#v3-leaf-4" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.045" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(50.9 76.4) rotate(-172.7)">
    <path d="M0 0 L5.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.9 0) scale(16.5)">
      <use href="#v3-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-5" fill="hsl(88.9 33.5% 17.5%)"/>
      <use href="#v3-leaf-5" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-5" fill="url(#v3-under)"/>
      <use href="#v3-leaf-5" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.033" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(37.3 62.4) rotate(-204)">
    <path d="M0 0 L3.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.9 0) scale(13.2)">
      <use href="#v3-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-2" fill="hsl(105.8 28.3% 21.7%)"/>
      <use href="#v3-leaf-2" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-2" fill="url(#v3-under)"/>
      <use href="#v3-leaf-2" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.042" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(35.4 45.1) rotate(-37.1)">
    <path d="M0 0 L4.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.3 0) scale(16.3)">
      <use href="#v3-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-2" fill="hsl(101.6 37.1% 16.5%)"/>
      <use href="#v3-leaf-2" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-2" fill="url(#v3-under)"/>
      <use href="#v3-leaf-2" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.034" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(107.5 142.2) rotate(-113.3)">
    <path d="M0 0 L5.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.5 0) scale(23.4)">
      <use href="#v3-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-2" fill="hsl(55.9 47.6% 31.8%)"/>
      <use href="#v3-leaf-2" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-2" fill="url(#v3-under)"/>
      <use href="#v3-leaf-2" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.023" stroke-linecap="round"/>
      <circle cx="0.556" cy="0.042" r="0.05" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.26" cy="0.22" r="0.055999999999999994" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(109.9 128.7) rotate(-19)">
    <path d="M0 0 L4.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.1 0) scale(21.6)">
      <use href="#v3-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-5" fill="hsl(106.2 29.7% 16.2%)"/>
      <use href="#v3-leaf-5" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-5" fill="url(#v3-under)"/>
      <use href="#v3-leaf-5" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.025" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(115.8 107.6) rotate(4)">
    <path d="M0 0 L5.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.6 0) scale(17.6)">
      <use href="#v3-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-2" fill="hsl(28.7 39.9% 23.6%)"/>
      <use href="#v3-leaf-2" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-2" fill="url(#v3-under)"/>
      <use href="#v3-leaf-2" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.031" stroke-linecap="round"/>
      <circle cx="0.513" cy="0.064" r="0.054000000000000006" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.297" cy="-0.18899999999999997" r="0.08800000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.293" cy="-0.09300000000000001" r="0.052000000000000005" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.31" cy="0.10300000000000001" r="0.066" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(120.9 97.9) rotate(-131.6)">
    <path d="M0 0 L4.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.8 0) scale(17.4)">
      <use href="#v3-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-0" fill="hsl(94.2 34.5% 15.5%)"/>
      <use href="#v3-leaf-0" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-0" fill="url(#v3-under)"/>
      <use href="#v3-leaf-0" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.032" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(124.8 87.6) rotate(-6.6)">
    <path d="M0 0 L4.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.3 0) scale(12)">
      <use href="#v3-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-2" fill="hsl(50.2 34.2% 30%)"/>
      <use href="#v3-leaf-2" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-2" fill="url(#v3-under)"/>
      <use href="#v3-leaf-2" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.046" stroke-linecap="round"/>
      <circle cx="0.40299999999999997" cy="0.126" r="0.08199999999999999" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.318" cy="0.20800000000000002" r="0.062" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(127.6 77) rotate(-137.9)">
    <path d="M0 0 L5.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.2 0) scale(11.8)">
      <use href="#v3-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-1" fill="hsl(58.3 47.1% 32%)"/>
      <use href="#v3-leaf-1" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-1" fill="url(#v3-under)"/>
      <use href="#v3-leaf-1" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.047" stroke-linecap="round"/>
      <circle cx="0.341" cy="-0.182" r="0.040999999999999995" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.501" cy="-0.209" r="0.05" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(115.3 61.5) rotate(-90.6)">
    <path d="M0 0 L3.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.8 0) scale(20.6)">
      <use href="#v3-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-5" fill="hsl(56.2 34.4% 26.6%)"/>
      <use href="#v3-leaf-5" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-5" fill="url(#v3-under)"/>
      <use href="#v3-leaf-5" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027000000000000003" stroke-linecap="round"/>
      <circle cx="0.539" cy="-0.19" r="0.042" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.569" cy="-0.132" r="0.054000000000000006" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(109.7 53.2) rotate(-164.8)">
    <path d="M0 0 L5.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.9 0) scale(14.9)">
      <use href="#v3-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-5" fill="hsl(101.9 35.7% 28.1%)"/>
      <use href="#v3-leaf-5" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-5" fill="url(#v3-under)"/>
      <use href="#v3-leaf-5" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.037000000000000005" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(130.3 66.3) rotate(-4.7)">
    <path d="M0 0 L4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4 0) scale(13.8)">
      <use href="#v3-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-0" fill="hsl(92.6 34.2% 17.5%)"/>
      <use href="#v3-leaf-0" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-0" fill="url(#v3-under)"/>
      <use href="#v3-leaf-0" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.04" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(66.3 187.5) rotate(-218.8)">
    <path d="M0 0 L4.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.2 0) scale(13.8)">
      <use href="#v3-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-3" fill="hsl(84.5 31.8% 15.1%)"/>
      <use href="#v3-leaf-3" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-3" fill="url(#v3-under)"/>
      <use href="#v3-leaf-3" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.04" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(57.6 183.4) rotate(-86.7)">
    <path d="M0 0 L3.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.2 0) scale(19.3)">
      <use href="#v3-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-0" fill="hsl(103 28.9% 15.7%)"/>
      <use href="#v3-leaf-0" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-0" fill="url(#v3-under)"/>
      <use href="#v3-leaf-0" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.028999999999999998" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(49.8 178) rotate(-186.5)">
    <path d="M0 0 L4.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.7 0) scale(12.9)">
      <use href="#v3-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-1" fill="hsl(105.2 40.1% 18.5%)"/>
      <use href="#v3-leaf-1" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-1" fill="url(#v3-under)"/>
      <use href="#v3-leaf-1" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.043" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(42.5 171.7) rotate(-89.4)">
    <path d="M0 0 L3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3 0) scale(12.4)">
      <use href="#v3-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-1" fill="hsl(106.1 36.4% 24.7%)"/>
      <use href="#v3-leaf-1" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-1" fill="url(#v3-under)"/>
      <use href="#v3-leaf-1" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.044000000000000004" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(55.2 163.4) rotate(-92.9)">
    <path d="M0 0 L4.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.2 0) scale(17.4)">
      <use href="#v3-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-3" fill="hsl(30.5 30.7% 23.5%)"/>
      <use href="#v3-leaf-3" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-3" fill="url(#v3-under)"/>
      <use href="#v3-leaf-3" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.032" stroke-linecap="round"/>
      <circle cx="0.24600000000000002" cy="0.099" r="0.040999999999999995" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.618" cy="0.127" r="0.087" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.273" cy="-0.08900000000000001" r="0.040999999999999995" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.544" cy="0.161" r="0.053" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(48 154.1) rotate(-178)">
    <path d="M0 0 L4.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.1 0) scale(14.2)">
      <use href="#v3-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-4" fill="hsl(85.9 31.1% 20.4%)"/>
      <use href="#v3-leaf-4" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-4" fill="url(#v3-under)"/>
      <use href="#v3-leaf-4" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.039" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(40.7 144.9) rotate(-71.1)">
    <path d="M0 0 L4.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.2 0) scale(14.8)">
      <use href="#v3-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-3" fill="hsl(108.6 35.7% 25.8%)"/>
      <use href="#v3-leaf-3" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-3" fill="url(#v3-under)"/>
      <use href="#v3-leaf-3" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.037000000000000005" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(33.4 135.7) rotate(-166.5)">
    <path d="M0 0 L4.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.2 0) scale(12.9)">
      <use href="#v3-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-5" fill="hsl(29.6 40.5% 18.7%)"/>
      <use href="#v3-leaf-5" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-5" fill="url(#v3-under)"/>
      <use href="#v3-leaf-5" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.042" stroke-linecap="round"/>
      <circle cx="0.588" cy="-0.062" r="0.054000000000000006" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.29100000000000004" cy="0.177" r="0.08199999999999999" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.326" cy="-0.129" r="0.086" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.513" cy="-0.198" r="0.057" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(84 151.5) rotate(-174)">
    <path d="M0 0 L4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4 0) scale(15.9)">
      <use href="#v3-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-2" fill="hsl(53.9 42.6% 27.7%)"/>
      <use href="#v3-leaf-2" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-2" fill="url(#v3-under)"/>
      <use href="#v3-leaf-2" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
      <circle cx="0.528" cy="-0.08199999999999999" r="0.044000000000000004" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.655" cy="0.057" r="0.055999999999999994" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(81.8 141.9) rotate(-33)">
    <path d="M0 0 L6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(6 0) scale(15.2)">
      <use href="#v3-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-1" fill="hsl(31.7 37.6% 21.1%)"/>
      <use href="#v3-leaf-1" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-1" fill="url(#v3-under)"/>
      <use href="#v3-leaf-1" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.036000000000000004" stroke-linecap="round"/>
      <circle cx="0.425" cy="0.2" r="0.07" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.41" cy="0.14" r="0.081" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.425" cy="-0.166" r="0.044000000000000004" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.6679999999999999" cy="0.052000000000000005" r="0.077" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(79.4 132.4) rotate(-178.7)">
    <path d="M0 0 L4.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.1 0) scale(14.8)">
      <use href="#v3-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-4" fill="hsl(26.2 29.1% 22.1%)"/>
      <use href="#v3-leaf-4" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-4" fill="url(#v3-under)"/>
      <use href="#v3-leaf-4" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.037000000000000005" stroke-linecap="round"/>
      <circle cx="0.29600000000000004" cy="-0.11699999999999999" r="0.061" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.408" cy="0.23600000000000002" r="0.073" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.358" cy="0.191" r="0.07200000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.5429999999999999" cy="-0.155" r="0.075" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(75.2 123.5) rotate(-65.6)">
    <path d="M0 0 L3.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.7 0) scale(18.1)">
      <use href="#v3-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-4" fill="hsl(27.9 32.6% 29.9%)"/>
      <use href="#v3-leaf-4" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-4" fill="url(#v3-under)"/>
      <use href="#v3-leaf-4" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
      <circle cx="0.18100000000000002" cy="-0.172" r="0.07400000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.457" cy="0.18100000000000002" r="0.040999999999999995" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.276" cy="-0.152" r="0.065" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.629" cy="-0.044000000000000004" r="0.067" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(69.9 115.2) rotate(-194.2)">
    <path d="M0 0 L4.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.6 0) scale(15.9)">
      <use href="#v3-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-3" fill="hsl(50.4 48.7% 30.1%)"/>
      <use href="#v3-leaf-3" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-3" fill="url(#v3-under)"/>
      <use href="#v3-leaf-3" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
      <circle cx="0.522" cy="0.125" r="0.066" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.6609999999999999" cy="-0.035" r="0.07400000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(64.3 107.1) rotate(-73.8)">
    <path d="M0 0 L4.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.2 0) scale(13.6)">
      <use href="#v3-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-5" fill="hsl(31 41.2% 18.2%)"/>
      <use href="#v3-leaf-5" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-5" fill="url(#v3-under)"/>
      <use href="#v3-leaf-5" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.04" stroke-linecap="round"/>
      <circle cx="0.369" cy="0.11800000000000001" r="0.079" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.307" cy="-0.085" r="0.087" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.324" cy="-0.196" r="0.07200000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.528" cy="0.001" r="0.081" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(59.5 98.5) rotate(-170.1)">
    <path d="M0 0 L5.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.1 0) scale(10.2)">
      <use href="#v3-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-3" fill="hsl(106.8 26.8% 20.6%)"/>
      <use href="#v3-leaf-3" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-3" fill="url(#v3-under)"/>
      <use href="#v3-leaf-3" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.054000000000000006" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(55 89.8) rotate(-50.2)">
    <path d="M0 0 L4.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.6 0) scale(14.3)">
      <use href="#v3-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-3" fill="hsl(109.3 44.1% 24.3%)"/>
      <use href="#v3-leaf-3" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-3" fill="url(#v3-under)"/>
      <use href="#v3-leaf-3" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.038" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(106.7 162.7) rotate(-127.4)">
    <path d="M0 0 L4.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.4 0) scale(22)">
      <use href="#v3-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-1" fill="hsl(32.4 30.5% 26.4%)"/>
      <use href="#v3-leaf-1" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-1" fill="url(#v3-under)"/>
      <use href="#v3-leaf-1" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.025" stroke-linecap="round"/>
      <circle cx="0.48" cy="-0.193" r="0.066" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.41100000000000003" cy="-0.14800000000000002" r="0.05" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.396" cy="0.16" r="0.083" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.48100000000000004" cy="-0.07200000000000001" r="0.06" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(112.1 149) rotate(-22.2)">
    <path d="M0 0 L5.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.3 0) scale(16.8)">
      <use href="#v3-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-2" fill="hsl(28.4 37.8% 24.9%)"/>
      <use href="#v3-leaf-2" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-2" fill="url(#v3-under)"/>
      <use href="#v3-leaf-2" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.033" stroke-linecap="round"/>
      <circle cx="0.26" cy="-0.203" r="0.04" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.498" cy="0.132" r="0.08800000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.44299999999999995" cy="0.157" r="0.086" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.375" cy="0.157" r="0.07200000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(101.1 100.3) rotate(-83.5)">
    <path d="M0 0 L4.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.1 0) scale(21.2)">
      <use href="#v3-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-0" fill="hsl(29.5 41.6% 21.5%)"/>
      <use href="#v3-leaf-0" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-0" fill="url(#v3-under)"/>
      <use href="#v3-leaf-0" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.026000000000000002" stroke-linecap="round"/>
      <circle cx="0.524" cy="-0.039" r="0.06" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.588" cy="0.084" r="0.057999999999999996" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.555" cy="0.085" r="0.086" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.257" cy="0.131" r="0.086" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(95.9 89.5) rotate(-172.4)">
    <path d="M0 0 L5.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.4 0) scale(19.8)">
      <use href="#v3-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-2" fill="hsl(85.1 41.8% 26.5%)"/>
      <use href="#v3-leaf-2" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-2" fill="url(#v3-under)"/>
      <use href="#v3-leaf-2" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027999999999999997" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(90.5 78.9) rotate(-44.7)">
    <path d="M0 0 L5.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.8 0) scale(15.5)">
      <use href="#v3-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-1" fill="hsl(106 31.2% 28.9%)"/>
      <use href="#v3-leaf-1" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-1" fill="url(#v3-under)"/>
      <use href="#v3-leaf-1" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.036000000000000004" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(74.1 61.7) rotate(-85.8)">
    <path d="M0 0 L5.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.8 0) scale(15.8)">
      <use href="#v3-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-0" fill="hsl(88.9 35.1% 28.8%)"/>
      <use href="#v3-leaf-0" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-0" fill="url(#v3-under)"/>
      <use href="#v3-leaf-0" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(64.2 55.1) rotate(-211.4)">
    <path d="M0 0 L4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4 0) scale(13.4)">
      <use href="#v3-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-4" fill="hsl(61.8 35% 32.1%)"/>
      <use href="#v3-leaf-4" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-4" fill="url(#v3-under)"/>
      <use href="#v3-leaf-4" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.040999999999999995" stroke-linecap="round"/>
      <circle cx="0.5760000000000001" cy="-0.133" r="0.078" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.628" cy="0.003" r="0.075" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(54 48.9) rotate(-90.8)">
    <path d="M0 0 L3.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.6 0) scale(12.7)">
      <use href="#v3-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-1" fill="hsl(99.3 28.6% 23.6%)"/>
      <use href="#v3-leaf-1" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-1" fill="url(#v3-under)"/>
      <use href="#v3-leaf-1" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.043" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(43.8 42.6) rotate(-217.5)">
    <path d="M0 0 L5.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.8 0) scale(15.9)">
      <use href="#v3-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-5" fill="hsl(92.6 30.3% 17.3%)"/>
      <use href="#v3-leaf-5" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-5" fill="url(#v3-under)"/>
      <use href="#v3-leaf-5" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.034" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(21.9 33.4) rotate(-209.9)">
    <path d="M0 0 L3.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.8 0) scale(13.5)">
      <use href="#v3-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-1" fill="hsl(103.7 37.5% 17%)"/>
      <use href="#v3-leaf-1" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-1" fill="url(#v3-under)"/>
      <use href="#v3-leaf-1" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.040999999999999995" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(9.9 33.6) rotate(-121.4)">
    <path d="M0 0 L5.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.6 0) scale(9.8)">
      <use href="#v3-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-0" fill="hsl(109.2 33.1% 18.7%)"/>
      <use href="#v3-leaf-0" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-0" fill="url(#v3-under)"/>
      <use href="#v3-leaf-0" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.055999999999999994" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(115.9 82.1) rotate(-34.3)">
    <path d="M0 0 L4.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.9 0) scale(19.3)">
      <use href="#v3-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-0" fill="hsl(93.8 35.8% 17.7%)"/>
      <use href="#v3-leaf-0" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-0" fill="url(#v3-under)"/>
      <use href="#v3-leaf-0" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.028999999999999998" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(117.8 59) rotate(-22.4)">
    <path d="M0 0 L5.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.3 0) scale(12.5)">
      <use href="#v3-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-5" fill="hsl(89 45% 23.6%)"/>
      <use href="#v3-leaf-5" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-5" fill="url(#v3-under)"/>
      <use href="#v3-leaf-5" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.044000000000000004" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(117.9 47.4) rotate(-160.5)">
    <path d="M0 0 L4.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.1 0) scale(10)">
      <use href="#v3-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v3-leaf-2" fill="hsl(22.4 33.8% 18.2%)"/>
      <use href="#v3-leaf-2" fill="url(#v3-shade)"/>
      <use href="#v3-leaf-2" fill="url(#v3-under)"/>
      <use href="#v3-leaf-2" fill="url(#v3-sheen)"/>
      <use href="#v3-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.055" stroke-linecap="round"/>
      <circle cx="0.479" cy="0.08800000000000001" r="0.075" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.565" cy="0.106" r="0.07" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.35700000000000004" cy="0.111" r="0.08199999999999999" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.247" cy="-0.138" r="0.066" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
</svg>
`,x3=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 260" width="200" height="260">
  <defs>
    <path id="v4-leaf-0" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.23 -0.15 L0.26 -0.2 L0.34 -0.16 L0.38 -0.17 L0.48 -0.37 L0.6 -0.38 L0.5 -0.12 L0.53 -0.08 L0.82 -0.12 L1.06 0 L0.82 0.12 L0.53 0.09 L0.5 0.12 L0.55 0.3 L0.46 0.3 L0.38 0.17 L0.34 0.16 L0.23 0.26 L0.19 0.19 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v4-veins-0" d="M0.23 0 L0.92 0 M0.23 0 L0.5 0.28 M0.23 0 L0.53 -0.34 M0.23 0 L0.22 0.21 M0.23 0 L0.26 -0.16"/>
    <path id="v4-leaf-1" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.23 -0.15 L0.26 -0.21 L0.34 -0.16 L0.38 -0.17 L0.47 -0.33 L0.57 -0.33 L0.5 -0.12 L0.53 -0.08 L0.81 -0.11 L1.03 0 L0.81 0.11 L0.53 0.09 L0.5 0.12 L0.59 0.36 L0.48 0.35 L0.38 0.17 L0.34 0.16 L0.24 0.25 L0.2 0.18 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v4-veins-1" d="M0.23 0 L0.9 0 M0.23 0 L0.53 0.33 M0.23 0 L0.52 -0.3 M0.23 0 L0.23 0.21 M0.23 0 L0.26 -0.17"/>
    <path id="v4-leaf-2" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.23 -0.15 L0.26 -0.2 L0.34 -0.16 L0.38 -0.17 L0.48 -0.36 L0.59 -0.36 L0.5 -0.12 L0.53 -0.08 L0.75 -0.1 L0.95 0 L0.75 0.1 L0.53 0.09 L0.5 0.12 L0.55 0.29 L0.46 0.29 L0.38 0.17 L0.34 0.16 L0.25 0.22 L0.22 0.16 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v4-veins-2" d="M0.23 0 L0.83 0 M0.23 0 L0.5 0.26 M0.23 0 L0.53 -0.33 M0.23 0 L0.25 0.18 M0.23 0 L0.26 -0.16"/>
    <path id="v4-leaf-3" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.22 -0.16 L0.25 -0.22 L0.34 -0.16 L0.38 -0.17 L0.47 -0.32 L0.56 -0.32 L0.5 -0.12 L0.53 -0.08 L0.78 -0.11 L0.99 0 L0.78 0.11 L0.53 0.09 L0.5 0.12 L0.55 0.3 L0.46 0.3 L0.38 0.17 L0.34 0.16 L0.26 0.21 L0.23 0.15 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v4-veins-3" d="M0.23 0 L0.87 0 M0.23 0 L0.5 0.27 M0.23 0 L0.51 -0.29 M0.23 0 L0.26 0.17 M0.23 0 L0.25 -0.18"/>
    <path id="v4-leaf-4" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.18 -0.2 L0.22 -0.28 L0.34 -0.16 L0.38 -0.17 L0.47 -0.35 L0.58 -0.35 L0.5 -0.12 L0.53 -0.08 L0.79 -0.11 L1.01 0 L0.79 0.11 L0.53 0.09 L0.5 0.12 L0.57 0.32 L0.47 0.32 L0.38 0.17 L0.34 0.16 L0.27 0.2 L0.24 0.14 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v4-veins-4" d="M0.23 0 L0.89 0 M0.23 0 L0.51 0.3 M0.23 0 L0.52 -0.32 M0.23 0 L0.26 0.16 M0.23 0 L0.21 -0.23"/>
    <path id="v4-leaf-5" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.19 -0.19 L0.23 -0.26 L0.34 -0.16 L0.38 -0.17 L0.46 -0.32 L0.56 -0.32 L0.5 -0.12 L0.53 -0.08 L0.82 -0.12 L1.05 0 L0.82 0.12 L0.53 0.09 L0.5 0.12 L0.58 0.34 L0.47 0.34 L0.38 0.17 L0.34 0.16 L0.22 0.27 L0.18 0.2 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v4-veins-5" d="M0.23 0 L0.91 0 M0.23 0 L0.52 0.31 M0.23 0 L0.51 -0.29 M0.23 0 L0.22 0.23 M0.23 0 L0.23 -0.21"/>
    <linearGradient id="v4-shade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#000" stop-opacity="0.42"/>
      <stop offset="0.4" stop-color="#000" stop-opacity="0.06"/>
      <stop offset="0.75" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.18"/>
    </linearGradient>
    <linearGradient id="v4-under" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0.45" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.22"/>
    </linearGradient>
    <radialGradient id="v4-sheen" cx="0.45" cy="0.3" r="0.55">
      <stop offset="0" stop-color="#f4f6dc" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#f4f6dc" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- Soft shadows under the stems -->
  <g fill="none" stroke="#000" stroke-opacity="0.22" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 3)">
    <path d="M94.8 262 Q100.4 251 103.5 245.7 Q106.7 240.4 109.2 234.8 Q111.7 229.2 113.1 223.2 Q114.6 217.2 114.8 211.1 Q115.1 204.9 114.4 198.8 Q113.8 192.7 113.2 186.5 Q112.6 180.4 113.3 174.3 Q113.9 168.2 115.6 162.2 Q117.2 156.3 120.1 150.9 Q123 145.4 126 140.1 Q129.1 134.7 132 129.3 Q135 123.9 137.1 118.1 Q139.1 112.3 140.6 106.4 L142 100.4" stroke-width="6.4"/>
    <path d="M111.1 262 Q112.6 247.1 111.6 239.7 Q110.6 232.3 108.3 225.1 Q106.1 218 103.4 211 Q100.8 204 99.1 196.7 Q97.5 189.4 96.8 181.9 Q96.2 174.5 96.8 167 Q97.4 159.5 98.6 152.1 Q99.7 144.7 100.8 137.3 Q101.8 129.9 101.5 122.4 Q101.3 114.9 100.1 107.6 Q98.9 100.2 96.3 93.1 Q93.7 86.1 90.8 79.2 L87.8 72.3" stroke-width="7.9"/>
    <path d="M72 100.2 Q62.9 104.9 58.2 106.8 Q53.4 108.7 48.8 111 L44.2 113.3" stroke-width="1.5"/>
    <path d="M129.1 134.7 Q122.7 125.3 118.3 121.7 Q113.9 118 108.7 115.8 Q103.5 113.5 98.2 111.3 Q93 109 87.9 106.5 Q82.7 104.1 77.4 102.1 Q72 100.2 66.4 99.3 Q60.8 98.5 55.2 99.5 L49.5 100.5" stroke-width="1.9"/>
    <path d="M179.1 89.9 Q178.5 81.5 177.6 77.4 Q176.7 73.3 175.9 69.2 L175 65.1" stroke-width="1.9"/>
    <path d="M135 123.9 Q142.8 118.8 146.4 115.9 Q150.1 113.1 153.5 109.9 Q156.9 106.7 160.3 103.5 Q163.6 100.3 167.5 97.6 Q171.3 95 175.2 92.4 Q179.1 89.9 183.2 87.7 Q187.3 85.5 187.9 80.9 Q188.5 76.2 185.8 72.4 Q183.1 68.6 179.1 66.3 Q175.1 63.9 171 61.6 L166.9 59.4" stroke-width="2.5"/>
    <path d="M160 50.3 Q168.6 46.1 173 44.2 Q177.4 42.3 181.8 40.3 L186.1 38.2" stroke-width="1.9"/>
    <path d="M142 100.4 Q144.5 90 146 84.9 Q147.5 79.8 149.8 75 Q152.2 70.2 154.4 65.3 Q156.6 60.5 158.3 55.4 L160 50.3" stroke-width="2.5"/>
    <path d="M106.1 218 Q112.9 211.3 116.6 208.4 Q120.3 205.4 124.3 202.8 Q128.3 200.2 132.3 197.6 Q136.3 195.1 140.3 192.4 Q144.2 189.7 148.6 187.9 Q153 186.2 157.7 185.2 Q162.4 184.2 167.1 184.1 Q171.9 184.1 176.6 183.9 Q181.4 183.8 186.2 183.9 L190.9 183.9" stroke-width="2.4"/>
    <path d="M123.7 161.8 Q125.5 153.3 127 149.3 Q128.5 145.3 129.5 141.1 L130.4 136.9" stroke-width="1.8"/>
    <path d="M97.5 189.4 Q103.5 182 106.6 178.4 Q109.7 174.7 113.3 171.6 Q116.9 168.4 120.3 165.1 Q123.7 161.8 127.1 158.3 Q130.4 154.9 133.3 151.1 Q136.3 147.4 139.5 143.9 Q142.8 140.4 146.3 137.1 L149.8 133.9" stroke-width="2.3"/>
    <path d="M37.4 100.3 Q30.6 107.4 28.1 111.7 Q25.7 116 24.3 120.7 L22.9 125.4" stroke-width="1.9"/>
    <path d="M101.3 114.9 Q90.4 113.7 84.9 113 Q79.5 112.4 74.2 111.1 Q68.9 109.8 63.6 108.2 Q58.4 106.6 53.1 105 Q47.9 103.4 42.6 101.8 Q37.4 100.3 31.9 100.1 L26.4 99.9" stroke-width="2.5"/>
    <path d="M107.3 24.8 Q113.1 17.2 117.9 17 Q122.7 16.9 126.4 19.9 L130.1 23" stroke-width="1.8"/>
    <path d="M93.7 86.1 Q99.1 76.9 101.1 71.9 Q103.2 67 104.7 61.9 Q106.2 56.8 106.8 51.5 Q107.4 46.2 107.4 40.8 Q107.3 35.5 107.3 30.2 Q107.3 24.8 107.4 19.5 Q107.6 14.1 103.4 10.8 Q99.2 7.6 93.8 7.7 Q88.5 7.9 84.4 11.3 L80.2 14.7" stroke-width="2.4"/>
    <path d="M77.1 20.8 Q67.6 20 62.9 19.5 Q58.2 19.1 53.5 18.3 L48.8 17.5" stroke-width="2.1"/>
    <path d="M87.8 72.3 Q84.6 62.3 84 57 Q83.3 51.8 82.6 46.5 Q82 41.3 81.1 36.1 Q80.2 30.9 78.7 25.8 Q77.1 20.8 75.8 15.6 Q74.5 10.5 78.2 6.8 L82 3.1" stroke-width="2.7"/>
  </g>
  <!-- Trailing shoots: green-brown, with a thin highlight -->
  <g fill="none" stroke="hsl(68 22% 21%)" stroke-linecap="round" stroke-linejoin="round">
    <path d="M72 100.2 Q62.9 104.9 58.2 106.8 Q53.4 108.7 48.8 111 L44.2 113.3" stroke-width="0.9"/>
    <path d="M129.1 134.7 Q122.7 125.3 118.3 121.7 Q113.9 118 108.7 115.8 Q103.5 113.5 98.2 111.3 Q93 109 87.9 106.5 Q82.7 104.1 77.4 102.1 Q72 100.2 66.4 99.3 Q60.8 98.5 55.2 99.5 L49.5 100.5" stroke-width="1.2"/>
    <path d="M179.1 89.9 Q178.5 81.5 177.6 77.4 Q176.7 73.3 175.9 69.2 L175 65.1" stroke-width="1.3"/>
    <path d="M135 123.9 Q142.8 118.8 146.4 115.9 Q150.1 113.1 153.5 109.9 Q156.9 106.7 160.3 103.5 Q163.6 100.3 167.5 97.6 Q171.3 95 175.2 92.4 Q179.1 89.9 183.2 87.7 Q187.3 85.5 187.9 80.9 Q188.5 76.2 185.8 72.4 Q183.1 68.6 179.1 66.3 Q175.1 63.9 171 61.6 L166.9 59.4" stroke-width="1.8"/>
    <path d="M160 50.3 Q168.6 46.1 173 44.2 Q177.4 42.3 181.8 40.3 L186.1 38.2" stroke-width="1.2"/>
    <path d="M142 100.4 Q144.5 90 146 84.9 Q147.5 79.8 149.8 75 Q152.2 70.2 154.4 65.3 Q156.6 60.5 158.3 55.4 L160 50.3" stroke-width="1.8"/>
    <path d="M106.1 218 Q112.9 211.3 116.6 208.4 Q120.3 205.4 124.3 202.8 Q128.3 200.2 132.3 197.6 Q136.3 195.1 140.3 192.4 Q144.2 189.7 148.6 187.9 Q153 186.2 157.7 185.2 Q162.4 184.2 167.1 184.1 Q171.9 184.1 176.6 183.9 Q181.4 183.8 186.2 183.9 L190.9 183.9" stroke-width="1.7"/>
    <path d="M123.7 161.8 Q125.5 153.3 127 149.3 Q128.5 145.3 129.5 141.1 L130.4 136.9" stroke-width="1.1"/>
    <path d="M97.5 189.4 Q103.5 182 106.6 178.4 Q109.7 174.7 113.3 171.6 Q116.9 168.4 120.3 165.1 Q123.7 161.8 127.1 158.3 Q130.4 154.9 133.3 151.1 Q136.3 147.4 139.5 143.9 Q142.8 140.4 146.3 137.1 L149.8 133.9" stroke-width="1.6"/>
    <path d="M37.4 100.3 Q30.6 107.4 28.1 111.7 Q25.7 116 24.3 120.7 L22.9 125.4" stroke-width="1.2"/>
    <path d="M101.3 114.9 Q90.4 113.7 84.9 113 Q79.5 112.4 74.2 111.1 Q68.9 109.8 63.6 108.2 Q58.4 106.6 53.1 105 Q47.9 103.4 42.6 101.8 Q37.4 100.3 31.9 100.1 L26.4 99.9" stroke-width="1.8"/>
    <path d="M107.3 24.8 Q113.1 17.2 117.9 17 Q122.7 16.9 126.4 19.9 L130.1 23" stroke-width="1.2"/>
    <path d="M93.7 86.1 Q99.1 76.9 101.1 71.9 Q103.2 67 104.7 61.9 Q106.2 56.8 106.8 51.5 Q107.4 46.2 107.4 40.8 Q107.3 35.5 107.3 30.2 Q107.3 24.8 107.4 19.5 Q107.6 14.1 103.4 10.8 Q99.2 7.6 93.8 7.7 Q88.5 7.9 84.4 11.3 L80.2 14.7" stroke-width="1.7"/>
    <path d="M77.1 20.8 Q67.6 20 62.9 19.5 Q58.2 19.1 53.5 18.3 L48.8 17.5" stroke-width="1.4"/>
    <path d="M87.8 72.3 Q84.6 62.3 84 57 Q83.3 51.8 82.6 46.5 Q82 41.3 81.1 36.1 Q80.2 30.9 78.7 25.8 Q77.1 20.8 75.8 15.6 Q74.5 10.5 78.2 6.8 L82 3.1" stroke-width="2"/>
  </g>
  <g fill="none" stroke="hsl(70 25% 40%)" stroke-opacity="0.45" stroke-linecap="round" transform="translate(-0.4 -0.3)">
    <path d="M72 100.2 Q62.9 104.9 58.2 106.8 Q53.4 108.7 48.8 111 L44.2 113.3" stroke-width="0.3"/>
    <path d="M129.1 134.7 Q122.7 125.3 118.3 121.7 Q113.9 118 108.7 115.8 Q103.5 113.5 98.2 111.3 Q93 109 87.9 106.5 Q82.7 104.1 77.4 102.1 Q72 100.2 66.4 99.3 Q60.8 98.5 55.2 99.5 L49.5 100.5" stroke-width="0.4"/>
    <path d="M179.1 89.9 Q178.5 81.5 177.6 77.4 Q176.7 73.3 175.9 69.2 L175 65.1" stroke-width="0.4"/>
    <path d="M135 123.9 Q142.8 118.8 146.4 115.9 Q150.1 113.1 153.5 109.9 Q156.9 106.7 160.3 103.5 Q163.6 100.3 167.5 97.6 Q171.3 95 175.2 92.4 Q179.1 89.9 183.2 87.7 Q187.3 85.5 187.9 80.9 Q188.5 76.2 185.8 72.4 Q183.1 68.6 179.1 66.3 Q175.1 63.9 171 61.6 L166.9 59.4" stroke-width="0.5"/>
    <path d="M160 50.3 Q168.6 46.1 173 44.2 Q177.4 42.3 181.8 40.3 L186.1 38.2" stroke-width="0.4"/>
    <path d="M142 100.4 Q144.5 90 146 84.9 Q147.5 79.8 149.8 75 Q152.2 70.2 154.4 65.3 Q156.6 60.5 158.3 55.4 L160 50.3" stroke-width="0.5"/>
    <path d="M106.1 218 Q112.9 211.3 116.6 208.4 Q120.3 205.4 124.3 202.8 Q128.3 200.2 132.3 197.6 Q136.3 195.1 140.3 192.4 Q144.2 189.7 148.6 187.9 Q153 186.2 157.7 185.2 Q162.4 184.2 167.1 184.1 Q171.9 184.1 176.6 183.9 Q181.4 183.8 186.2 183.9 L190.9 183.9" stroke-width="0.5"/>
    <path d="M123.7 161.8 Q125.5 153.3 127 149.3 Q128.5 145.3 129.5 141.1 L130.4 136.9" stroke-width="0.3"/>
    <path d="M97.5 189.4 Q103.5 182 106.6 178.4 Q109.7 174.7 113.3 171.6 Q116.9 168.4 120.3 165.1 Q123.7 161.8 127.1 158.3 Q130.4 154.9 133.3 151.1 Q136.3 147.4 139.5 143.9 Q142.8 140.4 146.3 137.1 L149.8 133.9" stroke-width="0.5"/>
    <path d="M37.4 100.3 Q30.6 107.4 28.1 111.7 Q25.7 116 24.3 120.7 L22.9 125.4" stroke-width="0.4"/>
    <path d="M101.3 114.9 Q90.4 113.7 84.9 113 Q79.5 112.4 74.2 111.1 Q68.9 109.8 63.6 108.2 Q58.4 106.6 53.1 105 Q47.9 103.4 42.6 101.8 Q37.4 100.3 31.9 100.1 L26.4 99.9" stroke-width="0.5"/>
    <path d="M107.3 24.8 Q113.1 17.2 117.9 17 Q122.7 16.9 126.4 19.9 L130.1 23" stroke-width="0.3"/>
    <path d="M93.7 86.1 Q99.1 76.9 101.1 71.9 Q103.2 67 104.7 61.9 Q106.2 56.8 106.8 51.5 Q107.4 46.2 107.4 40.8 Q107.3 35.5 107.3 30.2 Q107.3 24.8 107.4 19.5 Q107.6 14.1 103.4 10.8 Q99.2 7.6 93.8 7.7 Q88.5 7.9 84.4 11.3 L80.2 14.7" stroke-width="0.5"/>
    <path d="M77.1 20.8 Q67.6 20 62.9 19.5 Q58.2 19.1 53.5 18.3 L48.8 17.5" stroke-width="0.4"/>
    <path d="M87.8 72.3 Q84.6 62.3 84 57 Q83.3 51.8 82.6 46.5 Q82 41.3 81.1 36.1 Q80.2 30.9 78.7 25.8 Q77.1 20.8 75.8 15.6 Q74.5 10.5 78.2 6.8 L82 3.1" stroke-width="0.6"/>
  </g>
  <!-- Woody trunks: tapering, shaded round, with streaky bark -->
  <g fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M94.8 262 Q100.4 251 103.5 245.7 Q106.7 240.4 109.2 234.8 Q111.7 229.2 113.1 223.2 Q114.6 217.2 114.8 211.1 Q115.1 204.9 114.4 198.8 Q113.8 192.7 113.2 186.5 Q112.6 180.4 113.3 174.3 Q113.9 168.2 115.6 162.2 Q117.2 156.3 120.1 150.9 Q123 145.4 126 140.1 Q129.1 134.7 132 129.3 Q135 123.9 137.1 118.1 Q139.1 112.3 140.6 106.4 L142 100.4" stroke="hsl(30 14% 19%)" stroke-width="2.6"/>
    <path d="M94.8 262 Q100.4 251 103.5 245.7 Q106.7 240.4 109.2 234.8 Q111.7 229.2 113.1 223.2 Q114.6 217.2 114.8 211.1 Q115.1 204.9 114.4 198.8 Q113.8 192.7 113.2 186.5 Q112.6 180.4 113.3 174.3 Q113.9 168.2 115.6 162.2 Q117.2 156.3 120.1 150.9 L123 145.4" stroke="hsl(30 14% 19%)" stroke-width="4.4"/>
    <path d="M94.8 262 Q100.4 251 103.5 245.7 Q106.7 240.4 109.2 234.8 Q111.7 229.2 113.1 223.2 Q114.6 217.2 114.8 211.1 L115.1 204.9" stroke="hsl(30 14% 19%)" stroke-width="5.8"/>
    <path d="M94.8 262 Q100.4 251 103.5 245.7 Q106.7 240.4 109.2 234.8 Q111.7 229.2 113.1 223.2 Q114.6 217.2 114.8 211.1 Q115.1 204.9 114.4 198.8 Q113.8 192.7 113.2 186.5 Q112.6 180.4 113.3 174.3 Q113.9 168.2 115.6 162.2 Q117.2 156.3 120.1 150.9 Q123 145.4 126 140.1 Q129.1 134.7 132 129.3 Q135 123.9 137.1 118.1 Q139.1 112.3 140.6 106.4 L142 100.4" stroke="#000" stroke-opacity="0.28" stroke-width="0.9" transform="translate(0.6 0.3)"/>
    <path d="M94.8 262 Q100.4 251 103.5 245.7 Q106.7 240.4 109.2 234.8 Q111.7 229.2 113.1 223.2 Q114.6 217.2 114.8 211.1 Q115.1 204.9 114.4 198.8 Q113.8 192.7 113.2 186.5 Q112.6 180.4 113.3 174.3 Q113.9 168.2 115.6 162.2 Q117.2 156.3 120.1 150.9 L123 145.4" stroke="#000" stroke-opacity="0.28" stroke-width="1.5" transform="translate(1 0.5)"/>
    <path d="M94.8 262 Q100.4 251 103.5 245.7 Q106.7 240.4 109.2 234.8 Q111.7 229.2 113.1 223.2 Q114.6 217.2 114.8 211.1 L115.1 204.9" stroke="#000" stroke-opacity="0.28" stroke-width="2" transform="translate(1.3 0.7)"/>
    <path d="M94.8 262 Q100.4 251 103.5 245.7 Q106.7 240.4 109.2 234.8 Q111.7 229.2 113.1 223.2 Q114.6 217.2 114.8 211.1 Q115.1 204.9 114.4 198.8 Q113.8 192.7 113.2 186.5 Q112.6 180.4 113.3 174.3 Q113.9 168.2 115.6 162.2 Q117.2 156.3 120.1 150.9 Q123 145.4 126 140.1 Q129.1 134.7 132 129.3 Q135 123.9 137.1 118.1 Q139.1 112.3 140.6 106.4 L142 100.4" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="0.5" transform="translate(-0.6 -0.3)"/>
    <path d="M94.8 262 Q100.4 251 103.5 245.7 Q106.7 240.4 109.2 234.8 Q111.7 229.2 113.1 223.2 Q114.6 217.2 114.8 211.1 Q115.1 204.9 114.4 198.8 Q113.8 192.7 113.2 186.5 Q112.6 180.4 113.3 174.3 Q113.9 168.2 115.6 162.2 Q117.2 156.3 120.1 150.9 L123 145.4" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="0.8" transform="translate(-1 -0.4)"/>
    <path d="M94.8 262 Q100.4 251 103.5 245.7 Q106.7 240.4 109.2 234.8 Q111.7 229.2 113.1 223.2 Q114.6 217.2 114.8 211.1 L115.1 204.9" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="1" transform="translate(-1.3 -0.6)"/>
    <path d="M94.8 262 Q100.4 251 103.5 245.7 Q106.7 240.4 109.2 234.8 Q111.7 229.2 113.1 223.2 Q114.6 217.2 114.8 211.1 Q115.1 204.9 114.4 198.8 Q113.8 192.7 113.2 186.5 Q112.6 180.4 113.3 174.3 Q113.9 168.2 115.6 162.2 Q117.2 156.3 120.1 150.9 L123 145.4" stroke="hsl(30 12% 9%)" stroke-opacity="0.55" stroke-width="1.2" stroke-dasharray="7.3 2.5 3.2 5"/>
    <path d="M94.8 262 Q100.4 251 103.5 245.7 Q106.7 240.4 109.2 234.8 Q111.7 229.2 113.1 223.2 Q114.6 217.2 114.8 211.1 Q115.1 204.9 114.4 198.8 Q113.8 192.7 113.2 186.5 Q112.6 180.4 113.3 174.3 Q113.9 168.2 115.6 162.2 Q117.2 156.3 120.1 150.9 L123 145.4" stroke="hsl(36 14% 38%)" stroke-opacity="0.35" stroke-width="0.7" stroke-dasharray="2 6.9" transform="translate(-0.7 0)"/>
  </g>
  <g fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M111.1 262 Q112.6 247.1 111.6 239.7 Q110.6 232.3 108.3 225.1 Q106.1 218 103.4 211 Q100.8 204 99.1 196.7 Q97.5 189.4 96.8 181.9 Q96.2 174.5 96.8 167 Q97.4 159.5 98.6 152.1 Q99.7 144.7 100.8 137.3 Q101.8 129.9 101.5 122.4 Q101.3 114.9 100.1 107.6 Q98.9 100.2 96.3 93.1 Q93.7 86.1 90.8 79.2 L87.8 72.3" stroke="hsl(30 14% 19%)" stroke-width="3.2"/>
    <path d="M111.1 262 Q112.6 247.1 111.6 239.7 Q110.6 232.3 108.3 225.1 Q106.1 218 103.4 211 Q100.8 204 99.1 196.7 Q97.5 189.4 96.8 181.9 Q96.2 174.5 96.8 167 Q97.4 159.5 98.6 152.1 Q99.7 144.7 100.8 137.3 L101.8 129.9" stroke="hsl(30 14% 19%)" stroke-width="5.4"/>
    <path d="M111.1 262 Q112.6 247.1 111.6 239.7 Q110.6 232.3 108.3 225.1 Q106.1 218 103.4 211 Q100.8 204 99.1 196.7 L97.5 189.4" stroke="hsl(30 14% 19%)" stroke-width="7.1"/>
    <path d="M111.1 262 Q112.6 247.1 111.6 239.7 Q110.6 232.3 108.3 225.1 Q106.1 218 103.4 211 Q100.8 204 99.1 196.7 Q97.5 189.4 96.8 181.9 Q96.2 174.5 96.8 167 Q97.4 159.5 98.6 152.1 Q99.7 144.7 100.8 137.3 Q101.8 129.9 101.5 122.4 Q101.3 114.9 100.1 107.6 Q98.9 100.2 96.3 93.1 Q93.7 86.1 90.8 79.2 L87.8 72.3" stroke="#000" stroke-opacity="0.28" stroke-width="1.1" transform="translate(0.7 0.4)"/>
    <path d="M111.1 262 Q112.6 247.1 111.6 239.7 Q110.6 232.3 108.3 225.1 Q106.1 218 103.4 211 Q100.8 204 99.1 196.7 Q97.5 189.4 96.8 181.9 Q96.2 174.5 96.8 167 Q97.4 159.5 98.6 152.1 Q99.7 144.7 100.8 137.3 L101.8 129.9" stroke="#000" stroke-opacity="0.28" stroke-width="1.9" transform="translate(1.2 0.6)"/>
    <path d="M111.1 262 Q112.6 247.1 111.6 239.7 Q110.6 232.3 108.3 225.1 Q106.1 218 103.4 211 Q100.8 204 99.1 196.7 L97.5 189.4" stroke="#000" stroke-opacity="0.28" stroke-width="2.5" transform="translate(1.6 0.9)"/>
    <path d="M111.1 262 Q112.6 247.1 111.6 239.7 Q110.6 232.3 108.3 225.1 Q106.1 218 103.4 211 Q100.8 204 99.1 196.7 Q97.5 189.4 96.8 181.9 Q96.2 174.5 96.8 167 Q97.4 159.5 98.6 152.1 Q99.7 144.7 100.8 137.3 Q101.8 129.9 101.5 122.4 Q101.3 114.9 100.1 107.6 Q98.9 100.2 96.3 93.1 Q93.7 86.1 90.8 79.2 L87.8 72.3" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="0.6" transform="translate(-0.7 -0.3)"/>
    <path d="M111.1 262 Q112.6 247.1 111.6 239.7 Q110.6 232.3 108.3 225.1 Q106.1 218 103.4 211 Q100.8 204 99.1 196.7 Q97.5 189.4 96.8 181.9 Q96.2 174.5 96.8 167 Q97.4 159.5 98.6 152.1 Q99.7 144.7 100.8 137.3 L101.8 129.9" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="1" transform="translate(-1.2 -0.5)"/>
    <path d="M111.1 262 Q112.6 247.1 111.6 239.7 Q110.6 232.3 108.3 225.1 Q106.1 218 103.4 211 Q100.8 204 99.1 196.7 L97.5 189.4" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="1.3" transform="translate(-1.6 -0.7)"/>
    <path d="M111.1 262 Q112.6 247.1 111.6 239.7 Q110.6 232.3 108.3 225.1 Q106.1 218 103.4 211 Q100.8 204 99.1 196.7 Q97.5 189.4 96.8 181.9 Q96.2 174.5 96.8 167 Q97.4 159.5 98.6 152.1 Q99.7 144.7 100.8 137.3 L101.8 129.9" stroke="hsl(30 12% 9%)" stroke-opacity="0.55" stroke-width="1.4" stroke-dasharray="8.7 2.3 3.5 5.8"/>
    <path d="M111.1 262 Q112.6 247.1 111.6 239.7 Q110.6 232.3 108.3 225.1 Q106.1 218 103.4 211 Q100.8 204 99.1 196.7 Q97.5 189.4 96.8 181.9 Q96.2 174.5 96.8 167 Q97.4 159.5 98.6 152.1 Q99.7 144.7 100.8 137.3 L101.8 129.9" stroke="hsl(36 14% 38%)" stroke-opacity="0.35" stroke-width="0.9" stroke-dasharray="2.6 6.8" transform="translate(-0.9 0)"/>
  </g>
  <!-- Fine hairy rootlets -->
  <path fill="none" stroke="hsl(30 18% 20%)" stroke-opacity="0.6" stroke-width="0.5" stroke-linecap="round" d="M96 258.5 l4.6 3.6 M99.9 259.9 l-2.7 -1.8 M100.2 255.6 l2 1.4 M100 259.5 l3.4 3.2 M105.2 250.1 l2.5 1.2 M106.5 246 l4.1 1.8 M100.6 246.8 l-2.1 -2.5 M104.3 242.4 l3.5 0.8 M109.7 230.2 l2.9 2.5 M107.2 232.2 l-1.9 -1.5 M108 229.5 l-1.7 -1.2 M110.5 235.1 l-3 -2.5 M114.3 228.8 l-1.9 -1 M114.2 219.2 l-1.7 -0.7 M112.7 219 l3.6 0.8 M111.8 221.2 l1.7 0.8 M114.9 216.2 l4 0.9 M115.1 213 l4.6 0.4 M115 215.3 l-1.7 0.2 M115.1 212.5 l3.1 -0.6 M113.8 193.9 l3.4 -0.5 M114.9 195.7 l-4.2 -0.7 M114 198.6 l4.6 -0.6 M115 202.9 l-4.7 0.4 M113.4 182.2 l4.3 0.2 M113.2 192.3 l3.5 -1.4 M113.4 182.7 l1.7 -0.6 M112.8 181 l3.7 0.9 M113.1 175.8 l3 0.4 M113.1 176.8 l-3.4 0.2 M113 178.6 l-2.7 -1.2 M113.6 169.5 l4.3 0.1 M116.8 157.9 l-3.9 -1.6 M117 160.3 l-1.5 -0.8 M115.7 157.9 l2.2 1 M116.4 166.8 l3 -0.1 M117.3 150.3 l3.7 0.8 M122.8 152.1 l-1.9 -2.2 M122.8 148.4 l2.1 0.7 M117.7 155.1 l-2.2 -0.5 M126.2 144.1 l1.5 1.5 M128.8 137.6 l1.5 1.4 M128 139.5 l-2.3 -2 M128 141.1 l3.2 1.4 M133.5 129.7 l1.4 1.1 M130.6 131.7 l-1.7 -0.6 M133.7 132.1 l-2.3 -0.9 M134.4 134.4 l-3 -0.7 M137.4 121.8 l1.2 0.5 M137.5 118.5 l1.3 0.3 M137.8 112.4 l2.8 0.6 M137.1 123.9 l1.2 0.3 M139.3 109.9 l2.5 -0.1 M141.7 105.5 l1.3 0.7 M139.4 110.6 l-2.7 -0.8 M139.2 101.1 l2 0.1 M111.2 253 l-4.9 -2.4 M111.9 247.5 l3 -0.3 M111.7 259.9 l-5.4 -1.9 M111.3 256.5 l4.4 -0.5 M111.2 235.9 l4.4 -0.4 M111.8 241.1 l-5.4 -0.3 M112.5 245.5 l2.2 0.3 M112.1 242.8 l2 0.2 M107.8 225.7 l2.7 -1.5 M108.7 220.5 l-2.1 1.2 M106.7 218.7 l-3.6 0.1 M109.7 222.4 l-5.2 0.7 M104.3 205.6 l4.5 -1.6 M104.8 204.4 l3.2 -1.5 M101.6 211.5 l3.7 -2.5 M105.8 213.1 l3.5 -1.3 M98.9 192.5 l-3.7 0 M99.6 191.5 l2 -0.7 M97.7 198.8 l2.1 -0.7 M99.5 197.2 l3.2 -1.6 M96.5 183.6 l-2.3 0.7 M96.3 185 l-3.2 0.6 M96.8 174.9 l-4.4 -0.8 M97.2 180.3 l-3.2 0.8 M96.9 174.2 l-3.7 0.2 M96.7 167.9 l1.9 0.1 M97.1 165.7 l4.5 0.8 M96.7 160 l4.3 0 M98.6 146.7 l3.2 0.4 M97.6 146.2 l-4.1 0 M98.2 149.1 l2.8 0.6 M97.8 154.1 l-1.9 -0.7 M101.5 135.2 l-2.6 0 M101.4 139.1 l3.3 1.2 M101.3 130.9 l2 -0.3 M101.5 144.7 l-1.9 -0.9 M101.7 127.4 l3.6 0.5 M101.4 125.9 l3.2 0.1 M101.4 129.9 l1.6 -0.4 M101.8 121.7 l-2.8 -0.3 M100.8 109.3 l-3 -0.6 M100 113.9 l-3 0.7 M100.7 114.1 l-1.4 0.6 M99 106 l-1.2 0.5 M93.9 87.6 l-1.3 0.1 M96.7 86.3 l-1.4 0.4 M96 91.6 l1.6 -0.4 M97.3 97.5 l-2.3 0.4 M90.9 78.4 l-3.1 0.2 M92 75 l2.1 -1.9 M88.6 85.4 l2.1 -1.4 M91.7 72.6 l-2.2 1.4"/>
  <!-- Tendrils -->
  <g fill="none" stroke="hsl(68 22% 24%)" stroke-width="0.75" stroke-linecap="round">
    <path d="M44.2 113.3 Q41.7 114 40.5 114 Q39.3 114 38.2 113.7 Q37.1 113.4 36.2 112.7 Q35.3 112.1 34.8 111.2 Q34.3 110.4 34.2 109.4 Q34.1 108.5 34.5 107.7 Q34.8 106.9 35.5 106.5 Q36.1 106 36.8 106 Q37.6 106 38.1 106.4 Q38.6 106.8 38.7 107.3 Q38.9 107.9 38.6 108.3 Q38.4 108.8 37.9 108.9 Q37.5 109 37.2 108.8 L36.9 108.6"/>
    <path d="M49.5 100.5 Q47.1 101.5 46.1 102.2 Q45.2 102.9 44.5 103.9 Q43.8 104.8 43.5 105.8 Q43.2 106.9 43.3 107.9 Q43.4 108.9 43.9 109.7 Q44.4 110.5 45.1 110.9 Q45.9 111.3 46.7 111.3 Q47.5 111.2 48.1 110.8 Q48.6 110.4 48.8 109.8 Q49 109.1 48.8 108.6 Q48.5 108.1 48.1 107.9 Q47.6 107.7 47.2 107.9 Q46.8 108 46.7 108.4 L46.6 108.7"/>
    <path d="M175 65.1 Q175 62.5 175.2 61.3 Q175.5 60.2 176.1 59.2 Q176.7 58.2 177.6 57.5 Q178.4 56.8 179.4 56.5 Q180.3 56.2 181.3 56.4 Q182.2 56.6 182.9 57.1 Q183.6 57.6 183.8 58.4 Q184.1 59.1 183.9 59.8 Q183.8 60.5 183.2 60.9 Q182.7 61.3 182.2 61.3 Q181.6 61.3 181.2 61 Q180.9 60.6 180.9 60.2 Q180.9 59.7 181.1 59.5 L181.4 59.3"/>
    <path d="M166.9 59.4 Q165 57.7 164.2 56.7 Q163.5 55.7 163.2 54.6 Q162.8 53.6 162.8 52.5 Q162.8 51.4 163.3 50.5 Q163.7 49.5 164.4 48.9 Q165.1 48.3 166 48.2 Q166.8 48 167.6 48.3 Q168.3 48.6 168.7 49.2 Q169.1 49.7 169.1 50.4 Q169.1 51 168.7 51.5 Q168.3 51.9 167.8 51.9 Q167.3 52 167 51.7 Q166.7 51.4 166.7 51.1 L166.7 50.7"/>
    <path d="M186.1 38.2 Q188.6 37.6 189.9 37.7 Q191.1 37.7 192.2 38 Q193.3 38.4 194.2 39.1 Q195 39.7 195.5 40.6 Q196 41.5 196 42.4 Q196.1 43.4 195.7 44.1 Q195.4 44.9 194.7 45.4 Q194 45.8 193.3 45.8 Q192.6 45.8 192.1 45.4 Q191.6 45 191.4 44.4 Q191.3 43.8 191.6 43.4 Q191.9 43 192.3 42.9 Q192.7 42.8 193 43 L193.3 43.2"/>
    <path d="M160 50.3 Q160.3 47.8 160.1 46.5 Q160 45.3 159.5 44.3 Q159 43.2 158.2 42.5 Q157.5 41.7 156.5 41.3 Q155.6 40.9 154.7 41 Q153.7 41 153 41.5 Q152.3 42 151.9 42.7 Q151.6 43.4 151.7 44.1 Q151.8 44.8 152.2 45.3 Q152.7 45.7 153.3 45.8 Q153.8 45.8 154.2 45.5 Q154.6 45.2 154.7 44.8 Q154.7 44.3 154.5 44.1 L154.2 43.8"/>
    <path d="M190.9 183.9 Q193.5 183.5 194.6 183 Q195.7 182.4 196.6 181.7 Q197.4 180.9 197.9 179.9 Q198.4 179 198.5 178 Q198.6 177 198.3 176.1 Q198 175.2 197.3 174.6 Q196.6 174.1 195.9 174 Q195.1 173.8 194.4 174.1 Q193.8 174.4 193.5 175 Q193.2 175.6 193.3 176.2 Q193.4 176.7 193.8 177 Q194.3 177.3 194.7 177.2 Q195.1 177.1 195.3 176.8 L195.5 176.5"/>
    <path d="M130.4 136.9 Q131.5 134.6 132.3 133.6 Q133.1 132.7 134.1 132 Q135 131.4 136.1 131.1 Q137.1 130.9 138.1 131 Q139.1 131.2 139.9 131.7 Q140.7 132.3 141 133.1 Q141.4 133.8 141.3 134.6 Q141.3 135.4 140.8 136 Q140.3 136.5 139.7 136.7 Q139.1 136.8 138.6 136.6 Q138.1 136.3 137.9 135.8 Q137.7 135.3 137.9 135 Q138.1 134.6 138.4 134.5 L138.8 134.4"/>
    <path d="M149.8 133.9 Q152 132.5 153.2 132.1 Q154.3 131.8 155.5 131.8 Q156.6 131.8 157.7 132.2 Q158.7 132.5 159.4 133.2 Q160.2 133.9 160.5 134.8 Q160.8 135.7 160.7 136.5 Q160.6 137.4 160.1 138 Q159.6 138.6 158.9 138.8 Q158.2 139 157.6 138.8 Q157 138.6 156.7 138.1 Q156.5 137.6 156.6 137.1 Q156.7 136.6 157.1 136.4 Q157.4 136.1 157.8 136.3 L158.1 136.4"/>
    <path d="M22.9 125.4 Q21.8 127.7 20.9 128.7 Q20.1 129.6 19.1 130.2 Q18.1 130.8 17.1 131 Q16 131.2 15 131 Q14 130.8 13.3 130.2 Q12.6 129.6 12.2 128.8 Q11.9 128 12 127.3 Q12.1 126.5 12.6 125.9 Q13 125.4 13.7 125.3 Q14.3 125.2 14.8 125.4 Q15.3 125.7 15.5 126.2 Q15.6 126.7 15.4 127.1 Q15.2 127.5 14.9 127.5 L14.5 127.6"/>
    <path d="M26.4 99.9 Q23.9 99.4 22.8 98.8 Q21.7 98.2 20.9 97.4 Q20.1 96.6 19.6 95.6 Q19.1 94.7 19.1 93.6 Q19 92.6 19.4 91.8 Q19.8 90.9 20.5 90.4 Q21.2 89.8 21.9 89.8 Q22.7 89.7 23.4 90 Q24 90.3 24.3 90.9 Q24.6 91.5 24.4 92.1 Q24.3 92.6 23.8 92.9 Q23.4 93.2 23 93.1 Q22.6 93 22.4 92.6 L22.2 92.3"/>
    <path d="M130.1 23 Q132.4 24.2 133.6 24.5 Q134.8 24.7 136 24.7 Q137.1 24.6 138.1 24.1 Q139.1 23.7 139.8 23 Q140.5 22.2 140.8 21.3 Q141.1 20.4 140.9 19.6 Q140.7 18.7 140.2 18.2 Q139.6 17.6 138.9 17.4 Q138.2 17.2 137.6 17.5 Q137 17.8 136.8 18.3 Q136.5 18.8 136.7 19.3 Q136.8 19.8 137.2 20 Q137.6 20.2 138 20 L138.3 19.9"/>
    <path d="M80.2 14.7 Q77.9 15.9 76.7 16.2 Q75.5 16.5 74.4 16.4 Q73.2 16.3 72.2 15.9 Q71.3 15.5 70.6 14.7 Q69.9 14 69.6 13.1 Q69.3 12.2 69.5 11.3 Q69.6 10.5 70.2 9.9 Q70.7 9.3 71.4 9.2 Q72.1 9 72.7 9.3 Q73.3 9.5 73.6 10.1 Q73.8 10.6 73.7 11.1 Q73.5 11.5 73.1 11.7 Q72.7 11.9 72.4 11.8 L72.1 11.7"/>
    <path d="M48.8 17.5 Q46.2 17.6 45 17.9 Q43.8 18.2 42.9 18.9 Q41.9 19.5 41.2 20.4 Q40.6 21.2 40.4 22.2 Q40.1 23.2 40.3 24.1 Q40.5 25 41.1 25.7 Q41.6 26.3 42.4 26.6 Q43.1 26.8 43.8 26.6 Q44.5 26.4 44.9 25.9 Q45.3 25.4 45.3 24.8 Q45.2 24.2 44.8 23.9 Q44.5 23.5 44 23.6 Q43.6 23.6 43.4 23.9 L43.2 24.1"/>
    <path d="M82 3.1 Q84.2 1.6 85.3 1.2 Q86.5 0.8 87.6 0.8 Q88.8 0.8 89.8 1.1 Q90.9 1.4 91.6 2.1 Q92.4 2.8 92.8 3.6 Q93.1 4.5 93 5.4 Q93 6.2 92.5 6.9 Q92 7.5 91.3 7.7 Q90.6 8 90 7.7 Q89.4 7.5 89.1 7 Q88.8 6.6 88.9 6.1 Q89 5.6 89.4 5.3 Q89.7 5.1 90.1 5.2 L90.4 5.3"/>
  </g>
  <!-- Ivy leaves: soft shadow, own colour, shading, sheen, faint veins, decay spots -->
  <g transform="translate(117.2 156.3) rotate(-126.6)">
    <path d="M0 0 L5.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.5 0) scale(16.7)">
      <use href="#v4-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-4" fill="hsl(97.4 29.7% 24.5%)"/>
      <use href="#v4-leaf-4" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-4" fill="url(#v4-under)"/>
      <use href="#v4-leaf-4" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.033" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(113.9 118) rotate(-76.9)">
    <path d="M0 0 L4.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.5 0) scale(15.7)">
      <use href="#v4-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-1" fill="hsl(111 36.1% 25.6%)"/>
      <use href="#v4-leaf-1" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-1" fill="url(#v4-under)"/>
      <use href="#v4-leaf-1" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(103.5 113.5) rotate(-222.4)">
    <path d="M0 0 L4.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.3 0) scale(18.5)">
      <use href="#v4-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-2" fill="hsl(102.3 32.7% 18.3%)"/>
      <use href="#v4-leaf-2" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-2" fill="url(#v4-under)"/>
      <use href="#v4-leaf-2" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(93 109) rotate(-89)">
    <path d="M0 0 L5.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.5 0) scale(18.8)">
      <use href="#v4-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-3" fill="hsl(27.3 33.5% 25.2%)"/>
      <use href="#v4-leaf-3" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-3" fill="url(#v4-under)"/>
      <use href="#v4-leaf-3" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.028999999999999998" stroke-linecap="round"/>
      <circle cx="0.637" cy="0.015" r="0.047" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.516" cy="0.20199999999999999" r="0.063" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.502" cy="0.139" r="0.08" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.509" cy="-0.053" r="0.078" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(82.7 104.1) rotate(-216.9)">
    <path d="M0 0 L3.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.6 0) scale(11.4)">
      <use href="#v4-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-1" fill="hsl(32.9 28.8% 27.6%)"/>
      <use href="#v4-leaf-1" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-1" fill="url(#v4-under)"/>
      <use href="#v4-leaf-1" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.048" stroke-linecap="round"/>
      <circle cx="0.322" cy="0.113" r="0.076" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.48" cy="-0.106" r="0.08" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.441" cy="0.136" r="0.066" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.511" cy="-0.051" r="0.057999999999999996" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(72 100.2) rotate(-121.6)">
    <path d="M0 0 L3.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.2 0) scale(16.1)">
      <use href="#v4-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-4" fill="hsl(99.2 41.8% 16.8%)"/>
      <use href="#v4-leaf-4" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-4" fill="url(#v4-under)"/>
      <use href="#v4-leaf-4" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.034" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(44.2 113.3) rotate(-268.7)">
    <path d="M0 0 L5.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.8 0) scale(11.9)">
      <use href="#v4-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-1" fill="hsl(58 34.1% 31.1%)"/>
      <use href="#v4-leaf-1" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-1" fill="url(#v4-under)"/>
      <use href="#v4-leaf-1" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.046" stroke-linecap="round"/>
      <circle cx="0.58" cy="0.081" r="0.064" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.46399999999999997" cy="0.077" r="0.07" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(60.8 98.5) rotate(-217.7)">
    <path d="M0 0 L5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5 0) scale(15.6)">
      <use href="#v4-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-3" fill="hsl(99.2 43.5% 24.7%)"/>
      <use href="#v4-leaf-3" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-3" fill="url(#v4-under)"/>
      <use href="#v4-leaf-3" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(150.1 113.1) rotate(31.1)">
    <path d="M0 0 L5.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.3 0) scale(17.6)">
      <use href="#v4-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-3" fill="hsl(87.8 43.7% 17.4%)"/>
      <use href="#v4-leaf-3" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-3" fill="url(#v4-under)"/>
      <use href="#v4-leaf-3" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.031" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(156.9 106.7) rotate(-91.5)">
    <path d="M0 0 L4.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.1 0) scale(13.3)">
      <use href="#v4-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-3" fill="hsl(62.5 41.8% 35.4%)"/>
      <use href="#v4-leaf-3" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-3" fill="url(#v4-under)"/>
      <use href="#v4-leaf-3" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.040999999999999995" stroke-linecap="round"/>
      <circle cx="0.578" cy="-0.05" r="0.078" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.45899999999999996" cy="-0.17" r="0.076" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(179.1 89.9) rotate(32.4)">
    <path d="M0 0 L3.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.4 0) scale(16.6)">
      <use href="#v4-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-2" fill="hsl(99 27.5% 23.9%)"/>
      <use href="#v4-leaf-2" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-2" fill="url(#v4-under)"/>
      <use href="#v4-leaf-2" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.033" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(176.7 73.3) rotate(-33.2)">
    <path d="M0 0 L4.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.7 0) scale(12.1)">
      <use href="#v4-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-1" fill="hsl(100.4 35% 23%)"/>
      <use href="#v4-leaf-1" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-1" fill="url(#v4-under)"/>
      <use href="#v4-leaf-1" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.045" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(175 65.1) rotate(-150.3)">
    <path d="M0 0 L4.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.8 0) scale(18.2)">
      <use href="#v4-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-2" fill="hsl(58.8 35.9% 36.7%)"/>
      <use href="#v4-leaf-2" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-2" fill="url(#v4-under)"/>
      <use href="#v4-leaf-2" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
      <circle cx="0.373" cy="-0.127" r="0.049" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.319" cy="-0.177" r="0.051" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(187.3 85.5) rotate(-78.2)">
    <path d="M0 0 L3.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.8 0) scale(18.1)">
      <use href="#v4-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-4" fill="hsl(111.3 36.5% 17.8%)"/>
      <use href="#v4-leaf-4" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-4" fill="url(#v4-under)"/>
      <use href="#v4-leaf-4" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(188.5 76.2) rotate(-12)">
    <path d="M0 0 L5.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.2 0) scale(13.6)">
      <use href="#v4-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-2" fill="hsl(90.2 33.7% 28.6%)"/>
      <use href="#v4-leaf-2" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-2" fill="url(#v4-under)"/>
      <use href="#v4-leaf-2" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.04" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(183.1 68.6) rotate(-189.7)">
    <path d="M0 0 L5.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.4 0) scale(12.8)">
      <use href="#v4-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-3" fill="hsl(108.6 41.3% 21.3%)"/>
      <use href="#v4-leaf-3" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-3" fill="url(#v4-under)"/>
      <use href="#v4-leaf-3" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.043" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(175.1 63.9) rotate(-95.5)">
    <path d="M0 0 L5.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.4 0) scale(12.1)">
      <use href="#v4-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-0" fill="hsl(101.2 26.4% 15.5%)"/>
      <use href="#v4-leaf-0" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-0" fill="url(#v4-under)"/>
      <use href="#v4-leaf-0" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.045" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(166.9 59.4) rotate(-195.1)">
    <path d="M0 0 L3.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.8 0) scale(15)">
      <use href="#v4-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-4" fill="hsl(102.3 41.4% 25.1%)"/>
      <use href="#v4-leaf-4" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-4" fill="url(#v4-under)"/>
      <use href="#v4-leaf-4" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.037000000000000005" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(142 100.4) rotate(-33.3)">
    <path d="M0 0 L6.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(6.2 0) scale(22.8)">
      <use href="#v4-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-2" fill="hsl(107.3 31.1% 19.4%)"/>
      <use href="#v4-leaf-2" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-2" fill="url(#v4-under)"/>
      <use href="#v4-leaf-2" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.024" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(152.2 70.2) rotate(-135.1)">
    <path d="M0 0 L3.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.5 0) scale(15)">
      <use href="#v4-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-5" fill="hsl(104.5 33.2% 28.6%)"/>
      <use href="#v4-leaf-5" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-5" fill="url(#v4-under)"/>
      <use href="#v4-leaf-5" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.037000000000000005" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(156.6 60.5) rotate(-20.8)">
    <path d="M0 0 L3.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.9 0) scale(11.9)">
      <use href="#v4-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-4" fill="hsl(108.8 32% 17.6%)"/>
      <use href="#v4-leaf-4" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-4" fill="url(#v4-under)"/>
      <use href="#v4-leaf-4" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.046" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(160 50.3) rotate(-126.6)">
    <path d="M0 0 L5.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.4 0) scale(9.5)">
      <use href="#v4-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-0" fill="hsl(36.1 32.8% 18.9%)"/>
      <use href="#v4-leaf-0" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-0" fill="url(#v4-under)"/>
      <use href="#v4-leaf-0" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.057999999999999996" stroke-linecap="round"/>
      <circle cx="0.193" cy="-0.145" r="0.057" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.433" cy="-0.126" r="0.078" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.345" cy="0.109" r="0.063" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.261" cy="-0.17300000000000001" r="0.042" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(177.4 42.3) rotate(48.4)">
    <path d="M0 0 L5.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.4 0) scale(17.8)">
      <use href="#v4-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-5" fill="hsl(96.4 26.2% 23%)"/>
      <use href="#v4-leaf-5" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-5" fill="url(#v4-under)"/>
      <use href="#v4-leaf-5" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.031" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(186.1 38.2) rotate(-69.7)">
    <path d="M0 0 L4.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.9 0) scale(16.3)">
      <use href="#v4-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-3" fill="hsl(110.1 37.9% 24.5%)"/>
      <use href="#v4-leaf-3" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-3" fill="url(#v4-under)"/>
      <use href="#v4-leaf-3" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.034" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(120.3 205.4) rotate(18.4)">
    <path d="M0 0 L5.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.4 0) scale(22.7)">
      <use href="#v4-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-0" fill="hsl(51.9 46.1% 30.1%)"/>
      <use href="#v4-leaf-0" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-0" fill="url(#v4-under)"/>
      <use href="#v4-leaf-0" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.024" stroke-linecap="round"/>
      <circle cx="0.425" cy="-0.147" r="0.048" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.491" cy="0.062" r="0.07400000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(128.3 200.2) rotate(-94.3)">
    <path d="M0 0 L4.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.1 0) scale(13)">
      <use href="#v4-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-4" fill="hsl(37.9 29.2% 26.7%)"/>
      <use href="#v4-leaf-4" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-4" fill="url(#v4-under)"/>
      <use href="#v4-leaf-4" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.042" stroke-linecap="round"/>
      <circle cx="0.275" cy="0.14400000000000002" r="0.087" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.322" cy="-0.163" r="0.054000000000000006" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.544" cy="-0.192" r="0.075" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.575" cy="0.105" r="0.049" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(136.3 195.1) rotate(4.8)">
    <path d="M0 0 L4.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.2 0) scale(19.1)">
      <use href="#v4-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-4" fill="hsl(101.2 36.9% 27.6%)"/>
      <use href="#v4-leaf-4" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-4" fill="url(#v4-under)"/>
      <use href="#v4-leaf-4" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.028999999999999998" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(144.2 189.7) rotate(-98.8)">
    <path d="M0 0 L5.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.8 0) scale(17.5)">
      <use href="#v4-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-5" fill="hsl(98.5 41.8% 19.5%)"/>
      <use href="#v4-leaf-5" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-5" fill="url(#v4-under)"/>
      <use href="#v4-leaf-5" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.031" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(153 186.2) rotate(34.6)">
    <path d="M0 0 L3.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.7 0) scale(18.6)">
      <use href="#v4-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-2" fill="hsl(58 34.4% 26.3%)"/>
      <use href="#v4-leaf-2" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-2" fill="url(#v4-under)"/>
      <use href="#v4-leaf-2" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
      <circle cx="0.462" cy="0.1" r="0.053" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.433" cy="0.142" r="0.053" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(171.9 184.1) rotate(34.6)">
    <path d="M0 0 L3.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.6 0) scale(15)">
      <use href="#v4-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-2" fill="hsl(30.3 29.4% 20.2%)"/>
      <use href="#v4-leaf-2" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-2" fill="url(#v4-under)"/>
      <use href="#v4-leaf-2" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.037000000000000005" stroke-linecap="round"/>
      <circle cx="0.48200000000000004" cy="-0.06" r="0.06" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.51" cy="0.078" r="0.057999999999999996" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.5710000000000001" cy="-0.151" r="0.057" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.444" cy="-0.21100000000000002" r="0.075" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(181.4 183.8) rotate(-38.2)">
    <path d="M0 0 L5.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.9 0) scale(13.3)">
      <use href="#v4-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-1" fill="hsl(104.2 40.1% 27.8%)"/>
      <use href="#v4-leaf-1" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-1" fill="url(#v4-under)"/>
      <use href="#v4-leaf-1" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.040999999999999995" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(190.9 183.9) rotate(44.2)">
    <path d="M0 0 L5.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.3 0) scale(11.8)">
      <use href="#v4-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-0" fill="hsl(93.2 42.5% 22.7%)"/>
      <use href="#v4-leaf-0" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-0" fill="url(#v4-under)"/>
      <use href="#v4-leaf-0" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.046" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(109.7 174.7) rotate(-11.4)">
    <path d="M0 0 L4.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.3 0) scale(20.3)">
      <use href="#v4-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-1" fill="hsl(100.1 45.3% 25.9%)"/>
      <use href="#v4-leaf-1" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-1" fill="url(#v4-under)"/>
      <use href="#v4-leaf-1" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027000000000000003" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(130.4 136.9) rotate(-125.2)">
    <path d="M0 0 L4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4 0) scale(11.7)">
      <use href="#v4-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-2" fill="hsl(102 30.2% 27.6%)"/>
      <use href="#v4-leaf-2" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-2" fill="url(#v4-under)"/>
      <use href="#v4-leaf-2" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.047" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(130.4 154.9) rotate(-102)">
    <path d="M0 0 L5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5 0) scale(17.2)">
      <use href="#v4-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-0" fill="hsl(104 31% 24.5%)"/>
      <use href="#v4-leaf-0" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-0" fill="url(#v4-under)"/>
      <use href="#v4-leaf-0" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.032" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(136.3 147.4) rotate(-17.2)">
    <path d="M0 0 L3.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.9 0) scale(11.7)">
      <use href="#v4-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-4" fill="hsl(108.2 32.3% 26%)"/>
      <use href="#v4-leaf-4" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-4" fill="url(#v4-under)"/>
      <use href="#v4-leaf-4" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.047" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(149.8 133.9) rotate(29.1)">
    <path d="M0 0 L3.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.2 0) scale(13.1)">
      <use href="#v4-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-5" fill="hsl(61.2 43.7% 32%)"/>
      <use href="#v4-leaf-5" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-5" fill="url(#v4-under)"/>
      <use href="#v4-leaf-5" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.042" stroke-linecap="round"/>
      <circle cx="0.48700000000000004" cy="0.102" r="0.08800000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.38799999999999996" cy="0.155" r="0.07" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(79.5 112.4) rotate(-131.9)">
    <path d="M0 0 L3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3 0) scale(13)">
      <use href="#v4-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-2" fill="hsl(103.9 36.3% 15.5%)"/>
      <use href="#v4-leaf-2" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-2" fill="url(#v4-under)"/>
      <use href="#v4-leaf-2" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.042" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(47.9 103.4) rotate(-204.1)">
    <path d="M0 0 L3.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.3 0) scale(18.1)">
      <use href="#v4-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-5" fill="hsl(92.6 40.7% 24.3%)"/>
      <use href="#v4-leaf-5" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-5" fill="url(#v4-under)"/>
      <use href="#v4-leaf-5" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(25.7 116) rotate(-192.9)">
    <path d="M0 0 L5.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.1 0) scale(13.7)">
      <use href="#v4-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-1" fill="hsl(108.1 38.6% 22.1%)"/>
      <use href="#v4-leaf-1" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-1" fill="url(#v4-under)"/>
      <use href="#v4-leaf-1" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.04" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(22.9 125.4) rotate(-325)">
    <path d="M0 0 L5.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.1 0) scale(11.4)">
      <use href="#v4-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-3" fill="hsl(101.9 41.4% 20.4%)"/>
      <use href="#v4-leaf-3" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-3" fill="url(#v4-under)"/>
      <use href="#v4-leaf-3" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.048" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(101.3 114.9) rotate(-31.9)">
    <path d="M0 0 L6.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(6.3 0) scale(21.2)">
      <use href="#v4-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-5" fill="hsl(90.1 35% 27.9%)"/>
      <use href="#v4-leaf-5" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-5" fill="url(#v4-under)"/>
      <use href="#v4-leaf-5" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.026000000000000002" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(106.2 56.8) rotate(-140)">
    <path d="M0 0 L4.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.1 0) scale(13.9)">
      <use href="#v4-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-2" fill="hsl(84.2 26.5% 17.7%)"/>
      <use href="#v4-leaf-2" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-2" fill="url(#v4-under)"/>
      <use href="#v4-leaf-2" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.04" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(107.4 46.2) rotate(-23.5)">
    <path d="M0 0 L5.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.7 0) scale(16)">
      <use href="#v4-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-1" fill="hsl(85.2 29.4% 19.5%)"/>
      <use href="#v4-leaf-1" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-1" fill="url(#v4-under)"/>
      <use href="#v4-leaf-1" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.034" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(107.3 35.5) rotate(-131.1)">
    <path d="M0 0 L5.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.1 0) scale(11.4)">
      <use href="#v4-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-2" fill="hsl(24.2 34.8% 20%)"/>
      <use href="#v4-leaf-2" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-2" fill="url(#v4-under)"/>
      <use href="#v4-leaf-2" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.048" stroke-linecap="round"/>
      <circle cx="0.285" cy="0.106" r="0.067" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.654" cy="0.07400000000000001" r="0.085" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.446" cy="-0.15" r="0.06" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.406" cy="0.09699999999999999" r="0.052000000000000005" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(122.7 16.9) rotate(66.4)">
    <path d="M0 0 L3.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.3 0) scale(18.2)">
      <use href="#v4-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-2" fill="hsl(60.9 41.5% 33.6%)"/>
      <use href="#v4-leaf-2" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-2" fill="url(#v4-under)"/>
      <use href="#v4-leaf-2" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
      <circle cx="0.29100000000000004" cy="0.179" r="0.071" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.217" cy="-0.153" r="0.055" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(130.1 23) rotate(-33.1)">
    <path d="M0 0 L4.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.1 0) scale(17.2)">
      <use href="#v4-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-5" fill="hsl(108.5 27.8% 23.4%)"/>
      <use href="#v4-leaf-5" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-5" fill="url(#v4-under)"/>
      <use href="#v4-leaf-5" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.032" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(107.6 14.1) rotate(-157.6)">
    <path d="M0 0 L4.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.5 0) scale(16.8)">
      <use href="#v4-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-2" fill="hsl(66.1 34.1% 32.6%)"/>
      <use href="#v4-leaf-2" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-2" fill="url(#v4-under)"/>
      <use href="#v4-leaf-2" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.033" stroke-linecap="round"/>
      <circle cx="0.376" cy="0.124" r="0.05" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.508" cy="0.006" r="0.059000000000000004" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(99.2 7.6) rotate(-77.8)">
    <path d="M0 0 L4.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.9 0) scale(13.6)">
      <use href="#v4-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-4" fill="hsl(85 36.3% 24%)"/>
      <use href="#v4-leaf-4" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-4" fill="url(#v4-under)"/>
      <use href="#v4-leaf-4" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.04" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(80.2 14.7) rotate(-176.5)">
    <path d="M0 0 L4.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.8 0) scale(15.4)">
      <use href="#v4-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-0" fill="hsl(67.6 48.5% 27.7%)"/>
      <use href="#v4-leaf-0" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-0" fill="url(#v4-under)"/>
      <use href="#v4-leaf-0" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.036000000000000004" stroke-linecap="round"/>
      <circle cx="0.29" cy="0.21899999999999997" r="0.057" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.499" cy="-0.11199999999999999" r="0.042" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(93.7 86.1) rotate(-43.8)">
    <path d="M0 0 L5.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.1 0) scale(20.4)">
      <use href="#v4-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-2" fill="hsl(102 34.3% 28.9%)"/>
      <use href="#v4-leaf-2" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-2" fill="url(#v4-under)"/>
      <use href="#v4-leaf-2" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027000000000000003" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(87.8 72.3) rotate(-161.8)">
    <path d="M0 0 L6.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(6.2 0) scale(21.5)">
      <use href="#v4-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-2" fill="hsl(35.6 37.9% 25.8%)"/>
      <use href="#v4-leaf-2" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-2" fill="url(#v4-under)"/>
      <use href="#v4-leaf-2" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.026000000000000002" stroke-linecap="round"/>
      <circle cx="0.542" cy="0.133" r="0.06" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.637" cy="-0.073" r="0.055" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.39899999999999997" cy="0.19899999999999998" r="0.042" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.337" cy="0.222" r="0.08" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(83.3 51.8) rotate(-57.5)">
    <path d="M0 0 L3.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.3 0) scale(19)">
      <use href="#v4-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-5" fill="hsl(99 29.6% 16%)"/>
      <use href="#v4-leaf-5" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-5" fill="url(#v4-under)"/>
      <use href="#v4-leaf-5" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.028999999999999998" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(82 41.3) rotate(-144.7)">
    <path d="M0 0 L5.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.2 0) scale(18.6)">
      <use href="#v4-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-1" fill="hsl(100.9 44.4% 23%)"/>
      <use href="#v4-leaf-1" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-1" fill="url(#v4-under)"/>
      <use href="#v4-leaf-1" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(80.2 30.9) rotate(-51.7)">
    <path d="M0 0 L4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4 0) scale(13.2)">
      <use href="#v4-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-0" fill="hsl(65.9 43.4% 33.8%)"/>
      <use href="#v4-leaf-0" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-0" fill="url(#v4-under)"/>
      <use href="#v4-leaf-0" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.042" stroke-linecap="round"/>
      <circle cx="0.486" cy="0.209" r="0.09" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.282" cy="-0.075" r="0.08800000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(77.1 20.8) rotate(-167.9)">
    <path d="M0 0 L5.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.6 0) scale(12.1)">
      <use href="#v4-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-0" fill="hsl(37.6 39.5% 29.7%)"/>
      <use href="#v4-leaf-0" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-0" fill="url(#v4-under)"/>
      <use href="#v4-leaf-0" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.046" stroke-linecap="round"/>
      <circle cx="0.444" cy="0.08800000000000001" r="0.057999999999999996" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.237" cy="0.14300000000000002" r="0.081" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.21600000000000003" cy="0.17300000000000001" r="0.044000000000000004" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.522" cy="-0.057999999999999996" r="0.067" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(58.2 19.1) rotate(-105.6)">
    <path d="M0 0 L3.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.7 0) scale(18.9)">
      <use href="#v4-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-0" fill="hsl(85.9 29% 23%)"/>
      <use href="#v4-leaf-0" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-0" fill="url(#v4-under)"/>
      <use href="#v4-leaf-0" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.028999999999999998" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(48.8 17.5) rotate(-218.4)">
    <path d="M0 0 L5.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.7 0) scale(17.8)">
      <use href="#v4-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-2" fill="hsl(94.5 38.3% 20.4%)"/>
      <use href="#v4-leaf-2" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-2" fill="url(#v4-under)"/>
      <use href="#v4-leaf-2" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.031" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(74.5 10.5) rotate(-53.4)">
    <path d="M0 0 L3.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.9 0) scale(13.8)">
      <use href="#v4-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-4" fill="hsl(105.8 45.5% 22.9%)"/>
      <use href="#v4-leaf-4" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-4" fill="url(#v4-under)"/>
      <use href="#v4-leaf-4" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.04" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(82 3.1) rotate(-115.6)">
    <path d="M0 0 L4.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.4 0) scale(9.3)">
      <use href="#v4-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v4-leaf-3" fill="hsl(97.6 32.4% 19.1%)"/>
      <use href="#v4-leaf-3" fill="url(#v4-shade)"/>
      <use href="#v4-leaf-3" fill="url(#v4-under)"/>
      <use href="#v4-leaf-3" fill="url(#v4-sheen)"/>
      <use href="#v4-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.059000000000000004" stroke-linecap="round"/>
    </g>
  </g>
</svg>
`,S3=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 260" width="200" height="260">
  <defs>
    <path id="v5-leaf-0" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.18 -0.2 L0.22 -0.28 L0.34 -0.16 L0.38 -0.17 L0.47 -0.33 L0.57 -0.33 L0.5 -0.12 L0.53 -0.08 L0.77 -0.11 L0.98 0 L0.77 0.11 L0.53 0.09 L0.5 0.12 L0.57 0.33 L0.47 0.33 L0.38 0.17 L0.34 0.16 L0.27 0.19 L0.24 0.14 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v5-veins-0" d="M0.23 0 L0.86 0 M0.23 0 L0.52 0.3 M0.23 0 L0.52 -0.31 M0.23 0 L0.26 0.16 M0.23 0 L0.22 -0.23"/>
    <path id="v5-leaf-1" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.22 -0.16 L0.25 -0.22 L0.34 -0.16 L0.38 -0.17 L0.46 -0.29 L0.55 -0.29 L0.5 -0.12 L0.53 -0.08 L0.78 -0.11 L0.99 0 L0.78 0.11 L0.53 0.09 L0.5 0.12 L0.58 0.34 L0.47 0.34 L0.38 0.17 L0.34 0.16 L0.23 0.27 L0.19 0.19 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v5-veins-1" d="M0.23 0 L0.87 0 M0.23 0 L0.52 0.32 M0.23 0 L0.5 -0.26 M0.23 0 L0.22 0.22 M0.23 0 L0.25 -0.18"/>
    <path id="v5-leaf-2" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.22 -0.16 L0.25 -0.22 L0.34 -0.16 L0.38 -0.17 L0.46 -0.31 L0.56 -0.31 L0.5 -0.12 L0.53 -0.08 L0.78 -0.11 L0.99 0 L0.78 0.11 L0.53 0.09 L0.5 0.12 L0.57 0.33 L0.47 0.33 L0.38 0.17 L0.34 0.16 L0.25 0.22 L0.22 0.16 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v5-veins-2" d="M0.23 0 L0.87 0 M0.23 0 L0.51 0.3 M0.23 0 L0.51 -0.28 M0.23 0 L0.25 0.18 M0.23 0 L0.25 -0.18"/>
    <path id="v5-leaf-3" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.2 -0.18 L0.24 -0.25 L0.34 -0.16 L0.38 -0.17 L0.48 -0.37 L0.6 -0.37 L0.5 -0.12 L0.53 -0.08 L0.75 -0.1 L0.95 0 L0.75 0.1 L0.53 0.09 L0.5 0.12 L0.58 0.35 L0.47 0.35 L0.38 0.17 L0.34 0.16 L0.26 0.2 L0.23 0.15 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v5-veins-3" d="M0.23 0 L0.83 0 M0.23 0 L0.52 0.32 M0.23 0 L0.53 -0.34 M0.23 0 L0.26 0.17 M0.23 0 L0.23 -0.2"/>
    <path id="v5-leaf-4" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.21 -0.17 L0.24 -0.24 L0.34 -0.16 L0.38 -0.17 L0.46 -0.31 L0.56 -0.31 L0.5 -0.12 L0.53 -0.08 L0.77 -0.1 L0.97 0 L0.77 0.1 L0.53 0.09 L0.5 0.12 L0.57 0.34 L0.47 0.33 L0.38 0.17 L0.34 0.16 L0.25 0.23 L0.21 0.17 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v5-veins-4" d="M0.23 0 L0.85 0 M0.23 0 L0.52 0.31 M0.23 0 L0.51 -0.28 M0.23 0 L0.24 0.19 M0.23 0 L0.24 -0.19"/>
    <path id="v5-leaf-5" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.18 -0.2 L0.22 -0.27 L0.34 -0.16 L0.38 -0.17 L0.46 -0.3 L0.56 -0.3 L0.5 -0.12 L0.53 -0.08 L0.79 -0.11 L1.01 0 L0.79 0.11 L0.53 0.09 L0.5 0.12 L0.55 0.3 L0.46 0.3 L0.38 0.17 L0.34 0.16 L0.26 0.2 L0.23 0.15 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v5-veins-5" d="M0.23 0 L0.88 0 M0.23 0 L0.5 0.27 M0.23 0 L0.5 -0.28 M0.23 0 L0.26 0.16 M0.23 0 L0.22 -0.22"/>
    <linearGradient id="v5-shade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#000" stop-opacity="0.42"/>
      <stop offset="0.4" stop-color="#000" stop-opacity="0.06"/>
      <stop offset="0.75" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.18"/>
    </linearGradient>
    <linearGradient id="v5-under" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0.45" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.22"/>
    </linearGradient>
    <radialGradient id="v5-sheen" cx="0.45" cy="0.3" r="0.55">
      <stop offset="0" stop-color="#f4f6dc" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#f4f6dc" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- Soft shadows under the stems -->
  <g fill="none" stroke="#000" stroke-opacity="0.22" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 3)">
    <path d="M91.6 262 Q94.1 249.9 96.2 244.1 Q98.3 238.2 101.2 232.8 Q104.1 227.3 107.9 222.4 Q111.7 217.5 115.2 212.4 Q118.7 207.3 121.4 201.7 Q124 196.1 126 190.3 Q128 184.4 129 178.3 Q130 172.2 131 166.1 Q132 160 132.9 153.9 Q133.9 147.7 135.9 141.9 L137.9 136" stroke-width="7.3"/>
    <path d="M93.7 262 Q98.7 248.1 102.2 241.6 Q105.7 235.1 110.8 229.7 Q115.8 224.3 121.2 219.2 Q126.6 214.2 131.5 208.7 Q136.5 203.2 140.9 197.3 Q145.4 191.4 148.9 184.9 Q152.3 178.3 154.8 171.4 Q157.3 164.4 159.4 157.3 Q161.5 150.2 163.6 143.2 Q165.6 136.1 169.2 129.6 Q172.9 123.2 177.8 117.7 L182.8 112.2" stroke-width="7.6"/>
    <path d="M104.1 227.3 Q102.6 218 101.4 213.5 Q100.3 208.9 98.3 204.6 Q96.4 200.4 95 195.9 Q93.5 191.4 91.9 187 Q90.3 182.6 89.2 178.1 Q88.1 173.5 86.6 169 Q85.1 164.6 83.7 160.1 L82.2 155.7" stroke-width="2.4"/>
    <path d="M111.7 217.5 Q120.8 213.7 125.1 211.3 Q129.5 208.8 133.7 206.3 Q138 203.8 142.5 201.7 Q147 199.6 151.5 197.6 Q156 195.6 160.7 193.9 Q165.3 192.1 170.1 190.7 L174.8 189.4" stroke-width="2.4"/>
    <path d="M118.7 207.3 Q127.3 203.8 131.8 202.8 Q136.4 201.8 141 202.4 Q145.6 202.9 149.9 204.7 Q154.2 206.5 158.1 208.9 Q162.1 211.3 166.3 213.4 Q170.4 215.5 174.3 218.1 L178.2 220.7" stroke-width="2.4"/>
    <path d="M124 196.1 Q135.9 194.6 141.8 194 Q147.8 193.4 153.7 193.3 Q159.7 193.3 165.7 193.5 Q171.7 193.7 177.6 194.3 Q183.5 194.9 188.5 191.5 Q193.4 188.1 195.5 182.5 L197.7 177" stroke-width="2.1"/>
    <path d="M128 184.4 Q120.1 175.9 115.9 171.8 Q111.7 167.7 107.3 163.9 Q102.9 160.1 98.6 156.2 Q94.3 152.3 89.3 149.3 Q84.3 146.3 78.8 144.4 L73.3 142.5" stroke-width="2.5"/>
    <path d="M91.9 131.2 Q84.2 135 80.7 137.5 Q77.2 140.1 74.3 143.3 L71.4 146.5" stroke-width="2.1"/>
    <path d="M82.5 129.2 Q75.7 134.5 72.3 137.2 Q69 140 65.6 142.6 L62.2 145.2" stroke-width="2.1"/>
    <path d="M130 172.2 Q123.7 165 121.1 161 Q118.5 157 116.2 152.7 Q114 148.5 111.1 144.6 Q108.3 140.8 104.5 137.8 Q100.8 134.8 96.4 133 Q91.9 131.2 87.2 130.2 Q82.5 129.2 77.8 128.5 Q73 127.7 68.3 127 Q63.6 126.3 59 124.9 L54.3 123.6" stroke-width="2.7"/>
    <path d="M132 160 Q126.9 150.8 124 146.5 Q121 142.1 118.1 137.8 Q115.1 133.5 112.4 129 Q109.7 124.6 107.3 119.9 Q105 115.2 102.4 110.7 Q99.8 106.1 97.1 101.6 Q94.4 97.2 91.1 93.1 Q87.7 89.1 83.6 85.9 Q79.5 82.6 74.9 80 L70.4 77.4" stroke-width="2.3"/>
    <path d="M197 117.9 Q191.6 110.3 188 107.3 Q184.5 104.2 180.2 102.3 L176 100.3" stroke-width="1.6"/>
    <path d="M198.7 107.7 Q200.2 98.4 198.4 94.1 Q196.7 89.7 193.5 86.3 L190.3 83" stroke-width="1.6"/>
    <path d="M133.9 147.7 Q141.1 140.3 145.7 137.8 Q150.3 135.4 155.2 133.9 Q160.2 132.5 165.3 131.2 Q170.3 130 175.4 129 Q180.5 128 185.6 127.1 Q190.8 126.2 193.9 122.1 Q197 117.9 197.9 112.8 L198.7 107.7" stroke-width="2.1"/>
    <path d="M145.6 79 Q155.3 75.3 160.1 73.5 Q165 71.7 169.8 69.8 L174.6 67.9" stroke-width="1.8"/>
    <path d="M137.9 136 Q140 124.7 140.7 119 Q141.5 113.3 141.7 107.5 Q141.9 101.8 142.7 96.1 Q143.4 90.4 144.5 84.7 L145.6 79" stroke-width="2.3"/>
    <path d="M72.4 121.8 Q62.2 124.1 57 124.2 Q51.8 124.3 46.6 123.9 L41.5 123.4" stroke-width="1.9"/>
    <path d="M145.4 191.4 Q141.9 180.4 138.9 175.4 Q135.9 170.5 132.4 165.9 Q128.9 161.3 124.4 157.7 Q119.8 154.2 114.8 151.3 Q109.8 148.4 104.7 145.7 Q99.6 143 95.2 139.2 Q90.8 135.5 86.6 131.6 Q82.3 127.6 77.3 124.7 Q72.4 121.8 66.8 120.3 Q61.2 118.8 55.5 118.2 Q49.7 117.6 43.9 117.3 L38.2 116.9" stroke-width="2.5"/>
    <path d="M157.3 164.4 Q151.8 155.4 148.9 150.9 Q146 146.5 143.2 142 Q140.4 137.4 137.2 133.3 Q133.9 129.1 130.5 125 Q127 121 122.4 118.3 Q117.9 115.6 113 113.5 Q108.1 111.5 102.9 110.4 L97.7 109.3" stroke-width="2.7"/>
    <path d="M161.5 150.2 Q156.2 142.7 153.9 138.7 Q151.7 134.7 150.3 130.4 Q148.9 126 147.2 121.7 Q145.5 117.4 143.3 113.4 Q141.1 109.4 138 106 Q134.9 102.6 131.6 99.4 Q128.2 96.2 125.4 92.7 Q122.5 89.1 119.7 85.4 Q117 81.7 114.7 77.7 L112.4 73.7" stroke-width="2.3"/>
    <path d="M182.8 112.2 Q184.5 102 183.5 97 Q182.4 91.9 179.7 87.5 Q176.9 83.2 173.6 79.2 Q170.3 75.2 166.6 71.7 Q162.8 68.2 158.6 65.2 Q154.3 62.3 149.8 59.9 L145.2 57.5" stroke-width="2.4"/>
  </g>
  <!-- Trailing shoots: green-brown, with a thin highlight -->
  <g fill="none" stroke="hsl(68 22% 21%)" stroke-linecap="round" stroke-linejoin="round">
    <path d="M104.1 227.3 Q102.6 218 101.4 213.5 Q100.3 208.9 98.3 204.6 Q96.4 200.4 95 195.9 Q93.5 191.4 91.9 187 Q90.3 182.6 89.2 178.1 Q88.1 173.5 86.6 169 Q85.1 164.6 83.7 160.1 L82.2 155.7" stroke-width="1.7"/>
    <path d="M111.7 217.5 Q120.8 213.7 125.1 211.3 Q129.5 208.8 133.7 206.3 Q138 203.8 142.5 201.7 Q147 199.6 151.5 197.6 Q156 195.6 160.7 193.9 Q165.3 192.1 170.1 190.7 L174.8 189.4" stroke-width="1.7"/>
    <path d="M118.7 207.3 Q127.3 203.8 131.8 202.8 Q136.4 201.8 141 202.4 Q145.6 202.9 149.9 204.7 Q154.2 206.5 158.1 208.9 Q162.1 211.3 166.3 213.4 Q170.4 215.5 174.3 218.1 L178.2 220.7" stroke-width="1.7"/>
    <path d="M124 196.1 Q135.9 194.6 141.8 194 Q147.8 193.4 153.7 193.3 Q159.7 193.3 165.7 193.5 Q171.7 193.7 177.6 194.3 Q183.5 194.9 188.5 191.5 Q193.4 188.1 195.5 182.5 L197.7 177" stroke-width="1.4"/>
    <path d="M128 184.4 Q120.1 175.9 115.9 171.8 Q111.7 167.7 107.3 163.9 Q102.9 160.1 98.6 156.2 Q94.3 152.3 89.3 149.3 Q84.3 146.3 78.8 144.4 L73.3 142.5" stroke-width="1.8"/>
    <path d="M91.9 131.2 Q84.2 135 80.7 137.5 Q77.2 140.1 74.3 143.3 L71.4 146.5" stroke-width="1.4"/>
    <path d="M82.5 129.2 Q75.7 134.5 72.3 137.2 Q69 140 65.6 142.6 L62.2 145.2" stroke-width="1.4"/>
    <path d="M130 172.2 Q123.7 165 121.1 161 Q118.5 157 116.2 152.7 Q114 148.5 111.1 144.6 Q108.3 140.8 104.5 137.8 Q100.8 134.8 96.4 133 Q91.9 131.2 87.2 130.2 Q82.5 129.2 77.8 128.5 Q73 127.7 68.3 127 Q63.6 126.3 59 124.9 L54.3 123.6" stroke-width="2"/>
    <path d="M132 160 Q126.9 150.8 124 146.5 Q121 142.1 118.1 137.8 Q115.1 133.5 112.4 129 Q109.7 124.6 107.3 119.9 Q105 115.2 102.4 110.7 Q99.8 106.1 97.1 101.6 Q94.4 97.2 91.1 93.1 Q87.7 89.1 83.6 85.9 Q79.5 82.6 74.9 80 L70.4 77.4" stroke-width="1.6"/>
    <path d="M197 117.9 Q191.6 110.3 188 107.3 Q184.5 104.2 180.2 102.3 L176 100.3" stroke-width="1"/>
    <path d="M198.7 107.7 Q200.2 98.4 198.4 94.1 Q196.7 89.7 193.5 86.3 L190.3 83" stroke-width="1"/>
    <path d="M133.9 147.7 Q141.1 140.3 145.7 137.8 Q150.3 135.4 155.2 133.9 Q160.2 132.5 165.3 131.2 Q170.3 130 175.4 129 Q180.5 128 185.6 127.1 Q190.8 126.2 193.9 122.1 Q197 117.9 197.9 112.8 L198.7 107.7" stroke-width="1.4"/>
    <path d="M145.6 79 Q155.3 75.3 160.1 73.5 Q165 71.7 169.8 69.8 L174.6 67.9" stroke-width="1.1"/>
    <path d="M137.9 136 Q140 124.7 140.7 119 Q141.5 113.3 141.7 107.5 Q141.9 101.8 142.7 96.1 Q143.4 90.4 144.5 84.7 L145.6 79" stroke-width="1.6"/>
    <path d="M72.4 121.8 Q62.2 124.1 57 124.2 Q51.8 124.3 46.6 123.9 L41.5 123.4" stroke-width="1.2"/>
    <path d="M145.4 191.4 Q141.9 180.4 138.9 175.4 Q135.9 170.5 132.4 165.9 Q128.9 161.3 124.4 157.7 Q119.8 154.2 114.8 151.3 Q109.8 148.4 104.7 145.7 Q99.6 143 95.2 139.2 Q90.8 135.5 86.6 131.6 Q82.3 127.6 77.3 124.7 Q72.4 121.8 66.8 120.3 Q61.2 118.8 55.5 118.2 Q49.7 117.6 43.9 117.3 L38.2 116.9" stroke-width="1.8"/>
    <path d="M157.3 164.4 Q151.8 155.4 148.9 150.9 Q146 146.5 143.2 142 Q140.4 137.4 137.2 133.3 Q133.9 129.1 130.5 125 Q127 121 122.4 118.3 Q117.9 115.6 113 113.5 Q108.1 111.5 102.9 110.4 L97.7 109.3" stroke-width="2"/>
    <path d="M161.5 150.2 Q156.2 142.7 153.9 138.7 Q151.7 134.7 150.3 130.4 Q148.9 126 147.2 121.7 Q145.5 117.4 143.3 113.4 Q141.1 109.4 138 106 Q134.9 102.6 131.6 99.4 Q128.2 96.2 125.4 92.7 Q122.5 89.1 119.7 85.4 Q117 81.7 114.7 77.7 L112.4 73.7" stroke-width="1.6"/>
    <path d="M182.8 112.2 Q184.5 102 183.5 97 Q182.4 91.9 179.7 87.5 Q176.9 83.2 173.6 79.2 Q170.3 75.2 166.6 71.7 Q162.8 68.2 158.6 65.2 Q154.3 62.3 149.8 59.9 L145.2 57.5" stroke-width="1.7"/>
  </g>
  <g fill="none" stroke="hsl(70 25% 40%)" stroke-opacity="0.45" stroke-linecap="round" transform="translate(-0.4 -0.3)">
    <path d="M104.1 227.3 Q102.6 218 101.4 213.5 Q100.3 208.9 98.3 204.6 Q96.4 200.4 95 195.9 Q93.5 191.4 91.9 187 Q90.3 182.6 89.2 178.1 Q88.1 173.5 86.6 169 Q85.1 164.6 83.7 160.1 L82.2 155.7" stroke-width="0.5"/>
    <path d="M111.7 217.5 Q120.8 213.7 125.1 211.3 Q129.5 208.8 133.7 206.3 Q138 203.8 142.5 201.7 Q147 199.6 151.5 197.6 Q156 195.6 160.7 193.9 Q165.3 192.1 170.1 190.7 L174.8 189.4" stroke-width="0.5"/>
    <path d="M118.7 207.3 Q127.3 203.8 131.8 202.8 Q136.4 201.8 141 202.4 Q145.6 202.9 149.9 204.7 Q154.2 206.5 158.1 208.9 Q162.1 211.3 166.3 213.4 Q170.4 215.5 174.3 218.1 L178.2 220.7" stroke-width="0.5"/>
    <path d="M124 196.1 Q135.9 194.6 141.8 194 Q147.8 193.4 153.7 193.3 Q159.7 193.3 165.7 193.5 Q171.7 193.7 177.6 194.3 Q183.5 194.9 188.5 191.5 Q193.4 188.1 195.5 182.5 L197.7 177" stroke-width="0.4"/>
    <path d="M128 184.4 Q120.1 175.9 115.9 171.8 Q111.7 167.7 107.3 163.9 Q102.9 160.1 98.6 156.2 Q94.3 152.3 89.3 149.3 Q84.3 146.3 78.8 144.4 L73.3 142.5" stroke-width="0.5"/>
    <path d="M91.9 131.2 Q84.2 135 80.7 137.5 Q77.2 140.1 74.3 143.3 L71.4 146.5" stroke-width="0.4"/>
    <path d="M82.5 129.2 Q75.7 134.5 72.3 137.2 Q69 140 65.6 142.6 L62.2 145.2" stroke-width="0.4"/>
    <path d="M130 172.2 Q123.7 165 121.1 161 Q118.5 157 116.2 152.7 Q114 148.5 111.1 144.6 Q108.3 140.8 104.5 137.8 Q100.8 134.8 96.4 133 Q91.9 131.2 87.2 130.2 Q82.5 129.2 77.8 128.5 Q73 127.7 68.3 127 Q63.6 126.3 59 124.9 L54.3 123.6" stroke-width="0.6"/>
    <path d="M132 160 Q126.9 150.8 124 146.5 Q121 142.1 118.1 137.8 Q115.1 133.5 112.4 129 Q109.7 124.6 107.3 119.9 Q105 115.2 102.4 110.7 Q99.8 106.1 97.1 101.6 Q94.4 97.2 91.1 93.1 Q87.7 89.1 83.6 85.9 Q79.5 82.6 74.9 80 L70.4 77.4" stroke-width="0.5"/>
    <path d="M197 117.9 Q191.6 110.3 188 107.3 Q184.5 104.2 180.2 102.3 L176 100.3" stroke-width="0.3"/>
    <path d="M198.7 107.7 Q200.2 98.4 198.4 94.1 Q196.7 89.7 193.5 86.3 L190.3 83" stroke-width="0.3"/>
    <path d="M133.9 147.7 Q141.1 140.3 145.7 137.8 Q150.3 135.4 155.2 133.9 Q160.2 132.5 165.3 131.2 Q170.3 130 175.4 129 Q180.5 128 185.6 127.1 Q190.8 126.2 193.9 122.1 Q197 117.9 197.9 112.8 L198.7 107.7" stroke-width="0.4"/>
    <path d="M145.6 79 Q155.3 75.3 160.1 73.5 Q165 71.7 169.8 69.8 L174.6 67.9" stroke-width="0.3"/>
    <path d="M137.9 136 Q140 124.7 140.7 119 Q141.5 113.3 141.7 107.5 Q141.9 101.8 142.7 96.1 Q143.4 90.4 144.5 84.7 L145.6 79" stroke-width="0.5"/>
    <path d="M72.4 121.8 Q62.2 124.1 57 124.2 Q51.8 124.3 46.6 123.9 L41.5 123.4" stroke-width="0.4"/>
    <path d="M145.4 191.4 Q141.9 180.4 138.9 175.4 Q135.9 170.5 132.4 165.9 Q128.9 161.3 124.4 157.7 Q119.8 154.2 114.8 151.3 Q109.8 148.4 104.7 145.7 Q99.6 143 95.2 139.2 Q90.8 135.5 86.6 131.6 Q82.3 127.6 77.3 124.7 Q72.4 121.8 66.8 120.3 Q61.2 118.8 55.5 118.2 Q49.7 117.6 43.9 117.3 L38.2 116.9" stroke-width="0.5"/>
    <path d="M157.3 164.4 Q151.8 155.4 148.9 150.9 Q146 146.5 143.2 142 Q140.4 137.4 137.2 133.3 Q133.9 129.1 130.5 125 Q127 121 122.4 118.3 Q117.9 115.6 113 113.5 Q108.1 111.5 102.9 110.4 L97.7 109.3" stroke-width="0.6"/>
    <path d="M161.5 150.2 Q156.2 142.7 153.9 138.7 Q151.7 134.7 150.3 130.4 Q148.9 126 147.2 121.7 Q145.5 117.4 143.3 113.4 Q141.1 109.4 138 106 Q134.9 102.6 131.6 99.4 Q128.2 96.2 125.4 92.7 Q122.5 89.1 119.7 85.4 Q117 81.7 114.7 77.7 L112.4 73.7" stroke-width="0.5"/>
    <path d="M182.8 112.2 Q184.5 102 183.5 97 Q182.4 91.9 179.7 87.5 Q176.9 83.2 173.6 79.2 Q170.3 75.2 166.6 71.7 Q162.8 68.2 158.6 65.2 Q154.3 62.3 149.8 59.9 L145.2 57.5" stroke-width="0.5"/>
  </g>
  <!-- Woody trunks: tapering, shaded round, with streaky bark -->
  <g fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M91.6 262 Q94.1 249.9 96.2 244.1 Q98.3 238.2 101.2 232.8 Q104.1 227.3 107.9 222.4 Q111.7 217.5 115.2 212.4 Q118.7 207.3 121.4 201.7 Q124 196.1 126 190.3 Q128 184.4 129 178.3 Q130 172.2 131 166.1 Q132 160 132.9 153.9 Q133.9 147.7 135.9 141.9 L137.9 136" stroke="hsl(30 14% 19%)" stroke-width="3"/>
    <path d="M91.6 262 Q94.1 249.9 96.2 244.1 Q98.3 238.2 101.2 232.8 Q104.1 227.3 107.9 222.4 Q111.7 217.5 115.2 212.4 Q118.7 207.3 121.4 201.7 Q124 196.1 126 190.3 Q128 184.4 129 178.3 L130 172.2" stroke="hsl(30 14% 19%)" stroke-width="5"/>
    <path d="M91.6 262 Q94.1 249.9 96.2 244.1 Q98.3 238.2 101.2 232.8 Q104.1 227.3 107.9 222.4 L111.7 217.5" stroke="hsl(30 14% 19%)" stroke-width="6.7"/>
    <path d="M91.6 262 Q94.1 249.9 96.2 244.1 Q98.3 238.2 101.2 232.8 Q104.1 227.3 107.9 222.4 Q111.7 217.5 115.2 212.4 Q118.7 207.3 121.4 201.7 Q124 196.1 126 190.3 Q128 184.4 129 178.3 Q130 172.2 131 166.1 Q132 160 132.9 153.9 Q133.9 147.7 135.9 141.9 L137.9 136" stroke="#000" stroke-opacity="0.28" stroke-width="1" transform="translate(0.7 0.4)"/>
    <path d="M91.6 262 Q94.1 249.9 96.2 244.1 Q98.3 238.2 101.2 232.8 Q104.1 227.3 107.9 222.4 Q111.7 217.5 115.2 212.4 Q118.7 207.3 121.4 201.7 Q124 196.1 126 190.3 Q128 184.4 129 178.3 L130 172.2" stroke="#000" stroke-opacity="0.28" stroke-width="1.7" transform="translate(1.1 0.6)"/>
    <path d="M91.6 262 Q94.1 249.9 96.2 244.1 Q98.3 238.2 101.2 232.8 Q104.1 227.3 107.9 222.4 L111.7 217.5" stroke="#000" stroke-opacity="0.28" stroke-width="2.3" transform="translate(1.5 0.8)"/>
    <path d="M91.6 262 Q94.1 249.9 96.2 244.1 Q98.3 238.2 101.2 232.8 Q104.1 227.3 107.9 222.4 Q111.7 217.5 115.2 212.4 Q118.7 207.3 121.4 201.7 Q124 196.1 126 190.3 Q128 184.4 129 178.3 Q130 172.2 131 166.1 Q132 160 132.9 153.9 Q133.9 147.7 135.9 141.9 L137.9 136" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="0.5" transform="translate(-0.7 -0.3)"/>
    <path d="M91.6 262 Q94.1 249.9 96.2 244.1 Q98.3 238.2 101.2 232.8 Q104.1 227.3 107.9 222.4 Q111.7 217.5 115.2 212.4 Q118.7 207.3 121.4 201.7 Q124 196.1 126 190.3 Q128 184.4 129 178.3 L130 172.2" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="0.9" transform="translate(-1.1 -0.5)"/>
    <path d="M91.6 262 Q94.1 249.9 96.2 244.1 Q98.3 238.2 101.2 232.8 Q104.1 227.3 107.9 222.4 L111.7 217.5" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="1.2" transform="translate(-1.5 -0.7)"/>
    <path d="M91.6 262 Q94.1 249.9 96.2 244.1 Q98.3 238.2 101.2 232.8 Q104.1 227.3 107.9 222.4 Q111.7 217.5 115.2 212.4 Q118.7 207.3 121.4 201.7 Q124 196.1 126 190.3 Q128 184.4 129 178.3 L130 172.2" stroke="hsl(30 12% 9%)" stroke-opacity="0.55" stroke-width="1.3" stroke-dasharray="4.4 2.7 5.5 5"/>
    <path d="M91.6 262 Q94.1 249.9 96.2 244.1 Q98.3 238.2 101.2 232.8 Q104.1 227.3 107.9 222.4 Q111.7 217.5 115.2 212.4 Q118.7 207.3 121.4 201.7 Q124 196.1 126 190.3 Q128 184.4 129 178.3 L130 172.2" stroke="hsl(36 14% 38%)" stroke-opacity="0.35" stroke-width="0.8" stroke-dasharray="4 7.1" transform="translate(-0.8 0)"/>
  </g>
  <g fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M93.7 262 Q98.7 248.1 102.2 241.6 Q105.7 235.1 110.8 229.7 Q115.8 224.3 121.2 219.2 Q126.6 214.2 131.5 208.7 Q136.5 203.2 140.9 197.3 Q145.4 191.4 148.9 184.9 Q152.3 178.3 154.8 171.4 Q157.3 164.4 159.4 157.3 Q161.5 150.2 163.6 143.2 Q165.6 136.1 169.2 129.6 Q172.9 123.2 177.8 117.7 L182.8 112.2" stroke="hsl(30 14% 19%)" stroke-width="3.1"/>
    <path d="M93.7 262 Q98.7 248.1 102.2 241.6 Q105.7 235.1 110.8 229.7 Q115.8 224.3 121.2 219.2 Q126.6 214.2 131.5 208.7 Q136.5 203.2 140.9 197.3 Q145.4 191.4 148.9 184.9 Q152.3 178.3 154.8 171.4 Q157.3 164.4 159.4 157.3 L161.5 150.2" stroke="hsl(30 14% 19%)" stroke-width="5.2"/>
    <path d="M93.7 262 Q98.7 248.1 102.2 241.6 Q105.7 235.1 110.8 229.7 Q115.8 224.3 121.2 219.2 Q126.6 214.2 131.5 208.7 L136.5 203.2" stroke="hsl(30 14% 19%)" stroke-width="6.9"/>
    <path d="M93.7 262 Q98.7 248.1 102.2 241.6 Q105.7 235.1 110.8 229.7 Q115.8 224.3 121.2 219.2 Q126.6 214.2 131.5 208.7 Q136.5 203.2 140.9 197.3 Q145.4 191.4 148.9 184.9 Q152.3 178.3 154.8 171.4 Q157.3 164.4 159.4 157.3 Q161.5 150.2 163.6 143.2 Q165.6 136.1 169.2 129.6 Q172.9 123.2 177.8 117.7 L182.8 112.2" stroke="#000" stroke-opacity="0.28" stroke-width="1.1" transform="translate(0.7 0.4)"/>
    <path d="M93.7 262 Q98.7 248.1 102.2 241.6 Q105.7 235.1 110.8 229.7 Q115.8 224.3 121.2 219.2 Q126.6 214.2 131.5 208.7 Q136.5 203.2 140.9 197.3 Q145.4 191.4 148.9 184.9 Q152.3 178.3 154.8 171.4 Q157.3 164.4 159.4 157.3 L161.5 150.2" stroke="#000" stroke-opacity="0.28" stroke-width="1.8" transform="translate(1.1 0.6)"/>
    <path d="M93.7 262 Q98.7 248.1 102.2 241.6 Q105.7 235.1 110.8 229.7 Q115.8 224.3 121.2 219.2 Q126.6 214.2 131.5 208.7 L136.5 203.2" stroke="#000" stroke-opacity="0.28" stroke-width="2.4" transform="translate(1.5 0.8)"/>
    <path d="M93.7 262 Q98.7 248.1 102.2 241.6 Q105.7 235.1 110.8 229.7 Q115.8 224.3 121.2 219.2 Q126.6 214.2 131.5 208.7 Q136.5 203.2 140.9 197.3 Q145.4 191.4 148.9 184.9 Q152.3 178.3 154.8 171.4 Q157.3 164.4 159.4 157.3 Q161.5 150.2 163.6 143.2 Q165.6 136.1 169.2 129.6 Q172.9 123.2 177.8 117.7 L182.8 112.2" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="0.6" transform="translate(-0.7 -0.3)"/>
    <path d="M93.7 262 Q98.7 248.1 102.2 241.6 Q105.7 235.1 110.8 229.7 Q115.8 224.3 121.2 219.2 Q126.6 214.2 131.5 208.7 Q136.5 203.2 140.9 197.3 Q145.4 191.4 148.9 184.9 Q152.3 178.3 154.8 171.4 Q157.3 164.4 159.4 157.3 L161.5 150.2" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="0.9" transform="translate(-1.1 -0.5)"/>
    <path d="M93.7 262 Q98.7 248.1 102.2 241.6 Q105.7 235.1 110.8 229.7 Q115.8 224.3 121.2 219.2 Q126.6 214.2 131.5 208.7 L136.5 203.2" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="1.2" transform="translate(-1.5 -0.7)"/>
    <path d="M93.7 262 Q98.7 248.1 102.2 241.6 Q105.7 235.1 110.8 229.7 Q115.8 224.3 121.2 219.2 Q126.6 214.2 131.5 208.7 Q136.5 203.2 140.9 197.3 Q145.4 191.4 148.9 184.9 Q152.3 178.3 154.8 171.4 Q157.3 164.4 159.4 157.3 L161.5 150.2" stroke="hsl(30 12% 9%)" stroke-opacity="0.55" stroke-width="1.4" stroke-dasharray="7.7 2.9 5.2 5.7"/>
    <path d="M93.7 262 Q98.7 248.1 102.2 241.6 Q105.7 235.1 110.8 229.7 Q115.8 224.3 121.2 219.2 Q126.6 214.2 131.5 208.7 Q136.5 203.2 140.9 197.3 Q145.4 191.4 148.9 184.9 Q152.3 178.3 154.8 171.4 Q157.3 164.4 159.4 157.3 L161.5 150.2" stroke="hsl(36 14% 38%)" stroke-opacity="0.35" stroke-width="0.8" stroke-dasharray="2.4 8.2" transform="translate(-0.8 0)"/>
  </g>
  <!-- Fine hairy rootlets -->
  <path fill="none" stroke="hsl(30 18% 20%)" stroke-opacity="0.6" stroke-width="0.5" stroke-linecap="round" d="M92.8 251.6 l-3.7 -1 M93.9 252 l-5.4 -1.3 M94.1 257.1 l-3.3 -0.3 M93.2 252.1 l-3.2 -1.4 M96.5 239.4 l2.4 0.8 M97.6 246.6 l-3.6 -0.8 M98.3 249.3 l3.5 1.7 M97.4 241.3 l-3 -1.9 M98.7 227.6 l4.4 2.7 M101.3 234.4 l3.8 1 M99.8 236.6 l3.1 2.9 M98.6 238.1 l1.5 1.3 M109.7 225.9 l3.6 1.3 M110.3 221.7 l1.6 1.3 M110 218.5 l-4.3 -2.6 M107.6 225.8 l4.5 1.9 M113.4 213.3 l2.1 1.3 M114.6 215.2 l-1.7 -1.6 M113.6 209.1 l3.3 1.4 M117.8 216.7 l-1.7 -1.2 M119 206.3 l3.3 0.5 M123.7 198.9 l1.7 1 M119.2 196.4 l-4.1 -0.8 M118.7 202.7 l-2.6 -2.4 M125.1 196 l2.8 1.5 M125.2 185.7 l-3.3 -0.4 M125.2 195.1 l-1.4 -0.9 M126.7 184.6 l2.4 0.9 M128.7 176.7 l2.9 1.4 M128.7 183.1 l-1.4 -0.2 M128.3 173.9 l2.5 -0.4 M129.8 173.2 l3.5 -0.6 M130.5 171.4 l3.5 0.9 M131.7 166.5 l-2.8 -1.5 M131.3 166.2 l-2.3 -0.1 M130.4 172.2 l-3.7 0.4 M133.8 149.6 l-2.7 0.3 M133.5 156.6 l2.3 -0.2 M132.3 156.6 l3.1 1.2 M132 157.6 l-2.2 -0.9 M135.3 137.9 l2.2 0.3 M137.1 139.8 l2.6 0.3 M136.4 140.1 l1.9 1.1 M137.7 142.9 l1.4 1 M96.9 250.3 l3.2 0.1 M98.2 253.7 l-5.4 -0.8 M94.7 255.3 l4.5 1.5 M94.5 257.4 l-1.7 -1.3 M99.4 239 l4.7 2.8 M102.1 240.6 l3.8 1.2 M99.1 235.6 l4.3 3.8 M100.9 236.4 l3.7 1.4 M114.8 225.9 l-2.2 -2.9 M105.9 231.2 l3.2 2.8 M106.3 233.7 l1.7 1.2 M107.2 231.3 l3 2.8 M126.5 221.1 l-1.3 -1.9 M118.4 222.5 l1.6 2.5 M117.3 217.2 l2 1.8 M123.7 219.1 l-2.8 -3.2 M131.8 213.5 l3 3.1 M135.7 213 l2.2 2.2 M131.3 205.7 l-1.8 -1.2 M131.2 204.3 l-2.6 -3.2 M142.9 200.1 l2.3 2.2 M138.8 192.6 l-3.6 -1.5 M140.4 201.1 l2.1 1.2 M140.4 201.3 l3.9 1.4 M147.3 186.9 l1.5 0.8 M148.5 181.1 l-1.2 -1.2 M149.2 191.1 l-1.9 -1 M147.5 181 l-1.6 -1.1 M156.3 166.1 l2.6 1 M156.2 170.1 l-4 -0.5 M157 176.5 l-1.9 -0.3 M155.3 175.5 l2.5 1.8 M161.4 160.7 l-1.7 -0.1 M157.9 153.3 l-1.9 -1.4 M160.6 158.2 l2.9 1 M157.8 151.7 l-2.1 0 M161.5 143.8 l2.9 0.1 M162.9 149.5 l1.5 0 M162.8 141.2 l-3 -2 M163.4 143.8 l2.7 0.5 M168.9 127.1 l-1.6 -0.6 M169.2 135.2 l1.2 0.5 M168.3 129.7 l-1.6 -1.5 M167.1 124.8 l1 0.8 M173.9 119.6 l1.4 0.9 M173.9 112.3 l-1.8 -1.6 M174 115.4 l1.9 1.3 M181.3 115.7 l0.9 1.2"/>
  <!-- Tendrils -->
  <g fill="none" stroke="hsl(68 22% 24%)" stroke-width="0.75" stroke-linecap="round">
    <path d="M82.2 155.7 Q81.9 153.1 82.1 151.9 Q82.3 150.6 82.8 149.6 Q83.2 148.5 84 147.8 Q84.8 147 85.7 146.6 Q86.7 146.3 87.6 146.3 Q88.5 146.4 89.3 146.9 Q90 147.3 90.3 148 Q90.7 148.7 90.6 149.5 Q90.5 150.2 90 150.6 Q89.5 151.1 89 151.1 Q88.4 151.2 88 150.9 Q87.6 150.5 87.6 150.1 Q87.5 149.7 87.8 149.4 L88 149.1"/>
    <path d="M174.8 189.4 Q177.1 188.1 178.1 187.3 Q179 186.5 179.6 185.5 Q180.2 184.5 180.4 183.5 Q180.6 182.4 180.4 181.4 Q180.1 180.4 179.6 179.7 Q179 178.9 178.2 178.6 Q177.4 178.2 176.6 178.4 Q175.8 178.5 175.3 179 Q174.8 179.4 174.6 180.1 Q174.5 180.7 174.8 181.2 Q175.1 181.7 175.6 181.9 Q176.1 182 176.4 181.8 Q176.8 181.6 176.9 181.3 L177 180.9"/>
    <path d="M178.2 220.7 Q180.6 221.7 181.8 221.8 Q183 222 184.1 221.8 Q185.3 221.6 186.2 221.1 Q187.2 220.6 187.8 219.8 Q188.4 219 188.6 218 Q188.8 217.1 188.5 216.3 Q188.3 215.5 187.7 214.9 Q187.1 214.4 186.4 214.3 Q185.7 214.2 185.1 214.5 Q184.5 214.9 184.4 215.4 Q184.2 216 184.4 216.4 Q184.5 216.9 185 217 Q185.4 217.2 185.7 217 L186 216.9"/>
    <path d="M197.7 177 Q199.1 174.8 200 174 Q200.9 173.1 202 172.6 Q203 172.1 204.1 172 Q205.2 171.9 206.1 172.2 Q207.1 172.5 207.8 173.1 Q208.5 173.8 208.7 174.6 Q209 175.4 208.8 176.2 Q208.7 177 208.1 177.5 Q207.6 177.9 206.9 178 Q206.3 178.1 205.8 177.7 Q205.3 177.4 205.2 176.9 Q205.1 176.4 205.4 176.1 Q205.6 175.7 206 175.6 L206.3 175.6"/>
    <path d="M73.3 142.5 Q70.7 142.2 69.5 142.4 Q68.3 142.5 67.2 143 Q66.2 143.5 65.4 144.2 Q64.6 145 64.2 145.9 Q63.8 146.8 63.9 147.8 Q63.9 148.7 64.4 149.4 Q64.9 150.2 65.6 150.5 Q66.3 150.9 67 150.8 Q67.7 150.7 68.2 150.2 Q68.6 149.8 68.7 149.2 Q68.7 148.6 68.4 148.2 Q68.1 147.8 67.7 147.8 Q67.2 147.7 67 148 L66.7 148.2"/>
    <path d="M71.4 146.5 Q69.3 148 68.2 148.5 Q67 148.9 65.9 149 Q64.7 149.1 63.7 148.8 Q62.6 148.5 61.8 147.9 Q61 147.3 60.6 146.4 Q60.2 145.6 60.3 144.7 Q60.3 143.9 60.7 143.2 Q61.2 142.6 61.9 142.3 Q62.5 142 63.2 142.2 Q63.8 142.4 64.1 142.9 Q64.4 143.3 64.4 143.8 Q64.3 144.3 63.9 144.6 Q63.6 144.8 63.2 144.8 L62.9 144.7"/>
    <path d="M62.2 145.2 Q59.8 146.4 58.6 146.6 Q57.4 146.9 56.3 146.7 Q55.1 146.6 54.1 146.2 Q53.2 145.7 52.5 144.9 Q51.8 144.2 51.6 143.3 Q51.3 142.4 51.5 141.5 Q51.7 140.7 52.3 140.1 Q52.8 139.6 53.5 139.4 Q54.2 139.3 54.8 139.6 Q55.4 139.8 55.6 140.4 Q55.9 140.9 55.7 141.4 Q55.5 141.9 55.2 142 Q54.8 142.2 54.4 142.1 L54.1 141.9"/>
    <path d="M54.3 123.6 Q52 122.4 51.1 121.6 Q50.2 120.8 49.6 119.8 Q49 118.8 48.8 117.7 Q48.6 116.7 48.8 115.7 Q49 114.7 49.6 114 Q50.2 113.2 51 112.9 Q51.8 112.5 52.5 112.6 Q53.3 112.7 53.9 113.2 Q54.4 113.7 54.5 114.3 Q54.6 115 54.4 115.5 Q54.1 116 53.6 116.1 Q53.1 116.3 52.7 116.1 Q52.3 115.9 52.3 115.5 L52.2 115.2"/>
    <path d="M70.4 77.4 Q67.9 76.6 66.7 76.5 Q65.5 76.4 64.3 76.7 Q63.2 77 62.3 77.6 Q61.4 78.2 60.8 79 Q60.3 79.8 60.1 80.8 Q60 81.7 60.3 82.5 Q60.6 83.3 61.3 83.8 Q61.9 84.3 62.6 84.3 Q63.3 84.4 63.9 84 Q64.4 83.7 64.6 83.1 Q64.7 82.6 64.5 82.1 Q64.3 81.7 63.9 81.5 Q63.4 81.4 63.1 81.6 L62.8 81.8"/>
    <path d="M176 100.3 Q173.4 99.7 172.2 99.8 Q171 99.8 169.9 100.1 Q168.8 100.5 167.9 101.2 Q167.1 101.8 166.6 102.7 Q166.1 103.6 166.1 104.6 Q166 105.5 166.4 106.3 Q166.8 107.1 167.4 107.5 Q168.1 107.9 168.8 107.9 Q169.6 107.9 170.1 107.5 Q170.6 107.1 170.7 106.5 Q170.8 105.9 170.5 105.5 Q170.3 105.1 169.8 105 Q169.4 104.9 169.1 105.1 L168.8 105.3"/>
    <path d="M190.3 83 Q188.1 81.5 187 81 Q185.8 80.6 184.7 80.5 Q183.5 80.5 182.5 80.8 Q181.4 81.1 180.7 81.7 Q179.9 82.4 179.5 83.2 Q179.1 84.1 179.2 84.9 Q179.2 85.8 179.7 86.4 Q180.1 87.1 180.8 87.3 Q181.5 87.6 182.1 87.4 Q182.7 87.2 183 86.7 Q183.4 86.2 183.3 85.7 Q183.2 85.2 182.8 85 Q182.5 84.8 182.1 84.9 L181.8 84.9"/>
    <path d="M198.7 107.7 Q199.6 105.2 200.3 104.2 Q201 103.2 201.9 102.5 Q202.8 101.8 203.9 101.5 Q204.9 101.1 205.9 101.2 Q206.9 101.3 207.7 101.8 Q208.5 102.3 209 103 Q209.4 103.8 209.4 104.6 Q209.4 105.4 208.9 105.9 Q208.5 106.5 207.9 106.7 Q207.3 106.9 206.8 106.7 Q206.2 106.5 206 106 Q205.8 105.6 206 105.2 Q206.1 104.7 206.5 104.6 L206.8 104.5"/>
    <path d="M174.6 67.9 Q176.8 66.5 177.7 65.6 Q178.5 64.7 179 63.7 Q179.5 62.6 179.6 61.5 Q179.7 60.5 179.4 59.5 Q179.1 58.5 178.4 57.8 Q177.8 57.2 177 56.9 Q176.1 56.6 175.4 56.8 Q174.6 57 174.1 57.5 Q173.6 58.1 173.6 58.7 Q173.5 59.4 173.9 59.8 Q174.2 60.3 174.7 60.4 Q175.2 60.5 175.5 60.3 Q175.9 60 175.9 59.7 L176 59.3"/>
    <path d="M145.6 79 Q145.6 76.4 145.2 75.2 Q144.9 74.1 144.3 73.1 Q143.7 72.1 142.8 71.4 Q142 70.8 141 70.5 Q140 70.3 139.1 70.4 Q138.2 70.6 137.5 71.2 Q136.8 71.7 136.6 72.5 Q136.3 73.2 136.5 73.9 Q136.7 74.6 137.2 75 Q137.8 75.4 138.3 75.4 Q138.9 75.4 139.3 75 Q139.6 74.6 139.6 74.2 Q139.6 73.8 139.3 73.5 L139 73.3"/>
    <path d="M41.5 123.4 Q38.9 123.7 37.7 124.2 Q36.6 124.6 35.7 125.3 Q34.8 126 34.2 127 Q33.6 127.9 33.5 128.9 Q33.3 129.9 33.6 130.8 Q33.9 131.7 34.5 132.3 Q35.1 132.9 35.9 133.1 Q36.6 133.2 37.3 133 Q38 132.7 38.3 132.2 Q38.7 131.6 38.6 131 Q38.5 130.5 38.1 130.1 Q37.7 129.8 37.3 129.9 Q36.8 129.9 36.6 130.2 L36.4 130.5"/>
    <path d="M38.2 116.9 Q35.7 116.2 34.6 115.6 Q33.5 115 32.7 114.2 Q31.9 113.3 31.5 112.3 Q31.1 111.3 31.1 110.3 Q31.1 109.3 31.5 108.5 Q31.9 107.6 32.6 107.1 Q33.3 106.6 34.1 106.5 Q34.9 106.5 35.5 106.8 Q36.1 107.2 36.4 107.8 Q36.6 108.4 36.5 108.9 Q36.3 109.5 35.8 109.7 Q35.4 110 35 109.9 Q34.6 109.8 34.4 109.4 L34.3 109.1"/>
    <path d="M97.7 109.3 Q95.3 108.3 94.3 107.6 Q93.4 106.8 92.7 105.9 Q92 105 91.7 103.9 Q91.4 102.9 91.6 101.9 Q91.7 100.9 92.2 100.1 Q92.7 99.3 93.5 98.9 Q94.3 98.5 95.1 98.5 Q95.8 98.6 96.4 99 Q97 99.5 97.2 100.1 Q97.3 100.7 97.1 101.2 Q96.8 101.8 96.4 102 Q95.9 102.1 95.5 102 Q95.1 101.8 95 101.4 L94.9 101.1"/>
    <path d="M112.4 73.7 Q110.7 71.7 109.7 71.1 Q108.7 70.4 107.6 70 Q106.5 69.7 105.4 69.7 Q104.3 69.8 103.4 70.2 Q102.5 70.7 101.9 71.4 Q101.3 72.1 101.2 73 Q101.1 73.8 101.3 74.6 Q101.6 75.3 102.2 75.7 Q102.8 76.1 103.5 76.1 Q104.1 76 104.6 75.6 Q105 75.2 105 74.7 Q105 74.2 104.7 73.9 Q104.5 73.6 104.1 73.6 L103.7 73.6"/>
    <path d="M145.2 57.5 Q142.7 56.8 141.4 56.8 Q140.2 56.8 139.1 57.1 Q138 57.4 137.1 58 Q136.2 58.7 135.7 59.5 Q135.2 60.4 135.1 61.3 Q135 62.3 135.3 63.1 Q135.7 63.9 136.3 64.3 Q137 64.8 137.7 64.8 Q138.4 64.8 138.9 64.4 Q139.5 64 139.6 63.5 Q139.7 62.9 139.5 62.5 Q139.2 62 138.8 61.9 Q138.4 61.8 138.1 62 L137.8 62.2"/>
  </g>
  <!-- Ivy leaves: soft shadow, own colour, shading, sheen, faint veins, decay spots -->
  <g transform="translate(100.3 208.9) rotate(-50.8)">
    <path d="M0 0 L5.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.6 0) scale(14.1)">
      <use href="#v5-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-4" fill="hsl(52.3 35.6% 27.6%)"/>
      <use href="#v5-leaf-4" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-4" fill="url(#v5-under)"/>
      <use href="#v5-leaf-4" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.039" stroke-linecap="round"/>
      <circle cx="0.601" cy="0.086" r="0.07400000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.31" cy="-0.17" r="0.054000000000000006" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(96.4 200.4) rotate(-162.7)">
    <path d="M0 0 L4.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.6 0) scale(13.9)">
      <use href="#v5-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-5" fill="hsl(62 45.5% 32.8%)"/>
      <use href="#v5-leaf-5" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-5" fill="url(#v5-under)"/>
      <use href="#v5-leaf-5" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.04" stroke-linecap="round"/>
      <circle cx="0.308" cy="-0.096" r="0.087" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.314" cy="-0.17800000000000002" r="0.087" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(93.5 191.4) rotate(-73.2)">
    <path d="M0 0 L5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5 0) scale(16.9)">
      <use href="#v5-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-5" fill="hsl(111.3 32.7% 21.7%)"/>
      <use href="#v5-leaf-5" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-5" fill="url(#v5-under)"/>
      <use href="#v5-leaf-5" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.032" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(88.1 173.5) rotate(-35.1)">
    <path d="M0 0 L4.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.8 0) scale(15)">
      <use href="#v5-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-5" fill="hsl(23.8 28.7% 20%)"/>
      <use href="#v5-leaf-5" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-5" fill="url(#v5-under)"/>
      <use href="#v5-leaf-5" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.037000000000000005" stroke-linecap="round"/>
      <circle cx="0.506" cy="-0.209" r="0.057999999999999996" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.591" cy="0.039" r="0.07" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.276" cy="-0.151" r="0.081" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.494" cy="0.19699999999999998" r="0.078" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(85.1 164.6) rotate(-156.4)">
    <path d="M0 0 L3.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.7 0) scale(12.2)">
      <use href="#v5-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-3" fill="hsl(101 34.4% 24.2%)"/>
      <use href="#v5-leaf-3" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-3" fill="url(#v5-under)"/>
      <use href="#v5-leaf-3" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.045" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(82.2 155.7) rotate(-51)">
    <path d="M0 0 L4.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.4 0) scale(13.4)">
      <use href="#v5-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-4" fill="hsl(84.9 43% 21.5%)"/>
      <use href="#v5-leaf-4" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-4" fill="url(#v5-under)"/>
      <use href="#v5-leaf-4" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.040999999999999995" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(129.5 208.8) rotate(35.6)">
    <path d="M0 0 L5.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.9 0) scale(15.8)">
      <use href="#v5-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-1" fill="hsl(89.6 34.3% 21.1%)"/>
      <use href="#v5-leaf-1" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-1" fill="url(#v5-under)"/>
      <use href="#v5-leaf-1" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(138 203.8) rotate(-66.8)">
    <path d="M0 0 L6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(6 0) scale(16.9)">
      <use href="#v5-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-1" fill="hsl(61.8 48.9% 32.9%)"/>
      <use href="#v5-leaf-1" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-1" fill="url(#v5-under)"/>
      <use href="#v5-leaf-1" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.033" stroke-linecap="round"/>
      <circle cx="0.289" cy="0.188" r="0.057999999999999996" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.207" cy="-0.193" r="0.078" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(147 199.6) rotate(30.9)">
    <path d="M0 0 L3.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.5 0) scale(13.7)">
      <use href="#v5-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-1" fill="hsl(105.3 37% 21.1%)"/>
      <use href="#v5-leaf-1" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-1" fill="url(#v5-under)"/>
      <use href="#v5-leaf-1" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.04" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(156 195.6) rotate(-97.2)">
    <path d="M0 0 L4.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.2 0) scale(11.5)">
      <use href="#v5-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-0" fill="hsl(98.1 31.9% 20.6%)"/>
      <use href="#v5-leaf-0" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-0" fill="url(#v5-under)"/>
      <use href="#v5-leaf-0" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.048" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(165.3 192.1) rotate(34.9)">
    <path d="M0 0 L3.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.6 0) scale(17.5)">
      <use href="#v5-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-5" fill="hsl(57.1 48.5% 35.5%)"/>
      <use href="#v5-leaf-5" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-5" fill="url(#v5-under)"/>
      <use href="#v5-leaf-5" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.031" stroke-linecap="round"/>
      <circle cx="0.304" cy="0.155" r="0.053" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.282" cy="-0.12300000000000001" r="0.083" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(174.8 189.4) rotate(-89.1)">
    <path d="M0 0 L4.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.9 0) scale(9.1)">
      <use href="#v5-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-1" fill="hsl(89.5 33.7% 15.8%)"/>
      <use href="#v5-leaf-1" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-1" fill="url(#v5-under)"/>
      <use href="#v5-leaf-1" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.06" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(136.4 201.8) rotate(41.6)">
    <path d="M0 0 L3.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.4 0) scale(16.2)">
      <use href="#v5-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-4" fill="hsl(87.9 43.5% 26.1%)"/>
      <use href="#v5-leaf-4" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-4" fill="url(#v5-under)"/>
      <use href="#v5-leaf-4" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.034" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(145.6 202.9) rotate(-57.1)">
    <path d="M0 0 L4.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.7 0) scale(16.3)">
      <use href="#v5-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-1" fill="hsl(92.3 37.9% 15.8%)"/>
      <use href="#v5-leaf-1" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-1" fill="url(#v5-under)"/>
      <use href="#v5-leaf-1" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.034" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(154.2 206.5) rotate(69.5)">
    <path d="M0 0 L5.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.9 0) scale(12.7)">
      <use href="#v5-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-2" fill="hsl(105.2 42.9% 18.5%)"/>
      <use href="#v5-leaf-2" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-2" fill="url(#v5-under)"/>
      <use href="#v5-leaf-2" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.043" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(162.1 211.3) rotate(-28.5)">
    <path d="M0 0 L5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5 0) scale(11.4)">
      <use href="#v5-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-5" fill="hsl(98.4 30.5% 20.5%)"/>
      <use href="#v5-leaf-5" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-5" fill="url(#v5-under)"/>
      <use href="#v5-leaf-5" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.048" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(170.4 215.5) rotate(98.4)">
    <path d="M0 0 L5.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.8 0) scale(15.8)">
      <use href="#v5-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-2" fill="hsl(111.2 26% 22.3%)"/>
      <use href="#v5-leaf-2" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-2" fill="url(#v5-under)"/>
      <use href="#v5-leaf-2" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(178.2 220.7) rotate(-36.7)">
    <path d="M0 0 L4.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.2 0) scale(10.6)">
      <use href="#v5-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-0" fill="hsl(98.6 34.6% 19.4%)"/>
      <use href="#v5-leaf-0" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-0" fill="url(#v5-under)"/>
      <use href="#v5-leaf-0" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.052000000000000005" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(147.8 193.4) rotate(31.2)">
    <path d="M0 0 L5.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.2 0) scale(15.4)">
      <use href="#v5-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-5" fill="hsl(27.2 31.1% 24.5%)"/>
      <use href="#v5-leaf-5" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-5" fill="url(#v5-under)"/>
      <use href="#v5-leaf-5" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.036000000000000004" stroke-linecap="round"/>
      <circle cx="0.35600000000000004" cy="-0.09699999999999999" r="0.077" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.647" cy="-0.08900000000000001" r="0.084" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.205" cy="-0.17300000000000001" r="0.078" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.607" cy="0.055" r="0.07400000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(159.7 193.3) rotate(-37.1)">
    <path d="M0 0 L5.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.2 0) scale(18.4)">
      <use href="#v5-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-1" fill="hsl(27.1 37.5% 26.5%)"/>
      <use href="#v5-leaf-1" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-1" fill="url(#v5-under)"/>
      <use href="#v5-leaf-1" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
      <circle cx="0.478" cy="0.20600000000000002" r="0.044000000000000004" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.5429999999999999" cy="0.07200000000000001" r="0.08199999999999999" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.57" cy="0.092" r="0.043" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.49200000000000005" cy="-0.099" r="0.067" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(171.7 193.7) rotate(40.2)">
    <path d="M0 0 L5.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.6 0) scale(20)">
      <use href="#v5-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-2" fill="hsl(26 41.6% 19.9%)"/>
      <use href="#v5-leaf-2" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-2" fill="url(#v5-under)"/>
      <use href="#v5-leaf-2" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027999999999999997" stroke-linecap="round"/>
      <circle cx="0.551" cy="0.011000000000000001" r="0.05" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.466" cy="-0.207" r="0.047" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.201" cy="0.151" r="0.047" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.39899999999999997" cy="0.1" r="0.084" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(183.5 194.9) rotate(-63.6)">
    <path d="M0 0 L4.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.3 0) scale(13.3)">
      <use href="#v5-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-3" fill="hsl(59.6 43.4% 36.3%)"/>
      <use href="#v5-leaf-3" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-3" fill="url(#v5-under)"/>
      <use href="#v5-leaf-3" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.040999999999999995" stroke-linecap="round"/>
      <circle cx="0.281" cy="0.078" r="0.043" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.495" cy="0.128" r="0.066" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(193.4 188.1) rotate(28.1)">
    <path d="M0 0 L5.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.1 0) scale(12.6)">
      <use href="#v5-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-3" fill="hsl(91 28.6% 26.7%)"/>
      <use href="#v5-leaf-3" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-3" fill="url(#v5-under)"/>
      <use href="#v5-leaf-3" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.044000000000000004" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(197.7 177) rotate(-139.6)">
    <path d="M0 0 L5.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.1 0) scale(10.2)">
      <use href="#v5-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-0" fill="hsl(28.4 36.2% 23.5%)"/>
      <use href="#v5-leaf-0" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-0" fill="url(#v5-under)"/>
      <use href="#v5-leaf-0" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.054000000000000006" stroke-linecap="round"/>
      <circle cx="0.24100000000000002" cy="0.187" r="0.075" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.255" cy="0.20199999999999999" r="0.079" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.532" cy="0.069" r="0.06" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.64" cy="0.023" r="0.069" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(102.9 160.1) rotate(-177.3)">
    <path d="M0 0 L5.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.2 0) scale(14.5)">
      <use href="#v5-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-3" fill="hsl(26.4 40.4% 20.4%)"/>
      <use href="#v5-leaf-3" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-3" fill="url(#v5-under)"/>
      <use href="#v5-leaf-3" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.038" stroke-linecap="round"/>
      <circle cx="0.519" cy="-0.071" r="0.079" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.273" cy="-0.133" r="0.087" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.441" cy="-0.105" r="0.08800000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.524" cy="-0.049" r="0.08800000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(94.3 152.3) rotate(-97.8)">
    <path d="M0 0 L5.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.5 0) scale(14.5)">
      <use href="#v5-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-5" fill="hsl(66.9 35.5% 35.2%)"/>
      <use href="#v5-leaf-5" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-5" fill="url(#v5-under)"/>
      <use href="#v5-leaf-5" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.038" stroke-linecap="round"/>
      <circle cx="0.534" cy="-0.001" r="0.085" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.26" cy="0.155" r="0.08199999999999999" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(84.3 146.3) rotate(-223.2)">
    <path d="M0 0 L4.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.9 0) scale(16.8)">
      <use href="#v5-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-3" fill="hsl(97.3 42.6% 24.3%)"/>
      <use href="#v5-leaf-3" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-3" fill="url(#v5-under)"/>
      <use href="#v5-leaf-3" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.033" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(73.3 142.5) rotate(-90.1)">
    <path d="M0 0 L6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(6 0) scale(11.7)">
      <use href="#v5-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-5" fill="hsl(110.1 41% 19.3%)"/>
      <use href="#v5-leaf-5" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-5" fill="url(#v5-under)"/>
      <use href="#v5-leaf-5" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.047" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(114 148.5) rotate(-182.6)">
    <path d="M0 0 L5.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.8 0) scale(15.8)">
      <use href="#v5-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-4" fill="hsl(56.6 47% 35.7%)"/>
      <use href="#v5-leaf-4" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-4" fill="url(#v5-under)"/>
      <use href="#v5-leaf-4" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
      <circle cx="0.457" cy="0.165" r="0.076" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.3" cy="-0.19399999999999998" r="0.062" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(108.3 140.8) rotate(-60.5)">
    <path d="M0 0 L3.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.7 0) scale(18)">
      <use href="#v5-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-2" fill="hsl(60.9 44.9% 28.5%)"/>
      <use href="#v5-leaf-2" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-2" fill="url(#v5-under)"/>
      <use href="#v5-leaf-2" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.031" stroke-linecap="round"/>
      <circle cx="0.649" cy="-0.06" r="0.061" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.306" cy="-0.10800000000000001" r="0.083" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(100.8 134.8) rotate(-182.3)">
    <path d="M0 0 L3.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.5 0) scale(11.4)">
      <use href="#v5-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-3" fill="hsl(108.8 31.1% 18.6%)"/>
      <use href="#v5-leaf-3" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-3" fill="url(#v5-under)"/>
      <use href="#v5-leaf-3" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.048" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(91.9 131.2) rotate(-100.8)">
    <path d="M0 0 L4.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.9 0) scale(13.3)">
      <use href="#v5-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-1" fill="hsl(60.6 46.5% 34.7%)"/>
      <use href="#v5-leaf-1" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-1" fill="url(#v5-under)"/>
      <use href="#v5-leaf-1" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.042" stroke-linecap="round"/>
      <circle cx="0.327" cy="0.136" r="0.081" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.316" cy="-0.19399999999999998" r="0.087" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(77.2 140.1) rotate(-153.1)">
    <path d="M0 0 L4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4 0) scale(19.3)">
      <use href="#v5-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-2" fill="hsl(103.7 26.5% 23.2%)"/>
      <use href="#v5-leaf-2" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-2" fill="url(#v5-under)"/>
      <use href="#v5-leaf-2" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.028999999999999998" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(71.4 146.5) rotate(-273.5)">
    <path d="M0 0 L3.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.7 0) scale(13.2)">
      <use href="#v5-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-4" fill="hsl(65.3 44.9% 31.4%)"/>
      <use href="#v5-leaf-4" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-4" fill="url(#v5-under)"/>
      <use href="#v5-leaf-4" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.042" stroke-linecap="round"/>
      <circle cx="0.431" cy="-0.152" r="0.063" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.447" cy="-0.095" r="0.055999999999999994" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(82.5 129.2) rotate(-211.4)">
    <path d="M0 0 L3.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.1 0) scale(12.1)">
      <use href="#v5-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-2" fill="hsl(93.3 35% 24.9%)"/>
      <use href="#v5-leaf-2" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-2" fill="url(#v5-under)"/>
      <use href="#v5-leaf-2" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.045" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(69 140) rotate(-152.9)">
    <path d="M0 0 L5.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.9 0) scale(17.7)">
      <use href="#v5-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-5" fill="hsl(86.5 26% 23.5%)"/>
      <use href="#v5-leaf-5" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-5" fill="url(#v5-under)"/>
      <use href="#v5-leaf-5" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.031" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(62.2 145.2) rotate(-285.3)">
    <path d="M0 0 L5.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.6 0) scale(13.3)">
      <use href="#v5-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-1" fill="hsl(60.4 37.1% 31.2%)"/>
      <use href="#v5-leaf-1" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-1" fill="url(#v5-under)"/>
      <use href="#v5-leaf-1" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.040999999999999995" stroke-linecap="round"/>
      <circle cx="0.245" cy="-0.145" r="0.085" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.213" cy="0.134" r="0.08800000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(73 127.7) rotate(-111.3)">
    <path d="M0 0 L5.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.9 0) scale(13)">
      <use href="#v5-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-3" fill="hsl(106.4 27.7% 15.8%)"/>
      <use href="#v5-leaf-3" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-3" fill="url(#v5-under)"/>
      <use href="#v5-leaf-3" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.042" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(63.6 126.3) rotate(-228.6)">
    <path d="M0 0 L5.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.3 0) scale(13.4)">
      <use href="#v5-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-0" fill="hsl(31.9 36.7% 21%)"/>
      <use href="#v5-leaf-0" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-0" fill="url(#v5-under)"/>
      <use href="#v5-leaf-0" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.040999999999999995" stroke-linecap="round"/>
      <circle cx="0.341" cy="-0.21600000000000003" r="0.061" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.45399999999999996" cy="-0.17" r="0.055" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.335" cy="-0.16" r="0.08199999999999999" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.255" cy="0.152" r="0.076" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(54.3 123.6) rotate(-106.9)">
    <path d="M0 0 L4.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.2 0) scale(9.6)">
      <use href="#v5-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-1" fill="hsl(55.8 44.6% 30.7%)"/>
      <use href="#v5-leaf-1" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-1" fill="url(#v5-under)"/>
      <use href="#v5-leaf-1" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.057" stroke-linecap="round"/>
      <circle cx="0.389" cy="-0.177" r="0.044000000000000004" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.23199999999999998" cy="0.113" r="0.052000000000000005" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(130 172.2) rotate(-27.8)">
    <path d="M0 0 L4.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.7 0) scale(18.5)">
      <use href="#v5-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-0" fill="hsl(92.6 33% 21.1%)"/>
      <use href="#v5-leaf-0" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-0" fill="url(#v5-under)"/>
      <use href="#v5-leaf-0" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(109.7 124.6) rotate(-53)">
    <path d="M0 0 L4.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.9 0) scale(13.8)">
      <use href="#v5-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-2" fill="hsl(102.5 26.9% 15.4%)"/>
      <use href="#v5-leaf-2" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-2" fill="url(#v5-under)"/>
      <use href="#v5-leaf-2" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.04" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(94.4 97.2) rotate(-170.4)">
    <path d="M0 0 L4.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.3 0) scale(11.5)">
      <use href="#v5-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-3" fill="hsl(100 32.2% 23%)"/>
      <use href="#v5-leaf-3" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-3" fill="url(#v5-under)"/>
      <use href="#v5-leaf-3" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.048" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(87.7 89.1) rotate(-58.5)">
    <path d="M0 0 L3.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.7 0) scale(17.2)">
      <use href="#v5-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-5" fill="hsl(86.1 32% 17.5%)"/>
      <use href="#v5-leaf-5" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-5" fill="url(#v5-under)"/>
      <use href="#v5-leaf-5" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.032" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(79.5 82.6) rotate(-202.7)">
    <path d="M0 0 L5.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.9 0) scale(12.7)">
      <use href="#v5-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-0" fill="hsl(104.2 28.5% 17.5%)"/>
      <use href="#v5-leaf-0" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-0" fill="url(#v5-under)"/>
      <use href="#v5-leaf-0" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.043" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(70.4 77.4) rotate(-86.7)">
    <path d="M0 0 L5.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.8 0) scale(13.8)">
      <use href="#v5-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-2" fill="hsl(26 35.4% 19.4%)"/>
      <use href="#v5-leaf-2" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-2" fill="url(#v5-under)"/>
      <use href="#v5-leaf-2" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.04" stroke-linecap="round"/>
      <circle cx="0.6709999999999999" cy="0.013000000000000001" r="0.067" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.493" cy="-0.034" r="0.044000000000000004" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.634" cy="-0.069" r="0.087" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.444" cy="-0.149" r="0.040999999999999995" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(132 160) rotate(-127.3)">
    <path d="M0 0 L5.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.3 0) scale(22.5)">
      <use href="#v5-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-1" fill="hsl(110.2 42% 19.5%)"/>
      <use href="#v5-leaf-1" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-1" fill="url(#v5-under)"/>
      <use href="#v5-leaf-1" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.024" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(160.2 132.5) rotate(-81.8)">
    <path d="M0 0 L5.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.6 0) scale(16.7)">
      <use href="#v5-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-2" fill="hsl(29 37.8% 29.8%)"/>
      <use href="#v5-leaf-2" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-2" fill="url(#v5-under)"/>
      <use href="#v5-leaf-2" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.033" stroke-linecap="round"/>
      <circle cx="0.27699999999999997" cy="-0.11800000000000001" r="0.055999999999999994" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.483" cy="0.18600000000000003" r="0.063" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.262" cy="-0.114" r="0.08800000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.289" cy="-0.098" r="0.087" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(170.3 130) rotate(24.1)">
    <path d="M0 0 L3.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.5 0) scale(13)">
      <use href="#v5-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-5" fill="hsl(110.1 27.5% 18.9%)"/>
      <use href="#v5-leaf-5" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-5" fill="url(#v5-under)"/>
      <use href="#v5-leaf-5" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.042" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(197 117.9) rotate(-91.3)">
    <path d="M0 0 L4.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.4 0) scale(16.9)">
      <use href="#v5-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-1" fill="hsl(64.4 46.9% 33.7%)"/>
      <use href="#v5-leaf-1" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-1" fill="url(#v5-under)"/>
      <use href="#v5-leaf-1" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.033" stroke-linecap="round"/>
      <circle cx="0.516" cy="0.055" r="0.08800000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.667" cy="-0.035" r="0.042" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(198.7 107.7) rotate(-12.5)">
    <path d="M0 0 L5.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.1 0) scale(14.4)">
      <use href="#v5-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-1" fill="hsl(100 37% 17.1%)"/>
      <use href="#v5-leaf-1" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-1" fill="url(#v5-under)"/>
      <use href="#v5-leaf-1" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.038" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(196.7 89.7) rotate(-43.6)">
    <path d="M0 0 L6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(6 0) scale(20.8)">
      <use href="#v5-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-1" fill="hsl(96.3 36.9% 16.4%)"/>
      <use href="#v5-leaf-1" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-1" fill="url(#v5-under)"/>
      <use href="#v5-leaf-1" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.026000000000000002" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(141.5 113.3) rotate(-46.8)">
    <path d="M0 0 L3.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.2 0) scale(14.5)">
      <use href="#v5-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-5" fill="hsl(97.7 37% 27.7%)"/>
      <use href="#v5-leaf-5" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-5" fill="url(#v5-under)"/>
      <use href="#v5-leaf-5" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.038" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(141.9 101.8) rotate(-123.5)">
    <path d="M0 0 L3.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.3 0) scale(11.6)">
      <use href="#v5-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-0" fill="hsl(37.1 37.1% 20.5%)"/>
      <use href="#v5-leaf-0" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-0" fill="url(#v5-under)"/>
      <use href="#v5-leaf-0" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.047" stroke-linecap="round"/>
      <circle cx="0.27399999999999997" cy="0.128" r="0.055" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.54" cy="-0.153" r="0.069" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.344" cy="-0.153" r="0.048" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.354" cy="-0.18899999999999997" r="0.075" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(143.4 90.4) rotate(-26.8)">
    <path d="M0 0 L4.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.7 0) scale(18.5)">
      <use href="#v5-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-5" fill="hsl(31.9 39.8% 28.8%)"/>
      <use href="#v5-leaf-5" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-5" fill="url(#v5-under)"/>
      <use href="#v5-leaf-5" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
      <circle cx="0.40299999999999997" cy="0.201" r="0.059000000000000004" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.451" cy="0.21899999999999997" r="0.071" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.32799999999999996" cy="-0.182" r="0.065" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.28" cy="0.218" r="0.069" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(145.6 79) rotate(-149.5)">
    <path d="M0 0 L3.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.4 0) scale(11.8)">
      <use href="#v5-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-2" fill="hsl(93.6 29.5% 20.9%)"/>
      <use href="#v5-leaf-2" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-2" fill="url(#v5-under)"/>
      <use href="#v5-leaf-2" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.047" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(165 71.7) rotate(49.4)">
    <path d="M0 0 L5.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.9 0) scale(15.2)">
      <use href="#v5-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-1" fill="hsl(32.2 28.6% 28.9%)"/>
      <use href="#v5-leaf-1" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-1" fill="url(#v5-under)"/>
      <use href="#v5-leaf-1" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.036000000000000004" stroke-linecap="round"/>
      <circle cx="0.267" cy="0.10300000000000001" r="0.07400000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.6559999999999999" cy="-0.054000000000000006" r="0.057" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.321" cy="0.095" r="0.064" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.316" cy="-0.124" r="0.078" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(174.6 67.9) rotate(-71.8)">
    <path d="M0 0 L5.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.8 0) scale(16.6)">
      <use href="#v5-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-4" fill="hsl(29.7 40.8% 26.9%)"/>
      <use href="#v5-leaf-4" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-4" fill="url(#v5-under)"/>
      <use href="#v5-leaf-4" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.033" stroke-linecap="round"/>
      <circle cx="0.447" cy="0.11599999999999999" r="0.069" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.40700000000000003" cy="0.16" r="0.076" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.591" cy="0.083" r="0.064" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.5589999999999999" cy="0.065" r="0.061" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(135.9 170.5) rotate(-75.1)">
    <path d="M0 0 L4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4 0) scale(22.3)">
      <use href="#v5-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-1" fill="hsl(66 36.2% 34.2%)"/>
      <use href="#v5-leaf-1" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-1" fill="url(#v5-under)"/>
      <use href="#v5-leaf-1" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.025" stroke-linecap="round"/>
      <circle cx="0.418" cy="0.138" r="0.052000000000000005" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.551" cy="-0.12300000000000001" r="0.05" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(99.6 143) rotate(-113.6)">
    <path d="M0 0 L4.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.1 0) scale(17.2)">
      <use href="#v5-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-0" fill="hsl(111.7 37.4% 28%)"/>
      <use href="#v5-leaf-0" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-0" fill="url(#v5-under)"/>
      <use href="#v5-leaf-0" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.032" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(82.3 127.6) rotate(-100.5)">
    <path d="M0 0 L3.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.6 0) scale(14.9)">
      <use href="#v5-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-4" fill="hsl(92.3 42.8% 26%)"/>
      <use href="#v5-leaf-4" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-4" fill="url(#v5-under)"/>
      <use href="#v5-leaf-4" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.037000000000000005" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(51.8 124.3) rotate(-130.6)">
    <path d="M0 0 L3.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.1 0) scale(12.3)">
      <use href="#v5-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-5" fill="hsl(92.8 34.4% 27.1%)"/>
      <use href="#v5-leaf-5" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-5" fill="url(#v5-under)"/>
      <use href="#v5-leaf-5" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.045" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(41.5 123.4) rotate(-234.1)">
    <path d="M0 0 L5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5 0) scale(13.5)">
      <use href="#v5-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-0" fill="hsl(106.3 42.8% 27.6%)"/>
      <use href="#v5-leaf-0" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-0" fill="url(#v5-under)"/>
      <use href="#v5-leaf-0" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.040999999999999995" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(61.2 118.8) rotate(-99.7)">
    <path d="M0 0 L5.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.8 0) scale(12)">
      <use href="#v5-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-3" fill="hsl(90.7 37.5% 29%)"/>
      <use href="#v5-leaf-3" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-3" fill="url(#v5-under)"/>
      <use href="#v5-leaf-3" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.046" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(38.2 116.9) rotate(-108.2)">
    <path d="M0 0 L4.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.5 0) scale(13.7)">
      <use href="#v5-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-3" fill="hsl(90.5 29.7% 28.8%)"/>
      <use href="#v5-leaf-3" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-3" fill="url(#v5-under)"/>
      <use href="#v5-leaf-3" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.04" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(146 146.5) rotate(-66.5)">
    <path d="M0 0 L3.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.4 0) scale(16.4)">
      <use href="#v5-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-1" fill="hsl(35.2 34.7% 20.6%)"/>
      <use href="#v5-leaf-1" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-1" fill="url(#v5-under)"/>
      <use href="#v5-leaf-1" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.034" stroke-linecap="round"/>
      <circle cx="0.415" cy="0.196" r="0.085" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.537" cy="-0.001" r="0.059000000000000004" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.525" cy="0.068" r="0.048" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.28600000000000003" cy="0.15" r="0.053" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(140.4 137.4) rotate(-178.5)">
    <path d="M0 0 L5.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.6 0) scale(15.9)">
      <use href="#v5-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-2" fill="hsl(89.9 28.8% 22.6%)"/>
      <use href="#v5-leaf-2" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-2" fill="url(#v5-under)"/>
      <use href="#v5-leaf-2" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(133.9 129.1) rotate(-82.6)">
    <path d="M0 0 L4.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.8 0) scale(15.8)">
      <use href="#v5-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-3" fill="hsl(65.5 36.2% 36.5%)"/>
      <use href="#v5-leaf-3" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-3" fill="url(#v5-under)"/>
      <use href="#v5-leaf-3" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
      <circle cx="0.45899999999999996" cy="0.223" r="0.076" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.621" cy="0.10300000000000001" r="0.064" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(127 121) rotate(-171.3)">
    <path d="M0 0 L5.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.9 0) scale(12.4)">
      <use href="#v5-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-2" fill="hsl(104.5 28.5% 19.3%)"/>
      <use href="#v5-leaf-2" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-2" fill="url(#v5-under)"/>
      <use href="#v5-leaf-2" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.044000000000000004" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(117.9 115.6) rotate(-104.2)">
    <path d="M0 0 L5.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.6 0) scale(12.9)">
      <use href="#v5-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-3" fill="hsl(25.7 30.9% 19.2%)"/>
      <use href="#v5-leaf-3" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-3" fill="url(#v5-under)"/>
      <use href="#v5-leaf-3" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.043" stroke-linecap="round"/>
      <circle cx="0.349" cy="-0.20800000000000002" r="0.049" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.276" cy="0.209" r="0.066" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.292" cy="0.16" r="0.068" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.259" cy="0.18100000000000002" r="0.040999999999999995" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(108.1 111.5) rotate(-211.5)">
    <path d="M0 0 L3.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.7 0) scale(17)">
      <use href="#v5-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-0" fill="hsl(106.2 26.6% 20%)"/>
      <use href="#v5-leaf-0" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-0" fill="url(#v5-under)"/>
      <use href="#v5-leaf-0" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.032" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(151.7 134.7) rotate(-55)">
    <path d="M0 0 L4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4 0) scale(22.3)">
      <use href="#v5-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-5" fill="hsl(107.5 28.4% 17.2%)"/>
      <use href="#v5-leaf-5" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-5" fill="url(#v5-under)"/>
      <use href="#v5-leaf-5" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.025" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(148.9 126) rotate(-156.3)">
    <path d="M0 0 L4.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.5 0) scale(14.3)">
      <use href="#v5-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-0" fill="hsl(98.8 38.2% 16.8%)"/>
      <use href="#v5-leaf-0" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-0" fill="url(#v5-under)"/>
      <use href="#v5-leaf-0" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.039" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(145.5 117.4) rotate(-58.1)">
    <path d="M0 0 L4.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.4 0) scale(14.3)">
      <use href="#v5-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-1" fill="hsl(67.7 45.2% 34.1%)"/>
      <use href="#v5-leaf-1" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-1" fill="url(#v5-under)"/>
      <use href="#v5-leaf-1" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.038" stroke-linecap="round"/>
      <circle cx="0.408" cy="0.1" r="0.087" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.669" cy="-0.05" r="0.086" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(141.1 109.4) rotate(-157.4)">
    <path d="M0 0 L4.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.7 0) scale(15.4)">
      <use href="#v5-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-0" fill="hsl(99.3 28.1% 28.6%)"/>
      <use href="#v5-leaf-0" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-0" fill="url(#v5-under)"/>
      <use href="#v5-leaf-0" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.036000000000000004" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(134.9 102.6) rotate(-60.5)">
    <path d="M0 0 L3.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.1 0) scale(17)">
      <use href="#v5-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-3" fill="hsl(84.5 36.2% 19.9%)"/>
      <use href="#v5-leaf-3" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-3" fill="url(#v5-under)"/>
      <use href="#v5-leaf-3" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.032" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(128.2 96.2) rotate(-178.1)">
    <path d="M0 0 L5.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.4 0) scale(16.4)">
      <use href="#v5-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-3" fill="hsl(56.7 39.8% 34%)"/>
      <use href="#v5-leaf-3" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-3" fill="url(#v5-under)"/>
      <use href="#v5-leaf-3" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.034" stroke-linecap="round"/>
      <circle cx="0.65" cy="0.032" r="0.048" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.512" cy="0.043" r="0.057" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(122.5 89.1) rotate(-90.5)">
    <path d="M0 0 L5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5 0) scale(12.1)">
      <use href="#v5-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-3" fill="hsl(101.1 31.5% 22.8%)"/>
      <use href="#v5-leaf-3" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-3" fill="url(#v5-under)"/>
      <use href="#v5-leaf-3" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.046" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(117 81.7) rotate(-188.2)">
    <path d="M0 0 L5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5 0) scale(9.8)">
      <use href="#v5-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-2" fill="hsl(88.9 41% 28.9%)"/>
      <use href="#v5-leaf-2" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-2" fill="url(#v5-under)"/>
      <use href="#v5-leaf-2" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.055999999999999994" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(112.4 73.7) rotate(-69.1)">
    <path d="M0 0 L4.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.6 0) scale(15)">
      <use href="#v5-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-4" fill="hsl(107.3 43.2% 21.1%)"/>
      <use href="#v5-leaf-4" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-4" fill="url(#v5-under)"/>
      <use href="#v5-leaf-4" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.037000000000000005" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(172.9 123.2) rotate(-114.4)">
    <path d="M0 0 L5.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.2 0) scale(23.8)">
      <use href="#v5-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-3" fill="hsl(111 43% 20.4%)"/>
      <use href="#v5-leaf-3" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-3" fill="url(#v5-under)"/>
      <use href="#v5-leaf-3" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.023" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(182.4 91.9) rotate(-29.5)">
    <path d="M0 0 L5.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.6 0) scale(17.2)">
      <use href="#v5-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-4" fill="hsl(109.5 26.2% 18.3%)"/>
      <use href="#v5-leaf-4" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-4" fill="url(#v5-under)"/>
      <use href="#v5-leaf-4" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.032" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(176.9 83.2) rotate(-171.9)">
    <path d="M0 0 L3.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.8 0) scale(12.6)">
      <use href="#v5-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-0" fill="hsl(85.2 33.6% 24.7%)"/>
      <use href="#v5-leaf-0" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-0" fill="url(#v5-under)"/>
      <use href="#v5-leaf-0" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.044000000000000004" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(154.3 62.3) rotate(-87.4)">
    <path d="M0 0 L6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(6 0) scale(13.1)">
      <use href="#v5-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v5-leaf-4" fill="hsl(105.1 32.2% 19%)"/>
      <use href="#v5-leaf-4" fill="url(#v5-shade)"/>
      <use href="#v5-leaf-4" fill="url(#v5-under)"/>
      <use href="#v5-leaf-4" fill="url(#v5-sheen)"/>
      <use href="#v5-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.042" stroke-linecap="round"/>
    </g>
  </g>
</svg>
`,E3=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 260" width="200" height="260">
  <defs>
    <path id="v6-leaf-0" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.24 -0.14 L0.27 -0.2 L0.34 -0.16 L0.38 -0.17 L0.47 -0.34 L0.57 -0.34 L0.5 -0.12 L0.53 -0.08 L0.82 -0.12 L1.06 0 L0.82 0.12 L0.53 0.09 L0.5 0.12 L0.58 0.34 L0.47 0.34 L0.38 0.17 L0.34 0.16 L0.26 0.22 L0.22 0.16 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v6-veins-0" d="M0.23 0 L0.92 0 M0.23 0 L0.52 0.31 M0.23 0 L0.52 -0.31 M0.23 0 L0.25 0.18 M0.23 0 L0.26 -0.16"/>
    <path id="v6-leaf-1" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.21 -0.17 L0.24 -0.23 L0.34 -0.16 L0.38 -0.17 L0.47 -0.32 L0.57 -0.33 L0.5 -0.12 L0.53 -0.08 L0.78 -0.11 L0.99 0 L0.78 0.11 L0.53 0.09 L0.5 0.12 L0.57 0.33 L0.47 0.33 L0.38 0.17 L0.34 0.16 L0.24 0.24 L0.21 0.17 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v6-veins-1" d="M0.23 0 L0.87 0 M0.23 0 L0.52 0.3 M0.23 0 L0.51 -0.3 M0.23 0 L0.24 0.2 M0.23 0 L0.24 -0.19"/>
    <path id="v6-leaf-2" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.22 -0.16 L0.26 -0.21 L0.34 -0.16 L0.38 -0.17 L0.48 -0.38 L0.6 -0.38 L0.5 -0.12 L0.53 -0.08 L0.77 -0.11 L0.98 0 L0.77 0.11 L0.53 0.09 L0.5 0.12 L0.58 0.35 L0.47 0.35 L0.38 0.17 L0.34 0.16 L0.22 0.27 L0.18 0.2 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v6-veins-2" d="M0.23 0 L0.86 0 M0.23 0 L0.52 0.32 M0.23 0 L0.54 -0.35 M0.23 0 L0.22 0.22 M0.23 0 L0.25 -0.18"/>
    <path id="v6-leaf-3" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.19 -0.19 L0.23 -0.27 L0.34 -0.16 L0.38 -0.17 L0.47 -0.35 L0.59 -0.36 L0.5 -0.12 L0.53 -0.08 L0.75 -0.1 L0.94 0 L0.75 0.1 L0.53 0.09 L0.5 0.12 L0.55 0.29 L0.46 0.29 L0.38 0.17 L0.34 0.16 L0.22 0.28 L0.18 0.2 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v6-veins-3" d="M0.23 0 L0.83 0 M0.23 0 L0.5 0.27 M0.23 0 L0.53 -0.33 M0.23 0 L0.21 0.23 M0.23 0 L0.22 -0.22"/>
    <path id="v6-leaf-4" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.21 -0.17 L0.24 -0.24 L0.34 -0.16 L0.38 -0.17 L0.47 -0.33 L0.57 -0.33 L0.5 -0.12 L0.53 -0.08 L0.82 -0.12 L1.05 0 L0.82 0.12 L0.53 0.09 L0.5 0.12 L0.59 0.37 L0.48 0.36 L0.38 0.17 L0.34 0.16 L0.24 0.24 L0.2 0.18 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v6-veins-4" d="M0.23 0 L0.92 0 M0.23 0 L0.53 0.33 M0.23 0 L0.52 -0.3 M0.23 0 L0.23 0.2 M0.23 0 L0.24 -0.19"/>
    <path id="v6-leaf-5" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.2 -0.18 L0.24 -0.25 L0.34 -0.16 L0.38 -0.17 L0.47 -0.35 L0.58 -0.35 L0.5 -0.12 L0.53 -0.08 L0.8 -0.11 L1.02 0 L0.8 0.11 L0.53 0.09 L0.5 0.12 L0.59 0.36 L0.48 0.36 L0.38 0.17 L0.34 0.16 L0.26 0.21 L0.23 0.15 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v6-veins-5" d="M0.23 0 L0.89 0 M0.23 0 L0.53 0.33 M0.23 0 L0.52 -0.32 M0.23 0 L0.25 0.17 M0.23 0 L0.23 -0.2"/>
    <linearGradient id="v6-shade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#000" stop-opacity="0.42"/>
      <stop offset="0.4" stop-color="#000" stop-opacity="0.06"/>
      <stop offset="0.75" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.18"/>
    </linearGradient>
    <linearGradient id="v6-under" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0.45" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.22"/>
    </linearGradient>
    <radialGradient id="v6-sheen" cx="0.45" cy="0.3" r="0.55">
      <stop offset="0" stop-color="#f4f6dc" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#f4f6dc" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- Soft shadows under the stems -->
  <g fill="none" stroke="#000" stroke-opacity="0.22" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 3)">
    <path d="M98.1 262 Q97.3 249.8 96.5 243.7 Q95.6 237.6 94.6 231.5 Q93.5 225.5 93.8 219.4 Q94.2 213.2 95.7 207.3 Q97.3 201.4 99.5 195.7 Q101.8 190 104.5 184.4 Q107.1 178.9 109.3 173.2 Q111.6 167.5 113.2 161.5 Q114.9 155.6 116.1 149.6 Q117.2 143.6 118.4 137.5 Q119.5 131.5 120.8 125.5 Q122.1 119.5 124.5 113.9 L126.8 108.2" stroke-width="8.4"/>
    <path d="M107.1 262 Q104 249.6 103.3 243.3 Q102.5 237 103 230.7 Q103.5 224.3 104.3 218 Q105.1 211.7 105.1 205.3 Q105 199 103.6 192.8 Q102.1 186.6 99.6 180.7 Q97.1 174.9 94.2 169.2 Q91.4 163.5 88.8 157.7 Q86.1 151.9 84.1 145.9 Q82.1 139.8 81.1 133.6 Q80.1 127.3 79.9 120.9 L79.6 114.5" stroke-width="8.3"/>
    <path d="M101.8 190 Q112.7 186.3 118.4 185.3 Q124.1 184.4 129.8 183.6 Q135.5 182.8 141.2 181.9 Q146.9 181 152.5 179.7 Q158.1 178.4 163.6 176.6 Q169.1 174.9 174.4 172.6 Q179.6 170.3 185.2 168.9 Q190.8 167.6 194.7 163.3 Q198.6 159.1 200.2 153.5 Q201.7 148 201.1 142.3 L200.4 136.6" stroke-width="2.6"/>
    <path d="M114.9 155.6 Q109.9 146.1 106.4 142 Q102.9 137.9 99.8 133.5 Q96.7 129.1 94.8 124.1 Q92.8 119.1 92.2 113.7 Q91.7 108.4 91.4 103 L91.1 97.6" stroke-width="2.3"/>
    <path d="M76.1 65.4 Q75.6 56.5 74.5 52.2 Q73.4 47.8 71.8 43.6 L70.2 39.5" stroke-width="1.5"/>
    <path d="M119.5 131.5 Q113.2 123.8 110.6 119.6 Q107.9 115.4 105.7 110.9 Q103.6 106.4 101.7 101.8 Q99.9 97.2 97.4 92.9 Q94.9 88.6 92.2 84.4 Q89.5 80.2 86.1 76.6 Q82.7 73 79.4 69.2 Q76.1 65.4 73 61.6 Q69.8 57.7 67.4 53.4 L65 49" stroke-width="1.9"/>
    <path d="M162 112.3 Q169.4 106.9 173.2 104.4 Q177 101.8 180.4 98.8 L183.8 95.7" stroke-width="1.5"/>
    <path d="M122.1 119.5 Q131.8 116.4 136.8 115.2 Q141.7 114 146.7 113.2 Q151.8 112.4 156.9 112.4 Q162 112.3 166.9 113.3 Q171.9 114.3 176.4 116.7 L180.9 119.1" stroke-width="2"/>
    <path d="M94.9 74.1 Q95.2 63.6 94.2 58.4 Q93.3 53.3 91.4 48.3 Q89.6 43.4 88.2 38.4 L86.7 33.3" stroke-width="1.8"/>
    <path d="M63.8 39.5 Q53.8 36.3 48.9 34.2 Q44.1 32.2 39 30.8 L33.9 29.4" stroke-width="1.8"/>
    <path d="M126.8 108.2 Q118.4 100 114 96.1 Q109.7 92.3 105.9 87.8 Q102.1 83.4 98.5 78.7 Q94.9 74.1 91.5 69.4 Q88.1 64.6 84.5 60 Q80.9 55.4 76.6 51.5 Q72.3 47.5 68 43.5 Q63.8 39.5 59.7 35.3 Q55.7 31.1 51.8 26.7 Q47.9 22.3 45.1 17.2 L42.2 12.1" stroke-width="2.3"/>
    <path d="M126.8 108.2 Q130.4 98.5 132.5 93.8 Q134.6 89.1 137.1 84.6 Q139.6 80.1 141.9 75.5 Q144.1 70.9 146.5 66.3 L148.8 61.7" stroke-width="2.1"/>
    <path d="M83.7 172.4 Q90.3 164.8 94.3 161.6 Q98.3 158.4 102.2 155.2 L106.1 151.9" stroke-width="1.7"/>
    <path d="M105.1 211.7 Q98.3 202.7 95.1 198 Q91.9 193.4 89.4 188.3 Q86.9 183.3 85.3 177.9 Q83.7 172.4 83 166.9 Q82.3 161.3 81.7 155.7 Q81.2 150 79.9 144.5 Q78.6 139.1 77.2 133.6 L75.8 128.1" stroke-width="2.2"/>
    <path d="M102.1 186.6 Q108.6 179.5 112.2 176.4 Q115.8 173.3 120.1 171.3 Q124.4 169.3 128.8 167.3 Q133.1 165.3 137.5 163.6 Q142 161.9 146.3 159.9 Q150.7 157.9 154.8 155.6 L159 153.3" stroke-width="2.5"/>
    <path d="M80.1 127.3 Q86.9 117.5 89 112 Q91.2 106.5 92.2 100.7 Q93.1 94.9 93.9 89 Q94.7 83.2 95.9 77.4 Q97.2 71.6 98.7 65.9 Q100.3 60.2 102 54.5 Q103.8 48.9 105.3 43.2 Q106.9 37.5 106.8 31.6 Q106.8 25.7 105.7 19.8 L104.7 14" stroke-width="2.5"/>
    <path d="M79.6 114.5 Q81.2 104.4 82.2 99.4 Q83.1 94.4 84.9 89.6 Q86.6 84.8 88.2 79.9 Q89.7 75.1 90.4 70 Q91.2 65 91.7 59.9 Q92.3 54.8 92.1 49.7 Q92 44.6 92.6 39.5 L93.3 34.5" stroke-width="2.7"/>
  </g>
  <!-- Trailing shoots: green-brown, with a thin highlight -->
  <g fill="none" stroke="hsl(68 22% 21%)" stroke-linecap="round" stroke-linejoin="round">
    <path d="M101.8 190 Q112.7 186.3 118.4 185.3 Q124.1 184.4 129.8 183.6 Q135.5 182.8 141.2 181.9 Q146.9 181 152.5 179.7 Q158.1 178.4 163.6 176.6 Q169.1 174.9 174.4 172.6 Q179.6 170.3 185.2 168.9 Q190.8 167.6 194.7 163.3 Q198.6 159.1 200.2 153.5 Q201.7 148 201.1 142.3 L200.4 136.6" stroke-width="1.9"/>
    <path d="M114.9 155.6 Q109.9 146.1 106.4 142 Q102.9 137.9 99.8 133.5 Q96.7 129.1 94.8 124.1 Q92.8 119.1 92.2 113.7 Q91.7 108.4 91.4 103 L91.1 97.6" stroke-width="1.6"/>
    <path d="M76.1 65.4 Q75.6 56.5 74.5 52.2 Q73.4 47.8 71.8 43.6 L70.2 39.5" stroke-width="0.8"/>
    <path d="M119.5 131.5 Q113.2 123.8 110.6 119.6 Q107.9 115.4 105.7 110.9 Q103.6 106.4 101.7 101.8 Q99.9 97.2 97.4 92.9 Q94.9 88.6 92.2 84.4 Q89.5 80.2 86.1 76.6 Q82.7 73 79.4 69.2 Q76.1 65.4 73 61.6 Q69.8 57.7 67.4 53.4 L65 49" stroke-width="1.2"/>
    <path d="M162 112.3 Q169.4 106.9 173.2 104.4 Q177 101.8 180.4 98.8 L183.8 95.7" stroke-width="0.9"/>
    <path d="M122.1 119.5 Q131.8 116.4 136.8 115.2 Q141.7 114 146.7 113.2 Q151.8 112.4 156.9 112.4 Q162 112.3 166.9 113.3 Q171.9 114.3 176.4 116.7 L180.9 119.1" stroke-width="1.3"/>
    <path d="M94.9 74.1 Q95.2 63.6 94.2 58.4 Q93.3 53.3 91.4 48.3 Q89.6 43.4 88.2 38.4 L86.7 33.3" stroke-width="1.1"/>
    <path d="M63.8 39.5 Q53.8 36.3 48.9 34.2 Q44.1 32.2 39 30.8 L33.9 29.4" stroke-width="1.1"/>
    <path d="M126.8 108.2 Q118.4 100 114 96.1 Q109.7 92.3 105.9 87.8 Q102.1 83.4 98.5 78.7 Q94.9 74.1 91.5 69.4 Q88.1 64.6 84.5 60 Q80.9 55.4 76.6 51.5 Q72.3 47.5 68 43.5 Q63.8 39.5 59.7 35.3 Q55.7 31.1 51.8 26.7 Q47.9 22.3 45.1 17.2 L42.2 12.1" stroke-width="1.6"/>
    <path d="M126.8 108.2 Q130.4 98.5 132.5 93.8 Q134.6 89.1 137.1 84.6 Q139.6 80.1 141.9 75.5 Q144.1 70.9 146.5 66.3 L148.8 61.7" stroke-width="1.4"/>
    <path d="M83.7 172.4 Q90.3 164.8 94.3 161.6 Q98.3 158.4 102.2 155.2 L106.1 151.9" stroke-width="1"/>
    <path d="M105.1 211.7 Q98.3 202.7 95.1 198 Q91.9 193.4 89.4 188.3 Q86.9 183.3 85.3 177.9 Q83.7 172.4 83 166.9 Q82.3 161.3 81.7 155.7 Q81.2 150 79.9 144.5 Q78.6 139.1 77.2 133.6 L75.8 128.1" stroke-width="1.5"/>
    <path d="M102.1 186.6 Q108.6 179.5 112.2 176.4 Q115.8 173.3 120.1 171.3 Q124.4 169.3 128.8 167.3 Q133.1 165.3 137.5 163.6 Q142 161.9 146.3 159.9 Q150.7 157.9 154.8 155.6 L159 153.3" stroke-width="1.8"/>
    <path d="M80.1 127.3 Q86.9 117.5 89 112 Q91.2 106.5 92.2 100.7 Q93.1 94.9 93.9 89 Q94.7 83.2 95.9 77.4 Q97.2 71.6 98.7 65.9 Q100.3 60.2 102 54.5 Q103.8 48.9 105.3 43.2 Q106.9 37.5 106.8 31.6 Q106.8 25.7 105.7 19.8 L104.7 14" stroke-width="1.8"/>
    <path d="M79.6 114.5 Q81.2 104.4 82.2 99.4 Q83.1 94.4 84.9 89.6 Q86.6 84.8 88.2 79.9 Q89.7 75.1 90.4 70 Q91.2 65 91.7 59.9 Q92.3 54.8 92.1 49.7 Q92 44.6 92.6 39.5 L93.3 34.5" stroke-width="1.9"/>
  </g>
  <g fill="none" stroke="hsl(70 25% 40%)" stroke-opacity="0.45" stroke-linecap="round" transform="translate(-0.4 -0.3)">
    <path d="M101.8 190 Q112.7 186.3 118.4 185.3 Q124.1 184.4 129.8 183.6 Q135.5 182.8 141.2 181.9 Q146.9 181 152.5 179.7 Q158.1 178.4 163.6 176.6 Q169.1 174.9 174.4 172.6 Q179.6 170.3 185.2 168.9 Q190.8 167.6 194.7 163.3 Q198.6 159.1 200.2 153.5 Q201.7 148 201.1 142.3 L200.4 136.6" stroke-width="0.5"/>
    <path d="M114.9 155.6 Q109.9 146.1 106.4 142 Q102.9 137.9 99.8 133.5 Q96.7 129.1 94.8 124.1 Q92.8 119.1 92.2 113.7 Q91.7 108.4 91.4 103 L91.1 97.6" stroke-width="0.5"/>
    <path d="M76.1 65.4 Q75.6 56.5 74.5 52.2 Q73.4 47.8 71.8 43.6 L70.2 39.5" stroke-width="0.2"/>
    <path d="M119.5 131.5 Q113.2 123.8 110.6 119.6 Q107.9 115.4 105.7 110.9 Q103.6 106.4 101.7 101.8 Q99.9 97.2 97.4 92.9 Q94.9 88.6 92.2 84.4 Q89.5 80.2 86.1 76.6 Q82.7 73 79.4 69.2 Q76.1 65.4 73 61.6 Q69.8 57.7 67.4 53.4 L65 49" stroke-width="0.4"/>
    <path d="M162 112.3 Q169.4 106.9 173.2 104.4 Q177 101.8 180.4 98.8 L183.8 95.7" stroke-width="0.3"/>
    <path d="M122.1 119.5 Q131.8 116.4 136.8 115.2 Q141.7 114 146.7 113.2 Q151.8 112.4 156.9 112.4 Q162 112.3 166.9 113.3 Q171.9 114.3 176.4 116.7 L180.9 119.1" stroke-width="0.4"/>
    <path d="M94.9 74.1 Q95.2 63.6 94.2 58.4 Q93.3 53.3 91.4 48.3 Q89.6 43.4 88.2 38.4 L86.7 33.3" stroke-width="0.3"/>
    <path d="M63.8 39.5 Q53.8 36.3 48.9 34.2 Q44.1 32.2 39 30.8 L33.9 29.4" stroke-width="0.3"/>
    <path d="M126.8 108.2 Q118.4 100 114 96.1 Q109.7 92.3 105.9 87.8 Q102.1 83.4 98.5 78.7 Q94.9 74.1 91.5 69.4 Q88.1 64.6 84.5 60 Q80.9 55.4 76.6 51.5 Q72.3 47.5 68 43.5 Q63.8 39.5 59.7 35.3 Q55.7 31.1 51.8 26.7 Q47.9 22.3 45.1 17.2 L42.2 12.1" stroke-width="0.5"/>
    <path d="M126.8 108.2 Q130.4 98.5 132.5 93.8 Q134.6 89.1 137.1 84.6 Q139.6 80.1 141.9 75.5 Q144.1 70.9 146.5 66.3 L148.8 61.7" stroke-width="0.4"/>
    <path d="M83.7 172.4 Q90.3 164.8 94.3 161.6 Q98.3 158.4 102.2 155.2 L106.1 151.9" stroke-width="0.3"/>
    <path d="M105.1 211.7 Q98.3 202.7 95.1 198 Q91.9 193.4 89.4 188.3 Q86.9 183.3 85.3 177.9 Q83.7 172.4 83 166.9 Q82.3 161.3 81.7 155.7 Q81.2 150 79.9 144.5 Q78.6 139.1 77.2 133.6 L75.8 128.1" stroke-width="0.4"/>
    <path d="M102.1 186.6 Q108.6 179.5 112.2 176.4 Q115.8 173.3 120.1 171.3 Q124.4 169.3 128.8 167.3 Q133.1 165.3 137.5 163.6 Q142 161.9 146.3 159.9 Q150.7 157.9 154.8 155.6 L159 153.3" stroke-width="0.5"/>
    <path d="M80.1 127.3 Q86.9 117.5 89 112 Q91.2 106.5 92.2 100.7 Q93.1 94.9 93.9 89 Q94.7 83.2 95.9 77.4 Q97.2 71.6 98.7 65.9 Q100.3 60.2 102 54.5 Q103.8 48.9 105.3 43.2 Q106.9 37.5 106.8 31.6 Q106.8 25.7 105.7 19.8 L104.7 14" stroke-width="0.5"/>
    <path d="M79.6 114.5 Q81.2 104.4 82.2 99.4 Q83.1 94.4 84.9 89.6 Q86.6 84.8 88.2 79.9 Q89.7 75.1 90.4 70 Q91.2 65 91.7 59.9 Q92.3 54.8 92.1 49.7 Q92 44.6 92.6 39.5 L93.3 34.5" stroke-width="0.6"/>
  </g>
  <!-- Woody trunks: tapering, shaded round, with streaky bark -->
  <g fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M98.1 262 Q97.3 249.8 96.5 243.7 Q95.6 237.6 94.6 231.5 Q93.5 225.5 93.8 219.4 Q94.2 213.2 95.7 207.3 Q97.3 201.4 99.5 195.7 Q101.8 190 104.5 184.4 Q107.1 178.9 109.3 173.2 Q111.6 167.5 113.2 161.5 Q114.9 155.6 116.1 149.6 Q117.2 143.6 118.4 137.5 Q119.5 131.5 120.8 125.5 Q122.1 119.5 124.5 113.9 L126.8 108.2" stroke="hsl(30 14% 19%)" stroke-width="3.4"/>
    <path d="M98.1 262 Q97.3 249.8 96.5 243.7 Q95.6 237.6 94.6 231.5 Q93.5 225.5 93.8 219.4 Q94.2 213.2 95.7 207.3 Q97.3 201.4 99.5 195.7 Q101.8 190 104.5 184.4 Q107.1 178.9 109.3 173.2 Q111.6 167.5 113.2 161.5 L114.9 155.6" stroke="hsl(30 14% 19%)" stroke-width="5.7"/>
    <path d="M98.1 262 Q97.3 249.8 96.5 243.7 Q95.6 237.6 94.6 231.5 Q93.5 225.5 93.8 219.4 Q94.2 213.2 95.7 207.3 L97.3 201.4" stroke="hsl(30 14% 19%)" stroke-width="7.6"/>
    <path d="M98.1 262 Q97.3 249.8 96.5 243.7 Q95.6 237.6 94.6 231.5 Q93.5 225.5 93.8 219.4 Q94.2 213.2 95.7 207.3 Q97.3 201.4 99.5 195.7 Q101.8 190 104.5 184.4 Q107.1 178.9 109.3 173.2 Q111.6 167.5 113.2 161.5 Q114.9 155.6 116.1 149.6 Q117.2 143.6 118.4 137.5 Q119.5 131.5 120.8 125.5 Q122.1 119.5 124.5 113.9 L126.8 108.2" stroke="#000" stroke-opacity="0.28" stroke-width="1.2" transform="translate(0.8 0.4)"/>
    <path d="M98.1 262 Q97.3 249.8 96.5 243.7 Q95.6 237.6 94.6 231.5 Q93.5 225.5 93.8 219.4 Q94.2 213.2 95.7 207.3 Q97.3 201.4 99.5 195.7 Q101.8 190 104.5 184.4 Q107.1 178.9 109.3 173.2 Q111.6 167.5 113.2 161.5 L114.9 155.6" stroke="#000" stroke-opacity="0.28" stroke-width="2" transform="translate(1.3 0.7)"/>
    <path d="M98.1 262 Q97.3 249.8 96.5 243.7 Q95.6 237.6 94.6 231.5 Q93.5 225.5 93.8 219.4 Q94.2 213.2 95.7 207.3 L97.3 201.4" stroke="#000" stroke-opacity="0.28" stroke-width="2.7" transform="translate(1.7 0.9)"/>
    <path d="M98.1 262 Q97.3 249.8 96.5 243.7 Q95.6 237.6 94.6 231.5 Q93.5 225.5 93.8 219.4 Q94.2 213.2 95.7 207.3 Q97.3 201.4 99.5 195.7 Q101.8 190 104.5 184.4 Q107.1 178.9 109.3 173.2 Q111.6 167.5 113.2 161.5 Q114.9 155.6 116.1 149.6 Q117.2 143.6 118.4 137.5 Q119.5 131.5 120.8 125.5 Q122.1 119.5 124.5 113.9 L126.8 108.2" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="0.6" transform="translate(-0.8 -0.3)"/>
    <path d="M98.1 262 Q97.3 249.8 96.5 243.7 Q95.6 237.6 94.6 231.5 Q93.5 225.5 93.8 219.4 Q94.2 213.2 95.7 207.3 Q97.3 201.4 99.5 195.7 Q101.8 190 104.5 184.4 Q107.1 178.9 109.3 173.2 Q111.6 167.5 113.2 161.5 L114.9 155.6" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="1" transform="translate(-1.3 -0.6)"/>
    <path d="M98.1 262 Q97.3 249.8 96.5 243.7 Q95.6 237.6 94.6 231.5 Q93.5 225.5 93.8 219.4 Q94.2 213.2 95.7 207.3 L97.3 201.4" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="1.4" transform="translate(-1.7 -0.8)"/>
    <path d="M98.1 262 Q97.3 249.8 96.5 243.7 Q95.6 237.6 94.6 231.5 Q93.5 225.5 93.8 219.4 Q94.2 213.2 95.7 207.3 Q97.3 201.4 99.5 195.7 Q101.8 190 104.5 184.4 Q107.1 178.9 109.3 173.2 Q111.6 167.5 113.2 161.5 L114.9 155.6" stroke="hsl(30 12% 9%)" stroke-opacity="0.55" stroke-width="1.5" stroke-dasharray="6 3.4 3.2 3.4"/>
    <path d="M98.1 262 Q97.3 249.8 96.5 243.7 Q95.6 237.6 94.6 231.5 Q93.5 225.5 93.8 219.4 Q94.2 213.2 95.7 207.3 Q97.3 201.4 99.5 195.7 Q101.8 190 104.5 184.4 Q107.1 178.9 109.3 173.2 Q111.6 167.5 113.2 161.5 L114.9 155.6" stroke="hsl(36 14% 38%)" stroke-opacity="0.35" stroke-width="0.9" stroke-dasharray="4.5 5.3" transform="translate(-0.9 0)"/>
  </g>
  <g fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M107.1 262 Q104 249.6 103.3 243.3 Q102.5 237 103 230.7 Q103.5 224.3 104.3 218 Q105.1 211.7 105.1 205.3 Q105 199 103.6 192.8 Q102.1 186.6 99.6 180.7 Q97.1 174.9 94.2 169.2 Q91.4 163.5 88.8 157.7 Q86.1 151.9 84.1 145.9 Q82.1 139.8 81.1 133.6 Q80.1 127.3 79.9 120.9 L79.6 114.5" stroke="hsl(30 14% 19%)" stroke-width="3.4"/>
    <path d="M107.1 262 Q104 249.6 103.3 243.3 Q102.5 237 103 230.7 Q103.5 224.3 104.3 218 Q105.1 211.7 105.1 205.3 Q105 199 103.6 192.8 Q102.1 186.6 99.6 180.7 Q97.1 174.9 94.2 169.2 Q91.4 163.5 88.8 157.7 L86.1 151.9" stroke="hsl(30 14% 19%)" stroke-width="5.6"/>
    <path d="M107.1 262 Q104 249.6 103.3 243.3 Q102.5 237 103 230.7 Q103.5 224.3 104.3 218 Q105.1 211.7 105.1 205.3 L105 199" stroke="hsl(30 14% 19%)" stroke-width="7.5"/>
    <path d="M107.1 262 Q104 249.6 103.3 243.3 Q102.5 237 103 230.7 Q103.5 224.3 104.3 218 Q105.1 211.7 105.1 205.3 Q105 199 103.6 192.8 Q102.1 186.6 99.6 180.7 Q97.1 174.9 94.2 169.2 Q91.4 163.5 88.8 157.7 Q86.1 151.9 84.1 145.9 Q82.1 139.8 81.1 133.6 Q80.1 127.3 79.9 120.9 L79.6 114.5" stroke="#000" stroke-opacity="0.28" stroke-width="1.2" transform="translate(0.7 0.4)"/>
    <path d="M107.1 262 Q104 249.6 103.3 243.3 Q102.5 237 103 230.7 Q103.5 224.3 104.3 218 Q105.1 211.7 105.1 205.3 Q105 199 103.6 192.8 Q102.1 186.6 99.6 180.7 Q97.1 174.9 94.2 169.2 Q91.4 163.5 88.8 157.7 L86.1 151.9" stroke="#000" stroke-opacity="0.28" stroke-width="2" transform="translate(1.2 0.7)"/>
    <path d="M107.1 262 Q104 249.6 103.3 243.3 Q102.5 237 103 230.7 Q103.5 224.3 104.3 218 Q105.1 211.7 105.1 205.3 L105 199" stroke="#000" stroke-opacity="0.28" stroke-width="2.6" transform="translate(1.7 0.9)"/>
    <path d="M107.1 262 Q104 249.6 103.3 243.3 Q102.5 237 103 230.7 Q103.5 224.3 104.3 218 Q105.1 211.7 105.1 205.3 Q105 199 103.6 192.8 Q102.1 186.6 99.6 180.7 Q97.1 174.9 94.2 169.2 Q91.4 163.5 88.8 157.7 Q86.1 151.9 84.1 145.9 Q82.1 139.8 81.1 133.6 Q80.1 127.3 79.9 120.9 L79.6 114.5" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="0.6" transform="translate(-0.7 -0.3)"/>
    <path d="M107.1 262 Q104 249.6 103.3 243.3 Q102.5 237 103 230.7 Q103.5 224.3 104.3 218 Q105.1 211.7 105.1 205.3 Q105 199 103.6 192.8 Q102.1 186.6 99.6 180.7 Q97.1 174.9 94.2 169.2 Q91.4 163.5 88.8 157.7 L86.1 151.9" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="1" transform="translate(-1.2 -0.6)"/>
    <path d="M107.1 262 Q104 249.6 103.3 243.3 Q102.5 237 103 230.7 Q103.5 224.3 104.3 218 Q105.1 211.7 105.1 205.3 L105 199" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="1.4" transform="translate(-1.7 -0.8)"/>
    <path d="M107.1 262 Q104 249.6 103.3 243.3 Q102.5 237 103 230.7 Q103.5 224.3 104.3 218 Q105.1 211.7 105.1 205.3 Q105 199 103.6 192.8 Q102.1 186.6 99.6 180.7 Q97.1 174.9 94.2 169.2 Q91.4 163.5 88.8 157.7 L86.1 151.9" stroke="hsl(30 12% 9%)" stroke-opacity="0.55" stroke-width="1.5" stroke-dasharray="5 3.3 4.6 5.1"/>
    <path d="M107.1 262 Q104 249.6 103.3 243.3 Q102.5 237 103 230.7 Q103.5 224.3 104.3 218 Q105.1 211.7 105.1 205.3 Q105 199 103.6 192.8 Q102.1 186.6 99.6 180.7 Q97.1 174.9 94.2 169.2 Q91.4 163.5 88.8 157.7 L86.1 151.9" stroke="hsl(36 14% 38%)" stroke-opacity="0.35" stroke-width="0.9" stroke-dasharray="3.9 5.2" transform="translate(-0.9 0)"/>
  </g>
  <!-- Fine hairy rootlets -->
  <path fill="none" stroke="hsl(30 18% 20%)" stroke-opacity="0.6" stroke-width="0.5" stroke-linecap="round" d="M97.7 258.3 l2.1 -0.1 M97.7 250 l4.9 0.5 M97.5 259.3 l-2.9 -0.2 M97.4 255 l5.7 0.7 M95.7 244.6 l-4.7 0.1 M96.6 248.3 l4.2 0 M97.2 238.9 l-3.5 -0.1 M96.4 242.6 l-5.4 1.6 M95.6 235.2 l2.6 -0.4 M94.7 228.5 l-3.1 1.5 M94.2 235.6 l4.4 -0.5 M93.7 235.8 l-4.6 0.5 M93.9 224.2 l3.8 -0.8 M93.8 217.7 l-2.5 -0.6 M93.6 217 l4 0.3 M94 222.8 l-4.8 -1.2 M95.3 210.6 l-4.7 -1.7 M96 211.9 l-2.1 -0.9 M95.5 208.7 l3 0.4 M96.2 206.6 l-4.7 -0.9 M100.7 190.4 l-3.6 -0.3 M98.6 191.4 l-2.4 -2.2 M98.6 196 l-4.2 -2.2 M98.2 195.1 l-2.1 -1.3 M107 182.8 l1.7 1.5 M105.3 185.3 l-2.7 -1 M104 183.7 l1.8 1.7 M106 182.1 l-2.8 -2.7 M108.4 172.8 l1.7 0.8 M108.4 170.8 l-3.2 -0.9 M108.5 171.4 l-2.2 -1.3 M108.6 169.4 l2 0.2 M114.2 165.3 l-2.1 -0.6 M112.3 162.2 l-1.9 -0.6 M114.1 166.2 l-3.3 0 M113.4 165.1 l3.7 1 M115.6 150.3 l-3.5 -1.4 M115 154.3 l1.4 0.7 M117 153.2 l1.2 0.5 M115.8 148.6 l-1.8 -0.2 M117.2 141.2 l-1.4 0.1 M118.8 136.7 l-2.9 -0.1 M117.2 137.1 l-3 -0.5 M118.2 138.4 l-3.1 -1.9 M121.3 126.9 l-2.6 -0.9 M120.1 121.5 l1.8 0.2 M121.5 124.8 l-2.9 -1.1 M120.8 130.6 l3 1.4 M122.9 111 l2 1.6 M123.3 116.7 l-2.3 -1.5 M124.2 108.4 l-1.8 -1.3 M125.5 112.3 l-1.2 -0.2 M105.5 255.8 l-4.8 1.9 M104.2 261.8 l5.1 -1.2 M106.4 251.1 l-4.7 0.9 M105.7 254.7 l-3.3 2.1 M102.6 243 l3.6 -1.1 M102.8 245.4 l-4.8 1.9 M103 238.9 l4 -1.3 M102.6 245 l4.2 -1.3 M102.7 224.5 l-5.2 0.9 M103 234.7 l5.2 1.7 M103.4 232.4 l2.3 0 M103.4 235.7 l-3 -0.1 M104.8 218 l2.9 0.7 M104.5 216.8 l3.8 -0.7 M104.6 222.8 l4.3 -0.5 M104.2 219.1 l4.8 1.4 M105.1 202.4 l-3.5 0.1 M105 203 l-1.9 -0.1 M105.1 203.1 l2.6 -0.2 M105.1 202.5 l2.3 -0.5 M102.7 192.2 l-2.6 0.3 M104 192.4 l-4.1 2.3 M103.2 189.6 l1.9 -0.7 M104.2 194.2 l-3.5 0.9 M101 180.8 l1.6 -0.6 M99 183.4 l-2.1 1 M99.8 184.2 l-3.8 1 M99.8 175 l-2.5 0.4 M93.6 174.2 l-2.9 0.5 M92.1 166.8 l-2.6 0.7 M91.8 174.2 l2.2 -0.9 M93.4 164.8 l-1.1 1.1 M91.4 163.2 l1.4 -0.2 M87.3 159.7 l2.4 -1.6 M91.3 159.9 l1.9 -1.5 M86.4 154.4 l1.8 -1.5 M83.2 144.2 l2.9 -1.6 M85.9 148.2 l2.9 -1.1 M85.4 146 l-2.7 0.3 M82.3 151.9 l-2.8 0.8 M80.7 138.9 l-1.8 0.8 M82 135.1 l2.4 -0.7 M81.2 139.5 l2 0.3 M80.4 134.6 l3.1 0.4 M80.1 122.3 l-2.7 -0.6 M80 125.5 l-3.2 0.3 M79.7 119.7 l-2.9 0.5 M79.9 119.6 l2.4 -0.2"/>
  <!-- Tendrils -->
  <g fill="none" stroke="hsl(68 22% 24%)" stroke-width="0.75" stroke-linecap="round">
    <path d="M200.4 136.6 Q200.7 134 201.1 132.8 Q201.5 131.6 202.1 130.7 Q202.8 129.8 203.7 129.2 Q204.6 128.6 205.6 128.4 Q206.6 128.2 207.5 128.5 Q208.4 128.7 209.1 129.3 Q209.7 129.9 209.9 130.7 Q210.1 131.4 209.8 132.1 Q209.6 132.8 209.1 133.2 Q208.5 133.5 207.9 133.4 Q207.4 133.4 207 133 Q206.7 132.6 206.8 132.2 Q206.8 131.7 207.1 131.5 L207.4 131.3"/>
    <path d="M91.1 97.6 Q91.5 95 92 93.9 Q92.5 92.8 93.2 91.9 Q94 91 94.9 90.5 Q95.9 89.9 96.9 89.8 Q97.9 89.7 98.8 90 Q99.6 90.3 100.2 90.9 Q100.8 91.6 101 92.3 Q101.1 93.1 100.8 93.8 Q100.5 94.4 100 94.8 Q99.4 95.1 98.8 95 Q98.3 94.9 98 94.5 Q97.7 94.1 97.7 93.6 Q97.8 93.2 98.1 93 L98.4 92.8"/>
    <path d="M70.2 39.5 Q69.8 36.9 69.9 35.7 Q70 34.4 70.5 33.4 Q70.9 32.3 71.6 31.5 Q72.3 30.7 73.3 30.3 Q74.2 29.9 75.1 29.9 Q76.1 29.9 76.8 30.3 Q77.6 30.7 77.9 31.4 Q78.3 32.1 78.3 32.8 Q78.2 33.6 77.8 34 Q77.3 34.5 76.7 34.6 Q76.2 34.7 75.8 34.4 Q75.3 34.1 75.3 33.6 Q75.2 33.2 75.5 32.9 L75.7 32.7"/>
    <path d="M65 49 Q64.2 46.6 64.2 45.3 Q64.1 44.1 64.4 43 Q64.7 41.9 65.3 41 Q65.9 40.1 66.7 39.5 Q67.6 39 68.5 38.8 Q69.4 38.7 70.2 39 Q71 39.4 71.5 40 Q72 40.6 72 41.3 Q72.1 42.1 71.7 42.6 Q71.3 43.1 70.8 43.3 Q70.2 43.4 69.8 43.2 Q69.3 43 69.2 42.6 Q69.1 42.2 69.3 41.8 L69.5 41.5"/>
    <path d="M183.8 95.7 Q186 94.4 187.2 94 Q188.4 93.7 189.5 93.7 Q190.7 93.7 191.7 94.1 Q192.7 94.5 193.5 95.2 Q194.2 95.9 194.5 96.8 Q194.8 97.7 194.7 98.5 Q194.6 99.4 194.1 100 Q193.6 100.6 192.9 100.8 Q192.2 101 191.6 100.8 Q191 100.5 190.7 100 Q190.4 99.5 190.5 99 Q190.7 98.5 191 98.3 Q191.4 98.1 191.8 98.2 L192.1 98.3"/>
    <path d="M180.9 119.1 Q182.9 120.8 183.7 121.8 Q184.4 122.7 184.8 123.8 Q185.1 124.9 185.1 126 Q185.1 127.1 184.7 128 Q184.3 128.9 183.5 129.6 Q182.8 130.2 182 130.3 Q181.1 130.5 180.4 130.2 Q179.6 130 179.2 129.4 Q178.8 128.8 178.8 128.1 Q178.8 127.5 179.2 127.1 Q179.6 126.6 180.1 126.6 Q180.6 126.5 180.9 126.8 Q181.3 127.1 181.3 127.5 L181.3 127.8"/>
    <path d="M86.7 33.3 Q85.6 31 84.8 30 Q83.9 29.1 83 28.5 Q82 27.9 80.9 27.7 Q79.9 27.5 78.9 27.7 Q77.9 27.9 77.1 28.5 Q76.4 29 76 29.8 Q75.7 30.6 75.8 31.4 Q75.9 32.2 76.4 32.7 Q76.8 33.3 77.5 33.4 Q78.1 33.5 78.6 33.2 Q79.1 32.9 79.3 32.5 Q79.4 32 79.2 31.6 Q79 31.2 78.7 31.1 L78.3 31"/>
    <path d="M33.9 29.4 Q31.3 29.2 30.1 29.4 Q28.9 29.6 27.9 30.1 Q26.9 30.7 26.1 31.5 Q25.4 32.3 25.1 33.2 Q24.7 34.2 24.8 35.1 Q24.9 36 25.4 36.7 Q25.9 37.4 26.6 37.8 Q27.3 38.1 28.1 38 Q28.8 37.8 29.2 37.3 Q29.6 36.9 29.7 36.3 Q29.7 35.7 29.4 35.3 Q29 34.9 28.6 34.9 Q28.2 34.9 27.9 35.2 L27.7 35.4"/>
    <path d="M42.2 12.1 Q41.4 9.6 41.3 8.4 Q41.3 7.2 41.5 6.1 Q41.8 4.9 42.4 4 Q43 3.1 43.9 2.6 Q44.7 2 45.6 1.9 Q46.6 1.8 47.4 2.1 Q48.2 2.4 48.7 3 Q49.2 3.6 49.2 4.4 Q49.2 5.1 48.9 5.6 Q48.5 6.2 47.9 6.3 Q47.4 6.5 46.9 6.2 Q46.5 6 46.4 5.6 Q46.2 5.2 46.4 4.9 L46.6 4.6"/>
    <path d="M148.8 61.7 Q149.5 59.2 149.5 58 Q149.6 56.8 149.2 55.7 Q148.9 54.6 148.3 53.7 Q147.7 52.8 146.8 52.3 Q145.9 51.8 145 51.7 Q144 51.6 143.3 51.9 Q142.5 52.3 142 52.9 Q141.5 53.6 141.5 54.3 Q141.5 55 141.9 55.5 Q142.3 56.1 142.9 56.2 Q143.4 56.3 143.9 56.1 Q144.3 55.8 144.4 55.4 Q144.5 55 144.3 54.7 L144.1 54.4"/>
    <path d="M106.1 151.9 Q108.4 150.7 109.6 150.4 Q110.8 150.1 111.9 150.2 Q113.1 150.3 114.1 150.7 Q115.1 151.1 115.8 151.8 Q116.5 152.6 116.8 153.5 Q117 154.4 116.9 155.2 Q116.7 156.1 116.2 156.7 Q115.7 157.2 114.9 157.4 Q114.2 157.6 113.7 157.3 Q113.1 157.1 112.8 156.5 Q112.5 156 112.7 155.5 Q112.8 155.1 113.2 154.9 Q113.6 154.7 114 154.8 L114.3 154.9"/>
    <path d="M75.8 128.1 Q75.7 125.5 75.9 124.3 Q76.1 123.1 76.7 122.1 Q77.2 121.1 78 120.4 Q78.9 119.7 79.8 119.3 Q80.8 119 81.7 119.1 Q82.6 119.3 83.3 119.8 Q84 120.3 84.4 121 Q84.7 121.7 84.5 122.4 Q84.4 123.2 83.9 123.6 Q83.4 124 82.8 124 Q82.2 124 81.8 123.7 Q81.5 123.3 81.5 122.9 Q81.4 122.5 81.7 122.2 L82 122"/>
    <path d="M159 153.3 Q161.5 152.5 162.7 152.4 Q163.9 152.3 165 152.6 Q166.2 152.9 167.1 153.5 Q168 154.1 168.5 154.9 Q169.1 155.7 169.2 156.7 Q169.3 157.6 169 158.4 Q168.7 159.2 168.1 159.7 Q167.4 160.2 166.7 160.2 Q166 160.3 165.5 159.9 Q164.9 159.5 164.8 159 Q164.6 158.4 164.8 158 Q165.1 157.5 165.5 157.4 Q165.9 157.3 166.2 157.5 L166.5 157.7"/>
    <path d="M104.7 14 Q104.7 11.4 105.1 10.2 Q105.4 9.1 106 8.1 Q106.6 7.1 107.5 6.5 Q108.4 5.8 109.3 5.6 Q110.3 5.3 111.2 5.5 Q112.2 5.7 112.8 6.2 Q113.5 6.8 113.7 7.5 Q114 8.3 113.8 9 Q113.6 9.7 113.1 10.1 Q112.5 10.5 112 10.4 Q111.4 10.4 111 10 Q110.7 9.7 110.7 9.2 Q110.7 8.8 111 8.6 L111.3 8.3"/>
    <path d="M93.3 34.5 Q94.1 32 94.8 31 Q95.4 29.9 96.3 29.2 Q97.2 28.4 98.2 28.1 Q99.2 27.7 100.2 27.7 Q101.2 27.8 102.1 28.3 Q102.9 28.7 103.4 29.4 Q103.8 30.2 103.8 31 Q103.9 31.7 103.5 32.4 Q103.1 33 102.5 33.2 Q101.8 33.4 101.3 33.2 Q100.8 33 100.5 32.5 Q100.3 32.1 100.5 31.7 Q100.6 31.3 100.9 31.1 L101.3 31"/>
  </g>
  <!-- Ivy leaves: soft shadow, own colour, shading, sheen, faint veins, decay spots -->
  <g transform="translate(124.1 184.4) rotate(62.9)">
    <path d="M0 0 L4.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.9 0) scale(17)">
      <use href="#v6-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-0" fill="hsl(67 44.5% 26.7%)"/>
      <use href="#v6-leaf-0" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-0" fill="url(#v6-under)"/>
      <use href="#v6-leaf-0" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.032" stroke-linecap="round"/>
      <circle cx="0.28800000000000003" cy="0.102" r="0.065" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.544" cy="0.177" r="0.073" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(135.5 182.8) rotate(-59.8)">
    <path d="M0 0 L5.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.2 0) scale(13.1)">
      <use href="#v6-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-5" fill="hsl(89.9 29.7% 20.9%)"/>
      <use href="#v6-leaf-5" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-5" fill="url(#v6-under)"/>
      <use href="#v6-leaf-5" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.042" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(158.1 178.4) rotate(-75.7)">
    <path d="M0 0 L3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3 0) scale(16.5)">
      <use href="#v6-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-0" fill="hsl(32.8 41.5% 20.9%)"/>
      <use href="#v6-leaf-0" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-0" fill="url(#v6-under)"/>
      <use href="#v6-leaf-0" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.033" stroke-linecap="round"/>
      <circle cx="0.6679999999999999" cy="-0.048" r="0.067" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.257" cy="-0.156" r="0.08199999999999999" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.515" cy="0.134" r="0.055" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.542" cy="0.165" r="0.075" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(169.1 174.9) rotate(22.2)">
    <path d="M0 0 L3.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.8 0) scale(15.8)">
      <use href="#v6-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-3" fill="hsl(67.8 40.8% 26.4%)"/>
      <use href="#v6-leaf-3" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-3" fill="url(#v6-under)"/>
      <use href="#v6-leaf-3" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
      <circle cx="0.47200000000000003" cy="0.099" r="0.073" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.512" cy="0.21100000000000002" r="0.081" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(179.6 170.3) rotate(-59.8)">
    <path d="M0 0 L4.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.8 0) scale(14.5)">
      <use href="#v6-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-5" fill="hsl(87.6 37.8% 15.1%)"/>
      <use href="#v6-leaf-5" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-5" fill="url(#v6-under)"/>
      <use href="#v6-leaf-5" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.038" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(190.8 167.6) rotate(51.2)">
    <path d="M0 0 L3.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.5 0) scale(16.8)">
      <use href="#v6-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-3" fill="hsl(55.6 47.8% 28.7%)"/>
      <use href="#v6-leaf-3" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-3" fill="url(#v6-under)"/>
      <use href="#v6-leaf-3" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.033" stroke-linecap="round"/>
      <circle cx="0.561" cy="-0.021" r="0.069" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.5770000000000001" cy="-0.049" r="0.08" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(198.6 159.1) rotate(-88.1)">
    <path d="M0 0 L5.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.6 0) scale(17.4)">
      <use href="#v6-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-0" fill="hsl(105.9 40.4% 19.6%)"/>
      <use href="#v6-leaf-0" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-0" fill="url(#v6-under)"/>
      <use href="#v6-leaf-0" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.032" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(201.7 148) rotate(-11.9)">
    <path d="M0 0 L4.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.9 0) scale(10.9)">
      <use href="#v6-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-4" fill="hsl(102.5 31.4% 19.1%)"/>
      <use href="#v6-leaf-4" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-4" fill="url(#v6-under)"/>
      <use href="#v6-leaf-4" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.05" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(200.4 136.6) rotate(-144.5)">
    <path d="M0 0 L3.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.3 0) scale(13.3)">
      <use href="#v6-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-3" fill="hsl(108.3 27.7% 23%)"/>
      <use href="#v6-leaf-3" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-3" fill="url(#v6-under)"/>
      <use href="#v6-leaf-3" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.040999999999999995" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(111.6 167.5) rotate(-3.9)">
    <path d="M0 0 L6.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(6.3 0) scale(19.6)">
      <use href="#v6-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-3" fill="hsl(27.3 39.6% 21%)"/>
      <use href="#v6-leaf-3" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-3" fill="url(#v6-under)"/>
      <use href="#v6-leaf-3" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027999999999999997" stroke-linecap="round"/>
      <circle cx="0.28300000000000003" cy="0.096" r="0.051" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.5870000000000001" cy="0.16899999999999998" r="0.068" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.298" cy="0.18600000000000003" r="0.069" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.613" cy="-0.098" r="0.046" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(102.9 137.9) rotate(-73.2)">
    <path d="M0 0 L4.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.3 0) scale(20.5)">
      <use href="#v6-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-3" fill="hsl(63.5 35.4% 34%)"/>
      <use href="#v6-leaf-3" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-3" fill="url(#v6-under)"/>
      <use href="#v6-leaf-3" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027000000000000003" stroke-linecap="round"/>
      <circle cx="0.612" cy="0.034" r="0.047" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.39399999999999996" cy="0.204" r="0.057" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(96.7 129.1) rotate(-176.8)">
    <path d="M0 0 L4.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.4 0) scale(19.9)">
      <use href="#v6-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-5" fill="hsl(85.4 43.9% 19.5%)"/>
      <use href="#v6-leaf-5" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-5" fill="url(#v6-under)"/>
      <use href="#v6-leaf-5" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027999999999999997" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(92.8 119.1) rotate(-45.2)">
    <path d="M0 0 L5.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.3 0) scale(18.6)">
      <use href="#v6-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-1" fill="hsl(94.2 30.4% 26.9%)"/>
      <use href="#v6-leaf-1" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-1" fill="url(#v6-under)"/>
      <use href="#v6-leaf-1" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(91.7 108.4) rotate(-152.5)">
    <path d="M0 0 L4.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.4 0) scale(16.5)">
      <use href="#v6-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-2" fill="hsl(24.3 36.5% 27.2%)"/>
      <use href="#v6-leaf-2" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-2" fill="url(#v6-under)"/>
      <use href="#v6-leaf-2" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.033" stroke-linecap="round"/>
      <circle cx="0.527" cy="-0.107" r="0.043" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.516" cy="0.06" r="0.044000000000000004" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.5" cy="0.004" r="0.067" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.38299999999999995" cy="0.218" r="0.087" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(91.1 97.6) rotate(-39)">
    <path d="M0 0 L5.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.6 0) scale(14.4)">
      <use href="#v6-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-3" fill="hsl(103.8 33.9% 17.9%)"/>
      <use href="#v6-leaf-3" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-3" fill="url(#v6-under)"/>
      <use href="#v6-leaf-3" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.038" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(107.9 115.4) rotate(-55.3)">
    <path d="M0 0 L4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4 0) scale(16.2)">
      <use href="#v6-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-5" fill="hsl(109.6 36.1% 16.5%)"/>
      <use href="#v6-leaf-5" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-5" fill="url(#v6-under)"/>
      <use href="#v6-leaf-5" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.034" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(103.6 106.4) rotate(-186.5)">
    <path d="M0 0 L5.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.7 0) scale(15.1)">
      <use href="#v6-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-0" fill="hsl(55 44.5% 33.5%)"/>
      <use href="#v6-leaf-0" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-0" fill="url(#v6-under)"/>
      <use href="#v6-leaf-0" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.036000000000000004" stroke-linecap="round"/>
      <circle cx="0.528" cy="0.075" r="0.087" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.406" cy="0.12" r="0.044000000000000004" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(99.9 97.2) rotate(-47)">
    <path d="M0 0 L4.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.1 0) scale(13.8)">
      <use href="#v6-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-4" fill="hsl(37.8 36.3% 22.5%)"/>
      <use href="#v6-leaf-4" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-4" fill="url(#v6-under)"/>
      <use href="#v6-leaf-4" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.04" stroke-linecap="round"/>
      <circle cx="0.495" cy="-0.038" r="0.053" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.447" cy="0.162" r="0.043" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.32899999999999996" cy="0.192" r="0.048" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.325" cy="-0.114" r="0.07200000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(94.9 88.6) rotate(-175.4)">
    <path d="M0 0 L4.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.3 0) scale(20.2)">
      <use href="#v6-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-5" fill="hsl(108 31.4% 17.4%)"/>
      <use href="#v6-leaf-5" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-5" fill="url(#v6-under)"/>
      <use href="#v6-leaf-5" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027000000000000003" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(89.5 80.2) rotate(-57.5)">
    <path d="M0 0 L3.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.4 0) scale(10.9)">
      <use href="#v6-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-5" fill="hsl(31.9 34.1% 18.3%)"/>
      <use href="#v6-leaf-5" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-5" fill="url(#v6-under)"/>
      <use href="#v6-leaf-5" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.05" stroke-linecap="round"/>
      <circle cx="0.401" cy="0.221" r="0.042" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.513" cy="-0.066" r="0.065" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.395" cy="0.11599999999999999" r="0.053" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.257" cy="0.182" r="0.040999999999999995" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(82.7 73) rotate(-203.1)">
    <path d="M0 0 L4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4 0) scale(15.9)">
      <use href="#v6-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-3" fill="hsl(90.9 37.7% 25%)"/>
      <use href="#v6-leaf-3" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-3" fill="url(#v6-under)"/>
      <use href="#v6-leaf-3" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(76.1 65.4) rotate(-85.3)">
    <path d="M0 0 L4.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.9 0) scale(16.8)">
      <use href="#v6-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-2" fill="hsl(58 44.1% 28.2%)"/>
      <use href="#v6-leaf-2" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-2" fill="url(#v6-under)"/>
      <use href="#v6-leaf-2" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.033" stroke-linecap="round"/>
      <circle cx="0.441" cy="0.147" r="0.065" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.525" cy="-0.077" r="0.08199999999999999" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(73.4 47.8) rotate(-69.3)">
    <path d="M0 0 L3.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.4 0) scale(17.5)">
      <use href="#v6-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-2" fill="hsl(101 42.3% 16.2%)"/>
      <use href="#v6-leaf-2" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-2" fill="url(#v6-under)"/>
      <use href="#v6-leaf-2" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.032" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(70.2 39.5) rotate(-154.6)">
    <path d="M0 0 L5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5 0) scale(10.3)">
      <use href="#v6-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-2" fill="hsl(37.5 43.1% 29.3%)"/>
      <use href="#v6-leaf-2" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-2" fill="url(#v6-under)"/>
      <use href="#v6-leaf-2" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.054000000000000006" stroke-linecap="round"/>
      <circle cx="0.606" cy="0.064" r="0.07400000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.5379999999999999" cy="-0.073" r="0.077" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.632" cy="-0.08800000000000001" r="0.077" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.401" cy="0.11599999999999999" r="0.085" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(69.8 57.7) rotate(-173.9)">
    <path d="M0 0 L4.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.9 0) scale(16.5)">
      <use href="#v6-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-4" fill="hsl(86.2 29.9% 17%)"/>
      <use href="#v6-leaf-4" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-4" fill="url(#v6-under)"/>
      <use href="#v6-leaf-4" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.033" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(65 49) rotate(-69.1)">
    <path d="M0 0 L4.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.6 0) scale(12.7)">
      <use href="#v6-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-2" fill="hsl(84.4 33.5% 21.2%)"/>
      <use href="#v6-leaf-2" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-2" fill="url(#v6-under)"/>
      <use href="#v6-leaf-2" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.043" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(141.7 114) rotate(50.6)">
    <path d="M0 0 L4.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.3 0) scale(12.3)">
      <use href="#v6-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-1" fill="hsl(94.4 35.8% 26.8%)"/>
      <use href="#v6-leaf-1" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-1" fill="url(#v6-under)"/>
      <use href="#v6-leaf-1" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.045" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(151.8 112.4) rotate(-63.2)">
    <path d="M0 0 L4.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.1 0) scale(15.6)">
      <use href="#v6-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-5" fill="hsl(88.8 27.9% 17.9%)"/>
      <use href="#v6-leaf-5" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-5" fill="url(#v6-under)"/>
      <use href="#v6-leaf-5" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(183.8 95.7) rotate(-108.2)">
    <path d="M0 0 L5.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.3 0) scale(13.3)">
      <use href="#v6-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-1" fill="hsl(110.9 39% 21.6%)"/>
      <use href="#v6-leaf-1" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-1" fill="url(#v6-under)"/>
      <use href="#v6-leaf-1" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.040999999999999995" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(171.9 114.3) rotate(-33.2)">
    <path d="M0 0 L3.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.1 0) scale(15)">
      <use href="#v6-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-4" fill="hsl(22.9 32.8% 26.5%)"/>
      <use href="#v6-leaf-4" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-4" fill="url(#v6-under)"/>
      <use href="#v6-leaf-4" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.037000000000000005" stroke-linecap="round"/>
      <circle cx="0.303" cy="-0.191" r="0.068" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.26" cy="-0.18600000000000003" r="0.08199999999999999" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.503" cy="-0.09699999999999999" r="0.07200000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.36200000000000004" cy="0.239" r="0.071" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(180.9 119.1) rotate(92.3)">
    <path d="M0 0 L4.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.9 0) scale(13.6)">
      <use href="#v6-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-1" fill="hsl(63.4 42.4% 28.6%)"/>
      <use href="#v6-leaf-1" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-1" fill="url(#v6-under)"/>
      <use href="#v6-leaf-1" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.04" stroke-linecap="round"/>
      <circle cx="0.44" cy="0.11599999999999999" r="0.085" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.451" cy="-0.195" r="0.059000000000000004" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(122.1 119.5) rotate(-12)">
    <path d="M0 0 L5.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.7 0) scale(21.1)">
      <use href="#v6-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-5" fill="hsl(65.1 35.6% 27.4%)"/>
      <use href="#v6-leaf-5" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-5" fill="url(#v6-under)"/>
      <use href="#v6-leaf-5" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.026000000000000002" stroke-linecap="round"/>
      <circle cx="0.499" cy="0.12300000000000001" r="0.07400000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.318" cy="-0.11" r="0.054000000000000006" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(109.7 92.3) rotate(-68.2)">
    <path d="M0 0 L5.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.3 0) scale(15.4)">
      <use href="#v6-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-2" fill="hsl(93.6 44.8% 18.7%)"/>
      <use href="#v6-leaf-2" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-2" fill="url(#v6-under)"/>
      <use href="#v6-leaf-2" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.036000000000000004" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(93.3 53.3) rotate(-47.7)">
    <path d="M0 0 L5.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.8 0) scale(12.9)">
      <use href="#v6-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-0" fill="hsl(67 40.6% 26.8%)"/>
      <use href="#v6-leaf-0" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-0" fill="url(#v6-under)"/>
      <use href="#v6-leaf-0" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.042" stroke-linecap="round"/>
      <circle cx="0.532" cy="0" r="0.07200000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.324" cy="0.174" r="0.063" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(89.6 43.4) rotate(-159.4)">
    <path d="M0 0 L3.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.6 0) scale(12.9)">
      <use href="#v6-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-5" fill="hsl(22.6 40.7% 29.2%)"/>
      <use href="#v6-leaf-5" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-5" fill="url(#v6-under)"/>
      <use href="#v6-leaf-5" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.043" stroke-linecap="round"/>
      <circle cx="0.342" cy="-0.218" r="0.078" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.16899999999999998" cy="-0.168" r="0.066" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.25" cy="-0.145" r="0.069" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.657" cy="-0.008" r="0.057" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(86.7 33.3) rotate(-37.5)">
    <path d="M0 0 L4.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.3 0) scale(13.5)">
      <use href="#v6-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-1" fill="hsl(84.1 36.6% 19.6%)"/>
      <use href="#v6-leaf-1" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-1" fill="url(#v6-under)"/>
      <use href="#v6-leaf-1" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.040999999999999995" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(72.3 47.5) rotate(-183.4)">
    <path d="M0 0 L3.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.2 0) scale(17.6)">
      <use href="#v6-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-5" fill="hsl(108.1 33% 23.5%)"/>
      <use href="#v6-leaf-5" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-5" fill="url(#v6-under)"/>
      <use href="#v6-leaf-5" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.031" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(63.8 39.5) rotate(-81.8)">
    <path d="M0 0 L4.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.5 0) scale(10.8)">
      <use href="#v6-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-2" fill="hsl(87.6 42.7% 24.3%)"/>
      <use href="#v6-leaf-2" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-2" fill="url(#v6-under)"/>
      <use href="#v6-leaf-2" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.051" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(44.1 32.2) rotate(-120)">
    <path d="M0 0 L5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5 0) scale(17.8)">
      <use href="#v6-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-1" fill="hsl(102.3 26.7% 25.7%)"/>
      <use href="#v6-leaf-1" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-1" fill="url(#v6-under)"/>
      <use href="#v6-leaf-1" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.031" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(55.7 31.1) rotate(-169.4)">
    <path d="M0 0 L4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4 0) scale(15.6)">
      <use href="#v6-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-0" fill="hsl(60.4 35.8% 34.9%)"/>
      <use href="#v6-leaf-0" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-0" fill="url(#v6-under)"/>
      <use href="#v6-leaf-0" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
      <circle cx="0.435" cy="-0.099" r="0.07400000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.451" cy="0.079" r="0.05" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(47.9 22.3) rotate(-68.3)">
    <path d="M0 0 L4.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.4 0) scale(14.1)">
      <use href="#v6-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-1" fill="hsl(84.6 43.2% 24.6%)"/>
      <use href="#v6-leaf-1" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-1" fill="url(#v6-under)"/>
      <use href="#v6-leaf-1" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.039" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(42.2 12.1) rotate(-187.7)">
    <path d="M0 0 L4.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.8 0) scale(15.9)">
      <use href="#v6-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-2" fill="hsl(106 28.9% 21.1%)"/>
      <use href="#v6-leaf-2" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-2" fill="url(#v6-under)"/>
      <use href="#v6-leaf-2" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(126.8 108.2) rotate(-134)">
    <path d="M0 0 L5.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.8 0) scale(16.7)">
      <use href="#v6-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-0" fill="hsl(25.9 40.6% 25.5%)"/>
      <use href="#v6-leaf-0" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-0" fill="url(#v6-under)"/>
      <use href="#v6-leaf-0" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.033" stroke-linecap="round"/>
      <circle cx="0.245" cy="-0.158" r="0.079" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.22699999999999998" cy="-0.161" r="0.073" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.66" cy="-0.07" r="0.044000000000000004" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.573" cy="0.076" r="0.08199999999999999" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(134.6 89.1) rotate(-0.6)">
    <path d="M0 0 L3.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.4 0) scale(14.6)">
      <use href="#v6-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-4" fill="hsl(95.6 34.8% 20.6%)"/>
      <use href="#v6-leaf-4" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-4" fill="url(#v6-under)"/>
      <use href="#v6-leaf-4" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.038" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(139.6 80.1) rotate(-96.6)">
    <path d="M0 0 L3.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.1 0) scale(19.4)">
      <use href="#v6-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-1" fill="hsl(97.9 40.8% 23.5%)"/>
      <use href="#v6-leaf-1" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-1" fill="url(#v6-under)"/>
      <use href="#v6-leaf-1" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027999999999999997" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(144.1 70.9) rotate(-26)">
    <path d="M0 0 L4.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.5 0) scale(17.3)">
      <use href="#v6-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-1" fill="hsl(96.4 32.8% 19.7%)"/>
      <use href="#v6-leaf-1" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-1" fill="url(#v6-under)"/>
      <use href="#v6-leaf-1" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.032" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(148.8 61.7) rotate(-135.9)">
    <path d="M0 0 L5.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.2 0) scale(10.2)">
      <use href="#v6-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-4" fill="hsl(97.6 44.5% 25.1%)"/>
      <use href="#v6-leaf-4" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-4" fill="url(#v6-under)"/>
      <use href="#v6-leaf-4" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.054000000000000006" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(91.9 193.4) rotate(-84.8)">
    <path d="M0 0 L5.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.1 0) scale(19)">
      <use href="#v6-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-1" fill="hsl(89 39% 18.4%)"/>
      <use href="#v6-leaf-1" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-1" fill="url(#v6-under)"/>
      <use href="#v6-leaf-1" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.028999999999999998" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(86.9 183.3) rotate(-181.3)">
    <path d="M0 0 L3.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.2 0) scale(21.6)">
      <use href="#v6-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-2" fill="hsl(103.5 38.9% 19.3%)"/>
      <use href="#v6-leaf-2" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-2" fill="url(#v6-under)"/>
      <use href="#v6-leaf-2" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.025" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(98.3 158.4) rotate(1.7)">
    <path d="M0 0 L4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4 0) scale(19.5)">
      <use href="#v6-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-1" fill="hsl(57.8 49% 30.5%)"/>
      <use href="#v6-leaf-1" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-1" fill="url(#v6-under)"/>
      <use href="#v6-leaf-1" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027999999999999997" stroke-linecap="round"/>
      <circle cx="0.632" cy="-0.09" r="0.052000000000000005" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.309" cy="0.132" r="0.049" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(106.1 151.9) rotate(-86.8)">
    <path d="M0 0 L3.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.3 0) scale(15.5)">
      <use href="#v6-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-2" fill="hsl(108.6 32.1% 23.4%)"/>
      <use href="#v6-leaf-2" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-2" fill="url(#v6-under)"/>
      <use href="#v6-leaf-2" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(82.3 161.3) rotate(-154.7)">
    <path d="M0 0 L3.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.1 0) scale(12.4)">
      <use href="#v6-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-0" fill="hsl(100.7 32.7% 16.5%)"/>
      <use href="#v6-leaf-0" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-0" fill="url(#v6-under)"/>
      <use href="#v6-leaf-0" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.044000000000000004" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(78.6 139.1) rotate(-147.5)">
    <path d="M0 0 L3.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.3 0) scale(10.5)">
      <use href="#v6-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-1" fill="hsl(26 43.4% 24.8%)"/>
      <use href="#v6-leaf-1" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-1" fill="url(#v6-under)"/>
      <use href="#v6-leaf-1" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.052000000000000005" stroke-linecap="round"/>
      <circle cx="0.312" cy="0.20199999999999999" r="0.055999999999999994" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.615" cy="-0.14800000000000002" r="0.073" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.5329999999999999" cy="0.059000000000000004" r="0.05" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.605" cy="-0.057" r="0.078" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(124.4 169.3) rotate(-62.8)">
    <path d="M0 0 L4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4 0) scale(12.3)">
      <use href="#v6-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-4" fill="hsl(104.6 31.5% 27.3%)"/>
      <use href="#v6-leaf-4" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-4" fill="url(#v6-under)"/>
      <use href="#v6-leaf-4" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.045" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(133.1 165.3) rotate(39.4)">
    <path d="M0 0 L4.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.8 0) scale(19.8)">
      <use href="#v6-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-3" fill="hsl(108.9 36.1% 21.3%)"/>
      <use href="#v6-leaf-3" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-3" fill="url(#v6-under)"/>
      <use href="#v6-leaf-3" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027999999999999997" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(142 161.9) rotate(-59.7)">
    <path d="M0 0 L3.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.2 0) scale(12.8)">
      <use href="#v6-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-3" fill="hsl(61.8 49.7% 31.4%)"/>
      <use href="#v6-leaf-3" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-3" fill="url(#v6-under)"/>
      <use href="#v6-leaf-3" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.043" stroke-linecap="round"/>
      <circle cx="0.36" cy="0.20600000000000002" r="0.048" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.578" cy="0.13699999999999998" r="0.06" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(150.7 157.9) rotate(19.4)">
    <path d="M0 0 L3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3 0) scale(10.1)">
      <use href="#v6-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-0" fill="hsl(32.1 41.1% 23.4%)"/>
      <use href="#v6-leaf-0" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-0" fill="url(#v6-under)"/>
      <use href="#v6-leaf-0" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.054000000000000006" stroke-linecap="round"/>
      <circle cx="0.314" cy="-0.135" r="0.07400000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.231" cy="0.158" r="0.045" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.43799999999999994" cy="-0.163" r="0.09" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.518" cy="0.179" r="0.062" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(159 153.3) rotate(-102.4)">
    <path d="M0 0 L5.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.5 0) scale(15.5)">
      <use href="#v6-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-1" fill="hsl(34.1 32% 25.1%)"/>
      <use href="#v6-leaf-1" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-1" fill="url(#v6-under)"/>
      <use href="#v6-leaf-1" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.036000000000000004" stroke-linecap="round"/>
      <circle cx="0.413" cy="0.10400000000000001" r="0.081" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.6459999999999999" cy="-0.09300000000000001" r="0.040999999999999995" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.435" cy="0.12300000000000001" r="0.057" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.392" cy="0.157" r="0.076" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(86.1 151.9) rotate(-184.1)">
    <path d="M0 0 L4.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.2 0) scale(16.1)">
      <use href="#v6-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-2" fill="hsl(26.6 40.8% 22.3%)"/>
      <use href="#v6-leaf-2" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-2" fill="url(#v6-under)"/>
      <use href="#v6-leaf-2" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.034" stroke-linecap="round"/>
      <circle cx="0.424" cy="0.156" r="0.08800000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.318" cy="-0.205" r="0.078" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.40700000000000003" cy="0.095" r="0.087" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.36200000000000004" cy="0.172" r="0.081" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(82.1 139.8) rotate(-49.5)">
    <path d="M0 0 L6.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(6.4 0) scale(21)">
      <use href="#v6-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-3" fill="hsl(88.4 45.6% 26.9%)"/>
      <use href="#v6-leaf-3" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-3" fill="url(#v6-under)"/>
      <use href="#v6-leaf-3" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.026000000000000002" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(91.2 106.5) rotate(-29.6)">
    <path d="M0 0 L4.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.7 0) scale(13.9)">
      <use href="#v6-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-5" fill="hsl(32.2 43.3% 23.2%)"/>
      <use href="#v6-leaf-5" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-5" fill="url(#v6-under)"/>
      <use href="#v6-leaf-5" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.04" stroke-linecap="round"/>
      <circle cx="0.26" cy="-0.18" r="0.055" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.47600000000000003" cy="0.20600000000000002" r="0.08800000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.36" cy="0.102" r="0.049" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.215" cy="-0.128" r="0.06" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(94.7 83.2) rotate(-42.8)">
    <path d="M0 0 L4.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.3 0) scale(19.8)">
      <use href="#v6-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-2" fill="hsl(27.4 42.3% 22.7%)"/>
      <use href="#v6-leaf-2" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-2" fill="url(#v6-under)"/>
      <use href="#v6-leaf-2" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027999999999999997" stroke-linecap="round"/>
      <circle cx="0.509" cy="-0.191" r="0.078" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.484" cy="-0.068" r="0.055" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.47100000000000003" cy="0.124" r="0.045" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.265" cy="-0.08900000000000001" r="0.07200000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(97.2 71.6) rotate(-131.4)">
    <path d="M0 0 L3.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.9 0) scale(16.8)">
      <use href="#v6-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-5" fill="hsl(30.2 35.3% 24%)"/>
      <use href="#v6-leaf-5" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-5" fill="url(#v6-under)"/>
      <use href="#v6-leaf-5" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.033" stroke-linecap="round"/>
      <circle cx="0.5660000000000001" cy="0.006" r="0.077" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.48200000000000004" cy="-0.06" r="0.046" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.595" cy="0.08800000000000001" r="0.073" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.451" cy="-0.17300000000000001" r="0.044000000000000004" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(100.3 60.2) rotate(-18.8)">
    <path d="M0 0 L4.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.6 0) scale(15.5)">
      <use href="#v6-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-1" fill="hsl(27.2 39.8% 19.5%)"/>
      <use href="#v6-leaf-1" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-1" fill="url(#v6-under)"/>
      <use href="#v6-leaf-1" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
      <circle cx="0.359" cy="-0.107" r="0.07" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.601" cy="-0.099" r="0.077" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.289" cy="0.152" r="0.053" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.4" cy="-0.125" r="0.087" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(103.8 48.9) rotate(-130.4)">
    <path d="M0 0 L5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5 0) scale(11)">
      <use href="#v6-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-5" fill="hsl(109.8 35.6% 16.2%)"/>
      <use href="#v6-leaf-5" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-5" fill="url(#v6-under)"/>
      <use href="#v6-leaf-5" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.05" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(106.8 25.7) rotate(-148.3)">
    <path d="M0 0 L5.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.8 0) scale(12.9)">
      <use href="#v6-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-3" fill="hsl(108.4 31.5% 20.6%)"/>
      <use href="#v6-leaf-3" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-3" fill="url(#v6-under)"/>
      <use href="#v6-leaf-3" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.043" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(83.1 94.4) rotate(-31.7)">
    <path d="M0 0 L5.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.6 0) scale(17.6)">
      <use href="#v6-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-1" fill="hsl(91.9 45.8% 15.4%)"/>
      <use href="#v6-leaf-1" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-1" fill="url(#v6-under)"/>
      <use href="#v6-leaf-1" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.031" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(86.6 84.8) rotate(-128.8)">
    <path d="M0 0 L5.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.5 0) scale(21.2)">
      <use href="#v6-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-3" fill="hsl(89 35.3% 23.4%)"/>
      <use href="#v6-leaf-3" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-3" fill="url(#v6-under)"/>
      <use href="#v6-leaf-3" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.026000000000000002" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(89.7 75.1) rotate(-6.5)">
    <path d="M0 0 L3.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.7 0) scale(16.2)">
      <use href="#v6-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-1" fill="hsl(102 26.6% 17.4%)"/>
      <use href="#v6-leaf-1" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-1" fill="url(#v6-under)"/>
      <use href="#v6-leaf-1" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.034" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(92.3 54.8) rotate(-11.9)">
    <path d="M0 0 L3.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.3 0) scale(13.9)">
      <use href="#v6-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-0" fill="hsl(99.9 27.4% 15.9%)"/>
      <use href="#v6-leaf-0" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-0" fill="url(#v6-under)"/>
      <use href="#v6-leaf-0" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.04" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(92 44.6) rotate(-146.1)">
    <path d="M0 0 L5.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.9 0) scale(13.5)">
      <use href="#v6-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v6-leaf-1" fill="hsl(56.5 46.5% 26.1%)"/>
      <use href="#v6-leaf-1" fill="url(#v6-shade)"/>
      <use href="#v6-leaf-1" fill="url(#v6-under)"/>
      <use href="#v6-leaf-1" fill="url(#v6-sheen)"/>
      <use href="#v6-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.040999999999999995" stroke-linecap="round"/>
      <circle cx="0.28" cy="0.17800000000000002" r="0.042" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.474" cy="-0.06" r="0.09" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
</svg>
`,_3=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 260" width="200" height="260">
  <defs>
    <path id="v7-leaf-0" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.22 -0.16 L0.26 -0.21 L0.34 -0.16 L0.38 -0.17 L0.47 -0.34 L0.58 -0.34 L0.5 -0.12 L0.53 -0.08 L0.79 -0.11 L1.01 0 L0.79 0.11 L0.53 0.09 L0.5 0.12 L0.6 0.38 L0.48 0.38 L0.38 0.17 L0.34 0.16 L0.22 0.27 L0.18 0.2 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v7-veins-0" d="M0.23 0 L0.88 0 M0.23 0 L0.53 0.35 M0.23 0 L0.52 -0.31 M0.23 0 L0.22 0.22 M0.23 0 L0.25 -0.18"/>
    <path id="v7-leaf-1" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.24 -0.14 L0.27 -0.2 L0.34 -0.16 L0.38 -0.17 L0.46 -0.32 L0.56 -0.32 L0.5 -0.12 L0.53 -0.08 L0.79 -0.11 L1.01 0 L0.79 0.11 L0.53 0.09 L0.5 0.12 L0.57 0.32 L0.47 0.32 L0.38 0.17 L0.34 0.16 L0.25 0.23 L0.22 0.16 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v7-veins-1" d="M0.23 0 L0.89 0 M0.23 0 L0.51 0.3 M0.23 0 L0.51 -0.29 M0.23 0 L0.25 0.19 M0.23 0 L0.26 -0.16"/>
    <path id="v7-leaf-2" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.21 -0.17 L0.25 -0.23 L0.34 -0.16 L0.38 -0.17 L0.47 -0.34 L0.58 -0.34 L0.5 -0.12 L0.53 -0.08 L0.76 -0.1 L0.96 0 L0.76 0.1 L0.53 0.09 L0.5 0.12 L0.56 0.31 L0.46 0.31 L0.38 0.17 L0.34 0.16 L0.27 0.2 L0.24 0.14 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v7-veins-2" d="M0.23 0 L0.85 0 M0.23 0 L0.51 0.29 M0.23 0 L0.52 -0.31 M0.23 0 L0.26 0.16 M0.23 0 L0.24 -0.19"/>
    <path id="v7-leaf-3" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.23 -0.15 L0.26 -0.21 L0.34 -0.16 L0.38 -0.17 L0.48 -0.37 L0.6 -0.37 L0.5 -0.12 L0.53 -0.08 L0.79 -0.11 L1 0 L0.79 0.11 L0.53 0.09 L0.5 0.12 L0.57 0.33 L0.47 0.33 L0.38 0.17 L0.34 0.16 L0.25 0.22 L0.22 0.16 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v7-veins-3" d="M0.23 0 L0.88 0 M0.23 0 L0.51 0.3 M0.23 0 L0.53 -0.34 M0.23 0 L0.25 0.18 M0.23 0 L0.25 -0.17"/>
    <path id="v7-leaf-4" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.21 -0.17 L0.24 -0.24 L0.34 -0.16 L0.38 -0.17 L0.46 -0.3 L0.55 -0.3 L0.5 -0.12 L0.53 -0.08 L0.8 -0.11 L1.02 0 L0.8 0.11 L0.53 0.09 L0.5 0.12 L0.58 0.34 L0.47 0.34 L0.38 0.17 L0.34 0.16 L0.23 0.26 L0.19 0.19 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v7-veins-4" d="M0.23 0 L0.89 0 M0.23 0 L0.52 0.32 M0.23 0 L0.5 -0.28 M0.23 0 L0.22 0.21 M0.23 0 L0.24 -0.2"/>
    <path id="v7-leaf-5" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.19 -0.19 L0.23 -0.26 L0.34 -0.16 L0.38 -0.17 L0.48 -0.38 L0.6 -0.38 L0.5 -0.12 L0.53 -0.08 L0.82 -0.12 L1.05 0 L0.82 0.12 L0.53 0.09 L0.5 0.12 L0.58 0.35 L0.47 0.35 L0.38 0.17 L0.34 0.16 L0.24 0.25 L0.2 0.18 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v7-veins-5" d="M0.23 0 L0.91 0 M0.23 0 L0.52 0.32 M0.23 0 L0.53 -0.34 M0.23 0 L0.23 0.2 M0.23 0 L0.22 -0.22"/>
    <linearGradient id="v7-shade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#000" stop-opacity="0.42"/>
      <stop offset="0.4" stop-color="#000" stop-opacity="0.06"/>
      <stop offset="0.75" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.18"/>
    </linearGradient>
    <linearGradient id="v7-under" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0.45" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.22"/>
    </linearGradient>
    <radialGradient id="v7-sheen" cx="0.45" cy="0.3" r="0.55">
      <stop offset="0" stop-color="#f4f6dc" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#f4f6dc" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- Soft shadows under the stems -->
  <g fill="none" stroke="#000" stroke-opacity="0.22" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 3)">
    <path d="M95.7 262 Q102.4 251.9 106.2 247.1 Q109.9 242.3 113.2 237.2 Q116.5 232.1 118.9 226.5 Q121.4 221 122.5 215 Q123.7 209 123.8 203 Q124 196.9 123.8 190.8 Q123.6 184.8 123.5 178.7 Q123.5 172.6 124.9 166.7 Q126.3 160.8 128.3 155.1 Q130.3 149.3 133 143.9 Q135.7 138.4 138.3 133 L140.9 127.5" stroke-width="7.8"/>
    <path d="M123.7 209 Q131.1 201.3 134.7 197.3 Q138.3 193.4 142.5 190.1 Q146.8 186.7 151.1 183.6 Q155.5 180.5 159.6 177.1 Q163.7 173.7 167.3 169.6 Q170.8 165.6 173.8 161.1 Q176.9 156.7 179 151.8 Q181.1 146.9 182.9 141.8 Q184.6 136.7 184.1 131.4 Q183.6 126.1 181.3 121.2 L179.1 116.3" stroke-width="2.1"/>
    <path d="M166.3 183.6 Q175.7 179.2 180.7 177.6 Q185.6 176 189.4 172.4 L193.2 168.9" stroke-width="1.7"/>
    <path d="M198.7 179.6 Q207.2 173.7 209.4 169 Q211.6 164.3 212.5 159.2 L213.4 154.1" stroke-width="1.7"/>
    <path d="M124 196.9 Q132.9 189.7 138.2 187.2 Q143.4 184.8 149.1 184 Q154.8 183.2 160.6 183.4 Q166.3 183.6 172.1 184.2 Q177.8 184.9 183.5 185.5 Q189.2 186.1 194 182.9 Q198.7 179.6 201.9 174.8 Q205.1 170 206.8 164.5 L208.5 159" stroke-width="2.2"/>
    <path d="M123.6 184.8 Q132.2 178.6 136.8 176.1 Q141.5 173.6 146.3 171.4 Q151.2 169.3 156.2 167.5 Q161.1 165.6 166.3 164.5 Q171.5 163.4 176.7 163 Q182 162.7 186.1 159.3 Q190.1 155.9 192.3 151.1 Q194.5 146.2 194.4 140.9 Q194.3 135.6 192.7 130.6 L191 125.6" stroke-width="1.9"/>
    <path d="M123.5 172.6 Q128.5 163.9 131.7 159.9 Q134.8 156 138.8 152.9 Q142.8 149.8 147.2 147.5 Q151.7 145.2 156.1 142.8 Q160.6 140.4 164.9 137.7 Q169.2 135.1 173 131.9 Q176.9 128.6 180.5 125.1 Q184.1 121.6 185.3 116.7 Q186.5 111.8 185.4 106.9 Q184.2 102 181.6 97.7 L178.9 93.4" stroke-width="2.5"/>
    <path d="M140.9 127.5 Q151.6 126.8 156.9 126.4 Q162.2 126 167.5 125.4 Q172.8 124.9 178 123.7 Q183.1 122.5 185.5 117.7 Q187.8 112.9 187.2 107.6 Q186.5 102.4 183.4 98.1 L180.2 93.8" stroke-width="1.9"/>
    <path d="M157.7 81.7 Q165.9 78.6 170.2 77.6 Q174.5 76.5 178.9 75.9 L183.2 75.3" stroke-width="1.7"/>
    <path d="M140.9 127.5 Q145.4 118.8 147.4 114.3 Q149.4 109.8 150.8 105.2 Q152.3 100.5 153.7 95.8 Q155.1 91.1 156.4 86.4 Q157.7 81.7 159.4 77.1 Q161.1 72.5 163.4 68.2 Q165.6 63.8 168.7 60 L171.8 56.3" stroke-width="2.2"/>
  </g>
  <!-- Trailing shoots: green-brown, with a thin highlight -->
  <g fill="none" stroke="hsl(68 22% 21%)" stroke-linecap="round" stroke-linejoin="round">
    <path d="M123.7 209 Q131.1 201.3 134.7 197.3 Q138.3 193.4 142.5 190.1 Q146.8 186.7 151.1 183.6 Q155.5 180.5 159.6 177.1 Q163.7 173.7 167.3 169.6 Q170.8 165.6 173.8 161.1 Q176.9 156.7 179 151.8 Q181.1 146.9 182.9 141.8 Q184.6 136.7 184.1 131.4 Q183.6 126.1 181.3 121.2 L179.1 116.3" stroke-width="1.4"/>
    <path d="M166.3 183.6 Q175.7 179.2 180.7 177.6 Q185.6 176 189.4 172.4 L193.2 168.9" stroke-width="1"/>
    <path d="M198.7 179.6 Q207.2 173.7 209.4 169 Q211.6 164.3 212.5 159.2 L213.4 154.1" stroke-width="1"/>
    <path d="M124 196.9 Q132.9 189.7 138.2 187.2 Q143.4 184.8 149.1 184 Q154.8 183.2 160.6 183.4 Q166.3 183.6 172.1 184.2 Q177.8 184.9 183.5 185.5 Q189.2 186.1 194 182.9 Q198.7 179.6 201.9 174.8 Q205.1 170 206.8 164.5 L208.5 159" stroke-width="1.5"/>
    <path d="M123.6 184.8 Q132.2 178.6 136.8 176.1 Q141.5 173.6 146.3 171.4 Q151.2 169.3 156.2 167.5 Q161.1 165.6 166.3 164.5 Q171.5 163.4 176.7 163 Q182 162.7 186.1 159.3 Q190.1 155.9 192.3 151.1 Q194.5 146.2 194.4 140.9 Q194.3 135.6 192.7 130.6 L191 125.6" stroke-width="1.3"/>
    <path d="M123.5 172.6 Q128.5 163.9 131.7 159.9 Q134.8 156 138.8 152.9 Q142.8 149.8 147.2 147.5 Q151.7 145.2 156.1 142.8 Q160.6 140.4 164.9 137.7 Q169.2 135.1 173 131.9 Q176.9 128.6 180.5 125.1 Q184.1 121.6 185.3 116.7 Q186.5 111.8 185.4 106.9 Q184.2 102 181.6 97.7 L178.9 93.4" stroke-width="1.8"/>
    <path d="M140.9 127.5 Q151.6 126.8 156.9 126.4 Q162.2 126 167.5 125.4 Q172.8 124.9 178 123.7 Q183.1 122.5 185.5 117.7 Q187.8 112.9 187.2 107.6 Q186.5 102.4 183.4 98.1 L180.2 93.8" stroke-width="1.3"/>
    <path d="M157.7 81.7 Q165.9 78.6 170.2 77.6 Q174.5 76.5 178.9 75.9 L183.2 75.3" stroke-width="1.1"/>
    <path d="M140.9 127.5 Q145.4 118.8 147.4 114.3 Q149.4 109.8 150.8 105.2 Q152.3 100.5 153.7 95.8 Q155.1 91.1 156.4 86.4 Q157.7 81.7 159.4 77.1 Q161.1 72.5 163.4 68.2 Q165.6 63.8 168.7 60 L171.8 56.3" stroke-width="1.5"/>
  </g>
  <g fill="none" stroke="hsl(70 25% 40%)" stroke-opacity="0.45" stroke-linecap="round" transform="translate(-0.4 -0.3)">
    <path d="M123.7 209 Q131.1 201.3 134.7 197.3 Q138.3 193.4 142.5 190.1 Q146.8 186.7 151.1 183.6 Q155.5 180.5 159.6 177.1 Q163.7 173.7 167.3 169.6 Q170.8 165.6 173.8 161.1 Q176.9 156.7 179 151.8 Q181.1 146.9 182.9 141.8 Q184.6 136.7 184.1 131.4 Q183.6 126.1 181.3 121.2 L179.1 116.3" stroke-width="0.4"/>
    <path d="M166.3 183.6 Q175.7 179.2 180.7 177.6 Q185.6 176 189.4 172.4 L193.2 168.9" stroke-width="0.3"/>
    <path d="M198.7 179.6 Q207.2 173.7 209.4 169 Q211.6 164.3 212.5 159.2 L213.4 154.1" stroke-width="0.3"/>
    <path d="M124 196.9 Q132.9 189.7 138.2 187.2 Q143.4 184.8 149.1 184 Q154.8 183.2 160.6 183.4 Q166.3 183.6 172.1 184.2 Q177.8 184.9 183.5 185.5 Q189.2 186.1 194 182.9 Q198.7 179.6 201.9 174.8 Q205.1 170 206.8 164.5 L208.5 159" stroke-width="0.4"/>
    <path d="M123.6 184.8 Q132.2 178.6 136.8 176.1 Q141.5 173.6 146.3 171.4 Q151.2 169.3 156.2 167.5 Q161.1 165.6 166.3 164.5 Q171.5 163.4 176.7 163 Q182 162.7 186.1 159.3 Q190.1 155.9 192.3 151.1 Q194.5 146.2 194.4 140.9 Q194.3 135.6 192.7 130.6 L191 125.6" stroke-width="0.4"/>
    <path d="M123.5 172.6 Q128.5 163.9 131.7 159.9 Q134.8 156 138.8 152.9 Q142.8 149.8 147.2 147.5 Q151.7 145.2 156.1 142.8 Q160.6 140.4 164.9 137.7 Q169.2 135.1 173 131.9 Q176.9 128.6 180.5 125.1 Q184.1 121.6 185.3 116.7 Q186.5 111.8 185.4 106.9 Q184.2 102 181.6 97.7 L178.9 93.4" stroke-width="0.5"/>
    <path d="M140.9 127.5 Q151.6 126.8 156.9 126.4 Q162.2 126 167.5 125.4 Q172.8 124.9 178 123.7 Q183.1 122.5 185.5 117.7 Q187.8 112.9 187.2 107.6 Q186.5 102.4 183.4 98.1 L180.2 93.8" stroke-width="0.4"/>
    <path d="M157.7 81.7 Q165.9 78.6 170.2 77.6 Q174.5 76.5 178.9 75.9 L183.2 75.3" stroke-width="0.3"/>
    <path d="M140.9 127.5 Q145.4 118.8 147.4 114.3 Q149.4 109.8 150.8 105.2 Q152.3 100.5 153.7 95.8 Q155.1 91.1 156.4 86.4 Q157.7 81.7 159.4 77.1 Q161.1 72.5 163.4 68.2 Q165.6 63.8 168.7 60 L171.8 56.3" stroke-width="0.4"/>
  </g>
  <!-- Woody trunks: tapering, shaded round, with streaky bark -->
  <g fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M95.7 262 Q102.4 251.9 106.2 247.1 Q109.9 242.3 113.2 237.2 Q116.5 232.1 118.9 226.5 Q121.4 221 122.5 215 Q123.7 209 123.8 203 Q124 196.9 123.8 190.8 Q123.6 184.8 123.5 178.7 Q123.5 172.6 124.9 166.7 Q126.3 160.8 128.3 155.1 Q130.3 149.3 133 143.9 Q135.7 138.4 138.3 133 L140.9 127.5" stroke="hsl(30 14% 19%)" stroke-width="3.2"/>
    <path d="M95.7 262 Q102.4 251.9 106.2 247.1 Q109.9 242.3 113.2 237.2 Q116.5 232.1 118.9 226.5 Q121.4 221 122.5 215 Q123.7 209 123.8 203 Q124 196.9 123.8 190.8 Q123.6 184.8 123.5 178.7 Q123.5 172.6 124.9 166.7 L126.3 160.8" stroke="hsl(30 14% 19%)" stroke-width="5.3"/>
    <path d="M95.7 262 Q102.4 251.9 106.2 247.1 Q109.9 242.3 113.2 237.2 Q116.5 232.1 118.9 226.5 Q121.4 221 122.5 215 L123.7 209" stroke="hsl(30 14% 19%)" stroke-width="7.1"/>
    <path d="M95.7 262 Q102.4 251.9 106.2 247.1 Q109.9 242.3 113.2 237.2 Q116.5 232.1 118.9 226.5 Q121.4 221 122.5 215 Q123.7 209 123.8 203 Q124 196.9 123.8 190.8 Q123.6 184.8 123.5 178.7 Q123.5 172.6 124.9 166.7 Q126.3 160.8 128.3 155.1 Q130.3 149.3 133 143.9 Q135.7 138.4 138.3 133 L140.9 127.5" stroke="#000" stroke-opacity="0.28" stroke-width="1.1" transform="translate(0.7 0.4)"/>
    <path d="M95.7 262 Q102.4 251.9 106.2 247.1 Q109.9 242.3 113.2 237.2 Q116.5 232.1 118.9 226.5 Q121.4 221 122.5 215 Q123.7 209 123.8 203 Q124 196.9 123.8 190.8 Q123.6 184.8 123.5 178.7 Q123.5 172.6 124.9 166.7 L126.3 160.8" stroke="#000" stroke-opacity="0.28" stroke-width="1.9" transform="translate(1.2 0.6)"/>
    <path d="M95.7 262 Q102.4 251.9 106.2 247.1 Q109.9 242.3 113.2 237.2 Q116.5 232.1 118.9 226.5 Q121.4 221 122.5 215 L123.7 209" stroke="#000" stroke-opacity="0.28" stroke-width="2.5" transform="translate(1.6 0.8)"/>
    <path d="M95.7 262 Q102.4 251.9 106.2 247.1 Q109.9 242.3 113.2 237.2 Q116.5 232.1 118.9 226.5 Q121.4 221 122.5 215 Q123.7 209 123.8 203 Q124 196.9 123.8 190.8 Q123.6 184.8 123.5 178.7 Q123.5 172.6 124.9 166.7 Q126.3 160.8 128.3 155.1 Q130.3 149.3 133 143.9 Q135.7 138.4 138.3 133 L140.9 127.5" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="0.6" transform="translate(-0.7 -0.3)"/>
    <path d="M95.7 262 Q102.4 251.9 106.2 247.1 Q109.9 242.3 113.2 237.2 Q116.5 232.1 118.9 226.5 Q121.4 221 122.5 215 Q123.7 209 123.8 203 Q124 196.9 123.8 190.8 Q123.6 184.8 123.5 178.7 Q123.5 172.6 124.9 166.7 L126.3 160.8" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="1" transform="translate(-1.2 -0.5)"/>
    <path d="M95.7 262 Q102.4 251.9 106.2 247.1 Q109.9 242.3 113.2 237.2 Q116.5 232.1 118.9 226.5 Q121.4 221 122.5 215 L123.7 209" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="1.3" transform="translate(-1.6 -0.7)"/>
    <path d="M95.7 262 Q102.4 251.9 106.2 247.1 Q109.9 242.3 113.2 237.2 Q116.5 232.1 118.9 226.5 Q121.4 221 122.5 215 Q123.7 209 123.8 203 Q124 196.9 123.8 190.8 Q123.6 184.8 123.5 178.7 Q123.5 172.6 124.9 166.7 L126.3 160.8" stroke="hsl(30 12% 9%)" stroke-opacity="0.55" stroke-width="1.4" stroke-dasharray="4.9 2.6 5.4 4.5"/>
    <path d="M95.7 262 Q102.4 251.9 106.2 247.1 Q109.9 242.3 113.2 237.2 Q116.5 232.1 118.9 226.5 Q121.4 221 122.5 215 Q123.7 209 123.8 203 Q124 196.9 123.8 190.8 Q123.6 184.8 123.5 178.7 Q123.5 172.6 124.9 166.7 L126.3 160.8" stroke="hsl(36 14% 38%)" stroke-opacity="0.35" stroke-width="0.8" stroke-dasharray="3.1 8.6" transform="translate(-0.8 0)"/>
  </g>
  <!-- Fine hairy rootlets -->
  <path fill="none" stroke="hsl(30 18% 20%)" stroke-opacity="0.6" stroke-width="0.5" stroke-linecap="round" d="M98.1 256.8 l-4.4 -3.4 M96 262 l-3.4 -3.7 M98.4 259.4 l2.1 1.3 M99.8 252.5 l-1.9 -0.7 M104.5 246.8 l2.2 3.3 M106.2 246.1 l-4.2 -3.4 M102.8 250.8 l2.1 2.9 M109.2 244 l-5 -2.3 M112.8 236.9 l-2.1 -1 M114.8 233.5 l-3.5 -2.8 M113.7 232.4 l-3.1 -3.3 M110.9 232.8 l-3.5 -1.6 M118.2 229.5 l3.7 2.1 M121.2 226.6 l2.3 1.2 M119.3 226.5 l2.7 2 M118.3 231 l2.4 1.8 M123.2 214.3 l4.8 0.9 M122.5 213 l4.7 -0.4 M123 214.5 l-4.6 -1.8 M123.1 219.7 l4.2 1 M123.9 205.7 l3.5 -0.1 M123.8 208.8 l2.6 0.5 M123.7 208.9 l-3.2 -0.8 M123.9 206.4 l-2.7 -0.1 M123.6 187.2 l3 0.7 M123.9 192.8 l-3.6 0.8 M123.7 195.2 l-4 0.9 M123.8 194.1 l3.8 0.7 M123.5 175.8 l2.1 -0.1 M123.5 182.3 l-3.9 0.1 M123.6 182.6 l-3.4 -1.1 M123.6 177.8 l-3.4 0.2 M123.9 169.1 l-2.8 -1 M125.2 166.2 l2.6 -0.3 M125.7 167.5 l3.8 0.4 M125.6 165.8 l1.9 1.2 M128.3 150.9 l-1.6 -1.4 M126.9 159.8 l-2.9 -1.5 M128.1 151.2 l2.9 1.8 M127 149.7 l3.6 0.3 M132.2 142.1 l-2.1 -2 M131.3 149.2 l1.7 1.2 M135.1 141.4 l2 1.3 M133.2 145.4 l-2.1 -2.2 M136.9 130.9 l-1.8 -1.4 M139.1 134 l1.3 0.4 M140.8 137.3 l-1.3 -0.6 M137 132.9 l-2.7 -1.6"/>
  <!-- Tendrils -->
  <g fill="none" stroke="hsl(68 22% 24%)" stroke-width="0.75" stroke-linecap="round">
    <path d="M179.1 116.3 Q178.4 113.8 178.5 112.6 Q178.5 111.4 178.8 110.3 Q179.2 109.2 179.8 108.3 Q180.5 107.5 181.4 107 Q182.3 106.5 183.2 106.4 Q184.1 106.4 184.9 106.7 Q185.7 107.1 186.1 107.8 Q186.6 108.4 186.6 109.1 Q186.6 109.9 186.2 110.4 Q185.7 110.9 185.2 111 Q184.6 111.1 184.2 110.9 Q183.8 110.6 183.7 110.2 Q183.6 109.7 183.8 109.5 L184 109.2"/>
    <path d="M193.2 168.9 Q194.7 166.8 195.1 165.6 Q195.6 164.5 195.6 163.3 Q195.7 162.2 195.4 161.1 Q195.1 160.1 194.5 159.3 Q193.8 158.5 193 158.1 Q192.1 157.7 191.3 157.8 Q190.4 157.8 189.8 158.3 Q189.1 158.7 188.9 159.4 Q188.6 160.1 188.8 160.7 Q189 161.3 189.5 161.7 Q189.9 162 190.4 161.9 Q190.9 161.8 191.2 161.5 Q191.4 161.1 191.3 160.7 L191.2 160.4"/>
    <path d="M213.4 154.1 Q213.3 151.5 213 150.3 Q212.7 149.1 212 148.1 Q211.4 147.2 210.5 146.5 Q209.7 145.9 208.7 145.6 Q207.7 145.4 206.8 145.6 Q205.9 145.8 205.2 146.3 Q204.6 146.9 204.3 147.7 Q204.1 148.4 204.3 149.1 Q204.5 149.8 205 150.2 Q205.5 150.6 206.1 150.5 Q206.7 150.5 207 150.1 Q207.4 149.8 207.3 149.3 Q207.3 148.9 207 148.7 L206.8 148.4"/>
    <path d="M208.5 159 Q208.8 156.4 208.6 155.2 Q208.5 154 208 152.9 Q207.5 151.9 206.7 151.1 Q205.9 150.4 205 150 Q204 149.6 203.1 149.7 Q202.2 149.8 201.4 150.2 Q200.7 150.7 200.4 151.4 Q200 152.1 200.1 152.9 Q200.2 153.6 200.7 154 Q201.2 154.5 201.8 154.5 Q202.3 154.5 202.7 154.2 Q203.1 153.9 203.2 153.5 Q203.2 153 202.9 152.8 L202.7 152.5"/>
    <path d="M191 125.6 Q189.7 123.3 188.8 122.5 Q188 121.6 187 121 Q185.9 120.5 184.9 120.3 Q183.8 120.2 182.8 120.4 Q181.8 120.7 181.1 121.3 Q180.4 121.9 180.1 122.7 Q179.8 123.5 179.9 124.3 Q180.1 125.1 180.6 125.6 Q181.1 126.1 181.7 126.2 Q182.4 126.3 182.9 126 Q183.3 125.6 183.5 125.2 Q183.6 124.7 183.4 124.3 Q183.2 123.9 182.8 123.9 L182.4 123.8"/>
    <path d="M178.9 93.4 Q177.1 91.6 176.1 90.9 Q175.1 90.2 173.9 89.9 Q172.8 89.6 171.7 89.7 Q170.7 89.8 169.8 90.3 Q168.9 90.7 168.3 91.5 Q167.8 92.2 167.6 93.1 Q167.5 94 167.8 94.7 Q168.2 95.4 168.8 95.8 Q169.4 96.2 170 96.1 Q170.7 96.1 171.1 95.7 Q171.5 95.2 171.5 94.7 Q171.5 94.2 171.2 93.9 Q170.9 93.6 170.5 93.6 L170.2 93.6"/>
    <path d="M180.2 93.8 Q178.3 92 177.2 91.5 Q176.1 90.9 175 90.7 Q173.8 90.5 172.8 90.6 Q171.7 90.8 170.9 91.4 Q170 91.9 169.5 92.7 Q169 93.5 169 94.4 Q168.9 95.2 169.3 95.9 Q169.7 96.6 170.3 97 Q170.9 97.3 171.6 97.2 Q172.2 97.1 172.6 96.6 Q173 96.2 172.9 95.7 Q172.9 95.2 172.6 94.9 Q172.3 94.6 171.9 94.6 L171.5 94.7"/>
    <path d="M183.2 75.3 Q185.7 74.5 186.7 73.8 Q187.7 73.1 188.5 72.2 Q189.2 71.3 189.6 70.3 Q189.9 69.3 189.9 68.3 Q189.8 67.3 189.3 66.5 Q188.9 65.6 188.1 65.2 Q187.4 64.7 186.6 64.7 Q185.8 64.7 185.2 65.1 Q184.6 65.5 184.4 66.1 Q184.2 66.7 184.4 67.3 Q184.6 67.8 185.1 68 Q185.5 68.3 185.9 68.1 Q186.3 68 186.5 67.6 L186.6 67.3"/>
    <path d="M171.8 56.3 Q173 54 173.3 52.8 Q173.6 51.6 173.6 50.4 Q173.5 49.3 173.1 48.3 Q172.6 47.3 171.9 46.6 Q171.2 45.9 170.3 45.6 Q169.4 45.3 168.5 45.5 Q167.7 45.6 167.1 46.2 Q166.5 46.7 166.3 47.4 Q166.2 48.1 166.4 48.7 Q166.7 49.3 167.2 49.5 Q167.7 49.8 168.2 49.7 Q168.7 49.5 168.9 49.1 Q169.1 48.7 169 48.4 L168.8 48.1"/>
  </g>
  <!-- Ivy leaves: soft shadow, own colour, shading, sheen, faint veins, decay spots -->
  <g transform="translate(138.3 193.4) rotate(22.1)">
    <path d="M0 0 L3.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.7 0) scale(16.5)">
      <use href="#v7-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-3" fill="hsl(91.3 29.7% 16.3%)"/>
      <use href="#v7-leaf-3" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-3" fill="url(#v7-under)"/>
      <use href="#v7-leaf-3" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.033" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(146.8 186.7) rotate(-78.6)">
    <path d="M0 0 L3.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.7 0) scale(20.8)">
      <use href="#v7-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-2" fill="hsl(29.1 30.1% 22.2%)"/>
      <use href="#v7-leaf-2" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-2" fill="url(#v7-under)"/>
      <use href="#v7-leaf-2" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.026000000000000002" stroke-linecap="round"/>
      <circle cx="0.457" cy="-0.077" r="0.054000000000000006" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.589" cy="0.157" r="0.073" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.657" cy="-0.015" r="0.042" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.369" cy="0.13699999999999998" r="0.052000000000000005" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(155.5 180.5) rotate(13.2)">
    <path d="M0 0 L5.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.4 0) scale(14.6)">
      <use href="#v7-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-2" fill="hsl(94.1 26.2% 20.5%)"/>
      <use href="#v7-leaf-2" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-2" fill="url(#v7-under)"/>
      <use href="#v7-leaf-2" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.038" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(163.7 173.7) rotate(-107.8)">
    <path d="M0 0 L4.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.9 0) scale(18.2)">
      <use href="#v7-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-0" fill="hsl(59.6 36.5% 26.1%)"/>
      <use href="#v7-leaf-0" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-0" fill="url(#v7-under)"/>
      <use href="#v7-leaf-0" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
      <circle cx="0.27899999999999997" cy="-0.11" r="0.081" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.369" cy="0.195" r="0.075" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(170.8 165.6) rotate(1.5)">
    <path d="M0 0 L3.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.8 0) scale(17)">
      <use href="#v7-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-2" fill="hsl(22.9 42.2% 24.6%)"/>
      <use href="#v7-leaf-2" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-2" fill="url(#v7-under)"/>
      <use href="#v7-leaf-2" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.032" stroke-linecap="round"/>
      <circle cx="0.5429999999999999" cy="0.017" r="0.043" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.28" cy="0.19399999999999998" r="0.087" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.46399999999999997" cy="0.115" r="0.046" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.28800000000000003" cy="-0.141" r="0.065" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(181.1 146.9) rotate(-8)">
    <path d="M0 0 L4.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.7 0) scale(12.5)">
      <use href="#v7-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-0" fill="hsl(32.7 32.9% 28.8%)"/>
      <use href="#v7-leaf-0" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-0" fill="url(#v7-under)"/>
      <use href="#v7-leaf-0" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.044000000000000004" stroke-linecap="round"/>
      <circle cx="0.617" cy="-0.065" r="0.071" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.616" cy="-0.01" r="0.08" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.518" cy="-0.18100000000000002" r="0.07200000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.45799999999999996" cy="0.086" r="0.052000000000000005" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(184.6 136.7) rotate(-109.1)">
    <path d="M0 0 L4.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.9 0) scale(15.6)">
      <use href="#v7-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-1" fill="hsl(36.9 29.3% 26%)"/>
      <use href="#v7-leaf-1" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-1" fill="url(#v7-under)"/>
      <use href="#v7-leaf-1" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
      <circle cx="0.317" cy="0.21" r="0.077" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.358" cy="-0.12300000000000001" r="0.05" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.5589999999999999" cy="-0.18600000000000003" r="0.06" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.316" cy="0.105" r="0.06" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(183.6 126.1) rotate(-52.4)">
    <path d="M0 0 L6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(6 0) scale(16.7)">
      <use href="#v7-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-0" fill="hsl(62.5 37.6% 36.4%)"/>
      <use href="#v7-leaf-0" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-0" fill="url(#v7-under)"/>
      <use href="#v7-leaf-0" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.033" stroke-linecap="round"/>
      <circle cx="0.271" cy="-0.18100000000000002" r="0.053" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.545" cy="-0.083" r="0.06" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(179.1 116.3) rotate(-155.5)">
    <path d="M0 0 L5.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.4 0) scale(10.7)">
      <use href="#v7-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-1" fill="hsl(26.3 42.7% 29.5%)"/>
      <use href="#v7-leaf-1" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-1" fill="url(#v7-under)"/>
      <use href="#v7-leaf-1" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.051" stroke-linecap="round"/>
      <circle cx="0.42700000000000005" cy="-0.17800000000000002" r="0.07" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.385" cy="-0.127" r="0.065" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.57" cy="0.174" r="0.071" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.361" cy="0.237" r="0.078" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(143.4 184.8) rotate(13.3)">
    <path d="M0 0 L4.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.3 0) scale(15.1)">
      <use href="#v7-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-5" fill="hsl(102 34.4% 26.9%)"/>
      <use href="#v7-leaf-5" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-5" fill="url(#v7-under)"/>
      <use href="#v7-leaf-5" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.036000000000000004" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(154.8 183.2) rotate(-46.9)">
    <path d="M0 0 L4.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.7 0) scale(12.5)">
      <use href="#v7-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-0" fill="hsl(104.3 40% 26.5%)"/>
      <use href="#v7-leaf-0" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-0" fill="url(#v7-under)"/>
      <use href="#v7-leaf-0" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.044000000000000004" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(166.3 183.6) rotate(65.9)">
    <path d="M0 0 L4.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.5 0) scale(12.7)">
      <use href="#v7-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-0" fill="hsl(36.2 39.2% 21%)"/>
      <use href="#v7-leaf-0" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-0" fill="url(#v7-under)"/>
      <use href="#v7-leaf-0" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.043" stroke-linecap="round"/>
      <circle cx="0.5820000000000001" cy="0.122" r="0.048" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.32299999999999995" cy="0.151" r="0.046" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.299" cy="0.155" r="0.07400000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.48100000000000004" cy="0.10400000000000001" r="0.057" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(185.6 176) rotate(26.8)">
    <path d="M0 0 L5.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.1 0) scale(20.4)">
      <use href="#v7-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-4" fill="hsl(84.8 45.4% 15.9%)"/>
      <use href="#v7-leaf-4" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-4" fill="url(#v7-under)"/>
      <use href="#v7-leaf-4" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027000000000000003" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(193.2 168.9) rotate(-81.4)">
    <path d="M0 0 L3.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.2 0) scale(13.4)">
      <use href="#v7-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-4" fill="hsl(102 27.5% 26.4%)"/>
      <use href="#v7-leaf-4" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-4" fill="url(#v7-under)"/>
      <use href="#v7-leaf-4" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.040999999999999995" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(189.2 186.1) rotate(60.1)">
    <path d="M0 0 L5.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.6 0) scale(10.9)">
      <use href="#v7-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-2" fill="hsl(37.3 33% 22.9%)"/>
      <use href="#v7-leaf-2" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-2" fill="url(#v7-under)"/>
      <use href="#v7-leaf-2" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.051" stroke-linecap="round"/>
      <circle cx="0.545" cy="-0.172" r="0.071" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.523" cy="0.065" r="0.08800000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.501" cy="-0.068" r="0.055" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.35100000000000003" cy="0.146" r="0.073" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(211.6 164.3) rotate(4.7)">
    <path d="M0 0 L4.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.9 0) scale(18.7)">
      <use href="#v7-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-0" fill="hsl(86.5 28.1% 18.3%)"/>
      <use href="#v7-leaf-0" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-0" fill="url(#v7-under)"/>
      <use href="#v7-leaf-0" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.028999999999999998" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(205.1 170) rotate(7.9)">
    <path d="M0 0 L3.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.4 0) scale(13.1)">
      <use href="#v7-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-2" fill="hsl(99.4 39% 20.9%)"/>
      <use href="#v7-leaf-2" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-2" fill="url(#v7-under)"/>
      <use href="#v7-leaf-2" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.042" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(151.2 169.3) rotate(-97.3)">
    <path d="M0 0 L4.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.7 0) scale(20.3)">
      <use href="#v7-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-1" fill="hsl(111.6 32% 26.9%)"/>
      <use href="#v7-leaf-1" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-1" fill="url(#v7-under)"/>
      <use href="#v7-leaf-1" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027000000000000003" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(190.1 155.9) rotate(-89.1)">
    <path d="M0 0 L3.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.7 0) scale(11.9)">
      <use href="#v7-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-3" fill="hsl(34.8 32.2% 19.8%)"/>
      <use href="#v7-leaf-3" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-3" fill="url(#v7-under)"/>
      <use href="#v7-leaf-3" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.046" stroke-linecap="round"/>
      <circle cx="0.31" cy="-0.22399999999999998" r="0.055" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.389" cy="0.215" r="0.047" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.426" cy="0.192" r="0.062" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.33299999999999996" cy="0.165" r="0.09" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(134.8 156) rotate(12.1)">
    <path d="M0 0 L3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3 0) scale(17.9)">
      <use href="#v7-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-2" fill="hsl(97.4 41.4% 27.2%)"/>
      <use href="#v7-leaf-2" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-2" fill="url(#v7-under)"/>
      <use href="#v7-leaf-2" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.031" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(142.8 149.8) rotate(-91.4)">
    <path d="M0 0 L4.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.5 0) scale(16)">
      <use href="#v7-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-3" fill="hsl(101 34.1% 25.8%)"/>
      <use href="#v7-leaf-3" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-3" fill="url(#v7-under)"/>
      <use href="#v7-leaf-3" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.034" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(151.7 145.2) rotate(30.6)">
    <path d="M0 0 L4.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.3 0) scale(18.1)">
      <use href="#v7-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-3" fill="hsl(108.3 43.6% 22.4%)"/>
      <use href="#v7-leaf-3" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-3" fill="url(#v7-under)"/>
      <use href="#v7-leaf-3" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(160.6 140.4) rotate(-87.2)">
    <path d="M0 0 L5.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.8 0) scale(20.8)">
      <use href="#v7-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-1" fill="hsl(97.6 34.7% 22.5%)"/>
      <use href="#v7-leaf-1" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-1" fill="url(#v7-under)"/>
      <use href="#v7-leaf-1" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.026000000000000002" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(169.2 135.1) rotate(36.7)">
    <path d="M0 0 L4.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.6 0) scale(18.3)">
      <use href="#v7-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-4" fill="hsl(89 42.5% 20.9%)"/>
      <use href="#v7-leaf-4" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-4" fill="url(#v7-under)"/>
      <use href="#v7-leaf-4" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(176.9 128.6) rotate(-106.7)">
    <path d="M0 0 L4.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.7 0) scale(14.5)">
      <use href="#v7-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-1" fill="hsl(91.2 45.3% 22.4%)"/>
      <use href="#v7-leaf-1" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-1" fill="url(#v7-under)"/>
      <use href="#v7-leaf-1" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.038" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(184.1 121.6) rotate(-3.3)">
    <path d="M0 0 L4.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.3 0) scale(14.5)">
      <use href="#v7-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-3" fill="hsl(61.3 42.7% 28.8%)"/>
      <use href="#v7-leaf-3" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-3" fill="url(#v7-under)"/>
      <use href="#v7-leaf-3" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.038" stroke-linecap="round"/>
      <circle cx="0.635" cy="-0.107" r="0.055" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.561" cy="-0.17300000000000001" r="0.061" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(184.2 102) rotate(-61.6)">
    <path d="M0 0 L3.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.4 0) scale(10.7)">
      <use href="#v7-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-5" fill="hsl(24.2 38% 18.2%)"/>
      <use href="#v7-leaf-5" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-5" fill="url(#v7-under)"/>
      <use href="#v7-leaf-5" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.052000000000000005" stroke-linecap="round"/>
      <circle cx="0.389" cy="0.102" r="0.083" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.314" cy="0.172" r="0.054000000000000006" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.596" cy="0.075" r="0.055999999999999994" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.5" cy="-0.151" r="0.046" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(130.3 149.3) rotate(-2)">
    <path d="M0 0 L6.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(6.6 0) scale(20.5)">
      <use href="#v7-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-2" fill="hsl(102.9 27.9% 24.2%)"/>
      <use href="#v7-leaf-2" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-2" fill="url(#v7-under)"/>
      <use href="#v7-leaf-2" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027000000000000003" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(135.7 138.4) rotate(-117.1)">
    <path d="M0 0 L4.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.9 0) scale(18.5)">
      <use href="#v7-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-4" fill="hsl(102.9 32.4% 21%)"/>
      <use href="#v7-leaf-4" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-4" fill="url(#v7-under)"/>
      <use href="#v7-leaf-4" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(162.2 126) rotate(59.4)">
    <path d="M0 0 L4.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.1 0) scale(21.3)">
      <use href="#v7-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-4" fill="hsl(50.6 46.1% 34.6%)"/>
      <use href="#v7-leaf-4" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-4" fill="url(#v7-under)"/>
      <use href="#v7-leaf-4" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.026000000000000002" stroke-linecap="round"/>
      <circle cx="0.594" cy="0.036000000000000004" r="0.077" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.23800000000000002" cy="0.201" r="0.081" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(172.8 124.9) rotate(-43.7)">
    <path d="M0 0 L3.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.8 0) scale(18.1)">
      <use href="#v7-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-0" fill="hsl(95.9 34% 16.3%)"/>
      <use href="#v7-leaf-0" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-0" fill="url(#v7-under)"/>
      <use href="#v7-leaf-0" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(183.1 122.5) rotate(52.3)">
    <path d="M0 0 L4.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.3 0) scale(20.1)">
      <use href="#v7-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-3" fill="hsl(92.2 28.4% 17.3%)"/>
      <use href="#v7-leaf-3" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-3" fill="url(#v7-under)"/>
      <use href="#v7-leaf-3" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027000000000000003" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(187.8 112.9) rotate(-135.3)">
    <path d="M0 0 L3.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.9 0) scale(18.2)">
      <use href="#v7-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-4" fill="hsl(104.8 29.5% 21.4%)"/>
      <use href="#v7-leaf-4" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-4" fill="url(#v7-under)"/>
      <use href="#v7-leaf-4" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(186.5 102.4) rotate(-38.1)">
    <path d="M0 0 L3.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.4 0) scale(15.8)">
      <use href="#v7-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-1" fill="hsl(33.7 41% 19.2%)"/>
      <use href="#v7-leaf-1" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-1" fill="url(#v7-under)"/>
      <use href="#v7-leaf-1" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
      <circle cx="0.51" cy="-0.034" r="0.09" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.466" cy="-0.086" r="0.048" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.289" cy="0.068" r="0.078" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.534" cy="-0.05" r="0.064" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(180.2 93.8) rotate(-184.1)">
    <path d="M0 0 L4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4 0) scale(14.1)">
      <use href="#v7-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-5" fill="hsl(54.2 38.3% 30.1%)"/>
      <use href="#v7-leaf-5" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-5" fill="url(#v7-under)"/>
      <use href="#v7-leaf-5" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.039" stroke-linecap="round"/>
      <circle cx="0.644" cy="-0.053" r="0.077" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.607" cy="-0.057999999999999996" r="0.07400000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(140.9 127.5) rotate(-22)">
    <path d="M0 0 L6.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(6.8 0) scale(24.5)">
      <use href="#v7-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-4" fill="hsl(33 35.4% 28.3%)"/>
      <use href="#v7-leaf-4" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-4" fill="url(#v7-under)"/>
      <use href="#v7-leaf-4" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.022000000000000002" stroke-linecap="round"/>
      <circle cx="0.608" cy="0.098" r="0.043" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.32799999999999996" cy="0.215" r="0.087" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.254" cy="-0.192" r="0.076" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.29" cy="0.182" r="0.076" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(149.4 109.8) rotate(-27.2)">
    <path d="M0 0 L3.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.7 0) scale(15.3)">
      <use href="#v7-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-2" fill="hsl(94.2 42.3% 19.1%)"/>
      <use href="#v7-leaf-2" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-2" fill="url(#v7-under)"/>
      <use href="#v7-leaf-2" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.036000000000000004" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(152.3 100.5) rotate(-111.1)">
    <path d="M0 0 L5.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.3 0) scale(12.6)">
      <use href="#v7-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-3" fill="hsl(101.7 45.5% 21.1%)"/>
      <use href="#v7-leaf-3" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-3" fill="url(#v7-under)"/>
      <use href="#v7-leaf-3" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.044000000000000004" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(155.1 91.1) rotate(-21.3)">
    <path d="M0 0 L3.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.4 0) scale(12.3)">
      <use href="#v7-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-1" fill="hsl(29.5 34.4% 23.6%)"/>
      <use href="#v7-leaf-1" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-1" fill="url(#v7-under)"/>
      <use href="#v7-leaf-1" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.045" stroke-linecap="round"/>
      <circle cx="0.41700000000000004" cy="0.192" r="0.08199999999999999" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.302" cy="-0.212" r="0.085" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.22699999999999998" cy="-0.133" r="0.053" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.32899999999999996" cy="0.18600000000000003" r="0.043" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(157.7 81.7) rotate(-111)">
    <path d="M0 0 L5.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.7 0) scale(17.8)">
      <use href="#v7-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-4" fill="hsl(57.3 34.5% 27.9%)"/>
      <use href="#v7-leaf-4" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-4" fill="url(#v7-under)"/>
      <use href="#v7-leaf-4" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.031" stroke-linecap="round"/>
      <circle cx="0.20800000000000002" cy="-0.152" r="0.081" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.188" cy="-0.14400000000000002" r="0.087" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(174.5 76.5) rotate(57.8)">
    <path d="M0 0 L4.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.1 0) scale(17.4)">
      <use href="#v7-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-3" fill="hsl(89.2 29.3% 16.7%)"/>
      <use href="#v7-leaf-3" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-3" fill="url(#v7-under)"/>
      <use href="#v7-leaf-3" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.032" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(183.2 75.3) rotate(-56)">
    <path d="M0 0 L5.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.3 0) scale(10.7)">
      <use href="#v7-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-0" fill="hsl(101.1 26.6% 22.2%)"/>
      <use href="#v7-leaf-0" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-0" fill="url(#v7-under)"/>
      <use href="#v7-leaf-0" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.052000000000000005" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(161.1 72.5) rotate(-31.5)">
    <path d="M0 0 L5.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.4 0) scale(17.5)">
      <use href="#v7-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-0" fill="hsl(93.6 37% 19.9%)"/>
      <use href="#v7-leaf-0" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-0" fill="url(#v7-under)"/>
      <use href="#v7-leaf-0" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.031" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(165.6 63.8) rotate(-124.7)">
    <path d="M0 0 L4.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.2 0) scale(12.5)">
      <use href="#v7-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-5" fill="hsl(91.3 44.7% 15.9%)"/>
      <use href="#v7-leaf-5" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-5" fill="url(#v7-under)"/>
      <use href="#v7-leaf-5" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.044000000000000004" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(171.8 56.3) rotate(20.4)">
    <path d="M0 0 L5.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.8 0) scale(15.9)">
      <use href="#v7-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v7-leaf-1" fill="hsl(90 31.3% 27.3%)"/>
      <use href="#v7-leaf-1" fill="url(#v7-shade)"/>
      <use href="#v7-leaf-1" fill="url(#v7-under)"/>
      <use href="#v7-leaf-1" fill="url(#v7-sheen)"/>
      <use href="#v7-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
    </g>
  </g>
</svg>
`,C3=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 260" width="200" height="260">
  <defs>
    <path id="v8-leaf-0" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.19 -0.19 L0.23 -0.27 L0.34 -0.16 L0.38 -0.17 L0.48 -0.36 L0.59 -0.36 L0.5 -0.12 L0.53 -0.08 L0.76 -0.1 L0.96 0 L0.76 0.1 L0.53 0.09 L0.5 0.12 L0.57 0.33 L0.47 0.33 L0.38 0.17 L0.34 0.16 L0.25 0.23 L0.21 0.17 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v8-veins-0" d="M0.23 0 L0.84 0 M0.23 0 L0.52 0.3 M0.23 0 L0.53 -0.33 M0.23 0 L0.24 0.19 M0.23 0 L0.22 -0.22"/>
    <path id="v8-leaf-1" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.22 -0.16 L0.25 -0.22 L0.34 -0.16 L0.38 -0.17 L0.47 -0.34 L0.58 -0.34 L0.5 -0.12 L0.53 -0.08 L0.78 -0.11 L1 0 L0.78 0.11 L0.53 0.09 L0.5 0.12 L0.55 0.3 L0.46 0.3 L0.38 0.17 L0.34 0.16 L0.23 0.26 L0.19 0.19 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v8-veins-1" d="M0.23 0 L0.87 0 M0.23 0 L0.5 0.27 M0.23 0 L0.52 -0.31 M0.23 0 L0.22 0.22 M0.23 0 L0.25 -0.18"/>
    <path id="v8-leaf-2" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.24 -0.14 L0.27 -0.19 L0.34 -0.16 L0.38 -0.17 L0.47 -0.35 L0.59 -0.36 L0.5 -0.12 L0.53 -0.08 L0.77 -0.11 L0.98 0 L0.77 0.11 L0.53 0.09 L0.5 0.12 L0.6 0.38 L0.48 0.38 L0.38 0.17 L0.34 0.16 L0.24 0.23 L0.21 0.17 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v8-veins-2" d="M0.23 0 L0.86 0 M0.23 0 L0.54 0.35 M0.23 0 L0.53 -0.33 M0.23 0 L0.24 0.19 M0.23 0 L0.27 -0.16"/>
    <path id="v8-leaf-3" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.2 -0.18 L0.24 -0.25 L0.34 -0.16 L0.38 -0.17 L0.47 -0.35 L0.58 -0.35 L0.5 -0.12 L0.53 -0.08 L0.76 -0.1 L0.95 0 L0.76 0.1 L0.53 0.09 L0.5 0.12 L0.58 0.35 L0.47 0.35 L0.38 0.17 L0.34 0.16 L0.27 0.19 L0.24 0.14 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v8-veins-3" d="M0.23 0 L0.84 0 M0.23 0 L0.52 0.32 M0.23 0 L0.52 -0.32 M0.23 0 L0.27 0.16 M0.23 0 L0.23 -0.21"/>
    <path id="v8-leaf-4" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.21 -0.17 L0.25 -0.23 L0.34 -0.16 L0.38 -0.17 L0.47 -0.33 L0.57 -0.33 L0.5 -0.12 L0.53 -0.08 L0.79 -0.11 L1 0 L0.79 0.11 L0.53 0.09 L0.5 0.12 L0.59 0.37 L0.48 0.36 L0.38 0.17 L0.34 0.16 L0.23 0.26 L0.19 0.19 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v8-veins-4" d="M0.23 0 L0.88 0 M0.23 0 L0.53 0.33 M0.23 0 L0.52 -0.3 M0.23 0 L0.22 0.22 M0.23 0 L0.24 -0.19"/>
    <path id="v8-leaf-5" d="M0.21 0 L0.22 -0.04 L0.23 -0.08 L0.24 -0.14 L0.27 -0.19 L0.34 -0.16 L0.38 -0.17 L0.46 -0.29 L0.55 -0.29 L0.5 -0.12 L0.53 -0.08 L0.75 -0.1 L0.95 0 L0.75 0.1 L0.53 0.09 L0.5 0.12 L0.59 0.36 L0.48 0.36 L0.38 0.17 L0.34 0.16 L0.22 0.28 L0.18 0.2 L0.23 0.09 L0.22 0.04 Z"/>
    <path id="v8-veins-5" d="M0.23 0 L0.84 0 M0.23 0 L0.53 0.33 M0.23 0 L0.5 -0.26 M0.23 0 L0.21 0.23 M0.23 0 L0.26 -0.16"/>
    <linearGradient id="v8-shade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#000" stop-opacity="0.42"/>
      <stop offset="0.4" stop-color="#000" stop-opacity="0.06"/>
      <stop offset="0.75" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.18"/>
    </linearGradient>
    <linearGradient id="v8-under" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0.45" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.22"/>
    </linearGradient>
    <radialGradient id="v8-sheen" cx="0.45" cy="0.3" r="0.55">
      <stop offset="0" stop-color="#f4f6dc" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#f4f6dc" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- Soft shadows under the stems -->
  <g fill="none" stroke="#000" stroke-opacity="0.22" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 3)">
    <path d="M96.6 262 Q95.8 248.9 96.6 242.4 Q97.3 235.8 99.3 229.6 Q101.3 223.3 104.6 217.6 Q107.9 212 111.5 206.5 Q115.1 201 117.9 195 Q120.6 189.1 122.2 182.7 Q123.7 176.3 124 169.7 Q124.4 163.2 123.8 156.6 Q123.1 150.1 122.7 143.5 Q122.3 137 122.5 130.4 Q122.7 123.8 124.5 117.5 Q126.3 111.2 129.1 105.3 L131.9 99.3" stroke-width="6.7"/>
    <path d="M39.5 110.4 Q30 106.8 25.2 105.4 Q20.3 104 15.3 103.6 L10.2 103.2" stroke-width="1.8"/>
    <path d="M107.9 212 Q100 204 96.2 199.9 Q92.4 195.7 89.5 190.9 Q86.6 186.1 84.3 181 Q81.9 175.9 79.2 171 Q76.5 166 73.9 161.1 Q71.3 156.1 68.3 151.3 Q65.4 146.5 61.4 142.6 Q57.4 138.6 53.6 134.5 Q49.7 130.4 47 125.5 Q44.2 120.6 41.9 115.5 L39.5 110.4" stroke-width="2.3"/>
    <path d="M115.1 201 Q125.8 199.4 131.1 198.4 Q136.4 197.4 141.6 195.7 Q146.7 193.9 151.5 191.4 Q156.3 188.9 161 186.2 Q165.7 183.6 170.3 180.7 L174.9 177.9" stroke-width="2.7"/>
    <path d="M104.3 111.1 Q108 101.4 108.9 96.3 Q109.9 91.2 110.1 86 L110.4 80.8" stroke-width="1.7"/>
    <path d="M120.6 189.1 Q116.5 178.3 115.4 172.6 Q114.4 166.9 114.7 161.1 Q115.1 155.3 115.2 149.5 Q115.3 143.8 114.3 138.1 Q113.2 132.4 111.5 126.9 Q109.8 121.3 107 116.2 Q104.3 111.1 101.5 106.1 Q98.6 101 96.4 95.7 L94.2 90.3" stroke-width="2.1"/>
    <path d="M123.7 176.3 Q115.6 168 111.2 164.3 Q106.7 160.7 102.6 156.6 Q98.6 152.4 94.9 148 Q91.2 143.5 86.9 139.7 Q82.6 135.9 77.7 132.8 Q72.8 129.7 67.5 127.6 Q62.1 125.4 56.6 123.8 L51.1 122.1" stroke-width="2.3"/>
    <path d="M124.4 163.2 Q130.6 153 133.3 147.7 Q136 142.5 138.8 137.3 Q141.7 132.1 145.3 127.3 Q148.9 122.6 153.5 118.9 Q158.1 115.2 162.5 111.2 L166.9 107.2" stroke-width="1.9"/>
    <path d="M79.3 66.2 Q75.2 57.2 72.4 53.2 Q69.6 49.1 66.7 45.1 L63.8 41.2" stroke-width="1.9"/>
    <path d="M126.3 111.2 Q119.2 102.9 115.8 98.6 Q112.4 94.4 109 90 Q105.6 85.7 101.4 82.2 Q97.2 78.7 92.8 75.5 Q88.4 72.3 83.8 69.2 Q79.3 66.2 74.4 63.7 L69.5 61.2" stroke-width="2.5"/>
    <path d="M131.9 99.3 Q131.5 90.1 131.7 85.5 Q131.9 80.8 131.9 76.2 Q131.8 71.6 131.7 67 Q131.7 62.3 131.5 57.7 Q131.3 53.1 131 48.5 Q130.7 43.8 130.9 39.2 Q131.1 34.6 131.2 30 Q131.4 25.3 132 20.7 Q132.6 16.2 129.5 12.7 L126.5 9.3" stroke-width="2.7"/>
    <path d="M144.3 44.2 Q154 40.8 158.8 39.1 Q163.7 37.5 168 34.8 L172.4 32.1" stroke-width="1.7"/>
    <path d="M131.9 99.3 Q135.9 88.7 136.8 83.1 Q137.6 77.4 138.4 71.8 Q139.1 66.2 139.8 60.5 Q140.6 54.9 142.5 49.5 L144.3 44.2" stroke-width="2.2"/>
  </g>
  <!-- Trailing shoots: green-brown, with a thin highlight -->
  <g fill="none" stroke="hsl(68 22% 21%)" stroke-linecap="round" stroke-linejoin="round">
    <path d="M39.5 110.4 Q30 106.8 25.2 105.4 Q20.3 104 15.3 103.6 L10.2 103.2" stroke-width="1.1"/>
    <path d="M107.9 212 Q100 204 96.2 199.9 Q92.4 195.7 89.5 190.9 Q86.6 186.1 84.3 181 Q81.9 175.9 79.2 171 Q76.5 166 73.9 161.1 Q71.3 156.1 68.3 151.3 Q65.4 146.5 61.4 142.6 Q57.4 138.6 53.6 134.5 Q49.7 130.4 47 125.5 Q44.2 120.6 41.9 115.5 L39.5 110.4" stroke-width="1.6"/>
    <path d="M115.1 201 Q125.8 199.4 131.1 198.4 Q136.4 197.4 141.6 195.7 Q146.7 193.9 151.5 191.4 Q156.3 188.9 161 186.2 Q165.7 183.6 170.3 180.7 L174.9 177.9" stroke-width="2"/>
    <path d="M104.3 111.1 Q108 101.4 108.9 96.3 Q109.9 91.2 110.1 86 L110.4 80.8" stroke-width="1"/>
    <path d="M120.6 189.1 Q116.5 178.3 115.4 172.6 Q114.4 166.9 114.7 161.1 Q115.1 155.3 115.2 149.5 Q115.3 143.8 114.3 138.1 Q113.2 132.4 111.5 126.9 Q109.8 121.3 107 116.2 Q104.3 111.1 101.5 106.1 Q98.6 101 96.4 95.7 L94.2 90.3" stroke-width="1.5"/>
    <path d="M123.7 176.3 Q115.6 168 111.2 164.3 Q106.7 160.7 102.6 156.6 Q98.6 152.4 94.9 148 Q91.2 143.5 86.9 139.7 Q82.6 135.9 77.7 132.8 Q72.8 129.7 67.5 127.6 Q62.1 125.4 56.6 123.8 L51.1 122.1" stroke-width="1.6"/>
    <path d="M124.4 163.2 Q130.6 153 133.3 147.7 Q136 142.5 138.8 137.3 Q141.7 132.1 145.3 127.3 Q148.9 122.6 153.5 118.9 Q158.1 115.2 162.5 111.2 L166.9 107.2" stroke-width="1.3"/>
    <path d="M79.3 66.2 Q75.2 57.2 72.4 53.2 Q69.6 49.1 66.7 45.1 L63.8 41.2" stroke-width="1.2"/>
    <path d="M126.3 111.2 Q119.2 102.9 115.8 98.6 Q112.4 94.4 109 90 Q105.6 85.7 101.4 82.2 Q97.2 78.7 92.8 75.5 Q88.4 72.3 83.8 69.2 Q79.3 66.2 74.4 63.7 L69.5 61.2" stroke-width="1.8"/>
    <path d="M131.9 99.3 Q131.5 90.1 131.7 85.5 Q131.9 80.8 131.9 76.2 Q131.8 71.6 131.7 67 Q131.7 62.3 131.5 57.7 Q131.3 53.1 131 48.5 Q130.7 43.8 130.9 39.2 Q131.1 34.6 131.2 30 Q131.4 25.3 132 20.7 Q132.6 16.2 129.5 12.7 L126.5 9.3" stroke-width="2"/>
    <path d="M144.3 44.2 Q154 40.8 158.8 39.1 Q163.7 37.5 168 34.8 L172.4 32.1" stroke-width="1.1"/>
    <path d="M131.9 99.3 Q135.9 88.7 136.8 83.1 Q137.6 77.4 138.4 71.8 Q139.1 66.2 139.8 60.5 Q140.6 54.9 142.5 49.5 L144.3 44.2" stroke-width="1.5"/>
  </g>
  <g fill="none" stroke="hsl(70 25% 40%)" stroke-opacity="0.45" stroke-linecap="round" transform="translate(-0.4 -0.3)">
    <path d="M39.5 110.4 Q30 106.8 25.2 105.4 Q20.3 104 15.3 103.6 L10.2 103.2" stroke-width="0.3"/>
    <path d="M107.9 212 Q100 204 96.2 199.9 Q92.4 195.7 89.5 190.9 Q86.6 186.1 84.3 181 Q81.9 175.9 79.2 171 Q76.5 166 73.9 161.1 Q71.3 156.1 68.3 151.3 Q65.4 146.5 61.4 142.6 Q57.4 138.6 53.6 134.5 Q49.7 130.4 47 125.5 Q44.2 120.6 41.9 115.5 L39.5 110.4" stroke-width="0.5"/>
    <path d="M115.1 201 Q125.8 199.4 131.1 198.4 Q136.4 197.4 141.6 195.7 Q146.7 193.9 151.5 191.4 Q156.3 188.9 161 186.2 Q165.7 183.6 170.3 180.7 L174.9 177.9" stroke-width="0.6"/>
    <path d="M104.3 111.1 Q108 101.4 108.9 96.3 Q109.9 91.2 110.1 86 L110.4 80.8" stroke-width="0.3"/>
    <path d="M120.6 189.1 Q116.5 178.3 115.4 172.6 Q114.4 166.9 114.7 161.1 Q115.1 155.3 115.2 149.5 Q115.3 143.8 114.3 138.1 Q113.2 132.4 111.5 126.9 Q109.8 121.3 107 116.2 Q104.3 111.1 101.5 106.1 Q98.6 101 96.4 95.7 L94.2 90.3" stroke-width="0.4"/>
    <path d="M123.7 176.3 Q115.6 168 111.2 164.3 Q106.7 160.7 102.6 156.6 Q98.6 152.4 94.9 148 Q91.2 143.5 86.9 139.7 Q82.6 135.9 77.7 132.8 Q72.8 129.7 67.5 127.6 Q62.1 125.4 56.6 123.8 L51.1 122.1" stroke-width="0.5"/>
    <path d="M124.4 163.2 Q130.6 153 133.3 147.7 Q136 142.5 138.8 137.3 Q141.7 132.1 145.3 127.3 Q148.9 122.6 153.5 118.9 Q158.1 115.2 162.5 111.2 L166.9 107.2" stroke-width="0.4"/>
    <path d="M79.3 66.2 Q75.2 57.2 72.4 53.2 Q69.6 49.1 66.7 45.1 L63.8 41.2" stroke-width="0.4"/>
    <path d="M126.3 111.2 Q119.2 102.9 115.8 98.6 Q112.4 94.4 109 90 Q105.6 85.7 101.4 82.2 Q97.2 78.7 92.8 75.5 Q88.4 72.3 83.8 69.2 Q79.3 66.2 74.4 63.7 L69.5 61.2" stroke-width="0.5"/>
    <path d="M131.9 99.3 Q131.5 90.1 131.7 85.5 Q131.9 80.8 131.9 76.2 Q131.8 71.6 131.7 67 Q131.7 62.3 131.5 57.7 Q131.3 53.1 131 48.5 Q130.7 43.8 130.9 39.2 Q131.1 34.6 131.2 30 Q131.4 25.3 132 20.7 Q132.6 16.2 129.5 12.7 L126.5 9.3" stroke-width="0.6"/>
    <path d="M144.3 44.2 Q154 40.8 158.8 39.1 Q163.7 37.5 168 34.8 L172.4 32.1" stroke-width="0.3"/>
    <path d="M131.9 99.3 Q135.9 88.7 136.8 83.1 Q137.6 77.4 138.4 71.8 Q139.1 66.2 139.8 60.5 Q140.6 54.9 142.5 49.5 L144.3 44.2" stroke-width="0.5"/>
  </g>
  <!-- Woody trunks: tapering, shaded round, with streaky bark -->
  <g fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M96.6 262 Q95.8 248.9 96.6 242.4 Q97.3 235.8 99.3 229.6 Q101.3 223.3 104.6 217.6 Q107.9 212 111.5 206.5 Q115.1 201 117.9 195 Q120.6 189.1 122.2 182.7 Q123.7 176.3 124 169.7 Q124.4 163.2 123.8 156.6 Q123.1 150.1 122.7 143.5 Q122.3 137 122.5 130.4 Q122.7 123.8 124.5 117.5 Q126.3 111.2 129.1 105.3 L131.9 99.3" stroke="hsl(30 14% 19%)" stroke-width="2.7"/>
    <path d="M96.6 262 Q95.8 248.9 96.6 242.4 Q97.3 235.8 99.3 229.6 Q101.3 223.3 104.6 217.6 Q107.9 212 111.5 206.5 Q115.1 201 117.9 195 Q120.6 189.1 122.2 182.7 Q123.7 176.3 124 169.7 Q124.4 163.2 123.8 156.6 L123.1 150.1" stroke="hsl(30 14% 19%)" stroke-width="4.5"/>
    <path d="M96.6 262 Q95.8 248.9 96.6 242.4 Q97.3 235.8 99.3 229.6 Q101.3 223.3 104.6 217.6 Q107.9 212 111.5 206.5 L115.1 201" stroke="hsl(30 14% 19%)" stroke-width="6.1"/>
    <path d="M96.6 262 Q95.8 248.9 96.6 242.4 Q97.3 235.8 99.3 229.6 Q101.3 223.3 104.6 217.6 Q107.9 212 111.5 206.5 Q115.1 201 117.9 195 Q120.6 189.1 122.2 182.7 Q123.7 176.3 124 169.7 Q124.4 163.2 123.8 156.6 Q123.1 150.1 122.7 143.5 Q122.3 137 122.5 130.4 Q122.7 123.8 124.5 117.5 Q126.3 111.2 129.1 105.3 L131.9 99.3" stroke="#000" stroke-opacity="0.28" stroke-width="1" transform="translate(0.6 0.3)"/>
    <path d="M96.6 262 Q95.8 248.9 96.6 242.4 Q97.3 235.8 99.3 229.6 Q101.3 223.3 104.6 217.6 Q107.9 212 111.5 206.5 Q115.1 201 117.9 195 Q120.6 189.1 122.2 182.7 Q123.7 176.3 124 169.7 Q124.4 163.2 123.8 156.6 L123.1 150.1" stroke="#000" stroke-opacity="0.28" stroke-width="1.6" transform="translate(1 0.5)"/>
    <path d="M96.6 262 Q95.8 248.9 96.6 242.4 Q97.3 235.8 99.3 229.6 Q101.3 223.3 104.6 217.6 Q107.9 212 111.5 206.5 L115.1 201" stroke="#000" stroke-opacity="0.28" stroke-width="2.1" transform="translate(1.3 0.7)"/>
    <path d="M96.6 262 Q95.8 248.9 96.6 242.4 Q97.3 235.8 99.3 229.6 Q101.3 223.3 104.6 217.6 Q107.9 212 111.5 206.5 Q115.1 201 117.9 195 Q120.6 189.1 122.2 182.7 Q123.7 176.3 124 169.7 Q124.4 163.2 123.8 156.6 Q123.1 150.1 122.7 143.5 Q122.3 137 122.5 130.4 Q122.7 123.8 124.5 117.5 Q126.3 111.2 129.1 105.3 L131.9 99.3" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="0.5" transform="translate(-0.6 -0.3)"/>
    <path d="M96.6 262 Q95.8 248.9 96.6 242.4 Q97.3 235.8 99.3 229.6 Q101.3 223.3 104.6 217.6 Q107.9 212 111.5 206.5 Q115.1 201 117.9 195 Q120.6 189.1 122.2 182.7 Q123.7 176.3 124 169.7 Q124.4 163.2 123.8 156.6 L123.1 150.1" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="0.8" transform="translate(-1 -0.5)"/>
    <path d="M96.6 262 Q95.8 248.9 96.6 242.4 Q97.3 235.8 99.3 229.6 Q101.3 223.3 104.6 217.6 Q107.9 212 111.5 206.5 L115.1 201" stroke="hsl(35 16% 46%)" stroke-opacity="0.35" stroke-width="1.1" transform="translate(-1.3 -0.6)"/>
    <path d="M96.6 262 Q95.8 248.9 96.6 242.4 Q97.3 235.8 99.3 229.6 Q101.3 223.3 104.6 217.6 Q107.9 212 111.5 206.5 Q115.1 201 117.9 195 Q120.6 189.1 122.2 182.7 Q123.7 176.3 124 169.7 Q124.4 163.2 123.8 156.6 L123.1 150.1" stroke="hsl(30 12% 9%)" stroke-opacity="0.55" stroke-width="1.2" stroke-dasharray="8.9 3.9 5 5.5"/>
    <path d="M96.6 262 Q95.8 248.9 96.6 242.4 Q97.3 235.8 99.3 229.6 Q101.3 223.3 104.6 217.6 Q107.9 212 111.5 206.5 Q115.1 201 117.9 195 Q120.6 189.1 122.2 182.7 Q123.7 176.3 124 169.7 Q124.4 163.2 123.8 156.6 L123.1 150.1" stroke="hsl(36 14% 38%)" stroke-opacity="0.35" stroke-width="0.7" stroke-dasharray="3.5 6.3" transform="translate(-0.7 0)"/>
  </g>
  <!-- Fine hairy rootlets -->
  <path fill="none" stroke="hsl(30 18% 20%)" stroke-opacity="0.6" stroke-width="0.5" stroke-linecap="round" d="M96.1 252.6 l-6 -0.2 M96.2 250.5 l-4.3 1.7 M96.5 261 l5.8 0.8 M96.3 260.4 l-2 -0.6 M97.2 239.9 l2 0.9 M96 247.4 l2.3 -0.1 M96.1 245.7 l5.4 1.2 M96.2 248.7 l-5.3 -1.8 M97.9 232.6 l3.1 0.8 M97.5 232.8 l2.1 1 M98.3 230.8 l-1.8 -0.9 M98.7 230.9 l-3.8 -1.5 M102.5 215.8 l-2.1 -1.8 M104.4 221.3 l4.4 2.8 M104.6 212.5 l-3.6 -1.5 M106.5 216.6 l-2.9 -2.5 M110.3 201.8 l1.7 2.1 M114.2 209 l-3 -1.9 M109.4 204 l-2.7 -2.1 M113.7 205.6 l2.2 1.3 M119.1 191.2 l-3.4 -3.1 M116.1 195.9 l2.1 1.9 M115.4 190.8 l-2.9 -0.8 M115.7 190.2 l2.6 0.7 M121.6 180.5 l-3.1 -1.7 M121.9 183.9 l3.6 0 M123.1 187.7 l2.8 1 M122.3 188.7 l4.3 0.3 M124.2 172.2 l2.5 0.4 M124 173.3 l-3.9 0.9 M124.1 166.4 l-3.5 -1.4 M123.7 164.7 l-4 -1.2 M124.2 160.2 l1.8 0.2 M123.8 162.6 l3.3 -0.9 M123.4 150.3 l3.6 -1 M123.4 161.9 l-3.5 -0.3 M122.7 144.8 l2.6 0.5 M122.9 140.8 l-3 1 M122.9 145.5 l2 0.1 M123.1 150 l-3.1 0.1 M122.6 128.7 l-3.1 -0.6 M122.4 133.7 l-3 0.6 M122.6 129.3 l1.2 -0.3 M122.6 131.8 l-1.3 -0.3 M123.3 121.4 l-2.2 -0.3 M124.7 113.5 l1.7 0.8 M124.2 112.5 l-1.9 -1.1 M123.5 115.3 l-1.2 -0.3 M128.8 110.9 l2.1 1.9 M131.9 105 l-1.3 -0.2 M128.7 109.5 l2.8 0.7 M131.9 99.6 l1.4 0.9"/>
  <!-- Tendrils -->
  <g fill="none" stroke="hsl(68 22% 24%)" stroke-width="0.75" stroke-linecap="round">
    <path d="M10.2 103.2 Q7.7 103.5 6.5 103.9 Q5.4 104.3 4.5 105.1 Q3.6 105.8 3 106.7 Q2.4 107.6 2.3 108.6 Q2.1 109.6 2.4 110.5 Q2.6 111.4 3.3 112 Q3.9 112.6 4.7 112.8 Q5.4 113 6.1 112.7 Q6.8 112.4 7.1 111.9 Q7.5 111.3 7.4 110.8 Q7.3 110.2 6.9 109.9 Q6.5 109.6 6.1 109.6 Q5.6 109.7 5.4 110 L5.2 110.3"/>
    <path d="M39.5 110.4 Q38.9 107.9 38.9 106.7 Q38.9 105.5 39.3 104.4 Q39.6 103.3 40.3 102.4 Q41 101.5 41.8 101.1 Q42.7 100.6 43.7 100.5 Q44.6 100.5 45.4 100.8 Q46.2 101.2 46.6 101.9 Q47 102.5 47 103.3 Q47 104 46.6 104.5 Q46.2 105 45.6 105.1 Q45.1 105.2 44.6 105 Q44.2 104.7 44.1 104.3 Q44 103.8 44.2 103.6 L44.4 103.3"/>
    <path d="M174.9 177.9 Q177.3 177 178.5 176.8 Q179.8 176.7 180.9 176.9 Q182 177.1 183 177.7 Q183.9 178.3 184.5 179.1 Q185.1 179.9 185.2 180.8 Q185.4 181.8 185.1 182.6 Q184.8 183.4 184.2 183.9 Q183.6 184.4 182.9 184.5 Q182.2 184.6 181.6 184.2 Q181.1 183.9 180.9 183.3 Q180.7 182.8 180.9 182.3 Q181.1 181.9 181.6 181.7 Q182 181.6 182.3 181.7 L182.6 181.9"/>
    <path d="M110.4 80.8 Q109.9 78.2 109.5 77.1 Q109 76 108.2 75.1 Q107.5 74.2 106.5 73.7 Q105.6 73.1 104.6 73 Q103.6 72.9 102.7 73.2 Q101.8 73.5 101.2 74.2 Q100.6 74.8 100.5 75.6 Q100.3 76.4 100.6 77.1 Q100.9 77.7 101.5 78 Q102.1 78.3 102.6 78.2 Q103.2 78.1 103.5 77.7 Q103.8 77.3 103.7 76.9 Q103.6 76.4 103.3 76.3 L103 76.1"/>
    <path d="M94.2 90.3 Q92.8 88.2 91.9 87.4 Q91 86.5 89.9 86.1 Q88.9 85.6 87.8 85.5 Q86.7 85.4 85.7 85.7 Q84.8 86 84.1 86.7 Q83.4 87.3 83.2 88.2 Q82.9 89 83.1 89.8 Q83.3 90.5 83.8 91 Q84.4 91.5 85 91.5 Q85.7 91.6 86.2 91.3 Q86.6 90.9 86.7 90.4 Q86.8 89.9 86.6 89.6 Q86.3 89.2 86 89.2 L85.6 89.1"/>
    <path d="M51.1 122.1 Q48.5 121.9 47.3 122.1 Q46 122.3 45 122.8 Q44 123.3 43.2 124.1 Q42.5 124.9 42.1 125.8 Q41.8 126.8 41.9 127.7 Q41.9 128.7 42.4 129.4 Q42.9 130.1 43.6 130.4 Q44.3 130.8 45.1 130.6 Q45.8 130.5 46.2 130 Q46.7 129.6 46.7 129 Q46.7 128.4 46.4 128 Q46.1 127.6 45.6 127.6 Q45.2 127.6 44.9 127.8 L44.7 128.1"/>
    <path d="M166.9 107.2 Q168.4 105.1 168.9 104 Q169.4 102.8 169.5 101.7 Q169.6 100.5 169.3 99.5 Q169 98.4 168.4 97.6 Q167.8 96.9 166.9 96.4 Q166.1 96 165.2 96.1 Q164.3 96.1 163.7 96.5 Q163 97 162.8 97.7 Q162.5 98.3 162.7 99 Q162.8 99.6 163.3 99.9 Q163.8 100.2 164.3 100.2 Q164.8 100.1 165 99.7 Q165.3 99.4 165.2 99 L165.1 98.7"/>
    <path d="M63.8 41.2 Q62.7 38.8 62.4 37.6 Q62.2 36.4 62.3 35.3 Q62.5 34.1 63 33.1 Q63.4 32.2 64.2 31.5 Q65 30.9 65.9 30.6 Q66.8 30.4 67.6 30.6 Q68.5 30.8 69 31.4 Q69.6 31.9 69.7 32.6 Q69.8 33.4 69.6 33.9 Q69.3 34.5 68.7 34.7 Q68.2 35 67.7 34.8 Q67.2 34.6 67.1 34.2 Q66.9 33.8 67 33.5 L67.2 33.2"/>
    <path d="M69.5 61.2 Q67.5 59.6 66.7 58.6 Q66 57.6 65.6 56.5 Q65.2 55.5 65.2 54.4 Q65.2 53.3 65.6 52.4 Q66 51.4 66.7 50.8 Q67.4 50.2 68.3 50 Q69.1 49.8 69.9 50.1 Q70.6 50.3 71 50.9 Q71.5 51.5 71.5 52.1 Q71.5 52.8 71.1 53.2 Q70.7 53.7 70.2 53.7 Q69.7 53.8 69.4 53.5 Q69 53.2 69 52.9 L69 52.5"/>
    <path d="M126.5 9.3 Q125.1 7 124.8 5.8 Q124.5 4.7 124.5 3.5 Q124.5 2.3 124.9 1.3 Q125.3 0.3 126 -0.4 Q126.7 -1.1 127.6 -1.4 Q128.5 -1.8 129.3 -1.6 Q130.2 -1.5 130.8 -1 Q131.4 -0.5 131.6 0.2 Q131.8 0.9 131.5 1.5 Q131.3 2.1 130.8 2.4 Q130.3 2.7 129.8 2.5 Q129.3 2.4 129.1 2 Q128.9 1.6 129 1.3 L129.1 1"/>
    <path d="M172.4 32.1 Q174.3 30.3 174.9 29.3 Q175.6 28.2 175.9 27.1 Q176.2 26 176.1 24.9 Q176 23.8 175.5 22.9 Q175 22.1 174.3 21.5 Q173.5 20.9 172.7 20.8 Q171.8 20.7 171.1 21 Q170.4 21.4 170 22 Q169.6 22.6 169.7 23.2 Q169.7 23.9 170.1 24.3 Q170.6 24.7 171.1 24.7 Q171.6 24.7 171.9 24.4 Q172.2 24.1 172.2 23.7 L172.1 23.4"/>
    <path d="M144.3 44.2 Q144.7 41.6 144.5 40.4 Q144.4 39.1 143.9 38.1 Q143.5 37 142.7 36.2 Q142 35.5 141.1 35.1 Q140.1 34.7 139.2 34.7 Q138.3 34.7 137.5 35.2 Q136.8 35.6 136.4 36.3 Q136 37 136.1 37.8 Q136.2 38.5 136.7 38.9 Q137.1 39.4 137.7 39.5 Q138.3 39.5 138.7 39.2 Q139.1 38.9 139.1 38.5 Q139.2 38 138.9 37.8 L138.7 37.5"/>
  </g>
  <!-- Ivy leaves: soft shadow, own colour, shading, sheen, faint veins, decay spots -->
  <g transform="translate(92.4 195.7) rotate(-70.2)">
    <path d="M0 0 L4.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.3 0) scale(20)">
      <use href="#v8-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-5" fill="hsl(94 37.9% 23.2%)"/>
      <use href="#v8-leaf-5" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-5" fill="url(#v8-under)"/>
      <use href="#v8-leaf-5" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027000000000000003" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(86.6 186.1) rotate(-164.5)">
    <path d="M0 0 L5.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.9 0) scale(22)">
      <use href="#v8-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-2" fill="hsl(106.8 45.4% 24.7%)"/>
      <use href="#v8-leaf-2" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-2" fill="url(#v8-under)"/>
      <use href="#v8-leaf-2" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.025" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(81.9 175.9) rotate(-62.9)">
    <path d="M0 0 L5.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.9 0) scale(13.2)">
      <use href="#v8-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-5" fill="hsl(102.7 29.2% 23.4%)"/>
      <use href="#v8-leaf-5" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-5" fill="url(#v8-under)"/>
      <use href="#v8-leaf-5" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.042" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(71.3 156.1) rotate(-77.6)">
    <path d="M0 0 L3.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.9 0) scale(20.1)">
      <use href="#v8-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-5" fill="hsl(94.1 31.4% 17.3%)"/>
      <use href="#v8-leaf-5" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-5" fill="url(#v8-under)"/>
      <use href="#v8-leaf-5" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027000000000000003" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(65.4 146.5) rotate(-170.4)">
    <path d="M0 0 L4.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.7 0) scale(12.8)">
      <use href="#v8-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-2" fill="hsl(94.7 43.8% 22.6%)"/>
      <use href="#v8-leaf-2" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-2" fill="url(#v8-under)"/>
      <use href="#v8-leaf-2" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.043" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(57.4 138.6) rotate(-62.6)">
    <path d="M0 0 L4.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.9 0) scale(13.9)">
      <use href="#v8-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-2" fill="hsl(109.9 32.3% 25.5%)"/>
      <use href="#v8-leaf-2" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-2" fill="url(#v8-under)"/>
      <use href="#v8-leaf-2" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.04" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(49.7 130.4) rotate(-189.7)">
    <path d="M0 0 L4.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.3 0) scale(13.4)">
      <use href="#v8-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-3" fill="hsl(88 40.7% 20.4%)"/>
      <use href="#v8-leaf-3" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-3" fill="url(#v8-under)"/>
      <use href="#v8-leaf-3" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.040999999999999995" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(44.2 120.6) rotate(-75.8)">
    <path d="M0 0 L4.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.5 0) scale(14.3)">
      <use href="#v8-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-0" fill="hsl(88.2 26.1% 26.6%)"/>
      <use href="#v8-leaf-0" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-0" fill="url(#v8-under)"/>
      <use href="#v8-leaf-0" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.039" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(39.5 110.4) rotate(-185)">
    <path d="M0 0 L3.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.5 0) scale(11.2)">
      <use href="#v8-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-4" fill="hsl(89.1 40.3% 27.8%)"/>
      <use href="#v8-leaf-4" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-4" fill="url(#v8-under)"/>
      <use href="#v8-leaf-4" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.049" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(20.3 104) rotate(-125.5)">
    <path d="M0 0 L3.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.1 0) scale(14.4)">
      <use href="#v8-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-0" fill="hsl(104.4 38.4% 19%)"/>
      <use href="#v8-leaf-0" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-0" fill="url(#v8-under)"/>
      <use href="#v8-leaf-0" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.038" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(10.2 103.2) rotate(-223)">
    <path d="M0 0 L5.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.8 0) scale(12)">
      <use href="#v8-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-5" fill="hsl(53.7 36.5% 32.7%)"/>
      <use href="#v8-leaf-5" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-5" fill="url(#v8-under)"/>
      <use href="#v8-leaf-5" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.046" stroke-linecap="round"/>
      <circle cx="0.534" cy="0.156" r="0.085" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.24" cy="-0.154" r="0.084" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(136.4 197.4) rotate(24.8)">
    <path d="M0 0 L4.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.6 0) scale(15.7)">
      <use href="#v8-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-3" fill="hsl(107.1 27.1% 20.1%)"/>
      <use href="#v8-leaf-3" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-3" fill="url(#v8-under)"/>
      <use href="#v8-leaf-3" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(146.7 193.9) rotate(-56)">
    <path d="M0 0 L4.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.8 0) scale(14.2)">
      <use href="#v8-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-5" fill="hsl(111.7 28.8% 15.2%)"/>
      <use href="#v8-leaf-5" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-5" fill="url(#v8-under)"/>
      <use href="#v8-leaf-5" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.039" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(156.3 188.9) rotate(22.6)">
    <path d="M0 0 L3.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.8 0) scale(18.3)">
      <use href="#v8-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-5" fill="hsl(88 32.2% 25.5%)"/>
      <use href="#v8-leaf-5" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-5" fill="url(#v8-under)"/>
      <use href="#v8-leaf-5" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(165.7 183.6) rotate(-89.2)">
    <path d="M0 0 L3.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.7 0) scale(11.3)">
      <use href="#v8-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-5" fill="hsl(57.4 48.1% 28.5%)"/>
      <use href="#v8-leaf-5" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-5" fill="url(#v8-under)"/>
      <use href="#v8-leaf-5" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.049" stroke-linecap="round"/>
      <circle cx="0.574" cy="0.18100000000000002" r="0.051" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.313" cy="0.11900000000000001" r="0.068" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(174.9 177.9) rotate(23.8)">
    <path d="M0 0 L3.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.4 0) scale(14.1)">
      <use href="#v8-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-0" fill="hsl(37.1 36.2% 25.7%)"/>
      <use href="#v8-leaf-0" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-0" fill="url(#v8-under)"/>
      <use href="#v8-leaf-0" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.039" stroke-linecap="round"/>
      <circle cx="0.5920000000000001" cy="-0.078" r="0.057" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.275" cy="-0.133" r="0.086" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.441" cy="0.09300000000000001" r="0.07" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.597" cy="0.028999999999999998" r="0.078" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(114.4 166.9) rotate(-27.5)">
    <path d="M0 0 L5.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.4 0) scale(19.6)">
      <use href="#v8-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-0" fill="hsl(90.5 32.7% 19.3%)"/>
      <use href="#v8-leaf-0" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-0" fill="url(#v8-under)"/>
      <use href="#v8-leaf-0" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027999999999999997" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(115.1 155.3) rotate(-152.3)">
    <path d="M0 0 L3.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.6 0) scale(12.7)">
      <use href="#v8-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-0" fill="hsl(26.9 32.7% 19.3%)"/>
      <use href="#v8-leaf-0" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-0" fill="url(#v8-under)"/>
      <use href="#v8-leaf-0" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.043" stroke-linecap="round"/>
      <circle cx="0.631" cy="0.036000000000000004" r="0.076" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.531" cy="-0.061" r="0.079" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.17600000000000002" cy="-0.17" r="0.07400000000000001" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.522" cy="0.16" r="0.047" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(115.3 143.8) rotate(-53.8)">
    <path d="M0 0 L3.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.8 0) scale(19.9)">
      <use href="#v8-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-3" fill="hsl(28.3 29.2% 20.5%)"/>
      <use href="#v8-leaf-3" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-3" fill="url(#v8-under)"/>
      <use href="#v8-leaf-3" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027999999999999997" stroke-linecap="round"/>
      <circle cx="0.381" cy="0.107" r="0.069" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.574" cy="-0.048" r="0.048" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.45299999999999996" cy="0.162" r="0.078" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.653" cy="0.045" r="0.065" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(113.2 132.4) rotate(-149.5)">
    <path d="M0 0 L5.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.3 0) scale(18.5)">
      <use href="#v8-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-1" fill="hsl(37.4 41% 28.8%)"/>
      <use href="#v8-leaf-1" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-1" fill="url(#v8-under)"/>
      <use href="#v8-leaf-1" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
      <circle cx="0.44" cy="0.133" r="0.042" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.493" cy="-0.18899999999999997" r="0.057" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.25" cy="0.10800000000000001" r="0.055999999999999994" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.504" cy="-0.158" r="0.081" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(109.8 121.3) rotate(-40.3)">
    <path d="M0 0 L4.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.8 0) scale(17.5)">
      <use href="#v8-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-0" fill="hsl(99.7 45.7% 27.1%)"/>
      <use href="#v8-leaf-0" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-0" fill="url(#v8-under)"/>
      <use href="#v8-leaf-0" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.031" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(104.3 111.1) rotate(-159.4)">
    <path d="M0 0 L4.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.8 0) scale(11.7)">
      <use href="#v8-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-0" fill="hsl(84.7 41.7% 15.3%)"/>
      <use href="#v8-leaf-0" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-0" fill="url(#v8-under)"/>
      <use href="#v8-leaf-0" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.047" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(109.9 91.2) rotate(-36.5)">
    <path d="M0 0 L3.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.2 0) scale(16)">
      <use href="#v8-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-1" fill="hsl(91.8 28% 17.2%)"/>
      <use href="#v8-leaf-1" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-1" fill="url(#v8-under)"/>
      <use href="#v8-leaf-1" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.034" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(110.4 80.8) rotate(-148.2)">
    <path d="M0 0 L5.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.9 0) scale(11)">
      <use href="#v8-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-5" fill="hsl(67 45% 34.8%)"/>
      <use href="#v8-leaf-5" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-5" fill="url(#v8-under)"/>
      <use href="#v8-leaf-5" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.05" stroke-linecap="round"/>
      <circle cx="0.532" cy="-0.034" r="0.068" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.33799999999999997" cy="-0.235" r="0.083" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(98.6 101) rotate(-76.2)">
    <path d="M0 0 L4.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.2 0) scale(16.3)">
      <use href="#v8-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-3" fill="hsl(91.1 39.4% 24.6%)"/>
      <use href="#v8-leaf-3" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-3" fill="url(#v8-under)"/>
      <use href="#v8-leaf-3" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.034" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(98.6 152.4) rotate(-187.8)">
    <path d="M0 0 L5.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.1 0) scale(21.7)">
      <use href="#v8-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-0" fill="hsl(67.5 43.6% 27.1%)"/>
      <use href="#v8-leaf-0" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-0" fill="url(#v8-under)"/>
      <use href="#v8-leaf-0" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.025" stroke-linecap="round"/>
      <circle cx="0.48" cy="-0.08199999999999999" r="0.09" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.28800000000000003" cy="0.1" r="0.071" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(91.2 143.5) rotate(-64)">
    <path d="M0 0 L3.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.6 0) scale(12.8)">
      <use href="#v8-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-4" fill="hsl(109.9 31.2% 16.3%)"/>
      <use href="#v8-leaf-4" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-4" fill="url(#v8-under)"/>
      <use href="#v8-leaf-4" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.043" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(82.6 135.9) rotate(-180.1)">
    <path d="M0 0 L4.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.3 0) scale(16.7)">
      <use href="#v8-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-2" fill="hsl(87.7 31% 19.9%)"/>
      <use href="#v8-leaf-2" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-2" fill="url(#v8-under)"/>
      <use href="#v8-leaf-2" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.033" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(72.8 129.7) rotate(-89.9)">
    <path d="M0 0 L5.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.7 0) scale(16.7)">
      <use href="#v8-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-2" fill="hsl(30.6 29% 19.1%)"/>
      <use href="#v8-leaf-2" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-2" fill="url(#v8-under)"/>
      <use href="#v8-leaf-2" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.033" stroke-linecap="round"/>
      <circle cx="0.59" cy="-0.017" r="0.055999999999999994" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.512" cy="-0.098" r="0.053" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.573" cy="-0.01" r="0.055" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.486" cy="-0.073" r="0.042" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(62.1 125.4) rotate(-204.8)">
    <path d="M0 0 L3.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.1 0) scale(12.9)">
      <use href="#v8-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-1" fill="hsl(103.9 43.5% 19.8%)"/>
      <use href="#v8-leaf-1" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-1" fill="url(#v8-under)"/>
      <use href="#v8-leaf-1" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.043" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(158.1 115.2) rotate(-104.1)">
    <path d="M0 0 L6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(6 0) scale(13.1)">
      <use href="#v8-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-5" fill="hsl(109.8 40% 15.3%)"/>
      <use href="#v8-leaf-5" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-5" fill="url(#v8-under)"/>
      <use href="#v8-leaf-5" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.042" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(124.4 163.2) rotate(-32.4)">
    <path d="M0 0 L4.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.6 0) scale(19.3)">
      <use href="#v8-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-5" fill="hsl(110.4 41.6% 18.4%)"/>
      <use href="#v8-leaf-5" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-5" fill="url(#v8-under)"/>
      <use href="#v8-leaf-5" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.028999999999999998" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(123.1 150.1) rotate(-159)">
    <path d="M0 0 L5.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.7 0) scale(21.1)">
      <use href="#v8-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-0" fill="hsl(100.7 29.3% 21.2%)"/>
      <use href="#v8-leaf-0" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-0" fill="url(#v8-under)"/>
      <use href="#v8-leaf-0" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.026000000000000002" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(112.4 94.4) rotate(-77.3)">
    <path d="M0 0 L4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4 0) scale(12.4)">
      <use href="#v8-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-5" fill="hsl(88.3 35% 28.5%)"/>
      <use href="#v8-leaf-5" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-5" fill="url(#v8-under)"/>
      <use href="#v8-leaf-5" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.044000000000000004" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(105.6 85.7) rotate(-202)">
    <path d="M0 0 L5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5 0) scale(19.5)">
      <use href="#v8-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-0" fill="hsl(24.2 39.3% 29%)"/>
      <use href="#v8-leaf-0" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-0" fill="url(#v8-under)"/>
      <use href="#v8-leaf-0" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027999999999999997" stroke-linecap="round"/>
      <circle cx="0.43799999999999994" cy="0.22399999999999998" r="0.048" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.201" cy="-0.14" r="0.042" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.574" cy="-0.013000000000000001" r="0.075" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.503" cy="0.14800000000000002" r="0.076" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(97.2 78.7) rotate(-87.8)">
    <path d="M0 0 L4.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.2 0) scale(11.7)">
      <use href="#v8-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-0" fill="hsl(90.4 42% 27.5%)"/>
      <use href="#v8-leaf-0" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-0" fill="url(#v8-under)"/>
      <use href="#v8-leaf-0" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.047" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(79.3 66.2) rotate(-91.5)">
    <path d="M0 0 L5.3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.3 0) scale(12.9)">
      <use href="#v8-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-1" fill="hsl(93.2 42.2% 21.7%)"/>
      <use href="#v8-leaf-1" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-1" fill="url(#v8-under)"/>
      <use href="#v8-leaf-1" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.043" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(63.8 41.2) rotate(-164.7)">
    <path d="M0 0 L4.4 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.4 0) scale(13.2)">
      <use href="#v8-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-4" fill="hsl(91.3 43% 20.6%)"/>
      <use href="#v8-leaf-4" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-4" fill="url(#v8-under)"/>
      <use href="#v8-leaf-4" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.042" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(69.5 61.2) rotate(-198.2)">
    <path d="M0 0 L4.6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.6 0) scale(15.3)">
      <use href="#v8-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-1" fill="hsl(29.6 40.1% 20.9%)"/>
      <use href="#v8-leaf-1" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-1" fill="url(#v8-under)"/>
      <use href="#v8-leaf-1" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.036000000000000004" stroke-linecap="round"/>
      <circle cx="0.245" cy="-0.113" r="0.068" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.253" cy="-0.19399999999999998" r="0.084" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.47" cy="0.07" r="0.081" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.373" cy="-0.09699999999999999" r="0.08199999999999999" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(126.3 111.2) rotate(-33.1)">
    <path d="M0 0 L4.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.9 0) scale(16.4)">
      <use href="#v8-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-2" fill="hsl(103.5 34.1% 18%)"/>
      <use href="#v8-leaf-2" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-2" fill="url(#v8-under)"/>
      <use href="#v8-leaf-2" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.034" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(131.9 80.8) rotate(-16.3)">
    <path d="M0 0 L6 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(6 0) scale(16.9)">
      <use href="#v8-leaf-0" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-0" fill="hsl(109.5 46% 27.5%)"/>
      <use href="#v8-leaf-0" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-0" fill="url(#v8-under)"/>
      <use href="#v8-leaf-0" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-0" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.032" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(131.8 71.6) rotate(-143.3)">
    <path d="M0 0 L3.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.5 0) scale(12.2)">
      <use href="#v8-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-3" fill="hsl(85.9 42.9% 16.1%)"/>
      <use href="#v8-leaf-3" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-3" fill="url(#v8-under)"/>
      <use href="#v8-leaf-3" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.045" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(131.7 62.3) rotate(-40.1)">
    <path d="M0 0 L4.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.9 0) scale(11.6)">
      <use href="#v8-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-3" fill="hsl(94.5 38.7% 18.2%)"/>
      <use href="#v8-leaf-3" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-3" fill="url(#v8-under)"/>
      <use href="#v8-leaf-3" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.047" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(131.3 53.1) rotate(-160.6)">
    <path d="M0 0 L3.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.5 0) scale(14.4)">
      <use href="#v8-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-2" fill="hsl(91.5 45.9% 24.9%)"/>
      <use href="#v8-leaf-2" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-2" fill="url(#v8-under)"/>
      <use href="#v8-leaf-2" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.038" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(130.7 43.8) rotate(-31.8)">
    <path d="M0 0 L3.7 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.7 0) scale(11.9)">
      <use href="#v8-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-2" fill="hsl(103.8 38.2% 16.9%)"/>
      <use href="#v8-leaf-2" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-2" fill="url(#v8-under)"/>
      <use href="#v8-leaf-2" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.046" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(131.1 34.6) rotate(-136.3)">
    <path d="M0 0 L3.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.8 0) scale(17.4)">
      <use href="#v8-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-2" fill="hsl(32.5 28.5% 27%)"/>
      <use href="#v8-leaf-2" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-2" fill="url(#v8-under)"/>
      <use href="#v8-leaf-2" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.032" stroke-linecap="round"/>
      <circle cx="0.40299999999999997" cy="0.1" r="0.087" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.322" cy="0.16" r="0.048" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.537" cy="-0.102" r="0.055999999999999994" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.40700000000000003" cy="0.10300000000000001" r="0.049" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(131.4 25.3) rotate(-39.6)">
    <path d="M0 0 L3 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3 0) scale(17.1)">
      <use href="#v8-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-5" fill="hsl(65.8 46.7% 31.1%)"/>
      <use href="#v8-leaf-5" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-5" fill="url(#v8-under)"/>
      <use href="#v8-leaf-5" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.032" stroke-linecap="round"/>
      <circle cx="0.31" cy="0.205" r="0.084" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.344" cy="-0.19899999999999998" r="0.057" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(126.5 9.3) rotate(-78.8)">
    <path d="M0 0 L4.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.9 0) scale(15)">
      <use href="#v8-leaf-3" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-3" fill="hsl(28.7 28.6% 27.1%)"/>
      <use href="#v8-leaf-3" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-3" fill="url(#v8-under)"/>
      <use href="#v8-leaf-3" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-3" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.037000000000000005" stroke-linecap="round"/>
      <circle cx="0.499" cy="0.096" r="0.085" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.547" cy="-0.138" r="0.042" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.248" cy="0.14300000000000002" r="0.063" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.273" cy="-0.131" r="0.051" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(131.9 99.3) rotate(-118.2)">
    <path d="M0 0 L4.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.2 0) scale(18.2)">
      <use href="#v8-leaf-1" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-1" fill="hsl(66.2 40% 31.1%)"/>
      <use href="#v8-leaf-1" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-1" fill="url(#v8-under)"/>
      <use href="#v8-leaf-1" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-1" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.03" stroke-linecap="round"/>
      <circle cx="0.257" cy="-0.09699999999999999" r="0.061" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.27699999999999997" cy="-0.12300000000000001" r="0.053" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(137.6 77.4) rotate(-37.7)">
    <path d="M0 0 L3.8 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.8 0) scale(19.6)">
      <use href="#v8-leaf-5" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-5" fill="hsl(92.6 44.8% 19.5%)"/>
      <use href="#v8-leaf-5" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-5" fill="url(#v8-under)"/>
      <use href="#v8-leaf-5" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-5" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.027999999999999997" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(139.1 66.2) rotate(-118.9)">
    <path d="M0 0 L4.9 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(4.9 0) scale(17.2)">
      <use href="#v8-leaf-2" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-2" fill="hsl(52.7 49.8% 33.9%)"/>
      <use href="#v8-leaf-2" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-2" fill="url(#v8-under)"/>
      <use href="#v8-leaf-2" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-2" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.032" stroke-linecap="round"/>
      <circle cx="0.287" cy="0.1" r="0.057" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.336" cy="0.212" r="0.057999999999999996" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(140.6 54.9) rotate(-16.8)">
    <path d="M0 0 L5.1 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.1 0) scale(11.1)">
      <use href="#v8-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-4" fill="hsl(66.9 42.8% 32.9%)"/>
      <use href="#v8-leaf-4" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-4" fill="url(#v8-under)"/>
      <use href="#v8-leaf-4" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.049" stroke-linecap="round"/>
      <circle cx="0.611" cy="0.015" r="0.084" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
      <circle cx="0.371" cy="-0.23399999999999999" r="0.08" fill="hsl(28 40% 14%)" fill-opacity="0.38"/>
    </g>
  </g>
  <g transform="translate(163.7 37.5) rotate(33.5)">
    <path d="M0 0 L5.2 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(5.2 0) scale(15.5)">
      <use href="#v8-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-4" fill="hsl(89 35.8% 28.2%)"/>
      <use href="#v8-leaf-4" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-4" fill="url(#v8-under)"/>
      <use href="#v8-leaf-4" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
    </g>
  </g>
  <g transform="translate(172.4 32.1) rotate(-82.8)">
    <path d="M0 0 L3.5 0" stroke="hsl(65 20% 26%)" stroke-width="0.7" stroke-linecap="round"/>
    <g transform="translate(3.5 0) scale(15.6)">
      <use href="#v8-leaf-4" fill="#000" fill-opacity="0.26" transform="translate(0.05 0.08)"/>
      <use href="#v8-leaf-4" fill="hsl(90.3 29.4% 18%)"/>
      <use href="#v8-leaf-4" fill="url(#v8-shade)"/>
      <use href="#v8-leaf-4" fill="url(#v8-under)"/>
      <use href="#v8-leaf-4" fill="url(#v8-sheen)"/>
      <use href="#v8-veins-4" fill="none" stroke="#e8edc8" stroke-opacity="0.2" stroke-width="0.035" stroke-linecap="round"/>
    </g>
  </g>
</svg>
`,Bn=e=>`<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'>${e}</svg>`,T3=Bn("<path d='M12 20 L27 3 Q31 2 30 7 L15 23 Z' fill='#d3dadf' stroke='#2e3338' stroke-width='1.2'/><path d='M14 21 L28 5' stroke='#fff' stroke-width='.8' opacity='.8'/><path d='M4 28 L12 20 L15 23 L7 31 Z' fill='#6b3f1d' stroke='#24160a' stroke-width='1.2'/>"),P3=Bn("<g transform='rotate(45 16 16)'><rect x='13' y='2' width='6' height='18' rx='3' fill='#c9ced3' stroke='#2e3338' stroke-width='1.3' stroke-dasharray='2 1.4'/><rect x='10' y='18' width='12' height='9' rx='2' fill='#f28c1c' stroke='#5a2e05' stroke-width='1.2'/><rect x='12.5' y='26' width='7' height='4' rx='1.5' fill='#2b2b2b'/></g>"),z3=Bn("<g transform='rotate(45 16 16)'><path d='M16 0 C21 5 20 9 16 11 C12 9 11 5 16 0 Z' fill='#ffb300' stroke='#ff3d00' stroke-width='1'/><path d='M16 4 C18 7 17.5 9 16 10 C14.5 9 14 7 16 4 Z' fill='#fff3b0'/><rect x='14.3' y='10' width='3.4' height='9' fill='#8a9096' stroke='#2e3338' stroke-width='1'/><rect x='10.5' y='18' width='11' height='8' rx='2' fill='#b33a1a' stroke='#3a1206' stroke-width='1.2'/><rect x='13' y='25' width='6' height='5' rx='1' fill='#2b2b2b'/></g>"),Vn=(e,l,r)=>`url("data:image/svg+xml,${encodeURIComponent(e)}") ${l} ${r}, crosshair`,Lo={rusty:Vn(T3,20,12),chainsaw:Vn(P3,22,10),flamethrower:Vn(z3,24,8)},N3=e=>Lo[e]||Lo.rusty;function R3(e,l){const r=e.sampleRate,t=Math.floor(r*l),n=e.createBuffer(1,t,r),s=n.getChannelData(0);let a=0;for(;a<t;){const o=a/t,i=Math.floor(r*(8e-4+Math.random()*.0035)),f=(.35+Math.random()*.65)*(1-o*.75);for(let d=0;d<i&&a+d<t;d++)s[a+d]+=(Math.random()*2-1)*f*Math.exp(-d/(i*.3));a+=i+Math.floor(r*Math.random()*.004*(.3+o*2.5))}return n}function j3(e,l){const r=e.createBuffer(1,Math.floor(e.sampleRate*l),e.sampleRate),t=r.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=Math.random()*2-1;return r}const wo=e=>Math.min(1,Math.max(0,e)),ie={macheteSwish:.6,leafCrunch:.2,leafCrunchTail:.1,stemSnap:.22,engineIdle:.14,engineRev:.2,sawRasp:.5,sawRaspWoody:.6,sawLeaves:.1,flameIdle:.24,flameSwell:.3,fireWhoosh:.7,burningLeaves:.22,burningLeavesTail:.12};class I3{constructor(){this.ctx=null,this.running=null}audio(){if(!this.ctx)try{this.ctx=new AudioContext,this.noise=j3(this.ctx,2),this.crackles=[0,1,2,3].map(()=>R3(this.ctx,.22)),this.out=this.ctx.createDynamicsCompressor(),this.out.threshold.value=-14,this.out.ratio.value=6,this.out.attack.value=.003,this.out.release.value=.15,this.out.connect(this.ctx.destination)}catch{return null}return this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx}panned(l){const r=this.ctx;if(!r.createStereoPanner)return this.out;const t=r.createStereoPanner();return t.pan.value=Math.max(-.5,Math.min(.5,l*.02)),t.connect(this.out),t}crackle({t:l,gain:r,rate:t=1,freq:n=2300,out:s}){const a=this.ctx,o=a.createBufferSource();o.buffer=this.crackles[Math.floor(Math.random()*this.crackles.length)],o.playbackRate.value=t*(.85+Math.random()*.3);const i=a.createBiquadFilter();i.type="bandpass",i.frequency.value=n*(.85+Math.random()*.3),i.Q.value=.8;const f=a.createBiquadFilter();f.type="lowpass",f.frequency.value=5e3;const d=a.createGain();d.gain.value=r,o.connect(i).connect(f).connect(d).connect(s),o.start(l)}envelope(l,r,t,n){const s=this.ctx.createGain();return s.gain.setValueAtTime(1e-4,l),s.gain.exponentialRampToValueAtTime(r,l+t),s.gain.exponentialRampToValueAtTime(1e-4,l+t+n),s}startRunning(l){this.stopRunning(),!(!this.audio()||l==="leaf")&&(this.running=l==="saw"?this.engineLoop():this.flameLoop())}setIntensity(l){var r;(r=this.running)==null||r.setIntensity(wo(l/2.5))}stopRunning(){var l;(l=this.running)==null||l.stop(),this.running=null}engineLoop(){const l=this.ctx,r=l.currentTime,t=l.createGain();t.gain.setValueAtTime(1e-4,r),t.gain.exponentialRampToValueAtTime(ie.engineIdle,r+.08);const n=l.createBiquadFilter();n.type="lowpass",n.frequency.value=900,n.connect(t).connect(this.out);const s=l.createOscillator();s.type="sawtooth",s.frequency.value=55;const a=l.createOscillator();a.type="square",a.frequency.value=111;const o=l.createGain();o.gain.value=.4,s.connect(n),a.connect(o).connect(n);const i=l.createOscillator();i.frequency.value=22;const f=l.createGain();f.gain.value=.03,i.connect(f).connect(t.gain);for(const d of[s,a,i])d.start(r);return{setIntensity:d=>{const v=l.currentTime;s.frequency.setTargetAtTime(55+55*d,v,.05),a.frequency.setTargetAtTime(111+110*d,v,.05),i.frequency.setTargetAtTime(22+18*d,v,.05),n.frequency.setTargetAtTime(900+1300*d,v,.05),t.gain.setTargetAtTime(ie.engineIdle+ie.engineRev*d,v,.05)},stop:()=>{const d=l.currentTime;f.gain.setValueAtTime(0,d),t.gain.setTargetAtTime(1e-4,d,.06);for(const v of[s,a,i])v.stop(d+.4)}}}flameLoop(){const l=this.ctx,r=l.currentTime,t=l.createBufferSource();t.buffer=this.noise,t.loop=!0;const n=l.createBiquadFilter();n.type="lowpass",n.frequency.value=500;const s=l.createBiquadFilter();s.type="peaking",s.frequency.value=180,s.gain.value=8;const a=l.createGain();return a.gain.setValueAtTime(1e-4,r),a.gain.exponentialRampToValueAtTime(ie.flameIdle,r+.12),t.connect(n).connect(s).connect(a).connect(this.out),t.start(r),{setIntensity:o=>{const i=l.currentTime;n.frequency.setTargetAtTime(500+1100*o,i,.06),a.gain.setTargetAtTime(ie.flameIdle+ie.flameSwell*o,i,.06)},stop:()=>{const o=l.currentTime;a.gain.setTargetAtTime(1e-4,o,.08),t.stop(o+.5)}}}hit(l,r,t,n){const s=this.audio();if(!s)return;const a=s.currentTime,o=wo((r-.3)/3),i=this.panned(t);l==="saw"?this.sawHit(a,o,n,i):l==="fire"?this.fireHit(a,o,i):this.macheteHit(a,o,n,i)}macheteHit(l,r,t,n){const s=this.ctx,a=s.createBufferSource();a.buffer=this.crackles[Math.floor(Math.random()*this.crackles.length)],a.playbackRate.value=1.3+Math.random()*.3;const o=s.createBiquadFilter();o.type="bandpass",o.Q.value=1.1,o.frequency.setValueAtTime(3200+800*r,l),o.frequency.exponentialRampToValueAtTime(1100,l+.09),a.connect(o).connect(this.envelope(l,ie.macheteSwish+.25*r,.012,.1)).connect(n),a.start(l),a.stop(l+.12),this.crackle({t:l+.008,gain:ie.leafCrunch+.1*r,out:n}),this.crackle({t:l+.02,gain:ie.leafCrunchTail,out:n}),t&&this.stemSnap(l+.01,n)}stemSnap(l,r){const t=this.ctx,n=t.createBufferSource();n.buffer=this.noise;const s=t.createBiquadFilter();s.type="bandpass",s.frequency.value=1800+Math.random()*500,s.Q.value=4,n.connect(s).connect(this.envelope(l,ie.stemSnap,.002,.025)).connect(r),n.start(l,Math.random()*1.5),n.stop(l+.03)}sawHit(l,r,t,n){const s=this.ctx,a=s.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(160+40*r,l),a.frequency.linearRampToValueAtTime(240+60*r,l+.05),a.frequency.linearRampToValueAtTime(170,l+.16);const o=s.createBufferSource();o.buffer=this.noise;const i=s.createBiquadFilter();i.type="bandpass",i.frequency.value=1400,i.Q.value=1.5;const f=s.createBiquadFilter();f.type="lowpass",f.frequency.value=2600;const d=this.envelope(l,t?ie.sawRaspWoody:ie.sawRasp,.01,.16);a.connect(f),o.connect(i).connect(f),f.connect(d).connect(n),a.start(l),o.start(l,Math.random()*1.5),a.stop(l+.18),o.stop(l+.18),this.crackle({t:l+.01,gain:ie.sawLeaves,rate:1.4,out:n})}fireHit(l,r,t){const n=this.ctx,s=n.createBufferSource();s.buffer=this.noise;const a=n.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(400,l),a.frequency.exponentialRampToValueAtTime(1800+600*r,l+.05),a.frequency.exponentialRampToValueAtTime(500,l+.25),s.connect(a).connect(this.envelope(l,ie.fireWhoosh+.25*r,.03,.22)).connect(t),s.start(l,Math.random()*1.5),s.stop(l+.28),this.crackle({t:l+.04,gain:ie.burningLeaves,rate:.6,freq:1500,out:t}),this.crackle({t:l+.12,gain:ie.burningLeavesTail,rate:.5,freq:1200,out:t})}close(){var l;this.stopRunning(),(l=this.ctx)==null||l.close().catch(()=>{})}}const Mo="0 0 200 260",F3=Object.entries(Object.assign({"./art/vine-1.svg":L3,"./art/vine-2.svg":w3,"./art/vine-3.svg":M3,"./art/vine-4.svg":x3,"./art/vine-5.svg":S3,"./art/vine-6.svg":E3,"./art/vine-7.svg":_3,"./art/vine-8.svg":C3})).map(([e,l])=>({id:e.match(/(vine-\d+)\.svg$/)[1],body:l.replace(/^[\s\S]*?<svg[^>]*>/,"").replace(/<\/svg>\s*$/,"")})),D3=["#3b4a1e","#556b2f","#4a5a22","#6b5a2a"],xo=["click","dblclick","auxclick","mousedown","mouseup","contextmenu","dragstart","selectstart","touchstart","touchmove","touchend"];function O3({host:e,shadow:l,state:r,settings:t,blade:n,slashing:s,onChange:a,onCleared:o,onHud:i}){const f=yo(r.seed),d=Er(f,r,Sr(r,t.minutes)),v=t.enabled&&s1(d),p=new Set(r.cut),y=U3(),m=T.useRef(null),g=T.useRef(null);g.current||(g.current=new I3);const j=T.useRef(new Map),[h,u]=T.useState([]),[c,k]=T.useState([]),[,S]=T.useState(0),w=T.useRef();w.current={state:r,jungle:f,snap:d,blade:n,walled:v,onChange:a,onCleared:o,onHud:i,minutes:t.minutes},T.useEffect(()=>{s.current||(e.style.pointerEvents=v?"auto":"none")},[v]),T.useEffect(()=>()=>g.current.close(),[]),T.useEffect(()=>{const L=m.current,D=Z3();let C=null,ge=0,$e=[],Ge=0;const o1=(_,F)=>{if($e.push({x:_,y:F,t:performance.now()}),Ge)return;const fe=()=>{const q=performance.now();$e=$e.filter(Ze=>q-Ze.t<170),u($e),Ge=$e.length?requestAnimationFrame(fe):0};Ge=requestAnimationFrame(fe)},Wn=(_,F,fe,q,Ze)=>{const{state:J,jungle:x0,snap:t4,blade:Gn,minutes:To}=w.current,Zn=_.filter(Ee=>t4.grown[Ee]>0&&!J.cut.includes(Ee));if(!Zn.length)return;const n4=s1(Er(x0,J,Sr(J,To)));for(const Ee of Zn)j.current.set(Ee,q);J.cut.push(...Zn);const Po=performance.now();Po-ge>70&&(g.current.hit(Gn.sound,Ze,q,!0),ge=Po);const zo=Gn.bits||D3,s4=Array.from({length:Gn.sound==="fire"?12:6},(Ee,a4)=>({id:Math.random(),x:F,y:fe,color:zo[a4%zo.length]}));k(Ee=>[...Ee,...s4].slice(-60));const Cr=Er(x0,J,Sr(J,To));if(w.current.onHud({coverage:Cr.coverage,locked:s1(Cr)}),n4&&!s1(Cr)){for(const Ee of x0.clusters)Cr.grown[Ee.id]>0&&(j.current.set(Ee.id,q),J.cut.push(Ee.id));w.current.onCleared()}w.current.onChange(J),S(Ee=>Ee+1)},i1=_=>{if(_.preventDefault(),_.stopPropagation(),_.button!==0)return;s.current=!0,e.style.pointerEvents="auto",D.lock();try{L.setPointerCapture(_.pointerId)}catch{}C={x:_.clientX,y:_.clientY,t:performance.now()},g.current.startRunning(w.current.blade.sound),o1(_.clientX,_.clientY);const{snap:F}=w.current;w.current.onHud({coverage:F.coverage,locked:s1(F)})},f1=_=>{if(!s.current)return;_.preventDefault(),_.stopPropagation();const F=performance.now(),fe=_.clientX,q=_.clientY,Ze=Math.hypot(fe-C.x,q-C.y)/Math.max(1,F-C.t);g.current.setIntensity(Ze);const J=A3(l,C.x,C.y,fe,q,w.current.blade.reach);J.length&&Wn(J,fe,q,fe-C.x,Ze),C={x:fe,y:q,t:F},o1(fe,q)},M=_=>{if(s.current){s.current=!1,D.unlock(),g.current.stopRunning();try{L.releasePointerCapture(_.pointerId)}catch{}e.style.pointerEvents=w.current.walled?"auto":"none"}},P=_=>{_.cancelable&&_.preventDefault(),_.stopPropagation()},z=()=>{var _;return s.current&&((_=window.getSelection())==null?void 0:_.removeAllRanges())};L.addEventListener("pointerdown",i1),L.addEventListener("pointermove",f1),L.addEventListener("pointerup",M),L.addEventListener("pointercancel",M),L.addEventListener("lostpointercapture",M);for(const _ of xo)L.addEventListener(_,P,{passive:!1});return document.addEventListener("selectionchange",z),()=>{for(const _ of xo)L.removeEventListener(_,P);document.removeEventListener("selectionchange",z),cancelAnimationFrame(Ge),D.unlock()}},[]);const E=N3(n.id);return U.jsxs("div",{ref:m,style:{position:"absolute",inset:"0",touchAction:"none",cursor:E},children:[U.jsx($3,{}),U.jsx(H3,{coverage:d.coverage}),f.clusters.map(L=>U.jsx(V3,{c:L,grown:d.grown[L.id],isCut:p.has(L.id),fallDx:j.current.get(L.id)||0,cursor:E,W:y.W,H:y.H},`${f.seed}-${L.id}`)),U.jsx(W3,{points:h,style:n.trail}),c.map(L=>U.jsx(G3,{...L,onDone:()=>k(D=>D.filter(C=>C.id!==L.id))},L.id))]})}function A3(e,l,r,t,n,s){var p;const a=new Set,o=Math.hypot(t-l,n-r),i=Math.max(1,Math.ceil(o/10)),f=o?-(n-r)/o:0,d=o?(t-l)/o:1,v=s>0?[-s,0,s]:[0];for(let y=0;y<=i;y++){const m=l+(t-l)*y/i,g=r+(n-r)*y/i;for(const j of v)for(const h of e.elementsFromPoint(m+f*j,g+d*j)){const u=(p=h.getAttribute)==null?void 0:p.call(h,"data-cluster");u!=null&&a.add(Number(u))}}return[...a]}const $3=T.memo(function(){return U.jsx("svg",{width:"0",height:"0",style:{position:"absolute"},"aria-hidden":"true",children:F3.map(l=>U.jsx("symbol",{id:l.id,viewBox:Mo,dangerouslySetInnerHTML:{__html:l.body}},l.id))})});function U3(){const[e,l]=T.useState({W:innerWidth,H:innerHeight});return T.useEffect(()=>{const r=()=>l({W:innerWidth,H:innerHeight});return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),e}const _r=6;function B3(e,l,r){const[t,n]=e.edge==="top"?[e.along*l,-_r]:e.edge==="bottom"?[e.along*l,r+_r]:e.edge==="left"?[-_r,e.along*r]:[l+_r,e.along*r],s=Math.atan2(r/2-n,l/2-t)*180/Math.PI;return{left:`${t}px`,top:`${n}px`,rotate:s+90+e.tilt}}const V3=T.memo(function({c:l,grown:r,isCut:t,fallDx:n,cursor:s,W:a,H:o}){const i=T.useRef(null),f=T.useRef(t),d=T.useRef(r);if(t||(d.current=r),T.useEffect(()=>{if(!t||f.current)return;const g=(n>=0?1:-1)*t1(40,120);i.current.animate([{translate:"0 0",rotate:"0deg",opacity:1},{translate:`${n*3}px 110vh`,rotate:`${g}deg`,opacity:0}],{duration:1300,easing:"cubic-bezier(.45,0,.9,.6)",fill:"forwards"})},[t]),f.current)return null;const v=d.current,{left:p,top:y,rotate:m}=B3(l,a,o);return U.jsx("svg",{ref:i,viewBox:Mo,style:{position:"absolute",left:p,top:y,height:`${l.size}vmin`,width:`${l.size*200/260}vmin`,overflow:"visible",transformOrigin:"50% 100%",transform:`translate(-50%, -100%) rotate(${m}deg) scale(${l.flip?-v:v}, ${v})`,opacity:Math.min(1,v*4),pointerEvents:"none"},children:U.jsx("use",{href:`#vine-${l.design}`,"data-cluster":l.id,style:{pointerEvents:t||v===0?"none":"visiblePainted",cursor:s}})})});function H3({coverage:e}){return U.jsx("div",{style:{position:"absolute",inset:"0",pointerEvents:"none",background:"radial-gradient(ellipse at center, rgba(20,24,8,0) 30%, rgba(10,13,4,0.85) 100%), rgba(48,50,18,0.2)",opacity:Math.min(1,e)}})}function W3({points:e,style:l}){if(e.length<2)return null;const r=e.map(t=>`${t.x},${t.y}`).join(" ");return U.jsxs("svg",{style:{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none",overflow:"visible"},children:[U.jsx("polyline",{points:r,fill:"none",stroke:`rgba(${l.glow},0.35)`,strokeWidth:10*l.width,strokeLinecap:"round",strokeLinejoin:"round"}),U.jsx("polyline",{points:r,fill:"none",stroke:`rgba(${l.core},0.9)`,strokeWidth:3.5*l.width,strokeLinecap:"round",strokeLinejoin:"round"})]})}function G3({x:e,y:l,color:r,onDone:t}){const n=T.useRef(null),[s]=T.useState(()=>t1(3,7));return T.useEffect(()=>{const a=t1(-160,160),o=t1(-120,220),i=t1(-400,400),f=n.current.animate([{transform:"translate(0, 0) rotate(0deg)",opacity:1},{transform:`translate(${a}px, ${o}px) rotate(${i}deg)`,opacity:0}],{duration:700,easing:"cubic-bezier(.2,.6,.6,1)"});f.onfinish=t},[]),U.jsx("div",{ref:n,style:{position:"absolute",left:`${e}px`,top:`${l}px`,width:`${s}px`,height:`${s/2}px`,background:r,pointerEvents:"none"}})}function Z3(){let e=null;return{lock(){var r;if(e)return;const l=document.documentElement.style;e=[l.getPropertyValue("user-select"),l.getPropertyPriority("user-select")],l.setProperty("user-select","none","important"),l.setProperty("-webkit-user-select","none","important"),(r=window.getSelection())==null||r.removeAllRanges()},unlock(){if(!e)return;const l=document.documentElement.style;l.setProperty("user-select",e[0],e[1]),l.removeProperty("-webkit-user-select"),e=null}}}function K3(e,l){const[,r]=T.useState(0);T.useEffect(()=>{if(!e)return;const t=()=>{const n=Date.now();if(document.hidden){e.neglectSince||(e.neglectSince=n,l(e,!0));return}e.neglectSince&&(e.neglect+=n-e.neglectSince,e.neglectSince=null),e.url=location.href,l(e,!0),r(s=>s+1)};return document.addEventListener("visibilitychange",t),t(),()=>document.removeEventListener("visibilitychange",t)},[e,l])}function Y3(){const[e,l]=T.useState(null),r=T.useRef(null),t=T.useRef(0),n=e==null?void 0:e.id;T.useEffect(()=>{let i=!0;return X3().then(f=>i&&f&&l({id:f.tabId,state:g3(f.state)})).catch(()=>{}),()=>{i=!1}},[]);const s=T.useCallback(()=>{var f;clearTimeout(t.current);const i=r.current;!i||n==null||!((f=chrome.runtime)!=null&&f.id)||(r.current=null,chrome.storage.local.set({[Q3(n)]:i}).catch(()=>{}))},[n]),a=T.useCallback((i,f)=>{r.current=i,clearTimeout(t.current),f?s():t.current=setTimeout(s,250)},[s]),o=T.useCallback(i=>{l(f=>({...f,state:i})),a(i,!0)},[a]);return T.useEffect(()=>(window.addEventListener("pagehide",s),()=>window.removeEventListener("pagehide",s)),[s]),{state:(e==null?void 0:e.state)??null,persist:a,replace:o}}function X3(){return chrome.runtime.sendMessage({type:"hello",url:location.href})}const So="__overgrowth",Hn="overgrowth:takeover";function q3(){var o;if(window.top!==window||!((o=chrome.runtime)!=null&&o.id))return;window.dispatchEvent(new CustomEvent(Hn));const{host:e,shadow:l,mount:r}=J3(),t=po(r);let n=!1;const s=()=>{n||(n=!0,clearInterval(a),window.removeEventListener(Hn,s),t.unmount(),e.remove())};window.addEventListener(Hn,s);const a=setInterval(()=>{var i;return!((i=chrome.runtime)!=null&&i.id)&&s()},2e3);t.render(U.jsx(b3,{host:e,shadow:l}))}function J3(){var t;(t=document.getElementById(So))==null||t.remove();const e=document.createElement("div");e.id=So,e.style.cssText="all:initial;position:fixed;inset:0;z-index:2147483647;pointer-events:none;display:block;user-select:none;-webkit-user-select:none;";const l=e.attachShadow({mode:"closed"}),r=document.createElement("div");return r.style.cssText="position:absolute;inset:0;",l.append(r),document.documentElement.appendChild(e),{host:e,shadow:l,mount:r}}function b3({host:e,shadow:l}){const[r]=m3(),{state:t,persist:n,replace:s}=Y3(),a=_o(),o=_o(),i=T.useRef(!1);K3(t,n);const f=y=>!document.hidden&&a.show(y.text,y.ms),d=r==null?void 0:r.enabled;T.useEffect(()=>{e.style.display=d===!1?"none":"block"},[d]);const v=r&&t?c3(t,r.minutes):null;T.useEffect(()=>{!v||!d||document.hidden||(e.isConnected||document.documentElement.appendChild(e),!t.hinted&&v.coverage>.06&&(t.hinted=!0,n(t),f(Eo.hint)))});const p=()=>{f(Eo.cleared),setTimeout(()=>s({...y3(location.href),hinted:!0,neglectSince:null}),1500)};return!r||!t?null:U.jsxs(U.Fragment,{children:[U.jsx(O3,{host:e,shadow:l,state:t,settings:r,blade:k3(r.blade),slashing:i,onChange:n,onCleared:p,onHud:y=>o.show(y,2e3)}),U.jsx(l4,{message:a.value,visible:a.visible}),U.jsx(r4,{progress:o.value,visible:o.visible})]})}const Eo={hint:{text:"🌿 This tab is getting overgrown because you've left it alone. Slash through the vines to get to the page.",ms:8e3},cleared:{text:"✨ Cleared! The page is yours again… until it grows back.",ms:5e3}};function _o(){const[e,l]=T.useState(null),[r,t]=T.useState(!1),n=T.useRef(0),s=T.useCallback((a,o)=>{l(a),t(!0),clearTimeout(n.current),n.current=setTimeout(()=>t(!1),o)},[]);return T.useEffect(()=>()=>clearTimeout(n.current),[]),{value:e,visible:r,show:s}}const e4={position:"absolute",font:"600 14px/1.4 system-ui, -apple-system, sans-serif",color:"#e8f3d6",background:"rgba(16,26,10,.92)",border:"1px solid rgba(140,190,90,.35)",boxShadow:"0 8px 30px rgba(0,0,0,.45)",borderRadius:"12px",padding:"10px 16px",transition:"opacity .3s",pointerEvents:"none"};function Co({visible:e,style:l,children:r}){return U.jsx("div",{style:{...e4,...l,opacity:e?1:0},children:r})}function l4({message:e,visible:l}){return U.jsx(Co,{visible:l&&!!e,style:{left:"50%",bottom:"32px",transform:"translateX(-50%)",maxWidth:"80vw",textAlign:"center"},children:e})}function r4({progress:e,visible:l}){if(!e)return null;const r=e.locked?`🌿 ${Math.round(e.coverage*100)}% overgrown · get it to ${Math.round(go*100)}% to free the page`:"✨ Clear enough — the page is free";return U.jsx(Co,{visible:l,style:{right:"16px",top:"16px",fontSize:"13px",padding:"7px 12px"},children:r})}q3()})();
